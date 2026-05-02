
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
  Cpu,
  Rocket,
  Lightbulb,
  Building,
  TrendingUp,
  Globe,
  Star,
  Users,
  DollarSign,
  Shield,
  Satellite,
  Database,
  Eye,
  Lock,
  Bitcoin,
  Wifi,
  Car,
  Plane,
  LineChartIcon,
  Activity,
  ChartBar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  UsersRound,
  Target,
  Award,
  TrendingDown,
  Briefcase,
  Globe2,
  Landmark,
  MonitorDot,
  GraduationCap,
  Moon,
} from 'lucide-react'
import {
  useTechnologyInnovationData,
} from '@/lib/data/topics/technology-innovation-data'

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

export default function TechnologyInnovationPage() {
  const { data } = useTechnologyInnovationData()

  // AI contribution by 2031 chart data
  const aiContributionData = [
    { name: 'AI Contribution', value: 91, color: CHART_COLORS.gold },
    { name: 'Other Sectors', value: 9, color: CHART_COLORS.navy },
  ]

  // Data center market growth
  const dataCenterGrowthData = [
    { year: '2025', value: 2.38, color: CHART_COLORS.gold },
    { year: '2031', value: 6.70, color: CHART_COLORS.emerald },
  ]

  // Unicorn companies data
  const unicornChartData = data.unicorns.slice(0, 6).map((u, i) => ({
    name: u.company,
    value: parseFloat(u.valuation.replace('$', '').replace('B', '')),
    color: Object.values(CHART_COLORS)[i % Object.values(CHART_COLORS).length],
  }))

  // Sentiment radar data
  const sentimentRadarData = [
    { subject: 'AI Development', A: 90, fullMark: 100 },
    { subject: 'Space Programme', A: 85, fullMark: 100 },
    { subject: 'Crypto Regulation', A: 75, fullMark: 100 },
    { subject: 'Startup Ecosystem', A: 65, fullMark: 100 },
    { subject: 'Internet Freedom', A: 25, fullMark: 100 },
    { subject: 'Surveillance', A: 30, fullMark: 100 },
  ]

  // VC statistics chart
  const vcStatsData = [
    { name: 'Shorooq Partners', value: 138, color: CHART_COLORS.gold },
    { name: 'VentureSouq', value: 165, color: CHART_COLORS.navy },
    { name: 'Wamda Capital', value: 114, color: CHART_COLORS.platinum },
    { name: 'BECO Capital', value: 87, color: CHART_COLORS.emerald },
  ]

  // AI readiness trend data
  const aiReadinessTrend = [
    { month: 'Jan', score: 78, investment: 1.2 },
    { month: 'Feb', score: 79, investment: 1.3 },
    { month: 'Mar', score: 80, investment: 1.4 },
    { month: 'Apr', score: 81, investment: 1.5 },
    { month: 'May', score: 82, investment: 1.6 },
    { month: 'Jun', score: 83, investment: 1.7 },
    { month: 'Jul', score: 84, investment: 1.8 },
    { month: 'Aug', score: 84, investment: 1.9 },
    { month: 'Sep', score: 85, investment: 2.0 },
    { month: 'Oct', score: 86, investment: 2.1 },
    { month: 'Nov', score: 86, investment: 2.2 },
    { month: 'Dec', score: 87, investment: 2.3 },
  ]

  // Cybersecurity ranking data
  const cyberRankingData = [
    { name: 'UAE Ranking', value: 5, color: CHART_COLORS.emerald },
  ]

  // Market projections data
  const marketProjectionData = [
    { name: 'Data Center 2025', value: 2.38, color: CHART_COLORS.gold },
    { name: 'Data Center 2031', value: 6.70, color: CHART_COLORS.navy },
    { name: 'AV Market 2030', value: 5, color: CHART_COLORS.platinum },
  ]

  // Surveillance sentiment
  const surveillanceSentiment = [
    { name: 'Privacy Concern', value: 70, color: CHART_COLORS.rose },
    { name: 'Security Benefit', value: 30, color: CHART_COLORS.emerald },
  ]

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
          <Badge variant="gold" className="mb-2">P-SECTOR</Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">Technology & Innovation</h1>
          <p className="mt-2 text-platinum-400">
            AI ecosystem, G42, space program, startup intelligence, and digital infrastructure
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {data.execution.dateExecuted}
            </span>
            <span className="flex items-center gap-1">
              <Target className="h-4 w-4" />
              {data.execution.queriesExecuted} queries
            </span>
            <span className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {data.execution.pagesFetched} sources
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <Cpu className="h-4 w-4" />
            AI Dashboard
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Lightbulb className="h-4 w-4" />
            Track Startup
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="AI Contribution 2031"
          value={91}
          unit="B"
          previousValue={0}
          icon={<Cpu className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Data Center Market"
          value={2.38}
          unit="B"
          previousValue={1.8}
          icon={<Database className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Unicorns"
          value={6}
          previousValue={3}
          icon={<Star className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Cybersecurity Rank"
          value={5}
          previousValue={7}
          icon={<Shield className="h-6 w-6" />}
          gradient="purple"
        />
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {['G42', 'AI Strategy', 'Surveillance', 'Space', 'Crypto', 'Startups'].map((area) => (
            <Badge key={area} variant="outline" className="border-platinum/30 text-platinum-500">
              {area}
            </Badge>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ai">AI Ecosystem</TabsTrigger>
          <TabsTrigger value="g42">G42</TabsTrigger>
          <TabsTrigger value="space">Space Programme</TabsTrigger>
          <TabsTrigger value="datacenter">Data Centers</TabsTrigger>
          <TabsTrigger value="surveillance">Surveillance</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="fintech">FinTech</TabsTrigger>
          <TabsTrigger value="infrastructure">Digital Infra</TabsTrigger>
          <TabsTrigger value="av">Autonomous</TabsTrigger>
          <TabsTrigger value="semiconductor">Semiconductor</TabsTrigger>
          <TabsTrigger value="startups">Startups</TabsTrigger>
          <TabsTrigger value="labor">Labor Market</TabsTrigger>
          <TabsTrigger value="findings">Findings</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="Technology & Innovation Overview"
            description="Key metrics and strategic investments in UAE tech sector"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* AI Contribution Target */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-gold-700" />
                      AI Contribution Target (2031)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                      <span className="text-platinum-300">Target Contribution</span>
                      <span className="text-xl font-bold text-gold-700">$91 Billion</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                      <span className="text-platinum-300">Non-oil GDP Target</span>
                      <span className="text-xl font-bold text-emerald-500">20%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                      <span className="text-platinum-300">Minister Appointed</span>
                      <span className="text-xl font-bold text-platinum-500">2017</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Major Investments */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-emerald-500" />
                      Major Tech Investments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {data.majorTechnologyInvestments.slice(0, 5).map((inv, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                          <div>
                            <p className="font-medium text-platinum-200">{inv.investment}</p>
                            <p className="text-xs text-platinum-500">{inv.investors}</p>
                          </div>
                          <Badge variant="gold" className="text-xs">{inv.amount}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Rankings */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-gold-700" />
                    UAE Global Rankings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.techRankings.map((rank, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-platinum-800/50 rounded-xl">
                        <span className="text-platinum-300">{rank.index}</span>
                        <Badge variant="emerald" className="text-lg px-3 py-1">{rank.ranking}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Readiness Trend */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <LineChartIcon className="h-5 w-5 text-cyan-500" />
                    AI Readiness Score Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={aiReadinessTrend}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'score', name: 'AI Readiness Score', color: CHART_COLORS.gold },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Sentiment Radar */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5 text-rose-500" />
                    Sentiment Analysis by Theme
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadarChart
                    data={sentimentRadarData}
                    metrics={[{ dataKey: 'A', name: 'Score', color: CHART_COLORS.gold }]}
                    height={300}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* AI Ecosystem Tab */}
        <TabsContent value="ai" className="space-y-6">
          <GlassPanel
            title="AI & Artificial Intelligence"
            description="UAE AI strategy, adoption, ethics, and investment"
            badge="17 Metrics"
          >
            <div className="space-y-6">
              {/* AI Strategy Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-gold-700" />
                    AI Strategy Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.aiStrategyMetrics.slice(0, 8).map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-300 text-sm">{metric.metric}</span>
                        <Badge variant="gold" className="text-xs">{metric.value}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Investment Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    AI Investment Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.aiInvestmentTimeline.map((event, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-3 bg-platinum-800/50 rounded-lg">
                        <div className="w-20 shrink-0 text-center">
                          <span className="text-sm font-bold text-gold-700">{event.date.split(' ')[0]}</span>
                          <span className="text-xs text-platinum-500 block">{event.date.split(' ')[1]}</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-platinum-200">{event.event}</p>
                          <p className="text-xs text-platinum-500">{event.partners}</p>
                        </div>
                        {event.investment && event.investment !== '-' && (
                          <Badge variant="emerald" className="text-xs shrink-0">{event.investment}</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Ethics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-navy-500" />
                    AI Ethics & Regulation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-navy/20 border border-navy-500/30 rounded-xl">
                      <h4 className="font-bold text-navy-300 mb-2">Framework: AI Principles and Ethics for Emirate of Dubai</h4>
                      <p className="text-sm text-platinum-400">Launched January 2019 by Smart Dubai Government Establishment</p>
                    </div>
                    <div className="grid gap-2 md:grid-cols-2">
                      {data.aiEthicsRegulation.map((aspect, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 bg-platinum-800/50 rounded">
                          <span className="text-platinum-400 text-sm">{aspect.aspect}:</span>
                          <span className="text-platinum-200 text-sm text-right">{aspect.details}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Deepfake Regulation */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-500">
                    <AlertTriangle className="h-5 w-5" />
                    Deepfake Regulation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl">
                    <p className="text-platinum-300">Legal Basis: <span className="text-rose-500 font-bold">Federal Decree-Law No. (34) of 2021</span></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* G42 Tab */}
        <TabsContent value="g42" className="space-y-6">
          <GlassPanel
            title="G42 - Flagship AI Company"
            description="Core AI company of Abu Dhabi with global partnerships"
            badge={data.g42Overview.employees}
          >
            <div className="space-y-6">
              {/* G42 Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-gold-700" />
                    {data.g42Overview.fullName}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">Founded</span>
                        <span className="font-bold text-gold-700">{data.g42Overview.founded}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">Headquarters</span>
                        <span className="font-bold text-platinum-500">{data.g42Overview.headquarters}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">Chairman</span>
                        <span className="font-bold text-platinum-500">{data.g42Overview.chairman}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">CEO</span>
                        <span className="font-bold text-platinum-500">{data.g42Overview.ceo}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">Employees</span>
                        <span className="font-bold text-emerald-500">{data.g42Overview.employees}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">Business Areas</span>
                        <span className="font-bold text-navy-500 text-right text-sm">{data.g42Overview.businessAreas}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* G42 Subsidiaries */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-emerald-500" />
                    Key Subsidiaries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {data.g42Subsidiaries.map((sub, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="font-bold text-gold-700">{sub.name}</p>
                        <p className="text-sm text-platinum-400 mt-1">{sub.focusArea}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* G42 Partnerships */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-cyan-500" />
                    Key Partnerships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.g42Partnerships.map((partnership, idx) => (
                      <div key={idx} className="flex items-start justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <div>
                          <p className="font-medium text-platinum-200">{partnership.partnership}</p>
                          <p className="text-xs text-platinum-500">{partnership.details}</p>
                        </div>
                        <Badge variant="outline" className="text-xs shrink-0">{partnership.date}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* G42 Controversies */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-500">
                    <AlertTriangle className="h-5 w-5" />
                    Controversies & Concerns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.g42Controversies.map((controversy, idx) => (
                      <div key={idx} className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                        <p className="font-medium text-rose-500">{controversy.issue}</p>
                        <p className="text-sm text-platinum-400 mt-1">{controversy.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Space Programme Tab */}
        <TabsContent value="space" className="space-y-6">
          <GlassPanel
            title="Space Programme"
            description="Hope Probe, astronauts, and lunar missions"
            badge="Historic"
          >
            <div className="space-y-6">
              {/* Hope Probe */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-gold-700" />
                    Emirates Hope Probe - Mars Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.hopeProbeMetrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{metric.attribute}</span>
                        <span className="font-bold text-gold-700 text-sm text-right">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Mars Mission Leaders */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-500" />
                    Mars Mission Leadership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.marsMissionLeaders.map((leader, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-sm text-platinum-400">{leader.role}</p>
                        <p className="text-xl font-bold text-gold-700 mt-1">{leader.person}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sultan Al Neyadi */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-platinum-500" />
                    Sultan Al Neyadi - Astronaut
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.sultanAlNeyadiAttributes.slice(0, 6).map((attr, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{attr.attribute}</span>
                        <span className="font-bold text-platinum-500 text-sm text-right">{attr.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm text-platinum-400 mb-2">Space Missions</h4>
                    <div className="space-y-2">
                      {data.sultanSpaceMissions.map((mission, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-2 bg-platinum-800/50 rounded">
                          <Badge variant="gold" className="text-xs shrink-0">{mission.date}</Badge>
                          <span className="text-platinum-200 text-sm">{mission.details}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lunar Mission */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Moon className="h-5 w-5 text-cyan-500" />
                    Rashid Rover Lunar Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {data.lunarMissionAttributes.map((attr, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{attr.attribute}</span>
                        <span className="font-bold text-cyan-500 text-sm text-right">{attr.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Missions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-emerald-500" />
                    Upcoming Missions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.upcomingMissions.map((mission, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-platinum-800/50 rounded-xl">
                        <div>
                          <p className="font-bold text-gold-700">{mission.mission}</p>
                          <p className="text-sm text-platinum-400">Target: {mission.target}</p>
                        </div>
                        <Badge variant="emerald">{mission.launchDate}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Data Centers Tab */}
        <TabsContent value="datacenter" className="space-y-6">
          <GlassPanel
            title="Data Center Economy"
            description="Market growth, investments, and capacity expansion"
            badge="$2.38B Market"
          >
            <div className="space-y-6">
              {/* Market Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="h-5 w-5 text-gold-700" />
                    Data Center Market
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-gold-700">$2.38B</p>
                      <p className="text-platinum-400">2025 Valuation</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-emerald-500">$6.70B</p>
                      <p className="text-platinum-400">2031 Projection</p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-2">
                    {data.dataCenterMetrics.slice(0, 8).map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-platinum-800/50 rounded">
                        <span className="text-platinum-400 text-sm">{metric.metric}</span>
                        <span className="font-bold text-platinum-500 text-sm">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Major Investments */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-emerald-500" />
                    Major Data Center Investments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.majorDataCenterInvestments.map((inv, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-platinum-800/50 rounded-xl">
                        <div>
                          <p className="font-bold text-gold-700">{inv.investor}</p>
                          <p className="text-sm text-platinum-500">{inv.partner}</p>
                        </div>
                        <Badge variant="gold" className="text-lg px-3">{inv.investment}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Players */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-navy-500" />
                    Key Data Center Players
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {data.dataCenterPlayers.map((player, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg text-center">
                        <p className="font-bold text-navy-500">{player.company}</p>
                        <p className="text-xs text-platinum-400 mt-1">{player.role}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Capacity Growth */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-cyan-500" />
                    Capacity & Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: 'Live (MW)', value: 376, color: CHART_COLORS.gold },
                      { name: 'Stargate UAE (GW)', value: 5000, color: CHART_COLORS.emerald },
                    ]}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Capacity', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Surveillance Tab */}
        <TabsContent value="surveillance" className="space-y-6">
          <GlassPanel
            title="Surveillance & Cybersecurity"
            description="AI surveillance programs, privacy concerns, and regulations"
            badge="Privacy Alert"
          >
            <div className="space-y-6">
              {/* Surveillance Programmes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-rose-500" />
                    AI Surveillance Programmes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.surveillanceProgrammes.map((prog, idx) => (
                      <div key={idx} className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl">
                        <h4 className="font-bold text-rose-500">{prog.programme}</h4>
                        <p className="text-sm text-platinum-400 mt-1">Location: {prog.location}</p>
                        <p className="text-platinum-300 mt-2">{prog.scope}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Oyoon Details */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-rose-500" />
                    Oyoon Programme - Dubai
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {data.oyoonDetails.map((detail, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-platinum-800/50 rounded">
                        <span className="text-platinum-400 text-sm">{detail.aspect}:</span>
                        <span className="text-platinum-200 text-sm text-right">{detail.details}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Human Rights Concerns */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-500">
                    <AlertTriangle className="h-5 w-5" />
                    Human Rights Concerns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.humanRightsConcerns.map((concern, idx) => (
                      <div key={idx} className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                        <p className="font-medium text-rose-500">{concern.issue}</p>
                        <p className="text-sm text-platinum-400 mt-1">{concern.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Internet Restrictions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lock className="h-5 w-5 text-navy-500" />
                    Internet Restrictions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {data.internetRestrictions.slice(0, 8).map((rest, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-platinum-800/50 rounded">
                        <span className="text-platinum-300 text-sm">{rest.restriction}</span>
                        <Badge variant={rest.status === 'Blocked' || rest.status === 'Banned' ? 'rose' : 'outline'} className="text-xs">
                          {rest.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cybersecurity Entities */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-500" />
                    Cybersecurity Framework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {data.cybersecurityEntities.map((entity, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="font-bold text-emerald-500">{entity.entity}</p>
                        <p className="text-sm text-platinum-400 mt-1">{entity.role}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-2">
                    {data.dataProtectionLaws.map((law, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-platinum-800/50 rounded">
                        <span className="text-platinum-400 text-sm">{law.jurisdiction}</span>
                        <span className="text-platinum-200 text-sm">{law.law}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Crypto Tab */}
        <TabsContent value="crypto" className="space-y-6">
          <GlassPanel
            title="Crypto & Virtual Assets"
            description="VARA regulation, licensing, and compliance"
            badge="World's First"
          >
            <div className="space-y-6">
              {/* VARA Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Bitcoin className="h-5 w-5 text-gold-700" />
                    VARA - Virtual Assets Regulatory Authority
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl mb-4">
                    <p className="text-emerald-500 font-bold">World's First Independent Regulator for Virtual Assets</p>
                  </div>
                  <div className="grid gap-2">
                    {data.cryptoRegulatoryFramework.map((reg, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-platinum-800/50 rounded">
                        <span className="text-platinum-400 text-sm">{reg.regulator}</span>
                        <span className="text-platinum-200 text-sm text-right">{reg.scope}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Licensing */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    Licensing & Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.cryptoLicensing.map((item, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="text-platinum-400 text-sm">{item.aspect}</p>
                        <p className="font-bold text-emerald-500 mt-1">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Compliance Requirements */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-navy-500" />
                    AML/CFT Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {data.cryptoCompliance.map((req, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <Badge variant="gold" className="text-xs mb-2">{req.requirement}</Badge>
                        <p className="text-sm text-platinum-400">{req.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* FinTech Tab */}
        <TabsContent value="fintech" className="space-y-6">
          <GlassPanel
            title="FinTech & Innovation Hubs"
            description="DIFC Innovation Hub and Dubai FinTech Hive ecosystem"
            badge="Innovation"
          >
            <div className="space-y-6">
              {/* DIFC Innovation Hub */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-gold-700" />
                    DIFC Innovation Hub
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-gold-500/10 border border-gold-500/30 rounded-xl mb-4">
                    <p className="text-gold-700 font-bold">Home to first and largest FinTech accelerator in MEASA region</p>
                  </div>
                  <div className="grid gap-2">
                    {data.difcInnovationHub.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{item.aspect}:</span>
                        <span className="text-platinum-200 text-sm text-right">{item.details}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Dubai FinTech Hive */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-emerald-500" />
                    Dubai FinTech Hive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-platinum-800/50 rounded-xl">
                      <p className="text-platinum-400 text-sm">Launch Year</p>
                      <p className="text-2xl font-bold text-emerald-500">{data.dubaiFinTechHive.details}</p>
                    </div>
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                      <p className="text-emerald-500 font-bold mb-2">Inaugural Batch</p>
                      <p className="text-platinum-300">11 finalists</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl">
                      <p className="text-platinum-400 text-sm mb-2">Key Partnership</p>
                      <p className="text-platinum-200">Emirates NBD for API sandbox certification</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Flagship Events */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-gold-700" />
                    Flagship Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="font-bold text-gold-700">Dubai FinTech Summit</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="font-bold text-gold-700">Dubai AI & Web3 Festival</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="font-bold text-gold-700">Future Sustainability Forum</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="font-bold text-gold-700">AccelerateHER Program</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Digital Infrastructure Tab */}
        <TabsContent value="infrastructure" className="space-y-6">
          <GlassPanel
            title="Digital Infrastructure"
            description="UAE Pass, e-government, quantum computing, MBZUAI"
            badge="Digital"
          >
            <div className="space-y-6">
              {/* UAE Pass */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-gold-700" />
                    UAE Pass - Digital Identity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {data.uaePassFeatures.slice(0, 8).map((feature, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-platinum-800/50 rounded">
                        <span className="text-platinum-400 text-sm">{feature.feature}</span>
                        <span className="text-platinum-200 text-sm text-right">{feature.details}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* E-Government Apps */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MonitorDot className="h-5 w-5 text-emerald-500" />
                    E-Government Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {data.eGovernmentApps.slice(0, 6).map((app, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="font-bold text-emerald-500">{app.application}</p>
                        <p className="text-sm text-platinum-400 mt-1">{app.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quantum Initiatives */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-cyan-500" />
                    Quantum Computing Initiatives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.quantumInitiatives.map((init, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="font-bold text-cyan-500">{init.initiative}</p>
                        <p className="text-sm text-platinum-400 mt-1">{init.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* MBZUAI */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-platinum-500" />
                    MBZUAI - Mohamed bin Zayed University of AI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-platinum-500/10 border border-platinum-500/30 rounded-xl mb-4">
                    <p className="text-platinum-500 font-bold">World's First AI University</p>
                  </div>
                  <div className="grid gap-2">
                    {data.mbzuaiGlobalPresence.map((loc, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-platinum-800/50 rounded">
                        <span className="text-platinum-400 text-sm">{loc.location}</span>
                        <span className="text-platinum-200 text-sm text-right">{loc.details}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Autonomous Vehicles Tab */}
        <TabsContent value="av" className="space-y-6">
          <GlassPanel
            title="Autonomous Transportation"
            description="Self-driving vehicles, drones, and air taxis"
            badge="25% CAGR"
          >
            <div className="space-y-6">
              {/* AV Regulations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Car className="h-5 w-5 text-gold-700" />
                    Autonomous Vehicle Regulations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.avRegulations.map((reg, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <Badge variant="gold" className="text-xs mb-2">{reg.law}</Badge>
                        <p className="text-sm text-platinum-400">{reg.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AV Operators */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-emerald-500" />
                    AV Operators in UAE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.avOperators.map((op, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-emerald-500">{op.operator}</p>
                            <p className="text-sm text-platinum-400">Location: {op.location}</p>
                          </div>
                          <Badge variant="outline">{idx === 0 ? 'Active' : 'Piloting'}</Badge>
                        </div>
                        <p className="text-sm text-platinum-300 mt-2">{op.deploymentDetails}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Market Projections */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-cyan-500" />
                    Market Projections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.avMarketProjections.map((proj, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-2xl font-bold text-cyan-500">{proj.value}</p>
                        <p className="text-sm text-platinum-400 mt-1">{proj.metric}</p>
                        {proj.source && <p className="text-xs text-platinum-500 mt-1">Source: {proj.source}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Drone Details */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Plane className="h-5 w-5 text-rose-500" />
                    Drone Delivery Programme
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {data.droneDetails.map((drone, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-platinum-800/50 rounded">
                        <span className="text-platinum-400 text-sm">{drone.aspect}</span>
                        <span className="text-platinum-200 text-sm text-right">{drone.details}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Semiconductor Tab */}
        <TabsContent value="semiconductor" className="space-y-6">
          <GlassPanel
            title="Semiconductor Industry"
            description="Chip manufacturing ambitions and market"
            badge="$1.75B Market"
          >
            <div className="space-y-6">
              {/* Developments */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-gold-700" />
                    Recent Developments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.semiconductorDevelopments.map((dev, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-bold text-gold-700">{dev.development}</p>
                          <Badge variant="outline" className="text-xs">{dev.date}</Badge>
                        </div>
                        <p className="text-sm text-platinum-400">{dev.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Market Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    Market Size
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.semiconductorMarkets.map((mkt, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-2xl font-bold text-emerald-500">{mkt.value}</p>
                        <p className="text-sm text-platinum-400 mt-1">{mkt.metric}</p>
                        {mkt.year && <p className="text-xs text-platinum-500 mt-1">{mkt.year}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Initiatives */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-navy-500" />
                    Strategic Initiatives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.semiconductorInitiatives.map((init, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="font-bold text-navy-500">{init.initiative}</p>
                        <p className="text-sm text-platinum-400 mt-1">{init.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Startups Tab */}
        <TabsContent value="startups" className="space-y-6">
          <GlassPanel
            title="Startup Ecosystem & Unicorns"
            description="Key startups, VC firms, and government targets"
            badge="6 Unicorns"
          >
            <div className="space-y-6">
              {/* Unicorns */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-gold-700" />
                    Unicorn Companies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.unicorns.map((company, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-platinum-800/50 rounded-xl">
                        <div className="flex-1">
                          <p className="font-bold text-gold-700">{company.company}</p>
                          <p className="text-sm text-platinum-400">{company.sector}</p>
                          <p className="text-xs text-platinum-500 mt-1">Location: {company.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-emerald-500">{company.valuation}</p>
                          <p className="text-xs text-platinum-500">Funding: {company.funding}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Unicorn Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ChartBar className="h-5 w-5 text-cyan-500" />
                    Unicorn Valuations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={unicornChartData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Valuation ($B)', color: CHART_COLORS.gold }]}
                    height={300}
                    showGrid={true}
                    horizontal={true}
                  />
                </CardContent>
              </Card>

              {/* Government Targets */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-emerald-500" />
                    Government Targets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.governmentTargets.map((target, idx) => (
                      <div key={idx} className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                        <p className="font-bold text-emerald-500">{target.target}</p>
                        <p className="text-sm text-platinum-400 mt-1">{target.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* VC Firms */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-navy-500" />
                    Venture Capital Firms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.vcFirms.slice(0, 5).map((firm, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <div>
                          <p className="font-bold text-navy-500">{firm.firm}</p>
                          <p className="text-xs text-platinum-500">{firm.location} | Est. {firm.established}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-platinum-500">{firm.totalFunding}</p>
                          <p className="text-xs text-platinum-500">{firm.investments} investments</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* VC Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <LineChartIcon className="h-5 w-5 text-cyan-500" />
                    VC Market Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {data.vcStatistics.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{stat.metric}</span>
                        <span className="font-bold text-cyan-500">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Labor Market Tab */}
        <TabsContent value="labor" className="space-y-6">
          <GlassPanel
            title="Tech Sector Labor Market"
            description="Layoffs data, regional disruptions, and workforce trends"
            badge="Market Conditions"
          >
            <div className="space-y-6">
              {/* Layoff Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-rose-500" />
                    Tech Sector Layoffs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.layoffMetrics.map((metric, idx) => (
                      <div key={idx} className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-center">
                        <p className="text-3xl font-bold text-rose-500">{metric.value}</p>
                        <p className="text-platinum-400 mt-1">{metric.metric}</p>
                        <p className="text-xs text-platinum-500 mt-1">Source: {metric.source}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Regional Disruptions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    Regional Disruptions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.regionalDisruptions.map((disruption, idx) => (
                      <div key={idx} className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl">
                        <p className="font-bold text-rose-500">{disruption.event}</p>
                        <p className="text-sm text-platinum-400 mt-1">{disruption.impact}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Workforce Impact */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-500" />
                    UAE Job Market Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-platinum-800/50 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-platinum-400">UAE Companies Cutting Jobs</span>
                      <Badge variant="rose" className="text-lg px-3">29%</Badge>
                    </div>
                    <p className="text-sm text-platinum-500">Source: Cooper Fitch Report</p>
                  </div>
                </CardContent>
              </Card>

              {/* Global Tech Layoffs Context */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-gold-700" />
                    Global Tech Layoffs (2026)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                    <p className="text-4xl font-bold text-rose-500">30,000+</p>
                    <p className="text-platinum-400 mt-2">Global tech employees affected</p>
                    <p className="text-xs text-platinum-500 mt-1">Source: Gulf News</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Synthesized Findings Tab */}
        <TabsContent value="findings" className="space-y-6">
          <GlassPanel
            title="Synthesized Findings"
            description="Key insights and strategic assessments"
            badge="10 Findings"
          >
            <div className="space-y-6">
              {data.synthesizedFindings.map((finding, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Award className="h-5 w-5 text-gold-700" />
                      {finding.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-platinum-300 leading-relaxed">{finding.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel
            title="Sentiment Analysis"
            description="Public sentiment by source and theme"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              {/* Sentiment by Source */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-gold-700" />
                    Sentiment by Source Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.sentimentBySource.map((source, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-bold text-platinum-200">{source.sourceCategory}</p>
                          <Badge
                            variant={
                              source.sentiment.includes('Positive')
                                ? 'emerald'
                                : source.sentiment.includes('Negative')
                                ? 'rose'
                                : 'outline'
                            }
                          >
                            {source.sentiment}
                          </Badge>
                        </div>
                        <p className="text-sm text-platinum-400">{source.keyFactors}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment by Theme */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Landmark className="h-5 w-5 text-emerald-500" />
                    Sentiment by Theme
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {data.sentimentByTheme.map((theme, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-bold text-platinum-200">{theme.theme}</p>
                          <Badge
                            variant={
                              theme.sentiment.includes('Positive')
                                ? 'emerald'
                                : theme.sentiment.includes('Negative')
                                ? 'rose'
                                : 'outline'
                            }
                          >
                            {theme.sentiment}
                          </Badge>
                        </div>
                        <p className="text-sm text-platinum-400">Drivers: {theme.drivers}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Global AI Race */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-cyan-500" />
                    UAE in Global AI Race
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.globalAIRace.map((dim, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{dim.dimension}</span>
                        <div className="text-right">
                          <p className="font-bold text-cyan-500 text-sm">{dim.uaePosition}</p>
                          <p className="text-xs text-platinum-500">{dim.relevance}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Strategic Assets */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-gold-700" />
                    Strategic Assets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {data.strategicAssets.map((asset, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl">
                        <p className="font-bold text-gold-700">{asset.asset}</p>
                        <p className="text-sm text-emerald-500 mt-1">Value: {asset.value}</p>
                        <p className="text-xs text-platinum-400 mt-1">{asset.competitivePosition}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Risk Factors */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-500">
                    <AlertTriangle className="h-5 w-5" />
                    Risk Factors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.riskFactors.map((risk, idx) => (
                      <div key={idx} className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-bold text-rose-500">{risk.risk}</p>
                          <Badge variant="rose" className="text-xs">Severity: {risk.severity}</Badge>
                        </div>
                        <p className="text-sm text-platinum-400">Mitigation: {risk.mitigation}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Verification Status */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    Verification Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {data.verificationChecks.map((check, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-platinum-800/50 rounded">
                        <span className="text-platinum-300 text-sm">{check.check}</span>
                        <Badge
                          variant={check.status === 'PASS' ? 'emerald' : 'rose'}
                          className="text-xs"
                        >
                          {check.status}
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

      {/* Footer */}
      <motion.div variants={itemVariants} className="text-center text-sm text-platinum-500">
        <p>Last Updated: {data.lastUpdated}</p>
        <p className="mt-1">
          Enrichment Status: <Badge variant="success" className="text-xs">{data.execution.enrichmentStatus}</Badge>
        </p>
        <p className="mt-1 text-platinum-600">
          Data Completeness: {data.execution.dataCompleteness}
        </p>
      </motion.div>
    </motion.div>
  )
}
