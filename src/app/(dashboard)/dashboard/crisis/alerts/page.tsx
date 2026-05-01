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
  AlertTriangle,
  AlertCircle,
  Bell,
  Clock,
  TrendingUp,
  CheckCircle,
  XCircle,
  Zap,
  Activity,
  MessageSquare,
  Shield,
  Building,
  Users,
  DollarSign,
  Plane,
  Hospital,
  TrendingDown,
  Database,
  Globe,
  ShieldAlert,
} from 'lucide-react'
import {
  useCrisisOverviewData,
  useEarlyWarningData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'

// Animation variants
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

// Alert severity icons
const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'CRITICAL': return <XCircle className="h-5 w-5 text-rose-400" />
    case 'HIGH': return <AlertTriangle className="h-5 w-5 text-orange-400" />
    case 'MEDIUM': return <AlertCircle className="h-5 w-5 text-amber-400" />
    case 'LOW': return <Bell className="h-5 w-5 text-navy-400" />
    default: return <Activity className="h-5 w-5 text-platinum-400" />
  }
}

// Status badge renderer
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Active': return <Badge variant="destructive" className="text-xs">{status}</Badge>
    case 'Investigating': return <Badge variant="warning" className="text-xs">{status}</Badge>
    case 'Monitoring': return <Badge variant="outline" className="text-xs text-navy-400">{status}</Badge>
    case 'Resolved': return <Badge variant="outline" className="text-xs text-emerald-400">{status}</Badge>
    default: return <Badge variant="outline" className="text-xs">{status}</Badge>
  }
}

// Status color helper
const getStatusColor = (status: string) => {
  switch (status) {
    case 'WARNING': return 'text-amber-400'
    case 'ELEVATED': return 'text-orange-400'
    case 'NORMAL': return 'text-emerald-400'
    case 'CRITICAL': return 'text-rose-400'
    case 'OPERATIONAL': return 'text-emerald-400'
    case 'ACTIVE': return 'text-rose-400'
    case 'CLOSED': return 'text-platinum-400'
    case 'WITHDRAWN': return 'text-orange-400'
    case 'VOLATILE': return 'text-orange-400'
    case 'SECURE': return 'text-emerald-400'
    case 'REPORTED': return 'text-amber-400'
    case 'MONITORED': return 'text-navy-400'
    case 'SURGE': return 'text-rose-400'
    case 'STABLE': return 'text-emerald-400'
    case 'DEVASTATED': return 'text-rose-400'
    case 'PARTIAL': return 'text-amber-400'
    case 'ENHANCED': return 'text-navy-400'
    case 'MULTIPLE': return 'text-orange-400'
    case 'CRISIS': return 'text-rose-400'
    case 'BRIEF': return 'text-navy-400'
    case 'CONTROLLED': return 'text-orange-400'
    case 'FORMING': return 'text-navy-400'
    case 'DETERIORATED': return 'text-rose-400'
    case 'CHANGED': return 'text-amber-400'
    case 'ENGAGED': return 'text-orange-400'
    case 'COMPLETED': return 'text-emerald-400'
    default: return 'text-platinum-400'
  }
}

// Priority level color
const getPriorityColor = (level: string) => {
  switch (level) {
    case 'CRITICAL': return 'border-rose-500/50 bg-rose-500/10'
    case 'HIGH': return 'border-orange-500/50 bg-orange-500/10'
    case 'MEDIUM': return 'border-amber-500/50 bg-amber-500/10'
    case 'LOW': return 'border-navy-500/50 bg-navy-500/10'
    default: return 'border-platinum-500/50 bg-platinum-500/10'
  }
}

// Quantitative data renderer
const QuantitativeCard = ({ metric, value, source }: { metric: string; value: string; source: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.02 }}
    className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10"
  >
    <p className="text-xs text-platinum-400">{metric}</p>
    <p className="mt-1 text-2xl font-bold text-white">{value}</p>
    <p className="mt-1 text-xs text-platinum-500">{source}</p>
  </motion.div>
)

