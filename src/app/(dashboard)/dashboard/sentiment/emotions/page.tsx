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
  AlertCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  Brain,
  Heart,
  Smile,
  Frown,
  Meh,
  Angry,
  Feather,
  Clock,
} from 'lucide-react'
import {
  useTrendsDataArrayData,
} from '@/lib/data-loader'

export default function EmotionAnalysisPage() {
  const { data: trendsData } = useTrendsDataArrayData()

  if (!trendsData || trendsData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Emotion Analysis data...</div>
      </div>
    )
  }

  // Plutchik emotions with UAE-specific data
  const emotionData = [
    { emotion: 'Joy', value: 72, intensity: 'High', icon: Smile, color: CHART_COLORS.gold, category: 'positive' },
    { emotion: 'Trust', value: 68, intensity: 'High', icon: Heart, color: CHART_COLORS.navy, category: 'positive' },
    { emotion: 'Fear', value: 32, intensity: 'Moderate', icon: AlertTriangle, color: CHART_COLORS.rose, category: 'negative' },
    { emotion: 'Surprise', value: 45, intensity: 'Moderate', icon: AlertCircle, color: CHART_COLORS.platinum, category: 'neutral' },
    { emotion: 'Sadness', value: 28, intensity: 'Low', icon: Frown, color: CHART_COLORS.info, category: 'negative' },
    { emotion: 'Disgust', value: 22, intensity: 'Low', icon: Feather, color: CHART_COLORS.emerald, category: 'negative' },
    { emotion: 'Anger', value: 25, intensity: 'Low', icon: Angry, color: CHART_COLORS.rose, category: 'negative' },
    { emotion: 'Anticipation', value: 65, intensity: 'High', icon: Clock, color: CHART_COLORS.gold, category: 'positive' },
  ]

  // Emotion trends over time
  const emotionTrends = [
    { month: 'Jan', joy: 65, trust: 62, fear: 38, anticipation: 58 },
    { month: 'Feb', joy: 68, trust: 65, fear: 35, anticipation: 60 },
    { month: 'Mar', joy: 70, trust: 66, fear: 33, anticipation: 62 },
    { month: 'Apr', joy: 68, trust: 64, fear: 36, anticipation: 61 },
    { month: 'May', joy: 72, trust: 68, fear: 32, anticipation: 64 },
    { month: 'Jun', joy: 74, trust: 70, fear: 30, anticipation: 66 },
    { month: 'Jul', joy: 72, trust: 69, fear: 31, anticipation: 65 },
    { month: 'Aug', joy: 73, trust: 70, fear: 30, anticipation: 66 },
    { month: 'Sep', joy: 74, trust: 71, fear: 29, anticipation: 67 },
    { month: 'Oct', joy: 76, trust: 72, fear: 28, anticipation: 68 },
    { month: 'Nov', joy: 75, trust: 71, fear: 29, anticipation: 67 },
    { month: 'Dec', joy: 76, trust: 72, fear: 28, anticipation: 68 },
  ]

  // Emotion pairs (Plutchik)
  const emotionPairs = [
    { primary: 'Joy', secondary: 'Sadness', dominant: 'Joy', difference: 44 },
    { primary: 'Trust', secondary: 'Distrust', dominant: 'Trust', difference: 52 },
    { primary: 'Fear', secondary: 'Anger', dominant: 'Fear', difference: 7 },
    { primary: 'Surprise', secondary: 'Anticipation', dominant: 'Anticipation', difference: 20 },
    { primary: 'Disgust', secondary: 'Anticipation', dominant: 'Disgust', difference: 3 },
  ]

  // Sector emotion breakdown
  const sectorEmotions = [
    { sector: 'Economy', primary: 'Joy', value: 78 },
    { sector: 'Technology', primary: 'Anticipation', value: 82 },
    { sector: 'Culture', primary: 'Joy', value: 75 },
    { sector: 'Politics', primary: 'Trust', value: 65 },
    { sector: 'Environment', primary: 'Fear', value: 45 },
    { sector: 'Social Media', primary: 'Anticipation', value: 70 },
  ]

  // Positive emotions total
  const positiveEmotions = emotionData.filter(e => e.category === 'positive').reduce((sum, e) => sum + e.value, 0) / 3
  // Negative emotions total
  const negativeEmotions = emotionData.filter(e => e.category === 'negative').reduce((sum, e) => sum + e.value, 0) / 4

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">EMOTION ANALYSIS</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Emotion Analysis</h1>
          <p className="mt-2 text-slate-400">
            Plutchik emotion model analysis, intensity metrics, and emotional patterns
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Brain className="h-4 w-4" />
            Deep Dive
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze Patterns
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Dominant Emotion"
          value="Joy"
          previousValue="Trust"
          icon={<Smile className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Positive Index"
          value={`${Math.round(positiveEmotions)}%`}
          previousValue={Math.round(positiveEmotions) - 5}
          icon={<Heart className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Negative Index"
          value={`${Math.round(negativeEmotions)}%`}
          previousValue={Math.round(negativeEmotions) + 4}
          icon={<Frown className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Emotional Balance"
          value="+32"
          previousValue={27}
          icon={<Brain className="h-6 w-6" />}
          gradient="denim"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="emotions">Emotions</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="pairs">Emotion Pairs</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Emotion Analysis Overview" description="Plutchik model emotion distribution">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emotion Radar</CardTitle>
                  <CardDescription>Multi-dimensional emotion analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadarChart
                    data={emotionData}
                    metrics={[
                      { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Positive Emotions</CardTitle>
                    <CardDescription>Joy, Trust, Anticipation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={emotionData.filter(e => e.category === 'positive')}
                      xAxisKey="emotion"
                      bars={[
                        { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.emerald },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Negative Emotions</CardTitle>
                    <CardDescription>Fear, Sadness, Disgust, Anger</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={emotionData.filter(e => e.category === 'negative')}
                      xAxisKey="emotion"
                      bars={[
                        { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.rose },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Emotions Tab */}
        <TabsContent value="emotions" className="space-y-6">
          <GlassPanel title="Emotion Details" description="All 8 Plutchik emotions with intensity analysis">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {emotionData.map((emotion, idx) => (
                  <Card key={idx} className={`glass-card border-${emotion.color}/30`}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${emotion.color}20`, color: emotion.color }}
                        >
                          <emotion.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-200">{emotion.emotion}</p>
                          <Badge
                            variant={emotion.intensity === 'High' ? 'success' : emotion.intensity === 'Moderate' ? 'warning' : 'default'}
                            className="text-xs mt-1"
                          >
                            {emotion.intensity}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Intensity</span>
                          <span className="font-bold" style={{ color: emotion.color }}>{emotion.value}%</span>
                        </div>
                        <Progress
                          value={emotion.value}
                          className="h-2"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">All Emotions Bar Chart</CardTitle>
                  <CardDescription>Comparative intensity across all Plutchik emotions</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={emotionData}
                    xAxisKey="emotion"
                    bars={[
                      { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="Emotion Trends" description="Historical emotion analysis and patterns">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Positive Emotions Over Time</CardTitle>
                  <CardDescription>Joy, Trust, and Anticipation trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={emotionTrends}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'joy', name: 'Joy', color: CHART_COLORS.gold },
                      { dataKey: 'trust', name: 'Trust', color: CHART_COLORS.navy },
                      { dataKey: 'anticipation', name: 'Anticipation', color: CHART_COLORS.emerald },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Fear Trend</CardTitle>
                  <CardDescription>Negative emotion monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={emotionTrends}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'fear', name: 'Fear', color: CHART_COLORS.rose },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emotion by Sector</CardTitle>
                  <CardDescription>Dominant emotion per sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sectorEmotions}
                    xAxisKey="sector"
                    bars={[
                      { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Pairs Tab */}
        <TabsContent value="pairs" className="space-y-6">
          <GlassPanel title="Emotion Pairs" description="Plutchik opposite emotion pairs analysis">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emotion Balance</CardTitle>
                  <CardDescription>Dominant emotion in each opposite pair</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {emotionPairs.map((pair, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">{pair.primary} vs {pair.secondary}</span>
                          <span className="text-emerald-400 font-medium">Dominant: {pair.dominant}</span>
                        </div>
                        <div className="flex gap-1">
                          <div
                            className="h-3 rounded-l-full bg-emerald-500"
                            style={{ width: `${(pair.dominant === pair.primary ? 50 + pair.difference / 2 : 50 - pair.difference / 2)}%` }}
                          />
                          <div
                            className="h-3 rounded-r-full bg-rose-500"
                            style={{ width: `${(pair.dominant === pair.secondary ? 50 + pair.difference / 2 : 50 - pair.difference / 2)}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>{pair.primary}</span>
                          <span>{pair.secondary}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-emerald-400 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Rising Emotions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { emotion: 'Anticipation', change: '+10%', icon: Clock },
                        { emotion: 'Joy', change: '+8%', icon: Smile },
                        { emotion: 'Trust', change: '+6%', icon: Heart },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-emerald-500/10 p-3">
                          <div className="flex items-center gap-2">
                            <item.icon className="h-4 w-4 text-emerald-400" />
                            <span className="text-sm text-slate-200">{item.emotion}</span>
                          </div>
                          <Badge variant="success">{item.change}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-rose-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-rose-400 flex items-center gap-2">
                      <TrendingDown className="h-5 w-5" />
                      Declining Emotions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { emotion: 'Fear', change: '-10%', icon: AlertTriangle },
                        { emotion: 'Anger', change: '-7%', icon: Angry },
                        { emotion: 'Disgust', change: '-5%', icon: Feather },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-rose-500/10 p-3">
                          <div className="flex items-center gap-2">
                            <item.icon className="h-4 w-4 text-rose-400" />
                            <span className="text-sm text-slate-200">{item.emotion}</span>
                          </div>
                          <Badge variant="destructive">{item.change}</Badge>
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
