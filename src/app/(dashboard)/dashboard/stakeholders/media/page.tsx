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
  Radio,
  Tv,
  Camera,
  FileText,
} from 'lucide-react'
import {
  useStakeholderOverviewData,
  useNamaData,
  useNMCDubaiData,
  usePrAgencyData,
} from '@/lib/data-loader'
import type { StakeholderIntelligence } from '@/lib/data-loader'

export default function MediaStakeholdersPage() {
  const { data: overviewData } = useStakeholderOverviewData()
  const { data: namaData } = useNamaData()
  const { data: nmcData } = useNMCDubaiData()
  const { data: prAgencyData } = usePrAgencyData()

  const overviewStakeholders = (overviewData?.stakeholders as StakeholderIntelligence[] || []).filter(s => s.type === 'media')
  const allMediaData = [namaData, nmcData, prAgencyData].filter(Boolean) as StakeholderIntelligence[]
  const mediaEntities = overviewStakeholders.length > 0 ? overviewStakeholders : allMediaData

  if (!overviewData && allMediaData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gold-400">Loading Media Stakeholder data...</div>
      </div>
    )
  }

  // Calculate aggregate metrics
  const totalReach = mediaEntities.reduce((sum, s) => sum + (s.metrics?.digitalReach || 0), 0)
  const avgCredibility = mediaEntities.reduce((sum, s) => sum + (s.metrics?.credibility?.score || 0), 0) / Math.max(mediaEntities.length, 1)
  const avgEngagement = mediaEntities.reduce((sum, s) => sum + (s.metrics?.engagement || 0), 0) / Math.max(mediaEntities.length, 1)

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: 52, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 28, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 20, color: CHART_COLORS.rose },
  ]

  // Platform breakdown
  const platformData = [
    { name: 'Television', value: 35, color: CHART_COLORS.navy },
    { name: 'Print', value: 25, color: CHART_COLORS.gold },
    { name: 'Digital', value: 22, color: CHART_COLORS.emerald },
    { name: 'Radio', value: 10, color: CHART_COLORS.platinum },
    { name: 'News Agencies', value: 8, color: CHART_COLORS.cyan },
  ]

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  const getMediaIcon = (name: string) => {
    const lowerName = name.toLowerCase()
    if (lowerName.includes('television') || lowerName.includes('tv') || lowerName.includes('dubai media')) {
      return <Tv className="h-5 w-5" />
    }
    if (lowerName.includes('radio')) {
      return <Radio className="h-5 w-5" />
    }
    if (lowerName.includes('news agency') || lowerName.includes('wam')) {
      return <FileText className="h-5 w-5" />
    }
    return <Newspaper className="h-5 w-5" />
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">MEDIA</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Media Stakeholders</h1>
          <p className="mt-2 text-slate-400">
            Media regulatory bodies, news agencies, broadcast networks, and press organizations in the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Newspaper className="h-4 w-4" />
            View Directory
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Media Entities"
          value={mediaEntities.length || 9}
          icon={<Newspaper className="h-6 w-6" />}
          gradient="gold"
          status="info"
        />
        <MetricCard
          title="Total Reach"
          value={totalReach > 1000000 ? `${(totalReach / 1000000).toFixed(1)}M` : totalReach.toLocaleString()}
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Avg Credibility"
          value={avgCredibility.toFixed(1)}
          previousValue={avgCredibility - 2}
          icon={<Shield className="h-6 w-6" />}
          gradient="platinum"
        />
        <MetricCard
          title="Avg Engagement"
          value={avgEngagement.toFixed(1)}
          previousValue={avgEngagement - 0.1}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Media Stakeholders Overview" description="Key metrics for UAE media landscape">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Media Entity Reach</CardTitle>
                  <CardDescription>Digital reach by media organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: 'NAMA', value: 15000000, color: CHART_COLORS.gold },
                      { name: 'NMC Dubai', value: 45000000, color: CHART_COLORS.navy },
                      { name: 'WAM', value: 8500000, color: CHART_COLORS.emerald },
                      { name: 'MBC Group', value: 32000000, color: CHART_COLORS.platinum },
                      { name: 'Al Arabia', value: 18000000, color: CHART_COLORS.cyan },
                      { name: 'Sky News', value: 12000000, color: CHART_COLORS.rose },
                    ]}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Reach', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment toward media entities</CardDescription>
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
                    <CardTitle className="text-lg">Platform Breakdown</CardTitle>
                    <CardDescription>Media presence by platform type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={platformData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Media Entity Directory" description="Detailed profiles of UAE media stakeholders">
            <ScrollArea className="h-[700px]">
              <div className="space-y-4">
                {/* NAMA */}
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                          <Newspaper className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-slate-200">National Media Authority (NAMA)</CardTitle>
                          <p className="text-sm text-slate-400">هيئة الإعلام الوطني</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-yellow-500/50 text-yellow-400">Tier 1</Badge>
                        <Badge variant="warning" className="text-xs">YELLOW</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Regulatory authority overseeing all media operations in the UAE. Establishes content standards, issues penalties for violations, and maintains press freedom monitoring.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">15M</div>
                        <div className="text-xs text-slate-400">Digital Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">2.1</div>
                        <div className="text-xs text-slate-400">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-platinum-400">82</div>
                        <div className="text-xs text-slate-400">Credibility</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-navy-400">High</div>
                        <div className="text-xs text-slate-400">UAE Relevance</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <p className="text-sm font-medium text-slate-300 mb-2">Key Findings:</p>
                      <div className="space-y-1">
                        <div className="flex items-start gap-2 text-sm">
                          <Lightbulb className="h-4 w-4 text-gold-400 mt-0.5" />
                          <span className="text-slate-400">Press Freedom Index ranking: 26.91/164th globally</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <Lightbulb className="h-4 w-4 text-gold-400 mt-0.5" />
                          <span className="text-slate-400">Content penalty range: AED 5,000 - AED 1,000,000</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* NMC Dubai */}
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-500/20 text-navy-400">
                          <Tv className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-slate-200">Dubai Media Council / NMC</CardTitle>
                          <p className="text-sm text-slate-400">مجلس دبي للإعلام</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-yellow-500/50 text-yellow-400">Tier 1</Badge>
                        <Badge variant="success" className="text-xs">GREEN</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Regulatory authority for media operations in Dubai. Oversees Dubai Media City (free zone with 1,300+ companies), content certification, and influencer regulation.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">45M</div>
                        <div className="text-xs text-slate-400">Digital Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">2.1</div>
                        <div className="text-xs text-slate-400">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-platinum-400">85</div>
                        <div className="text-xs text-slate-400">Credibility</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-navy-400">Critical</div>
                        <div className="text-xs text-slate-400">UAE Relevance</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <p className="text-sm font-medium text-slate-300 mb-2">Key Programs:</p>
                      <div className="space-y-1">
                        <div className="flex items-start gap-2 text-sm">
                          <FileText className="h-4 w-4 text-navy-400 mt-0.5" />
                          <span className="text-slate-400">Dubai Media City: 1,300+ registered media companies</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <FileText className="h-4 w-4 text-navy-400 mt-0.5" />
                          <span className="text-slate-400">Creators HQ: AED 150 million fund for content creators</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WAM News Agency */}
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-slate-200">WAM News Agency</CardTitle>
                          <p className="text-sm text-slate-400">وكالة أنباء الإمارات</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs border-emerald-500/50 text-emerald-400">Tier 1</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Official UAE state news agency providing high-volume daily coverage. Acts as the primary source for government announcements and official statements.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">8.5M</div>
                        <div className="text-xs text-slate-400">Digital Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">1.8</div>
                        <div className="text-xs text-slate-400">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-platinum-400">88</div>
                        <div className="text-xs text-slate-400">Credibility</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-navy-400">High</div>
                        <div className="text-xs text-slate-400">UAE Relevance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* MBC Group */}
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-platinum-500/20 text-platinum-400">
                          <Tv className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-slate-200">MBC Group</CardTitle>
                          <p className="text-sm text-slate-400">مجموعة MBC</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs border-platinum-500/50 text-platinum-400">Tier 1</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Middle East largest broadcast group with television, radio, and digital media operations. Operates channels including MBC1, MBC2, MBC4, and Shahid streaming platform.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">32M</div>
                        <div className="text-xs text-slate-400">Digital Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">3.5</div>
                        <div className="text-xs text-slate-400">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-platinum-400">84</div>
                        <div className="text-xs text-slate-400">Credibility</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-navy-400">High</div>
                        <div className="text-xs text-slate-400">UAE Relevance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>

        {/* Platforms Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <GlassPanel title="Media Platform Analysis" description="Breakdown by media platform type">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Distribution</CardTitle>
                  <CardDescription>Media presence by platform type</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={platformData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {platformData.map((platform, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: platform.color }}
                          />
                          <span className="font-medium text-slate-200">{platform.name}</span>
                        </div>
                        <span className="text-xl font-bold text-gold-400">{platform.value}%</span>
                      </div>
                      <Progress
                        value={platform.value}
                        className="h-2"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis" description="Detailed sentiment breakdown for media entities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Aggregate Sentiment</CardTitle>
                  <CardDescription>Overall sentiment distribution across media entities</CardDescription>
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
                  <CardTitle className="text-lg">Entity Sentiment Scores</CardTitle>
                  <CardDescription>Sentiment breakdown by media organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {[
                        { name: 'NAMA', positive: 35, negative: 45, neutral: 20 },
                        { name: 'NMC Dubai', positive: 55, negative: 25, neutral: 20 },
                        { name: 'WAM', positive: 48, negative: 32, neutral: 20 },
                        { name: 'MBC Group', positive: 52, negative: 28, neutral: 20 },
                        { name: 'Al Arabia', positive: 58, negative: 22, neutral: 20 },
                        { name: 'Sky News Arabi', positive: 45, negative: 35, neutral: 20 },
                      ].map((entity, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{entity.name}</span>
                            <div className="flex items-center gap-4 text-xs">
                              <span className="text-emerald-400">+{entity.positive}%</span>
                              <span className="text-platinum-400">{entity.neutral}%</span>
                              <span className="text-rose-400">-{entity.negative}%</span>
                            </div>
                          </div>
                          <div className="flex h-2 overflow-hidden rounded-full bg-slate-700">
                            <div
                              className="bg-emerald-500"
                              style={{ width: `${entity.positive}%` }}
                            />
                            <div
                              className="bg-platinum-500"
                              style={{ width: `${entity.neutral}%` }}
                            />
                            <div
                              className="bg-rose-500"
                              style={{ width: `${entity.negative}%` }}
                            />
                          </div>
                        </div>
                      ))}
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
