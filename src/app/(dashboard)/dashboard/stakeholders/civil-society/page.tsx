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

// Mock civil society stakeholder data
const mockCivilSocietyStakeholders: StakeholderIntelligence[] = [
  {
    id: 'cs-beach',
    name: 'UAE Red Crescent',
    nameAr: 'الهلال الأحمر الإماراتي',
    type: 'civil-society',
    mandate: 'Humanitarian aid organization conducting relief operations domestically and internationally. Part of the International Red Cross movement with focus on disaster response.',
    metrics: {
      digitalReach: 3200000,
      engagement: 3.2,
      sentiment: { positive: 72, negative: 8, neutral: 20, overall: 78, volume: 145000 },
      credibility: { tier: 1, score: 88, sources: 14, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Humanitarian Aid Programs', description: 'Relief operations across 40+ countries', status: 'active' },
        { name: 'Blood Donation Campaigns', description: 'National blood donation initiatives', status: 'active' },
      ],
    },
    uaeRelevance: { score: 82, level: 'high', justification: 'Key humanitarian actor' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'cs-khalifa',
    name: 'Khalifa bin Zayed Foundation',
    nameAr: 'مؤسسة خليفة بن زايد',
    type: 'civil-society',
    mandate: 'Charitable foundation focused on humanitarian projects, healthcare support, and educational initiatives for underprivileged communities regionally.',
    metrics: {
      digitalReach: 1800000,
      engagement: 2.8,
      sentiment: { positive: 68, negative: 10, neutral: 22, overall: 74, volume: 89000 },
      credibility: { tier: 1, score: 86, sources: 12, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Healthcare Support', description: 'Medical treatment funding for needy families', status: 'active' },
        { name: 'Education Grants', description: 'Scholarships for underprivileged students', status: 'active' },
      ],
    },
    uaeRelevance: { score: 75, level: 'medium', justification: 'Prominent charitable foundation' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'cs-zayed',
    name: 'Zayed Charitable Hospital',
    nameAr: 'مستشفى زايد الخيري',
    type: 'civil-society',
    mandate: 'Charitable healthcare facility providing free medical services to low-income residents regardless of nationality or legal status.',
    metrics: {
      digitalReach: 950000,
      engagement: 2.4,
      sentiment: { positive: 78, negative: 5, neutral: 17, overall: 82, volume: 62000 },
      credibility: { tier: 2, score: 84, sources: 8, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Free Medical Services', description: 'Healthcare for low-income residents', status: 'active' },
        { name: 'Health Awareness', description: 'Public health education campaigns', status: 'active' },
      ],
    },
    uaeRelevance: { score: 70, level: 'medium', justification: 'Major charitable healthcare provider' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'cs-emirates-red',
    name: 'Emirates Human Rights Association',
    nameAr: 'جمعية الإمارات لحقوق الإنسان',
    type: 'civil-society',
    mandate: 'Human rights advocacy organization operating within UAE legal framework. Monitors human rights conditions and promotes awareness.',
    metrics: {
      digitalReach: 450000,
      engagement: 1.8,
      sentiment: { positive: 38, negative: 42, neutral: 20, overall: 45, volume: 28000 },
      credibility: { tier: 2, score: 68, sources: 6, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Rights Awareness', description: 'Human rights education programs', status: 'active' },
        { name: 'Legal Aid', description: 'Legal assistance for documented cases', status: 'active' },
      ],
    },
    uaeRelevance: { score: 65, level: 'medium', justification: 'Human rights monitoring' },
    alertLevel: 'YELLOW',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'cs-women',
    name: 'UAE Women\'s Association',
    nameAr: 'جمعية الإمارات للمرأة',
    type: 'civil-society',
    mandate: 'Women\'s empowerment organization promoting gender equality, professional development, and women\'s participation in economic and social spheres.',
    metrics: {
      digitalReach: 1200000,
      engagement: 2.9,
      sentiment: { positive: 65, negative: 12, neutral: 23, overall: 72, volume: 75000 },
      credibility: { tier: 2, score: 80, sources: 10, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Women in Business', description: 'Entrepreneurship support for women', status: 'active' },
        { name: 'Leadership Development', description: 'Training for women in leadership', status: 'active' },
      ],
    },
    uaeRelevance: { score: 72, level: 'medium', justification: 'Women empowerment advocate' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
  {
    id: 'cs-youth',
    name: 'UAE Youth Foundation',
    nameAr: 'مؤسسة الإمارات للشباب',
    type: 'civil-society',
    mandate: 'Youth development organization focused on skill-building, employment programs, and engagement activities for young Emiratis.',
    metrics: {
      digitalReach: 2100000,
      engagement: 3.5,
      sentiment: { positive: 62, negative: 15, neutral: 23, overall: 68, volume: 110000 },
      credibility: { tier: 2, score: 78, sources: 9, lastVerified: '2026-04-20' },
      programs: [
        { name: 'Youth Employment', description: 'Job placement for young nationals', status: 'active' },
        { name: 'Skill Development', description: 'Vocational training programs', status: 'active' },
      ],
    },
    uaeRelevance: { score: 78, level: 'high', justification: 'Key youth development actor' },
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-20',
  },
]

export default function CivilSocietyStakeholdersPage() {
  const { data: overviewData } = useStakeholderOverviewData()

  const overviewStakeholders = (overviewData?.stakeholders as StakeholderIntelligence[] || []).filter(s => s.type === 'civil-society')
  const civilSocietyEntities = overviewStakeholders.length > 0 ? overviewStakeholders : mockCivilSocietyStakeholders

  // Calculate aggregate metrics
  const totalReach = civilSocietyEntities.reduce((sum, s) => sum + (s.metrics?.digitalReach || 0), 0)
  const avgCredibility = civilSocietyEntities.reduce((sum, s) => sum + (s.metrics?.credibility?.score || 0), 0) / Math.max(civilSocietyEntities.length, 1)
  const avgEngagement = civilSocietyEntities.reduce((sum, s) => sum + (s.metrics?.engagement || 0), 0) / Math.max(civilSocietyEntities.length, 1)

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: 64, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 21, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 15, color: CHART_COLORS.rose },
  ]

  // Type breakdown
  const typeData = [
    { name: 'Humanitarian', value: 35, color: CHART_COLORS.rose },
    { name: 'Charitable', value: 28, color: CHART_COLORS.gold },
    { name: 'Rights-based', value: 20, color: CHART_COLORS.navy },
    { name: 'Women/Youth', value: 12, color: CHART_COLORS.emerald },
    { name: 'Community', value: 5, color: CHART_COLORS.platinum },
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
          <Badge variant="default" className="mb-2">CIVIL SOCIETY</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum">Civil Society Stakeholders</h1>
          <p className="mt-2 text-slate-400">
            Charitable organizations, humanitarian groups, and civil society actors operating in the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Heart className="h-4 w-4" />
            View Directory
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
          title="Organizations"
          value={civilSocietyEntities.length}
          icon={<Heart className="h-6 w-6" />}
          gradient="indigo"
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
          previousValue={avgCredibility - 1.8}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Avg Engagement"
          value={avgEngagement.toFixed(1)}
          previousValue={avgEngagement - 0.2}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="denim"
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
          <GlassPanel title="Civil Society Overview" description="Key metrics for UAE civil society sector">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Organization Reach</CardTitle>
                  <CardDescription>Digital reach by civil society organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={civilSocietyEntities.slice(0, 6).map(s => ({
                      name: s.name.split(' ').slice(0, 2).join(' '),
                      value: s.metrics?.digitalReach || 0,
                      color: CHART_COLORS.platinum,
                    }))}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Reach', color: CHART_COLORS.platinum },
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
                    <CardDescription>Overall sentiment toward civil society</CardDescription>
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
          <GlassPanel title="Civil Society Directory" description="Detailed profiles of UAE civil society organizations">
            <ScrollArea className="h-[700px]">
              <div className="space-y-4">
                {civilSocietyEntities.map((entity) => (
                  <Card key={entity.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-platinum-500/20 text-platinum-400">
                            <Heart className="h-6 w-6" />
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
                          <div className="text-xl font-bold text-platinum-400">
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
                          <div className="text-xl font-bold text-emerald-400">
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
          <GlassPanel title="Organization Categories" description="Breakdown by civil society type">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Category Distribution</CardTitle>
                  <CardDescription>Civil society presence by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={typeData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.platinum },
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
                        <span className="text-xl font-bold text-platinum-400">{type.value}%</span>
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
          <GlassPanel title="Sentiment Analysis" description="Detailed sentiment breakdown for civil society entities">
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
                      {civilSocietyEntities.map((entity) => {
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
