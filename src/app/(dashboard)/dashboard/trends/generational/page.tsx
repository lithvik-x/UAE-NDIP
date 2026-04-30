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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import { motion } from 'framer-motion'
import {
  Users,
  TrendingDown,
  TrendingUp,
  Smartphone,
  Heart,
  Sparkles,
  Briefcase,
  Home,
  GraduationCap,
  Globe,
  Zap,
  Target,
  Award,
  Building,
  Shield,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Lightbulb,
  UserCheck,
  UsersRound,
  HeartPulse,
  Brain,
  Baby,
  Crown,
  Flag,
  Gamepad2,
  Code,
  Languages,
  Marriage,
  Milestone,
  Scale,
} from 'lucide-react'

// ============================================================================
// DATA FROM MD FILE 10-3-GENERATIONAL-SHIFT-RESULTS
// ============================================================================

// Youth Unemployment Historical Data
const youthUnemploymentHistorical = [
  { year: '1995', rate: 5.34, color: CHART_COLORS.emerald },
  { year: '2019', rate: 7.32, color: CHART_COLORS.gold },
  { year: '2020', rate: 13.48, color: CHART_COLORS.rose },
  { year: '2021', rate: 9.74, color: CHART_COLORS.gold },
  { year: '2022', rate: 9.99, color: CHART_COLORS.gold },
  { year: '2023', rate: 6.35, color: CHART_COLORS.emerald },
  { year: '2024', rate: 6.42, color: CHART_COLORS.emerald },
  { year: '2025', rate: 6.45, color: CHART_COLORS.navy },
]

// Employment KPIs
const employmentKPIs = [
  { kpi: 'Youth Unemployment 2025', value: '6.45%', trend: 'Decreasing', source: 'YCharts/FRED', criticality: 'Critical' },
  { kpi: 'Youth Unemployment Peak 2020', value: '13.48%', trend: 'Historical', source: 'YCharts', criticality: 'Critical' },
  { kpi: 'Youth as % of Workforce', value: '50%', trend: 'Static', source: 'WAM Aug 2025', criticality: 'Critical' },
  { kpi: 'Emiratis in Private Sector', value: '152,000+', trend: '+33% H1 2025', source: 'ME Briefing', criticality: 'Critical' },
  { kpi: 'Companies with Emiratis', value: '29,000', trend: 'As of Jun 2025', source: 'ME Briefing', criticality: 'Critical' },
  { kpi: 'Emiratization Target 2026', value: '10%', trend: 'Target', source: 'ME Briefing', criticality: 'Critical' },
  { kpi: 'Female Youth Unemployment', value: '12.1%', trend: 'Est 2024', source: 'Estimate', criticality: 'Critical' },
  { kpi: 'Male Youth Unemployment', value: '4.1%', trend: 'Est 2024', source: 'Estimate', criticality: 'High' },
]

// Gen Z Consumer Metrics
const genZConsumerMetrics = [
  { metric: 'Personalized Experience Priority', value: 67, unit: '%', source: 'EDS Arabic' },
  { metric: 'Cause-Driven Brand Premium', value: 60, unit: '%+', source: 'Mastercard 2025' },
  { metric: 'HNWI Brand "Do Good" Spending', value: 83, unit: '%', source: 'Gulf Business 2025' },
  { metric: 'Daily Social Media Usage', value: 2.5, unit: 'hrs+', source: 'Various' },
  { metric: 'Financial Insecurity', value: 48, unit: '%', source: 'Deloitte Jun 2025' },
  { metric: 'Purpose Importance at Work', value: 89, unit: '%', source: 'Deloitte Jun 2025' },
]

// Gen Alpha Metrics
const genAlphaMetrics = [
  { metric: 'Brand Attentive', value: 87, unit: '%', source: 'Khaleej Times Jun 2025' },
  { metric: 'Luxury Ownership by Age 10', value: 68, unit: '%', source: 'Razorfish/Khaleej Times' },
  { metric: 'Parental Luxury Influence', value: 69, unit: '%', source: 'Khaleej Times Jun 2025' },
  { metric: 'Sustainable Brand Premium', value: 60, unit: '%+', source: 'Various' },
]

