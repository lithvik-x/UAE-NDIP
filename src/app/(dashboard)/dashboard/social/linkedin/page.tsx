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
  Globe,
  Hash,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Briefcase,
  MessageSquare,
  ThumbsUp,
  Share2,
  Eye,
  CheckCircle,
  Flag,
  User,
  Building,
  Award,
  TrendingDown,
  DollarSign,
} from 'lucide-react'
import {
  useLinkedinIntelligenceData,
} from '@/lib/data-loader'

export default function LinkedInProfessionalPage() {
  const { data } = useLinkedinIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading LinkedIn data...</div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts } = data

  // LinkedIn specific metrics
  const uaeLinkedInStats = [
    { label: 'Active Users', value: '4.5M', icon: Users, color: CHART_COLORS.cyan },
    { label: 'Penetration', value: '46%', icon: Globe, color: CHART_COLORS.navy },
    { label: 'Bot Activity', value: '8%', icon: Shield, color: CHART_COLORS.emerald },
    { label: 'Gov Requests', value: '89', icon: Flag, color: CHART_COLORS.gold },
    { label: 'Dark Social', value: '15', icon: Eye, color: CHART_COLORS.platinum },
  ]

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: metrics.sentiment.breakdown.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: metrics.sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.sentiment.breakdown.negative, color: CHART_COLORS.rose },
  ]

  // Engagement data
  const engagementData = [
    { name: 'Likes', value: metrics.engagement.avgLikes, color: CHART_COLORS.cyan },
    { name: 'Comments', value: metrics.engagement.avgComments, color: CHART_COLORS.gold },
    { name: 'Shares', value: metrics.engagement.avgShares, color: CHART_COLORS.indigo },
  ]

  // Professional categories
  const professionalCategories = [
    { name: 'Technology', value: 28, color: CHART_COLORS.cyan },
    { name: 'Finance', value: 24, color: CHART_COLORS.gold },
    { name: 'Healthcare', value: 15, color: CHART_COLORS.emerald },
    { name: 'Real Estate', value: 12, color: CHART_COLORS.purple },
    { name: 'Consulting', value: 10, color: CHART_COLORS.indigo },
    { name: 'Other', value: 11, color: CHART_COLORS.platinum },
  ]

  // Job market trends
  const jobTrends = [
    { month: 'Jan', openings: 4200, salary: 18500 },
    { month: 'Feb', openings: 4500, salary: 18200 },
    { month: 'Mar', openings: 4800, salary: 18800 },
    { month: 'Apr', openings: 5100, salary: 19200 },
    { month: 'May', openings: 4900, salary: 19000 },
    { month: 'Jun', openings: 5300, salary: 19500 },
    { month: 'Jul', openings: 5200, salary: 19300 },
    { month: 'Aug', openings: 5600, salary: 19800 },
    { month: 'Sep', openings: 5800, salary: 20200 },
    { month: 'Oct', openings: 6100, salary: 20500 },
    { month: 'Nov', openings: 5900, salary: 20300 },
    { month: 'Dec', openings: 6400, salary: 21000 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">PROFESSIONAL</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">LinkedIn & Professional</h1>
          <p className="mt-2 text-slate-400">
            LinkedIn analysis: 4.5M users, professional networking, business opportunities
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Briefcase className="h-4 w-4" />
            View Jobs
          </Button>
          <Button className="bg-gradient-cyan hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {uaeLinkedInStats.map((stat, idx) => (
          <MetricCard
            key={idx}
            title={stat.label}
            value={stat.value}
            previousValue={stat.value}
            icon={<stat.icon className="h-6 w-6" />}
            gradient="navy"
          />
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="professional">Professional Trends</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="censorship">Censorship</TabsTrigger>
          <TabsTrigger value="narratives">Key Narratives</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="LinkedIn UAE Overview" description="Professional platform metrics and sentiment">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">User Metrics</CardTitle>
                    <CardDescription>UAE LinkedIn audience breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Total Users</span>
                        <span className="text-xl font-bold text-gold">{metrics.users.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Market Penetration</span>
                        <span className="text-xl font-bold text-gold">{metrics.penetration}%</span>
                      </div>
                      <Progress value={metrics.penetration} className="h-2" />
                      <div className="mt-4">
                        <p className="text-sm text-slate-400">{metrics.demographics}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Analysis</CardTitle>
                    <CardDescription>Overall: {metrics.sentiment.overall} (Score: {metrics.sentiment.score})</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={220}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trending Hashtags</CardTitle>
                  <CardDescription>Most used professional hashtags</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {metrics.engagement.trendingHashtags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-cyan-400 border-cyan-400/50 px-3 py-1">
                        <Hash className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Professional Trends Tab */}
        <TabsContent value="professional" className="space-y-6">
          <GlassPanel title="Professional Trends" description="Job market and business trends on LinkedIn">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Job Openings Trend</CardTitle>
                  <CardDescription>Monthly job openings in UAE (2025)</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={jobTrends}
                    xAxisKey="month"
                    areas={[{ dataKey: 'openings', name: 'Job Openings', color: CHART_COLORS.cyan }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Professional Categories</CardTitle>
                    <CardDescription>Distribution by industry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={professionalCategories}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Share %', color: CHART_COLORS.cyan }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Average Salary Trend</CardTitle>
                    <CardDescription>Monthly average salary (AED)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={jobTrends}
                      xAxisKey="month"
                      lines={[{ dataKey: 'salary', name: 'Avg Salary', color: CHART_COLORS.gold }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Government Accounts</CardTitle>
                  <CardDescription>Official UAE professional presence</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {governmentAccounts.map((account, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                            <Building className="h-5 w-5 text-cyan-400" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-slate-200">{account.handle}</span>
                              {account.verified && (
                                <CheckCircle className="h-4 w-4 text-blue-400" />
                              )}
                            </div>
                            <Badge variant="outline" className="text-xs mt-1">{account.type}</Badge>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-gold">{account.followers.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <GlassPanel title="Engagement Analysis" description="LinkedIn engagement metrics">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Average Engagement per Post</CardTitle>
                  <CardDescription>Professional content engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={engagementData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Avg per Post', color: CHART_COLORS.cyan }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Concerns</CardTitle>
                    <CardDescription>Issues discussed by UAE professionals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {metrics.sentiment.keyConcerns.map((concern, idx) => (
                        <div key={idx} className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                          <AlertTriangle className="h-4 w-4 text-yellow-400" />
                          <span className="text-sm text-slate-200">{concern}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Bot Activity Analysis</CardTitle>
                    <CardDescription>Only {metrics.botActivity.estimatedBotPercent}% estimated bots</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Bot Percentage</span>
                        <Badge variant="success" className="text-emerald-400">Low Risk</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Coordinated Inauthentic</span>
                        <Badge variant="success">None Detected</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Confidence</span>
                        <span className="text-lg font-bold text-gold">{Math.round(metrics.botActivity.confidence * 100)}%</span>
                      </div>
                      <Progress value={metrics.botActivity.estimatedBotPercent} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Censorship Tab */}
        <TabsContent value="censorship" className="space-y-6">
          <GlassPanel title="Censorship & Compliance" description="LinkedIn content moderation - minimal censorship">
            <div className="space-y-6">
              <Card className="glass-card border-emerald-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                    <Shield className="h-5 w-5" />
                    Low Censorship Platform
                  </CardTitle>
                  <CardDescription>LinkedIn has minimal censorship compared to other platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Censorship Level</span>
                      <Badge variant="success">None</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Compliance Rate</span>
                      <span className="text-xl font-bold text-gold">{data.censorship.complianceRate}%</span>
                    </div>
                    <Progress value={data.censorship.complianceRate} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Government Requests</span>
                      <span className="text-xl font-bold text-rose-400">{data.censorship.governmentRequests}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Content Removed</span>
                      <span className="text-xl font-bold text-rose-400">{data.censorship.contentRemoved}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Censorship Notes</CardTitle>
                  <CardDescription>Analysis of LinkedIn content control</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">{data.censorship.notes}</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Bot Activity Indicators</CardTitle>
                  <CardDescription>Detected patterns (minimal)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[120px]">
                    <div className="space-y-2">
                      {metrics.botActivity.indicators.map((indicator, idx) => (
                        <div key={idx} className="flex items-center gap-2 rounded-lg bg-slate-800/50 p-2">
                          <Flag className="h-3 w-3 text-platinum" />
                          <span className="text-xs text-slate-300">{indicator}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Key Narratives" description="Dominant professional narratives on UAE LinkedIn">
            <div className="space-y-6">
              {keyNarratives.map((narrative, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{narrative.topic}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          narrative.sentiment === 'Positive' ? 'success' :
                          narrative.sentiment === 'Negative' ? 'destructive' : 'outline'
                        }>
                          {narrative.sentiment}
                        </Badge>
                        <Badge variant="outline" className="text-gold">
                          {narrative.prevalence}% prevalence
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-300 mb-4">{narrative.narrative}</p>
                    <div className="space-y-2">
                      <p className="text-xs text-slate-400 font-medium">Sources ({narrative.sources.length}):</p>
                      <div className="flex flex-wrap gap-2">
                        {narrative.sources.map((source, sIdx) => (
                          <Badge key={sIdx} variant="outline" className="text-xs">
                            {source}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Progress value={narrative.prevalence} className="mt-4 h-2" />
                  </CardContent>
                </Card>
              ))}

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Golden Visa Discussions</CardTitle>
                  <CardDescription>High-interest topic on LinkedIn UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: 'Average Salary (AED)', value: '21,000+' },
                      { label: 'Years for Golden Visa', value: '3-10 years' },
                      { label: 'Top Industries', value: 'Tech, Finance' },
                      { label: 'Success Rate', value: '78%' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                        <span className="text-sm text-slate-300">{item.label}</span>
                        <span className="text-lg font-bold text-gold">{item.value}</span>
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
