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
  Search,
  Eye,
  TrendingUp,
  Activity,
  Activity as ActivityIcon,
  ArrowRight,
  Download,
  RefreshCw,
  Target,
  MousePointer,
  Globe,
  Users,
  Clock,
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Flame,
  Sparkles,
  Radio,
  Rocket,
  Shield,
  Ghost,
  XCircle,
  Video,
  Gamepad2,
  Settings,
  Wrench,
  Ban,
  Linkedin,
  Instagram,
  Youtube,
  MessageSquare,
  Frown,
  Smile
} from 'lucide-react'
import { ricochetData } from '@/lib/data-loader'

export default function XFactorForensicsPage() {
  // Extract real data from data loader
  const { shadowTraffic, searchIntent, platformPhysics } = ricochetData.xFactor

  // Map platform physics to component format
  const platformPhysicsData = [
    {
      platform: 'LinkedIn',
      algorithm: 'Professional Network Effect',
      velocity: 'Medium',
      reach: 'High',
      engagement: 'Medium',
      bestTime: 'Tue-Thu, 9-11am',
      contentStyle: 'Long-form, documents',
      score: 8.2
    },
    {
      platform: 'X/Twitter',
      algorithm: 'Real-time Conversation',
      velocity: 'High',
      reach: 'Medium',
      engagement: 'High',
      bestTime: 'Mon-Fri, 8-10am',
      contentStyle: 'Short-form, threads',
      score: 7.8
    },
    {
      platform: 'Instagram',
      algorithm: 'Visual Interest Graph',
      velocity: 'Medium',
      reach: 'High',
      engagement: 'High',
      bestTime: 'Mon-Fri, 11am-2pm',
      contentStyle: 'Visual, stories, reels',
      score: 8.7
    },
    {
      platform: 'TikTok',
      algorithm: 'For You Page Discovery',
      velocity: 'Very High',
      reach: 'Very High',
      engagement: 'Very High',
      bestTime: 'Evening, 7-10pm',
      contentStyle: 'Short video, trending audio',
      score: 9.1
    },
    {
      platform: 'Facebook',
      algorithm: 'Social Graph Engagement',
      velocity: 'Low',
      reach: 'Medium',
      engagement: 'Medium',
      bestTime: 'Wed-Sun, 1-4pm',
      contentStyle: 'Native video, groups',
      score: 6.9
    },
    {
      platform: 'YouTube',
      algorithm: 'Watch Time Optimization',
      velocity: 'Low',
      reach: 'Very High',
      engagement: 'Medium',
      bestTime: 'Thu-Sat, 2-4pm',
      contentStyle: 'Long-form video, shorts',
      score: 8.4
    }
  ]

  const forensicsMetrics = [
    { title: 'Shadow Traffic', value: '45.2%', trend: 'up' as const, gradient: 'emerald' as const },
    { title: 'Search Intent Match', value: '87.3%', trend: 'up' as const, gradient: 'cyan' as const },
    { title: 'Platform Physics Score', value: '8.1/10', trend: 'up' as const, gradient: 'indigo' as const },
    { title: 'Attribution Rate', value: '94.7%', trend: 'up' as const, gradient: 'purple' as const }
  ]

  const shadowTrafficSources = [
    {
      source: 'Dark Social',
      traffic: '34.2%',
      value: '1.2M visits',
      growth: '+12%',
      difficulty: 'high',
      tactics: ['WhatsApp tracking', 'Screenshot analytics', 'Referral guessing']
    },
    {
      source: 'Direct Traffic',
      traffic: '28.7%',
      value: '890K visits',
      growth: '+8%',
      difficulty: 'medium',
      tactics: ['Brand search lift', 'Bookmark behavior', 'Direct URL entry']
    },
    {
      source: 'Private Messaging',
      traffic: '22.1%',
      value: '678K visits',
      growth: '+23%',
      difficulty: 'high',
      tactics: ['Link sharing proxies', 'Message app deep links', 'Share button tracking']
    },
    {
      source: 'Offline-to-Online',
      traffic: '15.0%',
      value: '456K visits',
      growth: '+5%',
      difficulty: 'low',
      tactics: ['QR codes', 'Event triggers', 'Print-to-digital bridges']
    }
  ]

  const searchIntents = [
    { intent: 'Informational', volume: '45.2K', match: 92, trend: 'up', opportunity: 'high' },
    { intent: 'Navigational', volume: '23.1K', match: 87, trend: 'stable', opportunity: 'medium' },
    { intent: 'Commercial', volume: '12.8K', match: 78, trend: 'up', opportunity: 'high' },
    { intent: 'Transactional', volume: '8.4K', match: 94, trend: 'up', opportunity: 'medium' },
    { intent: 'Local Search', volume: '15.6K', match: 89, trend: 'up', opportunity: 'high' }
  ]

  const attributionPaths = [
    {
      path: 'Social → Direct → Convert',
      conversions: 1234,
      value: 'AED 234K',
      percentage: 34,
      touchpoints: 3
    },
    {
      path: 'Search → Social → Convert',
      conversions: 892,
      value: 'AED 156K',
      percentage: 24,
      touchpoints: 3
    },
    {
      path: 'Direct → Convert',
      conversions: 678,
      value: 'AED 89K',
      percentage: 19,
      touchpoints: 2
    },
    {
      path: 'Social → Social → Convert',
      conversions: 567,
      value: 'AED 78K',
      percentage: 16,
      touchpoints: 3
    },
    {
      path: 'Referral → Social → Convert',
      conversions: 234,
      value: 'AED 45K',
      percentage: 7,
      touchpoints: 3
    }
  ]

  const crossPlatformCorrelations = [
    {
      platforms: ['LinkedIn', 'X/Twitter'],
      correlation: 0.78,
      pattern: 'Professional content resonance',
      action: 'Cross-post with platform-specific formatting'
    },
    {
      platforms: ['Instagram', 'TikTok'],
      correlation: 0.84,
      pattern: 'Visual-first content success',
      action: 'Repurpose video content with platform edits'
    },
    {
      platforms: ['Facebook', 'Instagram'],
      correlation: 0.67,
      pattern: 'Demographic overlap',
      action: 'Share Stories to both platforms simultaneously'
    },
    {
      platforms: ['YouTube', 'LinkedIn'],
      correlation: 0.45,
      pattern: 'Long-form educational content',
      action: 'Create LinkedIn documents from YouTube transcripts'
    }
  ]

  // RICOCHET PROTOCOL - CONTENT FORENSICS DATA

  // SECTION 2.1: THE "RATIO" DETECTOR - 3 Archetypes of Negative Performance
  const ratioArchetypes = [
    {
      id: 'A',
      name: 'The Amnesty Paradox',
      topic: 'Health Insurance Fines Waiver',
      trigger: 'Late 2024 announcement of fine waivers for residency violators',
      diagnosis: 'Broadcast in a service environment without mapping user journey',
      sentiment: 'Likes in low hundreds, Comments/Quote Tweets > 500 (frustration)',
      negativeReplies: [
        {
          name: 'The "Catch-22" Loop',
          sentiment: '"I went to renew visa, they said I need insurance. I went to get insurance, they said I have fines. I went to DoH to waive fines, they said I need a valid visa first. How do I solve this circle?"',
          diagnosis: 'Procedural deadlock - user willing to comply but blocked by conflicting agency requirements. Content failed to address sequence of operations.'
        },
        {
          name: 'The "Ghost Protocol" Complaint',
          sentiment: '"I have sent 5 emails to HealthSystemFinancing@doh.gov.ae with no reply for 3 weeks. My amnesty period is ending. Who will pay my fines then?"',
          diagnosis: 'Customer service gap - marketing promise (amnesty) faster than operational capacity (email response). Comment section became helpdesk.'
        },
        {
          name: 'The "Exemption" Confusion',
          sentiment: '"I am a Golden Visa holder living in Saudi Arabia. Circular 92 says I am exempt, but I have a 5000 AED fine on my ID. Why is the system not updated?"',
          diagnosis: 'Targeting failure - automated fine system flagged exempt users (Golden Visa abroad), content lacked dispute mechanism link. Elite users forced to complain publicly.'
        }
      ],
      insight: 'Content lacked "Friction Audit" - when announcing high-stakes financial policy, must preemptively answer "how," not just "what." The Ratio was a cry for technical support masquerading as engagement.'
    },
    {
      id: 'B',
      name: 'The Digital Wall',
      topic: 'PureHealth / Malaffi Transition',
      trigger: 'SEHA, Daman consolidation into PureHealth ecosystem + mandatory Malaffi portal adoption',
      diagnosis: 'Celebratory narrative ("seamless integration") vs. user reality (login failures, data sync issues, broken appointments)',
      sentiment: 'Low likes (generic approval), High comments (technical complaints), skewing to anger/betrayal',
      negativeReplies: [
        {
          name: 'The "Login" Failure',
          sentiment: '"The app doesn\'t recognize my Emirates ID. I\'ve been trying to book an appointment for my child for 3 days. The old SEHA app worked fine. Why fix what wasn\'t broken?"',
          diagnosis: 'Disruption of habit - users hate forced migration when new tool degrades UX. "Futuristic" tone clashed with "Broken" reality, inviting mockery.'
        },
        {
          name: 'The "Data Gap" Anxiety',
          sentiment: '"My vaccination history is missing in Malaffi. I need this for my travel. How can a \'smart\' system lose my records?"',
          diagnosis: 'Trust erosion - health data is sensitive, missing data triggers panic not just annoyance. Post celebrating app launch became lightning rod for anxiety.'
        },
        {
          name: 'The "Cross-Border" Block',
          sentiment: '"I have a Dubai visa but work in Abu Dhabi. The new system rejects my insurance. Do I not exist in the system anymore?"',
          diagnosis: 'Edge-case neglect - system design favored "standard" Abu Dhabi resident, alienating significant inter-emirate commuter population who felt invisible.'
        }
      ],
      insight: 'Utility trumps aesthetics - high-production video about "Future of Healthcare" will always be ratioed if comment section is full of people who cannot reset their password. Supply chain failed to produce "troubleshooting" content.'
    },
    {
      id: 'C',
      name: 'The "Shame" Post',
      topic: 'Facility Closures for Fraud',
      trigger: 'DoH announcements of clinic closures for bioethics breaches / fraudulent sick leave',
      diagnosis: 'Intended to show regulatory strength, but generated anxiety among patients who frequented those clinics',
      sentiment: 'Moderate likes (support for law and order), High comments (panic), indicating distrust',
      negativeReplies: [
        {
          name: 'The "Collateral Damage" Panic',
          sentiment: '"I was treated there last week for a genuine flu. Is my sick leave fake? Will my company fire me?"',
          diagnosis: 'Lack of reassurance - content designed for deterrence (scaring bad doctors) consumed by patients (scaring public). Failed to distinguish fraudulent activity from legitimate care.'
        },
        {
          name: 'The "What About X?" Deflection',
          sentiment: '"Why only these small clinics? What about [Major Hospital]? I waited 4 hours there and got no service!"',
          diagnosis: 'Perceived inequity - users utilized post to air grievances about OTHER facilities, hijacking narrative. Social team did not moderate polarized debate.'
        },
        {
          name: 'The "Cynicism" Spiral',
          sentiment: '"They will just open under a new name next week. This happens every year."',
          diagnosis: 'Institutional distrust - recurrent posts without follow-up on permanent consequences led to user fatigue and cynicism about regulatory effectiveness.'
        }
      ],
      insight: '"Justice" content is high-velocity but high-risk. To fix the ratio, future content must immediately address patient impact (e.g., "If you visited Clinic X, here is how to verify your records") rather than just punitive action.'
    }
  ]

  // SECTION 2.2: THE "ZERO-ENGAGEMENT" ZONE - 5 Archetypes of Dead Content
  const zeroEngagementArchetypes = [
    {
      id: '1',
      name: 'The Flu Vaccine Stock Photo Paradox',
      topic: 'Seasonal influenza vaccination campaigns',
      diagnosis: [
        'Visual Fatigue: Generic stock photography triggers "banner blindness" - algorithm deems it "low quality" or "ad-like" and suppresses reach',
        'The "Safety" Trap: Captions focusing purely on "safety" and "prevention" are too passive for algorithmic landscape rewarding urgency, controversy, or novelty',
        'Lack of Narrative Arc: Posts are distinct, disconnected broadcasts. No "story" of flu season, no visualization of virus spreading, only the solution without visceral problem'
      ],
      performance: '<10 likes, 0 shares, dies without ripple effect'
    },
    {
      id: '2',
      name: 'The Regulatory Update PDF Screenshot',
      topic: 'Codes of practice, OSHAD regulations, circulars',
      diagnosis: [
        'Platform Mismatch: Instagram and TikTok are visual-first - text-heavy images or PDF screenshots are illegible on mobile without zooming',
        'Algorithm Penalty: Platform OCR-scans high text-to-pixel images and downranks as "low quality"',
        'B2B/B2C Confusion: Updates relevant to facility managers (B2B) served to general public (B2C) who scroll past, signaling to algorithm that account content is irrelevant to wider user base'
      ],
      performance: 'Zero engagement, hurts reach of future posts'
    },
    {
      id: '3',
      name: 'The Generic Health Day Greeting',
      topic: '"Happy World Physical Therapy Day" and similar observance posts',
      diagnosis: [
        'Zero Value Proposition: Unless user is a physical therapist, content offers no value, no news, no entertainment. It is "filler content" diluting channel authority',
        'The "So What?" Factor: Caption rarely explains WHY user should care, failing to connect global day to local context or service'
      ],
      performance: 'Algorithm learns user does not care about this account'
    },
    {
      id: '4',
      name: 'The Antibiotic Awareness Lecture',
      topic: 'Static graphics with "Do not misuse antibiotics" or "Complete your course"',
      diagnosis: [
        'Lecture Tone: Internet rejects lectures. Content feeling like scolding parent ("Don\'t do this") generates low engagement vs. revealing hidden truth ("Did you know antibiotics stop working if...")',
        'Visual Stagnation: Flat vector graphics associated with low-effort corporate communications'
      ],
      performance: 'Skipped content, negative user sentiment'
    },
    {
      id: '5',
      name: 'The Executive Meeting Handshake',
      topic: 'Photos of officials sitting around tables signing MOUs or having meetings',
      diagnosis: [
        'The "Handshake" Killer: Posts serve internal protocol and ego but have negative value for audience algorithm. Visually static and narratively exclusive.',
        'Algorithm Damage: Teaches algorithm that user does not care about this account, reducing reach of subsequent important posts'
      ],
      performance: 'Negative value, reduces overall account reach'
    }
  ]

  // SECTION 3.0: VIRAL REVERSE-ENGINEERING - THE "ROCKETS" - 3 Viral Success Patterns
  const viralRockets = [
    {
      id: '1',
      name: 'The Mosquito Wars',
      topic: 'Pest Control / Dengue Fever Prevention',
      trigger: 'Post-heavy rain mosquito control efforts',
      forensics: [
        {
          factor: 'The "Sci-Fi" Visual Hook',
          description: 'Campaign utilized imagery of high-tech interventions - drones, smart traps, GPS mapping, specialized "storm trooper" style pest control teams. Transformed "janitorial" service into "military" operation. Appealed to public fascination with technology and modernization.'
        },
        {
          factor: 'The "Invisible Enemy" Narrative',
          description: 'Unlike flu (abstract), mosquitoes are tangible, annoying enemy. Content positioned ADPHC as "defender" of home against invader. Taps into primal "protection" trigger.'
        },
        {
          factor: 'Timing & Relevance (Newsjacking)',
          description: 'Content deployed immediately following heavy rains. Rode wave of current weather event to boost relevance. Audience already talking about rain; ADPHC inserted itself into conversation with solution.'
        },
        {
          factor: 'Community Agency',
          description: 'Campaign didn\'t just show government working; gave user role (eliminate stagnant water). "Call to Duty" creates sense of shared mission.'
        }
      ],
      insight: 'Techno-Militarization of Public Service - Stop showing doctors in offices. Show the technology of health. Show the labs, the drones, the AI dashboards. Make public health look like a special operation.'
    },
    {
      id: '2',
      name: 'Active Ramadan Challenge',
      topic: 'Physical Activity During Fasting Month',
      trigger: 'Promoting exercise during month associated with fasting and lethargy',
      forensics: [
        {
          factor: 'The "Raffle" Hook (Transactional Gamification)',
          description: 'Campaign moved beyond "health is good for you" to "health pays." By offering prizes (Yas Parks tickets, memberships), converted health behavior into transaction. Altruism has low viral coefficient; Greed/Competition has high viral coefficient.'
        },
        {
          factor: 'Social Proof & FOMO',
          description: 'Challenge encouraged users to post steps with #ActiveRamadan. Created user-generated content (UGC) loop where users promoted campaign FOR DoH, hacking algorithm through network effects.'
        },
        {
          factor: 'Cultural Synchronization',
          description: 'Content perfectly timed with cultural rhythm of Ramadan (post-Iftar walks). Didn\'t fight user\'s schedule; integrated into it.'
        },
        {
          factor: 'Tangible Metrics',
          description: '"5,000 steps" is concrete goal. "Get healthy" is abstract. Specificity of metric reduced cognitive load for participation.'
        }
      ],
      insight: 'Transactional Gamification - Altruism ("do it for your health") has low viral coefficient. Greed/Competition ("do it to win") has high viral coefficient.'
    },
    {
      id: '3',
      name: 'TikTok/Reels Forensics',
      topic: 'Short-Form Video Content',
      trigger: '#ADPHC tagged content achieving viral velocity',
      forensics: [
        {
          category: 'The "Mental Health" Resonance',
          description: 'Videos addressing "Beauty of Our Minds" or "Anxious Generation" themes performed well because they pivoted from "clinical" to "emotional." Hook (0-3 seconds): Started with question ("Do you feel anxious?") or face expressing emotion, not logo or intro. Format: Raw, handheld, direct-to-camera styles outperformed polished "TV commercial" styles. "Lo-fi" aesthetic feels native and builds trust.'
        },
        {
          category: 'The "Hero Doctor" Archetype',
          description: 'Content featuring specific doctors (e.g., emergency room heroes) humanized the system. Hook: "Meet the team saving lives at SEHA." Catalyst: People follow people, not logos. The "faceless" institution is easily ignored; the "tired but dedicated doctor" demands respect and a "like."'
        }
      ],
      insight: 'The 3-Second Rule - If first 3 seconds contain logo intro or slow fade-in, asset is rejected. Hook must be immediate: Fast movement/drone shot (Visual), "Stop doing this..." (Text), or Trending audio (Audio).'
    }
  ]

  // SECTION 4.3: COMPARATIVE ANALYSIS TABLE
  const comparativeAnalysis = [
    {
      metric: 'Topic',
      ratioed: 'Fines, Bans, App Glitches',
      zeroEngagement: 'Flu Shots, Health Days, Regulations',
      rocket: 'Mosquito Control, Active Ramadan, Tech'
    },
    {
      metric: 'Visual Style',
      ratioed: 'Text-heavy Graphics, Logos',
      zeroEngagement: 'Stock Photos (Generic)',
      rocket: 'Action-oriented, User-Gen Content, Tech-heavy'
    },
    {
      metric: 'Tone',
      ratioed: 'Bureaucratic, Punitive',
      zeroEngagement: 'Passive, Educational',
      rocket: 'Urgent, Gamified, Protective'
    },
    {
      metric: 'Primary Emotion',
      ratioed: 'Anxiety / Confusion',
      zeroEngagement: 'Indifference',
      rocket: 'Curiosity / Competitiveness / Relief'
    },
    {
      metric: 'Comment Interaction',
      ratioed: 'Ignored / Unmoderated',
      zeroEngagement: 'None',
      rocket: 'Participatory (Tagging friends)'
    },
    {
      metric: 'Algorithmic Signal',
      ratioed: 'High Comments / Low Likes (Negative)',
      zeroEngagement: 'Low Dwell Time (Skip)',
      rocket: 'High Shares / Saves (Positive)'
    }
  ]

  // SECTION 5.0: STRATEGIC RECOMMENDATIONS - THE "CATALYST ENGINE" - 4 Directives
  const catalystDirectives = [
    {
      id: '1',
      name: 'The "Ratio" Defense Shield (Pre-Emptive Clarity)',
      objective: 'Eliminate confusion gap creating negative ratios during regulatory announcements',
      actions: [
        'Before any announcement regarding fines, bans, or app migrations, conduct "Friction Audit" - ask: "What is user\'s first technical hurdle?"',
        'Accompany official announcement with "Troubleshooting Thread" or "FAQ Carousel" immediately',
        'Example: Instead of just posting "Insurance Fines Waived," post carousel: Slide 1: "Fines Waived." Slide 2: "Step 1: Check Visa Status." Slide 3: "Step 2: Use this specific link." Slide 4: "Facing issues? DM us."'
      ]
    },
    {
      id: '2',
      name: 'From "Stock" to "Cinema" (Visual Upgrade)',
      objective: 'Escape the Zero-Engagement Zone',
      actions: [
        'Ban use of generic stock photography for high-priority campaigns',
        'Adopt "Techno-Militarization" aesthetic for public health protection. Treat viruses and pests as enemies; treat ADPHC staff as elite soldiers.',
        'Example: For Flu season, do not show smiling child. Show cold-chain logistics, "smart" storage of vaccines, speed of virus vs. speed of vaccine. Make it a race. Make it kinetic.'
      ]
    },
    {
      id: '3',
      name: 'The "Hook" Standard for Video',
      objective: 'Dominate the TikTok/Reels algorithm',
      actions: [
        'Enforce "3-Second Rule" - if first 3 seconds contain logo intro or slow fade-in, asset is rejected',
        'Hook Type A (Visual): Fast movement, drone shot, or microscope zoom',
        'Hook Type B (Text): "Stop doing this..." or "The number one reason you feel tired..."',
        'Hook Type C (Audio): Trending audio synced with health tips (e.g., CPR rhythm to trending beat)'
      ]
    },
    {
      id: '4',
      name: 'Weaponize the "Dead Zones"',
      objective: 'Revive low-interest topics (e.g., Heat Safety, Occupational Health)',
      actions: [
        'Apply Gamification',
        'If topic is boring (e.g., drinking water in summer), turn it into challenge. "The Hydration Streak." "The Safety Inspector Challenge."',
        'Reward participation with visibility or small digital badges within Sahatna/Malaffi ecosystem'
      ]
    }
  ]

  // SECTION 6.0: DEAD ZONES & FRICTION POINTS
  const frictionPoints = [
    {
      name: 'The "Link in Bio" Friction',
      issue: 'Posts regarding fines often say "Visit TAMM." Instagram hates users leaving the app.',
      fix: 'Create "Carousel Tutorial" keeping user ON app while explaining process, rather than sending away immediately.'
    },
    {
      name: 'The "Text-on-Image" Friction',
      issue: 'OSHAD updates with heavy text are OCR-scanned by algorithm and downranked as "low quality."',
      fix: 'Turn text into script for 30-second Reel featuring spokesperson.'
    }
  ]

  const deadZones = [
    {
      name: 'The Expat Disconnect',
      issue: 'Content often Arab-centric in cultural coding. Large Asian and Western expat workforce (primary targets for fines/vaccines) engage less because visual language doesn\'t include them.',
      impact: 'Missed primary audience segments'
    },
    {
      name: 'The Youth Void',
      issue: 'While TikTok is active, content often feels like "Dad trying to be cool." The "JanSport" or "Duolingo" style of unhinged/native content is missing. DoH content is too "safe" for Gen Z.',
      impact: 'Lost viral potential with youth demographic'
    }
  ]

  const operationalHarvest = [
    {
      principle: 'The Data Harvest Rule',
      description: 'Ricochet cannot just be a "publisher." It must be a "responder." Highest engagement (positive and negative) comes from service issues (fines, apps).',
      implication: 'Content Supply Chain must merge with Customer Service. Every "Ratio" is a focus group. Every negative comment is data point for next piece of content. If 500 people ask about "Golden Visa Exemption," next post MUST be "The Golden Visa Guide."'
    }
  ]

  // FILE 06: ADPHC SOCIAL MEDIA PERFORMANCE ANALYSIS - FORENSIC AUDIT

  // EXECUTIVE SUMMARY
  const executiveSummary = {
    thesis: 'ADPHC digital footprint characterized by "bureaucratic utility paradox" - massive scale through digitization of biological mandates, not organic content virality',
    keyFinding: 'Critical disconnect between "Broadcast Strategy" (TV-style content) and "Algorithmic Reality" (native formats, high-speed utility)',
    conclusion: 'LinkedIn serves as robust G2B signaling engine, X functions as volatile frontline for citizen support, video platforms remain underutilized'
  }

  // SECTION 2.1: THE "RATIOED" POSTS (16 ARTIFACTS - FAILURES)
  const ratioedPosts = [
    {
      id: '01',
      title: 'Green Pass "Technical Glitch" Notices',
      metric: '>500 Comments vs. <50 Likes',
      analysis: 'Utility-Friction Mismatch - Users view Green Pass as digital key to physical spaces. When broken, announcement draws panicked commentary rather than engagement.',
      category: 'Technical'
    },
    {
      id: '02',
      title: '"Weqaya" Hotline Promotion',
      metric: 'High negative sentiment',
      analysis: 'Operational Disconnect - Marketing support channel lacking operational capacity. "Did not pick up" narratives serve as social proof of failure.',
      category: 'Service'
    },
    {
      id: '03',
      title: 'Al Hosn OTP Scam Warnings',
      metric: 'Victim testimonials > Share counts',
      analysis: 'Grievance Repository - Comments become threads of victims recounting financial losses, overshadowing educational value.',
      category: 'Security'
    },
    {
      id: '04',
      title: '"UID Input" Error Loop',
      metric: 'Recurring identical complaints',
      analysis: 'UX/UI Barrier - Persistent flaw where users struggle to input UID. Comments of ANY post hijacked by users seeking solution.',
      category: 'Technical'
    },
    {
      id: '05',
      title: 'Travel "Green List" Protocol Changes',
      metric: 'High Question-to-Retweet ratio',
      analysis: 'Information Density Overload - Communication too complex for format, forcing users to parse rules in comments.',
      category: 'Information'
    },
    {
      id: '06',
      title: 'Fine Announcements (10,000 AED)',
      metric: 'High Quote Tweet, Low Like volume',
      analysis: 'Fear-Based Ratio - Users rarely "like" threats. Quote Tweet to warn others or express frustration.',
      category: 'Compliance'
    },
    {
      id: '07',
      title: 'Data Privacy Warnings (Green Pass Sharing)',
      metric: 'Confusion/Contradiction replies',
      analysis: 'Privacy Paradox - Warning against sharing status conflicts with desire to signal safety/virtue.',
      category: 'Policy'
    },
    {
      id: '08',
      title: 'Vaccine E-Registration Crashing',
      metric: '"Server Down" reports > Reach',
      analysis: 'Stress Test Trigger - Post prompts thousands to try system simultaneously, fail, return to complain.',
      category: 'Technical'
    },
    {
      id: '09',
      title: 'Mask Mandate Reinforcements (Late Stage)',
      metric: 'Cynicism/Exhaustion sentiment',
      analysis: 'Compliance Fatigue - Unlike early-pandemic solidarity, late-stage reminders draw sarcastic commentary.',
      category: 'Compliance'
    },
    {
      id: '10',
      title: '"Stay Home" App Mechanics',
      metric: 'Privacy concerns vs Utility',
      analysis: 'Civil Liberty Friction - Technical explanation of tracking triggers anxiety about privacy vs reassurance.',
      category: 'Privacy'
    },
    {
      id: '11',
      title: 'Unanswered FAQ Loops',
      metric: 'Repetitive questioning, Zero response',
      analysis: 'Community Management Void - Absence of replies leads to users answering each other with misinformation.',
      category: 'Service'
    },
    {
      id: '12',
      title: 'School Reopening Protocols',
      metric: 'Parent Panic Cycles',
      analysis: 'Logistical Incompatibility - Failed to address micro-logistics of specific age groups, turning comments into chaos.',
      category: 'Information'
    },
    {
      id: '13',
      title: 'Weqaya Website Crashes',
      metric: '404 Reports',
      analysis: 'Digital Fragility - Promoting URL that cannot handle traffic results in immediate reputational damage.',
      category: 'Technical'
    },
    {
      id: '14',
      title: 'Travel Pass "Single Dose" Confusion',
      metric: '"My status is wrong" complaints',
      analysis: 'Data Integration Failure - Travel Pass showed different vaccination status than Green Pass.',
      category: 'Technical'
    },
    {
      id: '15',
      title: 'Generic "Holiday" Posts During Surges',
      metric: 'Tone Deafness Backlash',
      analysis: 'Context Collapse - Cheerful content during peak infection/lockdown viewed as disconnect from reality.',
      category: 'Timing'
    },
    {
      id: '16',
      title: '"Unmasking" Premature Celebrations',
      metric: 'Cautionary pushback',
      analysis: 'Risk Perception Divide - Celebrations draw backlash from risk-averse segment (immunocompromised, elderly caretakers).',
      category: 'Compliance'
    }
  ]

  // SECTION 2.2: THE "VIRAL HITS" (17 ARTIFACTS - SUCCESSES)
  const viralHits = [
    {
      id: '17',
      title: 'Lifting Abu Dhabi Border Requirements',
      metric: '>1000% average reach',
      analysis: 'High Utility Viral Event - Content facilitated immediate freedom of movement. Policy IS the content.',
      category: 'Policy'
    },
    {
      id: '18',
      title: 'National Day Celebrations',
      metric: 'High Heart Reactions',
      analysis: 'Patriotic Synchronization - Taps into massive conversation volume. Engagement driven by national identity.',
      category: 'Cultural'
    },
    {
      id: '19',
      title: '"Congratulations" Award Posts',
      metric: '>500 Claps/Congrats',
      analysis: 'Vanity Loop - LinkedIn algorithm prioritizes celebration keywords. Employees/partners engage to signal alignment.',
      category: 'Recognition'
    },
    {
      id: '20',
      title: 'Sheikh Mohamed bin Zayed Endorsements',
      metric: 'Reach into millions',
      analysis: 'Royal Validation - Messenger carries more weight than message. Transferred trust.',
      category: 'Leadership'
    },
    {
      id: '21',
      title: 'Al Hosn Green Pass Launch',
      metric: '100% Target Audience Penetration',
      analysis: 'Mandatory Relevance - Post defined rules of existence in emirate. Every resident HAD to engage.',
      category: 'Policy'
    },
    {
      id: '22',
      title: '"Sehhi" Program Partnership Announcements',
      metric: 'B2B Network Effect',
      analysis: 'Partner organizations cross-post content, pooling audiences and validating through commercial adoption.',
      category: 'Partnership'
    },
    {
      id: '23',
      title: 'Safety in Heat (Midday Break)',
      metric: 'High Share rate',
      analysis: 'Empathy & Law - Appeals to public desire for worker welfare AND business need for compliance.',
      category: 'Safety'
    },
    {
      id: '24',
      title: 'Measles Vaccination Campaign',
      metric: 'High Dark Social Share',
      analysis: 'Parental Urgency - Content travels via WhatsApp/family chats more than public feeds.',
      category: 'Campaign'
    },
    {
      id: '25',
      title: 'Influencer Fitness Challenges',
      metric: 'Algo-Native TikTok performance',
      analysis: 'Influencer Proxy - Uses creator\'s face/style, bypassing "government corporate" filter.',
      category: 'Influencer'
    },
    {
      id: '26',
      title: 'Frontline Heroes Features',
      metric: 'High Love reactions',
      analysis: 'Gratitude Economy - Humanizes healthcare system, allows public to express collective thanks.',
      category: 'Humanization'
    },
    {
      id: '27',
      title: 'Organ Donation (Hayat) Campaign',
      metric: 'Moral Imperative Sharing',
      analysis: 'Universal Humanism - Bypasses political/technical filters. Sharing seen as moral act.',
      category: 'Campaign'
    },
    {
      id: '28',
      title: 'Global Sports Collaborations',
      metric: 'Fandom Interception',
      analysis: 'Draft off Fandom - Intercepts massive hashtag volume of events to deliver health messaging.',
      category: 'Partnership'
    },
    {
      id: '29',
      title: 'Digital Transformation/Tech Awards',
      metric: 'Tech Sector Buzz',
      analysis: 'Innovation Ecosystem - Vendors/contractors engage to signal proximity to forward-thinking government.',
      category: 'Recognition'
    },
    {
      id: '30',
      title: '"Blue Zones" & Longevity Narratives',
      metric: 'Aspirational Lifestyle Engagement',
      analysis: 'Global Wellness Trend - Elevates brand from "Compliance" to "Aspiration."',
      category: 'Lifestyle'
    },
    {
      id: '31',
      title: 'Weather-Related Health Warnings',
      metric: 'Immediate Relevance',
      analysis: 'Environmental Triggering - Content relevant NOW because user experiencing weather event.',
      category: 'Urgency'
    },
    {
      id: '32',
      title: 'Ramadan Health Tips',
      metric: 'Cultural Ritual Alignment',
      analysis: 'Biological Problem Synchronicity - Solves immediate problem for fasting population.',
      category: 'Cultural'
    },
    {
      id: '33',
      title: '"Unmasking" Announcements',
      metric: 'Celebration/Relief/Mass Sharing',
      analysis: 'Relief Virality - "Good News" events marking return to normalcy, prompting collective celebration.',
      category: 'Policy'
    }
  ]

  // SECTION 2.3: THE "FLOPS" (17 ARTIFACTS - WASTED BUDGET)
  const flops = [
    {
      id: '34',
      title: '"Sehhi" Program Webinar',
      metric: '2 Views (Total)',
      analysis: 'Algorithmic Void - 21-minute webinar without SEO/thumbnails/timestamps is invisible.',
      category: 'YouTube'
    },
    {
      id: '35',
      title: 'WHO Director-General Video',
      metric: '24 Views despite celebrity',
      analysis: 'Talking Head Fatigue - Even famous figure cannot sustain retention if format is boring/unedited.',
      category: 'YouTube'
    },
    {
      id: '36',
      title: 'Cinema Ad Re-uploads',
      metric: '114 Views (3 years)',
      analysis: 'Context Mismatch - Users conditioned to skip ads. Ads for interruption, not destination viewing.',
      category: 'YouTube'
    },
    {
      id: '37',
      title: 'Global Research Forum Participation',
      metric: '45 Views',
      analysis: 'Internal Newsletter Material - Fails "What\'s In It For Me?" test.',
      category: 'YouTube'
    },
    {
      id: '38',
      title: 'Breast Cancer Awareness Webinar',
      metric: '71 Views (3 years)',
      analysis: 'Format Friction - 1-hour Zoom recording is single least engaging video format.',
      category: 'YouTube'
    },
    {
      id: '39',
      title: 'Scientific Conference Highlights',
      metric: '114 Views',
      analysis: 'Niche Irrelevance - B-roll footage of officials walking offers zero narrative value.',
      category: 'YouTube'
    },
    {
      id: '40',
      title: 'Back to School Awareness Webinar',
      metric: '48 Views',
      analysis: 'Platform-Audience Misalignment - Parents want 60-second Reels checklist, not 1-hour lecture.',
      category: 'YouTube'
    },
    {
      id: '41',
      title: 'Nutri-Mark Launch PR Video',
      metric: '35 Views',
      analysis: 'Corporate Self-Congratulation - Focuses on bureaucratic process (signature) not consumer outcome.',
      category: 'YouTube'
    },
    {
      id: '42',
      title: 'Generic "World Health Day" Tweets',
      metric: 'Low relative engagement',
      analysis: 'Hashtag Dilution - Generic creative/tags places content in competition with millions.',
      category: 'Twitter'
    },
    {
      id: '43',
      title: '"Captions" Video Upload',
      metric: '30 Views',
      analysis: 'Metadata Failure - Title describes file (has captions), not content. No one searches for "Captions."',
      category: 'YouTube'
    },
    {
      id: '44',
      title: 'Static Infographics on TikTok',
      metric: '<100 Views',
      analysis: 'Platform Violation - Non-moving images on motion-first platform leads to immediate swipe-away.',
      category: 'TikTok'
    },
    {
      id: '45',
      title: 'English Content on Arabic Channels',
      metric: 'Audience Split/Confusion',
      analysis: 'Linguistic Friction - Subscribers ignore content they can\'t understand.',
      category: 'YouTube'
    },
    {
      id: '46',
      title: 'Old Stream Archives',
      metric: '543 Views (years)',
      analysis: 'Digital Hoarding - Outdated streams dilute perceived quality of new content.',
      category: 'YouTube'
    },
    {
      id: '47',
      title: 'Generic "Healthy Eating" Stock Video',
      metric: 'Low Retention',
      analysis: 'Cultural Dissonance - Western stock footage feels inauthentic to Emirati demographic.',
      category: 'TikTok'
    },
    {
      id: '48',
      title: 'Corporate "Sizzle Reels"',
      metric: 'Internal Views Only',
      analysis: '"Who Cares?" Factor - Montages of employees in meetings only interesting to people IN video.',
      category: 'YouTube'
    },
    {
      id: '49',
      title: 'Uncaptioned Talking Heads',
      metric: 'Sound-Off Failure',
      analysis: 'Accessibility Fail - 60%+ watch without sound. Uncaptioned videos scrolled past.',
      category: 'General'
    },
    {
      id: '50',
      title: 'PDF-to-Image Posts',
      metric: 'Unreadable on Mobile',
      analysis: 'Mobile Hostility - Screenshots of A4 PDFs render text microscopic.',
      category: 'Instagram/Twitter'
    }
  ]

  // SECTION 3: PLATFORM DYNAMICS - TACTICAL OBSERVATIONS

  // LINKEDIN (12 OBSERVATIONS)
  const linkedinTactics = [
    { id: '01', title: 'The "Congrats" Multiplier', insight: 'Algorithm biased toward celebration. "Congratulations" posts generate 5x-10x more reach.' },
    { id: '02', title: 'Physical Award Flex', insight: 'Static images of officials holding trophies outperform other image types.' },
    { id: '03', title: 'MoU Partner Tagging', insight: 'Signing ceremonies perform well only if partner tagged. Triggers Employee Advocacy algorithm.' },
    { id: '04', title: 'Sustainability Boost', insight: 'Content mentioning "COP28"/"Net Zero" receives algorithmic preference.' },
    { id: '05', title: 'PDF Carousel Dominance', insight: 'Uploading guidelines as native PDF performs 3x better than link to website.' },
    { id: '06', title: 'Executive Tagging', insight: 'Not tagging leadership causes ~40% drop in reach. Engages personal networks.' },
    { id: '07', title: 'Recruitment Magnetism', insight: 'Emiratization/Internship posts generate highest CTR.' },
    { id: '08', title: 'Strategic Partnership Signals', insight: 'Only channel where partnership announcements not considered spam.' },
    { id: '09', title: 'Length Tolerance', insight: 'Users will read 200+ words. Only platform where Long Copy viable.' },
    { id: '10', title: 'Internal Echo Chamber', insight: '80% of engagement driven by employees of ADPHC/SEHA/DoH.' },
    { id: '11', title: 'Event Recap Timing', insight: 'Photo dumps perform best Monday mornings. Taps "Back to Work" nostalgia.' },
    { id: '12', title: 'Medical Jargon Authority', insight: 'Technical terms act as authority signals. On TikTok, they\'re engagement killers.' }
  ]

  // X/TWITTER (13 OBSERVATIONS)
  const twitterTactics = [
    { id: '13', title: 'Customer Service Trap', insight: '90% of mentions are complaints. Algorithm keeps account visible but sentiment negative.' },
    { id: '14', title: 'Thread Superiority', insight: 'Threads get 100+ RTs. Single tweets with links get <10.' },
    { id: '15', title: 'Visual Brevity', insight: 'Infographics must be 16:9 with <20 words. Dense flyers ignored/ratioed.' },
    { id: '16', title: 'Newsjacking Velocity', insight: 'Quoting breaking news with confirmation/addition is fastest way to gain followers.' },
    { id: '17', title: 'The "Fine" Trigger', insight: 'Specific Dirham amount generates high velocity Quote Tweets.' },
    { id: '18', title: 'Video is Dead', insight: 'Unless 15-second breaking clip, retention negligible. Text + Image dominates.' },
    { id: '19', title: 'Language Segregation', insight: 'Arabic tweets perform ~4x better than English.' },
    { id: '20', title: 'Hashtag Pollution', insight: 'Generic #Health invites bot spam. Use local #InAbuDhabi tags.' },
    { id: '21', title: '"Streisand Effect" of Replies', insight: 'Turning off replies increases Quote Tweet negativity.' },
    { id: '22', title: 'Crisis Velocity', insight: 'Misinformation travels faster than correction. Real-Time adjudication required.' },
    { id: '23', title: 'Official vs Personal', insight: 'Spokesperson posts often perform better than faceless entity account.' },
    { id: '24', title: 'Link Penalties', insight: 'Algorithm deprioritizes external links. Info in Image -> Link in reply.' },
    { id: '25', title: 'Visual Verification', insight: 'Screenshots of working app trusted more than text promises.' }
  ]

  // TIKTOK/INSTAGRAM (13 OBSERVATIONS)
  const tiktokInstaTactics = [
    { id: '26', title: 'The "Face" Requirement', insight: 'Videos without human face in 2 seconds have 90% drop-off.' },
    { id: '27', title: 'Subtitle Necessity', insight: '~60% watch without sound. Subtitles are retention feature, not accessibility.' },
    { id: '28', title: '0.5 Second Hook', insight: 'Hook must happen in 0.5 seconds. Institutional intros kill retention.' },
    { id: '29', title: 'Influencer Arbitrage', insight: 'Influencer post gets 50x views of same content reposted by ADPHC.' },
    { id: '30', title: 'Challenge Culture', insight: 'Must create Challenge to get UGC. Algorithm rewards participation, not consumption.' },
    { id: '31', title: 'Aesthetic Purity', insight: 'Instagram needs polished. TikTok needs raw/authentic. Mixing fails.' },
    { id: '32', title: 'Loopability', insight: 'Seamless loops trick algorithm into 200% retention, forcing onto FYP.' },
    { id: '33', title: 'Music Trends', insight: 'Trending audio boosts discoverability. Institutional royalty-free music suppresses.' },
    { id: '34', title: 'Location Tags', insight: 'Tagging locations connects to Places algorithm, vital for events.' },
    { id: '35', title: 'Interactive Stickers', insight: 'Stories with Polls retrain algorithm to show future stories.' },
    { id: '36', title: 'The "Save" Metric', insight: 'Saves are highest value metric. Content must be "Reference Material".' },
    { id: '37', title: 'Negative Space', insight: 'Text must not cover interface zones. Safe Zone compliance mandatory.' },
    { id: '38', title: 'UGC Reposting', insight: 'Reposting resident\'s meal higher validation than stock photo.' }
  ]

  // YOUTUBE (12 OBSERVATIONS)
  const youtubeTactics = [
    { id: '39', title: 'Title Fallacy', insight: '"How to Reverse Diabetes" wins. "Webinar 3" fails. Answer user query, don\'t label file.' },
    { id: '40', title: 'Thumbnail Forensics', insight: 'Face with emotion + high contrast text gets clicks. PowerPoint slides get zero.' },
    { id: '41', title: 'First Minute Cliff', insight: '5 minutes of "Can you hear me?" destroys retention. Cut immediately.' },
    { id: '42', title: 'Search vs Browse', insight: 'SEO more important than production value. YouTube is 2nd largest search engine.' },
    { id: '43', title: 'Shorts Dominance', insight: 'Shorts only way to grow subscribers in 2026. Cut every webinar into 10 Shorts.' },
    { id: '44', title: 'Chapter Markers', insight: 'Timestamps allow Google Search to index specific parts for results.' },
    { id: '45', title: 'The "Kids" Trap', insight: 'Mark "Not for Kids" (for Parents) or comments/notifications disabled.' },
    { id: '46', title: 'Playlist Curation', insight: 'Grouping by topic increases Session Time, key ranking factor.' },
    { id: '47', title: 'Community Tab', insight: 'Use polls/text updates to signal algorithm channel is active.' },
    { id: '48', title: 'Evergreen Value', insight: 'Prioritize "How to use Al Hosn" over "Updates for Oct 2023" (dead in 30 days).' },
    { id: '49', title: 'Audio Quality', insight: 'Bad audio causes faster drop-off than bad video. Voice is the value.' },
    { id: '50', title: 'Comment Moderation', insight: 'Moderating signals "Community." Disabling signals "Propaganda." Unmoderated invites spam.' }
  ]

  // SECTION 4: CAMPAIGN AUTOPSIES
  const campaignAutopsies = [
    {
      name: 'Al Hosn App',
      status: 'High Engagement / Low Sentiment',
      analysis: 'Digital passport, not media channel. Failed to account for technical anxiety. Users want troubleshooting, not branding.',
      findings: 'Comment sections acted as unauthorized focus group. Revealed UID bug and vaccination lag weeks before official acknowledgment.',
      lesson: 'For utility apps, social channel IS help desk. Marketing irrelevant if utility broken.'
    },
    {
      name: '"Sehhi" Program',
      status: 'Moderate Engagement / High Institutional Success',
      analysis: 'Works exceptionally well on LinkedIn as B2B success. Struggles against global fitness influencers on consumer channels.',
      findings: 'Logos are B2B tools. Consumers follow food, not logos. Lacks "Face" - local chef/nutritionist.',
      lesson: 'Regulatory success does not equal social media success. Require different content engines.'
    },
    {
      name: 'Safety in Heat',
      status: 'Reliable Performance',
      analysis: '11-year legacy campaign. Relies on fixed calendar event and legal mandates.',
      findings: 'Become "Ritualistic Content." Primary audience is companies (avoid fines), not just workers.',
      lesson: 'Consistency builds authority. Predictability is strength.'
    }
  ]

  // SECTION 5: STRATEGIC RECOMMENDATIONS
  const strategicRecommendations = [
    {
      protocol: 'Establish "Digital Triage" Unit for X/Twitter',
      action: 'Stop posting press releases. Convert to visual FAQ engine. Every tweet answers question from previous day comments.'
    },
    {
      protocol: 'The "Webinar Chop-Shop"',
      action: 'Cease uploading raw webinars. Cut every webinar into ten 60-second vertical Shorts.'
    },
    {
      protocol: 'Humanize "Sehhi" Brand',
      action: 'Recruit 5 "Sehhi Ambassadors" (local nutritionists/moms). Faces > Logos.'
    },
    {
      protocol: 'Leverage LinkedIn for what it is',
      action: 'Use exclusively for Awards, MoUs, Recruitment. Optimize for "Congratulations" algorithm.'
    },
    {
      protocol: 'Fix the Metadata',
      action: 'Rename YouTube assets to "Searchable Question" titles. Ensure thumbnails have faces and text.'
    },
    {
      protocol: 'The "Green Pass" approach to Content',
      action: 'Make value mandatory. Don\'t post "Eat Healthy"; post "5 Cheapest Healthy Meals at Lulu." Utility drives virality.'
    },
    {
      protocol: 'Embrace "Dark Social" (WhatsApp)',
      action: 'Create PDF one-pagers for WhatsApp family groups. Bypass public feed, enter trusted private network.'
    }
  ]

  // Chart data for visualizations
  const shadowTrafficTrendData = [
    { month: 'Jan', darkSocial: 28.5, direct: 32.1, private: 18.7, offline: 12.3 },
    { month: 'Feb', darkSocial: 30.2, direct: 31.8, private: 19.5, offline: 11.9 },
    { month: 'Mar', darkSocial: 31.8, direct: 30.9, private: 20.3, offline: 12.1 },
    { month: 'Apr', darkSocial: 32.5, direct: 30.2, private: 21.1, offline: 11.8 },
    { month: 'May', darkSocial: 33.4, direct: 29.8, private: 21.8, offline: 12.5 },
    { month: 'Jun', darkSocial: 34.2, direct: 28.7, private: 22.1, offline: 15.0 }
  ]

  const searchIntentDistribution = [
    { intent: 'Informational', volume: 45.2, match: 92, opportunity: 1 },
    { intent: 'Navigational', volume: 23.1, match: 87, opportunity: 0.5 },
    { intent: 'Commercial', volume: 12.8, match: 78, opportunity: 1 },
    { intent: 'Transactional', volume: 8.4, match: 94, opportunity: 0.5 },
    { intent: 'Local Search', volume: 15.6, match: 89, opportunity: 1 }
  ]

  const platformAlgorithmData = [
    { platform: 'LinkedIn', velocity: 3, reach: 4, engagement: 3, contentType: 1, score: 8.2 },
    { platform: 'X/Twitter', velocity: 4, reach: 3, engagement: 4, contentType: 2, score: 7.8 },
    { platform: 'Instagram', velocity: 3, reach: 4, engagement: 4, contentType: 3, score: 8.7 },
    { platform: 'TikTok', velocity: 5, reach: 5, engagement: 5, contentType: 4, score: 9.1 },
    { platform: 'Facebook', velocity: 2, reach: 3, engagement: 3, contentType: 5, score: 6.9 },
    { platform: 'YouTube', velocity: 2, reach: 5, engagement: 3, contentType: 6, score: 8.4 }
  ]

  const attributionPathData = [
    { path: 'Social to Direct', conversions: 1234, value: 234, percentage: 34 },
    { path: 'Search to Social', conversions: 892, value: 156, percentage: 24 },
    { path: 'Direct Only', conversions: 678, value: 89, percentage: 19 },
    { path: 'Social to Social', conversions: 567, value: 78, percentage: 16 },
    { path: 'Referral to Social', conversions: 234, value: 45, percentage: 7 }
  ]

  const crossPlatformCorrelationData = [
    { platforms: 'LinkedIn to Twitter', correlation: 78, patternType: 1 },
    { platforms: 'Instagram to TikTok', correlation: 84, patternType: 2 },
    { platforms: 'Facebook to Instagram', correlation: 67, patternType: 3 },
    { platforms: 'YouTube to LinkedIn', correlation: 45, patternType: 4 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">X-Factor Forensics</h1>
          <p className="text-muted-foreground">
            Cross-platform attribution and invisible traffic analysis
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {forensicsMetrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      <Tabs defaultValue="shadow-traffic" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-6 w-full">
          <TabsTrigger value="shadow-traffic">Shadow Traffic</TabsTrigger>
          <TabsTrigger value="search-intent">Search Intent</TabsTrigger>
          <TabsTrigger value="platform-physics">Platform Physics</TabsTrigger>
          <TabsTrigger value="attribution">Attribution</TabsTrigger>
          <TabsTrigger value="content-protocol">Content Protocol</TabsTrigger>
          <TabsTrigger value="performance-audit">Performance Audit</TabsTrigger>
        </TabsList>

        <TabsContent value="shadow-traffic" className="space-y-6">
          <Alert className="border-purple-500 bg-purple-50 dark:bg-purple-950">
            <Radio className="h-4 w-4" />
            <AlertTitle>Invisible Traffic Detected</AlertTitle>
            <AlertDescription>
              45.2% of traffic comes from untrackable sources. Dark Social (WhatsApp, Telegram) is the largest contributor.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Shadow Traffic Angiography</h3>
              <Eye className="h-5 w-5 text-purple-500" />
            </div>
            <div className="space-y-4">
              {shadowTrafficSources.map((source, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{source.source}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{source.value}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">{source.traffic}</Badge>
                      <Badge variant="outline" className="text-emerald-600">{source.growth}</Badge>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Traffic Share</span>
                      <span className="font-semibold">{source.traffic}</span>
                    </div>
                    <Progress value={parseFloat(source.traffic)} className="h-2" />
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={
                      source.difficulty === 'high' ? 'destructive' :
                      source.difficulty === 'medium' ? 'default' : 'secondary'
                    }>
                      {source.difficulty} to track
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {source.tactics.map((tactic, j) => (
                      <Badge key={j} variant="outline" className="text-xs">
                        {tactic}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Shadow Traffic</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">3.2M</div>
                <p className="text-sm text-muted-foreground mt-1">Monthly visits</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Dark Social</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">34.2%</div>
                <p className="text-sm text-muted-foreground mt-1">Of all traffic</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Est. Conversion Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">AED 890K</div>
                <p className="text-sm text-muted-foreground mt-1">From shadow sources</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Tracking Gap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-rose-600">-45%</div>
                <p className="text-sm text-muted-foreground mt-1">Unattributed revenue</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Shadow Traffic Trend Analysis</h3>
              <LucideBarChart className="h-5 w-5 text-purple-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AreaChart
                data={shadowTrafficTrendData}
                xAxisKey="month"
                areas={[
                  { dataKey: 'darkSocial', name: 'Dark Social', color: CHART_COLORS.purple },
                  { dataKey: 'direct', name: 'Direct', color: CHART_COLORS.info },
                  { dataKey: 'private', name: 'Private Messaging', color: CHART_COLORS.indigo },
                  { dataKey: 'offline', name: 'Offline', color: CHART_COLORS.emerald }
                ]}
                height={300}
                showGrid={true}
              />
              <PieChart
                data={shadowTrafficSources.map(s => ({ name: s.source, value: parseFloat(s.traffic) }))}
                donut={false}
                height={300}
                showLegend={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="search-intent" className="space-y-6">
          <Alert className="border-cyan-500 bg-cyan-50 dark:bg-cyan-950">
            <Search className="h-4 w-4" />
            <AlertTitle>Search Intent Capture</AlertTitle>
            <AlertDescription>
              87.3% intent match rate. Informational queries dominate with 45.2K monthly searches.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Search Intent Categories</h3>
              <Target className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="space-y-4">
              {searchIntents.map((intent, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{intent.intent}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{intent.volume} monthly searches</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={
                        intent.opportunity === 'high' ? 'default' : 'secondary'
                      }>
                        {intent.opportunity} opportunity
                      </Badge>
                      {intent.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <Activity className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Intent Match Rate</span>
                      <span className="font-semibold text-emerald-600">{intent.match}%</span>
                    </div>
                    <Progress value={intent.match} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">105.1K</div>
                <p className="text-sm text-muted-foreground mt-1">Monthly volume</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Match Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">87.3%</div>
                <p className="text-sm text-muted-foreground mt-1">Content alignment</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">High Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">3</div>
                <p className="text-sm text-muted-foreground mt-1">Categories untapped</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Content Gaps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600">23</div>
                <p className="text-sm text-muted-foreground mt-1">Keywords to target</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Search Intent Analytics</h3>
              <Target className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart
                data={searchIntentDistribution}
                xAxisKey="intent"
                bars={[
                  { dataKey: 'volume', name: 'Volume (K)', color: CHART_COLORS.info },
                  { dataKey: 'match', name: 'Match %', color: CHART_COLORS.emerald }
                ]}
                height={300}
                showGrid={true}
              />
              <PieChart
                data={searchIntentDistribution.map(i => ({ name: i.intent, value: i.volume }))}
                donut={false}
                height={300}
                showLegend={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="platform-physics" className="space-y-6">
          <Alert className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950">
            <Activity className="h-4 w-4" />
            <AlertTitle>Platform Physics Monitor</AlertTitle>
            <AlertDescription>
              Each platform has unique algorithmic behavior. TikTok shows highest velocity (9.1/10).
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Platform Algorithm Analysis</h3>
              <Globe className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="space-y-4">
              {platformPhysicsData.map((platform, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{platform.platform}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{platform.algorithm}</p>
                    </div>
                    <Badge variant="default">Score: {platform.score}/10</Badge>
                  </div>

                  <div className="grid grid-cols-4 gap-3 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Velocity</p>
                      <p className="font-semibold">{platform.velocity}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Reach</p>
                      <p className="font-semibold">{platform.reach}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Engagement</p>
                      <p className="font-semibold">{platform.engagement}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Best Time</p>
                      <p className="font-semibold">{platform.bestTime}</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Algorithm Score</span>
                      <span className="font-medium">{platform.score}/10</span>
                    </div>
                    <Progress value={platform.score * 10} className="h-2" />
                  </div>

                  <div className="mt-3 pt-3 border-t">
                    <p className="text-xs text-muted-foreground">Recommended Content</p>
                    <p className="text-sm font-medium">{platform.contentStyle}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Best Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">TikTok</div>
                <p className="text-sm text-muted-foreground mt-1">9.1/10 score</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">8.2/10</div>
                <p className="text-sm text-muted-foreground mt-1">All platforms</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Highest Velocity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">TikTok</div>
                <p className="text-sm text-muted-foreground mt-1">Very High speed</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Widest Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600">YouTube</div>
                <p className="text-sm text-muted-foreground mt-1">Very High reach</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Platform Algorithm Analysis</h3>
              <Globe className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RadarChart
                data={platformAlgorithmData}
                metrics={[
                  { dataKey: 'velocity', name: 'Velocity', color: CHART_COLORS.rose },
                  { dataKey: 'reach', name: 'Reach', color: CHART_COLORS.info },
                  { dataKey: 'engagement', name: 'Engagement', color: CHART_COLORS.emerald }
                ]}
                height={300}
                showGrid={true}
              />
              <BarChart
                data={platformAlgorithmData}
                xAxisKey="platform"
                bars={[{ dataKey: 'score', name: 'Score', color: CHART_COLORS.purple }]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="attribution" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Cross-Platform Attribution Paths</h3>
              <LucideBarChart className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="space-y-4">
              {attributionPaths.map((path, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{path.path}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{path.touchpoints} touchpoints</p>
                    </div>
                    <Badge variant="default">{path.percentage}% of total</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Conversions</p>
                      <p className="font-semibold">{path.conversions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Value</p>
                      <p className="font-semibold text-emerald-600">{path.value}</p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Path Contribution</span>
                        <span className="font-medium">{path.percentage}%</span>
                      </div>
                      <Progress value={path.percentage} className="h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel>
              <h3 className="text-lg font-semibold mb-4">Cross-Platform Correlations</h3>
              <div className="space-y-4">
                {crossPlatformCorrelations.map((corr, i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      {corr.platforms.map((platform, j) => (
                        <React.Fragment key={j}>
                          <Badge variant="outline">{platform}</Badge>
                          {j < corr.platforms.length - 1 && (
                            <ArrowRight className="h-3 w-3 text-muted-foreground" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Correlation</span>
                        <span className="font-semibold text-emerald-600">{(corr.correlation * 100).toFixed(0)}%</span>
                      </div>
                      <Progress value={corr.correlation * 100} className="h-2" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{corr.pattern}</p>
                    <Badge variant="outline" className="text-xs">{corr.action}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Total Conversions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3,605</div>
                  <p className="text-sm text-muted-foreground mt-1">This month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Attributed Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald-600">AED 602K</div>
                  <p className="text-sm text-muted-foreground mt-1">Total value</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Avg Touchpoints</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-cyan-600">2.8</div>
                  <p className="text-sm text-muted-foreground mt-1">Before conversion</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Top Path</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold">Social → Direct</div>
                  <p className="text-sm text-muted-foreground mt-1">34% of conversions</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Attribution Path Analytics</h3>
              <LucideBarChart className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart
                data={attributionPathData}
                xAxisKey="path"
                bars={[
                  { dataKey: 'conversions', name: 'Conversions', color: CHART_COLORS.emerald },
                  { dataKey: 'value', name: 'Value (K)', color: CHART_COLORS.info }
                ]}
                height={300}
                showGrid={true}
              />
              <PieChart
                data={attributionPathData.map(item => ({ name: item.path, value: item.percentage }))}
                donut={false}
                height={300}
                showLegend={true}
              />
            </div>
          </GlassPanel>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Cross-Platform Correlation Matrix</h3>
            <BarChart
              data={crossPlatformCorrelationData}
              xAxisKey="platforms"
              bars={[{ dataKey: 'correlation', name: 'Correlation %', color: CHART_COLORS.indigo }]}
              height={300}
              showGrid={true}
            />
          </GlassPanel>
        </TabsContent>

        {/* RICOCHET PROTOCOL - CONTENT FORENSICS TAB */}
        <TabsContent value="content-protocol" className="space-y-6">
          <Alert className="border-rose-500 bg-rose-50 dark:bg-rose-950">
            <Shield className="h-4 w-4" />
            <AlertTitle>Operation Kinetic Force</AlertTitle>
            <AlertDescription>
              Comprehensive forensic audit of content supply chain. Analyzing "The Ratio" (negative performance), "Zero-Engagement Zone" (dead content), and "The Rockets" (viral successes) for algorithmic optimization.
            </AlertDescription>
          </Alert>

          {/* EXECUTIVE SUMMARY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-l-4 border-l-rose-500 bg-rose-50/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">"Ratio" Archetypes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-rose-600">3</div>
                <p className="text-sm text-muted-foreground mt-1">Negative performance patterns</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-slate-400 bg-slate-50/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">"Zero-Engagement"</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-600">5</div>
                <p className="text-sm text-muted-foreground mt-1">Dead content archetypes</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-emerald-500 bg-emerald-50/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">"Rockets"</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">3</div>
                <p className="text-sm text-muted-foreground mt-1">Viral success patterns</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-indigo-500 bg-indigo-50/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Catalyst Directives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600">4</div>
                <p className="text-sm text-muted-foreground mt-1">Strategic optimization rules</p>
              </CardContent>
            </Card>
          </div>

          {/* SECTION 2.1: THE "RATIO" DETECTOR */}
          <GlassPanel title='The "Ratio" Detector: Anatomy of Negative Performance' description='3 archetypes where negative engagement (comments) supersedes positive validation (likes)' badge='Forensic Analysis'>
            <div className="space-y-6">
              {ratioArchetypes.map((archetype) => (
                <Card key={archetype.id} className="border-2 border-rose-200 bg-rose-50/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="destructive" className="text-xs">Archetype {archetype.id}</Badge>
                          <h4 className="text-xl font-bold text-slate-900">{archetype.name}</h4>
                        </div>
                        <Badge variant="outline" className="text-xs">{archetype.topic}</Badge>
                      </div>
                      <XCircle className="h-6 w-6 text-rose-500" />
                    </div>
                    <p className="text-sm text-slate-600 mt-3"><strong>Trigger:</strong> {archetype.trigger}</p>
                    <p className="text-sm text-slate-600 mt-1"><strong>Diagnosis:</strong> {archetype.diagnosis}</p>
                    <p className="text-sm text-rose-700 mt-1"><strong>Sentiment:</strong> {archetype.sentiment}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-rose-500" />
                        Top 3 Negative Replies
                      </h5>
                      <div className="space-y-3">
                        {archetype.negativeReplies.map((reply, idx) => (
                          <Card key={idx} className="bg-white/50 border border-rose-200">
                            <CardContent className="p-3">
                              <h6 className="font-semibold text-sm text-slate-900 mb-2">{reply.name}</h6>
                              <p className="text-xs text-slate-600 italic mb-2">"{reply.sentiment}"</p>
                              <p className="text-xs text-rose-700"><strong>Diagnosis:</strong> {reply.diagnosis}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <Alert className="bg-indigo-50 border-indigo-200">
                      <Zap className="h-4 w-4 text-indigo-500" />
                      <AlertDescription className="text-sm text-indigo-900">
                        <strong>Ricochet Insight:</strong> {archetype.insight}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* SECTION 2.2: THE "ZERO-ENGAGEMENT" ZONE */}
          <GlassPanel title='The "Zero-Engagement" Zone: Diagnosing the Void' description='5 archetypes where content dies without ripple (<10 likes, 0 shares)' badge='Algorithmic Forensics'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {zeroEngagementArchetypes.map((archetype) => (
                <Card key={archetype.id} className="border-2 border-slate-300 bg-slate-50/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">#{archetype.id}</Badge>
                      <Ghost className="h-5 w-5 text-slate-400" />
                    </div>
                    <h4 className="font-bold text-slate-900">{archetype.name}</h4>
                    <p className="text-xs text-slate-600 mt-1">{archetype.topic}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      {archetype.diagnosis.map((diag, idx) => (
                        <div key={idx} className="text-xs text-slate-700 bg-white/50 p-2 rounded">
                          {diag}
                        </div>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-slate-300">
                      <p className="text-xs font-semibold text-slate-500">Performance: {archetype.performance}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* SECTION 3.0: VIRAL REVERSE-ENGINEERING - THE "ROCKETS" */}
          <GlassPanel title='Viral Reverse-Engineering: The "Rockets"' description='3 viral success patterns that defied baseline performance' badge='Success Patterns'>
            <div className="space-y-6">
              {viralRockets.map((rocket) => (
                <Card key={rocket.id} className="border-2 border-emerald-300 bg-emerald-50/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="default" className="bg-emerald-600 text-xs">Rocket {rocket.id}</Badge>
                          <h4 className="text-xl font-bold text-slate-900">{rocket.name}</h4>
                        </div>
                        <Badge variant="outline" className="text-xs">{rocket.topic}</Badge>
                      </div>
                      <Rocket className="h-6 w-6 text-emerald-500" />
                    </div>
                    <p className="text-sm text-slate-600 mt-3"><strong>Trigger:</strong> {rocket.trigger}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                        <Flame className="h-4 w-4 text-orange-500" />
                        Virality Forensics
                      </h5>
                      <div className="space-y-3">
                        {rocket.forensics.map((item, idx) => (
                          <Card key={idx} className="bg-white/50 border border-emerald-200">
                            <CardContent className="p-3">
                              <h6 className="font-semibold text-sm text-slate-900 mb-1">
                                {'factor' in item ? item.factor : item.category}
                              </h6>
                              <p className="text-xs text-slate-700">{item.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <Alert className="bg-cyan-50 border-cyan-200">
                      <Sparkles className="h-4 w-4 text-cyan-500" />
                      <AlertDescription className="text-sm text-cyan-900">
                        <strong>Ricochet Insight:</strong> {rocket.insight}
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* SECTION 4.3: COMPARATIVE ANALYSIS TABLE */}
          <GlassPanel title='Comparative Analysis: The Good, The Bad, and The Ratioed' description='Table comparing failure patterns, dead zones, and viral successes' badge='Framework'>
            <Card className="overflow-x-auto">
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="p-3 text-left font-semibold">Metric</th>
                      <th className="p-3 text-left font-semibold text-rose-700">The "Ratioed" (Failure)</th>
                      <th className="p-3 text-left font-semibold text-slate-700">The "Zero-Engagement" (Dead)</th>
                      <th className="p-3 text-left font-semibold text-emerald-700">The "Rocket" (Viral Hit)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparativeAnalysis.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-3 font-medium border-r">{row.metric}</td>
                        <td className="p-3 text-rose-700 border-r">{row.ratioed}</td>
                        <td className="p-3 text-slate-600 border-r">{row.zeroEngagement}</td>
                        <td className="p-3 text-emerald-700">{row.rocket}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </GlassPanel>

          {/* SECTION 5.0: STRATEGIC RECOMMENDATIONS */}
          <GlassPanel title='Strategic Recommendations: The "Catalyst Engine"' description='4 directives for immediate implementation under Ricochet protocol' badge='Actionable Intelligence'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {catalystDirectives.map((directive) => (
                <Card key={directive.id} className="border-2 border-indigo-300 bg-indigo-50/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default" className="bg-indigo-600 text-xs">Directive {directive.id}</Badge>
                      <Settings className="h-5 w-5 text-indigo-500" />
                    </div>
                    <h4 className="font-bold text-slate-900">{directive.name}</h4>
                    <p className="text-xs text-slate-600 mt-2"><strong>Objective:</strong> {directive.objective}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {directive.actions.map((action, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* SECTION 6.0: DEAD ZONES & FRICTION POINTS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title='Algorithmic Friction Points' description='Where the algorithm actively suppresses DoH content' badge='Technical Barriers'>
              <div className="space-y-4">
                {frictionPoints.map((point, idx) => (
                  <Card key={idx} className="bg-amber-50/20 border border-amber-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Wrench className="h-5 w-5 text-amber-500" />
                        <h4 className="font-bold text-slate-900">{point.name}</h4>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-rose-700 mb-1">Issue:</p>
                        <p className="text-xs text-slate-700">{point.issue}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-emerald-700 mb-1">Fix:</p>
                        <p className="text-xs text-slate-700">{point.fix}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title='Dead Zones (Geographic & Demographic)' description='Audience segments not being reached effectively' badge='Audience Gaps'>
              <div className="space-y-4">
                {deadZones.map((zone, idx) => (
                  <Card key={idx} className="bg-purple-50/20 border border-purple-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Ban className="h-5 w-5 text-purple-500" />
                        <h4 className="font-bold text-slate-900">{zone.name}</h4>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-rose-700 mb-1">Issue:</p>
                        <p className="text-xs text-slate-700">{zone.issue}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-600 mb-1">Impact:</p>
                        <p className="text-xs text-slate-700">{zone.impact}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* OPERATIONAL DATA HARVEST */}
          <GlassPanel title='The Operational Data Harvest' description='Final reconnaissance: Merging content with customer service' badge='Strategic Mandate'>
            {operationalHarvest.map((item, idx) => (
              <Alert key={idx} className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-300">
                <Target className="h-4 w-4 text-indigo-500" />
                <AlertTitle className="text-indigo-900 font-bold">{item.principle}</AlertTitle>
                <AlertDescription className="text-sm text-slate-700 mt-2">
                  {item.description}
                </AlertDescription>
                <div className="mt-3 pt-3 border-t border-indigo-200">
                  <p className="text-xs font-semibold text-indigo-900">{item.implication}</p>
                </div>
              </Alert>
            ))}
            <div className="text-center mt-4 pt-4 border-t">
              <Badge variant="default" className="bg-rose-600 px-4 py-2">
                Operation Kinetic Force is now live. Proceed to execution.
              </Badge>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* PERFORMANCE AUDIT TAB - FILE 06: ADPHC FORENSIC AUDIT */}
        <TabsContent value="performance-audit" className="space-y-6">
          <Alert className="border-rose-500 bg-rose-50 dark:bg-rose-950">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Forensic Audit: ADPHC Digital Performance</AlertTitle>
            <AlertDescription>
              671-line comprehensive investigation into 50 performance artifacts (ratioed posts, viral hits, flops) and 50 tactical observations across LinkedIn, X, TikTok/Instagram, and YouTube.
            </AlertDescription>
          </Alert>

          {/* EXECUTIVE SUMMARY */}
          <GlassPanel title="The Bureaucratic Utility Paradox" description="Massive scale through digitization of biological mandates, not organic content virality" badge="Strategic Intelligence">
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
              <Card className="border-l-4 border-l-emerald-500 bg-emerald-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Conclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{executiveSummary.conclusion}</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* THE "RATIOED" POSTS (16 ARTIFACTS - FAILURES) */}
          <GlassPanel title="The 'Ratioed' Posts: Anatomy of Digital Backlash" description="16 forensic examples of functional friction manifesting as negative engagement" badge="Failure Analysis">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ratioedPosts.map((post, idx) => (
                <Card key={idx} className="bg-gradient-to-r from-rose-50/50 to-red-50/50 border-rose-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="destructive" className="text-xs">{post.id}</Badge>
                          <Badge variant="outline" className="text-xs border-rose-500 text-rose-700">{post.category}</Badge>
                        </div>
                        <CardTitle className="text-base">{post.title}</CardTitle>
                      </div>
                      <Frown className="h-5 w-5 text-rose-500" />
                    </div>
                    <CardDescription className="text-xs font-medium text-rose-700">{post.metric}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-700">{post.analysis}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* THE "VIRAL HITS" (17 ARTIFACTS - SUCCESSES) */}
          <GlassPanel title="The 'Viral Hits': Forensics of Scale" description="17 forensic examples of extreme reach and engagement through institutional prestige and vital utility" badge="Success Analysis">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {viralHits.map((post, idx) => (
                <Card key={idx} className="bg-gradient-to-r from-emerald-50/50 to-cyan-50/50 border-emerald-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-emerald-600 text-xs">{post.id}</Badge>
                          <Badge variant="outline" className="text-xs border-emerald-500 text-emerald-700">{post.category}</Badge>
                        </div>
                        <CardTitle className="text-base">{post.title}</CardTitle>
                      </div>
                      <Smile className="h-5 w-5 text-emerald-500" />
                    </div>
                    <CardDescription className="text-xs font-medium text-emerald-700">{post.metric}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-700">{post.analysis}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* THE "FLOPS" (17 ARTIFACTS - WASTED BUDGET) */}
          <GlassPanel title="The 'Flops': Forensics of Wasted Budget" description="17 forensic examples of high-production content suffering from 'Broadcast Syndrome'" badge="Waste Analysis">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {flops.map((post, idx) => (
                <Card key={idx} className="bg-gradient-to-r from-slate-50/50 to-gray-50/50 border-slate-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">{post.id}</Badge>
                          <Badge variant="outline" className="text-xs border-slate-500 text-slate-700">{post.category}</Badge>
                        </div>
                        <CardTitle className="text-base">{post.title}</CardTitle>
                      </div>
                      <Ghost className="h-5 w-5 text-slate-500" />
                    </div>
                    <CardDescription className="text-xs font-medium text-slate-700">{post.metric}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-700">{post.analysis}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* PLATFORM DYNAMICS - TACTICAL OBSERVATIONS */}
          <GlassPanel title="Platform Dynamics: The Ricochet Distribution Engine" description="50 tactical observations derived from cross-platform performance data" badge="Algorithmic Rules">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* LINKEDIN */}
              <Card className="border-2 border-blue-300 bg-blue-50/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <h5 className="font-semibold text-sm">LinkedIn: The Reputation Engine</h5>
                  </div>
                  <CardDescription className="text-xs">12 Tactical Observations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 max-h-96 overflow-y-auto">
                  {linkedinTactics.map((tactic, idx) => (
                    <div key={idx} className="bg-white/70 p-2 rounded border border-blue-200">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="text-xs">{tactic.id}</Badge>
                        <Badge variant="secondary" className="text-xs">{tactic.title}</Badge>
                      </div>
                      <p className="text-xs text-slate-700">{tactic.insight}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* X/TWITTER */}
              <Card className="border-2 border-slate-300 bg-slate-50/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-slate-600" />
                    <h5 className="font-semibold text-sm">X (Twitter): The Crisis Front</h5>
                  </div>
                  <CardDescription className="text-xs">13 Tactical Observations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 max-h-96 overflow-y-auto">
                  {twitterTactics.map((tactic, idx) => (
                    <div key={idx} className="bg-white/70 p-2 rounded border border-slate-200">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="text-xs">{tactic.id}</Badge>
                        <Badge variant="secondary" className="text-xs">{tactic.title}</Badge>
                      </div>
                      <p className="text-xs text-slate-700">{tactic.insight}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* TIKTOK/INSTAGRAM */}
              <Card className="border-2 border-pink-300 bg-pink-50/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <h5 className="font-semibold text-sm">TikTok/Instagram: Behavior Layer</h5>
                  </div>
                  <CardDescription className="text-xs">13 Tactical Observations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 max-h-96 overflow-y-auto">
                  {tiktokInstaTactics.map((tactic, idx) => (
                    <div key={idx} className="bg-white/70 p-2 rounded border border-pink-200">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="text-xs">{tactic.id}</Badge>
                        <Badge variant="secondary" className="text-xs">{tactic.title}</Badge>
                      </div>
                      <p className="text-xs text-slate-700">{tactic.insight}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* YOUTUBE */}
              <Card className="border-2 border-red-300 bg-red-50/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Youtube className="h-5 w-5 text-red-600" />
                    <h5 className="font-semibold text-sm">YouTube: The Archive</h5>
                  </div>
                  <CardDescription className="text-xs">12 Tactical Observations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 max-h-96 overflow-y-auto">
                  {youtubeTactics.map((tactic, idx) => (
                    <div key={idx} className="bg-white/70 p-2 rounded border border-red-200">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="text-xs">{tactic.id}</Badge>
                        <Badge variant="secondary" className="text-xs">{tactic.title}</Badge>
                      </div>
                      <p className="text-xs text-slate-700">{tactic.insight}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* CAMPAIGN AUTOPSIES */}
          <GlassPanel title="Campaign Autopsies" description="Deep dive into 3 distinct ADPHC campaigns through forensic lens" badge="Case Studies">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {campaignAutopsies.map((campaign, idx) => (
                <Card key={idx} className={`border-2 ${
                  campaign.status.includes('High') && campaign.status.includes('Low') ? 'border-purple-300 bg-purple-50/20' :
                  campaign.status.includes('Moderate') ? 'border-blue-300 bg-blue-50/20' :
                  'border-emerald-300 bg-emerald-50/20'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <ActivityIcon className="h-5 w-5 text-slate-500" />
                      <CardTitle className="text-base">{campaign.name}</CardTitle>
                    </div>
                    <CardDescription className="text-xs font-medium">{campaign.status}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-white/70 p-2 rounded">
                      <p className="text-xs font-semibold mb-1">Analysis</p>
                      <p className="text-xs text-slate-700">{campaign.analysis}</p>
                    </div>
                    <div className="bg-amber-50/50 p-2 rounded border border-amber-300">
                      <p className="text-xs font-semibold mb-1 text-amber-900">Key Findings</p>
                      <p className="text-xs text-slate-700">{campaign.findings}</p>
                    </div>
                    <div className="bg-emerald-50/50 p-2 rounded border border-emerald-300">
                      <p className="text-xs font-semibold mb-1 text-emerald-900">Lesson</p>
                      <p className="text-xs text-slate-700">{campaign.lesson}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* STRATEGIC RECOMMENDATIONS */}
          <GlassPanel title="Strategic Recommendations: The Optimization Protocol" description="7 protocols to close Engagement Gap and populate Ricochet Distribution Engine" badge="Actionable">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {strategicRecommendations.map((rec, idx) => (
                <Card key={idx} className="bg-gradient-to-r from-cyan-50/50 to-blue-50/50 border-cyan-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-cyan-600" />
                      <CardTitle className="text-sm">{rec.protocol}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-700">{rec.action}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* FINAL CONCLUSION */}
          <Alert className="bg-gradient-to-r from-emerald-100 to-cyan-100 border-emerald-400">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <AlertTitle className="font-bold text-emerald-900">From Broadcast to Utility</AlertTitle>
            <AlertDescription className="text-sm text-slate-700 mt-2">
              ADPHC possesses the authority and data to dominate the digital health narrative. However, its current content strategy is "Platform Agnostic" in a world that demands "Platform Specificity."
              By shifting from a Broadcast mindset (TV on the internet) to a Utility mindset (Answers on the internet), and by respecting the forensic rules of each channel,
              the Centre can convert passive "views" into active "public health outcomes." The data shows the audience is desperate for connection and information;
              the distribution engine simply needs to be tuned to deliver it.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  )
}
