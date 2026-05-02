// @ts-nocheck
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassCard, GlassPanel } from '@/components/ui/glass-panel'
import { MetricCard } from '@/components/dashboard/metric-card'
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
  TrendingUp,
  Globe,
  Users,
  Building,
  Zap,
  Brain,
  Cloud,
  Shield,
  Award,
  AlertTriangle,
  Satellite,
  Bot,
  CircuitBoard,
  Plane,
  Network,
  Database,
  Lock,
  Target,
  Clock,
  Eye,
  Radio,
  Smartphone,
  CheckCircle,
  XCircle,
  MinusCircle,
  ChevronRight,
  Activity,
  Scale,
  Briefcase,
  Car,
  Atom,
  Wifi,
  FileWarning,
  Landmark,
  PersonStanding,
  Factory,
  Building2,
} from 'lucide-react'
import { aiTechnologyData } from '@/lib/data-loader/ai-technology-data'

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
      staggerChildren: 0.08,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

const getRelevanceColor = (relevance: string) => {
  switch (relevance) {
    case 'critical': return 'text-red-400 border-red-400/50'
    case 'high': return 'text-gold-700 border-gold-700/50'
    case 'medium': return 'text-navy-400 border-navy-400/50'
    default: return 'text-platinum-400 border-platinum-400/50'
  }
}

const getSentimentColor = (sentiment: string) => {
  if (sentiment.toLowerCase().includes('very positive') || sentiment.toLowerCase().includes('positive')) return 'bg-gradient-emerald'
  if (sentiment.toLowerCase().includes('mixed') || sentiment.toLowerCase().includes('cautious')) return 'bg-gradient-gold'
  if (sentiment.toLowerCase().includes('negative')) return 'bg-gradient-red'
  return 'bg-gradient-platinum'
}

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'critical': return 'bg-red-500'
    case 'high': return 'bg-orange-500'
    case 'medium': return 'bg-amber-500'
    default: return 'bg-emerald-500'
  }
}

const getTierColor = (tier: number) => {
  switch (tier) {
    case 0: return 'text-emerald-400'
    case 1: return 'text-navy-400'
    case 2: return 'text-gold-700'
    default: return 'text-platinum-500'
  }
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

function KPIGridItem({ kpi, index }: { kpi: typeof aiTechnologyData.summaryKPIs[0]; index: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-panel p-4 rounded-xl hover:shadow-glass-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-platinum-500 font-medium truncate">{kpi.kpi}</p>
          <p className="text-2xl font-bold gradient-text-gold-700 mt-1">{kpi.value}</p>
          <p className="text-xs text-platinum-600 mt-1">
            {kpi.trend !== '-' ? `Trend: ${kpi.trend}` : 'Stable'}
          </p>
        </div>
        <Badge variant="outline" className={`text-xs ml-2 ${getRelevanceColor(kpi.uaeRelevance)}`}>
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
      <span className="text-sm font-medium text-platinum-200 line-clamp-2">{entity}</span>
    </motion.div>
  )
}

function SentimentBar({ topic, sentiment, finding }: { topic: string; sentiment: string; finding: string }) {
  return (
    <motion.div variants={fadeInUp} className="glass-panel p-4 rounded-xl">
      <div className="flex items-start gap-3">
        <div className={`w-1.5 h-12 rounded-full ${getSentimentColor(sentiment)}`} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gold-700 truncate">{topic}</p>
          <p className="text-xs text-platinum-400 mt-1">{sentiment}</p>
          <p className="text-xs text-platinum-500 mt-1 italic line-clamp-1">{finding}</p>
        </div>
      </div>
    </motion.div>
  )
}

function SourceCredibilityRow({ source, tier, type, reliability }: { source: string; tier: number; type: string; reliability: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-platinum-800/50 last:border-0">
      <div className="min-w-0 flex-1">
        <p className="text-sm text-platinum-200 truncate">{source}</p>
        <p className="text-xs text-platinum-500">{type}</p>
      </div>
      <div className="text-right ml-2">
        <Badge variant="outline" className={`text-xs ${getTierColor(tier)}`}>Tier {tier}</Badge>
        <p className="text-xs text-platinum-500 mt-1">{reliability}</p>
      </div>
    </div>
  )
}

function HeatMapRow({ topic, relevance, priority }: { topic: string; relevance: string; priority: string }) {
  const priorityColor = priority === 'P0' ? 'border-l-red-500' : priority === 'P1' ? 'border-l-orange-500' : 'border-l-gold'

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className={`flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border-l-4 ${priorityColor}`}
    >
      <span className="text-sm font-medium text-platinum-200 truncate">{topic}</span>
      <div className="flex items-center gap-2 ml-2">
        <Badge variant="outline" className="text-xs">{priority}</Badge>
        <Badge variant={relevance === 'critical' ? 'destructive' : relevance === 'high' ? 'default' : 'secondary'} className="text-xs">
          {relevance}
        </Badge>
      </div>
    </motion.div>
  )
}

// ============================================================================
// SECTION: AI REGULATION
// ============================================================================

