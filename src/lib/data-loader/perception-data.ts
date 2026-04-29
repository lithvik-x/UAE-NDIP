/**
 * PERCEPTION-X2 Parsed Data Module
 *
 * Pre-parsed and structured data for all PERCEPTION-X2 dashboard modules
 * extracted from markdown files in /docs/dashboard-data/PERCEPTION-X2/
 */

import type {
  OmniscientIntelligenceData,
  StrategyTargetingData,
  ProductionData,
  InfluenceData,
  OperationsData,
  AnalyticsData,
  GovernanceData,
  VoidFillerData,
  MediaForensicsData,
  PsychoSemanticData,
  CognitiveResilienceData,
  Persona,
  MythVector,
  VoidVector,
  Influencer,
} from './types'

// ============================================================================
// OMNISCIENT INTELLIGENCE DATA
// ============================================================================

export const omniscientIntelligenceData: OmniscientIntelligenceData = {
  darkSocial: [
    {
      platform: 'WhatsApp',
      mentions: 15420,
      sentiment: 62,
      topics: ['vaccine safety', 'hospital wait times', 'insurance claims'],
    },
    {
      platform: 'Telegram',
      mentions: 8234,
      sentiment: 48,
      topics: ['data privacy', 'mandates', 'exemptions'],
    },
    {
      platform: 'Facebook Groups',
      mentions: 12456,
      sentiment: 71,
      topics: ['community events', 'health tips', 'doctor recommendations'],
    },
    {
      platform: 'Discord',
      mentions: 3456,
      sentiment: 55,
      topics: ['medical students', 'health tech', 'research'],
    },
    {
      platform: 'Private Messages',
      mentions: 45123,
      sentiment: 58,
      topics: ['personal health questions', 'symptom sharing', 'clinic reviews'],
    },
  ],

  cognitiveMap: [
    {
      emotion: 'Trust',
      intensity: 72,
      drivers: ['Official sources', 'Personal doctors', 'Family recommendations'],
    },
    {
      emotion: 'Anxiety',
      intensity: 45,
      drivers: ['New policies', 'Unknown symptoms', 'Waiting times'],
    },
    {
      emotion: 'Confusion',
      intensity: 38,
      drivers: ['App changes', 'Complex procedures', 'Conflicting information'],
    },
    {
      emotion: 'Gratitude',
      intensity: 68,
      drivers: ['Successful treatments', 'Quick access', 'Caring staff'],
    },
    {
      emotion: 'Frustration',
      intensity: 52,
      drivers: ['Insurance rejections', 'App crashes', 'Long wait times'],
    },
    {
      emotion: 'Hope',
      intensity: 78,
      drivers: ['New treatments', 'Technology advances', 'Quality improvements'],
    },
    {
      emotion: 'Skepticism',
      intensity: 41,
      drivers: ['Rapid changes', 'Corporate interests', 'Data concerns'],
    },
  ],
}

// ============================================================================
// STRATEGY & TARGETING DATA
// ============================================================================

