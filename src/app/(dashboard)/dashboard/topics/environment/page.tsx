
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel, GlassCard } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import { motion } from 'framer-motion'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  Leaf,
  Wind,
  Droplets,
  Sun,
  TreePine,
  Factory,
  Recycle,
  Thermometer,
  CloudRain,
  Zap,
  Shield,
  Lightbulb,
  Landmark,
  Waves,
  Car,
  TrendingUp,
  TrendingDown,
  Activity,
  Users,
  Building,
  Eye,
  Scale,
  TreeDeciduous,
  Fish,
  Mountain,
  Siren,
} from 'lucide-react'
import {
  environmentInfrastructureData as data,
  dashboardKPIs,
  climatePolicyData,
  netZero2050Data,
  renewableEnergyData,
  cop28Data,
  airQualityData,
  waterDesalinationData,
  wasteManagementData,
  biodiversityData,
  climateImpactsData,
  perCapitaEmissionsData,
  greenwashingData,
  energyInfrastructureData,
  marineThreatsData,
  landReclamationData,
  sustainabilityData,
  megaInfrastructureData,
  roadSafetyData,
  trafficCongestionData,
  entityRegisterData,
  sentimentAnalysisData,
  sourceCredibilityData,
  uaeRelevanceAssessmentData,
} from '@/lib/data/topics/environment-infrastructure-data'

