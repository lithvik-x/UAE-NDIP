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
  Sparkles,
  TrendingUp,
  Brain,
  Globe,
  Rocket,
  Target,
  Users,
  MessageSquare,
  Award,
  Lightbulb,
  Zap,
  Eye,
  Heart,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Megaphone,
  BarChart3,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useHopeOptimismData } from '@/lib/data-loader'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

export default function HopeOptimismPage() {
  const {
    hopeOptimismData,
    polyHopeDataset,
    hopeImpactStudies,
    mediaMonitoringKPIs,
    optimismMarketing,
    wgsnOptimismTrends,
    hopeOptimismKeywords,
  } = useHopeOptimismData()

  // Extract key data
  const hopeCategories = polyHopeDataset?.hopeCategories || []
  const polyHopeStats = polyHopeDataset?.datasetStats?.v2Version || { total: 0, english: 0, spanish: 0 }
  const modelPerformance = polyHopeDataset?.modelPerformance || []
  const emiratesMission = emiratesMarsMission
  const marketingStats = optimismMarketing?.marketingStatistics || []
  const brightFramework = optimismMarketing?.brightFramework || []

  // Key findings
  const keyFindings = hopeOptimismData?.keyFindings || []

  // Chart data - PolyHope dataset distribution
  const hopeDistributionData = [
    { name: 'Not Hope', value: 13869, color: CHART_COLORS.platinum },
    { name: 'Generalized Hope', value: 7342, color: CHART_COLORS.emerald },
    { name: 'Realistic Hope', value: 3006, color: CHART_COLORS.teal },
    { name: 'Unrealistic Hope', value: 3222, color: CHART_COLORS.orange },
    { name: 'Sarcasm', value: 2518, color: CHART_COLORS.rose },
  ]

  // Model performance data
  const modelPerformanceData = modelPerformance.length > 0 ? modelPerformance : [
    { model: 'RoBERTa (EN)', binaryF1: 86.5, multiclassF1: 75.9 },
    { model: 'ALBERT (ES)', binaryF1: 84.2, multiclassF1: 72.6 },
    { model: 'GPT-4 (EN)', binaryF1: 78.6, multiclassF1: 38 },
    { model: 'GPT-4 (ES)', binaryF1: 75.5, multiclassF1: 38 },
  ]

  // Hope vs Optimism comparison
  const hopeVsOptimism = [
    { aspect: 'Focus', hope: 'Possibility of good outcomes', optimism: 'Expectation that future will be good' },
    { aspect: 'Uncertainty', hope: 'Persists even in extreme difficulty', optimism: 'Typically assumes favorable conditions' },
    { aspect: 'Future Distance', hope: 'Extends to distant futures', optimism: 'Often near-term' },
    { aspect: 'Agency', hope: 'Emphasizes personal determination', optimism: 'May lack pathways to goals' },
    { aspect: 'Context', hope: 'More personally relevant, goal-associated', optimism: 'Context-independent' },
  ]

  // WGSN trends data
  const wgsnData = wgsnOptimismTrends?.length > 0 ? wgsnOptimismTrends : [
    { year: 2024, trend: 'Realistic Optimism' },
    { year: 2026, trend: 'Rational Optimism' },
    { year: 2027, trend: 'Emerging patterns' },
  ]

  // Marketing stats data
  const marketingData = marketingStats.length > 0 ? marketingStats : [
    { metric: 'Goal pursuit increase', value: '+36%', source: 'Nature Human Behaviour, 2021' },
    { metric: 'Decision patience increase', value: '+41%', source: 'Nature Human Behaviour, 2021' },
    { metric: 'Lifetime trust (hopeful brands)', value: '2.3x', source: 'Kantar BrandZ, 2024' },
    { metric: 'Customer advocacy', value: '1.8x', source: 'Kantar BrandZ, 2024' },
    { metric: 'Trust from authentic optimism', value: '+48%', source: 'HBR, 2024' },
    { metric: 'Damage from hyperbolic positivity', value: '-22%', source: 'HBR, 2024' },
  ]

  // Optimism types
  const optimismTypes = optimismMarketing?.optimismTypes || [
    { name: 'Groundless optimism', description: 'Based on irrational beliefs' },
    { name: 'Resourced optimism', description: 'Due to personal circumstances' },
    { name: 'Agentive optimism', description: "From one's effort toward goals" },
    { name: 'Perspectival optimism', description: 'From focusing on positive aspects' },
  ]

  // Hope continuum stages
  const hopeContinuum = [
    { stage: 'Awareness', question: "What's possible?", emotion: 'Curiosity' },
    { stage: 'Engagement', question: 'How can I help?', emotion: 'Inspiration' },
    { stage: 'Conversion', question: 'I believe we can.', emotion: 'Confidence' },
    { stage: 'Loyalty', question: 'We did this together.', emotion: 'Gratitude' },
  ]

  return (
    <div className="space-y-8 p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key="header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <Badge variant="emerald" className="mb-2 bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                HOPE-OPTIMISM SENTIMENT
              </Badge>
              <h1 className="text-3xl font-extrabold gradient-text-emerald">Hope & Optimism Analysis</h1>
              <p className="mt-2 text-slate-400">
                Hope and optimism represent distinct but related positive emotional constructs critical for media monitoring and sentiment tracking
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10">
                <Brain className="h-4 w-4" />
                NLP Models
              </Button>
              <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2">
                <Rocket className="h-4 w-4" />
                UAE Context
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Key Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="PolyHope Dataset"
            value="30,957"
            previousValue={28000}
            icon={<BookOpen className="h-6 w-6" />}
            gradient="emerald"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="RoBERTa F1 Score"
            value="86.5%"
            previousValue={82}
            icon={<Target className="h-6 w-6" />}
            gradient="gold"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Hope Marketing Lift"
            value="+36%"
            previousValue={30}
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="teal"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Brand Trust Multiplier"
            value="2.3x"
            previousValue={2.0}
            icon={<Award className="h-6 w-6" />}
            gradient="indigo"
            status="success"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="nlp">NLP Detection</TabsTrigger>
          <TabsTrigger value="uae">UAE Context</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="kpis">Media KPIs</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel title="Hope vs Optimism: Conceptual Distinctions" description="Key differences between hope and optimism constructs">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Hope Theory (Snyder, 2002)</CardTitle>
                    <CardDescription>A trait-like cognitive construct with two components</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="h-5 w-5 text-emerald-400" />
                          <span className="font-semibold text-emerald-400">Pathways</span>
                        </div>
                        <p className="text-sm text-slate-300">Perceived means to achieve goals</p>
                      </div>
                      <div className="rounded-lg bg-teal-500/10 p-4 border border-teal-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-5 w-5 text-teal-400" />
                          <span className="font-semibold text-teal-400">Agency</span>
                        </div>
                        <p className="text-sm text-slate-300">Belief in one's ability to succeed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Optimism (Scheier & Carver, 1985)</CardTitle>
                    <CardDescription>A generalized tendency to expect favorable experiences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 p-4 bg-gold-500/10 rounded-lg border border-gold-500/30">
                      <Sparkles className="h-6 w-6 text-gold-400" />
                      <p className="text-slate-300">"A generalized tendency to expect favorable experiences about future events"</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Hope vs Optimism Comparison</CardTitle>
                    <CardDescription>Key distinguishing aspects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {hopeVsOptimism.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="grid grid-cols-5 gap-4 items-center p-3 rounded-lg hover:bg-white/5 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="text-sm font-medium text-slate-400">{item.aspect}</span>
                          <div className="col-span-2 p-2 bg-emerald-500/10 rounded border border-emerald-500/20">
                            <p className="text-xs text-emerald-300">{item.hope}</p>
                          </div>
                          <div className="col-span-2 p-2 bg-gold-500/10 rounded border border-gold-500/20">
                            <p className="text-xs text-gold-300">{item.optimism}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Four Types of Optimism</CardTitle>
                    <CardDescription>Classification based on source and nature</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {optimismTypes.map((type, idx) => (
                        <motion.div
                          key={idx}
                          className="p-4 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30"
                          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        >
                          <span className="text-sm font-semibold text-emerald-400">{type.name}</span>
                          <p className="mt-1 text-xs text-slate-400">{type.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* NLP Detection Tab */}
        <TabsContent value="nlp" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel title="Hope Speech Detection in NLP" description="Machine learning approaches for detecting hope speech">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">PolyHope Dataset Distribution</CardTitle>
                    <CardDescription>30,957 annotated tweets (English/Spanish)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <PieChart
                        data={hopeDistributionData}
                        height={280}
                        showLegend={true}
                      />
                      <div className="space-y-3">
                        {hopeDistributionData.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                              <span className="text-sm text-slate-300">{item.name}</span>
                            </div>
                            <span className="text-sm font-semibold text-slate-200">{item.value.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Model Performance Comparison</CardTitle>
                    <CardDescription>Binary and Multiclass Macro F1 scores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={modelPerformanceData}
                      xAxisKey="model"
                      bars={[
                        { dataKey: 'binaryF1', name: 'Binary F1 %', color: CHART_COLORS.emerald },
                        { dataKey: 'multiclassF1', name: 'Multiclass F1 %', color: CHART_COLORS.teal },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { title: 'Binary Classification', value: 'RoBERTa 86.5%', desc: 'English hope detection', icon: Target, color: 'emerald' },
                    { title: 'Multiclass Classification', value: 'RoBERTa 75.9%', desc: '4-category detection', icon: BarChart3, color: 'teal' },
                    { title: 'Sarcasm Detection', value: '>94%', desc: 'Accuracy across languages', icon: MessageSquare, color: 'gold' },
                    { title: 'GPT-4 Baseline', value: '78.6%', desc: 'Fine-tuned beats prompt-based', icon: Brain, color: 'indigo' },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="glass-card border-emerald-500/30">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-${item.color}-500/20 text-${item.color}-400`}>
                              <item.icon className="h-5 w-5" />
                            </div>
                            <span className="text-sm text-slate-400">{item.title}</span>
                          </div>
                          <p className="text-2xl font-bold text-emerald-400">{item.value}</p>
                          <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Hope Speech Categories</CardTitle>
                    <CardDescription>Four distinct categories of hope speech</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {hopeCategories.map((cat, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-emerald-400" />
                            <span className="font-semibold text-slate-200">{cat.name}</span>
                          </div>
                          <p className="text-sm text-slate-400">{cat.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* UAE Context Tab */}
        <TabsContent value="uae" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel title="UAE Context: Hope as National Messaging" description="The Emirates Mars Mission and national hope symbolism">
              <div className="space-y-6">
                <Card className="glass-card border-gold-500/30">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-orange-500 text-navy-950">
                        <Rocket className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Emirates Mars Mission (Al-Amal)</CardTitle>
                        <CardDescription>Hope Probe - A symbol of UAE hope and ambition</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: 'Launch Date', value: 'July 19, 2020' },
                            { label: 'Mars Insertion', value: 'February 9, 2021' },
                            { label: 'Science Start', value: 'May 23, 2021' },
                            { label: 'Design Life', value: '3 Earth years' },
                          ].map((item, idx) => (
                            <div key={idx} className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/20">
                              <p className="text-xs text-slate-400">{item.label}</p>
                              <p className="text-sm font-semibold text-gold-400">{item.value}</p>
                            </div>
                          ))}
                        </div>
                        <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/20">
                          <p className="text-xs text-slate-400 mb-2">Significance</p>
                          <div className="space-y-1 text-sm text-slate-300">
                            <p>5th entity to reach Mars orbit</p>
                            <p>First Arab nation to send interplanetary probe</p>
                            <p>Timed for UAE's 50th Anniversary</p>
                            <p>Designed to inspire Arab youth</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                          <p className="text-xs text-slate-400 mb-2">Scientific Instruments</p>
                          <div className="space-y-2">
                            {[
                              { name: 'EXI', full: 'Emirates eXploration Imager', type: '12 MP visible/UV camera' },
                              { name: 'EMIRS', full: 'Emirates Mars Infrared Spectrometer', type: '6-40 µm FTIR' },
                              { name: 'EMUS', full: 'Emirates Mars Ultraviolet Spectrometer', type: '100-170 nm' },
                            ].map((inst, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <Badge variant="outline" className="text-xs border-gold-500/50 text-gold-400 shrink-0">
                                  {inst.name}
                                </Badge>
                                <div>
                                  <p className="text-xs font-medium text-slate-200">{inst.full}</p>
                                  <p className="text-xs text-slate-500">{inst.type}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/20">
                          <p className="text-xs text-slate-400 mb-2">Quote from Project Manager Omran Sharaf</p>
                          <p className="text-sm italic text-slate-300">"The UAE wanted to send a strong message to the Arab youth and to remind them of the past, that we used to be generators of knowledge."</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-4 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">UAE Leadership Messaging</CardTitle>
                      <CardDescription>National Day speech emphasis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                        <p className="text-sm italic text-slate-300">"The country's 51st National Day is a time to look to the future with hope, optimism and confidence."</p>
                        <p className="mt-2 text-xs text-slate-400">— President Sheikh Mohamed bin Zayed Al Nahyan</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Abu Dhabi Economic Vision 2030</CardTitle>
                      <CardDescription>Optimism-driven development framework</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {[
                          'Open and globally integrated business environment',
                          'Diversified economy beyond oil',
                          'Knowledge-based workforce development',
                          'Innovation-driven growth sectors',
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-400" />
                            <span className="text-sm text-slate-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Marketing Tab */}
        <TabsContent value="marketing" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel title="Optimism in Brand Messaging" description="Hope sells incredibly well in branding">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Marketing Effectiveness Statistics</CardTitle>
                    <CardDescription>Impact of hope-based messaging on consumer behavior</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {marketingData.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors"
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className="text-3xl font-bold text-emerald-400">{stat.value}</p>
                          <p className="mt-1 text-sm text-slate-300">{stat.metric}</p>
                          <p className="mt-1 text-xs text-slate-500">{stat.source}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">B.R.I.G.H.T. Framework for Hope Marketing</CardTitle>
                    <CardDescription>Six principles for effective hope-based messaging</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {brightFramework.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="p-4 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                              {item.letter}
                            </span>
                            <span className="text-sm font-semibold text-emerald-400">{item.principle}</span>
                          </div>
                          <p className="text-xs text-slate-400">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Hope Continuum</CardTitle>
                    <CardDescription>Journey from awareness to loyalty</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform -translate-y-1/2" />
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 relative">
                        {hopeContinuum.map((stage, idx) => (
                          <motion.div
                            key={idx}
                            className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold">
                                {idx + 1}
                              </div>
                              <span className="font-semibold text-slate-200">{stage.stage}</span>
                            </div>
                            <p className="text-xs text-slate-400 italic mb-1">"{stage.question}"</p>
                            <Badge variant="outline" className="text-xs border-emerald-500/50 text-emerald-400">
                              {stage.emotion}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">WGSN Optimism Trends</CardTitle>
                    <CardDescription>Evolution of optimism in social media</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end gap-4">
                      {wgsnData.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex-1 p-4 rounded-lg bg-white/5 border border-white/10 text-center"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ delay: idx * 0.2 }}
                        >
                          <p className="text-2xl font-bold text-emerald-400">{item.year}</p>
                          <p className="mt-2 text-sm text-slate-300">{item.trend}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-gold-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Principle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/30">
                      <p className="text-lg italic text-slate-200">"Hope sells the future—but only when it's real."</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Media KPIs Tab */}
        <TabsContent value="kpis" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel title="Media Monitoring KPIs for Positive Sentiment" description="Key metrics for tracking hope and optimism">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Core Sentiment KPIs</CardTitle>
                    <CardDescription>Standard metrics for positive sentiment tracking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { kpi: 'Net Sentiment Score', formula: 'Positive % - Negative %', target: '> 0 (positive)' },
                        { kpi: 'Positive-Negative Ratio', formula: 'Positive ÷ Negative', target: '> 1.0' },
                        { kpi: 'Hope Index', formula: 'Hope terms ÷ Total mentions', target: 'Benchmark baseline' },
                        { kpi: 'Optimism Score', formula: 'Net sentiment of optimistic language', target: 'Benchmark baseline' },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="p-4 rounded-lg bg-white/5 border border-white/10"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <BarChart3 className="h-4 w-4 text-emerald-400" />
                            <span className="font-semibold text-slate-200">{item.kpi}</span>
                          </div>
                          <p className="text-xs text-slate-400">Formula: {item.formula}</p>
                          <p className="mt-2 text-xs text-emerald-400">Target: {item.target}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Hope-Optimism Keywords</CardTitle>
                    <CardDescription>Query construction for media monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                        <div className="flex items-center gap-2 mb-3">
                          <Heart className="h-4 w-4 text-emerald-400" />
                          <span className="font-semibold text-emerald-400">Hope Terms</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {hopeOptimismKeywords?.hopeTerms?.map((term, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-emerald-500/50 text-emerald-400">
                              {term}
                            </Badge>
                          )) || ['hope', 'hopeful', 'wishing', 'yearning', 'aspiration'].map((term, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-emerald-500/50 text-emerald-400">
                              {term}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/30">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="h-4 w-4 text-gold-400" />
                          <span className="font-semibold text-gold-400">Optimism Terms</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {hopeOptimismKeywords?.optimismTerms?.map((term, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-gold-500/50 text-gold-400">
                              {term}
                            </Badge>
                          )) || ['optimistic', 'positive outlook', 'bright future', 'confidence'].map((term, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-gold-500/50 text-gold-400">
                              {term}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-teal-500/10 border border-teal-500/30">
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="h-4 w-4 text-teal-400" />
                          <span className="font-semibold text-teal-400">UAE-Specific</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {hopeOptimismKeywords?.uaeSpecific?.map((term, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-teal-500/50 text-teal-400">
                              {term}
                            </Badge>
                          )) || ['Al-Amal', 'Hope Probe', 'vision', 'progress', 'future'].map((term, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-teal-500/50 text-teal-400">
                              {term}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="h-4 w-4 text-indigo-400" />
                          <span className="font-semibold text-indigo-400">Tracking Metrics</span>
                        </div>
                        <div className="space-y-1 text-xs text-slate-400">
                          <p>Hope Index</p>
                          <p>Optimism Score</p>
                          <p>Future Orientation</p>
                          <p>Resilience Signals</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE-Specific KPIs</CardTitle>
                    <CardDescription>National benchmarking for hope-optimism sentiment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { kpi: 'National Hope Index', desc: 'Aggregate hope sentiment in UAE-related content', target: 'Baseline + improvement' },
                        { kpi: 'Leadership Sentiment', desc: 'Sentiment toward UAE leadership messaging', target: '> 75% positive' },
                        { kpi: 'Hope Probe Engagement', desc: 'Engagement with Al-Amal/Hope Probe content', target: 'Monitor trends' },
                        { kpi: 'Vision 2030 Sentiment', desc: 'Public sentiment toward economic vision goals', target: 'Track evolution' },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="flex items-center gap-3">
                            <Eye className="h-5 w-5 text-emerald-400" />
                            <div>
                              <p className="font-semibold text-slate-200">{item.kpi}</p>
                              <p className="text-xs text-slate-400">{item.desc}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                            {item.target}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
