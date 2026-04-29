// @ts-nocheck
'use client'

import { usePreFederationData } from '@/lib/data-loader'
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
  Lightbulb,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
  Crown,
  Flag,
  Calendar,
  Droplet,
  Factory,
  DollarSign,
  Cog,
} from 'lucide-react'

export default function OilDiscoveryPage() {
  const { data } = usePreFederationData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Oil Discovery data...</div>
      </div>
    )
  }

  // Oil-related events
  const oilEvents = data.keyEvents?.filter(event =>
    event.title.toLowerCase().includes('oil') ||
    event.description.toLowerCase().includes('oil') ||
    event.entities?.some(e => e.includes('ADMA') || e.includes('ADNOC') || e.includes('IPC'))
  ) || []

  // Key oil milestones
  const oilMilestones = [
    { year: '1935', event: 'Oil Exploration Begins', detail: 'Anglo Persian geologist Peter Cox arrives in Abu Dhabi' },
    { year: '1939', event: 'PDTC Concession', detail: '75-year petroleum concession granted' },
    { year: '1958', event: 'First Oil Discovery', detail: 'ADMA strikes oil at Umm Shaif offshore field' },
    { year: '1962', event: 'First Oil Export', detail: 'Umm Shaif field begins commercial production' },
    { year: '1965', event: '50-50 Agreement', detail: 'Sheikh Shakhbut negotiates equal profit split' },
    { year: '1966', event: 'Onshore Discovery', detail: 'Major onshore discovery at Bab' },
  ]

  // Revenue projections (illustrative data)
  const revenueData = [
    { year: '1960', revenue: 0.1 },
    { year: '1965', revenue: 0.8 },
    { year: '1970', revenue: 2.1 },
  ]

  // Key figures in oil development
  const keyFigures = [
    { name: 'Peter Cox', role: 'Geologist who discovered oil', entity: 'Anglo Persian' },
    { name: 'Sheikh Shakhbut bin Sultan Al Nahyan', role: 'Negotiated 50-50 agreement', entity: 'Abu Dhabi' },
    { name: 'Sheikh Zayed bin Sultan Al Nahyan', role: 'Visionary leader who transformed oil wealth', entity: 'Abu Dhabi' },
  ]

  const getSignificanceBadge = (significance?: string) => {
    switch (significance) {
      case 'critical':
        return <Badge variant="destructive" className="text-xs">Critical</Badge>
      case 'major':
        return <Badge variant="warning" className="text-xs bg-yellow-500/20 text-yellow-400 border-yellow-500/50">Major</Badge>
      default:
        return <Badge variant="outline" className="text-xs">Minor</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">H-PRE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Oil Discovery & Development</h1>
          <p className="mt-2 text-slate-400">
            The discovery and development of petroleum resources - Transforming a region (1935-1971)
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Factory className="h-4 w-4" />
            Industry Reports
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Droplet className="h-4 w-4" />
            Oil History
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="First Discovery"
          value="1958"
          icon={<Droplet className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Oil Events"
          value={oilEvents.length}
          icon={<Star className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Key Concessions"
          value={data.policyOutcomes?.length || 0}
          icon={<Cog className="h-6 w-6" />}
          gradient="platinum"
        />
        <MetricCard
          title="Years of Discovery"
          value="23"
          icon={<Calendar className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="discovery">Discovery</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Oil Discovery Era Overview" description="The transformation of the Arabian Gulf">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">About This Era</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    The discovery of oil in the Arabian Gulf region between 1935 and 1971 transformed what were
                    once humble fishing villages and pearl diving centers into some of the world's wealthiest
                    nations. This era chronicles the arrival of Western oil companies, the negotiation of
                    concession agreements, the technical challenges of offshore drilling, and the
                    fundamental shift in economic power that would shape the modern Middle East.
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Oil Revenue Growth</CardTitle>
                    <CardDescription>Pre-federation revenue development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={revenueData}
                      xAxisKey="year"
                      areas={[
                        { dataKey: 'revenue', name: 'Revenue (USD Billions)', color: CHART_COLORS.gold },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Concessions</CardTitle>
                    <CardDescription>Major petroleum agreements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-3">
                        {data.policyOutcomes?.filter(p => p.policy.toLowerCase().includes('oil') || p.policy.includes('Petroleum')).map((policy, idx) => (
                          <div key={idx} className="rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-gold">{policy.policy}</span>
                              <Badge variant="outline" className="text-xs">{policy.year}</Badge>
                            </div>
                            <p className="text-xs text-slate-400">{policy.impact}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Entities Involved</CardTitle>
                  <CardDescription>Companies and figures in oil development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {data.entityInvolvement?.filter(e =>
                      e.includes('ADMA') || e.includes('IPC') || e.includes('PDTC') || e.includes('Peter Cox')
                    ).map((entity, idx) => (
                      <Badge key={idx} variant="outline" className="border-gold/50 text-gold">{entity}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Discovery Tab */}
        <TabsContent value="discovery" className="space-y-6">
          <GlassPanel title="Discovery Process" description="The journey to finding oil">
            <div className="space-y-4">
              <Card className="glass-card border-gold/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Droplet className="h-5 w-5 text-gold" />
                    Umm Shaif Discovery - 1958
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    ADMA struck oil at the Umm Shaif offshore field at approximately 8,755 feet depth.
                    This discovery marked a turning point in the country's history, transforming Abu Dhabi
                    from a small fishing village to a wealthy emirate with global significance.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                      <div className="text-2xl font-bold text-gold">8,755 ft</div>
                      <div className="text-xs text-slate-400">Depth</div>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                      <div className="text-2xl font-bold text-gold">ADMA</div>
                      <div className="text-xs text-slate-400">Company</div>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                      <div className="text-2xl font-bold text-gold">Offshore</div>
                      <div className="text-xs text-slate-400">Location</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Technical Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { challenge: 'Offshore Drilling', detail: 'First offshore platforms in the Gulf' },
                      { challenge: 'Extreme Depths', detail: '8,755 ft required advanced technology' },
                      { challenge: 'Desert Logistics', detail: 'Supplying remote drilling sites' },
                      { challenge: 'Marine Conditions', detail: 'Shallow Gulf waters and storms' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                        <Cog className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-slate-200">{item.challenge}</div>
                          <div className="text-xs text-slate-400">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Milestones Tab */}
        <TabsContent value="milestones" className="space-y-6">
          <GlassPanel title="Key Oil Milestones" description="Critical events in petroleum development">
            <div className="space-y-4">
              {oilMilestones.map((milestone, idx) => (
                <Card key={idx} className="glass-card border-gold/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-navy-950 font-bold text-lg shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-mono text-gold">{milestone.year}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-100 mb-1">{milestone.event}</h3>
                        <p className="text-sm text-slate-400">{milestone.detail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Oil Discovery Timeline" description="Key events in petroleum history">
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {oilEvents.sort((a, b) => {
                  const yearA = parseInt(a.date.replace(/\D/g, '')) || 0
                  const yearB = parseInt(b.date.replace(/\D/g, '')) || 0
                  return yearA - yearB
                }).map((event, idx) => (
                  <div key={idx} className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold shrink-0">
                      <Droplet className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-mono font-bold text-gold">{event.date}</span>
                        {getSignificanceBadge(event.significance)}
                      </div>
                      <h3 className="text-xl font-bold text-slate-100 mb-2">{event.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{event.description}</p>
                      {event.entities && event.entities.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {event.entities.map((entity, eIdx) => (
                            <Badge key={eIdx} variant="outline" className="text-xs border-gold/30 text-gold">{entity}</Badge>
                          ))}
                        </div>
                      )}
                      {event.outcome && (
                        <div className="mt-3 rounded-lg bg-emerald-500/10 p-2 border border-emerald-500/30">
                          <span className="text-xs text-emerald-400 font-medium">Outcome: </span>
                          <span className="text-xs text-slate-300">{event.outcome}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
