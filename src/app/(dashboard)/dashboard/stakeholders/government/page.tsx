// @ts-nocheck
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
import { motion, AnimatePresence } from 'framer-motion'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Building,
  Landmark,
  Newspaper,
  FileText,
  CheckCircle,
  BookOpen,
  Award,
  Globe2,
  Heart,
  UsersRound,
  AlertOctagon,
  Clock,
  MessageSquare,
  Target,
  BarChart3,
  Megaphone,
  Network,
} from 'lucide-react'
import {
  useStakeholderOverviewData,
  useNamaData,
  useNMCDubaiData,
  useMoiData,
  useMofaData,
  useMinistryCultureData,
  useMinistryEconomyData,
  useGcoData,
} from '@/lib/data-loader'
import type { StakeholderIntelligence } from '@/lib/data-loader'

export default function GovernmentStakeholdersPage() {
  const { data: overviewData } = useStakeholderOverviewData()
  const { data: namaData } = useNamaData()
  const { data: nmcData } = useNMCDubaiData()
  const { data: moiData } = useMoiData()
  const { data: mofaData } = useMofaData()
  const { data: cultureData } = useMinistryCultureData()
  const { data: economyData } = useMinistryEconomyData()
  const { data: gcoData } = useGcoData()

  const allGovernmentData = [namaData, nmcData, moiData, mofaData, cultureData, economyData, gcoData].filter(Boolean) as StakeholderIntelligence[]

  if (!overviewData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-navy-400">Loading Government Stakeholder data...</div>
      </div>
    )
  }

  const stakeholders = (overviewData.stakeholders as StakeholderIntelligence[]).filter(s => s.type === 'government')
  const governmentEntities = allGovernmentData.length > 0 ? allGovernmentData : stakeholders

  // Calculate aggregate metrics
  const totalReach = governmentEntities.reduce((sum, s) => sum + (s.metrics?.digitalReach || 0), 0)
  const avgCredibility = governmentEntities.reduce((sum, s) => sum + (s.metrics?.credibility?.score || 0), 0) / governmentEntities.length
  const avgEngagement = governmentEntities.reduce((sum, s) => sum + (s.metrics?.engagement || 0), 0) / governmentEntities.length

  // Sentiment distribution
  const totalPositive = governmentEntities.reduce((sum, s) => sum + (s.metrics?.sentiment?.positive || 0), 0)
  const totalNeutral = governmentEntities.reduce((sum, s) => sum + (s.metrics?.sentiment?.neutral || 0), 0)
  const totalNegative = governmentEntities.reduce((sum, s) => sum + (s.metrics?.sentiment?.negative || 0), 0)
  const sentimentData = [
    { name: 'Positive', value: totalPositive / governmentEntities.length, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: totalNeutral / governmentEntities.length, color: CHART_COLORS.platinum },
    { name: 'Negative', value: totalNegative / governmentEntities.length, color: CHART_COLORS.rose },
  ]

  // Credibility tiers
  const tier1Count = governmentEntities.filter(s => s.metrics?.credibility?.tier === 1).length
  const tier2Count = governmentEntities.filter(s => s.metrics?.credibility?.tier === 2).length
  const tier3Count = governmentEntities.filter(s => s.metrics?.credibility?.tier === 3).length

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
      1: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
      2: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      3: 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50',
      4: 'bg-slate-500/20 text-slate-400 border-slate-500/50',
    }
    return (
      <Badge variant="outline" className={`text-xs border ${colors[tier || 0]}`}>
        Tier {tier}
      </Badge>
    )
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="denim" className="mb-2">GOVERNMENT</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Government Stakeholders</h1>
          <p className="mt-2 text-slate-400">
            Federal ministries, regulatory authorities, and government entities shaping UAE policy and operations
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Landmark className="h-4 w-4" />
            View Directory
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Government Entities"
          value={governmentEntities.length}
          icon={<Landmark className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="Total Reach"
          value={totalReach > 1000000 ? `${(totalReach / 1000000).toFixed(1)}M` : totalReach.toLocaleString()}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Avg Credibility"
          value={avgCredibility.toFixed(1)}
          previousValue={avgCredibility - 1.5}
          icon={<Shield className="h-6 w-6" />}
          gradient="platinum"
        />
        <MetricCard
          title="Avg Engagement"
          value={avgEngagement.toFixed(1)}
          previousValue={avgEngagement - 0.2}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gco">GCO</TabsTrigger>
          <TabsTrigger value="nama">NAMA</TabsTrigger>
          <TabsTrigger value="moi">MOI</TabsTrigger>
          <TabsTrigger value="economy">Economy</TabsTrigger>
          <TabsTrigger value="culture">Culture</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* NAMA Tab */}
        <TabsContent value="nama" className="space-y-6">
          {namaData && (
            <GlassPanel title="National Media Authority (NMA)" description="Comprehensive NAMA regulatory framework and operations">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Authority Overview</CardTitle>
                    <CardDescription>Federal Decree-Law No. 11 of 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="text-center p-3 rounded-lg bg-navy-500/10 border border-navy-500/30">
                        <div className="text-2xl font-bold text-navy-400">Dec 2025</div>
                        <div className="text-xs text-slate-400">Established</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                        <div className="text-2xl font-bold text-gold-400">FDL 11/2025</div>
                        <div className="text-xs text-slate-400">Legal Basis</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                        <div className="text-2xl font-bold text-emerald-400">Tier 0</div>
                        <div className="text-xs text-slate-400">Credibility</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-platinum-500/10 border border-platinum-500/30">
                        <div className="text-2xl font-bold text-platinum-400">98</div>
                        <div className="text-xs text-slate-400">UAE Relevance</div>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        <span className="text-slate-400">Chairman: Abdulla bin Mohammed bin Butti Al Hamed</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        <span className="text-slate-400">Predecessors: UAE Media Council, NMO, WAM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        <span className="text-slate-400">Independence: Legal, administrative, financial</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        <span className="text-slate-400">Oversight: UAE Cabinet</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Legislation</CardTitle>
                    <CardDescription>Regulatory framework and legal basis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg bg-navy-500/10 p-3 border border-navy-500/30">
                        <p className="text-xs text-navy-400 font-medium">FDL No. 11/2025</p>
                        <p className="text-sm text-slate-300 mt-1">NMA Establishment</p>
                      </div>
                      <div className="rounded-lg bg-navy-500/10 p-3 border border-navy-500/30">
                        <p className="text-xs text-navy-400 font-medium">FDL No. 55/2023</p>
                        <p className="text-sm text-slate-300 mt-1">Primary Media Law</p>
                      </div>
                      <div className="rounded-lg bg-navy-500/10 p-3 border border-navy-500/30">
                        <p className="text-xs text-navy-400 font-medium">Cabinet No. 41/2025</p>
                        <p className="text-sm text-slate-300 mt-1">Media Fees (100+ permits)</p>
                      </div>
                      <div className="rounded-lg bg-rose-500/10 p-3 border border-rose-500/30">
                        <p className="text-xs text-rose-400 font-medium">Cabinet No. 42/2025</p>
                        <p className="text-sm text-slate-300 mt-1">Penalties (AED 5K-1M)</p>
                      </div>
                      <div className="rounded-lg bg-yellow-500/10 p-3 border border-yellow-500/30">
                        <p className="text-xs text-yellow-400 font-medium">FDL No. 34/2021</p>
                        <p className="text-sm text-slate-300 mt-1">Cybercrime Law</p>
                      </div>
                      <div className="rounded-lg bg-yellow-500/10 p-3 border border-yellow-500/30">
                        <p className="text-xs text-yellow-400 font-medium">FDL No. 34/2023</p>
                        <p className="text-sm text-slate-300 mt-1">Anti-discrimination</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Penalty Framework</CardTitle>
                    <CardDescription>Cabinet Decision No. 42 of 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-lg bg-rose-500/10 p-3 border border-rose-500/30">
                        <span className="text-sm text-slate-300">Disrespecting Divine Entity/religions</span>
                        <Badge variant="destructive" className="text-xs">AED 100K-1M</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-rose-500/10 p-3 border border-rose-500/30">
                        <span className="text-sm text-slate-300">Disrespecting UAE regime/symbols</span>
                        <Badge variant="destructive" className="text-xs">AED 50K-500K</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-yellow-500/10 p-3 border border-yellow-500/30">
                        <span className="text-sm text-slate-300">Content harmful to foreign relations</span>
                        <Badge variant="warning" className="text-xs">AED 30K-250K</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-yellow-500/10 p-3 border border-yellow-500/30">
                        <span className="text-sm text-slate-300">Publishing immoral/misleading/fake content</span>
                        <Badge variant="warning" className="text-xs">AED 10K-100K</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">20 Content Standards</CardTitle>
                    <CardDescription>Media content standards categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[180px]">
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="flex items-start gap-2 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-500/20 text-navy-400 text-xs font-bold flex-shrink-0">1</span><span className="text-slate-300">Respect divine entity, Islamic beliefs</span></div>
                        <div className="flex items-start gap-2 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-500/20 text-navy-400 text-xs font-bold flex-shrink-0">2</span><span className="text-slate-300">Respect UAE sovereignty, symbols</span></div>
                        <div className="flex items-start gap-2 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-500/20 text-navy-400 text-xs font-bold flex-shrink-0">3</span><span className="text-slate-300">Refrain from harming national unity</span></div>
                        <div className="flex items-start gap-2 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-500/20 text-navy-400 text-xs font-bold flex-shrink-0">4</span><span className="text-slate-300">Refrain from publishing rumors/false news</span></div>
                        <div className="flex items-start gap-2 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-500/20 text-navy-400 text-xs font-bold flex-shrink-0">5</span><span className="text-slate-300">Protect national unity, avoid sectarian strife</span></div>
                        <div className="flex items-start gap-2 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-500/20 text-navy-400 text-xs font-bold flex-shrink-0">6</span><span className="text-slate-300">Not incite violence, hatred, terrorism</span></div>
                        <div className="flex items-start gap-2 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-500/20 text-navy-400 text-xs font-bold flex-shrink-0">7</span><span className="text-slate-300">Not offend public morals</span></div>
                        <div className="flex items-start gap-2 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-500/20 text-navy-400 text-xs font-bold flex-shrink-0">8</span><span className="text-slate-300">Not violate privacy</span></div>
                        <div className="flex items-start gap-2 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-500/20 text-navy-400 text-xs font-bold flex-shrink-0">9</span><span className="text-slate-300">Follow Age Rating System</span></div>
                        <div className="flex items-start gap-2 text-sm"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-500/20 text-navy-400 text-xs font-bold flex-shrink-0">10</span><span className="text-slate-300">Respect children&apos;s rights</span></div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE Digital Landscape</CardTitle>
                    <CardDescription>Internet and digital platform metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <MetricCard title="Internet Users" value="9.38" unit="M" icon={<Users className="h-5 w-5" />} gradient="denim" status="info" />
                      <MetricCard title="Internet Penetration" value="99" unit="%" icon={<Globe className="h-5 w-5" />} gradient="emerald" status="info" />
                      <MetricCard title="Mobile Penetration" value="200.9" unit="%" icon={<Zap className="h-5 w-5" />} gradient="gold" status="info" />
                      <MetricCard title="5G Coverage" value="94" unit="%" icon={<TrendingUp className="h-5 w-5" />} gradient="platinum" status="info" />
                      <MetricCard title="Broadband Speed" value="220.61" unit="Mbps" icon={<Globe className="h-5 w-5" />} gradient="denim" status="info" />
                      <MetricCard title="Websites Blocked Q4 2022" value="3,766" icon={<Shield className="h-5 w-5" />} gradient="rose" status="warning" />
                      <MetricCard title="Twitter Fake Accounts" value="91" unit="%" icon={<AlertTriangle className="h-5 w-5" />} gradient="rose" status="danger" />
                      <MetricCard title="LGBT+ URLs Blocked" value="51" icon={<AlertCircle className="h-5 w-5" />} gradient="yellow" status="warning" />
                    </div>
                  </CardContent>
                </Card>
                {namaData.keyFindings && namaData.keyFindings.length > 0 && (
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Key Findings</CardTitle>
                      <CardDescription>Critical NMA metrics and insights</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {namaData.keyFindings.slice(0, 8).map((finding, idx) => (
                          <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                            <Lightbulb className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-sm font-medium text-slate-200">{finding.finding}</div>
                              <div className="text-xs text-slate-400 mt-1">{finding.metric}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </GlassPanel>
          )}
        </TabsContent>

        {/* MOI Tab */}
        <TabsContent value="moi" className="space-y-6">
          {moiData && (
            <div className="space-y-6">
              {/* MOI Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-glass-border bg-glass-surface p-6 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-500/20 text-navy-400">
                      <Shield className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-200">Ministry of Interior</h2>
                      <p className="text-slate-400">{moiData.entity?.officialName || 'Ministry of Interior - UAE'}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {getTierBadge(moiData.metrics?.credibility?.tier)}
                    {getAlertBadge(moiData.alertLevel)}
                  </div>
                </div>
                {moiData.entity?.minister && (
                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                      <span className="text-slate-400">Minister: {moiData.entity.minister}</span>
                    </div>
                    {moiData.entity.undersecretary && (
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        <span className="text-slate-400">Undersecretary: {moiData.entity.undersecretary}</span>
                      </div>
                    )}
                    {moiData.entity.directorGeneralPoliceJustice && (
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        <span className="text-slate-400">Dir. Gen. Police Justice: {moiData.entity.directorGeneralPoliceJustice}</span>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Key Metrics Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Portal Visitors"
                  value={moiData.entity?.totalPortalVisitors ? `${(moiData.entity.totalPortalVisitors / 1000000).toFixed(1)}M` : 'N/A'}
                  icon={<Globe className="h-5 w-5" />}
                  gradient="denim"
                  status="info"
                />
                <MetricCard
                  title="Emergency Response"
                  value={moiData.entity?.emergencyNumber || '999'}
                  icon={<AlertCircle className="h-5 w-5" />}
                  gradient="emerald"
                  status="info"
                />
                <MetricCard
                  title="Police Forces"
                  value={moiData.policeForces?.length || 7}
                  unit=" emirates"
                  icon={<Shield className="h-5 w-5" />}
                  gradient="gold"
                  status="info"
                />
                <MetricCard
                  title="CT Designated Groups"
                  value={moiData.counterTerrorism?.designatedGroups || 83}
                  icon={<AlertOctagon className="h-5 w-5" />}
                  gradient="rose"
                  status="warning"
                />
              </div>

              {/* State Security Section */}
              {moiData.stateSecurity && (
                <GlassPanel title="State Security" description="Documented powers and human rights concerns">
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {moiData.stateSecurity.documentedPowers?.slice(0, 6).map((power, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg bg-navy-500/10 p-3 border border-navy-500/30"
                        >
                          <p className="text-sm text-slate-300">{power}</p>
                        </motion.div>
                      ))}
                    </div>
                    {moiData.stateSecurity.documentedViolations && moiData.stateSecurity.documentedViolations.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-700">
                        <h4 className="text-sm font-medium text-rose-400 mb-3">Documented Violations</h4>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {moiData.stateSecurity.documentedViolations.slice(0, 6).map((violation, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <AlertTriangle className="h-4 w-4 text-rose-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-400">{violation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </GlassPanel>
              )}

              {/* Counter Terrorism Section */}
              {moiData.counterTerrorism && (
                <GlassPanel title="Counter Terrorism" description="Designated groups and 9/11 connections">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard
                      title="Designated Groups"
                      value={moiData.counterTerrorism.designatedGroups || 83}
                      icon={<AlertOctagon className="h-5 w-5" />}
                      gradient="rose"
                      status="danger"
                    />
                    <MetricCard
                      title="9/11 Connections"
                      value={moiData.counterTerrorism.nineElevenConnections || 'Multiple'}
                      icon={<Network className="h-5 w-5" />}
                      gradient="gold"
                      status="warning"
                    />
                    {moiData.counterTerrorism.keyFindings?.slice(0, 2).map((finding, idx) => (
                      <div key={idx} className="rounded-lg bg-slate-800/50 p-3 border border-slate-700">
                        <p className="text-sm text-slate-300">{finding.finding || finding}</p>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              )}

              {/* Dubai Police Section */}
              {moiData.dubaiPoliceStats && (
                <GlassPanel title="Dubai Police" description="Crime detection and operational metrics">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard
                      title="Crime Detection Rate"
                      value={moiData.dubaiPoliceStats.detectionRate || '99'}
                      unit="%"
                      icon={<Shield className="h-5 w-5" />}
                      gradient="emerald"
                      status="info"
                    />
                    <MetricCard
                      title="Annual Cases"
                      value={moiData.dubaiPoliceStats.annualCases?.toLocaleString() || '25,000+'}
                      icon={<FileText className="h-5 w-5" />}
                      gradient="denim"
                      status="info"
                    />
                    <MetricCard
                      title="Patrol Vehicles"
                      value={moiData.dubaiPoliceFleet?.patrolVehicles?.toLocaleString() || '5,000+'}
                      icon={<TrendingUp className="h-5 w-5" />}
                      gradient="gold"
                      status="info"
                    />
                    <MetricCard
                      title="Motorcycles"
                      value={moiData.dubaiPoliceFleet?.motorcycles?.toLocaleString() || '2,000+'}
                      icon={<TrendingUp className="h-5 w-5" />}
                      gradient="platinum"
                      status="info"
                    />
                  </div>
                </GlassPanel>
              )}

              {/* Civil Defence Section */}
              {moiData.civilDefence && (
                <GlassPanel title="Civil Defence" description="Emergency response and personnel growth">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard
                      title="Personnel Growth"
                      value={moiData.civilDefence.growthMetrics?.includes('+269%') ? '+269%' : 'Significant'}
                      icon={<Users className="h-5 w-5" />}
                      gradient="emerald"
                      status="info"
                    />
                    {moiData.civilDefence.stations && (
                      <MetricCard
                        title="Fire Stations"
                        value={moiData.civilDefence.stations}
                        icon={<Building className="h-5 w-5" />}
                        gradient="gold"
                        status="info"
                      />
                    )}
                    {moiData.civilDefence.responses && (
                      <MetricCard
                        title="Annual Responses"
                        value={moiData.civilDefence.responses.toLocaleString()}
                        icon={<AlertCircle className="h-5 w-5" />}
                        gradient="denim"
                        status="info"
                      />
                    )}
                  </div>
                </GlassPanel>
              )}

              {/* Cybercrime Law Section */}
              {moiData.cybercrimeLaw && (
                <GlassPanel title="Cybercrime Law" description="Federal Law No. 34/2021 - Offenses and penalties">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {moiData.cybercrimeLaw.offenses?.slice(0, 9).map((offense, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className="rounded-lg bg-yellow-500/10 p-3 border border-yellow-500/30"
                      >
                        <p className="text-xs text-yellow-400 font-medium">Article {offense.article || idx + 1}</p>
                        <p className="text-sm text-slate-300 mt-1">{offense.description || offense}</p>
                        {offense.penalty && <p className="text-xs text-rose-400 mt-1">{offense.penalty}</p>}
                      </motion.div>
                    ))}
                  </div>
                </GlassPanel>
              )}

              {/* Immigration Section */}
              {moiData.immigration && (
                <GlassPanel title="Immigration & ICP" description="Entry permits and passenger statistics 2025">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard
                      title="Entry Permits"
                      value={moiData.immigration.icpStats2025?.entryPermits || '12.1'}
                      unit="M"
                      icon={<Globe className="h-5 w-5" />}
                      gradient="denim"
                      status="info"
                    />
                    <MetricCard
                      title="Passengers"
                      value={moiData.immigration.icpStats2025?.passengers || '61.5'}
                      unit="M"
                      icon={<Users className="h-5 w-5" />}
                      gradient="emerald"
                      status="info"
                    />
                    {moiData.immigration.smartServices && (
                      <MetricCard
                        title="Smart Channels"
                        value={moiData.immigration.smartServices}
                        icon={<Zap className="h-5 w-5" />}
                        gradient="gold"
                        status="info"
                      />
                    )}
                  </div>
                </GlassPanel>
              )}

              {/* Emergency Numbers */}
              {moiData.emergencyNumbers && moiData.emergencyNumbers.length > 0 && (
                <GlassPanel title="Emergency Numbers" description="UAE emergency contact directory">
                  <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
                    {moiData.emergencyNumbers.slice(0, 15).map((emergency, idx) => (
                      <div key={idx} className="rounded-lg bg-slate-800/50 p-3 border border-slate-700 text-center">
                        <div className="text-lg font-bold text-navy-400">{emergency.number || emergency}</div>
                        <div className="text-xs text-slate-400 mt-1">{emergency.service || emergency.name || 'Emergency'}</div>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              )}

              {/* Human Rights Cases */}
              {moiData.humanRightsCases && moiData.humanRightsCases.length > 0 && (
                <GlassPanel title="Human Rights Cases" description="Documented cases and methodologies">
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {moiData.humanRightsCases.slice(0, 10).map((caseItem, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-slate-200">{caseItem.case || caseItem.description || caseItem}</p>
                              {caseItem.method && <p className="text-xs text-rose-400 mt-1">Method: {caseItem.method}</p>}
                              {caseItem.outcome && <p className="text-xs text-slate-400 mt-1">Outcome: {caseItem.outcome}</p>}
                            </div>
                            <AlertTriangle className="h-5 w-5 text-rose-400 flex-shrink-0" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </GlassPanel>
              )}

              {/* Key Departments */}
              {moiData.keyDepartments && moiData.keyDepartments.length > 0 && (
                <GlassPanel title="Key Departments" description="MOI organizational structure">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {moiData.keyDepartments.slice(0, 8).map((dept, idx) => (
                      <div key={idx} className="rounded-lg bg-navy-500/10 p-3 border border-navy-500/30">
                        <p className="text-sm font-medium text-slate-200">{dept.name || dept}</p>
                        {dept.description && <p className="text-xs text-slate-400 mt-1">{dept.description}</p>}
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              )}

              {/* Key Findings */}
              {moiData.keyFindings && moiData.keyFindings.length > 0 && (
                <GlassPanel title="Key Findings" description="Critical intelligence from MOI data">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {moiData.keyFindings.slice(0, 12).map((finding, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3 border border-slate-700"
                      >
                        <Lightbulb className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-slate-200">{finding.finding || finding}</p>
                          {finding.metric && <p className="text-xs text-slate-400 mt-1">{finding.metric}</p>}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlassPanel>
              )}
            </div>
          )}
        </TabsContent>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Government Stakeholders Overview" description="Key metrics for UAE government entities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Credibility Tier Distribution</CardTitle>
                  <CardDescription>Source credibility across government entities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30 text-center">
                      <div className="text-3xl font-bold text-yellow-400">{tier1Count}</div>
                      <div className="text-sm text-slate-400">Tier 1 Sources</div>
                    </div>
                    <div className="rounded-lg bg-blue-500/10 p-4 border border-blue-500/30 text-center">
                      <div className="text-3xl font-bold text-blue-400">{tier2Count}</div>
                      <div className="text-sm text-slate-400">Tier 2 Sources</div>
                    </div>
                    <div className="rounded-lg bg-platinum-500/10 p-4 border border-platinum-500/30 text-center">
                      <div className="text-3xl font-bold text-platinum-400">{tier3Count}</div>
                      <div className="text-sm text-slate-400">Tier 3 Sources</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment toward government entities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Entity Reach</CardTitle>
                    <CardDescription>Digital reach by government entity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={governmentEntities.slice(0, 6).map(s => ({
                        name: s.name.split(' ').slice(0, 2).join(' '),
                        value: s.metrics?.digitalReach || 0,
                        color: CHART_COLORS.navy,
                      }))}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Reach', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>

          {/* GCO KPI Dashboard */}
          {gcoData && (
            <GlassPanel title="GCO Government Communications KPI Dashboard" description="Key performance indicators for UAE Government Communications Office">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard
                    title="Public Trust Ranking"
                    value="Top 3"
                    unit="Globally"
                    icon={<Shield className="h-5 w-5" />}
                    gradient="emerald"
                    status="info"
                  />
                  <MetricCard
                    title="GNGC Entities"
                    value="22"
                    icon={<Network className="h-5 w-5" />}
                    gradient="denim"
                    status="info"
                  />
                  <MetricCard
                    title="GNGC Tracks"
                    value="3"
                    icon={<BarChart3 className="h-5 w-5" />}
                    gradient="gold"
                    status="info"
                  />
                  <MetricCard
                    title="GNGC Subcommittees"
                    value="4"
                    icon={<Target className="h-5 w-5" />}
                    gradient="platinum"
                    status="info"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard
                    title="Initial Response"
                    value="<15"
                    unit="minutes"
                    icon={<Clock className="h-5 w-5" />}
                    gradient="emerald"
                    status="info"
                  />
                  <MetricCard
                    title="Detailed Response"
                    value="<60"
                    unit="minutes"
                    icon={<Clock className="h-5 w-5" />}
                    gradient="denim"
                    status="info"
                  />
                  <MetricCard
                    title="Press Conference"
                    value="<90"
                    unit="minutes"
                    icon={<Clock className="h-5 w-5" />}
                    gradient="gold"
                    status="info"
                  />
                  <MetricCard
                    title="GDRFA Ambassadors"
                    value="120"
                    icon={<Users className="h-5 w-5" />}
                    gradient="platinum"
                    status="info"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard
                    title="UK Digital Savings"
                    value="£1.51"
                    unit="per citizen"
                    icon={<TrendingUp className="h-5 w-5" />}
                    gradient="emerald"
                    status="info"
                  />
                  <MetricCard
                    title="UK County Savings"
                    value="£256K"
                    icon={<BarChart3 className="h-5 w-5" />}
                    gradient="denim"
                    status="info"
                  />
                  <MetricCard
                    title="AD Media Sections"
                    value="15+"
                    icon={<FileText className="h-5 w-5" />}
                    gradient="gold"
                    status="info"
                  />
                  <MetricCard
                    title="Credibility Score"
                    value={gcoData.metrics?.credibility?.score || 89}
                    icon={<Shield className="h-5 w-5" />}
                    gradient="platinum"
                    status="info"
                  />
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Crisis Response Benchmarks</CardTitle>
                      <CardDescription>15-60-90 Timeline Framework</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                          <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-emerald-400" />
                            <span className="text-slate-200">Initial Response</span>
                          </div>
                          <span className="text-xl font-bold text-emerald-400">{'<15 min'}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-navy-500/10 border border-navy-500/30">
                          <div className="flex items-center gap-3">
                            <MessageSquare className="h-5 w-5 text-navy-400" />
                            <span className="text-slate-200">Detailed Response</span>
                          </div>
                          <span className="text-xl font-bold text-navy-400">{'<60 min'}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                          <div className="flex items-center gap-3">
                            <Megaphone className="h-5 w-5 text-gold-400" />
                            <span className="text-slate-200">Press Conference</span>
                          </div>
                          <span className="text-xl font-bold text-gold-400">{'<90 min'}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Social Media Benchmarks</CardTitle>
                      <CardDescription>Facebook vs Instagram Performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-blue-400">Facebook</span>
                            <span className="text-xs text-slate-400">1.54% engagement</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                            <span>Impressions: 1.9M</span>
                            <span>Posts/day: 0.63</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/30">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-pink-400">Instagram</span>
                            <span className="text-xs text-slate-400">2.31% engagement</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                            <span>Impressions: 1.3M</span>
                            <span>Posts/day: 1.01</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Global Trust Comparison</CardTitle>
                    <CardDescription>Edelman Trust Barometer 2026</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="text-center p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                        <div className="text-3xl font-bold text-emerald-400">UAE</div>
                        <div className="text-sm text-slate-400">Top 3 Globally</div>
                        <div className="text-xs text-emerald-400 mt-1">Government Trust</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-rose-500/10 border border-rose-500/30">
                        <div className="text-3xl font-bold text-rose-400">47%</div>
                        <div className="text-sm text-slate-400">Americans Distrust</div>
                        <div className="text-xs text-slate-400 mt-1">Federal Government</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                        <div className="text-3xl font-bold text-blue-400">33%</div>
                        <div className="text-sm text-slate-400">Americans Trust</div>
                        <div className="text-xs text-slate-400 mt-1">Federal Government</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          )}

          {/* NAMA KPI Dashboard */}
          {namaData && (
            <GlassPanel title="NMA Media Regulatory KPI Dashboard" description="Key performance indicators for UAE media regulatory framework">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard
                    title="Press Freedom Index 2025"
                    value="26.91"
                    unit="points"
                    icon={<TrendingUp className="h-5 w-5" />}
                    gradient="denim"
                    status="info"
                  />
                  <MetricCard
                    title="Press Freedom Rank"
                    value="164"
                    unit="/180"
                    icon={<Globe className="h-5 w-5" />}
                    gradient="gold"
                    status="warning"
                  />
                  <MetricCard
                    title="Internet Freedom Score"
                    value="30"
                    unit="/100"
                    icon={<Shield className="h-5 w-5" />}
                    gradient="emerald"
                    status="danger"
                  />
                  <MetricCard
                    title="Content Standards"
                    value="20"
                    icon={<FileText className="h-5 w-5" />}
                    gradient="platinum"
                    status="info"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard
                    title="Internet Users"
                    value="9.38"
                    unit="M"
                    icon={<Users className="h-5 w-5" />}
                    gradient="denim"
                    status="info"
                  />
                  <MetricCard
                    title="Internet Penetration"
                    value="99"
                    unit="%"
                    icon={<Globe className="h-5 w-5" />}
                    gradient="emerald"
                    status="info"
                  />
                  <MetricCard
                    title="Mobile Penetration"
                    value="200.9"
                    unit="%"
                    icon={<Zap className="h-5 w-5" />}
                    gradient="gold"
                    status="info"
                  />
                  <MetricCard
                    title="5G Coverage"
                    value="94"
                    unit="%"
                    icon={<TrendingUp className="h-5 w-5" />}
                    gradient="platinum"
                    status="info"
                  />
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Press Freedom Trend</CardTitle>
                      <CardDescription>RSF Index 2024 vs 2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={[
                          { year: '2024', value: 30.62, color: CHART_COLORS.gold },
                          { year: '2025', value: 26.91, color: CHART_COLORS.rose },
                        ]}
                        xAxisKey="year"
                        bars={[{ dataKey: 'value', name: 'Index Score', color: CHART_COLORS.navy }]}
                        height={200}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Blocked Content Q4 2022</CardTitle>
                      <CardDescription>TDRA enforcement metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={[
                          { type: 'Websites', count: 3766, color: CHART_COLORS.rose },
                          { type: 'LGBT+ URLs', count: 51, color: CHART_COLORS.gold },
                        ]}
                        xAxisKey="type"
                        bars={[{ dataKey: 'count', name: 'Blocked', color: CHART_COLORS.navy }]}
                        height={200}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </GlassPanel>
          )}
        </TabsContent>

        {/* GCO Tab */}
        <TabsContent value="gco" className="space-y-6">
          {gcoData && (
            <GlassPanel title="Government Communications Office" description="Strategic communications, crisis response, and public trust management">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{gcoData.name}</CardTitle>
                    {gcoData.nameAr && <p className="text-sm text-slate-400">{gcoData.nameAr}</p>}
                    <CardDescription className="line-clamp-2">{gcoData.mandate}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div className="text-center p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                        <div className="text-2xl font-bold text-emerald-400">Top 3</div>
                        <div className="text-xs text-slate-400">Global Trust Ranking</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-navy-500/10 border border-navy-500/30">
                        <div className="text-2xl font-bold text-navy-400">22</div>
                        <div className="text-xs text-slate-400">Entities Coordinated</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                        <div className="text-2xl font-bold text-gold-400">4</div>
                        <div className="text-xs text-slate-400">Subcommittees</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-platinum-500/10 border border-platinum-500/30">
                        <div className="text-2xl font-bold text-platinum-400">89</div>
                        <div className="text-xs text-slate-400">Credibility Score</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Crisis Response 15-60-90 Framework</CardTitle>
                      <CardDescription>Target benchmarks for crisis communication</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          className="flex items-center justify-between p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                              <Clock className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div>
                              <div className="font-medium text-slate-200">Initial Response</div>
                              <div className="text-xs text-slate-400">First acknowledgment of crisis</div>
                            </div>
                          </div>
                          <span className="text-2xl font-bold text-emerald-400">{'<15 min'}</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center justify-between p-4 rounded-lg bg-navy-500/10 border border-navy-500/30"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-500/20">
                              <MessageSquare className="h-5 w-5 text-navy-400" />
                            </div>
                            <div>
                              <div className="font-medium text-slate-200">Detailed Response</div>
                              <div className="text-xs text-slate-400">Comprehensive information release</div>
                            </div>
                          </div>
                          <span className="text-2xl font-bold text-navy-400">{'<60 min'}</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center justify-between p-4 rounded-lg bg-gold-500/10 border border-gold-500/30"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20">
                              <Megaphone className="h-5 w-5 text-gold-400" />
                            </div>
                            <div>
                              <div className="font-medium text-slate-200">Press Conference Ready</div>
                              <div className="text-xs text-slate-400">Media briefing capability</div>
                            </div>
                          </div>
                          <span className="text-2xl font-bold text-gold-400">{'<90 min'}</span>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Social Media Performance</CardTitle>
                      <CardDescription>Platform engagement benchmarks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <span className="text-blue-400 text-sm font-bold">f</span>
                              </div>
                              <span className="font-medium text-slate-200">Facebook</span>
                            </div>
                            <Badge variant="outline" className="text-blue-400 border-blue-400">1.54%</Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center p-2 rounded bg-slate-800/50">
                              <div className="font-bold text-slate-200">1.9M</div>
                              <div className="text-slate-400">Impressions</div>
                            </div>
                            <div className="text-center p-2 rounded bg-slate-800/50">
                              <div className="font-bold text-slate-200">0.63%</div>
                              <div className="text-slate-400">Growth</div>
                            </div>
                            <div className="text-center p-2 rounded bg-slate-800/50">
                              <div className="font-bold text-slate-200">0.63</div>
                              <div className="text-slate-400">Posts/day</div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-pink-500/10 border border-pink-500/30">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-pink-500/20 flex items-center justify-center">
                                <span className="text-pink-400 text-sm font-bold">IG</span>
                              </div>
                              <span className="font-medium text-slate-200">Instagram</span>
                            </div>
                            <Badge variant="outline" className="text-pink-400 border-pink-400">2.31%</Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center p-2 rounded bg-slate-800/50">
                              <div className="font-bold text-slate-200">1.3M</div>
                              <div className="text-slate-400">Impressions</div>
                            </div>
                            <div className="text-center p-2 rounded bg-slate-800/50">
                              <div className="font-bold text-slate-200">-1.28%</div>
                              <div className="text-slate-400">Growth</div>
                            </div>
                            <div className="text-center p-2 rounded bg-slate-800/50">
                              <div className="font-bold text-slate-200">1.01</div>
                              <div className="text-slate-400">Posts/day</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UK Digital Savings Benchmarks</CardTitle>
                    <CardDescription>Government communication ROI metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div className="text-center p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                        <div className="text-3xl font-bold text-emerald-400">£1.51</div>
                        <div className="text-sm text-slate-400">Per Citizen/Year</div>
                        <div className="text-xs text-slate-500 mt-1">~$1.86 USD</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-navy-500/10 border border-navy-500/30">
                        <div className="text-3xl font-bold text-navy-400">£256K</div>
                        <div className="text-sm text-slate-400">County Gov Savings</div>
                        <div className="text-xs text-slate-500 mt-1">~$391,700</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-gold-500/10 border border-gold-500/30">
                        <div className="text-3xl font-bold text-gold-400">£88K</div>
                        <div className="text-sm text-slate-400">Unitary Gov Savings</div>
                        <div className="text-xs text-slate-500 mt-1">~$134,280</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-platinum-500/10 border border-platinum-500/30">
                        <div className="text-3xl font-bold text-platinum-400">£27K</div>
                        <div className="text-sm text-slate-400">District Gov Savings</div>
                        <div className="text-xs text-slate-500 mt-1">~$41,074</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {gcoData.keyFindings && gcoData.keyFindings.length > 0 && (
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Key Findings</CardTitle>
                      <CardDescription>Critical GCO metrics and insights</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {gcoData.keyFindings.slice(0, 8).map((finding, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700"
                          >
                            <Lightbulb className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-sm font-medium text-slate-200">{finding.finding}</div>
                              <div className="text-xs text-slate-400 mt-1">{finding.metric}</div>
                              <div className="text-xs text-slate-500 mt-0.5">{finding.source}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </GlassPanel>
          )}
        </TabsContent>

        {/* Economy Tab */}
        <TabsContent value="economy" className="space-y-6">
          {economyData ? (
            <div className="space-y-6">
              {/* Ministry Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-glass-border bg-glass-surface p-6 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <TrendingUp className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-200">Ministry of Economy</h2>
                      <p className="text-slate-400">وزارة الاقتصاد</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {getTierBadge(economyData.metrics?.credibility?.tier)}
                    {getAlertBadge(economyData.alertLevel)}
                  </div>
                </div>
                <p className="mt-4 text-slate-300">{economyData.mandate}</p>
              </motion.div>

              {/* Key Economic Metrics */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="GDP Growth"
                  value="4"
                  unit="%"
                  icon={<TrendingUp className="h-5 w-5" />}
                  gradient="emerald"
                  status="info"
                />
                <MetricCard
                  title="GDP 2025"
                  value="AED 1.78"
                  unit="T"
                  icon={<BarChart3 className="h-5 w-5" />}
                  gradient="denim"
                  status="info"
                />
                <MetricCard
                  title="GDP Global Rank"
                  value="26th"
                  icon={<Globe className="h-5 w-5" />}
                  gradient="gold"
                  status="info"
                />
                <MetricCard
                  title="Per Capita GDP"
                  value="$131,100"
                  icon={<Users className="h-5 w-5" />}
                  gradient="platinum"
                  status="info"
                />
              </div>

              {/* GDP Dashboard */}
              <GlassPanel title="GDP Performance Dashboard" description="UAE GDP metrics and sectoral growth">
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="GDP 2024" value="AED 1.62T" icon={<BarChart3 className="h-5 w-5" />} gradient="denim" status="info" />
                    <MetricCard title="GDP 2025" value="AED 1.78T" icon={<BarChart3 className="h-5 w-5" />} gradient="emerald" status="info" />
                    <MetricCard title="Real GDP Growth" value="6.5%" icon={<TrendingUp className="h-5 w-5" />} gradient="gold" status="info" />
                    <MetricCard title="Non-Oil GDP" value="71.5%" icon={<Globe className="h-5 w-5" />} gradient="platinum" status="info" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="Per Capita 2023" value="$48,040" icon={<Users className="h-5 w-5" />} gradient="denim" status="info" />
                    <MetricCard title="Per Capita 2025" value="$131,100" icon={<Users className="h-5 w-5" />} gradient="emerald" status="info" />
                    <MetricCard title="Growth Rate" value="4%" icon={<TrendingUp className="h-5 w-5" />} gradient="gold" status="info" />
                    <MetricCard title="Global Rank" value="26th" icon={<Globe className="h-5 w-5" />} gradient="platinum" status="info" />
                  </div>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">GDP Composition 2025</CardTitle>
                        <CardDescription>Sectoral contribution to UAE GDP</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={[
                            { sector: 'Agriculture', value: 0.8, color: CHART_COLORS.emerald },
                            { sector: 'Mining', value: 8.2, color: CHART_COLORS.navy },
                            { sector: 'Manufacturing', value: 10.8, color: CHART_COLORS.gold },
                            { sector: 'Utilities', value: 2.7, color: CHART_COLORS.platinum },
                            { sector: 'Construction', value: 8.1, color: CHART_COLORS.rose },
                            { sector: 'Services', value: 52.4, color: CHART_COLORS.blue },
                          ]}
                          xAxisKey="sector"
                          bars={[{ dataKey: 'value', name: '% of GDP', color: CHART_COLORS.navy }]}
                          height={250}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Sector Growth Rates 2025</CardTitle>
                        <CardDescription>Year-over-year sector performance</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <AreaChart
                          data={[
                            { sector: 'Agriculture', growth: 3.1, color: CHART_COLORS.emerald },
                            { sector: 'Mining', growth: 3.0, color: CHART_COLORS.navy },
                            { sector: 'Manufacturing', growth: 7.5, color: CHART_COLORS.gold },
                            { sector: 'Utilities', growth: 6.2, color: CHART_COLORS.platinum },
                            { sector: 'Construction', growth: 6.8, color: CHART_COLORS.rose },
                            { sector: 'Services', growth: 4.2, color: CHART_COLORS.blue },
                          ]}
                          xAxisKey="sector"
                          bars={[{ dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.emerald }]}
                          height={250}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </GlassPanel>

              {/* FDI Dashboard */}
              <GlassPanel title="Foreign Direct Investment Dashboard" description="FDI inflows and greenfield investment metrics">
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="FDI Inflows 2023" value="$45.6B" icon={<Globe className="h-5 w-5" />} gradient="emerald" status="info" />
                    <MetricCard title="FDI Growth" value="+48.5%" icon={<TrendingUp className="h-5 w-5" />} gradient="gold" status="info" />
                    <MetricCard title="Greenfield 2024" value="$27.3B" icon={<Building className="h-5 w-5" />} gradient="denim" status="info" />
                    <MetricCard title="Greenfield Growth" value="+96.2%" icon={<TrendingUp className="h-5 w-5" />} gradient="platinum" status="info" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="World Rank" value="9th" icon={<Globe className="h-5 w-5" />} gradient="denim" status="info" />
                    <MetricCard title="Arab World Rank" value="1st" icon={<Globe className="h-5 w-5" />} gradient="emerald" status="info" />
                    <MetricCard title="FDI Stock" value="$218B" icon={<BarChart3 className="h-5 w-5" />} gradient="gold" status="info" />
                    <MetricCard title="FDI Confidence" value="2nd" unit="MENA" icon={<Shield className="h-5 w-5" />} gradient="platinum" status="info" />
                  </div>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">FDI by Sector 2024</CardTitle>
                        <CardDescription>Top sectors attracting foreign investment</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PieChart
                          data={[
                            { name: 'Real Estate', value: 25.3, color: CHART_COLORS.navy },
                            { name: 'Manufacturing', value: 18.7, color: CHART_COLORS.gold },
                            { name: 'Financial Services', value: 15.2, color: CHART_COLORS.emerald },
                            { name: 'Retail', value: 12.8, color: CHART_COLORS.platinum },
                            { name: 'ICT', value: 11.4, color: CHART_COLORS.rose },
                            { name: 'Other', value: 16.6, color: CHART_COLORS.blue },
                          ]}
                          height={280}
                          showLegend={true}
                        />
                      </CardContent>
                    </Card>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">FDI by Country 2024</CardTitle>
                        <CardDescription>Top source countries for FDI</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={[
                            { country: 'India', value: 22.1, color: CHART_COLORS.emerald },
                            { country: 'UK', value: 18.5, color: CHART_COLORS.navy },
                            { country: 'USA', value: 15.3, color: CHART_COLORS.gold },
                            { country: 'KSA', value: 12.7, color: CHART_COLORS.platinum },
                            { country: 'Switzerland', value: 9.4, color: CHART_COLORS.rose },
                          ]}
                          xAxisKey="country"
                          bars={[{ dataKey: 'value', name: 'AED B', color: CHART_COLORS.navy }]}
                          height={280}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </GlassPanel>

              {/* Business Climate */}
              <GlassPanel title="Business & Investment Climate" description="Ease of doing business and investment environment">
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="Global Entrepreneurship" value="#1" unit="Arab World" icon={<Award className="h-5 w-5" />} gradient="emerald" status="info" />
                    <MetricCard title="GEM Rank 2024" value="22nd" icon={<Globe className="h-5 w-5" />} gradient="gold" status="info" />
                    <MetricCard title="Business Confidence" value="58.6" icon={<Shield className="h-5 w-5" />} gradient="denim" status="info" />
                    <MetricCard title="Global Innovation" value="18th" icon={<Zap className="h-5 w-5" />} gradient="platinum" status="info" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="Post-Oil GDP" value="71.5%" icon={<TrendingUp className="h-5 w-5" />} gradient="emerald" status="info" />
                    <MetricCard title="Vision 2030 Target" value="80%" icon={<Target className="h-5 w-5" />} gradient="gold" status="info" />
                    <MetricCard title="Ease of Business" value="Top 20" icon={<Globe className="h-5 w-5" />} gradient="denim" status="info" />
                    <MetricCard title="Startup Ecosystem" value="$15B" icon={<Building className="h-5 w-5" />} gradient="platinum" status="info" />
                  </div>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Diversification Achievements</CardTitle>
                      <CardDescription>Post-oil economy transformation metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                          <span className="text-sm text-slate-300">Non-Oil Sector Contribution</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '71.5%' }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-full bg-emerald-500"
                              />
                            </div>
                            <span className="text-lg font-bold text-emerald-400">71.5%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-navy-500/10 border border-navy-500/30">
                          <span className="text-sm text-slate-300">Manufacturing Sector Growth</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '75%' }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="h-full bg-navy-500"
                              />
                            </div>
                            <span className="text-lg font-bold text-navy-400">7.5%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                          <span className="text-sm text-slate-300">Services Sector Value</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '52.4%' }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="h-full bg-gold-500"
                              />
                            </div>
                            <span className="text-lg font-bold text-gold-400">52.4%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-500/10 border border-platinum-500/30">
                          <span className="text-sm text-slate-300">FDI Inflow Growth</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '48.5%' }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="h-full bg-platinum-500"
                              />
                            </div>
                            <span className="text-lg font-bold text-platinum-400">+48.5%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>

              {/* Trade Dashboard */}
              <GlassPanel title="Trade & CEPA Dashboard" description="International trade and comprehensive economic partnership agreements">
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="Total Trade 2024" value="AED 5.23T" icon={<Globe className="h-5 w-5" />} gradient="emerald" status="info" />
                    <MetricCard title="Non-Oil Trade" value="AED 2.38T" icon={<TrendingUp className="h-5 w-5" />} gradient="gold" status="info" />
                    <MetricCard title="Exports" value="AED 1.34T" icon={<BarChart3 className="h-5 w-5" />} gradient="denim" status="info" />
                    <MetricCard title="Imports" value="AED 1.87T" icon={<Building className="h-5 w-5" />} gradient="platinum" status="info" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="CEPA Signed" value="27" icon={<FileText className="h-5 w-5" />} gradient="emerald" status="info" />
                    <MetricCard title="Trade Partners" value="80+" icon={<Globe className="h-5 w-5" />} gradient="gold" status="info" />
                    <MetricCard title="Coverage" value="$2.3T" icon={<BarChart3 className="h-5 w-5" />} gradient="denim" status="info" />
                    <MetricCard title="GDP Impact" value="+5.5%" icon={<TrendingUp className="h-5 w-5" />} gradient="platinum" status="info" />
                  </div>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Major CEPA Partners</CardTitle>
                      <CardDescription>Comprehensive Economic Partnership Agreements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                          <p className="text-xs text-emerald-400 font-medium">India CEPA 2022</p>
                          <p className="text-sm text-slate-300 mt-1">$60B trade target</p>
                        </div>
                        <div className="p-3 rounded-lg bg-navy-500/10 border border-navy-500/30">
                          <p className="text-xs text-navy-400 font-medium">Indonesia CEPA 2022</p>
                          <p className="text-sm text-slate-300 mt-1">$10B trade target</p>
                        </div>
                        <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                          <p className="text-xs text-gold-400 font-medium">Turkey CEPA 2023</p>
                          <p className="text-sm text-slate-300 mt-1">$40B trade target</p>
                        </div>
                        <div className="p-3 rounded-lg bg-platinum-500/10 border border-platinum-500/30">
                          <p className="text-xs text-platinum-400 font-medium">Israel CEPA 2022</p>
                          <p className="text-sm text-slate-300 mt-1">$10B trade target</p>
                        </div>
                        <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30">
                          <p className="text-xs text-rose-400 font-medium">Vietnam CEPA 2024</p>
                          <p className="text-sm text-slate-300 mt-1">$10B trade target</p>
                        </div>
                        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                          <p className="text-xs text-blue-400 font-medium">Kenya CEPA 2024</p>
                          <p className="text-sm text-slate-300 mt-1">New partnership</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>

              {/* Competitiveness Dashboard */}
              <GlassPanel title="Global Competitiveness Dashboard" description="UAE rankings in global competitiveness indices">
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="Global Competitiveness" value="#5" icon={<Globe className="h-5 w-5" />} gradient="emerald" status="info" />
                    <MetricCard title="Business Efficiency" value="#3" icon={<Shield className="h-5 w-5" />} gradient="gold" status="info" />
                    <MetricCard title="Economic Performance" value="#8" icon={<BarChart3 className="h-5 w-5" />} gradient="denim" status="info" />
                    <MetricCard title="Infrastructure" value="Top 10" icon={<Building className="h-5 w-5" />} gradient="platinum" status="info" />
                  </div>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Global Rankings Comparison</CardTitle>
                        <CardDescription>Competitiveness position vs global benchmarks</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <RadarChart
                          data={[
                            { index: 'Competitiveness', value: 5, color: CHART_COLORS.navy },
                            { index: 'Business Efficiency', value: 3, color: CHART_COLORS.emerald },
                            { index: 'Economic Performance', value: 8, color: CHART_COLORS.gold },
                            { index: 'Infrastructure', value: 10, color: CHART_COLORS.platinum },
                          ]}
                          height={280}
                        />
                      </CardContent>
                    </Card>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">GCI Pillars 2024</CardTitle>
                        <CardDescription>Performance across competitiveness pillars</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                            <span className="text-sm text-slate-300">Institutions</span>
                            <span className="text-lg font-bold text-emerald-400">Top 5</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-navy-500/10 border border-navy-500/30">
                            <span className="text-sm text-slate-300">Infrastructure</span>
                            <span className="text-lg font-bold text-navy-400">Top 10</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                            <span className="text-sm text-slate-300">ICT Adoption</span>
                            <span className="text-lg font-bold text-gold-400">Top 15</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-500/10 border border-platinum-500/30">
                            <span className="text-sm text-slate-300">Macroeconomic Stability</span>
                            <span className="text-lg font-bold text-platinum-400">Top 3</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </GlassPanel>

              {/* Consumer & Inflation Dashboard */}
              <GlassPanel title="Consumer Confidence & Inflation" description="Consumer sentiment and price stability metrics">
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="Consumer Confidence" value="62.3" icon={<Users className="h-5 w-5" />} gradient="emerald" status="info" />
                    <MetricCard title="Savings Rate" value="18%" icon={<BarChart3 className="h-5 w-5" />} gradient="gold" status="info" />
                    <MetricCard title="Inflation 2024" value="2.3%" icon={<TrendingUp className="h-5 w-5" />} gradient="denim" status="info" />
                    <MetricCard title="Inflation 2025" value="2.5%" icon={<Zap className="h-5 w-5" />} gradient="platinum" status="info" />
                  </div>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Consumer Confidence Index</CardTitle>
                        <CardDescription>Q4 2024 consumer sentiment</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <AreaChart
                          data={[
                            { quarter: 'Q1', value: 58.2, color: CHART_COLORS.navy },
                            { quarter: 'Q2', value: 60.1, color: CHART_COLORS.emerald },
                            { quarter: 'Q3', value: 61.4, color: CHART_COLORS.gold },
                            { quarter: 'Q4', value: 62.3, color: CHART_COLORS.platinum },
                          ]}
                          xAxisKey="quarter"
                          bars={[{ dataKey: 'value', name: 'Index', color: CHART_COLORS.emerald }]}
                          height={220}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Inflation Trend</CardTitle>
                        <CardDescription>Year-over-year inflation rate</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <LineChart
                          data={[
                            { year: '2022', value: 4.8, color: CHART_COLORS.rose },
                            { year: '2023', value: 3.1, color: CHART_COLORS.gold },
                            { year: '2024', value: 2.3, color: CHART_COLORS.emerald },
                            { year: '2025', value: 2.5, color: CHART_COLORS.navy },
                          ]}
                          xAxisKey="year"
                          bars={[{ dataKey: 'value', name: 'Inflation %', color: CHART_COLORS.navy }]}
                          height={220}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </GlassPanel>

              {/* Startup Ecosystem */}
              <GlassPanel title="Startup & Entrepreneurship Ecosystem" description="Startup ecosystem and venture capital metrics">
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="GEM Rank" value="#1" unit="Arab World" icon={<Award className="h-5 w-5" />} gradient="emerald" status="info" />
                    <MetricCard title="GEM Score 2024" value="59" icon={<BarChart3 className="h-5 w-5" />} gradient="gold" status="info" />
                    <MetricCard title="Startup Ecosystem" value="$15B" icon={<Building className="h-5 w-5" />} gradient="denim" status="info" />
                    <MetricCard title="TEA Rate" value="13%" icon={<TrendingUp className="h-5 w-5" />} gradient="platinum" status="info" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard title="Fintech Valuation" value="$15B" icon={<Zap className="h-5 w-5" />} gradient="emerald" status="info" />
                    <MetricCard title="E-Commerce Market" value="$13B" icon={<Globe className="h-5 w-5" />} gradient="gold" status="info" />
                    <MetricCard title="Logistics Market" value="$12B" icon={<Building className="h-5 w-5" />} gradient="denim" status="info" />
                    <MetricCard title="Crypto Adoption" value="#3" unit="Globally" icon={<Shield className="h-5 w-5" />} gradient="platinum" status="info" />
                  </div>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Key Reforms 2024</CardTitle>
                      <CardDescription>Economic and regulatory reforms</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                          <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-slate-200">Commercial Companies Law</p>
                            <p className="text-xs text-slate-400 mt-1">100% foreign ownership permitted</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-navy-500/10 border border-navy-500/30">
                          <CheckCircle className="h-5 w-5 text-navy-400 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-slate-200">Golden License</p>
                            <p className="text-xs text-slate-400 mt-1">Streamlined business setup</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                          <CheckCircle className="h-5 w-5 text-gold-400 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-slate-200">Variable Capital Companies</p>
                            <p className="text-xs text-slate-400 mt-1">DED & VCC frameworks active</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-platinum-500/10 border border-platinum-500/30">
                          <CheckCircle className="h-5 w-5 text-platinum-400 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-slate-200">Smart Transformation</p>
                            <p className="text-xs text-slate-400 mt-1">100% digital government services</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>

              {/* Key Findings */}
              {economyData.keyFindings && economyData.keyFindings.length > 0 && (
                <GlassPanel title="Key Findings" description="Critical intelligence from Ministry of Economy data">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {economyData.keyFindings.slice(0, 10).map((finding, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3 border border-slate-700"
                      >
                        <Lightbulb className={`h-5 w-5 mt-0.5 ${finding.alert === 'RED' ? 'text-rose-400' : finding.alert === 'YELLOW' ? 'text-yellow-400' : 'text-gold-400'}`} />
                        <div>
                          <p className="text-sm font-medium text-slate-200">{finding.finding}</p>
                          <p className="text-xs text-slate-400">{finding.metric}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlassPanel>
              )}

              {/* Sources */}
              {economyData.sources && economyData.sources.length > 0 && (
                <GlassPanel title="Data Sources" description="Primary sources consulted for Ministry of Economy data">
                  <ScrollArea className="h-[200px]">
                    <div className="grid gap-2 sm:grid-cols-2">
                      {economyData.sources.map((source, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <FileText className="h-4 w-4 text-navy-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-400">{source}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </GlassPanel>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-slate-400">Loading Ministry of Economy data...</div>
            </div>
          )}
        </TabsContent>

        {/* Culture Tab */}
        <TabsContent value="culture" className="space-y-6">
          {cultureData ? (
            <div className="space-y-6">
              {/* Ministry Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-glass-border bg-glass-surface p-6 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                      <Landmark className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-200">{cultureData.name}</h2>
                      <p className="text-slate-400">{cultureData.nameAr}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {getTierBadge(cultureData.metrics?.credibility?.tier)}
                    {getAlertBadge(cultureData.alertLevel)}
                  </div>
                </div>
                <p className="mt-4 text-slate-300">{cultureData.mandate}</p>
              </motion.div>

              {/* Key Metrics Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Digital Reach"
                  value={cultureData.metrics?.digitalReach ? `${(cultureData.metrics.digitalReach / 1000000).toFixed(1)}M` : 'N/A'}
                  icon={<Globe className="h-5 w-5" />}
                  gradient="gold"
                  status="info"
                />
                <MetricCard
                  title="Engagement"
                  value={cultureData.metrics?.engagement?.toFixed(1) || 'N/A'}
                  icon={<TrendingUp className="h-5 w-5" />}
                  gradient="emerald"
                  status="info"
                />
                <MetricCard
                  title="Credibility Score"
                  value={cultureData.metrics?.credibility?.score || 'N/A'}
                  icon={<Shield className="h-5 w-5" />}
                  gradient="platinum"
                  status="info"
                />
                <MetricCard
                  title="UAE Relevance"
                  value={cultureData.uaeRelevance?.score || 'N/A'}
                  unit="/100"
                  icon={<Globe2 className="h-5 w-5" />}
                  gradient="denim"
                  status="info"
                />
              </div>

              {/* Soft Power Section */}
              <GlassPanel title="Global Soft Power Index 2026" description="UAE ranks 10th globally with 59.4/100 score">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard title="Soft Power Rank" value="10th" icon={<Globe2 className="h-5 w-5" />} gradient="gold" status="info" />
                  <MetricCard title="Soft Power Score" value="59.4" unit="/100" icon={<Award className="h-5 w-5" />} gradient="denim" status="info" />
                  <MetricCard title="Generosity Rank" value="2nd" icon={<Heart className="h-5 w-5" />} gradient="emerald" status="info" />
                  <MetricCard title="Economic Growth Potential" value="3rd" icon={<TrendingUp className="h-5 w-5" />} gradient="platinum" status="info" />
                </div>
              </GlassPanel>

              {/* Heritage Section */}
              <GlassPanel title="Heritage Preservation" description="UNESCO heritage sites and intangible cultural heritage">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard title="World Heritage Sites" value="5" unit="/6 target" icon={<Landmark className="h-5 w-5" />} gradient="denim" status="info" />
                  <MetricCard title="Intangible Heritage" value="19" unit="/44 target" icon={<BookOpen className="h-5 w-5" />} gradient="gold" status="info" />
                  <MetricCard title="Al Faya Inscription" value="July 2025" icon={<Landmark className="h-5 w-5" />} gradient="emerald" status="info" />
                  <MetricCard title="Al Azi (Urgent)" value="1" unit="element" icon={<AlertTriangle className="h-5 w-5" />} gradient="platinum" status="warning" />
                </div>
              </GlassPanel>

              {/* Tourism Performance */}
              <GlassPanel title="Abu Dhabi Tourism 2025" description="Record 26.6M visitors with Dh9.1B hotel revenue">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard title="Total Visitors" value="26.6" unit="M (record)" icon={<Users className="h-5 w-5" />} gradient="emerald" status="info" />
                  <MetricCard title="Hotel Revenue" value="Dh9.1" unit="B (+19.5%)" icon={<TrendingUp className="h-5 w-5" />} gradient="gold" status="info" />
                  <MetricCard title="Hotel Occupancy" value="81" unit="%" icon={<Building className="h-5 w-5" />} gradient="platinum" status="info" />
                  <MetricCard title="MICE Delegates" value="2.2" unit="M (+40%)" icon={<UsersRound className="h-5 w-5" />} gradient="denim" status="info" />
                </div>
              </GlassPanel>

              {/* Museums & Cultural Sites */}
              <GlassPanel title="Museums & Cultural Sites" description="Major cultural institutions performance">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard title="Louvre Abu Dhabi" value="1.4" unit="M visitors" icon={<Landmark className="h-5 w-5" />} gradient="denim" status="info" />
                  <MetricCard title="Qasr Al Hosn" value="843K" unit="+22% YoY" icon={<Landmark className="h-5 w-5" />} gradient="gold" status="info" />
                  <MetricCard title="Cultural Sites" value="8.6" unit="M+" icon={<BookOpen className="h-5 w-5" />} gradient="emerald" status="info" />
                  <MetricCard title="MICE Events" value="6.6K" unit="+37% YoY" icon={<Globe2 className="h-5 w-5" />} gradient="platinum" status="info" />
                </div>
              </GlassPanel>

              {/* Youth Programs */}
              <GlassPanel title="Youth Engagement" description="National Grant Programme and Youth Council">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard title="Youth Council" value="16" unit="members" icon={<Users className="h-5 w-5" />} gradient="denim" status="info" />
                  <MetricCard title="Grant Cycle 4" value="41" unit="beneficiaries" icon={<Award className="h-5 w-5" />} gradient="gold" status="info" />
                  <MetricCard title="Applications" value="+77.6" unit="% growth" icon={<TrendingUp className="h-5 w-5" />} gradient="emerald" status="info" />
                  <MetricCard title="Grants Fields" value="11" icon={<BookOpen className="h-5 w-5" />} gradient="platinum" status="info" />
                </div>
              </GlassPanel>

              {/* Censorship Concerns */}
              <GlassPanel title="Censorship & Freedom Concerns" description="Press freedom and content regulation metrics">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard title="Freedom House" value="28" unit="/100 Not Free" icon={<Shield className="h-5 w-5" />} gradient="denim" status="danger" />
                  <MetricCard title="Press Freedom Rank" value="164" unit="/180" icon={<AlertCircle className="h-5 w-5" />} gradient="gold" status="danger" />
                  <MetricCard title="Film Bans 2025-26" value="5+" icon={<Film className="h-5 w-5" />} gradient="platinum" status="warning" />
                  <MetricCard title="Iranian Coverage" value="35" unit="arrests" icon={<AlertTriangle className="h-5 w-5" />} gradient="emerald" status="danger" />
                </div>
              </GlassPanel>

              {/* Key Findings */}
              <GlassPanel title="Key Findings" description="Critical intelligence from Ministry of Culture data">
                <div className="grid gap-3 sm:grid-cols-2">
                  {cultureData.keyFindings?.slice(0, 8).map((finding, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3 border border-slate-700"
                    >
                      <Lightbulb className={`h-5 w-5 mt-0.5 ${finding.alert === 'RED' ? 'text-rose-400' : finding.alert === 'YELLOW' ? 'text-yellow-400' : 'text-gold-400'}`} />
                      <div>
                        <p className="text-sm font-medium text-slate-200">{finding.finding}</p>
                        <p className="text-xs text-slate-400">{finding.metric}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>

              {/* Programs */}
              <GlassPanel title="Active Programs & Initiatives" description="Cultural programs and heritage initiatives">
                <div className="grid gap-3 sm:grid-cols-2">
                  {cultureData.metrics?.programs?.slice(0, 6).map((program, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-lg border border-glass-border bg-glass-surface p-4 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-200">{program.name}</h4>
                          <p className="mt-1 text-sm text-slate-400">{program.description}</p>
                          {program.budget && (
                            <p className="mt-2 text-sm text-gold-400">Budget: AED {program.budget.toLocaleString()}</p>
                          )}
                        </div>
                        <Badge variant={program.status === 'active' ? 'success' : program.status === 'completed' ? 'default' : 'warning'}>
                          {program.status}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-slate-400">Loading Ministry of Culture data...</div>
            </div>
          )}
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Government Entity Directory" description="Detailed profiles of UAE government stakeholders">
            <ScrollArea className="h-[700px]">
              <div className="space-y-4">
                {governmentEntities.map((entity) => (
                  <Card key={entity.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-500/20 text-navy-400">
                            <Landmark className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-slate-200">{entity.name}</CardTitle>
                            {entity.nameAr && <p className="text-sm text-slate-400">{entity.nameAr}</p>}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getTierBadge(entity.metrics?.credibility?.tier)}
                          {getAlertBadge(entity.alertLevel)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4">{entity.mandate}</p>
                      <div className="grid gap-4 sm:grid-cols-4">
                        <div className="text-center">
                          <div className="text-xl font-bold text-navy-400">
                            {entity.metrics?.digitalReach?.toLocaleString() || 'N/A'}
                          </div>
                          <div className="text-xs text-slate-400">Digital Reach</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-gold-400">
                            {entity.metrics?.engagement?.toFixed(1) || 'N/A'}
                          </div>
                          <div className="text-xs text-slate-400">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-platinum-400">
                            {entity.metrics?.credibility?.score || 'N/A'}
                          </div>
                          <div className="text-xs text-slate-400">Credibility</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-emerald-400">
                            {entity.uaeRelevance?.level || 'N/A'}
                          </div>
                          <div className="text-xs text-slate-400">UAE Relevance</div>
                        </div>
                      </div>
                      {entity.keyFindings && entity.keyFindings.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-700">
                          <p className="text-sm font-medium text-slate-300 mb-2">Key Findings:</p>
                          <div className="space-y-1">
                            {entity.keyFindings.slice(0, 3).map((finding, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                <Lightbulb className="h-4 w-4 text-gold-400 mt-0.5" />
                                <span className="text-slate-400">{finding.finding}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>

        {/* Programs Tab */}
        <TabsContent value="programs" className="space-y-6">
          <GlassPanel title="Government Programs & Initiatives" description="Active programs and initiatives by government entities">
            <div className="space-y-4">
              {governmentEntities.map((entity) => (
                <Card key={entity.id} className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-200">{entity.name}</CardTitle>
                    <CardDescription>{entity.mandate?.substring(0, 100)}...</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {entity.metrics?.programs && entity.metrics.programs.length > 0 ? (
                      <div className="space-y-3">
                        {entity.metrics.programs.map((program, idx) => (
                          <div key={idx} className="flex items-start justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-navy-400" />
                                <span className="font-medium text-slate-200">{program.name}</span>
                              </div>
                              <p className="mt-1 text-sm text-slate-400">{program.description}</p>
                              {program.budget && (
                                <p className="mt-1 text-sm text-gold-400">Budget: AED {program.budget.toLocaleString()}</p>
                              )}
                            </div>
                            <Badge variant={program.status === 'active' ? 'success' : program.status === 'completed' ? 'default' : 'warning'} className="text-xs">
                              {program.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-slate-400 text-sm">No program data available</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis" description="Detailed sentiment breakdown for government entities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Aggregate Sentiment</CardTitle>
                  <CardDescription>Overall sentiment distribution across government entities</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sentimentData}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Entity Sentiment Breakdown</CardTitle>
                  <CardDescription>Sentiment scores by government entity</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {governmentEntities.map((entity) => {
                        const sentiment = entity.metrics?.sentiment
                        return (
                          <div key={entity.id} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-200">{entity.name}</span>
                              <div className="flex items-center gap-4 text-xs">
                                <span className="text-emerald-400">+{sentiment?.positive || 0}%</span>
                                <span className="text-platinum-400">{sentiment?.neutral || 0}%</span>
                                <span className="text-rose-400">-{sentiment?.negative || 0}%</span>
                              </div>
                            </div>
                            <div className="flex h-2 overflow-hidden rounded-full bg-slate-700">
                              <div
                                className="bg-emerald-500"
                                style={{ width: `${sentiment?.positive || 0}%` }}
                              />
                              <div
                                className="bg-platinum-500"
                                style={{ width: `${sentiment?.neutral || 0}%` }}
                              />
                              <div
                                className="bg-rose-500"
                                style={{ width: `${sentiment?.negative || 0}%` }}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
