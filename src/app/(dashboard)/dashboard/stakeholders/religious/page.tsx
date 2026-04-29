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
  Church,
  BookOpen,
  Users,
  Cross,
  Star,
} from 'lucide-react'
import {
  useStakeholderOverviewData,
} from '@/lib/data-loader'
import type { StakeholderIntelligence } from '@/lib/data-loader'

// Mock religious institution data
const mockReligiousStakeholders: StakeholderIntelligence[] = [
  {
    id: 'rel-uae-grand-mufti',
    name: 'UAE Grand Mufti / Fatwa Authority',
    nameAr: 'مفتي عام الإمارات',
    type: 'civil-society',
    mandate: 'Supreme authority for Islamic jurisprudence in UAE. Issues fatwas, oversees religious discourse, and guides Islamic education standards.',
    metrics: {
      digitalReach: 8500000,
      engagement: 4.2,
      sentiment: { positive: 78, negative: 8, neutral: 14, overall: 82, volume: 420000 },
      credibility: { tier: 1, score: 94, sources: 18, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Fatwa Services', description: 'Religious guidance issuance', status: 'active' },
        { name: 'Islamic Education', description: 'Curriculum development', status: 'active' },
      ],
    },
    uaeRelevance: { score: 95, level: 'critical', justification: 'Highest Islamic authority' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'rel-dubai-mosques',
    name: 'Dubai Mosques & Awqaf',
    nameAr: 'مساجد ودور الوقف دبي',
    type: 'civil-society',
    mandate: 'Oversees all mosques in Dubai, manages awqaf (religious endowments), and coordinates Friday sermons and religious programs.',
    metrics: {
      digitalReach: 5200000,
      engagement: 3.5,
      sentiment: { positive: 75, negative: 10, neutral: 15, overall: 78, volume: 280000 },
      credibility: { tier: 1, score: 90, sources: 15, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Mosque Operations', description: 'Management of 1,500+ mosques', status: 'active' },
        { name: 'Awqaf Management', description: 'Religious endowment administration', status: 'active' },
      ],
    },
    uaeRelevance: { score: 85, level: 'high', justification: 'Religious authority in Dubai' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'rel-abu-dhabi-mosques',
    name: 'Abu Dhabi Mosques & Culture',
    nameAr: 'مساجد وثقافة أبوظبي',
    type: 'civil-society',
    mandate: 'Manages mosques and religious cultural affairs in Abu Dhabi. Coordinates interfaith dialogue and religious tourism.',
    metrics: {
      digitalReach: 4800000,
      engagement: 3.2,
      sentiment: { positive: 72, negative: 12, neutral: 16, overall: 75, volume: 250000 },
      credibility: { tier: 1, score: 92, sources: 16, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Mosque Network', description: 'Operation of 800+ mosques', status: 'active' },
        { name: 'Interfaith Dialogue', description: 'Cross-religious engagement', status: 'active' },
      ],
    },
    uaeRelevance: { score: 88, level: 'high', justification: 'Abu Dhabi religious authority' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'rel-khalifa-university',
    name: 'Khalifa University (Islamic Studies)',
    nameAr: 'جامعة خليفة',
    type: 'civil-society',
    mandate: 'Islamic research and education institution. Conducts Islamic studies research and offers degree programs in Islamic theology.',
    metrics: {
      digitalReach: 1200000,
      engagement: 2.4,
      sentiment: { positive: 62, negative: 15, neutral: 23, overall: 68, volume: 85000 },
      credibility: { tier: 2, score: 85, sources: 12, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Islamic Research', description: 'Academic Islamic studies', status: 'active' },
        { name: 'Theology Programs', description: 'Degree programs in Islamic theology', status: 'active' },
      ],
    },
    uaeRelevance: { score: 65, level: 'medium', justification: 'Islamic academic center' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'rel-holy-quran',
    name: 'Holy Quran Academy',
    nameAr: 'أكاديمية القرآن الكريم',
    type: 'civil-society',
    mandate: 'Promotes Quran education and memorization across UAE. Operates Quran learning centers and certification programs.',
    metrics: {
      digitalReach: 2800000,
      engagement: 3.8,
      sentiment: { positive: 82, negative: 5, neutral: 13, overall: 85, volume: 165000 },
      credibility: { tier: 1, score: 91, sources: 14, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Quran Memorization', description: 'Hifz programs nationwide', status: 'active' },
        { name: 'Tajweed Courses', description: 'Quranic recitation training', status: 'active' },
      ],
    },
    uaeRelevance: { score: 80, level: 'high', justification: 'Quran education authority' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'rel-interfaith',
    name: 'UAE Interfaith Council',
    nameAr: 'مجلس الحوار بين الأديان',
    type: 'civil-society',
    mandate: 'Promotes religious tolerance and interfaith dialogue. Facilitates engagement between Muslim, Christian, Jewish, and other religious communities.',
    metrics: {
      digitalReach: 1800000,
      engagement: 2.6,
      sentiment: { positive: 68, negative: 18, neutral: 14, overall: 70, volume: 95000 },
      credibility: { tier: 2, score: 82, sources: 10, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Interfaith Dialogues', description: 'Multi-religious engagement forums', status: 'active' },
        { name: 'Tolerance Programs', description: 'Religious harmony initiatives', status: 'active' },
      ],
    },
    uaeRelevance: { score: 72, level: 'high', justification: 'Interfaith coordination' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'rel-mulsim-commission',
    name: 'UAE Muslim Personal Status Council',
    nameAr: 'مجلس الأحوال الشخصية المسلم',
    type: 'civil-society',
    mandate: 'Handles Islamic family law matters including marriage, divorce, and inheritance according to Sharia principles.',
    metrics: {
      digitalReach: 2200000,
      engagement: 2.2,
      sentiment: { positive: 55, negative: 28, neutral: 17, overall: 58, volume: 120000 },
      credibility: { tier: 1, score: 88, sources: 13, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Family Law Services', description: 'Sharia-based legal services', status: 'active' },
        { name: 'Mediation Services', description: 'Family dispute resolution', status: 'active' },
      ],
    },
    uaeRelevance: { score: 75, level: 'high', justification: 'Islamic family law authority' },
    alertLevel: 'YELLOW',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'rel-zakat-fund',
    name: 'UAE Zakat Fund',
    nameAr: 'صندوق الزكاة',
    type: 'civil-society',
    mandate: 'Collects and distributes Zakat (Islamic almsgiving) to eligible recipients in UAE and abroad.',
    metrics: {
      digitalReach: 3500000,
      engagement: 3.0,
      sentiment: { positive: 76, negative: 9, neutral: 15, overall: 79, volume: 195000 },
      credibility: { tier: 1, score: 93, sources: 17, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Zakat Collection', description: 'Islamic charity collection', status: 'active' },
        { name: 'Distribution Services', description: 'Charity disbursement', status: 'active' },
      ],
    },
    uaeRelevance: { score: 85, level: 'high', justification: 'Official Zakat authority' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
]

export default function ReligiousStakeholdersPage() {
  const { data: overviewData } = useStakeholderOverviewData()

  const religiousEntities = mockReligiousStakeholders

  // Calculate aggregate metrics
  const totalReach = religiousEntities.reduce((sum, s) => sum + (s.metrics?.digitalReach || 0), 0)
  const avgCredibility = religiousEntities.reduce((sum, s) => sum + (s.metrics?.credibility?.score || 0), 0) / religiousEntities.length
  const avgEngagement = religiousEntities.reduce((sum, s) => sum + (s.metrics?.engagement || 0), 0) / religiousEntities.length

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: 71, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 15, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 14, color: CHART_COLORS.rose },
  ]

  // Denomination breakdown
  const denominationData = [
    { name: 'Sunni/Ibadhi', value: 85, color: CHART_COLORS.navy },
    { name: 'Shia', value: 10, color: CHART_COLORS.gold },
    { name: 'Interfaith', value: 5, color: CHART_COLORS.cyan },
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
          <Badge variant="navy" className="mb-2">RELIGIOUS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Religious Institutions</h1>
          <p className="mt-2 text-slate-400">
            Islamic authorities, mosques, religious education bodies, and interfaith organizations in the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <BookOpen className="h-4 w-4" />
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
          title="Religious Entities"
          value={religiousEntities.length}
          icon={<Building className="h-6 w-6" />}
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
          previousValue={avgEngagement - 0.3}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="denominations">Denominations</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Religious Institutions Overview" description="Key metrics for UAE religious sector">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Entity Reach</CardTitle>
                  <CardDescription>Digital reach by religious institution</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={religiousEntities.slice(0, 6).map(s => ({
                      name: s.name.split(' ').slice(0, 2).join(' '),
                      value: s.metrics?.digitalReach || 0,
                      color: CHART_COLORS.navy,
                    }))}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Reach', color: CHART_COLORS.navy },
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
                    <CardDescription>Overall sentiment toward religious entities</CardDescription>
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
                    <CardTitle className="text-lg">Denomination Distribution</CardTitle>
                    <CardDescription>Religious entity breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={denominationData}
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
          <GlassPanel title="Religious Institution Directory" description="Detailed profiles of UAE religious entities">
            <ScrollArea className="h-[700px]">
              <div className="space-y-4">
                {religiousEntities.map((entity) => (
                  <Card key={entity.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-500/20 text-navy-400">
                            <Building className="h-6 w-6" />
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>

        {/* Denominations Tab */}
        <TabsContent value="denominations" className="space-y-6">
          <GlassPanel title="Denomination Analysis" description="Breakdown by Islamic denomination and interfaith">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Denomination Distribution</CardTitle>
                  <CardDescription>Religious entity coverage by denomination</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={denominationData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.navy },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {denominationData.map((denom, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: denom.color }}
                          />
                          <span className="font-medium text-slate-200">{denom.name}</span>
                        </div>
                        <span className="text-xl font-bold text-navy-400">{denom.value}%</span>
                      </div>
                      <Progress
                        value={denom.value}
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
          <GlassPanel title="Sentiment Analysis" description="Detailed sentiment breakdown for religious entities">
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
                  <CardDescription>Sentiment scores by institution</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {religiousEntities.map((entity) => {
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
