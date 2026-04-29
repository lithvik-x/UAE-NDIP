// @ts-nocheck
/**
 * CLAIRVOYANCE-CX Parsed Data Module
 *
 * Pre-parsed and structured data for all CLAIRVOYANCE-CX dashboard modules
 * extracted from markdown files in /docs/dashboard-data/CLAIRVOYANCE-CX/
 */

import type {
  ExecutiveBridgeData,
  OmniSurveillanceData,
  CrisisWarRoomData,
  NarrativeLabData,
  StrategicActionData,
  GeoIntelligenceData,
  CompetitiveIntelData,
  SystemGovernanceData,
  Campaign,
  ClairvoyanceLeadership,
  ClairvoyanceKPIs,
  InfodemicCase,
  SeasonalThreat,
  Influencer,
} from './types'

// ============================================================================
// EXECUTIVE BRIDGE DATA
// ============================================================================

export const executiveBridgeData: ExecutiveBridgeData = {
  leadership: [
    {
      officialRole: 'Chairman (DoH)',
      fullName: 'H.E. Mansoor Ibrahim Al Mansoori',
      status: 'Incumbent',
      notes: 'Focus: Digital transformation & Global partnerships',
    },
    {
      officialRole: 'Undersecretary (DoH)',
      fullName: 'H.E. Dr. Noura Khamis Al Ghaithi',
      status: 'Incumbent',
      notes: 'Focus: Clinical Quality (Muashir) & Genomics',
    },
    {
      officialRole: 'Director General (ADPHC)',
      fullName: 'H.E. Dr. Rashed Obaid Alsuwaidi',
      status: 'New Appointment',
      notes: 'Appointed Feb 2025/Active Jan 2026. Replaced Matar Al Nuaimi',
    },
  ],

  kpis: {
    hie: {
      programName: 'Malaffi (My File)',
      recordCount: '3.5 Billion+',
      connectivity: '100%',
      uniqueProfiles: '12.7 Million',
    },
    muashir: {
      programName: 'Abu Dhabi Healthcare Quality Index',
      ratingScale: '1 to 5 Diamonds',
      fiveDiamondHospitals: [
        'Cleveland Clinic Abu Dhabi (CCAD)',
        'Burjeel Medical City (BMC)',
      ],
    },
    sahatna: {
      programName: 'Sahatna (Our Health)',
      legacyApps: ['Abu Dhabi 360'],
      userStatistics: '1 Million+ Users',
      integrations: ['Genomic Reports', 'Malaffi Records'],
    },
    genomics: {
      programName: 'Emirati Genome Program',
      status: 'Mandatory (Premarital screening)',
      participants: '815,000+ Citizens',
      scope: '570 genes, 840+ genetic disorders',
    },
  },

  campaigns: [
    {
      theme: 'Seasonal Influenza',
      slogan: 'Stop the Spread',
      hashtags: ['#StopTheSpread', '#FluVaccine'],
    },
    {
      theme: 'Public Health Festival',
      slogan: 'Festival of Health',
      hashtags: ['#FestivalofHealth', '#AbuDhabiHealthyLiving'],
    },
    {
      theme: 'Community Component',
      slogan: 'For our Nation – Following the Path and Legacy of Zayed the Giver',
      subCampaign: 'Al-Fareej Activation',
      hashtags: ['#AlFareej'],
    },
    {
      theme: 'January Awareness',
      slogan: 'Cervical Cancer Awareness',
      hashtags: ['#CervicalCancerAwareness', '#EarlyDetection'],
    },
  ],

  recentUpdates: [
    'Dr. Rashed Obaid Alsuwaidi appointed as new Director General of ADPHC',
    'Malaffi achieves 3.5 billion+ clinical records milestone',
    'Sahatna super-app reaches 1 million users',
    'Emirati Genome Program becomes mandatory for premarital screening',
    'Burjeel Medical City achieves 5-Diamond status',
  ],
}

// ============================================================================
// OMNIS-SURVEILLANCE DATA
// ============================================================================

