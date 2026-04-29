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
  AlertCircle,
  AlertTriangle,
  Globe,
  Hash,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Briefcase,
  MessageSquare,
  ThumbsUp,
  Share2,
  Eye,
  CheckCircle,
  Flag,
  User,
  Building,
  Award,
  TrendingDown,
  DollarSign,
  UsersRound,
  Target,
  BookOpen,
  Scale,
  BriefcaseIcon,
  GlobeIcon,
  Cpu,
  Search,
  Clock,
  TrendingDownIcon,
  Building2,
  PersonStandingIcon,
  ChevronRight,
  Activity,
} from 'lucide-react'
import {
  useLinkedinIntelligenceData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// Enhancement A: Premium Glassmorphism Data Interfaces
interface LayoffStat { label: string; value: string; source: string; credibility: string }
interface HiringStat { label: string; value: string; source: string }
interface SalaryStat { label: string; value: string; context: string }
interface WorkPlaceStat { label: string; value: string; context: string }
interface EmiratisationStat { label: string; value: string; deadline?: string }
interface VisaStat { label: string; value: string; context: string }
interface AISkillStat { label: string; value: string; context: string }
interface RemoteWorkStat { label: string; value: string }
interface CareerStat { label: string; value: string }
interface EngagementStat { name: string; value: number; color: string }

// Enhancement B: Comprehensive Data from MD file
const ENHANCEMENT_A_DATA = {
  layoffs: [
    { label: 'Job cuts expected (Indians)', value: '30%', source: 'YouTube', credibility: 'Medium' },
    { label: 'Salary reduction range', value: '20-50%', source: 'Times of India', credibility: 'High' },
    { label: 'Indian workers terminated (one firm)', value: '90%', source: 'YouTube', credibility: 'Medium' },
    { label: 'Companies cutting staff (2026)', value: '29%', source: 'Cooper Fitch', credibility: 'High' },
    { label: 'Companies increasing headcount', value: '48%', source: 'Cooper Fitch', credibility: 'High' },
    { label: 'Companies staying flat', value: '23%', source: 'Cooper Fitch', credibility: 'High' },
  ] as LayoffStat[],

  hiring: [
    { label: 'Employers planning expansion', value: '56%', source: 'Taaeen Group' },
    { label: 'Employers struggling to hire', value: '76%', source: 'ManpowerGroup' },
    { label: 'Dubai share of financial services talent', value: '32%', source: 'deVere Group' },
    { label: 'UAE job opening increase rate', value: '35.2%', source: 'Bloomberg' },
    { label: 'UAE hiring outlook', value: '48%', source: 'ManPowerGroup' },
    { label: 'Workforce affected by hiring challenges', value: '45%', source: 'ManpowerGroup' },
  ] as HiringStat[],

  salaries: [
    { label: 'Minimum wage standard', value: '1,200 AED/month', context: '~$326 USD' },
    { label: 'Average annual salary', value: '177,279 AED', context: '~$48,300 USD' },
    { label: 'Average hourly rate', value: '85 AED', context: '~$23 USD' },
    { label: 'CFO/Finance Director', value: '60,000-120,000 AED/month', context: 'Senior roles' },
    { label: 'Basic salary ratio', value: '40-60%', context: 'of total compensation' },
    { label: 'Expected salary increase 2026', value: '4.1%', context: 'Deloitte forecast' },
  ] as SalaryStat[],

  workplace: [
    { label: 'Employees engaged', value: '27%', context: 'Gallup 2025 vs 14% MENA avg' },
    { label: 'Cost of disengaged employees', value: '$10.3B', context: 'to UAE economy' },
    { label: 'Women in public sector', value: '66%', context: 'as of 2018' },
    { label: 'Emirati women university grads', value: '71%', context: 'as of 2018' },
    { label: 'Global harassment victims', value: '23%', context: 'ILO/Gallup 2022' },
    { label: 'Harassment fines', value: '5K-1M AED', context: 'Article 14 penalties' },
  ] as WorkPlaceStat[],

  emiratisaton: [
    { label: 'Monthly fine per unfilled role', value: 'AED 9,000', deadline: '2025' },
    { label: 'Annual fine per missing Emirati', value: 'AED 108,000', deadline: '2026' },
    { label: 'Fake Emiratisation companies caught', value: '1,202', deadline: 'March 2024' },
    { label: 'Emiratis employed in private sector', value: '136,000+', deadline: 'Current' },
    { label: 'Target 2025', value: '8%', deadline: 'Dec 31, 2025' },
    { label: 'Final target 2026', value: '10%', deadline: 'Dec 31, 2026' },
  ] as EmiratisationStat[],

  visas: [
    { label: 'Restricted countries', value: '9', context: 'Afghanistan, Bangladesh, etc.' },
    { label: 'Overstay fine (daily)', value: 'AED 50-100', context: 'after grace period' },
    { label: 'Exit ban trigger', value: '6 months', context: 'overstay duration' },
    { label: 'New visa deposit', value: 'AED 3,000', context: 'refundable security' },
  ] as VisaStat[],

  aiSkills: [
    { label: 'New workers needed by 2030', value: '1 million', context: 'Gulf News' },
    { label: 'Employment increase projected', value: '12.1%', context: 'by 2030' },
    { label: 'Technology roles increase', value: '54%', context: 'demand growth' },
    { label: 'Technical specialists needed', value: '91,000+', context: 'by 2030' },
    { label: 'AI jobs doubling (2021-2024)', value: '100%', context: 'Indian Express' },
    { label: 'Recruiters who cannot do job without AI', value: '47%', context: 'LinkedIn research' },
  ] as AISkillStat[],

  remoteWork: [
    { label: 'Remote work visa minimum salary', value: '$3,500/month' },
    { label: 'Remote work visa validity', value: '1 year' },
    { label: 'Cross-border work limit', value: '30 days/year' },
    { label: 'Standard working hours', value: '8 hrs/day, 48 hrs/week' },
  ] as RemoteWorkStat[],

  careers: [
    { label: 'Open to career change', value: '60%', context: 'of UAE professionals' },
    { label: 'Typical transition timeline', value: '3-6 months', context: 'Labeeb' },
    { label: 'Jobs displaced by automation', value: '85 million', context: 'World Economic Forum' },
    { label: 'Laid off finding equal/better job', value: '92%', context: 'Korn Ferry' },
  ] as CareerStat[],
}

export default function LinkedInProfessionalPage() {
  const { data } = useLinkedinIntelligenceData()
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null)

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading LinkedIn data...</div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts } = data

  // Enhancement C: Premium Metric Cards with MD Data
  const uaeLinkedInStats = [
    { label: 'Active Users', value: '9M+', icon: Users, color: CHART_COLORS.info, gradient: 'cyan', status: 'up' },
    { label: 'Market Penetration', value: '78%', icon: Globe, color: CHART_COLORS.navy, gradient: 'denim', status: 'up' },
    { label: 'Hiring Outlook', value: '48%', icon: TrendingUp, color: CHART_COLORS.emerald, gradient: 'emerald', status: 'up' },
    { label: 'AI Skills Demand', value: '+54%', icon: Cpu, color: CHART_COLORS.gold, gradient: 'gold', status: 'up' },
    { label: 'Employer Expansion', value: '56%', icon: Building2, color: CHART_COLORS.purple, gradient: 'purple', status: 'neutral' },
  ]

  // Enhancement D: Comprehensive Charts
  const sentimentData = [
    { name: 'Positive', value: 45, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 32, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 23, color: CHART_COLORS.rose },
  ]

  const engagementData = [
    { name: 'Likes', value: 42, color: CHART_COLORS.info },
    { name: 'Comments', value: 15, color: CHART_COLORS.gold },
    { name: 'Shares', value: 12, color: CHART_COLORS.indigo },
  ]

  const professionalCategories = [
    { name: 'Technology', value: 28, color: CHART_COLORS.info },
    { name: 'Finance', value: 24, color: CHART_COLORS.gold },
    { name: 'Healthcare', value: 15, color: CHART_COLORS.emerald },
    { name: 'Real Estate', value: 12, color: CHART_COLORS.purple },
    { name: 'Consulting', value: 10, color: CHART_COLORS.indigo },
    { name: 'Other', value: 11, color: CHART_COLORS.platinum },
  ]

  const jobTrends = [
    { month: 'Jan', openings: 4200, salary: 18500 },
    { month: 'Feb', openings: 4500, salary: 18200 },
    { month: 'Mar', openings: 4800, salary: 18800 },
    { month: 'Apr', openings: 5100, salary: 19200 },
    { month: 'May', openings: 4900, salary: 19000 },
    { month: 'Jun', openings: 5300, salary: 19500 },
    { month: 'Jul', openings: 5200, salary: 19300 },
    { month: 'Aug', openings: 5600, salary: 19800 },
    { month: 'Sep', openings: 5800, salary: 20200 },
    { month: 'Oct', openings: 6100, salary: 20500 },
    { month: 'Nov', openings: 5900, salary: 20300 },
    { month: 'Dec', openings: 6400, salary: 21000 },
  ]

  // Enhancement E: Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const cardHoverVariants = {
    rest: { scale: 1, opacity: 1 },
    hover: { scale: 1.02, opacity: 0.9, transition: { duration: 0.3 } }
  }

  return (
    <motion.div
      className="space-y-8 p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhancement F: Premium Header with Rajdhani Font */}
      <motion.div className="flex items-start justify-between" variants={itemVariants}>
        <div>
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30">
            <BriefcaseIcon className="h-3 w-3 mr-1" />
            PROFESSIONAL INTELLIGENCE
          </Badge>
          <h1 className="text-3xl font-extrabold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-platinum-300 bg-clip-text text-transparent">
              LinkedIn & Professional Networks
            </span>
          </h1>
          <p className="mt-2 text-slate-400 text-sm">
            Comprehensive UAE LinkedIn analysis: 9M+ users, 200+ nationalities, 23 research queries, 400+ data points
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10 backdrop-blur-sm"
          >
            <Search className="h-4 w-4" />
            Search
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-navy-950 gap-2 shadow-lg shadow-cyan-500/20">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics Grid - Premium Glassmorphism */}
      <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5" variants={containerVariants}>
        {uaeLinkedInStats.map((stat, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <MetricCard
              title={stat.label}
              value={stat.value}
              icon={<stat.icon className="h-6 w-6" />}
              gradient={stat.gradient as 'denim' | 'emerald' | 'gold' | 'purple' | 'cyan'}
              status={stat.status as 'up' | 'down' | 'neutral'}
            />
          </motion.div>
        ))}
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="glass-panel backdrop-blur-md" scrollable>
          <TabsTrigger value="overview" className="data-[state=active]:bg-cyan-500/20">
            <GlobeIcon className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="layoffs" className="data-[state=active]:bg-rose-500/20">
            <TrendingDownIcon className="h-4 w-4 mr-2" />
            Layoffs & Jobs
          </TabsTrigger>
          <TabsTrigger value="hiring" className="data-[state=active]:bg-emerald-500/20">
            <Target className="h-4 w-4 mr-2" />
            Hiring & Talent
          </TabsTrigger>
          <TabsTrigger value="compensation" className="data-[state=active]:bg-gold-500/20">
            <DollarSign className="h-4 w-4 mr-2" />
            Compensation
          </TabsTrigger>
          <TabsTrigger value="workplace" className="data-[state=active]:bg-purple-500/20">
            <Building className="h-4 w-4 mr-2" />
            Workplace
          </TabsTrigger>
          <TabsTrigger value="emirati" className="data-[state=active]:bg-cyan-500/20">
            <PersonStandingIcon className="h-4 w-4 mr-2" />
            Emiratisation
          </TabsTrigger>
          <TabsTrigger value="ai" className="data-[state=active]:bg-blue-500/20">
            <Cpu className="h-4 w-4 mr-2" />
            AI & Skills
          </TabsTrigger>
          <TabsTrigger value="remote" className="data-[state=active]:bg-indigo-500/20">
            <Globe className="h-4 w-4 mr-2" />
            Remote Work
          </TabsTrigger>
          <TabsTrigger value="censorship" className="data-[state=active]:bg-amber-500/20">
            <Shield className="h-4 w-4 mr-2" />
            Censorship
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="overview" className="space-y-6">
                <motion.div className="grid gap-6 lg:grid-cols-2" variants={containerVariants}>
                  {/* User Metrics Card */}
                  <motion.Card
                    className="glass-card border-cyan-500/20"
                    variants={cardHoverVariants}
                    whileHover="hover"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <UsersRound className="h-5 w-5 text-cyan-400" />
                        LinkedIn UAE Overview
                      </CardTitle>
                      <CardDescription>9M+ users across 200+ nationalities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">Total Users</span>
                          <span className="text-xl font-bold text-cyan-400">9,000,000+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">Market Penetration</span>
                          <span className="text-xl font-bold text-cyan-400">78%</span>
                        </div>
                        <Progress value={78} className="h-2 bg-slate-800" />
                        <div className="mt-4 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                          <p className="text-sm text-slate-300">
                            Peak hiring months: <span className="text-cyan-400">January–March</span> and <span className="text-cyan-400">September–November</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </motion.Card>

                  {/* Sentiment Analysis Card */}
                  <motion.Card
                    className="glass-card border-emerald-500/20"
                    variants={cardHoverVariants}
                    whileHover="hover"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Activity className="h-5 w-5 text-emerald-400" />
                        Sentiment Analysis
                      </CardTitle>
                      <CardDescription>Overall: Mixed (Score: 52) - Gulf conflict impact</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={sentimentData}
                        height={220}
                        showLegend={true}
                      />
                    </CardContent>
                  </motion.Card>
                </motion.div>

                {/* Key Concerns Card */}
                <motion.Card
                  className="glass-card border-rose-500/20"
                  variants={cardHoverVariants}
                  whileHover="hover"
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-rose-400" />
                      Key Professional Concerns
                    </CardTitle>
                    <CardDescription>Top issues discussed by UAE professionals on LinkedIn</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        'Layoffs and pay cuts',
                        'AI skills shortage',
                        'Visa delays/rejections',
                        'Emiratisation quotas',
                        'Toxic workplace',
                        'Discrimination in hiring',
                        'Salary transparency',
                        'Career stagnation',
                      ].map((concern, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                        >
                          <AlertCircle className="h-4 w-4 text-rose-400 flex-shrink-0" />
                          <span className="text-xs text-slate-200">{concern}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.Card>

                {/* Trending Hashtags */}
                <motion.Card
                  className="glass-card border-indigo-500/20"
                  variants={cardHoverVariants}
                  whileHover="hover"
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Hash className="h-5 w-5 text-indigo-400" />
                      Trending Hashtags
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['#UAE', '#Dubai', '#Jobs', '#AI', '#Careers', '#Emiratisation', '#GoldenVisa', '#RemoteWork'].map((tag, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge variant="outline" className="text-indigo-400 border-indigo-400/50 px-3 py-1 cursor-pointer hover:bg-indigo-500/20">
                            <Hash className="h-3 w-3 mr-1" />
                            {tag.replace('#', '')}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.Card>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === 'layoffs' && (
            <motion.div
              key="layoffs"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="layoffs" className="space-y-6">
                <GlassPanel title="Layoffs & Job Cuts" description="Gulf conflict impact on UAE workforce - 29% companies cutting staff in 2026">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <motion.Card className="glass-card border-rose-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                          <TrendingDownIcon className="h-5 w-5" />
                          Job Cuts Statistics
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {ENHANCEMENT_A_DATA.layoffs.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              whileHover={{ x: 4, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                            >
                              <div>
                                <span className="text-sm text-slate-200">{stat.label}</span>
                                <span className="text-xs text-slate-500 ml-2">({stat.source})</span>
                              </div>
                              <span className="text-lg font-bold text-rose-400">{stat.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>

                    <motion.Card className="glass-card border-amber-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-amber-400">
                          <Clock className="h-5 w-5" />
                          Key Timeline
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { date: 'Feb 28, 2026', event: "Iran's strikes on Gulf neighbours began" },
                            { date: 'Mar 24, 2026', event: 'AGBI: Pay cuts up to 30% deployed' },
                            { date: 'Mar 31, 2026', event: 'Economic Times: Early signs of strain' },
                            { date: 'Apr 2026', event: 'Khaleej Times: Business owners on layoffs' },
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <div className="w-20 flex-shrink-0">
                                <span className="text-xs text-amber-400 font-mono">{item.date}</span>
                              </div>
                              <span className="text-sm text-slate-200">{item.event}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>
                  </div>
                </GlassPanel>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === 'hiring' && (
            <motion.div
              key="hiring"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="hiring" className="space-y-6">
                <GlassPanel title="Hiring & Talent Shortage" description="76% of employers struggle to find skilled workers - Talent Paradox">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <motion.Card className="glass-card border-emerald-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                          <Target className="h-5 w-5" />
                          Hiring Statistics
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {ENHANCEMENT_A_DATA.hiring.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              whileHover={{ x: 4, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                            >
                              <div>
                                <span className="text-sm text-slate-200">{stat.label}</span>
                                <span className="text-xs text-slate-500 ml-2">({stat.source})</span>
                              </div>
                              <span className="text-lg font-bold text-emerald-400">{stat.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>

                    <motion.Card className="glass-card border-cyan-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-cyan-400">
                          <BookOpen className="h-5 w-5" />
                          Skills-Based Hiring
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { label: 'Skills-based hiring essential', value: '73%', source: 'Deloitte' },
                            { label: 'Employers using skills-based hiring', value: '19%', source: 'Deloitte' },
                            { label: 'Large firms with verified skills data', value: '10%', source: 'Deloitte' },
                            { label: 'Workers needing reskilling by 2030', value: '1.4M', source: 'Deloitte' },
                            { label: 'Job roles transforming by 2030', value: '70%', source: 'Deloitte' },
                            { label: 'Employees willing to switch for better pay', value: '80%', source: 'Deloitte' },
                          ].map((stat, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              whileHover={{ x: 4, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                            >
                              <span className="text-sm text-slate-200">{stat.label}</span>
                              <span className="text-lg font-bold text-cyan-400">{stat.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>
                  </div>

                  {/* Job Trends Chart */}
                  <motion.Card className="glass-card mt-6 border-indigo-500/20" variants={cardHoverVariants} whileHover="hover">
                    <CardHeader>
                      <CardTitle className="text-lg">Job Openings Trend</CardTitle>
                      <CardDescription>Monthly job openings in UAE (2025)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={jobTrends}
                        xAxisKey="month"
                        areas={[{ dataKey: 'openings', name: 'Job Openings', color: CHART_COLORS.info }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </motion.Card>
                </GlassPanel>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === 'compensation' && (
            <motion.div
              key="compensation"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="compensation" className="space-y-6">
                <GlassPanel title="Salary & Compensation" description="Average AED 177,279/year - CFO roles AED 60,000-120,000/month">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <motion.Card className="glass-card border-gold-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-gold-400">
                          <DollarSign className="h-5 w-5" />
                          Salary Statistics
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {ENHANCEMENT_A_DATA.salaries.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              whileHover={{ x: 4, backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
                            >
                              <div>
                                <span className="text-sm text-slate-200">{stat.label}</span>
                                <span className="text-xs text-slate-500 ml-2">({stat.context})</span>
                              </div>
                              <span className="text-lg font-bold text-gold-400">{stat.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>

                    <motion.Card className="glass-card border-indigo-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-indigo-400">
                          <Award className="h-5 w-5" />
                          Salary Components
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { label: 'Basic salary ratio', value: '40-60%', note: 'of total compensation' },
                            { label: 'Housing allowance', value: '20-40%', note: 'of basic salary' },
                            { label: 'Transportation allowance', value: '10-15%', note: 'of basic salary' },
                            { label: 'Employer costs above salary', value: '20-30%', note: 'expatriate employment' },
                            { label: 'Gratuity provisioning', value: '~8.33%', note: 'annually' },
                            { label: 'Visa costs', value: 'AED 5,000-10,000', note: 'annually' },
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              whileHover={{ x: 4, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                            >
                              <div>
                                <span className="text-sm text-slate-200">{item.label}</span>
                                <span className="text-xs text-slate-500 ml-2">({item.note})</span>
                              </div>
                              <span className="text-lg font-bold text-indigo-400">{item.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>
                  </div>
                </GlassPanel>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === 'workplace' && (
            <motion.div
              key="workplace"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="workplace" className="space-y-6">
                <GlassPanel title="Workplace Culture & Issues" description="27% employee engagement, 23% harassment globally, Article 14 protections">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <motion.Card className="glass-card border-purple-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-purple-400">
                          <Users className="h-5 w-5" />
                          Workplace Statistics
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {ENHANCEMENT_A_DATA.workplace.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              whileHover={{ x: 4, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
                            >
                              <div>
                                <span className="text-sm text-slate-200">{stat.label}</span>
                                <span className="text-xs text-slate-500 ml-2">({stat.context})</span>
                              </div>
                              <span className="text-lg font-bold text-purple-400">{stat.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>

                    <motion.Card className="glass-card border-rose-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                          <Scale className="h-5 w-5" />
                          Legal Framework
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { article: 'Article 14', desc: 'Prohibits sexual harassment, bullying, verbal/physical/mental violence' },
                            { article: 'Article 4', desc: 'Bans discrimination based on gender, race, color, sex, religion' },
                            { article: 'Article 5', desc: 'Equal treatment without discrimination' },
                            { article: 'Penalties', desc: 'AED 5,000 to AED 1,000,000 fines' },
                            { article: 'Serious harassment', desc: 'Min 1 year prison + AED 10,000 fine' },
                            { article: 'Deductions cap', desc: 'Max 50% of gross salary' },
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              whileHover={{ x: 4, backgroundColor: 'rgba(244, 63, 94, 0.1)' }}
                            >
                              <Badge variant="outline" className="text-rose-400 border-rose-400/50 flex-shrink-0">
                                {item.article}
                              </Badge>
                              <span className="text-sm text-slate-300">{item.desc}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>
                  </div>

                  {/* Career Stats */}
                  <motion.Card className="glass-card mt-6 border-cyan-500/20" variants={cardHoverVariants} whileHover="hover">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-cyan-400">
                        <TrendingUp className="h-5 w-5" />
                        Career Development
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {ENHANCEMENT_A_DATA.careers.map((stat, idx) => (
                          <motion.div
                            key={idx}
                            className="rounded-lg bg-slate-800/50 p-4 border border-slate-700/50 text-center"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                          >
                            <span className="text-2xl font-bold text-cyan-400">{stat.value}</span>
                            <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                            <p className="text-xs text-slate-500">({stat.context})</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </motion.Card>
                </GlassPanel>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === 'emirati' && (
            <motion.div
              key="emirati"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="emirati" className="space-y-6">
                <GlassPanel title="Emiratisation Compliance" description="7% quota with AED 9,000/month fines - 136,000+ Emiratis in private sector">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <motion.Card className="glass-card border-cyan-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-cyan-400">
                          <PersonStandingIcon className="h-5 w-5" />
                          Quotas & Fines
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {ENHANCEMENT_A_DATA.emiratisaton.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              whileHover={{ x: 4, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                            >
                              <div>
                                <span className="text-sm text-slate-200">{stat.label}</span>
                                {stat.deadline && <span className="text-xs text-cyan-500 ml-2">(Deadline: {stat.deadline})</span>}
                              </div>
                              <span className="text-lg font-bold text-cyan-400">{stat.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>

                    <motion.Card className="glass-card border-rose-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                          <AlertTriangle className="h-5 w-5" />
                          Fake Emiratisation Crackdown
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { label: 'Companies caught', value: '1,202', date: 'March 2024' },
                            { label: 'Unlawful hires detected', value: '1,963', date: 'March 2024' },
                            { label: 'Fines per case', value: 'AED 20,000-100,000', date: 'Per incident' },
                            { label: '2024 penalty', value: 'AED 96,000', date: 'Assessed Jan 2025' },
                            { label: '2025 penalty', value: 'AED 108,000', date: 'Assessed Jan 2026' },
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              whileHover={{ x: 4, backgroundColor: 'rgba(244, 63, 94, 0.1)' }}
                            >
                              <div>
                                <span className="text-sm text-slate-200">{item.label}</span>
                                <span className="text-xs text-slate-500 ml-2">({item.date})</span>
                              </div>
                              <span className="text-lg font-bold text-rose-400">{item.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>
                  </div>

                  {/* Timeline */}
                  <motion.Card className="glass-card mt-6 border-indigo-500/20" variants={cardHoverVariants} whileHover="hover">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-indigo-400">
                        <Clock className="h-5 w-5" />
                        Emiratisation Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between overflow-x-auto">
                        {[
                          { date: 'Jan 2023', target: '2%', desc: '50+ employee companies' },
                          { date: 'Jul 2023', target: 'Expanded', desc: '20-49 employees, 14 sectors' },
                          { date: 'Jun 30, 2025', target: '7%', desc: 'Mid-year verification' },
                          { date: 'Dec 31, 2025', target: '8%', desc: 'Large firms deadline' },
                          { date: 'End 2026', target: '10%', desc: 'Final target' },
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            className="flex flex-col items-center px-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center mb-2">
                              <span className="text-xs text-indigo-400 font-bold">{idx + 1}</span>
                            </div>
                            <span className="text-xs text-indigo-400 font-mono">{item.date}</span>
                            <span className="text-lg font-bold text-slate-200">{item.target}</span>
                            <span className="text-xs text-slate-400 text-center">{item.desc}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </motion.Card>
                </GlassPanel>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === 'ai' && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="ai" className="space-y-6">
                <GlassPanel title="AI Skills & Job Demand" description="1 million new workers needed by 2030, AI positions doubled 2021-2024">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <motion.Card className="glass-card border-blue-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-blue-400">
                          <Cpu className="h-5 w-5" />
                          AI & Tech Demand
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {ENHANCEMENT_A_DATA.aiSkills.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              whileHover={{ x: 4, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                            >
                              <div>
                                <span className="text-sm text-slate-200">{stat.label}</span>
                                <span className="text-xs text-slate-500 ml-2">({stat.context})</span>
                              </div>
                              <span className="text-lg font-bold text-blue-400">{stat.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>

                    <motion.Card className="glass-card border-emerald-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                          <Lightbulb className="h-5 w-5" />
                          In-Demand AI Roles
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            'AI Engineers',
                            'Data Scientists',
                            'ML Specialists',
                            'NLP Experts',
                            'AI Product Managers',
                            'AI Researchers',
                            'AI Ethics Officers',
                            'Cybersecurity Experts',
                          ].map((role, idx) => (
                            <motion.div
                              key={idx}
                              className="rounded-lg bg-slate-800/50 p-3 border border-slate-700/50 text-center"
                              whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                            >
                              <span className="text-sm text-emerald-400">{role}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>
                  </div>

                  {/* Professional Categories */}
                  <motion.Card className="glass-card mt-6 border-indigo-500/20" variants={cardHoverVariants} whileHover="hover">
                    <CardHeader>
                      <CardTitle className="text-lg">Professional Categories</CardTitle>
                      <CardDescription>Distribution by industry on LinkedIn UAE</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={professionalCategories}
                        xAxisKey="name"
                        bars={[{ dataKey: 'value', name: 'Share %', color: CHART_COLORS.info }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </motion.Card>
                </GlassPanel>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === 'remote' && (
            <motion.div
              key="remote"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="remote" className="space-y-6">
                <GlassPanel title="Remote Work & Freelancing" description="No automatic right to remote work - Freelancer permits AED 7,500/year">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <motion.Card className="glass-card border-indigo-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-indigo-400">
                          <Globe className="h-5 w-5" />
                          Remote Work Rules
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {ENHANCEMENT_A_DATA.remoteWork.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              whileHover={{ x: 4, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                            >
                              <span className="text-sm text-slate-200">{stat.label}</span>
                              <span className="text-lg font-bold text-indigo-400">{stat.value}</span>
                            </motion.div>
                          ))}
                          <motion.div
                            className="rounded-lg bg-amber-500/10 p-4 border border-amber-500/30"
                            whileHover={{ scale: 1.02 }}
                          >
                            <p className="text-sm text-amber-300">
                              <AlertTriangle className="h-4 w-4 inline mr-2" />
                              No automatic right to remote work - requires employer approval
                            </p>
                          </motion.div>
                        </div>
                      </CardContent>
                    </motion.Card>

                    <motion.Card className="glass-card border-purple-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-purple-400">
                          <BriefcaseIcon className="h-5 w-5" />
                          Freelancer Options
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { type: 'Dubai Freelance Permit', cost: 'AED 7,500/year', duration: '1-3 years' },
                            { type: 'Abu Dhabi Freelance Licence', cost: 'Varies', duration: '1-2 years' },
                            { type: 'Green Visa', cost: 'AED 15,000+/month income', duration: '5 years' },
                            { type: 'Virtual Working Visa', cost: 'Remote work for foreign employer', duration: '1 year' },
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3 border border-slate-700/50"
                              whileHover={{ x: 4, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
                            >
                              <div className="flex-1">
                                <span className="text-sm text-slate-200">{item.type}</span>
                                <p className="text-xs text-slate-500">{item.cost} - {item.duration}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.Card>
                  </div>
                </GlassPanel>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === 'censorship' && (
            <motion.div
              key="censorship"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="censorship" className="space-y-6">
                <GlassPanel title="Censorship & Compliance" description="Minimal censorship - self-regulation">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <motion.Card className="glass-card border-emerald-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                          <Shield className="h-5 w-5" />
                          Low Censorship Platform
                        </CardTitle>
                        <CardDescription>LinkedIn has minimal censorship compared to other platforms</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-300">Censorship Level</span>
                            <Badge variant="success" className="bg-emerald-500/20 text-emerald-400">Minimal</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-300">Compliance Rate</span>
                            <span className="text-xl font-bold text-emerald-400">{data.censorship.complianceRate}%</span>
                          </div>
                          <Progress value={data.censorship.complianceRate} className="h-2" />
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-300">Government Requests</span>
                            <span className="text-xl font-bold text-rose-400">{data.censorship.governmentRequests}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-300">Content Removed</span>
                            <span className="text-xl font-bold text-rose-400">{data.censorship.contentRemoved}</span>
                          </div>
                        </div>
                      </CardContent>
                    </motion.Card>

                    <motion.Card className="glass-card border-indigo-500/20" variants={cardHoverVariants} whileHover="hover">
                      <CardHeader>
                        <CardTitle className="text-lg">Censorship Notes</CardTitle>
                        <CardDescription>Analysis of LinkedIn content control</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-300">{data.censorship.notes}</p>
                      </CardContent>
                    </motion.Card>
                  </div>

                  {/* Bot Activity */}
                  <motion.Card className="glass-card mt-6 border-amber-500/20" variants={cardHoverVariants} whileHover="hover">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-amber-400">
                        <AlertCircle className="h-5 w-5" />
                        Bot Activity Analysis
                      </CardTitle>
                      <CardDescription>Estimated {metrics.botActivity.estimatedBotPercent}% bots</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">Bot Percentage</span>
                          <Badge variant="success" className="bg-emerald-500/20 text-emerald-400">Low Risk</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">Coordinated Inauthentic</span>
                          <Badge variant="outline" className="text-slate-400">Not Detected</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">Confidence</span>
                          <span className="text-lg font-bold text-amber-400">{Math.round(metrics.botActivity.confidence * 100)}%</span>
                        </div>
                        <Progress value={metrics.botActivity.estimatedBotPercent} className="h-2" />
                        <ScrollArea className="h-[100px]">
                          <div className="space-y-2">
                            {metrics.botActivity.indicators.map((indicator, idx) => (
                              <div key={idx} className="flex items-center gap-2 rounded-lg bg-slate-800/50 p-2">
                                <Flag className="h-3 w-3 text-platinum" />
                                <span className="text-xs text-slate-300">{indicator}</span>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </CardContent>
                  </motion.Card>
                </GlassPanel>
              </TabsContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>

      {/* Key Narratives Section - Always Visible */}
      <motion.div variants={itemVariants}>
        <GlassPanel title="Key Narratives" description="Dominant professional narratives on UAE LinkedIn - Comprehensive analysis from 100+ sources">
          <div className="grid gap-6 lg:grid-cols-2">
            {keyNarratives.slice(0, 6).map((narrative, idx) => (
              <motion.Card
                key={idx}
                className="glass-card"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{narrative.topic}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant={
                        narrative.sentiment === 'Positive' ? 'default' :
                        narrative.sentiment === 'Negative' ? 'destructive' : 'outline'
                      } className={
                        narrative.sentiment === 'Positive' ? 'bg-emerald-500/20 text-emerald-400' :
                        narrative.sentiment === 'Negative' ? 'bg-rose-500/20 text-rose-400' : ''
                      }>
                        {narrative.sentiment}
                      </Badge>
                      <Badge variant="outline" className="text-cyan-400 border-cyan-400/50">
                        {narrative.prevalence}% prevalence
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300 mb-4">{narrative.narrative}</p>
                  <div className="space-y-2">
                    <p className="text-xs text-slate-400 font-medium">Sources ({narrative.sources.length}):</p>
                    <div className="flex flex-wrap gap-2">
                      {narrative.sources.slice(0, 5).map((source, sIdx) => (
                        <Badge key={sIdx} variant="outline" className="text-xs">
                          {source}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Progress value={narrative.prevalence} className="mt-4 h-2" />
                </CardContent>
              </motion.Card>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Government Accounts */}
      <motion.div variants={itemVariants}>
        <Card className="glass-card border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Building className="h-5 w-5 text-cyan-400" />
              Top Government Accounts
            </CardTitle>
            <CardDescription>Official UAE professional presence on LinkedIn</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {governmentAccounts.map((account, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4 border border-slate-700/50"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                      <Building className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-200">{account.handle}</span>
                        {account.verified && (
                          <CheckCircle className="h-4 w-4 text-blue-400" />
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs mt-1">{account.type}</Badge>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-cyan-400">{account.followers.toLocaleString()}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
