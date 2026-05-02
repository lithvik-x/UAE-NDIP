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
  Shield,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Filter,
  Ban,
  Eye,
  Lock,
} from 'lucide-react'
import {
  useMediaCommunicationsData,
} from '@/lib/data-loader'

export default function ContentModerationPage() {
  const { data } = useMediaCommunicationsData()

  // Content moderation metrics
  const totalPostsMonitored = 28500000
  const postsCensored = 847000
  const postsRemoved = 523000
  const accountsSuspended = 45600

  // Censorship categories
  const censorshipCategories = [
    { category: 'Political Criticism', count: 234000, percentage: 28, color: CHART_COLORS.rose },
    { category: 'Religious Content', count: 189000, percentage: 22, color: CHART_COLORS.orange },
    { category: 'Social Issues', count: 156000, percentage: 18, color: CHART_COLORS.gold },
    { category: 'External Affairs', count: 134000, percentage: 16, color: CHART_COLORS.purple },
    { category: 'Privacy Violations', count: 89000, percentage: 11, color: CHART_COLORS.denim },
    { category: 'Other', count: 45000, percentage: 5, color: CHART_COLORS.platinum },
  ]

  // Moderation actions
  const moderationActions = [
    { action: 'Content Removed', count: 523000, icon: XCircle, color: 'rose' },
    { action: 'Content Hidden', count: 324000, icon: Eye, color: 'yellow' },
    { action: 'Warning Issued', count: 267000, icon: AlertCircle, color: 'orange' },
    { action: 'User Banned', count: 45600, icon: Ban, color: 'red' },
    { action: 'Redirected', count: 189000, icon: Lock, color: 'navy' },
  ]

  // Platform breakdown
  const platformBreakdown = [
    { platform: 'Twitter/X', censored: 312000, removed: 198000, suspended: 18200 },
    { platform: 'TikTok', censored: 245000, removed: 156000, suspended: 12400 },
    { platform: 'Instagram', censored: 167000, removed: 98000, suspended: 8900 },
    { platform: 'Facebook', censored: 89000, removed: 52000, suspended: 4500 },
    { platform: 'YouTube', censored: 34000, removed: 19000, suspended: 1600 },
  ]

  // Weekly trend data
  const weeklyTrendData = [
    { week: 'Week 1', censored: 185000, removed: 112000, flagged: 145000 },
    { week: 'Week 2', censored: 198000, removed: 118000, flagged: 152000 },
    { week: 'Week 3', censored: 212000, removed: 125000, flagged: 168000 },
    { week: 'Week 4', censored: 252000, removed: 168000, flagged: 178000 },
  ]

  // Recent censorship incidents
  const recentIncidents = [
    { platform: 'Twitter/X', content: 'Political petition post', reason: 'External affairs violation', action: 'Removed', time: '2 min ago' },
    { platform: 'TikTok', content: 'Labor protest video', reason: 'Social stability concern', action: 'Hidden', time: '8 min ago' },
    { platform: 'Instagram', content: 'Religious discussion', reason: 'Religious content guidelines', action: 'Removed', time: '15 min ago' },
    { platform: 'Facebook', content: 'Economic criticism', reason: 'Political content', action: 'Warning', time: '23 min ago' },
    { platform: 'YouTube', content: 'News documentary', reason: 'External affairs', action: 'Redirected', time: '45 min ago' },
  ]

  const getActionBadge = (action: string) => {
    switch (action) {
      case 'Removed': return <Badge variant="destructive" className="text-xs">{action}</Badge>
      case 'Hidden': return <Badge variant="warning" className="text-xs">{action}</Badge>
      case 'Warning': return <Badge variant="outline" className="text-xs">{action}</Badge>
      case 'Redirected': return <Badge variant="denim" className="text-xs">{action}</Badge>
      default: return <Badge variant="outline" className="text-xs">{action}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="denim" className="mb-2">S-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy-500">Content Moderation & Censorship</h1>
          <p className="mt-2 text-platinum-400">
            Automated content filtering and censorship operations across platforms
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy-500 hover:bg-navy/10">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Shield className="h-4 w-4" />
            Moderate
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Posts Monitored"
          value={(totalPostsMonitored / 1000000).toFixed(1) + 'M'}
          previousValue={27.2}
          icon={<Eye className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="Posts Censored"
          value={(postsCensored / 1000).toFixed(0) + 'K'}
          previousValue={postsCensored - 25000}
          icon={<Ban className="h-6 w-6" />}
          gradient="gold"
          status="warning"
        />
        <MetricCard
          title="Posts Removed"
          value={(postsRemoved / 1000).toFixed(0) + 'K'}
          previousValue={postsRemoved + 12000}
          icon={<XCircle className="h-6 w-6" />}
          gradient="rose"
          status="danger"
        />
        <MetricCard
          title="Accounts Suspended"
          value={accountsSuspended.toLocaleString()}
          previousValue={accountsSuspended + 2300}
          icon={<Ban className="h-6 w-6" />}
          gradient="indigo"
          status="warning"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="actions">Actions</TabsTrigger>
          <TabsTrigger value="incidents">Incidents</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Content Moderation Overview" description="Censorship and moderation operations summary">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Censorship Distribution</CardTitle>
                    <CardDescription>Content removal by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={censorshipCategories}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Weekly Moderation Trend</CardTitle>
                    <CardDescription>Content moderation actions over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={weeklyTrendData}
                      xAxisKey="week"
                      bars={[
                        { dataKey: 'censored', name: 'Censored', color: CHART_COLORS.rose },
                        { dataKey: 'removed', name: 'Removed', color: CHART_COLORS.orange },
                        { dataKey: 'flagged', name: 'Flagged', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Moderation Efficiency</CardTitle>
                  <CardDescription>System performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Automated Detection Rate</span>
                        <span className="font-medium text-emerald-400">94.2%</span>
                      </div>
                      <Progress value={94.2} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">False Positive Rate</span>
                        <span className="font-medium text-amber-400">3.8%</span>
                      </div>
                      <Progress value={3.8} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Average Response Time</span>
                        <span className="font-medium text-navy-500">2.3 min</span>
                      </div>
                      <Progress value={23} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">24/7 Coverage</span>
                        <span className="font-medium text-emerald-400">100%</span>
                      </div>
                      <Progress value={100} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Categories Tab */}
        <TabsContent value="categories" className="space-y-6">
          <GlassPanel title="Censorship Categories" description="Content filtering by category">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Category Breakdown</CardTitle>
                  <CardDescription>Detailed censorship statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {censorshipCategories.map((cat, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: cat.color }}
                              />
                              <span className="text-sm font-medium text-platinum-200">{cat.category}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-sm font-bold text-platinum-200">{cat.count.toLocaleString()}</span>
                              <Badge variant="outline" className="text-xs">{cat.percentage}%</Badge>
                            </div>
                          </div>
                          <Progress value={cat.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Actions Tab */}
        <TabsContent value="actions" className="space-y-6">
          <GlassPanel title="Moderation Actions" description="Types of content enforcement actions">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {moderationActions.map((action, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <action.icon className={`h-5 w-5 text-${action.color}-400`} />
                        {action.action}
                      </CardTitle>
                      <CardDescription>Enforcement action taken</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-platinum-200">{action.count.toLocaleString()}</div>
                      <p className="text-sm text-platinum-400 mt-1">Total count this month</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Enforcement Breakdown</CardTitle>
                  <CardDescription>Action distribution by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={platformBreakdown}
                    xAxisKey="platform"
                    bars={[
                      { dataKey: 'censored', name: 'Censored', color: CHART_COLORS.rose },
                      { dataKey: 'removed', name: 'Removed', color: CHART_COLORS.orange },
                      { dataKey: 'suspended', name: 'Suspended', color: CHART_COLORS.danger },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Incidents Tab */}
        <TabsContent value="incidents" className="space-y-6">
          <GlassPanel title="Recent Moderation Incidents" description="Latest content enforcement actions">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Live Incident Feed</CardTitle>
                  <CardDescription>Real-time content moderation events</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {recentIncidents.map((incident, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy-500">
                              <FileText className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{incident.content}</p>
                              <p className="text-sm text-platinum-400">{incident.platform} · {incident.reason}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            {getActionBadge(incident.action)}
                            <div className="flex items-center gap-1 text-xs text-platinum-400">
                              <Clock className="h-3 w-3" />
                              {incident.time}
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
