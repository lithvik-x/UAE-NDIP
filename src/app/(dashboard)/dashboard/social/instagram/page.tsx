'use client'

import { useState, useMemo } from 'react'
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
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Heart,
  MessageSquare,
  Bookmark,
  Share2,
  User,
  Camera,
  Star,
  CheckCircle,
  Flag,
  Eye,
  Lock,
  Image,
  Calendar,
  DollarSign,
  Scale,
  Target,
  Activity,
  TrendingDown,
  UsersRound,
  Building2,
  AlertOctagon,
  ChevronRight,
  ExternalLink,
  Instagram,
} from 'lucide-react'
import { useInstagramIntelligenceData } from '@/lib/data-loader'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
}

// Premium glassmorphism card component
function GlassCard({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      <div className="relative backdrop-blur-xl bg-glass-surface border border-glass-border rounded-xl shadow-glass-lg">
        {children}
      </div>
    </motion.div>
  )
}

// Enhanced MetricCard with gradient and trend
function EnhancedMetricCard({
  title,
  value,
  previousValue,
  unit,
  trend,
  icon: Icon,
  gradient = 'purple',
  status,
  onClick,
  className = ''
}: {
  title: string
  value: string | number
  previousValue?: string | number
  unit?: string
  trend?: 'up' | 'down' | 'stable'
  icon: React.ElementType
  gradient?: 'purple' | 'gold' | 'rose' | 'emerald' | 'navy'
  status?: 'success' | 'warning' | 'danger' | 'info'
  onClick?: () => void
  className?: string
}) {
  const gradientMap = {
    purple: 'from-purple-500/20 via-purple-500/5 to-transparent',
    gold: 'from-amber-500/20 via-amber-500/5 to-transparent',
    rose: 'from-rose-500/20 via-rose-500/5 to-transparent',
    emerald: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    navy: 'from-blue-600/20 via-blue-600/5 to-transparent',
  }

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl cursor-pointer ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientMap[gradient]} opacity-60`} />
      <div className="absolute inset-0 backdrop-blur-xl bg-glass-surface border border-glass-border rounded-xl p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-xs font-medium text-platinum/60 uppercase tracking-wider">{title}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">{value}</span>
              {unit && <span className="text-sm text-platinum/60">{unit}</span>}
            </div>
            {previousValue !== undefined && (
              <div className="flex items-center gap-1">
                {trend === 'up' && <TrendingUp className="h-3 w-3 text-emerald-400" />}
                {trend === 'down' && <TrendingDown className="h-3 w-3 text-rose-400" />}
                <span className="text-xs text-platinum/50">vs {previousValue}</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-lg bg-gradient-to-br ${gradientMap[gradient]} backdrop-blur-sm`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Influencer data from MD file
const TOP_INFLUENCERS = [
  { rank: 1, name: 'Rida Shahid', username: '@Rida_Shahid', followers: 30800000, engagementRate: 0.76, brandPartners: '-', notes: 'Dental professional, NLP life coach' },
  { rank: 2, name: 'Abdul Ghafoor', username: '@zamzam_brothers_official', followers: 24200000, engagementRate: 0.22, brandPartners: 'Dubai Global Village, Zamelect', notes: '' },
  { rank: 3, name: 'Joelle Mardinian', username: '@joellemardinian', followers: 21800000, engagementRate: 0, brandPartners: 'Hermès, Prada', notes: 'TV presenter, makeup artist, clinic chain founder' },
  { rank: 4, name: 'Noor Stars', username: '@noorstars', followers: 17700000, engagementRate: 1.64, brandPartners: 'Mac, L\'Oréal, Benefit, Fendi, Dior', notes: 'Forbes 30 under 30' },
  { rank: 5, name: 'Fazza', username: '@faz3', followers: 17000000, engagementRate: 2.55, brandPartners: 'Apple, Trip, Walt Disney, Adidas, Starbucks', notes: '' },
  { rank: 6, name: 'Ahlam Alshamsi', username: '@ahlamalshamsi', followers: 15200000, engagementRate: 0.05, brandPartners: 'Apple, Nike, Dior', notes: 'MBC Arab Idol judge' },
  { rank: 7, name: 'Noha Nabil', username: '@nohastyleicon', followers: 13000000, engagementRate: 0, brandPartners: 'Swarovski, Givenchy, Fendi', notes: 'Forbes Top 10 Most Influential Arab Women' },
  { rank: 8, name: 'Dr Mahra Lutfi', username: '@missglobalpeace', followers: 11900000, engagementRate: 0, brandPartners: 'Armani, Bentley, Bulgari, Dior', notes: 'Doctor, activist, ethical tourism advocate' },
  { rank: 9, name: 'Ahmed Hossam', username: '@ahmedhossam', followers: 10400000, engagementRate: 22.62, brandPartners: '-', notes: 'Egyptian football legend (Mido), comedian' },
  { rank: 10, name: 'Asmaa Ibraheem', username: '@asmaa_ibraheemofficial', followers: 10200000, engagementRate: 0, brandPartners: 'Chanel, Alexander McQueen, Balmain, Cartier', notes: 'TV presenter, comedian; attended Dior Fashion Week 2024' },
]

