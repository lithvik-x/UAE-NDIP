/**
 * Terrorism & Extremism Data - UAE NDIP
 *
 * Comprehensive intelligence data extracted from MD 4-7 terrorism-extremism-results.md
 * Data source: 25 queries executed, 23 pages fetched (2026-04-27)
 */

import type { TierLevel, PhoenixStage } from '../../data-loader/types'

// ============================================================================
// LOCAL INTERFACES FOR ACTUAL DATA STRUCTURE
// ============================================================================

/**
 * Local interface matching actual source data structure
 */
interface LocalSource {
  source: string
  tier: string
  credibility: string
}

/**
 * Local interface for stakeholder impacts
 */
interface LocalStakeholderImpact {
  stakeholder: string
  sentiment: string
  impact: string
}

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const executionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 25,
  pagesFetched: 23,
}

// ============================================================================
// FOCUS AREAS
// ============================================================================

export const focusAreas = [
  'UAE terrorism incidents (domestic)',
  'UAE counter-terrorism strategy and legislation',
  'Designated terrorist organizations by UAE',
  'ISIS/UAE relations',
  'Al-Qaeda/UAE relations',
  'Muslim Brotherhood/UAE relations',
  'Lone wolf attacks',
  'Terrorist financing',
  'Counter-terrorism trials and convictions',
  'Hedayah and counter-extremism programs',
  'Foreign fighter issues',
  'Rehabilitation and deradicalization',
  'Recent Iran-linked terror networks',
  'Historical incidents (Gulf Air 771, JAL 404, KLM 861, Indian Airlines 814)',
  'Ibolya Ryan murder',
  '2022 Houthi Abu Dhabi attack',
  'Zvi Kogan murder',
  'UAE Hezbollah sanctions',
  'Qatar diplomatic crisis and terrorism',
]

// ============================================================================
// KEY QUERY PATTERNS
// ============================================================================

export const queryPatterns = [
  'UAE terrorism',
  'UAE extremism',
  'UAE terrorist list',
  'UAE ISIS',
  'UAE Al-Qaeda',
  'UAE counter-terrorism strategy',
  'UAE lone wolf attack',
  'UAE terrorist financing',
  'UAE terror trial conviction',
  'UAE terror plot foiled',
  'UAE foreign fighter',
  'UAE ISIS sympathizer',
  'UAE terror returnee rehabilitation',
  'Khaled al-Jasmi UAE',
  'UAE American teacher stabbed',
  'UAE French hostage Yemen 2015',
  'Terrorism in the United Arab Emirates Wikipedia',
  'UAE Muslim Brotherhood banned',
  'UAE Iranian terrorist group 2026',
  'UAE Iran-linked terrorist cell April 2026',
  'UAE Al-Islah terrorist organization',
  'Zvi Kogan UAE murder',
  'Abu Dhabi attack 2022',
  'Ibolya Ryan Abu Dhabi stabbing',
  'UAE Hezbollah sanctions',
  'KLM Flight 861 bombing',
  'Japan Air Lines Flight 404',
  'UAE FATF grey list',
  'UAE Iranian strikes 2026',
]

// ============================================================================
// TERRORIST ENTITIES DATA
// ============================================================================

export const terroristEntities = {
  federalLawNo7_2014: {
    designatedOrganizations: 83,
    description: 'Organizations designated under Federal Law No. 7 of 2014 on Combating Terrorism Offences',
  },
  localTerroristList: {
    totalEntities: 714,
    searchableEntities: 326,
    breakdown: {
      people: 174,
      organizations: 141,
      addresses: 10,
      vessels: 1,
    },
    operatingSince: 'UNSC Resolution 1373 (2001)',
    designationAuthority: 'Supreme Council for National Security; approval: UAE Cabinet',
    publishedBy: 'Executive Office for Control & Non-proliferation (EOCN), established 2009',
    updateFrequency: 'Daily',
    coverageSince: '2023-02-16',
  },
  recentDesignations: {
    January_2025: {
      count: 19,
      reason: 'Links to Muslim Brotherhood',
    },
    April_2025: {
      individuals: 11,
      companies: 8,
      note: 'HRW documented due process violations',
    },
  },
}

// ============================================================================
// KEY INCIDENTS
// ============================================================================

