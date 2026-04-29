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
  AlertCircle,
  AlertTriangle,
  Globe,
  Hash,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Lock,
  MessageSquare,
  Radio,
  Key,
  Eye,
  Server,
  ShieldCheck,
  AlertOctagon,
  ExternalLink,
  Clock,
  Ban,
  CheckCircle2,
  XCircle,
  Info,
} from 'lucide-react'
import {
  useTelegramIntelligenceData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// A. Premium Glassmorphism Card Component
function PremiumGlassCard({ children, className = '', delay = 0, ...props }: { children: React.ReactNode; className?: string; delay?: number; [key: string]: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`glass-card bg-glass-surface border-glass-border rounded-xl p-6 backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// B. Animated Chart Container
function AnimatedChartContainer({ children, title, delay = 0 }: { children: React.ReactNode; title?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-glass-surface border-glass-border rounded-xl p-6 backdrop-blur-xl"
    >
      {title && <h3 className="text-lg font-semibold text-platinum-300 mb-4 font-rajdhani">{title}</h3>}
      {children}
    </motion.div>
  )
}

// C. Status Badge Component
function StatusBadge({ status, alert }: { status?: string; alert?: 'RED' | 'YELLOW' | 'GREEN' }) {
  const colors = {
    RED: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    YELLOW: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    GREEN: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  }
  const icons = {
    RED: <XCircle className="h-4 w-4" />,
    YELLOW: <AlertTriangle className="h-4 w-4" />,
    GREEN: <CheckCircle2 className="h-4 w-4" />,
  }
  if (!alert) return null
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${colors[alert]}`}>
      {icons[alert]} {status || alert}
    </span>
  )
}

// D. Key Finding Card
function KeyFindingCard({ finding, metric, source, tier, alert, delay = 0 }: { finding: string; metric: string; source: string; tier: number; alert?: 'RED' | 'YELLOW' | 'GREEN'; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.08 }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      className="bg-glass-surface border-glass-border rounded-lg p-4 backdrop-blur-xl cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="text-slate-200 text-sm leading-relaxed">{finding}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-mono text-platinum-400 bg-platinum/10 px-2 py-0.5 rounded">{metric}</span>
            <StatusBadge alert={alert} />
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-2">Source: {source}</p>
    </motion.div>
  )
}

// E. Government Account Card
function GovernmentAccountCard({ account, delay = 0 }: { account: { platform: string; handle: string; url?: string; followers?: number; verified?: boolean }; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay * 0.05 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="flex items-center justify-between bg-glass-surface border-glass-border rounded-lg p-4 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-platinum-500/20 to-denim-500/20 border border-platinum-500/30">
          <Key className="h-5 w-5 text-platinum-400" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200 font-rajdhani">{account.handle}</span>
            {account.verified && <ShieldCheck className="h-4 w-4 text-emerald-400" />}
          </div>
          <p className="text-xs text-slate-500">{account.url || 'Official channel'}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold text-platinum-400">
          {account.followers ? account.followers.toLocaleString() : 'N/A'}
        </div>
        <p className="text-xs text-slate-500">followers</p>
      </div>
    </motion.div>
  )
}

// F. Narrative Card with sentiment
function NarrativeCard({ narrative, delay = 0 }: { narrative: { topic: string; narrative: string; source: string; prevalence: number; sentiment: string }; delay?: number }) {
  const sentimentColors: Record<string, string> = {
    positive: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    negative: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    neutral: 'bg-platinum-500/20 text-platinum-400 border-platinum-500/30',
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-glass-surface border-glass-border rounded-xl p-6 backdrop-blur-xl"
    >
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-lg font-semibold text-slate-200 font-rajdhani">{narrative.topic}</h4>
        <Badge className={`${sentimentColors[narrative.sentiment] || sentimentColors.neutral} border`}>
          {narrative.sentiment}
        </Badge>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-4">{narrative.narrative}</p>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500">Prevalence</span>
          <span className="text-platinum-400 font-medium">{narrative.prevalence}%</span>
        </div>
        <Progress value={narrative.prevalence} className="h-1.5" />
      </div>
      <p className="text-xs text-slate-500 mt-3">Source: {narrative.source}</p>
    </motion.div>
  )
}

