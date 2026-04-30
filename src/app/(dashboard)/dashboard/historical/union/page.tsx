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
  Users as UsersIcon,
  Landmark,
} from 'lucide-react'

export default function UnionPage() {
  const { data } = useFederationEarlyData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Union & Nation Building data...</div>
      </div>
    )
  }

  // Filter union-related events
  const unionEvents = data.keyEvents?.filter(event =>
    event.title.toLowerCase().includes('federation') ||
    event.title.toLowerCase().includes('uae') ||
    event.title.toLowerCase().includes('union') ||
    event.title.toLowerCase().includes('president') ||
    event.title.toLowerCase().includes('national') ||
    event.date === 'December 2, 1971' ||
    event.date === 'February 10, 1972'
  ) || []

  // Nation building milestones
  const nationBuildingData = data.nationBuildingMilestones || []

  // Federation details
  const federationDetails = [
    { emirate: 'Abu Dhabi', ruler: 'Sheikh Zayed bin Sultan Al Nahyan', joinDate: 'December 2, 1971' },
    { emirate: 'Dubai', ruler: 'Sheikh Rashid bin Saeed Al Maktoum', joinDate: 'December 2, 1971' },
    { emirate: 'Sharjah', ruler: 'Sheikh Khalid bin Muhammad Al Qasimi', joinDate: 'December 2, 1971' },
    { emirate: 'Ajman', ruler: 'Sheikh Rashid bin Humain Al Nuaimi', joinDate: 'December 2, 1971' },
    { emirate: 'Umm Al Quwain', ruler: 'Sheikh Ahmad bin Rashid Al Mualla', joinDate: 'December 2, 1971' },
    { emirate: 'Fujairah', ruler: 'Sheikh Hamad bin Muhammad Al Sharqi', joinDate: 'December 2, 1971' },
    { emirate: 'Ras Al Khaimah', ruler: 'Sheikh Saqr bin Mohammed Al Qasimi', joinDate: 'February 10, 1972' },
  ]

  // Key achievements
  const achievements = [
    { title: 'Federal Constitution', desc: 'Permanent constitution adopted in 1972' },
    { title: 'Federal National Council', desc: 'First consultative assembly established' },
    { title: 'National Identity', desc: 'UAE passport, citizenship, and anthem created' },
    { title: 'Defense Unity', desc: 'Unified armed forces established' },
    { title: 'International Recognition', desc: 'UN membership and global diplomacy' },
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
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Union & Nation Building</h1>
          <p className="mt-2 text-slate-400">
            The formation of the UAE federation and establishment of national institutions (1971-1976)
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Flag className="h-4 w-4" />
            National Archive
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Handshake className="h-4 w-4" />
            Federation Story
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Emirates"
          value="7"
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Founding Fathers"
          value={federationDetails.length}
          icon={<Crown className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Milestones"
          value={nationBuildingData.length}
          icon={<Star className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Achievements"
          value={achievements.length}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="federation" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="federation">Federation</TabsTrigger>
          <TabsTrigger value="emirates">Emirates</TabsTrigger>
          <TabsTrigger value="institutions">Institutions</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Federation Tab */}
        <TabsContent value="federation" className="space-y-6">
          <GlassPanel title="The UAE Federation" description="Formation and foundational principles">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">About the Federation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    The United Arab Emirates was formed on December 2, 1971, when six emirates declared
                    independence and united. Ras Al Khaimah joined on February 10, 1972, completing
                    the seven-emirate federation. Sheikh Zayed bin Sultan Al Nahyan was elected the
                    nation's first President.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold text-navy-950">
                      <Flag className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gold">December 2, 1971</div>
                      <div className="text-sm text-slate-400">National Day - Federation Day</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Achievements</CardTitle>
                    <CardDescription>Foundational accomplishments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {achievements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold shrink-0">
                            <Shield className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-200">{item.title}</div>
                            <div className="text-xs text-slate-400">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Nation Building Timeline</CardTitle>
                    <CardDescription>Progress milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-2">
                        {nationBuildingData.slice(0, 10).map((milestone, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className="h-2 w-2 rounded-full bg-gold mt-1.5 shrink-0" />
                            <span className="text-slate-300">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Emirates Tab */}
        <TabsContent value="emirates" className="space-y-6">
          <GlassPanel title="Founding Emirates" description="The seven emirates that formed the UAE">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {federationDetails.map((item, idx) => (
                <Card key={idx} className="glass-card border-gold/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-navy-950 font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-100">{item.emirate}</h3>
                        <span className="text-xs text-gold font-mono">{item.joinDate}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Crown className="h-3 w-3" />
                        <span>{item.ruler}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Entity Involvement</CardTitle>
                <CardDescription>Key figures in the federation</CardDescription>
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

        {/* Institutions Tab */}
        <TabsContent value="institutions" className="space-y-6">
          <GlassPanel title="National Institutions" description="Federal institutions established">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: 'Presidency', icon: Crown, desc: 'Sheikh Zayed as first President' },
                { name: 'Federal National Council', icon: UsersIcon, desc: 'Consultative assembly' },
                { name: 'Cabinet', icon: Building, desc: 'Federal government' },
                { name: 'Supreme Council', icon: Landmark, desc: 'Rulers of all emirates' },
                { name: 'UAE Armed Forces', icon: Shield, desc: 'Unified defense' },
                { name: 'Central Bank', icon: Landmark, desc: 'Monetary authority' },
              ].map((institution, idx) => (
                <Card key={idx} className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                        <institution.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-slate-100">{institution.name}</h3>
                    </div>
                    <p className="text-xs text-slate-400">{institution.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Policy Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-3">
                    {data.policyOutcomes?.slice(0, 6).map((policy, idx) => (
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
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Union Timeline" description="Key events in federation formation">
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {unionEvents.sort((a, b) => {
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
      </Tabs>
    </div>
  )
}
