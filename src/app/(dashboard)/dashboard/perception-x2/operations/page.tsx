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
  Gauge,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  Bell,
  Calendar,
  CheckCircle2,
  Clock,
  Eye,
  Flame,
  Globe,
  Heart,
  MapPin,
  MoreHorizontal,
  Pause,
  Play,
  Plus,
  Rocket,
  Shield,
  Smartphone,
  Target,
  TrendingDown,
  Users,
  Zap,
} from 'lucide-react'
import { perceptionData } from '@/lib/data-loader'

export default function OperationsPage() {
  // Extract real data from data loader
  const { campaigns, controlDeck } = perceptionData.operations
  // Campaign performance trends
  const campaignTrendData = [
    { week: 'W1', active: 9, completed: 12, engagement: 82 },
    { week: 'W2', active: 10, completed: 14, engagement: 85 },
    { week: 'W3', active: 11, completed: 15, engagement: 88 },
    { week: 'W4', active: 12, completed: 18, engagement: 91 },
  ]

  // Response time metrics
  const responseTimeData = [
    { incident: 'Data Breach Rumor', target: 15, actual: 12 },
    { incident: 'Vaccine Misinfo', target: 30, actual: 25 },
    { incident: 'Service Outage', target: 10, actual: 8 },
    { incident: 'Staffing Crisis', target: 20, actual: 18 },
  ]

  // Team utilization
  const teamUtilizationData = [
    { role: 'Content Creators', utilization: 92, capacity: 8 },
    { role: 'Analysts', utilization: 85, capacity: 6 },
    { role: 'Campaign Managers', utilization: 88, capacity: 5 },
    { role: 'Crisis Response', utilization: 78, capacity: 4 },
  ]

  // Alert distribution
  const alertDistributionData = [
    { type: 'Critical', count: 2, responseTime: 8 },
    { type: 'High', count: 15, responseTime: 25 },
    { type: 'Medium', count: 45, responseTime: 60 },
    { type: 'Low', count: 120, responseTime: 180 },
  ]

  // Workflow completion rates
  const workflowCompletionData = [
    { workflow: 'Content Approval', completed: 145, pending: 12, overdue: 2 },
    { workflow: 'Campaign Launch', completed: 88, pending: 8, overdue: 1 },
    { workflow: 'Crisis Response', completed: 12, pending: 0, overdue: 0 },
    { workflow: 'Review Process', completed: 220, pending: 25, overdue: 5 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Operations</h1>
          <p className="mt-2 text-slate-600">
            Crisis war room and campaign control deck
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Schedule
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <Plus className="h-4 w-4" />
            New Campaign
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Campaigns"
          value="12"
          previousValue={9}
          icon={<Rocket className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Crisis Mode"
          value="0"
          previousValue={1}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Pending Actions"
          value="8"
          previousValue={12}
          icon={<Clock className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Team Utilization"
          value="87%"
          previousValue={82}
          icon={<Users className="h-6 w-6" />}
          gradient="purple"
        />
      </div>

      <Tabs defaultValue="war-room" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="war-room">Crisis War Room</TabsTrigger>
          <TabsTrigger value="campaigns">Campaign Control Deck</TabsTrigger>
          <TabsTrigger value="workflow">Workflow Management</TabsTrigger>
          <TabsTrigger value="alerts">Alerts & Notifications</TabsTrigger>
        </TabsList>

        {/* Crisis War Room */}
        <TabsContent value="war-room" className="space-y-6">
          <GlassPanel title="Crisis War Room" description="Real-time crisis response coordination" badge="Standby">
            <div className="space-y-6">
              {/* Crisis Status */}
              <Card className="glass-card border-emerald-200 bg-emerald-50/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <Shield className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-extrabold text-emerald-700">All Systems Normal</div>
                      <div className="text-sm text-emerald-600 mt-1">No active crises. All monitoring systems operational.</div>
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Eye className="h-4 w-4" />
                      View Status
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Readiness Status */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">War Room Readiness</CardTitle>
                    <CardDescription>Current operational status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Response Team</span>
                      <Badge variant="success" className="text-xs">On Standby</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Communication Channels</span>
                      <Badge variant="success" className="text-xs">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Monitoring Systems</span>
                      <Badge variant="success" className="text-xs">Operational</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Response Protocols</span>
                      <Badge variant="success" className="text-xs">Ready</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Response Metrics</CardTitle>
                    <CardDescription>Historical performance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-extrabold text-slate-900">4.2 hrs</div>
                      <div className="text-sm text-slate-600">Avg. Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-extrabold text-emerald-600">94%</div>
                      <div className="text-sm text-slate-600">Resolution Rate</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Incidents</CardTitle>
                    <CardDescription>Last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Total Incidents</span>
                      <span className="font-semibold text-slate-900">3</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Resolved</span>
                      <span className="font-semibold text-emerald-600">3</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Ongoing</span>
                      <span className="font-semibold text-slate-600">0</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Crisis Protocols */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Crisis Response Protocols</CardTitle>
                      <CardDescription>Automated response procedures</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View All Protocols</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {crisisProtocols.map((protocol, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50/50 p-4">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                          protocol.level === 'critical' ? 'bg-rose-100 text-rose-600' :
                          protocol.level === 'high' ? 'bg-amber-100 text-amber-600' :
                          'bg-emerald-100 text-emerald-600'
                        }`}>
                          {protocol.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-slate-900">{protocol.name}</h4>
                              <p className="mt-1 text-sm text-slate-600">{protocol.description}</p>
                              <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                                <span>Trigger: {protocol.trigger}</span>
                                <span>•</span>
                                <span>Response: {protocol.responseTime}</span>
                              </div>
                            </div>
                            <Badge variant={protocol.level === 'critical' ? 'destructive' : protocol.level === 'high' ? 'warning' : 'success'} className="text-xs">
                              {protocol.level}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Test</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Campaign Control Deck */}
        <TabsContent value="campaigns" className="space-y-6">
          {/* Campaign Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Campaign Performance Trends</CardTitle>
                <CardDescription>Weekly active and completed campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={campaignTrendData}
                  xAxisKey="week"
                  areas={[
                    { dataKey: 'active', name: 'Active', color: CHART_COLORS.indigo },
                    { dataKey: 'completed', name: 'Completed', color: CHART_COLORS.emerald },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Team Utilization</CardTitle>
                <CardDescription>Current utilization by role</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={teamUtilizationData}
                  xAxisKey="role"
                  bars={[
                    { dataKey: 'utilization', name: 'Utilization %', color: CHART_COLORS.indigo },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Campaign Control Deck" description="Central command for all active campaigns">
            <div className="space-y-6">
              {/* Active Campaigns Overview */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-slate-600">Total Campaigns</div>
                      <Badge variant="success" className="text-xs">12 Active</Badge>
                    </div>
                    <div className="text-3xl font-extrabold text-slate-900">12</div>
                    <div className="text-xs text-slate-500 mt-1">3 launching soon</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-slate-600">Total Budget</div>
                      <Badge variant="denim" className="text-xs">This Month</Badge>
                    </div>
                    <div className="text-3xl font-extrabold text-slate-900">AED 847K</div>
                    <div className="text-xs text-emerald-600 mt-1">+12% from last month</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-slate-600">Team Members</div>
                      <Badge variant="purple" className="text-xs">Assigned</Badge>
                    </div>
                    <div className="text-3xl font-extrabold text-slate-900">28</div>
                    <div className="text-xs text-slate-500 mt-1">Across all campaigns</div>
                  </CardContent>
                </Card>
              </div>

              {/* Campaign Cards */}
              <div className="space-y-4">
                {activeCampaigns.map((campaign, index) => (
                  <Card key={index} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-${campaign.color} text-white`}>
                          {campaign.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold text-slate-900">{campaign.name}</h4>
                                <Badge variant={campaign.status === 'active' ? 'success' : campaign.status === 'paused' ? 'secondary' : 'denim'} className="text-xs">
                                  {campaign.status}
                                </Badge>
                              </div>
                              <p className="mt-1 text-sm text-slate-600">{campaign.description}</p>
                              <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                                <span>Platform: {campaign.platforms}</span>
                                <span>•</span>
                                <span>Budget: {campaign.budget}</span>
                                <span>•</span>
                                <span>Team: {campaign.team} members</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-slate-900">{campaign.progress}%</div>
                              <div className="text-xs text-slate-500">Complete</div>
                            </div>
                          </div>
                          <div className="mt-3 space-y-2">
                            <Progress value={campaign.progress} className="h-2" />
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-500">Timeline: {campaign.timeline}</span>
                              <span className="text-slate-500">ROI: {campaign.roi}x</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 shrink-0">
                          <Button variant="outline" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {campaign.status === 'active' ? (
                            <Button variant="outline" size="icon">
                              <Pause className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button variant="outline" size="icon">
                              <Play className="h-4 w-4" />
                            </Button>
                          )}
                          <Button variant="outline" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Workflow Management */}
        <TabsContent value="workflow" className="space-y-6">
          <GlassPanel title="Workflow Management" description="Track tasks, approvals, and team assignments">
            <div className="space-y-6">
              {/* Workflow Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-slate-900">23</div>
                    <div className="text-sm text-slate-600 mt-1">Pending Tasks</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-amber-600">8</div>
                    <div className="text-sm text-slate-600 mt-1">Awaiting Approval</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-emerald-600">156</div>
                    <div className="text-sm text-slate-600 mt-1">Completed This Week</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-indigo-600">4.2h</div>
                    <div className="text-sm text-slate-600 mt-1">Avg. Completion Time</div>
                  </CardContent>
                </Card>
              </div>

              {/* Task Board */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Active Workflows</CardTitle>
                      <CardDescription>Kanban board for task management</CardDescription>
                    </div>
                    <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
                      <Plus className="h-4 w-4" />
                      New Task
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {workflowTasks.map((task, index) => (
                        <div key={index} className="flex items-start gap-4 rounded-lg bg-slate-50/50 p-4">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                            task.priority === 'high' ? 'bg-rose-100 text-rose-600' :
                            task.priority === 'medium' ? 'bg-amber-100 text-amber-600' :
                            'bg-slate-100 text-slate-600'
                          }`}>
                            <AlertCircle className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold text-slate-900">{task.title}</h4>
                                <p className="mt-1 text-sm text-slate-600">{task.description}</p>
                                <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                                  <span>Assignee: {task.assignee}</span>
                                  <span>•</span>
                                  <span>Campaign: {task.campaign}</span>
                                  <span>•</span>
                                  <span>Due: {task.due}</span>
                                </div>
                              </div>
                              <Badge variant={task.status === 'in-progress' ? 'indigo' : task.status === 'review' ? 'warning' : 'success'} className="text-xs">
                                {task.status}
                              </Badge>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1 shrink-0">
                            <ArrowRight className="h-3 w-3" />
                            Move
                          </Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Alerts & Notifications */}
        <TabsContent value="alerts" className="space-y-6">
          <GlassPanel title="Alerts & Notifications" description="Real-time system alerts and team notifications">
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className={`flex items-start gap-4 rounded-lg border-2 p-4 ${
                  alert.severity === 'critical' ? 'border-red-300 bg-red-50/50' :
                  alert.severity === 'high' ? 'border-amber-300 bg-amber-50/50' :
                  'border-slate-200 bg-slate-50/50'
                }`}>
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                    alert.severity === 'critical' ? 'bg-red-500 text-white' :
                    alert.severity === 'high' ? 'bg-amber-500 text-white' :
                    'bg-slate-200 text-slate-600'
                  }`}>
                    {alert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-slate-900">{alert.title}</h4>
                          <Badge variant={alert.severity === 'critical' ? 'destructive' : alert.severity === 'high' ? 'warning' : 'secondary'} className="text-xs">
                            {alert.severity}
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-slate-600">{alert.description}</p>
                        <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {alert.time}
                          </span>
                          <span>•</span>
                          <span>{alert.source}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Eye className="h-3 w-3" />
                          View
                        </Button>
                        <Button size="sm" className="bg-gradient-indigo hover:opacity-90 text-white gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          Acknowledge
                        </Button>
                      </div>
                    </div>
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

// Data
const crisisProtocols = [
  {
    name: 'Misinformation Outbreak',
    description: 'Rapid response to false health information spreading on social media',
    level: 'critical',
    trigger: 'Viral misinformation detected',
    responseTime: '< 15 minutes',
    icon: <AlertTriangle className="h-6 w-6" />,
  },
  {
    name: 'Negative Sentiment Spike',
    description: 'Address sudden increase in negative public sentiment',
    level: 'high',
    trigger: '> 50% negative sentiment',
    responseTime: '< 1 hour',
    icon: <TrendingDown className="h-6 w-6" />,
  },
  {
    name: 'Technical Outage',
    description: 'Response to system failures or service disruptions',
    level: 'high',
    trigger: 'System downtime detected',
    responseTime: '< 30 minutes',
    icon: <Activity className="h-6 w-6" />,
  },
  {
    name: 'Media Inquiry',
    description: 'Coordinated response to journalist requests',
    level: 'medium',
    trigger: 'Press contact received',
    responseTime: '< 2 hours',
    icon: <Globe className="h-6 w-6" />,
  },
]

const activeCampaigns = [
  {
    name: 'Mental Health Awareness',
    description: 'Comprehensive mental health campaign across all platforms',
    status: 'active',
    platforms: '8 platforms',
    budget: 'AED 125K',
    team: 6,
    progress: 72,
    timeline: 'Jan 1 - Jan 31',
    roi: 4.2,
    color: 'purple',
    icon: <Heart className="h-6 w-6" />,
  },
  {
    name: 'Vaccine Education',
    description: 'Evidence-based vaccine safety information campaign',
    status: 'active',
    platforms: '6 platforms',
    budget: 'AED 89K',
    team: 4,
    progress: 45,
    timeline: 'Jan 5 - Feb 15',
    roi: 3.8,
    color: 'emerald',
    icon: <Shield className="h-6 w-6" />,
  },
  {
    name: 'Digital Health Adoption',
    description: 'Promote Malaffi and Sahatna app usage',
    status: 'paused',
    platforms: '5 platforms',
    budget: 'AED 67K',
    team: 3,
    progress: 23,
    timeline: 'Jan 10 - Feb 28',
    roi: 2.9,
    color: 'denim',
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    name: 'Healthcare Access Initiative',
    description: 'Improve awareness of healthcare facilities and services',
    status: 'active',
    platforms: '7 platforms',
    budget: 'AED 156K',
    team: 8,
    progress: 58,
    timeline: 'Jan 1 - Mar 31',
    roi: 5.1,
    color: 'rose',
    icon: <MapPin className="h-6 w-6" />,
  },
]

const workflowTasks = [
  {
    title: 'Create Instagram Story Series',
    description: 'Design 5-part story series for mental health campaign',
    priority: 'high',
    assignee: 'Sara Al-Mazrouei',
    campaign: 'Mental Health',
    due: 'Jan 12',
    status: 'in-progress',
  },
  {
    title: 'Approve Vaccine Content',
    description: 'Review and approve vaccine safety infographic',
    priority: 'high',
    assignee: 'Dr. Farida Al Hosani',
    campaign: 'Vaccine Education',
    due: 'Jan 11',
    status: 'review',
  },
  {
    title: 'Schedule Twitter Thread',
    description: 'Schedule 10-tweet thread about digital health',
    priority: 'medium',
    assignee: 'Ahmed Hassan',
    campaign: 'Digital Health',
    due: 'Jan 14',
    status: 'pending',
  },
  {
    title: 'Influencer Briefing Call',
    description: 'Conduct briefing call with campaign influencers',
    priority: 'medium',
    assignee: 'Fatima Al-Zahra',
    campaign: 'Mental Health',
    due: 'Jan 13',
    status: 'in-progress',
  },
]

const alerts = [
  {
    title: 'Campaign Budget Alert',
    description: 'Mental Health campaign at 85% of allocated budget',
    severity: 'high',
    time: '5 minutes ago',
    source: 'Budget Monitor',
    icon: <Bell className="h-6 w-6" />,
  },
  {
    title: 'Content Approval Pending',
    description: '3 vaccine content items awaiting your approval',
    severity: 'medium',
    time: '1 hour ago',
    source: 'Workflow System',
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: 'Influencer Response Received',
    description: 'Salama Al Shamsi confirmed participation in mental health campaign',
    severity: 'low',
    time: '2 hours ago',
    source: 'Influence Module',
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Scheduled Post Published',
    description: 'Healthcare access post successfully published to Instagram',
    severity: 'low',
    time: '3 hours ago',
    source: 'Campaign Control',
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
]
