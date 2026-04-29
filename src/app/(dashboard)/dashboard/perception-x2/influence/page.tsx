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
  ArrowUpRight,
  Award,
  Eye,
  Github,
  Globe,
  Heart,
  Instagram,
  Link2,
  Linkedin,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Share2,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Twitter,
  User,
  Users,
  Video,
  Youtube,
} from 'lucide-react'
import { perceptionData } from '@/lib/data-loader'

export default function InfluencePage() {
  // Extract real data from data loader
  const { nodeDirectory, microInfluencers, grassroots } = perceptionData.influence
  // Influencer network growth
  const networkGrowthData = [
    { month: 'Aug', macro: 38, micro: 58, nano: 32, total: 128 },
    { month: 'Sep', macro: 40, micro: 62, nano: 34, total: 136 },
    { month: 'Oct', macro: 42, micro: 64, nano: 35, total: 141 },
    { month: 'Nov', macro: 43, micro: 66, nano: 36, total: 145 },
    { month: 'Dec', macro: 44, micro: 67, nano: 37, total: 148 },
    { month: 'Jan', macro: 45, micro: 68, nano: 37, total: 150 },
  ]

  // Platform distribution
  const platformDistributionData = [
    { platform: 'Instagram', influencers: 52, engagement: 9.2 },
    { platform: 'Twitter/X', influencers: 38, engagement: 7.8 },
    { platform: 'LinkedIn', influencers: 28, engagement: 6.5 },
    { platform: 'YouTube', influencers: 22, engagement: 8.5 },
    { platform: 'TikTok', influencers: 10, engagement: 12.4 },
  ]

  // Campaign performance
  const campaignPerformanceData = [
    { campaign: 'Vaccine Awareness', reach: 2400000, engagement: 8.5, conversion: 12 },
    { campaign: 'Mental Health', reach: 1850000, engagement: 9.2, conversion: 15 },
    { campaign: 'Preventive Care', reach: 1650000, engagement: 7.8, conversion: 10 },
    { campaign: 'Insurance Guide', reach: 1250000, engagement: 8.1, conversion: 14 },
    { campaign: 'Healthy Living', reach: 980000, engagement: 8.8, conversion: 11 },
  ]

  // Influencer tier performance
  const tierPerformanceData = [
    { tier: 'Macro (100K+)', count: 45, avgEngagement: 7.2, avgCost: 5000 },
    { tier: 'Mid (10K-100K)', count: 68, avgEngagement: 8.5, avgCost: 1200 },
    { tier: 'Micro (1K-10K)', count: 37, avgEngagement: 9.8, avgCost: 350 },
  ]

  // ROI by influencer type
  const roiByTypeData = [
    { type: 'Medical Authority', roi: 450, engagement: 8.2, trust: 95 },
    { type: 'Lifestyle Blogger', roi: 320, engagement: 9.5, trust: 78 },
    { type: 'Fitness Expert', roi: 380, engagement: 10.2, trust: 82 },
    { type: 'Parenting Blogger', roi: 290, engagement: 9.8, trust: 75 },
    { type: 'Tech Reviewer', roi: 250, engagement: 7.5, trust: 70 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-indigo">Influence</h1>
          <p className="mt-2 text-slate-600">
            Node command center and grassroots influencer network management
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Discover Influencers
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <Plus className="h-4 w-4" />
            Add Influencer
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Influencers"
          value="150"
          previousValue={135}
          icon={<Users className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Total Reach"
          value="12.4"
          unit="M followers"
          previousValue={10.8}
          icon={<Globe className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Engagement Rate"
          value="8.7%"
          previousValue={7.9}
          icon={<Heart className="h-6 w-6" />}
          gradient="rose"
          status="success"
        />
        <MetricCard
          title="Active Campaigns"
          value="23"
          previousValue={18}
          icon={<Sparkles className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="command" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="command">Node Command Center</TabsTrigger>
          <TabsTrigger value="grassroots">Grassroots Network</TabsTrigger>
          <TabsTrigger value="campaigns">Influencer Campaigns</TabsTrigger>
          <TabsTrigger value="performance">Performance Analytics</TabsTrigger>
        </TabsList>

        {/* Node Command Center */}
        <TabsContent value="command" className="space-y-6">
          {/* Influencer Network Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Network Growth Trend</CardTitle>
                <CardDescription>6-month influencer acquisition by tier</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={networkGrowthData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'macro', name: 'Macro', color: CHART_COLORS.purple },
                    { dataKey: 'micro', name: 'Micro', color: CHART_COLORS.indigo },
                    { dataKey: 'nano', name: 'Nano', color: CHART_COLORS.denim },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Platform Distribution</CardTitle>
                <CardDescription>Influencer count and engagement by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={platformDistributionData}
                  xAxisKey="platform"
                  bars={[
                    { dataKey: 'influencers', name: 'Count', color: CHART_COLORS.indigo },
                    { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.emerald },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Node Command Center" description="Central hub for influencer network management">
            <div className="space-y-6">
              {/* Network Overview */}
              <div className="grid gap-6 lg:grid-cols-4">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-slate-900">45</div>
                    <div className="text-sm text-slate-600 mt-1">Macro Influencers</div>
                    <div className="text-xs text-slate-500">100K+ followers</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-slate-900">68</div>
                    <div className="text-sm text-slate-600 mt-1">Micro Influencers</div>
                    <div className="text-xs text-slate-500">10K-100K followers</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-slate-900">37</div>
                    <div className="text-sm text-slate-600 mt-1">Nano Influencers</div>
                    <div className="text-xs text-slate-500">1K-10K followers</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-emerald-600">94.2%</div>
                    <div className="text-sm text-slate-600 mt-1">Avg. Alignment</div>
                    <div className="text-xs text-slate-500">With DoH values</div>
                  </CardContent>
                </Card>
              </div>

              {/* Top Influencers */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Top Performing Influencers</CardTitle>
                      <CardDescription>Ranked by engagement and alignment</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Filter by Platform</Button>
                      <Button variant="outline" size="sm">Sort by Performance</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-4 pr-4">
                      {topInfluencers.map((influencer, index) => (
                        <Card key={index} className="glass-card">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-indigo text-white text-xl font-bold shrink-0">
                                {influencer.initials}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-semibold text-slate-900">{influencer.name}</h4>
                                      <Badge variant="success" className="text-xs gap-1">
                                        <Star className="h-3 w-3" />
                                        {influencer.tier}
                                      </Badge>
                                    </div>
                                    <p className="text-sm text-slate-600">{influencer.title}</p>
                                    <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                                      <span>{influencer.followers}</span>
                                      <span>•</span>
                                      <span>{influencer.category}</span>
                                      <span>•</span>
                                      <span>{influencer.engagement}% engagement</span>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-2xl font-bold text-emerald-600">{influencer.alignment}%</div>
                                    <div className="text-xs text-slate-500">Alignment</div>
                                  </div>
                                </div>
                                <div className="mt-3 space-y-2">
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-600">Content Alignment</span>
                                    <span className="font-semibold text-slate-900">{influencer.alignment}%</span>
                                  </div>
                                  <Progress value={influencer.alignment} className="h-1.5" />
                                </div>
                                <div className="mt-3 flex flex-wrap gap-1">
                                  {influencer.platforms.map((platform, i) => (
                                    <Badge key={i} variant="outline" className="text-xs gap-1">
                                      {platform.icon}
                                      {platform.name}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex gap-2 shrink-0">
                                <Button variant="outline" size="sm" className="gap-1">
                                  <Eye className="h-3 w-3" />
                                  Profile
                                </Button>
                                <Button size="sm" className="bg-gradient-indigo hover:opacity-90 text-white gap-1">
                                  <MessageSquare className="h-3 w-3" />
                                  Contact
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Grassroots Network */}
        <TabsContent value="grassroots" className="space-y-6">
          <GlassPanel title="Grassroots & Micro-Influencer Grid" description="Community-level influence network">
            <div className="space-y-6">
              {/* Community Leaders */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-amber-500" />
                      <CardTitle className="text-lg">Community Champions</CardTitle>
                    </div>
                    <CardDescription>Trusted local leaders with high community impact</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {communityChampions.map((champion, index) => (
                        <div key={index} className="flex items-center gap-3 rounded-lg bg-amber-50/50 border border-amber-200 p-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white font-semibold">
                            {champion.initials}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{champion.name}</div>
                            <div className="text-sm text-slate-600">{champion.role}</div>
                            <div className="text-xs text-slate-500">{champion.community} • {champion.impact} community members</div>
                          </div>
                          <Badge variant="warning" className="text-xs">{champion.trust}% trust</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-rose-500" />
                      <CardTitle className="text-lg">Wellness Warriors</CardTitle>
                    </div>
                    <CardDescription>Health advocates sharing personal wellness journeys</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {wellnessWarriors.map((warrior, index) => (
                        <div key={index} className="flex items-center gap-3 rounded-lg bg-rose-50/50 border border-rose-200 p-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500 text-white font-semibold">
                            {warrior.initials}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{warrior.name}</div>
                            <div className="text-sm text-slate-600">{warrior.focus}</div>
                            <div className="text-xs text-slate-500">{warrior.followers} followers • {warrior.engagement}% engagement</div>
                          </div>
                          <Badge variant="rose" className="text-xs">{warrior.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Medical Trenches */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-500" />
                    <CardTitle className="text-lg">Medical Trenches</CardTitle>
                  </div>
                  <CardDescription>Healthcare professionals sharing authentic insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {medicalProfessionals.map((prof, index) => (
                      <div key={index} className="rounded-lg bg-emerald-50/50 border border-emerald-200 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white font-semibold">
                            {prof.initials}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{prof.name}</div>
                            <div className="text-xs text-slate-500">{prof.specialty}</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-600">Followers</span>
                            <span className="font-semibold text-slate-900">{prof.followers}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-600">Engagement</span>
                            <span className="font-semibold text-emerald-600">{prof.engagement}%</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-600">Credibility</span>
                            <span className="font-semibold text-emerald-600">{prof.credibility}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Influencer Campaigns */}
        <TabsContent value="campaigns" className="space-y-6">
          <GlassPanel title="Active Influencer Campaigns" description="Track and manage influencer partnerships">
            <div className="space-y-4">
              {influencerCampaigns.map((campaign, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-${campaign.color} text-white`}>
                          {campaign.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg">{campaign.name}</CardTitle>
                            <Badge variant="success" className="text-xs">Active</Badge>
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
                    <div className="grid grid-cols-5 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-900">{campaign.influencers}</div>
                        <div className="text-xs text-slate-500">Influencers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-900">{campaign.reach}</div>
                        <div className="text-xs text-slate-500">Total Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-900">{campaign.engagement}%</div>
                        <div className="text-xs text-slate-500">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-900">{campaign.posts}</div>
                        <div className="text-xs text-slate-500">Posts</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-emerald-600">{campaign.roi}x</div>
                        <div className="text-xs text-slate-500">ROI</div>
                      </div>
                    </div>

                    {/* Influencers in Campaign */}
                    <div>
                      <div className="text-sm font-medium text-slate-700 mb-2">Participating Influencers</div>
                      <div className="flex flex-wrap gap-2">
                        {campaign.participants.map((participant, i) => (
                          <Badge key={i} variant="outline" className="gap-1">
                            {participant.icon}
                            {participant.name}
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Performance Analytics */}
        <TabsContent value="performance" className="space-y-6">
          {/* Performance Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Campaign Performance</CardTitle>
                <CardDescription>Reach and engagement by campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={campaignPerformanceData}
                  xAxisKey="campaign"
                  bars={[
                    { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.indigo },
                    { dataKey: 'conversion', name: 'Conversion %', color: CHART_COLORS.emerald },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ROI by Influencer Type</CardTitle>
                <CardDescription>Return on investment comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: 'Medical Authority', value: 450, color: CHART_COLORS.purple },
                    { name: 'Lifestyle Blogger', value: 320, color: CHART_COLORS.indigo },
                    { name: 'Fitness Expert', value: 380, color: CHART_COLORS.denim },
                    { name: 'Parenting Blogger', value: 290, color: CHART_COLORS.emerald },
                    { name: 'Tech Reviewer', value: 250, color: CHART_COLORS.orange },
                  ]}
                  donut={true}
                  height={250}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Influencer Performance Analytics" description="Comprehensive performance metrics and ROI analysis">
            <div className="space-y-6">
              {/* Performance Summary */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-emerald-600">8.7%</div>
                      <div className="text-sm text-slate-600 mt-2">Avg. Engagement Rate</div>
                      <div className="text-xs text-emerald-600 mt-1">+12.3% from last month</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-indigo-600">4.2x</div>
                      <div className="text-sm text-slate-600 mt-2">Average ROI</div>
                      <div className="text-xs text-emerald-600 mt-1">+8.7% from last month</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-purple-600">94.2%</div>
                      <div className="text-sm text-slate-600 mt-2">Brand Alignment Score</div>
                      <div className="text-xs text-emerald-600 mt-1">+3.1% from last month</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Platform Performance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Performance by Platform</CardTitle>
                  <CardDescription>Influencer metrics across different platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {platformPerformance.map((platform, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                          {platform.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-slate-700">{platform.name}</span>
                            <span className="text-sm font-bold text-slate-900">{platform.engagement}%</span>
                          </div>
                          <Progress value={platform.engagement} className="h-2" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-slate-900">{platform.influencers}</div>
                          <div className="text-xs text-slate-500">influencers</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Performing Content */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Performing Content</CardTitle>
                  <CardDescription>Highest engagement influencer posts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topContent.map((content, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-lg bg-slate-50/50 p-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-indigo text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900">{content.title}</div>
                          <div className="text-xs text-slate-500">by {content.influencer} • {content.platform}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-slate-900">{content.engagement}%</div>
                          <div className="text-xs text-slate-500">engagement</div>
                        </div>
                        <Badge variant="success" className="text-xs">{content.reach} reach</Badge>
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
const topInfluencers = [
  {
    name: 'Dr. Adeel Sajwani',
    initials: 'AS',
    title: 'Family Medicine Specialist • DHCC',
    tier: 'Macro',
    followers: '450K',
    category: 'Medical Authority',
    engagement: '8.7',
    alignment: 94,
    platforms: [
      { name: 'Instagram', icon: <Instagram className="h-3 w-3" /> },
      { name: 'TikTok', icon: <Video className="h-3 w-3" /> },
      { name: 'YouTube', icon: <Youtube className="h-3 w-3" /> },
    ],
  },
  {
    name: 'Dr. Farida Al Hosani',
    initials: 'FH',
    title: 'Executive Director • IDH • DoH',
    tier: 'Macro',
    followers: '125K',
    category: 'Government Official',
    engagement: '6.2',
    alignment: 98,
    platforms: [
      { name: 'Twitter', icon: <Twitter className="h-3 w-3" /> },
      { name: 'LinkedIn', icon: <Linkedin className="h-3 w-3" /> },
    ],
  },
  {
    name: 'Salama Al Shamsi',
    initials: 'SS',
    title: 'Wellness Advocate • Mental Health',
    tier: 'Macro',
    followers: '320K',
    category: 'Lifestyle Icon',
    engagement: '9.1',
    alignment: 89,
    platforms: [
      { name: 'Instagram', icon: <Instagram className="h-3 w-3" /> },
      { name: 'YouTube', icon: <Youtube className="h-3 w-3" /> },
      { name: 'Snapchat', icon: <Video className="h-3 w-3" /> },
    ],
  },
]

const communityChampions = [
  { initials: 'MA', name: 'Mona Al-Rashid', role: 'Community Health Advocate', community: 'Al Ain', impact: '15K', trust: 94 },
  { initials: 'KH', name: 'Khalid Hassan', role: 'Health Volunteer', community: 'Dubai', impact: '12K', trust: 91 },
  { initials: 'FA', name: 'Fatima Abdullah', role: 'Mom\'s Group Leader', community: 'Abu Dhabi', impact: '8.5K', trust: 89 },
]

const wellnessWarriors = [
  { initials: 'SA', name: 'Sara Al-Mazrouei', focus: 'Mental Health & Wellness', followers: '89K', engagement: '9.2', status: 'Active' },
  { initials: 'RA', name: 'Rashed Al-Kaabi', focus: 'Fitness & Nutrition', followers: '67K', engagement: '7.8', status: 'Active' },
  { initials: 'NA', name: 'Noura Al-Shehhi', focus: 'Mindful Living', followers: '54K', engagement: '8.4', status: 'Active' },
]

const medicalProfessionals = [
  { initials: 'DM', name: 'Dr. Mitha Al Suwaidi', specialty: 'Dermatology', followers: '180K', engagement: '12.4', credibility: 97 },
  { initials: 'OA', name: 'Dr. Omar Al Hammadi', specialty: 'Public Health', followers: '680K', engagement: '5.4', credibility: 99 },
  { initials: 'KS', name: 'Dr. Khawla Al Suhail', specialty: 'Pediatrics', followers: '75K', engagement: '6.7', credibility: 95 },
]

const influencerCampaigns = [
  {
    name: 'Beauty of Our Mind',
    description: 'Mental health awareness campaign featuring authentic stories',
    color: 'purple',
    icon: <Heart className="h-6 w-6" />,
    influencers: 23,
    reach: '2.4M',
    engagement: '8.9',
    posts: 47,
    roi: 4.2,
    progress: 72,
    participants: [
      { name: 'Dr. Adeel Sajwani', icon: <User className="h-3 w-3" /> },
      { name: 'Salama Al Shamsi', icon: <User className="h-3 w-3" /> },
      { name: 'Sara Al-Mazrouei', icon: <User className="h-3 w-3" /> },
    ],
  },
  {
    name: 'Vaccine Safety Education',
    description: 'Expert-led vaccination information campaign',
    color: 'emerald',
    icon: <Shield className="h-6 w-6" />,
    influencers: 15,
    reach: '1.8M',
    engagement: '7.2',
    posts: 34,
    roi: 3.8,
    progress: 55,
    participants: [
      { name: 'Dr. Farida Al Hosani', icon: <User className="h-3 w-3" /> },
      { name: 'Dr. Omar Al Hammadi', icon: <User className="h-3 w-3" /> },
    ],
  },
]

const platformPerformance = [
  { name: 'Instagram', engagement: 9.1, influencers: 67, icon: <Instagram className="h-5 w-5 text-purple-500" /> },
  { name: 'TikTok', engagement: 12.4, influencers: 45, icon: <Video className="h-5 w-5 text-slate-800" /> },
  { name: 'Twitter/X', engagement: 4.8, influencers: 38, icon: <Twitter className="h-5 w-5 text-slate-800" /> },
  { name: 'YouTube', engagement: 6.2, influencers: 28, icon: <Youtube className="h-5 w-5 text-red-500" /> },
  { name: 'LinkedIn', engagement: 3.4, influencers: 22, icon: <Linkedin className="h-5 w-5 text-blue-500" /> },
]

const topContent = [
  { title: 'My Mental Health Journey', influencer: 'Salama Al Shamsi', platform: 'Instagram', engagement: 12.4, reach: 'High' },
  { title: 'Skincare Routine Myths', influencer: 'Dr. Mitha Al Suwaidi', platform: 'TikTok', engagement: 15.8, reach: 'Viral' },
  { title: 'COVID-19 Vaccine Facts', influencer: 'Dr. Farida Al Hosani', platform: 'Twitter', engagement: 8.2, reach: 'High' },
  { title: 'Mindful Morning Routine', influencer: 'Sara Al-Mazrouei', platform: 'YouTube', engagement: 9.7, reach: 'Medium' },
]