export const omniSurveillanceData: OmniSurveillanceData = {
  waterfallFeed: [
    {
      timestamp: '2025-01-13 09:15:00',
      source: '@DoHAbuDhabi',
      content: 'Stop the Spread! Get your flu vaccine today at any SEHA facility.',
      sentiment: 'positive',
      platform: 'X',
    },
    {
      timestamp: '2025-01-13 09:12:00',
      source: 'WhatsApp Group',
      content: 'Has anyone heard about the new virus spreading in Musaffah?',
      sentiment: 'concerned',
      platform: 'WhatsApp',
    },
    {
      timestamp: '2025-01-13 09:08:00',
      source: 'Reddit r/abudhabi',
      content: 'The Malaffi app is down again. Cannot access my records.',
      sentiment: 'negative',
      platform: 'Reddit',
    },
    {
      timestamp: '2025-01-13 09:05:00',
      source: '@ADPHC',
      content: 'Join us for the Festival of Health 2025! #AbuDhabiHealthyLiving',
      sentiment: 'positive',
      platform: 'Instagram',
    },
    {
      timestamp: '2025-01-13 09:00:00',
      source: 'ExpatWoman Forum',
      content: 'Insurance claim rejected again by Daman. This is frustrating.',
      sentiment: 'negative',
      platform: 'Forum',
    },
  ],

  printBroadcast: [
    {
      type: 'tv',
      source: 'Abu Dhabi TV',
      title: 'Health Minister announces new genomic initiatives',
      summary: 'Coverage of the Emirati Genome Program expansion',
      date: '2025-01-12',
    },
    {
      type: 'print',
      source: 'Al Ittihad',
      title: 'ADPHC launches cervical cancer awareness campaign',
      summary: 'Detailed coverage of January awareness initiatives',
      date: '2025-01-11',
    },
    {
      type: 'radio',
      source: 'Emarat FM (Ahla Sabah)',
      title: 'Your Health - Weekly Health Magazine',
      summary: 'Interview with Dr. Rashed Alsuwaidi on public health priorities',
      date: '2025-01-10',
    },
  ],

  darkWeb: [
    {
      source: 'Dark Web Forum',
      threat: 'Counterfeit Ozempic being sold in Abu Dhabi',
      severity: 'high',
      date: '2025-01-08',
    },
    {
      source: 'Telegram Channel',
      threat: 'Coordinated anti-vaccine campaign planned',
      severity: 'medium',
      date: '2025-01-07',
    },
  ],
}

// ============================================================================
// CRISIS WAR ROOM DATA
// ============================================================================

