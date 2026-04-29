'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
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
  Cpu,
  Rocket,
  Lightbulb,
  TrendingUp,
  Globe,
  Users,
  Building,
  Zap,
  Brain,
  Cloud,
  Shield,
  Star,
  ChevronRight,
  Activity,
  AlertTriangle,
  Satellite,
  Bot,
  CircuitBoard,
  Plane,
  Network,
  Database,
  Lock,
  Award,
} from 'lucide-react'
import { aiTechnologyExtendedData } from '@/lib/data-loader/trends-data'

// ============================================================================
// ENHANCEMENT CYCLE A: Premium Imports & Configuration
// ============================================================================

// ============================================================================
// ENHANCEMENT CYCLE B: Chart Data Derived from MD Content
// ============================================================================

const aiReadinessData = [
  { month: 'Jan', score: 82, globalAvg: 58 },
  { month: 'Feb', score: 83, globalAvg: 59 },
  { month: 'Mar', score: 84, globalAvg: 60 },
  { month: 'Apr', score: 85, globalAvg: 61 },
  { month: 'May', score: 86, globalAvg: 62 },
  { month: 'Jun', score: 87, globalAvg: 63 },
  { month: 'Jul', score: 88, globalAvg: 64 },
  { month: 'Aug', score: 89, globalAvg: 65 },
  { month: 'Sep', score: 90, globalAvg: 66 },
  { month: 'Oct', score: 91, globalAvg: 67 },
  { month: 'Nov', score: 92, globalAvg: 68 },
  { month: 'Dec', score: 93, globalAvg: 69 },
]

const adoptionData = [
  { sector: 'Financial Services', adoption: 92, growth: 15 },
  { sector: 'Government Services', adoption: 88, growth: 22 },
  { sector: 'Healthcare', adoption: 85, growth: 28 },
  { sector: 'Retail & Commerce', adoption: 82, growth: 18 },
  { sector: 'Manufacturing', adoption: 76, growth: 25 },
  { sector: 'Education', adoption: 74, growth: 32 },
]

const investmentData = [
  { name: 'AI & ML', value: 35, color: CHART_COLORS.gold },
  { name: 'Cloud Infra', value: 22, color: CHART_COLORS.navy },
  { name: 'Cybersecurity', value: 18, color: CHART_COLORS.platinum },
  { name: 'Blockchain', value: 12, color: CHART_COLORS.emerald },
  { name: 'IoT & Robotics', value: 8, color: CHART_COLORS.info },
  { name: 'Quantum', value: 5, color: CHART_COLORS.purple },
]

const automationRiskData = [
  { role: 'Clerical Roles', risk: 73, color: CHART_COLORS.danger },
  { role: 'Recording Clerks', risk: 55, color: CHART_COLORS.orange },
  { role: 'Business Admin', risk: 48, color: CHART_COLORS.warning },
  { role: 'Data Scientists', risk: 36, color: CHART_COLORS.gold },
  { role: 'Engineers', risk: 33, color: CHART_COLORS.info },
  { role: 'Teaching', risk: 11, color: CHART_COLORS.success },
]

const droneMarketData = [
  { year: '2024', market: 5.8 },
  { year: '2025', market: 9.2 },
  { year: '2026', market: 14.5 },
  { year: '2027', market: 19.1 },
  { year: '2028', market: 23.0 },
  { year: '2030', market: 26.2 },
]

const talentGapData = [
  { role: 'AI/ML Engineers', demand: 95, supply: 42 },
  { role: 'Cloud Architects', demand: 88, supply: 55 },
  { role: 'Cybersecurity', demand: 92, supply: 48 },
  { role: 'Data Scientists', demand: 90, supply: 65 },
  { role: 'Full Stack Devs', demand: 85, supply: 72 },
]

