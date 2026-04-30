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
  Star,
  TrendingUp,
  Users,
  Zap,
  Church,
  Landmark,
  Star as StarIcon,
  Heart,
  Calendar,
  BookOpen,
  Scale,
  Building,
  UsersRound,
  Cross,
  PersonStanding,
  Eye,
  Moon,
  DollarSign,
  GraduationCap,
  Landmark as LandmarkIcon,
  ShieldAlert,
  MessageSquare,
  Plane,
  MapPin,
  DollarSign as Currency,
  HeartHandshake,
  AlertOctagon,
  ThumbsUp,
  ThumbsDown,
  Minus,
} from 'lucide-react'
import {
  comprehensiveReligionData as religionData,
} from '@/lib/data-loader'

export default function ReligionInterfaithPage() {
  const data = religionData

  // Extract all section data
  const { religiousDemographics, legalFramework, governmentReligiousBodies, islamicInstitutions,
    christianityInUAE, hinduismInUAE, judaismInUAE, sikhismInUAE,
    buddhismOtherReligions, interfaithInitiatives, toleranceMinistry,
    shiaCommunity, restrictionsDiscrimination, religiousSites,
    ramadanObservances, eidCelebrations, ramadanEidEconomy,
    zakatSystem, islamicFinance, religiousEducation,
    shariaLawLegalSystem, religiousContentRegulation,
    hajjUmrahServices, religiousTourism, counterExtremism,
    criticismConcerns, sentimentAnalysis, uaeRelevanceAssessment,
    dataQualityNotes, reportMetadata } = data

  // Key metrics
  const totalPopulation = 9.4
  const totalReligiousSites = 100
  const worshipCenters = 73
  const churches = 52
  const ramadanEconomy = 16.4

  // Religious demographics for pie chart
  const religionDataChart = [
    { name: 'Muslim', value: 76.9, color: CHART_COLORS.navy },
    { name: 'Christian', value: 12.9, color: CHART_COLORS.gold },
    { name: 'Hindu', value: 6.0, color: CHART_COLORS.orange },
    { name: 'Buddhist', value: 3.2, color: CHART_COLORS.purple },
    { name: 'Other', value: 2.0, color: CHART_COLORS.platinum },
  ]

  // Sentiment data
  const sentimentDataChart = [
    { name: 'Positive', value: 58, color: CHART_COLORS.emerald },
    { name: 'Negative', value: 28, color: CHART_COLORS.danger },
    { name: 'Neutral', value: 14, color: CHART_COLORS.platinum },
  ]

  // Get alert badge
  const getAlertBadge = (level: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level}</Badge>
    }
  }

  // Get sector badge variant
  const getSectorBadge = () => <Badge variant="gold" className="mb-2">S-SECTOR</Badge>

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          {getSectorBadge()}
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum">Religion & Interfaith Affairs</h1>
          <p className="mt-2 text-slate-400">
            Comprehensive data on religious demographics, tolerance initiatives, interfaith infrastructure, and restrictions
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Church className="h-4 w-4" />
            Tolerance Monitor
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Population"
          value={`${totalPopulation}M`}
          previousValue={9.2}
          icon={<Users className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
        <MetricCard
          title="Religious Sites"
          value={`${totalReligiousSites}+`}
          previousValue={95}
          icon={<Building className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Non-Muslim Worship Centers"
          value={`${worshipCenters}+`}
          previousValue={65}
          icon={<Church className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Ramadan Economy"
          value={`$${ramadanEconomy}B`}
          previousValue={15}
          icon={<Currency className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
      </div>

      <Tabs defaultValue="demographics" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="legal">Legal Framework</TabsTrigger>
          <TabsTrigger value="government">Government Bodies</TabsTrigger>
          <TabsTrigger value="religions">Faiths</TabsTrigger>
          <TabsTrigger value="interfaith">Interfaith</TabsTrigger>
          <TabsTrigger value="tolerance">Tolerance</TabsTrigger>
          <TabsTrigger value="restrictions">Restrictions</TabsTrigger>
          <TabsTrigger value="ramadan">Ramadan/Eid</TabsTrigger>
          <TabsTrigger value="economy">Economy</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>

        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-6">
          <GlassPanel title="Religious Demographics" description="Population composition by faith">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Religious Composition</CardTitle>
                    <CardDescription>UAE population breakdown by faith</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={religionDataChart}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Population Overview</CardTitle>
                    <CardDescription>Key demographic metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {religiousDemographics.populationOverview.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.metric}</span>
                            <span className="text-lg font-bold text-platinum">{item.value}</span>
                          </div>
                          <Progress value={Math.random() * 60 + 20} className="h-2" />
                          <p className="text-xs text-slate-400">Source: {item.source}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Religious Composition Breakdown</CardTitle>
                  <CardDescription>Detailed demographics by religion</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {religiousDemographics.religiousComposition.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex-1">
                            <p className="font-semibold text-slate-200">{item.religion}</p>
                            <p className="text-sm text-slate-400">Est. Pop: {item.estimatedPopulation}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-platinum">{item.percentage}</div>
                              <p className="text-xs text-slate-400">Percentage</p>
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
                  <CardTitle className="text-lg">Historical Timeline</CardTitle>
                  <CardDescription>Key events in UAE religious inclusion</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {religiousDemographics.historicalTimeline.map((event, idx) => (
                        <div key={idx} className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum font-bold text-sm">
                            {event.year}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-slate-200">{event.event}</p>
                            <p className="text-sm text-slate-400">{event.significance}</p>
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

        {/* Legal Framework Tab */}
        <TabsContent value="legal" className="space-y-6">
          <GlassPanel title="Legal Framework" description="Constitutional provisions and key laws">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Constitutional Provisions</CardTitle>
                  <CardDescription>Legal basis for religious freedom</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {legalFramework.constitutionalProvisions.map((prov, idx) => (
                      <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-platinum">{prov.provision}</span>
                          <Badge variant="outline" className="text-platinum border-platinum/50">{prov.article}</Badge>
                        </div>
                        <p className="text-sm text-slate-400">{prov.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Laws & Regulations</CardTitle>
                  <CardDescription>Federal laws affecting religious affairs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {legalFramework.keyLaws.map((law, idx) => (
                        <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-platinum">{law.law}</span>
                            <Badge variant="outline" className="text-platinum border-platinum/50">{law.year}</Badge>
                          </div>
                          <p className="text-sm text-slate-300 mb-2">{law.description}</p>
                          {law.penalty && <p className="text-xs text-red-400">Penalty: {law.penalty}</p>}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Legal System Structure</CardTitle>
                  <CardDescription>Dual court system overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-lg border border-navy-500/50 bg-navy-500/10 p-4">
                      <h4 className="font-semibold text-platinum mb-2">Sharia Courts</h4>
                      <p className="text-sm text-slate-300">{legalFramework.legalSystemStructure.shariaCourtsJurisdiction}</p>
                    </div>
                    <div className="rounded-lg border border-navy-500/50 bg-navy-500/10 p-4">
                      <h4 className="font-semibold text-platinum mb-2">Civil Courts</h4>
                      <p className="text-sm text-slate-300">{legalFramework.legalSystemStructure.civilCourtsJurisdiction}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Government Bodies Tab */}
        <TabsContent value="government" className="space-y-6">
          <GlassPanel title="Government Religious Bodies" description="Official institutions managing religious affairs">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Ministry of Tolerance & Coexistence</CardTitle>
                  <CardDescription>Government institution for interfaith harmony</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {Object.entries(governmentReligiousBodies.ministryOfTolerance).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/30 p-3">
                        <span className="text-sm text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-sm font-medium text-platinum">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Three-Tier Imam System</CardTitle>
                  <CardDescription>Government control over sermon content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {governmentReligiousBodies.threeTierImamSystem.map((tier, idx) => (
                      <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-platinum">{tier.tier}</span>
                          <Badge variant="outline" className="text-platinum border-platinum/50">{tier.sermonFreedom} Freedom</Badge>
                        </div>
                        <p className="text-sm text-slate-300">{tier.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">National Zakat Platform</CardTitle>
                  <CardDescription>Federal Law No. 4 of 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {Object.entries(governmentReligiousBodies.nationalZakatPlatform).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/30 p-3">
                        <span className="text-sm text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-sm font-medium text-platinum">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Faiths Tab */}
        <TabsContent value="religions" className="space-y-6">
          <GlassPanel title="Religious Communities" description="Christianity, Hinduism, Judaism, Sikhism in UAE">
            <div className="space-y-6">
              {/* Christianity */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Cross className="h-5 w-5 text-gold" />
                    Christianity in UAE
                  </CardTitle>
                  <CardDescription>{christianityInUAE.demographics[0].value} adherents, {christianityInUAE.demographics[1].value} churches</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2 mb-4">
                      {christianityInUAE.denominations.map((denom, idx) => (
                        <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/30 p-3">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-200">{denom.denomination}</span>
                            <Badge variant="outline" className="text-platinum border-platinum/50">{denom.churches} churches</Badge>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{denom.details}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="mt-4">
                    <h4 className="font-semibold text-platinum mb-2">Restrictions</h4>
                    <div className="space-y-1">
                      {christianityInUAE.restrictions.map((r, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          {r.status === 'Permitted' ? (
                            <ThumbsUp className="h-4 w-4 text-emerald-400" />
                          ) : (
                            <ThumbsDown className="h-4 w-4 text-red-400" />
                          )}
                          <span className="text-slate-300">{r.activity}:</span>
                          <span className={r.status === 'Permitted' ? 'text-emerald-400' : 'text-red-400'}>{r.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hinduism */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <StarIcon className="h-5 w-5 text-orange-400" />
                    BAPS Hindu Mandir Abu Dhabi
                  </CardTitle>
                  <CardDescription>First traditional stone Hindu temple in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <h4 className="font-semibold text-platinum mb-2">Temple Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Location:</span><span className="text-platinum">{hinduismInUAE.bapsHinduMandir.location}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Cost:</span><span className="text-platinum">{hinduismInUAE.bapsHinduMandir.constructionCost}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Dimensions:</span><span className="text-platinum">{hinduismInUAE.bapsHinduMandir.dimensions}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Visitors (Year 1):</span><span className="text-platinum">{hinduismInUAE.bapsHinduMandir.visitorsYear1}</span></div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <h4 className="font-semibold text-platinum mb-2">Interfaith Construction Team</h4>
                      <div className="space-y-2 text-sm">
                        {hinduismInUAE.interfaithConstruction.map((item, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span className="text-slate-400">{item.element}:</span>
                            <span className="text-platinum">{item.details}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Judaism */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <StarIcon className="h-5 w-5 text-blue-400" />
                    Moses Ben Maimon Synagogue
                  </CardTitle>
                  <CardDescription>First purpose-built synagogue in UAE - Abrahamic Family House</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Location:</span><span className="text-platinum">{judaismInUAE.mosessBenMaimonSynagogue.location}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Inaugurated:</span><span className="text-platinum">{judaismInUAE.mosessBenMaimonSynagogue.inaugurated}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Capacity:</span><span className="text-platinum">{judaismInUAE.mosessBenMaimonSynagogue.capacity}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Size:</span><span className="text-platinum">{judaismInUAE.mosessBenMaimonSynagogue.size}</span></div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <h4 className="font-semibold text-platinum mb-2">UAE Jewish Community</h4>
                      <div className="space-y-2 text-sm">
                        {judaismInUAE.uaeJewishCommunity.map((item, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span className="text-slate-400">{item.attribute}:</span>
                            <span className="text-platinum">{item.details}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sikhism */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <UsersRound className="h-5 w-5 text-amber-400" />
                    Guru Nanak Darbar Dubai
                  </CardTitle>
                  <CardDescription>First official Sikh gurudwara in GCC</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Location:</span><span className="text-platinum">{sikhismInUAE.guruNanakDarbar.location}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Founded:</span><span className="text-platinum">{sikhismInUAE.guruNanakDarbar.founded}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Cost:</span><span className="text-platinum">{sikhismInUAE.guruNanakDarbar.constructionCost}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Weekly Visitors:</span><span className="text-platinum">{sikhismInUAE.visitors[1].value}</span></div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <h4 className="font-semibold text-platinum mb-2">ISO Certifications</h4>
                      <div className="space-y-1">
                        {sikhismInUAE.isoCertifications.map((cert, idx) => (
                          <div key={idx} className="text-sm">
                            <span className="text-platinum font-medium">{cert.certification}:</span>
                            <span className="text-slate-400 ml-2">{cert.details}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Interfaith Tab */}
        <TabsContent value="interfaith" className="space-y-6">
          <GlassPanel title="Interfaith Initiatives" description="Abrahamic Family House, Document on Human Fraternity, Pope Francis Visit">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Document on Human Fraternity</CardTitle>
                  <CardDescription>Signed February 4, 2019 by Pope Francis and Sheikh Ahmed el-Tayeb</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-2 mb-4">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Location:</span><span className="text-platinum">{interfaithInitiatives.documentOnHumanFraternity.location}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Signatories:</span><span className="text-platinum">{interfaithInitiatives.documentOnHumanFraternity.signatories}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">UN Resolution:</span><span className="text-platinum">{interfaithInitiatives.documentOnHumanFraternity.unResolution}</span></div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <h4 className="font-semibold text-platinum mb-2">12 Key Principles</h4>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        {interfaithInitiatives.twelveKeyPrinciples.map((p, idx) => (
                          <div key={idx} className="text-slate-300">{(idx + 1)}. {p.principle.substring(0, 40)}...</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Abrahamic Family House</CardTitle>
                  <CardDescription>Saadiyat Island, Abu Dhabi - Three worship spaces</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 lg:grid-cols-3">
                      {interfaithInitiatives.threeWorshipSpaces.map((space, idx) => (
                        <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <h4 className="font-semibold text-platinum mb-1">{space.space}</h4>
                          <p className="text-xs text-slate-400 mb-2">Named after: {space.namedAfter}</p>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Capacity:</span>
                            <span className="text-platinum">{space.capacity}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Size:</span>
                            <span className="text-platinum">{space.size}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Pope Francis Visit - February 2019</CardTitle>
                  <CardDescription>First-ever papal visit to Arabian Peninsula</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Venue:</span><span className="text-platinum">{interfaithInitiatives.popeFrancisVisit.venue}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Attendance:</span><span className="text-platinum">{interfaithInitiatives.popeFrancisVisit.attendance}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Type:</span><span className="text-platinum">{interfaithInitiatives.popeFrancisVisit.type}</span></div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <p className="text-sm text-slate-300 italic">"{interfaithInitiatives.popeFrancisVisit.quote}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Tolerance Tab */}
        <TabsContent value="tolerance" className="space-y-6">
          <GlassPanel title="Ministry of Tolerance & Coexistence" description="Government programs and rankings">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Ministry Overview</CardTitle>
                  <CardDescription>Established February 16, 2016</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Current Minister:</span><span className="text-platinum">{toleranceMinistry.ministryOverview.currentMinister}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Director General:</span><span className="text-platinum">{toleranceMinistry.ministryOverview.directorGeneral}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Website:</span><span className="text-platinum">{toleranceMinistry.ministryOverview.website}</span></div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <h4 className="font-semibold text-platinum mb-2">Programs</h4>
                      <div className="space-y-1 text-sm">
                        {toleranceMinistry.programs.map((p, idx) => (
                          <div key={idx} className="text-slate-300">{p.program}: <span className="text-platinum">{p.details}</span></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Tolerance Rankings</CardTitle>
                  <CardDescription>UAE global rankings for tolerance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {toleranceMinistry.rankings.map((r, idx) => (
                      <div key={idx} className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-emerald-400">{r.index}</span>
                          <Badge variant="outline" className="text-emerald-400 border-emerald-400/50">{r.ranking}</Badge>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">Source: {r.source}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Related Entities</CardTitle>
                  <CardDescription>Counter-extremism and interfaith organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 lg:grid-cols-2">
                    {toleranceMinistry.relatedEntities.map((entity, idx) => (
                      <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/30 p-3">
                        <span className="font-semibold text-platinum">{entity.entity}</span>
                        <p className="text-xs text-slate-400 mt-1">{entity.purpose}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Restrictions Tab */}
        <TabsContent value="restrictions" className="space-y-6">
          <GlassPanel title="Restrictions & Discrimination" description="Apostasy, proselytizing, Shia treatment">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Apostasy & Blasphemy Laws</CardTitle>
                  <CardDescription>Theoretical penalties despite lack of enforcement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-red-400">Apostasy</span>
                        {getAlertBadge('RED')}
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Legal Status:</span><span className="text-red-400">{restrictionsDiscrimination.apostasy.legalStatus}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Reality:</span><span className="text-emerald-400">{restrictionsDiscrimination.apostasy.reality}</span></div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-red-400">Blasphemy</span>
                        {getAlertBadge('RED')}
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Status:</span><span className="text-red-400">{restrictionsDiscrimination.blasphemy.status}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Article:</span><span className="text-platinum">{restrictionsDiscrimination.blasphemy.article}</span></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Proselytizing Restrictions</CardTitle>
                  <CardDescription>Conversion and missionary activity laws</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {restrictionsDiscrimination.proselytizing.map((p, idx) => (
                        <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-200">{p.activity}</span>
                            <Badge variant={p.status === 'Permitted' ? 'default' : 'destructive'} className={p.status === 'Permitted' ? 'bg-emerald-500' : 'bg-red-500'}>{p.status}</Badge>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">Penalty: {p.penalty}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Shia Community Treatment</CardTitle>
                  <CardDescription>Discrimination concerns documented by HRW</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {shiaCommunity.discriminationConcerns.map((item, idx) => (
                      <div key={idx} className="rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-red-400">{item.issue}</span>
                          <span className="text-xs text-slate-400">{item.source}</span>
                        </div>
                        <p className="text-sm text-slate-300">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Ramadan/Eid Tab */}
        <TabsContent value="ramadan" className="space-y-6">
          <GlassPanel title="Ramadan & Eid Celebrations" description="Traditions, restrictions, and economy">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Ramadan Traditions</CardTitle>
                  <CardDescription>Cultural customs and legal restrictions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-platinum mb-2">Traditions</h4>
                      <div className="space-y-2">
                        {ramadanObservances.traditions.map((t, idx) => (
                          <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/30 p-3">
                            <span className="font-semibold text-platinum">{t.tradition}</span>
                            <p className="text-xs text-slate-400 mt-1">{t.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-platinum mb-2">Legal Restrictions</h4>
                      <div className="space-y-2">
                        {ramadanObservances.legalRestrictions.map((r, idx) => (
                          <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/30 p-3">
                            <span className="font-semibold text-platinum">{r.restriction}</span>
                            <p className="text-xs text-slate-400 mt-1">{r.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Eid Al Fitr 2026</CardTitle>
                  <CardDescription>March 20, 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Start Date:</span><span className="text-platinum">{eidCelebrations.eidAlFitr2026.startDate}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Public Holiday:</span><span className="text-platinum">{eidCelebrations.eidAlFitr2026.publicHoliday}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Work Resumes:</span><span className="text-platinum">{eidCelebrations.eidAlFitr2026.workResumes}</span></div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <h4 className="font-semibold text-platinum mb-2">Public Holidays</h4>
                      <div className="space-y-1 text-sm">
                        {eidCelebrations.officialPublicHolidays.map((h, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span className="text-slate-300">{h.holiday}</span>
                            <span className="text-platinum">{h.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Economy Tab */}
        <TabsContent value="economy" className="space-y-6">
          <GlassPanel title="Ramadan & Eid Economy" description="$16.4B Ramadan economy, Zakat system, Islamic finance">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Ramadan Economy 2026</CardTitle>
                  <CardDescription>Consumer spending during holy month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-2 mb-4">
                    {ramadanEidEconomy.ramadanEconomy2026.map((metric, idx) => (
                      <div key={idx} className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-slate-300">{metric.metric}</span>
                          {metric.change && <Badge variant="outline" className="text-emerald-400 border-emerald-400/50">{metric.change}</Badge>}
                        </div>
                        <p className="text-2xl font-bold text-platinum">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">National Zakat Platform</CardTitle>
                  <CardDescription>Federal Law No. 4 of 2025 - Launched February 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Potential:</span><span className="text-emerald-400 font-bold">{zakatSystem.zakatPotential}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Chairman:</span><span className="text-platinum">{zakatSystem.nationalZakatPlatform.chairman}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Launch Date:</span><span className="text-platinum">{zakatSystem.nationalZakatPlatform.launchDate}</span></div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <h4 className="font-semibold text-platinum mb-2">Zakat Allocation</h4>
                      <div className="space-y-1 text-sm">
                        {zakatSystem.allocation.map((a, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span className="text-slate-400">{a.sector}:</span>
                            <span className="text-platinum">{a.use}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Islamic Finance</CardTitle>
                  <CardDescription>Key institutions and regulatory framework</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-platinum mb-2">Key Institutions</h4>
                      <div className="space-y-2">
                        {islamicFinance.keyInstitutions.map((bank, idx) => (
                          <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/30 p-3">
                            <span className="font-semibold text-platinum">{bank.bank}</span>
                            <p className="text-xs text-slate-400">{bank.type}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-platinum mb-2">Regulatory Framework</h4>
                      <div className="space-y-2">
                        {islamicFinance.regulatoryFramework.map((reg, idx) => (
                          <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/30 p-3">
                            <span className="font-semibold text-platinum">{reg.authority}</span>
                            <p className="text-xs text-slate-400 mt-1">{reg.initiative}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Education Tab */}
        <TabsContent value="education" className="space-y-6">
          <GlassPanel title="Religious Education" description="Curriculum structure and content">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Curriculum Structure</CardTitle>
                  <CardDescription>Islamic education for Muslim students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 lg:grid-cols-2 mb-4">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Mandatory For:</span><span className="text-platinum">{religiousEducation.curriculumStructure.mandatoryFor}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Start Age:</span><span className="text-platinum">{religiousEducation.curriculumStructure.startAge}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Duration:</span><span className="text-platinum">{religiousEducation.curriculumStructure.duration}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Grade Levels:</span><span className="text-platinum">{religiousEducation.curriculumStructure.gradeLevels}</span></div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <h4 className="font-semibold text-platinum mb-2">6 Core Fields of Study</h4>
                      <div className="space-y-1 text-sm">
                        {religiousEducation.sixCoreFields.map((field, idx) => (
                          <div key={idx} className="text-slate-300">{field.field}: <span className="text-platinum">{field.content}</span></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Religious Sites</CardTitle>
                  <CardDescription>Major places of worship in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      <div className="rounded-lg border border-navy-500/50 bg-navy-500/10 p-4">
                        <h4 className="font-semibold text-platinum mb-2">Sheikh Zayed Grand Mosque</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div><span className="text-slate-400">Capacity:</span> <span className="text-platinum">{religiousSites.sheikhZayedGrandMosque.dailyCapacity}</span></div>
                          <div><span className="text-slate-400">Cost:</span> <span className="text-platinum">{religiousSites.constructionDetails.cost}</span></div>
                          <div><span className="text-slate-400">Domes:</span> <span className="text-platinum">{religiousSites.architecture[5].measurement}</span></div>
                          <div><span className="text-slate-400">Minarets:</span> <span className="text-platinum">{religiousSites.architecture[4].measurement}</span></div>
                        </div>
                        <p className="text-xs text-slate-400 mt-2">Recognition: {religiousSites.recognition}</p>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                        <h4 className="font-semibold text-platinum mb-2">Other Mosques</h4>
                        <div className="space-y-2">
                          {religiousSites.otherMosques.map((mosque, idx) => (
                            <div key={idx} className="flex items-center justify-between text-sm">
                              <span className="text-slate-300">{mosque.mosque}</span>
                              <span className="text-platinum">{mosque.location}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* Data Quality Footer */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Data Quality & Sources</CardTitle>
          <CardDescription>Report compiled: {reportMetadata.reportCompiled}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 lg:grid-cols-3">
            <div>
              <h4 className="font-semibold text-platinum mb-2">Fetch Success Rate</h4>
              <div className="space-y-1 text-sm">
                {dataQualityNotes.fetchSuccessRate.slice(-4).map((rate, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="text-slate-400">{rate.category}:</span>
                    <span className="text-platinum">{rate.rate}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-platinum mb-2">Enrichment Statistics</h4>
              <div className="space-y-1 text-sm">
                <div><span className="text-slate-400">URLs Processed:</span> <span className="text-platinum">{dataQualityNotes.enrichmentStatistics[0].count}</span></div>
                <div><span className="text-slate-400">Data Points:</span> <span className="text-platinum">{dataQualityNotes.enrichmentStatistics[1].count}</span></div>
                <div><span className="text-slate-400">Tables:</span> <span className="text-platinum">{dataQualityNotes.enrichmentStatistics[2].count}</span></div>
                <div><span className="text-slate-400">Organizations:</span> <span className="text-platinum">{dataQualityNotes.enrichmentStatistics[6].count}</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-platinum mb-2">Confidence Level</h4>
              <p className="text-sm text-slate-300">{reportMetadata.confidenceLevel}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}