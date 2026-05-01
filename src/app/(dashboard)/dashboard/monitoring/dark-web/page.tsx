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
  Bug,
  Eye,
  EyeOff,
  Key,
  Lock,
  Radio,
  Shield,
  Skull,
  AlertTriangle,
} from 'lucide-react'
import {
  useDarkWebIntelligenceData,
} from '@/lib/data-loader'

export default function DarkWebMonitoringPage() {
  const { data } = useDarkWebIntelligenceData()

  // UAE Dark Web monitoring metrics
  const activeMarkets = 47
  const threatIndicators = 1284
  const compromisedCredentials = 23456
  const criticalAlerts = 18

  // Threat category data
  const threatCategoryData = [
    { name: 'Credentials', value: 35, color: CHART_COLORS.rose },
    { name: 'Financial Data', value: 25, color: CHART_COLORS.gold },
    { name: 'PII Data', value: 20, color: CHART_COLORS.navy },
    { name: 'Malware', value: 12, color: CHART_COLORS.rose },
    { name: 'Exploit Kits', value: 8, color: CHART_COLORS.orange },
  ]

  // Activity trend data
  const activityTrendData = [
    { day: 'Mon', listings: 234, mentions: 1247 },
    { day: 'Tue', listings: 267, mentions: 1456 },
    { day: 'Wed', listings: 312, mentions: 1678 },
    { day: 'Thu', listings: 289, mentions: 1523 },
    { day: 'Fri', listings: 345, mentions: 1890 },
    { day: 'Sat', listings: 412, mentions: 2134 },
    { day: 'Sun', listings: 378, mentions: 1956 },
  ]

  // Source distribution data
  const sourceData = [
    { name: 'Forums', value: 42, color: CHART_COLORS.navy },
    { name: 'Marketplaces', value: 28, color: CHART_COLORS.gold },
    { name: 'Paste Sites', value: 15, color: CHART_COLORS.platinum },
    { name: 'Social', value: 10, color: CHART_COLORS.rose },
    { name: 'IM Channels', value: 5, color: CHART_COLORS.info },
  ]

  // Recent threat listings
  const threatListings = [
    { id: 1, type: 'UAE Bank Credentials', price: '$2,500', source: 'DarkMarket Forum', severity: 'CRITICAL', time: '5 min ago' },
    { id: 2, type: 'Passport Scans Package', price: '$800', source: 'Underground Carding', severity: 'HIGH', time: '23 min ago' },
    { id: 3, type: 'Corporate VPN Access', price: '$1,200', source: 'Exploit Depot', severity: 'HIGH', time: '1 hr ago' },
    { id: 4, type: 'Mobile Numbers Database', price: '$450', source: 'DataHeap Forum', severity: 'MEDIUM', time: '2 hr ago' },
    { id: 5, type: 'Government Employee List', price: '$3,500', source: 'Shadow Market', severity: 'CRITICAL', time: '4 hr ago' },
  ]

  // Monitored keywords
  const monitoredKeywords = [
    { keyword: 'UAE Ministry', mentions: 1247, sentiment: 15 },
    { keyword: 'Dubai Police', mentions: 2341, sentiment: 22 },
    { keyword: 'Emirates ID', mentions: 876, sentiment: 8 },
    { keyword: 'ADMA', mentions: 432, sentiment: 18 },
    { keyword: 'Khalifa University', mentions: 234, sentiment: 25 },
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
          <Badge variant="denim" className="mb-2">M-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy">Dark Web Monitoring</h1>
          <p className="mt-2 text-platinum-400">
            Surveillance of underground forums, marketplaces, and illicit activity tracking
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Eye className="h-4 w-4" />
            Intel Feed
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Shield className="h-4 w-4" />
            Threat Hunt
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Markets"
          value={activeMarkets}
          previousValue={activeMarkets + 3}
          icon={<Radio className="h-6 w-6" />}
          gradient="denim"
          status="warning"
        />
        <MetricCard
          title="Threat Indicators"
          value={threatIndicators}
          previousValue={threatIndicators - 142}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="rose"
          status="info"
        />
        <MetricCard
          title="Compromised Credentials"
          value={compromisedCredentials}
          previousValue={compromisedCredentials + 1234}
          icon={<Key className="h-6 w-6" />}
          gradient="gold"
          status="warning"
        />
        <MetricCard
          title="Critical Alerts"
          value={criticalAlerts}
          previousValue={criticalAlerts + 4}
          icon={<Skull className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="threats">Threat Intel</TabsTrigger>
          <TabsTrigger value="keywords">Keyword Tracking</TabsTrigger>
          <TabsTrigger value="listings">Listings</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Dark Web Overview" description="Aggregated intelligence from underground sources">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Threat Category Distribution</CardTitle>
                    <CardDescription>Types of data being traded</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={threatCategoryData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Source Distribution</CardTitle>
                    <CardDescription>Where threats are being discussed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sourceData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Activity Trend</CardTitle>
                  <CardDescription>Daily mentions and listings related to UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={activityTrendData}
                    xAxisKey="day"
                    bars={[
                      { dataKey: 'mentions', name: 'Mentions', color: CHART_COLORS.navy },
                      { dataKey: 'listings', name: 'Listings', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Coverage Metrics</CardTitle>
                  <CardDescription>Dark web monitoring system performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Forums Monitored</span>
                        <span className="font-medium text-emerald-400">156</span>
                      </div>
                      <Progress value={78} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Marketplaces Tracked</span>
                        <span className="font-medium text-emerald-400">47</span>
                      </div>
                      <Progress value={65} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Paste Sites Scanned</span>
                        <span className="font-medium text-emerald-400">89</span>
                      </div>
                      <Progress value={72} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">IM Channels</span>
                        <span className="font-medium text-emerald-400">34</span>
                      </div>
                      <Progress value={45} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Threat Intel Tab */}
        <TabsContent value="threats" className="space-y-6">
          <GlassPanel title="Threat Intelligence" description="Detailed analysis of dark web threats">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Threat Actor Activity</CardTitle>
                  <CardDescription>Known threat groups with UAE interest</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-2">
                      {[
                        { group: 'Shadow Brokers', activity: 47, target: 'Government' },
                        { group: 'DarkSide', activity: 34, target: 'Financial' },
                        { group: 'REvil', activity: 28, target: 'Critical Infra' },
                        { group: 'Conti', activity: 23, target: 'Energy' },
                        { group: 'LockBit', activity: 19, target: 'Multi-sector' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Bug className="h-4 w-4 text-rose" />
                            <span className="text-sm font-medium text-platinum-200">{item.group}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-platinum-400">{item.target}</span>
                            <span className="text-lg font-bold text-rose">{item.activity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Vulnerability Exploits</CardTitle>
                  <CardDescription>Recently discussed vulnerabilities affecting UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { vuln: 'CVE-2024-3094', severity: 'CRITICAL', affects: 'Linux Systems', mentions: 1247 },
                      { vuln: 'CVE-2024-21318', severity: 'HIGH', affects: 'Windows Servers', mentions: 892 },
                      { vuln: 'CVE-2024-23897', severity: 'HIGH', affects: 'Jenkins', mentions: 654 },
                      { vuln: 'CVE-2024-27111', severity: 'MEDIUM', affects: 'Fortinet FW', mentions: 432 },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                        <div className="flex items-center gap-4">
                          <Lock className="h-5 w-5 text-rose" />
                          <div>
                            <p className="font-medium text-platinum-200">{item.vuln}</p>
                            <p className="text-sm text-platinum-400">Affects: {item.affects}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant="destructive" className="text-xs">{item.severity}</Badge>
                          <span className="text-sm text-platinum-400">{item.mentions} mentions</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Keyword Tracking Tab */}
        <TabsContent value="keywords" className="space-y-6">
          <GlassPanel title="Keyword Tracking" description="Monitoring specific terms across dark web sources">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Tracked Keywords</CardTitle>
                  <CardDescription>UAE-related terms being monitored</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {monitoredKeywords.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                              <Eye className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{item.keyword}</p>
                              <p className="text-sm text-platinum-400">{item.mentions.toLocaleString()} mentions</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${item.sentiment < 30 ? 'text-rose-400' : 'text-orange-400'}`}>
                              {item.sentiment}%
                            </div>
                            <p className="text-xs text-platinum-400">Threat Score</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Alert Configuration</CardTitle>
                  <CardDescription>Keyword alert thresholds and notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">24</div>
                      <p className="text-sm text-platinum-400">Active Keywords</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">156</div>
                      <p className="text-sm text-platinum-400">Daily Alerts</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-rose">18</div>
                      <p className="text-sm text-platinum-400">Critical Triggers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Listings Tab */}
        <TabsContent value="listings" className="space-y-6">
          <GlassPanel title="Recent Listings" description="Illicit offerings related to UAE entities">
            <div className="space-y-6">
              <Card className="glass-card border-rose-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Critical Listings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {threatListings.map((listing) => (
                        <div key={listing.id} className="flex items-start justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-platinum-200">{listing.type}</p>
                            <p className="text-sm text-platinum-400 mt-1">Source: {listing.source}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-gold">{listing.price}</div>
                              <p className="text-xs text-platinum-400">Price</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              {getSeverityBadge(listing.severity)}
                              <span className="text-xs text-platinum-400">{listing.time}</span>
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
                  <CardTitle className="text-lg">Listing Categories</CardTitle>
                  <CardDescription>Types of data and services being sold</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={threatCategoryData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.rose },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