// Digital Native Metrics
const digitalNativeMetrics = [
  { metric: 'Gen Z Daily Snapchat Usage', value: 90, unit: '%+', source: 'EDS Arabic' },
  { metric: 'Gen Z AI for Work Tasks', value: 48, unit: '%', source: 'EDS Arabic' },
  { metric: 'Abu Dhabi Digital Strategy', value: 13, unit: 'AED B', source: 'Gulf Business' },
  { metric: 'Agentic AI Government Services', value: 50, unit: '%', source: 'Akingump', note: 'Target 2027' },
  { metric: 'Smartphone Penetration', value: 'Highest', unit: 'Globally', source: 'EDS Arabic' },
]

// Mental Health Metrics
const mentalHealthMetrics = [
  { metric: 'UAE Wellbeing Score 2025', value: 70, unit: '%', change: '+8pp', source: 'Oliver Wyman Sep 2025' },
  { metric: 'Mental Health Condition Prevalence', value: 25, unit: '%', note: '1 in 4', source: 'Oliver Wyman' },
  { metric: 'GCC Undiagnosed Conditions', value: 80, unit: '%', source: 'Oliver Wyman' },
  { metric: 'Open to Mental Health Support', value: 66, unit: '%~', source: 'Oliver Wyman' },
  { metric: 'Abu Dhabi Treatment Increase', value: 30, unit: '%', note: 'since 2022', source: 'Oliver Wyman' },
  { metric: 'Dubai Mental Health Investment', value: 105, unit: 'AED M', source: 'Oliver Wyman' },
  { metric: 'GCC Psychiatrists per 100K', value: 3, unit: '', note: 'vs OECD ~15', source: 'Oliver Wyman' },
]

// Emiratization Metrics
const emiratizationMetrics = [
  { metric: 'Minimum Wage (Emiratis)', value: 6000, unit: 'AED/month', source: 'ME Briefing' },
  { metric: 'Penalty per Missing Emirati', value: 6000, unit: 'AED/month', source: 'ME Briefing' },
  { metric: 'Required Private Sector Growth', value: 2, unit: '% annual', source: 'ME Briefing' },
  { metric: 'Required Half-Year Increment', value: 1, unit: '%', source: 'ME Briefing' },
  { metric: 'CBUAE Financial Sector Nationals', value: 31, unit: '%', note: 'Surpassed target', source: 'ME Briefing' },
]

// Gig Economy Data
const gigEconomyMetrics = [
  { metric: 'Global Gig Economy 2023', value: 455, unit: '$B', source: 'LinkedIn Jan 2026' },
  { metric: 'UAE Freelancer Contribution', value: 10, unit: 'AED B+/year', source: 'LinkedIn Jan 2026' },
  { metric: 'UAE Global Gig Market Share', value: 7, unit: '%+', source: 'LinkedIn Jan 2026' },
  { metric: 'Startup Emirates Training Target', value: 10000, unit: 'persons', source: 'Khaleej Times Sep 2025' },
  { metric: 'Startup Emirates Jobs Target', value: 30000, unit: 'jobs', source: 'Khaleej Times Sep 2025' },
]

// Permit Types
const permitTypes = [
  { type: 'Dubai Freelance Permit', duration: '1-3 years', authority: 'Dubai DED/GoFreelance' },
  { type: 'Abu Dhabi Freelance Licence', duration: '1-2 years', authority: 'ADGM/twofour54' },
  { type: 'Free Zone Freelance', duration: '1-3 years', authority: 'Various free zones' },
  { type: 'Green Visa', duration: '5 years', authority: 'MOHRE/ICP' },
  { type: 'Virtual Working Visa', duration: '1 year', authority: 'MOHRE' },
]

// Education & Skills Metrics
const educationSkillsMetrics = [
  { metric: 'New Teachers Required by 2030', value: 30000, unit: 'persons', source: 'WEF Aug 2025' },
  { metric: 'Al Ramsa Institute Students', value: 1200, unit: '+/year', source: 'Gulf News Nov 2025' },
  { metric: 'Future Jobs Requiring New Skills', value: 41, unit: '%', source: 'Al Ghurair Foundation' },
  { metric: 'Students Below Basic Financial Literacy', value: 39, unit: '%', source: 'Al Ghurair Foundation' },
  { metric: 'Massar Platform Data Analyzed', value: 28, unit: 'terabytes', source: 'Al Ghurair Foundation' },
]