export const historicalIncidents = [
  {
    id: 'gulf-air-771-1983',
    date: '1983',
    type: 'Aircraft Bombing',
    description: 'Gulf Air Flight 771 bombed by Abu Nidal Organization near Abu Dhabi',
    casualties: 112,
    location: 'Near Abu Dhabi',
    perpetrator: 'Abu Nidal Organization',
  },
  {
    id: 'jal-404-1973',
    date: 'July 20, 1973',
    type: 'Hijacking',
    description: 'Japan Airlines Flight 404 hijacked by JRA/PFLP-EO, landed in Dubai',
    casualties: 0,
    location: 'Dubai International Airport',
    perpetrator: 'Japanese Red Army (JRA) with Palestinian militants',
    outcome: 'Plane destroyed in Benghazi, Libya',
    note: 'Sheikh Mohammed bin Rashid Al Maktoum personally negotiated, saved 140 lives',
  },
  {
    id: 'klm-861-1973',
    date: 'November 25, 1973',
    type: 'Hijacking',
    description: 'KLM Flight 861 hijacked by Arab Youth Organization for Liberation of Palestine',
    casualties: 0,
    location: 'Dubai (surrendered)',
    perpetrator: 'Arab Youth Organization for Liberation of Palestine',
    outcome: 'All 264 passengers and crew survived',
  },
  {
    id: 'indian-airlines-814-1999',
    date: '1999',
    type: 'Hijacking',
    description: 'Indian Airlines Flight 814 hijacked by Harkat-ul-Mujahideen',
    casualties: 1,
    location: 'Dubai (中途停留)',
    perpetrator: 'Harkat-ul-Mujahideen',
  },
  {
    id: 'iboya-ryan-2014',
    date: 'December 1, 2014',
    type: 'Lone Wolf Stabbing',
    description: 'Ibolya Ryan murdered in Boutik Mall, Al Reem Island, Abu Dhabi',
    casualties: 1,
    location: 'Abu Dhabi',
    victim: 'Ibolya Ryan (née Balázsi), 47-year-old Hungarian-American kindergarten teacher, mother of three',
    perpetrator: "Ala'a Badr Abdullah al-Hashemi (Yemeni-born UAE citizen, dubbed 'Reem Island Ghost')",
    outcome: 'Perpetrator executed July 13, 2015',
  },
  {
    id: 'houthis-2022',
    date: 'January 17, 2022',
    type: 'Drone/Missile Attack',
    description: 'Houthi attack on Abu Dhabi National Oil Company refinery and airport extension',
    casualties: 3,
    injured: 6,
    location: 'Musaffah, Abu Dhabi',
    perpetrator: 'Houthi movement in Yemen (Operation Hurricane of Yemen)',
    weapons: ['Drones', 'Ballistic missiles', 'Cruise missiles'],
    targets: ['ADNOC refinery', 'Abu Dhabi International Airport extension'],
  },
  {
    id: 'zvi-kogan-2024',
    date: 'November 2024',
    type: 'Targeted Murder',
    description: 'Rabbi Zvi Kogan, Israeli-Moldovan Chabad emissary, found dead in UAE',
    casualties: 1,
    location: 'UAE',
    victim: 'Zvi Kogan, 28, Chabad emissary',
    classification: 'Designated as "criminal antisemitic terrorist incident" by Israel and UAE',
    trialOutcome: 'March 31, 2025 - Three sentenced to death, one to life imprisonment',
  },
  {
    id: 'iran-cell-march-2026',
    date: 'March 2026',
    type: 'Network Dismantled',
    description: 'UAE dismantled terrorist network funded by Iran and Hezbollah',
    arrests: 'Multiple',
    activities: ['Money laundering', 'Terrorism financing'],
    cover: 'Fake commercial/company cover',
  },
  {
    id: 'iran-cell-april-2026',
    date: 'April 20, 2026',
    type: 'Cell Dismantled',
    description: 'Iran-linked terror cell with 27 individuals arrested',
    arrests: 27,
    ideology: "Velayat-e Faqih doctrine (Iran's clerical authority over state)",
    charges: [
      'Establishing/operating secret organisation',
      'Pledging allegiance to foreign entities',
      'Harming national unity and social peace',
      'Systematic terrorist and sabotage activities',
      'Recruiting young Emiratis through secret meetings',
      'Collecting and transferring funds to suspicious foreign entities',
      'Adopting extremist terrorist ideologies',
      'Incitement against UAE foreign policy',
    ],
    coordination: 'External parties linked to Hezbollah and Iran',
  },
]

// ============================================================================
// COUNTER-TERRORISM STRATEGY
// ============================================================================

