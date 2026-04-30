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
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Brain,
  Building2,
  CheckCircle2,
  ChevronDown,
  Circle,
  Crown,
  Download,
  Earth,
  ExternalLink,
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
  Landmark,
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
  User,
  Users,
  Utensils,
  Verified,
  Watch,
  Zap,
} from 'lucide-react'
import {
  competitiveBenchmarkingData,
  uaeGlobalRankings,
  uaeIndicatorPerformance,
  uaeVsSaudi,
  uaeVsQatar,
  aviationRivalry,
  uaeVsOman,
  uaeVsBahrain,
  uaeVsKuwait,
  uaeVsIsrael,
  uaeVsTurkey,
  uaeVsEgypt,
  uaeVsSingapore,
  uaeVsSwitzerland,
  uaeVsHongKong,
  uaeVsMonaco,
  dubaiVsLondon,
  dubaiVsNewYork,
  aviationSector,
  wealthManagementSector,
  gccEconomicOverview,
  tourismSector,
  competitorIntelligenceCards,
  uaeRankingsOverTime,
  gccComparisonMatrix,
  middleEastMilitaryRankings,
  uaeCompetitiveAdvantages,
  uaeCompetitiveVulnerabilities,
  worldRankingsSummary,
  sentimentAnalysisByDimension,
} from '@/lib/data/perception/competitive-benchmarking-data'

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

