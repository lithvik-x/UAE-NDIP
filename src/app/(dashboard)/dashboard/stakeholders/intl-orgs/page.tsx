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
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  Shield,
  TrendingUp,
  Zap,
  Building,
  Globe2,
  Users,
  Landmark,
  Handshake,
  Activity,
  Calendar,
  Target,
  Radio,
  Award,
  FileText,
  AlertOctagon,
  Crosshair,
  MapPin,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useStakeholderOverviewData,
  useIntlRelationsData,
} from '@/lib/data-loader'
import type { StakeholderIntelligence } from '@/lib/data-loader'
import {
  intlRelationsData,
  gccSoftPowerData,
  gccSummitData,
  arabLeagueIntlData,
  oicIntlData,
  bilateralRelationsData,
  crisisResponseIntlData,
  multilateralPositioningIntlData,
  threatIndicatorIntlData,
  intlRelationsSourceCredibility,
} from '@/lib/data-loader/stakeholder-data'

// Key metrics from MD 7-10
const softPowerMetrics = {
  gspiRank: 10,
  gccRank: 1,
  softPowerScore: 59.4,
  pillars: gccSoftPowerData.softPowerPillars,
}

const gccSummits = gccSummitData.filter(s => s.tier === 0)

const crisisMetrics = {
  attacksSinceFeb2026: crisisResponseIntlData.attacksSinceFeb2026,
  coordinationMeetings: crisisResponseIntlData.coordinationMeetings,
  lebanonDisplaced: crisisResponseIntlData.lebanonDisplaced,
  lebanonCasualties: crisisResponseIntlData.lebanonCasualties,
}

const multilateralMetrics = {
  bricsMember: multilateralPositioningIntlData.bricsMember,
  cepaAgreements: multilateralPositioningIntlData.cepaAgreements,
  dialoguePartnerships: multilateralPositioningIntlData.dialoguePartnerships.length,
}

const threatData = {
  arabOpinionIsrael: threatIndicatorIntlData.arabOpinionIndex?.israelThreat || 28,
  arabOpinionUS: threatIndicatorIntlData.arabOpinionIndex?.usThreat || 10,
  gulfUSThreat: threatIndicatorIntlData.gulfThreatData?.usPoliciesThreat || 77,
  gulfIsraelThreat: threatIndicatorIntlData.gulfThreatData?.israelPoliciesThreat || 84,
  redSeaFoodImports: threatIndicatorIntlData.redSeaThreat?.foodImportsDisrupted || 70,
}

const bilateralPartners = bilateralRelationsData.slice(0, 7)