export const counterTerrorismStrategy = {
  legalFramework: {
    primaryLaw: 'Federal Law No. 7 of 2014 on Combating Terrorism Offences',
    supportingLaw: 'Federal Law No. 39 of 2006 on International Judicial Cooperation in Criminal Matters',
    latestLaw: 'Federal Law No. 10 of 2025 on Combating Money Laundering, Terrorism Financing, and Financing of Illegal Organizations',
    nationalStrategy: 'National Strategy for Anti-Money Laundering, Countering the Financing of Terrorism and Proliferation Financing (AML/CFT/CPF) (September 2024)',
  },
  institutions: {
    hedayah: {
      name: 'Hedayah International Centre of Excellence for Countering Violent Extremism',
      location: 'Abu Dhabi',
      role: 'International Centre of Excellence for CVE',
    },
    sawabCentre: {
      name: 'Sawab Centre',
      type: 'UAE-US partnership',
      role: 'Digital communications hub to counter extremist ideologies online',
    },
    munasaha: {
      name: 'Munasaha Centres',
      location: 'Al Razeen prison complex',
      legalBasis: 'Article 66 of Counter-Terrorism Law',
      purpose: '"Enlightenment and reform" of terrorist threat persons/convicts',
      expandedMandate: '2019 law expanded to include anyone perceived to hold "extremist" or "deviant" thought',
      criticism: 'No effective counselling, no maximum time limit, coercion to renounce beliefs',
    },
    namlctc: {
      name: 'National Anti Money Laundering and Combatting Financing of Terrorism Committee',
      role: 'Key body for anti-money laundering and CFT',
    },
    eocn: {
      name: 'Executive Office for Control & Non-proliferation',
      established: 2009,
      role: 'Publishes and maintains Local Terrorist List',
    },
  },
  internationalCooperation: {
    memberships: [
      'Middle East and North Africa Financial Action Task Force (MENAFATF)',
      'Global Coalition to Defeat ISIS',
      'Global Counterterrorism Forum (co-chair)',
    ],
    partnerships: [
      'US counter-terrorism cooperation',
      'UK intelligence sharing',
      'OIC condemnation support',
    ],
  },
  designationControversies: {
    issue: 'Use of counter-terrorism law to designate political dissidents',
    criticism: 'HRW documented due process violations (April 2025)',
    notOnInternationalLists: 'Designations do not appear on UN, EU, or UK sanctions lists',
    alIslahDesignation: 'November 2014 - designated as terrorist organization',
  },
}

// ============================================================================
// IRAN-UAE THREAT DIMENSION
// ============================================================================

export const iranUaeThreat = {
  currentSituation: {
    context: '2026 Iran war (following coordinated Israeli-US strikes on Iran)',
    strikes: {
      period: 'February 28 - March 29, 2026',
      missilesAndDrones: '3,000+ over 5 weeks',
      march_1_2026: {
        casualties: '100+ injured, at least 4 killed',
        details: 'Iran fired hundreds of missiles and drones at Gulf cities including Dubai',
      },
      march_18_2026: 'Multiple Iranian strikes on UAE',
      march_23__2026: {
        intercepted: '7 ballistic missiles and 16 drones',
        source: 'Ministry of Defense',
      },
      march_29_2026: 'Iranian strike on key aluminium plant in Abu Dhabi, multiple injured',
    },
    april_2026: 'UAE carried out direct strikes against Iran for first time ever',
    israelSupport: 'Israel deployed Iron Dome, sent troops to UAE during Iran war',
  },
  ballisticMissileThreat: {
    totalFiredAtUAE: '3,000+ missiles and drones',
    interceptedMarch23: '7 ballistic missiles and 16 drones',
  },
  iranLinkedCells: {
    march_2026: {
      activity: 'Money laundering, terrorism financing',
      funding: 'Iran and Hezbollah',
      cover: 'Fake commercial/company cover',
    },
    april_2026: {
      arrests: 27,
      ideology: 'Velayat-e Faqih doctrine',
      activities: [
        'Secret meetings',
        'Recruiting young Emiratis',
        'Collecting and transferring funds',
        'Spread misleading ideas among Emirati youth',
        'Recruit for foreign loyalties',
      ],
      coordination: 'External parties linked to Hezbollah and Iran',
    },
  },
}

// ============================================================================
// THREAT ACTORS
// ============================================================================

