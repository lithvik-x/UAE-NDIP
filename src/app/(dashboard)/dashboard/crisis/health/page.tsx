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
  if (alert === 'YELLOW') return 'border-yellow-500/50'
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

  // Chart data
  const covidTimelineData = extendedData.covid19Timeline.map((item, idx) => ({
    name: item.date,
    cases: Math.max(0, 1000000 - idx * 80000),
    deaths: Math.max(0, 2000 - idx * 150),
  }))

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
    { group: 'General Population', value: 50, label: 'Negative Impact' },
    { group: 'Migrant - Nervous', value: 73.5, label: 'Felt Nervous' },
    { group: 'Migrant - Depressed', value: 62, label: 'Felt Depressed' },
    { group: 'Migrant - Lonely', value: 77, label: 'Felt Lonely' },
    { group: 'Migrant - Sleep', value: 63.4, label: 'Difficulty Sleeping' },
  ]

  const economicStimulusData = extendedData.economicImpactStimulus.stimulusPackages.map(pkg => ({
    name: pkg.jurisdiction.split(' ')[0],
    amount: parseInt(pkg.amount.replace(/[^0-9]/g, '')) || 0,
  }))

  const sentimentData = [
    { name: 'Positive', value: 55, color: CHART_COLORS.emerald },
    { name: 'Negative', value: 30, color: CHART_COLORS.danger },
    { name: 'Neutral', value: 15, color: CHART_COLORS.gold },
  ]

  const humanitarianData = [
    { metric: 'Medical Aid (tons)', value: 2154 },
    { metric: 'Countries Aided', value: 135 },
    { metric: 'Medical Flights', value: 196 },
    { metric: 'Field Hospitals', value: 6 },
  ]

  const riskLevelColors: Record<string, string> = {
    Low: 'text-emerald-400',
    Moderate: 'text-yellow-400',
    Monitor: 'text-blue-400',
    High: 'text-orange-400',
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2">PHOENIX PROTOCOL: PUBLIC HEALTH</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Health Crises</h1>
          <p className="mt-2 text-slate-400">
            Pandemic preparedness, disease outbreaks, and public health emergencies affecting the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Heart className="h-4 w-4" />
            DOH Portal
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Activity className="h-4 w-4" />
            Health Dashboard
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
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="COVID-19 Cases"
            value="1.07M"
            icon={<Microscope className="h-6 w-6" />}
            gradient="gold"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Case Fatality Rate"
            value="0.22%"
            icon={<ActivitySquare className="h-6 w-6" />}
            gradient="emerald"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Vaccination Rate"
            value="82.82%"
            icon={<Syringe className="h-6 w-6" />}
            gradient="indigo"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Humanitarian Aid"
            value="2,154 tons"
            icon={<Truck className="h-6 w-6" />}
            gradient="denim"
            status="success"
          />
        </motion.div>
      </motion.div>

      {/* Alert Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-xl border p-4 bg-slate-900/50 ${getAlertColor(data.alertLevel)}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {data.alertLevel === 'RED' && <AlertCircle className="h-6 w-6 text-red-400" />}
            {data.alertLevel === 'YELLOW' && <AlertTriangle className="h-6 w-6 text-yellow-400" />}
            {data.alertLevel === 'GREEN' && <TrendingUp className="h-6 w-6 text-emerald-400" />}
            <div>
              <p className="font-semibold text-slate-200">Health Alert Level: {data.alertLevel}</p>
              <p className="text-sm text-slate-400">
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
            <Card className="glass-card hover:border-gold/30 transition-colors">
              <CardContent className="p-4">
                <p className="text-xs text-slate-400 truncate">{kpi.kpi}</p>
                <p className="text-2xl font-bold text-gold mt-1">{kpi.value}</p>
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
                  className={`flex items-center justify-between rounded-lg border p-4 bg-slate-800/50 hover:bg-slate-800/70 transition-colors ${finding.alert ? getAlertColor(finding.alert) : 'border-slate-700'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      finding.tier === 0 ? 'bg-gold/20 text-gold' :
                      finding.tier === 1 ? 'bg-emerald/20 text-emerald' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {finding.tier === 0 ? <Shield className="h-5 w-5" /> :
                       finding.tier === 1 ? <Heart className="h-5 w-5" /> :
                       <AlertCircle className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium text-slate-200">{finding.finding}</p>
                      <p className="text-sm text-slate-400">Source: {finding.source}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xl font-bold text-gold">{finding.metric}</p>
                      <p className="text-xs text-slate-400">Tier {finding.tier}</p>
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
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-300">{risk.risk}</p>
                    <Badge variant="outline" className={`text-xs ${riskLevelColors[risk.level]}`}>
                      {risk.level}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Trend: {risk.trend}</p>
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
                  <p className="text-sm font-medium text-slate-200">{indicator.indicator}</p>
                  <p className="text-lg font-bold text-emerald-400 mt-1">{indicator.status}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* COVID-19 Tab */}
        <TabsContent value="covid" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="COVID-19 Case Statistics" description="Comprehensive COVID-19 metrics">
              <div className="space-y-4">
                {Object.entries(extendedData.covid19Stats).map(([key, value]: [string, any]) => (
                  <div key={key} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                    <div className="flex items-center gap-3">
                      {key === 'totalCases' && <Microscope className="h-4 w-4 text-gold" />}
                      {key === 'totalDeaths' && <AlertCircle className="h-4 w-4 text-red-400" />}
                      {key === 'recovered' && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
                      {key === 'dosesAdministered' && <Syringe className="h-4 w-4 text-blue-400" />}
                      {!['totalCases', 'totalDeaths', 'recovered', 'dosesAdministered'].includes(key) && <Info className="h-4 w-4 text-slate-400" />}
                      <span className="text-sm text-slate-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </div>
                    <span className="text-sm font-bold text-gold">
                      {typeof value === 'object' ? value.value : value}
                    </span>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">COVID-19 Sentiment</CardTitle>
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

          <GlassPanel title="Timeline of Key Events" description="COVID-19 pandemic timeline">
            <Card className="glass-card">
              <CardContent className="pt-6">
                <ScrollArea className="h-[400px]">
                  <div className="relative border-l-2 border-gold/30 pl-8 space-y-8">
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
                          <p className="text-sm font-bold text-gold whitespace-nowrap w-24">{event.date}</p>
                          <div>
                            <p className="font-semibold text-slate-200">{event.event}</p>
                            <p className="text-sm text-slate-400 mt-1">{event.detail}</p>
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
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Vaccination Coverage</CardTitle>
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

            <GlassPanel title="Vaccination Statistics (August 2021)" description="Campaign performance metrics">
              <div className="space-y-4">
                {Object.entries(extendedData.vaccinationStats).map(([key, value]: [string, any]) => (
                  <div key={key} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                    <span className="text-sm text-slate-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-sm font-bold text-gold">{value}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          <GlassPanel title="Vaccines Available in UAE" description="Approved COVID-19 vaccines">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {extendedData.vaccinesAvailable.map((vaccine: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                >
                  <Syringe className="h-8 w-8 text-emerald-400 mb-3" />
                  <p className="font-semibold text-slate-200">{vaccine.name}</p>
                  <p className="text-sm text-slate-400 mt-1">{vaccine.type}</p>
                  <Badge variant="outline" className="mt-2 text-xs">{vaccine.source}</Badge>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Global Vaccination Rankings" description="UAE position worldwide">
            <div className="space-y-3">
              {extendedData.vaccinationRankings.map((rank: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 rounded-lg bg-slate-800/50 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                    <Medal className="h-5 w-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-200">{rank.ranking}</p>
                    <p className="text-sm text-slate-400">{rank.achievement}</p>
                  </div>
                  <Badge variant="gold" className="text-xs">{rank.source}</Badge>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Sinopharm Vaccine Details" description="Hayat-Vax production">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(extendedData.sinopharmDetails).map(([key, value]: [string, any]) => (
                <div key={key} className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <p className="text-xs text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-lg font-bold text-emerald-400 mt-1">{value}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Disease Outbreaks Tab */}
        <TabsContent value="diseases" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Disease Outbreak Comparison</CardTitle>
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

            <GlassPanel title="MERS-CoV Statistics" description="UAE and global comparison">
              <div className="space-y-4">
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                  <p className="text-sm text-slate-400">UAE Cases</p>
                  <p className="text-3xl font-bold text-red-400">{extendedData.MersCov.uaeTotalCases}</p>
                  <p className="text-sm text-slate-400">{extendedData.MersCov.uaeDeaths} deaths (13% CFR)</p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                  <p className="text-sm text-slate-400">Global Cases (since 2012)</p>
                  <p className="text-2xl font-bold text-slate-300">{extendedData.MersCov.globalTotalCases.toLocaleString()}</p>
                  <p className="text-sm text-slate-400">{extendedData.MersCov.globalDeaths} deaths</p>
                </div>
              </div>
            </GlassPanel>
          </div>

          <GlassPanel title="Mpox (Monkeypox) Data" description="Outbreak statistics">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
                <p className="text-sm text-slate-400">2022 Outbreak Cases</p>
                <p className="text-2xl font-bold text-orange-400">{extendedData.mpoxData['2022Outbreak'].cases}</p>
              </div>
              <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
                <p className="text-sm text-slate-400">2022 New Cases</p>
                <p className="text-2xl font-bold text-orange-400">{extendedData.mpoxData['2022NewCases'].cases}</p>
              </div>
              <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
                <p className="text-sm text-slate-400">Feb 2025 Clade Ib</p>
                <p className="text-lg font-bold text-yellow-400">First Case</p>
                <p className="text-xs text-slate-400">Reported to WHO</p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                <p className="text-sm text-slate-400">Global Context 2022</p>
                <p className="text-lg font-bold text-slate-300">911+ cases</p>
                <p className="text-xs text-slate-400">29 countries</p>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel title="Dengue Outbreak (April 2024)" description="Climate-linked surge">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                  <p className="text-sm text-slate-400">Trigger</p>
                  <p className="font-semibold text-slate-200">{extendedData.dengueOutbreak.trigger}</p>
                </div>
                <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
                  <p className="text-sm text-slate-400">Vector</p>
                  <p className="font-semibold text-orange-400">{extendedData.dengueOutbreak.vector}</p>
                </div>
                <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
                  <p className="text-sm text-slate-400">Researcher Quote</p>
                  <p className="text-sm italic text-slate-300">{extendedData.dengueOutbreak.researcherQuote}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-300 mb-3">Symptoms</p>
                <div className="space-y-2">
                  {extendedData.dengueOutbreak.symptoms.map((s: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-2">
                      <span className="text-sm text-slate-300">{s.symptom}</span>
                      <Badge variant="outline" className="text-xs">{s.detail}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel title="Food Poisoning Statistics (Dubai H1 2025)" description="Summer surge incidents">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                <p className="text-sm text-slate-400">Total Cases</p>
                <p className="text-3xl font-bold text-red-400">{extendedData.foodPoisoningStats.totalCasesH12025}+</p>
              </div>
              <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
                <p className="text-sm text-slate-400">Salmonella Confirmed</p>
                <p className="text-3xl font-bold text-orange-400">{extendedData.foodPoisoningStats.confirmedSalmonella}+</p>
              </div>
              <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
                <p className="text-sm text-slate-400">Primary Cause</p>
                <p className="text-sm font-semibold text-slate-300">{extendedData.foodPoisoningStats.contributingFactors}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold text-slate-300 mb-3">Causative Agents</p>
              <div className="flex flex-wrap gap-2">
                {extendedData.foodPoisoningStats.causativeAgents.map((agent: any, idx: number) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {agent.agent} ({agent.category})
                  </Badge>
                ))}
              </div>
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
                    <p className="font-semibold text-slate-200">{extendedData.alHosnApp.officialName}</p>
                  </div>
                  <p className="text-sm text-slate-400">{extendedData.alHosnApp.purpose}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-xs text-slate-400">Support Line</p>
                    <p className="font-semibold text-slate-200">{extendedData.alHosnApp.supportLine}</p>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-xs text-slate-400">Tracing Technology</p>
                    <p className="font-semibold text-slate-200">{extendedData.alHosnApp.tracingTechnology}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-2">Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {extendedData.alHosnApp.platforms.map((platform: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="text-xs">{platform}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-300 mb-3">Health Status Color Codes</p>
                <div className="space-y-2">
                  {extendedData.alHosnApp.colorCodes.map((code: any, idx: number) => (
                    <div key={idx} className={`rounded-lg border p-3 ${
                      code.color === 'Green' ? 'border-emerald-500/30 bg-emerald-500/10' :
                      code.color === 'Grey' ? 'border-slate-500/30 bg-slate-500/10' :
                      'border-red-500/30 bg-red-500/10'
                    }`}>
                      <div className="flex items-center gap-2">
                        <div className={`h-3 w-3 rounded-full ${
                          code.color === 'Green' ? 'bg-emerald-400' :
                          code.color === 'Grey' ? 'bg-slate-400' :
                          'bg-red-400'
                        }`} />
                        <p className="font-semibold text-slate-200">{code.color}</p>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">{code.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel title="Other Digital Health Tools" description="UAE digital health infrastructure">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {extendedData.digitalHealthTools.map((tool: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                >
                  <Laptop className="h-6 w-6 text-blue-400 mb-3" />
                  <p className="font-semibold text-slate-200">{tool.tool}</p>
                  <p className="text-sm text-slate-400 mt-1">{tool.function}</p>
                  <Badge variant="outline" className="mt-2 text-xs">{tool.authority}</Badge>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Vector Control (April 2026)" description="Mosquito control measures">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {Object.entries(extendedData.vectorControl).slice(0, 5).map(([key, value]: [string, any]) => (
                <div key={key} className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3">
                  <p className="text-xs text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-sm font-semibold text-emerald-400 mt-1">{value}</p>
                </div>
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
                    <p className="text-sm text-slate-300">{finding.finding}</p>
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
                  <p className="font-semibold text-slate-200">{response.initiative}</p>
                  <p className="text-sm text-slate-400 mt-1">{response.detail}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Affected Populations" description="COVID-19 mental health impact by group">
            <div className="space-y-3">
              {extendedData.mentalHealthImpact.affectedPopulations.map((pop: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-slate-300">{pop.group}</span>
                  </div>
                  <span className="text-sm text-slate-400">{pop.impact}</span>
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
                    <span className="text-sm text-slate-300">{impact.finding}</span>
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
                  <p className="text-sm text-slate-300 mt-1">{stat.metric}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Economic Impact Tab */}
        <TabsContent value="economic" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Economic Stimulus Packages</CardTitle>
                <CardDescription>COVID-19 economic support by jurisdiction</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={economicStimulusData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'amount', name: 'Amount ( billions)', color: CHART_COLORS.gold }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <GlassPanel title="Stimulus Package Details" description="Government economic support">
              <div className="space-y-3">
                {extendedData.economicImpactStimulus.stimulusPackages.map((pkg: any, idx: number) => (
                  <div key={idx} className="rounded-lg bg-slate-800/50 p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-200">{pkg.jurisdiction}</p>
                      <Badge variant="gold" className="text-xs">{pkg.amount}</Badge>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{pkg.duration}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          <GlassPanel title="Sector Impact" description="Economic impact by sector">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {extendedData.economicImpactStimulus.economicImpact.map((impact: any, idx: number) => (
                <div key={idx} className={`rounded-lg border p-4 ${
                  impact.impact === 'Severe impact' || impact.impact === 'Decreased'
                    ? 'border-red-500/30 bg-red-500/10'
                    : 'border-slate-700 bg-slate-800/50'
                }`}>
                  <p className="text-sm font-semibold text-slate-200">{impact.sector}</p>
                  <p className={`text-sm mt-1 ${
                    impact.impact === 'Severe impact' || impact.impact === 'Decreased'
                      ? 'text-red-400'
                      : 'text-slate-400'
                  }`}>{impact.impact}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="rounded-lg border border-gold/30 bg-gold/10 p-4">
            <div className="flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-gold" />
              <p className="text-sm text-slate-300">{extendedData.economicImpactStimulus.tessDetails}</p>
            </div>
          </div>
        </TabsContent>

        {/* Humanitarian Tab */}
        <TabsContent value="humanitarian" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Humanitarian Aid Metrics</CardTitle>
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

            <GlassPanel title="Global Medical Aid" description="UAE humanitarian response">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <p className="text-sm text-slate-400">Medical Aid Shipped</p>
                  <p className="text-2xl font-bold text-emerald-400">{extendedData.humanitarianResponse.globalMedicalAid.medicalAidShipped}</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <p className="text-sm text-slate-400">Countries Received Aid</p>
                  <p className="text-2xl font-bold text-emerald-400">{extendedData.humanitarianResponse.globalMedicalAid.countriesReceivedAid}</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <p className="text-sm text-slate-400">Medical Flights</p>
                  <p className="text-2xl font-bold text-emerald-400">{extendedData.humanitarianResponse.globalMedicalAid.medicalFlights}</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <p className="text-sm text-slate-400">Field Hospitals</p>
                  <p className="text-2xl font-bold text-emerald-400">{extendedData.humanitarianResponse.globalMedicalAid.fieldHospitalsEstablished}</p>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-gold/30 bg-gold/10 p-3">
                <p className="text-sm text-slate-400">International Response Share</p>
                <p className="text-xl font-bold text-gold">{extendedData.humanitarianResponse.globalMedicalAid.shareOfInternationalResponse}</p>
              </div>
            </GlassPanel>
          </div>

          <GlassPanel title="Major Initiatives" description="COVID-19 humanitarian campaigns">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {extendedData.humanitarianResponse.majorInitiatives.map((initiative: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                >
                  <Heart className="h-6 w-6 text-red-400 mb-2" />
                  <p className="font-semibold text-slate-200">{initiative.campaign}</p>
                  {initiative.date && initiative.date !== '-' && (
                    <p className="text-sm text-slate-400 mt-1">{initiative.date}</p>
                  )}
                  {initiative.detail && (
                    <p className="text-xs text-slate-500 mt-1">{initiative.detail}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Preparedness Tab */}
        <TabsContent value="preparedness" className="space-y-6">
          <GlassPanel title="UAE Preparedness Rankings" description="International rankings">
            <div className="space-y-4">
              {extendedData.healthSystemPreparedness.uaePreparednessRankings.map((rank: any, idx: number) => (
                <div key={idx} className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <div className="flex items-center gap-3">
                    <Medal className="h-6 w-6 text-gold" />
                    <div>
                      <p className="font-semibold text-slate-200">{rank.ranking}</p>
                      <p className="text-sm text-slate-400">{rank.rationale}</p>
                      <Badge variant="outline" className="mt-2 text-xs">{rank.source}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Enabling Factors" description="Why UAE excels in emergency preparedness">
            <div className="grid gap-4 sm:grid-cols-3">
              {extendedData.healthSystemPreparedness.enablingFactors.map((factor: string, idx: number) => (
                <div key={idx} className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                  <Shield className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-200">{factor}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Pandemic Readiness Program" description="One Health approach">
            <div className="space-y-4">
              {extendedData.healthSystemPreparedness.pandemicReadinessProgram.map((program: any, idx: number) => (
                <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald/20">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200">{program.component}</p>
                      <p className="text-sm text-slate-400">{program.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="International Health Cooperation" description="WHO relations and COVAX">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-4">
                <Globe className="h-6 w-6 text-blue-400 mb-3" />
                <p className="font-semibold text-slate-200">WHO Relations</p>
                <p className="text-sm text-slate-400 mt-2">{extendedData.internationalHealthCooperation.whoRelations.uaeHealthcareRanking}</p>
                <p className="text-xs text-slate-500 mt-1">- {extendedData.internationalHealthCooperation.whoRelations.statementBy}</p>
                <p className="text-xs text-slate-500">{extendedData.internationalHealthCooperation.whoRelations.statementDate}</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-300">COVAX Participation</p>
                {extendedData.internationalHealthCooperation.covaxParticipation.map((covax: any, idx: number) => (
                  <div key={idx} className="rounded-lg bg-slate-800/50 p-3">
                    <p className="text-sm text-slate-300">{covax.donor}</p>
                    <p className="text-lg font-bold text-gold">{covax.amount || covax.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/50 p-4"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Database className="h-4 w-4 text-slate-500" />
            <p className="text-sm text-slate-400">Confidence: 85%</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-slate-500" />
            <p className="text-sm text-slate-400">Report: 2026-04-27</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ExternalLink className="h-4 w-4 text-slate-500" />
          <p className="text-sm text-slate-400">Sources: Wikipedia, WHO, UAE Government, PMC, Harvard, Gulf News</p>
        </div>
      </motion.div>
    </div>
  )
}