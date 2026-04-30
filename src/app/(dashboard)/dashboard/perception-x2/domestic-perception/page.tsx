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
  domesticPerceptionData,
  executionMetadata,
  focusAreas,
  emiratiSentiment,
  expatSentiment,
  officialRankings,
  regionalHappinessRankings,
  top10KeyTakeaways,
  emiratiYouthSurveyData,
  governmentConfidenceData,
  emiratisationData,
  wagesData,
  costOfLivingData,
  marriageDivorceData,
  healthcareData,
  educationData,
  expatMentalHealthData,
  expatFinancialData,
  sentimentAnalysis,
  corePerceptionIndicators,
  keyStakeholderGroups,
  sourceCredibilityMatrix,
  dataQualityMatrix,
  nationalIdentityStrategy,
  verificationStatus,
  notes,
  keySources,
  summaryStatistics,
  dashboardMetrics,
} from '@/lib/data/perception/domestic-perception-data'

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

// Missing icon components
function HeartPulseIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 5.006a5 5 0 1 1 7.5 7.566z" />
      <path d="M12 5.006V12" />
    </svg>
  )
}

function BanknoteIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
}

function HeartCrackIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A2.5 2.5 0 0 0 2 5.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="m12 13-1-1 2-2-3-3 2-2" />
    </svg>
  )
}

function PlaneIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}

function BrainCircuitIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0 1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0 1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5" />
      <path d="m15.7 10.4-.9.4" />
      <path d="m9.2 13.2-.9.4" />
      <path d="m13.6 15.7-.4-.9" />
      <path d="m10.8 9.2-.4-.9" />
      <path d="m15.7 13.5-.9-.4" />
      <path d="m9.2 10.9-.9-.4" />
      <path d="m10.4 15.7.4-.9" />
      <path d="m13.1 9.2.4-.9" />
    </svg>
  )
}

function UsersRoundIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </svg>
  )
}

function WalletIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  )
}

function PiggyBankIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
      <path d="M16 11h0" />
    </svg>
  )
}

function HomeIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function StethoscopeIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  )
}

function GraduationCapIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

