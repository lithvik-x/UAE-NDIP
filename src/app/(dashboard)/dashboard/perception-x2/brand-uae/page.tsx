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
  Gem,
  Award,
  TrendingUp as TrendUp,
  LineChart as LineChartIcon,
} from 'lucide-react'
import {
  brandUaeData,
  summaryMetrics,
  nationBrandValue,
  top50UaeBrands2025,
  updated2026Figures,
  global500Rankings2026,
  keyBrandFacts,
  uaeBrandsBsiScores2025,
  globalSoftPowerIndex2026,
  softPowerPillarRankings,
  softPowerImprovements,
  dubaiBrandRankings,
  dubaiMetrics,
  adnocBrand,
  eAndBrand,
  emiratesBrand,
  emaarBrand,
  luxuryBrandsCrisis2026,
  overallBrandSentiment,
  sentimentByCategory,
  keyUaeBrandingThemes,
  brandValueSummary,
  rankingsSummary,
  timelineOfKeyEvents,
  keyPerformanceIndicators,
  sevenLinesLogo,
  sevenLinesTeam,
  coreValues,
  colorSymbolism,
  rebrandingCaseStudies,
  culturalConsiderations,
  abuDhabiBrandIdentity,
  dubaiBrandIdentity,
  dubaiVisualStrategy,
} from '@/lib/data/perception/brand-uae-data'

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

// Sentiment distribution for charts
const sentimentDistribution = [
  { name: 'Positive', value: 4 },
  { name: 'Neutral', value: 1 },
  { name: 'Negative', value: 1 },
]

// Brand value data for chart
const brandValueChartData = [
  { brand: 'ADNOC', value2025: 18.9, value2026: 21.13 },
  { brand: 'e&', value2025: 15.3, value2026: 8.9 },
  { brand: 'Emirates', value2025: 8.4, value2026: 7.2 },
  { brand: 'Emaar', value2025: 4.0, value2026: 6.7 },
]

// Soft power pillars data
const softPowerPillarsData = softPowerPillarRankings.map((p) => ({
  pillar: p.pillar,
  rank: parseInt(p.rank) || 10,
}))

// Top 50 brands value data
const topBrandsData = top50UaeBrands2025.map((b) => ({
  brand: b.brand,
  value: parseFloat(b.brandValue.replace('$', '').replace('B', '')),
}))

