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
  Activity,
  AlertCircle,
  Bell,
  Brain,
  Bug,
  Calendar,
  Globe,
  Lightbulb,
  Radar,
  Shield,
  TrendingUp,
  Zap,
} from 'lucide-react'
import {
  useCyberThreatData,
} from '@/lib/data-loader'

export default function EmergingThreatsPage() {
  const { data } = useCyberThreatData()

  // UAE Emerging threats metrics
  const activeThreats = 47
  const predictedThreats = 23
  const mitigatedThreats = 156
  const threatScore = 72

  // Threat type distribution
  const threatTypeData = [
    { name: 'AI-Powered Attacks', value: 28, color: CHART_COLORS.rose },
    { name: 'Zero-Day Exploits', value: 22, color: CHART_COLORS.gold },
    { name: 'Supply Chain', value: 18, color: CHART_COLORS.navy },
    { name: 'Ransomware 2.0', value: 15, color: CHART_COLORS.platinum },
    { name: 'Deepfake Content', value: 12, color: CHART_COLORS.rose },
    { name: 'IoT Vulnerabilities', value: 5, color: CHART_COLORS.info },
  ]

  // Threat trend data
  const threatTrendData = [
    { month: 'Jan', emerging: 12, active: 34, mitigated: 28 },
    { month: 'Feb', emerging: 15, active: 38, mitigated: 32 },
    { month: 'Mar', emerging: 18, active: 42, mitigated: 35 },
    { month: 'Apr', emerging: 22, active: 45, mitigated: 41 },
    { month: 'May', emerging: 19, active: 48, mitigated: 44 },
    { month: 'Jun', emerging: 25, active: 52, mitigated: 48 },
  ]

  // Sector impact data
  const sectorImpactData = [
    { sector: 'Finance', risk: 78, exposure: 92 },
    { sector: 'Government', risk: 85, exposure: 88 },
    { sector: 'Energy', risk: 72, exposure: 95 },
    { sector: 'Healthcare', risk: 65, exposure: 78 },
    { sector: 'Telecom', risk: 68, exposure: 82 },
    { sector: 'Transportation', risk: 58, exposure: 72 },
  ]

  // Emerging threats list
  const emergingThreatsList = [
    { id: 1, threat: 'AI-Generated Phishing Campaigns', description: 'LLM-powered personalized phishing at scale', severity: 'CRITICAL', likelihood: 'HIGH', time: '2 days ago' },
    { id: 2, threat: 'Critical Zero-Day in Apache', description: 'Remote code execution vulnerability being actively exploited', severity: 'CRITICAL', likelihood: 'HIGH', time: '1 day ago' },
    { id: 3, threat: 'Supply Chain Attack on NPM', description: 'Malicious packages discovered in npm registry', severity: 'HIGH', likelihood: 'MEDIUM', time: '3 days ago' },
    { id: 4, threat: 'IoT Botnet Formation', description: 'New botnet targeting unpatched IoT devices', severity: 'HIGH', likelihood: 'HIGH', time: '4 days ago' },
    { id: 5, threat: 'Deepfake Voice Cloning', description: 'Voice synthesis used for fraud against UAE entities', severity: 'MEDIUM', likelihood: 'HIGH', time: '5 days ago' },
  ]

  // Predicted threats
  const predictedThreatsList = [
    { id: 1, threat: 'State-Sponsored APT Campaign', prediction: 'Expected to increase targeting critical infrastructure', confidence: 87, timeframe: 'Q2 2026' },
    { id: 2, threat: 'Ransomware Evolution', prediction: 'Next-gen ransomware with enhanced encryption', confidence: 92, timeframe: 'Q2 2026' },
    { id: 3, threat: '5G Network Vulnerabilities', prediction: 'New attack surface from 5G implementation', confidence: 78, timeframe: 'Q3 2026' },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">CRITICAL</Badge>
      case 'HIGH': return <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">HIGH</Badge>
      case 'MEDIUM': return <Badge variant="outline" className="text-xs text-amber-400 border-amber-400/50">MEDIUM</Badge>
      default: return <Badge variant="outline" className="text-xs">LOW</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="rose" className="mb-2">M-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-rose-500">Emerging Threats</h1>
          <p className="mt-2 text-platinum-400">
            AI-powered threat prediction and early warning system for UAE digital assets
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-rose-500/50 text-rose-500 hover:bg-rose-500/10">
            <Radar className="h-4 w-4" />
            Threat Radar
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Early Warning
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Threats"
          value={activeThreats}
          previousValue={activeThreats + 5}
          icon={<Bug className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
        <MetricCard
          title="Predicted Threats"
          value={predictedThreats}
          icon={<Brain className="h-6 w-6" />}
          gradient="gold"
          status="info"
        />
        <MetricCard
          title="Mitigated Threats"
          value={mitigatedThreats}
          previousValue={mitigatedThreats - 12}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Threat Score"
          value={threatScore}
          previousValue={threatScore + 8}
          icon={<Activity className="h-6 w-6" />}
          gradient="denim"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="threats">Active Threats</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="sectors">Sector Impact</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Emerging Threats Overview" description="AI-analyzed threat landscape for UAE">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Threat Type Distribution</CardTitle>
                    <CardDescription>Emerging threat categories by prevalence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={threatTypeData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">6-Month Threat Trend</CardTitle>
                    <CardDescription>Emerging vs active vs mitigated threats</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={threatTrendData}
                      xAxisKey="month"
                      lines={[
                        { dataKey: 'emerging', name: 'Emerging', color: CHART_COLORS.rose },
                        { dataKey: 'active', name: 'Active', color: CHART_COLORS.gold },
                        { dataKey: 'mitigated', name: 'Mitigated', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">AI Detection Confidence</CardTitle>
                  <CardDescription>Model accuracy for emerging threat identification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Zero-Day Detection</span>
                        <span className="font-medium text-emerald-400">94.7%</span>
                      </div>
                      <Progress value={94.7} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Threat Pattern Recognition</span>
                        <span className="font-medium text-emerald-400">91.2%</span>
                      </div>
                      <Progress value={91.2} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Predictive Analysis</span>
                        <span className="font-medium text-emerald-400">87.8%</span>
                      </div>
                      <Progress value={87.8} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Anomaly Detection</span>
                        <span className="font-medium text-emerald-400">96.3%</span>
                      </div>
                      <Progress value={96.3} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Active Threats Tab */}
        <TabsContent value="threats" className="space-y-6">
          <GlassPanel title="Active Emerging Threats" description="Currently active threats requiring attention">
            <div className="space-y-6">
              <Card className="glass-card border-rose-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Critical Emerging Threats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[350px]">
                    <div className="space-y-3">
                      {emergingThreatsList.map((threat) => (
                        <div key={threat.id} className="flex items-start justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                          <div className="flex-1">
                            <p className="font-semibold text-platinum-200">{threat.threat}</p>
                            <p className="text-sm text-platinum-400 mt-1">{threat.description}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col items-end gap-1">
                              {getSeverityBadge(threat.severity)}
                              <Badge variant="outline" className="text-xs text-platinum-400">
                                {threat.likelihood} Likelihood
                              </Badge>
                            </div>
                            <span className="text-xs text-platinum-400">{threat.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Threat Severity Matrix</CardTitle>
                  <CardDescription>Active threats plotted by severity and impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sectorImpactData}
                    xAxisKey="sector"
                    bars={[
                      { dataKey: 'risk', name: 'Risk Score', color: CHART_COLORS.rose },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Predictions Tab */}
        <TabsContent value="predictions" className="space-y-6">
          <GlassPanel title="AI Threat Predictions" description="Machine learning powered threat forecasting">
            <div className="space-y-6">
              <Card className="glass-card border-gold-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-gold-700">
                    <Brain className="h-5 w-5" />
                    Predicted Threats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {predictedThreatsList.map((threat) => (
                        <div key={threat.id} className="flex items-start justify-between rounded-lg bg-gold-500/10 p-4 border border-gold-500/30">
                          <div className="flex-1">
                            <p className="font-semibold text-platinum-200">{threat.threat}</p>
                            <p className="text-sm text-platinum-400 mt-1">{threat.prediction}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-center">
                              <div className="text-lg font-bold text-gold-700">{threat.confidence}%</div>
                              <p className="text-xs text-platinum-400">Confidence</p>
                            </div>
                            <div className="text-center">
                              <Badge variant="outline" className="text-xs text-gold-700 border-gold-400/50">
                                {threat.timeframe}
                              </Badge>
                              <p className="text-xs text-platinum-400 mt-1">Timeframe</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Prediction Accuracy</CardTitle>
                  <CardDescription>Historical accuracy of AI threat predictions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">89%</div>
                      <p className="text-sm text-platinum-400">Overall Accuracy</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-gold-700">156</div>
                      <p className="text-sm text-platinum-400">Threats Predicted</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-navy-500">23</div>
                      <p className="text-sm text-platinum-400">Currently Active</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-rose-500">47</div>
                      <p className="text-sm text-platinum-400">Mitigated</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sector Impact Tab */}
        <TabsContent value="sectors" className="space-y-6">
          <GlassPanel title="Sector Impact Analysis" description="Emerging threat exposure by sector">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Risk by Sector</CardTitle>
                  <CardDescription>Emerging threat risk and exposure scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sectorImpactData}
                    xAxisKey="sector"
                    bars={[
                      { dataKey: 'risk', name: 'Risk', color: CHART_COLORS.rose },
                      { dataKey: 'exposure', name: 'Exposure', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sector Details</CardTitle>
                  <CardDescription>Detailed breakdown by critical sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {sectorImpactData.map((sector, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy-500">
                              <Globe className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{sector.sector}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className={`text-lg font-bold ${sector.risk > 70 ? 'text-rose-400' : 'text-orange-400'}`}>
                                {sector.risk}%
                              </div>
                              <p className="text-xs text-platinum-400">Risk</p>
                            </div>
                            <div className="text-center">
                              <div className={`text-lg font-bold ${sector.exposure > 85 ? 'text-gold-700' : 'text-platinum-400'}`}>
                                {sector.exposure}%
                              </div>
                              <p className="text-xs text-platinum-400">Exposure</p>
                            </div>
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