export default function TelegramPage() {
  const { data } = useTelegramIntelligenceData()
  const [activeTab, setActiveTab] = useState('overview')

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-platinum-400 font-rajdhani"
        >
          Loading Telegram intelligence data...
        </motion.div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts, keyFindings, sources, darkSocialScore, censorship } = data
  const { users, penetration, sentiment, engagement, botActivity } = metrics

  // Sentiment data for pie chart
  const sentimentData = sentiment?.breakdown ? [
    { name: 'Positive', value: sentiment.breakdown.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: sentiment.breakdown.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 32, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 40, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 28, color: CHART_COLORS.rose },
  ]

  // Bot activity data
  const botData = [
    { name: 'Bot Activity', value: botActivity?.estimatedBotPercent || 8, color: CHART_COLORS.rose },
    { name: 'Authentic', value: 100 - (botActivity?.estimatedBotPercent || 8), color: CHART_COLORS.emerald },
  ]

  // Encryption comparison data
  const encryptionData = [
    { type: 'Cloud Chats', encryption: 'MTProto 2.0', accessible: 'YES', color: CHART_COLORS.rose },
    { type: 'Secret Chats', encryption: 'E2E (Diffie-Hellman)', accessible: 'NO', color: CHART_COLORS.emerald },
    { type: 'Voice Notes', encryption: 'Server-side', accessible: 'YES', color: CHART_COLORS.rose },
    { type: 'Media', encryption: 'Server-side', accessible: 'YES', color: CHART_COLORS.rose },
  ]

  // VPN Penalty data for visualization
  const vpnPenaltyData = [
    { penalty: 'Minimum Fine', amount: 'AED 500,000', severity: 25 },
    { penalty: 'Maximum Fine', amount: 'AED 2,000,000', severity: 100 },
  ]

  // Durov timeline data
  const durovTimeline = [
    { year: '2017', event: 'Moves to UAE, establishes HQ in Dubai', icon: <Globe className="h-4 w-4" /> },
    { year: '2021', event: 'Acquires UAE citizenship', icon: <Shield className="h-4 w-4" /> },
    { year: 'Aug 2024', event: 'Arrested in Paris', icon: <AlertOctagon className="h-4 w-4" /> },
    { year: 'Mar 2025', event: 'Returns to Dubai', icon: <CheckCircle2 className="h-4 w-4" /> },
  ]

  // Global Telegram stats
  const globalStats = [
    { label: 'Monthly Active Users', value: '1 Billion', icon: <Users className="h-5 w-5" /> },
    { label: 'Daily Active Users', value: '500 Million', icon: <TrendingUp className="h-5 w-5" /> },
    { label: 'Premium Subscribers', value: '5 Million', icon: <Zap className="h-5 w-5" /> },
    { label: 'Countries with Bans', value: '31', icon: <Ban className="h-5 w-5" /> },
  ]

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
          <Badge variant="default" className="mb-3 bg-gradient-to-r from-platinum-600 to-denim-600 text-navy-950 border-0">
            <Shield className="h-3 w-3 mr-1" /> SOCIAL MEDIA
          </Badge>
          <h1 className="text-4xl font-extrabold gradient-text-platinum tracking-tight">
            Telegram & Encrypted Messaging
          </h1>
          <p className="mt-3 text-slate-400 text-lg max-w-2xl">
            End-to-end encrypted messaging analysis for UAE — VoIP restrictions, privacy concerns, government surveillance, and dark social patterns
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-glass-border text-platinum hover:bg-glass-surface bg-transparent">
            <Lock className="h-4 w-4" />
            Security Analysis
          </Button>
          <Button className="bg-gradient-to-r from-platinum-600 to-denim-600 hover:opacity-90 text-navy-950 gap-2 shadow-lg shadow-platinum-500/20">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="UAE Users"
          value={users?.toLocaleString() || '33,624'}
          previousValue={(users || 33624) + 1200}
          icon={<Users className="h-6 w-6" />}
          gradient="platinum"
          status="info"
        />
        <MetricCard
          title="Market Penetration"
          value={`${penetration || 0.35}%`}
          previousValue={(penetration || 0.35) + 0.05}
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment?.score || 48}
          previousValue={(sentiment?.score || 48) - 2}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Dark Social Score"
          value={darkSocialScore || 95}
          previousValue={(darkSocialScore || 95) - 3}
          icon={<Eye className="h-6 w-6" />}
          gradient="gold"
        />
      </div>

      {/* Global Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {globalStats.map((stat, idx) => (
          <div key={idx} className="bg-glass-surface border-glass-border rounded-xl p-4 backdrop-blur-xl text-center">
            <div className="flex justify-center mb-2 text-platinum-400">{stat.icon}</div>
            <div className="text-2xl font-bold text-platinum-300">{stat.value}</div>
            <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="glass-panel bg-glass-surface border-glass-border" scrollable>
          <TabsTrigger value="overview" className="data-[state=active]:bg-platinum/20">Overview</TabsTrigger>
          <TabsTrigger value="narratives" className="data-[state=active]:bg-platinum/20">Key Narratives</TabsTrigger>
          <TabsTrigger value="durov" className="data-[state=active]:bg-platinum/20">Durov & UAE</TabsTrigger>
          <TabsTrigger value="censorship" className="data-[state=active]:bg-platinum/20">Censorship</TabsTrigger>
          <TabsTrigger value="findings" className="data-[state=active]:bg-platinum/20">Key Findings</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                <AnimatedChartContainer title="Sentiment Distribution" delay={0}>
                  <PieChart data={sentimentData} height={280} showLegend={true} />
                </AnimatedChartContainer>

                <AnimatedChartContainer title="Bot Activity Analysis" delay={1}>
                  <PieChart data={botData} height={250} showLegend={true} />
                  <div className="mt-4 text-center">
                    <span className="text-2xl font-bold text-rose-400">{botActivity?.estimatedBotPercent || 8}%</span>
                    <p className="text-sm text-slate-400">Limited due to E2E encryption</p>
                  </div>
                </AnimatedChartContainer>
              </div>

              <AnimatedChartContainer title="Encryption Types Comparison" delay={2}>
                <div className="space-y-3">
                  {encryptionData.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color === CHART_COLORS.emerald ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                        <div>
                          <p className="text-slate-200 font-medium">{item.type}</p>
                          <p className="text-xs text-slate-500">{item.encryption}</p>
                        </div>
                      </div>
                      <Badge className={item.accessible === 'NO' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border-rose-500/30'}>
                        {item.accessible === 'NO' ? <ShieldCheck className="h-3 w-3 mr-1" /> : <Lock className="h-3 w-3 mr-1" />}
                        Telegram {item.accessible}
                      </Badge>
                    </div>
                  ))}
                </div>
              </AnimatedChartContainer>

              <div className="grid gap-6 lg:grid-cols-2">
                <PremiumGlassCard delay={3} className="border-rose-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-rose-500/20 rounded-lg">
                      <Lock className="h-5 w-5 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-200">Censorship Level</h3>
                      <Badge variant="destructive" className="mt-1">EXTREME</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">{censorship?.notes || 'VoIP calls blocked via TDRA regulations'}</p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-slate-300">Compliance Rate</span>
                      <span className="font-bold text-emerald-400">{censorship?.complianceRate || 95}%</span>
                    </div>
                    <Progress value={censorship?.complianceRate || 95} className="h-2" />
                  </div>
                </PremiumGlassCard>

                <PremiumGlassCard delay={4} className="border-yellow-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-yellow-500/20 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-200">VPN Warning</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Minimum Penalty</span>
                      <span className="text-yellow-400 font-bold">AED 500,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Maximum Penalty</span>
                      <span className="text-rose-400 font-bold">AED 2,000,000</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">Using VPN for blocked content is illegal in UAE</p>
                </PremiumGlassCard>
              </div>
            </motion.div>
          </TabsContent>

          {/* Key Narratives Tab */}
          <TabsContent value="narratives" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {(keyNarratives || []).slice(0, 6).map((narrative, idx) => (
                  <NarrativeCard key={idx} narrative={narrative} delay={idx} />
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Durov & UAE Tab */}
          <TabsContent value="durov" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                <PremiumGlassCard delay={0} className="border-platinum-500/20">
                  <h3 className="text-xl font-bold text-platinum-300 mb-6 flex items-center gap-2">
                    <Server className="h-5 w-5" /> Durov-UAE Timeline
                  </h3>
                  <div className="space-y-4">
                    {durovTimeline.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="p-2 bg-platinum-500/20 rounded-lg text-platinum-400">{item.icon}</div>
                        <div>
                          <span className="text-xs font-mono text-platinum-500">{item.year}</span>
                          <p className="text-slate-200">{item.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PremiumGlassCard>

                <PremiumGlassCard delay={1} className="border-emerald-500/20">
                  <h3 className="text-xl font-bold text-emerald-300 mb-6 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" /> UAE Investment in Telegram
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                      <div className="text-4xl font-bold text-emerald-400">$150M</div>
                      <p className="text-sm text-slate-400 mt-1">Total UAE Investment</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-xl font-bold text-platinum-300">$75M</div>
                        <p className="text-xs text-slate-500">Mubadala Investment</p>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-xl font-bold text-platinum-300">$75M</div>
                        <p className="text-xs text-slate-500">Abu Dhabi Catalyst</p>
                      </div>
                    </div>
                  </div>
                </PremiumGlassCard>
              </div>

              <AnimatedChartContainer title="Purple Music Operation - 2017 Espionage" delay={2}>
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertOctagon className="h-6 w-6 text-rose-400" />
                    <h4 className="text-lg font-bold text-rose-400">Joint UAE-French Intelligence Operation</h4>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Operation Name</p>
                      <p className="text-lg font-bold text-slate-200">Purple Music</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Year</p>
                      <p className="text-lg font-bold text-slate-200">2017</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Target</p>
                      <p className="text-lg font-bold text-slate-200">Durov&apos;s iPhone</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 mt-4">
                    Joint UAE-French intelligence operation successfully hacked Durov&apos;s iPhone. Source: Wall Street Journal citing anonymous French officials.
                  </p>
                </div>
              </AnimatedChartContainer>
            </motion.div>
          </TabsContent>

          {/* Censorship Tab */}
          <TabsContent value="censorship" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid gap-6 lg:grid-cols-2">
                <PremiumGlassCard delay={0} className="border-red-500/30">
                  <div className="flex items-center gap-3 mb-6">
                    <Lock className="h-6 w-6 text-red-400" />
                    <h3 className="text-xl font-bold text-red-400">What&apos;s Blocked</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { feature: 'Voice Calls (1:1)', reason: 'TDRA VoIP regulations' },
                      { feature: 'Video Calls', reason: 'TDRA VoIP regulations' },
                      { feature: 'Group Voice Chats', reason: 'TDRA VoIP regulations' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-rose-500/10 rounded-lg border border-rose-500/20">
                        <div className="flex items-center gap-3">
                          <XCircle className="h-4 w-4 text-rose-400" />
                          <span className="text-slate-200">{item.feature}</span>
                        </div>
                        <span className="text-xs text-slate-500">{item.reason}</span>
                      </div>
                    ))}
                  </div>
                </PremiumGlassCard>

                <PremiumGlassCard delay={1} className="border-emerald-500/30">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                    <h3 className="text-xl font-bold text-emerald-400">What Works</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      'Text messaging',
                      'File transfers',
                      'Voice notes',
                      'Secret chats (E2E)',
                      'Channels & groups',
                      'Bots',
                      'Stickers & media',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        <span className="text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </PremiumGlassCard>
              </div>

              <AnimatedChartContainer title="Legal VoIP Alternatives in UAE" delay={2}>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: 'BOTIM', cost: 'AED 50-60/month', popular: true },
                    { name: 'C\'Me', cost: 'Licensed', popular: false },
                    { name: 'GoChat Messenger', cost: 'Licensed', popular: false },
                    { name: 'HiU Messenger', cost: 'Licensed', popular: false },
                    { name: 'Voico', cost: 'Licensed', popular: false },
                    { name: 'Zoom/Teams/Meet', cost: 'Business tier', popular: false },
                  ].map((app, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-200">{app.name}</span>
                          {app.popular && <Badge className="bg-platinum-500/20 text-platinum-400 text-xs">Popular</Badge>}
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{app.cost}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedChartContainer>

              <AnimatedChartContainer title="Official UAE Government Accounts" delay={3}>
                <div className="grid gap-4 md:grid-cols-2">
                  {(governmentAccounts || []).slice(0, 8).map((account, idx) => (
                    <GovernmentAccountCard key={idx} account={account} delay={idx} />
                  ))}
                </div>
              </AnimatedChartContainer>
            </motion.div>
          </TabsContent>

          {/* Key Findings Tab */}
          <TabsContent value="findings" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid gap-4 lg:grid-cols-2">
                {(keyFindings || []).map((finding, idx) => (
                  <KeyFindingCard
                    key={idx}
                    finding={finding.finding}
                    metric={finding.metric}
                    source={finding.source}
                    tier={finding.tier}
                    alert={finding.alert}
                    delay={idx}
                  />
                ))}
              </div>

              <AnimatedChartContainer title="Research Sources" delay={10} className="mt-6">
                <ScrollArea className="h-[200px]">
                  <div className="space-y-2">
                    {(sources || []).map((source, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 hover:bg-slate-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Info className="h-4 w-4 text-slate-500" />
                          <span className="text-sm text-slate-300">{source.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={`text-xs ${
                            source.tier === 1 ? 'bg-emerald-500/20 text-emerald-400' :
                            source.tier === 2 ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-slate-500/20 text-slate-400'
                          }`}>
                            Tier {source.tier}
                          </Badge>
                          <span className="text-xs text-slate-500">{source.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </AnimatedChartContainer>
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </div>
  )
}