export const threatActors = [
  {
    id: 'iran-hezbollah',
    name: 'Iran/Hezbollah',
    threatLevel: 95,
    capability: 90,
    intent: 95,
    type: 'State-sponsor and proxy',
    status: 'Active - primary threat',
  },
  {
    id: 'houthis',
    name: 'Houthi Movement',
    threatLevel: 75,
    capability: 70,
    intent: 85,
    type: 'Non-state proxy',
    status: 'Active - 2022 attack killed 3',
  },
  {
    id: 'al-qaeda',
    name: 'Al-Qaeda (AQAP)',
    threatLevel: 60,
    capability: 55,
    intent: 70,
    type: 'Terrorist organization',
    status: 'Active in Yemen',
    note: 'AQAP called for global attack on UAE interests (November 2025)',
  },
  {
    id: 'isis',
    name: 'ISIS',
    threatLevel: 50,
    capability: 45,
    intent: 60,
    type: 'Terrorist organization',
    status: 'Declined but persistent',
  },
  {
    id: 'lone-wolf',
    name: 'Lone Wolf Actors',
    threatLevel: 40,
    capability: 30,
    intent: 65,
    type: 'Individual actors',
    status: 'Low capability but high intent',
    example: 'Ibolya Ryan murder (2014)',
  },
  {
    id: 'iranian-strikes-2026',
    name: 'Iranian Strikes 2026',
    threatLevel: 98,
    capability: 95,
    intent: 90,
    type: 'State aggression',
    status: 'Ongoing - unprecedented',
  },
]

// ============================================================================
// TERRORIST FINANCING
// ============================================================================

export const terroristFinancing = {
  fatfStatus: {
    greyListEntry: 2019,
    greyListRemoval: 'February 23, 2024',
    greyListDuration: '5 years (2019-2024)',
    reason: 'Concerns about effectiveness of UAE AML/CFT regime',
    euResponse: 'Removed from High-Risk AML List following FATF exit (July 2025)',
  },
  ongoingConcerns: {
    theSentryReport: 'Evidence of UAE ongoing role in illicit arms and gold trade (February 2024)',
    entitiesMentioned: [
      'Haqqani Network funding via front companies',
      'Taliban funding',
      'Lashkar-e-Taiba funding (including for 26/11 Mumbai attacks via UAE banks)',
    ],
  },
  enforcement: {
    march_2026: 'UAE dismantled Hezbollah and Iran-linked network involved in money laundering and terror financing',
    latestLaw: 'Federal Law No. 10 of 2025 on AML/CFT',
  },
}

// ============================================================================
// MASS TRIALS AND CONVICTIONS
// ============================================================================

export const massTrials = [
  {
    id: 'uae-94',
    name: 'UAE 94 Case',
    date: 'March 2013',
    defendants: 94,
    charges: 'Coup attempt charges',
    verdict: {
      date: 'July 2013',
      convicted: 56,
      sentences: '3-10 years',
      triedInAbsentia: 8,
      absentiaSentences: '15 years',
      acquitted: 26,
    },
    ongoing: '51 individuals completed sentences by March 2023 but remained imprisoned',
    note: 'At least 4 transferred to Munasaha centers after being deemed to harbor "terrorist thoughts"',
  },
  {
    id: 'uae-84',
    name: '84-Person Trial',
    date: 'January 2024',
    defendants: 84,
    charges: 'Terrorism charges',
    unResponse: 'UN experts expressed grave concern at trial of 84 civil society members on spurious terrorism charges',
  },
  {
    id: 'life-terms-2024',
    name: 'Life Terms Reversal',
    date: 'June 2025',
    description: 'UAE Supreme Court upheld life terms for 24 convicted in mass trial',
    note: 'Reversed original acquittals from 2013 UAE 94 trial',
  },
  {
    id: 'zvi-kogan-trial',
    name: 'Zvi Kogan Murder Trial',
    date: 'March 31, 2025',
    description: 'Abu Dhabi federal court of appeals sentenced three to death and one to life',
    crime: 'Premeditated murder of Rabbi Zvi Kogan',
  },
  {
    id: 'al-islah-financing',
    name: 'Al-Islah Financing Trial',
    date: 'June 2025',
    description: 'UAE Supreme Court reconvicted 24 for financing the Al-Islah terrorist organisation',
  },
]

// ============================================================================
// REHABILITATION PROGRAMS
// ============================================================================