// Animation variants for staggered mount
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export default function EnvironmentInfrastructurePage() {
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Environment & Infrastructure data...</div>
      </div>
    )
  }

  const { metrics, keyFindings, sentiment, emotions, credibility, trends } = data

  // Sentiment data for pie chart
  const sentimentData = sentiment ? [
    { name: 'Positive', value: sentiment.positive || 0, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: sentiment.neutral || 0, color: CHART_COLORS.platinum },
    { name: 'Negative', value: sentiment.negative || 0, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 42, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 20, color: CHART_COLORS.platinum },
    { name: ' Negative', value: 38, color: CHART_COLORS.rose },
  ]

  // Per Capita CO2 comparison data
  const perCapitaCO2Data = [
    { country: 'Saudi Arabia', value: 20.4, color: CHART_COLORS.rose },
    { country: 'UAE', value: 20.1, color: CHART_COLORS.danger },
    { country: 'Australia', value: 14.5, color: CHART_COLORS.orange },
    { country: 'US', value: 14.2, color: CHART_COLORS.gold },
  ]

  // Renewable energy mix
  const renewableMixData = [
    { name: 'Solar PV', value: 3460, color: CHART_COLORS.gold },
    { name: 'Nuclear', value: 5380, color: CHART_COLORS.navy },
    { name: 'Al Dhafra Solar', value: 2000, color: CHART_COLORS.info },
    { name: 'Wind/Others', value: 1200, color: CHART_COLORS.emerald },
  ]

  // EPI Rankings data
  const epiRankingsData = [
    { category: 'Overall EPI', rank: 53, score: 51.6, color: CHART_COLORS.platinum },
    { category: 'Air Pollution', rank: 115, score: 65.1, color: CHART_COLORS.rose },
    { category: 'NO2 Exposure', rank: 176, score: 7.5, color: CHART_COLORS.danger },
    { category: 'SO2 Exposure', rank: 160, score: 12.4, color: CHART_COLORS.orange },
  ]

  // Road safety data
  const roadSafetyData2 = [
    { metric: 'Fatalities', value: 384, change: '+9%', color: CHART_COLORS.rose },
    { metric: 'Injured', value: 6062, change: '+8%', color: CHART_COLORS.orange },
    { metric: 'Major Accidents', value: 4748, change: '+8%', color: CHART_COLORS.gold },
  ]

  // Key findings by alert level
  const redFindings = keyFindings.filter(f => f.alert === 'RED')
  const yellowFindings = keyFindings.filter(f => f.alert === 'YELLOW')

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  const getTierBadge = (tier?: number) => {
    const colors: Record<number, string> = {
      0: 'bg-red-500/20 text-red-400 border-red-500/50',
      1: 'bg-amber-500/20 text-amber-400 border-amber-500/50',
      2: 'bg-navy-500/20 text-navy-400 border-navy-500/50',
      3: 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50',
      4: 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50',
    }
    return (
      <Badge variant="outline" className={`text-xs border ${colors[tier || 0]}`}>
        Tier {tier}
      </Badge>
    )
  }

  return (
    <motion.div
      className="space-y-8 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Premium Header */}
      <motion.div className="flex items-start justify-between" variants={itemVariants}>
        <div>
          <Badge variant="emerald" className="mb-2 gap-1">
            <Leaf className="h-3 w-3" />
            E-SECTOR
          </Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-emerald-500">Environment & Infrastructure</h1>
          <p className="mt-2 text-platinum-400 max-w-2xl">
            {data.description || 'Climate action, net zero strategy, renewable energy, desalination, biodiversity, conservation, waste management, mega infrastructure, road safety, traffic congestion, sustainability strategies'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10">
            <Leaf className="h-4 w-4" />
            Sustainability
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" variants={itemVariants}>
        <MetricCard
          title="Renewable Capacity"
          value="7.7+"
          unit="GW"
          previousValue={6.2}
          icon={<Sun className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Per Capita CO2"
          value="20.1"
          unit="t/person"
          previousValue={21.5}
          icon={<Wind className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Nature Reserves"
          value="50"
          previousValue={23}
          icon={<TreePine className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Road Fatalities"
          value="384"
          previousValue={352}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="orange"
        />
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="climate">Climate</TabsTrigger>
          <TabsTrigger value="energy">Energy</TabsTrigger>
          <TabsTrigger value="airquality">Air Quality</TabsTrigger>
          <TabsTrigger value="water">Water</TabsTrigger>
          <TabsTrigger value="biodiversity">Biodiversity</TabsTrigger>
          <TabsTrigger value="impacts">Climate Impacts</TabsTrigger>
          <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={containerVariants}>
            {/* Dashboard KPIs */}
            <GlassPanel title="Synthesized Dashboard — Key Metrics" description="Critical KPIs from Section 22 of the MD">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Climate & Emissions KPIs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {dashboardKPIs.climateEmissions.map((kpi, idx) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700">
                          <p className="text-xs text-platinum-400 truncate">{kpi.kpi}</p>
                          <p className="text-lg font-bold text-emerald-500">{kpi.current}</p>
                          <p className="text-xs text-platinum-500">Target: {kpi.target}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Energy Infrastructure KPIs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {dashboardKPIs.energyInfrastructure.map((kpi, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div>
                              <p className="text-sm font-medium text-platinum-200">{kpi.kpi}</p>
                              <p className="text-xs text-platinum-500">{kpi.status}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-emerald-500">{kpi.current}</p>
                              <p className="text-xs text-platinum-400">{kpi.target}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                      <CardDescription>Public sentiment on environmental issues</CardDescription>
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

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Water & Environment KPIs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {dashboardKPIs.waterEnvironment.map((kpi, idx) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700">
                          <p className="text-xs text-platinum-400 truncate">{kpi.kpi}</p>
                          <p className="text-lg font-bold text-cyan-500">{kpi.current}</p>
                          <p className="text-xs text-platinum-500">Target: {kpi.target}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Climate Tab */}
        <TabsContent value="climate" className="space-y-6">
          <motion.div variants={containerVariants}>
            <GlassPanel
              title="Climate & Environmental Policy"
              description="Federal Decree-Law No. 11 of 2024 and Climate Action Tracker Assessment"
              badge="Section 1"
            >
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">UAE Climate Change Law</CardTitle>
                      <CardDescription>Federal Decree-Law No. 11 of 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-platinum-400">Issue Date</span>
                          <span className="text-sm font-medium">August 28, 2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-platinum-400">Effective Date</span>
                          <span className="text-sm font-medium">May 30, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-platinum-400">Legal Character</span>
                          <Badge variant="emerald" className="text-xs">Standalone Primary Legislation</Badge>
                        </div>
                        <div className="mt-4 p-3 rounded-lg bg-platinum-800/50">
                          <p className="text-xs text-platinum-400 mb-1">Key Provisions</p>
                          <p className="text-sm">Sector-specific climate mitigation plans; National carbon credit registry; Industrial emissions reporting mandate; Regulatory penalties (Article 15)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-400">Climate Action Tracker Rating</CardTitle>
                      <CardDescription>April 2024 Assessment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">Critically Insufficient</Badge>
                          <span className="text-xs text-platinum-400">(4C+ pathway)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-platinum-400">NDC Target 2030</span>
                          <span className="text-sm font-medium">206 MtCO2e (18% below 2022)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-platinum-400">1.5C Requirement</span>
                          <span className="text-sm font-medium text-red-400">38% reduction below 2022</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-platinum-400">Clean Power Target</span>
                          <span className="text-sm font-medium">30% by 2030</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-platinum-400">CCS Target</span>
                          <span className="text-sm font-medium">10 MtCO2e/yr by 2030</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Net Zero 2050 Strategy — Six Sector Framework</CardTitle>
                    <CardDescription>Charter signed March 2023 | Target: 2050</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {netZero2050Data.sixSectorFramework.map((sector, idx) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="denim" className="text-xs">{sector.sector}</Badge>
                          </div>
                          <p className="text-xs text-platinum-400 mb-1">Programmes</p>
                          <p className="text-sm font-medium mb-2">{sector.programmes}</p>
                          <p className="text-xs text-emerald-500">{sector.keyOutcome}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                        <p className="text-xs text-platinum-400">Job Opportunities</p>
                        <p className="text-lg font-bold text-emerald-500">{netZero2050Data.aggregateTargets.jobOpportunities}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                        <p className="text-xs text-platinum-400">GDP Contribution</p>
                        <p className="text-lg font-bold text-gold-700">{netZero2050Data.aggregateTargets.gdpContribution}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-navy-500/10 border border-navy-500/30">
                        <p className="text-xs text-platinum-400">ADNOC 2045 Net Zero</p>
                        <p className="text-xs">Scope 1 & 2 only (not Scope 3)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Per Capita Carbon Emissions</CardTitle>
                    <CardDescription>Global Comparison 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={perCapitaCO2Data}
                      xAxisKey="country"
                      bars={[
                        { dataKey: 'value', name: 'Tonnes per Person', color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30">
                        <p className="text-xs text-platinum-400">Per Capita GHG (Shift Eco)</p>
                        <p className="text-lg font-bold text-rose-500">~32 t/person/year</p>
                      </div>
                      <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/30">
                        <p className="text-xs text-platinum-400">Per Capita CO2 (World Economics)</p>
                        <p className="text-lg font-bold text-orange-500">21.55 t/head</p>
                      </div>
                      <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                        <p className="text-xs text-platinum-400">50-Year Reduction</p>
                        <p className="text-lg font-bold text-gold-700">-69.3% since 1973</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Energy Tab */}
        <TabsContent value="energy" className="space-y-6">
          <motion.div variants={containerVariants}>
            <GlassPanel
              title="Renewable Energy & Nuclear"
              description="Solar, Nuclear, Masdar — Section 3, 14, 15"
              badge="Section 3"
            >
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Renewable Energy Capacity</CardTitle>
                      <CardDescription>Total: 7.7+ GW (April 2026)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={renewableMixData}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Solar Park — Mohammed bin Rashid Al Maktoum</CardTitle>
                      <CardDescription>Dubai | Target: 7,260 MW by 2029</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-platinum-400">Operational</span>
                          <span className="text-sm font-bold text-emerald-500">3,460 MW</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-platinum-400">Under Construction</span>
                          <span className="text-sm font-medium text-gold-700">1,200 MW</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-platinum-400">Phase 7 Tender</span>
                          <span className="text-sm font-medium">1,600 MW (expandable to 2,000 MW)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-platinum-400">Phase 7 Storage</span>
                          <span className="text-sm font-medium text-cyan-500">6,000 MWh battery</span>
                        </div>
                        <div className="mt-4 p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                          <p className="text-xs text-platinum-400">Deployment Rate</p>
                          <p className="text-sm font-medium">One or two solar farms a year until end of decade</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Barakah Nuclear Power Plant</CardTitle>
                    <CardDescription>Fully Operational 2024 | ~25% of UAE Electricity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="p-4 rounded-lg bg-navy-500/10 border border-navy-500/30 text-center">
                        <p className="text-xs text-platinum-400">Total Capacity</p>
                        <p className="text-2xl font-bold text-navy-500">5,380</p>
                        <p className="text-xs">MWe (4 units)</p>
                      </div>
                      <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center">
                        <p className="text-xs text-platinum-400">Annual Generation</p>
                        <p className="text-2xl font-bold text-emerald-500">40</p>
                        <p className="text-xs">TWh (+25% YoY)</p>
                      </div>
                      <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-center">
                        <p className="text-xs text-platinum-400">Carbon Avoided</p>
                        <p className="text-2xl font-bold text-cyan-500">22+</p>
                        <p className="text-xs">million tonnes/year</p>
                      </div>
                      <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/30 text-center">
                        <p className="text-xs text-platinum-400">Operating Support</p>
                        <p className="text-2xl font-bold text-gold-700">$880M</p>
                        <p className="text-xs">/year through 2030</p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="p-3 rounded-lg bg-platinum-800/50">
                        <p className="text-xs text-platinum-400">Reactor Type</p>
                        <p className="text-sm font-medium">APR1400 (Korea)</p>
                      </div>
                      <div className="p-3 rounded-lg bg-platinum-800/50">
                        <p className="text-xs text-platinum-400">Grid Connection</p>
                        <p className="text-sm font-medium">Units 1-4: 2020-2024</p>
                      </div>
                      <div className="p-3 rounded-lg bg-platinum-800/50">
                        <p className="text-xs text-platinum-400">Operator</p>
                        <p className="text-sm font-medium">Nawah Energy (82% ENEC, 18% KEPCO)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Masdar — Global Clean Energy Leader</CardTitle>
                    <CardDescription>January 2026 | 100 GW Target by 2030</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center">
                        <p className="text-xs text-platinum-400">Global Portfolio</p>
                        <p className="text-3xl font-bold text-emerald-500">65 GW</p>
                        <p className="text-xs">January 2026</p>
                      </div>
                      <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/30 text-center">
                        <p className="text-xs text-platinum-400">2030 Target</p>
                        <p className="text-3xl font-bold text-gold-700">100 GW</p>
                        <p className="text-xs">+53.8% growth needed</p>
                      </div>
                      <div className="p-4 rounded-lg bg-navy-500/10 border border-navy-500/30 text-center">
                        <p className="text-xs text-platinum-400">Flagship Project</p>
                        <p className="text-lg font-bold text-navy-500">Masdar City</p>
                        <p className="text-xs">Planned carbon-neutral town</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Air Quality Tab */}
        <TabsContent value="airquality" className="space-y-6">
          <motion.div variants={containerVariants}>
            <GlassPanel
              title="Air Quality"
              description="Environmental Performance Index 2024 | Section 5"
              badge="Section 5"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE EPI Rankings (2024)</CardTitle>
                    <CardDescription>Global rank 53rd overall with severe air quality challenges</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={epiRankingsData}
                      xAxisKey="category"
                      bars={[
                        { dataKey: 'rank', name: 'Global Rank', color: CHART_COLORS.rose },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg text-emerald-500">Positive: PM2.5 Reduction</CardTitle>
                      <CardDescription>-22% drop in harmful levels (2024)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center p-6">
                        <div className="text-center">
                          <p className="text-5xl font-bold text-emerald-500">-22%</p>
                          <p className="text-sm text-platinum-400 mt-2">PM2.5 Reduction (2024)</p>
                          <p className="text-xs text-platinum-500 mt-1">Source: IQAir / Nuktadubai (March 2025)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-400">Critical: NO2 Exposure</CardTitle>
                      <CardDescription>176th — LAST globally</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center p-6">
                        <div className="text-center">
                          <p className="text-5xl font-bold text-red-400">176th</p>
                          <p className="text-sm text-platinum-400 mt-2">Global NO2 Exposure Rank</p>
                          <Badge variant="destructive" className="mt-2">LOWEST Globally</Badge>
                          <p className="text-xs text-platinum-500 mt-2">Note: May indicate low monitoring or low vehicle/industrial emissions</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE National Air Quality Agenda 2031</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Eye className="h-5 w-5 text-cyan-500" />
                          <Badge variant="cyan" className="text-xs">Monitoring</Badge>
                        </div>
                        <p className="text-sm">Outdoor air quality, Indoor air quality, Ambient odour, Ambient noise</p>
                      </div>
                      <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Wind className="h-5 w-5 text-emerald-500" />
                          <Badge variant="emerald" className="text-xs">Mitigation</Badge>
                        </div>
                        <p className="text-sm">Source reduction across sectors</p>
                      </div>
                      <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-5 w-5 text-gold-700" />
                          <Badge variant="gold" className="text-xs">Management</Badge>
                        </div>
                        <p className="text-sm">Policy enforcement, institutional framework</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Water Tab */}
        <TabsContent value="water" className="space-y-6">
          <motion.div variants={containerVariants}>
            <GlassPanel
              title="Water Resources & Desalination"
              description="Critical infrastructure vulnerability | Section 6"
              badge="Section 6"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Gulf Desalination Dependency</CardTitle>
                    <CardDescription>42% of world&apos;s desalinated water comes from the Gulf</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        { country: 'Qatar', value: '~99%', color: 'rose' },
                        { country: 'Kuwait/Bahrain', value: '~90%', color: 'rose' },
                        { country: 'Oman', value: '86%', color: 'orange' },
                        { country: 'Israel', value: '80%', color: 'orange' },
                        { country: 'UAE', value: '42%', color: 'gold' },
                        { country: 'Gulf (overall)', value: '40%', color: 'emerald' },
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-platinum-800/50 border border-platinum-700">
                          <p className="text-sm text-platinum-400">{item.country}</p>
                          <p className="text-xl font-bold text-cyan-500">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-400">Environmental Concerns</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { issue: 'Brine Discharge', detail: 'Arabian Gulf experiencing increased salinity' },
                          { issue: 'Marine Ecosystem Harm', detail: 'Harms coral reefs, fish populations' },
                          { issue: 'Attacks on Plants', detail: 'Sustained attacks — environmental disaster fears' },
                        ].map((item, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                            <p className="text-sm font-medium text-red-400">{item.issue}</p>
                            <p className="text-xs text-platinum-400 mt-1">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg text-cyan-500">Infrastructure Investment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-center">
                          <p className="text-xs text-platinum-400">Investment Since 2006</p>
                          <p className="text-3xl font-bold text-cyan-500">$53.4B</p>
                        </div>
                        <div className="p-3 rounded-lg bg-platinum-800/50">
                          <p className="text-sm text-platinum-400">Desalination Plants</p>
                          <p className="text-lg font-medium">~5,000 (Middle East) | 400+ (Gulf)</p>
                        </div>
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                          <p className="text-xs text-red-400">Humanitarian Risk</p>
                          <p className="text-sm font-medium">100 million individuals would lose regular access to drinking water if Gulf desalination disabled</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-400">April 2024 UAE Floods — Catastrophic Infrastructure Impact</CardTitle>
                    <CardDescription>Record rainfall: 254.8mm in 24 hours | Heaviest in 75 years</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-center">
                        <p className="text-xs text-platinum-400">Insurance Losses</p>
                        <p className="text-xl font-bold text-red-400">$2.9-3.4B</p>
                      </div>
                      <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/30 text-center">
                        <p className="text-xs text-platinum-400">Government Aid</p>
                        <p className="text-xl font-bold text-gold-700">$544.6M</p>
                        <p className="text-xs">(Dh2 billion)</p>
                      </div>
                      <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-center">
                        <p className="text-xs text-platinum-400">Flights Cancelled</p>
                        <p className="text-xl font-bold text-cyan-500">1,244</p>
                        <p className="text-xs">(2 days)</p>
                      </div>
                      <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-center">
                        <p className="text-xs text-platinum-400">Vehicles Affected</p>
                        <p className="text-xl font-bold text-rose-500">30-50K</p>
                        <p className="text-xs">Total deaths: 5</p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="p-3 rounded-lg bg-platinum-800/50">
                        <p className="text-xs text-platinum-400">Rainfall (Al Ain — Khatm Shakla)</p>
                        <p className="text-lg font-bold">254.8 mm / &lt;24hr</p>
                      </div>
                      <div className="p-3 rounded-lg bg-platinum-800/50">
                        <p className="text-xs text-platinum-400">Rainfall (Dubai Airport)</p>
                        <p className="text-lg font-bold">164 mm</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Biodiversity Tab */}
        <TabsContent value="biodiversity" className="space-y-6">
          <motion.div variants={containerVariants}>
            <GlassPanel
              title="Biodiversity & Conservation"
              description="Species assessment, mangroves, coral reefs, protected areas | Sections 8-10"
              badge="Sections 8-10"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Species Assessment — National Biodiversity Strategy 2031</CardTitle>
                    <CardDescription>1,167 species assessed | 14 mammal species threatened (24%)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {biodiversityData.nationalBiodiversityStrategy2031.categories.map((cat, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-platinum-800/50 border border-platinum-700">
                          <p className="text-xs text-platinum-400">{cat.name}</p>
                          <p className="text-xl font-bold text-emerald-500">{cat.assessed}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                      <p className="text-sm font-medium text-red-400 mb-2">Mammal Red List Results (58 total assessed)</p>
                      <div className="grid gap-2 sm:grid-cols-4">
                        {biodiversityData.nationalBiodiversityStrategy2031.mammalRedList.map((item, idx) => (
                          <div key={idx} className="text-center">
                            <p className="text-lg font-bold">{item.count}</p>
                            <p className="text-xs text-platinum-400">{item.status}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Mangrove Conservation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center">
                          <p className="text-xs text-platinum-400">Nationwide Cover Increase (37 years)</p>
                          <p className="text-4xl font-bold text-emerald-500">+150%</p>
                          <p className="text-xs">1987-2024</p>
                        </div>
                        <div className="flex justify-between p-3 rounded-lg bg-platinum-800/50">
                          <span className="text-sm text-platinum-400">Coverage (2024)</span>
                          <span className="text-lg font-bold text-cyan-500">201.4 km2</span>
                        </div>
                        <div className="flex justify-between p-3 rounded-lg bg-platinum-800/50">
                          <span className="text-sm text-platinum-400">COP26 Pledge</span>
                          <span className="text-sm font-medium">100 million mangroves by 2030</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Coral Reef Rehabilitation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-center">
                          <p className="text-xs text-platinum-400">Already Restored (since 2021)</p>
                          <p className="text-4xl font-bold text-cyan-500">1M</p>
                          <p className="text-xs">of 4M+ target</p>
                        </div>
                        <div className="flex justify-between p-3 rounded-lg bg-platinum-800/50">
                          <span className="text-sm text-platinum-400">Success Rate</span>
                          <span className="text-lg font-bold text-emerald-500">95%</span>
                        </div>
                        <div className="flex justify-between p-3 rounded-lg bg-platinum-800/50">
                          <span className="text-sm text-platinum-400">Fish Biomass Increase</span>
                          <span className="text-lg font-bold text-emerald-500">50%+</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Protected Areas Expansion (2013-2024)</CardTitle>
                    <CardDescription>+117% nature reserves | +177% protected area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center">
                        <p className="text-xs text-platinum-400">Nature Reserves</p>
                        <p className="text-2xl font-bold text-emerald-500">23</p>
                        <p className="text-xs">2013</p>
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center">
                        <p className="text-xs text-platinum-400">Nature Reserves</p>
                        <p className="text-2xl font-bold text-emerald-500">50</p>
                        <p className="text-xs">2024</p>
                      </div>
                      <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/30 text-center">
                        <p className="text-xs text-platinum-400">Land Reserves</p>
                        <p className="text-lg font-bold text-gold-700">34</p>
                        <p className="text-xs">~13,100 km2</p>
                      </div>
                      <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-center">
                        <p className="text-xs text-platinum-400">Marine Reserves</p>
                        <p className="text-lg font-bold text-cyan-500">16</p>
                        <p className="text-xs">~6,900 km2</p>
                      </div>
                      <div className="p-3 rounded-lg bg-navy-500/10 border border-navy-500/30 text-center">
                        <p className="text-xs text-platinum-400">Total Protected</p>
                        <p className="text-lg font-bold text-navy-500">&gt;20,000</p>
                        <p className="text-xs">km2</p>
                      </div>
                      <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-center">
                        <p className="text-xs text-platinum-400">Wetland Coverage</p>
                        <p className="text-lg font-bold text-rose-500">391.7</p>
                        <p className="text-xs">km2 (10 reserves)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Climate Impacts Tab */}
        <TabsContent value="impacts" className="space-y-6">
          <motion.div variants={containerVariants}>
            <GlassPanel
              title="Climate Impacts"
              description="Floods, extreme heat, sandstorms | Section 11"
              badge="Section 11"
            >
              <div className="space-y-6">
                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-400">April 2024 UAE Floods</CardTitle>
                    <CardDescription>Heaviest rainfall in 75 years — Infrastructure failure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                        <p className="text-xs text-platinum-400">Rainfall (Al Ain)</p>
                        <p className="text-xl font-bold text-red-400">254.8mm</p>
                        <p className="text-xs">/ &lt;24 hours</p>
                      </div>
                      <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                        <p className="text-xs text-platinum-400">Return Period</p>
                        <p className="text-xl font-bold text-gold-700">75 years</p>
                        <p className="text-xs">(since 1949)</p>
                      </div>
                      <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                        <p className="text-xs text-platinum-400">Vehicles Affected</p>
                        <p className="text-xl font-bold text-cyan-500">30-50K</p>
                      </div>
                      <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30">
                        <p className="text-xs text-platinum-400">Deaths</p>
                        <p className="text-xl font-bold text-rose-500">5</p>
                        <p className="text-xs">(3 Filipino, 1 Emirati, 1 Pakistani)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-orange-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-400">Extreme Heat — July 2024</CardTitle>
                    <CardDescription>Life-threatening conditions | Urban heat island effect</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        { location: 'Dubai', date: 'July 17', air: '43C', feelsLike: '62C' },
                        { location: 'Al Dhafra', date: 'July 12', air: '49.9C', feelsLike: 'N/A' },
                        { location: 'Kuwait', date: 'July', air: '51C', feelsLike: '54C' },
                        { location: 'Persian Gulf Water', date: 'July', air: '~35C', feelsLike: 'Mid-90sF' },
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/30">
                          <p className="text-sm font-bold text-orange-400">{item.location}</p>
                          <p className="text-xs text-platinum-400">{item.date}</p>
                          <div className="mt-2">
                            <p className="text-xs text-platinum-500">Air: {item.air}</p>
                            <p className="text-xs text-orange-400">Feels like: {item.feelsLike}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                      <p className="text-xs text-red-400">Safety Threshold</p>
                      <p className="text-sm font-medium">Wet-bulb temperature of 35C+ considered fatal for humans if exposed over 6 hours</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sandstorm Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                        <span className="text-sm text-platinum-400">Trend</span>
                        <span className="text-sm font-medium">Increasing occurrences of mild to severe dust storms</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                        <span className="text-sm text-platinum-400">Visibility</span>
                        <span className="text-sm font-medium text-red-400">Progressive decreasing in mean annual visibility</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                        <span className="text-sm text-platinum-400">Wind Speeds</span>
                        <span className="text-sm font-medium">Up to 40 kph during sandstorm events</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Sustainability Tab */}
        <TabsContent value="sustainability" className="space-y-6">
          <motion.div variants={containerVariants}>
            <GlassPanel
              title="Sustainability Strategies"
              description="Green Agenda 2030, Abu Dhabi Environment Vision 2030 | Section 18"
              badge="Section 18"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE Green Agenda 2030 — Five Strategic Objectives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                      {sustainabilityData.greenAgenda2030.fiveStrategicObjectives.map((obj, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                          <Badge variant="emerald" className="text-xs mb-2">Objective {obj.number}</Badge>
                          <p className="text-sm font-medium">{obj.objective}</p>
                          <p className="text-xs text-emerald-500 mt-1">{obj.targetImpact}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                        <p className="text-xs text-platinum-400">GDP Increase Target</p>
                        <p className="text-lg font-bold text-gold-700">+4-5%</p>
                      </div>
                      <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                        <p className="text-xs text-platinum-400">Export Increase</p>
                        <p className="text-lg font-bold text-cyan-500">AED 24-25B</p>
                      </div>
                      <div className="p-3 rounded-lg bg-navy-500/10 border border-navy-500/30">
                        <p className="text-xs text-platinum-400">Emissions Target</p>
                        <p className="text-sm font-bold text-navy-500">&lt;100 kWh/unit</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Abu Dhabi Environment Vision 2030 — Five Priority Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                      {sustainabilityData.abuDhabiEnvironmentVision2030.fivePriorityAreas.map((area, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-navy-500/10 border border-navy-500/30">
                          <Badge variant="denim" className="text-xs mb-1">{area.number}</Badge>
                          <p className="text-sm font-medium">{area.area}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 rounded-lg bg-platinum-800/50">
                      <p className="text-xs text-platinum-400">Framework</p>
                      <p className="text-sm">Integrates environmental, economic, and social sustainability pillars</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Infrastructure Tab */}
        <TabsContent value="infrastructure" className="space-y-6">
          <motion.div variants={containerVariants}>
            <GlassPanel
              title="Mega Infrastructure & Transportation"
              description="Al Maktoum Airport, Etihad Rail, Road Safety, Traffic Congestion | Sections 19-21"
              badge="Sections 19-21"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-gold-700">Al Maktoum Airport Expansion (Dubai)</CardTitle>
                    <CardDescription>$35B approved | 5x Dubai International size</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                      {[
                        { label: 'Investment', value: '$35B' },
                        { label: 'Size', value: '70 km2' },
                        { label: 'Runways', value: '5' },
                        { label: 'Terminals', value: '5' },
                        { label: 'Initial Capacity', value: '150M' },
                        { label: 'Long-term', value: '260M' },
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/30 text-center">
                          <p className="text-xs text-platinum-400">{item.label}</p>
                          <p className="text-lg font-bold text-gold-700">{item.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="p-3 rounded-lg bg-platinum-800/50">
                        <p className="text-xs text-platinum-400">Approval Date</p>
                        <p className="text-sm font-medium">April 28, 2024 (Mohammed bin Rashid Al Maktoum)</p>
                      </div>
                      <div className="p-3 rounded-lg bg-platinum-800/50">
                        <p className="text-xs text-platinum-400">Initial Operations Target</p>
                        <p className="text-sm font-medium">2032 (accelerated)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-400">Road Safety Statistics (2024)</CardTitle>
                    <CardDescription>384 fatalities (+9% YoY) | Top violations causing 68% of deaths</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={roadSafetyData2}
                      xAxisKey="metric"
                      bars={[
                        { dataKey: 'value', name: 'Count', color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                    <div className="mt-4">
                      <p className="text-sm font-medium text-red-400 mb-2">Top 5 Violations Causing 68% of Fatalities</p>
                      <div className="grid gap-2 sm:grid-cols-5">
                        {roadSafetyData.topViolationsCausingFatalities.map((v, idx) => (
                          <div key={idx} className="p-2 rounded-lg bg-platinum-800/50 text-center">
                            <p className="text-xs font-bold text-rose-500">{idx + 1}</p>
                            <p className="text-xs">{v.violation}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-400">Traffic Congestion (June 2025)</CardTitle>
                    <CardDescription>86% of residents experiencing congestion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30 text-center">
                        <p className="text-xs text-platinum-400">Experience Congestion</p>
                        <p className="text-3xl font-bold text-orange-500">86%</p>
                      </div>
                      <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-center">
                        <p className="text-xs text-platinum-400">Dubai Experience</p>
                        <p className="text-3xl font-bold text-rose-500">91%</p>
                      </div>
                      <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/30 text-center">
                        <p className="text-xs text-platinum-400">Sharjah Experience</p>
                        <p className="text-3xl font-bold text-gold-700">90%</p>
                      </div>
                      <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-center">
                        <p className="text-xs text-platinum-400">More vs Last Year</p>
                        <p className="text-3xl font-bold text-cyan-500">80%</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Top Causes</p>
                      <div className="space-y-2">
                        {trafficCongestionData.topCauses.map((cause, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-platinum-800/50">
                            <span className="text-sm">{cause.cause}</span>
                            <Badge variant="outline">{cause.percentage}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Key Findings Tab */}
        <TabsContent value="keyfindings" className="space-y-6">
          <motion.div variants={containerVariants}>
            <GlassPanel title="Key Findings" description="All critical findings from the MD file with alert levels">
              <div className="space-y-6">
                {/* Red Alerts */}
                {redFindings.length > 0 && (
                  <Card className="glass-card border-red-500/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-lg text-red-400">
                        <AlertCircle className="h-5 w-5" />
                        Red Alert Findings ({redFindings.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {redFindings.map((finding, idx) => (
                          <div key={idx} className="flex items-start justify-between rounded-lg bg-red-500/10 p-4 border border-red-500/30">
                            <div className="flex-1">
                              <p className="font-medium text-platinum-200">{finding.finding}</p>
                              <p className="mt-1 text-sm text-platinum-400">Source: {finding.source}</p>
                            </div>
                            <div className="text-right">
                              <Badge variant="destructive" className="text-xs">{finding.metric}</Badge>
                              {finding.tier !== undefined && <div className="mt-1">{getTierBadge(finding.tier)}</div>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Yellow Alerts */}
                {yellowFindings.length > 0 && (
                  <Card className="glass-card border-amber-500/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-lg text-amber-400">
                        <AlertTriangle className="h-5 w-5" />
                        Yellow Alert Findings ({yellowFindings.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {yellowFindings.map((finding, idx) => (
                          <div key={idx} className="flex items-start justify-between rounded-lg bg-amber-500/10 p-4 border border-amber-500/30">
                            <div className="flex-1">
                              <p className="font-medium text-platinum-200">{finding.finding}</p>
                              <p className="mt-1 text-sm text-platinum-400">Source: {finding.source}</p>
                            </div>
                            <div className="text-right">
                              <Badge variant="warning" className="text-xs">{finding.metric}</Badge>
                              {finding.tier !== undefined && <div className="mt-1">{getTierBadge(finding.tier)}</div>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* All Findings */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">All Key Findings</CardTitle>
                    <CardDescription>Complete list of environmental intelligence findings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[500px]">
                      <div className="space-y-2">
                        {keyFindings.map((finding, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70">
                            <div className="flex items-center gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                                <Lightbulb className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-platinum-200">{finding.finding}</p>
                                <p className="text-sm text-platinum-400">Source: {finding.source}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-center">
                                <Badge variant="outline" className="mb-1">{finding.metric}</Badge>
                                <p className="text-xs text-platinum-400">Metric</p>
                              </div>
                              <div className="text-center">
                                {getTierBadge(finding.tier)}
                                <p className="mt-1 text-xs text-platinum-400">Tier</p>
                              </div>
                              <div className="text-center">
                                {getAlertBadge(finding.alert)}
                                <p className="mt-1 text-xs text-platinum-400">Alert</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
