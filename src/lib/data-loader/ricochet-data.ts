/**
 * RICOCHET-CATALYST-X Parsed Data Module
 *
 * Pre-parsed and structured data for all RICOCHET-CATALYST-X dashboard modules
 * extracted from markdown files in /docs/dashboard-data/RICOCHET-CATALYST-X/
 */

import type {
  CommandPrimeData,
  RicochetDistributionData,
  CatalystOptimizationData,
  AmplificationData,
  XFactorData,
  PhoenixData,
  UserData,
  AutomatedLogicData,
  KineticShellData,
  ContentPerformance,
  RatioAnalysis,
  ViralContent,
  PlatformFriction,
  InfluencerCampaign,
  AdPerformance,
  FormatGap,
  TimingOptimization,
  AmplificationNode,
} from './types'

// ============================================================================
// COMMAND PRIME DATA
// ============================================================================

export const commandPrimeData: CommandPrimeData = {
  liveStatus: {
    active: 8,
    scheduled: 15,
    paused: 3,
  },

  operationalHealth: {
    deployments: 156,
    successRate: 94.5,
    avgTimeToPublish: 4.2,
  },

  lifecycleTracker: [
    { phase: 'Content Creation', count: 12 },
    { phase: 'Review & Approval', count: 8 },
    { phase: 'Scheduled', count: 15 },
    { phase: 'Live/Active', count: 8 },
    { phase: 'Analyzing', count: 24 },
    { phase: 'Optimizing', count: 18 },
    { phase: 'Archived', count: 71 },
  ],
}

// ============================================================================
// RICOCHET DISTRIBUTION DATA
// ============================================================================

export const ricochetDistributionData: RicochetDistributionData = {
  platforms: [
    {
      name: 'X (Twitter)',
      connected: true,
      lastSync: '2025-01-13 09:15:00',
      performance: 78,
    },
    {
      name: 'Instagram',
      connected: true,
      lastSync: '2025-01-13 09:12:00',
      performance: 85,
    },
    {
      name: 'Facebook',
      connected: true,
      lastSync: '2025-01-13 09:10:00',
      performance: 62,
    },
    {
      name: 'LinkedIn',
      connected: true,
      lastSync: '2025-01-13 09:08:00',
      performance: 72,
    },
    {
      name: 'TikTok',
      connected: true,
      lastSync: '2025-01-13 09:05:00',
      performance: 92,
    },
    {
      name: 'YouTube',
      connected: true,
      lastSync: '2025-01-13 09:00:00',
      performance: 68,
    },
    {
      name: 'Snapchat',
      connected: false,
      lastSync: 'N/A',
      performance: 0,
    },
    {
      name: 'Pinterest',
      connected: false,
      lastSync: 'N/A',
      performance: 0,
    },
  ],

  scheduler: {
    timezone: 'GMT+4 (Abu Dhabi)',
    optimalTimes: {
      'X (Twitter)': ['08:00', '12:00', '18:00'],
      Instagram: ['07:00', '12:30', '19:00'],
      Facebook: ['09:00', '15:00', '20:00'],
      LinkedIn: ['08:30', '12:30', '17:30'],
      TikTok: ['07:00', '19:00', '22:00'],
      YouTube: ['09:00', '14:00', '20:00'],
    },
  },
}

// ============================================================================
// CATALYST OPTIMIZATION DATA
// ============================================================================

export const catalystOptimizationData: CatalystOptimizationData = {
  frictionAudit: [
    {
      platform: 'Facebook',
      frictionScore: 72,
      issues: ['Algorithm suppression', 'Aging demographic', 'Ad fatigue'],
    },
    {
      platform: 'Instagram',
      frictionScore: 38,
      issues: ['Reels algorithm favoritism', 'Hashtag effectiveness decline'],
    },
    {
      platform: 'X (Twitter)',
      frictionScore: 55,
      issues: ['Character limits', 'Rapid content decay', 'Bot interference'],
    },
    {
      platform: 'LinkedIn',
      frictionScore: 42,
      issues: ['Professional tone constraints', 'Limited multimedia support'],
    },
    {
      platform: 'TikTok',
      frictionScore: 18,
      issues: ['Content format requirements', 'Short attention span'],
    },
  ],

  linguisticEngine: [
    {
      language: 'Arabic',
      performance: 85,
      recommendations: [
        'Use positive emotional tone',
        'Include cultural anchors',
        'Frame as collective responsibility',
      ],
    },
    {
      language: 'English',
      performance: 72,
      recommendations: [
        'Keep messages concise',
        'Include call-to-action',
        'Use data-driven messaging',
      ],
    },
    {
      language: 'Urdu/Hindi',
      performance: 68,
      recommendations: [
        'Community-focused messaging',
        'Practical health information',
        'Respectful tone',
      ],
    },
    {
      language: 'Filipino/Tagalog',
      performance: 78,
      recommendations: [
        'Family-oriented messaging',
        'Practical health guidance',
        'Trust-building approach',
      ],
    },
  ],
}