export const rehabilitationPrograms = {
  munasaha: {
    established: 'August 2014',
    locations: 'All centers located within Al Razeen prison complex',
    legalBasis: 'Article 66 of Counter-Terrorism Law for "enlightenment and reform"',
    expansion2019: '2019 Munasaha Center Law expanded mandate to include anyone perceived to hold "extremist" or "deviant" thought "likely" to commit terrorist acts',
    methods: 'Intensive religious re-education and nationalist propaganda; coercion to renounce beliefs and pledge loyalty to regime',
    criticism: {
      issues: [
        'No evidence detainees received effective counselling',
        'No maximum time limit on detention',
        'Reports to prosecution every 3 months (no court hearing required)',
        'UAE 94 case showed individuals spending over 3 years beyond original sentences',
      ],
      sources: 'ADHRB documented indefinite detention concerns (November 2025)',
    },
  },
  international: {
    hedayah: {
      role: 'International Centre of Excellence for Countering Violent Extremism',
      location: 'Abu Dhabi',
    },
  },
}

// ============================================================================
// 9/11 CONNECTIONS
// ============================================================================

export const nineElevenConnections = {
  hijackersTransit: {
    total: 19,
    transitedThroughUAE: 17,
    note: '17 of 19 9/11 hijackers transited through UAE before attacks',
  },
  funding: {
    detail: 'Hijackers received funding from UAE-based terror investors',
  },
}

// ============================================================================
// KEY STATISTICS
// ============================================================================

export const keyStatistics = [
  { label: 'Designated Organizations (2014)', value: 83 },
  { label: 'Local Terrorist List Total Entities', value: 714 },
  { label: 'Searchable Entities', value: 326 },
  { label: '9/11 Hijackers via UAE', value: '17/19' },
  { label: 'FATF Grey List Period', value: '2019-2024' },
  { label: 'Iranian Strikes 2026 (missiles/drones)', value: '3,000+' },
  { label: 'Iran-linked Arrests (April 2026)', value: 27 },
  { label: 'Houthi Attack 2022 Casualties', value: '3 killed, 6 injured' },
  { label: 'Zvi Kogan Murder - Death Sentences', value: 3 },
  { label: 'Gulf Air Flight 771 Casualties (1983)', value: 112 },
  { label: 'UAE 94 Trial Defendants', value: 94 },
  { label: 'UAE 94 Acquitted', value: 26 },
]

// ============================================================================
// TIMELINE DATA (for charts)
// ============================================================================

export const timelineData = [
  { date: '1973', events: 2, severity: 35, incidents: ['JAL 404', 'KLM 861'] },
  { date: '1983', events: 1, severity: 45, incidents: ['Gulf Air 771'] },
  { date: '1999', events: 1, severity: 30, incidents: ['Indian Airlines 814'] },
  { date: '2014', events: 1, severity: 40, incidents: ['Ibolya Ryan'] },
  { date: '2022', events: 1, severity: 65, incidents: ['Houthi Attack'] },
  { date: '2024', events: 1, severity: 55, incidents: ['Zvi Kogan'] },
  { date: '2026-Mar', events: 2, severity: 90, incidents: ['Iran Network', 'Iran Strikes'] },
  { date: '2026-Apr', events: 2, severity: 95, incidents: ['Iran Cell', 'Iran Strikes'] },
]

// ============================================================================
// INTELLIGENCE SOURCES
// ============================================================================

export const intelligenceSources = {
  tier0_government: {
    tier: 'TIER_0',
    name: 'Government Primary',
    count: 8,
    sources: [
      'UAE Mission to UN statements (uaeun.org)',
      'UAE EOCN / Executive Office for Control & Non-proliferation',
      'NAMLCFTC',
      'UAE Ministry of Economy & Tourism (moet.gov.ae)',
      'UAE Central Bank',
      'UAE Ministry of Foreign Affairs',
      'UAE Ministry of Interior / State Security',
      'UAE WAM news agency',
    ],
  },
  tier1_media: {
    tier: 'TIER_1',
    name: 'Mainstream Media',
    count: 12,
    sources: [
      'Reuters',
      'BBC',
      'Al Jazeera',
      'Al Arabiya',
      'The Guardian',
      'The National (UAE)',
      'Khaleej Times',
      'Gulf News',
      'CNN',
      'AP',
      'AFP',
    ],
  },
  tier2_research: {
    tier: 'TIER_2',
    name: 'Regional & Specialized',
    count: 15,
    sources: [
      'Human Rights Watch (hrw.org)',
      'Washington Institute',
      'Jamestown Foundation',
      'The Sentry',
      'CounterExtremism.com',
      'Hedayah',
      'Atlantic Council',
      'Brookings',
      'Chatham House',
    ],
  },
  tier3_secondary: {
    tier: 'TIER_3',
    name: 'Secondary',
    count: 5,
    sources: [
      'Wikipedia (multiple articles)',
      'Orinoco Tribune',
      'YouTube (news sources)',
      'Reddit (discussion)',
    ],
  },
  tier5_academic: {
    tier: 'TIER_5',
    name: 'Academic/Research',
    count: 2,
    sources: [
      'US Congressional Research Service (CRS)',
      'UK Parliament Committees',
    ],
  },
}

