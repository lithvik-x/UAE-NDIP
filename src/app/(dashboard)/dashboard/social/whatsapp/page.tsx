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
} from 'lucide-react'
import {
  useWhatsAppIntelligenceData,
} from '@/lib/data-loader'

export default function WhatsAppPage() {
  const { data } = useWhatsAppIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading WhatsApp intelligence data...</div>
      </div>
    )
  }

  const { metrics, botActivity, censorship, keyNarratives } = data

  // Sentiment data for pie chart
  const sentimentData = metrics?.sentiment?.breakdown ? [
    { name: 'Positive', value: metrics.sentiment.breakdown.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: metrics.sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.sentiment.breakdown.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 35, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 38, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 27, color: CHART_COLORS.rose },
  ]

  // Usage patterns
  const usageData = [
    { activity: 'Text Messages', percentage: 65, color: CHART_COLORS.gold },
    { activity: 'Voice Calls', percentage: 18, color: CHART_COLORS.navy },
    { activity: 'Group Chats', percentage: 12, color: CHART_COLORS.platinum },
    { activity: 'Status Updates', percentage: 5, color: CHART_COLORS.emerald },
  ]

  // Dark social metrics
  const darkSocialData = [
    { metric: 'Dark Social Score', value: data.darkSocialScore || 92, max: 100, color: CHART_COLORS.rose },
    { metric: 'Encryption Level', value: 100, max: 100, color: CHART_COLORS.emerald },
    { metric: 'Surveillance Level', value: 85, max: 100, color: CHART_COLORS.rose },
    { metric: 'Metadata Access', value: 72, max: 100, color: CHART_COLORS.gold },
  ]

  // Regulatory timeline
  const regulatoryTimeline = [
    { year: '2017', event: 'WhatsApp calls initially blocked in UAE', type: 'restriction' },
    { year: '2018', event: 'VPN crackdown intensifies', type: 'restriction' },
    { year: '2019', event: 'Article 52 penalties introduced', type: 'legal' },
    { year: '2020', event: 'Surveillance concerns raised', type: 'concern' },
    { year: '2021', event: 'Government metadata access confirmed', type: 'surveillance' },
    { year: '2022', event: 'Continued VoIP restrictions', type: 'restriction' },
    { year: '2023', event: 'Enhanced monitoring capabilities', type: 'surveillance' },
    { year: '2024', event: 'Ongoing VoIP blocking', type: 'restriction' },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">DARK SOCIAL</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">WhatsApp & Messaging</h1>
          <p className="mt-2 text-slate-400">
            Encrypted messaging intelligence — VoIP restrictions, surveillance, and Article 52 enforcement
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <FileText className="h-4 w-4" />
            Legal Analysis
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Monitor Groups
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="UAE Users"
          value={metrics?.users ? `${(metrics.users / 1000000).toFixed(1)}M` : '7.1M'}
          previousValue={6.8}
          icon={<Users className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
        <MetricCard
          title="Penetration Rate"
          value={`${metrics?.penetration || 73}%`}
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Dark Social Score"
          value={data.darkSocialScore || 92}
          icon={<Lock className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Censorship Level"
          value={censorship?.level?.toUpperCase() || 'SIGNIFICANT'}
          icon={<Shield className="h-6 w-6" />}
          gradient="rose"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="surveillance">Surveillance</TabsTrigger>
          <TabsTrigger value="restrictions">VoIP Restrictions</TabsTrigger>
          <TabsTrigger value="legal">Legal Framework</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="WhatsApp Intelligence Overview" description="Encrypted messaging platform in UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Usage Patterns</CardTitle>
                  <CardDescription>WhatsApp activity breakdown in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={usageData}
                    xAxisKey="activity"
                    bars={[
                      { dataKey: 'percentage', name: '% of Users', color: CHART_COLORS.gold },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment on WhatsApp</CardDescription>
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
                    <CardTitle className="text-lg">Key Concerns</CardTitle>
                    <CardDescription>User-reported concerns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(metrics?.sentiment?.keyConcerns || ['VoIP call blocking', 'Surveillance concerns', 'Article 52 penalties']).map((concern: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                          <AlertTriangle className="h-4 w-4 text-rose mt-0.5" />
                          <span className="text-sm text-slate-300">{concern}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Dark Social Alert */}
              <Card className="glass-card border-rose-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <Lock className="h-5 w-5" />
                    Dark Social Platform
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    WhatsApp is classified as a <strong className="text-rose-400">Dark Social</strong> platform due to its end-to-end encryption and limited public visibility.
                    Communications occur in private groups and direct messages, making monitoring extremely difficult.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Badge variant="outline" className="text-rose-400 border-rose-500/50">
                      {data.darkSocialScore || 92}/100 Dark Score
                    </Badge>
                    <Badge variant="outline" className="text-platinum border-platinum">
                      End-to-End Encrypted
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Surveillance Tab */}
        <TabsContent value="surveillance" className="space-y-6">
          <GlassPanel title="Surveillance Analysis" description="Government surveillance capabilities on WhatsApp">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Surveillance Metrics</CardTitle>
                  <CardDescription>Surveillance capability assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {darkSocialData.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-200">{item.metric}</span>
                          <span className="text-lg font-bold text-slate-200">{item.value}%</span>
                        </div>
                        <Progress value={(item.value / item.max) * 100} className="h-3" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Metadata Access</CardTitle>
                  <CardDescription>What government can access despite encryption</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
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
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm text-slate-300">{item.data}</span>
                          <Badge variant={item.accessible ? 'destructive' : 'success'}>
                            {item.accessible ? 'Accessible' : 'Encrypted'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Surveillance Level Assessment</CardTitle>
                  <CardDescription>Confirmed surveillance capabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                    <Eye className="h-6 w-6 text-rose" />
                    <div>
                      <p className="font-medium text-slate-200">Confirmed Surveillance Active</p>
                      <p className="text-sm text-slate-400">
                        Government has confirmed access to WhatsApp metadata despite end-to-end encryption
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Restrictions Tab */}
        <TabsContent value="restrictions" className="space-y-6">
          <GlassPanel title="VoIP Restrictions" description="Voice call blocking and workaround monitoring">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Restriction Timeline</CardTitle>
                  <CardDescription>History of WhatsApp VoIP restrictions in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {regulatoryTimeline.map((event, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy/20 text-navy text-sm font-bold">
                            {event.year.slice(2)}
                          </div>
                          <div className="flex-1 rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-slate-200">{event.event}</span>
                              <Badge
                                variant="outline"
                                className={
                                  event.type === 'restriction'
                                    ? 'text-rose border-rose-500/50'
                                    : event.type === 'surveillance'
                                    ? 'text-yellow-400 border-yellow-500/50'
                                    : 'text-platinum border-platinum-500/50'
                                }
                              >
                                {event.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Workarounds Used</CardTitle>
                    <CardDescription>Common methods to bypass VoIP blocks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { method: 'VPN Usage', prevalence: 'High', color: CHART_COLORS.gold },
                        { method: 'Telegram Voice Calls', prevalence: 'Medium', color: CHART_COLORS.navy },
                        { method: 'Bot Calls (automated)', prevalence: 'Low', color: CHART_COLORS.platinum },
                        { method: 'Skype (when available)', prevalence: 'Very Low', color: CHART_COLORS.emerald },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Phone className="h-4 w-4 text-gold" />
                            <span className="text-sm font-medium text-slate-200">{item.method}</span>
                          </div>
                          <Badge variant="outline" className="text-platinum">{item.prevalence}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Censorship Statistics</CardTitle>
                    <CardDescription>WhatsApp compliance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Compliance Rate</span>
                        <span className="text-xl font-bold text-gold">{censorship?.complianceRate || 92}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Government Requests</span>
                        <span className="text-xl font-bold text-navy">{(censorship?.governmentRequests || 4567).toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Content Removed</span>
                        <span className="text-xl font-bold text-rose">{(censorship?.contentRemoved || 6789).toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Legal Framework Tab */}
        <TabsContent value="legal" className="space-y-6">
          <GlassPanel title="Legal Framework" description="Article 52 and federal law enforcement">
            <div className="space-y-6">
              <Card className="glass-card border-rose-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Article 52 Penalties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <h4 className="font-semibold text-slate-200 mb-2">Federal Decree-Law No. 5 of 2012 (Cybercrime Law)</h4>
                      <p className="text-sm text-slate-400 mb-3">
                        Article 52 imposes severe penalties for misuse of telecommunications:
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">Fine Range</span>
                          <span className="font-bold text-rose">AED 100,000 - 1,000,000</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">Imprisonment</span>
                          <span className="font-bold text-rose">1 - 5 years</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                      <p className="text-sm text-slate-300">
                        <strong className="text-rose-400">Applies to:</strong> Using VoIP services to &quot;annoy or inconvenience&quot; others,
                        or in ways that &quot;violate public morals&quot; — broadly interpreted to include WhatsApp calls to family abroad.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Narratives</CardTitle>
                  <CardDescription>Prevailing WhatsApp discussions in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {keyNarratives?.map((narrative: { topic: string; narrative: string; prevalence: number; sentiment: string }, idx: number) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-slate-800/50 p-4">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{narrative.topic}</p>
                            <p className="text-sm text-slate-400 mt-1">{narrative.narrative}</p>
                          </div>
                          <Badge variant={narrative.sentiment === 'Positive' ? 'success' : narrative.sentiment === 'Negative' ? 'destructive' : 'outline'}>
                            {narrative.sentiment}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Bot & Automated Activity</CardTitle>
                  <CardDescription>Minimal due to encryption</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                      <div className="flex items-center gap-3">
                        <Bot className="h-5 w-5 text-emerald" />
                        <span className="text-sm font-medium text-slate-200">Est. Bot %</span>
                      </div>
                      <span className="text-xl font-bold text-emerald">{botActivity?.estimatedBotPercent || 5}%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                      <div className="flex items-center gap-3">
                        <Send className="h-5 w-5 text-gold" />
                        <span className="text-sm font-medium text-slate-200">Coordinated</span>
                      </div>
                      <Badge variant={botActivity?.coordinatedInauthentic ? 'destructive' : 'success'}>
                        {botActivity?.coordinatedInauthentic ? 'Yes' : 'No'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                      <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-navy" />
                        <span className="text-sm font-medium text-slate-200">Confidence</span>
                      </div>
                      <span className="text-xl font-bold text-navy">{((botActivity?.confidence || 0.42) * 100).toFixed(0)}%</span>
                    </div>
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

function Bot({ className }: { className?: string }) {
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
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  )
}