export const crisisWarRoomData: CrisisWarRoomData = {
  infodemicCases: [
    {
      name: 'Case Alpha: Marburg Virus Scare',
      typology: 'Bio-Security / Border Control',
      operationalContext: 'High-Anxiety / Pre-Summer Travel Window',
      threatLandscape: 'Global Marburg outbreaks in Equatorial Guinea and Tanzania',
      rumorMechanics: {
        narrative: 'Virus has already breached GCC borders',
        specificClaim: 'Travelers from Africa carrying virus undetected, government hiding Patient Zero',
        psychologicalDriver: 'Visceral nature of hemorrhagic fevers multiplies panic',
      },
      officialResponse: {
        date: 'April 4, 2023',
        denial: 'Virus has NOT been detected within the UAE',
        operationalInjects: [
          'Travel Advisory: Postpone travel to affected countries',
          'Isolation Protocol: Isolate if symptoms appear',
          'System Assurance: Surveillance very effective',
        ],
      },
      simulationArchitecture: [
        {
          phase: 'T-Minus 1 Hour',
          injectEvent: 'Intel Report: WHO confirms 9 deaths',
          decisionRequired: 'Monitor situation',
          consequence: 'No immediate impact',
        },
        {
          phase: 'T-Minus 0 Hour',
          injectEvent: 'Rumor Spike: Bleeding passenger at airport',
          decisionRequired: 'Ignore vs. Deny vs. Investigate',
          consequence: 'Ignore: Panic rises. Deny: Success with advisory',
        },
        {
          phase: 'T-Plus 2 Hours',
          injectEvent: 'Press Inquiry: Is MoHAP banning flights?',
          decisionRequired: 'Issue Statement',
          consequence: 'Correct: Issue advisory. Incorrect: Total ban (economic penalty)',
        },
      ],
    },
    {
      name: 'Case Beta: Post-Flood Dengue Crisis',
      typology: 'Climate Change / Vector-Borne Disease',
      operationalContext: 'Post-Disaster Recovery (April 2024 Floods)',
      threatLandscape: 'Historic rainfall created mosquito breeding sites',
      rumorMechanics: {
        narrative: 'Mysterious new virus killing workers',
        specificClaim: 'Unknown disease, doctors unable to diagnose',
      },
      officialResponse: {
        date: 'July/August 2024',
        denial: 'Not a mystery virus - it is Dengue Fever',
        operationalInjects: [
          'Elimination Narrative: 9 teams deployed to eliminate 409 breeding sites',
          'Targeted Demographics: Filipino/Tagalog campaign for migrant workers',
          'Symptom Management: Home care guidance to prevent ER overwhelm',
        ],
      },
      simulationArchitecture: [
        {
          phase: 'Day 0',
          injectEvent: 'Weather Event: Historic Rainfall',
          decisionRequired: 'Activate Flood Response',
          consequence: 'Trap: Focus only on drowning. Correct: Also order Vector Control',
        },
        {
          phase: 'Day 30',
          injectEvent: 'Clinical Signal: 40% increase in febrile illness',
          decisionRequired: 'Investigate',
          consequence: 'Insight: This is the Dengue Lag',
        },
        {
          phase: 'Day 45',
          injectEvent: 'Rumor: Mystery Virus in Musaffah',
          decisionRequired: 'Communication Strategy',
          consequence: 'Correct: Admit Dengue, launch elimination stats, Tagalog content',
        },
      ],
    },
    {
      name: 'Case Gamma: Recruitment Fraud',
      typology: 'Cyber-Crime / Institutional Reputation',
      operationalContext: 'Economic Growth / Healthcare Demand',
      threatLandscape: 'Fake recruitment agencies exploiting job seekers',
      rumorMechanics: {
        narrative: 'High-paying hospital jobs available immediately',
        specificClaim: 'Salary AED 5,000-8,000 + Free Housing + Instant Visa',
      },
      officialResponse: {
        date: 'July 2023 / Throughout 2024',
        denial: 'We have not appointed any agents, no fees charged',
        operationalInjects: [
          'Legal Deterrence: Filing cases with Dubai Police Cyber Crime',
          'Zero Fee Rule: Legitimate recruitment never requires payment',
        ],
      },
      simulationArchitecture: [
        {
          phase: 'Inject',
          injectEvent: 'Crisis: 50 nurses in lobby demanding jobs',
          decisionRequired: 'Security/Comms Response',
          consequence: 'Trap: Arrest victims. Correct: Humanitarian handling + Press release',
        },
        {
          phase: 'Intel',
          injectEvent: 'Cyber Report: Fake domain detected',
          decisionRequired: 'IT Action',
          consequence: 'Correct: Takedown via TRA/Cyber Security',
        },
      ],
    },
  ],

  seasonalThreats: [
    {
      name: 'Summer Protocol: Safety in Heat & Midday Break',
      operationalWindow: 'June 15 – September 15',
      primaryThreat: ['Heat Stress', 'Dehydration', 'Heat Stroke', 'Renal Failure'],
      regulatoryFramework: ['Midday Break is Federal Law', 'No outdoor work 12:30-3:00 PM'],
    },
    {
      name: 'Winter Respiratory Season',
      operationalWindow: 'November – February',
      primaryThreat: ['Influenza', 'COVID-19', 'RSV', 'Pneumonia'],
      regulatoryFramework: ['Vaccination campaigns', 'Mask mandates in healthcare'],
    },
    {
      name: 'Ramadan Health Considerations',
      operationalWindow: 'Variable (based on lunar calendar)',
      primaryThreat: ['Dehydration', 'Hypoglycemia', 'Medication timing issues'],
      regulatoryFramework: ['Medication adjustment guidelines', 'Iftar health tips'],
    },
    {
      name: 'Hajj Season Health Risks',
      operationalWindow: 'June-July (variable)',
      primaryThreat: ['MERS-CoV', 'Heat exhaustion', 'Communicable diseases'],
      regulatoryFramework: ['Vaccination requirements', 'Health certificates for pilgrims'],
    },
  ],

  threatMatrix: [
    { threat: 'Dengue Outbreak', probability: 65, impact: 80, readiness: 75 },
    { threat: 'Vaccine Misinformation', probability: 85, impact: 60, readiness: 70 },
    { threat: 'Heat Wave Emergency', probability: 70, impact: 75, readiness: 85 },
    { threat: 'Food Poisoning Event', probability: 45, impact: 70, readiness: 80 },
    { threat: 'New Virus Strain', probability: 30, impact: 95, readiness: 60 },
    { threat: 'Data Breach', probability: 40, impact: 85, readiness: 75 },
    { threat: 'Facility Incident', probability: 35, impact: 65, readiness: 80 },
    { threat: 'Influencer Malpractice', probability: 50, impact: 55, readiness: 70 },
  ],
}

