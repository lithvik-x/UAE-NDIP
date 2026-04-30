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
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Building,
  Landmark,
  Newspaper,
  Briefcase,
  Globe2,
  Church,
  Heart,
} from 'lucide-react'
import {
  useStakeholderOverviewData,
} from '@/lib/data-loader'
import type { StakeholderIntelligence } from '@/lib/data-loader'

export default function StakeholderOverviewPage() {
  const { data } = useStakeholderOverviewData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Stakeholder Overview data...</div>
      </div>
    )
  }

  const stakeholders = data.stakeholders as StakeholderIntelligence[]
  const totalStakeholders = data.totalStakeholders || stakeholders.length

  // Group stakeholders by type
  const governmentStakeholders = stakeholders.filter(s => s.type === 'government')
  const mediaStakeholders = stakeholders.filter(s => s.type === 'media')
  const corporateStakeholders = stakeholders.filter(s => s.type === 'corporate')
  const civilSocietyStakeholders = stakeholders.filter(s => s.type === 'civil-society')
  const internationalStakeholders = stakeholders.filter(s => s.type === 'international')

  // Calculate aggregate metrics
  const avgCredibility = stakeholders.reduce((sum, s) => sum + (s.metrics?.credibility?.score || 0), 0) / totalStakeholders
  const totalReach = stakeholders.reduce((sum, s) => sum + (s.metrics?.digitalReach || 0), 0)
  const avgSentiment = stakeholders.reduce((sum, s) => {
    const sentiment = s.metrics?.sentiment
    return sum + (sentiment?.overall || 50)
  }, 0) / totalStakeholders

  // Stakeholder type distribution
  const typeDistribution = [
    { name: 'Government', value: governmentStakeholders.length, color: CHART_COLORS.navy },
    { name: 'Media', value: mediaStakeholders.length, color: CHART_COLORS.gold },
    { name: 'Corporate', value: corporateStakeholders.length, color: CHART_COLORS.emerald },
    { name: 'Civil Society', value: civilSocietyStakeholders.length, color: CHART_COLORS.platinum },
    { name: 'International', value: internationalStakeholders.length, color: CHART_COLORS.info },
  ]

  // Alert level distribution
  const alertDistribution = [
    { name: 'RED', value: stakeholders.filter(s => s.alertLevel === 'RED').length, color: CHART_COLORS.rose },
    { name: 'YELLOW', value: stakeholders.filter(s => s.alertLevel === 'YELLOW').length, color: CHART_COLORS.gold },
    { name: 'GREEN', value: stakeholders.filter(s => s.alertLevel === 'GREEN').length, color: CHART_COLORS.emerald },
  ]

  // Credibility distribution
  const credibilityDistribution = [
    { name: 'Tier 1', value: stakeholders.filter(s => s.metrics?.credibility?.tier === 1).length, color: CHART_COLORS.gold },
    { name: 'Tier 2', value: stakeholders.filter(s => s.metrics?.credibility?.tier === 2).length, color: CHART_COLORS.platinum },
    { name: 'Tier 3', value: stakeholders.filter(s => s.metrics?.credibility?.tier === 3).length, color: CHART_COLORS.navy },
  ]

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'government': return <Landmark className="h-5 w-5" />
      case 'media': return <Newspaper className="h-5 w-5" />
      case 'corporate': return <Briefcase className="h-5 w-5" />
      case 'civil-society': return <Heart className="h-5 w-5" />
      case 'international': return <Globe2 className="h-5 w-5" />
      default: return <Building className="h-5 w-5" />
    }
  }

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case 'government': return 'navy'
      case 'media': return 'gold'
      case 'corporate': return 'emerald'
      case 'civil-society': return 'platinum'
      case 'international': return 'cyan'
      default: return 'outline'
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2">STAKEHOLDER INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum">Stakeholder Overview</h1>
          <p className="mt-2 text-slate-400">
            Comprehensive view of all UAE stakeholder entities across government, media, corporate, civil society, and international sectors
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Users className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Stakeholders"
          value={totalStakeholders}
          icon={<Users className="h-6 w-6" />}
          gradient="indigo"
          status="info"
        />
        <MetricCard
          title="Avg Credibility"
          value={avgCredibility.toFixed(1)}
          previousValue={avgCredibility - 2}
          icon={<Shield className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Total Reach"
          value={totalReach > 1000000 ? `${(totalReach / 1000000).toFixed(1)}M` : totalReach.toLocaleString()}
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Avg Sentiment"
          value={avgSentiment.toFixed(0)}
          previousValue={avgSentiment - 1}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="distribution">Distribution</TabsTrigger>
          <TabsTrigger value="all">All Stakeholders</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Stakeholder Intelligence Overview" description="Key metrics and distribution across all stakeholder categories">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Stakeholder Reach by Type</CardTitle>
                  <CardDescription>Digital reach distribution across stakeholder categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={typeDistribution}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Alert Level Distribution</CardTitle>
                    <CardDescription>Current alert status across all stakeholders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={alertDistribution}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Credibility Tier Distribution</CardTitle>
                    <CardDescription>Source credibility tier breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={credibilityDistribution}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Count', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Distribution Tab */}
        <TabsContent value="distribution" className="space-y-6">
          <GlassPanel title="Stakeholder Distribution" description="Detailed breakdown by category and type">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="glass-card border-navy-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-navy-400">
                      <Landmark className="h-5 w-5" />
                      Government
                    </CardTitle>
                    <CardDescription>{governmentStakeholders.length} stakeholders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-navy-400">{governmentStakeholders.length}</div>
                    <Progress value={(governmentStakeholders.length / totalStakeholders) * 100} className="mt-2" />
                  </CardContent>
                </Card>

                <Card className="glass-card border-gold-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-gold-400">
                      <Newspaper className="h-5 w-5" />
                      Media
                    </CardTitle>
                    <CardDescription>{mediaStakeholders.length} stakeholders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gold-400">{mediaStakeholders.length}</div>
                    <Progress value={(mediaStakeholders.length / totalStakeholders) * 100} className="mt-2" />
                  </CardContent>
                </Card>

                <Card className="glass-card border-emerald-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                      <Briefcase className="h-5 w-5" />
                      Corporate
                    </CardTitle>
                    <CardDescription>{corporateStakeholders.length} stakeholders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-emerald-400">{corporateStakeholders.length}</div>
                    <Progress value={(corporateStakeholders.length / totalStakeholders) * 100} className="mt-2" />
                  </CardContent>
                </Card>

                <Card className="glass-card border-platinum-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-platinum-400">
                      <Heart className="h-5 w-5" />
                      Civil Society
                    </CardTitle>
                    <CardDescription>{civilSocietyStakeholders.length} stakeholders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-platinum-400">{civilSocietyStakeholders.length}</div>
                    <Progress value={(civilSocietyStakeholders.length / totalStakeholders) * 100} className="mt-2" />
                  </CardContent>
                </Card>

                <Card className="glass-card border-cyan-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-cyan-400">
                      <Globe2 className="h-5 w-5" />
                      International
                    </CardTitle>
                    <CardDescription>{internationalStakeholders.length} stakeholders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-cyan-400">{internationalStakeholders.length}</div>
                    <Progress value={(internationalStakeholders.length / totalStakeholders) * 100} className="mt-2" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* All Stakeholders Tab */}
        <TabsContent value="all" className="space-y-6">
          <GlassPanel title="All Stakeholders" description="Complete list of tracked stakeholder entities">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Stakeholder Directory</CardTitle>
                <CardDescription>{totalStakeholders} entities across all categories</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px]">
                  <div className="space-y-2">
                    {stakeholders.map((stakeholder) => (
                      <div key={stakeholder.id} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                        <div className="flex items-center gap-4">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            stakeholder.type === 'government' ? 'bg-navy-500/20 text-navy-400' :
                            stakeholder.type === 'media' ? 'bg-gold-500/20 text-gold-400' :
                            stakeholder.type === 'corporate' ? 'bg-emerald-500/20 text-emerald-400' :
                            stakeholder.type === 'civil-society' ? 'bg-platinum-500/20 text-platinum-400' :
                            'bg-cyan-500/20 text-cyan-400'
                          }`}>
                            {getTypeIcon(stakeholder.type)}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{stakeholder.name}</p>
                            <p className="text-sm text-slate-400">{stakeholder.mandate?.substring(0, 80)}...</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant={getTypeBadgeVariant(stakeholder.type) as any} className="text-xs">
                            {stakeholder.type}
                          </Badge>
                          <div className="text-center">
                            <div className="text-lg font-bold text-platinum-400">
                              {stakeholder.metrics?.credibility?.score || 'N/A'}
                            </div>
                            <p className="text-xs text-slate-400">Credibility</p>
                          </div>
                          {getAlertBadge(stakeholder.alertLevel)}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Alerts Tab */}
        <TabsContent value="alerts" className="space-y-6">
          <GlassPanel title="Alert Management" description="Critical and warning alerts across stakeholder network">
            <div className="space-y-6">
              {/* RED Alerts */}
              {stakeholders.filter(s => s.alertLevel === 'RED').length > 0 && (
                <Card className="glass-card border-red-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-red-400">
                      <AlertCircle className="h-5 w-5" />
                      Red Alert Stakeholders
                    </CardTitle>
                    <CardDescription>Critical issues requiring immediate attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {stakeholders.filter(s => s.alertLevel === 'RED').map((stakeholder) => (
                        <div key={stakeholder.id} className="flex items-start justify-between rounded-lg bg-red-500/10 p-4 border border-red-500/30">
                          <div className="flex-1">
                            <p className="font-semibold text-slate-200">{stakeholder.name}</p>
                            <p className="mt-1 text-sm text-slate-400">{stakeholder.mandate?.substring(0, 100)}...</p>
                          </div>
                          <Badge variant="destructive" className="text-xs ml-4">RED</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* YELLOW Alerts */}
              {stakeholders.filter(s => s.alertLevel === 'YELLOW').length > 0 && (
                <Card className="glass-card border-yellow-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-yellow-400">
                      <AlertTriangle className="h-5 w-5" />
                      Yellow Alert Stakeholders
                    </CardTitle>
                    <CardDescription>Issues requiring monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {stakeholders.filter(s => s.alertLevel === 'YELLOW').map((stakeholder) => (
                        <div key={stakeholder.id} className="flex items-start justify-between rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30">
                          <div className="flex-1">
                            <p className="font-semibold text-slate-200">{stakeholder.name}</p>
                            <p className="mt-1 text-sm text-slate-400">{stakeholder.mandate?.substring(0, 100)}...</p>
                          </div>
                          <Badge variant="warning" className="text-xs ml-4">YELLOW</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* GREEN Alerts Summary */}
              <Card className="glass-card border-emerald-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                    <Shield className="h-5 w-5" />
                    Green Status Stakeholders
                  </CardTitle>
                  <CardDescription>Entities operating within normal parameters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {stakeholders.filter(s => s.alertLevel === 'GREEN').map((stakeholder) => (
                      <div key={stakeholder.id} className="flex items-center gap-2 rounded-lg bg-emerald-500/10 p-3 border border-emerald-500/30">
                        <Shield className="h-4 w-4 text-emerald-400" />
                        <span className="text-sm font-medium text-slate-200">{stakeholder.name}</span>
                      </div>
                    ))}
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
