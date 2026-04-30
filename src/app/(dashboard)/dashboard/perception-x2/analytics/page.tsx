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
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  Brain,
  DollarSign,
  Download,
  Eye,
  FileText,
  Goal,
  Heart,
  Lock,
  MapPin,
  PieChart as LucidePieChart,
  Plus,
  Shield,
  Smartphone,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { perceptionData } from '@/lib/data-loader'

export default function AnalyticsPage() {
  // Extract real data from data loader
  const { beliefTopology, roi } = perceptionData.analytics
  // ROI trend data
  const roiTrendData = [
    { month: 'Aug', roi: 3.2, investment: 85000, returns: 272000 },
    { month: 'Sep', roi: 3.5, investment: 92000, returns: 322000 },
    { month: 'Oct', roi: 3.8, investment: 98000, returns: 372400 },
    { month: 'Nov', roi: 4.0, investment: 105000, returns: 420000 },
    { month: 'Dec', roi: 4.1, investment: 112000, returns: 459200 },
    { month: 'Jan', roi: 4.2, investment: 118000, returns: 495600 },
  ]

  // Belief shift analysis
  const beliefShiftData = [
    { category: 'Vaccine Safety', positive: 18, negative: 5, neutral: 2 },
    { category: 'Insurance Trust', positive: 12, negative: 8, neutral: 3 },
    { category: 'Digital Health', positive: 22, negative: 3, neutral: 1 },
    { category: 'Privacy Concerns', positive: 5, negative: 15, neutral: 8 },
    { category: 'Preventive Care', positive: 15, negative: 6, neutral: 4 },
  ]

  // Campaign performance metrics
  const campaignPerformanceData = [
    { campaign: 'Vaccine Awareness', reach: 2400000, engagement: 8.5, roi: 450 },
    { campaign: 'Mental Health', reach: 1850000, engagement: 9.2, roi: 520 },
    { campaign: 'Preventive Care', reach: 1650000, engagement: 7.8, roi: 380 },
    { campaign: 'Insurance Guide', reach: 1250000, engagement: 8.1, roi: 410 },
    { campaign: 'Healthy Living', reach: 980000, engagement: 8.8, roi: 360 },
  ]

  // Platform ROI comparison
  const platformROIData = [
    { platform: 'Instagram', roi: 520, investment: 25000, returns: 130000 },
    { platform: 'Twitter/X', roi: 410, investment: 18000, returns: 73800 },
    { platform: 'LinkedIn', roi: 380, investment: 15000, returns: 57000 },
    { platform: 'Facebook', roi: 350, investment: 22000, returns: 77000 },
    { platform: 'TikTok', roi: 620, investment: 12000, returns: 74400 },
  ]

  // Belief topology radar
  const beliefTopologyData = [
    { dimension: 'Trust', current: 78, target: 85 },
    { dimension: 'Awareness', current: 85, target: 90 },
    { dimension: 'Engagement', current: 72, target: 80 },
    { dimension: 'Compliance', current: 68, target: 75 },
    { dimension: 'Satisfaction', current: 75, target: 82 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Analytics</h1>
          <p className="mt-2 text-slate-600">
            Belief topology analytics and comprehensive ROI calculator
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Reports
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <BarChart3 className="h-4 w-4" />
            Custom Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total ROI"
          value="4.2x"
          previousValue={3.8}
          icon={<DollarSign className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Narratives Tracked"
          value="150"
          previousValue={142}
          icon={<Target className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Belief Shifts Detected"
          value="23"
          previousValue={18}
          icon={<Brain className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Reports Generated"
          value="847"
          previousValue={723}
          icon={<FileText className="h-6 w-6" />}
          gradient="cyan"
        />
      </div>

      <Tabs defaultValue="belief" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="belief">Belief Topology</TabsTrigger>
          <TabsTrigger value="roi">ROI Calculator</TabsTrigger>
          <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
          <TabsTrigger value="reports">Custom Reports</TabsTrigger>
          <TabsTrigger value="strategic">Strategic Analysis</TabsTrigger>
        </TabsList>

        {/* Belief Topology */}
        <TabsContent value="belief" className="space-y-6">
          <GlassPanel title="Belief Topology Analytics" description="Deep analysis of audience belief systems and shifts">
            <div className="space-y-6">
              {/* Belief Overview */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-slate-900">150</div>
                      <div className="text-sm text-slate-600 mt-2">Beliefs Tracked</div>
                      <div className="text-xs text-slate-500 mt-1">Across 12 categories</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-emerald-600">+23</div>
                      <div className="text-sm text-slate-600 mt-2">Positive Shifts</div>
                      <div className="text-xs text-emerald-600 mt-1">This month</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-rose-600">-8</div>
                      <div className="text-sm text-slate-600 mt-2">Negative Shifts</div>
                      <div className="text-xs text-rose-600 mt-1">This month</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Belief Categories */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Belief Categories</CardTitle>
                  <CardDescription>Tracked beliefs by topic area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {beliefCategories.map((category, index) => (
                      <div key={index} className="space-y-3 rounded-lg bg-slate-50/50 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {category.icon}
                            <span className="font-semibold text-slate-900">{category.name}</span>
                          </div>
                          <Badge variant={category.trend === 'positive' ? 'success' : category.trend === 'negative' ? 'destructive' : 'secondary'} className="text-xs">
                            {category.trend}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Positive Beliefs</span>
                            <span className="font-semibold text-emerald-600">{category.positive}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Negative Beliefs</span>
                            <span className="font-semibold text-rose-600">{category.negative}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Neutral Beliefs</span>
                            <span className="font-semibold text-slate-600">{category.neutral}</span>
                          </div>
                        </div>
                        <Progress value={category.positiveRate} className="h-2" />
                        <div className="text-xs text-slate-500 text-center">{category.positiveRate}% positive sentiment</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Significant Belief Shifts */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Significant Belief Shifts</CardTitle>
                      <CardDescription>Notable changes in audience beliefs</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View All Shifts</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {beliefShifts.map((shift, index) => (
                      <div key={index} className={`flex items-start gap-4 rounded-lg border-2 p-4 ${
                        shift.direction === 'positive' ? 'border-emerald-200 bg-emerald-50/30' : 'border-rose-200 bg-rose-50/30'
                      }`}>
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                          shift.direction === 'positive' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                        }`}>
                          {shift.direction === 'positive' ? <TrendingUp className="h-6 w-6" /> : <TrendingDown className="h-6 w-6" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-slate-900">{shift.belief}</h4>
                              <p className="mt-1 text-sm text-slate-600">{shift.description}</p>
                              <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                                <span>Category: {shift.category}</span>
                                <span>•</span>
                                <span>Change: {shift.change}%</span>
                                <span>•</span>
                                <span>{shift.timeframe}</span>
                              </div>
                            </div>
                            <Badge variant={shift.direction === 'positive' ? 'success' : 'destructive'} className="text-xs">
                              {shift.direction === 'positive' ? 'Improvement' : 'Decline'}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="gap-1 shrink-0">
                          <Eye className="h-3 w-3" />
                          Analyze
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* ROI Calculator */}
        <TabsContent value="roi" className="space-y-6">
          {/* ROI Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">6-Month ROI Trend</CardTitle>
                <CardDescription>Investment vs. returns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={roiTrendData}
                  xAxisKey="month"
                  lines={[
                    { dataKey: 'roi', name: 'ROI Multiple', color: CHART_COLORS.emerald },
                    { dataKey: 'investment', name: 'Investment (K)', color: CHART_COLORS.indigo },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Platform ROI Comparison</CardTitle>
                <CardDescription>Return on investment by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={platformROIData}
                  xAxisKey="platform"
                  bars={[
                    { dataKey: 'roi', name: 'ROI %', color: CHART_COLORS.emerald },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Comprehensive ROI Calculator" description="Measure return on investment across all campaigns">
            <div className="space-y-6">
              {/* ROI Overview */}
              <div className="grid gap-6 lg:grid-cols-4">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-extrabold text-emerald-600">4.2x</div>
                    <div className="text-sm text-slate-600 mt-2">Overall ROI</div>
                    <div className="text-xs text-emerald-600 mt-1">+15% from last quarter</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-extrabold text-slate-900">AED 3.4M</div>
                    <div className="text-sm text-slate-600 mt-2">Total Investment</div>
                    <div className="text-xs text-slate-500 mt-1">FY 2025-2026</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-extrabold text-purple-600">AED 14.2M</div>
                    <div className="text-sm text-slate-600 mt-2">Value Generated</div>
                    <div className="text-xs text-emerald-600 mt-1">+22% from target</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-extrabold text-cyan-600">87%</div>
                    <div className="text-sm text-slate-600 mt-2">Budget Utilized</div>
                    <div className="text-xs text-slate-500 mt-1">On track</div>
                  </CardContent>
                </Card>
              </div>

              {/* ROI by Campaign */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">ROI by Campaign</CardTitle>
                  <CardDescription>Detailed performance breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {campaignROI.map((campaign, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-${campaign.color} text-white`}>
                              {campaign.icon}
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">{campaign.name}</div>
                              <div className="text-xs text-slate-500">{campaign.platform}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6 text-sm">
                            <div className="text-right">
                              <div className="text-slate-500">Investment</div>
                              <div className="font-semibold text-slate-900">{campaign.investment}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-slate-500">Returns</div>
                              <div className="font-semibold text-emerald-600">{campaign.returns}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-slate-500">ROI</div>
                              <div className={`font-bold ${campaign.roiValue >= 4 ? 'text-emerald-600' : campaign.roiValue >= 2 ? 'text-amber-600' : 'text-rose-600'}`}>
                                {campaign.roi}x
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className={`h-full rounded-full bg-gradient-${campaign.color}`} style={{ width: `${Math.min(campaign.roiValue * 20, 100)}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* ROI Calculator */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">ROI Projection Calculator</CardTitle>
                  <CardDescription>Estimate returns for planned campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">Campaign Investment</label>
                        <div className="relative">
                          <span className="absolute left-3 top-2 text-slate-500">AED</span>
                          <input type="text" className="w-full rounded-lg border border-slate-300 p-2 pl-12" placeholder="100,000" defaultValue="100,000" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">Expected Duration</label>
                        <select className="w-full rounded-lg border border-slate-300 p-2">
                          <option>1 month</option>
                          <option>3 months</option>
                          <option>6 months</option>
                          <option>12 months</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">Target Platform</label>
                        <select className="w-full rounded-lg border border-slate-300 p-2">
                          <option>Multi-platform</option>
                          <option>Social Media Only</option>
                          <option>Traditional Media</option>
                          <option>Digital Only</option>
                        </select>
                      </div>
                      <Button className="w-full bg-gradient-indigo hover:opacity-90 text-white gap-2">
                        <Zap className="h-4 w-4" />
                        Calculate ROI
                      </Button>
                    </div>
                    <div className="rounded-lg bg-gradient-indigo/5 border border-indigo-200 p-6">
                      <div className="text-center">
                        <div className="text-sm text-slate-600 mb-2">Projected ROI</div>
                        <div className="text-5xl font-extrabold text-indigo-600">4.8x</div>
                        <div className="text-sm text-slate-600 mt-2">Expected Return</div>
                        <div className="text-2xl font-bold text-emerald-600 mt-1">AED 480,000</div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-indigo-200">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-600">Confidence Level</span>
                            <span className="font-semibold text-slate-900">87%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-600">Risk Factor</span>
                            <span className="font-semibold text-emerald-600">Low</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-600">Payback Period</span>
                            <span className="font-semibold text-slate-900">2.3 months</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Performance Metrics */}
        <TabsContent value="performance" className="space-y-6">
          <GlassPanel title="Performance Metrics Dashboard" description="Comprehensive performance analytics">
            <div className="space-y-6">
              {/* Performance Categories */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-500" />
                      <CardTitle className="text-lg">Audience Metrics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {audienceMetrics.map((metric, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-700">{metric.name}</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs ${metric.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {metric.change >= 0 ? <ArrowUp className="h-3 w-3 inline" /> : <ArrowDown className="h-3 w-3 inline" />}
                                {Math.abs(metric.change)}%
                              </span>
                              <span className="text-sm font-bold text-slate-900">{metric.value}</span>
                            </div>
                          </div>
                          <Progress value={metric.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-emerald-500" />
                      <CardTitle className="text-lg">Engagement Metrics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {engagementMetrics.map((metric, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-700">{metric.name}</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs ${metric.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {metric.change >= 0 ? <ArrowUp className="h-3 w-3 inline" /> : <ArrowDown className="h-3 w-3 inline" />}
                                {Math.abs(metric.change)}%
                              </span>
                              <span className="text-sm font-bold text-slate-900">{metric.value}</span>
                            </div>
                          </div>
                          <Progress value={metric.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-cyan-500" />
                      <CardTitle className="text-lg">Conversion Metrics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {conversionMetrics.map((metric, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-700">{metric.name}</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs ${metric.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {metric.change >= 0 ? <ArrowUp className="h-3 w-3 inline" /> : <ArrowDown className="h-3 w-3 inline" />}
                                {Math.abs(metric.change)}%
                              </span>
                              <span className="text-sm font-bold text-slate-900">{metric.value}</span>
                            </div>
                          </div>
                          <Progress value={metric.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-rose-500" />
                      <CardTitle className="text-lg">Sentiment Metrics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sentimentMetrics.map((metric, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-700">{metric.name}</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs ${metric.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {metric.change >= 0 ? <ArrowUp className="h-3 w-3 inline" /> : <ArrowDown className="h-3 w-3 inline" />}
                                {Math.abs(metric.change)}%
                              </span>
                              <span className="text-sm font-bold text-slate-900">{metric.value}</span>
                            </div>
                          </div>
                          <Progress value={metric.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Custom Reports */}
        <TabsContent value="reports" className="space-y-6">
          <GlassPanel title="Custom Reports" description="Generate and schedule custom analytics reports">
            <div className="space-y-6">
              {/* Report Templates */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Report Templates</CardTitle>
                      <CardDescription>Quick-start templates for common reports</CardDescription>
                    </div>
                    <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
                      <Plus className="h-4 w-4" />
                      New Template
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {reportTemplates.map((template, index) => (
                      <Card key={index} className="glass-card group hover:shadow-glass-lg transition-all">
                        <CardHeader className="pb-3">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-${template.color} text-white`}>
                            {template.icon}
                          </div>
                          <CardTitle className="text-base mt-2">{template.name}</CardTitle>
                          <CardDescription className="text-xs">{template.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" size="sm" className="w-full gap-1">
                            <FileText className="h-3 w-3" />
                            Generate
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Scheduled Reports */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Scheduled Reports</CardTitle>
                      <CardDescription>Automated report generation and delivery</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">Schedule New</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {scheduledReports.map((report, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-lg bg-slate-50/50 p-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-${report.color} text-white`}>
                          {report.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900">{report.name}</div>
                          <div className="text-xs text-slate-500">Every {report.frequency} • Next: {report.nextRun}</div>
                        </div>
                        <Badge variant="success" className="text-xs">Active</Badge>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Strategic Analysis Tab */}
        <TabsContent value="strategic" className="space-y-6">
          <GlassPanel title="Abu Dhabi Health Ecosystem Strategic Analysis (2024-2026)" description="Comprehensive analysis of narrative, human, and operational assets" badge="Strategic Intelligence">
            <div className="space-y-6">
              {/* Executive Summary */}
              <Card className="glass-card border-indigo-200 bg-indigo-50/30">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                      <Brain className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-indigo-900">Structural Re-Engineering: The Golden Threads of Health</CardTitle>
                      <CardDescription className="text-indigo-700/80 mt-2">
                        Abu Dhabi is transitioning from reactive clinical models to a proactive, technology-enabled longevity ecosystem. With AED 94 billion GDP contribution projected by 2045, the system faces three primary challenges: Digital Trust Chasm, Linguistic/Cultural Alignment, and Influencer Authenticity vs. Regulation.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Table 1: Full-Lifecycle Narratives */}
              <Card className="glass-card border-purple-200 bg-purple-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Full-Lifecycle Narratives (50 Mega-Narratives)</CardTitle>
                      <CardDescription>Strategic messaging in a high-growth environment</CardDescription>
                    </div>
                    <Badge variant="purple" className="text-xs">Narrative Intelligence</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-2 pr-4">
                      {lifecycleNarratives.map((narrative, index) => (
                        <Card key={index} className="border-l-4 border-l-purple-400 bg-purple-50/20">
                          <CardContent className="p-3">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <div className="font-semibold text-slate-900">{narrative.headline}</div>
                                <div className="text-xs text-slate-500 mt-1">Source: {narrative.source}</div>
                              </div>
                              <Badge variant="outline" className="text-xs shrink-0">{narrative.counterMove}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Table 2: Influencer Matrix */}
              <Card className="glass-card border-emerald-200 bg-emerald-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Strategic Influencer Leadership (50 System Nodes)</CardTitle>
                      <CardDescription>Human infrastructure and influencer ecosystem</CardDescription>
                    </div>
                    <Badge variant="success" className="text-xs">SIL Matrix</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-2 pr-4">
                      {influencerMatrix.map((influencer, index) => (
                        <Card key={index} className="border-l-4 border-l-emerald-400 bg-emerald-50/20">
                          <CardContent className="p-3">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <div className="font-semibold text-slate-900">{influencer.name}</div>
                                <div className="text-xs text-slate-500 mt-1">{influencer.platform} • {influencer.influenceType}</div>
                              </div>
                              <Badge variant={influencer.influenceType === 'Ally' ? 'success' : 'warning'} className="text-xs shrink-0">
                                {influencer.campaign}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Table 3: Crisis Scenarios */}
              <Card className="glass-card border-rose-200 bg-rose-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Crisis Scenario Catalog (50 Threat Library)</CardTitle>
                      <CardDescription>Building a resilient system threat library</CardDescription>
                    </div>
                    <Badge variant="destructive" className="text-xs">War Room Ready</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-2 pr-4">
                      {crisisScenarios.map((scenario, index) => (
                        <Card key={index} className="border-l-4 border-l-rose-400 bg-rose-50/20">
                          <CardContent className="p-3">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <div className="font-semibold text-slate-900">{scenario.scenario}</div>
                                <div className="text-xs text-slate-500 mt-1">Trigger: {scenario.trigger} • Response: {scenario.responseSpeed}</div>
                              </div>
                              <Badge variant={scenario.impact === 'Extreme' ? 'destructive' : scenario.impact === 'High' ? 'warning' : 'secondary'} className="text-xs shrink-0">
                                {scenario.impact}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Table 4: Pain Points */}
              <Card className="glass-card border-amber-200 bg-amber-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Resident Pain Points & UX Analysis (50)</CardTitle>
                      <CardDescription>Psychological mapping of healthcare friction</CardDescription>
                    </div>
                    <Badge variant="warning" className="text-xs">User Experience</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-2 pr-4">
                      {painPoints.map((point, index) => (
                        <Card key={index} className="border-l-4 border-l-amber-400 bg-amber-50/20">
                          <CardContent className="p-3">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <div className="font-semibold text-slate-900">{point.pain}</div>
                                <div className="text-xs text-amber-700 mt-1">{point.emotion}</div>
                              </div>
                              <Badge variant="outline" className="text-xs shrink-0 max-w-[40%] truncate">{point.solution}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Table 5: Tone Audit */}
              <Card className="glass-card border-cyan-200 bg-cyan-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Brand Voice & Tone Audit (50)</CardTitle>
                      <CardDescription>Linguistic resonance vs. institutional mismatch analysis</CardDescription>
                    </div>
                    <Badge variant="cyan" className="text-xs">Tone Intelligence</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-2 pr-4">
                      {toneAudits.map((tone, index) => (
                        <Card key={index} className="border-l-4 border-l-cyan-400 bg-cyan-50/20">
                          <CardContent className="p-3">
                            <div className="flex items-start gap-3">
                              <div className="flex-1">
                                <div className="text-sm font-medium text-slate-900">"{tone.content}"</div>
                                <div className="text-xs text-slate-500 mt-1">Current: {tone.currentTone} • Perception: {tone.perception}</div>
                              </div>
                              <Badge variant="outline" className="text-xs shrink-0 max-w-[40%]">{tone.correction}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Strategic Outlook */}
              <Card className="glass-card border-indigo-200 bg-indigo-50/20">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                      <Target className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-indigo-900">Three Primary Structural Challenges</CardTitle>
                      <CardDescription className="text-indigo-700/80 mt-2">
                        <strong>1. Digital Trust Chasm:</strong> Vulnerability to cyberattacks like Gunra ransomware threatens reputational damage. Digital sovereignty must be communicated as resident protection.<br/><br/>
                        <strong>2. Linguistic & Cultural Alignment:</strong> Front-end service gaps require massive investment in empathy training and multilingual clarity.<br/><br/>
                        <strong>3. Influencer Authenticity vs. Regulation:</strong> The Advertiser Permit system ensures safety but risks creating a credibility void if influencers lose authentic voice.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Data
const beliefCategories = [
  { name: 'Healthcare Trust', positive: 42, negative: 8, neutral: 12, positiveRate: 70, trend: 'positive', icon: <Shield className="h-4 w-4 text-emerald-500" /> },
  { name: 'Vaccine Safety', positive: 38, negative: 15, neutral: 18, positiveRate: 54, trend: 'positive', icon: <Shield className="h-4 w-4 text-emerald-500" /> },
  { name: 'Insurance Confidence', positive: 28, negative: 22, neutral: 14, positiveRate: 42, trend: 'negative', icon: <Shield className="h-4 w-4 text-amber-500" /> },
  { name: 'Digital Health', positive: 35, negative: 8, neutral: 10, positiveRate: 66, trend: 'positive', icon: <Smartphone className="h-4 w-4 text-emerald-500" /> },
  { name: 'Mental Health', positive: 45, negative: 5, neutral: 8, positiveRate: 78, trend: 'positive', icon: <Heart className="h-4 w-4 text-emerald-500" /> },
  { name: 'Privacy Concerns', positive: 12, negative: 35, neutral: 18, positiveRate: 19, trend: 'negative', icon: <Lock className="h-4 w-4 text-rose-500" /> },
]

const beliefShifts = [
  {
    belief: 'Mental Health is Important',
    description: 'Increased acceptance and prioritization of mental health',
    direction: 'positive',
    category: 'Mental Health',
    change: 15,
    timeframe: 'Last 30 days',
  },
  {
    belief: 'Vaccines are Safe',
    description: 'Growing confidence in vaccine safety following education campaign',
    direction: 'positive',
    category: 'Vaccine Safety',
    change: 12,
    timeframe: 'Last 30 days',
  },
  {
    belief: 'Insurance Claims are Fair',
    description: 'Declining trust in insurance claim processing',
    direction: 'negative',
    category: 'Insurance Confidence',
    change: -8,
    timeframe: 'Last 30 days',
  },
  {
    belief: 'Health Apps are Useful',
    description: 'Positive perception of digital health tools',
    direction: 'positive',
    category: 'Digital Health',
    change: 18,
    timeframe: 'Last 30 days',
  },
]

const campaignROI = [
  { name: 'Mental Health Campaign', platform: 'Multi-platform', investment: 'AED 125K', returns: 'AED 525K', roi: '4.2x', roiValue: 4.2, color: 'purple', icon: <Heart className="h-5 w-5" /> },
  { name: 'Vaccine Education', platform: 'Social Media', investment: 'AED 89K', returns: 'AED 338K', roi: '3.8x', roiValue: 3.8, color: 'emerald', icon: <Shield className="h-5 w-5" /> },
  { name: 'Digital Health Push', platform: 'Digital Only', investment: 'AED 67K', returns: 'AHD 268K', roi: '4.0x', roiValue: 4.0, color: 'denim', icon: <Smartphone className="h-5 w-5" /> },
  { name: 'Healthcare Access', platform: 'Traditional + Digital', investment: 'AED 156K', returns: 'AED 795K', roi: '5.1x', roiValue: 5.1, color: 'rose', icon: <MapPin className="h-5 w-5" /> },
]

const audienceMetrics = [
  { name: 'Total Reach', value: '12.4M', change: 12.3, progress: 78 },
  { name: 'Unique Users', value: '8.7M', change: 8.7, progress: 72 },
  { name: 'Repeat Engagement', value: '67%', change: 5.4, progress: 67 },
  { name: 'Cross-Platform', value: '43%', change: 15.2, progress: 43 },
]

const engagementMetrics = [
  { name: 'Engagement Rate', value: '8.7%', change: 12.5, progress: 87 },
  { name: 'Click-Through Rate', value: '4.2%', change: 8.3, progress: 42 },
  { name: 'Share Rate', value: '12.8%', change: 18.7, progress: 65 },
  { name: 'Comment Rate', value: '6.4%', change: 9.2, progress: 54 },
]

const conversionMetrics = [
  { name: 'Conversion Rate', value: '3.2%', change: 15.4, progress: 32 },
  { name: 'Lead Generation', value: '24.5K', change: 22.1, progress: 82 },
  { name: 'Cost Per Conversion', value: 'AED 47', change: -8.9, progress: 73 },
  { name: 'Return on Ad Spend', value: '4.8x', change: 14.2, progress: 86 },
]

const sentimentMetrics = [
  { name: 'Positive Sentiment', value: '73%', change: 5.2, progress: 73 },
  { name: 'Negative Sentiment', value: '18%', change: -12.4, progress: 18 },
  { name: 'Neutral Sentiment', value: '9%', change: -2.1, progress: 9 },
  { name: 'Brand Affinity', value: '68%', change: 7.8, progress: 68 },
]

const reportTemplates = [
  { name: 'Executive Summary', description: 'High-level overview for leadership', color: 'purple', icon: <BarChart3 className="h-5 w-5" /> },
  { name: 'Campaign Performance', description: 'Detailed campaign analytics', color: 'emerald', icon: <Target className="h-5 w-5" /> },
  { name: 'Audience Insights', description: 'Demographic and psychographic data', color: 'denim', icon: <Users className="h-5 w-5" /> },
  { name: 'ROI Analysis', description: 'Financial performance breakdown', color: 'cyan', icon: <DollarSign className="h-5 w-5" /> },
  { name: 'Sentiment Report', description: 'Emotional analysis and trends', color: 'rose', icon: <Brain className="h-5 w-5" /> },
  { name: 'Competitive Analysis', description: 'Market position and share', color: 'amber', icon: <LucidePieChart className="h-5 w-5" /> },
]

const scheduledReports = [
  { name: 'Weekly Performance Dashboard', frequency: 'Monday 9:00 AM', nextRun: 'Jan 13, 2026', color: 'purple', icon: <BarChart3 className="h-5 w-5" /> },
  { name: 'Monthly ROI Summary', frequency: '1st of month', nextRun: 'Feb 1, 2026', color: 'cyan', icon: <DollarSign className="h-5 w-5" /> },
  { name: 'Executive Briefing', frequency: 'Friday 5:00 PM', nextRun: 'Jan 17, 2026', color: 'emerald', icon: <FileText className="h-5 w-5" /> },
]

// File 12: ABU DHABI HEALTH STRATEGIC ANALYSIS - Data Arrays (250 Total Data Points)

// Table 1: Full-Lifecycle Narratives (50)
const lifecycleNarratives: Array<{
  headline: string
  source: string
  counterMove: string
}> = [
  { headline: 'The 11.5% Insurance Premium Surge', source: 'WTW / Insurance Reports', counterMove: 'Quality ROI' },
  { headline: 'AI as a Driver of Healthcare Inflation', source: 'Industry Analysis', counterMove: 'AI Efficiency Narrative' },
  { headline: 'The "Western vs. Local" Quality Gap', source: 'Expat Social Media', counterMove: 'Doctor Spotlight Series' },
  { headline: 'Mandatory MMR Booster Panic', source: 'WhatsApp Parent Groups', counterMove: 'Pediatrician Video Series' },
  { headline: 'Golden Visa (GV) Insurance Exemption', source: 'Reddit r/abudhabi', counterMove: 'GV Exemption Infographic' },
  { headline: 'Hidden Fines in the Tamm Platform', source: 'Expat Forum Threads', counterMove: 'Fine Explanation Campaign' },
  { headline: 'The "Empty" Clinic Receptionist Perception', source: 'Patient Complaints', counterMove: 'Behind the Scenes Content' },
  { headline: 'Obesity as a Biological Disease', source: 'Gulf News / Medical Briefs', counterMove: 'Science-Based Narrative' },
  { headline: 'Mental Health as a Sign of Strength', source: 'DoH Official Press', counterMove: 'Beauty of Our Mind Series' },
  { headline: 'Fraudulent Sick Leave Crackdown', source: 'National News', counterMove: 'System Integrity Message' },
  { headline: 'The Sick-Care to Longevity Pivot', source: 'ADGHW 2025 Press', counterMove: 'Prevention-First Story' },
  { headline: 'Vaccine Hub Logistics Sovereignty', source: 'Industry Announcements', counterMove: 'Global Supply Chain Positioning' },
  { headline: 'Data Breach Anxiety in Private Care', source: 'Cybernews (AHD Breach)', counterMove: 'ADHICS Gold Standard Promotion' },
  { headline: 'Vaping and Electronic Smoking Hazards', source: 'ResearchGate / Medical Briefs', counterMove: 'VAPeS Youth Campaigns' },
  { headline: 'Life Sciences as an Economic Driver', source: 'Economic Times', counterMove: 'GDP Linkage Narrative' },
  { headline: '24/7 Food Safety Vigilance', source: 'ADAFSA Reports', counterMove: 'Real-Time Safe Dining Badges' },
  { headline: 'The Active Ramadan Movement', source: 'ADPHC Channels', counterMove: 'Worship-Health Story' },
  { headline: 'Post-COVID Syndrome Management', source: 'Clinical Profiles', counterMove: 'Long-COVID Care Pathways' },
  { headline: 'Decarbonizing the Health Ecosystem', source: 'M42 / AstraZeneca MoU', counterMove: 'Healthy Planet Narrative' },
  { headline: 'Autism Health Equity Gap', source: 'ADGHW White Paper', counterMove: 'Digital Inclusion Policy Story' },
  { headline: 'Pediatric Home Safety Standards', source: 'Early Childhood Authority', counterMove: 'Parent Safety Hero Story' },
  { headline: 'The Rise of Medical Tourism Hubs', source: 'Industry Analysis', counterMove: 'Surgical Excellence Branding' },
  { headline: 'Insurance Network Exclusions Backlash', source: 'Middle East Insurance Review', counterMove: 'Tier-1 Provider Guide' },
  { headline: 'Genomic Data Sovereignty', source: 'M42 Partnerships', counterMove: 'DNA Protected Narrative' },
  { headline: 'Global Talent War for Nursing', source: 'WEF PHSSR Report', counterMove: 'Careers Flourish Story' },
  { headline: 'Workplace Mental Health Stigma', source: 'Corporate Webinars', counterMove: 'Burnout Storytelling' },
  { headline: 'Child Passenger Safety Enforcement', source: 'ADPHC News', counterMove: 'Small Lives Science Story' },
  { headline: 'Metabolic Health Blueprint', source: 'National Obesity Taskforce', counterMove: 'Resilient Nation Story' },
  { headline: 'Digital Literacy for Senior Health', source: 'DoH News', counterMove: 'Grandparents in Cloud Story' },
  { headline: 'Pharmacy Over-Prescription Concerns', source: 'WTW Global Survey', counterMove: 'Right Path Content' },
  { headline: 'Infrastructure Decoupling from Oil', source: 'ADGHW Press', counterMove: 'Health is Wealth Story' },
  { headline: 'Cancer Screening Hesitancy', source: 'Population Surveys', counterMove: '5-Minute Exam Narrative' },
  { headline: 'Food Poisoning Accountability', source: 'Al Ain Bakery Incident', counterMove: 'Zero Tolerance Message' },
  { headline: 'Telehealth as a Strategic Cost-Saver', source: 'WTW Recommendations', counterMove: 'Virtual Advantage Content' },
  { headline: 'The Thiqa IFHAS Screening Program', source: 'ADPHC News', counterMove: 'Knowing Your Numbers Story' },
  { headline: 'Healthy School Nutrition Policy', source: 'ADEK / ADPHC News', counterMove: 'Feeding Future Story' },
  { headline: 'Global AI Healthcare Academy', source: 'ADGHW 2024', counterMove: 'Doctors of Tomorrow Story' },
  { headline: 'Post-Employment Insurance Gaps', source: 'Reddit r/uae', counterMove: '5-Step Continuity Guide' },
  { headline: 'Multi-Generational Planning', source: 'WEF Report', counterMove: 'Birth to 100 Story' },
  { headline: 'Vaccine Hesitancy in Transit', source: 'Public Health Research', counterMove: 'Trusted Experts Content' },
  { headline: '"Beauty of Our Mind" Launch', source: 'World Mental Health Day', counterMove: 'Vulnerability Strength Story' },
  { headline: 'Pest Control Transition to ADPHC', source: 'ADPHC Announcements', counterMove: 'Biological Threats Message' },
  { headline: 'The National Media "Bridge"', source: 'National Media Office', counterMove: 'Responsible Storytelling' },
  { headline: 'Supply Chain Self-Sufficiency', source: 'ADGHW 2025', counterMove: 'Made in Abu Dhabi Story' },
  { headline: 'Cardiovascular Disease Mortality', source: 'Statistics', counterMove: 'Heart of Emirate Story' },
  { headline: 'The Sahatna App Utility', source: 'DoH Announcements', counterMove: 'Unified Pocket Story' },
  { headline: 'Anti-Microbial Resistance (AMR)', source: 'ADPHC Reports', counterMove: 'Wise Use Narrative' },
  { headline: 'Bio-Security Early Warning', source: 'National EWS', counterMove: 'Always Safe Message' },
  { headline: 'Precision Medicine Accessibility', source: 'M42 Pressers', counterMove: 'Every Resident Story' },
  { headline: 'The 2045 Healthcare GDP Target', source: 'Economic Data', counterMove: 'Economic Security Story' },
]

// Table 2: Influencer Matrix (50)
const influencerMatrix: Array<{
  name: string
  platform: string
  influenceType: string
  campaign: string
}> = [
  { name: 'Dr. Adil Sajwani', platform: 'Instagram / UAEBARQ', influenceType: 'Ally (Authority)', campaign: 'Mental Health Stigma / Vaccine Confidence' },
  { name: 'Shaista Asif', platform: 'Corporate / PureHealth', influenceType: 'Ally (System)', campaign: 'Longevity & Cloud-Health Vision' },
  { name: 'Dr. Rashi Chowdhary', platform: 'Instagram', influenceType: 'Ally (Niche)', campaign: 'Gut Health, PCOS, Evidence-Based Nutrition' },
  { name: 'Helen Farmer', platform: 'Dubai Eye / Podcast', influenceType: 'Ally (Bridge)', campaign: 'Expat Parenting & School Health' },
  { name: 'Dr. Sarah Rasmi', platform: 'YouTube / Podcast', influenceType: 'Ally (Medical)', campaign: 'Mental Wellness & Cultural Adjustment' },
  { name: 'Khalid Al Ameri', platform: 'Social Media', influenceType: 'Ally (Cultural)', campaign: 'Emirati Culture, Family Wellness' },
  { name: 'Saeed Jaber Al Kuwaiti', platform: 'SEHA', influenceType: 'Ally (System)', campaign: 'Public Hospital Quality' },
  { name: 'Chahna Soni', platform: 'Instagram', influenceType: 'Ally (Wellness)', campaign: 'Nutrition, Portion Control, Motherhood' },
  { name: 'Dr. Godric', platform: 'Instagram / Health Coach', influenceType: 'Ally (Wellness)', campaign: 'Metabolic Health & 60-Day Transform' },
  { name: 'Mira Succari', platform: 'Instagram', influenceType: 'Ally (Medical)', campaign: 'Diabetes Management & Pediatric Nutrition' },
  { name: 'Abz Ali', platform: 'Instagram / Comedy', influenceType: 'Ally (Controversial)', campaign: 'Mental Health via Comedy' },
  { name: 'Roa Hadi (Fabricated)', platform: 'Instagram', influenceType: 'Ally (Medical)', campaign: 'Youth Mental Health & Fashion' },
  { name: 'Mariam (mariamshkh)', platform: 'Instagram', influenceType: 'Ally (Patient)', campaign: 'Acne Positivity & Modest Fashion' },
  { name: 'H.E. Dr. Noura Al Ghaithi', platform: 'DoH Official', influenceType: 'Ally (Policy)', campaign: 'National Mental Health & Longevity' },
  { name: 'Dr. Asma Al Mannaei', platform: 'DoH Executive', influenceType: 'Ally (System)', campaign: 'Life Sciences, AI, Precision Health' },
  { name: 'John Sunil', platform: 'Burjeel Holdings', influenceType: 'Ally (Corporate)', campaign: 'Private Growth & Cancer Care' },
  { name: 'Dimitris Moulavasilis', platform: 'M42 Executive', influenceType: 'Ally (Tech)', campaign: 'Genomic Medicine & Precision Health' },
  { name: 'Nabih', platform: 'Instagram / Coach', influenceType: 'Ally (Niche)', campaign: "Men's Longevity & Testosterone" },
  { name: 'Mona Essawi', platform: 'Instagram', influenceType: 'Ally (Wellness)', campaign: 'Organic Food, Kid-Friendly Recipes' },
  { name: 'Uma Ghosh', platform: 'Wellness Coach', influenceType: 'Ally (Wellness)', campaign: 'Holistic Beauty & Mindfulness' },
  { name: 'Zahra ben mime', platform: 'Instagram / Journalist', influenceType: 'Ally (Bridge)', campaign: 'High-Reach Public Health' },
  { name: 'Souhair Alqaisi', platform: 'Instagram / Journalist', influenceType: 'Ally (Bridge)', campaign: 'Regional Humanitarian Health' },
  { name: 'Hind Boumchamar', platform: 'Instagram / Journalist', influenceType: 'Ally (Bridge)', campaign: "Women's Health Awareness" },
  { name: 'Maryanne Peacock', platform: 'Mother Tongue', influenceType: 'Ally (Bridge)', campaign: 'Maternal Mental Health' },
  { name: 'Caroline Stanbury', platform: 'Podcast', influenceType: 'Ally (Cultural)', campaign: 'High-Net-Worth Anti-Aging' },
  { name: 'Dr. Rangan Chatterjee', platform: 'Global / Podcast', influenceType: 'Ally (Medical)', campaign: 'Holistic Health (West Trust)' },
  { name: 'Dr. Julie Smith', platform: 'Global / Instagram', influenceType: 'Ally (Medical)', campaign: 'Psychology & Mental Well-being' },
  { name: 'Essa Al Ansari', platform: 'Instagram', influenceType: 'Ally (Wellness)', campaign: 'Fitness Transformation Stories' },
  { name: 'Sofi Mahdi', platform: 'Instagram', influenceType: 'Ally (Wellness)', campaign: 'Home Workout Tips' },
  { name: 'Rania Gamal', platform: 'Instagram', influenceType: 'Ally (Wellness)', campaign: "Women's Strength Training" },
  { name: 'Omar Al Duri', platform: 'Instagram', influenceType: 'Ally (Wellness)', campaign: 'Athlete Performance' },
  { name: 'Karen Mattar', platform: 'Instagram', influenceType: 'Ally (Wellness)', campaign: 'Entrepreneurial Wellness' },
  { name: 'Faisal Al Bannai', platform: 'Tech Executive', influenceType: 'Ally (System)', campaign: 'AI in Clinical Decision Support' },
  { name: 'Nasser Al Huqbani', platform: 'Health Holding Co', influenceType: 'Ally (System)', campaign: 'Regional Infrastructure' },
  { name: 'Saeed Al Kuwaiti', platform: 'SEHA CEO', influenceType: 'Ally (System)', campaign: 'Operational Transparency' },
  { name: 'Sherif Beshara', platform: 'American Hospital Dubai', influenceType: 'Risk/Ally', campaign: 'Data Security Trust Restoration' },
  { name: 'Dr. Georges Pascal Haber', platform: 'Cleveland Clinic', influenceType: 'Ally (Authority)', campaign: 'Surgical Innovation & Cancer Care' },
  { name: 'Yendry Ventura', platform: 'AD Stem Cells Center', influenceType: 'Ally (Research)', campaign: 'Stem Cell Innovation' },
  { name: 'Roberta Marinelli', platform: 'Eli Lilly', influenceType: 'Ally (Corporate)', campaign: 'Obesity Care & Metabolic Health' },
  { name: 'Khaled Ateeq Aldhaheri', platform: 'Daman CEO', influenceType: 'Ally (Insurance)', campaign: 'Thiqa Policy Clarification' },
  { name: 'Ahmad bin Saleh Babaeer', platform: 'Dallah Healthcare', influenceType: 'Ally (Regional)', campaign: 'GCC Health Cooperation' },
  { name: 'Elie Chaillot', platform: 'GE HealthCare', influenceType: 'Ally (Tech)', campaign: 'Diagnostic Modernization' },
  { name: 'Pelin Incesu', platform: 'AstraZeneca', influenceType: 'Ally (Corporate)', campaign: 'Decarbonization & Sustainability' },
  { name: 'Sherbaz Bichu', platform: 'Aster Hospitals', influenceType: 'Ally (Private)', campaign: 'Middle-Income Access' },
  { name: 'Ahmed Shebl', platform: 'Saudi German Health', influenceType: 'Ally (Authority)', campaign: 'Private Hospital Reputation' },
  { name: 'Laila Abdel Wareth', platform: 'M42 Executive', influenceType: 'Ally (Clinical)', campaign: 'Diagnostic Excellence' },
  { name: 'Kareem Shahin', platform: 'ADHDS (M42)', influenceType: 'Ally (Data)', campaign: 'Malaffi Trust' },
  { name: 'Shanila Laiju', platform: 'Medcare', influenceType: 'Ally (Medical)', campaign: 'Pediatric & Maternity Access' },
  { name: 'Raza Siddiqui', platform: 'RAK Hospital', influenceType: 'Ally (Regional)', campaign: 'Inter-Emirate Health Synergy' },
  { name: 'Preeti Futnani', platform: 'Sanofi', influenceType: 'Ally (Corporate)', campaign: 'Chronic Disease Management' },
]

// Table 3: Crisis Scenarios (50)
const crisisScenarios: Array<{
  scenario: string
  trigger: string
  responseSpeed: string
  impact: 'Extreme' | 'High' | 'Medium' | 'Low'
}> = [
  { scenario: 'Genomic Data Exfiltration', trigger: 'Ransomware on M42', responseSpeed: 'Immediate', impact: 'Extreme' },
  { scenario: 'Mandatory Vaccine Resistance', trigger: 'Viral TikTok Misinformation', responseSpeed: '< 4 hours', impact: 'High' },
  { scenario: 'SEHA App Service Blackout', trigger: 'Cloud Infrastructure Failure', responseSpeed: 'Real-time', impact: 'High' },
  { scenario: 'Fake Sick Leave Ring Exposed', trigger: 'DoH Police Raid', responseSpeed: '< 12 hours', impact: 'Medium' },
  { scenario: 'Large-Scale Food Poisoning', trigger: 'ADAFSA News Release', responseSpeed: '< 2 hours', impact: 'High' },
  { scenario: 'Influencer Malpractice Claim', trigger: 'Viral Patient Reddit Post', responseSpeed: '< 6 hours', impact: 'High' },
  { scenario: 'Novel COVID Variant Rumors', trigger: 'Global News Leak', responseSpeed: '< 12 hours', impact: 'Extreme' },
  { scenario: 'Insurance Penalty Dispute Riot', trigger: 'Reddit r/abudhabi Coordination', responseSpeed: '< 2 hours', impact: 'Medium' },
  { scenario: 'Malaffi Privacy Breach', trigger: 'Whistleblower Leak', responseSpeed: 'Immediate', impact: 'Extreme' },
  { scenario: 'Hospital Structural Fire', trigger: 'Emergency Call (997)', responseSpeed: 'Real-time', impact: 'Extreme' },
  { scenario: 'Monkeypox Outbreak in Schools', trigger: 'Parent WhatsApp Panics', responseSpeed: '< 4 hours', impact: 'High' },
  { scenario: 'Marburg Virus National Alert', trigger: 'Global Travel Hub Leak', responseSpeed: 'Immediate', impact: 'Extreme' },
  { scenario: 'AMR Strain in NICU', trigger: 'Internal Lab Detection', responseSpeed: '< 24 hours', impact: 'High' },
  { scenario: 'Heatwave Surge in ER Visits', trigger: 'Severe Weather Alert', responseSpeed: '< 12 hours', impact: 'High' },
  { scenario: 'Counterfeit Medicine Hotline Spike', trigger: 'MoHAP Report', responseSpeed: '< 6 hours', impact: 'Medium' },
  { scenario: 'Hospital Staff Strike Rumors', trigger: 'Healthcare Professional Forums', responseSpeed: '< 24 hours', impact: 'High' },
  { scenario: 'Golden Visa Fine App Glitch', trigger: 'Tamm Technical Bug', responseSpeed: '< 12 hours', impact: 'Medium' },
  { scenario: 'Pediatric Vehicle Fatality', trigger: 'Police/ADPHC Report', responseSpeed: 'Immediate', impact: 'Extreme' },
  { scenario: 'Fraudulent Insurance Claim Probe', trigger: 'DoH Audit', responseSpeed: '< 48 hours', impact: 'Medium' },
  { scenario: 'Mass Resident Exit Panic', trigger: 'Regional Economic Rumors', responseSpeed: '< 72 hours', impact: 'High' },
  { scenario: 'Vaccine Hub Logistics Delay', trigger: 'Red Sea Supply Chain Shock', responseSpeed: '< 24 hours', impact: 'Extreme' },
  { scenario: 'Youth Vaping Addiction Peak', trigger: 'School Health Screening', responseSpeed: '< 1 week', impact: 'High' },
  { scenario: 'AI Misdiagnosis Narrative', trigger: 'International Tech Journal', responseSpeed: '< 24 hours', impact: 'High' },
  { scenario: 'Post-COVID Mental Health Crisis', trigger: 'Sahatna Data Peak', responseSpeed: '< 48 hours', impact: 'Extreme' },
  { scenario: 'Medical Tourism Botched Surgery', trigger: 'Global News Outlet', responseSpeed: '< 24 hours', impact: 'High' },
  { scenario: 'Carbon Neutral Goal Failure', trigger: 'Annual Strategic Audit', responseSpeed: '< 1 week', impact: 'Low' },
  { scenario: 'Autism Policy Exclusion Protest', trigger: 'Parent Advocacy Groups', responseSpeed: '< 24 hours', impact: 'Medium' },
  { scenario: 'ER Wait-Time Viral Video', trigger: 'Reddit r/abudhabi', responseSpeed: '< 4 hours', impact: 'High' },
  { scenario: 'Language Barrier Malpractice Claim', trigger: 'Expat Guide Social Media', responseSpeed: '< 6 hours', impact: 'High' },
  { scenario: 'Insurance Copay Sudden Surge', trigger: 'Q1 Renewal Cycle', responseSpeed: '< 12 hours', impact: 'High' },
  { scenario: 'Fraudulent WhatsApp Sick Leaves', trigger: 'DoH Investigation', responseSpeed: 'Immediate', impact: 'High' },
  { scenario: 'Gunra Ransomware Double-Extortion', trigger: 'Dark Web Leak', responseSpeed: 'Immediate', impact: 'Extreme' },
  { scenario: 'Al Ain Bakery Poisoning Case', trigger: 'Official ADAFSA Closure', responseSpeed: 'Immediate', impact: 'High' },
  { scenario: 'Misleading Medical Ad Lawsuit', trigger: 'Media Council Presser', responseSpeed: '< 12 hours', impact: 'Medium' },
  { scenario: 'Creator Licensing Fee Backlash', trigger: 'Influencer Community Reddit', responseSpeed: '< 24 hours', impact: 'Low' },
  { scenario: 'AD999 Emergency App Outage', trigger: 'System Blackout', responseSpeed: 'Real-time', impact: 'Extreme' },
  { scenario: 'Air Ambulance Mechanical Fault', trigger: 'NCEMA Report', responseSpeed: '< 2 hours', impact: 'High' },
  { scenario: 'Thiqa Network Exclusion Panic', trigger: 'DoH Regulatory Circular', responseSpeed: '< 12 hours', impact: 'Extreme' },
  { scenario: 'Receptionist "Decorative" Viral Post', trigger: 'Reddit r/abudhabi', responseSpeed: '< 24 hours', impact: 'Medium' },
  { scenario: 'Unverified Medicine Harm Event', trigger: 'Media Council Statement', responseSpeed: 'Immediate', impact: 'Extreme' },
  { scenario: 'Expat Adjustment Mental Health Gap', trigger: 'Psychology Podcast', responseSpeed: '< 1 week', impact: 'Medium' },
  { scenario: 'MMR Vaccine Shortage Rumors', trigger: 'Pharmacy Community Forums', responseSpeed: '< 6 hours', impact: 'High' },
  { scenario: 'Insulin Supply Chain Disruption', trigger: 'Global Logistics Report', responseSpeed: '< 12 hours', impact: 'Extreme' },
  { scenario: 'Pediatric Obesity Spike', trigger: 'National Survey Results', responseSpeed: '< 1 month', impact: 'High' },
  { scenario: '"Beauty of Our Mind" Tone Misstep', trigger: 'Social Media Engagement Fail', responseSpeed: '< 4 hours', impact: 'Medium' },
  { scenario: 'EHR Data Lockout (MOVEit)', trigger: 'SC Media Report', responseSpeed: 'Immediate', impact: 'Extreme' },
  { scenario: 'Telehealth Privacy Breach', trigger: 'Virtual Care Audit', responseSpeed: '< 12 hours', impact: 'High' },
  { scenario: 'Provider Consolidation Price Hike', trigger: 'Insurance Industry Review', responseSpeed: '< 48 hours', impact: 'High' },
  { scenario: 'Maternal Health Neglect Claims', trigger: 'Postnatal Survey Data', responseSpeed: '< 48 hours', impact: 'High' },
  { scenario: 'Global Sovereign Health Hub Failure', trigger: 'WEF Resilience Audit', responseSpeed: '< 1 week', impact: 'Extreme' },
]

// Table 4: Pain Points (50)
const painPoints: Array<{
  pain: string
  emotion: string
  solution: string
}> = [
  { pain: 'Unexplained Health Fines on EID', emotion: 'Anger / Fear', solution: 'How to Audit Your Insurance History Tutorial' },
  { pain: 'Tamm Fine Payment Verification Lag', emotion: 'Frustration', solution: 'Real-time Payment Received Push Notifications' },
  { pain: 'Long Wait for Dermatology Appointments', emotion: 'Hopelessness', solution: 'Virtual Derm: Instant Access for Non-Emergencies' },
  { pain: 'Language Barrier with Receptionists', emotion: 'Resentment', solution: 'Multilingual AI Concierge Case Study Highlights' },
  { pain: 'Golden Visa (GV) Fine Proof Hurdles', emotion: 'Exhaustion', solution: 'GV Exemptions: The 3 Documents You Need' },
  { pain: '"Token" Loops at Govt Hospitals', emotion: 'Anger', solution: 'Digital Queueing: Your Time is Our Priority' },
  { pain: 'Sudden Co-pay Increase at Renewal', emotion: 'Financial Stress', solution: 'Maximize Your Policy: Navigating Tier-2 Options' },
  { pain: 'OTP Requirement for Sick Leave Access', emotion: 'Irritation', solution: 'Why Security Matters: Protecting Your Health Data' },
  { pain: 'Inability to Get Boosters at Urgent Care', emotion: 'Confusion', solution: 'The Care Map: Where to Go for Which Treatment' },
  { pain: 'Pharmacy Over-Prescription Concerns', emotion: 'Suspicion', solution: 'The AMR Threat: Why We Prescribe Only What is Needed' },
  { pain: 'Post-Hospital Maternal Support Gap', emotion: 'Loneliness', solution: 'Postnatal Care: Our Home Visit Program for You' },
  { pain: 'Stigma Around Obesity Management', emotion: 'Guilt / Shame', solution: 'Science, Not Willpower: Our New Obesity Blueprint' },
  { pain: 'Conflicting ICP vs DoH Guidance', emotion: 'Anger', solution: 'Unified Health: One Government, One Answer' },
  { pain: 'Cost of Vitamins and Supplements', emotion: 'Hopelessness', solution: 'Whole Food Nutrition: Getting Vitamins from the Source' },
  { pain: 'App-Based Mental Health Screening', emotion: 'Anxiety', solution: 'Private, Secure, Strong: The Sahatna Privacy Promise' },
  { pain: 'Fraudulent Sick Leave Ring Anxiety', emotion: 'Paranoia', solution: 'Protecting Your Integrity: The DoH Enforcement Update' },
  { pain: 'School Ban on Sugary Drinks', emotion: 'Irritation (Youth)', solution: 'Fueling Brains: Delicious Low-Sugar Alternatives' },
  { pain: 'Mandatory MMR Booster (1-5 Years)', emotion: 'Worry', solution: 'Pediatrician Q&A: Why Dose 2 is the Shield of Safety' },
  { pain: 'Pest Control Request Latency', emotion: 'Disgust', solution: 'Tamm Pest-Action: Tracking Your Request in Real-Time' },
  { pain: 'Mental Health Counselor Scarcity', emotion: 'Despair', solution: 'Expanding Access: Meet Our 640+ New Professionals' },
  { pain: 'AD vs Dubai Golden Visa Confusion', emotion: 'Confusion', solution: 'Visa Sovereignty: A Plain-English Guide to Rules' },
  { pain: 'Inability to Appeal Fines Online', emotion: 'Powerlessness', solution: 'Your Voice Matters: The New Digital Appeal Portal' },
  { pain: 'Tech Stigma: "Robotic" Care Delivery', emotion: 'Disconnection', solution: 'Human-Centric AI: Putting the Heart Back in Medicine' },
  { pain: 'Opaque Hospital Pricing Systems', emotion: 'Suspicion', solution: 'Price Transparency: Understanding the DoH Tariff' },
  { pain: 'Expat Transition Grief / Identity Loss', emotion: 'Sadness', solution: 'Thriving as an Expat: Community Connection Stories' },
  { pain: 'Pediatric In-Home Safety Awareness', emotion: 'Guilt', solution: 'Home-Safe Checklist: Protecting Your Little Explorers' },
  { pain: 'Insurance Network Exclusions', emotion: 'Betrayal', solution: 'Find Your Provider: The Interactive Network Map' },
  { pain: 'Vaping "Cool" Factor vs. Health Harm', emotion: 'Dissonance', solution: 'Vaping: The Invisible Impact on Youth Longevity' },
  { pain: 'Complexity of Diabetes Management', emotion: 'Exhaustion', solution: 'Personalized Pathways: Diabetes Control Simplified' },
  { pain: 'High-Cost Treatment Financial Gap', emotion: 'Despair', solution: 'The Patient Fund: Our Mission to Support Every Resident' },
  { pain: 'Fine Reimbursement Delays', emotion: 'Frustration', solution: 'Getting Your Refund: A Step-by-Step Timeline' },
  { pain: 'Receptionist "Decorative" Role Perception', emotion: 'Contempt', solution: 'Hospitality in Health: Training Our Care-Front Team' },
  { pain: 'ER Wait-Time Inconsistency', emotion: 'Irritation', solution: 'Real-Time ER Hub: Check Wait-Times Before You Go' },
  { pain: 'Chronic Disease "Sick-Care" Fatigue', emotion: 'Hopelessness', solution: 'Live Longer, Live Better: The Prevention Roadmap' },
  { pain: 'Autism Diagnostic Latency', emotion: 'Anxiety', solution: 'Early Autism Screening: Tech-Enabled Speed for Families' },
  { pain: 'Lack of Specialist Availability', emotion: 'Resentment', solution: 'Excellence in Access: Recruiting the World\'s Best' },
  { pain: 'Mandatory Occupational Screening', emotion: 'Annoyance', solution: 'A Safe Workforce: Why We Screen to Protect You All' },
  { pain: 'Ransomware Fear (Gunra Attack)', emotion: 'Paranoia', solution: 'Data Shield: How We Protect 450M Records' },
  { pain: 'Vaccine Hub Logistics Secrecy', emotion: 'Curiosity', solution: 'Inside the Hub: How Abu Dhabi Medicines Reach You' },
  { pain: 'Monthly AED 300 Fine Penalty', emotion: 'Financial Fear', solution: 'Stay Covered, Stay Safe: Avoiding the 300 Fine' },
  { pain: 'App-Integration Overload', emotion: 'Confusion', solution: 'One Platform, All Health: The Unified Tamm Guide' },
  { pain: 'Conflicting Booster Timelines', emotion: 'Confusion', solution: 'Booster Facts: Get Your Timing Right' },
  { pain: 'Weight Management Program Eligibility', emotion: 'Anxiety', solution: 'Metabolic Health: Who Qualifies for Personalized Care' },
  { pain: 'Fraudulent Insurance Claim Burden', emotion: 'Resentment', solution: 'Stopping Fraud to Keep Your Premiums Low' },
  { pain: 'Lack of Direct Satisfaction Surveys', emotion: 'Disregard', solution: 'We Hear You: The 2025 Resident Experience Survey' },
  { pain: 'Child Vehicle Safety Misconceptions', emotion: 'Worry', solution: 'Car Seat Science: The Impact That Saves Lives' },
  { pain: 'Remote Area Access Disparity', emotion: 'Isolation', solution: 'Health on Wheels: Bringing Specialists to Western Region' },
  { pain: 'Complex Insurance Appeal Language', emotion: 'Exhaustion', solution: 'The Patient Advocate: We Help You Navigate Appeals' },
  { pain: 'Longevity "Hype" vs. Reality', emotion: 'Skepticism', solution: 'Longevity Now: Tangible Results from Our First 1,000 Cases' },
  { pain: 'The Need for an OTP for Simple Data', emotion: 'Irritation', solution: 'Securing Your Future: Why We Verify Every Login' },
]

// Table 5: Tone Audits (50)
const toneAudits: Array<{
  content: string
  currentTone: string
  perception: string
  correction: string
}> = [
  { content: 'Pay your health fines in 6 mins via Tamm', currentTone: 'Efficient / Robotic', perception: 'Punitive / Greedy', correction: 'Renewing your insurance is now faster to keep you safe' },
  { content: 'Beauty of Our Mind Mental Health Launch', currentTone: 'Empathetic / Poetic', perception: 'Highly Resonant', correction: 'Maintain cultural storytelling focus' },
  { content: 'Fraudulent sick leave crackdown', currentTone: 'Authoritative / Stern', perception: 'Strict / Necessary', correction: 'Protecting your medical record from fraudulent misuse' },
  { content: 'Active Ramadan Challenge (Walking)', currentTone: 'Culturally Aligned', perception: 'Highly Resonant', correction: 'Step into health as an act of faith this Ramadan' },
  { content: '11.5% medical cost surge for 2025', currentTone: 'Analytical / Cold', perception: 'Alarming / Cold', correction: 'Investing in high-standard care for our community\'s future' },
  { content: 'MMR Booster dose is mandatory', currentTone: 'Bureaucratic', perception: 'Resistance / Fear', correction: 'One extra dose to shield our children from measles' },
  { content: 'AED 300 penalty per uninsured month', currentTone: 'Financial / Dry', perception: 'Resentful', correction: 'Stay covered to ensure uninterrupted access to care' },
  { content: 'Longevity is our North Star', currentTone: 'Visionary / Abstract', perception: 'Skeptical', correction: 'Giving you more years with the ones you love' },
  { content: 'Decarbonizing the healthcare ecosystem', currentTone: 'Corporate / Global', perception: 'Detached', correction: 'A healthier environment for a healthier Abu Dhabi' },
  { content: 'Pest control is now under ADPHC', currentTone: 'Operational / Dry', perception: 'Confused', correction: 'Safeguarding your neighborhood from every health threat' },
  { content: 'AI will revolutionize your diagnosis', currentTone: 'Tech-Forward', perception: 'Fear of job loss', correction: 'AI tools to give your doctor more time to listen to you' },
  { content: 'Golden Visa insurance rules update', currentTone: 'Legalese', perception: 'Confusion', correction: 'Simplified insurance steps for our Golden Visa residents' },
  { content: 'Obesity is a biological condition', currentTone: 'Scientific', perception: 'Validating', correction: 'It\'s not your fault; science is here to help you manage it' },
  { content: 'Thiqa IFHAS screening required', currentTone: 'Health-Focused', perception: 'Routine / Dull', correction: 'Take 15 minutes to secure your next 15 years' },
  { content: 'Sahatna app mental self-assessment', currentTone: 'Modern / Direct', perception: 'Empowering', correction: 'Understanding your mind is the first step to true strength' },
  { content: 'American Hospital breach notification', currentTone: 'Crisis / Alarmist', perception: 'Panic', correction: 'Your data safety is our priority; here\'s how we\'re responding' },
  { content: 'From sick-care to wellness pivot', currentTone: 'Strategic', perception: 'Corporate Speak', correction: 'Moving from treating illness to celebrating your health' },
  { content: 'Child passenger safety guidelines', currentTone: 'Protective', perception: 'Reassuring', correction: 'Keeping your little treasures safe on every journey' },
  { content: 'Fraud recovery measures enacted', currentTone: 'Disciplinarian', perception: 'Cold', correction: 'Ensuring fair health access for every honest resident' },
  { content: 'The BRIDGE media initiative', currentTone: 'Inclusive / Global', perception: 'Resonant', correction: 'Connecting cultures through responsible health storytelling' },
  { content: 'Abu Dhabi: A surgical destination', currentTone: 'Promotional', perception: 'Skeptical', correction: 'World-class surgery is now available in your own home' },
  { content: 'Cardiovascular mortality statistics', currentTone: 'Statistical / Grim', perception: 'Depressing', correction: 'Protecting the heart of Abu Dhabi: Protecting You' },
  { content: 'National EWS text alert system', currentTone: 'Urgent', perception: 'Vigilant', correction: 'One message to keep you safe from the unexpected' },
  { content: 'VAPeS youth vaping study', currentTone: 'Academic', perception: 'Detached', correction: 'Understanding why our youth reach for the vape' },
  { content: 'Long-COVID recovery clinics open', currentTone: 'Clinical', perception: 'Necessary', correction: 'You\'re not alone in recovery; we\'re with you' },
  { content: 'Life Sciences GDP contribution goals', currentTone: 'Economic', perception: 'Detached', correction: 'Your health is the Emirate\'s most valuable asset' },
  { content: 'Autism Health Equity white paper', currentTone: 'Intellectual', perception: 'Niche', correction: 'Every child deserves a digital future for their health' },
  { content: 'AD999 SOS button functionality', currentTone: 'Practical / Direct', perception: 'Reassuring', correction: 'Safety and help are just one tap away' },
  { content: 'Provider consolidation industry report', currentTone: 'Industry-speak', perception: 'Suspicious', correction: 'Combining expertise to bring you better care options' },
  { content: 'AMR threat and antibiotic use', currentTone: 'Warning-heavy', perception: 'Confusing', correction: 'Using medicine wisely today to protect our tomorrow' },
  { content: 'Beauty of Our Mind mind-map visual', currentTone: 'Creative', perception: 'Resonant', correction: 'Visualize your strength, find your community' },
  { content: 'Active Ramadan: Walk 5k challenge', currentTone: 'Community-centric', perception: 'Resonant', correction: 'Step by step toward a blessed and healthy life' },
  { content: 'AED 100 grievance fee for appeals', currentTone: 'Transactional', perception: 'Unfair', correction: 'A transparent process to ensure your voice is heard' },
  { content: 'Clinics referred to prosecution', currentTone: 'Punitive', perception: 'Shocking', correction: 'Zero tolerance for those who jeopardize your trust' },
  { content: 'Global AI Academy for doctors', currentTone: 'Future-focused', perception: 'Distant', correction: 'Giving your doctor the wisdom of data-driven care' },
  { content: 'Home child safety guides', currentTone: 'Instructional', perception: 'Resonant', correction: 'Little steps at home to prevent big accidents' },
  { content: 'School Healthy Nutrition Policy', currentTone: 'Parental', perception: 'Supportive', correction: 'The right fuel for our children\'s brightest future' },
  { content: 'Tobacco control program update', currentTone: 'Restrictive', perception: 'Resistance', correction: 'Breathing clean air for a better Abu Dhabi together' },
  { content: 'Influenza surveillance global event', currentTone: 'Global / Elite', perception: 'Academic', correction: 'Stopping the flu globally starts right here in Abu Dhabi' },
  { content: 'Precision medicine roadmap launch', currentTone: 'Elite / Distant', perception: 'Detached', correction: 'Healthcare made just for you, not the average' },
  { content: 'Lilly Obesity Roadshow', currentTone: 'Active', perception: 'Resonant', correction: 'Bringing science-based support to your doorstep' },
  { content: 'Malaffi data security promise', currentTone: 'Technical', perception: 'Suspicious', correction: 'Your health history, protected by the world\'s best tech' },
  { content: 'Mental health as a pillar of society', currentTone: 'Foundational', perception: 'Resonant', correction: 'Strength begins within' },
  { content: 'My hospital bills are piling up (Reddit)', currentTone: 'Desperate', perception: 'Resonance', correction: 'We are one family: How to access our support funds' },
  { content: 'Confused about booster shot rules', currentTone: 'Confused', perception: 'High Friction', correction: 'Simplifying your journey through the vaccine process' },
  { content: 'Tamm fine refund timeline', currentTone: 'Legalistic', perception: 'Frustrating', correction: 'Getting your money back: A 3-step timeline' },
  { content: 'Bakery shut down for poison risk', currentTone: 'Protective', perception: 'Relieving', correction: 'Ensuring every bite in Abu Dhabi is safe for everyone' },
  { content: 'Medical myths vs. facts (Dr. Mike)', currentTone: 'Educational', perception: 'Resonant', correction: 'The truth about your health, from the experts' },
  { content: 'Sexiest doctor alive (Influencer)', currentTone: 'Celebrity / Casual', perception: 'High ER', correction: 'Connecting with you through modern health stories' },
  { content: 'Blueprint for metabolic resilience', currentTone: 'Patriotic', perception: 'Resonant', correction: 'A system built for a lifetime of strength' },
]
