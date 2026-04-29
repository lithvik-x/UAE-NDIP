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
  Heatmap,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  ArrowUpRight,
  BarChart as LucideBarChart,
  Brain,
  Calendar,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Clock,
  Edit3,
  Eye,
  FileText,
  Globe,
  Heart,
  ImageIcon,
  Lightbulb,
  Mail,
  MessageSquare,
  Monitor,
  MoreHorizontal,
  Play,
  Plus,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Video,
  Zap,
} from 'lucide-react'
import { clairvoyanceData } from '@/lib/data-loader'

export default function StrategicActionPage() {
  // Extract real data from data loader
  const { campaigns, calendar, editorialQueue } = clairvoyanceData.strategicAction
  // Chart data arrays
  const campaignPerformanceData = [
    { campaign: 'Mental Health', reach: 850000, engagement: 68000, conversion: 12.5 },
    { campaign: 'Vaccine Drive', reach: 620000, engagement: 45000, conversion: 8.2 },
    { campaign: 'Summer Safety', reach: 540000, engagement: 38000, conversion: 15.8 },
    { campaign: 'Digital Health', reach: 480000, engagement: 32000, conversion: 6.5 },
    { campaign: 'Insurance Info', reach: 350000, engagement: 28000, conversion: 10.2 },
  ]

  const platformEfficiencyData = [
    { platform: 'Instagram', efficiency: 88, cost: 0.45 },
    { platform: 'Twitter/X', efficiency: 72, cost: 0.62 },
    { platform: 'Facebook', efficiency: 65, cost: 0.58 },
    { platform: 'TikTok', efficiency: 82, cost: 0.38 },
    { platform: 'LinkedIn', efficiency: 58, cost: 0.85 },
    { platform: 'YouTube', efficiency: 75, cost: 0.72 },
  ]

  const weeklyOutputData = [
    { week: 'Week 1', posts: 145, campaigns: 12, reach: 850000 },
    { week: 'Week 2', posts: 168, campaigns: 15, reach: 920000 },
    { week: 'Week 3', posts: 152, campaigns: 13, reach: 880000 },
    { week: 'Week 4', posts: 184, campaigns: 16, reach: 1050000 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="purple" className="mb-2">CLAIRVOYANCE-CX</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-purple">Strategic Action</h1>
          <p className="mt-2 text-slate-600">
            Unified editorial calendar and one-click campaign deployment
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            View Calendar
          </Button>
          <Button className="bg-gradient-purple hover:opacity-90 text-white gap-2">
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
          gradient="purple"
        />
        <MetricCard
          title="Scheduled Content"
          value="147"
          previousValue={132}
          icon={<CalendarClock className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Content Published"
          value="2,847"
          previousValue={2431}
          icon={<FileText className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Engagement Rate"
          value="8.7%"
          previousValue={7.2}
          icon={<Target className="h-6 w-6" />}
          gradient="cyan"
          status="success"
        />
      </div>

      <Tabs defaultValue="calendar" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="calendar">Editorial Calendar</TabsTrigger>
          <TabsTrigger value="campaigns">Campaign Command</TabsTrigger>
          <TabsTrigger value="templates">Content Templates</TabsTrigger>
          <TabsTrigger value="workflow">Approval Workflow</TabsTrigger>
        </TabsList>

        {/* Editorial Calendar */}
        <TabsContent value="calendar" className="space-y-6">
          <GlassPanel title="Unified Editorial Calendar" description="Schedule and manage all content across platforms">
            <div className="space-y-4">
              {/* Calendar Grid */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>January 2026</CardTitle>
                      <CardDescription>Week 2 • January 6-12</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Previous Week</Button>
                      <Button variant="outline" size="sm">Next Week</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                      <div key={day} className="text-center text-sm font-semibold text-slate-600 p-2">
                        {day}
                      </div>
                    ))}
                    {calendarDays.map((day, index) => (
                      <div
                        key={index}
                        className={`min-h-24 rounded-lg border-2 p-2 ${
                          day.isToday ? 'border-purple-500 bg-purple-50/50' :
                          day.isPast ? 'border-slate-100 bg-slate-50/30' :
                          'border-slate-200 bg-white'
                        }`}
                      >
                        <div className={`text-sm font-semibold mb-1 ${
                          day.isToday ? 'text-purple-600' : 'text-slate-700'
                        }`}>
                          {day.date}
                        </div>
                        <div className="space-y-1">
                          {day.events.map((event, i) => (
                            <div
                              key={i}
                              className={`text-xs p-1 rounded truncate cursor-pointer hover:opacity-80 ${
                                event.type === 'campaign' ? 'bg-purple-100 text-purple-700' :
                                event.type === 'social' ? 'bg-blue-100 text-blue-700' :
                                event.type === 'urgent' ? 'bg-red-100 text-red-700' :
                                'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {event.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Schedule */}
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Today's Schedule */}
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-purple-500" />
                      <CardTitle className="text-lg">Today's Schedule</CardTitle>
                    </div>
                    <CardDescription>3 content pieces scheduled for today</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {todaysSchedule.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 rounded-lg bg-slate-50/50 p-3">
                        <div className="text-sm font-semibold text-slate-500">{item.time}</div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900">{item.title}</div>
                          <div className="text-xs text-slate-500">{item.platforms}</div>
                        </div>
                        <Badge variant={item.status === 'published' ? 'success' : 'purple'} className="text-xs">
                          {item.status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* This Week's Highlights */}
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-indigo-500" />
                      <CardTitle className="text-lg">This Week's Highlights</CardTitle>
                    </div>
                    <CardDescription>Key campaigns and milestones</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {weekHighlights.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 rounded-lg bg-slate-50/50 p-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          item.priority === 'high' ? 'bg-red-100 text-red-600' :
                          item.priority === 'medium' ? 'bg-amber-100 text-amber-600' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900">{item.title}</div>
                          <div className="text-xs text-slate-500">{item.day}</div>
                        </div>
                        <Badge variant={item.type === 'campaign' ? 'purple' : 'denim'} className="text-xs">
                          {item.type}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Campaign Command */}
        <TabsContent value="campaigns" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Campaign Performance</CardTitle>
                <CardDescription>Reach and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={campaignPerformanceData}
                  xAxisKey="campaign"
                  bars={[
                    { dataKey: 'reach', name: 'Reach', color: CHART_COLORS.denim },
                  ]}
                  horizontal={true}
                  height={220}
                  showGrid={false}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Platform Efficiency</CardTitle>
                <CardDescription>ROI by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={platformEfficiencyData}
                  xAxisKey="platform"
                  bars={[{ dataKey: 'efficiency', name: 'Efficiency %', color: CHART_COLORS.success }]}
                  height={220}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Campaign Command Center" description="One-click publishing to 15+ platforms" badge="Live">
            <div className="space-y-4">
              {/* Active Campaigns */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">Active Campaigns</h3>
                  <Button className="bg-gradient-purple hover:opacity-90 text-white gap-2">
                    <Plus className="h-4 w-4" />
                    New Campaign
                  </Button>
                </div>

                {activeCampaigns.map((campaign, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                            campaign.status === 'active' ? 'bg-gradient-purple' :
                            campaign.status === 'scheduled' ? 'bg-gradient-denim' :
                            'bg-gradient-emerald'
                          } text-white`}>
                            {campaign.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-lg">{campaign.name}</CardTitle>
                              <Badge variant={campaign.status === 'active' ? 'success' : campaign.status === 'scheduled' ? 'denim' : 'secondary'} className="text-xs">
                                {campaign.status}
                              </Badge>
                            </div>
                            <CardDescription className="mt-1">{campaign.description}</CardDescription>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Campaign Stats */}
                      <div className="grid grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-slate-900">{campaign.reach}</div>
                          <div className="text-xs text-slate-500">Total Reach</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-slate-900">{campaign.engagement}%</div>
                          <div className="text-xs text-slate-500">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-slate-900">{campaign.posts}</div>
                          <div className="text-xs text-slate-500">Content Pieces</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-slate-900">{campaign.platforms}</div>
                          <div className="text-xs text-slate-500">Platforms</div>
                        </div>
                      </div>

                      {/* Platform Deployment */}
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-slate-700">Platform Deployment</div>
                        <div className="flex flex-wrap gap-2">
                          {campaign.deployedPlatforms.map((platform, i) => (
                            <Badge key={i} variant="success" className="text-xs gap-1">
                              <CheckCircle2 className="h-3 w-3" />
                              {platform}
                            </Badge>
                          ))}
                          {campaign.pendingPlatforms.map((platform, i) => (
                            <Badge key={i} variant="outline" className="text-xs gap-1">
                              <Clock className="h-3 w-3" />
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Campaign Progress</span>
                          <span className="font-semibold text-slate-900">{campaign.progress}%</span>
                        </div>
                        <Progress value={campaign.progress} className="h-2" />
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button className="bg-gradient-purple hover:opacity-90 text-white gap-2">
                          <Play className="h-4 w-4" />
                          Deploy Now
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <Edit3 className="h-4 w-4" />
                          Edit Campaign
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <Eye className="h-4 w-4" />
                          Preview
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Content Templates */}
        <TabsContent value="templates" className="space-y-6">
          <GlassPanel title="Content Template Library" description="Pre-built templates for rapid content creation">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contentTemplates.map((template, index) => (
                <Card key={index} className="glass-card group hover:shadow-glass-lg transition-all">
                  <CardHeader>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-${template.color} text-white mb-3`}>
                      {template.icon}
                    </div>
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Use Cases</span>
                      <span className="font-semibold text-slate-900">{template.useCases}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Avg. Performance</span>
                      <span className="font-semibold text-emerald-600">{template.performance}</span>
                    </div>
                    <Button className="w-full bg-gradient-purple hover:opacity-90 text-white gap-2">
                      <Plus className="h-4 w-4" />
                      Use Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Approval Workflow */}
        <TabsContent value="workflow" className="space-y-6">
          <GlassPanel title="Content Approval Workflow" description="Track and manage content approvals">
            <div className="space-y-4">
              {/* Workflow Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-slate-900">8</div>
                    <div className="text-sm text-slate-600 mt-1">Pending Review</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-amber-600">5</div>
                    <div className="text-sm text-slate-600 mt-1">Revisions Requested</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-emerald-600">234</div>
                    <div className="text-sm text-slate-600 mt-1">Approved This Month</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-purple-600">2.4h</div>
                    <div className="text-sm text-slate-600 mt-1">Avg. Approval Time</div>
                  </CardContent>
                </Card>
              </div>

              {/* Pending Approvals */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Pending Approvals</CardTitle>
                  <CardDescription>Content items awaiting your review</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingApprovals.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 rounded-lg bg-slate-50/50 p-4">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-${item.color} text-white`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-slate-900">{item.title}</h4>
                              <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                              <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                                <span>{item.author}</span>
                                <span>•</span>
                                <span>{item.platform}</span>
                                <span>•</span>
                                <span>{item.submitted}</span>
                              </div>
                            </div>
                            <Badge variant={item.priority === 'urgent' ? 'destructive' : 'purple'} className="shrink-0 text-xs">
                              {item.priority}
                            </Badge>
                          </div>
                          <div className="mt-3 flex gap-2">
                            <Button size="sm" className="bg-gradient-emerald hover:opacity-90 text-white gap-1">
                              <CheckCircle2 className="h-3 w-3" />
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="gap-1">
                              <Edit3 className="h-3 w-3" />
                              Request Revision
                            </Button>
                            <Button size="sm" variant="outline" className="gap-1">
                              <Eye className="h-3 w-3" />
                              Preview
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Approval Pipeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Approval Pipeline</CardTitle>
                  <CardDescription>Content stages and current status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {approvalStages.map((stage, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              stage.status === 'active' ? 'bg-purple-500 text-white' :
                              stage.status === 'completed' ? 'bg-emerald-500 text-white' :
                              'bg-slate-200 text-slate-600'
                            }`}>
                              {index + 1}
                            </div>
                            <span className="font-medium text-slate-900">{stage.name}</span>
                          </div>
                          <Badge variant={stage.status === 'active' ? 'success' : stage.status === 'completed' ? 'emerald' : 'secondary'} className="text-xs">
                            {stage.count} items
                          </Badge>
                        </div>
                        <div className="ml-10 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className={`h-full rounded-full ${
                            stage.status === 'active' ? 'bg-gradient-purple w-1/2' :
                            stage.status === 'completed' ? 'bg-gradient-emerald w-full' :
                            'bg-slate-300 w-0'
                          }`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Data
const calendarDays = [
  {
    date: '6',
    isToday: false,
    isPast: true,
    events: [
      { title: 'Mental Health Campaign', type: 'campaign' },
      { title: 'Twitter Thread', type: 'social' },
    ]
  },
  {
    date: '7',
    isToday: false,
    isPast: true,
    events: [
      { title: 'IG Story Series', type: 'social' },
      { title: 'LinkedIn Article', type: 'social' },
    ]
  },
  {
    date: '8',
    isToday: false,
    isPast: true,
    events: [
      { title: 'Press Release', type: 'campaign' },
    ]
  },
  {
    date: '9',
    isToday: false,
    isPast: true,
    events: [
      { title: 'Video Package', type: 'campaign' },
      { title: 'Facebook Post', type: 'social' },
    ]
  },
  {
    date: '10',
    isToday: false,
    isPast: true,
    events: [
      { title: 'Urgent Response', type: 'urgent' },
      { title: 'Infographic', type: 'social' },
    ]
  },
  {
    date: '11',
    isToday: true,
    isPast: false,
    events: [
      { title: 'Weekly Digest', type: 'campaign' },
    ]
  },
  {
    date: '12',
    isToday: false,
    isPast: false,
    events: [
      { title: 'TikTok Series', type: 'social' },
    ]
  },
]

const todaysSchedule = [
  {
    time: '09:00',
    title: 'Weekly Health Digest',
    platforms: 'Twitter, LinkedIn, Facebook',
    status: 'scheduled',
  },
  {
    time: '14:00',
    title: 'Mental Health Tips',
    platforms: 'Instagram Stories',
    status: 'scheduled',
  },
  {
    time: '18:00',
    title: 'Evening Wellness Check',
    platforms: 'Twitter, WhatsApp',
    status: 'published',
  },
]

const weekHighlights = [
  {
    title: 'Mental Health Campaign Launch',
    day: 'Monday, Jan 6',
    type: 'campaign',
    priority: 'high',
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    title: 'Press Conference Coverage',
    day: 'Wednesday, Jan 8',
    type: 'event',
    priority: 'high',
    icon: <Monitor className="h-5 w-5" />,
  },
  {
    title: 'Influencer Partnership Announcement',
    day: 'Friday, Jan 10',
    type: 'campaign',
    priority: 'medium',
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: 'Weekly Report Release',
    day: 'Sunday, Jan 12',
    type: 'content',
    priority: 'low',
    icon: <FileText className="h-5 w-5" />,
  },
]

const activeCampaigns = [
  {
    name: 'Beauty of Our Mind - Mental Health',
    description: 'Comprehensive mental health awareness campaign across all platforms',
    status: 'active',
    reach: '2.4M',
    engagement: '8.9',
    posts: '47',
    platforms: 8,
    progress: 72,
    deployedPlatforms: ['Twitter', 'Instagram', 'Facebook', 'LinkedIn'],
    pendingPlatforms: ['TikTok', 'YouTube', 'Pinterest', 'Reddit'],
    icon: <Brain className="h-6 w-6" />,
  },
  {
    name: 'Vaccine Safety Education',
    description: 'Counter-misinformation campaign with verified health information',
    status: 'active',
    reach: '890K',
    engagement: '7.2',
    posts: '23',
    platforms: 6,
    progress: 45,
    deployedPlatforms: ['Twitter', 'Facebook', 'LinkedIn'],
    pendingPlatforms: ['Instagram', 'YouTube', 'Reddit'],
    icon: <Shield className="h-6 w-6" />,
  },
  {
    name: 'Digital Health Transformation',
    description: 'Showcasing Malaffi and Sahatna app success stories',
    status: 'scheduled',
    reach: '-',
    engagement: '-',
    posts: '12',
    platforms: 5,
    progress: 15,
    deployedPlatforms: [],
    pendingPlatforms: ['Twitter', 'Instagram', 'LinkedIn', 'YouTube', 'TikTok'],
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    name: 'Healthcare Access Expansion',
    description: 'New facility announcements and service improvements',
    status: 'completed',
    reach: '1.2M',
    engagement: '9.1',
    posts: '34',
    platforms: 7,
    progress: 100,
    deployedPlatforms: ['Twitter', 'Instagram', 'Facebook', 'LinkedIn', 'YouTube', 'Pinterest', 'Reddit'],
    pendingPlatforms: [],
    icon: <Globe className="h-6 w-6" />,
  },
]

const contentTemplates = [
  {
    name: 'Social Media Post',
    description: 'Optimized post templates for all major platforms',
    color: 'purple',
    icon: <MessageSquare className="h-5 w-5" />,
    useCases: '156',
    performance: '+12%',
  },
  {
    name: 'Press Release',
    description: 'Official announcement templates with SEO optimization',
    color: 'denim',
    icon: <FileText className="h-5 w-5" />,
    useCases: '89',
    performance: '+8%',
  },
  {
    name: 'Infographic',
    description: 'Visual data representation templates',
    color: 'emerald',
    icon: <LucideBarChart className="h-5 w-5" />,
    useCases: '67',
    performance: '+23%',
  },
  {
    name: 'Video Script',
    description: 'Short-form and long-form video scripts',
    color: 'rose',
    icon: <Video className="h-5 w-5" />,
    useCases: '45',
    performance: '+31%',
  },
  {
    name: 'Email Newsletter',
    description: 'Engaging email campaign templates',
    color: 'orange',
    icon: <Mail className="h-5 w-5" />,
    useCases: '34',
    performance: '+7%',
  },
  {
    name: 'Story Series',
    description: 'Instagram/Facebook story frameworks',
    color: 'cyan',
    icon: <Sparkles className="h-5 w-5" />,
    useCases: '78',
    performance: '+18%',
  },
]

const pendingApprovals = [
  {
    title: 'New Vaccine Guidelines Announcement',
    description: 'Official announcement regarding updated COVID-19 vaccination guidelines',
    author: 'Dr. Sarah Al-Mansoori',
    platform: 'Twitter, LinkedIn, Press',
    submitted: '2 hours ago',
    priority: 'urgent',
    color: 'red',
    icon: <AlertCircle className="h-5 w-5" />,
  },
  {
    title: 'Mental Health Infographic Series',
    description: '5-part visual series on mental health awareness',
    author: 'Creative Team',
    platform: 'Instagram, Pinterest',
    submitted: '5 hours ago',
    priority: 'high',
    color: 'purple',
    icon: <ImageIcon className="h-5 w-5" />,
  },
  {
    title: 'Healthcare Worker Appreciation Post',
    description: 'Social media campaign celebrating healthcare professionals',
    author: 'Content Team',
    platform: 'All Platforms',
    submitted: '1 day ago',
    priority: 'medium',
    color: 'emerald',
    icon: <Heart className="h-5 w-5" />,
  },
  {
    title: 'Malaffi App Update Announcement',
    description: 'New features and improvements to the Malaffi platform',
    author: 'Digital Team',
    platform: 'Twitter, Facebook, Email',
    submitted: '1 day ago',
    priority: 'medium',
    color: 'denim',
    icon: <Smartphone className="h-5 w-5" />,
  },
]

const approvalStages = [
  { name: 'Draft Submitted', count: 8, status: 'active' },
  { name: 'Content Review', count: 12, status: 'pending' },
  { name: 'Legal Compliance', count: 5, status: 'pending' },
  { name: 'Final Approval', count: 3, status: 'pending' },
  { name: 'Scheduled/Published', count: 234, status: 'completed' },
]
