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
  Activity,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Heart,
  RefreshCcw,
  Building,
  Siren,
  HandHeart,
  Wifi,
  WifiOff,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Server,
  Bug,
  ShieldAlert,
  Globe,
  Mail,
  Phone,
  UserCheck,
  UserX,
  Scale,
  Landmark,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCrisisOverviewData } from '@/lib/data-loader'
import { communicationCrisisExtendedData } from '@/lib/data-loader/crisis-data'

const ext = communicationCrisisExtendedData

export default function CrisisResponseRecoveryPage() {
  const { data } = useCrisisOverviewData()

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

  // DDoS Statistics Chart Data
  const ddosChartData = ext.cyberAttacks.ddosStatistics.map(d => ({
    period: d.period,
    incidents: d.incidents,
    duration: d.period === 'H1 2025' ? 27 : 720, // minutes
  }))

  // Platform Control Data
  const platformControlData = ext.informationSuppression.socialMediaControls.map(p => ({
    platform: p.platform,
    status: p.status === 'BLOCKED' ? 'Blocked' : 'Available',
    color: p.status === 'BLOCKED' ? CHART_COLORS.danger : CHART_COLORS.emerald,
  }))

  // Sentiment Distribution
  const sentimentData = ext.sentimentByCategory.map((s, i) => ({
    name: s.category.split(' ')[0],
    value: s.sentiment === 'Negative' ? 60 : s.sentiment === 'Mixed' ? 30 : 10,
    color: s.sentiment === 'Negative' ? CHART_COLORS.danger : s.sentiment === 'Mixed' ? CHART_COLORS.gold : CHART_COLORS.emerald,
  }))

  // Threat Level Assessment
  const threatLevelData = ext.threatLevelAssessment.map(t => ({
    threat: t.threatType,
    level: t.level === 'HIGH' ? 3 : t.level === 'MEDIUM-HIGH' ? 2 : 1,
    color: t.level === 'HIGH' ? CHART_COLORS.danger : t.level === 'MEDIUM-HIGH' ? CHART_COLORS.gold : CHART_COLORS.emerald,
  }))

  // Disinformation Campaign Funding
  const alpData = [
    { name: 'Alp Services Contract', value: 5.7, label: '€5.7M' },
  ]

  // Iran Strike Discrepancies Severity
  const discrepancyData = ext.iranStrikeDiscrepancies.map(d => ({
    location: d.location.split(' ')[0],
    severity: d.severity === 'Critical' ? 3 : d.severity === 'High' ? 2 : 1,
    color: d.severity === 'Critical' ? CHART_COLORS.danger : d.severity === 'High' ? CHART_COLORS.gold : CHART_COLORS.emerald,
  }))

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2">PHOENIX PROTOCOL: COMMUNICATION</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Crisis Communication & Information Warfare</h1>
          <p className="mt-2 text-slate-400">
            UAE communication crisis management, misinformation ecosystem, and information warfare capabilities
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Shield className="h-4 w-4" />
            NCRS Portal
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <RefreshCcw className="h-4 w-4" />
            Analysis Dashboard
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="DDoS Attacks (H2 2025)"
          value="10,303"
          previousValue="3,477"
          icon={<Server className="h-6 w-6" />}
          gradient="danger"
          status="critical"
        />
        <MetricCard
          title="State-Sponsored Threats"
          value="71.4%"
          previousValue="65.2%"
          icon={<ShieldAlert className="h-6 w-6" />}
          gradient="danger"
          status="critical"
        />
        <MetricCard
          title="Blocked Platforms"
          value="7"
          previousValue={5}
          icon={<WifiOff className="h-6 w-6" />}
          gradient="gold"
          status="warning"
        />
        <MetricCard
          title="Internet Freedom Score"
          value="30/100"
          previousValue="28/100"
          icon={<Globe className="h-6 w-6" />}
          gradient="danger"
          status="critical"
        />
      </motion.div>

      {/* Alert Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`rounded-xl border p-4 bg-slate-900/50 ${getAlertColor('RED')}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-red-400" />
            <div>
              <p className="font-semibold text-slate-200">Communication Crisis Alert</p>
              <p className="text-sm text-slate-400">
                Active misinformation campaigns, deepfake threats, and information suppression operations
              </p>
            </div>
          </div>
          {getAlertBadge('RED')}
        </div>
      </motion.div>

      <Tabs defaultValue="misinformation" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="misinformation">Misinformation</TabsTrigger>
          <TabsTrigger value="deepfakes">Deepfakes</TabsTrigger>
          <TabsTrigger value="cyber">Cyber Attacks</TabsTrigger>
          <TabsTrigger value="suppression">Suppression</TabsTrigger>
          <TabsTrigger value="entities">Entity Registry</TabsTrigger>
        </TabsList>

        {/* Misinformation Tab */}
        <TabsContent value="misinformation" className="space-y-6">
          <GlassPanel title="Misinformation Ecosystem" description="UAE misinformation landscape during crisis events">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 lg:grid-cols-2"
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">DDoS Attack Surge</CardTitle>
                    <CardDescription>H1 2025 vs H2 2025 - 196% increase</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={ddosChartData}
                      xAxisKey="period"
                      bars={[
                        { dataKey: 'incidents', name: 'Incidents', color: CHART_COLORS.danger },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Iran Strike Discrepancies</CardTitle>
                    <CardDescription>Official claims vs documented evidence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={ext.iranStrikeDiscrepancies.map(d => ({
                        name: d.location,
                        value: d.severity === 'Critical' ? 3 : d.severity === 'High' ? 2 : 1,
                        color: d.severity === 'Critical' ? CHART_COLORS.danger : d.severity === 'High' ? CHART_COLORS.gold : CHART_COLORS.emerald,
                      }))}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Government Quotes</CardTitle>
                  <CardDescription>Official statements on misinformation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      {ext.misinformationEcosystem.keyQuotes.map((q, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="rounded-lg bg-slate-800/50 p-4 border border-gold/20"
                        >
                          <p className="text-sm italic text-slate-300">"{q.quote}"</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-xs text-gold">{q.source}</span>
                            <span className="text-xs text-slate-500">{q.date}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Misinformation Cases (March 2026)</CardTitle>
                  <CardDescription>False claims and official responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {ext.misinformationEcosystem.misinformationCasesMarch2026.map((c, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <AlertTriangle className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm text-slate-200">{c.claim}</span>
                          </div>
                          <Badge variant="success" className="text-xs">{c.response}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Deepfakes Tab */}
        <TabsContent value="deepfakes" className="space-y-6">
          <GlassPanel title="Deepfake Threat Landscape" description="AI-generated content threats to UAE">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 lg:grid-cols-2"
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Deepfake Statistics</CardTitle>
                    <CardDescription>AI-generated content threat metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-3">
                          <Bug className="h-5 w-5 text-danger" />
                          <span className="text-sm text-slate-200">Threat Level</span>
                        </div>
                        <Badge variant="destructive">{ext.deepfakeThreats.threatLevel}</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-gold" />
                          <span className="text-sm text-slate-200">Surge Timeline</span>
                        </div>
                        <span className="text-sm text-gold">{ext.deepfakeThreats.surgeTimeline}</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-3">
                          <Scale className="h-5 w-5 text-emerald" />
                          <span className="text-sm text-slate-200">Financial Impact</span>
                        </div>
                        <span className="text-sm text-danger font-bold">$35M</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Notable Incidents</CardTitle>
                    <CardDescription>Documented deepfake cases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-3">
                        {ext.deepfakeThreats.notableIncidents.map((inc, i) => (
                          <div key={i} className="rounded-lg bg-slate-800/50 p-3">
                            <p className="text-sm font-medium text-slate-200">{inc.incident}</p>
                            <p className="text-xs text-slate-400 mt-1">{inc.target}</p>
                            <p className="text-xs text-slate-500 mt-1">{inc.details}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Counter-Measures</CardTitle>
                  <CardDescription>UAE response to deepfake threats</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-3">
                    {ext.deepfakeThreats.counterMeasures.map((cm, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="rounded-xl bg-slate-800/50 p-4 text-center border border-emerald-500/20"
                      >
                        <Shield className="h-8 w-8 text-emerald mx-auto mb-2" />
                        <p className="text-sm font-medium text-slate-200">{cm.measure}</p>
                        <p className="text-xs text-slate-400 mt-1">{cm.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Cyber Attacks Tab */}
        <TabsContent value="cyber" className="space-y-6">
          <GlassPanel title="Cyber Attack Statistics" description="DDoS and cyber threat landscape">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 lg:grid-cols-2"
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">DDoS Attack Comparison</CardTitle>
                    <CardDescription>H1 2025 vs H2 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { period: 'H1 2025', incidents: 3477, duration: 27 },
                        { period: 'H2 2025', incidents: 10303, duration: 720 },
                      ]}
                      xAxisKey="period"
                      bars={[
                        { dataKey: 'incidents', name: 'Incidents', color: CHART_COLORS.danger },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Most Targeted Sectors</CardTitle>
                    <CardDescription>H2 2025 incident distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={ext.cyberAttacks.mostTargetedSectorsH2_2025.slice(0, 4).map((s, i) => ({
                        name: s.sector.split(' ')[0],
                        value: typeof s.incidents === 'number' ? s.incidents : 500,
                        color: [CHART_COLORS.danger, CHART_COLORS.gold, CHART_COLORS.navy, CHART_COLORS.emerald][i],
                      }))}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Notable Cyber Attacks</CardTitle>
                  <CardDescription>Significant incidents targeting UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {ext.cyberAttacks.notableAttacks.map((atk, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <Server className="h-5 w-5 text-danger" />
                            <div>
                              <p className="text-sm font-medium text-slate-200">{atk.target}</p>
                              <p className="text-xs text-slate-400">{atk.actor} - {atk.date}</p>
                            </div>
                          </div>
                          <Badge variant="destructive" className="text-xs">{atk.details}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">State-Sponsored Threat Assessment</CardTitle>
                  <CardDescription>{ext.cyberAttacks.stateSponsoredThreats.percentage} of threats are state-sponsored</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={71.4} className="h-3" />
                  <p className="text-xs text-slate-400 mt-2">{ext.cyberAttacks.stateSponsoredThreats.threatTypes}</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Suppression Tab */}
        <TabsContent value="suppression" className="space-y-6">
          <GlassPanel title="Information Suppression Mechanisms" description="Platform controls and legal framework">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 lg:grid-cols-2"
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Status</CardTitle>
                    <CardDescription>Communication platform availability</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {platformControlData.map((p, i) => (
                          <div key={i} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <span className="text-sm text-slate-200">{p.platform}</span>
                            {p.status === 'Blocked' ? (
                              <WifiOff className="h-4 w-4 text-danger" />
                            ) : (
                              <Wifi className="h-4 w-4 text-emerald" />
                            )}
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Legal Penalties</CardTitle>
                    <CardDescription>Cybercrime law enforcement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {ext.legalPenalties.map((lp, i) => (
                          <div key={i} className="rounded-lg bg-slate-800/50 p-3">
                            <p className="text-sm font-medium text-slate-200">{lp.violation}</p>
                            <p className="text-xs text-danger mt-1">{lp.penalty}</p>
                            <p className="text-xs text-slate-500 mt-1">Source: {lp.source}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Takedown Statistics</CardTitle>
                  <CardDescription>Government content removal requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-3">
                    {ext.informationSuppression.platformTakedownStats.map((ps, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="rounded-xl bg-slate-800/50 p-4 text-center"
                      >
                        <p className="text-2xl font-bold text-gold">{ps.blocked || ps.requests.split(' ')[0]}</p>
                        <p className="text-sm text-slate-400 mt-1">{ps.platform}</p>
                        <p className="text-xs text-slate-500 mt-1">{ps.period}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Citizenship Revocation Cases</CardTitle>
                  <CardDescription>Documented cases of citizenship stripping</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {ext.informationSuppression.citizenshipRevocationCases.map((c, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div>
                            <p className="text-sm font-medium text-slate-200">{c.case}</p>
                            <p className="text-xs text-slate-400">{c.year}</p>
                          </div>
                          <Badge variant="destructive" className="text-xs">{c.details.split(';')[0]}</Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Entity Registry" description="Key officials and organizations">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Government Officials</CardTitle>
                  <CardDescription>Key stakeholders in communication crisis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {ext.governmentEntities.map((e, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.03 }}
                          className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <UserCheck className="h-5 w-5 text-gold" />
                            <div>
                              <p className="text-sm font-medium text-slate-200">{e.name}</p>
                              <p className="text-xs text-slate-400">{e.role}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">{e.organization}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Organizations</CardTitle>
                  <CardDescription>Entities involved in communication crisis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {ext.organizations.map((o, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Building className="h-5 w-5 text-emerald" />
                            <div>
                              <p className="text-sm font-medium text-slate-200">{o.name}</p>
                              <p className="text-xs text-slate-400">{o.type}</p>
                            </div>
                          </div>
                          <span className="text-xs text-slate-500 max-w-[200px] truncate">{o.notes}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Terms Glossary</CardTitle>
                  <CardDescription>Important terminology</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 lg:grid-cols-2">
                    {ext.keyTerms.map((kt, i) => (
                      <div key={i} className="rounded-lg bg-slate-800/50 p-3">
                        <p className="text-sm font-medium text-gold">{kt.term}</p>
                        <p className="text-xs text-slate-400 mt-1">{kt.definition}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* Comprehensive Timeline */}
      <GlassPanel title="Communication Crisis Timeline" description="Key events in UAE communication crisis">
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {ext.comprehensiveTimeline.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="relative flex gap-4 border-l-2 border-gold/30 pl-6"
              >
                <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                </div>
                <div className="flex-1 rounded-lg bg-slate-800/50 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gold font-mono">{event.date}</span>
                    <Badge variant="outline" className="text-xs">{event.category}</Badge>
                  </div>
                  <p className="text-sm text-slate-200">{event.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Source Credibility */}
      <GlassPanel title="Source Credibility Assessment" description="Information source reliability">
        <div className="grid gap-4 lg:grid-cols-5">
          {ext.sourceCredibility.map((sc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-xl bg-slate-800/50 p-4 text-center"
            >
              <p className="text-lg font-bold text-gold">{sc.count}</p>
              <p className="text-xs text-slate-400 mt-1">{sc.tier.split(' - ')[0]}</p>
              <p className="text-xs text-slate-500 mt-2 truncate">{sc.examples.split(',')[0]}</p>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}