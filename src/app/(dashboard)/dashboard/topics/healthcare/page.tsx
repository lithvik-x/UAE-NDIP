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
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Heart,
  Activity,
  Users,
  Building,
  Plane,
  AlertCircle,
  Shield,
  Stethoscope,
  Pill,
  Ambulance,
  Brain,
  Baby,
  AlertTriangle,
  Globe,
  Award,
  Clock,
  Bed,
  UsersRound,
  Syringe,
  FileCheck,
  HeartPulse,
  Scale,
  TestTube,
  Video,
} from 'lucide-react'
import {
  healthcareData,
  healthcareSystemStructure,
  healthcareAuthoritiesGovernance,
  healthcareInfrastructure,
  hospitalQualityRankings,
  covid19PandemicResponse,
  vaccinationCampaign,
  healthInsuranceSystem,
  medicalTourism,
  mentalHealthServices,
  healthcareWorkforce,
  pharmaceuticalRegulation,
  organTransplantation,
  chronicDiseaseBurden,
  foodSafety,
  telemedicineDigitalHealth,
  ivfReproductiveHealth,
  medicalMalpracticeLiability,
  healthcareFraud,
  whoInternationalCollaboration,
  healthEmergencies,
  dashboardDataTables,
  reportMetadata,
} from '@/lib/data/topics/healthcare-data'

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