export const strategyTargetingData: StrategyTargetingData = {
  personas: [
    {
      name: 'The Concerned Mom',
      archetype: 'Family-First Protector',
      demographics: {
        age: '30-45',
        gender: 'Female',
        location: 'Abu Dhabi, Dubai',
        occupation: 'Homemaker / Part-time work',
      },
      psychographics: {
        values: ['Family safety', 'Natural remedies', 'Trusted doctors'],
        fears: ['Vaccine side effects', 'Big Pharma', 'Long-term effects'],
        motivations: ['Protect children', 'Make informed choices', 'Community belonging'],
      },
      behaviors: {
        mediaConsumption: ['Instagram', 'WhatsApp groups', 'School portals'],
        healthBehaviors: ['Pediatrician visits', 'Well-child checks', 'Vaccination'],
        decisionDrivers: ['Doctor advice', 'Peer recommendations', 'Personal research'],
      },
      painPoints: [
        'Conflicting vaccine information online',
        'Concern about too many vaccines at once',
        'Fear of ingredients and long-term effects',
      ],
    },
    {
      name: 'The Skeptical Expat',
      archetype: 'Information Skeptic',
      demographics: {
        age: '28-50',
        gender: 'Any',
        location: 'All Emirates',
        occupation: 'Professional / Skilled worker',
      },
      psychographics: {
        values: ['Personal freedom', 'Evidence-based decisions', 'Peer reviews'],
        fears: ['Privacy violations', 'Quality of care', 'System abuse'],
        motivations: ['Navigate system efficiently', 'Avoid complications', 'Share experiences'],
      },
      behaviors: {
        mediaConsumption: ['Reddit', 'Expat forums', 'Facebook groups'],
        healthBehaviors: ['Preventive care', 'Private insurance', 'Second opinions'],
        decisionDrivers: ['Online reviews', 'Expat networks', 'Cost-benefit analysis'],
      },
      painPoints: [
        'Insurance claim rejections and delays',
        'Difficulty finding English-speaking providers',
        'Unclear coverage and billing processes',
      ],
    },
    {
      name: 'The Wellness Professional',
      archetype: 'Health Optimizer',
      demographics: {
        age: '25-45',
        gender: 'Any',
        location: 'Urban areas',
        occupation: 'Corporate / Tech / Entrepreneur',
      },
      psychographics: {
        values: ['Performance', 'Longevity', 'Biohacking', 'Data-driven'],
        fears: ['Aging', 'Decline', 'Missed optimizations'],
        motivations: ['Maximize health span', 'Gain competitive edge', 'Track progress'],
      },
      behaviors: {
        mediaConsumption: ['LinkedIn', 'Podcasts', 'Research papers', 'Health tech'],
        healthBehaviors: ['Wearables', 'Supplements', 'Advanced testing', 'Preventive scans'],
        decisionDrivers: ['Scientific evidence', 'Quantified data', 'Expert recommendations'],
      },
      painPoints: [
        'Limited access to advanced diagnostics',
        'Conservative approach to preventive care',
        'Lack of personalized health optimization',
      ],
    },
    {
      name: 'The Traditionalist Elder',
      archetype: 'Heritage Keeper',
      demographics: {
        age: '55+',
        gender: 'Any',
        location: 'Community-based',
        occupation: 'Retired / Community leader',
      },
      psychographics: {
        values: ['Tradition', 'Faith', 'Family', 'Respect'],
        fears: ['Western interventions', 'Loss of culture', 'Being disregarded'],
        motivations: ['Maintain health', 'Community wellbeing', 'Religious duty'],
      },
      behaviors: {
        mediaConsumption: ['Local radio', 'Community centers', 'Family networks', 'Mosques'],
        healthBehaviors: ['Traditional medicine', 'Family doctor', 'Prayer', 'Home remedies'],
        decisionDrivers: ['Religious scholars', 'Family elders', 'Trusted physicians'],
      },
      painPoints: [
        'Language barriers in healthcare',
        'Disrespect for traditional practices',
        'Rushed consultations',
      ],
    },
    {
      name: 'The Tech-Optimist',
      archetype: 'Digital Native',
      demographics: {
        age: '18-35',
        gender: 'Any',
        location: 'Urban centers',
        occupation: 'Tech / Student / Startup',
      },
      psychographics: {
        values: ['Innovation', 'Efficiency', 'Convenience', 'Progress'],
        fears: ['Being left behind', 'Inefficiency', 'Outdated systems'],
        motivations: ['Embrace new tech', 'Share innovations', 'Build future'],
      },
      behaviors: {
        mediaConsumption: ['Twitter/X', 'Tech blogs', 'Conferences', 'YouTube'],
        healthBehaviors: ['Apps', 'Telemedicine', 'Wearables', 'Online booking'],
        decisionDrivers: ['Tech reviews', 'Early adopter feedback', 'Feature sets'],
      },
      painPoints: [
        'Apps that crash or are buggy',
        'Slow adoption of new technologies',
        'Resistance to digital-first approaches',
      ],
    },
    {
      name: 'The Faith-Oriented Individual',
      archetype: 'Spiritual Health Seeker',
      demographics: {
        age: 'Varies',
        gender: 'Any',
        location: 'Community-based',
        occupation: 'Varies',
      },
      psychographics: {
        values: ['Faith', 'Religious guidance', 'Community', 'Spiritual wellbeing'],
        fears: ['Sin', 'Divine testing', 'Moral failings'],
        motivations: ['Religious duty', 'Spiritual health', 'Community approval'],
      },
      behaviors: {
        mediaConsumption: ['Religious channels', 'Friday sermons', 'Faith leaders', 'Religious texts'],
        healthBehaviors: ['Prayer', 'Religious guidelines', 'Faith-based healers', 'Medical treatment'],
        decisionDrivers: ['Religious scholars', 'Scriptural interpretation', 'Faith community'],
      },
      painPoints: [
        'Conflict between science and faith',
        'Lack of religious guidance in health',
        'Secular-only health messaging',
      ],
    },
  ],

  painPoints: [
    { segment: 'Concerned Mom', pain: 'Vaccine safety information', frequency: 85, urgency: 78 },
    { segment: 'Skeptical Expat', pain: 'Insurance claim processes', frequency: 92, urgency: 88 },
    { segment: 'Wellness Professional', pain: 'Advanced diagnostics access', frequency: 45, urgency: 52 },
    { segment: 'Traditionalist Elder', pain: 'Language-appropriate care', frequency: 68, urgency: 72 },
    { segment: 'Tech-Optimist', pain: 'Digital app reliability', frequency: 74, urgency: 65 },
    { segment: 'Faith-Oriented', pain: 'Faith-integrated health guidance', frequency: 38, urgency: 42 },
    { segment: 'General Public', pain: 'Appointment wait times', frequency: 95, urgency: 91 },
    { segment: 'Chronic Patients', pain: 'Care coordination', frequency: 78, urgency: 85 },
  ],

  voids: [
    {
      topic: 'Sleep Disorders & Insomnia',
      demandSignal: 'Emerging online discussions, health trends',
      culturalContext: 'Linked to mental well-being and productivity',
      adphcCoverageGap: 'No dedicated public campaign',
      opportunity: 'Frame sleep health as pillar of overall well-being',
    },
    {
      topic: 'Menopause & Perimenopause Care',
      demandSignal: 'Rising interest among women 40+',
      culturalContext: 'Cultural taboos around aging and women health',
      adphcCoverageGap: 'Limited guidance beyond clinical settings',
      opportunity: 'Culturally sensitive, community-based support',
    },
    {
      topic: 'Chronic Pain Management',
      demandSignal: 'Patient frustration with opioid-phobic policies',
      culturalContext: 'Desire for holistic modern + traditional',
      adphcCoverageGap: 'No community-facing support programs',
      opportunity: 'Integrated pain management protocols',
    },
    {
      topic: 'Long COVID & Post-Viral Fatigue',
      demandSignal: 'Support groups proliferating on social media',
      culturalContext: 'Significant patient population seeking guidance',
      adphcCoverageGap: 'No widely communicated rehab pathways',
      opportunity: 'Critical gap in post-acute care',
    },
    {
      topic: 'Integrative/Functional Medicine',
      demandSignal: 'CAM market growing significantly',
      culturalContext: 'Strong interest in whole-person care',
      adphcCoverageGap: 'Largely silent on efficacy, regulation, integration',
      opportunity: 'Lead in evidence-based integrative health',
    },
    {
      topic: "Men's Health",
      demandSignal: 'Stigma preventing discussion, silent suffering',
      culturalContext: 'Masculinity norms discourage help-seeking',
      adphcCoverageGap: 'Limited targeted campaigns',
      opportunity: 'Normalize health discussions among men',
    },
  ],
}

