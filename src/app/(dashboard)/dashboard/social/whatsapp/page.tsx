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
  Shield,
  MessageSquare,
  Users,
  Lock,
  Eye,
  Send,
  Bell,
  Phone,
  Video,
  FileText,
  AlertTriangle,
  Globe,
  Server,
  Clock,
  CheckCircle,
  XCircle,
  Info,
  Zap,
  ShieldAlert,
  ShieldCheck,
  Bug,
  EyeOff,
  Mail,
  Scale,
  Megaphone,
  TrendingUp,
  TrendingDown,
  Minus,
} from 'lucide-react'
import {
  useWhatsAppIntelligenceData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardHover = {
  rest: { scale: 1, opacity: 1 },
  hover: { scale: 1.02, opacity: 0.9 },
}

export default function WhatsAppPage() {
  const { data } = useWhatsAppIntelligenceData()

  if (!data) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-[400px]"
      >
        <div className="text-platinum-400">Loading WhatsApp intelligence data...</div>
      </motion.div>
    )
  }

  const { metrics, censorship, keyNarratives, extendedData } = data

  // Sentiment data for pie chart
  const sentimentData = metrics?.sentiment?.breakdown ? [
    { name: 'Positive', value: metrics.sentiment.breakdown.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: metrics.sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.sentiment.breakdown.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 15, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 22, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 63, color: CHART_COLORS.rose },
  ]

  // Usage patterns
  const usageData = [
    { activity: 'Text Messages', percentage: 65, color: CHART_COLORS.gold },
    { activity: 'Voice Calls (Blocked)', percentage: 18, color: CHART_COLORS.rose },
    { activity: 'Group Chats', percentage: 12, color: CHART_COLORS.platinum },
    { activity: 'Status Updates', percentage: 5, color: CHART_COLORS.emerald },
  ]

  // Dark social metrics from extended data
  const darkSocialData = [
    { metric: 'Dark Social Score', value: data.darkSocialScore || 92, max: 100, color: CHART_COLORS.rose },
    { metric: 'Encryption Level', value: 100, max: 100, color: CHART_COLORS.emerald },
    { metric: 'Surveillance Confirmed', value: 95, max: 100, color: CHART_COLORS.rose },
    { metric: 'Metadata Access', value: 85, max: 100, color: CHART_COLORS.gold },
  ]

  // Regulatory timeline from MD file
  const regulatoryTimeline = [
    { year: '2017', event: 'WhatsApp calls initially blocked in UAE', type: 'restriction' },
    { year: '2018', event: 'Forwarded label rollout; VPN crackdown intensifies', type: 'restriction' },
    { year: '2019', event: 'Article 52 penalties; NSO Group Pegasus lawsuit', type: 'legal' },
    { year: '2021', event: 'Federal Decree-Law No. 34 of 2021 enacted', type: 'legal' },
    { year: '2022', event: 'MoHRE launches first federal WhatsApp channel', type: 'government' },
    { year: '2023', event: 'WhatsApp Public Channels launch in UAE (Sep 14)', type: 'feature' },
    { year: '2026', event: 'Dubai Police confirm surveillance; arrests intensify', type: 'surveillance' },
  ]

  // Article 52 penalties data
  const article52Penalties = [
    { offense: 'Standard - False News', fine: 'AED 100,000+', imprisonment: '1 year+', context: 'General cases' },
    { offense: 'Aggravated - Crisis', fine: 'AED 200,000+', imprisonment: '2 years+', context: 'Emergencies, disasters' },
    { offense: 'Maximum (2018 provisions)', fine: 'AED 1,000,000', imprisonment: 'Up to 5 years', context: 'Severe cases' },
    { offense: 'VPN for VoIP Bypass', fine: 'AED 500,000-2,000,000', imprisonment: 'Possible', context: 'Criminal offense' },
  ]

  // WhatsApp Channel data
  const channelData = extendedData?.topChannelsSep2025?.slice(0, 5).map((ch: any) => ({
    channel: ch.channel,
    followers: ch.followers,
    category: ch.category,
  })) || [
    { channel: 'Paris Saint-Germain', followers: '12.1M', category: 'Sports/Football' },
    { channel: 'Indian Cricket Team', followers: '8.9M', category: 'Sports' },
    { channel: 'BeIN Sports', followers: '5.5M', category: 'Sports Media' },
    { channel: 'BeIN', followers: '4.0M', category: 'Sports Media' },
    { channel: 'Al Ahly SC', followers: '3.6M', category: 'Sports/Football' },
  ]

  const channelChartData = channelData.map((ch: any) => ({
    name: ch.channel.length > 12 ? ch.channel.substring(0, 12) + '...' : ch.channel,
    followers: parseFloat(ch.followers.replace('M', '')),
  }))

  // VoIP alternatives data
  const voipAlternatives = extendedData?.voipAlternatives || [
    { app: 'BOTIM', type: 'Personal VoIP', notes: 'Most popular; requires Internet Calling Plan' },
    { app: 'C\'Me', type: 'Personal VoIP', notes: 'TDRA-approved' },
    { app: 'Voico', type: 'Personal VoIP', notes: 'TDRA-approved' },
    { app: 'Zoom', type: 'Business', notes: 'TDRA-approved' },
    { app: 'Microsoft Teams', type: 'Business', notes: 'TDRA-approved' },
  ]

  // Surveillance methods
  const surveillanceMethods = [
    { method: 'Pegasus Spyware', detail: 'Zero-click WhatsApp call infection via NSO Group', severity: 'CRITICAL' },
    { method: 'Electronic Monitoring', detail: 'Dubai Police confirmed "electronic monitoring operations"', severity: 'HIGH' },
    { method: 'Metadata Analysis', detail: 'Who contacts whom, when, how often', severity: 'MEDIUM' },
    { method: 'Infrastructure Access', detail: 'Etisalat/du network-level access (govt majority stake)', severity: 'HIGH' },
    { method: 'Cloud Backup Access', detail: 'Google Drive/iCloud backups not E2E encrypted until 2021', severity: 'MEDIUM' },
  ]

  // Group chat arrests
  const groupChatArrests = extendedData?.groupChatLeaks?.slice(0, 4) || [
    { date: 'April 2026', incident: 'Emirates crew member detained 40+ days', charge: 'Publishing harmful state info' },
    { date: 'April 2026', incident: 'Airline employee arrested', charge: 'Sharing drone strike images' },
    { date: 'March 2026', incident: '25 individuals detained', charge: 'Undermining defense measures' },
    { date: 'April 2026', incident: '"WhatsApp Snitches" phenomenon', charge: 'Reporting group members to police' },
  ]

  // Sentiment theme data
  const sentimentThemeData = extendedData?.sentimentAnalysis?.themeBreakdown || [
    { theme: 'Privacy', sentiment: 'Strongly Negative' },
    { theme: 'Fake news penalties', sentiment: 'Strongly Negative' },
    { theme: 'Government channels', sentiment: 'Positive' },
    { theme: 'Public channels', sentiment: 'Neutral/Positive' },
    { theme: 'VPN usage', sentiment: 'Strongly Negative' },
    { theme: 'Pegasus surveillance', sentiment: 'Strongly Negative' },
  ]

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8 p-8 font-rajdhani"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-rose-500/20 to-rose-600/20 text-rose-400 border-rose-500/50">
            <Lock className="w-3 h-3 mr-1" />
            DARK SOCIAL
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              WhatsApp & Messaging
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">
            Encrypted messaging intelligence — VoIP restrictions, surveillance confirmed, and Article 52 enforcement
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10 bg-glass-surface/50">
            <FileText className="h-4 w-4" />
            Legal Analysis
          </Button>
          <Button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:opacity-90 text-white gap-2 shadow-lg shadow-rose-500/25">
            <ShieldAlert className="h-4 w-4" />
            Monitor Groups
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics - 6 cards for 6 enhancement cycles */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <MetricCard
          title="UAE Users"
          value="7.1M"
          icon={<Users className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Penetration Rate"
          value="99%"
          icon={<Globe className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Dark Social Score"
          value={data.darkSocialScore || 92}
          unit="/100"
          icon={<Lock className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Surveillance"
          value="CONFIRMED"
          icon={<Eye className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Article 52 Fine"
          value="AED 100K+"
          icon={<Scale className="h-6 w-6" />}
          gradient="gold"
          status="warning"
        />
        <MetricCard
          title="VoIP Status"
          value="BLOCKED"
          icon={<Phone className="h-6 w-6" />}
          gradient="orange"
          status="error"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="surveillance">Surveillance</TabsTrigger>
          <TabsTrigger value="restrictions">VoIP Restrictions</TabsTrigger>
          <TabsTrigger value="legal">Legal Framework</TabsTrigger>
          <TabsTrigger value="channels">Public Channels</TabsTrigger>
          <TabsTrigger value="incidents">Group Chat Incidents</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="WhatsApp Intelligence Overview" description="Encrypted messaging platform status in UAE — Privacy is NOT protected">
              <div className="space-y-6">
                {/* Sentiment and Usage Grid */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingDown className="h-5 w-5 text-rose-500" />
                        Sentiment Distribution
                      </CardTitle>
                      <CardDescription>Overall sentiment on WhatsApp in UAE</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <PieChart
                        data={sentimentData}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </motion.div>

                  <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-gold-700" />
                        Usage Patterns
                      </CardTitle>
                      <CardDescription>WhatsApp activity breakdown in UAE</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <BarChart
                        data={usageData}
                        xAxisKey="activity"
                        bars={[{ dataKey: 'percentage', name: '% of Users', color: CHART_COLORS.gold }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </motion.div>
                </div>

                {/* Key Concerns */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {(metrics?.sentiment?.keyConcerns || ['WhatsApp is NOT private', 'Heavy fines AED 100K-1M', 'Imprisonment risk for forwarding', 'Pegasus spyware confirmed']).map((concern: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 rounded-lg bg-gradient-to-r from-rose-500/10 to-rose-600/5 p-4 border border-rose-500/30"
                    >
                      <AlertTriangle className="h-5 w-5 text-rose mt-0.5 shrink-0" />
                      <span className="text-sm text-platinum-200">{concern}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Privacy Alert */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-rose-500/20 to-rose-600/10 p-6 border border-rose-500/50 shadow-lg shadow-rose-500/10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg"
                  >
                    <EyeOff className="h-7 w-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-rose-400">WhatsApp is NOT Private</h4>
                    <p className="text-sm text-platinum-300 mt-1">
                      Dubai Police confirmed conducting "electronic monitoring operations" capable of detecting private WhatsApp messages.
                      Pegasus spyware allows zero-click WhatsApp call infection.
                    </p>
                  </div>
                  <Badge variant="destructive" className="shrink-0 bg-rose-500/20 text-rose-400 border-rose-500/50">
                    CRITICAL
                  </Badge>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Surveillance Tab */}
        <TabsContent value="surveillance" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Surveillance Analysis" description="Government surveillance capabilities on WhatsApp — Confirmed active">
              <div className="space-y-6">
                {/* Surveillance Metrics */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ShieldAlert className="h-5 w-5 text-rose-500" />
                      Surveillance Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-4">
                      {darkSocialData.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: '100%' }}
                          transition={{ delay: idx * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-200">{item.metric}</span>
                            <span className="text-lg font-bold text-platinum-100">{item.value}%</span>
                          </div>
                          <Progress
                            value={(item.value / item.max) * 100}
                            className="h-3 bg-platinum-800"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>

                {/* Pegasus Alert */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-purple-600/10 p-6 border border-purple-500/50 shadow-lg shadow-purple-500/10"
                >
                  <motion.div
                    initial={{ rotate: -180 }}
                    animate={{ rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg"
                  >
                    <Bug className="h-7 w-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-purple-400">Pegasus Spyware — CONFIRMED</h4>
                    <p className="text-sm text-platinum-300 mt-1">
                      NSO Group spyware infects devices via WhatsApp calls (zero-click — no user interaction needed).
                      Access to all messages, photos, contacts. UAE government confirmed user.
                    </p>
                  </div>
                  <Badge variant="destructive" className="shrink-0 bg-purple-500/20 text-purple-400 border-purple-500/50">
                    ZERO-CLICK
                  </Badge>
                </motion.div>

                {/* Surveillance Methods */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Server className="h-5 w-5 text-gold-700" />
                      Technical Surveillance Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-3">
                        {surveillanceMethods.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                          >
                            <div className="flex items-center gap-3">
                              <Shield className="h-4 w-4 text-rose" />
                              <div>
                                <p className="text-sm font-medium text-platinum-200">{item.method}</p>
                                <p className="text-xs text-platinum-400">{item.detail}</p>
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className={
                                item.severity === 'CRITICAL'
                                  ? 'text-rose border-rose-500/50'
                                  : item.severity === 'HIGH'
                                  ? 'text-orange border-orange-500/50'
                                  : 'text-gold border-gold-500/50'
                              }
                            >
                              {item.severity}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>

                {/* Metadata Access */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Eye className="h-5 w-5 text-gold-700" />
                      Metadata Access — What Government Can See
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="grid gap-3 md:grid-cols-2">
                      {[
                        { data: 'Phone Numbers', accessible: true },
                        { data: 'Contact Lists', accessible: true },
                        { data: 'Message Timing', accessible: true },
                        { data: 'Group Memberships', accessible: true },
                        { data: 'Online Status', accessible: true },
                        { data: 'Device Information', accessible: true },
                        { data: 'Location Data (if shared)', accessible: true },
                        { data: 'Message Content', accessible: false },
                        { data: 'Call Content', accessible: false },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                        >
                          <span className="text-sm text-platinum-300">{item.data}</span>
                          {item.accessible ? (
                            <Badge variant="destructive" className="bg-rose-500/20 text-rose-400 border-rose-500/50">
                              <XCircle className="h-3 w-3 mr-1" />
                              Accessible
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                              <ShieldCheck className="h-3 w-3 mr-1" />
                              Encrypted
                            </Badge>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Restrictions Tab */}
        <TabsContent value="restrictions" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="VoIP Restrictions" description="Voice call blocking and workaround monitoring in UAE">
              <div className="space-y-6">
                {/* VoIP Block Alert */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-600/10 p-6 border border-orange-500/50 shadow-lg shadow-orange-500/10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg"
                  >
                    <PhoneOff className="h-7 w-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-orange-400">WhatsApp VoIP Calls Blocked Nationwide</h4>
                    <p className="text-sm text-platinum-300 mt-1">
                      Voice and video calls via WhatsApp are blocked by TDRA regulation.
                      VPN for VoIP bypass is illegal (AED 500K-2M fine).
                    </p>
                  </div>
                  <Badge variant="destructive" className="shrink-0 bg-orange-500/20 text-orange-400 border-orange-500/50">
                    BLOCKED
                  </Badge>
                </motion.div>

                {/* Restriction Timeline */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="h-5 w-5 text-navy-400" />
                      Restriction Timeline
                    </CardTitle>
                    <CardDescription>History of WhatsApp VoIP restrictions in UAE</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-3">
                        {regulatoryTimeline.map((event, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-4"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-navy-500/20 to-navy-600/20 text-navy-400 text-sm font-bold border border-navy-500/30">
                              {event.year.slice(2)}
                            </div>
                            <div className="flex-1 rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-medium text-platinum-200">{event.event}</span>
                                <Badge
                                  variant="outline"
                                  className={
                                    event.type === 'restriction'
                                      ? 'text-rose border-rose-500/50'
                                      : event.type === 'surveillance'
                                      ? 'text-orange border-orange-500/50'
                                      : event.type === 'legal'
                                      ? 'text-gold border-gold-500/50'
                                      : 'text-emerald border-emerald-500/50'
                                  }
                                >
                                  {event.type}
                                </Badge>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>

                {/* Legal Alternatives */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      TDRA-Approved VoIP Alternatives
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                      {voipAlternatives.map((item: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                        >
                          <Phone className="h-4 w-4 text-emerald mt-0.5 shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-platinum-200">{item.app}</p>
                            <Badge variant="outline" className="text-xs mt-1 border-emerald-500/50 text-emerald">
                              {item.type}
                            </Badge>
                            <p className="text-xs text-platinum-400 mt-1">{item.notes}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Legal Framework Tab */}
        <TabsContent value="legal" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Legal Framework" description="Article 52 and Federal Decree-Law No. 34 of 2021">
              <div className="space-y-6">
                {/* Article 52 Alert */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-rose-500/20 to-rose-600/10 p-6 border border-rose-500/50 shadow-lg shadow-rose-500/10"
                >
                  <motion.div
                    initial={{ rotate: -180 }}
                    animate={{ rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg"
                  >
                    <Scale className="h-7 w-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-rose-400">Article 52 Penalties — No Intent Required</h4>
                    <p className="text-sm text-platinum-300 mt-1">
                      Courts focus on impact of dissemination, not intent. Forwarding treated as re-publishing.
                      Private WhatsApp chats are NOT exempt from cybercrime laws.
                    </p>
                  </div>
                  <Badge variant="destructive" className="shrink-0 bg-rose-500/20 text-rose-400 border-rose-500/50">
                    CRIMINAL
                  </Badge>
                </motion.div>

                {/* Article 52 Penalties Table */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-rose-500" />
                      Article 52 Penalty Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {article52Penalties.map((penalty, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium text-platinum-200">{penalty.offense}</h4>
                              <Badge variant="outline" className="text-rose border-rose-500/50 text-xs">
                                {penalty.context}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-xs text-platinum-400">Fine</p>
                                <p className="text-lg font-bold text-rose-400">{penalty.fine}</p>
                              </div>
                              <div>
                                <p className="text-xs text-platinum-400">Imprisonment</p>
                                <p className="text-lg font-bold text-rose-400">{penalty.imprisonment}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>

                {/* Key Legal Principles */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Info className="h-5 w-5 text-gold-700" />
                      Key Legal Principles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="grid gap-3 md:grid-cols-2">
                      {[
                        { principle: 'No intent required', implication: 'Courts focus on impact, not intent — lack of malicious purpose does NOT remove liability' },
                        { principle: 'Re-publication = liability', implication: 'Forwarding treated as re-publishing — "publishes, re-publishes, circulates or re-circulates" all accountable' },
                        { principle: 'Private chats not exempt', implication: 'UAE lawyers confirmed private WhatsApp chats are NOT exempt from cybercrime laws' },
                        { principle: 'Extraterritorial reach', implication: 'Law applies to actions taken outside the UAE' },
                        { principle: 'Admins responsible', implication: 'Group admins liable for failing to remove unlawful content' },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                        >
                          <Shield className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gold-400">{item.principle}</p>
                            <p className="text-xs text-platinum-400 mt-1">{item.implication}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>

                {/* WhatsApp as Evidence */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileText className="h-5 w-5 text-navy-400" />
                      WhatsApp as Evidence
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-4">
                      <div className="rounded-lg bg-navy-500/10 p-4 border border-navy-500/30">
                        <p className="text-sm text-platinum-300">
                          <strong className="text-navy-400">Dubai Court of Cassation (April 17, 2026):</strong> WhatsApp messages in divorce case must be "thoroughly investigated to establish their authenticity, verify the identity of the sender, and determine whether they meet the legal threshold required for admissible evidence."
                        </p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                        <p className="text-sm text-platinum-300">
                          <strong className="text-platinum-200">Requirements:</strong>
                        </p>
                        <ul className="mt-2 space-y-1">
                          <li className="text-xs text-platinum-400 flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-emerald" />
                            Authenticity verification — messages must be proven genuine
                          </li>
                          <li className="text-xs text-platinum-400 flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-emerald" />
                            Sender identity verification — confirm who actually sent the messages
                          </li>
                          <li className="text-xs text-platinum-400 flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-emerald" />
                            Legal threshold met — must satisfy admissibility requirements
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Public Channels Tab */}
        <TabsContent value="channels" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="WhatsApp Public Channels" description="Channels launched September 2023 in UAE — Sports channels dominate">
              <div className="space-y-6">
                {/* Channel Launch Info */}
                <div className="grid gap-4 md:grid-cols-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0 }}
                    className="rounded-lg bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-4 border border-emerald-500/30"
                  >
                    <p className="text-xs text-emerald-400 mb-1">Global Launch</p>
                    <p className="text-lg font-bold text-platinum-100">June 2023</p>
                    <p className="text-xs text-platinum-400">Colombia & Singapore pilot</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-lg bg-gradient-to-br from-gold-500/10 to-gold-600/5 p-4 border border-gold-500/30"
                  >
                    <p className="text-xs text-gold-400 mb-1">UAE/Saudi Launch</p>
                    <p className="text-lg font-bold text-platinum-100">Sep 14, 2023</p>
                    <p className="text-xs text-platinum-400">September 14, 2023</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-lg bg-gradient-to-br from-navy-500/10 to-navy-600/5 p-4 border border-navy-500/30"
                  >
                    <p className="text-xs text-navy-400 mb-1">Global Expansion</p>
                    <p className="text-lg font-bold text-platinum-100">150+</p>
                    <p className="text-xs text-platinum-400">Countries worldwide</p>
                  </motion.div>
                </div>

                {/* Top Channels Chart */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-gold-700" />
                      Top WhatsApp Channels — September 2025
                    </CardTitle>
                    <CardDescription>Sports channels dominate (6 of top 10)</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <BarChart
                      data={channelChartData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'followers', name: 'Followers (M)', color: CHART_COLORS.gold }]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </motion.div>

                {/* Channel Features */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Info className="h-5 w-5 text-emerald-500" />
                      Channel Features & Privacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="grid gap-3 md:grid-cols-2">
                      {[
                        { feature: 'Location', detail: 'Updates tab (separate from personal chats)' },
                        { feature: 'Format', detail: 'One-way broadcast from admins to followers' },
                        { feature: 'Privacy', detail: 'Follower phone numbers hidden from admins' },
                        { feature: 'Admin Controls', detail: 'Can block screenshots, disable forwarding' },
                        { feature: 'Emoji Reactions', detail: 'Available with total counts visible' },
                        { feature: 'History', detail: 'Stored up to 30 days on Meta servers' },
                        { feature: 'Directory', detail: 'Filterable by country; new, active, popular' },
                        { feature: 'Eligibility', detail: 'Anyone with WhatsApp account can create' },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3"
                        >
                          <CheckCircle className="h-4 w-4 text-emerald mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs text-emerald-400 font-medium">{item.feature}</p>
                            <p className="text-sm text-platinum-300">{item.detail}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>

                {/* Government Channels */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Megaphone className="h-5 w-5 text-navy-400" />
                      Government WhatsApp Channels
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-4">
                      <div className="rounded-lg bg-gradient-to-r from-navy-500/10 to-navy-600/5 p-4 border border-navy-500/30">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-navy-400">MoHRE (Ministry of Human Resources)</h4>
                          <Badge variant="outline" className="border-emerald-500/50 text-emerald">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            First Federal
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-platinum-400">
                          <p>Launch: September 8, 2022</p>
                          <p>Contact: 600590000</p>
                          <p>Languages: English & Arabic</p>
                          <p>Availability: 24/7</p>
                        </div>
                        <p className="text-xs text-platinum-400 mt-2">
                          Services: Labour laws, application status, domestic helpers law, ministerial decrees
                        </p>
                      </div>
                      <div className="rounded-lg bg-gradient-to-r from-gold-500/10 to-gold-600/5 p-4 border border-gold-500/30">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gold-400">Dubai Government Media Office</h4>
                          <Badge variant="outline" className="border-gold-500/50 text-gold">
                            NEW
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-platinum-400">
                          <p>Launch: March 18, 2026</p>
                          <p>Purpose: Public safety advisories</p>
                        </div>
                        <p className="text-xs text-platinum-400 mt-2">
                          Real-time city-wide announcements and key Dubai developments
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Group Chat Incidents Tab */}
        <TabsContent value="incidents" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Group Chat Leaks & Arrests" description="Recent incidents — April 2026 mass detentions">
              <div className="space-y-6">
                {/* Warning Alert */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-rose-500/20 to-rose-600/10 p-6 border border-rose-500/50 shadow-lg shadow-rose-500/10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg"
                  >
                    <AlertTriangle className="h-7 w-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-rose-400">"WhatsApp Snitches" — April 2026</h4>
                    <p className="text-sm text-platinum-300 mt-1">
                      Dubai residents reporting group chat members to police for sharing Iranian drone missile attack pictures.
                      Expats fleeing UAE over fears of being reported.
                    </p>
                  </div>
                  <Badge variant="destructive" className="shrink-0 bg-rose-500/20 text-rose-400 border-rose-500/50">
                    CRITICAL
                  </Badge>
                </motion.div>

                {/* Recent Arrests */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ShieldAlert className="h-5 w-5 text-rose-500" />
                      March-April 2026 Arrests
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-[350px]">
                      <div className="space-y-3">
                        {groupChatArrests.map((arrest: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline" className="text-rose border-rose-500/50 text-xs">
                                {arrest.date}
                              </Badge>
                              <Badge variant="destructive" className="bg-rose-500/20 text-rose-400 border-rose-500/50 text-xs">
                                {arrest.charge}
                              </Badge>
                            </div>
                            <p className="text-sm text-platinum-200">{arrest.incident}</p>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>

                {/* Key Narratives */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-gold-700" />
                      Key WhatsApp Narratives in UAE
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {(keyNarratives || []).map((narrative: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-start justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                          >
                            <div className="flex-1">
                              <p className="font-medium text-platinum-200">{narrative.topic}</p>
                              <p className="text-sm text-platinum-400 mt-1">{narrative.narrative}</p>
                              <p className="text-xs text-platinum-500 mt-2">Source: {narrative.source}</p>
                            </div>
                            <Badge
                              variant={narrative.sentiment === 'positive' ? 'secondary' : narrative.sentiment === 'negative' ? 'destructive' : 'outline'}
                              className={
                                narrative.sentiment === 'positive'
                                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                                  : narrative.sentiment === 'negative'
                                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/50'
                                  : 'text-platinum border-platinum-500/50'
                              }
                            >
                              {narrative.sentiment}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>

                {/* Sentiment by Theme */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-rose-500" />
                      Sentiment by Theme
                    </CardTitle>
                    <CardDescription>Overall sentiment: Predominantly Negative/Concerned</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="grid gap-2 md:grid-cols-2">
                      {sentimentThemeData.map((item: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.06 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                        >
                          <span className="text-sm text-platinum-300">{item.theme}</span>
                          <Badge
                            variant="outline"
                            className={
                              item.sentiment.includes('Positive')
                                ? 'text-emerald border-emerald-500/50'
                                : item.sentiment.includes('Negative')
                                ? 'text-rose border-rose-500/50'
                                : 'text-platinum border-platinum-500/50'
                            }
                          >
                            {item.sentiment}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}

// Helper component for PhoneOff icon
function PhoneOff({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
      <line x1="23" y1="1" x2="1" y2="23" />
    </svg>
  )
}