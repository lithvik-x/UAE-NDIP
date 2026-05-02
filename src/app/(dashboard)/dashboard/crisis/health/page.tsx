// @ts-nocheck
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/ui/metric-card'
import { GlassPanel } from '@/components/ui/glass-panel'
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
  TrendingUp,
  Heart,
  Activity,
  Shield,
  Users,
  Syringe,
  Thermometer,
  Bed,
  ActivitySquare,
  Baby,
  Brain,
  Briefcase,
  Building2,
  Bus,
  Calendar,
  CheckCircle2,
  Clock,
  Database,
  DollarSign,
  Droplets,
  ExternalLink,
  Eye,
  Globe,
  HeartPulse,
  Home,
  Hospital,
  Info,
  Laptop,
  Leaf,
  MapPin,
  Medal,
  Menu,
  Microscope,
  MoreHorizontal,
  Percent,
  Phone,
  PieChart as PieChartIcon,
  Pill,
  Plus,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Sun,
  ThermometerIcon,
  Timer,
  TreePine,
  Truck,
  UsersRound,
  Utensils,
  Waves,
  Wifi,
  X,
  FileText,
  Bug,
  Apple,
  Zap,
  Plane,
} from 'lucide-react'
import { usePublicHealthData } from '@/lib/data-loader'
import { publicHealthExtendedData } from '@/lib/data-loader/crisis-data'

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

// Helper function for alert colors
const getAlertColor = (alert?: string) => {
  if (alert === 'RED') return 'border-red-500/50'
  if (alert === 'YELLOW') return 'border-amber-500/50'
  return 'border-emerald-500/50'
}

const getAlertBadge = (level: string) => {
  switch (level) {
    case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
    case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
    case 'GREEN': return <Badge variant="success" className="text-xs"><TrendingUp className="h-3 w-3 mr-1" />GREEN</Badge>
    default: return <Badge variant="outline" className="text-xs">{level}</Badge>
  }
}

