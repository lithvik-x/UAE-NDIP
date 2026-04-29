'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  AlertCircle,
  AlertTriangle,
  Globe,
  Hash,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Video,
  Heart,
  MessageSquare,
  Share2,
  Clock,
  Flag,
  CheckCircle,
  XCircle,
  Eye,
  Lock,
  TrendingDown,
  DollarSign,
  Scale,
  AlertOctagon,
  Brain,
  Bot,
  EyeOff,
  Ban,
  FileWarning,
  Warning,
  Info,
  ExternalLink,
  UserX,
  Scissors,
  Landmark,
  ShieldAlert,
  Virus,
} from 'lucide-react'
import {
  useTiktokIntelligenceData,
} from '@/lib/data-loader'

// Enhancement A: Key Statistics Cards
const TikTokStats = {
  influencers: { value: '122,014', label: 'UAE Influencers', trend: 'up', icon: Users, color: CHART_COLORS.rose },
  contentRemoved: { value: '1M+', label: 'Videos Removed', trend: 'stable', icon: XCircle, color: CHART_COLORS.orange },
  peopleCharged: { value: '21', label: 'Charged (Mar 2026)', trend: 'up', icon: AlertOctagon, color: CHART_COLORS.rose },
  scamLosses: { value: '$442B', label: 'Global Scam Losses', trend: 'up', icon: DollarSign, color: CHART_COLORS.rose },
  workersDetained: { value: '375+', label: 'Workers Detained', trend: 'stable', icon: UserX, color: CHART_COLORS.rose },
  aiFakeViews: { value: '12M+', label: 'AI Fake Video Views', trend: 'up', icon: Bot, color: CHART_COLORS.gold },
}

// Enhancement B: Sentiment Distribution
const sentimentData = [
  { name: 'Positive', value: 42, color: CHART_COLORS.emerald },
  { name: 'Neutral', value: 28, color: CHART_COLORS.platinum },
  { name: 'Negative', value: 30, color: CHART_COLORS.rose },
]

// Enhancement C: Critical Risk Topics
const criticalRisks = [
  {
    id: 'iran',
    title: 'Iran Conflict Response',
    riskLevel: 'CRITICAL',
    description: '21 people charged for filming missile strikes. 1,800+ drones/missiles, 6 deaths, 141 injuries. Coordinated influencer content with near-identical videos.',
    metric: '21 charged',
    icon: AlertOctagon,
    color: CHART_COLORS.rose,
  },
  {
    id: 'labor',
    title: 'Labor Conditions',
    riskLevel: 'CRITICAL',
    description: '$400/month wages, 16 roommates in small rooms, "No Work, No Pay" policy, AED 1M fines for overcrowded housing.',
    metric: '375+ detained',
    icon: Scale,
    color: CHART_COLORS.rose,
  },
  {
    id: 'racism',
    title: 'Racism & Discrimination',
    riskLevel: 'CRITICAL',
    description: '375+ African workers detained June 2021. Al-Wathba prison: 220 detainees, 4 toilets. Pregnant woman lost child.',
    metric: '375+ workers',
    icon: AlertTriangle,
    color: CHART_COLORS.rose,
  },
  {
    id: 'scams',
    title: 'Scam Documentation',
    riskLevel: 'CRITICAL',
    description: 'Fake Dubai Prince romance fraud ($442B global losses). Rental car extortion. Crypto scams by influencers.',
    metric: '$442B lost',
    icon: AlertCircle,
    color: CHART_COLORS.rose,
  },
  {
    id: 'freespeech',
    title: 'Free Speech Suppression',
    riskLevel: 'CRITICAL',
    description: 'Tierra Allen arrested for "shouting". Hamdan Al Rind arrested for satire (2.6M followers).',
    metric: '2 arrests',
    icon: Lock,
    color: CHART_COLORS.rose,
  },
  {
    id: 'ai',
    title: 'AI Deepfake Threat',
    riskLevel: 'HIGH',
    description: 'AI-generated Burj Khalifa collapse (12M+ views). 1B+ views of AI war content on X.',
    metric: '12M+ views',
    icon: Bot,
    color: CHART_COLORS.gold,
  },
]

