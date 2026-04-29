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
  Globe,
  Award,
  TrendingUp,
  Heart,
  Building2,
  GraduationCap,
  HandHeart,
  Trophy,
  Cpu,
  Tv2,
  MapPin,
  Users,
  Sword,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Download,
  ExternalLink,
  Flag,
  Lightbulb,
  Shield,
  Target,
  BookOpen,
  BarChart3,
  Droplets,
  Plane,
  Zap,
} from 'lucide-react'
import {
  softPowerData,
  executionMetadata,
  coreMetricsDashboard,
  globalRankings,
  softPowerStrategy,
  culturalDiplomacy,
  educationDiplomacy,
  humanitarianHealthDiplomacy,
  sportsDiplomacy,
  digitalTechnologyDiplomacy,
  mediaDiplomacy,
  nationPlaceBranding,
  toleranceMigration,
  geopoliticalStrategy,
  challengesLimitations,
  statisticalAppendix,
  sourceRegistry,
  sentimentAnalysis,
  uaeRelevanceAssessment,
  dashboardMetrics,
  dataQualityNotes,
} from '@/lib/data/perception/soft-power-data'

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

// Section icons mapping
const sectionIcons: Record<string, React.ReactNode> = {
  'Executive Summary': <Globe className="h-5 w-5" />,
  'Core Metrics': <Award className="h-5 w-5" />,
  'Global Rankings': <TrendingUp className="h-5 w-5" />,
  'Soft Power Strategy': <Target className="h-5 w-5" />,
  'Cultural Diplomacy': <Building2 className="h-5 w-5" />,
  'Education Diplomacy': <GraduationCap className="h-5 w-5" />,
  'Humanitarian & Health': <HandHeart className="h-5 w-5" />,
  'Sports Diplomacy': <Trophy className="h-5 w-5" />,
  'Digital & Technology': <Cpu className="h-5 w-5" />,
  'Media Diplomacy': <Tv2 className="h-5 w-5" />,
  'Nation & Place Branding': <Flag className="h-5 w-5" />,
  'Tolerance & Migration': <Users className="h-5 w-5" />,
  'Geopolitical Strategy': <Sword className="h-5 w-5" />,
  'Challenges & Limitations': <AlertTriangle className="h-5 w-5" />,
  'Statistical Appendix': <BarChart3 className="h-5 w-5" />,
  'Source Registry': <BookOpen className="h-5 w-5" />,
  'Sentiment Analysis': <Heart className="h-5 w-5" />,
  'UAE Relevance': <MapPin className="h-5 w-5" />,
}

// Section content components
function ExecutiveSummaryContent() {
  const { executiveSummary } = softPowerData
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
        <p className="text-lg text-slate-700 leading-relaxed">
          {executiveSummary.keyDifferentiator}. Founded on {executiveSummary.foundingPrinciples}, the UAE has diversified beyond oil to build comprehensive influence through {executiveSummary.strategy}.
        </p>
        <p className="mt-4 text-slate-600">
          <strong>Regional Approach:</strong> {executiveSummary.regionalApproach}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-200 text-center">
          <div className="text-3xl font-bold text-emerald-600">$1.22T</div>
          <div className="text-sm text-slate-600">Brand Value (2025)</div>
        </div>
        <div className="p-4 rounded-lg bg-indigo-50/50 border border-indigo-200 text-center">
          <div className="text-3xl font-bold text-indigo-600">11th</div>
          <div className="text-sm text-slate-600">Nation Brand (Anholt)</div>
        </div>
        <div className="p-4 rounded-lg bg-purple-50/50 border border-purple-200 text-center">
          <div className="text-3xl font-bold text-purple-600">5th</div>
          <div className="text-sm text-slate-600">Dubai City Index</div>
        </div>
      </div>
    </div>
  )
}