function AIRegulationSection() {
  const data = aiTechnologyData.aiRegulation

  return (
    <GlassPanel
      title="AI Regulation Framework"
      description="Comprehensive governance: laws, bodies, strategies, and enforcement"
      icon={<Scale className="h-5 w-5 text-gold-700" />}
    >
      <div className="space-y-6">
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Key Laws */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-gold-700" />
                Key Legislation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[280px]">
                <div className="space-y-2">
                  {data.keyLaws.map((law, i) => (
                    <motion.div
                      key={law.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-platinum-200 truncate">{law.name}</p>
                        <p className="text-xs text-platinum-500">{law.type} • {law.year}</p>
                      </div>
                      <Badge variant="outline" className={`text-xs ml-2 ${getRelevanceColor(law.uaeRelevance)}`}>
                        {law.uaeRelevance}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Regulatory Bodies */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building className="h-5 w-5 text-gold-700" />
                Regulatory Bodies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[280px]">
                <div className="space-y-2">
                  {data.regulatoryBodies.map((body, i) => (
                    <motion.div
                      key={body.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 rounded-lg bg-platinum-800/50 p-3"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-700/20 text-gold-700">
                        <Building className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-platinum-200 truncate">{body.name}</p>
                        <p className="text-xs text-platinum-500">{body.scope} • {body.type}</p>
                      </div>
                      <Badge variant="outline" className={`text-xs ${getRelevanceColor(body.uaeRelevance)}`}>
                        {body.uaeRelevance}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Timeline 2025-2026 */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-gold-700" />
              2025-2026 Developments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.timeline2025_2026.map((event, i) => (
                <motion.div
                  key={event.date}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-platinum-800/50 p-4"
                >
                  <p className="text-xs text-gold-700 font-medium">{event.date}</p>
                  <p className="text-sm font-medium text-platinum-200 mt-2">{event.development}</p>
                  <p className="text-xs text-platinum-500 mt-1">{event.impact}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Penalties */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Penalties & Enforcement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {data.penalties.map((penalty, i) => (
                <motion.div
                  key={penalty.violation}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center"
                >
                  <AlertTriangle className="h-6 w-6 mx-auto text-red-400 mb-2" />
                  <p className="text-lg font-bold text-red-400">{penalty.penalty}</p>
                  <p className="text-sm text-platinum-300 mt-1">{penalty.violation}</p>
                  <p className="text-xs text-platinum-500 mt-1">{penalty.lawSource}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// SECTION: G42 ECOSYSTEM
// ============================================================================

function G42Section() {
  const data = aiTechnologyData.g42

  return (
    <GlassPanel
      title="G42 AI Ecosystem"
      description="Microsoft $1.5B partnership • $20B+ valuation"
      icon={<Rocket className="h-5 w-5 text-gold-700" />}
    >
      <div className="space-y-6">
        {/* Overview Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Ecosystem Valuation"
            value="$20B+"
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="gold"
            status="success"
          />
          <MetricCard
            title="Microsoft Investment"
            value="$1.5B"
            icon={<Building className="h-6 w-6" />}
            gradient="denim"
            status="success"
          />
          <MetricCard
            title="Founded"
            value="2018"
            icon={<Clock className="h-6 w-6" />}
            gradient="emerald"
          />
          <MetricCard
            title="Chairman"
            value="Sheikh Tahnoon"
            icon={<PersonStanding className="h-6 w-6" />}
            gradient="indigo"
          />
        </div>

        {/* Subsidiaries */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Cpu className="h-5 w-5 text-gold-700" />
              G42 Subsidiaries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {data.subsidiaries.map((sub, i) => (
                <motion.div
                  key={sub.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-platinum-700/50 bg-gradient-to-br from-platinum-900/30 to-navy-900/50 p-4 text-center hover:shadow-glass-lg transition-all duration-300"
                >
                  <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl mb-3 bg-gold-700/20">
                    <Cpu className="h-6 w-6 text-gold-700" />
                  </div>
                  <p className="font-bold text-platinum-100">{sub.name}</p>
                  <p className="text-xs text-platinum-500">{sub.sector}</p>
                  <Badge variant="outline" className="mt-2 text-xs">{sub.ipoStatus}</Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Geographic Expansion */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="h-5 w-5 text-gold-700" />
              Geographic Expansion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[250px]">
              <div className="space-y-3">
                {data.geographicExpansion.map((exp, i) => (
                  <motion.div
                    key={exp.location}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-700/20 text-gold-700">
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

        {/* Key Products */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Key Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { name: 'Jais', type: 'Arabic LLM', detail: '13B parameters' },
                { name: 'Condor Galaxy', type: 'Supercomputing', detail: 'AI workloads' },
                { name: '42XFund', type: 'Investment Fund', detail: '$10 billion' },
              ].map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-platinum-800/50 p-4 text-center"
                >
                  <Brain className="h-8 w-8 mx-auto text-gold-700 mb-2" />
                  <p className="font-bold text-platinum-100">{product.name}</p>
                  <p className="text-xs text-platinum-500">{product.type}</p>
                  <p className="text-sm text-gold-700 mt-1">{product.detail}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// SECTION: AI JOBS
// ============================================================================

function AIJobsSection() {
  const data = aiTechnologyData.aiJobs

  const automationChartData = data.automationExposure.map(item => ({
    role: item.roleCategory.split(' ')[0],
    risk: parseFloat(item.automatability.replace('%', '')),
    fullRole: item.roleCategory,
  }))

  const aiHiringChartData = data.aiHiring.map(item => ({
    metric: item.metric.split(' ')[0],
    value: parseFloat(item.value.replace(/[^0-9]/g, '')) || 0,
    fullMetric: item.metric,
  }))

  return (
    <GlassPanel
      title="AI & Labor Market"
      description="Automation exposure, hiring trends, and skill evolution"
      icon={<Briefcase className="h-5 w-5 text-gold-700" />}
    >
      <div className="space-y-6">
        {/* Key Metrics */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Job Automatability Index"
            value="28.53%"
            icon={<Activity className="h-6 w-6" />}
            gradient="gold"
          />
          <MetricCard
            title="AI Hiring Growth"
            value="48%"
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="emerald"
            status="success"
          />
          <MetricCard
            title="On-Site Work Required"
            value="89.7%"
            icon={<Building className="h-6 w-6" />}
            gradient="denim"
          />
          <MetricCard
            title="Employees Using AI"
            value="80%+"
            icon={<Brain className="h-6 w-6" />}
            gradient="purple"
            status="success"
          />
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Automation Risk by Role</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={automationChartData}
                xAxisKey="role"
                bars={[{ dataKey: 'risk', name: 'Risk %', color: CHART_COLORS.danger }]}
                height={280}
                showGrid={true}
              />
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">AI Hiring Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={aiHiringChartData}
                xAxisKey="metric"
                bars={[{ dataKey: 'value', name: 'Value', color: CHART_COLORS.emerald }]}
                height={280}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </div>

        {/* Labor Market KPIs */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Labor Market KPIs</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              <div className="space-y-2">
                {data.laborMarketKPIs.map((kpi, i) => (
                  <div key={kpi.metric} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                    <span className="text-sm text-platinum-300">{kpi.metric}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gold-700">{kpi.value}</span>
                      <Badge variant="outline" className={`text-xs ${getRelevanceColor(kpi.uaeRelevance)}`}>
                        {kpi.uaeRelevance}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Reskilling Initiatives */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Reskilling Initiatives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {data.reskillingInitiatives.map((init, i) => (
                <motion.div
                  key={init.initiative}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-platinum-800/50 p-4 text-center"
                >
                  <Award className="h-6 w-6 mx-auto text-gold-700 mb-2" />
                  <p className="text-lg font-bold text-gold-700">{init.scale}</p>
                  <p className="text-sm text-platinum-300 mt-1">{init.initiative}</p>
                  <Badge variant="outline" className={`mt-2 text-xs ${getRelevanceColor(init.uaeRelevance)}`}>
                    {init.uaeRelevance}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// SECTION: AUTONOMOUS VEHICLES
// ============================================================================

function AutonomousVehiclesSection() {
  const data = aiTechnologyData.autonomousVehicles

  const marketGrowthData = [
    { year: '2024', market: 5.8 },
    { year: '2025', market: 9.2 },
    { year: '2026', market: 14.5 },
    { year: '2027', market: 19.1 },
    { year: '2028', market: 23.0 },
    { year: '2030', market: 26.2 },
  ]

  return (
    <GlassPanel
      title="Autonomous Vehicles & Drones"
      description="Dubai drone delivery targets, eVTOL, and market projections"
      icon={<Car className="h-5 w-5 text-gold-700" />}
    >
      <div className="space-y-6">
        {/* Drone Targets */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Plane className="h-5 w-5 text-gold-700" />
              Dubai Drone Delivery Targets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.dubaiDroneTargets.map((target, i) => (
                <motion.div
                  key={target.target + target.timeline}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-platinum-800/50 p-4 text-center"
                >
                  <p className="text-3xl font-bold text-gold-700">{target.value}</p>
                  <p className="text-sm text-platinum-400 mt-1">{target.target}</p>
                  <p className="text-xs text-platinum-500 mt-1">{target.timeline} • {target.status}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Growth Chart */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">UAE Last Mile Delivery Market Growth</CardTitle>
            <CardDescription>CAGR 29.2% • $5.8M (2024) to $26.2M (2030)</CardDescription>
          </CardHeader>
          <CardContent>
            <AreaChart
              data={marketGrowthData}
              xAxisKey="year"
              areas={[{ dataKey: 'market', name: 'Market $M', color: CHART_COLORS.gold }]}
              height={250}
              showGrid={true}
            />
          </CardContent>
        </Card>

        {/* Keeta Drone Details */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Keeta Drone Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-platinum-800/50 p-4">
                <Clock className="h-5 w-5 text-gold-700 mb-2" />
                <p className="text-sm text-platinum-500">Delivery Speed</p>
                <p className="text-lg font-bold text-platinum-200">{data.keetaDrone.deliverySpeed}</p>
              </div>
              <div className="rounded-xl bg-platinum-800/50 p-4">
                <MapPin className="h-5 w-5 text-gold-700 mb-2" />
                <p className="text-sm text-platinum-500">Coverage Areas</p>
                <p className="text-lg font-bold text-platinum-200">{data.keetaDrone.coverageAreas}</p>
              </div>
              <div className="rounded-xl bg-platinum-800/50 p-4">
                <CheckCircle className="h-5 w-5 text-emerald-400 mb-2" />
                <p className="text-sm text-platinum-500">DCAA License</p>
                <p className="text-lg font-bold text-platinum-200">{data.keetaDrone.dcaaLicense}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Smart City Targets */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Dubai Smart City Targets (2030)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gold-500/30 bg-gold-500/10 p-6 text-center">
                <Target className="h-8 w-8 mx-auto text-gold-700 mb-2" />
                <p className="text-4xl font-bold text-gold-700">60%</p>
                <p className="text-sm text-platinum-400 mt-2">Last-mile deliveries by autonomous systems</p>
              </div>
              <div className="rounded-xl border border-gold-500/30 bg-gold-500/10 p-6 text-center">
                <Car className="h-8 w-8 mx-auto text-gold-700 mb-2" />
                <p className="text-4xl font-bold text-gold-700">25%</p>
                <p className="text-sm text-platinum-400 mt-2">Transportation autonomous</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// SECTION: QUANTUM COMPUTING
// ============================================================================

function QuantumSection() {
  const data = aiTechnologyData.quantumComputing

  return (
    <GlassPanel
      title="Quantum Computing"
      description="Top 5 global ranking • Quantum-resistant cryptography regulation"
      icon={<Atom className="h-5 w-5 text-gold-700" />}
    >
      <div className="space-y-6">
        {/* Key Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard
            title="Global Ranking"
            value="Top 5"
            icon={<Globe className="h-6 w-6" />}
            gradient="gold"
            status="success"
          />
          <MetricCard
            title="UAE + Qatar Investment"
            value="$1.6B"
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="emerald"
            status="success"
          />
          <MetricCard
            title="Research Center"
            value="World-class"
            icon={<Building className="h-6 w-6" />}
            gradient="purple"
          />
        </div>

        {/* Advantages */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">UAE Quantum Advantages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.advantages.map((adv, i) => (
                <motion.div
                  key={adv.advantage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl bg-platinum-800/50 p-4"
                >
                  <Zap className="h-5 w-5 text-gold-700 mb-2" />
                  <p className="font-medium text-platinum-200">{adv.advantage}</p>
                  <p className="text-xs text-platinum-500 mt-1">{adv.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cryptography Regulation */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-gold-700" />
              Cryptography Regulation (2024)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6">
              <Lock className="h-8 w-8 mx-auto text-emerald-400 mb-3" />
              <p className="text-center text-lg font-medium text-platinum-200">{data.cryptographyRegulation.requirement}</p>
              <p className="text-center text-sm text-platinum-500 mt-2">Mandatory for government and critical sectors</p>
            </div>
          </CardContent>
        </Card>

        {/* First Adopters */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Expected First Adopters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {data.expectedFirstAdopters.map((adopter, i) => (
                <motion.div
                  key={adopter.sector}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 rounded-lg bg-platinum-800/50 p-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy-950 font-bold">
                    {adopter.priority}
                  </div>
                  <span className="text-platinum-200">{adopter.sector}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// SECTION: STARLINK UAE
// ============================================================================

function StarlinkSection() {
  const data = aiTechnologyData.starlinkUAE

  return (
    <GlassPanel
      title="Starlink UAE"
      description="Launched March 18, 2026 • License through 2034"
      icon={<Wifi className="h-5 w-5 text-gold-700" />}
    >
      <div className="space-y-6">
        {/* Launch Info */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Official Launch"
            value="March 18, 2026"
            icon={<Rocket className="h-6 w-6" />}
            gradient="gold"
          />
          <MetricCard
            title="License Validity"
            value="Through 2034"
            icon={<FileWarning className="h-6 w-6" />}
            gradient="denim"
            status="success"
          />
          <MetricCard
            title="Download Speed"
            value="50-400 Mbps"
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="emerald"
          />
          <MetricCard
            title="Latency"
            value="20-40ms"
            icon={<Activity className="h-6 w-6" />}
            gradient="purple"
          />
        </div>

        {/* Plans */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Available Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="space-y-3">
                {data.plans.map((plan, i) => (
                  <motion.div
                    key={plan.plan}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                  >
                    <div>
                      <p className="font-medium text-platinum-200">{plan.plan}</p>
                      <p className="text-xs text-platinum-500">{plan.downloadSpeed}</p>
                    </div>
                    <span className="text-lg font-bold text-navy-500">{plan.monthly}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Hardware */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Hardware Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.hardware.map((hw, i) => (
                <motion.div
                  key={hw.kit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-platinum-800/50 p-4"
                >
                  <Satellite className="h-6 w-6 text-gold-700 mb-2" />
                  <p className="font-bold text-gold-700">{hw.price}</p>
                  <p className="text-sm text-platinum-300 mt-1">{hw.kit}</p>
                  <p className="text-xs text-platinum-500 mt-1">{hw.capability}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Regional Coverage */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Regional Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {data.regionalCoverage.map((region, i) => (
                <div key={region.country} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-2">
                  <span className="text-sm text-platinum-300">{region.country}</span>
                  <Badge variant={region.status.includes('Live') || region.status.includes('Active') ? 'success' : 'outline'} className="text-xs">
                    {region.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// SECTION: DEEPFAKE
// ============================================================================

function DeepfakeSection() {
  const data = aiTechnologyData.deepfake

  return (
    <GlassPanel
      title="Deepfake & AI Content"
      description="Regulatory status, detection technologies, and global statistics"
      icon={<Eye className="h-5 w-5 text-gold-700" />}
    >
      <div className="space-y-6">
        {/* Regulatory Status */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-gold-700" />
              UAE Deepfake Regulatory Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-platinum-800/50 p-4">
                <p className="text-sm text-platinum-500">Specific Deepfake Law</p>
                <p className="text-lg font-medium text-platinum-300">None</p>
              </div>
              <div className="rounded-xl bg-platinum-800/50 p-4">
                <p className="text-sm text-platinum-500">Applicable Law</p>
                <p className="text-lg font-medium text-gold-700">Federal Law No. 34/2021</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* March 2026 Warning */}
        <Card className="glass-card border-orange-500/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-400" />
              UAE Cyber Security Council Warning (March 2026)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-4">
              <p className="text-lg font-medium text-orange-400">{data.cyberSecurityCouncilWarning.content}</p>
              <p className="text-sm text-platinum-400 mt-2">Action: {data.cyberSecurityCouncilWarning.action}</p>
            </div>
          </CardContent>
        </Card>

        {/* Global Statistics */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Global Deepfake Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.globalStats.map((stat, i) => (
                <motion.div
                  key={stat.metric}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl bg-platinum-800/50 p-4 text-center"
                >
                  <p className="text-2xl font-bold text-red-400">{stat.value}</p>
                  <p className="text-xs text-platinum-500 mt-1">{stat.metric}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detection Technologies */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Detection Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {data.detectionTechnologies.map((tech, i) => (
                <motion.div
                  key={tech.technology}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-platinum-800/50 p-4 text-center"
                >
                  <Eye className="h-6 w-6 mx-auto text-gold-700 mb-2" />
                  <p className="font-medium text-platinum-200">{tech.technology}</p>
                  <p className="text-xs text-platinum-500 mt-1">{tech.description}</p>
                  <Badge variant="outline" className="mt-2 text-xs">{tech.status}</Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// SECTION: AI GOVERNMENT SERVICES
// ============================================================================

function AIGovernmentSection() {
  const data = aiTechnologyData.aiGovernment

  return (
    <GlassPanel
      title="AI Government Services"
      description="50% agentic AI deployment target • World-first regulatory ecosystem"
      icon={<Building className="h-5 w-5 text-gold-700" />}
    >
      <div className="space-y-6">
        {/* Agentic AI Target */}
        <Card className="glass-card border-gold-500/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-gold-700" />
              Agentic AI Government Target
            </CardTitle>
            <CardDescription>Directive: President Mohamed bin Zayed Al Nahyan • April 24, 2026</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl bg-gold-500/10 p-6 text-center border border-gold-500/30">
                <p className="text-5xl font-bold text-gold-700">50%</p>
                <p className="text-sm text-platinum-400 mt-2">of federal operations</p>
              </div>
              <div className="rounded-xl bg-platinum-800/50 p-6 text-center">
                <Clock className="h-8 w-8 mx-auto text-gold-700 mb-2" />
                <p className="text-lg font-bold text-platinum-200">Within 2 Years</p>
                <p className="text-xs text-platinum-500 mt-1">Timeline</p>
              </div>
              <div className="rounded-xl bg-platinum-800/50 p-6 text-center">
                <CheckCircle className="h-8 w-8 mx-auto text-emerald-400 mb-2" />
                <p className="text-lg font-bold text-platinum-200">April 24, 2026</p>
                <p className="text-xs text-platinum-500 mt-1">Announced</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Regulatory Ecosystem */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">AI-Powered Regulatory Ecosystem (April 2025)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Award className="h-10 w-10 text-emerald-400" />
                <div>
                  <p className="text-lg font-medium text-emerald-400">World-First Achievement</p>
                  <p className="text-sm text-platinum-400">AI-powered regulatory intelligence ecosystem</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-platinum-800/50 p-3">
                  <p className="text-xs text-platinum-500">Function</p>
                  <p className="text-sm text-platinum-200">{data.aiRegulatoryEcosystem?.function}</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-3">
                  <p className="text-xs text-platinum-500">Efficiency Gain</p>
                  <p className="text-2xl font-bold text-emerald-400">{data.aiRegulatoryEcosystem.efficiencyGain}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Architecture */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Technical Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.technicalArchitecture.map((arch, i) => (
                <motion.div
                  key={arch.component}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg bg-platinum-800/50 p-3"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-platinum-200">{arch.component}</p>
                    <Badge variant="outline" className={`text-xs ${getRelevanceColor(arch.uaeRelevance)}`}>
                      {arch.uaeRelevance}
                    </Badge>
                  </div>
                  <p className="text-xs text-platinum-500 mt-1">{arch.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Challenges */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Challenges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.challenges.map((challenge, i) => (
                <div key={challenge.challenge} className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3">
                  <AlertTriangle className="h-4 w-4 text-orange-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-platinum-200">{challenge.challenge}</p>
                    <p className="text-xs text-platinum-500">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// SECTION: TALENT / BRAIN DRAIN
// ============================================================================

function TalentSection() {
  const data = aiTechnologyData.talent

  const radarData = [
    { subject: 'Overall', A: 9, fullMark: 69 },
    { subject: 'Readiness', A: 1, fullMark: 69 },
    { subject: 'Appeal', A: 12, fullMark: 69 },
    { subject: 'Quality', A: 8, fullMark: 69 },
    { subject: 'Health', A: 3, fullMark: 69 },
  ]

  return (
    <GlassPanel
      title="Talent & Brain Drain"
      description="IMD Ranking 9th globally • Brain drain reversal in effect"
      icon={<PersonStanding className="h-5 w-5 text-gold-700" />}
    >
      <div className="space-y-6">
        {/* Key Metrics */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="IMD Global Ranking"
            value="9th"
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="gold"
            status="success"
          />
          <MetricCard
            title="Readiness Factor"
            value="No. 1"
            icon={<CheckCircle className="h-6 w-6" />}
            gradient="emerald"
            status="success"
          />
          <MetricCard
            title="Global Mobility Rank"
            value="2nd"
            icon={<Globe className="h-6 w-6" />}
            gradient="denim"
            status="success"
          />
          <MetricCard
            title="AI Talent Ranking"
            value="15th"
            icon={<Brain className="h-6 w-6" />}
            gradient="purple"
          />
        </div>

        {/* Ranking Chart */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">IMD Talent Rankings (of 69 countries)</CardTitle>
          </CardHeader>
          <CardContent>
            <RadarChart
              data={radarData}
              metrics={[{ dataKey: 'A', name: 'UAE Rank (lower is better)', color: CHART_COLORS.gold }]}
              height={300}
            />
          </CardContent>
        </Card>

        {/* IMD Rankings */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">IMD Rankings Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.imdRanking.map((item, i) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl bg-platinum-800/50 p-4 text-center"
                >
                  <p className="text-3xl font-bold text-gold-700">{item.value}</p>
                  <p className="text-sm text-platinum-400 mt-1">{item.metric}</p>
                  {item.change && <Badge variant="success" className="mt-2 text-xs">+{item.change.split(' ')[1]}</Badge>}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Brain Drain Reversal */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Brain Drain Reversal Effect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.brainDrainReversal.map((phase, i) => (
                <div key={phase.phase} className="rounded-lg bg-platinum-800/50 p-4">
                  <p className="text-sm font-medium text-gold-700 mb-2">{phase.phase}</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <MinusCircle className="h-4 w-4 text-red-400" />
                      <span className="text-xs text-platinum-400">{phase.beforeStargate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs text-platinum-300">{phase.afterStargate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Appeal Factors */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Appeal Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.appealFactors.map((factor, i) => (
                <motion.div
                  key={factor.component}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-platinum-800/50 p-4 text-center"
                >
                  <p className="text-3xl font-bold text-emerald-400">{factor.value}</p>
                  <p className="text-sm text-platinum-400 mt-1">{factor.component}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// SECTION: SEMICONDUCTORS
// ============================================================================

function SemiconductorsSection() {
  const data = aiTechnologyData.semiconductors

  return (
    <GlassPanel
      title="Semiconductors"
      description="TSMC evaluation • US chip exports approved • $1.4T UAE-US agreement"
      icon={<Cpu className="h-5 w-5 text-gold-700" />}
    >
      <div className="space-y-6">
        {/* TSMC UAE */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Factory className="h-5 w-5 text-gold-700" />
              TSMC UAE Evaluation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.tsmcUAE.map((item, i) => (
                <div key={item.attribute} className="rounded-lg bg-platinum-800/50 p-3">
                  <p className="text-xs text-platinum-500">{item.attribute}</p>
                  <p className="text-sm font-medium text-platinum-200 mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* US Chip Approvals */}
        <Card className="glass-card border-emerald-500/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              US Chip Export Approvals (November 2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.usChipApprovals.map((approval, i) => (
                <motion.div
                  key={approval.approval + approval.recipient}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg bg-platinum-800/50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-platinum-200">{approval.recipient}</p>
                      <p className="text-xs text-platinum-500">{approval.detail}</p>
                    </div>
                    <Badge variant="success" className="text-xs">Approved</Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* UAE-US AI Agreement */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">UAE-US AI Agreement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.uaeUSAIAgreement.slice(0, 4).map((item, i) => (
                <div key={item.attribute} className="rounded-lg bg-platinum-800/50 p-4 text-center">
                  <p className="text-xs text-platinum-500">{item.attribute}</p>
                  <p className="text-lg font-bold text-gold-700 mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Major Deals */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Major Deals (May 2025)</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[250px]">
              <div className="space-y-3">
                {data.majorDeals.map((deal, i) => (
                  <motion.div
                    key={deal.company}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-lg bg-platinum-800/50 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-platinum-200">{deal.company}</p>
                        <p className="text-xs text-platinum-500">{deal.deal}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gold-700">{deal.value}</p>
                        {deal.jobsCreated && <p className="text-xs text-platinum-500">{deal.jobsCreated}</p>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// SECTION: ROBOTICS
// ============================================================================

function RoboticsSection() {
  const data = aiTechnologyData.robotics

  const marketSegmentationData = data.marketSegmentation.slice(0, 6).map((seg, i) => ({
    segment: seg.segment.split(' ')[0],
    share: parseFloat(seg.share) || 0,
    fullSegment: seg.segment,
  }))

  return (
    <GlassPanel
      title="Robotics"
      description="$445M platform market • World's largest combat robotics programme"
      icon={<Bot className="h-5 w-5 text-gold-700" />}
    >
      <div className="space-y-6">
        {/* Key Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Platform Market"
            value="$445M"
            icon={<Rocket className="h-6 w-6" />}
            gradient="gold"
          />
          <MetricCard
            title="System Integration"
            value="$258.7M"
            icon={<CircuitBoard className="h-6 w-6" />}
            gradient="denim"
          />
          <MetricCard
            title="CAGR"
            value="7.2%"
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="emerald"
            status="success"
          />
          <MetricCard
            title="Combat Program"
            value="World's Largest"
            icon={<Shield className="h-6 w-6" />}
            gradient="purple"
            status="success"
          />
        </div>

        {/* Market Segmentation Chart */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Market Segmentation</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart
              data={marketSegmentationData.map((seg, i) => ({
                name: seg.fullSegment,
                value: seg.share,
                color: Object.values(CHART_COLORS)[i % 12],
              }))}
              height={300}
              showLegend={true}
            />
          </CardContent>
        </Card>

        {/* Sector Projections */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Sector Projections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {data.sectorProjections.map((sector, i) => (
                <motion.div
                  key={sector.sector}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-platinum-800/50 p-4 text-center"
                >
                  <p className="text-2xl font-bold text-gold-700">{sector.projection}</p>
                  <p className="text-sm text-platinum-400 mt-1">{sector.sector}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Military Robotics */}
        <Card className="glass-card border-red-500/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-400" />
              Military Robotics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 mb-4">
              <p className="text-center font-bold text-red-400">{data.militaryRobotics.combatProgram.claim}</p>
              <p className="text-center text-xs text-platinum-500 mt-1">MoU Date: {data.militaryRobotics.combatProgram.mouDate}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.militaryRobotics.milremEquipment.map((equip, i) => (
                <div key={equip.equipment} className="rounded-lg bg-platinum-800/50 p-3">
                  <p className="text-sm font-medium text-platinum-200">{equip.equipment}</p>
                  <p className="text-xs text-platinum-500">Qty: {equip.quantity}</p>
                  <p className="text-xs text-platinum-400 mt-1">{equip.capability}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Robot Prediction */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Robot Prediction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl bg-platinum-800/50 p-6 text-center">
              <p className="text-4xl font-bold text-gold-700">20+ Billion</p>
              <p className="text-lg text-platinum-400 mt-2">Robots serving humanity by 2050</p>
              <p className="text-xs text-platinum-500 mt-2">— {data.robotPredictions.source}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// SECTION: DIGITAL TWIN
// ============================================================================

function DigitalTwinSection() {
  const data = aiTechnologyData.digitalTwin

  const marketGrowthData = [
    { year: '2025', value: 228 },
    { year: '2026', value: 271 },
    { year: '2027', value: 322 },
    { year: '2028', value: 384 },
    { year: '2029', value: 456 },
    { year: '2030', value: 543 },
    { year: '2031', value: 645 },
    { year: '2032', value: 772 },
  ]

  return (
    <GlassPanel
      title="Digital Twin"
      description="Dubai 4th globally • $228M market • 19.03% CAGR"
      icon={<Building2 className="h-5 w-5 text-gold-700" />}
    >
      <div className="space-y-6">
        {/* Smart City Rankings */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Network className="h-5 w-5 text-gold-700" />
              Smart City Rankings (2025)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.smartCityRankings.map((city, i) => (
                <motion.div
                  key={city.city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-platinum-700/50 bg-platinum-800/50 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-platinum-100">{city.city}</p>
                      <p className="text-sm text-platinum-500">Previous: #{city.previousRank}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-emerald-400">#{city.globalRank}</p>
                      <Badge variant="outline" className="text-emerald-400">{city.change}</Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Growth Chart */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Urban Digital Twin Market Growth</CardTitle>
            <CardDescription>$228M (2025) to $772M (2032) • 19.03% CAGR</CardDescription>
          </CardHeader>
          <CardContent>
            <AreaChart
              data={marketGrowthData}
              xAxisKey="year"
              areas={[{ dataKey: 'value', name: 'Market $M', color: CHART_COLORS.gold }]}
              height={250}
              showGrid={true}
            />
          </CardContent>
        </Card>

        {/* Key Projects */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Key Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[250px]">
              <div className="space-y-2">
                {data.keyProjects.map((project, i) => (
                  <motion.div
                    key={project.project}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-platinum-200">{project.project}</p>
                      <p className="text-xs text-platinum-500">{project.organization} • {project.focus}</p>
                    </div>
                    <Badge variant="outline" className={`text-xs ${getRelevanceColor(project.uaeRelevance)}`}>
                      {project.uaeRelevance}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Key Technologies */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Key Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {data.keyTechnologies.map((tech, i) => (
                <motion.div
                  key={tech.technology}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg bg-platinum-800/50 p-3 text-center"
                >
                  <p className="text-sm font-medium text-platinum-200">{tech.technology}</p>
                  <p className="text-xs text-platinum-500 mt-1">{tech.application}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// SECTION: DATA COMPLETENESS
// ============================================================================

function DataCompletenessSection() {
  const data = aiTechnologyData.dataCompleteness

  return (
    <GlassPanel
      title="Data Completeness Assessment"
      description="Source coverage and data extraction quality by query"
      icon={<Activity className="h-5 w-5 text-gold-700" />}
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, i) => (
          <motion.div
            key={item.query}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl bg-platinum-800/50 p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-platinum-200">{item.query}</p>
              <Badge variant="outline" className="text-xs">{item.completeness}</Badge>
            </div>
            <p className="text-xs text-platinum-500">{item.dataPointsExtracted} data points extracted</p>
          </motion.div>
        ))}
      </div>
    </GlassPanel>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function AITechnologyPage() {
  const data = aiTechnologyData

  return (
    <div className="space-y-8 p-8 min-h-screen font-rajdhani">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between gap-4 flex-wrap"
      >
        <div>
          <Badge variant="gold" className="mb-2 font-bold tracking-wider">TRENDS</Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700 tracking-tight">AI Technology</h1>
          <p className="mt-2 text-platinum-400 max-w-xl">
            Comprehensive AI & Technology trends intelligence — ENRICHED SSOT
          </p>
          <p className="text-xs text-platinum-600 mt-1">
            {data.executionMetadata.atomicQueries} atomic queries • {data.executionMetadata.ssotStatus}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10 font-medium">
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
          title="AI Adoption Rate"
          value="54%+"
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="AI Hiring Growth"
          value="48%"
          icon={<Users className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Smart City (Dubai)"
          value="4th"
          icon={<Building className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="IMD Talent Ranking"
          value="9th"
          icon={<Globe className="h-6 w-6" />}
          gradient="purple"
          status="success"
        />
      </motion.div>

      {/* Summary KPIs Grid */}
      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        <GlassPanel title="Summary KPIs" icon={<Activity className="h-5 w-5 text-gold-700" />}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.summaryKPIs.slice(0, 12).map((kpi, i) => (
              <KPIGridItem key={kpi.kpi} kpi={kpi} index={i} />
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Main Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ai-ecosystem">AI Ecosystem</TabsTrigger>
          <TabsTrigger value="talent-jobs">Talent & Jobs</TabsTrigger>
          <TabsTrigger value="emerging-tech">Emerging Tech</TabsTrigger>
          <TabsTrigger value="investments">Investments</TabsTrigger>
          <TabsTrigger value="government">Government</TabsTrigger>
          <TabsTrigger value="data">Full Data</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            {/* Sentiment & Heat Map Row */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    Sentiment Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.sentimentAnalysisSummary.slice(0, 6).map((item, i) => (
                      <SentimentBar key={item.topic} topic={item.topic} sentiment={item.overallSentiment} finding={item.keyFinding} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-gold-700" />
                    UAE Relevance Heat Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {data.uaeRelevanceHeatMap.map((item, i) => (
                        <HeatMapRow key={item.topic} topic={item.topic} relevance={item.relevance} priority={item.priority} />
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Entity Registry Preview */}
            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle>Entity Registry Preview</CardTitle>
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
                      {data.entityRegistry.governmentBodies.slice(0, 6).map((body) => (
                        <EntityCard key={body.entity} entity={body.entity} type="body" />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="companies">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {data.entityRegistry.companies.slice(0, 6).map((company) => (
                        <EntityCard key={company.company} entity={company.company} type="company" />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="regulations">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {data.entityRegistry.regulatoryInstruments.slice(0, 6).map((reg) => (
                        <EntityCard key={reg.instrument} entity={reg.instrument} type="regulation" />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* AI Ecosystem Tab */}
        <TabsContent value="ai-ecosystem" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <AIRegulationSection />
            <div className="mt-6">
              <G42Section />
            </div>
          </motion.div>
        </TabsContent>

        {/* Talent & Jobs Tab */}
        <TabsContent value="talent-jobs" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <TalentSection />
            <div className="mt-6">
              <AIJobsSection />
            </div>
          </motion.div>
        </TabsContent>

        {/* Emerging Tech Tab */}
        <TabsContent value="emerging-tech" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <AutonomousVehiclesSection />
            <div className="mt-6">
              <QuantumSection />
            </div>
            <div className="mt-6">
              <StarlinkSection />
            </div>
            <div className="mt-6">
              <DeepfakeSection />
            </div>
          </motion.div>
        </TabsContent>

        {/* Investments Tab */}
        <TabsContent value="investments" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <SemiconductorsSection />
            <div className="mt-6">
              <RoboticsSection />
            </div>
          </motion.div>
        </TabsContent>

        {/* Government Tab */}
        <TabsContent value="government" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <AIGovernmentSection />
          </motion.div>
        </TabsContent>

        {/* Full Data Tab */}
        <TabsContent value="data" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <DigitalTwinSection />
            <div className="mt-6">
              <DataCompletenessSection />
            </div>

            {/* Source Credibility Matrix */}
            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-gold-700" />
                  Source Credibility Matrix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-1">
                    {data.sourceCredibilityMatrix.map((source, i) => (
                      <SourceCredibilityRow
                        key={source.source}
                        source={source.source}
                        tier={source.tier}
                        type={source.type}
                        reliability={source.reliability}
                      />
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Missing icon component
function MapPin({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
