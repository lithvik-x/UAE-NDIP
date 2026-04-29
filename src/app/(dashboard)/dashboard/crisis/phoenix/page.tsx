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
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertTriangle,
  AlertCircle,
  Shield,
  Activity,
  Zap,
  Clock,
  TrendingUp,
  Users,
  MessageSquare,
  CheckCircle,
  XCircle,
  Globe,
  FileText,
  Scale,
  Gavel,
  Ban,
  Globe2,
  Award,
  TrendingDown,
  Eye,
  Heart,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  usePhoenixData,
  useCrisisOverviewData,
} from '@/lib/data-loader'

// Extended Reputation Crisis Data from MD file 4-5
const reputationCrisisExtendedData = {
  // EXECUTIVE SUMMARY
  overallReputationScore: 'SEVERELY DAMAGED',
  reputationTrend: 'WORSENING',

  // KEY METRICS
  metrics: {
    pressFreedomRank: { value: 164, max: 180, unit: '/180', trend: 'STABLE', source: 'RSF 2024/25' },
    freedomHouseGlobal: { value: 18, max: 100, unit: '/100', trend: 'CRITICAL', source: 'Freedom House 2025' },
    freedomHouseInternet: { value: 28, max: 100, unit: '/100', trend: 'CRITICAL', source: 'Freedom House 2025' },
    softPowerRank: { value: 10, max: 'N/A', unit: 'globally', trend: 'STABLE', source: 'Brand Finance 2025' },
  },

  // CRISIS CATEGORIES
  crisisCategories: [
    { name: 'Sudan Genocide', severity: 'CRITICAL', timeline: '2023-2026', keyIssue: 'ICJ case, gold smuggling, RSF support', color: CHART_COLORS.rose },
    { name: 'Iran War 2026', severity: 'CRITICAL', timeline: 'Mar 2026', keyIssue: 'Physical damage + social media crackdown', color: CHART_COLORS.orange },
    { name: 'Human Rights', severity: 'CRITICAL', timeline: '2011-2026', keyIssue: 'Political prisoners, torture, press freedom', color: CHART_COLORS.red },
    { name: 'Libya Airstrike', severity: 'HIGH', timeline: 'Jul 2019', keyIssue: 'Migrant center bombing, 53+ dead', color: CHART_COLORS.yellow },
    { name: 'Qatar Blockade', severity: 'HIGH', timeline: '2017-2021', keyIssue: 'Sovereignty violation, 13 demands', color: CHART_COLORS.gold },
    { name: 'Royal Family', severity: 'HIGH', timeline: '2018-2022', keyIssue: 'Princess Latifa/Haya abductions', color: CHART_COLORS.navy },
    { name: 'Sports Bans', severity: 'MODERATE', timeline: '2015-2025', keyIssue: 'FEI equestrian, FIFA misconduct', color: CHART_COLORS.emerald },
    { name: 'Financial Crime', severity: 'MODERATE', timeline: '2019-2024', keyIssue: 'FATF grey list, money laundering', color: CHART_COLORS.cyan },
    { name: 'COP28', severity: 'MODERATE', timeline: '2023', keyIssue: 'Greenwashing allegations', color: CHART_COLORS.teal },
    { name: 'Academic Boycott', severity: 'MODERATE', timeline: '2024-2026', keyIssue: 'TAGATU3, $402M to US universities', color: CHART_COLORS.indigo },
  ],

  // IRAN WAR 2026 STATISTICS
  iranWarStats: {
    ballisticMissiles24h: 165,
    cruiseMissiles24h: 2,
    drones24h: 541,
    interceptionRate: '>90%',
    influencersInDubai: 50000,
    detentionsIranConflict: 375,
    arrestedForContent: 20,
  },

  // SUDAN CRISIS FINANCIAL DATA
  sudanCrisis: {
    goldExportsToUAE: 1500000000,
    goldSmuggledPercent: 50,
    sudaneseDisplaced: 12000000,
    elFasherSiege: '18 months',
    uaegiftsToUSUniversities: 402330743,
    uaeCulturalInvestment: 35000000000,
  },

  // PRESS FREEDOM INDEX BREAKDOWN
  pressFreedomIndex: {
    overall: { score: 26.91, rank: 164, max: 180 },
    political: { score: 17.23, rank: 166, max: 180 },
    economic: { score: 35.05, rank: 126, max: 180 },
    legislative: { score: 21.20, rank: 168, max: 180 },
    social: { score: 21.76, rank: 171, max: 180 },
  },

  // FREEDOM HOUSE SCORES
  freedomHouseScores: {
    globalFreedom: { score: 18, max: 100, rating: 'Not Free' },
    politicalRights: { score: 5, max: 40 },
    civilLiberties: { score: 13, max: 60 },
    internetFreedom: { score: 28, max: 100, rating: 'Not Free' },
    obstaclesToAccess: { score: 14, max: 25 },
    limitsOnContent: { score: 9, max: 35 },
    violationsOfUserRights: { score: 5, max: 40 },
  },

  // POLITICAL PRISONERS
  politicalPrisoners: {
    uae94Defendants: 84,
    convictionsUpheldMar2025: 53,
    lifeSentencesEnd2025: 67,
    heldBeyondSentence: 51,
    newCounterterrorismCharges: 87,
  },

  // TORTURE METHODS DOCUMENTED
  tortureMethods: [
    'Severe beatings', 'Electrocution', 'Threats of electrocution', 'Cutting', 'Burning',
    'Denial of medical care', 'Forced solitary confinement', 'Continuous bright lighting',
    'Forced disappearance', 'Incommunicado detention', 'Stress positions', 'Waterboarding (suspected)',
    'Sexual violence', 'Mock executions', 'Sensory deprivation', 'Isolation'
  ],

  // SPORTS BANS
  sportsBans: [
    { year: 2015, type: 'Endurance ban', reason: 'Horse welfare issues', body: 'FEI' },
    { year: 2020, type: 'All disciplines', reason: 'Circumventing rules via fake national events', body: 'FEI' },
    { year: 2025, type: '16-match suspension', reason: 'Physical assault on referee', body: 'FIFA' },
  ],

  // KEY QUOTES
  keyQuotes: [
    { source: 'Times of Israel', quote: '"That peaceful image was shattered"', sentiment: 'NEGATIVE' },
    { source: 'The Guardian', quote: '"The shine has been taken off"', sentiment: 'NEGATIVE' },
    { source: 'Haaretz', quote: '"Dubai\'s carefully curated image is now colliding with reality"', sentiment: 'NEGATIVE' },
    { source: 'Radha Stirling', quote: '"Really Orwellian – when you\'ve got survivors of drone strikes being taken into custody"', sentiment: 'NEGATIVE' },
    { source: 'HRW - Joey Shea', quote: '"UAE used COP28 to improve its image internationally to conceal the government\'s deeply repressive policies"', sentiment: 'NEGATIVE' },
  ],

  // SENTIMENT ANALYSIS
  sentimentByCategory: [
    { category: 'Iran War 2026', sentiment: 'VERY NEGATIVE', tone: 'Fear, alarm' },
    { category: 'Sudan Genocide', sentiment: 'VERY NEGATIVE', tone: 'Horror, condemnation' },
    { category: 'Human Rights', sentiment: 'VERY NEGATIVE', tone: 'Systemic criticism' },
    { category: 'Libya Airstrike', sentiment: 'VERY NEGATIVE', tone: 'War crime allegations' },
    { category: 'Qatar Blockade', sentiment: 'NEGATIVE', tone: 'Sovereignty violation' },
    { category: 'Royal Family', sentiment: 'VERY NEGATIVE', tone: 'Abduction, abuse' },
    { category: 'Sports Bans', sentiment: 'MODERATELY NEGATIVE', tone: 'Embarrassment' },
    { category: 'Financial Crime', sentiment: 'NEGATIVE', tone: 'Regulatory concerns' },
    { category: 'COP28', sentiment: 'NEGATIVE', tone: 'Greenwashing' },
    { category: 'Academic Boycott', sentiment: 'NEGATIVE', tone: 'Accountability movement' },
  ],

  // REPUTATIONAL THREAT VECTORS (ranked)
  threatVectors: [
    { rank: 1, vector: 'Sudan Genocide Complicity', severity: 'CRITICAL', evidence: 'UN Fact-Finding Mission, ICJ case, gold smuggling' },
    { rank: 2, vector: 'Iran War 2026', severity: 'CRITICAL', evidence: 'Physical damage, social media arrests, 375+ detained' },
    { rank: 3, vector: 'Human Rights Repression', severity: 'CRITICAL', evidence: 'UAE94 (67+ life sentences), torture, forced disappearances' },
    { rank: 4, vector: 'Royal Family Abductions', severity: 'HIGH', evidence: 'Princess Latifa, Princess Haya, UK court findings' },
    { rank: 5, vector: 'Libya Migrant Center', severity: 'HIGH', evidence: '53+ killed, UAE suspected, war crime allegations' },
    { rank: 6, vector: 'Financial Crime', severity: 'HIGH', evidence: 'FATF grey list despite illicit arms/gold evidence' },
    { rank: 7, vector: 'Press Freedom', severity: 'HIGH', evidence: '164/180 RSF ranking, 18/100 Freedom House' },
    { rank: 8, vector: 'Qatar Blockade', severity: 'MODERATE', evidence: '4-year embargo, sovereignty violation' },
    { rank: 9, vector: 'Sports Bans', severity: 'MODERATE', evidence: 'FEI (twice), FIFA official assault' },
    { rank: 10, vector: 'COP28 Greenwashing', severity: 'MODERATE', evidence: 'Oil executive president, political prisoners' },
  ],
}