// ============================================================================
// PRODUCTION DATA
// ============================================================================

export const productionData: ProductionData = {
  narrativeArchitecture: [
    {
      frame: 'Progress Narrative',
      tone: 'Optimistic, forward-looking',
      callToAction: 'Join us in building a healthier future',
    },
    {
      frame: 'Hero Narrative',
      tone: 'Celebrating champions',
      callToAction: 'Meet our healthcare heroes',
    },
    {
      frame: 'Victim Narrative',
      tone: 'Empathetic, supportive',
      callToAction: 'You are not alone in your health journey',
    },
    {
      frame: 'Urgency Narrative',
      tone: 'Time-sensitive, action-oriented',
      callToAction: 'Act now to protect your health',
    },
    {
      frame: 'Education Narrative',
      tone: 'Informative, clear',
      callToAction: 'Learn the facts about [topic]',
    },
  ],

  contentFactory: [
    {
      type: 'Social Post',
      templates: [
        'Announcement: New initiative launch',
        'Alert: Health warning or reminder',
        'Celebration: Achievement or milestone',
        'Education: Health tip or fact',
        'Story: Patient journey or testimonial',
      ],
      aiGenerated: true,
    },
    {
      type: 'Video Script',
      templates: [
        'Explainer: What you need to know about...',
        'Interview: Expert discusses...',
        'Story: Real patient experience',
        'Tutorial: How to use health service',
        'Animation: Visual health concept',
      ],
      aiGenerated: true,
    },
    {
      type: 'Press Release',
      templates: [
        'Announcement: New policy or program',
        'Response: Addressing concern or rumor',
        'Report: Monthly or annual health data',
        'Partnership: Collaboration announcement',
      ],
      aiGenerated: false,
    },
    {
      type: 'Infographic',
      templates: [
        'Statistics: Key health metrics',
        'Timeline: Program or initiative history',
        'Comparison: Before and after',
        'Process: How something works',
        'Checklist: Action items for public',
      ],
      aiGenerated: true,
    },
  ],

  toneCalibrator: [
    {
      dimension: 'Emotional Valence',
      settings: {
        positive: 'Use for celebrations, achievements, good news',
        neutral: 'Use for information, updates, facts',
        balanced: 'Use for serious topics with reassurance',
      },
    },
    {
      dimension: 'Language',
      settings: {
        arabic: 'Primary language for local population',
        english: 'Secondary, for expats and professionals',
        bilingual: 'Code-switching increases trust and relatability',
        multilingual: 'Include Urdu, Hindi for key communities',
      },
    },
    {
      dimension: 'Cultural Anchors',
      settings: {
        family: 'Frame health as family responsibility',
        unity: 'Emphasize collective wellbeing',
        pride: 'Connect to national pride and vision',
        islamic: 'Use Islamic values where appropriate',
      },
    },
    {
      dimension: 'Visual Style',
      settings: {
        localImagery: 'High-contrast images featuring local people',
        diversity: 'Reflect Abu Dhabi population diversity',
        authenticity: 'Real photos over stock photos',
        videoFirst: 'Video outperforms static images',
      },
    },
  ],
}