// ============================================================================
// NARRATIVE LAB DATA
// ============================================================================

export const narrativeLabData: NarrativeLabData = {
  myths: [
    {
      rumor: 'Microchipped Vaccines',
      narrativeSnippet: 'COVID-19 vaccines will turn you into a microchipped zombie',
      underlyingBelief: 'Fear of state overreach and bodily autonomy loss',
      source: 'Gulf News',
      category: 'conspiracy',
    },
    {
      rumor: 'Rushed Vaccine Development',
      narrativeSnippet: 'Vaccine was developed too quickly, may not be effective',
      underlyingBelief: 'Skepticism toward rapid solutions, preference for traditional approaches',
      source: 'WE Forum',
      category: 'safety',
    },
    {
      rumor: 'Digital Health Surveillance',
      narrativeSnippet: 'Patient digital history could be used for non-clinical purposes',
      underlyingBelief: 'Data privacy concerns, potential misuse by authorities',
      source: 'ADU Repository',
      category: 'privacy',
    },
    {
      rumor: 'AI Diagnostics Untrustworthy',
      narrativeSnippet: 'AI cannot replace human judgment in healthcare',
      underlyingBelief: 'Preference for human judgment, distrust of opaque algorithms',
      source: 'ADU Repository',
      category: 'technology',
    },
  ],

  voids: [
    {
      topic: 'Sleep Disorders',
      demandSignal: 'Growing online interest in sleep health',
      culturalContext: 'Linked to mental well-being and productivity',
      adphcCoverageGap: 'No dedicated public campaign',
      opportunity: 'Frame sleep health as pillar of overall well-being',
    },
    {
      topic: 'Menopause Care',
      demandSignal: 'Rising interest among women 40+',
      culturalContext: 'Cultural taboos around aging and women health',
      adphcCoverageGap: 'Limited guidance beyond clinical settings',
      opportunity: 'Culturally sensitive, community-based support',
    },
    {
      topic: 'Chronic Pain Management',
      demandSignal: 'Patient frustration with opioid-phobic policies',
      culturalContext: 'Desire for holistic modern + traditional approaches',
      adphcCoverageGap: 'No community-facing support programs',
      opportunity: 'Integrated pain management protocols',
    },
    {
      topic: 'Long COVID',
      demandSignal: 'Support groups proliferating on social media',
      culturalContext: 'Significant patient population seeking guidance',
      adphcCoverageGap: 'No widely communicated rehab pathways',
      opportunity: 'Critical gap in post-acute care',
    },
  ],

  narratives: [
    {
      topic: 'Government Healthcare Progress',
      snippet: 'UAE continues to lead in healthcare innovation',
      underlyingBelief: 'Trust in government vision and progress',
      source: 'Official Channels',
      category: 'progress',
    },
    {
      topic: 'Digital Transformation Challenges',
      snippet: 'Apps crashing, data missing during transition',
      underlyingBelief: 'Growing pains of rapid digital adoption',
      source: 'Social Media Complaints',
      category: 'concern',
    },
    {
      topic: 'Healthcare Access Equity',
      snippet: 'Concerns about unequal access across emirates',
      underlyingBelief: 'Desire for universal access regardless of location',
      source: 'Expat Forums',
      category: 'equity',
    },
  ],

  sentimentTimeline: [
    { date: '2025-01-01', sentiment: 72, volume: 15420 },
    { date: '2025-01-02', sentiment: 68, volume: 18234 },
    { date: '2025-01-03', sentiment: 71, volume: 16543 },
    { date: '2025-01-04', sentiment: 74, volume: 19234 },
    { date: '2025-01-05', sentiment: 69, volume: 21876 },
    { date: '2025-01-06', sentiment: 73, volume: 18765 },
    { date: '2025-01-07', sentiment: 75, volume: 20123 },
    { date: '2025-01-08', sentiment: 72, volume: 17456 },
    { date: '2025-01-09', sentiment: 76, volume: 23456 },
    { date: '2025-01-10', sentiment: 78, volume: 25123 },
    { date: '2025-01-11', sentiment: 77, volume: 22890 },
    { date: '2025-01-12', sentiment: 74, volume: 19876 },
    { date: '2025-01-13', sentiment: 73, volume: 21345 },
  ],
}