export default function HealthCrisesPage() {
  const { data } = usePublicHealthData()
  const [activeTab, setActiveTab] = useState('overview')

  const extendedData = publicHealthExtendedData

  // Chart data - Real MD data
  const covidTimelineData = [
    { date: '29 Jan 2020', cases: 1, deaths: 0, label: 'First case' },
    { date: '9 Feb 2020', cases: 1, deaths: 0, label: 'First recovery' },
    { date: '20 Mar 2020', cases: 140, deaths: 0, label: 'First deaths' },
    { date: '26 Mar 2020', cases: 333, deaths: 2, label: 'Night curfew' },
    { date: '4 Apr 2020', cases: 1500, deaths: 10, label: 'Dubai 24hr curfew' },
    { date: 'Dec 2020', cases: 195000, deaths: 650, label: 'Vaccine approved' },
    { date: 'May 2023', cases: 1067030, deaths: 2349, label: 'Current stats' },
  ]

  const covidStatsAreaData = [
    { name: 'Cases', value: 1067030, color: CHART_COLORS.gold },
    { name: 'Recovered', value: 1054525, color: CHART_COLORS.emerald },
    { name: 'Active', value: 10156, color: CHART_COLORS.danger },
  ]

  const vaccinationData = [
    { name: 'At Least One Dose', value: 82.82, color: CHART_COLORS.emerald },
    { name: 'Fully Vaccinated', value: 73.21, color: CHART_COLORS.gold },
    { name: 'Not Vaccinated', value: 17.18, color: CHART_COLORS.platinum },
  ]

  const diseaseOutbreakData = [
    { name: 'COVID-19', cases: 1067030, color: CHART_COLORS.gold },
    { name: 'MERS-CoV', cases: 94, color: CHART_COLORS.danger },
    { name: 'Dengue (2024)', cases: 500, color: CHART_COLORS.warning },
    { name: 'Food Poisoning', cases: 800, color: CHART_COLORS.orange },
  ]

  const mentalHealthData = [
    { group: 'General Pop', value: 50, label: 'Negative Impact' },
    { group: 'Migrant - Nervous', value: 73.5, label: 'Felt Nervous' },
    { group: 'Migrant - Depressed', value: 62, label: 'Felt Depressed' },
    { group: 'Migrant - Lonely', value: 77, label: 'Felt Lonely' },
    { group: 'Migrant - Sleep', value: 63.4, label: 'Difficulty Sleeping' },
  ]

  const economicStimulusData = [
    { name: 'UAE National', amount: 100, color: CHART_COLORS.gold },
    { name: 'Abu Dhabi', amount: 3, color: CHART_COLORS.emerald },
    { name: 'Dubai', amount: 1.5, color: CHART_COLORS.denim },
    { name: 'Central Bank', amount: 70, color: CHART_COLORS.platinum },
    { name: 'Private Sector', amount: 79, color: CHART_COLORS.purple },
  ]

  const humanitarianData = [
    { metric: 'Medical Aid (tons)', value: 2154, color: CHART_COLORS.emerald },
    { metric: 'Countries Aided', value: 135, color: CHART_COLORS.gold },
    { metric: 'Medical Flights', value: 196, color: CHART_COLORS.denim },
    { metric: 'Field Hospitals', value: 6, color: CHART_COLORS.purple },
  ]

  const sentimentData = [
    { name: 'Positive', value: 55, color: CHART_COLORS.emerald },
    { name: 'Negative', value: 30, color: CHART_COLORS.danger },
    { name: 'Neutral', value: 15, color: CHART_COLORS.gold },
  ]

  // Radar chart data for disease comparison
  const diseaseComparisonRadarData = [
    { subject: 'COVID-19', UAE: 100, Global: 85, fullMark: 150 },
    { subject: 'MERS-CoV', UAE: 15, Global: 40, fullMark: 150 },
    { subject: 'Dengue', UAE: 25, Global: 60, fullMark: 150 },
    { subject: 'Mpox', UAE: 5, Global: 45, fullMark: 150 },
  ]

  // Structured table data for visualization
  const structuredTableData = [
    { metric: 'Total Cases', value: '1,067,030', date: '24 May 2023', color: CHART_COLORS.gold },
    { metric: 'Deaths', value: '2,349', date: '2020-2023', color: CHART_COLORS.danger },
    { metric: 'Recovered', value: '1,054,525', date: '24 May 2023', color: CHART_COLORS.emerald },
    { metric: 'Active Cases', value: '10,156', date: '24 May 2023', color: CHART_COLORS.warning },
    { metric: 'Doses Given', value: '24.9M', date: '2023', color: CHART_COLORS.denim },
  ]

  const riskLevelColors: Record<string, string> = {
    Low: 'text-emerald-400',
    Moderate: 'text-amber-400',
    Monitor: 'text-navy-400',
    High: 'text-orange-400',
  }

  const mersCovChartData = [
    { name: 'UAE Cases', value: 94, color: CHART_COLORS.danger },
    { name: 'UAE Deaths', value: 12, color: CHART_COLORS.orange },
    { name: 'Global Cases', value: 2605, color: CHART_COLORS.platinum },
    { name: 'Global Deaths', value: 936, color: CHART_COLORS.rose },
  ]

  // Food poisoning causative agents chart data
  const foodPoisoningAgentsData = [
    { agent: 'Salmonella', cases: 200, color: CHART_COLORS.danger },
    { agent: 'Campylobacter', cases: 150, color: CHART_COLORS.orange },
    { agent: 'Norovirus', cases: 180, color: CHART_COLORS.warning },
    { agent: 'Rotavirus', cases: 120, color: CHART_COLORS.gold },
    { agent: 'Giardia', cases: 80, color: CHART_COLORS.emerald },
    { agent: 'Cryptosporidium', cases: 70, color: CHART_COLORS.teal },
  ]

  // Lockdown details data
  const lockdownDetailsData = [
    { measure: 'Sterilization Program', duration: 'Mar-Aug 2020', icon: '🧹' },
    { measure: 'Initial Curfew', duration: '8pm - 6am', icon: '🌙' },
    { measure: 'Dubai Curfew', duration: '24-hour (Apr 4)', icon: '⏰' },
    { measure: 'Movement Permits', duration: 'Required', icon: '📋' },
    { measure: 'Metro Suspended', duration: '29 Mar 2020', icon: '🚇' },
    { measure: 'Al Ras Lockdown', duration: '31 Mar 2020', icon: '🔒' },
  ]

  // Vector control methods
  const vectorControlData = [
    { method: 'Predatory Fish', value: '20,000/yr', icon: '🐟' },
    { method: 'Bacterial Tablets', value: 'Used', icon: '💊' },
    { method: 'Growth Regulators', value: 'Chemical', icon: '🧪' },
    { method: 'Smart Traps', value: 'CO2 based', icon: '🪤' },
    { method: 'Target Areas', value: 'Ponds/drains', icon: '💧' },
  ]

  // WHO Relations data
  const whoCooperationData = [
    { indicator: 'COVAX Pledges', value: '$50M', type: 'UAE' },
    { indicator: 'COVAX Pledges', value: '$221M', type: 'Gulf Total' },
    { indicator: 'WHO Contribution', value: '$10M', type: 'In-kind' },
    { indicator: 'Response Share', value: '80%', type: 'Global' },
  ]

  // Response capacity data for radar
  const responseCapacityRadarData = [
    { subject: 'Emergency Prep', value: 100, fullMark: 100 },
    { subject: 'Vaccination', value: 95, fullMark: 100 },
    { subject: 'Digital Health', value: 90, fullMark: 100 },
    { subject: 'Field Hospitals', value: 85, fullMark: 100 },
    { subject: 'Medical Logistics', value: 88, fullMark: 100 },
    { subject: 'Intl Cooperation', value: 92, fullMark: 100 },
  ]

  return (
    <div className="space-y-8 p-8" role="main" aria-label="UAE Public Health Crisis Dashboard">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
        role="banner"
      >
        <div>
          <Badge variant="gold" className="mb-2">PHOENIX PROTOCOL: PUBLIC HEALTH</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">Health Crises</h1>
          <p className="mt-2 text-platinum-400">
            Pandemic preparedness, disease outbreaks, and public health emergencies affecting the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <Heart className="h-4 w-4" />
            DOH Portal
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Activity className="h-4 w-4" />
            Health Dashboard
          </Button>
        </div>
      </motion.header>

      {/* Key Metrics */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="Key Health Metrics"
      >
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="COVID-19 Cases"
            value="1.07M"
            icon={<Microscope className="h-6 w-6" />}
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Case Fatality Rate"
            value="0.22%"
            icon={<ActivitySquare className="h-6 w-6" />}
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Vaccination Rate"
            value="82.82%"
            icon={<Syringe className="h-6 w-6" />}
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Humanitarian Aid"
            value="2,154 tons"
            icon={<Truck className="h-6 w-6" />}
          />
        </motion.div>
      </motion.section>

      {/* Alert Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-xl border p-4 bg-platinum-900/50 ${getAlertColor(data.alertLevel)}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {data.alertLevel === 'RED' && <AlertCircle className="h-6 w-6 text-red-400" />}
            {data.alertLevel === 'YELLOW' && <AlertTriangle className="h-6 w-6 text-amber-400" />}
            {data.alertLevel === 'GREEN' && <TrendingUp className="h-6 w-6 text-emerald-400" />}
            <div>
              <p className="font-semibold text-platinum-200">Health Alert Level: {data.alertLevel}</p>
              <p className="text-sm text-platinum-400">
                WHO described UAE as leading model for highly efficient healthcare delivery (Dec 2025)
              </p>
            </div>
          </div>
          {getAlertBadge(data.alertLevel)}
        </div>
      </motion.div>

      {/* KPI Cards Row */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
      >
        {extendedData.dashboardKPIs.map((kpi, idx) => (
          <motion.div key={idx} variants={fadeInUp}>
            <Card className="glass-card hover:border-gold-700/30 transition-colors">
              <CardContent className="p-4">
                <p className="text-xs text-platinum-400 truncate">{kpi.kpi}</p>
                <p className="text-2xl font-bold text-gold-700 mt-1">{kpi.value}</p>
                <Badge
                  variant={kpi.trend === 'Increasing' ? 'destructive' : kpi.trend === 'Low' ? 'success' : 'outline'}
                  className="mt-2 text-xs"
                >
                  {kpi.trend}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Key Findings</TabsTrigger>
          <TabsTrigger value="covid">COVID-19</TabsTrigger>
          <TabsTrigger value="vaccination">Vaccination</TabsTrigger>
          <TabsTrigger value="diseases">Disease Outbreaks</TabsTrigger>
          <TabsTrigger value="digital">Digital Health</TabsTrigger>
          <TabsTrigger value="mental">Mental Health</TabsTrigger>
          <TabsTrigger value="migrant">Migrant Workers</TabsTrigger>
          <TabsTrigger value="economic">Economic Impact</TabsTrigger>
          <TabsTrigger value="humanitarian">Humanitarian</TabsTrigger>
          <TabsTrigger value="preparedness">Preparedness</TabsTrigger>
        </TabsList>

        {/* Key Findings Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical health crisis metrics and findings">
            <div className="space-y-4">
              {(data.keyFindings || []).map((finding: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center justify-between rounded-lg border p-4 bg-platinum-800/50 hover:bg-platinum-800/70 transition-colors ${finding.alert ? getAlertColor(finding.alert) : 'border-platinum-700'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      finding.tier === 0 ? 'bg-gold-700/20 text-gold-700' :
                      finding.tier === 1 ? 'bg-emerald-500/20 text-emerald-500' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {finding.tier === 0 ? <Shield className="h-5 w-5" /> :
                       finding.tier === 1 ? <Heart className="h-5 w-5" /> :
                       <AlertCircle className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium text-platinum-200">{finding.finding}</p>
                      <p className="text-sm text-platinum-400">Source: {finding.source}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xl font-bold text-gold-700">{finding.metric}</p>
                      <p className="text-xs text-platinum-400">Tier {finding.tier}</p>
                    </div>
                    {finding.alert && getAlertBadge(finding.alert)}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Risk Indicators */}
          <GlassPanel title="Risk Indicators" description="Current health risk assessment">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {extendedData.riskIndicators.map((risk, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-platinum-300">{risk.risk}</p>
                    <Badge variant="outline" className={`text-xs ${riskLevelColors[risk.level]}`}>
                      {risk.level}
                    </Badge>
                  </div>
                  <p className="text-xs text-platinum-400 mt-2">Trend: {risk.trend}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Response Capacity */}
          <GlassPanel title="Response Capacity Indicators" description="UAE healthcare system readiness">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {extendedData.responseCapacityIndicators.map((indicator, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 mb-2" />
                  <p className="text-sm font-medium text-platinum-200">{indicator.indicator}</p>
                  <p className="text-lg font-bold text-emerald-400 mt-1">{indicator.status}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* COVID-19 Tab */}
        <TabsContent value="covid" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* COVID Stats Chart */}
            <Card className="glass-card" role="figure" aria-label="COVID-19 statistics visualization">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">COVID-19 Case Statistics</CardTitle>
                <CardDescription>Cases, recoveries, and deaths breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={covidStatsAreaData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'value', name: 'Count', color: CHART_COLORS.gold }]}
                  height={280}
                  showGrid={true}
                  showLegend={true}
                />
              </CardContent>
            </Card>

            {/* COVID Sentiment */}
            <Card className="glass-card" role="figure" aria-label="COVID-19 sentiment distribution">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">Sentiment Distribution</CardTitle>
                <CardDescription>Population sentiment regarding health emergencies</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={sentimentData}
                  height={280}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>

          {/* COVID Timeline Chart */}
          <Card className="glass-card" role="figure" aria-label="COVID-19 timeline progression">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani">COVID-19 Timeline Progression</CardTitle>
              <CardDescription>Key events from first case to current status</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart
                data={covidTimelineData}
                lines={[
                  { dataKey: 'cases', name: 'Cases', color: CHART_COLORS.gold },
                  { dataKey: 'deaths', name: 'Deaths', color: CHART_COLORS.rose },
                ]}
                height={300}
                showGrid={true}
                showLegend={true}
              />
            </CardContent>
          </Card>

          {/* Structured Tables from MD */}
          <GlassPanel title="Structured Data Tables" description="Key metrics from MD file">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {extendedData.structuredTables.covid19KeyMetrics.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center"
                >
                  <p className="text-xs text-platinum-400 truncate">{item.metric}</p>
                  <p className="text-xl font-bold text-gold-700 mt-1">{item.value}</p>
                  <p className="text-xs text-platinum-500 mt-1">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Lockdown Details with Icons */}
          <GlassPanel title="Lockdown Details" description="COVID-19 containment measures">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {lockdownDetailsData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 rounded-lg border border-gold-700/30 bg-gold-700/5 p-3"
                >
                  <span className="text-2xl" role="img" aria-label={item.measure}>{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-platinum-200">{item.measure}</p>
                    <p className="text-xs text-gold-700">{item.duration}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Timeline of Key Events" description="COVID-19 pandemic timeline">
            <Card className="glass-card">
              <CardContent className="pt-6">
                <ScrollArea className="h-[400px]">
                  <div className="relative border-l-2 border-gold-700/30 pl-8 space-y-8">
                    {extendedData.covid19Timeline.map((event: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="relative"
                      >
                        <div className="absolute -left-[37px] h-4 w-4 rounded-full bg-gold border-2 border-navy-950" />
                        <div className="flex items-start gap-4">
                          <p className="text-sm font-bold text-gold-700 whitespace-nowrap w-24">{event.date}</p>
                          <div>
                            <p className="font-semibold text-platinum-200">{event.event}</p>
                            <p className="text-sm text-platinum-400 mt-1">{event.detail}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Vaccination Tab */}
        <TabsContent value="vaccination" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Vaccination Coverage Chart */}
            <Card className="glass-card" role="figure" aria-label="Vaccination coverage chart">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">Vaccination Coverage</CardTitle>
                <CardDescription>Percentage of population vaccinated</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={vaccinationData}
                  height={280}
                  showLegend={true}
                />
              </CardContent>
            </Card>

            {/* Vaccination Stats */}
            <GlassPanel title="Vaccination Statistics (August 2021)" description="Campaign performance metrics">
              <div className="space-y-4">
                {Object.entries(extendedData.vaccinationStats).map(([key, value]: [string, any]) => (
                  <div key={key} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                    <span className="text-sm text-platinum-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-sm font-bold text-gold-700">{value}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Vaccines Available Grid */}
          <GlassPanel title="Vaccines Available in UAE" description="Approved COVID-19 vaccines">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {extendedData.vaccinesAvailable.map((vaccine: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                >
                  <Syringe className="h-8 w-8 text-emerald-400 mb-3" />
                  <p className="font-semibold text-platinum-200">{vaccine.name}</p>
                  <p className="text-sm text-platinum-400 mt-1">{vaccine.type}</p>
                  <Badge variant="outline" className="mt-2 text-xs">{vaccine.source}</Badge>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Vaccination Performance Table */}
          <GlassPanel title="Vaccination Campaign Performance" description="Key metrics comparison">
            <Card className="glass-card">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {extendedData.structuredTables.vaccinationCampaignPerformance.map((item: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                    >
                      <span className="text-sm text-platinum-300">{item.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gold-700">{item.value}</span>
                        <Badge variant="outline" className="text-xs">{item.date}</Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </GlassPanel>

          {/* Global Rankings */}
          <GlassPanel title="Global Vaccination Rankings" description="UAE position worldwide">
            <div className="space-y-3">
              {extendedData.vaccinationRankings.map((rank: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 rounded-lg bg-platinum-800/50 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700/20">
                    <Medal className="h-5 w-5 text-gold-700" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-platinum-200">{rank.ranking}</p>
                    <p className="text-sm text-platinum-400">{rank.achievement}</p>
                  </div>
                  <Badge variant="gold" className="text-xs">{rank.source}</Badge>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Sinopharm Details */}
          <GlassPanel title="Sinopharm Vaccine Details" description="Hayat-Vax production">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(extendedData.sinopharmDetails).map(([key, value]: [string, any]) => (
                <div key={key} className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <p className="text-xs text-platinum-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-lg font-bold text-emerald-400 mt-1">{value}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Disease Outbreaks Tab */}
        <TabsContent value="diseases" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Disease Outbreak Bar Chart */}
            <Card className="glass-card" role="figure" aria-label="Disease outbreak comparison chart">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">Disease Outbreak Comparison</CardTitle>
                <CardDescription>Case counts across diseases</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={diseaseOutbreakData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'cases', name: 'Cases', color: CHART_COLORS.gold }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* MERS-CoV Chart */}
            <Card className="glass-card" role="figure" aria-label="MERS-CoV statistics chart">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">MERS-CoV Statistics</CardTitle>
                <CardDescription>UAE vs Global comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={mersCovChartData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'value', name: 'Count', color: CHART_COLORS.danger }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          {/* Disease Comparison Radar */}
          <Card className="glass-card" role="figure" aria-label="Disease comparison radar chart">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani">Disease Impact Comparison</CardTitle>
              <CardDescription>UAE vs Global severity radar</CardDescription>
            </CardHeader>
            <CardContent>
              <RadarChart
                data={diseaseComparisonRadarData}
                metrics={[
                  { dataKey: 'UAE', name: 'UAE', color: CHART_COLORS.gold },
                  { dataKey: 'Global', name: 'Global', color: CHART_COLORS.danger },
                ]}
                height={300}
                showLegend={true}
              />
            </CardContent>
          </Card>

          {/* Mpox Section */}
          <GlassPanel title="Mpox (Monkeypox) Data" description="Outbreak statistics">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
                <Bug className="h-6 w-6 text-orange-400 mb-2" />
                <p className="text-sm text-platinum-400">2022 Outbreak Cases</p>
                <p className="text-2xl font-bold text-orange-400">{extendedData.mpoxData['2022Outbreak'].cases}</p>
              </div>
              <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
                <p className="text-sm text-platinum-400">2022 New Cases</p>
                <p className="text-2xl font-bold text-orange-400">{extendedData.mpoxData['2022NewCases'].cases}</p>
              </div>
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                <Zap className="h-6 w-6 text-amber-400 mb-2" />
                <p className="text-sm text-platinum-400">Feb 2025 Clade Ib</p>
                <p className="text-lg font-bold text-amber-400">First Case</p>
                <p className="text-xs text-platinum-400">Reported to WHO</p>
              </div>
              <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                <Globe className="h-6 w-6 text-platinum-400 mb-2" />
                <p className="text-sm text-platinum-400">Global Context 2022</p>
                <p className="text-lg font-bold text-platinum-300">911+ cases</p>
                <p className="text-xs text-platinum-400">29 countries</p>
              </div>
            </div>
          </GlassPanel>

          {/* Dengue Section */}
          <GlassPanel title="Dengue Outbreak (April 2024)" description="Climate-linked surge">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                  <Droplets className="h-5 w-5 text-red-400 mb-2" />
                  <p className="text-sm text-platinum-400">Trigger</p>
                  <p className="font-semibold text-platinum-200">{extendedData.dengueOutbreak.trigger}</p>
                </div>
                <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
                  <Bug className="h-5 w-5 text-orange-400 mb-2" />
                  <p className="text-sm text-platinum-400">Vector</p>
                  <p className="font-semibold text-orange-400">{extendedData.dengueOutbreak.vector}</p>
                </div>
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                  <FileText className="h-5 w-5 text-amber-400 mb-2" />
                  <p className="text-sm text-platinum-400">Researcher Quote</p>
                  <p className="text-sm italic text-platinum-300">{extendedData.dengueOutbreak.researcherQuote}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-platinum-300 mb-3 flex items-center gap-2">
                  <Thermometer className="h-4 w-4" /> Symptoms
                </p>
                <div className="space-y-2">
                  {extendedData.dengueOutbreak.symptoms.map((s: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-2">
                      <span className="text-sm text-platinum-300">{s.symptom}</span>
                      <Badge variant="outline" className="text-xs">{s.detail}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Food Poisoning Section */}
          <GlassPanel title="Food Poisoning Statistics (Dubai H1 2025)" description="Summer surge incidents">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                <Apple className="h-6 w-6 text-red-400 mb-2" />
                <p className="text-sm text-platinum-400">Total Cases</p>
                <p className="text-3xl font-bold text-red-400">{extendedData.foodPoisoningStats.totalCasesH12025}+</p>
              </div>
              <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
                <p className="text-sm text-platinum-400">Salmonella Confirmed</p>
                <p className="text-3xl font-bold text-orange-400">{extendedData.foodPoisoningStats.confirmedSalmonella}+</p>
              </div>
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                <Thermometer className="h-6 w-6 text-amber-400 mb-2" />
                <p className="text-sm text-platinum-400">Primary Cause</p>
                <p className="text-sm font-semibold text-platinum-300">{extendedData.foodPoisoningStats.contributingFactors}</p>
              </div>
            </div>

            {/* Causative Agents Chart */}
            <div className="mt-4">
              <p className="text-sm font-semibold text-platinum-300 mb-3">Causative Agents Distribution</p>
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <BarChart
                    data={foodPoisoningAgentsData}
                    xAxisKey="agent"
                    bars={[{ dataKey: 'cases', name: 'Cases', color: CHART_COLORS.orange }]}
                    height={200}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Red Flag Symptoms */}
            <div className="mt-4">
              <p className="text-sm font-semibold text-platinum-300 mb-3">Red-Flag Symptoms</p>
              <div className="flex flex-wrap gap-2">
                {extendedData.foodPoisoningStats.redFlagSymptoms.map((s: any, idx: number) => (
                  <Badge key={idx} variant="destructive" className="text-xs">
                    {s.symptom}: {s.threshold}
                  </Badge>
                ))}
              </div>
            </div>
          </GlassPanel>

          {/* Vector Control Section */}
          <GlassPanel title="Vector Control (April 2026)" description="Mosquito control measures">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {vectorControlData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-center"
                >
                  <span className="text-2xl" role="img" aria-label={item.method}>{item.icon}</span>
                  <p className="text-xs text-emerald-400 mt-2">{item.method}</p>
                  <p className="text-sm font-bold text-platinum-200">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Digital Health Tab */}
        <TabsContent value="digital" className="space-y-6">
          <GlassPanel title="Al Hosn App" description="Official UAE contact tracing and health status app">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Smartphone className="h-6 w-6 text-emerald-400" />
                    <p className="font-semibold text-platinum-200">{extendedData.alHosnApp.officialName}</p>
                  </div>
                  <p className="text-sm text-platinum-400">{extendedData.alHosnApp.purpose}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-platinum-800/50 p-3">
                    <Phone className="h-4 w-4 text-emerald-400 mb-1" />
                    <p className="text-xs text-platinum-400">Support Line</p>
                    <p className="font-semibold text-platinum-200">{extendedData.alHosnApp.supportLine}</p>
                  </div>
                  <div className="rounded-lg bg-platinum-800/50 p-3">
                    <Wifi className="h-4 w-4 text-emerald-400 mb-1" />
                    <p className="text-xs text-platinum-400">Tracing Technology</p>
                    <p className="font-semibold text-platinum-200">{extendedData.alHosnApp.tracingTechnology}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-platinum-400 mb-2">Languages Supported</p>
                  <div className="flex flex-wrap gap-2">
                    {extendedData.alHosnApp.languages.map((lang: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="text-xs">{lang}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-platinum-400 mb-2">Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {extendedData.alHosnApp.platforms.map((platform: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="text-xs">{platform}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-platinum-300 mb-3 flex items-center gap-2">
                  <PieChartIcon className="h-4 w-4" /> Health Status Color Codes
                </p>
                <div className="space-y-2">
                  {extendedData.alHosnApp.colorCodes.map((code: any, idx: number) => (
                    <div key={idx} className={`rounded-lg border p-3 ${
                      code.color === 'Green' ? 'border-emerald-500/30 bg-emerald-500/10' :
                      code.color === 'Grey' ? 'border-platinum-500/30 bg-platinum-500/10' :
                      'border-red-500/30 bg-red-500/10'
                    }`}>
                      <div className="flex items-center gap-2">
                        <div className={`h-3 w-3 rounded-full ${
                          code.color === 'Green' ? 'bg-emerald-400' :
                          code.color === 'Grey' ? 'bg-platinum-400' :
                          'bg-red-400'
                        }`} />
                        <p className="font-semibold text-platinum-200">{code.color}</p>
                      </div>
                      <p className="text-sm text-platinum-400 mt-1">{code.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Digital Health Tools Chart */}
          <Card className="glass-card" role="figure" aria-label="Digital health tools overview">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani">Digital Health Infrastructure</CardTitle>
              <CardDescription>UAE multi-layered digital health tools</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={extendedData.digitalHealthTools.map((tool: any) => ({
                  tool: tool.tool.split(' ')[0],
                  authority: tool.authority,
                }))}
                xAxisKey="tool"
                bars={[{ dataKey: 'authority', name: 'Authority', color: CHART_COLORS.denim }]}
                height={250}
                showGrid={true}
              />
            </CardContent>
          </Card>

          <GlassPanel title="Other Digital Health Tools" description="UAE digital health infrastructure">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {extendedData.digitalHealthTools.map((tool: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                >
                  <Laptop className="h-6 w-6 text-navy-400 mb-3" />
                  <p className="font-semibold text-platinum-200">{tool.tool}</p>
                  <p className="text-sm text-platinum-400 mt-1">{tool.function}</p>
                  <Badge variant="outline" className="mt-2 text-xs">{tool.authority}</Badge>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Mental Health Tab */}
        <TabsContent value="mental" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Mental Health Impact</CardTitle>
                <CardDescription>Percentage affected by population group</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={mentalHealthData}
                  xAxisKey="group"
                  bars={[{ dataKey: 'value', name: 'Percentage', color: CHART_COLORS.purple }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <GlassPanel title="Survey Findings" description="YouGov Survey (April 2022)">
              <div className="space-y-4">
                {extendedData.mentalHealthImpact.surveyFindings.map((finding: any, idx: number) => (
                  <div key={idx} className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-4">
                    <p className="text-sm text-platinum-300">{finding.finding}</p>
                    <p className="text-2xl font-bold text-purple-400 mt-1">{finding.value}</p>
                    <Badge variant="outline" className="mt-2 text-xs">{finding.source}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          <GlassPanel title="UAE Response" description="Mental health initiatives">
            <div className="grid gap-4 sm:grid-cols-2">
              {extendedData.mentalHealthImpact.uaeResponse.map((response: any, idx: number) => (
                <div key={idx} className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <Brain className="h-6 w-6 text-emerald-400 mb-2" />
                  <p className="font-semibold text-platinum-200">{response.initiative}</p>
                  <p className="text-sm text-platinum-400 mt-1">{response.detail}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Affected Populations" description="COVID-19 mental health impact by group">
            <div className="space-y-3">
              {extendedData.mentalHealthImpact.affectedPopulations.map((pop: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-platinum-300">{pop.group}</span>
                  </div>
                  <span className="text-sm text-platinum-400">{pop.impact}</span>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Migrant Workers Tab */}
        <TabsContent value="migrant" className="space-y-6">
          <GlassPanel title="Migrant Worker Health Conditions" description="COVID-19 impact on migrant workers">
            <div className="space-y-4">
              {extendedData.migrantWorkerHealth.covid19Impact.map((impact: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center justify-between rounded-lg border border-red-500/30 bg-red-500/10 p-4"
                >
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <span className="text-sm text-platinum-300">{impact.finding}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-red-400">{impact.value}</p>
                    <Badge variant="outline" className="mt-1 text-xs">{impact.source}</Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Mental Health Statistics (Indian Migrant Workers)" description="Survey findings">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {extendedData.migrantWorkerHealth.mentalHealthStatisticsIndianMigrantWorkers.map((stat: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-4 text-center"
                >
                  <p className="text-3xl font-bold text-purple-400">{stat.value}</p>
                  <p className="text-sm text-platinum-300 mt-1">{stat.metric}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Economic Impact Tab */}
        <TabsContent value="economic" className="space-y-6">
          {/* Economic Stimulus Chart */}
          <Card className="glass-card" role="figure" aria-label="Economic stimulus packages chart">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani">Economic Stimulus Packages</CardTitle>
              <CardDescription>COVID-19 economic support by jurisdiction (in billions)</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={economicStimulusData}
                xAxisKey="name"
                bars={[{ dataKey: 'amount', name: 'Amount (billions)', color: CHART_COLORS.gold }]}
                height={280}
                showGrid={true}
              />
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Stimulus Details */}
            <GlassPanel title="Stimulus Package Details" description="Government economic support">
              <div className="space-y-3">
                {extendedData.economicImpactStimulus.stimulusPackages.map((pkg: any, idx: number) => (
                  <div key={idx} className="rounded-lg bg-platinum-800/50 p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-platinum-200">{pkg.jurisdiction}</p>
                      <Badge variant="gold" className="text-xs">{pkg.amount}</Badge>
                    </div>
                    <p className="text-xs text-platinum-400 mt-1">{pkg.duration}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Economic Impact by Sector */}
            <GlassPanel title="Sector Impact" description="Economic impact by sector">
              <div className="space-y-3">
                {extendedData.economicImpactStimulus.economicImpact.map((impact: any, idx: number) => (
                  <div key={idx} className={`rounded-lg border p-3 ${
                    impact.impact === 'Severe impact' || impact.impact === 'Decreased'
                      ? 'border-red-500/30 bg-red-500/10'
                      : 'border-platinum-700 bg-platinum-800/50'
                  }`}>
                    <div className="flex items-center gap-2">
                      {impact.impact === 'Severe impact' || impact.impact === 'Decreased'
                        ? <AlertTriangle className="h-4 w-4 text-red-400" />
                        : <TrendingUp className="h-4 w-4 text-platinum-400" />
                      }
                      <p className="text-sm font-semibold text-platinum-200">{impact.sector}</p>
                    </div>
                    <p className={`text-sm mt-1 ${
                      impact.impact === 'Severe impact' || impact.impact === 'Decreased'
                        ? 'text-red-400'
                        : 'text-platinum-400'
                    }`}>{impact.impact}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* TESS Details */}
          <div className="rounded-lg border border-gold-700/30 bg-gold-700/10 p-4">
            <div className="flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-gold-700" />
              <div>
                <p className="text-sm font-semibold text-gold-700">Targeted Economic Support Scheme (TESS)</p>
                <p className="text-sm text-platinum-300 mt-1">{extendedData.economicImpactStimulus.tessDetails}</p>
              </div>
            </div>
          </div>

          {/* Economic Stimulus Structured Table */}
          <GlassPanel title="Economic Stimulus Summary" description="Structured data from MD file">
            <Card className="glass-card">
              <CardContent className="pt-6">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {extendedData.structuredTables.economicStimulus.map((item: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                    >
                      <p className="text-xs text-platinum-400">{item.entity}</p>
                      <p className="text-lg font-bold text-gold-700">{item.amount} {item.currency}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Humanitarian Tab */}
        <TabsContent value="humanitarian" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Humanitarian Aid Chart */}
            <Card className="glass-card" role="figure" aria-label="Humanitarian aid metrics chart">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">Humanitarian Aid Metrics</CardTitle>
                <CardDescription>UAE global medical aid (as of July 2021)</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={humanitarianData}
                  xAxisKey="metric"
                  bars={[{ dataKey: 'value', name: 'Value', color: CHART_COLORS.emerald }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Global Medical Aid Stats */}
            <GlassPanel title="Global Medical Aid" description="UAE humanitarian response">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <Truck className="h-5 w-5 text-emerald-400 mb-2" />
                  <p className="text-sm text-platinum-400">Medical Aid Shipped</p>
                  <p className="text-2xl font-bold text-emerald-400">{extendedData.humanitarianResponse.globalMedicalAid.medicalAidShipped}</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <Globe className="h-5 w-5 text-emerald-400 mb-2" />
                  <p className="text-sm text-platinum-400">Countries Received Aid</p>
                  <p className="text-2xl font-bold text-emerald-400">{extendedData.humanitarianResponse.globalMedicalAid.countriesReceivedAid}</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <Plane className="h-5 w-5 text-emerald-400 mb-2" />
                  <p className="text-sm text-platinum-400">Medical Flights</p>
                  <p className="text-2xl font-bold text-emerald-400">{extendedData.humanitarianResponse.globalMedicalAid.medicalFlights}</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <Building2 className="h-5 w-5 text-emerald-400 mb-2" />
                  <p className="text-sm text-platinum-400">Field Hospitals</p>
                  <p className="text-2xl font-bold text-emerald-400">{extendedData.humanitarianResponse.globalMedicalAid.fieldHospitalsEstablished}</p>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-gold-700/30 bg-gold-700/10 p-3">
                <p className="text-sm text-platinum-400">International Response Share</p>
                <p className="text-xl font-bold text-gold-700">{extendedData.humanitarianResponse.globalMedicalAid.shareOfInternationalResponse}</p>
              </div>
            </GlassPanel>
          </div>

          {/* Humanitarian Aid Structured Table */}
          <GlassPanel title="Humanitarian Aid Summary" description="Structured data from MD file">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {extendedData.structuredTables.humanitarianAid.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center"
                >
                  <p className="text-xs text-platinum-400">{item.metric}</p>
                  <p className="text-xl font-bold text-emerald-400 mt-1">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Major Initiatives */}
          <GlassPanel title="Major Initiatives" description="COVID-19 humanitarian campaigns">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {extendedData.humanitarianResponse.majorInitiatives.map((initiative: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                >
                  <Heart className="h-6 w-6 text-red-400 mb-2" />
                  <p className="font-semibold text-platinum-200">{initiative.campaign}</p>
                  {initiative.date && initiative.date !== '-' && (
                    <p className="text-sm text-platinum-400 mt-1">{initiative.date}</p>
                  )}
                  {initiative.detail && (
                    <p className="text-xs text-platinum-500 mt-1">{initiative.detail}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Field Hospital Nations */}
          <GlassPanel title="Field Hospital Nations" description="Countries receiving UAE field hospitals">
            <div className="flex flex-wrap gap-2">
              {extendedData.humanitarianResponse.fieldHospitalNations.split(', ').map((nation: string, idx: number) => (
                <Badge key={idx} variant="outline" className="text-sm px-3 py-1">
                  {nation}
                </Badge>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Preparedness Tab */}
        <TabsContent value="preparedness" className="space-y-6">
          {/* Response Capacity Radar */}
          <Card className="glass-card" role="figure" aria-label="Response capacity radar chart">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani">Response Capacity Assessment</CardTitle>
              <CardDescription>UAE healthcare system readiness capabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <RadarChart
                data={responseCapacityRadarData}
                metrics={[{ dataKey: 'value', name: 'Capacity', color: CHART_COLORS.gold }]}
                height={300}
                showLegend={true}
              />
            </CardContent>
          </Card>

          <GlassPanel title="UAE Preparedness Rankings" description="International rankings">
            <div className="space-y-4">
              {extendedData.healthSystemPreparedness.uaePreparednessRankings.map((rank: any, idx: number) => (
                <div key={idx} className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <div className="flex items-center gap-3">
                    <Medal className="h-6 w-6 text-gold-700" />
                    <div>
                      <p className="font-semibold text-platinum-200">{rank.ranking}</p>
                      <p className="text-sm text-platinum-400">{rank.rationale}</p>
                      <Badge variant="outline" className="mt-2 text-xs">{rank.source}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Enabling Factors */}
            <GlassPanel title="Enabling Factors" description="Why UAE excels in emergency preparedness">
              <div className="space-y-3">
                {extendedData.healthSystemPreparedness.enablingFactors.map((factor: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3">
                    <Shield className="h-5 w-5 text-emerald-400" />
                    <p className="text-sm font-semibold text-platinum-200">{factor}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* One Health Approach */}
            <GlassPanel title="One Health Approach" description="Multi-sectoral health strategy">
              <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-4">
                <Leaf className="h-6 w-6 text-purple-400 mb-3" />
                <p className="text-sm text-platinum-300">{extendedData.healthSystemPreparedness.oneHealthApproach}</p>
              </div>
            </GlassPanel>
          </div>

          {/* Pandemic Readiness Program */}
          <GlassPanel title="Pandemic Readiness Program" description="One Health approach">
            <div className="space-y-4">
              {extendedData.healthSystemPreparedness.pandemicReadinessProgram.map((program: any, idx: number) => (
                <div key={idx} className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-platinum-200">{program.component}</p>
                      <p className="text-sm text-platinum-400">{program.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* International Health Cooperation */}
          <GlassPanel title="International Health Cooperation" description="WHO relations and COVAX">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* WHO Relations */}
              <div className="rounded-lg border border-navy-500/30 bg-navy-500/10 p-4">
                <Globe className="h-6 w-6 text-navy-400 mb-3" />
                <p className="font-semibold text-platinum-200">WHO Relations</p>
                <p className="text-sm text-platinum-400 mt-2">{extendedData.internationalHealthCooperation.whoRelations.uaeHealthcareRanking}</p>
                <p className="text-xs text-platinum-500 mt-1">- {extendedData.internationalHealthCooperation.whoRelations.statementBy}</p>
                <p className="text-xs text-platinum-500">{extendedData.internationalHealthCooperation.whoRelations.statementDate}</p>
              </div>

              {/* COVAX Participation */}
              <GlassPanel title="COVAX Participation" description="Vaccine equity initiative">
                <div className="space-y-3">
                  {extendedData.internationalHealthCooperation.covaxParticipation.map((covax: any, idx: number) => (
                    <div key={idx} className="rounded-lg bg-platinum-800/50 p-3">
                      <p className="text-sm text-platinum-300">{covax.donor}</p>
                      <p className="text-lg font-bold text-gold-700">{covax.amount || covax.detail}</p>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </GlassPanel>

          {/* WHO Cooperation Data Chart */}
          <Card className="glass-card" role="figure" aria-label="WHO cooperation metrics">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani">International Health Cooperation</CardTitle>
              <CardDescription>WHO relations and COVAX contributions</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={whoCooperationData}
                xAxisKey="type"
                bars={[{ dataKey: 'value', name: 'Value', color: CHART_COLORS.denim }]}
                height={200}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between rounded-lg border border-platinum-800 bg-platinum-900/50 p-4 gap-4"
        role="contentinfo"
        aria-label="Dashboard footer"
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Database className="h-4 w-4 text-platinum-500" aria-hidden="true" />
            <p className="text-sm text-platinum-400">Confidence: 85%</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-platinum-500" aria-hidden="true" />
            <p className="text-sm text-platinum-400">Report: 2026-04-27</p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
            <p className="text-sm text-platinum-400">Queries: 25 | Pages: 18</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ExternalLink className="h-4 w-4 text-platinum-500" aria-hidden="true" />
          <p className="text-sm text-platinum-400">Sources: Wikipedia, WHO, UAE Government, PMC, Harvard, Gulf News</p>
        </div>
      </motion.footer>

      {/* Entity Registry Section */}
      <GlassPanel title="Entity Registry" description="Key organizations and diseases from MD file" icon={<Users className="h-5 w-5 text-gold-700" />}>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Organizations */}
          <div>
            <p className="text-sm font-semibold text-platinum-300 mb-3 flex items-center gap-2">
              <Building2 className="h-4 w-4" /> Organizations
            </p>
            <div className="space-y-2">
              {extendedData.entityRegistry.organizations.slice(0, 6).map((org: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-2"
                >
                  <p className="text-sm font-semibold text-platinum-200">{org.organization}</p>
                  <p className="text-xs text-platinum-400">{org.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Diseases */}
          <div>
            <p className="text-sm font-semibold text-platinum-300 mb-3 flex items-center gap-2">
              <Bug className="h-4 w-4" /> Diseases
            </p>
            <div className="flex flex-wrap gap-2">
              {extendedData.entityRegistry.diseases.map((disease: any, idx: number) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className={`text-xs ${
                    disease.disease === 'COVID-19' ? 'border-gold-700/50 text-gold-700' :
                    disease.disease.includes('MERS') ? 'border-red-500/50 text-red-400' :
                    disease.disease.includes('Mpox') ? 'border-orange-500/50 text-orange-400' :
                    'border-platinum-600 text-platinum-300'
                  }`}
                >
                  {disease.disease}: {disease.status}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>

      {/* Sentiment Analysis Section */}
      <GlassPanel title="Sentiment Analysis" description="Positive and negative findings from MD file" icon={<HeartPulse className="h-5 w-5 text-emerald-400" />}>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Positive Sentiment */}
          <div>
            <p className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" /> Positive Sentiment
            </p>
            <div className="space-y-2">
              {extendedData.sentimentAnalysis.positive.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3"
                >
                  <p className="text-sm text-platinum-200">{item.finding}</p>
                  <Badge variant="outline" className="mt-2 text-xs">{item.source}</Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Negative Sentiment */}
          <div>
            <p className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> Negative Sentiment
            </p>
            <div className="space-y-2">
              {extendedData.sentimentAnalysis.negative.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg border border-red-500/30 bg-red-500/10 p-3"
                >
                  <p className="text-sm text-platinum-200">{item.finding}</p>
                  <Badge variant="outline" className="mt-2 text-xs">{item.source}</Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </div>
  )
}