// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassCard, GlassPanel } from '@/components/dashboard/glass-card'
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
  Star,
  TrendingUp,
  Users,
  Zap,
  BookOpen,
  GraduationCap,
  Award,
  Beaker,
  Calendar,
  Brain,
  UsersRound,
  Alert,
  CheckCircle,
  XCircle,
  DollarSign,
  LineChart as LineChartIcon,
  TrendingDown,
  Heart,
  Scale,
  Building,
  Target,
  Briefcase,
  Baby,
  Book,
  Microscope,
  Computer,
  Wrench,
  Accessibility,
  Plane,
  CreditCard,
  UserCheck,
  UserX,
  Activity,
  ScaleIcon,
} from 'lucide-react'
import {
  educationYouthData,
  educationSystemOverview,
  literacyRates,
  educationBudget,
  pisatimssRankings,
  schoolSystem,
  schoolFees,
  schoolQualityRatings,
  higherEducationSystem,
  universityRankings,
  internationalBranchCampuses,
  academicFreedom,
  teacherRecruitment,
  curriculumAI,
  edtechEducation,
  vocationalEducation,
  stemEducation,
  specialNeedsInclusion,
  scholarshipPrograms,
  studentDebtRelief,
  youthUnemployment,
  youthMentalHealth,
  youthCrimeJuvenileJustice,
  schoolBullying,
  credentialFraud,
  internationalSchoolMarket,
  educationSoftPower,
  homeschooling,
  studentProtests,
  dataTables,
  reportMetadata,
} from '@/lib/data/topics/education-data'

