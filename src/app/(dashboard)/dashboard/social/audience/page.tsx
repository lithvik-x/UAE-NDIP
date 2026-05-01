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
  Shield,
  Users,
  TrendingUp,
  Globe,
  User,
  MapPin,
  Calendar,
  MessageSquare,
  Clock,
  Smartphone,
  Monitor,
} from 'lucide-react'
import {
  useFacebookIntelligenceData,
  useInstagramIntelligenceData,
  useTwitterIntelligenceData,
} from '@/lib/data-loader'

export default function AudiencePage() {
  const facebookData = useFacebookIntelligenceData()
  const instagramData = useInstagramIntelligenceData()
  const twitterData = useTwitterIntelligenceData()

  const isLoading = !facebookData.data && !instagramData.data && !twitterData.data

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading audience intelligence data...</div>
      </div>
    )
  }

  // UAE Demographics
  const demographicsData = [
    { age: '13-17', male: 8, female: 7, total: 15 },
    { age: '18-24', male: 18, female: 16, total: 34 },
    { age: '25-34', male: 22, female: 18, total: 40 },
    { age: '35-44', male: 15, female: 12, total: 27 },
    { age: '45-54', male: 8, female: 7, total: 15 },
    { age: '55-64', male: 4, female: 4, total: 8 },
    { age: '65+', male: 2, female: 2, total: 4 },
  ]

  // Nationality distribution
  const nationalityData = [
    { nationality: 'Emirati', percentage: 12, color: CHART_COLORS.gold },
    { nationality: 'South Asian', percentage: 38, color: CHART_COLORS.navy },
    { nationality: 'Arab Expat', percentage: 18, color: CHART_COLORS.platinum },
    { nationality: 'Western Expat', percentage: 15, color: CHART_COLORS.emerald },
    { nationality: 'Other', percentage: 17, color: CHART_COLORS.rose },
  ]

  // Platform usage by age
  const platformByAge = [
    { age: '18-24', instagram: 92, tiktok: 85, twitter: 45, facebook: 78 },
    { age: '25-34', instagram: 78, tiktok: 65, twitter: 52, facebook: 82 },
    { age: '35-44', instagram: 58, tiktok: 38, twitter: 42, facebook: 85 },
    { age: '45-54', instagram: 35, tiktok: 18, twitter: 28, facebook: 78 },
    { age: '55+', instagram: 22, tiktok: 8, twitter: 15, facebook: 72 },
  ]

  // Device usage
  const deviceData = [
    { device: 'Mobile', percentage: 68, color: CHART_COLORS.navy },
    { device: 'Desktop', percentage: 24, color: CHART_COLORS.platinum },
    { device: 'Tablet', percentage: 8, color: CHART_COLORS.gold },
  ]

  // Peak activity hours
  const activityHours = [
    { hour: '6AM', activity: 35 },
    { hour: '9AM', activity: 68 },
    { hour: '12PM', activity: 72 },
    { hour: '3PM', activity: 65 },
    { hour: '6PM', activity: 85 },
    { hour: '9PM', activity: 92 },
    { hour: '12AM', activity: 58 },
  ]

  // Engagement by demographic
  const engagementByDemo = [
    { demographic: 'Emirati Youth', engagement: 4.2, color: CHART_COLORS.gold },
    { demographic: 'South Asian Expats', engagement: 3.8, color: CHART_COLORS.navy },
    { demographic: 'Western Expats', engagement: 3.5, color: CHART_COLORS.platinum },
    { demographic: 'Arab Expats', engagement: 3.2, color: CHART_COLORS.emerald },
    { demographic: 'Other', engagement: 2.8, color: CHART_COLORS.rose },
  ]

  // Language preferences
  const languageData = [
    { language: 'English', percentage: 65, color: CHART_COLORS.gold },
    { language: 'Arabic', percentage: 25, color: CHART_COLORS.navy },
    { language: 'Hindi/Urdu', percentage: 8, color: CHART_COLORS.platinum },
    { language: 'Other', percentage: 2, color: CHART_COLORS.emerald },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">AUDIENCE INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Audience Demographics & Behavior</h1>
          <p className="mt-2 text-platinum-400">
            UAE social media audience breakdown — demographics, behavior patterns, and platform preferences
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Users className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Globe className="h-4 w-4" />
            Analyze Segments
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Social Users"
          value="9.8M"
          previousValue={9.4}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Avg Time/Day"
          value="3.2h"
          previousValue={3.0}
          icon={<Clock className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Mobile Users"
          value="68%"
          icon={<Smartphone className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Active Users"
          value="78%"
          previousValue={75}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
      </div>

      <Tabs defaultValue="demographics" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="geography">Geography</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
        </TabsList>

        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-6">
          <GlassPanel title="UAE Social Media Demographics" description="Age and gender distribution across platforms">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Age Distribution</CardTitle>
                  <CardDescription>Social media users by age group</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={demographicsData}
                    xAxisKey="age"
                    bars={[
                      { dataKey: 'male', name: 'Male', color: CHART_COLORS.navy },
                      { dataKey: 'female', name: 'Female', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Nationality Distribution</CardTitle>
                    <CardDescription>Social media users by nationality</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={nationalityData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Language Preferences</CardTitle>
                    <CardDescription>Preferred content language</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {languageData.map((lang, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: lang.color }}
                              />
                              <span className="text-sm font-medium text-platinum-200">{lang.language}</span>
                            </div>
                            <span className="text-lg font-bold text-platinum-200">{lang.percentage}%</span>
                          </div>
                          <Progress value={lang.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Geography Tab */}
        <TabsContent value="geography" className="space-y-6">
          <GlassPanel title="Geographic Distribution" description="Social media usage by emirate">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Users by Emirate</CardTitle>
                  <CardDescription>Social media penetration by location</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { emirate: 'Dubai', users: 3500000, percentage: 35, growth: 8.2 },
                      { emirate: 'Abu Dhabi', users: 2800000, percentage: 28, growth: 6.5 },
                      { emirate: 'Sharjah', users: 1200000, percentage: 12, growth: 4.2 },
                      { emirate: 'Ajman', users: 580000, percentage: 6, growth: 5.8 },
                      { emirate: 'RAK', users: 450000, percentage: 5, growth: 3.1 },
                      { emirate: 'Fujairah', users: 320000, percentage: 3, growth: 2.5 },
                      { emirate: 'Umm Al Quwain', users: 280000, percentage: 3, growth: 2.8 },
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 text-gold" />
                            <span className="text-sm font-medium text-platinum-200">{item.emirate}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-platinum-400">{item.users.toLocaleString()} users</span>
                            <span className="text-sm font-bold text-gold">{item.percentage}%</span>
                            <span className="text-sm text-emerald">+{item.growth}%</span>
                          </div>
                        </div>
                        <Progress value={item.percentage * 2.5} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Urban vs Rural</CardTitle>
                    <CardDescription>Usage distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/20">
                            <MapPin className="h-8 w-8 text-navy" />
                          </div>
                          <div>
                            <p className="font-semibold text-platinum-200">Urban Areas</p>
                            <p className="text-sm text-platinum-400">Dubai, Abu Dhabi, major cities</p>
                          </div>
                        </div>
                        <p className="text-3xl font-bold text-navy">89%</p>
                      </div>
                      <Progress value={89} className="h-3" />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                            <MapPin className="h-8 w-8 text-gold" />
                          </div>
                          <div>
                            <p className="font-semibold text-platinum-200">Rural Areas</p>
                            <p className="text-sm text-platinum-400">Northern emirates, remote areas</p>
                          </div>
                        </div>
                        <p className="text-3xl font-bold text-gold">11%</p>
                      </div>
                      <Progress value={11} className="h-3" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Peak Activity by Location</CardTitle>
                    <CardDescription>Most active times by emirate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-3">
                        {[
                          { emirate: 'Dubai', peak: '6PM - 10PM', activity: 95 },
                          { emirate: 'Abu Dhabi', peak: '7PM - 11PM', activity: 88 },
                          { emirate: 'Sharjah', peak: '5PM - 9PM', activity: 72 },
                          { emirate: 'Northern Emirates', peak: '6PM - 10PM', activity: 65 },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Clock className="h-4 w-4 text-navy" />
                              <span className="text-sm font-medium text-platinum-200">{item.emirate}</span>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-platinum-400">{item.peak}</p>
                              <p className="text-sm font-bold text-gold">Activity: {item.activity}%</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Behavior Tab */}
        <TabsContent value="behavior" className="space-y-6">
          <GlassPanel title="User Behavior Analysis" description="Platform usage patterns and preferences">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Daily Activity Pattern</CardTitle>
                  <CardDescription>User activity by hour</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={activityHours}
                    xAxisKey="hour"
                    areas={[
                      { dataKey: 'activity', name: 'Activity Level %', color: CHART_COLORS.gold },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Device Usage</CardTitle>
                    <CardDescription>Primary device for social media</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={deviceData}
                      height={250}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Preference by Age</CardTitle>
                    <CardDescription>Most used platform per age group</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={platformByAge}
                      xAxisKey="age"
                      bars={[
                        { dataKey: 'instagram', name: 'Instagram', color: CHART_COLORS.rose },
                        { dataKey: 'tiktok', name: 'TikTok', color: CHART_COLORS.navy },
                        { dataKey: 'twitter', name: 'Twitter', color: CHART_COLORS.gold },
                        { dataKey: 'facebook', name: 'Facebook', color: CHART_COLORS.platinum },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Consumption Patterns</CardTitle>
                  <CardDescription>What users engage with</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    {[
                      { type: 'Video Content', percentage: 45, trend: 'up' },
                      { type: 'Images/Photos', percentage: 28, trend: 'stable' },
                      { type: 'Text Posts', percentage: 15, trend: 'down' },
                      { type: 'Stories/Reels', percentage: 12, trend: 'up' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 rounded-lg bg-platinum-800/50 p-4">
                        <Monitor className="h-5 w-5 text-gold" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-platinum-200">{item.type}</p>
                          <p className="text-lg font-bold text-platinum-200">{item.percentage}%</p>
                        </div>
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
          <GlassPanel title="Engagement Analysis" description="User engagement patterns by demographic">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement Rate by Demographic</CardTitle>
                  <CardDescription>Average engagement percentage</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={engagementByDemo}
                    xAxisKey="demographic"
                    bars={[
                      { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Content Type Engagement</CardTitle>
                    <CardDescription>What drives engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { type: 'Behind-the-scenes', engagement: 5.8 },
                        { type: 'User-generated content', engagement: 5.2 },
                        { type: 'Live streams', engagement: 4.9 },
                        { type: 'Giveaways/Contests', engagement: 4.5 },
                        { type: 'Educational content', engagement: 3.8 },
                        { type: 'Promotional content', engagement: 1.9 },
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-200">{item.type}</span>
                            <span className="text-sm font-bold text-platinum-200">{item.engagement}%</span>
                          </div>
                          <Progress value={item.engagement * 15} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Engagement Drivers</CardTitle>
                    <CardDescription>What motivates UAE audiences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-3">
                        {[
                          { driver: 'Local relevance & UAE content', impact: 'High' },
                          { driver: 'Celebrity/Influencer endorsements', impact: 'High' },
                          { driver: 'Arabic language content', impact: 'Medium' },
                          { driver: 'Cultural/Heritage content', impact: 'Medium' },
                          { driver: 'Business/Economy news', impact: 'Medium' },
                          { driver: 'International events', impact: 'Low' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <MessageSquare className="h-4 w-4 text-gold" />
                              <span className="text-sm text-platinum-300">{item.driver}</span>
                            </div>
                            <Badge
                              variant="outline"
                              className={
                                item.impact === 'High'
                                  ? 'text-emerald border-emerald'
                                  : item.impact === 'Medium'
                                  ? 'text-gold border-gold'
                                  : 'text-platinum-400 border-platinum-600'
                              }
                            >
                              {item.impact}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Expat vs Emirati Engagement</CardTitle>
                  <CardDescription>Engagement comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gold">Emirati Users</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-platinum-400">Avg Time on Platform</span>
                          <span className="font-bold text-platinum-200">3.8h/day</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-platinum-400">Engagement Rate</span>
                          <span className="font-bold text-platinum-200">4.2%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-platinum-400">Preferred Content</span>
                          <span className="font-bold text-platinum-200">Cultural/Heritage</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-navy">Expat Users</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-platinum-400">Avg Time on Platform</span>
                          <span className="font-bold text-platinum-200">2.9h/day</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-platinum-400">Engagement Rate</span>
                          <span className="font-bold text-platinum-200">3.5%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-platinum-400">Preferred Content</span>
                          <span className="font-bold text-platinum-200">Lifestyle/Business</span>
                        </div>
                      </div>
                    </div>
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
