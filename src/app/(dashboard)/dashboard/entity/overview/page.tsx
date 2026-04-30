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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Building2,
  Globe,
  Hash,
  Lightbulb,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
  Crown,
  Newspaper,
  User,
  Building,
  Plane,
  Warehouse,
  Calendar,
} from 'lucide-react'
import {
  entityOverview,
  federalOfficialsData,
  royalFamilyData,
  emirateEntitiesData,
  mediaOrganizationsData,
  journalistsData,
  influencersData,
  corporateEntitiesData,
  internationalOrgsData,
  infrastructureEntitiesData,
  eventEntitiesData,
} from '@/lib/data-loader'

export default function EntityIntelligenceOverviewPage() {
  // Extract data from entityOverview
  const { totalEntities, byType, byTier } = entityOverview

  // Calculate metric values
  const federalEmirateCount = (byType.federal || 0) + (byType.emirate || 0)
  const mediaJournalistCount = (byType.media || 0) + (byType.journalist || 0)
  const corporateInfrastructureCount = (byType.corporate || 0) + (byType.infrastructure || 0)

  // Entity breakdown by type for bar chart
  const entityTypeData = [
    { name: 'Federal', value: byType.federal || 0, color: CHART_COLORS.navy },
    { name: 'Emirate', value: byType.emirate || 0, color: CHART_COLORS.gold },
    { name: 'Royal', value: byType.royal || 0, color: CHART_COLORS.platinum },
    { name: 'Media', value: byType.media || 0, color: CHART_COLORS.purple },
    { name: 'Journalist', value: byType.journalist || 0, color: CHART_COLORS.rose },
    { name: 'Influencer', value: byType.influencer || 0, color: CHART_COLORS.emerald },
    { name: 'Corporate', value: byType.corporate || 0, color: CHART_COLORS.orange },
    { name: 'International', value: byType.international || 0, color: CHART_COLORS.info },
    { name: 'Infrastructure', value: byType.infrastructure || 0, color: CHART_COLORS.teal },
    { name: 'Event', value: byType.event || 0, color: CHART_COLORS.denim },
  ]

  // Entity breakdown by tier for radar/pie chart
  const tierData = [
    { name: 'Tier 0 (Critical)', value: byTier.tier0 || 0, color: CHART_COLORS.danger },
    { name: 'Tier 1 (High)', value: byTier.tier1 || 0, color: CHART_COLORS.warning },
    { name: 'Tier 2 (Medium)', value: byTier.tier2 || 0, color: CHART_COLORS.gold },
    { name: 'Tier 3 (Standard)', value: byTier.tier3 || 0, color: CHART_COLORS.navy },
    { name: 'Tier 4 (Low)', value: byTier.tier4 || 0, color: CHART_COLORS.platinum },
  ]

  // Radar chart data
  const radarData = [
    { subject: 'Federal', tier0: 0, tier1: 0, tier2: 0, tier3: 0, tier4: 0 },
    { subject: 'Emirate', tier0: 0, tier1: 0, tier2: 0, tier3: 0, tier4: 0 },
    { subject: 'Royal', tier0: 0, tier1: 0, tier2: 0, tier3: 0, tier4: 0 },
    { subject: 'Media', tier0: 0, tier1: 0, tier2: 0, tier3: 0, tier4: 0 },
    { subject: 'Corporate', tier0: 0, tier1: 0, tier2: 0, tier3: 0, tier4: 0 },
    { subject: 'International', tier0: 0, tier1: 0, tier2: 0, tier3: 0, tier4: 0 },
    { subject: 'Infrastructure', tier0: 0, tier1: 0, tier2: 0, tier3: 0, tier4: 0 },
    { subject: 'Event', tier0: 0, tier1: 0, tier2: 0, tier3: 0, tier4: 0 },
  ]

  // Fill radar data with actual tier distribution per type
  federalOfficialsData.forEach(e => {
    const idx = radarData.findIndex(r => r.subject === 'Federal')
    if (idx !== -1 && e.tier !== undefined) radarData[idx][`tier${e.tier}` as keyof typeof radarData[0]]++
  })
  emirateEntitiesData.forEach(e => {
    const idx = radarData.findIndex(r => r.subject === 'Emirate')
    if (idx !== -1 && e.tier !== undefined) radarData[idx][`tier${e.tier}` as keyof typeof radarData[0]]++
  })
  royalFamilyData.forEach(e => {
    const idx = radarData.findIndex(r => r.subject === 'Royal')
    if (idx !== -1 && e.tier !== undefined) radarData[idx][`tier${e.tier}` as keyof typeof radarData[0]]++
  })
  mediaOrganizationsData.forEach(e => {
    const idx = radarData.findIndex(r => r.subject === 'Media')
    if (idx !== -1 && e.tier !== undefined) radarData[idx][`tier${e.tier}` as keyof typeof radarData[0]]++
  })
  corporateEntitiesData.forEach(e => {
    const idx = radarData.findIndex(r => r.subject === 'Corporate')
    if (idx !== -1 && e.tier !== undefined) radarData[idx][`tier${e.tier}` as keyof typeof radarData[0]]++
  })
  internationalOrgsData.forEach(e => {
    const idx = radarData.findIndex(r => r.subject === 'International')
    if (idx !== -1 && e.tier !== undefined) radarData[idx][`tier${e.tier}` as keyof typeof radarData[0]]++
  })
  infrastructureEntitiesData.forEach(e => {
    const idx = radarData.findIndex(r => r.subject === 'Infrastructure')
    if (idx !== -1 && e.tier !== undefined) radarData[idx][`tier${e.tier}` as keyof typeof radarData[0]]++
  })
  eventEntitiesData.forEach(e => {
    const idx = radarData.findIndex(r => r.subject === 'Event')
    if (idx !== -1 && e.tier !== undefined) radarData[idx][`tier${e.tier}` as keyof typeof radarData[0]]++
  })

  // Get key entities for table - combine top entities from all sources
  const allEntities = [
    ...federalOfficialsData,
    ...royalFamilyData,
    ...emirateEntitiesData,
    ...mediaOrganizationsData,
    ...journalistsData,
    ...influencersData,
    ...corporateEntitiesData,
    ...internationalOrgsData,
    ...infrastructureEntitiesData,
    ...eventEntitiesData,
  ]

  const keyEntities = allEntities
    .sort((a, b) => (b.uaeRelevance?.score || 0) - (a.uaeRelevance?.score || 0))
    .slice(0, 15)

  // Alert summary
  const alertSummary = entityOverview.alertSummary || { RED: 0, YELLOW: 0, GREEN: 0 }

  const getEntityIcon = (type: string) => {
    switch (type) {
      case 'federal': return <Shield className="h-4 w-4" />
      case 'emirate': return <Building2 className="h-4 w-4" />
      case 'royal': return <Crown className="h-4 w-4" />
      case 'media': return <Newspaper className="h-4 w-4" />
      case 'journalist': return <User className="h-4 w-4" />
      case 'influencer': return <Star className="h-4 w-4" />
      case 'corporate': return <Building className="h-4 w-4" />
      case 'international': return <Globe className="h-4 w-4" />
      case 'infrastructure': return <Warehouse className="h-4 w-4" />
      case 'event': return <Calendar className="h-4 w-4" />
      default: return <Hash className="h-4 w-4" />
    }
  }

  const getTierLabel = (tier: number) => {
    switch (tier) {
      case 0: return 'Tier 0'
      case 1: return 'Tier 1'
      case 2: return 'Tier 2'
      case 3: return 'Tier 3'
      case 4: return 'Tier 4'
      default: return `Tier ${tier}`
    }
  }

  const getAlertBadge = (level: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level}</Badge>
    }
  }

  const getSentimentLabel = (sentiment?: string) => {
    if (!sentiment) return 'N/A'
    return sentiment.replace(/_/g, ' ')
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">ENTITY INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Entity Intelligence</h1>
          <p className="mt-2 text-slate-400">
            Cross-entity monitoring, credibility scoring, and relationship mapping
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Users className="h-4 w-4" />
            Manage Entities
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Add Entity
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Entities"
          value={totalEntities.toLocaleString()}
          previousValue={totalEntities - 5}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Federal / Emirate"
          value={federalEmirateCount}
          previousValue={federalEmirateCount - 2}
          icon={<Shield className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Media / Journalists"
          value={mediaJournalistCount}
          previousValue={mediaJournalistCount - 3}
          icon={<Newspaper className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Corporate / Infrastructure"
          value={corporateInfrastructureCount}
          previousValue={corporateInfrastructureCount - 1}
          icon={<Building className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="breakdown" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="breakdown">Entity Breakdown</TabsTrigger>
          <TabsTrigger value="tier">Tier Distribution</TabsTrigger>
          <TabsTrigger value="keyentities">Key Entities</TabsTrigger>
          <TabsTrigger value="alerts">Alert Summary</TabsTrigger>
        </TabsList>

        {/* Entity Breakdown by Type */}
        <TabsContent value="breakdown" className="space-y-6">
          <GlassPanel title="Entity Breakdown by Type" description="Distribution of tracked entities across all categories">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Entity Count by Type</CardTitle>
                  <CardDescription>Horizontal distribution of all monitored entities</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={entityTypeData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Count', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Entity Categories</CardTitle>
                    <CardDescription>Highest count categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {entityTypeData
                        .sort((a, b) => b.value - a.value)
                        .slice(0, 5)
                        .map((type, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div
                                  className="h-3 w-3 rounded-full"
                                  style={{ backgroundColor: type.color }}
                                />
                                <span className="text-sm font-medium text-slate-200">{type.name}</span>
                              </div>
                              <span className="text-lg font-bold text-slate-200">{type.value}</span>
                            </div>
                            <Progress
                              value={(type.value / totalEntities) * 100}
                              className="h-2"
                            />
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Category Overview</CardTitle>
                    <CardDescription>Entity distribution summary</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Government Entities', value: byType.federal + byType.emirate + byType.royal, icon: Shield },
                        { label: 'Media & Journalism', value: byType.media + byType.journalist + byType.influencer, icon: Newspaper },
                        { label: 'Corporate Sector', value: byType.corporate + byType.international, icon: Building },
                        { label: 'Infrastructure & Events', value: byType.infrastructure + byType.event, icon: Warehouse },
                      ].map((category, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <category.icon className="h-5 w-5 text-gold" />
                            <span className="text-sm font-medium text-slate-200">{category.label}</span>
                          </div>
                          <span className="text-lg font-bold text-gold">{category.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Tier Distribution */}
        <TabsContent value="tier" className="space-y-6">
          <GlassPanel title="Entity Tier Distribution" description="Credibility tier allocation across all entities">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Tier Distribution</CardTitle>
                    <CardDescription>Entity count by credibility tier</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={tierData}
                      height={300}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Tier Breakdown by Entity Type</CardTitle>
                    <CardDescription>Radar analysis of tier distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadarChart
                      data={radarData}
                      metrics={[
                        { dataKey: 'tier0', name: 'Tier 0', color: CHART_COLORS.danger },
                        { dataKey: 'tier1', name: 'Tier 1', color: CHART_COLORS.warning },
                        { dataKey: 'tier2', name: 'Tier 2', color: CHART_COLORS.gold },
                        { dataKey: 'tier3', name: 'Tier 3', color: CHART_COLORS.navy },
                        { dataKey: 'tier4', name: 'Tier 4', color: CHART_COLORS.platinum },
                      ]}
                      height={300}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Tier Summary</CardTitle>
                  <CardDescription>Overview of entity credibility levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {tierData.map((tier, index) => (
                      <div
                        key={index}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center"
                      >
                        <div
                          className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${tier.color}20` }}
                        >
                          <span className="text-xl font-bold" style={{ color: tier.color }}>
                            {tier.value}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-300">{tier.name}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Entities Table */}
        <TabsContent value="keyentities" className="space-y-6">
          <GlassPanel title="Key Entities" description="Highest relevance entities across all categories">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Top Entities by Relevance</CardTitle>
                <CardDescription>Entities with highest UAE relevance scores</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-2">
                    {keyEntities.map((entity) => (
                      <div
                        key={entity.id}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                            {getEntityIcon(entity.type)}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{entity.name}</p>
                            <p className="text-sm text-slate-400">
                              {entity.nameAr || 'No Arabic name'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <Badge variant="outline" className="mb-1 capitalize">
                              {entity.type}
                            </Badge>
                            <p className="text-xs text-slate-400">Type</p>
                          </div>
                          <div className="text-center">
                            <Badge
                              variant={
                                entity.tier === 0 ? 'destructive' :
                                entity.tier === 1 ? 'warning' :
                                entity.tier === 2 ? 'default' :
                                'outline'
                              }
                              className="mb-1"
                            >
                              {getTierLabel(entity.tier)}
                            </Badge>
                            <p className="text-xs text-slate-400">Tier</p>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-gold">
                              {entity.uaeRelevance?.score || 0}
                            </div>
                            <p className="text-xs text-slate-400">Relevance</p>
                          </div>
                          <div className="text-center">
                            <div className={`text-sm font-medium ${
                              entity.sentiment?.overall && entity.sentiment.overall > 60
                                ? 'text-emerald-400'
                                : entity.sentiment?.overall && entity.sentiment.overall < 40
                                ? 'text-red-400'
                                : 'text-slate-400'
                            }`}>
                              {getSentimentLabel(entity.sentiment ? `${entity.sentiment.overall > 60 ? 'POSITIVE' : entity.sentiment.overall < 40 ? 'NEGATIVE' : 'NEUTRAL'}` : undefined)}
                            </div>
                            <p className="text-xs text-slate-400">Sentiment</p>
                          </div>
                          <div className="text-center">
                            {getAlertBadge(entity.alertLevel)}
                            <p className="mt-1 text-xs text-slate-400">Alert</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Alert Summary */}
        <TabsContent value="alerts" className="space-y-6">
          <GlassPanel title="Alert Summary" description="Current alert status across all entities">
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-3">
                <Card className="glass-card border-red-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-red-400">
                      <AlertCircle className="h-5 w-5" />
                      Red Alerts
                    </CardTitle>
                    <CardDescription>Entities requiring immediate attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-red-400">{alertSummary.RED}</div>
                    <p className="mt-2 text-sm text-slate-400">
                      {alertSummary.RED > 0 ? 'Active incidents detected' : 'No critical alerts'}
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-yellow-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-yellow-400">
                      <AlertTriangle className="h-5 w-5" />
                      Yellow Alerts
                    </CardTitle>
                    <CardDescription>Entities requiring monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-yellow-400">{alertSummary.YELLOW}</div>
                    <p className="mt-2 text-sm text-slate-400">
                      {alertSummary.YELLOW > 0 ? 'Situations developing' : 'All clear'}
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-emerald-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                      <Shield className="h-5 w-5" />
                      Green Status
                    </CardTitle>
                    <CardDescription>Entities in good standing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-emerald-400">{alertSummary.GREEN}</div>
                    <p className="mt-2 text-sm text-slate-400">
                      {Math.round((alertSummary.GREEN / totalEntities) * 100)}% of all entities
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Alert Distribution</CardTitle>
                  <CardDescription>Visual representation of alert levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Red Alerts</span>
                        <span className="font-medium text-red-400">{alertSummary.RED}</span>
                      </div>
                      <Progress
                        value={(alertSummary.RED / totalEntities) * 100}
                        className="h-3 bg-slate-700 [&>div]:bg-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Yellow Alerts</span>
                        <span className="font-medium text-yellow-400">{alertSummary.YELLOW}</span>
                      </div>
                      <Progress
                        value={(alertSummary.YELLOW / totalEntities) * 100}
                        className="h-3 bg-slate-700 [&>div]:bg-yellow-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Green Status</span>
                        <span className="font-medium text-emerald-400">{alertSummary.GREEN}</span>
                      </div>
                      <Progress
                        value={(alertSummary.GREEN / totalEntities) * 100}
                        className="h-3 bg-slate-700 [&>div]:bg-emerald-500"
                      />
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
