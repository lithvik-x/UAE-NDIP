'use client'

import React from 'react'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Shield,
  Brain,
  Eye,
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Download,
  RefreshCw,
  Zap,
  Lock,
  Unlock,
  Activity,
  Heart,
  Lightbulb,
  MessageSquare,
  Users,
  Target,
  BarChart3,
  PieChart as LucidePieChart
} from 'lucide-react'
import { perceptionData } from '@/lib/data-loader'

export default function CognitiveResiliencePage() {
  // Extract real data from data loader
  const { securityParadox, pharmacologicalFallacy, nutritionalMirage } = perceptionData.cognitiveResilience
  const resilienceMetrics = [
    { title: 'Overall Resilience Score', value: '78.4%', trend: 'up' as const, gradient: 'emerald' as const },
    { title: 'Misinformation Resistance', value: '82.1%', trend: 'up' as const, gradient: 'cyan' as const },
    { title: 'Trust Stability', value: '71.6%', trend: 'up' as const, gradient: 'indigo' as const },
    { title: 'Cognitive Load', value: '34.2%', trend: 'down' as const, gradient: 'rose' as const }
  ]

  const securityParadoxData = [
    { category: 'Data Privacy', concern: 89, trust: 45, gap: 44, priority: 'critical' },
    { category: 'Surveillance Fears', concern: 76, trust: 52, gap: 24, priority: 'high' },
    { category: 'Algorithm Transparency', concern: 82, trust: 38, gap: 44, priority: 'critical' },
    { category: 'Data Sharing Consent', concern: 71, trust: 61, gap: 10, priority: 'medium' },
    { category: 'Identity Protection', concern: 68, trust: 58, gap: 10, priority: 'medium' }
  ]

  const pharmacologicalFallacies = [
    { myth: '"Vaccines cause infertility"', prevalence: 23, debunked: 156, reach: 45000, status: 'critical' },
    { myth: '"Big Pharma hides natural cures"', prevalence: 31, debunked: 89, reach: 67000, status: 'high' },
    { myth: '"Generic medicines are unsafe"', prevalence: 18, debunked: 234, reach: 32000, status: 'medium' },
    { myth: '"More antibiotics = faster recovery"', prevalence: 27, debunked: 178, reach: 54000, status: 'high' },
    { myth: '"Natural means safe"', prevalence: 34, debunked: 67, reach: 71000, status: 'critical' },
    { myth: '"COVID vaccines alter DNA"', prevalence: 15, debunked: 289, reach: 28000, status: 'medium' }
  ]

  const nutritionalMirages = [
    { trend: '"Superfood" Marketing Hype', credibility: 34, evidence: 42, adoption: 78, gap: 36 },
    { trend: 'Detox Diets & Cleanses', credibility: 28, evidence: 15, adoption: 45, gap: 30 },
    { trend: 'Supplement Overload', credibility: 56, evidence: 38, adoption: 82, gap: 44 },
    { trend: 'Organic = Healthier', credibility: 62, evidence: 51, adoption: 67, gap: 16 },
    { trend: 'Gluten-Free Fad', credibility: 48, evidence: 22, adoption: 34, gap: 26 },
    { trend: 'Keto for Everyone', credibility: 41, evidence: 35, adoption: 52, gap: 17 }
  ]

  const resilienceStrategies = [
    { strategy: 'Pre-bunking Campaigns', active: 12, planned: 8, effectiveness: 78, status: 'active' },
    { strategy: 'Trust-Building Content', active: 24, planned: 5, effectiveness: 84, status: 'active' },
    { strategy: 'Influencer Fact-Checks', active: 8, planned: 12, effectiveness: 71, status: 'active' },
    { strategy: 'Community Moderation', active: 15, planned: 0, effectiveness: 65, status: 'active' },
    { strategy: 'Rapid Response Units', active: 6, planned: 6, effectiveness: 89, status: 'active' }
  ]

  const vulnerabilityZones = [
    { zone: 'Expat Communities', vulnerability: 82, population: '2.3M', threats: 34, status: 'critical' },
    { zone: 'Elderly Population', vulnerability: 76, population: '180K', threats: 28, status: 'high' },
    { zone: 'Low-Income Areas', vulnerability: 71, population: '450K', threats: 41, status: 'high' },
    { zone: 'Social Media Heavy Users', vulnerability: 68, population: '1.1M', threats: 52, status: 'medium' },
    { zone: 'New Parents', vulnerability: 64, population: '85K', threats: 23, status: 'medium' }
  ]

  const recentInterventions = [
    {
      id: '1',
      threat: 'Ozempic shortage rumors',
      intervention: 'Expert video series + FAQ',
      reach: 234000,
      effectiveness: 87,
      status: 'success'
    },
    {
      id: '2',
      threat: 'Vaccine mandate misinformation',
      intervention: 'Town hall + fact sheets',
      reach: 156000,
      effectiveness: 72,
      status: 'success'
    },
    {
      id: '3',
      threat: 'Hospital data breach claims',
      intervention: 'Transparency report + Q&A',
      reach: 89000,
      effectiveness: 64,
      status: 'partial'
    },
    {
      id: '4',
      threat: 'New virus variant panic',
      intervention: 'Daily briefings + expert quotes',
      reach: 412000,
      effectiveness: 91,
      status: 'success'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cognitive Resilience</h1>
          <p className="text-muted-foreground">
            Mental fortitude analysis against misinformation & cognitive threats
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {resilienceMetrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      <Tabs defaultValue="security-paradox" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full">
          <TabsTrigger value="security-paradox">Security Paradox</TabsTrigger>
          <TabsTrigger value="pharmacological">Pharmacological</TabsTrigger>
          <TabsTrigger value="nutritional">Nutritional Mirage</TabsTrigger>
          <TabsTrigger value="interventions">Interventions</TabsTrigger>
        </TabsList>

        <TabsContent value="security-paradox" className="space-y-6">
          <Alert className="border-rose-500 bg-rose-50 dark:bg-rose-950">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Privacy Concern Outpaces Trust</AlertTitle>
            <AlertDescription>
              44-point gap between data privacy concerns and trust levels. Immediate transparency campaign recommended.
            </AlertDescription>
          </Alert>

          {/* Cognitive Resilience Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Security Paradox Analysis</CardTitle>
                <CardDescription>Concern vs. trust gap by category</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={securityParadoxData}
                  xAxisKey="category"
                  bars={[
                    { dataKey: 'concern', name: 'Concern Level', color: CHART_COLORS.rose },
                    { dataKey: 'trust', name: 'Trust Level', color: CHART_COLORS.emerald },
                    { dataKey: 'gap', name: 'Gap', color: CHART_COLORS.orange },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vulnerability Zones</CardTitle>
                <CardDescription>Population segments by risk level</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={vulnerabilityZones}
                  xAxisKey="zone"
                  bars={[
                    { dataKey: 'vulnerability', name: 'Vulnerability %', color: CHART_COLORS.rose },
                    { dataKey: 'threats', name: 'Active Threats', color: CHART_COLORS.orange },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Security Paradox Analysis</h3>
                <Shield className="h-5 w-5 text-rose-500" />
              </div>
              <div className="space-y-4">
                {securityParadoxData.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.category}</span>
                      <Badge variant={
                        item.priority === 'critical' ? 'destructive' :
                        item.priority === 'high' ? 'default' : 'secondary'
                      }>
                        {item.priority}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Concern Level</span>
                        <span className="font-medium text-rose-600">{item.concern}%</span>
                      </div>
                      <Progress value={item.concern} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Trust Level</span>
                        <span className="font-medium text-emerald-600">{item.trust}%</span>
                      </div>
                      <Progress value={item.trust} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between text-sm pt-2 border-t">
                      <span className="text-muted-foreground">Gap</span>
                      <span className="font-bold text-rose-600">{item.gap} pts</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Vulnerability Zones</h3>
                <Target className="h-5 w-5 text-orange-500" />
              </div>
              <div className="space-y-4">
                {vulnerabilityZones.map((zone, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{zone.zone}</h4>
                        <p className="text-sm text-muted-foreground">Population: {zone.population}</p>
                      </div>
                      <Badge variant={
                        zone.status === 'critical' ? 'destructive' :
                        zone.status === 'high' ? 'default' : 'secondary'
                      }>
                        {zone.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Vulnerability Score</span>
                        <span className="font-medium">{zone.vulnerability}%</span>
                      </div>
                      <Progress value={zone.vulnerability} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Active Threats</span>
                      <span className="font-semibold">{zone.threats}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Resilience Strategy Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {resilienceStrategies.map((strategy, i) => (
                <Card key={i}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">{strategy.strategy}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Active</span>
                      <span className="font-semibold">{strategy.active}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Planned</span>
                      <span className="font-semibold">{strategy.planned}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Effectiveness</span>
                        <span className="font-medium">{strategy.effectiveness}%</span>
                      </div>
                      <Progress value={strategy.effectiveness} className="h-2" />
                    </div>
                    <Badge variant="outline" className="w-full justify-center">
                      {strategy.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="pharmacological" className="space-y-6">
          <Alert className="border-amber-500 bg-amber-50 dark:bg-amber-950">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Pharmacological Fallacies Detected</AlertTitle>
            <AlertDescription>
              6 major health myths actively circulating. "Natural means safe" has highest reach (71K exposures).
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Pharmacological Fallacy Tracker</h3>
              <Activity className="h-5 w-5 text-rose-500" />
            </div>
            <div className="space-y-4">
              {pharmacologicalFallacies.map((item, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">"{item.myth}"</h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>Prevalence: <strong className="text-foreground">{item.prevalence}%</strong></span>
                        <span>Reach: <strong className="text-foreground">{item.reach.toLocaleString()}</strong></span>
                        <span>Debunked: <strong className="text-emerald-600">{item.debunked}x</strong></span>
                      </div>
                    </div>
                    <Badge variant={
                      item.status === 'critical' ? 'destructive' :
                      item.status === 'high' ? 'default' : 'secondary'
                    }>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Belief Prevalence</span>
                      <span className="font-medium">{item.prevalence}%</span>
                    </div>
                    <Progress value={item.prevalence} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Debunks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">1,013</div>
                <p className="text-sm text-muted-foreground mt-1">+67 this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Myth Reach Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">34.2%</div>
                <p className="text-sm text-muted-foreground mt-1">Average decrease</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Correction Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600">4.2h</div>
                <p className="text-sm text-muted-foreground mt-1">Average response</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="nutritional" className="space-y-6">
          <Alert className="border-cyan-500 bg-cyan-50 dark:bg-cyan-950">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Nutritional Misinformation Analysis</AlertTitle>
            <AlertDescription>
              Supplement Overload shows highest credibility gap (44%). 6 nutritional trends actively monitored.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Nutritional Trend Analysis</h3>
                <LucidePieChart className="h-5 w-5 text-cyan-500" />
              </div>
              <div className="space-y-4">
                {nutritionalMirages.map((trend, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-semibold">{trend.trend}</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Credibility</p>
                        <p className="font-semibold">{trend.credibility}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Evidence</p>
                        <p className="font-semibold">{trend.evidence}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Adoption</p>
                        <p className="font-semibold">{trend.adoption}%</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Credibility Gap</span>
                        <span className="font-medium text-rose-600">{trend.gap} pts</span>
                      </div>
                      <Progress value={trend.credibility} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Nutritional Resilience Metrics</h3>
                <Heart className="h-5 w-5 text-rose-500" />
              </div>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Evidence-Based Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-emerald-600">67%</div>
                    <Progress value={67} className="h-2 mt-3" />
                    <p className="text-sm text-muted-foreground mt-2">+8% from last quarter</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Myth Correction Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-cyan-600">82%</div>
                    <Progress value={82} className="h-2 mt-3" />
                    <p className="text-sm text-muted-foreground mt-2">Successful corrections</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Dietitian Engagement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-indigo-600">45</div>
                    <p className="text-sm text-muted-foreground mt-2">Active verified experts</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Nutrition Content Reach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-purple-600">2.4M</div>
                    <p className="text-sm text-muted-foreground mt-2">Monthly impressions</p>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </div>
        </TabsContent>

        <TabsContent value="interventions" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Recent Cognitive Interventions</h3>
              <Zap className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="space-y-4">
              {recentInterventions.map((intervention, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{intervention.threat}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{intervention.intervention}</p>
                    </div>
                    <Badge variant={
                      intervention.status === 'success' ? 'default' : 'secondary'
                    } className="capitalize">
                      {intervention.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Reach</p>
                      <p className="font-semibold">{intervention.reach.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Effectiveness</p>
                      <p className="font-semibold text-emerald-600">{intervention.effectiveness}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Status</p>
                      <div className="flex items-center gap-1">
                        {intervention.status === 'success' ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <AlertTriangle className="h-4 w-4 text-amber-600" />
                        )}
                        <span className="font-medium capitalize">{intervention.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  Successful
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">87%</div>
                <p className="text-sm text-muted-foreground mt-1">Intervention success rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-cyan-500" />
                  Avg Response
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2.4h</div>
                <p className="text-sm text-muted-foreground mt-1">Time to deployment</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Users className="h-5 w-5 text-indigo-500" />
                  Protected
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1.8M</div>
                <p className="text-sm text-muted-foreground mt-1">People reached</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-500" />
                  Threats Neutralized
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">234</div>
                <p className="text-sm text-muted-foreground mt-1">This quarter</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Resilience Building Pipeline</h3>
            <div className="space-y-3">
              {[
                { stage: 'Threat Detection', count: 8, status: 'active' },
                { stage: 'Content Development', count: 12, status: 'active' },
                { stage: 'Expert Review', count: 5, status: 'active' },
                { stage: 'Multi-Channel Deploy', count: 15, status: 'active' },
                { stage: 'Effectiveness Monitor', count: 18, status: 'active' }
              ].map((stage, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <span className="text-sm font-bold text-indigo-600">{i + 1}</span>
                    </div>
                    <span className="font-medium">{stage.stage}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{stage.count} active</Badge>
                    <Activity className="h-4 w-4 text-emerald-500" />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
