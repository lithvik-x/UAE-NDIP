'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Brain,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  Crown,
  Download,
  Earth,
  ExternalLink,
  Eye,
  Flag,
  Flower2,
  Frown,
  Globe,
  Globe2,
  GripVertical,
  Hammer,
  Heart,
  HelpCircle,
  Info,
  Layers,
  Leaf,
  Lightbulb,
  Lock,
  MapPin,
  Medal,
  Meh,
  Menu,
  MessageSquare,
  Minus,
  Moon,
  Palmtree,
  PieChart as LucidePieChart,
  Plus,
  Quote,
  RefreshCw,
  Scale,
  Search,
  Settings,
  Shield,
  ShieldAlert,
  ShoppingBag,
  Sparkles,
  Star,
  Sun,
  Target,
  Telescope,
  ThumbsDown,
  ThumbsUp,
  Tornado,
  Trophy,
  TrendingDown,
  TrendingUp,
  Truck,
  Type,
  Umbrella,
  University,
  Unlink,
  User,
  Users,
  Utensils,
  Verified,
  Watch,
  Zap,
} from 'lucide-react'
import {
  perceptionGapData,
  perceptionGaps,
  freedomScores,
  humanRightsStats,
  womenRightsIndicators,
  migrantWorkerStats,
  surveillanceStats,
  politicalCivilLiberties,
  economicIndicators,
  foreignPolicyFailures,
  sourceCredibilityMatrix,
  relevanceMatrix,
  summaryMetrics,
} from '@/lib/data/perception/perception-gap-data'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

// Severity badge component
function SeverityBadge({ severity }: { severity: string }) {
  const variants: Record<string, string> = {
    Critical: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    High: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    Medium: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
  }
  return (
    <Badge className={variants[severity] || variants.Medium}>
      {severity}
    </Badge>
  )
}

// Trend badge component
function TrendBadge({ trend }: { trend: string }) {
  const variants: Record<string, string> = {
    'Stable Negative': 'bg-slate-500/10 text-slate-600',
    'Worsening': 'bg-rose-500/10 text-rose-600',
    'Worsening (2026)': 'bg-rose-500/10 text-rose-600',
    'Slow Improvement': 'bg-emerald-500/10 text-emerald-600',
    'Mixed': 'bg-amber-500/10 text-amber-600',
  }
  return (
    <Badge className={variants[trend] || variants['Stable Negative']}>
      {trend}
    </Badge>
  )
}

