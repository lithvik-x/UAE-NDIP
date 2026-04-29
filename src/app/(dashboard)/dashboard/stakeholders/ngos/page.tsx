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
  Heart,
  Users,
  HandHeart,
  Home,
  Scale,
} from 'lucide-react'
import {
  useStakeholderOverviewData,
} from '@/lib/data-loader'
import type { StakeholderIntelligence } from '@/lib/data-loader'

// Mock NGO stakeholder data for demonstration
const mockNgoStakeholders: StakeholderIntelligence[] = [
  {
    id: 'ngo-redcross-uae',
    name: 'UAE Red Crescent',
    nameAr: 'الهلال الأحمر الإماراتي',
    type: 'civil-society',
    mandate: 'Humanitarian aid organization conducting relief operations domestically and internationally. Part of the International Red Cross movement.',
    metrics: {
      digitalReach: 3200000,
      engagement: 3.2,
      sentiment: { positive: 72, negative: 8, neutral: 20, overall: 78, volume: 145000 },
      credibility: { tier: 1, score: 88, sources: 14, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Humanitarian Aid', description: 'Relief operations across 40+ countries', status: 'active' },
        { name: 'Blood Donation', description: 'National blood donation campaigns', status: 'active' },
      ],
    },
    uaeRelevance: { score: 82, level: 'high', justification: 'Key humanitarian actor' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'ngo-better-world',
    name: 'Better World Campaign',
    nameAr: 'حملة عالم أفضل',
    type: 'civil-society',
    mandate: 'International NGO focused on poverty alleviation and sustainable development programs in the MENA region.',
    metrics: {
      digitalReach: 1800000,
      engagement: 2.6,
      sentiment: { positive: 58, negative: 18, neutral: 24, overall: 65, volume: 78000 },
      credibility: { tier: 2, score: 78, sources: 10, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Poverty Alleviation', description: 'Community development projects', status: 'active' },
        { name: 'Education Support', description: 'School building and supplies', status: 'active' },
      ],
    },
    uaeRelevance: { score: 55, level: 'medium', justification: 'Regional development partner' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'ngo-global-shares',
    name: 'Global Shares Foundation',
    nameAr: 'مؤسسة المشاركات العالمية',
    type: 'civil-society',
    mandate: 'Charitable organization facilitating corporate giving and employee volunteer programs across UAE.',
    metrics: {
      digitalReach: 850000,
      engagement: 2.1,
      sentiment: { positive: 62, negative: 14, neutral: 24, overall: 70, volume: 42000 },
      credibility: { tier: 2, score: 75, sources: 8, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Corporate Giving', description: 'Workplace charity programs', status: 'active' },
        { name: 'Volunteer Matching', description: 'Employee volunteer coordination', status: 'active' },
      ],
    },
    uaeRelevance: { score: 48, level: 'medium', justification: 'Corporate philanthropy facilitator' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'ngo-water-access',
    name: 'Water Access Initiative',
    nameAr: 'مبادرة الوصول للمياه',
    type: 'civil-society',
    mandate: 'Non-profit focused on providing clean water access to underserved communities in developing regions.',
    metrics: {
      digitalReach: 620000,
      engagement: 2.4,
      sentiment: { positive: 68, negative: 12, neutral: 20, overall: 75, volume: 35000 },
      credibility: { tier: 2, score: 80, sources: 9, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Clean Water Projects', description: 'Well drilling and purification', status: 'active' },
        { name: 'Hygiene Education', description: 'Sanitation training programs', status: 'active' },
      ],
    },
    uaeRelevance: { score: 52, level: 'medium', justification: 'Humanitarian aid partner' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'ngo-refugee-council',
    name: 'UAE Refugee Council',
    nameAr: 'مجلس اللاجئين الإمارات',
    type: 'civil-society',
    mandate: 'Coordination body for refugee assistance programs in UAE. Works with government and international partners.',
    metrics: {
      digitalReach: 1100000,
      engagement: 2.2,
      sentiment: { positive: 55, negative: 25, neutral: 20, overall: 60, volume: 58000 },
      credibility: { tier: 2, score: 76, sources: 11, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Refugee Support', description: 'Shelter and food assistance', status: 'active' },
        { name: 'Legal Assistance', description: 'Immigration support services', status: 'active' },
      ],
    },
    uaeRelevance: { score: 70, level: 'high', justification: 'Humanitarian coordination' },
    alertLevel: 'YELLOW',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'ngo-women-rights',
    name: 'Gulf Women\'s Rights Organization',
    nameAr: 'منظمة حقوق المرأة الخليجية',
    type: 'civil-society',
    mandate: 'Advocacy group focused on women\'s rights and gender equality in the Gulf region.',
    metrics: {
      digitalReach: 920000,
      engagement: 2.8,
      sentiment: { positive: 48, negative: 35, neutral: 17, overall: 50, volume: 48000 },
      credibility: { tier: 2, score: 72, sources: 7, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Legal Advocacy', description: 'Women\'s rights litigation support', status: 'active' },
        { name: 'Awareness Campaigns', description: 'Gender equality education', status: 'active' },
      ],
    },
    uaeRelevance: { score: 58, level: 'medium', justification: 'Rights advocacy' },
    alertLevel: 'YELLOW',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'ngo-environment-uae',
    name: 'UAE Environmental Society',
    nameAr: 'جمعية البيئة الإماراتية',
    type: 'civil-society',
    mandate: 'Conservation organization focused on environmental protection and sustainability in UAE.',
    metrics: {
      digitalReach: 1500000,
      engagement: 3.0,
      sentiment: { positive: 65, negative: 15, neutral: 20, overall: 70, volume: 82000 },
      credibility: { tier: 2, score: 82, sources: 12, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Conservation Projects', description: 'Wildlife and habitat protection', status: 'active' },
        { name: 'Sustainability Education', description: 'Environmental awareness in schools', status: 'active' },
      ],
    },
    uaeRelevance: { score: 72, level: 'high', justification: 'Environmental advocate' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'ngo-disability',
    name: 'UAE Disability Foundation',
    nameAr: 'مؤسسة الإعاقة الإمارات',
    type: 'civil-society',
    mandate: 'Organization advocating for and providing services to people with disabilities in UAE.',
    metrics: {
      digitalReach: 780000,
      engagement: 2.5,
      sentiment: { positive: 70, negative: 10, neutral: 20, overall: 76, volume: 45000 },
      credibility: { tier: 2, score: 84, sources: 10, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Accessibility Services', description: 'Building access modifications', status: 'active' },
        { name: 'Employment Support', description: 'Disability-inclusive hiring programs', status: 'active' },
      ],
    },
    uaeRelevance: { score: 68, level: 'medium', justification: 'Disability rights advocate' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
]

export default function NgosStakeholdersPage() {
  const { data: overviewData } = useStakeholderOverviewData()

  // Use mock NGO data since civil-society type covers NGOs
  const ngoEntities = mockNgoStakeholders

  // Calculate aggregate metrics
  const totalReach = ngoEntities.reduce((sum, s) => sum + (s.metrics?.digitalReach || 0), 0)
  const avgCredibility = ngoEntities.reduce((sum, s) => sum + (s.metrics?.credibility?.score || 0), 0) / ngoEntities.length
  const avgEngagement = ngoEntities.reduce((sum, s) => sum + (s.metrics?.engagement || 0), 0) / ngoEntities.length

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: 62, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 22, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 16, color: CHART_COLORS.rose },
  ]

  // Focus area breakdown
  const focusData = [
    { name: 'Humanitarian', value: 30, color: CHART_COLORS.rose },
    { name: 'Social Services', value: 25, color: CHART_COLORS.gold },
    { name: 'Rights', value: 20, color: CHART_COLORS.navy },
    { name: 'Environment', value: 15, color: CHART_COLORS.emerald },
    { name: 'Development', value: 10, color: CHART_COLORS.platinum },
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
          <Badge variant="rose" className="mb-2">NGOs & NON-PROFITS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-rose">NGOs & Non-Profit Organizations</h1>
          <p className="mt-2 text-slate-400">
            Non-governmental organizations, charitable foundations, and non-profit entities operating in the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-rose/50 text-rose hover:bg-rose/10">
            <HandHeart className="h-4 w-4" />
            View Directory
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="NGOs & Non-Profits"
          value={ngoEntities.length}
          icon={<HandHeart className="h-6 w-6" />}
          gradient="rose"
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
          previousValue={avgCredibility - 2.1}
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
          <TabsTrigger value="entities">Organizations</TabsTrigger>
          <TabsTrigger value="focus">Focus Areas</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="NGO & Non-Profit Overview" description="Key metrics for UAE non-profit sector">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Organization Reach</CardTitle>
                  <CardDescription>Digital reach by NGO/non-profit</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={ngoEntities.slice(0, 6).map(s => ({
                      name: s.name.split(' ').slice(0, 2).join(' '),
                      value: s.metrics?.digitalReach || 0,
                      color: CHART_COLORS.rose,
                    }))}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Reach', color: CHART_COLORS.rose },
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
                    <CardDescription>Overall sentiment toward NGOs</CardDescription>
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
                    <CardTitle className="text-lg">Focus Areas</CardTitle>
                    <CardDescription>Distribution by mission focus</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={focusData}
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
          <GlassPanel title="NGO Directory" description="Detailed profiles of UAE non-profit organizations">
            <ScrollArea className="h-[700px]">
              <div className="space-y-4">
                {ngoEntities.map((entity) => (
                  <Card key={entity.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
                            <HandHeart className="h-6 w-6" />
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
                          <div className="text-xl font-bold text-rose-400">
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

        {/* Focus Areas Tab */}
        <TabsContent value="focus" className="space-y-6">
          <GlassPanel title="Focus Areas" description="Breakdown by NGO mission focus">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Focus Area Distribution</CardTitle>
                  <CardDescription>NGO presence by mission area</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={focusData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.rose },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {focusData.map((focus, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: focus.color }}
                          />
                          <span className="font-medium text-slate-200">{focus.name}</span>
                        </div>
                        <span className="text-xl font-bold text-rose-400">{focus.value}%</span>
                      </div>
                      <Progress
                        value={focus.value}
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
          <GlassPanel title="Sentiment Analysis" description="Detailed sentiment breakdown for NGOs">
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
                      {ngoEntities.map((entity) => {
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
