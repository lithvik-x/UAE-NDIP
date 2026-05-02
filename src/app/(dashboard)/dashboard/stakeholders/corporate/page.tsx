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
  Briefcase,
  DollarSign,
  TrendingDown,
  Factory,
  Cpu,
} from 'lucide-react'
import {
  useStakeholderOverviewData,
} from '@/lib/data-loader'
import type { StakeholderIntelligence } from '@/lib/data-loader'

// Mock corporate stakeholder data for demonstration
const mockCorporateStakeholders: StakeholderIntelligence[] = [
  {
    id: 'corp-emirates',
    name: 'Emirates Group',
    nameAr: 'مجموعة الإمارات',
    type: 'corporate',
    mandate: 'Aviation and travel conglomerate including Emirates Airlines, Emirates Skywards, and Dnata. Largest airline in the Middle East with over 140 aircraft.',
    metrics: {
      digitalReach: 25000000,
      engagement: 4.2,
      sentiment: { positive: 68, negative: 12, neutral: 20, overall: 72, volume: 850000 },
      credibility: { tier: 1, score: 88, sources: 18, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Emirates Skywards', description: 'Frequent flyer program with 20M+ members', status: 'active' },
        { name: 'Dnata Operations', description: 'Airport services across 80+ airports', status: 'active' },
      ],
    },
    uaeRelevance: { score: 95, level: 'critical', justification: 'National airline and tourism flagship' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'corp-etihad',
    name: 'Etihad Airways',
    nameAr: 'الاتحاد للطيران',
    type: 'corporate',
    mandate: 'National airline of Abu Dhabi and premium aviation brand. Part of Abu Dhabi holding company with equity stakes in multiple airlines.',
    metrics: {
      digitalReach: 12000000,
      engagement: 3.8,
      sentiment: { positive: 62, negative: 15, neutral: 23, overall: 68, volume: 420000 },
      credibility: { tier: 1, score: 85, sources: 15, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Etihad Guest', description: 'Loyalty program with 5M+ members', status: 'active' },
        { name: 'Etihad Cargo', description: 'Freight services across 70+ destinations', status: 'active' },
      ],
    },
    uaeRelevance: { score: 90, level: 'critical', justification: 'Abu Dhabi national carrier' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'corp-adnoc',
    name: 'ADNOC',
    nameAr: 'أدنوك',
    type: 'corporate',
    mandate: 'Abu Dhabi National Oil Company - one of the world\'s largest oil and gas companies. Government-owned entity managing UAE oil reserves.',
    metrics: {
      digitalReach: 8500000,
      engagement: 3.5,
      sentiment: { positive: 55, negative: 25, neutral: 20, overall: 60, volume: 320000 },
      credibility: { tier: 1, score: 90, sources: 22, lastVerified: '2026-04-20' },
      programs: [
        { name: 'ADNOC Distribution', description: 'Fuel retail network across UAE', status: 'active' },
        { name: 'Masdar Initiative', description: 'Renewable energy investments', status: 'active' },
      ],
    },
    uaeRelevance: { score: 98, level: 'critical', justification: 'Core to UAE economy and energy security' },
    alertLevel: 'YELLOW',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'corp-mubadala',
    name: 'Mubadala Investment Company',
    nameAr: 'شركة Mubadala للاستثمار',
    type: 'corporate',
    mandate: 'Abu Dhabi sovereign wealth fund managing $300B+ in assets. Strategic investments in technology, aerospace, healthcare, and real estate globally.',
    metrics: {
      digitalReach: 4500000,
      engagement: 2.9,
      sentiment: { positive: 58, negative: 18, neutral: 24, overall: 65, volume: 180000 },
      credibility: { tier: 1, score: 92, sources: 16, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Mubadala Ventures', description: 'Global venture capital investments', status: 'active' },
        { name: 'CiviTech Investments', description: 'Healthcare and biotech portfolio', status: 'active' },
      ],
    },
    uaeRelevance: { score: 94, level: 'high', justification: 'Major SWF and tech investor' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'corp-eala',
    name: 'EALA (Emirates Air Line)',
    nameAr: 'خط الإمارات الجوي',
    type: 'corporate',
    mandate: 'Dubai-based airline operating passenger and cargo services. Major component of Dubai aviation hub strategy.',
    metrics: {
      digitalReach: 6800000,
      engagement: 3.2,
      sentiment: { positive: 60, negative: 20, neutral: 20, overall: 65, volume: 240000 },
      credibility: { tier: 1, score: 84, sources: 12, lastVerified: '2026-04-20' },
      programs: [],
    },
    uaeRelevance: { score: 85, level: 'high', justification: 'Dubai aviation sector' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'corp-aldar',
    name: 'Aldar Properties',
    nameAr: 'الدار العقارية',
    type: 'corporate',
    mandate: 'Abu Dhabi\'s largest real estate development company. Key player in Abu Dhabi\'s urban development and property market.',
    metrics: {
      digitalReach: 3200000,
      engagement: 2.8,
      sentiment: { positive: 52, negative: 22, neutral: 26, overall: 58, volume: 120000 },
      credibility: { tier: 2, score: 80, sources: 10, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Yas Island Development', description: 'Major entertainment destination', status: 'active' },
        { name: 'Saadiyat Grove', description: 'Luxury residential project', status: 'active' },
      ],
    },
    uaeRelevance: { score: 78, level: 'medium', justification: 'Key Abu Dhabi real estate' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
]

export default function CorporateStakeholdersPage() {
  const { data: overviewData } = useStakeholderOverviewData()

  // Filter corporate stakeholders from overview or use mock data
  const overviewStakeholders = (overviewData?.stakeholders as StakeholderIntelligence[] || []).filter(s => s.type === 'corporate')
  const corporateEntities = overviewStakeholders.length > 0 ? overviewStakeholders : mockCorporateStakeholders

  // Calculate aggregate metrics
  const totalReach = corporateEntities.reduce((sum, s) => sum + (s.metrics?.digitalReach || 0), 0)
  const avgCredibility = corporateEntities.reduce((sum, s) => sum + (s.metrics?.credibility?.score || 0), 0) / corporateEntities.length
  const avgEngagement = corporateEntities.reduce((sum, s) => sum + (s.metrics?.engagement || 0), 0) / corporateEntities.length

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: 58, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 24, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 18, color: CHART_COLORS.rose },
  ]

  // Sector breakdown
  const sectorData = [
    { name: 'Aviation', value: 45, color: CHART_COLORS.navy },
    { name: 'Energy', value: 25, color: CHART_COLORS.gold },
    { name: 'Finance', value: 15, color: CHART_COLORS.emerald },
    { name: 'Real Estate', value: 10, color: CHART_COLORS.platinum },
    { name: 'Technology', value: 5, color: CHART_COLORS.info },
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
          <Badge variant="emerald" className="mb-2">CORPORATE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-emerald-500">Corporate Stakeholders</h1>
          <p className="mt-2 text-platinum-400">
            Major corporations, sovereign wealth funds, and private sector entities driving UAE economic growth
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10">
            <Briefcase className="h-4 w-4" />
            View Directory
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Corporate Entities"
          value={corporateEntities.length}
          icon={<Building className="h-6 w-6" />}
          gradient="emerald"
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
          previousValue={avgCredibility - 1.2}
          icon={<Shield className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Avg Engagement"
          value={avgEngagement.toFixed(1)}
          previousValue={avgEngagement - 0.3}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="denim"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Corporate Stakeholders Overview" description="Key metrics for UAE corporate sector">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Reach Distribution</CardTitle>
                  <CardDescription>Digital reach by corporate entity</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={corporateEntities.slice(0, 6).map(s => ({
                      name: s.name.split(' ').slice(0, 2).join(' '),
                      value: s.metrics?.digitalReach || 0,
                      color: CHART_COLORS.emerald,
                    }))}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Reach', color: CHART_COLORS.emerald },
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
                    <CardDescription>Overall sentiment toward corporate entities</CardDescription>
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
                    <CardTitle className="text-lg">Sector Breakdown</CardTitle>
                    <CardDescription>Corporate presence by industry sector</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sectorData}
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
          <GlassPanel title="Corporate Entity Directory" description="Detailed profiles of UAE corporate stakeholders">
            <ScrollArea className="h-[700px]">
              <div className="space-y-4">
                {corporateEntities.map((entity) => (
                  <Card key={entity.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                            <Briefcase className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-platinum-200">{entity.name}</CardTitle>
                            {entity.nameAr && <p className="text-sm text-platinum-400">{entity.nameAr}</p>}
                          </div>
                        </div>
                        {getAlertBadge(entity.alertLevel)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-platinum-300 mb-4">{entity.mandate}</p>
                      <div className="grid gap-4 sm:grid-cols-4">
                        <div className="text-center">
                          <div className="text-xl font-bold text-emerald-400">
                            {entity.metrics?.digitalReach?.toLocaleString() || 'N/A'}
                          </div>
                          <div className="text-xs text-platinum-400">Digital Reach</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-gold-400">
                            {entity.metrics?.engagement?.toFixed(1) || 'N/A'}
                          </div>
                          <div className="text-xs text-platinum-400">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-platinum-400">
                            {entity.metrics?.credibility?.score || 'N/A'}
                          </div>
                          <div className="text-xs text-platinum-400">Credibility</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-navy-400">
                            {entity.uaeRelevance?.level || 'N/A'}
                          </div>
                          <div className="text-xs text-platinum-400">UAE Relevance</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>

        {/* Sectors Tab */}
        <TabsContent value="sectors" className="space-y-6">
          <GlassPanel title="Corporate Sector Analysis" description="Breakdown by industry vertical">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sector Contribution</CardTitle>
                  <CardDescription>Corporate presence by industry</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sectorData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.emerald },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sectorData.map((sector, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: sector.color }}
                          />
                          <span className="font-medium text-platinum-200">{sector.name}</span>
                        </div>
                        <span className="text-xl font-bold text-emerald-400">{sector.value}%</span>
                      </div>
                      <Progress
                        value={sector.value}
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
          <GlassPanel title="Sentiment Analysis" description="Detailed sentiment breakdown for corporate entities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Aggregate Sentiment</CardTitle>
                  <CardDescription>Overall sentiment distribution across corporate entities</CardDescription>
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
                  <CardDescription>Sentiment scores by corporate entity</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {corporateEntities.map((entity) => {
                        const sentiment = entity.metrics?.sentiment
                        return (
                          <div key={entity.id} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-platinum-200">{entity.name}</span>
                              <div className="flex items-center gap-4 text-xs">
                                <span className="text-emerald-400">+{sentiment?.positive || 0}%</span>
                                <span className="text-platinum-400">{sentiment?.neutral || 0}%</span>
                                <span className="text-rose-400">-{sentiment?.negative || 0}%</span>
                              </div>
                            </div>
                            <div className="flex h-2 overflow-hidden rounded-full bg-platinum-700">
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
