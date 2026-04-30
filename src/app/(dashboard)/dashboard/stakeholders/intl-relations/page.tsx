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
  BarChart,
  PieChart,
  LineChart,
  AreaChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  Shield,
  TrendingUp,
  Zap,
  Building,
  Globe2,
  Users,
  Landmark,
  Handshake,
  Activity,
  Calendar,
  Target,
  Radio,
  Award,
  FileText,
  AlertOctagon,
  Crosshair,
  MapPin,
  Flag,
  Network,
  Megaphone,
  Heart,
  Scale,
  Tv,
  Cloud,
  Cpu,
  DollarSign,
  UsersRound,
  Triangle,
  Building2,
  Plane,
  HandshakeIcon,
  GlobeIcon,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useStakeholderOverviewData,
  useIntlRelationsData,
} from '@/lib/data-loader'
import type { StakeholderIntelligence } from '@/lib/data-loader'
import {
  intlRelationsData,
  gccSoftPowerData,
  gccSummitData,
  arabLeagueIntlData,
  oicIntlData,
  bilateralRelationsData,
  crisisResponseIntlData,
  multilateralPositioningIntlData,
  threatIndicatorIntlData,
  intlRelationsSourceCredibility,
} from '@/lib/data-loader/stakeholder-data'

// ============================================================================
// COMPREHENSIVE DATA FROM MD 7-10
// ============================================================================

// Source Credibility Matrix (Tier 0-4)
const sourceCredibilityMatrix = [
  { source: 'GCC Secretariat', tier: 0, credibility: 'Official Government', url: 'https://www.gcc-sg.org', uaeRelevance: 'Critical', dataQuality: 'Primary' },
  { source: 'UAE Ministry of Foreign Affairs', tier: 0, credibility: 'Official Government', url: 'https://www.mofa.gov.ae', uaeRelevance: 'Critical', dataQuality: 'Primary' },
  { source: 'UAE Cabinet', tier: 0, credibility: 'Official Government', url: 'https://uaecabinet.ae', uaeRelevance: 'Critical', dataQuality: 'Primary' },
  { source: 'UAE UN Mission', tier: 0, credibility: 'Official Government', url: 'https://uaeun.org', uaeRelevance: 'Critical', dataQuality: 'Primary' },
  { source: 'Belfer Center (Harvard)', tier: 1, credibility: 'Elite Think Tank', url: 'https://www.belfercenter.org', uaeRelevance: 'Critical', dataQuality: 'High' },
  { source: 'Arab League', tier: 1, credibility: 'Official Org', url: 'Multiple', uaeRelevance: 'High', dataQuality: 'High' },
  { source: 'Arab Center DC', tier: 1, credibility: 'Think Tank', url: 'https://arabcenterdc.org', uaeRelevance: 'Critical', dataQuality: 'High' },
  { source: 'Chatham House', tier: 1, credibility: 'Elite Think Tank', url: 'https://www.chathamhouse.org', uaeRelevance: 'High', dataQuality: 'High' },
  { source: 'Gulf Research Center', tier: 1, credibility: 'Regional Think Tank', url: 'https://www.grc.net', uaeRelevance: 'Critical', dataQuality: 'High' },
  { source: 'ICIJ', tier: 1, credibility: 'Investigative Journalism', url: 'https://www.icij.org', uaeRelevance: 'High', dataQuality: 'Verified' },
  { source: 'UN Counter-Terrorism', tier: 0, credibility: 'Official UN', url: 'https://www.un.org', uaeRelevance: 'High', dataQuality: 'Primary' },
  { source: 'Security Council Report', tier: 1, credibility: 'UN Specialist', url: 'https://www.securitycouncilreport.org', uaeRelevance: 'Medium', dataQuality: 'High' },
  { source: 'Clingendael', tier: 1, credibility: 'Elite Think Tank', url: 'https://www.clingendael.org', uaeRelevance: 'High', dataQuality: 'High' },
  { source: 'Quincy Institute', tier: 2, credibility: 'Policy Institute', url: 'https://quincyinst.org', uaeRelevance: 'High', dataQuality: 'Medium' },
  { source: '7amleh', tier: 2, credibility: 'Palestinian NGO', url: 'https://7amleh.org', uaeRelevance: 'High', dataQuality: 'Verified' },
  { source: 'Al-Monitor', tier: 2, credibility: 'Regional Media', url: 'https://www.al-monitor.com', uaeRelevance: 'Medium', dataQuality: 'Medium' },
  { source: 'Middle East Monitor', tier: 2, credibility: 'Media/Think Tank', url: 'https://www.middleeastmonitor.com', uaeRelevance: 'Medium', dataQuality: 'Medium' },
  { source: 'European Times', tier: 3, credibility: 'News Media', url: 'https://europeantimes.org', uaeRelevance: 'Medium', dataQuality: 'Medium' },
  { source: 'Manara Magazine', tier: 2, credibility: 'Regional Media', url: 'https://manaramagazine.org', uaeRelevance: 'Medium', dataQuality: 'Medium' },
  { source: 'The Brand Berries', tier: 2, credibility: 'Regional Media', url: 'https://thebrandberries.com', uaeRelevance: 'Medium', dataQuality: 'Medium' },
  { source: 'Sage Journals', tier: 1, credibility: 'Academic', url: 'https://journals.sagepub.com', uaeRelevance: 'Medium', dataQuality: 'High' },
  { source: 'Habtoor Research', tier: 2, credibility: 'Research Org', url: 'https://www.habtoorresearch.com', uaeRelevance: 'High', dataQuality: 'Medium' },
  { source: 'MBRSG', tier: 2, credibility: 'UAE Academic', url: 'https://mbrsg.ae', uaeRelevance: 'Critical', dataQuality: 'High' },
]

// GCC Soft Power Data
const gccSoftPower = {
  gspiRank: 10,
  gccRank: 1,
  softPowerScore: 59.4,
  softPowerPillars: [
    'Humanitarian',
    'Scientific/Academic',
    'National Representatives',
    'People',
    'Cultural/Media',
    'Economic Diplomacy',
  ],
  softPowerCouncilEstablished: '2017',
  softPowerStrategyLaunch: 'September 2017',
  majorInitiatives: [
    'Office for Public and Cultural Diplomacy: 2018',
    'Government Experience Exchange Program: 2018',
    'Emirates Mars Mission Hope Probe: 2020 (first Arab probe to Mars)',
    'Rashid lunar rover: 2022',
    'First Emirati astronaut (Hazzaa Al Mansoori): 2019',
    'MBRGI (Mohammed bin Rashid Al Maktoum Global Initiatives)',
    'Dubai Humanitarian logistics hub',
    'Khalifa bin Zayed Al Nahyan Foundation (KBZF)',
    'Masdar City: Initiated 2006',
    'Century 2071 Plan',
    'Louvre Abu Dhabi: 2017',
    'Guggenheim Abu Dhabi: Expected 2026',
    'Sorbonne Universite Abu Dhabi: 2006',
    'NYU Abu Dhabi: 2010',
    'Dubai Knowledge Village/DIAC: 2003',
    'Abu Dhabi F1 Grand Prix: Since 2009',
    'Manchester City takeover: 2008',
  ],
  humanitarianLeadership: {
    gazaAidRank: '2nd largest donor (after US) in 2024',
    lebanonAidRank: '3rd donor in 2024',
    cop28Hosted: '2023 - UAE Consensus adopted',
    hydrogenTarget: '25% global low-carbon hydrogen market share by 2030',
  },
}