// National Identity Strategy
const nationalIdentityData = [
  { metric: 'Core Values', value: 5, source: 'WAM/Khaleej Times Nov 2025' },
  { metric: 'Core Elements', value: 6, source: 'WAM/Khaleej Times Nov 2025' },
  { metric: 'Strategic Pillars', value: 3, source: 'Khaleej Times Nov 2025' },
  { metric: 'Implementation Dimensions', value: 7, source: 'Khaleej Times Nov 2025' },
  { metric: 'Notable Initiatives', value: 13, source: 'Khaleej Times Nov 2025' },
]

// Core Values
const coreValues = [
  'Respect and humility',
  'Ambition and perseverance',
  'Belonging and responsibility',
  'Cohesion and coexistence',
  'Generosity and humanity',
]

// Core Elements
const coreElements = [
  'Islamic values and ethics',
  'Arabic language and Emirati dialect',
  'The Union and homeland',
  'Heritage, customs, and traditions',
  'History, geography, and collective memory',
  'The Emirati family',
]

// Housing Support Metrics
const housingSupportMetrics = [
  { metric: 'Citizen Homeownership 2025', value: 91, unit: '%', source: 'Gulf Pulse Jan 2026' },
  { metric: 'Housing Decisions 2025', value: 3567, unit: '', source: 'Gulf Pulse Jan 2026' },
  { metric: 'Total Housing Support Value', value: 2.546, unit: 'AED B', source: 'Gulf Pulse Jan 2026' },
  { metric: 'Al Habtoor Housing Plan', value: 270, unit: 'Dh M', source: 'Gulf News Feb 2026' },
  { metric: 'Housing Plan Youth Coverage', value: 70, unit: '%', source: 'Gulf News Feb 2026' },
  { metric: 'Marriage Fund Usage', value: 5, unit: '%<', source: 'ResearchGate Jan 2026' },
]

// Key Individuals
const keyIndividuals = [
  { name: 'Hanan Alfardan', role: 'Founder, Al Ramsa Institute', domain: 'Language Preservation', source: 'Gulf News Nov 2025' },
  { name: 'Hessa Al Ghandi', role: 'Designer', domain: 'Fashion/Heritage', source: 'Gulf News Nov 2025' },
  { name: 'Rouda Alserkal (16)', role: 'Chess Grandmaster', domain: 'Sports', source: 'Gulf News Nov 2025' },
  { name: 'Saeed AlMheiri', role: 'Co-Founder, Arabeasy Gaming', domain: 'Gaming/Heritage', source: 'Gulf News Nov 2025' },
]

// Key Organizations
const keyOrganizations = [
  { name: 'Al Ramsa Institute', type: 'Educational', domain: 'Language Preservation' },
  { name: 'Arabeasy Gaming', type: 'Startup', domain: 'Gaming' },
  { name: 'Startup Emirates', type: 'Government Initiative', domain: 'Employment' },
  { name: 'National Youth Agenda 2031', type: 'Government Program', domain: 'Youth Development' },
  { name: 'Emirati National Identity Strategy', type: 'Government Program', domain: 'Identity' },
  { name: 'Nafis', type: 'Government Program', domain: 'Emiratization Support' },
  { name: 'Al Ghurair Foundation', type: 'Foundation', domain: 'Skills' },
  { name: 'Massar Al Ghurair', type: 'AI Platform', domain: 'Skills-to-employment' },
]

// Gen Alpha Brand Collaborations
const brandCollaborations = [
  { collaboration: 'Prada x Minecraft', type: 'Gaming rewards', platform: 'In-game/real-world' },
  { collaboration: 'Moncler x Pokemon 2025', type: 'Fashion/gaming', platform: 'GCC/Asia strategic hit' },
  { collaboration: 'Balenciaga x Fortnite', type: 'Fashion/gaming', platform: 'Fall 2024 capsule' },
  { collaboration: 'Mango Teen x Roblox', type: 'Fashion/gaming', platform: 'Digital try-on mall' },
  { collaboration: 'Harvey Nichols UAE', type: 'Luxury retail', platform: 'Family styling lounge' },
  { collaboration: 'Tiffany & Co.', type: 'Luxury', platform: 'Entry-level silver collection' },
  { collaboration: 'Gucci Kids', type: 'Fashion', platform: 'Mini-me collections' },
  { collaboration: 'Dior Kids', type: 'Fashion', platform: 'Mini-me collections' },
]