// Competitor Card Component
function CompetitorCard({
  name,
  data,
  uaeAdvantage,
  icon: Icon,
  color,
}: {
  name: string
  data: Array<{ metric: string; uae: string | null; competitor: string | null }>
  uaeAdvantage: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div layout>
      <Card
        className="glass-card cursor-pointer hover:shadow-glass-lg transition-all duration-300 border-2 hover:border-indigo-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold">{name}</CardTitle>
                <CardDescription className="mt-1">
                  <Badge variant="success" className="text-xs">{uaeAdvantage}</Badge>
                </CardDescription>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-full bg-slate-100"
            >
              <ChevronDown className="h-5 w-5 text-slate-600" />
            </motion.div>
          </div>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="pt-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-medium text-slate-500">Metric</th>
                        <th className="text-right p-2 font-medium text-emerald-600">UAE</th>
                        <th className="text-right p-2 font-medium text-slate-600">Competitor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.slice(0, 8).map((row, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-2 text-slate-600">{row.metric}</td>
                          <td className="p-2 text-right font-semibold text-emerald-600">
                            {row.uae || '—'}
                          </td>
                          <td className="p-2 text-right text-slate-600">
                            {row.competitor || '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

// Ranking Card Component
function RankingCard({
  ranking,
}: {
  ranking: typeof uaeGlobalRankings[0]
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-white/50 border border-slate-100">
      <div className="flex-1">
        <div className="font-medium text-slate-900 text-sm">{ranking.index}</div>
        <div className="text-xs text-slate-500">{ranking.source} | {ranking.year}</div>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold text-emerald-600">{ranking.ranking}</div>
        {ranking.score && (
          <div className="text-xs text-slate-500">{ranking.score}</div>
        )}
      </div>
    </div>
  )
}

export default function CompetitiveBenchmarkingPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedCompetitor, setSelectedCompetitor] = useState<string | null>(null)

  // Chart data for GCC comparison
  const gccGdpData = gccEconomicOverview.map((c) => ({
    name: c.country,
    gdp: c.gdpNominal ? parseFloat(c.gdpNominal.replace(/[^0-9.-]/g, '')) || 0 : 0,
  })).filter((c) => c.gdp > 0)

  const gccGrowthData = gccEconomicOverview.map((c) => ({
    name: c.country,
    growth: c.imf2026Growth ? parseFloat(c.imf2026Growth.replace(/[^0-9.-]/g, '')) || 0 : 0,
  }))

  const meMilitaryData = middleEastMilitaryRankings.map((c) => ({
    name: c.country,
    powerIndex: parseFloat(c.powerIndex) || 0,
    rank: c.meRank,
  }))

  const uaeAdvantagesData = uaeCompetitiveAdvantages.map((a) => ({
    domain: a.advantageDomain,
    margin: parseInt(a.uaeAdvantageMargin.replace(/[^0-9]/g, '')) || 0,
  })).filter((a) => a.margin > 0)

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Competitive Benchmarking</h1>
          <p className="mt-2 text-slate-600">
            UAE competitive positioning vs. regional and global peers across economic, military, and social dimensions
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <BarChart3 className="h-4 w-4" />
            Full Analysis
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Global Rankings"
          value="9"
          icon={<Trophy className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Competitors Analyzed"
          value="12"
          icon={<Users className="h-6 w-6" />}
          gradient="teal"
        />
        <MetricCard
          title="Data Points"
          value="500+"
          icon={<Target className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Sources Verified"
          value="45+"
          icon={<Shield className="h-6 w-6" />}
          gradient="gold"
        />
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="competitors">Competitors</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
          <TabsTrigger value="military">Military</TabsTrigger>
          <TabsTrigger value="advantages">Advantages</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* GCC GDP Comparison */}
            <GlassPanel title="GCC GDP Comparison" description="Nominal GDP by country">
              <div className="h-64">
                <BarChart
                  data={gccGdpData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'gdp', name: 'GDP ($B)', color: CHART_COLORS.emerald }]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </GlassPanel>

            {/* Sentiment by Dimension */}
            <GlassPanel title="UAE Sentiment by Dimension" description="Perception strength by sector">
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {sentimentAnalysisByDimension.slice(0, 8).map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-50/50">
                    <span className="text-sm font-medium text-slate-700">{item.dimension}</span>
                    <Badge
                      variant={
                        item.uaeSentiment.includes('Positive') || item.uaeSentiment.includes('Strongly')
                          ? 'success'
                          : item.uaeSentiment.includes('Negative')
                          ? 'destructive'
                          : 'warning'
                      }
                    >
                      {item.uaeSentiment}
                    </Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Key Findings */}
          <GlassPanel title="Headline Finding" description="Key competitive positioning insight">
            <div className="p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200">
              <p className="text-lg font-medium text-slate-800">
                {competitiveBenchmarkingData.executiveSummary.headlineFinding}
              </p>
            </div>
          </GlassPanel>

          {/* UAE Rankings Over Time */}
          <GlassPanel title="UAE Rankings Over Time" description="Performance across key indices">
            <div className="h-80">
              <LineChart
                data={uaeRankingsOverTime.filter((r) => r['2025'] || r['2026']).map((r) => ({
                  index: r.index.split(' ')[0],
                  '2023': r[2023 as keyof typeof r] ? 1 : 0,
                  '2025': r[2025 as keyof typeof r] ? (typeof r[2025 as keyof typeof r] === 'string' ? (r[2025 as keyof typeof r] as string).includes('1st') ? 1 : r[2025 as keyof typeof r] === '5th' ? 0.8 : 0.5 : 0.5) : 0,
                  '2026': r[2026 as keyof typeof r] ? (typeof r[2026 as keyof typeof r] === 'string' ? (r[2026 as keyof typeof r] as string).includes('1st') ? 1 : (r[2026 as keyof typeof r] as string).includes('7th') ? 0.7 : 0.6 : 0.6) : 0,
                }))}
                xAxisKey="index"
                lines={[
                  { dataKey: '2023', name: '2023', color: CHART_COLORS.platinum },
                  { dataKey: '2025', name: '2025', color: CHART_COLORS.gold },
                  { dataKey: '2026', name: '2026', color: CHART_COLORS.emerald },
                ]}
                height={280}
                showGrid={true}
              />
            </div>
          </GlassPanel>

          {/* World Rankings Summary */}
          <GlassPanel title="World Rankings Summary — UAE vs Peer Nations" description="Cross-country comparison">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Index</th>
                    <th className="text-center p-2">UAE</th>
                    <th className="text-center p-2">Saudi</th>
                    <th className="text-center p-2">Qatar</th>
                    <th className="text-center p-2">Turkey</th>
                    <th className="text-center p-2">Israel</th>
                    <th className="text-center p-2">Singapore</th>
                    <th className="text-center p-2">Switzerland</th>
                  </tr>
                </thead>
                <tbody>
                  {worldRankingsSummary.map((row, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-2 font-medium">{row.index}</td>
                      <td className="p-2 text-center">
                        <span className="font-bold text-emerald-600">{row.uae || '—'}</span>
                      </td>
                      <td className="p-2 text-center text-slate-600">{row.saudi || '—'}</td>
                      <td className="p-2 text-center text-slate-600">{row.qatar || '—'}</td>
                      <td className="p-2 text-center text-slate-600">{row.turkey || '—'}</td>
                      <td className="p-2 text-center text-slate-600">{row.israel || '—'}</td>
                      <td className="p-2 text-center text-slate-600">{row.singapore || '—'}</td>
                      <td className="p-2 text-center text-slate-600">{row.switzerland || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Rankings Tab */}
        <TabsContent value="rankings" className="space-y-6">
          <GlassPanel title="UAE Global Rankings Index Card" description="Current standings across major indices">
            <div className="grid gap-3 md:grid-cols-2">
              {uaeGlobalRankings.map((ranking, idx) => (
                <RankingCard key={idx} ranking={ranking} />
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="UAE Indicator Performance — IMD 2025 Breakdown" description="Detailed IMD rankings">
            <div className="grid gap-3 md:grid-cols-2">
              {uaeIndicatorPerformance.map((indicator, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/50 border border-slate-100"
                >
                  <span className="text-sm font-medium text-slate-700">{indicator.indicator}</span>
                  <div className="text-right">
                    <span className="font-bold text-emerald-600">{indicator.uaeRank}</span>
                    {indicator.notes && (
                      <div className="text-xs text-slate-500">{indicator.notes}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Rankings Chart */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="UAE vs Switzerland: Tax Efficiency" description="Personal tax comparison">
              <div className="h-64">
                <BarChart
                  data={[
                    { tax: 'Income', uae: 0, switzerland: 40 },
                    { tax: 'Corporate', uae: 9, switzerland: 17 },
                    { tax: 'Capital Gains', uae: 0, switzerland: 5 },
                    { tax: 'Wealth', uae: 0, switzerland: 20 },
                    { tax: 'Inheritance', uae: 0, switzerland: 30 },
                  ]}
                  xAxisKey="tax"
                  bars={[
                    { dataKey: 'uae', name: 'UAE', color: CHART_COLORS.emerald },
                    { dataKey: 'switzerland', name: 'Switzerland', color: CHART_COLORS.platinum },
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </GlassPanel>

            <GlassPanel title="UAE vs Singapore: Cost of Living" description="Monthly expenses comparison">
              <div className="h-64">
                <BarChart
                  data={[
                    { cost: 'Monthly', uae: 3500, singapore: 4830 },
                    { cost: 'Rent 1BR', uae: 2150, singapore: 2850 },
                  ]}
                  xAxisKey="cost"
                  bars={[
                    { dataKey: 'uae', name: 'UAE ($)', color: CHART_COLORS.emerald },
                    { dataKey: 'singapore', name: 'Singapore ($)', color: CHART_COLORS.info },
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* Competitors Tab */}
        <TabsContent value="competitors" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CompetitorCard
              name="UAE vs Saudi Arabia"
              data={uaeVsSaudi.economicOverview.map((d) => ({ metric: d.metric, uae: d.uae, competitor: d.saudi }))}
              uaeAdvantage="Per-capita income, diversification"
              icon={Crown}
              color="bg-amber-100 text-amber-600"
            />
            <CompetitorCard
              name="UAE vs Qatar"
              data={uaeVsQatar.map((d) => ({ metric: d.metric, uae: d.uae, competitor: d.qatar }))}
              uaeAdvantage="Scale, exports, diversification"
              icon={Globe}
              color="bg-purple-100 text-purple-600"
            />
            <CompetitorCard
              name="UAE vs Oman"
              data={uaeVsOman.map((d) => ({ metric: d.metric, uae: d.uae, competitor: d.oman }))}
              uaeAdvantage="Scale, ratings, HDI"
              icon={MapPin}
              color="bg-emerald-100 text-emerald-600"
            />
            <CompetitorCard
              name="UAE vs Israel"
              data={uaeVsIsrael.map((d) => ({ metric: d.metric, uae: d.uae, competitor: d.israel }))}
              uaeAdvantage="Scale, market access, diversification"
              icon={Star}
              color="bg-blue-100 text-blue-600"
            />
            <CompetitorCard
              name="UAE vs Turkey"
              data={uaeVsTurkey.map((d) => ({ metric: d.metric, uae: d.uae, competitor: d.turkey }))}
              uaeAdvantage="Business environment, tax efficiency"
              icon={Shield}
              color="bg-red-100 text-red-600"
            />
            <CompetitorCard
              name="UAE vs Singapore"
              data={uaeVsSingapore.map((d) => ({ metric: d.metric, uae: d.uae, competitor: d.singapore }))}
              uaeAdvantage="Tax efficiency, visa accessibility"
              icon={Building2}
              color="bg-cyan-100 text-cyan-600"
            />
            <CompetitorCard
              name="UAE vs Switzerland"
              data={uaeVsSwitzerland.map((d) => ({ metric: d.metric, uae: d.uae, competitor: d.switzerland }))}
              uaeAdvantage="0% tax, no restrictions"
              icon={Lock}
              color="bg-slate-100 text-slate-600"
            />
            <CompetitorCard
              name="UAE vs Egypt"
              data={uaeVsEgypt.map((d) => ({ metric: d.metric, uae: d.uae, competitor: d.egypt }))}
              uaeAdvantage="GDP, diversification, tourism"
              icon={Landmark}
              color="bg-amber-100 text-amber-600"
            />
            <CompetitorCard
              name="UAE vs Hong Kong"
              data={uaeVsHongKong.map((d) => ({ metric: d.metric, uae: d.uae, competitor: d.hongKong }))}
              uaeAdvantage="Rising star, ME/Africa focus"
              icon={Globe2}
              color="bg-rose-100 text-rose-600"
            />
          </div>

          {/* UAE vs Saudi Detail */}
          <GlassPanel title="UAE vs Saudi Arabia: Full Comparison" description="Comprehensive economic, demographic, and military data">
            <Tabs defaultValue="economic">
              <TabsList>
                <TabsTrigger value="economic">Economic</TabsTrigger>
                <TabsTrigger value="demographics">Demographics</TabsTrigger>
                <TabsTrigger value="military">Military</TabsTrigger>
                <TabsTrigger value="political">Political</TabsTrigger>
              </TabsList>

              <TabsContent value="economic" className="mt-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Metric</th>
                        <th className="text-right p-2 text-emerald-600">UAE</th>
                        <th className="text-right p-2">Saudi Arabia</th>
                        <th className="text-left p-2">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {uaeVsSaudi.economicOverview.map((row, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-2 font-medium">{row.metric}</td>
                          <td className="p-2 text-right font-semibold text-emerald-600">{row.uae}</td>
                          <td className="p-2 text-right">{row.saudi}</td>
                          <td className="p-2 text-slate-500 text-xs">{row.source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="demographics" className="mt-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Metric</th>
                        <th className="text-right p-2 text-emerald-600">UAE</th>
                        <th className="text-right p-2">Saudi Arabia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {uaeVsSaudi.demographics.map((row, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-2 font-medium">{row.metric}</td>
                          <td className="p-2 text-right font-semibold text-emerald-600">{row.uae}</td>
                          <td className="p-2 text-right">{row.saudi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="military" className="mt-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Metric</th>
                        <th className="text-right p-2 text-emerald-600">UAE</th>
                        <th className="text-right p-2">Saudi Arabia</th>
                        <th className="text-left p-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {uaeVsSaudi.military.map((row, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-2 font-medium">{row.metric}</td>
                          <td className="p-2 text-right font-semibold text-emerald-600">{row.uae}</td>
                          <td className="p-2 text-right">{row.saudi}</td>
                          <td className="p-2 text-slate-500 text-xs">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="political" className="mt-4">
                <div className="space-y-4">
                  {uaeVsSaudi.political.map((row, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-3 rounded-lg bg-slate-50/50">
                      <div className="flex-1">
                        <div className="font-medium text-slate-700">{row.metric}</div>
                        <div className="text-sm text-slate-500 mt-1">{row.uae} vs {row.saudi}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </GlassPanel>

          {/* Competitor Intelligence Cards */}
          <GlassPanel title="Competitor Intelligence Cards" description="Strengths, weaknesses, and UAE edge">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(competitorIntelligenceCards).map(([key, card]) => (
                <Card key={key} className="glass-card border-l-4 border-l-emerald-400">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-emerald-600 mb-1">STRENGTHS</div>
                      <div className="text-sm text-slate-600">{card.strengths}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-rose-600 mb-1">WEAKNESSES</div>
                      <div className="text-sm text-slate-600">{card.weaknesses}</div>
                    </div>
                    {card.uaeCompetitiveEdge && (
                      <div>
                        <div className="text-xs font-semibold text-blue-600 mb-1">UAE EDGE</div>
                        <div className="text-sm text-slate-600">{card.uaeCompetitiveEdge}</div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sectors Tab */}
        <TabsContent value="sectors" className="space-y-6">
          {/* Aviation */}
          <GlassPanel title="Aviation Sector: Emirates vs Qatar Airways vs Etihad" description="2025-2026 comparison">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Metric</th>
                    <th className="text-center p-2 text-emerald-600">Emirates</th>
                    <th className="text-center p-2 text-blue-600">Qatar Airways</th>
                    <th className="text-center p-2 text-amber-600">Etihad</th>
                    <th className="text-left p-2">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {aviationSector.map((row, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-2 font-medium">{row.metric}</td>
                      <td className="p-2 text-center">{row.emirates || '—'}</td>
                      <td className="p-2 text-center">{row.qatarAirways || '—'}</td>
                      <td className="p-2 text-center">{row.etihad || '—'}</td>
                      <td className="p-2 text-slate-500 text-xs">{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>

          {/* Wealth Management */}
          <GlassPanel title="Wealth Management: UAE vs Switzerland vs Monaco vs Singapore" description="Tax and regulatory comparison">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Feature</th>
                    <th className="text-center p-2 text-emerald-600">UAE</th>
                    <th className="text-center p-2">Switzerland</th>
                    <th className="text-center p-2">Monaco</th>
                    <th className="text-center p-2">Singapore</th>
                  </tr>
                </thead>
                <tbody>
                  {wealthManagementSector.map((row, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-2 font-medium">{row.feature}</td>
                      <td className="p-2 text-center font-semibold text-emerald-600">{row.uae}</td>
                      <td className="p-2 text-center">{row.switzerland}</td>
                      <td className="p-2 text-center">{row.monaco}</td>
                      <td className="p-2 text-center">{row.singapore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>

          {/* GCC Economic Overview */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="GCC Economic Overview 2026" description="Key economic indicators">
              <div className="h-64">
                <BarChart
                  data={gccGrowthData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'growth', name: 'IMF 2026 Growth (%)', color: CHART_COLORS.info }]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </GlassPanel>

            <GlassPanel title="Tourism Sector Performance" description="UAE tourism records">
              <div className="grid gap-3">
                {tourismSector.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-50/50">
                    <span className="text-sm text-slate-600">{item.metric}</span>
                    <Badge variant="success" className="text-xs">{item.value.split(' ')[0]}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Dubai Comparisons */}
          <GlassPanel title="City Hubs: Dubai Comparisons" description="Dubai vs London and New York">
            <Tabs defaultValue="london">
              <TabsList>
                <TabsTrigger value="london">Dubai vs London</TabsTrigger>
                <TabsTrigger value="newyork">Dubai vs New York</TabsTrigger>
              </TabsList>

              <TabsContent value="london" className="mt-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Metric</th>
                        <th className="text-right p-2 text-emerald-600">Dubai</th>
                        <th className="text-right p-2">London</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dubaiVsLondon.map((row, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-2 font-medium">{row.metric}</td>
                          <td className="p-2 text-right font-semibold text-emerald-600">{row.dubai}</td>
                          <td className="p-2 text-right">{row.london || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="newyork" className="mt-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Metric</th>
                        <th className="text-right p-2 text-emerald-600">Dubai</th>
                        <th className="text-right p-2">New York</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dubaiVsNewYork.map((row, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-2 font-medium">{row.metric}</td>
                          <td className="p-2 text-right font-semibold text-emerald-600">{row.dubai}</td>
                          <td className="p-2 text-right">{row.newYork || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </GlassPanel>
        </TabsContent>

        {/* Military Tab */}
        <TabsContent value="military" className="space-y-6">
          <GlassPanel title="Middle East Military Rankings (GFP 2026)" description="Power Index by country">
            <div className="h-80">
              <BarChart
                data={meMilitaryData}
                xAxisKey="name"
                bars={[{ dataKey: 'powerIndex', name: 'Power Index (lower = stronger)', color: CHART_COLORS.rose }]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>

          <GlassPanel title="UAE vs Saudi Arabia: Military Comparison" description="GFP 2026 data">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-700">UAE Advantages</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 rounded bg-emerald-50/50">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Naval fleet: 84 vs 32 ships (2.6x)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-emerald-50/50">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Reserve troops: 130,000 vs 0</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-emerald-50/50">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Defense spending efficiency: Better ROI</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-700">Saudi Arabia Advantages</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 rounded bg-rose-50/50">
                    <AlertTriangle className="h-4 w-4 text-rose-500" />
                    <span className="text-sm">Defense budget: $64B vs $23.5B (2.7x)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-rose-50/50">
                    <AlertTriangle className="h-4 w-4 text-rose-500" />
                    <span className="text-sm">Active troops: 247,000 vs 65,000 (3.8x)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-rose-50/50">
                    <AlertTriangle className="h-4 w-4 text-rose-500" />
                    <span className="text-sm">Fighter aircraft: 283 vs 99 (2.9x)</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel title="Global Military Context" description="UAE position vs world">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 rounded-lg bg-slate-50/50">
                <div className="text-3xl font-bold text-emerald-600">54th</div>
                <div className="text-sm text-slate-600">Global Military Rank</div>
                <div className="text-xs text-slate-500">of 145 countries</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-50/50">
                <div className="text-3xl font-bold text-amber-600">7th</div>
                <div className="text-sm text-slate-600">Middle East Rank</div>
                <div className="text-xs text-slate-500">below Turkey, Israel, Iran, Egypt</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-50/50">
                <div className="text-3xl font-bold text-blue-600">1.0188</div>
                <div className="text-sm text-slate-600">Power Index</div>
                <div className="text-xs text-slate-500">Lower = stronger</div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Advantages Tab */}
        <TabsContent value="advantages" className="space-y-6">
          <GlassPanel title="UAE Competitive Advantages" description="Key differentiators vs competitors">
            <div className="space-y-4">
              {uaeCompetitiveAdvantages.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-emerald-50/30 border border-emerald-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold text-emerald-800">{adv.advantageDomain}</div>
                    <div className="text-sm text-slate-600 mt-1">
                      <span className="font-medium">UAE Strength:</span> {adv.uaeStrength}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      <span className="font-medium">Closest Rival:</span> {adv.closestRival} ({adv.uaeAdvantageMargin})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="UAE Competitive Vulnerabilities" description="Areas of concern vs competitors">
            <div className="space-y-4">
              {uaeCompetitiveVulnerabilities.map((vuln, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-rose-50/30 border border-rose-100">
                  <AlertTriangle className="h-5 w-5 text-rose-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold text-rose-800">{vuln.vulnerability}</div>
                    <div className="text-sm text-slate-600 mt-1">
                      <span className="font-medium">UAE:</span> {vuln.uaeMetric}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      <span className="font-medium">vs {vuln.dominantRival}:</span> {vuln.rivalAdvantage}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Vulnerability Radar" description="UAE weaknesses vs rivals">
              <div className="h-64">
                <RadarChart
                  data={[
                    { name: 'Military', uae: 30, rival: 70 },
                    { name: 'Scale', uae: 40, rival: 90 },
                    { name: 'Oil', uae: 35, rival: 95 },
                    { name: 'Stability', uae: 60, rival: 90 },
                    { name: 'Press', uae: 20, rival: 80 },
                  ]}
                  metrics={[
                    { dataKey: 'uae', name: 'UAE Score', color: CHART_COLORS.emerald },
                    { dataKey: 'rival', name: 'Rival Advantage', color: CHART_COLORS.rose },
                  ]}
                  height={250}
                />
              </div>
            </GlassPanel>

            <GlassPanel title="Advantage vs Vulnerability Matrix" description="Strategic positioning">
              <div className="h-64">
                <PieChart
                  data={[
                    { name: 'Strong Advantages', value: 8 },
                    { name: 'Moderate Advantages', value: 3 },
                    { name: 'Vulnerabilities', value: 6 },
                    { name: 'Critical Risks', value: 2 },
                  ]}
                  height={250}
                />
              </div>
            </GlassPanel>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