// ============================================================================
// INFLUENCE DATA
// ============================================================================

export const influenceData: InfluenceData = {
  nodeDirectory: [
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
      type: 'influencer',
      name: '@emirates_mix',
      reach: 156000,
      engagementRate: 4.5,
      costPerActivation: 2200,
      effectiveness: 78,
    },
    {
      type: 'influencer',
      name: '@saoudalkaabi',
      reach: 67000,
      engagementRate: 7.1,
      costPerActivation: 2500,
      effectiveness: 88,
    },
    {
      type: 'community',
      name: 'ExpatWoman Abu Dhabi',
      reach: 45000,
      engagementRate: 8.5,
      costPerActivation: 800,
      effectiveness: 75,
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
      name: 'Abu Dhabi TV Health',
      reach: 520000,
      engagementRate: 3.2,
      costPerActivation: 12000,
      effectiveness: 72,
    },
    {
      type: 'media',
      name: 'Emarat FM Health Segments',
      reach: 380000,
      engagementRate: 4.8,
      costPerActivation: 8500,
      effectiveness: 79,
    },
  ],

  microInfluencers: [
    {
      handle: '@dr.fatima.ahmed',
      name: 'Dr. Fatima Ahmed',
      communityBridge: 'Medical professionals → Public education',
      engagementStyle: 'Evidence-based, approachable',
      culturalRelevance: 'Female doctor, trusted voice',
      impact: 'High engagement in health topics',
    },
    {
      handle: '@momtalks.ae',
      name: 'Moms Talk UAE',
      communityBridge: 'Mothers → Child health information',
      engagementStyle: 'Shared experiences, tips',
      culturalRelevance: 'Understands mom life in UAE',
      impact: 'Strong community trust',
    },
    {
      handle: '@fit.with.ahmed',
      name: 'Ahmed Fitness',
      communityBridge: 'Fitness enthusiasts → Preventive health',
      engagementStyle: 'Workouts + health tips',
      culturalRelevance: 'Male health focus',
      impact: 'Reaches men who avoid typical health content',
    },
    {
      handle: '@elder.care.ua',
      name: 'Elder Care UAE',
      communityBridge: 'Caregivers → Elder health',
      engagementStyle: 'Supportive, informative',
      culturalRelevance: 'Respects family caregiving role',
      impact: 'Fills gap in elder health information',
    },
  ],

  grassroots: [
    {
      community: 'Filipino Community',
      leaders: ['Community nurses', 'Social workers', 'Religious leaders'],
      reach: 85000,
    },
    {
      community: 'South Asian Expats',
      leaders: ['Community doctors', 'Labor advocates', 'Media figures'],
      reach: 125000,
    },
    {
      community: 'Western Expats',
      leaders: ['Health coaches', 'Company doctors', 'Community managers'],
      reach: 62000,
    },
    {
      community: 'Emirati Youth',
      leaders: ['Young professionals', 'Social media personalities', 'Sports figures'],
      reach: 95000,
    },
  ],
}