// Indicator row component
const IndicatorRow = ({ name, status, detail }: { name: string; status: string; detail: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-3 backdrop-blur-sm"
  >
    <div className="flex items-center gap-3">
      <div className={`h-2 w-2 rounded-full ${
        status === 'OPERATIONAL' || status === 'ACTIVE' || status === 'SECURE' || status === 'COMPLETED' || status === 'STABLE'
          ? 'bg-emerald-400'
          : status === 'CRISIS' || status === 'DEVASTATED' || status === 'DETERIORATED' || status === 'SURGE' || status === 'CLOSED'
          ? 'bg-rose-400'
          : status === 'VOLATILE' || status === 'REPORTED' || status === 'CHANGED' || status === 'ENHANCED' || status === 'FORMING' || status === 'MULTIPLE' || status === 'ENGAGED'
          ? 'bg-orange-400'
          : 'bg-navy-400'
      }`} />
      <span className="text-sm font-medium text-platinum-200">{name}</span>
    </div>
    <div className="flex items-center gap-4">
      <span className={`text-xs font-medium ${getStatusColor(status)}`}>{status}</span>
      <span className="max-w-48 truncate text-xs text-platinum-500">{detail}</span>
    </div>
  </motion.div>
)

export default function CrisisAlertsPage() {
  const { data } = useCrisisOverviewData()
  const { data: earlyWarning } = useEarlyWarningData()

  // Key metrics from MD file
  const activeAlerts = 24
  const criticalAlerts = 3
  const resolvedAlerts = 892
  const avgResponseTime = '8.5min'
  const queriesExecuted = 29
  const pagesFetched = 32
  const confidence = '100%'
  const queriesSuccessRate = '100%'

  // Real-time alerts from MD
  const realTimeAlerts = [
    { id: 'ALT-001', time: '2 min ago', alert: 'Spike in Regional Trade Concerns', severity: 'CRITICAL', source: 'Social Media', status: 'Active' },
    { id: 'ALT-002', time: '8 min ago', alert: 'Currency Market Unusual Activity', severity: 'HIGH', source: 'Financial', status: 'Investigating' },
    { id: 'ALT-003', time: '15 min ago', alert: 'Labor Market Discussion Increase', severity: 'MEDIUM', source: 'Multiple', status: 'Monitoring' },
    { id: 'ALT-004', time: '23 min ago', alert: 'Social Media Sentiment Shift', severity: 'MEDIUM', source: 'Twitter/X', status: 'Monitoring' },
    { id: 'ALT-005', time: '45 min ago', alert: 'Healthcare Supply Discussion', severity: 'LOW', source: 'News', status: 'Resolved' },
    { id: 'ALT-006', time: '1 hr ago', alert: 'Tourism Sector Concerns', severity: 'MEDIUM', source: 'Social Media', status: 'Resolved' },
    { id: 'ALT-007', time: '2 hr ago', alert: 'Cyber Activity Increase', severity: 'HIGH', source: 'Cyber', status: 'Resolved' },
    { id: 'ALT-008', time: '3 hr ago', alert: 'Political Content Surge', severity: 'MEDIUM', source: 'Multiple', status: 'Resolved' },
  ]

  // Alert distribution
  const alertDistribution = [
    { type: 'Social Media', count: 145, percentage: 38, color: CHART_COLORS.rose },
    { type: 'News', count: 98, percentage: 26, color: CHART_COLORS.navy },
    { type: 'Financial', count: 67, percentage: 18, color: CHART_COLORS.gold },
    { type: 'Cyber', count: 42, percentage: 11, color: CHART_COLORS.orange },
    { type: 'Other', count: 28, percentage: 7, color: CHART_COLORS.platinum },
  ]

  // Severity trend
  const severityTrend = [
    { hour: '00:00', critical: 0, high: 2, medium: 5, low: 8 },
    { hour: '04:00', critical: 1, high: 1, medium: 4, low: 6 },
    { hour: '08:00', critical: 0, high: 3, medium: 7, low: 12 },
    { hour: '12:00', critical: 2, high: 5, medium: 9, low: 15 },
    { hour: '16:00', critical: 1, high: 4, medium: 8, low: 14 },
    { hour: '20:00', critical: 1, high: 3, medium: 6, low: 10 },
    { hour: 'Now', critical: 3, high: 8, medium: 12, low: 18 },
  ]

  // Early warning indicators from MD file
  const warningIndicators = [
    { indicator: 'Social Sentiment Decline', status: 'WARNING', value: -15, threshold: -20 },
    { indicator: 'Media Volume Spike', status: 'ELEVATED', value: 45, threshold: 30 },
    { indicator: 'Keyword Clustering', status: 'NORMAL', value: 12, threshold: 25 },
    { indicator: 'Cross-Platform Correlation', status: 'ELEVATED', value: 68, threshold: 50 },
    { indicator: 'Influencer Activity', status: 'WARNING', value: 85, threshold: 75 },
  ]

  // Notification channels from MD
  const notificationChannels = [
    { channel: 'SMS', delivered: 1245, successRate: 98.5 },
    { channel: 'Email', delivered: 3456, successRate: 99.2 },
    { channel: 'App Push', delivered: 5678, successRate: 97.8 },
    { channel: 'Dashboard', delivered: 8901, successRate: 100 },
    { channel: 'API', delivered: 2345, successRate: 99.8 },
  ]

  // Priority alerts from MD
  const priorityAlerts = [
    { priority: 1, level: 'CRITICAL', alert: 'Iranian missile attacks on UAE territory', status: 'ONGOING_THREAT' },
    { priority: 2, level: 'CRITICAL', alert: 'Stock market volatility and potential capital flight', status: 'MONITORING' },
    { priority: 3, level: 'HIGH', alert: 'Mass visa cancellations for Iranian nationals', status: 'UNCONFIRMED' },
    { priority: 4, level: 'HIGH', alert: 'Mental health crisis - 25-30% increase in demand', status: 'ACTIVE' },
    { priority: 5, level: 'MEDIUM', alert: 'Social media crackdown and information control', status: 'ENFORCED' },
    { priority: 6, level: 'MEDIUM', alert: 'Tourism and aviation sector devastation', status: 'ONGOING' },
    { priority: 7, level: 'LOW', alert: 'Food supply concerns', status: 'MITIGATED' },
  ]

  // Key quantitative data from MD
  const keyQuantitativeData = [
    { metric: 'Missiles/drones fired at UAE', value: '1,700+', source: 'Defense Ministry' },
    { metric: 'Deaths', value: '6', source: 'Multiple sources' },
    { metric: 'Injuries', value: '122', source: 'Multiple sources' },
    { metric: 'Stock market drop (DFM)', value: '4.7%', source: 'Gulf News' },
    { metric: 'Stock market drop (ADX)', value: '3.3%', source: 'Multiple sources' },
    { metric: 'Strategic reserves', value: '4-6 months', source: 'Minister of Economy' },
    { metric: 'Gold discount', value: '$30/oz', source: 'Bloomberg' },
    { metric: 'Capital flight risk', value: '$307 billion', source: 'S&P Global' },
    { metric: 'Tourism revenue at risk', value: '$30 billion', source: 'Economy.ac' },
    { metric: 'Tourists stranded', value: '1 million+', source: 'Economy.ac' },
    { metric: 'Mental health demand increase', value: '25-30%', source: 'Hundred Wellness Centre' },
    { metric: 'Flights cancelled', value: '1,244', source: 'Dubai Airport' },
    { metric: 'Social media arrests', value: '375+', source: 'Multiple sources' },
    { metric: 'Terror suspects arrested', value: '27', source: 'UAE State Security' },
  ]

  // Synthesized indicators from MD
  const militarySecurityIndicators = [
    { name: 'Early Warning System', status: 'OPERATIONAL', detail: 'Multiple emergency alerts activated across UAE' },
    { name: 'Missile Defense', status: 'ACTIVE', detail: '1,700+ missiles/drones intercepted' },
    { name: 'Alert System Modified', status: 'CHANGED', detail: 'Dual-tone approach implemented March 10' },
    { name: 'Emergency Exercises', status: 'COMPLETED', detail: 'December 30, 2025 nationwide drill' },
    { name: 'Air Defense', status: 'ENGAGED', detail: 'UAE Air Forces responding to threats' },
  ]

  const diplomaticIndicators = [
    { name: 'Embassy Closure', status: 'CLOSED', detail: 'Tehran embassy closed March 1' },
    { name: 'Ambassador Recalled', status: 'WITHDRAWN', detail: 'All diplomatic staff returned' },
    { name: 'De-escalation Talks', status: 'ACTIVE', detail: 'First high-level contact April 15' },
    { name: 'Regional Coalition', status: 'FORMING', detail: 'Gulf states expelling Iranian diplomats' },
    { name: 'Diplomatic Relations', status: 'DETERIORATED', detail: 'Ties with Iran at lowest point' },
  ]

  const economicIndicators = [
    { name: 'Stock Market', status: 'VOLATILE', detail: 'DFM down 4.7%, ADX down 3.3%' },
    { name: 'Market Closure', status: 'CLOSED', detail: '2-day halt - unprecedented' },
    { name: 'Strategic Reserves', status: 'SECURE', detail: '4-6 months supply confirmed' },
    { name: 'Capital Outflows', status: 'REPORTED', detail: '$100K transfer limits, S&P warns of $307B flight' },
    { name: 'Currency Pressure', status: 'MONITORED', detail: 'USD/AED black market 3.67/3.64' },
    { name: 'Gold Discount', status: '$30/OZ', detail: 'Flight disruptions affecting supply' },
  ]

  const socialIndicators = [
    { name: 'Mental Health', status: 'CRISIS', detail: '25-30% demand increase' },
    { name: 'Panic Buying', status: 'BRIEF', detail: 'March 1 then quickly restocked' },
    { name: 'Social Media', status: 'CONTROLLED', detail: '375+ arrested, deportation threats' },
    { name: 'Boycott Movement', status: 'ACTIVE', detail: '#BoycottTheUAE trending' },
    { name: 'Rumor Control', status: 'ACTIVE', detail: 'Fake news alerts, legal warnings' },
  ]

  const financialIndicators = [
    { name: 'Tourism Revenue', status: 'DEVASTATED', detail: '$30B annual revenue at risk' },
    { name: 'Tourist Impact', status: 'MILLION+', detail: '1M tourists stranded or cancelled' },
    { name: 'Airport Status', status: 'PARTIAL', detail: 'Dubai airport "crippled" at one point' },
    { name: 'Banking', status: 'ENHANCED', detail: 'Due diligence on Iranian accounts' },
    { name: 'Executive Resignations', status: 'MULTIPLE', detail: 'DP World CEO, e& CEO' },
  ]

  const humanitarianIndicators = [
    { name: 'Casualties', status: '6/122', detail: 'Deaths and injuries from attacks' },
    { name: 'Mental Health Crisis', status: 'SURGE', detail: 'Anxiety, sleep disruption, hypervigilance' },
    { name: 'Visa Cancellations', status: 'REPORTED', detail: 'Iranian residents - unconfirmed but widespread' },
    { name: 'Food Supply', status: 'STABLE', detail: 'Strategic reserves secure' },
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
          <Badge variant="rose" className="mb-2">C-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-rose">Real-time Crisis Alerts</h1>
          <p className="mt-2 text-platinum-400">
            Live alert monitoring and early warning system
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-rose/50 text-rose hover:bg-rose/10">
            <Bell className="h-4 w-4" />
            Configure
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Test Alert
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics - Cycle A */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Active Alerts"
          value={activeAlerts.toString()}
          previousValue={(activeAlerts + 5).toString()}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
          status="danger"
        />
        <MetricCard
          title="Critical Alerts"
          value={criticalAlerts.toString()}
          previousValue={(criticalAlerts + 1).toString()}
          icon={<XCircle className="h-6 w-6" />}
          gradient="rose"
          status="danger"
        />
        <MetricCard
          title="Resolved Alerts"
          value={resolvedAlerts.toString()}
          previousValue={(resolvedAlerts - 45).toString()}
          icon={<CheckCircle className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Avg Response Time"
          value={avgResponseTime}
          previousValue="10.6min"
          icon={<Clock className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
      </motion.div>

      {/* Research Metrics - Cycle B */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
      >
        <MetricCard
          title="Queries Executed"
          value={queriesExecuted.toString()}
          icon={<Database className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Pages Fetched"
          value={pagesFetched.toString()}
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Confidence Level"
          value={confidence}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Query Success"
          value={queriesSuccessRate}
          icon={<CheckCircle className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Verification"
          value="100%"
          icon={<ShieldAlert className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
      </motion.div>

      <Tabs defaultValue="alerts" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="alerts">Live Alerts</TabsTrigger>
          <TabsTrigger value="distribution">Distribution</TabsTrigger>
          <TabsTrigger value="warning">Early Warning</TabsTrigger>
          <TabsTrigger value="indicators">Indicators</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="quantitative">Quantitative</TabsTrigger>
        </TabsList>

        {/* Live Alerts Tab - Cycle C */}
        <TabsContent value="alerts" className="space-y-6">
          <GlassPanel title="Live Alert Feed" description="Real-time crisis alert stream">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Alert Stream</CardTitle>
                  <CardDescription>Most recent alerts (24h)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[450px]">
                    <div className="space-y-3">
                      {realTimeAlerts.map((alert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.01 }}
                          className={`flex items-center justify-between rounded-lg border p-4 hover:bg-platinum-800/70 ${
                            alert.severity === 'CRITICAL' ? 'border-rose-500/50 bg-rose-500/5' :
                            alert.severity === 'HIGH' ? 'border-orange-500/50 bg-orange-500/5' :
                            alert.severity === 'MEDIUM' ? 'border-amber-500/50 bg-amber-500/5' :
                            'border-platinum-700 bg-platinum-800/50'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            {getSeverityIcon(alert.severity)}
                            <div>
                              <p className="font-semibold text-platinum-200">{alert.alert}</p>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="text-xs text-platinum-400">ID: {alert.id}</span>
                                <span className="text-xs text-platinum-500">-</span>
                                <span className="text-xs text-platinum-400">Source: {alert.source}</span>
                                <span className="text-xs text-platinum-500">-</span>
                                <span className="text-xs text-platinum-400 flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {alert.time}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className={`text-xs ${
                              alert.severity === 'CRITICAL' ? 'text-rose-400' :
                              alert.severity === 'HIGH' ? 'text-orange-400' :
                              alert.severity === 'MEDIUM' ? 'text-amber-400' :
                              'text-navy-400'
                            }`}>{alert.severity}</Badge>
                            {getStatusBadge(alert.status)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Distribution Tab - Cycle D */}
        <TabsContent value="distribution" className="space-y-6">
          <GlassPanel title="Alert Distribution" description="Alert source and severity breakdown">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">By Source</CardTitle>
                    <CardDescription>Alert distribution by source</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={alertDistribution}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Severity Trend (24h)</CardTitle>
                    <CardDescription>Alert severity over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={severityTrend}
                      xAxisKey="hour"
                      lines={[
                        { dataKey: 'critical', name: 'Critical', color: CHART_COLORS.rose },
                        { dataKey: 'high', name: 'High', color: CHART_COLORS.orange },
                        { dataKey: 'medium', name: 'Medium', color: CHART_COLORS.gold },
                        { dataKey: 'low', name: 'Low', color: CHART_COLORS.denim },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Alert Statistics</CardTitle>
                  <CardDescription>24-hour alert metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-rose-400">{activeAlerts}</div>
                      <p className="mt-1 text-sm text-platinum-400">Active</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-orange-400">{activeAlerts + 12}</div>
                      <p className="mt-1 text-sm text-platinum-400">Last 24h</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-emerald-400">{resolvedAlerts}</div>
                      <p className="mt-1 text-sm text-platinum-400">Resolved</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-amber-400">{avgResponseTime}</div>
                      <p className="mt-1 text-sm text-platinum-400">Avg Response</p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Early Warning Tab - Cycle E */}
        <TabsContent value="warning" className="space-y-6">
          <GlassPanel title="Early Warning Indicators" description="Predictive crisis indicators">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Warning Indicators</CardTitle>
                  <CardDescription>Current status of early warning metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[350px]">
                    <div className="space-y-4">
                      {warningIndicators.map((indicator, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-200">{indicator.indicator}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-xs text-platinum-400">Value: {indicator.value}</span>
                              <Badge variant="outline" className={`text-xs ${getStatusColor(indicator.status)}`}>
                                {indicator.status}
                              </Badge>
                            </div>
                          </div>
                          <Progress
                            value={(indicator.value / indicator.threshold) * 100}
                            className={`h-2 ${
                              indicator.status === 'CRITICAL' ? 'bg-rose-500' :
                              indicator.status === 'WARNING' ? 'bg-amber-500' :
                              indicator.status === 'ELEVATED' ? 'bg-orange-500' :
                              'bg-emerald-500'
                            }`}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Prediction Confidence</CardTitle>
                  <CardDescription>Model accuracy for early warnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Overall Accuracy</span>
                        <span className="font-medium text-emerald-400">87.5%</span>
                      </div>
                      <Progress value={87.5} className="h-3" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">False Positive Rate</span>
                        <span className="font-medium text-amber-400">8.2%</span>
                      </div>
                      <Progress value={8.2} className="h-3" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Lead Time (avg)</span>
                        <span className="font-medium text-navy">4.2 hours</span>
                      </div>
                      <Progress value={42} className="h-3" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Indicators Tab - Cycle F */}
        <TabsContent value="indicators" className="space-y-6">
          <GlassPanel title="Synthesized Warning Indicators" description="Multi-domain crisis indicators from MD file 4-10">
            <div className="space-y-6">
              {/* Military/Security Indicators */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="h-5 w-5 text-rose-400" />
                    Military & Security
                  </CardTitle>
                  <CardDescription>Status: CRITICAL</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {militarySecurityIndicators.map((ind, idx) => (
                      <IndicatorRow key={idx} name={ind.name} status={ind.status} detail={ind.detail} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Diplomatic Indicators */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building className="h-5 w-5 text-orange-400" />
                    Diplomatic
                  </CardTitle>
                  <CardDescription>Status: CRITICAL</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {diplomaticIndicators.map((ind, idx) => (
                      <IndicatorRow key={idx} name={ind.name} status={ind.status} detail={ind.detail} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Economic Indicators */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <DollarSign className="h-5 w-5 text-amber-400" />
                    Economic
                  </CardTitle>
                  <CardDescription>Status: CRITICAL</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {economicIndicators.map((ind, idx) => (
                      <IndicatorRow key={idx} name={ind.name} status={ind.status} detail={ind.detail} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Indicators */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-navy-400" />
                    Social
                  </CardTitle>
                  <CardDescription>Status: HIGH</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {socialIndicators.map((ind, idx) => (
                      <IndicatorRow key={idx} name={ind.name} status={ind.status} detail={ind.detail} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Financial Indicators */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="h-5 w-5 text-rose-400" />
                    Financial
                  </CardTitle>
                  <CardDescription>Status: CRITICAL</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {financialIndicators.map((ind, idx) => (
                      <IndicatorRow key={idx} name={ind.name} status={ind.status} detail={ind.detail} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Humanitarian Indicators */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Hospital className="h-5 w-5 text-orange-400" />
                    Humanitarian
                  </CardTitle>
                  <CardDescription>Status: HIGH</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {humanitarianIndicators.map((ind, idx) => (
                      <IndicatorRow key={idx} name={ind.name} status={ind.status} detail={ind.detail} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* Priority Alerts */}
          <GlassPanel title="Priority Early Warning Alerts" description="Ranked crisis alerts from research findings">
            <div className="space-y-4">
              {priorityAlerts.map((alert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.01, x: 4 }}
                  className={`rounded-lg border p-4 ${getPriorityColor(alert.level)}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        alert.level === 'CRITICAL' ? 'bg-rose-500/20 text-rose-400' :
                        alert.level === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                        alert.level === 'MEDIUM' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-navy-500/20 text-navy-400'
                      }`}>
                        <span className="text-sm font-bold">{alert.priority}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-platinum-200">{alert.alert}</p>
                        <p className="mt-1 text-xs text-platinum-400">Status: {alert.status}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={`text-xs ${
                      alert.level === 'CRITICAL' ? 'text-rose-400 border-rose-400' :
                      alert.level === 'HIGH' ? 'text-orange-400 border-orange-400' :
                      alert.level === 'MEDIUM' ? 'text-amber-400 border-amber-400' :
                      'text-navy-400 border-navy-400'
                    }`}>{alert.level}</Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <GlassPanel title="Notification Channels" description="Alert delivery performance">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Channel Performance</CardTitle>
                  <CardDescription>Delivery success rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notificationChannels.map((channel, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="w-20 justify-center">{channel.channel}</Badge>
                            <span className="text-sm text-platinum-400">{channel.delivered.toLocaleString()} delivered</span>
                          </div>
                          <span className={`text-sm font-bold ${
                            channel.successRate >= 99 ? 'text-emerald-400' :
                            channel.successRate >= 97 ? 'text-amber-400' :
                            'text-rose-400'
                          }`}>{channel.successRate}%</span>
                        </div>
                        <Progress value={channel.successRate} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Notification Contacts</CardTitle>
                  <CardDescription>Active notification endpoints</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {[
                        { name: 'Crisis Command Team', type: 'SMS', status: 'Active' },
                        { name: 'Executive Office', type: 'Email', status: 'Active' },
                        { name: 'Operations Center', type: 'App Push', status: 'Active' },
                        { name: 'Regional Managers', type: 'SMS', status: 'Active' },
                        { name: 'Partner Agencies', type: 'API', status: 'Active' },
                      ].map((contact, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <MessageSquare className="h-4 w-4 text-navy" />
                            <span className="text-sm font-medium text-platinum-200">{contact.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs">{contact.type}</Badge>
                            <Badge variant="outline" className="text-xs text-emerald-400">{contact.status}</Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Quantitative Data Tab */}
        <TabsContent value="quantitative" className="space-y-6">
          <GlassPanel title="Key Quantitative Data" description="Critical metrics from MD file 4-10 research">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {keyQuantitativeData.map((item, index) => (
                <QuantitativeCard
                  key={index}
                  metric={item.metric}
                  value={item.value}
                  source={item.source}
                />
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Temporal Coverage" description="Research temporal scope">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { period: 'Historical Baseline', coverage: '2021-2024 (workweek changes, 2024 floods)' },
                { period: 'Pre-Conflict', coverage: 'December 2025 (emergency exercises)' },
                { period: 'Conflict Onset', coverage: 'February 28 - March 1, 2026 (Iranian attacks)' },
                { period: 'Active Conflict', coverage: 'March 2026 (missile strikes, market closures)' },
                { period: 'De-escalation', coverage: 'April 2026 (diplomatic talks)' },
                { period: 'Current Monitoring', coverage: 'April 27, 2026 (ongoing monitoring)' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <p className="text-xs text-platinum-400">{item.period}</p>
                  <p className="mt-1 text-sm font-medium text-platinum-200">{item.coverage}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Source Tiers" description="Information source classification">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { tier: 'TIER 0', sources: ['UAE Ministry of Foreign Affairs', 'Ministry of Interior', 'NCEMA', 'WAM', 'Defense Ministry'], color: 'emerald' },
                { tier: 'TIER 1', sources: ['Reuters', 'Gulf News', 'Khaleej Times', 'The National', 'BBC', 'CNBC', 'Bloomberg'], color: 'blue' },
                { tier: 'TIER 2', sources: ['Al Jazeera', 'Middle East Eye', 'Anadolu', 'Economy.ac'], color: 'yellow' },
                { tier: 'TIER 3', sources: ['Reddit', 'Instagram', 'YouTube', 'Twitter/X', 'Hundred Wellness Centre'], color: 'orange' },
                { tier: 'TIER 4', sources: ['Influencer posts', 'User comments', 'Social media discussions'], color: 'rose' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <p className={`text-sm font-bold text-${
                    item.color === 'emerald' ? 'emerald-400' :
                    item.color === 'blue' ? 'navy-400' :
                    item.color === 'yellow' ? 'yellow-400' :
                    item.color === 'orange' ? 'orange-400' :
                    'rose-400'
                  }`}>{item.tier}</p>
                  <div className="mt-2 space-y-1">
                    {item.sources.slice(0, 3).map((source, idx) => (
                      <p key={idx} className="text-xs text-platinum-400">{source}</p>
                    ))}
                    {item.sources.length > 3 && (
                      <p className="text-xs text-platinum-500">+{item.sources.length - 3} more</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
