'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  BarChart3 as LucideBarChart,
  PieChart as LucidePieChart,
} from 'lucide-react'
import {
  Clock,
  Flame,
  TrendingUp,
  Users,
  Share2,
  Star,
  Award,
  Target,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Download,
  Sparkles,
  Zap,
  Eye,
  Hash,
  Heart,
  MessageSquare,
  Crown,
  Shield,
  Gem,
  Radio,
  Video,
  Ghost,
  Smile,
  UserX,
  Frown,
  AlertOctagon,
  Camera,
  ScanLine,
  Smartphone,
  QrCode,
  Play,
  Pause,
  Volume2,
  BookOpen,
  FileText,
  Info,
  MapPin,
  Link,
  Bookmark,
  Reply,
  Siren,
  StopCircle,
  Phone,
  Airplay,
  Monitor,
  Moon as MoonIcon,
  GraduationCap,
  Baby,
  Syringe,
  Activity as ActivityIcon,
  Umbrella,
  Cloud,
  Wrench,
  ChefHat,
  Bone,
  Cpu,
  Pill,
  Bug,
  CloudLightning,
  Home,
  CalendarClock
} from 'lucide-react'
import { ricochetData } from '@/lib/data-loader'

export default function AmplificationViralPage() {
  // Extract real data from data loader
  const { catalystNodes, viralLoops } = ricochetData.amplification
  const amplificationMetrics = [
    { title: 'Active Nodes', value: '156', trend: 'up' as const, gradient: 'emerald' as const },
    { title: 'Viral Coefficient', value: '2.8', trend: 'up' as const, gradient: 'cyan' as const },
    { title: 'Amplification Rate', value: '847%', trend: 'up' as const, gradient: 'indigo' as const },
    { title: 'Avg Reach Multiplier', value: '12.4x', trend: 'up' as const, gradient: 'purple' as const }
  ]

  const grassrootsNetwork = [
    {
      category: 'Community Champions',
      count: 45,
      reach: '1.2M',
      engagement: '11.2%',
      avgLift: 145,
      color: 'emerald'
    },
    {
      category: 'Wellness Warriors',
      count: 67,
      reach: '2.4M',
      engagement: '8.9%',
      avgLift: 123,
      color: 'cyan'
    },
    {
      category: 'Medical Trenches',
      count: 34,
      reach: '890K',
      engagement: '9.7%',
      avgLift: 167,
      color: 'indigo'
    },
    {
      category: 'Patient Advocates',
      count: 23,
      reach: '456K',
      engagement: '14.5%',
      avgLift: 189,
      color: 'purple'
    },
    {
      category: 'Lifestyle Bloggers',
      count: 56,
      reach: '3.4M',
      engagement: '6.7%',
      avgLift: 98,
      color: 'rose'
    }
  ]

  const amplificationCampaigns = [
    {
      id: '1',
      name: 'Vaccine Awareness Amplification',
      nodes: 23,
      platforms: 8,
      status: 'active',
      originalReach: '234K',
      amplifiedReach: '4.5M',
      multiplier: 19.2,
      started: '2 days ago'
    },
    {
      id: '2',
      name: 'Mental Health Month',
      nodes: 45,
      platforms: 12,
      status: 'active',
      originalReach: '567K',
      amplifiedReach: '8.9M',
      multiplier: 15.7,
      started: '5 days ago'
    },
    {
      id: '3',
      name: 'Summer Health Initiative',
      nodes: 12,
      platforms: 6,
      status: 'scheduled',
      originalReach: '123K',
      amplifiedReach: '—',
      multiplier: 0,
      started: 'Tomorrow'
    },
    {
      id: '4',
      name: 'Patient Rights Education',
      nodes: 34,
      platforms: 10,
      status: 'completed',
      originalReach: '345K',
      amplifiedReach: '6.7M',
      multiplier: 19.4,
      started: '1 week ago'
    }
  ]

  const viralTriggers = [
    { trigger: 'Controversy/Debate', effectiveness: 78, risk: 'high', examples: 23 },
    { trigger: 'Emotional Storytelling', effectiveness: 89, risk: 'low', examples: 45 },
    { trigger: 'Unexpected Twist', effectiveness: 72, risk: 'medium', examples: 18 },
    { trigger: 'Visual Shock', effectiveness: 84, risk: 'medium', examples: 34 },
    { trigger: 'Celebrity Endorsement', effectiveness: 67, risk: 'low', examples: 12 },
    { trigger: 'Challenge/Trend', effectiveness: 91, risk: 'medium', examples: 56 }
  ]

  const performanceInsights = [
    {
      metric: 'Best Time to Post',
      value: '18:00-20:00',
      platform: 'All',
      lift: '+67%',
      icon: <Clock className="h-4 w-4" />
    },
    {
      metric: 'Top Content Type',
      value: 'Short Video',
      platform: 'TikTok, Reels',
      lift: '+234%',
      icon: <Video className="h-4 w-4" />
    },
    {
      metric: 'Best Hashtag Count',
      value: '8-12 tags',
      platform: 'Instagram',
      lift: '+45%',
      icon: <Hash className="h-4 w-4" />
    },
    {
      metric: 'Optimal Post Length',
      value: '80-120 chars',
      platform: 'X/Twitter',
      lift: '+78%',
      icon: <MessageSquare className="h-4 w-4" />
    }
  ]

  // AMPLIFICATION NETWORK AUDIT DATA - FILE 03

  // EXECUTIVE SUMMARY
  const executiveSummary = {
    thesis: 'The digital communication landscape has evolved into a sophisticated negotiation of trust, influence, and algorithmic visibility',
    keyFinding: 'Dichotomy between "Blockers" (fake influencers) and "Catalyst Nodes" (real advocates)',
    strategic: 'Must operationalize distinction between fake and real advocacy through rigorous auditing dashboard'
  }

  // SECTION 2: UAE DIGITAL ECOSYSTEM
  const uaeContentEconomy = {
    event: '1 Billion Followers Summit',
    positioning: 'Content as strategic national asset - "driving force capable of improving lives"',
    challenge: 'Over 50 million videos daily across platforms - health authority struggles for visibility',
    regulation: 'National Media Council (NMC) licensing + MoHAP approval for health products'
  }

  // SECTION 3: THE "BLOCKER" AUDIT
  const blockerAudit = {
    fakeBoost: 'Statistically improbable surge in engagement lacking qualitative depth',
    costRange: '$5,000 - $30,000 USD per post for Dubai influencers',
    botFarms: 'Services selling "Instagram Emoji Comments" and "Power Followers" - 0-1 hours delivery',
    risk: 'False consensus - policy appears popular when no human processed information'
  }

  const blockerIndicators = [
    {
      name: 'The "Emoji-Only" Indicator',
      description: 'Comment section filled with "🔥🔥🔥", "😍", "Great pic!" instead of questions',
      risk: 'Creates false consensus, hides real sentiment under artificial noise',
      forensic: 'Organic health engagement builds slowly; artificial arrives in tsunami of immediate noise'
    },
    {
      name: 'Algorithmic Mismatch',
      description: 'Serious health advisory receives comments only about physical appearance',
      risk: 'Audience engaged with visuals not voice - indicates follower fraud',
      forensic: 'Geographic distribution shows followers in Brazil, Russia, Southeast Asian bot farms'
    }
  ]

  const caseStudyBlocker = {
    name: 'Suhad Ahmad (@sohailfitness)',
    followers: '425.5K',
    sector: 'Fitness, Health, Bodybuilding',
    auditFinding: 'Flagged with "Check fake followers" warning by influencer auditing databases',
    blockerDynamic: [
      'Engagement Simulation: Post might receive 5,000 likes',
      'Qualitative Failure: Comments focus on physique or "Beast! Machine!" rather than nutritional advice',
      'Risk: Association with flagged profile carries reputational risk'
    ]
  }

  // SECTION 4: THE "ALLY" AUDIT - CATALYST NODES
  const catalystArchetypes = [
    {
      type: 'Authority Node',
      description: 'Healthcare professionals who bridge gap between sterile policy and warm care',
      cases: [
        {
          name: 'Dr. Farida Al Hosani',
          role: 'Official spokesperson for health sector',
          mechanism: 'Posts viewed as "intelligence" not "content" - high-attention behaviors (saving, sharing to family)',
          value: 'Stabilizer in network, correcting misinformation by presence'
        },
        {
          name: 'Nurse Suhad Issa Marjei',
          role: 'Nurse at SKMC, 25 years diabetes education',
          mechanism: 'Micro-authority - audience composed of actual patients and colleagues',
          value: 'Comments contain personal testimonials - social proof transforms bureaucratic to community-endorsed'
        }
      ]
    },
    {
      type: 'Empathy Node',
      description: 'Patient advocates who validate the experience of healthcare',
      cases: [
        {
          name: 'Khaleel Al Herani',
          role: 'Heart transplant recipient at Cleveland Clinic Abu Dhabi',
          narrative: 'Story of waiting for heart while maintaining bodybuilding routine',
          value: 'Catalyst for Organ Donation awareness - destigmatizes complex medical procedure'
        },
        {
          name: 'Nora & Khalid',
          role: 'Multicultural couple (Emirati/Arab/German mix)',
          narrative: 'Relatable Household - "experts in living" not medical experts',
          value: 'Perfect Catalyst for Lifestyle & Prevention - models healthy behaviors authentically'
        }
      ]
    },
    {
      type: 'Grassroots Node',
      description: 'Volunteers and community members with high local trust but low reach',
      count: '20,000+ volunteer licenses issued by ADPHC/DCD',
      mechanism: 'Volunteer selfie from event validates to immediate circle (500-1000 friends)',
      value: 'Content stays in Circle of Trust - immune to skepticism of paid ads'
    }
  ]

  const catalystTaggingSystem = [
    { tag: '#Catalyst_Node', criteria: 'High local audience %, High sentiment score, consistent health content', use: 'Core partner for behavioral change campaigns' },
    { tag: '#Authority_Node', criteria: 'Verified medical professional (Dr/Nurse), linked to SEHA/Cleveland Clinic', use: 'Disseminating technical/policy information & debunking rumors' },
    { tag: '#Empathy_Node', criteria: 'Patient/Survivor with high narrative engagement', use: 'Destigmatizing conditions (Mental Health, Cancer, Organ Donation)' },
    { tag: '#Grassroots_Node', criteria: 'Volunteer/Community member with high local trust but low reach', use: 'Mobilizing physical attendance and localized awareness' }
  ]

  // SECTION 5: DARK SOCIAL LEAKAGE
  const darkSocialLeakage = {
    premise: 'Screenshot has replaced Hyperlink as preferred currency of information exchange',
    digitalMajlis: 'Family WhatsApp group acts as semi-private space where news is vetted',
    frictionOfLinks: 'Users wary of clicking links due to phishing fears and browser load friction',
    permanence: 'Screenshot is static, instantly readable, saves to gallery, works offline'
  }

  const screenshotCategories = [
    {
      type: 'Critical Infrastructure & Safety Alerts',
      trigger: 'NCM weather warnings (Rain, Dust Storms), ADEK school closure announcements',
      behavior: 'Parents screenshot "Remote Learning Tomorrow" to prove plans must change to spouse/employer',
      keywords: 'Look at this, School closed, Rain tomorrow, Sent to family group'
    },
    {
      type: 'Official Circulars',
      trigger: 'New regulations regarding insurance, visas, medical standards (DoH Circular No. 144 of 2024)',
      behavior: 'Professionals screenshot relevant paragraph and forward to professional/family groups',
      risk: 'Cropping removes context - screenshot without date/preamble leads to expired or misinterpreted regulations'
    },
    {
      type: 'The Rumor Mill',
      trigger: 'Anxiety-inducing news (25% Health Insurance Hike, Contaminated Kits, Dogs dying of tremors)',
      behavior: 'Fake images mimicking official logos (MoHRE, DoH) travel rapidly - high contrast, bold text, urgent tone',
      risk: 'Designed to be screenshotted - borrows authority to spread misinformation'
    }
  ]

  const downloadableCardSpecs = {
    format: '9:16 (Vertical) for WhatsApp/IG Stories, 1:1 (Square) for feed posts',
    visual: 'Massive headline text - readable without zooming on mobile',
    stamp: 'Dynamic uncroppable watermark containing Date, Time, Official QR Code - prevents Zombie Rumor',
    size: 'Data-light <100kb for instant download during emergencies'
  }

  const rumorKillerCard = {
    purpose: 'Reactive response to trending hoaxes on Dark Social',
    design: 'Card featuring rumor text with large red "FALSE" stamp, followed by CORRECT info in green',
    distribution: 'Seeded directly to Catalyst Nodes - trusted source inside encryption barrier neutralizes misinformation'
  }

  const darkSocialMetrics = {
    qrTelemetry: 'Embed unique QR code or short-link to track scans',
    inference: 'If "Flu Vaccine Location" card scanned 10,000 times but web page only 500 visits - 95% distribution via Dark Social',
    insight: 'Identifies Leakage Points - topics where community prefers image-based sharing over web-based reading'
  }

  // SECTION 6: STRATEGIC SYNTHESIS
  const strategicModules = [
    {
      name: 'The "Influencer Audit" Module',
      input: 'Social Media Handles',
      process: 'Automated scan for Blocker signals (Emoji comments, bot followers, engagement spikes)',
      output: 'Trust Score (0-100) - Below 50 flagged "Do Not Contract", Above 80 tagged "Catalyst Candidate"'
    },
    {
      name: 'The "Dark Social" Tracker',
      input: 'Usage data from Downloadable Cards (QR scans, Short-link clicks)',
      process: 'Compare Card Velocity vs Web Traffic',
      output: 'Dark Social Index - High index indicates message spreading through private groups, need for visual assets'
    },
    {
      name: 'The "Catalyst" Database',
      function: 'CRM of identified Allies (Nurses, Volunteers, Patient Advocates)',
      feature: 'Direct Seeding - ability to send Downloadable Cards via WhatsApp Business API to Catalysts'
    }
  ]

  const operationalLogic = [
    { from: 'Broadcasters', to: 'Catalysts', description: 'Move budget from Blockers (Tier 1 with fake followers) to Catalyst Nodes (Nurses, Patients, Volunteers)' },
    { from: 'Links', to: 'Cards', description: 'Acknowledge Screenshot Economy - Downloadable Card is secure container for truth in Dark Social pipes' },
    { from: 'Reach', to: 'Resonance', description: 'Ultimate metric is not how many saw post (Reach), but how many validated it (Resonance - tagging, sharing, constructive discussion)' }
  ]

  // FILE 05B: UAE HEALTH SOCIAL MEDIA AUDIT - VERTICAL VIDEO STRATEGY

  // EXECUTIVE SUMMARY
  const verticalRevolution = {
    thesis: 'UAE health authorities have transitioned from static information dissemination to dynamic, algorithm-driven engagement strategies',
    format: 'The 9:16 aspect ratio (vertical video) has become the primary interface for public perception',
    finding: 'Most successful strategies humanize bureaucracy, provide immediate utility through interactive features, and deploy rapid-response visual alerts'
  }

  // CHAPTER 1: BEHIND THE SCENES (BTS) - 17 CASE STUDIES
  const btsCaseStudies = [
    {
      id: 'BTS-01',
      title: 'The Frontline Narrative',
      entity: 'SEHA',
      context: 'Daily realities of nursing staff to combat compassion fatigue',
      visualHook: 'Rapid-cut montage: clocking in, hand sanitizer sound, latex gloves snapping',
      nativeFeatures: ['Timestamp stickers (07:00 AM, 12:00 PM)', 'Trending upbeat audio'],
      strategicInsight: 'Validates workforce effort while reassuring patients of hygiene protocols'
    },
    {
      id: 'BTS-02',
      title: 'The Specialist Spotlight – Infectious Diseases',
      entity: 'Mafraq Hospital',
      context: 'Highlighting Dr. Emmanuel Nsutebu to assert medical authority',
      visualHook: 'Dynamic tracking shot following doctor through high-tech corridors, transitioning to data review',
      nativeFeatures: ['Dual-language captions (Arabic/English)', 'Ask Me a Question sticker'],
      strategicInsight: 'Positions doctors as approachable thought leaders, humanizes institution'
    },
    {
      id: 'BTS-03',
      title: 'The Air Wing Paramedic',
      entity: 'DHA/Military',
      context: 'High-octane showcase of emergency response capabilities',
      visualHook: 'Thwack-thwack of helicopter rotors, paramedic buckling harness',
      nativeFeatures: ['Original audio capturing intensity', 'Location tags: Dubai Air Wing'],
      strategicInsight: 'Plays into security theatre, reassures citizens of rapid response infrastructure'
    },
    {
      id: 'BTS-04',
      title: 'The Emirati Doctor',
      entity: 'SEHA',
      context: 'Promoting Emiratization of medical workforce',
      visualHook: 'Close-up of lab coat with UAE flag pin, warm Emirati dialect greeting',
      nativeFeatures: ['This or That polls (Clinic vs Surgery)', 'Direct engagement'],
      strategicInsight: 'Supports national agenda, builds cultural bridges with local population'
    },
    {
      id: 'BTS-05',
      title: 'The Operating Theatre Nurse',
      entity: 'SEHA',
      context: 'Technical look at surgery preparation, sterility and precision',
      visualHook: 'Time-lapse of nurse scrubbing in and arranging instruments (20 min → 3 sec)',
      nativeFeatures: ['Time-Lapse camera mode', 'Countdown sticker to Surgery Start'],
      strategicInsight: 'Demystifies scary parts of healthcare, reduces patient anxiety'
    },
    {
      id: 'BTS-06',
      title: 'The RoboDoc Telemedicine Tech',
      entity: 'DHA',
      context: 'Demonstrating investment in futuristic robotic consultations',
      visualHook: 'POV shot from patient perspective looking up at robot with doctor face',
      nativeFeatures: ['Sci-fi sound effects', 'Tech Tuesday stickers'],
      strategicInsight: 'Aligns with Dubai Smart City branding, positions DHA as tech pioneer'
    },
    {
      id: 'BTS-07',
      title: 'The Lab Technician',
      entity: 'DoH/ADPHC',
      context: 'Shedding light on unseen heroes processing diagnostics',
      visualHook: 'Macro shot of pipette dropping fluid, technician eyes behind safety goggles',
      nativeFeatures: ['Guess the Cell quiz sticker', 'Educational gamification'],
      strategicInsight: 'Broadens narrative beyond doctors/nurses, validates allied health professionals'
    },
    {
      id: 'BTS-08',
      title: 'The Call Center Operator',
      entity: 'SEHA/Estijaba',
      context: 'Humanizing the voice on the appointment line',
      visualHook: 'Split-screen: headset being put on, digital dashboard resolving ticket',
      nativeFeatures: ['Slider emoji (clapping hands) for appreciation', 'Volume quantification'],
      strategicInsight: 'Quantifies workload, shows human operator, fosters empathy and patience'
    },
    {
      id: 'BTS-09',
      title: 'The Supercar Ambulance Driver',
      entity: 'Dubai Ambulance',
      context: 'Leveraging luxury response vehicles (Lotus Evora)',
      visualHook: 'Dashboard lighting up, engine roaring, blue lights reflecting off garage',
      nativeFeatures: ['Speedometer sticker overlay', 'Video-game-like dynamics'],
      strategicInsight: 'Targets younger male demographic, merges automotive culture with public service'
    },
    {
      id: 'BTS-10',
      title: 'The Mobile Vaccination Unit',
      entity: 'ADPHC',
      context: 'Documenting reach into schools and remote communities',
      visualHook: 'Drone shot descending to branded mobile clinic van, doors sliding open',
      nativeFeatures: ['Location stickers (Al Ain, Western Region)', 'Geographic targeting'],
      strategicInsight: 'Demonstrates commitment to equity and access, no community left behind'
    },
    {
      id: 'BTS-11',
      title: 'The Mental Health Therapist',
      entity: 'DHA/Nafsi',
      context: 'Destigmatizing therapy by showing session environment',
      visualHook: 'Slow pan over comfortable chair, lit candle, notebook creating serene atmosphere',
      nativeFeatures: ['Mental Health Matters GIFs', 'Lo-fi background music'],
      strategicInsight: 'Lowers psychological barrier, frames therapy as comfortable and normal'
    },
    {
      id: 'BTS-12',
      title: 'The Medical Coder',
      entity: 'DoH',
      context: 'Explaining administrative backend for insurance claims',
      visualHook: 'Fast-paced typing on mechanical keyboard, Matrix digital filter',
      nativeFeatures: ['Text overlays synced to typing', 'Technical visualization'],
      strategicInsight: 'Educates on system complexity, manages expectations on processing times'
    },
    {
      id: 'BTS-13',
      title: 'The Medical Student',
      entity: 'UAEU/SEHA',
      context: 'Inspiring next generation of doctors',
      visualHook: 'Transition effect: textbooks → hospital ID badge and stethoscope',
      nativeFeatures: ['Study with Me hashtags', 'Coffee cup stickers'],
      strategicInsight: 'Acts as recruitment tool, glamorizes medical education'
    },
    {
      id: 'BTS-14',
      title: 'The Hospital Nutritionist',
      entity: 'DHA',
      context: 'Promoting healthy eating during Ramadan',
      visualHook: 'Steam from cooking pot, vibrant vegetables chopped to rhythm',
      nativeFeatures: ['Poll sticker: Iftar A or Iftar B?', 'Cultural relevance'],
      strategicInsight: 'Connects clinical health with lifestyle, hospital as wellness partner'
    },
    {
      id: 'BTS-15',
      title: 'The Physiotherapist',
      entity: 'SEHA',
      context: 'Showcasing patient recovery journeys',
      visualHook: 'Focus on patient feet taking first steps post-surgery, panning to therapist',
      nativeFeatures: ['Motivation GIFs', 'Uplifting instrumental music'],
      strategicInsight: 'Focuses on outcomes and hope for patients facing long recoveries'
    },
    {
      id: 'BTS-16',
      title: 'The Biomedical Engineer',
      entity: 'DoH',
      context: 'Assuring public of medical equipment safety and calibration',
      visualHook: 'Mesmerizing internal spinning mechanism of MRI machine',
      nativeFeatures: ['Tech stickers', 'Mechanical sound effects'],
      strategicInsight: 'Reassures about technical competence and safety standards'
    },
    {
      id: 'BTS-17',
      title: 'The Pharmacist',
      entity: 'DHA/SEHA',
      context: 'Highlighting medication safety checks in smart pharmacies',
      visualHook: 'Robotic arm selecting medication box with precision',
      nativeFeatures: ['Animated checkmarks listing 5 Rights of medication safety'],
      strategicInsight: 'Builds trust in dispensing process, counters fears of medical error'
    }
  ]

  // CHAPTER 2: Q&A INTERACTIVE ENGINE - 19 CASE STUDIES
  const qaCaseStudies = [
    {
      id: 'QA-01',
      title: 'The Flu Vaccine FAQ',
      entity: 'ADPHC',
      context: 'Addressing myths about seasonal influenza campaign',
      visualHook: 'Question Box sticker: Ask us anything about the Flu Shot',
      nativeFeatures: ['Video replies from doctors', 'Green Screen effect with data'],
      strategicInsight: 'Combats misinformation through open forum, controls vaccine narrative'
    },
    {
      id: 'QA-02',
      title: 'The Licensing Sheryan Guide',
      entity: 'DHA',
      context: 'Step-by-step tutorial on Sheryan self-assessment tool',
      visualHook: 'Screen recording with animated Cursor clicking login',
      nativeFeatures: ['Numbered list overlays', 'Link sticker to portal'],
      strategicInsight: 'Reduces cognitive load, decreases support ticket volume'
    },
    {
      id: 'QA-03',
      title: 'The Dataflow Explainer',
      entity: 'DoH',
      context: 'Clarifying Primary Source Verification (PSV) process',
      visualHook: 'Animated flowchart: document traveling from You to Dataflow to DoH',
      nativeFeatures: ['Wait for it sticker', 'Progress bar animation'],
      strategicInsight: 'Manages expectations regarding delays, informed waiting process'
    },
    {
      id: 'QA-04',
      title: 'Ramadan Fasting Rules',
      entity: 'DHA/SEHA',
      context: 'Medical guidance for diabetics wishing to fast',
      visualHook: 'Split-screen: glucometer reading vs plate of dates',
      nativeFeatures: ['Poll: Type 1 or Type 2?', 'Swipe Up links to Fatwa'],
      strategicInsight: 'Specific cultural utility at intersection of faith and health'
    },
    {
      id: 'QA-05',
      title: 'The Insurance Thiqa Query',
      entity: 'DoH',
      context: 'Clarifying coverage details for Thiqa national insurance',
      visualHook: '3D rotating graphic of Thiqa card',
      nativeFeatures: ['Yes/No polls for coverage questions'],
      strategicInsight: 'Addresses financial anxiety directly, key stressor for patients'
    },
    {
      id: 'QA-06',
      title: 'Mental Health Access',
      entity: 'DHA/Nafsi',
      context: 'Guiding users on booking therapy sessions',
      visualHook: 'Blurred soft-focus background with text: Feeling overwhelmed? Start here',
      nativeFeatures: ['Support sticker', 'Direct links to booking engine'],
      strategicInsight: 'Removes friction for distressed individuals lacking energy for navigation'
    },
    {
      id: 'QA-07',
      title: 'Measles Booster Eligibility',
      entity: 'ADPHC',
      context: 'Clarifying age groups for mandatory MMR campaign',
      visualHook: 'Growth chart with child highlighting 1-5 Years zone',
      nativeFeatures: ['Slider sticker for age selection'],
      strategicInsight: 'Targets parents with precise criteria, drives campaign uptake'
    },
    {
      id: 'QA-08',
      title: 'Sick Leave Attestation',
      entity: 'DoH',
      context: 'Tutorial on digitally attesting sick leave certificates',
      visualHook: 'Rejected stamp transforming into Approved stamp',
      nativeFeatures: ['Tap to Clean interaction metaphors'],
      strategicInsight: 'Resolves high-friction administrative task through visual simplification'
    },
    {
      id: 'QA-09',
      title: 'Travel Vaccines',
      entity: 'DoH/MOHAP',
      context: 'Mandatory vaccines for Hajj/Umrah or general travel',
      visualHook: 'Airplane window transitioning to Kaaba/global landmarks',
      nativeFeatures: ['Checklist stickers', 'Travel-themed music'],
      strategicInsight: 'Links health compliance with aspirational/spiritual goals of travel'
    },
    {
      id: 'QA-10',
      title: 'Golden Visa Eligibility',
      entity: 'DHA',
      context: 'Information for frontline heroes on long-term residency',
      visualHook: 'Golden Visa card with sparkling/shining effect',
      nativeFeatures: ['Gold color filters', 'Celebration confetti effects'],
      strategicInsight: 'Uses allure of Golden Visa to retain talent and boost morale'
    },
    {
      id: 'QA-11',
      title: 'Ask a Midwife',
      entity: 'SEHA/Corniche',
      context: 'Q&A sessions for expectant mothers',
      visualHook: 'Emotional close-up of newborn hand grasping finger',
      nativeFeatures: ['Question Box: Due date coming up? Ask here'],
      strategicInsight: 'Builds supportive community for highly engaged demographic'
    },
    {
      id: 'QA-12',
      title: 'Nutrition Myth-Busting',
      entity: 'DHA',
      context: 'Debunking fad diets like Keto vs balanced nutrition',
      visualHook: 'Split plate: bacon/butter vs balanced meal, Vs fighting game animation',
      nativeFeatures: ['Fact Check stickers', 'Polls: Which would you choose?'],
      strategicInsight: 'Positions authority as source of scientific truth vs influencer misinformation'
    },
    {
      id: 'QA-13',
      title: 'Antibiotics Awareness',
      entity: 'ADPHC',
      context: 'Educating on viral vs bacterial infections',
      visualHook: 'Giant red STOP sign slamming over box of pills',
      nativeFeatures: ['Stop Motion animation', 'Red X stickers'],
      strategicInsight: 'Critical public health intervention for behavioral change'
    },
    {
      id: 'QA-14',
      title: 'Smoking Cessation',
      entity: 'DHA',
      context: 'Promoting cessation clinics and benefits of quitting',
      visualHook: 'Visual metaphor of cigarette snapping in half',
      nativeFeatures: ['Challenge Accepted stickers', 'Countdown to Health Recovery'],
      strategicInsight: 'Encourages behavioral change through positive reinforcement'
    },
    {
      id: 'QA-15',
      title: 'Mabrouk Ma Yak Service',
      entity: 'DoH',
      context: 'Explaining integrated newborn document service',
      visualHook: 'Baby stroller icon traversing map of government services',
      nativeFeatures: ['Baby-themed stickers', 'Links to service guide'],
      strategicInsight: 'Highlights integration of services, simplifies complex life event'
    },
    {
      id: 'QA-16',
      title: 'Midday Break Rules',
      entity: 'ADPHC',
      context: 'Informing workers/employers of summer work ban hours',
      visualHook: 'Blazing sun with clock ticking 12:30 to 3:00 PM',
      nativeFeatures: ['Temperature sticker', 'Safety First stickers'],
      strategicInsight: 'Protects vulnerable workers, ensures legal compliance'
    },
    {
      id: 'QA-17',
      title: 'Hospital Visiting Hours',
      entity: 'SEHA',
      context: 'Updating public on ICU and ward visiting times',
      visualHook: 'Hospital door swinging open and closed',
      nativeFeatures: ['Clock stickers', 'Clear text overlays with times'],
      strategicInsight: 'Manages logistics and visitor expectations, prevents security friction'
    },
    {
      id: 'QA-18',
      title: 'Blood Donation Eligibility',
      entity: 'SEHA/ADBB',
      context: 'Clarifying who can donate (weight, travel history)',
      visualHook: 'Animation of blood bag filling or Hero armband',
      nativeFeatures: ['Donate stickers', 'Location tags for blood banks'],
      strategicInsight: 'Mobilizes donor base by removing ambiguity'
    },
    {
      id: 'QA-19',
      title: 'PCR & Al Hosn Results',
      entity: 'DoH',
      context: 'Explaining how to access results and Green Pass',
      visualHook: 'Smartphone showing Al Hosn app turning grey to green',
      nativeFeatures: ['Green Heart emoji', 'Direct links to App Store'],
      strategicInsight: 'Vital for travel and viral waves, maintains digital health verification habit'
    }
  ]

  // CHAPTER 3: ALERT PROTOCOL - 14 CASE STUDIES
  const alertCaseStudies = [
    {
      id: 'ALERT-01',
      title: 'Red Alert – Rain & Storms',
      entity: 'NCM/DoH',
      context: 'Warnings about unstable weather and remote work directives',
      visualHook: 'Flashing red screen with siren icon: UNSTABLE WEATHER',
      nativeFeatures: ['Alert stickers', 'Siren sound effects', 'Bold red typography'],
      strategicInsight: 'Leverages FOMA on safety info for immediate compliance'
    },
    {
      id: 'ALERT-02',
      title: 'Fog Warnings',
      entity: 'Dubai Police/DHA',
      context: 'Driving safety advice during heavy fog',
      visualHook: 'Windshield obscured by white fog clearing to warning sign',
      nativeFeatures: ['Drive Safe stickers', 'Timestamps for early morning'],
      strategicInsight: 'Delivers practical advice before morning commute'
    },
    {
      id: 'ALERT-03',
      title: 'The Rumor Buster',
      entity: 'ADPHC',
      context: 'Correcting false information circulating on social media',
      visualHook: 'Screenshot of rumor with FAKE stamp slamming onto it',
      nativeFeatures: ['False Info warning labels', 'Red cross stickers'],
      strategicInsight: 'Protects credibility, prevents panic by neutralizing rumors'
    },
    {
      id: 'ALERT-04',
      title: 'Monkeypox Symptom Watch',
      entity: 'DHA',
      context: 'Visual guides to identifying Mpox lesions',
      visualHook: 'Illustrative infographic of hand with stylized lesions',
      nativeFeatures: ['Zoom effects on illustration', 'Info stickers'],
      strategicInsight: 'Balances awareness with sensitivity, educational vs graphic'
    },
    {
      id: 'ALERT-05',
      title: 'Product Recalls',
      entity: 'MOHAP/DoH',
      context: 'Recalling specific batches of medication/supplements',
      visualHook: 'Product box with DO NOT USE circle overlaid',
      nativeFeatures: ['Warning triangle stickers', 'Magnification of batch number'],
      strategicInsight: 'Rapidly disseminates hazard data for public safety'
    },
    {
      id: 'ALERT-06',
      title: 'Green Pass Policy Updates',
      entity: 'DoH',
      context: 'Announcements regarding Al Hosn validity periods',
      visualHook: 'Al Hosn logo changing colors or calendar page flipping',
      nativeFeatures: ['Update stickers', 'Links to full policy'],
      strategicInsight: 'Vital utility impacting daily access to public spaces'
    },
    {
      id: 'ALERT-07',
      title: 'Sandstorm Respiratory Warning',
      entity: 'ADPHC',
      context: 'Advice for asthmatics during dust events',
      visualHook: 'Orange-tinted skyline obscured by dust',
      nativeFeatures: ['Mask stickers', 'Wind sound effects'],
      strategicInsight: 'Targeted advice for vulnerable groups during environmental events'
    },
    {
      id: 'ALERT-08',
      title: 'Stay at Home Directive',
      entity: 'Crisis Management',
      context: 'Directives during extreme weather emergencies',
      visualHook: 'Static bold typographic card: STAY HOME',
      nativeFeatures: ['Stay Home stickers', 'No music for seriousness'],
      strategicInsight: 'Absolute authority messaging, eschews engagement for command'
    },
    {
      id: 'ALERT-09',
      title: 'Heat Exhaustion Signs',
      entity: 'ADPHC',
      context: 'Emergency signs of heat stroke',
      visualHook: 'Thermometer bursting or person fainting silhouette',
      nativeFeatures: ['Flashing Emergency text', 'Ambulance sound effects'],
      strategicInsight: 'Life-saving education requiring immediate recognition and action'
    },
    {
      id: 'ALERT-10',
      title: 'Child Protection Policy',
      entity: 'DoH/DCD',
      context: 'Announcements of new laws regarding child safety',
      visualHook: 'Child silhouette protected by shield icon',
      nativeFeatures: ['Protect stickers', 'Serious tone'],
      strategicInsight: 'Encourages community vigilance and social responsibility'
    },
    {
      id: 'ALERT-11',
      title: 'Insurance Renewal Deadlines',
      entity: 'DoH',
      context: 'Reminders to renew health insurance to avoid fines',
      visualHook: 'Calendar with deadline circled in red and vibrating',
      nativeFeatures: ['Countdown timer stickers to deadline'],
      strategicInsight: 'Financial urgency driver helping residents avoid penalties'
    },
    {
      id: 'ALERT-12',
      title: 'Urgent Blood Shortage',
      entity: 'SEHA',
      context: 'Calls for specific blood types (O-Negative)',
      visualHook: 'Blood drop icon emptying, flashing Urgent',
      nativeFeatures: ['Share stickers', 'Direct location maps'],
      strategicInsight: 'Mobilizes community altruism through urgency'
    },
    {
      id: 'ALERT-13',
      title: 'Road Closures',
      entity: 'SEHA/Traffic',
      context: 'Notifying patients of access route changes',
      visualHook: 'Map with Road Closed sign and New Route arrow',
      nativeFeatures: ['Map location stickers'],
      strategicInsight: 'Pure logistical utility to prevent missed appointments'
    },
    {
      id: 'ALERT-14',
      title: 'Cyber Attack Warning',
      entity: 'SEHA',
      context: 'Warning users about phishing attempts',
      visualHook: 'Hacker binary code visual with lock icon breaking',
      nativeFeatures: ['Security shield stickers'],
      strategicInsight: 'Protects digital integrity of user and institution'
    }
  ]

  // CHAPTER 2: AUDIENCE BEHAVIOR ANALYSIS - APPLAUSE METRICS

  // SECTION 1: SHARING (Viral Utility) - 15 ITEMS
  const sharingMetrics = [
    {
      id: 'SHARE-01',
      topic: 'Red Alert: Rain & Remote Work',
      description: 'Static red card with NCM warning & Remote Work text',
      insight: 'Shared Anxiety: Users share to inform peers/employees of status changes',
      source: 38
    },
    {
      id: 'SHARE-02',
      topic: 'Flu Vaccine Locations',
      description: 'Map graphic showing free vaccine centers',
      insight: 'Practical Utility: Users share with family groups to coordinate visits',
      source: 2
    },
    {
      id: 'SHARE-03',
      topic: 'Dataflow Licensing Guide',
      description: 'Step-by-step carousel on speeding up verification',
      insight: 'Professional Utility: Shared in WhatsApp groups of nurses/doctors as career hack',
      source: 21
    },
    {
      id: 'SHARE-04',
      topic: 'Golden Visa Eligibility',
      description: 'List of medical categories for 10-year residency',
      insight: 'Aspirational Status: Shared by expats to verify eligibility and celebrate status',
      source: 45
    },
    {
      id: 'SHARE-05',
      topic: 'Newborn Mabrouk Ma Yak',
      description: 'Infographic of the 5-in-1 document bundle',
      insight: 'Life Event Utility: High emotional value shared by new parents and families',
      source: 27
    },
    {
      id: 'SHARE-06',
      topic: 'Measles Vaccine (1-5yo)',
      description: 'Protect your Child graphic with age criteria',
      insight: 'Parental Protection: Mom groups share heavily for herd immunity and compliance',
      source: 12
    },
    {
      id: 'SHARE-07',
      topic: 'Ramadan Fasting (Diabetes)',
      description: 'Fatwa/Medical ruling on breaking fast',
      insight: 'Religious/Medical Nexus: Shared to ensure loved ones fast safely',
      source: 26
    },
    {
      id: 'SHARE-08',
      topic: 'Travel Bans/Health Updates',
      description: 'Updates on Marburg/Mpox warnings',
      insight: 'Logistical Utility: Critical for travel planning, affects holidays and business',
      source: 30
    },
    {
      id: 'SHARE-09',
      topic: 'Midday Break Announcement',
      description: 'Graphic showing dates (June 15 - Sept 15)',
      insight: 'Occupational Safety: Shared by workers and safety officers for compliance',
      source: 35
    },
    {
      id: 'SHARE-10',
      topic: 'Antibiotics Warning',
      description: 'Comparison chart: Viral vs Bacterial',
      insight: 'Educational Correction: Shared to educate stubborn family members',
      source: 17
    },
    {
      id: 'SHARE-11',
      topic: 'Mental Health Hotline',
      description: 'Digital card with hotline number',
      insight: 'Crisis Support: Shared privately via DM to those in need',
      source: 13
    },
    {
      id: 'SHARE-12',
      topic: 'Urgent Blood Appeal',
      description: 'O-Negative Needed call with location',
      insight: 'Altruism: Community rallying to save a life',
      source: 36
    },
    {
      id: 'SHARE-13',
      topic: 'Fake News Rebuttal',
      description: 'Correcting Misinformation on viral hoaxes',
      insight: 'Truth-Seeking: Users share to correct record and stop fear-mongering',
      source: 40
    },
    {
      id: 'SHARE-14',
      topic: 'Breast Cancer Screening',
      description: 'Calendar of mobile clinic route',
      insight: 'Womens Health Advocacy: Shared among friend groups to schedule check-ups',
      source: 46
    },
    {
      id: 'SHARE-15',
      topic: 'Road Closures',
      description: 'Map of hospital entry changes',
      insight: 'Logistical Necessity: Shared to prevent frustration and lateness',
      source: 38
    }
  ]

  // SECTION 2: SAVING (High-Value Archival) - 20 ITEMS
  const savingMetrics = [
    { id: 'SAVE-01', topic: 'Sheryan Licensing Steps', description: 'Detailed carousel of 6 steps for DHA license', insight: 'Textbook Content: Users save to follow during application' },
    { id: 'SAVE-02', topic: 'Exam Syllabus', description: 'List of topics for Prometric/Pearson exams', insight: 'Study Material: High value for students, saved for exam prep' },
    { id: 'SAVE-03', topic: 'Ramadan Meal Plan', description: '7-day Suhoor and Iftar menu', insight: 'Lifestyle Reference: Saved as shopping list or meal guide' },
    { id: 'SAVE-04', topic: 'Vaccination Schedule', description: 'Timeline from birth to 18 years', insight: 'Parenting Reference: Saved by parents to track milestones' },
    { id: 'SAVE-05', topic: 'Thiqa Insurance Top-Up', description: 'Explainer on upgrading benefits', insight: 'Financial Utility: Saved for when coverage is questioned' },
    { id: 'SAVE-06', topic: 'Heat Stroke First Aid', description: '5 steps to treat fainting', insight: 'Emergency Prep: Saved just in case of emergency' },
    { id: 'SAVE-07', topic: '24/7 Pharmacy List', description: 'Carousel of open pharmacies', insight: 'Emergency Utility: Ensures access at odd hours/holidays' },
    { id: 'SAVE-08', topic: 'Home Isolation Guide', description: 'Protocol for contagious viruses', insight: 'Household Safety: Reference guide for managing sickness' },
    { id: 'SAVE-09', topic: 'Medical Coding Path', description: 'Infographic on certification', insight: 'Career Development: Roadmap for professional advancement' },
    { id: 'SAVE-10', topic: 'Patient Rights Charter', description: 'Document of patient rights', insight: 'Empowerment: Saved for advocacy during disputes' },
    { id: 'SAVE-11', topic: 'Visiting Doctors List', description: 'Schedule of international specialists', insight: 'Opportunity Tracking: Saved to book with experts' },
    { id: 'SAVE-12', topic: 'Pregnancy Trimester Guide', description: 'Checklist of tests per trimester', insight: 'Maternal Health: Roadmap for pregnancy journey' },
    { id: 'SAVE-13', topic: 'Diabetes Hypo Kit', description: 'Checklist of items to carry', insight: 'Chronic Disease Mgmt: Safety checklist for daily life' },
    { id: 'SAVE-14', topic: 'Gym Safety Protocols', description: 'Hygiene rules for public gyms', insight: 'Lifestyle Safety: Reference for public spaces' },
    { id: 'SAVE-15', topic: 'Digital Detox Tips', description: 'Tips for reducing screen time', insight: 'Wellness Advice: Saved for self-improvement' },
    { id: 'SAVE-16', topic: 'Back to School Health', description: 'Backpack weight/lunchbox tips', insight: 'Seasonal Guide: Relevant for parents at academic year' },
    { id: 'SAVE-17', topic: 'Remote Work Ergonomics', description: 'Diagram of desk posture', insight: 'Occupational Health: Reference for home offices' },
    { id: 'SAVE-18', topic: 'Mosquito Control', description: 'Preventing breeding sites', insight: 'Home Maintenance: Guide for protecting home' },
    { id: 'SAVE-19', topic: 'Quit Smoking Timeline', description: 'Body changes after quitting', insight: 'Motivation Tool: Saved to track cessation progress' },
    { id: 'SAVE-20', topic: 'How to Complaint', description: 'Steps to log grievance', insight: 'Consumer Protection: Resource for service issues' }
  ]

  // SECTION 3: REPLY CHAIN (Sentiment Restoration) - 15 ITEMS
  const replyChainMetrics = [
    { id: 'REPLY-01', topic: 'Swift Service Praise', description: 'User praises fast result; DoH replies At your service', insight: 'Reinforcement: Encourages positive feedback loops' },
    { id: 'REPLY-02', topic: 'Red Alert Confusion', description: 'User asks about private sector; Authority clarifies', insight: 'Anxiety Reduction: Positions authority as helpful guide' },
    { id: 'REPLY-03', topic: 'Dataflow Resolution', description: 'User complains; Authority DM solves; User posts Resolved', insight: 'Accountability: Demonstrates responsiveness to friction' },
    { id: 'REPLY-04', topic: 'Exam Success', description: 'Nurse posts I passed; Authority replies Welcome to team', insight: 'Community Building: Builds professional pride' },
    { id: 'REPLY-05', topic: 'Flu Vaccine Location', description: 'User asks Where in X; Authority replies with Maps', insight: 'Action Conversion: Converts query to health action' },
    { id: 'REPLY-06', topic: 'Maternity Praise', description: 'Moms share stories; Hospital replies', insight: 'Social Proof: Testimonials are strongest marketing' },
    { id: 'REPLY-07', topic: 'App Glitch', description: 'User reports crash; Authority replies Fixing it', insight: 'Transparency: Prevents frustration escalation' },
    { id: 'REPLY-08', topic: 'Tourist Inquiry', description: 'Tourist asks about ER; Authority guides', insight: 'Medical Tourism: Showcases safety and accessibility' },
    { id: 'REPLY-09', topic: 'Donor Appreciation', description: 'Donor selfie; SEHA comments Hero', insight: 'Positive Reinforcement: Encourages altruistic behavior' },
    { id: 'REPLY-10', topic: 'Mental Health Stigma', description: 'User admits struggle; Authority posts hotline + heart', insight: 'Empathy: Humanizes institution, destigmatizes help' },
    { id: 'REPLY-11', topic: 'Diabetes Milestone', description: 'Patient shares A1C drop; Authority celebrates', insight: 'Chronic Care Motivation: Encourages compliance' },
    { id: 'REPLY-12', topic: 'Rain Safety', description: 'Community God bless you comments', insight: 'Solidarity: Shared sentiment during crisis' },
    { id: 'REPLY-13', topic: 'Visa Inquiry', description: 'User asks Do nurses qualify?; Authority replies Yes', insight: 'Validation: Boosts morale among workforce' },
    { id: 'REPLY-14', topic: 'Lost Item', description: 'User lost ID; Authority connects to security', insight: 'Micro-Service: Builds reputation for caring' },
    { id: 'REPLY-15', topic: 'Ramadan Greetings', description: 'Authority wishes Kareem; hundreds reply', insight: 'Cultural Bonding: Authority as part of community' }
  ]

  // CHAPTER 3: CONTENT TRANSFORMER MODULE - 3 TEMPLATES
  const contentTemplates = [
    {
      name: 'The Hero Template',
      category: 'For Behind the Scenes',
      goal: 'Trust & Humanization',
      structure: [
        { phase: 'Hook (0-1.5s)', description: 'High-motion action shot with ASMR audio' },
        { phase: 'Context (1.5-5s)', description: 'Text overlay introducing role' },
        { phase: 'Challenge (5-10s)', description: 'Show difficulty of task' },
        { phase: 'Resolution (10-15s)', description: 'Payoff—smile, recovered patient, thumbs up' }
      ],
      implication: 'Combats faceless bureaucracy narrative effectively'
    },
    {
      name: 'The Guide Template',
      category: 'For Q&A',
      goal: 'Utility & Authority',
      structure: [
        { phase: 'Hook (0-3s)', description: 'The Problem visualized' },
        { phase: 'Step-by-Step (3-12s)', description: 'Numbered visual checklist or screen recording' },
        { phase: 'CTA (12-15s)', description: 'Save this for later or Link in Bio' }
      ],
      implication: 'Maximizes Save metrics, establishes account as resource'
    },
    {
      name: 'The Siren Template',
      category: 'For Alerts',
      goal: 'Safety & Compliance',
      structure: [
        { phase: 'Hook (0-2s)', description: 'Flashing red/orange colors + Siren/Alert sound' },
        { phase: 'Directive (2-5s)', description: 'Minimal text command (STAY HOME, UPDATE APP)' },
        { phase: 'Reassurance (5-7s)', description: 'Institutional logo + We are monitoring' }
      ],
      implication: 'Maximizes Share metrics through urgency and FOMA on safety'
    }
  ]

  // Chart data for visualizations
  const catalystPerformanceData = [
    { name: 'Dr. Sarah Al Mansoori', lift: 234, engagement: 8.7, followers: 450 },
    { name: 'Wellness UAE', lift: 189, engagement: 6.2, followers: 1200 },
    { name: 'Abu Dhabi Mom', lift: 167, engagement: 12.4, followers: 89 },
    { name: 'Dr. Ahmed Khalil', lift: 312, engagement: 7.8, followers: 567 },
    { name: 'Health Tech Hub', lift: 98, engagement: 4.5, followers: 234 }
  ]

  const grassrootsReachData = [
    { category: 'Community Champions', count: 45, reach: 1.2, engagement: 11.2 },
    { category: 'Wellness Warriors', count: 67, reach: 2.4, engagement: 8.9 },
    { category: 'Medical Trenches', count: 34, reach: 0.89, engagement: 9.7 },
    { category: 'Patient Advocates', count: 23, reach: 0.46, engagement: 14.5 },
    { category: 'Lifestyle Bloggers', count: 56, reach: 3.4, engagement: 6.7 }
  ]

  const grassrootsDistributionData = [
    { name: 'Community Champions', value: 45, color: CHART_COLORS.emerald },
    { name: 'Wellness Warriors', value: 67, color: CHART_COLORS.info },
    { name: 'Medical Trenches', value: 34, color: CHART_COLORS.purple },
    { name: 'Patient Advocates', value: 23, color: CHART_COLORS.pink },
    { name: 'Lifestyle Bloggers', value: 56, color: CHART_COLORS.indigo }
  ]

  const viralTriggerData = [
    { trigger: 'Controversy', effectiveness: 78, risk: 30 },
    { trigger: 'Emotional Story', effectiveness: 89, risk: 5 },
    { trigger: 'Unexpected Twist', effectiveness: 72, risk: 15 },
    { trigger: 'Visual Shock', effectiveness: 84, risk: 12 },
    { trigger: 'Celebrity', effectiveness: 67, risk: 8 },
    { trigger: 'Challenge/Trend', effectiveness: 91, risk: 18 }
  ]

  const campaignMultiplierData = [
    { campaign: 'Vaccine Awareness', original: 234, amplified: 4500, multiplier: 19.2 },
    { campaign: 'Mental Health', original: 567, amplified: 8900, multiplier: 15.7 },
    { campaign: 'Summer Health', original: 123, amplified: 2340, multiplier: 19.0 },
    { campaign: 'Patient Rights', original: 345, amplified: 6700, multiplier: 19.4 }
  ]

  const platformPerformanceData = [
    { platform: 'Instagram', engagement: 8.7, viral: 84, reach: 92 },
    { platform: 'TikTok', engagement: 12.4, viral: 91, reach: 88 },
    { platform: 'LinkedIn', engagement: 6.2, viral: 67, reach: 78 },
    { platform: 'X/Twitter', engagement: 4.5, viral: 72, reach: 85 },
    { platform: 'YouTube', engagement: 5.8, viral: 78, reach: 95 },
    { platform: 'Facebook', engagement: 3.9, viral: 56, reach: 82 }
  ]

  const monthlyTrendData = [
    { month: 'Jan', campaigns: 8, reach: 2.3, multiplier: 14.2 },
    { month: 'Feb', campaigns: 12, reach: 3.1, multiplier: 16.7 },
    { month: 'Mar', campaigns: 15, reach: 4.5, multiplier: 18.3 },
    { month: 'Apr', campaigns: 18, reach: 5.8, multiplier: 19.1 },
    { month: 'May', campaigns: 22, reach: 7.2, multiplier: 20.4 },
    { month: 'Jun', campaigns: 28, reach: 8.9, multiplier: 21.7 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Amplification & Viral Engineering</h1>
          <p className="text-muted-foreground">
            Network effects and viral content optimization
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm">
            <Flame className="h-4 w-4 mr-2" />
            New Campaign
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {amplificationMetrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      <Tabs defaultValue="catalyst-nodes" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-6 w-full">
          <TabsTrigger value="catalyst-nodes">Catalyst Nodes</TabsTrigger>
          <TabsTrigger value="grassroots">Grassroots</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="viral-triggers">Viral Triggers</TabsTrigger>
          <TabsTrigger value="network-audit">Network Audit</TabsTrigger>
          <TabsTrigger value="vertical-content">Vertical Content</TabsTrigger>
        </TabsList>

        <TabsContent value="catalyst-nodes" className="space-y-6">
          <Alert className="border-purple-500 bg-purple-50 dark:bg-purple-950">
            <Crown className="h-4 w-4" />
            <AlertTitle>Premium Catalyst Network</AlertTitle>
            <AlertDescription>
              156 active catalyst nodes across all tiers. Platinum nodes showing 312% average lift.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Catalyst Node Directory</h3>
              <Users className="h-5 w-5 text-purple-500" />
            </div>
            <div className="space-y-4">
              {catalystNodes.map((node, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-12 w-12 rounded-full ${
                        node.tier === 'Platinum' ? 'bg-gradient-to-br from-slate-300 to-slate-500' :
                        node.tier === 'Gold' ? 'bg-gradient-to-br from-amber-400 to-amber-600' :
                        'bg-gradient-to-br from-slate-400 to-slate-600'
                      } flex items-center justify-center`}>
                        {node.tier === 'Platinum' ? (
                          <Gem className="h-6 w-6 text-white" />
                        ) : node.tier === 'Gold' ? (
                          <Award className="h-6 w-6 text-white" />
                        ) : (
                          <Shield className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold">{node.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{node.type}</Badge>
                          <Badge variant="outline" className="text-xs">{node.platform}</Badge>
                        </div>
                      </div>
                    </div>
                    <Badge variant={node.status === 'active' ? 'default' : 'secondary'}>
                      {node.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-4 gap-3 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Followers</p>
                      <p className="font-semibold">{node.followers}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Engagement</p>
                      <p className="font-semibold text-emerald-600">{node.engagement ?? 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Campaigns</p>
                      <p className="font-semibold">{node.campaigns ?? 0}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Avg Lift</p>
                      <p className="font-semibold text-cyan-600">+{node.avgLift ?? 0}%</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Performance Score</span>
                      <span className="font-medium">{Math.min(node.avgLift ?? 0, 100)}%</span>
                    </div>
                    <Progress value={Math.min(node.avgLift ?? 0, 100)} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Gem className="h-5 w-5 text-slate-400" />
                  Platinum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-sm text-muted-foreground mt-1">Premium nodes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  Gold
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">34</div>
                <p className="text-sm text-muted-foreground mt-1">High-performers</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Shield className="h-5 w-5 text-slate-500" />
                  Silver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">67</div>
                <p className="text-sm text-muted-foreground mt-1">Active nodes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Total Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">12.4M</div>
                <p className="text-sm text-muted-foreground mt-1">Combined audience</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Catalyst Performance Analytics</h3>
              <LucideBarChart className="h-5 w-5 text-purple-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">Performance Lift by Node</h4>
                <BarChart
                  data={catalystPerformanceData}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'lift', name: 'Lift %', color: CHART_COLORS.emerald }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Engagement vs Followers</h4>
                <AreaChart
                  data={catalystPerformanceData}
                  xAxisKey="name"
                  areas={[
                    { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.info },
                    { dataKey: 'followers', name: 'Followers (K)', color: CHART_COLORS.purple }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="grassroots" className="space-y-6">
          <Alert className="border-emerald-500 bg-emerald-50 dark:bg-emerald-950">
            <Radio className="h-4 w-4" />
            <AlertTitle>Grassroots Network Activation</AlertTitle>
            <AlertDescription>
              225 community influencers organized into 5 categories. Patient Advocates showing highest engagement at 14.5%.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Grassroots Network Categories</h3>
              <Users className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {grassrootsNetwork.map((category, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold">{category.category}</h4>
                      <p className="text-sm text-muted-foreground">{category.count} active members</p>
                    </div>
                    <Badge variant="outline" className={`text-${category.color}-600`}>
                      {category.reach}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Engagement</p>
                      <p className="font-semibold text-emerald-600">{category.engagement}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Avg Lift</p>
                      <p className="font-semibold text-cyan-600">+{category.avgLift}%</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Performance</span>
                      <span className="font-medium">{category.avgLift > 100 ? '100%' : `${category.avgLift}%`}</span>
                    </div>
                    <Progress value={Math.min(category.avgLift, 100)} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">225</div>
                <p className="text-sm text-muted-foreground mt-1">Across 5 categories</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Combined Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">8.3M</div>
                <p className="text-sm text-muted-foreground mt-1">Community audience</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">10.1%</div>
                <p className="text-sm text-muted-foreground mt-1">Above industry avg</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Lift</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">+144%</div>
                <p className="text-sm text-muted-foreground mt-1">Amplification rate</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Grassroots Network Analytics</h3>
              <LucidePieChart className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PieChart
                data={grassrootsReachData.map(item => ({ name: item.category, value: item.reach }))}
                donut={false}
                height={300}
                showLegend={true}
              />
              <BarChart
                data={grassrootsReachData}
                xAxisKey="category"
                bars={[
                  { dataKey: 'count', name: 'Nodes', color: CHART_COLORS.info },
                  { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.emerald }
                ]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Amplification Campaigns</h3>
              <Flame className="h-5 w-5 text-orange-500" />
            </div>
            <div className="space-y-4">
              {amplificationCampaigns.map((campaign, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{campaign.name}</h4>
                      <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                        <span>{campaign.nodes} nodes</span>
                        <span>•</span>
                        <span>{campaign.platforms} platforms</span>
                        <span>•</span>
                        <span>{campaign.started}</span>
                      </div>
                    </div>
                    <Badge variant={
                      campaign.status === 'active' ? 'default' :
                      campaign.status === 'scheduled' ? 'secondary' : 'outline'
                    }>
                      {campaign.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Original Reach</p>
                      <p className="font-semibold">{campaign.originalReach}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Amplified Reach</p>
                      <p className="font-semibold text-emerald-600">{campaign.amplifiedReach}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Multiplier</p>
                      <p className="font-semibold text-cyan-600">{campaign.multiplier}x</p>
                    </div>
                  </div>

                  {campaign.status !== 'scheduled' && (
                    <div className="mt-3 pt-3 border-t">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Amplification Progress</span>
                          <span className="font-medium">{campaign.multiplier}x achieved</span>
                        </div>
                        <Progress value={Math.min(campaign.multiplier * 5, 100)} className="h-2" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Active Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <p className="text-sm text-muted-foreground mt-1">Currently running</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Multiplier</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">18.1x</div>
                <p className="text-sm text-muted-foreground mt-1">Reach amplification</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Amplified</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">20.1M</div>
                <p className="text-sm text-muted-foreground mt-1">Impressions delivered</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Nodes Deployed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">114</div>
                <p className="text-sm text-muted-foreground mt-1">This month</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Campaign Multiplier Analytics</h3>
              <LucideBarChart className="h-5 w-5 text-orange-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart
                data={campaignMultiplierData}
                xAxisKey="campaign"
                bars={[
                  { dataKey: 'original', name: 'Original (K)', color: CHART_COLORS.secondary },
                  { dataKey: 'amplified', name: 'Amplified (K)', color: CHART_COLORS.emerald }
                ]}
                height={300}
                showGrid={true}
              />
              <LineChart
                data={monthlyTrendData}
                xAxisKey="month"
                lines={[
                  { dataKey: 'campaigns', name: 'Campaigns', color: CHART_COLORS.info },
                  { dataKey: 'reach', name: 'Reach (M)', color: CHART_COLORS.purple },
                  { dataKey: 'multiplier', name: 'Avg Multiplier', color: CHART_COLORS.emerald }
                ]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="viral-triggers" className="space-y-6">
          <Alert className="border-orange-500 bg-orange-50 dark:bg-orange-950">
            <Zap className="h-4 w-4" />
            <AlertTitle>Viral Trigger Analysis</AlertTitle>
            <AlertDescription>
              Challenge/Trend showing highest effectiveness (91%). Use with caution - consider platform guidelines.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Viral Trigger Performance</h3>
              <TrendingUp className="h-5 w-5 text-orange-500" />
            </div>
            <div className="space-y-4">
              {viralTriggers.map((trigger, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{trigger.trigger}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{trigger.examples} examples analyzed</p>
                    </div>
                    <Badge variant={
                      trigger.risk === 'high' ? 'destructive' :
                      trigger.risk === 'medium' ? 'default' : 'secondary'
                    }>
                      {trigger.risk} risk
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Effectiveness Score</span>
                      <span className="font-semibold text-emerald-600">{trigger.effectiveness}%</span>
                    </div>
                    <Progress value={trigger.effectiveness} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassPanel>
              <h3 className="text-lg font-semibold mb-4">Performance Insights</h3>
              <div className="space-y-3">
                {performanceInsights.map((insight, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600">
                      {insight.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{insight.metric}</p>
                      <p className="text-sm text-muted-foreground">{insight.platform}</p>
                    </div>
                    <Badge variant="default" className="text-emerald-600">
                      {insight.lift}
                    </Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Most Viral Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Vaccine Challenge Video</span>
                      <span className="font-bold text-emerald-600">2.4M views</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mental Health Infographic</span>
                      <span className="font-bold text-emerald-600">890K shares</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Patient Stories Series</span>
                      <span className="font-bold text-emerald-600">1.2M engagements</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Best Performing Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">TikTok</span>
                      <span className="font-bold text-cyan-600">234% viral rate</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Instagram Reels</span>
                      <span className="font-bold text-cyan-600">189% viral rate</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">X/Twitter</span>
                      <span className="font-bold text-cyan-600">145% viral rate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Viral Trigger Analytics</h3>
              <Zap className="h-5 w-5 text-orange-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RadarChart
                data={viralTriggerData}
                metrics={[{ dataKey: 'effectiveness', name: 'Effectiveness', color: CHART_COLORS.emerald }]}
                height={300}
                showGrid={true}
              />
              <AreaChart
                data={viralTriggerData}
                xAxisKey="trigger"
                areas={[
                  { dataKey: 'effectiveness', name: 'Effectiveness %', color: CHART_COLORS.emerald },
                  { dataKey: 'risk', name: 'Risk Level', color: CHART_COLORS.rose }
                ]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        {/* NETWORK AUDIT TAB - FILE 03 */}
        <TabsContent value="network-audit" className="space-y-6">
          <Alert className="border-purple-500 bg-purple-50 dark:bg-purple-950">
            <Shield className="h-4 w-4" />
            <AlertTitle>Phase 3: The Amplification Network (Allies & Blockers)</AlertTitle>
            <AlertDescription>
              Comprehensive forensic audit distinguishing "Catalyst Nodes" (real advocates) from "Blockers" (fake influencers).
              Analyzing Dark Social leakage and the Screenshot Economy for optimized health messaging.
            </AlertDescription>
          </Alert>

          {/* EXECUTIVE SUMMARY */}
          <GlassPanel title='Executive Summary: Digital Communication Evolution' description='The landscape has evolved into sophisticated negotiation of trust, influence, and algorithmic visibility' badge='Strategic Intelligence'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-purple-500 bg-purple-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Core Thesis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{executiveSummary.thesis}</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-rose-500 bg-rose-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Key Finding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{executiveSummary.keyFinding}</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-indigo-500 bg-indigo-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Strategic Imperative</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{executiveSummary.strategic}</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* SECTION 2: UAE DIGITAL ECOSYSTEM */}
          <GlassPanel title='The Digital Ecosystem of the UAE' description='Content economy as public health arena with regulatory framework' badge='Market Context'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-purple-500" />
                    <h4 className="font-bold text-slate-900">{uaeContentEconomy.event}</h4>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-xs font-semibold text-purple-900 mb-1">Positioning</p>
                    <p className="text-xs text-slate-700">{uaeContentEconomy.positioning}</p>
                  </div>
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-xs font-semibold text-rose-900 mb-1">Challenge</p>
                    <p className="text-xs text-slate-700">{uaeContentEconomy.challenge}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-emerald-500" />
                    <h4 className="font-bold text-slate-900">Regulatory Framework</h4>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-xs text-slate-700">{uaeContentEconomy.regulation}</p>
                  </div>
                  <Alert className="mt-3 bg-emerald-50 border-emerald-300">
                    <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                    <AlertDescription className="text-xs text-emerald-900">
                      Legal safety net exists but doesn't solve engagement quality problem. Licensed influencers can still have fake followers.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* SECTION 3: THE "BLOCKER" AUDIT */}
          <GlassPanel title='The "Blocker" Audit: Anatomy of Artificial Amplification' description='Fake Boost phenomenon - statistically improbable engagement lacking qualitative depth' badge='Risk Analysis'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-2 border-rose-300 bg-rose-50/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Ghost className="h-5 w-5 text-rose-500" />
                    <h4 className="font-bold text-slate-900">The Fake Boost</h4>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-xs font-semibold text-slate-900 mb-1">Definition</p>
                    <p className="text-xs text-slate-700">{blockerAudit.fakeBoost}</p>
                  </div>
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-xs font-semibold text-slate-900 mb-1">Cost Range</p>
                    <p className="text-xs text-rose-700">{blockerAudit.costRange}</p>
                  </div>
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-xs font-semibold text-slate-900 mb-1">Bot Farms</p>
                    <p className="text-xs text-slate-700">{blockerAudit.botFarms}</p>
                  </div>
                  <Alert className="bg-rose-50 border-rose-300">
                    <AlertOctagon className="h-3 w-3 text-rose-500" />
                    <AlertDescription className="text-xs text-rose-900">
                      <strong>Risk:</strong> {blockerAudit.risk}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {blockerIndicators.map((indicator, idx) => (
                  <Card key={idx} className="bg-amber-50/20 border border-amber-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <UserX className="h-5 w-5 text-amber-500" />
                        <h5 className="font-semibold text-sm">{indicator.name}</h5>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-xs text-slate-700">{indicator.description}</p>
                      <div className="bg-white/50 p-2 rounded">
                        <p className="text-xs font-semibold text-rose-900 mb-1">Risk</p>
                        <p className="text-xs text-slate-700">{indicator.risk}</p>
                      </div>
                      <div className="bg-cyan-50 p-2 rounded">
                        <p className="text-xs font-semibold text-cyan-900 mb-1">Forensic</p>
                        <p className="text-xs text-slate-700">{indicator.forensic}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CASE STUDY: FITNESS GURU */}
            <Card className="border-2 border-slate-300 bg-slate-50/30">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2">Case Study: Blocker Profile</Badge>
                    <h4 className="font-bold text-slate-900">{caseStudyBlocker.name}</h4>
                    <p className="text-sm text-slate-600 mt-1">{caseStudyBlocker.followers} followers • {caseStudyBlocker.sector}</p>
                  </div>
                  <XCircle className="h-8 w-8 text-rose-500" />
                </div>
                <Alert className="mt-3 bg-amber-50 border-amber-300">
                  <AlertTriangle className="h-3 w-3 text-amber-500" />
                  <AlertDescription className="text-xs text-amber-900">
                    <strong>Audit Finding:</strong> {caseStudyBlocker.auditFinding}
                  </AlertDescription>
                </Alert>
              </CardHeader>
              <CardContent>
                <h5 className="font-semibold text-sm mb-3">The Blocker Dynamic</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {caseStudyBlocker.blockerDynamic.map((dynamic, idx) => (
                    <div key={idx} className="bg-white/50 p-3 rounded border border-rose-200">
                      <p className="text-xs text-slate-700">{dynamic}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </GlassPanel>

          {/* SECTION 4: THE "ALLY" AUDIT - CATALYST NODES */}
          <GlassPanel title='The "Ally" Audit: Identifying Catalyst Nodes' description='Biological accelerators for health message - translate, validate, advocate' badge='Force Multipliers'>
            <div className="space-y-6">
              {catalystArchetypes.map((archetype, idx) => (
                <Card key={idx} className={`border-2 ${
                  archetype.type === 'Authority Node' ? 'border-emerald-300 bg-emerald-50/30' :
                  archetype.type === 'Empathy Node' ? 'border-purple-300 bg-purple-50/30' :
                  'border-cyan-300 bg-cyan-50/30'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {archetype.type === 'Authority Node' ? (
                          <Award className="h-5 w-5 text-emerald-500" />
                        ) : archetype.type === 'Empathy Node' ? (
                          <Heart className="h-5 w-5 text-purple-500" />
                        ) : (
                          <Users className="h-5 w-5 text-cyan-500" />
                        )}
                        <h4 className="font-bold text-slate-900">{archetype.type}</h4>
                      </div>
                      {archetype.count && (
                        <Badge variant="default" className="bg-cyan-600">{archetype.count}</Badge>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 mt-2">{archetype.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {archetype.cases && archetype.cases.map((c, i) => (
                        <Card key={i} className="bg-white/50 border border-slate-200">
                          <CardContent className="p-4">
                            <h5 className="font-semibold text-sm text-slate-900 mb-2">{c.name}</h5>
                            <p className="text-xs text-slate-600 mb-2">{(c as any).role || (c as any).narrative}</p>
                            <div className="space-y-2">
                              <div className="bg-indigo-50 p-2 rounded">
                                <p className="text-xs font-semibold text-indigo-900 mb-1">Mechanism</p>
                                <p className="text-xs text-slate-700">{(c as any).mechanism || (c as any).narrative}</p>
                              </div>
                              <div className="bg-emerald-50 p-2 rounded">
                                <p className="text-xs font-semibold text-emerald-900 mb-1">Strategic Value</p>
                                <p className="text-xs text-slate-700">{c.value}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CATALYST TAGGING SYSTEM */}
            <Card className="bg-indigo-50/30 border border-indigo-300">
              <CardHeader>
                <CardTitle className="text-base">The "Catalyst" Dashboard Tagging System</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full text-xs">
                  <thead className="bg-indigo-100">
                    <tr>
                      <th className="p-2 text-left font-semibold">Tag</th>
                      <th className="p-2 text-left font-semibold">Criteria</th>
                      <th className="p-2 text-left font-semibold">Strategic Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {catalystTaggingSystem.map((tag, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-indigo-50'}>
                        <td className="p-2 font-mono font-semibold text-indigo-700">{tag.tag}</td>
                        <td className="p-2 text-slate-700">{tag.criteria}</td>
                        <td className="p-2 text-slate-700">{tag.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </GlassPanel>

          {/* SECTION 5: DARK SOCIAL LEAKAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title='The "Dark Social" Leakage' description='Screenshot Economy - where true velocity of health narratives is determined' badge='Invisible Metrics'>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded border border-slate-300">
                  <div className="flex items-center gap-2 mb-3">
                    <Camera className="h-5 w-5 text-slate-600" />
                    <h5 className="font-semibold text-sm">The Screenshot as Unit of Truth</h5>
                  </div>
                  <p className="text-xs text-slate-700 mb-3">{darkSocialLeakage.premise}</p>
                  <div className="space-y-2">
                    <div className="bg-white/50 p-2 rounded">
                      <p className="text-xs font-semibold text-slate-900 mb-1">Digital Majlis</p>
                      <p className="text-xs text-slate-700">{darkSocialLeakage.digitalMajlis}</p>
                    </div>
                    <div className="bg-white/50 p-2 rounded">
                      <p className="text-xs font-semibold text-slate-900 mb-1">Friction of Links</p>
                      <p className="text-xs text-slate-700">{darkSocialLeakage.frictionOfLinks}</p>
                    </div>
                    <div className="bg-white/50 p-2 rounded">
                      <p className="text-xs font-semibold text-slate-900 mb-1">Permanence</p>
                      <p className="text-xs text-slate-700">{darkSocialLeakage.permanence}</p>
                    </div>
                  </div>
                </div>

                {/* SCREENSHOT CATEGORIES */}
                <div>
                  <h5 className="font-semibold text-sm mb-3">What is Being Screenshotted?</h5>
                  <div className="space-y-3">
                    {screenshotCategories.map((cat, idx) => (
                      <Card key={idx} className="bg-white/50 border border-slate-200">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{cat.type}</Badge>
                          </div>
                          <p className="text-xs text-slate-700 mb-2"><strong>Trigger:</strong> {cat.trigger}</p>
                          <p className="text-xs text-slate-700 mb-2"><strong>Behavior:</strong> {cat.behavior}</p>
                          {cat.risk && (
                            <Alert className="bg-rose-50 border-rose-300 py-2">
                              <AlertTriangle className="h-3 w-3 text-rose-500" />
                              <AlertDescription className="text-xs text-rose-900">
                                <strong>Risk:</strong> {cat.risk}
                              </AlertDescription>
                            </Alert>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            <div className="space-y-6">
              <GlassPanel title='Strategic Remediation: The "Downloadable Card"' description='High-quality, verified asset that looks like screenshot but carries authority' badge='Solution'>
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-4 rounded border border-emerald-300">
                    <div className="flex items-center gap-2 mb-3">
                      <ScanLine className="h-5 w-5 text-emerald-500" />
                      <h5 className="font-semibold text-sm">Card Design Philosophy</h5>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white/50 p-2 rounded">
                        <p className="text-xs text-slate-700"><strong>Format:</strong> {downloadableCardSpecs.format}</p>
                      </div>
                      <div className="bg-white/50 p-2 rounded">
                        <p className="text-xs text-slate-700"><strong>Visual:</strong> {downloadableCardSpecs.visual}</p>
                      </div>
                      <div className="bg-white/50 p-2 rounded">
                        <p className="text-xs text-slate-700"><strong>Stamp:</strong> {downloadableCardSpecs.stamp}</p>
                      </div>
                      <div className="bg-white/50 p-2 rounded">
                        <p className="text-xs text-slate-700"><strong>Size:</strong> {downloadableCardSpecs.size}</p>
                      </div>
                    </div>
                  </div>

                  <Card className="bg-rose-50/30 border border-rose-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Frown className="h-5 w-5 text-rose-500" />
                        <h5 className="font-semibold text-sm">The "Rumor-Killer" Card</h5>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-slate-700 mb-2">{rumorKillerCard.purpose}</p>
                      <div className="space-y-2">
                        <div className="bg-white/50 p-2 rounded">
                          <p className="text-xs text-slate-700"><strong>Design:</strong> {rumorKillerCard.design}</p>
                        </div>
                        <div className="bg-white/50 p-2 rounded">
                          <p className="text-xs text-slate-700"><strong>Distribution:</strong> {rumorKillerCard.distribution}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>

              <GlassPanel title='Tracking the "Dark" Metrics' description='QR Code Telemetry reveals invisible velocity' badge='Analytics'>
                <Card className="bg-cyan-50/30 border border-cyan-300">
                  <CardContent className="p-4 space-y-3">
                    <div className="bg-white/50 p-3 rounded">
                      <p className="text-xs font-semibold text-cyan-900 mb-1">QR Telemetry</p>
                      <p className="text-xs text-slate-700">{darkSocialMetrics.qrTelemetry}</p>
                    </div>
                    <div className="bg-white/50 p-3 rounded">
                      <p className="text-xs font-semibold text-cyan-900 mb-1">Inference</p>
                      <p className="text-xs text-slate-700">{darkSocialMetrics.inference}</p>
                    </div>
                    <div className="bg-white/50 p-3 rounded">
                      <p className="text-xs font-semibold text-cyan-900 mb-1">Dashboard Insight</p>
                      <p className="text-xs text-slate-700">{darkSocialMetrics.insight}</p>
                    </div>
                  </CardContent>
                </Card>
              </GlassPanel>
            </div>
          </div>

          {/* SECTION 6: STRATEGIC SYNTHESIS */}
          <GlassPanel title='Strategic Synthesis: The "Ricochet" Amplification Module' description='Dashboard architecture for operational excellence' badge='Implementation Guide'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-sm mb-4">Dashboard Modules</h5>
                <div className="space-y-3">
                  {strategicModules.map((module, idx) => (
                    <Card key={idx} className="bg-indigo-50/20 border border-indigo-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-indigo-500" />
                          <h6 className="font-semibold text-sm">{module.name}</h6>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="bg-white/50 p-2 rounded">
                          <p className="text-xs font-semibold text-slate-900 mb-1">Input</p>
                          <p className="text-xs text-slate-700">{module.input}</p>
                        </div>
                        {module.process && (
                          <div className="bg-white/50 p-2 rounded">
                            <p className="text-xs font-semibold text-slate-900 mb-1">Process</p>
                            <p className="text-xs text-slate-700">{module.process}</p>
                          </div>
                        )}
                        {module.output && (
                          <div className="bg-white/50 p-2 rounded">
                            <p className="text-xs font-semibold text-slate-900 mb-1">Output</p>
                            <p className="text-xs text-slate-700">{module.output}</p>
                          </div>
                        )}
                        {module.function && (
                          <div className="bg-white/50 p-2 rounded">
                            <p className="text-xs font-semibold text-slate-900 mb-1">Function</p>
                            <p className="text-xs text-slate-700">{module.function}</p>
                          </div>
                        )}
                        {module.feature && (
                          <div className="bg-white/50 p-2 rounded">
                            <p className="text-xs font-semibold text-slate-900 mb-1">Feature</p>
                            <p className="text-xs text-slate-700">{module.feature}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-sm mb-4">New Operational Logic</h5>
                <div className="space-y-3">
                  {operationalLogic.map((shift, idx) => (
                    <Card key={idx} className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                            <XCircle className="h-5 w-5 text-rose-500" />
                          </div>
                          <ArrowRight className="h-5 w-5 text-purple-500" />
                          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-slate-500">From {shift.from}</p>
                            <p className="text-xs text-slate-500">To {shift.to}</p>
                          </div>
                        </div>
                        <p className="text-xs text-slate-700 bg-white/50 p-2 rounded">{shift.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* CONCLUSION */}
          <Alert className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-300">
            <Sparkles className="h-4 w-4 text-purple-500" />
            <AlertTitle className="font-bold text-purple-900">Conclusion</AlertTitle>
            <AlertDescription className="text-sm text-slate-700 mt-2">
              The "Amplification Network" of the UAE rejects the artificiality of the "Fake Boost" and embraces the authenticity of the "Real Advocate."
              By aligning the Ricochet system with organic behaviors—empowering the Allies, filtering the Blockers, and formatting for the Screenshot Economy—
              the ADPHC can ensure its message does not just travel, but <strong>lands</strong>. This is the path to sustainable, high-trust public health communication.
            </AlertDescription>
          </Alert>
        </TabsContent>

        {/* VERTICAL CONTENT TAB - FILE 05B: UAE HEALTH SOCIAL MEDIA AUDIT */}
        <TabsContent value="vertical-content" className="space-y-6">
          <Alert className="border-purple-500 bg-purple-50 dark:bg-purple-950">
            <Video className="h-4 w-4" />
            <AlertTitle>Vertical Revolution in Public Health Communication</AlertTitle>
            <AlertDescription>
              Forensic audit of 142 data points analyzing 9:16 aspect ratio dominance. 50 Stories content cases, 50 audience behavior interactions, and 3 strategic templates for scalable content transformation.
            </AlertDescription>
          </Alert>

          {/* EXECUTIVE SUMMARY */}
          <GlassPanel title="The Vertical Pivot" description="9:16 aspect ratio has become primary interface for public perception" badge="Strategic Intelligence">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-cyan-500 bg-cyan-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Core Thesis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{verticalRevolution.thesis}</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-purple-500 bg-purple-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Format Dominance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{verticalRevolution.format}</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-emerald-500 bg-emerald-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Key Finding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{verticalRevolution.finding}</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* CHAPTER 1: BEHIND THE SCENES (BTS) */}
          <GlassPanel title="Chapter 1: Behind the Scenes (BTS) Architecture" description="17 case studies of humanization through vertical storytelling" badge="Humanization">
            <div className="space-y-4">
              {btsCaseStudies.map((bts, idx) => (
                <Card key={idx} className="bg-gradient-to-r from-purple-50/50 to-pink-50/50 border-purple-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">{bts.id}</Badge>
                          <Badge className="bg-purple-600 text-xs">{bts.entity}</Badge>
                        </div>
                        <CardTitle className="text-base">{bts.title}</CardTitle>
                      </div>
                      <Camera className="h-5 w-5 text-purple-500" />
                    </div>
                    <CardDescription className="text-xs">{bts.context}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-white/70 p-3 rounded border border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Eye className="h-4 w-4 text-purple-500" />
                          <h6 className="text-xs font-semibold">Visual Hook (0-3s)</h6>
                        </div>
                        <p className="text-xs text-slate-700">{bts.visualHook}</p>
                      </div>
                      <div className="bg-white/70 p-3 rounded border border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Smartphone className="h-4 w-4 text-purple-500" />
                          <h6 className="text-xs font-semibold">Native Features</h6>
                        </div>
                        <ul className="text-xs text-slate-700 space-y-1">
                          {bts.nativeFeatures.map((feature, fidx) => (
                            <li key={fidx} className="flex items-start gap-2">
                              <span className="text-purple-500">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-emerald-50/50 p-3 rounded border border-emerald-300">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="h-4 w-4 text-emerald-600" />
                        <h6 className="text-xs font-semibold text-emerald-900">Strategic Insight</h6>
                      </div>
                      <p className="text-xs text-slate-700">{bts.strategicInsight}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* CHAPTER 2: Q&A INTERACTIVE ENGINE */}
          <GlassPanel title="Chapter 2: Q&A Interactive Engine" description="19 case studies of utility-driven engagement" badge="Interactive">
            <div className="space-y-4">
              {qaCaseStudies.map((qa, idx) => (
                <Card key={idx} className="bg-gradient-to-r from-blue-50/50 to-cyan-50/50 border-blue-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">{qa.id}</Badge>
                          <Badge className="bg-blue-600 text-xs">{qa.entity}</Badge>
                        </div>
                        <CardTitle className="text-base">{qa.title}</CardTitle>
                      </div>
                      <MessageSquare className="h-5 w-5 text-blue-500" />
                    </div>
                    <CardDescription className="text-xs">{qa.context}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-white/70 p-3 rounded border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="h-4 w-4 text-blue-500" />
                        <h6 className="text-xs font-semibold">Visual Hook</h6>
                      </div>
                      <p className="text-xs text-slate-700">{qa.visualHook}</p>
                    </div>
                    <div className="bg-emerald-50/50 p-3 rounded border border-emerald-300">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="h-4 w-4 text-emerald-600" />
                        <h6 className="text-xs font-semibold text-emerald-900">Strategic Insight</h6>
                      </div>
                      <p className="text-xs text-slate-700">{qa.strategicInsight}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* CHAPTER 3: ALERT PROTOCOL */}
          <GlassPanel title="Chapter 3: Alert Protocol" description="14 case studies of urgency and authority" badge="Critical">
            <div className="space-y-4">
              {alertCaseStudies.map((alert, idx) => (
                <Card key={idx} className="bg-gradient-to-r from-rose-50/50 to-red-50/50 border-rose-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="destructive" className="text-xs">{alert.id}</Badge>
                          <Badge variant="outline" className="text-xs border-rose-500 text-rose-700">{alert.entity}</Badge>
                        </div>
                        <CardTitle className="text-base">{alert.title}</CardTitle>
                      </div>
                      <Siren className="h-5 w-5 text-rose-600" />
                    </div>
                    <CardDescription className="text-xs">{alert.context}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-white/70 p-3 rounded border border-rose-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-rose-600" />
                        <h6 className="text-xs font-semibold">Visual Hook</h6>
                      </div>
                      <p className="text-xs text-slate-700">{alert.visualHook}</p>
                    </div>
                    <div className="bg-amber-50/50 p-3 rounded border border-amber-300">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="h-4 w-4 text-amber-600" />
                        <h6 className="text-xs font-semibold text-amber-900">Strategic Insight</h6>
                      </div>
                      <p className="text-xs text-slate-700">{alert.strategicInsight}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* AUDIENCE BEHAVIOR ANALYSIS - APPLAUSE METRICS */}
          <GlassPanel title="Chapter 4: Audience Behavior Analysis" description="50 high-engagement interactions analyzed by Applause Metrics" badge="Behavioral">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* SHARING METRICS */}
              <Card className="border-2 border-cyan-300 bg-cyan-50/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-cyan-500" />
                    <h5 className="font-semibold text-sm">Sharing (Viral Utility)</h5>
                  </div>
                  <CardDescription className="text-xs">15 high-share items analyzed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 max-h-96 overflow-y-auto">
                  {sharingMetrics.map((item, idx) => (
                    <div key={idx} className="bg-white/70 p-2 rounded border border-cyan-200">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="text-xs">{item.id}</Badge>
                      </div>
                      <p className="text-xs font-medium text-slate-900">{item.topic}</p>
                      <p className="text-xs text-slate-600 mt-1">{item.insight}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* SAVING METRICS */}
              <Card className="border-2 border-purple-300 bg-purple-50/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-5 w-5 text-purple-500" />
                    <h5 className="font-semibold text-sm">Saving (High-Value Archival)</h5>
                  </div>
                  <CardDescription className="text-xs">20 high-save items analyzed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 max-h-96 overflow-y-auto">
                  {savingMetrics.map((item, idx) => (
                    <div key={idx} className="bg-white/70 p-2 rounded border border-purple-200">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="text-xs">{item.id}</Badge>
                      </div>
                      <p className="text-xs font-medium text-slate-900">{item.topic}</p>
                      <p className="text-xs text-slate-600 mt-1">{item.insight}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* REPLY CHAIN METRICS */}
              <Card className="border-2 border-emerald-300 bg-emerald-50/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Reply className="h-5 w-5 text-emerald-500" />
                    <h5 className="font-semibold text-sm">Reply Chain (Sentiment)</h5>
                  </div>
                  <CardDescription className="text-xs">15 interaction items analyzed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 max-h-96 overflow-y-auto">
                  {replyChainMetrics.map((item, idx) => (
                    <div key={idx} className="bg-white/70 p-2 rounded border border-emerald-200">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="text-xs">{item.id}</Badge>
                      </div>
                      <p className="text-xs font-medium text-slate-900">{item.topic}</p>
                      <p className="text-xs text-slate-600 mt-1">{item.insight}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* CONTENT TRANSFORMER MODULE */}
          <GlassPanel title="Chapter 5: Content Transformer Module" description="3 strategic templates for scalable high-performance content" badge="Templates">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contentTemplates.map((template, idx) => (
                <Card key={idx} className={`border-2 ${
                  template.name === 'The Hero Template' ? 'border-purple-300 bg-purple-50/20' :
                  template.name === 'The Guide Template' ? 'border-blue-300 bg-blue-50/20' :
                  'border-rose-300 bg-rose-50/20'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      {template.name === 'The Hero Template' ? (
                        <Crown className="h-5 w-5 text-purple-500" />
                      ) : template.name === 'The Guide Template' ? (
                        <BookOpen className="h-5 w-5 text-blue-500" />
                      ) : (
                        <Siren className="h-5 w-5 text-rose-500" />
                      )}
                      <CardTitle className="text-base">{template.name}</CardTitle>
                    </div>
                    <CardDescription className="text-xs">{template.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-white/70 p-2 rounded">
                      <p className="text-xs font-semibold mb-1">Goal</p>
                      <p className="text-xs text-slate-700">{template.goal}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold">Structure</p>
                      {template.structure.map((phase, pidx) => (
                        <div key={pidx} className="bg-white/50 p-2 rounded border">
                          <p className="text-xs font-medium text-slate-900">{phase.phase}</p>
                          <p className="text-xs text-slate-600">{phase.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-emerald-50/50 p-2 rounded border border-emerald-300">
                      <p className="text-xs font-semibold text-emerald-900 mb-1">Implication</p>
                      <p className="text-xs text-slate-700">{template.implication}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* FINAL CONCLUSION */}
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Platform Performance Overview</h3>
              <LucideBarChart className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RadarChart
                data={platformPerformanceData}
                metrics={[
                  { dataKey: 'engagement', name: 'Engagement', color: CHART_COLORS.emerald },
                  { dataKey: 'viral', name: 'Viral Score', color: CHART_COLORS.info },
                  { dataKey: 'reach', name: 'Reach', color: CHART_COLORS.purple }
                ]}
                height={300}
                showGrid={true}
              />
              <BarChart
                data={platformPerformanceData}
                xAxisKey="platform"
                bars={[
                  { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.emerald },
                  { dataKey: 'viral', name: 'Viral Score', color: CHART_COLORS.info }
                ]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>

          <Alert className="bg-gradient-to-r from-purple-100 to-indigo-100 border-purple-400">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <AlertTitle className="font-bold text-purple-900">The Future of Health Communication</AlertTitle>
            <AlertDescription className="text-sm text-slate-700 mt-2">
              The UAE health authorities have successfully transitioned from broadcast model to conversational ecosystem.
              By mastering vertical format and prioritizing utility over vanity, they have created digital infrastructure that is resilient, engaging, and trusted.
              The future strategy must focus on deepening engagement—moving from Shares to Advocacy—and using rich data to <strong>predict</strong>, not just react to, community health needs.
              The Vertical First approach is no longer an option; it is the standard for public health relevance in the region.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  )
}