// GCC Cultural Strategy
const gccCulturalStrategy = {
  period: '2020-2030',
  jointActivities: 'Approved',
  keyInitiatives: [
    'Alignment of cultural activities with Gulf Cultural Strategy',
    'Joint cultural projects encouragement',
    'Gulf Tourism Strategy: Joint promotional programs',
    'Gulf Tourism Platform: Digital gateway for regional travel',
  ],
  firstTimeSummits: [
    { name: 'GCC-China', year: '2024' },
    { name: 'GCC-ASEAN', year: '2023' },
    { name: 'GCC-EU', year: '2024' },
    { name: 'GCC-Central Asia', year: '2024' },
  ],
}

// GCC-EU Summits
const gccEuSummits = [
  { name: '1st GCC-EU Summit', date: 'October 16, 2024', location: 'Brussels', outcome: 'Strategic Partnership for Peace and Prosperity', tier: 0 },
  { name: '2nd GCC-EU Summit', date: '2026', location: 'Saudi Arabia', outcome: 'Planned', tier: 0 },
  { name: '2nd High-Level Ministerial Forum on Regional Security', date: 'October 5, 2025', location: 'Kuwait', outcome: 'Security Dialogue', tier: 0 },
  { name: '2nd GCC-EU Regional Security Dialogue', date: 'April 24, 2025', location: 'Brussels', outcome: 'Security Cooperation', tier: 0 },
  { name: 'Maritime Security Seminar', date: 'May 15-16, 2025', location: 'Brussels', outcome: 'Maritime', tier: 0 },
  { name: 'EU-GCC Cyber Diplomacy Roundtable', date: 'October 1-2, 2025', location: 'Riyadh', outcome: 'Cybersecurity', tier: 0 },
  { name: 'Directors of Criminal Investigation Meeting', date: 'February 5, 2025', location: 'Abu Dhabi', outcome: 'Law Enforcement', tier: 0 },
  { name: '8th GCC-EU Business Forum', date: 'October 2024', location: 'Doha', outcome: 'Trade', tier: 0 },
  { name: '9th GCC-EU Business Forum', date: 'November 5-6, 2025', location: 'Kuwait', outcome: 'Trade', tier: 0 },
  { name: '14th GCC-EU Macro-economic Dialogue', date: 'December 2025', location: 'TBD', outcome: 'Economic', tier: 0 },
  { name: '1st GCC-EU Parliamentary Meeting', date: 'June 24, 2025', location: 'Abu Dhabi', outcome: 'Legislative', tier: 0 },
  { name: '33rd EU-GCC Joint Cooperation Committee', date: 'September 5, 2025', location: 'Brussels', outcome: 'Cooperation', tier: 0 },
  { name: '26th GCC-EU Political Committee', date: 'May 15, 2025', location: 'Riyadh', outcome: 'Political', tier: 0 },
  { name: '2nd GCC-EU Young Leaders in Regional Diplomacy', date: 'October 6, 2025', location: 'Kuwait', outcome: '14 diplomats', tier: 0 },
]

// GCC Framing Divergence
const gccFramingDivergence = [
  { dimension: 'Security Posture', western: 'Fragile security perimeter', gcc: 'Stability through transformation', sentiment: 'Divergent' },
  { dimension: 'Governance', western: 'Governance concerns', gcc: 'Administrative capacity', sentiment: 'Divergent' },
  { dimension: 'Diplomacy', western: 'Opportunistic balancing', gcc: 'Strategic risk diversification', sentiment: 'Divergent' },
  { dimension: 'Major Events', western: 'Sports-washing', gcc: 'Soft power strategies', sentiment: 'Divergent' },
  { dimension: 'Economic Transformation', western: 'Financial sustainability', gcc: 'Economic opportunity', sentiment: 'Divergent' },
]

// GCC Creators
const gccCreators = {
  voicesBrought: '1,000+',
  focus: 'Delivering accurate information, joint media initiatives',
}

// Arab League Data
const arabLeagueData = {
  memberCount: 22,
  mediaForum: { date: 'May 8, 2025', location: 'Cairo', theme: 'Role of Media in Promoting a Culture of Tolerance and Peaceful Coexistence' },
  mediaActionPlan: {
    date: 'September 17, 2025',
    location: 'Arab League HQ, Cairo',
    keyParticipants: 'Ambassador Ahmed Rashid Khattabi, Minister Ahmad Assaf (Palestine), Mohannad Al Akoulok',
    coreObjectives: 'Coordinated media engagement for political/diplomatic/legal action',
    vision: 'Open, credible, informative media content based on participatory vision',
    internationalDay: 'May 11 annually - Solidarity with Palestinian media',
  },
  chinaCooperation: {
    date: 'November 2025',
    location: 'Chongqing',
    focus: 'Training, joint productions, media exchanges',
    mou: 'MoU with China National Radio and Television Corporation',
  },
  keyInitiatives: [
    'Arab media action plan abroad and executive mechanisms',
    'Arab media strategy development',
    'Historic documentation programs and preservation of Palestinian memory',
    'Solidarity initiatives with Palestinian media bloc',
    'International day of solidarity with Palestinian media (May 11)',
  ],
  upcomingSessions: [
    '104th Standing Committee for Arab Media: February 10-11, 2026, Kuwait',
    '22nd Executive Bureau of Council of Arab Information Ministers: February 10-11, 2026, Kuwait',
  ],
  coordination: {
    praisingQatar: { date: 'January 26, 2026', location: 'Cairo', focus: 'Strengthening Arab media discourse supporting Palestinian cause' },
  },
}

// OIC Data
const oicData = {
  established: '1969, Rabat, Morocco',
  memberCount: 57,
  headquarters: 'Jeddah, Saudi Arabia',
  unObserverStatus: 'Since 1975',
  conferenceFramework: 'Islamic Conference of Information Ministers',
  keyMeetings: [
    '8th Annual Coordination Meeting of OIC Institutions (ACMOI): December 2024, Jeddah',
    '51st OIC Council of Foreign Ministers: June 2025, Istanbul',
  ],
  oicUnCooperation: {
    nextBriefing: 'July 2025 (expected)',
    chair: 'Pakistan DPM Ishaq Dar',
    briefers: 'OIC SG Hissein Brahim Taha, UN DPPA',
  },
  councilDynamics: {
    oicOnCouncil: ['Algeria', 'Guyana', 'Pakistan', 'Sierra Leone', 'Somalia'],
    russiaObserver: 'Since 2005',
    keyDivergences: ['Israeli-Palestinian conflict', 'US-Iran tensions', 'Turkish Cypriot community status'],
  },
}

// UN Coordination Data
const unCoordinationData = {
  uaeStatements: {
    date: 'November 4, 2025',
    speaker: 'Ms. Amal Al-Menhali',
    forum: 'Fourth Committee (Special Political and Decolonization Committee)',
    agendaItem: '53 on Information-related questions',
    keyPositions: [
      'Information Integrity: Supports UN efforts to promote information integrity and advance cooperation with academia, civil society and youth',
      'Digital Divide: Calls for all members of society to have access to technology',
      'Strategic Communication: Emphasizes peacekeeping, climate action, human rights, and 2030 SDGs',
      'AI Governance: Stress need for comprehensive AI governance and safeguards to protect information integrity',
      'Multilingualism: Reaffirms importance of full parity between six official languages, especially Arabic',
      'Journalist Protection: Deep concern at widespread incitement and systematic hate speech targeting journalists',
    ],
    referencedDocs: ['Security Council Resolution 2686 on "Tolerance, Peace and Security"', '80th UN initiative on reform efforts', 'International Day of Arabic Language (December 18)'],
  },
  publications: {
    title: 'United Nations in UAE - 2024 Annual Report',
    date: 'April 2025',
  },
  sudanHumanitarian: {
    meetingDate: 'February 20, 2025',
    focus: 'Sudan crisis',
    uaeRepresentative: 'Deputy Permanent Representative Shahad Matar, Geneva',
    unAppeal: '$6 billion (largest-ever)',
    uaeAdditionalAid: '$200 million',
    totalUaeAidSinceCrisis: '$600.4 million',
    uaeHumanitarianAid10Years: '$3.5 billion',
  },
}

