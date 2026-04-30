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
} from 'lucide-react'
import {
  strategicNarrativesData,
  keyFindings,
  overallSentimentDistribution,
  uaeProfile,
  summaryStatistics,
  sentimentDistributionByNarrative,
  keyTensions,
  monitoringRecommendations,
  sourceCredibilityMatrix,
  dataTables,
  successStoryNarrative,
  safeHavenNarrative,
  tolerantNationNarrative,
  innovationHubNarrative,
  sportsPowerNarrative,
  humanRightsViolatorNarrative,
  regionalMediatorNarrative,
  climateLeaderNarrative,
  economicPowerhouseNarrative,
  lavishLifestyleNarrative,
  foreignPolicyAggressorNarrative,
  landOfOpportunityNarrative,
} from '@/lib/data/perception/strategic-narratives-data'

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

// Narrative card component
function NarrativeCard({
  narrative,
  isExpanded,
  onToggle,
}: {
  narrative: typeof keyFindings[0]
  isExpanded: boolean
  onToggle: () => void
}) {
  const getFramingColor = (framing: string) => {
    switch (framing) {
      case 'PRO-NARRATIVE':
        return 'text-emerald-600 bg-emerald-500/10'
      case 'COUNTER-NARRATIVE':
        return 'text-rose-600 bg-rose-500/10'
      default:
        return 'text-amber-600 bg-amber-500/10'
    }
  }

  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'Critical':
        return 'bg-rose-500'
      case 'High':
        return 'bg-amber-500'
      default:
        return 'bg-blue-500'
    }
  }

  const NarrativeContent = () => {
    switch (narrative.narrative) {
      case 'Success Story':
        return <SuccessStoryContent />
      case 'Safe Haven':
        return <SafeHavenContent />
      case 'Tolerant Nation':
        return <TolerantNationContent />
      case 'Innovation Hub':
        return <InnovationHubContent />
      case 'Sports Power':
        return <SportsPowerContent />
      case 'Human Rights Violator':
        return <HumanRightsViolatorContent />
      case 'Regional Mediator':
        return <RegionalMediatorContent />
      case 'Climate Leader':
        return <ClimateLeaderContent />
      case 'Economic Powerhouse':
        return <EconomicPowerhouseContent />
      case 'Lavish Lifestyle':
        return <LavishLifestyleContent />
      case 'Foreign Policy Aggressor':
        return <ForeignPolicyAggressorContent />
      case 'Land of Opportunity':
        return <LandOfOpportunityContent />
      default:
        return null
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group"
    >
      <Card
        className="glass-card cursor-pointer hover:shadow-glass-lg transition-all duration-300 border-2 hover:border-indigo-200"
        onClick={onToggle}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Badge
                  variant="outline"
                  className={`${getFramingColor(narrative.dominantFraming)} border-0`}
                >
                  {narrative.dominantFraming}
                </Badge>
                <Badge
                  className={`${getRelevanceColor(narrative.uaeRelevance)} text-white`}
                >
                  {narrative.uaeRelevance}
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {narrative.narrative}
              </CardTitle>
              <CardDescription className="mt-2 flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="h-3 w-3 text-emerald-500" />
                  <span className="font-semibold text-emerald-600">{narrative.proSources}</span>
                  <span className="text-slate-500">pro-sources</span>
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsDown className="h-3 w-3 text-rose-500" />
                  <span className="font-semibold text-rose-600">{narrative.counterSources}</span>
                  <span className="text-slate-500">counter-sources</span>
                </span>
              </CardDescription>
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
                <NarrativeContent />
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

// Content components for each narrative
function SuccessStoryContent() {
  const { proNarrative, counterNarrative } = successStoryNarrative
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      {/* Pro-Narrative Evidence */}
      <div className="rounded-lg bg-emerald-50/50 p-4">
        <h5 className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
          <ThumbsUp className="h-4 w-4" /> Pro-Narrative Evidence
        </h5>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h6 className="text-sm font-medium text-slate-700 mb-2">Economic Transformation</h6>
            <div className="space-y-2">
              {proNarrative.economicTransformation.map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-slate-600">{item.metric}</span>
                  <span className="font-semibold text-emerald-700">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h6 className="text-sm font-medium text-slate-700 mb-2">Key Milestones</h6>
            <ul className="space-y-1">
              {proNarrative.milestones.slice(0, 4).map((m, idx) => (
                <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-1 shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Space Program */}
        <div className="mt-4 pt-4 border-t border-emerald-200">
          <h6 className="text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
            <Rocket className="h-4 w-4" /> Space Program Achievements
          </h6>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {proNarrative.spaceProgram.map((item, idx) => (
              <div key={idx} className="bg-white/50 rounded p-2">
                <div className="text-xs text-slate-500">{item.achievement}</div>
                <div className="text-sm font-medium text-emerald-700">{item.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Counter-Narrative Evidence */}
      <div className="rounded-lg bg-rose-50/50 p-4">
        <h5 className="font-semibold text-rose-700 mb-3 flex items-center gap-2">
          <ThumbsDown className="h-4 w-4" /> Counter-Narrative Evidence
        </h5>
        <div className="space-y-2">
          {counterNarrative.issues.map((issue, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-1 shrink-0" />
              <div>
                <span className="font-medium text-rose-700">{issue.issue}: </span>
                <span className="text-slate-600">{issue.evidence}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart: GDP Growth */}
      <div className="h-64">
        <h6 className="text-sm font-medium text-slate-700 mb-2">GDP Growth Trajectory</h6>
        <BarChart
          data={[
            { year: '1985', gdp: 37 },
            { year: '2021', gdp: 450 },
            { year: '2025', gdp: 621 },
          ]}
          xAxisKey="year"
          bars={[{ dataKey: 'gdp', name: 'GDP ($B)', color: CHART_COLORS.emerald }]}
          height={180}
          showGrid={true}
        />
      </div>
    </div>
  )
}

function SafeHavenContent() {
  const { proNarrative, counterNarrative } = safeHavenNarrative
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      {/* Pro-Narrative */}
      <div className="rounded-lg bg-emerald-50/50 p-4">
        <h5 className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
          <Shield className="h-4 w-4" /> Stability Metrics
        </h5>
        <div className="grid gap-3 md:grid-cols-2">
          {proNarrative.stabilityMetrics.map((metric, idx) => (
            <div key={idx} className="flex items-center justify-between bg-white/50 rounded p-2">
              <span className="text-sm text-slate-600">{metric.metric}</span>
              <Badge variant="success">{metric.value}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Counter-Narrative - Critical Alert */}
      <div className="rounded-lg bg-rose-50/50 p-4 border-2 border-rose-200">
        <h5 className="font-semibold text-rose-700 mb-3 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" /> Regional Tensions (March 2026)
        </h5>
        <div className="space-y-2">
          {counterNarrative.regionalTensions.map((threat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <Circle className="h-2 w-2 text-rose-500 mt-2 shrink-0 fill-current" />
              <div>
                <span className="font-semibold text-rose-700">{threat.threat}: </span>
                <span className="text-slate-600">{threat.details}</span>
                <span className="text-xs text-slate-400 ml-2">({threat.source})</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 p-3 bg-rose-100/50 rounded border border-rose-200">
          <p className="text-sm text-rose-800 font-medium">
            <AlertTriangle className="h-4 w-4 inline mr-1" />
            TREND: Deteriorating - March 2026 attacks fundamentally challenged safe haven narrative
          </p>
        </div>
      </div>
    </div>
  )
}

function TolerantNationContent() {
  const { proNarrative, counterNarrative } = tolerantNationNarrative
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      {/* Pro-Narrative */}
      <div className="rounded-lg bg-emerald-50/50 p-4">
        <h5 className="font-semibold text-emerald-700 mb-3">Tolerance Initiatives</h5>
        <div className="grid gap-3 md:grid-cols-2">
          {proNarrative.toleranceInitiatives.map((init, idx) => (
            <div key={idx} className="bg-white/50 rounded p-2">
              <div className="font-medium text-emerald-700">{init.initiative}</div>
              <div className="text-xs text-slate-500">{init.year} - {init.details}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-emerald-200">
          <h6 className="text-sm font-medium text-slate-700 mb-2">Religious Infrastructure</h6>
          <div className="flex flex-wrap gap-2">
            {proNarrative.religiousInfrastructure.map((item, idx) => (
              <Badge key={idx} variant="outline" className="bg-emerald-50">
                {item.facility}: {item.quantity}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Counter-Narrative */}
      <div className="rounded-lg bg-rose-50/50 p-4">
        <h5 className="font-semibold text-rose-700 mb-3">Religious Freedom Restrictions</h5>
        <div className="space-y-2">
          {counterNarrative.religiousFreedomRestrictions.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-1 shrink-0" />
              <span className="font-medium text-rose-700">{item.violation}: </span>
              <span className="text-slate-600">{item.details}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function InnovationHubContent() {
  const { proNarrative, counterNarrative } = innovationHubNarrative
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      <div className="rounded-lg bg-emerald-50/50 p-4">
        <h5 className="font-semibold text-emerald-700 mb-3">Innovation Rankings</h5>
        <div className="grid gap-3 md:grid-cols-3">
          {proNarrative.innovationRankings.map((rank, idx) => (
            <div key={idx} className="bg-white/50 rounded p-3 text-center">
              <div className="text-2xl font-bold text-emerald-600">{rank.uaeRank}</div>
              <div className="text-sm text-slate-600">{rank.index}</div>
              <div className="text-xs text-slate-400">{rank.year}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-rose-50/50 p-4">
        <h5 className="font-semibold text-rose-700 mb-3">Counter-Narrative</h5>
        <div className="space-y-2">
          {counterNarrative.issues.map((issue, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-1 shrink-0" />
              <span className="font-medium text-rose-700">{issue.issue}: </span>
              <span className="text-slate-600">{issue.evidence}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SportsPowerContent() {
  const { proNarrative, counterNarrative } = sportsPowerNarrative
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      <div className="rounded-lg bg-emerald-50/50 p-4">
        <h5 className="font-semibold text-emerald-700 mb-3">Sports Infrastructure</h5>
        <div className="grid gap-3 md:grid-cols-2">
          {proNarrative.sportsInfrastructure.map((sport, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/50 rounded p-2">
              <Trophy className="h-5 w-5 text-emerald-500" />
              <div>
                <div className="font-medium text-emerald-700">{sport.sport}</div>
                <div className="text-xs text-slate-500">{sport.details}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-emerald-200">
          <h6 className="text-sm font-medium text-slate-700 mb-2">Abu Dhabi Grand Prix</h6>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {proNarrative.abuDhabiGrandPrix.map((item, idx) => (
              <div key={idx} className="text-center bg-white/50 rounded p-2">
                <div className="text-xs text-slate-500">{item.metric}</div>
                <div className="font-semibold text-emerald-700">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-rose-50/50 p-4">
        <h5 className="font-semibold text-rose-700 mb-3">Sportswashing Accusations</h5>
        <div className="space-y-2">
          {counterNarrative.issues.map((issue, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-1 shrink-0" />
              <span className="font-medium text-rose-700">{issue.issue}: </span>
              <span className="text-slate-600">{issue.evidence}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HumanRightsViolatorContent() {
  const { counterNarrative, proNarrative } = humanRightsViolatorNarrative

  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      {/* Freedom House Ratings - Critical */}
      <div className="rounded-lg bg-rose-50/50 p-4 border-2 border-rose-300">
        <h5 className="font-semibold text-rose-800 mb-3 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" /> Freedom House Ratings 2025
        </h5>
        <div className="grid gap-3 md:grid-cols-2">
          {counterNarrative.freedomHouseRatings2025.map((rating, idx) => (
            <div key={idx} className="bg-white/50 rounded p-3">
              <div className="text-sm text-slate-600">{rating.metric}</div>
              <div className="text-2xl font-bold text-rose-600">{rating.score}</div>
              <div className="text-xs text-rose-500">Rating: {rating.rating}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mass Trials */}
      <div className="rounded-lg bg-rose-50/30 p-4">
        <h5 className="font-semibold text-rose-700 mb-3">Mass Trials Documentation</h5>
        <div className="space-y-2">
          {counterNarrative.massTrials.map((trial, idx) => (
            <div key={idx} className="bg-white/50 rounded p-2">
              <div className="font-medium text-rose-700">{trial.trial}</div>
              <div className="text-sm text-slate-600">{trial.details}</div>
              <div className="text-xs text-rose-500">Sentences: {trial.sentences}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Political Prisoners */}
      <div className="rounded-lg bg-rose-50/30 p-4">
        <h5 className="font-semibold text-rose-700 mb-3">Political Prisoners</h5>
        <div className="space-y-2">
          {counterNarrative.politicalPrisoners.slice(0, 4).map((prisoner, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <Lock className="h-3 w-3 text-rose-500 mt-1 shrink-0" />
              <div>
                <span className="font-medium text-rose-700">{prisoner.prisoner}</span>
                <span className="text-slate-400"> ({prisoner.nationality})</span>
                <div className="text-slate-600">{prisoner.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Worker Rights */}
      <div className="rounded-lg bg-amber-50/30 p-4">
        <h5 className="font-semibold text-amber-700 mb-3">Worker Rights Violations</h5>
        <div className="grid gap-2 md:grid-cols-2">
          {counterNarrative.workerRightsViolations.map((issue, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <AlertTriangle className="h-3 w-3 text-amber-500 shrink-0" />
              <span className="font-medium text-amber-700">{issue.issue}:</span>
              <span className="text-slate-600">{issue.details}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 p-2 bg-amber-100/50 rounded text-center">
          <span className="text-amber-800 font-semibold">Estimated in modern slavery: 132,000 (13.4 per 1,000)</span>
        </div>
      </div>

      {/* Government Claims */}
      <div className="rounded-lg bg-slate-50 p-4">
        <h5 className="font-semibold text-slate-700 mb-3">Government Claims</h5>
        <div className="space-y-2">
          {proNarrative.claims.map((claim, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-3 w-3 text-slate-400 mt-1 shrink-0" />
              <span className="font-medium text-slate-700">{claim.claim}:</span>
              <span className="text-slate-600">{claim.details}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RegionalMediatorContent() {
  const { proNarrative, counterNarrative } = regionalMediatorNarrative
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      <div className="rounded-lg bg-emerald-50/50 p-4">
        <h5 className="font-semibold text-emerald-700 mb-3">Mediation Achievements</h5>
        <div className="grid gap-3 md:grid-cols-2">
          {proNarrative.mediationAchievements.map((item, idx) => (
            <div key={idx} className="bg-white/50 rounded p-2">
              <div className="font-medium text-emerald-700">{item.achievement}</div>
              <div className="text-xs text-slate-500">{item.year} - {item.details}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-rose-50/50 p-4">
        <h5 className="font-semibold text-rose-700 mb-3">Infrastructure of Intervention</h5>
        <div className="space-y-2">
          {counterNarrative.infrastructureOfIntervention.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-1 shrink-0" />
              <span className="font-medium text-rose-700">{item.element}:</span>
              <span className="text-slate-600">{item.details}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-rose-50/30 p-4">
        <h5 className="font-semibold text-rose-700 mb-3">Regional Conflict Involvement</h5>
        <div className="space-y-2">
          {counterNarrative.regionalConflictInvolvement.map((conflict, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/50 rounded p-2">
              <Globe className="h-4 w-4 text-rose-500" />
              <div className="flex-1">
                <span className="font-medium text-rose-700">{conflict.conflict}</span>
              </div>
              <Badge variant="destructive">{conflict.uaeRole}</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ClimateLeaderContent() {
  const { proNarrative, counterNarrative } = climateLeaderNarrative
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      {/* Climate Commitments */}
      <div className="rounded-lg bg-emerald-50/50 p-4">
        <h5 className="font-semibold text-emerald-700 mb-3">Climate Commitments</h5>
        <div className="grid gap-3 md:grid-cols-2">
          {proNarrative.climateCommitments.map((commitment, idx) => (
            <div key={idx} className="bg-white/50 rounded p-2">
              <div className="text-sm text-emerald-600">{commitment.commitment}</div>
              <div className="font-semibold text-emerald-800">Target: {commitment.target}</div>
            </div>
          ))}
        </div>
      </div>

      {/* COP28 Stats */}
      <div className="rounded-lg bg-emerald-50/30 p-4">
        <h5 className="font-semibold text-emerald-700 mb-3">COP28 Statistics</h5>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {dataTables.cop28Statistics.map((stat, idx) => (
            <div key={idx} className="text-center bg-white/50 rounded p-2">
              <div className="text-lg font-bold text-emerald-600">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.metric}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Greenwashing Evidence */}
      <div className="rounded-lg bg-rose-50/50 p-4 border-2 border-rose-200">
        <h5 className="font-semibold text-rose-700 mb-3">Greenwashing Evidence</h5>
        <div className="space-y-2">
          {counterNarrative.greenwashingEvidence.map((evidence, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-1 shrink-0" />
              <span className="font-medium text-rose-700">{evidence.issue}:</span>
              <span className="text-slate-600">{evidence.evidence}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EconomicPowerhouseContent() {
  const { proNarrative, counterNarrative } = economicPowerhouseNarrative
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      <div className="rounded-lg bg-emerald-50/50 p-4">
        <h5 className="font-semibold text-emerald-700 mb-3">Economic Indicators 2025</h5>
        <div className="grid gap-3 md:grid-cols-3">
          {proNarrative.economicIndicators.slice(0, 6).map((indicator, idx) => (
            <div key={idx} className="bg-white/50 rounded p-3 text-center">
              <div className="text-2xl font-bold text-emerald-600">{indicator.value}</div>
              <div className="text-sm text-slate-600">{indicator.metric}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-48">
          <h6 className="text-sm font-medium text-slate-700 mb-2">Trade Balance</h6>
          <PieChart
            data={[
              { name: 'Exports', value: 306.41 },
              { name: 'Imports', value: 229.2 },
            ]}
            height={150}
          />
        </div>
        <div className="h-48">
          <h6 className="text-sm font-medium text-slate-700 mb-2">FDI Inflows</h6>
          <BarChart
            data={[
              { year: '2022', fdi: 23 },
              { year: '2023', fdi: 30.7 },
            ]}
            xAxisKey="year"
            bars={[{ dataKey: 'fdi', name: 'FDI ($B)', color: CHART_COLORS.emerald }]}
            height={150}
            showGrid={true}
          />
        </div>
      </div>

      <div className="rounded-lg bg-rose-50/30 p-4">
        <h5 className="font-semibold text-rose-700 mb-3">Counter-Narrative</h5>
        <div className="space-y-2">
          {counterNarrative.issues.map((issue, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-1 shrink-0" />
              <span className="font-medium text-rose-700">{issue.issue}:</span>
              <span className="text-slate-600">{issue.evidence}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LavishLifestyleContent() {
  const { proNarrative, counterNarrative } = lavishLifestyleNarrative
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      <div className="rounded-lg bg-emerald-50/50 p-4">
        <h5 className="font-semibold text-emerald-700 mb-3">Luxury Infrastructure</h5>
        <div className="grid gap-3 md:grid-cols-2">
          {proNarrative.luxuryInfrastructure.map((item, idx) => (
            <div key={idx} className="bg-white/50 rounded p-2 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-emerald-500" />
              <div>
                <div className="font-medium text-emerald-700">{item.facility}</div>
                <div className="text-xs text-slate-500">{item.type} - {item.rating}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-rose-50/30 p-4">
        <h5 className="font-semibold text-rose-700 mb-3">Behind the Luxury</h5>
        <div className="space-y-2">
          {counterNarrative.issues.map((issue, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-1 shrink-0" />
              <span className="font-medium text-rose-700">{issue.issue}:</span>
              <span className="text-slate-600">{issue.evidence} ({issue.scale})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ForeignPolicyAggressorContent() {
  const { counterNarrative, proNarrative } = foreignPolicyAggressorNarrative
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      <div className="rounded-lg bg-rose-50/50 p-4 border-2 border-rose-200">
        <h5 className="font-semibold text-rose-700 mb-3">Military Profile</h5>
        <div className="space-y-2">
          {counterNarrative.militaryProfile.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <ShieldAlert className="h-4 w-4 text-rose-500 shrink-0" />
              <span className="font-medium text-rose-700">{item.element}:</span>
              <span className="text-slate-600">{item.details}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-rose-50/30 p-4">
        <h5 className="font-semibold text-rose-700 mb-3">Regional Involvement</h5>
        <div className="space-y-3">
          {counterNarrative.yemenInvolvement && (
            <div>
              <h6 className="text-sm font-medium text-rose-700">Yemen</h6>
              <div className="flex flex-wrap gap-2 mt-1">
                {counterNarrative.yemenInvolvement.map((item, idx) => (
                  <Badge key={idx} variant="outline" className="bg-rose-50">{item.date}: {item.event}</Badge>
                ))}
              </div>
            </div>
          )}
          {counterNarrative.libyaInvolvement && (
            <div>
              <h6 className="text-sm font-medium text-rose-700">Libya</h6>
              <ul className="mt-1 space-y-1">
                {counterNarrative.libyaInvolvement.map((item, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                    <Circle className="h-2 w-2 text-rose-500 fill-current" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function LandOfOpportunityContent() {
  const { proNarrative, counterNarrative } = landOfOpportunityNarrative
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200">
      <div className="rounded-lg bg-emerald-50/50 p-4">
        <h5 className="font-semibold text-emerald-700 mb-3">Job Market Data</h5>
        <div className="grid gap-3 md:grid-cols-2">
          {proNarrative.jobMarketData.map((job, idx) => (
            <div key={idx} className="bg-white/50 rounded p-3 flex items-center justify-between">
              <span className="text-slate-600">{job.platform}</span>
              <Badge variant="success">{job.jobCount} jobs</Badge>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-rose-50/30 p-4">
        <h5 className="font-semibold text-rose-700 mb-3">Counter-Narrative</h5>
        <div className="space-y-2">
          {counterNarrative.issues.map((issue, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-1 shrink-0" />
              <span className="font-medium text-rose-700">{issue.issue}:</span>
              <span className="text-slate-600">{issue.evidence}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Missing icon imports - adding them
function Rocket(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

export default function StrategicNarrativesPage() {
  const [expandedNarrative, setExpandedNarrative] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

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
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Strategic Narratives</h1>
          <p className="mt-2 text-slate-600">
            Comprehensive tracking of 12 dominant UAE narratives with pro/counter analysis
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
          title="Narratives Tracked"
          value="12"
          previousValue={12}
          icon={<Target className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Queries Executed"
          value="45"
          icon={<Search className="h-6 w-6" />}
          gradient="cyan"
        />
        <MetricCard
          title="Sources Analyzed"
          value="35"
          icon={<BookOpen className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Overall Sentiment"
          value="48%"
          previousValue={52}
          icon={<Brain className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="narratives">All Narratives</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="tensions">Key Tensions</TabsTrigger>
          <TabsTrigger value="sources">Source Matrix</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment Distribution */}
            <GlassPanel title="Sentiment Distribution" description="Overall coverage sentiment">
              <div className="h-64">
                <PieChart
                  data={[
                    { name: 'Positive', value: 38 },
                    { name: 'Neutral', value: 24 },
                    { name: 'Negative', value: 38 },
                  ]}
                  height={220}
                />
              </div>
            </GlassPanel>

            {/* Key Findings Summary */}
            <GlassPanel title="Narrative Summary" description="Framing by narrative">
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {keyFindings.map((finding, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-50/50">
                    <span className="font-medium text-sm">{finding.narrative}</span>
                    <Badge
                      variant={
                        finding.dominantFraming === 'PRO-NARRATIVE'
                          ? 'success'
                          : finding.dominantFraming === 'COUNTER-NARRATIVE'
                          ? 'destructive'
                          : 'warning'
                      }
                    >
                      {finding.dominantFraming.replace('-', ' ')}
                    </Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* UAE Profile */}
          <GlassPanel title="UAE Profile - Core Data" description="Basic facts about the UAE">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center p-4 rounded-lg bg-slate-50/50">
                <div className="text-3xl font-bold text-indigo-600">$569.1B</div>
                <div className="text-sm text-slate-600">GDP Nominal 2025</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-50/50">
                <div className="text-3xl font-bold text-emerald-600">11M+</div>
                <div className="text-sm text-slate-600">Population</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-50/50">
                <div className="text-3xl font-bold text-amber-600">200+</div>
                <div className="text-sm text-slate-600">Nationalities</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-50/50">
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-slate-600">Literacy Rate</div>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm">
              <div><span className="font-medium">System:</span> {uaeProfile.system}</div>
              <div><span className="font-medium">President:</span> {uaeProfile.president}</div>
              <div><span className="font-medium">Capital:</span> {uaeProfile.capital}</div>
              <div><span className="font-medium">Currency:</span> {uaeProfile.currency}</div>
              <div><span className="font-medium">GDP Growth:</span> {uaeProfile.gdpGrowth2024}</div>
              <div><span className="font-medium">Area:</span> {uaeProfile.area}</div>
            </div>
          </GlassPanel>

          {/* Summary Statistics */}
          <GlassPanel title="Research Summary" description="Execution statistics">
            <div className="grid gap-4 md:grid-cols-5">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">{summaryStatistics.totalQueriesExecuted}</div>
                <div className="text-xs text-slate-500">Queries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">{summaryStatistics.totalPagesFetched}</div>
                <div className="text-xs text-slate-500">Pages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{summaryStatistics.totalNarrativesCovered}</div>
                <div className="text-xs text-slate-500">Narratives</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">{summaryStatistics.totalSourceUrlsAccessed}</div>
                <div className="text-xs text-slate-500">Sources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">28</div>
                <div className="text-xs text-slate-500">Authoritative URLs</div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* All Narratives Tab */}
        <TabsContent value="narratives" className="space-y-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-4"
          >
            {keyFindings.map((narrative) => (
              <NarrativeCard
                key={narrative.narrative}
                narrative={narrative}
                isExpanded={expandedNarrative === narrative.narrative}
                onToggle={() =>
                  setExpandedNarrative(
                    expandedNarrative === narrative.narrative ? null : narrative.narrative
                  )
                }
              />
            ))}
          </motion.div>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment by Narrative" description="Positive/Neutral/Negative distribution">
            <div className="h-80">
              <BarChart
                data={sentimentDistributionByNarrative}
                xAxisKey="narrative"
                bars={[
                  { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                  { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.platinum },
                  { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                ]}
                height={280}
                showGrid={true}
              />
            </div>
          </GlassPanel>

          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Sentiment Radar" description="Narrative positioning">
              <RadarChart
                data={sentimentDistributionByNarrative.map((n) => ({
                  name: n.narrative.slice(0, 12),
                  positive: n.positive,
                  negative: n.negative,
                }))}
                metrics={[
                  { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                  { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                ]}
                height={300}
              />
            </GlassPanel>

            <GlassPanel title="Critical Narratives" description="Most contested storylines">
              <div className="space-y-4">
                {keyFindings
                  .filter((f) => f.dominantFraming === 'COUNTER-NARRATIVE')
                  .map((narrative, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-rose-50/50 border border-rose-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-rose-700">{narrative.narrative}</h4>
                        <Badge variant="destructive">{narrative.uaeRelevance}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-emerald-600">{narrative.proSources} pro-sources</span>
                        <span className="text-rose-600">{narrative.counterSources} counter-sources</span>
                      </div>
                    </div>
                  ))}
              </div>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* Key Tensions Tab */}
        <TabsContent value="tensions" className="space-y-6">
          <GlassPanel title="Key Contradictions" description="Critical narrative tensions identified">
            <div className="grid gap-6 md:grid-cols-2">
              {keyTensions.map((tension, idx) => (
                <Card key={idx} className="glass-card border-l-4 border-l-rose-400">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-rose-700">
                      {tension.contradiction}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tension.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <AlertTriangle className="h-3 w-3 text-rose-500 mt-1 shrink-0" />
                          <span className="text-slate-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Source Matrix Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Source Credibility Matrix" description="Tiered source classification">
            <div className="space-y-6">
              {/* Tier 1 */}
              <div>
                <h4 className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                  <Shield className="h-4 w-4" /> Tier 1: Government/Official (High Credibility)
                </h4>
                <div className="grid gap-2 md:grid-cols-3">
                  {sourceCredibilityMatrix.tier1.map((source, idx) => (
                    <div key={idx} className="p-3 rounded bg-emerald-50/50">
                      <div className="font-medium text-emerald-700">{source.source}</div>
                      <div className="text-xs text-slate-500">{source.type}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier 2 */}
              <div>
                <h4 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4" /> Tier 2: NGOs/Think Tanks (Medium-High Credibility)
                </h4>
                <div className="grid gap-2 md:grid-cols-3">
                  {sourceCredibilityMatrix.tier2.map((source, idx) => (
                    <div key={idx} className="p-3 rounded bg-purple-50/50">
                      <div className="font-medium text-purple-700">{source.source}</div>
                      <div className="text-xs text-slate-500">{source.type}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier 3 */}
              <div>
                <h4 className="font-semibold text-amber-700 mb-3 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Tier 3: Academic/Media (Medium Credibility)
                </h4>
                <div className="grid gap-2 md:grid-cols-2">
                  {sourceCredibilityMatrix.tier3.map((source, idx) => (
                    <div key={idx} className="p-3 rounded bg-amber-50/50">
                      <div className="font-medium text-amber-700">{source.source}</div>
                      <div className="text-xs text-slate-500">{source.type}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier 4 */}
              <div>
                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Tier 4: News Media (Medium Credibility)
                </h4>
                <div className="grid gap-2 md:grid-cols-3">
                  {sourceCredibilityMatrix.tier4.map((source, idx) => (
                    <div key={idx} className="p-3 rounded bg-slate-50/50">
                      <div className="font-medium text-slate-700">{source.source}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Monitoring Tab */}
        <TabsContent value="monitoring" className="space-y-6">
          <GlassPanel title="Priority Monitoring Recommendations" description="High-priority topics for ongoing tracking">
            <div className="space-y-4">
              {monitoringRecommendations.map((rec, idx) => (
                <Card
                  key={idx}
                  className={`glass-card border-l-4 ${
                    rec.priority === 'High' ? 'border-l-rose-400' : 'border-l-amber-400'
                  }`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{rec.topic}</CardTitle>
                      <Badge variant={rec.priority === 'High' ? 'destructive' : 'warning'}>
                        {rec.priority} Priority
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {rec.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <Circle className="h-2 w-2 fill-current" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* Data Tables */}
          <GlassPanel title="Reference Data Tables" description="Key metrics from research">
            <Tabs defaultValue="economic" className="space-y-4">
              <TabsList>
                <TabsTrigger value="economic">Economic</TabsTrigger>
                <TabsTrigger value="rights">Human Rights</TabsTrigger>
                <TabsTrigger value="rankings">Rankings</TabsTrigger>
                <TabsTrigger value="slavery">Modern Slavery</TabsTrigger>
              </TabsList>

              <TabsContent value="economic">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Indicator</th>
                        <th className="text-right p-2">2022</th>
                        <th className="text-right p-2">2023</th>
                        <th className="text-right p-2">2024</th>
                        <th className="text-right p-2">2025 (est.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTables.uaeEconomicIndicators.map((row, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-2">{row.indicator}</td>
                          <td className="text-right p-2">{row[2022 as keyof typeof row]}</td>
                          <td className="text-right p-2">{row[2023 as keyof typeof row]}</td>
                          <td className="text-right p-2">{row[2024 as keyof typeof row]}</td>
                          <td className="text-right p-2 font-semibold">{row['2025 (est.)' as keyof typeof row]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="rights">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Index</th>
                        <th className="text-right p-2">Score</th>
                        <th className="text-right p-2">Max</th>
                        <th className="text-right p-2">Rating</th>
                        <th className="text-right p-2">Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTables.humanRightsScores.map((row, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-2">{row.index}</td>
                          <td className="text-right p-2 font-semibold text-rose-600">{row.score}</td>
                          <td className="text-right p-2">{row.max}</td>
                          <td className="text-right p-2">
                            <Badge variant="destructive">{row.rating}</Badge>
                          </td>
                          <td className="text-right p-2">{row.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="rankings">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Index</th>
                        <th className="text-right p-2">Rank</th>
                        <th className="text-right p-2">Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTables.globalRankings.map((row, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-2">{row.index}</td>
                          <td className="text-right p-2 font-semibold text-emerald-600">{row.rank}</td>
                          <td className="text-right p-2">{row.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="slavery">
                <div className="grid gap-4 md:grid-cols-3">
                  {dataTables.modernSlaveryData.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-rose-50/50 text-center">
                      <div className="text-3xl font-bold text-rose-600">{item.value}</div>
                      <div className="text-sm text-slate-600 mt-1">{item.metric}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 rounded-lg bg-rose-100/50 text-center">
                  <p className="text-rose-800 font-semibold">
                    Arab States ranking: 2nd highest prevalence globally
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