// ============================================================================
// STRATEGIC ACTION DATA
// ============================================================================

export const strategicActionData: StrategicActionData = {
  campaigns: [
    {
      theme: 'Seasonal Influenza',
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
  ],

  calendar: [
    {
      date: '2025-01-15',
      action: 'Launch Festival of Health campaign',
      owner: 'Marketing Team',
      status: 'active',
    },
    {
      date: '2025-01-20',
      action: 'Release cervical cancer awareness video',
      owner: 'Content Team',
      status: 'planned',
    },
    {
      date: '2025-01-25',
      action: 'Host community health fair at Al Fahid',
      owner: 'Community Outreach',
      status: 'planned',
    },
    {
      date: '2025-02-01',
      action: 'Publish monthly health metrics report',
      owner: 'Analytics Team',
      status: 'planned',
    },
    {
      date: '2025-02-10',
      action: 'Influencer coordination meeting',
      owner: 'PR Team',
      status: 'planned',
    },
  ],

  editorialQueue: [
    {
      id: 'CNT-001',
      title: '5 Things You Need to Know About the Flu Vaccine',
      format: 'Instagram Carousel',
      status: 'scheduled',
      scheduledFor: '2025-01-15 10:00',
    },
    {
      id: 'CNT-002',
      title: 'Cervical Cancer: Dr. Fatima Answers Your Questions',
      format: 'Video Reel',
      status: 'scheduled',
      scheduledFor: '2025-01-16 14:00',
    },
    {
      id: 'CNT-003',
      title: 'What Happens at a Health Checkup?',
      format: 'TikTok Video',
      status: 'draft',
      scheduledFor: '2025-01-18 12:00',
    },
    {
      id: 'CNT-004',
      title: 'Myth vs Fact: Diabetes Edition',
      format: 'Infographic',
      status: 'review',
      scheduledFor: '2025-01-20 09:00',
    },
  ],
}

// ============================================================================
// GEO-INTELLIGENCE DATA
// ============================================================================

export const geoIntelligenceData: GeoIntelligenceData = {
  heatmap: [
    { region: 'Abu Dhabi Island', lat: 24.4539, lng: 54.3773, intensity: 85, category: 'high-engagement' },
    { region: 'Al Ain', lat: 24.2452, lng: 55.4296, intensity: 62, category: 'medium-engagement' },
    { region: 'Dubai', lat: 25.2048, lng: 55.2708, intensity: 78, category: 'high-engagement' },
    { region: 'Sharjah', lat: 25.3573, lng: 55.4034, intensity: 54, category: 'medium-engagement' },
    { region: 'Musaffah', lat: 24.3667, lng: 54.4833, intensity: 72, category: 'concern-area' },
    { region: 'Baniyas', lat: 24.5545, lng: 54.6818, intensity: 58, category: 'medium-engagement' },
    { region: 'Khalifa City', lat: 24.4167, lng: 54.5167, intensity: 64, category: 'medium-engagement' },
    { region: 'Yas Island', lat: 24.4944, lng: 54.6064, intensity: 45, category: 'low-engagement' },
    { region: 'Ruwais', lat: 24.0917, lng: 52.7339, intensity: 38, category: 'low-engagement' },
    { region: 'Ghayathi', lat: 23.2667, lng: 53.0833, intensity: 32, category: 'low-engagement' },
  ],

  facilities: [
    { name: 'Cleveland Clinic Abu Dhabi', type: 'Hospital', lat: 24.5028, lng: 54.3824, status: '5-Diamond' },
    { name: 'Burjeel Medical City', type: 'Hospital', lat: 24.3833, lng: 54.5167, status: '5-Diamond' },
    { name: 'SEHA Headquarters', type: 'Administrative', lat: 24.4539, lng: 54.3773, status: 'Active' },
    { name: 'ADPHC Headquarters', type: 'Administrative', lat: 24.4539, lng: 54.3773, status: 'Active' },
    { name: 'Al Mafraq Hospital', type: 'Hospital', lat: 24.4167, lng: 54.5167, status: '4-Diamond' },
    { name: 'Tawam Hospital', type: 'Hospital', lat: 24.4539, lng: 54.6167, status: '4-Diamond' },
  ],

  geoFences: [
    {
      name: 'Musaffah Industrial Zone',
      radius: 5000,
      lat: 24.3667,
      lng: 54.4833,
      alertTypes: ['vector-control', 'heat-stress', 'worker-health'],
    },
    {
      name: 'Abu Dhabi Island Core',
      radius: 10000,
      lat: 24.4539,
      lng: 54.3773,
      alertTypes: ['event-crowd', 'public-gathering', 'tourist-health'],
    },
    {
      name: 'Al Ain Agricultural Zone',
      radius: 8000,
      lat: 24.2452,
      lng: 55.4296,
      alertTypes: ['food-safety', 'pest-control', 'worker-health'],
    },
  ],
}

// ============================================================================
// COMPETITIVE INTEL DATA
// ============================================================================

export const competitiveIntelData: CompetitiveIntelData = {
  shareOfVoice: [
    { entity: 'DoH', percentage: 35, change: 2.5 },
    { entity: 'ADPHC', percentage: 22, change: 1.8 },
    { entity: 'SEHA', percentage: 18, change: -0.5 },
    { entity: 'Daman', percentage: 12, change: 0.3 },
    { entity: 'Dubai Health Authority', percentage: 8, change: -1.2 },
    { entity: 'MoHAP', percentage: 5, change: 0.0 },
  ],

  influencers: [
    {
      handle: '@alghawee',
      name: 'Ahmed Alghawi',
      communityBridge: 'Emirati youth → Government campaigns',
      engagementStyle: 'Relatable humor, local dialect',
      culturalRelevance: 'Resonates with young Emiratis',
      impact: 'High engagement on Instagram/TikTok',
    },
    {
      handle: '@nooralhudaofficial',
      name: 'Noor Al Huda',
      communityBridge: 'Arab moms → Vaccination info',
      engagementStyle: 'Personal stories, live Q&A',
      culturalRelevance: 'Shared experiences, authenticity',
      impact: 'Strong Arabic-speaking mom following',
    },
    {
      handle: '@emirates_mix',
      name: 'Emirates Mix',
      communityBridge: 'South Asian expats → Health services',
      engagementStyle: 'Multilingual posts (English, Hindi, Urdu)',
      culturalRelevance: 'Understands expat concerns',
      impact: 'High South Asian community engagement',
    },
    {
      handle: '@saoudalkaabi',
      name: 'Saoud Al Kaabi',
      communityBridge: 'Male fitness → Preventive care',
      engagementStyle: 'Data-driven, workout integration',
      culturalRelevance: 'Appeals to fitness enthusiasts',
      impact: 'Strong male following',
    },
    {
      handle: '@dradelsajwani',
      name: 'Dr. Adel Sajwani',
      communityBridge: 'Medical authority → Public education',
      engagementStyle: 'Evidence-based information',
      culturalRelevance: 'Trusted medical voice',
      impact: 'High credibility, broad reach',
    },
  ],

  mediaBias: [
    { source: 'Al Ittihad', bias: 'positive', coverage: 85 },
    { source: 'The National', bias: 'neutral', coverage: 72 },
    { source: 'Gulf News', bias: 'neutral', coverage: 68 },
    { source: 'Khaleej Times', bias: 'positive', coverage: 64 },
    { source: 'Al Khaleej', bias: 'positive', coverage: 58 },
  ],
}

// ============================================================================
// SYSTEM GOVERNANCE DATA
// ============================================================================

export const systemGovernanceData: SystemGovernanceData = {
  compliance: [
    { area: 'Data Privacy (GDPR)', status: 'compliant', lastAudit: '2024-12-15' },
    { area: 'ADHICS v2.0', status: 'compliant', lastAudit: '2024-11-20' },
    { area: 'SOC 2 Type II', status: 'compliant', lastAudit: '2024-10-10' },
    { area: 'ISO 27001', status: 'compliant', lastAudit: '2024-09-05' },
    { area: 'HIPAA', status: 'pending', lastAudit: '2024-08-01' },
    { area: 'FedRAMP', status: 'pending', lastAudit: 'N/A' },
  ],

  roles: [
    {
      role: 'Administrator',
      permissions: ['full-access', 'user-management', 'system-config', 'audit-log'],
      users: 5,
    },
    {
      role: 'Editor',
      permissions: ['content-create', 'content-edit', 'content-publish'],
      users: 15,
    },
    {
      role: 'Analyst',
      permissions: ['view-dashboard', 'export-reports', 'view-audit'],
      users: 42,
    },
    {
      role: 'Viewer',
      permissions: ['view-dashboard'],
      users: 128,
    },
  ],

  auditLog: [
    {
      timestamp: '2025-01-13 09:23:45',
      action: 'content_publish',
      user: 'sara.alhammadi@doh.gov.ae',
      resource: 'Post #45231 - Flu Campaign',
    },
    {
      timestamp: '2025-01-13 09:15:22',
      action: 'user_login',
      user: 'ahmed.alsuwaidi@adphc.gov.ae',
      resource: 'System Login',
    },
    {
      timestamp: '2025-01-13 09:00:11',
      action: 'data_export',
      user: 'analytics.team@doh.gov.ae',
      resource: 'Monthly Sentiment Report',
    },
    {
      timestamp: '2025-01-13 08:45:33',
      action: 'settings_change',
      user: 'admin@doh.gov.ae',
      resource: 'Alert Thresholds Updated',
    },
  ],
}

// ============================================================================
// EXPORTS
// ============================================================================

export const clairvoyanceData = {
  executiveBridge: executiveBridgeData,
  omniSurveillance: omniSurveillanceData,
  crisisWarRoom: crisisWarRoomData,
  narrativeLab: narrativeLabData,
  strategicAction: strategicActionData,
  geoIntelligence: geoIntelligenceData,
  competitiveIntel: competitiveIntelData,
  systemGovernance: systemGovernanceData,
}
