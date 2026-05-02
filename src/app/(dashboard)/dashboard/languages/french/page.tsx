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
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  Plane,
  Building2,
  TrendingUp,
  MessageSquare,
  Eye,
  Users,
  BookOpen,
  Star,
  Shield,
  Atom,
  Cpu,
  Landmark,
  Briefcase,
  GraduationCap,
  Heart,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useFrenchQueriesData,
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
  transition: { duration: 0.2 },
}

// ============================================================================
// ENHANCEMENT CYCLE A: Premium Header with Glassmorphism
// ============================================================================
function EnhancedHeader() {
  return (
    <motion.div
      className="flex items-start justify-between"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Badge variant="indigo" className="mb-2 bg-gradient-to-r from-indigo/20 to-indigo/10 border-indigo-500/30">
            <Globe className="w-3 h-3 mr-1" />
            FRENCH
          </Badge>
        </motion.div>
        <motion.h1
          className="text-3xl font-extrabold gradient-text-indigo-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          French Language Presence
        </motion.h1>
        <motion.p
          className="text-platinum-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Francophone community intelligence, defense relations, and cultural exchanges
        </motion.p>
      </div>
      <motion.div
        className="flex gap-3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          variant="outline"
          className="gap-2 border-indigo-500/50 text-indigo-500 hover:bg-indigo-500/10 backdrop-blur-sm"
        >
          <Eye className="h-4 w-4" />
          Monitor French
        </Button>
        <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2 shadow-lg shadow-indigo/25">
          <Globe className="h-4 w-4" />
          Track Relations
        </Button>
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE B: Animated Metric Cards Grid
// ============================================================================
function EnhancedMetricsGrid({ data }: { data: any }) {
  const metrics = [
    {
      title: 'French Query Volume',
      value: (data?.queryVolume / 1000000).toFixed(1) + 'M',
      previousValue: 8.5,
      icon: <Globe className="h-6 w-6" />,
      gradient: 'indigo',
      status: 'success' as const,
    },
    {
      title: 'French Speakers UAE',
      value: (data?.uaeSpeakerPopulation / 1000).toFixed(0) + 'K',
      icon: <Users className="h-6 w-6" />,
      gradient: 'gold',
      status: 'success' as const,
    },
    {
      title: 'Sentiment Score',
      value: data?.sentiment?.overall || 82,
      previousValue: 80,
      icon: <Star className="h-6 w-6" />,
      gradient: 'emerald',
      status: 'success' as const,
    },
    {
      title: 'Bilateral Trade',
      value: '€10.8B',
      previousValue: 8.5,
      icon: <TrendingUp className="h-6 w-6" />,
      gradient: 'denim',
      status: 'success' as const,
    },
  ]

  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          variants={fadeInUp}
          {...scaleHover}
        >
          <MetricCard
            title={metric.title}
            value={metric.value}
            previousValue={metric.previousValue}
            icon={metric.icon}
            gradient={metric.gradient}
            status={metric.status}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE C: Enhanced Chart Panels with Glassmorphism
// ============================================================================
function EnhancedOverviewCharts({ volumeTrend, sentimentData }: { volumeTrend: any[]; sentimentData: any[] }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.Card
          className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          {...scaleHover}
        >
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-500" />
              Query Volume Trend
            </CardTitle>
            <CardDescription className="text-platinum-400">
              Monthly French searches (millions)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AreaChart
              data={volumeTrend}
              xAxisKey="month"
              areas={[
                { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.indigo },
              ]}
              height={280}
              showGrid={true}
            />
          </CardContent>
        </motion.Card>

        <motion.Card
          className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          {...scaleHover}
        >
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Heart className="w-5 h-5 text-emerald-500" />
              Sentiment Distribution
            </CardTitle>
            <CardDescription className="text-platinum-400">
              French content sentiment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart
              data={sentimentData}
              height={280}
              showLegend={true}
            />
          </CardContent>
        </motion.Card>
      </div>
    </div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE D: Defense Relations with Motion
// ============================================================================
function EnhancedDefenseTab({ defenseTerms, defenseTrend }: { defenseTerms: any[]; defenseTrend: any[] }) {
  return (
    <motion.div
      className="space-y-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.Card
        className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
        variants={fadeInUp}
        {...scaleHover}
      >
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="w-5 h-5 text-navy-500" />
            Defense-Related Searches
          </CardTitle>
          <CardDescription className="text-platinum-400">
            Military and strategic content queries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {defenseTerms.map((item: any, index: number) => (
              <motion.div
                key={index}
                className="flex items-center justify-between rounded-lg border border-navy-700/50 bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy-500">
                    <Plane className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-platinum-200">{item.term}</p>
                    {getCategoryBadge(item.category)}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-platinum-200">
                      {(item.volume / 1000000).toFixed(1)}M
                    </div>
                    <p className="text-xs text-platinum-400">Volume</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold ${getSentimentColor(item.sentiment)}`}>
                      {item.sentiment}%
                    </div>
                    <p className="text-xs text-platinum-400">Sentiment</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </motion.Card>

      <motion.Card
        className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
        variants={fadeInUp}
        {...scaleHover}
      >
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Atom className="w-5 h-5 text-indigo-500" />
            Defense Sentiment Trend
          </CardTitle>
          <CardDescription className="text-platinum-400">
            12-month defense content sentiment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LineChart
            data={defenseTrend}
            xAxisKey="month"
            lines={[
              { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.navy },
            ]}
            height={280}
            showGrid={true}
          />
        </CardContent>
      </motion.Card>

      <motion.Card
        className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
        variants={fadeInUp}
        {...scaleHover}
      >
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="w-5 h-5 text-gold-700" />
            Key Defense Indicators
          </CardTitle>
          <CardDescription className="text-platinum-400">
            Strategic cooperation metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            <motion.div
              className="rounded-lg border border-navy-700/50 bg-navy-900/20 p-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-navy-500">Rafale</div>
              <p className="text-sm text-platinum-400 mt-1">Fighter Aircraft Deal</p>
              <Badge variant="denim" className="mt-2">Active</Badge>
            </motion.div>
            <motion.div
              className="rounded-lg border border-navy-700/50 bg-navy-900/20 p-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-navy-500">Al Dhafra</div>
              <p className="text-sm text-platinum-400 mt-1">French Military Base</p>
              <Badge variant="denim" className="mt-2">Operational</Badge>
            </motion.div>
            <motion.div
              className="rounded-lg border border-navy-700/50 bg-navy-900/20 p-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-navy-500">€16B</div>
              <p className="text-sm text-platinum-400 mt-1">Defense Contracts</p>
              <Badge variant="gold" className="mt-2">Rising</Badge>
            </motion.div>
          </div>
        </CardContent>
      </motion.Card>
    </motion.div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE E: Business & AI Tab with Premium Design
// ============================================================================
function EnhancedBusinessTab({ businessTerms, sourceData }: { businessTerms: any[]; sourceData: any[] }) {
  return (
    <motion.div
      className="space-y-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.Card
        className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
        variants={fadeInUp}
        {...scaleHover}
      >
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-gold-700" />
            Business & Trade Searches
          </CardTitle>
          <CardDescription className="text-platinum-400">
            Commercial relationship queries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {businessTerms.map((item: any, index: number) => (
              <motion.div
                key={index}
                className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700/20 text-gold-700">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-platinum-200">{item.term}</p>
                    {getCategoryBadge(item.category)}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-platinum-200">
                      {(item.volume / 1000000).toFixed(1)}M
                    </div>
                    <p className="text-xs text-platinum-400">Volume</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold ${getSentimentColor(item.sentiment)}`}>
                      {item.sentiment}%
                    </div>
                    <p className="text-xs text-platinum-400">Sentiment</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </motion.Card>

      <motion.Card
        className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
        variants={fadeInUp}
        {...scaleHover}
      >
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-500" />
            AI Partnership KPIs
          </CardTitle>
          <CardDescription className="text-platinum-400">
            France-UAE artificial intelligence cooperation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              className="rounded-lg border border-indigo-700/50 bg-indigo-900/20 p-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-indigo-500">€30B</div>
              <p className="text-sm text-platinum-400 mt-1">UAE Investment</p>
              <Badge variant="indigo" className="mt-2">AI Infrastructure</Badge>
            </motion.div>
            <motion.div
              className="rounded-lg border border-indigo-700/50 bg-indigo-900/20 p-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-indigo-500">1.4 GW</div>
              <p className="text-sm text-platinum-400 mt-1">AI Campus Capacity</p>
              <Badge variant="indigo" className="mt-2">Île-de-France</Badge>
            </motion.div>
            <motion.div
              className="rounded-lg border border-indigo-700/50 bg-indigo-900/20 p-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-indigo-500">2028</div>
              <p className="text-sm text-platinum-400 mt-1">Operations Launch</p>
              <Badge variant="indigo" className="mt-2">Planned</Badge>
            </motion.div>
            <motion.div
              className="rounded-lg border border-indigo-700/50 bg-indigo-900/20 p-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-indigo-500">G42 + Mistral</div>
              <p className="text-sm text-platinum-400 mt-1">Partnership</p>
              <Badge variant="gold" className="mt-2">May 2025</Badge>
            </motion.div>
          </div>
        </CardContent>
      </motion.Card>

      <motion.Card
        className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
        variants={fadeInUp}
        {...scaleHover}
      >
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            Top French Media Sources
          </CardTitle>
          <CardDescription className="text-platinum-400">
            Most accessed French-language sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[250px]">
            <div className="space-y-3">
              {sourceData.map((source: any, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-500">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-platinum-200">{source.source}</p>
                      <Badge variant="outline" className="text-xs">{source.tier}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-bold ${getSentimentColor(source.sentiment)}`}>
                      {source.sentiment}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </motion.Card>
    </motion.div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE F: Culture & Community with Premium Design
// ============================================================================
function EnhancedCultureTab({ cultureTerms, culturalInstitutions }: { cultureTerms: any[]; culturalInstitutions: any[] }) {
  return (
    <motion.div
      className="space-y-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.Card
        className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
        variants={fadeInUp}
        {...scaleHover}
      >
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-fuchsia-500" />
            Culture & Education Searches
          </CardTitle>
          <CardDescription className="text-platinum-400">
            French cultural and educational content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {cultureTerms.map((item: any, index: number) => (
              <motion.div
                key={index}
                className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-500/20 text-fuchsia-500">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-platinum-200">{item.term}</p>
                    {getCategoryBadge(item.category)}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-platinum-200">
                      {(item.volume / 1000000).toFixed(1)}M
                    </div>
                    <p className="text-xs text-platinum-400">Volume</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold ${getSentimentColor(item.sentiment)}`}>
                      {item.sentiment}%
                    </div>
                    <p className="text-xs text-platinum-400">Sentiment</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </motion.Card>

      <motion.Card
        className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
        variants={fadeInUp}
        {...scaleHover}
      >
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Landmark className="w-5 h-5 text-fuchsia-500" />
            French Cultural Institutions
          </CardTitle>
          <CardDescription className="text-platinum-400">
            Active French cultural presence in UAE
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {culturalInstitutions.map((inst: any, index: number) => (
              <motion.div
                key={index}
                className="rounded-lg border border-fuchsia-700/50 bg-fuchsia-900/20 p-4"
                whileHover={{ scale: 1.03 }}
              >
                <Badge variant="fuchsia" className="mb-2">{inst.name}</Badge>
                <p className="text-sm text-platinum-300">{inst.description}</p>
                <p className="text-xs text-platinum-400 mt-2">{inst.since}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </motion.Card>
    </motion.div>
  )
}

function EnhancedCommunityTab({ communitySegments, populationTrend }: { communitySegments: any[]; populationTrend: any[] }) {
  return (
    <motion.div
      className="space-y-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.Card
        className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
        variants={fadeInUp}
        {...scaleHover}
      >
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-500" />
            Community Segments
          </CardTitle>
          <CardDescription className="text-platinum-400">
            French-speaking population breakdown
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PieChart
            data={communitySegments.map((s: any, i: number) => ({
              name: s.segment,
              value: s.percentage,
              color: [CHART_COLORS.navy, CHART_COLORS.gold, CHART_COLORS.indigo, CHART_COLORS.fuchsia][i],
            }))}
            height={300}
            showLegend={true}
          />
        </CardContent>
      </motion.Card>

      <motion.Card
        className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
        variants={fadeInUp}
        {...scaleHover}
      >
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-indigo-500" />
            Community Statistics
          </CardTitle>
          <CardDescription className="text-platinum-400">
            French-speaking population details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {communitySegments.map((segment: any, index: number) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-platinum-200">{segment.segment}</span>
                  <span className="text-platinum-500">{segment.population.toLocaleString()} people</span>
                </div>
                <Progress value={segment.percentage} className="h-3" />
              </motion.div>
            ))}
          </div>
        </CardContent>
      </motion.Card>

      <motion.Card
        className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
        variants={fadeInUp}
        {...scaleHover}
      >
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
            Growth Trends
          </CardTitle>
          <CardDescription className="text-platinum-400">
            Community growth indicators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart
            data={populationTrend}
            xAxisKey="year"
            bars={[
              { dataKey: 'population', name: 'Population', color: CHART_COLORS.indigo },
            ]}
            height={250}
            showGrid={true}
          />
        </CardContent>
      </motion.Card>
    </motion.div>
  )
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================
function getSentimentColor(score: number) {
  if (score >= 70) return 'text-emerald-400'
  if (score >= 50) return 'text-amber-400'
  return 'text-red-400'
}

function getCategoryBadge(category: string) {
  switch (category) {
    case 'Defense': return <Badge variant="denim" className="text-xs">{category}</Badge>
    case 'Military': return <Badge variant="denim" className="text-xs">{category}</Badge>
    case 'Trade': return <Badge variant="gold" className="text-xs">{category}</Badge>
    case 'Business': return <Badge variant="emerald" className="text-xs">{category}</Badge>
    case 'Diplomacy': return <Badge variant="default" className="text-xs">{category}</Badge>
    case 'Culture': return <Badge variant="fuchsia" className="text-xs">{category}</Badge>
    case 'Education': return <Badge variant="indigo" className="text-xs">{category}</Badge>
    case 'Tourism': return <Badge variant="cyan" className="text-xs">{category}</Badge>
    default: return <Badge variant="outline" className="text-xs">{category}</Badge>
  }
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function FrenchLanguagePage() {
  const { data } = useFrenchQueriesData()

  // French Query volume trend
  const volumeTrend = [
    { month: 'Jan', volume: 7.8, growth: 3.2 },
    { month: 'Feb', volume: 8.1, growth: 3.8 },
    { month: 'Mar', volume: 8.4, growth: 3.7 },
    { month: 'Apr', volume: 8.6, growth: 2.4 },
    { month: 'May', volume: 8.8, growth: 2.3 },
    { month: 'Jun', volume: 8.7, growth: -1.1 },
    { month: 'Jul', volume: 8.8, growth: 1.1 },
    { month: 'Aug', volume: 8.9, growth: 1.1 },
    { month: 'Sep', volume: 9.0, growth: 1.1 },
    { month: 'Oct', volume: 9.1, growth: 1.1 },
    { month: 'Nov', volume: 8.9, growth: -2.2 },
    { month: 'Dec', volume: 8.9, growth: 0 },
  ]

  // Sentiment distribution
  const sentimentData = [
    { name: 'Positive', value: 82, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 12, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 6, color: CHART_COLORS.danger },
  ]

  // Defense & Strategic terms
  const defenseTerms = [
    { term: 'Rafale fighter jets UAE deal', volume: 2100000, sentiment: 88, category: 'Defense' },
    { term: 'French base UAE Al Dhafra', volume: 1900000, sentiment: 85, category: 'Military' },
    { term: 'France UAE defense cooperation', volume: 1300000, sentiment: 82, category: 'Defense' },
  ]

  // Defense sentiment trend
  const defenseTrend = [
    { month: 'Jan', sentiment: 82 },
    { month: 'Feb', sentiment: 84 },
    { month: 'Mar', sentiment: 85 },
    { month: 'Apr', sentiment: 83 },
    { month: 'May', sentiment: 86 },
    { month: 'Jun', sentiment: 84 },
    { month: 'Jul', sentiment: 85 },
    { month: 'Aug', sentiment: 86 },
    { month: 'Sep', sentiment: 85 },
    { month: 'Oct', sentiment: 87 },
    { month: 'Nov', sentiment: 85 },
    { month: 'Dec', sentiment: 85 },
  ]

  // Business & Trade terms
  const businessTerms = [
    { term: 'UAE France bilateral trade 2025', volume: 2400000, sentiment: 86, category: 'Trade' },
    { term: 'French entrepreneurs Dubai', volume: 1700000, sentiment: 84, category: 'Business' },
    { term: 'Paris Abu Dhabi alliance', volume: 1100000, sentiment: 80, category: 'Diplomacy' },
  ]

  // Source distribution
  const sourceData = [
    { source: 'Le Figaro', tier: 'Tier 2', sentiment: 84, credibility: 88 },
    { source: 'Les Echos', tier: 'Tier 2', sentiment: 82, credibility: 86 },
    { source: 'French Ministry', tier: 'Tier 1', sentiment: 90, credibility: 95 },
    { source: 'French Embassy', tier: 'Tier 1', sentiment: 88, credibility: 92 },
  ]

  // Culture & Education terms
  const cultureTerms = [
    { term: 'French cultural center Dubai', volume: 1400000, sentiment: 88, category: 'Culture' },
    { term: 'French schools Abu Dhabi', volume: 1500000, sentiment: 75, category: 'Education' },
    { term: 'French language UAE schools', volume: 1000000, sentiment: 72, category: 'Education' },
    { term: 'French tourism UAE statistics', volume: 1200000, sentiment: 86, category: 'Tourism' },
  ]

  // Cultural institutions
  const culturalInstitutions = [
    { name: 'Alliance Francaise', description: 'French cultural center in Dubai', since: 'Founded 1977' },
    { name: 'French School Dubai', description: 'Lycee Francais de Dubai', since: '500+ students' },
    { name: 'Institut Francais', description: 'French Institute Abu Dhabi', since: 'Cultural programs' },
    { name: 'Sorbonne Abu Dhabi', description: 'Part of Sorbonne University Paris', since: 'Since 2006' },
  ]

  // Community segments
  const communitySegments = [
    { segment: 'French Expatriates', percentage: 45, population: 54000 },
    { segment: 'Business Professionals', percentage: 30, population: 36000 },
    { segment: 'Students', percentage: 15, population: 18000 },
    { segment: 'Diplomatic/Government', percentage: 10, population: 12000 },
  ]

  // Population trend
  const populationTrend = [
    { year: '2022', population: 105000 },
    { year: '2023', population: 112000 },
    { year: '2024', population: 118000 },
    { year: '2025', population: 120000 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* ENHANCEMENT A: Premium Header */}
      <EnhancedHeader />

      {/* ENHANCEMENT B: Animated Metrics Grid */}
      <EnhancedMetricsGrid data={data} />

      <AnimatePresence mode="wait">
        <Tabs defaultValue="overview" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <TabsList className="glass-panel" scrollable>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="defense">Defense Relations</TabsTrigger>
              <TabsTrigger value="business">Business & Trade</TabsTrigger>
              <TabsTrigger value="culture">Culture & Education</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Overview Tab - ENHANCEMENT C: Enhanced Chart Panels */}
          <TabsContent value="overview" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GlassPanel title="French Language Overview" description="Francophone presence in UAE">
                <div className="space-y-6">
                  <EnhancedOverviewCharts volumeTrend={volumeTrend} sentimentData={sentimentData} />

                  <motion.Card
                    className="glass-card border-glass-border bg-glass-surface/50 backdrop-blur-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    {...scaleHover}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-gold-700" />
                        Topic Distribution
                      </CardTitle>
                      <CardDescription className="text-platinum-400">
                        French content by category
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <motion.div
                          className="rounded-lg border border-navy-700/50 bg-navy-900/20 p-4 text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-3xl font-bold text-navy-500">25%</div>
                          <p className="text-sm text-platinum-400 mt-1">Defense</p>
                        </motion.div>
                        <motion.div
                          className="rounded-lg border border-gold-700/50 bg-gold-900/20 p-4 text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-3xl font-bold text-gold-700">30%</div>
                          <p className="text-sm text-platinum-400 mt-1">Trade</p>
                        </motion.div>
                        <motion.div
                          className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4 text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-3xl font-bold text-emerald-400">25%</div>
                          <p className="text-sm text-platinum-400 mt-1">Business</p>
                        </motion.div>
                        <motion.div
                          className="rounded-lg border border-fuchsia-700/50 bg-fuchsia-900/20 p-4 text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-3xl font-bold text-fuchsia-400">20%</div>
                          <p className="text-sm text-platinum-400 mt-1">Culture</p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </motion.Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Defense Tab - ENHANCEMENT D: Defense Relations with Motion */}
          <TabsContent value="defense" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GlassPanel title="Defense & Strategic Relations" description="France-UAE military and defense cooperation">
                <EnhancedDefenseTab defenseTerms={defenseTerms} defenseTrend={defenseTrend} />
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Business Tab - ENHANCEMENT E: Business & AI */}
          <TabsContent value="business" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GlassPanel title="Business & Trade Relations" description="French-UAE commercial partnerships">
                <EnhancedBusinessTab businessTerms={businessTerms} sourceData={sourceData} />
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Culture Tab - ENHANCEMENT F: Culture & Community */}
          <TabsContent value="culture" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GlassPanel title="Culture & Education" description="French cultural institutions and educational presence">
                <EnhancedCultureTab cultureTerms={cultureTerms} culturalInstitutions={culturalInstitutions} />
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Community Tab - ENHANCEMENT F: Community */}
          <TabsContent value="community" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GlassPanel title="French Community" description="Francophone population segments in UAE">
                <EnhancedCommunityTab communitySegments={communitySegments} populationTrend={populationTrend} />
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </Tabs>
      </AnimatePresence>
    </div>
  )
}