// ============================================================================
// OPERATIONS DATA
// ============================================================================

export const operationsData: OperationsData = {
  campaigns: [
    {
      theme: 'Flu Prevention',
      slogan: 'Stop the Spread',
      hashtags: ['#StopTheSpread', '#FluVaccine'],
      startDate: '2024-10-01',
      endDate: '2025-03-31',
    },
    {
      theme: 'Cervical Cancer Awareness',
      slogan: 'Early Detection Saves Lives',
      hashtags: ['#CervicalCancerAwareness', '#EarlyDetection'],
      startDate: '2025-01-01',
      endDate: '2025-01-31',
    },
    {
      theme: 'Festival of Health',
      slogan: 'Your Health, Your Priority',
      hashtags: ['#FestivalofHealth', '#AbuDhabiHealthyLiving'],
      startDate: '2025-01-15',
      endDate: '2025-01-25',
    },
    {
      theme: 'Mental Health Awareness',
      slogan: 'It\'s Okay to Talk',
      hashtags: ['#MentalHealthAwareness', '#ItsOkayToTalk'],
      startDate: '2025-02-01',
      endDate: '2025-02-28',
    },
  ],

  controlDeck: {
    active: 4,
    scheduled: 12,
    completed: 48,
  },
}

// ============================================================================
// ANALYTICS DATA
// ============================================================================

export const analyticsData: AnalyticsData = {
  beliefTopology: [
    {
      category: 'Vaccine Safety',
      belief: 'Vaccines are safe and effective',
      evidence: ['WHO approval', 'Clinical trials', 'Real-world data'],
      counterArgument: 'Vaccines cause harm/contain trackers',
      prevalence: 72,
    },
    {
      category: 'Data Privacy',
      belief: 'Health data will be protected',
      evidence: ['GDPR compliance', 'Local data storage', 'Encryption'],
      counterArgument: 'Data will be used against me',
      prevalence: 58,
    },
    {
      category: 'Healthcare Quality',
      belief: 'Healthcare in Abu Dhabi is world-class',
      evidence: ['JCI accreditation', '5-Diamond ratings', 'Expert staff'],
      counterArgument: 'Care is declining/overcrowded',
      prevalence: 78,
    },
    {
      category: 'Digital Health',
      belief: 'Apps improve healthcare access',
      evidence: ['Convenience', '24/7 access', 'Integration'],
      counterArgument: 'Apps are buggy/invasive',
      prevalence: 65,
    },
    {
      category: 'Traditional Medicine',
      belief: 'Traditional remedies have value',
      evidence: ['Cultural heritage', 'Some scientific support'],
      counterArgument: 'Traditional medicine is unscientific',
      prevalence: 45,
    },
  ],

  roi: [
    {
      campaign: 'Flu Prevention 2024-25',
      investment: 450000,
      return: 1250000,
      percentage: 178,
    },
    {
      campaign: 'Festival of Health 2025',
      investment: 280000,
      return: 680000,
      percentage: 143,
    },
    {
      campaign: 'Cervical Cancer Awareness',
      investment: 120000,
      return: 340000,
      percentage: 183,
    },
    {
      campaign: 'Mental Health Campaign',
      investment: 180000,
      return: 420000,
      percentage: 133,
    },
  ],
}

