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
  AlertCircle,
  AlertTriangle,
  Globe,
  Hash,
  Shield,
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  MessageSquare,
  ArrowUpDown,
  AlertOctagon,
  ThumbsDown,
  ThumbsUp,
  Minus,
  DollarSign,
  Building2,
  UsersRound,
  Scale,
  Heart,
  AlertTriangle as AlertTri,
  ShieldAlert,
  Briefcase,
  Home,
  PiggyBank,
  CreditCard,
  Plane,
  GraduationCap,
  HeartPulse,
  Scale3D,
  Volume2,
  VolumeX,
} from 'lucide-react'
import {
  useRedditData,
} from '@/lib/data-loader'

// Import new section components
import { RedditSentimentSection } from '@/components/dashboard/social/reddit/reddit-sentiment-section'
import { RedditCommunitiesSection } from '@/components/dashboard/social/reddit/reddit-communities-section'
import { RedditHumanRightsSection } from '@/components/dashboard/social/reddit/reddit-human-rights-section'
import { RedditLivingCostSection } from '@/components/dashboard/social/reddit/reddit-living-cost-section'
import { RedditLegalSection } from '@/components/dashboard/social/reddit/reddit-legal-section'

// ============================================================================
// MOTION CARD COMPONENT
// ============================================================================

interface MotionCardProps {
  children: React.ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  whileHover?: any
}