// Enhancement D: Hashtag Performance
const hashtagData = [
  { hashtag: '#UAE', posts: '19M', sentiment: 'positive', trend: 85 },
  { hashtag: '#dubailife', posts: '2.6M', sentiment: 'positive', trend: 78 },
  { hashtag: '#realityofdubai', posts: 'Active', sentiment: 'negative', trend: 25 },
  { hashtag: '#leavingdubai', posts: 'Active', sentiment: 'negative', trend: 30 },
  { hashtag: '#uaeracism', posts: 'Active', sentiment: 'negative', trend: 20 },
  { hashtag: '#uaelabors', posts: 'Active', sentiment: 'negative', trend: 22 },
]

// Enhancement E: Media Law Fines
const mediaLawFines = [
  { violation: 'Religious offences/inciting violence', fine: 'Up to Dh1 million' },
  { violation: 'Murder, rape, drug abuse content', fine: 'Up to Dh150,000' },
  { violation: 'Undermining social cohesion', fine: 'Up to Dh250,000' },
  { violation: 'National symbol disrespect', fine: 'Dh50,000 - Dh500,000' },
  { violation: 'Domestic/foreign policy offense', fine: 'Dh50,000 - Dh500,000' },
  { violation: 'False information (first)', fine: 'Dh5,000' },
  { violation: 'False information (repeat)', fine: 'Dh10,000' },
  { violation: 'Operating without licence (first)', fine: 'Dh10,000' },
  { violation: 'Operating without licence (repeat)', fine: 'Dh40,000' },
]