// ============================================================================
// GOVERNANCE DATA
// ============================================================================

export const governanceData: GovernanceData = {
  regulatoryCompliance: [
    {
      area: 'Data Privacy',
      compliant: true,
      notes: 'Full GDPR and UAE data protection compliance',
    },
    {
      area: 'Content Accuracy',
      compliant: true,
      notes: 'Medical content reviewed by qualified professionals',
    },
    {
      area: 'Influencer Disclosure',
      compliant: true,
      notes: 'All paid partnerships clearly disclosed',
    },
    {
      area: 'Targeting Ethics',
      compliant: true,
      notes: 'No targeting of vulnerable populations with misleading content',
    },
    {
      area: 'Algorithmic Transparency',
      compliant: false,
      notes: 'AI decision-making processes need documentation',
    },
  ],

  supplyChain: [
    {
      component: 'Content Creation',
      risk: 'low',
      mitigation: 'In-house team + approved AI tools',
    },
    {
      component: 'Influencer Vetting',
      risk: 'medium',
      mitigation: 'Background checks, ongoing monitoring',
    },
    {
      component: 'Platform Dependencies',
      risk: 'high',
      mitigation: 'Multi-platform strategy, platform contingency plans',
    },
    {
      component: 'Data Sources',
      risk: 'low',
      mitigation: 'Verified sources, cross-referencing',
    },
  ],
}

// ============================================================================
// VOID FILLER DATA
// ============================================================================

export const voidFillerData: VoidFillerData = {
  biohacking: [
    { topic: 'Continuous Glucose Monitoring', demand: 72, coverage: 'low' },
    { topic: 'HRV Optimization', demand: 58, coverage: 'low' },
    { topic: 'NAD+ Therapy', demand: 45, coverage: 'low' },
    { topic: 'Peptide Therapy', demand: 38, coverage: 'low' },
    { topic: 'Cold Exposure Therapy', demand: 52, coverage: 'medium' },
  ],

  mensHealth: [
    { topic: 'Prostate Health', demand: 65, coverage: 'low' },
    { topic: 'TRT and Hormones', demand: 72, coverage: 'low' },
    { topic: 'Mental Health for Men', demand: 68, coverage: 'medium' },
    { topic: 'Cardiovascular Screening', demand: 58, coverage: 'medium' },
    { topic: 'Workplace Wellness', demand: 45, coverage: 'medium' },
  ],

  neurodivergent: [
    { topic: 'ADHD in Adults', demand: 62, coverage: 'low' },
    { topic: 'Autism Support', demand: 48, coverage: 'medium' },
    { topic: 'Sensory-Friendly Healthcare', demand: 42, coverage: 'low' },
    { topic: 'Neurodiversity at Work', demand: 38, coverage: 'low' },
    { topic: 'Executive Function Coaching', demand: 35, coverage: 'low' },
  ],
}

// ============================================================================
// MEDIA FORENSICS DATA
// ============================================================================

