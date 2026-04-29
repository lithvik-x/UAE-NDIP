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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Eye,
  FileText,
  Globe,
  Heart,
  Newspaper,
  Radio,
  Search,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { perceptionData } from '@/lib/data-loader'

export default function MediaForensicsPage() {
  // Extract real data from data loader
  const { cheerleaders, critics, sensationalists } = perceptionData.mediaForensics
  // Media bloc distribution
  const mediaBlocData = [
    { bloc: 'Cheerleader', count: 145, sentiment: 82, bias: 15 },
    { bloc: 'Critic', count: 125, sentiment: 45, bias: 65 },
    { bloc: 'Sensationalist', count: 185, sentiment: 52, bias: 78 },
    { bloc: 'Neutral', count: 92, sentiment: 68, bias: 12 },
  ]

  // Sentiment trends by bloc
  const sentimentTrendData = [
    { month: 'Aug', cheerleader: 78, critic: 42, sensationalist: 48, neutral: 65 },
    { month: 'Sep', cheerleader: 80, critic: 40, sensationalist: 45, neutral: 67 },
    { month: 'Oct', cheerleader: 82, critic: 43, sensationalist: 50, neutral: 66 },
    { month: 'Nov', cheerleader: 85, critic: 45, sensationalist: 52, neutral: 68 },
    { month: 'Dec', cheerleader: 83, critic: 44, sensationalist: 51, neutral: 69 },
    { month: 'Jan', cheerleader: 82, critic: 45, sentiment: 52, neutral: 68 },
  ]

  // Coverage by category
  const coverageByCategoryData = [
    { category: 'Healthcare Quality', cheerleader: 65, critic: 45, sensationalist: 55 },
    { category: 'Insurance', cheerleader: 72, critic: 38, sensationalist: 48 },
    { category: 'Digital Health', cheerleader: 85, critic: 52, sensationalist: 62 },
    { category: 'Medical Tourism', cheerleader: 68, critic: 42, sensationalist: 58 },
    { category: 'Public Health', cheerleader: 78, critic: 48, sensationalist: 65 },
  ]

  // Source credibility analysis
  const sourceCredibilityData = [
    { source: 'The National', credibility: 85, bias: 15, accuracy: 92 },
    { source: 'Al Ittihad', credibility: 78, bias: 22, accuracy: 85 },
    { source: 'Gulf News', credibility: 72, bias: 28, accuracy: 80 },
    { source: 'Khaleej Times', credibility: 75, bias: 25, accuracy: 82 },
    { source: 'The National', credibility: 68, bias: 32, accuracy: 75 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-indigo">Media Forensics</h1>
          <p className="mt-2 text-slate-600">
            The Cheerleader, Critic, and Sensationalist bloc analysis
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Search Sources
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <Newspaper className="h-4 w-4" />
            Add Source
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Sources Tracked"
          value="847"
          previousValue={789}
          icon={<Newspaper className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Articles Analyzed"
          value="12.4K"
          previousValue={11234}
          icon={<FileText className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Bias Detected"
          value="23%"
          previousValue={21}
          unit="coverage"
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Sentiment Score"
          value="68%"
          previousValue={64}
          icon={<Heart className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="blocs" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="blocs">Media Blocs</TabsTrigger>
          <TabsTrigger value="cheerleader">Cheerleader Bloc</TabsTrigger>
          <TabsTrigger value="critic">Critic Bloc</TabsTrigger>
          <TabsTrigger value="sensationalist">Sensationalist Bloc</TabsTrigger>
          <TabsTrigger value="audit">50-Entity Audit</TabsTrigger>
        </TabsList>

        {/* Media Blocs Overview */}
        <TabsContent value="blocs" className="space-y-6">
          {/* Media Bloc Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Media Bloc Distribution</CardTitle>
                <CardDescription>Sources and sentiment by bloc</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={mediaBlocData}
                  xAxisKey="bloc"
                  bars={[
                    { dataKey: 'count', name: 'Source Count', color: CHART_COLORS.denim },
                    { dataKey: 'sentiment', name: 'Sentiment %', color: CHART_COLORS.emerald },
                    { dataKey: 'bias', name: 'Bias %', color: CHART_COLORS.rose },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Source Credibility Analysis</CardTitle>
                <CardDescription>Credibility vs. bias comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={sourceCredibilityData}
                  xAxisKey="source"
                  bars={[
                    { dataKey: 'credibility', name: 'Credibility %', color: CHART_COLORS.emerald },
                    { dataKey: 'accuracy', name: 'Accuracy %', color: CHART_COLORS.denim },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Media Bloc Analysis" description="Categorize media outlets by their coverage patterns">
            <div className="space-y-6">
              {/* Bloc Distribution */}
              <div className="grid gap-6 lg:grid-cols-3">
                {mediaBlocs.map((bloc, index) => (
                  <Card key={index} className={`glass-card border-2 ${bloc.borderColor}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-${bloc.color} text-white`}>
                          {bloc.icon}
                        </div>
                        <Badge variant={bloc.color as any} className="text-xs">{bloc.percentage}%</Badge>
                      </div>
                      <CardTitle className="text-lg mt-3">{bloc.name}</CardTitle>
                      <CardDescription>{bloc.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Sources</span>
                          <span className="font-semibold text-slate-900">{bloc.sources}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Avg. Sentiment</span>
                          <span className={`font-semibold ${bloc.sentiment >= 70 ? 'text-emerald-600' : bloc.sentiment >= 50 ? 'text-amber-600' : 'text-rose-600'}`}>
                            {bloc.sentiment}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">This Week</span>
                          <span className={`font-semibold ${bloc.trend >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {bloc.trend >= 0 ? <TrendingUp className="h-3 w-3 inline" /> : <TrendingDown className="h-3 w-3 inline" />}
                            {Math.abs(bloc.trend)}%
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full gap-1">
                        <Eye className="h-3 w-3" />
                        View Sources
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Source Breakdown */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">All Tracked Sources</CardTitle>
                      <CardDescription>Media outlets monitored for healthcare coverage</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">Export List</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {allSources.map((source, index) => (
                        <div key={index} className={`flex items-center gap-4 rounded-lg border-2 p-3 ${
                          source.bloc === 'cheerleader' ? 'border-emerald-200 bg-emerald-50/30' :
                          source.bloc === 'critic' ? 'border-rose-200 bg-rose-50/30' :
                          'border-amber-200 bg-amber-50/30'
                        }`}>
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                            source.bloc === 'cheerleader' ? 'bg-emerald-500 text-white' :
                            source.bloc === 'critic' ? 'bg-rose-500 text-white' :
                            'bg-amber-500 text-white'
                          }`}>
                            <Newspaper className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{source.name}</div>
                            <div className="text-xs text-slate-500">{source.type} • {source.reach} reach</div>
                          </div>
                          <Badge variant={source.bloc === 'cheerleader' ? 'success' : source.bloc === 'critic' ? 'destructive' : 'warning'} className="text-xs">
                            {source.bloc}
                          </Badge>
                          <div className="text-right">
                            <div className="text-sm font-bold text-slate-900">{source.sentiment}%</div>
                            <div className="text-xs text-slate-500">sentiment</div>
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

        {/* Cheerleader Bloc */}
        <TabsContent value="cheerleader" className="space-y-6">
          <GlassPanel title="The Cheerleader Bloc" description="Media outlets with consistently positive coverage" badge="Positive">
            <div className="space-y-6">
              {/* Bloc Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-emerald-600">34</div>
                    <div className="text-sm text-slate-600 mt-1">Sources</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-emerald-600">89%</div>
                    <div className="text-sm text-slate-600 mt-1">Avg. Positive</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-slate-900">4.2K</div>
                    <div className="text-sm text-slate-600 mt-1">Articles This Month</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-purple-600">156</div>
                    <div className="text-sm text-slate-600 mt-1">Health Topics</div>
                  </CardContent>
                </Card>
              </div>

              {/* Top Cheerleaders */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Cheerleader Sources</CardTitle>
                  <CardDescription>Highest positive coverage percentage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cheerleaderSources.map((source, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-emerald text-white text-lg font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{source.name}</div>
                          <div className="text-sm text-slate-600">{source.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-emerald-600">{source.positive}%</div>
                          <div className="text-xs text-slate-500">positive</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-slate-900">{source.articles}</div>
                          <div className="text-xs text-slate-500">articles</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Critic Bloc */}
        <TabsContent value="critic" className="space-y-6">
          <GlassPanel title="The Critic Bloc" description="Media outlets with critical or skeptical coverage" badge="Critical">
            <div className="space-y-6">
              {/* Bloc Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-rose-600">18</div>
                    <div className="text-sm text-slate-600 mt-1">Sources</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-rose-600">23%</div>
                    <div className="text-sm text-slate-600 mt-1">Avg. Negative</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-slate-900">1.8K</div>
                    <div className="text-sm text-slate-600 mt-1">Articles This Month</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-amber-600">67</div>
                    <div className="text-sm text-slate-600 mt-1">Critical Topics</div>
                  </CardContent>
                </Card>
              </div>

              {/* Top Critics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Critic Sources</CardTitle>
                  <CardDescription>Highest critical coverage percentage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {criticSources.map((source, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-rose text-white text-lg font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{source.name}</div>
                          <div className="text-sm text-slate-600">{source.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-rose-600">{source.negative}%</div>
                          <div className="text-xs text-slate-500">negative</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-slate-900">{source.articles}</div>
                          <div className="text-xs text-slate-500">articles</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Critical Topics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Most Criticized Topics</CardTitle>
                  <CardDescription>Health areas receiving critical coverage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {criticalTopics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-lg bg-rose-50/50 border border-rose-200 p-3">
                        <AlertCircle className="h-5 w-5 text-rose-500 shrink-0" />
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{topic.name}</div>
                          <div className="text-xs text-slate-500">{topic.outlets} outlets • {topic.articles} articles</div>
                        </div>
                        <Badge variant="destructive" className="text-xs">{topic.sentiment}% negative</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sensationalist Bloc */}
        <TabsContent value="sensationalist" className="space-y-6">
          <GlassPanel title="The Sensationalist Bloc" description="Media outlets prone to exaggerated or dramatic coverage" badge="Sensationalist">
            <div className="space-y-6">
              {/* Bloc Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-amber-600">23</div>
                    <div className="text-sm text-slate-600 mt-1">Sources</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-amber-600">67%</div>
                    <div className="text-sm text-slate-600 mt-1">Sensationalism Score</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-slate-900">3.4K</div>
                    <div className="text-sm text-slate-600 mt-1">Articles This Month</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-purple-600">89</div>
                    <div className="text-sm text-slate-600 mt-1">Flagged Items</div>
                  </CardContent>
                </Card>
              </div>

              {/* Top Sensationalist Sources */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Sensationalist Sources</CardTitle>
                  <CardDescription>Highest sensationalism scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sensationalistSources.map((source, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-amber text-white text-lg font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{source.name}</div>
                          <div className="text-sm text-slate-600">{source.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-amber-600">{source.score}%</div>
                          <div className="text-xs text-slate-500">sensational</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-slate-900">{source.flagged}</div>
                          <div className="text-xs text-slate-500">flagged</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Sensationalist Headlines */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Flagged Headlines</CardTitle>
                      <CardDescription>Recently flagged sensationalist coverage</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-80">
                    <div className="space-y-3 pr-4">
                      {flaggedHeadlines.map((headline, index) => (
                        <div key={index} className="flex items-start gap-4 rounded-lg bg-amber-50/50 border border-amber-200 p-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-white">
                            <AlertTriangle className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{headline.title}</div>
                            <div className="text-xs text-slate-500 mt-1">{headline.source} • {headline.date}</div>
                            <div className="mt-2 text-xs text-slate-600 line-clamp-2">{headline.excerpt}</div>
                          </div>
                          <Badge variant="warning" className="shrink-0 text-xs">{headline.severity}</Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* 50-Entity Audit Tab */}
        <TabsContent value="audit" className="space-y-6">
          <GlassPanel title="Comprehensive Media Bias Audit (2024-2025)" description="50 media entities analyzed for framing bias in Abu Dhabi healthcare reporting" badge="Exhaustive Analysis">
            <div className="space-y-6">
              {/* Executive Summary */}
              <Card className="glass-card border-indigo-200 bg-indigo-50/30">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                      <FileText className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-indigo-900">The Triangulation of Truth</CardTitle>
                      <CardDescription className="text-indigo-700/80 mt-2">
                        This audit reveals that bias in Abu Dhabi health reporting is less about political partisanship and more about commercial and structural alignment. The "truth" lies in the triangulation of three discordant narratives: The Cheerleaders (state/corporate alignment), The Critics (international/legal norms), and The Sensationalists (audience anxiety).
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* The Cheerleaders (30 Sources) */}
              <Card className="glass-card border-emerald-200 bg-emerald-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section II: The Cheerleaders — The Architecture of Amplification</CardTitle>
                      <CardDescription>30 media entities with uncritical acceptance of corporate/state messaging</CardDescription>
                    </div>
                    <Badge variant="success" className="text-xs">60% of Coverage</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {cheerleaderEntities.map((entity, index) => (
                        <Card key={index} className="border-l-4 border-l-emerald-400 bg-emerald-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="success" className="text-xs">#{entity.id}</Badge>
                              <h4 className="font-bold text-slate-900">{entity.name}</h4>
                              <Badge variant="outline" className="text-xs ml-auto">{entity.category}</Badge>
                            </div>
                            <p className="text-sm font-semibold text-emerald-700">{entity.bias}</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{entity.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{entity.headline}&quot;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* The Critics (14 Sources) */}
              <Card className="glass-card border-rose-200 bg-rose-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section III: The Critics — Deconstructing the System</CardTitle>
                      <CardDescription>14 media entities highlighting economic inefficiencies and legal risks</CardDescription>
                    </div>
                    <Badge variant="destructive" className="text-xs">28% of Coverage</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {criticEntities.map((entity, index) => (
                        <Card key={index} className="border-l-4 border-l-rose-400 bg-rose-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="destructive" className="text-xs">#{entity.id}</Badge>
                              <h4 className="font-bold text-slate-900">{entity.name}</h4>
                              <Badge variant="outline" className="text-xs ml-auto">{entity.category}</Badge>
                            </div>
                            <p className="text-sm font-semibold text-rose-700">{entity.bias}</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{entity.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{entity.headline}&quot;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* The Sensationalists (6 Sources) */}
              <Card className="glass-card border-amber-200 bg-amber-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Section IV: The Sensationalists — Fear, Toxins, and Nightmares</CardTitle>
                      <CardDescription>6 media outlets driven by the economics of attention</CardDescription>
                    </div>
                    <Badge variant="warning" className="text-xs">12% of Coverage</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {sensationalistEntities.map((entity, index) => (
                        <Card key={index} className="border-l-4 border-l-amber-400 bg-amber-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="warning" className="text-xs">#{entity.id}</Badge>
                              <h4 className="font-bold text-slate-900">{entity.name}</h4>
                              <Badge variant="outline" className="text-xs ml-auto">{entity.category}</Badge>
                            </div>
                            <p className="text-sm font-semibold text-amber-700">{entity.bias}</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-slate-700">{entity.description}</p>
                            <p className="text-xs text-slate-500 mt-2 italic">&quot;{entity.headline}&quot;</p>
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
      </Tabs>
    </div>
  )
}

// Data
const mediaBlocs = [
  {
    name: 'The Cheerleader Bloc',
    description: 'Consistently positive coverage of healthcare initiatives',
    sources: 34,
    sentiment: 89,
    trend: 5,
    percentage: 40,
    color: 'emerald',
    borderColor: 'border-emerald-200',
    icon: <Heart className="h-6 w-6" />,
  },
  {
    name: 'The Critic Bloc',
    description: 'Critical or skeptical coverage of healthcare policies',
    sources: 18,
    sentiment: 34,
    trend: -3,
    percentage: 21,
    color: 'rose',
    borderColor: 'border-rose-200',
    icon: <AlertCircle className="h-6 w-6" />,
  },
  {
    name: 'The Sensationalist Bloc',
    description: 'Exaggerated or dramatic coverage for engagement',
    sources: 23,
    sentiment: 56,
    trend: 2,
    percentage: 27,
    color: 'amber',
    borderColor: 'border-amber-200',
    icon: <Zap className="h-6 w-6" />,
  },
]

const allSources = [
  { name: 'The National Health', type: 'Newspaper', reach: 'Regional', sentiment: 94, bloc: 'cheerleader' },
  { name: 'Khaleej Times Health', type: 'Online', reach: 'National', sentiment: 87, bloc: 'cheerleader' },
  { name: 'Gulf News Medical', type: 'Newspaper', reach: 'National', sentiment: 82, bloc: 'cheerleader' },
  { name: 'Al Ittihad Health', type: 'Newspaper', reach: 'National', sentiment: 91, bloc: 'cheerleader' },
  { name: 'Emarat Health Today', type: 'TV', reach: 'National', sentiment: 45, bloc: 'critic' },
  { name: 'Health Watch UAE', type: 'Online', reach: 'International', sentiment: 38, bloc: 'critic' },
  { name: 'Medical Observer', type: 'Online', reach: 'National', sentiment: 52, bloc: 'sensationalist' },
  { name: 'Health Scoop Daily', type: 'Online', reach: 'Regional', sentiment: 61, bloc: 'sensationalist' },
]

const cheerleaderSources = [
  { name: 'The National Health', description: 'Leading health section with positive DoH coverage', positive: 94, articles: 423 },
  { name: 'Al Ittihad Health', description: 'Arabic-language health news with government focus', positive: 91, articles: 389 },
  { name: 'Khaleej Times Health', description: 'Comprehensive health reporting', positive: 87, articles: 312 },
  { name: 'Gulf News Medical', description: 'Balanced healthcare coverage', positive: 82, articles: 278 },
]

const criticSources = [
  { name: 'Emarat Health Today', description: 'Critical analysis of healthcare policies', negative: 67, articles: 156 },
  { name: 'Health Watch UAE', description: 'Investigative health journalism', negative: 58, articles: 134 },
  { name: 'Medical Critic Weekly', description: 'Skeptical coverage of health initiatives', negative: 52, articles: 98 },
  { name: 'Policy Review Health', description: 'Critical policy analysis', negative: 48, articles: 87 },
]

const criticalTopics = [
  { name: 'Insurance Claim Rejections', outlets: 8, articles: 234, sentiment: 72 },
  { name: 'Hospital Wait Times', outlets: 12, articles: 189, sentiment: 68 },
  { name: 'Vaccine Side Effects', outlets: 6, articles: 145, sentiment: 61 },
  { name: 'Health Data Privacy', outlets: 5, articles: 98, sentiment: 54 },
]

const sensationalistSources = [
  { name: 'Health Scoop Daily', description: 'Click-driven health headlines', score: 78, flagged: 23 },
  { name: 'Viral Health News', description: 'Social media-focused health content', score: 82, flagged: 31 },
  { name: 'Shock Medical Stories', description: 'Dramatic patient narratives', score: 71, flagged: 18 },
  { name: 'Trending Health Now', description: 'Viral health trend coverage', score: 69, flagged: 17 },
]

const flaggedHeadlines = [
  {
    title: '"SHOCKING: New Vaccine Side Effects REVEALED!"',
    source: 'Viral Health News',
    date: 'Jan 10, 2026',
    excerpt: 'Breaking: Reports emerge of concerning side effects from the latest vaccine rollout that health officials don\'t want you to know...',
    severity: 'high',
  },
  {
    title: '"Doctors STUNNED by Miracle Weight Loss Drug!"',
    source: 'Health Scoop Daily',
    date: 'Jan 9, 2026',
    excerpt: 'Incredible results reported by users of new weight loss medication. Scientists amazed by the transformation...',
    severity: 'medium',
  },
  {
    title: '"Hospitals in CHAOS: Staff Shortage CRISIS!"',
    source: 'Trending Health Now',
    date: 'Jan 8, 2026',
    excerpt: 'Exclusive investigation reveals the dangerous staffing levels at major hospitals. Is your safety at risk?',
    severity: 'high',
  },
]

// File 11: MEDIA BIAS AUDIT - Data Arrays (50 Media Entities)

const cheerleaderEntities: Array<{
  id: number
  name: string
  bias: string
  description: string
  headline: string
  category: string
}> = [
  {
    id: 1,
    name: 'WAM (Emirates News Agency)',
    bias: 'State Record-Keeper',
    description: 'WAM does not "report" in the traditional sense; it records. Its bias is absolute alignment with official policy, omitting data regarding rising obesity or diabetes rates that necessitate health interventions.',
    headline: 'M42 committed to sustainable future of global health – from Abu Dhabi to the world',
    category: 'Official State Apparatus'
  },
  {
    id: 2,
    name: 'The National (Health Desk)',
    bias: 'The "Nation-Branding" Lens',
    description: 'Framing healthcare challenges as opportunities for leadership. The global nursing shortage is not framed as a crisis of retention but as a testament to the "super-skilled" nature of UAE nurses.',
    headline: 'Top-class UAE nurses scouted by struggling Western health systems',
    category: 'Official State Apparatus'
  },
  {
    id: 3,
    name: 'Khaleej Times',
    bias: 'The Proactive Protector',
    description: 'During health crises, frames government restrictions not as impositions but as benevolent protection. Reports on screenings are delivered with a tone of reassurance.',
    headline: 'China coronavirus outbreak: Dubai to screen passengers',
    category: 'Official State Apparatus'
  },
  {
    id: 4,
    name: 'Gulf News (Business/Corporate Desk)',
    bias: 'The Corporate Megaphone',
    description: 'Functions as an investor relations outlet for giants like PureHealth. Coverage of financial results is presented without analysis of market consolidation risks.',
    headline: 'PureHealth Posts Net Profit of AED 1.4 Billion and Revenues Increase of 56%',
    category: 'Official State Apparatus'
  },
  {
    id: 5,
    name: 'Gulf Business',
    bias: 'The Awards Ecosystem',
    description: 'Validates corporate narratives through "Awards" and "Power Lists," creating a circular feedback loop of legitimacy focused on C-suite visionaries.',
    headline: 'Revealed: The top 30 healthcare visionaries of 2024',
    category: 'Official State Apparatus'
  },
  {
    id: 6,
    name: 'Arabian Business',
    bias: 'Economic Growth Determinism',
    description: 'Frames healthcare strictly as an asset class, equating revenue growth with health system success while ignoring potential over-capacity issues.',
    headline: 'PureHealth achieves over $4.4bn in revenues, showing 31% YoY growth',
    category: 'Official State Apparatus'
  },
  {
    id: 7,
    name: 'Forbes Middle East',
    bias: 'The "Captain of Industry" Narrative',
    description: 'Reinforces the "Great Man" theory of healthcare—that progress is driven by visionary CEOs. Events sponsored by entities they cover produce indistinguishable corporate thought leadership.',
    headline: 'The Forbes Middle East Healthcare Leaders\' Summit, presented by PureHealth',
    category: 'Official State Apparatus'
  },
  {
    id: 8,
    name: 'Omnia Health',
    bias: 'The Exhibitionist',
    description: 'As the content arm of Arab Health, focuses on "launches" and "partnerships" during events. Technologies are celebrated at launch but long-term efficacy is rarely reported.',
    headline: 'Cleveland Clinic Abu Dhabi reports 35% growth in international patient volume',
    category: 'Trade Press'
  },
  {
    id: 9,
    name: 'Middle East Health',
    bias: 'The Technological Determinism',
    description: 'Focuses on equipment and infrastructure, framing every new machine as a revolution. Questions of whether expensive technologies improve population health are absent.',
    headline: 'Cleveland Clinic Abu Dhabi performs first transcontinental robotic prostate cancer procedure',
    category: 'Trade Press'
  },
  {
    id: 10,
    name: 'Arab Health Magazine',
    bias: 'The Future-Gazing Distraction',
    description: 'Obsessively focuses on "The Future of Health"—longevity, AI, and bio-convergence—avoiding the messy realities of insurance claim denials or wait times.',
    headline: 'UAE\'s vision for longevity in focus at Arab Health\'s Future Health Summit',
    category: 'Trade Press'
  },
  {
    id: 11,
    name: 'Healthcare IT News (EMEA)',
    bias: 'The Digital Savior',
    description: 'Operates on the premise that digitization is always the solution. Coverage of Malaffi is uniformly positive, ignoring implementation gaps and data privacy concerns.',
    headline: 'Abu Dhabi and Israel to explore bio-convergence',
    category: 'Trade Press'
  },
  {
    id: 12,
    name: 'MobiHealthNews',
    bias: 'The Startup Hype Cycle',
    description: 'Amplifies the "disruption" narrative. Press releases about "labs on wheels" are treated as substantive news before any efficacy data is produced.',
    headline: 'South Korean \'lab on wheels\' coming to MENA region via new partnership',
    category: 'Trade Press'
  },
  {
    id: 13,
    name: 'Hospital & Healthcare Management',
    bias: 'The Administrative Echo',
    description: 'Focuses on "operational excellence" and "accreditation," validating bureaucratic structures while framing accreditation as a proxy for actual quality.',
    headline: 'Aster DM Healthcare ranked 2nd largest healthcare provider in UAE',
    category: 'Trade Press'
  },
  {
    id: 14,
    name: 'Asian Hospital & Healthcare Management',
    bias: 'The Regional Integrationist',
    description: 'Frames Abu Dhabi within broader Asian context, highlighting medical tourism flows while treating healthcare purely as a logistical optimization challenge.',
    headline: 'Digital Healthcare Transformation: Key Trends in the Middle East',
    category: 'Trade Press'
  },
  {
    id: 15,
    name: 'Building Healthcare Middle East',
    bias: 'The Infrastructure Fetishist',
    description: 'Focuses on the construction of facilities, framing the building of hospitals as the achievement itself while ignoring staffing crises.',
    headline: 'Building Healthcare Middle East conference brochure: Future Projects',
    category: 'Trade Press'
  },
  {
    id: 16,
    name: 'Health Magazine',
    bias: 'The Public Health Mouthpiece',
    description: 'Often distributed in clinics, partners with bodies like the Frontline Heroes Office. Content is essentially "soft" public health messaging wrapped in pro-government wrapper.',
    headline: 'Frontline Heroes Office on Arab Health Day',
    category: 'Trade Press'
  },
  {
    id: 17,
    name: 'What\'s On Abu Dhabi',
    bias: 'The "Spa-ification" of Medicine',
    description: 'Frames health as a leisure activity. Reviews of "detox retreats" use the same vocabulary as restaurant reviews, ignoring medical validity.',
    headline: 'When you\'re ready to detox from neon and noise... wellness rituals that embrace cold therapy',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 18,
    name: 'Fact Magazine',
    bias: 'The Luxury Validator',
    description: 'Through "Spa & Wellness Awards," creates a commercial ecosystem where spas compete for recognition. Reviews focus on ambiance rather than therapeutic outcomes.',
    headline: 'FACT Spa & Wellness Awards UAE 2026: Vote Now',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 19,
    name: 'Savoir Flair',
    bias: 'The Aesthete\'s Gaze',
    description: 'Covers "wellness retreats" purely as aesthetic experiences. Health is framed as a marker of status, reinforcing exclusion of those who cannot afford high-end treatments.',
    headline: 'RITUALS Wellness Retreat... indulge in sound meditation, manifestation workshops',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 20,
    name: 'Emirates Woman',
    bias: 'The Celebrity Expert',
    description: 'Focuses on "profiles" of high-profile doctors. Interviews are soft-ball, designed to build personal brands rather than interrogate practices.',
    headline: 'Dr. Dragana Spica: Dubai\'s Top Celebrity Plastic Surgeon',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 21,
    name: 'Cosmopolitan Middle East',
    bias: 'The Trend Chaser',
    description: 'Covers health through viral trends—"Ozempic," "IV drips." Bias is towards novelty and "Instagrammability" over scientific validity.',
    headline: '3 Benefits of Switching to Organic Beauty Products This Ramadan',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 22,
    name: 'Grazia Middle East',
    bias: 'The Fashion-Fitness Nexus',
    description: 'Frames fitness as a fashion statement. Coverage of "best gyms" focuses on aesthetics and "cool factor," promoting an image of health that is image-obsessed.',
    headline: 'Try a new cocktail bar... or a beginner yoga class in Mushrif Central Park',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 23,
    name: 'Time Out Abu Dhabi',
    bias: 'The Service Aggregator',
    description: 'Relentlessly positive. Lists ("Best Personal Trainers") are devoid of critical assessment regarding cost or qualification. Functions as a directory for wellness consumers.',
    headline: 'Best gyms and workout studios in Abu Dhabi',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 24,
    name: 'Connector Magazine',
    bias: 'The Family Safety Net',
    description: 'Provides "safe" health advice for expats. Avoids controversial topics to maintain a "family-friendly" and advertiser-safe environment.',
    headline: 'Smart Sugar Swaps To Help You Cut Back Without Feeling Deprived',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 25,
    name: 'Yalla Abu Dhabi',
    bias: 'The Community Cheerleader',
    description: 'Focuses on community events like "Active Parks," reprints DoH initiatives as pure community service while ignoring underlying health crises.',
    headline: 'Active Parks Abu Dhabi launches 380 free fitness classes in urban spaces',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 26,
    name: 'Abu Dhabi World',
    bias: 'The Event Promoter',
    description: 'Frames health as a series of events (marathons, jiujitsu championships), reinforcing the state\'s narrative of a "sporting nation."',
    headline: '15th edition of Abu Dhabi World Pro... shaping resilient and competent generations',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 27,
    name: 'WIRED Middle East',
    bias: 'The Futurist Echo',
    description: 'Frames Abu Dhabi as a testbed for the future. Coverage of "robotic surgery" is breathless and uncritical, focusing on potential rather than reality.',
    headline: 'The future of anatomical education: VR, 3D models, and AI poised to transform',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 28,
    name: 'MIT Technology Review Arabia',
    bias: 'The Innovation Validator',
    description: 'Celebrates "Innovators Under 35" lists, creating a bias where "innovation" is the only metric of success while ignoring basics of public health delivery.',
    headline: 'MIT Technology Review Arabia announces the 2024 winners of Innovators Under 35',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 29,
    name: 'Healthy Living Magazine',
    bias: 'The Lifestyle Softener',
    description: 'Frames chronic disease management as a "lifestyle journey," focusing on diet and exercise tips while downplaying clinical/pharmaceutical costs.',
    headline: 'How healthy is a juice cleanse?',
    category: 'Lifestyle & Wellness'
  },
  {
    id: 30,
    name: 'Good Housekeeping Middle East',
    bias: 'The Domesticated Health Guide',
    description: 'Focuses on home health and nutrition. The bias is towards "practical tips" that shift responsibility from the system to the individual.',
    headline: 'Hearst Magazines International to Launch Middle East Edition of Good Housekeeping',
    category: 'Lifestyle & Wellness'
  },
]

const criticEntities: Array<{
  id: number
  name: string
  bias: string
  description: string
  headline: string
  category: string
}> = [
  {
    id: 31,
    name: 'LaingBuisson',
    bias: 'The Economic Realist',
    description: 'Looks at the numbers, not press releases. Reveals that despite billions in investment, outbound medical tourism remains high, contradicting the "hub" narrative.',
    headline: 'Abu Dhabi outbound medical tourism increases 10% per year',
    category: 'Market Intelligence'
  },
  {
    id: 32,
    name: 'International Medical Travel Journal (IMTJ)',
    bias: 'The Data Skeptic',
    description: 'Actively challenges inflated statistics. Highlights high costs of care in Abu Dhabi as a barrier to inbound tourism, a perspective never found in local press.',
    headline: 'Abu Dhabi seeks to do as well or better than its UAE rival... Healthcare costs are high',
    category: 'Market Intelligence'
  },
  {
    id: 33,
    name: 'Oxford Business Group',
    bias: 'The Structural Analyst',
    description: 'While generally investment-friendly, reports contain "fine print" like the breakdown of insurance tiers and the financial burden of outbound care.',
    headline: 'The outflow of medical revenues represents a loss for Abu Dhabi\'s health care system',
    category: 'Market Intelligence'
  },
  {
    id: 34,
    name: 'Freopp.org',
    bias: 'The Index Benchmarker',
    description: 'Ranking the UAE 30th in "Choice" and "Quality" provides a comparative critique that punctures the "World\'s Best" narrative, highlighting disparity between infrastructure and care.',
    headline: 'UAE\'s diverse healthcare system faces challenges, ranking 30th in both Choice and Quality',
    category: 'Market Intelligence'
  },
  {
    id: 35,
    name: 'Al Tamimi & Co',
    bias: 'The Liability Watchdog',
    description: 'Analysis of Medical Liability Law reveals high stakes for doctors: medical error can lead to criminal prosecution, creating a "chilling effect" on the profession.',
    headline: 'Medical Liability Committees... tasked with the sole jurisdiction to opine on issues of medical error',
    category: 'Legal & Regulatory'
  },
  {
    id: 36,
    name: 'Clyde & Co',
    bias: 'The Compliance Monitor',
    description: 'Briefings focus on shifting health data laws and insurance regulations, highlighting the complexity and burden of compliance countering the "ease of business" narrative.',
    headline: 'Attention Health Profession in the UAE... new mandatory health insurance system',
    category: 'Legal & Regulatory'
  },
  {
    id: 37,
    name: 'BSA Ahmad Bin Hezeem & Associates',
    bias: 'The Criminal Defense Lens',
    description: 'Updates focus on "tightening" of criminal liability for physicians, portraying a punitive regulatory environment that contrasts with "doctor-friendly" policies.',
    headline: 'Strengthening Criminal Liability of Physicians and Pharmacies',
    category: 'Legal & Regulatory'
  },
  {
    id: 38,
    name: 'Migrant-Rights.org',
    bias: 'The Class Analyst',
    description: 'Highlights "Insurance Apartheid"—the difference between Thiqa (for nationals) and Basic (for low-income expats), framing the system as inherently discriminatory.',
    headline: 'Migrant workers\' access to health in the Gulf... The Cost of Living',
    category: 'Human Rights & Labor'
  },
  {
    id: 39,
    name: 'Human Rights Watch (HRW)',
    bias: 'The Rights Defender',
    description: 'Focuses on intersections of health and incarceration, reporting on denial of care to prisoners or segregation of HIV+ detainees—entirely absent from domestic reporting.',
    headline: 'Detainees living with HIV were segregated... and faced stigma and systemic discrimination',
    category: 'Human Rights & Labor'
  },
  {
    id: 40,
    name: 'Equidem',
    bias: 'The Labor Investigator',
    description: 'Documents abuse of the nursing workforce—wage theft, racial discrimination, and forced labor—deconstructing the "Hero" narrative of the pandemic.',
    headline: 'East African care workers in the Gulf face deeply entrenched systems of exploitation',
    category: 'Human Rights & Labor'
  },
  {
    id: 41,
    name: 'FairSquare',
    bias: 'The Structural Critic',
    description: 'Focuses on how the Kafala system impacts health outcomes, arguing that tying health insurance to employment creates a vulnerability trap for workers.',
    headline: 'The Vital Signs Partnership... campaigning for better protection for low-paid migrant workers',
    category: 'Human Rights & Labor'
  },
  {
    id: 42,
    name: 'Amnesty International',
    bias: 'The Social Moralist',
    description: 'Critiques laws intersecting with health, such as requirements for medical staff to report unmarried pregnant women to police, highlighting conflict between ethics and policing.',
    headline: 'Swedish-run hospital in Ajman Emirate was forced to report pregnant, unmarried women to the police',
    category: 'Human Rights & Labor'
  },
  {
    id: 43,
    name: 'The Guardian (UK)',
    bias: 'The Geopolitical Critic',
    description: 'Links UAE healthcare investments to broader foreign policy objectives, framing healthcare aid not as charity but as a tool of political leverage.',
    headline: 'Sudan\'s latest massacre... RSF fighters killing medical staff',
    category: 'International Press'
  },
  {
    id: 44,
    name: 'Detained in Dubai',
    bias: 'The Legal Alarmist',
    description: 'Highlights cases of expats jailed for carrying prescription drugs or unpaid medical debts, presenting the UAE healthcare/legal system as a trap for foreigners.',
    headline: 'She was told to her horror that he faced a four-year prison sentence for \'drug possession\'',
    category: 'International Press'
  },
]

const sensationalistEntities: Array<{
  id: number
  name: string
  bias: string
  description: string
  headline: string
  category: string
}> = [
  {
    id: 45,
    name: 'Daily Mail (UK)',
    bias: 'The Horror Merchant',
    description: 'Feasts on stories of British tourists suffering medical catastrophes abroad. Uses visceral language ("Horror," "Hell," "Butchered") to frame UAE as high-risk.',
    headline: 'Despairing mother reveals the true horror of drug so many are taking',
    category: 'Botched Narrative'
  },
  {
    id: 46,
    name: 'The Sun (UK)',
    bias: 'The Tabloid Scarer',
    description: 'Frames cosmetic surgery tourism as a gamble with one\'s life, focusing on physical disfigurement to create a visual and narrative deterrent.',
    headline: 'A botched operation... resulting in low self-esteem... Avoid Dubai & Abu Dhabi',
    category: 'Botched Narrative'
  },
  {
    id: 47,
    name: 'Al Rowaad Advocates (Blog)',
    bias: 'The Fear Marketer',
    description: 'While a law firm, their blog operates like a sensationalist outlet, using headlines about "Jail Terms" and "Botched Nose Jobs" to attract scared clients.',
    headline: 'Dubai doctors appeal against jail term for botched nose job thrown out by judge',
    category: 'Botched Narrative'
  },
  {
    id: 48,
    name: 'Lovin Abu Dhabi',
    bias: 'The Viral Alarm',
    description: 'Uses "Warning" and "Immediate Recall" frames to drive clicks. The breathless tone regarding product recalls prioritizes fear over nuanced risk assessment.',
    headline: 'Authorities ordered the immediate recall of... infant formula after traces of Cereulide... toxin',
    category: 'Toxin & Outbreak Panic'
  },
  {
    id: 49,
    name: 'Curly Tales',
    bias: 'The Anxiety Amplifier',
    description: 'Amplifies health scares and travel advisories, framing routine regulatory actions as "Urgent Alerts" contributing to perpetual low-level crisis.',
    headline: 'UAE Recalls Some Nestle Infant Formulas, As Saudi Arabia Warns Against Toxin Risks',
    category: 'Toxin & Outbreak Panic'
  },
  {
    id: 50,
    name: 'Fox News (Marc Siegel)',
    bias: 'The Pandemic Panic',
    description: 'Uses global health news to stoke fears of "new variants" or "mystery viruses," with framing of immediate threat requiring border closures.',
    headline: 'New virus variant triggers market panic... immediate travel restrictions',
    category: 'Toxin & Outbreak Panic'
  },
]
