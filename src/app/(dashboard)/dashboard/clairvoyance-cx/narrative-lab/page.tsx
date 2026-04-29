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
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  Brain,
  ChevronRight,
  Droplets,
  Eye,
  Flame,
  Ghost,
  Globe,
  Heart,
  Hospital,
  Lightbulb,
  MessageSquare,
  Mic,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Waves,
  Zap,
} from 'lucide-react'
import { clairvoyanceData } from '@/lib/data-loader'

export default function NarrativeLabPage() {
  // Extract real data from data loader
  const { myths, voids, narratives, sentimentTimeline } = clairvoyanceData.narrativeLab
  // Chart data arrays
  const narrativeArcData = [
    { stage: 'Emergence', positive: 25, negative: 15, neutral: 60 },
    { stage: 'Growth', positive: 45, negative: 25, neutral: 30 },
    { stage: 'Peak', positive: 65, negative: 20, neutral: 15 },
    { stage: 'Decline', positive: 40, negative: 35, neutral: 25 },
    { stage: 'Resolution', positive: 55, negative: 30, neutral: 15 },
  ]

  const sentimentDistribution = [
    { name: 'Positive', value: 62, color: CHART_COLORS.success },
    { name: 'Neutral', value: 24, color: CHART_COLORS.info },
    { name: 'Negative', value: 14, color: CHART_COLORS.rose },
  ]

  const narrativeVelocity = [
    { narrative: 'Vaccine Safety', velocity: 850, reach: 450000, sentiment: 72 },
    { narrative: 'Insurance Issues', velocity: 620, reach: 280000, sentiment: 38 },
    { narrative: 'Mental Health', velocity: 540, reach: 320000, sentiment: 88 },
    { narrative: 'Hospital Quality', velocity: 410, reach: 180000, sentiment: 65 },
    { narrative: 'Digital Health', velocity: 380, reach: 150000, sentiment: 78 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="purple" className="mb-2">CLAIRVOYANCE-CX</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-purple">Narrative Lab</h1>
          <p className="mt-2 text-slate-600">
            Story lifecycle tracking with 144-dimensional sentiment analysis
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Search Narratives
          </Button>
          <Button className="bg-gradient-purple hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Create New Narrative
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Narratives"
          value="47"
          previousValue={42}
          icon={<BookOpen className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Narrative Hegemony"
          value="73%"
          previousValue={68}
          unit="control"
          icon={<Target className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Shadow Narratives"
          value="23"
          previousValue={19}
          icon={<Ghost className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
        <MetricCard
          title="Sentiment Shift"
          value="+15%"
          previousValue={8}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </div>

      <Tabs defaultValue="arc" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="arc">Narrative Arc Analyzer</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Triangulation</TabsTrigger>
          <TabsTrigger value="hegemony">Narrative Hegemony</TabsTrigger>
          <TabsTrigger value="shadow">Shadow Narratives</TabsTrigger>
          <TabsTrigger value="void">Narrative Void</TabsTrigger>
        </TabsList>

        {/* Narrative Arc Analyzer */}
        <TabsContent value="arc" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Narrative Arc Evolution</CardTitle>
                <CardDescription>Sentiment progression through story lifecycle</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={narrativeArcData}
                  xAxisKey="stage"
                  areas={[
                    { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.success, fillOpacity: 0.7 },
                    { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose, fillOpacity: 0.6 },
                  ]}
                  height={200}
                  stacked={false}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sentiment Split</CardTitle>
                <CardDescription>Current distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={sentimentDistribution}
                  donut={true}
                  height={200}
                  showLegend={false}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Story Lifecycle Tracking" description="Monitor narrative evolution across 5 stages" badge="AI-Powered">
            <div className="space-y-6">
              {/* Lifecycle Stages */}
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 rounded-full" />

                {/* Stages */}
                <div className="relative flex justify-between">
                  {lifecycleStages.map((stage, index) => (
                    <div key={index} className="flex flex-col items-center gap-3">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white shadow-lg ${
                        stage.status === 'active' ? 'border-purple-500 ring-4 ring-purple-100' :
                        stage.status === 'completed' ? 'border-emerald-500' :
                        'border-slate-200'
                      }`}>
                        {stage.icon}
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-slate-900">{stage.name}</div>
                        <div className="text-xs text-slate-500">{stage.count} narratives</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Narratives */}
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">Active Narrative Arcs</h3>
                <div className="grid gap-4 lg:grid-cols-2">
                  {activeNarratives.map((narrative, index) => (
                    <Card key={index} className="glass-card">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-purple text-white">
                            {narrative.icon}
                          </div>
                          <Badge variant={narrative.stage === 'Tertiary Dispersion' ? 'success' : 'denim'} className="text-xs">
                            {narrative.stage}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg mt-3">{narrative.title}</CardTitle>
                        <CardDescription>{narrative.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Lifecycle Progress</span>
                            <span className="font-semibold text-slate-900">{narrative.progress}%</span>
                          </div>
                          <Progress value={narrative.progress} className="h-2" />
                        </div>
                        <div className="grid grid-cols-3 gap-3 pt-2">
                          <div className="text-center">
                            <div className="text-lg font-bold text-slate-900">{narrative.reach}</div>
                            <div className="text-xs text-slate-500">Reach</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-slate-900">{narrative.velocity}</div>
                            <div className="text-xs text-slate-500">Velocity</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-slate-900">{narrative.impact}</div>
                            <div className="text-xs text-slate-500">Impact</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Triangulation */}
        <TabsContent value="sentiment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Narrative Velocity Analysis</CardTitle>
              <CardDescription>Top 5 narratives by speed and reach</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={narrativeVelocity}
                xAxisKey="narrative"
                bars={[
                  { dataKey: 'velocity', name: 'Velocity', color: CHART_COLORS.denim },
                ]}
                horizontal={true}
                height={250}
                showGrid={false}
              />
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* 144-Dimensional Emotional Map */}
            <GlassPanel title="Cognitive Resonance Map" description="144-dimensional emotional analysis">
              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-slate-200">
                  <div className="text-4xl font-extrabold text-slate-900">144</div>
                  <div className="text-sm text-slate-600">Emotional Dimensions Tracked</div>
                </div>

                {emotionDimensions.map((dimension, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {dimension.icon}
                        <span className="text-sm font-medium text-slate-700">{dimension.name}</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">{dimension.value}%</span>
                    </div>
                    <Progress value={dimension.value} className="h-2" />
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>Trend: {dimension.trend}</span>
                      <span>•</span>
                      <span>{dimension.delta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Sentiment Breakdown */}
            <GlassPanel title="Sentiment Breakdown" description="Multi-source sentiment triangulation">
              <div className="space-y-4">
                {sentimentSources.map((source, index) => (
                  <div key={index} className="rounded-lg bg-slate-50/50 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {source.icon}
                        <span className="font-semibold text-slate-900">{source.name}</span>
                      </div>
                      <Badge variant={source.sentiment > 70 ? 'success' : source.sentiment > 40 ? 'denim' : 'rose'} className="text-xs">
                        {source.sentiment}% Positive
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-lg bg-emerald-50 p-2">
                        <div className="text-lg font-bold text-emerald-600">{source.positive}</div>
                        <div className="text-xs text-slate-500">Positive</div>
                      </div>
                      <div className="rounded-lg bg-slate-100 p-2">
                        <div className="text-lg font-bold text-slate-600">{source.neutral}</div>
                        <div className="text-xs text-slate-500">Neutral</div>
                      </div>
                      <div className="rounded-lg bg-rose-50 p-2">
                        <div className="text-lg font-bold text-rose-600">{source.negative}</div>
                        <div className="text-xs text-slate-500">Negative</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* CRT Technology Overview */}
          <GlassPanel title="Cognitive Resonance Technology (CRT)" description="Advanced sentiment analysis capabilities">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {crtCapabilities.map((capability, index) => (
                <div key={index} className="rounded-lg bg-gradient-purple/5 border border-purple-200 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-purple text-white mb-3">
                    {capability.icon}
                  </div>
                  <div className="font-semibold text-slate-900 mb-1">{capability.name}</div>
                  <div className="text-sm text-slate-600">{capability.description}</div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Narrative Hegemony */}
        <TabsContent value="hegemony" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Hegemony Score */}
            <Card className="glass-card lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">Narrative Hegemony Score</CardTitle>
                <CardDescription>Control over industry discourse</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-6">
                  <div className="text-6xl font-extrabold text-slate-900">73%</div>
                  <div className="text-sm text-slate-500 mt-2">of healthcare narrative</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">DoH Share</span>
                    <span className="font-semibold text-emerald-600">+5.2%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[73%] bg-gradient-emerald rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Detractor Share</span>
                    <span className="font-semibold text-rose-600">-3.1%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[27%] bg-gradient-rose rounded-full" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share of Influence */}
            <Card className="glass-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Share of Influence Radar</CardTitle>
                <CardDescription>DoH vs. Detractors across channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {influenceChannels.map((channel, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {channel.icon}
                          <span className="text-sm font-medium text-slate-700">{channel.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-500">DoH: {channel.dohShare}%</span>
                          <span className="text-xs text-slate-500">Detractors: {channel.detectorShare}%</span>
                        </div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden flex">
                        <div className="h-full bg-gradient-emerald" style={{ width: `${channel.dohShare}%` }} />
                        <div className="h-full bg-gradient-rose" style={{ width: `${channel.detectorShare}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hegemony Strategy */}
          <GlassPanel title="Hegemony Enhancement Strategy" description="AI-recommended actions to increase narrative control">
            <div className="space-y-3">
              {hegemonyStrategies.map((strategy, index) => (
                <div key={index} className="flex items-start gap-4 rounded-lg bg-slate-50/50 p-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    strategy.priority === 'high' ? 'bg-rose-500 text-white' :
                    strategy.priority === 'medium' ? 'bg-amber-500 text-white' :
                    'bg-slate-200 text-slate-600'
                  }`}>
                    {strategy.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-900">{strategy.title}</h4>
                        <p className="mt-1 text-sm text-slate-600">{strategy.description}</p>
                      </div>
                      <Badge variant={strategy.priority === 'high' ? 'destructive' : strategy.priority === 'medium' ? 'warning' : 'secondary'} className="shrink-0 text-xs">
                        {strategy.priority}
                      </Badge>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                      <span>Impact: +{strategy.impact}%</span>
                      <span>•</span>
                      <span>{strategy.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Shadow Narratives */}
        <TabsContent value="shadow" className="space-y-6">
          {/* Executive Intelligence Assessment */}
          <Card className="glass-card bg-gradient-to-br from-purple-50/50 to-white border-purple-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-purple text-white">
                  <Ghost className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Executive Intelligence: The Shadow Information Ecosystem</CardTitle>
                  <CardDescription>Detecting and analyzing "Bridge Nodes" between encrypted WhatsApp groups and public discourse</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white p-4 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                    <div className="font-bold text-slate-900">Bridge Nodes Detected</div>
                  </div>
                  <div className="text-3xl font-extrabold text-purple-600">92</div>
                  <p className="text-xs text-slate-500 mt-1">Public posts revealing private discourse</p>
                </div>
                <div className="rounded-lg bg-white p-4 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-rose-600" />
                    <div className="font-bold text-slate-900">Active Shadow Narratives</div>
                  </div>
                  <div className="text-3xl font-extrabold text-rose-600">3</div>
                  <p className="text-xs text-slate-500 mt-1">Major destabilizing legends circulating</p>
                </div>
                <div className="rounded-lg bg-white p-4 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-amber-600" />
                    <div className="font-bold text-slate-900">Latency Gap</div>
                  </div>
                  <div className="text-3xl font-extrabold text-amber-600">Hours</div>
                  <p className="text-xs text-slate-500 mt-1">Shadow Narrative faster than Official</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dark Social Infrastructure */}
          <GlassPanel title="Dark Social Infrastructure" description="The architecture of the rumor mill in Abu Dhabi's encrypted ecosystem" badge="CRITICAL">
            <div className="space-y-6">
              {/* The Dark Social Vacuum */}
              <div className="rounded-lg bg-slate-900 text-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="h-6 w-6 text-emerald-400" />
                  <div className="font-bold text-lg">The "Dark Social" Vacuum</div>
                  <Badge variant="emerald" className="ml-auto text-xs">PRIMARY ENGINE</Badge>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-slate-800 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Mic className="h-4 w-4 text-purple-400" />
                      <div className="font-semibold text-purple-300">Voice Note Supremacy</div>
                    </div>
                    <p className="text-sm text-slate-300">Text messages can be forged. A voice note trembling with anxiety from "a friend's friend who works at Cleveland Clinic" carries visceral truth that official press releases cannot match.</p>
                  </div>
                  <div className="rounded-lg bg-slate-800 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-amber-400" />
                      <div className="font-semibold text-amber-300">"Forwarded" = Authenticity Seal</div>
                    </div>
                    <p className="text-sm text-slate-300">The "Forwarded Message" tag is not a warning in UAE WhatsApp groups. It signals information has survived the journey through multiple trusted nodes.</p>
                  </div>
                  <div className="rounded-lg bg-slate-800 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-rose-400" />
                      <div className="font-semibold text-rose-300">Speed Advantage</div>
                    </div>
                    <p className="text-sm text-slate-300">When global news breaks about "new strains" or "bacterial outbreaks," the Shadow Network imports this anxiety and localizes it to Abu Dhabi within hours—often days before official clarification.</p>
                  </div>
                  <div className="rounded-lg bg-slate-800 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-cyan-400" />
                      <div className="font-semibold text-cyan-300">Context Vacuum</div>
                    </div>
                    <p className="text-sm text-slate-300">Official channels broadcast "what" (directives) but slower to provide "why" (rationale). In the absence of granular explanation, the community manufactures one.</p>
                  </div>
                </div>
              </div>

              {/* Bridge Node Typology Table */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-5 w-5 text-purple-600" />
                  <h3 className="font-bold text-slate-900">Bridge Node Typology: 5 Detection Patterns</h3>
                </div>
                <div className="rounded-lg border border-slate-200 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Bridge Node Syntax</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Implied Private Context</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Emotional Driver</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Associated Narrative</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bridgeNodeTypologies.map((node, idx) => (
                        <tr key={idx} className={`border-t border-slate-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="py-3 px-4">
                            <code className="text-xs bg-slate-100 px-2 py-1 rounded text-purple-700">{node.syntax}</code>
                          </td>
                          <td className="py-3 px-4 text-slate-600">{node.context}</td>
                          <td className="py-3 px-4">
                            <Badge variant={getEmotionColor(node.driver)} className="text-xs">{node.driver}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant={getNarrativeColor(node.narrative)} className="text-xs">{node.narrative}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Just Asking Questions (JAQ) Tactic */}
              <div className="rounded-lg bg-amber-50 border-2 border-amber-300 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="h-5 w-5 text-amber-600" />
                  <div className="font-bold text-amber-900">The "Is It True?" Manipulation</div>
                </div>
                <p className="text-sm text-amber-800 mb-3">
                  The phrase <strong>"Is it true"</strong> serves as a dominant marker, appearing in contexts ranging from water contamination to beach closures. Users perform a complex social maneuver: signaling compliance ("I am checking before believing") while simultaneously spreading the rumor they claim to verify.
                </p>
                <div className="rounded bg-white p-3 border border-amber-200">
                  <div className="text-xs font-semibold text-slate-900 mb-1">Example Bridge Node:</div>
                  <p className="text-sm text-slate-700 italic">"Is it true that the water has flesh-eating bacteria?"</p>
                  <div className="text-xs text-amber-700 mt-2">Even if replies debunk the claim, the semantic payload ("water" + "flesh-eating bacteria") is delivered to every reader. The association is forged regardless of the answer.</div>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Shadow Narrative I: Stratus Phantom */}
          <Card className="glass-card bg-gradient-to-br from-rose-50/50 to-white border-rose-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-rose text-white">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">Shadow Narrative I: The "Stratus" Phantom</CardTitle>
                    <Badge variant="destructive" className="text-xs">CRITICAL</Badge>
                  </div>
                  <CardDescription>The Hoarse Voice Virus: School-closing super-virus sweeping through Abu Dhabi education system</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Core Claims */}
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-lg bg-white p-3 border border-rose-200">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertCircle className="h-4 w-4 text-rose-600" />
                    <div className="font-semibold text-sm text-slate-900">The Identifier</div>
                  </div>
                  <p className="text-xs text-slate-600">Not detected by standard PCR tests. The "Mystery Virus" tag prevails.</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-rose-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Mic className="h-4 w-4 text-rose-600" />
                    <div className="font-semibold text-sm text-slate-900">The Symptom</div>
                  </div>
                  <p className="text-xs text-slate-600">Targets vocal cords immediately. Hoarseness or total voice loss (laryngitis) before other symptoms.</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-rose-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Ghost className="h-4 w-4 text-rose-600" />
                    <div className="font-semibold text-sm text-slate-900">The Cover-Up</div>
                  </div>
                  <p className="text-xs text-slate-600">Schools on brink of closure. Government delaying announcement to protect calendar/economy.</p>
                </div>
              </div>

              {/* XFG Variant - Concept Bleed */}
              <div className="rounded-lg bg-purple-50 border border-purple-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-4 w-4 text-purple-600" />
                  <div className="font-bold text-purple-900 text-sm">XFG Variant: Global-to-Local "Concept Bleed"</div>
                </div>
                <p className="text-xs text-purple-800 mb-2">
                  "Stratus" (scientifically linked to XFG variant) identified in global news (US/Southeast Asia) as dominant strain in late 2025. Shadow Network imported this brand name and attached it to Abu Dhabi's seasonal sickness wave.
                </p>
                <div className="rounded bg-white p-2 border border-purple-200">
                  <p className="text-xs text-slate-700">
                    <strong>Psycho-Symbolic Connection:</strong> The rumor is spread by <em>voice</em> (WhatsApp audio), and the virus is feared because it <em>takes away</em> the voice. This poetic symmetry aids retention in collective memory.
                  </p>
                </div>
              </div>

              {/* School Closure Shadow Protocol */}
              <div className="rounded-lg bg-red-50 border-2 border-red-300 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Hospital className="h-5 w-5 text-red-600" />
                  <div className="font-bold text-red-900">The "Shadow Protocol" for School Closures</div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded bg-white p-3 border border-red-200">
                    <div className="font-semibold text-slate-900 text-xs mb-1">Official Email Interpretation</div>
                    <p className="text-xs text-slate-600">"School begging parents to not send sick kids... even during exams week they will repeat it."</p>
                    <p className="text-xs text-slate-500 mt-1 italic">→ Standard public health measure: Reduce transmission</p>
                  </div>
                  <div className="rounded bg-white p-3 border border-red-200">
                    <div className="font-semibold text-slate-900 text-xs mb-1">Shadow Narrative Interpretation</div>
                    <p className="text-xs text-slate-600">"Schools are overrun and begging us to self-close because they cannot officially close."</p>
                    <p className="text-xs text-rose-600 mt-1 italic">→ Creates "Phantom Closure" disruption without official order</p>
                  </div>
                </div>
              </div>

              {/* Zombie Content Recycling */}
              <div className="rounded-lg bg-slate-100 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Ghost className="h-4 w-4 text-slate-600" />
                  <div className="font-bold text-slate-900 text-sm">Zombie Content: The Resurrection Fear</div>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Old voice notes from Delta/Omicron waves (describing overwhelmed hospitals, severe symptoms) are forwarded as "current" updates. Lack of date-stamping on WhatsApp audio allows these "Zombie Rumors" to resurface whenever anxiety rises.
                </p>
                <div className="text-xs text-amber-700 bg-amber-50 p-2 rounded border border-amber-200">
                  <strong>Example:</strong> Audio file from March 2020 (claiming PM ordered border closures) re-circulated years later as "new" proof of lockdown.
                </div>
              </div>

              {/* Antibiotic Threat */}
              <div className="rounded-lg bg-orange-50 border border-orange-200 p-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                  <div className="font-semibold text-orange-900 text-sm">Secondary Risk: Antibiotic Misuse</div>
                </div>
                <p className="text-xs text-orange-800 mt-1">
                  Belief that "Stratus" is a "Mystery Virus" (not Covid) leads parents to pressure physicians for antibiotics or source through informal channels. Transforms narrative risk into biological risk, potentially accelerating AMR trends.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Shadow Narrative II: Necrotic Tide */}
          <Card className="glass-card bg-gradient-to-br from-cyan-50/50 to-white border-cyan-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cyan text-white">
                  <Waves className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">Shadow Narrative II: The "Necrotic Tide"</CardTitle>
                    <Badge variant="cyan" className="text-xs">HIGH SEVERITY</Badge>
                  </div>
                  <CardDescription>The Flesh-Eating Corniche: Beach closures hiding Vibrio vulnificus contamination</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Florida-Abu Dhabi Bridge */}
              <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-4 w-4 text-blue-600" />
                  <div className="font-bold text-blue-900 text-sm">The "Florida-Abu Dhabi" Narrative Bridge</div>
                </div>
                <p className="text-xs text-blue-800 mb-2">
                  "Flesh-Eating Bacteria" terminology originates from US news about <em>Vibrio vulnificus</em> outbreaks in Florida (warm coastal waters, hurricane aftermaths).
                </p>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="rounded bg-white p-2 border border-blue-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Environmental Similarity</div>
                    <p className="text-xs text-slate-600">Both Florida and Abu Dhabi have warm, saline coastal waters—the exact conditions news reports identify as risk factors.</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-blue-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Layperson Logic</div>
                    <p className="text-xs text-slate-600">"If it's happening in Florida's warm water, it MUST be happening in the Gulf."</p>
                  </div>
                </div>
              </div>

              {/* Disneyland Abu Dhabi - Algorithmic Adjacency */}
              <div className="rounded-lg bg-purple-50 border border-purple-200 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <div className="font-bold text-purple-900 text-sm">Algorithmic Adjacency: "Disneyland Abu Dhabi"</div>
                </div>
                <p className="text-xs text-purple-800">
                  News report titled "Disney Travelers Flesh-Eating Bacteria News" tagged with <strong>"Disneyland Abu Dhabi"</strong> in metadata. User scanning "Abu Dhabi tourism" sees "Flesh-Eating Bacteria" and "Disney" in same scroll. Brain bridges the gap: "Tourism hotspots like Abu Dhabi have the bacteria."
                </p>
              </div>

              {/* Sewage Shadow Memory */}
              <div className="rounded-lg bg-slate-100 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="h-4 w-4 text-slate-600" />
                  <div className="font-bold text-slate-900 text-sm">The "Sewage" Shadow Memory</div>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Despite decades of investment in world-class sewage infrastructure, the "Shadow Memory" of Dubai's infamous "Poop Snake" video persists.
                </p>
                <div className="rounded bg-white p-3 border border-slate-200">
                  <div className="text-xs font-semibold text-slate-900 mb-1">Beach Closure Narrative Escalation:</div>
                  <ol className="text-xs text-slate-700 space-y-1 list-decimal list-inside">
                    <li><strong>Observation:</strong> Beach is closed</li>
                    <li><strong>Official Reason:</strong> Unstable water (waves/currents)</li>
                    <li><strong>Shadow Rebuttal:</strong> "The Gulf is calm; waves is a lie"</li>
                    <li><strong>Shadow Hypothesis:</strong> Must be contamination (sewage)</li>
                    <li><strong>Shadow Proof:</strong> "I heard about a child with Norovirus"</li>
                    <li><strong>Narrative Mutation:</strong> "Norovirus" morphs into "Flesh-Eating Bacteria" via Florida Bridge</li>
                  </ol>
                </div>
              </div>

              {/* Rash Confirmation Bias */}
              <div className="rounded-lg bg-rose-50 border border-rose-200 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-4 w-4 text-rose-600" />
                  <div className="font-semibold text-rose-900 text-sm">The "Rash" as Confirmation Loop</div>
                </div>
                <p className="text-xs text-rose-800">
                  In Gulf's high-salinity, high-temperature environment, heat rash (miliaria) and swimmer's itch are common. Under "Necrotic Tide" narrative influence, simple red patch is not "heat rash"—it's first stage of <strong>Necrotizing Fasciitis</strong>. Parents photograph rash, post to WhatsApp asking "Is this the bacteria?", and panic spiral accelerates.
                </p>
              </div>

              {/* Water Security Bleed */}
              <div className="rounded-lg bg-cyan-50 border-2 border-cyan-300 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="h-5 w-5 text-cyan-600" />
                  <div className="font-bold text-cyan-900">Domestic Sphere Bleed: Tap Water Anxiety</div>
                </div>
                <p className="text-xs text-cyan-800 mb-2">
                  If the public believes the <strong>sea</strong> is full of flesh-eating sewage, they intuitively suspect that the <strong>desalination plants</strong> drawing from that sea are also compromised.
                </p>
                <div className="grid gap-2 md:grid-cols-3">
                  <div className="rounded bg-white p-2 border border-cyan-200 text-center">
                    <div className="text-xs font-semibold text-slate-900">Panic Buying</div>
                    <p className="text-xs text-slate-600">Surges in bottled water</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-cyan-200 text-center">
                    <div className="text-xs font-semibold text-slate-900">Plastic Waste</div>
                    <p className="text-xs text-slate-600">Increased environmental burden</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-cyan-200 text-center">
                    <div className="text-xs font-semibold text-slate-900">Trust Erosion</div>
                    <p className="text-xs text-slate-600">Core social contract breach</p>
                  </div>
                </div>
              </div>

              {/* Elite Gossip Dimension */}
              <div className="rounded-lg bg-purple-100 p-3">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  <div className="font-semibold text-purple-900 text-sm">"Elite" Gossip: Sailing WhatsApp Groups</div>
                </div>
                <p className="text-xs text-purple-800 mt-1">
                  Rumors in context of "World Sailing" and "Olympic sailors" competing in "cesspools." When elite sporting communities (triathletes, sailors)—highly connected expats—validate these rumors, they trickle down with high authority. If the "Sailing WhatsApp Group" says water is toxic, average beachgoer accepts it as fact.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Shadow Narrative III: Cosmetic Cardiac */}
          <Card className="glass-card bg-gradient-to-br from-fuchsia-50/50 to-white border-fuchsia-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-fuchsia text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">Shadow Narrative III: The "Cosmetic Cardiac" Cover-Up</CardTitle>
                    <Badge variant="fuchsia" className="text-xs">VOLATILE</Badge>
                  </div>
                  <CardDescription>Sudden deaths systematically mislabeled as "Cosmetic Surgery Complications" to hide vaccine lethality</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Core Conspiracy */}
              <div className="rounded-lg bg-slate-900 text-white p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Ghost className="h-5 w-5 text-fuchsia-400" />
                  <div className="font-bold">The Anti-Vax Mutation for UAE</div>
                </div>
                <p className="text-sm text-slate-300 mb-3">
                  Sophisticated mutation of global anti-vax conspiracy adapted for UAE's high-end, image-conscious, highly vaccinated population. Posits that wave of "Sudden Deaths" among young, fit residents is being systematically mislabeled as "Cosmetic Surgery Complications" or "Natural Causes" to hide long-term lethality of COVID-19 vaccines.
                </p>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="rounded bg-slate-800 p-3">
                    <div className="text-xs font-semibold text-fuchsia-300 mb-1">Turbo Cancer Theory</div>
                    <p className="text-xs text-slate-400">Baseless claim that mRNA vaccines disable DNA repair, causing aggressive rapid-onset cancers</p>
                  </div>
                  <div className="rounded bg-slate-800 p-3">
                    <div className="text-xs font-semibold text-fuchsia-300 mb-1">Myocarditis Cover-Up</div>
                    <p className="text-xs text-slate-400">Vaccine-induced heart inflammation hidden by blaming fillers/Botox/liposuction</p>
                  </div>
                </div>
              </div>

              {/* Sudden Death Signal */}
              <div className="rounded-lg bg-rose-50 border border-rose-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-rose-600" />
                  <div className="font-bold text-rose-900 text-sm">The "Sudden Death" Dog-Whistle</div>
                </div>
                <p className="text-xs text-rose-800 mb-2">
                  "Sudden Death" serves as coded language. Young people do not "simply die" in conspiratorial worldview—there must be external agent. In post-2021 era, that agent is invariably the vaccine.
                </p>
                <div className="space-y-2">
                  {suddenDeathCases.map((deathCase, idx) => (
                    <div key={idx} className="rounded bg-white p-2 border border-rose-200">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-slate-900">{deathCase.case}</div>
                        <Badge variant="outline" className="text-xs">{deathCase.shadowLogic}</Badge>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">{deathCase.narrative}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cosmetic Deflection Theory */}
              <div className="rounded-lg bg-fuchsia-50 border-2 border-fuchsia-300 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-fuchsia-600" />
                  <div className="font-bold text-fuchsia-900 text-sm">The "Cosmetic" Deflection Theory</div>
                </div>
                <p className="text-xs text-fuchsia-800 mb-2">
                  What makes this unique to UAE/Gulf is incorporation of "Cosmetic Surgery" as supposed cover-up mechanism. Media focus on "anti-aging treatments" interpreted not as journalism, but as <strong>State-Sponsored Distraction</strong>.
                </p>
                <div className="rounded bg-white p-3 border border-fuchsia-200">
                  <div className="text-xs font-semibold text-slate-900 mb-2">Shadow Logic Flow:</div>
                  <ol className="text-xs text-slate-700 space-y-1 list-decimal list-inside">
                    <li><strong>Event:</strong> Celebrity/influencer dies of cardiac arrest</li>
                    <li><strong>Shadow Truth:</strong> It was the vaccine (Myocarditis)</li>
                    <li><strong>Official Narrative:</strong> Complications from Botox/Fillers/Liposuction</li>
                    <li><strong>Conclusion:</strong> Authorities demonizing cosmetic industry to protect pharmaceutical industry</li>
                  </ol>
                </div>
                <p className="text-xs text-fuchsia-700 mt-2 italic">
                  This is particularly sticky because cosmetic procedures are culturally prevalent and visible. Taps into dual anxiety: fear of vaccine AND fear of vanity.
                </p>
              </div>

              {/* Celebrity Validator */}
              <div className="rounded-lg bg-purple-50 border border-purple-200 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="h-4 w-4 text-purple-600" />
                  <div className="font-semibold text-purple-900 text-sm">The "Celebrity" Truth Multiplier</div>
                </div>
                <p className="text-xs text-purple-800">
                  High-profile figures act as "Truth Multipliers." Foo Fighters drummer (Taylor Hawkins) hospitalization in "Abu Dhabi I believe it was" before death. UAE Team Emirates cyclist retiring due to heart issues.
                </p>
                <div className="mt-2 rounded bg-white p-2 border border-purple-200">
                  <div className="text-xs font-semibold text-slate-900 mb-1">The Athlete Paradox:</div>
                  <p className="text-xs text-slate-700">"If a cyclist with best medical care and strongest heart can succumb, my vaccinated heart is a ticking time bomb."</p>
                </div>
              </div>

              {/* Medical Hesitancy Crisis */}
              <div className="rounded-lg bg-red-50 border-2 border-red-300 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Hospital className="h-5 w-5 text-red-600" />
                  <div className="font-bold text-red-900">Strategic Implication: Medical Hesitancy Crisis</div>
                </div>
                <p className="text-xs text-red-800 mb-2">
                  Ultimate danger is not just vaccine refusal—it's broader Medical Hesitancy. If public believes doctors are complicit in falsifying causes of death, trust in entire medical establishment fractures.
                </p>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="rounded bg-white p-2 border border-red-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Delayed Care</div>
                    <p className="text-xs text-slate-600">Patients delay seeking help for chest pain, fearing they will be "silenced" or misdiagnosed</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-red-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">ER Flooding</div>
                    <p className="text-xs text-slate-600">Panic attacks interpreted as "vaccine heart failure" flood emergency rooms</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-red-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Vaccine Detox Market</div>
                    <p className="text-xs text-slate-600">Surge in grey market for unregulated supplements promising to "cleanse" mRNA toxin</p>
                  </div>
                  <div className="rounded bg-white p-2 border border-red-200">
                    <div className="text-xs font-semibold text-slate-900 mb-1">Crisis of Confidence</div>
                    <p className="text-xs text-slate-600">Call for doctors to "ReInvent Yourself" suggests profession trust collapsing</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparative Analysis */}
          <GlassPanel title="Historical vs. Current: Evolution of the Bridge" description="How health rumors have transformed from 2009-2015 to 2026">
            <div className="rounded-lg border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Feature</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Historical (2009-2015)</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Current (2026)</th>
                  </tr>
                </thead>
                <tbody>
                  {historicalComparison.map((item, idx) => (
                    <tr key={idx} className={`border-t border-slate-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                      <td className="py-3 px-4 font-medium text-slate-900">{item.feature}</td>
                      <td className="py-3 px-4 text-slate-600">
                        <span className="inline-flex items-center gap-1">
                          <Ghost className="h-3 w-3 text-purple-500" />
                          {item.historical}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant={item.severity === 'Somatic' ? 'destructive' : 'warning'} className="text-xs">
                          {item.current}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-lg bg-rose-50 border border-rose-200 p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-rose-600" />
                <div className="font-bold text-rose-900 text-sm">Critical Shift: Infrastructure → Biological</div>
              </div>
              <p className="text-xs text-rose-800">
                Current rumors are more dangerous because they are <strong>Somatic</strong>. Not just about environment/state incompetence—they're about <strong>bodily invasion</strong> (Flesh-eating, Virus, Vaccine). Reflects post-pandemic landscape where body is vulnerable site of contestation between citizen and state.
              </p>
            </div>
          </GlassPanel>

          {/* Strategic Counter-Measures */}
          <GlassPanel title="Strategic Counter-Measures" description="Operationalizing the narrative with targeted interventions" badge="ACTION PLAN">
            <div className="space-y-4">
              {counterMeasures.map((measure, idx) => (
                <div key={idx} className={`rounded-lg border-2 p-4 ${
                  measure.severity === 'critical' ? 'border-rose-300 bg-rose-50/50' :
                  measure.severity === 'high' ? 'border-amber-300 bg-amber-50/50' :
                  'border-cyan-300 bg-cyan-50/50'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          measure.severity === 'critical' ? 'bg-gradient-rose' :
                          measure.severity === 'high' ? 'bg-gradient-amber' :
                          'bg-gradient-cyan'
                        } text-white`}>
                          {measure.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-slate-900">{measure.title}</h4>
                            <Badge variant={getStrategyBadgeColor(measure.target)} className="text-xs">{measure.target}</Badge>
                          </div>
                          <p className="text-xs text-slate-600">{measure.subtitle}</p>
                        </div>
                      </div>
                      <div className="ml-13 space-y-2">
                        <div className="text-sm text-slate-700">{measure.description}</div>
                        <div className="rounded bg-white p-3 border border-slate-200">
                          <div className="text-xs font-semibold text-slate-900 mb-1">Narrative Pivot:</div>
                          <p className="text-sm text-slate-700 italic">"{measure.pivot}"</p>
                        </div>
                        <div className="grid gap-2 md:grid-cols-2">
                          <div>
                            <div className="text-xs font-semibold text-slate-900 mb-1">Channel:</div>
                            <p className="text-xs text-slate-600">{measure.channel}</p>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 mb-1">Expected Impact:</div>
                            <p className="text-xs text-slate-600">{measure.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Rumor Weather Station */}
          <Card className="glass-card bg-gradient-to-br from-indigo-50/50 to-white border-indigo-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-indigo text-white">
                  <Activity className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">The "Rumor Weather Station"</CardTitle>
                    <Badge variant="denim" className="text-xs">NEW CAPABILITY</Badge>
                  </div>
                  <CardDescription>Dedicated monitoring unit for narrative interception and early warning</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Search className="h-4 w-4 text-indigo-600" />
                      <div className="font-bold text-indigo-900 text-sm">Detection Protocol</div>
                    </div>
                    <p className="text-xs text-indigo-800 mb-2">
                      Establish dedicated monitoring unit within ADPHC Comms that specifically scans for linguistic markers:
                    </p>
                    <div className="space-y-1">
                      {detectionMarkers.map((marker, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                          <code className="text-xs bg-indigo-100 px-2 py-0.5 rounded text-indigo-700">{marker}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-indigo-600" />
                      <div className="font-bold text-indigo-900 text-sm">Strategic Shift</div>
                    </div>
                    <p className="text-xs text-indigo-800 mb-2">
                      Move from reactive to proactive:
                    </p>
                    <div className="space-y-2">
                      <div className="rounded bg-white p-2 border border-indigo-200">
                        <div className="text-xs font-semibold text-red-700">OLD: Crisis Response</div>
                        <p className="text-xs text-slate-600">Reacting after rumor hits news</p>
                      </div>
                      <div className="rounded bg-white p-2 border border-indigo-200">
                        <div className="text-xs font-semibold text-emerald-700">NEW: Narrative Interception</div>
                        <p className="text-xs text-slate-600">Addressing rumor while still "Bridge Node" on Reddit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="rounded-lg bg-gradient-purple/10 border-2 border-purple-300 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  <div className="font-bold text-purple-900">The New Frontline of Public Health</div>
                </div>
                <p className="text-sm text-purple-800">
                  The "WhatsApp Bridge" is the new frontline of public health in Abu Dhabi. The three narratives—<strong className="text-rose-600">Stratus</strong>, <strong className="text-cyan-600">Necrotic Tide</strong>, and <strong className="text-fuchsia-600">Cosmetic Cardiac</strong>—are not merely lies. They are "Shadow Truths"—community's attempt to make sense of complex, frightening world using tools they trust most: the voices of their peers.
                </p>
                <p className="text-sm text-slate-700 mt-2 italic">
                  The challenge is not to silence these voices, but to harmonize with them. By understanding the anatomy of these rumors, ADPHC can craft interventions that do not just correct the record, but heal the fracture. The goal: make the "Official Narrative" as warm, responsive, and "human" as the voice note forwarded in the dark.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Narrative Void */}
        <TabsContent value="void" className="space-y-6">
          <GlassPanel title="Narrative Void Scanner" description="High-demand topics with low official content presence" badge="Opportunity">
            <div className="space-y-4">
              {narrativeVoids.map((voidItem, index) => (
                <div key={index} className="flex items-start gap-4 rounded-lg bg-slate-50/50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-cyan text-white shrink-0">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-900">{voidItem.title}</h4>
                        <p className="mt-1 text-sm text-slate-600">{voidItem.description}</p>
                      </div>
                      <Badge variant={voidItem.priority === 'high' ? 'destructive' : 'cyan'} className="shrink-0 text-xs">
                        {voidItem.priority} Priority
                      </Badge>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-xs text-slate-500">Demand Score</div>
                        <div className="flex items-center gap-1">
                          <ArrowUp className="h-3 w-3 text-emerald-500" />
                          <span className="text-sm font-bold text-slate-900">{voidItem.demandScore}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Content Gap</div>
                        <div className="flex items-center gap-1">
                          <ArrowDown className="h-3 w-3 text-rose-500" />
                          <span className="text-sm font-bold text-slate-900">{voidItem.contentGap}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Opportunity</div>
                        <span className="text-sm font-bold text-cyan-600">{voidItem.opportunity}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-gradient-cyan hover:opacity-90 text-white shrink-0 gap-1">
                    <Sparkles className="h-3 w-3" />
                    Create Content
                  </Button>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Data
const lifecycleStages = [
  { name: 'Primary Impact', count: 12, status: 'active', icon: <Zap className="h-6 w-6 text-purple-500" /> },
  { name: 'Secondary Rebound', count: 18, status: 'active', icon: <Flame className="h-6 w-6 text-indigo-500" /> },
  { name: 'Tertiary Dispersion', count: 8, status: 'active', icon: <Globe className="h-6 w-6 text-cyan-500" /> },
  { name: 'Quaternary Echo', count: 6, status: 'completed', icon: <MessageSquare className="h-6 w-6 text-teal-500" /> },
  { name: 'Quantum Cascade', count: 3, status: 'pending', icon: <Sparkles className="h-6 w-6 text-slate-400" /> },
]

const activeNarratives = [
  {
    title: 'Mental Health Initiative Success',
    description: '"Beauty of Our Mind" campaign achieving viral traction across Instagram',
    stage: 'Tertiary Dispersion',
    progress: 72,
    reach: '2.4M',
    velocity: 'High',
    impact: '89%',
    icon: <Brain className="h-5 w-5" />,
  },
  {
    title: 'Vaccine Safety Education',
    description: 'Multi-platform counter-misinformation campaign showing strong engagement',
    stage: 'Secondary Rebound',
    progress: 45,
    reach: '890K',
    velocity: 'Medium',
    impact: '67%',
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: 'Healthcare Access Expansion',
    description: 'New facility announcements driving positive regional sentiment',
    stage: 'Primary Impact',
    progress: 18,
    reach: '340K',
    velocity: 'Growing',
    impact: '78%',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: 'Digital Transformation Story',
    description: 'Malaffi and Sahatna app success narrative building momentum',
    stage: 'Secondary Rebound',
    progress: 38,
    reach: '1.2M',
    velocity: 'High',
    impact: '82%',
    icon: <TrendingUp className="h-5 w-5" />,
  },
]

const emotionDimensions = [
  { name: 'Trust', value: 73, trend: 'Rising', delta: '+5.2%', icon: <Shield className="h-4 w-4 text-emerald-500" /> },
  { name: 'Anxiety', value: 34, trend: 'Falling', delta: '-8.1%', icon: <AlertCircle className="h-4 w-4 text-amber-500" /> },
  { name: 'Confidence', value: 68, trend: 'Stable', delta: '+1.3%', icon: <TrendingUp className="h-4 w-4 text-blue-500" /> },
  { name: 'Confusion', value: 28, trend: 'Falling', delta: '-12.4%', icon: <Ghost className="h-4 w-4 text-purple-500" /> },
  { name: 'Hope', value: 81, trend: 'Rising', delta: '+7.8%', icon: <Sparkles className="h-4 w-4 text-pink-500" /> },
  { name: 'Skepticism', value: 22, trend: 'Stable', delta: '-2.1%', icon: <Search className="h-4 w-4 text-slate-500" /> },
]

const sentimentSources = [
  { name: 'Social Media', sentiment: 71, positive: 71, neutral: 18, negative: 11, icon: <Globe className="h-4 w-4 text-blue-500" /> },
  { name: 'News & Media', sentiment: 68, positive: 68, neutral: 22, negative: 10, icon: <BookOpen className="h-4 w-4 text-purple-500" /> },
  { name: 'Forums & Communities', sentiment: 54, positive: 54, neutral: 28, negative: 18, icon: <MessageSquare className="h-4 w-4 text-emerald-500" /> },
  { name: 'Dark Social', sentiment: 62, positive: 62, neutral: 24, negative: 14, icon: <Ghost className="h-4 w-4 text-slate-500" /> },
]

const crtCapabilities = [
  { name: '144-Dimensional', description: 'Emotional mapping beyond simple positive/negative', icon: <Brain className="h-5 w-5" /> },
  { name: 'Real-Time Tracking', description: 'Sentiment updates every 15 seconds', icon: <Activity className="h-5 w-5" /> },
  { name: 'Cross-Platform', description: 'Unified sentiment across all channels', icon: <Globe className="h-5 w-5" /> },
  { name: 'Predictive AI', description: 'Forecast sentiment shifts 7 days ahead', icon: <Sparkles className="h-5 w-5" /> },
]

const influenceChannels = [
  { name: 'Twitter/X', dohShare: 78, detectorShare: 22, icon: <MessageSquare className="h-4 w-4 text-slate-500" /> },
  { name: 'Instagram', dohShare: 82, detectorShare: 18, icon: <Heart className="h-4 w-4 text-slate-500" /> },
  { name: 'Facebook', dohShare: 65, detectorShare: 35, icon: <MessageSquare className="h-4 w-4 text-slate-500" /> },
  { name: 'LinkedIn', dohShare: 71, detectorShare: 29, icon: <BookOpen className="h-4 w-4 text-slate-500" /> },
  { name: 'Reddit', dohShare: 58, detectorShare: 42, icon: <MessageSquare className="h-4 w-4 text-slate-500" /> },
  { name: 'News Media', dohShare: 75, detectorShare: 25, icon: <BookOpen className="h-4 w-4 text-slate-500" /> },
]

const hegemonyStrategies = [
  {
    title: 'Amplify Mental Health Success Stories',
    description: 'Deploy patient testimonials across all channels to capitalize on 89% positive sentiment',
    priority: 'high',
    impact: 12,
    timeline: '1-2 weeks',
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: 'Address Insurance Confusion Head-On',
    description: 'Create educational content series to reduce skepticism around Thiqa and Daman',
    priority: 'high',
    impact: 8,
    timeline: '2-3 weeks',
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: 'Engage Micro-Influencers in Regional Communities',
    description: 'Partner with local community leaders to build trust in underserved areas',
    priority: 'medium',
    impact: 6,
    timeline: '3-4 weeks',
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: 'Counter Dark Social Misinformation',
    description: 'Deploy bridge nodes in WhatsApp groups to address vaccine myths',
    priority: 'medium',
    impact: 5,
    timeline: 'Ongoing',
    icon: <MessageSquare className="h-5 w-5" />,
  },
]

const shadowNarratives = [
  {
    title: 'Malaffi Surveillance Conspiracy',
    description: 'Claims that health data is being shared with third parties without consent',
    severity: 'critical',
    category: 'Data Privacy',
    mentions: '2.3K',
    platforms: 8,
    velocity: 'Rapidly spreading',
  },
  {
    title: '"Big Pharma" Payoff Allegations',
    description: 'Rumors that DoH officials are receiving kickbacks from pharmaceutical companies',
    severity: 'critical',
    category: 'Corruption',
    mentions: '1.8K',
    platforms: 6,
    velocity: 'Stable',
  },
  {
    title: 'Vaccine Microchip Theories',
    description: 'Persistent claims that COVID-19 vaccines contain tracking devices',
    severity: 'high',
    category: 'Misinformation',
    mentions: '3.1K',
    platforms: 12,
    velocity: 'Slowly declining',
  },
  {
    title: 'Facility Cover-Up Stories',
    description: 'Allegations of medical errors being hidden from the public',
    severity: 'high',
    category: 'Transparency',
    mentions: '890',
    platforms: 4,
    velocity: 'Emerging',
  },
  {
    title: 'Exclusion of Expats Healthcare',
    description: 'Perception that non-nationals are being deprioritized in healthcare access',
    severity: 'medium',
    category: 'Equity',
    mentions: '1.2K',
    platforms: 5,
    velocity: 'Stable',
  },
]

const narrativeVoids = [
  {
    title: 'Men\'s Mental Health',
    description: 'High search volume and forum discussions but minimal official content addressing male-specific mental health challenges',
    priority: 'high',
    demandScore: '8.7/10',
    contentGap: '92%',
    opportunity: 'Immediate',
  },
  {
    title: 'Biohacking & Longevity',
    description: 'Growing interest in preventive healthcare and longevity treatments among young professionals',
    priority: 'high',
    demandScore: '8.2/10',
    contentGap: '87%',
    opportunity: 'Emerging',
  },
  {
    title: 'Neurodivergent Healthcare',
    description: 'Lack of resources for autism, ADHD, and other neurodivergent conditions in adult population',
    priority: 'high',
    demandScore: '7.9/10',
    contentGap: '81%',
    opportunity: 'Growing',
  },
  {
    title: 'Fertility & Reproductive Health',
    description: 'Increasing discussions around IVF, fertility preservation, and reproductive options',
    priority: 'medium',
    demandScore: '7.4/10',
    contentGap: '74%',
    opportunity: 'Steady',
  },
  {
    title: 'Chronic Pain Management',
    description: 'Gap in non-pharmacological pain management resources and alternative therapies',
    priority: 'medium',
    demandScore: '6.8/10',
    contentGap: '68%',
    opportunity: 'Developing',
  },
  {
    title: 'Elderly Care Technology',
    description: 'Growing elderly population seeking guidance on health tech and remote monitoring options',
    priority: 'medium',
    demandScore: '6.5/10',
    contentGap: '65%',
    opportunity: 'Emerging',
  },
]

// Bridge Node Typology - File 09 Data
const bridgeNodeTypologies = [
  {
    syntax: '"I received a voice note from a doctor..."',
    context: 'Appeal to Authority. User believes they possess "insider" knowledge that contradicts official data.',
    driver: 'Privilege / Exclusivity',
    narrative: 'Stratus Phantom',
  },
  {
    syntax: '"Is it true what they are saying about [Location]?"',
    context: 'Fear of Contamination. User is risk-averse and seeking permission to avoid specific public space.',
    driver: 'Disgust / Bodily Integrity',
    narrative: 'Necrotic Tide',
  },
  {
    syntax: '"Sudden death... just like [Name]..."',
    context: 'Pattern Recognition. User is connecting disparate events to form conspiracy theory.',
    driver: 'Grief / Existential Dread',
    narrative: 'Cosmetic Cardiac',
  },
  {
    syntax: '"My maid\'s group says..."',
    context: 'Class-Based Information Flow. User accessing different socio-economic rumor network.',
    driver: 'Anxiety / Lack of Control',
    narrative: 'All Narratives',
  },
  {
    syntax: '"Why is the media silent about..."',
    context: 'Institutional Distrust. User believes there is deliberate suppression of information.',
    driver: 'Anger / Betrayal',
    narrative: 'Cosmetic Cardiac / Stratus',
  },
]

// Sudden Death Cases - File 09 Data
const suddenDeathCases = [
  {
    case: '18-year-old Indian student (Golden Visa holder)',
    shadowLogic: 'Statistical Impossibility',
    narrative: 'Died of cardiac arrest during Diwali. Young people don\'t simply die—must be vaccine.',
  },
  {
    case: 'UAE Team Emirates cyclist',
    shadowLogic: 'Athlete Paradox',
    narrative: 'Retiring due to heart issues. If fittest athletes succumb, vaccinated hearts are ticking time bombs.',
  },
  {
    case: 'Radio Jockey (RJ Laavanya)',
    shadowLogic: 'Turbo Cancer',
    narrative: 'Died "while undergoing treatment for recently diagnosed cancer." Speed defies normal understanding—must be vaccine effect.',
  },
  {
    case: 'Actress Shefali Jariwala',
    shadowLogic: 'Cosmetic Deflection',
    narrative: 'Media focus on "anti-aging treatments" is State-sponsored distraction protecting pharmaceutical industry.',
  },
]

// Historical Comparison - File 09 Data
const historicalComparison = [
  {
    feature: 'Archetype',
    historical: '"The Poop Snake"',
    current: '"The Necrotic Tide"',
    severity: 'Somatic',
  },
  {
    feature: 'Core Claim',
    historical: 'No sewage system; trucks dump waste in desert',
    current: 'Beach closures hide flesh-eating bacteria from sewage',
    severity: 'Somatic',
  },
  {
    feature: 'Vector',
    historical: 'Email Forwards, Expat Forums',
    current: 'WhatsApp Voice Notes, Reddit, TikTok',
    severity: 'Evolution',
  },
  {
    feature: 'Speed',
    historical: 'Days/Weeks',
    current: 'Minutes/Hours (Real-time)',
    severity: 'Evolution',
  },
  {
    feature: 'Bridge Node',
    historical: '"My friend saw the trucks."',
    current: '"Is it true? I saw a rash on my kid."',
    severity: 'Evolution',
  },
  {
    feature: 'Proof',
    historical: 'Visual (Video of trucks)',
    current: 'Somatic (Rash/Symptom) + Conceptual (Florida news)',
    severity: 'Somatic',
  },
]

// Counter-Measures - File 09 Data
const counterMeasures = [
  {
    title: 'Pre-Bunking of Symptoms',
    subtitle: 'Targeting Stratus Phantom',
    description: 'ADPHC should release "Winter Symptom Guide" before peak of rumor cycle. Explicitly list "Hoarseness" and "Laryngitis" as common symptoms of current mild seasonal viral mix.',
    pivot: 'Losing your voice is annoying, but it\'s not a new super-virus. It\'s just winter.',
    severity: 'critical',
    target: 'Stratus',
    channel: 'Use "White Voice Notes"—recruit trusted pediatricians to record informal, warm audio messages and seed via school liaison officers. Fight voice with voice.',
    impact: 'By naming and normalizing the symptom, you strip it of its "Phantom" power.',
    icon: <Mic className="h-5 w-5" />,
  },
  {
    title: 'Visible Verification',
    subtitle: 'Targeting Necrotic Tide',
    description: 'Install digital "Water Quality Dashboards" at major beaches (Corniche, Saadiyat) displaying real-time or daily microbial readings (E. Coli / Enterococci levels) in Green/Red light format.',
    pivot: 'Don\'t just say "Safe." Show the data.',
    severity: 'high',
    target: 'Necrotic Tide',
    channel: 'Release "Rash Identifier" infographic. Visually distinguish between "Heat Rash," "Jellyfish Sting," and "Bacterial Infection." Empower parents to diagnose benign rashes.',
    impact: 'Breaks feedback loop of panic by providing diagnostic clarity.',
    icon: <Waves className="h-5 w-5" />,
  },
  {
    title: 'Contextualizing Mortality',
    subtitle: 'Targeting Cosmetic Cardiac',
    description: 'Shift conversation from "Vaccine Injury" (defensive) to "Genetic Screening" (proactive). Acknowledge that young people DO have heart issues, but frame around genetics and lifestyle, not vaccines.',
    pivot: 'Did you know 1 in 167 people have genetic heart conditions? Get screened.',
    severity: 'high',
    target: 'Cosmetic Cardiac',
    channel: 'Provide medical explanation for "Sudden Death" that competes with conspiratorial explanation. Gives anxious public action plan reintegrating them into healthcare system.',
    impact: 'Provides alternative explanation that draws people INTO system rather than driving away.',
    icon: <Heart className="h-5 w-5" />,
  },
]

// Detection Markers - File 09 Data
const detectionMarkers = [
  '"Is it true"',
  '"Voice note circulating"',
  '"Received a forwarded message about..."',
  '"WhatsApp saying that..."',
  '"Why is the media silent about..."',
]

// Helper functions for badge variants
function getEmotionColor(driver: string): 'purple' | 'rose' | 'orange' | 'cyan' | 'denim' | 'fuchsia' {
  const emotionMap: Record<string, 'purple' | 'rose' | 'orange' | 'cyan' | 'denim' | 'fuchsia'> = {
    'Privilege / Exclusivity': 'purple',
    'Disgust / Bodily Integrity': 'rose',
    'Grief / Existential Dread': 'orange',
    'Anxiety / Lack of Control': 'cyan',
    'Anger / Betrayal': 'fuchsia',
  }
  return emotionMap[driver] || 'denim'
}

function getNarrativeColor(narrative: string): 'rose' | 'cyan' | 'fuchsia' | 'purple' | 'denim' {
  const narrativeMap: Record<string, 'rose' | 'cyan' | 'fuchsia' | 'purple' | 'denim'> = {
    'Stratus Phantom': 'rose',
    'Necrotic Tide': 'cyan',
    'Cosmetic Cardiac': 'fuchsia',
    'Cosmetic Cardiac / Stratus': 'purple',
    'All Narratives': 'denim',
  }
  return narrativeMap[narrative] || 'denim'
}

function getStrategyBadgeColor(target: string): 'rose' | 'cyan' | 'fuchsia' | 'denim' {
  const targetMap: Record<string, 'rose' | 'cyan' | 'fuchsia' | 'denim'> = {
    'Stratus': 'rose',
    'Necrotic Tide': 'cyan',
    'Cosmetic Cardiac': 'fuchsia',
  }
  return targetMap[target] || 'denim'
}