export const allSources = [
  ...intelligenceSources.tier0_government.sources.map((s) => ({ source: s, tier: 'TIER_0', credibility: 'VERIFIED' })),
  ...intelligenceSources.tier1_media.sources.map((s) => ({ source: s, tier: 'TIER_1', credibility: 'HIGH' })),
  ...intelligenceSources.tier2_research.sources.map((s) => ({ source: s, tier: 'TIER_2', credibility: 'MEDIUM' })),
  ...intelligenceSources.tier3_secondary.sources.map((s) => ({ source: s, tier: 'TIER_3', credibility: 'LOW' })),
  ...intelligenceSources.tier5_academic.sources.map((s) => ({ source: s, tier: 'TIER_5', credibility: 'MEDIUM' })),
]

// ============================================================================
// KEY FINDINGS
// ============================================================================

export const keyFindings = [
  'UAE faces ongoing threat from Iran-linked groups, Houthi drones, and lone wolf actors',
  '17 of 19 9/11 hijackers transited through UAE before attacks; hijackers received funding from UAE-based terror investors',
  'UAE designated 83 organizations as terrorist entities under Federal Law No. 7 (November 2014)',
  'UAE described by US as "best counter-terrorism ally" and its armed forces nicknamed "Little Sparta"',
  'Hedayah International Centre of Excellence for Countering Violent Extremism is headquartered in Abu Dhabi',
  'April 20, 2026: UAE State Security dismantled Iran-linked terror cell; arrested 27 individuals',
  'March 2026: UAE dismantled "terrorist network" funded by Iran and Hezbollah (money laundering + terror financing)',
  'UAE was on FATF grey list 2019-2024 (5 years); removed February 2024',
  'Despite FATF removal, evidence shows ongoing role in illicit arms and gold trade (The Sentry, February 2024)',
  'Iran launched 3,000+ missiles and drones at UAE over 5 weeks during 2026 Iran war',
  'Zvi Kogan murder: 3 sentenced to death, 1 to life (March 2025)',
  'Ibolya Ryan murder: Perpetrator Ala\'a Badr Abdullah al-Hashemi executed July 13, 2015',
  'UAE 94 case: 94 activists tried, 56 convicted, 26 acquitted (2013)',
  'Munasaha rehabilitation centers criticized for indefinite detention without effective counselling',
  'UAE conducted first ever direct strikes against Iran in April 2026',
]

// ============================================================================
// STAKEHOLDER IMPACTS
// ============================================================================

export const stakeholderImpacts = [
  { stakeholder: 'Israeli/Moldovan Community (Chabad)', sentiment: 'Grieving', impact: 'Zvi Kogan murder' },
  { stakeholder: 'Western Expatriates', sentiment: 'Alarmed', impact: 'Ibolya Ryan murder, ongoing threats' },
  { stakeholder: 'Emirati Youth', sentiment: 'Targeted', impact: 'Recruitment by Iran-linked cells' },
  { stakeholder: 'Financial Institutions', sentiment: 'Under Scrutiny', impact: 'FATF grey list, AML concerns' },
  { stakeholder: 'International Business', sentiment: 'Cautious', impact: 'Perceived instability from Iran threats' },
  { stakeholder: 'UAE Armed Forces', sentiment: 'Deploying', impact: 'Active operations vs Iran, "Little Sparta"' },
  { stakeholder: 'Civil Society', sentiment: 'Suppressed', impact: 'Mass trials, indefinite detention concerns' },
  { stakeholder: 'Regional Partners (Egypt, Saudi Arabia)', sentiment: 'Supportive', impact: 'Backed UAE after foiled terror plots' },
]

// ============================================================================
// SOURCES TIER DISTRIBUTION (for charts)
// ============================================================================

export const sourcesTierDistribution = [
  { tier: 'Government (TIER_0)', count: 8, color: '#ef4444' },
  { tier: 'Media (TIER_1)', count: 11, color: '#f97316' },
  { tier: 'Research (TIER_2)', count: 9, color: '#eab308' },
  { tier: 'Secondary (TIER_3)', count: 4, color: '#6b7280' },
  { tier: 'Academic (TIER_5)', count: 2, color: '#1e3a5f' },
]

// ============================================================================
// RESPONSE METRICS
// ============================================================================