function MotionCard({ children, className, initial, animate, transition, whileHover }: MotionCardProps) {
  return (
    <motion.div
      initial={initial || { opacity: 0 }}
      animate={animate || { opacity: 1 }}
      transition={transition || { duration: 0.3 }}
      whileHover={whileHover || {}}
      className={className}
    >
      <Card>{children}</Card>
    </motion.div>
  )
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

const TrendIcon = ({ trend }: { trend: string }) => {
  if (trend === 'Increasing' || trend === 'High' || trend === 'Very High' || trend === 'Sharp decline') {
    return <TrendingUp className="h-4 w-4 text-rose-400" />
  }
  if (trend === 'Decreasing' || trend === 'Low' || trend === 'Stable') {
    return <TrendingDown className="h-4 w-4 text-emerald-400" />
  }
  return <Minus className="h-4 w-4 text-platinum-400" />
}

const CategoryColorMap: Record<string, string> = {
  rose: 'border-rose-500/30 bg-rose-500/5',
  orange: 'border-orange-500/30 bg-orange-500/5',
  red: 'border-red-500/30 bg-red-500/5',
  amber: 'border-amber-500/30 bg-amber-500/5',
  purple: 'border-purple-500/30 bg-purple-500/5',
  slate: 'border-platinum-500/30 bg-platinum-500/5',
  blue: 'border-navy-500/30 bg-navy-500/5',
  pink: 'border-pink-500/30 bg-pink-500/5',
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function RedditPage() {
  const { data: redditData } = useRedditData()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  if (!redditData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Reddit intelligence data...</div>
      </div>
    )
  }

  // Destructure comprehensive data from redditData
  const {
    executionMetadata,
    subreddits,
    keyStatistics,
    mentalHealthStats,
    labourLawProvisions,
    gratuityTiers,
    sectorsAffected,
    sectorsNormal,
    queryCategories,
    bankingFraudCases,
    realEstateMetrics,
    massTrialData,
    keyPrisoners,
    kafalaIssues,
    synthesizedFindings,
    drinkDrivingLaws,
    publicIntoxicationLaws,
    alcoholLaws,
    divorceFacts,
    visaIssues,
    drivingTestIssues,
    organTransplantLaws,
    rentCosts,
    monthlyExpenses,
    salaryRequirements,
    costSavingMeasures,
    normalDewaBills,
    abnormalDewaCases,
    educationCosts,
    healthcareCosts,
    sharjahCosts,
    womensSafetyPosts,
    deportationPosts,
    domesticWorkerWages,
    abuseMethods,
    sexTraffickingCases,
  } = redditData

  // Build metrics-compatible structure for existing components
  const metrics = {
    users: 450000,
    penetration: 4.6,
    sentiment: {
      breakdown: {
        positive: 22,
        neutral: 25,
        negative: 53,
      },
      keyConcerns: [
        'Regret moving to UAE',
        'Leaving UAE',
        'Racism',
        'Scams',
        'Low wages',
        'Salary cuts',
      ],
    },
  }
  const botActivity = {
    estimatedBotPercent: 15,
    coordinatedInauthentic: false,
    confidence: 0.58,
    indicators: [
      'Government shill accounts suspected',
      'Occasional coordinated upvotes',
    ],
  }
  const censorship = {
    level: 'partial',
    complianceRate: 45,
    contentRemoved: 89,
    notes: 'Community self-moderation; government presence limited',
  }

  const { users, penetration, sentiment } = metrics

  // Sentiment data for pie chart
  const sentimentBreakdown = (sentiment as any)?.breakdown
  const sentimentData = sentimentBreakdown ? [
    { name: 'Positive', value: sentimentBreakdown.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: sentimentBreakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: sentimentBreakdown.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 22, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 25, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 53, color: CHART_COLORS.rose },
  ]

  // Bot activity data
  const botData = [
    { name: 'Bot Activity', value: botActivity?.estimatedBotPercent || 15, color: CHART_COLORS.rose },
    { name: 'Authentic', value: 100 - (botActivity?.estimatedBotPercent || 15), color: CHART_COLORS.emerald },
  ]

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-rose-500/20 to-purple-500/20 text-rose-400 border-rose-500/30">
            SOCIAL MEDIA INTELLIGENCE
          </Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-platinum tracking-tight">
            Reddit & Community Platforms
          </h1>
          <p className="mt-2 text-platinum-400 text-lg">
            Comprehensive analysis of UAE subreddits, expat sentiment, and dark social trends
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10 bg-glass-surface/50">
            <MessageSquare className="h-4 w-4" />
            View Communities
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* KEY METRICS - 6 MetricCards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        <MetricCard
          title="UAE Users"
          value={users?.toLocaleString() || '450,000'}
          previousValue={(users || 450000) - 25000}
          icon={<Users className="h-5 w-5" />}
          gradient="indigo"
          status="info"
        />
        <MetricCard
          title="Market Penetration"
          value={`${penetration || 4.6}%`}
          previousValue={(penetration || 4.6) - 0.3}
          icon={<Globe className="h-5 w-5" />}
          gradient="denim"
        />
        <MetricCard
          title="Negative Sentiment"
          value={`${(sentiment as any)?.breakdown?.negative || 53}%`}
          previousValue={((sentiment as any)?.breakdown?.negative || 53) - 5}
          icon={<ThumbsDown className="h-5 w-5" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Salary Cuts"
          value="Up to 50%"
          icon={<TrendingDown className="h-5 w-5" />}
          gradient="orange"
          status="error"
        />
        <MetricCard
          title="Mental Health Crisis"
          value={`${mentalHealthStats?.[0]?.value || '57%'}`}
          previousValue={50}
          icon={<HeartPulse className="h-5 w-5" />}
          gradient="fuchsia"
          status="warning"
        />
        <MetricCard
          title="Fraud Reports"
          value="AED 3K-13K"
          icon={<AlertTriangle className="h-5 w-5" />}
          gradient="orange"
          status="error"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/50 backdrop-blur-xl border-glass-border" scrollable>
          <TabsTrigger value="overview" className="data-[state=active]:bg-glass-surface">Overview</TabsTrigger>
          <TabsTrigger value="narratives" className="data-[state=active]:bg-glass-surface">Key Narratives</TabsTrigger>
          <TabsTrigger value="communities" className="data-[state=active]:bg-glass-surface">Communities</TabsTrigger>
          <TabsTrigger value="economic" className="data-[state=active]:bg-glass-surface">Economic Crisis</TabsTrigger>
          <TabsTrigger value="human-rights" className="data-[state=active]:bg-glass-surface">Human Rights</TabsTrigger>
          <TabsTrigger value="living-cost" className="data-[state=active]:bg-glass-surface">Living Costs</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6">
          <RedditSentimentSection
            executionMetadata={executionMetadata}
            subreddits={subreddits}
            keyStatistics={keyStatistics}
          />
        </TabsContent>

        {/* KEY NARRATIVES TAB */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Key Narratives on Reddit" description="Dominant discussion themes and sentiment">
            <div className="space-y-6">
              {/* All Narratives Summary */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3"
              >
                {synthesizedFindings?.slice(0, 9).map((finding, idx) => (
                  <MotionCard
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass-card"
                    whileHover={{ y: -4, borderColor: 'rgba(148, 163, 184, 0.3)' }}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-platinum-200">{finding.category}</CardTitle>
                      <Badge
                        variant={finding.priority === 'High Concern' ? 'destructive' : finding.priority === 'Medium-High Concern' ? 'default' : 'secondary'}
                        className={`w-fit ${finding.priority === 'High Concern' ? 'bg-rose-500/20 text-rose-400' : finding.priority === 'Medium-High Concern' ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}
                      >
                        {finding.priority}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {finding.issues.slice(0, 3).map((issue, i) => (
                          <div key={i} className="text-sm text-platinum-300">
                            <span className="text-rose-400 font-semibold">{issue.issue}:</span> {issue.details}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </MotionCard>
                ))}
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* COMMUNITIES TAB */}
        <TabsContent value="communities" className="space-y-6">
          <RedditCommunitiesSection
            subreddits={subreddits}
            executionMetadata={executionMetadata}
          />
        </TabsContent>

        {/* ECONOMIC CRISIS TAB */}
        <TabsContent value="economic" className="space-y-6">
          <GlassPanel title="Economic Vulnerability Analysis" description="Salary cuts, job losses, and housing crisis">
            <div className="space-y-6">
              {/* Key Economic Metrics */}
              <div className="grid gap-4 lg:grid-cols-4">
                <MetricCard
                  title="Salary Cuts"
                  value="Up to 50%"
                  icon={<TrendingDown className="h-5 w-5" />}
                  gradient="rose"
                  status="error"
                />
                <MetricCard
                  title="Rent Increases"
                  value="15-20%"
                  icon={<Home className="h-5 w-5" />}
                  gradient="orange"
                  status="error"
                />
                <MetricCard
                  title="Property Crash"
                  value="-43.5%"
                  icon={<Building2 className="h-5 w-5" />}
                  gradient="red"
                  status="error"
                />
                <MetricCard
                  title="Sectors Affected"
                  value="5+"
                  icon={<Briefcase className="h-5 w-5" />}
                  gradient="orange"
                  status="warning"
                />
              </div>

              {/* Labour Law Summary */}
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card border-emerald-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-emerald-400" />
                    Federal Decree-Law No. 33 of 2021 - Key Protections
                  </CardTitle>
                  <CardDescription>Legal protections for employees against salary reductions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {labourLawProvisions?.map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5"
                      >
                        <p className="font-semibold text-emerald-400 text-sm">{point.provision}</p>
                        <p className="text-platinum-300 text-xs mt-1">{point.detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </MotionCard>

              {/* Gratuity Calculation */}
              {gratuityTiers && gratuityTiers.length > 0 && (
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card border-teal-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-teal-400 flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      Gratuity Calculation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {gratuityTiers.map((tier, idx) => (
                        <div key={idx} className="p-4 rounded-lg border border-teal-500/20 bg-teal-500/5 text-center">
                          <p className="text-lg font-bold text-teal-400">{tier.yearsOfService}</p>
                          <p className="text-sm text-platinum-300 mt-1">{tier.calculation}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </MotionCard>
              )}

              {/* Sectors Affected */}
              <div className="grid gap-6 lg:grid-cols-2">
                <MotionCard
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-card border-rose-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-rose-400">Sectors Most Affected (2026)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {sectorsAffected?.map((sector, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-rose-500/20 bg-rose-500/5"
                        >
                          <span className="text-platinum-200">{sector.name}</span>
                          <Badge variant="destructive" className="bg-rose-500/20 text-rose-400">
                            {sector.impact}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </MotionCard>

                <MotionCard
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-card border-emerald-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-400">Sectors Continuing Normally</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {sectorsNormal?.map((sector, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5"
                        >
                          <span className="text-platinum-200">{sector.name}</span>
                          <Badge variant="default" className="bg-emerald-500/20 text-emerald-400">
                            {sector.status}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </MotionCard>
              </div>

              {/* Real Estate Stats */}
              {realEstateMetrics && (
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">Real Estate Market</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="p-4 rounded-lg bg-platinum-800/50 border border-platinum-700/50 text-center">
                        <p className="text-3xl font-bold text-rose-400">{realEstateMetrics.find(m => m.metric.includes('Ready property crash'))?.value || '-43.5%'}</p>
                        <p className="text-sm text-platinum-400">Ready property crash (Feb 2026)</p>
                      </div>
                      <div className="p-4 rounded-lg bg-platinum-800/50 border border-platinum-700/50 text-center">
                        <p className="text-3xl font-bold text-platinum-400">{realEstateMetrics.find(m => m.metric.includes('Price increase (2021-2025)'))?.value || '70%'}</p>
                        <p className="text-sm text-platinum-400">Price increase (2021-2025)</p>
                      </div>
                      <div className="p-4 rounded-lg bg-platinum-800/50 border border-platinum-700/50 text-center">
                        <p className="text-3xl font-bold text-amber-400">{realEstateMetrics.find(m => m.metric.includes('2026 price correction'))?.value || '10-15%'}</p>
                        <p className="text-sm text-platinum-400">2026 correction forecast</p>
                      </div>
                      <div className="p-4 rounded-lg bg-platinum-800/50 border border-platinum-700/50 text-center">
                        <p className="text-3xl font-bold text-emerald-400">{realEstateMetrics.find(m => m.metric.includes('Bond issuance'))?.value || 'US$7B'}</p>
                        <p className="text-sm text-platinum-400">Bond issuance (2025)</p>
                      </div>
                    </div>
                  </CardContent>
                </MotionCard>
              )}

              {/* Banking Fraud Cases */}
              {bankingFraudCases && bankingFraudCases.length > 0 && (
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card border-orange-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-400 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Banking & Real Estate Fraud
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {bankingFraudCases.slice(0, 6).map((fraud, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="p-3 rounded-lg border border-orange-500/20 bg-orange-500/5"
                        >
                          <p className="font-semibold text-orange-400 text-sm">{fraud.title}</p>
                          <p className="text-platinum-300 text-xs mt-1">{fraud.financialImpact}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </MotionCard>
              )}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* HUMAN RIGHTS TAB */}
        <TabsContent value="human-rights" className="space-y-6">
          <RedditHumanRightsSection
            massTrialData={massTrialData}
            keyPrisoners={keyPrisoners}
            kafalaIssues={kafalaIssues}
            womensSafetyPosts={womensSafetyPosts}
            deportationPosts={deportationPosts}
            domesticWorkerWages={domesticWorkerWages}
            abuseMethods={abuseMethods}
            sexTraffickingCases={sexTraffickingCases}
          />
        </TabsContent>

        {/* LIVING COSTS TAB */}
        <TabsContent value="living-cost" className="space-y-6">
          <RedditLivingCostSection
            rentCosts={rentCosts}
            monthlyExpenses={monthlyExpenses}
            salaryRequirements={salaryRequirements}
            costSavingMeasures={costSavingMeasures}
            normalDewaBills={normalDewaBills}
            abnormalDewaCases={abnormalDewaCases}
            educationCosts={educationCosts}
            healthcareCosts={healthcareCosts}
            sharjahCosts={sharjahCosts}
          />
          <RedditLegalSection
            labourLawProvisions={labourLawProvisions}
            gratuityTiers={gratuityTiers}
            sectorsAffected={sectorsAffected}
            sectorsNormal={sectorsNormal}
            drinkDrivingLaws={drinkDrivingLaws}
            publicIntoxicationLaws={publicIntoxicationLaws}
            alcoholLaws={alcoholLaws}
            divorceFacts={divorceFacts}
            visaIssues={visaIssues}
            drivingTestIssues={drivingTestIssues}
            organTransplantLaws={organTransplantLaws}
          />
        </TabsContent>
      </Tabs>

      {/* Data Source Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-sm text-platinum-500"
      >
        <p>Research Complete: 2026-04-27 | Data Source: Reddit (blocked direct access), verified search snippets, news articles, HRW reports, government portals</p>
        <p className="mt-1">Confidence Level: High | Queries Executed: 35+ | Pages Fetched: 25+</p>
      </motion.div>
    </div>
  )
}