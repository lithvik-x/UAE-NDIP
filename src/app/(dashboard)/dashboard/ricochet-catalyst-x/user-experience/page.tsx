'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  BarChart3 as LucideBarChart,
  PieChart as LucidePieChart,
} from 'lucide-react'
import {
  User,
  Frown,
  Smile,
  Meh,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Download,
  Filter,
  Search,
  Eye,
  MousePointer,
  Clock,
  Zap,
  Target,
  BarChart3,
  Activity,
  Users,
  Star,
  Heart,
  MessageSquare
} from 'lucide-react'
import { ricochetData } from '@/lib/data-loader'

export default function UserExperiencePage() {
  // Extract real data from data loader
  const { painPoints, funnelBreaks } = ricochetData.userExperience

  // Map pain points to component format (severity: number -> string)
  const painPointsData = painPoints.map(point => {
    let severity: 'critical' | 'high' | 'medium' | 'low'
    if (point.severity >= 80) severity = 'critical'
    else if (point.severity >= 60) severity = 'high'
    else if (point.severity >= 40) severity = 'medium'
    else severity = 'low'

    let category: string
    if (point.point.includes('booking') || point.point.includes('appointment')) category = 'Functionality'
    else if (point.point.includes('insurance')) category = 'Process'
    else if (point.point.includes('loading') || point.point.includes('slow')) category = 'Performance'
    else if (point.point.includes('crash')) category = 'Functionality'
    else category = 'Design'

    return {
      id: Math.random().toString(),
      point: point.point,
      category,
      severity,
      affected: `${point.frequency / 100}K`,
      mentions: point.frequency,
      sentiment: 'mixed',
      platforms: ['App Store', 'Reddit'],
      status: 'pending'
    }
  })

  const uxMetrics = [
    { title: 'Total Pain Points', value: '52', trend: 'down' as const, gradient: 'emerald' as const },
    { title: 'Critical Issues', value: '5', trend: 'down' as const, gradient: 'cyan' as const },
    { title: 'User Satisfaction', value: '8.2/10', trend: 'up' as const, gradient: 'indigo' as const },
    { title: 'Fix Rate', value: '67%', trend: 'up' as const, gradient: 'purple' as const }
  ]

  const heatmapData = [
    { area: 'Appointment Booking', pain: 89, issues: 12, priority: 'critical' },
    { area: 'Insurance Verification', pain: 76, issues: 8, priority: 'high' },
    { area: 'Lab Results Access', pain: 67, issues: 6, priority: 'high' },
    { area: 'Prescription Services', pain: 54, issues: 5, priority: 'medium' },
    { area: 'Medical Records', pain: 45, issues: 4, priority: 'medium' },
    { area: 'Payment Processing', pain: 38, issues: 3, priority: 'low' },
    { area: 'Profile Management', pain: 28, issues: 2, priority: 'low' },
    { area: 'Notification Settings', pain: 19, issues: 1, priority: 'low' }
  ]

  const userSentiments = [
    { platform: 'App Store', rating: 3.2, reviews: 2341, trend: 'up', positive: 45, negative: 42 },
    { platform: 'Play Store', rating: 3.4, reviews: 1876, trend: 'up', positive: 48, negative: 38 },
    { platform: 'Twitter', rating: 3.1, reviews: 892, trend: 'stable', positive: 34, negative: 51 },
    { platform: 'Reddit', rating: 2.8, reviews: 567, trend: 'down', positive: 28, negative: 62 },
    { platform: 'Facebook', rating: 3.5, reviews: 1234, trend: 'up', positive: 52, negative: 31 }
  ]

  const improvementInitiatives = [
    {
      initiative: 'Appointment System Redesign',
      status: 'in-progress',
      completion: 67,
      impact: 'high',
      team: 'UX Team',
      eta: '2 weeks'
    },
    {
      initiative: 'Insurance Flow Simplification',
      status: 'planned',
      completion: 0,
      impact: 'high',
      team: 'Product Team',
      eta: '4 weeks'
    },
    {
      initiative: 'Performance Optimization',
      status: 'active',
      completion: 89,
      impact: 'medium',
      team: 'Engineering',
      eta: '1 week'
    },
    {
      initiative: 'Onboarding Experience',
      status: 'completed',
      completion: 100,
      impact: 'medium',
      team: 'UX Team',
      eta: 'Done'
    }
  ]

  const journeyStages = [
    {
      stage: 'Discovery',
      satisfaction: 7.2,
      dropoff: 12,
      issues: 3,
      opportunities: ['Better app store optimization', 'Social proof highlights']
    },
    {
      stage: 'Registration',
      satisfaction: 6.8,
      dropoff: 34,
      issues: 5,
      opportunities: ['Simplify form fields', 'Social login options']
    },
    {
      stage: 'First Booking',
      satisfaction: 5.4,
      dropoff: 45,
      issues: 8,
      opportunities: ['Guided tutorial', 'Chatbot assistance']
    },
    {
      stage: 'Ongoing Usage',
      satisfaction: 7.8,
      dropoff: 8,
      issues: 2,
      opportunities: ['Personalization', 'Quick actions']
    },
    {
      stage: 'Support',
      satisfaction: 6.2,
      dropoff: 23,
      issues: 6,
      opportunities: ['Live chat', 'Better FAQ']
    }
  ]

  // Chart data for visualizations
  const painPointDistribution = [
    { category: 'Booking Process', issues: 12, critical: 3, trend: 'down' },
    { category: 'Information Access', issues: 18, critical: 5, trend: 'stable' },
    { category: 'Navigation', issues: 8, critical: 2, trend: 'down' },
    { category: 'Forms & Data Entry', issues: 14, critical: 4, trend: 'down' },
    { category: 'Support', issues: 6, critical: 1, trend: 'up' }
  ]

  const satisfactionTrendData = [
    { month: 'Jan', overall: 7.2, booking: 6.8, support: 7.5 },
    { month: 'Feb', overall: 7.5, booking: 7.1, support: 7.8 },
    { month: 'Mar', overall: 7.8, booking: 7.4, support: 8.0 },
    { month: 'Apr', overall: 8.0, booking: 7.7, support: 8.2 },
    { month: 'May', overall: 8.1, booking: 7.9, support: 8.3 },
    { month: 'Jun', overall: 8.2, booking: 8.1, support: 8.4 }
  ]

  const journeyStageData = [
    { stage: 'Discovery', satisfaction: 7.8, dropoff: 5, users: 45000 },
    { stage: 'Research', satisfaction: 8.1, dropoff: 12, users: 42750 },
    { stage: 'Booking', satisfaction: 7.2, dropoff: 35, users: 27825 },
    { stage: 'Confirmation', satisfaction: 8.5, dropoff: 8, users: 25608 },
    { stage: 'Preparation', satisfaction: 8.3, dropoff: 15, users: 21766 },
    { stage: 'Visit', satisfaction: 9.1, dropoff: 2, users: 21330 },
    { stage: 'Follow-up', satisfaction: 7.9, dropoff: 23, users: 20903 },
    { stage: 'Support', satisfaction: 6.2, dropoff: 23, users: 16095 }
  ]

  const fixRateData = [
    { category: 'Critical', total: 5, fixed: 4, pending: 1 },
    { category: 'High', total: 12, fixed: 8, pending: 4 },
    { category: 'Medium', total: 20, fixed: 14, pending: 6 },
    { category: 'Low', total: 15, fixed: 9, pending: 6 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Experience</h1>
          <p className="text-muted-foreground">
            Pain point analysis and user journey optimization
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
        {uxMetrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      <Tabs defaultValue="pain-points" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full">
          <TabsTrigger value="pain-points">Pain Points</TabsTrigger>
          <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
          <TabsTrigger value="sentiment">User Sentiment</TabsTrigger>
          <TabsTrigger value="journey">User Journey</TabsTrigger>
        </TabsList>

        <TabsContent value="pain-points" className="space-y-6">
          <Alert className="border-rose-500 bg-rose-50 dark:bg-rose-950">
            <Frown className="h-4 w-4" />
            <AlertTitle>Critical Issues Detected</AlertTitle>
            <AlertDescription>
              5 pain points require immediate attention. Appointment booking is the top priority affecting 23.4% of users.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Active Pain Points</h3>
              <Filter className="h-5 w-5 text-rose-500" />
            </div>
            <div className="space-y-4">
              {painPointsData.map((point, i) => (
                <div key={i} className={`p-4 border rounded-lg ${
                  point.severity === 'critical' ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' :
                  point.severity === 'high' ? 'border-amber-500 bg-amber-50 dark:bg-amber-950' : ''
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={
                          point.severity === 'critical' ? 'destructive' :
                          point.severity === 'high' ? 'default' : 'secondary'
                        }>
                          {point.severity}
                        </Badge>
                        <Badge variant="outline">{point.category}</Badge>
                      </div>
                      <h4 className="font-semibold">{point.point}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{point.mentions} mentions</p>
                    </div>
                    <Badge variant={
                      point.status === 'resolved' ? 'default' :
                      point.status === 'in-progress' ? 'secondary' : 'outline'
                    }>
                      {point.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Users Affected</p>
                      <p className="font-semibold text-rose-600">{point.affected}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Sentiment</p>
                      <p className={`font-semibold ${
                        point.sentiment === 'negative' ? 'text-rose-600' :
                        point.sentiment === 'positive' ? 'text-emerald-600' : 'text-amber-600'
                      }`}>
                        {point.sentiment}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {point.platforms.map((platform, j) => (
                      <Badge key={j} variant="outline" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>

                  {point.status === 'in-progress' && (
                    <div className="mt-3 pt-3 border-t">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Fix Progress</span>
                          <span className="font-medium">67%</span>
                        </div>
                        <Progress value={67} className="h-2" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Critical Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-rose-600">5</div>
                <p className="text-sm text-muted-foreground mt-1">Require immediate action</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">High Priority</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600">12</div>
                <p className="text-sm text-muted-foreground mt-1">Need attention soon</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Resolved This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">8</div>
                <p className="text-sm text-muted-foreground mt-1">Issues fixed</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">5.2d</div>
                <p className="text-sm text-muted-foreground mt-1">Days to fix</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Pain Point Analytics</h3>
              <Frown className="h-5 w-5 text-rose-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart
                data={painPointDistribution}
                xAxisKey="category"
                bars={[
                  { dataKey: 'issues', name: 'Total Issues', color: CHART_COLORS.rose },
                  { dataKey: 'critical', name: 'Critical', color: CHART_COLORS.rose }
                ]}
                height={300}
                showGrid={true}
              />
              <PieChart
                data={painPointDistribution.map(item => ({ name: item.category, value: item.issues }))}
                donut={false}
                height={300}
                showLegend={true}
              />
            </div>
          </GlassPanel>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Fix Rate by Priority</h3>
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart
                data={fixRateData}
                xAxisKey="category"
                bars={[
                  { dataKey: 'fixed', name: 'Fixed', color: CHART_COLORS.emerald },
                  { dataKey: 'pending', name: 'Pending', color: CHART_COLORS.rose }
                ]}
                height={300}
                showGrid={true}
              />
              <AreaChart
                data={satisfactionTrendData}
                xAxisKey="month"
                areas={[
                  { dataKey: 'overall', name: 'Overall', color: CHART_COLORS.purple },
                  { dataKey: 'booking', name: 'Booking', color: CHART_COLORS.info },
                  { dataKey: 'support', name: 'Support', color: CHART_COLORS.emerald }
                ]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="heatmap" className="space-y-6">
          <Alert className="border-orange-500 bg-orange-50 dark:bg-orange-950">
            <Activity className="h-4 w-4" />
            <AlertTitle>Pain Point Heatmap</AlertTitle>
            <AlertDescription>
              Appointment Booking shows highest pain intensity (89). Insurance Verification follows at 76.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Functional Area Heatmap</h3>
              <BarChart3 className="h-5 w-5 text-orange-500" />
            </div>
            <div className="space-y-4">
              {heatmapData.map((area, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{area.area}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{area.issues} active issues</p>
                    </div>
                    <Badge variant={
                      area.priority === 'critical' ? 'destructive' :
                      area.priority === 'high' ? 'default' :
                      area.priority === 'medium' ? 'secondary' : 'outline'
                    }>
                      {area.priority}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pain Intensity</span>
                      <span className={`font-semibold ${
                        area.pain > 70 ? 'text-rose-600' :
                        area.pain > 40 ? 'text-amber-600' : 'text-emerald-600'
                      }`}>
                        {area.pain}/100
                      </span>
                    </div>
                    <Progress value={area.pain} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Highest Pain</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-rose-600">Appointment Booking</div>
                <p className="text-sm text-muted-foreground mt-1">89/100 intensity</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Pain Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600">52/100</div>
                <p className="text-sm text-muted-foreground mt-1">All areas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">41</div>
                <p className="text-sm text-muted-foreground mt-1">Across all areas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Improvement Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">+12%</div>
                <p className="text-sm text-muted-foreground mt-1">This month</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Platform Sentiment Analysis</h3>
              <MessageSquare className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userSentiments.map((platform, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{platform.platform}</h4>
                      <p className="text-sm text-muted-foreground">{platform.reviews.toLocaleString()} reviews</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-lg font-bold">{platform.rating}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Positive</p>
                      <p className="font-semibold text-emerald-600">{platform.positive}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Negative</p>
                      <p className="font-semibold text-rose-600">{platform.negative}%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Trend</span>
                    <div className="flex items-center gap-1">
                      {platform.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                      ) : platform.trend === 'down' ? (
                        <TrendingDown className="h-4 w-4 text-rose-500" />
                      ) : (
                        <Activity className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="text-sm font-medium capitalize">{platform.trend}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3.2/5</div>
                <p className="text-sm text-muted-foreground mt-1">All platforms</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">6,910</div>
                <p className="text-sm text-muted-foreground mt-1">Across platforms</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Positive Sentiment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">41.4%</div>
                <p className="text-sm text-muted-foreground mt-1">Above threshold</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Best Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-cyan-600">Facebook</div>
                <p className="text-sm text-muted-foreground mt-1">3.5/5 rating</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Platform Satisfaction Comparison</h3>
              <Star className="h-5 w-5 text-amber-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RadarChart
                data={painPointDistribution}
                metrics={[{ dataKey: 'issues', name: 'Issues', color: CHART_COLORS.rose }]}
                height={300}
                showGrid={true}
              />
              <AreaChart
                data={satisfactionTrendData}
                xAxisKey="month"
                areas={[{ dataKey: 'overall', name: 'Satisfaction /10', color: CHART_COLORS.emerald }]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="journey" className="space-y-6">
          <Alert className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950">
            <Users className="h-4 w-4" />
            <AlertTitle>User Journey Analysis</AlertTitle>
            <AlertDescription>
              First Booking stage shows highest dropoff (45%) and lowest satisfaction (5.4/10).
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Journey Stage Analysis</h3>
              <Target className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="space-y-4">
              {journeyStages.map((stage, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                        <span className="font-bold text-indigo-600">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{stage.stage}</h4>
                        <p className="text-sm text-muted-foreground">{stage.issues} active issues</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-lg font-bold">{stage.satisfaction}/10</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Dropoff Rate</p>
                      <p className={`font-semibold ${stage.dropoff > 30 ? 'text-rose-600' : 'text-emerald-600'}`}>
                        {stage.dropoff}%
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Active Issues</p>
                      <p className="font-semibold">{stage.issues}</p>
                    </div>
                  </div>

                  {stage.opportunities.length > 0 && (
                    <div className="pt-3 border-t">
                      <p className="text-xs text-muted-foreground mb-2">Opportunities</p>
                      <div className="flex flex-wrap gap-1">
                        {stage.opportunities.map((opp, j) => (
                          <Badge key={j} variant="outline" className="text-xs">
                            {opp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">6.7/10</div>
                <p className="text-sm text-muted-foreground mt-1">All stages</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Highest Dropoff</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-rose-600">First Booking</div>
                <p className="text-sm text-muted-foreground mt-1">45% dropoff</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Best Stage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-cyan-600">Ongoing Usage</div>
                <p className="text-sm text-muted-foreground mt-1">7.8/10 satisfaction</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-sm text-muted-foreground mt-1">Identified improvements</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">User Journey Analytics</h3>
              <TrendingUp className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AreaChart
                data={journeyStageData}
                xAxisKey="stage"
                areas={[
                  { dataKey: 'satisfaction', name: 'Satisfaction /10', color: CHART_COLORS.emerald },
                  { dataKey: 'dropoff', name: 'Dropoff %', color: CHART_COLORS.rose }
                ]}
                height={300}
                showGrid={true}
              />
              <LineChart
                data={journeyStageData}
                xAxisKey="stage"
                lines={[{ dataKey: 'users', name: 'Users (K)', color: CHART_COLORS.info }]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