export const mediaForensicsData: MediaForensicsData = {
  cheerleaders: [
    { source: 'Al Ittihad', coverage: 85, sentiment: 88 },
    { source: 'Abu Dhabi TV', coverage: 78, sentiment: 92 },
    { source: 'Emarat FM', coverage: 72, sentiment: 85 },
    { source: 'UAE Official Media', coverage: 68, sentiment: 90 },
  ],

  critics: [
    { source: 'Anonymous Blogs', coverage: 25, sentiment: 22 },
    { source: 'Expat Forums', coverage: 45, sentiment: 38 },
    { source: 'Social Media Critics', coverage: 62, sentiment: 28 },
  ],

  sensationalists: [
    { source: 'Clickbait Sites', coverage: 35, sentiment: 45 },
    { source: 'Viral Accounts', coverage: 48, sentiment: 52 },
    { source: 'Drama Channels', coverage: 42, sentiment: 48 },
  ],
}

// ============================================================================
// PSYCHO-SEMANTIC DATA
// ============================================================================

export const psychoSemanticData: PsychoSemanticData = {
  temporalityOfTerror: [
    { threat: 'New Virus', immediacy: 95, duration: 180 },
    { threat: 'Cancer Diagnosis', immediacy: 88, duration: 365 },
    { threat: 'Chronic Disease', immediacy: 45, duration: 9999 },
    { threat: 'Seasonal Flu', immediacy: 62, duration: 120 },
    { threat: 'Lifestyle Disease', immediacy: 35, duration: 3650 },
  ],

  epistemologyOfPain: [
    { condition: 'Migraine', understanding: 72, stigma: 25 },
    { condition: 'Back Pain', understanding: 68, stigma: 18 },
    { condition: 'Fibromyalgia', understanding: 38, stigma: 58 },
    { condition: 'Depression', understanding: 65, stigma: 42 },
    { condition: 'Chronic Fatigue', understanding: 32, stigma: 68 },
  ],

  systemicFriction: [
    { friction: 'Insurance Approval', intensity: 85, frequency: 12450 },
    { friction: 'App Crashes', intensity: 72, frequency: 8234 },
    { friction: 'Wait Times', intensity: 78, frequency: 15678 },
    { friction: 'Language Barriers', intensity: 62, frequency: 6789 },
    { friction: 'Finding Doctors', intensity: 55, frequency: 9234 },
  ],
}

// ============================================================================
// COGNITIVE RESILIENCE DATA
// ============================================================================

export const cognitiveResilienceData: CognitiveResilienceData = {
  securityParadox: [
    { issue: 'Contact Tracing', security: 45, privacy: 32, balance: 38 },
    { issue: 'Vaccine Passports', security: 52, privacy: 28, balance: 42 },
    { issue: 'Health Records', security: 68, privacy: 55, balance: 62 },
    { issue: 'Genomic Data', security: 38, privacy: 22, balance: 28 },
  ],

  pharmacologicalFallacy: [
    {
      drug: 'Antibiotics',
      belief: 'Cures everything, harmless',
      reality: 'Resistance risk, specific use only',
    },
    {
      drug: 'Painkillers',
      belief: 'If OTC, must be safe',
      reality: 'Liver/kidney risks with overuse',
    },
    {
      drug: 'Supplements',
      belief: 'Natural = safe',
      reality: 'Unregulated, potential interactions',
    },
  ],

  nutritionalMirage: [
    {
      supplement: 'Vitamin D',
      claimed: 'Cures everything',
      proven: 'Bone health, immune support',
    },
    {
      supplement: 'Turmeric',
      claimed: 'Miracle anti-inflammatory',
      proven: 'Modest anti-inflammatory effect',
    },
    {
      supplement: 'Fish Oil',
      claimed: 'Heart health cure',
      proven: 'Modest cardiovascular benefit',
    },
  ],
}

// ============================================================================
// EXPORTS
// ============================================================================

export const perceptionData = {
  omniscientIntelligence: omniscientIntelligenceData,
  strategyTargeting: strategyTargetingData,
  production: productionData,
  influence: influenceData,
  operations: operationsData,
  analytics: analyticsData,
  governance: governanceData,
  voidFiller: voidFillerData,
  mediaForensics: mediaForensicsData,
  psychoSemantic: psychoSemanticData,
  cognitiveResilience: cognitiveResilienceData,
}
