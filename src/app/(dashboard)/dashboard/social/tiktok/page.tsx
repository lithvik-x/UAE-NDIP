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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  Hash,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Video,
  Heart,
  MessageSquare,
  Share2,
  Clock,
  Flag,
  CheckCircle,
  XCircle,
  Eye,
  Lock,
  TrendingDown,
  DollarSign,
  Scale,
  AlertOctagon,
  Brain,
  Bot,
  EyeOff,
  Ban,
  FileWarning,
  Info,
  ExternalLink,
  UserX,
  Scissors,
  Landmark,
  ShieldAlert,
  Bug,
  Gavel,
  FileText,
  Target,
  Layers,
} from 'lucide-react'
import {
  useTiktokIntelligenceData,
} from '@/lib/data-loader'

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Users,
  XCircle,
  AlertOctagon,
  DollarSign,
  UserX,
  Bot,
  AlertTriangle,
  AlertCircle,
  Lock,
  Scale,
  Brain,
  Shield,
  Globe,
  Hash,
  Landmark,
  Video,
  Zap,
  ExternalLink,
}

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

export default function TikTokLandscapePage() {
  const { data } = useTiktokIntelligenceData()
  const [activeTab, setActiveTab] = useState('overview')

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading TikTok data...</div>
      </div>
    )
  }

  // Destructure all data from the hook
  const {
    stats,
    sentimentDistribution,
    criticalRisks,
    hashtagPerformance,
    mediaLawFines,
    keyPersons,
    influencerLicensing,
    aiDeepfakeThreats,
    queryPatternsExecuted,
    sourceCredibilityMatrix,
    platformData,
    executionMetadata,
  } = data

  const { metrics, keyNarratives, governmentAccounts, sources, botActivity } = platformData

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30">
            <Video className="h-3 w-3 mr-1" />
            PLATFORM ANALYSIS
          </Badge>
          <h1 className="text-4xl font-bold font-rajdhani gradient-text-platinum-500">TikTok UAE Intelligence</h1>
          <p className="mt-2 text-platinum-400">
            Comprehensive TikTok landscape analysis: {executionMetadata.queriesExecuted} queries executed, {executionMetadata.pagesFetched} pages fetched
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum-500 hover:bg-platinum/10">
            <ExternalLink className="h-4 w-4" />
            View Content
          </Button>
          <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Analyze Trends
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics Grid - from data.stats */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        {stats.map((stat, idx) => {
          const IconComponent = iconMap[stat.icon] || Users
          return (
            <motion.div key={idx} variants={fadeInUp}>
              <MetricCard
                title={stat.label}
                value={stat.value}
                icon={<IconComponent className="h-5 w-5" style={{ color: stat.color }} />}
                gradient="denim"
                className="hover:scale-105 transition-transform duration-200"
              />
            </motion.div>
          )
        })}
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="critical">Critical Risks</TabsTrigger>
          <TabsTrigger value="influencers">Influencers</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment Analysis - from data.sentimentDistribution */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-card border-rose-500/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5 text-rose-400" />
                    Sentiment Analysis
                  </CardTitle>
                  <CardDescription>Overall: {metrics.sentiment.overall} (Score: {metrics.sentiment.score})</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sentimentDistribution}
                    height={220}
                    showLegend={true}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Concerns - from metrics.sentiment.keyConcerns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card border-rose-500/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-400" />
                    Key Concerns
                  </CardTitle>
                  <CardDescription>Critical topics requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[220px]">
                    <div className="space-y-3">
                      {metrics.sentiment.keyConcerns?.map((concern, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3 rounded-lg bg-platinum-800/50 p-3 hover:bg-platinum-800/70 transition-colors"
                        >
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span className="text-sm text-platinum-200">{concern}</span>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Trending Hashtags - from data.hashtagPerformance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-card border-gold-500/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Hash className="h-5 w-5 text-gold-700" />
                  Trending Hashtags
                </CardTitle>
                <CardDescription>Most used hashtags in UAE TikTok content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {hashtagPerformance.map((tag, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 rounded-full border ${
                        tag.sentiment === 'positive'
                          ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                          : tag.sentiment === 'negative'
                          ? 'bg-rose-500/20 border-rose-500/30 text-rose-400'
                          : 'bg-platinum-500/20 border-platinum-500/30 text-platinum-400'
                      }`}
                    >
                      <Hash className="h-3 w-3 inline mr-1" />
                      {tag.hashtag}
                      <span className="ml-2 text-xs opacity-70">({tag.posts})</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bot Activity Analysis - from platformData.botActivity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card border-rose-500/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bot className="h-5 w-5 text-rose-400" />
                  Bot Activity Analysis
                </CardTitle>
                <CardDescription>{metrics.botActivity?.estimatedBotPercent ?? botActivity?.estimatedBotPercent ?? 0}% estimated bots</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-platinum-300">Coordinated Activity</span>
                    <Badge variant={metrics.botActivity?.coordinatedInauthentic ?? botActivity?.coordinatedInauthentic ? 'destructive' : 'success'}>
                      {metrics.botActivity?.coordinatedInauthentic ?? botActivity?.coordinatedInauthentic ? 'Detected' : 'None'}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-platinum-300">Confidence Level</span>
                    <span className="text-lg font-bold text-gold-700">
                      {Math.round((metrics.botActivity?.confidence ?? botActivity?.confidence ?? 0) * 100)}%
                    </span>
                  </div>
                  <Progress value={metrics.botActivity?.estimatedBotPercent ?? botActivity?.estimatedBotPercent ?? 0} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Narratives Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glass-card border-platinum-500/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layers className="h-5 w-5 text-platinum-500" />
                  Key Narratives
                </CardTitle>
                <CardDescription>Dominant themes on TikTok UAE</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {keyNarratives.slice(0, 6).map((narrative, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            narrative.sentiment === 'positive'
                              ? 'border-emerald-500/50 text-emerald-400'
                              : narrative.sentiment === 'negative'
                              ? 'border-rose-500/50 text-rose-400'
                              : 'border-platinum-500/50 text-platinum-400'
                          }`}
                        >
                          {narrative.sentiment}
                        </Badge>
                        <span className="text-xs text-platinum-500">{narrative.prevalence}%</span>
                      </div>
                      <p className="text-sm font-medium text-platinum-200">{narrative.topic}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Critical Risks Tab - from data.criticalRisks */}
        <TabsContent value="critical" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {criticalRisks.map((risk, idx) => {
              const IconComponent = iconMap[risk.icon] || AlertOctagon
              return (
                <motion.div
                  key={risk.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass-card border-rose-500/30 overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${
                      risk.riskLevel === 'CRITICAL' ? 'from-rose-500 to-pink-500' : 'from-gold-500 to-yellow-500'
                    }`} />
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{risk.title}</CardTitle>
                        <Badge variant="destructive" className="text-xs">
                          {risk.riskLevel}
                        </Badge>
                      </div>
                      <CardDescription className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4" style={{ color: risk.color }} />
                        {risk.metric}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-platinum-300">{risk.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* AI Deepfake Threats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="glass-card border-gold-500/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bot className="h-5 w-5 text-gold-700" />
                  AI Deepfake Threat Landscape
                </CardTitle>
                <CardDescription>Documented AI-generated misinformation cases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiDeepfakeThreats.map((threat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                    >
                      <div>
                        <p className="font-medium text-platinum-200">{threat.example}</p>
                        <p className="text-xs text-platinum-400">{threat.source}</p>
                      </div>
                      <Badge variant="outline" className="text-gold-700 border-gold-500/30">
                        {threat.views} views
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Influencers Tab - from data.keyPersons */}
        <TabsContent value="influencers" className="space-y-6">
          <Card className="glass-card border-gold-500/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-gold-700" />
                Key Persons & Cases
              </CardTitle>
              <CardDescription>Notable influencers and legal cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {keyPersons.map((person, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-rose-400" />
                      </div>
                      <div>
                        <p className="font-medium text-platinum-200">{person.name}</p>
                        <p className="text-sm text-platinum-400">{person.handle}</p>
                        <p className="text-xs text-platinum-500">Followers: {person.followers}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={person.status.includes('Arrested') ? 'destructive' : person.status.includes('Released') ? 'success' : 'default'}
                        className="mb-1"
                      >
                        {person.status}
                      </Badge>
                      <p className="text-xs text-platinum-400">{person.charge}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Government Accounts */}
          <Card className="glass-card border-platinum-500/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-platinum-500" />
                Government & Official Accounts
              </CardTitle>
              <CardDescription>Verified official TikTok presence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(governmentAccounts || []).map((account, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="h-4 w-4 text-platinum-500" />
                      <span className="text-sm text-platinum-200">{account.handle}</span>
                      {account.verified && <CheckCircle className="h-4 w-4 text-emerald-400" />}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {account.verified ? 'Verified' : 'Unverified'}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Compliance Tab - from data.mediaLawFines and data.influencerLicensing */}
        <TabsContent value="compliance" className="space-y-6">
          <Card className="glass-card border-rose-500/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Gavel className="h-5 w-5 text-rose-400" />
                UAE Media Law Fines
              </CardTitle>
              <CardDescription>Federal Decree-Law No. 55 of 2023 - Penalty Schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mediaLawFines.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                  >
                    <span className="text-sm text-platinum-300">{item.violation}</span>
                    <Badge variant="outline" className="text-rose-400 border-rose-500/30">
                      {item.fine}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-gold-500/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-gold-700" />
                Influencer Licensing (Effective Feb 1, 2026)
              </CardTitle>
              <CardDescription>Mandatory licensing requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {influencerLicensing.map((license, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-lg bg-gold-500/10 p-4 border border-gold-500/30"
                  >
                    <h4 className="font-semibold text-gold-700 mb-2">{license.category}</h4>
                    <p className="text-sm text-platinum-300">First 3 years: {license.first3Years}</p>
                    <p className="text-sm text-platinum-300">After 3 years: {license.after3Years}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Query Patterns Executed */}
          <Card className="glass-card border-platinum-500/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-platinum-500" />
                Query Patterns Executed
              </CardTitle>
              <CardDescription>{executionMetadata.queriesExecuted} total queries across {queryPatternsExecuted.length} categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {queryPatternsExecuted.map((pattern, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-lg bg-platinum-800/50 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-platinum-200">{pattern.category}</h4>
                      <Badge variant="outline" className="text-platinum-500 border-platinum-500/30">
                        {pattern.count} queries
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pattern.queries.slice(0, 5).map((query, qIdx) => (
                        <span key={qIdx} className="text-xs text-platinum-400 bg-platinum-700/50 px-2 py-1 rounded">
                          {query}
                        </span>
                      ))}
                      {pattern.queries.length > 5 && (
                        <span className="text-xs text-platinum-500">+{pattern.queries.length - 5} more</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sources Tab - from sources */}
        <TabsContent value="sources" className="space-y-6">
          <Card className="glass-card border-platinum-500/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-platinum-500" />
                Source References
              </CardTitle>
              <CardDescription>{sources?.length ?? 0} enriched sources from the intelligence report</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {sources?.map((source, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 hover:bg-platinum-800/70 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-platinum-200">{source.name}</p>
                        <p className="text-xs text-platinum-400 truncate">{source.url}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            source.tier === 1
                              ? 'border-emerald-500/50 text-emerald-400'
                              : source.tier === 2
                              ? 'border-navy-500/50 text-navy-400'
                              : source.tier === 3
                              ? 'border-amber-500/50 text-amber-400'
                              : 'border-platinum-500/50 text-platinum-400'
                          }`}
                        >
                          TIER {source.tier}
                        </Badge>
                        <Badge variant="outline" className="text-xs text-platinum-400">
                          {source.date}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Source Credibility Matrix */}
          <Card className="glass-card border-platinum-500/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-platinum-500" />
                Source Credibility Matrix
              </CardTitle>
              <CardDescription>Distribution of sources by tier and credibility</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sourceCredibilityMatrix.map((tier, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-lg bg-platinum-800/50 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="outline"
                        className={`${
                          tier.tier === 'TIER 1'
                            ? 'border-emerald-500/50 text-emerald-400'
                            : tier.tier === 'TIER 2'
                            ? 'border-navy-500/50 text-navy-400'
                            : tier.tier === 'TIER 3'
                            ? 'border-amber-500/50 text-amber-400'
                            : 'border-platinum-500/50 text-platinum-400'
                        }`}
                      >
                        {tier.tier}
                      </Badge>
                      <span className="text-xs text-platinum-400">Credibility: {tier.credibility}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tier.sources.map((source, sIdx) => (
                        <span
                          key={sIdx}
                          className={`text-xs px-2 py-1 rounded ${
                            tier.tier === 'TIER 1'
                              ? 'bg-emerald-500/10 text-emerald-300'
                              : tier.tier === 'TIER 2'
                              ? 'bg-navy-500/10 text-navy-300'
                              : tier.tier === 'TIER 3'
                              ? 'bg-amber-500/10 text-amber-300'
                              : 'bg-platinum-700/50 text-platinum-400'
                          }`}
                        >
                          {source}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