// ============================================================================
// AMPLIFICATION & VIRAL ENGINEERING DATA
// ============================================================================

export const amplificationData: AmplificationData = {
  catalystNodes: [
    {
      type: 'influencer',
      name: '@alghawee',
      reach: 125000,
      engagementRate: 5.8,
      costPerActivation: 3500,
      effectiveness: 82,
    },
    {
      type: 'influencer',
      name: '@nooralhudaofficial',
      reach: 89000,
      engagementRate: 6.2,
      costPerActivation: 2800,
      effectiveness: 85,
    },
    {
      type: 'community',
      name: 'Moms of Abu Dhabi',
      reach: 38000,
      engagementRate: 9.2,
      costPerActivation: 600,
      effectiveness: 86,
    },
    {
      type: 'media',
      name: 'Abu Dhabi TV',
      reach: 520000,
      engagementRate: 3.2,
      costPerActivation: 12000,
      effectiveness: 72,
    },
  ],

  viralLoops: [
    {
      trigger: 'Urgent health alert',
      amplification: 450,
      duration: 48,
    },
    {
      trigger: 'Controversial topic',
      amplification: 680,
      duration: 72,
    },
    {
      trigger: 'Inspirational story',
      amplification: 320,
      duration: 96,
    },
    {
      trigger: 'Practical tip',
      amplification: 180,
      duration: 120,
    },
  ],
}

// ============================================================================
// X-FACTOR FORENSICS DATA
// ============================================================================

export const xFactorData: XFactorData = {
  shadowTraffic: [
    {
      source: 'WhatsApp Shares',
      estimated: 45000,
      actual: 12450,
      variance: 72,
    },
    {
      source: 'Screenshot Shares',
      estimated: 38000,
      actual: 9234,
      variance: 76,
    },
    {
      source: 'Dark Social Mentions',
      estimated: 25000,
      actual: 6789,
      variance: 73,
    },
    {
      source: 'Offline Conversations',
      estimated: 18000,
      actual: 0,
      variance: 100,
    },
  ],

  searchIntent: [
    { query: 'ADPHC vaccination centers', volume: 5400, intent: 'transactional' },
    { query: 'health insurance Abu Dhabi', volume: 8900, intent: 'informational' },
    { query: 'Malaffi app login', volume: 3200, intent: 'transactional' },
    { query: 'DoH hospital ratings', volume: 2100, intent: 'informational' },
    { query: 'Sahatna app download', volume: 1800, intent: 'transactional' },
    { query: 'Abu Dhabi health requirements', volume: 4500, intent: 'informational' },
    { query: 'flu vaccine near me', volume: 6700, intent: 'transactional' },
    { query: 'SEHA appointment booking', volume: 2800, intent: 'transactional' },
  ],

  platformPhysics: [
    {
      platform: 'Instagram',
      algorithmNotes: [
        'Reels prioritize watch time',
        'Carousel posts get more saves',
        'Stories build engagement',
        'Hashtags losing effectiveness',
      ],
    },
    {
      platform: 'TikTok',
      algorithmNotes: [
        'First 3 seconds critical',
        'Trending sounds boost reach',
        'Consistency matters',
        'Duets/Stitches drive engagement',
      ],
    },
    {
      platform: 'X (Twitter)',
      algorithmNotes: [
        'Rapid content decay',
        'Engagement velocity matters',
        'Thread format performs well',
        'Image tweets get 2x engagement',
      ],
    },
    {
      platform: 'LinkedIn',
      algorithmNotes: [
        'Professional tone required',
        'Document posts trending',
        'Comments matter more than likes',
        'Algorithm favors discussions',
      ],
    },
  ],
}

