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
  Globe,
  Users,
  TrendingUp,
  MessageSquare,
  Eye,
  Plane,
  Star,
  IndianRupee,
  AlertTriangle,
  Shield,
  TrendingDown,
  DollarSign,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  useUrduHindiData,
  useMalayIndonesianData,
  usePersianData,
} from '@/lib/data-loader'

export default function AsianLanguagesPage() {
  const { data: urduHindiData } = useUrduHindiData()
  const { data: malayData } = useMalayIndonesianData()
  const { data: persianData } = usePersianData()

  // Combined Asian languages data
  const totalAsianVolume = 97600000 // Urdu/Hindi 67.8M + Malay/Indonesian 15.6M + Persian 14.2M

  // Asian languages breakdown
  const languageBreakdown = [
    { name: 'Hindi/Urdu', percentage: 47, volume: 45870000, color: CHART_COLORS.orange },
    { name: 'Malay/Indonesian', percentage: 17, volume: 16680000, color: CHART_COLORS.emerald },
    { name: 'Persian/Farsi', percentage: 15, volume: 14200000, color: CHART_COLORS.danger },
    { name: 'Tagalog', percentage: 13, volume: 12510000, color: CHART_COLORS.info },
    { name: 'Other Asian', percentage: 8, volume: 8340000, color: CHART_COLORS.platinum },
  ]

  // Sentiment by language
  const sentimentByLanguage = [
    { name: 'Hindi', sentiment: 62, trend: 'stable' },
    { name: 'Urdu', sentiment: 58, trend: 'declining' },
    { name: 'Malay', sentiment: 78, trend: 'rising' },
    { name: 'Indonesian', sentiment: 72, trend: 'rising' },
    { name: 'Tagalog', sentiment: 68, trend: 'stable' },
  ]

  // Hindi/Urdu terms
  const southAsianTerms = [
    { term: 'India UAE trade 2025', volume: 8500000, sentiment: 72, language: 'Hindi', category: 'Trade' },
    { term: 'Pakistan UAE relations', volume: 6200000, sentiment: 42, language: 'Urdu', category: 'Relations' },
    { term: 'Indian workers UAE visa', volume: 5800000, sentiment: 65, language: 'Hindi', category: 'Labor' },
    { term: 'UAE golden visa India', volume: 5400000, sentiment: 75, language: 'Hindi', category: 'Visa' },
    { term: 'Indian festivals UAE', volume: 4500000, sentiment: 82, language: 'Hindi', category: 'Culture' },
  ]

  // Malay/Indonesian terms
  const malayTerms = [
    { term: 'Malaysia UAE CEPA trade', volume: 3200000, sentiment: 82, language: 'Malay', category: 'Trade' },
    { term: 'Indonesia UAE CEPA talks', volume: 2900000, sentiment: 78, language: 'Indonesian', category: 'Trade' },
    { term: 'Indonesian workers UAE', volume: 2600000, sentiment: 62, language: 'Indonesian', category: 'Labor' },
    { term: 'Dubai Jakarta flights', volume: 2100000, sentiment: 76, language: 'Indonesian', category: 'Tourism' },
    { term: 'Malaysian tourism UAE', volume: 1900000, sentiment: 80, language: 'Malay', category: 'Tourism' },
  ]

  // Tagalog terms (Filipino)
  const tagalogTerms = [
    { term: 'OFW UAE news 2025', volume: 1800000, sentiment: 68, category: 'Labor' },
    { term: 'Dubai Filipino community', volume: 1500000, sentiment: 72, category: 'Community' },
    { term: 'Philippines UAE embassy', volume: 1200000, sentiment: 65, category: 'Services' },
    { term: 'UAE maid visa Philippines', volume: 980000, sentiment: 58, category: 'Labor' },
  ]

  // Community size estimates
  const communitySizes = [
    { community: 'Indian', population: 3400000, percentage: 34, sentiment: 68 },
    { community: 'Pakistani', population: 1200000, percentage: 12, sentiment: 52 },
    { community: 'Filipino', population: 700000, percentage: 7, sentiment: 68 },
    { community: 'Malaysian', population: 52000, percentage: 0.5, sentiment: 78 },
    { community: 'Indonesian', population: 25000, percentage: 0.25, sentiment: 72 },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-amber-400'
    return 'text-red-400'
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Trade': return <Badge variant="gold" className="text-xs">{category}</Badge>
      case 'Relations': return <Badge variant="denim" className="text-xs">{category}</Badge>
      case 'Labor': return <Badge variant="orange" className="text-xs">{category}</Badge>
      case 'Visa': return <Badge variant="default" className="text-xs">{category}</Badge>
      case 'Culture': return <Badge variant="emerald" className="text-xs">{category}</Badge>
      case 'Tourism': return <Badge variant="cyan" className="text-xs">{category}</Badge>
      case 'Community': return <Badge variant="fuchsia" className="text-xs">{category}</Badge>
      case 'Services': return <Badge variant="indigo" className="text-xs">{category}</Badge>
      default: return <Badge variant="outline" className="text-xs">{category}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="orange" className="mb-2">ASIAN LANGUAGES</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-orange">Asian Languages</h1>
          <p className="mt-2 text-platinum-400">
            South Asian and Southeast Asian language communities: Hindi, Urdu, Malay, Tagalog
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-orange/50 text-orange hover:bg-orange/10">
            <Eye className="h-4 w-4" />
            Monitor Communities
          </Button>
          <Button className="bg-gradient-orange hover:opacity-90 text-navy-950 gap-2">
            <Globe className="h-4 w-4" />
            Track Languages
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Asian Query Volume"
          value={(totalAsianVolume / 1000000).toFixed(0) + 'M'}
          previousValue={78}
          icon={<Globe className="h-6 w-6" />}
          gradient="orange"
          status="success"
        />
        <MetricCard
          title="South Asian Speakers"
          value="4.6M"
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Languages Tracked"
          value="6"
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Avg Sentiment"
          value="54"
          previousValue={64}
          icon={<Star className="h-6 w-6" />}
          gradient="indigo"
          status="warning"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="southasian">South Asian</TabsTrigger>
          <TabsTrigger value="southeast">Southeast Asian</TabsTrigger>
          <TabsTrigger value="persian">Persian</TabsTrigger>
          <TabsTrigger value="communities">Communities</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Asian Languages Overview" description="Multi-lingual intelligence from Asian communities">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Language Distribution</CardTitle>
                    <CardDescription>Asian language query share</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={languageBreakdown}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Volume by Language</CardTitle>
                    <CardDescription>Monthly query volume (millions)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={languageBreakdown}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.orange },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Community Overview</CardTitle>
                  <CardDescription>Asian expat population in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {communitySizes.map((community, index) => (
                      <div key={index} className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                        <div className="text-2xl font-bold text-orange-400">
                          {(community.population / 1000).toFixed(0)}K
                        </div>
                        <p className="text-sm text-platinum-400 mt-1">{community.community}</p>
                        <p className="text-xs text-platinum-500">{community.percentage}% of UAE</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* South Asian Tab */}
        <TabsContent value="southasian" className="space-y-6">
          <GlassPanel title="South Asian Languages" description="Hindi and Urdu speaking communities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Hindi & Urdu Search Terms</CardTitle>
                  <CardDescription>Top queries from South Asian communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {southAsianTerms.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange/20 text-orange">
                              <IndianRupee className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{item.term}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">{item.language}</Badge>
                                {getCategoryBadge(item.category)}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-platinum-200">
                                {(item.volume / 1000000).toFixed(1)}M
                              </div>
                              <p className="text-xs text-platinum-400">Volume</p>
                            </div>
                            <div className="text-center">
                              <div className={`text-lg font-bold ${getSentimentColor(item.sentiment)}`}>
                                {item.sentiment}%
                              </div>
                              <p className="text-xs text-platinum-400">Sentiment</p>
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
                  <CardTitle className="text-lg">Hindi vs Urdu Comparison</CardTitle>
                  <CardDescription>Language-specific metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-lg border border-orange-700/50 bg-orange-900/20 p-4">
                      <Badge variant="orange" className="mb-2">Hindi</Badge>
                      <div className="space-y-2 mt-3">
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Query Volume</span>
                          <span className="text-platinum-200">35M+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Speakers in UAE</span>
                          <span className="text-platinum-200">2.8M</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Avg Sentiment</span>
                          <span className="text-emerald-400">68%</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4">
                      <Badge variant="emerald" className="mb-2">Urdu</Badge>
                      <div className="space-y-2 mt-3">
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Query Volume</span>
                          <span className="text-platinum-200">32M+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Speakers in UAE</span>
                          <span className="text-platinum-200">1.2M</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Avg Sentiment</span>
                          <span className="text-amber-400">58%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Southeast Asian Tab */}
        <TabsContent value="southeast" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Southeast Asian Languages" description="Malay, Indonesian, and Tagalog communities">
              <div className="space-y-6">
                {/* Key Metrics for Malaysia-Indonesia */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                        <TrendingUp className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-platinum-400">Malaysia-UAE Trade 2024</p>
                        <p className="text-lg font-bold text-emerald-400">US$5.5B</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20">
                        <Globe className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-xs text-platinum-400">Indonesia-UAE Trade 2025</p>
                        <p className="text-lg font-bold text-orange-400">US$6.4B</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                        <Users className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-xs text-platinum-400">Indonesian Workers UAE</p>
                        <p className="text-lg font-bold text-cyan-400">77,000+</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20">
                        <Shield className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs text-platinum-400">Defense MoU</p>
                        <p className="text-lg font-bold text-amber-400">Dec 2025</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Malaysia CEPA Trade Table */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Badge variant="emerald" className="text-xs">MALAYSIA</Badge>
                      CEPA Trade Performance
                    </CardTitle>
                    <CardDescription>UAE-Malaysia comprehensive economic partnership</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="space-y-3">
                        {malayData?.extendedData?.kpiTables?.malaysiaUAETade?.slice(0, 4).map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center justify-between rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-3"
                          >
                            <span className="text-sm text-platinum-300">{item.metric}</span>
                            <div className="text-right">
                              <span className="text-lg font-bold text-emerald-400">{item.value}</span>
                              {item.yoyChange && item.yoyChange !== '—' && (
                                <span className="ml-2 text-xs text-emerald-300">({item.yoyChange})</span>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <div className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4">
                        <h4 className="text-sm font-semibold text-emerald-400 mb-3">Key CEPA Products</h4>
                        <div className="flex flex-wrap gap-2">
                          {['CPO', 'Chemicals', 'Plastics', 'Electronics', 'Jewellery', 'Petroleum', 'Rubber'].map((product) => (
                            <Badge key={product} variant="outline" className="text-xs border-emerald-500/50 text-emerald-300">
                              {product}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs text-platinum-400">6,331 tariff lines</span>
                          <span className="text-sm font-bold text-emerald-400">Duty-Free</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Indonesia CEPA Trade Table */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Badge variant="orange" className="text-xs">INDONESIA</Badge>
                      CEPA Trade Performance
                    </CardTitle>
                    <CardDescription>UAE-Indonesia bilateral trade (50th anniversary 2026)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="space-y-3">
                        {malayData?.extendedData?.kpiTables?.indonesiaUAETade?.slice(0, 4).map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center justify-between rounded-lg border border-orange-700/50 bg-orange-900/20 p-3"
                          >
                            <span className="text-sm text-platinum-300">{item.metric}</span>
                            <div className="text-right">
                              <span className="text-lg font-bold text-orange-400">{item.value}</span>
                              {item.yoyChange && item.yoyChange !== '—' && (
                                <span className="ml-2 text-xs text-orange-300">({item.yoyChange})</span>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <div className="rounded-lg border border-orange-700/50 bg-orange-900/20 p-4">
                        <h4 className="text-sm font-semibold text-orange-400 mb-3">CEPA Coverage</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Products covered</span>
                            <span className="text-lg font-bold text-orange-400">90%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Trade value covered</span>
                            <span className="text-lg font-bold text-orange-400">94%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Trade target</span>
                            <span className="text-lg font-bold text-orange-400">US$10B</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Defense Cooperation */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Badge variant="amber" className="text-xs">DEFENSE</Badge>
                      Malaysia-UAE Defense Cooperation
                    </CardTitle>
                    <CardDescription>Military partnership and exercises</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-4">
                      {malayData?.extendedData?.kpiTables?.defenseCooperation?.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="rounded-lg border border-amber-700/50 bg-amber-900/20 p-4"
                        >
                          <h4 className="text-xs text-platinum-400 mb-1">{item.metric}</h4>
                          <p className="text-lg font-bold text-amber-400">{item.value}</p>
                          <p className="text-xs text-platinum-500 mt-1">{item.date}</p>
                          <Badge variant={item.status === 'Active' ? 'emerald' : item.status === 'Completed' ? 'default' : 'orange'} className="mt-2 text-xs">
                            {item.status}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Migrant Worker Crisis - March 2026 */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Badge variant="destructive" className="text-xs">CRISIS</Badge>
                      March 2026 Middle East Conflict Impact
                    </CardTitle>
                    <CardDescription>Malaysian and Indonesian worker evacuation data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      {/* Malaysian Crisis */}
                      <div className="rounded-lg border border-red-700/50 bg-red-900/20 p-4">
                        <h4 className="text-sm font-semibold text-red-400 mb-3">Malaysian Workers Crisis</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Total in UAE</span>
                            <span className="text-lg font-bold text-red-400">8,500</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Registered</span>
                            <span className="text-sm text-platinum-200">5,900</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Unregistered</span>
                            <span className="text-sm text-red-300">2,600 (gap)</span>
                          </div>
                          <div className="mt-3 pt-3 border-t border-red-700/50">
                            <p className="text-xs text-platinum-400 mb-1">Evacuation Flight EK342</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-platinum-400">March 6 passengers</span>
                              <span className="text-lg font-bold text-red-400">222</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Indonesian Worker Abuse */}
                      <div className="rounded-lg border border-orange-700/50 bg-orange-900/20 p-4">
                        <h4 className="text-sm font-semibold text-orange-400 mb-3">Indonesian Worker Issues</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Total workers in UAE</span>
                            <span className="text-lg font-bold text-orange-400">77,000+</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Female domestic workers</span>
                            <span className="text-sm text-platinum-200">90%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Documented abuse cases</span>
                            <span className="text-sm text-red-300">25+ (HRW)</span>
                          </div>
                          <div className="mt-3 pt-3 border-t border-orange-700/50">
                            <p className="text-xs text-platinum-400 mb-1">Documented Case</p>
                            <p className="text-sm text-orange-300">Worker "I" - March 4, 2025</p>
                            <p className="text-xs text-platinum-500">Wage theft, torture, repatriated</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* UAE Investment in Indonesia */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Badge variant="cyan" className="text-xs">INVESTMENT</Badge>
                      UAE Investment in Indonesia
                    </CardTitle>
                    <CardDescription>Nusantara development and sectoral investment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-3">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="rounded-lg border border-cyan-700/50 bg-cyan-900/20 p-4"
                      >
                        <h4 className="text-xs text-platinum-400 mb-1">Total Investment Q3 2025</h4>
                        <p className="text-2xl font-bold text-cyan-400">US$88.14M</p>
                        <p className="text-xs text-platinum-500 mt-1">Cumulative</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-lg border border-cyan-700/50 bg-cyan-900/20 p-4"
                      >
                        <h4 className="text-xs text-platinum-400 mb-1">Nusantara Commitment</h4>
                        <p className="text-2xl font-bold text-cyan-400">US$238.4M</p>
                        <p className="text-xs text-platinum-500 mt-1">Mid-2027 construction</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4"
                      >
                        <h4 className="text-xs text-platinum-400 mb-1">Cirata Floating Solar</h4>
                        <p className="text-2xl font-bold text-emerald-400">192 MWp</p>
                        <p className="text-xs text-platinum-500 mt-1">World's largest - Masdar</p>
                      </motion.div>
                    </div>

                    {/* Investment Sectors */}
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-platinum-300 mb-3">Investment by Sector</h4>
                      <div className="flex flex-wrap gap-2">
                        {malayData?.extendedData?.kpiTables?.uaeInvestmentBySector?.map((sector) => (
                          <Badge
                            key={sector.sector}
                            variant={sector.priority === 'High' ? 'emerald' : sector.priority === 'Medium' ? 'orange' : 'outline'}
                            className="text-xs"
                          >
                            {sector.sector} ({sector.priority})
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Humanitarian & Education */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Badge variant="fuchsia" className="text-xs">HUMANITARIAN</Badge>
                      UAE-Indonesia Humanitarian Initiatives
                    </CardTitle>
                    <CardDescription>Education and religious diplomacy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-3">
                      {malayData?.extendedData?.kpiTables?.humanitarianEducation?.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="rounded-lg border border-fuchsia-700/50 bg-fuchsia-900/20 p-4"
                        >
                          <h4 className="text-sm font-semibold text-fuchsia-400 mb-2">{item.initiative}</h4>
                          <p className="text-2xl font-bold text-fuchsia-300">{item.amount}</p>
                          <p className="text-xs text-platinum-400 mt-1">Beneficiary: {item.beneficiary}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Diplomatic Timeline */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Diplomatic Timeline</CardTitle>
                    <CardDescription>Key Malaysia-UAE and Indonesia-UAE events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {malayData?.extendedData?.diplomaticTimeline?.map((event, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                            className="flex items-start gap-4 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald font-bold text-sm">
                              {event.year}
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-platinum-200">{event.event}</p>
                              {event.malaysianComponent && event.malaysianComponent !== '—' && (
                                <p className="text-xs text-emerald-400 mt-1">MY: {event.malaysianComponent}</p>
                              )}
                              {event.indonesianComponent && event.indonesianComponent !== '—' && (
                                <p className="text-xs text-orange-400 mt-1">ID: {event.indonesianComponent}</p>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Top Search Terms */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Malay/Indonesian Top Searches</CardTitle>
                    <CardDescription>ASEAN community queries from data loader</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-3">
                        {malayData?.topSearchTerms?.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                            className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                                <Plane className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-platinum-200">{item.term}</p>
                                <Badge
                                  variant={item.sentiment === 'positive' ? 'emerald' : item.sentiment === 'negative' ? 'destructive' : 'outline'}
                                  className="text-xs mt-1"
                                >
                                  {item.sentiment}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="text-center">
                                <div className="text-lg font-bold text-platinum-200">
                                  {(item.volume / 1000000).toFixed(1)}M
                                </div>
                                <p className="text-xs text-platinum-400">Volume</p>
                              </div>
                              <Badge
                                variant={item.trend === 'rising' ? 'emerald' : item.trend === 'declining' ? 'destructive' : 'outline'}
                                className="text-xs"
                              >
                                {item.trend}
                              </Badge>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Tagalog Searches */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Tagalog (Filipino) Searches</CardTitle>
                    <CardDescription>Philippines community queries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tagalogTerms.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/20 text-cyan">
                              <Users className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{item.term}</p>
                              {getCategoryBadge(item.category)}
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-platinum-200">
                                {(item.volume / 1000000).toFixed(1)}M
                              </div>
                              <p className="text-xs text-platinum-400">Volume</p>
                            </div>
                            <div className="text-center">
                              <div className={`text-lg font-bold ${getSentimentColor(item.sentiment)}`}>
                                {item.sentiment}%
                              </div>
                              <p className="text-xs text-platinum-400">Sentiment</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Risk Indicators */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-400" />
                      Risk Indicators
                    </CardTitle>
                    <CardDescription>Key risks in Malaysia-Indonesia UAE relations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {malayData?.extendedData?.riskIndicators?.map((risk, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <Badge
                              variant={risk.level === 'Critical' ? 'destructive' : risk.level === 'High' ? 'orange' : 'outline'}
                              className="text-xs"
                            >
                              {risk.level}
                            </Badge>
                            <span className="text-sm text-platinum-300">{risk.risk}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge
                              variant={risk.trend === 'Positive' ? 'emerald' : risk.trend === 'Resolved' ? 'default' : 'orange'}
                              className="text-xs"
                            >
                              {risk.trend}
                            </Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Persian Tab */}
        <TabsContent value="persian" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel title="Persian / Farsi Intelligence" description="Iranian media coverage and Persian language analysis of UAE">
              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-lg border border-red-500/30 bg-red-500/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                        <Globe className="h-5 w-5 text-red-400" />
                      </div>
                      <div>
                        <p className="text-xs text-platinum-400">Diplomatic Status</p>
                        <p className="text-lg font-bold text-red-400">SEVERED</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20">
                        <TrendingUp className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs text-platinum-400">Trade Volume</p>
                        <p className="text-lg font-bold text-amber-400">$27B</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20">
                        <Users className="h-5 w-5 text-rose-400" />
                      </div>
                      <div>
                        <p className="text-xs text-platinum-400">Iranians in UAE</p>
                        <p className="text-lg font-bold text-rose-400">500K-900K</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20">
                        <Star className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-xs text-platinum-400">Sentiment</p>
                        <p className="text-lg font-bold text-orange-400">12%</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* War Impact Section */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Badge variant="destructive" className="text-xs">CRITICAL</Badge>
                      2026 Iran-UAE War Impact
                    </CardTitle>
                    <CardDescription>Military statistics and infrastructure damage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-3">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <h4 className="text-sm font-semibold text-platinum-300 mb-3">Attack Duration</h4>
                        <p className="text-2xl font-bold text-red-400">Feb 28 - Apr 8, 2026</p>
                        <p className="text-xs text-platinum-400 mt-1">40 days of conflict</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <h4 className="text-sm font-semibold text-platinum-300 mb-3">Casualties</h4>
                        <div className="flex gap-4">
                          <div>
                            <p className="text-2xl font-bold text-red-400">13</p>
                            <p className="text-xs text-platinum-400">Killed</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-amber-400">224</p>
                            <p className="text-xs text-platinum-400">Injured</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <h4 className="text-sm font-semibold text-platinum-300 mb-3">Defense Cost</h4>
                        <p className="text-2xl font-bold text-orange-400">~$1B</p>
                        <p className="text-xs text-platinum-400">Per day shooting down missiles</p>
                      </motion.div>
                    </div>

                    {/* Interception Stats */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-platinum-300 mb-3">Missiles & Drones Intercepted</h4>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="rounded-lg border border-red-700/50 bg-red-900/20 p-3"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Ballistic Missiles</span>
                            <span className="text-xl font-bold text-red-400">537</span>
                          </div>
                          <Progress value={100} className="mt-2 h-1" />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="rounded-lg border border-amber-700/50 bg-amber-900/20 p-3"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Drones</span>
                            <span className="text-xl font-bold text-amber-400">2,256</span>
                          </div>
                          <Progress value={100} className="mt-2 h-1" />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="rounded-lg border border-orange-700/50 bg-orange-900/20 p-3"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Cruise Missiles</span>
                            <span className="text-xl font-bold text-orange-400">26</span>
                          </div>
                          <Progress value={100} className="mt-2 h-1" />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Three Islands Dispute */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Badge variant="orange" className="text-xs">DISPUTED</Badge>
                      Three Islands: Abu Musa, Greater Tunb, Lesser Tunb
                    </CardTitle>
                    <CardDescription>Territorial dispute since November 1971</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 lg:grid-cols-3">
                        <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                          <h4 className="text-sm font-semibold text-emerald-400 mb-2">Abu Musa</h4>
                          <div className="space-y-1 text-xs text-platinum-400">
                            <p>Area: 12.8 km²</p>
                            <p>Population: 2,131 (2012)</p>
                            <p>Distance to Iran: 70 km</p>
                            <p>Distance to Sharjah: 59 km</p>
                          </div>
                        </div>
                        <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                          <h4 className="text-sm font-semibold text-emerald-400 mb-2">Greater Tunb</h4>
                          <div className="space-y-1 text-xs text-platinum-400">
                            <p>Population (1971): ~150</p>
                            <p>Distance to Iran: 17 miles from Qeshm</p>
                            <p>Distance to UAE: 46 miles</p>
                          </div>
                        </div>
                        <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                          <h4 className="text-sm font-semibold text-emerald-400 mb-2">Lesser Tunb</h4>
                          <div className="space-y-1 text-xs text-platinum-400">
                            <p>Population (1971): Uninhabited</p>
                            <p>Status: Under Iranian control</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 rounded-lg border border-amber-700/50 bg-amber-900/20 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-platinum-300">Financial Arrangement (Abu Musa)</span>
                          <span className="text-sm font-bold text-amber-400">£1.5M/year + £125K/month</span>
                        </div>
                        <p className="text-xs text-platinum-400 mt-1">Paid to Sharjah by Iran since April 21, 1972</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Bilateral Trade */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Iran-UAE Bilateral Trade</CardTitle>
                    <CardDescription>Economic relationship metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-400">Trade Volume (Current)</span>
                          <span className="text-lg font-bold text-emerald-400">$27B</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-400">Iran Imports from UAE</span>
                          <span className="text-lg font-bold text-amber-400">$20.8B</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-400">Iran Exports to UAE</span>
                          <span className="text-lg font-bold text-orange-400">$6.6B</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-400">UAE Ranking for Iran</span>
                          <Badge variant="emerald">#2 after China</Badge>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-400">Share of Iran's Purchases</span>
                          <span className="text-lg font-bold text-amber-400">~30%</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-400">Gray Market Imports</span>
                          <span className="text-lg font-bold text-orange-400">$20-25B</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Iranian Community */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Iranian Community in UAE</CardTitle>
                    <CardDescription>Demographics and presence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-400">Total Population</span>
                          <span className="text-lg font-bold text-rose-400">500K-900K</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-400">In Dubai</span>
                          <span className="text-lg font-bold text-amber-400">~800,000</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-400">Companies Managed</span>
                          <span className="text-lg font-bold text-emerald-400">~10,000</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-400">Assets (2019)</span>
                          <span className="text-lg font-bold text-amber-400">~$300B</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-400">Students in UAE</span>
                          <span className="text-lg font-bold text-orange-400">~10,000</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-400">Iranian Schools</span>
                          <span className="text-lg font-bold text-emerald-400">7 complexes</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                      <p className="text-xs text-platinum-400">
                        <span className="font-semibold text-platinum-300">Origin:</span> Most Iranians came from southern provinces (Hormozgan, Fars, Bushehr), particularly the Larestan and Lamerd regions, beginning about a century ago.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Sentiment Analysis */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment by Topic</CardTitle>
                    <CardDescription>Persian media sentiment analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { topic: '2026 War', sentiment: -0.95, label: 'Extremely Negative', color: 'text-red-400' },
                        { topic: 'Three Islands Dispute', sentiment: -0.8, label: 'Negative', color: 'text-red-400' },
                        { topic: 'Iran-UAE Relations', sentiment: -0.7, label: 'Negative', color: 'text-orange-400' },
                        { topic: 'UAE Foreign Policy (post-war)', sentiment: -0.3, label: 'Cautious', color: 'text-amber-400' },
                        { topic: 'Iranian Community', sentiment: 0.2, label: 'Neutral', color: 'text-platinum-400' },
                        { topic: 'Economic/Trade Ties', sentiment: 0.1, label: 'Mixed', color: 'text-amber-400' },
                        { topic: 'Persian Gulf Naming', sentiment: 0.6, label: 'Positive', color: 'text-emerald-400' },
                      ].map((item, index) => (
                        <motion.div
                          key={item.topic}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <span className="text-sm text-platinum-300">{item.topic}</span>
                          <div className="flex items-center gap-2">
                            <Progress
                              value={Math.abs(item.sentiment) * 100}
                              className="h-2 w-20"
                            />
                            <span className={`text-sm font-bold ${item.color} w-28 text-right`}>
                              {item.label}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Communities Tab */}
        <TabsContent value="communities" className="space-y-6">
          <GlassPanel title="Asian Communities" description="Population and sentiment by community">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Community Population</CardTitle>
                  <CardDescription>Asian expat population in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={communitySizes}
                    xAxisKey="community"
                    bars={[
                      { dataKey: 'population', name: 'Population', color: CHART_COLORS.orange },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Community Details</CardTitle>
                  <CardDescription>Population and sentiment metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {communitySizes.map((community, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-platinum-200">{community.community}</span>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-platinum-400">
                              {community.population.toLocaleString()} ({community.percentage}%)
                            </span>
                            <span className={`font-bold ${getSentimentColor(community.sentiment)}`}>
                              {community.sentiment}%
                            </span>
                          </div>
                        </div>
                        <Progress value={community.sentiment} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment by Language" description="Community sentiment across Asian languages">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Language Sentiment Comparison</CardTitle>
                  <CardDescription>Sentiment scores by Asian language</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sentimentByLanguage}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'sentiment', name: 'Sentiment Score', color: CHART_COLORS.emerald },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Trend - 12 Months</CardTitle>
                  <CardDescription>Asian community sentiment over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={[
                      { month: 'Jan', sentiment: 62 },
                      { month: 'Feb', sentiment: 64 },
                      { month: 'Mar', sentiment: 65 },
                      { month: 'Apr', sentiment: 63 },
                      { month: 'May', sentiment: 66 },
                      { month: 'Jun', sentiment: 64 },
                      { month: 'Jul', sentiment: 65 },
                      { month: 'Aug', sentiment: 67 },
                      { month: 'Sep', sentiment: 65 },
                      { month: 'Oct', sentiment: 66 },
                      { month: 'Nov', sentiment: 65 },
                      { month: 'Dec', sentiment: 66 },
                    ]}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'sentiment', name: 'Avg Sentiment', color: CHART_COLORS.orange },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Sentiment Drivers</CardTitle>
                  <CardDescription>Factors affecting community sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4">
                      <Badge variant="emerald" className="mb-2">Positive Drivers</Badge>
                      <ul className="text-sm text-platinum-300 space-y-1 mt-2">
                        <li>- UAE-India CEPA implementation</li>
                        <li>- Golden visa expansion</li>
                        <li>- Tourism recovery</li>
                        <li>- Trade growth</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-red-700/50 bg-red-900/20 p-4">
                      <Badge variant="destructive" className="mb-2">Negative Drivers</Badge>
                      <ul className="text-sm text-platinum-300 space-y-1 mt-2">
                        <li>- Labor disputes</li>
                        <li>- Pakistan-UAE tensions</li>
                        <li>- Remittance challenges</li>
                        <li>- Worker rights concerns</li>
                      </ul>
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
