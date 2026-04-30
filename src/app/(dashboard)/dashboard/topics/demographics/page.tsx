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
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Award,
  FileText,
  Heart,
  Building,
  Scale,
  Shield,
  Brain,
  DollarSign,
  Flag,
  User,
  MapPin,
  Calendar,
  BookOpen,
  Crosshair,
} from 'lucide-react'
import {
  demographicsMigrationData,
  populationSizeGrowth,
  nationalExpatriateComposition,
  vitalStatistics,
  goldenVisaProgram,
  visaCategoriesImmigration,
  citizenshipNaturalization,
  statelessnessBidoon,
  brainDrainBrainGain,
  remittanceFlows,
  urbanizationDensity,
  marriageDivorcePatterns,
  passportPowerMobility,
  socialCohesionTolerance,
  dashboardDataTables,
  reportMetadata,
} from '@/lib/data/topics/demographics-data'

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

export default function DemographicsMigrationPage() {
  // Dashboard data
  const keyPopMetrics = dashboardDataTables.keyPopulationMetrics
  const goldenVisaKPIs = dashboardDataTables.goldenVisaKPIs
  const passportKPIs = dashboardDataTables.passportPowerKPIs
  const humanCapitalKPIs = dashboardDataTables.humanCapitalKPIs

  // Population composition data
  const populationBreakdown = nationalExpatriateComposition.populationBreakdown
  const expatNationalities = nationalExpatriateComposition.expatriateNationalities.slice(0, 8)
  const emiratePopulations = nationalExpatriateComposition.populationByEmirate

  // Golden visa data
  const goldenVisaYearData = goldenVisaProgram.yearByYearIssuance.map(item => ({
    year: item.year.toString(),
    value: parseInt(item.visasIssued.replace(/[^0-9]/g, '')) || 0,
    color: CHART_COLORS.gold,
  }))

  // Expat composition pie data
  const expatPieData = [
    { name: 'Expatriates', value: 88.5, color: CHART_COLORS.gold },
    { name: 'Nationals', value: 11.5, color: CHART_COLORS.navy },
  ]

  // Top nationalities bar data
  const topNationalitiesData = expatNationalities.map((item, idx) => ({
    name: item.nationality,
    value: parseFloat(item.percentOfTotal.replace(/[^0-9.]/g, '')),
    color: idx < 3 ? CHART_COLORS.gold : CHART_COLORS.platinum,
  }))

  // Vital stats data
  const vitalStatsData = vitalStatistics.birthDeathRates.map(item => ({
    name: item.metric,
    value: parseFloat(item.value.split(' ')[0]),
    color: CHART_COLORS.emerald,
  }))

  // Urbanization trend data
  const urbanizationData = urbanizationDensity.urbanizationTrend.map(item => ({
    period: item.year.toString(),
    value: parseFloat(item.urbanPopulationPercent.replace(/[^0-9.]/g, '')),
    color: CHART_COLORS.platinum,
  }))

  // Religious distribution data
  const religiousData = socialCohesionTolerance.legalFramework.length > 0
    ? vitalStatistics.ageStructure.map((item, idx) => ({
        name: item.ageGroup,
        value: parseFloat(item.percentage.replace(/[^0-9.]/g, '')),
        color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
      }))
    : []

  // Sentiment distribution
  const sentimentData = [
    { name: 'Positive (Growth)', value: 45, color: CHART_COLORS.emerald },
    { name: 'Neutral (Systemic)', value: 30, color: CHART_COLORS.platinum },
    { name: 'Negative (Concern)', value: 25, color: CHART_COLORS.rose },
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
          <Badge variant="default" className="mb-2">S-SECTOR</Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-platinum">Demographics & Migration</h1>
          <p className="mt-2 text-platinum-400">
            {demographicsMigrationData.description}
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {reportMetadata?.reportCompiled || '2026-04-27'}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {reportMetadata?.dataPointsCount || '500+'} facts
            </span>
            <span className="flex items-center gap-1">
              <Crosshair className="h-4 w-4" />
              {reportMetadata?.sourcesCount || '40+'} sources
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Users className="h-4 w-4" />
            Population
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
          title="Total Population"
          value="11.57M"
          previousValue={10.8}
          icon={<Users className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
        <MetricCard
          title="Expat Share"
          value="88.5%"
          previousValue={87}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Golden Visas"
          value="350K+"
          previousValue={200}
          icon={<Award className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Brain Gain Index"
          value="1.8"
          previousValue={2.1}
          icon={<Brain className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'DEM-1', name: 'Population Growth' },
            { id: 'DEM-2', name: 'Expat Composition' },
            { id: 'DEM-3', name: 'Golden Visa' },
            { id: 'DEM-4', name: 'Citizenship' },
            { id: 'DEM-5', name: 'Brain Gain' },
            { id: 'DEM-6', name: 'Passport Power' },
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
          <TabsTrigger value="population">Population</TabsTrigger>
          <TabsTrigger value="goldenvisa">Golden Visa</TabsTrigger>
          <TabsTrigger value="citizenship">Citizenship</TabsTrigger>
          <TabsTrigger value="vitalstats">Vital Stats</TabsTrigger>
          <TabsTrigger value="mobility">Mobility</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="Demographics & Migration Overview"
            description="Key population metrics and migration indicators"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              {/* Population vs Expat */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-gold" />
                      Population Composition
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={expatPieData}
                      height={200}
                      showLegend={true}
                      donut={true}
                    />
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="text-center p-2 bg-gold/20 rounded-lg">
                        <p className="text-lg font-bold text-gold">88.5%</p>
                        <p className="text-xs text-platinum-500">Expatriates</p>
                      </div>
                      <div className="text-center p-2 bg-navy/20 rounded-lg">
                        <p className="text-lg font-bold text-navy">11.5%</p>
                        <p className="text-xs text-platinum-500">Nationals</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Brain className="h-5 w-5 text-emerald" />
                      Brain Gain Index
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {humanCapitalKPIs.map((kpi, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-200">{kpi.kpi}</span>
                            <span className="text-lg font-bold text-emerald">{kpi.value}</span>
                          </div>
                          <Progress
                            value={kpi.assessment === 'Brain Gain' ? 85 : kpi.assessment === 'Excellent' ? 75 : 60}
                            className="h-2"
                          />
                          <Badge variant="outline" className="text-xs text-emerald border-emerald/50">{kpi.assessment}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Population Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-platinum" />
                    Key Population Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {keyPopMetrics.map((metric, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <p className="text-2xl font-bold text-gold">{metric.currentValue}</p>
                        <p className="text-sm text-platinum-400 mt-1">{metric.kpi}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment */}
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
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Population Tab */}
        <TabsContent value="population" className="space-y-6">
          <GlassPanel
            title="Population & Expatriate Composition"
            description="Detailed breakdown of UAE's demographic structure"
            badge="Core"
          >
            <div className="space-y-6">
              {/* Growth Trajectory */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-gold" />
                    Population Growth Trajectory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={populationSizeGrowth.growthTrajectory.map((item, idx) => ({
                      period: item.year.toString(),
                      value: parseFloat(item.population.replace(/[^0-9.]/g, '')) / 1000000,
                      color: CHART_COLORS.gold,
                    }))}
                    xAxisKey="period"
                    areas={[{ dataKey: 'value', name: 'Population (M)', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Top Nationalities */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-platinum" />
                    Top Expatriate Nationalities (2024-2026)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={topNationalitiesData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: '% of Total', color: CHART_COLORS.gold }]}
                    height={300}
                    showGrid={true}
                    horizontal={true}
                  />
                </CardContent>
              </Card>

              {/* Population by Emirate */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-emerald" />
                    Population by Emirate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                    {emiratePopulations.map((emirate, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <p className="text-lg font-bold text-platinum">{emirate.population}</p>
                        <p className="text-sm text-gold">{emirate.emirate}</p>
                        <p className="text-xs text-platinum-500">{emirate.percentOfTotal}</p>
                        {emirate.yoyGrowth && (
                          <Badge variant="outline" className="text-xs text-emerald mt-1">{emirate.yoyGrowth}</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-platinum-500 mt-3 text-center">
                    83% of population concentrated in Dubai, Abu Dhabi, and Sharjah
                  </p>
                </CardContent>
              </Card>

              {/* Indian Diaspora */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="h-5 w-5 text-gold" />
                    Indian Diaspora - Largest Expat Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400">Total Indian Population</p>
                        <p className="text-2xl font-bold text-gold">~4 million</p>
                        <p className="text-xs text-platinum-500">37.96% of total UAE population</p>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400">Top Source State</p>
                        <p className="text-xl font-bold text-platinum">Kerala - 35%</p>
                        <p className="text-xs text-platinum-500">1.4 million people</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-platinum-300">Socioeconomic Profile</p>
                      {nationalExpatriateComposition.indianSocioeconomicProfile.map((profile, idx) => (
                        <div key={idx} className="flex justify-between p-2 bg-slate-800/50 rounded-lg">
                          <span className="text-platinum-300">{profile.category}</span>
                          <span className="font-bold text-gold">{profile.percentage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gender Distribution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-platinum" />
                    Gender Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {populationSizeGrowth.genderDistribution.map((item, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <p className="text-2xl font-bold text-platinum">{item.value}</p>
                        <p className="text-sm text-platinum-400 mt-1">{item.metric}</p>
                        <p className="text-xs text-platinum-500">{item.year}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-platinum-500 mt-3 italic">
                    {populationSizeGrowth.genderRatioAnalysis}
                  </p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Golden Visa Tab */}
        <TabsContent value="goldenvisa" className="space-y-6">
          <GlassPanel
            title="Golden Visa Program"
            description="World's most ambitious residency-by-investment program"
            badge="Success Story"
          >
            <div className="space-y-6">
              {/* Year-by-Year Growth */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-gold" />
                    Golden Visa Issuance Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={goldenVisaYearData}
                    xAxisKey="year"
                    bars={[{ dataKey: 'value', name: 'Visas Issued', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                  />
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="p-3 bg-gold/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold">350K+</p>
                      <p className="text-sm text-platinum-400">Total (2020-2025)</p>
                    </div>
                    <div className="p-3 bg-emerald/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald">900%+</p>
                      <p className="text-sm text-platinum-400">Growth Rate</p>
                    </div>
                    <div className="p-3 bg-platinum/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">~120K</p>
                      <p className="text-sm text-platinum-400">2025 Est.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Recipient Nationalities */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Flag className="h-5 w-5 text-platinum" />
                    Top Recipient Nationalities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {goldenVisaProgram.recipientsByNationality.map((nat, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                            {idx + 1}
                          </div>
                          <span className="text-platinum-200 font-medium">{nat.nationality}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-gold">{nat.percentage}</span>
                          <Badge variant="outline" className="ml-2 text-xs">{nat.priority}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-platinum-500 mt-3 italic">
                    Top 4 nationalities represent approximately 63% of all golden visa approvals
                  </p>
                </CardContent>
              </Card>

              {/* Russian Investment */}
              <Card className="glass-card border-gold-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-gold">
                    <DollarSign className="h-5 w-5" />
                    Russian Investment Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gold/20 rounded-lg text-center border border-gold/30">
                      <p className="text-4xl font-bold text-gold">$6.3B</p>
                      <p className="text-sm text-platinum-400 mt-1">Dubai Property Purchases</p>
                      <p className="text-xs text-platinum-500">Since early 2022</p>
                    </div>
                    <div className="p-4 bg-emerald/20 rounded-lg text-center border border-emerald/30">
                      <p className="text-4xl font-bold text-emerald">10x</p>
                      <p className="text-sm text-platinum-400 mt-1">Increase vs Pre-2022</p>
                      <p className="text-xs text-platinum-500">Post-Ukraine invasion</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Eligibility Categories */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald" />
                    10-Year Golden Visa Eligibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {goldenVisaProgram.eligibilityCategories_10Year.map((cat, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="font-medium text-platinum-200 text-sm">{cat.category}</p>
                        {cat.details && <p className="text-xs text-platinum-500 mt-1">{cat.details}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Policy Updates 2024 */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow" />
                    2024 Policy Updates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {goldenVisaProgram.policyUpdates2024.map((update, idx) => (
                      <div key={idx} className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                        <p className="text-yellow-300 font-medium">{update.update}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Citizenship Tab */}
        <TabsContent value="citizenship" className="space-y-6">
          <GlassPanel
            title="Citizenship & Naturalization"
            description="Pathways to citizenship and gender discrimination issues"
            badge="Policy"
          >
            <div className="space-y-6">
              {/* Pathways */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-gold" />
                    11 Citizenship Pathways
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {citizenshipNaturalization.citizenshipPathways_11Total.map((path, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-6 h-6 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center font-bold">
                            {path.number}
                          </span>
                          <span className="font-medium text-platinum-200 text-sm">{path.pathway}</span>
                        </div>
                        <p className="text-xs text-platinum-500">{path.keyRequirements}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gender Discrimination */}
              <Card className="glass-card border-rose-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Gender Discrimination in Citizenship (HRW 2021)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {citizenshipNaturalization.genderDiscrimination_HRW_2021.map((item, idx) => (
                      <div key={idx} className="p-3 bg-rose/10 border border-rose/30 rounded-lg">
                        <p className="font-medium text-rose-300 text-sm mb-2">{item.category}</p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 bg-slate-800/50 rounded text-center">
                            <p className="text-xs text-platinum-500">Men</p>
                            <p className="text-sm font-medium text-platinum-200">{item.men}</p>
                          </div>
                          <div className="p-2 bg-slate-800/50 rounded text-center">
                            <p className="text-xs text-platinum-500">Women</p>
                            <p className="text-sm font-medium text-rose-300">{item.women}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-platinum-500 mt-3 italic">
                    {citizenshipNaturalization.genderDiscriminationImpact}
                  </p>
                </CardContent>
              </Card>

              {/* Bidoon */}
              <Card className="glass-card border-yellow-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-yellow-400">
                    <User className="h-5 w-5" />
                    Statelessness (Bidoon)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {statelessnessBidoon.populationEstimates.map((est, idx) => (
                      <div key={idx} className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-center">
                        <p className="text-xl font-bold text-yellow-400">{est.estimate}</p>
                        <p className="text-xs text-platinum-500">{est.source}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-platinum-300 mb-2">Rights Denied Without Citizenship:</p>
                  <div className="flex flex-wrap gap-2">
                    {statelessnessBidoon.rightsDeniedWithoutCitizenship.map((right, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{right}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Naturalization Requirements */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-platinum" />
                    Naturalization Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {citizenshipNaturalization.naturalizationRequirements.map((req, idx) => (
                      <div key={idx} className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                        <div>
                          <span className="text-platinum-200 font-medium">{req.requirement}</span>
                          {req.exceptions && (
                            <p className="text-xs text-platinum-500">Exception: {req.exceptions}</p>
                          )}
                        </div>
                        <span className="text-gold font-medium">{req.standard}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Vital Stats Tab */}
        <TabsContent value="vitalstats" className="space-y-6">
          <GlassPanel
            title="Vital Statistics & Demographics"
            description="Birth rates, death rates, life expectancy, age structure"
            badge="Health"
          >
            <div className="space-y-6">
              {/* Birth/Death Rates */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-emerald" />
                    Birth & Death Rates (2022)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {vitalStatistics.birthDeathRates.map((stat, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <p className="text-2xl font-bold text-emerald">{stat.value.split(' ')[0]}</p>
                        <p className="text-xs text-platinum-400">{stat.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Life Expectancy */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-platinum" />
                    Life Expectancy (2022)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {vitalStatistics.lifeExpectancy.map((item, idx) => (
                      <div key={idx} className="p-4 bg-platinum/20 rounded-lg text-center">
                        <p className="text-4xl font-bold text-platinum">{item.years}</p>
                        <p className="text-sm text-platinum-400 mt-1">Years</p>
                        <Badge variant="outline" className="mt-2">{item.metric}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Age Structure */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-gold" />
                    Age Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={vitalStatistics.ageStructure.map((item, idx) => ({
                      name: item.ageGroup,
                      value: parseFloat(item.percentage.replace(/[^0-9.]/g, '')),
                      color: idx === 1 ? CHART_COLORS.gold : CHART_COLORS.platinum,
                    }))}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Percentage', color: CHART_COLORS.gold }]}
                    height={200}
                    showGrid={true}
                    horizontal={true}
                  />
                </CardContent>
              </Card>

              {/* Marriage & Divorce */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rose" />
                    Marriage & Divorce Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {marriageDivorcePatterns.divorceStatistics.slice(0, 4).map((stat, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <p className="text-2xl font-bold text-rose">{stat.value}</p>
                        <p className="text-xs text-platinum-400">{stat.metric}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-rose/10 border border-rose/30 rounded-lg">
                    <p className="text-sm font-semibold text-rose-300 mb-2">Expert Analysis - Divorce Causes:</p>
                    {marriageDivorcePatterns.expertAnalysisCauses.map((cause, idx) => (
                      <p key={idx} className="text-xs text-platinum-400">• {cause.description}</p>
                    ))}
                    <p className="text-xs text-platinum-500 mt-2 italic">
                      "{marriageDivorcePatterns.expertQuote.quote}" — {marriageDivorcePatterns.expertQuote.source}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Urbanization */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-emerald" />
                    Urbanization Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={urbanizationData}
                    xAxisKey="period"
                    areas={[{ dataKey: 'value', name: 'Urban %', color: CHART_COLORS.emerald }]}
                    height={200}
                    showGrid={true}
                  />
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald">85.82%</p>
                      <p className="text-xs text-platinum-400">2024 Urban</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-gold">165.84</p>
                      <p className="text-xs text-platinum-400">Density /sq km (2026)</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum">83,600</p>
                      <p className="text-xs text-platinum-400">Total Area (sq km)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Mobility Tab */}
        <TabsContent value="mobility" className="space-y-6">
          <GlassPanel
            title="Passport Power & Mobility"
            description="UAE's world-leading passport and visa-free access"
            badge="#1 Globally"
          >
            <div className="space-y-6">
              {/* Passport Rankings */}
              <Card className="glass-card border-gold-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-gold">
                    <FileText className="h-5 w-5" />
                    UAE Passport Rankings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {passportPowerMobility.uaePassportRankings.map((rank, idx) => (
                      <div key={idx} className="p-4 bg-gold/20 rounded-lg border border-gold/30 text-center">
                        <p className="text-4xl font-bold text-gold">{rank.ranking}</p>
                        <p className="text-sm text-platinum-400 mt-1">{rank.index}</p>
                        <p className="text-lg font-bold text-platinum mt-2">{rank.visaFreeDestinations}</p>
                        <p className="text-xs text-platinum-500">Visa-free destinations</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="text-sm text-platinum-400">Places gained since 2006</p>
                      <p className="text-2xl font-bold text-emerald">+57</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="text-sm text-platinum-400">Destinations gained</p>
                      <p className="text-2xl font-bold text-emerald">+149</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Historical Milestones */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-platinum" />
                    Passport Power Historical Progression
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {passportPowerMobility.historicalProgression.map((milestone, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 bg-slate-800/50 rounded-lg">
                        <span className="w-20 text-gold font-medium text-sm">{milestone.year}</span>
                        <span className="text-platinum-200 text-sm">{milestone.milestone}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Global Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-platinum" />
                    Global Comparison (2026)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {passportPowerMobility.globalComparison2026.map((country, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <p className="text-lg font-bold text-platinum">#{country.rank}</p>
                        <p className="text-xs text-gold">{country.country}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Remittance Flows */}
              <Card className="glass-card border-emerald-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-emerald">
                    <DollarSign className="h-5 w-5" />
                    Remittance Flows
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="p-3 bg-emerald/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald">2nd-3rd</p>
                      <p className="text-xs text-platinum-400">Global Ranking</p>
                    </div>
                    <div className="p-3 bg-gold/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-gold">$39.7B</p>
                      <p className="text-xs text-platinum-400">Annual Outflows (2022)</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum">$25.5B</p>
                      <p className="text-xs text-platinum-400">UAE-India (2025 est.)</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum">15%</p>
                      <p className="text-xs text-platinum-400">Digital Platforms (vs 52% global)</p>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg">
                    <p className="text-sm font-semibold text-platinum-300 mb-2">Top Remittance Corridors</p>
                    {remittanceFlows.averageTicketSizeByDestination.slice(0, 5).map((corridor, idx) => (
                      <div key={idx} className="flex justify-between p-2 border-b border-slate-700 last:border-0">
                        <span className="text-platinum-300 text-sm">{corridor.country}</span>
                        <span className="text-gold font-medium">{corridor.averageTransferUSD}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tolerance & Social Cohesion */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald" />
                    Social Cohesion & Tolerance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {socialCohesionTolerance.keyInstitutions.slice(0, 6).map((inst, idx) => (
                      <div key={idx} className="p-3 bg-emerald/10 border border-emerald/30 rounded-lg">
                        <p className="font-medium text-emerald-300 text-sm">{inst.institution}</p>
                        <p className="text-xs text-platinum-500 mt-1">{inst.purpose}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-platinum/10 border border-platinum/30 rounded-lg">
                    <p className="text-sm text-emerald-400 font-medium">Interfaith Achievement:</p>
                    <p className="text-sm text-platinum-300">{socialCohesionTolerance.interfaithAchievement}</p>
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