// Source Credibility Matrix
const sourceCredibility = [
  { source: 'YCharts', tier: 1, type: 'Financial Data', reliability: 'Very High' },
  { source: 'FRED', tier: 1, type: 'Government Statistics', reliability: 'Very High' },
  { source: 'WAM', tier: 0, type: 'Government News', reliability: 'Very High' },
  { source: 'Oliver Wyman', tier: 1, type: 'Consulting', reliability: 'High' },
  { source: 'ME Briefing', tier: 1, type: 'Legal/Compliance', reliability: 'High' },
  { source: 'Deloitte', tier: 2, type: 'Consulting', reliability: 'High' },
  { source: 'EDS Arabic', tier: 2, type: 'Regional Research', reliability: 'Medium-High' },
  { source: 'Khaleej Times', tier: 2, type: 'Major Newspaper', reliability: 'High' },
  { source: 'Gulf News', tier: 2, type: 'Major Newspaper', reliability: 'High' },
  { source: 'LinkedIn', tier: 3, type: 'Labor Market Data', reliability: 'Medium-High' },
  { source: 'Mastercard', tier: 3, type: 'Corporate Research', reliability: 'Medium-High' },
  { source: 'Al Ghurair Foundation', tier: 3, type: 'Industry Report', reliability: 'High' },
]

// Sentiment Analysis Data
const sentimentTopics = [
  { topic: 'Youth Employment', sentiment: 'Positive', trend: 'Improving', confidence: 'High' },
  { topic: 'Emiratization', sentiment: 'Positive', trend: 'Accelerating', confidence: 'High' },
  { topic: 'Digital Government', sentiment: 'Very Positive', trend: 'Rapid growth', confidence: 'High' },
  { topic: 'Mental Health Awareness', sentiment: 'Positive', trend: 'Normalizing', confidence: 'Medium-High' },
  { topic: 'Gen Z Identity', sentiment: 'Neutral-Positive', trend: 'Evolving', confidence: 'Medium' },
  { topic: 'Traditional vs Modern', sentiment: 'Balanced', trend: 'Harmonizing', confidence: 'Medium' },
  { topic: 'Housing Support', sentiment: 'Very Positive', trend: 'Strong support', confidence: 'High' },
  { topic: 'Gig Economy', sentiment: 'Positive', trend: 'Growing', confidence: 'Medium' },
]

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

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

