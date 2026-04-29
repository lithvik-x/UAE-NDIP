// @ts-nocheck
'use client'

import { useFederationEarlyData } from '@/lib/data-loader'
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
  Handshake,
  Building,
  MapPin,
} from 'lucide-react'
import type { HistoricalEvent } from '@/lib/data-loader'

export default function FoundingPage() {
  const { data } = useFederationEarlyData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Founding Era data...</div>
      </div>
    )
  }

  // Filter events for founding period (1971-1976)
  const foundingEvents = data.keyEvents?.filter(event => {
    const year = parseInt(event.date.replace(/\D/g, ''))
    return year >= 1971 && year <= 1976
  }) || []

  // Key founding milestones
  const foundingMilestones = [
    { date: 'December 2, 1971', event: 'UAE Federation Formation', detail: 'Six emirates declared independence and formed the UAE' },
    { date: 'December 2, 1971', event: 'Sheikh Zayed Elected President', detail: 'First President of the United Arab Emirates' },
    { date: 'February 10, 1972', event: 'Ras Al Khaimah Joins', detail: 'Seventh emirate joins completing the federation' },
    { date: '1972', event: 'Federal National Council Established', detail: 'First legislative body of the UAE' },
    { date: '1972', event: 'UAE Constitution Adopted', detail: 'Permanent constitution replacing temporary document' },
  ]

  // Key figures
  const keyFigures = [
    { name: 'Sheikh Zayed bin Sultan Al Nahyan', role: 'First President of UAE', emirate: 'Abu Dhabi' },
    { name: 'Sheikh Rashid bin Saeed Al Maktoum', role: 'Vice President & Prime Minister', emirate: 'Dubai' },
    { name: 'Sheikh Saqr bin Mohammed Al Qasimi', role: 'Ruler of Ras Al Khaimah', emirate: 'Ras Al Khaimah' },
  ]

  // Timeline data
  const timelineData = foundingEvents.map(event => ({
    date: event.date,
    title: event.title,
    significance: event.significance || 'minor',
  }))

  // Significance distribution
  const significanceData = [
    { name: 'Critical', value: foundingEvents.filter(e => e.significance === 'critical').length, color: CHART_COLORS.rose },
    { name: 'Major', value: foundingEvents.filter(e => e.significance === 'major').length, color: CHART_COLORS.gold },
    { name: 'Minor', value: foundingEvents.filter(e => e.significance === 'minor').length, color: CHART_COLORS.platinum },
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
          <Badge variant="gold" className="mb-2">H-ERA-1</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">UAE Founding Era</h1>
          <p className="mt-2 text-slate-400">
            The formation of the United Arab Emirates (1971-1976) - Nation building and federation establishment
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Flag className="h-4 w-4" />
            View Archive
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Handshake className="h-4 w-4" />
            Founding Story
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Emirates United"
          value="7"
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Founding Events"
          value={foundingEvents.length}
          icon={<Star className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Key Policies"
          value={data.policyOutcomes?.length || 0}
          icon={<Building className="h-6 w-6" />}
          gradient="platinum"
        />
        <MetricCard
          title="Credibility Score"
          value={`${data.credibility?.score || 0}%`}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="figures">Key Figures</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Founding Era Overview" description="The birth of a nation (1971-1976)">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">About This Era</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">{data.description}</p>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Event Significance</CardTitle>
                    <CardDescription>Classification of founding era events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={significanceData}
                      height={250}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Policy Outcomes</CardTitle>
                    <CardDescription>Major policies from the founding era</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-3">
                        {data.policyOutcomes?.map((policy, idx) => (
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
                  <CardTitle className="text-lg">Nation Building Milestones</CardTitle>
                  <CardDescription>Key achievements during the founding era</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {data.nationBuildingMilestones?.slice(0, 8).map((milestone, idx) => (
                      <div key={idx} className="flex items-start gap-2 rounded-lg bg-slate-800/50 p-2">
                        <div className="h-2 w-2 rounded-full bg-gold mt-1.5 shrink-0" />
                        <span className="text-sm text-slate-300">{milestone}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Founding Era Timeline" description="Key events from 1971-1976">
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {foundingEvents.sort((a, b) => {
                  const yearA = parseInt(a.date.replace(/\D/g, '')) || 0
                  const yearB = parseInt(b.date.replace(/\D/g, '')) || 0
                  return yearA - yearB
                }).map((event, idx) => (
                  <div key={idx} className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold shrink-0">
                      <Calendar className="h-6 w-6" />
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

        {/* Milestones Tab */}
        <TabsContent value="milestones" className="space-y-6">
          <GlassPanel title="Founding Milestones" description="Critical achievements in UAE's birth">
            <div className="space-y-4">
              {foundingMilestones.map((milestone, idx) => (
                <Card key={idx} className="glass-card border-gold/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-navy-950 font-bold text-lg shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-mono text-gold">{milestone.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-100 mb-1">{milestone.event}</h3>
                        <p className="text-sm text-slate-400">{milestone.detail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Entity Involvement</CardTitle>
                <CardDescription>Key entities that shaped the founding era</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {data.entityInvolvement?.map((entity, idx) => (
                    <Badge key={idx} variant="outline" className="border-gold/50 text-gold">{entity}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Key Figures Tab */}
        <TabsContent value="figures" className="space-y-6">
          <GlassPanel title="Founding Fathers" description="Key figures in the UAE's establishment">
            <div className="grid gap-6 lg:grid-cols-3">
              {keyFigures.map((figure, idx) => (
                <Card key={idx} className="glass-card border-gold/30">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-gold text-navy-950 mb-4">
                        <Crown className="h-10 w-10" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-100 mb-1">{figure.name}</h3>
                      <Badge variant="outline" className="mb-2 border-gold/50 text-gold">{figure.role}</Badge>
                      <div className="flex items-center gap-1 text-sm text-slate-400">
                        <MapPin className="h-4 w-4" />
                        {figure.emirate}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">All Involved Entities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {data.entityInvolvement?.map((entity, idx) => (
                    <Badge key={idx} variant="outline" className="border-platinum/50 text-platinum">{entity}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