export const responseMetrics = {
  casualties: 9,
  injured: 6,
  affectedPopulation: 0,
  stage: 'ACTIVE THREAT',
  severity: 5,
  activeCells: 2,
  networksDismantled: 2,
  arrestsApril2026: 27,
  iranStrikesIntercepted: 23,
}

// ============================================================================
// SYNTHESIZED FINDINGS BY CATEGORY
// ============================================================================

export const synthesizedFindings = {
  counterTerrorismLegal: {
    title: 'Counter-Terrorism Legal Framework',
    summary: 'UAE operates under Federal Law No. 7 of 2014 on Combating Terrorism Offences',
    keyPoints: [
      'Law defined as "overly broad" by Human Rights Watch',
      '83 organizations designated including Muslim Brotherhood, Al-Qaeda, Taliban, Hezbollah, Houthis, and ISIS',
      'Local Terrorist List contains 714 total entities (326 searchable) with daily updates',
    ],
  },
  terroristIncidents: {
    title: 'Terrorist Incidents in/affecting UAE',
    historicalAircraft: [
      { incident: 'Gulf Air Flight 771 (1983)', casualties: 112, perpetrator: 'Abu Nidal Organization' },
      { incident: 'Japan Airlines Flight 404 (1973)', casualties: 0, perpetrator: 'JRA/PFLP-EO' },
      { incident: 'KLM Flight 861 (1973)', casualties: 0, perpetrator: 'Arab Youth Organization' },
      { incident: 'Indian Airlines Flight 814 (1999)', casualties: 1, perpetrator: 'Harkat-ul-Mujahideen' },
    ],
    domesticAttacks: [
      { incident: 'Ibolya Ryan murder (Dec 2014)', outcome: 'Perpetrator executed July 2015' },
      { incident: '2022 Abu Dhabi Houthi attack', casualties: '3 killed, 6 injured' },
      { incident: 'Zvi Kogan murder (Nov 2024)', outcome: '3 sentenced to death, 1 life (March 2025)' },
      { incident: 'Multiple Iran-linked cells disrupted', status: 'March 2026, April 2026' },
    ],
  },
  counterStrategy: {
    title: 'Counter-Terrorism Strategy & Institutions',
    institutions: [
      { name: 'Hedayah', role: 'International Centre of Excellence for CVE', location: 'Abu Dhabi' },
      { name: 'Sawab Centre', role: 'UAE-US partnership digital communications hub', location: 'UAE' },
      { name: 'Munasaha', role: 'Rehabilitation centres (criticized as indefinite detention)', location: 'Al Razeen prison' },
    ],
  },
  designations: {
    title: 'Designations Controversies',
    summary: "UAE's use of counter-terrorism law to designate political dissidents drew HRW criticism",
    details: [
      'April 2025: 11 dissidents + 8 companies designated without due process',
      'Designations do not appear on UN, EU, or UK sanctions lists',
      'UAE designated Al Islah (local MB affiliate) as terrorist in 2014',
    ],
  },
  regionalDimensions: {
    title: 'Regional Dimensions',
    vsQatar: 'UAE cited Qatar support for "terrorism" and Muslim Brotherhood as key grievance (2017-2021)',
    vsIran: 'Ongoing threat; 3,000+ missiles/drones fired at UAE in 2026 Iran war',
    vsHouthis: '2022 drone attack killed 3; ongoing ballistic missile/drone threat',
    vsAlQaeda: 'UAE forces active in Yemen against AQAP',
    vsISIS: 'Leading coalition member; backed anti-ISIS military operations',
  },
  financing: {
    title: 'Terrorist Financing Issues',
    summary: 'UAE was on FATF grey list 2019-2024',
    concerns: [
      'Haqqani Network funding via front companies',
      'Taliban funding',
      'Lashkar-e-Taiba funding (including for Mumbai 26/11 attacks via UAE banks)',
    ],
    ongoing: 'The Sentry documented ongoing role in illicit arms and gold trade despite FATF removal',
  },
  rehabilitation: {
    title: 'Rehabilitation & Deradicalization',
    summary: 'Munasaha centres located at Al Razeen prison under Article 66 of Counter-Terrorism Law',
    criticism: [
      '2019 expansion allowed indefinite detention of those deemed to hold "extremist thought"',
      'No published rehabilitation program details',
      'UAE 94 case showed individuals completing sentences remaining imprisoned',
    ],
  },
  foreignFighters: {
    title: 'Foreign Fighters',
    summary: 'UAE condemned foreign fighter recruitment at UN in 2014; called for international strategy',
    note: 'No confirmed UAE nationals joining ISIS in significant numbers documented',
  },
  context2026: {
    title: '2026 Context',
    summary: 'Intense Iran-UAE tensions during 2026 Iran war',
    details: [
      'Iran fired 3,000+ missiles/drones at UAE over 5 weeks',
      'UAE simultaneously dismantling Iran-linked domestic terror cells',
      'UAE conducting direct military strikes against Iran for first time',
    ],
  },
}

