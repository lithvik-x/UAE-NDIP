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
  Shield,
  TrendingUp,
  Users,
  Zap,
  Globe,
  Clock,
  Map,
  Target,
  ArrowRight,
  RefreshCw,
  Scale,
  Building,
  FileText,
  CheckCircle,
  Hammer,
} from 'lucide-react'
import {
  useModernizationVisionData,
  usePolicyAnnouncementData,
  useFederationEarlyData,
} from '@/lib/data-loader'

export default function ReformChangePage() {
  const { data: modernization } = useModernizationVisionData()
  const { data: policy } = usePolicyAnnouncementData()
  const { data: federation } = useFederationEarlyData()

  const data = policy || {
    description: 'Major reforms, policy changes, and transformative moments in UAE history',
    keyEvents: [],
    policyOutcomes: [],
  }

  // Reform milestones data
  const reformMilestonesData = [
    { year: '1971', reform: 'UAE Federation Formation', impact: 95 },
    { year: '1974', reform: 'Treaty of Jeddah (Border Resolution)', impact: 88 },
    { year: '1981', reform: 'GCC Foundation', impact: 82 },
    { year: '2006', reform: 'Telecom Liberalization (du)', impact: 75 },
    { year: '2010', reform: 'Vision 2021 Launch', impact: 90 },
    { year: '2012', reform: 'Cybercrime Law', impact: 70 },
    { year: '2015', reform: 'Anti-Discrimination Law', impact: 78 },
    { year: '2017', reform: 'UAE AI Strategy 2031', impact: 92 },
    { year: '2019', reform: 'Golden Visa Program', impact: 85 },
    { year: '2020', reform: 'Abraham Accords', impact: 95 },
    { year: '2021', reform: 'Net Zero 2050 Commitment', impact: 88 },
    { year: '2023', reform: 'Corporate Tax Introduction', impact: 72 },
  ]

  // Policy impact by sector
  const sectorImpactData = [
    { sector: 'Economy', impact: 88, color: CHART_COLORS.gold },
    { sector: 'Governance', impact: 82, color: CHART_COLORS.navy },
    { sector: 'Social', impact: 76, color: CHART_COLORS.platinum },
    { sector: 'Technology', impact: 90, color: CHART_COLORS.emerald },
    { sector: 'International', impact: 85, color: CHART_COLORS.cyan },
  ]

  // Reform types distribution
  const reformTypeData = [
    { name: 'Economic', value: 35, color: CHART_COLORS.gold },
    { name: 'Governance', value: 25, color: CHART_COLORS.navy },
    { name: 'Social', value: 20, color: CHART_COLORS.platinum },
    { name: 'Diplomatic', value: 15, color: CHART_COLORS.cyan },
    { name: 'Legal', value: 5, color: CHART_COLORS.rose },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="navy" className="mb-2">H-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Reform & Change</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'Major reforms, policy transformations, and national initiatives'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <FileText className="h-4 w-4" />
            Policy Reports
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Analyze Impact
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Major Reforms"
          value="48"
          previousValue={42}
          icon={<RefreshCw className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Policy Success Rate"
          value="87%"
          previousValue={82}
          icon={<CheckCircle className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Vision 2021 KPIs Met"
          value="94%"
          previousValue={89}
          icon={<Target className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="International Rank"
          value="#16"
          previousValue={22}
          icon={<Globe className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Reform Timeline</TabsTrigger>
          <TabsTrigger value="impact">Impact Analysis</TabsTrigger>
          <TabsTrigger value="policies">Key Policies</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Reform & Change Overview" description="Major transformative initiatives and their outcomes">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Reform Impact Trajectory</CardTitle>
                  <CardDescription>Progressive reform impact over five decades</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={[
                      { year: '1971', impact: 45 },
                      { year: '1981', impact: 52 },
                      { year: '1991', impact: 58 },
                      { year: '2001', impact: 65 },
                      { year: '2011', impact: 76 },
                      { year: '2021', impact: 88 },
                      { year: '2026', impact: 94 },
                    ]}
                    xAxisKey="year"
                    areas={[
                      { dataKey: 'impact', name: 'Impact Score', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Reform Categories</CardTitle>
                    <CardDescription>Distribution by reform type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={reformTypeData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sector Impact</CardTitle>
                    <CardDescription>Reform effectiveness by sector</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sectorImpactData.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.sector}</span>
                            <span className="text-lg font-bold text-navy">{item.impact}%</span>
                          </div>
                          <Progress
                            value={item.impact}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Reform Timeline" description="Key reform milestones from 1971 to present">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Reform Milestones</CardTitle>
                  <CardDescription>Impact score of major reforms by year</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={reformMilestonesData}
                    xAxisKey="reform"
                    bars={[
                      { dataKey: 'impact', name: 'Impact', color: CHART_COLORS.navy },
                    ]}
                    height={400}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Timeline View</CardTitle>
                  <CardDescription>Chronological reform progression</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="relative border-l-2 border-gold/30 pl-8">
                      {reformMilestonesData.slice().reverse().map((reform, idx) => (
                        <div key={idx} className="relative mb-8 last:mb-0">
                          <div className="absolute -left-[41px] h-6 w-6 rounded-full bg-gold/20 text-gold flex items-center justify-center">
                            <Hammer className="h-3 w-3" />
                          </div>
                          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-bold text-gold">{reform.year}</span>
                              <Badge variant="gold" className="text-xs">Impact: {reform.impact}%</Badge>
                            </div>
                            <h4 className="font-semibold text-slate-200">{reform.reform}</h4>
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

        {/* Impact Analysis Tab */}
        <TabsContent value="impact" className="space-y-6">
          <GlassPanel title="Impact Analysis" description="Detailed analysis of reform outcomes">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Vision 2021 Performance</CardTitle>
                  <CardDescription>National Key Performance Indicators achievement</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sectorImpactData}
                    xAxisKey="sector"
                    bars={[
                      { dataKey: 'impact', name: 'Achievement %', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Economic Reforms</CardTitle>
                    <CardDescription>Major economic policy changes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { policy: 'Corporate Tax 2023', impact: '9% rate on AED 375K+ profits' },
                        { policy: 'Golden Visa', impact: '10-year renewable for investors' },
                        { policy: 'JAFZA Expansion', impact: '11,000+ companies by 2025' },
                        { policy: 'FTZ Development', impact: 'World\'s largest free zone network' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                          <CheckCircle className="h-5 w-5 text-emerald mt-0.5" />
                          <div>
                            <p className="font-medium text-slate-200">{item.policy}</p>
                            <p className="text-sm text-slate-400">{item.impact}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Governance Reforms</CardTitle>
                    <CardDescription>Key governance and legal changes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { policy: 'Constitution 1971', impact: '152 Articles establishing federal structure' },
                        { policy: 'FNC Establishment', impact: 'Federal National Council formed' },
                        { policy: 'Cybercrime Law', impact: 'Digital security framework 2012' },
                        { policy: 'Anti-Discrimination', impact: 'Social cohesion law 2015' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                          <Scale className="h-5 w-5 text-navy mt-0.5" />
                          <div>
                            <p className="font-medium text-slate-200">{item.policy}</p>
                            <p className="text-sm text-slate-400">{item.impact}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Policies Tab */}
        <TabsContent value="policies" className="space-y-6">
          <GlassPanel title="Key Policy Announcements" description="Major policy initiatives and their historical impact">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Policy Impact Matrix</CardTitle>
                  <CardDescription>Key policies and their outcomes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-3">
                      {[
                        {
                          policy: 'Vision 2021 (2010)',
                          description: 'National strategic framework with 52 NKPIs',
                          outcome: '94% achievement rate by 2021',
                          alert: 'GREEN',
                        },
                        {
                          policy: 'Centennial 2071 (2017)',
                          description: 'AED 600 billion 50-year investment target',
                          outcome: 'Long-term framework established',
                          alert: 'GREEN',
                        },
                        {
                          policy: 'UAE AI Strategy 2031 (2017)',
                          description: 'First country with dedicated AI Minister',
                          outcome: 'Global leadership in government AI',
                          alert: 'GREEN',
                        },
                        {
                          policy: 'Golden Visa (2019)',
                          description: '10-year renewable visa program',
                          outcome: 'AED 10M property or AED 2M business',
                          alert: 'GREEN',
                        },
                        {
                          policy: 'Net Zero 2050 (2021)',
                          description: 'First MENA nation net-zero commitment',
                          outcome: 'AED 600B climate investment planned',
                          alert: 'GREEN',
                        },
                        {
                          policy: 'Corporate Tax (2023)',
                          description: '9% on profits exceeding AED 375K',
                          outcome: 'OECD framework alignment',
                          alert: 'YELLOW',
                        },
                      ].map((policy, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                              <FileText className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{policy.policy}</p>
                              <p className="text-sm text-slate-400">{policy.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={policy.alert === 'GREEN' ? 'success' : policy.alert === 'YELLOW' ? 'warning' : 'destructive'}
                              className="text-xs"
                            >
                              {policy.alert}
                            </Badge>
                            <p className="mt-1 text-xs text-slate-500">{policy.outcome}</p>
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