// ============================================================================
// PHOENIX CRISIS PROTOCOL DATA
// ============================================================================

export const phoenixData: PhoenixData = {
  threatLibrary: [
    {
      scenario: 'Viral Misinformation Outbreak',
      probability: 72,
      impact: 85,
      playbook: 'Immediate response + Expert rebuttal + Platform reporting',
    },
    {
      scenario: 'Influencer Negative Post',
      probability: 58,
      impact: 68,
      playbook: 'Direct outreach + Fact check + Public clarification',
    },
    {
      scenario: 'Data Breach Leak',
      probability: 25,
      impact: 95,
      playbook: 'Legal + PR + Technical response + Customer communication',
    },
    {
      scenario: 'App Outage During Crisis',
      probability: 42,
      impact: 78,
      playbook: 'Communication pivot + Alternative channels + Recovery plan',
    },
    {
      scenario: 'Coordinated Attack Campaign',
      probability: 18,
      impact: 88,
      playbook: 'Threat assessment + Platform liaison + Legal action',
    },
    {
      scenario: 'Health Emergency Misinformation',
      probability: 65,
      impact: 92,
      playbook: 'Rapid response + Health expert + Media coordination',
    },
    {
      scenario: 'Staff Misconduct Viral',
      probability: 22,
      impact: 90,
      playbook: 'Internal investigation + Public statement + Corrective action',
    },
    {
      scenario: 'Competitor Attack',
      probability: 35,
      impact: 62,
      playbook: 'Fact-based response + Focus on strengths + No engagement',
    },
    {
      scenario: 'Policy Backlash',
      probability: 55,
      impact: 75,
      playbook: 'Explanation + Q&A + Stakeholder communication',
    },
    {
      scenario: 'Partnership Crisis',
      probability: 28,
      impact: 70,
      playbook: 'Joint statement + Damage control + Continuity plan',
    },
  ],

  warRoom: {
    active: false,
    level: 0,
  },
}

// ============================================================================
// USER EXPERIENCE DATA
// ============================================================================

export const userData: UserData = {
  painPoints: [
    { point: 'App crashes on login', frequency: 8234, severity: 85 },
    { point: 'Cannot find vaccination center', frequency: 12456, severity: 72 },
    { point: 'Insurance not accepted online', frequency: 6789, severity: 88 },
    { point: 'Wait times not shown', frequency: 9234, severity: 65 },
    { point: 'Language switching issues', frequency: 4567, severity: 58 },
    { point: 'Appointment booking confusing', frequency: 15678, severity: 78 },
    { point: 'Records not syncing', frequency: 5432, severity: 82 },
    { point: 'Notifications not working', frequency: 6123, severity: 55 },
    { point: 'Support hard to reach', frequency: 7890, severity: 75 },
    { point: 'Prescription renewal unclear', frequency: 4567, severity: 68 },
    { point: 'Lab results delayed', frequency: 3456, severity: 62 },
    { point: 'Doctor profiles incomplete', frequency: 2345, severity: 45 },
  ],

  funnelBreaks: [
    { stage: 'Awareness', dropoff: 15 },
    { stage: 'Interest', dropoff: 28 },
    { stage: 'Consideration', dropoff: 42 },
    { stage: 'Intent', dropoff: 55 },
    { stage: 'Action', dropoff: 68 },
    { stage: 'Loyalty', dropoff: 22 },
  ],
}

// ============================================================================
// AUTOMATED LOGIC GATES DATA
// ============================================================================

