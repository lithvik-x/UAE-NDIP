'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertTriangle,
  Ban,
  Bot,
  Building2,
  ChevronRight,
  Eye,
  FileText,
  Filter,
  Globe,
  LineChart,
  Lock,
  Newspaper,
  Radio,
  Shield,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Wifi,
  WifiOff,
  EyeOff,
  FileSearch,
} from 'lucide-react'

// Data imports
import {
  mediaOutlets,
  regulatoryFramework,
  legalFramework,
  censorshipMechanisms,
  botNetworks,
  disInfluencerEcosystem,
  iranUaeWarCaseStudy,
  suppressionCaseStudies,
  sourceComparisons,
  internationalRankings,
  keyStatistics,
  sentimentAnalysis,
  suppressedTopics,
  synthesizedFindings,
  dashboardMetrics,
} from '@/lib/data/perception/media-bias-data'

export default function MediaBiasPage() {
  const [selectedOutlet, setSelectedOutlet] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

  // Chart data
  const pressFreedomData = [
    { name: 'RSF Ranking', value: 164, max: 180 },
    { name: 'Score', value: 30, max: 100 },
  ]

  const censorshipTypesData = [
    { name: 'Website Blocking', value: 3766, color: CHART_COLORS.rose },
    { name: 'VoIP Services', value: 5, color: CHART_COLORS.orange },
    { name: 'Social Media Accounts', value: 271, color: CHART_COLORS.purple },
    { name: 'Content Requests', value: 148, color: CHART_COLORS.denim },
  ]

  const botActivityData = [
    { name: '2019 Yemen Propaganda', value: 4258 },
    { name: '2020 COVID Propaganda', value: 9000 },
    { name: 'MBZ Fake Followers', value: 91, suffix: '%' },
  ]

  const sentimentData = [
    { name: 'Negative', value: 65, color: CHART_COLORS.rose },
    { name: 'Neutral', value: 20, color: CHART_COLORS.platinum },
    { name: 'Positive (Official)', value: 15, color: CHART_COLORS.emerald },
  ]

  const penaltiesData = [
    { violation: 'Basic Rumors', imprisonment: 1, fine: 100 },
    { violation: 'Aggravated Rumors', imprisonment: 2, fine: 200 },
    { violation: 'Qatar Sympathy', imprisonment: 15, fine: 500 },
    { violation: 'Illegal VPN', imprisonment: 3, fine: 2000 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-indigo">Media Bias & Agenda Setting</h1>
          <p className="mt-2 text-slate-600">
            Comprehensive analysis of UAE media control, censorship mechanisms, and narrative manipulation
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter Sources
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <Newspaper className="h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="RSF Press Freedom"
          value="164th"
          previousValue={163}
          icon={<Globe className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Internet Freedom"
          value="30/100"
          previousValue={28}
          icon={<Shield className="h-6 w-6" />}
          gradient="orange"
        />
        <MetricCard
          title="Websites Blocked"
          value="3,766"
          previousValue={3450}
          icon={<Ban className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Bot Accounts Removed"
          value="13,258+"
          previousValue={8500}
          icon={<Bot className="h-6 w-6" />}
          gradient="denim"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="glass-panel">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="outlets">Media Outlets</TabsTrigger>
          <TabsTrigger value="censorship">Censorship</TabsTrigger>
          <TabsTrigger value="bots">Bot Networks</TabsTrigger>
          <TabsTrigger value="case-study">2026 War</TabsTrigger>
          <TabsTrigger value="suppression">Suppression Cases</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Press Freedom & Internet Freedom */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Freedom Rankings</CardTitle>
                <CardDescription>International assessments of UAE media freedom</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">RSF Press Freedom Index 2024</span>
                      <span className="text-sm text-rose-600 font-bold">164th / 180</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-rose-500 to-rose-600"
                        initial={{ width: 0 }}
                        animate={{ width: '91%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Worst 10% globally</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Freedom House - Internet Freedom</span>
                      <span className="text-sm text-rose-600 font-bold">30/100</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
                        initial={{ width: 0 }}
                        animate={{ width: '30%' }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">"Not Free" rating</p>
                  </div>
                </div>
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-lg">
                  <p className="text-sm text-rose-800">
                    "{internationalRankings.rsfAssessment}"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sentiment Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sentiment Analysis</CardTitle>
                <CardDescription>Media sentiment by source type</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={sentimentData}
                  height={220}
                  showLegend={true}
                  donut={true}
                />
              </CardContent>
            </Card>
          </div>

          {/* Key Findings */}
          <GlassPanel title="Key Findings" description="Synthesized findings from comprehensive media bias research">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {synthesizedFindings.slice(0, 6).map((finding, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold text-slate-900 mb-2">{finding.finding}</h4>
                  <p className="text-xs text-slate-600 line-clamp-3">{finding.description}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Statistics Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="glass-card border-rose-200">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-extrabold text-rose-600">85.5%</div>
                <div className="text-sm text-slate-600 mt-1">VPN Adoption Rate</div>
                <div className="text-xs text-slate-500 mt-1">World's Highest</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-amber-200">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-extrabold text-amber-600">375+</div>
                <div className="text-sm text-slate-600 mt-1">Arrested (2026)</div>
                <div className="text-xs text-slate-500 mt-1">For sharing strike footage</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-purple-200">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-extrabold text-purple-600">91%</div>
                <div className="text-sm text-slate-600 mt-1">MBZ Twitter Followers</div>
                <div className="text-xs text-slate-500 mt-1">Estimated Fake</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-indigo-200">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-extrabold text-indigo-600">~6</div>
                <div className="text-sm text-slate-600 mt-1">Years Al Jazeera Blocked</div>
                <div className="text-xs text-slate-500 mt-1">2017-2023</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Media Outlets Tab */}
        <TabsContent value="outlets" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {mediaOutlets.map((outlet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedOutlet === outlet.name ? 'ring-2 ring-indigo-500' : ''
                  }`}
                  onClick={() => setSelectedOutlet(selectedOutlet === outlet.name ? null : outlet.name)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                          outlet.credibility.includes('Low') || outlet.credibility.includes('Government')
                            ? 'bg-gradient-rose text-white'
                            : 'bg-gradient-emerald text-white'
                        }`}>
                          <Newspaper className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{outlet.name}</CardTitle>
                          <CardDescription>{outlet.location}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={outlet.credibility.includes('Low') ? 'destructive' : 'success'}>
                        {outlet.biasRating}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-500">Owner:</span>
                        <p className="font-medium text-slate-900">{outlet.owner}</p>
                      </div>
                      <div>
                        <span className="text-slate-500">Credibility:</span>
                        <p className="font-medium text-slate-900">{outlet.credibility}</p>
                      </div>
                    </div>
                    <AnimatePresence>
                      {selectedOutlet === outlet.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="space-y-3 pt-3 border-t"
                        >
                          <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Concerns</h4>
                            <div className="flex flex-wrap gap-2">
                              {outlet.keyConcerns.map((concern, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{concern}</Badge>
                              ))}
                            </div>
                          </div>
                          {outlet.coverageTraits && (
                            <div>
                              <h4 className="text-sm font-semibold text-slate-900 mb-2">Coverage Traits</h4>
                              <ul className="text-sm text-slate-600 space-y-1">
                                {outlet.coverageTraits.map((trait, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <ChevronRight className="h-4 w-4 shrink-0 mt-0.5" />
                                    {trait}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {outlet.censorshipExamples && (
                            <div>
                              <h4 className="text-sm font-semibold text-rose-700 mb-2">Censorship Examples</h4>
                              <ul className="text-sm text-slate-600 space-y-1">
                                {outlet.censorshipExamples.map((example, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-rose-500" />
                                    {example}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Censorship Tab */}
        <TabsContent value="censorship" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Website Blocking */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Ban className="h-5 w-5 text-rose-500" />
                  Website Blocking
                </CardTitle>
                <CardDescription> TRA blocked websites in UAE</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={censorshipTypesData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'value', name: 'Count', color: CHART_COLORS.rose }]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* VoIP Blocking */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <WifiOff className="h-5 w-5 text-amber-500" />
                  VoIP Services Blocked
                </CardTitle>
                <CardDescription>Communication services unavailable in UAE</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {censorshipMechanisms.voipBlocking.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <WifiOff className="h-4 w-4 text-amber-600" />
                        </div>
                        <span className="font-medium text-slate-900">{item.service}</span>
                      </div>
                      <div className="text-right">
                        <Badge variant="destructive">{item.status}</Badge>
                        <p className="text-xs text-slate-500 mt-1">Since {item.since}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Legal Framework */}
          <GlassPanel title="Legal Framework for Media Control" description="Laws enabling government control over media">
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {legalFramework.laws.map((law, index) => (
                <Card key={index} className="border-l-4 border-l-rose-400">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">{law.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {law.purpose && (
                      <p className="text-xs text-slate-600">{law.purpose}</p>
                    )}
                    {law.keyProhibitions && (
                      <p className="text-xs text-rose-600 font-medium">"{law.keyProhibitions}"</p>
                    )}
                    {law.imprisonment && (
                      <div className="flex gap-4 text-xs">
                        <span className="text-slate-500">Prison:</span>
                        <span className="font-medium text-slate-900">{law.imprisonment}</span>
                        {law.fines && (
                          <>
                            <span className="text-slate-500">Fine:</span>
                            <span className="font-medium text-slate-900">{law.fines}</span>
                          </>
                        )}
                      </div>
                    )}
                    {law.application && (
                      <Badge variant="outline" className="text-xs">{law.application}</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* Penalties Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Penalties Summary</CardTitle>
              <CardDescription>Imprisonment and fines for media violations</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={penaltiesData}
                xAxisKey="violation"
                bars={[
                  { dataKey: 'imprisonment', name: 'Years Prison', color: CHART_COLORS.rose },
                  { dataKey: 'fine', name: 'Fine (AED 1000s)', color: CHART_COLORS.orange },
                ]}
                height={250}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Bot Networks Tab */}
        <TabsContent value="bots" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Bot Account Removals */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bot className="h-5 w-5 text-purple-500" />
                  Twitter Bot Account Removals
                </CardTitle>
                <CardDescription>UAE-linked fake accounts removed by Twitter</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={botActivityData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'value', name: 'Accounts', color: CHART_COLORS.purple }]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Bot Network Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bot Network Operation</CardTitle>
                <CardDescription>How coordinated manipulation works</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-purple-600" />
                      <span className="font-semibold text-purple-900">Oversight</span>
                    </div>
                    <p className="text-sm text-purple-800">{botNetworks.botNetworkOperationStructure.oversight}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="h-4 w-4 text-slate-600" />
                      <span className="font-semibold text-slate-900">Account Characteristics</span>
                    </div>
                    <p className="text-sm text-slate-700">{botNetworks.botNetworkOperationStructure.accountCharacteristics}</p>
                  </div>
                  <div className="p-4 bg-rose-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-rose-600" />
                      <span className="font-semibold text-rose-900">Purpose</span>
                    </div>
                    <p className="text-sm text-rose-800">{botNetworks.botNetworkOperationStructure.purpose}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dis-Influencer Ecosystem */}
          <GlassPanel title="Dis-Influencer Ecosystem" description="Fake news websites and coordinated influence operations">
            <div className="space-y-6">
              {/* 2024 Fake News Sites */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Fake News Websites (Oct-Nov 2024)</h4>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {disInfluencerEcosystem.fakeNewsWebsites2024.map((site, index) => (
                    <div key={index} className="p-3 bg-rose-50 border border-rose-200 rounded-lg">
                      <p className="font-medium text-slate-900 text-sm">{site.website}</p>
                      <p className="text-xs text-slate-500 mt-1">{site.registrationPeriod}</p>
                      <Badge variant="destructive" className="mt-2 text-xs">{site.nature}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <div className="grid gap-4 lg:grid-cols-2">
                <Card className="border-l-4 border-l-purple-400">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Studio Evidence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{disInfluencerEcosystem.characteristics.studioEvidence}</p>
                    <p className="text-sm text-slate-700 mt-2 font-medium">Distinctive Set: {disInfluencerEcosystem.characteristics.distinctiveSet}</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-amber-400">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Central Narratives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {disInfluencerEcosystem.characteristics.centralNarratives.map((narrative, index) => (
                        <Badge key={index} variant="outline">{narrative}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Expert Source */}
              <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <p className="text-sm text-indigo-800">
                  <span className="font-semibold">Expert Source:</span> {disInfluencerEcosystem.characteristics.expertSource}
                </p>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* 2026 War Case Study Tab */}
        <TabsContent value="case-study" className="space-y-6">
          {/* Timeline */}
          <GlassPanel title="2026 Iran-UAE War: Timeline" description="Iranian strikes on UAE territory">
            <ScrollArea className="h-96">
              <div className="space-y-4 pr-4">
                {iranUaeWarCaseStudy.timeline.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200"
                  >
                    <div className="h-8 w-8 rounded-full bg-gradient-indigo text-white flex items-center justify-center shrink-0 text-xs font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{event.date}</p>
                      <p className="text-sm text-slate-600 mt-1">{event.incident}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>

          {/* Casualties and Defense */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-rose-500" />
                  Casualties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-rose-50 rounded-lg text-center">
                    <div className="text-3xl font-extrabold text-rose-600">{iranUaeWarCaseStudy.casualties.totalKilled}</div>
                    <div className="text-sm text-slate-600">Killed</div>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg text-center">
                    <div className="text-3xl font-extrabold text-amber-600">{iranUaeWarCaseStudy.casualties.totalInjured}</div>
                    <div className="text-sm text-slate-600">Injured</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">By Nationality (Killed)</h4>
                  <div className="space-y-2">
                    {iranUaeWarCaseStudy.casualties.killedByNationality.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">{item.nationality}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-rose-500"
                              style={{ width: `${(item.count / 4) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-slate-900 w-6">{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-indigo-500" />
                  Defense Interceptions (Apr 9)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Ballistic Missiles', value: iranUaeWarCaseStudy.defenseInterceptionStats[0].ballisticMissiles },
                    { name: 'Drones', value: iranUaeWarCaseStudy.defenseInterceptionStats[0].drones },
                    { name: 'Cruise Missiles', value: iranUaeWarCaseStudy.defenseInterceptionStats[0].cruiseMissiles },
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-indigo-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-indigo-900">{item.name}</span>
                        <span className="text-2xl font-extrabold text-indigo-600">{item.value?.toLocaleString() ?? 0}</span>
                      </div>
                      <div className="h-2 bg-indigo-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Official Narrative vs Reality */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Official Narrative vs Observed Reality</CardTitle>
              <CardDescription>Bellingcat investigation findings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {iranUaeWarCaseStudy.officialNarrativeVsReality.map((item, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <TrendingUp className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900">{item.location}</p>
                        <div className="mt-2 p-3 bg-emerald-50 rounded border-l-4 border-l-emerald-400">
                          <p className="text-xs text-emerald-700"><span className="font-medium">Official:</span> {item.officialClaim}</p>
                        </div>
                        <div className="mt-2 p-3 bg-rose-50 rounded border-l-4 border-l-rose-400">
                          <p className="text-xs text-rose-700"><span className="font-medium">Reality:</span> {item.observedReality}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Media Crackdown */}
          <Card className="border-rose-200">
            <CardHeader>
              <CardTitle className="text-lg text-rose-700">Media Crackdown During Conflict</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 bg-rose-50 rounded-lg text-center">
                  <div className="text-3xl font-extrabold text-rose-600">375+</div>
                  <div className="text-sm text-slate-600">Detained for filming/sharing</div>
                </div>
                <div className="p-4 bg-rose-50 rounded-lg text-center">
                  <div className="text-3xl font-extrabold text-rose-600">9.6M</div>
                  <div className="text-sm text-slate-600">VPN Downloads (2025)</div>
                </div>
                <div className="p-4 bg-rose-50 rounded-lg text-center">
                  <div className="text-3xl font-extrabold text-rose-600">85.5%</div>
                  <div className="text-sm text-slate-600">VPN Adoption Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Suppression Cases Tab */}
        <TabsContent value="suppression" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* UAE-94 Trial */}
            <Card className="border-l-4 border-l-rose-400">
              <CardHeader>
                <CardTitle className="text-lg">UAE-94 Trial Blackout (2012-2013)</CardTitle>
                <CardDescription>Mass trial of activists - international media denied access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg text-center">
                    <div className="text-2xl font-extrabold text-slate-900">94</div>
                    <div className="text-xs text-slate-600">Defendants</div>
                  </div>
                  <div className="p-3 bg-slate-100 rounded-lg text-center">
                    <div className="text-2xl font-extrabold text-slate-900">69</div>
                    <div className="text-xs text-slate-600">Convicted</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Maximum Sentence</span>
                    <span className="text-sm font-medium text-rose-600">15 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">UN Finding</span>
                    <Badge variant="destructive">Arbitrary Detention</Badge>
                  </div>
                </div>
                <div className="p-3 bg-rose-50 rounded-lg">
                  <h4 className="font-semibold text-rose-900 mb-2">Violations Documented</h4>
                  <ul className="text-sm text-rose-800 space-y-1">
                    <li>- Incommunicado detention up to a year</li>
                    <li>- Torture to extract confessions</li>
                    <li>- Families subjected to reprisals</li>
                    <li>- Citizenship revoked</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Al Jazeera Blockade */}
            <Card className="border-l-4 border-l-amber-400">
              <CardHeader>
                <CardTitle className="text-lg">Al Jazeera Blockade (2017-2023)</CardTitle>
                <CardDescription>Six-year media blockade during Qatar diplomatic crisis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg text-center">
                    <div className="text-2xl font-extrabold text-slate-900">~6</div>
                    <div className="text-xs text-slate-600">Years Blocked</div>
                  </div>
                  <div className="p-3 bg-slate-100 rounded-lg text-center">
                    <div className="text-2xl font-extrabold text-rose-600">15</div>
                    <div className="text-xs text-slate-600">Years Prison for Sympathy</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Block Start</span>
                    <span className="font-medium">June 5, 2017</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Countries</span>
                    <span className="font-medium">Saudi Arabia, UAE, Bahrain, Egypt</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Hotel Block Fine</span>
                    <span className="font-medium">Up to $26,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Source Comparisons */}
          <GlassPanel title="International Source Comparisons" description="How different outlets cover UAE events">
            <div className="space-y-6">
              {/* Al Jazeera vs Gulf News */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Al Jazeera vs Gulf News</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-3">Aspect</th>
                        <th className="text-left py-2 px-3 text-emerald-700">Al Jazeera</th>
                        <th className="text-left py-2 px-3 text-rose-700">Gulf News</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sourceComparisons.alJazeeraVsGulfNews.map((row, index) => (
                        <tr key={index} className="border-b border-slate-100">
                          <td className="py-2 px-3 font-medium text-slate-900">{row.aspect}</td>
                          <td className="py-2 px-3 text-slate-600">{row.alJazeera}</td>
                          <td className="py-2 px-3 text-slate-600">{row.gulfNews}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* BBC vs WAM */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">BBC vs WAM</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-3">Aspect</th>
                        <th className="text-left py-2 px-3 text-emerald-700">BBC</th>
                        <th className="text-left py-2 px-3 text-rose-700">WAM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sourceComparisons.bbcVsWam.map((row, index) => (
                        <tr key={index} className="border-b border-slate-100">
                          <td className="py-2 px-3 font-medium text-slate-900">{row.aspect}</td>
                          <td className="py-2 px-3 text-slate-600">{row.bbc}</td>
                          <td className="py-2 px-3 text-slate-600">{row.wam}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Suppressed Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Key Suppressed Topics</CardTitle>
              <CardDescription>Topics systematically underreported or suppressed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {suppressedTopics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-rose-50 rounded-lg border border-rose-200">
                    <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
