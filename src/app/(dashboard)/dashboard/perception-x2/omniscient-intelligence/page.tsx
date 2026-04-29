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
  Heatmap,
  Gauge,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Activity,
  AlertCircle,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  Eye,
  Flame,
  Ghost,
  Globe,
  Heart,
  MessageSquare,
  Radar,
  Search,
  Shield,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  XCircle,
  Zap,
} from 'lucide-react'
import { perceptionData } from '@/lib/data-loader'

export default function OmniscientIntelligencePage() {
  // Extract real data from data loader
  const { darkSocial, cognitiveMap } = perceptionData.omniscientIntelligence
  // Dark social interception trends
  const darkSocialTrendData = [
    { month: 'Aug', whatsapp: 125000, telegram: 85000, forums: 45000, darkWeb: 12000 },
    { month: 'Sep', whatsapp: 132000, telegram: 92000, forums: 48000, darkWeb: 15000 },
    { month: 'Oct', whatsapp: 148000, telegram: 105000, forums: 52000, darkWeb: 18000 },
    { month: 'Nov', whatsapp: 155000, telegram: 118000, forums: 55000, darkWeb: 22000 },
    { month: 'Dec', whatsapp: 162000, telegram: 125000, forums: 58000, darkWeb: 25000 },
    { month: 'Jan', whatsapp: 175000, telegram: 135000, forums: 62000, darkWeb: 28000 },
  ]

  // Cognitive resonance dimensions (144-dimensional mapping summary)
  const cognitiveResonanceData = [
    { dimension: 'Trust', score: 78, velocity: 15 },
    { dimension: 'Anxiety', score: 62, velocity: 22 },
    { dimension: 'Confusion', score: 45, velocity: 18 },
    { dimension: 'Hope', score: 85, velocity: 12 },
    { dimension: 'Fear', score: 38, velocity: 25 },
    { dimension: 'Satisfaction', score: 72, velocity: 10 },
    { dimension: 'Uncertainty', score: 55, velocity: 20 },
    { dimension: 'Empowerment', score: 68, velocity: 14 },
  ]

  // Sentiment vector analysis
  const sentimentVectorData = [
    { source: 'WhatsApp', positive: 72, negative: 18, neutral: 10 },
    { source: 'Telegram', positive: 65, negative: 22, neutral: 13 },
    { source: 'Forums', positive: 58, negative: 28, neutral: 14 },
    { source: 'Dark Web', positive: 25, negative: 65, neutral: 10 },
  ]

  // Narrative void analysis
  const narrativeVoidData = [
    { topic: 'Mental Health', demand: 95, supply: 35, gap: 60 },
    { topic: 'Long COVID', demand: 88, supply: 42, gap: 46 },
    { topic: 'Mens Health', demand: 82, supply: 28, gap: 54 },
    { topic: 'Preventive Care', demand: 75, supply: 55, gap: 20 },
    { topic: 'Chronic Disease', demand: 70, supply: 60, gap: 10 },
  ]

  // Predictive accuracy trends
  const predictiveAccuracyData = [
    { week: 'W1', sentiment: 89, behavior: 82, crisis: 75 },
    { week: 'W2', sentiment: 91, behavior: 84, crisis: 78 },
    { week: 'W3', sentiment: 92, behavior: 86, crisis: 82 },
    { week: 'W4', sentiment: 94, behavior: 88, crisis: 85 },
  ]

  // NLA emotion extraction
  const nlaEmotionData = [
    { emotion: 'Joy', intensity: 72, trend: 5 },
    { emotion: 'Trust', intensity: 68, trend: 3 },
    { emotion: 'Fear', intensity: 42, trend: -8 },
    { emotion: 'Surprise', intensity: 55, trend: 12 },
    { emotion: 'Sadness', intensity: 38, trend: -5 },
    { emotion: 'Disgust', intensity: 25, trend: -2 },
    { emotion: 'Anger', intensity: 32, trend: -3 },
    { emotion: 'Anticipation', intensity: 58, trend: 8 },
  ]

  // Health myth prevalence
  const healthMythData = [
    { myth: 'Vaccine Causes Autism', belief: 15, reach: 25000 },
    { myth: 'Natural Remedies Superior', belief: 38, reach: 85000 },
    { myth: '5G Causes Virus', belief: 8, reach: 12000 },
    { myth: 'Detox Cures All', belief: 22, reach: 45000 },
    { myth: 'Big Pharma Conspiracy', belief: 28, reach: 52000 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-indigo">Omniscient Intelligence</h1>
          <p className="mt-2 text-slate-600">
            Dark social interception grid with 144-dimensional cognitive resonance mapping
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Deep Search
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Run Analysis
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Data Points Analyzed"
          value="4.7"
          unit="M"
          previousValue={4.1}
          icon={<Brain className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Dark Social Captured"
          value="847K"
          previousValue={723000}
          icon={<Ghost className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Cognitive Dimensions"
          value="144"
          unit="active"
          icon={<Sparkles className="h-6 w-6" />}
          gradient="cyan"
        />
        <MetricCard
          title="Prediction Accuracy"
          value="94.2%"
          previousValue={91.8}
          icon={<Target className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </div>

      <Tabs defaultValue="dark-social" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="dark-social">Dark Social Interception</TabsTrigger>
          <TabsTrigger value="extraction">Extraction Protocol</TabsTrigger>
          <TabsTrigger value="vector">Vector Analysis</TabsTrigger>
          <TabsTrigger value="war-room">War Room Sim</TabsTrigger>
          <TabsTrigger value="voids">Narrative Voids</TabsTrigger>
          <TabsTrigger value="cartography">Narrative Cartography</TabsTrigger>
          <TabsTrigger value="crt">Cognitive Resonance Map</TabsTrigger>
          <TabsTrigger value="predictions">Predictive Analytics</TabsTrigger>
          <TabsTrigger value="nla">NLA Engine</TabsTrigger>
          <TabsTrigger value="myths">Health Myths</TabsTrigger>
          <TabsTrigger value="emotions">Patient Emotions</TabsTrigger>
        </TabsList>

        {/* Dark Social Interception */}
        <TabsContent value="dark-social" className="space-y-6">
          {/* Dark Social Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dark Social Interception Trends</CardTitle>
                <CardDescription>6-month conversation volume by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={darkSocialTrendData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'whatsapp', name: 'WhatsApp', color: CHART_COLORS.denim },
                    { dataKey: 'telegram', name: 'Telegram', color: CHART_COLORS.purple },
                    { dataKey: 'forums', name: 'Forums', color: CHART_COLORS.indigo },
                    { dataKey: 'darkWeb', name: 'Dark Web', color: CHART_COLORS.rose },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sentiment Vector Analysis</CardTitle>
                <CardDescription>Positive vs. negative sentiment by source</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={sentimentVectorData}
                  xAxisKey="source"
                  bars={[
                    { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                    { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Dark Social Interception Grid" description="Capture and analyze invisible conversations" badge="AI-Powered">
            <div className="space-y-6">
              {/* Interception Sources */}
              <div className="grid gap-6 lg:grid-cols-3">
                {interceptionSources.map((source, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-${source.color} text-white`}>
                          {source.icon}
                        </div>
                        <Badge variant={source.color as any} className="text-xs">{source.volume}</Badge>
                      </div>
                      <CardTitle className="text-lg mt-3">{source.name}</CardTitle>
                      <CardDescription>{source.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Captured Today</span>
                          <span className="font-semibold text-slate-900">{source.captured}</span>
                        </div>
                        <Progress value={source.coverage} className="h-2" />
                        <div className="text-xs text-slate-500">{source.coverage}% coverage</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Sentiment</span>
                        <span className={`font-semibold ${source.sentiment > 70 ? 'text-emerald-600' : source.sentiment > 40 ? 'text-amber-600' : 'text-rose-600'}`}>
                          {source.sentiment}% positive
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Intercepted Conversations */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Recent Dark Social Captures</CardTitle>
                      <CardDescription>Conversations from private channels</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Eye className="h-3 w-3" />
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {interceptedConversations.map((conv, index) => (
                        <div key={index} className={`flex items-start gap-4 rounded-lg border-2 p-4 ${
                          conv.sentiment === 'negative' ? 'border-rose-200 bg-rose-50/30' :
                          conv.sentiment === 'positive' ? 'border-emerald-200 bg-emerald-50/30' :
                          'border-slate-200 bg-slate-50/30'
                        }`}>
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                            conv.source === 'WhatsApp' ? 'bg-emerald-100 text-emerald-600' :
                            conv.source === 'Telegram' ? 'bg-blue-100 text-blue-600' :
                            'bg-purple-100 text-purple-600'
                          }`}>
                            {conv.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-semibold text-slate-900">{conv.topic}</h4>
                                  <Badge variant={conv.sentiment === 'negative' ? 'destructive' : conv.sentiment === 'positive' ? 'success' : 'secondary'} className="text-xs">
                                    {conv.sentiment}
                                  </Badge>
                                </div>
                                <p className="mt-1 text-sm text-slate-600">{conv.excerpt}</p>
                                <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                                  <span>{conv.source}</span>
                                  <span>•</span>
                                  <span>{conv.participants} participants</span>
                                  <span>•</span>
                                  <span>{conv.reach} estimated reach</span>
                                </div>
                              </div>
                              <Badge variant={conv.urgency === 'high' ? 'destructive' : conv.urgency === 'medium' ? 'warning' : 'secondary'} className="text-xs">
                                {conv.urgency}
                              </Badge>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1 shrink-0">
                            <ArrowUpRight className="h-3 w-3" />
                            Analyze
                          </Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Narrative Extraction Protocol */}
        <TabsContent value="extraction" className="space-y-6">
          <GlassPanel title="Master Narrative Extraction Protocol" description="Level 5 Fidelity – Ultra-Comprehensive Edition" badge="AI-Powered">
            <div className="space-y-6">
              {/* Executive Summary */}
              <Card className="glass-card border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-900">Five-Vector Narrative Framework</CardTitle>
                  <CardDescription>Comprehensive analysis of myths, voids, tribes, bridges, and tone for Abu Dhabi healthcare</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-5">
                    <div className="p-3 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200 text-center">
                      <ShieldAlert className="h-6 w-6 text-rose-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-rose-900 text-sm">Myth Vector</h4>
                      <p className="text-xs text-slate-600 mt-1">7 Active Rumors</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-200 text-center">
                      <Ghost className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-amber-900 text-sm">Void Vector</h4>
                      <p className="text-xs text-slate-600 mt-1">6 Topic Gaps</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200 text-center">
                      <Users className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-emerald-900 text-sm">Tribe Vector</h4>
                      <p className="text-xs text-slate-600 mt-1">6 Archetypes</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-denim-50 rounded-lg border border-blue-200 text-center">
                      <MessageSquare className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-blue-900 text-sm">Bridge Vector</h4>
                      <p className="text-xs text-slate-600 mt-1">7 Influencers</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border border-purple-200 text-center">
                      <Sparkles className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-purple-900 text-sm">Tone Vector</h4>
                      <p className="text-xs text-slate-600 mt-1">7 Dimensions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Myth Vector */}
              <Card className="glass-card border-rose-200">
                <CardHeader>
                  <CardTitle className="text-lg text-rose-900">The Myth Vector: Active Health Rumours</CardTitle>
                  <CardDescription>Deep dive into Abu Dhabi's persistent health myths and underlying beliefs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-72">
                    <div className="space-y-3 pr-4">
                      {mythVector.map((myth, index) => (
                        <div key={index} className="p-3 bg-white/80 rounded-lg border border-rose-100 hover:border-rose-200 transition-colors">
                          <div className="flex items-start gap-3">
                            <Badge variant="rose" className="mt-0.5 shrink-0">{myth.category}</Badge>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 text-sm">{myth.title}</h4>
                              <p className="text-xs text-slate-600 mt-1 italic">&quot;{myth.snippet}&quot;</p>
                              <p className="text-xs text-slate-500 mt-2">{myth.analysis}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Void Vector */}
              <Card className="glass-card border-amber-200">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-900">The Void Vector: High-Demand Topics</CardTitle>
                  <CardDescription>Uncovering topics with high demand but low ADPHC visibility</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {voidVector.map((void_item, index) => (
                      <div key={index} className="p-3 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                        <h4 className="font-semibold text-amber-900 text-sm mb-1">{void_item.topic}</h4>
                        <p className="text-xs text-slate-700 mb-2">{void_item.demand}</p>
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                          <p className="text-xs text-slate-600">{void_item.gap}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tribe Vector */}
              <Card className="glass-card border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-lg text-emerald-900">The Tribe Vector: Psychographic Segmentation</CardTitle>
                  <CardDescription>Refined segmentation of Abu Dhabi's healthcare consumer population</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-72">
                    <div className="space-y-3 pr-4">
                      {tribeVector.map((tribe, index) => (
                        <div key={index} className="p-3 bg-white/80 rounded-lg border border-emerald-100 hover:border-emerald-200 transition-colors">
                          <div className="flex items-start gap-3">
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${tribe.color}`}>
                              {tribe.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 text-sm">{tribe.name}</h4>
                              <p className="text-xs text-slate-600 mt-1">{tribe.beliefs}</p>
                              <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                                <Badge variant="outline" className="text-xs">{tribe.channel}</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Bridge Vector */}
              <Card className="glass-card border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">The Bridge Vector: Key Influencer Bridges</CardTitle>
                  <CardDescription>Identifying and cultivating key influencer bridges for community trust</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-72">
                    <div className="space-y-3 pr-4">
                      {bridgeVector.map((bridge, index) => (
                        <div key={index} className="p-3 bg-white/80 rounded-lg border border-blue-100 hover:border-blue-200 transition-colors">
                          <div className="flex items-start gap-3">
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${bridge.color}`}>
                              {bridge.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 text-sm">{bridge.handle}</h4>
                              <p className="text-xs text-slate-600 mt-1">{bridge.bridge}</p>
                              <p className="text-xs text-slate-500 mt-2">{bridge.impact}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Tone Vector */}
              <Card className="glass-card border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-900">The Tone Vector: Linguistic Blueprint</CardTitle>
                  <CardDescription>Advanced guidelines for AI content generator</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {toneVector.map((tone, index) => (
                      <div key={index} className="p-3 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 text-sm mb-1">{tone.dimension}</h4>
                        <p className="text-xs text-slate-700 mb-2">{tone.pattern}</p>
                        <p className="text-xs text-slate-600">{tone.application}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Phase 2 & 3 */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm text-cyan-900">Phase 2: Data Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 shrink-0" />
                        <span><strong>Narrative Lab:</strong> Ingest Myth Vector entries into automated &quot;Radar vs. Reality&quot; trackers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 shrink-0" />
                        <span><strong>Audience Simulator:</strong> Populate with Tribe Vector profiles for message resonance modeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 shrink-0" />
                        <span><strong>Content Factory:</strong> Deploy Tone Vector rules for culturally aligned multilingual copy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 shrink-0" />
                        <span><strong>Influence Mapper:</strong> Overlay Bridge Vector with network centrality metrics</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm text-indigo-900">Phase 3: Dynamic Feedback Loop</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <Target className="h-4 w-4 text-indigo-600 mt-0.5 shrink-0" />
                        <span><strong>Monitor:</strong> Real-time sentiment analysis and social listening for emerging myths</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="h-4 w-4 text-indigo-600 mt-0.5 shrink-0" />
                        <span><strong>Simulate:</strong> Predict segment reactions using Audience Simulator before release</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="h-4 w-4 text-indigo-600 mt-0.5 shrink-0" />
                        <span><strong>Deploy:</strong> Launch AI-generated content through bridge influencers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="h-4 w-4 text-indigo-600 mt-0.5 shrink-0" />
                        <span><strong>Ethical Oversight:</strong> Review board to ensure accuracy and cultural sensitivity</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Vector Analysis - Master Narrative Extraction Protocol */}
        <TabsContent value="vector" className="space-y-6">
          <GlassPanel title="Master Narrative Extraction Protocol (Level 5 Fidelity)" description="Ultra-Comprehensive Strategic Blueprint – From Surveillance to Narrative Engineering" badge="AI-Powered">
            <div className="space-y-6">
              {/* Executive Strategic Preamble */}
              <Card className="glass-card border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-900">Strategic Evolution: From Listening to Engineering</CardTitle>
                  <CardDescription>The operational shift from Clairvoyance-CX (surveillance) to Perception-X2 (shaping)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-slate-700">
                    <p><strong>Clairvoyance-CX Legacy:</strong> Passive monitoring designed to track discourse volume, news cycles velocity, and outbreak geolocation. It answered the <em>what</em> and <em>where</em> but remained blind to the <em>why</em>.</p>
                    <p><strong>Perception-X2 Evolution:</strong> A categorical evolution from listening device to <em>shaping engine</em>. Mandate: engineer consensus by mapping the &quot;Collective Mind&quot;—unvoiced fears, latent beliefs, persistent myths, and dangerous narrative voids.</p>
                    <p><strong>Five-Vector Framework:</strong> Myth, Void, Tribe, Bridge, and Tone analysis harvested from deep digital ethnography, dark social sentiment analysis, and dissonance audits between official narratives and street reality.</p>
                    <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <p className="text-purple-900 font-semibold">Blueprint Objective:</p>
                      <p className="text-purple-700">Provide the raw psychological material required to transition the population from fragmented skepticism to unified health resilience through narrative engineering.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* VECTOR 1: THE MYTH VECTOR */}
              <Card className="glass-card border-rose-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-rose-900">Vector 1: The &quot;Myth&quot; Vector – Decoding the Rumor Ecosystem</CardTitle>
                      <CardDescription>Self-replicating narrative structures competing with official state narratives</CardDescription>
                    </div>
                    <Badge variant="rose" className="text-xs">4 Active Myths</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Schrödinger's Healthcare */}
                  <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                    <h4 className="font-semibold text-rose-900 mb-2">The Myth of &quot;Schrödinger&apos;s Healthcare&quot; and the Insurance Caste System</h4>
                    <p className="text-sm text-slate-700 mb-3">The belief that quality of care is not a medical constant but a variable strictly determined by insurance tier.</p>

                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="p-3 bg-white/80 rounded-lg border border-rose-100">
                        <h5 className="font-semibold text-rose-800 text-sm mb-1">&quot;Paracetamol&quot; Protocol (Basic Plan)</h5>
                        <p className="text-xs text-slate-600">Doctors incentivized to minimize costs → &quot;miraculous cures with paracetamol&quot; regardless of severity</p>
                        <Badge variant="warning" className="text-xs mt-2">Financial Anxiety</Badge>
                      </div>
                      <div className="p-3 bg-white/80 rounded-lg border border-rose-100">
                        <h5 className="font-semibold text-rose-800 text-sm mb-1">&quot;Upselling&quot; Protocol (VIP/Gold)</h5>
                        <p className="text-xs text-slate-600">System pivots to aggressive over-servicing → &quot;15 blood tests and 10 X-rays&quot; for a cold</p>
                        <Badge variant="warning" className="text-xs mt-2">Perceived as Looting</Badge>
                      </div>
                    </div>

                    <div className="mt-3 p-3 bg-rose-100 rounded-lg">
                      <p className="text-sm text-rose-800"><strong>Strategic Implication:</strong> Transactional Trust Model – patients view doctors as sales agents, not healers. Erodes compliance; genuine medical recommendations are suspected as financially motivated.</p>
                    </div>
                  </div>

                  {/* Casino of Coverage */}
                  <div className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-900 mb-2">The &quot;Casino of Coverage&quot; Myth</h4>
                    <p className="text-sm text-slate-700 mb-3">Insurance coverage is perceived as a gamble rather than a contract.</p>

                    <ScrollArea className="h-48">
                      <div className="space-y-2 pr-4">
                        {insuranceMyths.map((myth, index) => (
                          <div key={index} className="p-2 bg-white/80 rounded border border-amber-100">
                            <div className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                              <div>
                                <h5 className="font-semibold text-amber-900 text-xs">{myth.title}</h5>
                                <p className="text-xs text-slate-600">{myth.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>

                    <div className="mt-3 p-3 bg-amber-100 rounded-lg">
                      <p className="text-sm text-amber-800"><strong>Resulting Behavior:</strong> &quot;Medical Flight&quot; – Residents delay care or plan to travel to home countries for major procedures, viewing UAE system as financially predatory.</p>
                    </div>
                  </div>

                  {/* Dark Social Viral Ecosystem */}
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">The &quot;Dark Social&quot; Viral Ecosystem: The Nurse Voice Note</h4>
                    <p className="text-sm text-slate-700 mb-3">Insider leak phenomenon thriving in unmonitored WhatsApp groups.</p>

                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="p-3 bg-white/80 rounded-lg border border-purple-100">
                        <h5 className="font-semibold text-purple-800 text-sm mb-1">Voice Note Anatomy</h5>
                        <p className="text-xs text-slate-600">Breathless, urgent voice claiming to be nurse/doctor warning of &quot;deadly stomach virus&quot; government is allegedly hiding</p>
                      </div>
                      <div className="p-3 bg-white/80 rounded-lg border border-purple-100">
                        <h5 className="font-semibold text-purple-800 text-sm mb-1">Psychological Mechanism</h5>
                        <p className="text-xs text-slate-600">Exploits <strong>Authority Bias</strong> + <strong>High-Context Trust</strong> – forwarded by &quot;Auntie&quot; carries more weight than press releases</p>
                      </div>
                    </div>

                    <div className="mt-3 p-3 bg-purple-100 rounded-lg">
                      <p className="text-sm text-purple-800"><strong>Current Iterations:</strong> Stomach viruses in schools causing unnecessary absenteeism. Government&apos;s delayed text-based denials arrive too late.</p>
                    </div>
                  </div>

                  {/* Immunity Debt & Naturalist Fallacy */}
                  <div className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg border border-cyan-200">
                    <h4 className="font-semibold text-cyan-900 mb-2">The &quot;Immunity Debt&quot; and The Naturalist Fallacy</h4>
                    <p className="text-sm text-slate-700 mb-3">Growing undercurrent of vaccine skepticism despite high compliance rates.</p>

                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="p-3 bg-white/80 rounded-lg border border-cyan-100">
                        <h5 className="font-semibold text-cyan-800 text-sm mb-1">&quot;Overloaded System&quot; Narrative</h5>
                        <p className="text-xs text-slate-600">Parents feel vaccine schedule is becoming &quot;aggressive&quot; – &quot;My child&apos;s immune system is being overwhelmed&quot;</p>
                      </div>
                      <div className="p-3 bg-white/80 rounded-lg border border-cyan-100">
                        <h5 className="font-semibold text-cyan-800 text-sm mb-1">&quot;Naturalist&quot; Intersection</h5>
                        <p className="text-xs text-slate-600">Wellness influencers promoting &quot;clean living&quot; subtly push &quot;natural immunity is better than pharmaceutical&quot;</p>
                      </div>
                    </div>

                    <div className="mt-3 p-3 bg-cyan-100 rounded-lg">
                      <p className="text-sm text-cyan-800"><strong>Danger:</strong> When fitness influencer with 600k followers questions a vaccine, it creates &quot;cognitive permission structure&quot; for parents to opt out, threatening herd immunity.</p>
                    </div>
                  </div>

                  {/* Myth Vector Analysis Table */}
                  <div className="p-3 bg-white/80 rounded-lg border border-slate-200">
                    <h5 className="font-semibold text-slate-900 text-sm mb-2">Myth Vector Analysis Table</h5>
                    <ScrollArea className="h-40">
                      <table className="w-full text-xs">
                        <thead className="sticky top-0 bg-slate-50">
                          <tr className="border-b border-slate-200">
                            <th className="text-left p-2 font-semibold text-slate-700">Code</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Core Narrative</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Driver</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Target</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Danger</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mythAnalysisTable.map((myth, index) => (
                            <tr key={index} className="border-b border-slate-100">
                              <td className="p-2 font-mono text-xs text-purple-700">{myth.code}</td>
                              <td className="p-2 text-slate-900">{myth.narrative}</td>
                              <td className="p-2 text-slate-600">{myth.driver}</td>
                              <td className="p-2 text-slate-600">{myth.target}</td>
                              <td className="p-2">
                                <Badge variant={myth.danger === 'Critical' ? 'destructive' : myth.danger === 'High' ? 'rose' : 'warning'} className="text-xs">
                                  {myth.danger}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>

              {/* VECTOR 2: THE VOID VECTOR */}
              <Card className="glass-card border-amber-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-amber-900">Vector 2: The &quot;Void&quot; Vector – Mapping the Silence</CardTitle>
                      <CardDescription>High-demand topics where ADPHC silence creates anxiety and misinformation</CardDescription>
                    </div>
                    <Badge variant="warning" className="text-xs">4 Critical Voids</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">The &quot;Void&quot; represents dangerous territory: where the state is silent, the public fills the gap with anxiety, rumor, and peer-to-peer misinformation.</p>

                  {/* Autism Service Desert */}
                  <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                    <h4 className="font-semibold text-rose-900 mb-2">The &quot;Neurodevelopmental Abyss&quot;: The Autism Service Desert</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Badge variant="outline" className="text-xs shrink-0">Official Narrative</Badge>
                        <p className="text-sm text-slate-600">&quot;Inclusion,&quot; &quot;Strategy,&quot; &quot;World-Class Facilities&quot;</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Badge variant="outline" className="text-xs shrink-0">Lived Reality</Badge>
                        <p className="text-sm text-slate-600">Parents describe labyrinth of waiting lists, exorbitant costs, rejection. &quot;My son is autistic and can&apos;t get admission... almost every school says we don&apos;t have seats&quot;</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Badge variant="rose" className="text-xs shrink-0">The Void</Badge>
                        <p className="text-sm text-slate-600">No centralized, transparent roadmap for parents post-diagnosis. Silence interpreted as state apathy.</p>
                      </div>
                    </div>
                  </div>

                  {/* Mental Health Crisis */}
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">The &quot;Silent Crisis&quot;: Mental Health vs. The &quot;Autopilot&quot; Existence</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-700"><strong>Value Shift:</strong> For first time, UAE residents (Millennials/Gen Z) prioritize mental well-being over physical health.</p>
                      <p className="text-sm text-slate-700"><strong>Autopilot Narrative:</strong> Life described as living on &quot;autopilot mode&quot; – relentless cycle of work, bills, traffic, devoid of genuine community connection.</p>
                      <div className="p-2 bg-purple-100 rounded mt-2">
                        <p className="text-sm text-purple-800"><strong>The Void:</strong> Infrastructure weighted toward physical ailments. Clinical pathways for treating depression/burnout are opaque.</p>
                      </div>
                    </div>
                  </div>

                  {/* Elderly Isolation */}
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-denim-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">The &quot;Silver Tsunami&quot; Void: The Invisible Elderly</h4>
                    <p className="text-sm text-slate-700 mb-2">Rise in loneliness, excessive screen use, and depressive symptoms among elderly in Abu Dhabi.</p>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="p-2 bg-white/80 rounded border border-blue-100">
                        <p className="text-xs text-slate-700"><strong>Void:</strong> Lack of visible narrative around home care and geriatric support</p>
                      </div>
                      <div className="p-2 bg-white/80 rounded border border-blue-100">
                        <p className="text-xs text-slate-700"><strong>Feeling:</strong> Families feel abandoned. System perceived as &quot;youth-obsessed&quot;</p>
                      </div>
                    </div>
                  </div>

                  {/* Financial Toxicity */}
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-emerald-900 mb-2">The &quot;Financial Toxicity&quot; Void</h4>
                    <p className="text-sm text-slate-700 mb-2">While there is communication about <em>where</em> to get care, there is total void about <em>how to navigate the cost</em> of care.</p>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="p-2 bg-white/80 rounded border border-emerald-100">
                        <p className="text-xs text-slate-700"><strong>Fear:</strong> &quot;Surprise billing&quot; – co-pays, pre-approvals, rejections</p>
                      </div>
                      <div className="p-2 bg-white/80 rounded border border-emerald-100">
                        <p className="text-xs text-slate-700"><strong>Void:</strong> No &quot;Financial GPS&quot; – no explanation of appeals process, patient rights</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* VECTOR 3: THE TRIBE VECTOR */}
              <Card className="glass-card border-emerald-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-emerald-900">Vector 3: The &quot;Tribe&quot; Vector – Psychographic Segmentation</CardTitle>
                      <CardDescription>Map distinct psychographics of UAE sub-communities for hyper-realistic virtual personas</CardDescription>
                    </div>
                    <Badge variant="emerald" className="text-xs">4 Tribes</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">The &quot;Collective Mind&quot; is a fallacy; there are only &quot;Tribal Minds.&quot; Perception-X2 cannot broadcast a single frequency – it must transmit on specific wavelengths.</p>

                  <ScrollArea className="h-96">
                    <div className="space-y-4 pr-4">
                      {/* Tribe A: Anxious Expat Parent */}
                      <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                        <div className="flex items-start gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
                            <Heart className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-rose-900">TRIBE A: The &quot;Anxious Expat Parent&quot; (The Golden Cage)</h4>
                            <p className="text-xs text-slate-600 mt-1">Western and affluent Arab expats (UK, US, Europe, Levant). Mid-to-high income.</p>
                            <div className="mt-3 space-y-2 text-sm text-slate-700">
                              <p><strong>Dominant Narrative:</strong> &quot;I am safe physically, but financially vulnerable. I am one email away from losing everything.&quot;</p>
                              <ul className="space-y-1 text-xs">
                                <li>• <strong>Link between Health and Visa:</strong> Insurance tied to employment → health crisis = career/residency crisis</li>
                                <li>• <strong>Skepticism of &quot;Commercial Medicine&quot;:</strong> Belief doctors prescribe unnecessary antibiotics/tests to &quot;churn&quot; insurance</li>
                                <li>• <strong>&quot;School Gate&quot; Anxiety:</strong> Hyper-vigilant about respiratory viruses in schools</li>
                              </ul>
                              <p className="text-xs"><strong>Trusted Sources:</strong> British Mums Dubai/Abu Dhabi Facebook groups, WhatsApp circles, Western-board certified doctors</p>
                              <p className="text-xs"><strong>Narrative Trigger:</strong> <span className="text-rose-700">Data, Transparency, Validation</span></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tribe B: Aspirational Striver */}
                      <div className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                        <div className="flex items-start gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                            <Users className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-amber-900">TRIBE B: The &quot;Aspirational Striver&quot; (The Sandwich Generation)</h4>
                            <p className="text-xs text-slate-600 mt-1">South Asian (Indian/Pakistani) families. Mid-income. Long-term residents.</p>
                            <div className="mt-3 space-y-2 text-sm text-slate-700">
                              <p><strong>Dominant Narrative:</strong> &quot;I must sacrifice my present comfort for my children&apos;s future and my parents&apos; past.&quot;</p>
                              <ul className="space-y-1 text-xs">
                                <li>• <strong>Financial Burden:</strong> Squeezed between high school fees and supporting parents back home</li>
                                <li>• <strong>&quot;One Illness Away from Ruin&quot;:</strong> Even with insurance, co-pays or non-covered critical illnesses threaten stability</li>
                                <li>• <strong>Lifestyle Risks:</strong> High diabetes/heart issues, often ignored due to work pressure</li>
                              </ul>
                              <p className="text-xs"><strong>Trusted Sources:</strong> KMCC, Pakistan Association, &quot;Dirham Stretcher&quot; Facebook groups</p>
                              <p className="text-xs"><strong>Narrative Trigger:</strong> <span className="text-amber-700">Value, Community Support, Family Protection</span></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tribe C: Invisible Builder */}
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-denim-50 rounded-lg border border-blue-200">
                        <div className="flex items-start gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                            <Shield className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-blue-900">TRIBE C: The &quot;Invisible Builder&quot; (The Blue-Collar Cohort)</h4>
                            <p className="text-xs text-slate-600 mt-1">Low-income workers (Construction, Services). Predominantly South Asian and Filipino.</p>
                            <div className="mt-3 space-y-2 text-sm text-slate-700">
                              <p><strong>Dominant Narrative:</strong> &quot;Work is life. Sickness is a luxury I cannot afford.&quot;</p>
                              <ul className="space-y-1 text-xs">
                                <li>• <strong>Fear of Authority:</strong> View &quot;Government&quot; as disciplinary force – engaging is risky</li>
                                <li>• <strong>&quot;Deportation&quot; Fear:</strong> Reporting illness may lead to termination and deportation</li>
                                <li>• <strong>Digital Isolation:</strong> Information from TikTok, Facebook, peer word-of-mouth only</li>
                              </ul>
                              <p className="text-xs"><strong>Trusted Sources:</strong> &quot;Kabayan&quot; influencers, Camp Bosses, visual content creators</p>
                              <p className="text-xs"><strong>Narrative Trigger:</strong> <span className="text-blue-700">Safety, Free Access, Humor</span></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tribe D: Modern Traditionalist */}
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border border-purple-200">
                        <div className="flex items-start gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                            <Sparkles className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-purple-900">TRIBE D: The &quot;Modern Traditionalist&quot; (The Emirati National)</h4>
                            <p className="text-xs text-slate-600 mt-1">UAE Nationals</p>
                            <div className="mt-3 space-y-2 text-sm text-slate-700">
                              <p><strong>Dominant Narrative:</strong> &quot;We are a blessed nation, but modernity brings new challenges.&quot;</p>
                              <ul className="space-y-1 text-xs">
                                <li>• <strong>Cultural Dissonance:</strong> Tension between traditional hospitality (heavy food, gatherings) and modern health imperatives</li>
                                <li>• <strong>Trust in Leadership:</strong> High trust in Rulers and State, but skepticism of bureaucracy delivering services</li>
                                <li>• <strong>Genetic Awareness:</strong> Growing awareness of hereditary risks due to Genome Program</li>
                              </ul>
                              <p className="text-xs"><strong>Trusted Sources:</strong> Official Majlis, Family elders, influential Emirati doctors</p>
                              <p className="text-xs"><strong>Narrative Trigger:</strong> <span className="text-purple-700">National Pride, Heritage, Legacy</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* VECTOR 4: THE BRIDGE VECTOR */}
              <Card className="glass-card border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-blue-900">Vector 4: The &quot;Bridge&quot; Vector – Architecture of Influence</CardTitle>
                      <CardDescription>Identifying the exact influencers who act as bridges between government and communities</CardDescription>
                    </div>
                    <Badge variant="denim" className="text-xs">6 Bridge Types</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">Perception-X2 utilizes &quot;Human Bridges&quot; to carry narratives across the trust gap. Trust is not broadcast; it is <em>bridged</em>. These are not just celebrities—they are <strong>nodes of authority</strong> within their tribes.</p>

                  <div className="grid gap-4 md:grid-cols-2">
                    {/* White Coat Authorities */}
                    <div className="p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        White Coat Authority Bridges
                      </h4>
                      <p className="text-xs text-slate-600 mb-2">Possess &quot;dual legitimacy&quot; of medical expertise and social media savvy</p>
                      <ScrollArea className="h-40">
                        <div className="space-y-2 pr-2">
                          {whiteCoatBridges.map((bridge, index) => (
                            <div key={index} className="p-2 bg-white/80 rounded border border-emerald-100">
                              <p className="text-xs font-semibold text-emerald-800">{bridge.name}</p>
                              <p className="text-xs text-slate-600">{bridge.role}</p>
                              <p className="text-xs text-slate-500 mt-1">{bridge.target}</p>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>

                    {/* Cultural Connectors */}
                    <div className="p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        Cultural Connector Bridges
                      </h4>
                      <p className="text-xs text-slate-600 mb-2">Operate within linguistic/cultural frequencies official channels miss</p>
                      <ScrollArea className="h-40">
                        <div className="space-y-2 pr-2">
                          {culturalBridges.map((bridge, index) => (
                            <div key={index} className="p-2 bg-white/80 rounded border border-orange-100">
                              <p className="text-xs font-semibold text-orange-800">{bridge.name}</p>
                              <p className="text-xs text-slate-600">{bridge.description}</p>
                              <p className="text-xs text-slate-500 mt-1">{bridge.target}</p>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>

                    {/* Aesthetic Bridges */}
                    <div className="p-3 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border border-pink-200 md:col-span-2">
                      <h4 className="font-semibold text-pink-900 mb-2 flex items-center gap-2">
                        <Flame className="h-4 w-4" />
                        Aesthetic Bridges (Fitness &amp; Wellness)
                      </h4>
                      <div className="grid gap-2 md:grid-cols-2">
                        <div className="p-2 bg-white/80 rounded border border-pink-100">
                          <p className="text-xs font-semibold text-pink-800">Chahna Soni (674k followers)</p>
                          <p className="text-xs text-slate-600">Frames health as &quot;lifestyle optimization&quot; not disease prevention</p>
                        </div>
                        <div className="p-2 bg-white/80 rounded border border-pink-100">
                          <p className="text-xs font-semibold text-pink-800">Feras Mohib</p>
                          <p className="text-xs text-slate-600">Bridge to Millennial/Gen Z demographic that ignores clinical metrics</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bridge Vector Map Table */}
                  <div className="p-3 bg-white/80 rounded-lg border border-slate-200">
                    <h5 className="font-semibold text-slate-900 text-sm mb-2">The Bridge Vector Map</h5>
                    <ScrollArea className="h-36">
                      <table className="w-full text-xs">
                        <thead className="sticky top-0 bg-slate-50">
                          <tr className="border-b border-slate-200">
                            <th className="text-left p-2 font-semibold text-slate-700">Type</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Influencer/Node</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Target Tribe</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Function</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bridgeVectorTable.map((bridge, index) => (
                            <tr key={index} className="border-b border-slate-100">
                              <td className="p-2">
                                <Badge variant={bridge.type === 'White Coat' ? 'emerald' : bridge.type === 'Cultural' ? 'orange' : bridge.type === 'Lifestyle' ? 'rose' : 'denim'} className="text-xs">
                                  {bridge.type}
                                </Badge>
                              </td>
                              <td className="p-2 text-slate-900">{bridge.name}</td>
                              <td className="p-2 text-slate-600">{bridge.tribe}</td>
                              <td className="p-2 text-slate-600">{bridge.function}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>

              {/* VECTOR 5: THE TONE VECTOR */}
              <Card className="glass-card border-purple-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-purple-900">Vector 5: The &quot;Tone&quot; Vector – Linguistic Engineering</CardTitle>
                      <CardDescription>Analyze linguistic style of successful posts to train AI Content Generator</CardDescription>
                    </div>
                    <Badge variant="purple" className="text-xs">3 Dimensions</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                    <p className="text-sm text-rose-800"><strong>Critical Finding:</strong> Official ADPHC communication is too &quot;Deliberative&quot; when it needs to be &quot;Narrative.&quot;</p>
                  </div>

                  {/* Failure of Deliberative Register */}
                  <div className="p-4 bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">The Failure of &quot;Deliberative&quot; Register</h4>
                    <p className="text-sm text-slate-700 mb-2">Current state: Objective, formal, impersonal, fact-heavy</p>
                    <div className="p-2 bg-white/80 rounded border border-slate-200">
                      <p className="text-xs text-slate-600"><strong>Example:</strong> &quot;ADPHC announces transition of pest control services...&quot;</p>
                      <p className="text-xs text-slate-500 mt-1"><strong>Effect:</strong> Low engagement – demands cognitive effort, lacks emotional resonance. Feels like regulatory notice, not helpful guide.</p>
                    </div>
                  </div>

                  {/* Power of Inclusive Narrative */}
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-emerald-900 mb-2">The Power of &quot;Inclusive Narrative&quot;</h4>
                    <p className="text-sm text-slate-700 mb-2">Research proves <strong>Storytelling</strong> is superior engine for consensus</p>
                    <ScrollArea className="h-36">
                      <div className="space-y-2 pr-2">
                        {narrativeMechanics.map((mechanic, index) => (
                          <div key={index} className="p-2 bg-white/80 rounded border border-emerald-100">
                            <p className="text-xs font-semibold text-emerald-800">{mechanic.name}</p>
                            <p className="text-xs text-slate-600">{mechanic.description}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Visual Semiotics */}
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Visual Semiotics: The &quot;TikTok&quot; Aesthetic</h4>
                    <p className="text-sm text-slate-700 mb-2">For Tribe C and younger demographics, text is obsolete. Tone must be visual, fast-paced, set to trending audio.</p>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="p-2 bg-white/80 rounded border border-purple-100">
                        <p className="text-xs font-semibold text-purple-800">&quot;Micro-learning&quot; Videos</p>
                        <p className="text-xs text-slate-600">15-30 second debunking myths or &quot;behind the scenes&quot; hospital tours build trust through transparency</p>
                      </div>
                      <div className="p-2 bg-white/80 rounded border border-purple-100">
                        <p className="text-xs font-semibold text-purple-800">&quot;Lo-Fi&quot; Trust Signal</p>
                        <p className="text-xs text-slate-600">Handheld camera, direct eye contact, creator economy style feels more authentic than polished studio productions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* PHASE 2: DEEP RESEARCH INTEGRATION */}
              <Card className="glass-card border-cyan-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-cyan-900">Phase 2: Deep Research Integration</CardTitle>
                      <CardDescription>Synthesizing intelligence into actionable data structures for Perception-X2 modules</CardDescription>
                    </div>
                    <Badge variant="cyan" className="text-xs">2 Modules</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Narrative Lab */}
                  <div className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg border border-cyan-200">
                    <h4 className="font-semibold text-cyan-900 mb-2">Module 1: Narrative Lab (The Story Arc)</h4>
                    <p className="text-sm text-slate-700 mb-2">Populate &quot;Narrative Trajectory&quot; and &quot;Gravity Well&quot; widgets</p>

                    <div className="space-y-3">
                      <div className="p-2 bg-white/80 rounded border border-cyan-100">
                        <p className="text-xs font-semibold text-cyan-800">Dominant Narrative: &quot;Schrödinger&apos;s Healthcare&quot;</p>
                        <p className="text-xs text-slate-600">Public believes quality is <em>available</em> (world-class facilities exist) but <em>gated</em> by financial status</p>
                      </div>

                      <div className="p-2 bg-white/80 rounded border border-cyan-100">
                        <p className="text-xs font-semibold text-cyan-800">Emerging Anxieties (Top 3)</p>
                        <ul className="text-xs text-slate-600 space-y-1">
                          <li>1. School-Based Respiratory Viruses – Rise in &quot;viral cocktails&quot;</li>
                          <li>2. The &quot;Autism Void&quot; – Parents desperate for school seats and assessments</li>
                          <li>3. Job-Linked Health Security – Fear of losing job means losing insurance</li>
                        </ul>
                      </div>

                      <div className="p-2 bg-white/80 rounded border border-cyan-100">
                        <p className="text-xs font-semibold text-cyan-800">The &quot;Gravity Well&quot;: High-Engagement Topics</p>
                        <ul className="text-xs text-slate-600 space-y-1">
                          <li>• <strong>Emirati Genome Program:</strong> Speaks to future-proofing and heritage (non-invasive, high-tech, uniquely Emirati)</li>
                          <li>• <strong>&quot;Golden Visa&quot; for Frontline Heroes:</strong> Validates healthcare workforce, resonates with expat population</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Audience Simulation */}
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-indigo-900 mb-2">Module 2: Audience Simulation (The &quot;Persona Lab&quot;)</h4>
                    <p className="text-sm text-slate-700 mb-2">Construct hyper-realistic &quot;Virtual Personas&quot; for the simulation engine</p>

                    <ScrollArea className="h-56">
                      <div className="space-y-3 pr-2">
                        {personas.map((persona, index) => (
                          <div key={index} className={`p-3 rounded-lg border ${persona.color}`}>
                            <div className="flex items-start gap-2">
                              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded ${persona.iconColor}`}>
                                {persona.icon}
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-bold text-slate-900">{persona.name}</p>
                                <p className="text-xs text-slate-600">{persona.profile}</p>
                                <p className="text-xs text-slate-500 mt-1"><strong>Fear:</strong> {persona.fear}</p>
                                <p className="text-xs text-slate-500"><strong>Sources:</strong> {persona.sources}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>

              {/* STRATEGIC CONCLUSIONS */}
              <Card className="glass-card border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-purple-50">
                <CardHeader>
                  <CardTitle className="text-lg text-fuchsia-900">Strategic Conclusions &amp; Recommendations</CardTitle>
                  <CardDescription>The &quot;Collective Mind&quot; is a fragmented ecosystem of &quot;Tribal&quot; realities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 mb-4">Current ADPHC strategy (Clairvoyance-CX) fails because it broadcasts a single &quot;State Truth&quot; that doesn&apos;t penetrate distinct &quot;Reality Tunnels&quot; of tribes.</p>

                  <div className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="p-3 bg-white/80 rounded-lg border border-fuchsia-200">
                        <div className="flex items-start gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-fuchsia-100 text-fuchsia-600 font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-fuchsia-900">{rec.title}</p>
                            <p className="text-xs text-slate-600">{rec.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-fuchsia-100 rounded-lg border border-fuchsia-300">
                    <p className="text-sm text-fuchsia-900 font-semibold">By executing this protocol, Perception-X2 will not just listen to the noise of the city; it will tune the signal, aligning fragmented beliefs into a cohesive, resilient consensus.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* War Room Simulation - Crisis Response */}
        <TabsContent value="war-room" className="space-y-6">
          <GlassPanel title="Strategic Digital Health Security Assessment" description="UAE Information Ecosystem Analysis (2023–2025) – Crisis War Room Blueprint" badge="Simulation">
            <div className="space-y-6">
              {/* Executive Summary */}
              <Card className="glass-card border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-900">Executive Summary: The Dual-Front Theater</CardTitle>
                  <CardDescription>Digital information landscape evolution in UAE healthcare sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-slate-700">
                    <p>The digital domain operates as a parallel ecosystem characterized by high-velocity information flows, algorithmic amplification of unverified data, and significant influence of non-medical actors on public health behaviors.</p>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <p className="text-purple-900 font-semibold mb-2">Key Findings:</p>
                      <ul className="space-y-1 text-xs text-purple-800">
                        <li>• <strong>Verification Lag:</strong> 4-6 month gap between rumor proliferation and official correction creates windows for misinformation to metastasize</li>
                        <li>• <strong>Bridge Nodes:</strong> Lifestyle influencers often possess higher immediate trust capital than official channels within specific demographics</li>
                        <li>• <strong>Dark Social Dominance:</strong> WhatsApp voice notes and encrypted channels are the primary vectors for high-velocity rumors</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* MODULE 3: MISINFORMATION COMBAT */}
              <Card className="glass-card border-rose-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-rose-900">Module 3: Misinformation Combat (Truth vs. Myth)</CardTitle>
                      <CardDescription>Operational core of Crisis War Room simulation</CardDescription>
                    </div>
                    <Badge variant="rose" className="text-xs">Case Studies</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">High-impact misinformation event reconstruction: Counterfeit GLP-1 agonists (Ozempic) and vaccine hesitancy rumors.</p>

                  {/* Case Study A: Cheap Ozempic Mirage */}
                  <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                    <h4 className="font-semibold text-rose-900 mb-2">Case Study A: The &quot;Cheap Ozempic&quot; Mirage</h4>
                    <p className="text-sm text-slate-700 mb-3">Grey market pharmacology myth during global shortages (2023-2024)</p>

                    <div className="space-y-2">
                      <div className="p-2 bg-white/80 rounded border border-rose-100">
                        <p className="text-xs font-semibold text-rose-800">The &quot;Parallel Import&quot; Variant</p>
                        <p className="text-xs text-slate-600">Narrative that pens were genuine &quot;parallel imports&quot; from Egypt/Turkey with lower pricing – exploited cosmopolitan nature of UAE population</p>
                      </div>
                      <div className="p-2 bg-white/80 rounded border border-rose-100">
                        <p className="text-xs font-semibold text-rose-800">The &quot;Cosmetic Decoupling&quot; Variant</p>
                        <p className="text-xs text-slate-600">Dangerous sub-narrative decoupling Ozempic from medical identity – reframed as &quot;cosmetic lifestyle aid&quot; similar to supplements</p>
                      </div>
                      <div className="p-2 bg-white/80 rounded border border-rose-100">
                        <p className="text-xs font-semibold text-rose-800">The &quot;Big Pharma&quot; Conspiracy Variant</p>
                        <p className="text-xs text-slate-600">Warnings about fake pens containing insulin dismissed as &quot;fear-mongering&quot; by pharmaceutical companies maintaining high prices</p>
                      </div>
                    </div>
                  </div>

                  {/* Case Study B: Super-Flu Strain Rumors */}
                  <div className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-900 mb-2">Case Study B: The &quot;Super-Flu&quot; Strain Rumors</h4>
                    <p className="text-sm text-slate-700 mb-3">H3N2 subclade K variant rumors discouraging vaccination uptake</p>
                    <div className="p-2 bg-amber-100 rounded mt-2">
                      <p className="text-sm text-amber-800"><strong>Narrative:</strong> Existing flu vaccines were &quot;completely ineffective&quot; against mutated virus – feeding into residual vaccine fatigue and suggesting seasonal campaign was futile</p>
                    </div>
                  </div>

                  {/* Vector Analysis */}
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Vector Analysis: Dark Social Proliferation Mechanics</h4>
                    <div className="grid gap-3 md:grid-cols-3">
                      <div className="p-3 bg-white/80 rounded border border-purple-100">
                        <p className="text-xs font-semibold text-purple-800 mb-1">WhatsApp Voice Notes</p>
                        <p className="text-xs text-slate-600">The &quot;Digital Majlis&quot; – oral communication carries cultural primacy. Trusted community member recording voice: &quot;I just heard from a friend who works at...&quot;</p>
                      </div>
                      <div className="p-3 bg-white/80 rounded border border-purple-100">
                        <p className="text-xs font-semibold text-purple-800 mb-1">Visual Validation</p>
                        <p className="text-xs text-slate-600">TikTok/Instagram &quot;unboxing&quot; videos create &quot;visual truth&quot; hard to counter with text. Algorithms create echo chambers for weight loss content</p>
                      </div>
                      <div className="p-3 bg-white/80 rounded border border-purple-100">
                        <p className="text-xs font-semibold text-purple-800 mb-1">Encrypted Commerce</p>
                        <p className="text-xs text-slate-600">Telegram/Signal DMs coordinate sales – hidden economy shields transaction data from open-web monitoring tools</p>
                      </div>
                    </div>
                  </div>

                  {/* Official Counter-Narrative */}
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-emerald-900 mb-2">Official Counter-Narrative (Nov 2023)</h4>
                    <p className="text-sm text-slate-700 mb-3">DoH definitive bulletin dismantling &quot;Grey Market&quot; myth</p>
                    <ScrollArea className="h-40">
                      <div className="space-y-2 pr-2">
                        {officialCounterNarrative.map((item, index) => (
                          <div key={index} className="p-2 bg-white/80 rounded border border-emerald-100">
                            <p className="text-xs font-semibold text-emerald-800">{item.title}</p>
                            <p className="text-xs text-slate-600">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Verification Lag Analysis */}
                  <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
                    <h4 className="font-semibold text-cyan-900 mb-2">The Verification Lag: Time Gap Analysis</h4>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-center">
                        <Badge variant="rose" className="text-xs">Rumor Inception</Badge>
                        <p className="text-sm text-slate-600 mt-1">Early-Mid 2023</p>
                      </div>
                      <div className="flex-1 h-1 bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400 rounded"></div>
                      <div className="text-center">
                        <Badge variant="emerald" className="text-xs">Official Correction</Badge>
                        <p className="text-sm text-slate-600 mt-1">Nov 2023</p>
                      </div>
                    </div>
                    <div className="p-2 bg-cyan-100 rounded">
                      <p className="text-sm text-cyan-800"><strong>Gap Duration:</strong> Approximately 4-6 months</p>
                      <p className="text-xs text-cyan-700 mt-1">Structural causes: Burden of proof (lab analysis required), cross-border jurisdictional friction, signal-to-noise ratio issues</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* MODULE 4: NETWORK TOPOLOGY */}
              <Card className="glass-card border-emerald-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-emerald-900">Module 4: Echo Chamber Constructor</CardTitle>
                      <CardDescription>Network Topology – Mapping Bridge Nodes and Dark Social Hubs</CardDescription>
                    </div>
                    <Badge variant="emerald" className="text-xs">Super-Spreaders</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">Visualizing &quot;Human Infrastructure&quot; of UAE&apos;s digital health ecosystem – Bridge Nodes connect disparate social groups.</p>

                  {/* Super-Spreaders Table */}
                  <div className="p-3 bg-white/80 rounded-lg border border-slate-200">
                    <h5 className="font-semibold text-slate-900 text-sm mb-2">High-Trust Non-Medical Influencers</h5>
                    <ScrollArea className="h-56">
                      <table className="w-full text-xs">
                        <thead className="sticky top-0 bg-slate-50">
                          <tr className="border-b border-slate-200">
                            <th className="text-left p-2 font-semibold text-slate-700">Influencer</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Category & Reach</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Trust Mechanism</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Strategic Relevance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {superSpreaders.map((influencer, index) => (
                            <tr key={index} className="border-b border-slate-100">
                              <td className="p-2 font-semibold text-slate-900">{influencer.name}</td>
                              <td className="p-2 text-slate-600">{influencer.category}</td>
                              <td className="p-2 text-slate-600">{influencer.mechanism}</td>
                              <td className="p-2 text-slate-600">{influencer.relevance}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </ScrollArea>
                  </div>

                  {/* Dark Social Hubs */}
                  <div className="grid gap-4 md:grid-cols-3">
                    {darkSocialHubs.map((hub, index) => (
                      <div key={index} className={`p-4 rounded-lg border-2 ${hub.color}`}>
                        <div className="flex items-center gap-2 mb-2">
                          {hub.icon}
                          <h5 className="font-semibold text-slate-900">{hub.name}</h5>
                        </div>
                        <p className="text-xs text-slate-600 mb-2">{hub.platform}</p>
                        <div className="space-y-1">
                          <p className="text-xs"><strong>Scale:</strong> {hub.scale}</p>
                          <p className="text-xs"><strong>Role:</strong> {hub.role}</p>
                          <p className="text-xs"><strong>Function:</strong> {hub.function}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* MODULE 5: CONTENT FACTORY */}
              <Card className="glass-card border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-blue-900">Module 5: Content Factory (Strategic Action)</CardTitle>
                      <CardDescription>Voice & Tone Analysis – Training AI to replicate regulator brand voice</CardDescription>
                    </div>
                    <Badge variant="denim" className="text-xs">Brand Voice</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">The &quot;Techno-Benevolent&quot; Guardian – Authoritative yet accessible, technically precise yet culturally resonant.</p>

                  {/* Keyword Analysis */}
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-denim-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Keyword Analysis: The Adjective Profile</h4>
                    <p className="text-xs text-slate-600 mb-3">Deliberate choice of adjectives projecting stability, modernity, and comprehensive care</p>
                    <ScrollArea className="h-44">
                      <table className="w-full text-xs">
                        <thead className="sticky top-0 bg-slate-50">
                          <tr className="border-b border-slate-200">
                            <th className="text-left p-2 font-semibold text-slate-700">Rank</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Adjective</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Strategic Implication</th>
                          </tr>
                        </thead>
                        <tbody>
                          {adjectiveProfile.map((word, index) => (
                            <tr key={index} className="border-b border-slate-100">
                              <td className="p-2">
                                <Badge variant="denim" className="text-xs">#{index + 1}</Badge>
                              </td>
                              <td className="p-2 font-semibold text-blue-700">{word.word}</td>
                              <td className="p-2 text-slate-600">{word.implication}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </ScrollArea>
                  </div>

                  {/* Visual Style */}
                  <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border border-teal-200">
                    <h4 className="font-semibold text-teal-900 mb-2">Visual Style: The Aesthetic of Authority</h4>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold text-teal-800 mb-1">Color Palette</p>
                        <div className="flex gap-2">
                          <div className="w-8 h-8 rounded bg-amber-600" title="Falcon Gold"></div>
                          <div className="w-8 h-8 rounded bg-slate-800" title="Dark Grey"></div>
                          <div className="w-8 h-8 rounded bg-teal-500" title="Teal/Turquoise"></div>
                          <div className="w-8 h-8 rounded bg-white border" title="Clinical White"></div>
                        </div>
                        <p className="text-xs text-slate-600 mt-2">Primary: Falcon Gold & Dark Grey / Secondary: Teal & Clinical White</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-teal-800 mb-1">Iconography</p>
                        <p className="text-xs text-slate-600">Minimalist line art, human-centric photography (Emirati doctors/leadership), infographic architecture</p>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action Patterns */}
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-indigo-900 mb-2">Call to Action: The Partnership Invitation</h4>
                    <div className="space-y-2">
                      <div className="p-2 bg-white/80 rounded border border-indigo-100">
                        <p className="text-xs font-semibold text-indigo-800">Brand Slogan</p>
                        <p className="text-xs text-slate-600">&quot;A Healthier Abu Dhabi&quot; (#AHealthierAbuDhabi) – frames every action as contribution to collective goal</p>
                      </div>
                      <div className="p-2 bg-white/80 rounded border border-indigo-100">
                        <p className="text-xs font-semibold text-indigo-800">Emotional Closing</p>
                        <p className="text-xs text-slate-600">&quot;Your Health is Our Priority&quot; – reinforces benevolent guardian archetype</p>
                      </div>
                      <div className="p-2 bg-white/80 rounded border border-indigo-100">
                        <p className="text-xs font-semibold text-indigo-800">Action Drivers</p>
                        <p className="text-xs text-slate-600">&quot;Subscribe for updates&quot; / &quot;Contact Us&quot; (800555) / &quot;Adhere to circular...&quot;</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* STRATEGIC SYNTHESIS: WAR ROOM SIMULATION */}
              <Card className="glass-card border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-purple-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-fuchsia-900">Strategic Synthesis: War Room Simulation</CardTitle>
                      <CardDescription>Scenario Code Name: &quot;The Phantom Batch&quot;</CardDescription>
                    </div>
                    <Badge variant="fuchsia" className="text-xs">War Game</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">Based on Modules 3, 4, and 5 intelligence – Crisis War Room constructed scenario.</p>

                  {/* Phase 1: The Signal */}
                  <div className="p-4 bg-white/80 rounded-lg border border-rose-200">
                    <h5 className="font-semibold text-rose-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      Phase 1: The Signal (Dark Social Inception)
                    </h5>
                    <ScrollArea className="h-32">
                      <div className="space-y-2 pr-2">
                        {simulationPhases.filter((p) => p.phase === 'Signal').map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Badge variant="rose" className="text-xs shrink-0">{item.timeline}</Badge>
                            <p className="text-xs text-slate-700">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Phase 2: The Assessment */}
                  <div className="p-4 bg-white/80 rounded-lg border border-amber-200">
                    <h5 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                      <Search className="h-4 w-4" />
                      Phase 2: The Assessment (Truth vs. Myth)
                    </h5>
                    <ScrollArea className="h-28">
                      <div className="space-y-2 pr-2">
                        {simulationPhases.filter((p) => p.phase === 'Assessment').map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Badge variant="warning" className="text-xs shrink-0">{item.timeline}</Badge>
                            <p className="text-xs text-slate-700">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Phase 3: The Response */}
                  <div className="p-4 bg-white/80 rounded-lg border border-emerald-200">
                    <h5 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Phase 3: The Response (Content Factory)
                    </h5>
                    <div className="grid gap-3 md:grid-cols-2 mt-2">
                      <div className="p-3 bg-emerald-50 rounded border border-emerald-200">
                        <p className="text-xs font-semibold text-emerald-800 mb-1">Asset 1: Visual Truth Infographic</p>
                        <p className="text-xs text-slate-600">Teal background, Gold accent. Headline: &quot;Ensure Your Safety: Verify Before You Buy&quot;. Features Tatmeen app verification steps.</p>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded border border-emerald-200">
                        <p className="text-xs font-semibold text-emerald-800 mb-1">Asset 2: Bridge Node Brief</p>
                        <p className="text-xs text-slate-600">Target: Abu Dhabi Q&A Admins and Salama Mohamed. Stakeholder brief with confirmed WHO data on Batch MP5B060.</p>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="p-3 bg-fuchsia-100 rounded-lg border border-fuchsia-300">
                    <p className="text-sm text-fuchsia-900 font-semibold">The DoH&apos;s &quot;Information War&quot; will be won through strategic integration of forensic truth, network influence, and brand resonance. Leveraging Bridge Nodes and closing Verification Lag with rapid, voice-aligned content effectively immunizes population against digital misinformation.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Narrative Voids - Module 6 Scan & Dashboard Validation */}
        <TabsContent value="voids" className="space-y-6">
          {/* Narrative Void Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Demand vs. Supply Gap Analysis</CardTitle>
                <CardDescription>Topics with highest content vacuum</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={narrativeVoidData}
                  xAxisKey="topic"
                  bars={[
                    { dataKey: 'gap', name: 'Content Gap', color: CHART_COLORS.purple },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Topic Demand vs. Supply</CardTitle>
                <CardDescription>Public interest vs. official content availability</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={narrativeVoidData}
                  xAxisKey="topic"
                  areas={[
                    { dataKey: 'demand', name: 'Public Demand', color: CHART_COLORS.indigo },
                    { dataKey: 'supply', name: 'Official Supply', color: CHART_COLORS.emerald },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Strategic Narrative Void Scan" description="Module 6 Analysis & Perception-X2 Dashboard Validation – Health Discourse Gaps in Abu Dhabi" badge="Comprehensive">
            <div className="space-y-6">
              {/* Executive Summary */}
              <Card className="glass-card border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-900">Executive Summary: The Content Vacuum Analysis</CardTitle>
                  <CardDescription>Identifying discrepancies between public information-seeking behavior and available official guidance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-slate-700">
                    <p>Comprehensive &quot;Narrative Void&quot; scan executed for Module 6, targeting high-velocity topics—Biohacking, Men&apos;s Health, and Mental Health—where the &quot;content vacuum&quot; is filled by unregulated commercial actors or social media misinformation.</p>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <p className="text-purple-900 font-semibold mb-2">Key Findings:</p>
                      <ul className="space-y-1 text-xs text-purple-800">
                        <li>• <strong>Regulatory-Perception Gap:</strong> Public turns to private sector &quot;wellness&quot; marketing over centralized regulatory authority</li>
                        <li>• <strong>Safety Mirage:</strong> Licensing used as proxy for efficacy despite lack of clinical consensus</li>
                        <li>• <strong>Gendered Void:</strong> Men&apos;s health relegated to seasonal visibility, reinforcing cultural barriers</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Theoretical Framework */}
              <Card className="glass-card border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg">The Narrative Void: Theoretical Framework</CardTitle>
                  <CardDescription>Operational definitions and three primary vectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 mb-3">A &quot;Narrative Void&quot; is defined as an imbalance where high public demand is met with low or fragmented official guidance.</p>
                  <div className="grid gap-3 md:grid-cols-3">
                    {voidVectors.map((vector, index) => (
                      <div key={index} className={`p-3 rounded-lg border ${vector.color}`}>
                        <h5 className="font-semibold text-slate-900 text-sm mb-1">{vector.title}</h5>
                        <p className="text-xs text-slate-600">{vector.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* MODULE 6 DEEP DIVE: BIOHACKING FRONTIER */}
              <Card className="glass-card border-rose-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-rose-900">Module 6 Deep Dive: The Biohacking Frontier</CardTitle>
                      <CardDescription>Where performance optimization outpaces medical consensus</CardDescription>
                    </div>
                    <Badge variant="rose" className="text-xs">High Priority</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">The most volatile narrative void—IV Drip Therapy and Cryotherapy dominated by private sector marketing with regulatory silence on efficacy.</p>

                  {/* IV Drip Therapy */}
                  <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                    <h4 className="font-semibold text-rose-900 mb-2">IV Drip Therapy: The Wellness-Medical Ambiguity</h4>
                    <p className="text-sm text-slate-700 mb-3">Transitioned from clinical intervention to ubiquitous lifestyle commodity with &quot;Immediate Absorption&quot; narrative.</p>

                    <div className="grid gap-2 md:grid-cols-3">
                      {ivTherapyCategories.map((cat, index) => (
                        <div key={index} className="p-2 bg-white/80 rounded border border-rose-100">
                          <p className="text-xs font-semibold text-rose-800">{cat.name}</p>
                          <p className="text-xs text-slate-600">{cat.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 p-3 bg-rose-100 rounded-lg">
                      <p className="text-sm text-rose-900 font-semibold">The Safety Mirage:</p>
                      <p className="text-xs text-rose-800">Clinics use DoH licensing as proxy for efficacy. Consumers infer that because DoH allows service, DoH endorses benefits (e.g., skin improvement, detox). Void: No proactive DoH guide clarifying &quot;Licensing ensures sterility, not efficacy of wellness claims.&quot;</p>
                    </div>
                  </div>

                  {/* Cryotherapy */}
                  <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
                    <h4 className="font-semibold text-cyan-900 mb-2">Cryotherapy: The Industrialization of Recovery</h4>
                    <p className="text-sm text-slate-700 mb-3">Whole Body Cryotherapy moved from elite sports medicine to general wellness market driven by ROI.</p>

                    <div className="grid gap-2 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold text-cyan-800 mb-1">Economic Driver</p>
                        <p className="text-xs text-slate-600">Cryo chamber is ~EUR 100K investment but potent revenue generator. Marketed to widest demographic—not just athletes.</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-cyan-800 mb-1">Conditions Marketed</p>
                        <p className="text-xs text-slate-600">Weight Loss, Anti-Aging, Mood Enhancement—exposure to -110°C to -196°C for 3 minutes</p>
                      </div>
                    </div>

                    <div className="mt-3 p-2 bg-cyan-100 rounded">
                      <p className="text-xs text-cyan-800"><strong>Regulatory Gap:</strong> Contraindications (hypertension, pacemakers, cancer, pregnancy) buried in commercial FAQs rather than broadcast as public health advisories. Lack of neutral information for residents to assess safety.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* MODULE 6 DEEP DIVE: MEN'S HEALTH */}
              <Card className="glass-card border-emerald-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-emerald-900">Module 6 Deep Dive: Men&apos;s Health Discourse</CardTitle>
                      <CardDescription>The Silent Crisis and Cultural Barriers</CardDescription>
                    </div>
                    <Badge variant="emerald" className="text-xs">Gendered Void</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">Profound void in official Abu Dhabi health discourse—women&apos;s health has robust year-round campaigns, men&apos;s health relegated to seasonal visibility.</p>

                  {/* Seasonality Trap */}
                  <div className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-900 mb-2">The Seasonality Trap: &quot;Movember&quot; Limit</h4>
                    <p className="text-sm text-slate-700 mb-3">Official engagement episodic—November (Movember) and March (colorectal cancer). No sustained &quot;always-on&quot; campaign.</p>
                    <div className="p-2 bg-amber-100 rounded">
                      <p className="text-xs text-amber-800"><strong>The Void:</strong> Barriers men face (societal stigmas, apprehension over diagnosis, invasive screenings) are constant—not seasonal. Lack of continuity critical.</p>
                    </div>
                  </div>

                  {/* Test by Request Gap */}
                  <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border border-teal-200">
                    <h4 className="font-semibold text-teal-900 mb-2">The &quot;Test by Request&quot; Policy Gap</h4>
                    <p className="text-sm text-slate-700 mb-3">No national population-based screening program for prostate cancer—unlike Weqaya for cardiovascular risk.</p>
                    <div className="p-2 bg-teal-100 rounded">
                      <p className="text-xs text-teal-800"><strong>Consequence:</strong> &quot;Opportunistic screening&quot; relies on patient being informed and motivated. Educated/wealthy men screened (often over-screened), lower-income diagnosed late. Private sector fills gap with AED 999 commercial packages.</p>
                    </div>
                  </div>

                  {/* Mental Health & Male Demographic */}
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Mental Health & The Male Demographic</h4>
                    <div className="p-2 bg-purple-100 rounded">
                      <p className="text-xs text-purple-800"><strong>Deepest Void:</strong> DoH mental health guidelines exist but specific outreach to men—culturally conditioned to view stoicism as virtue—is minimal. Initiatives target &quot;families&quot; and &quot;schools,&quot; bypassing semantic triggers needed to engage men (performance, resilience, leadership).</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* PERCEPTION-X2 VALIDATION: OBESITY PARADIGM SHIFT */}
              <Card className="glass-card border-orange-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-orange-900">Phase 3 Validation: The Obesity Paradigm Shift</CardTitle>
                      <CardDescription>From lifestyle management to medicalized chronic care</CardDescription>
                    </div>
                    <Badge variant="orange" className="text-xs">Biosecurity</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">The Obesity Narrative in Abu Dhabi undergoing radical transformation—validating data for Perception-X2 Dashboard.</p>

                  {/* Policy Pivot Table */}
                  <div className="p-3 bg-white/80 rounded-lg border border-slate-200">
                    <h5 className="font-semibold text-slate-900 text-sm mb-2">The Obesity Narrative Shift</h5>
                    <ScrollArea className="h-36">
                      <table className="w-full text-xs">
                        <thead className="sticky top-0 bg-slate-50">
                          <tr className="border-b border-slate-200">
                            <th className="text-left p-2 font-semibold text-slate-700">Feature</th>
                            <th className="text-left p-2 font-semibold text-slate-700">Old (Lifestyle)</th>
                            <th className="text-left p-2 font-semibold text-slate-700">New (Medicalized)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {obesityNarrativeShift.map((row, index) => (
                            <tr key={index} className="border-b border-slate-100">
                              <td className="p-2 font-medium text-slate-900">{row.feature}</td>
                              <td className="p-2 text-slate-600">{row.old}</td>
                              <td className="p-2 text-slate-600">{row.new}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </ScrollArea>
                  </div>

                  {/* Fake Ozempic Threat */}
                  <div className="p-4 bg-gradient-to-br from-rose-50 to-red-50 rounded-lg border border-rose-200">
                    <h4 className="font-semibold text-rose-900 mb-2">The &quot;Fake Ozempic&quot; Active Threat</h4>
                    <p className="text-sm text-slate-700 mb-3">Medicalization created insatiable demand for GLP-1 agonists—dangerous black market emerged.</p>

                    <div className="space-y-2">
                      <div className="p-2 bg-white/80 rounded border border-rose-100">
                        <p className="text-xs font-semibold text-rose-800">Mussafah Connection</p>
                        <p className="text-xs text-slate-600">Police raids in Mussafah identified illegal storage for pharmaceutical products. Same criminal infrastructure for abortion pills repurposed for high-margin &quot;Fake Ozempic&quot; trade.</p>
                      </div>
                      <div className="p-2 bg-white/80 rounded border border-rose-100">
                        <p className="text-xs font-semibold text-rose-800">Risk Cascade</p>
                        <p className="text-xs text-slate-600">1) Fake pens contain insulin instead of semaglutide → hypoglycemic shock/death. 2) UK MHRA seized thousands globally. 3) High purchasing power + image-conscious culture = prime target.</p>
                      </div>
                    </div>

                    <div className="mt-3 p-2 bg-rose-100 rounded">
                      <p className="text-xs text-rose-800"><strong>The Void:</strong> Lack of high-decibel public awareness campaign teaching patients HOW to verify pen (2D barcode, blue/grey plunger mechanisms) rather than generic &quot;don&apos;t buy online&quot; warnings.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* PERCEPTION-X2 VALIDATION: ADULT ADHD */}
              <Card className="glass-card border-indigo-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-indigo-900">Phase 4 Validation: The Adult ADHD Opportunity</CardTitle>
                      <CardDescription>The &quot;Lost Generation&quot; and Economic Imperative</CardDescription>
                    </div>
                    <Badge variant="indigo" className="text-xs">Neglected</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">Adult ADHD verified as significant under-addressed opportunity—pediatric frameworks fail to address adult needs.</p>

                  {/* Diagnostic Gap */}
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-indigo-900 mb-2">The Diagnostic Gap: &quot;Lost Generation&quot;</h4>
                    <p className="text-sm text-slate-700 mb-3">Global prevalence 2.5-4.3% → tens of thousands of adults who navigated school before ADHD screening standardized.</p>
                    <div className="p-2 bg-indigo-100 rounded">
                      <p className="text-xs text-indigo-800"><strong>Policy Lag:</strong> ADPHC/ADEK guidelines heavily weighted toward school screening. ADHD defaults to &quot;childhood behavior disorder&quot; contexts. Adults with executive dysfunction often misdiagnosed with anxiety/depression.</p>
                    </div>
                  </div>

                  {/* Institutional Readiness */}
                  <div className="p-4 bg-white/80 rounded-lg border border-slate-200">
                    <h5 className="font-semibold text-slate-900 text-sm mb-2">Clinical Infrastructure Responding</h5>
                    <ScrollArea className="h-28">
                      <div className="space-y-2 pr-2">
                        {adultADHDProviders.map((provider, index) => (
                          <div key={index} className="p-2 bg-indigo-50 rounded border border-indigo-100">
                            <p className="text-xs font-semibold text-indigo-800">{provider.name}</p>
                            <p className="text-xs text-slate-600">{provider.description}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Economic Imperative */}
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <p className="text-sm text-indigo-900 font-semibold">Economic Imperative:</p>
                    <p className="text-xs text-indigo-800">Untreated adult ADHD linked to lower workforce productivity, higher absenteeism, relationship instability. Heritability (77-88%) suggests treating parents crucial for managing condition in children—&quot;whole family&quot; approach missing from narrative.</p>
                  </div>
                </CardContent>
              </Card>

              {/* EMERGING VOID: SCHOOL BIOSECURITY */}
              <Card className="glass-card border-cyan-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-cyan-900">Emerging Void: Seasonal Health & School Biosecurity</CardTitle>
                      <CardDescription>Parental compliance gap and vaccination disconnect</CardDescription>
                    </div>
                    <Badge variant="cyan" className="text-xs">New Frontier</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                    <p className="text-sm text-cyan-900 font-semibold mb-2">2025 Flu Narrative & School Policy</p>
                    <p className="text-xs text-cyan-800">ADEK issued strict Infection Prevention policies effective AY 2024/25. Must manage any symptom (runny nose, cough, body aches). Parental compliance gap—parents send sick children due to lack of childcare or symptom misunderstanding. Cycle of reinfection persists without parallel public education on home management.</p>
                  </div>
                </CardContent>
              </Card>

              {/* NETWORK ANALYSIS: KHALID AL AMERI */}
              <Card className="glass-card border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-purple-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-fuchsia-900">Network Analysis: The Khalid Al Ameri Strategy</CardTitle>
                      <CardDescription>Optimal &quot;Narrative Bridge&quot; for closing voids</CardDescription>
                    </div>
                    <Badge variant="fuchsia" className="text-xs">Influencer</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-white/80 rounded-lg">
                    <p className="text-sm text-fuchsia-900 font-semibold mb-2">Philosophy: &quot;Impact Over Numbers&quot;</p>
                    <p className="text-xs text-slate-700">Prioritizes impact and substance over vanity metrics. Argues relentless pursuit of views is destructive. Strategic alignment for public health requiring behavioral change (impact) not just awareness (views).</p>
                  </div>

                  <div className="p-3 bg-white/80 rounded-lg">
                    <h5 className="font-semibold text-slate-900 text-sm mb-2">Credibility & Narrative Alignment</h5>
                    <ScrollArea className="h-32">
                      <div className="space-y-2 pr-2">
                        {khalidAlAmeriCredentials.map((cred, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Badge variant="fuchsia" className="text-xs shrink-0">{cred.badge}</Badge>
                            <p className="text-xs text-slate-700">{cred.description}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>

              {/* STRATEGIC RECOMMENDATIONS */}
              <Card className="glass-card border-gold-200 bg-gradient-to-br from-amber-50 to-yellow-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-amber-900">Strategic Recommendations</CardTitle>
                      <CardDescription>5 key actions to close narrative voids and protect public health</CardDescription>
                    </div>
                    <Badge variant="gold" className="text-xs">Action Plan</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {strategicRecommendations.map((rec, index) => (
                      <div key={index} className="p-3 bg-white/80 rounded-lg border border-amber-200">
                        <div className="flex items-start gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-amber-900">{rec.title}</p>
                            <p className="text-xs text-slate-600 mt-1">{rec.mechanism}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-amber-100 rounded-lg border border-amber-300">
                    <p className="text-sm text-amber-900 font-semibold">Conclusion: Abu Dhabi stands at pivotal moment where health infrastructure is maturing into world-class system. However, the narrative governing how people use and perceive this system is lagging. By actively filling voids—rather than letting commercial noise fill them—the DoH can ensure population health behaviors are as advanced as the medical technology available.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Narrative Cartography - 50 Healthcare Narratives */}
        <TabsContent value="cartography" className="space-y-6">
          <GlassPanel title="Narrative Cartography of Abu Dhabi Healthcare Psyche" description="50 Distinct Narratives Mapping the Collective Consciousness (2024-2025)" badge="Comprehensive">
            <div className="space-y-6">
              {/* Strategic Overview */}
              <Card className="glass-card border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-900">Strategic Overview: The Theater of Mind</CardTitle>
                  <CardDescription>High-friction interface between Statist Utopia and Bureaucratic Labyrinth</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-slate-700">
                    <p>The collective consciousness operates between two competing psychological realities: the <strong>Statist Utopia</strong> and the <strong>Bureaucratic Labyrinth</strong>.</p>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <p className="text-purple-900 font-semibold mb-2">The Bifurcated Psyche:</p>
                      <ul className="space-y-1 text-xs text-purple-800">
                        <li>• <strong>Macro-Psyche:</strong> Trusts leadership implicitly, views Government as benevolent super-parent. Legacy of pandemic response cemented "Hero" archetype.</li>
                        <li>• <strong>Micro-Psyche:</strong> Daily lived experience riddled with anxiety regarding insurance tiers, opaque denial mechanisms, financial weaponization of compliance.</li>
                      </ul>
                    </div>
                    <p className="text-xs text-slate-600"><strong>50 Distinct Narratives</strong> categorized under three operational arcs: Hero (Salvation), Victim (Entrapment), and Progress (Evolution).</p>
                  </div>
                </CardContent>
              </Card>

              {/* THE HERO NARRATIVES */}
              <Card className="glass-card border-emerald-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-emerald-900">The Hero Narratives: Benevolent State & Technological Savior</CardTitle>
                      <CardDescription>17 stories of salvation, protection, and technological supremacy</CardDescription>
                    </div>
                    <Badge variant="emerald" className="text-xs">Hero Arc</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">The "Hero" narratives form the psychological bedrock of the emirate's stability. Core Belief: <strong>Authority is Competence</strong>.</p>

                  {/* Protective Father Archetype */}
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-emerald-900 mb-2">Archetype: The Protective Father</h4>
                    <p className="text-sm text-slate-700 mb-3">Stories of redemption and state protection</p>
                    <ScrollArea className="h-40">
                      <div className="space-y-2 pr-2">
                        {heroProtectiveFather.map((narrative, index) => (
                          <div key={index} className="p-2 bg-white/80 rounded border border-emerald-100">
                            <p className="text-xs font-semibold text-emerald-800">{narrative.id}. {narrative.title}</p>
                            <p className="text-xs text-slate-600">{narrative.coreBelief}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Magician Archetype */}
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Archetype: The Magician (Technological Supremacy)</h4>
                    <p className="text-sm text-slate-700 mb-3">Stories of medical miracles and technological dominance</p>
                    <ScrollArea className="h-40">
                      <div className="space-y-2 pr-2">
                        {heroMagician.map((narrative, index) => (
                          <div key={index} className="p-2 bg-white/80 rounded border border-purple-100">
                            <p className="text-xs font-semibold text-purple-800">{narrative.id}. {narrative.title}</p>
                            <p className="text-xs text-slate-600">{narrative.coreBelief}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>

              {/* THE VICTIM NARRATIVES */}
              <Card className="glass-card border-rose-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-rose-900">The Victim Narratives: Bureaucratic Labyrinth & The Fine Print</CardTitle>
                      <CardDescription>17 stories of entrapment, financial predation, and systemic opacity</CardDescription>
                    </div>
                    <Badge variant="rose" className="text-xs">Victim Arc</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">If the State is the Hero, the "System"—insurance companies, administrative portals, compliance officers—is the Villain. Characterized by <strong>anxiety, confusion, powerlessness</strong>.</p>

                  {/* The Trap Archetype */}
                  <div className="p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                    <h4 className="font-semibold text-rose-900 mb-2">Archetype: The Trap</h4>
                    <p className="text-sm text-slate-700 mb-3">Horror stories of fine print, surprise bills, and algorithmic denials</p>
                    <ScrollArea className="h-44">
                      <div className="space-y-2 pr-2">
                        {victimTrap.map((narrative, index) => (
                          <div key={index} className="p-2 bg-white/80 rounded border border-rose-100">
                            <p className="text-xs font-semibold text-rose-800">{narrative.id}. {narrative.title}</p>
                            <p className="text-xs text-slate-600">{narrative.coreBelief}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>

              {/* THE PROGRESS NARRATIVES */}
              <Card className="glass-card border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-blue-900">The Progress Narratives: Evolution, Genomics & The &quot;New Human&quot;</CardTitle>
                      <CardDescription>16 stories of future-proofing, human enhancement, and societal evolution</CardDescription>
                    </div>
                    <Badge variant="denim" className="text-xs">Progress Arc</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">These narratives represent the "Future Vector"—stories about where the country is <em>going</em>.</p>

                  {/* Futurist Archetype */}
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Archetype: The Futurist</h4>
                    <p className="text-sm text-slate-700 mb-3">Narratives of genetic mastery, wellness revolution, and human evolution</p>
                    <ScrollArea className="h-44">
                      <div className="space-y-2 pr-2">
                        {progressFuturist.map((narrative, index) => (
                          <div key={index} className="p-2 bg-white/80 rounded border border-blue-100">
                            <p className="text-xs font-semibold text-blue-800">{narrative.id}. {narrative.title}</p>
                            <p className="text-xs text-slate-600">{narrative.coreBelief}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>

              {/* VECTOR ANALYSIS */}
              <Card className="glass-card border-orange-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-orange-900">Vector Analysis: The Battlefield of Influence</CardTitle>
                      <CardDescription>Where narratives live and how they travel</CardDescription>
                    </div>
                    <Badge variant="orange" className="text-xs">Mapping</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-48">
                    <table className="w-full text-xs">
                      <thead className="sticky top-0 bg-slate-50">
                        <tr className="border-b border-slate-200">
                          <th className="text-left p-2 font-semibold text-slate-700">Vector Platform</th>
                          <th className="text-left p-2 font-semibold text-slate-700">Dominant Narrative</th>
                          <th className="text-left p-2 font-semibold text-slate-700">Primary Demographic</th>
                          <th className="text-left p-2 font-semibold text-slate-700">Characteristics</th>
                        </tr>
                      </thead>
                      <tbody>
                        {narrativeVectors.map((vector, index) => (
                          <tr key={index} className="border-b border-slate-100">
                            <td className="p-2 font-semibold text-slate-900">{vector.platform}</td>
                            <td className="p-2">
                              <Badge variant={vector.type === 'Hero' ? 'emerald' : vector.type === 'Victim' ? 'rose' : vector.type === 'Progress' ? 'denim' : 'orange'} className="text-xs">
                                {vector.type}
                              </Badge>
                            </td>
                            <td className="p-2 text-slate-600">{vector.demographic}</td>
                            <td className="p-2 text-slate-600">{vector.characteristics}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SYNTHESIS */}
              <Card className="glass-card border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-purple-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-fuchsia-900">Synthesis: The Cognitive Dissonance</CardTitle>
                      <CardDescription>Massive Information Asymmetry between Top-Down and Bottom-Up narratives</CardDescription>
                    </div>
                    <Badge variant="fuchsia" className="text-xs">Critical</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="p-3 bg-white/80 rounded-lg border border-emerald-200">
                        <p className="text-xs font-semibold text-emerald-800 mb-1">Top-Down (Government)</p>
                        <p className="text-xs text-slate-600">Pushes narratives of <strong>Structure, Future, and Technology</strong> (Hero/Progress)</p>
                      </div>
                      <div className="p-3 bg-white/80 rounded-lg border border-rose-200">
                        <p className="text-xs font-semibold text-rose-800 mb-1">Bottom-Up (People)</p>
                        <p className="text-xs text-slate-600">Generates narratives of <strong>Chaos, Cost, and Confusion</strong> (Victim)</p>
                      </div>
                    </div>

                    <div className="p-3 bg-fuchsia-100 rounded-lg">
                      <p className="text-sm text-fuchsia-900 font-semibold">The Cognitive Dissonance:</p>
                      <p className="text-xs text-fuchsia-800">Residents believe they are in the best healthcare system in the region (Hero), yet are terrified of getting sick due to administrative fallout (Victim). The "Hero" narrative is strong but brittle—relies on "Benevolent Father" intervening when "Bureaucratic Villain" goes too far.</p>
                    </div>

                    <div className="p-3 bg-white/80 rounded-lg border border-fuchsia-300">
                      <p className="text-sm text-fuchsia-900 font-semibold">Strategic Implication:</p>
                      <p className="text-xs text-slate-700">The battle for collective psyche will not be won by more technology (robots/AI), but by resolving the friction of the "Fine Print." The "Benevolent Father" must tame the "Insurance Algorithm" to harmonize the narrative landscape.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Cognitive Resonance Map */}
        <TabsContent value="crt" className="space-y-6">
          {/* CRT Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cognitive Dimension Analysis</CardTitle>
                <CardDescription>Top emotional dimensions with velocity tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={cognitiveResonanceData}
                  xAxisKey="dimension"
                  bars={[
                    { dataKey: 'score', name: 'Intensity Score', color: CHART_COLORS.indigo },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Emotional Velocity Tracking</CardTitle>
                <CardDescription>Rate of change for key dimensions</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={cognitiveResonanceData}
                  xAxisKey="dimension"
                  areas={[
                    { dataKey: 'velocity', name: 'Velocity', color: CHART_COLORS.purple },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Cognitive Resonance Technology (CRT)" description="144-dimensional emotional mapping of collective psyche">
            <div className="space-y-6">
              {/* CRT Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">144-Dimensional Emotional Map</CardTitle>
                      <CardDescription>Real-time emotional state tracking across UAE population</CardDescription>
                    </div>
                    <Badge variant="indigo" className="text-xs">Live</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-3">
                    {/* Primary Emotions */}
                    <div className="lg:col-span-2 space-y-4">
                      <h3 className="font-semibold text-slate-900">Primary Emotional Dimensions</h3>
                      {primaryEmotions.map((emotion, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {emotion.icon}
                              <span className="text-sm font-medium text-slate-700">{emotion.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className={`text-sm font-semibold ${emotion.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {emotion.change >= 0 ? <ArrowUp className="h-3 w-3 inline" /> : <ArrowDown className="h-3 w-3 inline" />}
                                {Math.abs(emotion.change)}%
                              </span>
                              <span className="text-sm font-bold text-slate-900">{emotion.value}%</span>
                            </div>
                          </div>
                          <Progress value={emotion.value} className="h-2" />
                          <div className="text-xs text-slate-500">{emotion.description}</div>
                        </div>
                      ))}
                    </div>

                    {/* Emotional Summary */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-slate-900">Emotional Summary</h3>
                      <div className="space-y-3">
                        <div className="text-center rounded-lg bg-emerald-50 p-4">
                          <div className="text-4xl font-extrabold text-emerald-600">+15%</div>
                          <div className="text-sm text-slate-600 mt-1">Overall Positive</div>
                        </div>
                        <div className="text-center rounded-lg bg-rose-50 p-4">
                          <div className="text-4xl font-extrabold text-rose-600">-8%</div>
                          <div className="text-sm text-slate-600 mt-1">Overall Negative</div>
                        </div>
                        <div className="text-center rounded-lg bg-slate-50 p-4">
                          <div className="text-4xl font-extrabold text-slate-600">+2%</div>
                          <div className="text-sm text-slate-600 mt-1">Neutral/Stable</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dimensional Breakdown */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Trust & Confidence</CardTitle>
                    <CardDescription>Institutional trust metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trustMetrics.map((metric, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-700">{metric.name}</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs ${metric.delta >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {metric.delta >= 0 ? '+' : ''}{metric.delta}%
                              </span>
                              <span className="text-sm font-bold text-slate-900">{metric.value}%</span>
                            </div>
                          </div>
                          <Progress value={metric.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emotional Clusters</CardTitle>
                    <CardDescription>Grouped psychological patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {emotionalClusters.map((cluster, index) => (
                        <div key={index} className="flex items-center gap-3 rounded-lg bg-slate-50/50 p-3">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${cluster.color}`}>
                            {cluster.icon}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-slate-900">{cluster.name}</div>
                            <div className="text-xs text-slate-500">{cluster.population}% of population</div>
                          </div>
                          <Badge variant={cluster.trend === 'growing' ? 'success' : cluster.trend === 'stable' ? 'denim' : 'warning'} className="text-xs">
                            {cluster.trend}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Predictive Analytics */}
        <TabsContent value="predictions" className="space-y-6">
          {/* Predictive Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Predictive Accuracy Trends</CardTitle>
                <CardDescription>4-week model performance tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={predictiveAccuracyData}
                  xAxisKey="week"
                  lines={[
                    { dataKey: 'sentiment', name: 'Sentiment Prediction', color: CHART_COLORS.indigo },
                    { dataKey: 'behavior', name: 'Behavior Prediction', color: CHART_COLORS.purple },
                    { dataKey: 'crisis', name: 'Crisis Prediction', color: CHART_COLORS.rose },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Overall Prediction Confidence</CardTitle>
                <CardDescription>Current model accuracy score</CardDescription>
              </CardHeader>
              <CardContent>
                <Gauge value={94} max={100} label="Accuracy Score" height={250} />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="AI Predictive Analytics" description="7-day sentiment and narrative forecasting" badge="Beta">
            <div className="space-y-6">
              {/* Prediction Confidence */}
              <div className="grid gap-6 lg:grid-cols-4">
                <Card className="glass-card text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-extrabold text-emerald-600">94.2%</div>
                    <div className="text-sm text-slate-600 mt-2">Overall Accuracy</div>
                  </CardContent>
                </Card>
                <Card className="glass-card text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-extrabold text-purple-600">7-day</div>
                    <div className="text-sm text-slate-600 mt-2">Forecast Window</div>
                  </CardContent>
                </Card>
                <Card className="glass-card text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-extrabold text-cyan-600">156</div>
                    <div className="text-sm text-slate-600 mt-2">Predictions Made</div>
                  </CardContent>
                </Card>
                <Card className="glass-card text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-extrabold text-indigo-600">89%</div>
                    <div className="text-sm text-slate-600 mt-2">Successful Hits</div>
                  </CardContent>
                </Card>
              </div>

              {/* Active Predictions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Active Predictions</CardTitle>
                  <CardDescription>AI-generated forecasts for the next 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {predictions.map((pred, index) => (
                      <div key={index} className={`flex items-start gap-4 rounded-lg border-2 p-4 ${
                        pred.confidence >= 80 ? 'border-emerald-200 bg-emerald-50/30' :
                        pred.confidence >= 60 ? 'border-amber-200 bg-amber-50/30' :
                        'border-slate-200 bg-slate-50/30'
                      }`}>
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                          pred.type === 'positive' ? 'bg-emerald-100 text-emerald-600' :
                          pred.type === 'negative' ? 'bg-rose-100 text-rose-600' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {pred.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold text-slate-900">{pred.title}</h4>
                                <Badge variant={pred.confidence >= 80 ? 'success' : pred.confidence >= 60 ? 'warning' : 'secondary'} className="text-xs">
                                  {pred.confidence}% confidence
                                </Badge>
                              </div>
                              <p className="mt-1 text-sm text-slate-600">{pred.description}</p>
                              <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                                <span>Expected: {pred.timeline}</span>
                                <span>•</span>
                                <span>Impact: {pred.impact}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="gap-1 shrink-0">
                              <Eye className="h-3 w-3" />
                              Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Past Performance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Prediction Performance</CardTitle>
                  <CardDescription>Historical accuracy of AI forecasts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pastPredictions.map((past, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-lg bg-slate-50/50 p-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          past.status === 'correct' ? 'bg-emerald-100 text-emerald-600' :
                          past.status === 'partial' ? 'bg-amber-100 text-amber-600' :
                          'bg-rose-100 text-rose-600'
                        }`}>
                          {past.status === 'correct' ? <CheckCircle2 className="h-5 w-5" /> :
                           past.status === 'partial' ? <AlertCircle className="h-5 w-5" /> :
                           <XCircle className="h-5 w-5" />}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900">{past.prediction}</div>
                          <div className="text-xs text-slate-500">{past.date}</div>
                        </div>
                        <Badge variant={past.status === 'correct' ? 'success' : past.status === 'partial' ? 'warning' : 'destructive'} className="text-xs">
                          {past.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* NLA Engine */}
        <TabsContent value="nla" className="space-y-6">
          <GlassPanel title="Neuro-Linguistic Architecture (NLA)" description="Industrial-scale natural language processing for sentiment analysis">
            <div className="space-y-6">
              {/* NLA Overview */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">NLA Engine Status</CardTitle>
                    <CardDescription>Processing performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Status</span>
                      <Badge variant="success" className="text-xs gap-1">
                        <Activity className="h-3 w-3" />
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Documents Processed</span>
                      <span className="text-sm font-bold text-slate-900">4.7M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Processing Speed</span>
                      <span className="text-sm font-bold text-slate-900">12.4K docs/min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Languages Supported</span>
                      <span className="text-sm font-bold text-slate-900">47</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Sentiment Accuracy</span>
                      <span className="text-sm font-bold text-emerald-600">94.2%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Language Distribution</CardTitle>
                    <CardDescription>Processed content by language</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {languages.map((lang, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-700">{lang.name}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-500">{lang.documents}M docs</span>
                              <span className="text-sm font-bold text-slate-900">{lang.percentage}%</span>
                            </div>
                          </div>
                          <Progress value={lang.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* NLP Capabilities */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">NLP Capabilities</CardTitle>
                  <CardDescription>Advanced language processing features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {nlpCapabilities.map((capability, index) => (
                      <div key={index} className="rounded-lg bg-gradient-indigo/5 border border-indigo-200 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-indigo text-white mb-3">
                          {capability.icon}
                        </div>
                        <div className="font-semibold text-slate-900 mb-1">{capability.name}</div>
                        <div className="text-sm text-slate-600">{capability.description}</div>
                        <div className="mt-2 text-xs text-slate-500">Accuracy: {capability.accuracy}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Health Myths - 50 UAE Health Myths & Cognitive Analysis */}
        <TabsContent value="myths" className="space-y-6">
          {/* Health Myths Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Health Myths by Belief Rate</CardTitle>
                <CardDescription>Percentage of population believing each myth</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={healthMythData}
                  xAxisKey="myth"
                  bars={[
                    { dataKey: 'belief', name: 'Belief Rate %', color: CHART_COLORS.orange },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Myth Reach & Impact</CardTitle>
                <CardDescription>Estimated reach of top health myths</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: 'Natural Remedies', value: 85000, color: CHART_COLORS.orange },
                    { name: 'Big Pharma', value: 52000, color: CHART_COLORS.purple },
                    { name: 'Detox Cures', value: 45000, color: CHART_COLORS.indigo },
                    { name: 'Vaccine Autism', value: 25000, color: CHART_COLORS.rose },
                    { name: '5G Virus', value: 12000, color: CHART_COLORS.denim },
                  ]}
                  donut={true}
                  height={250}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="The Cognitive Architecture of Resistance" description="Comprehensive analysis of 50 active health myths across 7 domains in the UAE" badge="Psychological Analysis">
            <div className="space-y-6">
              {/* Executive Summary */}
              <Card className="glass-card border-amber-200 bg-amber-50/30">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                      <AlertCircle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-amber-900">The Invisible Barrier to National Health Goals</CardTitle>
                      <CardDescription className="text-amber-700/80 mt-2">
                        This report catalogs 50 active health myths prevalent across the Emirates, analyzing the underlying cognitive drivers—the biases, heuristics, and cultural mental models—that sustain these misconceptions. These myths are not merely gaps in knowledge but are active forms of &quot;cognitive resistance&quot; that obstruct the nation&apos;s health agenda.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Key Insights Cards */}
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="glass-card border-rose-200 bg-rose-50/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="h-5 w-5 text-rose-600" />
                      <h4 className="font-semibold text-rose-900">The &quot;Natural&quot; Trap</h4>
                    </div>
                    <p className="text-sm text-rose-700">Dates, Honey, Dokha, Camel Milk – dangerous assumption that &quot;natural&quot; equals &quot;safe.&quot; Highest risk category for chronic disease management.</p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-amber-200 bg-amber-50/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldAlert className="h-5 w-5 text-amber-600" />
                      <h4 className="font-semibold text-amber-900">The Safety Paradox</h4>
                    </div>
                    <p className="text-sm text-amber-700">Insurance and Antibiotics – desire for absolute security leads to behaviors that actually increase risk (under-insurance or antibiotic resistance).</p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-purple-200 bg-purple-50/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-purple-600" />
                      <h4 className="font-semibold text-purple-900">The Sensory Decoy</h4>
                    </div>
                    <p className="text-sm text-purple-700">Bakhour smells good, Shisha tastes sweet, Dates taste holy – sensory experience overrides invisible biological toxicity.</p>
                  </CardContent>
                </Card>
              </div>

              {/* SECTION I: Security Paradox (Insurance Myths 1-10) */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section I: The Security Paradox</CardTitle>
                      <CardDescription>Insurance and Systemic Misconceptions (Myths 1-10)</CardDescription>
                    </div>
                    <Badge variant="warning" className="text-xs">Optimism Bias &amp; Trust Heuristic</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[800px]">
                    <div className="space-y-4 pr-4">
                      {securityParadoxMyths.map((myth, index) => (
                        <Card key={index} className={`border-2 ${myth.riskLevel === 'CRITICAL' ? 'border-rose-300 bg-rose-50/30' : myth.riskLevel === 'HIGH' ? 'border-orange-300 bg-orange-50/30' : myth.riskLevel === 'MEDIUM' ? 'border-amber-300 bg-amber-50/30' : 'border-slate-200 bg-slate-50/30'}`}>
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant={myth.riskLevel === 'CRITICAL' ? 'destructive' : myth.riskLevel === 'HIGH' ? 'red' : myth.riskLevel === 'MEDIUM' ? 'warning' : 'secondary'} className="text-xs">
                                    {myth.riskLevel}
                                  </Badge>
                                  <h4 className="font-bold text-slate-900">#{myth.id}: {myth.title}</h4>
                                </div>
                                <p className="text-sm font-medium text-slate-700 italic">&quot;{myth.belief}&quot;</p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                <span className="text-sm font-semibold text-slate-900">The Reality:</span>
                              </div>
                              <p className="text-sm text-slate-700 pl-6">{myth.reality}</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Brain className="h-4 w-4 text-indigo-600" />
                                <span className="text-sm font-semibold text-slate-900">Cognitive Driver: <span className="text-indigo-700">{myth.driver}</span></span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION II: Pharmacological Fallacy (Medication Myths 11-21) */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section II: The Pharmacological Fallacy</CardTitle>
                      <CardDescription>Treatment, Medication, and &quot;Miracle&quot; Cures (Myths 11-21)</CardDescription>
                    </div>
                    <Badge variant="rose" className="text-xs">Action Bias &amp; Naturalistic Fallacy</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[800px]">
                    <div className="space-y-4 pr-4">
                      {pharmacologicalMyths.map((myth, index) => (
                        <Card key={index} className={`border-2 ${myth.riskLevel === 'CRITICAL' ? 'border-rose-300 bg-rose-50/30' : myth.riskLevel === 'HIGH' ? 'border-orange-300 bg-orange-50/30' : myth.riskLevel === 'MEDIUM' ? 'border-amber-300 bg-amber-50/30' : 'border-slate-200 bg-slate-50/30'}`}>
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant={myth.riskLevel === 'CRITICAL' ? 'destructive' : myth.riskLevel === 'HIGH' ? 'red' : myth.riskLevel === 'MEDIUM' ? 'warning' : 'secondary'} className="text-xs">
                                    {myth.riskLevel}
                                  </Badge>
                                  <h4 className="font-bold text-slate-900">#{myth.id}: {myth.title}</h4>
                                </div>
                                <p className="text-sm font-medium text-slate-700 italic">&quot;{myth.belief}&quot;</p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                <span className="text-sm font-semibold text-slate-900">The Reality:</span>
                              </div>
                              <p className="text-sm text-slate-700 pl-6">{myth.reality}</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Brain className="h-4 w-4 text-indigo-600" />
                                <span className="text-sm font-semibold text-slate-900">Cognitive Driver: <span className="text-indigo-700">{myth.driver}</span></span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION III: Nutritional Mirage (Diet Myths 33-39, 40) */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section III: The Nutritional Mirage</CardTitle>
                      <CardDescription>Superfoods, Staples, and Metabolic Myths (Myths 33-40)</CardDescription>
                    </div>
                    <Badge variant="gold" className="text-xs">Halo Effect &amp; Appeal to Antiquity</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[700px]">
                    <div className="space-y-4 pr-4">
                      {nutritionalMyths.map((myth, index) => (
                        <Card key={index} className={`border-2 ${myth.riskLevel === 'CRITICAL' ? 'border-rose-300 bg-rose-50/30' : myth.riskLevel === 'HIGH' ? 'border-orange-300 bg-orange-50/30' : myth.riskLevel === 'MEDIUM' ? 'border-amber-300 bg-amber-50/30' : 'border-slate-200 bg-slate-50/30'}`}>
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant={myth.riskLevel === 'CRITICAL' ? 'destructive' : myth.riskLevel === 'HIGH' ? 'red' : myth.riskLevel === 'MEDIUM' ? 'warning' : 'secondary'} className="text-xs">
                                    {myth.riskLevel}
                                  </Badge>
                                  <h4 className="font-bold text-slate-900">#{myth.id}: {myth.title}</h4>
                                </div>
                                <p className="text-sm font-medium text-slate-700 italic">&quot;{myth.belief}&quot;</p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                <span className="text-sm font-semibold text-slate-900">The Reality:</span>
                              </div>
                              <p className="text-sm text-slate-700 pl-6">{myth.reality}</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Brain className="h-4 w-4 text-indigo-600" />
                                <span className="text-sm font-semibold text-slate-900">Cognitive Driver: <span className="text-indigo-700">{myth.driver}</span></span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION IV: Environmental Dissonance (Climate Myths 22-32, 40) */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section IV: Environmental Dissonance</CardTitle>
                      <CardDescription>Adaptation to Climate and Lifestyle (Myths 22-32, 40)</CardDescription>
                    </div>
                    <Badge variant="cyan" className="text-xs">False Cause &amp; Anchoring</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[700px]">
                    <div className="space-y-4 pr-4">
                      {environmentalMyths.map((myth, index) => (
                        <Card key={index} className={`border-2 ${myth.riskLevel === 'CRITICAL' ? 'border-rose-300 bg-rose-50/30' : myth.riskLevel === 'HIGH' ? 'border-orange-300 bg-orange-50/30' : myth.riskLevel === 'MEDIUM' ? 'border-amber-300 bg-amber-50/30' : 'border-slate-200 bg-slate-50/30'}`}>
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant={myth.riskLevel === 'CRITICAL' ? 'destructive' : myth.riskLevel === 'HIGH' ? 'red' : myth.riskLevel === 'MEDIUM' ? 'warning' : 'secondary'} className="text-xs">
                                    {myth.riskLevel}
                                  </Badge>
                                  <h4 className="font-bold text-slate-900">#{myth.id}: {myth.title}</h4>
                                </div>
                                <p className="text-sm font-medium text-slate-700 italic">&quot;{myth.belief}&quot;</p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                <span className="text-sm font-semibold text-slate-900">The Reality:</span>
                              </div>
                              <p className="text-sm text-slate-700 pl-6">{myth.reality}</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Brain className="h-4 w-4 text-indigo-600" />
                                <span className="text-sm font-semibold text-slate-900">Cognitive Driver: <span className="text-indigo-700">{myth.driver}</span></span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION V: Cultural Subconscious (Folklore Myths 41-46) */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section V: The Cultural Subconscious</CardTitle>
                      <CardDescription>Tradition, Folklore, and Mental Health (Myths 41-46)</CardDescription>
                    </div>
                    <Badge variant="fuchsia" className="text-xs">Appeal to Tradition &amp; Magical Thinking</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px]">
                    <div className="space-y-4 pr-4">
                      {culturalMyths.map((myth, index) => (
                        <Card key={index} className={`border-2 ${myth.riskLevel === 'CRITICAL' ? 'border-rose-300 bg-rose-50/30' : myth.riskLevel === 'HIGH' ? 'border-orange-300 bg-orange-50/30' : myth.riskLevel === 'MEDIUM' ? 'border-amber-300 bg-amber-50/30' : 'border-slate-200 bg-slate-50/30'}`}>
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant={myth.riskLevel === 'CRITICAL' ? 'destructive' : myth.riskLevel === 'HIGH' ? 'red' : myth.riskLevel === 'MEDIUM' ? 'warning' : 'secondary'} className="text-xs">
                                    {myth.riskLevel}
                                  </Badge>
                                  <h4 className="font-bold text-slate-900">#{myth.id}: {myth.title}</h4>
                                </div>
                                <p className="text-sm font-medium text-slate-700 italic">&quot;{myth.belief}&quot;</p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                <span className="text-sm font-semibold text-slate-900">The Reality:</span>
                              </div>
                              <p className="text-sm text-slate-700 pl-6">{myth.reality}</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Brain className="h-4 w-4 text-indigo-600" />
                                <span className="text-sm font-semibold text-slate-900">Cognitive Driver: <span className="text-indigo-700">{myth.driver}</span></span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION VI: Developmental Delusions (Pediatric Myths 47-49) */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section VI: Developmental Delusions</CardTitle>
                      <CardDescription>Pediatric and Maternal Health (Myths 47-49)</CardDescription>
                    </div>
                    <Badge variant="rose" className="text-xs">Quantitative Fallacy &amp; Illusory Correlation</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
                    {pediatricMyths.map((myth, index) => (
                      <Card key={index} className={`border-2 ${myth.riskLevel === 'CRITICAL' ? 'border-rose-300 bg-rose-50/30' : myth.riskLevel === 'HIGH' ? 'border-orange-300 bg-orange-50/30' : myth.riskLevel === 'MEDIUM' ? 'border-amber-300 bg-amber-50/30' : 'border-slate-200 bg-slate-50/30'}`}>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <Badge variant={myth.riskLevel === 'CRITICAL' ? 'destructive' : myth.riskLevel === 'HIGH' ? 'red' : myth.riskLevel === 'MEDIUM' ? 'warning' : 'secondary'} className="text-xs">
                              {myth.riskLevel}
                            </Badge>
                            <span className="text-xs font-bold text-slate-500">#{myth.id}</span>
                          </div>
                          <CardTitle className="text-base font-bold">{myth.title}</CardTitle>
                          <p className="text-xs text-slate-600 italic mt-1">&quot;{myth.belief}&quot;</p>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                              <span className="text-xs font-semibold text-slate-900">Reality:</span>
                            </div>
                            <p className="text-xs text-slate-700 pl-4">{myth.reality}</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <Brain className="h-3 w-3 text-indigo-600" />
                              <span className="text-xs font-semibold text-slate-900">Driver: <span className="text-indigo-700">{myth.driver}</span></span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* SECTION VII: Aesthetic Imperative (Beauty Myth 50) */}
              <Card className="glass-card border-pink-200 bg-pink-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section VII: The Aesthetic Imperative</CardTitle>
                      <CardDescription>Beauty Myths and Cosmetic Risks (Myth 50)</CardDescription>
                    </div>
                    <Badge variant="rose" className="text-xs">Sensory Illusion</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Card className="border-2 border-slate-200 bg-slate-50/30">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">LOW</Badge>
                        <h4 className="font-bold text-slate-900">#50: The Shaving Thickness Myth</h4>
                      </div>
                      <p className="text-sm font-medium text-slate-700 italic">&quot;Shaving causes hair to grow back thicker and darker.&quot;</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm font-semibold text-slate-900">The Reality:</span>
                        </div>
                        <p className="text-sm text-slate-700 pl-6">Shaving cuts the hair at the blunt thickest part. When it grows out, it feels stiff. It does not alter the follicle&apos;s biology or growth rate.</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Brain className="h-4 w-4 text-indigo-600" />
                          <span className="text-sm font-semibold text-slate-900">Cognitive Driver: <span className="text-indigo-700">Sensory Illusion</span></span>
                        </div>
                        <p className="text-sm text-slate-700 pl-6">The blunt tip feels coarser than the tapered natural tip, creating the illusion of thickness.</p>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              {/* Summary Table: Key High-Risk Myths */}
              <Card className="glass-card border-rose-200 bg-rose-50/20">
                <CardHeader>
                  <CardTitle className="text-xl text-rose-900">Summary of Key High-Risk Myths</CardTitle>
                  <CardDescription className="text-rose-700/80">Critical myths requiring immediate public health intervention</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <table className="w-full">
                      <thead className="sticky top-0 bg-rose-100">
                        <tr className="border-b border-rose-200">
                          <th className="p-3 text-left text-xs font-bold text-rose-900">Category</th>
                          <th className="p-3 text-left text-xs font-bold text-rose-900">Specific Myth</th>
                          <th className="p-3 text-left text-xs font-bold text-rose-900">Cognitive Driver</th>
                          <th className="p-3 text-left text-xs font-bold text-rose-900">Risk Level</th>
                          <th className="p-3 text-left text-xs font-bold text-rose-900">Primary Outcome Risk</th>
                        </tr>
                      </thead>
                      <tbody>
                        {highRiskMyths.map((myth, index) => (
                          <tr key={index} className="border-b border-rose-100 hover:bg-rose-50/50">
                            <td className="p-3 text-sm text-slate-900">{myth.category}</td>
                            <td className="p-3 text-sm text-slate-900">{myth.specificMyth}</td>
                            <td className="p-3 text-sm text-slate-700">{myth.driver}</td>
                            <td className="p-3">
                              <Badge variant={myth.riskLevel === 'CRITICAL' ? 'destructive' : 'red'} className="text-xs">{myth.riskLevel}</Badge>
                            </td>
                            <td className="p-3 text-sm text-slate-700">{myth.outcome}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Conclusion: Engineering Cognitive Resilience */}
              <Card className="glass-card border-indigo-200 bg-indigo-50/20">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                      <Sparkles className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-indigo-900">Engineering Cognitive Resilience</CardTitle>
                      <CardDescription className="text-indigo-700/80 mt-2">
                        Public health campaigns must move beyond &quot;Fact vs. Myth&quot; debunking. They must address the Cognitive Driver. Do not just say &quot;Shisha is bad.&quot; Address the sensory deception directly. Do not just say &quot;Dates have sugar.&quot; Address the religious halo by framing moderation as a form of respect for the body.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Patient Emotions Tab */}
        <TabsContent value="emotions" className="space-y-6">
          <GlassPanel title="The Emotional Anatomy of the Patient Experience" description="A comprehensive taxonomy of 50 nuanced emotional states across the healthcare journey" badge="Psychological Analysis">
            <div className="space-y-6">
              {/* Executive Summary */}
              <Card className="glass-card border-rose-200 bg-rose-50/30">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100">
                      <Heart className="h-5 w-5 text-rose-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-rose-900">Beyond the Binary of Satisfaction</CardTitle>
                      <CardDescription className="text-rose-700/80 mt-2">
                        The measurement of patient experience has largely relied on binary paradigms: positive versus negative, satisfied versus dissatisfied. This comprehensive analysis maps 50 specific emotional states, revealing that the patient experience is not a linear progression from illness to health, but a complex negotiation of vulnerability, identity, and power.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* SECTION I: The Temporality of Terror */}
              <Card className="glass-card border-purple-200 bg-purple-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section I: The Temporality of Terror</CardTitle>
                      <CardDescription>Anticipation and Waiting (Emotions 1-5)</CardDescription>
                    </div>
                    <Badge variant="purple" className="text-xs">Pre-Encounter States</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4 pr-4">
                      {temporalityTerror.map((emotion, index) => (
                        <Card key={index} className="border-l-4 border-l-purple-400 bg-purple-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="purple" className="text-xs">#{emotion.id}</Badge>
                              <h4 className="font-bold text-slate-900">{emotion.name}</h4>
                            </div>
                            <p className="text-sm font-medium text-slate-700 italic">&quot;{emotion.trigger}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{emotion.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{emotion.quote}&quot;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION II: The Epistemology of Pain */}
              <Card className="glass-card border-rose-200 bg-rose-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section II: The Epistemology of Pain</CardTitle>
                      <CardDescription>Invalidation and Vindication (Emotions 6-10)</CardDescription>
                    </div>
                    <Badge variant="rose" className="text-xs">Epistemic States</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4 pr-4">
                      {epistemologyPain.map((emotion, index) => (
                        <Card key={index} className="border-l-4 border-l-rose-400 bg-rose-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="rose" className="text-xs">#{emotion.id}</Badge>
                              <h4 className="font-bold text-slate-900">{emotion.name}</h4>
                            </div>
                            <p className="text-sm font-medium text-slate-700 italic">&quot;{emotion.trigger}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{emotion.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{emotion.quote}&quot;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION III: The Friction of Bureaucracy */}
              <Card className="glass-card border-orange-200 bg-orange-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section III: The Friction of Bureaucracy</CardTitle>
                      <CardDescription>Systemic Emotions (Emotions 11-15)</CardDescription>
                    </div>
                    <Badge variant="orange" className="text-xs">Administrative States</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4 pr-4">
                      {bureaucracyFriction.map((emotion, index) => (
                        <Card key={index} className="border-l-4 border-l-orange-400 bg-orange-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="orange" className="text-xs">#{emotion.id}</Badge>
                              <h4 className="font-bold text-slate-900">{emotion.name}</h4>
                            </div>
                            <p className="text-sm font-medium text-slate-700 italic">&quot;{emotion.trigger}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{emotion.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{emotion.quote}&quot;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION IV: The Acute & Surgical Experience */}
              <Card className="glass-card border-red-200 bg-red-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section IV: The Acute & Surgical Experience</CardTitle>
                      <CardDescription>Vulnerability and Chaos (Emotions 16-21)</CardDescription>
                    </div>
                    <Badge variant="red" className="text-xs">Acute Care States</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4 pr-4">
                      {acuteSurgical.map((emotion, index) => (
                        <Card key={index} className="border-l-4 border-l-red-400 bg-red-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="red" className="text-xs">#{emotion.id}</Badge>
                              <h4 className="font-bold text-slate-900">{emotion.name}</h4>
                            </div>
                            <p className="text-sm font-medium text-slate-700 italic">&quot;{emotion.trigger}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{emotion.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{emotion.quote}&quot;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION V: Chronic Illness & Identity */}
              <Card className="glass-card border-cyan-200 bg-cyan-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section V: Chronic Illness & Identity</CardTitle>
                      <CardDescription>The Long Haul (Emotions 22-27)</CardDescription>
                    </div>
                    <Badge variant="cyan" className="text-xs">Chronic States</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4 pr-4">
                      {chronicIllness.map((emotion, index) => (
                        <Card key={index} className="border-l-4 border-l-cyan-400 bg-cyan-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="cyan" className="text-xs">#{emotion.id}</Badge>
                              <h4 className="font-bold text-slate-900">{emotion.name}</h4>
                            </div>
                            <p className="text-sm font-medium text-slate-700 italic">&quot;{emotion.trigger}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{emotion.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{emotion.quote}&quot;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION VI: The Parental Crucible */}
              <Card className="glass-card border-pink-200 bg-pink-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section VI: The Parental Crucible</CardTitle>
                      <CardDescription>Pediatrics and NICU (Emotions 28-32)</CardDescription>
                    </div>
                    <Badge variant="rose" className="text-xs">Parental States</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4 pr-4">
                      {parentalCrucible.map((emotion, index) => (
                        <Card key={index} className="border-l-4 border-l-pink-400 bg-pink-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="rose" className="text-xs">#{emotion.id}</Badge>
                              <h4 className="font-bold text-slate-900">{emotion.name}</h4>
                            </div>
                            <p className="text-sm font-medium text-slate-700 italic">&quot;{emotion.trigger}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{emotion.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{emotion.quote}&quot;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION VII: Reproductive Health & Fertility */}
              <Card className="glass-card border-fuchsia-200 bg-fuchsia-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section VII: Reproductive Health & Fertility</CardTitle>
                      <CardDescription>The Rollercoaster (Emotions 33-35)</CardDescription>
                    </div>
                    <Badge variant="fuchsia" className="text-xs">Reproductive States</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4 pr-4">
                      {reproductiveHealth.map((emotion, index) => (
                        <Card key={index} className="border-l-4 border-l-fuchsia-400 bg-fuchsia-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="fuchsia" className="text-xs">#{emotion.id}</Badge>
                              <h4 className="font-bold text-slate-900">{emotion.name}</h4>
                            </div>
                            <p className="text-sm font-medium text-slate-700 italic">&quot;{emotion.trigger}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{emotion.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{emotion.quote}&quot;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION VIII: Stigma, Shame, and Social Judgment */}
              <Card className="glass-card border-slate-200 bg-slate-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section VIII: Stigma, Shame, and Social Judgment</CardTitle>
                      <CardDescription>Social Emotions (Emotions 36-40)</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-xs">Social States</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4 pr-4">
                      {stigmaShame.map((emotion, index) => (
                        <Card key={index} className="border-l-4 border-l-slate-400 bg-slate-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">#{emotion.id}</Badge>
                              <h4 className="font-bold text-slate-900">{emotion.name}</h4>
                            </div>
                            <p className="text-sm font-medium text-slate-700 italic">&quot;{emotion.trigger}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{emotion.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{emotion.quote}&quot;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION IX: The Spectrum of Connection */}
              <Card className="glass-card border-emerald-200 bg-emerald-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section IX: The Spectrum of Connection</CardTitle>
                      <CardDescription>Therapeutic Alliances (Emotions 41-45)</CardDescription>
                    </div>
                    <Badge variant="success" className="text-xs">Positive States</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4 pr-4">
                      {therapeuticConnection.map((emotion, index) => (
                        <Card key={index} className="border-l-4 border-l-emerald-400 bg-emerald-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="success" className="text-xs">#{emotion.id}</Badge>
                              <h4 className="font-bold text-slate-900">{emotion.name}</h4>
                            </div>
                            <p className="text-sm font-medium text-slate-700 italic">&quot;{emotion.trigger}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{emotion.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{emotion.quote}&quot;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* SECTION X: End of Life, Autonomy, and Transcendence */}
              <Card className="glass-card border-indigo-200 bg-indigo-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section X: End of Life, Autonomy, and Transcendence</CardTitle>
                      <CardDescription>The Final Chapter (Emotions 46-50)</CardDescription>
                    </div>
                    <Badge variant="indigo" className="text-xs">Transcendent States</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4 pr-4">
                      {endOfLife.map((emotion, index) => (
                        <Card key={index} className="border-l-4 border-l-indigo-400 bg-indigo-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="indigo" className="text-xs">#{emotion.id}</Badge>
                              <h4 className="font-bold text-slate-900">{emotion.name}</h4>
                            </div>
                            <p className="text-sm font-medium text-slate-700 italic">&quot;{emotion.trigger}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{emotion.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{emotion.quote}&quot;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Conclusion: Toward an Empathetic Taxonomy */}
              <Card className="glass-card border-purple-200 bg-purple-50/20">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                      <Sparkles className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-purple-900">Toward an Empathetic Taxonomy</CardTitle>
                      <CardDescription className="text-purple-700/80 mt-2">
                        This exhaustive taxonomy of 50 emotional states demonstrates that the patient experience is a rich, nuanced, and often contradictory landscape. True Emotional Intelligence in healthcare requires hearing the &quot;notes between the notes&quot;—mapping the silence of Ambiguous Loss, the heat of Vindication, and the coldness of Bureaucratic Confusion. Only by naming these states can we hope to heal them.
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
const interceptionSources = [
  {
    name: 'WhatsApp Groups',
    description: 'Family, community, and special interest groups',
    color: 'emerald',
    icon: <MessageSquare className="h-6 w-6" />,
    volume: '423K captures',
    captured: '47.2K today',
    coverage: 78,
    sentiment: 68,
  },
  {
    name: 'Telegram Channels',
    description: 'Public and private healthcare discussions',
    color: 'denim',
    icon: <MessageSquare className="h-6 w-6" />,
    volume: '234K captures',
    captured: '23.1K today',
    coverage: 65,
    sentiment: 54,
  },
  {
    name: 'Discord Servers',
    description: 'Health and wellness community servers',
    color: 'purple',
    icon: <Users className="h-6 w-6" />,
    volume: '190K captures',
    captured: '12.4K today',
    coverage: 52,
    sentiment: 72,
  },
]

const interceptedConversations = [
  {
    topic: 'Vaccine Side Effects Discussion',
    excerpt: 'Multiple groups discussing perceived side effects from recent COVID-19 booster campaign...',
    source: 'WhatsApp',
    sentiment: 'negative',
    urgency: 'high',
    participants: 234,
    reach: '12.4K',
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    topic: 'Positive Malaffi App Experience',
    excerpt: 'Users praising the convenience of booking appointments through the updated Malaffi interface...',
    source: 'Telegram',
    sentiment: 'positive',
    urgency: 'low',
    participants: 89,
    reach: '4.2K',
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    topic: 'Insurance Claim Rejections',
    excerpt: 'Growing frustration with Thiya insurance claim rejections for specialized treatments...',
    source: 'WhatsApp',
    sentiment: 'negative',
    urgency: 'high',
    participants: 156,
    reach: '8.9K',
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    topic: 'Mental Health Campaign Praise',
    excerpt: 'Positive reception for "Beauty of Our Mind" campaign across multiple community groups...',
    source: 'Discord',
    sentiment: 'positive',
    urgency: 'low',
    participants: 445,
    reach: '18.7K',
    icon: <Users className="h-5 w-5" />,
  },
  {
    topic: 'Hospital Wait Time Complaints',
    excerpt: 'Discussions about 3+ hour wait times at SEHA facilities during peak hours...',
    source: 'WhatsApp',
    sentiment: 'negative',
    urgency: 'medium',
    participants: 312,
    reach: '15.2K',
    icon: <MessageSquare className="h-5 w-5" />,
  },
]

const primaryEmotions = [
  { name: 'Trust', value: 73, change: 5.2, icon: <Shield className="h-4 w-4 text-emerald-500" />, description: 'Confidence in healthcare institutions' },
  { name: 'Anxiety', value: 34, change: -8.1, icon: <AlertCircle className="h-4 w-4 text-amber-500" />, description: 'Health-related worry and concern' },
  { name: 'Hope', value: 81, change: 7.8, icon: <Sparkles className="h-4 w-4 text-pink-500" />, description: 'Optimism for health outcomes' },
  { name: 'Confusion', value: 28, change: -12.4, icon: <Ghost className="h-4 w-4 text-purple-500" />, description: 'Uncertainty about health information' },
  { name: 'Confidence', value: 68, change: 1.3, icon: <TrendingUp className="h-4 w-4 text-blue-500" />, description: 'Belief in treatment efficacy' },
  { name: 'Skepticism', value: 22, change: -2.1, icon: <Search className="h-4 w-4 text-slate-500" />, description: 'Doubt about official health guidance' },
]

const trustMetrics = [
  { name: 'DoH Trust', value: 78, delta: 5.2 },
  { name: 'Hospital Confidence', value: 72, delta: 3.1 },
  { name: 'Healthcare Worker Trust', value: 89, delta: 7.4 },
  { name: 'Medical Advice Credibility', value: 65, delta: -1.2 },
  { name: 'Health System Satisfaction', value: 68, delta: 2.8 },
]

const emotionalClusters = [
  { name: 'Health Optimists', population: 34, trend: 'growing', color: 'bg-emerald-100 text-emerald-600', icon: <Heart className="h-5 w-5" /> },
  { name: 'Cautious Seekers', population: 28, trend: 'stable', color: 'bg-amber-100 text-amber-600', icon: <Search className="h-5 w-5" /> },
  { name: 'System Skeptics', population: 18, trend: 'declining', color: 'bg-rose-100 text-rose-600', icon: <Ghost className="h-5 w-5" /> },
  { name: 'Information Overload', population: 12, trend: 'stable', color: 'bg-purple-100 text-purple-600', icon: <Zap className="h-5 w-5" /> },
  { name: 'Silent Majority', population: 8, trend: 'growing', color: 'bg-slate-100 text-slate-600', icon: <Users className="h-5 w-5" /> },
]

const predictions = [
  {
    title: 'Mental Health Engagement Surge',
    description: '87% probability of increased positive engagement with mental health content following "Beauty of Our Mind" campaign',
    confidence: 87,
    type: 'positive',
    timeline: '2-3 days',
    impact: 'High',
    icon: <Flame className="h-6 w-6" />,
  },
  {
    title: 'Vaccine Misinformation Resurgence',
    description: '72% probability of renewed vaccine misinformation discussions in WhatsApp groups',
    confidence: 72,
    type: 'negative',
    timeline: '4-5 days',
    impact: 'Medium',
    icon: <AlertCircle className="h-6 w-6" />,
  },
  {
    title: 'Insurance Complaint Spike',
    description: '65% probability of increased social media complaints about insurance claim processing',
    confidence: 65,
    type: 'negative',
    timeline: '5-7 days',
    impact: 'Medium',
    icon: <TrendingDown className="h-6 w-6" />,
  },
  {
    title: 'Digital Health Adoption Growth',
    description: '81% probability of continued growth in Malaffi and Sahatna app usage',
    confidence: 81,
    type: 'positive',
    timeline: 'Ongoing',
    impact: 'High',
    icon: <TrendingUp className="h-6 w-6" />,
  },
]

const pastPredictions = [
  { prediction: 'Mental health sentiment increase', date: 'Jan 5, 2026', status: 'correct' },
  { prediction: 'Insurance confusion spike', date: 'Jan 4, 2026', status: 'correct' },
  { prediction: 'Hospital wait time complaints', date: 'Jan 3, 2026', status: 'partial' },
  { prediction: 'Vaccine misinformation decline', date: 'Jan 2, 2026', status: 'correct' },
  { prediction: 'Digital health adoption surge', date: 'Jan 1, 2026', status: 'correct' },
]

const languages = [
  { name: 'English', documents: '2.4', percentage: 51 },
  { name: 'Arabic', documents: '1.8', percentage: 38 },
  { name: 'Hindi', documents: '0.2', percentage: 4 },
  { name: 'Urdu', documents: '0.1', percentage: 2 },
  { name: 'Other', documents: '0.2', percentage: 5 },
]

const nlpCapabilities = [
  { name: 'Sentiment Analysis', description: 'Multi-dimensional emotional scoring', accuracy: '94.2%', icon: <Heart className="h-5 w-5" /> },
  { name: 'Entity Recognition', description: 'Named entity identification', accuracy: '97.8%', icon: <Search className="h-5 w-5" /> },
  { name: 'Topic Modeling', description: 'Automatic topic classification', accuracy: '91.5%', icon: <Target className="h-5 w-5" /> },
  { name: 'Language Detection', description: '47 language support', accuracy: '99.2%', icon: <Globe className="h-5 w-5" /> },
  { name: 'Intent Classification', description: 'User intent understanding', accuracy: '88.7%', icon: <Brain className="h-5 w-5" /> },
  { name: 'Keyword Extraction', description: 'Key phrase identification', accuracy: '93.4%', icon: <Sparkles className="h-5 w-5" /> },
]

// File 01: Narrative Acquisition Strategy - Data Arrays
const mythVector: Array<{
  title: string
  category: string
  snippet: string
  analysis: string
}> = [
  { title: 'Microchipped Vaccines', category: 'Vaccine', snippet: 'When you get the COVID-19 vaccine, you will turn into a zombie. A microchipped zombie.', analysis: 'Taps into global conspiracy theories about state overreach and loss of bodily autonomy in a highly monitored society.' },
  { title: 'Rushed Vaccine Development', category: 'Vaccine', snippet: 'The vaccine was developed very quickly … so it may not be effective.', analysis: 'Reflects scepticism towards rapidly deployed global solutions and preference for time-tested traditional approaches.' },
  { title: 'Vaccines Cause COVID-19', category: 'Vaccine', snippet: 'Covid-19 vaccines cannot cause Covid-19 infections', analysis: 'Fundamental misunderstanding of virology and vaccine technology, exacerbated by misinformation in closed social media groups.' },
  { title: 'Digital Health Surveillance', category: 'Digital Health', snippet: 'Patients fear their digital history could be used for non-clinical purposes', analysis: 'Significant barrier to adoption of advanced digital health initiatives, rooted in data privacy concerns.' },
  { title: 'AI Diagnostics are Untrustworthy', category: 'AI', snippet: 'Many healthcare organizations do not realize the importance of data … in automating care', analysis: 'Scepticism towards AI is not just about technical accuracy but also about lack of trust in opaque algorithms.' },
  { title: 'Herbal Remedies are Inherently Safe', category: 'Traditional', snippet: 'Belief rooted in Traditional Emirati Medicine that natural remedies are without side effects', analysis: 'Leads to potential self-medication and interactions with conventional treatments.' },
  { title: 'Mental Health = Personal Weakness', category: 'Stigma', snippet: 'Deep-seated stigma preventing individuals from seeking help', analysis: 'Views mental health struggles as moral or personal failing rather than a medical condition.' },
]

const voidVector: Array<{
  topic: string
  demand: string
  gap: string
}> = [
  { topic: 'Sleep Disorders & Insomnia', demand: 'Growing interest linked to mental well-being and productivity', gap: 'No dedicated public campaign. Opportunity to frame sleep health as pillar of overall well-being.' },
  { topic: 'Menopause & Perimenopause Care', demand: 'Rising interest among women 40+ impacting quality of life', gap: 'Limited guidance beyond clinical settings. Need for culturally sensitive community-based support.' },
  { topic: 'Chronic Pain Management (Non-Cancer)', demand: 'Frustration with opioid-phobic policies and lack of holistic strategies', gap: 'No community-facing support programmes. Need for integrated pain management protocols.' },
  { topic: 'Integrative/Functional Medicine', demand: 'Strong public interest in "whole-person" care', gap: 'ADPHC largely silent on efficacy, regulation, or integration of CAM with conventional medicine.' },
  { topic: 'Long COVID & Post-Viral Fatigue', demand: 'Significant patient population seeking guidance and rehabilitation', gap: 'No official widely communicated rehabilitation pathways or support systems.' },
  { topic: 'Culturally Adapted Mental Health Services', demand: 'Lack of services tailored to specific cultural and linguistic needs', gap: 'Existing services often generic and may not address unique stigma and beliefs.' },
]

const tribeVector: Array<{
  name: string
  beliefs: string
  channel: string
  icon: React.ReactNode
  color: string
}> = [
  { name: 'The Concerned Mom', beliefs: 'Fears vaccine side effects, prioritizes family health, seeks "natural" remedies, trusts pediatricians but wary of "big pharma"', channel: 'Instagram, WhatsApp Groups, School Portals', icon: <Heart className="h-5 w-5" />, color: 'bg-rose-100 text-rose-600' },
  { name: 'The Skeptical Expat', beliefs: 'Distrusts official sources, values peer reviews and anecdotal evidence, worried about privacy and data security', channel: 'Reddit, Expat Forums, Private Facebook Groups', icon: <Ghost className="h-5 w-5" />, color: 'bg-purple-100 text-purple-600' },
  { name: 'The Wellness Professional', beliefs: 'Embraces functional medicine, biohacking, digital tracking, sees health as performance optimization', channel: 'LinkedIn, Niche Podcasts, Health-Tech Events', icon: <TrendingUp className="h-5 w-5" />, color: 'bg-emerald-100 text-emerald-600' },
  { name: 'The Traditionalist Elder', beliefs: 'Values traditional Emirati medicine, suspicious of "Western" interventions, relies on faith and community wisdom', channel: 'Family Networks, Local Radio, Community Centers', icon: <Shield className="h-5 w-5" />, color: 'bg-amber-100 text-amber-600' },
  { name: 'The Tech-Optimist', beliefs: 'Believes AI, genomics, and digital health will solve major challenges, early adopter, excited about futuristic vision', channel: 'Twitter, Tech Conferences, Research Publications', icon: <Zap className="h-5 w-5" />, color: 'bg-cyan-100 text-cyan-600' },
  { name: 'The Faith-Oriented Individual', beliefs: 'Views health and illness through religious lens, may see prayer as primary or complementary to medical treatment', channel: 'Mosques, Religious Sermons, Faith-Based Groups', icon: <Sparkles className="h-5 w-5" />, color: 'bg-indigo-100 text-indigo-600' },
]

const bridgeVector: Array<{
  handle: string
  bridge: string
  impact: string
  icon: React.ReactNode
  color: string
}> = [
  { handle: '@alghawee', bridge: 'Emirati youth → Government campaigns', impact: 'Uses relatable humor and local dialect, bridges gap between formal government language and youth culture. High engagement on Instagram and TikTok.', icon: <Users className="h-5 w-5" />, color: 'bg-pink-100 text-pink-600' },
  { handle: '@nooralhudaofficial', bridge: 'Arab moms → Vaccination info', impact: 'Shares personal stories and conducts live Q&A, builds trust through authenticity. Widely shared in mom groups.', icon: <MessageSquare className="h-5 w-5" />, color: 'bg-emerald-100 text-emerald-600' },
  { handle: '@emirates_mix', bridge: 'South Asian expats → Health services', impact: 'Uses multilingual posts to bust myths and provide practical health information. Fills crucial information gap.', icon: <Globe className="h-5 w-5" />, color: 'bg-orange-100 text-orange-600' },
  { handle: '@farahhassanofficial', bridge: 'Western professionals → Mental health', impact: 'Provides evidence-based information on mental health, addresses stigma. Growing influence among Western-educated professionals.', icon: <Brain className="h-5 w-5" />, color: 'bg-purple-100 text-purple-600' },
  { handle: '@saoudalkaabi', bridge: 'Male fitness enthusiasts → Preventive care', impact: 'Ties health tips to workout routines. Strong male following, effective in engaging demographic less likely to seek health info.', icon: <Flame className="h-5 w-5" />, color: 'bg-red-100 text-red-600' },
  { handle: 'Respected Religious Scholars', bridge: 'Faith-Oriented → Health messages', impact: 'Can frame health advice within religious context. Endorsement carries significant weight beyond social media to Friday sermons.', icon: <Shield className="h-5 w-5" />, color: 'bg-indigo-100 text-indigo-600' },
  { handle: 'Trusted Local Physicians', bridge: 'General Population → Medical advice', impact: 'Doctors active in communities and on social media provide credible personalized health information, counteracting misinformation.', icon: <Activity className="h-5 w-5" />, color: 'bg-teal-100 text-teal-600' },
]

const toneVector: Array<{
  dimension: string
  pattern: string
  application: string
}> = [
  { dimension: 'Emotional Valence', pattern: 'Positive tone outperforms neutral or negative in Arabic health messages. For serious topics, balanced tone acknowledging concerns while providing reassurance is more effective.', application: 'A/B testing different tones for continuous optimization based on segment and topic.' },
  { dimension: 'Multilingual Mix & Code-Switching', pattern: 'Code-switching between Arabic and English increases trust and relatability among expats and bilingual nationals. Signals inclusivity.', application: 'AI must be trained on diverse dataset of local health communications to understand language and cultural nuances.' },
  { dimension: 'Cultural Anchors & Framing', pattern: 'References to family, unity, national pride, and Islamic values boost engagement. Framing health messages as collective responsibility is more effective.', application: 'Framing health messages in terms of collective responsibility and societal well-being rather than individualistic appeals.' },
  { dimension: 'Visual-Text Sync & Local Imagery', pattern: 'High-contrast images and videos featuring local people yield highest share rates. Visuals should reflect diversity of population.', application: 'Using real-life stories and testimonials can be more powerful than abstract facts and figures for emotional resonance.' },
  { dimension: 'Hashtag Strategy', pattern: 'Mix of Arabic and English hashtags essential for discoverability. Location-based hashtags help target specific communities.', application: 'Using #صحتك #AbuDhabiHealth #YourHealth for cross-language discoverability.' },
  { dimension: 'Respectful & Inclusive Language', pattern: 'Language must be respectful of all cultures, genders, and age groups. Avoiding jargon and using clear simple language is crucial.', application: 'Avoiding jargon and using clear, simple language especially when addressing complex health topics or diverse literacy levels.' },
  { dimension: 'Narrative Storytelling', pattern: 'Using real-life stories and testimonials evokes emotion and shows relatable experiences. More likely to be remembered and shared.', application: 'Stories that evoke emotion and show relatable experiences are more likely to be remembered and shared.' },
]

// File 02: NARRATIVE EXTRACTION PROTOCOL - Data Arrays
const insuranceMyths: Array<{
  title: string
  description: string
}> = [
  { title: 'The Maternity Trap', description: 'Women fear rejection of maternity bills due to marital status or timing of conception relative to policy start dates' },
  { title: 'The Pre-Existing Condition Loophole', description: 'Stories of elderly parents denied emergency care due to "undeclared past issues"' },
  { title: 'The Casino Effect', description: 'Insurance coverage perceived as gamble with anecdotal horror stories of claims denied on technicalities' },
  { title: 'Medical Flight Response', description: 'Residents delay care or plan travel to home countries for major procedures due to cost fears' },
]

const mythAnalysisTable: Array<{
  code: string
  narrative: string
  driver: string
  target: string
  danger: 'Critical' | 'High' | 'Medium' | 'Low'
}> = [
  { code: 'M-INS-01', narrative: 'Insurance determines care quality, not doctors', driver: 'Financial Anxiety & Distrust of Authority', target: 'Expats (All Tiers)', danger: 'High' },
  { code: 'M-VIR-02', narrative: 'Secret viruses are spreading in schools', driver: 'Parental Protectiveness & Authority Bias', target: 'Moms / Families', danger: 'Medium' },
  { code: 'M-VAC-03', narrative: 'Natural immunity is better than "too many jabs"', driver: 'Desire for Purity & Control', target: 'Western Expats / Wellness Tribe', danger: 'High' },
  { code: 'M-FIN-04', narrative: 'Hospitals will bankrupt you on technicalities', driver: 'Existential Economic Fear', target: 'Low-Mid Income Expats', danger: 'Critical' },
]

const whiteCoatBridges: Array<{
  name: string
  role: string
  target: string
}> = [
  { name: 'Dr. Walid Reda Sayed', role: 'Group Medical Director with German training - represents pinnacle of "serious medicine"', target: 'Tribe A (Anxious Expats) and Tribe D (Nationals) seeking clinical rigor validation' },
  { name: 'Dr. Ahmed Abdelal', role: 'Pediatrician with credentials in nutrition - ideal vector for "School Health" and childhood obesity', target: 'Tribe A anxiety about school viruses with empathy rather than bureaucracy' },
  { name: 'Dr. Mahra Lutfi', role: 'Massive following (11.6M+) at intersection of medicine and beauty/lifestyle', target: 'Tribe D and Tribe B - frames health as "edutainment" and lifestyle optimization' },
]

const culturalBridges: Array<{
  name: string
  description: string
  target: string
}> = [
  { name: 'Dr. Mike Manio ("Health Talk")', description: 'Translates complex health policies into relatable Tagalog-language video content with humor and food references', target: 'Tribe C (Blue Collar) and service sector' },
  { name: 'Margarete Serrano ("Em")', description: 'Nurse vlogger providing insider knowledge and relatable healthcare content', target: 'Filipino community and service workers' },
  { name: 'KMCC (Kerala Muslim Cultural Centre)', description: 'Massive organized network functioning as parallel welfare state for Malayali community - handles medical aid and crisis support', target: 'Tribe B (Striver) demographic - the "insurance of last resort"' },
]

const bridgeVectorTable: Array<{
  type: string
  name: string
  tribe: string
  function: string
}> = [
  { type: 'White Coat', name: 'Dr. Walid Reda Sayed', tribe: 'Western Expats / Nationals', function: 'Legitimacy & Clinical Trust' },
  { type: 'White Coat', name: 'Dr. Ahmed Abdelal', tribe: 'Parents / Families', function: 'Empathy & Child Health' },
  { type: 'Cultural', name: 'KMCC (Organization)', tribe: 'South Asian Strivers', function: 'Welfare & Financial Safety' },
  { type: 'Cultural', name: 'Dr. Mike Manio', tribe: 'Filipino / Service Sector', function: 'Translation & Relatability' },
  { type: 'Lifestyle', name: 'Dr. Mahra Lutfi', tribe: 'Nationals / Millennials', function: 'Aspiration & Beauty' },
  { type: 'Digital', name: '"British Mums" Admin', tribe: 'Western Moms', function: 'Peer Validation & Fact-Checking' },
]

const narrativeMechanics: Array<{
  name: string
  description: string
}> = [
  { name: 'The "Unsung Hero" Mechanic', description: 'Most effective campaigns (COVID-19 vaccination) succeeded by highlighting "human face" of system - specific nurse, volunteer, recovered patient. Creates mirror for audience.' },
  { name: 'The "Pink Aesthetic" of Resilience', description: 'Breast Cancer Awareness campaigns succeeded by transforming medical issue into shared community identity via pink aesthetics and survivor stories. Symbol of resilience, not disease.' },
  { name: 'Inclusive Language Power', description: 'Successful influencers use "We" and "Us" rather than "The Authority" and "The Public". Linguistically engineers sense of shared responsibility.' },
]

const personas: Array<{
  name: string
  profile: string
  fear: string
  sources: string
  color: string
  iconColor: string
  icon: React.ReactNode
}> = [
  { name: 'Fatima, The Local Matriarch', profile: 'Emirati, 55, Grandmother, lives in Al Bateen', fear: 'Grandchildren losing heritage and health to screens and fast food. Worries about diabetes (genetic risk) and husband&apos;s loneliness', sources: 'Family WhatsApp Groups, Dr. Mahra Lutfi (Instagram), Official Majlis', color: 'border-rose-200 bg-rose-50', iconColor: 'bg-rose-100 text-rose-600', icon: <Heart className="h-4 w-4" /> },
  { name: 'Sarah, The Skeptical Western Expat', profile: 'British, 38, Teacher, lives in Khalifa City', fear: 'Over-treatment - terrified doctors will prescribe unnecessary antibiotics to children just to bill insurance. Anxious about hidden costs and denied claims', sources: '"British Mums Dubai/Abu Dhabi" Facebook Group, Western-Board Certified Doctors', color: 'border-purple-200 bg-purple-50', iconColor: 'bg-purple-100 text-purple-600', icon: <Ghost className="h-4 w-4" /> },
  { name: 'Raj, The Blue-Collar Builder', profile: 'Indian, 29, Construction Worker, lives in Mussafah', fear: 'Cost and Deportation - if he goes to doctor, it will cost a month&apos;s salary, or worse, be found "unfit" and sent home', sources: 'TikTok (Hindi/Malayalam videos), Camp Boss / Peers, Native language Facebook groups', color: 'border-blue-200 bg-blue-50', iconColor: 'bg-blue-100 text-blue-600', icon: <Shield className="h-4 w-4" /> },
]

const recommendations: Array<{
  title: string
  description: string
}> = [
  { title: 'From "World Class" to "Transparent Class"', description: 'Combat the "Schrödinger&apos;s Healthcare" myth by pivoting narrative from "Quality" (subjective) to "Transparency" (objective). Promote Sanadak ombudsman unit aggressively as tool for patient empowerment.' },
  { title: 'Fill the "Autism Void"', description: 'Silence is damaging. Launch "Stories of Inclusion" campaign showcasing actual, navigable pathways for parents of children with determination. Use "Bridge" influencers (Dr. Ahmed Abdelal) to deliver message with empathy.' },
  { title: 'Activate the "Human Bridges"', description: 'Cease relying on faceless press releases. Deploy identified "White Coat" and "Cultural" bridges (Dr. Walid, KMCC, Dr. Mike Manio) to disseminate health narratives. They possess the "Trust Key" that the state lacks.' },
  { title: 'Tone Shift: Abandon "Deliberative" Register', description: 'Adopt the "Narrative" register. Tell stories of "Unsung Heroes." Use the visual language of TikTok for the blue-collar demographic. Connect emotionally, broadcast clinically.' },
]

// File 03: UAE HEALTH MISINFORMATION & NETWORK ANALYSIS - Data Arrays
const officialCounterNarrative: Array<{
  title: string
  description: string
}> = [
  { title: 'The Specific Denial', description: 'Semaglutide is prescription-only medication dispensed ONLY via licensed pharmacies. All "online sellers" or "direct suppliers" are illicit.' },
  { title: 'The Forensic Reality', description: 'WHO and FDA data revealed fake pens are relabeled insulin pens. For non-diabetic using for weight loss, injecting insulin causes life-threatening hypoglycemia, seizures, or coma.' },
  { title: 'Technological Verification', description: 'Tatmeen traceability system introduced. Scan QR code on packaging to track drug journey from manufacturer to patient. No scan = confirmed counterfeit.' },
  { title: 'Scientific Correction (Flu)', description: 'Seasonal vaccine provides critical protection against severe illness and hospitalization even if not perfect genetic match. Narrative shifted to "protection from severity."' },
  { title: 'Campaign Data (Flu)', description: 'ADPHC vaccinated nearly 300,000 residents during 2024-2025 campaign using social proof to counter hesitancy.' },
]

const superSpreaders: Array<{
  name: string
  category: string
  mechanism: string
  relevance: string
}> = [
  { name: 'Salama Mohamed', category: 'Lifestyle / Entrepreneur (1.7M+ Instagram, 170K+ TikTok)', mechanism: 'Vulnerability & Authenticity – shares journey with vitiligo creating deep parasocial bond', relevance: 'Empathy Bridge for dermatology, autoimmune, skin-health narratives. Brands with safety. DoH skin safety messages achieve maximum penetration storified through her.' },
  { name: 'Taim Al Falasi', category: 'Lifestyle / Food / Travel (3.1M+ Instagram, 4.7M Total)', mechanism: 'Aspirational Authority – "Mega-Influencer" and restaurateur representing pinnacle of modern Emirati lifestyle', relevance: 'Consumer Mobilizer at intersection of Diet, Wellness, Consumption. Primary vector for Ozempic, supplements, wellness tourism trends. Connects Entertainment with Health Choices.' },
  { name: 'Rana Hesham', category: 'Mommy Blogger / Parenting (400K+ Followers)', mechanism: 'Peer Validation & Shared Struggle – Emirati-Egyptian mother curating content on raising children in UAE', relevance: 'Family Gatekeeper – mothers are CHOs of family unit deciding flu shots, pediatric care, nutrition. Super-Node for school vaccination rumors.' },
]

const darkSocialHubs: Array<{
  name: string
  platform: string
  scale: string
  role: string
  function: string
  color: string
  icon: React.ReactNode
}> = [
  { name: 'Abu Dhabi Q&A', platform: 'Facebook Group', scale: '93K-100K+ residents', role: 'Expatriate melting pot – new arrivals seeking guidance, long-term residents offering wisdom', function: 'Sentiment Barometer – real-time healthcare search engine, primary vector for availability rumors and service quality reviews', color: 'border-blue-300 bg-blue-50', icon: <Users className="h-5 w-5 text-blue-600" /> },
  { name: 'Abu Dhabi Mums', platform: 'Facebook Group & Organization', scale: '13.5K followers, 2.3K vetted members', role: 'Highly engaged mothers focused on child safety, education, development', function: 'Sanctioning Body – High-Velocity Vector for pediatric health. Admin warnings become "law." School virus rumors propagate here instantly', color: 'border-pink-300 bg-pink-50', icon: <Heart className="h-5 w-5 text-pink-600" /> },
  { name: 'r/abudhabi', platform: 'Reddit Community', scale: 'Thousands of subscribers', role: 'Younger, tech-savvy, male-dominated. Includes anonymous medical professionals and industry insiders', function: 'Dark Horse – discusses "Systemic & Process" information. Detects administrative frictions and policy misunderstandings before mainstream news', color: 'border-orange-300 bg-orange-50', icon: <MessageSquare className="h-5 w-5 text-orange-600" /> },
]

const adjectiveProfile: Array<{
  word: string
  implication: string
}> = [
  { word: 'Personalised', implication: 'Counters fear of "faceless bureaucracy" by promising individual attention and tailored health solutions (Genome Program, Weight Management)' },
  { word: 'Innovative', implication: 'Links Abu Dhabi to "World-Class" standards and "AI-powered" futures. Positions regulator as pioneer not administrator' },
  { word: 'Comprehensive', implication: 'Describes screening programs and coverage. Implies "safety net" leaving no gaps, reinforcing sense of security and thoroughness' },
  { word: 'Safe / Trusted', implication: 'Foundational emotional anchor. Describes community, supply chain, facilities. Core promise of DoH brand' },
  { word: 'Sustainable', implication: 'Prominent in 2024-2025 narratives. Aligns health mandates with UAE "We the UAE 2031" national vision' },
]

const simulationPhases: Array<{
  phase: 'Signal' | 'Assessment' | 'Response'
  timeline: string
  description: string
}> = [
  { phase: 'Signal', timeline: 'T-Minus 48 Hours', description: 'Crisis War Room AI detects anomaly on r/abudhabi. User posts: "Pharmacist says no stock, but guy on Dubizzle sent me to WhatsApp group for imported pens. Batch MP5B060. Anyone tried this?" Post receives 50 upvotes.' },
  { phase: 'Signal', timeline: 'T-Minus 24 Hours', description: 'Signal jumps to Abu Dhabi Mums. Voice note circulates: "Ladies, be careful. My sister used that imported pen and passed out. Doctor at Cleveland Clinic said her sugar dropped to zero. Might be insulin."' },
  { phase: 'Signal', timeline: 'Zero Hour', description: 'Salama Mohamed posts Instagram Story. Visibly concerned: "Guys, my DM is full of scary stories about fake weight loss pens. Please don&apos;t buy meds from Instagram. Not worth your life."' },
  { phase: 'Assessment', timeline: 'Intelligence', description: 'Cross-reference Reddit batch number (MP5B060) with WHO Medical Product Alert N°2/2024. Confirmed positive match for falsified Ozempic containing insulin.' },
  { phase: 'Assessment', timeline: 'Gap Analysis', description: 'No specific DoH press release regarding this batch in local media. "Verification Lag" is active. Rumor spreading faster than official lab results can be published.' },
  { phase: 'Response', timeline: 'Asset Generation', description: 'Content Factory engaged to produce immediate countermeasures. Visual Truth Infographic with Tatmeen verification steps. Bridge Node Brief sent to Abu Dhabi Q&A Admins and Salama Mohamed.' },
]

// File 04: NARRATIVE VOID SCAN - Data Arrays
const voidVectors: Array<{
  title: string
  description: string
  color: string
}> = [
  { title: 'The Optimization Void (Biohacking)', description: 'Where desire for enhanced performance outpaces medical consensus', color: 'border-rose-200 bg-rose-50' },
  { title: 'The Gendered Void (Men\'s Health)', description: 'Where cultural stoicism and policy gaps create silence around male-specific pathologies', color: 'border-emerald-200 bg-emerald-50' },
  { title: 'The Neurodivergent Void (Adult ADHD)', description: 'Where pediatric frameworks fail to address adult needs, leading to economic friction', color: 'border-indigo-200 bg-indigo-50' },
]

const ivTherapyCategories: Array<{
  name: string
  description: string
}> = [
  { name: 'Beauty "Cocktails"', description: 'Skin rejuvenation, "glow," anti-aging—claim to produce collagen and brighten complexion' },
  { name: 'Energy & Detox', description: 'Energy Boost and heavy metal detoxification via Oligo-scan technology marketed to professionals' },
  { name: 'Customization', description: 'Hyper-personalization—Tailored Vitamin Blends appealing to biohacking ethos of individualized biology' },
]

const obesityNarrativeShift: Array<{
  feature: string
  old: string
  new: string
}> = [
  { feature: 'Root Cause', old: 'Caloric imbalance, lack of discipline', new: 'Genetic, metabolic, and environmental drivers' },
  { feature: 'Treatment', old: 'Diet and Exercise (sole focus)', new: 'Pharmacotherapy (GLP-1s), Bariatric Surgery, Multidisciplinary care' },
  { feature: 'Insurance Status', old: 'Excluded / Cosmetic', new: 'Covered (with strict criteria)' },
  { feature: 'Policy Trigger', old: 'BMI > 30 (Passive)', new: 'BMI + Comorbidities + "Medical Reason" for weight gain' },
]

const adultADHDProviders: Array<{
  name: string
  description: string
}> = [
  { name: 'Cleveland Clinic Abu Dhabi (CCAD)', description: 'Specialized "Adult ADHD" pathway. Dr. Ayesha Ahmed and Dr. Emad Farrag with expertise. Dr. Farrag\'s work with ADEK on SEN links pediatric and adult continuums.' },
  { name: 'SEHA / Medcare', description: 'Dr. Rafia Rahim at SEHA/Medcare and Dr. Amna Alfalahi noted for work in adult ADHD and psychotherapy.' },
  { name: 'Seha Therapy (Telehealth)', description: 'Marketing directly to demographic offering "compassionate online ADHD therapy" to help adults "thrive with structure."' },
]

const khalidAlAmeriCredentials: Array<{
  badge: string
  description: string
}> = [
  { badge: 'Mental Health', description: 'Rosalynn Carter Fellow for Mental Health Journalism—academic and ethical training to discuss sensitive topics without trivializing' },
  { badge: 'Lifestyle & Obesity', description: 'Track record challenging "obesogenic environment"—critique of fast-food chains in residential villas aligns with ADPHC systemic approach' },
  { badge: 'Cross-Cultural Reach', description: 'Content bridges Emirati-Expat divide. Resonates with diverse demographics (Filipino, Indian, Arab)—critical node for Fake Ozempic and Flu Protocol warnings' },
]

const strategicRecommendations: Array<{
  title: string
  mechanism: string
}> = [
  { title: 'Closing the Biohacking Void: The "Verified Wellness" Standard', mechanism: 'DoH should introduce "Wellness Efficacy" seal/disclaimer for IV and Cryotherapy clinics. Mandate marketing materials carry: "This is a wellness product. Not substitute for medical treatment and not clinically proven to cure disease in healthy adults." Launch campaign: Licensing ≠ Efficacy.' },
  { title: 'Institutionalizing Men\'s Health', mechanism: 'Move from "Movember" to "Men\'s Health Standard." Integrate mandatory "Men\'s Health Check" (Prostate + Mental Health) into Weqaya program or visa renewal medicals for men over 45. Remove "Test by Request" barrier. Use themes of Performance, Legacy, Maintenance (automotive metaphors) rather than Sickness.' },
  { title: 'Combating "Fake Ozempic" with Digital Biosecurity', mechanism: 'Launch "Verify Your Pen" digital portal. App/website where users scan 2D data matrix on Ozempic/Mounjaro pens to verify authenticity. Intensify monitoring of Mussafah-to-Consumer delivery corridor targeting "open yard" storage and social media "drop-shippers."' },
  { title: 'The Adult ADHD Economic Strategy', mechanism: 'Recognize Adult ADHD as key component of "Workforce Sustainability." Encourage insurers (Daman) to include Adult ADHD assessments in standard corporate wellness packages—frame as productivity booster. Roll out CME for GPs to recognize Adult ADHD symptoms, reducing referral time.' },
  { title: 'Operationalizing the Khalid Al Ameri Node', mechanism: 'Formalize "Health Narrative Ambassador" role. Partner with Al Ameri to produce content series deconstructing complex health shifts—"Obesity is a Disease" narrative and "Dangers of Fake Meds." Storytelling translates dry policy into human-centric narratives driving behavioral change.' },
]

// File 05: NARRATIVE CARTOGRAPHY - Data Arrays (50 Narratives)
const heroProtectiveFather: Array<{
  id: number
  title: string
  coreBelief: string
}> = [
  { id: 1, title: 'The Benevolent Father Forgives', coreBelief: 'The Government is protective and values my presence over my wallet.' },
  { id: 2, title: 'The Shield Against the Plague', coreBelief: 'Abu Dhabi stopped the pandemic better than anyone; we are biologically secure here.' },
  { id: 3, title: 'The Worker\'s Guardian', coreBelief: 'The System acts as a lever for the weak against the predatory employer.' },
  { id: 4, title: 'The Golden Ticket (Status & Security)', coreBelief: 'Meritocracy is real, and the state rewards value with permanence.' },
  { id: 5, title: 'The Humanitarian Safety Net', coreBelief: 'The bottom line of the healthcare system is human dignity, not just profit.' },
]

const heroMagician: Array<{
  id: number
  title: string
  coreBelief: string
}> = [
  { id: 6, title: 'Cleveland Clinic is the New Mecca', coreBelief: 'My doctor at Cleveland Clinic is a miracle worker; I have access to the best science on earth.' },
  { id: 7, title: 'The AI Doctor Will See You Now', coreBelief: 'Technology eliminates human error and creates hyper-efficiency.' },
  { id: 8, title: 'The Global Hub', coreBelief: 'We are the center of the medical world.' },
  { id: 9, title: 'The Fertility Oasis', coreBelief: 'Science here can overcome biological destiny.' },
  { id: 10, title: 'The Maternity Sanctuary', coreBelief: 'The system cherishes the creation of family.' },
  { id: 11, title: 'The Post-Oil Body', coreBelief: 'The leadership is fighting the \'diseases of affluence\' on our behalf.' },
  { id: 12, title: 'The Transparency Engine (Muashir)', coreBelief: 'Quality is monitored, and bad actors are weeded out by the state.' },
  { id: 13, title: 'The Crisis Manager', coreBelief: 'The system has the capacity to handle emergencies without collapsing.' },
  { id: 14, title: 'The Inclusive Healer', coreBelief: 'Healthcare is a right, reaching even the margins of society.' },
  { id: 15, title: 'The Genomic Shield', coreBelief: 'We are building a disease-free generation through genetic mastery.' },
  { id: 16, title: 'The Sovereign Pharmacist', coreBelief: 'Resource wealth translates to medication access.' },
  { id: 17, title: 'The Robotic Surgeon', coreBelief: 'Machines are more precise and safer than human hands.' },
]

const victimTrap: Array<{
  id: number
  title: string
  coreBelief: string
}> = [
  { id: 18, title: 'The Fine Print Ambush', coreBelief: 'Insurance companies are trying to trick us with fine print; the coverage is an illusion.' },
  { id: 19, title: 'The Retroactive Fine Nightmare', coreBelief: 'The bureaucracy is disjointed and punishes us for its own lack of synchronization.' },
  { id: 20, title: 'The Golden Visa Limbo', coreBelief: 'Privilege comes with a hidden administrative penalty.' },
  { id: 21, title: 'The Sponsor\'s Burden (The Maid Tax)', coreBelief: 'The state is outsourcing its welfare obligations to the middle-class household.' },
  { id: 22, title: 'The Denial Algorithm', coreBelief: 'A robot decides if I suffer or heal, based on profit margins.' },
  { id: 23, title: 'The Network Lockout', coreBelief: 'World-class care exists here, but not for people like me.' },
  { id: 24, title: 'The ADHD Drought', coreBelief: 'The system ignores \'invisible\' disabilities and prioritizes physical ailments.' },
  { id: 25, title: 'The Silent Killer (Air Quality)', coreBelief: 'The environment is actively harming us, and the official narrative downplays it.' },
  { id: 26, title: 'The SEHA App Lottery', coreBelief: 'Public digital infrastructure is user-hostile.' },
  { id: 27, title: 'The Dental Exodus', coreBelief: 'Local specialized care (dental) is a financial rip-off.' },
  { id: 28, title: 'The Therapy Tax', coreBelief: 'Only the rich are allowed to be depressed and get help.' },
  { id: 29, title: 'The Fast Food Trap', coreBelief: 'Lifestyle diseases are a product of the environment, not just personal choice.' },
  { id: 30, title: 'The Emergency Room Gamble', coreBelief: 'Financial risk outweighs medical risk in the decision to seek help.' },
  { id: 31, title: 'The Ghost Fines', coreBelief: 'The system punishes silence and lacks transparency in enforcement.' },
  { id: 32, title: 'The Second-Opinion Syndrome', coreBelief: 'Doctors prioritize billing targets over patient health.' },
  { id: 33, title: 'The Basic Plan Stigma', coreBelief: 'My health is valued less because my salary is lower.' },
  { id: 34, title: 'The Sick Leave Inquisition', coreBelief: 'Recovery is secondary to bureaucratic proof.' },
]

const progressFuturist: Array<{
  id: number
  title: string
  coreBelief: string
}> = [
  { id: 35, title: 'The End of Genetic Disease', coreBelief: 'Genomic screening will save the next generation from the suffering of the ancestors.' },
  { id: 36, title: 'The Wellness Revolution', coreBelief: 'We are reclaiming our bodies through community wellness.' },
  { id: 37, title: 'The Preventive Pivot', coreBelief: 'The state is investing in my longevity, not just my treatment.' },
  { id: 38, title: 'The Homegrown Healer', coreBelief: 'We are building our own intellectual sovereignty in medicine.' },
  { id: 39, title: 'The Longevity Hub', coreBelief: 'Abu Dhabi is at the frontier of extending human life.' },
  { id: 40, title: 'The Mental Health Awakening', coreBelief: 'The culture is evolving to embrace psychological health.' },
  { id: 41, title: 'The Tolerance of Care', coreBelief: 'Diversity in healthcare leads to personalized, culturally intelligent care.' },
  { id: 42, title: 'The Telehealth Standard', coreBelief: 'Digital healthcare is the new baseline for convenience.' },
  { id: 43, title: 'The Patient Power Shift', coreBelief: 'Data transparency empowers me to challenge the doctor.' },
  { id: 44, title: 'The Regulatory Cleanup', coreBelief: 'Regulation is painful but necessary for long-term safety.' },
  { id: 45, title: 'The Medical Tourism Reverse', coreBelief: 'We have reached parity with the West.' },
  { id: 46, title: 'The Green Health', coreBelief: 'Sustainability is a public health imperative.' },
  { id: 47, title: 'The Integrated Safety Net', coreBelief: 'The state is becoming more humane and adaptive.' },
  { id: 48, title: 'The Data Breach Fear', coreBelief: 'My biological data could be weaponized against me.' },
  { id: 49, title: 'The Vitamin D Paradox', coreBelief: 'Modernity has a biological cost.' },
  { id: 50, title: 'The Smartest City', coreBelief: 'Connectivity equals survival.' },
]

const narrativeVectors: Array<{
  platform: string
  type: 'Hero' | 'Victim' | 'Progress' | 'Mixed'
  demographic: string
  characteristics: string
}> = [
  { platform: 'Reddit (r/abudhabi)', type: 'Victim', demographic: 'Western & Asian Expats', characteristics: 'Anonymous, critical, detailed horror stories about fines and insurance. High viral potential for negative sentiment.' },
  { platform: 'LinkedIn', type: 'Hero', demographic: 'Professionals / Execs', characteristics: 'Performative loyalty, Golden Visa flexing, CSR promotion. Echo chamber for "State Success" stories.' },
  { platform: 'Facebook Groups', type: 'Mixed', demographic: 'Mothers / Families', characteristics: 'Pragmatic, recommendation-based. High trust in "Maternity Sanctuary" and "Fertility Oasis" narratives.' },
  { platform: 'Majlis / Word of Mouth', type: 'Hero', demographic: 'Nationals / Arab Expats', characteristics: 'Deep trust in the State (Benevolent Father). Focus on Genome Program and "Homegrown Healer."' },
  { platform: 'Official News (WAM)', type: 'Hero', demographic: 'General Public', characteristics: 'The source of the "Super-Narrative" (Amnesty, New Tech). Often viewed with skepticism by "Victim" narrators.' },
  { platform: 'Doctor Offices', type: 'Victim', demographic: 'Patients', characteristics: 'The "Point of Friction." Where the "Fine Print Ambush" and "Denial Algorithm" narratives are born in real-time.' },
]

// File 06: UAE HEALTH MYTHS & MISCONCEPTIONS - Data Arrays (50 Myths)
type RiskLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'

const securityParadoxMyths: Array<{
  id: number
  title: string
  belief: string
  reality: string
  driver: string
  riskLevel: RiskLevel
}> = [
  {
    id: 1,
    title: 'The "Mandatory Omnipotence" Fallacy',
    belief: 'Because health insurance is mandatory in Dubai and Abu Dhabi, the basic plan I hold covers everything I might need, including major surgeries, chronic disease management, and cancer care.',
    reality: 'The mandatory basic plans (Essential Benefits Plan in Dubai) provide a fundamental safety net, not comprehensive coverage. They have strict limitations including significant exclusions, pharmacy benefit caps (often AED 1,500), and restricted networks excluding tertiary care hospitals.',
    driver: 'Optimism Bias & Trust Heuristic',
    riskLevel: 'HIGH'
  },
  {
    id: 2,
    title: 'The "Pre-Existing Condition" Fatalism',
    belief: 'I cannot switch jobs or change my insurance provider because my pre-existing conditions will be automatically excluded or premiums will become unaffordable.',
    reality: 'Under mandatory schemes in Dubai and Abu Dhabi, insurers are generally required to cover pre-existing conditions. While a six-month waiting period may apply for new residents, those with continuous coverage switching plans are protected by "portability" regulations.',
    driver: 'Loss Aversion (Job Lock)',
    riskLevel: 'MEDIUM'
  },
  {
    id: 3,
    title: 'The "Medical Tourism" Reverse Myth',
    belief: 'For any serious medical intervention—cardiac surgery, oncology, neurosurgery—one must travel abroad to Germany, the UK, or the US. Local UAE hospitals are only suitable for minor ailments.',
    reality: 'Today the UAE has established centers of excellence (Cleveland Clinic Abu Dhabi, American Hospital) that rival international benchmarks. Outcomes for major procedures are comparable to Western nations. Traveling abroad fragments care and disrupts post-operative follow-up.',
    driver: 'Halo Effect & Authority Bias',
    riskLevel: 'MEDIUM'
  },
  {
    id: 4,
    title: 'The "Invincibility" Delusion',
    belief: 'I am young, fit, and healthy; therefore, I do not need comprehensive insurance. The cheapest "visa-only" plan is sufficient to satisfy the law.',
    reality: 'Youth does not confer immunity against acute appendices, traffic accidents, or autoimmune diseases. Emergency treatments in UAE private sector can cost tens of thousands of dirhams. Basic plans often have low annual limits (AED 150,000) that can be exhausted by a single ICU week.',
    driver: 'Hyperbolic Discounting',
    riskLevel: 'HIGH'
  },
  {
    id: 5,
    title: 'The "Employer Benevolence" Assumption',
    belief: 'My company provides health insurance, so my family and I are fully protected. I don&apos;t need to check the details.',
    reality: 'Corporate group policies vary wildly. Many employers opt for minimum regulatory requirements with high deductibles, significant co-insurance (20%), and may exclude maternity complications, dental, or mental health support entirely.',
    driver: 'Status Quo Bias',
    riskLevel: 'MEDIUM'
  },
  {
    id: 6,
    title: 'The "DIY Broker" Misconception',
    belief: 'I don&apos;t need a professional insurance broker; buying directly online is cheaper and easier, and I can understand the policy myself.',
    reality: 'Insurance policies contain complex fine print regarding exclusions, sub-limits, and network tiers. A layperson may not understand the difference between "in-patient" and "day-case" or implications of "network restrictions." Going "direct" often results in purchasing hollow coverage.',
    driver: 'Dunning-Kruger Effect',
    riskLevel: 'LOW'
  },
  {
    id: 7,
    title: 'The "Maternity Exclusion" Fear',
    belief: 'Health insurance won&apos;t cover my pregnancy, or it will cost a fortune, so I should delay seeking prenatal care.',
    reality: 'In Dubai and Abu Dhabi, maternity coverage is a mandated benefit in basic health insurance plans. While there are limits and waiting periods for new policies, total exclusion of maternity is illegal under mandatory schemes.',
    driver: 'Negativity Bias',
    riskLevel: 'MEDIUM'
  },
  {
    id: 8,
    title: 'The "Preventive Care Void" Myth',
    belief: 'Insurance only pays when I am sick. It doesn&apos;t cover check-ups, vaccinations, or screenings.',
    reality: 'Modern UAE health policies increasingly mandate coverage for preventive services, including vaccinations, cancer screenings (mammograms), and annual check-ups, aligning with MoHAP&apos;s preventative health goals.',
    driver: 'Availability Heuristic',
    riskLevel: 'HIGH'
  },
  {
    id: 9,
    title: 'The "Price-Quality" Equivalence Error',
    belief: 'The most expensive insurance plan is the best, and the cheapest is useless.',
    reality: 'Expensive plans often charge for "concierge" perks—private rooms, international coverage—rather than better medical outcomes. Some mid-range plans offer excellent local networks. The "best" plan matches your specific health profile, not the highest premium.',
    driver: 'Price-Quality Heuristic',
    riskLevel: 'LOW'
  },
  {
    id: 10,
    title: 'The "Expat Class" Myth',
    belief: 'Expats cannot access the same high-quality "premium" plans that nationals or VIPs use.',
    reality: 'Insurance in the UAE is a marketplace. Any resident can purchase Gold or Platinum tier plans if willing to pay the premium. Access is determined by affordability, not nationality or visa status.',
    driver: 'In-group/Out-group Bias',
    riskLevel: 'LOW'
  },
]

const pharmacologicalMyths: Array<{
  id: number
  title: string
  belief: string
  reality: string
  driver: string
  riskLevel: RiskLevel
}> = [
  {
    id: 11,
    title: 'The "Antibiotic Panacea"',
    belief: 'I need antibiotics to cure my flu, sore throat, or common cold quickly. If the doctor doesn&apos;t prescribe them, they are not treating me.',
    reality: 'Influenza, common cold, and most sore throats are viral infections. Antibiotics are designed solely to kill bacteria. Using them for viruses is biologically useless and actively harmful, contributing to antimicrobial resistance (AMR).',
    driver: 'Action Bias',
    riskLevel: 'CRITICAL'
  },
  {
    id: 12,
    title: 'The "Safe Disposal" Misconception',
    belief: 'It is safe and standard practice to flush unused antibiotics or medicines down the toilet.',
    reality: 'Flushed pharmaceuticals do not disappear; they dissolve and contaminate the water supply and ecosystem. In a region relying on desalinated and recycled water, these compounds can re-enter the food chain, contributing to environmental drug resistance.',
    driver: 'Out of Sight, Out of Mind',
    riskLevel: 'MEDIUM'
  },
  {
    id: 13,
    title: 'The "Stigma of Faith"',
    belief: 'Mental illness, depression, or anxiety is caused by a lack of faith (Iman), weak character, or Jinn possession. The cure lies in prayer, not psychiatry.',
    reality: 'Mental illnesses are complex biopsychosocial conditions involving neurochemistry, genetics, and environmental stressors. While faith can support recovery, it is not a replacement for medical and psychological intervention.',
    driver: 'Attribution Error & Spiritual Bypassing',
    riskLevel: 'CRITICAL'
  },
  {
    id: 14,
    title: 'The "Addiction Fear"',
    belief: 'If I start taking antidepressants or anti-anxiety medication, I will become addicted for life and lose my personality.',
    reality: 'Most modern antidepressants (SSRIs/SNRIs) are not addictive in the clinical sense. While they require tapering to avoid withdrawal effects, they do not cause craving or drug-seeking behavior. They restore chemical balance rather than altering personality.',
    driver: 'Fear of Loss of Control',
    riskLevel: 'HIGH'
  },
  {
    id: 15,
    title: 'The "Hijama Cure-All" Fallacy',
    belief: 'Hijama (wet cupping) can cure any disease, from hypertension to diabetes and infertility. It sucks the "bad blood" out of the body.',
    reality: 'While Hijama has historical significance and may offer subjective pain relief (counter-irritation or placebo), there is no high-quality clinical evidence that it cures chronic systemic diseases. The concept of "bad blood" is physiologically obsolete.',
    driver: 'Appeal to Tradition',
    riskLevel: 'MEDIUM'
  },
  {
    id: 16,
    title: 'The "Camel Milk Insulin" Myth',
    belief: 'Drinking camel milk replaces the need for insulin injections in diabetics because it contains natural insulin.',
    reality: 'Camel milk contains an insulin-like protein with hypoglycemic effects in animal studies, but it is NOT a substitute for insulin therapy. The concentration and bioavailability are insufficient to manage blood glucose clinically.',
    driver: 'Naturalistic Fallacy',
    riskLevel: 'HIGH'
  },
  {
    id: 17,
    title: 'The "Laser-Cancer" Link',
    belief: 'Laser hair removal causes skin cancer or damages internal organs because it uses radiation.',
    reality: 'Laser hair removal uses non-ionizing radiation (light energy) penetrating only the skin&apos;s top layers (dermis). It does not damage DNA like UV rays or X-rays and is not linked to cancer.',
    driver: 'Affect Heuristic',
    riskLevel: 'LOW'
  },
  {
    id: 18,
    title: 'The "Botox Freeze" Myth',
    belief: 'Botox is unsafe, toxic, and will permanently freeze your face or travel to your brain.',
    reality: 'Botox is a purified protein used safely for decades. When administered by a professional, it relaxes specific muscles locally. It does not "freeze" the face unless overused, and systemic spread is extremely rare at cosmetic doses.',
    driver: 'Availability Cascade',
    riskLevel: 'LOW'
  },
  {
    id: 19,
    title: 'The "Vaping Safety" Myth',
    belief: 'Vaping is just water vapor; it is a safe alternative to smoking and I can do it anywhere.',
    reality: 'Vape aerosols contain nicotine, heavy metals, ultrafine particles, and volatile organic compounds. It causes lung injury (EVALI), addiction, and affects adolescent brain development. It is NOT harmless water vapor.',
    driver: 'Relative Risk Fallacy',
    riskLevel: 'HIGH'
  },
  {
    id: 20,
    title: 'The "Shisha Filter" Myth',
    belief: 'Shisha is safer than cigarettes because the water filters out the toxins.',
    reality: 'The water cools the smoke but does not filter out toxins. A one-hour shisha session involves inhaling 100-200 times the volume of smoke of a single cigarette, delivering massive loads of tar, CO, and carcinogens.',
    driver: 'Sensory Deception',
    riskLevel: 'CRITICAL'
  },
  {
    id: 21,
    title: 'The "Dokha/Medwakh" Myth',
    belief: 'Dokha (smoked in a Medwakh pipe) is natural, additive-free tobacco and therefore safer than cigarettes.',
    reality: 'Dokha contains extremely high levels of nicotine and tar. One "hit" can provide the nicotine equivalent of multiple cigarettes, causing acute spikes in systolic blood pressure and heart rate. Linked to seizures and acute respiratory distress.',
    driver: 'Appeal to Nature',
    riskLevel: 'HIGH'
  },
]

const nutritionalMyths: Array<{
  id: number
  title: string
  belief: string
  reality: string
  driver: string
  riskLevel: RiskLevel
}> = [
  {
    id: 33,
    title: 'The "Holy Date" Immunity',
    belief: 'Dates are natural and Sunnah (prophetic tradition); diabetics can eat them in unlimited quantities without raising blood sugar.',
    reality: 'Dates are calorie-dense and high in natural sugars (fructose/glucose). While they have lower glycemic index than table sugar and contain fiber, eating them in excess causes significant blood glucose spikes. "Natural" sugar is still sugar.',
    driver: 'Halo Effect',
    riskLevel: 'HIGH'
  },
  {
    id: 34,
    title: 'The "Honey Panacea"',
    belief: 'Honey cures diabetes and all diseases. I should replace my medicine with honey.',
    reality: 'Honey has antibacterial properties and is healthier than refined sugar, but it is STILL sugar. It affects blood glucose levels. It is not a cure for systemic metabolic diseases.',
    driver: 'Appeal to Antiquity',
    riskLevel: 'HIGH'
  },
  {
    id: 35,
    title: 'The "Rice Belly" Myth',
    belief: 'Eating rice is the specific cause of a potbelly or obesity.',
    reality: 'Weight gain is a result of caloric surplus, not a single food item. Rice is a staple in many non-obese cultures (Japan). The issue is the quantity combined with high-fat oils (ghee) and sedentary lifestyle.',
    driver: 'Reductionism',
    riskLevel: 'MEDIUM'
  },
  {
    id: 36,
    title: 'The "Laban Confusion"',
    belief: 'Laban (fermented yogurt drink) is purely healthy and can be consumed like water.',
    reality: 'Laban is nutritious (calcium, probiotics) but often contains sodium and calories (especially full-fat versions). It is food, not water. Excessive consumption contributes to caloric intake.',
    driver: 'Categorization Error',
    riskLevel: 'LOW'
  },
  {
    id: 37,
    title: 'The "Karak Tea" Blind Spot',
    belief: 'Karak tea is just tea and milk; it&apos;s a light daily habit.',
    reality: 'A standard cup of Karak often contains massive amounts of sugar (4-5 teaspoons) and evaporated milk (concentrated fat/sugar). It is essentially a "liquid dessert," not a tea. Daily consumption adds hundreds of hidden calories.',
    driver: 'Habituation',
    riskLevel: 'HIGH'
  },
  {
    id: 38,
    title: 'The "Sugar Hyperactivity" Myth',
    belief: 'Sugar makes children hyperactive and causes ADHD symptoms.',
    reality: 'Meta-analyses show no link between sugar and hyperactivity (ADHD). The "rush" is usually due to the context of consumption (parties, excitement). The "sugar high" is a placebo effect observed in parents.',
    driver: 'Confirmation Bias',
    riskLevel: 'LOW'
  },
  {
    id: 39,
    title: 'The "Sugar-Only Diabetes" Myth',
    belief: 'I don&apos;t eat sweets, so I won&apos;t get diabetes.',
    reality: 'Type 2 Diabetes is driven by obesity, genetics, age, and sedentary lifestyle. A diet high in savory fats, processed carbs (bread, rice), and excessive calories can cause diabetes even without "sweets."',
    driver: 'Availability Heuristic',
    riskLevel: 'HIGH'
  },
  {
    id: 40,
    title: 'The "Silent Killer" Misunderstanding',
    belief: 'I will know I have high blood pressure because I will get a headache or feel dizzy.',
    reality: 'Hypertension is asymptomatic in the vast majority of cases until a catastrophic event (stroke/heart attack) occurs. Relying on symptoms is a deadly error.',
    driver: 'Somatic Marker Hypothesis',
    riskLevel: 'CRITICAL'
  },
]

const environmentalMyths: Array<{
  id: number
  title: string
  belief: string
  reality: string
  driver: string
  riskLevel: RiskLevel
}> = [
  {
    id: 22,
    title: 'The "8 Glasses" Rigid Rule',
    belief: 'Everyone must drink 8 glasses of water a day, regardless of whether they are in AC or outside.',
    reality: 'Hydration needs are individual depending on body mass, activity, and heat exposure. In UAE AC environments, people may need LESS, while outdoor workers need far MORE. Thirst is generally a reliable guide.',
    driver: 'Anchoring',
    riskLevel: 'LOW'
  },
  {
    id: 23,
    title: 'The "Solidified Fat" Myth',
    belief: 'Drinking cold water after a meal solidifies the oils/fats in your stomach, leading to cancer or obesity.',
    reality: 'The human body is thermogenic; it rapidly warms ingested fluids to body temperature (37°C). Cold water does not "freeze" fat in the stomach, nor does it cause cancer. Digestion is a chemical process involving enzymes.',
    driver: 'Visceral Simulation',
    riskLevel: 'LOW'
  },
  {
    id: 24,
    title: 'The "Desalinated Hair Loss" Myth',
    belief: 'Washing hair with UAE tap water causes hair loss because it is desalinated/hard.',
    reality: 'While UAE water can be "hard" (mineral-rich) or contain chlorine, there is no scientific evidence linking it to hair loss. Hair loss is more likely linked to Vitamin D deficiency, stress, diet, and thyroid issues.',
    driver: 'False Cause (Post Hoc)',
    riskLevel: 'LOW'
  },
  {
    id: 25,
    title: 'The "Toxic Tap Water" Myth',
    belief: 'You cannot drink tap water in Dubai/UAE; it is unsafe or dirty.',
    reality: 'The water leaving DEWA/ADDC plants meets WHO standards for potability. The risk lies in poorly maintained building water tanks, not the source. If tanks are cleaned, the water is safe.',
    driver: 'Distrust of Infrastructure',
    riskLevel: 'LOW'
  },
  {
    id: 26,
    title: 'The "AC Arthritis" Myth',
    belief: 'Sleeping in AC or exposure to cold air causes arthritis or joint pain.',
    reality: 'Cold does not CAUSE arthritis (degenerative or autoimmune). However, drops in barometric pressure and cold temperatures can heighten sensitivity to existing pain by causing tissues to contract. It reveals the condition rather than creating it.',
    driver: 'Correlation vs. Causation',
    riskLevel: 'LOW'
  },
  {
    id: 27,
    title: 'The "Sun-Drenched Vitamin D" Paradox',
    belief: 'We live in a sunny country, so I don&apos;t need to worry about Vitamin D deficiency.',
    reality: 'The UAE has some of the highest Vitamin D deficiency rates (up to 70-80%). Extreme heat forces people indoors, and cultural dress covers the skin, blocking UV synthesis. The sun is present, but exposure is absent.',
    driver: 'Availability Heuristic',
    riskLevel: 'HIGH'
  },
  {
    id: 28,
    title: 'The "Indoor Sunscreen" Blind Spot',
    belief: 'I don&apos;t need sunscreen if I am indoors or in a car.',
    reality: 'UVA rays (aging rays) penetrate glass windows in offices and cars. In a high-UV index environment like the UAE, skin damage occurs even during the commute or near office windows.',
    driver: 'Categorization Error',
    riskLevel: 'MEDIUM'
  },
  {
    id: 29,
    title: 'The "Sweat = Fat Loss" Fallacy',
    belief: 'If I&apos;m not sweating during a workout, or if I use a sauna suit to sweat more, I&apos;m burning more fat.',
    reality: 'Sweat is a cooling mechanism, not a measurement of calorie burn. Sauna suits cause water weight loss (dehydration), not fat loss, and can be dangerous by causing overheating.',
    driver: 'Tangibility Bias',
    riskLevel: 'MEDIUM'
  },
  {
    id: 30,
    title: 'The "Weekend Sleep Banking" Myth',
    belief: 'I can sleep 4 hours on weekdays and catch up by sleeping 12 hours on the weekend.',
    reality: '"Sleep debt" causes long-term metabolic and cognitive damage that cannot be fully reversed by binging on sleep. Irregular sleep patterns disrupt circadian rhythms.',
    driver: 'Accounting Metaphor',
    riskLevel: 'HIGH'
  },
  {
    id: 31,
    title: 'The "Wet Hair Cold" Myth',
    belief: 'Sleeping with wet hair or going into AC with wet hair causes the flu.',
    reality: 'Colds are caused by viruses. You cannot catch a virus from wet hair. Cold temperatures might stress the immune system slightly, but without the virus, there is no sickness.',
    driver: 'Association Learning',
    riskLevel: 'LOW'
  },
  {
    id: 32,
    title: 'The "Shower Filter Cure"',
    belief: 'Installing a Vitamin C or ionic shower filter will stop my hair from falling out.',
    reality: 'While filters remove chlorine (which can dry hair), they do not address the internal causes of hair loss (hormones, nutrition, stress). They are a cosmetic aid, not a medical cure for alopecia.',
    driver: 'Technological Salvation',
    riskLevel: 'LOW'
  },
]

const culturalMyths: Array<{
  id: number
  title: string
  belief: string
  reality: string
  driver: string
  riskLevel: RiskLevel
}> = [
  {
    id: 41,
    title: 'The "Eye Twitch" Omen',
    belief: 'My eye is twitching; something bad (or good) is about to happen.',
    reality: 'Eyelid twitching (myokymia) is a physiological response to stress, fatigue, caffeine, or dry eyes. It has no predictive power. It is a sign to rest, not a prophecy.',
    driver: 'Magical Thinking',
    riskLevel: 'LOW'
  },
  {
    id: 42,
    title: 'The "Kohl Safety" Myth',
    belief: 'Traditional Kohl (eyeliner) is natural and cleans the eyes/improves vision.',
    reality: 'Many traditional Kohl preparations (especially imported unregulated ones) contain high levels of lead (galena). Lead poisoning causes neurological damage, especially in children.',
    driver: 'Appeal to Tradition',
    riskLevel: 'MEDIUM'
  },
  {
    id: 43,
    title: 'The "Bakhour" Indoor Pollution Blindness',
    belief: 'Bakhour (incense) purifies the house and is harmless.',
    reality: 'Burning Bakhour releases high concentrations of Particulate Matter (PM2.5), carbon monoxide, and volatile organic compounds. It is a major source of indoor air pollution and a trigger for asthma.',
    driver: 'Olfactory Adaptation',
    riskLevel: 'HIGH'
  },
  {
    id: 44,
    title: 'The "Jinn Possession" Myth',
    belief: 'Sudden behavioral changes, talking to oneself, or seizures are signs of Jinn possession, not medical illness.',
    reality: 'These are often symptoms of schizophrenia, epilepsy, or acute psychosis. Delaying medical treatment in favor of exorcism allows the disease to progress, causing irreversible damage.',
    driver: 'Cultural Framing',
    riskLevel: 'CRITICAL'
  },
  {
    id: 45,
    title: 'The "Walking on Sand" Rheumatism Myth',
    belief: 'Walking barefoot on hot sand cures rheumatism and joint pain.',
    reality: 'While walking on sand strengthens foot muscles, there is no evidence that it "cures" rheumatism. For people with weak ankles or severe arthritis, the instability of sand can aggravate injuries.',
    driver: 'Placebo Effect & Grounding',
    riskLevel: 'LOW'
  },
  {
    id: 46,
    title: 'The "Menstruation Shame/Impurity" Myth',
    belief: 'Menstruation is a dirty illness; women should not shower or cook during this time.',
    reality: 'Menstruation is a normal biological process. Hygiene (showering) is essential to prevent infection. Dietary restrictions or isolation are cultural myths with no medical basis.',
    driver: 'Disgust Sensitivity',
    riskLevel: 'MEDIUM'
  },
]

const pediatricMyths: Array<{
  id: number
  title: string
  belief: string
  reality: string
  driver: string
  riskLevel: RiskLevel
}> = [
  {
    id: 47,
    title: 'The "Eating for Two" Pregnancy Myth',
    belief: 'Pregnant women must eat twice as much food to nourish the baby.',
    reality: 'In the first trimester, no extra calories are needed. In the 2nd and 3rd, only ~300-450 extra calories are needed (a sandwich and yogurt). Excessive weight gain leads to gestational diabetes and complications.',
    driver: 'Quantitative Fallacy',
    riskLevel: 'HIGH'
  },
  {
    id: 48,
    title: 'The "Baby Walker" Development Myth',
    belief: 'Baby walkers help children learn to walk faster.',
    reality: 'Walkers actually DELAY motor development by allowing movement without muscle strength. They are also a leading cause of head injuries in infants (falling down stairs or reaching hot objects).',
    driver: 'Visual Confirmation',
    riskLevel: 'MEDIUM'
  },
  {
    id: 49,
    title: 'The "Teething Fever" Myth',
    belief: 'My baby has a high fever (over 38°C) because they are teething.',
    reality: 'Teething causes mild irritability and perhaps a slight temp rise, but NOT a true fever. Attributing high fever to teething causes parents to miss real infections like otitis media or UTIs.',
    driver: 'Illusory Correlation',
    riskLevel: 'HIGH'
  },
]

const highRiskMyths: Array<{
  category: string
  specificMyth: string
  driver: string
  riskLevel: RiskLevel
  outcome: string
}> = [
  { category: 'Treatment', specificMyth: 'Antibiotics cure flu', driver: 'Action Bias', riskLevel: 'CRITICAL', outcome: 'Antimicrobial Resistance' },
  { category: 'Treatment', specificMyth: 'Mental Illness = Faith issue', driver: 'Attribution Error', riskLevel: 'CRITICAL', outcome: 'Suicide / Chronic Disability' },
  { category: 'Lifestyle', specificMyth: 'Shisha is safer than cigarettes', driver: 'Sensory Deception', riskLevel: 'CRITICAL', outcome: 'COPD / CVD / Cancer' },
  { category: 'Diet', specificMyth: 'Dates/Honey are safe for diabetics', driver: 'Halo Effect', riskLevel: 'HIGH', outcome: 'Hyperglycemia / Diabetes Complications' },
  { category: 'System', specificMyth: 'Mandatory Insurance covers all', driver: 'Optimism Bias', riskLevel: 'HIGH', outcome: 'Financial Shock / Delayed Care' },
  { category: 'Lifestyle', specificMyth: 'Vaping is safe water vapor', driver: 'Relative Risk Fallacy', riskLevel: 'HIGH', outcome: 'Lung Injury / Youth Addiction' },
  { category: 'Pediatric', specificMyth: 'Teething causes high fever', driver: 'Illusory Correlation', riskLevel: 'HIGH', outcome: 'Missed Infections (Meningitis/Otitis)' },
]

// File 09: MAPPING HEALTHCARE EMOTIONS - Data Arrays (50 Emotional States)

const temporalityTerror = [
  {
    id: 1,
    name: 'Scanxiety',
    trigger: 'The looming date of a surveillance scan or the wait for results',
    description: 'A cyclical, event-specific terror associated with medical imaging. The mechanism involves reactivation of trauma where the patient is forced to revisit the site of their diagnostic origin. Patients report a physiological shift—insomnia, irritability, and somatic symptoms—days or weeks before the appointment.',
    quote: 'I live my best life from scan to scan... As scan day approaches, I do feel scanxiety, which is just a euphemism for anticipatory terror.'
  },
  {
    id: 2,
    name: 'Suspended Animation',
    trigger: 'The visual dominance of a clock in a silent waiting room',
    description: 'An existential pause where the patient is stripped of social roles and reduced to a "waiter." The presence of the clock becomes antagonistic. The ticking clock does not just measure minutes; it measures "how little time someone you love might have remaining."',
    quote: 'The clock has superpowers... it somehow simultaneously has the ability to remind you of how short life is.'
  },
  {
    id: 3,
    name: 'Ambiguity Distress',
    trigger: 'Symptoms that defy categorization or clear timelines',
    description: 'Distinct from fear of a bad diagnosis is the fear of NO diagnosis. "Ambiguity tolerance" is the distress caused by the formless. The inability to label suffering prevents the patient from organizing psychological defenses. A named enemy can be fought; an unnamed shadow cannot.',
    quote: 'Uncertain waits are longer than known or finite waits... Unexplained waits are longer than explained waits.'
  },
  {
    id: 4,
    name: 'Hyper-Vigilance',
    trigger: 'Parents fearing \'unknown viruses\' in schools during flu season',
    description: 'In the context of pediatric care or chronic management, "vigilance" is a high-arousal state of protective observation. It is an exhausting scan of the environment for threats—an evolutionary mechanism of "protection against harm" gone into overdrive.',
    quote: 'Vigilance-anticipation-hope... Protection against harm... Rejection of whatever may be harmful.'
  },
  {
    id: 5,
    name: 'White Coat Hypertension',
    trigger: 'Being in clinical environment with medical authority figures',
    description: 'A conditioned physiological response to medical authority rooted in loss of autonomy and fear of judgment. The mere sight of clinical regalia triggers a "fight or flight" response specific to the location. The patient may be calm in all other aspects of life but experiences disintegration of composure within clinic walls.',
    quote: 'Fear (terror) or Rage-anger-annoyance... specific to the location.'
  },
]

const epistemologyPain = [
  {
    id: 6,
    name: 'Medical Gaslighting',
    trigger: 'A provider attributing severe physical pain to "anxiety" or "hormones"',
    description: 'The psychological state induced when a provider dismisses physical symptoms as psychogenic. Particularly prevalent among women and younger patients who are often told they are "too young" to be sick. The emotion is a complex mix of self-doubt ("Am I crazy?") and fury.',
    quote: 'I stopped her and said, \'It\'s not just 15 minutes—it\'s 15 minutes.\'...to be told you are overreacting... can just make you feel worse.'
  },
  {
    id: 7,
    name: 'Vindication',
    trigger: 'Finally receiving a positive test result after years of negative ones',
    description: 'Contrary to assumption that a diagnosis of chronic illness brings only sadness, for many it brings "vindication." After months or years of the "diagnostic odyssey," receiving a label—even for a severe condition—serves as proof of the patient\'s credibility.',
    quote: 'When I first heard there was a strong possibility I had Lyme, I was so sure the doctor was feeding me a \'lazy diagnosis.\'...certainly someone would have noticed something.'
  },
  {
    id: 8,
    name: 'Desperation',
    trigger: 'The cycle of "referral loop" without answers',
    description: 'For rare disease patients, the journey to diagnosis is defined by "desperation." The "diagnostic odyssey" averages nearly five years, involving endless referrals and contradictory opinions. The emotion is a frantic, high-stakes search for answers, often driven by deterioration of the patient\'s condition.',
    quote: 'Countless medical consultations, uncertainty, and incorrect diagnoses often leave patients helpless... feeling trapped in a cycle with no clear answers.'
  },
  {
    id: 9,
    name: 'Imposter Syndrome',
    trigger: 'Not "looking the part" of a sick person in public',
    description: 'Patients with invisible disabilities (e.g., fibromyalgia, early MS, mental health conditions) often feel guilt or fraudulence when accessing resources (like parking spaces or priority seating) because they do not "look sick."',
    quote: 'When people do not fulfill the sick role, e.g., by not looking or appearing sick as per the stereotype, feelings of [shame/doubt arise].'
  },
  {
    id: 10,
    name: 'Biological Betrayal',
    trigger: 'A cancer recurrence after a period of remission',
    description: 'In chronic illness and cancer recurrence, patients describe a sense of "betrayal" by their own bodies. This is an internal schism where the body, previously the vessel of agency, becomes the antagonist. It is a loss of trust in one\'s own biology.',
    quote: 'For someone who has — or has had — cancer, a common fear is that their body will betray them, or that cancer will eventually overcome them.'
  },
]

const bureaucracyFriction = [
  {
    id: 11,
    name: 'Financial Rage',
    trigger: 'A surprise bill for an out-of-network provider at an in-network hospital',
    description: '"Financial rage" is a specific, potent anger triggered by "surprise billing" or opaque costs. It is distinct from grief of illness; it is a sense of being exploited at a moment of vulnerability. Patients describe being "livid" at the system, feeling their financial future is being held hostage.',
    quote: 'I was livid. It cost us almost a month of my maternity leave... It makes no sense but our hands are tied since the hospital billed it.'
  },
  {
    id: 12,
    name: 'Bureaucratic Confusion',
    trigger: 'Expats trying to understand \'Co-pay\' vs \'Deductible\'',
    description: 'Characterized by intellectual disorientation regarding the "rules" of healthcare. Typified by the expat experience trying to decipher insurance terminology, but extends to any patient navigating a complex payer system. It is a feeling of being an outsider, linguistically and systemically.',
    quote: 'I can see how navigating this may seem difficult... navigating the diagnostic journey... characterized by uncertainty and frustration.'
  },
  {
    id: 13,
    name: 'Digital Isolation',
    trigger: 'Interacting with a chatbot that cannot process nuance',
    description: 'With the rise of telehealth and patient portals, a new emotion has emerged. Patients feel disconnected, shouting into a digital void. The lack of human "webside manner" and reliance on chatbots creates a sense of abandonment. The "relentless agreeableness" of chatbots fails to provide empathy of a human witness.',
    quote: 'Because of chatbots\' relentless agreeableness, many feel like their concerns are finally being heard [but]... the syncophancy phenomenon... has led to [isolation].'
  },
  {
    id: 14,
    name: 'Algorithmic Frustration',
    trigger: 'An automated system misinterpreting "positive" results',
    description: 'Distinct from isolation, this is the active frustration of being categorized by an inflexible algorithm. It occurs when a patient\'s complex narrative is forced into drop-down menus or keyword searches that fail to capture the reality of their condition.',
    quote: 'Automated tools may struggle to capture these context shifts... Rhetorical devices like sarcasm and irony... are notoriously difficult for algorithms.'
  },
  {
    id: 15,
    name: 'Administrative Fatigue',
    trigger: 'Spending hours on hold to coordinate between providers',
    description: 'For patients with complex conditions, managing care becomes a second job. "Administrative fatigue" is the exhaustion resulting from being the liaison between disjointed specialists, insurers, and pharmacies. The patient feels they are the only thread holding their care team together.',
    quote: 'Suddenly, his days were consumed with: Countless hours on the phone playing the liaison... sap this attention, causing psychological stress.'
  },
]

const acuteSurgical = [
  {
    id: 16,
    name: 'Pre-Op Vulnerability',
    trigger: 'Lying on a gurney in a gown, waiting for anesthesia',
    description: 'The moments before surgery represent a peak of existential vulnerability. The patient is unclothed, separated from loved ones, and about to surrender consciousness. This state is fragile; a single kind word can anchor the patient, while a dismissive comment can induce panic.',
    quote: 'We can feel at our most vulnerable when we\'re lying in a hospital bed... The time before surgery is filled with uncertainty.'
  },
  {
    id: 17,
    name: 'Anesthesia Fear',
    trigger: 'The prospect of going under general anesthesia',
    description: 'Distinct from fear of surgical pain is the "anesthesia fear"—the fear of the void, of not waking up, or of waking up paralyzed. It is a primal fear of the loss of the self, often described as a loss of control over one\'s own narrative.',
    quote: 'Fear of the void, of not waking up, or of waking up paralyzed.'
  },
  {
    id: 18,
    name: 'ER Disorientation',
    trigger: 'The chaotic, sleepless environment of the ICU/ER',
    description: 'The Emergency Room environment—characterized by noise, bright lights, and lack of privacy—triggers "disorientation" and "sensory overload." For elderly patients, this can precipitate delirium. They describe feeling "prisoned" or "caged," leading to defensive aggression.',
    quote: 'Feeling of being prisoned. Feeling of lack of control over the conditions... Tendency towards hostile behaviors.'
  },
  {
    id: 19,
    name: 'Delirium Shame',
    trigger: 'Recalling aggressive behavior during an ICU psychosis',
    description: 'Survivors of ICU delirium often experience intense "shame" regarding their behavior while hallucinating. Even though the actions were involuntary (e.g., hitting a nurse, pulling tubes), the memory of them creates a lingering sense of guilt and social fracture.',
    quote: 'Delirium also often causes patients to feel frightened, angry, lonely and ashamed... May see or hear things that are not there.'
  },
  {
    id: 20,
    name: 'Abandonment',
    trigger: 'Being discharged with complex instructions and no help',
    description: 'Patients describe the transition from hospital to home not as relief, but as "abandonment." They go from 24/7 monitoring to zero support, feeling they have been "brushed aside." This "cliff edge" of care is a primary driver of anxiety and readmission.',
    quote: 'I clearly needed more serious care, and Royal Jubilee just brushed me aside... I used to pace around... whispering, \'I want my Mom.\''
  },
  {
    id: 21,
    name: 'Dissociation',
    trigger: 'Hearing the words "It\'s cancer" or "terminal"',
    description: 'Upon receiving a catastrophic diagnosis, patients often enter a state of "dissociation." They report an out-of-body experience, watching the scene unfold as if in a movie. It is a protective neuro-cognitive mechanism against the immediate trauma of the news.',
    quote: 'You may feel outside of your body, as if you\'re watching yourself... Thinking that people and things around you are distorted and not real.'
  },
]

const chronicIllness = [
  {
    id: 22,
    name: 'Identity Grief',
    trigger: 'Realizing one can no longer participate in a defining hobby',
    description: 'Chronic patients mourn the death of their "healthy self." This is "disenfranchised grief" because the person is still alive, but their identity (as a runner, a worker, a provider) has been eroded. It is a grief for lost potential.',
    quote: 'We often experience a loss of parts our own identities... Sometimes the relationship loss is in effect with ourselves – we realize that we can no longer become or maintain who we were.'
  },
  {
    id: 23,
    name: 'Radical Acceptance',
    trigger: 'Acknowledging that a disability is permanent',
    description: 'Eventually, many patients reach "radical acceptance." This is not happiness or approval of the illness, but a cessation of the war against reality. It allows the patient to focus energy on adaptation rather than denial. It is a state of "it is what it is."',
    quote: 'Radical acceptance is NOT approval, but rather completely and totally accepting with our mind, body and spirit that we cannot currently change the present facts.'
  },
  {
    id: 24,
    name: 'Experiential Isolation',
    trigger: 'Having a disease so rare there are no support groups',
    description: 'Patients with rare diseases suffer from "experiential isolation." Even if they have supportive families, they feel fundamentally alone because no one in their orbit understands the phenomenological reality of their condition. They are aliens in their own world.',
    quote: 'Loneliness and Isolation – Due to the rarity of their condition, finding others who understand their experience can be difficult.'
  },
  {
    id: 25,
    name: 'Professional Cynicism',
    trigger: 'Residents joking about \'Vitamin D deficiency\' despite living in the sun',
    description: 'Repeated cycles of treatment failure lead to "hope-fatigue." Patients become wary of optimism. This is often where "professional cynicism" emerges—humor serves as a callus against the pain of continuous medical disappointment.',
    quote: 'Cynicism: Residents joking about \'Vitamin D deficiency\' despite living in the sun.'
  },
  {
    id: 26,
    name: 'Solidarity',
    trigger: 'Connecting with others who share the diagnosis',
    description: 'Conversely, finding a community of fellow sufferers triggers "solidarity." This sense of shared fate ("The tribe") provides a unique validation that even the most empathetic doctor cannot offer. It is the realization that "I am not the only one."',
    quote: 'Each of us has greater strength because of the other... The greatest healing therapy is friendship and love.'
  },
  {
    id: 27,
    name: 'Medical Defiance',
    trigger: 'Refusing a treatment to maintain lifestyle/control',
    description: 'Some patients respond to the loss of control with "defiance." This is an active rejection of the "sick role." It can manifest as non-compliance, but often it is a psychological survival strategy to assert agency over the medical narrative.',
    quote: 'I choose to get busy living... Cancer may have knocked me down, but I am back on my feet.'
  },
]

const parentalCrucible = [
  {
    id: 28,
    name: 'Ambiguous Loss',
    trigger: 'Viewing one\'s infant through the plastic of an incubator',
    description: 'Parents in the NICU experience "ambiguous loss"—their child is alive, but they cannot hold or parent them. The incubator creates a physical and emotional barrier that delays bonding. Parents feel they are observing their child\'s life rather than participating in it.',
    quote: 'The hardest part by far was the inability to hold my child. I felt as if precious bonding time was being lost.'
  },
  {
    id: 29,
    name: 'Parental Guilt',
    trigger: 'Learning a child\'s illness is hereditary',
    description: 'Parents of children with genetic conditions often harbor profound "guilt," feeling they are biologically responsible for their child\'s suffering. This guilt is often irrational but pervasive, leading to a desperate need to "fix" the unfixable.',
    quote: 'Concern that the disease was passed down to your children through your genes... Fear that you could have prevented the disease.'
  },
  {
    id: 30,
    name: 'Role Confusion',
    trigger: 'Fathers feeling sidelined in the NICU',
    description: 'Fathers in neonatal and pediatric settings often experience "role confusion." In a system often centered on the mother-child dyad, fathers can feel like "excluded" bystanders, unsure if their role is to grieve, to support, or to intervene.',
    quote: 'The final theme captures unique experiences of fathers, in particular that many felt excluded and confused about their role.'
  },
  {
    id: 31,
    name: 'Helplessness',
    trigger: 'Witnessing a child in pain during a procedure',
    description: 'Watching a child undergo a painful procedure (like a lumbar puncture or IV insertion) triggers a primal "helplessness." The parent is forced to suppress their instinct to intervene/protect, which can lead to long-term trauma.',
    quote: 'Feeling helpless while the child is in hospital... experienced more guilt than those who did not.'
  },
  {
    id: 32,
    name: 'Monitor Obsession',
    trigger: 'Constant watching of medical monitors in the NICU/PICU',
    description: 'Parents often develop an obsession with medical monitors, trusting the data more than the clinical staff. This "hyper-vigilance" is an exhausting state of constant alertness, where every beep triggers a cortisol spike.',
    quote: 'Trusting the data more than the clinical staff... every beep triggers a cortisol spike.'
  },
]

const reproductiveHealth = [
  {
    id: 33,
    name: 'Reproductive Jealousy',
    trigger: 'Seeing a pregnancy announcement on social media',
    description: 'Patients undergoing IVF often experience intense, visceral "jealousy" towards pregnant women. This is usually followed by shame for feeling such envy. It is a reaction to the perceived unfairness of biology, where others achieve effortlessly what the patient cannot buy with thousands of dollars.',
    quote: 'Jealousy can be triggered by quite obvious events – a friend announcing their pregnancy... It hurts to see other people succeed.'
  },
  {
    id: 34,
    name: 'Obsessive Hope',
    trigger: 'The 14 days following IVF transfer',
    description: 'The period between embryo transfer and the pregnancy test is a state of "obsessive hope" mixed with terror. Patients hyper-analyze every somatic sensation (cramps, nausea) as a sign of success or failure. It is a state of suspended reality.',
    quote: 'Infertility is this huge emotional roller coaster... The search for reassurance is complicated by the fact that pregnancy symptoms... can be attributed to side-effects.'
  },
  {
    id: 35,
    name: 'Silent Grief',
    trigger: 'A negative pregnancy test',
    description: 'Infertility is a "silent grief" because there is no tangible body to mourn. It is the grief of _potential_, of a future that never arrived. Society often fails to validate this loss, leaving the patient to mourn in isolation.',
    quote: 'For an absence, for someone who was never there at all, we are wordless to capture that particular emptiness... those missing babies hover like silent ephemeral shadows.'
  },
]

const stigmaShame = [
  {
    id: 36,
    name: 'Pharmacy Shame',
    trigger: 'Filling a prescription for Suboxone or antipsychotics',
    description: 'Patients filling prescriptions for controlled substances or stigmatized conditions often feel "shame" and "fear of judgment." They perceive the pharmacist\'s clinical checks as interrogations, fearing they will be labeled as "drug seekers."',
    quote: 'Stigma... can lead to internal shame, fear, discrimination... and may deter patients from pursuing necessary prevention.'
  },
  {
    id: 37,
    name: 'Dental Entrapment',
    trigger: 'Being reclined in the dental chair',
    description: 'Dental anxiety is frequently rooted in "trauma recall." The supine position, the invasion of the oral cavity, and the inability to speak creates a feeling of "entrapment" that parallels experiences of abuse. It is a state of utter vulnerability.',
    quote: 'The most significant concerns... are pain, vulnerability of being trapped and unable to escape, embarrassment and shame.'
  },
  {
    id: 38,
    name: 'Dental Shame',
    trigger: 'Opening one\'s mouth for an exam after years of avoidance',
    description: 'Distinct from phobia, "dental shame" is the embarrassment regarding the state of one\'s teeth. Patients fear the "lecture" from the hygienist, leading to further avoidance. It is a fear of moral judgment regarding hygiene and self-care.',
    quote: 'Common concerns were... worries about \'bad teeth\' (60.54%)... Fear of being judged or criticized.'
  },
  {
    id: 39,
    name: 'Infantilization',
    trigger: 'A doctor saying "Good girl" during a pelvic exam',
    description: 'Adult patients—especially women and the elderly—often report feeling "infantilized" by providers who use diminutives ("sweetie," "good girl") or speak in a singsong voice. This triggers "resentment" and a sense of diminished agency, reinforcing the power imbalance.',
    quote: 'I like to think id lose my shit if a doctor said \'good girl\' during a pap smear but I\'d probably just freeze up... it reinforces the idea that women are... incapable.'
  },
  {
    id: 40,
    name: 'Invasion',
    trigger: 'A physical exam where the doctor chats casually while touching intimate areas',
    description: 'The physical exam breaks social taboos. When performed without adequate explanation or draping, it triggers a feeling of "invasion." The patient feels objectified, as if their body is a mechanic\'s project rather than a person.',
    quote: 'Bedside physical examination teaching involves invasion of personal space, concern for potential embarrassment, and risk of objectification.'
  },
]

const therapeuticConnection = [
  {
    id: 41,
    name: 'Deep Gratitude',
    trigger: 'Patients posting about \'compassionate nurses\' after surgery',
    description: 'Gratitude in healthcare is rarely triggered by technical proficiency alone. It is almost always a response to "compassion"—the feeling of being seen. It is the nurse who stays late, or the doctor who sits down. It is the recognition of shared humanity.',
    quote: 'Gratitude: Patients posting about \'compassionate nurses\' after surgery.'
  },
  {
    id: 42,
    name: 'Empowerment',
    trigger: 'A physician presenting options and respecting the patient\'s choice',
    description: 'When providers actively involve patients in decision-making, asking "What matters to you?" rather than "What is the matter with you?", the result is "empowerment." The patient shifts from a passive recipient to an active partner, which is correlated with better clinical outcomes.',
    quote: 'To truly improve the patient experience, we must understand the patient journey from the patient\'s perspective... Strengthen me so that I may strengthen and empower others.'
  },
  {
    id: 43,
    name: 'Trust',
    trigger: 'A provider admitting uncertainty but promising diligence',
    description: 'Trust is the cessation of vigilance. It is the feeling that the patient can "let go" because the provider is competent and benevolent. It is the emotional safety net that allows healing to occur.',
    quote: 'Acceptance (love, trust)... Degrees of Feeling... Toleration -> Acceptance -> Adoration.'
  },
  {
    id: 44,
    name: 'Moral Injury',
    trigger: 'Being forced to pay for involuntary care',
    description: 'Patients feel "moral injury" when they witness or experience the system prioritizing profit or protocol over human well-being. This creates a deep sense of ethical violation and cynicism towards the institution.',
    quote: 'Forcing someone to assume financial liability for involuntary psychiatric care may infringe upon additional liberties... psychological stress.'
  },
  {
    id: 45,
    name: 'Validation',
    trigger: 'A doctor saying "This must be very hard for you"',
    description: 'Distinct from vindication, "validation" is the simple act of a provider acknowledging the patient\'s suffering. "I believe you" is one of the most therapeutic phrases in medicine. It counters the isolation of illness.',
    quote: 'Let me listen and be with patients even or especially when it is hard.'
  },
]

const endOfLife = [
  {
    id: 46,
    name: 'Loss of Autonomy',
    trigger: 'Discussing the transition to assisted living',
    description: 'For many elderly patients, the fear of "loss of autonomy" supersedes the fear of death. The prospect of moving to a nursing home or losing a driver\'s license triggers an identity crisis and resistance to care. It is a fight for the self.',
    quote: 'Caring for people with dementia... raises ethical dilemmas of how to balance autonomy with their safety... Patients accepted their dependence on others in order to uphold their actual autonomy.'
  },
  {
    id: 47,
    name: 'Survivor Guilt',
    trigger: 'Waking up with a donor organ',
    description: 'Organ transplant recipients often grapple with "survivor guilt"—the inescapable knowledge that their life is predicated on another\'s death. This "ghost" in the machine can lead to depression and a feeling of unworthiness.',
    quote: 'My organ donor had to die in order for me to live... The \'ghost\' has many strange ways of showing up... guilt from surviving and being alive is real.'
  },
  {
    id: 48,
    name: 'Dignity',
    trigger: 'A caregiver respecting the patient\'s preferences',
    description: 'In palliative care, "dignity" is the emotion experienced when a patient is treated as a person, not a body. It is preserved through small acts—asking permission to touch, respecting modesty, listening to stories.',
    quote: 'You matter because you are you, and you matter to the last moment of your life... must affirm their intrinsic worth.'
  },
  {
    id: 49,
    name: 'Hospice Peace',
    trigger: 'The decision to enter palliative care',
    description: 'When the battle for a cure is abandoned, patients often enter a state of "hospice peace." The permission to stop fighting allows for a profound shift in focus toward comfort, legacy, and connection. It is the relief of laying down the burden.',
    quote: 'You can keep praying for a miracle, but the person who\'s dying needs you to affirm that it\'s okay to stop fighting and to focus on peace and comfort instead.'
  },
  {
    id: 50,
    name: 'Transcendent Hope',
    trigger: 'Spiritual counseling or prayer',
    description: 'In the final stages, hope evolves from a desire for a biological cure to "transcendent hope"—a connection to something larger (God, nature, legacy). This provides meaning to the suffering and helps navigate the fear of annihilation.',
    quote: 'The very burden they carry becomes a source of transformation... In the depths of our pain, we can find solace.'
  },
]