const g42Subsidiaries = [
  { name: 'M42', sector: 'Healthcare', valuation: 'Private', color: CHART_COLORS.emerald },
  { name: 'Bayanat', sector: 'Geospatial AI', valuation: 'Private', color: CHART_COLORS.navy },
  { name: 'Presight AI', sector: 'Analytics', valuation: '$495M IPO', color: CHART_COLORS.gold },
  { name: 'Space42', sector: 'Satellite', valuation: '~$4B', color: CHART_COLORS.purple },
]

const starlinkPlans = [
  { plan: 'Residential Lite', price: 'Dh230', speed: '30-100 Mbps' },
  { plan: 'Standard', price: 'Dh300', speed: '50-200 Mbps' },
  { plan: 'Business', price: 'From Dh248', speed: 'Variable' },
  { plan: 'Roam 100GB', price: 'Dh185-190', speed: '50-150 Mbps' },
  { plan: 'Roam Unlimited', price: 'Dh600', speed: '50-200 Mbps' },
]

const smartCityData = [
  { city: 'Dubai', rank: 4, previousRank: 12, change: '+8' },
  { city: 'Abu Dhabi', rank: 5, previousRank: 10, change: '+5' },
]

const roboticsMarketData = [
  { segment: 'Industrial', share: 49.56 },
  { segment: 'Service', share: 18.2 },
  { segment: 'Autonomous', share: 12.5 },
  { segment: 'Military', share: 8.4 },
  { segment: 'Medical', share: 6.3 },
  { segment: 'Other', share: 5.04 },
]

// ============================================================================
// ENHANCEMENT CYCLE C: Premium Animation Variants
// ============================================================================

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
}

// ============================================================================
// ENHANCEMENT CYCLE D: Sub-Components
// ============================================================================

function KPIGridItem({ kpi, index }: { kpi: typeof aiTechnologyExtendedData.summaryKPIs[0]; index: number }) {
  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'critical': return 'text-red-400'
      case 'high': return 'text-gold'
      case 'medium': return 'text-blue-400'
      default: return 'text-platinum'
    }
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="glass-panel p-4 rounded-xl hover:shadow-glass-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-platinum-500 font-medium">{kpi.kpi}</p>
          <p className="text-2xl font-bold gradient-text-gold mt-1">{kpi.value}</p>
          <p className="text-xs text-platinum-600 mt-1">{kpi.trend !== '-' ? `Trend: ${kpi.trend}` : 'Stable'}</p>
        </div>
        <Badge variant="outline" className={`text-xs ${getRelevanceColor(kpi.uaeRelevance)}`}>
          {kpi.uaeRelevance.toUpperCase()}
        </Badge>
      </div>
    </motion.div>
  )
}

function EntityCard({ entity, type }: { entity: string; type: 'body' | 'company' | 'regulation' }) {
  const icons = {
    body: Building,
    company: Rocket,
    regulation: Shield,
  }
  const Icon = icons[type]

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className="glass-panel p-4 rounded-xl flex items-center gap-3 hover:shadow-glass-lg transition-all duration-300"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold text-navy-950">
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-sm font-medium text-platinum-200">{entity}</span>
    </motion.div>
  )
}

function SentimentBar({ topic, sentiment, finding }: { topic: string; sentiment: string; finding: string }) {
  const getSentimentColor = (sent: string) => {
    if (sent.toLowerCase().includes('very positive') || sent.toLowerCase().includes('positive')) return 'bg-gradient-emerald'
    if (sent.toLowerCase().includes('mixed')) return 'bg-gradient-gold'
    return 'bg-gradient-red'
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="glass-panel p-4 rounded-xl"
    >
      <div className="flex items-start gap-3">
        <div className={`w-1.5 h-12 rounded-full ${getSentimentColor(sentiment)}`} />
        <div className="flex-1">
          <p className="text-sm font-semibold text-gold">{topic}</p>
          <p className="text-xs text-platinum-400 mt-1">{sentiment}</p>
          <p className="text-xs text-platinum-500 mt-1 italic">{finding}</p>
        </div>
      </div>
    </motion.div>
  )
}