const cardHover = {
  whileHover: { scale: 1.02, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 },
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function GenerationalTrendsPage() {
  // Generation comparison data
  const generationComparison = [
    { generation: 'Gen Z (1997-2012)', adoption: 92, color: CHART_COLORS.gold },
    { generation: 'Millennials', adoption: 88, color: CHART_COLORS.navy },
    { generation: 'Gen X', adoption: 65, color: CHART_COLORS.emerald },
    { generation: 'Boomers', adoption: 42, color: CHART_COLORS.platinum },
  ]

  // Sentiment distribution
  const sentimentDistribution = [
    { name: 'Positive', value: 64, color: CHART_COLORS.emerald },
    { name: 'Concern', value: 20, color: CHART_COLORS.rose },
    { name: 'Neutral', value: 16, color: CHART_COLORS.platinum },
  ]

  // Tier distribution
  const tierDistribution = [
    { tier: 'Tier 0', count: 5, color: CHART_COLORS.emerald },
    { tier: 'Tier 1', count: 8, color: CHART_COLORS.navy },
    { tier: 'Tier 2', count: 12, color: CHART_COLORS.gold },
    { tier: 'Tier 3', count: 10, color: CHART_COLORS.platinum },
  ]

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInUp}
      className="space-y-8 p-8"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">GENERATIONAL INSIGHTS</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Generational Shift Trends</h1>
          <p className="mt-2 text-slate-400">
            Gen Z, Millennials, and Gen Alpha dynamics in the UAE - values, employment, identity, and digital behaviors
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Users className="h-4 w-4" />
            View Demographics
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Sparkles className="h-4 w-4" />
            Analyze Generations
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <motion.div
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Youth Unemployment 2025"
            value={6.45}
            previousValue={9.99}
            unit="%"
            icon={<TrendingDown className="h-6 w-6" />}
            gradient="emerald"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Gen Z Snapchat Daily"
            value={90}
            unit="%+"
            icon={<Smartphone className="h-6 w-6" />}
            gradient="gold"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="UAE Wellbeing Score"
            value={70}
            previousValue={62}
            unit="%"
            icon={<Heart className="h-6 w-6" />}
            gradient="rose"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Gen Alpha Brand Attentive"
            value={87}
            unit="%"
            icon={<Sparkles className="h-6 w-6" />}
            gradient="indigo"
          />
        </motion.div>
      </motion.div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="employment">Employment</TabsTrigger>
          <TabsTrigger value="consumers">Consumers</TabsTrigger>
          <TabsTrigger value="digital">Digital</TabsTrigger>
          <TabsTrigger value="wellbeing">Wellbeing</TabsTrigger>
          <TabsTrigger value="identity">Identity</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Generational Shift Overview" description="Comprehensive view of generational dynamics in the UAE">
            <div className="space-y-6">
              {/* Youth Unemployment Historical Trend */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Youth Unemployment Historical Trend</CardTitle>
                  <CardDescription>UAE youth unemployment rate 1995-2025 (declining from 13.48% peak in 2020)</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={youthUnemploymentHistorical}
                    xAxisKey="year"
                    areas={[
                      { dataKey: 'rate', name: 'Youth Unemployment Rate %', color: CHART_COLORS.navy },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Generational Adoption */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Generational Adoption Rates</CardTitle>
                    <CardDescription>Digital adoption and engagement by generation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={generationComparison}
                      xAxisKey="generation"
                      bars={[
                        { dataKey: 'adoption', name: 'Adoption Rate %', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                {/* Sentiment Distribution */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment across generational topics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentDistribution}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Key Employment KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Employment KPIs</CardTitle>
                  <CardDescription>Critical workforce and employment indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {employmentKPIs.map((kpi, idx) => (
                        <motion.div
                          key={idx}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg bg-slate-800/50 p-4 text-center"
                        >
                          <p className="text-xs text-slate-400">{kpi.kpi}</p>
                          <p className="mt-2 text-xl font-bold text-gold">{kpi.value}</p>
                          <p className="text-xs text-emerald-400 mt-1">{kpi.trend}</p>
                          <Badge variant="outline" className="mt-2 text-xs">
                            {kpi.criticality}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Employment Tab */}
        <TabsContent value="employment" className="space-y-6">
          <GlassPanel title="Youth Employment & Economic Trends" description="Employment patterns, Emiratization progress, and workforce dynamics">
            <div className="space-y-6">
              {/* Youth Unemployment Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Youth Unemployment Rate Timeline</CardTitle>
                  <CardDescription>Historical trend from 1995 to 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={youthUnemploymentHistorical}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'rate', name: 'Rate %', color: CHART_COLORS.navy },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Emiratization Progress */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emiratization Progress</CardTitle>
                    <CardDescription>Private sector nationalization targets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {emiratizationMetrics.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm font-medium text-slate-200">{item.metric}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-emerald">{item.value.toLocaleString()}</span>
                            <span className="text-xs text-slate-400">{item.unit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Gig Economy */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Gig Economy & Entrepreneurship</CardTitle>
                    <CardDescription>Freelance and startup ecosystem</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {gigEconomyMetrics.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm font-medium text-slate-200">{item.metric}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gold">{item.value.toLocaleString()}</span>
                            <span className="text-xs text-slate-400">{item.unit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Freelance Permit Types */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Freelance Visa & Permit Options</CardTitle>
                  <CardDescription>Available permit types and durations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {permitTypes.map((permit, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/30 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="h-4 w-4 text-gold" />
                          <span className="font-medium text-slate-200">{permit.type}</span>
                        </div>
                        <p className="text-xs text-slate-400">Duration: {permit.duration}</p>
                        <p className="text-xs text-slate-500 mt-1">{permit.authority}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education & Skills */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Education & Future Skills</CardTitle>
                  <CardDescription>Skills development and educational metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {educationSkillsMetrics.map((item, idx) => (
                      <div key={idx} className="rounded-lg bg-slate-800/50 p-4 text-center">
                        <GraduationCap className="mx-auto h-6 w-6 text-navy mb-2" />
                        <p className="text-xs text-slate-400">{item.metric}</p>
                        <p className="text-xl font-bold text-navy">{item.value}</p>
                        <span className="text-xs text-slate-400">{item.unit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Consumers Tab */}
        <TabsContent value="consumers" className="space-y-6">
          <GlassPanel title="Generational Consumer Behavior" description="Gen Z, Millennials, and Gen Alpha consumer metrics and brand preferences">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Gen Z Consumer Metrics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-gold" />
                      Gen Z Consumer Behavior
                    </CardTitle>
                    <CardDescription>Key metrics from Deloitte, EDS Arabic, Mastercard</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {genZConsumerMetrics.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.metric}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-gold">{item.value}</span>
                              <span className="text-xs text-slate-400">{item.unit}</span>
                            </div>
                          </div>
                          <Progress value={item.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Gen Alpha Metrics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Baby className="h-5 w-5 text-platinum" />
                      Gen Alpha (2013-2025) Metrics
                    </CardTitle>
                    <CardDescription>Luxury brand and consumer behavior</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {genAlphaMetrics.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.metric}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-platinum">{item.value}</span>
                              <span className="text-xs text-slate-400">{item.unit}</span>
                            </div>
                          </div>
                          <Progress value={item.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Gen Alpha Brand Collaborations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Gen Alpha Brand Collaborations</CardTitle>
                  <CardDescription>Luxury brands targeting young consumers through gaming and digital platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {brandCollaborations.map((item, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg border border-slate-700 bg-slate-800/30 p-4"
                        >
                          <Gamepad2 className="h-6 w-6 text-purple mb-2" />
                          <p className="font-medium text-slate-200">{item.collaboration}</p>
                          <p className="text-xs text-slate-400 mt-1">{item.type}</p>
                          <Badge variant="outline" className="mt-2 text-xs">{item.platform}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Housing Support */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Housing & Economic Support</CardTitle>
                  <CardDescription>Government housing initiatives for citizens</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {housingSupportMetrics.map((item, idx) => (
                      <div key={idx} className="rounded-lg bg-slate-800/50 p-4 text-center">
                        <Home className="mx-auto h-6 w-6 text-navy mb-2" />
                        <p className="text-xs text-slate-400">{item.metric}</p>
                        <p className="text-xl font-bold text-navy">{item.value}</p>
                        <span className="text-xs text-slate-400">{item.unit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Digital Tab */}
        <TabsContent value="digital" className="space-y-6">
          <GlassPanel title="Digital Natives & Government Services" description="Technology adoption, AI usage, and digital government initiatives">
            <div className="space-y-6">
              {/* Digital Native Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Digital Native Metrics</CardTitle>
                  <CardDescription>Gen Z technology adoption and AI usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {digitalNativeMetrics.map((item, idx) => (
                      <div key={idx} className="rounded-lg bg-slate-800/50 p-4 text-center">
                        <Smartphone className="mx-auto h-6 w-6 text-navy mb-2" />
                        <p className="text-xs text-slate-400">{item.metric}</p>
                        <p className="text-xl font-bold text-navy">{item.value}</p>
                        <span className="text-xs text-slate-400">{item.unit}</span>
                        {item.note && <p className="text-xs text-emerald-400 mt-1">{item.note}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Digital Strategy Visualization */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Abu Dhabi Digital Strategy 2025-2027</CardTitle>
                  <CardDescription>AI-government transformation targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between rounded-lg bg-navy/20 p-4">
                      <div className="flex items-center gap-3">
                        <Code className="h-8 w-8 text-navy" />
                        <div>
                          <p className="font-medium text-slate-200">Abu Dhabi Digital Strategy Budget</p>
                          <p className="text-xs text-slate-400">2025-2027 Investment</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-navy">AED 13B</p>
                        <p className="text-xs text-emerald-400">Committed</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-purple/20 p-4">
                      <div className="flex items-center gap-3">
                        <Zap className="h-8 w-8 text-purple" />
                        <div>
                          <p className="font-medium text-slate-200">Agentic AI Government Services</p>
                          <p className="text-xs text-slate-400">Target by 2027</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-purple">50%</p>
                        <p className="text-xs text-emerald-400">of services</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* National Youth Agenda Digital Goals */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">National Youth Agenda 2031 Digital Targets</CardTitle>
                  <CardDescription>Strategic goals for youth in digital advancement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald" />
                        <span className="text-sm text-slate-200">Master advanced technologies and future skills</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald" />
                        <span className="text-sm text-slate-200">Double projects for youth in future sectors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald" />
                        <span className="text-sm text-slate-200">Make UAE easiest country for youth to access services</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-gold" />
                        <span className="text-sm text-slate-200">100+ young Emiratis for global forums</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-gold" />
                        <span className="text-sm text-slate-200">100% suitable career pathways</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-gold" />
                        <span className="text-sm text-slate-200">Top 10 globally in youth quality of life</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Wellbeing Tab */}
        <TabsContent value="wellbeing" className="space-y-6">
          <GlassPanel title="Mental Health & Wellbeing" description="UAE mental health landscape and wellness indicators">
            <div className="space-y-6">
              {/* Mental Health Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Mental Health & Wellbeing Metrics</CardTitle>
                  <CardDescription>Source: Oliver Wyman Sep 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {mentalHealthMetrics.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-lg bg-slate-800/50 p-4 text-center"
                      >
                        <HeartPulse className="mx-auto h-6 w-6 text-rose mb-2" />
                        <p className="text-xs text-slate-400">{item.metric}</p>
                        <p className="text-xl font-bold text-rose">{item.value}</p>
                        <span className="text-xs text-slate-400">{item.unit}</span>
                        {item.change && <p className="text-xs text-emerald-400 mt-1">{item.change}</p>}
                        {item.note && <p className="text-xs text-slate-400 mt-1">{item.note}</p>}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Wellbeing Score Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Wellbeing Score Improvement</CardTitle>
                  <CardDescription>Year-over-year improvement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-8 py-8">
                    <div className="text-center">
                      <p className="text-sm text-slate-400">2024</p>
                      <p className="text-4xl font-bold text-platinum">62%</p>
                    </div>
                    <TrendingUp className="h-12 w-12 text-emerald" />
                    <div className="text-center">
                      <p className="text-sm text-slate-400">2025</p>
                      <p className="text-4xl font-bold text-emerald">70%</p>
                    </div>
                    <div className="text-center">
                      <Badge variant="success" className="text-lg px-4 py-2">+8pp</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mental Health Workforce */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Mental Health Workforce Comparison</CardTitle>
                  <CardDescription>Psychiatrists per 100,000 population</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-emerald-500/10 p-6 text-center border border-emerald-500/30">
                      <Brain className="mx-auto h-8 w-8 text-emerald mb-3" />
                      <p className="text-lg font-medium text-slate-200">OECD Average</p>
                      <p className="text-3xl font-bold text-emerald">~15</p>
                      <p className="text-xs text-slate-400">per 100,000</p>
                    </div>
                    <div className="rounded-lg bg-rose-500/10 p-6 text-center border border-rose-500/30">
                      <AlertCircle className="mx-auto h-8 w-8 text-rose mb-3" />
                      <p className="text-lg font-medium text-slate-200">Most GCC Countries</p>
                      <p className="text-3xl font-bold text-rose">&lt;3</p>
                      <p className="text-xs text-slate-400">per 100,000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gen Z/Millennial Financial Insecurity */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Financial Insecurity Trends</CardTitle>
                  <CardDescription>Source: Deloitte Jun 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200">Gen Z Financial Insecurity</span>
                        <span className="text-lg font-bold text-rose">48%</span>
                      </div>
                      <Progress value={48} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200">Millennial Financial Insecurity</span>
                        <span className="text-lg font-bold text-rose">46%</span>
                      </div>
                      <Progress value={46} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Identity Tab */}
        <TabsContent value="identity" className="space-y-6">
          <GlassPanel title="Emirati Identity & National Strategy" description="National Identity Strategy launched November 2025">
            <div className="space-y-6">
              {/* National Identity Strategy KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emirati National Identity Strategy</CardTitle>
                  <CardDescription>Launched November 2025 - Structure overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {nationalIdentityData.map((item, idx) => (
                      <div key={idx} className="rounded-lg bg-slate-800/50 p-4 text-center">
                        <Flag className="mx-auto h-6 w-6 text-gold mb-2" />
                        <p className="text-xs text-slate-400">{item.metric}</p>
                        <p className="text-2xl font-bold text-gold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Core Values */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Heart className="h-5 w-5 text-emerald" />
                      5 Core Values
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {coreValues.map((value, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 rounded-lg bg-emerald-500/10 p-3"
                        >
                          <CheckCircle className="h-4 w-4 text-emerald" />
                          <span className="text-sm text-slate-200">{value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Core Elements */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5 text-navy" />
                      6 Core Elements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {coreElements.map((element, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 rounded-lg bg-navy-500/10 p-3"
                        >
                          <Award className="h-4 w-4 text-navy" />
                          <span className="text-sm text-slate-200">{element}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Gen Z Parenting */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Gen Z Parenting Differences</CardTitle>
                  <CardDescription>Research over tradition, gentle parenting, digital guidance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Lightbulb className="mx-auto h-6 w-6 text-gold mb-2" />
                      <p className="text-xs text-slate-400">Research over tradition</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Heart className="mx-auto h-6 w-6 text-rose mb-2" />
                      <p className="text-xs text-slate-400">Gentle parenting</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Smartphone className="mx-auto h-6 w-6 text-navy mb-2" />
                      <p className="text-xs text-slate-400">TikTok for advice</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Users className="mx-auto h-6 w-6 text-emerald mb-2" />
                      <p className="text-xs text-slate-400">Quality over quantity</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Entity Registry" description="Key individuals, organizations, and geographic entities">
            <div className="space-y-6">
              {/* Key Individuals */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Crown className="h-5 w-5 text-gold" />
                    Key Individuals
                  </CardTitle>
                  <CardDescription>Notable figures in generational trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {keyIndividuals.map((person, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                              <UserCheck className="h-5 w-5 text-gold" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-200">{person.name}</p>
                              <p className="text-xs text-slate-400">{person.role}</p>
                            </div>
                          </div>
                          <Badge variant="outline">{person.domain}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Key Organizations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-navy" />
                    Key Organizations
                  </CardTitle>
                  <CardDescription>Government programs, initiatives, and foundations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {keyOrganizations.map((org, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          className="rounded-lg border border-slate-700 bg-slate-800/30 p-4"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Building className="h-4 w-4 text-navy" />
                            <span className="font-medium text-slate-200">{org.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">{org.type}</Badge>
                            <Badge variant="secondary" className="text-xs">{org.domain}</Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Source Credibility Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
                  <CardDescription>Data source tier classification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sourceCredibility.map((source, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={source.tier === 0 ? 'success' : source.tier === 1 ? 'default' : 'secondary'}
                            className="w-12 justify-center"
                          >
                            T{source.tier}
                          </Badge>
                          <div>
                            <p className="font-medium text-slate-200">{source.source}</p>
                            <p className="text-xs text-slate-400">{source.type}</p>
                          </div>
                        </div>
                        <Badge variant="outline">{source.reliability}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment Analysis Summary */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Analysis Summary</CardTitle>
                  <CardDescription>Topic-level sentiment across generational themes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sentimentTopics.map((topic, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">{topic.topic}</span>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={
                              topic.sentiment.includes('Very') ? 'success' :
                              topic.sentiment.includes('Positive') ? 'default' :
                              topic.sentiment.includes('Neutral') ? 'secondary' : 'warning'
                            }
                          >
                            {topic.sentiment}
                          </Badge>
                          <Badge variant="outline" className="text-xs">{topic.confidence}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
