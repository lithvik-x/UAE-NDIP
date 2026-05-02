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
  Fuel,
  Zap,
  Sun,
  Atom,
  Droplets,
  Leaf,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  Globe,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Factory,
  Car,
  TreePine,
  Wind,
  Gauge,
  Landmark,
  Shield,
  AlertOctagon,
  Eye,
  Scale,
} from 'lucide-react'
import {
  useEnergySustainabilityData,
} from '@/lib/data/topics/energy-data'

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

export default function EnergySustainabilityPage() {
  const { data } = useEnergySustainabilityData()

  // Oil & Gas KPIs chart data
  const oilProductionData = [
    { name: 'Current Production', value: 3, color: CHART_COLORS.gold },
    { name: 'Production Capacity', value: 4.85, color: CHART_COLORS.emerald },
    { name: 'Production Target', value: 5, color: CHART_COLORS.info },
  ]

  // Renewable capacity data
  const renewableCapacityData = [
    { name: 'Solar', value: 7525, color: CHART_COLORS.gold },
    { name: 'Wind', value: 110, color: CHART_COLORS.info },
    { name: 'Bioenergy', value: 272, color: CHART_COLORS.emerald },
  ]

  // Sentiment radar data
  const sentimentRadarData = [
    { subject: 'Renewables', A: 85, fullMark: 100 },
    { subject: 'Nuclear', A: 90, fullMark: 100 },
    { subject: 'EV Adoption', A: 75, fullMark: 100 },
    { subject: 'Climate Law', A: 70, fullMark: 100 },
    { subject: 'Hydrogen', A: 55, fullMark: 100 },
    { subject: 'CCUS', A: 25, fullMark: 100 },
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
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">Energy & Sustainability</h1>
          <p className="mt-2 text-platinum-400">
            ADNOC, oil production, OPEC+, energy transition, renewables, nuclear, hydrogen, CCUS, COP28, EV adoption, climate law
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {data.reportMetadata.reportCompiled}
            </span>
            <span className="flex items-center gap-1">
              <Target className="h-4 w-4" />
              {data.reportMetadata.queriesExecuted} queries
            </span>
            <span className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {data.reportMetadata.pagesAnalyzed} sources
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <Fuel className="h-4 w-4" />
            Oil & Gas
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Renewables
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Oil Reserves"
          value={108}
          unit="B barrels"
          previousValue={0}
          icon={<Fuel className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Renewable Capacity"
          value={7.9}
          unit="GW"
          previousValue={6.85}
          icon={<Sun className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Nuclear Capacity"
          value={5.6}
          unit="GW"
          previousValue={0}
          icon={<Atom className="h-6 w-6" />}
          gradient="cyan"
        />
        <MetricCard
          title="CAT Rating"
          value="Insufficient"
          previousValue={0}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {['ADNOC', 'OPEC+', 'Net Zero 2050', 'Barakah', 'Hydrogen', 'CCUS', 'COP28', 'EVs'].map((area) => (
            <Badge key={area} variant="outline" className="border-platinum/30 text-platinum-500">
              {area}
            </Badge>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="oil">Oil & Gas</TabsTrigger>
          <TabsTrigger value="opec">OPEC+</TabsTrigger>
          <TabsTrigger value="transition">Energy Transition</TabsTrigger>
          <TabsTrigger value="renewables">Renewables</TabsTrigger>
          <TabsTrigger value="nuclear">Nuclear</TabsTrigger>
          <TabsTrigger value="hydrogen">Hydrogen</TabsTrigger>
          <TabsTrigger value="ccus">CCUS</TabsTrigger>
          <TabsTrigger value="cop28">COP28</TabsTrigger>
          <TabsTrigger value="ev">EV Adoption</TabsTrigger>
          <TabsTrigger value="climate">Climate Law</TabsTrigger>
          <TabsTrigger value="tensions">Key Tensions</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="Energy & Sustainability Overview"
            description="Key metrics and strategic data for UAE energy sector"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              {/* Key KPIs Grid */}
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Oil & Gas Overview */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Fuel className="h-5 w-5 text-gold-700" />
                      Oil & Gas KPIs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                      <span className="text-platinum-300">Proved Reserves</span>
                      <span className="text-xl font-bold text-gold-700">105-111 B barrels</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                      <span className="text-platinum-300">Production Capacity</span>
                      <span className="text-xl font-bold text-emerald-500">4.85 M b/d</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                      <span className="text-platinum-300">Production Target</span>
                      <span className="text-xl font-bold text-cyan-500">5 M b/d by 2027</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                      <span className="text-platinum-300">ADNOC Capex</span>
                      <span className="text-xl font-bold text-gold-700">$150B (2023-27)</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Renewable Overview */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Sun className="h-5 w-5 text-emerald-500" />
                      Renewable Energy KPIs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                      <span className="text-platinum-300">Total Capacity</span>
                      <span className="text-xl font-bold text-emerald-500">7.9 GW</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                      <span className="text-platinum-300">Solar Capacity</span>
                      <span className="text-xl font-bold text-gold-700">7,525 MW</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                      <span className="text-platinum-300">2031 Target</span>
                      <span className="text-xl font-bold text-cyan-500">23 GW</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                      <span className="text-platinum-300">YoY Growth</span>
                      <span className="text-xl font-bold text-emerald-500">+15.4%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Nuclear Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Atom className="h-5 w-5 text-cyan-500" />
                    Barakah Nuclear Plant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-cyan-500">5.6 GW</p>
                      <p className="text-sm text-platinum-400">Total Capacity</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-emerald-500">25%</p>
                      <p className="text-sm text-platinum-400">Electricity Share</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-gold-700">$32B</p>
                      <p className="text-sm text-platinum-400">Construction Cost</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-cyan-500">4</p>
                      <p className="text-sm text-platinum-400">Units Operational</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment Radar */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-gold-700" />
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

        {/* Oil & Gas Tab */}
        <TabsContent value="oil" className="space-y-6">
          <GlassPanel
            title="Oil & Hydrocarbons Strategy"
            description="ADNOC overview, production capacity, and financials"
            badge="ADNOC"
          >
            <div className="space-y-6">
              {/* ADNOC Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Fuel className="h-5 w-5 text-gold-700" />
                    {data.adnocOverview.overview.entity}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">Founded</span>
                        <span className="font-bold text-gold-700">{data.adnocOverview.overview.founded}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">Headquarters</span>
                        <span className="font-bold text-platinum-500">{data.adnocOverview.overview.headquarters}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">Chairman</span>
                        <span className="font-bold text-platinum-500">{data.adnocOverview.overview.chairman}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">CEO</span>
                        <span className="font-bold text-platinum-500 text-sm">{data.adnocOverview.overview.ceo}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">Global Ranking</span>
                        <span className="font-bold text-gold-700">12th largest</span>
                      </div>
                      <div className="flex justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">Employees</span>
                        <span className="font-bold text-emerald-500">207,356</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Attributes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-gold-700" />
                    Key Production Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.adnocOverview.keyAttributes.map((attr, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{attr.attribute}</span>
                        <span className="font-bold text-gold-700 text-sm text-right">{attr.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Subsidiaries */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Factory className="h-5 w-5 text-emerald-500" />
                    ADNOC Subsidiaries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm text-platinum-400 mb-2">Upstream</h4>
                      <div className="space-y-2">
                        {data.adnocOverview.subsidiaries.upstream.map((sub, idx) => (
                          <div key={idx} className="p-2 bg-platinum-800/50 rounded text-center">
                            <span className="text-platinum-200 text-sm">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm text-platinum-400 mb-2">Midstream/Downstream</h4>
                      <div className="space-y-2">
                        {data.adnocOverview.subsidiaries.midstreamDownstream.map((sub, idx) => (
                          <div key={idx} className="p-2 bg-platinum-800/50 rounded text-center">
                            <span className="text-platinum-200 text-sm">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Production Capacity */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-cyan-500" />
                    Production Capacity Targets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={oilProductionData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Million b/d', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                  />
                  <div className="grid gap-2 mt-4">
                    {data.productionCapacity.oilPriceAnalysis.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-platinum-800/50 rounded">
                        <span className="text-platinum-400 text-sm">{item.metric}</span>
                        <span className="font-bold text-cyan-500 text-sm">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* ADNOC Decarbonization */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-emerald-500" />
                    ADNOC Decarbonization Claims
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {data.adnocDecarbonization.sustainabilityReport.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{item.metric}</span>
                        <span className="font-bold text-emerald-500 text-sm text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                    <p className="text-emerald-500 font-bold">OGMP 2.0 Gold Standard Signatory</p>
                    <p className="text-sm text-platinum-400 mt-1">Target: 30% methane reduction by 2030 vs 2020</p>
                  </div>
                </CardContent>
              </Card>

              {/* Greenwashing Criticisms */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-500">
                    <AlertOctagon className="h-5 w-5" />
                    Greenwashing Criticisms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.greenwashingCriticism.oilChangeInternational.map((crit, idx) => (
                      <div key={idx} className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                        <p className="font-medium text-rose-500 text-sm">{crit.source}</p>
                        <p className="text-platinum-300 mt-1">{crit.criticism}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* OPEC+ Tab */}
        <TabsContent value="opec" className="space-y-6">
          <GlassPanel
            title="OPEC+ Dynamics"
            description="UAE quotas, extended cuts, and Rystad analysis"
            badge="OPEC+"
          >
            <div className="space-y-6">
              {/* OPEC Structure */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-gold-700" />
                    OPEC+ Structure (September 2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-gold-700">39.725M</p>
                      <p className="text-sm text-platinum-400">b/d combined target</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-emerald-500">8</p>
                      <p className="text-sm text-platinum-400">Countries reaffirming commitment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UAE Quotas */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-cyan-500" />
                    UAE OPEC+ Quotas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.opecDynamics.uaeQuotas.map((quota, idx) => (
                      <div key={idx} className="flex items-start justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <div>
                          <p className="font-medium text-platinum-200">{quota.period}</p>
                          <p className="text-xs text-platinum-500">{quota.source}</p>
                        </div>
                        <Badge variant="gold" className="text-sm">{quota.productionQuota}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Extended Cuts */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-rose-500" />
                    Extended Cuts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.opecDynamics.extendedCuts.map((cut, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="font-medium text-rose-500">{cut.description}</p>
                        <p className="text-sm text-platinum-400 mt-1">{cut.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rystad Analysis */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-emerald-500" />
                    Rystad Energy Analysis (2026)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.opecDynamics.rystadEnergyAnalysis2026.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{item.metric}</span>
                        <span className="font-bold text-emerald-500 text-sm text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* ADNOC Financials */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-gold-700" />
                    ADNOC Financials & Dividends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-gold-700">$43B</p>
                      <p className="text-sm text-platinum-400">Dividends to 2030</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-emerald-500">52%</p>
                      <p className="text-sm text-platinum-400">Dividend Growth</p>
                    </div>
                  </div>
                  <div className="grid gap-2 mt-4">
                    {data.adnocFinancials.contractsNovember2025.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-platinum-800/50 rounded">
                        <span className="text-platinum-400 text-sm">{item.metric}</span>
                        <span className="font-bold text-gold-700 text-sm">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Energy Transition Tab */}
        <TabsContent value="transition" className="space-y-6">
          <GlassPanel
            title="Energy Transition - Narrative vs Reality"
            description="Climate commitments, CAT assessment, and credibility concerns"
            badge="Critical"
          >
            <div className="space-y-6">
              {/* UAE Climate Commitments */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-emerald-500" />
                    UAE Energy Strategy 2050
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-3">
                    {data.energyTransitionNarrative.uaeEnergyStrategy2050.map((item, idx) => (
                      <div key={idx} className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
                        <p className="text-lg font-bold text-emerald-500">{item.value}</p>
                        <p className="text-sm text-platinum-400 mt-1">{item.target}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Climate Action Tracker Assessment */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-500">
                    <AlertTriangle className="h-5 w-5" />
                    Climate Action Tracker Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl mb-4">
                    <p className="text-2xl font-bold text-rose-500">INSUFFICIENT</p>
                    <p className="text-platinum-400">Overall Rating - Below 3°C pathway</p>
                  </div>
                  <div className="grid gap-3">
                    {data.energyTransitionNarrative.climateActionTrackerAssessment.map((rating, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{rating.ratingCategory}</span>
                        <Badge variant={rating.rating === 'Insufficient' ? 'rose' : 'outline'} className="text-sm">{rating.rating}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Critical Findings */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-500">
                    <AlertOctagon className="h-5 w-5" />
                    Critical Findings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.energyTransitionNarrative.criticalFindings.map((finding, idx) => (
                      <div key={idx} className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                        <p className="font-medium text-rose-500 text-sm">{finding.finding}</p>
                        <p className="text-platinum-300 mt-1 text-sm">{finding.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Credibility Concerns */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-gold-700" />
                    Credibility Concerns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {data.energyTransitionNarrative.credibilityConcerns.map((concern, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-platinum-800/50 rounded-lg">
                        <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                        <span className="text-platinum-300 text-sm">{concern}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Positive Developments */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    Positive Developments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {data.energyTransitionNarrative.positiveDevelopments.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-platinum-800/50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-platinum-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Renewables Tab */}
        <TabsContent value="renewables" className="space-y-6">
          <GlassPanel
            title="Renewable Energy"
            description="Current capacity, solar parks, and grid modernization"
            badge="7.9 GW"
          >
            <div className="space-y-6">
              {/* Current Capacity */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sun className="h-5 w-5 text-gold-700" />
                    Current Capacity (2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={renewableCapacityData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'MW', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Solar Parks */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TreePine className="h-5 w-5 text-emerald-500" />
                    Major Solar Parks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.renewableEnergy.majorSolarParks.map((park, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-gold-700">{park.project}</p>
                            <p className="text-sm text-platinum-400 mt-1">Capacity: {park.capacity}</p>
                          </div>
                          <Badge variant="emerald">{park.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* PV Magazine Data */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-cyan-500" />
                    Solar Projections (PV Magazine)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-gold-700">6.7 GW</p>
                      <p className="text-sm text-platinum-400">End 2025</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-emerald-500">9.4 GW</p>
                      <p className="text-sm text-platinum-400">End 2026 (proj)</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-cyan-500">20 GW</p>
                      <p className="text-sm text-platinum-400">2030 Target</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-platinum-500">30 GW</p>
                      <p className="text-sm text-platinum-400">2035 Threshold</p>
                    </div>
                  </div>
                  <div className="grid gap-2 mt-4">
                    {data.renewableEnergy.pvMagazineMarch2026.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-platinum-800/50 rounded">
                        <span className="text-platinum-400 text-sm">{item.metric}</span>
                        <span className="font-bold text-cyan-500 text-sm">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Grid Modernization */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wind className="h-5 w-5 text-cyan-500" />
                    Grid Modernization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {data.renewableEnergy.gridModernization.map((item, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-2xl font-bold text-cyan-500">{item.value}</p>
                        <p className="text-sm text-platinum-400 mt-1">{item.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Nuclear Tab */}
        <TabsContent value="nuclear" className="space-y-6">
          <GlassPanel
            title="Nuclear Energy - Barakah Plant"
            description="Plant overview, construction timeline, and operational impact"
            badge="5.6 GW"
          >
            <div className="space-y-6">
              {/* Plant Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Atom className="h-5 w-5 text-cyan-500" />
                    Barakah Nuclear Power Plant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.nuclearEnergyBarakah.plantOverview.map((attr, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{attr.attribute}</span>
                        <span className="font-bold text-cyan-500 text-sm text-right">{attr.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Construction Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gold-700" />
                    Construction Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.nuclearEnergyBarakah.constructionTimeline.map((milestone, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-3 bg-platinum-800/50 rounded-lg">
                        <div className="w-24 shrink-0 text-center">
                          <span className="text-sm font-bold text-gold-700">{milestone.date}</span>
                        </div>
                        <span className="text-platinum-300 text-sm">{milestone.milestone}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Commercial Operation */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5 text-emerald-500" />
                    Commercial Operation Dates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    {data.nuclearEnergyBarakah.commercialOperationDates.map((unit, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-xl font-bold text-emerald-500">{unit.unit}</p>
                        <p className="text-sm text-platinum-400 mt-1">{unit.commercialOperation}</p>
                        {unit.gridConnection && unit.gridConnection !== '-' && (
                          <p className="text-xs text-platinum-500 mt-1">Grid: {unit.gridConnection}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Operational Impact */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-cyan-500" />
                    Operational Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-center">
                      <p className="text-3xl font-bold text-cyan-500">25%</p>
                      <p className="text-sm text-platinum-400">Electricity Share</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-gold-700">$9B+</p>
                      <p className="text-sm text-platinum-400">LNG Cost Savings</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-emerald-500">13-year</p>
                      <p className="text-sm text-platinum-400">Low Gas Consumption</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Concerns */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-500">
                    <Shield className="h-5 w-5" />
                    Security Concerns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.nuclearEnergyBarakah.securityConcerns.map((concern, idx) => (
                      <div key={idx} className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                        <p className="font-medium text-rose-500 text-sm">{concern.metric}</p>
                        <p className="text-platinum-300 mt-1 text-sm">{concern.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Hydrogen Tab */}
        <TabsContent value="hydrogen" className="space-y-6">
          <GlassPanel
            title="Hydrogen Strategy"
            description="National Hydrogen Strategy 2050 and production economics"
            badge="15 mtpa by 2050"
          >
            <div className="space-y-6">
              {/* Targets */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Atom className="h-5 w-5 text-gold-700" />
                    Production Targets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {data.hydrogenStrategy.nationalHydrogenStrategy2050.targets.map((target, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-2xl font-bold text-gold-700">{target.productionTarget}</p>
                        <p className="text-sm text-platinum-400 mt-1">{target.targetYear}</p>
                        {target.typeBreakdown && target.typeBreakdown !== '-' && (
                          <p className="text-xs text-cyan-500 mt-1">{target.typeBreakdown}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Strategic Objectives */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-emerald-500" />
                    Strategic Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {data.hydrogenStrategy.strategicObjectives.map((obj, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-platinum-800/50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-platinum-300 text-sm">{obj}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Production Economics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-gold-700" />
                    Production Economics (GPCA March 2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.hydrogenStrategy.productionEconomics.gpcaMarch2025.map((item, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl">
                        <p className="font-bold text-gold-700">{item.hydrogenType}</p>
                        <p className="text-2xl text-emerald-500 mt-2">{item.productionCost}</p>
                        {item.notes && <p className="text-sm text-platinum-400 mt-1">{item.notes}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* CCUS Tab */}
        <TabsContent value="ccus" className="space-y-6">
          <GlassPanel
            title="Carbon Capture & CCUS"
            description="Policy framework, MENA projects, and market data"
            badge="$160M Market"
          >
            <div className="space-y-6">
              {/* MENA Projects */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-gold-700" />
                    MENA CCUS Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-5">
                    {data.carbonCaptureCCUS.menaRegionalProjects.projects.map((project, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-2xl font-bold text-gold-700">{project.ccusProjects}</p>
                        <p className="text-sm text-platinum-400 mt-1">{project.country}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
                    <p className="text-lg font-bold text-emerald-500">35 Million Tons/Year</p>
                    <p className="text-sm text-platinum-400">MENA Capacity Target by 2035</p>
                  </div>
                </CardContent>
              </Card>

              {/* UAE Market Data */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-cyan-500" />
                    UAE CCUS Market (Guidehouse 2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-gold-700">$160M</p>
                      <p className="text-sm text-platinum-400">2024 Market</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-emerald-500">$205M</p>
                      <p className="text-sm text-platinum-400">2030 Projected</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-cyan-500">2.3 MTPA</p>
                      <p className="text-sm text-platinum-400">Total UAE Capacity</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-cyan-500">5 MTPA</p>
                      <p className="text-sm text-platinum-400">2030 Target</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Policy Framework */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-emerald-500" />
                    Policy Framework Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.carbonCaptureCCUS.policyFramework.objectives.map((obj, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="font-medium text-emerald-500 text-sm">{obj.objective}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* COP28 Tab */}
        <TabsContent value="cop28" className="space-y-6">
          <GlassPanel
            title="COP28 - Legacy & Controversies"
            description="Conference outcomes, Al Jaber controversy, and greenwashing allegations"
            badge="Controversial"
          >
            <div className="space-y-6">
              {/* Conference Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-gold-700" />
                    Conference Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-lg font-bold text-gold-700">COP28 UAE</p>
                      <p className="text-sm text-platinum-400">United Nations Climate Conference</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-lg font-bold text-emerald-500">Sultan Ahmed Al Jaber</p>
                      <p className="text-sm text-platinum-400">President (also ADNOC CEO)</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-lg font-bold text-cyan-500">Dubai Expo City</p>
                      <p className="text-sm text-platinum-400">Venue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Positive Outcomes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    Positive Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {data.cop28Legacy.positiveOutcomes.map((outcome, idx) => (
                      <div key={idx} className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                        <p className="font-bold text-emerald-500">{outcome.outcome}</p>
                        <p className="text-sm text-platinum-300 mt-1">{outcome.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Al Jaber Controversy */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-500">
                    <AlertTriangle className="h-5 w-5" />
                    Sultan Al Jaber Controversy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.cop28Legacy.sultanAlJaberControversy.map((item, idx) => (
                      <div key={idx} className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                        <p className="text-xs text-platinum-500">{item.source}</p>
                        <p className="text-platinum-300 mt-1 text-sm">"{item.statement}"</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Greenwashing Allegations */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-500">
                    <AlertOctagon className="h-5 w-5" />
                    Greenwashing Allegations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.cop28Legacy.greenwashingAllegations.slice(0, 6).map((item, idx) => (
                      <div key={idx} className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                        <p className="text-xs text-platinum-500">{item.source}</p>
                        <p className="text-platinum-300 mt-1 text-sm">{item.allegation}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* EV Adoption Tab */}
        <TabsContent value="ev" className="space-y-6">
          <GlassPanel
            title="EV Adoption & Transportation"
            description="Market size, growth, and infrastructure development"
            badge="$2.2B Market"
          >
            <div className="space-y-6">
              {/* Market Size */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Car className="h-5 w-5 text-gold-700" />
                    EV Market Size
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-gold-700">$2.2B</p>
                      <p className="text-sm text-platinum-400">2024 Market</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-emerald-500">$1.25B</p>
                      <p className="text-sm text-platinum-400">2030 Projection</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-cyan-500">13%</p>
                      <p className="text-sm text-platinum-400">EV Share of Sales</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-emerald-500">38%</p>
                      <p className="text-sm text-platinum-400">YoY Growth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sales Data */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    2024 EV Sales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-gold-700">~24,000</p>
                      <p className="text-sm text-platinum-400">UAE Units (BEV + PHEV)</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-cyan-500">11,000+</p>
                      <p className="text-sm text-platinum-400">Saudi Arabia (10x increase)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Infrastructure */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5 text-cyan-500" />
                    Charging Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-emerald-500">70,000</p>
                      <p className="text-sm text-platinum-400">Abu Dhabi Plan by 2030</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-gold-700">1,270+</p>
                      <p className="text-sm text-platinum-400">Dubai Points (Aug 2025)</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-cyan-500">500</p>
                      <p className="text-sm text-platinum-400">ADNOC-TAQA by 2028</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
                    <p className="font-bold text-emerald-500">95% Charging Satisfaction</p>
                  </div>
                </CardContent>
              </Card>

              {/* Barriers */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    Barriers to Adoption
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.evAdoption.barriers.map((barrier, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="text-platinum-300 text-sm">{barrier.barrier}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Climate Law Tab */}
        <TabsContent value="climate" className="space-y-6">
          <GlassPanel
            title="Climate Law & Compliance"
            description="Federal climate legislation and corporate compliance"
            badge="Effective May 2025"
          >
            <div className="space-y-6">
              {/* Climate Law */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-gold-700" />
                    Federal Decree-Law No. 11 of 2024
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {data.climateLawCompliance.lawAttributes.map((attr, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{attr.attribute}</span>
                        <span className="font-bold text-emerald-500 text-sm text-right">{attr.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* MRV System */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    National MRV System (October 2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
                      <p className="text-2xl font-bold text-emerald-500">75%</p>
                      <p className="text-sm text-platinum-400">Time Reduction</p>
                      <p className="text-xs text-platinum-500 mt-1">15 months → 3 months</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-gold-700">63%</p>
                      <p className="text-sm text-platinum-400">Workflow Reduction</p>
                      <p className="text-xs text-platinum-500 mt-1">11 steps → 4</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-cyan-500">240+</p>
                      <p className="text-sm text-platinum-400">Entities → 7 Bodies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Methane Emissions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wind className="h-5 w-5 text-emerald-500" />
                    Methane Emissions Reduction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-emerald-500">22%</p>
                      <p className="text-sm text-platinum-400">2024 vs 2023</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-gold-700">47%</p>
                      <p className="text-sm text-platinum-400">Cumulative (Since 2020)</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-cyan-500">&lt;0.15%</p>
                      <p className="text-sm text-platinum-400">Intensity (Lowest ME)</p>
                    </div>
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
                      <p className="text-2xl font-bold text-emerald-500">OGMP 2.0</p>
                      <p className="text-sm text-platinum-400">Gold Standard</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Tensions Tab */}
        <TabsContent value="tensions" className="space-y-6">
          <GlassPanel
            title="Key Tensions Identified"
            description="Climate narrative vs reality, energy security, COP28 contradictions"
            badge="Critical Analysis"
          >
            <div className="space-y-6">
              {/* Climate Narrative vs Reality */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-500">
                    <AlertTriangle className="h-5 w-5" />
                    Climate Leader Narrative vs Reality
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.keyTensions.climateLeaderNarrativeVsReality.map((item, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg">
                        <div className="flex items-start gap-3">
                          <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-platinum-400">Narrative: {item.narrative}</p>
                            <p className="text-sm text-rose-500 mt-1">Reality: {item.reality}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* COP28 Contradictions */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-500">
                    <AlertOctagon className="h-5 w-5" />
                    COP28 Contradictions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.keyTensions.cop28Contradictions.map((item, idx) => (
                      <div key={idx} className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                        <p className="font-medium text-rose-500 text-sm">{item.issue}</p>
                        <p className="text-platinum-300 mt-1 text-sm">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Energy Security vs Climate */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-gold-700" />
                    Energy Security vs Climate Ambition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.keyTensions.energySecurityVsClimateAmbition.map((item, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="font-medium text-gold-700 text-sm">{item.tension}</p>
                        <p className="text-platinum-300 mt-1 text-sm">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel
            title="Sentiment Analysis"
            description="Source credibility and sentiment by topic"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              {/* Sentiment by Topic */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-gold-700" />
                    Sentiment by Topic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.sentimentAnalysis.sentimentByTopic.map((topic, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-bold text-platinum-200">{topic.topic}</p>
                          <Badge
                            variant={
                              topic.overallSentiment.includes('Positive')
                                ? 'emerald'
                                : topic.overallSentiment.includes('Negative')
                                ? 'rose'
                                : 'outline'
                            }
                          >
                            {topic.overallSentiment}
                          </Badge>
                        </div>
                        <p className="text-sm text-platinum-400">{topic.keyNarrative}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE Relevance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-cyan-500" />
                    UAE Relevance Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {data.sentimentAnalysis.uaeRelevanceAssessment.map((dim, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-xl">
                        <p className="font-bold text-cyan-500">{dim.dimension}</p>
                        <p className="text-sm text-platinum-300 mt-1">{dim.assessment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Source Credibility */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-500" />
                    Source Credibility Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.sentimentAnalysis.sourceCredibilityAssessment.map((source, idx) => (
                      <div key={idx} className="flex items-start justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <div>
                          <p className="font-medium text-platinum-200">{source.sourceType}</p>
                          {source.examples && <p className="text-xs text-platinum-500">{source.examples}</p>}
                        </div>
                        <Badge variant={source.credibility.includes('High') ? 'emerald' : 'outline'} className="text-xs">
                          {source.credibility}
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
        <p>Last Updated: {data.reportMetadata.reportCompiled}</p>
        <p className="mt-1">
          Enrichment Status: <Badge variant="success" className="text-xs">{data.reportMetadata.confidenceLevel}</Badge>
        </p>
        <p className="mt-1 text-platinum-600">
          Data Completeness: {data.reportMetadata.queriesExecuted} queries, {data.reportMetadata.pagesAnalyzed} pages analyzed
        </p>
      </motion.div>
    </motion.div>
  )
}