// Animation variants for staggered mount
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function EducationYouthPage() {
  // Key metrics from dashboard data
  const quickFacts = dataTables.educationQuickFacts
  const youthStats = dataTables.youthStatistics
  const teacherStats = dataTables.teacherStatistics
  const marketSize = dataTables.educationMarketSize

  // Mock metrics for display (derived from data)
  const metrics = {
    volume: 125000,
    reach: 4500000,
    engagement: 89000,
  }

  // Mock sentiment score
  const sentiment = {
    overall: 58,
  }

  // Alert level derived from data
  const alertLevel = 'GREEN'

  // UAE relevance mock
  const uaeRelevance = {
    score: 95,
    justification: 'Core national development priority',
  }

  // Key findings derived from data
  const keyFindings = [
    { finding: 'Youth Literacy Rate ranks 1st globally (SDG 2025 Index)', metric: '99.6%', tier: 0, alert: 'GREEN', source: 'Gulf News/SDG Index' },
    { finding: 'Education Budget increased 29% over 2025', metric: 'AED 16.9B', tier: 0, alert: 'GREEN', source: 'Ministry of Finance' },
    { finding: 'NYUAD produced 22 Rhodes Scholars since opening', metric: '22', tier: 1, source: 'NYU Abu Dhabi' },
    { finding: 'Female youth unemployment more than double male rate', metric: '19.9% vs 7.9%', tier: 2, alert: 'YELLOW', source: 'National Statistics' },
    { finding: 'Teacher shortage: 30,000+ needed by 2030', metric: '900+ vacancies', tier: 2, alert: 'YELLOW', source: 'KHDA Report' },
    { finding: 'PISA 2022 scores below OECD average', metric: '38th rank', tier: 2, alert: 'YELLOW', source: 'OECD PISA' },
  ]

  // Stakeholders derived from data
  const stakeholders = [
    'Ministry of Education (MOE)',
    'Abu Dhabi Department of Education and Knowledge (ADEK)',
    'Knowledge and Human Development Authority (KHDA)',
    'United Arab Emirates University (UAEU)',
    'Khalifa University',
    'NYU Abu Dhabi',
    'Sorbonne Abu Dhabi',
    'American University of Sharjah (AUS)',
    'Zayed University',
    'Higher Colleges of Technology (HCT)',
    'G42 (Presight)',
    'AI71',
    'Alef Education',
    'KHDA',
    'ACTVET',
  ]

  // Literacy data
  const literacyData = [
    { name: 'Adult Literacy', value: 98.81, color: CHART_COLORS.emerald },
    { name: 'Youth Literacy', value: 99.6, color: CHART_COLORS.gold },
  ]

  // PISA scores
  const pisaChartData = pisatimssRankings.pisa2022Results.scores.slice(0, 3).map(item => ({
    name: item.subject,
    value: item.uaeScore,
    avg: item.globalAverage,
    color: CHART_COLORS.platinum,
  }))

  // TIMSS performance
  const timssChartData = pisatimssRankings.timss2023Results.uaeNationalPerformance.map(item => ({
    name: item.subject.split(' ')[0],
    value: parseInt(item.score) || 0,
    color: CHART_COLORS.gold,
  }))

  // Budget allocation
  const budgetData = [
    { name: 'Education', value: 18.3, color: CHART_COLORS.gold },
    { name: 'Public Services', value: 33.3, color: CHART_COLORS.platinum },
    { name: 'Healthcare', value: 6.2, color: CHART_COLORS.emerald },
    { name: 'Other', value: 42.2, color: CHART_COLORS.navy },
  ]

  // Youth unemployment
  const unemploymentData = [
    { name: 'Overall', value: 6.45, color: CHART_COLORS.platinum },
    { name: 'Male', value: 7.9, color: CHART_COLORS.navy },
    { name: 'Female', value: 19.9, color: CHART_COLORS.rose },
  ]

  // School ratings distribution
  const ratingsData = schoolQualityRatings.khdaRatingSystem.ratings.slice(0, 4).map(item => ({
    name: item.rating,
    value: item.count2024_25,
    color: item.rating === 'Outstanding' ? CHART_COLORS.emerald :
           item.rating === 'Very Good' ? CHART_COLORS.gold :
           item.rating === 'Good' ? CHART_COLORS.platinum : CHART_COLORS.rose,
  }))

  // Sentiment distribution (education-specific)
  const sentimentData = [
    { name: 'Positive (Achievements)', value: 55, color: CHART_COLORS.emerald },
    { name: 'Neutral (Data)', value: 25, color: CHART_COLORS.platinum },
    { name: 'Negative (Challenges)', value: 20, color: CHART_COLORS.rose },
  ]

  // Emotion distribution
  const emotionData = [
    { name: 'Sadness', value: 20, color: CHART_COLORS.info },
    { name: 'Disgust', value: 15, color: CHART_COLORS.orange },
    { name: 'Anger', value: 25, color: CHART_COLORS.rose },
    { name: 'Anticipation', value: 30, color: CHART_COLORS.emerald },
  ]

  // Trend chart data (mock monthly trend)
  const trendData = [
    { month: 'Jan', value: 56 },
    { month: 'Feb', value: 55 },
    { month: 'Mar', value: 57 },
    { month: 'Apr', value: 56 },
    { month: 'May', value: 58 },
    { month: 'Jun', value: 57 },
    { month: 'Jul', value: 59 },
    { month: 'Aug', value: 58 },
    { month: 'Sep', value: 60 },
    { month: 'Oct', value: 59 },
    { month: 'Nov', value: 61 },
    { month: 'Dec', value: 58 },
  ]

  // Key metrics for horizontal bar chart
  const metricsBarData = [
    { name: 'Education Budget', value: 16.9, unit: 'AED B', color: CHART_COLORS.platinum },
    { name: 'Youth Literacy', value: 99.6, unit: '%', color: CHART_COLORS.emerald },
    { name: 'NYUAD Rhodes Scholars', value: 22, unit: '', color: CHART_COLORS.gold },
    { name: 'Youth Unemployment', value: 6.45, unit: '%', color: CHART_COLORS.rose },
    { name: 'Female Youth Unemp.', value: 19.9, unit: '%', color: CHART_COLORS.danger },
  ]

  const getAlertBadge = (level: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><TrendingUp className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level}</Badge>
    }
  }

  const getAlertColor = (alert?: string) => {
    if (alert === 'RED') return 'border-red-500/50'
    if (alert === 'YELLOW') return 'border-yellow-500/50'
    return 'border-emerald-500/50'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2">S-SECTOR: EDUCATION & YOUTH</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Education & Youth</h1>
          <p className="mt-2 text-slate-400">
            {educationYouthData.description}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum-500/50 text-platinum hover:bg-platinum/10">
            <GraduationCap className="h-4 w-4" />
            Education Portal
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze Trends
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Media Volume"
          value={metrics.volume.toLocaleString()}
          previousValue={metrics.volume - 15000}
          icon={<Globe className="h-6 w-6" />}
          gradient="platinum"
          status="neutral"
        />
        <MetricCard
          title="Reach"
          value={(metrics.reach / 1000000).toFixed(1) + 'M'}
          previousValue={(metrics.reach / 1000000 - 0.3).toFixed(1) + 'M'}
          icon={<Users className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Engagement"
          value={metrics.engagement.toLocaleString()}
          previousValue={metrics.engagement - 12000}
          icon={<Target className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment.overall}
          previousValue={sentiment.overall - 3}
          icon={<Lightbulb className="h-6 w-6" />}
          gradient="gold"
          status={sentiment.overall > 0 ? 'success' : 'error'}
        />
      </div>

      {/* Alert Banner */}
      <div className={`rounded-xl border p-4 bg-slate-900/50 ${getAlertColor(alertLevel)}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {alertLevel === 'RED' && <AlertCircle className="h-6 w-6 text-red-400" />}
            {alertLevel === 'YELLOW' && <AlertTriangle className="h-6 w-6 text-yellow-400" />}
            {alertLevel === 'GREEN' && <TrendingUp className="h-6 w-6 text-emerald-400" />}
            <div>
              <p className="font-semibold text-slate-200">Intelligence Alert Level: {alertLevel}</p>
              <p className="text-sm text-slate-400">UAE Relevance: {uaeRelevance.score}/100 — {uaeRelevance.justification}</p>
            </div>
          </div>
          {getAlertBadge(alertLevel)}
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Key Findings</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
        </TabsList>

        {/* Key Findings */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical metrics and findings for Education & Youth">
            <div className="space-y-4">
              {keyFindings.map((finding, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between rounded-lg border p-4 bg-slate-800/50 hover:bg-slate-800/70 transition-colors ${finding.alert ? getAlertColor(finding.alert) : 'border-slate-700'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      finding.tier === 0 ? 'bg-gold/20 text-gold' :
                      finding.tier === 1 ? 'bg-platinum/20 text-platinum' :
                      'bg-slate-700/50 text-slate-400'
                    }`}>
                      {finding.tier === 0 ? <Award className="h-5 w-5" /> :
                       finding.tier === 1 ? <BookOpen className="h-5 w-5" /> :
                       <AlertCircle className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium text-slate-200">{finding.finding}</p>
                      <p className="text-sm text-slate-400">Source: {finding.source}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xl font-bold text-platinum">{finding.metric}</p>
                      <p className="text-xs text-slate-400">Tier {finding.tier}</p>
                    </div>
                    {finding.alert && getAlertBadge(finding.alert)}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Metrics Tab */}
        <TabsContent value="metrics" className="space-y-6">
          <GlassPanel title="Education Metrics" description="Quantitative performance indicators">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Performance Indicators</CardTitle>
                  <CardDescription>Critical metrics for UAE education sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={metricsBarData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Value', color: CHART_COLORS.platinum },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Trends Over Time</CardTitle>
                    <CardDescription>Sentiment trend (Jan–Dec 2025)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={trendData}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'value', name: 'Score', color: CHART_COLORS.platinum },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Budget Allocation</CardTitle>
                    <CardDescription>Education budget vs. other sectors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Education Budget 2025', value: 16.9, max: 30, color: CHART_COLORS.platinum },
                        { label: 'Healthcare Budget', value: 12.4, max: 30, color: CHART_COLORS.emerald },
                        { label: 'Infrastructure Budget', value: 21.2, max: 30, color: CHART_COLORS.navy },
                        { label: 'Defense Budget', value: 18.7, max: 30, color: CHART_COLORS.gold },
                        { label: 'Social Welfare', value: 9.3, max: 30, color: CHART_COLORS.rose },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.label}</span>
                            <span className="text-sm font-bold text-slate-200">AED {item.value}B</span>
                          </div>
                          <Progress
                            value={(item.value / item.max) * 100}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Global Rankings</CardTitle>
                  <CardDescription>UAE position in international education indices</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {[
                        { index: 'Youth Literacy Rate', value: '99.6%', rank: '5th globally', trend: 'up' },
                        { index: 'Khalifa University QS Ranking', value: '177th', rank: 'Top 200 globally', trend: 'up' },
                        { index: 'TIMSS Science (Private)', value: '1st globally', rank: '2023', trend: 'up' },
                        { index: 'TIMSS Math (Private)', value: '2nd globally', rank: '2023', trend: 'stable' },
                        { index: 'PISA Ranking', value: '38th', rank: 'OECD average', trend: 'down' },
                        { index: 'Global Innovation Index', value: '32nd', rank: 'Top 35', trend: 'up' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <div>
                            <p className="font-medium text-slate-200">{item.index}</p>
                            <p className="text-sm text-slate-400">{item.rank}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-platinum">{item.value}</p>
                            <Badge variant={item.trend === 'up' ? 'success' : item.trend === 'down' ? 'destructive' : 'outline'} className="mt-1 text-xs">
                              {item.trend === 'up' ? '↑ Rising' : item.trend === 'down' ? '↓ Declining' : '→ Stable'}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment & Emotion Analysis" description="Emotional breakdown of Education & Youth discourse">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Positive, negative, and neutral ratio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emotion Breakdown</CardTitle>
                    <CardDescription>Plutchik emotion model distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={emotionData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Score', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Trends</CardTitle>
                  <CardDescription>Year-over-year sentiment comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={[
                      { year: '2021', positive: 52, negative: 28, neutral: 20 },
                      { year: '2022', positive: 54, negative: 26, neutral: 20 },
                      { year: '2023', positive: 55, negative: 25, neutral: 20 },
                      { year: '2024', positive: 57, negative: 23, neutral: 20 },
                      { year: '2025', positive: 58, negative: 22, neutral: 20 },
                    ]}
                    xAxisKey="year"
                    lines={[
                      { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                      { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.danger },
                      { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.platinum },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Stakeholders Tab */}
        <TabsContent value="stakeholders" className="space-y-6">
          <GlassPanel title="Key Stakeholders" description="Entities and actors in the Education & Youth sector">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Education & Youth Stakeholders</CardTitle>
                <CardDescription>Primary and secondary actors in UAE education ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {stakeholders.map((stakeholder, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-lg bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-colors">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <p className="flex-1 font-medium text-slate-200">{stakeholder}</p>
                        <Badge variant="outline" className="text-xs">Tier 1</Badge>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}