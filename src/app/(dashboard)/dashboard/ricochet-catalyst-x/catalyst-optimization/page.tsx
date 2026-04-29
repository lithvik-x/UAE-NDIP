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
  Beaker,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  MessageSquare,
  BarChart3,
  RefreshCw,
  Download,
  Sliders,
  Gauge,
  Sparkles,
  Target,
  ArrowUp,
  ArrowDown,
  Minus,
  Languages,
  Lightbulb,
  Eye,
  Heart,
  Share2,
  MousePointer,
  Filter,
  Ghost,
  Users,
  TrendingDown,
  Activity,
  Shield,
  AlertOctagon,
  Smartphone,
  Globe,
  Search,
  Radio as RadioIcon,
  Wrench,
  Video,
  Skull,
  Banknote,
  UserX,
  HeartPulse,
  Bone,
  FileWarning,
  Send,
  MessageCircle,
  Share,
  Camera,
  Mail,
  Briefcase,
  Scissors,
  Syringe
} from 'lucide-react'
import { ricochetData } from '@/lib/data-loader'

export default function CatalystOptimizationPage() {
  // Extract real data from data loader
  const { frictionAudit, linguisticEngine } = ricochetData.catalystOptimization
  const optimizationMetrics = [
    { title: 'AI Optimizations', value: '2,341', trend: 'up' as const, gradient: 'emerald' as const },
    { title: 'Performance Lift', value: '+47%', trend: 'up' as const, gradient: 'cyan' as const },
    { title: 'Friction Reduced', value: '34.2%', trend: 'down' as const, gradient: 'indigo' as const },
    { title: 'Linguistic Score', value: '8.7/10', trend: 'up' as const, gradient: 'purple' as const }
  ]

  const frictionPoints = [
    {
      platform: 'LinkedIn',
      issue: 'Post length exceeds optimal',
      severity: 'medium',
      impact: 23,
      suggestion: 'Reduce to 1,300 chars',
      status: 'pending'
    },
    {
      platform: 'TikTok',
      issue: 'Video hook too slow',
      severity: 'high',
      impact: 45,
      suggestion: 'Move value prop to 0:00-0:02',
      status: 'pending'
    },
    {
      platform: 'Instagram',
      issue: 'Hashtag saturation',
      severity: 'low',
      impact: 12,
      suggestion: 'Reduce to 8-12 tags',
      status: 'resolved'
    },
    {
      platform: 'X/Twitter',
      issue: 'Posting frequency low',
      severity: 'medium',
      impact: 31,
      suggestion: 'Increase to 4-5 posts/day',
      status: 'pending'
    },
    {
      platform: 'Facebook',
      issue: 'Native format not used',
      severity: 'high',
      impact: 38,
      suggestion: 'Upload natively vs. links',
      status: 'in-progress'
    }
  ]

  const linguisticResonance = [
    {
      word: 'innovative',
      resonance: 89,
      sentiment: 'positive',
      platforms: ['LinkedIn', 'Facebook', 'Instagram'],
      category: 'Authority'
    },
    {
      word: 'breakthrough',
      resonance: 84,
      sentiment: 'positive',
      platforms: ['X', 'LinkedIn', 'Instagram'],
      category: 'Impact'
    },
    {
      word: 'accessible',
      resonance: 78,
      sentiment: 'positive',
      platforms: ['Facebook', 'Instagram', 'LinkedIn'],
      category: 'Trust'
    },
    {
      word: 'comprehensive',
      resonance: 76,
      sentiment: 'positive',
      platforms: ['LinkedIn', 'Facebook', 'YouTube'],
      category: 'Authority'
    },
    {
      word: 'exclusive',
      resonance: 72,
      sentiment: 'neutral',
      platforms: ['Instagram', 'X', 'LinkedIn'],
      category: 'Urgency'
    },
    {
      word: 'struggling',
      resonance: 68,
      sentiment: 'negative',
      platforms: ['Facebook', 'Instagram', 'LinkedIn'],
      category: 'Empathy'
    }
  ]

  const platformOptimizations = [
    {
      platform: 'LinkedIn',
      optimizations: 234,
      improvements: 45,
      avgLift: 34,
      topAction: 'Native document uploads',
      color: 'blue'
    },
    {
      platform: 'X/Twitter',
      optimizations: 567,
      improvements: 89,
      avgLift: 28,
      topAction: 'Thread optimization',
      color: 'cyan'
    },
    {
      platform: 'Instagram',
      optimizations: 345,
      improvements: 67,
      avgLift: 41,
      topAction: 'Reel format',
      color: 'purple'
    },
    {
      platform: 'TikTok',
      optimizations: 123,
      improvements: 34,
      avgLift: 67,
      topAction: 'Hook optimization',
      color: 'rose'
    },
    {
      platform: 'Facebook',
      optimizations: 234,
      improvements: 56,
      avgLift: 23,
      topAction: 'Native video uploads',
      color: 'indigo'
    },
    {
      platform: 'YouTube',
      optimizations: 89,
      improvements: 23,
      avgLift: 52,
      topAction: 'Thumbnail A/B testing',
      color: 'red'
    }
  ]

  const recentOptimizations = [
    {
      id: '1',
      content: 'Summer Health Campaign',
      type: 'Format Adjustment',
      platform: 'TikTok',
      before: '2.3% engagement',
      after: '4.8% engagement',
      lift: 108,
      status: 'success'
    },
    {
      id: '2',
      content: 'Vaccine Awareness',
      type: 'Linguistic Tune',
      platform: 'LinkedIn',
      before: '1.2K impressions',
      after: '2.8K impressions',
      lift: 133,
      status: 'success'
    },
    {
      id: '3',
      content: 'Mental Health Series',
      type: 'Timing Shift',
      platform: 'Instagram',
      before: '5.6K reach',
      after: '8.9K reach',
      lift: 59,
      status: 'success'
    },
    {
      id: '4',
      content: 'Patient Rights',
      type: 'Hashtag Clean',
      platform: 'Facebook',
      before: '3.4K reach',
      after: '4.1K reach',
      lift: 21,
      status: 'partial'
    }
  ]

  const a_bTests = [
    {
      name: 'Hook Test - Vaccine Content',
      platform: 'TikTok',
      variants: 3,
      leader: 'Variant B',
      lift: 67,
      status: 'active',
      duration: '3 days remaining'
    },
    {
      name: 'Thumbnail Test - Health Tips',
      platform: 'YouTube',
      variants: 4,
      leader: 'Variant C',
      lift: 45,
      status: 'active',
      duration: '5 days remaining'
    },
    {
      name: 'CTA Test - Appointment Booking',
      platform: 'LinkedIn',
      variants: 2,
      leader: 'Variant A',
      lift: 23,
      status: 'completed',
      duration: 'Finished'
    },
    {
      name: 'Hashtag Strategy Test',
      platform: 'Instagram',
      variants: 3,
      leader: 'Variant B',
      lift: 34,
      status: 'active',
      duration: '7 days remaining'
    }
  ]

  // CHANNEL TOXICITY & AD EFFICIENCY AUDIT DATA

  // EXECUTIVE SUMMARY DATA
  const executiveSummary = {
    thesis: 'The DoH digital footprint is characterized by a "Schism of Sentiment" - Force Multiplier on LinkedIn vs. Dead Zone on Facebook',
    keyFinding: 'Ad Efficiency Probe reveals "Negative Feedback Loop" - budget drives users to broken apps (Sehaty/Malaffi), generating "Brand Anger"',
    researchVectors: '100+ discrete vectors from app store reviews to anonymous expatriate forums'
  }

  // SECTION 2.1: FACEBOOK DEAD ZONE ANALYSIS
  const facebookDeadZone = {
    followers: '100,000+',
    engagementRate: '< 0.1% (Ghost Town)',
    benchmark: '0.06% for government/non-profit entities',
    authorityGap: '100K followers but only 5 likes on recent posts = Negative Social Proof',
    algorithm: 'Meaningful Social Interactions (MSI) - suppresses content without user-to-user discussion',
    classification: 'Hostile / Dead Zone - Pay-to-Play, organic reach functionally irrelevant',
    contentType: 'Broadcast material (press releases, MoU photos, static infographics) - algorithmically inert',
    scrollFactor: 'Unless photo "catches fire" immediately, it is buried by algorithm'
  }

  // SECTION 2.2: SCHISM OF SENTIMENT - LINKEDIN VS SHADOW
  const schismOfSentiment = [
    {
      platform: 'LinkedIn',
      classification: 'Force Multiplier',
      environment: 'Echo Chamber of Corporate Compliance',
      incentives: 'Professional networking, business development, employment security',
      narrative: 'Emiratisation in Healthcare - framed as Vision 2030 strategic pillar',
      sentiment: 'Uniformly Positive - Professional/Supportive',
      audience: 'Stakeholders from PureHealth, SEHA, vendors seeking contracts',
      engagement: 'Performative validation - liking, sharing, congratulating',
      illusion: 'Frictionless Illusion - validates policy by reflecting universal acceptance',
      risk: 'Dangerous if taken as proxy for general public sentiment'
    },
    {
      platform: 'TikTok/Reddit (Shadow)',
      classification: 'Shadow Monitor / Hostile Ricochet Risk',
      environment: 'Underground Reality - Anonymous Raw Truth',
      incentives: 'Challenge authority, share raw truths, duets/stitches culture',
      narrative: 'Emiratisation inverted - cynicism about "wasta" (nepotism)',
      sentiment: 'Cynical/Demanding - focused on bureaucracy friction',
      topics: ['Ghost employment', 'Displacement of qualified expatriates', 'Nationality-based pay scales', 'Abu Dhabi licensing difficulty vs Dubai'],
      risk: 'Corporate "Emiratisation Success" content would trigger hostile duets with stories of rejection and salary stagnation',
      verdict: 'Must be treated as Listening Posts or engaged with radically transparent, human-centric content acknowledging friction'
    }
  ]

  // SECTION 3.1: SEHATY CONVERSION CLIFF
  const sehatyConversionCliff = {
    app: 'Sehaty',
    position: 'Central digital gateway for Abu Dhabi patients',
    adVolume: 'Large volume of "App Install" and "Service Awareness" advertising',
    uxIssues: [
      { issue: 'Technical Instability', description: 'Frequent application crashes, system instability, slow responsiveness' },
      { issue: 'Login Barrier', description: 'Authentication process failures, login loops, UAE Pass sync failures' },
      { issue: 'Rating Trap', description: '3.6-3.7 star aggregate rating - below 4.0 is warning sign in app economy' }
    ],
    negativeLoop: {
      step1: 'Ad spend generates impression',
      step2: 'User recalls previous crash',
      step3: 'User leaves negative comment on ad',
      step4: 'Algorithm sees negative sentiment, lowers relevance score',
      step5: 'Cost Per Click (CPC) increases'
    },
    implication: 'Paying premium to damage brand reputation - Crash-Free Session must exceed 99% before acquisition ads'
  }

  // SECTION 3.2: MALAFFI FRICTION
  const malaffiFriction = {
    product: 'Malaffi - Health Information Exchange (HIE)',
    marketing: 'Seamless unifier of patient records',
    reality: 'Fragmentation for end-user',
    issues: [
      { name: 'Empty Record Syndrome', description: 'Records incomplete/missing due to facility-level upload failures or matching errors' },
      { name: 'Trust Cost', description: '"All records in one place" ads viewed as deceptive when users see blank screen' },
      { name: 'Cynical Commentary', description: 'Users accuse entity of marketing "fantasy" version of healthcare system' }
    ]
  }

  // SECTION 3.3: TARGETING MISMATCH - ISTIJABA
  const istijabaMismatch = {
    service: 'Istijaba Call Center Services',
    issue: 'Linguistic mismatch in ad targeting',
    mechanics: 'English-language ads for urgent care appear in Arabic/Urdu-speaking demographics (or vice versa)',
    phenomenon: 'Comment Support - comment section becomes makeshift chaotic helpdesk with queries in native languages going unanswered',
    algorithmConfusion: 'English ad receiving non-English comments confuses platform algorithm about target audience profile',
    result: 'Degrades targeting efficiency, continues showing to wrong people, perpetuating cycle of waste'
  }

  // SECTION 4.1: ENGAGEMENT BAIT TRAP
  const engagementBaitTrap = {
    platforms: ['Facebook', 'Instagram'],
    priority: 'High-arousal emotion (anger, joy, shock)',
    dohContent: 'Inherently regulatory, calm, informative = "Neutered" content',
    triggers: 'Neither dopamine nor adrenaline',
    dilemma: 'Low-arousal content = Ad Blindness, High-arousal content = Hostile Engagement (comment wars)',
    trapped: 'Between paying for apathy (scroll-past) or paying for hostility (comment wars)'
  }

  // SECTION 4.2: SEARCH VS FEED DYNAMIC
  const searchVsFeed = {
    misalignment: 'Over-reliance on Push (Feed) marketing, under-investment in Pull (Search) capture',
    userIntents: [
      'Medical insurance Abu Dhabi',
      'DataFlow verification delays',
      'Nurse salary Abu Dhabi'
    ],
    friction: 'Users find Reddit threads or unofficial forums before helpful DoH resources',
    opportunity: 'Shift from interrupting leisure time (Feed) to intercepting administrative help-seeking (Search)',
    recommendation: 'Shift 30% of Feed budget to Search'
  }

  // TABLE 1: PLATFORM FRICTION MATRIX
  const platformFrictionMatrix = [
    { platform: 'Facebook', followers: '~100,000+', engagement: '< 0.1% (Ghost Town)', sentiment: 'Indifferent / Customer Service Complaints', classification: 'Hostile / Dead Zone' },
    { platform: 'LinkedIn', followers: 'High (Industry Standard)', engagement: 'High (Quality Comments)', sentiment: 'Supportive / Performative / B2B', classification: 'Force Multiplier' },
    { platform: 'Reddit', followers: 'N/A (Topic Based)', engagement: 'High (Raw/Anonymous)', sentiment: 'Cynical / Critical (Salaries, Wasta)', classification: 'Shadow Monitor' },
    { platform: 'App Stores', followers: 'N/A (User Base)', engagement: '3.6 - 3.7 Stars', sentiment: 'Frustrated (Crashes, Login Errors)', classification: 'Friction Core' }
  ]

  // TABLE 2: AD WASTE CALCULATOR
  const adWasteCalculator = [
    { stage: 'Impression', action: 'User sees "Download Sehaty" Ad', friction: 'Ad Fatigue - User ignores generic creative', result: 'Low CTR (Click Through Rate)' },
    { stage: 'Click', action: 'User clicks to App Store', friction: 'Rating Shock: User sees 3.6 stars', result: 'High Drop-off' },
    { stage: 'Install', action: 'User installs App', friction: 'Technical Failure: "Slow/Crash"', result: 'User Churns' },
    { stage: 'Action', action: 'User tries to Login', friction: 'Authentication Error: UAE Pass sync fail', result: 'Brand Damage' }
  ]

  // SECTION 6: STRATEGIC IMPLICATIONS
  const strategicImplications = [
    {
      id: '1',
      title: 'Redefining Hostile Territory',
      recommendations: [
        'Facebook as Utility: Shift to "Maintenance Mode" - cease bespoke organic content, use as static directory and delivery pipe for Dark Posts',
        'Comment Section Containment: Disable comments or use AI moderation for broad-reach campaigns on hostile platforms',
        'Risk: Comment section becoming "Customer Service Ghetto" with unrelated complaints'
      ]
    },
    {
      id: '2',
      title: 'Leveraging Force Multipliers',
      recommendations: [
        'Doubling Down on LinkedIn: Maximize for Policy Socialization - "pre-wire" regulations to key stakeholders before public announcement',
        'The Festival Bridge: Shift from ads about festival to creating Instagrammable moments at festival',
        'UGC Incentive: Incentivize User-Generated Content as primary distribution method for lifestyle health messaging'
      ]
    },
    {
      id: '3',
      title: 'Closing the Loop on Ad Waste',
      recommendations: [
        'Product-First Gate: No media budget for broken products - Pause marketing until Crash-Free Session exceeds 99% and rating above 4.0',
        'From Download to Recovery: Redirect budget to "Service Recovery" ads acknowledging friction',
        'Search Intent Capture: Shift 30% of Feed budget to Search for high-intent queries'
      ]
    },
    {
      id: '4',
      title: 'Addressing the Shadow Narrative',
      recommendations: [
        'Radical Transparency: Cannot use corporate speak - Publish live dashboard of DataFlow processing times',
        'Human-Centric Content: Replace stock photos with video diaries of actual frontline workers (both Emirati and Expat)',
        'Show reality of work - Human connection is only thing that survives in Hostile Territory'
      ]
    }
  ]

  // FILE 07: DIGITAL AUDIT - CONTENT, ADS, AND SHARING DATA

  // EXECUTIVE SUMMARY
  const digitalAuditSummary = {
    title: 'Digital Necrosis, Ad-Spend Hemorrhage, and the Shadow Arteries of Public Health',
    subtitle: 'A Forensic Audit of the ADPHC Ecosystem',
    diagnosis: 'High-Output, Low-Reception failure - robust production schedule generating vast quantities of content, yet vital signs of genuine engagement are critically low',
    thesis: 'The digital ecosystem where official arteries are clogged with content that reaches almost no one ("Dead Zones"), while the lifeblood of public information flows through unmonitored, private capillaries ("Dark Social")',
    vitalSign: 'Substantial budgets deployed to drive traffic into broken funnels—apps that crash, logins that loop—resulting in wasted dirhams and active generation of detractors'
  }

  // DEAD ZONES - CLUSTER A: WEBINAR GRAVEYARD (20 items)
  const webinarGraveyard = [
    {
      id: '01',
      source: 'Institute of Public Health CMHS',
      metric: '2 views / 21 mins',
      topic: '"Sehhi" Program Webinar: Toward a Healthier & Safer Community (Arabic)',
      status: 'Critical',
      diagnosis: 'Immediate failure to launch. A view count of 2 suggests even the speakers did not watch the replay. Zero pre-event promotion or notification strategy.'
    },
    {
      id: '02',
      source: 'Daman Channel',
      metric: '48 views / 2 years',
      topic: 'Back to School Awareness Webinar',
      status: 'Decomposed',
      diagnosis: '"Back to School" is a high-volume search term every August/September. <50 views in 24 months indicates complete SEO failure.'
    },
    {
      id: '03',
      source: 'Daman Channel',
      metric: '71 views / 3 years',
      topic: 'Breast Cancer Awareness Webinar',
      status: 'Decomposed',
      diagnosis: 'Despite "Pink October" being a massive global awareness event, this asset failed to rank. Likely unedited Zoom recording.'
    },
    {
      id: '04',
      source: 'Pacific Council',
      metric: '28 views / 3 years',
      topic: 'Pandemic Response and Recovery',
      status: 'Decomposed',
      diagnosis: 'Video on "Pandemic Response" uploaded during pandemic that garnered only 28 views is statistical anomaly. Content likely hidden, untagged, or disconnected from urgent queries.'
    },
    {
      id: '05',
      source: 'Viola Communications',
      metric: '35 views / 11 months',
      topic: 'Nutri-Mark Initiative Launch',
      status: 'Active Zombie',
      diagnosis: 'Nutri-Mark is major strategic initiative. View count lower than internal project team size suggests launch PR failed to drive traffic.'
    },
    {
      id: '06',
      source: 'UAE Forsan',
      metric: '45 views / 5 years',
      topic: 'ADPHC at Global Research & Innovation Forum',
      status: 'Fossilized',
      diagnosis: 'Five years of hosting costs for 45 views. "Vanity Content"—footage filmed to prove attendance to stakeholders, no value for public.'
    },
    {
      id: '07',
      source: 'Middle East News 247',
      metric: '24 views / 5 months',
      topic: 'WHO Director-General Message at IUHPE',
      status: 'Active Zombie',
      diagnosis: 'Celebrity authority figures like Dr. Tedros cannot save content hosted on channel with no subscriber base or distribution strategy.'
    },
    {
      id: '08',
      source: 'Alfred Health',
      metric: '47 views / 1 year',
      topic: 'Alfred Health | Department of Health Abu Dhabi',
      status: 'Active Zombie',
      diagnosis: 'Partnership announcements treated as "News" but without paid boost or specific audience targeting, they die instantly in algorithm.'
    },
    {
      id: '09',
      source: 'Future Health',
      metric: '57 views / 5 months',
      topic: 'H.E. Dr. Rashed Alsuwaidi Interview',
      status: 'Active Zombie',
      diagnosis: 'High-level leadership content failing to reach constituent base. Lack of "Leadership Comms" strategy leveraging personal brands.'
    },
    {
      id: '10',
      source: 'Motivate Val Morgan',
      metric: '114 views / 2 years',
      topic: 'ADPHC Cinema Ad 2023',
      status: 'Decomposed',
      diagnosis: 'Uploading raw cinema ad file to YouTube without optimizing title, thumbnail, or description results in dead inventory. "Orphan" asset.'
    },
    {
      id: '11',
      source: 'MOHAP UAE',
      metric: '114 views / 3 years',
      topic: 'ADPHC at Scientific Conference on Health & Medical Research',
      status: 'Decomposed',
      diagnosis: 'Cross-posting on Ministry channels did not yield significant uplift. Sharing between two government channels with low organic reach does not equal multiplication.'
    },
    {
      id: '12',
      source: 'Milken Institute',
      metric: '287 views / 1 year',
      topic: 'Conversation with HE Mansoor Al Mansoori',
      status: 'Low Vitality',
      diagnosis: '<300 views for Chairman-level interview at global summit suggests content was not leveraged for PR or internal communications.'
    },
    {
      id: '13',
      source: 'The National News',
      metric: '749 views / 5 years',
      topic: 'Dr Aysha Al Dhaheri on Covid-19 Guidance',
      status: 'Fossilized',
      diagnosis: 'For primary news outlet during peak of COVID anxiety, <1K views is significant underperformance. Format (talking head) failed to capture audience.'
    },
    {
      id: '14',
      source: 'Department of Health (Official)',
      metric: '1.84K Subs / 205 Videos',
      topic: 'Channel Aggregate Performance',
      status: 'Systemic Anemia',
      diagnosis: '1.84K subscribers for primary health regulator of Abu Dhabi is critically low (~0.06% of population). Channel itself is Dead Zone.'
    },
    {
      id: '15',
      source: 'DoH YouTube Playlist',
      metric: '4 Videos / "DoH Panel Discussions"',
      topic: '"Arab Health 2023" Playlist',
      status: 'Active Zombie',
      diagnosis: 'Playlists created for specific events become graveyards. Users do not browse government YouTube channels for year-old panel discussions.'
    },
    {
      id: '16',
      source: 'WebsEdgeMedicine',
      metric: '14K views / 1 year',
      topic: 'Emirati Genome Program',
      status: 'False Positive',
      diagnosis: 'While 14K views seems high, given national priority scale, this should be in hundreds of thousands. "Relative" dead zone.'
    },
    {
      id: '17',
      source: 'Plug and Play Tech Center',
      metric: '684 views / 4 years',
      topic: 'Startups Share Their Experience with DoH',
      status: 'Fossilized',
      diagnosis: 'B2B content targeting startups. 600 views in 4 years indicates "Innovation" narrative not reaching global tech ecosystem effectively.'
    },
    {
      id: '18',
      source: 'Crowe UAE',
      metric: '766 views / 1 year',
      topic: 'ADHICS Webinar',
      status: 'Low Vitality',
      diagnosis: 'Cyber security compliance is mandatory. <800 views suggests even mandatory audience is not engaging with enablement material.'
    },
    {
      id: '19',
      source: 'MCO Webinars',
      metric: 'N/A (Implied Low)',
      topic: 'Emirates Thoracic Society Scientific Meeting',
      status: 'Active Zombie',
      diagnosis: '"2-hour accredited CME" uploaded as single block. Valuable for tiny niche but publicly indexed as "dead" content due to low broad appeal.'
    },
    {
      id: '20',
      source: 'MENA Stroke Org',
      metric: 'Low Engagement',
      topic: 'Cerebrovascular Grand Round Webinar',
      status: 'Active Zombie',
      diagnosis: 'Highly technical content (Grand Rounds) treated as public-facing content, confusing algorithm and audience.'
    }
  ]

  // DEAD ZONES - CLUSTER B: SOCIAL MEDIA ECHO CHAMBER (10 items)
  const socialEchoChamber = [
    {
      id: '21',
      platform: 'Threads',
      title: 'The "Ghost" Account',
      issue: 'Search for ADPHC Threads account leads to confusion with US Department of Homeland Security (DHS). Zero SEO presence on emerging platform.',
      status: 'Pre-Dead Zone'
    },
    {
      id: '22',
      platform: 'Snapchat',
      title: 'The Empty Vessel',
      issue: 'Strategic intent for Snapchat Coronavirus news, but absence of viral content suggests became "Ghost Channel" post-pandemic.',
      status: 'Ghost Channel'
    },
    {
      id: '23',
      platform: 'Snapchat Family Center',
      title: 'Protocol Launch',
      issue: 'Launch of "Family Center" feature was platform-level initiative. DoH participation appears to be press release moment without sustained content strategy.',
      status: 'Zombie Feature'
    },
    {
      id: '24',
      platform: 'Twitter/X (@adphc_ae)',
      title: 'Link Dump Broadcast',
      issue: 'Functions as "Link Dump" for press releases. Without strategy for real-time engagement, it is broadcast tower in desert.',
      status: 'Dead Zone'
    },
    {
      id: '25',
      platform: 'Instagram (@adphc_ae)',
      title: 'Poster-ware',
      issue: 'Low engagement on initiative launches like Nutri-Mark suggests content is print flyers uploaded as JPEGs rather than native social content.',
      status: 'Format Mismatch'
    },
    {
      id: '26',
      platform: 'LinkedIn (adphc-ae)',
      title: 'Protocol Photos',
      issue: 'Used primarily for "Protocol Photos" (MoUs, handshakes). Serves B2B purpose but low visibility of webinar re-shares implies fails as thought leadership.',
      status: 'B2B Only'
    },
    {
      id: '27',
      platform: 'Facebook (ADPHC.ae)',
      title: 'Zombie Page',
      issue: 'Reliance on cross-promotion (WhatsApp bot launch) rather than organic community building. Likely high follower count but near-zero engagement.',
      status: 'Ghost Town'
    },
    {
      id: '28',
      platform: 'Multiple',
      title: 'Dual Handle Confusion',
      issue: 'Existence of both @DoHSocial and @adphc_ae creates "Split Audience Dead Zone." Users do not know which handle to tag for help.',
      status: 'Audience Dilution'
    },
    {
      id: '29',
      platform: 'Influencer Channels',
      title: 'Black Holes',
      issue: 'DoH lists influencers like Khalid Al Ameri, but if traffic not captured effectively, official channel receives no benefit. Engagement stays with influencer.',
      status: 'Traffic Leak'
    },
    {
      id: '30',
      platform: 'Google Search',
      title: 'Unclaimed Knowledge Panels',
      issue: 'Search results for "ADPHC" pull from generic "About Us" pages rather than curated Google Knowledge Panel, creating "Search Dead Zone."',
      status: 'SEO Void'
    }
  ]

  // DEAD ZONES - CLUSTER C: APP GRAVEYARD (10 items)
  const appGraveyard = [
    {
      id: '31',
      app: 'Sahatna',
      feature: 'AI Symptom Checker',
      issue: 'AI symptom checkers require massive trust and DAU to learn. Given "useless" reviews of parent app, likely "Ghost Feature"—maintained code no one visits.',
      status: 'Zombie Feature'
    },
    {
      id: '32',
      app: 'Malaffi',
      feature: 'Wellness Tab',
      issue: 'Allows connecting Fitbit/Garmin. In market preferring native apps or high-end wearables, wellness tab inside medical record app is strategically irrelevant.',
      status: 'Feature Mismatch'
    },
    {
      id: '33',
      app: 'Doctor for Every Citizen',
      feature: 'Video Consults',
      issue: 'Launched during COVID. As clinics reopened, telemedicine portals become "Digital Waiting Rooms" with no doctors online or long wait times.',
      status: 'Service Dead Zone'
    },
    {
      id: '34',
      app: 'Sahatna',
      feature: 'Active Ramadan Challenge',
      issue: 'Seasonal app features become "Dead Code" bloat post-event. If "Wellness" feature built specifically for this, sits dormant for 11 months.',
      status: 'Seasonal Zombie'
    },
    {
      id: '35',
      app: 'TAMM',
      feature: 'Pest Control Service',
      issue: 'Routing through general government super-app creates "Discovery Dead Zone." Users searching on Google may not realize they need to download government app.',
      status: 'Discovery Gap'
    },
    {
      id: '36',
      app: 'Malaffi',
      feature: 'Health History',
      issue: 'If data is missing (labs not showing), users stop checking it. Data dashboard with incomplete data is "Trust Dead Zone."',
      status: 'Trust Deficit'
    },
    {
      id: '37',
      app: 'Dawak',
      feature: 'Biometric Login',
      issue: 'Patch notes indicate "Setup biometric login" was recent fix. For period prior, login screen was "Friction Dead Zone" where users dropped off.',
      status: 'Fixed Friction'
    },
    {
      id: '38',
      app: 'TAMM',
      feature: 'Family Space',
      issue: 'Feature designed to manage documents. If users prefer physical copies or WhatsApp for document sharing, feature remains "Ghost Town."',
      status: 'User Preference Mismatch'
    },
    {
      id: '39',
      app: 'Istijaba Call Center',
      feature: 'Digital Integration',
      issue: 'Users describe "chaotic" scenes. Digital booking/triage system failed, creating "Service Dead Zone" where digital promise met analog failure.',
      status: 'Broken Promise'
    },
    {
      id: '40',
      app: 'Various',
      feature: 'Green List Info Page',
      issue: 'During pandemic, "Green List" page was most visited. Now, remnants are "Fossilized Zones" if not redirected or updated.',
      status: 'Fossilized'
    }
  ]

  // DEAD ZONES - CLUSTER D: CONTEXTUAL & FORMAT FAILURES (10 items)
  const formatFailures = [
    {
      id: '41',
      failure: 'The "Talking Head" Format',
      description: 'Videos featuring officials reading scripts consistently underperform. Even vital info dies if delivered in dry, televised format on social platform.',
      impact: 'Algorithm Penalty'
    },
    {
      id: '42',
      failure: 'The "Uncut Webinar" Replay',
      description: 'Uploading 1-2 hour Zoom recordings without chapters, highlights, or "Key Takeaway" cuts guarantees <10% retention. Archive content masquerading as Social.',
      impact: 'Retention Collapse'
    },
    {
      id: '43',
      failure: 'English-Only Ads for Arabic Audiences',
      description: 'Implied by demographic mismatch in comments. Ad displayed in wrong language is "Relevance Dead Zone"—consumes impression but generates no cognition.',
      impact: 'Targeting Fail'
    },
    {
      id: '44',
      failure: 'The "Press Release as Video"',
      description: 'Text-heavy videos that are essentially scrolling PDFs or kinetic typography of press release. Garner views only if paid; organic reach is zero.',
      impact: 'Organic Zero'
    },
    {
      id: '45',
      failure: 'No-Context Cross-Posting',
      description: 'Sharing YouTube link to Twitter with no caption or generic "Watch this" instruction kills click-through rate (CTR).',
      impact: 'CTR Death'
    },
    {
      id: '46',
      failure: 'The "Awareness Week" Spike',
      description: 'Activity spikes during "Breast Cancer Month" followed by 11 months of radio silence. "Pulse-Less" strategy prevents algorithm training.',
      impact: 'Algorithm Amnesia'
    },
    {
      id: '47',
      failure: 'Duplicate Uploads',
      description: 'Same video uploaded to multiple channels (Daman, DoH, ADPHC, MOHAP) splits already meager view count. Fragmentation creates multiple "Dead Zones."',
      impact: 'View Fragmentation'
    },
    {
      id: '48',
      failure: 'Missing Metadata',
      description: 'Videos titled "ADPHC Cinema Ad 2023" have no search terms, rendering them invisible to search engines. "Unfindable Content."',
      impact: 'SEO Void'
    },
    {
      id: '49',
      failure: 'Comments Disabled',
      description: 'Many government channels disable comments to avoid moderation work. Signals to algorithm that content is "unengaging," killing distribution.',
      impact: 'Distribution Block'
    },
    {
      id: '50',
      failure: 'The "Internal Jargon" Barrier',
      description: 'Titles like "Cerebrovascular Grand Round" alienate lay public. Content belongs on specialized LMS, not public YouTube where it drags down performance.',
      impact: 'Audience Alienation'
    }
  ]

  // AD PERFORMANCE - CLUSTER A: CRASH & BUG LOOP (20 items)
  const crashBugLoop = [
    {
      id: '01',
      type: 'Technical Waste',
      issue: '"Crash Data" (Systemic)',
      source: 'Apple App Store data for Sahatna',
      impact: 'Reviews confirm frequent crashes, meaning ad spend on these users is instantly incinerated.',
      severity: 'Critical'
    },
    {
      id: '02',
      type: 'Technical Waste',
      issue: '"App slow to load"',
      source: 'TAMM user feedback',
      impact: 'In era of 5G, slow app is deleted app. Latency kills conversion rates from ad clicks.',
      severity: 'High'
    },
    {
      id: '03',
      type: 'Technical Waste',
      issue: '"Very slow"',
      source: 'SEHA app review',
      impact: 'Laughter indicates cynical resignation—user expects government app to be bad.',
      severity: 'High'
    },
    {
      id: '04',
      type: 'Technical Waste',
      issue: '"Error message: Your data does not match"',
      source: 'FAQ item',
      impact: 'Users blocked from registering because database does not match Emirates ID, fatal funnel blockage.',
      severity: 'Critical'
    },
    {
      id: '05',
      type: 'Technical Waste',
      issue: '"It shows a pop up message stating error message"',
      source: 'MyAster app review',
      impact: 'Generic error messages are ultimate UX failure, leaving user with no recourse but to churn.',
      severity: 'High'
    },
    {
      id: '06',
      type: 'Technical Waste',
      issue: '"Useless"',
      source: 'Lyra Wellbeing Hub review',
      impact: 'Explicitly calling service "useless." This is "Detractor" generated by paid reach.',
      severity: 'High'
    },
    {
      id: '07',
      type: 'Technical Waste',
      issue: '"Absolutely useless Application"',
      source: 'MyAster user',
      impact: 'User "spent extra an hour" because app failed to register correctly. Digital tool added friction.',
      severity: 'Critical'
    },
    {
      id: '08',
      type: 'Technical Waste',
      issue: '"Scale can\'t connect... basically useless"',
      source: 'Dr. Nutrition app review',
      impact: 'User bought hardware and downloaded app, but connection failed. Destroys Lifetime Value (LTV).',
      severity: 'High'
    },
    {
      id: '09',
      type: 'Technical Waste',
      issue: '"Login issues"',
      source: 'Malaffi users',
      impact: 'UAEPass integration struggles. If "Key" does not work, "House" is inaccessible.',
      severity: 'Critical'
    },
    {
      id: '10',
      type: 'Technical Waste',
      issue: '"Forgot password loop"',
      source: 'User reports',
      impact: 'Users stuck in password reset purgatory. Ads driving re-engagement will fail.',
      severity: 'High'
    },
    {
      id: '11',
      type: 'Technical Waste',
      issue: '"Biometric login setup"',
      source: 'Dawak app patch notes',
      impact: 'Fixing login in patch notes implies period where login was broken—during which ad spend was wasted.',
      severity: 'High'
    },
    {
      id: '12',
      type: 'Technical Waste',
      issue: '"Waiting for agent... 3 days"',
      source: 'Live chat features',
      impact: 'Unmanned features. Ads promising "Instant Support" are proven false, damaging trust.',
      severity: 'High'
    },
    {
      id: '13',
      type: 'Technical Waste',
      issue: '"App slow and can not see appointments"',
      source: 'Booking app review',
      impact: 'Critical functionality failure for booking app. Ad promotes "Book Now," user cannot see appointments.',
      severity: 'Critical'
    },
    {
      id: '14',
      type: 'Technical Waste',
      issue: '"System is not able to send all types of information"',
      source: 'Malaffi data gaps',
      impact: 'Users log in expecting full record and find partial one, leading to disappointment.',
      severity: 'High'
    },
    {
      id: '15',
      type: 'Technical Waste',
      issue: '"Demographic details entered incorrectly"',
      source: 'Data integrity issues',
      impact: 'Record mismatches. User is blamed for system error.',
      severity: 'High'
    },
    {
      id: '16',
      type: 'Technical Waste',
      issue: '"Sending Access Request... nothing happens"',
      source: 'iCloud/Data protection conflicts',
      impact: 'Technical interoperability fail affecting high-value iPhone users.',
      severity: 'Medium'
    },
    {
      id: '17',
      type: 'Technical Waste',
      issue: '"Janky app"',
      source: 'General sentiment',
      impact: 'Lack of polish contradicts high-tech image of Abu Dhabi ads.',
      severity: 'Medium'
    },
    {
      id: '18',
      type: 'Technical Waste',
      issue: '"Don\'t waste your time"',
      source: 'Active detractor',
      impact: 'One such review can neutralize impact of 100 paid impressions.',
      severity: 'High'
    },
    {
      id: '19',
      type: 'Technical Waste',
      issue: '"Inactive and helpless"',
      source: 'Support staff sentiment',
      impact: 'User perception of support quality.',
      severity: 'Medium'
    },
    {
      id: '20',
      type: 'Technical Waste',
      issue: '"Spent extra an hour"',
      source: 'User experience',
      impact: 'App increased friction of healthcare access instead of reducing it.',
      severity: 'Critical'
    }
  ]

  // AD PERFORMANCE - CLUSTER B: TARGETING WASTE (20 items)
  const targetingWaste = [
    {
      id: '21',
      type: 'Contextual Fail',
      issue: '"Why is this ad in English? I speak Arabic"',
      source: 'Inferred from research',
      impact: 'Research shows cinema ads and social content in English. In region with Arabic preference, represents massive "Relevance Score" penalty.',
      severity: 'High'
    },
    {
      id: '22',
      type: 'Contextual Fail',
      issue: '"Stop showing me this"',
      source: 'Implied sentiment',
      impact: 'Low engagement on repetitive ads (114 views on cinema ad suggests high skip rates or ad blindness).',
      severity: 'Medium'
    },
    {
      id: '23',
      type: 'Contextual Fail',
      issue: '"This content isn\'t available"',
      source: 'User reports',
      impact: 'Users clicking links in ads or social posts to find video removed or geo-blocked. "Dead Link" ad.',
      severity: 'High'
    },
    {
      id: '24',
      type: 'Contextual Fail',
      issue: '"Scam Alert"',
      source: 'User perception',
      impact: 'Users seeing "DoH" ads that are actually scams. Public trust in real ads eroded by prevalence of fake ones.',
      severity: 'Critical'
    },
    {
      id: '25',
      type: 'Contextual Fail',
      issue: '"Confusion between DHA and DoH"',
      source: 'User地理 targeting',
      impact: 'Users in Dubai seeing Abu Dhabi ads and vice versa. Existence of video explaining difference proves known targeting pain point.',
      severity: 'High'
    },
    {
      id: '26',
      type: 'Contextual Fail',
      issue: '"Left home during quarantine"',
      source: 'Conflicting automated texts',
      impact: 'Users receiving conflicting automated texts vs. physical watch instructions. Ad (SMS) contradicted Reality (Officer).',
      severity: 'High'
    },
    {
      id: '27',
      type: 'Contextual Fail',
      issue: '"Text message from DoH... makes me feel dumber"',
      source: 'Poorly written copy',
      impact: 'Poorly written copy in automated SMS/Ads. If ad copy is confusing, Call to Action (CTA) fails.',
      severity: 'Medium'
    },
    {
      id: '28',
      type: 'Contextual Fail',
      issue: '"Hand written by AD border official" vs "Digital App"',
      source: 'Promise vs. Reality gap',
      impact: 'Digital ad/app promise of seamless tracking vs. analog reality of handwriting on box.',
      severity: 'High'
    },
    {
      id: '29',
      type: 'Contextual Fail',
      issue: '"Chaotic" testing centers',
      source: 'Ads vs. Reality',
      impact: 'Ads promoting "Easy Testing" vs. reality of "Long lines." Expectation mismatch creates anger.',
      severity: 'High'
    },
    {
      id: '30',
      type: 'Contextual Fail',
      issue: '"Staff making people go home"',
      source: 'Service denial',
      impact: 'User "converted" (went to center) but was rejected after ad engagement.',
      severity: 'Critical'
    },
    {
      id: '31',
      type: 'Contextual Fail',
      issue: '"Useless application"',
      source: 'User frustration',
      impact: 'High frustration from users who tried to adopt digital tool.',
      severity: 'High'
    },
    {
      id: '32',
      type: 'Contextual Fail',
      issue: '"No appointments available"',
      source: 'Inventory vs. Promotion',
      impact: 'Ads promoting booking when inventory is zero.',
      severity: 'High'
    },
    {
      id: '33',
      type: 'Contextual Fail',
      issue: '"Scale doesn\'t connect"',
      source: 'Hardware/Software integration',
      impact: 'Integration failure in advertised products.',
      severity: 'Medium'
    },
    {
      id: '34',
      type: 'Contextual Fail',
      issue: '"Expensive supplements"',
      source: 'Price comparison',
      impact: 'Users comparing ad prices to "iHerb" and finding local options lacking value.',
      severity: 'Medium'
    },
    {
      id: '35',
      type: 'Contextual Fail',
      issue: '"Not yet... planned for future"',
      source: 'Feature promises',
      impact: 'Features promised in ads/descriptions that do not exist yet. Selling "Vaporware."',
      severity: 'High'
    },
    {
      id: '36',
      type: 'Contextual Fail',
      issue: '"Stick with Pillars"',
      source: 'Competitor preference',
      impact: 'Users rejecting government/local app for better global competitor. Ad failed to prove USP.',
      severity: 'Medium'
    },
    {
      id: '37',
      type: 'Contextual Fail',
      issue: '"Technical issue" redirects',
      source: 'B2C to B2B workflow',
      impact: 'Users told to "contact IT" for consumer app. B2C ad leading to B2B support workflow.',
      severity: 'High'
    },
    {
      id: '38',
      type: 'Contextual Fail',
      issue: '"User experience in upload prescription"',
      source: 'Patch notes',
      impact: 'Specific UX pain point. "Enhanced user experience" implies previous experience was poor.',
      severity: 'Medium'
    },
    {
      id: '39',
      type: 'Contextual Fail',
      issue: '"Setup biometric login"',
      source: 'Forced updates',
      impact: 'Users forced to update just to log in. Forced updates often kill session retention.',
      severity: 'Medium'
    },
    {
      id: '40',
      type: 'Contextual Fail',
      issue: '"Bug Fixes"',
      source: 'Update frequency',
      impact: 'Constant "Bug Fix" updates imply historically unstable product.',
      severity: 'Medium'
    }
  ]

  // AD PERFORMANCE - CLUSTER C: SCAM & TRUST VECTOR (10 items)
  const scamTrustVector = [
    {
      id: '41',
      type: 'Brand Safety Fail',
      issue: '"Scammers impersonating DoH"',
      impact: 'Users wary of any DoH SMS or Ad due to prevalence of fraud. Brand is "spoofed" so often it has lost verification power.',
      severity: 'Critical'
    },
    {
      id: '42',
      type: 'Brand Safety Fail',
      issue: '"Asking for bank account info"',
      impact: 'Legitimate ads asking for payment trigger fear response.',
      severity: 'High'
    },
    {
      id: '43',
      type: 'Brand Safety Fail',
      issue: '"Check your spam folder"',
      impact: 'Official emails going to spam. "Deliverability Fail." If transactional email goes to spam, user assumes service is broken.',
      severity: 'High'
    },
    {
      id: '44',
      type: 'Brand Safety Fail',
      issue: '"Unsolicited commercial messages"',
      impact: 'Fear of spam from registering. Users hesitate to click ads because they do not want to be spammed.',
      severity: 'Medium'
    },
    {
      id: '45',
      type: 'Brand Safety Fail',
      issue: '"Data privacy concerns"',
      impact: 'Users hesitating to use Malaffi due to data sharing fears. Ad promotes "Sharing," but user hears "Surveillance."',
      severity: 'High'
    },
    {
      id: '46',
      type: 'Brand Safety Fail',
      issue: '"Interfere in their services"',
      impact: 'Developers/Partners being banned or flagged by Apple, creating B2B friction.',
      severity: 'Medium'
    },
    {
      id: '47',
      type: 'Brand Safety Fail',
      issue: '"Fraudulent conduct" accusations',
      impact: 'High-tension interactions in app ecosystem.',
      severity: 'High'
    },
    {
      id: '48',
      type: 'Brand Safety Fail',
      issue: '"Rereading it makes me feel dumber"',
      impact: 'Reaction to official government SMS syntax/grammar. Typos or awkward phrasing kill authority.',
      severity: 'Medium'
    },
    {
      id: '49',
      type: 'Brand Safety Fail',
      issue: '"Don\'t think so"',
      impact: 'Users trusting Reddit advice over official DoH text messages. "Authority Score" of random Redditor higher than DoH SMS.',
      severity: 'High'
    },
    {
      id: '50',
      type: 'Brand Safety Fail',
      issue: '"Free bird!"',
      impact: 'Users celebrating evading digital tracking ecosystem. Goal of user is to escape service ad is promoting.',
      severity: 'Critical'
    }
  ]

  // DARK SOCIAL - CLUSTER A: WHATSAPP WIRE (14 items)
  const whatsappWire = [
    {
      id: '01',
      signal: '"Sent this to family group"',
      source: 'Implied by Family Space features',
      significance: 'The "Family Group" is primary distribution node for health news.',
      category: 'Primary Distribution'
    },
    {
      id: '02',
      signal: '"Text the word [Hi] in a WhatsApp message"',
      source: 'Official encouragement',
      significance: 'DoH created dark social bot, acknowledging users prefer this over apps.',
      category: 'Official Acknowledgment'
    },
    {
      id: '03',
      signal: '"Please share the following through our Whatsapp number"',
      source: 'Official instruction',
      significance: 'Explicit instruction to use WhatsApp for official business (Home Isolation monitoring).',
      category: 'Official Channel'
    },
    {
      id: '04',
      signal: '"My WhatsApp group is panicking"',
      source: 'Scam Alert context',
      significance: 'Scams spread primarily via WhatsApp forwards ("Forwarded many times").',
      category: 'Misinformation Vector'
    },
    {
      id: '05',
      signal: '"Support their friends, family and communities"',
      source: 'Facebook MENA MD',
      significance: 'WhatsApp confirmed as primary support channel during crises.',
      category: 'Crisis Channel'
    },
    {
      id: '06',
      signal: '"Use WhatsApp more than ever"',
      source: 'Usage acknowledgment',
      significance: 'Acknowledgement of shift to private sharing.',
      category: 'Behavioral Shift'
    },
    {
      id: '07',
      signal: '"Automated WhatsApp Chatbot"',
      source: 'DataFlow group',
      significance: 'Using WhatsApp for verification support.',
      category: 'Service Delivery'
    },
    {
      id: '08',
      signal: '"WhatsApp Notifications"',
      source: 'Dawak app',
      significance: 'Adding WhatsApp push as preferred notification channel over SMS or App Push.',
      category: 'Preference Signal'
    },
    {
      id: '09',
      signal: '"Share your videos with friends, family"',
      source: 'YouTube default',
      significance: 'Low views imply shares happen via link copying rather than platform features.',
      category: 'Sharing Behavior'
    },
    {
      id: '10',
      signal: '"Mom forwarded this"',
      source: 'Refund Scam archetype',
      significance: 'Classic "Mom Forward" vector. Spreads because looks like helpful tip from trusted source.',
      category: 'Scam Vector'
    },
    {
      id: '11',
      signal: '"Confused about DHA and DoH?"',
      source: 'Dark Social FAQ',
      significance: 'Question originates in private conversations where expats navigate regulations.',
      category: 'Information Gap'
    },
    {
      id: '12',
      signal: '"Check your spam"',
      source: 'Pearson VUE instructions',
      significance: 'Implies email forwarding of exam results.',
      category: 'Document Sharing'
    },
    {
      id: '13',
      signal: '"Secure communication channels"',
      source: 'Mandate for encrypted sharing',
      significance: 'Preference for SMS/Email over public posting.',
      category: 'Privacy Preference'
    },
    {
      id: '14',
      signal: '"Voice Notes"',
      source: 'Doctor for Every Citizen',
      significance: 'Formalized version of "Doctor in the Family" WhatsApp voice note.',
      category: 'Health Consultation'
    }
  ]

  // DARK SOCIAL - CLUSTER B: REDDIT UNDERGROUND (17 items)
  const redditUnderground = [
    {
      id: '15',
      signal: '"Left home during quarantine"',
      source: 'r/abudhabi user',
      significance: 'User asking for validation of rules in private capacity. Question they are afraid to ask official channels.',
      category: 'Rule Clarification'
    },
    {
      id: '16',
      signal: '"Don\'t think so. They just verify..."',
      source: 'Peer-to-peer advice',
      significance: 'Stranger advice trusted more than DoH SMS.',
      category: 'Authority Override'
    },
    {
      id: '17',
      signal: '"Text message from DOH... Rereading it makes me feel dumber"',
      source: 'Screenshot sharing',
      significance: 'Sharing screenshots of official comms for ridicule/clarification. "Dark Social Satire."',
      category: 'Public Sentiment'
    },
    {
      id: '18',
      signal: '"How much do biomedical scientists get paid?"',
      source: 'Reddit discussion',
      significance: 'Salary sharing in semi-private anonymity. Taboo topic.',
      category: 'Compensation Transparency'
    },
    {
      id: '19',
      signal: '"DOH Exam" discussions',
      source: 'Student threads',
      significance: 'Sharing of exam tips/questions (Intellectual property leakage).',
      category: 'Exam Content'
    },
    {
      id: '20',
      signal: '"Process if you test positive"',
      source: 'User outline',
      significance: 'User outlining real process vs official process. "Here is what actually happens."',
      category: 'Ground Truth'
    },
    {
      id: '21',
      signal: '"Istijaba again... chaotic"',
      source: 'Real-time reporting',
      significance: 'Real-time ground reporting shared to community. "Shadow News."',
      category: 'Service Monitoring'
    },
    {
      id: '22',
      signal: '"Staff were making people go home"',
      source: 'Warning sharing',
      significance: 'Warning others to avoid specific centers. Impacts operational load.',
      category: 'Traffic Redirection'
    },
    {
      id: '23',
      signal: '"Stick with Pillars"',
      source: 'Competitor recommendation',
      significance: 'Recommendation of competitor apps.',
      category: 'Alternative Solutions'
    },
    {
      id: '24',
      signal: '"Not yet unfortunately"',
      source: 'Developer communication',
      significance: 'Developers communicating directly with users in threads. "Official" support happens in "Shadow" thread.',
      category: 'Direct Developer Access'
    },
    {
      id: '25',
      signal: '"MCAT Study Buddy"',
      source: 'Student organizing',
      significance: 'Students organizing study groups off-platform.',
      category: 'Academic Support'
    },
    {
      id: '26',
      signal: '"Help! App terminated"',
      source: 'Developer sharing',
      significance: 'Developers sharing Apple rejection notices.',
      category: 'Platform Issues'
    },
    {
      id: '27',
      signal: '"Confusion on regulations"',
      source: 'User debate',
      significance: 'Users debating "Green list" vs "Red list" countries.',
      category: 'Regulatory Clarity'
    },
    {
      id: '28',
      signal: '"Is it the 11th day?"',
      source: 'Rule nuance clarification',
      significance: 'Clarifying specific rule nuances that official FAQs missed.',
      category: 'Implementation Detail'
    },
    {
      id: '29',
      signal: '"My home country vaccination doesn\'t mean anything here"',
      source: 'Venting frustration',
      significance: 'Sentiment sharing and emotional processing.',
      category: 'Emotional Support'
    },
    {
      id: '30',
      signal: '"Free bird!"',
      source: 'Celebration',
      significance: 'Celebrating end of restrictions.',
      category: 'Policy Reaction'
    },
    {
      id: '31',
      signal: '"Annoying"',
      source: 'Sentiment expression',
      significance: 'Regarding licensing procedures.',
      category: 'Process Feedback'
    }
  ]

  // DARK SOCIAL - CLUSTER C: SCREENSHOT ECONOMY (10 items)
  const screenshotEconomy = [
    {
      id: '32',
      signal: '"Screenshot of the Fine"',
      source: 'Violation discussions',
      significance: 'Users share fine receipt to warn others.',
      category: 'Warning Sharing'
    },
    {
      id: '33',
      signal: '"Screenshot of the Watch Box"',
      source: 'Border experience',
      significance: '"Hand written by AD border official on the watch box." User shared photo to prove status.',
      category: 'Proof of Status'
    },
    {
      id: '34',
      signal: '"Screenshot of the Scam SMS"',
      source: 'DoH warning',
      significance: 'DoH posting screenshot of scam to warn users. "Anti-Scam" content is screenshot of Scam.',
      category: 'Anti-Scam Content'
    },
    {
      id: '35',
      signal: '"Screenshot of the Error Message"',
      source: 'User troubleshooting',
      significance: 'Users sharing errors with support or forums.',
      category: 'Troubleshooting'
    },
    {
      id: '36',
      signal: '"Screenshot of the Map"',
      source: 'Location sharing',
      significance: '"Nearest he was pointed to was Medeor." Sharing locations visually.',
      category: 'Location Sharing'
    },
    {
      id: '37',
      signal: '"Forwarding the PDF"',
      source: 'DoH Coronavirus document',
      significance: 'Likely circulated as PDF on WhatsApp, losing all tracking data.',
      category: 'Document Circulation'
    },
    {
      id: '38',
      signal: '"Forwarding the Kids Magazine"',
      source: 'PDF content',
      significance: 'Content designed for offline/private sharing. Meant to be printed or shown on tablet, not linked.',
      category: 'Educational Content'
    },
    {
      id: '39',
      signal: '"Nutri-Mark Labels"',
      source: 'Shopper behavior',
      significance: 'Shoppers sharing photos of food labels. "Look, this is healthy."',
      category: 'Health Information'
    },
    {
      id: '40',
      signal: '"GymNation Schedule"',
      source: 'Schedule sharing',
      significance: 'Sharing class times via screenshot.',
      category: 'Logistics Sharing'
    },
    {
      id: '41',
      signal: '"Event Invite"',
      source: 'Professional sharing',
      significance: '"Share with professionals handling patient data." Invites often screenshots of email.',
      category: 'Professional Invitation'
    }
  ]

  // DARK SOCIAL - CLUSTER D: PROFESSIONAL DARK SOCIAL (9 items)
  const professionalDarkSocial = [
    {
      id: '42',
      signal: '"Forwarded to my colleague"',
      source: 'ADHICS webinar invite',
      significance: 'Specialized B2B content travels via work email.',
      category: 'B2B Distribution'
    },
    {
      id: '43',
      signal: '"Sent to the IT department"',
      source: 'Malaffi error message',
      significance: 'Error message triggers B2B dark social interaction.',
      category: 'IT Escalation'
    },
    {
      id: '44',
      signal: '"Recruiting Strategy"',
      source: 'Snap recruiting',
      significance: 'Using Snapchat for recruiting (Word of mouth).',
      category: 'Talent Acquisition'
    },
    {
      id: '45',
      signal: '"Mentor Reviews"',
      source: 'ADPList',
      significance: 'Reviews shared privately between job seekers.',
      category: 'Career Development'
    },
    {
      id: '46',
      signal: '"CME Hours"',
      source: 'Doctor sharing',
      significance: 'Sharing webinar links for Continuing Medical Education credits. Motivation is compliance, not engagement.',
      category: 'Compliance'
    },
    {
      id: '47',
      signal: '"Job Search"',
      source: 'U.ae postings',
      significance: 'Sharing job postings with eligible friends.',
      category: 'Opportunity Sharing'
    },
    {
      id: '48',
      signal: '"Visa Updates"',
      source: 'Golden Visa news',
      significance: 'Sharing "Golden Visa" news with eligible friends.',
      category: 'Immigration Updates'
    },
    {
      id: '49',
      signal: '"Insurance Complaints"',
      source: 'Form sharing',
      significance: 'Sharing complaint forms with aggrieved patients.',
      category: 'Grievance Process'
    },
    {
      id: '50',
      signal: '"Telemedicine Links"',
      source: 'Family sharing',
      significance: 'Sharing "Doctor for Every Citizen" link with sick relatives.',
      category: 'Health Services'
    }
  ]

  // SURGICAL RECOMMENDATIONS
  const surgicalRecommendations = [
    {
      id: '01',
      title: 'Amputate the Dead Zones',
      prescription: 'Stop filming hour-long webinars for YouTube. Pivot to 60-second vertical "Shorts" that answer specific questions found on Reddit (e.g., "How to fix Malaffi login," "Where to get a PCR test today").',
      icon: 'scissors',
      priority: 'Critical'
    },
    {
      id: '02',
      title: 'Fix the Funnel Before Filling It',
      prescription: 'Pause all paid acquisition for Sahatna and Malaffi until the "Crash" and "Login" loops are resolved. Sending paid traffic to a 2-star app is burning money.',
      icon: 'syringe',
      priority: 'Critical'
    },
    {
      id: '03',
      title: 'Infiltrate the Shadows',
      prescription: 'Instead of fighting Dark Social, equip it. Create "Forward-able" assets—infographics, PDF checklists, and WhatsApp-native videos—designed to be shared in family groups. Acknowledge Reddit community by having official "ADPHC Support" presence that answers questions directly in threads.',
      icon: 'send',
      priority: 'High'
    }
  ]

  // VISUALIZATION DATA FOR CATALYST OPTIMIZATION PAGE
  const frictionTrendData = [
    { month: 'Aug', high: 5, medium: 12, low: 8 },
    { month: 'Sep', high: 4, medium: 10, low: 6 },
    { month: 'Oct', high: 3, medium: 8, low: 5 },
    { month: 'Nov', high: 3, medium: 7, low: 4 },
    { month: 'Dec', high: 2, medium: 5, low: 3 },
    { month: 'Jan', high: 2, medium: 5, low: 3 }
  ]

  const frictionResolutionData = [
    { name: 'Resolved', value: 45, color: CHART_COLORS.emerald },
    { name: 'In Progress', value: 12, color: CHART_COLORS.warning },
    { name: 'Pending', value: 18, color: CHART_COLORS.rose }
  ]

  const linguisticTrendData = [
    { month: 'Aug', score: 7.8 },
    { month: 'Sep', score: 8.1 },
    { month: 'Oct', score: 8.3 },
    { month: 'Nov', score: 8.5 },
    { month: 'Dec', score: 8.6 },
    { month: 'Jan', score: 8.7 }
  ]

  const wordResonanceData = [
    { word: 'innovative', resonance: 89 },
    { word: 'breakthrough', resonance: 84 },
    { word: 'accessible', resonance: 78 },
    { word: 'comprehensive', resonance: 76 },
    { word: 'exclusive', resonance: 72 },
    { word: 'transformative', resonance: 68 }
  ]

  const platformOptimizationData = [
    { month: 'Aug', linkedin: 72, tiktok: 58, instagram: 65, twitter: 61 },
    { month: 'Sep', linkedin: 75, tiktok: 62, instagram: 68, twitter: 64 },
    { month: 'Oct', linkedin: 78, tiktok: 65, instagram: 71, twitter: 67 },
    { month: 'Nov', linkedin: 81, tiktok: 68, instagram: 74, twitter: 70 },
    { month: 'Dec', linkedin: 84, tiktok: 71, instagram: 77, twitter: 73 },
    { month: 'Jan', linkedin: 85, tiktok: 73, instagram: 79, twitter: 75 }
  ]

  const abTestResultsData = [
    { test: 'Hook Timing', variantA: 45, variantB: 68, improvement: 51 },
    { test: 'CTA Position', variantA: 52, variantB: 61, improvement: 17 },
    { test: 'Color Scheme', variantA: 48, variantB: 55, improvement: 15 },
    { test: 'Caption Length', variantA: 39, variantB: 47, improvement: 21 },
    { test: 'Hashtag Count', variantA: 41, variantB: 58, improvement: 41 }
  ]

  const abConversionData = [
    { name: 'Improved', value: 4, color: CHART_COLORS.emerald },
    { name: 'No Change', value: 1, color: CHART_COLORS.secondary }
  ]

  const channelHealthData = [
    { channel: 'Organic Social', health: 85, reach: 2400000 },
    { channel: 'Paid Media', health: 78, reach: 850000 },
    { channel: 'Email', health: 92, reach: 450000 },
    { channel: 'Website', health: 88, reach: 1200000 },
    { channel: 'SMS', health: 95, reach: 180000 }
  ]

  const ecosystemGapsData = [
    { platform: 'TikTok', gap: 70, priority: 'high' },
    { platform: 'Dark Social', gap: 85, priority: 'high' },
    { platform: 'Reddit', gap: 65, priority: 'medium' },
    { platform: 'Podcast', gap: 55, priority: 'medium' },
    { platform: 'YouTube', gap: 45, priority: 'low' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Catalyst Optimization Grid</h1>
          <p className="text-muted-foreground">
            AI-powered real-time content optimization
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Run Analysis
          </Button>
          <Button size="sm">
            <Zap className="h-4 w-4 mr-2" />
            Auto-Optimize
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {optimizationMetrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      <Tabs defaultValue="friction-audit" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-6 w-full">
          <TabsTrigger value="friction-audit">Friction Audit</TabsTrigger>
          <TabsTrigger value="linguistic">Linguistic Engine</TabsTrigger>
          <TabsTrigger value="platform-optimization">Platform Stats</TabsTrigger>
          <TabsTrigger value="ab-testing">A/B Testing</TabsTrigger>
          <TabsTrigger value="channel-audit">Channel Audit</TabsTrigger>
          <TabsTrigger value="ecosystem-audit">Ecosystem Audit</TabsTrigger>
        </TabsList>

        <TabsContent value="friction-audit" className="space-y-6">
          <Alert className="border-amber-500 bg-amber-50 dark:bg-amber-950">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Friction Detected</AlertTitle>
            <AlertDescription>
              5 friction points identified across platforms. TikTok video hooks require immediate attention.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Platform Friction Analysis</h3>
              <Filter className="h-5 w-5 text-amber-500" />
            </div>
            <div className="space-y-4">
              {frictionPoints.map((point, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={
                          point.severity === 'high' ? 'destructive' :
                          point.severity === 'medium' ? 'default' : 'secondary'
                        }>
                          {point.severity}
                        </Badge>
                        <span className="font-semibold">{point.platform}</span>
                      </div>
                      <h4 className="font-medium">{point.issue}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{point.suggestion}</p>
                    </div>
                    <Badge variant={
                      point.status === 'resolved' ? 'default' :
                      point.status === 'in-progress' ? 'secondary' : 'outline'
                    }>
                      {point.status}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Performance Impact</span>
                      <span className="font-semibold text-rose-600">-{point.impact}%</span>
                    </div>
                    <Progress value={point.impact} className="h-2" />
                  </div>

                  {point.status !== 'resolved' && (
                    <Button variant="outline" size="sm" className="mt-3">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Apply Fix
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Friction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600">5</div>
                <p className="text-sm text-muted-foreground mt-1">Points identified</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-rose-600">-29.8%</div>
                <p className="text-sm text-muted-foreground mt-1">Performance loss</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Resolved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">1</div>
                <p className="text-sm text-muted-foreground mt-1">This week</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Friction Point Analytics" description="6-month friction reduction tracking and resolution status">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">Friction Reduction Trend</h4>
                <AreaChart
                  data={frictionTrendData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'high', name: 'High Severity', color: CHART_COLORS.rose },
                    { dataKey: 'medium', name: 'Medium Severity', color: CHART_COLORS.warning },
                    { dataKey: 'low', name: 'Low Severity', color: CHART_COLORS.info }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Resolution Status</h4>
                <PieChart
                  data={frictionResolutionData}
                  donut={true}
                  height={220}
                  showLegend={true}
                />
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="linguistic" className="space-y-6">
          <Alert className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950">
            <Languages className="h-4 w-4" />
            <AlertTitle>Linguistic Resonance Engine</AlertTitle>
            <AlertDescription>
              AI-powered word choice optimization based on platform-specific performance data.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">High-Resonance Vocabulary</h3>
              <MessageSquare className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {linguisticResonance.map((word, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">"{word.word}"</h4>
                      <Badge variant="outline" className="mt-1">{word.category}</Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald-600">{word.resonance}%</p>
                      <p className="text-xs text-muted-foreground">Resonance</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={
                      word.sentiment === 'positive' ? 'default' :
                      word.sentiment === 'negative' ? 'destructive' : 'secondary'
                    }>
                      {word.sentiment}
                    </Badge>
                    <div className="flex flex-wrap gap-1">
                      {word.platforms.map((platform, j) => (
                        <Badge key={j} variant="outline" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Resonance Score</span>
                      <span className="font-medium">{word.resonance}/100</span>
                    </div>
                    <Progress value={word.resonance} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Resonance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">8.7/10</div>
                <p className="text-sm text-muted-foreground mt-1">Across all vocabulary</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Words Tracked</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">2,341</div>
                <p className="text-sm text-muted-foreground mt-1">In vocabulary database</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Positive Words</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600">1,567</div>
                <p className="text-sm text-muted-foreground mt-1">High-performing</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Lift Achieved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">+47%</div>
                <p className="text-sm text-muted-foreground mt-1">Avg engagement lift</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Linguistic Resonance Analytics" description="Word performance tracking and linguistic score trends">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">Top Performing Words</h4>
                <BarChart
                  data={wordResonanceData}
                  xAxisKey="word"
                  bars={[
                    { dataKey: 'resonance', name: 'Resonance Score', color: CHART_COLORS.purple }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Linguistic Score Trend</h4>
                <AreaChart
                  data={linguisticTrendData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'score', name: 'Score /10', color: CHART_COLORS.indigo }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="platform-optimization" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Platform Optimization Statistics</h3>
              <BarChart3 className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {platformOptimizations.map((platform, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">{platform.platform}</h4>
                    <Badge variant="outline">{platform.optimizations} total</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-muted-foreground">Improvements</p>
                      <p className="text-2xl font-bold text-emerald-600">{platform.improvements}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Avg Lift</p>
                      <p className="text-2xl font-bold text-cyan-600">+{platform.avgLift}%</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Performance</span>
                      <span className="font-medium">{platform.avgLift}% above baseline</span>
                    </div>
                    <Progress value={platform.avgLift} className="h-2" />
                  </div>

                  <div className="mt-3 pt-3 border-t">
                    <p className="text-xs text-muted-foreground">Top Action</p>
                    <p className="text-sm font-medium">{platform.topAction}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Recent Optimization Results</h3>
            <div className="space-y-4">
              {recentOptimizations.map((opt, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{opt.content}</h4>
                      <div className="flex items-center gap-3 mt-2 text-sm">
                        <Badge variant="outline">{opt.type}</Badge>
                        <span className="text-muted-foreground">{opt.platform}</span>
                      </div>
                    </div>
                    <Badge variant={
                      opt.status === 'success' ? 'default' : 'secondary'
                    }>
                      {opt.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Before</p>
                      <p className="font-medium text-rose-600">{opt.before}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">After</p>
                      <p className="font-medium text-emerald-600">{opt.after}</p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Performance Lift</span>
                    <span className="text-lg font-bold text-emerald-600">+{opt.lift}%</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="ab-testing" className="space-y-6">
          <Alert className="border-purple-500 bg-purple-50 dark:bg-purple-950">
            <Beaker className="h-4 w-4" />
            <AlertTitle>Active A/B Tests</AlertTitle>
            <AlertDescription>
              4 tests currently running. 3 tests showing significant results. Continue monitoring for statistical significance.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Active A/B Tests</h3>
              <TrendingUp className="h-5 w-5 text-purple-500" />
            </div>
            <div className="space-y-4">
              {a_bTests.map((test, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{test.name}</h4>
                      <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                        <span>{test.platform}</span>
                        <span>•</span>
                        <span>{test.variants} variants</span>
                      </div>
                    </div>
                    <Badge variant={
                      test.status === 'active' ? 'default' : 'secondary'
                    }>
                      {test.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Leader</p>
                      <p className="font-semibold">{test.leader}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Lift</p>
                      <p className="font-semibold text-emerald-600">+{test.lift}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-semibold">{test.duration}</p>
                    </div>
                  </div>

                  {test.status === 'active' && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Confidence</span>
                        <span className="font-medium">
                          {test.lift > 50 ? '87%' : test.lift > 30 ? '72%' : '54%'}
                        </span>
                      </div>
                      <Progress value={test.lift > 50 ? 87 : test.lift > 30 ? 72 : 54} className="h-2" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Active Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
                <p className="text-sm text-muted-foreground mt-1">Currently running</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Completed Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">127</div>
                <p className="text-sm text-muted-foreground mt-1">This quarter</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Lift</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">+42%</div>
                <p className="text-sm text-muted-foreground mt-1">Winning variants</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Statistical Significance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600">94%</div>
                <p className="text-sm text-muted-foreground mt-1">Confidence level</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* CHANNEL TOXICITY & AD EFFICIENCY AUDIT TAB */}
        <TabsContent value="channel-audit" className="space-y-6">
          <Alert className="border-rose-500 bg-rose-50 dark:bg-rose-950">
            <AlertOctagon className="h-4 w-4" />
            <AlertTitle>Phase 2: Channel Toxicity & Algorithmic Friction Audit</AlertTitle>
            <AlertDescription>
              Comprehensive forensic audit revealing "Schism of Sentiment" - Force Multiplier on LinkedIn vs. Dead Zone on Facebook.
              Ad Efficiency Probe identifies "Negative Feedback Loop" in paid media strategy.
            </AlertDescription>
          </Alert>

          {/* EXECUTIVE SUMMARY */}
          <GlassPanel title='Executive Summary: Divergence of Public Sentiment' description='The DoH digital footprint characterized by platform-specific performance extremes' badge='Strategic Intelligence'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-indigo-500 bg-indigo-50/20">
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
              <Card className="border-l-4 border-l-cyan-500 bg-cyan-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Research Scope</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{executiveSummary.researchVectors}</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* SECTION 2.1: FACEBOOK DEAD ZONE */}
          <GlassPanel title='The "Facebook Dead Zone": Anatomy of a Ghost Town' description='Legacy Asset Liability - 100K+ followers, <0.1% engagement' badge='Hostile Territory'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-2 border-slate-300 bg-slate-50/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Ghost className="h-5 w-5 text-slate-400" />
                    <h4 className="font-bold text-slate-900">Vanity Metric Paradox</h4>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Follower Count</span>
                    <Badge variant="secondary" className="text-sm">{facebookDeadZone.followers}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Engagement Rate</span>
                    <Badge variant="destructive" className="text-sm">{facebookDeadZone.engagementRate}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Benchmark</span>
                    <Badge variant="outline" className="text-sm">{facebookDeadZone.benchmark}</Badge>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-xs text-slate-500"><strong>Authority Gap:</strong> {facebookDeadZone.authorityGap}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-300 bg-rose-50/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    <h4 className="font-bold text-slate-900">Algorithmic Death</h4>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-xs font-semibold text-slate-700 mb-1">Algorithm</p>
                    <p className="text-xs text-slate-600">{facebookDeadZone.algorithm}</p>
                  </div>
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-xs font-semibold text-slate-700 mb-1">Classification</p>
                    <p className="text-xs text-rose-700">{facebookDeadZone.classification}</p>
                  </div>
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-xs font-semibold text-slate-700 mb-1">Content Problem</p>
                    <p className="text-xs text-slate-600">{facebookDeadZone.contentType}</p>
                  </div>
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-xs font-semibold text-slate-700 mb-1">Scroll Factor</p>
                    <p className="text-xs text-slate-600">{facebookDeadZone.scrollFactor}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* SECTION 2.2: SCHISM OF SENTIMENT */}
          <GlassPanel title='The Schism of Sentiment: LinkedIn vs. Shadow Platforms' description='Divergent audience realities across platforms' badge='Audience Analysis'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {schismOfSentiment.map((platform, idx) => (
                <Card key={idx} className={`border-2 ${platform.platform.includes('LinkedIn') ? 'border-emerald-300 bg-emerald-50/30' : 'border-purple-300 bg-purple-50/30'}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {platform.platform.includes('LinkedIn') ? (
                          <Users className="h-5 w-5 text-emerald-500" />
                        ) : (
                          <RadioIcon className="h-5 w-5 text-purple-500" />
                        )}
                        <h4 className="font-bold text-slate-900">{platform.platform}</h4>
                      </div>
                      <Badge variant={platform.classification.includes('Force') ? 'default' : 'secondary'} className="text-xs">
                        {platform.classification}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-600 mt-2">{platform.environment}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="bg-white/50 p-2 rounded">
                        <span className="font-semibold">Incentives:</span> {platform.incentives}
                      </div>
                      <div className="bg-white/50 p-2 rounded">
                        <span className="font-semibold">Narrative:</span> {platform.narrative}
                      </div>
                      <div className="bg-white/50 p-2 rounded">
                        <span className="font-semibold">Sentiment:</span> {platform.sentiment}
                      </div>
                      <div className="bg-white/50 p-2 rounded">
                        <span className="font-semibold">Audience:</span> {platform.audience}
                      </div>
                      {platform.topics && (
                        <div className="bg-white/50 p-2 rounded">
                          <span className="font-semibold">Shadow Topics:</span>
                          <ul className="mt-1 ml-2">
                            {platform.topics.map((topic, i) => (
                              <li key={i} className="text-slate-600">• {topic}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="bg-white/50 p-2 rounded">
                        <span className="font-semibold">Risk:</span>
                        <p className="text-rose-700 mt-1">{platform.risk}</p>
                      </div>
                      {platform.verdict && (
                        <div className="bg-white/50 p-2 rounded">
                          <span className="font-semibold">Verdict:</span>
                          <p className="text-indigo-700 mt-1">{platform.verdict}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* SECTION 3: AD EFFICIENCY PROBE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title='The "Sehaty" Conversion Cliff' description='Paid media driving users to broken digital gateway' badge='Broken Funnel'>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="destructive" className="text-sm">{sehatyConversionCliff.app}</Badge>
                  <p className="text-xs text-slate-600">{sehatyConversionCliff.position}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-sm mb-3">UX Black Hole Issues</h5>
                  <div className="space-y-2">
                    {sehatyConversionCliff.uxIssues.map((issue, idx) => (
                      <Card key={idx} className="bg-rose-50/20 border border-rose-200">
                        <CardContent className="p-3">
                          <p className="text-xs font-semibold text-slate-900">{issue.issue}</p>
                          <p className="text-xs text-slate-600 mt-1">{issue.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Alert className="bg-rose-50 border-rose-300">
                  <TrendingDown className="h-4 w-4 text-rose-500" />
                  <AlertTitle className="text-sm">Negative Feedback Loop</AlertTitle>
                  <div className="text-xs space-y-1 mt-2">
                    <p>1. {sehatyConversionCliff.negativeLoop.step1}</p>
                    <p>2. {sehatyConversionCliff.negativeLoop.step2}</p>
                    <p>3. {sehatyConversionCliff.negativeLoop.step3}</p>
                    <p>4. {sehatyConversionCliff.negativeLoop.step4}</p>
                    <p>5. {sehatyConversionCliff.negativeLoop.step5}</p>
                  </div>
                  <p className="text-xs font-semibold text-rose-700 mt-3">{sehatyConversionCliff.implication}</p>
                </Alert>
              </div>
            </GlassPanel>

            <div className="space-y-6">
              <GlassPanel title='Malaffi: Invisible Data Exchange Friction' description='Marketing promises vs. user reality gap' badge='Trust Deficit'>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="h-5 w-5 text-amber-500" />
                    <h5 className="font-semibold text-sm">{malaffiFriction.product}</h5>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-emerald-50 p-2 rounded">
                      <span className="font-semibold">Marketing:</span>
                      <p className="text-slate-600 mt-1">{malaffiFriction.marketing}</p>
                    </div>
                    <div className="bg-rose-50 p-2 rounded">
                      <span className="font-semibold">Reality:</span>
                      <p className="text-slate-600 mt-1">{malaffiFriction.reality}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {malaffiFriction.issues.map((issue, idx) => (
                      <Card key={idx} className="bg-white/50 border border-amber-200">
                        <CardContent className="p-3">
                          <p className="text-xs font-semibold text-slate-900">{issue.name}</p>
                          <p className="text-xs text-slate-600 mt-1">{issue.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </GlassPanel>

              <GlassPanel title='Istijaba: Linguistic Targeting Mismatch' description='Language barrier creating algorithmic confusion' badge='Communication Gap'>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-3 rounded border border-amber-200">
                    <p className="text-xs font-semibold text-slate-900 mb-1">Service</p>
                    <p className="text-xs text-slate-700">{istijabaMismatch.service}</p>
                  </div>
                  <div className="bg-rose-50 p-3 rounded border border-rose-200">
                    <p className="text-xs font-semibold text-slate-900 mb-1">Mechanics</p>
                    <p className="text-xs text-slate-700">{istijabaMismatch.mechanics}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <p className="text-xs font-semibold text-slate-900 mb-1">Phenomenon</p>
                    <p className="text-xs text-slate-700">{istijabaMismatch.phenomenon}</p>
                  </div>
                  <Alert className="bg-rose-50 border-rose-300">
                    <Activity className="h-4 w-4 text-rose-500" />
                    <AlertDescription className="text-xs text-rose-900">
                      <strong>Result:</strong> {istijabaMismatch.result}
                    </AlertDescription>
                  </Alert>
                </div>
              </GlassPanel>
            </div>
          </div>

          {/* SECTION 4: ALGORITHMIC PHYSICS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title='The "Engagement Bait" Trap' description='Platforms prioritize high-arousal emotion (anger, joy, shock)' badge='Algorithm Analysis'>
              <Card className="bg-slate-50/30 border border-slate-300">
                <CardContent className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-900 mb-1">Platforms</p>
                    <div className="flex gap-1">
                      {engagementBaitTrap.platforms.map((p, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{p}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 mb-1">Priority</p>
                    <p className="text-xs text-slate-700">{engagementBaitTrap.priority}</p>
                  </div>
                  <div className="bg-rose-50 p-2 rounded">
                    <p className="text-xs font-semibold text-rose-900 mb-1">DoH Content Problem</p>
                    <p className="text-xs text-slate-700">{engagementBaitTrap.dohContent}</p>
                  </div>
                  <div className="bg-amber-50 p-2 rounded">
                    <p className="text-xs font-semibold text-amber-900 mb-1">The Dilemma</p>
                    <p className="text-xs text-slate-700">{engagementBaitTrap.dilemma}</p>
                  </div>
                  <Alert className="bg-rose-50 border-rose-300">
                    <XCircle className="h-3 w-3 text-rose-500" />
                    <AlertDescription className="text-xs text-rose-900">
                      <strong>Trapped:</strong> {engagementBaitTrap.trapped}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </GlassPanel>

            <GlassPanel title='Search vs. Feed: Missed Opportunity' description='Over-reliance on Push (Feed), under-investment in Pull (Search)' badge='Strategic Gap'>
              <Card className="bg-cyan-50/30 border border-cyan-300">
                <CardContent className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-900 mb-1">Misalignment</p>
                    <p className="text-xs text-slate-700">{searchVsFeed.misalignment}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 mb-2">User Search Intents</p>
                    <div className="space-y-1">
                      {searchVsFeed.userIntents.map((intent, i) => (
                        <div key={i} className="bg-white/50 p-2 rounded text-xs text-slate-700">
                          "{intent}"
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-rose-50 p-2 rounded">
                    <p className="text-xs font-semibold text-rose-900 mb-1">Current Friction</p>
                    <p className="text-xs text-slate-700">{searchVsFeed.friction}</p>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded">
                    <p className="text-xs font-semibold text-emerald-900 mb-1">Opportunity</p>
                    <p className="text-xs text-slate-700">{searchVsFeed.opportunity}</p>
                  </div>
                  <Alert className="bg-indigo-50 border-indigo-300">
                    <Search className="h-3 w-3 text-indigo-500" />
                    <AlertDescription className="text-xs text-indigo-900">
                      <strong>Recommendation:</strong> {searchVsFeed.recommendation}
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </GlassPanel>
          </div>

          {/* TABLES: METRIC ANALYSIS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title='Table 1: Platform Friction Matrix' description='Comparative analysis of platform performance' badge='Quantitative Evidence'>
              <Card className="overflow-x-auto">
                <CardContent className="p-0">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="p-2 text-left font-semibold">Platform</th>
                        <th className="p-2 text-left font-semibold">Followers</th>
                        <th className="p-2 text-left font-semibold">Engagement</th>
                        <th className="p-2 text-left font-semibold">Sentiment</th>
                        <th className="p-2 text-left font-semibold">Class</th>
                      </tr>
                    </thead>
                    <tbody>
                      {platformFrictionMatrix.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="p-2 font-medium border-r">{row.platform}</td>
                          <td className="p-2 border-r">{row.followers}</td>
                          <td className="p-2 border-r">{row.engagement}</td>
                          <td className="p-2 text-slate-600 border-r">{row.sentiment}</td>
                          <td className="p-2">
                            <Badge variant={
                              row.classification.includes('Hostile') ? 'destructive' :
                              row.classification.includes('Force') ? 'default' :
                              row.classification.includes('Shadow') ? 'secondary' : 'outline'
                            } className="text-xs">
                              {row.classification}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </GlassPanel>

            <GlassPanel title='Table 2: Ad Waste Calculator' description='The Broken Funnel - where budget is incinerated' badge='ROI Analysis'>
              <Card className="overflow-x-auto">
                <CardContent className="p-0">
                  <table className="w-full text-xs">
                    <thead className="bg-rose-100">
                      <tr>
                        <th className="p-2 text-left font-semibold">Stage</th>
                        <th className="p-2 text-left font-semibold">User Action</th>
                        <th className="p-2 text-left font-semibold">Friction</th>
                        <th className="p-2 text-left font-semibold">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adWasteCalculator.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-rose-50'}>
                          <td className="p-2 font-medium border-r">{row.stage}</td>
                          <td className="p-2 border-r">{row.action}</td>
                          <td className="p-2 text-rose-700 border-r">{row.friction}</td>
                          <td className="p-2 font-semibold text-rose-900">{row.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
              <Alert className="mt-4 bg-rose-50 border-rose-300">
                <AlertOctagon className="h-4 w-4 text-rose-500" />
                <AlertDescription className="text-xs text-rose-900">
                  <strong>Brand Damage Stage:</strong> Most critical - User who fails to log in becomes detractor, poisoning well for future acquisition.
                </AlertDescription>
              </Alert>
            </GlassPanel>
          </div>

          {/* SECTION 6: STRATEGIC IMPLICATIONS */}
          <GlassPanel title='Strategic Implications: Re-Calibrating the Ricochet Engine' description='4 strategic realignments for optimized distribution' badge='Action Plan'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {strategicImplications.map((implication, idx) => (
                <Card key={idx} className="border-2 border-indigo-300 bg-indigo-50/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="default" className="bg-indigo-600 text-xs">Directive {implication.id}</Badge>
                      <Wrench className="h-5 w-5 text-indigo-500" />
                    </div>
                    <h4 className="font-bold text-slate-900 mt-2">{implication.title}</h4>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {implication.recommendations.map((rec, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{rec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* CONCLUSION */}
          <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-300">
            <Shield className="h-4 w-4 text-indigo-500" />
            <AlertTitle className="font-bold text-indigo-900">Conclusion</AlertTitle>
            <AlertDescription className="text-sm text-slate-700 mt-2">
              The DoH digital posture is "Broadcast-Heavy" and "Friction-Blind." The path forward requires surgical separation of channels:
              <strong>LinkedIn for Strategy, Search for Utility, Physical Events for Community.</strong>
              Most importantly, it requires the discipline to stop advertising products that do not work.
              Only by resolving underlying friction—technical, linguistic, and bureaucratic—can the DoH turn its digital ecosystem from obstacles into true Force Multipliers.
            </AlertDescription>
          </Alert>
        </TabsContent>

        {/* FILE 07: ECOSYSTEM AUDIT TAB - DIGITAL NECROSIS */}
        <TabsContent value="ecosystem-audit" className="space-y-6">
          <Alert className="border-rose-500 bg-rose-50 dark:bg-rose-950">
            <Skull className="h-4 w-4" />
            <AlertTitle>Digital Necrosis, Ad-Spend Hemorrhage, and the Shadow Arteries of Public Health</AlertTitle>
            <AlertDescription>
              A Forensic Audit of the ADPHC Ecosystem revealing "High-Output, Low-Reception" failure with 150 evidence points across Dead Zones, Ad Performance, and Dark Social.
            </AlertDescription>
          </Alert>

          {/* EXECUTIVE SUMMARY */}
          <GlassPanel title="Executive Pathology: The Digital Health Vital Signs" description="Comprehensive forensic examination of the ADPHC digital ecosystem" badge="CRITICAL - INTERVENTION REQUIRED">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-rose-500 bg-rose-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <HeartPulse className="h-4 w-4 text-rose-500" />
                    Diagnosis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{digitalAuditSummary.diagnosis}</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 bg-purple-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <FileWarning className="h-4 w-4 text-purple-500" />
                    Core Thesis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{digitalAuditSummary.thesis}</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500 bg-amber-50/20 md:col-span-2">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Banknote className="h-4 w-4 text-amber-500" />
                    Vital Sign - Ad Spend Hemorrhage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{digitalAuditSummary.vitalSign}</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* DEAD ZONES - 4 CLUSTERS */}
          <div className="space-y-6">
            {/* CLUSTER A: WEBINAR GRAVEYARD */}
            <GlassPanel title="Cluster A: The Webinar Graveyard (Video Necrosis)" description="20 examples of digital ghosts - technically active but effectively dead" badge="50 Dead Zones">
              <Alert className="mb-4 bg-slate-50 border-slate-300">
                <Video className="h-4 w-4 text-slate-500" />
                <AlertDescription className="text-xs text-slate-700">
                  <strong>Definition:</strong> A "Dead Zone" or "Ghost Town" is a digital asset that requires ongoing maintenance but yields Return on Attention (ROA) approaching zero. These are "Zombie" assets—they walk, they consume budget, they are technically "live," but they possess no pulse.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {webinarGraveyard.map((item, idx) => (
                  <Card key={idx} className={`border-2 ${
                    item.status === 'Critical' ? 'border-rose-400 bg-rose-50/20' :
                    item.status === 'Decomposed' || item.status === 'Fossilized' ? 'border-slate-400 bg-slate-50/20' :
                    'border-amber-400 bg-amber-50/20'
                  }`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge variant={
                          item.status === 'Critical' ? 'destructive' :
                          item.status === 'Decomposed' || item.status === 'Fossilized' ? 'secondary' : 'default'
                        } className="text-xs">
                          {item.id} - {item.status}
                        </Badge>
                        <Skull className={`h-4 w-4 ${
                          item.status === 'Critical' ? 'text-rose-500' :
                          item.status === 'Decomposed' || item.status === 'Fossilized' ? 'text-slate-500' :
                          'text-amber-500'
                        }`} />
                      </div>
                      <CardTitle className="text-xs font-semibold mt-2">{item.source}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-600">Metric:</span>
                        <Badge variant="outline" className="text-xs font-mono">{item.metric}</Badge>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 mb-1">Topic:</p>
                        <p className="text-xs text-slate-700">{item.topic}</p>
                      </div>
                      <div className="bg-white/50 p-2 rounded border border-slate-200">
                        <p className="text-xs font-semibold text-rose-900 mb-1">Diagnosis:</p>
                        <p className="text-xs text-slate-700">{item.diagnosis}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>

            {/* CLUSTER B: SOCIAL MEDIA ECHO CHAMBER */}
            <GlassPanel title="Cluster B: The Social Media Echo Chamber" description="10 platforms exhibiting Broadcast Fatigue - unidirectional communication to void" badge="Social Necrosis">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {socialEchoChamber.map((item, idx) => (
                  <Card key={idx} className="border border-slate-300 bg-slate-50/30">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">{item.id}</Badge>
                        <Ghost className="h-4 w-4 text-slate-400" />
                      </div>
                      <CardTitle className="text-xs font-bold">{item.title}</CardTitle>
                      <p className="text-xs text-slate-600">{item.platform}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-white/50 p-2 rounded border border-slate-200">
                        <p className="text-xs text-slate-700">{item.issue}</p>
                      </div>
                      <Badge variant="secondary" className="mt-2 text-xs">{item.status}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>

            {/* CLUSTER C & D: APP GRAVEYARD + FORMAT FAILURES */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GlassPanel title="Cluster C: The App Graveyard" description="10 abandoned/low-use features consuming resources" badge="Feature Necrosis">
                <div className="space-y-3">
                  {appGraveyard.map((item, idx) => (
                    <Card key={idx} className="border border-slate-300">
                      <CardContent className="p-3">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <Badge variant="outline" className="text-xs mb-1">{item.id}</Badge>
                            <p className="text-xs font-bold text-slate-900">{item.app} - {item.feature}</p>
                          </div>
                          <Smartphone className="h-4 w-4 text-slate-400" />
                        </div>
                        <p className="text-xs text-slate-700">{item.issue}</p>
                        <Badge variant="secondary" className="mt-2 text-xs">{item.status}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel title="Cluster D: Contextual & Format Failures" description="10 systemic causes of digital necrosis" badge="Root Causes">
                <div className="space-y-3">
                  {formatFailures.map((item, idx) => (
                    <Card key={idx} className="border border-rose-300 bg-rose-50/20">
                      <CardContent className="p-3">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="text-xs">{item.id}</Badge>
                          <AlertTriangle className="h-4 w-4 text-rose-500" />
                        </div>
                        <p className="text-xs font-bold text-slate-900 mb-1">{item.failure}</p>
                        <p className="text-xs text-slate-700 mb-2">{item.description}</p>
                        <Badge variant="destructive" className="text-xs">{item.impact}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </div>

          {/* AD PERFORMANCE - 3 CLUSTERS */}
          <div className="space-y-6">
            {/* EXECUTIVE SUMMARY FOR AD PERFORMANCE */}
            <Alert className="bg-amber-50 border-amber-400">
              <Banknote className="h-4 w-4 text-amber-500" />
              <AlertTitle>The Hemorrhage of Ad Spend</AlertTitle>
              <AlertDescription className="text-sm text-slate-700 mt-2">
                Critical failure in "Post-Click Experience." Substantial budgets deployed to drive traffic into broken funnels—apps that crash, logins that loop—resulting in wasted dirhams and active generation of detractors.
              </AlertDescription>
            </Alert>

            {/* CRASH & BUG LOOP + TARGETING WASTE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GlassPanel title="Cluster A: Crash & Bug Loop" description="20 technical waste indicators - targeting failures" badge="Technical Hemorrhage">
                <div className="space-y-2 max-h-[500px] overflow-y-auto">
                  {crashBugLoop.map((item, idx) => (
                    <Card key={idx} className={`border-l-4 ${
                      item.severity === 'Critical' ? 'border-l-rose-500 bg-rose-50/20' :
                      item.severity === 'High' ? 'border-l-amber-500 bg-amber-50/20' :
                      'border-l-slate-400 bg-slate-50/20'
                    }`}>
                      <CardContent className="p-3">
                        <div className="flex items-start justify-between mb-1">
                          <Badge variant="outline" className="text-xs">{item.id}</Badge>
                          <Badge variant={item.severity === 'Critical' ? 'destructive' : 'secondary'} className="text-xs">
                            {item.severity}
                          </Badge>
                        </div>
                        <p className="text-xs font-bold text-slate-900">{item.issue}</p>
                        <p className="text-xs text-slate-600 mt-1">{item.source}</p>
                        <p className="text-xs text-slate-700 mt-1">{item.impact}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel title="Cluster B: Targeting Waste" description="20 contextual failures - wrong audience, wrong message" badge="Contextual Hemorrhage">
                <div className="space-y-2 max-h-[500px] overflow-y-auto">
                  {targetingWaste.map((item, idx) => (
                    <Card key={idx} className={`border-l-4 ${
                      item.severity === 'Critical' ? 'border-l-rose-500 bg-rose-50/20' :
                      item.severity === 'High' ? 'border-l-amber-500 bg-amber-50/20' :
                      'border-l-slate-400 bg-slate-50/20'
                    }`}>
                      <CardContent className="p-3">
                        <div className="flex items-start justify-between mb-1">
                          <Badge variant="outline" className="text-xs">{item.id}</Badge>
                          <Badge variant={item.severity === 'Critical' ? 'destructive' : 'secondary'} className="text-xs">
                            {item.severity}
                          </Badge>
                        </div>
                        <p className="text-xs font-bold text-slate-900">{item.issue}</p>
                        <p className="text-xs text-slate-600 mt-1">{item.source}</p>
                        <p className="text-xs text-slate-700 mt-1">{item.impact}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </GlassPanel>
            </div>

            {/* SCAM & TRUST VECTOR */}
            <GlassPanel title="Cluster C: Scam & Trust Vector" description="10 brand safety failures eroding digital authority" badge="Trust Collapse">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {scamTrustVector.map((item, idx) => (
                  <Card key={idx} className={`border-2 ${
                    item.severity === 'Critical' ? 'border-rose-400 bg-rose-50/30' :
                    'border-amber-400 bg-amber-50/30'
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className={`h-5 w-5 ${
                          item.severity === 'Critical' ? 'text-rose-500' : 'text-amber-500'
                        }`} />
                        <Badge variant={item.severity === 'Critical' ? 'destructive' : 'default'} className="text-xs">
                          {item.severity}
                        </Badge>
                      </div>
                      <p className="text-xs font-bold text-slate-900 mb-2">{item.issue}</p>
                      <p className="text-xs text-slate-700">{item.impact}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* DARK SOCIAL - 4 CLUSTERS */}
          <div className="space-y-6">
            {/* EXECUTIVE SUMMARY FOR DARK SOCIAL */}
            <Alert className="bg-purple-50 border-purple-400">
              <Share2 className="h-4 w-4 text-purple-500" />
              <AlertTitle>The Shadow Traffic Analysis</AlertTitle>
              <AlertDescription className="text-sm text-slate-700 mt-2">
                "Dark Social" refers to sharing through private channels (WhatsApp, Email, SMS, DMs) that analytics cannot track. The audience has bypassed the "Dead Zones" and resolved issues in the "Shadows"—an evolutionary adaptation to broken official channels.
              </AlertDescription>
            </Alert>

            {/* WHATSAPP WIRE + REDDIT UNDERGROUND */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GlassPanel title="Cluster A: The WhatsApp Wire" description="14 signals - the real news feed of UAE society" badge="Primary Distribution">
                <div className="space-y-3">
                  {whatsappWire.map((item, idx) => (
                    <Card key={idx} className="border border-green-300 bg-green-50/20">
                      <CardContent className="p-3">
                        <div className="flex items-start gap-3">
                          <MessageCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-xs">{item.id}</Badge>
                                                              <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                            </div>
                            <p className="text-xs font-semibold text-slate-900">"{item.signal}"</p>
                            <p className="text-xs text-slate-600 mt-1">{item.source}</p>
                            <p className="text-xs text-slate-700 mt-1">{item.significance}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel title="Cluster B: The Reddit Underground" description="17 signals - Tier 2 Support where truth lives" badge="Truth Seekers">
                <div className="space-y-3">
                  {redditUnderground.map((item, idx) => (
                    <Card key={idx} className="border border-orange-300 bg-orange-50/20">
                      <CardContent className="p-3">
                        <div className="flex items-start gap-3">
                          <Send className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-xs">{item.id}</Badge>
                              <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                            </div>
                            <p className="text-xs font-semibold text-slate-900">"{item.signal}"</p>
                                                            <p className="text-xs text-slate-600 mt-1">{item.source}</p>
                            <p className="text-xs text-slate-700 mt-1">{item.significance}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </GlassPanel>
            </div>

            {/* SCREENSHOT ECONOMY + PROFESSIONAL DARK SOCIAL */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GlassPanel title="Cluster C: The Screenshot Economy" description="10 signals - invisible sharing strips source and context" badge="Visual Viral">
                <div className="space-y-3">
                  {screenshotEconomy.map((item, idx) => (
                    <Card key={idx} className="border border-cyan-300 bg-cyan-50/20">
                      <CardContent className="p-3">
                        <div className="flex items-start gap-3">
                          <Camera className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-xs">{item.id}</Badge>
                              <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                            </div>
                                                            <p className="text-xs font-semibold text-slate-900">"{item.signal}"</p>
                            <p className="text-xs text-slate-600 mt-1">{item.source}</p>
                            <p className="text-xs text-slate-700 mt-1">{item.significance}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel title="Cluster D: Professional Dark Social" description="9 signals - B2B component of public health" badge="Enterprise Distribution">
                <div className="space-y-3">
                  {professionalDarkSocial.map((item, idx) => (
                    <Card key={idx} className="border border-indigo-300 bg-indigo-50/20">
                      <CardContent className="p-3">
                        <div className="flex items-start gap-3">
                          <Briefcase className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-xs">{item.id}</Badge>
                              <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                            </div>
                            <p className="text-xs font-semibold text-slate-900">"{item.signal}"</p>
                                                            <p className="text-xs text-slate-600 mt-1">{item.source}</p>
                            <p className="text-xs text-slate-700 mt-1">{item.significance}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </div>

          {/* SURGICAL RECOMMENDATIONS */}
          <GlassPanel title="Synthesis & Surgical Recommendations" description="The Prescription - Ricochet Intervention Protocol" badge="Treatment Plan">
            <Alert className="mb-6 bg-rose-50 border-rose-400">
              <AlertTriangle className="h-4 w-4 text-rose-500" />
              <AlertTitle className="font-bold text-rose-900">The Diagnosis</AlertTitle>
              <AlertDescription className="text-sm text-slate-700 mt-2">
                The ADPHC digital ecosystem is suffering from <strong>"Broadcast Necrosis"</strong> and <strong>"Shadow Drift."</strong><br />
                • <strong>Broadcast Necrosis:</strong> Official channels pumping out content that dies immediately—formatted for archives, not algorithms.<br />
                • <strong>Shadow Drift:</strong> The audience has drifted into Dark Social channels where they support each other, bypassing official tools due to technical friction.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {surgicalRecommendations.map((rec, idx) => (
                <Card key={idx} className={`border-2 ${
                  rec.priority === 'Critical' ? 'border-rose-400 bg-rose-50/30' :
                  'border-amber-400 bg-amber-50/30'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant={rec.priority === 'Critical' ? 'destructive' : 'default'} className="text-xs">
                        {rec.priority}
                      </Badge>
                      {rec.icon === 'scissors' && <Scissors className="h-5 w-5 text-rose-500" />}
                      {rec.icon === 'syringe' && <Syringe className="h-5 w-5 text-amber-500" />}
                      {rec.icon === 'send' && <Send className="h-5 w-5 text-purple-500" />}
                    </div>
                    <CardTitle className="text-base font-bold mt-2">{rec.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700">{rec.prescription}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert className="mt-6 bg-gradient-to-r from-rose-50 to-purple-50 border-rose-300">
              <HeartPulse className="h-4 w-4 text-rose-500" />
              <AlertTitle className="font-bold text-rose-900">Prognosis</AlertTitle>
              <AlertDescription className="text-sm text-slate-700 mt-2">
                The current digital pulse is weak. However, the high activity in the "Shadows" proves the audience <strong>is engaged</strong> and desperate for information—they just aren't finding it in the places ADPHC is currently looking. The path forward requires immediate strategic pivot from "Broadcast" to "Engagement."
              </AlertDescription>
            </Alert>
          </GlassPanel>

          {/* AUDIT FOOTER */}
          <Card className="border-2 border-slate-300 bg-slate-50/30">
            <CardContent className="p-4 text-center">
              <p className="text-xs text-slate-600 mb-1">Report Compiled By: Digital Audit Surgeon</p>
              <p className="text-xs text-slate-600">Date: January 11, 2026</p>
              <Badge variant="destructive" className="mt-3">STATUS: CRITICAL - INTERVENTION REQUIRED</Badge>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