const LIFESTYLE_INFLUENCERS = [
  { username: '@ajmal_khan_', followers: 3600000, engagementRate: 0.53, audienceGender: '86.75% male' },
  { username: '@kari____kari', followers: 3500000, engagementRate: 1.23, audienceGender: '51.01% male, 48.99% female' },
  { username: '@shaimahormillosa', followers: 2400000, engagementRate: 1.00, audienceGender: '59.56% female' },
  { username: '@hell0busra', followers: 2200000, engagementRate: 2.08, audienceGender: '59.55% female' },
  { username: '@moayad.alsawaf', followers: 2100000, engagementRate: 1.22, audienceGender: '57.39% female' },
  { username: '@coachmeddydubai', followers: 2100000, engagementRate: 2.40, audienceGender: '52.79% female' },
  { username: '@h5eif', followers: 1700000, engagementRate: 4.71, audienceGender: '51.34% female' },
  { username: '@dr__hinda', followers: 1600000, engagementRate: 1.17, audienceGender: '58.64% male' },
  { username: '@aaliyalala', followers: 1500000, engagementRate: 0.81, audienceGender: '58.58% female' },
  { username: '@themarmar', followers: 1400000, engagementRate: 2.33, audienceGender: '73.98% female' },
]

const MARKET_SIZE_DATA = [
  { market: 'GCC Influencer Marketing', currentValue: '$315.5M', projectedValue: '$771.6M', year: '2025→2032', cagr: '13.9%', source: 'PS Market Research' },
  { market: 'UAE Influencer Marketing', currentValue: '$173M', projectedValue: '$442.54M', year: '2025→2034', cagr: '11%', source: 'TheReportCubes' },
  { market: 'UAE Influencer Ad Spend', currentValue: '$69.35M', projectedValue: '$91.55M', year: '2025→2029', cagr: '7.2%', source: 'facebook.com/shyniahmeed' },
  { market: 'UAE Social Commerce', currentValue: '$3.21B', projectedValue: '$6.41B', year: '2024→2030', cagr: '-', source: 'Ken Research' },
  { market: 'UAE Virtual Influencer', currentValue: '$8.9M', projectedValue: '$76.6M', year: '2024→2030', cagr: '43.7%', source: 'inbeat.co' },
]

const USER_GROWTH_DATA = [
  { month: 'Jan 2024', users: 7000000, source: '-' },
  { month: 'Jan 2025', users: 7600000, source: 'DataReportal' },
  { month: 'Jun 2025', users: 7898800, source: 'NapoleonCat' },
  { month: 'Aug 2025', users: 8359400, source: 'NapoleonCat' },
]

const GENDER_DEMOGRAPHICS = [
  { gender: 'Male', percentage: 64.9, source: 'DataReportal', date: 'Feb 2025' },
  { gender: 'Female', percentage: 35.1, source: 'DataReportal', date: 'Feb 2025' },
]

const AGE_DEMOGRAPHICS = [
  { ageGroup: '18-24', female: 18.2, male: 30.4, source: 'NapoleonCat' },
  { ageGroup: '25-34', female: 44.3, male: 16.5, source: 'NapoleonCat' },
  { ageGroup: '35-44', female: 24.9, male: 5.7, source: 'NapoleonCat' },
  { ageGroup: '45-54', female: 8.9, male: 1.6, source: 'NapoleonCat' },
  { ageGroup: '55-64', female: 2.5, male: 0.8, source: 'NapoleonCat' },
  { ageGroup: '65+', female: 1.2, male: 0, source: 'NapoleonCat' },
]

const REGULATORY_FRAMEWORK = [
  { legislation: 'Federal Decree-Law No. 55 of 2023', description: 'Foundation for influencer regulation', effectiveDate: '2023' },
  { legislation: 'UAE Media Council regulations (2025)', description: 'Specific influencer advertising rules', effectiveDate: 'May 2025' },
  { legislation: 'Grace period', description: 'Time for compliance', effectiveDate: 'Until Jan 31, 2026' },
  { legislation: 'Full enforcement', description: 'Mandatory advertiser permit', effectiveDate: 'Feb 1, 2026' },
]

const PENALTIES = [
  { violation: 'Operating without permit', firstOffense: 'AED 10,000', secondOffense: 'AED 40,000', thirdOffense: 'Administrative closure after 30 days' },
  { violation: 'Social media without permit', firstOffense: 'Warning', secondOffense: 'AED 20,000', thirdOffense: 'AED 50,000' },
  { violation: 'Content violations', firstOffense: 'AED 5,000 - 1,000,000', secondOffense: '-', thirdOffense: '-' },
  { violation: 'False/misleading information', firstOffense: 'AED 10,000 - 40,000', secondOffense: '-', thirdOffense: '-' },
  { violation: 'National security violations', firstOffense: 'AED 50,000 - 500,000', secondOffense: '-', thirdOffense: '-' },
  { violation: 'Spreading rumors/fake news', firstOffense: 'AED 10,000 - 80,000', secondOffense: '-', thirdOffense: '-' },
  { violation: 'Offending religious beliefs', firstOffense: 'AED 100,000 - 1,000,000', secondOffense: '-', thirdOffense: '-' },
  { violation: 'Expired permit', firstOffense: 'AED 150/day (capped at AED 3,000)', secondOffense: '-', thirdOffense: '-' },
]

