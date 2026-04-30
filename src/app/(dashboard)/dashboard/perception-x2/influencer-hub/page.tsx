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
  Activity,
  AlertCircle,
  Award,
  Baby,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Coffee,
  Dna,
  Droplets,
  Eye,
  Flame,
  Flower2,
  Globe,
  GraduationCap,
  Heart,
  HeartPulse,
  Hospital,
  Instagram,
  Linkedin,
  Mic,
  Monitor,
  Moon,
  Newspaper,
  Radio,
  Search,
  Shield,
  Sparkles,
  Stethoscope,
  Syringe,
  Target,
  Ticket,
  TrendingUp,
  Twitter,
  Tv2,
  User,
  UserCheck,
  UserPlus,
  Users,
  Video,
  Waves,
} from 'lucide-react'

type BadgeVariant = 'success' | 'warning' | 'info' | 'default' | 'destructive' | 'outline' | 'secondary' | 'red' | 'rose' | 'orange' | 'gold' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'denim' | 'indigo' | 'purple' | 'fuchsia'

export default function InfluencerHubPage() {
  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Health Influence Matrix</h1>
          <p className="mt-2 text-slate-600">
            Comprehensive profiling of 50 healthcare influencers across Abu Dhabi and UAE (2025-2026)
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Search Influencers
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <UserPlus className="h-4 w-4" />
            Add Profile
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Influencers"
          value="50"
          previousValue={42}
          icon={<Users className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Medical Authorities"
          value="16"
          previousValue={14}
          icon={<Stethoscope className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Media Personalities"
          value="13"
          previousValue={11}
          icon={<Radio className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="High Trust Score"
          value="38"
          previousValue={32}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="medical">Medical Authorities</TabsTrigger>
          <TabsTrigger value="media">Media Personalities</TabsTrigger>
          <TabsTrigger value="lifestyle">Lifestyle Icons</TabsTrigger>
          <TabsTrigger value="fitness">Fitness & Nutrition</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="The Three Pillars of Health Authority" description="Understanding the Abu Dhabi health influence ecosystem" badge="Strategic Analysis">
            <div className="space-y-6">
              {/* Executive Summary */}
              <Card className="glass-card border-indigo-200 bg-indigo-50/20">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                      <Globe className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-indigo-900">The Anatomy of Influence in the Capital</CardTitle>
                      <CardDescription className="text-indigo-700/80 mt-2">
                        The digital health landscape within the UAE has evolved from a nascent collection of fitness bloggers into a sophisticated, multi-layered ecosystem of authority. This report profiles the 50 most significant "Heavy Hitters" shaping health perception in the region.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Three Pillars Cards */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card border-rose-200 bg-rose-50/30">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 mb-4">
                      <Stethoscope className="h-6 w-6 text-rose-600" />
                    </div>
                    <CardTitle className="text-lg text-rose-900">Medical Authorities</CardTitle>
                    <CardDescription className="text-rose-700">The "White Coat" Influencers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-rose-800">
                      Board-certified professionals who have mastered digital storytelling. Their "Trust Score" is inherently high due to regulatory oversight and academic rigor.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-rose-700">Total Profiles</span>
                        <span className="font-bold text-rose-900">16</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-rose-700">Trust Score</span>
                        <Badge variant="success" className="text-xs">High</Badge>
                      </div>
                      <Progress value={100} className="h-2 bg-rose-200" />
                    </div>
                    <div className="pt-2 border-t border-rose-200">
                      <p className="text-xs text-rose-600 font-semibold">KEY DEMOGRAPHICS:</p>
                      <p className="text-xs text-rose-700 mt-1">Patients, Policy Makers, General Public (Crisis)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-purple-200 bg-purple-50/30">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 mb-4">
                      <Radio className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg text-purple-900">Media Personalities</CardTitle>
                    <CardDescription className="text-purple-700">Voices of Wellness</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-purple-800">
                      Traditional broadcasters (Radio/TV) who have migrated their massive audiences to social platforms. They serve as "lifestyle translators," turning health policy into daily habits.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-purple-700">Total Profiles</span>
                        <span className="font-bold text-purple-900">13</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-purple-700">Trust Score</span>
                        <Badge variant="info" className="text-xs">High/Med</Badge>
                      </div>
                      <Progress value={85} className="h-2 bg-purple-200" />
                    </div>
                    <div className="pt-2 border-t border-purple-200">
                      <p className="text-xs text-purple-600 font-semibold">KEY DEMOGRAPHICS:</p>
                      <p className="text-xs text-purple-700 mt-1">Commuters, Families, Gen Z/Alpha</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-emerald-200 bg-emerald-50/30">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 mb-4">
                      <Heart className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg text-emerald-900">Lifestyle Icons</CardTitle>
                    <CardDescription className="text-emerald-700">Vulnerability Storytellers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-emerald-800">
                      High-net-worth individuals and creatives who leverage "vulnerability storytelling" to destigmatize mental health and chronic conditions.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-emerald-700">Total Profiles</span>
                        <span className="font-bold text-emerald-900">21</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-emerald-700">Trust Score</span>
                        <Badge variant="secondary" className="text-xs">Med/High</Badge>
                      </div>
                      <Progress value={70} className="h-2 bg-emerald-200" />
                    </div>
                    <div className="pt-2 border-t border-emerald-200">
                      <p className="text-xs text-emerald-600 font-semibold">KEY DEMOGRAPHICS:</p>
                      <p className="text-xs text-emerald-700 mt-1">Women, Youth, Fashion-Forward Audiences</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Data Analysis Table */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Trust & Archetype Matrix</CardTitle>
                  <CardDescription>Distribution of 50 profiled heavy hitters across key archetypes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-64">
                    <table className="w-full">
                      <thead className="sticky top-0 bg-slate-100">
                        <tr className="border-b border-slate-200">
                          <th className="p-3 text-left text-xs font-bold text-slate-900">Primary Category</th>
                          <th className="p-3 text-left text-xs font-bold text-slate-900">Archetype Count</th>
                          <th className="p-3 text-left text-xs font-bold text-slate-900">Dominant Trust Score</th>
                          <th className="p-3 text-left text-xs font-bold text-slate-900">Key Demographic Reach</th>
                        </tr>
                      </thead>
                      <tbody>
                        {matrixData.map((row, index) => (
                          <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-3 text-sm font-semibold text-slate-900">{row.category}</td>
                            <td className="p-3">
                              <Badge variant={row.badgeVariant as BadgeVariant} className="text-xs">{row.count}</Badge>
                            </td>
                            <td className="p-3 text-sm text-slate-700">{row.trustScore}</td>
                            <td className="p-3 text-sm text-slate-600">{row.demographics}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Structural Observations */}
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="glass-card border-amber-200 bg-amber-50/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-amber-600" />
                      <h4 className="font-semibold text-amber-900">The "Doctor-Brand" Rise</h4>
                    </div>
                    <p className="text-sm text-amber-700">
                      Medical professionals have successfully transitioned into media entities during the pandemic, placing "experts at the center" of communication.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-cyan-200 bg-cyan-50/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-5 w-5 text-cyan-600" />
                      <h4 className="font-semibold text-cyan-900">Institutional Symbiosis</h4>
                    </div>
                    <p className="text-sm text-cyan-700">
                      The most powerful influencers are integrated with Abu Dhabi&apos;s health infrastructure (DoH, SSMC, ICLDC), giving both credibility and reach.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-fuchsia-200 bg-fuchsia-50/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-5 w-5 text-fuchsia-600" />
                      <h4 className="font-semibold text-fuchsia-900">Vulnerability as Currency</h4>
                    </div>
                    <p className="text-sm text-fuchsia-700">
                      Lifestyle influencers sharing personal struggles (vitiligo, autism, anxiety) generate deeper trust than curated perfection.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Future Outlook */}
              <Card className="glass-card border-indigo-200 bg-indigo-50/20">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                      <Sparkles className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-indigo-900">Future Outlook</CardTitle>
                      <CardDescription className="text-indigo-700/80 mt-2">
                        For any entity looking to scout talent or disseminate health messaging in Abu Dhabi, the strategy must be <strong>hybrid</strong>. It requires partnering with <strong>Medical Authorities</strong> for legitimacy and <strong>Media/Lifestyle Personalities</strong> for reach and relatability. The future of health influence in the UAE is not about choosing between a doctor and an influencer, but finding the individuals who have successfully become both.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Medical Authorities Tab */}
        <TabsContent value="medical" className="space-y-6">
          <GlassPanel title="Medical Authorities" description="Board-certified professionals who have mastered digital storytelling" badge="16 Profiles">
            <div className="space-y-4">
              {medicalAuthorities.map((influencer, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={influencer.trustScore === 'High' ? 'success' : 'info'} className="text-xs">
                            {influencer.trustScore} Trust
                          </Badge>
                          <h4 className="font-bold text-slate-900">#{influencer.id}: {influencer.name}</h4>
                        </div>
                        <p className="text-sm text-slate-600 italic">{influencer.handle}</p>
                        <p className="text-sm font-semibold text-rose-700 mt-2">{influencer.archetype}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4 text-indigo-600" />
                        <span className="text-sm font-semibold text-slate-900">Profile:</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-6">{influencer.profile}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Radio className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-semibold text-slate-900">Mechanism of Influence:</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-6">{influencer.mechanism}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-semibold text-slate-900">Impact:</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-6">{influencer.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Media Personalities Tab */}
        <TabsContent value="media" className="space-y-6">
          <GlassPanel title="Media Personalities" description="Traditional broadcasters who migrated to social platforms" badge="13 Profiles">
            <div className="space-y-4">
              {mediaPersonalities.map((influencer, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={influencer.trustScore === 'High' ? 'success' : influencer.trustScore === 'High (Brand Trust)' ? 'emerald' : influencer.trustScore === 'High (Relatability)' ? 'teal' : 'secondary'} className="text-xs">
                            {influencer.trustScore}
                          </Badge>
                          <h4 className="font-bold text-slate-900">#{influencer.id}: {influencer.name}</h4>
                        </div>
                        <p className="text-sm text-slate-600 italic">{influencer.handle}</p>
                        <p className="text-sm font-semibold text-purple-700 mt-2">{influencer.archetype}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4 text-indigo-600" />
                        <span className="text-sm font-semibold text-slate-900">Profile:</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-6">{influencer.profile}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Radio className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-semibold text-slate-900">Mechanism of Influence:</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-6">{influencer.mechanism}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-semibold text-slate-900">Impact:</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-6">{influencer.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Lifestyle Icons Tab */}
        <TabsContent value="lifestyle" className="space-y-6">
          <GlassPanel title="Lifestyle Icons & Mental Health Advocates" description="Vulnerability storytellers driving health behavior through authenticity" badge="10 Profiles">
            <div className="space-y-4">
              {lifestyleIcons.map((influencer, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={influencer.trustScore === 'High' ? 'success' : 'secondary'} className="text-xs">
                            {influencer.trustScore} Trust
                          </Badge>
                          <h4 className="font-bold text-slate-900">#{influencer.id}: {influencer.name}</h4>
                        </div>
                        <p className="text-sm text-slate-600 italic">{influencer.handle}</p>
                        <p className="text-sm font-semibold text-emerald-700 mt-2">{influencer.archetype}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4 text-indigo-600" />
                        <span className="text-sm font-semibold text-slate-900">Profile:</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-6">{influencer.profile}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Radio className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-semibold text-slate-900">Mechanism of Influence:</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-6">{influencer.mechanism}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-semibold text-slate-900">Impact:</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-6">{influencer.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Fitness & Nutrition Tab */}
        <TabsContent value="fitness" className="space-y-6">
          <GlassPanel title="Fitness & Nutrition Brigade" description="The Quantified Self - trainers, nutritionists, and yogis" badge="10 Profiles">
            <div className="space-y-4">
              {fitnessNutrition.map((influencer, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={influencer.trustScore === 'High' ? 'success' : 'secondary'} className="text-xs">
                            {influencer.trustScore} Trust
                          </Badge>
                          <h4 className="font-bold text-slate-900">#{influencer.id}: {influencer.name}</h4>
                        </div>
                        <p className="text-sm text-slate-600 italic">{influencer.handle}</p>
                        <p className="text-sm font-semibold text-orange-700 mt-2">{influencer.archetype}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <User className="h-4 w-4 text-indigo-600" />
                        <span className="text-sm font-semibold text-slate-900">Profile:</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-6">{influencer.profile}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Radio className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-semibold text-slate-900">Mechanism of Influence:</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-6">{influencer.mechanism}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-semibold text-slate-900">Impact:</span>
                      </div>
                      <p className="text-sm text-slate-700 pl-6">{influencer.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Data Arrays
const matrixData = [
  { category: 'Medical Authorities', count: 16, trustScore: 'High', demographics: 'Patients, Policy Makers, General Public (Crisis)', badgeVariant: 'rose' },
  { category: 'Media Personalities', count: 13, trustScore: 'High/Med', demographics: 'Commuters, Families, Gen Z/Alpha', badgeVariant: 'purple' },
  { category: 'Lifestyle/Mental Health', count: 10, trustScore: 'Med (High Impact)', demographics: 'Women, Youth, Fashion-Forward Audiences', badgeVariant: 'emerald' },
  { category: 'Fitness & Nutrition', count: 11, trustScore: 'High (Technical)', demographics: 'Gym-Goers, Dieters, Athletes', badgeVariant: 'orange' },
]

const medicalAuthorities = [
  {
    id: 1,
    name: 'Dr. Farida Al Hosani',
    handle: '@falhosani (Twitter/X, LinkedIn), Official ADPHC Channels',
    trustScore: 'High',
    archetype: 'The National Guardian',
    profile: 'Executive Director of Infectious Diseases at ADPHC and official spokesperson for the health sector. Does not simply post content; issues directives that shape national behavior.',
    mechanism: 'Masterclass in crisis communication turned permanent public education. Blends scientific authority with maternal compassion. Role on WHO Pandemic Influenza Preparedness Framework Advisory Group adds international prestige.',
    impact: 'Creates sense of safety. Represents "State as Protector," validating robust nature of Abu Dhabi\'s healthcare infrastructure to citizens and residents.'
  },
  {
    id: 2,
    name: 'Dr. Adil Sajwani',
    handle: '@dr_adil_sajwani (Associated with @uaebarq)',
    trustScore: 'High',
    archetype: 'The Community Translator',
    profile: 'Family Medicine Consultant and Deputy Medical Director at Mediclinic Parkview Hospital. Recognized by Vice President as top Emirati physician.',
    mechanism: 'Strategic alliance with UAEBARQ hosting largest Arabic health program on social media. Excels at "medical translation"—stripping jargon from complex topics like diabetes, obesity, mental health. Culturally tailored content addressing Emirati lifestyle factors.',
    impact: 'The "First Line of Defense." Reduces intimidation factor of visiting hospitals. Consistent TV/radio presence establishes him as ubiquitous guide for family health decisions.'
  },
  {
    id: 3,
    name: 'Dr. Mahra Lutfi',
    handle: '@missglobalpeace / @drmahralutfi',
    trustScore: 'High/Med',
    archetype: 'The Glamour-Science Hybrid',
    profile: 'Celebrity physician with 11.6M+ followers. Creates seamless blend of high fashion, luxury lifestyle, and rigorous science. First Emirati stem cell doctor certified by American Board of Regenerative Medicine.',
    mechanism: 'Penetrates demographics that typically ignore health content. Demonstrates intelligence and aesthetics are not mutually exclusive. Content pivots from red-carpet to detailed explanations of stem cell therapy.',
    impact: 'Elevates perception of Emirati women in science. Positions health and longevity as aspirational lifestyle choices. Advocacy for stem cell research positions Abu Dhabi as hub for futuristic medical tourism.'
  },
  {
    id: 4,
    name: 'Dr. Saliha Afridi',
    handle: '@drsalihaafridi',
    trustScore: 'High',
    archetype: 'The Soul Healer',
    profile: 'Heavyweight champion of mental health in the region. Founder of The Lighthouse Arabia, spent over decade building infrastructure for mental wellness in Dubai and Abu Dhabi.',
    mechanism: 'Deeply cerebral and empathetic content addressing "silent epidemics": high-functioning anxiety, corporate burnout, loneliness of expatriate experience. Leverages "blue tick" status to legitimize previously taboo conversations.',
    impact: 'Instrumental in shifting narrative from "mental illness" to "mental hygiene." Educational carousels serve as mini-therapy sessions, democratizing access to psychological concepts and encouraging help-seeking behavior.'
  },
  {
    id: 5,
    name: 'Dr. Hawaa Al Mansouri',
    handle: '@hawaa_almansoori',
    trustScore: 'High',
    archetype: 'The Innovator Physician',
    profile: 'Dual-threat influencer: Consultant Endocrinologist at ICLDC and member of Federal National Council. First non-American woman to graduate from GWU School of Medicine. Holds US patent for medical device.',
    mechanism: 'Targets intersection of technology, policy, and patient care. Role model for "knowledge economy," showcasing Emirati doctors as creators of medical technology, not just consumers.',
    impact: 'Inspires young Emiratis to enter STEM fields. Reassures public that Abu Dhabi\'s healthcare leadership is visionary. Focus on diabetes through lens of innovation and empowerment rather than disease management.'
  },
  {
    id: 6,
    name: 'Dr. Naser Ammash',
    handle: 'Professional Channels (LinkedIn / SSMC Official)',
    trustScore: 'High',
    archetype: 'The Institutional Titan',
    profile: 'CEO of Sheikh Shakhbout Medical City (SSMC). Brings weight of Mayo Clinic to Abu Dhabi. Less about daily vlogging, more about high-impact thought leadership.',
    mechanism: 'Uses media appearances and digital platforms to articulate "Model of Care." Explains complex surgeries, integration of research into practice, and standards of world-class hospital management.',
    impact: 'Validates "medical tourism at home" concept. Highlights that SSMC performs surgeries previously only available in US/Europe, building profound trust in local system.'
  },
  {
    id: 7,
    name: 'Dr. Shamsheer Vayalil',
    handle: '@drshamsheervp',
    trustScore: 'High',
    archetype: 'The Philanthropic Healer',
    profile: 'Founder and Chairman of Burjeel Holdings. Billionaire physician-entrepreneur whose influence spans entire GCC. Digital presence is mix of high-level business strategy and humanitarianism.',
    mechanism: 'Utilizes philanthropic healer archetype to humanize business of healthcare. Announcements of massive aid packages (₹6 crore pledge to crash victim families) position him as moral leader.',
    impact: 'Reinforces idea that private healthcare groups are partners in community stability. For millions of Indian expats in UAE, figure of immense pride and trust, translating to patient loyalty across Burjeel network.'
  },
  {
    id: 8,
    name: 'Dr. Mai Al Jaber',
    handle: '@maialjaber (Professional/Media focus)',
    trustScore: 'High',
    archetype: 'The Public Health Strategist',
    profile: 'CEO of ICLDC and specialist in Public Health Medicine. Architect of community health initiatives in capital. Frequently spearheads events like ICLDC Walk drawing thousands.',
    mechanism: 'Moves conversation from clinic to walking track. Advocacy focuses on preventative measures against diabetes through active lifestyle adoption.',
    impact: 'Normalizes physical activity for Emirati women. By visibly leading community walks and sports initiatives, breaks down cultural barriers to outdoor exercise, positioning it as patriotic and medical duty.'
  },
  {
    id: 9,
    name: 'Dr. Shamsa Al Awar',
    handle: 'Associated with @uaeu_official',
    trustScore: 'High',
    archetype: 'The Academic Matriarch',
    profile: 'Holds Chair of OB/GYN department at UAE University. Senior consultant whose influence rooted in academic excellence and training of future doctors.',
    mechanism: 'Provides definitive guidance on women\'s health, fertility, and maternity. In digital space cluttered with pseudoscience about pregnancy, her voice is gold standard of evidence-based care.',
    impact: 'Builds trust in local medical education system. Provides reassurance to women navigating high-risk pregnancies. Ensures women\'s health policies in Abu Dhabi grounded in rigorous science.'
  },
  {
    id: 10,
    name: 'Dr. Manal Taryam',
    handle: 'Digital presence via Noor Dubai Foundation',
    trustScore: 'High',
    archetype: 'The Visionary Humanitarian',
    profile: 'CEO of Noor Dubai Foundation and leader within Dubai Health Authority. Work focuses on eradication of preventable blindness globally and primary care domestically.',
    mechanism: 'Social media footprint highlights UAE\'s benevolent role in world, treating patients in developing nations. Domestically, translates to high trust in expertise as ophthalmologist.',
    impact: 'Links eye health to overall quality of life. Campaigns like "Art4Sight" merge art, philanthropy, and medicine, engaging high-net-worth individuals in health advocacy.'
  },
  {
    id: 11,
    name: 'Dr. Ayesha Al Memari',
    handle: '@ayesha_almemari',
    trustScore: 'High',
    archetype: 'The Frontline Pioneer',
    profile: 'First Emirati physician to specialize in Emergency Medicine. Based at SSMC, pivotal in structuring residency programs for emergency care.',
    mechanism: 'Appeals to resilience and ambition of nation. Showcases intensity and necessity of critical care medicine, serving as role model for aspiring Emirati doctors.',
    impact: 'Reassures public of readiness of Abu Dhabi\'s emergency services. Digital narrative confirms that in crisis, best care is available locally, reducing anxiety about emergency preparedness.'
  },
  {
    id: 12,
    name: 'Dr. Rashi Chowdhary',
    handle: '@rashichowdhary',
    trustScore: 'High',
    archetype: 'The Gut Health Guru',
    profile: 'With nearly 600k followers, massive force in "functional medicine" space. Specializes in gut health, PCOS, metabolic disorders. Operates globally but based in Dubai.',
    mechanism: 'Highly educational content using diagrams and detailed captions to explain gut-brain axis, inflammation, hormonal balance. Targets "silent sufferers"—women dealing with bloating, fatigue, weight gain who feel unheard by traditional medicine.',
    impact: 'Popularized concept that "food is medicine." Influence drives trends in nutrition, supplement use, diagnostic testing (food intolerance tests) across UAE.'
  },
  {
    id: 13,
    name: 'Dr. Waleed Al Shehhi',
    handle: 'Associated with CMC Dubai / Medical Media',
    trustScore: 'High',
    archetype: 'The Specialist Decoder',
    profile: 'Rheumatologist known for ability to demystify autoimmune diseases and chronic pain. Presence spans multiple hospitals and media appearances.',
    mechanism: 'Rheumatology is complex; breaks down how biologics work and importance of early diagnosis for arthritis.',
    impact: 'Provides hope and clarity for patients with chronic, often invisible, illnesses. Authority helps patients navigate complex landscape of autoimmune treatments available in UAE.'
  },
  {
    id: 14,
    name: 'Dr. Ahmed Al Khazraji',
    handle: 'Official DoH Channels',
    trustScore: 'High',
    archetype: 'The Policy Architect',
    profile: 'Executive Director of Strategy and Policy at DoH. Brain behind regulatory framework of Abu Dhabi\'s health sector.',
    mechanism: 'Influence is B2B and B2G. Shapes environment in which all other influencers operate, defining rules for digital health, telemedicine, insurance.',
    impact: 'Signals stability and future-readiness to investors and healthcare providers, ensuring ecosystem remains robust and innovative.'
  },
  {
    id: 15,
    name: 'Dr. Noura Al Ghaithi',
    handle: 'Official DoH Channels',
    trustScore: 'High',
    archetype: 'The Strategic Commander',
    profile: 'Undersecretary of DoH, operational lead for emirate\'s health sector. Oversees implementation of leadership\'s vision.',
    mechanism: 'Face of major health announcements. Digital presence emphasizes digitalization, AI integration, proactive healthcare.',
    impact: 'Validates modernization of system. Visibility ensures public understands Abu Dhabi is moving towards preventative, tech-enabled healthcare model.'
  },
  {
    id: 16,
    name: 'Dr. Ali Ghozlan',
    handle: '@alighozlanofficial',
    trustScore: 'Med/High',
    archetype: 'The Viral Medic',
    profile: 'Creates high-production, entertaining health content for millions of followers. Doctor but delivery is that of showman.',
    mechanism: 'Uses trending audio, fast edits, humor to deliver medical facts. Makes health content "binge-able."',
    impact: 'Reaches masses who might otherwise ignore health advice. Crucial asset for broad public health awareness campaigns requiring viral reach.'
  },
]

const mediaPersonalities = [
  {
    id: 17,
    name: 'Kris Fade',
    handle: '@krisfade',
    trustScore: 'High (Brand Trust)',
    archetype: 'The Wellness Mogul',
    profile: 'Ubiquitous media figure in UAE. Host of "The Kris Fade Show" on Virgin Radio and star of Dubai Bling. Successfully pivoted into health entrepreneurship with "Fade Fit".',
    mechanism: 'Personal transformation (weight loss and fitness) serves as foundation of credibility. Uses radio show to interview health experts and social media to showcase healthy lifestyle. Transparency about anxiety and mental health struggles adds depth resonating with men.',
    impact: 'Makes health "cool" and accessible. Snack brand introduces healthy options to children, tackling childhood obesity at consumer level. Drives narrative that success includes physical and mental fitness.'
  },
  {
    id: 18,
    name: 'Priti Malik',
    handle: '@pritimalik',
    trustScore: 'High (Relatability)',
    archetype: 'The Anxiety Slayer',
    profile: 'Co-host of "The Kris Fade Show." Powerful voice for mental health awareness. Shares battles with anxiety, specific phobias, self-esteem with radical honesty.',
    mechanism: 'By discussing therapy sessions and panic attacks on major radio platform, de-stigmatizes experiences for massive expat workforce. Content blends high-energy entertainment with vulnerable "real talk".',
    impact: 'Normalizes need for psychological support. Influence encourages young women to speak up about mental health struggles and seek professional help without shame.'
  },
  {
    id: 19,
    name: 'Rania Younes',
    handle: '@raniayounes',
    trustScore: 'High',
    archetype: 'The Morning Motivator',
    profile: 'Host of "Sabaho" on Star FM. Commands Arabic-speaking morning audience. Show is cultural staple in Abu Dhabi.',
    mechanism: 'Program weaves health tips, nutrition advice, positivity into fabric of morning commute. Interviews doctors and nutritionists, acting as proxy for listeners\' questions.',
    impact: 'Critical for reaching Arabic-speaking demographic. Endorsement of health behaviors (regular checkups, healthy breakfasts) carries weight of trusted friend.'
  },
  {
    id: 20,
    name: 'Lara Setrakian',
    handle: '@larasetrakian',
    trustScore: 'High (Intellectual)',
    archetype: 'The Health Intellect',
    profile: 'Brings journalistic rigor to health sector. Host of "HealthBeats" podcast in collaboration with Abu Dhabi Global Healthcare Week. Operates at elite level of health discourse.',
    mechanism: 'Interviews with CEOs and policymakers focus on systemic issues: precision medicine, economics of longevity, AI in healthcare.',
    impact: 'Shapes view of "intelligentsia." Content positions Abu Dhabi not just as place to get treated, but as place where future of health is being written.'
  },
  {
    id: 21,
    name: 'Diala Ali',
    handle: '@diala_ali',
    trustScore: 'High',
    archetype: 'The Emirati Voice',
    profile: 'Prominent TV presenter for Dubai Media with over 500k followers. Key influencer for Emirati women.',
    mechanism: 'Coverage of government summits and health initiatives bridges gap between policy and public. Poised, professional demeanor makes her trusted conduit for official guidelines.',
    impact: 'Validates health trends within context of Emirati culture, making them acceptable and desirable for local families.'
  },
  {
    id: 22,
    name: 'Shatha Haddad',
    handle: '@shathahadd',
    trustScore: 'Med',
    archetype: 'The Active Journalist',
    profile: 'Sports presenter at Sky News Arabia. Influences health through lens of athleticism. Based in Abu Dhabi, covers major sporting events defining city\'s active calendar.',
    mechanism: 'Showcases elite athletes and participating in sports, promotes message that movement is medicine. Bilingual skills broaden reach.',
    impact: 'Inspires audience to view sports not just as entertainment, but as participant activity essential for health.'
  },
  {
    id: 23,
    name: 'Lubna Bouza',
    handle: '@lubnabouza',
    trustScore: 'High',
    archetype: 'The Business of Wellness',
    profile: 'Editor-in-Chief of Business News at Sky News Arabia. Hosts "Business with Lubna." Show creates massive engagement on TikTok/Instagram analyzing economics of trends including health and luxury wellness.',
    mechanism: 'Breaks down "value" of health investments, appealing to pragmatic, economically literate audience.',
    impact: 'Frames health and wellness as smart economic decisions, influencing "investment mindset" regarding personal health.'
  },
  {
    id: 24,
    name: 'Dina Butti',
    handle: '@dinabutti',
    trustScore: 'High (Parenting)',
    archetype: 'The Real Mom',
    profile: 'Presenter on Dubai One and popular mom influencer. Content focuses on chaotic, beautiful reality of raising children.',
    mechanism: 'Partners with brands like Dole to promote family nutrition in way that feels achievable rather than aspirational. Openly discusses challenges of keeping kids healthy.',
    impact: 'Key driver of family health behaviors. Influence helps parents navigate nutrition and activity choices for their children.'
  },
  {
    id: 25,
    name: 'Big Hass',
    handle: '@bighass',
    trustScore: 'High (Advocacy)',
    archetype: 'The Autism Champion',
    profile: 'Radio legend (Pulse 95 Radio) and region\'s hip-hop ambassador. Most profound influence stems from advocacy for son on autism spectrum.',
    mechanism: 'Uses platform to challenge stigmas surrounding neurodiversity. Educates public on inclusivity and realities of raising child with autism.',
    impact: 'Transforms radio influence into social impact, fostering more inclusive society in UAE and advocating for better support systems for people of determination.'
  },
  {
    id: 26,
    name: 'Katie Overy',
    handle: '@iamkatieovery',
    trustScore: 'Med',
    archetype: 'The Energetic Host',
    profile: 'Host of "DXB Today" on Dubai One. Energetic face of city\'s events. Fixture at fitness challenges and wellness launches.',
    mechanism: 'Lifestyle is testament to active opportunities available in UAE. Participates, sweats, and brings audience along.',
    impact: 'Promotes "active city" narrative, encouraging residents to utilize fitness infrastructure around them.'
  },
  {
    id: 27,
    name: 'Rania Ali',
    handle: '@raniaaliofficial',
    trustScore: 'Med',
    archetype: 'The Bilingual Bridge',
    profile: 'Presenter on Al Aan TV and prolific event MC. Massive digital following (700k-1M+). Covers "Good News," focusing on positivity and lifestyle.',
    mechanism: 'Ability to switch between English and Arabic allows delivery of health and positivity messages to diverse demographic. Frames health as component of successful, modern life.',
    impact: 'Reinforces link between positive psychology and physical health.'
  },
  {
    id: 28,
    name: 'Hassan Al Sheikh',
    handle: 'Associated with Star FM',
    trustScore: 'Med',
    archetype: 'The Morning Companion',
    profile: 'Co-host of "Sabaho" on Star FM. Provides male counterpoint in morning wellness conversation.',
    mechanism: 'Banter often touches on stress management (traffic), healthy eating during Ramadan, community news.',
    impact: 'Normalizes health discussions for Arab men who might not follow dedicated fitness influencers, making wellness part of daily "bro" conversation.'
  },
  {
    id: 29,
    name: 'Amira Mohammed',
    handle: '@amira_m92',
    trustScore: 'Med',
    archetype: 'The Cultural Reporter',
    profile: 'Renowned journalist and TV presenter at Abu Dhabi TV. Member of Youth Media Council. Covers technology and society.',
    mechanism: 'Sheds light on how technology (AI, apps) is intersecting with health. Coverage of "Hope Probe" and national achievements frames science as patriotic endeavor.',
    impact: 'Influences youth demographic, positioning scientific literacy and health awareness as key traits of modern Emirati.'
  },
]

const lifestyleIcons = [
  {
    id: 30,
    name: 'Salama Mohamed',
    handle: '@salamamohamed',
    trustScore: 'High',
    archetype: 'The Skin Positivity Icon',
    profile: 'Digital phenomenon with millions of followers. Transformed lifelong condition of vitiligo into platform for empowerment. Founder of "Peacefull," skincare line for sensitive skin.',
    mechanism: 'Uses humor and raw honesty to discuss skin conditions, dismantling stigma of perfectionism. Partnership with UNHCR elevates voice to global humanitarian level.',
    impact: 'Single-handedly changed conversation around dermatology and self-acceptance in Middle East. Frames skincare not as vanity, but as mental health and self-care.'
  },
  {
    id: 31,
    name: 'Khalid Al Ameri',
    handle: '@khalidalameri',
    trustScore: 'High',
    archetype: 'The Vulnerable Storyteller',
    profile: 'One of region\'s most beloved storytellers. Content often focuses on family, marriage, personal growth. Documented weight loss journey and therapy discussions pivotal.',
    mechanism: 'Shares own health struggles—losing 20kgs to be better father, navigating life with autistic child—humanizing health challenges. Frames health as requirement for family duty.',
    impact: 'Makes it acceptable for Arab men to discuss mental health and physical insecurities. Reach is global, but impact is deeply local.'
  },
  {
    id: 32,
    name: 'Sara Al Madani',
    handle: '@sara_almadani_',
    trustScore: 'Med',
    archetype: 'The Mindset Alchemist',
    profile: 'Star of Real Housewives of Dubai and serial entrepreneur. Vocal proponent of holistic healing, hypnotherapy, trauma recovery.',
    mechanism: 'Challenges medical orthodoxy by promoting alternative therapies and power of subconscious mind. Openly discusses escaping abusive relationships and healing through "radical responsibility."',
    impact: 'Pushes narrative that mental health is foundation of entrepreneurial success. Influence creates demand for holistic and alternative wellness services in region.'
  },
  {
    id: 33,
    name: 'Karen Wazen',
    handle: '@karenwazen',
    trustScore: 'Med',
    archetype: 'The Global Lifestyle Ambassador',
    profile: 'Fashion mega-influencer who, like Salama, has opened up about vitiligo. Content is polished but increasingly vulnerable regarding family health.',
    mechanism: 'When speaks about mental health checks or importance of gratitude, sets trend for millions. Models "healthy, modern Arab family" archetype.',
    impact: 'Normalizes chronic skin conditions within high-fashion industry, proving "imperfections" do not preclude success or beauty.'
  },
  {
    id: 34,
    name: 'Joelle Mardinian',
    handle: '@joellemardinian',
    trustScore: 'Med',
    archetype: 'The Beauty Mogul',
    profile: 'Matriarch of makeover through "Clinica Joelle." Bridges gap between aesthetic medicine and surgery.',
    mechanism: 'Demystifies cosmetic procedures, discussing with total transparency. Frames aesthetic health as component of confidence and mental well-being.',
    impact: 'Drives medical aesthetics market. Influence convinces women that self-improvement through medical means is valid and safe when done by professionals.'
  },
  {
    id: 35,
    name: 'Najea Ramadan',
    handle: '@najea.ramadan',
    trustScore: 'Med',
    archetype: 'The Abu Dhabi Esthete',
    profile: 'Based specifically in Abu Dhabi. Macro-influencer (440k+) focusing on lifestyle, art, culture.',
    mechanism: 'Content reflects capital\'s slower, more cultured pace compared to Dubai. Influences "social health"—where to eat, where to walk, how to enjoy city\'s cultural wellness offerings.',
    impact: 'Defines "healthy social life" of Abu Dhabi resident, promoting venues offering nutritious food and culturally enriching experiences.'
  },
  {
    id: 36,
    name: 'Dana Elarabeed',
    handle: '@deliacarrasco / @danaelarabeed',
    trustScore: 'Med',
    archetype: 'The Capital Mom',
    profile: 'Key figure for Abu Dhabi family demographic. Blog and social channels guide mothers through raising children in capital.',
    mechanism: 'Reviews kid-friendly activities, healthy dining options, family wellness events. Audience trusts for logistical health decisions—where to go and what to buy for family.',
    impact: 'Drives footfall to family-centric health initiatives in Abu Dhabi, acting as trusted filter for moms.'
  },
  {
    id: 37,
    name: 'Sidra Hafeez',
    handle: '@sidra.hafeez (Abu Dhabi based)',
    trustScore: 'Med',
    archetype: 'The Gen Z Entertainer',
    profile: 'Represents younger generation of Abu Dhabi creators. Content is entertainment-first, but includes lifestyle trends relevant to youth wellness.',
    mechanism: 'Utilizes humor and skits to engage demographic that often tunes out traditional health advice.',
    impact: 'Subtly integrates wellness trends (mental health breaks, active weekends) into entertainment, making them palatable for Gen Z.'
  },
  {
    id: 38,
    name: 'Taim Al Falasi',
    handle: '@taimalfalasi',
    trustScore: 'Med',
    archetype: 'The Digital Pioneer',
    profile: 'One of UAE\'s original influencers. Massive reach. Reviews of restaurants and lifestyle concepts often dictate trends.',
    mechanism: 'If endorses healthy eating concept or wellness retreat, gains instant credibility among local Emirati population.',
    impact: 'Bridges gap between traditional Emirati dining and modern health-conscious food trends.'
  },
  {
    id: 39,
    name: 'Walid Yari',
    handle: '@walidyari',
    trustScore: 'High',
    archetype: 'The Data-Driven Athlete',
    profile: 'Fitness phenomenon known for extreme physical feats and analytical approach to training.',
    mechanism: 'Content appeals to men who view bodies as machines to be optimized. Regular face at Dubai Fitness Challenge.',
    impact: 'Promotes "limitless potential," encouraging men to push physical boundaries through discipline and data.'
  },
]

const fitnessNutrition = [
  {
    id: 41,
    name: 'Coach Lamis',
    handle: '@coach.lamis',
    trustScore: 'High',
    archetype: 'The Female Force',
    profile: 'With nearly 180k followers, top tier fitness influencer in UAE. Focuses on empowering women through strength training.',
    mechanism: 'Actively dismantles myth that lifting weights makes women "bulky." Content provides accessible, effective workout routines.',
    impact: 'Changing female fitness paradigm from "cardio for weight loss" to "strength for longevity."'
  },
  {
    id: 42,
    name: 'Chahna Soni',
    handle: '@chahnasoni',
    trustScore: 'Med',
    archetype: 'The Wellness Curator',
    profile: 'Boasts some of highest engagement rates in UAE wellness sector. Content is holistic mix of fitness, nutrition, mindset.',
    mechanism: 'Packages health as aesthetic lifestyle. Audience trusts recommendations for supplements, activewear, gyms implicitly.',
    impact: 'Makes health desirable. Influence drives consumption of wellness products, fueling health economy.'
  },
  {
    id: 43,
    name: 'Giovanni (Gio) Fit',
    handle: '@giovanni_gio_fit',
    trustScore: 'High',
    archetype: 'The Body Sculptor',
    profile: 'Major fitness authority with over 460k followers. Focus on total body transformation.',
    mechanism: 'Content serves as direct "fit-spiration." Champions "hard work" ethos, showing grit required for physical change.',
    impact: 'Appeals to those seeking drastic results, reinforcing correlation between discipline and physical outcome.'
  },
  {
    id: 44,
    name: 'Yasmin Wahbi',
    handle: '@yasmin_wahbi',
    trustScore: 'High',
    archetype: 'The Entrepreneurial Trainer',
    profile: 'Founder of Befitladies gym. Combines personal training with business acumen. Targets women seeking female-only fitness spaces.',
    mechanism: 'Represents success that comes from disciplined lifestyle. Creates safe spaces for women to train.',
    impact: 'Facilitates fitness for women who may be culturally or personally uncomfortable in mixed gyms, expanding market of active women.'
  },
  {
    id: 45,
    name: 'Laiba Yasir',
    handle: '@lifestyleswithlaiba',
    trustScore: 'Med',
    archetype: 'The Holistic Guide',
    profile: 'Licensed influencer covering fitness, skincare, food. Represents intersection of beauty and fitness.',
    mechanism: 'Audience follows for "total package" approach—looking good means exercising and eating right.',
    impact: 'Links fitness to beauty standards, motivating demographic driven by aesthetics to adopt healthy habits.'
  },
  {
    id: 46,
    name: 'Sara Andari (Leanology)',
    handle: '@leanology',
    trustScore: 'High',
    archetype: 'The Science-Based Nutritionist',
    profile: 'Fitness Nutrition Specialist with over 800k followers. Brand, Leanology, focuses on sustainable, science-backed weight loss.',
    mechanism: 'Counters fad diets with nutritional facts. Massive following indicates hunger for credible weight loss advice.',
    impact: 'Educates public on caloric deficits and macronutrients, moving conversation away from "magic pills" to "energy balance."'
  },
  {
    id: 47,
    name: 'Suzanne Cork',
    handle: '@suzanne_cork',
    trustScore: 'High',
    archetype: 'The Mindful Yogi',
    profile: 'Combines nutrition (sugar/dairy-free) with yoga instruction. Appeals to expat community seeking natural wellness.',
    mechanism: 'Content offers calm counter-narrative to high-intensity fitness industry.',
    impact: 'Promotes food as medicine and movement as therapy, appealing to those seeking balance over intensity.'
  },
  {
    id: 48,
    name: 'Noura Shbeeb',
    handle: 'Digital presence via Dubai TV',
    trustScore: 'High',
    archetype: 'The Serene Teacher',
    profile: 'International yoga instructor appearing on Dubai TV, advocating for mindfulness and prenatal yoga.',
    mechanism: 'Presence on traditional TV gives credibility with older demographics, while yoga expertise attracts youth.',
    impact: 'Key figure for maternal health wellness, normalizing yoga during pregnancy.'
  },
  {
    id: 49,
    name: 'Allaoua Gaham',
    handle: '@allaouagaham',
    trustScore: 'High',
    archetype: 'The Yoga Drill Sergeant',
    profile: 'Known for "military meets yoga" style. Brings intensity to mindfulness.',
    mechanism: 'Breaks stereotype that yoga is "soft," making it appealing to men who usually lift weights.',
    impact: 'Expands yoga demographic to include men, promoting flexibility and mental focus as masculine traits.'
  },
  {
    id: 50,
    name: 'Stephany Gutierrez',
    handle: '@estephany_gutierre',
    trustScore: 'Med',
    archetype: 'The Natural Builder',
    profile: 'With over 900k followers, promotes natural bodybuilding and nutrition.',
    mechanism: 'Challenges female body image norms, promoting muscularity and strength.',
    impact: 'Empowers women to take up space and build muscle, shifting goal from "skinny" to "strong."'
  },
]