export default function IntlOrgsStakeholdersPage() {
  const { data: overviewData } = useStakeholderOverviewData()
  const { data: intlData } = useIntlRelationsData()

  const overviewStakeholders = (overviewData?.stakeholders as StakeholderIntelligence[] || []).filter(s => s.type === 'international')
  const allIntlData = [intlData].filter(Boolean) as StakeholderIntelligence[]
  const intlOrgs = overviewStakeholders.length > 0 ? overviewStakeholders : (allIntlData.length > 0 ? allIntlData : [intlRelationsData])

  // Aggregate metrics
  const totalReach = intlOrgs.reduce((sum, s) => sum + (s.metrics?.digitalReach || 0), 0)
  const avgCredibility = intlOrgs.reduce((sum, s) => sum + (s.metrics?.credibility?.score || 0), 0) / Math.max(intlOrgs.length, 1)
  const avgEngagement = intlOrgs.reduce((sum, s) => sum + (s.metrics?.engagement || 0), 0) / Math.max(intlOrgs.length, 1)

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="cyan" className="mb-2">INTERNATIONAL</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-cyan-500">International Relations Body</h1>
          <p className="mt-2 text-platinum-500-400">
            GCC, Arab League, OIC, UN coordination, bilateral partnerships, and multilateral positioning
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-cyan-500/50 text-cyan-500 hover:bg-cyan-500/10">
            <Globe2 className="h-4 w-4" />
            View Directory
          </Button>
          <Button className="bg-gradient-cyan hover:opacity-90 text-navy-500-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Soft Power Rank"
          value={`#${softPowerMetrics.gspiRank}`}
          previousValue={11}
          unit="/100"
          icon={<Award className="h-6 w-6" />}
          gradient="cyan"
          status="info"
        />
        <MetricCard
          title="GCC Summits 2024-26"
          value={gccSummits.length}
          icon={<Calendar className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="Bilateral Partners"
          value={bilateralPartners.length}
          icon={<Handshake className="h-6 w-6" />}
          gradient="gold"
          status="info"
        />
        <MetricCard
          title="UAE Relevance"
          value={intlRelationsData.uaeRelevance.score}
          unit="%"
          icon={<Target className="h-6 w-6" />}
          gradient="emerald"
          status="error"
        />
      </motion.div>

      {/* Crisis Alert Banner */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/50 rounded-lg p-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertOctagon className="h-6 w-6 text-red-400" />
              <div>
                <h3 className="font-bold text-red-400">CRISIS COORDINATION ACTIVE</h3>
                <p className="text-sm text-platinum-500-300">
                  {crisisMetrics.attacksSinceFeb2026.toLocaleString()}+ missile/drone attacks tracked | {crisisMetrics.coordinationMeetings}+ coordination meetings
                </p>
              </div>
            </div>
            {getAlertBadge(intlRelationsData.alertLevel)}
          </div>
        </motion.div>
      </AnimatePresence>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gcc">GCC Relations</TabsTrigger>
          <TabsTrigger value="arableague">Arab League</TabsTrigger>
          <TabsTrigger value="oic">OIC & UN</TabsTrigger>
          <TabsTrigger value="bilateral">Bilateral</TabsTrigger>
          <TabsTrigger value="crisis">Crisis Response</TabsTrigger>
          <TabsTrigger value="multilateral">Multilateral</TabsTrigger>
          <TabsTrigger value="threats">Threat Indicators</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Soft Power Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-cyan-400" />
                    GCC Soft Power Leadership
                  </CardTitle>
                  <CardDescription>UAE ranked #1 in GCC, 10th globally</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-5xl font-extrabold text-cyan-400">{softPowerMetrics.softPowerScore}</span>
                      <span className="text-platinum-500-400">/100</span>
                    </div>
                    <Progress value={softPowerMetrics.softPowerScore} className="h-2" />
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="text-center p-2 rounded bg-cyan-500/10">
                        <div className="text-xl font-bold text-cyan-400">#{softPowerMetrics.gspiRank}</div>
                        <div className="text-xs text-platinum-500-400">Global Rank</div>
                      </div>
                      <div className="text-center p-2 rounded bg-cyan-500/10">
                        <div className="text-xl font-bold text-cyan-400">#1</div>
                        <div className="text-xs text-platinum-500-400">GCC Rank</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Six Pillars */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-400" />
                    Soft Power Pillars
                  </CardTitle>
                  <CardDescription>6 strategic pillars</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {softPowerMetrics.pillars.map((pillar, idx) => (
                      <motion.div
                        key={pillar}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * idx }}
                        className="p-2 rounded bg-emerald-500/10 text-xs text-emerald-300 text-center"
                      >
                        {pillar}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Key Summits Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gold-400" />
                  Key GCC-EU Summits 2024-2026
                </CardTitle>
                <CardDescription>Strategic Partnership for Peace and Prosperity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {gccSummits.slice(0, 5).map((summit, idx) => (
                    <motion.div
                      key={summit.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center justify-between p-3 rounded bg-gold-500/5 hover:bg-gold-500/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold-400" />
                        <div>
                          <div className="font-medium text-platinum-500-200">{summit.name}</div>
                          <div className="text-xs text-platinum-500-400">{summit.location}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">{summit.date}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* GCC Relations Tab */}
        <TabsContent value="gcc" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">GCC Soft Power</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-cyan-400">10th</div>
                  <div className="text-sm text-platinum-500-400">Global Soft Power Index</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-emerald-400">#1</div>
                  <div className="text-sm text-platinum-500-400">GCC Ranking</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-gold-400">59.4</div>
                  <div className="text-sm text-platinum-500-400">Soft Power Score</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Major Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-2">
                    {gccSoftPowerData.majorInitiatives.map((initiative, idx) => (
                      <div key={idx} className="text-sm p-2 rounded bg-cyan-500/5 hover:bg-cyan-500/10">
                        {initiative}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">First-Time Summits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['GCC-China', 'GCC-ASEAN', 'GCC-EU', 'GCC-Central Asia'].map((summit) => (
                    <div key={summit} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-sm">{summit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">GCC-EU Summits (2024-2026)</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={gccSummits.map(s => ({
                  name: s.name.length > 20 ? s.name.substring(0, 20) + '...' : s.name,
                  value: 1,
                  date: s.date,
                }))}
                xAxisKey="name"
                bars={[{ dataKey: 'value', name: 'Summit', color: CHART_COLORS.info }]}
                height={300}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Arab League Tab */}
        <TabsContent value="arableague" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Arab League</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-emerald-400">{arabLeagueIntlData.memberCount}</div>
                  <div className="text-sm text-platinum-500-400">Member States</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gold-400">{arabLeagueIntlData.mediaCooperationDate}</div>
                  <div className="text-sm text-platinum-500-400">Media Forum</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-red-400">{arabLeagueIntlData.mediaActionPlanDate}</div>
                  <div className="text-sm text-platinum-500-400">Media Action Plan</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Key Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-2">
                    {arabLeagueIntlData.keyInitiatives.map((initiative, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx }}
                        className="flex items-start gap-2 p-2 rounded bg-emerald-500/5 hover:bg-emerald-500/10"
                      >
                        <div className="w-2 h-2 mt-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span className="text-sm">{initiative}</span>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* OIC & UN Tab */}
        <TabsContent value="oic" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  OIC Coordination
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded bg-cyan-500/10">
                    <div className="text-3xl font-extrabold text-cyan-400">{oicIntlData.memberCount}</div>
                    <div className="text-xs text-platinum-500-400">Member States</div>
                  </div>
                  <div className="text-center p-3 rounded bg-cyan-500/10">
                    <div className="text-lg font-bold text-cyan-400">1969</div>
                    <div className="text-xs text-platinum-500-400">Established</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 rounded bg-platinum-800/50">
                    <span className="text-platinum-500-400">Headquarters</span>
                    <span>{oicIntlData.headquarters}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-platinum-800/50">
                    <span className="text-platinum-500-400">UN Observer</span>
                    <span>{oicIntlData.unObserverStatus}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-platinum-800/50">
                    <span className="text-platinum-500-400">Framework</span>
                    <span className="text-right text-xs">{oicIntlData.conferenceFramework}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Radio className="h-5 w-5 text-emerald-400" />
                  UN Information Integrity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded bg-emerald-500/10">
                    <div className="text-lg font-bold text-emerald-400">November 4, 2025</div>
                    <div className="text-sm text-platinum-500-300">UAE at UN Fourth Committee</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Information Integrity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>AI Governance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Multilingualism</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Journalist Protection</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Bilateral Tab */}
        <TabsContent value="bilateral" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {bilateralPartners.map((partner, idx) => (
              <motion.div
                key={partner.partner}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <Card className="glass-card h-full">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                      {partner.partner}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {partner.tradeVolume && (
                      <div className="text-sm">
                        <span className="text-platinum-500-400">Trade: </span>
                        <span className="text-emerald-400 font-medium">{partner.tradeVolume}</span>
                      </div>
                    )}
                    {partner.investment && (
                      <div className="text-sm">
                        <span className="text-platinum-500-400">Investment: </span>
                        <span className="text-gold-400 font-medium">{partner.investment}</span>
                      </div>
                    )}
                    {partner.agreements && partner.agreements.length > 0 && (
                      <div className="space-y-1">
                        <div className="text-xs text-platinum-500-400">Key Agreements:</div>
                        {partner.agreements.slice(0, 2).map((agreement, i) => (
                          <div key={i} className="text-xs p-1 rounded bg-cyan-500/5">
                            {agreement}
                          </div>
                        ))}
                      </div>
                    )}
                    {partner.keyMeetings && partner.keyMeetings.length > 0 && (
                      <div className="pt-2 border-t border-platinum-700">
                        <div className="text-xs text-platinum-500-400 mb-1">Recent Meetings:</div>
                        {partner.keyMeetings.slice(0, 2).map((meeting, i) => (
                          <div key={i} className="text-xs">
                            <span className="text-cyan-400">{meeting.date}: </span>
                            <span>{meeting.event}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Crisis Response Tab */}
        <TabsContent value="crisis" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-4">
            <Card className="glass-card">
              <CardContent className="text-center p-6">
                <div className="text-4xl font-extrabold text-red-400">
                  {crisisMetrics.attacksSinceFeb2026.toLocaleString()}+
                </div>
                <div className="text-sm text-platinum-500-400 mt-2">Attacks Since Feb 2026</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="text-center p-6">
                <div className="text-4xl font-extrabold text-gold-400">
                  {crisisMetrics.coordinationMeetings}+
                </div>
                <div className="text-sm text-platinum-500-400 mt-2">Coordination Meetings</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="text-center p-6">
                <div className="text-4xl font-extrabold text-cyan-400">
                  {(crisisMetrics.lebanonDisplaced / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-platinum-500-400 mt-2">Lebanon Displaced</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="text-center p-6">
                <div className="text-4xl font-extrabold text-red-400">
                  {crisisMetrics.lebanonCasualties.toLocaleString()}+
                </div>
                <div className="text-sm text-platinum-500-400 mt-2">Lebanon Casualties</div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertOctagon className="h-5 w-5 text-red-400" />
                Condemnations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {crisisResponseIntlData.condemnations.map((condemnation, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-2 p-3 rounded bg-red-500/10 hover:bg-red-500/15"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-sm">{condemnation}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Multilateral Tab */}
        <TabsContent value="multilateral" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">BRICS Membership</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-6">
                <div className={`text-6xl font-extrabold ${multilateralMetrics.bricsMember ? 'text-emerald-400' : 'text-platinum-500-400'}`}>
                  {multilateralMetrics.bricsMember ? 'YES' : 'NO'}
                </div>
                <div className="text-sm text-platinum-500-400 mt-2">Member since early 2024</div>
                <div className="text-xs text-platinum-500-500 mt-1">Kazan Summit October 2024</div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">CEPA Agreements</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-6">
                <div className="text-6xl font-extrabold text-gold-400">
                  {multilateralMetrics.cepaAgreements}
                </div>
                <div className="text-sm text-platinum-500-400 mt-2">Since September 2021</div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">COP28 & G20</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded bg-emerald-500/10">
                  <div className="text-lg font-bold text-emerald-400">COP28 Host 2023</div>
                  <div className="text-xs text-platinum-500-400">UAE Consensus adopted</div>
                </div>
                <div className="p-3 rounded bg-cyan-500/10">
                  <div className="text-lg font-bold text-cyan-400">G20 Guest</div>
                  <div className="text-xs text-platinum-500-400">Brazil November 2024</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Dialogue Partnerships</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {multilateralPositioningIntlData.dialoguePartnerships.map((partnership, idx) => (
                  <motion.div
                    key={partnership}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * idx }}
                    className="p-3 rounded bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mb-2" />
                    <div className="text-sm">{partnership}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Threat Indicators Tab */}
        <TabsContent value="threats" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Crosshair className="h-5 w-5 text-red-400" />
                  Arab Opinion - Greatest Threats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Israel</span>
                      <span className="text-red-400 font-bold">{threatData.arabOpinionIsrael}%</span>
                    </div>
                    <Progress value={threatData.arabOpinionIsrael} className="h-2 bg-platinum-700" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">US</span>
                      <span className="text-orange-400 font-bold">{threatData.arabOpinionUS}%</span>
                    </div>
                    <Progress value={threatData.arabOpinionUS} className="h-2 bg-platinum-700" />
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-700">
                  <div className="text-xs text-platinum-500-400 mb-2">Survey: 15 Arab countries, 40,130 respondents</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  Gulf Threat Perception
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Israeli Policies</span>
                      <span className="text-red-400 font-bold">{threatData.gulfIsraelThreat}%</span>
                    </div>
                    <Progress value={threatData.gulfIsraelThreat} className="h-2 bg-platinum-700" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">US Policies</span>
                      <span className="text-orange-400 font-bold">{threatData.gulfUSThreat}%</span>
                    </div>
                    <Progress value={threatData.gulfUSThreat} className="h-2 bg-platinum-700" />
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-700">
                  <div className="text-xs text-platinum-500-400">Source: Arab Center DC</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-red-400" />
                Red Sea Threat Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="text-center p-6 rounded bg-red-500/10">
                  <div className="text-5xl font-extrabold text-red-400">{threatData.redSeaFoodImports}%</div>
                  <div className="text-sm text-platinum-500-400 mt-2">Food Imports Disrupted</div>
                </div>
                <div className="text-center p-6 rounded bg-red-500/10">
                  <div className="text-5xl font-extrabold text-red-400">{threatIndicatorIntlData.redSeaThreat?.desalinationThreat || 90}%</div>
                  <div className="text-sm text-platinum-500-400 mt-2">Desalination Under Threat</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Source Credibility Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <FileText className="h-4 w-4 text-platinum-500-400" />
              Source Credibility Matrix ({intlRelationsSourceCredibility.length} sources)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[150px]">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {intlRelationsSourceCredibility.map((source, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded bg-platinum-800/50 hover:bg-platinum-800"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      source.tier === 0 ? 'bg-emerald-400' :
                      source.tier === 1 ? 'bg-cyan-400' :
                      source.tier === 2 ? 'bg-gold-400' : 'bg-platinum-400'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium truncate">{source.source}</div>
                      <div className="text-xs text-platinum-500-500">{source.uaeRelevance}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