function SourceCredibilityRow({ source, tier, type, reliability }: { source: string; tier: number; type: string; reliability: string }) {
  const getTierColor = (t: number) => {
    if (t === 0) return 'text-emerald-400'
    if (t === 1) return 'text-blue-400'
    if (t === 2) return 'text-gold'
    return 'text-platinum-500'
  }

  return (
    <div className="flex items-center justify-between py-2 border-b border-platinum-800/50 last:border-0">
      <div>
        <p className="text-sm text-platinum-200">{source}</p>
        <p className="text-xs text-platinum-500">{type}</p>
      </div>
      <div className="text-right">
        <Badge variant="outline" className={`text-xs ${getTierColor(tier)}`}>Tier {tier}</Badge>
        <p className="text-xs text-platinum-500 mt-1">{reliability}</p>
      </div>
    </div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE E: Main Page Component
// ============================================================================

export default function TechnologyTrendsPage() {
  const ext = aiTechnologyExtendedData

  return (
    <div className="space-y-8 p-8 min-h-screen" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2 font-bold tracking-wider">TRENDS</Badge>
          <h1 className="text-4xl font-extrabold gradient-text-gold tracking-tight">Technology Trends</h1>
          <p className="mt-2 text-platinum-400 max-w-xl">
            AI ecosystem, digital transformation, and tech innovation intelligence — ENRICHED SSOT
          </p>
          <p className="text-xs text-platinum-600 mt-1">
            {ext.executionMetadata.atomicQueries} atomic queries • {ext.executionMetadata.ssotStatus}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10 font-medium">
            <Brain className="h-4 w-4" />
            AI Dashboard
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2 font-bold">
            <Cpu className="h-4 w-4" />
            Track Trends
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="AI Readiness Score"
          value={93}
          previousValue={91}
          icon={<Brain className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Tech Investment ($B)"
          value={15.2}
          previousValue={13.8}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Active Startups"
          value={2840}
          previousValue={2650}
          icon={<Rocket className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Digital Adoption %"
          value={87}
          previousValue={82}
          icon={<Cloud className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ai-ecosystem">AI Ecosystem</TabsTrigger>
          <TabsTrigger value="talent-jobs">Talent & Jobs</TabsTrigger>
          <TabsTrigger value="emerging-tech">Emerging Tech</TabsTrigger>
          <TabsTrigger value="investments">Investments</TabsTrigger>
          <TabsTrigger value="data">Full Data</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <GlassPanel title="AI Readiness Progress" description="UAE vs Global Average - 12 month trajectory">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <LineChart
                      data={aiReadinessData}
                      xAxisKey="month"
                      lines={[
                        { dataKey: 'score', name: 'UAE Score', color: CHART_COLORS.gold, curveType: 'monotone' },
                        { dataKey: 'globalAvg', name: 'Global Average', color: CHART_COLORS.platinum, curveType: 'monotone' },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Building className="h-5 w-5 text-gold" />
                        Sector Adoption Rates
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={adoptionData}
                        xAxisKey="sector"
                        bars={[{ dataKey: 'adoption', name: 'Adoption %', color: CHART_COLORS.gold }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-navy" />
                        Investment Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={investmentData}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">G42 Ecosystem Overview</CardTitle>
                    <CardDescription>Microsoft $1.5B partnership • $20B+ valuation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {g42Subsidiaries.map((sub, i) => (
                        <motion.div
                          key={sub.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="rounded-xl border border-platinum-700/50 bg-gradient-to-br from-platinum-900/30 to-navy-900/50 p-4 text-center hover:shadow-glass-lg transition-all duration-300"
                        >
                          <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl mb-3" style={{ backgroundColor: `${sub.color}20` }}>
                            <Cpu className="h-6 w-6" style={{ color: sub.color }} />
                          </div>
                          <p className="font-bold text-platinum-100">{sub.name}</p>
                          <p className="text-xs text-platinum-500">{sub.sector}</p>
                          <Badge variant="outline" className="mt-2 text-xs">{sub.valuation}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* AI Ecosystem Tab */}
        <TabsContent value="ai-ecosystem" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <GlassPanel title="AI Ecosystem Intelligence" description="G42, Regulation, Government Deployment">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Agentic AI Government Target</CardTitle>
                    <CardDescription>50% of federal operations by 2026</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {[
                        { label: 'Target', value: '50%', icon: Target },
                        { label: 'Timeline', value: '2 Years', icon: Clock },
                        { label: 'Directive', value: 'April 2026', icon: Zap },
                      ].map((item, i) => (
                        <div key={item.label} className="rounded-xl bg-slate-800/50 p-4 text-center">
                          <item.icon className="h-6 w-6 mx-auto text-gold mb-2" />
                          <p className="text-2xl font-bold text-gold">{item.value}</p>
                          <p className="text-xs text-platinum-500">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">AI Regulation Framework</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[250px]">
                        <div className="space-y-3">
                          {ext.entityRegistry.regulatoryInstruments.map((reg, i) => (
                            <motion.div
                              key={reg.instrument}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3"
                            >
                              <div>
                                <p className="text-sm font-medium text-platinum-200">{reg.instrument}</p>
                                <p className="text-xs text-platinum-500">{reg.authority} • {reg.year}</p>
                              </div>
                              <ChevronRight className="h-4 w-4 text-platinum-600" />
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">AI Regulatory Bodies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[250px]">
                        <div className="space-y-3">
                          {ext.entityRegistry.governmentBodies.map((body, i) => (
                            <motion.div
                              key={body.entity}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3"
                            >
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-gold">
                                <Building className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-platinum-200">{body.entity}</p>
                                <p className="text-xs text-platinum-500">{body.scope} • Est. {body.established}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">AI Adoption Leaders</CardTitle>
                    <CardDescription>Sector-by-sector implementation rate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={adoptionData.slice(0, 4)}
                      xAxisKey="sector"
                      bars={[
                        { dataKey: 'adoption', name: 'Adoption %', color: CHART_COLORS.navy },
                        { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.gold },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Talent & Jobs Tab */}
        <TabsContent value="talent-jobs" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <GlassPanel title="Tech Talent Pipeline" description="AI Jobs, Skills Gap, Automation Risk">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Automation Risk by Role</CardTitle>
                    <CardDescription>Job automatability index across sectors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={automationRiskData}
                      xAxisKey="role"
                      bars={[{ dataKey: 'risk', name: 'Risk %', color: CHART_COLORS.danger }]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Talent Demand vs Supply</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={talentGapData}
                        xAxisKey="role"
                        bars={[
                          { dataKey: 'demand', name: 'Demand %', color: CHART_COLORS.gold },
                          { dataKey: 'supply', name: 'Supply %', color: CHART_COLORS.navy },
                        ]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">IMD Talent Ranking</CardTitle>
                      <CardDescription>UAE ranked 9th globally • +8 positions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { label: 'Overall Ranking', value: '9th', sub: 'of 69 countries' },
                          { label: 'Readiness Factor', value: 'No. 1', sub: 'Global leader' },
                          { label: 'Appeal Factor', value: '12th', sub: 'Strong' },
                          { label: 'Quality of Life', value: '8th', sub: 'Top tier' },
                        ].map((item, i) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3"
                          >
                            <span className="text-sm text-platinum-400">{item.label}</span>
                            <div className="text-right">
                              <span className="text-lg font-bold text-gold">{item.value}</span>
                              <p className="text-xs text-platinum-500">{item.sub}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key AI Hiring Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {ext.aiJobs.aiHiring.map((metric, i) => (
                        <motion.div
                          key={metric.metric}
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="rounded-xl bg-slate-800/50 p-4 text-center"
                        >
                          <p className="text-2xl font-bold gradient-text-gold">{metric.value}</p>
                          <p className="text-xs text-platinum-500 mt-1">{metric.metric}</p>
                          {metric.change !== '-' && (
                            <Badge variant="outline" className="mt-2 text-xs text-emerald-400">
                              {metric.change}
                            </Badge>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Emerging Tech Tab */}
        <TabsContent value="emerging-tech" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <GlassPanel title="Emerging Technologies" description="Autonomous Vehicles, Quantum, Starlink, Digital Twins">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Autonomous Vehicles */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plane className="h-5 w-5 text-gold" />
                        Drone Delivery Market
                      </CardTitle>
                      <CardDescription>UAE autonomous last mile delivery CAGR 29.2%</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={droneMarketData}
                        xAxisKey="year"
                        areas={[{ dataKey: 'market', name: 'Market $M', color: CHART_COLORS.gold }]}
                        height={250}
                        showGrid={true}
                      />
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {ext.autonomousVehicles.dubaiDroneTargets.map((target) => (
                          <div key={target.target} className="rounded-lg bg-slate-800/50 p-3">
                            <p className="text-xs text-platinum-500">{target.target}</p>
                            <p className="text-lg font-bold text-gold">{target.value}</p>
                            <p className="text-xs text-platinum-600">{target.timeline}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Starlink UAE */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Satellite className="h-5 w-5 text-navy" />
                        Starlink UAE
                      </CardTitle>
                      <CardDescription>Launched March 18, 2026 • License through 2034</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-3">
                          {starlinkPlans.map((plan, i) => (
                            <motion.div
                              key={plan.plan}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3"
                            >
                              <div>
                                <p className="text-sm font-medium text-platinum-200">{plan.plan}</p>
                                <p className="text-xs text-platinum-500">{plan.speed}</p>
                              </div>
                              <span className="text-lg font-bold text-navy">{plan.price}</span>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Smart City Rankings */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Network className="h-5 w-5 text-emerald" />
                        Smart City Rankings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {smartCityData.map((city, i) => (
                          <motion.div
                            key={city.city}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="rounded-xl border border-platinum-700/50 bg-slate-800/50 p-4"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-lg font-bold text-platinum-100">{city.city}</p>
                                <p className="text-sm text-platinum-500">Previous: #{city.previousRank}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-3xl font-bold text-emerald-400">#{city.rank}</p>
                                <Badge variant="outline" className="text-emerald-400">{city.change}</Badge>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Robotics Market */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Bot className="h-5 w-5 text-purple" />
                        Robotics Market
                      </CardTitle>
                      <CardDescription>$445M platform market • 7.2% system integration CAGR</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={roboticsMarketData.map((seg) => ({
                          name: seg.segment,
                          value: seg.share,
                          color: Object.values(CHART_COLORS)[roboticsMarketData.indexOf(seg) % 12],
                        }))}
                        height={250}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Investments Tab */}
        <TabsContent value="investments" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <GlassPanel title="Tech Investment Landscape" description="G42, Semiconductors, Stargate UAE">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">G42 Geographic Expansion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-3">
                        {ext.g42.geographicExpansion.map((exp, i) => (
                          <motion.div
                            key={exp.location}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-gold">
                                <Globe className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-medium text-platinum-200">{exp.location}</p>
                                <p className="text-sm text-platinum-500">{exp.investment}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge variant={exp.status === 'Committed' ? 'default' : exp.status === 'Completed' ? 'success' : 'outline'}>
                                {exp.status}
                              </Badge>
                              <p className="text-xs text-platinum-600 mt-1">{exp.timeline}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">UAE-US AI Agreement</CardTitle>
                      <CardDescription>$1.4T investment commitment over 10 years</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { label: 'Investment', value: ext.semiconductors.uaeUSAIAgreement.uaeInvestmentCommitment },
                          { label: 'Timeline', value: ext.semiconductors.uaeUSAIAgreement.timeline },
                          { label: 'Nvidia Chips', value: ext.semiconductors.uaeUSAIAgreement.nvidiaChips },
                          { label: 'Status', value: ext.semiconductors.uaeUSAIAgreement.dealStatus },
                        ].map((item, i) => (
                          <div key={item.label} className="flex justify-between rounded-lg bg-slate-800/50 p-3">
                            <span className="text-sm text-platinum-500">{item.label}</span>
                            <span className="text-sm font-medium text-gold">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">TSMC UAE Evaluation</CardTitle>
                      <CardDescription>{ext.semiconductors.tsmcUAE.projectType}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { label: 'Status', value: ext.semiconductors.tsmcUAE.status },
                          { label: 'Project Type', value: ext.semiconductors.tsmcUAE.projectType },
                          { label: 'Discussions', value: ext.semiconductors.tsmcUAE.discussionsWith },
                        ].map((item, i) => (
                          <div key={item.label} className="flex justify-between rounded-lg bg-slate-800/50 p-3">
                            <span className="text-sm text-platinum-500">{item.label}</span>
                            <span className="text-sm font-medium text-platinum-200">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Full Data Tab */}
        <TabsContent value="data" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <GlassPanel title="Complete AI Technology Data" description="All KPIs, Entities, Sources from MD enrichment">
              <div className="space-y-6">
                {/* Summary KPIs Grid */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Activity className="h-5 w-5 text-gold" />
                      Summary KPIs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {ext.summaryKPIs.map((kpi, i) => (
                        <KPIGridItem key={kpi.kpi} kpi={kpi} index={i} />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Sentiment Analysis */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-emerald" />
                        Sentiment Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {ext.sentimentAnalysisSummary.map((item, i) => (
                          <SentimentBar key={item.topic} topic={item.topic} sentiment={item.overallSentiment} finding={item.keyFinding} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* UAE Relevance Heat Map */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-gold" />
                        UAE Relevance Heat Map
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-2">
                          {ext.uaeRelevanceHeatMap.map((item, i) => {
                            const priorityColor = item.priority === 'P0' ? 'border-l-red-500' : item.priority === 'P1' ? 'border-l-orange-500' : 'border-l-gold'
                            return (
                              <motion.div
                                key={item.topic}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className={`flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border-l-4 ${priorityColor}`}
                              >
                                <span className="text-sm font-medium text-platinum-200">{item.topic}</span>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="text-xs">{item.priority}</Badge>
                                  <Badge variant={item.relevance === 'critical' ? 'destructive' : item.relevance === 'high' ? 'default' : 'secondary'}>
                                    {item.relevance}
                                  </Badge>
                                </div>
                              </motion.div>
                            )
                          })}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>

                {/* Source Credibility Matrix */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Award className="h-5 w-5 text-gold" />
                      Source Credibility Matrix
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {ext.sourceCredibilityMatrix.map((source, i) => (
                        <SourceCredibilityRow
                          key={source.source}
                          source={source.source}
                          tier={source.tier}
                          type={source.type}
                          reliability={source.reliability}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Entity Registry */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Entity Registry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="bodies" className="space-y-4">
                      <TabsList className="glass-panel">
                        <TabsTrigger value="bodies">Government Bodies</TabsTrigger>
                        <TabsTrigger value="companies">Companies</TabsTrigger>
                        <TabsTrigger value="regulations">Regulations</TabsTrigger>
                      </TabsList>
                      <TabsContent value="bodies">
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {ext.entityRegistry.governmentBodies.map((body) => (
                            <EntityCard key={body.entity} entity={body.entity} type="body" />
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="companies">
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {ext.entityRegistry.companies.map((company) => (
                            <EntityCard key={company.company} entity={company.company} type="company" />
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="regulations">
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {ext.entityRegistry.regulatoryInstruments.map((reg) => (
                            <EntityCard key={reg.instrument} entity={reg.instrument} type="regulation" />
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Missing icon component
function Target({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <circle cx="12" cy="12" r="6" strokeWidth={2} />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  )
}

function Clock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
    </svg>
  )
}
