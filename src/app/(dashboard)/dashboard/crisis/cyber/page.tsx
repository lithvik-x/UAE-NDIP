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
  Clock,
  EyeOff,
  Fingerprint,
  Skull,
  ShieldAlert,
  TrendingDown,
  UsersRound,
  Briefcase,
  Scale,
  Building2,
  Tv,
  Siren,
  HeartPulse,
  Banknote,
  Search,
  Brain,
  Bot,
  Infinity,
  Binary,
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

  // ============================================================================
  // CHART DATA PREPARATION
  // ============================================================================

  // Attack volume trend from extended data
  const attackTrendData = extended.attackVolume.dailyStatistics.map((stat) => ({
    month: stat.period,
    attacks: parseInt(stat.attacks.replace(/[~,\/]/g, '')) || 0,
    change: stat.change,
  }))

  // Attack composition data (Pie)
  const attackCompositionData = [
    { name: 'Organized Groups', value: extended.attackVolume.attackComposition.organizedGroups, color: CHART_COLORS.rose },
    { name: 'Amateur Hackers', value: extended.attackVolume.attackComposition.amateurHackers, color: CHART_COLORS.orange },
    { name: 'Malware Entities', value: extended.attackVolume.attackComposition.maliciousSoftwareEntities, color: CHART_COLORS.purple },
  ]

  // Threat distribution data
  const threatDistributionData = extended.attackVolume.organizedThreatDistribution.map((d, idx) => ({
    name: d.category,
    count: parseInt(d.count) || 0,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
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
    value: s.priority === 'Critical' ? 95 : 75,
    color: s.priority === 'Critical' ? CHART_COLORS.rose : CHART_COLORS.orange,
  }))

  // Ransomware statistics chart data
  const ransomwareStatsData = extended.ransomwareLandscape.statistics.map((s) => ({
    name: s.metric,
    value: parseInt(s.value) || 0,
    year: s.date || '',
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
    { name: 'Zero-Day', value: 70 },
  ]

  // Sentiment data from extended
  const sentimentValues = extended.executiveSummary.sentimentAnalysis
  const sentimentData = [
    { name: 'Critical', value: 45, color: CHART_COLORS.rose },
    { name: 'Alarmed', value: 30, color: CHART_COLORS.orange },
    { name: 'Concerned', value: 20, color: CHART_COLORS.gold },
    { name: 'Strained', value: 5, color: CHART_COLORS.platinum },
  ]

  // Workforce gap data
  const workforceData = extended.workforceGap.talentShortage.map((t, idx) => ({
    name: t.metric.length > 25 ? t.metric.substring(0, 25) + '...' : t.metric,
    value: parseInt(t.value) || 0,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // Dark web pricing data
  const darkWebPricingData = extended.darkWebEconomy.dataPricing.map((d, idx) => ({
    name: d.type,
    price: d.priceRange.includes('-') ? parseInt(d.priceRange.split('-')[0].replace(/[$\s]/g, '')) || 0 : parseInt(d.priceRange.replace(/[$\s]/g, '')) || 0,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // Emerging threats radar
  const emergingThreatsRadar = extended.emergingThreats.aiPoweredAttacks.map((t) => ({
    name: t.threat,
    value: t.status === 'Active' ? 85 : t.status === '90% of breaches' ? 90 : 60,
  }))

  // Handala attack data
  const handalaAttackData = extended.stateSponsoredThreats.april2026DubaiAttack.map((a) => ({
    entity: a.entity,
    destroyed: a.dataDestroyed === '-' ? 0 : parseFloat(a.dataDestroyed) || 0,
    stolen: a.dataStolen === '-' ? 0 : parseFloat(a.dataStolen) || 0,
  }))

  // Healthcare incidents chart
  const healthcareIncidentsData = extended.sectorVulnerabilities.healthcareIncidents.map((h) => ({
    facility: h.facility.split(' ').slice(0, 2).join(' '),
    records: h.records === 'Unknown' ? 0 : parseInt(h.records.replace(/[^\d]/g, '')) || 0,
    color: CHART_COLORS.rose,
  }))

  // Financial incidents chart
  const financialIncidentsData = extended.sectorVulnerabilities.financialIncidents.map((f) => ({
    institution: f.institution.split(' ').slice(0, 2).join(' '),
    amount: f.amount.includes('Alleged') ? 38 : f.amount.includes('Stolen') ? 1500 : parseFloat(f.amount.replace(/[^\d]/g, '')) || 0,
    color: CHART_COLORS.orange,
  }))

  // Phishing statistics
  const phishingStatsData = extended.phishingStats.map((p, idx) => ({
    name: p.metric,
    value: parseInt(p.value) || 0,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // Key statistics for header metrics
  const keyStats = extended.executiveSummary.keyStatistics.slice(0, 8)

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
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-navy">Cybersecurity Threats</h1>
          <p className="mt-2 text-platinum-400">
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

      {/* Additional Key Statistics Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-8"
      >
        {keyStats.slice(0, 8).map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * idx }}
            className="rounded-lg glass-card border border-platinum-700/50 p-3 text-center hover:border-purple-500/30 transition-all"
          >
            <p className="text-xs text-platinum-400 truncate" title={stat.metric}>{stat.metric}</p>
            <p className="text-lg font-bold text-purple">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="actors">Threat Actors</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
          <TabsTrigger value="ransomware">Ransomware</TabsTrigger>
          <TabsTrigger value="phishing">Phishing</TabsTrigger>
          <TabsTrigger value="workforce">Workforce</TabsTrigger>
          <TabsTrigger value="darkweb">Dark Web</TabsTrigger>
          <TabsTrigger value="emerging">Emerging</TabsTrigger>
          <TabsTrigger value="insurance">Insurance</TabsTrigger>
          <TabsTrigger value="laws">Laws</TabsTrigger>
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
                      <CardDescription>Threat response sentiment</CardDescription>
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

                <div className="grid gap-6 lg:grid-cols-3">
                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-purple" />
                        Threat Composition
                      </CardTitle>
                      <CardDescription>Actor categorization</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={attackCompositionData}
                        height={220}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Binary className="h-5 w-5 text-cyan" />
                        Organized Threats
                      </CardTitle>
                      <CardDescription>Distribution by type</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={threatDistributionData}
                        xAxisKey="name"
                        bars={[{ dataKey: 'count', name: 'Count', color: CHART_COLORS.teal }]}
                        height={220}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Clock className="h-5 w-5 text-gold" />
                        Official Quote
                      </CardTitle>
                      <CardDescription>UAE Cyber Security Council</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center h-[220px]">
                      <blockquote className="border-l-4 border-gold pl-4">
                        <p className="text-2xl font-serif italic text-gold">&ldquo;{extended.attackVolume.officialQuote.text}&rdquo;</p>
                        <p className="mt-2 text-sm text-platinum-400">- {extended.attackVolume.officialQuote.author}</p>
                        <p className="text-xs text-platinum-500">{extended.attackVolume.officialQuote.role}</p>
                      </blockquote>
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
                            <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-purple-500 border-2 border-platinum-900" />
                            <div className={`rounded-lg border p-4 transition-all duration-300 ${selectedIncident === idx ? 'bg-purple-500/20 border-purple-500/50' : 'bg-platinum-800/50 border-platinum-700/50 hover:border-purple-500/30'}`}>
                              <div className="flex items-center justify-between mb-1">
                                <p className="font-semibold text-platinum-200">{incident.incident}</p>
                                <Badge variant="outline" className="text-xs">{incident.date}</Badge>
                              </div>
                              <p className="text-sm text-platinum-400 mb-2">{incident.impact}</p>
                              <div className="flex items-center gap-4 text-xs text-platinum-500">
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
                        data={extended.threatActors.ransomwareGroups.slice(0, 10).map((g, idx) => ({
                          name: g.group,
                          attacks: g.active ? 75 + Math.random() * 25 : 0,
                          color: g.group === 'Handala' ? CHART_COLORS.rose : Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
                        }))}
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
                              className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50 hover:border-rose-500/30 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-rose-500" />
                                <span className="font-medium text-platinum-200">{group.group}</span>
                              </div>
                              <span className="text-xs text-platinum-500">{group.knownActivity}</span>
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
                    <CardDescription>$10M FBI bounty | Active since 2022</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-5">
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                        <p className="text-xs text-platinum-400">Attribution</p>
                        <p className="text-sm font-bold text-rose">Iran-backed</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                        <p className="text-xs text-platinum-400">FBI Bounty</p>
                        <p className="text-sm font-bold text-rose">$10 Million</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                        <p className="text-xs text-platinum-400">Active Since</p>
                        <p className="text-sm font-bold text-rose">2022</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                        <p className="text-xs text-platinum-400">Motivation</p>
                        <p className="text-sm font-bold text-rose">Pro-Palestinian</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                        <p className="text-xs text-platinum-400">April 2026</p>
                        <p className="text-sm font-bold text-rose">6PB Destroyed</p>
                      </div>
                    </div>

                    {/* Handala Attack Visualization */}
                    <div className="mt-6">
                      <p className="text-sm font-medium text-platinum-300 mb-3">April 2026 Dubai Attack Impact</p>
                      <BarChart
                        data={handalaAttackData.filter(a => a.entity !== 'Dubai RTA').map((a) => ({
                          name: a.entity.split(' ')[0],
                          destroyed: a.destroyed,
                          stolen: a.stolen,
                        }))}
                        xAxisKey="name"
                        bars={[
                          { dataKey: 'destroyed', name: 'Destroyed (PB)', color: CHART_COLORS.rose },
                          { dataKey: 'stolen', name: 'Stolen (TB)', color: CHART_COLORS.orange },
                        ]}
                        height={200}
                        showGrid={true}
                      />
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
                        <HeartPulse className="h-5 w-5 text-rose" />
                        Healthcare Incidents
                      </CardTitle>
                      <CardDescription>Major healthcare breaches</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={healthcareIncidentsData}
                        xAxisKey="facility"
                        bars={[{ dataKey: 'records', name: 'Records (millions)', color: CHART_COLORS.rose }]}
                        height={250}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-orange-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Banknote className="h-5 w-5 text-orange" />
                        Financial Incidents
                      </CardTitle>
                      <CardDescription>Major financial sector breaches</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={financialIncidentsData}
                        xAxisKey="institution"
                        bars={[{ dataKey: 'amount', name: 'Impact ($M)', color: CHART_COLORS.orange }]}
                        height={250}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Bybit Hack Special Feature */}
                <Card className="glass-card border-amber-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-amber" />
                      Bybit Hack - February 2025
                    </CardTitle>
                    <CardDescription>Largest cryptocurrency theft ever</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-amber-500/30 text-center">
                        <p className="text-3xl font-bold text-amber">$1.5B</p>
                        <p className="text-xs text-platinum-400">Amount Stolen</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-amber-500/30 text-center">
                        <p className="text-lg font-bold text-amber">400,000+ ETH</p>
                        <p className="text-xs text-platinum-400">Currency</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-amber-500/30 text-center">
                        <p className="text-lg font-bold text-amber">North Korea</p>
                        <p className="text-xs text-platinum-400">FBI Attribution</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Ransomware Tab */}
        <TabsContent value="ransomware" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Ransomware Landscape" description="UAE ransomware statistics and trends">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-rose" />
                        Ransomware Statistics
                      </CardTitle>
                      <CardDescription>24-month trends</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={ransomwareStatsData.filter(s => s.value > 0).slice(0, 6)}
                        xAxisKey="name"
                        bars={[{ dataKey: 'value', name: 'Value', color: CHART_COLORS.rose }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Bug className="h-5 w-5 text-purple" />
                        Financial Impact
                      </CardTitle>
                      <CardDescription>Global and UAE statistics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {extended.ransomwareLandscape.financialImpact.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50">
                            <span className="text-platinum-300">{item.metric}</span>
                            <Badge variant="destructive">{item.value}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5 text-purple" />
                      Active Ransomware Groups
                    </CardTitle>
                    <CardDescription>18 groups active in UAE region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {extended.threatActors.ransomwareGroups.map((group, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                            className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50 hover:border-rose-500/30 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <div className={`h-2 w-2 rounded-full ${group.active ? 'bg-rose-500' : 'bg-platinum-500'}`} />
                              <span className="text-sm font-medium text-platinum-200">{group.group}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">{group.notableAttacks}</Badge>
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

        {/* Phishing Tab */}
        <TabsContent value="phishing" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Phishing & Social Engineering" description="UAE phishing statistics and major scams">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Mail className="h-5 w-5 text-rose" />
                        Phishing Statistics
                      </CardTitle>
                      <CardDescription>Breach share and global messages</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={phishingStatsData}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-orange-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange" />
                        Major Phishing Incidents
                      </CardTitle>
                      <CardDescription>Notable UAE cases</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {extended.phishingIncidents.map((incident, idx) => (
                          <div key={idx} className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-platinum-200">{incident.incident}</span>
                              <Badge variant="destructive">{incident.impact}</Badge>
                            </div>
                            <p className="text-xs text-platinum-400">{incident.method} | {incident.date}</p>
                          </div>
                        ))}

                        {/* Deep Voice Scam Highlight */}
                        <div className="rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-4 border border-amber-500/50">
                          <p className="text-sm font-bold text-amber mb-2">Deep Voice Scam - $35M Loss</p>
                          <p className="text-xs text-platinum-400">{extended.deepVoiceScamDetails.method}</p>
                          <p className="text-xs text-platinum-500 mt-1">Status: {extended.deepVoiceScamDetails.status}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Search className="h-5 w-5 text-purple" />
                      Major Scam Types in UAE (2026)
                    </CardTitle>
                    <CardDescription>Common fraud categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-5">
                      {extended.majorScamTypes.map((scam, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                          className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50 text-center hover:border-purple-500/30 transition-colors"
                        >
                          <p className="text-sm font-medium text-platinum-200">{scam.type}</p>
                          <p className="text-xs text-platinum-500 mt-1">{scam.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Workforce Tab */}
        <TabsContent value="workforce" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Workforce & Talent Gap" description="Cybersecurity skills shortage in UAE">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <UsersRound className="h-5 w-5 text-purple" />
                        Talent Shortage
                      </CardTitle>
                      <CardDescription>Organizations facing skills gap</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={workforceData}
                        xAxisKey="name"
                        bars={[{ dataKey: 'value', name: 'Percentage', color: CHART_COLORS.purple }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-orange-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-orange" />
                        Hiring Challenges
                      </CardTitle>
                      <CardDescription>UAE tech sector difficulties</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {extended.workforceGap.hiringChallenges.map((challenge, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-platinum-300">{challenge.challenge}</span>
                              <Badge variant="warning">{challenge.percentage}</Badge>
                            </div>
                            <Progress value={parseInt(challenge.percentage) || 0} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card border-cyan-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="h-5 w-5 text-cyan" />
                      Remote Work Impact
                    </CardTitle>
                    <CardDescription>Home network vulnerability</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center p-6">
                      <div className="text-center">
                        <p className="text-5xl font-bold text-cyan">+40%</p>
                        <p className="text-platinum-400 mt-2">Increase in home network attacks</p>
                        <p className="text-xs text-platinum-500 mt-1">Source: UAE Cybersecurity Council</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Dark Web Tab */}
        <TabsContent value="darkweb" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Dark Web Economy" description="UAE data pricing and dark web sales">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <EyeOff className="h-5 w-5 text-purple" />
                        Data Pricing
                      </CardTitle>
                      <CardDescription>Dark web value of UAE data</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={darkWebPricingData.filter(d => d.price > 0)}
                        xAxisKey="name"
                        bars={[{ dataKey: 'price', name: 'Price ($)', color: CHART_COLORS.purple }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Fingerprint className="h-5 w-5 text-rose" />
                        Notable Sales
                      </CardTitle>
                      <CardDescription>Confirmed dark web data sales</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {extended.darkWebEconomy.darkWebSales.map((sale, idx) => (
                          <div key={idx} className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-platinum-200">{sale.incident}</span>
                              <Badge variant="destructive">{sale.price}</Badge>
                            </div>
                            <p className="text-xs text-platinum-400">{sale.data} | {sale.date}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* UAE InvestBank Highlight */}
                <Card className="glass-card border-amber-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber" />
                      UAE InvestBank Case Study
                    </CardTitle>
                    <CardDescription>$3M ransom demanded, data sold for $22.80</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-amber-500/30 text-center">
                        <p className="text-2xl font-bold text-amber">$3M</p>
                        <p className="text-xs text-platinum-400">Ransom Demanded</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-amber-500/30 text-center">
                        <p className="text-2xl font-bold text-amber">40K</p>
                        <p className="text-xs text-platinum-400">Customers Affected</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-amber-500/30 text-center">
                        <p className="text-2xl font-bold text-amber">$110M+</p>
                        <p className="text-xs text-platinum-400">Total Account Balances</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-amber-500/30 text-center">
                        <p className="text-2xl font-bold text-amber">$22.80</p>
                        <p className="text-xs text-platinum-400">Dark Web Sale Price</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Emerging Threats Tab */}
        <TabsContent value="emerging" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Emerging Threats" description="AI-powered attacks and new threat vectors">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Brain className="h-5 w-5 text-purple" />
                        AI-Powered Attacks
                      </CardTitle>
                      <CardDescription>New attack methodologies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RadarChart
                        data={emergingThreatsRadar.map(t => ({ name: t.name, value: t.value }))}
                        metrics={[{ dataKey: 'value', name: 'Threat Level', color: CHART_COLORS.purple }]}
                        height={280}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Bot className="h-5 w-5 text-rose" />
                        AI Attack Methods
                      </CardTitle>
                      <CardDescription>Documented techniques</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {extended.attackVectors.aiAttackMethods.map((method, idx) => (
                          <div key={idx} className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50">
                            <p className="text-sm font-medium text-platinum-200">{method.method}</p>
                            <p className="text-xs text-platinum-500 mt-1">{method.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-orange-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Tv className="h-5 w-5 text-orange" />
                        Critical Infrastructure Threats
                      </CardTitle>
                      <CardDescription>SCADA and sector targeting</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {extended.emergingThreats.criticalInfrastructureThreats.map((threat, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50">
                            <span className="text-platinum-300">{threat.threat}</span>
                            <Badge variant="warning">{threat.status}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-cyan-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Siren className="h-5 w-5 text-cyan" />
                        SIM Swap Fraud
                      </CardTitle>
                      <CardDescription>Active in UAE</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="rounded-lg bg-platinum-800/50 p-3 border border-cyan-500/30">
                          <p className="text-sm font-medium text-cyan">Status</p>
                          <p className="text-lg text-platinum-200">{extended.emergingThreats.simSwapFraud.status}</p>
                        </div>
                        <div className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50">
                          <p className="text-xs text-platinum-400">Methods</p>
                          <p className="text-sm text-platinum-300">{extended.emergingThreats.simSwapFraud.details}</p>
                        </div>
                        <div className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50">
                          <p className="text-xs text-platinum-400">Police Warning</p>
                          <p className="text-sm text-platinum-300">{extended.emergingThreats.simSwapFraud.policeWarning}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Zero-Day Warnings */}
                <Card className="glass-card border-amber-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ShieldAlert className="h-5 w-5 text-amber" />
                      Zero-Day Vulnerability Warnings
                    </CardTitle>
                    <CardDescription>Active and ongoing threats</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {extended.attackVectors.zeroDayWarnings.map((warning, idx) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-4 border border-amber-500/30">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-platinum-200">{warning.vulnerability}</span>
                            <Badge variant="destructive">{warning.status}</Badge>
                          </div>
                          <p className="text-xs text-platinum-400">{warning.source} | {warning.date}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
                            <span className="text-platinum-300">{driver.driver}</span>
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
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-purple-500/30 text-center">
                        <p className="text-2xl font-bold text-purple">$83M</p>
                        <p className="text-xs text-platinum-400">2026 Market</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-purple-500/30 text-center">
                        <p className="text-2xl font-bold text-purple">$350M</p>
                        <p className="text-xs text-platinum-400">2034 Projection</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-purple-500/30 text-center">
                        <p className="text-2xl font-bold text-purple">17.29%</p>
                        <p className="text-xs text-platinum-400">CAGR</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-purple-500/30 text-center">
                        <p className="text-2xl font-bold text-purple">40%</p>
                        <p className="text-xs text-platinum-400">MENA Share</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* MENA Context */}
                <Card className="glass-card border-cyan-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="h-5 w-5 text-cyan" />
                      MENA Regional Context
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-cyan-500/30 text-center">
                        <p className="text-2xl font-bold text-cyan">$5B</p>
                        <p className="text-xs text-platinum-400">MENA Total Losses</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-cyan-500/30 text-center">
                        <p className="text-2xl font-bold text-cyan">$400M-$1.5B</p>
                        <p className="text-xs text-platinum-400">Insured Portion</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-cyan-500/30 text-center">
                        <p className="text-2xl font-bold text-cyan">18%</p>
                        <p className="text-xs text-platinum-400">No Insurance Coverage</p>
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
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50">
                            <span className="text-platinum-200">{cap.capability}</span>
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
                            className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50 hover:border-cyan-500/30 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              {channel.agency.includes('Abu Dhabi') ? (
                                <Phone className="h-4 w-4 text-cyan" />
                              ) : (
                                <Mail className="h-4 w-4 text-cyan" />
                              )}
                              <div>
                                <p className="font-medium text-platinum-200">{channel.agency}</p>
                                <p className="text-xs text-platinum-400">{channel.service}</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-cyan">{channel.contact}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* UAE Cyber Security Council */}
                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-purple" />
                      UAE Cyber Security Council
                    </CardTitle>
                    <CardDescription>National coordination body</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-purple-500/30">
                        <p className="text-xs text-platinum-400">Established</p>
                        <p className="text-lg font-bold text-purple">{extended.defenseEcosystem.councilDetails.established}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-purple-500/30">
                        <p className="text-xs text-platinum-400">Head</p>
                        <p className="text-lg font-bold text-purple">{extended.defenseEcosystem.councilDetails.head}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-purple-500/30">
                        <p className="text-xs text-platinum-400">Daily Bulletins</p>
                        <p className="text-lg font-bold text-purple">{extended.defenseEcosystem.councilDetails.dailyBulletins}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Federal Law No. 34 of 2021 - Cybercrime Penalties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-purple-500/30">
                        <p className="font-medium text-purple mb-2">General Hacking</p>
                        <p className="text-sm text-platinum-400">Fine: 100,000-300,000 AED</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                        <p className="font-medium text-rose mb-2">Causing Damage</p>
                        <p className="text-sm text-platinum-400">6mo+ imprisonment + fine</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                        <p className="font-medium text-rose mb-2">Government Systems</p>
                        <p className="text-sm text-platinum-400">5-7 years imprisonment</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-orange-500/30">
                        <p className="font-medium text-orange mb-2">Cyber Extortion</p>
                        <p className="text-sm text-platinum-400">Up to 10 years imprisonment</p>
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
