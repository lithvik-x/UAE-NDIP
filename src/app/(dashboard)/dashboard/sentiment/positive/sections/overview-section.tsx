'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { AreaChart, BarChart, LineChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Shield,
  Heart,
  Lightbulb,
  TrendingUp,
  Users,
  Award,
  Globe,
  Target,
  CheckCircle2,
  Zap,
  DollarSign,
  Flag,
} from 'lucide-react'
import {
  positiveSentimentOverview,
  keyQuantitativeHighlights,
  monthlyPositiveTrend,
  yearlyPositiveComparison,
  positiveSentimentMetrics,
  positiveSourceCredibilityMatrix,
  positiveUAERelevanceAssessment,
  narrativeThemeValidation,
} from '@/lib/data-loader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const HIGHLIGHT_ICONS: Record<string, React.ElementType> = {
  '86.0 Safety Index': Shield,
  '$1.46B Humanitarian': Heart,
  '200+ Nationalities': Users,
  '#1 Entrepreneurship': Target,
  '220+ Global Rankings': Award,
  '2027 AI Government': Zap,
}

export function OverviewSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants}>
        <Badge variant="outline" className="mb-2 border-emerald-500/50 text-emerald-400">
          EXECUTIVE SUMMARY
        </Badge>
        <h2 className="text-2xl font-bold font-rajdhani text-platinum-100">
          Positive Sentiment Intelligence Overview
        </h2>
        <p className="text-sm text-platinum-400 mt-1">
          Comprehensive SSOT from 14 atomic queries and 12/14 successful WebFetch retrievals (85.7%)
        </p>
      </motion.div>

      {/* Research Metadata */}
      <motion.div variants={itemVariants}>
        <Card className="glass-card border-emerald-500/20">
          <CardContent className="p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400">14</p>
                  <p className="text-xs text-platinum-500">Atomic Queries</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <Globe className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400">14</p>
                  <p className="text-xs text-platinum-500">URLs Fetched</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400">12</p>
                  <p className="text-xs text-platinum-500">Successful Retrievals</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20">
                  <Award className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold-400">85.7%</p>
                  <p className="text-xs text-platinum-500">Retrieval Rate</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Key Highlights */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Key Quantitative Highlights"
          description="Critical metrics defining UAE's positive sentiment narrative"
          badge="CRITICAL KPIs"
          className="border-emerald-500/30"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            <MetricCard
              title="Safety Index"
              value="86.0"
              icon={<Shield className="h-5 w-5" />}
              gradient="emerald"
              status="success"
            />
            <MetricCard
              title="Humanitarian Aid"
              value="$1.46B"
              icon={<Heart className="h-5 w-5" />}
              gradient="rose"
              status="success"
            />
            <MetricCard
              title="Global Aid Share"
              value="7.2%"
              icon={<Globe className="h-5 w-5" />}
              gradient="rose"
            />
            <MetricCard
              title="Nationalities"
              value="200+"
              icon={<Users className="h-5 w-5" />}
              gradient="purple"
              status="success"
            />
            <MetricCard
              title="Global Rankings"
              value="220+"
              icon={<Award className="h-5 w-5" />}
              gradient="denim"
              status="success"
            />
            <MetricCard
              title="AI Government"
              value="2027"
              icon={<Zap className="h-5 w-5" />}
              gradient="gold"
            />
          </div>
        </GlassPanel>
      </motion.div>

      {/* Charts Row */}
      <motion.div variants={itemVariants}>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Monthly Positive Trend */}
          <Card className="glass-card border-emerald-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-emerald-400">
                Positive Sentiment Monthly Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChart
                data={monthlyPositiveTrend}
                xAxisKey="month"
                areas={[
                  {
                    dataKey: 'positive',
                    name: 'Positive %',
                    color: CHART_COLORS.emerald,
                    fillOpacity: 0.4,
                  },
                ]}
                height={240}
                showGrid={false}
              />
            </CardContent>
          </Card>

          {/* Year-over-Year Comparison */}
          <Card className="glass-card border-gold-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gold-400">
                Year-over-Year Positive Sentiment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={yearlyPositiveComparison}
                bars={[
                  {
                    dataKey: 'positive',
                    name: 'Positive %',
                    color: CHART_COLORS.gold,
                  },
                ]}
                xAxisKey="year"
                height={240}
                showGrid={false}
              />
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Source Credibility Matrix */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Source Credibility Matrix"
          description="8 verified sources with Tier 1-3 credibility ratings"
          badge="VERIFIED"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {positiveSourceCredibilityMatrix.map((source) => (
              <motion.div
                key={source.source}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className={`flex items-center gap-3 p-3 rounded-xl bg-glass-surface border backdrop-blur-sm transition-all ${
                  source.tier === 1
                    ? 'border-emerald-500/30 hover:border-emerald-500/50'
                    : source.tier === 2
                    ? 'border-gold-500/30 hover:border-gold-500/50'
                    : 'border-deni-500/30 hover:border-deni-500/50'
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    source.tier === 1
                      ? 'bg-emerald-500/20'
                      : source.tier === 2
                      ? 'bg-gold-500/20'
                      : 'bg-deni-500/20'
                  }`}
                >
                  <Globe
                    className={`h-4 w-4 ${
                      source.tier === 1
                        ? 'text-emerald-400'
                        : source.tier === 2
                        ? 'text-gold-400'
                        : 'text-deni-400'
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-platinum-200 truncate">
                    {source.source.split('(')[0].trim()}
                  </p>
                  <p className="text-xs text-platinum-500">{source.reliability}</p>
                </div>
                <Badge
                  variant="outline"
                  className={`shrink-0 text-xs ${
                    source.tier === 1
                      ? 'border-emerald-500/50 text-emerald-400'
                      : source.tier === 2
                      ? 'border-gold-500/50 text-gold-400'
                      : 'border-deni-500/50 text-deni-400'
                  }`}
                >
                  T{source.tier}
                </Badge>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* UAE Relevance Assessment */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="UAE Relevance Assessment"
          description="8 critical/high relevance data points for UAE's global positioning"
          badge="STRATEGIC"
        >
          <div className="space-y-3">
            {positiveUAERelevanceAssessment.slice(0, 8).map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex items-center gap-3 p-3 rounded-xl border backdrop-blur-sm ${
                  item.relevance === 'Critical'
                    ? 'bg-emerald-500/5 border-emerald-500/20'
                    : 'bg-gold-500/5 border-gold-500/20'
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    item.relevance === 'Critical'
                      ? 'bg-emerald-500/20'
                      : 'bg-gold-500/20'
                  }`}
                >
                  <Target
                    className={`h-4 w-4 ${
                      item.relevance === 'Critical'
                        ? 'text-emerald-400'
                        : 'text-gold-400'
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-platinum-200 truncate">
                    {item.dataPoint}
                  </p>
                  <p className="text-xs text-platinum-500 truncate">{item.rationale}</p>
                </div>
                <Badge
                  variant="outline"
                  className={`shrink-0 text-xs ${
                    item.relevance === 'Critical'
                      ? 'border-emerald-500/50 text-emerald-400'
                      : 'border-gold-500/50 text-gold-400'
                  }`}
                >
                  {item.relevance}
                </Badge>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Narrative Theme Validation */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Narrative Theme Validation Matrix"
          description="10 themes cross-referenced with verified data points"
          badge="VALIDATED"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {narrativeThemeValidation.map((theme) => (
              <motion.div
                key={theme.theme}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="p-3 rounded-xl bg-glass-surface border border-glass-border backdrop-blur-sm text-center hover:border-emerald-500/30 transition-all"
              >
                <p className="text-sm font-medium text-platinum-200 mb-2">{theme.theme}</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-platinum-500">Data Points:</span>
                    <span className="text-emerald-400 font-medium">{theme.dataPoints}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-platinum-500">Consistency:</span>
                    <span
                      className={`font-medium ${
                        theme.sourceConsistency === 'Very High'
                          ? 'text-emerald-400'
                          : 'text-gold-400'
                      }`}
                    >
                      {theme.sourceConsistency === 'Very High' ? 'Very High' : 'High'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}