// Enhancement F: Key Persons
const keyPersons = [
  { name: 'Hamdan Al Rind', handle: '@hamdan_alrind', followers: '2.6M', status: 'Arrested July 2023', charge: 'Satire' },
  { name: 'Tierra Allen', handle: '@sassy_trucker', followers: 'N/A', status: 'Released Aug 2023', charge: '"Shouting"' },
  { name: 'Sheikh Hamdan (Fazza)', handle: '@fazza', followers: 'Impersonated', status: 'Scam target', charge: 'Romance fraud' },
  { name: '@3lowlow', handle: '@3lowlow', followers: '35.2k', status: 'Top UAE TikToker', charge: '6.92% engagement' },
]

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function TikTokLandscapePage() {
  const { data } = useTiktokIntelligenceData()
  const [activeTab, setActiveTab] = useState('overview')

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading TikTok data...</div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts } = data

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30">
            <Video className="h-3 w-3 mr-1" />
            PLATFORM ANALYSIS
          </Badge>
          <h1 className="text-4xl font-bold gradient-text-platinum">TikTok UAE Intelligence</h1>
          <p className="mt-2 text-slate-400">
            Comprehensive TikTok landscape analysis: 122,014 UAE influencers, 24 queries executed, 18 pages fetched
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <ExternalLink className="h-4 w-4" />
            View Content
          </Button>
          <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Analyze Trends
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        {Object.entries(TikTokStats).map(([key, stat]) => (
          <motion.div key={key} variants={fadeInUp}>
            <MetricCard
              title={stat.label}
              value={stat.value}
              icon={<stat.icon className="h-5 w-5" style={{ color: stat.color }} />}
              gradient="denim"
              className="hover:scale-105 transition-transform duration-200"
            />
          </motion.div>
        ))}
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="critical">Critical Risks</TabsTrigger>
          <TabsTrigger value="influencers">Influencers</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment Analysis */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-card border-rose-500/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5 text-rose-400" />
                    Sentiment Analysis
                  </CardTitle>
                  <CardDescription>Overall: {metrics.sentiment.overall}</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sentimentData}
                    height={220}
                    showLegend={true}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Concerns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card border-rose-500/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    Key Concerns
                  </CardTitle>
                  <CardDescription>Critical topics requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[220px]">
                    <div className="space-y-3">
                      {metrics.sentiment.keyConcerns.map((concern, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3 hover:bg-slate-800/70 transition-colors"
                        >
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span className="text-sm text-slate-200">{concern}</span>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Trending Hashtags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-card border-gold-500/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Hash className="h-5 w-5 text-gold" />
                  Trending Hashtags
                </CardTitle>
                <CardDescription>Most used hashtags in UAE TikTok content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {metrics.engagement.trendingHashtags.map((tag, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-gold-500/20 to-yellow-500/20 border border-gold-500/30 text-gold"
                    >
                      <Hash className="h-3 w-3 inline mr-1" />
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bot Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card border-rose-500/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bot className="h-5 w-5 text-rose-400" />
                  Bot Activity Analysis
                </CardTitle>
                <CardDescription>{metrics.botActivity.estimatedBotPercent}% estimated bots</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Coordinated Activity</span>
                    <Badge variant={metrics.botActivity.coordinatedInauthentic ? 'destructive' : 'success'}>
                      {metrics.botActivity.coordinatedInauthentic ? 'Detected' : 'None'}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Confidence Level</span>
                    <span className="text-lg font-bold text-gold">{Math.round(metrics.botActivity.confidence * 100)}%</span>
                  </div>
                  <Progress value={metrics.botActivity.estimatedBotPercent} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Critical Risks Tab */}
        <TabsContent value="critical" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {criticalRisks.map((risk, idx) => (
              <motion.div
                key={risk.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-card border-rose-500/30 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-rose-500 to-pink-500" />
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{risk.title}</CardTitle>
                      <Badge variant="destructive" className="text-xs">
                        {risk.riskLevel}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-2">
                      <risk.icon className="h-4 w-4" style={{ color: risk.color }} />
                      {risk.metric}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-300">{risk.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Influencers Tab */}
        <TabsContent value="influencers" className="space-y-6">
          <Card className="glass-card border-gold-500/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-gold" />
                Key Persons & Cases
              </CardTitle>
              <CardDescription>Notable influencers and legal cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {keyPersons.map((person, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-rose-400" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-200">{person.name}</p>
                        <p className="text-sm text-slate-400">{person.handle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={person.status.includes('Arrested') ? 'destructive' : 'default'} className="mb-1">
                        {person.status}
                      </Badge>
                      <p className="text-xs text-slate-400">{person.charge}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Compliance Tab */}
        <TabsContent value="compliance" className="space-y-6">
          <Card className="glass-card border-rose-500/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-rose-400" />
                UAE Media Law Fines
              </CardTitle>
              <CardDescription>Federal Decree-Law No. 55 of 2023 - Penalty Schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mediaLawFines.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3"
                  >
                    <span className="text-sm text-slate-300">{item.violation}</span>
                    <Badge variant="outline" className="text-rose-400 border-rose-500/30">
                      {item.fine}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-gold-500/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Landmark className="h-5 w-5 text-gold" />
                Influencer Licensing (Effective Feb 1, 2026)
              </CardTitle>
              <CardDescription>Mandatory licensing requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gold-500/10 p-4 border border-gold-500/30">
                  <h4 className="font-semibold text-gold mb-2">UAE Citizens</h4>
                  <p className="text-sm text-slate-300">First 3 years: FREE</p>
                  <p className="text-sm text-slate-300">After 3 years: AED 500/year</p>
                </div>
                <div className="rounded-lg bg-gold-500/10 p-4 border border-gold-500/30">
                  <h4 className="font-semibold text-gold mb-2">Residents</h4>
                  <p className="text-sm text-slate-300">First 3 years: FREE</p>
                  <p className="text-sm text-slate-300">After 3 years: AED 1,000/year</p>
                </div>
                <div className="rounded-lg bg-gold-500/10 p-4 border border-gold-500/30">
                  <h4 className="font-semibold text-gold mb-2">Visitors</h4>
                  <p className="text-sm text-slate-300">AED 2,000 for 3 months</p>
                  <p className="text-sm text-slate-300">Max 6 months</p>
                </div>
                <div className="rounded-lg bg-gold-500/10 p-4 border border-gold-500/30">
                  <h4 className="font-semibold text-gold mb-2">Trade License</h4>
                  <p className="text-sm text-slate-300">Media license cost</p>
                  <p className="text-sm text-slate-300">AED 15,000-20,000</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <Card className="glass-card border-platinum-500/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-platinum" />
                Source References
              </CardTitle>
              <CardDescription>16 enriched sources from the intelligence report</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {data.sources && data.sources.map((source, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 hover:bg-slate-800/70 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-slate-200">{source.name}</p>
                        <p className="text-xs text-slate-400 truncate">{source.url}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          TIER {source.tier}
                        </Badge>
                        <Badge variant="outline" className="text-xs text-slate-400">
                          {source.date}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