// ============================================================================
// MAIN DATA EXPORT
// ============================================================================

export const terrorismExtremismData = {
  // Metadata
  metadata: {
    ...executionMetadata,
    focusAreas,
    queryPatterns,
  },

  // Crisis overview
  overview: {
    title: 'Terrorism & Extremism',
    type: 'SECURITY',
    severity: 5,
    status: 'ACTIVE THREAT',
    lastUpdated: '2026-04-27',
    phoenixStage: 'containment' as PhoenixStage,
  },

  // Key entities
  entities: terroristEntities,

  // Incidents
  incidents: historicalIncidents,

  // Counter-terrorism
  counterTerrorism: counterTerrorismStrategy,

  // Iran threat
  iranThreat: iranUaeThreat,

  // Threat actors
  threatActors,

  // Financing
  financing: terroristFinancing,

  // Trials
  trials: massTrials,

  // Rehabilitation
  rehabilitation: rehabilitationPrograms,

  // 9/11
  nineEleven: nineElevenConnections,

  // Statistics
  statistics: keyStatistics,

  // Timeline
  timeline: timelineData,

  // Sources
  sources: allSources as LocalSource[],
  sourceTiers: sourcesTierDistribution,

  // Key findings
  keyFindings,

  // Stakeholder impacts
  stakeholderImpacts: stakeholderImpacts as LocalStakeholderImpact[],

  // Response metrics
  responseMetrics,

  // Synthesized findings
  synthesizedFindings,

  // Timeline (for timeline component)
  crisisTimeline: [
    { date: '1973-07-20', stage: 'detection' as const, description: 'Japan Airlines Flight 404 hijacking: JRA/PFLP-EO hijacked Boeing 747; landed in Dubai; plane later destroyed in Benghazi' },
    { date: '1973-11-25', stage: 'detection' as const, description: 'KLM Flight 861 hijacking: Arab Youth Organization hijacked Boeing 747; landed in Dubai; 0 deaths' },
    { date: '1983', stage: 'detection' as const, description: 'Gulf Air Flight 771 bombing: Abu Nidal Organization bombed plane near Abu Dhabi; 112 dead' },
    { date: '1999', stage: 'detection' as const, description: 'Indian Airlines Flight 814 hijacking: Harkat-ul-Mujahideen hijacked; 1 dead' },
    { date: '2014-12-01', stage: 'detection' as const, description: "Ibolya Ryan murder: Hungarian-American teacher Ala'a Badr Abdullah al-Hashemi stabbed in Abu Dhabi mall; executed July 13, 2015" },
    { date: '2022-01-17', stage: 'containment' as const, description: 'Houthi Abu Dhabi attack: 3 killed (Hardeep Singh 28, Hardev Singh 35, Mamoor Khan 29), 6 injured at ADNOC refinery and airport extension' },
    { date: '2024-11', stage: 'detection' as const, description: 'Zvi Kogan disappearance: Chabad rabbi missing; later found dead in UAE; classified as antisemitic terror incident' },
    { date: '2025-03-31', stage: 'resolution' as const, description: 'Zvi Kogan murder trial verdict: 3 sentenced to death, 1 to life for premeditated murder' },
    { date: '2026-03', stage: 'containment' as const, description: 'Iran-linked network dismantled: Money laundering and terror financing network broken up; multiple arrests' },
    { date: '2026-03-01', stage: 'containment' as const, description: 'Iranian strikes on UAE begin: Over 100 injured, 4 killed; hundreds of missiles and drones fired at Gulf cities' },
    { date: '2026-03-29', stage: 'containment' as const, description: 'Iranian strike on aluminium plant: Key aluminium plant in Abu Dhabi hit; multiple injuries' },
    { date: '2026-04-20', stage: 'containment' as const, description: '27 suspects arrested: Iran-linked terror cell dismantled by UAE State Security; linked to Velayat-e Faqih doctrine' },
    { date: '2026-04', stage: 'containment' as const, description: 'UAE direct strikes on Iran: First direct UAE strikes against Iran in history' },
  ],
}
