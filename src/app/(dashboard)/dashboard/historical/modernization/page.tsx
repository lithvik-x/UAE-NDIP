// @ts-nocheck
'use client'

import { useModernizationVisionData, useRapidDevelopmentData } from '@/lib/data-loader'
import { useState } from 'react'
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
  Rocket,
  Handshake,
  Brain,
  Sun,
  Users as UsersIcon,
  Target,
  Building,
  Construction,
  Coins,
  TrendingDown,
  Phone,
  Plane,
} from 'lucide-react'

export default function ModernizationPage() {
  const [selectedEra, setSelectedEra] = useState<'rapid' | 'modernization'>('modernization')
  const { data: modernizationData } = useModernizationVisionData()
  const { data: rapidData } = useRapidDevelopmentData()

  const isRapidDevelopment = selectedEra === 'rapid'
  const data = isRapidDevelopment ? rapidData : modernizationData

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading {isRapidDevelopment ? 'Rapid Development' : 'Modernization'} Era data...</div>
      </div>
    )
  }

  // Key modernization achievements
  const achievements = [
    { title: 'UAE Vision 2021', desc: 'National strategic framework', icon: Target },
    { title: 'Hope Mars Mission', desc: 'First Arab mission to Mars', icon: Rocket },
    { title: 'AI Strategy 2031', desc: 'World\'s first AI minister', icon: Brain },
    { title: 'Abraham Accords', desc: 'Historic peace agreements', icon: Handshake },
    { title: 'Happiness Ministry', desc: 'World-first ministerial role', icon: Sun },
    { title: 'Tolerance Initiative', desc: 'Global tolerance leadership', icon: Globe },
  ]

  // Key figures
  const keyFigures = [
    { name: 'Sheikh Mohammed bin Rashid Al Maktoum', role: 'Vision 2021 Architect', entity: 'UAE' },
    { name: 'Ohood bint Khalfan Al Roumi', role: 'Minister of Happiness', entity: 'UAE' },
    { name: 'Sheikh Abdullah bin Zayed Al Nahyan', role: 'Foreign Minister', entity: 'UAE' },
  ]

  // Timeline events
  const timelineData = data.keyEvents?.sort((a, b) => {
    const yearA = parseInt(a.date.replace(/\D/g, '')) || 0
    const yearB = parseInt(b.date.replace(/\D/g, '')) || 0
    return yearA - yearB
  }) || []

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
      {/* Era Selector Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex gap-2 mb-3">
            <Button
              variant={isRapidDevelopment ? 'default' : 'outline'}
              className={isRapidDevelopment ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'border-gold/50 text-gold'}
              onClick={() => setSelectedEra('rapid')}
            >
              <Construction className="h-4 w-4 mr-2" />
              Rapid Development (2000-2010)
            </Button>
            <Button
              variant={!isRapidDevelopment ? 'default' : 'outline'}
              className={!isRapidDevelopment ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'border-gold/50 text-gold'}
              onClick={() => setSelectedEra('modernization')}
            >
              <Rocket className="h-4 w-4 mr-2" />
              Modernization (2015-2020)
            </Button>
          </div>
          <Badge variant="gold" className="mb-2">H-ERA-{isRapidDevelopment ? '8-4' : '6'}</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">
            {isRapidDevelopment ? 'Rapid Development Era' : 'Modernization Era'}
          </h1>
          <p className="mt-2 text-slate-400">
            {isRapidDevelopment
              ? 'Dubai construction boom, iconic landmarks, and financial crisis (2000-2010)'
              : "Strategic vision, innovation, and global leadership (2015-2020)"}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Rocket className="h-4 w-4" />
            {isRapidDevelopment ? 'Development Reports' : 'Innovation Reports'}
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Brain className="h-4 w-4" />
            {isRapidDevelopment ? 'Vision 2021' : 'Future Vision'}
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {isRapidDevelopment ? (
          <>
            <MetricCard
              title="Burj Khalifa Height"
              value="829.8m"
              icon={<Building className="h-6 w-6" />}
              gradient="gold"
              status="success"
            />
            <MetricCard
              title="Palm Sand Volume"
              value="94M m³"
              icon={<Construction className="h-6 w-6" />}
              gradient="emerald"
            />
            <MetricCard
              title="Dubai Metro Cost"
              value="$4.2B"
              icon={<TrendingUp className="h-6 w-6" />}
              gradient="platinum"
            />
            <MetricCard
              title="Debt Crisis"
              value="$26B"
              icon={<Coins className="h-6 w-6" />}
              gradient="navy"
              status="warning"
            />
          </>
        ) : (
          <>
            <MetricCard
              title="Key Events"
              value={data.keyEvents?.length || 0}
              icon={<Star className="h-6 w-6" />}
              gradient="gold"
              status="success"
            />
            <MetricCard
              title="Achievements"
              value={achievements.length}
              icon={<Target className="h-6 w-6" />}
              gradient="navy"
            />
            <MetricCard
              title="Milestones"
              value={data.nationBuildingMilestones?.length || 0}
              icon={<TrendingUp className="h-6 w-6" />}
              gradient="platinum"
            />
            <MetricCard
              title="Credibility"
              value={`${data.credibility?.score || 0}%`}
              icon={<Shield className="h-6 w-6" />}
              gradient="emerald"
            />
          </>
        )}
      </div>

      {isRapidDevelopment ? (
        <Tabs defaultValue="construction" className="space-y-6">
          <TabsList className="glass-panel" scrollable>
            <TabsTrigger value="construction">Construction</TabsTrigger>
            <TabsTrigger value="crisis">Debt Crisis</TabsTrigger>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          {/* Construction Tab */}
          <TabsContent value="construction" className="space-y-6">
            <GlassPanel title="Construction Giants" description="Palm Jumeirah and Burj Khalifa">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-emerald-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Construction className="h-5 w-5 text-emerald-400" />
                      Palm Jumeirah
                    </CardTitle>
                    <CardDescription>World's largest artificial island (2001)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Sand Used</span>
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">94 million m³</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Rock Used</span>
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">7 million tons</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Breakwater</span>
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">11 km crescent</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Subsea Tunnel</span>
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">1.4 km at 25m depth</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Contractors</span>
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">Van Oord & Jan De Nul</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Building className="h-5 w-5 text-gold" />
                      Burj Khalifa
                    </CardTitle>
                    <CardDescription>World's tallest building (opened 2010)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Height</span>
                        <Badge variant="outline" className="border-gold/50 text-gold">829.8m tip / 828m arch</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Floors</span>
                        <Badge variant="outline" className="border-gold/50 text-gold">154 + 9 maintenance</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Cost</span>
                        <Badge variant="outline" className="border-gold/50 text-gold">$1.5 billion</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Man-hours</span>
                        <Badge variant="outline" className="border-gold/50 text-gold">22 million</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Concrete Used</span>
                        <Badge variant="outline" className="border-gold/50 text-gold">330,000 m³</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Debt Crisis Tab */}
          <TabsContent value="crisis" className="space-y-6">
            <GlassPanel title="Dubai World Debt Crisis" description="$26B debt restructuring (November 2009)">
              <div className="space-y-6">
                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                      Crisis Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 rounded-lg bg-red-500/10 border border-red-500/30 p-3">
                        <Badge variant="destructive" className="shrink-0">Nov 25, 2009</Badge>
                        <span className="text-sm text-slate-300">Dubai World requested restructuring of $26B debts</span>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                        <Badge variant="outline" className="shrink-0">Dec 2009</Badge>
                        <span className="text-sm text-slate-300">Abu Dhabi provided $10B initial bailout ($20B total)</span>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                        <Badge variant="outline" className="shrink-0">Mar 2010</Badge>
                        <span className="text-sm text-slate-300">Dubai World laid out restructuring plans</span>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                        <Badge variant="outline" className="shrink-0">Oct 2010</Badge>
                        <span className="text-sm text-slate-300">Dubai World signed last investor to $23B restructuring</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-amber-500/20">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Coins className="h-5 w-5 text-amber-400" />
                        Abu Dhabi Bailout
                      </CardTitle>
                      <CardDescription>Inter-emirate solidarity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm font-medium text-slate-200">Initial Bailout</span>
                          <Badge variant="outline" className="border-amber-500/50 text-amber-400">$10B</Badge>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm font-medium text-slate-200">Total Support</span>
                          <Badge variant="outline" className="border-amber-500/50 text-amber-400">$20B</Badge>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm font-medium text-slate-200">To Nakheel</span>
                          <Badge variant="outline" className="border-amber-500/50 text-amber-400">$4.1B</Badge>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm font-medium text-slate-200">To Dubai World</span>
                          <Badge variant="outline" className="border-amber-500/50 text-amber-400">$5.9B</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-platinum-500/20">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingDown className="h-5 w-5 text-platinum-400" />
                        Property Market Collapse
                      </CardTitle>
                      <CardDescription>2008-2009 correction</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center p-4 rounded-lg bg-slate-800/50">
                          <div className="text-3xl font-bold text-platinum-400">-40% to -60%</div>
                          <div className="text-sm text-slate-400">Property price decline from 2008 peak</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-slate-800/50">
                          <div className="text-3xl font-bold text-platinum-400">-40%</div>
                          <div className="text-sm text-slate-400">Q1 2009 alone</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Infrastructure Tab */}
          <TabsContent value="infrastructure" className="space-y-6">
            <GlassPanel title="Infrastructure & Reform" description="Metro, telecom liberalization, and regional leadership">
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card border-cyan-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Phone className="h-5 w-5 text-cyan-400" />
                      Telecom Liberalization
                    </CardTitle>
                    <CardDescription>du breaks Etisalat monopoly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">du Launch</span>
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">February 2007</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Market Share Target</span>
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">30% in 3 years</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Etisalat Monopoly</span>
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">30 years broken</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-rose-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Plane className="h-5 w-5 text-rose-400" />
                      UAE Support for Iraq War
                    </CardTitle>
                    <CardDescription>2003 regional leadership</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Economic Assistance</span>
                        <Badge variant="outline" className="border-rose-500/50 text-rose-400">$215 million</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Iraq Debt Cancelled</span>
                        <Badge variant="outline" className="border-rose-500/50 text-rose-400">~$7 billion</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-violet-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-violet-400" />
                      Dubai Metro
                    </CardTitle>
                    <CardDescription>First metro in Gulf Arab states</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Red Line Opening</span>
                        <Badge variant="outline" className="border-violet-500/50 text-violet-400">September 2009</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Project Cost</span>
                        <Badge variant="outline" className="border-violet-500/50 text-violet-400">$4.2 billion</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm font-medium text-slate-200">Network Length</span>
                        <Badge variant="outline" className="border-violet-500/50 text-violet-400">75 km / 47 stations</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Rapid Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <GlassPanel title="Rapid Development Timeline" description="Key events from 2000-2010">
              <ScrollArea className="h-[600px]">
                <div className="space-y-4">
                  {timelineData.map((event, idx) => (
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
      ) : (
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="glass-panel" scrollable>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="vision">Vision 2021</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Modernization Era Overview" description="A decade of transformation (2015-2020)">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">About This Era</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    {data.description}
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Achievements</CardTitle>
                    <CardDescription>Major accomplishments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {achievements.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold shrink-0">
                            <item.icon className="h-4 w-4" />
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
                    <CardTitle className="text-lg">Policy Outcomes</CardTitle>
                    <CardDescription>Major strategic policies</CardDescription>
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
                  <CardTitle className="text-lg">Entity Involvement</CardTitle>
                  <CardDescription>Key organizations and figures</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {data.entityInvolvement?.map((entity, idx) => (
                      <Badge key={idx} variant="outline" className="border-gold/50 text-gold">{entity}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-6">
          <GlassPanel title="Major Achievements" description="Transformative accomplishments of the era">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((item, idx) => (
                <Card key={idx} className="glass-card border-gold/30">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold text-navy-950 mb-3">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-100 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-gold" />
                  Hope Mars Mission - February 9, 2021
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed mb-4">
                  The Emirates Mars Mission successfully entered Mars orbit on first attempt.
                  Also known as the Hope Probe, this mission marked the Arab world&apos;s first
                  Mars mission and was extended to continue scientific observations until 2028.
                </p>
                <div className="grid gap-4 sm:grid-cols-4">
                  <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                    <div className="text-2xl font-bold text-gold">600M km</div>
                    <div className="text-xs text-slate-400">Journey Distance</div>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                    <div className="text-2xl font-bold text-gold">6 years</div>
                    <div className="text-xs text-slate-400">Development Time</div>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                    <div className="text-2xl font-bold text-gold">1st Attempt</div>
                    <div className="text-xs text-slate-400">Mars Orbit Success</div>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                    <div className="text-2xl font-bold text-gold">2028</div>
                    <div className="text-xs text-slate-400">Mission Extension</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Vision 2021 Tab */}
        <TabsContent value="vision" className="space-y-6">
          <GlassPanel title="UAE Vision 2021" description="National strategic framework">
            <div className="space-y-6">
              <Card className="glass-card border-gold/30">
                <CardHeader>
                  <CardTitle className="text-lg">Vision 2021 Pillars</CardTitle>
                  <CardDescription>Four pillars of national development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { pillar: 'United in Responsibility', icon: UsersIcon },
                      { pillar: 'United in Destiny', icon: Globe },
                      { pillar: 'United in Knowledge', icon: Brain },
                      { pillar: 'United in Prosperity', icon: TrendingUp },
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center rounded-lg bg-slate-800/50 p-4 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold mb-2">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <span className="font-medium text-slate-200">{item.pillar}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Nation Building Milestones</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {data.nationBuildingMilestones?.map((milestone, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-gold mt-1.5 shrink-0" />
                          <span className="text-slate-300">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">AI Strategy 2031</CardTitle>
                  <CardDescription>UAE as global AI leader</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                      <span className="text-sm font-medium text-slate-200">AI Minister Appointment</span>
                      <Badge variant="outline" className="border-gold/50 text-gold">World First</Badge>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                      <span className="text-sm font-medium text-slate-200">Nine Priority Sectors</span>
                      <Badge variant="outline" className="border-gold/50 text-gold">Identified</Badge>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                      <span className="text-sm font-medium text-slate-200">Economic Target</span>
                      <Badge variant="outline" className="border-gold/50 text-gold">AED 335-352B</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Modernization Timeline" description="Key events from 2015-2020">
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {timelineData.map((event, idx) => (
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
        )}
    </div>
  )
}
