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
  Globe,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Building,
  Landmark,
  Newspaper,
  FileText,
  CheckCircle,
} from 'lucide-react'
import {
  useStakeholderOverviewData,
  useNamaData,
  useNMCDubaiData,
  useMoiData,
  useMofaData,
  useMinistryCultureData,
  useMinistryEconomyData,
  useGcoData,
} from '@/lib/data-loader'
import type { StakeholderIntelligence } from '@/lib/data-loader'

export default function GovernmentStakeholdersPage() {
  const { data: overviewData } = useStakeholderOverviewData()
  const { data: namaData } = useNamaData()
  const { data: nmcData } = useNMCDubaiData()
  const { data: moiData } = useMoiData()
  const { data: mofaData } = useMofaData()
  const { data: cultureData } = useMinistryCultureData()
  const { data: economyData } = useMinistryEconomyData()
  const { data: gcoData } = useGcoData()

  const allGovernmentData = [namaData, nmcData, moiData, mofaData, cultureData, economyData, gcoData].filter(Boolean) as StakeholderIntelligence[]

  if (!overviewData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-navy-400">Loading Government Stakeholder data...</div>
      </div>
    )
  }

  const stakeholders = (overviewData.stakeholders as StakeholderIntelligence[]).filter(s => s.type === 'government')
  const governmentEntities = allGovernmentData.length > 0 ? allGovernmentData : stakeholders

  // Calculate aggregate metrics
  const totalReach = governmentEntities.reduce((sum, s) => sum + (s.metrics?.digitalReach || 0), 0)
  const avgCredibility = governmentEntities.reduce((sum, s) => sum + (s.metrics?.credibility?.score || 0), 0) / governmentEntities.length
  const avgEngagement = governmentEntities.reduce((sum, s) => sum + (s.metrics?.engagement || 0), 0) / governmentEntities.length

  // Sentiment distribution
  const totalPositive = governmentEntities.reduce((sum, s) => sum + (s.metrics?.sentiment?.positive || 0), 0)
  const totalNeutral = governmentEntities.reduce((sum, s) => sum + (s.metrics?.sentiment?.neutral || 0), 0)
  const totalNegative = governmentEntities.reduce((sum, s) => sum + (s.metrics?.sentiment?.negative || 0), 0)
  const sentimentData = [
    { name: 'Positive', value: totalPositive / governmentEntities.length, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: totalNeutral / governmentEntities.length, color: CHART_COLORS.platinum },
    { name: 'Negative', value: totalNegative / governmentEntities.length, color: CHART_COLORS.rose },
  ]

  // Credibility tiers
  const tier1Count = governmentEntities.filter(s => s.metrics?.credibility?.tier === 1).length
  const tier2Count = governmentEntities.filter(s => s.metrics?.credibility?.tier === 2).length
  const tier3Count = governmentEntities.filter(s => s.metrics?.credibility?.tier === 3).length

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  const getTierBadge = (tier?: number) => {
    const colors: Record<number, string> = {
      0: 'bg-red-500/20 text-red-400 border-red-500/50',
      1: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
      2: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      3: 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50',
      4: 'bg-slate-500/20 text-slate-400 border-slate-500/50',
    }
    return (
      <Badge variant="outline" className={`text-xs border ${colors[tier || 0]}`}>
        Tier {tier}
      </Badge>
    )
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="navy" className="mb-2">GOVERNMENT</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Government Stakeholders</h1>
          <p className="mt-2 text-slate-400">
            Federal ministries, regulatory authorities, and government entities shaping UAE policy and operations
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Landmark className="h-4 w-4" />
            View Directory
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Government Entities"
          value={governmentEntities.length}
          icon={<Landmark className="h-6 w-6" />}
          gradient="navy"
          status="info"
        />
        <MetricCard
          title="Total Reach"
          value={totalReach > 1000000 ? `${(totalReach / 1000000).toFixed(1)}M` : totalReach.toLocaleString()}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Avg Credibility"
          value={avgCredibility.toFixed(1)}
          previousValue={avgCredibility - 1.5}
          icon={<Shield className="h-6 w-6" />}
          gradient="platinum"
        />
        <MetricCard
          title="Avg Engagement"
          value={avgEngagement.toFixed(1)}
          previousValue={avgEngagement - 0.2}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Government Stakeholders Overview" description="Key metrics for UAE government entities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Credibility Tier Distribution</CardTitle>
                  <CardDescription>Source credibility across government entities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30 text-center">
                      <div className="text-3xl font-bold text-yellow-400">{tier1Count}</div>
                      <div className="text-sm text-slate-400">Tier 1 Sources</div>
                    </div>
                    <div className="rounded-lg bg-blue-500/10 p-4 border border-blue-500/30 text-center">
                      <div className="text-3xl font-bold text-blue-400">{tier2Count}</div>
                      <div className="text-sm text-slate-400">Tier 2 Sources</div>
                    </div>
                    <div className="rounded-lg bg-platinum-500/10 p-4 border border-platinum-500/30 text-center">
                      <div className="text-3xl font-bold text-platinum-400">{tier3Count}</div>
                      <div className="text-sm text-slate-400">Tier 3 Sources</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment toward government entities</CardDescription>
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
                    <CardTitle className="text-lg">Entity Reach</CardTitle>
                    <CardDescription>Digital reach by government entity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={governmentEntities.slice(0, 6).map(s => ({
                        name: s.name.split(' ').slice(0, 2).join(' '),
                        value: s.metrics?.digitalReach || 0,
                        color: CHART_COLORS.navy,
                      }))}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Reach', color: CHART_COLORS.navy },
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

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Government Entity Directory" description="Detailed profiles of UAE government stakeholders">
            <ScrollArea className="h-[700px]">
              <div className="space-y-4">
                {governmentEntities.map((entity) => (
                  <Card key={entity.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-500/20 text-navy-400">
                            <Landmark className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-slate-200">{entity.name}</CardTitle>
                            {entity.nameAr && <p className="text-sm text-slate-400">{entity.nameAr}</p>}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getTierBadge(entity.metrics?.credibility?.tier)}
                          {getAlertBadge(entity.alertLevel)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4">{entity.mandate}</p>
                      <div className="grid gap-4 sm:grid-cols-4">
                        <div className="text-center">
                          <div className="text-xl font-bold text-navy-400">
                            {entity.metrics?.digitalReach?.toLocaleString() || 'N/A'}
                          </div>
                          <div className="text-xs text-slate-400">Digital Reach</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-gold-400">
                            {entity.metrics?.engagement?.toFixed(1) || 'N/A'}
                          </div>
                          <div className="text-xs text-slate-400">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-platinum-400">
                            {entity.metrics?.credibility?.score || 'N/A'}
                          </div>
                          <div className="text-xs text-slate-400">Credibility</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-emerald-400">
                            {entity.uaeRelevance?.level || 'N/A'}
                          </div>
                          <div className="text-xs text-slate-400">UAE Relevance</div>
                        </div>
                      </div>
                      {entity.keyFindings && entity.keyFindings.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-700">
                          <p className="text-sm font-medium text-slate-300 mb-2">Key Findings:</p>
                          <div className="space-y-1">
                            {entity.keyFindings.slice(0, 3).map((finding, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                <Lightbulb className="h-4 w-4 text-gold-400 mt-0.5" />
                                <span className="text-slate-400">{finding.finding}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>

        {/* Programs Tab */}
        <TabsContent value="programs" className="space-y-6">
          <GlassPanel title="Government Programs & Initiatives" description="Active programs and initiatives by government entities">
            <div className="space-y-4">
              {governmentEntities.map((entity) => (
                <Card key={entity.id} className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-200">{entity.name}</CardTitle>
                    <CardDescription>{entity.mandate?.substring(0, 100)}...</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {entity.metrics?.programs && entity.metrics.programs.length > 0 ? (
                      <div className="space-y-3">
                        {entity.metrics.programs.map((program, idx) => (
                          <div key={idx} className="flex items-start justify-between rounded-lg bg-slate-800/50 p-3 border border-slate-700">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-navy-400" />
                                <span className="font-medium text-slate-200">{program.name}</span>
                              </div>
                              <p className="mt-1 text-sm text-slate-400">{program.description}</p>
                              {program.budget && (
                                <p className="mt-1 text-sm text-gold-400">Budget: AED {program.budget.toLocaleString()}</p>
                              )}
                            </div>
                            <Badge variant={program.status === 'active' ? 'success' : program.status === 'completed' ? 'default' : 'warning'} className="text-xs">
                              {program.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-slate-400 text-sm">No program data available</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis" description="Detailed sentiment breakdown for government entities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Aggregate Sentiment</CardTitle>
                  <CardDescription>Overall sentiment distribution across government entities</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sentimentData}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Entity Sentiment Breakdown</CardTitle>
                  <CardDescription>Sentiment scores by government entity</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {governmentEntities.map((entity) => {
                        const sentiment = entity.metrics?.sentiment
                        return (
                          <div key={entity.id} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-slate-200">{entity.name}</span>
                              <div className="flex items-center gap-4 text-xs">
                                <span className="text-emerald-400">+{sentiment?.positive || 0}%</span>
                                <span className="text-platinum-400">{sentiment?.neutral || 0}%</span>
                                <span className="text-rose-400">-{sentiment?.negative || 0}%</span>
                              </div>
                            </div>
                            <div className="flex h-2 overflow-hidden rounded-full bg-slate-700">
                              <div
                                className="bg-emerald-500"
                                style={{ width: `${sentiment?.positive || 0}%` }}
                              />
                              <div
                                className="bg-platinum-500"
                                style={{ width: `${sentiment?.neutral || 0}%` }}
                              />
                              <div
                                className="bg-rose-500"
                                style={{ width: `${sentiment?.negative || 0}%` }}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