export const automatedLogicData: AutomatedLogicData = {
  triggers: [
    {
      name: 'Crisis Trigger',
      condition: 'Negative sentiment > 70% AND volume > 1000/hr',
      action: 'Activate War Room mode',
    },
    {
      name: 'Anxiety Window',
      condition: 'Health anxiety keywords > 5x baseline',
      action: 'Deploy calming content',
    },
    {
      name: 'Broken Funnel',
      condition: 'App crash rate > 10% OR booking failure > 25%',
      action: 'Alert technical team + publish workaround',
    },
    {
      name: 'Viral Rocket',
      condition: 'Post engagement > 5x average within 1 hour',
      action: 'Boost spend + Amplify across channels',
    },
    {
      name: 'Misinformation Surge',
      condition: 'Rumor关键词 spike > 300% in dark social',
      action: 'Activate myth-busting protocol',
    },
  ],

  windows: [
    {
      name: 'Golden Hour',
      start: '08:00',
      end: '10:00',
      sensitivity: 85,
    },
    {
      name: 'Lunch Break',
      start: '12:00',
      end: '14:00',
      sensitivity: 65,
    },
    {
      name: 'Evening Commute',
      start: '17:00',
      end: '19:00',
      sensitivity: 78,
    },
    {
      name: 'Prime Time',
      start: '20:00',
      end: '22:00',
      sensitivity: 92,
    },
  ],
}

// ============================================================================
// GLOBAL KINETIC SHELL DATA
// ============================================================================

export const kineticShellData: KineticShellData = {
  velocityRail: [
    {
      stage: 'Content Ideation',
      duration: 2,
      optimization: ['AI topic suggestions', 'Trend analysis', 'Gap identification'],
    },
    {
      stage: 'Content Creation',
      duration: 4,
      optimization: ['AI-assisted writing', 'Template library', 'Multilingual generation'],
    },
    {
      stage: 'Review & Approval',
      duration: 24,
      optimization: ['Parallel review', 'Automated compliance check', 'Expedited lanes'],
    },
    {
      stage: 'Scheduling',
      duration: 1,
      optimization: ['Optimal timing AI', 'Platform-specific formatting', 'Bulk scheduling'],
    },
    {
      stage: 'Publishing',
      duration: 0.5,
      optimization: ['Instant deployment', 'Platform auto-posting', 'Confirmation alerts'],
    },
    {
      stage: 'Amplification',
      duration: 48,
      optimization: ['Auto-boost triggers', 'Influencer notification', 'Cross-platform sync'],
    },
    {
      stage: 'Analysis',
      duration: 72,
      optimization: ['Real-time dashboards', 'Automated insights', 'ROI calculation'],
    },
    {
      stage: 'Optimization',
      duration: 24,
      optimization: ['Performance-based adjustments', 'A/B testing', 'Content recycling'],
    },
  ],

  chronobiology: [
    { time: '06:00-08:00', effectiveness: 58, audience: ['Early risers', 'Parents'] },
    { time: '08:00-10:00', effectiveness: 82, audience: ['Commuters', 'Workers'] },
    { time: '10:00-12:00', effectiveness: 75, audience: ['Office workers', 'Students'] },
    { time: '12:00-14:00', effectiveness: 65, audience: ['Lunch break browsers'] },
    { time: '14:00-17:00', effectiveness: 55, audience: ['Students', 'Flexible workers'] },
    { time: '17:00-19:00', effectiveness: 78, audience: ['Commuters', 'Parents'] },
    { time: '19:00-21:00', effectiveness: 92, audience: ['General public', 'Families'] },
    { time: '21:00-23:00', effectiveness: 68, audience: ['Night owls', 'Youth'] },
    { time: '23:00-06:00', effectiveness: 28, audience: ['Night workers', 'Insomniacs'] },
  ],

  overrides: [
    {
      type: 'Emergency Override',
      condition: 'Crisis mode activated',
      action: 'Bypass approval, instant publish, all channels',
    },
    {
      type: 'Opportunity Override',
      condition: 'Trending topic detected > 10x volume',
      action: 'Pause scheduled, create trend-response content',
    },
    {
      type: 'Compliance Override',
      condition: 'Regulatory change announced',
      action: 'Queue compliance content, prioritize above all',
    },
    {
      type: 'Quality Override',
      condition: 'Performance below threshold',
      action: 'Pause platform, review and optimize',
    },
  ],
}

// ============================================================================
// CONTENT FORENSICS DATA (RATIO + ZERO-ENGAGEMENT)
// ============================================================================