// UAE International Press Conference
const uaePressConference = {
  date: 'November 5, 2025',
  organizer: 'UAE Government Media Office',
  type: 'First UAE International Press Conference',
}

// Bilateral Relations
const bilateralRelations = [
  {
    partner: 'United States',
    tradeVolume: '$34.4 billion (2024)',
    position: '#1 Largest MENA trading partner',
    investmentFramework: '$1.4 trillion over 10 years',
    agreements: [
      { project: 'Energy Partnerships (ADNOC)', value: '$60 billion' },
      { project: 'Aluminum Smelter (Emirates Global Aluminum, Oklahoma)', value: '$4 billion (first US smelter in 40 years)' },
      { project: 'AI Data Center (US-UAE AI Acceleration Partnership)', value: '1GW (5GW planned)' },
      { project: 'Cloud Adoption (AWS, e&, UAE Cybersecurity Council)', value: '$181 billion by 2033' },
      { project: 'LNG (US Department of Energy)', value: 'Comprehensive Strategic Energy Partnership' },
      { project: 'Healthcare AI (M42, Oracle Health)', value: 'Unified patient records' },
    ],
    keyMeeting: { date: 'May 15-16, 2025', event: 'President Trump state visit' },
  },
  {
    partner: 'Canada',
    anniversary: '50th Anniversary (2024)',
    tradeVolume: '$3.4 billion (2024)',
    canadianExports: '$2.6 billion (+24% YoY)',
    agreements: ['JC MoU July 6, 2022', 'FIPA November 2025', 'CEPA intent announced November 2025'],
    keyMeetings: [
      { date: 'November 20, 2025', event: 'Prime Minister Carney visit (first PM visit in 40+ years)' },
      { date: 'June 19-20, 2025', event: 'Sheikh Abdullah bin Zayed visit' },
      { date: 'October 2025', event: 'AI/Data Center MoU signed' },
    ],
    presence: '~60,000 Canadians in UAE, 150+ Canadian companies',
  },
  {
    partner: 'China',
    tradeVolume: 'Doubled since 1984 (sustained expansion)',
    focus: 'CEPA program deepening',
    agreements: ['MoU with China National Radio and Television Corporation', 'Training and joint productions', 'Media exchanges'],
  },
  {
    partner: 'European Union',
    status: 'SPA negotiations announced December 15, 2025',
    agreement: 'EU-GCC Cooperation Agreement (1988)',
  },
  {
    partner: 'India',
    tradeVolume: '$100.05 billion (FY 2024-25)',
    partnerships: ['I2U2 member', 'IMEC corridor participant', 'Trilateral Cooperation Initiative with France'],
  },
  {
    partner: 'France',
    partnershipValue: '$50 billion - AI/Data Center Partnership',
  },
  {
    partner: 'Italy',
    partnershipValue: '$40 billion - AI, quantum, energy',
  },
]

// Regional Stance Data
const regionalStanceData = {
  gulfPositioning: '"From margins of global politics closer to center of rapidly shifting international order"',
  source: 'Gulf Research Center, October 5, 2025',
  mediationRoles: [
    { country: 'Oman', role: 'US-Iran talks venue', note: 'First Gulf country to engage in world diplomacy; discreet US-Iran contacts since 1979' },
    { country: 'Qatar', role: 'Gaza, Iran-Afghanistan, Chad', note: 'Hosted DRC-Rwanda meetings; brokered Chad peace 2022' },
    { country: 'Saudi Arabia', role: 'Ukraine ceasefire', note: 'Hosted US-Russia talks since 2022; protecting Vision 2030' },
    { country: 'UAE', role: 'Russia-Ukraine exchanges, US-Iran', note: 'Facilitated prisoner exchanges; delivered Trump letter to Tehran' },
  ],
  sharedMotivations: [
    'Maintain neutrality and wide-ranging relations',
    'Protect reputations as safe business destinations',
    'Gain prestige and diplomatic leverage',
    'Ensure regional stability',
  ],
  syriaEngagement: {
    date: 'December 8, 2024',
    trigger: 'Assad Regime Fall',
    support: [
      { supporter: 'Saudi Arabia + Qatar', support: 'Joint debt payoff + salary funding', value: 'All Syria debts' },
      { supporter: 'UAE', support: 'Port development in Tartous via DP World', value: '$800 million' },
      { supporter: 'Al Habtoor Group', support: 'Further investments', value: 'Exploring' },
      { supporter: 'Saudi-Syria', support: 'Investment Forum', date: 'July 24, 2025, Damascus' },
    ],
  },
  quotes: [
    { text: 'Gulf states...are rallying around to offer an alternative pole of power and stability', author: 'Dr. Andreas Krieg (King\'s College London)' },
    { text: 'The Gulf States found themselves in this leadership position by default', author: 'Dr. Bader Al-Saif (Kuwait University)' },
  ],
}

// Campaign Tracking Data
const campaignTrackingData = {
  arabMediaConference: {
    name: 'Fourth Arab Media Conference',
    date: 'May 20-24, 2025',
    location: 'Baghdad',
    theme: 'The Role of Media in Addressing Climate Change',
    organizers: 'Arab States Broadcasting Union (ASBU) + Iraqi Media Network',
    raedInitiatives: [
      '"Our Country Hosts the Climate Summit 27" initiative (COP27 preparation)',
      'Established "Journalists for Climate" network',
      '"Environment Forum Magazine" (since 1989)',
      '"Jusour 2030" (2018) - First digital platform tracking SDGs in Egypt/Arab region',
    ],
    workshops: ['"Early Warning for All"', '"Use of Artificial Intelligence in Climate Media"'],
  },
  arabicContentTrends: {
    nativeSpeakers: '420+ million worldwide',
    onlineContent: 'Only 3% of all online content',
    leadingMarkets: ['UAE', 'Egypt', 'Saudi Arabia'],
    marketConcentration: 'Top 3 markets >50% of MENA media/entertainment',
    projection: '>50% of MENA campaigns to incorporate culturally specific elements by 2025',
    trends: [
      'Shift from English to Arabic and locally produced content',
      'Fusion of traditional narratives with contemporary themes',
      'Focus: social change, identity, resilience',
      'Balance between heritage and modernity',
      'Rise of productions that are both deeply local and universally meaningful',
    ],
    genres: ['Drama and comedy remain forefront', 'Growing appetite for children\'s content/animation', 'Documentaries gaining traction', 'Lifestyle programming flourishing'],
  },
  palestinianCampaign: {
    digitalRightsViolations: {
      total: 1454,
      censorship: 231,
      violentContent: 1174,
      digitalEconomyViolations: 3,
      accountsSecured: 205,
    },
    training: {
      peopleTrainedDigitalSecurity: 1844,
      palestinianStudentsYouth: 1583,
      parents: 111,
      teachers: 82,
      organizationalAssessments: 15,
      newTrainersCertified: 12,
      conferenceParticipants: 360,
      pdafParticipants: 69,
    },
    aiWeaponization: {
      tools: ['Lavender', 'Habsora'],
      coordinatedTakedowns: '90,000+ across 60 countries',
      violentPostsAgainstPalestinians: '12 million',
      violentPostsPerMinute: 23.6,
      postsCelebratingKilling: 9289,
    },
    gazaTelecom: {
      damaged: '75%',
      completelyDestroyed: '50%',
      targetedDuringConflict: '75%',
    },
    reconnectGaza: {
      peopleReached: 25139,
      individualsEngaged: 9609,
      organizationsEndorsed: 62,
      socialMediaViews: '11.8 million',
      socialMediaInteractions: 33300,
      websiteVisits: 173000,
      newsArticles: '30+',
      mediaInterviews: '10+',
    },
  },
  cannesLions: {
    wins2025: 32,
    wins2024: 22,
    growth: '+45% YoY',
  },
}

