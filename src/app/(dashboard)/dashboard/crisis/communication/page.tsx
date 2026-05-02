
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
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
  Radio,
  FileWarning,
  UserX,
  Ban,
  WifiOff,
  Crosshair,
  Scale,
  Quote,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useCommunicationCrisisData,
  communicationCrisisExtendedData,
} from '@/lib/data-loader'
import { useState } from 'react'

export default function CommunicationCrisisPage() {
  const { data } = useCommunicationCrisisData()
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedIncident, setSelectedIncident] = useState<number | null>(null)

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Communication Crisis data...</div>
      </div>
    )
  }

  const extended = communicationCrisisExtendedData

  // DDoS attack trend data
  const ddosTrendData = [
    { period: 'H1 2025', attacks: 3477, duration: 27 },
    { period: 'H2 2025', attacks: 10303, duration: 720 },
  ]

  // DDoS sector distribution
  const ddosSectorData = [
    { name: 'Wired Telecom', value: 6368, color: CHART_COLORS.rose },
    { name: 'Other Telecom', value: 945, color: CHART_COLORS.orange },
    { name: 'Computing', value: 825, color: CHART_COLORS.gold },
    { name: 'Retail', value: 400, color: CHART_COLORS.emerald },
    { name: 'Publishing', value: 300, color: CHART_COLORS.teal },
  ]

  // Misinformation cases pie chart
  const misinformationCasesData = [
    { name: 'Debunked', value: 4, color: CHART_COLORS.emerald },
    { name: 'Re-debunked', value: 3, color: CHART_COLORS.gold },
  ]

  // Deepfake incidents
  const deepfakeIncidentsData = [
    { name: 'Voice Clone Heist', value: 35, color: CHART_COLORS.rose },
    { name: 'Investment Scam', value: 2, color: CHART_COLORS.orange },
  ]

  // Sentiment analysis data
  const sentimentData = [
    { name: 'Negative', value: 55, color: CHART_COLORS.rose },
    { name: 'Neutral', value: 30, color: CHART_COLORS.platinum },
    { name: 'Positive', value: 15, color: CHART_COLORS.emerald },
  ]

  // Threat level radar
  const threatRadarData = [
    { name: 'External Misinfo', value: 90 },
    { name: 'Internal Suppression', value: 85 },
    { name: 'Cyber Attacks', value: 88 },
    { name: 'Deepfake Fraud', value: 75 },
    { name: 'Disinfo (Actor)', value: 65 },
    { name: 'Legal Challenges', value: 60 },
  ]

  // Blocked platforms data
  const blockedPlatformsData = [
    { name: 'WhatsApp', value: 1, color: CHART_COLORS.rose },
    { name: 'Viber', value: 1, color: CHART_COLORS.orange },
    { name: 'FaceTime', value: 1, color: CHART_COLORS.gold },
    { name: 'Discord', value: 1, color: CHART_COLORS.emerald },
    { name: 'Al Jazeera', value: 1, color: CHART_COLORS.teal },
  ]

  // Legal penalties data
  const legalPenaltiesData = [
    { name: 'Cybercrime Fine', value: 200000, color: CHART_COLORS.rose },
    { name: 'Contradicting Content', value: 200000, color: CHART_COLORS.orange },
    { name: 'Illegal Content Storage', value: 10000000, color: CHART_COLORS.gold },
  ]

  // Key findings metrics
  const keyMetrics: { label: string; value: string; icon: React.ReactNode; gradient: 'gold' | 'red' | 'indigo' | 'cyan' | 'emerald' | 'rose' | 'orange' | 'lime' | 'teal' | 'denim' | 'purple' | 'fuchsia' }[] = [
    { label: 'State-Sponsored Threats', value: '71.4%', icon: <Server className="h-6 w-6" />, gradient: 'rose' },
    { label: 'DDoS Increase', value: '+196%', icon: <Wifi className="h-6 w-6" />, gradient: 'orange' },
    { label: 'Duration Increase', value: '+2,567%', icon: <Activity className="h-6 w-6" />, gradient: 'gold' },
    { label: 'Arrests (March 2026)', value: '35+', icon: <UserX className="h-6 w-6" />, gradient: 'purple' },
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
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-navy-500">Communication Crisis</h1>
          <p className="mt-2 text-platinum-400">
            Misinformation, deepfakes, disinformation campaigns, information suppression, DDoS attacks
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-purple-500/50 text-purple-500 hover:bg-purple-500/10">
            <Shield className="h-4 w-4" />
            Counter Measures
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white gap-2">
            <Radio className="h-4 w-4" />
            Response Protocol
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
        {keyMetrics.map((metric, idx) => (
          <MetricCard
            key={idx}
            title={metric.label}
            value={metric.value}
            icon={metric.icon}
            gradient={metric.gradient}
            status="error"
          />
        ))}
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="misinformation">Misinformation</TabsTrigger>
          <TabsTrigger value="deepfakes">Deepfakes</TabsTrigger>
          <TabsTrigger value="disinfo">Disinfo Campaigns</TabsTrigger>
          <TabsTrigger value="suppression">Suppression</TabsTrigger>
          <TabsTrigger value="cyber">Cyber Attacks</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Communication Crisis Overview" description="UAE communication crisis landscape">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-purple-500" />
                        Threat Radar
                      </CardTitle>
                      <CardDescription>Multi-dimensional threat assessment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RadarChart
                        data={threatRadarData}
                        metrics={[{ dataKey: 'value', name: 'Threat Level', color: CHART_COLORS.purple }]}
                        height={280}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-rose-500" />
                        Sentiment Analysis
                      </CardTitle>
                      <CardDescription>Public response sentiment</CardDescription>
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

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-cyan-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-cyan-500" />
                        Key Findings
                      </CardTitle>
                      <CardDescription>Critical crisis indicators</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {data.keyFindings?.slice(0, 5).map((finding: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="flex items-start justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50 hover:border-rose-500/30 transition-colors"
                          >
                            <div className="flex-1">
                              <p className="text-sm text-platinum-200">{finding.finding}</p>
                              <p className="text-xs text-platinum-500 mt-1">{finding.source}</p>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              <Badge variant={finding.alert === 'RED' ? 'destructive' : finding.alert === 'YELLOW' ? 'warning' : 'outline'} className="text-xs">
                                {finding.metric}
                              </Badge>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-gold-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="h-5 w-5 text-gold-700" />
                        Threat Levels
                      </CardTitle>
                      <CardDescription>Assessment by threat type</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[250px]">
                        <div className="space-y-3">
                          {extended.threatLevels?.map((threat: any, idx: number) => (
                            <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50">
                              <span className="text-platinum-200">{threat.threatType}</span>
                              <div className="flex items-center gap-2">
                                <Badge variant={threat.level === 'HIGH' ? 'destructive' : threat.level === 'MEDIUM-HIGH' ? 'warning' : 'outline'} className="text-xs">
                                  {threat.level}
                                </Badge>
                              </div>
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

        {/* Misinformation Tab */}
        <TabsContent value="misinformation" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Misinformation & Fake News" description="Documented misinformation cases and government responses">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileWarning className="h-5 w-5 text-rose-500" />
                        Misinformation Cases (March 2026)
                      </CardTitle>
                      <CardDescription>False claims during Iran conflict</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={misinformationCasesData}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-orange-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-orange-500" />
                        Counter-Measures
                      </CardTitle>
                      <CardDescription>Government agencies and actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[280px]">
                        <div className="space-y-3">
                          {extended.misinformation?.governmentCounterMeasures?.map((measure: any, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-semibold text-platinum-200">{measure.agency}</span>
                              </div>
                              <p className="text-xs text-platinum-400 mb-1">{measure.role}</p>
                              <p className="text-xs text-platinum-500">{measure.actions}</p>
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
                      <Quote className="h-5 w-5 text-purple-500" />
                      Key Government Quotes
                    </CardTitle>
                    <CardDescription>Official statements on misinformation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {extended.misinformation?.keyQuotes?.map((quote: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="rounded-lg bg-platinum-800/50 p-4 border border-purple-500/30"
                        >
                          <p className="text-sm italic text-platinum-300 mb-2">"{quote.quote}"</p>
                          <p className="text-xs text-platinum-500">{quote.source}</p>
                          <p className="text-xs text-platinum-600">{quote.date}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-rose-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Scale className="h-5 w-5 text-rose-500" />
                      Legal Framework
                    </CardTitle>
                    <CardDescription>Penalties for misinformation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      {extended.misinformation?.legalFramework?.map((law: any, idx: number) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                          <p className="font-medium text-rose-500 mb-2">{law.law}</p>
                          <p className="text-sm text-platinum-400">{law.penalty}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Deepfakes Tab */}
        <TabsContent value="deepfakes" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Deepfake Threat Landscape" description="AI-generated content threats">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Zap className="h-5 w-5 text-rose-500" />
                        Notable Incidents
                      </CardTitle>
                      <CardDescription>Documented deepfake cases</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={deepfakeIncidentsData}
                        xAxisKey="name"
                        bars={[{ dataKey: 'value', name: 'Financial Impact ($M)', color: CHART_COLORS.rose }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-orange-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-orange-500" />
                        Counter-Measures
                      </CardTitle>
                      <CardDescription>AI detection and prevention</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {extended.deepfakes?.counterMeasures?.map((measure: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50 hover:border-orange-500/30 transition-colors"
                          >
                            <p className="font-medium text-platinum-200">{measure.measure}</p>
                            <p className="text-xs text-platinum-400 mt-1">{measure.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Quote className="h-5 w-5 text-purple-500" />
                      Expert Quotes
                    </CardTitle>
                    <CardDescription>Key statements on deepfake threats</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {extended.deepfakes?.keyQuotes?.map((quote: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="rounded-lg bg-platinum-800/50 p-4 border border-purple-500/30"
                        >
                          <p className="text-sm italic text-platinum-300 mb-2">"{quote.quote}"</p>
                          <p className="text-xs text-purple-400 font-medium">{quote.speaker}</p>
                          <p className="text-xs text-platinum-500">{quote.context}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-rose-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">$35M Voice Clone Heist (2021)</CardTitle>
                    <CardDescription>Landmark deepfake financial fraud</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30 text-center">
                        <p className="text-2xl font-bold text-rose-500">$35M</p>
                        <p className="text-xs text-platinum-400">Stolen Amount</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30 text-center">
                        <p className="text-2xl font-bold text-rose-500">AI</p>
                        <p className="text-xs text-platinum-400">Method Used</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30 text-center">
                        <p className="text-2xl font-bold text-rose-500">Voice + Email</p>
                        <p className="text-xs text-platinum-400">Attack Vector</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30 text-center">
                        <p className="text-2xl font-bold text-rose-500">2021</p>
                        <p className="text-xs text-platinum-400">Year</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Disinformation Campaigns Tab */}
        <TabsContent value="disinfo" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Disinformation Campaigns" description="UAE involvement in influence operations">
              <div className="space-y-6">
                <Card className="glass-card border-rose-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Crosshair className="h-5 w-5 text-rose-500" />
                      Alp Services Contract (UAE as Actor)
                    </CardTitle>
                    <CardDescription>European disinformation campaign</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30 text-center">
                        <p className="text-2xl font-bold text-rose-500">€5.7M</p>
                        <p className="text-xs text-platinum-400">Contract Value</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30 text-center">
                        <p className="text-2xl font-bold text-rose-500">18</p>
                        <p className="text-xs text-platinum-400">European Countries</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30 text-center">
                        <p className="text-2xl font-bold text-rose-500">2017</p>
                        <p className="text-xs text-platinum-400">Contract Start</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30 text-center">
                        <p className="text-2xl font-bold text-rose-500">Swiss</p>
                        <p className="text-xs text-platinum-400">Company Origin</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-platinum-400"><span className="text-platinum-300 font-medium">Methods:</span> {extended.disinformationAsActor?.alpServicesContract?.methods}</p>
                      <p className="text-sm text-platinum-400"><span className="text-platinum-300 font-medium">Targets:</span> {extended.disinformationAsActor?.alpServicesContract?.targets}</p>
                      <p className="text-sm text-platinum-400"><span className="text-platinum-300 font-medium">Outcome:</span> {extended.disinformationAsActor?.alpServicesContract?.outcome}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-orange-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Bug className="h-5 w-5 text-orange-500" />
                      2017 Qatar Hacking Incident
                    </CardTitle>
                    <CardDescription>False quotes planted to trigger Gulf crisis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg bg-platinum-800/50 p-3 border border-orange-500/30">
                          <p className="text-xs text-platinum-400">Date of Hack</p>
                          <p className="text-lg font-bold text-orange-500">May 23-24, 2017</p>
                        </div>
                        <div className="rounded-lg bg-platinum-800/50 p-3 border border-orange-500/30">
                          <p className="text-xs text-platinum-400">Target</p>
                          <p className="text-sm font-bold text-orange-500">Qatar News Agency</p>
                        </div>
                        <div className="rounded-lg bg-platinum-800/50 p-3 border border-orange-500/30">
                          <p className="text-xs text-platinum-400">Crisis Trigger</p>
                          <p className="text-sm font-bold text-orange-500">June 5, 2017</p>
                        </div>
                      </div>
                      <p className="text-sm text-platinum-400">{extended.disinformationAsActor?.qatarHackingIncident?.method}</p>
                      <p className="text-sm text-platinum-500 italic">"{extended.disinformationAsActor?.qatarHackingIncident?.falseContent}"</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Wifi className="h-5 w-5 text-purple-500" />
                      Influence Operations Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {extended.disinformationAsActor?.influenceOperationsMethods?.map((method: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50"
                        >
                          <p className="font-medium text-purple-500">{method.method}</p>
                          <p className="text-xs text-platinum-400 mt-1">{method.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Suppression Tab */}
        <TabsContent value="suppression" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Information Suppression" description="Controls and restrictions on communication">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Ban className="h-5 w-5 text-rose-500" />
                        Blocked Platforms
                      </CardTitle>
                      <CardDescription>VoIP and messaging services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={blockedPlatformsData}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-emerald-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Wifi className="h-5 w-5 text-emerald-500" />
                        Available Platforms
                      </CardTitle>
                      <CardDescription>Services available since March 2023</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {extended.suppression?.availablePlatforms?.map((platform: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-emerald-500/30"
                          >
                            <span className="text-platinum-200">{platform.platform}</span>
                            <Badge variant="success" className="text-xs">{platform.status}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card border-rose-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <UserX className="h-5 w-5 text-rose-500" />
                      Arrest Cases (March 2026)
                    </CardTitle>
                    <CardDescription>Suppression during Iran conflict</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {extended.suppression?.arrestCases?.map((arrest: any, idx: number) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-bold text-rose-500 text-xl">{arrest.number}</p>
                          </div>
                          <p className="text-sm text-platinum-300">{arrest.category}</p>
                          <p className="text-xs text-platinum-500 mt-1">{arrest.details}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Scale className="h-5 w-5 text-purple-500" />
                      Citizenship Revocation Cases
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-3">
                        {extended.suppression?.citizenshipRevocationCases?.map((citCase: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-purple-500">{citCase.case}</span>
                              <Badge variant="outline" className="text-xs">{citCase.year}</Badge>
                            </div>
                            <p className="text-xs text-platinum-400">{citCase.details}</p>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card border-gold-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-gold-700" />
                      Platform Takedown Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {extended.suppression?.platformTakedownStats?.map((stat: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50">
                          <span className="text-platinum-200">{stat.platform}</span>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gold-700">{stat.requests}</p>
                            <p className="text-xs text-platinum-500">{stat.compliance}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Cyber Attacks Tab */}
        <TabsContent value="cyber" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Cyber Attacks on UAE" description="DDoS and other cyber threat statistics">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Activity className="h-5 w-5 text-rose-500" />
                        DDoS Attack Trend
                      </CardTitle>
                      <CardDescription>H1 vs H2 2025 comparison</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={ddosTrendData}
                        xAxisKey="period"
                        areas={[
                          { dataKey: 'attacks', name: 'Total Attacks', color: CHART_COLORS.rose },
                        ]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-orange-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="h-5 w-5 text-orange-500" />
                        Most Targeted Sectors (H2 2025)
                      </CardTitle>
                      <CardDescription>Incident distribution</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={ddosSectorData}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">DDoS Statistics Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-purple-500/30 text-center">
                        <p className="text-xs text-platinum-400 mb-1">Total Incidents H1</p>
                        <p className="text-2xl font-bold text-purple-500">3,477</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30 text-center">
                        <p className="text-xs text-platinum-400 mb-1">Total Incidents H2</p>
                        <p className="text-2xl font-bold text-rose-500">10,303</p>
                        <p className="text-xs text-rose-500">+196%</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-purple-500/30 text-center">
                        <p className="text-xs text-platinum-400 mb-1">Avg Duration H1</p>
                        <p className="text-2xl font-bold text-purple-500">27 min</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30 text-center">
                        <p className="text-xs text-platinum-400 mb-1">Avg Duration H2</p>
                        <p className="text-2xl font-bold text-rose-500">~12 hrs</p>
                        <p className="text-xs text-rose-500">+2,567%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-rose-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Bug className="h-5 w-5 text-rose-500" />
                      Notable Cyber Attacks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {extended.cyberAttacks?.notableAttacks?.map((attack: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold text-platinum-200">{attack.actor || 'Unknown'}</span>
                              <Badge variant="outline" className="text-xs">{attack.date}</Badge>
                            </div>
                            <p className="text-sm text-platinum-400 mb-1">{attack.target}</p>
                            <p className="text-xs text-platinum-500">{attack.details}</p>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card border-gold-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Expert Quote</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm italic text-platinum-300 mb-2">"{extended.cyberAttacks?.expertQuote?.text}"</p>
                    <p className="text-xs text-gold-700">— {extended.cyberAttacks?.expertQuote?.source}</p>
                  </CardContent>
                </Card>
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
            <GlassPanel title="Communication Crisis Timeline" description="Key events from 2011 to 2026">
              <div className="space-y-6">
                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Event Timeline</CardTitle>
                    <CardDescription>Major communication crisis events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[600px]">
                      <div className="relative border-l-2 border-purple-500/50 pl-6 space-y-6">
                        {extended.timelineAppendix?.map((event: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="relative cursor-pointer"
                            onClick={() => setSelectedIncident(selectedIncident === idx ? null : idx)}
                          >
                            <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-purple-500 border-2 border-platinum-900" />
                            <div className={`rounded-lg border p-4 transition-all duration-300 ${selectedIncident === idx ? 'bg-purple-500/20 border-purple-500/50' : 'bg-platinum-800/50 border-platinum-700/50 hover:border-purple-500/30'}`}>
                              <div className="flex items-center justify-between mb-1">
                                <p className="font-semibold text-platinum-200">{event.event}</p>
                                <Badge variant="outline" className="text-xs">{event.date}</Badge>
                              </div>
                              <p className="text-xs text-platinum-500">{event.category}</p>
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

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Entity Registry" description="Key officials and organizations">
              <div className="space-y-6">
                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-500" />
                      Government Officials
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      <div className="grid gap-3 md:grid-cols-2">
                        {extended.entityRegistry?.governmentAgencies?.map((official: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50"
                          >
                            <p className="font-medium text-platinum-200">{official.name}</p>
                            <p className="text-xs text-purple-400">{official.role}</p>
                            <p className="text-xs text-platinum-500">{official.organization}</p>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card border-emerald-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="h-5 w-5 text-emerald-500" />
                      Organizations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      <div className="grid gap-3 md:grid-cols-2">
                        {extended.entityRegistry?.organizations?.map((org: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50"
                          >
                            <p className="font-medium text-platinum-200">{org.name}</p>
                            <p className="text-xs text-emerald-400">{org.type}</p>
                            <p className="text-xs text-platinum-500">{org.notes}</p>
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
      </Tabs>
    </div>
  )
}
