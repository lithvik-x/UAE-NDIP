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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Shield,
  Zap,
  Bug,
  Lock,
  Eye,
  Server,
  Database,
  Wifi,
  TrendingUp,
  Activity,
  Globe,
  Users,
  DollarSign,
  Target,
  ChevronRight,
  ExternalLink,
  Phone,
  Mail,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useCyberThreatData,
  cyberThreatExtendedData,
} from '@/lib/data-loader'
import { useState } from 'react'

export default function CyberThreatsPage() {
  const { data } = useCyberThreatData()
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedIncident, setSelectedIncident] = useState<number | null>(null)

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Cybersecurity Threats data...</div>
      </div>
    )
  }

  const extended = cyberThreatExtendedData
  const timeline = data.timeline || []
  const keyFindings = data.keyFindings || []
  const stakeholderImpacts = data.stakeholderImpact || []
  const responseMetrics = data.responseMetrics

  // Attack volume trend from extended data
  const attackTrendData = extended.attackVolume.dailyStatistics.map((stat, idx) => ({
    month: stat.period,
    attacks: parseInt(stat.attacks.replace(/[~,\/]/g, '')) || 0,
    change: stat.change,
  }))

  // Attack vector distribution
  const vectorData = extended.attackVectors.primaryVectors.map((v, idx) => ({
    name: v.vector,
    value: parseInt(v.percentage) || 0,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // Sector impact from extended data
  const sectorData = extended.sectorVulnerabilities.protectedSectors.map((s, idx) => ({
    name: s.sector,
    value: s.priority === 'Critical' ? 90 : 70,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // Sentiment
  const sentimentData = [
    { name: 'Critical', value: 45, color: CHART_COLORS.rose },
    { name: 'Alarmed', value: 30, color: CHART_COLORS.orange },
    { name: 'Concerned', value: 20, color: CHART_COLORS.gold },
    { name: 'Strained', value: 5, color: CHART_COLORS.platinum },
  ]

  // Ransomware groups chart data
  const ransomwareGroupsData = extended.threatActors.ransomwareGroups.slice(0, 8).map((g, idx) => ({
    name: g.group,
    attacks: g.active ? 75 + Math.random() * 25 : 0,
    color: g.group === 'Handala' ? CHART_COLORS.rose : Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // Insurance market data
  const insuranceData = extended.insuranceMarket.marketSize.map((m) => ({
    year: m.year,
    value: parseFloat(m.value.replace(/[$\s million]/g, '')) || 0,
  }))

  // Major incidents for timeline
  const majorIncidents = extended.majorIncidents

  // Threat actors radar data
  const radarData = [
    { name: 'State-Sponsored', value: 95 },
    { name: 'Ransomware', value: 85 },
    { name: 'Phishing', value: 90 },
    { name: 'DDoS', value: 75 },
    { name: 'AI-Powered', value: 80 },
    { name: 'Insider Threat', value: 40 },
  ]

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

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
          <Badge variant="denim" className="mb-2">CRISIS TYPE</Badge>
          <h1 className="text-4xl font-extrabold gradient-text-navy">Cybersecurity Threats</h1>
          <p className="mt-2 text-slate-400">
            State-sponsored attacks, ransomware, Bybit hack, Handala, AI-powered threats
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-purple-500/50 text-purple hover:bg-purple-500/10">
            <Lock className="h-4 w-4" />
            SOC Dashboard
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white gap-2">
            <Shield className="h-4 w-4" />
            Incident Response
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Daily Cyberattacks"
          value="500K-800K"
          icon={<Wifi className="h-6 w-6" />}
          gradient="purple"
          status="error"
        />
        <MetricCard
          title="2026 Incidents"
          value="128"
          icon={<Bug className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Bybit Hack Loss"
          value="$1.5B"
          icon={<Database className="h-6 w-6" />}
          gradient="orange"
          status="error"
        />
        <MetricCard
          title="State-Sponsored"
          value="71.4%"
          icon={<Server className="h-6 w-6" />}
          gradient="purple"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="actors">Threat Actors</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
          <TabsTrigger value="insurance">Insurance</TabsTrigger>
          <TabsTrigger value="laws">Laws & Defense</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Cyber Threat Overview" description="UAE cybersecurity landscape and attack trends">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-purple" />
                        Attack Volume Trend
                      </CardTitle>
                      <CardDescription>Daily cyberattacks (2025-2026)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={attackTrendData}
                        xAxisKey="month"
                        areas={[
                          { dataKey: 'attacks', name: 'Daily Attacks', color: CHART_COLORS.purple },
                        ]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="h-5 w-5 text-rose" />
                        Attack Vectors
                      </CardTitle>
                      <CardDescription>Distribution by attack type</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={vectorData}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Activity className="h-5 w-5 text-orange" />
                        Threat Radar
                      </CardTitle>
                      <CardDescription>Multi-dimensional threat assessment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RadarChart
                        data={radarData}
                        metrics={[{ dataKey: 'value', name: 'Threat Level', color: CHART_COLORS.purple }]}
                        height={280}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="h-5 w-5 text-gold" />
                        Sentiment Analysis
                      </CardTitle>
                      <CardDescription>Public/organizational response sentiment</CardDescription>
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
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Attack Timeline" description="Major cyber incidents affecting UAE">
              <div className="space-y-6">
                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Incident Timeline</CardTitle>
                    <CardDescription>Key events from March 2025 to April 2026</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[500px]">
                      <div className="relative border-l-2 border-purple-500/50 pl-6 space-y-6">
                        {majorIncidents.map((incident, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="relative cursor-pointer"
                            onClick={() => setSelectedIncident(selectedIncident === idx ? null : idx)}
                          >
                            <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-purple-500 border-2 border-slate-900" />
                            <div className={`rounded-lg border p-4 transition-all duration-300 ${selectedIncident === idx ? 'bg-purple-500/20 border-purple-500/50' : 'bg-slate-800/50 border-slate-700/50 hover:border-purple-500/30'}`}>
                              <div className="flex items-center justify-between mb-1">
                                <p className="font-semibold text-slate-200">{incident.incident}</p>
                                <Badge variant="outline" className="text-xs">{incident.date}</Badge>
                              </div>
                              <p className="text-sm text-slate-400 mb-2">{incident.impact}</p>
                              <div className="flex items-center gap-4 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                  <Shield className="h-3 w-3" />
                                  {incident.sector}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Bug className="h-3 w-3" />
                                  {incident.actor}
                                </span>
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
          </motion.div>
        </TabsContent>

        {/* Threat Actors Tab */}
        <TabsContent value="actors" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Cyber Threat Actors" description="Active ransomware groups and hacktivist collectives">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Bug className="h-5 w-5 text-rose" />
                        Ransomware Groups
                      </CardTitle>
                      <CardDescription>Active in UAE region</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={ransomwareGroupsData}
                        xAxisKey="name"
                        bars={[{ dataKey: 'attacks', name: 'Activity Level', color: CHART_COLORS.rose }]}
                        height={300}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Users className="h-5 w-5 text-purple" />
                        Hacktivist Groups
                      </CardTitle>
                      <CardDescription>Iran-affiliated threat actors</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-3">
                          {extended.iranUaeConflict.iranianGroupsTargetingUAE.map((group, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              whileHover={{ x: 4 }}
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50 hover:border-rose-500/30 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-rose-500" />
                                <span className="font-medium text-slate-200">{group.group}</span>
                              </div>
                              <ChevronRight className="h-4 w-4 text-slate-500" />
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange" />
                      Handala - Iran-Linked Threat Actor
                    </CardTitle>
                    <CardDescription>$10M FBI bounty</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="rounded-lg bg-slate-800/50 p-4 border border-rose-500/30">
                        <p className="text-xs text-slate-400">Attribution</p>
                        <p className="text-lg font-bold text-rose">Iran-backed</p>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4 border border-rose-500/30">
                        <p className="text-xs text-slate-400">FBI Bounty</p>
                        <p className="text-lg font-bold text-rose">$10 Million</p>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4 border border-rose-500/30">
                        <p className="text-xs text-slate-400">Active Since</p>
                        <p className="text-lg font-bold text-rose">2022</p>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4 border border-rose-500/30">
                        <p className="text-xs text-slate-400">April 2026 Attack</p>
                        <p className="text-lg font-bold text-rose">6PB Destroyed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Sectors Tab */}
        <TabsContent value="sectors" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Critical Sector Vulnerabilities" description="Threat assessment by industry">
              <div className="space-y-6">
                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Impact by Sector</CardTitle>
                    <CardDescription>Threat level assessment by industry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={sectorData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Threat Level', color: CHART_COLORS.purple }]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-rose" />
                        Healthcare Incidents
                      </CardTitle>
                      <CardDescription>Major healthcare breaches</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[250px]">
                        <div className="space-y-3">
                          {extended.sectorVulnerabilities.healthcareIncidents.map((incident, idx) => (
                            <div key={idx} className="rounded-lg bg-slate-800/50 p-3 border border-slate-700/50">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium text-slate-200">{incident.facility}</span>
                                <Badge variant="destructive" className="text-xs">{incident.actor}</Badge>
                              </div>
                              <p className="text-xs text-slate-400">{incident.records} records | {incident.dataStolen} stolen</p>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-orange-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-orange" />
                        Financial Incidents
                      </CardTitle>
                      <CardDescription>Major financial sector breaches</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[250px]">
                        <div className="space-y-3">
                          {extended.sectorVulnerabilities.financialIncidents.map((incident, idx) => (
                            <div key={idx} className="rounded-lg bg-slate-800/50 p-3 border border-slate-700/50">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium text-slate-200">{incident.institution}</span>
                                <Badge variant="outline" className="text-xs text-orange">{incident.amount}</Badge>
                              </div>
                              <p className="text-xs text-slate-400">{incident.date} | {incident.actor}</p>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Insurance Tab */}
        <TabsContent value="insurance" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Cyber Insurance Market" description="Market size and projections">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-purple" />
                        Market Growth
                      </CardTitle>
                      <CardDescription>UAE cyber insurance market size (2025-2034)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={insuranceData}
                        xAxisKey="year"
                        areas={[{ dataKey: 'value', name: 'Market Size ($M)', color: CHART_COLORS.purple }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-gold-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-gold" />
                        Market Drivers
                      </CardTitle>
                      <CardDescription>Factors driving insurance demand</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {extended.insuranceMarket.marketDrivers.map((driver, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-slate-300">{driver.driver}</span>
                            <Badge variant={driver.impact === 'Critical' ? 'destructive' : driver.impact === 'High' ? 'warning' : 'outline'}>
                              {driver.impact}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="rounded-lg bg-slate-800/50 p-4 border border-purple-500/30 text-center">
                        <p className="text-2xl font-bold text-purple">$83M</p>
                        <p className="text-xs text-slate-400">2026 Market</p>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4 border border-purple-500/30 text-center">
                        <p className="text-2xl font-bold text-purple">$350M</p>
                        <p className="text-xs text-slate-400">2034 Projection</p>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4 border border-purple-500/30 text-center">
                        <p className="text-2xl font-bold text-purple">17.29%</p>
                        <p className="text-xs text-slate-400">CAGR</p>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4 border border-purple-500/30 text-center">
                        <p className="text-2xl font-bold text-purple">40%</p>
                        <p className="text-xs text-slate-400">MENA Share</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Laws & Defense Tab */}
        <TabsContent value="laws" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Cyber Laws & Defense Ecosystem" description="Regulatory framework and defensive capabilities">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-purple" />
                        Defense Capabilities
                      </CardTitle>
                      <CardDescription>Active cybersecurity measures</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {extended.defenseEcosystem.defenseCapabilities.map((cap, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50">
                            <span className="text-slate-200">{cap.capability}</span>
                            <Badge variant="success" className="text-xs flex items-center gap-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              {cap.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-cyan-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Phone className="h-5 w-5 text-cyan" />
                        Reporting Channels
                      </CardTitle>
                      <CardDescription>Official UAE cyber incident reporting</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {extended.reportingChannels.map((channel, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ x: 4 }}
                            className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              {channel.agency.includes('Abu Dhabi') ? (
                                <Phone className="h-4 w-4 text-cyan" />
                              ) : (
                                <Mail className="h-4 w-4 text-cyan" />
                              )}
                              <div>
                                <p className="font-medium text-slate-200">{channel.agency}</p>
                                <p className="text-xs text-slate-400">{channel.service}</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-cyan">{channel.contact}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Federal Law No. 34 of 2021 - Cybercrime Penalties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg bg-slate-800/50 p-4 border border-purple-500/30">
                        <p className="font-medium text-purple mb-2">General Hacking</p>
                        <p className="text-sm text-slate-400">Fine: 100,000-300,000 AED</p>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4 border border-rose-500/30">
                        <p className="font-medium text-rose mb-2">Causing Damage</p>
                        <p className="text-sm text-slate-400">6mo+ imprisonment + 150,000-500,000 AED</p>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4 border border-rose-500/30">
                        <p className="font-medium text-rose mb-2">Government Systems</p>
                        <p className="text-sm text-slate-400">5-7 years imprisonment + 250,000-1,500,000 AED</p>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4 border border-orange-500/30">
                        <p className="font-medium text-orange mb-2">Cyber Extortion</p>
                        <p className="text-sm text-slate-400">Up to 10 years imprisonment</p>
                      </div>
                    </div>
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