export default function PhoenixProjectPage() {
  const { data } = usePhoenixData()

  // Metrics from extended data
  const activeCrises = 10
  const resolvedCrises = 0
  const avgResponseTime = 0
  const successRate = 0

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'text-rose-400'
      case 'HIGH': return 'text-orange-400'
      case 'MODERATE': return 'text-yellow-400'
      default: return 'text-slate-400'
    }
  }

  const getSeverityBg = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'bg-rose-500/20'
      case 'HIGH': return 'bg-orange-500/20'
      case 'MODERATE': return 'bg-yellow-500/20'
      default: return 'bg-slate-500/20'
    }
  }

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
          <Badge variant="rose" className="mb-2">C-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-rose">Phoenix Project</h1>
          <p className="mt-2 text-slate-400">
            Crisis management protocol and rapid response operations
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-rose/50 text-rose hover:bg-rose/10">
            <Activity className="h-4 w-4" />
            Status
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Activate Protocol
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics - Reputation Crisis Specific */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Reputation Score"
          value={reputationCrisisExtendedData.overallReputationScore}
          icon={<Globe className="h-6 w-6" />}
          gradient="rose"
          status="danger"
        />
        <MetricCard
          title="Press Freedom Rank"
          value={`${reputationCrisisExtendedData.metrics.pressFreedomRank.value}${reputationCrisisExtendedData.metrics.pressFreedomRank.unit}`}
          icon={<FileText className="h-6 w-6" />}
          gradient="denim"
          status="danger"
        />
        <MetricCard
          title="Freedom House"
          value={`${reputationCrisisExtendedData.metrics.freedomHouseGlobal.value}${reputationCrisisExtendedData.metrics.freedomHouseGlobal.unit}`}
          icon={<Shield className="h-6 w-6" />}
          gradient="gold"
          status="danger"
        />
        <MetricCard
          title="Active Crisis Vectors"
          value={activeCrises.toString()}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="orange"
          status="danger"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="iran2026">Iran War 2026</TabsTrigger>
          <TabsTrigger value="sudan">Sudan Crisis</TabsTrigger>
          <TabsTrigger value="humanrights">Human Rights</TabsTrigger>
          <TabsTrigger value="freedoms">Freedom Scores</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Reputation Crisis Overview" description="SEVERELY DAMAGED - Multiple critical reputation vectors identified">
            <div className="space-y-6">
              {/* Crisis Categories Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {reputationCrisisExtendedData.crisisCategories.map((crisis, index) => (
                  <motion.div
                    key={crisis.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`glass-card p-4 rounded-lg border ${getSeverityBg(crisis.severity)} ${getSeverityColor(crisis.severity)}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-xs font-medium uppercase">{crisis.severity}</span>
                    </div>
                    <h4 className="font-semibold text-slate-200 text-sm">{crisis.name}</h4>
                    <p className="text-xs text-slate-400 mt-1">{crisis.timeline}</p>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">{crisis.keyIssue}</p>
                  </motion.div>
                ))}
              </div>

              {/* Threat Vectors Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Reputational Threat Vectors</CardTitle>
                  <CardDescription>Ranked by severity and evidence strength</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={reputationCrisisExtendedData.threatVectors.map(v => ({
                      vector: v.vector,
                      rank: v.rank,
                      severity: v.severity === 'CRITICAL' ? 3 : v.severity === 'HIGH' ? 2 : 1,
                    }))}
                    xAxisKey="vector"
                    bars={[{ dataKey: 'rank', name: 'Rank', color: CHART_COLORS.rose }]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Key Statistics */}
              <div className="grid gap-6 lg:grid-cols-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-6 rounded-lg text-center"
                >
                  <Globe className="h-8 w-8 mx-auto mb-2 text-rose-400" />
                  <div className="text-3xl font-bold text-rose-400">{reputationCrisisExtendedData.metrics.pressFreedomRank.value}</div>
                  <p className="text-sm text-slate-400 mt-1">RSF Press Freedom Rank</p>
                  <p className="text-xs text-slate-500">164/180 - 3rd worst in Middle East</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-card p-6 rounded-lg text-center"
                >
                  <Shield className="h-8 w-8 mx-auto mb-2 text-rose-400" />
                  <div className="text-3xl font-bold text-rose-400">{reputationCrisisExtendedData.metrics.freedomHouseGlobal.value}</div>
                  <p className="text-sm text-slate-400 mt-1">Freedom House Score</p>
                  <p className="text-xs text-slate-500">18/100 - Not Free</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card p-6 rounded-lg text-center"
                >
                  <Users className="h-8 w-8 mx-auto mb-2 text-orange-400" />
                  <div className="text-3xl font-bold text-orange-400">{reputationCrisisExtendedData.politicalPrisoners.uae94Defendants}+</div>
                  <p className="text-sm text-slate-400 mt-1">UAE94 Defendants</p>
                  <p className="text-xs text-slate-500">67+ life sentences</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass-card p-6 rounded-lg text-center"
                >
                  <Activity className="h-8 w-8 mx-auto mb-2 text-orange-400" />
                  <div className="text-3xl font-bold text-orange-400">{reputationCrisisExtendedData.iranWarStats.detentionsIranConflict}+</div>
                  <p className="text-sm text-slate-400 mt-1">Iran War Detentions</p>
                  <p className="text-xs text-slate-500">Social media content arrests</p>
                </motion.div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Iran War 2026 Tab */}
        <TabsContent value="iran2026" className="space-y-6">
          <GlassPanel title="Iran War 2026 - Information Crackdown" description="Social media arrests and narrative control during conflict">
            <div className="space-y-6">
              {/* Attack Statistics */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Ballistic Missiles (24h)"
                  value={reputationCrisisExtendedData.iranWarStats.ballisticMissiles24h.toString()}
                  icon={<Zap className="h-5 w-5" />}
                  gradient="rose"
                  status="danger"
                />
                <MetricCard
                  title="Drones (24h)"
                  value={reputationCrisisExtendedData.iranWarStats.drones24h.toString()}
                  icon={<AlertTriangle className="h-5 w-5" />}
                  gradient="orange"
                  status="danger"
                />
                <MetricCard
                  title="Interception Rate"
                  value={reputationCrisisExtendedData.iranWarStats.interceptionRate}
                  icon={<Shield className="h-5 w-5" />}
                  gradient="emerald"
                  status="success"
                />
                <MetricCard
                  title="Detentions"
                  value={reputationCrisisExtendedData.iranWarStats.detentionsIranConflict.toString()}
                  icon={<Users className="h-5 w-5" />}
                  gradient="denim"
                  status="warning"
                />
              </div>

              {/* Content Creator Crackdown */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Creator Crackdown</CardTitle>
                  <CardDescription>Narrative control measures during Iran conflict</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="glass-card p-4 rounded-lg">
                        <div className="text-2xl font-bold text-rose-400">{reputationCrisisExtendedData.iranWarStats.influencersInDubai.toLocaleString()}</div>
                        <p className="text-sm text-slate-400">Influencers in Dubai</p>
                      </div>
                      <div className="glass-card p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-400">{reputationCrisisExtendedData.iranWarStats.arrestedForContent}</div>
                        <p className="text-sm text-slate-400">Arrested for Content</p>
                      </div>
                      <div className="glass-card p-4 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-400">375+</div>
                        <p className="text-sm text-slate-400">Total Detainees</p>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <p className="text-sm text-slate-300 italic">
                        "Really Orwellian – when you've got survivors of drone strikes being taken into custody"
                      </p>
                      <p className="text-xs text-slate-500 mt-2">— Radha Stirling, Detained in Dubai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Quotes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Media Reactions</CardTitle>
                  <CardDescription>International coverage of reputation damage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {reputationCrisisExtendedData.keyQuotes.slice(0, 4).map((q, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-3 bg-slate-800/50 rounded-lg border border-slate-700"
                      >
                        <p className="text-sm text-slate-200">{q.quote}</p>
                        <p className="text-xs text-slate-500 mt-1">— {q.source}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sudan Crisis Tab */}
        <TabsContent value="sudan" className="space-y-6">
          <GlassPanel title="Sudan Genocide Complicity" description="UN Fact-Finding Mission findings and gold smuggling evidence">
            <div className="space-y-6">
              {/* Gold Smuggling Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Gold to UAE (2024)"
                  value={`$${(reputationCrisisExtendedData.sudanCrisis.goldExportsToUAE / 1000000000).toFixed(1)}B`}
                  icon={<Globe className="h-5 w-5" />}
                  gradient="gold"
                  status="warning"
                />
                <MetricCard
                  title="Gold Smuggled"
                  value={`${reputationCrisisExtendedData.sudanCrisis.goldSmuggledPercent}%`}
                  icon={<TrendingDown className="h-5 w-5" />}
                  gradient="rose"
                  status="danger"
                />
                <MetricCard
                  title="Displaced"
                  value={`${(reputationCrisisExtendedData.sudanCrisis.sudaneseDisplaced / 1000000).toFixed(0)}M`}
                  icon={<Users className="h-5 w-5" />}
                  gradient="orange"
                  status="danger"
                />
                <MetricCard
                  title="El Fasher Siege"
                  value={reputationCrisisExtendedData.sudanCrisis.elFasherSiege}
                  icon={<Clock className="h-5 w-5" />}
                  gradient="denim"
                  status="warning"
                />
              </div>

              {/* Financial Flow Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sudan Crisis Timeline</CardTitle>
                  <CardDescription>Key events in Sudan-UAE crisis</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={[
                      { year: '2008', investment: 7, gold: 0 },
                      { year: '2023', investment: 0, gold: 500 },
                      { year: '2024', investment: 0, gold: 1500 },
                      { year: 'Mar 2025', investment: 0, gold: 0 },
                      { year: 'Oct 2025', investment: 0, gold: 0 },
                      { year: 'Feb 2026', investment: 0, gold: 0 },
                    ]}
                    xAxisKey="year"
                    lines={[
                      { dataKey: 'investment', name: 'UAE Investment ($B)', color: CHART_COLORS.gold },
                      { dataKey: 'gold', name: 'Gold Exports to UAE ($M)', color: CHART_COLORS.orange },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Academic/Financial Influence */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Academic & Cultural Investment</CardTitle>
                  <CardDescription>TAGATU3 boycott campaign targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="glass-card p-4 rounded-lg">
                      <div className="text-3xl font-bold text-gold">${(reputationCrisisExtendedData.sudanCrisis.uaegiftsToUSUniversities / 1000000).toFixed(0)}M</div>
                      <p className="text-sm text-slate-400">UAE Gifts to US Universities</p>
                      <p className="text-xs text-slate-500">Feb 2001 - Apr 2024</p>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-400">${(reputationCrisisExtendedData.sudanCrisis.uaeCulturalInvestment / 1000000000).toFixed(0)}B+</div>
                      <p className="text-sm text-slate-400">Cultural Investment</p>
                      <p className="text-xs text-slate-500">Since 2017</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Human Rights Tab */}
        <TabsContent value="humanrights" className="space-y-6">
          <GlassPanel title="Human Rights Violations" description="UAE94 mass trial, torture methods, and political prisoners">
            <div className="space-y-6">
              {/* Political Prisoners Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="UAE94 Defendants"
                  value={reputationCrisisExtendedData.politicalPrisoners.uae94Defendants.toString()}
                  icon={<Users className="h-5 w-5" />}
                  gradient="rose"
                  status="danger"
                />
                <MetricCard
                  title="Life Sentences"
                  value={reputationCrisisExtendedData.politicalPrisoners.lifeSentencesEnd2025.toString()}
                  icon={<Gavel className="h-5 w-5" />}
                  gradient="rose"
                  status="danger"
                />
                <MetricCard
                  title="Beyond Sentence"
                  value={reputationCrisisExtendedData.politicalPrisoners.heldBeyondSentence.toString()}
                  icon={<Clock className="h-5 w-5" />}
                  gradient="orange"
                  status="warning"
                />
                <MetricCard
                  title="New Charges"
                  value={reputationCrisisExtendedData.politicalPrisoners.newCounterterrorismCharges.toString()}
                  icon={<AlertTriangle className="h-5 w-5" />}
                  gradient="denim"
                  status="warning"
                />
              </div>

              {/* Torture Methods */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">16 Documented Torture Methods</CardTitle>
                  <CardDescription>HRW/Wikipedia documented methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {reputationCrisisExtendedData.tortureMethods.map((method, i) => (
                      <motion.div
                        key={method}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.03 }}
                        whileHover={{ scale: 1.05 }}
                        className="glass-card p-3 rounded-lg text-center"
                      >
                        <p className="text-xs text-slate-300">{method}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sports Bans */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sports & Competition Bans</CardTitle>
                  <CardDescription>FEI and FIFA sanctions against UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {reputationCrisisExtendedData.sportsBans.map((ban, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-between p-3 glass-card rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Ban className="h-5 w-5 text-rose-400" />
                          <div>
                            <p className="font-medium text-slate-200">{ban.body} - {ban.year}</p>
                            <p className="text-sm text-slate-400">{ban.type}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">{ban.reason}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Freedom Scores Tab */}
        <TabsContent value="freedoms" className="space-y-6">
          <GlassPanel title="Freedom Scores" description="Press Freedom Index and Freedom House ratings">
            <div className="space-y-6">
              {/* RSF Press Freedom Index */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">RSF Press Freedom Index 2024/25</CardTitle>
                  <CardDescription>Overall: 26.91 score, 164/180 rank</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(reputationCrisisExtendedData.pressFreedomIndex).map(([key, data]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="font-medium text-rose-400">{data.score} ({data.rank}/180)</span>
                        </div>
                        <Progress value={(data.score / 50) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Freedom House Scores */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Freedom House Scores 2025</CardTitle>
                  <CardDescription>Global Freedom: 18/100 (Not Free) | Internet: 28/100 (Not Free)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(reputationCrisisExtendedData.freedomHouseScores).map(([key, data]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className={`font-medium ${data.rating ? 'text-rose-400' : 'text-yellow-400'}`}>
                            {data.score}/{data.max} {data.rating ? `(${data.rating})` : ''}
                          </span>
                        </div>
                        <Progress value={(data.score / data.max) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Comparison Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE vs Regional Rankings</CardTitle>
                  <CardDescription>Soft Power and Development Indices</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { country: 'UAE', softPower: 10, humanDev: 30 },
                      { country: 'Saudi', softPower: 20, humanDev: 35 },
                      { country: 'Qatar', softPower: 22, humanDev: 28 },
                      { country: 'Kuwait', softPower: 40, humanDev: 45 },
                      { country: 'Oman', softPower: 49, humanDev: 50 },
                    ]}
                    xAxisKey="country"
                    bars={[
                      { dataKey: 'softPower', name: 'Soft Power Rank', color: CHART_COLORS.navy },
                      { dataKey: 'humanDev', name: 'Human Dev Rank', color: CHART_COLORS.gold },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis" description="Category-by-category sentiment breakdown">
            <div className="space-y-6">
              {/* Sentiment Distribution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment by Crisis Category</CardTitle>
                  <CardDescription>Dominant tone and key sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {reputationCrisisExtendedData.sentimentByCategory.map((item, i) => (
                      <motion.div
                        key={item.category}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center justify-between p-3 glass-card rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Heart className={`h-5 w-5 ${
                            item.sentiment === 'VERY NEGATIVE' ? 'text-rose-400' :
                            item.sentiment === 'NEGATIVE' ? 'text-orange-400' :
                            'text-yellow-400'
                          }`} />
                          <span className="font-medium text-slate-200">{item.category}</span>
                        </div>
                        <div className="text-right">
                          <Badge variant={
                            item.sentiment === 'VERY NEGATIVE' ? 'destructive' :
                            item.sentiment === 'NEGATIVE' ? 'warning' :
                            'outline'
                          } className="text-xs">
                            {item.sentiment}
                          </Badge>
                          <p className="text-xs text-slate-500 mt-1">{item.tone}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pie Chart of Sentiments */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                  <CardDescription>Overview of crisis sentiment categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={reputationCrisisExtendedData.sentimentByCategory.map((item, i) => ({
                      category: item.category,
                      count: item.sentiment === 'VERY NEGATIVE' ? 6 : item.sentiment === 'NEGATIVE' ? 3 : 1,
                      color: item.sentiment === 'VERY NEGATIVE' ? CHART_COLORS.rose :
                             item.sentiment === 'NEGATIVE' ? CHART_COLORS.orange :
                             CHART_COLORS.yellow,
                    }))}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              {/* Key Quotes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Quotes</CardTitle>
                  <CardDescription>Significant statements on UAE reputation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {reputationCrisisExtendedData.keyQuotes.map((q, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 bg-slate-800/50 rounded-lg border border-slate-700"
                      >
                        <p className="text-slate-200 italic">"{q.quote.replace(/"/g, '')}"</p>
                        <p className="text-sm text-rose-400 mt-2">— {q.source}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}