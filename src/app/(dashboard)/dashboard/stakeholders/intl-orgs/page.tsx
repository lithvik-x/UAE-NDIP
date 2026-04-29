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
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  Shield,
  TrendingUp,
  Zap,
  Building,
  Globe2,
  Users,
  Landmark,
  Handshake,
} from 'lucide-react'
import {
  useStakeholderOverviewData,
  useIntlRelationsData,
} from '@/lib/data-loader'
import type { StakeholderIntelligence } from '@/lib/data-loader'

// Mock international organization data
const mockIntlOrgStakeholders: StakeholderIntelligence[] = [
  {
    id: 'intl-un',
    name: 'United Nations (UAE Presence)',
    nameAr: 'الأمم المتحدة',
    type: 'international',
    mandate: 'UN agencies operating in UAE including UNDP, UNHCR, UN Women, and UNESCO. Focus on development programs, humanitarian aid, and cultural preservation.',
    metrics: {
      digitalReach: 15000000,
      engagement: 2.8,
      sentiment: { positive: 58, negative: 22, neutral: 20, overall: 62, volume: 450000 },
      credibility: { tier: 1, score: 90, sources: 25, lastVerified: '2026-04-20' },
      programs: [
        { name: 'UNDP Programs', description: 'Sustainable development initiatives', status: 'active' },
        { name: 'UNHCR Operations', description: 'Refugee support in region', status: 'active' },
      ],
    },
    uaeRelevance: { score: 85, level: 'high', justification: 'Major development partner' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'intl-wto',
    name: 'World Trade Organization',
    nameAr: 'منظمة التجارة العالمية',
    type: 'international',
    mandate: 'WTO trade facilitation and dispute resolution services for UAE. Supports UAE\'s role as global trade hub and arbitration services.',
    metrics: {
      digitalReach: 8500000,
      engagement: 2.2,
      sentiment: { positive: 52, negative: 28, neutral: 20, overall: 55, volume: 220000 },
      credibility: { tier: 1, score: 88, sources: 20, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Trade Facilitation', description: 'Customs and trade streamlining', status: 'active' },
        { name: 'Dispute Resolution', description: 'Trade arbitration services', status: 'active' },
      ],
    },
    uaeRelevance: { score: 78, level: 'high', justification: 'Trade policy engagement' },
    alertLevel: 'YELLOW',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'intl-imf',
    name: 'International Monetary Fund',
    nameAr: 'صندوق النقد الدولي',
    type: 'international',
    mandate: 'IMF surveillance and technical assistance in UAE. Monitors economic developments and provides policy recommendations.',
    metrics: {
      digitalReach: 12000000,
      engagement: 2.5,
      sentiment: { positive: 48, negative: 32, neutral: 20, overall: 52, volume: 310000 },
      credibility: { tier: 1, score: 92, sources: 22, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Economic Surveillance', description: 'Financial sector monitoring', status: 'active' },
        { name: 'Technical Assistance', description: 'Policy capacity building', status: 'active' },
      ],
    },
    uaeRelevance: { score: 75, level: 'medium', justification: 'Economic policy advisor' },
    alertLevel: 'YELLOW',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'intl-wb',
    name: 'World Bank Group',
    nameAr: 'مجموعة البنك الدولي',
    type: 'international',
    mandate: 'World Bank financing and knowledge services in UAE. Supports infrastructure development and economic diversification projects.',
    metrics: {
      digitalReach: 9800000,
      engagement: 2.4,
      sentiment: { positive: 55, negative: 25, neutral: 20, overall: 58, volume: 280000 },
      credibility: { tier: 1, score: 91, sources: 21, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Infrastructure Financing', description: 'Major project funding', status: 'active' },
        { name: 'Knowledge Exchange', description: 'Best practice sharing', status: 'active' },
      ],
    },
    uaeRelevance: { score: 72, level: 'medium', justification: 'Development finance partner' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'intl-wto-dubai',
    name: 'WTO Dubai Office',
    nameAr: 'مكتب منظمة التجارة العالمية في دبي',
    type: 'international',
    mandate: 'Regional hub for WTO activities in Middle East. Handles trade negotiations and dispute resolution for the region.',
    metrics: {
      digitalReach: 4200000,
      engagement: 1.9,
      sentiment: { positive: 45, negative: 35, neutral: 20, overall: 48, volume: 95000 },
      credibility: { tier: 1, score: 86, sources: 15, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Regional Trade', description: 'Middle East trade facilitation', status: 'active' },
        { name: 'Training Programs', description: 'Trade policy workshops', status: 'active' },
      ],
    },
    uaeRelevance: { score: 68, level: 'medium', justification: 'Regional trade hub' },
    alertLevel: 'YELLOW',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'intl-redcross',
    name: 'International Red Cross (GCC)',
    nameAr: 'الصليب الأحمر الدولي',
    type: 'international',
    mandate: 'Regional delegation overseeing humanitarian operations across GCC. Coordinates disaster response and humanitarian aid programs.',
    metrics: {
      digitalReach: 6500000,
      engagement: 2.6,
      sentiment: { positive: 65, negative: 15, neutral: 20, overall: 70, volume: 180000 },
      credibility: { tier: 1, score: 89, sources: 18, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Humanitarian Aid', description: 'Regional relief operations', status: 'active' },
        { name: 'Disaster Response', description: 'Emergency preparedness', status: 'active' },
      ],
    },
    uaeRelevance: { score: 80, level: 'high', justification: 'Humanitarian coordination' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
]

export default function IntlOrgsStakeholdersPage() {
  const { data: overviewData } = useStakeholderOverviewData()
  const { data: intlData } = useIntlRelationsData()

  const overviewStakeholders = (overviewData?.stakeholders as StakeholderIntelligence[] || []).filter(s => s.type === 'international')
  const allIntlData = [intlData].filter(Boolean) as StakeholderIntelligence[]
  const intlOrgs = overviewStakeholders.length > 0 ? overviewStakeholders : (allIntlData.length > 0 ? allIntlData : mockIntlOrgStakeholders)

  // Calculate aggregate metrics
  const totalReach = intlOrgs.reduce((sum, s) => sum + (s.metrics?.digitalReach || 0), 0)
  const avgCredibility = intlOrgs.reduce((sum, s) => sum + (s.metrics?.credibility?.score || 0), 0) / Math.max(intlOrgs.length, 1)
  const avgEngagement = intlOrgs.reduce((sum, s) => sum + (s.metrics?.engagement || 0), 0) / Math.max(intlOrgs.length, 1)

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: 54, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 26, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 20, color: CHART_COLORS.rose },
  ]

  // Type breakdown
  const typeData = [
    { name: 'UN Agencies', value: 40, color: CHART_COLORS.navy },
    { name: 'Financial', value: 28, color: CHART_COLORS.gold },
    { name: 'Trade', value: 18, color: CHART_COLORS.emerald },
    { name: 'Humanitarian', value: 14, color: CHART_COLORS.rose },
  ]

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="cyan" className="mb-2">INTERNATIONAL</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-cyan">International Organizations</h1>
          <p className="mt-2 text-slate-400">
            UN agencies, multilateral institutions, and international bodies with presence in the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-cyan/50 text-cyan hover:bg-cyan/10">
            <Globe2 className="h-4 w-4" />
            View Directory
          </Button>
          <Button className="bg-gradient-cyan hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Organizations"
          value={intlOrgs.length}
          icon={<Globe2 className="h-6 w-6" />}
          gradient="cyan"
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
          previousValue={avgCredibility - 1.5}
          icon={<Shield className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Avg Engagement"
          value={avgEngagement.toFixed(1)}
          previousValue={avgEngagement - 0.2}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="entities">Organizations</TabsTrigger>
          <TabsTrigger value="types">Categories</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="International Organizations Overview" description="Key metrics for international bodies in UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Organization Reach</CardTitle>
                  <CardDescription>Digital reach by international organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={intlOrgs.slice(0, 6).map(s => ({
                      name: s.name.split(' ').slice(0, 2).join(' '),
                      value: s.metrics?.digitalReach || 0,
                      color: CHART_COLORS.cyan,
                    }))}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Reach', color: CHART_COLORS.cyan },
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
                    <CardDescription>Overall sentiment toward international orgs</CardDescription>
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
                    <CardTitle className="text-lg">Organization Types</CardTitle>
                    <CardDescription>Distribution by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={typeData}
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
          <GlassPanel title="International Organization Directory" description="Detailed profiles of international bodies in UAE">
            <ScrollArea className="h-[700px]">
              <div className="space-y-4">
                {intlOrgs.map((entity) => (
                  <Card key={entity.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                            <Globe2 className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-slate-200">{entity.name}</CardTitle>
                            {entity.nameAr && <p className="text-sm text-slate-400">{entity.nameAr}</p>}
                          </div>
                        </div>
                        {getAlertBadge(entity.alertLevel)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4">{entity.mandate}</p>
                      <div className="grid gap-4 sm:grid-cols-4">
                        <div className="text-center">
                          <div className="text-xl font-bold text-cyan-400">
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
                          <div className="text-xl font-bold text-navy-400">
                            {entity.uaeRelevance?.level || 'N/A'}
                          </div>
                          <div className="text-xs text-slate-400">UAE Relevance</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>

        {/* Types Tab */}
        <TabsContent value="types" className="space-y-6">
          <GlassPanel title="Organization Categories" description="Breakdown by international organization type">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Category Distribution</CardTitle>
                  <CardDescription>International presence by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={typeData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.cyan },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {typeData.map((type, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: type.color }}
                          />
                          <span className="font-medium text-slate-200">{type.name}</span>
                        </div>
                        <span className="text-xl font-bold text-cyan-400">{type.value}%</span>
                      </div>
                      <Progress
                        value={type.value}
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
          <GlassPanel title="Sentiment Analysis" description="Detailed sentiment breakdown for international organizations">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Aggregate Sentiment</CardTitle>
                  <CardDescription>Overall sentiment distribution</CardDescription>
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
                  <CardDescription>Sentiment scores by organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {intlOrgs.map((entity) => {
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