const COORDINATED_BEHAVIOR_TIMELINE = [
  { date: 'March 2, 2026', event: 'Instagram reel', description: '"We trust that Dubai stays safe please dont share any visuals"' },
  { date: 'March 5, 2026', event: 'Instagram reel', description: '"A new social media trend has taken off among influencers in Dubai"' },
  { date: 'March 6, 2026', event: 'CNN article', description: 'Dubai influencer-cultivated safe haven reputation' },
  { date: 'March 7, 2026', event: 'Instagram reel', description: 'Reports suggest UAE asked influencers to film content showing "everything is normal"' },
  { date: 'March 9, 2026', event: 'France24/ABC article', description: '"Dubai\'s influencers have a new rule: Don\'t mention the war"' },
  { date: 'March 11, 2026', event: 'DailyMail article', description: 'Bizarre identical messages about Dubai safety' },
  { date: 'March 14, 2026', event: 'Instagram posts', description: '"Ten people arrested in UAE for publishing"; 19 Indians caught in Gulf digital misinformation dragnet' },
  { date: 'March 16, 2026', event: 'Arrests', description: '375 arrested for UAE conflict posts' },
  { date: 'April 18, 2026', event: 'Instagram reel', description: 'UAE rules requiring influencers to take a test' },
]

const VIRTUAL_INFLUENCERS = [
  { name: 'Cassandra AI', platform: '@cassandraaig', description: '19-year-old ChatGPT AI Model, Singer, Dancer, speaks 36 languages', location: 'Copenhagen' },
  { name: 'MetaKira', platform: '@meta.kira', description: 'Virtual girl in UAE, 4 years in Dubai; personal content only; no promotions', location: 'Dubai' },
]

const CONTENT_TRENDS = [
  { metric: 'UAE internet users on Instagram', value: '71.4%', source: 'inbeat.co' },
  { metric: 'Time spent on Instagram (Reels)', value: '30% of total', source: 'inbeat.co' },
  { metric: 'Users following influencer accounts', value: '33%', source: 'inbeat.co' },
  { metric: 'Bilingual content engagement', value: '3.2x higher', source: 'inbeat.co' },
  { metric: 'Users doing brand research on social', value: '50%+', source: 'inbeat.co' },
  { metric: 'Voice-based searches in UAE', value: '50%', source: 'inbeat.co' },
  { metric: 'Daily online hours (UAE vs global)', value: '7.2h vs 5.3h', source: 'GlobalRiskCommunity' },
  { metric: 'UAE nano-influencer engagement', value: '6-8%', source: 'GlobalRiskCommunity' },
  { metric: 'Global Instagram average', value: '1.2%', source: 'GlobalRiskCommunity' },
  { metric: 'Trust micro-influencer over celebrity', value: '58%', source: 'GlobalRiskCommunity' },
]

const AGENCIES = [
  { agency: 'inbeat.agency', specialty: 'Best 31 Social Media Agencies in Dubai', website: 'inbeat.agency' },
  { agency: 'Social Trends ME', specialty: 'Digital Marketing, SEO, Social Content', website: '@socialtrendsme' },
  { agency: 'Mason Circle Dubai', specialty: 'Dubai F&B Hospitality Creatives', website: '@masoncircle.dubai' },
  { agency: 'Hashtag', specialty: 'Strategic planning, content creation, media strategy', website: 'hashtag-me.com' },
  { agency: 'Socially.ae', specialty: 'Instagram Marketing, Influencer Marketing', website: 'socially.ae' },
  { agency: 'Savit Interactive', specialty: 'Content strategy, reels, profile management', website: 'savit.ae' },
]

const QUERY_PATTERNS = [
  { category: 'Regulatory', examples: 'UAE Instagram influencer ad disclosure 2024 2025, UAE Instagram influencer permit license Dubai 2025 2026' },
  { category: 'Controversy', examples: 'UAE Instagram viral Reels controversy 2024 2025, UAE Instagram behind the scenes reality 2024 2025' },
  { category: 'Safety/Coordinated', examples: 'Dubai Instagram influencer coordinated posts safety 2026, UAE Instagram bot troll campaign inauthentic 2024 2025' },
  { category: 'Statistics', examples: 'UAE Instagram statistics users 2024 2025, UAE Instagram content creator economy statistics 2024 2025' },
  { category: 'Enforcement', examples: 'Dubai Instagram influencers arrested misinformation 2026, UAE Instagram influencer fined crackdown 2024 2025' },
  { category: 'Finance', examples: 'UAE Instagram influencer tax corporate 2024 2025, UAE Instagram influencer advertising market size 2024 2025' },
  { category: 'Trends', examples: 'Dubai Instagram reel viral trending 2025, UAE Instagram hashtag trending topics 2025' },
  { category: 'Future', examples: 'UAE Instagram metaverse virtual influencer 2024 2025, Dubai Instagram social media marketing agency 2024 2025' },
]