// Gap card component
function GapCard({
  gap,
  isExpanded,
  onToggle,
}: {
  gap: typeof perceptionGaps[0]
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="glass-card overflow-hidden"
    >
      <div
        className="flex cursor-pointer items-center justify-between p-6 hover:bg-slate-50/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 text-white">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-slate-900">{gap.name}</h3>
              <SeverityBadge severity={gap.severity} />
              <TrendBadge trend={gap.trend} />
            </div>
            <p className="mt-1 text-sm text-slate-600">{gap.selfPresentation}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-slate-400" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-slate-200"
          >
            <div className="space-y-4 p-6">
              {/* Key Findings */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <AlertTriangle className="h-4 w-4 text-rose-500" />
                  Key Findings
                </h4>
                <ul className="space-y-2">
                  {gap.keyFindings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Circle className="mt-1.5 h-1.5 w-1.5 shrink-0 fill-rose-500" />
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Quotes */}
              {gap.keyQuotes.length > 0 && (
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Quote className="h-4 w-4 text-amber-500" />
                    Key Quotes
                  </h4>
                  <div className="space-y-2">
                    {gap.keyQuotes.map((quote, i) => (
                      <div
                        key={i}
                        className="rounded-lg border-l-4 border-amber-400 bg-amber-50/50 p-3 text-sm italic text-slate-700"
                      >
                        {quote}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sentiment & Credibility */}
              <div className="flex gap-4 pt-2">
                <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5">
                  <ThumbsDown className="h-4 w-4 text-rose-500" />
                  <span className="text-sm font-medium text-slate-700">{gap.sentiment}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5">
                  <Shield className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-medium text-slate-700">Credibility: {gap.credibility}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function PerceptionGapPage() {
  const [expandedGaps, setExpandedGaps] = useState<Record<number, boolean>>({})
  const [selectedGap, setSelectedGap] = useState<number | null>(null)

  const toggleGap = (id: number) => {
    setExpandedGaps((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // Chart data
  const severityDistribution = [
    { name: 'Critical', value: 7, color: CHART_COLORS.rose },
    { name: 'High', value: 3, color: CHART_COLORS.warning },
  ]

  const trendDistribution = [
    { name: 'Worsening', value: 6, color: CHART_COLORS.rose },
    { name: 'Stable Negative', value: 4, color: CHART_COLORS.platinum },
    { name: 'Slow Improvement', value: 2, color: CHART_COLORS.emerald },
    { name: 'Mixed', value: 1, color: CHART_COLORS.warning },
  ]

  const freedomScoreData = freedomScores.map((item) => ({
    name: item.index,
    score: item.score,
    max: item.max,
  }))

  const politicalRightsData = politicalCivilLiberties.map((item) => ({
    name: item.category,
    score: item.score,
    max: item.max,
  }))

  const relevanceChartData = relevanceMatrix.map((item) => ({
    name: item.gapCategory,
    severity: item.severity === 'Critical' ? 3 : item.severity === 'High' ? 2 : 1,
    trend: item.trend.includes('Worsening') ? 3 : item.trend.includes('Negative') ? 2 : 1,
  }))

  const selectedGapData = selectedGap !== null ? perceptionGaps[selectedGap] : null

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Perception Gap Analysis</h1>
          <p className="mt-2 text-slate-600">
            Systematic identification of gaps between UAE self-presentation and external reality
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <Sparkles className="h-4 w-4" />
            Generate Analysis
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Gap Categories"
          value="10"
          previousValue={8}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Critical Severity"
          value="7"
          previousValue={5}
          icon={<ShieldAlert className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Worsening Trends"
          value="6"
          previousValue={3}
          icon={<TrendingDown className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Avg Sentiment Score"
          value="18.5"
          previousValue={25.2}
          icon={<ThumbsDown className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Gap Severity Distribution</CardTitle>
            <CardDescription>Critical vs High severity gaps</CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart
              data={severityDistribution}
              donut={true}
              height={220}
              showLegend={true}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Trend Distribution</CardTitle>
            <CardDescription>Overall trend patterns across gaps</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={trendDistribution}
              xAxisKey="name"
              bars={[
                { dataKey: 'value', name: 'Count', color: CHART_COLORS.indigo },
              ]}
              height={220}
              showGrid={true}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Freedom Scores (UAE)</CardTitle>
            <CardDescription>Freedom House 2024 ratings</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={freedomScoreData.slice(0, 5)}
              xAxisKey="name"
              bars={[
                { dataKey: 'score', name: 'Score', color: CHART_COLORS.rose },
              ]}
              height={220}
              showGrid={true}
            />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="gaps" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="gaps">All Gaps</TabsTrigger>
          <TabsTrigger value="human-rights">Human Rights</TabsTrigger>
          <TabsTrigger value="women">Women&apos;s Rights</TabsTrigger>
          <TabsTrigger value="migrant">Migrant Workers</TabsTrigger>
          <TabsTrigger value="climate">Climate</TabsTrigger>
          <TabsTrigger value="media">Media Freedom</TabsTrigger>
          <TabsTrigger value="data">Data Tables</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* All Gaps Tab */}
        <TabsContent value="gaps" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Gap List */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Perception Gap Categories</h3>
              {perceptionGaps.map((gap) => (
                <GapCard
                  key={gap.id}
                  gap={gap}
                  isExpanded={expandedGaps[gap.id] || false}
                  onToggle={() => toggleGap(gap.id)}
                />
              ))}
            </div>

            {/* Selected Gap Detail */}
            <div>
              {selectedGapData ? (
                <Card className="glass-card sticky top-8">
                  <CardHeader>
                    <CardTitle className="text-lg">{selectedGapData.name}</CardTitle>
                    <CardDescription>Detailed analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-700 mb-2">Self-Presentation</div>
                      <p className="text-sm text-slate-600">{selectedGapData.selfPresentation}</p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-700 mb-2">Key Findings ({selectedGapData.keyFindings.length})</div>
                      <ScrollArea className="h-64">
                        <ul className="space-y-2 pr-4">
                          {selectedGapData.keyFindings.map((finding, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                              <Circle className="mt-1.5 h-1.5 w-1.5 shrink-0 fill-rose-500" />
                              {finding}
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                    </div>
                    {selectedGapData.keyQuotes.length > 0 && (
                      <div>
                        <div className="text-sm font-semibold text-slate-700 mb-2">Key Quotes</div>
                        <div className="space-y-2">
                          {selectedGapData.keyQuotes.map((quote, i) => (
                            <div
                              key={i}
                              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/50 p-3 text-sm italic text-slate-700"
                            >
                              {quote}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="flex gap-2 pt-2">
                      <SeverityBadge severity={selectedGapData.severity} />
                      <TrendBadge trend={selectedGapData.trend} />
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="glass-card sticky top-8">
                  <CardContent className="flex h-64 items-center justify-center">
                    <div className="text-center">
                      <AlertTriangle className="mx-auto h-12 w-12 text-slate-300" />
                      <p className="mt-4 text-sm text-slate-500">Select a gap category to view details</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Human Rights Tab */}
        <TabsContent value="human-rights" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Human Rights Violations</CardTitle>
                <CardDescription>Documented abuses vs UAE narrative</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4 pr-4">
                    {humanRightsStats.map((stat, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                        <div>
                          <div className="text-sm font-medium text-slate-900">{stat.metric}</div>
                          <div className="text-xs text-slate-500">{stat.source} {stat.year}</div>
                        </div>
                        <div className="text-lg font-bold text-rose-600">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Political Prisoners</CardTitle>
                <CardDescription>Notable cases of detained activists</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {perceptionGaps[0].keyFindings.slice(0, 5).map((finding, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg bg-rose-50/50 p-3">
                      <User className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{finding}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Political Rights & Civil Liberties (Freedom House 2024)</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={politicalRightsData}
                xAxisKey="name"
                bars={[
                  { dataKey: 'score', name: 'Score', color: CHART_COLORS.rose },
                  { dataKey: 'max', name: 'Max', color: CHART_COLORS.platinum },
                ]}
                height={300}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Women's Rights Tab */}
        <TabsContent value="women" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Women&apos;s Rights Indicators</CardTitle>
              <CardDescription>Progress vs promised reforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {womenRightsIndicators.map((indicator, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                      {indicator.value === 'Yes' || indicator.value.includes('2004') || indicator.value.includes('2020') ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      ) : indicator.value === 'No' ? (
                        <AlertTriangle className="h-5 w-5 text-rose-500" />
                      ) : (
                        <Circle className="h-5 w-5 text-amber-500" />
                      )}
                      <div>
                        <div className="text-sm font-medium text-slate-900">{indicator.metric}</div>
                        <div className="text-xs text-slate-500">{indicator.source}</div>
                      </div>
                    </div>
                    <Badge variant={indicator.value === 'No' ? 'destructive' : indicator.value === 'Yes' ? 'success' : 'outline'}>
                      {indicator.value}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Key Women's Rights Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64">
                <div className="space-y-3 pr-4">
                  {perceptionGaps[1].keyFindings.map((finding, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-lg bg-rose-50/50 p-3">
                      <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{finding}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Migrant Workers Tab */}
        <TabsContent value="migrant" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Migrant Worker Statistics</CardTitle>
                <CardDescription>Scale of the kafala system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {migrantWorkerStats.slice(0, 6).map((stat, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">{stat.metric}</span>
                      <span className="text-lg font-bold text-amber-600">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Modern Slavery Data</CardTitle>
                <CardDescription>Walk Free Global Slavery Index 2023</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-extrabold text-rose-600">132,000</div>
                  <div className="text-sm text-slate-600 mt-2">People in modern slavery</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center rounded-lg bg-slate-50 p-3">
                    <div className="text-2xl font-bold text-amber-600">13.4</div>
                    <div className="text-xs text-slate-500">Per 1,000</div>
                  </div>
                  <div className="text-center rounded-lg bg-slate-50 p-3">
                    <div className="text-2xl font-bold text-amber-600">50/100</div>
                    <div className="text-xs text-slate-500">Gov Response</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Nationality Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={[
                  { name: 'Indian', value: 3500000 },
                  { name: 'Bangladeshi', value: 1000000 },
                  { name: 'Pakistani', value: 950000 },
                  { name: 'Egyptian', value: 710000 },
                  { name: 'Filipino', value: 470000 },
                ]}
                xAxisKey="name"
                bars={[
                  { dataKey: 'value', name: 'Workers', color: CHART_COLORS.warning },
                ]}
                height={250}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Climate Tab */}
        <TabsContent value="climate" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Climate Gap Analysis</CardTitle>
              <CardDescription>COP28 hosting vs reality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="space-y-3">
                  {perceptionGaps[3].keyFindings.map((finding, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-lg bg-emerald-50/50 p-3">
                      <AlertTriangle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{finding}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-700">ADNOC Oil Production Target</div>
                    <div className="mt-2 text-3xl font-extrabold text-emerald-600">5M bpd</div>
                    <div className="text-xs text-slate-500">by 2027 (increasing)</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-700">Loss & Damage Fund</div>
                    <div className="mt-2 text-3xl font-extrabold text-rose-600">$429M</div>
                    <div className="text-xs text-slate-500">vs $400B annual need</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-700">COP28 President Role</div>
                    <div className="mt-2 text-lg font-bold text-rose-600">Oil CEO</div>
                    <div className="text-xs text-slate-500">First in history</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Media Freedom Tab */}
        <TabsContent value="media" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Media Freedom Scores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {surveillanceStats.slice(0, 6).map((stat, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                    <span className="text-sm text-slate-600">{stat.metric}</span>
                    <Badge variant="destructive">{stat.value}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Key Restrictions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 rounded-lg bg-rose-50/50 p-3">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    <span className="text-sm text-slate-700">WhatsApp, Viber, Discord, Skype blocked</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-rose-50/50 p-3">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    <span className="text-sm text-slate-700">883 websites blocked (Q1 2022)</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-rose-50/50 p-3">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    <span className="text-sm text-slate-700">51 LGBT+ URLs blocked</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-rose-50/50 p-3">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    <span className="text-sm text-slate-700">Up to 91% fake MBZ Twitter accounts</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-rose-50/50 p-3">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    <span className="text-sm text-slate-700">RSF Press Freedom: 160/180 globally</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Data Tables Tab */}
        <TabsContent value="data" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Economic Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 lg:grid-cols-2">
                {economicIndicators.map((indicator, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                    <span className="text-sm text-slate-600">{indicator.metric}</span>
                    <span className="text-lg font-bold text-indigo-600">{indicator.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Foreign Policy Failures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {foreignPolicyFailures.map((failure, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg bg-amber-50/50 p-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">{failure.policy}</div>
                      <div className="text-xs text-slate-600">{failure.outcome}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">2026 Iranian Strikes Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 lg:grid-cols-3">
                <div className="text-center rounded-lg bg-rose-50 p-4">
                  <div className="text-3xl font-extrabold text-rose-600">13</div>
                  <div className="text-sm text-slate-600">Killed</div>
                </div>
                <div className="text-center rounded-lg bg-rose-50 p-4">
                  <div className="text-3xl font-extrabold text-rose-600">224</div>
                  <div className="text-sm text-slate-600">Injured</div>
                </div>
                <div className="text-center rounded-lg bg-amber-50 p-4">
                  <div className="text-3xl font-extrabold text-amber-600">$120B+</div>
                  <div className="text-sm text-slate-600">Economic Damage</div>
                </div>
                <div className="text-center rounded-lg bg-amber-50 p-4">
                  <div className="text-3xl font-extrabold text-amber-600">500-800K</div>
                  <div className="text-sm text-slate-600">bpd Oil Drop</div>
                </div>
                <div className="text-center rounded-lg bg-amber-50 p-4">
                  <div className="text-3xl font-extrabold text-amber-600">537</div>
                  <div className="text-sm text-slate-600">Ballistic Missiles</div>
                </div>
                <div className="text-center rounded-lg bg-slate-50 p-4">
                  <div className="text-3xl font-extrabold text-slate-600">~1yr</div>
                  <div className="text-sm text-slate-600">EGA Recovery</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
              <CardDescription>Primary sources for perception gap analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sourceCredibilityMatrix.map((source, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-emerald-500" />
                      <div>
                        <div className="text-sm font-medium text-slate-900">{source.source}</div>
                        <div className="text-xs text-slate-500">{source.type} • {source.uaeFocus} focus</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={source.credibility === 'High' ? 'success' : 'outline'}>
                        {source.credibility}
                      </Badge>
                      <Badge variant="outline">{source.refreshRate}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">UAE Relevance Assessment Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {relevanceMatrix.map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                    <div>
                      <div className="text-sm font-medium text-slate-900">{item.gapCategory}</div>
                      <div className="text-xs text-slate-500">{item.uaeNarrative}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <SeverityBadge severity={item.severity} />
                      <TrendBadge trend={item.trend} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