function CoreMetricsContent() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {coreMetricsDashboard.map((metric, idx) => (
          <div key={idx} className="p-4 rounded-lg bg-white/50 border border-slate-200 hover:border-indigo-300 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600 truncate">{metric.metric}</span>
              {metric.rank && metric.rank !== '-' && (
                <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                  #{metric.rank}
                </Badge>
              )}
            </div>
            <div className="text-xl font-bold text-slate-900">{metric.value}</div>
            <div className="text-xs text-slate-400 mt-1">{metric.source} | {metric.year}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function GlobalRankingsContent() {
  const { brandFinanceSoftPower2026, categoryRankings, regionalComparison } = globalRankings
  return (
    <div className="space-y-6">
      {/* Overall Performance */}
      <div className="p-6 rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="indigo" className="text-lg px-3 py-1">10th Globally</Badge>
          <span className="text-slate-600">Fourth consecutive year in top 10</span>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">{brandFinanceSoftPower2026.score}</div>
            <div className="text-xs text-slate-500">Score (59.4/100)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">193</div>
            <div className="text-xs text-slate-500">Countries Evaluated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">150K+</div>
            <div className="text-xs text-slate-500">Survey Respondents</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">ONLY</div>
            <div className="text-xs text-slate-500">Arab nation in top tier</div>
          </div>
        </div>
      </div>

      {/* Category Rankings */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Category Rankings</h4>
        <div className="grid gap-2 md:grid-cols-2">
          {categoryRankings.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded bg-white/50 border border-slate-200">
              <span className="text-sm text-slate-700">{item.category}</span>
              <div className="flex items-center gap-2">
                <Badge variant={item.trend === 'Top tier' ? 'success' : item.trend === 'Improved' ? 'default' : 'outline'}>
                  #{item.rank}
                </Badge>
                {item.trend !== 'Maintained' && item.trend !== 'Stable' && (
                  <span className="text-xs text-emerald-600">{item.trend}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Comparison */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Regional Comparison (2026)</h4>
        <div className="h-64">
          <BarChart
            data={regionalComparison.map(r => ({
              country: r.country,
              rank: parseInt(r.rank) || 0,
            }))}
            xAxisKey="country"
            bars={[{ dataKey: 'rank', name: 'Rank', color: CHART_COLORS.indigo }]}
            height={220}
            showGrid={true}
          />
        </div>
      </div>
    </div>
  )
}

function SoftPowerStrategyContent() {
  const { softPowerStrategy: strategy } = softPowerData
  return (
    <div className="space-y-6">
      {/* Institutional Framework */}
      <div className="p-6 rounded-lg bg-indigo-50/50 border border-indigo-100">
        <h4 className="font-semibold text-indigo-700 mb-3">Soft Power Council</h4>
        <p className="text-sm text-slate-600 mb-2">Launched: {strategy.institutionalFramework.softPowerCouncil.launched}</p>
        <p className="text-sm text-slate-600 italic">&ldquo;{strategy.institutionalFramework.softPowerCouncil.objective}&rdquo;</p>
      </div>

      {/* Four Main Objectives */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Four Main Objectives</h4>
        <div className="grid gap-3 md:grid-cols-2">
          {strategy.fourMainObjectives.map((obj, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded bg-white/50 border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
                {idx + 1}
              </div>
              <p className="text-sm text-slate-700">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Six Pillars */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Six Pillars Architecture</h4>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {strategy.sixPillarsArchitecture.map((pillar, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-indigo-700">{pillar.priority}</span>
                <Badge variant="outline">{pillar.pillar}</Badge>
              </div>
              <p className="text-xs text-slate-600">{pillar.keyInstruments}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Foundational Principles */}
      <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
        <h4 className="font-semibold text-slate-700 mb-3">Foundational Principles</h4>
        <p className="text-sm italic text-slate-600">&ldquo;{strategy.foundationalPrinciples}&rdquo;</p>
      </div>
    </div>
  )
}

function CulturalDiplomacyContent() {
  const { flagshipMuseums, culturalPrograms, expo2020Impact } = culturalDiplomacy
  return (
    <div className="space-y-6">
      {/* Flagship Museums */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Flagship Museums & Cultural Institutions</h4>
        <div className="grid gap-3 md:grid-cols-2">
          {flagshipMuseums.map((museum, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/50 border border-slate-200">
              <div className="flex items-start justify-between mb-2">
                <span className="font-semibold text-slate-700">{museum.institution}</span>
                <Badge variant="outline">{museum.opened}</Badge>
              </div>
              <p className="text-xs text-slate-500">{museum.location} | {museum.architect}</p>
              {museum.partnership && museum.partnership !== '-' && (
                <p className="text-xs text-indigo-600 mt-1">{museum.partnership}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Expo 2020 Impact */}
      <div className="p-6 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
        <h4 className="font-semibold text-amber-700 mb-4">Expo 2020 Dubai Impact</h4>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">{expo2020Impact.participatingCountries}</div>
            <div className="text-xs text-slate-600">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">{expo2020Impact.totalVisits}</div>
            <div className="text-xs text-slate-600">Total Visits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">{expo2020Impact.contributionToNationBrandValue}</div>
            <div className="text-xs text-slate-600">Brand Contribution</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">2/3</div>
            <div className="text-xs text-slate-600">of Top 10 Improvement</div>
          </div>
        </div>
      </div>

      {/* Research Finding */}
      <div className="p-4 rounded-lg bg-indigo-50/50 border border-indigo-100">
        <p className="text-sm italic text-slate-700">&ldquo;{culturalDiplomacy.researchFinding}&rdquo;</p>
      </div>
    </div>
  )
}

function EducationDiplomacyContent() {
  const { internationalUniversityCampuses, educationalStatistics, zayedUniversityDiplomacy } = educationDiplomacy
  return (
    <div className="space-y-6">
      {/* University Campuses */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">International University Campuses</h4>
        <div className="grid gap-3 md:grid-cols-2">
          {internationalUniversityCampuses.map((uni, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/50 border border-slate-200">
              <div className="flex items-start justify-between mb-2">
                <span className="font-semibold text-slate-700">{uni.institution}</span>
                <Badge variant="outline">{uni.established}</Badge>
              </div>
              <p className="text-xs text-slate-500">{uni.location} | {uni.students}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        {educationalStatistics.map((stat, idx) => (
          <div key={idx} className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-200 text-center">
            <div className="text-2xl font-bold text-emerald-600">{stat.value}</div>
            <div className="text-xs text-slate-600">{stat.metric}</div>
          </div>
        ))}
      </div>

      {/* Research Conclusion */}
      <div className="p-4 rounded-lg bg-purple-50/50 border border-purple-100">
        <p className="text-sm italic text-slate-700">&ldquo;{educationDiplomacy.researchConclusion}&rdquo;</p>
      </div>
    </div>
  )
}

function HumanitarianHealthContent() {
  const { foreignAidRankings, crisisSpecificAid, vaccineDiplomacy } = humanitarianHealthDiplomacy
  return (
    <div className="space-y-6">
      {/* Foreign Aid Rankings */}
      <div className="p-6 rounded-lg bg-emerald-50/50 border border-emerald-200">
        <h4 className="font-semibold text-emerald-700 mb-4">Foreign Aid Rankings</h4>
        <div className="grid gap-3 md:grid-cols-2">
          {foreignAidRankings.map((rank, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded bg-white/50">
              <span className="text-sm text-slate-700">{rank.metric}</span>
              <Badge variant="success">{rank.value}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Crisis Aid */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Crisis-Specific Aid Disbursement</h4>
        <div className="space-y-2">
          {crisisSpecificAid.map((crisis, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded bg-white/50 border border-slate-200">
              <div>
                <span className="font-medium text-slate-700">{crisis.crisis}</span>
                <span className="text-xs text-slate-400 ml-2">({crisis.period})</span>
              </div>
              <Badge variant="outline">{crisis.amount}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Vaccine Diplomacy */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Vaccine Diplomacy</h4>
        <div className="grid gap-3 md:grid-cols-3">
          {vaccineDiplomacy.map((vax, idx) => (
            <div key={idx} className="p-3 rounded bg-blue-50/50 border border-blue-200">
              <div className="text-sm font-medium text-blue-700">{vax.metric}</div>
              <div className="text-lg font-bold text-blue-600">{vax.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SportsDiplomacyContent() {
  const { majorEvents, jiuJitsuStrategy, footballInvestment, clubsTrainingInDubai } = sportsDiplomacy
  return (
    <div className="space-y-6">
      {/* Major Events */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Major Events & Infrastructure</h4>
        <div className="grid gap-3 md:grid-cols-2">
          {majorEvents.map((event, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/50 border border-slate-200">
              <div className="flex items-start justify-between mb-2">
                <span className="font-semibold text-slate-700">{event.event}</span>
                {event.investment && event.investment !== '-' && (
                  <Badge variant="outline">{event.investment}</Badge>
                )}
              </div>
              <p className="text-xs text-slate-500">{event.location} | {event.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Jiu-Jitsu Strategy */}
      <div className="p-6 rounded-lg bg-amber-50/50 border border-amber-200">
        <h4 className="font-semibold text-amber-700 mb-4">Jiu-Jitsu Strategy (National Sport)</h4>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">~200K</div>
            <div className="text-xs text-slate-600">Practitioners</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">130+</div>
            <div className="text-xs text-slate-600">Schools</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">76K+</div>
            <div className="text-xs text-slate-600">Students (2016)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">2015</div>
            <div className="text-xs text-slate-600">Grand Slam Launch</div>
          </div>
        </div>
      </div>

      {/* Football Investment */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Football Investment</h4>
        <div className="space-y-2">
          {footballInvestment.map((inv, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded bg-white/50 border border-slate-200">
              <span className="font-medium text-slate-700">{inv.entity}</span>
              <div className="text-right">
                <div className="text-sm font-semibold text-indigo-600">{inv.investment}</div>
                <div className="text-xs text-slate-400">{inv.year}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-2">Clubs training in Dubai: {clubsTrainingInDubai.join(', ')}</p>
      </div>

      {/* Sportswashing Analysis */}
      <div className="p-4 rounded-lg bg-slate-100/50 border border-slate-200">
        <p className="text-sm italic text-slate-700">&ldquo;{sportsDiplomacy.sportswashingAnalysis}&rdquo;</p>
        <p className="text-xs text-indigo-600 mt-2 font-medium">UAE Approach: {sportsDiplomacy.uaeApproach}</p>
      </div>
    </div>
  )
}

function DigitalTechnologyContent() {
  const { aiStrategy, digitalDiplomacyTools, strategicGoals } = digitalTechnologyDiplomacy
  return (
    <div className="space-y-6">
      {/* AI Strategy */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">AI & Technology Strategy</h4>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {aiStrategy.map((tech, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-700">{tech.initiative}</span>
                <Badge variant="outline">{tech.launch}</Badge>
              </div>
              <p className="text-xs text-cyan-600">{tech.goal}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Diplomacy Tools */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Digital Diplomacy Tools</h4>
        <div className="grid gap-2 md:grid-cols-2">
          {digitalDiplomacyTools.map((tool, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded bg-white/50 border border-slate-200">
              <span className="font-medium text-slate-700">{tool.platform}</span>
              <Badge variant="outline" className="text-xs">{tool.strategicPurpose}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Goals */}
      <div className="p-4 rounded-lg bg-indigo-50/50 border border-indigo-100">
        <h4 className="font-semibold text-indigo-700 mb-3">Strategic Goals of Digital Diplomacy</h4>
        <div className="grid gap-2 md:grid-cols-2">
          {strategicGoals.map((goal, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-indigo-500" />
              {goal}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MediaDiplomacyContent() {
  const { mediaFunctions, keyPlatforms } = mediaDiplomacy
  return (
    <div className="space-y-6">
      {/* Core Characterization */}
      <div className="p-6 rounded-lg bg-slate-50/50 border border-slate-200">
        <p className="text-lg italic text-slate-700">&ldquo;{mediaDiplomacy.coreCharacterization}&rdquo;</p>
      </div>

      {/* Media Functions */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Media Functions</h4>
        <div className="grid gap-3 md:grid-cols-2">
          {mediaFunctions.map((func, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/50 border border-slate-200">
              <div className="font-semibold text-indigo-700 mb-1">{func.function}</div>
              <p className="text-sm text-slate-600">{func.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Platforms */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Key Platforms</h4>
        <div className="space-y-2">
          {keyPlatforms.map((platform, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded bg-white/50 border border-slate-200">
              <span className="font-medium text-slate-700">{platform.platform}</span>
              <span className="text-xs text-slate-500">{platform.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Core Quote */}
      <div className="p-4 rounded-lg bg-indigo-100/50 border border-indigo-200">
        <p className="text-sm italic text-indigo-800">&ldquo;{mediaDiplomacy.coreQuote}&rdquo;</p>
      </div>
    </div>
  )
}

function NationBrandingContent() {
  const { sevenLinesNationBrand, uaeTourismStrategy2031, dubaiBrandRankings } = nationPlaceBranding
  return (
    <div className="space-y-6">
      {/* Seven Lines */}
      <div className="p-6 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-purple-700">Nation Brand: &ldquo;Seven Lines&rdquo;</h4>
          <Badge variant="outline">{sevenLinesNationBrand.launchDate}</Badge>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">11th</div>
            <div className="text-xs text-slate-600">Global Rank</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">7</div>
            <div className="text-xs text-slate-600">Emirates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">10M</div>
            <div className="text-xs text-slate-600">Design Contest Votes</div>
          </div>
        </div>
      </div>

      {/* Tourism Strategy 2031 */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">UAE Tourism Strategy 2031</h4>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200 text-center">
            <div className="text-2xl font-bold text-amber-600">AED 450B</div>
            <div className="text-xs text-slate-600">Tourism GDP</div>
          </div>
          <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200 text-center">
            <div className="text-2xl font-bold text-amber-600">AED 100B</div>
            <div className="text-xs text-slate-600">Additional Investment</div>
          </div>
          <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200 text-center">
            <div className="text-2xl font-bold text-amber-600">40M</div>
            <div className="text-xs text-slate-600">Hotel Guests</div>
          </div>
          <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200 text-center">
            <div className="text-2xl font-bold text-amber-600">25</div>
            <div className="text-xs text-slate-600">Initiatives</div>
          </div>
        </div>
      </div>

      {/* Dubai Brand Rankings */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Dubai Brand Rankings</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Index</th>
                <th className="text-right p-2">2023</th>
                <th className="text-right p-2">2024</th>
                <th className="text-right p-2">2025</th>
              </tr>
            </thead>
            <tbody>
              {dubaiBrandRankings.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{row.index}</td>
                  <td className="text-right p-2 font-semibold text-emerald-600">{row[2023 as keyof typeof row] || '-'}</td>
                  <td className="text-right p-2 font-semibold text-emerald-600">{row[2024 as keyof typeof row] || '-'}</td>
                  <td className="text-right p-2 font-semibold text-emerald-600">{row[2025 as keyof typeof row] || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function ToleranceMigrationContent() {
  const { demographics, majorMigrantPopulations, tolerancePolicyInitiatives } = toleranceMigration
  return (
    <div className="space-y-6">
      {/* Demographics */}
      <div className="p-6 rounded-lg bg-emerald-50/50 border border-emerald-200">
        <h4 className="font-semibold text-emerald-700 mb-4">Demographics</h4>
        <div className="grid gap-4 md:grid-cols-3">
          {demographics.map((demo, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{demo.value}</div>
              <div className="text-xs text-slate-600">{demo.metric}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Major Migrant Populations */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Major Migrant Populations (2024)</h4>
        <div className="h-64">
          <BarChart
            data={majorMigrantPopulations.slice(0, 6).map(m => ({
              country: m.country,
              stock: parseInt(m.migrantStock.replace(/,/g, '')) || 0,
            }))}
            xAxisKey="country"
            bars={[{ dataKey: 'stock', name: 'Migrant Stock', color: CHART_COLORS.emerald }]}
            height={220}
            showGrid={true}
          />
        </div>
      </div>

      {/* Tolerance Policy Initiatives */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Tolerance Policy Initiatives</h4>
        <div className="grid gap-3 md:grid-cols-2">
          {tolerancePolicyInitiatives.map((init, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/50 border border-slate-200">
              <div className="flex items-start justify-between mb-2">
                <span className="font-semibold text-slate-700">{init.initiative}</span>
                <Badge variant="outline">{init.year}</Badge>
              </div>
              <p className="text-xs text-slate-500">{init.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        {toleranceMigration.keyStatisticsSupportingToleranceNarrative.map((stat, idx) => (
          <div key={idx} className="p-4 rounded-lg bg-purple-50/50 border border-purple-200 text-center">
            <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
            <div className="text-xs text-slate-600">{stat.metric}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function GeopoliticalStrategyContent() {
  const { phase1SoftPowerFoundation, phase2AssertiveShift, phase3Recalibration, phase4ContinuedHardPower, militaryCapabilities } = geopoliticalStrategy
  return (
    <div className="space-y-6">
      {/* Phase Timeline */}
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
        <div className="space-y-6 relative">
          {/* Phase 1 */}
          <div className="ml-8 p-4 rounded-lg bg-emerald-50/50 border border-emerald-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-emerald-700">Phase 1: Soft Power Foundation</h4>
              <Badge variant="success">Pre-2011</Badge>
            </div>
            <div className="grid gap-2 md:grid-cols-5">
              {phase1SoftPowerFoundation.elements.map((el, idx) => (
                <div key={idx} className="text-center p-2 rounded bg-white/50">
                  <div className="text-sm font-medium text-slate-700">{el.element}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 2 */}
          <div className="ml-8 p-4 rounded-lg bg-amber-50/50 border border-amber-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-amber-700">Phase 2: Assertive Shift</h4>
              <Badge variant="warning">Post-2011</Badge>
            </div>
            <div className="space-y-2">
              {phase2AssertiveShift.actions.map((action, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-700">{action.action}: </span>
                    <span className="text-slate-600">{action.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 3 */}
          <div className="ml-8 p-4 rounded-lg bg-blue-50/50 border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-blue-700">Phase 3: Recalibration</h4>
              <Badge variant="default">2021-2023</Badge>
            </div>
            <div className="space-y-2">
              {phase3Recalibration.actions.map((action, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-700">{action.action}: </span>
                    <span className="text-slate-600">{action.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 4 */}
          <div className="ml-8 p-4 rounded-lg bg-rose-50/50 border border-rose-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-rose-700">Phase 4: Continued Hard Power</h4>
              <Badge variant="destructive">2023-Present</Badge>
            </div>
            <div className="space-y-2">
              {phase4ContinuedHardPower.actions.map((action, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <AlertTriangle className="h-4 w-4 text-rose-500 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-700">{action.action}: </span>
                    <span className="text-slate-600">{action.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Military Capabilities */}
      <div className="p-6 rounded-lg bg-slate-100/50 border border-slate-300">
        <h4 className="font-semibold text-slate-700 mb-4">Military Capabilities</h4>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="p-3 rounded bg-white/50">
            <div className="text-sm font-medium text-slate-700">Nickname</div>
            <div className="text-indigo-600 font-semibold">{militaryCapabilities.nickname}</div>
          </div>
          <div className="p-3 rounded bg-white/50">
            <div className="text-sm font-medium text-slate-700">Army Quality</div>
            <div className="text-indigo-600 font-semibold">{militaryCapabilities.armyQuality}</div>
          </div>
          <div className="p-3 rounded bg-white/50">
            <div className="text-sm font-medium text-slate-700">EDGE Group Ranking</div>
            <div className="text-indigo-600 font-semibold">{militaryCapabilities.ediGroup}</div>
          </div>
          <div className="p-3 rounded bg-white/50">
            <div className="text-sm font-medium text-slate-700">Defense Exhibitions</div>
            <div className="text-indigo-600 font-semibold">{militaryCapabilities.defenseExhibitions}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChallengesContent() {
  const { externalChallenges, internalChallenges } = challengesLimitations
  return (
    <div className="space-y-6">
      {/* External Challenges */}
      <div>
        <h4 className="font-semibold text-rose-700 mb-3">External Challenges</h4>
        <div className="space-y-2">
          {externalChallenges.map((challenge, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/50 border border-slate-200">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-rose-500 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-700">{challenge.challenge}: </span>
                  <span className="text-sm text-slate-600">{challenge.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internal Challenges */}
      <div>
        <h4 className="font-semibold text-amber-700 mb-3">Internal Challenges</h4>
        <div className="space-y-2">
          {internalChallenges.map((challenge, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/50 border border-slate-200">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-700">{challenge.challenge}: </span>
                  <span className="text-sm text-slate-600">{challenge.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Authenticity Critique */}
      <div className="p-4 rounded-lg bg-slate-100/50 border border-slate-200">
        <p className="text-sm italic text-slate-700">&ldquo;{challengesLimitations.authenticityCritique}&rdquo;</p>
      </div>
    </div>
  )
}

function StatisticalAppendixContent() {
  const { softPowerIndexScores, categoryRankingsQuickRef, foreignAidMetrics, culturalInfrastructure, sportsInvestment, populationDemographics, economicMetrics } = statisticalAppendix
  return (
    <div className="space-y-6">
      {/* Soft Power Index */}
      <div className="p-6 rounded-lg bg-indigo-50/50 border border-indigo-100">
        <h4 className="font-semibold text-indigo-700 mb-4">Soft Power Index Scores (2026)</h4>
        <div className="grid gap-3 md:grid-cols-3">
          {softPowerIndexScores.map((score, idx) => (
            <div key={idx} className="text-center p-4 rounded bg-white/50">
              <div className="text-2xl font-bold text-indigo-600">{score.scoreRank}</div>
              <div className="text-xs text-slate-600">{score.metric}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Rankings */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Category Rankings</h4>
        <div className="grid gap-2 md:grid-cols-3">
          {categoryRankingsQuickRef.map((rank, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded bg-white/50 border border-slate-200">
              <span className="text-sm text-slate-700 truncate">{rank.category}</span>
              <Badge variant="outline">#{rank.rank}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Foreign Aid Metrics */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Foreign Aid Metrics</h4>
        <div className="grid gap-2 md:grid-cols-2">
          {foreignAidMetrics.map((metric, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded bg-white/50 border border-slate-200">
              <span className="text-sm text-slate-700">{metric.metric}</span>
              <Badge variant="success">{metric.value}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Infrastructure */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Cultural Infrastructure</h4>
        <div className="grid gap-3 md:grid-cols-3">
          {culturalInfrastructure.map((item, idx) => (
            <div key={idx} className="p-4 rounded bg-white/50 border border-slate-200 text-center">
              <div className="text-lg font-bold text-amber-600">{item.visitorsCapacity}</div>
              <div className="text-xs text-slate-600">{item.institution}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SourceRegistryContent() {
  const { governmentOfficial, academicResearch, media, thinkTanksResearch, internationalOrganizations } = sourceRegistry
  return (
    <div className="space-y-6">
      {/* Government/Official */}
      <div>
        <h4 className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
          <Shield className="h-4 w-4" /> Government/Official Sources
        </h4>
        <div className="grid gap-2 md:grid-cols-2">
          {governmentOfficial.map((source, idx) => (
            <div key={idx} className="p-3 rounded bg-emerald-50/50 border border-emerald-200">
              <div className="font-medium text-emerald-700">{source.source}</div>
              <div className="text-xs text-slate-500">{source.url} | {source.credibility} | {source.uaeRelevance}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic/Research */}
      <div>
        <h4 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
          <BookOpen className="h-4 w-4" /> Academic/Research Sources
        </h4>
        <div className="grid gap-2 md:grid-cols-2">
          {academicResearch.map((source, idx) => (
            <div key={idx} className="p-3 rounded bg-purple-50/50 border border-purple-200">
              <div className="font-medium text-purple-700">{source.source}</div>
              <div className="text-xs text-slate-500">{source.type} | {source.credibility}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Media */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Media Sources</h4>
        <div className="grid gap-2 md:grid-cols-2">
          {media.map((source, idx) => (
            <div key={idx} className="p-3 rounded bg-slate-50/50 border border-slate-200">
              <div className="font-medium text-slate-700">{source.source}</div>
              <div className="text-xs text-slate-500">{source.language} | {source.credibility}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Think Tanks */}
      <div>
        <h4 className="font-semibold text-blue-700 mb-3">Think Tanks/Research</h4>
        <div className="grid gap-2 md:grid-cols-2">
          {thinkTanksResearch.map((source, idx) => (
            <div key={idx} className="p-3 rounded bg-blue-50/50 border border-blue-200">
              <div className="font-medium text-blue-700">{source.source}</div>
              <div className="text-xs text-slate-500">{source.focus} | {source.credibility}</div>
            </div>
          ))}
        </div>
      </div>

      {/* International Organizations */}
      <div>
        <h4 className="font-semibold text-indigo-700 mb-3">International Organizations</h4>
        <div className="grid gap-2 md:grid-cols-2">
          {internationalOrganizations.map((source, idx) => (
            <div key={idx} className="p-3 rounded bg-indigo-50/50 border border-indigo-200">
              <div className="font-medium text-indigo-700">{source.source}</div>
              <div className="text-xs text-slate-500">{source.role} | {source.credibility}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SentimentAnalysisContent() {
  const { overallSentiment, byDimension, byTopic } = sentimentAnalysis
  return (
    <div className="space-y-6">
      {/* Overall Sentiment */}
      <div className="p-6 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-emerald-700">Overall Sentiment</h4>
          <Badge variant="success">{overallSentiment}</Badge>
        </div>
        <div className="h-48">
          <PieChart
            data={[
              { name: 'Positive', value: 45 },
              { name: 'Neutral', value: 30 },
              { name: 'Negative', value: 25 },
            ]}
            height={180}
          />
        </div>
      </div>

      {/* By Dimension */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">By Dimension</h4>
        <div className="space-y-2">
          {byDimension.map((dim, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-slate-700">{dim.dimension}</span>
                <Badge variant={dim.sentiment.includes('Positive') ? 'success' : dim.sentiment.includes('Negative') ? 'destructive' : 'warning'}>
                  {dim.sentiment}
                </Badge>
              </div>
              <p className="text-xs text-slate-500">{dim.evidence}</p>
            </div>
          ))}
        </div>
      </div>

      {/* By Topic */}
      <div>
        <h4 className="font-semibold text-slate-700 mb-3">By Topic</h4>
        <div className="grid gap-2 md:grid-cols-2">
          {byTopic.map((topic, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded bg-white/50 border border-slate-200">
              <span className="text-sm text-slate-700">{topic.topic}</span>
              <Badge variant={topic.sentiment === 'Positive' ? 'success' : topic.sentiment === 'Negative' ? 'destructive' : 'warning'}>
                {topic.sentiment}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function UAERelevanceContent() {
  const { directUaeInterests, regionalCompetition, globalPositioning, challenges } = uaeRelevanceAssessment
  return (
    <div className="space-y-6">
      {/* Direct UAE Interests */}
      <div className="p-6 rounded-lg bg-emerald-50/50 border border-emerald-200">
        <h4 className="font-semibold text-emerald-700 mb-4">Direct UAE Interests (High Relevance)</h4>
        <div className="space-y-2">
          {directUaeInterests.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Regional Competition */}
      <div className="p-6 rounded-lg bg-amber-50/50 border border-amber-200">
        <h4 className="font-semibold text-amber-700 mb-4">Regional Competition (Medium-High Relevance)</h4>
        <div className="space-y-2">
          {regionalCompetition.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
              <TrendingUp className="h-4 w-4 text-amber-500" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Global Positioning */}
      <div className="p-6 rounded-lg bg-blue-50/50 border border-blue-200">
        <h4 className="font-semibold text-blue-700 mb-4">Global Positioning (Medium Relevance)</h4>
        <div className="space-y-2">
          {globalPositioning.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
              <Globe className="h-4 w-4 text-blue-500" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div className="p-6 rounded-lg bg-rose-50/50 border border-rose-200">
        <h4 className="font-semibold text-rose-700 mb-4">Challenges (Requires Monitoring)</h4>
        <div className="space-y-2">
          {challenges.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
              <AlertTriangle className="h-4 w-4 text-rose-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SoftPowerPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedSection, setExpandedSection] = useState<string | null>('Executive Summary')

  const sections = [
    { id: 'Executive Summary', component: <ExecutiveSummaryContent /> },
    { id: 'Core Metrics', component: <CoreMetricsContent /> },
    { id: 'Global Rankings', component: <GlobalRankingsContent /> },
    { id: 'Soft Power Strategy', component: <SoftPowerStrategyContent /> },
    { id: 'Cultural Diplomacy', component: <CulturalDiplomacyContent /> },
    { id: 'Education Diplomacy', component: <EducationDiplomacyContent /> },
    { id: 'Humanitarian & Health', component: <HumanitarianHealthContent /> },
    { id: 'Sports Diplomacy', component: <SportsDiplomacyContent /> },
    { id: 'Digital & Technology', component: <DigitalTechnologyContent /> },
    { id: 'Media Diplomacy', component: <MediaDiplomacyContent /> },
    { id: 'Nation & Place Branding', component: <NationBrandingContent /> },
    { id: 'Tolerance & Migration', component: <ToleranceMigrationContent /> },
    { id: 'Geopolitical Strategy', component: <GeopoliticalStrategyContent /> },
    { id: 'Challenges & Limitations', component: <ChallengesContent /> },
    { id: 'Statistical Appendix', component: <StatisticalAppendixContent /> },
    { id: 'Source Registry', component: <SourceRegistryContent /> },
    { id: 'Sentiment Analysis', component: <SentimentAnalysisContent /> },
    { id: 'UAE Relevance', component: <UAERelevanceContent /> },
  ]

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
          <h1 className="text-3xl font-extrabold gradient-text-indigo">UAE Soft Power & Public Diplomacy</h1>
          <p className="mt-2 text-slate-600">
            Only Arab nation in global top 10 soft power rankings for four consecutive years
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <Globe className="h-4 w-4" />
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
          title="Soft Power Index"
          value="59.4/100"
          previousValue={60.4}
          icon={<Globe className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Global Rank"
          value="10th"
          previousValue={9}
          icon={<Award className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Brand Value"
          value="$1.22T"
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Overall Sentiment"
          value="58%"
          previousValue={52}
          icon={<Heart className="h-6 w-6" />}
          gradient="rose"
          status="success"
        />
      </motion.div>

      {/* Data Quality */}
      <div className="p-4 rounded-lg bg-slate-100/50 border border-slate-200 text-center">
        <p className="text-sm text-slate-600">
          <span className="font-semibold">Data Quality:</span> {dataQualityNotes.confidenceLevel} Confidence | {dataQualityNotes.queriesExecuted} Queries | {dataQualityNotes.pagesFetched} Pages | Verification: {dataQualityNotes.verificationStatus}
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel flex flex-wrap h-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="strategy">Strategy</TabsTrigger>
          <TabsTrigger value="diplomacy">Diplomacy</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment Overview */}
            <GlassPanel title="Sentiment Distribution" description="Overall coverage sentiment">
              <div className="h-64">
                <PieChart
                  data={[
                    { name: 'Positive', value: 45 },
                    { name: 'Neutral', value: 30 },
                    { name: 'Negative', value: 25 },
                  ]}
                  height={220}
                />
              </div>
            </GlassPanel>

            {/* Six Pillars */}
            <GlassPanel title="Six Pillars Architecture" description="Soft power priority framework">
              <div className="space-y-2">
                {softPowerStrategy.sixPillarsArchitecture.map((pillar, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
                        {pillar.priority.replace('st', '').replace('nd', '').replace('rd', '').replace('th', '')}
                      </div>
                      <span className="font-medium text-slate-700">{pillar.pillar}</span>
                    </div>
                    <Badge variant="outline">{pillar.keyInstruments.split(',')[0]}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Core Metrics Dashboard */}
          <GlassPanel title="Core Metrics Dashboard" description="Key performance indicators">
            <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-6">
              {coreMetricsDashboard.slice(0, 6).map((metric, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/50 border border-slate-200 text-center">
                  <div className="text-lg font-bold text-indigo-600">{metric.rank || metric.value}</div>
                  <div className="text-xs text-slate-500 truncate">{metric.metric}</div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Strategy Tab */}
        <TabsContent value="strategy" className="space-y-4">
          {sections.filter(s => ['Soft Power Strategy', 'Nation & Place Branding', 'Tolerance & Migration', 'Geopolitical Strategy'].includes(s.id)).map((section) => (
            <motion.div
              key={section.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card
                className="glass-card cursor-pointer hover:shadow-glass-lg transition-all duration-300 border-2 hover:border-indigo-200"
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                        {sectionIcons[section.id]}
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900">{section.id}</CardTitle>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    </motion.div>
                  </div>
                </CardHeader>
                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-0">
                        {section.component}
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        {/* Diplomacy Tab */}
        <TabsContent value="diplomacy" className="space-y-4">
          {sections.filter(s => ['Cultural Diplomacy', 'Education Diplomacy', 'Humanitarian & Health', 'Sports Diplomacy', 'Digital & Technology', 'Media Diplomacy'].includes(s.id)).map((section) => (
            <motion.div
              key={section.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card
                className="glass-card cursor-pointer hover:shadow-glass-lg transition-all duration-300 border-2 hover:border-indigo-200"
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                        {sectionIcons[section.id]}
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900">{section.id}</CardTitle>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    </motion.div>
                  </div>
                </CardHeader>
                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-0">
                        {section.component}
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        {/* Analysis Tab */}
        <TabsContent value="analysis" className="space-y-4">
          {sections.filter(s => ['Sentiment Analysis', 'UAE Relevance', 'Challenges & Limitations', 'Statistical Appendix'].includes(s.id)).map((section) => (
            <motion.div
              key={section.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card
                className="glass-card cursor-pointer hover:shadow-glass-lg transition-all duration-300 border-2 hover:border-indigo-200"
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                        {sectionIcons[section.id]}
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900">{section.id}</CardTitle>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    </motion.div>
                  </div>
                </CardHeader>
                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-0">
                        {section.component}
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-4">
          {sections.filter(s => ['Source Registry', 'Executive Summary', 'Core Metrics', 'Global Rankings'].includes(s.id)).map((section) => (
            <motion.div
              key={section.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card
                className="glass-card cursor-pointer hover:shadow-glass-lg transition-all duration-300 border-2 hover:border-indigo-200"
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                        {sectionIcons[section.id]}
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900">{section.id}</CardTitle>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    </motion.div>
                  </div>
                </CardHeader>
                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-0">
                        {section.component}
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