const KEY_DATES = [
  { date: '2023', event: 'Federal Decree-Law No. 55 of 2023 enacted' },
  { date: 'January 2024', event: 'Dubai AED 150 million content creator fund launched' },
  { date: 'May 2025', event: 'UAE Media Council advertising permit effective' },
  { date: 'January 31, 2026', event: 'Grace period ends for influencer permit' },
  { date: 'February 1, 2026', event: 'Full enforcement of advertiser permit begins' },
  { date: 'March 2026', event: 'Regional tensions; coordinated safety posts; ~375 arrested' },
  { date: 'April 2026', event: 'UAE introduces influencer testing requirement' },
]

export default function InstagramVisualPlatformsPage() {
  const { data } = useInstagramIntelligenceData()
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedInfluencer, setSelectedInfluencer] = useState<typeof TOP_INFLUENCERS[0] | null>(null)

  if (!data) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-[400px]"
      >
        <div className="text-platinum-400 flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          Loading Instagram data...
        </div>
      </motion.div>
    )
  }

  const { metrics } = data

  // Chart data
  const sentimentData = [
    { name: 'Positive', value: 52, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 30, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 18, color: CHART_COLORS.rose },
  ]

  const genderData = GENDER_DEMOGRAPHICS.map(g => ({
    name: g.gender,
    value: g.percentage,
    color: g.gender === 'Male' ? CHART_COLORS.navy : CHART_COLORS.rose,
  }))

  const ageGroupData = AGE_DEMOGRAPHICS.map(a => ({
    name: a.ageGroup,
    female: a.female,
    male: a.male,
  }))

  const userGrowthChartData = USER_GROWTH_DATA.map(u => ({
    name: u.month,
    users: u.users / 1000000,
  }))

  const marketProjectionData = MARKET_SIZE_DATA.map(m => ({
    market: m.market.split(' ')[0],
    current: parseFloat(m.currentValue.replace(/[$MB]/g, '')),
    projected: parseFloat(m.projectedValue.replace(/[$MB]/g, '')),
  }))

  const engagementData = [
    { name: 'Likes', value: metrics.engagement.likes, color: CHART_COLORS.rose },
    { name: 'Comments', value: metrics.engagement.comments, color: CHART_COLORS.info },
    { name: 'Saves', value: 28, color: CHART_COLORS.gold },
  ]

  const contentCategories = [
    { name: 'Luxury Lifestyle', value: 35, color: CHART_COLORS.purple },
    { name: 'Lifestyle & Travel', value: 35, color: CHART_COLORS.gold },
    { name: 'Food & Dining', value: 15, color: CHART_COLORS.orange },
    { name: 'Fashion & Beauty', value: 10, color: CHART_COLORS.rose },
    { name: 'Business', value: 5, color: CHART_COLORS.info },
  ]

  const govAccountData = data.governmentAccounts || []

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8 p-8"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30">
              <Instagram className="h-6 w-6 text-purple-400" />
            </div>
            <Badge variant="default" className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30">
              VISUAL PLATFORMS
            </Badge>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Instagram & Visual Platforms
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Comprehensive Instagram intelligence: 8.36M UAE users, influencer ecosystem,
            regulatory framework, coordinated behavior incidents, and market analysis.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-glass-border bg-glass-surface/50 hover:bg-glass-surface text-platinum">
            <Image className="h-4 w-4" />
            View Content
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white gap-2 shadow-lg shadow-purple-500/25">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <EnhancedMetricCard
          title="Active Users"
          value="8.36M"
          previousValue="7.6M"
          trend="up"
          icon={Users}
          gradient="purple"
        />
        <EnhancedMetricCard
          title="Penetration"
          value="77.7"
          unit="%"
          previousValue="67.8%"
          trend="up"
          icon={Globe}
          gradient="navy"
        />
        <EnhancedMetricCard
          title="Bot Activity"
          value="38"
          unit="%"
          icon={Shield}
          gradient="rose"
          status="warning"
        />
        <EnhancedMetricCard
          title="Gov Requests"
          value="678"
          icon={Flag}
          gradient="gold"
        />
        <EnhancedMetricCard
          title="Influencers"
          value="122K"
          icon={Star}
          gradient="emerald"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="glass-panel backdrop-blur-xl bg-glass-surface/50 border border-glass-border p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-glass-surface">Overview</TabsTrigger>
          <TabsTrigger value="demographics" className="data-[state=active]:bg-glass-surface">Demographics</TabsTrigger>
          <TabsTrigger value="influencers" className="data-[state=active]:bg-glass-surface">Influencers</TabsTrigger>
          <TabsTrigger value="regulatory" className="data-[state=active]:bg-glass-surface">Regulatory</TabsTrigger>
          <TabsTrigger value="market" className="data-[state=active]:bg-glass-surface">Market</TabsTrigger>
          <TabsTrigger value="incidents" className="data-[state=active]:bg-glass-surface">Incidents</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="overview" className="space-y-6">
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid gap-6 lg:grid-cols-2"
            >
              {/* User Growth Chart */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">User Growth</h3>
                    <p className="text-sm text-platinum/60">Instagram users in UAE over time</p>
                  </div>
                  <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                    +10.1% QoQ
                  </Badge>
                </div>
                <AreaChart
                  data={userGrowthChartData}
                  xAxisKey="name"
                  areas={[{ dataKey: 'users', name: 'Users (M)', color: CHART_COLORS.purple }]}
                  height={220}
                  showGrid={true}
                  showLegend={false}
                />
              </GlassCard>

              {/* Sentiment Analysis */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Sentiment Analysis</h3>
                    <p className="text-sm text-platinum/60">Overall: {metrics.sentiment.overall} (Score: {metrics.sentiment.overall})</p>
                  </div>
                  <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                    {metrics.sentiment.overall}/100
                  </Badge>
                </div>
                <PieChart
                  data={sentimentData}
                  height={220}
                  showLegend={true}
                />
              </GlassCard>

              {/* Content Categories */}
              <GlassCard className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">Content Categories</h3>
                  <p className="text-sm text-platinum/60">Distribution of content types</p>
                </div>
                <BarChart
                  data={contentCategories}
                  xAxisKey="name"
                  bars={[{ dataKey: 'value', name: 'Share %', color: CHART_COLORS.purple }]}
                  height={250}
                  showGrid={true}
                />
              </GlassCard>

              {/* Engagement Metrics */}
              <GlassCard className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">Engagement Metrics</h3>
                  <p className="text-sm text-platinum/60">Average engagement per post</p>
                </div>
                <BarChart
                  data={engagementData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'value', name: 'Avg per Post', color: CHART_COLORS.gold }]}
                  height={250}
                  showGrid={true}
                />
              </GlassCard>
            </motion.div>

            {/* Trending Hashtags */}
            <motion.div variants={fadeInUp}>
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Trending Hashtags</h3>
                    <p className="text-sm text-platinum/60">Most used hashtags in UAE</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['#UAE', '#Dubai', '#AbuDhabi', '#UAEInfluencer', '#DubaiLife', '#Luxury', '#Fashion', '#Travel', '#Beauty', '#Food'].map((tag) => (
                    <motion.div
                      key={tag}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300 hover:border-purple-500/40 transition-colors cursor-pointer"
                    >
                      <Hash className="h-3 w-3" />
                      <span className="text-sm font-medium">{tag}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Bot Activity */}
            <motion.div variants={fadeInUp}>
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Bot Activity Analysis</h3>
                    <p className="text-sm text-platinum/60">{data.botActivity?.estimatedBotPercent}% estimated bot activity</p>
                  </div>
                  <Badge variant={data.botActivity?.coordinatedInauthentic ? 'destructive' : 'success'}>
                    {data.botActivity?.coordinatedInauthentic ? 'Coordinated Detected' : 'None'}
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-platinum/70">Bot Activity Level</span>
                    <span className="text-lg font-bold text-rose-400">{data.botActivity?.estimatedBotPercent}%</span>
                  </div>
                  <Progress value={data.botActivity?.estimatedBotPercent} className="h-2" />
                  <div className="grid gap-3 mt-4">
                    {data.botActivity?.indicators?.map((indicator: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3 rounded-lg bg-slate-800/30 p-3">
                        <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0" />
                        <span className="text-sm text-slate-200">{indicator}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Demographics Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="demographics" className="space-y-6">
            <motion.div
              key="demographics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid gap-6 lg:grid-cols-2"
            >
              {/* Gender Distribution */}
              <GlassCard className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">Gender Distribution</h3>
                  <p className="text-sm text-platinum/60">UAE Instagram audience by gender</p>
                </div>
                <PieChart
                  data={genderData}
                  height={280}
                  showLegend={true}
                />
                <div className="mt-4 space-y-2">
                  {GENDER_DEMOGRAPHICS.map((g) => (
                    <div key={g.gender} className="flex items-center justify-between">
                      <span className="text-sm text-platinum/70">{g.gender}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">{g.percentage}%</span>
                        <Badge variant="outline" className="text-xs border-platinum/30 text-platinum/50">
                          {g.source}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Age Demographics */}
              <GlassCard className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">Age Demographics</h3>
                  <p className="text-sm text-platinum/60">Audience breakdown by age and gender</p>
                </div>
                <BarChart
                  data={ageGroupData}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'female', name: 'Female %', color: CHART_COLORS.rose },
                    { dataKey: 'male', name: 'Male %', color: CHART_COLORS.navy },
                  ]}
                  height={280}
                  showGrid={true}
                  showLegend={true}
                />
              </GlassCard>
            </motion.div>

            {/* Age Group Table */}
            <motion.div variants={fadeInUp}>
              <GlassCard className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">Detailed Age Breakdown</h3>
                  <p className="text-sm text-platinum/60">NapoleonCat data (June 2025)</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-platinum/10">
                        <th className="text-left py-3 px-4 text-sm font-medium text-platinum/60">Age Group</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-rose-400">Female %</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-blue-400">Male %</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-platinum/60">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {AGE_DEMOGRAPHICS.map((age) => (
                        <tr key={age.ageGroup} className="border-b border-platinum/5 hover:bg-white/5">
                          <td className="py-3 px-4 font-medium text-white">{age.ageGroup}</td>
                          <td className="py-3 px-4 text-right text-rose-300">{age.female}%</td>
                          <td className="py-3 px-4 text-right text-blue-300">{age.male}%</td>
                          <td className="py-3 px-4 text-right text-sm text-platinum/50">
                            {age.ageGroup === '25-34' && age.female === 44.3 ? 'Largest group, ~3.5M' : ''}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </motion.div>

            {/* Content Trends */}
            <motion.div variants={fadeInUp}>
              <GlassCard className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">Platform Usage & Content Trends</h3>
                  <p className="text-sm text-platinum/60">Key engagement metrics from UAE users</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {CONTENT_TRENDS.map((trend, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                      <span className="text-sm text-slate-200">{trend.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gold">{trend.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Influencers Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="influencers" className="space-y-6">
            <motion.div
              key="influencers"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid gap-6 lg:grid-cols-2"
            >
              {/* Top 10 Influencers */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Top UAE Influencers</h3>
                    <p className="text-sm text-platinum/60">By follower count (2025)</p>
                  </div>
                  <Badge variant="outline" className="border-gold/30 text-gold">Top 10</Badge>
                </div>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-2">
                    {TOP_INFLUENCERS.map((inf) => (
                      <motion.div
                        key={inf.rank}
                        whileHover={{ x: 4, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                        className="flex items-center justify-between p-3 rounded-lg border border-transparent hover:border-purple-500/20 cursor-pointer transition-all"
                        onClick={() => setSelectedInfluencer(inf)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 font-bold text-sm">
                            {inf.rank}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-white">{inf.name}</span>
                              {inf.engagementRate > 2 && (
                                <Badge variant="outline" className="text-xs border-emerald-500/30 text-emerald-400">
                                  High ER
                                </Badge>
                              )}
                            </div>
                            <span className="text-xs text-platinum/50">{inf.username}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-gold">{(inf.followers / 1000000).toFixed(1)}M</span>
                          <span className="text-xs text-platinum/50 ml-1">({inf.engagementRate > 0 ? `${inf.engagementRate}%` : 'N/A'})</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </GlassCard>

              {/* Selected Influencer Detail */}
              {selectedInfluencer && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <GlassCard className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{selectedInfluencer.name}</h3>
                        <p className="text-sm text-platinum/60">{selectedInfluencer.username}</p>
                      </div>
                      <Badge variant="outline" className="border-gold/30 text-gold">
                        Rank #{selectedInfluencer.rank}
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-slate-800/30">
                          <p className="text-xs text-platinum/50 uppercase">Followers</p>
                          <p className="text-xl font-bold text-gold">{(selectedInfluencer.followers / 1000000).toFixed(1)}M</p>
                        </div>
                        <div className="p-4 rounded-lg bg-slate-800/30">
                          <p className="text-xs text-platinum/50 uppercase">Engagement</p>
                          <p className="text-xl font-bold text-emerald-400">
                            {selectedInfluencer.engagementRate > 0 ? `${selectedInfluencer.engagementRate}%` : 'N/A'}
                          </p>
                        </div>
                      </div>
                      {selectedInfluencer.brandPartners !== '-' && (
                        <div>
                          <p className="text-xs text-platinum/50 uppercase mb-2">Brand Partners</p>
                          <p className="text-sm text-white">{selectedInfluencer.brandPartners}</p>
                        </div>
                      )}
                      {selectedInfluencer.notes && (
                        <div>
                          <p className="text-xs text-platinum/50 uppercase mb-2">Notes</p>
                          <p className="text-sm text-slate-300">{selectedInfluencer.notes}</p>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                      onClick={() => setSelectedInfluencer(null)}
                    >
                      Close
                    </Button>
                  </GlassCard>
                </motion.div>
              )}

              {/* Lifestyle Influencers */}
              {!selectedInfluencer && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <GlassCard className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">Lifestyle Influencers</h3>
                        <p className="text-sm text-platinum/60">High engagement creators</p>
                      </div>
                      <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">High ER</Badge>
                    </div>
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-2">
                        {LIFESTYLE_INFLUENCERS.map((inf, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                            <div>
                              <span className="text-sm font-medium text-white">{inf.username}</span>
                              <p className="text-xs text-platinum/50">{inf.audienceGender}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-bold text-gold">{(inf.followers / 1000000).toFixed(1)}M</span>
                              <span className="text-xs text-emerald-400 ml-2">{inf.engagementRate}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </GlassCard>
                </motion.div>
              )}
            </motion.div>

            {/* Government Accounts */}
            <motion.div variants={fadeInUp}>
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Government Accounts</h3>
                    <p className="text-sm text-platinum/60">Official UAE presence on Instagram</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {govAccountData.map((account, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                          <Building2 className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-white">{account.handle}</span>
                            {account.verified && (
                              <CheckCircle className="h-4 w-4 text-emerald-400" />
                            )}
                          </div>
                          <Badge variant="outline" className="text-xs mt-1 border-blue-500/30 text-blue-300">
                            {account.platform || 'Government'}
                          </Badge>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-gold">
                        {account.followers?.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Regulatory Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="regulatory" className="space-y-6">
            <motion.div
              key="regulatory"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid gap-6 lg:grid-cols-2"
            >
              {/* Regulatory Framework */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Regulatory Framework</h3>
                    <p className="text-sm text-platinum/60">Key legislation timeline</p>
                  </div>
                  <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                    Federal Decree-Law No. 55
                  </Badge>
                </div>
                <div className="space-y-4">
                  {REGULATORY_FRAMEWORK.map((reg, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                        <Scale className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-white">{reg.legislation}</h4>
                          <Badge variant="outline" className="text-xs border-platinum/30">
                            {reg.effectiveDate}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-400 mt-1">{reg.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* License Requirements */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Dual Licensing Requirement</h3>
                    <p className="text-sm text-platinum/60">All UAE influencers must hold BOTH licenses</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-5 w-5 text-purple-400" />
                      <h4 className="text-sm font-medium text-white">Commercial Trade License</h4>
                    </div>
                    <p className="text-sm text-slate-300 mb-2">From free zones (Meydan, UAQ FTZ)</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-platinum/50">Cost</span>
                      <span className="text-sm font-bold text-gold">AED 5,000 - 15,000/year</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-platinum/50">Setup time</span>
                      <span className="text-sm text-emerald-400">As fast as 1 hour digitally</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-gold" />
                      <h4 className="text-sm font-medium text-white">E-Media Influencer Permit</h4>
                    </div>
                    <p className="text-sm text-slate-300 mb-2">UAE Media Council "Advertiser Permit"</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-platinum/50">UAE Citizens/Residents</span>
                      <span className="text-sm font-bold text-emerald-400">FREE (2026-2028)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-platinum/50">Non-Residents</span>
                      <span className="text-sm font-bold text-gold">AED 500/3 months</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Penalties Table */}
            <motion.div variants={fadeInUp}>
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Penalties Overview</h3>
                    <p className="text-sm text-platinum/60">Violations and enforcement actions</p>
                  </div>
                  <Badge variant="destructive">Enforcement Active</Badge>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-platinum/10">
                        <th className="text-left py-3 px-4 text-sm font-medium text-platinum/60">Violation</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-amber-400">First Offense</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-orange-400">Second</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-rose-400">Third</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PENALTIES.map((penalty, idx) => (
                        <tr key={idx} className="border-b border-platinum/5 hover:bg-white/5">
                          <td className="py-3 px-4 text-sm text-white">{penalty.violation}</td>
                          <td className="py-3 px-4 text-right text-sm text-amber-300">{penalty.firstOffense}</td>
                          <td className="py-3 px-4 text-right text-sm text-orange-300">{penalty.secondOffense}</td>
                          <td className="py-3 px-4 text-right text-sm text-rose-300">{penalty.thirdOffense}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </motion.div>

            {/* Key Dates */}
            <motion.div variants={fadeInUp}>
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Key Dates Timeline</h3>
                    <p className="text-sm text-platinum/60">Important regulatory milestones</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-rose-500" />
                  <div className="space-y-4">
                    {KEY_DATES.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 pl-4">
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                          <Calendar className="h-5 w-5 text-purple-400" />
                        </div>
                        <div className="flex-1 pt-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs border-platinum/30 text-platinum/70">
                              {item.date}
                            </Badge>
                          </div>
                          <p className="text-sm text-white mt-1">{item.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Market Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="market" className="space-y-6">
            <motion.div
              key="market"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid gap-6 lg:grid-cols-2"
            >
              {/* Market Projections */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Market Projections</h3>
                    <p className="text-sm text-platinum/60">UAE Influencer marketing market growth</p>
                  </div>
                  <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">Growing</Badge>
                </div>
                <BarChart
                  data={marketProjectionData}
                  xAxisKey="market"
                  bars={[
                    { dataKey: 'current', name: 'Current ($M)', color: CHART_COLORS.purple },
                    { dataKey: 'projected', name: 'Projected ($M)', color: CHART_COLORS.gold },
                  ]}
                  height={300}
                  showGrid={true}
                />
              </GlassCard>

              {/* CAGR Comparison */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Growth Rates (CAGR)</h3>
                    <p className="text-sm text-platinum/60">Compound annual growth rates by segment</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {MARKET_SIZE_DATA.map((market, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-slate-800/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white">{market.market}</span>
                        <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                          {market.cagr}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-platinum/50">
                        <span>{market.currentValue} → {market.projectedValue}</span>
                        <span>{market.year}</span>
                      </div>
                      <Progress
                        value={parseFloat(market.cagr.replace(/[^0-9.]/g, '')) * 5}
                        className="h-1 mt-2"
                      />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Virtual Influencers */}
            <motion.div variants={fadeInUp}>
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Virtual Influencers</h3>
                    <p className="text-sm text-platinum/60">43.7% CAGR — fastest growing globally</p>
                  </div>
                  <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                    Emerging
                  </Badge>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {VIRTUAL_INFLUENCERS.map((vInf, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                          <Activity className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white">{vInf.name}</h4>
                          <span className="text-xs text-platinum/50">{vInf.platform}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 mb-2">{vInf.description}</p>
                      <Badge variant="outline" className="text-xs border-blue-500/30 text-blue-300">
                        {vInf.location}
                      </Badge>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Marketing Agencies */}
            <motion.div variants={fadeInUp}>
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Top Marketing Agencies</h3>
                    <p className="text-sm text-platinum/60">Dubai social media agencies (2025-2026)</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {AGENCIES.map((agency, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                      <div>
                        <h4 className="text-sm font-medium text-white">{agency.agency}</h4>
                        <p className="text-xs text-slate-400">{agency.specialty}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-platinum/50" />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Incidents Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="incidents" className="space-y-6">
            <motion.div
              key="incidents"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Coordinated Behavior Overview */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Dubai Safety Posts Incident</h3>
                    <p className="text-sm text-platinum/60">March 2026 Coordinated Behavior</p>
                  </div>
                  <Badge variant="destructive">~375 Arrested</Badge>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-rose-500/10 to-orange-500/10 border border-rose-500/20">
                  <p className="text-sm text-slate-200 mb-3">
                    During regional tensions, dozens of Dubai influencers posted near-identical videos praising
                    the city's safety and glorifying its leadership. Analysis showed <span className="text-rose-400 font-bold">29 posts</span> with
                    almost identical messages.
                  </p>
                  <div className="flex items-center gap-2">
                    <AlertOctagon className="h-4 w-4 text-rose-400" />
                    <span className="text-xs text-rose-300">
                      Quote: "When people know they could face jail for what they post, it inevitably shapes what you see online."
                      — Radha Stirling, Detained in Dubai
                    </span>
                  </div>
                </div>
              </GlassCard>

              {/* Timeline */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Enforcement Timeline</h3>
                    <p className="text-sm text-platinum/60">March - April 2026 incident chronology</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500 via-orange-500 to-amber-500" />
                  <div className="space-y-4">
                    {COORDINATED_BEHAVIOR_TIMELINE.map((event, idx) => (
                      <div key={idx} className="flex items-start gap-4 pl-4">
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-500/20 to-orange-500/20 border border-rose-500/30">
                          <span className="text-xs font-bold text-rose-400">{idx + 1}</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs border-platinum/30 text-platinum/70">
                              {event.date}
                            </Badge>
                            <Badge variant="outline" className="text-xs border-rose-500/30 text-rose-300">
                              {event.event}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-200 mt-1">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>

              {/* Arrest Statistics */}
              <div className="grid gap-6 lg:grid-cols-2">
                <GlassCard className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white">Arrest Statistics</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-rose-500/10 to-red-500/10 border border-rose-500/20">
                      <p className="text-xs text-platinum/50 uppercase">Total Arrested</p>
                      <p className="text-3xl font-bold text-rose-400">~375</p>
                      <p className="text-xs text-slate-400 mt-1">For UAE conflict posts</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-800/30">
                      <p className="text-xs text-platinum/50 uppercase">Indian Nationals</p>
                      <p className="text-2xl font-bold text-gold">19</p>
                      <p className="text-xs text-slate-400 mt-1">Caught in Gulf digital misinformation dragnet</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white">Potential Penalties</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-slate-800/30">
                      <p className="text-xs text-platinum/50 uppercase">Prison Sentence</p>
                      <p className="text-2xl font-bold text-rose-400">Up to 2 years</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-800/30">
                      <p className="text-xs text-platinum/50 uppercase">Fine Potential</p>
                      <p className="text-2xl font-bold text-gold">$77,000</p>
                      <p className="text-xs text-slate-400 mt-1">(£40,000-58,000)</p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Charges */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Charges Filed</h3>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    'Posting "rumours, misinformation"',
                    'Contradicting official announcements',
                    'Anything causing "public panic"',
                    'Misleading conflict-related content'
                  ].map((charge, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                      <AlertTriangle className="h-4 w-4 text-rose-400 mb-2" />
                      <p className="text-sm text-slate-200">{charge}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Key Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Key Narratives" description="Dominant narratives on UAE Instagram">
            <div className="space-y-6">
              {data.keyNarratives?.map((narrative, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="glass-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{narrative.topic}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant={
                            narrative.sentiment === 'positive' ? 'default' :
                            narrative.sentiment === 'negative' ? 'destructive' : 'outline'
                          }>
                            {narrative.sentiment}
                          </Badge>
                          <Badge variant="outline" className="text-gold">
                            {narrative.prevalence}% prevalence
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-300 mb-4">{narrative.narrative}</p>
                      <div className="space-y-2">
                        <p className="text-xs text-slate-400 font-medium">Sources:</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            {narrative.source}
                          </Badge>
                        </div>
                      </div>
                      <Progress value={typeof narrative.prevalence === 'number' ? narrative.prevalence : 50} className="mt-4 h-2" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Query Patterns Tab */}
        <TabsContent value="querypatterns" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">Key Query Patterns</h3>
                  <p className="text-sm text-platinum/60">Instagram intelligence search strategies</p>
                </div>
              </div>
              <div className="space-y-4">
                {QUERY_PATTERNS.map((pattern, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-slate-800/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-purple-400" />
                      <h4 className="text-sm font-medium text-white">{pattern.category}</h4>
                    </div>
                    <p className="text-xs text-slate-400">{pattern.examples}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
