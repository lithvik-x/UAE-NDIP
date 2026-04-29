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
  Building,
  TrendingUp as GrowthIcon,
  Plane,
  Ship,
  Train,
} from 'lucide-react'

export default function ExpansionPage() {
  const { data } = useFederationEarlyData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Expansion Era data...</div>
      </div>
    )
  }

  // Filter events for expansion period (1976-1990)
  const expansionEvents = data.keyEvents?.filter(event => {
    const year = parseInt(event.date.replace(/\D/g, ''))
    return year >= 1976 && year <= 1990
  }) || []

  // Infrastructure achievements
  const infrastructureData = [
    { name: 'Jebel Ali Port', year: '1979', type: 'maritime', impact: 'Major free trade hub' },
    { name: 'Jebel Ali Free Zone', year: '1985', type: 'economic', impact: 'Global trade destination' },
    { name: 'Emirates Airline', year: '1985', type: 'aviation', impact: 'International connectivity' },
    { name: 'Dubai World Trade Center', year: '1979', type: 'economic', impact: 'Business events hub' },
  ]

  // Economic indicators
  const economicData = [
    { year: '1975', gdp: 15.4, oilRevenue: 8.2, nonOil: 7.2 },
    { year: '1980', gdp: 34.2, oilRevenue: 20.1, nonOil: 14.1 },
    { year: '1985', gdp: 27.8, oilRevenue: 14.3, nonOil: 13.5 },
    { year: '1990', gdp: 50.4, oilRevenue: 22.8, nonOil: 27.6 },
  ]

  // Growth metrics
  const growthMetrics = [
    { label: 'GDP Growth (1975-1990)', value: '227%', trend: 'up' },
    { label: 'Non-Oil Sector Growth', value: '283%', trend: 'up' },
    { label: 'Population Growth', value: '156%', trend: 'up' },
    { label: 'Trade Volume Growth', value: '412%', trend: 'up' },
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
          <Badge variant="gold" className="mb-2">H-ERA-2</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Expansion Era</h1>
          <p className="mt-2 text-slate-400">
            Rapid development and infrastructure growth (1976-1990) - Building the modern UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <GrowthIcon className="h-4 w-4" />
            Economic Reports
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Building className="h-4 w-4" />
            Infrastructure
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="GDP Growth"
          value="227%"
          previousValue={100}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Key Infrastructure"
          value={infrastructureData.length}
          icon={<Building className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Expansion Events"
          value={expansionEvents.length}
          icon={<Star className="h-6 w-6" />}
          gradient="platinum"
        />
        <MetricCard
          title="Non-Oil Growth"
          value="283%"
          previousValue={100}
          icon={<GrowthIcon className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="economy">Economy</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Expansion Era Overview" description="Building the modern UAE (1976-1990)">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">About This Era</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    The Expansion Era marked a period of unprecedented growth and infrastructure development in the UAE.
                    Following the founding years, the nation invested heavily in economic diversification, building
                    world-class ports, airlines, and trade infrastructure. This era established the foundations
                    for the UAE's position as a global trade and logistics hub.
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Growth Metrics</CardTitle>
                    <CardDescription>Key economic indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {growthMetrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm font-medium text-slate-200">{metric.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-emerald-400">{metric.value}</span>
                            {metric.trend === 'up' && <TrendingUp className="h-4 w-4 text-emerald-400" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Policy Outcomes</CardTitle>
                    <CardDescription>Major policies from the expansion era</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-3">
                        {data.policyOutcomes?.filter(p => {
                          const year = parseInt(p.year)
                          return year >= 1976 && year <= 1990
                        }).map((policy, idx) => (
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
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Infrastructure Tab */}
        <TabsContent value="infrastructure" className="space-y-6">
          <GlassPanel title="Infrastructure Development" description="World-class projects built during expansion">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {infrastructureData.map((item, idx) => (
                <Card key={idx} className="glass-card border-gold/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                        {item.type === 'maritime' && <Ship className="h-5 w-5" />}
                        {item.type === 'aviation' && <Plane className="h-5 w-5" />}
                        {item.type === 'economic' && <Building className="h-5 w-5" />}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-gold">{item.year}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-100 mb-1">{item.name}</h3>
                    <p className="text-xs text-slate-400">{item.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Major Projects Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <div className="relative border-l-2 border-gold/30 ml-4 space-y-6">
                    {infrastructureData.sort((a, b) => parseInt(a.year) - parseInt(b.year)).map((item, idx) => (
                      <div key={idx} className="relative pl-8">
                        <div className="absolute left-[-37px] h-4 w-4 rounded-full bg-gold border-2 border-navy-900" />
                        <span className="text-sm font-mono text-gold">{item.year}</span>
                        <h4 className="text-lg font-bold text-slate-100">{item.name}</h4>
                        <p className="text-sm text-slate-400">{item.impact}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Economy Tab */}
        <TabsContent value="economy" className="space-y-6">
          <GlassPanel title="Economic Performance" description="GDP and revenue growth 1975-1990">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">GDP Growth (USD Billions)</CardTitle>
                  <CardDescription>Economic expansion during the era</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={economicData}
                    xAxisKey="year"
                    lines={[
                      { dataKey: 'gdp', name: 'Total GDP', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Oil vs Non-Oil Revenue</CardTitle>
                  <CardDescription>Economic diversification progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={economicData}
                    xAxisKey="year"
                    areas={[
                      { dataKey: 'oilRevenue', name: 'Oil Revenue', color: CHART_COLORS.navy },
                      { dataKey: 'nonOil', name: 'Non-Oil', color: CHART_COLORS.emerald },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-gold mb-1">$50.4B</div>
                    <div className="text-sm text-slate-400">1990 GDP</div>
                    <Progress value={100} className="mt-2 h-2" />
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">55%</div>
                    <div className="text-sm text-slate-400">Non-Oil Share (1990)</div>
                    <Progress value={55} className="mt-2 h-2" />
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-navy-400 mb-1">45%</div>
                    <div className="text-sm text-slate-400">Oil Share (1990)</div>
                    <Progress value={45} className="mt-2 h-2" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Expansion Era Timeline" description="Key events from 1976-1990">
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {expansionEvents.sort((a, b) => {
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
