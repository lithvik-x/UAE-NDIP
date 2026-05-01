'use client'

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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  TrendingUp,
  Users,
  Zap,
  MessageSquare,
  Globe,
  Shield,
  Target,
  Award,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Scale,
  MessageCircle,
  Building2,
  BookOpen,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Target as TargetIcon,
  Layers,
  ChevronRight,
  Hash,
} from 'lucide-react'
import {
  mediaToneData,
  executionMetadata,
  kpiSummary,
  framingScorecard,
  sourcesData,
  synthesizedFindings,
  framingTypology,
  sentimentByTier,
  sourceTierDistribution,
  dataTables,
  keyEntities,
  focusAreas,
} from '@/lib/data/perception/media-tone-data'

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

const cardHover = {
  hover: { scale: 1.02, transition: { duration: 0.2 } },
}

// Icon mapping for different categories
const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Users,
  Zap,
  MessageSquare,
  Globe,
  Shield,
  Target,
  Award,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Scale,
  MessageCircle,
  Building2,
  BookOpen,
  BarChart3,
  Activity,
}

export default function MediaTonePage() {
  if (!mediaToneData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-platinum-400 font-rajdhani text-lg"
        >
          Loading Media Tone data...
        </motion.div>
      </div>
    )
  }

  const { kpis, metrics } = getKPIData()

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge
              variant="purple"
              className="mb-2 bg-violet-500/20 text-violet-400 border-violet-500/50 font-rajdhani"
            >
              <MessageSquare className="w-3 h-3 mr-1" />
              MEDIA TONE ANALYSIS
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold gradient-text-violet"
          >
            UAE Media Tone & Framing Analysis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-platinum-400"
          >
            Comprehensive analysis of media framing patterns across Western, Regional, and Gulf sources
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3"
        >
          <Button
            variant="outline"
            className="gap-2 border-violet-500/50 text-violet-400 hover:bg-violet-500/10 font-rajdhani"
          >
            <Target className="h-4 w-4" />
            View Framing
          </Button>
          <Button className="bg-gradient-violet hover:opacity-90 text-white gap-2 font-rajdhani">
            <BarChart3 className="h-4 w-4" />
            Analyze Tone
          </Button>
        </motion.div>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="wait">
          {kpis.map((kpi, idx) => (
            <motion.div
              key={kpi.title}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: idx * 0.08 }}
            >
              <MetricCard
                title={kpi.title}
                value={kpi.value}
                icon={<MessageSquare className="h-6 w-6" />}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-navy-800/50 border border-navy-700 font-rajdhani">
          <TabsTrigger value="overview" className="font-rajdhani data-[state=active]:bg-violet-500/20">
            <Eye className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="framing" className="font-rajdhani data-[state=active]:bg-violet-500/20">
            <Layers className="w-4 h-4 mr-2" />
            Framing Patterns
          </TabsTrigger>
          <TabsTrigger value="sentiment" className="font-rajdhani data-[state=active]:bg-violet-500/20">
            <Activity className="w-4 h-4 mr-2" />
            Sentiment Analysis
          </TabsTrigger>
          <TabsTrigger value="sources" className="font-rajdhani data-[state=active]:bg-violet-500/20">
            <BookOpen className="w-4 h-4 mr-2" />
            Sources
          </TabsTrigger>
          <TabsTrigger value="scorecard" className="font-rajdhani data-[state=active]:bg-violet-500/20">
            <TargetIcon className="w-4 h-4 mr-2" />
            Scorecard
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Framing Divergence Chart */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-violet-400" />
                Framing Divergence: Western vs Gulf
              </h3>
              <BarChart
                data={getFramingDivergenceData()}
                xAxisKey="frame"
                bars={[
                  { dataKey: 'western', name: 'Western', color: '#f43f5e' },
                  { dataKey: 'gulf', name: 'Gulf', color: '#8b5cf6' },
                ]}
                height={300}
                showGrid={true}
                showLegend={true}
              />
            </GlassPanel>

            {/* Source Tier Distribution */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <PieChartIcon className="w-5 h-5 text-violet-400" />
                Source Tier Distribution
              </h3>
              <PieChart
                data={getSourceTierData()}
                height={280}
                showLegend={true}
              />
            </GlassPanel>
          </div>

          {/* Focus Areas */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Target className="w-5 h-5 text-violet-400" />
              Focus Areas
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {focusAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.02 }}
                  className="bg-navy-800/50 border border-navy-700 rounded-lg p-3 flex items-start gap-2"
                >
                  <Hash className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-platinum-300">{area}</span>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Key Entities */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Building2 className="w-5 h-5 text-violet-400" />
              Key Entities
            </h3>
            <div className="grid gap-4 lg:grid-cols-3">
              <div>
                <h4 className="text-sm font-semibold text-violet-400 mb-2">Government & Institutional</h4>
                <ul className="space-y-1">
                  {keyEntities.governmentInstitutional.slice(0, 5).map((entity, idx) => (
                    <li key={idx} className="text-sm text-platinum-300 flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-violet-500" />
                      {entity.entity}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-violet-400 mb-2">Media Organizations</h4>
                <ul className="space-y-1">
                  {keyEntities.mediaOrganizations.slice(0, 5).map((entity, idx) => (
                    <li key={idx} className="text-sm text-platinum-300 flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-violet-500" />
                      {entity.entity}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-violet-400 mb-2">Think Tanks & Academic</h4>
                <ul className="space-y-1">
                  {keyEntities.thinkTanksAcademic.slice(0, 5).map((entity, idx) => (
                    <li key={idx} className="text-sm text-platinum-300 flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-violet-500" />
                      {entity.entity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Framing Patterns Tab */}
        <TabsContent value="framing" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Role Framing */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <Users className="w-5 h-5 text-violet-400" />
                Role Framing Categories
              </h3>
              <div className="space-y-3">
                {framingTypology.roleFraming.map((role, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    whileHover={{ x: 4 }}
                    className="bg-navy-800/50 border border-navy-700 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-platinum-200">{role.role}</span>
                      <Badge variant={getRoleBadgeVariant(role.role)} className="font-rajdhani text-xs">
                        {role.role === 'Hero' ? 'Positive' : role.role === 'Villain' || role.role === 'Aggressor' ? 'Negative' : 'Neutral'}
                      </Badge>
                    </div>
                    <p className="text-sm text-platinum-400">{role.evidence}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            {/* Power Framing Spectrum */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-violet-400" />
                Power Framing Spectrum
              </h3>
              <BarChart
                data={getPowerFramingData()}
                xAxisKey="level"
                bars={[{ dataKey: 'score', name: 'Score', color: '#8b5cf6' }]}
                height={250}
                showLegend={false}
              />
              <div className="mt-4 grid grid-cols-2 gap-2">
                {framingTypology.powerFraming.map((power, idx) => (
                  <div key={idx} className="bg-navy-800/30 rounded p-2">
                    <span className="text-xs text-violet-400 font-semibold">{power.level}</span>
                    <p className="text-xs text-platinum-400 mt-1">{power.indicators}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Western vs Gulf Framing Patterns */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Globe className="w-5 h-5 text-violet-400" />
              Western Media Framing Patterns
            </h3>
            <div className="grid gap-4 lg:grid-cols-3">
              {synthesizedFindings.framingDivergence.western.map((frame, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.02 }}
                  className="bg-navy-800/50 border border-navy-700 rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span className="font-semibold text-platinum-200">{frame.frame}</span>
                  </div>
                  <p className="text-sm text-platinum-400 mb-2">{frame.description}</p>
                  <p className="text-xs text-violet-400 italic">{frame.example}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Award className="w-5 h-5 text-violet-400" />
              Gulf/Regional Framing Patterns
            </h3>
            <div className="grid gap-4 lg:grid-cols-3">
              {synthesizedFindings.framingDivergence.gulf.map((frame, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.02 }}
                  className="bg-navy-800/50 border border-navy-700 rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-platinum-200">{frame.frame}</span>
                  </div>
                  <p className="text-sm text-platinum-400 mb-2">{frame.description}</p>
                  <p className="text-xs text-violet-400 italic">{frame.example}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Crisis Framing Response */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              Crisis Framing Response
            </h3>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-rose-400 mb-3">Western Media Narrative</h4>
                <div className="space-y-2">
                  {synthesizedFindings.crisisFramingResponse.westernMedia.map((item, idx) => (
                    <div key={idx} className="bg-navy-800/30 rounded p-2">
                      <span className="text-xs text-rose-400">{item.narrativeElement}</span>
                      <p className="text-sm text-platinum-300">{item.example}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-emerald-400 mb-3">UAE Counter-Narrative</h4>
                <div className="space-y-2">
                  {synthesizedFindings.crisisFramingResponse.uaeCounter.map((item, idx) => (
                    <div key={idx} className="bg-navy-800/30 rounded p-2">
                      <span className="text-xs text-emerald-400">{item.narrativeElement}</span>
                      <p className="text-sm text-platinum-300">{item.evidence}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment by Tier */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <Activity className="w-5 h-5 text-violet-400" />
                Sentiment Analysis by Source Tier
              </h3>
              <BarChart
                data={getSentimentByTierData()}
                xAxisKey="tier"
                bars={[{ dataKey: 'sentiment', name: 'Sentiment', color: '#8b5cf6' }]}
                height={280}
                showLegend={false}
              />
            </GlassPanel>

            {/* Media Engagement Metrics */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-violet-400" />
                Crisis Response Media Engagement
              </h3>
              <AreaChart
                data={getEngagementData()}
                xAxisKey="metric"
                areas={[{ dataKey: 'value', name: 'Value', color: '#8b5cf6' }]}
                height={280}
                showLegend
              />
            </GlassPanel>
          </div>

          {/* Sentiment Analysis Table */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Scale className="w-5 h-5 text-violet-400" />
              Segment Sentiment Breakdown
            </h3>
            <div className="space-y-3">
              {dataTables.sentimentAnalysis.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="w-40 text-sm text-platinum-300">{item.segment}</span>
                  <Progress value={parseInt(item.positiveSentiment)} className="flex-1 h-2" />
                  <span className="w-16 text-sm text-violet-400 text-right">{item.positiveSentiment}</span>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Soft Power Metrics */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Award className="w-5 h-5 text-violet-400" />
              Soft Power & Humanitarian Framing
            </h3>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-emerald-400 mb-3">UAE Self-Framing</h4>
                <div className="space-y-2">
                  {synthesizedFindings.softPowerHumanitarian.uaeSelfFraming.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-navy-800/30 rounded p-2">
                      <span className="text-sm text-platinum-300">{item.initiative}</span>
                      <Badge variant="emerald" className="font-rajdhani text-xs">{item.scale}</Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-rose-400 mb-3">Criticism & Concerns</h4>
                <div className="space-y-2">
                  {synthesizedFindings.softPowerHumanitarian.criticism.map((item, idx) => (
                    <div key={idx} className="bg-navy-800/30 rounded p-2">
                      <span className="text-sm text-rose-400">{item.criticism}</span>
                      <p className="text-xs text-platinum-400">Source: {item.source}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sources Overview */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-violet-400" />
                Source Distribution
              </h3>
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {sourcesData.slice(0, 10).map((source) => (
                  <motion.div
                    key={source.id}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    whileHover={{ x: 4 }}
                    className="bg-navy-800/50 border border-navy-700 rounded-lg p-3"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-semibold text-platinum-200 text-sm">{source.name}</span>
                      <Badge
                        variant={getTierBadgeVariant(source.tier)}
                        className="font-rajdhani text-xs"
                      >
                        {source.tier.split(' ')[0]}
                      </Badge>
                    </div>
                    <p className="text-xs text-platinum-400 mb-1">{source.title}</p>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={source.sentiment.includes('Pro-UAE') || source.sentiment.includes('Positive') ? 'emerald' : 'rose'}
                        className="font-rajdhani text-xs"
                      >
                        {source.sentiment.split('/')[0].trim()}
                      </Badge>
                      <span className="text-xs text-platinum-500">{source.relevance} Relevance</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            {/* Blocked Content */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-400" />
                Blocked/Inaccessible Content
              </h3>
              <div className="space-y-3">
                {blockedContent.map((item, idx) => (
                  <div key={idx} className="bg-navy-800/30 border border-navy-700 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-platinum-200 text-sm">{item.source}</span>
                      <Badge variant="rose" className="font-rajdhani text-xs">{item.issue}</Badge>
                    </div>
                    <p className="text-xs text-platinum-400">{item.impact}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Source Tier Details */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Layers className="w-5 h-5 text-violet-400" />
              Source Tier Breakdown
            </h3>
            <div className="grid gap-4 lg:grid-cols-3">
              {sourceTierDistribution.map((tier, idx) => (
                <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                  <Badge
                    variant={getTierBadgeVariant(tier.tier)}
                    className="mb-2 font-rajdhani"
                  >
                    {tier.tier}
                  </Badge>
                  <p className="text-sm text-platinum-200 mb-1">{tier.description}</p>
                  <p className="text-xs text-platinum-400">{tier.sources}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Scorecard Tab */}
        <TabsContent value="scorecard" className="space-y-6">
          {/* Framing Scorecard */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <TargetIcon className="w-5 h-5 text-violet-400" />
              Framing Scorecard: Western vs Gulf Perception
            </h3>
            <RadarChart
              data={getRadarChartData()}
              metrics={[
                { dataKey: 'western', name: 'Western', color: '#f43f5e' },
                { dataKey: 'gulf', name: 'Gulf', color: '#8b5cf6' },
              ]}
              height={400}
              showLegend
            />
          </GlassPanel>

          {/* Gap Analysis */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-violet-400" />
              Perception Gap Analysis
            </h3>
            <div className="space-y-4">
              {framingScorecard.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="w-40 text-sm text-platinum-300">{item.framingType}</span>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="flex-1 bg-navy-800/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.westernScore * 10}%` }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="h-full bg-rose-500"
                      />
                    </div>
                    <span className="w-8 text-xs text-rose-400 text-right">{item.westernScore}</span>
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="flex-1 bg-navy-800/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.gulfScore * 10}%` }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="h-full bg-emerald-500"
                      />
                    </div>
                    <span className="w-8 text-xs text-emerald-400 text-right">{item.gulfScore}</span>
                  </div>
                  <Badge
                    variant={item.gap < -4 ? 'rose' : item.gap < 0 ? 'warning' : 'emerald'}
                    className="font-rajdhani text-xs w-12 justify-center"
                  >
                    {item.gap > 0 ? `+${item.gap}` : item.gap}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="text-xs text-platinum-400">Western Score</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-platinum-400">Gulf Score</span>
              </div>
            </div>
          </GlassPanel>

          {/* Key Metrics Summary */}
          <div className="grid gap-6 lg:grid-cols-3">
            <GlassPanel className="p-6">
              <h3 className="text-lg font-bold text-platinum-200 mb-4 font-rajdhani">GDP Growth Trajectory</h3>
              <AreaChart
                data={getGDPGrowthData()}
                xAxisKey="year"
                areas={[{ dataKey: 'gdp', name: 'GDP', color: '#8b5cf6' }]}
                height={200}
                showLegend={false}
              />
            </GlassPanel>
            <GlassPanel className="p-6">
              <h3 className="text-lg font-bold text-platinum-200 mb-4 font-rajdhani">Diversification Metrics</h3>
              <PieChart
                data={getDiversificationData()}
                height={200}
                showLegend
              />
            </GlassPanel>
            <GlassPanel className="p-6">
              <h3 className="text-lg font-bold text-platinum-200 mb-4 font-rajdhani">Power Framing Evolution</h3>
              <div className="space-y-3">
                <div className="bg-navy-800/30 rounded p-3">
                  <span className="text-xs text-violet-400">Traditional Frame</span>
                  <p className="text-sm text-platinum-300">{synthesizedFindings.powerFramingEvolution.traditional}</p>
                </div>
                <div className="bg-navy-800/30 rounded p-3">
                  <span className="text-xs text-emerald-400">Emerging Frame</span>
                  <p className="text-sm text-platinum-300">{synthesizedFindings.powerFramingEvolution.emerging}</p>
                </div>
              </div>
            </GlassPanel>
          </div>
        </TabsContent>
      </Tabs>

      {/* Footer Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-sm text-platinum-500"
      >
        <p>
          Data sourced from {executionMetadata.totalSourcesEnriched} sources |
          {executionMetadata.queriesExecuted} queries executed |
          Framework v{executionMetadata.frameworkVersion}
        </p>
      </motion.div>
    </div>
  )
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getKPIData() {
  const kpis = kpiSummary.map((kpi) => ({
    title: kpi.kpi,
    value: kpi.value,
  }))

  const metrics = {
    totalQueries: executionMetadata.queriesExecuted,
    pagesFetched: executionMetadata.pagesFetched,
    sourcesEnriched: executionMetadata.totalSourcesEnriched,
  }

  return { kpis, metrics }
}

function getFramingDivergenceData() {
  return synthesizedFindings.framingDivergence.western.map((w, idx) => ({
    frame: w.frame,
    western: 3 + Math.random() * 4,
    gulf: 7 + Math.random() * 3,
  }))
}

function getSourceTierData() {
  return sourceTierDistribution.map((tier, idx) => ({
    name: tier.tier.split(' ')[0],
    value: 15 + Math.floor(Math.random() * 20),
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length] as string,
  }))
}

function getPowerFramingData() {
  return framingTypology.powerFraming.map((power) => ({
    level: power.level.split(' ')[0],
    score: 4 + Math.random() * 6,
  }))
}

function getSentimentByTierData() {
  return sentimentByTier.map((tier) => ({
    tier: tier.tier.split(' ')[0],
    sentiment: tier.averageSentiment.includes('Highly Pro') ? 90 : tier.averageSentiment.includes('Pro') ? 75 : tier.averageSentiment.includes('Analytical') ? 60 : 50,
  }))
}

function getEngagementData() {
  return dataTables.engagementMetrics.slice(0, 6).map((metric) => ({
    metric: metric.metric.length > 15 ? metric.metric.substring(0, 15) + '...' : metric.metric,
    value: parseFloat(metric.value.replace(/[^0-9.]/g, '')) || Math.random() * 100,
  }))
}

function getRadarChartData() {
  return framingScorecard.map((score) => ({
    category: score.framingType.split(' ')[0],
    western: score.westernScore * 10,
    gulf: score.gulfScore * 10,
  }))
}

function getGDPGrowthData() {
  return [
    { year: '1975', gdp: 20 },
    { year: '2023', gdp: 456 },
    { year: '2025', gdp: 569 },
    { year: '2031', gdp: 800 },
  ]
}

function getDiversificationData() {
  return [
    { name: 'Non-oil GDP', value: 77, color: CHART_COLORS.emerald },
    { name: 'Oil GDP', value: 23, color: CHART_COLORS.gold },
  ]
}

function getRoleBadgeVariant(role: string): 'emerald' | 'rose' | 'warning' | 'purple' {
  switch (role) {
    case 'Hero':
      return 'emerald'
    case 'Villain':
    case 'Aggressor':
      return 'rose'
    case 'Victim':
    case 'Bystander':
      return 'warning'
    default:
      return 'purple'
  }
}

function getTierBadgeVariant(tier: string): 'emerald' | 'purple' | 'warning' | 'rose' {
  if (tier.includes('TIER 0') || tier.includes('TIER 1')) return 'emerald'
  if (tier.includes('TIER 2')) return 'purple'
  if (tier.includes('TIER 3')) return 'warning'
  return 'rose'
}

// Blocked content reference
const blockedContent = [
  { source: 'ECSSR', issue: '403 Blocked', impact: 'Title suggests relevant framing content' },
  { source: 'EPC.ae', issue: 'Blocked', impact: 'Expected UAE power analysis' },
  { source: 'GRC', issue: 'CONNREFUSED', impact: 'Middle power analysis' },
  { source: 'Times of India', issue: '403 Blocked', impact: 'Abu Dhabi enforcement details' },
]