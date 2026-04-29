// @ts-nocheck
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
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Home,
  Flag,
  TrendingUp,
  Users,
  Heart,
  Calendar,
  Eye,
  Star,
  Globe,
  MapPin,
  BookOpen,
  MessageSquare,
  ChevronRight,
  Activity,
  Award,
} from 'lucide-react'
import {
  useEmiratiArabicData,
} from '@/lib/data-loader'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
}

// CYCLES A-F: Enhancement cycles for comprehensive coverage
// A: Core Infrastructure (fonts, glassmorphism, motion base)
// B: Data Integration (100% MD content from extendedData)
// C: Premium Charts (all chart types with CHART_COLORS)
// D: Dialect Intelligence (sentiment markers, expressions)
// E: Geographic Breakdown (emirates distribution)
// F: Final Polish (animations, interactions, verification)

export default function EmiratiArabicPage() {
  const { data } = useEmiratiArabicData()
  const [activeTab, setActiveTab] = useState('overview')

  // Emirati dialect query volume trend - from MD file Section D
  const volumeTrend = [
    { month: 'Jan', volume: 7.2, growth: 1.4 },
    { month: 'Feb', volume: 7.5, growth: 4.2 },
    { month: 'Mar', volume: 7.8, growth: 4.0 },
    { month: 'Apr', volume: 8.0, growth: 2.6 },
    { month: 'May', volume: 8.2, growth: 2.5 },
    { month: 'Jun', volume: 8.0, growth: -2.4 },
    { month: 'Jul', volume: 8.1, growth: 1.3 },
    { month: 'Aug', volume: 8.2, growth: 1.2 },
    { month: 'Sep', volume: 8.3, growth: 1.2 },
    { month: 'Oct', volume: 8.4, growth: 1.2 },
    { month: 'Nov', volume: 8.2, growth: -2.4 },
    { month: 'Dec', volume: 8.2, growth: 0 },
  ]

  // Sentiment distribution from MD file Section E
  const sentimentData = [
    { name: 'Positive', value: 78, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 15, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 7, color: CHART_COLORS.danger },
  ]

  // Heritage and culture terms from MD file Section D
  const heritageTerms = [
    { term: 'UAE National Day celebrations', volume: 2100000, sentiment: 95, category: 'Heritage' },
    { term: 'Emirati heritage Al Ain', volume: 1400000, sentiment: 92, category: 'Heritage' },
    { term: 'Ras Al Khaimah nature reserves', volume: 820000, sentiment: 88, category: 'Nature' },
    { term: 'Emirati cuisine traditional', volume: 780000, sentiment: 90, category: 'Food' },
  ]

  // Local events terms from MD file Section D
  const localEventsTerms = [
    { term: 'DubaiMall events', volume: 1800000, sentiment: 85, category: 'Events' },
    { term: 'Abu Dhabi Ramadan timings', volume: 1600000, sentiment: 75, category: 'Religious' },
    { term: 'Dubai restaurants iftar', volume: 1300000, sentiment: 88, category: 'Food' },
    { term: 'Sharjah cultural events', volume: 1100000, sentiment: 86, category: 'Culture' },
  ]

  // Practical terms from MD file Section D
  const practicalTerms = [
    { term: 'UAE golden visa application', volume: 1200000, sentiment: 72, category: 'Services' },
    { term: 'UAE labour law 2025', volume: 890000, sentiment: 55, category: 'Legal' },
    { term: 'Ajman tourism attractions', volume: 950000, sentiment: 82, category: 'Tourism' },
  ]

  // Emirates distribution from MD file Section C Entity Registry
  const emiratesData = [
    { name: 'Dubai', share: 35, color: CHART_COLORS.gold },
    { name: 'Abu Dhabi', share: 30, color: CHART_COLORS.navy },
    { name: 'Sharjah', share: 15, color: CHART_COLORS.platinum },
    { name: 'Ajman', share: 8, color: CHART_COLORS.teal },
    { name: 'Ras Al Khaimah', share: 7, color: CHART_COLORS.emerald },
    { name: 'Fujairah', share: 3, color: CHART_COLORS.info },
    { name: 'Umm Al Quwain', share: 2, color: CHART_COLORS.indigo },
  ]

  // Dialect features from MD file Section E
  const dialectFeatures = [
    { feature: 'Emirati Vocabulary', usage: 85, trend: 'stable' },
    { feature: 'Traditional Expressions', usage: 72, trend: 'rising' },
    { feature: 'Gulf Arabic Influences', usage: 65, trend: 'stable' },
    { feature: 'MSA Borrowings', usage: 45, trend: 'declining' },
  ]

  // Dialect sentiment markers from MD file Section E
  const positiveMarkers = [
    { expression: 'Ya Zein', arabic: 'يا زين', meaning: 'Expression of admiration' },
    { expression: 'MashaAllah', arabic: 'ما شاء الله', meaning: 'Praise to God' },
    { expression: 'Allah Yihibbik', arabic: 'الله يحبج', meaning: 'May God love you' },
    { expression: 'Yistahl', arabic: 'يستاهل', meaning: 'Deserves/worthy' },
    { expression: 'A7la', arabic: 'أحلى', meaning: 'Most beautiful' },
  ]

  const negativeMarkers = [
    { expression: 'Ghalli', arabic: 'غالي', meaning: 'Expensive' },
    { expression: 'disaster', arabic: 'كارثة', meaning: 'Disaster' },
    { expression: 'Chaos', arabic: 'فوضى', meaning: 'Chaos' },
    { expression: 'Ma fi fayda', arabic: 'ما في فايدة', meaning: 'No point' },
    { expression: 'Mustahil', arabic: 'مستحيل', meaning: 'Impossible' },
  ]

  // Seven Emirates geographic data from MD file Section C
  const emiratesGeo = [
    { name: 'Abu Dhabi', arabic: 'أبو ظبي', ruler: 'Sheikh Mohammed bin Zayed', significance: 'Capital, oil wealth' },
    { name: 'Dubai', arabic: 'دبي', ruler: 'Sheikh Mohammed bin Rashid', significance: 'Business/tourism hub' },
    { name: 'Sharjah', arabic: 'الشارقة', ruler: 'Sultan bin Mohammed Al Qasimi', significance: 'Cultural center' },
    { name: 'Ajman', arabic: 'عجمان', ruler: 'Humaid bin Rashid Al Nuaimi', significance: 'Smallest emirate' },
    { name: 'Umm Al Quwain', arabic: 'أم القيوين', ruler: 'Saud bin Rashid Al Mu\'alla', significance: 'Northern emirate' },
    { name: 'Ras Al Khaimah', arabic: 'رأس الخيمة', ruler: 'Marjan bin Rashid Al Mu\'alla', significance: 'Industrial' },
    { name: 'Fujairah', arabic: 'الفجيرة', ruler: 'Hamad bin Mohammed Al Sharqi', significance: 'Eastern coast' },
  ]

  // Government KPI data from MD file Section D
  const governmentKPI = {
    cabinetSize: 38,
    ministriesNew: 2,
    formationDate: 'July 14, 2024',
    governmentNumber: '16th',
  }

  // Employment metrics from MD file Section D
  const employmentMetrics = [
    { role: 'Accounting/Audit', salary: 45004 },
    { role: 'Sales', salary: 43336 },
    { role: 'Engineering', salary: 30761 },
    { role: 'Management', salary: 25488 },
    { role: 'IT', salary: 16470 },
    { role: 'Customer Service', salary: 12043 },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Heritage': return <Badge variant="gold" className="text-xs">{category}</Badge>
      case 'Events': return <Badge variant="denim" className="text-xs">{category}</Badge>
      case 'Culture': return <Badge variant="default" className="text-xs">{category}</Badge>
      case 'Food': return <Badge variant="emerald" className="text-xs">{category}</Badge>
      case 'Nature': return <Badge variant="info" className="text-xs">{category}</Badge>
      case 'Religious': return <Badge variant="navy" className="text-xs">{category}</Badge>
      case 'Services': return <Badge variant="platinum" className="text-xs">{category}</Badge>
      case 'Legal': return <Badge variant="danger" className="text-xs">{category}</Badge>
      case 'Tourism': return <Badge variant="teal" className="text-xs">{category}</Badge>
      default: return <Badge variant="outline" className="text-xs">{category}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8 min-h-screen" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
      {/* ENHANCEMENT A: Header with glassmorphism and motion */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="gold" className="mb-2 font-semibold tracking-wider">EMIRATI DIALECT</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-extrabold gradient-text-gold tracking-tight"
          >
            Emirati Arabic
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-slate-400 text-lg"
          >
            UAE local dialect intelligence, heritage content, and regional language patterns
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-3"
        >
          <Button
            variant="outline"
            className="gap-2 border-gold/50 text-gold hover:bg-gold/10 backdrop-blur-sm transition-all duration-300"
          >
            <Eye className="h-4 w-4" />
            Monitor Dialect
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2 shadow-lg shadow-gold/20">
            <Heart className="h-4 w-4" />
            Track Heritage
          </Button>
        </motion.div>
      </motion.div>

      {/* ENHANCEMENT B: Key Metrics with staggered animation */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Dialectal Queries"
          value={(data?.queryVolume / 1000000).toFixed(1) + 'M'}
          previousValue={7.8}
          icon={<Home className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="UAE Speakers"
          value={(data?.uaeSpeakerPopulation / 1000000).toFixed(1) + 'M'}
          icon={<Users className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={data?.sentiment?.overall || 78}
          previousValue={76}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Credibility Score"
          value={data?.credibility?.score || 85}
          previousValue={83}
          icon={<Star className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </motion.div>

      {/* ENHANCEMENT C: Tabs with AnimatePresence */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel backdrop-blur-xl border border-glass-border p-1" scrollable>
          <TabsTrigger value="overview" className="data-[state=active]:bg-gold/20">Overview</TabsTrigger>
          <TabsTrigger value="heritage" className="data-[state=active]:bg-gold/20">Heritage Terms</TabsTrigger>
          <TabsTrigger value="local" className="data-[state=active]:bg-gold/20">Local Events</TabsTrigger>
          <TabsTrigger value="geography" className="data-[state=active]:bg-gold/20">By Emirates</TabsTrigger>
          <TabsTrigger value="features" className="data-[state=active]:bg-gold/20">Dialect Features</TabsTrigger>
          <TabsTrigger value="government" className="data-[state=active]:bg-gold/20">Government</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {/* ENHANCEMENT D: Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Emirati Arabic Overview" description="Local dialect query intelligence">
                <div className="space-y-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Activity className="h-5 w-5 text-gold" />
                          Query Volume Trend
                        </CardTitle>
                        <CardDescription>Monthly Emirati dialect searches (millions)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <AreaChart
                          data={volumeTrend}
                          xAxisKey="month"
                          areas={[
                            { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.gold },
                          ]}
                          height={280}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>

                    <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <MessageSquare className="h-5 w-5 text-emerald" />
                          Sentiment Breakdown
                        </CardTitle>
                        <CardDescription>Emirati content sentiment</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PieChart
                          data={sentimentData}
                          height={280}
                          showLegend={true}
                        />
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Award className="h-5 w-5 text-gold" />
                        Top Search Categories
                      </CardTitle>
                      <CardDescription>Most searched Emirati dialect topics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg border border-gold-700/50 bg-gold-900/20 p-4 text-center backdrop-blur-sm transition-all duration-300"
                        >
                          <div className="text-3xl font-bold text-gold">2.1M</div>
                          <p className="text-sm text-slate-400 mt-1">National Day</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg border border-navy-700/50 bg-navy-900/20 p-4 text-center backdrop-blur-sm transition-all duration-300"
                        >
                          <div className="text-3xl font-bold text-navy">1.8M</div>
                          <p className="text-sm text-slate-400 mt-1">Dubai Events</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4 text-center backdrop-blur-sm transition-all duration-300"
                        >
                          <div className="text-3xl font-bold text-emerald-400">1.6M</div>
                          <p className="text-sm text-slate-400 mt-1">Ramadan</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg border border-platinum-700/50 bg-platinum-900/20 p-4 text-center backdrop-blur-sm transition-all duration-300"
                        >
                          <div className="text-3xl font-bold text-platinum">1.4M</div>
                          <p className="text-sm text-slate-400 mt-1">Heritage</p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* ENHANCEMENT E: Heritage Terms Tab */}
          <TabsContent value="heritage" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Emirati Heritage Terms" description="Culture, tradition, and national identity content">
                <div className="space-y-6">
                  <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Flag className="h-5 w-5 text-gold" />
                        Heritage & Culture Searches
                      </CardTitle>
                      <CardDescription>Traditional Emirati content</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px]">
                        <div className="space-y-3">
                          {heritageTerms.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02, x: 10 }}
                              className="flex items-center justify-between rounded-lg border border-gold-700/50 bg-slate-800/50 p-4 hover:bg-slate-800/70 cursor-pointer transition-all duration-300"
                            >
                              <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                                  <Flag className="h-5 w-5" />
                                </div>
                                <div>
                                  <p className="font-semibold text-slate-200">{item.term}</p>
                                  {getCategoryBadge(item.category)}
                                </div>
                              </div>
                              <div className="flex items-center gap-6">
                                <div className="text-center">
                                  <div className="text-lg font-bold text-slate-200">
                                    {(item.volume / 1000000).toFixed(2)}M
                                  </div>
                                  <p className="text-xs text-slate-400">Volume</p>
                                </div>
                                <div className="text-center">
                                  <div className={`text-lg font-bold ${getSentimentColor(item.sentiment)}`}>
                                    {item.sentiment}%
                                  </div>
                                  <p className="text-xs text-slate-400">Sentiment</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Heart className="h-5 w-5 text-emerald" />
                        Heritage Sentiment by Topic
                      </CardTitle>
                      <CardDescription>How Emiratis feel about heritage topics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {heritageTerms.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium text-slate-200">{item.term}</span>
                              <span className={`font-bold ${getSentimentColor(item.sentiment)}`}>{item.sentiment}%</span>
                            </div>
                            <Progress value={item.sentiment} className="h-2" />
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Local Events Tab */}
          <TabsContent value="local" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Local Events & Services" description="Community events, services, and practical information">
                <div className="space-y-6">
                  <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-emerald" />
                        Events & Activities
                      </CardTitle>
                      <CardDescription>Local event-related searches</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {localEventsTerms.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70 cursor-pointer transition-all duration-300"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                                <Calendar className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-200">{item.term}</p>
                                {getCategoryBadge(item.category)}
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="text-center">
                                <div className="text-lg font-bold text-slate-200">
                                  {(item.volume / 1000000).toFixed(2)}M
                                </div>
                                <p className="text-xs text-slate-400">Volume</p>
                              </div>
                              <div className="text-center">
                                <div className={`text-lg font-bold ${getSentimentColor(item.sentiment)}`}>
                                  {item.sentiment}%
                                </div>
                                <p className="text-xs text-slate-400">Sentiment</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Home className="h-5 w-5 text-navy" />
                        Practical Services
                      </CardTitle>
                      <CardDescription>Government and utility services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {practicalTerms.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70 cursor-pointer transition-all duration-300"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                                <Home className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-200">{item.term}</p>
                                {getCategoryBadge(item.category)}
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="text-center">
                                <div className="text-lg font-bold text-slate-200">
                                  {(item.volume / 1000000).toFixed(2)}M
                                </div>
                                <p className="text-xs text-slate-400">Volume</p>
                              </div>
                              <div className="text-center">
                                <div className={`text-lg font-bold ${getSentimentColor(item.sentiment)}`}>
                                  {item.sentiment}%
                                </div>
                                <p className="text-xs text-slate-400">Sentiment</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* By Emirates Tab */}
          <TabsContent value="geography" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Emirati Dialect by Emirates" description="Regional distribution of dialect usage">
                <div className="space-y-6">
                  <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="h-5 w-5 text-gold" />
                        Share of Dialect Queries by Emirates
                      </CardTitle>
                      <CardDescription>Regional breakdown of Emirati Arabic searches</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={emiratesData}
                        height={350}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-navy" />
                        Regional Sentiment
                      </CardTitle>
                      <CardDescription>Dialect sentiment by emirate</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={emiratesData}
                        xAxisKey="name"
                        bars={[
                          { dataKey: 'share', name: 'Share %', color: CHART_COLORS.gold },
                        ]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-emerald" />
                        Seven Emirates Overview
                      </CardTitle>
                      <CardDescription>Geographic distribution and leadership</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {emiratesGeo.map((emirate, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg border border-gold-700/50 bg-gold-900/20 p-4 backdrop-blur-sm transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="gold" className="text-xs">{emirate.name}</Badge>
                              <span className="text-xs text-gold font-arabic">{emirate.arabic}</span>
                            </div>
                            <p className="text-sm text-slate-300 mb-1">{emirate.significance}</p>
                            <p className="text-xs text-slate-400">{emirate.ruler}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Dialect Features Tab */}
          <TabsContent value="features" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Emirati Dialect Features" description="Linguistic characteristics and usage patterns">
                <div className="space-y-6">
                  <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-gold" />
                        Dialect Feature Usage
                      </CardTitle>
                      <CardDescription>Prevalence of dialect characteristics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {dialectFeatures.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium text-slate-200">{feature.feature}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-gold">{feature.usage}%</span>
                                {feature.trend === 'rising' && (
                                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                                )}
                                {feature.trend === 'declining' && (
                                  <TrendingUp className="h-4 w-4 text-red-400 rotate-180" />
                                )}
                              </div>
                            </div>
                            <Progress value={feature.usage} className="h-3" />
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Positive Sentiment Markers */}
                    <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Heart className="h-5 w-5 text-emerald" />
                          Positive Expressions
                        </CardTitle>
                        <CardDescription>Emirati dialect praise and admiration</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {positiveMarkers.map((marker, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-3 backdrop-blur-sm"
                            >
                              <p className="font-mono text-gold text-lg">{marker.expression}</p>
                              <p className="text-sm text-emerald-400 font-arabic">{marker.arabic}</p>
                              <p className="text-xs text-slate-400 mt-1">{marker.meaning}</p>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Negative Sentiment Markers */}
                    <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-red-400" />
                          Crisis Expressions
                        </CardTitle>
                        <CardDescription>Emirati dialect frustration markers</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {negativeMarkers.map((marker, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="rounded-lg border border-red-700/50 bg-red-900/20 p-3 backdrop-blur-sm"
                            >
                              <p className="font-mono text-red-400 text-lg">{marker.expression}</p>
                              <p className="text-sm text-red-500 font-arabic">{marker.arabic}</p>
                              <p className="text-xs text-slate-400 mt-1">{marker.meaning}</p>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-gold" />
                        Unique Emirati Expressions
                      </CardTitle>
                      <CardDescription>Distinctive dialect vocabulary</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-3">
                          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                            <p className="font-mono text-gold">"Ya raiti"</p>
                            <p className="text-sm text-slate-400 mt-1">My dear / dear friend</p>
                          </div>
                          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                            <p className="font-mono text-gold">"Khalas"</p>
                            <p className="text-sm text-slate-400 mt-1">Done / finished / enough</p>
                          </div>
                          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                            <p className="font-mono text-gold">"Yimkin"</p>
                            <p className="text-sm text-slate-400 mt-1">Maybe / perhaps</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                            <p className="font-mono text-gold">"Ahal"</p>
                            <p className="text-sm text-slate-400 mt-1">Family / relatives</p>
                          </div>
                          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                            <p className="font-mono text-gold">"Wahan"</p>
                            <p className="text-sm text-slate-400 mt-1">Go / leave (dialect)</p>
                          </div>
                          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                            <p className="font-mono text-gold">"Shu haalak"</p>
                            <p className="text-sm text-slate-400 mt-1">How are you? (Emirati)</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Government Tab - NEW from MD file */}
          <TabsContent value="government" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="UAE Government Structure" description="16th Cabinet formation July 2024">
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-gold-700/50 bg-gold-900/20 p-4 text-center backdrop-blur-sm"
                    >
                      <div className="text-3xl font-bold text-gold">{governmentKPI.governmentNumber}</div>
                      <p className="text-sm text-slate-400 mt-1">Government</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-navy-700/50 bg-navy-900/20 p-4 text-center backdrop-blur-sm"
                    >
                      <div className="text-3xl font-bold text-navy">{governmentKPI.cabinetSize}</div>
                      <p className="text-sm text-slate-400 mt-1">Cabinet Members</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4 text-center backdrop-blur-sm"
                    >
                      <div className="text-3xl font-bold text-emerald-400">{governmentKPI.ministriesNew}</div>
                      <p className="text-sm text-slate-400 mt-1">New Ministries</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-platinum-700/50 bg-platinum-900/20 p-4 text-center backdrop-blur-sm"
                    >
                      <div className="text-lg font-bold text-platinum">July 14, 2024</div>
                      <p className="text-sm text-slate-400 mt-1">Formation Date</p>
                    </motion.div>
                  </div>

                  <Card className="glass-card border-glass-border backdrop-blur-lg bg-glass-surface/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Users className="h-5 w-5 text-gold" />
                        Employment Metrics by Sector (AED/month)
                      </CardTitle>
                      <CardDescription>Average salaries from job aggregation data</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={employmentMetrics}
                        xAxisKey="role"
                        bars={[
                          { dataKey: 'salary', name: 'Salary (AED)', color: CHART_COLORS.gold },
                        ]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </div>
  )
}