export const ratioAnalysis: RatioAnalysis[] = [
  {
    archetype: 'The Amnesty Paradox',
    trigger: 'Health insurance fine waivers announced',
    forensicDisconnect: 'Broadcasted policy without addressing user journey',
    engagementForensics: 'Low likes, high comments - ratio driven by frustration',
    narrativeExtraction: [
      {
        sentiment: 'The "Catch-22" Loop',
        forensicDiagnosis: 'Procedural deadlock between agencies creates helplessness',
      },
      {
        sentiment: 'The "Ghost Protocol" Complaint',
        forensicDiagnosis: 'Customer service gap - no response to emails',
      },
      {
        sentiment: 'The "Exemption" Confusion',
        forensicDiagnosis: 'Targeting failure - exempt users flagged for fines',
      },
    ],
    ricochetInsight: 'Content failed without Friction Audit - needed to answer "how" not just "what"',
  },
  {
    archetype: 'The Digital Wall',
    trigger: 'PureHealth/Malaffi transition',
    forensicDisconnect: 'Celebrating innovation while users locked out',
    engagementForensics: 'Generic approval likes vs. technical complaint comments',
    narrativeExtraction: [
      {
        sentiment: 'The "Login" Failure',
        forensicDiagnosis: 'Disruption of habit - new app degrades UX',
      },
      {
        sentiment: 'The "Data Gap" Anxiety',
        forensicDiagnosis: 'Trust erosion - missing health data triggers panic',
      },
      {
        sentiment: 'The "Cross-Border" Block',
        forensicDiagnosis: 'Edge-case neglect - inter-emirate commuters invisible',
      },
    ],
    ricochetInsight: 'Utility trumps aesthetics - broken app will ratio celebration video',
  },
]

export const zeroEngagementZones = [
  {
    type: 'Flu Vaccine Stock Photo Paradox',
    diagnosis: 'Visual fatigue, safety trap, lack of narrative arc',
    impact: '<10 likes, 0 shares',
  },
  {
    type: 'Regulatory Update PDF Screenshot',
    diagnosis: 'Platform mismatch, illegible, B2B/B2C confusion',
    impact: '<10 likes, 0 shares',
  },
  {
    type: 'Generic Health Day Greeting',
    diagnosis: 'Zero value proposition, no local context',
    impact: '<10 likes, 0 shares',
  },
  {
    type: 'Antibiotic Awareness Lecture',
    diagnosis: 'Lecture tone, visual stagnation',
    impact: '<10 likes, 0 shares',
  },
  {
    type: 'Executive Meeting Handshake',
    diagnosis: 'Handshake killer, internal ego, negative value',
    impact: '<10 likes, 0 shares',
  },
]

// ============================================================================
// VIRAL REVERSE-ENGINEERING DATA (THE ROCKETS)
// ============================================================================

export const viralContent: ViralContent[] = [
  {
    topic: 'Festival of Health Launch',
    platform: 'Instagram',
    format: 'Reel with local music',
    hook: 'Abu Dhabi\'s biggest health event is HERE! 🎉',
    whyItWorked: 'Combination of urgency, excitement, local music, clear CTA',
    metrics: {
      views: 450000,
      likes: 24500,
      shares: 5200,
      comments: 1850,
    },
  },
  {
    topic: 'Doctor Myth-Busting',
    platform: 'TikTok',
    format: 'Stitch format responding to myth',
    hook: 'Doctors are tired of this myth... let\'s bust it',
    whyItWorked: 'Authenticity, authority, relatable frustration, educational',
    metrics: {
      likes: 18500,
      shares: 4200,
      comments: 2100,
    },
  },
  {
    topic: 'Real Patient Story',
    platform: 'Instagram',
    format: 'Carousel testimonial',
    hook: 'I thought it was just a checkup...',
    whyItWorked: 'Emotional storytelling, relatable journey, happy ending',
    metrics: {
      likes: 12800,
      shares: 3400,
      comments: 890,
    },
  },
]

// ============================================================================
// EXPORTS
// ============================================================================

export const ricochetData = {
  commandPrime: commandPrimeData,
  ricochetDistribution: ricochetDistributionData,
  catalystOptimization: catalystOptimizationData,
  amplification: amplificationData,
  xFactor: xFactorData,
  phoenix: phoenixData,
  userExperience: userData,
  automatedLogic: automatedLogicData,
  kineticShell: kineticShellData,
  contentForensics: {
    ratioAnalysis,
    zeroEngagementZones,
    viralContent,
  },
}
