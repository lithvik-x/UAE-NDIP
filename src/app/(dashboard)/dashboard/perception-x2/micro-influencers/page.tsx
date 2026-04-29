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
  Baby,
  Biohazard,
  Bone,
  Brain,
  BriefcaseMedical,
  Building,
  Building2,
  Calendar,
  CheckCircle2,
  Coffee,
  Dna,
  Droplets,
  Eye,
  Flame,
  Flower2,
  Footprints,
  Ghost,
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
  Wind,
} from 'lucide-react'

type BadgeVariant = 'success' | 'warning' | 'info' | 'default' | 'destructive' | 'outline' | 'secondary' | 'red' | 'rose' | 'orange' | 'gold' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'denim' | 'indigo' | 'purple' | 'fuchsia'

export default function MicroInfluencersPage() {
  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="emerald" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-emerald">Micro-Influencer Network</h1>
          <p className="mt-2 text-slate-600">
            Comprehensive analysis of 50 grassroots health influencers driving behavior change in Abu Dhabi (2025-2026)
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Search Network
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-white gap-2">
            <UserPlus className="h-4 w-4" />
            Add Influencer
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Micro-Influencers"
          value="50"
          previousValue={42}
          icon={<Users className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Medical Trenches"
          value="20"
          previousValue={16}
          icon={<Stethoscope className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Wellness Warriors"
          value="20"
          previousValue={18}
          icon={<Activity className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Mommy Bloggers"
          value="10"
          previousValue={8}
          icon={<Baby className="h-6 w-6" />}
          gradient="cyan"
        />
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="medical">Medical Trenches</TabsTrigger>
          <TabsTrigger value="wellness">Wellness Warriors</TabsTrigger>
          <TabsTrigger value="mommy">Mommy Bloggers</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="The Architecture of Trust" description="Understanding grassroots influence in Abu Dhabi's health ecosystem" badge="Network Analysis">
            <div className="space-y-6">
              {/* Executive Summary */}
              <Card className="glass-card border-emerald-200 bg-emerald-50/20">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                      <Shield className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-emerald-900">The Trust Deficit Solution</CardTitle>
                      <CardDescription className="text-emerald-700/80 mt-2">
                        Traditional mechanisms of influence—billboards, ministerial circulars, celebrity endorsements—are facing diminishing returns. In their place, a robust ecosystem of <strong>Micro-Influencers (5k-50k followers)</strong> has emerged as the primary engine of behavioral change. These individuals operate not on "reach" but on "trust."
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Three Cluster Cards */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card border-rose-200 bg-rose-50/30">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 mb-4">
                      <BriefcaseMedical className="h-6 w-6 text-rose-600" />
                    </div>
                    <CardTitle className="text-lg text-rose-900">Medical Trenches</CardTitle>
                    <CardDescription className="text-rose-700">The Clinical Humanizers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-rose-800">
                      Nurses, medical residents, and allied health professionals dismantling the "ivory tower" perception of hospitals. By documenting realities of ER at SSMC or oncology wards at Tawam Hospital, they transform clinical facilities into humanized communities.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-rose-700">Total Influencers</span>
                        <span className="font-bold text-rose-900">20</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-rose-700">Avg Engagement</span>
                        <span className="font-bold text-rose-900">&gt;3%</span>
                      </div>
                      <Progress value={90} className="h-2 bg-rose-200" />
                    </div>
                    <div className="pt-2 border-t border-rose-200">
                      <p className="text-xs text-rose-600 font-semibold">KEY INSTITUTIONS:</p>
                      <p className="text-xs text-rose-700 mt-1">SSMC, Tawam Hospital, Danat Al Emarat, GMU</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-purple-200 bg-purple-50/30">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 mb-4">
                      <Activity className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg text-purple-900">Wellness Warriors</CardTitle>
                    <CardDescription className="text-purple-700">The Active Architects</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-purple-800">
                      Captains of run clubs, founders of yoga sanctuaries, pioneers of biohacking physically engineering the #ActiveAbuDhabi lifestyle. Function as community organizers providing "Third Places" for social wellness.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-purple-700">Total Influencers</span>
                        <span className="font-bold text-purple-900">20</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-purple-700">Impact Level</span>
                        <Badge variant="success" className="text-xs">High Activation</Badge>
                      </div>
                      <Progress value={85} className="h-2 bg-purple-200" />
                    </div>
                    <div className="pt-2 border-t border-purple-200">
                      <p className="text-xs text-purple-600 font-semibold">KEY ACTIVITIES:</p>
                      <p className="text-xs text-purple-700 mt-1">Run clubs, Yoga studios, Biohacking, Fitness</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-cyan-200 bg-cyan-50/30">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 mb-4">
                      <Baby className="h-6 w-6 text-cyan-600" />
                    </div>
                    <CardTitle className="text-lg text-cyan-900">Mommy Bloggers</CardTitle>
                    <CardDescription className="text-cyan-700">The Decision Makers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-cyan-800">
                      Gatekeepers of family health. Network extends beyond curation to administrators of massive information nodes like Abu Dhabi Q&A and Real Mums UAE. Navigate healthcare economics, reviewing maternity and pediatric services.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-cyan-700">Total Influencers</span>
                        <span className="font-bold text-cyan-900">10</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-cyan-700">Trust Level</span>
                        <Badge variant="info" className="text-xs">Community Guardians</Badge>
                      </div>
                      <Progress value={95} className="h-2 bg-cyan-200" />
                    </div>
                    <div className="pt-2 border-t border-cyan-200">
                      <p className="text-xs text-cyan-600 font-semibold">KEY PLATFORMS:</p>
                      <p className="text-xs text-cyan-700 mt-1">Facebook groups, YouTube, Instagram</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Strategic Recommendations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Strategic Recommendations</CardTitle>
                  <CardDescription>Actionable paths for engaging with grassroots influencers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-4 rounded-lg bg-rose-50 border border-rose-200">
                      <div className="flex items-center gap-2 mb-2">
                        <BriefcaseMedical className="h-5 w-5 text-rose-600" />
                        <h4 className="font-semibold text-rose-900">Operationalize Medical Trenches</h4>
                      </div>
                      <p className="text-sm text-rose-700">Formalize "Digital Ambassador" roles. Media training for nurses and residents to document safety checks and study sessions.</p>
                    </div>

                    <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="h-5 w-5 text-purple-600" />
                        <h4 className="font-semibold text-purple-900">Sponsor Wellness Infrastructure</h4>
                      </div>
                      <p className="text-sm text-purple-700">Sponsor venues for run clubs, hydration for Striders. Embed brand into community habits rather than posts.</p>
                    </div>

                    <div className="p-4 rounded-lg bg-cyan-50 border border-cyan-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Baby className="h-5 w-5 text-cyan-600" />
                        <h4 className="font-semibold text-cyan-900">Expertise Over Ads</h4>
                      </div>
                      <p className="text-sm text-cyan-700">Propose "Ask the Expert" AMAs in Facebook groups. Provide value to community while positioning hospital as trusted authority.</p>
                    </div>

                    <div className="p-4 rounded-lg bg-indigo-50 border border-indigo-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Wind className="h-5 w-5 text-indigo-600" />
                        <h4 className="font-semibold text-indigo-900">Validate Biohackers</h4>
                      </div>
                      <p className="text-sm text-indigo-700">Partner for "Executive Stress Resilience" workshops using ice baths and breathwork. Position health as performance optimization.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <Card className="glass-card border-emerald-200 bg-emerald-50/20">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                      <Sparkles className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-emerald-900">The Human Infrastructure</CardTitle>
                      <CardDescription className="text-emerald-700/80 mt-2">
                        The health of Abu Dhabi is not being decided in boardrooms, but in comment sections of Abu Dhabi Q&A, on running tracks of Zayed Sports City, and in nursing stations of Tawam Hospital. These 50 micro-influencers act as the nervous system of the city&apos;s wellness. They translate policy into practice, fear into understanding, and isolation into community.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Medical Trenches Tab */}
        <TabsContent value="medical" className="space-y-6">
          <GlassPanel title="Medical Trenches" description="Healthcare professionals bridging the gap between patient and provider" badge="20 Profiles">
            <div className="space-y-4">
              {medicalTrenches.map((influencer, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={influencer.badge as BadgeVariant} className="text-xs">{influencer.category}</Badge>
                          <h4 className="font-bold text-slate-900">#{influencer.id}: {influencer.name}</h4>
                        </div>
                        <p className="text-sm text-slate-600 italic">{influencer.handle}</p>
                        <p className="text-sm font-semibold text-rose-700 mt-2">{influencer.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">{influencer.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Wellness Warriors Tab */}
        <TabsContent value="wellness" className="space-y-6">
          <GlassPanel title="Wellness Warriors" description="Run clubs, yoga studios, and biohackers engineering the #ActiveAbuDhabi lifestyle" badge="20 Profiles">
            <div className="space-y-4">
              {wellnessWarriors.map((influencer, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={influencer.badge as BadgeVariant} className="text-xs">{influencer.category}</Badge>
                          <h4 className="font-bold text-slate-900">#{influencer.id}: {influencer.name}</h4>
                        </div>
                        <p className="text-sm text-slate-600 italic">{influencer.handle}</p>
                        <p className="text-sm font-semibold text-purple-700 mt-2">{influencer.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">{influencer.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Mommy Bloggers Tab */}
        <TabsContent value="mommy" className="space-y-6">
          <GlassPanel title="Mommy Bloggers" description="Gatekeepers of family health and decision makers for healthcare services" badge="10 Profiles">
            <div className="space-y-4">
              {mommyBloggers.map((influencer, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={influencer.badge as BadgeVariant} className="text-xs">{influencer.category}</Badge>
                          <h4 className="font-bold text-slate-900">#{influencer.id}: {influencer.name}</h4>
                        </div>
                        <p className="text-sm text-slate-600 italic">{influencer.handle}</p>
                        <p className="text-sm font-semibold text-cyan-700 mt-2">{influencer.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">{influencer.content}</p>
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
const medicalTrenches = [
  { id: 1, name: 'Dr. Hanadi Hussami', handle: '@hanadi_hussami', category: 'Resident (UAE)', badge: 'rose', role: 'Medical Resident', content: '"Operating theater tips" – saving medical students from mistakes. Masterclass in edutainment with videos providing rare glimpses behind surgical wing doors. Mentors medical students and aspirants while reassuring patients with transparency.' },
  { id: 2, name: 'Nelson Bautista', handle: 'Clinical Resource Nurse', category: 'Nurse (Tawam)', badge: 'success', role: 'Hero Nurse', content: '"Your Health First" campaign updates; Aster award celebrations. Top 10 finalist for Aster Guardians Global Nursing Award. Content focuses on nurse welfare, indirectly reassuring patients that a cared-for nurse provides better care.' },
  { id: 3, name: 'Laiba Yasir', handle: '@lifestyleswithlaiba', category: 'Med Student', badge: 'rose', role: 'Lifestyle & Medicine', content: 'Balancing medical school rigor with UAE lifestyle. Shows how aspiring healthcare professionals maintain wellness while pursuing medical education.' },
  { id: 4, name: 'Asma Nasser Alblooshi', handle: 'Tawam Oncology', category: 'Nurse (Oncology)', badge: 'success', role: 'Oncology Angel', content: 'Patient stories on compassionate bone marrow procedures. In grim context of oncology, stories of compassion go viral within affected families, transforming Tawam from place of fear to place of hope.' },
  { id: 5, name: 'Shana B. Fernandez', handle: 'Tawam Infusion', category: 'Nurse (Infusion)', badge: 'success', role: 'Infusion Care', content: 'Testimonials on exceptional care in infusion center. DAISY award citations describe calming patients during procedures, creating viral stories of compassion within affected families.' },
  { id: 6, name: 'Dr. Nicole Sirotin', handle: 'SSMC Preventive Med', category: 'Chair Prev. Med', badge: 'rose', role: 'Physician-Educator', content: 'Talks on "Precision Medicine" and longevity lifestyles. High-level intellectual content appealing to educated demographic of Abu Dhabi. Discusses integration of genetic data and lifestyle interventions, branding SSMC as forward-thinking.' },
  { id: 7, name: 'Zulaikha Al Hosani', handle: 'SSMC CNO', category: 'Chief Nursing Officer', badge: 'success', role: 'Nursing Vanguard', content: 'Celebrating DAISY Award winners and nursing excellence. Created culture of digital visibility where nurse stories are celebrated. Enables fleet of nurses to share their wins through institutional support.' },
  { id: 8, name: 'Dr. Farzana Batt', handle: 'SSMC Internal Med', category: 'Consultant', badge: 'rose', role: 'Internal Medicine', content: '"Day in the Life" glimpses that normalize consultation process. Explaining internal medicine conditions to public with approachable style.' },
  { id: 9, name: 'Dr. Soumya V Chandu', handle: 'SSMC Resident', category: 'Senior Resident', badge: 'rose', role: 'Academic Medicine', content: 'Academic updates and resident life at SSMC. Shows journey of medical training within prestigious institution.' },
  { id: 10, name: 'Ali Saif Alkaabi', handle: 'SSMC Ortho', category: 'Resident (Ortho)', badge: 'rose', role: 'Orthopedic Surgery', content: 'The journey of an Emirati orthopedic surgeon. Documents pathway through orthopedic residency at SSMC.' },
  { id: 11, name: 'Saleh Meqbel Alseiari', handle: 'Tawam Anesthesia', category: 'Resident (Anesthesia)', badge: 'rose', role: 'Anesthesiology', content: 'Insights into anesthesia residency at Tawam Hospital. Provides look into this critical medical specialty.' },
  { id: 12, name: 'Leila Aljubeh', handle: 'SSMC Pediatrics', category: 'Resident (Peds)', badge: 'rose', role: 'Pediatric Medicine', content: 'Daily life in pediatric ward. Shows compassionate care provided to children in hospital setting.' },
  { id: 13, name: 'Fakhra Khalifa Al Rubaei', handle: 'SSMC ENT', category: 'Resident (ENT)', badge: 'rose', role: 'Otolaryngology', content: 'Updates from Otolaryngology department. Documents ear, nose, and throat specialty care.' },
  { id: 14, name: 'Dr. Mohamad Miqdady', handle: 'SKMC Pediatric', category: 'Division Chief', badge: 'rose', role: 'Pediatric Gastro', content: 'Pediatric gut health and nutrition advice videos. Specialized content addressing children\'s digestive health.' },
  { id: 15, name: 'Dr. Badreya Al Shehhi', handle: 'ADPHC', category: 'Public Health', badge: 'success', role: 'Public Health Advocate', content: 'Vaccination awareness and public health safety. Provides official guidance on immunization and community health measures.' },
  { id: 16, name: 'Dr. Jameel Rizwana', handle: 'GMU Optometry', category: 'Optometry', badge: 'rose', role: 'Vision Care', content: '"Binocular Vision Testing Made Easy" educational reels. Specialized content promoting vision care and optometry practices in region.' },
  { id: 17, name: 'Dr. Mandeep Singh', handle: 'Burjeel Fetal Med', category: 'Fetal Medicine', badge: 'rose', role: 'Fetal Medicine Specialist', content: 'Updates on in-utero surgeries including UAE\'s first spina bifida repair. News-driven content establishing Burjeel as center of excellence for high-risk pregnancies.' },
  { id: 18, name: 'Dr. Summia Zaher', handle: 'Danat CEO', category: 'CEO/Doctor', badge: 'success', role: 'Women\'s Health Leadership', content: 'Strategic updates on women\'s health standards. Leadership perspective on healthcare delivery for women.' },
  { id: 19, name: 'Nikita Sunil Binu', handle: 'GMU Pharmacy', category: 'Pharmacy Student', badge: 'purple', role: 'Gen Z Health', content: 'Celebrating pharmacy academic wins. Makes academic excellence aspirational for Gen Z demographic through competition victories and conference participation.' },
  { id: 20, name: 'Alla Laila', handle: 'GMU Research', category: 'Pharmacy Student', badge: 'purple', role: 'Pharmacy Research', content: 'Updates on pharmacy research and presentations. Documents academic journey through pharmaceutical studies.' },
]

const wellnessWarriors = [
  { id: 21, name: 'Bodytree Studio', handle: '@bodytreestudio', category: 'Wellness Hub', badge: 'purple', role: 'Community Anchor', content: 'Community event announcements like "Yoga Market." Bodytree is wellness institution with decade-long history of curated "Wellness Lifestyle" narrative for Abu Dhabi.' },
  { id: 22, name: 'Nadia Sehweil', handle: 'Bodytree Founder', category: 'Founder', badge: 'success', role: 'Wellness Matriarch', content: 'Philosophy of "Bodytree Body" method. Deeply respected micro-influencer who has curated wellness narrative for over decade, mixing business updates with personal philosophy.' },
  { id: 23, name: 'Sharifa Sehweil', handle: 'Bodytree Co-Founder', category: 'Founder', badge: 'success', role: 'Maternal Wellness', content: 'Maternal wellness and community healing posts. Provides guidance on integrating wellness into family life and motherhood.' },
  { id: 24, name: 'Sasha Quince', handle: 'Yoga Teacher', category: 'Yoga', badge: 'purple', role: 'Mind-Body Bridge', content: '"Heal You, Heal Your Relationships" yoga flows. Bridges gap between physical fitness and mental health with vulnerable and instructional posts driving engagement from women seeking emotional release.' },
  { id: 25, name: 'Yoga One UAE', handle: '@yogaoneuae', category: 'Yoga Studio', badge: 'purple', role: 'Yoga Community', content: 'Recaps of Wim Hof workshops and challenges. Documents breathwork and cold exposure community events.' },
  { id: 26, name: 'Gulnara Alekseeva', handle: 'Flo Fitness', category: 'Trainer', badge: 'purple', role: 'Ballet Fitness', content: 'Ballet-inspired fitness and form correction. With ballet background, content appeals to "precision" aspect of fitness with rigorous, aesthetic focus.' },
  { id: 27, name: 'Eugenie Gardien', handle: 'Flo Fitness', category: 'Trainer', badge: 'purple', role: 'Pelvic Health Specialist', content: 'Pilates for pelvic floor health with post-natal focus. Addresses critical, often taboo topic driving high private engagement among mothers.' },
  { id: 28, name: 'Steve Watson', handle: 'Gulf Multi Sport', category: 'Run Organizer', badge: 'success', role: 'Race Logistics', content: 'Logistics and hype for ADNOC Marathon and community runs. Manages racing calendar of city through Gulf Multi Sport. When posts about route changes, entire running community pays attention.' },
  { id: 29, name: 'Daniel', handle: 'Abu Dhabi Striders', category: 'Running Club', badge: 'success', role: 'Youth Running', content: 'Youth engagement in "Inter-Schools Aquathlon." Focuses on developing next generation of runners through school programs.' },
  { id: 30, name: 'Ahmed Saadedin', handle: 'Adidas Runners', category: 'Coach', badge: 'purple', role: 'Community Running', content: 'Leading community run warm-ups and cheers. Utilizes "Squad" mentality by tagging participants and reposting user-generated content, creating feedback loop of visibility.' },
  { id: 31, name: 'Mahmoud Italiano', handle: 'Adidas Runners', category: 'Coach', badge: 'purple', role: 'High-Energy Coach', content: 'High-energy reels of interval training sessions. Cool face of running with high-energy montages of warm-ups, sprints, and social cheers.' },
  { id: 32, name: 'Florine Baudoin', handle: 'Flow of Life', category: 'Biohacker', badge: 'fuchsia', role: 'Wim Hof Instructor', content: 'Reaction videos of first-time ice bathers. Features people overcoming fear and stepping into cold—highly shareable content. Explains science of method (reducing inflammation, boosting immunity) to legitimize for skeptics.' },
  { id: 33, name: 'Bechara El Khoury', handle: 'Wim Hof Instructor', category: 'Biohacker', badge: 'fuchsia', role: 'Survival Coach', content: 'Outdoor survival and breathwork retreats. Combines cold exposure with "survival" and "rewilding" themes, tapping into desire for nature connection in desert city.' },
  { id: 34, name: 'Andrii Bezruk', handle: 'Wim Hof Instructor', category: 'Biohacker', badge: 'fuchsia', role: 'Functional Fitness', content: 'Functional fitness and cold exposure workshops. Helps participants build resilience through breathwork and cold training.' },
  { id: 35, name: 'Dani Afiouni', handle: 'Longevity Wellness Hub', category: 'Biohacker', badge: 'fuchsia', role: 'Recovery Tech', content: 'Educational content on Red Light and Hyperbaric therapy. Mobile unit "The Beast" brings modalities to events like marathon, physically inserting biohacking into mainstream.' },
  { id: 36, name: 'AJ Fitness Coach', handle: '@aj_fitnesscoach', category: 'Fitness Coach', badge: 'purple', role: 'Natural Bodybuilding', content: '"Trust yourself" natural bodybuilding motivation. Promotes drug-free fitness and disciplined training approach.' },
  { id: 37, name: 'Yasmin Wahbi', handle: 'BeFitLadies', category: 'Fitness Trainer', badge: 'purple', role: 'Women\'s Strength', content: '"BeFitLadies" content empowering women lifting. Founder of gym creating safe spaces for women to train and build strength.' },
  { id: 38, name: 'Chahna Soni', handle: '@chahnasoni', category: 'Wellness Blogger', badge: 'success', role: 'Anchor Influencer', content: 'Lifestyle and health integration posts. High engagement rates in UAE wellness sector with holistic mix of fitness, nutrition, mindset.' },
  { id: 39, name: 'Giovanni Fit', handle: '@giovanni_gio_fit', category: 'Fitness Coach', badge: 'purple', role: 'Body Transformation', content: 'Diet and workout tips for UAE lifestyle. Major fitness authority with focus on total body transformation and "hard work" ethos.' },
  { id: 40, name: 'Coach Lamis', handle: '@coach.lamis', category: 'Fitness Coach', badge: 'purple', role: 'Female Strength', content: 'Female transformation stories and consistency tips. Top tier fitness influencer empowering women through strength training, actively dismantling myth that lifting makes women "bulky."' },
]

const mommyBloggers = [
  { id: 41, name: 'Freya Jaffar', handle: 'Abu Dhabi Q&A Admin', category: 'Community Architect', badge: 'cyan', role: 'Community Protector', content: 'Founder of Abu Dhabi Q&A (15k-49k+ members). First port of call for any health query. Search for "best dermatologist" yields verified, peer-reviewed results. Influence built on moderation—keeping group free of spam and scams.' },
  { id: 42, name: 'Rachael Partington', handle: 'Abu Dhabi Q&A Admin', category: 'Community Architect', badge: 'cyan', role: 'Special Needs Advocate', content: 'Admin reinforcing trust through moderation. Involvement in CP Sport (Cerebral Palsy) adds layer of advocacy for special needs, making group inclusive and trusted by families with diverse needs.' },
  { id: 43, name: 'Tracy Roake', handle: 'Danat Midwife', category: 'Clinical Mom', badge: 'success', role: 'Safety Advocate', content: 'Educator and midwife at Danat Al Emarat. Work with PROMPT training (obstetric emergencies) signals to mothers that Danat is safe. When shares content about safety protocols, it\'s not marketing—it\'s a safety briefing.' },
  { id: 44, name: 'Julie Fraifer', handle: 'Danat Lactation', category: 'Clinical Mom', badge: 'success', role: 'Feeding Specialist', content: 'Lactation consultant at Danat addressing #1 anxiety for new moms: feeding. Content is technical (how to latch, how to pump) but delivered with maternal empathy. Solves acute problems with deep, grateful engagement.' },
  { id: 45, name: 'Real Mums UAE', handle: 'Community Platform', category: 'Aggregator', badge: 'cyan', role: 'Review Curator', content: 'Reviews of "Real Housewives" events and services. Aggregates delivery vlogs creating repository of "approved" providers. Mixes glamour with gritty reality, keeping engagement high.' },
  { id: 46, name: 'Gingerbread Mum', handle: 'Blogger', category: 'Reviewer', badge: 'cyan', role: 'Insurance Reviewer', content: '"AIA Vitality Health Check" detailed review and cashback. Provides practical information navigating insurance health benefits and reimbursement processes.' },
  { id: 47, name: 'The Fire Fighter Mom', handle: 'Special Needs Advocate', category: 'Advocate', badge: 'cyan', role: 'Disability Awareness', content: '"Red Hand Challenge" for special needs awareness. Advocacy content creating inclusive dialogue around disabilities and special needs community support.' },
  { id: 48, name: 'Maria', handle: 'Abu Dhabi Q&A Admin', category: 'Community Architect', badge: 'cyan', role: 'Inclusion Advocate', content: 'Admin advocating for inclusive facilities in Abu Dhabi. Works to ensure city infrastructure accommodates families with diverse needs.' },
  { id: 49, name: 'Zubshiv Vlog', handle: 'Delivery Vlogger', category: 'Vlogger', badge: 'cyan', role: 'Hospital Reviewer', content: '"Abu Dhabi Emergency Visit Part 2" (Corniche delivery). Detailed videos of experiences showing VIP suites, food quality, nursing staff attitude. Provides transparency more persuasive than hospital tours.' },
  { id: 50, name: 'Vibe with Hinaa', handle: 'Delivery Vlogger', category: 'Vlogger', badge: 'cyan', role: 'Room & Care Review', content: '"2 Days at Corniche Hospital" room and care review. Virtual tours showing actual rooms, discussing costs (packages 7k-10k AED). Helps families decide between hospital packages based on real experiences.' },
]