export default function DomesticPerceptionPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
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
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Domestic Perception</h1>
          <p className="mt-2 text-slate-600">
            What UAE residents (nationals AND expats) actually think - trust, happiness, and sentiment analysis
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
          title="Government Trust"
          value="80"
          unit="/100"
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Youth Optimism"
          value="91"
          unit="%"
          icon={<Brain className="h-6 w-6" />}
          gradient="cyan"
        />
        <MetricCard
          title="Happiness Rank"
          value="21"
          unit="st"
          icon={<Heart className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Expat Depression"
          value="74"
          unit="%"
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="gold"
        />
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="emirati">Emirati Sentiment</TabsTrigger>
          <TabsTrigger value="expat">Expat Sentiment</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="data">Data Tables</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Top 10 Takeaways */}
          <GlassPanel title="Top 10 Key Takeaways" description="Critical insights from domestic perception research">
            <div className="space-y-3">
              {top10KeyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50 hover:bg-slate-100/50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {takeaway.rank}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">{takeaway.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{takeaway.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Sentiment Overview */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Emirati Sentiment" description="National sentiment analysis">
              <div className="space-y-4">
                {sentimentAnalysis.emirati.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50">
                    <span className="font-medium text-slate-700">{item.aspect}</span>
                    <Badge
                      variant={
                        item.sentiment === 'Strongly Positive' || item.sentiment === 'Positive'
                          ? 'success'
                          : item.sentiment === 'Negative'
                          ? 'destructive'
                          : 'warning'
                      }
                    >
                      {item.sentiment}
                    </Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Expat Sentiment" description="Expatriate sentiment analysis">
              <div className="space-y-4">
                {sentimentAnalysis.expat.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50">
                    <span className="font-medium text-slate-700">{item.aspect}</span>
                    <Badge
                      variant={
                        item.sentiment === 'Positive'
                          ? 'success'
                          : item.sentiment === 'Negative'
                          ? 'destructive'
                          : 'warning'
                      }
                    >
                      {item.sentiment}
                    </Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Focus Areas */}
          <GlassPanel title="Research Focus Areas" description="What this research examined">
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area, idx) => (
                <Badge key={idx} variant="outline" className="bg-indigo-50/50">
                  {area}
                </Badge>
              ))}
            </div>
          </GlassPanel>

          {/* Core Perception Indicators */}
          <GlassPanel title="Core Perception Indicators" description="UAE relevance assessment">
            <div className="space-y-3">
              {corePerceptionIndicators.map((indicator, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50">
                  <span className="font-medium text-slate-700">{indicator.indicator}</span>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        indicator.uaeRelevance === 'Critical'
                          ? 'destructive'
                          : indicator.uaeRelevance === 'High'
                          ? 'warning'
                          : 'secondary'
                      }
                    >
                      {indicator.uaeRelevance}
                    </Badge>
                    <Badge
                      variant={
                        indicator.trend === 'Improving' || indicator.trend === 'Very Positive'
                          ? 'success'
                          : indicator.trend === 'Worsening'
                          ? 'destructive'
                          : indicator.trend === 'Monitoring'
                          ? 'warning'
                          : 'secondary'
                      }
                    >
                      {indicator.trend}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Emirati Sentiment Tab */}
        <TabsContent value="emirati" className="space-y-6">
          {/* Government Trust */}
          <GlassPanel title="Government Trust" description="UAE ranked #1 globally in Edelman Trust Barometer 2026">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-6 rounded-lg bg-emerald-50/50 border-2 border-emerald-200">
                <div className="text-5xl font-bold text-emerald-600">{emiratiSentiment.governmentTrust.score}</div>
                <div className="text-lg font-medium text-emerald-700 mt-2">out of 100</div>
                <div className="text-sm text-slate-500 mt-1">Edelman Trust Barometer</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-indigo-50/50 border-2 border-indigo-200">
                <div className="text-5xl font-bold text-indigo-600">#1</div>
                <div className="text-lg font-medium text-indigo-700 mt-2">Global Ranking</div>
                <div className="text-sm text-slate-500 mt-1">Up from 4th in 2025</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-purple-50/50 border-2 border-purple-200">
                <div className="text-5xl font-bold text-purple-600">80%</div>
                <div className="text-lg font-medium text-purple-700 mt-2">Trust Score</div>
                <div className="text-sm text-slate-500 mt-1">Highest ever recorded</div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-slate-50/50 rounded-lg">
              <p className="text-slate-700 italic">"{emiratiSentiment.governmentTrust.quote}"</p>
              <p className="text-sm text-slate-500 mt-2">— {emiratiSentiment.governmentTrust.quoteAuthor}</p>
            </div>
          </GlassPanel>

          {/* Youth Optimism Chart */}
          <GlassPanel title="Emirati Youth Optimism" description="MBZ Majlis for Future Generations Survey">
            <div className="h-80">
              <BarChart
                data={emiratiYouthSurveyData}
                xAxisKey="metric"
                bars={[{ dataKey: 'value', name: 'Percentage (%)', color: CHART_COLORS.info }]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>

          {/* Government Confidence */}
          <GlassPanel title="Government Confidence" description="Asda'a BCW Arab Youth Survey 2023">
            <div className="h-64">
              <BarChart
                data={governmentConfidenceData}
                xAxisKey="metric"
                bars={[{ dataKey: 'value', name: 'Confidence (%)', color: CHART_COLORS.emerald }]}
                height={220}
                showGrid={true}
              />
            </div>
          </GlassPanel>

          {/* Emiratisation Stats */}
          <GlassPanel title="Emiratisation Statistics" description="Private sector employment of Emiratis">
            <div className="grid gap-4 md:grid-cols-5">
              {emiratisationData.map((item, idx) => (
                <div key={idx} className="text-center p-4 rounded-lg bg-slate-50/50">
                  <div className="text-2xl font-bold text-indigo-600">{item.value}</div>
                  <div className="text-sm text-slate-600 mt-1">{item.metric}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Marriage & Divorce */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Marriage Statistics" description="Emirati marriage challenges">
              <div className="space-y-3">
                {marriageDivorceData.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 rounded bg-slate-50/50">
                    <span className="text-slate-700">{item.metric}</span>
                    <span className="font-semibold text-indigo-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Divorce Rates" description="By marriage type">
              <div className="h-64">
                <BarChart
                  data={[
                    { type: 'Emirati-Emirati', rate: 25 },
                    { type: 'Emirati-Expat', rate: 37 },
                    { type: 'Emirati Woman-Foreigner', rate: 27 },
                    { type: 'Overall', rate: 27 },
                  ]}
                  xAxisKey="type"
                  bars={[{ dataKey: 'rate', name: 'Divorce Rate (%)', color: CHART_COLORS.rose }]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </GlassPanel>
          </div>

          {/* Wages */}
          <GlassPanel title="Wages & Salaries" description="Compensation data">
            <div className="grid gap-4 md:grid-cols-4">
              {wagesData.slice(0, 4).map((item, idx) => (
                <div key={idx} className="text-center p-4 rounded-lg bg-emerald-50/50">
                  <div className="text-2xl font-bold text-emerald-600">{item.value}</div>
                  <div className="text-sm text-slate-600 mt-1">{item.metric}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Healthcare */}
          <GlassPanel title="Healthcare Efficiency" description="Emirates Health Services improvements">
            <div className="grid gap-4 md:grid-cols-4">
              {healthcareData.slice(0, 4).map((item, idx) => (
                <div key={idx} className="text-center p-4 rounded-lg bg-cyan-50/50">
                  <div className="text-2xl font-bold text-cyan-600">{item.value}</div>
                  <div className="text-sm text-slate-600 mt-1">{item.metric}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Education */}
          <GlassPanel title="Education" description="Emirati students in private schools">
            <div className="h-64">
              <BarChart
                data={educationData}
                xAxisKey="metric"
                bars={[{ dataKey: 'value', name: 'Value', color: CHART_COLORS.purple }]}
                height={220}
                showGrid={true}
              />
            </div>
          </GlassPanel>

          {/* National Identity Strategy */}
          <GlassPanel title="National Identity Strategy" description="Announced November 6, 2025">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Three Pillars</h4>
                <div className="grid gap-2 md:grid-cols-3">
                  {nationalIdentityStrategy.threePillars.map((pillar, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-indigo-50/50 text-center">
                      <span className="text-indigo-700">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Six Core Elements</h4>
                <div className="flex flex-wrap gap-2">
                  {nationalIdentityStrategy.sixCoreElements.map((element, idx) => (
                    <Badge key={idx} variant="outline" className="bg-indigo-50/50">
                      {element}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Five Core Values</h4>
                <div className="flex flex-wrap gap-2">
                  {nationalIdentityStrategy.fiveCoreValues.map((value, idx) => (
                    <Badge key={idx} variant="outline" className="bg-emerald-50/50">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Expat Sentiment Tab */}
        <TabsContent value="expat" className="space-y-6">
          {/* Positive vs Negative */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Positive Factors" description="Why expats appreciate UAE">
              <div className="space-y-3">
                {expatSentiment.positiveFactors.map((factor, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-emerald-50/50">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{factor}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Negative Factors" description="Why expats struggle in UAE">
              <div className="space-y-3">
                {expatSentiment.negativeFactors.slice(0, 7).map((factor, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-rose-50/50">
                    <AlertTriangle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{factor}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Why Expats Leave */}
          <GlassPanel title="Why Expats Leave" description="Top 10 departure reasons">
            <div className="space-y-2">
              {expatSentiment.whyExpatsLeave.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50/50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white text-xs font-bold">
                    {item.rank}
                  </div>
                  <span className="text-slate-700">{item.reason}</span>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Mental Health Crisis */}
          <GlassPanel title="Mental Health Crisis" description="Expat mental health challenges">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="text-center p-6 rounded-lg bg-rose-50/50 border-2 border-rose-200">
                <div className="text-4xl font-bold text-rose-600">{expatSentiment.mentalHealth.expatsInUAE}%</div>
                <div className="text-sm text-slate-600 mt-1">Expats in UAE</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-rose-50/50 border-2 border-rose-200">
                <div className="text-4xl font-bold text-rose-600">{expatSentiment.mentalHealth.depressionCasesUndiagnosed}%</div>
                <div className="text-sm text-slate-600 mt-1">Depression Undiagnosed</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-rose-50/50 border-2 border-rose-200">
                <div className="text-4xl font-bold text-rose-600">{expatSentiment.mentalHealth.adultsWithMentalHealthDisorder}%</div>
                <div className="text-sm text-slate-600 mt-1">Adults with Disorder</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-amber-50/50 border-2 border-amber-200">
                <div className="text-4xl font-bold text-amber-600">{expatSentiment.mentalHealth.socialIsolationHealthRisk}</div>
                <div className="text-sm text-slate-600 mt-1">Health Risk Equivalent</div>
              </div>
            </div>
          </GlassPanel>

          {/* Cost of Living */}
          <GlassPanel title="Cost of Living" description="Living expenses in UAE">
            <div className="h-72">
              <BarChart
                data={costOfLivingData}
                xAxisKey="metric"
                bars={[{ dataKey: 'value', name: 'Amount (AED)', color: CHART_COLORS.warning }]}
                height={280}
                showGrid={true}
              />
            </div>
          </GlassPanel>

          {/* Savings Targets */}
          <GlassPanel title="Savings Targets by Salary" description="Recommended savings by income level">
            <div className="h-64">
              <BarChart
                data={expatSentiment.savingsTargets}
                xAxisKey="salaryRange"
                bars={[
                  { dataKey: 'minimum', name: 'Minimum (AED)', color: CHART_COLORS.warning },
                  { dataKey: 'target', name: 'Target (AED)', color: CHART_COLORS.emerald },
                ]}
                height={220}
                showGrid={true}
              />
            </div>
          </GlassPanel>

          {/* Expat Communities */}
          <GlassPanel title="Expat Communities" description="Social connection data">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-6 rounded-lg bg-indigo-50/50">
                <div className="text-4xl font-bold text-indigo-600">{expatSentiment.mentalHealth.expatsMeetupDubai.toLocaleString()}</div>
                <div className="text-sm text-slate-600 mt-1">Expats Meetup - Dubai</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-indigo-50/50">
                <div className="text-4xl font-bold text-indigo-600">{expatSentiment.mentalHealth.expatsMeetupAbuDhabi.toLocaleString()}</div>
                <div className="text-sm text-slate-600 mt-1">Expats Meetup - Abu Dhabi</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-indigo-50/50">
                <div className="text-4xl font-bold text-indigo-600">{expatSentiment.mentalHealth.expatsMeetupGlobal.toLocaleString()}</div>
                <div className="text-sm text-slate-600 mt-1">Expats Meetup - Global</div>
              </div>
            </div>
          </GlassPanel>

          {/* Salary Cuts */}
          <GlassPanel title="Salary Cuts 2026" description="Affected sectors and rules">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-rose-50/50">
                <h4 className="font-semibold text-rose-700 mb-3">Most Affected Sectors</h4>
                <div className="space-y-2">
                  {expatSentiment.salaryCuts.sectorsMostAffected.map((sector, idx) => (
                    <Badge key={idx} variant="destructive">{sector}</Badge>
                  ))}
                </div>
                <p className="text-sm text-slate-600 mt-3">Max reduction: {expatSentiment.salaryCuts.maxReduction}%</p>
              </div>
              <div className="p-4 rounded-lg bg-emerald-50/50">
                <h4 className="font-semibold text-emerald-700 mb-3">Least Affected Sectors</h4>
                <div className="space-y-2">
                  {expatSentiment.salaryCuts.sectorsLeastAffected.map((sector, idx) => (
                    <Badge key={idx} variant="success">{sector}</Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-slate-50/50">
              <h4 className="font-semibold text-slate-700 mb-2">Legal Requirements for Salary Cuts</h4>
              <div className="space-y-2">
                {expatSentiment.salaryCuts.rules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-1" />
                    <span className="text-sm text-slate-600">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Rankings Tab */}
        <TabsContent value="rankings" className="space-y-6">
          {/* Official Rankings */}
          <GlassPanel title="Official Rankings & Indices" description="UAE's position in global indices">
            <div className="grid gap-4 md:grid-cols-5">
              {officialRankings.map((ranking, idx) => (
                <div key={idx} className="text-center p-4 rounded-lg bg-slate-50/50">
                  <div className="text-2xl font-bold text-indigo-600">{ranking.value}</div>
                  <div className="text-sm text-slate-600 mt-1">{ranking.metric}</div>
                  <div className="text-xs text-slate-400">{ranking.rank}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Regional Happiness Rankings */}
          <GlassPanel title="World Happiness Rankings - Arab World" description="Regional comparison">
            <div className="h-80">
              <BarChart
                data={regionalHappinessRankings}
                xAxisKey="country"
                bars={[{ dataKey: 'rank', name: 'World Rank', color: CHART_COLORS.emerald }]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>

          {/* UAE vs Global */}
          <GlassPanel title="UAE vs Global Powers" description="How UAE compares to major nations">
            <div className="h-64">
              <RadarChart
                data={[
                  { name: 'UAE', rank: 21, happiness: 90 },
                  { name: 'USA', rank: 23, happiness: 88 },
                  { name: 'UK', rank: 29, happiness: 85 },
                  { name: 'China', rank: 60, happiness: 75 },
                  { name: 'India', rank: 127, happiness: 60 },
                ]}
                metrics={[
                  { dataKey: 'rank', name: 'Happiness Rank (lower better)', color: CHART_COLORS.info },
                  { dataKey: 'happiness', name: 'Score', color: CHART_COLORS.emerald },
                ]}
                height={250}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Data Tables Tab */}
        <TabsContent value="data" className="space-y-6">
          <GlassPanel title="Emirati Youth Survey" description="MBZ Majlis for Future Generations">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Metric</th>
                    <th className="text-right p-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {emiratiYouthSurveyData.map((row, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-2">{row.metric}</td>
                      <td className="text-right p-2 font-semibold text-cyan-600">{row.value}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>

          <GlassPanel title="Government Confidence" description="Asda'a BCW Arab Youth Survey">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Metric</th>
                    <th className="text-right p-2">Confidence (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {governmentConfidenceData.map((row, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-2">{row.metric}</td>
                      <td className="text-right p-2 font-semibold text-emerald-600">{row.value}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>

          <GlassPanel title="Cost of Living" description="Living expenses breakdown">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Item</th>
                    <th className="text-right p-2">Cost (AED)</th>
                  </tr>
                </thead>
                <tbody>
                  {costOfLivingData.map((row, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-2">{row.metric}</td>
                      <td className="text-right p-2 font-semibold text-amber-600">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>

          <GlassPanel title="Data Quality Matrix" description="Source reliability assessment">
            <div className="grid gap-4 md:grid-cols-3">
              {Object.entries(dataQualityMatrix).map(([key, data]) => (
                <div key={key} className="p-4 rounded-lg bg-slate-50/50">
                  <h4 className="font-semibold text-slate-700 capitalize">{key}</h4>
                  <div className="mt-2 space-y-1 text-sm">
                    <div>Quantity: {data.quantity}</div>
                    <div>Reliability: {data.reliability}</div>
                    <div>Completeness: {data.completeness}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Source Credibility Matrix" description="Tiered source classification">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                  <Shield className="h-4 w-4" /> Government Sources
                </h4>
                <div className="grid gap-2 md:grid-cols-3">
                  {sourceCredibilityMatrix.government.map((source, idx) => (
                    <div key={idx} className="p-3 rounded bg-emerald-50/50">
                      <div className="font-medium text-emerald-700">{source.source}</div>
                      <div className="text-xs text-slate-500">{source.type} - {source.credibility}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Academic & Media
                </h4>
                <div className="grid gap-2 md:grid-cols-2">
                  {sourceCredibilityMatrix.academic.map((source, idx) => (
                    <div key={idx} className="p-3 rounded bg-purple-50/50">
                      <div className="font-medium text-purple-700">{source.source}</div>
                      <div className="text-xs text-slate-500">{source.type}</div>
                    </div>
                  ))}
                  {sourceCredibilityMatrix.media.map((source, idx) => (
                    <div key={idx} className="p-3 rounded bg-purple-50/50">
                      <div className="font-medium text-purple-700">{source.source}</div>
                      <div className="text-xs text-slate-500">{source.type}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4" /> Personal Accounts
                </h4>
                <div className="grid gap-2 md:grid-cols-2">
                  {sourceCredibilityMatrix.personal.map((source, idx) => (
                    <div key={idx} className="p-3 rounded bg-slate-50/50">
                      <div className="font-medium text-slate-700">{source.source}</div>
                      <div className="text-xs text-slate-500">{source.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Key Sources */}
          <GlassPanel title="Primary Sources" description="Most authoritative sources used">
            <div className="space-y-3">
              {keySources.map((source, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50">
                  <span className="font-medium text-slate-700">{source.source}</span>
                  <Badge variant="outline">{source.url}</Badge>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Verification Status */}
          <GlassPanel title="Verification Status" description="Research quality indicators">
            <div className="grid gap-3 md:grid-cols-2">
              {Object.entries(verificationStatus).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  {value ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                  )}
                  <span className="text-slate-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Research Notes */}
          <GlassPanel title="Research Notes" description="Important caveats and context">
            <div className="space-y-2">
              {notes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded bg-amber-50/50">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-1" />
                  <span className="text-sm text-slate-700">{note}</span>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Summary Stats */}
          <GlassPanel title="Research Summary" description="Execution statistics">
            <div className="grid gap-4 md:grid-cols-5">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{summaryStatistics.queriesExecuted}</div>
                <div className="text-xs text-slate-500">Queries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">{summaryStatistics.pagesFetched}</div>
                <div className="text-xs text-slate-500">Pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{summaryStatistics.totalUrlsAnalyzed}</div>
                <div className="text-xs text-slate-500">URLs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">{summaryStatistics.governmentSources}</div>
                <div className="text-xs text-slate-500">Gov Sources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600">{summaryStatistics.mediaSources}</div>
                <div className="text-xs text-slate-500">Media</div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