export default function BrandUaePage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

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
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Brand UAE</h1>
          <p className="mt-2 text-slate-600">
            Comprehensive analysis of UAE nation brand, corporate brands, and brand value rankings
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
          title="Nation Brand Value"
          value="$1.223T"
          previousValue={0.773}
          icon={<Building2 className="h-6 w-6" />}
          gradient="purple"
          trend="up"
        />
        <MetricCard
          title="Global Soft Power"
          value="10th"
          icon={<Globe className="h-6 w-6" />}
          gradient="cyan"
        />
        <MetricCard
          title="Top 50 Brands"
          value="$88.5B"
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Dubai City Rank"
          value="5th"
          icon={<MapPin className="h-6 w-6" />}
          gradient="gold"
        />
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="nation-brand">Nation Brand</TabsTrigger>
          <TabsTrigger value="corporate-brands">Corporate Brands</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="soft-power">Soft Power</TabsTrigger>
          <TabsTrigger value="crisis">Crisis</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Brand Value Chart */}
            <GlassPanel title="Brand Value Comparison" description="2025 vs 2026 values in billions">
              <div className="h-64">
                <BarChart
                  data={brandValueChartData}
                  xAxisKey="brand"
                  bars={[
                    { dataKey: 'value2025', name: '2025', color: CHART_COLORS.platinum },
                    { dataKey: 'value2026', name: '2026', color: CHART_COLORS.indigo },
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </GlassPanel>

            {/* Sentiment Distribution */}
            <GlassPanel title="Brand Sentiment" description="Overall sentiment analysis">
              <div className="h-64">
                <PieChart
                  data={sentimentDistribution}
                  height={220}
                />
              </div>
            </GlassPanel>
          </div>

          {/* Key Brand Facts */}
          <GlassPanel title="Key Brand Highlights" description="Critical facts about UAE brands">
            <div className="grid gap-4 md:grid-cols-2">
              {keyBrandFacts.map((fact, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50">
                  <Award className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">{fact.brand}</div>
                    <div className="text-sm text-slate-600">{fact.fact}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Timeline */}
          <GlassPanel title="Key Events Timeline" description="Major brand milestones">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-amber-500" />
              <div className="space-y-4 pl-10">
                {timelineOfKeyEvents.map((event, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white shadow" />
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold text-indigo-600 min-w-[100px]">{event.date}</span>
                      <span className="text-sm text-slate-700">{event.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassPanel>

          {/* KPIs */}
          <GlassPanel title="Key Performance Indicators" description="Brand health metrics">
            <div className="grid gap-4 md:grid-cols-5">
              {keyPerformanceIndicators.map((kpi, idx) => (
                <div key={idx} className="text-center p-4 rounded-lg bg-slate-50/50">
                  <div className="text-2xl font-bold text-indigo-600">{kpi.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{kpi.kpi}</div>
                  <div className="text-xs text-emerald-600 mt-1">{kpi.target}</div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Nation Brand Tab */}
        <TabsContent value="nation-brand" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Seven Lines Logo */}
            <GlassPanel title="Seven Lines Logo" description="UAE national brand identity launched Jan 8, 2020">
              <div className="space-y-4">
                <div className="flex items-center justify-center p-6 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text-indigo mb-2">7 خطوط</div>
                    <div className="text-lg font-semibold text-slate-700">Seven Lines</div>
                    <div className="text-sm text-slate-500 mt-1">Make it Happen</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded bg-slate-50/50">
                    <div className="text-2xl font-bold text-indigo-600">10.6M</div>
                    <div className="text-xs text-slate-500">Global Votes</div>
                  </div>
                  <div className="text-center p-3 rounded bg-slate-50/50">
                    <div className="text-2xl font-bold text-purple-600">500M</div>
                    <div className="text-xs text-slate-500">Social Impressions</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-700 mb-2">Symbolism</h4>
                  <div className="flex flex-wrap gap-2">
                    {sevenLinesLogo.symbolism.slice(0, 4).map((item, idx) => (
                      <Badge key={idx} variant="outline" className="bg-indigo-50">{item}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Nation Brand Value */}
            <GlassPanel title="Nation Brand Value" description="Historical values and rankings">
              <div className="h-64">
                <LineChart
                  data={nationBrandValue}
                  xAxisKey="year"
                  lines={[{ dataKey: 'value', name: 'Value ($T)', color: CHART_COLORS.indigo }]}
                  height={220}
                  showGrid={true}
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {nationBrandValue.map((nv, idx) => (
                  <div key={idx} className="text-center p-2 rounded bg-slate-50/50">
                    <div className="text-lg font-bold text-indigo-600">{nv.rank.split(' ')[0]}</div>
                    <div className="text-xs text-slate-500">{nv.year}</div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Core Values */}
          <GlassPanel title="Core Brand Values" description="Foundational UAE brand attributes">
            <div className="grid gap-4 md:grid-cols-5">
              {coreValues.map((value, idx) => (
                <div key={idx} className="text-center p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                  <div className="text-3xl mb-2">
                    {idx === 0 && <Heart className="h-8 w-8 mx-auto text-rose-500" />}
                    {idx === 1 && <Users className="h-8 w-8 mx-auto text-blue-500" />}
                    {idx === 2 && <Shield className="h-8 w-8 mx-auto text-emerald-500" />}
                    {idx === 3 && <Lightbulb className="h-8 w-8 mx-auto text-amber-500" />}
                    {idx === 4 && <CheckCircle className="h-8 w-8 mx-auto text-purple-500" />}
                  </div>
                  <div className="font-semibold text-slate-900">{value.value}</div>
                  <div className="text-xs text-slate-600 mt-1">{value.description}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Color Symbolism */}
          <GlassPanel title="Color Symbolism" description="National brand colors and meanings">
            <div className="grid gap-4 md:grid-cols-4">
              {colorSymbolism.map((color, idx) => (
                <div key={idx} className="text-center p-4 rounded-lg bg-slate-50/50">
                  <div
                    className="w-12 h-12 mx-auto rounded-full mb-2"
                    style={{
                      backgroundColor:
                        color.color === 'Green' ? '#006400' :
                        color.color === 'Gold' ? '#FFD700' :
                        color.color === 'Red' ? '#DC2626' :
                        '#FFFFFF',
                      border: color.color === 'White' ? '2px solid #e5e7eb' : 'none',
                    }}
                  />
                  <div className="font-semibold text-slate-900">{color.color}</div>
                  <div className="text-sm text-slate-600">{color.meaning}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Seven Lines Teams */}
          <GlassPanel title="Seven Lines Design Teams" description="49 Emirati artists from 7 emirates">
            <div className="grid gap-4 md:grid-cols-7">
              {sevenLinesTeam.map((team, idx) => (
                <div key={idx} className="text-center p-3 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                  <div className="font-semibold text-slate-900 text-sm">{team.team}</div>
                  <div className="text-xs text-indigo-600 mt-1">{team.value}</div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Corporate Brands Tab */}
        <TabsContent value="corporate-brands" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* ADNOC */}
            <GlassPanel title="ADNOC" description="Abu Dhabi National Oil Company">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-indigo-600">${adnocBrand.brandValue2026}</div>
                    <div className="text-sm text-slate-500">Brand Value 2026</div>
                  </div>
                  <Badge className="bg-emerald-500">AAA- Rating</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded bg-slate-50/50">
                    <div className="text-sm text-slate-500">Global Rank</div>
                    <div className="text-xl font-bold text-slate-900">#{adnocBrand.globalRank2026}</div>
                  </div>
                  <div className="p-3 rounded bg-slate-50/50">
                    <div className="text-sm text-slate-500">YoY Growth</div>
                    <div className="text-xl font-bold text-emerald-600">{adnocBrand.yoyGrowth.split(',')[0]}</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-sm text-slate-600">{adnocBrand.keyQuote}</div>
                </div>
              </div>
            </GlassPanel>

            {/* e& */}
            <GlassPanel title="e&" description="Formerly Etisalat - Global Tech Group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-purple-600">${eAndBrand.brandValue2025}</div>
                    <div className="text-sm text-slate-500">Brand Value 2025</div>
                  </div>
                  <Badge className="bg-purple-500">+701% Growth</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded bg-slate-50/50">
                    <div className="text-sm text-slate-500">Countries</div>
                    <div className="text-xl font-bold text-slate-900">{eAndBrand.countriesOperated}</div>
                  </div>
                  <div className="p-3 rounded bg-slate-50/50">
                    <div className="text-sm text-slate-500">Customers</div>
                    <div className="text-xl font-bold text-slate-900">{eAndBrand.customers}</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-sm font-semibold text-slate-700">Rebranded June 2022</div>
                  <div className="text-sm text-slate-600">From telecom to global technology and investment</div>
                </div>
              </div>
            </GlassPanel>

            {/* Emirates */}
            <GlassPanel title="Emirates" description="Emirates Airline">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-amber-600">${emiratesBrand.brandValue2025}</div>
                    <div className="text-sm text-slate-500">Brand Value 2025</div>
                  </div>
                  <div className="flex gap-1">
                    <Badge className="bg-emerald-500">4th Airline</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded bg-slate-50/50">
                    <div className="text-sm text-slate-500">BSI Score</div>
                    <div className="text-xl font-bold text-slate-900">{emiratesBrand.bsiScore}</div>
                  </div>
                  <div className="p-3 rounded bg-slate-50/50">
                    <div className="text-sm text-slate-500">YouGov Recommend</div>
                    <div className="text-xl font-bold text-emerald-600">{emiratesBrand.yougovRecommendGlobal}</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-sm font-semibold text-slate-700 mb-2">Awards</div>
                  <div className="flex flex-wrap gap-2">
                    {emiratesBrand.awards.map((award, idx) => (
                      <Badge key={idx} variant="outline">{award}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Emaar */}
            <GlassPanel title="Emaar" description="Emaar Properties PJSC">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-emerald-600">${emaarBrand.brandValue2025}</div>
                    <div className="text-sm text-slate-500">Brand Value 2025</div>
                  </div>
                  <Badge className="bg-emerald-500">+53% Growth</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded bg-slate-50/50">
                    <div className="text-sm text-slate-500">Global Real Estate</div>
                    <div className="text-xl font-bold text-slate-900">#{emaarBrand.globalRealEstateRank}</div>
                  </div>
                  <div className="p-3 rounded bg-slate-50/50">
                    <div className="text-sm text-slate-500">Nationalities</div>
                    <div className="text-xl font-bold text-slate-900">{emaarBrand.nationalitiesServed}</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-sm font-semibold text-slate-700 mb-2">Notable Projects</div>
                  <div className="text-sm text-slate-600">{emaarBrand.notableProjects}</div>
                </div>
              </div>
            </GlassPanel>
          </div>

          {/* Rebranding Case Studies */}
          <GlassPanel title="Rebranding Case Studies" description="Successful transformations">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Etisalat to e&</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">From:</span> Telecom provider</div>
                    <div><span className="font-medium">To:</span> Global tech group</div>
                    <div><span className="font-medium">Result:</span> 701% growth</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Emirates NBD</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Focus:</span> Digital transformation</div>
                    <div><span className="font-medium">Style:</span> Clean, simplified</div>
                    <div><span className="font-medium">Target:</span> Young entrepreneurs</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Careem</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">From:</span> Ride-hailing</div>
                    <div><span className="font-medium">To:</span> Super app</div>
                    <div><span className="font-medium">Services:</span> Food, payments</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Rankings Tab */}
        <TabsContent value="rankings" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Top 50 UAE Brands */}
            <GlassPanel title="Top 50 UAE Brands 2025" description="Leading brands by value">
              <div className="space-y-3">
                {top50UaeBrands2025.map((brand, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        idx === 0 ? 'bg-amber-500 text-white' :
                        idx === 1 ? 'bg-slate-400 text-white' :
                        idx === 2 ? 'bg-amber-700 text-white' :
                        'bg-slate-200 text-slate-600'
                      }`}>
                        {brand.rank}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{brand.brand}</div>
                        <div className="text-xs text-slate-500">BSI: {brand.bsiScore}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-indigo-600">{brand.brandValue}</div>
                      <div className="text-xs text-emerald-600">{brand.yoyGrowth}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-lg bg-indigo-50/50 text-center">
                <div className="text-lg font-bold text-indigo-600">{totalTop50UaeBrandsValue.value}</div>
                <div className="text-sm text-slate-600">{totalTop50UaeBrandsValue.yoyGrowth}</div>
              </div>
            </GlassPanel>

            {/* Global 500 Rankings */}
            <GlassPanel title="Global 500 Rankings 2026" description="UAE brands in worldwide rankings">
              <div className="space-y-4">
                {global500Rankings2026.map((brand, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-slate-50/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-slate-900">{brand.brand}</div>
                      <Badge variant="outline">{brand.category}</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">#{brand.globalRank}</div>
                        <div className="text-xs text-slate-500">Global Rank</div>
                      </div>
                      {brand.yoyChange !== '-' && (
                        <div className="text-center">
                          <div className="text-lg font-bold text-emerald-600">{brand.yoyChange}</div>
                          <div className="text-xs text-slate-500">YoY Change</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Dubai Rankings */}
          <GlassPanel title="Dubai City Brand" description="Global rankings and metrics">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="text-5xl font-bold text-amber-600 mb-2">#5</div>
                <div className="text-lg font-semibold text-slate-700">Global City Ranking</div>
                <div className="text-sm text-slate-500">2024 (+4 spots)</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-green-50">
                <div className="text-5xl font-bold text-emerald-600 mb-2">#1</div>
                <div className="text-lg font-semibold text-slate-700">Reputation Score</div>
                <div className="text-sm text-slate-500">Globally</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="text-5xl font-bold text-blue-600 mb-2">#4</div>
                <div className="text-lg font-semibold text-slate-700">Remote Working</div>
                <div className="text-sm text-slate-500">(was #24)</div>
              </div>
            </div>
          </GlassPanel>

          {/* BSI Scores */}
          <GlassPanel title="Brand Strength Index Scores" description="2025 BSI rankings">
            <div className="h-64">
              <BarChart
                data={uaeBrandsBsiScores2025.map(b => ({ brand: b.brand, bsi: parseFloat(b.bsiScore) }))}
                xAxisKey="brand"
                bars={[{ dataKey: 'bsi', name: 'BSI Score', color: CHART_COLORS.indigo }]}
                height={220}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Soft Power Tab */}
        <TabsContent value="soft-power" className="space-y-6">
          {/* Soft Power Overview */}
          <GlassPanel title="Global Soft Power Index 2026" description="UAE rankings">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100">
                <div className="text-5xl font-bold text-indigo-600 mb-2">10th</div>
                <div className="text-lg font-semibold text-slate-700">Global Rank</div>
                <div className="text-sm text-slate-500">4th consecutive year</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100">
                <div className="text-5xl font-bold text-cyan-600 mb-2">59.4</div>
                <div className="text-lg font-semibold text-slate-700">Soft Power Score</div>
                <div className="text-sm text-slate-500">out of 100</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-emerald-100 to-green-100">
                <div className="text-5xl font-bold text-emerald-600 mb-2">2nd</div>
                <div className="text-lg font-semibold text-slate-700">Generosity</div>
                <div className="text-sm text-slate-500">Pillar ranking</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100">
                <div className="text-5xl font-bold text-amber-600 mb-2">3rd</div>
                <div className="text-lg font-semibold text-slate-700">Future Growth</div>
                <div className="text-sm text-slate-500">Pillar ranking</div>
              </div>
            </div>
          </GlassPanel>

          {/* Pillar Rankings */}
          <GlassPanel title="Soft Power Pillar Rankings" description="Performance by category">
            <div className="h-80">
              <RadarChart
                data={softPowerPillarsData.map(p => ({
                  pillar: p.pillar.slice(0, 10),
                  rank: 12 - p.rank, // Invert so higher = better
                }))}
                metrics={[{ dataKey: 'rank', name: 'Score', color: CHART_COLORS.indigo }]}
                height={300}
              />
            </div>
          </GlassPanel>

          {/* Improvements */}
          <GlassPanel title="Year-over-Year Improvements" description="Biggest gains">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              {softPowerImprovements.map((improvement, idx) => (
                <div key={idx} className="text-center p-4 rounded-lg bg-emerald-50/50">
                  <div className="text-2xl font-bold text-emerald-600">{improvement.rankChange}</div>
                  <div className="text-sm text-slate-600 mt-1">{improvement.metric}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Key Branding Themes */}
          <GlassPanel title="Key UAE Branding Themes" description="Core narrative pillars">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              {keyUaeBrandingThemes.map((theme, idx) => (
                <div key={idx} className="text-center p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-slate-900">{theme.theme}</div>
                  <div className="text-xs text-slate-600 mt-1">{theme.description}</div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Crisis Tab */}
        <TabsContent value="crisis" className="space-y-6">
          {/* Luxury Brands Crisis Alert */}
          <div className="rounded-lg bg-rose-50/50 border-2 border-rose-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-rose-500" />
              <div>
                <h3 className="text-xl font-bold text-rose-700">Luxury Brands Crisis - March 2026</h3>
                <p className="text-sm text-rose-600">Regional conflict impacting UAE retail sector</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 rounded bg-white/50">
                <div className="text-3xl font-bold text-rose-600">30-50%</div>
                <div className="text-sm text-slate-600">Sales Drop (Mall of Emirates)</div>
              </div>
              <div className="text-center p-4 rounded bg-white/50">
                <div className="text-3xl font-bold text-rose-600">6%</div>
                <div className="text-sm text-slate-600">Global Revenue at Risk</div>
              </div>
              <div className="text-center p-4 rounded bg-white/50">
                <div className="text-3xl font-bold text-rose-600">UAE, Qatar, Kuwait</div>
                <div className="text-sm text-slate-600">Store Closures</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-rose-200">
              <h4 className="font-semibold text-rose-700 mb-2">Brands Affected</h4>
              <div className="flex flex-wrap gap-2">
                {luxuryBrandsCrisis2026.brandsAffected.map((brand, idx) => (
                  <Badge key={idx} variant="destructive">{brand}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Brand Consistency Challenges */}
          <GlassPanel title="Brand Consistency Challenges" description="Key issues identified">
            <div className="space-y-4">
              {brandConsistencyChallenges.map((challenge, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-amber-50/50">
                  <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">{challenge.issue}</div>
                    <div className="text-sm text-slate-500 mt-1">Source: {challenge.source}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Abu Dhabi vs Dubai */}
          <GlassPanel title="Abu Dhabi vs Dubai Brand Identity" description="Comparative analysis">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-amber-600" />
                  <h4 className="font-bold text-lg text-slate-900">Abu Dhabi</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Symbol:</span> {abuDhabiBrandIdentity.symbol}</div>
                  <div><span className="font-medium">Heritage:</span> {abuDhabiBrandIdentity.positioning}</div>
                  <div><span className="font-medium">Positioning:</span> {abuDhabiBrandIdentity.positioning}</div>
                  <div><span className="font-medium">Elements:</span> {abuDhabiBrandIdentity.elements}</div>
                </div>
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="flex items-center gap-3 mb-4">
                  <Gem className="h-6 w-6 text-blue-600" />
                  <h4 className="font-bold text-lg text-slate-900">Dubai</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Strategy:</span> {dubaiBrandIdentity.strategy}</div>
                  <div><span className="font-medium">Values:</span> {dubaiBrandIdentity.values}</div>
                  <div><span className="font-medium">Fusion:</span> {dubaiBrandIdentity.fusion}</div>
                  <div><span className="font-medium">Target:</span> {dubaiBrandIdentity.target}</div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          {/* Overall Sentiment */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Overall Brand Sentiment" description="By entity">
              <div className="space-y-3">
                {overallBrandSentiment.map((sentiment, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      {sentiment.sentiment === 'Strongly Positive' && <ThumbsUp className="h-5 w-5 text-emerald-500" />}
                      {sentiment.sentiment === 'Positive' && <ThumbsUp className="h-5 w-5 text-emerald-400" />}
                      {sentiment.sentiment === 'Negative' && <ThumbsDown className="h-5 w-5 text-rose-500" />}
                      <div>
                        <div className="font-medium text-slate-900">{sentiment.entity}</div>
                        <div className="text-xs text-slate-500">{sentiment.reason}</div>
                      </div>
                    </div>
                    <Badge
                      variant={
                        sentiment.sentiment === 'Strongly Positive' ? 'success' :
                        sentiment.sentiment === 'Positive' ? 'default' :
                        'destructive'
                      }
                    >
                      {sentiment.sentiment}
                    </Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Sentiment by Category" description="Sector analysis">
              <div className="h-64">
                <PieChart
                  data={sentimentByCategory.map((cat, idx) => ({
                    name: cat.category,
                    value: cat.sentiment === 'Positive' ? 3 : cat.sentiment === 'Negative' ? 1 : 2,
                    color: cat.sentiment === 'Positive' ? CHART_COLORS.emerald :
                           cat.sentiment === 'Negative' ? CHART_COLORS.rose :
                           CHART_COLORS.platinum,
                  }))}
                  height={220}
                />
              </div>
            </GlassPanel>
          </div>

          {/* Cultural Considerations */}
          <GlassPanel title="Cultural Brand Considerations" description="UAE market factors">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {culturalConsiderations.slice(0, 5).map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50/50 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-slate-900">{item.factor}</div>
                  <div className="text-xs text-slate-600 mt-1">{item.consideration}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Brand Value Summary Table */}
          <GlassPanel title="Brand Value Summary" description="2025 vs 2026 comparison">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Brand</th>
                    <th className="text-right p-3">2026 Value</th>
                    <th className="text-right p-3">2025 Value</th>
                    <th className="text-right p-3">Growth</th>
                    <th className="text-right p-3">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {brandValueSummary.map((row, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-3 font-medium">{row.brand}</td>
                      <td className="text-right p-3">{row.value2026}</td>
                      <td className="text-right p-3">{row.value2025}</td>
                      <td className={`text-right p-3 font-semibold ${row.growth.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {row.growth}
                      </td>
                      <td className="text-right p-3 text-slate-500">{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Total Top 50 value
const totalTop50UaeBrandsValue = {
  value: '$88.5 billion',
  yoyGrowth: '22% YoY increase',
}

// Brand consistency challenges
const brandConsistencyChallenges = luxuryBrandsCrisis2026.brandsAffected.length > 0 ? [
  { issue: 'UAE is one of most over-marketed, under-branded markets', source: 'LinkedIn (Fizzah Nawaz Rajput)' },
  { issue: 'Real bottleneck is consistency, not talent', source: 'Khaleej Times, Feb 2026' },
  { issue: 'As brands scale across markets, operational consistency becomes competitive advantage', source: 'Khaleej Times' },
] : []

// Re-export keyArtist for icon usage
function CheckCircle(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
