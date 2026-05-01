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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Building,
  Landmark,
  Newspaper,
  Radio,
  Tv,
  Camera,
  FileText,
  Star,
  Award,
  Briefcase,
  UsersRound,
  Mic,
  Play,
  DollarSign,
  TrendingDown,
  Film,
  Gamepad2,
  BookOpen,
  Target,
  Bot,
  Sparkles,
  BarChart3,
} from 'lucide-react'
import {
  useStakeholderOverviewData,
  useNamaData,
  useNMCDubaiData,
  usePrAgencyData,
} from '@/lib/data-loader'
import type { StakeholderIntelligence } from '@/lib/data-loader'

export default function MediaStakeholdersPage() {
  const { data: overviewData } = useStakeholderOverviewData()
  const { data: namaData } = useNamaData()
  const { data: nmcData } = useNMCDubaiData()
  const { data: prAgencyData } = usePrAgencyData()

  const overviewStakeholders = (overviewData?.stakeholders as StakeholderIntelligence[] || []).filter(s => s.type === 'media')
  const allMediaData = [namaData, nmcData, prAgencyData].filter(Boolean) as StakeholderIntelligence[]
  const mediaEntities = overviewStakeholders.length > 0 ? overviewStakeholders : allMediaData

  if (!overviewData && allMediaData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gold-400">Loading Media Stakeholder data...</div>
      </div>
    )
  }

  // Calculate aggregate metrics
  const totalReach = mediaEntities.reduce((sum, s) => sum + (s.metrics?.digitalReach || 0), 0)
  const avgCredibility = mediaEntities.reduce((sum, s) => sum + (s.metrics?.credibility?.score || 0), 0) / Math.max(mediaEntities.length, 1)
  const avgEngagement = mediaEntities.reduce((sum, s) => sum + (s.metrics?.engagement || 0), 0) / Math.max(mediaEntities.length, 1)

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: 52, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 28, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 20, color: CHART_COLORS.rose },
  ]

  // Platform breakdown
  const platformData = [
    { name: 'Television', value: 35, color: CHART_COLORS.navy },
    { name: 'Print', value: 25, color: CHART_COLORS.gold },
    { name: 'Digital', value: 22, color: CHART_COLORS.emerald },
    { name: 'Radio', value: 10, color: CHART_COLORS.platinum },
    { name: 'News Agencies', value: 8, color: CHART_COLORS.info },
  ]

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  const getMediaIcon = (name: string) => {
    const lowerName = name.toLowerCase()
    if (lowerName.includes('television') || lowerName.includes('tv') || lowerName.includes('dubai media')) {
      return <Tv className="h-5 w-5" />
    }
    if (lowerName.includes('radio')) {
      return <Radio className="h-5 w-5" />
    }
    if (lowerName.includes('news agency') || lowerName.includes('wam')) {
      return <FileText className="h-5 w-5" />
    }
    return <Newspaper className="h-5 w-5" />
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">MEDIA</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Media Stakeholders</h1>
          <p className="mt-2 text-platinum-400">
            Media regulatory bodies, news agencies, broadcast networks, and press organizations in the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Newspaper className="h-4 w-4" />
            View Directory
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <MetricCard
            title="Media Entities"
            value={mediaEntities.length || 9}
            icon={<Newspaper className="h-6 w-6" />}
            gradient="gold"
            status="info"
          />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <MetricCard
            title="Total Reach"
            value={totalReach > 1000000 ? `${(totalReach / 1000000).toFixed(1)}M` : totalReach.toLocaleString()}
            icon={<Globe className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <MetricCard
            title="Avg Credibility"
            value={avgCredibility.toFixed(1)}
            icon={<Shield className="h-6 w-6" />}
            gradient="indigo"
          />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <MetricCard
            title="Avg Engagement"
            value={avgEngagement.toFixed(1)}
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="emerald"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="freezones">Free Zones</TabsTrigger>
          <TabsTrigger value="ratings">Content Ratings</TabsTrigger>
          <TabsTrigger value="influencers">Influencers</TabsTrigger>
          <TabsTrigger value="economy">Economy</TabsTrigger>
          <TabsTrigger value="creators">Creators HQ</TabsTrigger>
          <TabsTrigger value="pr-agencies">PR Agencies</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Media Stakeholders Overview" description="Key metrics for UAE media landscape">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Media Entity Reach</CardTitle>
                  <CardDescription>Digital reach by media organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: 'NAMA', value: 15000000, color: CHART_COLORS.gold },
                      { name: 'NMC Dubai', value: 45000000, color: CHART_COLORS.navy },
                      { name: 'WAM', value: 8500000, color: CHART_COLORS.emerald },
                      { name: 'MBC Group', value: 32000000, color: CHART_COLORS.platinum },
                      { name: 'Al Arabia', value: 18000000, color: CHART_COLORS.info },
                      { name: 'Sky News', value: 12000000, color: CHART_COLORS.rose },
                    ]}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Reach', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment toward media entities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Breakdown</CardTitle>
                    <CardDescription>Media presence by platform type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={platformData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Media Entity Directory" description="Detailed profiles of UAE media stakeholders">
            <ScrollArea className="h-[700px]">
              <div className="space-y-4">
                {/* NAMA */}
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                          <Newspaper className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-platinum-200">National Media Authority (NAMA)</CardTitle>
                          <p className="text-sm text-platinum-400">هيئة الإعلام الوطني</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-400">Tier 1</Badge>
                        <Badge variant="warning" className="text-xs">YELLOW</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-platinum-300 mb-4">
                      Regulatory authority overseeing all media operations in the UAE. Establishes content standards, issues penalties for violations, and maintains press freedom monitoring.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">15M</div>
                        <div className="text-xs text-platinum-400">Digital Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">2.1</div>
                        <div className="text-xs text-platinum-400">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-platinum-400">82</div>
                        <div className="text-xs text-platinum-400">Credibility</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-navy-400">High</div>
                        <div className="text-xs text-platinum-400">UAE Relevance</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-platinum-700">
                      <p className="text-sm font-medium text-platinum-300 mb-2">Key Findings:</p>
                      <div className="space-y-1">
                        <div className="flex items-start gap-2 text-sm">
                          <Lightbulb className="h-4 w-4 text-gold-400 mt-0.5" />
                          <span className="text-platinum-400">Press Freedom Index ranking: 26.91/164th globally</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <Lightbulb className="h-4 w-4 text-gold-400 mt-0.5" />
                          <span className="text-platinum-400">Content penalty range: AED 5,000 - AED 1,000,000</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* NMC Dubai */}
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-500/20 text-navy-400">
                          <Tv className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-platinum-200">Dubai Media Council / NMC</CardTitle>
                          <p className="text-sm text-platinum-400">مجلس دبي للإعلام</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-400">Tier 1</Badge>
                        <Badge variant="success" className="text-xs">GREEN</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-platinum-300 mb-4">
                      Regulatory authority for media operations in Dubai. Oversees Dubai Media City (free zone with 1,300+ companies), content certification, and influencer regulation.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">45M</div>
                        <div className="text-xs text-platinum-400">Digital Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">2.1</div>
                        <div className="text-xs text-platinum-400">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-platinum-400">85</div>
                        <div className="text-xs text-platinum-400">Credibility</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-navy-400">Critical</div>
                        <div className="text-xs text-platinum-400">UAE Relevance</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-platinum-700">
                      <p className="text-sm font-medium text-platinum-300 mb-2">Key Programs:</p>
                      <div className="space-y-1">
                        <div className="flex items-start gap-2 text-sm">
                          <FileText className="h-4 w-4 text-navy-400 mt-0.5" />
                          <span className="text-platinum-400">Dubai Media City: 1,300+ registered media companies</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <FileText className="h-4 w-4 text-navy-400 mt-0.5" />
                          <span className="text-platinum-400">Creators HQ: AED 150 million fund for content creators</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WAM News Agency */}
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-platinum-200">WAM News Agency</CardTitle>
                          <p className="text-sm text-platinum-400">وكالة أنباء الإمارات</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs border-emerald-500/50 text-emerald-400">Tier 1</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-platinum-300 mb-4">
                      Official UAE state news agency providing high-volume daily coverage. Acts as the primary source for government announcements and official statements.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">8.5M</div>
                        <div className="text-xs text-platinum-400">Digital Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">1.8</div>
                        <div className="text-xs text-platinum-400">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-platinum-400">88</div>
                        <div className="text-xs text-platinum-400">Credibility</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-navy-400">High</div>
                        <div className="text-xs text-platinum-400">UAE Relevance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* MBC Group */}
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-platinum-500/20 text-platinum-400">
                          <Tv className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-platinum-200">MBC Group</CardTitle>
                          <p className="text-sm text-platinum-400">مجموعة MBC</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs border-platinum-500/50 text-platinum-400">Tier 1</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-platinum-300 mb-4">
                      Middle East largest broadcast group with television, radio, and digital media operations. Operates channels including MBC1, MBC2, MBC4, and Shahid streaming platform.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">32M</div>
                        <div className="text-xs text-platinum-400">Digital Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold-400">3.5</div>
                        <div className="text-xs text-platinum-400">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-platinum-400">84</div>
                        <div className="text-xs text-platinum-400">Credibility</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-navy-400">High</div>
                        <div className="text-xs text-platinum-400">UAE Relevance</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>

        {/* Platforms Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <GlassPanel title="Media Platform Analysis" description="Breakdown by media platform type">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Distribution</CardTitle>
                  <CardDescription>Media presence by platform type</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={platformData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {platformData.map((platform, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: platform.color }}
                          />
                          <span className="font-medium text-platinum-200">{platform.name}</span>
                        </div>
                        <span className="text-xl font-bold text-gold-400">{platform.value}%</span>
                      </div>
                      <Progress
                        value={platform.value}
                        className="h-2"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Free Zones Tab - Cycle B: Dubai Media City, Production City, Studio City */}
        <TabsContent value="freezones" className="space-y-6">
          <GlassPanel title="Dubai Media Free Zones" description="TECOM Group media clusters and production infrastructure">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Dubai Media City */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className="glass-card h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                        <Building className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-platinum-200">Dubai Media City</CardTitle>
                        <p className="text-sm text-platinum-400">مدينة دبي الإعلامية</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Badge variant="outline" className="border-gold/50 text-gold">Est. 2001</Badge>
                        <Badge variant="outline" className="border-emerald/50 text-emerald">Arab Media Capital 2020</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 rounded-lg bg-platinum-800/50">
                          <div className="text-2xl font-bold text-gold-400">1,300+</div>
                          <div className="text-xs text-platinum-400">Companies (EN)</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-platinum-800/50">
                          <div className="text-2xl font-bold text-gold-400">4,000+</div>
                          <div className="text-xs text-platinum-400">Companies (AR)</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-platinum-800/50">
                          <div className="text-2xl font-bold text-gold-400">40,000+</div>
                          <div className="text-xs text-platinum-400">Professionals</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-platinum-800/50">
                          <div className="text-2xl font-bold text-gold-400">25</div>
                          <div className="text-xs text-platinum-400">Years</div>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-platinum-700">
                        <p className="text-sm font-medium text-platinum-300 mb-2">Notable Tenants:</p>
                        <p className="text-xs text-platinum-400">BBC, CNN, MBC, Reuters, Forbes, Sony, Discovery, WPP, Publicis</p>
                      </div>
                      <div className="pt-2 border-t border-platinum-700">
                        <p className="text-sm font-medium text-platinum-300">Venue:</p>
                        <p className="text-xs text-platinum-400">Amphitheatre (15,000+ seats)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Dubai Production City */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className="glass-card h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-500/20 text-navy-400">
                        <Camera className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-platinum-200">Dubai Production City</CardTitle>
                        <p className="text-sm text-platinum-400">مدينة دبي للإنتاج</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Badge variant="outline" className="border-navy/50 text-navy">Est. 2003</Badge>
                        <Badge variant="outline" className="border-navy-500/50 text-navy-400">Production Hub</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 rounded-lg bg-platinum-800/50">
                          <div className="text-2xl font-bold text-navy-400">6,700+</div>
                          <div className="text-xs text-platinum-400">Professionals</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-platinum-800/50">
                          <div className="text-2xl font-bold text-navy-400">13%</div>
                          <div className="text-xs text-platinum-400">Growth</div>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-platinum-700">
                        <p className="text-sm font-medium text-platinum-300 mb-2">Sound Stages:</p>
                        <p className="text-xs text-platinum-400">11,000 - 50,000 sq.ft with water tanks, grids, elephant doors</p>
                      </div>
                      <div className="pt-2 border-t border-platinum-700">
                        <p className="text-sm font-medium text-platinum-300">Facilities:</p>
                        <p className="text-xs text-platinum-400">Boutique Studios, Light Industrial, Warehouses, Commercial Spaces</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Dubai Studio City */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className="glass-card h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <Play className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-platinum-200">Dubai Studio City</CardTitle>
                        <p className="text-sm text-platinum-400">دبي ستوديو سيتي</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Badge variant="outline" className="border-emerald/50 text-emerald">Film/TV Hub</Badge>
                        <Badge variant="outline" className="border-amber-500/50 text-amber-400">12% Growth</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 rounded-lg bg-platinum-800/50">
                          <div className="text-2xl font-bold text-emerald-400">2,800+</div>
                          <div className="text-xs text-platinum-400">Creative Talent</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-platinum-800/50">
                          <div className="text-2xl font-bold text-emerald-400">358K</div>
                          <div className="text-xs text-platinum-400">Min Content/Year</div>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-platinum-700">
                        <p className="text-sm font-medium text-platinum-300 mb-2">Landmark Productions:</p>
                        <p className="text-xs text-platinum-400">Star Trek Beyond, Mission Impossible: Ghost Protocol</p>
                      </div>
                      <div className="pt-2 border-t border-platinum-700">
                        <p className="text-sm font-medium text-platinum-300">Location:</p>
                        <p className="text-xs text-platinum-400">Near Sheikh Zayed Bin Hamdan Al Nahyan Street</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sound Stage Comparison */}
            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Sound Stage Facilities Comparison</CardTitle>
                <CardDescription>Production capabilities across Dubai free zones</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { name: 'DPC', size: 50000, color: CHART_COLORS.navy },
                    { name: 'DSC', size: 50000, color: CHART_COLORS.emerald },
                    { name: 'DMC', size: 11000, color: CHART_COLORS.gold },
                  ]}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'size', name: 'Max sq.ft', color: CHART_COLORS.gold },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Content Ratings Tab - Cycle C: Film, Game, Book ratings */}
        <TabsContent value="ratings" className="space-y-6">
          <GlassPanel title="UAE Content Classification System" description="Age-based content rating framework">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Film Ratings */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
                      <Film className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Film Ratings</CardTitle>
                      <CardDescription>Cinematic content classification</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { rating: 'G', desc: 'General admission - All ages', color: 'bg-emerald-500' },
                      { rating: 'PG', desc: 'Parental guidance suggested', color: 'bg-emerald-500' },
                      { rating: 'PG 13', desc: 'Under 13 requires supervision', color: 'bg-amber-500' },
                      { rating: 'PG 15', desc: 'Under 15 requires supervision', color: 'bg-orange-500' },
                      { rating: '15+', desc: 'Ages 15 and above', color: 'bg-orange-600' },
                      { rating: '18+', desc: 'Restricted to 18+', color: 'bg-red-500' },
                      { rating: '21+', desc: 'Uncensored international versions', color: 'bg-red-700' },
                    ].map((film, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-platinum-800/50">
                        <div className={`h-8 w-8 rounded-full ${film.color} flex items-center justify-center text-white font-bold text-sm`}>
                          {film.rating}
                        </div>
                        <span className="text-sm text-platinum-300">{film.desc}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-gold-500/10 border border-gold-500/20">
                    <p className="text-xs text-gold-400">
                      <span className="font-semibold">Censorship Reform:</span> December 19, 2021 - UAE stopped censoring films in cinemas
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Video Game Ratings */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">
                      <Gamepad2 className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Video Game Ratings</CardTitle>
                      <CardDescription>Gaming content classification</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {['3+', '7+', '12+', '16+', '18+', '21+'].map((rating, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-platinum-800/50">
                        <div className="h-8 w-12 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold text-sm">
                          {rating}
                        </div>
                        <span className="text-sm text-platinum-300">Ages {rating.replace('+', '+')} permitted</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Book Ratings */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Book Ratings</CardTitle>
                      <CardDescription>Publication content classification</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { rating: 'E', desc: 'Everyone' },
                      { rating: '3-5', desc: 'Early childhood' },
                      { rating: '6-9', desc: 'Children' },
                      { rating: '10-12', desc: 'Pre-teen' },
                      { rating: '13+', desc: 'Teen' },
                      { rating: '17+', desc: 'Young adult' },
                      { rating: '21+', desc: 'Adult' },
                    ].map((book, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-platinum-800/50">
                        <div className="h-8 w-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">
                          {book.rating}
                        </div>
                        <span className="text-sm text-platinum-300">{book.desc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* TV Ratings */}
            <Card className="glass-card mt-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                    <Tv className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Tview - UAE TV Ratings System</CardTitle>
                    <CardDescription>First television ratings system in UAE</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="text-center p-4 rounded-lg bg-platinum-800/50">
                    <div className="text-2xl font-bold text-cyan-400">Tview</div>
                    <div className="text-xs text-platinum-400 mt-1">System Name</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-platinum-800/50">
                    <div className="text-2xl font-bold text-cyan-400">Oct 2012</div>
                    <div className="text-xs text-platinum-400 mt-1">Launched</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-platinum-800/50">
                    <div className="text-2xl font-bold text-cyan-400">EMMC</div>
                    <div className="text-xs text-platinum-400 mt-1">Provider</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-platinum-800/50">
                    <div className="text-2xl font-bold text-cyan-400">Kantar</div>
                    <div className="text-xs text-platinum-400 mt-1">Quality Auditor</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Influencer Regulation Tab - Cycle D */}
        <TabsContent value="influencers" className="space-y-6">
          <GlassPanel title="Influencer Regulation Framework" description="Federal and Dubai influencer licensing requirements">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Federal Requirements */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-500/20 text-navy-400">
                      <Landmark className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Federal Regulation</CardTitle>
                      <p className="text-sm text-platinum-400">UAE Media Council - Federal Decree Law No. 55 of 2023</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                      <span className="text-sm text-platinum-300">Effective Date</span>
                      <Badge variant="outline" className="border-navy/50 text-navy">February 1, 2026</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                      <span className="text-sm text-platinum-300">Minimum Age</span>
                      <span className="text-lg font-bold text-gold-400">18 years</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                      <span className="text-sm text-platinum-300">Permit Cost</span>
                      <div className="text-right">
                        <span className="text-lg font-bold text-emerald-400">FREE</span>
                        <p className="text-xs text-platinum-400">3 years, then AED 1,000/year</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                      <span className="text-sm text-platinum-300">Permits Issued</span>
                      <span className="text-lg font-bold text-gold-400">1,800+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dubai Requirements */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                      <Building className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Dubai Requirements</CardTitle>
                      <p className="text-sm text-platinum-400">Dubai Media Council additional criteria</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                      <span className="text-sm text-platinum-300">Minimum Age</span>
                      <span className="text-lg font-bold text-gold-400">25 years</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                      <span className="text-sm text-platinum-300">UAE Residence</span>
                      <Badge variant="outline" className="border-gold/50 text-gold">Valid visa required</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                      <span className="text-sm text-platinum-300">Min Followers</span>
                      <span className="text-lg font-bold text-gold-400">1,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                      <span className="text-sm text-platinum-300">Min Engagement</span>
                      <span className="text-lg font-bold text-gold-400">2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* License Types & Costs */}
            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">License Types & Costs (Dubai)</CardTitle>
                <CardDescription>Fee structure for influencer licensing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="text-center p-4 rounded-lg bg-platinum-800/50 border border-platinum-700">
                    <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-gold-500/20 text-gold-400 mb-3">
                      <Users className="h-6 w-6" />
                    </div>
                    <div className="text-lg font-bold text-gold-400">AED 5K-10K</div>
                    <div className="text-sm text-platinum-400">Individual License</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-platinum-800/50 border border-platinum-700">
                    <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-navy-500/20 text-navy-400 mb-3">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="text-lg font-bold text-navy-400">AED 15K-30K</div>
                    <div className="text-sm text-platinum-400">Agency License</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-platinum-800/50 border border-platinum-700">
                    <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                      <Building className="h-6 w-6" />
                    </div>
                    <div className="text-lg font-bold text-emerald-400">AED 5K-15K</div>
                    <div className="text-sm text-platinum-400">Business License</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-platinum-800/50 border border-platinum-700">
                    <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-violet-500/20 text-violet-400 mb-3">
                      <Newspaper className="h-6 w-6" />
                    </div>
                    <div className="text-lg font-bold text-violet-400">AED 1,000</div>
                    <div className="text-sm text-platinum-400">Media License/year</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Penalty Structure */}
            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Penalty Structure</CardTitle>
                <CardDescription>Violations and fine ranges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-amber-400" />
                      <span className="font-semibold text-amber-400">Basic Violations</span>
                    </div>
                    <div className="text-2xl font-bold text-amber-400">AED 5K-10K</div>
                  </div>
                  <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-orange-400" />
                      <span className="font-semibold text-orange-400">Serious Violations</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-400">AED 25K-100K</div>
                  </div>
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                      <span className="font-semibold text-red-400">Most Serious</span>
                    </div>
                    <div className="text-2xl font-bold text-red-400">Up to AED 1M</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Media Economy Tab - Cycle E */}
        <TabsContent value="economy" className="space-y-6">
          <GlassPanel title="Dubai Media Economy KPIs" description="Strategic economic targets and current performance">
            <div className="space-y-6">
              {/* GDP Targets */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Media Sector GDP Contribution</CardTitle>
                  <CardDescription>Dubai Creative Economy Strategy targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3 mb-6">
                    <div className="text-center p-4 rounded-lg bg-platinum-800/50">
                      <div className="text-sm text-platinum-400 mb-1">Current (2026)</div>
                      <div className="text-4xl font-bold text-gold-400">1.4%</div>
                      <div className="text-xs text-platinum-500 mt-1">Media GDP</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-emerald-400 mx-2" />
                      <span className="text-lg text-emerald-400 font-semibold">+114%</span>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-platinum-800/50">
                      <div className="text-sm text-platinum-400 mb-1">Target (2033)</div>
                      <div className="text-4xl font-bold text-emerald-400">3%</div>
                      <div className="text-xs text-platinum-500 mt-1">Media GDP</div>
                    </div>
                  </div>
                  <Progress value={46.7} className="h-3" />
                  <p className="text-xs text-platinum-400 mt-2 text-center">46.7% progress toward target</p>
                </CardContent>
              </Card>

              {/* Creative Economy */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Creative Economy Targets (2025)</CardTitle>
                  <CardDescription>Dubai Creative Economy Strategy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-platinum-300">Creative Companies</span>
                        <span className="text-sm font-bold text-gold-400">8,300 → 15,000</span>
                      </div>
                      <Progress value={55.3} className="h-2" />
                      <div className="flex items-center gap-2 text-xs text-emerald-400">
                        <TrendingUp className="h-3 w-3" /> +80% growth
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-platinum-300">Creators</span>
                        <span className="text-sm font-bold text-gold-400">70,000 → 140,000</span>
                      </div>
                      <Progress value={50} className="h-2" />
                      <div className="flex items-center gap-2 text-xs text-emerald-400">
                        <TrendingUp className="h-3 w-3" /> +100% growth
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-8 w-8 text-emerald-400" />
                      <div>
                        <div className="text-lg font-bold text-emerald-400">AED 21.9 billion</div>
                        <div className="text-sm text-platinum-400">Current Creative Economy Value (~4.6% of GDP)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2024 Performance Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">2024 Economic Performance</CardTitle>
                  <CardDescription>Investment and job creation metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-platinum-800/50">
                      <div className="text-2xl font-bold text-gold-400">AED 18.86B</div>
                      <div className="text-xs text-platinum-400">FDI Inflows (Cultural/Creative)</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-platinum-800/50">
                      <div className="text-2xl font-bold text-emerald-400">23,517</div>
                      <div className="text-xs text-platinum-400">New Jobs Created</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-platinum-800/50">
                      <div className="text-2xl font-bold text-navy-400">971</div>
                      <div className="text-xs text-platinum-400">Projects Attracted</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-platinum-800/50">
                      <div className="text-2xl font-bold text-violet-400">175,000+</div>
                      <div className="text-xs text-platinum-400">Core Sector Jobs</div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              {/* Digital Media Revenue */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Digital Media Market</CardTitle>
                  <CardDescription>Revenue projections and growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="text-center p-6 rounded-lg bg-platinum-800/50">
                      <div className="text-sm text-platinum-400 mb-2">Current Market Size</div>
                      <div className="text-4xl font-bold text-gold-400">$11.6B</div>
                      <div className="text-sm text-platinum-400 mt-1">Digital Media Revenue (2026)</div>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <div className="text-sm text-emerald-400 mb-2">Projected Market Size</div>
                      <div className="text-4xl font-bold text-emerald-400">$18.5B</div>
                      <div className="text-sm text-platinum-400 mt-1">Expected Market Growth</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* in5 Startup Ecosystem */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">in5 Media Startup Ecosystem</CardTitle>
                  <CardDescription>Startup support and funding platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-platinum-800/50">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                        <Star className="h-7 w-7" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gold-400">1,100+</div>
                        <div className="text-sm text-platinum-400">Startups Nurtured Since 2013</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <DollarSign className="h-7 w-7" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-400">AED 9B+</div>
                        <div className="text-sm text-platinum-400">Funding Raised Since 2013</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Creators HQ Tab - Cycle F */}
        <TabsContent value="creators" className="space-y-6">
          <GlassPanel title="Creators HQ - UAE Creator Ecosystem" description="First dedicated creators hub in UAE and Middle East">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Creators HQ Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                      <UsersRound className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Creators HQ</CardTitle>
                      <p className="text-sm text-platinum-400">Jumeirah Emirates Towers, Dubai</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 rounded-lg bg-platinum-800/50">
                        <div className="text-2xl font-bold text-gold-400">10,000</div>
                        <div className="text-xs text-platinum-400">Target Influencers</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-platinum-800/50">
                        <div className="text-2xl font-bold text-emerald-400">AED 150M</div>
                        <div className="text-xs text-platinum-400">Support Fund</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-platinum-800/50">
                        <div className="text-2xl font-bold text-gold-400">100+</div>
                        <div className="text-xs text-platinum-400">Daily New Creators</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-platinum-800/50">
                        <div className="text-2xl font-bold text-navy-400">200+</div>
                        <div className="text-xs text-platinum-400">Annual Programs</div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-platinum-700">
                      <p className="text-sm font-medium text-platinum-300 mb-3">Key Partners:</p>
                      <div className="flex flex-wrap gap-2">
                        {['Meta', 'Space Train', 'X (Twitter)', 'New Media Academy', 'TubeFilter'].map((partner) => (
                          <Badge key={partner} variant="outline" className="border-gold/30 text-gold">{partner}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Membership Benefits */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Membership Benefits</CardTitle>
                  <CardDescription>Creator ecosystem advantages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {[
                      { icon: <Star className="h-4 w-4 text-gold" />, text: 'Golden Visa nomination and relocation services' },
                      { icon: <Mic className="h-4 w-4 text-emerald" />, text: 'Platform consultations with social media representatives' },
                      { icon: <Users className="h-4 w-4 text-navy" />, text: '1 Billion Followers Summit all-access pass' },
                      { icon: <Camera className="h-4 w-4 text-violet" />, text: 'Studio discounts on facilities and equipment' },
                      { icon: <BookOpen className="h-4 w-4 text-amber" />, text: 'Priority booking for limited-seats workshops' },
                      { icon: <UsersRound className="h-4 w-4 text-rose" />, text: 'Complimentary studios after 5PM access' },
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-platinum-800/30">
                        {benefit.icon}
                        <span className="text-sm text-platinum-300">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* UAE Benefits for Creators */}
            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">UAE Benefits for Content Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <DollarSign className="h-6 w-6 text-emerald-400" />
                    <span className="text-sm text-platinum-200">Tax-free Income</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gold-500/10 border border-gold-500/20">
                    <Globe className="h-6 w-6 text-gold-400" />
                    <span className="text-sm text-platinum-200">Strategic Global Location</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-navy-500/10 border border-navy-500/20">
                    <Award className="h-6 w-6 text-navy-400" />
                    <span className="text-sm text-platinum-200">Golden Visa Eligibility</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <TrendingUp className="h-6 w-6 text-violet-400" />
                    <span className="text-sm text-platinum-200">Booming Creative Industry</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <Shield className="h-6 w-6 text-amber-400" />
                    <span className="text-sm text-platinum-200">Supportive Government</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                    <Building className="h-6 w-6 text-rose-400" />
                    <span className="text-sm text-platinum-200">World-class Infrastructure</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 1 Billion Followers Summit */}
            <Card className="glass-card mt-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">1 Billion Followers Summit 2026</CardTitle>
                    <p className="text-sm text-platinum-400">Premier creator conference in Dubai</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="text-center p-4 rounded-lg bg-platinum-800/50">
                    <div className="text-sm text-platinum-400 mb-1">Dates</div>
                    <div className="text-lg font-bold text-gold-400">Jan 9-11, 2026</div>
                    <div className="text-xs text-platinum-500">Dubai, UAE</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-platinum-800/50">
                    <div className="text-sm text-platinum-400 mb-1">Expected Attendees</div>
                    <div className="text-lg font-bold text-emerald-400">30,000</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-platinum-800/50">
                    <div className="text-sm text-platinum-400 mb-1">Creators</div>
                    <div className="text-lg font-bold text-navy-400">15,000</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-platinum-800/50">
                    <div className="text-sm text-platinum-400 mb-1">Speakers</div>
                    <div className="text-lg font-bold text-violet-400">350+</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card className="glass-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Available Facilities</CardTitle>
                <CardDescription>Member-access creative infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    { name: 'Recording Studios', desc: 'Discounted for members' },
                    { name: 'Podcast Rooms', desc: 'Member access' },
                    { name: 'Co-working Spaces', desc: 'Member access' },
                    { name: 'Editing Suites', desc: 'Member access' },
                    { name: 'Auditorium', desc: 'Member access' },
                    { name: 'Premium Workspaces', desc: 'Member access' },
                  ].map((facility, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-platinum-800/30">
                      <div className="h-2 w-2 rounded-full bg-gold-400" />
                      <div>
                        <div className="text-sm font-medium text-platinum-200">{facility.name}</div>
                        <div className="text-xs text-platinum-400">{facility.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* PR Agencies Tab - Cycle A-F Enhanced */}
        <TabsContent value="pr-agencies" className="space-y-6">
          <GlassPanel title="PR Agencies & Communications Ecosystem" description="Professional PR infrastructure in UAE and Middle East">
            <div className="space-y-6">
              {/* PR Market Overview Metrics */}
              <div className="grid gap-6 lg:grid-cols-4">
                <motion.div
                  className="p-4 rounded-lg border border-gold-500/30 bg-gold-500/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="h-5 w-5 text-gold-400" />
                    <span className="text-sm text-platinum-400">Global PR Market</span>
                  </div>
                  <div className="text-2xl font-bold text-gold-400">$113B</div>
                  <div className="text-xs text-platinum-500">2025 market size</div>
                </motion.div>
                <motion.div
                  className="p-4 rounded-lg border border-navy-500/30 bg-navy-500/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="h-5 w-5 text-navy-400" />
                    <span className="text-sm text-platinum-400">Middle East</span>
                  </div>
                  <div className="text-2xl font-bold text-navy-400">$8.56B</div>
                  <div className="text-xs text-platinum-500">2026 market size</div>
                </motion.div>
                <motion.div
                  className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm text-platinum-400">Market CAGR</span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">4.68%</div>
                  <div className="text-xs text-platinum-500">Through 2031</div>
                </motion.div>
                <motion.div
                  className="p-4 rounded-lg border border-platinum-500/30 bg-platinum-500/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="h-5 w-5 text-platinum-400" />
                    <span className="text-sm text-platinum-400">2031 Forecast</span>
                  </div>
                  <div className="text-2xl font-bold text-platinum-400">$10.76B</div>
                  <div className="text-xs text-platinum-500">Projected market</div>
                </motion.div>
              </div>

              {/* Market Growth & AI Impact */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Middle East PR Market Growth</CardTitle>
                    <CardDescription>Market value progression in billions USD</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { name: '2025', value: 8.18, color: CHART_COLORS.navy },
                        { name: '2026', value: 8.56, color: CHART_COLORS.gold },
                        { name: '2031', value: 10.76, color: CHART_COLORS.emerald },
                      ]}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Market Value ($B)', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Bot className="h-5 w-5 text-gold-400" />
                      AI Impact on Response Rates
                    </CardTitle>
                    <CardDescription>Traditional vs AI-enhanced PR performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { name: 'Traditional', value: 10, color: CHART_COLORS.platinum },
                        { name: 'AI-Enhanced', value: 40, color: CHART_COLORS.gold },
                      ]}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Response Rate (%)', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="text-center p-3 rounded-lg bg-gold-500/10">
                        <div className="text-2xl font-bold text-gold-400">3-5x</div>
                        <div className="text-xs text-platinum-400">Placement Improvement</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-emerald-500/10">
                        <div className="text-2xl font-bold text-emerald-400">70%</div>
                        <div className="text-xs text-platinum-400">Faster Execution</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Influencer Marketing ROI */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-emerald-400" />
                    Influencer Marketing ROI
                  </CardTitle>
                  <CardDescription>Return per $1 spent by influencer tier</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: 'Micro', value: 5.5, color: CHART_COLORS.gold },
                      { name: 'Macro', value: 4, color: CHART_COLORS.navy },
                      { name: 'Average', value: 5.85, color: CHART_COLORS.emerald },
                      { name: 'Top', value: 18, color: CHART_COLORS.info },
                    ]}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'ROI ($)', color: CHART_COLORS.emerald },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg bg-platinum-500/10">
                      <div className="text-2xl font-bold text-platinum-400">$32.55B</div>
                      <div className="text-xs text-platinum-400">Global Market 2026</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-navy-500/10">
                      <div className="text-2xl font-bold text-navy-400">92%</div>
                      <div className="text-xs text-platinum-400">Consumer Trust</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* PR Tools & Databases */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-info" />
                    PR Tools & Media Databases
                  </CardTitle>
                  <CardDescription>Major platforms used by PR professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { name: 'Cision', desc: '1.4M+ contacts', tier: 'Tier 1', color: 'gold' },
                      { name: 'Vuelio', desc: '1.8M contacts', tier: 'Tier 2', color: 'navy' },
                      { name: 'Meltwater', desc: '380K+ journalists', tier: 'Tier 1', color: 'emerald' },
                      { name: 'Brandwatch', desc: '100M+ sources', tier: 'Tier 1', color: 'info' },
                    ].map((tool, idx) => (
                      <motion.div
                        key={idx}
                        className="p-4 rounded-lg border border-platinum-700 hover:border-gold/50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="font-medium text-platinum-200">{tool.name}</div>
                        <div className="text-sm text-platinum-400">{tool.desc}</div>
                        <Badge variant="outline" className={`mt-2 text-xs border-${tool.color}-500/50 text-${tool.color}-400`}>{tool.tier}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Industry Metrics */}
              <Card className="glass-card border-gold/30">
                <CardHeader>
                  <CardTitle className="text-lg">Key PR Industry Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { metric: 'Crisis Timeline', value: '24 min', sub: 'Compressed from 24hrs', alert: true },
                      { metric: 'Pitch Response', value: '3%', sub: 'Only 3% get replies', alert: true },
                      { metric: 'AI Detection', value: '12-48hr', sub: 'Earlier crisis detection', alert: false },
                      { metric: 'Measurement Budget', value: '2.9%', sub: 'vs Marketing 8%', alert: true },
                      { metric: 'Brand Awareness Focus', value: '73%', sub: 'PR pros prioritize', alert: false },
                      { metric: 'Revenue Focus', value: '55%', sub: 'PR pros driving sales', alert: false },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="p-3 rounded-lg bg-platinum-800/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.03 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-platinum-400">{item.metric}</span>
                          {item.alert && <AlertTriangle className="h-4 w-4 text-amber-400" />}
                        </div>
                        <div className="text-xl font-bold text-gold-400">{item.value}</div>
                        <div className="text-xs text-platinum-500">{item.sub}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Global Agencies */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Global PR Agencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { rank: 1, name: 'Edelman', type: 'Independent', special: 'Large/Influential' },
                      { rank: 2, name: 'Weber Shandwick', type: 'Interpublic Group', special: 'Global Powerhouse' },
                      { rank: 3, name: 'WPP', type: 'Public Holdings', special: 'Global Scale' },
                      { rank: 4, name: 'Publicis Groupe', type: 'Public Holdings', special: 'Data-Driven' },
                      { rank: 5, name: 'Dentsu', type: 'Public Holdings', special: 'APAC Coverage' },
                    ].map((agency, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg border border-platinum-700 hover:border-gold/30 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 font-bold">
                          {agency.rank}
                        </div>
                        <div>
                          <div className="font-medium text-platinum-200">{agency.name}</div>
                          <div className="text-xs text-platinum-400">{agency.type}</div>
                          <div className="text-xs text-emerald-400">{agency.special}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Regional Market Share */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Middle East Market Composition</CardTitle>
                  <CardDescription>Regional market dynamics and growth drivers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: 'Saudi Arabia Share', value: '36.63%', color: 'text-gold-400' },
                      { label: 'Qatar Growth (CAGR)', value: '5.83%', color: 'text-emerald-400' },
                      { label: 'Digital-Only Agencies', value: '41.72%', color: 'text-navy-400' },
                      { label: 'Large Enterprise', value: '58.63%', color: 'text-platinum-400' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="text-center p-4 rounded-lg bg-platinum-800/50"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                        <div className="text-sm text-platinum-400 mt-1">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Influencer Platform Performance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Performance Comparison</CardTitle>
                  <CardDescription>ROI and engagement by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-medium text-platinum-300 mb-3">Platform ROI ($ per $1)</h4>
                      <div className="space-y-2">
                        {[
                          { platform: 'Instagram', value: 4.12, percent: 68 },
                          { platform: 'TikTok', value: 7.50, percent: 100 },
                          { platform: 'YouTube', value: 6.20, percent: 83 },
                        ].map((p) => (
                          <div key={p.platform} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-platinum-400">{p.platform}</span>
                              <span className="text-emerald-400 font-medium">${p.value}</span>
                            </div>
                            <Progress value={p.percent} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-platinum-300 mb-3">Engagement Rates (%)</h4>
                      <div className="space-y-2">
                        {[
                          { platform: 'TikTok Nano', value: 10.3, percent: 100 },
                          { platform: 'TikTok Avg', value: 9.7, percent: 94 },
                          { platform: 'Instagram', value: 1.59, percent: 15 },
                        ].map((p) => (
                          <div key={p.platform} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-platinum-400">{p.platform}</span>
                              <span className="text-gold-400 font-medium">{p.value}%</span>
                            </div>
                            <Progress value={p.percent} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Crisis & Measurement */}
              <Card className="glass-card border-amber-500/30">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis & Measurement Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { icon: <AlertTriangle className="h-5 w-5 text-amber-400" />, title: 'Crisis Timeline', desc: '24 hours compressed to 24 minutes in digital sphere' },
                      { icon: <AlertCircle className="h-5 w-5 text-rose-400" />, title: 'Pitch Response', desc: 'Only 3% of pitches receive journalist replies' },
                      { icon: <TrendingDown className="h-5 w-5 text-platinum-400" />, title: 'Measurement Gap', desc: '2.9% budget vs marketing 8% for measurement' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="p-4 rounded-lg bg-platinum-800/50 border border-platinum-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {item.icon}
                          <span className="font-medium text-platinum-200">{item.title}</span>
                        </div>
                        <p className="text-sm text-platinum-400">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis" description="Detailed sentiment breakdown for media entities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Aggregate Sentiment</CardTitle>
                  <CardDescription>Overall sentiment distribution across media entities</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sentimentData}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Entity Sentiment Scores</CardTitle>
                  <CardDescription>Sentiment breakdown by media organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {[
                        { name: 'NAMA', positive: 35, negative: 45, neutral: 20 },
                        { name: 'NMC Dubai', positive: 55, negative: 25, neutral: 20 },
                        { name: 'WAM', positive: 48, negative: 32, neutral: 20 },
                        { name: 'MBC Group', positive: 52, negative: 28, neutral: 20 },
                        { name: 'Al Arabia', positive: 58, negative: 22, neutral: 20 },
                        { name: 'Sky News Arabi', positive: 45, negative: 35, neutral: 20 },
                      ].map((entity, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-200">{entity.name}</span>
                            <div className="flex items-center gap-4 text-xs">
                              <span className="text-emerald-400">+{entity.positive}%</span>
                              <span className="text-platinum-400">{entity.neutral}%</span>
                              <span className="text-rose-400">-{entity.negative}%</span>
                            </div>
                          </div>
                          <div className="flex h-2 overflow-hidden rounded-full bg-platinum-700">
                            <div
                              className="bg-emerald-500"
                              style={{ width: `${entity.positive}%` }}
                            />
                            <div
                              className="bg-platinum-500"
                              style={{ width: `${entity.neutral}%` }}
                            />
                            <div
                              className="bg-rose-500"
                              style={{ width: `${entity.negative}%` }}
                            />
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
