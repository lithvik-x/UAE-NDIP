// @ts-nocheck
'use client'

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
  TrendingDown,
  Globe,
  Shield,
  MapPin,
  Crosshair,
  Building,
  Plane,
  Users,
  UserX,
  AlertOctagon,
  Scale,
  Gavel,
  Ban,
  DollarSign,
  Clock,
  Activity,
  Heart,
  MessageSquare,
  Landmark,
} from 'lucide-react'
import { useGeopoliticalCrisisData } from '@/lib/data-loader'
import { socialCrisisExtendedData } from '@/lib/data-loader/crisis-data'
import { motion, AnimatePresence } from 'framer-motion'

export default function RegionalInstabilityPage() {
  const { data } = useGeopoliticalCrisisData()
  const socialData = socialCrisisExtendedData

  const getAlertBadge = (level: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><TrendingUp className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level}</Badge>
    }
  }

  const getAlertColor = (alert?: string) => {
    if (alert === 'RED') return 'border-red-500/50'
    if (alert === 'YELLOW') return 'border-yellow-500/50'
    return 'border-emerald-500/50'
  }

  // Regional conflict intensity data
  const conflictIntensityData = [
    { year: '2020', yemen: 78, iraq: 45, syria: 62, regional: 58 },
    { year: '2021', yemen: 82, iraq: 42, syria: 55, regional: 56 },
    { year: '2022', yemen: 75, iraq: 38, syria: 48, regional: 52 },
    { year: '2023', yemen: 68, iraq: 35, syria: 42, regional: 48 },
    { year: '2024', yemen: 72, iraq: 32, syria: 38, regional: 45 },
    { year: '2025', yemen: 65, iraq: 30, syria: 35, regional: 42 },
    { year: '2026', yemen: 58, iraq: 28, syria: 32, regional: 38 },
  ]

  // UAE exposure data
  const exposureData = [
    { name: 'Trade Disruption', value: 72, color: CHART_COLORS.gold },
    { name: 'Energy Security', value: 65, color: CHART_COLORS.danger },
    { name: 'Migration Pressure', value: 48, color: CHART_COLORS.navy },
    { name: 'Security Threat', value: 35, color: CHART_COLORS.info },
    { name: 'Diplomatic Strain', value: 82, color: CHART_COLORS.purple },
  ]

  // Sentiment data
  const sentimentData = [
    { name: 'Concerned', value: 45, color: CHART_COLORS.gold },
    { name: 'Vigilant', value: 32, color: CHART_COLORS.navy },
    { name: 'Confident', value: 23, color: CHART_COLORS.emerald },
  ]

  // Social crisis data derived from extended data
  const laborUnrestTimeline = socialData?.laborUnrest?.majorIncidentTimeline || []
  const demographics = socialData?.communityTensions?.demographics || { totalPopulation: '3.1M', foreignPopulation: '85%' }
  const socialMediaArrests = socialData?.publicMoralityCrisis?.socialMediaArrests2026 || []
  const penalties = socialData?.publicMoralityCrisis?.alcoholPenaltyStructure || []
  const riskMatrix = socialData?.riskMatrix || []
  const statistics = socialData?.statistics || {}

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2">PHOENIX PROTOCOL: REGIONAL</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Regional Instability</h1>
          <p className="mt-2 text-slate-400">
            Geopolitical tensions and conflicts in Yemen, Iraq, Syria, and broader MENA region
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Globe className="h-4 w-4" />
            MOFA Portal
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Security Dashboard
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Conflicts"
          value="3"
          previousValue="4"
          icon={<Crosshair className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="UAE Exposure Score"
          value="68/100"
          previousValue="72/100"
          icon={<MapPin className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Trade at Risk"
          value="$12.4B"
          previousValue="$14.1B"
          icon={<Building className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Regional Sentiment"
          value="42/100"
          previousValue="48/100"
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
      </div>

      {/* Alert Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`rounded-xl border p-4 bg-slate-900/50 ${getAlertColor(data.alertLevel)}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {data.alertLevel === 'RED' && <AlertCircle className="h-6 w-6 text-red-400" />}
            {data.alertLevel === 'YELLOW' && <AlertTriangle className="h-6 w-6 text-yellow-400" />}
            {data.alertLevel === 'GREEN' && <TrendingUp className="h-6 w-6 text-emerald-400" />}
            <div>
              <p className="font-semibold text-slate-200">Regional Alert Level: {data.alertLevel}</p>
              <p className="text-sm text-slate-400">
                {data.affectedEntities?.length || 0} affected entities | Crisis Stage: {data.phoenixStage}
              </p>
            </div>
          </div>
          {getAlertBadge(data.alertLevel)}
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Key Findings</TabsTrigger>
          <TabsTrigger value="conflicts">Conflict Analysis</TabsTrigger>
          <TabsTrigger value="exposure">UAE Exposure</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="social">Social Crisis</TabsTrigger>
          <TabsTrigger value="labor">Labor Unrest</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>

        {/* Key Findings */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical regional instability metrics and findings">
            <div className="space-y-4">
              {(data.keyFindings || []).map((finding, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center justify-between rounded-lg border p-4 bg-slate-800/50 hover:bg-slate-800/70 transition-colors ${finding.alert ? getAlertColor(finding.alert) : 'border-slate-700'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      finding.tier === 0 ? 'bg-gold/20 text-gold' :
                      finding.tier === 1 ? 'bg-emerald/20 text-emerald' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {finding.tier === 0 ? <Globe className="h-5 w-5" /> :
                       finding.tier === 1 ? <Shield className="h-5 w-5" /> :
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
        </TabsContent>

        {/* Conflict Analysis */}
        <TabsContent value="conflicts" className="space-y-6">
          <GlassPanel title="Regional Conflict Analysis" description="Conflict intensity trends across MENA region">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Conflict Intensity by Country</CardTitle>
                  <CardDescription>Composite instability score (0-100)</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={conflictIntensityData}
                    xAxisKey="year"
                    lines={[
                      { dataKey: 'yemen', name: 'Yemen', color: CHART_COLORS.danger },
                      { dataKey: 'iraq', name: 'Iraq', color: CHART_COLORS.gold },
                      { dataKey: 'syria', name: 'Syria', color: CHART_COLORS.navy },
                      { dataKey: 'regional', name: 'Regional Avg', color: CHART_COLORS.info },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Analysis</CardTitle>
                  <CardDescription>Public perception of regional stability</CardDescription>
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
          </GlassPanel>
        </TabsContent>

        {/* UAE Exposure */}
        <TabsContent value="exposure" className="space-y-6">
          <GlassPanel title="UAE Exposure Assessment" description="Impact of regional instability on UAE interests">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sector Exposure Levels</CardTitle>
                  <CardDescription>Risk exposure by sector (0-100)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {exposureData.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.name}</span>
                            <span className="text-lg font-bold text-gold">{item.value}/100</span>
                          </div>
                          <Progress value={item.value} className="h-3" />
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Country Risk Assessment</CardTitle>
                  <CardDescription>Individual country stability scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: 'Yemen', risk: 82, score: 18, color: CHART_COLORS.danger },
                      { name: 'Syria', risk: 68, score: 32, color: CHART_COLORS.gold },
                      { name: 'Iraq', risk: 52, score: 48, color: CHART_COLORS.navy },
                      { name: 'Lebanon', risk: 75, score: 25, color: CHART_COLORS.orange },
                      { name: 'Iran', risk: 78, score: 22, color: CHART_COLORS.rose },
                    ]}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'risk', name: 'Risk Score', color: CHART_COLORS.danger },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Regional Crisis Timeline" description="Key events in regional geopolitical instability">
            <Card className="glass-card">
              <CardContent className="pt-6">
                <ScrollArea className="h-[600px]">
                  <div className="relative border-l-2 border-gold/30 pl-8 space-y-8">
                    {(data.timeline || []).map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className="absolute -left-[37px] h-4 w-4 rounded-full bg-gold border-2 border-navy-950" />
                        <div className="flex items-start gap-4">
                          <p className="text-sm font-bold text-gold whitespace-nowrap w-24">{event.date}</p>
                          <div>
                            <p className="font-semibold text-slate-200">{event.event}</p>
                            <p className="text-sm text-slate-400 mt-1">{event.description}</p>
                            {event.stage && (
                              <Badge variant="outline" className="mt-2 text-xs">{event.stage}</Badge>
                            )}
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

        {/* Social Crisis Tab */}
        <TabsContent value="social" className="space-y-6">
          <GlassPanel title="UAE Social Crisis Overview" description="Labor unrest, community tensions, and public morality crisis data">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-xl border border-glass-border bg-glass-surface p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
                    <Users className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Foreign Population</p>
                    <p className="text-2xl font-bold text-white">{demographics.foreignPopulation}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500">of {demographics.totalPopulation} total population</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-xl border border-glass-border bg-glass-surface p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                    <UserX className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Social Media Arrests</p>
                    <p className="text-2xl font-bold text-white">375+</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500">March 2026 Iran conflict</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-xl border border-glass-border bg-glass-surface p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20">
                    <AlertOctagon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Wage Complaints</p>
                    <p className="text-2xl font-bold text-white">20,000</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500">2005 strike wave</p>
              </motion.div>
            </div>

            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Social Crisis Risk Matrix</CardTitle>
                <CardDescription>Frequency, severity, and trend analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {riskMatrix.map((risk, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
                    >
                      <span className="text-sm font-medium text-slate-200">{risk.crisisType}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant={risk.severity === 'High' ? 'destructive' : risk.severity === 'Medium' ? 'warning' : 'outline'} className="text-xs">
                          {risk.severity}
                        </Badge>
                        <Badge variant={risk.trend === 'Increasing' ? 'destructive' : risk.trend === 'Stable' ? 'secondary' : 'outline'} className="text-xs">
                          {risk.trend}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Labor Unrest Tab */}
        <TabsContent value="labor" className="space-y-6">
          <GlassPanel title="Labor Unrest Incidents" description="Major labor protests and strikes in UAE (2005-2026)">
            <ScrollArea className="h-[500px]">
              <div className="space-y-4">
                {laborUnrestTimeline.map((incident, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 hover:bg-slate-800/60 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-200">{incident.incident}</p>
                        <p className="text-sm text-slate-400">{incident.location} | {incident.source}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gold">{incident.workers}</p>
                      <p className="text-xs text-slate-500">{incident.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Labor Statistics</CardTitle>
                <CardDescription>Key metrics from labor unrest data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">Largest Single Protest</p>
                    <p className="text-xl font-bold text-gold">13,000 workers (2025 Azizi)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">Inspections (2019-2024)</p>
                    <p className="text-xl font-bold text-gold">688,000</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">Violations Found</p>
                    <p className="text-xl font-bold text-orange-400">29,000</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">Strikes in 2005</p>
                    <p className="text-xl font-bold text-red-400">24+</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-6">
          <GlassPanel title="UAE Demographics" description="Population breakdown and vulnerability analysis">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Population Distribution</CardTitle>
                  <CardDescription>National vs Expat breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <PieChart
                      data={[
                        { name: 'Indian', value: 54, color: CHART_COLORS.gold },
                        { name: 'Pakistani', value: 18, color: CHART_COLORS.navy },
                        { name: 'Other Asians', value: 15, color: CHART_COLORS.emerald },
                        { name: 'Arabs', value: 11, color: CHART_COLORS.purple },
                        { name: 'Westerners', value: 2, color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showLegend={true}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { group: 'South Asian construction workers', risk: 'Critical', vulnerability: 'High', protection: 'Low', color: 'red' },
                  { group: 'Domestic workers (female)', risk: 'Critical', vulnerability: 'Very High', protection: 'Very Low', color: 'red' },
                  { group: 'Taxi/transport drivers', risk: 'Medium-High', vulnerability: 'Medium', protection: 'Medium', color: 'orange' },
                  { group: 'Western expats', risk: 'Low', vulnerability: 'Low', protection: 'High', color: 'emerald' },
                  { group: 'Bangladeshi migrants', risk: 'High', vulnerability: 'High', protection: 'Low', color: 'orange' },
                  { group: 'Nepali workers', risk: 'High', vulnerability: 'High', protection: 'Low', color: 'orange' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-lg border p-4 ${
                      item.color === 'red' ? 'border-red-500/30 bg-red-500/10' :
                      item.color === 'orange' ? 'border-orange-500/30 bg-orange-500/10' :
                      'border-emerald-500/30 bg-emerald-500/10'
                    }`}
                  >
                    <p className="text-sm font-medium text-slate-200 mb-2">{item.group}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant={item.risk === 'Critical' ? 'destructive' : item.risk === 'High' || item.risk === 'Medium-High' ? 'warning' : 'secondary'} className="text-xs">
                        {item.risk}
                      </Badge>
                      <span className="text-xs text-slate-400">V: {item.vulnerability} | P: {item.protection}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