// Crisis Response Data
const crisisResponseData = {
  gccCrisis: {
    attacksSinceFeb2026: 6000,
    gccGdp: '$2.3 trillion (2024)',
    gccExports: '$823.1 billion (9th globally)',
    gccImports: '$659.3 billion (14th globally)',
    gccCentralAsiaTrade: '~$10 billion (0.7% of GCC total)',
    straitOfHormuzEnergy: '>20% of global energy supplies',
    coordinationMeetings: 50,
    lebanonDisplaced: '1 million+',
    lebanonCasualties: '2,000+',
    lebanonInjuries: '7,000+',
  },
  meetings: [
    { name: '8th Extraordinary Ministerial on Economic Integration', date: 'April 20, 2026' },
    { name: 'GCC-EU Informal Leaders\' Meeting', date: 'April 24, 2026', location: 'Nicosia, Cyprus' },
    { name: 'Symposium on GCC-Lebanon Relations', date: 'April 21, 2026' },
    { name: 'Workshop on GCC-Central Asian Strategic Partnership', date: 'April 20, 2026' },
    { name: 'Antalya Diplomacy Forum Session', date: 'April 18, 2026' },
  ],
  condemnations: [
    'Iranian attacks on GCC states (6,000+ attacks)',
    'Drone attacks targeting Kuwaiti border posts from Iraq',
    'Storming of Al-Aqsa Mosque by settlers',
    'Terrorist plots targeting UAE (thwarted)',
  ],
  collectiveSelfDefense: {
    statement: '"The attack on the State of Qatar is an attack on all GCC states"',
    date: 'September 2025',
    commitment: 'Commitment to support in "all measures they take to defend themselves"',
  },
  threatPerceptions: {
    saudiQatar: [
      { threat: 'US as threat', 2022: 21, '2024-2025': 77 },
      { threat: 'Israel as threat', 2022: 38, '2024-2025': 84 },
      { threat: 'Iran as threat', 2022: 7, '2024-2025': 53 },
    ],
  },
}

// Multilateral Positioning Data
const multilateralData = {
  brics: {
    member: true,
    joined: 'early 2024',
    summit: 'October 2024, Kazan',
    participation: 'New Development Bank for infrastructure/sustainable development',
    context: 'Diversification amid great-power competition; not anti-Western',
  },
  g20: {
    guest: 'Brazil, November 2024',
    pledge: '$100 million to Global Alliance Against Hunger',
  },
  cop28: {
    hosted: '2023',
    outcome: '"UAE Consensus" adopted for climate action',
  },
  dialoguePartnerships: [
    'Shanghai Cooperation Organization (dialogue partner)',
    'GCC-ASEAN Summit (convened October 2023)',
    'GCC-EU Summit (joined inaugural October 2024)',
    'I2U2 (India, Israel, UAE, US)',
    'Trilateral Cooperation Initiative (UAE, India, France)',
    'IMEC Corridor (India-Middle East-Europe)',
    'Belt and Road Initiative (partner)',
  ],
  cepaAgreements: 32,
  fitPInitiative: {
    name: 'Future of Investment and Trade Partnership (FIT-P)',
    purpose: 'Coalition of small/medium economies for rules-based trade, digital economy, investment facilitation',
    foundingMembers: ['Singapore', 'UAE', 'New Zealand'],
    targetMembers: 'Ten nations across Asian, Latin American, African, European continents',
    potentialAdditions: ['Malaysia', 'Morocco', 'Rwanda', 'Uruguay', 'Costa Rica', 'Panama', 'Paraguay', 'Norway'],
    virtualMinisterial: 'November 2025',
    inPersonSummit: 'July 2026',
  },
  tradeMetrics: {
    digitalServicesExports: '$52 billion (21st globally, 2024)',
    nonOilTradeGoods: '$817 billion (2024)',
    fdiInflows: '$45.6 billion (2024)',
    digitalEconomyTarget: '20% of non-oil GDP by 2030',
    digitalTradeGrowth: '12.3% annually (2023-2028)',
    smeContribution: '>60% of non-oil GDP',
    keyInfrastructure: ['Jebel Ali', 'Khalifa Port', 'JAFZA', 'KIZAD'],
  },
  economicProjections: {
    worldBankStudy: 'Harmonized regulations could lower trade costs by up to 20% for goods and 30% for services',
    projectedOutcomes2030: 'Cost reductions of 10-15% could save UAE $81.7-122.5 billion annually',
  },
}

// Threat Indicators Data
const threatIndicatorsData = {
  arabOpinionIndex: {
    surveyScope: { countries: 15, respondents: 40130, researchers: 1000, marginOfError: '+-2-3%' },
    direction: { rightDirection: 57, wrongDirection: 37 },
    financialSituation: { canSave: 26, coverNecessities: 41, inPoverty: 28 },
    greatestThreats: [
      { threat: 'Israel', general: 28, toArabNation: 44 },
      { threat: 'US', general: 10, toArabNation: 21 },
      { threat: 'Iran', general: 8, toArabNation: 6 },
    ],
    byRegion: [
      { region: 'Mashreq', israel: 53, us: 16, iran: 16 },
      { region: 'Nile Valley', israel: 38, us: 6, iran: 1 },
      { region: 'Maghreb', israel: 9, us: 6, iran: 1 },
      { region: 'Gulf', israel: 9, us: 7, iran: 14 },
    ],
    democracy: {
      understandDemocracy: 83,
      supportDemocraticSystem: 68,
      democracySuitable: 67,
      supportSeparation: 42,
      opposeSeparation: 47,
      civicOrgMembers: 11,
      partyAffiliates: 6,
      intendToVote: 45,
    },
    internetMedia: {
      internetUsers: 79,
      dailyInternetUse: 65,
      browseArabic: 90,
      socialMediaAccounts: 98,
      trustSocialMedia: 41,
      distrustSocialMedia: 59,
    },
    palestinianCause: {
      collectiveArabCause: 80,
      opposeRecognizingIsrael: 87,
      viewUsPolicyNegatively: 76,
      psychologicalStressGazaWar: 87,
      followedGazaNewsClosely: 70,
    },
    viewsOnUs: {
      negativeFeelings: 56,
      stemsFromForeignPolicy: 73,
    },
  },
  gulfThreatData: {
    kuwaitIranThreat: 35,
    israelPoliciesThreat: 84,
    usPoliciesThreat: 77,
    iranPoliciesThreat: 53,
    russianPoliciesThreat: 48,
  },
  redSeaThreat: {
    foodImportsDisrupted: 70,
    desalinationPlantsUnderThreat: '>90%',
  },
  threatSharing: {
    participants: ['Israel', 'Bahrain', 'Egypt', 'Jordan', 'Qatar', 'Saudi Arabia', 'UAE'],
    potentialPartners: ['Kuwait', 'Oman'],
    sharedThreats: ['Iran', 'Houthi militants', 'ISIS', 'Hamas tunnels'],
    termUsed: '"Axis of Evil" in security documents',
    cooperationAreas: ['Air defense', 'Tunnel detection', 'Intelligence sharing', 'Information operations'],
    systemsIntegration: 'By 2024, linked to US systems, sharing radar data via US Air Force squadron',
    futurePlans: ['Combined Middle East Cyber Center', 'Information Fusion Center for rapid operational planning'],
  },
  gulfIranSecurity: {
    members: ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'],
    oldModelCollapse: 'US military presence, sanctions, diplomatic isolation, constant military pressure proved ineffective',
    trigger: 'Recent military conflict between Iran and US/Israel',
    chineseMediation: 'Restored Saudi-Iranian diplomatic ties in 2023',
    newMechanisms: [
      'Joint Early Warning Systems: Real-time missile threat data exchange',
      'Air Defense Coordination: Timely threat interception',
      'Permanent Diplomatic Platforms: Consultations to prevent crises',
    ],
    proposedPrinciples: [
      'Rejection of Tehran\'s Isolation',
      'OPEC-style Security Structure: Regional security structures similar to OPEC but in security sphere',
      'Diversification of External Partnerships: Involving China, Russia, and India',
    ],
    assessment: '"No external power is willing to sacrifice its strategic interests to ensure security"',
  },
  houthiAttacks: [
    { date: 'Oct 19', attack: '4 cruise missiles + 15 drones intercepted' },
    { date: 'Oct 27', attack: 'Drone explosions in Egyptian Taba/Nuweiba' },
    { date: 'Oct 31', attack: 'Arrow intercepted Yemen missile' },
    { date: 'Nov 9', attack: 'Arrow 3 first interception targeting Eilat' },
    { date: 'Oct 30', attack: '4 Saudi soldiers killed' },
    { date: 'Late Sept', attack: '5 Bahraini soldiers killed' },
    { date: 'Feb 2022', attack: 'Drone attack on Abu Dhabi' },
  ],
  iranianBackedGroups: [
    { group: 'Houthis', location: 'Yemen', note: 'Led by Abdul Malik al-Houthi' },
    { group: 'Kataib Hezbollah', location: 'Iraq', note: 'Closest to Lebanese Hezbollah and IRGC Quds Force' },
    { group: 'Popular Mobilization Forces', location: 'Iraq', note: 'Umbrella of Iranian-backed militias' },
    { group: 'Alwiya Alwaad Al Haq', location: 'Iraq', note: '"Facade group" threatening Gulf states' },
    { group: 'True Promise Brigades', location: 'Iraq', note: 'Targeting UAE' },
    { group: 'Tashkil al-Waritheen', location: 'Iraq', note: 'Failed attack on Kuwait air base' },
  ],
}

