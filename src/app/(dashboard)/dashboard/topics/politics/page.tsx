// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
  Crown,
  Newspaper,
  User,
  Building,
  Vote,
  Scale,
  Landmark,
  Eye,
  DollarSign,
  UsersRound,
  BookOpen,
  Beaker,
  Calendar,
  Crosshair,
} from 'lucide-react'
import {
  politicsGovernanceData,
  federalGovernmentStructure,
  presidentialLeadership,
  federalNationalCouncil,
  fncElections2023,
  cabinetGovernance,
  humanRightsPoliticalPrisoners,
  freedomHouseScores,
  surveillanceState,
  uaeInfluenceOperations,
  visionFrameworks,
  womenInGovernment,
  pressFreedom,
  dashboardDataTables,
  ahmedMansoorCaseStudy,
  uae94MassTrial,
  alIslahMuslimBrotherhood,
  reportMetadata,
} from '@/lib/data/topics/politics-governance-data'

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

// Freedom score color helper
const getFreedomScoreColor = (score: number, max: number) => {
  const percentage = (score / max) * 100
  if (percentage < 30) return CHART_COLORS.rose
  if (percentage < 60) return CHART_COLORS.gold
  return CHART_COLORS.emerald
}

export default function PoliticsGovernancePage() {
  // Key metrics from dashboard data
  const keyMetrics = dashboardDataTables.uaeGovernmentKeyMetrics
  const freedomData = dashboardDataTables.freedomHouseScores2025
  const prisonerData = dashboardDataTables.humanRightsPrisonerCounts
  const surveillanceData = dashboardDataTables.surveillanceCapabilities
  const influenceData = dashboardDataTables.influenceOperationsSpending

  // Sentiment distribution data
  const sentimentData = [
    { name: 'Negative (Human Rights)', value: 65, color: CHART_COLORS.rose },
    { name: 'Neutral (Systemic)', value: 20, color: CHART_COLORS.platinum },
    { name: 'Positive (Official)', value: 15, color: CHART_COLORS.emerald },
  ]

  // Freedom scores for gauge/data
  const freedomChartData = freedomData.map(item => ({
    name: item.index,
    value: item.score,
    max: item.max,
    color: getFreedomScoreColor(item.score, item.max),
  }))

  // FNC turnout by emirate
  const turnoutChartData = fncElections2023.voterTurnoutByEmirate.map(item => ({
    name: item.emirate.split(' ')[0],
    value: item.turnoutPercent,
    color: CHART_COLORS.platinum,
  }))

  // Women participation data
  const womenChartData = [
    { name: 'FNC Seats', value: 50, color: CHART_COLORS.gold },
    { name: 'Cabinet', value: 21, color: CHART_COLORS.platinum },
    { name: 'Public Sector', value: 66, color: CHART_COLORS.navy },
  ]

  // Budget allocation data
  const budgetChartData = [
    { name: 'Social Development', value: 39, color: CHART_COLORS.gold },
    { name: 'Government Affairs', value: 35.7, color: CHART_COLORS.platinum },
    { name: 'Other', value: 25.3, color: CHART_COLORS.navy },
  ]

  // MBZ positions data
  const mbzPositionsData = presidentialLeadership.currentPositions.slice(0, 6).map((pos, i) => ({
    name: pos.position.replace(' of UAE', '').replace(' of Abu Dhabi', ''),
    value: 100 - (i * 10),
    color: Object.values(CHART_COLORS)[i % Object.values(CHART_COLORS).length],
  }))

  return (
    <motion.div
      className="space-y-8 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2">H-SECTOR</Badge>
          <h1 className="text-4xl font-extrabold gradient-text-platinum">Politics & Governance</h1>
          <p className="mt-2 text-platinum-400">
            {politicsGovernanceData.description}
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {reportMetadata?.reportCompiled || '2026-04-27'}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {reportMetadata?.factsDocumented || 500} facts
            </span>
            <span className="flex items-center gap-1">
              <Crosshair className="h-4 w-4" />
              {reportMetadata?.sourceURLs || 60} sources
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Landmark className="h-4 w-4" />
            Policy
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Media Volume"
          value={keyMetrics[0]?.value || '9.4M'}
          previousValue={9.2}
          icon={<Newspaper className="h-6 w-6" />}
          gradient="platinum"
          status="info"
        />
        <MetricCard
          title="Freedom Score"
          value={freedomData[0]?.score || 18}
          previousValue={18}
          icon={<Shield className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Political Prisoners"
          value={prisonerData[3]?.count || '26'}
          previousValue={24}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="error"
        />
        <MetricCard
          title="Surveillance Score"
          value="87"
          previousValue={82}
          icon={<Eye className="h-6 w-6" />}
          gradient="denim"
        />
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'GOV-1', name: 'Federal Structure' },
            { id: 'GOV-2', name: 'Presidential Leadership' },
            { id: 'GOV-3', name: 'FNC Elections' },
            { id: 'GOV-4', name: 'Human Rights' },
            { id: 'GOV-5', name: 'Surveillance' },
            { id: 'GOV-6', name: 'Influence Ops' },
          ].map((area) => (
            <Badge key={area.id} variant="outline" className="border-platinum/30 text-platinum">
              {area.id} - {area.name}
            </Badge>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="government">Government</TabsTrigger>
          <TabsTrigger value="elections">Elections</TabsTrigger>
          <TabsTrigger value="humanrights">Human Rights</TabsTrigger>
          <TabsTrigger value="surveillance">Surveillance</TabsTrigger>
          <TabsTrigger value="influence">Influence</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="Politics & Governance Overview"
            description="Key metrics and governance indicators"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Freedom Scores */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5 text-rose" />
                      Freedom House Scores 2025
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {freedomData.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-platinum-200">{item.index}</span>
                          <span className={`text-lg font-bold ${item.score < 30 ? 'text-rose' : item.score < 60 ? 'text-gold' : 'text-emerald'}`}>
                            {item.score}/{item.max}
                          </span>
                        </div>
                        <Progress
                          value={(item.score / item.max) * 100}
                          className="h-2"
                        />
                        <Badge variant="destructive" className="text-xs">{item.status}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Sentiment Distribution */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-platinum" />
                      Sentiment Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={200}
                      showLegend={true}
                      donut={true}
                    />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="text-center p-2 bg-rose/20 rounded-lg">
                        <p className="text-lg font-bold text-rose">65%</p>
                        <p className="text-xs text-platinum-500">Negative</p>
                      </div>
                      <div className="text-center p-2 bg-platinum/20 rounded-lg">
                        <p className="text-lg font-bold text-platinum">20%</p>
                        <p className="text-xs text-platinum-500">Neutral</p>
                      </div>
                      <div className="text-center p-2 bg-emerald/20 rounded-lg">
                        <p className="text-lg font-bold text-emerald">15%</p>
                        <p className="text-xs text-platinum-500">Positive</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Government Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-gold" />
                    UAE Government Key Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {keyMetrics.slice(0, 8).map((metric, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <p className="text-2xl font-bold text-gold">{metric.value}</p>
                        <p className="text-sm text-platinum-400 mt-1">{metric.metric}</p>
                        <p className="text-xs text-platinum-500">{metric.source}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Vision Frameworks */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-emerald" />
                    Vision Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-gradient-to-br from-gold/20 to-navy/20 rounded-lg border border-gold/30">
                      <h4 className="text-lg font-bold text-gold">We The UAE 2031</h4>
                      <p className="text-sm text-platinum-300 mt-1">10-year national plan</p>
                      <div className="mt-3 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-platinum-400">GDP Target</span>
                          <span className="font-bold text-gold">AED 3 Trillion</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Current</span>
                          <span className="font-bold text-platinum">AED 1.49T</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-platinum/20 to-emerald/20 rounded-lg border border-platinum/30">
                      <h4 className="text-lg font-bold text-platinum">Centennial 2071</h4>
                      <p className="text-sm text-platinum-300 mt-1">UAE 100th anniversary goal</p>
                      <div className="mt-3 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Goal</span>
                          <span className="font-bold text-platinum">Best nation globally</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Timeline</span>
                          <span className="font-bold text-platinum">2071</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Government Tab */}
        <TabsContent value="government" className="space-y-6">
          <GlassPanel
            title="Federal Government Structure"
            description="Constitutional federation with 7 emirates"
            badge="Core"
          >
            <div className="space-y-6">
              {/* Three Branches */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-platinum" />
                    Three Branches of Government
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {federalGovernmentStructure.threeBranches.map((branch, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                        <h4 className="font-bold text-platinum mb-2">{branch.branch}</h4>
                        <p className="text-sm text-gold mb-2">{branch.authority}</p>
                        <p className="text-xs text-platinum-400">{branch.keyBodies}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* MBZ Profile */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Crown className="h-5 w-5 text-gold" />
                    Presidential Leadership - Sheikh Mohamed bin Zayed Al Nahyan (MBZ)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <div className="space-y-3">
                        <div className="flex justify-between p-2 bg-slate-800/50 rounded-lg">
                          <span className="text-platinum-400">Full Name</span>
                          <span className="text-platinum-200 font-medium">{presidentialLeadership.personalDetails.fullName}</span>
                        </div>
                        <div className="flex justify-between p-2 bg-slate-800/50 rounded-lg">
                          <span className="text-platinum-400">Born</span>
                          <span className="text-platinum-200">{presidentialLeadership.personalDetails.born}</span>
                        </div>
                        <div className="flex justify-between p-2 bg-slate-800/50 rounded-lg">
                          <span className="text-platinum-400">Father</span>
                          <span className="text-platinum-200 text-right text-sm">{presidentialLeadership.personalDetails.father}</span>
                        </div>
                        <div className="flex justify-between p-2 bg-slate-800/50 rounded-lg">
                          <span className="text-platinum-400">Education</span>
                          <span className="text-platinum-200">Royal Military Academy Sandhurst (1979)</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gold mb-3">Current Positions</h4>
                      <div className="space-y-2">
                        {presidentialLeadership.currentPositions.slice(0, 5).map((pos, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-slate-800/50 rounded-lg">
                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                            <span className="text-platinum-200 text-sm">{pos.position}</span>
                            <span className="text-platinum-500 text-xs ml-auto">{pos.since}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cabinet */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-navy" />
                    Cabinet Governance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-navy/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-navy">{federalGovernmentStructure.cabinet.totalMinistries}</p>
                      <p className="text-sm text-platinum-400">Total Ministries</p>
                    </div>
                    <div className="p-4 bg-gold/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold">Jan 2026</p>
                      <p className="text-sm text-platinum-400">AI Integration</p>
                    </div>
                    <div className="p-4 bg-emerald/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald">June 2025</p>
                      <p className="text-sm text-platinum-400">Last Reshuffle</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-platinum-400 italic">"{cabinetGovernance.cabinetStatement}"</p>
                    <p className="text-xs text-platinum-500 mt-1">— Sheikh Mohammed bin Rashid Al Maktoum</p>
                  </div>
                </CardContent>
              </Card>

              {/* Women in Government */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-gold" />
                    Women in Government
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={womenChartData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Percentage', color: CHART_COLORS.gold }]}
                    height={200}
                    showGrid={true}
                  />
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="text-sm text-platinum-400">Global Ranking</p>
                      <p className="text-lg font-bold text-gold">7th - UNDP Gender Inequality Index</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="text-sm text-platinum-400">Regional Position</p>
                      <p className="text-lg font-bold text-emerald">1st in MENA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Elections Tab */}
        <TabsContent value="elections" className="space-y-6">
          <GlassPanel
            title="Federal National Council Elections"
            description="FNC structure and 2023 electoral process"
            badge="2023"
          >
            <div className="space-y-6">
              {/* FNC Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Vote className="h-5 w-5 text-platinum" />
                    FNC Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-platinum/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">40</p>
                      <p className="text-sm text-platinum-400">Total Members</p>
                    </div>
                    <div className="p-4 bg-gold/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold">20</p>
                      <p className="text-sm text-platinum-400">Elected</p>
                    </div>
                    <div className="p-4 bg-navy/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-navy">20</p>
                      <p className="text-sm text-platinum-400">Appointed</p>
                    </div>
                    <div className="p-4 bg-emerald/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald">50%</p>
                      <p className="text-sm text-platinum-400">Women Quota</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2023 Election Results */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-gold" />
                    2023 Election Turnout by Emirate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={turnoutChartData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Turnout %', color: CHART_COLORS.platinum }]}
                    height={250}
                    showGrid={true}
                  />
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-gold">44%</p>
                      <p className="text-sm text-platinum-400">Overall Turnout</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum">398,879</p>
                      <p className="text-sm text-platinum-400">Electoral College</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald">92.69%</p>
                      <p className="text-sm text-platinum-400">Remote Voting</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Electoral College Growth */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald" />
                    Electoral College Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={federalNationalCouncil.electoralCollegeGrowth.map((item, idx) => ({
                      period: item.electionYear.toString(),
                      value: item.size,
                      color: CHART_COLORS.emerald,
                    }))}
                    xAxisKey="period"
                    areas={[{ dataKey: 'value', name: 'Electoral College Size', color: CHART_COLORS.emerald }]}
                    height={200}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Human Rights Tab */}
        <TabsContent value="humanrights" className="space-y-6">
          <GlassPanel
            title="Human Rights & Political Prisoners"
            description="Documented violations and prisoner cases"
            badge="Critical"
          >
            <div className="space-y-6">
              {/* Prisoner Counts */}
              <Card className="glass-card border-rose-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Political Prisoner Counts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {prisonerData.map((item, idx) => (
                      <div key={idx} className="p-3 bg-rose/10 border border-rose/30 rounded-lg text-center">
                        <p className="text-2xl font-bold text-rose">{item.count}</p>
                        <p className="text-xs text-platinum-400 mt-1">{item.category}</p>
                        <p className="text-xs text-platinum-500">{item.source}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Ahmed Mansoor Case */}
              <Card className="glass-card border-yellow-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-yellow-400">
                    <User className="h-5 w-5" />
                    Ahmed Mansoor Case Study
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400">Name</p>
                        <p className="text-lg font-bold text-platinum">{ahmedMansoorCaseStudy.profile.name}</p>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400">Awards</p>
                        <p className="text-gold">Martin Ennals Award (2015)</p>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400">Nicknames</p>
                        <p className="text-platinum-300 text-sm italic">"{ahmedMansoorCaseStudy.profile.nicknames}"</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-rose/10 border border-rose/30 rounded-lg">
                        <p className="text-sm text-rose-400">Sentence</p>
                        <p className="text-2xl font-bold text-rose">10 Years</p>
                        <p className="text-sm text-platinum-400">+ AED 1 Million Fine</p>
                      </div>
                      <div className="p-3 bg-rose/10 border border-rose/30 rounded-lg">
                        <p className="text-sm text-rose-400">Detention</p>
                        <p className="text-lg font-bold text-rose">~4 Years Solitary</p>
                        <p className="text-sm text-platinum-400">Al-Sadr Prison, Abu Dhabi</p>
                      </div>
                      <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                        <p className="text-sm text-yellow-400">Charges</p>
                        <p className="text-xs text-platinum-300">Social media posts, publishing false statements</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UAE94 Mass Trial */}
              <Card className="glass-card border-yellow-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-yellow-400">
                    <Users className="h-5 w-5" />
                    UAE94 Mass Trial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">{uae94MassTrial.caseOverview.totalDefendants}</p>
                      <p className="text-sm text-platinum-400">Total Defendants</p>
                    </div>
                    <div className="p-4 bg-yellow-500/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-yellow-400">{uae94MassTrial.caseOverview.convicted}</p>
                      <p className="text-sm text-platinum-400">Convicted</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">{uae94MassTrial.caseOverview.sentences}</p>
                      <p className="text-sm text-platinum-400">Sentences</p>
                    </div>
                    <div className="p-4 bg-rose/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-rose">{uae94MassTrial.caseOverview.status2024.split(' ')[0]}</p>
                      <p className="text-sm text-platinum-400">Still Imprisoned</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Due Process Violations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose" />
                    Documented Due Process Violations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2">
                    {humanRightsPoliticalPrisoners.dueProcessViolations.map((violation, idx) => (
                      <div key={idx} className="p-3 bg-rose/5 border border-rose/20 rounded-lg">
                        <p className="font-medium text-rose-300 text-sm">{violation.violationType}</p>
                        <p className="text-xs text-platinum-400 mt-1">{violation.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Surveillance Tab */}
        <TabsContent value="surveillance" className="space-y-6">
          <GlassPanel
            title="Surveillance State Capabilities"
            description="Documented surveillance programs and spyware"
            badge="Critical"
          >
            <div className="space-y-6">
              {/* DarkMatter */}
              <Card className="glass-card border-rose-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <Eye className="h-5 w-5" />
                    DarkMatter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400">Founded</p>
                        <p className="text-lg font-bold text-platinum">{surveillanceState.darkMatter.founded}</p>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400">Founder</p>
                        <p className="text-platinum-200">{surveillanceState.darkMatter.founder}</p>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400">CEO</p>
                        <p className="text-platinum-200">{surveillanceState.darkMatter.ceo}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 bg-rose/10 border border-rose/30 rounded-lg">
                        <p className="text-sm text-rose-400">Government Work</p>
                        <p className="text-2xl font-bold text-rose">80%</p>
                        <p className="text-xs text-platinum-400">of DarkMatter work by early 2018</p>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400">Products</p>
                        <p className="text-platinum-200">Katim phone, Cyber offensive technology</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Karma Spyware */}
              <Card className="glass-card border-yellow-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-yellow-400">
                    <Crosshair className="h-5 w-5" />
                    Karma Spyware - Project Raven
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                      <p className="text-sm text-yellow-400">Capability</p>
                      <p className="text-lg font-bold text-yellow-300">Zero-Click iPhone Exploit</p>
                      <p className="text-xs text-platinum-400 mt-1">No user interaction required</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <p className="text-sm text-platinum-400">Access Gained</p>
                      <p className="text-platinum-200">Passwords, emails, texts, photos, location</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-platinum-300 mb-2">Documented Targets</p>
                    <div className="grid gap-2">
                      {surveillanceState.karmaSurveillanceTargets.slice(0, 5).map((target, idx) => (
                        <div key={idx} className="p-2 bg-slate-800/50 rounded-lg flex justify-between">
                          <span className="text-platinum-200 text-sm">{target.target}</span>
                          <span className="text-platinum-500 text-xs">{target.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pegasus */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-rose" />
                    Pegasus (NSO Group)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-rose">45</p>
                      <p className="text-sm text-platinum-400">Countries with Suspected Infections</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-yellow-400">36</p>
                      <p className="text-sm text-platinum-400">Pegasus Operator Systems</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">1,091</p>
                      <p className="text-sm text-platinum-400">Matching IP Addresses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Influence Tab */}
        <TabsContent value="influence" className="space-y-6">
          <GlassPanel
            title="UAE Influence Operations"
            description="Lobbying, lobbying expenditures, and policy targeting"
            badge="Documented"
          >
            <div className="space-y-6">
              {/* Spending Overview */}
              <Card className="glass-card border-gold-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-gold">
                    <DollarSign className="h-5 w-5" />
                    Lobbying Expenditures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="p-4 bg-gold/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold">$157M+</p>
                      <p className="text-sm text-platinum-400">Since 2016</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">$64M+</p>
                      <p className="text-sm text-platinum-400">2020-2021</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">25+</p>
                      <p className="text-sm text-platinum-400">Firms Registered</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-navy">7,251</p>
                      <p className="text-sm text-platinum-400">Congressional Contacts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Firms */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-platinum" />
                    Top Lobbying Firms (2020)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={uaeInfluenceOperations.keyFirms2020.map((firm, idx) => ({
                      name: firm.firm,
                      value: parseFloat(firm.revenueFromUAE.replace(/[$M]/g, '')),
                      color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
                    }))}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Revenue ($M)', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Policy Focus Areas */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Crosshair className="h-5 w-5 text-rose" />
                    Policy Focus Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {uaeInfluenceOperations.policyFocusAreas.map((area, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                        <h4 className="font-bold text-rose-300">{area.area}</h4>
                        <p className="text-sm text-platinum-400 mt-1">{area.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Arms Sales */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-gold" />
                    Arms Sales Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {uaeInfluenceOperations.armsSalesResults.map((sale, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg flex justify-between items-center">
                        <div>
                          <p className="font-medium text-platinum-200">{sale.sale}</p>
                          <p className="text-sm text-platinum-500">{sale.amount}</p>
                        </div>
                        <Badge variant={sale.status.includes('Approved') ? 'success' : sale.status.includes('Scuttled') ? 'destructive' : 'warning'} className="text-xs">
                          {sale.status}
                        </Badge>
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
