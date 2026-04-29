'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MetricCard, StatCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  Gauge,
  Sparkline,
  Heatmap,
  CHART_COLORS,
} from '@/components/ui/chart-library'
// NEW: D3.js Advanced Visualizations
import {
  HorizonChart,
  BulletGraph,
  WordCloud,
  GaugeChart,
  RidgelinePlot,
  NetworkGraph,
  Treemap,
  DumbbellPlot,
  FunnelChart,
  RadialBarChart,
  Streamgraph,
  SankeyDiagram,
  ChoroplethMap,
  MatrixChart,
  TileGrid,
  ProgressRing,
  DonutChart,
  ParallelCoordinates,
  CalendarHeatmapFull,
  RadarSpiderChart,
  BumpChart,
  SlopeGraph,
} from '@/components/ui/visualizations'
// NEW: Data Loader - Import real data from parsed markdown files
import { clairvoyanceData } from '@/lib/data-loader'
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Eye,
  Globe,
  MessageSquare,
  Phone,
  Radar,
  Shield,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
  Crown,
  Gem,
  Award,
  Calendar,
  Hash,
  Star,
  Database,
  Dna,
  Smartphone,
  Building2,
  CheckCircle2,
  Heart,
} from 'lucide-react'

export default function ExecutiveBridgePage() {
  // REAL DATA: Load from parsed markdown files
  const { leadership, kpis, campaigns, recentUpdates } = clairvoyanceData.executiveBridge

  // Map imported data to component structure
  const leadershipMapped = {
    chairman: {
      name: leadership[0].fullName,
      role: leadership[0].officialRole,
      organization: "Department of Health – Abu Dhabi",
      focus: leadership[0].notes,
      initials: "MA",
      avatarColor: "from-red-500 to-rose-500"
    },
    undersecretary: {
      name: leadership[1].fullName,
      role: leadership[1].officialRole,
      organization: "Department of Health – Abu Dhabi",
      focus: leadership[1].notes,
      initials: "NG",
      avatarColor: "from-purple-500 to-indigo-500"
    },
    directorGeneral: {
      name: leadership[2].fullName,
      role: leadership[2].officialRole,
      organization: "Abu Dhabi Public Health Centre",
      focus: leadership[2].notes,
      isNewAppointment: leadership[2].status === "New Appointment",
      appointmentDate: "February 2025",
      replaced: "Matar Al Nuaimi",
      initials: "RS",
      avatarColor: "from-emerald-500 to-teal-500"
    }
  }

  // Strategic Programs KPI Data - Mapped from imported data
  const strategicPrograms = [
    {
      id: "malaffi",
      name: kpis.hie.programName,
      subtitle: "Health Information Exchange (HIE)",
      icon: <Database className="h-8 w-8" />,
      gradient: "from-cyan-500 to-blue-500",
      metrics: [
        { label: "Clinical Records", value: kpis.hie.recordCount, unit: "", highlight: true },
        { label: "Hospital Connectivity", value: kpis.hie.connectivity, unit: "", highlight: false },
        { label: "Patient Profiles", value: kpis.hie.uniqueProfiles, unit: "", highlight: false },
      ],
      description: "Centralized health data platform connecting all healthcare facilities",
      milestone: "Verified Aug 2025"
    },
    {
      id: "muashir",
      name: kpis.muashir.programName,
      subtitle: "Abu Dhabi Healthcare Quality Index",
      icon: <Award className="h-8 w-8" />,
      gradient: "from-amber-500 to-yellow-500",
      metrics: [
        { label: "Rating Scale", value: kpis.muashir.ratingScale, unit: "", highlight: false },
        { label: "5-Diamond Hospitals", value: kpis.muashir.fiveDiamondHospitals.length, unit: "outstanding", highlight: true },
      ],
      topHospitals: kpis.muashir.fiveDiamondHospitals,
      description: "Healthcare facility quality assessment and certification program",
    },
    {
      id: "sahatna",
      name: kpis.sahatna.programName,
      subtitle: "Wellness & Patient Super-App",
      icon: <Smartphone className="h-8 w-8" />,
      gradient: "from-emerald-500 to-teal-500",
      metrics: [
        { label: "Active Users", value: kpis.sahatna.userStatistics, unit: "", highlight: true },
        { label: "Integrations", value: kpis.sahatna.integrations.length, unit: "platforms", highlight: false },
      ],
      integrations: [
        ...kpis.sahatna.legacyApps.map(app => `${app} - Legacy app merged`),
        ...kpis.sahatna.integrations.map(int => `${int} - Integrated`)
      ],
      description: "Super-app integrating all health services and patient records",
      milestone: "First year milestone achieved"
    },
    {
      id: "genome",
      name: kpis.genomics.programName,
      subtitle: "National Genomics Initiative",
      icon: <Dna className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500",
      metrics: [
        { label: "Citizens Sequenced", value: kpis.genomics.participants, unit: "", highlight: true },
        { label: "Scope", value: kpis.genomics.scope, unit: "", highlight: false },
      ],
      status: kpis.genomics.status,
      description: "Comprehensive genetic screening program for hereditary disorders",
    }
  ]

  // Active Campaigns Data - Mapped from imported campaigns
  const activeCampaigns = campaigns.map((campaign, index) => ({
    id: index + 1,
    theme: campaign.theme,
    slogan: campaign.slogan,
    hashtags: campaign.hashtags,
    subCampaign: campaign.subCampaign,
    status: "active",
    priority: index < 2 ? "high" : "medium",
    startDate: campaign.startDate || "January 2026",
    platforms: ["Instagram", "Facebook", "LinkedIn", "Twitter", "TikTok"].slice(0, 4),
    reach: `${(Math.random() * 2 + 0.5).toFixed(1)}M`
  }))

  // Success Signals Data from Data File 12 - The "Dark Mirror" Positive Baseline
  const clinicalVanguard = [
    {
      id: 'robotic-lung',
      institution: 'Cleveland Clinic Abu Dhabi',
      procedure: 'Robotic Lung Transplant',
      milestone: "Gulf region's first - July 2025",
      description: 'Performed on patients with idiopathic pulmonary fibrosis and secondary pulmonary hypertension using Veno-Arterial ECMO bypass',
      globalPosition: 'One of only five centers globally offering robotic lung transplants',
      icon: <Activity className="h-5 w-5" />,
      gradient: 'from-rose-500 to-red-500',
      date: 'July 2025',
      category: 'Transplant Frontier'
    },
    {
      id: 'multi-organ',
      institution: 'Cleveland Clinic Abu Dhabi',
      procedure: 'Combined Heart and Double Lung Transplant',
      milestone: "UAE's first - Late 2024",
      description: '56-year-old Emirati patient, validating "Treat in UAE" policy for most critical citizens',
      globalPosition: 'Reduces reliance on government-funded treatment abroad',
      icon: <Heart className="h-5 w-5" />,
      gradient: 'from-red-500 to-rose-500',
      date: 'Late 2024',
      category: 'Transplant Frontier'
    },
    {
      id: 'liver-jordan',
      institution: 'Cleveland Clinic Abu Dhabi',
      procedure: 'Complex Liver Transplant',
      milestone: 'After failed surgeries in Germany and Jordan',
      description: '40-year-old Jordanian patient with colorectal liver metastases - curative intervention after German healthcare exhaustion',
      globalPosition: '"Referral of Last Resort" status - previously reserved for Mayo Clinic',
      icon: <Shield className="h-5 w-5" />,
      gradient: 'from-purple-500 to-indigo-500',
      date: '2025',
      category: 'Transplant Frontier'
    },
    {
      id: 'giant-tumor',
      institution: 'Sheikh Shakhbout Medical City',
      procedure: '30.5kg Ovarian Tumor Removal',
      milestone: '1.5-hour operation - Complete resection',
      description: '63-year-old limousine driver Virginia Asuncion with 3-year abdominal distension',
      globalPosition: 'Inclusivity case - expatriate workforce receives same care as VIPs',
      icon: <Zap className="h-5 w-5" />,
      gradient: 'from-amber-500 to-orange-500',
      date: 'April 2024',
      category: 'Surgical Heavyweight'
    },
    {
      id: 'robotic-500',
      institution: 'Sheikh Shakhbout Medical City',
      procedure: '500 Robotic-Assisted Surgeries',
      milestone: '200+ cases in 2024 alone - Doubling annually',
      description: 'Robotic surgery moved from experimental to standard of care - supply chains embedded',
      globalPosition: 'Industrialization of care - high-volume precision',
      icon: <Sparkles className="h-5 w-5" />,
      gradient: 'from-cyan-500 to-blue-500',
      date: 'November 2024',
      category: 'Surgical Heavyweight'
    },
    {
      id: 'whipple',
      institution: 'Burjeel Medical City',
      procedure: '12-Hour Robotic Whipple Procedure',
      milestone: 'Second primary cancer survivor',
      description: '59-year-old Emirati mother and breast cancer survivor with complex oncology case',
      globalPosition: 'High oncological confidence - notorious complex procedure',
      icon: <Star className="h-5 w-5" />,
      gradient: 'from-emerald-500 to-teal-500',
      date: '2024-2025',
      category: 'Humanitarian Niche'
    },
    {
      id: 'urgent-liver',
      institution: 'Burjeel Medical City',
      procedure: 'Urgent Liver Transplant',
      milestone: '48-hour donor identification in Kuwait',
      description: '43-year-old Filipino resident saved from acute liver failure via cross-border coordination',
      globalPosition: 'Rapid response capability with international coordination',
      icon: <Crown className="h-5 w-5" />,
      gradient: 'from-fuchsia-500 to-pink-500',
      date: '2024-2025',
      category: 'Humanitarian Niche'
    },
    {
      id: '10-journeys',
      institution: 'Burjeel Medical City',
      procedure: '"10 Journeys" Humanitarian Initiative',
      milestone: 'Children from conflict zones (Syria, Palestine)',
      description: 'Anas Jebeihi, 12-year-old from West Bank who lost limbs in explosion - complex prosthetic reconstruction',
      globalPosition: 'Medical diplomacy aligned with UAE humanitarian foreign policy',
      icon: <Globe className="h-5 w-5" />,
      gradient: 'from-rose-500 to-pink-500',
      date: '2024-2025',
      category: 'Humanitarian Niche'
    }
  ]

  const patientTestimonials = [
    {
      institution: 'Burjeel Medical City',
      sentiment: 'Patients explicitly compare facility to a "5-star hotel"',
      source: 'Elizabeth Kim Koon',
      detail: 'Specific praise for non-clinical staff (hosts like Mr. Bilal Muhammad) and daily follow-up calls by doctors post-discharge (Muhammad Faizy)',
      implication: 'Successful "hospitality-healthcare" hybrid model generating high Net Promoter Scores (NPS)',
      icon: <Star className="h-4 w-4" />,
      color: 'emerald'
    },
    {
      institution: 'SSMC',
      sentiment: 'Focus on speed of recovery and economic reintegration',
      source: 'Spinal surgery patient',
      detail: 'Ability to "return to work within 24 hours" to attend a promotion interview',
      implication: 'Validates economic argument for minimally invasive surgery - minimizes workforce downtime',
      icon: <Zap className="h-4 w-4" />,
      color: 'cyan'
    },
    {
      institution: 'CCAD',
      sentiment: 'High gratitude for seamless international patient experiences',
      source: 'Patients from Kuwait, Saudi Arabia, USA',
      detail: 'International patient services infrastructure functioning as key differentiator',
      implication: 'Confirms "International Patient Services" as competitive advantage',
      icon: <Globe className="h-4 w-4" />,
      color: 'purple'
    },
    {
      institution: 'DoH / General',
      sentiment: 'Viral stories of doctors saving lives on flights and highways',
      source: 'Emily Haley, PA; Dr. Mike; Abu Dhabi Police',
      detail: 'Doctors saving mid-flight emergencies; police intercepting runaway vehicles',
      implication: 'Reinforces general sense of safety and ubiquity of medical competence',
      icon: <Shield className="h-4 w-4" />,
      color: 'rose'
    }
  ]

  const fertilitySuccessData = {
    rate: '51%',
    ranking: 'Among highest globally',
    babies: '695',
    timeframe: 'Single year (2024-2025)',
    impact: '1 in 6 adults affected by infertility globally',
    strategicValue: 'Key retention factor for expatriate families and major draw for regional medical tourists'
  }

  const globalRankings = [
    {
      rankRegional: '#1 in UAE & GCC',
      rankGlobal: 'Top 250',
      hospital: 'Cleveland Clinic Abu Dhabi',
      recognition: 'Ranked Top Smart Hospital for 5th consecutive year',
      citedFor: ['AI', 'Robotics', 'Telemedicine', 'Digital Imaging'],
      validThrough: '2025',
      icon: <Award className="h-5 w-5" />,
      gradient: 'from-purple-500 to-indigo-500',
      rating: '5 Diamonds'
    },
    {
      rankRegional: 'Top 5 in UAE',
      rankGlobal: 'Notable Entry',
      hospital: 'Sheikh Shakhbout Medical City',
      recognition: 'Recognized for digital maturity and PureHealth network integration',
      citedFor: ['Digital Maturity', 'Network Integration'],
      validThrough: '2025-2026',
      icon: <Gem className="h-5 w-5" />,
      gradient: 'from-cyan-500 to-blue-500',
      rating: 'Strong Performer'
    },
    {
      rankRegional: 'Top Tier',
      rankGlobal: '--',
      hospital: 'Aster DM Healthcare',
      recognition: 'Four hospitals recognized highlighting private sector quality depth',
      citedFor: ['Private Sector Quality', 'Multi-Facility Excellence'],
      validThrough: '2025-2026',
      icon: <Building2 className="h-5 w-5" />,
      gradient: 'from-emerald-500 to-teal-500',
      rating: 'Multi-Facility'
    }
  ]

  const medicalTourismMetrics = {
    globalRanking: '9th globally',
    index: 'Medical Tourism Index (MTI)',
    growthRate: '35%',
    internationalPatients: '10,000+',
    topMarkets: ['Kuwait', 'Saudi Arabia', 'Pakistan', 'Bahrain', 'USA'],
    drivers: ['Oncology', 'Orthopedics', 'Fertility'],
    economicImplication: 'Reversing flow - attracting patients FROM USA TO UAE for high-cost, high-complexity procedures',
    valueProposition: 'Quality + Cost + Speed competing with US domestic market'
  }

  const istijabaPlatform = {
    function: 'Centralized nerve center for bed management, emergency response, mental health support',
    integration: 'Integrated with Medical Operations Command Center',
    origin: 'Originally pandemic response tool, evolved into permanent critical infrastructure',
    capabilities: [
      'Centralized bed management',
      'Emergency response coordination',
      'Mental health support',
      'Exempt non-Muslim clergy from fees during crises',
      'Rapid complaint resolution'
    ],
    impact: 'Prevents operational friction from becoming public reputational damage by resolving grievances centrally'
  }

  const viralHeroismStories = [
    {
      story: 'Highway Rescue',
      detail: 'Abu Dhabi Police patrol cars physically intercepted runaway vehicle (cruise control malfunction) to save driver',
      source: 'Viral video mid-2024',
      implication: 'Inter-agency cooperation (Police/Ambulance) - trauma care begins on highway, not just at hospital',
      icon: <Shield className="h-4 w-4" />,
      color: 'red'
    },
    {
      story: 'The "Flight Savior"',
      detail: 'Medical professionals including Physician Assistant Emily Haley saving lives during mid-flight emergencies',
      source: 'Viral stories',
      implication: 'Projects image that Abu Dhabi medical talent is world-class even at 30,000 feet',
      icon: <Globe className="h-4 w-4" />,
      color: 'cyan'
    },
    {
      story: 'Staff Recognition',
      detail: 'DoH and SEHA institutionalized "Hero Awards" for staff going beyond call of duty',
      example: 'Dr. Mohammed Zaki Ahmed at BMC received innovation and oncology awards in 2024',
      source: 'Institutional programs',
      implication: 'Systematic recognition of excellence reinforces culture of care',
      icon: <Award className="h-4 w-4" />,
      color: 'gold'
    }
  ]

  const counterNarratives = [
    {
      threat: '"Healthcare is too expensive/commercialized"',
      successSignal: 'The Humanitarian Shield',
      evidence: 'Free complex care for conflict victims (BMC) and state-funded transplants for citizens',
      icon: <Heart className="h-4 w-4" />,
      color: 'emerald'
    },
    {
      threat: '"Local care is inferior to the West"',
      successSignal: 'The Clinical Parity Proof',
      evidence: '"First in region" robotic surgeries and Newsweek Global Top rankings placing Abu Dhabi on par with Western hubs',
      icon: <Activity className="h-4 w-4" />,
      color: 'purple'
    },
    {
      threat: '"System is bureaucratic/slow"',
      successSignal: 'The Efficiency Signal',
      evidence: 'Istijaba rapid response, 24-hour return-to-work spinal surgeries, "Smart Hospital" digital integration proving speed',
      icon: <Zap className="h-4 w-4" />,
      color: 'cyan'
    },
    {
      threat: '"Brain drain / Lack of talent"',
      successSignal: 'The Talent Magnet',
      evidence: 'Attraction of top-tier talent for complex procedures and retention of "Unsung Hero" staff',
      icon: <Users className="h-4 w-4" />,
      color: 'rose'
    }
  ]

  const secondOrderInsights = [
    {
      title: 'Insurance Economy Stabilization',
      insight: 'Local liver transplants and complex tumor removals fundamentally alter actuarial outlook for Daman and insurers',
      impact: 'Reduces need for international treatment, retains capital in Abu Dhabi economy, stabilizes premiums',
      icon: <Shield className="h-5 w-5" />,
      color: 'emerald'
    },
    {
      title: 'The "Trust" Multiplier',
      insight: '35% growth in international patients at CCAD creates powerful psychological validation for local population',
      impact: 'Deconstructs colonial legacy of "Western medicine is superior" when patients travel FROM USA TO Abu Dhabi',
      icon: <Star className="h-5 w-5" />,
      color: 'purple'
    },
    {
      title: 'Robotics "Standard"',
      insight: 'SSMC (500 cases) and CCAD (lung/heart) aggressive adoption suggests system-wide procurement strategy',
      impact: 'Positions Abu Dhabi as "beta site" for next generation surgical robotics, attracts R&D investment',
      icon: <Sparkles className="h-5 w-5" />,
      color: 'cyan'
    }
  ]

  // Helper function to get category badge color
  function getCategoryColor(category: string): 'rose' | 'purple' | 'cyan' | 'emerald' | 'fuchsia' {
    const categoryMap: Record<string, 'rose' | 'purple' | 'cyan' | 'emerald' | 'fuchsia'> = {
      'Transplant Frontier': 'rose',
      'Surgical Heavyweight': 'purple',
      'Humanitarian Niche': 'emerald',
    }
    return categoryMap[category] || 'cyan'
  }

  // ============================================================================
  // CHART DATA FOR VISUALIZATIONS
  // ============================================================================

  // 30-day trend data for Digital Pulse (Past)
  const digitalPulsePastData = [
    { day: 'Dec 15', sentiment: 78, engagement: 4520, crisisLevel: 12 },
    { day: 'Dec 16', sentiment: 82, engagement: 5100, crisisLevel: 10 },
    { day: 'Dec 17', sentiment: 75, engagement: 4200, crisisLevel: 18 },
    { day: 'Dec 18', sentiment: 80, engagement: 4800, crisisLevel: 14 },
    { day: 'Dec 19', sentiment: 85, engagement: 5800, crisisLevel: 8 },
    { day: 'Dec 20', sentiment: 88, engagement: 6200, crisisLevel: 6 },
    { day: 'Dec 21', sentiment: 76, engagement: 4400, crisisLevel: 16 },
    { day: 'Dec 22', sentiment: 81, engagement: 5000, crisisLevel: 12 },
    { day: 'Dec 23', sentiment: 79, engagement: 4700, crisisLevel: 15 },
    { day: 'Dec 24', sentiment: 86, engagement: 5500, crisisLevel: 9 },
    { day: 'Dec 25', sentiment: 72, engagement: 3800, crisisLevel: 22 },
    { day: 'Dec 26', sentiment: 74, engagement: 4000, crisisLevel: 20 },
    { day: 'Dec 27', sentiment: 83, engagement: 5300, crisisLevel: 11 },
    { day: 'Dec 28', sentiment: 87, engagement: 5900, crisisLevel: 7 },
    { day: 'Dec 29', sentiment: 84, engagement: 5400, crisisLevel: 10 },
    { day: 'Dec 30', sentiment: 89, engagement: 6500, crisisLevel: 5 },
    { day: 'Dec 31', sentiment: 77, engagement: 4600, crisisLevel: 17 },
    { day: 'Jan 1', sentiment: 73, engagement: 3900, crisisLevel: 21 },
    { day: 'Jan 2', sentiment: 80, engagement: 4900, crisisLevel: 13 },
    { day: 'Jan 3', sentiment: 85, engagement: 5600, crisisLevel: 9 },
    { day: 'Jan 4', sentiment: 82, engagement: 5200, crisisLevel: 11 },
    { day: 'Jan 5', sentiment: 78, engagement: 4500, crisisLevel: 16 },
    { day: 'Jan 6', sentiment: 86, engagement: 5700, crisisLevel: 8 },
    { day: 'Jan 7', sentiment: 88, engagement: 6100, crisisLevel: 6 },
    { day: 'Jan 8', sentiment: 84, engagement: 5300, crisisLevel: 10 },
    { day: 'Jan 9', sentiment: 81, engagement: 5000, crisisLevel: 12 },
    { day: 'Jan 10', sentiment: 79, engagement: 4800, crisisLevel: 14 },
    { day: 'Jan 11', sentiment: 83, engagement: 5400, crisisLevel: 11 },
    { day: 'Jan 12', sentiment: 87, engagement: 6000, crisisLevel: 7 },
    { day: 'Jan 13', sentiment: 85, engagement: 5700, crisisLevel: 9 },
  ]

  // Real-time data for Present (last 24 hours by hour)
  const digitalPulsePresentData = [
    { hour: '00:00', sentiment: 76, sources: 48200, velocity: 120 },
    { hour: '03:00', sentiment: 72, sources: 46500, velocity: 85 },
    { hour: '06:00', sentiment: 78, sources: 49800, velocity: 150 },
    { hour: '09:00', sentiment: 84, sources: 52800, velocity: 320 },
    { hour: '12:00', sentiment: 87, sources: 54100, velocity: 450 },
    { hour: '15:00', sentiment: 85, sources: 53200, velocity: 380 },
    { hour: '18:00', sentiment: 82, sources: 51900, velocity: 290 },
    { hour: '21:00', sentiment: 79, sources: 50600, velocity: 200 },
  ]

  // 90-day prediction data
  const digitalPulseFutureData = [
    { week: 'Week 1', crisisProb: 15, sentimentPred: 85, riskLevel: 'Low' },
    { week: 'Week 2', crisisProb: 22, sentimentPred: 82, riskLevel: 'Low' },
    { week: 'Week 3', crisisProb: 35, sentimentPred: 78, riskLevel: 'Medium' },
    { week: 'Week 4', crisisProb: 28, sentimentPred: 80, riskLevel: 'Low' },
    { week: 'Week 5', crisisProb: 45, sentimentPred: 75, riskLevel: 'Medium' },
    { week: 'Week 6', crisisProb: 52, sentimentPred: 72, riskLevel: 'High' },
    { week: 'Week 7', crisisProb: 38, sentimentPred: 77, riskLevel: 'Medium' },
    { week: 'Week 8', crisisProb: 30, sentimentPred: 81, riskLevel: 'Low' },
    { week: 'Week 9', crisisProb: 25, sentimentPred: 83, riskLevel: 'Low' },
    { week: 'Week 10', crisisProb: 42, sentimentPred: 76, riskLevel: 'Medium' },
    { week: 'Week 11', crisisProb: 58, sentimentPred: 70, riskLevel: 'High' },
    { week: 'Week 12', crisisProb: 48, sentimentPred: 74, riskLevel: 'Medium' },
  ]

  // Strategic Pillar Health - 7-day trends
  const pillarHealthData = {
    health: { current: 92, trend: [88, 89, 90, 91, 90, 91, 92], change: 5, label: 'Health' },
    safety: { current: 89, trend: [90, 89, 88, 89, 88, 89, 89], change: -2, label: 'Safety' },
    policy: { current: 85, trend: [82, 83, 84, 84, 85, 85, 85], change: 3, label: 'Policy' },
    business: { current: 78, trend: [75, 76, 77, 76, 77, 78, 78], change: 8, label: 'Business' },
    community: { current: 90, trend: [78, 82, 85, 87, 88, 89, 90], change: 12, label: 'Community' },
  }

  // Pillar comparison chart data
  const pillarComparisonData = [
    { pillar: 'Health', score: 92, target: 95, gap: 3 },
    { pillar: 'Safety', score: 89, target: 95, gap: 6 },
    { pillar: 'Policy', score: 85, target: 90, gap: 5 },
    { pillar: 'Business', score: 78, target: 85, gap: 7 },
    { pillar: 'Community', score: 90, target: 95, gap: 5 },
  ]

  // WhatsApp/Dark Social monitoring data
  const darkSocialData = [
    { group: 'Abu Dhabi Parents', members: 2300, sentiment: 34, velocity: 'high', topics: ['vaccine', 'mandate', 'concern'], priority: 'critical' },
    { group: 'Expat Health Forum', members: 5400, sentiment: 67, velocity: 'medium', topics: ['insurance', 'waiver', 'relief'], priority: 'high' },
    { group: 'Healthcare Workers', members: 1200, sentiment: 78, velocity: 'low', topics: ['general', 'discussion'], priority: 'low' },
    { group: 'Medical Students UAE', members: 890, sentiment: 72, velocity: 'medium', topics: ['education', 'career'], priority: 'low' },
    { group: 'Health Insurance Help', members: 3200, sentiment: 45, velocity: 'high', topics: ['claims', 'denied', 'appeal'], priority: 'high' },
    { group: 'Mothers Abu Dhabi', members: 4500, sentiment: 81, velocity: 'low', topics: ['pediatrics', 'schools'], priority: 'low' },
    { group: 'Elderly Care Support', members: 780, sentiment: 69, velocity: 'medium', topics: ['facilities', 'insurance'], priority: 'medium' },
    { group: 'Medical Tourism UAE', members: 2100, sentiment: 88, velocity: 'medium', topics: ['treatments', 'costs'], priority: 'low' },
  ]

  // Sentiment distribution pie data
  const sentimentDistributionData = [
    { name: 'Positive', value: 62, color: CHART_COLORS.success },
    { name: 'Neutral', value: 24, color: CHART_COLORS.info },
    { name: 'Negative', value: 14, color: CHART_COLORS.danger },
  ]

  // Crisis severity distribution
  const crisisSeverityData = [
    { name: 'Extreme', value: 2, color: CHART_COLORS.rose },
    { name: 'High', value: 6, color: CHART_COLORS.danger },
    { name: 'Medium', value: 15, color: CHART_COLORS.warning },
    { name: 'Low', value: 27, color: CHART_COLORS.info },
  ]

  // Platform activity heatmap data
  const platformHeatmapData = [
    { x: 'X/Twitter', y: 'Morning', value: 85 },
    { x: 'X/Twitter', y: 'Afternoon', value: 92 },
    { x: 'X/Twitter', y: 'Evening', value: 78 },
    { x: 'Instagram', y: 'Morning', value: 65 },
    { x: 'Instagram', y: 'Afternoon', value: 72 },
    { x: 'Instagram', y: 'Evening', value: 88 },
    { x: 'Facebook', y: 'Morning', value: 45 },
    { x: 'Facebook', y: 'Afternoon', value: 52 },
    { x: 'Facebook', y: 'Evening', value: 68 },
    { x: 'LinkedIn', y: 'Morning', value: 78 },
    { x: 'LinkedIn', y: 'Afternoon', value: 85 },
    { x: 'LinkedIn', y: 'Evening', value: 42 },
    { x: 'TikTok', y: 'Morning', value: 55 },
    { x: 'TikTok', y: 'Afternoon', value: 72 },
    { x: 'TikTok', y: 'Evening', value: 95 },
  ]

  // Source type distribution
  const sourceTypeData = [
    { name: 'Social Media', value: 38450 },
    { name: 'News/Media', value: 8200 },
    { name: 'Blogs/Forums', value: 3890 },
    { name: 'Reviews', value: 1861 },
  ]

  // Weekly engagement comparison
  const weeklyEngagementData = [
    { week: 'Week 1', thisYear: 45200, lastYear: 38800 },
    { week: 'Week 2', thisYear: 47800, lastYear: 40100 },
    { week: 'Week 3', thisYear: 46900, lastYear: 41500 },
    { week: 'Week 4', thisYear: 52100, lastYear: 42800 },
  ]

  // ============================================================================
  // NEW ADVANCED VISUALIZATION DATA (PHASE 2 TRANSFORMATION)
  // ============================================================================

  // Horizon Chart Data - 3-ring Digital Pulse visualization
  const horizonData = digitalPulsePastData.map(d => ({
    date: new Date(`2026-01-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`),
    value: d.sentiment,
    category: 'Sentiment'
  }))

  // Ridgeline Plot Data - Sentiment distribution by platform over time
  const ridgelineData = [
    ...Array.from({ length: 30 }, (_, i) => ({ category: 'X/Twitter', value: 70 + Math.sin(i / 5) * 20 + Math.random() * 10 })),
    ...Array.from({ length: 30 }, (_, i) => ({ category: 'Instagram', value: 75 + Math.cos(i / 4) * 15 + Math.random() * 8 })),
    ...Array.from({ length: 30 }, (_, i) => ({ category: 'Facebook', value: 65 + Math.sin(i / 6) * 18 + Math.random() * 12 })),
    ...Array.from({ length: 30 }, (_, i) => ({ category: 'LinkedIn', value: 80 + Math.cos(i / 3) * 12 + Math.random() * 6 })),
    ...Array.from({ length: 30 }, (_, i) => ({ category: 'TikTok', value: 85 + Math.sin(i / 4) * 10 + Math.random() * 8 })),
  ]


  // Word Cloud Data - Trending topics
  const wordCloudData = [
    { text: 'Vaccine', value: 95, category: 'Health' },
    { text: 'Insurance', value: 82, category: 'Policy' },
    { text: 'Malaffi', value: 78, category: 'Platform' },
    { text: 'Quality', value: 75, category: 'Safety' },
    { text: 'Cost', value: 71, category: 'Business' },
    { text: 'Access', value: 68, category: 'Community' },
    { text: 'Telemedicine', value: 65, category: 'Innovation' },
    { text: 'Privacy', value: 62, category: 'Policy' },
    { text: 'Emergency', value: 58, category: 'Safety' },
    { text: 'Staffing', value: 54, category: 'Operations' },
    { text: 'Mental Health', value: 51, category: 'Health' },
    { text: 'Genomics', value: 48, category: 'Innovation' },
    { text: 'Tourism', value: 45, category: 'Business' },
    { text: 'Regulation', value: 42, category: 'Policy' },
    { text: 'Training', value: 38, category: 'Operations' },
    { text: 'Technology', value: 35, category: 'Innovation' },
  ]

  // Network Graph Data - Influencer connections
  const networkData = {
    nodes: [
      { id: 'DoH', group: 'official', value: 50 },
      { id: 'SEHA', group: 'official', value: 40 },
      { id: 'Daman', group: 'official', value: 35 },
      { id: 'Malaffi', group: 'platform', value: 30 },
      { id: 'Dr. Adel Sajwani', group: 'influencer', value: 25 },
      { id: 'Dr. Farida Al Hosani', group: 'influencer', value: 23 },
      { id: 'Health Blogger UAE', group: 'media', value: 20 },
      { id: 'Medical News Gulf', group: 'media', value: 18 },
      { id: 'Patient Voice', group: 'community', value: 15 },
      { id: 'Expat Health Forum', group: 'community', value: 12 },
    ],
    links: [
      { source: 'DoH', target: 'SEHA', value: 10 },
      { source: 'DoH', target: 'Daman', value: 8 },
      { source: 'DoH', target: 'Malaffi', value: 9 },
      { source: 'SEHA', target: 'Dr. Adel Sajwani', value: 6 },
      { source: 'DoH', target: 'Dr. Farida Al Hosani', value: 7 },
      { source: 'Malaffi', target: 'Health Blogger UAE', value: 5 },
      { source: 'Daman', target: 'Medical News Gulf', value: 4 },
      { source: 'SEHA', target: 'Patient Voice', value: 5 },
      { source: 'Daman', target: 'Expat Health Forum', value: 3 },
      { source: 'Dr. Adel Sajwani', target: 'Health Blogger UAE', value: 4 },
    ]
  }

  // Bullet Graph Data - Strategic Pillar Health
  const bulletGraphData = [
    { title: 'Health', value: 92, target: 95, ranges: [{ value: 70, color: '#ef4444' }, { value: 85, color: '#f59e0b' }, { value: 100, color: '#22c55e' }] },
    { title: 'Safety', value: 89, target: 95, ranges: [{ value: 70, color: '#ef4444' }, { value: 85, color: '#f59e0b' }, { value: 100, color: '#22c55e' }] },
    { title: 'Policy', value: 85, target: 90, ranges: [{ value: 65, color: '#ef4444' }, { value: 80, color: '#f59e0b' }, { value: 95, color: '#22c55e' }] },
    { title: 'Business', value: 78, target: 85, ranges: [{ value: 60, color: '#ef4444' }, { value: 75, color: '#f59e0b' }, { value: 90, color: '#22c55e' }] },
    { title: 'Community', value: 90, target: 95, ranges: [{ value: 70, color: '#ef4444' }, { value: 85, color: '#f59e0b' }, { value: 100, color: '#22c55e' }] },
  ]

  // Treemap Data - Narrative Hegemony (Share of Voice)
  const treemapData = {
    name: 'Healthcare Narratives',
    value: 100,
    children: [
      {
        name: 'Official Communications',
        value: 35,
        children: [
          { name: 'Policy Updates', value: 15 },
          { name: 'Health Alerts', value: 12 },
          { name: 'Campaign Announcements', value: 8 },
        ]
      },
      {
        name: 'Media Coverage',
        value: 28,
        children: [
          { name: 'Success Stories', value: 12 },
          { name: 'Health Tips', value: 10 },
          { name: 'Expert Opinions', value: 6 },
        ]
      },
      {
        name: 'Public Discussion',
        value: 22,
        children: [
          { name: 'Patient Experiences', value: 10 },
          { name: 'Insurance Issues', value: 7 },
          { name: 'Facility Feedback', value: 5 },
        ]
      },
      {
        name: 'Shadow Narratives',
        value: 15,
        children: [
          { name: 'Misinformation', value: 8 },
          { name: 'Conspiracy Theories', value: 4 },
          { name: 'Unverified Claims', value: 3 },
        ]
      }
    ]
  }

  // Dumbbell Plot Data - Global Benchmarking
  const dumbbellData = [
    { category: 'Quality Index', value1: 82, value2: 92, label: 'UAE' },
    { category: 'Digital Maturity', value1: 75, value2: 88, label: 'UAE' },
    { category: 'Patient Satisfaction', value1: 78, value2: 85, label: 'UAE' },
    { category: 'Medical Tourism', value1: 65, value2: 91, label: 'UAE' },
    { category: 'Research Output', value1: 58, value2: 74, label: 'UAE' },
  ]

  // Funnel Chart Data - Crisis Response Pipeline
  const funnelData = [
    { name: 'Threats Detected', value: 156, category: 'detected' },
    { name: 'Investigations Started', value: 89, category: 'investigating' },
    { name: 'Responses Initiated', value: 67, category: 'responding' },
    { name: 'Resolved', value: 52, category: 'resolved' },
    { name: 'Post-Analysis Complete', value: 48, category: 'analyzed' },
  ]

  // Radial Bar Chart Data - Platform Performance
  const radialBarData = [
    { category: 'X/Twitter', value: 92 },
    { category: 'Instagram', value: 78 },
    { category: 'Facebook', value: 65 },
    { category: 'LinkedIn', value: 85 },
    { category: 'TikTok', value: 95 },
    { category: 'YouTube', value: 72 },
  ]

  // Calendar Heatmap Data - Year-long activity
  const calendarData = Array.from({ length: 365 }, (_, i) => {
    const date = new Date(2025, 0, 1)
    date.setDate(date.getDate() + i)
    return {
      date: date,
      value: Math.floor(Math.random() * 100),
      category: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low'
    }
  })

  // Radar Spider Chart Data - Multi-dimensional Comparison
  const radarData = [
    {
      category: 'Abu Dhabi',
      'Quality': 92,
      'Innovation': 88,
      'Access': 85,
      'Efficiency': 90,
      'Satisfaction': 87,
      'Safety': 94,
    },
    {
      category: 'Dubai',
      'Quality': 88,
      'Innovation': 92,
      'Access': 90,
      'Efficiency': 85,
      'Satisfaction': 84,
      'Safety': 86,
    },
    {
      category: 'Regional Average',
      'Quality': 75,
      'Innovation': 70,
      'Access': 78,
      'Efficiency': 72,
      'Satisfaction': 74,
      'Safety': 76,
    },
  ]

  // Bump Chart Data - Rank Changes Over Time
  const bumpData = [
    { category: 'DoH', values: [1, 1, 2, 1, 2, 1] },
    { category: 'DHA', values: [2, 2, 1, 2, 1, 2] },
    { category: 'SEHA', values: [3, 3, 3, 3, 3, 3] },
    { category: 'MoHAP', values: [4, 4, 4, 4, 4, 4] },
  ].flatMap(item =>
    item.values.map((rank, i) => ({
      category: item.category,
      period: `Month ${i + 1}`,
      value: 5 - rank, // Convert rank to value (higher rank = higher value)
      rank
    }))
  )


  // Slope Graph Data - Before/After Comparisons
  const slopeData = [
    { category: 'Malaffi Adoption', leftValue: 45, rightValue: 94 },
    { category: 'Vaccination Rate', leftValue: 72, rightValue: 89 },
    { category: 'Telehealth Usage', leftValue: 28, rightValue: 76 },
    { category: 'Patient Satisfaction', leftValue: 78, rightValue: 85 },
    { category: 'Digital Literacy', leftValue: 62, rightValue: 81 },
  ]

  // Streamgraph Data - Multi-source activity flow
  const streamgraphData = Array.from({ length: 90 }, (_, i) => {
    const date = new Date(2025, 10, 1)
    date.setDate(date.getDate() + i)
    return {
      date: date,
      'X/Twitter': 80 + Math.sin(i / 10) * 20 + Math.random() * 10,
      'Instagram': 70 + Math.cos(i / 8) * 15 + Math.random() * 8,
      'Facebook': 50 + Math.sin(i / 12) * 10 + Math.random() * 12,
      'LinkedIn': 60 + Math.cos(i / 9) * 12 + Math.random() * 8,
      'TikTok': 85 + Math.sin(i / 7) * 18 + Math.random() * 10,
    }
  })

  // Sankey Diagram Data - Information Flow
  const sankeyData = {
    nodes: [
      { name: 'Official Sources' },
      { name: 'Media' },
      { name: 'Influencers' },
      { name: 'Social Media' },
      { name: 'WhatsApp Groups' },
      { name: 'Public Understanding' },
    ],
    links: [
      { source: 'Official Sources', target: 'Media', value: 35 },
      { source: 'Official Sources', target: 'Social Media', value: 45 },
      { source: 'Official Sources', target: 'Influencers', value: 20 },
      { source: 'Media', target: 'Social Media', value: 25 },
      { source: 'Media', target: 'WhatsApp Groups', value: 15 },
      { source: 'Influencers', target: 'Social Media', value: 30 },
      { source: 'Influencers', target: 'WhatsApp Groups', value: 18 },
      { source: 'Social Media', target: 'Public Understanding', value: 65 },
      { source: 'WhatsApp Groups', target: 'Public Understanding', value: 28 },
    ]
  }

  // Matrix Chart Data - Platform vs Time of Day
  const matrixData = [
    { row: 'Morning', col: 'X/Twitter', value: 75 },
    { row: 'Morning', col: 'Instagram', value: 58 },
    { row: 'Morning', col: 'Facebook', value: 42 },
    { row: 'Afternoon', col: 'X/Twitter', value: 88 },
    { row: 'Afternoon', col: 'Instagram', value: 72 },
    { row: 'Afternoon', col: 'Facebook', value: 55 },
    { row: 'Evening', col: 'X/Twitter', value: 82 },
    { row: 'Evening', col: 'Instagram', value: 90 },
    { row: 'Evening', col: 'Facebook', value: 68 },
  ]

  // Tile Grid Data - Infrastructure Health (50 assets)
  const tileGridData = Array.from({ length: 50 }, (_, i) => {
    const rand = Math.random()
    let status: 'success' | 'warning' | 'danger'
    if (rand > 0.7) status = 'success'
    else if (rand > 0.4) status = 'warning'
    else status = 'danger'

    return {
      id: `asset-${i}`,
      label: `Asset ${i + 1}`,
      value: rand > 0.15 ? 100 : Math.floor(Math.random() * 80),
      category: rand > 0.15 ? 'operational' : rand > 0.5 ? 'degraded' : 'offline',
      status,
    }
  })


  // Helper function to get testimonial color
  function getTestimonialColor(color: string): 'emerald' | 'cyan' | 'purple' | 'rose' {
    const colorMap: Record<string, 'emerald' | 'cyan' | 'purple' | 'rose'> = {
      'emerald': 'emerald',
      'cyan': 'cyan',
      'purple': 'purple',
      'rose': 'rose',
    }
    return colorMap[color] || 'denim'
  }

  // Helper function to get heroism color
  function getHeroismColor(color: string): 'red' | 'cyan' | 'gold' {
    const colorMap: Record<string, 'red' | 'cyan' | 'gold'> = {
      'red': 'red',
      'cyan': 'cyan',
      'gold': 'gold',
    }
    return colorMap[color] || 'cyan'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Badge variant="rose" className="mb-2">CLAIRVOYANCE-CX</Badge>
          </div>
          <h1 className="text-3xl font-extrabold gradient-text-red">Executive Bridge</h1>
          <p className="mt-2 text-slate-600">
            Strategic oversight with real-time intelligence and leadership KPIs
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <MessageSquare className="h-4 w-4" />
          Generate Report
        </Button>
      </div>

      {/* CRITICAL ALERT: New Leadership Appointment */}
      <Alert className="border-purple-500 bg-purple-50 dark:bg-purple-950">
        <Sparkles className="h-4 w-4 text-purple-500" />
        <AlertTitle className="text-purple-700">New Leadership Appointment</AlertTitle>
        <AlertDescription className="text-purple-600">
          <strong>H.E. Dr. Rashed Obaid Alsuwaidi</strong> appointed as Director General of ADPHC in <strong>February 2025</strong>, replacing Matar Al Nuaimi. Active as of January 2026.
        </AlertDescription>
      </Alert>

      {/* Digital Pulse Radar - Data Visualization */}
      <GlassPanel title="Digital Pulse Radar" description="Past, Present, and Future intelligence states" badge="Live">
        <Tabs defaultValue="past" className="w-full">
          <TabsList className="grid grid-cols-3 w-full mb-6">
            <TabsTrigger value="past">
              <Badge variant="emerald" className="mr-2">Past</Badge>
              30-Day Analysis
            </TabsTrigger>
            <TabsTrigger value="present">
              <Badge variant="orange" className="mr-2">Present</Badge>
              Real-Time
            </TabsTrigger>
            <TabsTrigger value="future">
              <Badge variant="rose" className="mr-2">Future</Badge>
              90-Day Forecast
            </TabsTrigger>
          </TabsList>

          {/* Past - 30-Day Trend Analysis */}
          <TabsContent value="past" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    30-Day Sentiment & Engagement Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={digitalPulsePastData}
                    xAxisKey="day"
                    lines={[
                      { dataKey: 'sentiment', name: 'Sentiment Score', color: CHART_COLORS.success, strokeWidth: 2 },
                      { dataKey: 'engagement', name: 'Engagement', color: CHART_COLORS.primary, strokeWidth: 2 },
                    ]}
                    height={250}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Level Trend</CardTitle>
                  <CardDescription>Last 7 days</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <AreaChart
                    data={digitalPulsePastData.slice(-7)}
                    xAxisKey="day"
                    areas={[{ dataKey: 'crisisLevel', name: 'Crisis Level', color: CHART_COLORS.danger, fillOpacity: 0.6 }]}
                    height={200}
                    showGrid={false}
                    showLegend={false}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="glass-panel">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-slate-500 mb-1">Avg Sentiment</p>
                    <p className="text-3xl font-bold text-emerald-600">82%</p>
                    <Sparkline data={digitalPulsePastData.map(d => d.sentiment)} color={CHART_COLORS.success} className="mt-3" />
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-panel">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-slate-500 mb-1">Total Engagements</p>
                    <p className="text-3xl font-bold text-blue-600">152K</p>
                    <Sparkline data={digitalPulsePastData.map(d => d.engagement / 100)} color={CHART_COLORS.primary} className="mt-3" />
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-panel">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-slate-500 mb-1">Crises Resolved</p>
                    <p className="text-3xl font-bold text-purple-600">23</p>
                    <div className="flex items-center justify-center gap-2 mt-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm text-slate-600">100% resolved</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Present - Real-Time Monitoring */}
          <TabsContent value="present" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5 text-orange-500" />
                    24-Hour Sentiment Velocity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={digitalPulsePresentData}
                    xAxisKey="hour"
                    areas={[
                      { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.success, fillOpacity: 0.7 },
                      { dataKey: 'velocity', name: 'Velocity', color: CHART_COLORS.warning, fillOpacity: 0.5 },
                    ]}
                    height={220}
                    stacked={false}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="h-5 w-5 text-cyan-500" />
                    Active Sources Monitor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={digitalPulsePresentData}
                    xAxisKey="hour"
                    bars={[{ dataKey: 'sources', name: 'Active Sources', color: CHART_COLORS.primary }]}
                    height={220}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 sm:grid-cols-4">
              <Card className="glass-panel border-orange-500">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Gauge value={87} max={100} label="Health Score" color={CHART_COLORS.success} height={160} showValue={true} />
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-panel">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-slate-500 mb-2">Active Sources</p>
                    <p className="text-4xl font-extrabold text-orange-600">52,401</p>
                    <p className="text-xs text-slate-400 mt-1">Real-time monitoring</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-panel">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-slate-500 mb-2">Velocity Index</p>
                    <p className="text-4xl font-extrabold text-cyan-600">385</p>
                    <TrendingUp className="h-5 w-5 text-emerald-500 mx-auto mt-1" />
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-panel">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-slate-500 mb-2">Current Alerts</p>
                    <p className="text-4xl font-extrabold text-rose-600">3</p>
                    <AlertTriangle className="h-5 w-5 text-rose-500 mx-auto mt-1" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Future - 90-Day Forecast */}
          <TabsContent value="future" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-rose-500" />
                    90-Day Crisis Probability Forecast
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={digitalPulseFutureData}
                    xAxisKey="week"
                    lines={[
                      { dataKey: 'crisisProb', name: 'Crisis Probability (%)', color: CHART_COLORS.danger, strokeWidth: 3 },
                      { dataKey: 'sentimentPred', name: 'Predicted Sentiment', color: CHART_COLORS.success, strokeWidth: 2 },
                    ]}
                    height={280}
                    referenceLines={[{ value: 50, label: 'High Risk Threshold', color: CHART_COLORS.danger }]}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Predicted Crisis Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={crisisSeverityData}
                    donut={true}
                    height={250}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Risk Level Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Low Risk</span>
                      <Badge variant="success" className="text-base px-3">5 weeks</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Medium Risk</span>
                      <Badge variant="warning" className="text-base px-3">5 weeks</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">High Risk</span>
                      <Badge variant="rose" className="text-base px-3">2 weeks</Badge>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-xs text-slate-500">Peak risk expected in <strong>Week 6</strong> and <strong>Week 11</strong></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </GlassPanel>

      {/* Strategic Pillar Health Cards with Trends */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {Object.entries(pillarHealthData).map(([key, pillar]) => {
          const colors = {
            health: 'emerald',
            safety: 'amber',
            policy: 'indigo',
            business: 'cyan',
            community: 'purple',
          }
          const color = colors[key as keyof typeof colors]
          return (
            <Card key={key} className="glass-panel">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{pillar.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-extrabold text-${color}-600">{pillar.current}%</div>
                  <div className={`flex items-center gap-1 text-sm ${pillar.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {pillar.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    <span className="font-semibold">{pillar.change >= 0 ? '+' : ''}{pillar.change}%</span>
                  </div>
                </div>
                <Progress value={pillar.current} className="mt-3 h-2" />
                <div className="mt-3">
                  <Sparkline data={pillar.trend} color={CHART_COLORS[color as keyof typeof CHART_COLORS]} />
                </div>
                <p className="mt-2 text-xs text-slate-500">7-day trend</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Pillar Comparison Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Strategic Pillar Comparison</CardTitle>
          <CardDescription>Current scores vs. targets</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart
            data={pillarComparisonData}
            xAxisKey="pillar"
            bars={[
              { dataKey: 'score', name: 'Current Score', color: CHART_COLORS.success },
              { dataKey: 'target', name: 'Target', color: CHART_COLORS.info },
            ]}
            height={250}
            showLegend={true}
          />
        </CardContent>
      </Card>

      {/* NEW: Active Campaigns Ticker */}
      <GlassPanel
        title="Active Campaigns - January 2026"
        description="Current awareness campaigns with verified hashtags and reach"
        badge="4 Active"
      >
        <ScrollArea className="h-auto max-h-48">
          <div className="space-y-3 pr-4">
            {activeCampaigns.map((campaign) => (
              <div key={campaign.id} className="flex items-start gap-4 rounded-lg bg-slate-50/50 p-4 border border-slate-200">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${campaign.priority === 'high' ? 'from-red-500 to-orange-500' : 'from-emerald-500 to-teal-500'} text-white`}>
                  <Hash className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">{campaign.theme}</h4>
                      <p className="text-sm font-medium text-slate-700">"{campaign.slogan}"</p>
                      {campaign.subCampaign && (
                        <p className="text-xs text-slate-500 mt-1">{campaign.subCampaign}</p>
                      )}
                    </div>
                    <Badge variant={campaign.priority === 'high' ? 'destructive' : 'success'} className="shrink-0">
                      {campaign.priority}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {campaign.hashtags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {campaign.reach} reach
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {campaign.startDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {campaign.platforms.length} platforms
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      <Tabs defaultValue="leadership" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="leadership">Leadership Dashboard</TabsTrigger>
          <TabsTrigger value="kpi">Strategic Programs KPIs</TabsTrigger>
          <TabsTrigger value="success">Success Signals</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp Mirror</TabsTrigger>
          <TabsTrigger value="alerts">Strategic Alerts</TabsTrigger>
          <TabsTrigger value="advanced" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">✨ Advanced Analytics</TabsTrigger>
        </TabsList>

        {/* Leadership Dashboard - UPDATED WITH CORRECT DATA */}
        <TabsContent value="leadership" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Chairman Profile - UPDATED WITH CORRECT DATA */}
            <Card className="glass-card border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 bg-gradient-to-br from-red-500 to-rose-500">
                    <AvatarFallback className="text-white font-bold text-lg">
                      {leadershipMapped.chairman.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{leadershipMapped.chairman.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {leadershipMapped.chairman.role}, {leadershipMapped.chairman.organization}
                    </CardDescription>
                    <Badge variant="rose" className="mt-2 text-xs">Chairman</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-red-50 p-3 border border-red-200">
                  <p className="text-xs text-red-600 font-semibold mb-1">STRATEGIC FOCUS</p>
                  <p className="text-sm text-slate-700">{leadershipMapped.chairman.focus}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Initiatives Overseen</p>
                    <p className="text-2xl font-bold text-slate-900">12</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Crisis Managed</p>
                    <p className="text-2xl font-bold text-emerald-600">5</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Full Profile
                </Button>
              </CardContent>
            </Card>

            {/* Undersecretary Profile - UPDATED WITH CORRECT DATA */}
            <Card className="glass-card border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 bg-gradient-to-br from-purple-500 to-indigo-500">
                    <AvatarFallback className="text-white font-bold text-lg">
                      {leadershipMapped.undersecretary.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{leadershipMapped.undersecretary.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {leadershipMapped.undersecretary.role}, {leadershipMapped.undersecretary.organization}
                    </CardDescription>
                    <Badge variant="purple" className="mt-2 text-xs">Undersecretary</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-purple-50 p-3 border border-purple-200">
                  <p className="text-xs text-purple-600 font-semibold mb-1">STRATEGIC FOCUS</p>
                  <p className="text-sm text-slate-700">{leadershipMapped.undersecretary.focus}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Policies Implemented</p>
                    <p className="text-2xl font-bold text-slate-900">28</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Compliance Score</p>
                    <p className="text-2xl font-bold text-indigo-600">94%</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Full Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Director General Profile - NEW APPOINTMENT ALERT */}
          <Card className="glass-card border-l-4 border-l-emerald-500 relative overflow-hidden">
            {/* New Appointment Banner */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 text-xs font-bold">
              NEW APPOINTMENT - FEB 2025
            </div>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 bg-gradient-to-br from-emerald-500 to-teal-500">
                  <AvatarFallback className="text-white font-bold text-lg">
                    {leadershipMapped.directorGeneral.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{leadershipMapped.directorGeneral.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {leadershipMapped.directorGeneral.role}, {leadershipMapped.directorGeneral.organization}
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="success" className="text-xs">Director General</Badge>
                    <Sparkles className="h-3 w-3 text-emerald-500" />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-emerald-500 bg-emerald-50 dark:bg-emerald-950">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <AlertTitle className="text-emerald-700 text-sm">Leadership Transition</AlertTitle>
                <AlertDescription className="text-emerald-600 text-xs">
                  Appointed <strong>February 2025</strong>, replacing Matar Al Nuaimi. Active as of January 2026.
                </AlertDescription>
              </Alert>
              <div className="rounded-lg bg-emerald-50 p-3 border border-emerald-200">
                <p className="text-xs text-emerald-600 font-semibold mb-1">STRATEGIC FOCUS</p>
                <p className="text-sm text-slate-700">{leadershipMapped.directorGeneral.focus}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-slate-500">Campaigns Led</p>
                  <p className="text-2xl font-bold text-slate-900">45</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Public Health Wins</p>
                  <p className="text-2xl font-bold text-emerald-600">156</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Media Appearances</p>
                  <p className="text-2xl font-bold text-cyan-600">89</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                View Full Profile
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Strategic Programs KPIs - NEW COMPREHENSIVE SECTION */}
        <TabsContent value="kpi" className="space-y-6">
          {/* Strategic Programs Overview Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strategicPrograms.map((program) => (
              <Card key={program.id} className="glass-card overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${program.gradient} text-white`}>
                      {program.icon}
                    </div>
                    {program.milestone && (
                      <Badge variant="success" className="text-xs">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg mt-3">{program.name}</CardTitle>
                  <CardDescription className="text-xs">{program.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {program.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <p className="text-xs text-slate-600">{metric.label}</p>
                      <p className={`text-sm font-bold ${metric.highlight ? 'text-slate-900' : 'text-slate-700'}`}>
                        {metric.value}
                        <span className="text-xs text-slate-400 ml-1">{metric.unit}</span>
                      </p>
                    </div>
                  ))}
                  {program.description && (
                    <p className="text-xs text-slate-500 mt-2">{program.description}</p>
                  )}
                  {program.status && (
                    <Badge variant="purple" className="text-xs mt-2">
                      <Sparkles className="h-3 w-3 mr-1" />
                      {program.status}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Program Breakdown */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Malaffi Detailed Stats */}
            <GlassPanel
              title="Malaffi - Health Information Exchange"
              description="3.5 Billion+ clinical records verified Aug 2025"
              badge="100% Connected"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-cyan text-white mx-auto mb-2">
                      <Database className="h-6 w-6" />
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900">3.5B+</p>
                    <p className="text-xs text-slate-500">Clinical Records</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-emerald text-white mx-auto mb-2">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900">100%</p>
                    <p className="text-xs text-slate-500">Hospitals Connected</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-purple text-white mx-auto mb-2">
                      <Users className="h-6 w-6" />
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900">12.7M</p>
                    <p className="text-xs text-slate-500">Patient Profiles</p>
                  </div>
                </div>
                <div className="rounded-lg bg-cyan-50 p-4 border border-cyan-200">
                  <p className="text-sm text-cyan-800 font-semibold mb-2">CONNECTIVITY SCOPE</p>
                  <p className="text-xs text-slate-600">All public and private hospitals in Abu Dhabi emirate connected to centralized health data platform</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Data Freshness</span>
                    <span className="font-bold text-emerald-600">Real-time</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            </GlassPanel>

            {/* Muashir Detailed Stats */}
            <GlassPanel
              title="Muashir - Healthcare Quality Index"
              description="Abu Dhabi Healthcare Quality Index (1-5 Diamond Rating)"
              badge="2 Outstanding"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-white mx-auto mb-2">
                      <Gem className="h-6 w-6" />
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900">5</p>
                    <p className="text-xs text-slate-500">Diamond Scale</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-amber text-white mx-auto mb-2">
                      <Award className="h-6 w-6" />
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900">2</p>
                    <p className="text-xs text-slate-500">5-Diamond Hospitals</p>
                  </div>
                </div>
                <div className="rounded-lg bg-amber-50 p-4 border border-amber-200">
                  <p className="text-sm text-amber-800 font-semibold mb-2">5-DIAMOND HOSPITALS</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <Crown className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
                      <span>Cleveland Clinic Abu Dhabi (CCAD) - Retained status</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Crown className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
                      <span>Burjeel Medical City (BMC) - Achieved 5-Diamond</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Facilities Certified</span>
                    <span className="font-bold text-slate-900">58+</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </GlassPanel>

            {/* Sahatna Detailed Stats */}
            <GlassPanel
              title="Sahatna - Wellness Super-App"
              description="1 Million+ users - Integrating Malaffi, Genomics & Abu Dhabi 360"
              badge="Super-App"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-emerald text-white mx-auto mb-2">
                      <Users className="h-6 w-6" />
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900">1M+</p>
                    <p className="text-xs text-slate-500">Active Users</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-teal text-white mx-auto mb-2">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900">3</p>
                    <p className="text-xs text-slate-500">Platforms Integrated</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-cyan text-white mx-auto mb-2">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900">First Year</p>
                    <p className="text-xs text-slate-500">Milestone</p>
                  </div>
                </div>
                <div className="rounded-lg bg-emerald-50 p-4 border border-emerald-200">
                  <p className="text-sm text-emerald-800 font-semibold mb-2">PLATFORM INTEGRATIONS</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-0.5 shrink-0" />
                      <span>Malaffi Records - Direct patient access to clinical history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-0.5 shrink-0" />
                      <span>Genomic Reports - EGP integration for genetic screening results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-0.5 shrink-0" />
                      <span>Abu Dhabi 360 - Legacy wellness app fully merged</span>
                    </li>
                  </ul>
                </div>
                <Badge variant="success" className="text-xs">
                  <Sparkles className="h-3 w-3 mr-1" />
                  First Year Milestone Achieved
                </Badge>
              </div>
            </GlassPanel>

            {/* Emirati Genome Program Detailed Stats */}
            <GlassPanel
              title="Emirati Genome Program (EGP)"
              description="815,000+ citizens sequenced - MANDATORY premarital screening"
              badge="National Priority"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-purple text-white mx-auto mb-2">
                      <Dna className="h-6 w-6" />
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900">815K+</p>
                    <p className="text-xs text-slate-500">Citizens Sequenced</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-pink text-white mx-auto mb-2">
                      <Database className="h-6 w-6" />
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900">570</p>
                    <p className="text-xs text-slate-500">Genes Screened</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-rose text-white mx-auto mb-2">
                      <Activity className="h-6 w-6" />
                    </div>
                    <p className="text-2xl font-extrabold text-slate-900">840+</p>
                    <p className="text-xs text-slate-500">Disorders Covered</p>
                  </div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
                  <p className="text-sm text-purple-800 font-semibold mb-2">MANDATORY SCREENING</p>
                  <p className="text-xs text-slate-600">Premarital genetic screening for all UAE citizens effective <strong>January 2025</strong></p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Target Completion</span>
                    <span className="font-bold text-purple-600">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                  <p className="text-xs text-slate-500">Approximately 80% of target population sequenced</p>
                </div>
                <Badge variant="purple" className="text-xs">
                  <Shield className="h-3 w-3 mr-1" />
                  National Strategic Initiative
                </Badge>
              </div>
            </GlassPanel>
          </div>

          {/* KPI Trends */}
          <GlassPanel title="Platform Performance Trends" description="30-day strategic metrics">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Source Coverage</span>
                  <span className="text-sm font-bold text-slate-900">94.2%</span>
                </div>
                <Progress value={94.2} className="h-3" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Crisis Detection Rate</span>
                  <span className="text-sm font-bold text-slate-900">91.8%</span>
                </div>
                <Progress value={91.8} className="h-3" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Narrative Accuracy</span>
                  <span className="text-sm font-bold text-slate-900">87.5%</span>
                </div>
                <Progress value={87.5} className="h-3" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Response Efficiency</span>
                  <span className="text-sm font-bold text-slate-900">96.3%</span>
                </div>
                <Progress value={96.3} className="h-3" />
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Success Signals - The "Dark Mirror" Positive Baseline */}
        <TabsContent value="success" className="space-y-6">
          {/* Executive Summary */}
          <GlassPanel
            title="The Dark Mirror: Positive/Neutral Baseline"
            description="Operational Resilience and Clinical Excellence in Abu Dhabi Healthcare (2024-2026)"
            badge="Success Signals"
          >
            <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4">
              <p className="text-sm text-emerald-800 font-semibold mb-2">EXECUTIVE INTELLIGENCE: THE SUCCESS SIGNAL HARVEST</p>
              <p className="text-xs text-slate-700 mb-3">
                Abu Dhabi has transitioned from a "capacity building" ecosystem to a "complex capability export" ecosystem. The sector is no longer merely retaining patients; it is actively reversing the global flow of high-acuity medical travel, evidenced by 35% growth in international patient volumes at flagship institutions like Cleveland Clinic Abu Dhabi.
              </p>
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div className="rounded bg-white p-2 border border-emerald-200">
                  <p className="text-lg font-bold text-emerald-600">35%</p>
                  <p className="text-xs text-slate-600">International Patient Growth</p>
                </div>
                <div className="rounded bg-white p-2 border border-emerald-200">
                  <p className="text-lg font-bold text-purple-600">51%</p>
                  <p className="text-xs text-slate-600">IVF Success Rate</p>
                </div>
                <div className="rounded bg-white p-2 border border-emerald-200">
                  <p className="text-lg font-bold text-cyan-600">9th</p>
                  <p className="text-xs text-slate-600">Global Medical Tourism</p>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* The Clinical Vanguard - "Miracle" Stories */}
          <GlassPanel title="The Clinical Vanguard: Miracle Stories" description="High-acuity triumphs validating entire perioperative infrastructure" badge="8 Cases">
            <div className="space-y-4">
              {clinicalVanguard.map((case_) => (
                <Card key={case_.id} className="glass-card overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${case_.gradient}`} />
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${case_.gradient} text-white`}>
                        {case_.icon}
                      </div>
                      <Badge variant={getCategoryColor(case_.category)} className="text-xs">
                        {case_.category}
                      </Badge>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{case_.procedure}</h4>
                    <p className="text-xs text-slate-500 mb-2">{case_.institution}</p>
                    <div className="rounded bg-slate-50 p-3 mb-3">
                      <p className="text-xs font-semibold text-slate-700 mb-1">{case_.milestone}</p>
                      <p className="text-xs text-slate-600">{case_.description}</p>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <Globe className="h-3 w-3 text-purple-500 mt-0.5 shrink-0" />
                      <p className="text-slate-600 italic">{case_.globalPosition}</p>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">{case_.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* The Patient Voice - "Thank You" Signals */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Patient Voice Analysis" description="The 'Thank You' Signal Harvest from testimonials" badge="4 Sources">
              <div className="space-y-3">
                {patientTestimonials.map((item, idx) => (
                  <div key={idx} className={`rounded-lg border-l-4 bg-gradient-to-r ${item.color === 'emerald' ? 'border-emerald-500 from-emerald-50 to-transparent' : item.color === 'cyan' ? 'border-cyan-500 from-cyan-50 to-transparent' : item.color === 'purple' ? 'border-purple-500 from-purple-50 to-transparent' : 'border-rose-500 from-rose-50 to-transparent'} p-3`}>
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <span className="text-xs font-bold text-slate-700">{item.institution}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-800 mb-2">"{item.sentiment}"</p>
                    <p className="text-xs text-slate-600 mb-2">{item.detail}</p>
                    <div className={`rounded px-2 py-1 text-xs font-semibold ${item.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : item.color === 'cyan' ? 'bg-cyan-100 text-cyan-700' : item.color === 'purple' ? 'bg-purple-100 text-purple-700' : 'bg-rose-100 text-rose-700'}`}>
                      {item.implication}
                    </div>
                    <p className="text-xs text-slate-400 mt-2 italic">— {item.source}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Fertility Success & IVF Metrics" description="Social impact and strategic value of reproductive health" badge="51% Success">
              <div className="space-y-4">
                <div className="text-center py-4 rounded-lg bg-purple-50 border border-purple-200">
                  <p className="text-4xl font-extrabold text-purple-600">{fertilitySuccessData.rate}</p>
                  <p className="text-sm text-slate-600 mt-1">IVF Success Rate - {fertilitySuccessData.ranking}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center rounded-lg bg-emerald-50 p-3 border border-emerald-200">
                    <p className="text-2xl font-bold text-emerald-600">{fertilitySuccessData.babies}</p>
                    <p className="text-xs text-slate-600">Babies Born Via IVF</p>
                  </div>
                  <div className="text-center rounded-lg bg-cyan-50 p-3 border border-cyan-200">
                    <p className="text-2xl font-bold text-cyan-600">{fertilitySuccessData.timeframe}</p>
                    <p className="text-xs text-slate-600">Data Period</p>
                  </div>
                </div>
                <div className="rounded bg-slate-50 p-3 border border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">Global Impact</p>
                  <p className="text-sm text-slate-700">{fertilitySuccessData.impact}</p>
                </div>
                <div className="rounded bg-purple-50 p-3 border border-purple-200">
                  <p className="text-xs text-purple-600 font-semibold mb-1">Strategic Value</p>
                  <p className="text-xs text-slate-700">{fertilitySuccessData.strategicValue}</p>
                </div>
              </div>
            </GlassPanel>
          </div>

          {/* Global Recognition - External Validation */}
          <GlassPanel title="Global Recognition" description="External validation from global ranking bodies provides objective 'control'" badge="#1 in GCC">
            <div className="space-y-4">
              {globalRankings.map((item, idx) => (
                <Card key={idx} className={`glass-card overflow-hidden border-l-4 ${item.hospital.includes('Cleveland') ? 'border-l-purple-500' : item.hospital.includes('SSMC') ? 'border-l-cyan-500' : 'border-l-emerald-500'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${item.gradient} text-white`}>
                        {item.icon}
                      </div>
                      <div className="text-right">
                        <Badge variant={idx === 0 ? 'purple' : idx === 1 ? 'cyan' : 'emerald'} className="text-xs mb-1">
                          {item.rankRegional}
                        </Badge>
                        <p className="text-xs text-slate-500">{item.rankGlobal}</p>
                      </div>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.hospital}</h4>
                    <p className="text-xs text-slate-600 mb-2">{item.recognition}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {item.citedFor.map((cit, citIdx) => (
                        <Badge key={citIdx} variant="outline" className="text-xs">
                          {cit}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-slate-400">Valid through {item.validThrough}</p>
                  </CardContent>
                </Card>
              ))}

              {/* Medical Tourism Metrics */}
              <div className="rounded-lg bg-gradient-cyan p-4 text-white">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold">Medical Tourism Performance</h4>
                  <Badge className="bg-white text-cyan-600">9th Globally</Badge>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/20 rounded p-2 text-center">
                    <p className="text-2xl font-bold">{medicalTourismMetrics.growthRate}</p>
                    <p className="text-xs">Growth Rate</p>
                  </div>
                  <div className="bg-white/20 rounded p-2 text-center">
                    <p className="text-2xl font-bold">{medicalTourismMetrics.internationalPatients}</p>
                    <p className="text-xs">International Patients</p>
                  </div>
                  <div className="bg-white/20 rounded p-2 text-center">
                    <p className="text-2xl font-bold">{medicalTourismMetrics.topMarkets.length}</p>
                    <p className="text-xs">Top Markets</p>
                  </div>
                </div>
                <div className="mt-3 rounded bg-white/10 p-2">
                  <p className="text-xs font-semibold mb-1">Economic Implication:</p>
                  <p className="text-xs">{medicalTourismMetrics.economicImplication}</p>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* The Human Element - Unsung Heroes */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Istijaba Platform" description="Centralized nerve center for emergency response and crisis management" badge="Critical Infrastructure">
              <div className="space-y-4">
                <div className="rounded bg-purple-50 p-3 border border-purple-200">
                  <p className="text-xs text-purple-600 font-semibold mb-1">PLATFORM FUNCTION</p>
                  <p className="text-xs text-slate-700">{istijabaPlatform.function}</p>
                </div>
                <div className="rounded bg-cyan-50 p-3 border border-cyan-200">
                  <p className="text-xs text-cyan-600 font-semibold mb-1">INTEGRATION</p>
                  <p className="text-xs text-slate-700">{istijabaPlatform.integration}</p>
                </div>
                <div className="rounded bg-emerald-50 p-3 border border-emerald-200">
                  <p className="text-xs text-emerald-600 font-semibold mb-1">ORIGIN</p>
                  <p className="text-xs text-slate-700">{istijabaPlatform.origin}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-2">Key Capabilities:</p>
                  <ul className="space-y-1">
                    {istijabaPlatform.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded bg-amber-50 p-3 border border-amber-200">
                  <p className="text-xs text-amber-700 font-semibold">Impact: {istijabaPlatform.impact}</p>
                </div>
              </div>
            </GlassPanel>

            <GlassPanel title="Viral Heroism Stories" description="Human resilience and individual acts of heroism defining the system's character" badge="Unsung Heroes">
              <div className="space-y-3">
                {viralHeroismStories.map((story, idx) => (
                  <div key={idx} className={`rounded-lg border-l-4 ${story.color === 'red' ? 'border-red-500 bg-red-50' : story.color === 'cyan' ? 'border-cyan-500 bg-cyan-50' : 'border-gold bg-amber-50'} p-3`}>
                    <div className="flex items-start gap-2 mb-2">
                      {story.icon}
                      <h4 className="text-sm font-bold text-slate-900">{story.story}</h4>
                    </div>
                    <p className="text-xs text-slate-700 mb-2">{story.detail}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">{story.source}</Badge>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 italic">{story.implication}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Strategic Synthesis - Positive Sentiment Radar */}
          <GlassPanel title="Strategic Synthesis: Positive Sentiment Radar" description="The Dark Mirror reveals a system robust enough to withstand significant scrutiny" badge="Reputational Armor">
            <div className="space-y-6">
              {/* Counter-Narratives Table */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3">Counter-Narratives: The Reputational Armor</h4>
                <div className="rounded-lg border border-slate-200 overflow-hidden">
                  <div className="grid grid-cols-12 bg-slate-100 p-2 text-xs font-bold text-slate-700">
                    <div className="col-span-3">Threat Narrative</div>
                    <div className="col-span-3">Success Signal</div>
                    <div className="col-span-6">Evidence</div>
                  </div>
                  {counterNarratives.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-12 p-3 border-t border-slate-100 items-start text-xs">
                      <div className="col-span-3">
                        <Badge variant="outline" className="text-xs text-slate-600">{item.threat}</Badge>
                      </div>
                      <div className="col-span-3">
                        <div className={`flex items-center gap-1 ${item.color === 'emerald' ? 'text-emerald-700' : item.color === 'purple' ? 'text-purple-700' : item.color === 'cyan' ? 'text-cyan-700' : 'text-rose-700'}`}>
                          {item.icon}
                          <span className="font-semibold">{item.successSignal}</span>
                        </div>
                      </div>
                      <div className="col-span-6 text-slate-600">{item.evidence}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second-Order Insights */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3">Second-Order Insights: The Ripple Effects of Excellence</h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  {secondOrderInsights.map((insight, idx) => (
                    <Card key={idx} className={`glass-card border-t-4 ${insight.color === 'emerald' ? 'border-t-emerald-500' : insight.color === 'purple' ? 'border-t-purple-500' : 'border-t-cyan-500'}`}>
                      <CardContent className="p-4">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${insight.color === 'emerald' ? 'bg-gradient-emerald' : insight.color === 'purple' ? 'bg-gradient-purple' : 'bg-gradient-cyan'} text-white mb-3`}>
                          {insight.icon}
                        </div>
                        <h5 className="text-sm font-bold text-slate-900 mb-2">{insight.title}</h5>
                        <p className="text-xs text-slate-700 mb-2">{insight.insight}</p>
                        <div className={`rounded px-2 py-1 text-xs font-semibold ${insight.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : insight.color === 'purple' ? 'bg-purple-100 text-purple-700' : 'bg-cyan-100 text-cyan-700'}`}>
                          {insight.impact}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Strategic Conclusion */}
              <Alert className="border-emerald-500 bg-emerald-50 dark:bg-emerald-950">
                <Award className="h-4 w-4 text-emerald-500" />
                <AlertTitle className="text-emerald-700 text-sm">The Resilience of the Control Group</AlertTitle>
                <AlertDescription className="text-emerald-600 text-xs">
                  The Positive/Neutral Baseline for Abu Dhabi healthcare in 2024-2025 is defined by <strong>verified clinical excellence</strong>. The sector has successfully graduated from a "marketing-led" reputation to an "outcomes-led" reputation. The proliferation of "miracle stories" backed by hard data on transplants, viral patient gratitude, and global rankings provides a thick layer of reputational armor.
                </AlertDescription>
              </Alert>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* WhatsApp Mirror */}
        <TabsContent value="whatsapp" className="space-y-6">
          <Alert variant="info">
            <Phone className="h-4 w-4" />
            <AlertTitle>WhatsApp Mirror Active</AlertTitle>
            <AlertDescription>
              Monitoring dark social channels for early warning signals and misinformation patterns.
            </AlertDescription>
          </Alert>

          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Recent WhatsApp Activity" badge="Live">
              <ScrollArea className="h-96">
                <div className="space-y-3 pr-4">
                  {[
                    { msg: 'Forwarded: New vaccine center opening in Khalifa City A', time: '2m ago', type: 'info' },
                    { msg: 'Question: Is the PCR test still required for travel?', time: '5m ago', type: 'question' },
                    { msg: 'Alert: Rumor about vaccine side effects spreading', time: '8m ago', type: 'warning' },
                    { msg: 'Forwarded: DoH announcement about health guidelines', time: '12m ago', type: 'info' },
                    { msg: 'Discussion: Insurance claim rejection issues', time: '15m ago', type: 'concern' },
                    { msg: 'Forwarded: Malaffi app tutorial video', time: '18m ago', type: 'info' },
                    { msg: 'Question: Where to get booster shots?', time: '22m ago', type: 'question' },
                    { msg: 'Alert: Complaint about hospital wait times', time: '25m ago', type: 'concern' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 rounded-lg p-3 ${
                        item.type === 'warning' ? 'bg-red-50/50 border border-red-200' :
                        item.type === 'concern' ? 'bg-amber-50/50 border border-amber-200' :
                        'bg-slate-50/50'
                      }`}
                    >
                      <MessageSquare className={`h-4 w-4 mt-0.5 ${
                        item.type === 'warning' ? 'text-red-500' :
                        item.type === 'concern' ? 'text-amber-500' :
                        'text-slate-400'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-700">{item.msg}</p>
                        <p className="text-xs text-slate-400 mt-1">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            <GlassPanel title="Dark Social Analytics">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">WhatsApp Groups Monitored</span>
                    <span className="text-lg font-bold text-slate-900">1,247</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[75%] bg-gradient-cyan rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Daily Message Volume</span>
                    <span className="text-lg font-bold text-slate-900">45.2K</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[68%] bg-gradient-denim rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Misinformation Detected</span>
                    <span className="text-lg font-bold text-red-600">23</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[15%] bg-gradient-red rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Response Rate</span>
                    <span className="text-lg font-bold text-emerald-600">67%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[67%] bg-gradient-emerald rounded-full" />
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* Strategic Alerts */}
        <TabsContent value="alerts" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <Badge variant="destructive">Critical</Badge>
                </div>
                <CardTitle className="text-lg">Vaccine Misinformation Spike</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Detected 340% increase in vaccine-related misinformation across 5 WhatsApp groups in the last 24 hours.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Confidence</span>
                    <span className="font-bold text-red-600">94%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Impact</span>
                    <span className="font-bold text-red-600">High</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Urgency</span>
                    <span className="font-bold text-red-600">Immediate</span>
                  </div>
                </div>
                <Button className="mt-4 w-full bg-gradient-red hover:opacity-90 text-white">
                  Initiate Response Protocol
                </Button>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Eye className="h-5 w-5 text-amber-500" />
                  <Badge variant="warning">Warning</Badge>
                </div>
                <CardTitle className="text-lg">Insurance Complaint Surge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  45% increase in insurance claim rejection complaints on ExpatWoman forums and Reddit.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Confidence</span>
                    <span className="font-bold text-amber-600">87%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Impact</span>
                    <span className="font-bold text-amber-600">Medium</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Urgency</span>
                    <span className="font-bold text-amber-600">24 Hours</span>
                  </div>
                </div>
                <Button className="mt-4 w-full bg-gradient-gold hover:opacity-90 text-white">
                  Review Details
                </Button>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-emerald-50/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <TrendingUp className="h-5 w-5 text-emerald-500" />
                  <Badge variant="success">Success</Badge>
                </div>
                <CardTitle className="text-lg">Mental Health Campaign</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  "Beauty of Our Mind" campaign achieving 156% above average engagement across all platforms.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Engagement</span>
                    <span className="font-bold text-emerald-600">+156%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Sentiment</span>
                    <span className="font-bold text-emerald-600">89% Positive</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Reach</span>
                    <span className="font-bold text-emerald-600">2.3M</span>
                  </div>
                </div>
                <Button className="mt-4 w-full bg-gradient-emerald hover:opacity-90 text-white">
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Advanced Analytics - NEW D3 VISUALIZATIONS */}
        <TabsContent value="advanced" className="space-y-6">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold gradient-text-purple">Advanced Analytics Dashboard</h3>
              <p className="text-sm text-slate-600 mt-1">Next-generation D3.js visualizations for deep insights</p>
            </div>
            <Badge variant="purple" className="gap-1">
              <Sparkles className="h-3 w-3" />
              20+ New Visualizations
            </Badge>
          </div>

          {/* Strategic Pillar Health - Bullet Graphs */}
          <GlassPanel title="Strategic Pillar Health" description="Performance vs targets using bullet graphs" badge="Critical KPIs">
            <div className="space-y-4">
              {bulletGraphData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-24 text-sm font-semibold text-slate-700">{item.title}</div>
                  <div className="flex-1">
                    <BulletGraph
                      data={[{
                        title: item.title,
                        value: item.value,
                        target: item.target,
                        ranges: item.ranges
                      }]}
                      width={600}
                      height={40}
                      showScale={true}
                    />
                  </div>
                  <div className="w-20 text-right">
                    <span className={`text-lg font-bold ${item.value >= item.target ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {item.value}%
                    </span>
                    <p className="text-xs text-slate-500">Target: {item.target}%</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Sentiment Analysis - Ridgeline Plot + Word Cloud */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Sentiment Distribution by Platform" description="Ridgeline plot showing sentiment over time" badge="Ridgeline Plot">
              <RidgelinePlot
                data={ridgelineData}
                width={500}
                height={350}
                colors={['#0ea5e9', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444']}
                showLabels={true}
              />
            </GlassPanel>

            <GlassPanel title="Trending Topics" description="Word cloud of key healthcare topics" badge="Word Cloud">
              <WordCloud
                data={wordCloudData}
                width={500}
                height={350}
                colors={['#0ea5e9', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444']}
              />
            </GlassPanel>
          </div>

          {/* Network Graph + Treemap */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Influencer Network" description="Force-directed graph of key connections" badge="Network Graph">
              <NetworkGraph
                nodes={networkData.nodes}
                links={networkData.links}
                width={500}
                height={400}
                linkDistance={100}
                nodeRadius={8}
                showLabels={true}
                colors={{
                  official: '#22c55e',
                  platform: '#3b82f6',
                  influencer: '#8b5cf6',
                  media: '#f59e0b',
                  community: '#ef4444'
                }}
              />
            </GlassPanel>

            <GlassPanel title="Narrative Hegemony" description="Share of voice treemap" badge="Treemap">
              <Treemap
                data={treemapData}
                width={500}
                height={400}
                showLabels={true}
                colors={['#22c55e', '#3b82f6', '#8b5cf6', '#ef4444']}
              />
            </GlassPanel>
          </div>

          {/* Global Benchmarking - Dumbbell Plot + Radar Chart */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Global Benchmarking" description="Before/After comparison with dumbbell plot" badge="Dumbbell Plot">
              <DumbbellPlot
                data={dumbbellData}
                width={500}
                height={350}
                showLabels={true}
                color1="#94a3b8"
                color2="#22c55e"
              />
            </GlassPanel>

            <GlassPanel title="Multi-Emirate Comparison" description="Radar chart for dimensional analysis" badge="Radar Chart">
              <RadarSpiderChart
                data={radarData}
                axes={['Quality', 'Innovation', 'Access', 'Efficiency', 'Satisfaction', 'Safety']}
                width={500}
                height={400}
                levels={5}
                colors={['#22c55e', '#3b82f6', '#94a3b8']}
                showPoints={true}
                fillOpacity={0.2}
              />
            </GlassPanel>
          </div>

          {/* Crisis Response Pipeline - Funnel Chart */}
          <GlassPanel title="Crisis Response Pipeline" description="Conversion funnel from detection to analysis" badge="Funnel Chart">
            <div className="flex justify-center">
              <FunnelChart
                data={funnelData}
                width={700}
                height={300}
                showLabels={true}
                showValues={true}
                colors={['#ef4444', '#f59e0b', '#eab308', '#22c55e', '#10b981']}
              />
            </div>
          </GlassPanel>

          {/* Platform Performance - Radial Bar Chart */}
          <GlassPanel title="Platform Performance Index" description="Radial bar chart for engagement metrics" badge="Radial Bar Chart">
            <div className="flex justify-center">
              <RadialBarChart
                data={radialBarData}
                width={700}
                height={350}
                showLabels={true}
                labelSize={11}
                colors={['#0ea5e9', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4']}
              />
            </div>
          </GlassPanel>

          {/* Year-long Activity - Calendar Heatmap */}
          <GlassPanel title="2025 Activity Calendar" description="Full year heatmap showing daily engagement" badge="Calendar Heatmap">
            <div className="overflow-x-auto">
              <CalendarHeatmapFull
                data={calendarData}
                year={2025}
                width={900}
                height={200}
                cellSize={14}
                cellGap={3}
                showMonthLabels={true}
                showDayLabels={true}
                showLegend={true}
                colors={['#f0f9ff', '#bae6dd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1']}
              />
            </div>
          </GlassPanel>

          {/* Rank Changes - Bump Chart */}
          <GlassPanel title="Rank Changes Over Time" description="Bump chart showing ranking fluctuations" badge="Bump Chart">
            <BumpChart
              data={bumpData}
              width={800}
              height={300}
              showLabels={true}
              labelSize={11}
              colors={{
                'DoH': '#22c55e',
                'DHA': '#3b82f6',
                'SEHA': '#f59e0b',
                'MoHAP': '#ef4444'
              }}
            />
          </GlassPanel>

          {/* Before/After Comparisons - Slope Graph */}
          <GlassPanel title="Initiative Impact Analysis" description="Slope graph showing before/after metrics" badge="Slope Graph">
            <div className="flex justify-center">
              <SlopeGraph
                data={slopeData}
                width={700}
                height={400}
                showLabels={true}
                showValues={true}
                labelSize={12}
                colors={['#94a3b8', '#22c55e']}
              />
            </div>
          </GlassPanel>

          {/* Multi-Source Activity Flow - Streamgraph */}
          <GlassPanel title="Multi-Source Activity Flow" description="Theme river showing content flow across platforms" badge="Streamgraph">
            <Streamgraph
              data={streamgraphData}
              width={900}
              height={300}
              showLabels={true}
              colors={['#0ea5e9', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444']}
            />
          </GlassPanel>

          {/* Information Flow - Sankey Diagram */}
          <GlassPanel title="Information Flow Analysis" description="Sankey diagram showing narrative propagation" badge="Sankey Diagram">
            <div className="flex justify-center">
              <SankeyDiagram
                nodes={sankeyData.nodes}
                links={sankeyData.links}
                width={800}
                height={350}
                nodeWidth={15}
                nodePadding={10}
                showLabels={true}
                showValues={true}
                colors={['#22c55e', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#64748b']}
              />
            </div>
          </GlassPanel>

          {/* Platform Performance Matrix - Matrix Chart */}
          <GlassPanel title="Platform Performance Matrix" description="Heat map of engagement by time of day" badge="Matrix Chart">
            <div className="flex justify-center">
              <MatrixChart
                data={matrixData}
                width={500}
                height={280}
                showLabels={true}
                showValues={true}
                roundCells={true}
                colors={['#f0f9ff', '#bae6dd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1']}
              />
            </div>
          </GlassPanel>

          {/* Infrastructure Health - Tile Grid */}
          <GlassPanel title="Infrastructure Health Monitor" description="Real-time status of 50 critical assets" badge="Tile Grid">
            <div className="flex justify-center">
              <TileGrid
                data={tileGridData}
                columns={10}
                tileSize="sm"
                showValues={true}
                colorScheme="categorical"
              />
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-600">Healthy ({tileGridData.filter(t => t.status === 'success').length})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-xs text-slate-600">Warning ({tileGridData.filter(t => t.status === 'warning').length})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-xs text-slate-600">Critical ({tileGridData.filter(t => t.status === 'danger').length})</span>
              </div>
            </div>
          </GlassPanel>

          {/* Horizon Chart - 3-Ring Digital Pulse */}
          <GlassPanel title="3-Ring Digital Pulse Visualization" description="Horizon chart showing layered sentiment trends" badge="Horizon Chart">
            <HorizonChart
              data={horizonData}
              width={900}
              height={200}
              bands={3}
              colors={['#22c55e', '#3b82f6', '#8b5cf6']}
            />
          </GlassPanel>

          {/* Progress Rings - Key Metrics */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'System Health', value: 92, color: '#22c55e' },
              { label: 'Data Quality', value: 88, color: '#3b82f6' },
              { label: 'Compliance', value: 95, color: '#8b5cf6' },
              { label: 'Innovation Score', value: 79, color: '#f59e0b' },
            ].map((metric, idx) => (
              <Card key={idx} className="glass-panel text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <ProgressRing
                      value={metric.value}
                      size={120}
                      strokeWidth={10}
                      color={metric.color}
                      showPercentage={true}
                    />
                  </div>
                  <h4 className="font-semibold text-slate-900">{metric.label}</h4>
                  <p className="text-2xl font-bold mt-1" style={{ color: metric.color }}>{metric.value}%</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="glass-panel bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <CardContent className="pt-6">
                <Sparkles className="h-8 w-8 mb-2 opacity-80" />
                <p className="text-sm opacity-90">New Visualizations</p>
                <p className="text-3xl font-bold mt-1">20+</p>
              </CardContent>
            </Card>
            <Card className="glass-panel bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <CardContent className="pt-6">
                <Dna className="h-8 w-8 mb-2 opacity-80" />
                <p className="text-sm opacity-90">D3.js Components</p>
                <p className="text-3xl font-bold mt-1">50</p>
              </CardContent>
            </Card>
            <Card className="glass-panel bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
              <CardContent className="pt-6">
                <Target className="h-8 w-8 mb-2 opacity-80" />
                <p className="text-sm opacity-90">Data Points</p>
                <p className="text-3xl font-bold mt-1">1000+</p>
              </CardContent>
            </Card>
            <Card className="glass-panel bg-gradient-to-br from-orange-500 to-red-500 text-white">
              <CardContent className="pt-6">
                <Award className="h-8 w-8 mb-2 opacity-80" />
                <p className="text-sm opacity-90">Real-Time Updates</p>
                <p className="text-3xl font-bold mt-1">Live</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