export default function HealthcarePage() {
  // Key metrics from dashboard data
  const keyMetrics = dashboardDataTables.healthcareSystemKPIs
  const covidMetrics = dashboardDataTables.covid19Metrics
  const tourismMetrics = dashboardDataTables.medicalTourismKPIs
  const organMetrics = dashboardDataTables.organTransplantationKPIs
  const mentalHealthMetrics = dashboardDataTables.mentalHealthMetrics

  // Sentiment distribution data
  const sentimentData = [
    { name: 'Positive', value: 45, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 25, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 30, color: CHART_COLORS.rose },
  ]

  // Chronic disease chart data
  const chronicDiseaseData = chronicDiseaseBurden.diseasePrevalence.slice(0, 6).map(item => ({
    name: item.condition.split(' ').slice(0, 2).join(' '),
    value: parseFloat(item.prevalence.replace(/[^0-9.]/g, '')) || 0,
    color: CHART_COLORS.warning,
  }))

  // Hospital ranking data
  const hospitalRankingData = hospitalQualityRankings.newsweekWorldsBestHospitals2025.slice(0, 5).map(item => ({
    name: item.hospital.split(' ').slice(0, 2).join(' '),
    value: parseFloat(item.score.replace('%', '')),
    color: CHART_COLORS.emerald,
  }))

  // Vaccination trend data
  const vaccinationData = [
    { month: 'Dec 2020', doses: 5, color: CHART_COLORS.navy },
    { month: 'Mar 2021', doses: 25, color: CHART_COLORS.navy },
    { month: 'Jun 2021', doses: 50, color: CHART_COLORS.navy },
    { month: 'Sep 2021', doses: 75, color: CHART_COLORS.navy },
    { month: 'Dec 2021', doses: 90, color: CHART_COLORS.navy },
    { month: 'Mar 2022', doses: 100, color: CHART_COLORS.navy },
  ]

  // Medical tourism by region
  const tourismRegionData = [
    { name: 'Asia', value: 33, color: CHART_COLORS.warning },
    { name: 'GCC', value: 28, color: CHART_COLORS.gold },
    { name: 'Europe/CIS', value: 23, color: CHART_COLORS.platinum },
    { name: 'Other', value: 16, color: CHART_COLORS.navy },
  ]

  // Healthcare workforce data
  const workforceData = [
    { role: 'Nurses', count: 55000, color: CHART_COLORS.info },
    { role: 'Doctors', count: 18100, color: CHART_COLORS.navy },
    { role: 'Technicians', count: 8500, color: CHART_COLORS.gold },
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
          <Badge variant="default" className="mb-2">C-SECTOR</Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-emerald-500">Healthcare Intelligence</h1>
          <p className="mt-2 text-emerald-400">
            {healthcareData.description}
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-emerald-500">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {reportMetadata?.reportCompiled || '2026-04-27'}
            </span>
            <span className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {reportMetadata?.sourcesFetched || '45+ sources'}
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10">
            <Stethoscope className="h-4 w-4" />
            Health Monitor
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-white gap-2">
            <HeartPulse className="h-4 w-4" />
            Track Metrics
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Population"
          value="10.08M"
          previousValue={9.9}
          icon={<Users className="h-6 w-6" />}
          gradient="emerald"
          status="info"
        />
        <MetricCard
          title="Life Expectancy"
          value="79"
          previousValue={78.5}
          icon={<Heart className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="JCI Accredited"
          value="214+"
          previousValue={180}
          icon={<Award className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Hospital Market"
          value="$10.9B"
          previousValue={9.8}
          icon={<Building className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'HLT-1', name: 'Healthcare System' },
            { id: 'HLT-2', name: 'COVID-19 Response' },
            { id: 'HLT-3', name: 'Medical Tourism' },
            { id: 'HLT-4', name: 'Health Insurance' },
            { id: 'HLT-5', name: 'Organ Transplant' },
            { id: 'HLT-6', name: 'Mental Health' },
          ].map((area) => (
            <Badge key={area.id} variant="outline" className="border-emerald-500/30 text-emerald-500">
              {area.id} - {area.name}
            </Badge>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="covid">COVID-19</TabsTrigger>
          <TabsTrigger value="tourism">Medical Tourism</TabsTrigger>
          <TabsTrigger value="insurance">Health Insurance</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="mental">Mental Health</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="Healthcare System Overview"
            description="Key metrics and healthcare indicators"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Sentiment Distribution */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <HeartPulse className="h-5 w-5 text-emerald-500" />
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
                      <div className="text-center p-2 bg-emerald-500/20 rounded-lg">
                        <p className="text-lg font-bold text-emerald-500">45%</p>
                        <p className="text-xs text-emerald-500">Positive</p>
                      </div>
                      <div className="text-center p-2 bg-platinum/20 rounded-lg">
                        <p className="text-lg font-bold text-platinum-500">25%</p>
                        <p className="text-xs text-platinum-500">Neutral</p>
                      </div>
                      <div className="text-center p-2 bg-rose-500/20 rounded-lg">
                        <p className="text-lg font-bold text-rose-500">30%</p>
                        <p className="text-xs text-rose-500">Negative</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Chronic Disease Burden */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-warning" />
                      Chronic Disease Burden
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={chronicDiseaseData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Prevalence %', color: CHART_COLORS.warning }]}
                      height={200}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Key Healthcare Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-gold-700" />
                    Healthcare System Key Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {keyMetrics.slice(0, 8).map((metric, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg text-center">
                        <p className="text-2xl font-bold text-gold-700">{metric.value}</p>
                        <p className="text-sm text-emerald-400 mt-1">{metric.kpi}</p>
                        <p className="text-xs text-platinum-500">{metric.trend}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Hospital Quality Rankings */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-emerald-500" />
                    Newsweek World's Best Hospitals 2025 - UAE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={hospitalRankingData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Score %', color: CHART_COLORS.emerald }]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* COVID-19 Tab */}
        <TabsContent value="covid" className="space-y-6">
          <GlassPanel
            title="COVID-19 Pandemic Response"
            description="UAE's response to the COVID-19 pandemic"
            badge="Critical"
          >
            <div className="space-y-6">
              {/* COVID Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-navy-500" />
                    COVID-19 Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    {covid19PandemicResponse.timeline.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <p className="text-sm font-semibold text-navy-500">{item.date}</p>
                        <p className="text-xs text-platinum-400 mt-1">{item.event}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* COVID Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5 text-emerald-500" />
                    COVID-19 Statistics (as of May 24, 2023)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {covidMetrics.map((metric, idx) => (
                      <div key={idx} className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center">
                        <p className="text-2xl font-bold text-emerald-500">{metric.value}</p>
                        <p className="text-xs text-platinum-400 mt-1">{metric.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Vaccination Campaign */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Syringe className="h-5 w-5 text-gold-700" />
                    Vaccination Campaign
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <AreaChart
                        data={vaccinationData}
                        xAxisKey="month"
                        areas={[{ dataKey: 'doses', name: 'Doses per 100', color: CHART_COLORS.navy }]}
                        height={200}
                        showGrid={true}
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 bg-navy/20 rounded-lg">
                        <p className="text-sm text-platinum-400">Total Doses</p>
                        <p className="text-2xl font-bold text-navy-500">16.4M</p>
                      </div>
                      <div className="p-4 bg-emerald-500/20 rounded-lg">
                        <p className="text-sm text-platinum-400">Fully Vaccinated</p>
                        <p className="text-2xl font-bold text-emerald-500">68.4%</p>
                      </div>
                      <div className="p-4 bg-gold-700/20 rounded-lg">
                        <p className="text-sm text-platinum-400">At Least One Dose</p>
                        <p className="text-2xl font-bold text-gold-700">77.7%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Achievements */}
              <Card className="glass-card border-emerald-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-emerald-500">
                    <Shield className="h-5 w-5" />
                    Response Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2">
                    {covid19PandemicResponse.responseAchievements.map((achievement, idx) => (
                      <div key={idx} className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald rounded-full mt-1.5"></div>
                        <span className="text-sm text-platinum-200">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Medical Tourism Tab */}
        <TabsContent value="tourism" className="space-y-6">
          <GlassPanel
            title="Medical Tourism Intelligence"
            description="Healthcare tourism revenue and patient flows"
            badge="Growing"
          >
            <div className="space-y-6">
              {/* Market Size */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Plane className="h-5 w-5 text-gold-700" />
                    Medical Tourism Market Size
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold-700">$865.8M</p>
                      <p className="text-sm text-platinum-400">2025 Market</p>
                    </div>
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald-500">$4.5B</p>
                      <p className="text-sm text-platinum-400">2034 Projection</p>
                    </div>
                    <div className="p-4 bg-navy/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-navy-500">19.63%</p>
                      <p className="text-sm text-platinum-400">CAGR</p>
                    </div>
                    <div className="p-4 bg-platinum/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum-500">691K+</p>
                      <p className="text-sm text-platinum-400">Dubai Tourists 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Patient Origin */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-platinum-500" />
                    Patient Origin Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <PieChart
                      data={tourismRegionData}
                      height={200}
                      showLegend={true}
                    />
                    <div className="space-y-3">
                      {medicalTourism.topSpecialties.slice(0, 5).map((specialty, idx) => (
                        <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-gold-700 font-bold">#{specialty.rank}</span>
                            <span className="text-platinum-200">{specialty.specialty}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Abu Dhabi Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-emerald-500" />
                    Abu Dhabi Medical Tourism
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald-500">15,000+</p>
                      <p className="text-sm text-platinum-400">Annual Tourists</p>
                    </div>
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold-700">8th</p>
                      <p className="text-sm text-platinum-400">Global Rank (MTA)</p>
                    </div>
                    <div className="p-4 bg-navy/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-navy-500">9th</p>
                      <p className="text-sm text-platinum-400">Quality Rank</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Health Insurance Tab */}
        <TabsContent value="insurance" className="space-y-6">
          <GlassPanel
            title="Health Insurance System"
            description="Coverage, Thiqa program, and insurance obligations"
            badge="Critical"
          >
            <div className="space-y-6">
              {/* Coverage Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-500" />
                    Coverage by Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {healthInsuranceSystem.systemOverview.map((item, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-platinum-200">{item.category}</p>
                            <p className="text-sm text-emerald-400 mt-1">{item.coverage}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">{item.sourceOfFunding}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Thiqa Program */}
              <Card className="glass-card border-gold-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-gold-700">
                    <Award className="h-5 w-5" />
                    Thiqa Program (Abu Dhabi)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-sm text-platinum-400">Managed By</p>
                      <p className="text-lg font-bold text-gold-700">Daman (since 2008)</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-sm text-platinum-400">Eligible</p>
                      <p className="text-lg font-bold text-platinum-500">UAE Nationals</p>
                    </div>
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-sm text-platinum-400">Annual Limit</p>
                      <p className="text-lg font-bold text-emerald-500">None</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-platinum-800/50 rounded-lg">
                    <p className="text-sm font-semibold text-gold-700 mb-2">Benefits Include:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-platinum-400">
                      <span>- Inpatient: Day surgery, private room</span>
                      <span>- Outpatient: Consultations, diagnostics</span>
                      <span>- Maternity: Inpatient and outpatient</span>
                      <span>- Dental, rehabilitation, check-ups</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Employer Obligations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-navy-500" />
                    Employer Obligations (2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {healthInsuranceSystem.employerObligations.map((oblig, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg flex justify-between">
                        <span className="text-platinum-400 text-sm">{oblig.requirement}</span>
                        <span className="text-navy-500 font-medium text-sm">{oblig.detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                    <p className="text-sm text-rose-300">
                      <span className="font-semibold">Penalty:</span> AED 500/employee/month for no coverage or lapsed coverage
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Infrastructure Tab */}
        <TabsContent value="infrastructure" className="space-y-6">
          <GlassPanel
            title="Healthcare Infrastructure"
            description="Facilities, hospitals, and workforce"
            badge="Core"
          >
            <div className="space-y-6">
              {/* Hospital Distribution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-navy-500" />
                    Hospital Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-navy/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-navy-500">40+</p>
                      <p className="text-sm text-platinum-400">Public</p>
                    </div>
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold-700">79+</p>
                      <p className="text-sm text-platinum-400">Private</p>
                    </div>
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald-500">119+</p>
                      <p className="text-sm text-platinum-400">Total</p>
                    </div>
                    <div className="p-4 bg-platinum/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum-500">214+</p>
                      <p className="text-sm text-platinum-400">JCI Accredited</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Healthcare Workforce */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <UsersRound className="h-5 w-5 text-emerald-500" />
                    Healthcare Workforce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {healthcareWorkforce.nursingStatistics.slice(0, 4).map((stat, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-platinum-200">{stat.metric}</span>
                          <span className="text-sm font-bold text-emerald-500">{stat.value}</span>
                        </div>
                        <Progress value={70 + Math.random() * 30} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Major Public Hospitals */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Bed className="h-5 w-5 text-gold-700" />
                    Major Public Hospitals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {healthcareInfrastructure.majorPublicHospitals.map((hospital, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg flex justify-between">
                        <div>
                          <p className="font-medium text-platinum-200">{hospital.hospital}</p>
                          <p className="text-xs text-platinum-500">{hospital.location}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">{hospital.specialty}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Mental Health Tab */}
        <TabsContent value="mental" className="space-y-6">
          <GlassPanel
            title="Mental Health Services"
            description="Prevalence, facilities, and legal framework"
            badge="Growing"
          >
            <div className="space-y-6">
              {/* Prevalence Statistics */}
              <Card className="glass-card border-warning-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-warning">
                    <Brain className="h-5 w-5" />
                    Mental Health Prevalence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {mentalHealthMetrics.map((metric, idx) => (
                      <div key={idx} className="p-4 bg-warning/10 border border-warning/30 rounded-lg text-center">
                        <p className="text-2xl font-bold text-warning">{metric.value}</p>
                        <p className="text-xs text-platinum-400 mt-1">{metric.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Federal Law No. 10 of 2023 */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-emerald-500" />
                    Federal Law No. 10 of 2023
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-sm text-platinum-400">Effective Date</p>
                      <p className="text-lg font-bold text-emerald-500">May 30, 2024</p>
                    </div>
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-sm text-platinum-400">Replaced</p>
                      <p className="text-lg font-bold text-gold-700">Federal Law 28/1981</p>
                    </div>
                    <div className="p-4 bg-rose-500/20 rounded-lg text-center">
                      <p className="text-sm text-platinum-400">Penalties</p>
                      <p className="text-lg font-bold text-rose-500">AED 50K-200K</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-platinum-800/50 rounded-lg">
                    <p className="text-sm font-semibold text-gold-700 mb-2">Key Provisions:</p>
                    <div className="grid gap-2 text-xs text-platinum-400">
                      <span>- Employment protections (Article 9)</span>
                      <span>- Employer termination requires specialized committee report</span>
                      <span>- Confidentiality rights extend to employees</span>
                      <span>- Monitoring committees required in each emirate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Facilities */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-platinum-500" />
                    Key Facilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {mentalHealthServices.keyFacilities.map((facility, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg flex justify-between items-center">
                        <div>
                          <p className="font-medium text-platinum-200">{facility.facility}</p>
                          <p className="text-sm text-platinum-500">{facility.location}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">{facility.notes}</Badge>
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