// Economic Data Summary
const economicData = {
  uae: {
    gdp2023: '$456 billion (from $20B in 1975)',
    gdp2025: '$569.1 billion',
    gdpTarget: '$800 billion by 2031',
    nonOilSector: '77.3% of GDP (Q1 2025)',
    tradeTarget: '$1 trillion by 2031',
    fdiInflows2024: '$45.6 billion',
    nonOilTrade2024: '$817 billion',
    digitalServicesExports2024: '$52 billion',
  },
  gcc: {
    gdp2024: '$2.3 trillion',
    exports: '$823.1 billion (9th globally)',
    imports: '$659.3 billion (14th globally)',
  },
}

// Security Data Summary
const securityData = {
  missileDroneAttacks: '6,000+ since Feb 2026',
  coordinationMeetings: '50+',
  lebanonDisplaced: '1 million+',
  kuwaitThreatIran: '35% (highest in region)',
  gccArmsImports: '~20% of global (2020-2024)',
}

// Media Data Summary
const mediaData = {
  arabicSpeakers: '420+ million',
  arabicOnlineContent: '3% of total',
  cannesLions2025: '32 wins (+45% YoY)',
  digitalRightsViolationsH1: 1454,
  coordinatedTakedowns: '90,000+',
  violentPostsPalestinians: '12 million',
  gazaTelecomDamaged: '75%',
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function IntlRelationsPage() {
  const { data: overviewData } = useStakeholderOverviewData()
  const { data: intlData } = useIntlRelationsData()

  const overviewStakeholders = (overviewData?.stakeholders as StakeholderIntelligence[] || []).filter(s => s.type === 'international')
  const allIntlData = [intlData].filter(Boolean) as StakeholderIntelligence[]
  const intlOrgs = overviewStakeholders.length > 0 ? overviewStakeholders : (allIntlData.length > 0 ? allIntlData : [intlRelationsData])

  // Aggregate metrics
  const totalReach = intlOrgs.reduce((sum, s) => sum + (s.metrics?.digitalReach || 0), 0)
  const avgCredibility = intlOrgs.reduce((sum, s) => sum + (s.metrics?.credibility?.score || 0), 0) / Math.max(intlOrgs.length, 1)
  const avgEngagement = intlOrgs.reduce((sum, s) => sum + (s.metrics?.engagement || 0), 0) / Math.max(intlOrgs.length, 1)

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  const getTierColor = (tier: number) => {
    if (tier === 0) return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
    if (tier === 1) return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50'
    if (tier === 2) return 'bg-gold-500/20 text-gold-400 border-gold-500/50'
    return 'bg-slate-500/20 text-slate-400 border-slate-500/50'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="cyan" className="mb-2">INTERNATIONAL RELATIONS</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-cyan">International Relations Body</h1>
          <p className="mt-2 text-slate-400">
            GCC, Arab League, OIC, UN coordination, bilateral partnerships, and multilateral positioning
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-cyan/50 text-cyan hover:bg-cyan/10">
            <Globe2 className="h-4 w-4" />
            View Directory
          </Button>
          <Button className="bg-gradient-cyan hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Soft Power Rank"
          value={`#${gccSoftPower.gspiRank}`}
          previousValue={11}
          unit="/100"
          icon={<Award className="h-6 w-6" />}
          gradient="cyan"
          status="info"
        />
        <MetricCard
          title="GCC Summits 2024-26"
          value={gccEuSummits.length}
          icon={<Calendar className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="Bilateral Partners"
          value={bilateralRelations.length}
          icon={<Handshake className="h-6 w-6" />}
          gradient="gold"
          status="info"
        />
        <MetricCard
          title="UAE Relevance"
          value={intlRelationsData.uaeRelevance.score}
          unit="%"
          icon={<Target className="h-6 w-6" />}
          gradient="emerald"
          status="error"
        />
      </motion.div>

      {/* Crisis Alert Banner */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/50 rounded-lg p-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertOctagon className="h-6 w-6 text-red-400" />
              <div>
                <h3 className="font-bold text-red-400">CRISIS COORDINATION ACTIVE</h3>
                <p className="text-sm text-slate-300">
                  {`${crisisResponseData.gccCrisis.attacksSinceFeb2026.toLocaleString()}+`} missile/drone attacks tracked | {`${crisisResponseData.gccCrisis.coordinationMeetings}+`} coordination meetings
                </p>
              </div>
            </div>
            {getAlertBadge(intlRelationsData.alertLevel)}
          </div>
        </motion.div>
      </AnimatePresence>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gcc">GCC Relations</TabsTrigger>
          <TabsTrigger value="arableague">Arab League</TabsTrigger>
          <TabsTrigger value="oic">OIC & UN</TabsTrigger>
          <TabsTrigger value="bilateral">Bilateral</TabsTrigger>
          <TabsTrigger value="regional">Regional</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="crisis">Crisis</TabsTrigger>
          <TabsTrigger value="multilateral">Multilateral</TabsTrigger>
          <TabsTrigger value="threats">Threats</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Soft Power Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-cyan-400" />
                    GCC Soft Power Leadership
                  </CardTitle>
                  <CardDescription>UAE ranked #1 in GCC, 10th globally</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-5xl font-extrabold text-cyan-400">{gccSoftPower.softPowerScore}</span>
                      <span className="text-slate-400">/100</span>
                    </div>
                    <Progress value={gccSoftPower.softPowerScore} className="h-2" />
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="text-center p-2 rounded bg-cyan-500/10">
                        <div className="text-xl font-bold text-cyan-400">#{gccSoftPower.gspiRank}</div>
                        <div className="text-xs text-slate-400">Global Rank</div>
                      </div>
                      <div className="text-center p-2 rounded bg-cyan-500/10">
                        <div className="text-xl font-bold text-cyan-400">#1</div>
                        <div className="text-xs text-slate-400">GCC Rank</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Six Pillars */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-400" />
                    Soft Power Pillars
                  </CardTitle>
                  <CardDescription>6 strategic pillars</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {gccSoftPower.softPowerPillars.map((pillar, idx) => (
                      <motion.div
                        key={pillar}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * idx }}
                        className="p-2 rounded bg-emerald-500/10 text-xs text-emerald-300 text-center"
                      >
                        {pillar}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Key Summits Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gold-400" />
                  Key GCC-EU Summits 2024-2026
                </CardTitle>
                <CardDescription>Strategic Partnership for Peace and Prosperity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {gccEuSummits.slice(0, 5).map((summit, idx) => (
                    <motion.div
                      key={summit.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center justify-between p-3 rounded bg-gold-500/5 hover:bg-gold-500/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold-400" />
                        <div>
                          <div className="font-medium text-slate-200">{summit.name}</div>
                          <div className="text-xs text-slate-400">{summit.location}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">{summit.date}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Humanitarian Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-rose-400" />
                  UAE Humanitarian Leadership
                </CardTitle>
                <CardDescription>Regional aid contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="text-center p-3 rounded bg-rose-500/10">
                    <div className="text-2xl font-bold text-rose-400">2nd</div>
                    <div className="text-xs text-slate-400">Largest Gaza Aid Donor (after US)</div>
                  </div>
                  <div className="text-center p-3 rounded bg-rose-500/10">
                    <div className="text-2xl font-bold text-rose-400">3rd</div>
                    <div className="text-xs text-slate-400">Largest Lebanon Aid Donor</div>
                  </div>
                  <div className="text-center p-3 rounded bg-rose-500/10">
                    <div className="text-2xl font-bold text-rose-400">COP28</div>
                    <div className="text-xs text-slate-400">UAE Consensus 2023</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* GCC Relations Tab */}
        <TabsContent value="gcc" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">GCC Soft Power</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-cyan-400">10th</div>
                  <div className="text-sm text-slate-400">Global Soft Power Index</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-emerald-400">#1</div>
                  <div className="text-sm text-slate-400">GCC Ranking</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-gold-400">{gccSoftPower.softPowerScore}</div>
                  <div className="text-sm text-slate-400">Soft Power Score</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Major Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-2">
                    {gccSoftPower.majorInitiatives.map((initiative, idx) => (
                      <div key={idx} className="text-sm p-2 rounded bg-cyan-500/5 hover:bg-cyan-500/10">
                        {initiative}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">First-Time Summits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {gccCulturalStrategy.firstTimeSummits.map((summit) => (
                    <div key={summit.name} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-sm">{summit.name}</span>
                      <span className="text-xs text-slate-500">({summit.year})</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* GCC Cultural Strategy */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Flag className="h-5 w-5 text-purple-400" />
                GCC Cultural Strategy 2020-2030
              </CardTitle>
              <CardDescription>Joint cultural activities and initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {gccCulturalStrategy.keyInitiatives.map((initiative, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    className="flex items-start gap-2 p-2 rounded bg-purple-500/10"
                  >
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <span className="text-sm">{initiative}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* GCC-EU Summits Chart */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">GCC-EU Summits (2024-2026)</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={gccEuSummits.map(s => ({
                  name: s.name.length > 25 ? s.name.substring(0, 25) + '...' : s.name,
                  value: 1,
                  date: s.date,
                }))}
                xAxisKey="name"
                bars={[{ dataKey: 'value', name: 'Summit', color: CHART_COLORS.info }]}
                height={300}
                showGrid={true}
              />
            </CardContent>
          </Card>

          {/* GCC Framing Divergence */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Scale className="h-5 w-5 text-orange-400" />
                GCC Media Framing Divergence
              </CardTitle>
              <CardDescription>Western vs GCC Counter-Narrative</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {gccFramingDivergence.map((item, idx) => (
                  <motion.div
                    key={item.dimension}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    className="p-3 rounded bg-slate-800/50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-200">{item.dimension}</span>
                      <Badge variant="outline" className="text-xs text-orange-400">{item.sentiment}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded bg-red-500/10">
                        <div className="text-slate-500 mb-1">Western:</div>
                        <div className="text-slate-300">{item.western}</div>
                      </div>
                      <div className="p-2 rounded bg-emerald-500/10">
                        <div className="text-slate-500 mb-1">GCC:</div>
                        <div className="text-slate-300">{item.gcc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* GCC Creators */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-pink-400" />
                GCC Creators Initiative
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-4">
                <div className="text-4xl font-extrabold text-pink-400">{gccCreators.voicesBrought}</div>
                <div className="text-sm text-slate-400 mt-2">Voices Brought Together</div>
                <div className="text-sm text-pink-300 mt-2">{gccCreators.focus}</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Arab League Tab */}
        <TabsContent value="arableague" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Arab League</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-emerald-400">{arabLeagueData.memberCount}</div>
                  <div className="text-sm text-slate-400">Member States</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gold-400">{arabLeagueData.mediaForum.date}</div>
                  <div className="text-sm text-slate-400">Media Forum</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-red-400">{arabLeagueData.mediaActionPlan.date}</div>
                  <div className="text-sm text-slate-400">Media Action Plan</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Key Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-2">
                    {arabLeagueData.keyInitiatives.map((initiative, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx }}
                        className="flex items-start gap-2 p-2 rounded bg-emerald-500/5 hover:bg-emerald-500/10"
                      >
                        <div className="w-2 h-2 mt-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span className="text-sm">{initiative}</span>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Arab League-China Cooperation */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-red-400" />
                Arab League-China Media Cooperation
              </CardTitle>
              <CardDescription>{arabLeagueData.chinaCooperation.date} - {arabLeagueData.chinaCooperation.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 rounded bg-red-500/10">
                  <div className="text-sm text-slate-300">China's supportive stance towards Palestine praised</div>
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  <div className="p-2 rounded bg-slate-800/50 text-center">
                    <div className="text-lg font-bold text-cyan-400">Training</div>
                    <div className="text-xs text-slate-400">Joint programs</div>
                  </div>
                  <div className="p-2 rounded bg-slate-800/50 text-center">
                    <div className="text-lg font-bold text-cyan-400">Productions</div>
                    <div className="text-xs text-slate-400">Joint content</div>
                  </div>
                  <div className="p-2 rounded bg-slate-800/50 text-center">
                    <div className="text-lg font-bold text-cyan-400">Exchanges</div>
                    <div className="text-xs text-slate-400">Media visits</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Palestine Solidarity */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Triangle className="h-5 w-5 text-red-400" />
                Palestinian Cause Media Action Plan
              </CardTitle>
              <CardDescription>{arabLeagueData.mediaActionPlan.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 rounded bg-red-500/10 border border-red-500/30">
                  <div className="text-xs text-red-400 mb-1">Core Objectives</div>
                  <div className="text-sm text-slate-200">{arabLeagueData.mediaActionPlan.coreObjectives}</div>
                </div>
                <div className="p-3 rounded bg-slate-800/50">
                  <div className="text-xs text-slate-400 mb-1">Vision</div>
                  <div className="text-sm text-slate-200">{arabLeagueData.mediaActionPlan.vision}</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-emerald-500/10">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-sm">International Day: May 11 (Solidarity with Palestinian media)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* OIC & UN Tab */}
        <TabsContent value="oic" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  OIC Coordination
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded bg-cyan-500/10">
                    <div className="text-3xl font-extrabold text-cyan-400">{oicData.memberCount}</div>
                    <div className="text-xs text-slate-400">Member States</div>
                  </div>
                  <div className="text-center p-3 rounded bg-cyan-500/10">
                    <div className="text-lg font-bold text-cyan-400">1969</div>
                    <div className="text-xs text-slate-400">Established</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 rounded bg-slate-800/50">
                    <span className="text-slate-400">Headquarters</span>
                    <span>{oicData.headquarters}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-800/50">
                    <span className="text-slate-400">UN Observer</span>
                    <span>{oicData.unObserverStatus}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-800/50">
                    <span className="text-slate-400">Framework</span>
                    <span className="text-right text-xs">{oicData.conferenceFramework}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Radio className="h-5 w-5 text-emerald-400" />
                  UN Information Integrity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded bg-emerald-500/10">
                    <div className="text-lg font-bold text-emerald-400">{unCoordinationData.uaeStatements.date}</div>
                    <div className="text-sm text-slate-300">UAE at UN Fourth Committee</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    {unCoordinationData.uaeStatements.keyPositions.slice(0, 4).map((pos, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>{pos.split(':')[0]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sudan Humanitarian */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="h-5 w-5 text-rose-400" />
                UAE Sudan Humanitarian Response
              </CardTitle>
              <CardDescription>{unCoordinationData.sudanHumanitarian.meetingDate}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-4">
                <div className="text-center p-3 rounded bg-rose-500/10">
                  <div className="text-2xl font-bold text-rose-400">$6B</div>
                  <div className="text-xs text-slate-400">UN Humanitarian Appeal</div>
                </div>
                <div className="text-center p-3 rounded bg-rose-500/10">
                  <div className="text-2xl font-bold text-rose-400">$200M</div>
                  <div className="text-xs text-slate-400">UAE Additional Aid</div>
                </div>
                <div className="text-center p-3 rounded bg-rose-500/10">
                  <div className="text-2xl font-bold text-rose-400">$600.4M</div>
                  <div className="text-xs text-slate-400">Total UAE Aid</div>
                </div>
                <div className="text-center p-3 rounded bg-rose-500/10">
                  <div className="text-2xl font-bold text-rose-400">$3.5B</div>
                  <div className="text-xs text-slate-400">UAE Aid (10 Years)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Bilateral Tab */}
        <TabsContent value="bilateral" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {bilateralRelations.map((partner, idx) => (
              <motion.div
                key={partner.partner}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <Card className="glass-card h-full">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                      {partner.partner}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {partner.tradeVolume && (
                      <div className="text-sm">
                        <span className="text-slate-400">Trade: </span>
                        <span className="text-emerald-400 font-medium">{partner.tradeVolume}</span>
                      </div>
                    )}
                    {partner.investmentFramework && (
                      <div className="text-sm">
                        <span className="text-slate-400">Investment: </span>
                        <span className="text-gold-400 font-medium">{partner.investmentFramework}</span>
                      </div>
                    )}
                    {partner.agreements && partner.agreements.length > 0 && (
                      <div className="space-y-1">
                        <div className="text-xs text-slate-400">Key Agreements:</div>
                        {partner.agreements.slice(0, 3).map((agreement, i) => (
                          <div key={i} className="text-xs p-1 rounded bg-cyan-500/5">
                            {typeof agreement === 'string' ? agreement : `${agreement.project}: ${agreement.value}`}
                          </div>
                        ))}
                      </div>
                    )}
                    {partner.keyMeetings && partner.keyMeetings.length > 0 && (
                      <div className="pt-2 border-t border-slate-700">
                        <div className="text-xs text-slate-400 mb-1">Recent Meetings:</div>
                        {partner.keyMeetings.slice(0, 2).map((meeting, i) => (
                          <div key={i} className="text-xs">
                            <span className="text-cyan-400">{meeting.date}: </span>
                            <span>{meeting.event}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Regional Tab */}
        <TabsContent value="regional" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Gulf States Positioning */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  Gulf States Positioning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded bg-cyan-500/10 mb-4">
                  <div className="text-sm text-slate-200 italic">"{regionalStanceData.gulfPositioning}"</div>
                  <div className="text-xs text-slate-500 mt-2">Source: {regionalStanceData.source}</div>
                </div>
                <div className="space-y-2">
                  {regionalStanceData.sharedMotivations.map((motivation, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>{motivation}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mediation Roles */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Scale className="h-5 w-5 text-emerald-400" />
                  Regional Mediation Roles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {regionalStanceData.mediationRoles.map((role, idx) => (
                    <motion.div
                      key={role.country}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="p-3 rounded bg-emerald-500/10"
                    >
                      <div className="font-medium text-emerald-400">{role.country}</div>
                      <div className="text-sm text-slate-300">{role.role}</div>
                      <div className="text-xs text-slate-500 mt-1">{role.note}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Syria Engagement */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building2 className="h-5 w-5 text-purple-400" />
                Gulf States Syria Support - Post December 8, 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {regionalStanceData.syriaEngagement.support.map((support, idx) => (
                  <motion.div
                    key={support.supporter}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center justify-between p-3 rounded bg-purple-500/10"
                  >
                    <div>
                      <div className="font-medium text-purple-300">{support.supporter}</div>
                      <div className="text-sm text-slate-400">{support.support}</div>
                    </div>
                    <Badge variant="outline" className="text-emerald-400">{support.value}</Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Campaigns Tab */}
        <TabsContent value="campaigns" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Arabic Content Trends */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Tv className="h-5 w-5 text-pink-400" />
                  Arabic Content Trends 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 rounded bg-pink-500/10">
                    <div className="text-2xl font-bold text-pink-400">420M+</div>
                    <div className="text-xs text-slate-400">Arabic Speakers</div>
                  </div>
                  <div className="text-center p-3 rounded bg-pink-500/10">
                    <div className="text-2xl font-bold text-pink-400">3%</div>
                    <div className="text-xs text-slate-400">Online Content</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  {campaignTrackingData.arabicContentTrends.trends.map((trend, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pink-400" />
                      <span>{trend}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cannes Lions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-gold-400" />
                  MENA Cannes Lions 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-6">
                  <div className="text-6xl font-extrabold text-gold-400">{campaignTrackingData.cannesLions.wins2025}</div>
                  <div className="text-sm text-slate-400 mt-2">Wins in 2025</div>
                  <div className="text-lg font-bold text-emerald-400 mt-2">{campaignTrackingData.cannesLions.growth}</div>
                  <div className="text-xs text-slate-500">vs {campaignTrackingData.cannesLions.wins2024} in 2024</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Palestinian Campaign */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-red-400" />
                Palestinian Digital Rights (H1 2025)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-4">
                <div className="text-center p-3 rounded bg-red-500/10">
                  <div className="text-2xl font-bold text-red-400">{campaignTrackingData.palestinianCampaign.digitalRightsViolations.total}</div>
                  <div className="text-xs text-slate-400">Digital Violations</div>
                </div>
                <div className="text-center p-3 rounded bg-red-500/10">
                  <div className="text-2xl font-bold text-red-400">{campaignTrackingData.palestinianCampaign.digitalRightsViolations.censorship}</div>
                  <div className="text-xs text-slate-400">Censorship Cases</div>
                </div>
                <div className="text-center p-3 rounded bg-red-500/10">
                  <div className="text-2xl font-bold text-red-400">12M</div>
                  <div className="text-xs text-slate-400">Violent Posts</div>
                </div>
                <div className="text-center p-3 rounded bg-red-500/10">
                  <div className="text-2xl font-bold text-red-400">90K+</div>
                  <div className="text-xs text-slate-400">Coordinated Takedowns</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Crisis Tab */}
        <TabsContent value="crisis" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-4">
            <Card className="glass-card">
              <CardContent className="text-center p-6">
                <div className="text-4xl font-extrabold text-red-400">
                  {`${crisisResponseData.gccCrisis.attacksSinceFeb2026.toLocaleString()}+`}
                </div>
                <div className="text-sm text-slate-400 mt-2">Attacks Since Feb 2026</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="text-center p-6">
                <div className="text-4xl font-extrabold text-gold-400">
                  {`${crisisResponseData.gccCrisis.coordinationMeetings}+`}
                </div>
                <div className="text-sm text-slate-400 mt-2">Coordination Meetings</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="text-center p-6">
                <div className="text-4xl font-extrabold text-cyan-400">
                  {(parseInt(crisisResponseData.gccCrisis.lebanonDisplaced) / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-slate-400 mt-2">Lebanon Displaced</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="text-center p-6">
                <div className="text-4xl font-extrabold text-red-400">
                  {crisisResponseData.gccCrisis.lebanonCasualties}
                </div>
                <div className="text-sm text-slate-400 mt-2">Lebanon Casualties</div>
              </CardContent>
            </Card>
          </div>

          {/* Condemnations */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertOctagon className="h-5 w-5 text-red-400" />
                Condemnations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {crisisResponseData.condemnations.map((condemnation, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-2 p-3 rounded bg-red-500/10 hover:bg-red-500/15"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-sm">{condemnation}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Threat Perceptions Shift */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-400" />
                Threat Perceptions Shift (Saudi Arabia/Qatar)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {crisisResponseData.threatPerceptions.saudiQatar.map((item) => (
                  <div key={item.threat} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.threat}</span>
                      <span className="text-orange-400">{item['2024-2025']}% (from {item[2022]}% in 2022)</span>
                    </div>
                    <Progress value={item['2024-2025']} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Multilateral Tab */}
        <TabsContent value="multilateral" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">BRICS Membership</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-6">
                <div className="text-6xl font-extrabold text-emerald-400">YES</div>
                <div className="text-sm text-slate-400 mt-2">Member since early 2024</div>
                <div className="text-xs text-slate-500 mt-1">Kazan Summit October 2024</div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">CEPA Agreements</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-6">
                <div className="text-6xl font-extrabold text-gold-400">{multilateralData.cepaAgreements}</div>
                <div className="text-sm text-slate-400 mt-2">Since September 2021</div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">COP28 & G20</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded bg-emerald-500/10">
                  <div className="text-lg font-bold text-emerald-400">COP28 Host 2023</div>
                  <div className="text-xs text-slate-400">UAE Consensus adopted</div>
                </div>
                <div className="p-3 rounded bg-cyan-500/10">
                  <div className="text-lg font-bold text-cyan-400">G20 Guest</div>
                  <div className="text-xs text-slate-400">Brazil November 2024</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dialogue Partnerships */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Dialogue Partnerships</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {multilateralData.dialoguePartnerships.map((partnership, idx) => (
                  <motion.div
                    key={partnership}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * idx }}
                    className="p-3 rounded bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mb-2" />
                    <div className="text-sm">{partnership}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FIT-P Initiative */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Plane className="h-5 w-5 text-purple-400" />
                FIT-P Initiative
              </CardTitle>
              <CardDescription>{multilateralData.fitPInitiative.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs text-slate-400 mb-2">Purpose</div>
                  <div className="text-sm">{multilateralData.fitPInitiative.purpose}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-2">Founding Members</div>
                  <div className="flex gap-2">
                    {multilateralData.fitPInitiative.foundingMembers.map(m => (
                      <Badge key={m} variant="outline">{m}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trade Metrics */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-emerald-400" />
                UAE Trade Metrics 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="text-center p-3 rounded bg-emerald-500/10">
                  <div className="text-2xl font-bold text-emerald-400">$817B</div>
                  <div className="text-xs text-slate-400">Non-oil Trade</div>
                </div>
                <div className="text-center p-3 rounded bg-emerald-500/10">
                  <div className="text-2xl font-bold text-emerald-400">$45.6B</div>
                  <div className="text-xs text-slate-400">FDI Inflows</div>
                </div>
                <div className="text-center p-3 rounded bg-emerald-500/10">
                  <div className="text-2xl font-bold text-emerald-400">$52B</div>
                  <div className="text-xs text-slate-400">Digital Services</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Threats Tab */}
        <TabsContent value="threats" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Arab Opinion - Threats */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Crosshair className="h-5 w-5 text-red-400" />
                  Arab Opinion - Greatest Threats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {threatIndicatorsData.arabOpinionIndex.greatestThreats.map((threat) => (
                  <div key={threat.threat}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{threat.threat}</span>
                      <span className="text-red-400 font-bold">{threat.general}% (gen) / {threat.toArabNation}% (nation)</span>
                    </div>
                    <Progress value={threat.toArabNation} className="h-2 bg-slate-700" />
                  </div>
                ))}
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-xs text-slate-400 mb-2">Survey: {threatIndicatorsData.arabOpinionIndex.surveyScope.countries} Arab countries, {threatIndicatorsData.arabOpinionIndex.surveyScope.respondents.toLocaleString()} respondents</div>
                </div>
              </CardContent>
            </Card>

            {/* Gulf Threat Perception */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  Gulf Threat Perception
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Israeli Policies</span>
                      <span className="text-red-400 font-bold">{threatIndicatorsData.gulfThreatData.israelPoliciesThreat}%</span>
                    </div>
                    <Progress value={threatIndicatorsData.gulfThreatData.israelPoliciesThreat} className="h-2 bg-slate-700" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">US Policies</span>
                      <span className="text-orange-400 font-bold">{threatIndicatorsData.gulfThreatData.usPoliciesThreat}%</span>
                    </div>
                    <Progress value={threatIndicatorsData.gulfThreatData.usPoliciesThreat} className="h-2 bg-slate-700" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Iranian Policies</span>
                      <span className="text-yellow-400 font-bold">{threatIndicatorsData.gulfThreatData.iranPoliciesThreat}%</span>
                    </div>
                    <Progress value={threatIndicatorsData.gulfThreatData.iranPoliciesThreat} className="h-2 bg-slate-700" />
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-xs text-slate-400">Source: Arab Center DC</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Red Sea Threat */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-red-400" />
                Red Sea Threat Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="text-center p-6 rounded bg-red-500/10">
                  <div className="text-5xl font-extrabold text-red-400">{threatIndicatorsData.redSeaThreat.foodImportsDisrupted}%</div>
                  <div className="text-sm text-slate-400 mt-2">Food Imports Disrupted</div>
                </div>
                <div className="text-center p-6 rounded bg-red-500/10">
                  <div className="text-5xl font-extrabold text-red-400">{threatIndicatorsData.redSeaThreat.desalinationPlantsUnderThreat}</div>
                  <div className="text-sm text-slate-400 mt-2">Desalination Under Threat</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Iranian-Backed Groups */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-400" />
                Iranian-Backed Groups
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {threatIndicatorsData.iranianBackedGroups.map((group) => (
                  <div key={group.group} className="p-3 rounded bg-orange-500/10">
                    <div className="font-medium text-orange-300">{group.group}</div>
                    <div className="text-xs text-slate-400">{group.location}</div>
                    <div className="text-xs text-slate-500 mt-1">{group.note}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Source Credibility Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <FileText className="h-4 w-4 text-slate-400" />
              Source Credibility Matrix ({sourceCredibilityMatrix.length} sources)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[150px]">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sourceCredibilityMatrix.map((source, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.02 * idx }}
                    className="flex items-center gap-2 p-2 rounded bg-slate-800/50 hover:bg-slate-800"
                  >
                    <Badge variant="outline" className={`text-xs ${getTierColor(source.tier)}`}>T{source.tier}</Badge>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium truncate">{source.source}</div>
                      <div className="text-xs text-slate-500">{source.uaeRelevance}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
