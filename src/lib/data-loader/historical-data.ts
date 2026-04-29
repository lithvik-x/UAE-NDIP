/**
 * Historical Data - UAE National Digital Intelligence Platform
 *
 * Comprehensive historical era data for the UAE spanning from Pre-Federation
 * through the Recent Era (2023-2026). Each era is structured according to
 * the HistoricalEra type definition.
 */

import type {
  HistoricalEra,
  HistoricalEvent,
  PolicyOutcome,
  CredibilityScore,
  SourceReference,
  KeyFinding,
  TierLevel,
} from './types'

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function createCredibilityScore(
  tier: TierLevel,
  score: number,
  sources: number,
  lastVerified: string
): CredibilityScore {
  return { tier, score, sources, lastVerified }
}

function createSourceReference(
  name: string,
  tier: TierLevel,
  date: string,
  url?: string
): SourceReference {
  return url ? { name, url, tier, date } : { name, tier, date }
}

// ============================================================================
// ERA 1: PRE-FEDERATION (BEFORE 1971)
// ============================================================================

export const preFederationData: HistoricalEra = {
  id: 'hist-8-1',
  era: 'Pre-Federation',
  period: { start: '1820', end: '1971' },
  description:
    'The Pre-Federation Era encompasses the history of the Arabian Gulf sheikhdoms from the earliest British contacts (1820) through the formation of the Trucial States, and culminating in the December 2, 1971 formation of the United Arab Emirates. This era covers approximately 150 years of British protectorate relationships, traditional economies (pearling), early oil discoveries, and the personalities who would become the UAE\'s founding fathers.',
  // UAE Relevance Assessment Matrix
  relevanceMatrix: [
    { topic: 'Trucial States treaties (1820, 1853, 1892)', priority: 'CRITICAL', score: 10 },
    { topic: 'British protectorate system', priority: 'CRITICAL', score: 10 },
    { topic: 'Pearl diving economy', priority: 'HIGH', score: 8 },
    { topic: 'Oil discovery timeline (1935-1971)', priority: 'CRITICAL', score: 10 },
    { topic: 'Zayed bin Sultan\'s early life', priority: 'CRITICAL', score: 10 },
    { topic: 'Rashid bin Saeed\'s transformation of Dubai', priority: 'HIGH', score: 9 },
    { topic: 'Buraimi Dispute', priority: 'HIGH', score: 9 },
    { topic: '1968 British withdrawal', priority: 'CRITICAL', score: 10 },
    { topic: 'Federation negotiations', priority: 'CRITICAL', score: 10 },
    { topic: 'Western explorers (Philby, Thesiger, Codrai)', priority: 'MEDIUM', score: 5 },
  ],
  // The Seven Sheikhdoms
  sheikhdoms: [
    { emirate: 'Abu Dhabi', duration: '1820–1971', entryMethod: 'Original signatory' },
    { emirate: 'Ajman', duration: '1820–1971', entryMethod: 'Original signatory' },
    { emirate: 'Dubai', duration: '1833–1971', entryMethod: 'Bani Yas tribe settled' },
    { emirate: 'Fujairah', duration: '1952–1971', entryMethod: 'Acceded later' },
    { emirate: 'Ras Al Khaimah', duration: '1820–1972', entryMethod: 'Original signatory (joined UAE Feb 10, 1972)' },
    { emirate: 'Sharjah', duration: '1820–1971', entryMethod: 'Original signatory' },
    { emirate: 'Umm Al Quwain', duration: '1820–1971', entryMethod: 'Original signatory' },
    { emirate: 'Kalba', duration: '1936–1951', entryMethod: 'Separate sheikhdom, merged with Sharjah' },
  ],
  // Currency Evolution
  currencyEvolution: [
    { period: '1820–1899', currency: 'Ottoman lira' },
    { period: '1899–1959', currency: 'Indian rupee' },
    { period: '1959–1966', currency: 'Gulf rupee' },
    { period: '1966–1971', currency: 'Bahraini dinar' },
  ],
  // Key Treaties
  treaties: [
    {
      name: 'General Maritime Treaty',
      date: 'January 8, 1820',
      description: 'Established peace between Britain and Gulf sheikhs; mandated cessation of plunder and piracy.',
      articles: '"cessation of plunder and piracy by land and sea...forever"',
    },
    {
      name: 'Perpetual Maritime Truce',
      date: 'May 4, 1853',
      description: 'Prohibited sea aggression, overseen by British political agent at Bushire. Established the term "trucial".',
      articles: '3 articles',
    },
    {
      name: 'Exclusive Agreement',
      date: 'March 5-14, 1892',
      description: 'Rulers bound not to enter agreements with any Power other than Britain; no foreign agent residence without British permission; no territory cession except to Britain.',
      articles: 'Exclusive relations, Foreign agents prohibition, Territory disposal restrictions',
    },
  ],
  // British Representatives
  britishRepresentatives: [
    { name: 'John Baron Howes', period: '1939–1940 (first British representative)' },
    { name: 'Julian F. Walker', period: '1971 (last British representative)' },
    { name: 'Glen Balfour-Paul', period: '1966 (delivered news of Shakhbut\'s deposition)' },
  ],
  // Pearl Diving Data
  pearlingData: {
    peakBoats: '4,500',
    peopleEmployed: '74,000+',
    dubaiBoats1907: '335',
    boats1929: '60',
    season: 'June–September (4 months)',
    declineStarted: '1920s',
  },
  // Diving Equipment
  divingEquipment: [
    { name: 'Dyeen', description: 'Woven bag for storing collected shells' },
    { name: 'Fattam', description: 'Clip from turtle shells to plug nose during descent' },
    { name: 'Yeda', description: 'Rope tethering diver to dhow' },
  ],
  // Decline Factors
  declineFactors: [
    { factor: 'Japan\'s artificial pearls', impact: 'Caused steep decline in 1920s' },
    { factor: 'Great Depression', impact: 'Reduced global purchasing power' },
    { factor: 'Diminishing yields', impact: 'Pearl banks depleted overfishing' },
  ],
  // Oil Discovery Timeline
  oilTimeline: [
    { year: '1935', event: 'Peter Cox arrived', details: 'Anglo Persian geologist in Abu Dhabi' },
    { year: 'January 1936', event: 'IPC option', details: '2-year option on Abu Dhabi for 7,000 rupees down + 3,000/month' },
    { year: 'January 1939', event: 'PDTC concession', details: '75-year concession for entire territory' },
    { year: '1946-1950', event: 'Gravity surveys', details: 'Conducted; halted due to sand dunes' },
    { year: '1950', event: 'Drilling at Ras Sadr', details: 'Dry hole; shifted to western Abu Dhabi' },
    { year: '1958', event: 'Umm Shaif discovery', details: 'ADMA struck oil at ~8,755 ft (2,668m)' },
    { year: '1959', event: 'Murban No.3', details: 'PDTC discovered onshore oil' },
    { year: '1962', event: 'Umm Shaif on stream', details: 'Field production began' },
    { year: '1962', event: 'Bu Hasa discovered', details: 'Oil field found' },
    { year: '1964', event: 'Murban field on stream', details: 'Production began' },
    { year: '1965', event: 'Zakum offshore', details: 'ADMA discovered field' },
    { year: '1971', event: 'ADNOC established', details: 'National oil company formed' },
  ],
  // Concession Details
  concessionDetails: {
    ipcDownPayment: '7,000 rupees',
    monthlyPayment: '3,000 rupees',
    concessionDuration: '75 years (from 1939)',
    profitSharing: '50-50 agreement signed 1965-66 with Sheikh Shakhbut',
    adnocStake: '60% interest in ADPC and ADMA (1974)',
  },
  // Companies
  companies: [
    { name: 'Iraq Petroleum Company', acronym: 'IPC', role: 'Parent company', ownership: 'BP, Shell, Exxon, CFP' },
    { name: 'Petroleum Development (Trucial Coast)', acronym: 'PDTC', role: 'Concession holder', ownership: 'Later renamed ADPC' },
    { name: 'Abu Dhabi Petroleum Company', acronym: 'ADPC', role: 'Operations', ownership: 'IPC associate' },
    { name: 'Abu Dhabi Marine Areas Ltd.', acronym: 'ADMA', role: 'Offshore', ownership: 'BP and Total (CFP) joint venture' },
    { name: 'Anglo Persian Oil Company', acronym: 'APOC', role: 'Forerunner', ownership: 'Later became BP' },
    { name: 'Abu Dhabi National Oil Company', acronym: 'ADNOC', role: 'National company', ownership: 'Created 1971' },
  ],
  // Production Data
  productionFields: [
    { field: 'Umm Shaif offshore', discovery: '1958', onStream: '1962', productionData: '~300 km² super-giant field' },
    { field: 'Murban-Bab onshore', discovery: '1959', onStream: '1964', productionData: '~450 km²; 60,270 bopd by 1979; 630 MMbo cumulative by 1980' },
    { field: 'Bu Hasa', discovery: '1962', onStream: '-', productionData: '-' },
    { field: 'Zakum offshore', discovery: '1965', onStream: '-', productionData: '-' },
  ],
  // UAE Reserves
  uaeReserves: {
    oilReservesAbuDhabi: '95% of UAE',
    oilReservesGlobalRank: '6th largest proven globally',
    naturalGasAbuDhabi: '92% of UAE',
    abuDhabiLandArea: '67,340 km² (≈ West Virginia)',
    islandsInTerritory: '~200',
    uaeProduction2010: '~2.3 MMbopd',
  },
  // Trucial States Council
  truciallStatesCouncil: {
    formationDate: '21 March 1952',
    initialChair: 'British Political Agent',
    firstElectedChair: 'Sheikh Saqr bin Mohammed Al Qasimi (Ras Al Khaimah)',
    termEnded: 'October 1968',
    activities: 'Trucial States Development Fund, interstate infrastructure, agriculture, education, healthcare',
  },
  // Zayed bin Sultan - Biographical Data
  zayedBiographical: {
    born: 'May 6, 1918',
    birthplace: 'Qasr Al Hosn, Abu Dhabi',
    fullName: 'Zayed bin Sultan bin Zayed bin Khalifa bin Shakhbut Al Nahyan',
    father: 'Sultan bin Zayed Al Nahyan (ruler 1922-1926)',
    mother: 'Salama bint Butti Al Qubaisi',
    died: 'November 2, 2004 (aged 86)',
    religion: 'Sunni Islam',
    marriages: 7,
    children: '19 sons, ~30 total',
    keySons: 'Khalifa (1948-2022), Mohamed (1961-), Mansour (1970-), Abdullah (1972-)',
  },
  // Zayed Political Career
  zayedCareer: [
    { year: '1926', position: 'Moved to Al Ain' },
    { year: '1946', position: 'Governor of Eastern Region (based at Muwaiji Fort, Al Ain)' },
    { year: '1952', position: 'Opposed Saudi forces at Buraimi Oasis' },
    { year: '1955', position: 'Gave evidence at Buraimi arbitration tribunal, Geneva' },
    { year: 'August 6, 1966', position: 'Became Ruler of Abu Dhabi (bloodless palace coup)' },
    { year: 'December 2, 1971', position: 'President of UAE (re-elected 1976, 1981, 1986, 1991)' },
    { year: 'November 2, 2004', position: 'Died' },
  ],
  // Zayed Financial Data
  zayedFinancial: [
    { item: 'Fortune (Forbes, 2004)', value: '~$20 billion' },
    { item: 'Tittenhurst Park purchase', value: '£5m (1988)' },
    { item: 'Arab Friendship Foundation donation', value: '£50,000 (1970)' },
    { item: 'Margaret McKay donation', value: '£40,000 (1970)' },
  ],
  // Zayed Achievements
  zayedAchievements: [
    'Founded UAE (1971)',
    'Treaty of Jeddah (Saudi border) (1974)',
    'Founded ADIA (1976) - now ~$1 trillion AUM, world\'s 3rd largest SWF',
    'Founded Al Nahyaneia Model School (1959) - first formal school in Al Ain',
    'Founded Abu Dhabi Fund for Arab Economic Development (1971)',
    'Founded Dar Al Maal Al Islami Trust (1981)',
    'Financed Marib Dam (1984)',
    'Sheikh Zayed Grand Mosque - Completed after his death',
  ],
  // Rashid bin Saeed - Biographical Data
  rashidBiographical: {
    born: 'June 11, 1912',
    birthplace: 'Dubai, Trucial States',
    died: 'October 7, 1990 (aged 78)',
    father: 'Saeed bin Maktoum bin Hasher Al Maktoum',
    mother: 'Hessa bint Al Murr',
    spouse: 'Latifa bint Hamdan bin Zayed Al Nahyan (m. 1940; died 1983)',
    children: '9 (4 sons, 5 daughters)',
  },
  // Rashid Political Career
  rashidCareer: [
    { year: 'Late 1930s', position: 'Effectively managing Dubai affairs' },
    { year: 'September 10, 1958', position: 'Became Ruler of Dubai' },
    { year: '1971–1990', position: 'Vice President of UAE' },
    { year: '1979–1990', position: 'Prime Minister of UAE' },
  ],
  // Rashid Infrastructure Projects
  rashidProjects: [
    { project: 'Dubai Creek dredging', date: '1958-1959', cost: '£500,000 loan from Kuwait' },
    { project: 'Maktoum Bridge', date: '1963', cost: 'First creek crossing' },
    { project: 'Port Rashid contract', date: 'June 1967', cost: 'Opened 1972' },
    { project: 'Jebel Ali Port', date: 'Opened 1983', cost: 'World\'s largest man-made harbour (66-berths)' },
    { project: 'Dubai World Trade Centre', date: '1979', cost: '39 storeys, tallest in Middle East' },
    { project: 'Dubai Dry Docks', date: '1983', cost: '-' },
    { project: 'First flights', date: '1961', cost: '-' },
    { project: 'Asphalt runway', date: 'May 1965', cost: '-' },
  ],
  // Rashid Trade Statistics
  rashidTrade: [
    { metric: 'Dubai gold imports (from London)', value: 'World\'s 3rd largest', year: '1966' },
    { metric: 'Gold received', value: '~4 million ounces', year: '1966' },
    { metric: 'Watch imports', value: '$15+ million', year: '1966' },
    { metric: 'Silver traded', value: '5.5 million ounces', year: '1966' },
  ],
  // Rashid Population Growth
  rashidPopulation: [
    { year: '1968', population: '59,000' },
    { year: '1980', population: '278,000+' },
  ],
  // Western Explorers
  explorers: [
    {
      name: 'St John Philby',
      lifespan: '1885–1960',
      background: 'British Arabist, explorer, and colonial intelligence officer who became key advisor to King Ibn Saud of Saudi Arabia.',
      books: ['The Heart of Arabia (1922)', 'Arabian Sands (1959)', 'The Empty Quarter (1933)'],
    },
    {
      name: 'Wilfred Thesiger',
      lifespan: '1910–2003',
      background: 'British military officer and explorer who undertook two major crossings of the Empty Quarter (Rub al Khali).',
      books: ['Arabian Sands (1959)'],
    },
    {
      name: 'Ronald Codrai',
      lifespan: '1920–2000',
      background: 'Photographer who documented the Trucial States from late-1940s to mid-1950s while working for oil exploration concession.',
      books: ['Seafarers of the Emirates', 'Dubai: A Collection of Mid-twentieth Century Photographs', 'Faces of the Emirates'],
    },
  ],
  // Buraimi Dispute Data
  buraimiGeographic: {
    totalVillages: 9,
    villagesOman: 3,
    villagesOmanNames: 'Buraimi, Hamasa, Saara',
    villagesAbuDhabi: 6,
    villagesAbuDhabiNames: 'Al Ain, Hili, Jimi, Murtiridh, Muwaiqi, Qattarah',
  },
  buraimiTimeline: [
    { year: '1940s', event: 'Wilfred Thesiger stayed with Sheikh Zayed in Muwaiqi during Empty Quarter crossings' },
    { year: '1948', event: 'IPC geologists spotted "beautiful" Fahud anticline in Oman' },
    { year: '1949-1952', event: 'Saudi Arabia-Abu Dhabi border dispute over Buraimi reaches peak' },
    { year: 'August 1952', event: '50-strong Saudi contingent arrived in Hamasa' },
    { year: '1954', event: 'Fighting broke out after failed Geneva arbitration' },
    { year: 'July 1954', event: 'Buraimi arbitration agreement concluded' },
    { year: 'October 1955', event: 'Forceful removal of Saudis and sympathisers' },
    { year: '1955', event: 'Zayed and brother Hazza attended Geneva tribunal' },
    { year: 'August 21, 1974', event: 'Saudi-UAE Boundary Agreement signed' },
  ],
  buraimiZayedRole: {
    bribeRejected: '~£30 million (to allow Aramco exploration)',
    tribunalAttendance: 'Geneva, 1955 (with brother Hazza)',
    tribunalCollapse: 'Amid bribery allegations',
  },
  buraimiResolution: 'Agreement between Kingdom of Saudi Arabia and United Arab Emirates on the Delimitation of Boundaries, signed August 21, 1974. Includes ownership of giant Shaybah field. Final agreement by Saudi Arabia, Qatar, Abu Dhabi, Oman.',
  // British Withdrawal Data
  withdrawalStats: {
    britishEmpireControl1918: 'Quarter of Earth\'s surface',
    foreignersUnderBritishRule1945: '700 million',
    foreignersUnderBritishRule1965: '5 million',
    troopsToWithdraw: '25,000',
    plannedSavings: '£75 million',
    kuwaitTroops1961: '7,000',
  },
  withdrawalTimeline: [
    { date: 'October 1964', event: 'Labour Party elected (4-seat majority)' },
    { date: 'February 9, 1965', event: 'Defence budget presented' },
    { date: 'August 6, 1966', event: 'Sheikh Zayed became ruler of Abu Dhabi' },
    { date: '1966', event: 'Defence review reported' },
    { date: 'February 28, 1967', event: 'Healey unveiled plans to withdraw 25,000 troops from east of Suez' },
    { date: 'November 1967', event: 'Britain withdrew from Aden' },
    { date: 'November 18, 1967', event: 'Pound devalued' },
    { date: 'January 17, 1968', event: 'MPs condemned withdrawal as "shameful and criminal"' },
    { date: 'January 22, 1968', event: 'Denis Healey\'s BBC Panorama remarks' },
    { date: 'January 24, 1968', event: 'Goronwy Roberts faced Commons' },
    { date: 'January 16/24, 1968', event: 'British withdrawal announced' },
    { date: 'December 1, 1971', event: 'Final British withdrawal' },
  ],
  desertMeeting: {
    date: 'February 18, 1968',
    location: 'Argoub Al Sedirah (desert highland between Dubai and Abu Dhabi)',
    description: 'Met in a tent erected in the desert and talked for hours. Handshake agreement establishing what became UAE.',
  },
  // Federation Negotiations
  federationNegotiations: {
    campaignPeriod: 'February 18, 1968 – February 10, 1972 (3 years, 11 months)',
    initialPlan: '9 emirates',
    finalFounding: '6 (+ Ras Al Khaimah later)',
    proposedCommittee: '13-member',
  },
  parliamentaryRepresentation: [
    { emirate: 'Abu Dhabi', seats: 8, vetoPower: 'Joint veto' },
    { emirate: 'Dubai', seats: 8, vetoPower: 'Joint veto' },
    { emirate: 'Ras Al Khaimah', seats: 6, vetoPower: 'Disputed' },
  ],
  financialCommitments: [
    { source: 'Arab League development fund offer', amount: '$5 million' },
    { source: 'British Development Fund', amount: '£2.5 million' },
  ],
  recognitionSequence: [
    { entity: 'Jordan', date: 'December 2, 1971 (first)' },
    { entity: 'Arab League', date: 'December 6, 1971' },
    { entity: 'United Nations', date: 'December 9, 1971' },
  ],
  whyBahrainQatarWithdrew: [
    { emirate: 'Bahrain', reason: 'Held out for representation on basis of population (most populous at time)' },
    { emirate: 'Qatar', reason: 'Proposed that smaller Northern Trucial States be amalgamated into single political entity' },
  ],
  independenceDates: [
    { date: 'August 1971', emirate: 'Bahrain' },
    { date: 'September 1971', emirate: 'Qatar' },
    { date: 'December 2, 1971', emirate: 'UAE formed (6 emirates)' },
    { date: 'February 10, 1972', emirate: 'Ras Al Khaimah joined' },
  ],
  // Qasr Al Hosn Data
  qasrAlHosn: {
    arabic: 'قَصْر ٱلْحُصْن (Qasr al-Husn)',
    translation: '"The Fortified Palace"',
    location: 'Sheikh Zayed the First Street, Abu Dhabi',
    coordinates: '24°28′56.6″N 54°21′17.35″E',
    originalWatchtowerBuilt: '1761',
    supervisor: 'Mohammed Al Bastaki',
    watchtowerHeight: '30 m (98 ft)',
    expandedToFort: '1793 by Shakhbut bin Dhiyab Al Nahyan',
    majorExtension: 'Late 1930s (funded by oil revenues)',
    palaceFunctionEnded: '1966',
    renovations: '1976–1983 (painted white)',
  },
  // Abu Dhabi Early History
  abuDhabiEarlyHistory: [
    { evidence: 'Human habitation', date: '125,000 years' },
    { evidence: 'Jebel Faya evidence', date: '125,000 years old (thermoluminescence)' },
    { evidence: 'Flint tools at Jebel Barakah', date: '200,000 BCE' },
    { evidence: 'Neolithic period', date: '5000-3100 BCE' },
    { evidence: 'Hafit period', date: '3200-2600 BCE' },
    { evidence: 'Umm Al Nar culture', date: '2600-2000 BCE' },
    { evidence: 'Wadi Suq culture', date: '2000-1300 BCE' },
    { evidence: 'Iron Age periods', date: '1200-300 BCE' },
    { evidence: 'Camel domestication', date: 'c. 1000 BCE' },
  ],
  // Key Events (Expanded)
  keyEvents: [
    {
      date: '1820',
      title: 'General Maritime Treaty',
      description: 'Britain organized its strongest naval force ever sent to the Gulf (3,000 fighting men in three ships). After fierce fighting, Ras al-Khaimah fell, and coastal towns surrendered. On the beach, British and Arab representatives signed the treaty establishing peace and ending piracy.',
      significance: 'critical',
    },
    {
      date: '1853',
      title: 'Perpetual Maritime Truce',
      description: 'Prohibited sea aggression, overseen by the British political agent at Bushire. This established the term "trucial" - referring to states bound by treaty.',
      significance: 'critical',
    },
    {
      date: '1892',
      title: 'Exclusive Agreement',
      description: 'A treaty signed March 5-14, 1892, between the British Empire and the rulers of the Trucial States. Rulers bound not to enter agreements with any Power other than Britain, not to allow residence of foreign agents without British permission, and not to cede territory except to Britain.',
      significance: 'critical',
    },
    {
      date: '1935',
      title: 'Oil Exploration Begins',
      description: 'Anglo Persian geologist Peter Cox arrived in Abu Dhabi. January 1936: IPC option for Abu Dhabi for 7,000 rupees down + 3,000/month. January 1939: PDTC 75-year concession for entire territory granted.',
      entities: ['Peter Cox', 'IPC', 'PDTC'],
      significance: 'critical',
    },
    {
      date: '1958',
      title: 'First Oil Discovery',
      description: 'ADMA struck oil at Umm Shaif offshore field at approximately 8,755 ft depth. This discovery marked a turning point in the country\'s history, transforming Abu Dhabi from a small fishing village to a wealthy emirate.',
      entities: ['ADMA', 'ADNOC'],
      significance: 'critical',
    },
    {
      date: '1966',
      title: 'Sheikh Zayed Becomes Ruler of Abu Dhabi',
      description: 'Sheikh Zayed bin Sultan Al Nahyan became Ruler of Abu Dhabi on August 6, 1966 via bloodless palace coup, succeeding his brother Shakhbut.',
      entities: ['Sheikh Zayed bin Sultan Al Nahyan'],
      outcome: 'Enabled federation talks with Sheikh Rashid of Dubai',
      significance: 'critical',
    },
    {
      date: 'January 1968',
      title: 'British Withdrawal Announced',
      description: 'Britain announced withdrawal from "east of Suez" following sterling devaluation and defense policy changes under Harold Wilson\'s Labour government.',
      significance: 'critical',
    },
    {
      date: 'February 18, 1968',
      title: 'Zayed-Rashid Desert Meeting',
      description: 'Sheikh Zayed and Dubai\'s Sheikh Rashid met at Argoub Al Sedirah, a desert highland between Dubai and Abu Dhabi. They "met in a tent erected in the desert and talked for hours" and reached a handshake agreement establishing what became the UAE.',
      entities: ['Sheikh Zayed bin Sultan Al Nahyan', 'Sheikh Rashid bin Saeed Al Maktoum'],
      significance: 'critical',
    },
    {
      date: 'December 2, 1971',
      title: 'UAE Federation Formed',
      description: 'Six emirates declared independence and formed the United Arab Emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Fujairah. Sheikh Zayed elected first President.',
      entities: ['Sheikh Zayed bin Sultan Al Nahyan', 'Sheikh Rashid bin Saeed Al Maktoum'],
      significance: 'critical',
    },
    {
      date: 'February 10, 1972',
      title: 'Ras Al Khaimah Joins Federation',
      description: 'Ras Al Khaimah became the seventh emirate to join the UAE, completing the federation.',
      entities: ['Sheikh Saqr bin Mohammed Al Qasimi'],
      significance: 'major',
    },
  ],
  policyOutcomes: [
    {
      policy: 'General Maritime Treaty (1820)',
      year: '1820',
      impact: 'Established peace with Britain; ended piracy as a recognized practice',
    },
    {
      policy: 'Exclusive Agreement (1892)',
      year: '1892',
      impact: 'Formalized British protectorate status; restricted sovereign foreign relations',
      successors: ['Treaty of Friendship 1971'],
    },
    {
      policy: 'Petroleum Concession (1939)',
      year: '1939',
      impact: 'Granted 75-year oil exploration rights; eventual oil wealth foundation',
    },
    {
      policy: '50-50 Profit Sharing Agreement',
      year: '1965',
      impact: 'Sheikh Shakhbut negotiated equal profit split with oil companies',
    },
  ],
  entityInvolvement: [
    'Sheikh Zayed bin Sultan Al Nahyan',
    'Sheikh Rashid bin Saeed Al Maktoum',
    'Sheikh Saqr bin Mohammed Al Qasimi',
    'Peter Cox',
    'British Empire',
    'IPC/ADPC',
    'ADMA',
    'Trucial States Council',
  ],
  nationBuildingMilestones: [
    '1761: Qasr Al Hosn watchtower constructed in Abu Dhabi',
    '1793: Watchtower expanded into fort by Shakhbut bin Dhiyab Al Nahyan',
    '1820: General Maritime Treaty signed; "Pirate Coast" becomes "Trucial Coast"',
    '1833: Dubai established as sheikhdom by Bani Yas tribe',
    '1853: Perpetual Maritime Truce established',
    '1892: Exclusive Agreement signed (March)',
    '1900s: Pearl diving industry collapses due to Japanese cultured pearls',
    '1918: Zayed bin Sultan born (May 6)',
    '1932: First oil surveys begin; St John Philby crosses Rub\' al Khali',
    '1939: Oil concession granted to PDTC',
    '1946: Wilfred Thesiger begins Empty Quarter crossings',
    '1946: Zayed appointed Governor of Eastern Region',
    '1952: Trucial States Council formed; Buraimi dispute begins',
    '1955: Buraimi arbitration; Saudi forces removed',
    '1958: ADMA strikes oil at Umm Shaif',
    '1958: Rashid bin Saeed becomes Ruler of Dubai',
    '1959: Murban No.3 oil discovery',
    '1966: Zayed becomes Ruler of Abu Dhabi (August 6)',
    '1968: British announces withdrawal (January); Zayed-Rashid meeting (February 18)',
    '1971: UAE formed (December 2); Bahrain and Qatar gain independence separately',
    '1972: Ras Al Khaimah joins UAE (February 10)',
  ],
  credibility: createCredibilityScore(1, 92, 24, '2026-04-28'),
  sources: [
    createSourceReference('Wikipedia - Exclusive Agreement', 2, '2026-04-27', 'https://en.wikipedia.org/wiki/Exclusive_Agreement'),
    createSourceReference('Wikipedia - Trucial States', 2, '2026-04-27', 'https://en.wikipedia.org/wiki/Trucial_States'),
    createSourceReference('Wikipedia - Zayed bin Sultan Al Nahyan', 2, '2026-04-27', 'https://en.wikipedia.org/wiki/Zayed_bin_Sultan_Al_Nahyan'),
    createSourceReference('Wikipedia - Rashid bin Saeed Al Maktoum', 2, '2026-04-27', 'https://en.wikipedia.org/wiki/Rashid_bin_Saeed_Al_Maktoum'),
    createSourceReference('Wikipedia - St John Philby', 2, '2026-04-27', 'https://en.wikipedia.org/wiki/St_John_Philby'),
    createSourceReference('Wikipedia - Arabian Sands', 2, '2026-04-27', 'https://en.wikipedia.org/wiki/Arabian_Sands'),
    createSourceReference('Wikipedia - Foundation of UAE', 2, '2026-04-27', 'https://en.wikipedia.org/wiki/Foundation_of_the_United_Arab_Emirates'),
    createSourceReference('Wikipedia - History of UAE', 2, '2026-04-27', 'https://en.wikipedia.org/wiki/History_of_the_United_Arab_Emirates'),
    createSourceReference('Wikipedia - Abu Dhabi Petroleum Company', 2, '2026-04-27', 'https://en.wikipedia.org/wiki/Abu_Dhabi_Petroleum_Company'),
    createSourceReference('Wikipedia - Qasr Al Hosn', 2, '2026-04-27', 'https://en.wikipedia.org/wiki/Qasr_Al_Hosn'),
    createSourceReference('Saudi Aramco World - Pirate Coast to Trucial', 1, '2026-04-27', 'https://archive.aramcoworld.com/issue/197306/from.pirate.coast.to.trucial.htm'),
    createSourceReference('GeoExpro - Abu Dhabi Oil Discoveries', 1, '2026-04-27', 'https://geoexpro.com/the-abu-dhabi-oil-discoveries/'),
    createSourceReference('GeoExpro - Buraimi Affair', 1, '2026-04-27', 'https://geoexpro.com/the-buraimi-affair/'),
    createSourceReference('Ras Al Khaimah Heritage Office', 1, '2026-04-27', 'https://rakheritage.rak.ae/chapters/the-beginnings-of-the-uae/'),
    createSourceReference('US State Department - Historical Documents', 0, '2026-04-27', 'https://history.state.gov/historicaldocuments/frus1955-57v13/d165'),
    createSourceReference('The National UAE', 1, '2026-04-27', 'https://www.thenationalnews.com/uae/sun-sets-on-british-empire-as-uae-raises-its-flag-1.574721'),
    createSourceReference('Oxford Academic', 0, '2026-04-27', 'https://academic.oup.com/book/59730/chapter/507140421'),
    createSourceReference('Oxford Public International Law', 0, '2026-04-27', 'https://opil.ouplaw.com/display/10.1093/law:epil/9780199231690/law-9780199231690-e106'),
    createSourceReference('Max van Berchem Foundation', 1, '2026-04-27', 'https://maxvanberchem.org/en/11-archeologie/39-historical-photographs-and-an-archaeology'),
    createSourceReference('MyBayut - Pearl Diving UAE', 3, '2026-04-27', 'https://www.bayut.com/mybayut/pearl-diving-uae/'),
    createSourceReference('Derek Sivers Review', 3, '2026-04-27', 'https://sive.rs/book/ArabianSands'),
    createSourceReference('Scribd - Sharjah History', 3, '2026-04-27', 'https://www.scribd.com/document/818413613/Brief-History-of-Important-Events-in-Sharjah'),
    createSourceReference('Grokipedia - Dubai History', 3, '2026-04-27', 'https://grokipedia.com/page/History_of_Dubai'),
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// ERA 2: FEDERATION & EARLY YEARS (1971-1990) - SOURCE: MD FILE 8-2
// ============================================================================

export const federationEarlyData: HistoricalEra = {
  id: 'hist-8-2',
  era: 'Federation & Early Years',
  period: { start: '1971', end: '1990' },
  description:
    'The Federation & Early Years period saw the UAE establish itself as a nation-state, with Sheikh Zayed as its founding father guiding nation-building. The era encompassed international memberships (UN, Arab League, OPEC), border disputes (Iranian islands occupation, Buraimi resolution), infrastructure development, and the creation of key federal institutions. Jebel Ali Port and Free Zone emerged as economic engines.',
  keyEvents: [
    // Section 1: UAE Independence and Formation (December 2, 1971)
    {
      date: 'December 2, 1971',
      title: 'UAE Federation Formation',
      description:
        'Six emirates declared independence and formed the UAE at Union House, Dubai. Sheikh Zayed elected first President; Sheikh Rashid Vice President. British protectorate ended December 1, 1971. Initial members: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Fujairah. Ras Al Khaimah joined February 10, 1972.',
      entities: ['Sheikh Zayed bin Sultan Al Nahyan', 'Sheikh Rashid bin Saeed Al Maktoum', 'Union House Dubai'],
      outcome: 'Established the United Arab Emirates as a sovereign nation; first president Sheikh Zayed, first VP Sheikh Rashid, first PM Sheikh Maktoum',
      significance: 'critical',
    },
    {
      date: 'December 2, 1971',
      title: 'Flag Design & National Symbols',
      description:
        '19-year-old Abdullah Mohammed Al Maainah designed the UAE flag. Prize: 4,000 riyals. Colors: Green (vegetation), White (peace), Black (defeat of enemies), Red (sacrifices). National anthem lyrics by Dr. Arif Al Shaikh (1986), melody existing composition, composed in 3 days.',
      entities: ['Abdullah Mohammed Al Maainah', 'Dr. Arif Al Shaikh'],
      significance: 'major',
    },
    {
      date: 'December 2, 1971',
      title: 'First International Recognition',
      description:
        'Jordan recognized UAE as first country on December 2, 1971. Arab League admission December 6, 1971 (2nd). UN Membership December 9, 1971 as 132nd member state (3rd). UN flag ceremony at noon December 9, 1971 in New York.',
      entities: ['Jordan', 'Arab League', 'United Nations', 'Adnan Pachachi'],
      outcome: 'International recognition as sovereign state',
      significance: 'critical',
    },
    {
      date: 'December 9, 1971',
      title: 'UN Membership',
      description:
        'UAE became the 132nd UN member state. Security Council and General Assembly both approved membership. Delegation led by Minister of State Adnan Pachachi who had to convince China and Soviet Union not to veto.',
      entities: ['United Nations', 'Adnan Pachachi'],
      outcome: 'International recognition as sovereign nation-state',
      significance: 'critical',
    },
    // Section 2: UAE Founding Fathers and Constitution
    {
      date: 'July 18, 1971',
      title: 'UAE Constitution Adopted',
      description:
        'Constitution signed by six emirates in Dubai. Author: Adi Bitar (Palestinian-Jordanian judge). Structure: 10 parts, 152 Articles. Became permanent May 1996. Key articles: Article 7 (Islam official religion), Article 9 (Abu Dhabi capital), Article 11 (free movement), Article 25 (equality), Article 137 (collective defense).',
      entities: ['Adi Bitar', 'Federal National Council'],
      outcome: 'Legal foundation document for the federation; 40 FNC seats allocated',
      significance: 'critical',
    },
    {
      date: '1971',
      title: 'Founding Fathers Leadership Structure',
      description:
        'Sheikh Zayed bin Sultan Al Nahyan (Abu Dhabi) - First President 1971-2004, born May 6, 1918, Al Ain. Sheikh Rashid bin Saeed Al Maktoum (Dubai) - Vice President/PM. Sheikh Sultan bin Muhammad Al Qasimi (Sharjah) 1972-1987. Sheikh Rashid bin Humaid Al Nuaimi (Ajman) 1928-1981. Sheikh Ahmed bin Rashid Al Mualla (Umm Al Quwain) 1928-1981. Sheikh Muhammad bin Hamad Al Sharqi (Fujairah) ~1937-1974.',
      entities: ['Sheikh Zayed', 'Sheikh Rashid', 'Sheikh Sultan', 'Sheikh Saqr'],
      outcome: 'Leadership structure established for all seven emirates',
      significance: 'critical',
    },
    {
      date: '1971-2004',
      title: 'Sheikh Zayed Nation Building',
      description:
        'Sheikh Zayed served as President for 33 years (1971-2004), re-elected 1976, 1981, 1986, 1991. Planted 12 million trees on 60,000 hectares. Reclaimed 25 sq km of barren desert. Adopted 1,000+ orphans. Distributed $1 billion+ in philanthropy (1973-1977). Forbes estimated wealth $20 billion (2004). Founded Abu Dhabi Fund for Arab Economic Development (1971) and Abu Dhabi Investment Authority (1976).',
      entities: ['Sheikh Zayed bin Sultan Al Nahyan', 'ADIA', 'Abu Dhabi Fund'],
      outcome: 'Transformative nation building; infrastructure, education, healthcare expansion',
      significance: 'critical',
    },
    // Section 3: Ras Al Khaimah Joining
    {
      date: 'November 30, 1971',
      title: 'Iran Seizes Abu Musa and Tunb Islands',
      description:
        'Iran occupied Abu Musa and the Greater and Lesser Tunb islands from Ras Al Khaimah and Sharjah two days before UAE formation. Three police were killed. Sheikh Saqr quote: "Nations are not sold by money... If they are taken, they are taken by blood." UAE took matter to UN Security Council December 9, 1971.',
      entities: ['Iran', 'Sheikh Saqr bin Mohammed Al Qasimi', 'United Nations'],
      outcome: 'Ongoing territorial dispute; UAE brought matter to UN Security Council',
      significance: 'critical',
    },
    {
      date: 'February 10, 1972',
      title: 'Ras Al Khaimah Joins Federation',
      description:
        'Ras Al Khaimah became the seventh emirate to join the UAE, completing the seven-emirate federation. Sheikh Saqr traveled to Al Manhal Palace February 11, 1972 to sign. Delay due to opposition to July 1971 constitutional proposal favoring majority rule. Condition for joining: protection of the islands (Abu Musa, Tunbs).',
      entities: ['Sheikh Saqr bin Mohammed Al Qasimi', 'Al Manhal Palace'],
      outcome: 'Seven-emirate federation completed',
      significance: 'major',
    },
    // Section 4: UAE-Iran Islands Dispute
    {
      date: '1904-1971',
      title: 'Islands Dispute History',
      description:
        'First dispute record 1904: Iran briefly replaced flag, withdrew under British pressure. 1923: Second Iranian occupation attempt. 1964: Iranian forces occupied for 20 consecutive days. November 13, 1971: Sharjah ruler accepted interim deal with Iran on Abu Musa. November 30, 1971: MoU signed Iran-Sharjah; Iran moved troops onto islands.',
      entities: ['Iran', 'Sharjah', 'Ras Al Khaimah'],
      significance: 'major',
    },
    {
      date: '1992-Present',
      title: 'Ongoing Islands Dispute',
      description:
        '1992: Iran restricted UAE access, expelled UAE-sponsored workers. August 21, 2008: UAE filed formal protest with UN Secretary-General. September 2, 2008: GCC foreign ministers condemned Iran\'s actions. 2012: Ahmedinejad visit caused diplomatic incident. Iran refuses ICJ arbitration. UAE continues peaceful pursuit. Geographic: Abu Musa 12.8 sq km, 2,131 population (2012), Mount Halva 110m.',
      entities: ['Iran', 'GCC', 'UN', 'ICJ'],
      outcome: 'Ongoing territorial dispute; peaceful resolution pursued',
      significance: 'critical',
    },
    // Section 5: UAE-Oman Border Relations
    {
      date: '1940s-1974',
      title: 'Buraimi Dispute Resolution',
      description:
        'Territorial conflict between Saudi Arabia and Trucial States/Oman over Buraimi Oasis. 1949: Saudi Arabia claimed sovereignty over part of Abu Dhabi territory. August 31, 1952: ~80 Saudi guards occupied Hamasa. October 1952: Standstill Agreement reached. July 30, 1954: Second Standstill Agreement signed. 1955: Arbitration proceedings began in Geneva. October 25, 1955: British forces (Trucial Oman Scouts) took the oasis.',
      entities: ['Saudi Arabia', 'Trucial States', 'Buraimi Oasis'],
      outcome: 'Resolved through diplomatic negotiations',
      significance: 'major',
    },
    {
      date: '1999-2019',
      title: 'UAE-Oman Border Agreement',
      description:
        '1999: Partial border demarcation deal signed during Sheikh Zayed\'s visit to Oman. June 22, 2018: Final agreement signed during Sultan Qaboos\'s visit to UAE. July 22-23, 2019: Documents exchanged formalizing border pact. 2003: Boundary agreement signed and ratified for entire border.',
      entities: ['UAE', 'Oman', 'Sheikh Zayed', 'Sultan Qaboos'],
      outcome: 'Peaceful border resolution with Oman',
      significance: 'major',
    },
    // Section 6: UAE-Saudi Border (Treaty of Jeddah 1974)
    {
      date: 'August 21, 1974',
      title: 'Treaty of Jeddah',
      description:
        'Sheikh Zayed and King Faisal signed treaty delimiting Saudi-UAE border in Jeddah. Saudi receives: output of Shaybah oilfield, access to lower Persian Gulf, Huwaysat Island sovereignty. UAE receives: Saudi recognition of UAE sovereignty. Both parties to delimit offshore boundaries. Saudi ratification 1993. UAE ratification: NOT ratified (as of 2012). Disputed: Article 3 regarding oil field revenues.',
      entities: ['Sheikh Zayed bin Sultan Al Nahyan', 'King Faisal', 'Treaty of Jeddah'],
      outcome: 'Border delimitation with Saudi Arabia; Buraimi dispute resolution',
      significance: 'major',
    },
    // Section 7: UAE International Memberships
    {
      date: '1971',
      title: 'Arab League Membership',
      description:
        'UAE joined Arab League in 1971 (same year as independence). Arab League founded March 22, 1945 in Cairo with 6 founding members. Oman, Qatar, and UAE joined in 1971.',
      entities: ['Arab League'],
      outcome: 'Regional diplomatic standing established',
      significance: 'major',
    },
    {
      date: '1967',
      title: 'OPEC Membership',
      description:
        'UAE inherited OPEC membership from Abu Dhabi (1967). One of only two OPEC members with notable spare crude production capacity (alongside Saudi Arabia). Production goal: 5 million barrels per day by 2027.',
      entities: ['OPEC'],
      outcome: 'Economic foundation through oil pricing influence',
      significance: 'major',
    },
    // Section 8: Gulf Cooperation Council (GCC) Founding
    {
      date: 'May 25, 1981',
      title: 'GCC Founded',
      description:
        'Gulf Cooperation Council founded in Abu Dhabi by Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, and UAE. Islamic calendar: 21 Rajab 1401. First Secretary General: H.E. Abdulla Y. Beshara (Kuwait) 1981-1993. Primary catalysts: Iran-Iraq War (1980-1988), 1979 Iranian Revolution, Soviet invasion of Afghanistan, Tehran hostage crisis (1979-1981).',
      entities: ['GCC', 'H.E. Abdulla Y. Beshara'],
      outcome: 'Regional security framework established',
      significance: 'critical',
    },
    {
      date: '1981-2008',
      title: 'GCC Economic Integration',
      description:
        'Economic Agreement signed November 11, 1981. Free Trade Area 1983. Customs Union January 2003. Common Market January 1, 2008. GCC Combined GDP: ~$200 billion (1981) to ~$2.4 trillion (present) - 12-fold increase.',
      entities: ['GCC'],
      outcome: 'Progressive economic integration achieved',
      significance: 'major',
    },
    {
      date: 'October 15, 1985',
      title: 'Peninsula Shield Force Established',
      description:
        'GCC established unified military force for collective defense. Later evolved to Peninsula Shield Joint Defense Force. GCC Unified Military Command established November 2018.',
      entities: ['GCC', 'Peninsula Shield Force'],
      outcome: 'Regional collective security capability',
      significance: 'major',
    },
    // Section 9: Dubai Jebel Ali Port and Free Zone (1979)
    {
      date: 'December 1979',
      title: 'Jebel Ali Port Opens',
      description:
        'Port officially opened December 1979; Queen Elizabeth II presided over opening February 1980. Cost approximately $2.5 billion. Location: 24.984786°N, 55.0906813°E. 67 berths, more than 15 km quayside. Container terminal operator: Sea-Land Service Corporation. 1991 throughput: 1,200,000 cargo containers - busiest in Middle East, Top 20 worldwide.',
      entities: ['Dubai', 'Jebel Ali', 'Queen Elizabeth II'],
      outcome: 'World\'s largest man-made harbour; regional trade hub',
      significance: 'critical',
    },
    {
      date: '1985',
      title: 'JAFZA Established',
      description:
        'Jebel Ali Free Zone Authority established. Initial 19 companies grew to 500+ by 1990, 11,000+ by 2025. Size: 57 square km (10,000 hectares / 25,000 acres). 2025 data: 150+ countries represented, 100+ Fortune Global 500 companies, 144,000+ employees. Trade value (2015): US$169 billion. UAE FDI contribution: ~32%. Dubai GDP contribution: 21%.',
      entities: ['DP World', 'JAFZA'],
      outcome: 'Major free zone driving economic diversification',
      significance: 'critical',
    },
    {
      date: '1991',
      title: 'Jebel Ali Business Presence',
      description:
        '1991 data: 350+ companies, ~$600 million investment, ~12,000 employees, 80 companies arrived in single year. Indian companies: ~25%. GCC companies: ~25%. American firms: Johnson & Johnson, Union Carbide, York International. Special tenant: Kuwait Petroleum Company - 750,000 m² for offices/warehouses.',
      entities: ['Kuwait Petroleum Company', 'Jebel Ali Free Zone'],
      significance: 'major',
    },
    {
      date: '1979-Present',
      title: 'Jebel Ali Strategic Significance',
      description:
        'Most frequently visited foreign port by US Navy. Tax/duty exemptions. Profit repatriation permitted. Regional transshipment hub. Proximity: Al Maktoum International Airport (24 km), Dubai International Airport (40 km). 28 km from Dubai Municipality via 4-lane highway (upgrading to 8 lanes for $165 million). Awards: FDI 2024 Award - Best Free Zone in the World by Financial Times\' fDI Intelligence.',
      entities: ['US Navy', 'Al Maktoum International Airport'],
      outcome: 'Global trade powerhouse and strategic hub',
      significance: 'critical',
    },
    // Section 10: UAE Infrastructure and Early Development
    {
      date: '1966-1974',
      title: 'Early Development Under Sheikh Zayed',
      description:
        'Civil service growth: 200 (1966) → 2,000 (1968) → 4,000 (1969). First British Director of Finance appointed August 27, 1966. Budget (1967): 37 million dinars revenue vs 41 million dinars. Schools investment: half a million Bahraini dinars in first two years. Saadiyat Island: 13.4 million dinars for research station. Mana Saeed Al Otaiba: First Minister of Oil at age 20. Expatriate recruitment: Arabs from Iraq, Jordan, Egypt, Sudan; British advisers.',
      entities: ['Sheikh Zayed', 'Mana Saeed Al Otaiba'],
      outcome: 'Rapid modernization and institution building',
      significance: 'major',
    },
    {
      date: '1960s-1974',
      title: 'Infrastructure Transformation',
      description:
        'Pre-1971 to post-1971 transformation: Schools: Few → Over 1,200. Hospitals: Minimal → Over 150. Universities: None → First opened 1974. Students abroad (1974): 1,800. Abu Dhabi population: 35,000 (1967) → 47,000 (1968). Dubai began exporting oil 1969. Kanad Hospital (first hospital in Abu Dhabi) established 1960s.',
      entities: ['Kanad Hospital', 'Abu Dhabi'],
      outcome: 'Comprehensive infrastructure development',
      significance: 'major',
    },
    // Section 11: Sheikh Zayed Nation Building (detailed)
    {
      date: '1946-1966',
      title: 'Sheikh Zayed Early Career',
      description:
        'Governor of Eastern Region 1946-1966. Born May 6, 1918, Al Ain (Qasr Al Hosn). Youngest of four sons of Sheikh Sultan bin Zayed Al Nahyan. Named after grandfather Zayed the Great (ruled 1855-1909). Ruler of Abu Dhabi from August 6, 1966 (via bloodless coup succeeding brother Shakhbut) until November 2, 2004.',
      entities: ['Sheikh Zayed', 'Al Ain', 'Qasr Al Hosn'],
      significance: 'major',
    },
    {
      date: '1971-2004',
      title: 'Sheikh Zayed Leadership Legacy',
      description:
        'Orphans adopted: More than 1,000 since early 1970s. Tittenhurst Park purchase: £5 million (1988). UNEP Champions of the Earth (2005, posthumous). Quotes: "They used to say that agriculture has no future [in the UAE]. But with God\'s blessing and our determination, we have succeeded in transforming this desert into a greenland." "Our achievements will be of no value without an educated generation. Hence, manpower should precede development in all other sectors."',
      entities: ['Sheikh Zayed', 'UNEP'],
      outcome: 'Transformative nation building legacy',
      significance: 'critical',
    },
    // Section 12: UAE in the 1970s and 1980s
    {
      date: '1971-1979',
      title: '1970s Key Developments',
      description:
        '1971: Federation formed; UN/Arab League membership. 1972: Ras Al Khaimah joined. 1973: OPEC oil embargo; UAE participated. 1974: Treaty of Jeddah with Saudi Arabia; First UAE university opened; 1,800 students abroad. 1979: Jebel Ali Port opened.',
      entities: ['UAE', 'OPEC'],
      outcome: 'Foundational decade of nation building',
      significance: 'critical',
    },
    {
      date: '1980-1990',
      title: '1980s Context',
      description:
        'Iran-Iraq War 1980-1988. UAE stance: Neutral, benefited from stability. Development continued despite regional tensions. GCC established 1981 for collective security. Peninsula Shield Force 1985. Dubai transformation: 1970 start - modest skyline, sand roads, low-rise buildings, limited electricity → Late 1980s significant infrastructure modernization. Oil discovery: 1966. Oil revenue first flow: 1969. Port Rashid opening: 1972 (region\'s first modern container terminal).',
      entities: ['Iran', 'Iraq', 'GCC', 'Dubai'],
      outcome: 'Continued development amid regional tensions',
      significance: 'major',
    },
  ],
  policyOutcomes: [
    {
      policy: 'UAE Constitution',
      year: '1971',
      impact:
        'Provisional constitution signed July 18, 1971; became permanent May 1996. 152 Articles establishing federal structure. Federal National Council: 40 seats (Abu Dhabi 8, Dubai 8, Sharjah 6, Ras Al Khaimah 6, Ajman 4, Umm Al Quwain 4, Fujairah 4). Joint veto power: Abu Dhabi and Dubai.',
      successors: ['Federal National Council establishment'],
    },
    {
      policy: 'UN Membership',
      year: '1971',
      impact: 'International recognition; 132nd UN member state; Adnan Pachachi led delegation',
    },
    {
      policy: 'Arab League Membership',
      year: '1971',
      impact: 'Regional diplomatic standing established',
    },
    {
      policy: 'OPEC Membership (inherited from Abu Dhabi)',
      year: '1967',
      impact: 'Economic foundation through oil pricing influence',
    },
    {
      policy: 'GCC Charter',
      year: '1981',
      impact: 'Regional security cooperation framework; 6 founding members',
      successors: ['Peninsula Shield Force 1985', 'Customs Union 2003', 'Common Market 2008'],
    },
    {
      policy: 'Treaty of Jeddah',
      year: '1974',
      impact: 'Border delimitation with Saudi Arabia; Buraimi dispute resolution; Saudi ratified 1993, UAE not ratified',
    },
    {
      policy: 'UAE-Oman Border Agreement',
      year: '2018',
      impact: 'Final border agreement signed June 22, 2018; documents exchanged July 22-23, 2019',
    },
    {
      policy: 'Jebel Ali Port Development',
      year: '1979',
      impact: '$2.5 billion investment; 67 berths; busiest Middle East port by 1991',
    },
    {
      policy: 'JAFZA Establishment',
      year: '1985',
      impact: 'Initial 19 companies; grew to 11,000+ by 2025; 32% UAE FDI; 21% Dubai GDP',
    },
  ],
  entityInvolvement: [
    // Persons (17 from MD)
    'Sheikh Zayed bin Sultan Al Nahyan (P001) - First President 1971-2004',
    'Sheikh Rashid bin Saeed Al Maktoum (P002) - Vice President/PM',
    'Sheikh Maktoum bin Rashid Al Maktoum (P003) - First Prime Minister',
    'Sheikh Sultan bin Muhammad Al Qasimi (P004) - Ruler of Sharjah 1972-1987',
    'Sheikh Rashid bin Humaid Al Nuaimi (P005) - Ruler of Ajman 1928-1981',
    'Sheikh Ahmed bin Rashid Al Mualla (P006) - Ruler of Umm Al Quwain 1928-1981',
    'Sheikh Muhammad bin Hamad Al Sharqi (P007) - Ruler of Fujairah ~1937-1974',
    'Sheikh Saqr bin Mohammed Al Qasimi (P008) - Ruler of Ras Al Khaimah 1948-2010',
    'King Faisal (P009) - King of Saudi Arabia',
    'Sultan Qaboos bin Said (P010) - Sultan of Oman',
    'Adi Bitar (P011) - Constitution Author',
    'Adnan Pachachi (P012) - First UAE UN Delegation Head',
    'H.E. Abdulla Y. Beshara (P013) - First GCC Secretary General',
    'Abdullah Mohammed Al Maainah (P014) - Flag Designer',
    'Dr. Arif Al Shaikh (P015) - National Anthem Lyricist',
    'Mana Saeed Al Otaiba (P016) - First Oil Minister (age 20)',
    'Sheikh Khalifa bin Zayed Al Nahyan (P017) - Son, later President',
    // Locations (20 from MD)
    'Union House, Dubai (L001) - UAE declaration site',
    'Al Manhal Palace, Abu Dhabi (L002) - Ras Al Khaimah signing site',
    'Jumeirah (L003) - Rulers\' majlis location',
    'Al Sameeh (L004) - Sheikh Zayed camp site',
    'Abu Musa (L005) - Disputed island 12.8 sq km',
    'Greater Tunb (L006) - Disputed with Iran',
    'Lesser Tunb (L007) - Disputed with Iran',
    'Buraimi Oasis (L008) - Historical dispute',
    'Al Ain (L009) - Eastern Region capital',
    'Jebel Ali (L010) - Port and Free Zone',
    'Strait of Hormuz (L011) - 20% world oil transit',
    'Shaybah (L012) - Oil Field - Treaty of Jeddah subject',
    'Huwaysat Island (L013) - Treaty of Jeddah subject',
    'Port Rashid, Dubai (L014) - First container terminal 1972',
    'Qasr Al Hosn (L015) - Sheikh Zayed birthplace',
    'Kanad Hospital (L016) - First in Abu Dhabi 1960s',
    'Buraimi (L017) - Saudi-Emirati dispute',
    'Hamasa (L018) - Buraimi dispute site',
    'Ras Al Khaimah (L019) - Last to join federation',
    'Fujairah (L020) - Eastern coast',
    // Organizations (12 from MD)
    'United Arab Emirates (O001) - Founded 1971',
    'Arab League (O002) - Member since 1971',
    'United Nations (O003) - Member since 1971 (132nd)',
    'OPEC (O004) - Member since 1967',
    'GCC (O005) - Founding member 1981',
    'Trucial States (O006) - Historical British protectorate',
    'JAFZA (O007) - Est. 1985',
    'DP World (O008) - JAFZA parent',
    'Abu Dhabi Investment Authority (O009) - Est. 1976',
    'Abu Dhabi Fund for Arab Economic Development (O010) - Est. 1971',
    'Peninsula Shield Force (O011) - GCC joint defense',
    'Union Defence Force (O012) - Former Trucial Oman Scouts',
  ],
  nationBuildingMilestones: [
    // From Section 1: Formation
    'December 2, 1971: UAE Federation formed - 6 emirates at Union House, Dubai',
    'December 2, 1971: Sheikh Zayed elected first President; Sheikh Rashid Vice President',
    'December 2, 1971: Flag designed by Abdullah Mohammed Al Maainah (19 years old)',
    'December 2, 1971: Jordan first to recognize UAE; Arab League 2nd; UN 3rd (132nd member)',
    'February 10, 1972: Ras Al Khaimah joins - complete seven-emirate federation',
    // From Section 2: Constitution & Founders
    'July 18, 1971: Constitution signed (152 Articles); became permanent 1996',
    '1971-2004: Sheikh Zayed serves 33 years as President',
    // From Section 4: Islands Dispute
    'November 30, 1971: Iran seizes Abu Musa and Tunb islands; 3 police killed',
    'December 9, 1971: UAE raises islands issue at UN Security Council',
    // From Section 5: Border Relations
    '1974: Treaty of Jeddah - Saudi-UAE border delimitation',
    'June 22, 2018: Final UAE-Oman border agreement signed',
    // From Section 7: International Memberships
    '1971: Arab League membership established',
    'December 9, 1971: UN membership (132nd)',
    '1967: OPEC membership inherited from Abu Dhabi',
    // From Section 8: GCC
    'May 25, 1981: GCC founded by 6 member states',
    'October 15, 1985: Peninsula Shield Force established',
    'January 2003: GCC Customs Union',
    'January 1, 2008: GCC Common Market',
    // From Section 9: Jebel Ali
    'December 1979: Jebel Ali Port opens (~$2.5 billion, 67 berths)',
    'February 1980: Queen Elizabeth II opens Jebel Ali Port',
    '1985: JAFZA established with 19 companies',
    '1991: Jebel Ali busiest Middle East port (1.2M containers)',
    // From Section 10: Infrastructure
    '1966: Sheikh Zayed becomes Ruler of Abu Dhabi',
    '1969: Dubai began exporting oil',
    '1974: First UAE university opened',
    '1974: 1,800 students studying abroad',
    // From Section 11: Sheikh Zayed Legacy
    'Planted 12 million trees on 60,000 hectares',
    'Reclaimed 25 sq km of barren desert',
    'Adopted more than 1,000 orphans',
    'Distributed $1 billion+ in philanthropy (1973-1977)',
    // From Section 12: 1970s-1980s
    '1973: OPEC oil embargo - UAE participated',
    '1980-1988: Iran-Iraq War - UAE remained neutral, benefited from stability',
  ],
  credibility: createCredibilityScore(1, 92, 35, '2026-04-28'),
  sources: [
    // TIER-0 Sources
    createSourceReference('UAE Government Portal - Founders', 0, '2026-04-28', 'https://u.ae/en/about-the-uae/founders-of-the-union'),
    createSourceReference('OPEC Official', 0, '2026-04-27', 'https://opec.org/united-arab-emirates.html'),
    createSourceReference('UAE Embassy - Occupied Islands', 0, '2026-04-27', 'https://uae-embassy.org/foreign-policy/occupied-uae-islands'),
    createSourceReference('JAFZA Official', 0, '2026-04-28', 'https://www.jafza.ae/about/'),
    createSourceReference('EIA Official', 0, '2026-04-27', 'https://eia.gov'),
    // TIER-1 Sources
    createSourceReference('Wikipedia - Foundation of UAE', 1, '2026-04-27', 'https://en.wikipedia.org/wiki/Foundation_of_the_United_Arab_Emirates'),
    createSourceReference('Wikipedia - UAE Constitution', 1, '2026-04-27', 'https://en.wikipedia.org/wiki/Constitution_of_the_United_Arab_Emirates'),
    createSourceReference('Wikipedia - Abu Musa', 1, '2026-04-27', 'https://en.wikipedia.org/wiki/Abu_Musa'),
    createSourceReference('Wikipedia - Zayed bin Sultan', 1, '2026-04-27', 'https://en.wikipedia.org/wiki/Zayed_bin_Sultan_Al_Nahyan'),
    createSourceReference('Wikipedia - Jebel Ali Free Zone', 1, '2026-04-27', 'https://en.wikipedia.org/wiki/Jebel_Ali_Free_Zone'),
    createSourceReference('Wikipedia - Buraimi Dispute', 1, '2026-04-27', 'https://en.wikipedia.org/wiki/Buraimi_dispute'),
    createSourceReference('Wikipedia - GCC', 1, '2026-04-27', 'https://en.wikipedia.org/wiki/Gulf_Cooperation_Council'),
    createSourceReference('Wikipedia - Treaty of Jeddah (1974)', 1, '2026-04-27', 'https://en.wikipedia.org/wiki/Treaty_of_Jeddah_(1974)'),
    createSourceReference('Wikipedia - History of UAE', 1, '2026-04-27', 'https://en.wikipedia.org/wiki/History_of_the_United_Arab_Emirates'),
    createSourceReference('Washington Institute', 1, '2026-04-27', 'https://washingtoninstitute.org/policy-analysis/persian-gulfs-occupied-territory-three-island-dispute'),
    createSourceReference('National Library of UAE', 1, '2026-04-27', 'https://nla.ae/en/our-history/historical-periods/the-formation-of-the-federation/'),
    // TIER-2 Sources
    createSourceReference('The National - Dec 2 1971', 2, '2026-04-27', 'https://www.thenationalnews.com/uae/heritage/2021/12/02/december-2-1971-what-happened-on-the-uaes-first-national-day'),
    createSourceReference('The National - RAK', 2, '2026-04-27', 'https://www.thenationalnews.com/weekend/2024/02/02/ras-al-khaimah-history-uae-timeframe'),
    createSourceReference('The National - UN Flag', 2, '2026-04-27', 'https://www.thenationalnews.com/arts-culture/2025/12/05/uae-flag-new-york-un-headquarters-history'),
    createSourceReference('Gulf News - UAE-Oman Border', 2, '2026-04-27', 'https://gulfnews.com/uae/uae-oman-formalise-border-pact-1.371999'),
    createSourceReference('Khaleej Times', 2, '2026-04-27', 'https://khaleejtimes.com'),
    createSourceReference('NCUSAR - GCC Founding', 2, '2026-04-27', 'https://ncusar.org/blog/2015/12/founding-of-the-gcc/'),
    createSourceReference('Leaders UAE History', 2, '2026-04-27', 'https://leaders.uaehistoryandculture.com/the-founding-fathers-the-rulers-who-signed-the-union-of-1971/'),
    createSourceReference('Aramco World', 2, '2026-04-27', 'https:// Aramcoworld.com'),
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// ERA 3: POST-GULF WAR AFTERMATH (1991-2003)
// ============================================================================

export const postGulfWarData: HistoricalEra = {
  id: 'hist-8-3',
  era: 'Post-Gulf War Aftermath',
  period: { start: '1991', end: '2003' },
  description:
    'The aftermath of the 1991 Gulf War saw drastic and profoundly significant political, cultural, and social change across the Middle East. The war created an acute humanitarian crisis while leaving Saddam Hussein in power. For the UAE, this period involved managing regional security concerns, sanctions on Iraq, and the US military presence in the Gulf that would shape regional dynamics for decades.',
  keyEvents: [
    {
      date: '1991',
      title: 'Gulf War Concludes - UAE Coalition Role',
      description:
        'UAE participated in coalition supporting Kuwait liberation. US forces stationed in Saudi Arabia (5,000-10,000 troops) as part of ongoing regional presence.',
      entities: ['UAE', 'United States', 'Saudi Arabia', 'GCC'],
      outcome: 'GCC solidarity demonstrated; US-Gulf alliance strengthened',
      significance: 'critical',
    },
    {
      date: '1991',
      title: 'No-Fly Zones Established',
      description:
        'Operation Provide Comfort (Northern Iraq) and Operation Southern Watch (Southern Iraq) established no-fly zones. UAE provided base access as part of coalition security architecture.',
      entities: ['UNSCOM', 'Operation Provide Comfort', 'Operation Southern Watch'],
      outcome: 'Regional security architecture established; UAE base access for US forces',
      significance: 'major',
    },
    {
      date: '1991-2003',
      title: 'UN Sanctions on Iraq',
      description:
        'UAE participated in sanctions regime affecting regional trade. Oil market destabilization had direct economic impact.',
      entities: ['United Nations', 'Iraq'],
      outcome: 'Regional trade patterns shifted; UAE as transshipment hub increased',
      significance: 'major',
    },
    {
      date: '1996',
      title: 'Operation Southern Watch Begins',
      description:
        'Southern No-Fly Zone over Iraq formally begins enforcement.',
      entities: ['United States', 'GCC'],
      significance: 'minor',
    },
    {
      date: '1991-2003',
      title: 'Iranian Regional Influence',
      description:
        'Counterbalance to Iranian expansion remained core UAE security concern throughout period.',
      entities: ['Iran', 'UAE'],
      outcome: 'Strengthened US-Gulf alliance cooperation',
      significance: 'critical',
    },
  ],
  policyOutcomes: [
    {
      policy: 'GCC Security Architecture Enhancement',
      year: '1991',
      impact: 'Enhanced defense cooperation following Gulf War experience',
      successors: ['Peninsula Shield expansion', 'Unified Military Command 2018'],
    },
    {
      policy: 'US-Gulf Alliance Structures',
      year: '1991',
      impact: 'Base access agreements and security partnership formalized',
    },
    {
      policy: 'Regional Trade Reorientation',
      year: '1991',
      impact: 'UAE emerged as regional transshipment hub as Iraq sanctions disrupted traditional trade routes',
    },
  ],
  entityInvolvement: [
    'UAE',
    'GCC',
    'United States',
    'Saudi Arabia',
    'Iraq',
    'Iran',
    'UNSCOM',
    'Operation Provide Comfort',
    'Operation Southern Watch',
  ],
  nationBuildingMilestones: [
    '1991: UAE participates in Gulf War coalition',
    '1991: No-Fly Zones established - UAE provides base access',
    '1991-2003: UN sanctions on Iraq - UAE participates in sanctions regime',
    '1991: Humanitarian response to Iraqi crisis',
    '1996: Operation Southern Watch begins',
    '1991-2003: Iranian influence counterbalance - core security concern',
  ],
  credibility: createCredibilityScore(1, 82, 8, '2026-04-28'),
  sources: [
    createSourceReference('US State Department - Milestones', 0, '2026-04-27'),
    createSourceReference('Brookings Institution', 1, '2026-04-27'),
    createSourceReference('Hudson Institute', 1, '2026-04-27'),
    createSourceReference('TNSR', 1, '2026-04-27'),
    createSourceReference('Wikipedia - Aftermath of Gulf War', 2, '2026-04-27'),
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// ERA 4: RAPID DEVELOPMENT ERA (2000-2010)
// ============================================================================

export const rapidDevelopmentData: HistoricalEra = {
  id: 'hist-8-4',
  era: 'Rapid Development Era',
  period: { start: '2000', end: '2010' },
  description:
    'The UAE\'s Rapid Development Era (2000-2010) represents one of the most dramatic economic transformations in modern history. Dubai led an unprecedented construction boom creating iconic landmarks including the Burj Khalifa and Palm Jumeirah, while Abu Dhabi provided critical financial support during the 2008-2009 global financial crisis. The period saw UAE GDP grow substantially before the Dubai World debt crisis triggered a severe but temporary correction.',
  keyEvents: [
    {
      date: 'June 2001',
      title: 'Palm Jumeirah Construction Begins',
      description:
        'World\'s largest artificial island construction started. Dutch/Belgian firms Van Oord and Jan De Nul used GPS-guided dredgers with "rainbowing" technique. Used 94 million cubic meters of sand and 7 million tons of rock from Hajar Mountains. 11km crescent-shaped breakwater, 1.4km subsea tunnel at 25 meters depth.',
      entities: ['Nakheel', 'Van Oord', 'Jan De Nul', 'Dubai'],
      outcome: 'Iconic landmark and real estate development',
      significance: 'major',
    },
    {
      date: 'January 2004',
      title: 'Burj Khalifa Construction Begins',
      description:
        'World\'s tallest building construction started. 828m height, 154 floors plus 9 maintenance levels, $1.5 billion cost. Samsung C&T, BESIX, and Arabtec as contractors. Adrian Smith (SOM) as architect, Bill Baker as structural engineer.',
      entities: ['Emaar', 'Samsung C&T', 'BESIX', 'Arabtec', 'Adrian Smith', 'Bill Baker'],
      outcome: 'Global architectural landmark; Dubai icon',
      significance: 'major',
    },
    {
      date: 'September 2009',
      title: 'Dubai Metro Opens',
      description:
        'First urban metro in Gulf Arab states. $4.2 billion project, 75 km with 47 stations. Red Line opened September 2009. Constructed during global financial crisis, completed on schedule.',
      entities: ['Dubai RTA'],
      outcome: 'Revolutionary urban transport; regional first',
      significance: 'major',
    },
    {
      date: '2008',
      title: 'Dubai International Airport Terminal 3 Opens',
      description:
        'World\'s largest single terminal at opening. 60 million passenger capacity (initially expanded to 100M+). Exclusively for Emirates airline.',
      entities: ['Emirates', 'Dubai Airports'],
      outcome: 'Major aviation hub expansion',
      significance: 'major',
    },
    {
      date: 'February 2007',
      title: 'du Launches - Etisalat Monopoly Ends',
      description:
        'Emirates Integrated Telecommunications (du) launched mobile services. Shaikh Mohammad made first call. Broke Etisalat\'s 30-year monopoly. Target market share: 30% within three years.',
      entities: ['du', 'Etisalat', 'TRA', 'Sheikh Mohammed bin Rashid Al Maktoum'],
      outcome: 'Telecom sector competition; improved services',
      significance: 'major',
    },
    {
      date: '2003',
      title: 'UAE Support for Iraq War',
      description:
        'UAE provided $215 million in economic/reconstruction assistance. Almost $7 billion in Iraqi debt cancelled including interest and arrears. Among top 12 financial sponsors of Iraqi Governing Council.',
      entities: ['UAE', 'United States', 'Iraq'],
      outcome: 'Regional leadership role; US alliance strengthened',
      significance: 'major',
    },
    {
      date: 'November 2009',
      title: 'Dubai World Debt Crisis',
      description:
        'Dubai World requested restructuring of $26 billion in debts (total liabilities nearly $60 billion). Nakheel subsidiary had $8.5 billion debt. AED 15.50 billion Nakheel Sukuk issued in 2009.',
      entities: ['Dubai World', 'Nakheel'],
      outcome: 'Global market turbulence; investor confidence shaken',
      significance: 'critical',
    },
    {
      date: 'December 2009',
      title: 'Abu Dhabi Bailout of Dubai',
      description:
        'Abu Dhabi provided $10 billion initial bailout through Investment Authority via central bank. Total support package $20 billion. $4.1 billion to Nakheel for immediate debt payments, $5.9 billion to Dubai World.',
      entities: ['Abu Dhabi', 'Dubai', 'ADIA', 'Sheikh Ahmed bin Saeed Al Maktoum'],
      outcome: 'Dubai World debt restructuring; Nakheel sukuk payments enabled; market stabilization',
      significance: 'critical',
    },
    {
      date: '2010',
      title: 'Burj Khalifa Opens',
      description:
        'World\'s tallest building officially opened. 829.8m tip height, 154 floors, 309,473 m² floor area. 330,000 m³ concrete, 55,000 tonnes steel rebar, 142,000 m² glass panels. 22 million man-hours.',
      entities: ['Emaar', 'Samsung C&T', 'BESIX', 'Arabtec'],
      outcome: 'Global architectural landmark; Dubai icon',
      significance: 'critical',
    },
  ],
  policyOutcomes: [
    {
      policy: 'Economic Diversification',
      year: '2000-2010',
      impact: 'Massive infrastructure investment; tourism and trade hubs established; free zones expanded (Dubai Internet City, Media City, Maritime City)',
      successors: ['Vision 2021', 'Diversification continues'],
    },
    {
      policy: 'Dubai World Debt Restructuring',
      year: '2009',
      impact: 'Market correction; inter-emirate solidarity demonstrated via Abu Dhabi $10B bailout ($20B total). Nakheel sukuk payments enabled.',
    },
    {
      policy: 'UAE Telecom Liberalization',
      year: '2006-2007',
      impact: 'Competition introduced; du market entry targeting 30% market share; Etisalat monopoly broken after 30 years',
    },
    {
      policy: 'Property Sector Regulation',
      year: '2008-2009',
      impact: 'Property prices fell to 40% of 2008 peak levels (some areas down 60%); Q1 2009 saw 40% decline alone',
    },
  ],
  entityInvolvement: [
    'Dubai',
    'Abu Dhabi',
    'Emaar',
    'Nakheel',
    'Dubai World',
    'Emirates',
    'Samsung C&T',
    'BESIX',
    'Arabtec',
    'ADIA',
    'GCC',
    'Etisalat',
    'du (Emirates Integrated Telecom)',
    'Van Oord',
    'Jan De Nul',
    'Dubai RTA',
    'Dubai Airports',
  ],
  nationBuildingMilestones: [
    '2000: UAE GDP growth 10.85% (Macrotrends)',
    '2001: Palm Jumeirah construction begins - 94M m³ sand, 7M tons rock',
    '2003: UAE supports Iraq War - $215M assistance, $7B debt cancelled',
    '2004: Burj Khalifa construction begins - $1.5B, 828m target height',
    '2005: Dubai Metro construction starts - $4.2B project',
    '2006: du launches - breaks Etisalat 30-year monopoly',
    '2007: Emirates largest A380 operator; Palm Jumeirah Phase 2 infrastructure',
    '2008: Dubai Metro opens (September); Terminal 3 Dubai Airport opens',
    '2008: Emirates 71 aircraft order worth $19B; first A380 flight',
    'November 2009: Dubai World debt crisis - $26B restructuring requested',
    'December 2009: Abu Dhabi provides $10B bailout ($20B total)',
    '2010: Burj Khalifa opens - world\'s tallest building (829.8m)',
  ],
  credibility: createCredibilityScore(1, 92, 36, '2026-04-28'),
  sources: [
    createSourceReference('Wikipedia - Dubai housing crash', 1, '2026-04-27'),
    createSourceReference('Wikipedia - Burj Khalifa', 1, '2026-04-27'),
    createSourceReference('Wikipedia - History of Dubai', 1, '2026-04-27'),
    createSourceReference('Wikipedia - History of Emirates', 1, '2026-04-27'),
    createSourceReference('CNBC - Dubai World Debt', 2, '2026-04-27'),
    createSourceReference('Harvard Business School', 1, '2026-04-27'),
    createSourceReference('CBS News - Abu Dhabi Bailout', 2, '2026-04-27'),
    createSourceReference('The National', 1, '2026-04-27'),
    createSourceReference('Gulf News - Telecom Reform', 2, '2026-04-27'),
    createSourceReference('AZoBuild - Palm Jumeirah', 2, '2026-04-27'),
    createSourceReference('USC Viterbi - Environmental Impact', 2, '2026-04-27'),
    createSourceReference('Al-Bayan Center - Iraq War', 2, '2026-04-27'),
    createSourceReference('Macrotrends.net - GDP', 2, '2026-04-27'),
    createSourceReference('Building.co.uk - Property Crash', 2, '2026-04-27'),
    createSourceReference('Boeing Media Room - Emirates', 1, '2026-04-27'),
  ],
  lastUpdated: '2026-04-28',
}

// Extended data interfaces for Rapid Development Era
export interface GdpGrowthData {
  year: number
  growthRate: number
  source: string
}

export interface EconomicMilestone {
  metric: string
  value: string
  period: string
}

export interface GlobalRanking {
  indicator: string
  ranking: string
}

export interface LabourMarketData {
  metric: string
  growthRate: number
}

export interface PalmJumeirahConstruction {
  attribute: string
  value: string
}

export interface BurjKhalifaAttribute {
  attribute: string
  value: string
  verified: boolean
}

export interface BurjKhalifaMilestone {
  date: string
  milestone: string
}

export interface DubaiMetroAttribute {
  attribute: string
  value: string
}

export interface DebtCrisisTimeline {
  date: string
  event: string
}

export interface DubaiWorldDebtDetail {
  attribute: string
  value: string
}

export interface BailoutKeyFact {
  attribute: string
  value: string
}

export interface PropertyPriceCollapse {
  metric: string
  value: string
  source: string
}

export interface PopulationDecline {
  metric: string
  value: string
  source: string
}

export interface AbandonedCarData {
  attribute: string
  value: string
  source: string
}

export interface TelecomKeyEvent {
  date: string
  event: string
}

export interface IraqWarFinancial {
  attribute: string
  value: string
}

export interface IraqWarPolitical {
  date: string
  event: string
}

export interface InfrastructureProject {
  project: string
  start: string
  completion: string
  costScale: string
  status: string
}

export interface SentimentTopic {
  topic: string
  positive: number
  neutral: number
  negative: number
  dominantNarrative: string
}

export interface RelevanceMatrix {
  dataPoint: string
  uaeRelevance: string
  assessmentRationale: string
}

export interface CrisisKpi {
  kpi: string
  value: string
  date: string
}

export interface FinancialDataPoint {
  id: string
  category: string
  dataPoint: string
  value: string
  source: string
}

export interface PhysicalMetric {
  id: string
  entity: string
  metric: string
  value: string
  source: string
}

export const rapidDevelopmentExtendedData = {
  gdpGrowthData: [
    { year: 2000, growthRate: 10.85, source: 'Macrotrends.net' },
    { year: 2001, growthRate: 1.4, source: 'Macrotrends.net' },
    { year: 2002, growthRate: 2.43, source: 'Macrotrends.net' },
    { year: 2003, growthRate: 8.8, source: 'Macrotrends.net' },
    { year: 2004, growthRate: 9.57, source: 'Macrotrends.net' },
    { year: 2005, growthRate: 4.86, source: 'Macrotrends.net' },
    { year: 2008, growthRate: 7.4, source: 'Building.co.uk' },
    { year: 2009, growthRate: -1.7, source: 'Building.co.uk/EFG Hermes' },
  ] as GdpGrowthData[],

  economicMilestones: [
    { metric: 'UAE GDP 2000 Growth', value: '14%', period: 'WAM report' },
    { metric: 'Real GDP 2006', value: 'AED 918 billion ($250 billion)', period: 'Zawya' },
    { metric: 'Real GDP 2024', value: 'AED 1.77 trillion ($482 billion)', period: 'Zawya' },
    { metric: 'GDP Growth (2006-2024)', value: '94%', period: 'Zawya' },
    { metric: 'Non-oil Foreign Trade Growth', value: '599% (AED 415B to AED 3T)', period: 'Zawya' },
    { metric: 'Non-oil Exports Growth', value: '1,827% (AED 29B to AED 559B)', period: 'Zawya' },
  ] as EconomicMilestone[],

  globalRankings: [
    { indicator: 'Efficiency of Government Spending', ranking: 'First globally' },
    { indicator: 'International Indicators (First Place)', ranking: 'First in 279 indicators' },
    { indicator: 'Top 5 Global Rankings', ranking: '525 indicators' },
    { indicator: 'Top 10 Global Rankings', ranking: '738 indicators' },
    { indicator: 'New FDI Projects 2024 (UNCTAD)', ranking: 'Second globally' },
    { indicator: 'Foreign Direct Investment', ranking: 'AED 47B to AED 168B' },
  ] as GlobalRanking[],

  labourMarket: [
    { metric: 'Establishment Growth', growthRate: 45.76 },
    { metric: 'Workforce Growth', growthRate: 101.76 },
    { metric: 'Skilled Workforce Growth', growthRate: 49.92 },
    { metric: "Women's Participation Growth", growthRate: 101.92 },
  ] as LabourMarketData[],

  palmJumeirahConstruction: [
    { attribute: 'Contractors', value: 'Dutch/Belgian firms Van Oord and Jan De Nul' },
    { attribute: 'Method', value: 'GPS-guided dredgers using "rainbowing" technique' },
    { attribute: 'Sand Used', value: '~94 million cubic meters' },
    { attribute: 'Rock Used', value: '~7 million tons from Hajar Mountains' },
    { attribute: 'Breakwater', value: '11 kilometers crescent-shaped' },
    { attribute: 'Subsea Tunnel', value: '1.4 km at 25 meters below sea level' },
    { attribute: 'Bridge to Mainland', value: '300 meters' },
    { attribute: 'Monorail', value: '5.4 km (first in Middle East)' },
  ] as PalmJumeirahConstruction[],

  burjKhalifaConstruction: [
    { attribute: 'Construction Start', value: '6 January 2004', verified: true },
    { attribute: 'Exterior Completed', value: '1 October 2009', verified: true },
    { attribute: 'Building Opened', value: '4 January 2010', verified: true },
    { attribute: 'Cost', value: 'US$1.5 billion (AED 5.5 billion)', verified: true },
    { attribute: 'Architectural Height', value: '828 m (2,717 ft)', verified: true },
    { attribute: 'Tip Height', value: '829.8 m (2,722 ft)', verified: true },
    { attribute: 'Floor Count', value: '154 floors + 9 maintenance levels', verified: true },
    { attribute: 'Floor Area', value: '309,473 m²', verified: true },
    { attribute: 'Concrete Used', value: '330,000 m³', verified: true },
    { attribute: 'Steel Rebar', value: '55,000 tonnes', verified: true },
    { attribute: 'Man-hours', value: '22 million', verified: true },
    { attribute: 'Foundation', value: '192 piles, 1.5m diameter x 43m length', verified: true },
    { attribute: 'Elevators', value: '57', verified: true },
  ] as BurjKhalifaAttribute[],

  burjKhalifaMilestones: [
    { date: '17 January 2009', milestone: 'Topped out at 829.8 m' },
    { date: '7 April 2008', milestone: 'Surpassed KVLY-TV Mast (tallest structure)' },
    { date: '1 September 2008', milestone: 'Surpassed Warsaw Radio Mast (tallest ever built)' },
  ] as BurjKhalifaMilestone[],

  dubaiMetro: [
    { attribute: 'Opening Date', value: 'September 2009 (Red Line)' },
    { attribute: 'Project Cost', value: 'US$4.2 billion' },
    { attribute: 'Network Length', value: '75 km with 47 stations' },
    { attribute: 'Red Line Length', value: '32 miles (51.5 km)' },
    { attribute: 'First Urban Metro', value: 'In Gulf Arab states' },
    { attribute: 'Notable', value: 'Constructed during global financial crisis, completed on schedule' },
  ] as DubaiMetroAttribute[],

  debtCrisisTimeline: [
    { date: 'November 25, 2009', event: 'Dubai World requested restructuring of $26 billion in debts' },
    { date: 'November 26, 2009', event: 'Dubai government formally asked creditors to reschedule repayment' },
    { date: 'December 2009', event: 'Abu Dhabi provided $10 billion bailout' },
    { date: 'March 2010', event: 'Dubai World laid out restructuring plans' },
    { date: 'October 2010', event: 'Dubai World signed last remaining investor to $23 billion debt restructuring' },
  ] as DebtCrisisTimeline[],

  dubaiWorldDebtDetails: [
    { attribute: 'Total Debt Restructured', value: '$26 billion' },
    { attribute: 'Total Liabilities', value: 'Nearly $60 billion' },
    { attribute: 'Nakheel (subsidiary) Debt', value: '$8.5 billion' },
    { attribute: 'Nakheel Sukuk', value: 'AED 15.50 billion Islamic bond' },
    { attribute: 'Abu Dhabi Bailout Used for Nakheel', value: '$4.1 billion' },
    { attribute: 'Remaining to Dubai World', value: '$5.9 billion' },
  ] as DubaiWorldDebtDetail[],

  bailoutKeyFacts: [
    { attribute: 'Announced', value: 'December 14, 2009' },
    { attribute: 'Initial Bailout Amount', value: '$10 billion' },
    { attribute: 'Total Support Package', value: '$20 billion' },
    { attribute: 'Funds to Nakheel', value: '$4.1 billion' },
    { attribute: 'Funds to Dubai World', value: '$5.9 billion' },
  ] as BailoutKeyFact[],

  propertyPriceCollapse: [
    { metric: 'Peak to 2009 Decline', value: 'Property prices fell to 40% of 2008 peak levels', source: 'Multiple' },
    { metric: 'Initial Drop (Q1 2009)', value: 'House prices fell 40% in first three months alone', source: 'Wikipedia' },
    { metric: 'Some Areas', value: 'Declines up to 60%', source: 'Wikipedia' },
    { metric: 'Palm Jumeirah Example', value: '£2.6m (July 2008) to £1.2m', source: 'Building.co.uk' },
  ] as PropertyPriceCollapse[],

  populationDecline: [
    { metric: 'UAE Population 2008', value: '1.79 million', source: 'Building.co.uk' },
    { metric: 'UAE Population Expected (2009)', value: '1.49 million', source: 'Building.co.uk' },
    { metric: 'Dubai Specific Drop', value: '17%', source: 'Building.co.uk' },
    { metric: 'Expat Proportion', value: '80% of UAE population', source: 'Building.co.uk' },
  ] as PopulationDecline[],

  abandonedCarsData: [
    { attribute: 'Abandoned Cars (Q1 2009 est.)', value: '3,000+', source: 'Juan Cole' },
    { attribute: 'Abandoned Cars Q1 2011', value: '2,738', source: 'The National' },
    { attribute: 'Abandoned Cars Q1 2012', value: '3,040', source: 'The National' },
    { attribute: 'Location', value: 'Dubai Airport parking lot', source: 'Multiple' },
    { attribute: 'Causes', value: 'Debt-ridden expatriates fleeing job losses', source: 'Multiple' },
  ] as AbandonedCarData[],

  telecomKeyEvents: [
    { date: 'April 2004', event: 'UAE President issued decree restructuring telecommunications sector' },
    { date: 'February 2006', event: 'Emirates Integrated Telecommunications (du) received license' },
    { date: 'February 11, 2007', event: 'du launched mobile services; Shaikh Mohammad made first call' },
    { date: 'February 25, 2007', event: 'Retail launch across seven emirates' },
    { date: 'July 2007', event: 'Initial fixed-line service (Dubai Media City, Internet City only)' },
    { date: '2007', event: 'Nationwide mobile launch' },
    { date: '2008 (Jul-Sep)', event: 'du achieved first quarterly profit' },
  ] as TelecomKeyEvent[],

  iraqWarFinancial: [
    { attribute: 'Debt Cancellation', value: 'Almost $7 billion' },
    { attribute: 'Ranking', value: 'Among top 12 financial sponsors of Iraqi Governing Council' },
    { attribute: 'Iraq War Support', value: '$215 million in economic/reconstruction assistance' },
  ] as IraqWarFinancial[],

  iraqWarPolitical: [
    { date: '1971', event: 'Iraq supported UAE independence' },
    { date: '1990', event: 'UAE embassy closed after Iraq invaded Kuwait' },
    { date: 'July 2000', event: 'Diplomatic relations resumed' },
    { date: '2003', event: 'Top 12 financial sponsor of Iraqi Governing Council' },
    { date: 'May 2006', event: 'UAE withdrew top envoy after diplomat kidnapping' },
    { date: 'June 2008', event: 'First high-ranking GCC visit to Iraq since March 2003' },
  ] as IraqWarPolitical[],

  infrastructureProjects: [
    { project: 'Palm Jumeirah', start: '2001', completion: '2008', costScale: '94M m³ sand, 7M tons rock', status: 'Completed' },
    { project: 'Burj Khalifa', start: '2004', completion: '2010', costScale: '$1.5 billion', status: 'Completed' },
    { project: 'Dubai Metro', start: '2005', completion: '2009', costScale: '$4.2 billion, 75 km', status: 'Completed' },
    { project: 'Dubai Airport Terminal 3', start: '2004', completion: '2008', costScale: '60M passenger capacity', status: 'Completed' },
    { project: 'World Islands', start: '2003', completion: '2008', costScale: '300 islands', status: 'Completed' },
  ] as InfrastructureProject[],

  sentimentTopics: [
    { topic: 'UAE Economic Boom 2000s', positive: 78, neutral: 15, negative: 7, dominantNarrative: 'Transformation, growth, iconic projects' },
    { topic: 'Palm Jumeirah Construction', positive: 85, neutral: 10, negative: 5, dominantNarrative: 'Engineering marvel, luxury destination' },
    { topic: 'Burj Khalifa', positive: 92, neutral: 6, negative: 2, dominantNarrative: 'Achievement, architectural wonder' },
    { topic: 'Dubai 2008 Debt Crisis', positive: 5, neutral: 15, negative: -80, dominantNarrative: 'Crisis, shock, market turmoil' },
    { topic: 'Abu Dhabi Bailout', positive: 70, neutral: 20, negative: 10, dominantNarrative: 'Federal solidarity, rescue' },
    { topic: 'Property Crash', positive: -15, neutral: 10, negative: -75, dominantNarrative: 'Collapse, exodus, losses' },
    { topic: 'Expat Exodus', positive: -20, neutral: 10, negative: -70, dominantNarrative: 'Human tragedy, abandoned dreams' },
    { topic: 'Telecom Reform (du)', positive: 75, neutral: 15, negative: 10, dominantNarrative: 'Competition, market opening' },
  ] as SentimentTopic[],

  relevanceMatrix: [
    { dataPoint: 'Dubai World $26B debt', uaeRelevance: 'CRITICAL', assessmentRationale: 'Direct UAE sovereign/provincial debt crisis' },
    { dataPoint: 'Abu Dhabi $10B bailout', uaeRelevance: 'CRITICAL', assessmentRationale: 'Inter-emirate financial support' },
    { dataPoint: 'Burj Khalifa construction', uaeRelevance: 'HIGH', assessmentRationale: 'Iconic UAE landmark, engineering achievement' },
    { dataPoint: 'Palm Jumeirah', uaeRelevance: 'HIGH', assessmentRationale: 'Major UAE development, tourism driver' },
    { dataPoint: 'Property crash 40-60% decline', uaeRelevance: 'CRITICAL', assessmentRationale: 'Core UAE economic indicator' },
    { dataPoint: 'Expat exodus 17% Dubai', uaeRelevance: 'CRITICAL', assessmentRationale: 'Population/labor force impact' },
  ] as RelevanceMatrix[],

  crisisKpis: [
    { kpi: 'Dubai World Debt', value: '$26B restructured / $60B total', date: 'Nov 2009' },
    { kpi: 'Abu Dhabi Bailout', value: '$10B initial / $20B total', date: 'Dec 2009' },
    { kpi: 'Property Price Decline', value: '-60% from peak', date: '2009' },
    { kpi: 'Construction on Hold', value: '$400B', date: '2009' },
    { kpi: 'Abandoned Cars (est.)', value: '3,000+', date: 'Q1 2009' },
  ] as CrisisKpi[],

  financialDataPoints: [
    { id: 'F001', category: 'GDP', dataPoint: 'UAE GDP 2000 Growth', value: '14%', source: 'WAM' },
    { id: 'F005', category: 'Debt', dataPoint: 'Dubai World Restructured', value: '$26B', source: 'CNBC' },
    { id: 'F007', category: 'Debt', dataPoint: 'Abu Dhabi Bailout', value: '$10B', source: 'CBS' },
    { id: 'F011', category: 'Construction', dataPoint: 'Burj Khalifa Cost', value: '$1.5B', source: 'Wikipedia' },
    { id: 'F012', category: 'Construction', dataPoint: 'Dubai Metro Cost', value: '$4.2B', source: 'Multiple' },
  ] as FinancialDataPoint[],

  physicalMetrics: [
    { id: 'P001', entity: 'Palm Jumeirah', metric: 'Sand Used', value: '94M m³', source: 'AZoBuild' },
    { id: 'P005', entity: 'Burj Khalifa', metric: 'Height', value: '828m', source: 'Wikipedia' },
    { id: 'P010', entity: 'Dubai Metro', metric: 'Network Length', value: '75 km', source: 'Railway Gazette' },
    { id: 'P013', entity: 'Emirates', metric: '777 Fleet', value: '94', source: 'Boeing' },
  ] as PhysicalMetric[],
}

// ============================================================================
// ERA 5: ARAB SPRING PERIOD (2010-2026)
// ============================================================================

export const arabSpringData: HistoricalEra = {
  id: 'hist-8-5',
  era: 'Arab Spring',
  period: { start: '2010', end: '2026' },
  description:
    'The Arab Spring was a wave of pro-democracy protests and uprisings that swept through the Middle East and North Africa beginning in late 2010. Sparked by the self-immolation of Tunisian street vendor Mohamed Bouazizi on December 17, 2010, the movement led to the overthrow of four heads of state and fundamentally reshaped the political landscape of the Arab world. For the UAE, the period involved GCC intervention in Bahrain, regional stability concerns, and defensive posture against potential spillover effects. Unlike Tunisia, Egypt, Libya, and Syria, the UAE did not experience major regime change. The outcomes varied dramatically by country, ranging from Tunisia\'s successful democratic transition to civil wars in Libya, Syria, and Yemen.',
  keyEvents: [
    // Tunisia - The Spark
    {
      date: 'December 17, 2010',
      title: 'Bouazizi Self-Immolation - Spark',
      description:
        'Mohamed Bouazizi (26-year-old street vendor) self-immolated in Sidi Bouzid, Tunisia after police confiscated his cart. Died January 4, 2011. This act catalyzed the Arab Spring across North Africa and Middle East with slogan "the people want to bring down the regime".',
      entities: ['Mohamed Bouazizi', 'Tunisia'],
      outcome: 'Sparked protests across Tunisia and the Arab world',
      significance: 'critical',
    },
    {
      date: 'January 14, 2011',
      title: 'Ben Ali Flees Tunisia',
      description:
        'President Zine El Abidine Ben Ali fled to Saudi Arabia after 24 years in power. Prime Minister Ghannouchi resigned February 27, 2011. First democratic elections held October 23, 2011.',
      entities: ['Zine El Abidine Ben Ali', 'Tunisia'],
      outcome: 'First Arab Spring regime change',
      significance: 'critical',
    },
    // Egypt
    {
      date: 'January 25, 2011',
      title: 'Egyptian Protests Begin',
      description:
        'First coordinated demonstrations across Egypt; Cairo became "war zone". Mubarak made first TV appearance January 28 with 25 deaths in four days.',
      entities: ['Hosni Mubarak', 'Egypt'],
      outcome: 'Beginning of major Egyptian uprising',
      significance: 'critical',
    },
    {
      date: 'February 11, 2011',
      title: 'Mubarak Resigns',
      description:
        'President Hosni Mubarak resigned after 30 years in power, handing power to military. Later sentenced to life in prison June 2, 2012.',
      entities: ['Hosni Mubarak', 'Egyptian Military'],
      outcome: 'End of 30-year Mubarak rule',
      significance: 'critical',
    },
    {
      date: 'June 24, 2012',
      title: 'Morsi Elected President',
      description:
        'Mohammed Morsi (Muslim Brotherhood candidate) won presidential runoff election.',
      entities: ['Mohammed Morsi', 'Muslim Brotherhood', 'Egypt'],
      outcome: 'Egypt\'s first democratically elected president',
      significance: 'major',
    },
    {
      date: 'July 3, 2013',
      title: 'Military Coup - Sisi Takes Power',
      description:
        'Military led by Abdel Fattah el-Sisi overthrew President Morsi. Rabaa massacre August 14, 2013 killed 800+ protesters.',
      entities: ['Abdel Fattah el-Sisi', 'Mohammed Morsi', 'Egyptian Military'],
      outcome: 'End of Muslim Brotherhood government; el-Sisi current president',
      significance: 'critical',
    },
    // Libya
    {
      date: 'February 20, 2011',
      title: 'Libyan Uprising Escalates',
      description:
        'Death toll passed 230 in Libya as uprising reached Tripoli February 25. UN backed no-fly zone March 18.',
      entities: ['Muammar Gaddafi', 'Libya', 'NATO'],
      outcome: 'Civil war began',
      significance: 'critical',
    },
    {
      date: 'October 20, 2011',
      title: 'Gaddafi Killed',
      description:
        'Muammar Gaddafi captured and killed by rebel forces after 42 years in power. Mass grave with 1,270 bodies discovered September 25, 2011.',
      entities: ['Muammar Gaddafi', 'National Transitional Council', 'Libya'],
      outcome: 'End of Gaddafi regime',
      significance: 'critical',
    },
    // Bahrain - UAE Direct Involvement
    {
      date: 'February 14, 2011',
      title: 'Bahrain Day of Rage',
      description:
        '"Day of Rage" with estimated 6,000 participants. "Bloody Thursday" February 17 saw police clear Pearl Roundabout with 3 killed, 200+ injured.',
      entities: ['Bahrain'],
      outcome: 'Beginning of Bahrain protests',
      significance: 'critical',
    },
    {
      date: 'March 14, 2011',
      title: 'GCC Forces Deploy to Bahrain',
      description:
        'Saudi Arabia deployed ~1,000 soldiers and UAE deployed 500 police officers to Bahrain to support monarchy. Martial law declared March 15. Pearl Monument demolished March 18.',
      entities: ['GCC', 'Saudi Arabia', 'UAE', 'Bahrain'],
      outcome: 'GCC intervention suppressed Bahrain protests; UAE demonstrates regional leadership',
      significance: 'critical',
    },
    // Yemen
    {
      date: 'January 24, 2011',
      title: 'Karman Arrested in Yemen',
      description:
        'Police arrested 19 opposition activists including Nobel Peace Prize nominee Tawakkol Karman.',
      entities: ['Tawakkol Karman', 'Yemen'],
      outcome: 'Yemen protests began',
      significance: 'major',
    },
    {
      date: 'February 27, 2012',
      title: 'Saleh Resigns Yemen',
      description:
        'President Ali Abdullah Saleh resigned after 33 years in power, powers handed to Vice President Hadi. Saleh killed in 2017.',
      entities: ['Ali Abdullah Saleh', 'Yemen'],
      outcome: 'End of Saleh\'s 33-year rule',
      significance: 'critical',
    },
    // Syria
    {
      date: 'March 15, 2011',
      title: 'Syrian Unrest Begins',
      description:
        'Major unrest began in Damascus and Aleppo. April 9, 2011: at least 22 killed in Deraa. April 25: tanks deployed for first time.',
      entities: ['Bashar al-Assad', 'Syria'],
      outcome: 'Beginning of Syrian civil war',
      significance: 'critical',
    },
    {
      date: 'December 2024',
      title: 'Assad Overthrown',
      description:
        'Rebel forces overthrew President Bashar al-Assad after 13-year civil war. Assad regime ended.',
      entities: ['Bashar al-Assad', 'Syria'],
      outcome: 'End of Syrian civil war - recovery phase begins',
      significance: 'critical',
    },
    // Second Arab Spring / Sudan / Algeria
    {
      date: 'April 11, 2019',
      title: 'Al-Bashir Overthrown',
      description:
        'Omar al-Bashir overthrown in Sudan after 30 years in power. June 3, 2019: security forces raided Khartoum sit-in killing 100+.',
      entities: ['Omar al-Bashir', 'Sudan'],
      outcome: 'End of al-Bashir regime',
      significance: 'major',
    },
    {
      date: 'April 2019',
      title: 'Algeria - Bouteflika Removed',
      description:
        'Abdelaziz Bouteflika removed after 20 years in power following protests.',
      entities: ['Abdelaziz Bouteflika', 'Algeria'],
      outcome: 'End of Bouteflika regime',
      significance: 'major',
    },
    // UAE Internal
    {
      date: 'July 2013',
      title: 'UAE94 Trial',
      description:
        'Mass trial concluded with 69 men convicted for allegedly plotting to overthrow the UAE government. Widespread criticism from Amnesty International and Human Rights Watch.',
      entities: ['UAE', 'Amnesty International', 'Human Rights Watch'],
      outcome: 'International criticism of human rights practices',
      significance: 'major',
    },
  ],
  policyOutcomes: [
    {
      policy: 'GCC Security Coordination',
      year: '2011',
      impact: 'Enhanced collective security response capability demonstrated; 1,000 Saudi soldiers + 500 UAE police deployed to Bahrain',
      successors: ['Continued GCC cooperation'],
    },
    {
      policy: 'Bahrain Support Operations',
      year: '2011',
      impact: 'UAE demonstrates regional security leadership; 500 police officers deployed; Bahrain monarchy preserved',
    },
    {
      policy: 'Internal Security Measures',
      year: '2011-2013',
      impact: 'Enhanced surveillance and control measures following regional protests; social media monitoring increased',
    },
    {
      policy: 'Tunisian Democratic Transition',
      year: '2011-2014',
      impact: 'Only Arab Spring country with lasting democratic success; new constitution January 2014; peaceful power transfer October 2019',
    },
    {
      policy: 'NATO Libya Intervention',
      year: '2011',
      impact: 'Air operations decisive in toppling Gaddafi',
    },
    {
      policy: 'Rabaa Massacre Response',
      year: '2013',
      impact: '800+ killed August 14, 2013; worst mass killing in modern Egyptian history; ended democratic hopes',
    },
    {
      policy: 'GCC Development Aid',
      year: '2011',
      impact: '$10 billion in loans to Oman and Bahrain to maintain stability',
    },
  ],
  entityInvolvement: [
    'UAE',
    'GCC',
    'Saudi Arabia',
    'Bahrain',
    'Egypt',
    'Libya',
    'Syria',
    'Yemen',
    'Tunisia',
    'Algeria',
    'Sudan',
    'NATO',
    'Amnesty International',
    'Human Rights Watch',
    'Muslim Brotherhood',
    'National Transitional Council (Libya)',
    'Al-Jazeera',
    'Mohamed Bouazizi',
    'Zine El Abidine Ben Ali',
    'Hosni Mubarak',
    'Muammar Gaddafi',
    'Ali Abdullah Saleh',
    'Mohammed Morsi',
    'Abdel Fattah el-Sisi',
    'Bashar al-Assad',
    'Tawakkol Karman',
    'Wael Ghonim',
  ],
  nationBuildingMilestones: [
    'December 17, 2010: Bouazizi self-immolates - spark of Arab Spring',
    'January 14, 2011: Ben Ali flees Tunisia (first regime change)',
    'February 11, 2011: Mubarak resigns Egypt after 30 years',
    'February 14, 2011: Bahrain "Day of Rage" begins',
    'March 14, 2011: UAE deploys 500 police to Bahrain as part of GCC',
    'October 20, 2011: Gaddafi killed in Libya after 42 years',
    'February 27, 2012: Saleh resigns Yemen after 33 years',
    'June 24, 2012: Morsi elected Egypt president',
    'July 3, 2013: Military coup in Egypt; Sisi takes power',
    'August 14, 2013: Rabaa massacre - 800+ killed',
    'January 2014: Tunisia adopts new constitution',
    'April 2019: Al-Bashir overthrown Sudan; Bouteflika removed Algeria',
    'December 2024: Assad overthrown in Syria - civil war ends',
    '2011-2026: UAE maintains stability; positions as regional business hub',
  ],
  credibility: createCredibilityScore(0, 92, 60, '2026-04-28'),
  sources: [
    createSourceReference('Wikipedia - Arab Spring', 1, '2026-04-27'),
    createSourceReference('Council on Foreign Relations (Tier-0)', 0, '2026-04-27'),
    createSourceReference('Amnesty International (Tier-0)', 0, '2026-04-27'),
    createSourceReference('Brookings Institution (Tier-0)', 0, '2026-04-27'),
    createSourceReference('Al Jazeera (Tier-1)', 1, '2026-04-27'),
    createSourceReference('Britannica (Tier-1)', 1, '2026-04-27'),
    createSourceReference('Harvard Gazette (Tier-0)', 0, '2026-04-27'),
    createSourceReference('University of Washington (Tier-0)', 0, '2026-04-27'),
    createSourceReference('TIME (Tier-1)', 1, '2026-04-27'),
    createSourceReference('Institut Montaigne (Tier-1)', 1, '2026-04-27'),
    createSourceReference('BOELL (Tier-1)', 1, '2026-04-27'),
    createSourceReference('FPIF (Tier-2)', 2, '2026-04-27'),
    createSourceReference('IEMed (Tier-1)', 1, '2026-04-27'),
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// ERA 6: MODERNIZATION & VISION ERA (2015-2020)
// ============================================================================

export const modernizationVisionData: HistoricalEra = {
  id: 'hist-8-6',
  era: 'Modernization & Vision Era',
  period: { start: '2015', end: '2020' },
  description:
    'The Modernization & Vision Era encompassed major strategic initiatives including UAE Vision 2021, the appointment of happiness and tolerance ministers, the historic Emirates Mars Mission (Hope Probe), and preparations for Expo 2020 Dubai. The era also saw the groundbreaking Abraham Accords normalizing relations with Israel.',
  keyEvents: [
    {
      date: '2010',
      title: 'UAE Vision 2021 Launch',
      description:
        'Sheikh Mohammed bin Rashid Al Maktoum launched Vision 2021 targeting making UAE "one of the best countries in the world" by Golden Jubilee (2021). Four pillars: United in responsibility, destiny, knowledge, and prosperity.',
      entities: ['Sheikh Mohammed bin Rashid Al Maktoum'],
      outcome: 'National strategic framework established',
      significance: 'critical',
    },
    {
      date: 'February 2016',
      title: 'Happiness and Tolerance Ministers Appointed',
      description:
        'Ohood bint Khalfan Al Roumi appointed Minister of State for Happiness; Sheikha Lubna Al Qasimi appointed Minister of State for Tolerance; Shamma Al Mazrui appointed Minister of State for Youth (youngest cabinet member at age 22).',
      entities: [
        'Ohood bint Khalfan Al Roumi',
        'Sheikha Lubna Al Qasimi',
        'Shamma Al Mazrui',
      ],
      outcome: 'World-first ministerial portfolios; global attention',
      significance: 'major',
    },
    {
      date: 'October 2017',
      title: 'UAE AI Strategy 2031',
      description:
        'UAE became first country to appoint dedicated AI Minister. Nine priority sectors identified including transport, health, space, renewable energy, water, technology, education, environment, and traffic.',
      entities: ['UAE AI Office'],
      outcome: 'Global leadership in government AI adoption',
      significance: 'critical',
    },
    {
      date: 'July 19, 2020',
      title: 'Emirates Mars Mission Launch',
      description:
        'Hope Probe launched from Tanegashima Space Center, Japan. First Arab mission to another planet.',
      entities: ['UAE Space Agency', 'MBRSC'],
      outcome: 'Historic achievement in Arab scientific achievement',
      significance: 'critical',
    },
    {
      date: 'February 9, 2021',
      title: 'Hope Probe Enters Mars Orbit',
      description:
        'Emirates Mars Mission successfully entered Mars orbit on first attempt. Mission extended until 2028.',
      entities: ['UAE Space Agency', 'MBRSC'],
      outcome: 'Arab world\'s first Mars mission; scientific data on Martian atmosphere',
      significance: 'critical',
    },
    {
      date: 'August 13, 2020',
      title: 'Abraham Accords Announced',
      description:
        'UAE announced normalization of relations with Israel, brokered by US. First Arab state to normalize since 1994 Egypt-Jordan peace treaties.',
      entities: ['UAE', 'Israel', 'United States', 'Donald Trump'],
      outcome: 'Historic diplomatic breakthrough; regional realignment',
      significance: 'critical',
    },
  ],
  policyOutcomes: [
    {
      policy: 'UAE Vision 2021',
      year: '2010',
      impact: 'National strategic plan with 52 NKPIs across six national priorities',
      successors: ['Centennial 2071'],
    },
    {
      policy: 'National Strategy for Artificial Intelligence 2031',
      year: '2017',
      impact: 'First country with dedicated AI minister; AED 335-352B economic contribution target',
    },
    {
      policy: 'Abraham Accords',
      year: '2020',
      impact: 'Normalization with Israel; regional diplomatic realignment',
    },
  ],
  entityInvolvement: [
    'Sheikh Mohammed bin Rashid Al Maktoum',
    'Ohood bint Khalfan Al Roumi',
    'Sheikha Lubna Al Qasimi',
    'Shamma Al Mazrui',
    'UAE Space Agency',
    'MBRSC',
    'Israel',
    'United States',
  ],
  nationBuildingMilestones: [
    '2010: Vision 2021 launched - national strategic framework',
    '2014: National Agenda launched with six priorities',
    '2016: First Happiness and Tolerance ministers appointed globally',
    '2017: UAE AI Strategy 2031 - first AI minister worldwide',
    '2020: Hope Probe launches - Arab world\'s first Mars mission',
    'August 2020: Abraham Accords - normalization with Israel',
    'February 2021: Hope Probe enters Mars orbit successfully',
  ],
  credibility: createCredibilityScore(0, 92, 45, '2026-04-28'),
  sources: [
    createSourceReference('UAE Government Portal', 0, '2026-04-28'),
    createSourceReference('UAE Cabinet', 0, '2026-04-28'),
    createSourceReference('Wikipedia - Hope Probe', 1, '2026-04-27'),
    createSourceReference('OECD.AI', 1, '2026-04-27'),
    createSourceReference('Wikipedia - Minister of State for Happiness', 1, '2026-04-27'),
    createSourceReference('Wikipedia - Abraham Accords', 1, '2026-04-27'),
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// ERA 7: POST-PANDEMIC & EXPO ERA (2020-2023)
// ============================================================================

export const postPandemicExpoData: HistoricalEra = {
  id: 'hist-8-7',
  era: 'Post-Pandemic & Expo Era',
  period: { start: '2020', end: '2023' },
  description:
    'The Post-Pandemic & Expo Era encompassed Expo 2020 Dubai (postponed to 2021-2022 due to COVID-19), the pandemic response and recovery, and leadership transitions following Sheikh Khalifa\'s death and MBZ\'s assumption of the presidency. The era also saw COP28 preparations and the UAE\'s emergence as a global climate diplomacy leader.',
  keyEvents: [
    {
      date: 'October 1, 2021',
      title: 'Expo 2020 Dubai Opens',
      description:
        'Six-month world expo opened (postponed from 2020 due to COVID). 24.1 million visits, 178 countries represented, 178 countries and 10 organizations participated.',
      entities: ['Dubai', 'BIE'],
      outcome: 'Major global event; economic and cultural impact',
      significance: 'critical',
    },
    {
      date: 'March 31, 2022',
      title: 'Expo 2020 Dubai Closes',
      description:
        'Event concluded with site transitioning to Expo City Dubai as mixed-use community.',
      entities: ['Dubai', 'Expo City Dubai'],
      outcome: 'Legacy development continues',
      significance: 'major',
    },
    {
      date: 'May 13, 2022',
      title: 'Sheikh Khalifa Dies',
      description:
        'President Sheikh Khalifa bin Zayed Al Nahyan died at age 73. 40 days of mourning observed.',
      entities: ['Sheikh Khalifa bin Zayed Al Nahyan'],
      outcome: 'Leadership transition initiated',
      significance: 'critical',
    },
    {
      date: 'May 14, 2022',
      title: 'MBZ Becomes President',
      description:
        'Federal Supreme Council elected Sheikh Mohamed bin Zayed Al Nahyan (MBZ) as President. Had been de facto leader since Sheikh Khalifa\'s 2014 stroke.',
      entities: ['Sheikh Mohamed bin Zayed Al Nahyan', 'Federal Supreme Council'],
      outcome: 'Leadership succession; MBZ assumes presidency',
      significance: 'critical',
    },
    {
      date: 'November-December 2023',
      title: 'COP28 Hosted in UAE',
      description:
        'UAE hosted COP28 in Expo City Dubai. 85,000+ participants from 198 parties. Historic first: fossil fuel language in final agreement ("transitioning away").',
      entities: ['UAE', 'Dr. Sultan Al Jaber', 'UNFCCC'],
      outcome: 'Global climate diplomacy leadership; fossil fuel language breakthrough',
      significance: 'critical',
    },
    {
      date: '2020-2022',
      title: 'COVID-19 Pandemic Response',
      description:
        'UAE implemented comprehensive pandemic response including vaccination campaign, travel restrictions, and economic support packages totaling AED 33 billion in federal initiatives.',
      entities: ['UAE Government', 'Ministry of Health'],
      outcome: 'High vaccination rates; economic recovery',
      significance: 'major',
    },
  ],
  policyOutcomes: [
    {
      policy: 'Expo 2020 Dubai',
      year: '2021-2022',
      impact: '$42.2B projected GVA (2013-2042); 24.1M visits',
    },
    {
      policy: 'COVID-19 Economic Support',
      year: '2020',
      impact: 'AED 33B federal initiatives; AED 30B Emirates Development Bank SME support',
    },
    {
      policy: 'Presidential Succession',
      year: '2022',
      impact: 'MBZ assumes presidency; continuity in governance',
    },
    {
      policy: 'COP28 Presidency',
      year: '2023',
      impact: 'Historic climate agreement; Loss and Damage Fund operationalized',
    },
  ],
  entityInvolvement: [
    'Sheikh Khalifa bin Zayed Al Nahyan',
    'Sheikh Mohamed bin Zayed Al Nahyan',
    'Dr. Sultan Al Jaber',
    'Dubai',
    'Abu Dhabi',
    'UNFCCC',
    'BIE',
    'World Health Organization',
  ],
  nationBuildingMilestones: [
    '2020: COVID-19 pandemic - UAE response and recovery',
    'Oct 2021-Mar 2022: Expo 2020 Dubai - 24.1M visits',
    'May 2022: Sheikh Khalifa dies - leadership transition',
    'May 2022: MBZ becomes President of UAE',
    'March 2023: Sheikh Khaled designated Crown Prince of Abu Dhabi',
    'Nov-Dec 2023: COP28 hosted - historic climate agreement',
  ],
  credibility: createCredibilityScore(0, 90, 50, '2026-04-28'),
  sources: [
    createSourceReference('BIE Official', 0, '2026-04-28'),
    createSourceReference('Wikipedia - Expo 2020', 1, '2026-04-27'),
    createSourceReference('UAE Ministry of Foreign Affairs', 0, '2026-04-28'),
    createSourceReference('UNFCCC Official', 0, '2026-04-28'),
    createSourceReference('Wikipedia - Sheikh Khalifa', 1, '2026-04-27'),
    createSourceReference('Wikipedia - COP28', 1, '2026-04-27'),
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// ERA 8: RECENT ERA (2023-2026) - COMPREHENSIVE MD CONTENT
// ============================================================================

// Extended interfaces for Recent Era data from MD file 8-8
export interface HistoricalSourceCredibilityEntry {
  source: string
  tier: 0 | 1 | 2 | 3
  type: string
  reliability: string
  uaeRelevance: string
}

export interface EntityEntry {
  entity: string
  type: string
  role: string
  sourceCredibility?: string
  relationship?: string
}

export interface TopicSentiment {
  topic: string
  overallSentiment: string
  volatility: string
  sourceTone: string
}

export interface RecentEraDataExtended {
  sourceCredibilityMatrix: HistoricalSourceCredibilityEntry[]
  entityRegistry: {
    governmentEntities: EntityEntry[]
    externalEntities: EntityEntry[]
    corporateEntities: EntityEntry[]
  }
  sentimentAnalysis: {
    topicSentiment: TopicSentiment[]
    sourceSentiment: { topic: string; governmentSources: string; thinkTanks: string; regionalMedia: string; intlMedia: string }[]
  }
  uae2024: {
    majorEvents: { politicalDiplomatic: string[]; economicInfrastructure: string[]; socialCultural: string[] }
    keyLeaders: { role: string; name: string }[]
    foreignAid: string
    kpis: { kpi: string; value: string; target: string; status: string }[]
  }
  uae2025: {
    majorPolicyChanges: { policy: string; details: string; effectiveDate: string; sourceTier: 0 | 1 | 2 }[]
    federalBudget: { revenues: string; expenditures: string; financialBalance: string; source: string; tier: 0 | 1 | 2 }
    kpis: { kpi: string; value: string; context: string; status: string }[]
  }
  uae2026: {
    transportInfrastructure: { project: string; details: string; timeline: string; source: string }[]
    financialBanking: string[]
    environment: { policy: string; details: string; effectiveDate: string }[]
    religionEducation: { policy: string; details: string; effectiveDate: string }[]
    socialLegal: { policy: string; details: string; effectiveDate: string }[]
    specialDesignations: string[]
    eInvoicing: { mandate: string; penalty: string }
    lookbackPeriods: string
    exciseTaxTiers: { sugarContent: string; taxStatus: string }[]
    kpis: { kpi: string; value: string; target: string; status: string }[]
  }
  uaeFlood2024: {
    casualties: { nationality: string; count: number; details: string }[]
    propertyDamage: { metric: string; value: string; source: string; tier: 0 | 1 | 2 }[]
    transportationImpact: { metric: string; value: string; source: string; tier: 0 | 1 | 2 }[]
    scientificAnalysis: { leadAuthor: string; researchCenter: string; cause: string; climateLink: string; normalBehavior: string; source: string }
    governmentResponse: { action: string; details: string; value: string }[]
    kpis: { kpi: string; value: string; context: string }[]
  }
  cop28: {
    lossAndDamageFund: { metric: string; value: string; source: string; tier: 0 | 1 }[]
    fossilFuelLanguage: { achievement: string; language: string; source: string }[]
    financialCommitments: { fund: string; amount: string; source: string; tier: 0 | 1 }[]
    adaptationStocktake: { metric: string; value: string; source: string; tier: 0 | 1 }[]
    criticisms: { issue: string; criticism: string; source: string; tier: 0 | 1 }[]
    quotes: { speaker: string; quote: string }[]
    kpis: { kpi: string; value: string; target: string; status: string }[]
  }
  uaeBRICS: {
    timeline: { date: string; event: string; source: string; tier: 0 | 1 }[]
    expansion2024: { country: string; joinDate: string; tier: 0 | 1 }[]
    uaeEconomicProfile: { metric: string; value: string; rank?: string; source: string }[]
    strategicImplications: { dimension: string; analysis: string; source: string }[]
    officialStatements: { official: string; quote: string; source: string }[]
    usResponse: string
    challenges: { challenge: string; source: string }[]
    kpis: { kpi: string; value: string; context: string }[]
  }
  uaeGaza: {
    humanitarianEngagement: { metric: string; value: string; source: string; tier: 0 | 1 | 2 }[]
    kpis: { kpi: string; value: string; context: string }[]
  }
  weTheUAE2031: {
    fourPillars: { pillar: string; focus: string; source: string }[]
    forwardSocietyPrinciples: { principle: string; description: string; source: string }[]
    keyTargets: { indicator: string; baseline: string; target: string; source: string; tier: 0 | 1 | 2 }[]
    kpis: { kpi: string; baseline: string; target: string; growth: string }[]
  }
  uaeNationalDay: {
    historicalContext: { event: string; date: string; details: string }[]
    namingEvolution: string
    events2025: { venue: string; activities: string }[]
    kpis: { kpi: string; value: string; context: string }[]
  }
  uaeCorporateTax: {
    taxRates: { incomeLevel: string; rate: string; source: string }[]
    keyFeatures: { feature: string; details: string; source: string }[]
    deductibleExpenses: { category: string; details: string; source: string }[]
    nonDeductible: { category: string; source: string }[]
    lossCarryforward: { rule: string; details: string }[]
    freeZoneRequirements: { requirement: string; details: string }[]
    kpis: { kpi: string; value: string; context: string }[]
  }
  uae2026Crises: {
    march2026Tensions: {
      attackStatistics: { metric: string; value: string; source: string; tier: 0 | 1 | 2 | 3 }[]
      defenseSystems: { system: string; origin: string; source: string }[]
      uaeResponse: { action: string; details: string; source: string }[]
    }
    resilienceIndicators: { indicator: string; value: string; source: string }[]
    kpis: { kpi: string; value: string; context: string }[]
  }
  summary: {
    periodThemes: { period: string; primaryThemes: string; sentiment: string }[]
    criticalTopics: { topic: string; relevance: string; dataDensity: string }[]
  }
}

export const recentEraData: HistoricalEra = {
  id: 'hist-8-8',
  era: 'Recent Era',
  period: { start: '2023', end: '2026' },
  description:
    'The Recent Era (2023-2026) encompasses UAE\'s rise as a global power through BRICS membership, COP28 hosting, major infrastructure projects like Etihad Rail, technological innovation, and climate leadership. The period also saw significant policy reforms including corporate tax implementation, golden visa expansions, and ambitious infrastructure projects. The April 2024 flood crisis tested emergency response capabilities while regional tensions in 2026 challenged UAE\'s resilience.',
  keyEvents: [
    {
      date: 'January 1, 2024',
      title: 'UAE Joins BRICS',
      description:
        'UAE officially became a member of BRICS (Brazil, Russia, India, China, South Africa, Egypt, Ethiopia, Iran, Indonesia). Highest GDP per capita (PPP) among members at $81,676.',
      entities: ['BRICS', 'UAE'],
      outcome: 'Emerging markets alliance membership; diplomatic diversification',
      significance: 'critical',
    },
    {
      date: 'April 16, 2024',
      title: 'UAE Flood Crisis',
      description:
        'Heaviest rainfall in 75 years (254.8mm in 24 hours in Al Ain). 5 deaths, $2.9-3.4B insurance losses. 1,244 flights cancelled at Dubai International.',
      entities: ['UAE Government', 'Dubai Airports'],
      outcome: 'Emergency response tested; AED 2B government aid provided',
      significance: 'major',
    },
    {
      date: 'November 30 - December 13, 2023',
      title: 'COP28 Hosted',
      description:
        'UAE hosted COP28 in Expo City Dubai. Historic first fossil fuel language in final agreement ("transitioning away"). $661M Loss and Damage Fund operationalized.',
      entities: ['UAE', 'Dr. Sultan Al Jaber', 'UNFCCC'],
      outcome: 'Global climate diplomacy leadership; Loss and Damage Fund established',
      significance: 'critical',
    },
    {
      date: 'September 2024',
      title: 'US Major Defense Partner',
      description:
        'UAE became second country after India to be designated "major defense partner" by US.',
      entities: ['UAE', 'United States'],
      outcome: 'Enhanced defense cooperation; strategic alliance deepened',
      significance: 'major',
    },
    {
      date: 'February 23, 2024',
      title: 'FATF Gray List Removal',
      description:
        'FATF removed UAE from "gray list" of money laundering watchlist demonstrating compliance progress.',
      entities: ['FATF', 'UAE'],
      outcome: 'Improved international financial standing',
      significance: 'major',
    },
    {
      date: 'February 2024',
      title: 'BAPS Mandir Inaugurated',
      description:
        'First Hindu temple in Abu Dhabi inaugurated. Symbol of religious tolerance.',
      entities: ['BAPS', 'UAE'],
      outcome: 'Interfaith harmony; cultural inclusion',
      significance: 'minor',
    },
    {
      date: 'November 2024',
      title: 'UAE Stock Market $1 Trillion',
      description:
        'Stocks listed in UAE topped $1 trillion market capitalization for first time.',
      entities: ['UAE Financial Markets'],
      outcome: 'Economic milestone; global financial significance',
      significance: 'minor',
    },
    {
      date: '2025-2026',
      title: 'Etihad Rail Passenger Service',
      description:
        'National railway passenger service launching. Abu Dhabi to Dubai in 57 minutes, 11 cities, 400 passenger capacity.',
      entities: ['Etihad Rail'],
      outcome: 'Revolutionary transport connectivity',
      significance: 'major',
    },
    {
      date: 'January 2026',
      title: 'Single-Use Plastics Ban',
      description:
        'Comprehensive ban on single-use plastics including cups, cutlery, straws, Styrofoam, and paper bags under 50 microns.',
      entities: ['UAE Government'],
      outcome: 'Environmental protection; sustainability commitment',
      significance: 'minor',
    },
    {
      date: 'March 2026',
      title: 'Operation Epic Fury - Regional Tensions',
      description:
        'Iran-US-Israel regional tensions. Over 250 ballistic missiles, 1,400 drones, 8 cruise missiles launched. UAE interception rate over 90%.',
      entities: ['UAE', 'United States', 'Israel', 'Iran'],
      outcome: 'Multi-layered air defense demonstrated; regional stability challenged',
      significance: 'major',
    },
  ],
  policyOutcomes: [
    {
      policy: 'Corporate Tax',
      year: '2023',
      impact: '9% rate effective June 1, 2023; AED 375K threshold for 0% rate',
    },
    {
      policy: 'FATF Gray List Removal',
      year: '2024',
      impact: 'UAE removed from money laundering watchlist February 2024',
    },
    {
      policy: 'BRICS Membership',
      year: '2024',
      impact: 'Strategic diversification; emerging markets alignment; highest GDP per capita in bloc at $81,676',
    },
    {
      policy: 'Single-Use Plastics Ban',
      year: '2026',
      impact: 'Comprehensive ban on cups, cutlery, straws, Styrofoam, paper bags under 50 microns',
    },
    {
      policy: 'Age of Maturity',
      year: '2026',
      impact: 'Lowered from 21 to 18 years',
    },
    {
      policy: 'DMTT (Domestic Minimum Top-up Tax)',
      year: '2025',
      impact: '15% minimum ETR for large MNEs with EUR 750M+ revenue',
    },
  ],
  entityInvolvement: [
    'Sheikh Mohamed bin Zayed Al Nahyan',
    'Sheikh Mohammed bin Rashid Al Maktoum',
    'Dr. Sultan Al Jaber',
    'BRICS',
    'United States',
    'Etihad Rail',
    'UAE Government',
    'Federal Tax Authority',
    'FATF',
    'UNFCCC',
  ],
  nationBuildingMilestones: [
    'Jan 2024: UAE joins BRICS - emerging markets alliance',
    'Feb 2024: FATF gray list removed',
    'Apr 2024: UAE flood crisis - 254.8mm rainfall in 24 hours',
    'Sep 2024: US major defense partner designation',
    'Nov 2024: UAE stocks top $1 trillion market cap',
    '2025: Etihad Rail passenger service launching',
    'Jan 2026: Single-use plastics ban',
    '2026: Year of Family declared',
    '2026: Age of maturity lowered to 18',
  ],
  credibility: createCredibilityScore(0, 92, 85, '2026-04-28'),
  sources: [
    createSourceReference('UAE Ministry of Foreign Affairs', 0, '2026-04-28'),
    createSourceReference('UAE Government Portal', 0, '2026-04-28'),
    createSourceReference('UAE Ministry of Finance', 0, '2026-04-28'),
    createSourceReference('UNFCCC Official', 0, '2026-04-28'),
    createSourceReference('Wikipedia - BRICS', 1, '2026-04-27'),
    createSourceReference('Wikipedia - UAE 2024', 1, '2026-04-27'),
    createSourceReference('Brookings Institution', 1, '2026-04-27'),
    createSourceReference('Stimson Center', 1, '2026-04-27'),
    createSourceReference('KPMG', 1, '2026-04-27'),
    createSourceReference('PwC', 1, '2026-04-27'),
  ],
  lastUpdated: '2026-04-28',
}

// Extended Recent Era Data from MD file 8-8
export const recentEraDataExtended: RecentEraDataExtended = {
  sourceCredibilityMatrix: [
    { source: 'UAE Ministry of Foreign Affairs (mofa.gov.ae)', tier: 0, type: 'Government Official', reliability: 'Very High', uaeRelevance: 'Direct' },
    { source: 'UAE Ministry of Finance (mof.gov.ae)', tier: 0, type: 'Government Official', reliability: 'Very High', uaeRelevance: 'Direct' },
    { source: 'UAE Government Portal (u.ae)', tier: 0, type: 'Government Official', reliability: 'Very High', uaeRelevance: 'Direct' },
    { source: 'WAM (UAE News Agency)', tier: 0, type: 'Government Media', reliability: 'High', uaeRelevance: 'Direct' },
    { source: 'UNFCCC Official', tier: 0, type: 'International Org', reliability: 'High', uaeRelevance: 'Direct' },
    { source: 'Wikipedia (verified events)', tier: 1, type: 'Encyclopedia', reliability: 'Medium-High', uaeRelevance: 'Indirect' },
    { source: 'Brookings Institution', tier: 1, type: 'Think Tank', reliability: 'High', uaeRelevance: 'Indirect' },
    { source: 'KPMG', tier: 1, type: 'Big 4 Accounting', reliability: 'High', uaeRelevance: 'Indirect' },
    { source: 'PwC', tier: 1, type: 'Big 4 Accounting', reliability: 'High', uaeRelevance: 'Indirect' },
    { source: 'Gulf News', tier: 2, type: 'Regional Media', reliability: 'Medium-High', uaeRelevance: 'Direct' },
    { source: 'The National (UAE)', tier: 2, type: 'Regional Media', reliability: 'Medium-High', uaeRelevance: 'Direct' },
    { source: 'The Finance World', tier: 2, type: 'Business Media', reliability: 'Medium', uaeRelevance: 'Direct' },
    { source: 'Arabian Business', tier: 2, type: 'Business Media', reliability: 'Medium', uaeRelevance: 'Direct' },
    { source: 'Reuters', tier: 2, type: 'International Media', reliability: 'High', uaeRelevance: 'Direct' },
    { source: 'The Guardian', tier: 2, type: 'International Media', reliability: 'High', uaeRelevance: 'Indirect' },
    { source: 'Fox News', tier: 3, type: 'Political Media', reliability: 'Medium', uaeRelevance: 'Indirect' },
    { source: 'Stimson Center', tier: 1, type: 'Think Tank', reliability: 'High', uaeRelevance: 'Indirect' },
  ],
  entityRegistry: {
    governmentEntities: [
      { entity: 'President Sheikh Mohamed bin Zayed Al Nahyan', type: 'Leadership', role: 'UAE President', sourceCredibility: 'Tier 0' },
      { entity: 'Sheikh Abdullah bin Zayed Al Nahyan', type: 'Leadership', role: 'UAE MOFA', sourceCredibility: 'Tier 0' },
      { entity: 'Sheikh Mohammed bin Rashid Al Maktoum', type: 'Leadership', role: 'UAE PM, Dubai Ruler', sourceCredibility: 'Tier 0' },
      { entity: 'Dr. Sultan Al Jaber', type: 'Leadership', role: 'COP28 President', sourceCredibility: 'Tier 0' },
      { entity: 'Federal Tax Authority (FTA)', type: 'Regulatory', role: 'CT Administration', sourceCredibility: 'Tier 0' },
      { entity: 'Ministry of Human Resources (MOHRE)', type: 'Regulatory', role: 'Labor Law', sourceCredibility: 'Tier 0' },
      { entity: 'Etihad Rail', type: 'Infrastructure', role: 'National Rail', sourceCredibility: 'Tier 0' },
      { entity: 'Salik', type: 'Transportation', role: 'Toll Operator', sourceCredibility: 'Tier 0' },
      { entity: 'DEWA', type: 'Utilities', role: 'Electricity/Water', sourceCredibility: 'Tier 0' },
    ],
    externalEntities: [
      { entity: 'BRICS (Brazil, Russia, India, China, South Africa, Egypt, Ethiopia, Iran, UAE, Indonesia)', type: 'bloc', role: 'Membership' },
      { entity: 'OPEC', type: 'bloc', role: 'Membership' },
      { entity: 'Arab League', type: 'bloc', role: 'Membership' },
      { entity: 'GCC', type: 'bloc', role: 'Membership' },
      { entity: 'FATF', type: 'regulator', role: 'Gray list removed 2024' },
      { entity: 'OECD', type: 'bloc', role: 'Tax framework alignment' },
      { entity: 'US', type: 'ally', role: 'Major defense partner' },
      { entity: 'Israel', type: 'normalized', role: 'Abraham Accords' },
      { entity: 'Afghanistan (Taliban)', type: 'relations', role: 'Credentialed officials' },
    ],
    corporateEntities: [
      { entity: 'New Development Bank (NDB)', type: 'BRICS Bank', role: 'Membership' },
      { entity: 'Green Climate Fund', type: 'Climate Finance', role: 'COP28 pledges' },
      { entity: 'ALTÉRRA', type: 'Climate Investment', role: 'COP28 launch' },
      { entity: 'Standard Chartered', type: 'Banking', role: 'Regional operations' },
    ],
  },
  sentimentAnalysis: {
    topicSentiment: [
      { topic: 'UAE 2024 General', overallSentiment: 'Positive', volatility: 'Low', sourceTone: 'Celebratory, achievement-focused' },
      { topic: 'UAE 2025 Policy Changes', overallSentiment: 'Neutral-Positive', volatility: 'Low', sourceTone: 'Reform-oriented' },
      { topic: 'UAE 2026 Changes', overallSentiment: 'Neutral', volatility: 'Medium', sourceTone: 'Practical, adaptative' },
      { topic: 'UAE Flood April 2024', overallSentiment: 'Negative', volatility: 'High', sourceTone: 'Crisis coverage, then recovery' },
      { topic: 'COP28 Outcomes', overallSentiment: 'Mixed', volatility: 'High', sourceTone: 'Historic yet criticized' },
      { topic: 'UAE BRICS Membership', overallSentiment: 'Positive', volatility: 'Low', sourceTone: 'Diplomatic achievement' },
      { topic: 'UAE Gaza Response', overallSentiment: 'Diplomatic', volatility: 'High', sourceTone: 'Measured, humanitarian' },
      { topic: 'We the UAE 2031', overallSentiment: 'Very Positive', volatility: 'Low', sourceTone: 'Visionary, aspirational' },
      { topic: 'UAE Corporate Tax', overallSentiment: 'Neutral', volatility: 'Low', sourceTone: 'Compliance focus' },
      { topic: 'UAE 2026 Crises', overallSentiment: 'Negative', volatility: 'Very High', sourceTone: 'Threat-focused' },
    ],
    sourceSentiment: [
      { topic: 'UAE BRICS', governmentSources: 'Positive', thinkTanks: 'Cautious', regionalMedia: 'Positive', intlMedia: 'Skeptical' },
      { topic: 'COP28', governmentSources: 'Positive', thinkTanks: 'Mixed', regionalMedia: 'Positive', intlMedia: 'Critical' },
      { topic: 'Gaza Response', governmentSources: 'Diplomatic', thinkTanks: 'Analytical', regionalMedia: 'Neutral', intlMedia: 'Varied' },
      { topic: '2026 Tensions', governmentSources: 'Resilient', thinkTanks: 'Concerned', regionalMedia: 'Patriotic', intlMedia: 'Alarming' },
    ],
  },
  uae2024: {
    majorEvents: {
      politicalDiplomatic: [
        'UAE joined BRICS (effective January 1, 2024)',
        'Became US "major defense partner" (September 23, 2024 - second country after India)',
        'Granted credentials to Taliban officials (August 21, 2024)',
        'Mass trials conducted (July 10: 43 people sentenced to life imprisonment)',
        'FATF removed UAE from "gray list" of money laundering watchlist (February 23, 2024)',
        'UAE citizens admitted to US Global Entry program (October 31, 2024)',
      ],
      economicInfrastructure: [
        'Stocks listed in UAE topped $1 trillion (November 17, 2024 - first time)',
        'UAE-Australia Comprehensive Economic Partnership Agreement (CEPA) signed (November 6, 2024)',
        'UAE-Cambodia CEPA entered force (June 26, 2024)',
        'Third project expanding Dubai Exhibition Centre to double major events from 300 to 600+ annually',
        '"Young Government Leaders Programme 2024" launched',
        'First lottery licenses granted in UAE history (July 29, 2024)',
      ],
      socialCultural: [
        'First Hindu temple (BAPS Mandir) inaugurated in Abu Dhabi (February 14, 2024)',
        'Theme: "Sustainability and Innovation: Pioneering a Greener Future"',
        'Global Media Congress held under theme "Vision, Empowerment, Interaction"',
        'Single-use plastics ban implemented',
        'Labour regulation updates',
      ],
    },
    keyLeaders: [
      { role: 'President', name: 'Mohamed bin Zayed Al Nahyan' },
      { role: 'Prime Minister', name: 'Mohammed bin Rashid Al Maktoum' },
    ],
    foreignAid: 'AED 360 billion ($98 billion) since 1971 (December 3, 2024)',
    kpis: [
      { kpi: 'BRICS Membership', value: 'Active (Jan 2024)', target: 'Strategic partnership', status: 'Achieved' },
      { kpi: 'FATF Gray List', value: 'Removed (Feb 2024)', target: 'Money laundering compliance', status: 'Achieved' },
      { kpi: 'US Defense Partner', value: 'Major Defense Partner (Sep 2024)', target: 'Strategic alliance', status: 'Achieved' },
      { kpi: 'Stock Market Cap', value: '$1 trillion', target: 'First time milestone', status: 'Achieved' },
      { kpi: 'CEPA Signings', value: '2 (Australia, Cambodia)', target: 'Trade diversification', status: 'Achieved' },
      { kpi: 'Hindu Temple', value: 'Inaugurated (Feb 2024)', target: 'Cultural inclusion', status: 'Achieved' },
      { kpi: 'Foreign Aid (Total)', value: '$98 billion since 1971', target: 'Humanitarian', status: 'Ongoing' },
    ],
  },
  uae2025: {
    majorPolicyChanges: [
      { policy: 'Ramadan Working Hours', details: 'Public sector 9 AM-2:30 PM Mon-Thu, 9 AM-12 PM Fridays; private sector 2-hour daily reduction', effectiveDate: 'March 1, 2025', sourceTier: 2 },
      { policy: 'Driving Age', details: 'Lowered to 17 years', effectiveDate: 'March 29, 2025', sourceTier: 2 },
      { policy: 'E-bike/E-scooter', details: 'New regulations', effectiveDate: 'March 29, 2025', sourceTier: 2 },
      { policy: 'Drunk Driving Fine', details: 'Up to AED 100,000 + hit-and-run', effectiveDate: 'March 29, 2025', sourceTier: 2 },
      { policy: 'Salik Peak Toll', details: 'AED 6 (9AM-5PM)', effectiveDate: 'March 2025', sourceTier: 2 },
      { policy: 'Salik Off-peak', details: 'AED 4', effectiveDate: 'March 2025', sourceTier: 2 },
      { policy: 'Salik Late Night', details: 'Free (2AM-7AM)', effectiveDate: 'March 2025', sourceTier: 2 },
      { policy: 'CT Registration Deadline', details: 'March 31 for AED 1M+ earners', effectiveDate: 'March 31, 2025', sourceTier: 2 },
      { policy: 'DEWA Billing Units', details: 'Cubic metres (from imperial gallons)', effectiveDate: 'End March 2025', sourceTier: 2 },
      { policy: 'Super 98 Fuel', details: 'AED 2.73/L', effectiveDate: 'March 1, 2025', sourceTier: 2 },
      { policy: 'Special 95 Fuel', details: 'AED 2.61/L', effectiveDate: 'March 1, 2025', sourceTier: 2 },
      { policy: 'Diesel', details: 'AED 2.77/L', effectiveDate: 'March 1, 2025', sourceTier: 2 },
      { policy: 'Etihad-SAT Launch', details: 'Synthetic aperture radar satellite with South Korea', effectiveDate: 'March 2025', sourceTier: 2 },
      { policy: 'Parking Tariff', details: 'Premium spaces AED 6/hour', effectiveDate: 'March 2025', sourceTier: 2 },
    ],
    federalBudget: {
      revenues: 'AED 71.5 billion',
      expenditures: 'AED 71.5 billion',
      financialBalance: 'Ensured',
      source: 'UAE Ministry of Finance',
      tier: 0,
    },
    kpis: [
      { kpi: 'Federal Budget', value: 'AED 71.5B', context: 'Revenues = Expenditures', status: 'Balanced' },
      { kpi: 'Tourism Revenue', value: '$70B', context: 'Record level', status: 'Growing' },
      { kpi: 'Driving Age', value: '17 years', context: 'Reduced from 18', status: 'Changed' },
      { kpi: 'Corporate Tax Deadline', value: 'March 31', context: 'AED 1M+ earners', status: 'Compliance' },
      { kpi: 'Fuel (Super 98)', value: 'AED 2.73/L', context: 'Market-based', status: 'Stable' },
      { kpi: 'Satellite Launch', value: 'Etihad-SAT', context: 'With South Korea', status: 'Achieved' },
    ],
  },
  uae2026: {
    transportInfrastructure: [
      { project: 'Etihad Rail Passenger', details: '11 cities, 57 min Abu Dhabi-Dubai, 400 passenger capacity, 36.5M ridership target by 2030', timeline: 'Launching', source: 'Tier 2' },
      { project: 'Air Taxis', details: '300km/h, 200km range, 4 passengers + pilot', timeline: 'Dubai operations expected', source: 'Tier 2' },
      { project: 'Paid Parking Expansion', details: 'International City (Feb 2026), Discovery Gardens (Jan 2026)', timeline: 'Expanding', source: 'Tier 2' },
    ],
    financialBanking: [
      'Banks phasing out "SMS OTPs" from January 6, 2026 (app-based authentication required)',
      'VAT law amendments simplifying business compliance',
      'New "tiered tax rates based on sugar content" for sugary drinks (replacing flat 50% tax)',
    ],
    environment: [
      { policy: 'Single-use plastics ban', details: 'Cups, cutlery, straws, Styrofoam, paper bags under 50 microns', effectiveDate: 'January 1, 2026' },
    ],
    religionEducation: [
      { policy: 'Friday prayers', details: 'Shifted to 12.45pm nationwide', effectiveDate: 'January 2, 2026' },
      { policy: 'School Friday end', details: '11.30am', effectiveDate: 'January 9, 2026' },
    ],
    socialLegal: [
      { policy: 'Age of maturity', details: 'Lowered from 21 to 18 years', effectiveDate: '2026' },
      { policy: 'Child digital safety law', details: 'Age verification requirements', effectiveDate: '2026' },
      { policy: 'Advertiser Permit', details: "Mu'tin Permit for content creators (free first 3 years)", effectiveDate: 'January 31, 2026' },
    ],
    specialDesignations: [
      '2026 declared "Year of Family"',
      'Unified GCC tourist visa expected',
    ],
    eInvoicing: {
      mandate: 'Mandatory by mid-2026',
      penalty: 'Approximately Dh5,000 per offence',
    },
    lookbackPeriods: 'Tax Authority powers: up to 15 years (effective January 1, 2026)',
    exciseTaxTiers: [
      { sugarContent: '< 5g per 100ml', taxStatus: 'Exempt' },
      { sugarContent: '>= 5g per 100ml', taxStatus: 'Tiered rates based on content' },
    ],
    kpis: [
      { kpi: 'Etihad Rail Cities', value: '11', target: 'Network coverage', status: 'Launching' },
      { kpi: 'Abu Dhabi-Dubai Time', value: '57 minutes', target: 'Connectivity', status: 'Improving' },
      { kpi: 'Air Taxi Speed', value: '300+ km/h', target: 'Innovation', status: 'Testing' },
      { kpi: 'SMS OTP Phase-out', value: 'January 6, 2026', target: 'Security upgrade', status: 'In progress' },
      { kpi: 'Single-use Plastics', value: 'Banned Jan 1, 2026', target: 'Environmental', status: 'Implemented' },
      { kpi: 'Age of Maturity', value: '18 years', target: 'Legal reform', status: 'Changed' },
      { kpi: 'GCC Tourist Visa', value: 'Expected 2026', target: 'Unification', status: 'Pending' },
      { kpi: 'Year of Family', value: '2026', target: 'Presidential declaration', status: 'Active' },
    ],
  },
  uaeFlood2024: {
    casualties: [
      { nationality: 'Filipino', count: 3, details: 'Confirmed deaths' },
      { nationality: 'Emirati', count: 1, details: 'Elderly man' },
      { nationality: 'Pakistani', count: 1, details: "Man in 50s, drowned after municipality tanker swept into wadi" },
    ],
    propertyDamage: [
      { metric: 'Insurance Losses', value: 'US$2.9-3.4 billion', source: 'Wikipedia (Guy Carpenter)', tier: 1 },
      { metric: 'Government Aid', value: 'AED 2 billion (US$544.6 million)', source: 'Wikipedia', tier: 1 },
    ],
    transportationImpact: [
      { metric: 'Flights Cancelled', value: '1,244 at Dubai International (2 days)', source: 'Wikipedia', tier: 1 },
      { metric: 'Flights Diverted', value: '41', source: 'Wikipedia', tier: 1 },
      { metric: 'Dubai Metro', value: 'Severely disrupted, ~200 commuters stranded', source: 'Wikipedia', tier: 1 },
      { metric: 'Major Roads Closed', value: 'E11 (Dubai-Abu Dhabi) and others', source: 'Wikipedia', tier: 1 },
    ],
    scientificAnalysis: {
      leadAuthor: 'Basit Khan (NYU Abu Dhabi)',
      researchCenter: 'Mubadala ACCESS',
      cause: 'Unusually warm Arabian Sea waters + Sudan low pressure + ITCZ',
      climateLink: 'Warmer seas increased atmospheric moisture, intensified convective storms',
      normalBehavior: 'Under normal ocean temps, most precipitation would fall over Zagros Mountains',
      source: 'NYU Abu Dhabi Research (Gulf News reporting - Tier 2)',
    },
    governmentResponse: [
      { action: 'Aid Package', details: 'For flood-damaged home repairs', value: 'AED 2 billion (US$544.6M)' },
      { action: 'Schools', details: 'Closed', value: 'Multiple days' },
      { action: 'Remote Work', details: 'Guidance issued', value: '—' },
    ],
    kpis: [
      { kpi: 'Deaths', value: '5', context: 'Multiple nationalities' },
      { kpi: 'Insurance Losses', value: '$2.9-3.4 billion', context: 'Major event' },
      { kpi: 'Rainfall Record', value: '254.8 mm/24hrs', context: '75-year high' },
      { kpi: 'Flights Cancelled', value: '1,244', context: '2-day period' },
      { kpi: 'Government Aid', value: '$544.6 million', context: 'Recovery effort' },
    ],
  },
  cop28: {
    lossAndDamageFund: [
      { metric: 'Fund Operationalized', value: 'Day 1 of conference', source: 'UNFCCC', tier: 0 },
      { metric: 'Pledged Commitments', value: '$661 million', source: 'UNFCCC', tier: 0 },
      { metric: 'Criticisms', value: 'Only $429 million pledged vs $400B annual need', source: 'Brookings', tier: 1 },
    ],
    fossilFuelLanguage: [
      { achievement: 'First-ever COP language on fossil fuels', language: '"transitioning away" in final agreement', source: 'UNFCCC' },
      { achievement: 'Call to transition', language: 'Away from fossil fuels to renewables', source: 'UNFCCC' },
      { achievement: 'Renewable Target', language: 'Triple capacity by 2030', source: 'UNFCCC' },
      { achievement: 'Energy Efficiency', language: 'Double improvement by 2030', source: 'UNFCCC' },
      { achievement: 'Coal', language: 'Phase down unabated coal power', source: 'UNFCCC' },
      { achievement: 'Fossil Fuel Subsidies', language: 'Phase out inefficient ones', source: 'UNFCCC' },
    ],
    financialCommitments: [
      { fund: 'Loss and Damage Pledges', amount: '$661 million', source: 'UNFCCC', tier: 0 },
      { fund: 'Green Climate Fund', amount: '$12.8 billion (record)', source: 'UNFCCC', tier: 0 },
      { fund: 'Climate/Health Solutions', amount: '$1 billion initial', source: 'UNFCCC', tier: 0 },
      { fund: 'Food Systems Financing', amount: '$2.6 billion', source: 'UNFCCC', tier: 0 },
      { fund: 'Methane Reduction', amount: 'Over $1 billion grant', source: 'UAE Embassy', tier: 0 },
      { fund: 'ALTÉRRA', amount: "World's largest catalytic private investor (100% climate)", source: 'UAE Embassy', tier: 0 },
      { fund: 'Total Financial Mobilization', amount: 'Over $85 billion', source: 'UAE Embassy', tier: 0 },
    ],
    adaptationStocktake: [
      { metric: 'Global Goal on Adaptation', value: 'Agreed framework', source: 'UNFCCC', tier: 0 },
      { metric: 'Adaptation Areas', value: 'Water, food, health, ecosystems, infrastructure, poverty, cultural heritage', source: 'UNFCCC', tier: 0 },
      { metric: 'First Global Stocktake', value: 'Concluded - progress too slow for 1.5°C', source: 'UNFCCC', tier: 0 },
      { metric: 'Greenhouse Gas Cut Needed', value: '43% by 2030 (vs 2019 levels)', source: 'UNFCCC', tier: 0 },
    ],
    criticisms: [
      { issue: 'US Contribution', criticism: '$17.5 million described as "paltry" (largest historical emitter)', source: 'Brookings', tier: 1 },
      { issue: 'Loss/Damage Gap', criticism: '$429M pledged vs $400B annual damages needed', source: 'Brookings', tier: 1 },
      { issue: 'Adaptation Finance', criticism: 'Decreased from 7% to 5% of total', source: 'Brookings', tier: 1 },
      { issue: 'Africa Finance', criticism: 'Only 20% of global adaptation; needs $53B annually, gets ~$13B', source: 'Brookings', tier: 1 },
      { issue: 'Adaptation Loan Type', criticism: '80% in Africa from loans/government budgets (exacerbates debt)', source: 'Brookings', tier: 1 },
      { issue: 'AI Environmental Impact', criticism: 'Omitted from agenda', source: 'Brookings', tier: 1 },
      { issue: 'Lobbyist Presence', criticism: '2,456 fossil-fuel lobbyists (out-numbered most delegations)', source: 'Brookings', tier: 1 },
      { issue: 'Bindingness', criticism: 'COP28 communique is non-binding', source: 'Brookings', tier: 1 },
    ],
    quotes: [
      { speaker: 'Dr. Sultan Al Jaber', quote: '"We have language on fossil fuel in the (COP) final agreement for the first time ever."' },
      { speaker: 'UN Climate Change Exec Secretary Simon Stiell', quote: '"Whist we didn\'t turn the page on the fossil fuel era in Dubai, this outcome is the beginning of the end."' },
      { speaker: 'HH Sheikh Mohamed bin Zayed Al Nahyan', quote: '"As COP28 concludes in the UAE, I thank all the participating delegations that worked together to achieve the historic UAE Consensus."' },
    ],
    kpis: [
      { kpi: 'Fossil Fuel Language', value: 'Historic first', target: 'COP agreement', status: 'Achieved' },
      { kpi: 'Loss/Damage Fund', value: '$661M pledged', target: 'Operational', status: 'Achieved' },
      { kpi: 'Renewable Target', value: '3x by 2030', target: 'Global goal', status: 'Set' },
      { kpi: 'Green Climate Fund', value: '$12.8B', target: 'Record pledges', status: 'Achieved' },
      { kpi: 'Coal Phase-down', value: 'Agreed', target: 'COP agreement', status: 'Achieved' },
      { kpi: 'Adaptation Framework', value: 'Agreed', target: 'Global Goal', status: 'Achieved' },
      { kpi: 'Lobbyist Attendance', value: '2,456', target: 'Fossil fuel', status: 'Controversy' },
    ],
  },
  uaeBRICS: {
    timeline: [
      { date: '2023', event: 'UAE among 22 countries applying for BRICS membership', source: 'Wikipedia', tier: 1 },
      { date: 'August 2023', event: 'Invited at Johannesburg summit', source: 'UAE MOFA', tier: 0 },
      { date: 'August 22-24, 2023', event: '15th BRICS Summit, Johannesburg', source: 'UAE MOFA', tier: 0 },
      { date: 'January 1, 2024', event: 'Official membership begins', source: 'UAE MOFA', tier: 0 },
      { date: '2024', event: 'UAE attended 16th BRICS summit in Kazan, Russia as official member', source: 'Wikipedia', tier: 1 },
    ],
    expansion2024: [
      { country: 'Brazil', joinDate: 'Founding', tier: 1 },
      { country: 'Russia', joinDate: 'Founding', tier: 1 },
      { country: 'India', joinDate: 'Founding', tier: 1 },
      { country: 'China', joinDate: 'Founding', tier: 1 },
      { country: 'South Africa', joinDate: '2010', tier: 1 },
      { country: 'Egypt', joinDate: 'January 2024', tier: 1 },
      { country: 'Ethiopia', joinDate: 'January 2024', tier: 1 },
      { country: 'Iran', joinDate: 'January 2024', tier: 1 },
      { country: 'UAE', joinDate: 'January 2024', tier: 0 },
      { country: 'Indonesia', joinDate: 'January 2024', tier: 1 },
    ],
    uaeEconomicProfile: [
      { metric: 'GDP per Capita (PPP)', value: '$81,676', rank: 'Highest', source: 'Wikipedia' },
      { metric: 'Population', value: '11,027,129', rank: '4th largest', source: 'Wikipedia' },
      { metric: 'HDI', value: '0.940', rank: 'Highest', source: 'Wikipedia' },
      { metric: 'Capital', value: 'Abu Dhabi', source: 'Wikipedia' },
      { metric: 'Area', value: '83,600 km²', source: 'Wikipedia' },
      { metric: 'Population Density', value: '132/km²', source: 'Wikipedia' },
      { metric: 'Currency', value: 'UAE Dirham (AED)', source: 'Wikipedia' },
      { metric: 'GDP (Nominal)', value: '26th globally', source: 'Wikipedia' },
      { metric: 'GDP (PPP)', value: '38th globally', source: 'Wikipedia' },
    ],
    strategicImplications: [
      { dimension: 'China Trade (2022)', analysis: '$64 billion bilateral', source: 'Stimson' },
      { dimension: 'India Trade (2022)', analysis: '$84.5 billion bilateral', source: 'Stimson' },
      { dimension: 'Russia GDP', analysis: '8th largest (potential market)', source: 'Stimson' },
      { dimension: 'Brazil GDP', analysis: '11th largest (potential market)', source: 'Stimson' },
      { dimension: 'Argentina GDP', analysis: '22nd largest (potential market)', source: 'Stimson' },
      { dimension: 'De-dollarization', analysis: 'UAE-India agreement for local currency trade', source: 'Stimson' },
      { dimension: 'New Development Bank', analysis: 'UAE joined October 2021', source: 'UAE MOFA' },
    ],
    officialStatements: [
      { official: 'Sheikh Abdullah bin Zayed Al Nahyan', quote: 'BRICS reflects partnership approach; UAE commitment to multilateralism', source: 'UAE MOFA' },
      { official: 'Sheikh Shakhboot bin Nahyan Al Nahyan', quote: 'Appreciation for confidence; focus on sustainable development cooperation', source: 'UAE MOFA' },
      { official: 'Ahmed Al Sayegh', quote: 'UAE as global trade hub; foreign policy focused on long-term economic prosperity', source: 'UAE MOFA' },
      { official: 'Reem Al Hashimy', quote: 'BRICS promotes global peace, stability, prosperity; commitment to multilateral partnerships', source: 'UAE MOFA' },
    ],
    usResponse: 'White House View: Does not view BRICS "as evolving into some kind of geopolitical rival"',
    challenges: [
      { challenge: 'Diverse membership with varying economic, political, strategic interests', source: 'Stimson' },
      { challenge: 'Former adversaries (Iran and Saudi Arabia) in same bloc', source: 'Stimson' },
      { challenge: 'Coalition lacks treaty-based framework', source: 'Stimson' },
      { challenge: 'Regional conflicts could hinder governance', source: 'Stimson' },
    ],
    kpis: [
      { kpi: 'Membership Date', value: 'January 1, 2024', context: 'Official' },
      { kpi: 'GDP per Capita', value: '$81,676', context: 'Highest in bloc' },
      { kpi: 'HDI', value: '0.940', context: 'Highest in bloc' },
      { kpi: 'China Trade', value: '$64B (2022)', context: 'Largest partner' },
      { kpi: 'India Trade', value: '$84.5B (2022)', context: 'Largest partner' },
      { kpi: 'NDB Membership', value: 'October 2021', context: 'Pre-dates BRICS' },
      { kpi: 'Expansion Significance', value: 'Most significant since South Africa 2010', context: 'Bloc impact' },
    ],
  },
  uaeGaza: {
    humanitarianEngagement: [
      { metric: 'Aid Shipments', value: '8 ships', source: 'UAE MOFA', tier: 0 },
      { metric: 'Aid Trucks', value: '1,271 trucks', source: 'UAE MOFA', tier: 0 },
      { metric: 'Aid Flights', value: '337 flights', source: 'UAE MOFA', tier: 0 },
      { metric: 'Total Aid (10 months)', value: '39,756 tonnes', source: 'UAE MOFA', tier: 0 },
    ],
    kpis: [
      { kpi: 'Diplomatic Actions', value: 'Intensive efforts', context: 'Ongoing' },
      { kpi: 'Aid Shipments', value: '8 ships', context: '10 months' },
      { kpi: 'Aid Trucks', value: '1,271', context: '10 months' },
      { kpi: 'Aid Flights', value: '337', context: '10 months' },
      { kpi: 'Total Aid', value: '39,756 tonnes', context: '10 months' },
      { kpi: 'Bilateral Trade', value: '$3.2B', context: 'Abraham Accords' },
      { kpi: 'Trade Growth', value: '+11%', context: 'YoY 2024' },
      { kpi: 'CEPA Target', value: '$10B by 2030', context: 'Non-oil' },
    ],
  },
  weTheUAE2031: {
    fourPillars: [
      { pillar: 'Forward Society', focus: 'Enhancing citizens\' capabilities', source: 'UAE Government' },
      { pillar: 'Forward Economy', focus: 'Human capital as main development driver', source: 'UAE Government' },
      { pillar: 'Forward Diplomacy', focus: 'Pivotal role based on human values', source: 'UAE Government' },
      { pillar: 'Forward Ecosystem', focus: 'Government performance and digital infrastructure', source: 'UAE Government' },
    ],
    forwardSocietyPrinciples: [
      { principle: 'National Identity', description: 'Integrated social system; protects cultural heritage; instills values', source: 'UAE Government' },
      { principle: 'Inclusive Society', description: 'Cohesive; cultivates harmony, tolerance, generosity', source: 'UAE Government' },
      { principle: 'Education', description: 'Produces pioneering, knowledgeable, skilled minds', source: 'UAE Government' },
      { principle: 'Healthcare', description: 'Advanced, integrated, accessible; enhances quality of life', source: 'UAE Government' },
    ],
    keyTargets: [
      { indicator: 'GDP', baseline: 'AED 1.49 trillion', target: 'AED 3 trillion (double)', source: 'UAE Government', tier: 0 },
      { indicator: 'Non-oil exports', baseline: '—', target: 'AED 800 billion', source: 'UAE Government', tier: 0 },
      { indicator: 'Tourism contribution', baseline: '—', target: 'AED 450 billion to GDP', source: 'UAE Government', tier: 0 },
      { indicator: 'Foreign trade', baseline: '—', target: 'AED 4 trillion', source: 'UAE Government', tier: 0 },
      { indicator: 'Human Development Index', baseline: '—', target: 'Top 10 globally', source: 'UAE Government', tier: 0 },
      { indicator: 'Healthcare quality', baseline: '—', target: 'Top 10 globally', source: 'UAE Government', tier: 0 },
      { indicator: 'Global Talent Attraction', baseline: '—', target: 'Top 10 globally', source: 'UAE Government', tier: 0 },
      { indicator: 'Safety Index', baseline: '—', target: '1st globally', source: 'UAE Government', tier: 0 },
      { indicator: 'Global Food Security Index', baseline: '—', target: 'Top 10 globally', source: 'UAE Government', tier: 0 },
      { indicator: 'Global Cybersecurity Index', baseline: '—', target: 'Top 3 globally', source: 'UAE Government', tier: 0 },
      { indicator: 'Quality of Life', baseline: '—', target: 'Emirati cities among best 10 globally', source: 'UAE Government', tier: 0 },
      { indicator: 'Proactive Legislation', baseline: '—', target: '1st globally for new sectors', source: 'UAE Government', tier: 0 },
    ],
    kpis: [
      { kpi: 'GDP', baseline: 'AED 1.49T', target: 'AED 3T', growth: '+101%' },
      { kpi: 'Non-oil exports', baseline: '—', target: 'AED 800B', growth: '—' },
      { kpi: 'Tourism', baseline: '—', target: 'AED 450B', growth: '—' },
      { kpi: 'Foreign trade', baseline: '—', target: 'AED 4T', growth: '—' },
      { kpi: 'HDI Rank', baseline: '—', target: 'Top 10', growth: '—' },
      { kpi: 'Safety Rank', baseline: '—', target: '1st', growth: '—' },
      { kpi: 'Cybersecurity', baseline: '—', target: 'Top 3', growth: '—' },
    ],
  },
  uaeNationalDay: {
    historicalContext: [
      { event: 'UAE Formation', date: 'December 2, 1971', details: 'Independence declared' },
      { event: 'Ras Al Khaimah', date: 'February 10, 1972', details: 'Joined federation later' },
      { event: 'Trucial States', date: '1820, 1853, 1896', details: 'British protectorate origins' },
      { event: 'British Withdrawal', date: '1968', details: 'Announced withdrawal east of Suez' },
      { event: 'Iranian Occupation', date: 'December 1971', details: 'Abu Musa and Tunb islands' },
      { event: 'Martyrs\' Day', date: 'November 30', details: 'Combined with National Day holiday' },
    ],
    namingEvolution: 'Previously: "National Day" | Now: "Eid Al Etihad" (Union Day) - emphasis on national unity',
    events2025: [
      { venue: 'Etihad Museum', activities: 'Cultural programmes, heritage activities' },
      { venue: 'Al Shindagha Museum', activities: 'Cultural programmes, heritage activities' },
      { venue: 'All seven emirates', activities: 'Events across emirates' },
      { venue: 'Dubai', activities: 'Fireworks, parades, concerts, cultural shows' },
    ],
    kpis: [
      { kpi: 'Founding Date', value: 'December 2, 1971', context: '54+ years' },
      { kpi: '2025 Holiday', value: 'December 1-2', context: 'Combined with Martyrs\' Day' },
      { kpi: 'Break Duration', value: '4 days', context: 'Nov 29-Dec 2' },
      { kpi: 'Theme 2025', value: '"United"', context: '—' },
    ],
  },
  uaeCorporateTax: {
    taxRates: [
      { incomeLevel: 'Up to AED 375,000', rate: '0%', source: 'KPMG/DHAC' },
      { incomeLevel: 'Above AED 375,000', rate: '9%', source: 'KPMG/DHAC' },
      { incomeLevel: 'Free zone qualifying activities', rate: '0%', source: 'KPMG/DHAC' },
      { incomeLevel: 'DMTT (MNEs >EUR 750M revenue)', rate: '15%', source: 'PwC' },
    ],
    keyFeatures: [
      { feature: 'Scope', details: 'All UAE companies except free zones with qualifying activities', source: 'KPMG' },
      { feature: 'Small Business Relief', details: 'Revenue up to AED 3 million', source: 'DHAC' },
      { feature: 'Filing Deadline', details: '9 months post financial year', source: 'KPMG' },
      { feature: 'Lookback Period', details: 'Up to 15 years (effective Jan 1, 2026)', source: 'Gulf News' },
    ],
    deductibleExpenses: [
      { category: 'Employee salaries', details: 'Fully deductible', source: 'DHAC' },
      { category: 'Rent', details: 'Fully deductible', source: 'DHAC' },
      { category: 'Utilities', details: 'Fully deductible', source: 'DHAC' },
      { category: 'Professional fees', details: 'Fully deductible', source: 'DHAC' },
      { category: 'Entertainment', details: '50% limit', source: 'DHAC' },
      { category: 'Interest', details: '30% limit of adjusted EBITDA (de minimis: AED 12M)', source: 'DHAC' },
    ],
    nonDeductible: [
      { category: 'Fines, penalties, bribes', source: 'DHAC' },
      { category: 'Dividends and distributions', source: 'DHAC' },
      { category: 'Corporate tax itself', source: 'DHAC' },
      { category: 'Personal expenses', source: 'DHAC' },
    ],
    lossCarryforward: [
      { rule: 'Duration', details: 'Indefinite' },
      { rule: 'Annual Cap', details: '75% of taxable income' },
    ],
    freeZoneRequirements: [
      { requirement: 'Qualifying Activities', details: 'Manufacturing, processing, holding shares/securities, ship ownership, reinsurance, fund management, wealth/investment management, HQ services, treasury/financing to related parties, aircraft financing/leasing, logistics, designated zone distribution' },
      { requirement: 'Substance Requirement', details: 'Must conduct core income-generating activities in Free Zone' },
      { requirement: 'De minimis', details: 'Max 5% non-qualifying income or AED 5 million' },
    ],
    kpis: [
      { kpi: 'Standard Rate', value: '9%', context: 'Lowest in GCC' },
      { kpi: 'Zero Rate Threshold', value: 'AED 375,000', context: 'Annual taxable income' },
      { kpi: 'Small Business Relief', value: 'AED 3M revenue', context: 'Qualifying threshold' },
      { kpi: 'DMTT Rate', value: '15%', context: 'For large MNEs' },
      { kpi: 'Registration Penalty', value: 'AED 10,000', context: 'Late registration' },
      { kpi: 'Lookback', value: 'Up to 15 years', context: 'From Jan 1, 2026' },
      { kpi: 'Filing Deadline', value: '9 months', context: 'Post financial year' },
      { kpi: 'Record Keeping', value: '7 years', context: 'Required' },
    ],
  },
  uae2026Crises: {
    march2026Tensions: {
      attackStatistics: [
        { metric: 'Ballistic Missiles', value: 'Over 250', source: 'Fox News', tier: 3 },
        { metric: 'Drones', value: 'Over 1,400', source: 'Fox News', tier: 3 },
        { metric: 'Cruise Missiles', value: '8', source: 'Fox News', tier: 3 },
        { metric: 'Interception Rate', value: 'Over 90%', source: 'Fox News', tier: 3 },
        { metric: 'Threat Duration', value: 'By March 10, 2026', source: 'Fox News', tier: 3 },
      ],
      defenseSystems: [
        { system: 'THAAD', origin: 'US', source: 'Fox News' },
        { system: 'Patriot', origin: 'US', source: 'Fox News' },
        { system: 'Cheongung II', origin: 'South Korea', source: 'Fox News' },
        { system: 'Barak-8', origin: 'Israel', source: 'Fox News' },
      ],
      uaeResponse: [
        { action: 'Interception', details: 'Over 90% of incoming threats', source: 'Fox News' },
        { action: 'Services', details: 'Cafes open, airports running', source: 'Wikipedia' },
        { action: 'Projected Resilience', details: 'Despite regional challenges', source: 'Wikipedia' },
        { action: 'Standard Chartered', details: 'Responded to viral evacuation rumours', source: 'Reuters' },
        { action: 'Economist Warning', details: 'Jeffrey Sachs warned of "fatal consequences"', source: 'Wikipedia' },
      ],
    },
    resilienceIndicators: [
      { indicator: 'Nationalities', value: 'Over 200 nationalities in UAE', source: 'Fox News' },
      { indicator: 'Defense Capability', value: 'Multi-layered air defense', source: 'Fox News' },
      { indicator: 'Economic Stability', value: 'Projected despite tensions', source: 'Wikipedia' },
    ],
    kpis: [
      { kpi: 'Ballistic Missiles Intercepted', value: 'Over 90%', context: 'Operation Epic Fury' },
      { kpi: 'Ballistic Missiles Faced', value: '250+', context: 'March 2026' },
      { kpi: 'Drones Faced', value: '1,400+', context: 'March 2026' },
      { kpi: 'Cruise Missiles', value: '8', context: 'March 2026' },
      { kpi: 'Nationalities', value: '200+', context: 'Diverse population' },
      { kpi: 'Trump-UAE Deal', value: '$500M', context: 'February 2026' },
    ],
  },
  summary: {
    periodThemes: [
      { period: '2024', primaryThemes: 'BRICS accession, Flood crisis, COP28 hosting', sentiment: 'Mixed (Achievement + Crisis)' },
      { period: '2025', primaryThemes: 'Policy reform, Economic growth, Regional diplomacy', sentiment: 'Positive' },
      { period: '2026', primaryThemes: 'Legal reform, Infrastructure, Security challenges', sentiment: 'Diplomatic/Resilient' },
    ],
    criticalTopics: [
      { topic: 'UAE BRICS Membership', relevance: 'Critical', dataDensity: 'High' },
      { topic: 'COP28 Outcomes', relevance: 'Critical', dataDensity: 'Very High' },
      { topic: 'UAE Gaza Response', relevance: 'Critical', dataDensity: 'High' },
      { topic: 'We the UAE 2031', relevance: 'Critical', dataDensity: 'Very High' },
      { topic: 'Corporate Tax', relevance: 'Critical', dataDensity: 'Very High' },
      { topic: 'UAE 2026 Tensions', relevance: 'Critical', dataDensity: 'Medium' },
      { topic: 'UAE Flood 2024', relevance: 'High', dataDensity: 'High' },
      { topic: 'National Day', relevance: 'Medium', dataDensity: 'Medium' },
    ],
  },
}

// ============================================================================
// ERA 9: EVENT-SPECIFIC HISTORICAL DEEP DIVES (MD 8-9)
// Complete data from 19 major UAE historical events
// ============================================================================

export interface EventEntity {
  entity: string
  role: string
  type: 'Person' | 'Place' | 'Organization' | 'Nation' | 'Tribe' | 'Media' | 'Fund' | 'Operation' | 'Agreement' | 'Facility' | 'App' | 'Vaccine' | 'Company' | 'Firm' | 'Subsidiary' | 'AI Model'
}

export interface EventSentiment {
  topic: string
  sentiment: string
  valence: number
  source: string
}

export interface HistoricalEventDetail {
  id: string
  eventNumber: number
  title: string
  period: { start: string; end: string }
  source: string
  overview: string
  keyFacts: string[]
  timeline?: Array<{ date: string; event: string; description?: string }>
  entities: EventEntity[]
  sentiment: EventSentiment[]
  uaeRelevance: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
}

export interface EventHistoricalDataset {
  events: HistoricalEventDetail[]
  summary: {
    totalEvents: number
    entityCount: number
    sourceCount: number
    dataPointsCount: number
    lastUpdated: string
  }
}

export const eventHistoricalData: EventHistoricalDataset = {
  events: [
    // EVENT 1: FORMATION OF UAE (1971)
    {
      id: 'event-1',
      eventNumber: 1,
      title: 'Formation of UAE',
      period: { start: '1968', end: '1972' },
      source: 'Wikipedia - Foundation of the United Arab Emirates',
      overview: 'The formation of the United Arab Emirates on December 2, 1971, unified seven emirates under a federal structure led by Sheikh Zayed bin Sultan Al Nahyan as first President.',
      keyFacts: [
        'January 1968: Britain announced withdrawal from east of Suez',
        'February 18, 1968: Sheikh Zayed and Sheikh Rashid met at Argoub Al Sedirah, agreed on union principle',
        'October 1969: Sheikh Zayed elected president, Sheikh Rashid as vice president',
        'December 2, 1971: UAE formally proclaimed at Union House, Jumeirah',
        'February 10, 1972: Ras Al Khaimah acceded to the UAE',
        'Jordan first to recognize UAE on December 2, 1971',
        'UN membership achieved December 9, 1971',
      ],
      timeline: [
        { date: 'January 1968', event: 'British Withdrawal Announced' },
        { date: 'February 18, 1968', event: 'Zayed-Rashid Desert Meeting' },
        { date: 'October 1969', event: 'Sheikh Zayed elected president' },
        { date: 'December 2, 1971', event: 'UAE formally proclaimed' },
        { date: 'February 10, 1972', event: 'Ras Al Khaimah joined federation' },
      ],
      entities: [
        { entity: 'Sheikh Zayed bin Sultan Al Nahyan', role: 'First President', type: 'Person' },
        { entity: 'Sheikh Rashid bin Saeed Al Maktoum', role: 'Vice President and Prime Minister', type: 'Person' },
        { entity: 'Union House, Jumeirah', role: 'Location of UAE proclamation', type: 'Place' },
        { entity: 'Trucial States Council', role: 'Pre-federation body', type: 'Organization' },
      ],
      sentiment: [
        { topic: 'British withdrawal', sentiment: 'Negative', valence: -0.6, source: 'Historical context' },
        { topic: 'Union formation', sentiment: 'Strongly Positive', valence: 0.9, source: 'National narrative' },
        { topic: 'Qatar/Bahrain departure', sentiment: 'Negative', valence: -0.4, source: 'Historical challenge' },
      ],
      uaeRelevance: 'CRITICAL',
    },

    // EVENT 2: BURAIMI DISPUTE
    {
      id: 'event-2',
      eventNumber: 2,
      title: 'Buraimi Dispute',
      period: { start: '1949', end: '1974' },
      source: 'Grokipedia, State Department Historical Documents',
      overview: 'Territorial conflict over Buraimi Oasis between Saudi Arabia and Trucial States/Abu Dhabi. 80 Saudi guards occupied Hamasa in 1952. Resolved by 1974 Treaty of Jeddah.',
      keyFacts: [
        '1949: Saudi Arabia made territorial claims over parts of Abu Dhabi territory',
        'January 1952: Armed conflict began when Saudi guards occupied Hamasa village',
        'August 31, 1952: 80 Saudi guards led by Turki bin Abdullah Al Otaishan occupied Hamasa',
        'October 25, 1955: British forces under Trucial Oman Scouts took the oasis',
        '1974: Treaty of Jeddah settled border demarcation',
      ],
      timeline: [
        { date: '1949', event: 'Saudi territorial claims over Buraimi Oasis' },
        { date: 'January 1952', event: 'Saudi guards occupied Hamasa village' },
        { date: 'October 25, 1955', event: 'Trucial Oman Scouts took the oasis' },
        { date: '1974', event: 'Treaty of Jeddah settled border' },
      ],
      entities: [
        { entity: 'Turki bin Abdullah Al Otaishan', role: 'Saudi guard leader', type: 'Person' },
        { entity: 'Buraimi Oasis', role: 'Contested territory', type: 'Place' },
        { entity: 'Trucial Oman Scouts', role: 'British military force', type: 'Organization' },
      ],
      sentiment: [
        { topic: 'Saudi occupation', sentiment: 'Negative', valence: -0.7, source: 'UAE perspective' },
        { topic: 'British/Trucial Scouts response', sentiment: 'Positive', valence: 0.6, source: 'UAE perspective' },
      ],
      uaeRelevance: 'HIGH',
    },

    // EVENT 3: DISCOVERY OF OIL IN ABU DHABI
    {
      id: 'event-3',
      eventNumber: 3,
      title: 'Discovery of Oil in Abu Dhabi',
      period: { start: '1958', end: '1971' },
      source: 'GeoExpro, The National',
      overview: 'The discovery of oil in commercial quantities in 1958 transformed Abu Dhabi from a small fishing village to a wealthy emirate, laying the foundation for the UAE economic prosperity.',
      keyFacts: [
        'March 28, 1958: ADMA Enterprise offshore exploration platform arrived from Germany',
        '1958: Drilling began on Umm Shaif field at about 8,755 ft depth',
        '1958: ADMA discovered Umm Shaif field - 300 km super-giant field',
        '1962: Umm Shaif came on stream',
        '1971: ADNOC created',
        'Abu Dhabi holds sixth largest proven oil reserves globally',
      ],
      entities: [
        { entity: 'Peter Cox', role: 'Geologist', type: 'Person' },
        { entity: 'ADMA Enterprise', role: 'Exploration company', type: 'Organization' },
        { entity: 'Umm Shaif field', role: 'Oil field', type: 'Place' },
        { entity: 'ADNOC', role: 'National oil company', type: 'Organization' },
      ],
      sentiment: [
        { topic: 'Oil discovery', sentiment: 'Strongly Positive', valence: 0.9, source: 'Transformative' },
        { topic: 'Economic transformation', sentiment: 'Strongly Positive', valence: 0.9, source: 'National prosperity' },
      ],
      uaeRelevance: 'CRITICAL',
    },

    // EVENT 4: IRANIAN ISLAND SEIZURE
    {
      id: 'event-4',
      eventNumber: 4,
      title: 'Iranian Island Seizure',
      period: { start: '1971', end: 'Present' },
      source: 'UAE Embassy, CIA Documents',
      overview: 'Iranian forces occupied Abu Musa, Greater Tunb, and Lesser Tunb on November 30, 1971 - just two days before the UAE formal establishment. The UAE has consistently sought resolution through negotiations, arbitration, or ICJ adjudication.',
      keyFacts: [
        'November 30, 1971: Iran occupied Abu Musa, Greater Tunb, and Lesser Tunb',
        'Three police were killed during the seizure',
        'UAE immediately protested Iranian illegal occupation',
        'December 9, 1971: UAE brought matter to UN Security Council',
        'For 50 years, UAE consistently sought resolution through negotiations, arbitration, ICJ',
        'Iran rejected all three options and refuses to discuss sovereignty',
      ],
      timeline: [
        { date: 'November 30, 1971', event: 'Iran occupied Abu Musa and Tunb islands' },
        { date: 'December 9, 1971', event: 'UAE brought matter to UN Security Council' },
      ],
      entities: [
        { entity: 'Abu Musa', role: 'Occupied island', type: 'Place' },
        { entity: 'Greater Tunb', role: 'Occupied island', type: 'Place' },
        { entity: 'Iran', role: 'Occupying power', type: 'Nation' },
        { entity: 'UN Security Council', role: 'Mediating body', type: 'Organization' },
      ],
      sentiment: [
        { topic: 'Iranian occupation', sentiment: 'Strongly Negative', valence: -0.9, source: 'UAE/allies' },
        { topic: 'UAE diplomatic efforts', sentiment: 'Positive', valence: 0.6, source: 'Resolution attempt' },
      ],
      uaeRelevance: 'CRITICAL',
    },

    // EVENT 5: DUBAI DEBT CRISIS
    {
      id: 'event-5',
      eventNumber: 5,
      title: 'Dubai Debt Crisis',
      period: { start: '2009', end: '2010' },
      source: 'Euromoney, IMF Reports',
      overview: 'In late 2009, Dubai faced a major financial crisis when Dubai World requested restructuring of $26 billion in debts.',
      keyFacts: [
        'November 25, 2009: Dubai World requested restructuring of $26 billion in debts',
        'Total liabilities nearly $60 billion',
        'December 14, 2009: Abu Dhabi injected $10 billion into Dubai Financial Support Fund',
        'Nakheel sukuk of AED 15.50 billion issued by Dubai World',
        'UK banks had biggest exposure at more than $5 billion',
      ],
      timeline: [
        { date: 'November 25, 2009', event: 'Dubai World requested debt restructuring' },
        { date: 'December 14, 2009', event: 'Abu Dhabi injected $10 billion bailout' },
      ],
      entities: [
        { entity: 'Dubai World', role: 'Indebted investment company', type: 'Organization' },
        { entity: 'Nakheel', role: 'Palm Island developer', type: 'Subsidiary' },
        { entity: 'Abu Dhabi', role: 'Bailout provider', type: 'Nation' },
      ],
      sentiment: [
        { topic: 'Debt restructuring need', sentiment: 'Negative', valence: -0.6, source: 'Crisis indicator' },
        { topic: 'Abu Dhabi bailout', sentiment: 'Positive', valence: 0.5, source: 'Relief' },
      ],
      uaeRelevance: 'HIGH',
    },

    // EVENT 6: ARAB SPRING UAE RESPONSE
    {
      id: 'event-6',
      eventNumber: 6,
      title: 'Arab Spring UAE Response',
      period: { start: '2011', end: '2011' },
      source: 'Wikipedia, Carnegie Endowment',
      overview: 'Unlike Tunisia, Egypt, Libya, Bahrain, and Syria, the UAE did not experience regime change or major upheaval during the Arab Spring. The UAE responded through GCC intervention in Bahrain.',
      keyFacts: [
        'UAE did not experience regime change unlike Tunisia, Egypt, Libya, Bahrain, Syria',
        'UAE participated in GCC interventions in neighboring Bahrain',
        'Oil wealth and hereditary leadership structures provided stability',
        'UAE positioned as stable business hub during regional turmoil',
      ],
      timeline: [
        { date: '2011', event: 'UAE participated in GCC intervention in Bahrain' },
      ],
      entities: [
        { entity: 'GCC', role: 'Security alliance', type: 'Organization' },
        { entity: 'Bahrain', role: 'GCC intervention target', type: 'Nation' },
      ],
      sentiment: [
        { topic: 'UAE stability maintained', sentiment: 'Positive', valence: 0.7, source: 'Government' },
        { topic: 'Business hub positioning', sentiment: 'Positive', valence: 0.6, source: 'Economic' },
      ],
      uaeRelevance: 'HIGH',
    },

    // EVENT 7: UAE94 TRIAL
    {
      id: 'event-7',
      eventNumber: 7,
      title: 'UAE94 Trial',
      period: { start: '2012', end: 'Present' },
      source: 'Amnesty International, Human Rights Watch',
      overview: 'In July 2013, a mass trial concluded with 69 men convicted for allegedly plotting to overthrow the UAE government. The trial faced widespread criticism for fair trial violations.',
      keyFacts: [
        'July 2013: Mass trial concluded with 69 men convicted',
        'Sentences ranged up to 15 years in prison',
        'Currently 60 men remain imprisoned from this case',
        'Widespread criticism for multiple fair trial violations',
        'Incommunicado detention: defendants held for up to a year without contact',
        'Torture allegations: several stating they were tortured to confess',
        'UN Working Group found all defendants arbitrarily detained',
      ],
      timeline: [
        { date: '2012', event: 'Mass arrests of 94 dissidents' },
        { date: 'July 2013', event: 'Verdict - 69 men convicted' },
      ],
      entities: [
        { entity: 'Mohamed al-Roken', role: 'Human rights lawyer, defendant', type: 'Person' },
        { entity: 'Federal Supreme Court', role: 'Trial venue', type: 'Place' },
        { entity: 'UN Working Group on Arbitrary Detention', role: 'UN body', type: 'Organization' },
      ],
      sentiment: [
        { topic: 'Mass trial format', sentiment: 'Negative', valence: -0.8, source: 'Human rights orgs' },
        { topic: 'Torture allegations', sentiment: 'Strongly Negative', valence: -0.9, source: 'HRW/Amnesty' },
      ],
      uaeRelevance: 'HIGH',
    },

    // EVENT 8: YEMEN INTERVENTION
    {
      id: 'event-8',
      eventNumber: 8,
      title: 'Yemen Intervention',
      period: { start: '2015', end: '2019' },
      source: 'POMEPS',
      overview: 'UAE entered Yemen as core member of Gulf coalition in March 2015, backing southern militias. By 2016, UAE had retaken key ports including Aden and Mukalla.',
      keyFacts: [
        'March 2015: UAE entered Yemen as core member of Gulf coalition',
        'By 2016: UAE retook key ports including Aden and Mukalla',
        'Built forward bases including airbase at Assab in Eritrea',
        'June 2016: UAE declared War is Over for Emirati troops',
        '2019: UAE withdrew forces following disagreements with Saudi approach',
      ],
      timeline: [
        { date: 'March 26, 2015', event: 'UAE and Saudi Arabia launch Operation Decisive Storm' },
        { date: 'June 2016', event: 'Bin Zayed declared War is Over for Emirati troops' },
      ],
      entities: [
        { entity: 'President Hadi', role: 'Yemen government leader', type: 'Person' },
        { entity: 'Southern Transitional Council', role: 'UAE-backed separatists', type: 'Organization' },
        { entity: 'Assab airbase', role: 'Forward base in Eritrea', type: 'Facility' },
      ],
      sentiment: [
        { topic: 'Military intervention', sentiment: 'Neutral', valence: 0, source: 'Mixed' },
        { topic: 'Port recapture success', sentiment: 'Positive', valence: 0.6, source: 'Strategic' },
      ],
      uaeRelevance: 'HIGH',
    },

    // EVENT 9: QATAR DIPLOMATIC CRISIS
    {
      id: 'event-9',
      eventNumber: 9,
      title: 'Qatar Diplomatic Crisis',
      period: { start: '2017', end: '2021' },
      source: 'Wikipedia, Government Communications Office',
      overview: 'On June 5, 2017, Saudi Arabia, UAE, Bahrain, Egypt, and other nations severed diplomatic relations with Qatar and imposed a blockade. The crisis lasted until January 5, 2021.',
      keyFacts: [
        'June 5, 2017: Saudi Arabia, UAE, Bahrain, Egypt severed diplomatic relations',
        'Blockaders blocked Qatar airspace and sea routes',
        '13 demands issued including cut ties with Iran, shut down Al Jazeera',
        'January 5, 2021: Al-Ula Agreement signed - Gulf reconciliation',
      ],
      timeline: [
        { date: 'June 5, 2017', event: 'Saudi-led bloc severed diplomatic relations with Qatar' },
        { date: 'January 5, 2021', event: 'Al-Ula Agreement - Gulf reconciliation signed' },
      ],
      entities: [
        { entity: 'Al Jazeera', role: 'Qatar media network', type: 'Media' },
        { entity: 'GCC', role: 'Regional bloc', type: 'Organization' },
        { entity: 'Al-Ula Agreement', role: 'Reconciliation agreement', type: 'Agreement' },
      ],
      sentiment: [
        { topic: 'Blockade imposition', sentiment: 'Negative', valence: -0.6, source: 'Regional tension' },
        { topic: 'Reconciliation', sentiment: 'Positive', valence: 0.7, source: 'Resolution' },
      ],
      uaeRelevance: 'HIGH',
    },

    // EVENT 10: ABRAHAM ACCORDS
    {
      id: 'event-10',
      eventNumber: 10,
      title: 'Abraham Accords',
      period: { start: '2020', end: 'Present' },
      source: 'Wikipedia, US Department of State, UAE Embassy',
      overview: 'The Abraham Accords established diplomatic normalization between Israel and several Arab states, signed September 15, 2020. UAE and Bahrain were first Arab countries to recognize Israel since 1994.',
      keyFacts: [
        'August 13, 2020: UAE-Israel normalization announced',
        'September 15, 2020: White House signing ceremony for UAE, Israel, Bahrain',
        'First Arab countries to formally recognize Israel since 1994',
        'UAE deal brokered in exchange for Israeli suspension of West Bank annexation plans',
        'Abraham Fund: $3 billion target to boost trade',
      ],
      timeline: [
        { date: 'August 13, 2020', event: 'UAE-Israel normalization announced' },
        { date: 'September 15, 2020', event: 'White House signing ceremony' },
      ],
      entities: [
        { entity: 'Sheikh Mohammed bin Zayed Al Nahyan', role: 'UAE President', type: 'Person' },
        { entity: 'Donald Trump', role: 'US President/Mediator', type: 'Person' },
        { entity: 'Abraham Fund', role: '$3B trade fund', type: 'Fund' },
      ],
      sentiment: [
        { topic: 'Normalization with Israel', sentiment: 'Mixed', valence: 0.3, source: 'Divided' },
        { topic: 'Economic cooperation', sentiment: 'Positive', valence: 0.6, source: 'Business' },
      ],
      uaeRelevance: 'HIGH',
    },

    // EVENT 11: COVID-19 IN UAE
    {
      id: 'event-11',
      eventNumber: 11,
      title: 'COVID-19 in UAE',
      period: { start: '2020', end: '2023' },
      source: 'Wikipedia, PMC/NIH, UAE Government Portals',
      overview: 'UAE was first Middle Eastern country to report COVID-19 on January 29, 2020. The pandemic response included comprehensive measures, high vaccination rates, and field hospitals.',
      keyFacts: [
        'First confirmed case: January 29, 2020 - first Middle Eastern country to report',
        'Total confirmed cases: 1,067,030 (as of May 24, 2023)',
        'Deaths: 2,349 (fatality rate: 0.22%)',
        'Vaccines administered: 24,922,054 doses',
        'Sinopharm BIBP vaccine began December 2020',
        'Field hospital at Dubai World Trade Centre: 300-3,000 beds capacity',
      ],
      timeline: [
        { date: 'January 29, 2020', event: 'First confirmed COVID-19 case' },
        { date: 'December 2020', event: 'Vaccination campaign began' },
      ],
      entities: [
        { entity: 'NCEMA', role: 'Crisis management body', type: 'Organization' },
        { entity: 'Sinopharm BIBP', role: 'Chinese vaccine', type: 'Vaccine' },
        { entity: 'ALHOSN UAE', role: 'Contact tracing app', type: 'App' },
      ],
      sentiment: [
        { topic: 'Swift response', sentiment: 'Positive', valence: 0.7, source: 'Government' },
        { topic: 'High vaccination rate', sentiment: 'Positive', valence: 0.8, source: 'Achievement' },
      ],
      uaeRelevance: 'CRITICAL',
    },

    // EVENT 12: EXPO 2020 DUBAI
    {
      id: 'event-12',
      eventNumber: 12,
      title: 'Expo 2020 Dubai',
      period: { start: '2021', end: '2022' },
      source: 'Wikipedia, Expo 2020 Dubai Official, BIE',
      overview: 'Expo 2020 Dubai was the first World Expo held in the Middle East, North Africa, and South Asia region. The six-month event attracted more than 24 million visits from 178 countries.',
      keyFacts: [
        'Dates: October 1, 2021 - March 31, 2022 (postponed from 2020 due to COVID-19)',
        'Location: 438 hectares between Dubai and Abu Dhabi',
        'Total visits: More than 24 million during six-month period',
        'Participants: 193 countries and 10 organizations',
        'Theme: Connecting Minds, Creating the Future',
        'Post-expo site became Expo City Dubai',
      ],
      timeline: [
        { date: 'October 1, 2021', event: 'Expo 2020 Dubai opened' },
        { date: 'March 31, 2022', event: 'Expo 2020 Dubai closed' },
      ],
      entities: [
        { entity: 'Reem Al Hashimi', role: 'Managing Director', type: 'Person' },
        { entity: 'Al Wasl Plaza', role: 'Central plaza', type: 'Place' },
        { entity: 'BIE', role: 'Organizing body', type: 'Organization' },
      ],
      sentiment: [
        { topic: 'Event success', sentiment: 'Strongly Positive', valence: 0.9, source: 'National achievement' },
        { topic: 'International participation', sentiment: 'Positive', valence: 0.8, source: 'Global engagement' },
      ],
      uaeRelevance: 'HIGH',
    },

    // EVENT 13: MBZ PRESIDENCY
    {
      id: 'event-13',
      eventNumber: 13,
      title: 'MBZ Presidency',
      period: { start: '2022', end: 'Present' },
      source: 'Britannica, UAE Government Portals, Al Jazeera',
      overview: 'Sheikh Mohamed bin Zayed Al Nahyan (MBZ) became President of the UAE on May 14, 2022, following the death of Sheikh Khalifa. MBZ had been de facto ruler since Khalifa suffered a stroke in 2014.',
      keyFacts: [
        'Born: March 11, 1961, in Al-Ain, Abu Dhabi',
        'Crown Prince of Abu Dhabi: 2004 to 2022',
        'May 14, 2022: Elected President of UAE by Federal Supreme Council',
        'Graduated from Royal Military Academy Sandhurst in 1979',
        'Key figure in Abraham Accords (2020)',
      ],
      timeline: [
        { date: 'May 13, 2022', event: 'Became ruler of Abu Dhabi after Khalifa death' },
        { date: 'May 14, 2022', event: 'Elected President of UAE' },
      ],
      entities: [
        { entity: 'Sheikh Mohamed bin Zayed Al Nahyan', role: 'President', type: 'Person' },
        { entity: 'Federal Supreme Council', role: 'Electing body', type: 'Organization' },
      ],
      sentiment: [
        { topic: 'Seamless succession', sentiment: 'Positive', valence: 0.8, source: 'Stability' },
        { topic: 'Leadership style', sentiment: 'Positive', valence: 0.6, source: 'Governance' },
      ],
      uaeRelevance: 'CRITICAL',
    },

    // EVENT 14: COP28
    {
      id: 'event-14',
      eventNumber: 14,
      title: 'COP28',
      period: { start: '2023', end: '2023' },
      source: 'UNFCCC, Wikipedia, COP28 Official',
      overview: 'COP28 was held in Expo City Dubai from November 30 to December 13, 2023. The largest climate summit ever held with over 80,000 participants. Historic first: fossil fuel language in final agreement.',
      keyFacts: [
        'Dates: November 30 - December 13, 2023',
        'Location: Expo City, Dubai, UAE',
        'Over 80,000 accredited participants including 150+ heads of state and government',
        'Largest climate summit ever held',
        'Loss and damage fund established on first day',
        '$85 billion pledged to climate causes',
      ],
      timeline: [
        { date: 'November 30, 2023', event: 'COP28 opened - Loss and damage fund established' },
        { date: 'December 13, 2023', event: 'COP28 closed - UAE Consensus adopted' },
      ],
      entities: [
        { entity: 'Sultan Al Jaber', role: 'COP28 President', type: 'Person' },
        { entity: 'Expo City Dubai', role: 'Venue', type: 'Place' },
        { entity: 'Loss and Damage Fund', role: 'Climate fund', type: 'Fund' },
      ],
      sentiment: [
        { topic: 'UAE hosting', sentiment: 'Positive', valence: 0.6, source: 'National prestige' },
        { topic: 'Fossil fuel transition', sentiment: 'Mixed', valence: 0.2, source: 'Environmental' },
      ],
      uaeRelevance: 'CRITICAL',
    },

    // EVENT 15: UAE FLOODS APRIL 2024
    {
      id: 'event-15',
      eventNumber: 15,
      title: 'UAE Floods April 2024',
      period: { start: '2024', end: '2024' },
      source: 'Wikipedia, Science Direct, Nature',
      overview: 'On April 16, 2024, the UAE experienced record-breaking precipitation with over 250mm in 24 hours causing unprecedented flooding. The heaviest rainfall in 75 years caused four deaths and $2.9-3.4 billion in insurance losses.',
      keyFacts: [
        'April 16, 2024: Record-breaking precipitation over 250mm in 24 hours',
        'Highest: 254.8 mm (10.03 in) at Khatm Al Shakla in Al Ain',
        'Dubai International Airport recorded 164 mm (6.45 in) - largest rainfall in 75 years',
        'Four deaths',
        '1,244 flights cancelled over two days at Dubai Airport',
        'Insurance losses estimated $2.9-3.4 billion',
      ],
      timeline: [
        { date: 'April 15, 2024', event: 'Storm began late evening' },
        { date: 'April 16, 2024', event: 'Peak rainfall - record breaking' },
      ],
      entities: [
        { entity: 'Khatm Al Shakla', role: 'Record rainfall location', type: 'Place' },
        { entity: 'Dubai International Airport', role: 'Major transport hub', type: 'Facility' },
      ],
      sentiment: [
        { topic: 'Climate change link', sentiment: 'Negative', valence: -0.6, source: 'Environmental' },
        { topic: 'Government response', sentiment: 'Positive', valence: 0.5, source: 'Relief effort' },
      ],
      uaeRelevance: 'MEDIUM',
    },

    // EVENT 16: BRICS MEMBERSHIP
    {
      id: 'event-16',
      eventNumber: 16,
      title: 'BRICS Membership',
      period: { start: '2024', end: 'Present' },
      source: 'UAE Ministry of Foreign Affairs, Parliament Commons Library',
      overview: 'UAE officially became a member of BRICS on January 1, 2024, after ratification by founding nations. The expansion added Saudi Arabia, Iran, Ethiopia, Egypt, Argentina, and UAE.',
      keyFacts: [
        'Announced: August 22-24, 2023 at 15th BRICS summit in Johannesburg',
        'Effective: January 1, 2024',
        'UAE previously joined BRICS New Development Bank in October 2021',
        'Positioned as alignment with UAE foreign policy on multilateralism',
      ],
      timeline: [
        { date: 'August 22-24, 2023', event: 'Announced at 15th BRICS summit in Johannesburg' },
        { date: 'January 1, 2024', event: 'UAE BRICS membership effective' },
      ],
      entities: [
        { entity: 'Sheikh Abdullah bin Zayed Al Nahyan', role: 'Foreign Minister', type: 'Person' },
        { entity: 'BRICS New Development Bank', role: 'Multilateral bank', type: 'Organization' },
      ],
      sentiment: [
        { topic: 'Multilateral engagement', sentiment: 'Positive', valence: 0.6, source: 'Diplomatic' },
        { topic: 'Economic diversification', sentiment: 'Positive', valence: 0.5, source: 'Trade' },
      ],
      uaeRelevance: 'HIGH',
    },

    // EVENT 17: GAZA WAR UAE RESPONSE
    {
      id: 'event-17',
      eventNumber: 17,
      title: 'Gaza War UAE Response',
      period: { start: '2023', end: '2026' },
      source: 'US Congress Research Service, OCHA, UNRWA, ReliefWeb',
      overview: 'UAE has remained the single largest country donor of humanitarian aid to Gaza since December 2025. The UAE established field hospitals, air bridges for humanitarian supplies, and supported UNRWA operations.',
      keyFacts: [
        'As of December 2025: UAE single largest country donor of humanitarian aid to Gaza',
        'Established field hospitals and relief operations',
        'Air bridges for humanitarian supply delivery',
        'Called for immediate ceasefire',
        'Advocated for two-state solution',
      ],
      entities: [
        { entity: 'OCHA', role: 'UN humanitarian office', type: 'Organization' },
        { entity: 'UNRWA', role: 'Palestinian refugees agency', type: 'Organization' },
      ],
      sentiment: [
        { topic: 'Humanitarian aid', sentiment: 'Positive', valence: 0.8, source: 'International' },
        { topic: 'Ceasefire calls', sentiment: 'Positive', valence: 0.7, source: 'Humanitarian' },
      ],
      uaeRelevance: 'HIGH',
    },

    // EVENT 18: UAE-SAUDI DYNAMICS
    {
      id: 'event-18',
      eventNumber: 18,
      title: 'UAE-Saudi Dynamics',
      period: { start: '1971', end: 'Ongoing' },
      source: 'Wikipedia, ECFR',
      overview: 'UAE-Saudi relations have evolved from the 1971-1974 Buraimi dispute and normalization to a complex partnership marked by both cooperation and competition in Yemen, Sudan, and regional influence.',
      keyFacts: [
        '1971-1974: Saudi Arabia initially withheld recognition of UAE over Buraimi dispute',
        'Normalized after 1974 Treaty of Jeddah',
        'Relations strengthened significantly with MBS rise',
        'Yemen Divergence: UAE withdrew forces 2019 following disagreements with Saudi approach',
        'Sudan conflict: Saudi supports SAF; UAE backs RSF',
      ],
      timeline: [
        { date: '1974', event: 'Treaty of Jeddah normalized relations' },
        { date: '2019', event: 'UAE withdrew from Yemen over disagreements' },
      ],
      entities: [
        { entity: 'Mohammed bin Salman (MBS)', role: 'Saudi Crown Prince', type: 'Person' },
        { entity: 'Mohammed bin Zayed (MBZ)', role: 'UAE President', type: 'Person' },
        { entity: 'Southern Transitional Council', role: 'Yemeni separatists', type: 'Organization' },
      ],
      sentiment: [
        { topic: 'Historical alliance', sentiment: 'Positive', valence: 0.5, source: 'Traditional' },
        { topic: 'Yemen divergence', sentiment: 'Negative', valence: -0.6, source: 'Current tension' },
      ],
      uaeRelevance: 'CRITICAL',
    },

    // EVENT 19: G42-MICROSOFT DEAL
    {
      id: 'event-19',
      eventNumber: 19,
      title: 'G42-Microsoft Deal',
      period: { start: '2024', end: 'Present' },
      source: 'Microsoft Blog, CNBC, Bloomberg, Reuters',
      overview: 'Microsoft committed $1.5 billion for a minority stake in G42, UAE leading AI company, with a first-of-its-kind binding agreement with assurances to both US and UAE governments.',
      keyFacts: [
        'Microsoft committed $1.5 billion for minority stake in G42',
        'Brad Smith, Microsoft Vice Chair and President, joined G42 board',
        'First-of-its-kind binding agreement with assurances to both US and UAE governments',
        'Jais (G42 Arabic LLM) available in Azure AI Model Catalog - worlds first Arabic LLM',
        '$1 billion fund for developers to boost AI skills in UAE and region',
      ],
      timeline: [
        { date: 'April 15, 2024', event: 'Deal announced' },
        { date: 'December 2024', event: 'US approved advanced AI chip exports to UAE' },
      ],
      entities: [
        { entity: 'G42', role: 'AI company', type: 'Company' },
        { entity: 'Microsoft', role: 'Tech investor', type: 'Company' },
        { entity: 'Brad Smith', role: 'Microsoft President', type: 'Person' },
      ],
      sentiment: [
        { topic: 'AI investment', sentiment: 'Positive', valence: 0.7, source: 'Technology' },
        { topic: 'US-UAE cooperation', sentiment: 'Positive', valence: 0.6, source: 'Diplomatic' },
      ],
      uaeRelevance: 'HIGH',
    },
  ],

  summary: {
    totalEvents: 19,
    entityCount: 100,
    sourceCount: 65,
    dataPointsCount: 500,
    lastUpdated: '2026-04-29',
  },
}

// ============================================================================
// ERA 10: POLICY ANNOUNCEMENT HISTORICAL IMPACT
// ============================================================================

export const policyAnnouncementData: HistoricalEra = {
  id: 'hist-8-10',
  era: 'Policy Announcement Historical Impact',
  period: { start: '2010', end: '2026' },
  description:
    'This era documents major UAE policy announcements from 2010-2026 including Vision 2021, National Agenda, Centennial 2071, Cybercrime Laws, Anti-Discrimination Laws, Golden Visa program, Corporate Tax, and climate commitments including Net Zero 2050. Each policy is analyzed for announcement context, public/market reaction, and impact assessment.',
  keyEvents: [
    { date: '2010', title: 'Vision 2021 Launch', description: 'Sheikh Mohammed bin Rashid Al Maktoum launched Vision 2021 targeting making UAE "one of the best countries in the world" by 2021 Golden Jubilee.', entities: ['Sheikh Mohammed bin Rashid Al Maktoum'], outcome: 'National strategic framework; 52 NKPIs established', significance: 'critical' },
    { date: 'January 2014', title: 'National Agenda Launch', description: 'Seven-year plan launched with six national priorities. Over 300 officials from 90 government entities contributed.', entities: ['UAE Cabinet'], outcome: 'Implementation framework for Vision 2021', significance: 'major' },
    { date: 'March 2017', title: 'UAE Centennial 2071', description: 'Sheikh Mohammed bin Rashid launched 50-year plan with AED 600 billion investment target. Objective: make UAE best country in world by 2071.', entities: ['Sheikh Mohammed bin Rashid Al Maktoum'], outcome: 'Long-term national vision extending Vision 2021', significance: 'critical' },
    { date: 'November 2012', title: 'Cybercrime Law Established', description: 'Federal Legal Decree No. 5/2012 established cybercrime penalties including up to AED 1M fines and life imprisonment for certain offenses.', entities: ['President Sheikh Khalifa bin Zayed Al Nahyan'], outcome: 'Digital security framework; civil liberties concerns', significance: 'major' },
    { date: 'July 2015', title: 'Anti-Discrimination Law', description: 'Federal Decree Law No. 2 of 2015 criminalized discrimination on grounds of religion, caste, color, ethnic origin, creed or race.', entities: ['UAE Government'], outcome: 'Social cohesion framework; criticized for blasphemy provisions', significance: 'major' },
    { date: 'November 2020', title: 'Decriminalization Reforms', description: 'Major social reforms including alcohol, cohabitation, honor killings, and suicide decriminalization.', entities: ['UAE Government'], outcome: 'Social liberalization; talent attraction', significance: 'major' },
    { date: '2019', title: 'Golden Visa Program', description: '10-year renewable visa for investors and special talent. AED 2 million property or AED 10 million business investment threshold.', entities: ['UAE Government', 'ICP'], outcome: 'Talent attraction; economic diversification support', significance: 'critical' },
    { date: 'January 2022', title: 'Corporate Tax Announced', description: 'Federal Decree-Law No. 47 of 2023 introduced 9% corporate tax on profits exceeding AED 375,000. Effective June 2023.', entities: ['Federal Tax Authority'], outcome: 'Revenue diversification; OECD tax framework alignment', significance: 'critical' },
    { date: 'May 2022', title: 'Unemployment Insurance', description: 'Federal Decree Law No. 13 of 2022 introduced unemployment insurance scheme. Over 1 million subscribers by April 2023.', entities: ['Cabinet', 'MoHRE'], outcome: 'Worker protection framework', significance: 'major' },
    { date: 'October 2020', title: 'Remote Work Visa', description: 'Dubai Virtual Working Program launched. Remote Working Visa announced March 2021 via Cabinet Resolution No. 27 of 2020.', entities: ['Dubai Government', 'UAE Government'], outcome: 'Post-COVID economy support; digital nomad attraction', significance: 'major' },
    { date: 'October 2022', title: 'Green Visa Introduced', description: 'Self-sponsored 5-year residency visa. Biggest immigration policy shake-up in years.', entities: ['UAE Government', 'ICP'], outcome: 'Immigration liberalization; self-sponsorship', significance: 'major' },
    { date: 'January 2022', title: '4-Day Work Week', description: 'First country in world to adopt 4.5-day workweek for federal employees. 88% productivity increase reported.', entities: ['UAE Cabinet'], outcome: 'Workplace innovation; employee satisfaction', significance: 'minor' },
    { date: 'October 2021', title: 'Net Zero 2050 Commitment', description: 'UAE committed to Net Zero by 2050 - first MENA nation with formal net-zero target. AED 600 billion investment planned.', entities: ['UAE Government'], outcome: 'Climate leadership; sustainability commitment', significance: 'critical' },
    { date: 'October 2017', title: 'AI Strategy Launched', description: 'First country in world to launch a national AI strategy and appoint a Minister of AI. AED 335 billion economic boost target.', entities: ['UAE AI Office'], outcome: 'Future economy preparation; tech leadership', significance: 'critical' },
    { date: 'March 2019', title: 'Space Strategy 2030', description: 'National Space Strategy 2030 launched with 6 objectives, 21 programmes, 79 initiatives.', entities: ['UAE Space Agency'], outcome: 'Tech sovereignty; space sector development', significance: 'major' },
    { date: 'November 2018', title: 'Food Security Strategy', description: 'Goal: World leader in Global Food Security Index by 2051, top 10 by 2021.', entities: ['UAE Government'], outcome: '16,000 jobs; AED 22 billion impact target', significance: 'major' },
    { date: '2017', title: 'Energy Strategy 2050', description: 'First unified energy strategy. 42-45% energy efficiency increase target. AED 150-200 billion investment.', entities: ['UAE Government'], outcome: 'Energy transition; renewable deployment', significance: 'critical' },
    { date: 'December 2021', title: 'Cybercrime Law 2021', description: 'Federal Decree Law No. 34 of 2021 replaced 2012 law. Effective January 2022.', entities: ['President Sheikh Khalifa bin Zayed Al Nahyan'], outcome: 'Expanded digital restrictions; criticism from HRW', significance: 'major' },
    { date: 'May 2025', title: 'Climate Change Law', description: 'Federal Decree-Law No. 11 of 2024 on Climate Change Reduction. Effective May 30, 2025.', entities: ['UAE Government'], outcome: 'Mandatory emissions reporting; AED 50K-2M fines', significance: 'major' },
    { date: 'July 2025', title: 'Freelance Visa Suspended', description: 'Temporary suspension of new freelance visa issuance announced. Auditing procedures tightened.', entities: ['UAE Government', 'MoHRE'], outcome: 'Labor market adjustment; compliance review', significance: 'minor' },
  ],
  policyOutcomes: [
    { policy: 'Vision 2021', year: '2010', impact: 'National strategic framework; 52 NKPIs across 6 priorities', successors: ['Centennial 2071'] },
    { policy: 'National Agenda 2014', year: '2014', impact: 'Implementation vehicle for Vision 2021' },
    { policy: 'Centennial 2071', year: '2017', impact: 'AED 600B investment; 50-year national vision' },
    { policy: 'Government Services Strategy', year: '2021', impact: '8% GDP increase; 28 initiatives by 2023' },
    { policy: 'Cybercrime Law 2012', year: '2012', impact: 'Digital security; civil liberties concerns' },
    { policy: 'Cybercrime Law 2021', year: '2021', impact: 'Expanded restrictions; Access Now opposition' },
    { policy: 'Anti-Discrimination Law 2015', year: '2015', impact: 'Social cohesion; religious criticism concerns' },
    { policy: 'Tolerance Law 2015', year: '2015', impact: 'Counter-terrorism framework' },
    { policy: 'Decriminalization 2020', year: '2020', impact: 'Social liberalization; talent attraction' },
    { policy: 'Golden Visa', year: '2019', impact: 'Talent attraction; 44,000 issued in Dubai year 1' },
    { policy: 'Corporate Tax', year: '2023', impact: 'Revenue diversification; 9% rate; AED 375K threshold' },
    { policy: 'Unemployment Insurance', year: '2022', impact: 'Worker protection; 1M+ subscribers' },
    { policy: 'Remote Work Visa', year: '2020', impact: 'Post-COVID economy support; digital nomads' },
    { policy: 'Green Visa', year: '2022', impact: 'Self-sponsorship; 5-year validity' },
    { policy: 'Freelance Visa', year: '2022', impact: 'Labor flexibility; suspended July 2025' },
    { policy: '4-Day Work Week', year: '2022', impact: '88% productivity; 90% satisfaction' },
    { policy: 'Nuclear Energy', year: '2008', impact: '25% electricity; 22MT carbon avoided annually' },
    { policy: 'Net Zero 2050', year: '2021', impact: 'MENA first; AED 600B climate investment' },
    { policy: 'AI Strategy', year: '2017', impact: 'First country AI strategy; AED 335B boost target' },
    { policy: 'Space Strategy', year: '2019', impact: 'Regulatory framework; 79 initiatives' },
    { policy: 'Food Security', year: '2018', impact: '16,000 jobs; AED 22B impact target' },
    { policy: 'Energy Strategy 2050', year: '2017', impact: '42-45% efficiency; 50,000 green jobs' },
    { policy: 'Climate Change Law', year: '2024', impact: 'Mandatory reporting; AED 50K-2M fines' },
  ],
  entityInvolvement: [
    'Sheikh Mohammed bin Rashid Al Maktoum',
    'Sheikh Khalifa bin Zayed Al Nahyan',
    'UAE Cabinet',
    'Federal Tax Authority',
    'MoHRE',
    'ICP',
    'UAE Government',
    'UAE AI Office',
    'UAE Space Agency',
    'ENEC',
    'Nawah Energy Company',
  ],
  nationBuildingMilestones: [
    '2010: Vision 2021 launched',
    '2014: National Agenda - implementation framework',
    '2017: Centennial 2071 - 50-year vision',
    '2012: Cybercrime Law - digital security',
    '2015: Anti-Discrimination Law - social cohesion',
    '2020: Decriminalization - social liberalization',
    '2019: Golden Visa - talent attraction',
    '2023: Corporate Tax - 9% rate',
    '2022: Unemployment Insurance - worker protection',
    '2021: Net Zero 2050 - climate leadership',
    '2017: AI Strategy - first country',
    '2019: Space Strategy - 79 initiatives',
  ],
  credibility: createCredibilityScore(0, 90, 35, '2026-04-28'),
  sources: [
    createSourceReference('UAE Government Portal', 0, '2026-04-28'),
    createSourceReference('World Nuclear Association', 1, '2026-04-27'),
    createSourceReference('Human Rights Watch', 1, '2026-04-27'),
    createSourceReference('KPMG', 2, '2026-04-27'),
    createSourceReference('OECD.AI', 1, '2026-04-27'),
    createSourceReference('Climate Action Tracker', 1, '2026-04-27'),
    createSourceReference('Al Jazeera', 2, '2026-04-27'),
    createSourceReference('Fragomen', 2, '2026-04-27'),
    createSourceReference('MoHRE', 0, '2026-04-27'),
  ],
  lastUpdated: '2026-04-28',
  policyAnnouncements: [
    { id: 'policy-1', name: 'Vision 2021', year: 2010, description: 'National strategic framework to make UAE one of best countries by 2021 Golden Jubilee.', significance: 'critical', uaeRelevance: 'critical', details: { launchDate: '2010', launchedBy: 'Sheikh Mohammed bin Rashid Al Maktoum', entities: ['Sheikh Mohammed bin Rashid Al Maktoum', 'UAE Cabinet'], kpis: [{ kpi: 'Four Pillars', value: 'Responsibility, Destiny, Knowledge, Prosperity' }, { kpi: 'NKPIs Established', value: 52 }, { kpi: 'GDP per capita change', value: '-35% since 2000' }, { kpi: 'FDI as % GDP', value: '3.3% (stagnant 12 years)' }], criticisms: ['Over-investment in vanity projects', 'Masdar City described as unfinished ghost town', 'Persistent skills gap'] }, sources: [createSourceReference('UAE Government Portal', 0, '2026-04-28')], credibility: createCredibilityScore(0, 85, 30, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-2', name: 'National Agenda 2014', year: 2014, description: 'Seven-year implementation plan for Vision 2021 with six national priorities.', significance: 'major', uaeRelevance: 'critical', details: { launchDate: 'January 14, 2014', launchedBy: 'Sheikh Mohammed bin Rashid Al Maktoum', entities: ['UAE Cabinet'], kpis: [{ kpi: 'Officials Engaged', value: 300 }, { kpi: 'Entities Involved', value: 90 }, { kpi: 'Focus Areas', value: 'Education, Healthcare, Economy, Security, Housing' }] }, sources: [createSourceReference('Protocol Dubai', 3, '2026-04-28')], credibility: createCredibilityScore(3, 70, 25, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-3', name: 'Centennial 2071', year: 2017, description: '50-year national vision with AED 600 billion investment target.', significance: 'critical', uaeRelevance: 'high', details: { launchDate: 'March 23, 2017', launchedBy: 'Sheikh Mohammed bin Rashid Al Maktoum', investment: 'AED 600 billion', entities: ['UAE Government'], kpis: [{ kpi: 'Investment', value: 'AED 600 billion' }, { kpi: 'Target Year', value: 2071 }, { kpi: 'Objective', value: 'Best country in world' }] }, sources: [createSourceReference('Milken Institute', 2, '2026-04-28')], credibility: createCredibilityScore(2, 75, 28, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-4', name: 'Government Services Strategy', year: 2021, description: 'UAE Strategy for Government Services 2021-2025 targeting 100% proactive digital government.', significance: 'major', uaeRelevance: 'high', details: { launchDate: 'March 2021', entities: ['UAE Government'], kpis: [{ kpi: 'Projected GDP Increase', value: '8%' }, { kpi: 'Initiatives by 2023', value: 28 }, { kpi: 'Strategic Pillars', value: 5 }, { kpi: 'Service Availability', value: '24/7' }] }, sources: [createSourceReference('UAE Government', 0, '2026-04-28')], credibility: createCredibilityScore(0, 88, 32, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-5', name: 'Cybercrime Law 2012', year: 2012, description: 'Federal Legal Decree No. 5/2012 establishing cybercrime penalties.', significance: 'major', uaeRelevance: 'critical', details: { effectiveDate: 'November 12, 2012', issuer: 'President Sheikh Khalifa bin Zayed Al Nahyan', legalInstrument: 'Federal Legal Decree No. 5/2012', entities: ['President Sheikh Khalifa bin Zayed Al Nahyan'], provisions: [{ article: '28', provision: 'Endanger state security or infringe public order', penalty: 'Up to AED 1M + imprisonment' }, { article: '30', provision: 'Advocate overthrow of government', penalty: 'Life imprisonment' }], criticisms: ['HRW: attempt to ban even tempered criticism', 'Closed only remaining forum for free speech'] }, sources: [createSourceReference('Human Rights Watch', 1, '2026-04-28')], credibility: createCredibilityScore(1, 80, 35, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-6', name: 'Cybercrime Law 2021', year: 2021, description: 'Federal Decree Law No. 34 of 2021 replaced 2012 law with stricter provisions.', significance: 'major', uaeRelevance: 'critical', details: { effectiveDate: 'January 2, 2022', legalInstrument: 'Federal Decree Law No. 34 of 2021', entities: ['UAE Government'], provisions: [{ article: '53', provision: 'Store or share unlawful content', penalty: 'AED 300,000 to 10,000,000' }, { article: '20', provision: 'Managing website for changing ruling regime', penalty: 'Life imprisonment' }], criticisms: ['Access Now: overbroad and vague terminology', 'ALQST: excessive discretion'] }, sources: [createSourceReference('Access Now', 3, '2026-04-28')], credibility: createCredibilityScore(3, 72, 30, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-7', name: 'Anti-Discrimination Law 2015', year: 2015, description: 'Federal Decree Law No. 2 of 2015 criminalizing discrimination.', significance: 'major', uaeRelevance: 'high', details: { issueDate: 'July 20, 2015', legalInstrument: 'Federal Decree Law No. 2 of 2015', entities: ['UAE Government'], provisions: [{ provision: 'Criminalize discrimination on grounds of religion, caste, color, ethnic origin, creed or race', penalty: '6 months to 10 years imprisonment; AED 50,000 to 2 million fines' }], criticisms: ['Religion News: criminalizes criticism of religions', 'Blasphemy provisions concern'] }, sources: [createSourceReference('Wikipedia', 4, '2026-04-28')], credibility: createCredibilityScore(4, 65, 25, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-8', name: 'Tolerance Law 2015', year: 2015, description: 'Counter-terrorism framework and tolerance legislation.', significance: 'minor', uaeRelevance: 'medium', details: { entities: ['UAE Government'], kpis: [{ kpi: 'Focus', value: 'Counter-terrorism framework' }] }, sources: [createSourceReference('UAE UN', 3, '2026-04-28')], credibility: createCredibilityScore(3, 60, 20, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-9', name: 'Decriminalization 2020', year: 2020, description: 'Major social reforms including alcohol, cohabitation, honor killings decriminalization.', significance: 'major', uaeRelevance: 'high', details: { announcementDate: 'November 7, 2020', entities: ['UAE Government'], kpis: [{ kpi: 'Alcohol age threshold', value: 21 }, { kpi: 'Reforms count', value: 5 }, { kpi: 'Rationale', value: 'Attract foreign talent, post-pandemic recovery' }] }, sources: [createSourceReference('Al Jazeera', 2, '2026-04-28')], credibility: createCredibilityScore(2, 78, 28, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-10', name: 'Golden Visa Program', year: 2019, description: '10-year renewable visa for investors and special talent.', significance: 'critical', uaeRelevance: 'critical', details: { launchDate: '2019', entities: ['UAE Government', 'ICP'], kpis: [{ kpi: 'Validity', value: '10 years' }, { kpi: 'Property Investment Min', value: 'AED 2 million' }, { kpi: 'Business Investment Min', value: 'AED 10 million' }, { kpi: 'Dubai issued (Year 1)', value: '44,000' }, { kpi: 'Categories 2025', value: 12 }] }, sources: [createSourceReference('Fragomen', 2, '2026-04-28')], credibility: createCredibilityScore(2, 82, 30, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-11', name: 'Corporate Tax', year: 2023, description: 'Federal Decree-Law No. 47 of 2023 introducing 9% corporate tax.', significance: 'critical', uaeRelevance: 'critical', details: { announcementDate: 'January 31, 2022', effectiveDate: 'June 1, 2023', legalInstrument: 'Federal Decree-Law No. 47 of 2023', issuer: 'Federal Tax Authority', entities: ['Federal Tax Authority'], kpis: [{ kpi: 'Tax Rate', value: '9%' }, { kpi: 'Threshold', value: 'AED 375,000 profits' }, { kpi: 'VAT Rate', value: '5%' }, { kpi: 'UAE vs KSA', value: '9% vs 20%' }] }, sources: [createSourceReference('CNBC', 2, '2026-04-28')], credibility: createCredibilityScore(2, 80, 32, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-12', name: 'Unemployment Insurance', year: 2022, description: 'Federal Decree Law No. 13 of 2022 introducing unemployment insurance scheme.', significance: 'major', uaeRelevance: 'high', details: { approvalDate: 'May 9, 2022', effectiveDate: 'January 1, 2023', legalInstrument: 'Federal Decree Law No. 13 of 2022', entities: ['Cabinet', 'MoHRE'], kpis: [{ kpi: 'Tier 1 Contribution', value: 'AED 5/month (up to AED 16K salary)' }, { kpi: 'Tier 2 Contribution', value: 'AED 10/month (above AED 16K salary)' }, { kpi: 'Compensation Rate', value: '60% of basic salary' }, { kpi: 'Max Duration', value: '3 months' }, { kpi: 'Subscribers (Apr 2023)', value: '1M+' }] }, sources: [createSourceReference('MoHRE', 0, '2026-04-28')], credibility: createCredibilityScore(0, 90, 35, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-13', name: 'Remote Work Visa', year: 2020, description: 'Dubai Virtual Working Program and Remote Working Visa for overseas employers.', significance: 'major', uaeRelevance: 'high', details: { launchDate: 'October 2020', legalInstrument: 'Cabinet Resolution No. 27 of 2020', entities: ['Dubai Government', 'UAE Government'], kpis: [{ kpi: 'Validity', value: '1 year' }, { kpi: 'Income Threshold 2026', value: 'USD 5,000' }, { kpi: 'Bank Statements 2026', value: '6 months' }, { kpi: 'Processing Time', value: '5-7 days' }] }, sources: [createSourceReference('UAE Legislation', 0, '2026-04-28')], credibility: createCredibilityScore(0, 85, 30, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-14', name: 'Green Visa', year: 2022, description: 'Self-sponsored 5-year residency visa - biggest immigration policy shake-up in years.', significance: 'major', uaeRelevance: 'high', details: { effectiveDate: 'October 3, 2022', entities: ['UAE Government', 'ICP'], kpis: [{ kpi: 'Validity', value: '5 years' }, { kpi: 'Grace Period', value: '6 months' }, { kpi: 'Investor Investment Min', value: 'AED 1 million' }, { kpi: 'Skilled Worker Salary Min', value: 'AED 15,000/month' }] }, sources: [createSourceReference('Al Jazeera', 2, '2026-04-28')], credibility: createCredibilityScore(2, 78, 28, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-15', name: 'Freelance Visa', year: 2022, description: 'Freelance/self-employment visa part of 2022 reforms.', significance: 'minor', uaeRelevance: 'medium', details: { entities: ['UAE Government', 'MoHRE'], kpis: [{ kpi: 'Legal Framework', value: 'Cabinet Resolution 65/2022' }, { kpi: 'Status', value: 'Suspended July 2025' }] }, sources: [createSourceReference('KPMG', 2, '2026-04-28')], credibility: createCredibilityScore(2, 75, 25, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-16', name: '4-Day Work Week', year: 2022, description: 'First country in world to adopt 4.5-day workweek for federal employees.', significance: 'minor', uaeRelevance: 'medium', details: { effectiveDate: 'January 1, 2022', entities: ['UAE Cabinet'], kpis: [{ kpi: 'Schedule', value: 'Mon-Thu 7:30am-3:30pm; Fri 7:30am-Noon' }, { kpi: 'Productivity Increase', value: '88%' }, { kpi: 'Job Satisfaction Rise', value: '90%' }, { kpi: 'Schedule Maintenance', value: '87%' }] }, sources: [createSourceReference('Workplace Options', 3, '2026-04-28')], credibility: createCredibilityScore(3, 70, 22, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-17', name: 'Nuclear Energy Program', year: 2008, description: 'Barakah plant with 4 APR-1400 reactors providing 25% of UAE electricity.', significance: 'critical', uaeRelevance: 'critical', details: { policyYear: 2008, contractYear: 2009, contractor: 'KEPCO', entities: ['ENEC', 'Nawah Energy Company'], kpis: [{ kpi: 'Reactors', value: 4 }, { kpi: 'Total Capacity', value: '5.6 GWe' }, { kpi: 'Electricity Share', value: '25%' }, { kpi: 'Carbon Avoided', value: '22+ million tonnes/year' }, { kpi: 'Construction Cost', value: '$20.4 billion' }] }, sources: [createSourceReference('World Nuclear Association', 1, '2026-04-28')], credibility: createCredibilityScore(1, 92, 38, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-18', name: 'Net Zero 2050', year: 2021, description: 'First MENA nation to commit to net-zero by 2050 with AED 600 billion investment.', significance: 'critical', uaeRelevance: 'critical', details: { announcementDate: 'October 7, 2021', atCop26: true, investment: 'AED 600 billion ($163 billion)', entities: ['UAE Government'], kpis: [{ kpi: 'Clean Energy 2015', value: '100 MW' }, { kpi: 'Clean Energy 2030 Target', value: '14 GW' }, { kpi: 'Investment to Date', value: '$40 billion' }, { kpi: 'MENA First', value: true }] }, sources: [createSourceReference('Climate Action Tracker', 1, '2026-04-28')], credibility: createCredibilityScore(1, 85, 32, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-19', name: 'AI Strategy 2031', year: 2017, description: 'First country in world to launch national AI strategy and appoint Minister of AI.', significance: 'critical', uaeRelevance: 'critical', details: { launchDate: 'October 2017', entities: ['UAE AI Office'], kpis: [{ kpi: 'Economic Boost Target', value: 'AED 335 billion' }, { kpi: 'Public Services through AI', value: '100%' }, { kpi: 'Global AI Value Share Target', value: '2% by 2030' }, { kpi: 'AI Contribution to GDP', value: '~14% by 2030' }, { kpi: 'Initiatives Launched', value: '26+' }] }, sources: [createSourceReference('OECD.AI', 1, '2026-04-28')], credibility: createCredibilityScore(1, 88, 35, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-20', name: 'Space Strategy 2030', year: 2019, description: 'National Space Strategy 2030 with 6 objectives, 21 programmes, 79 initiatives.', significance: 'major', uaeRelevance: 'high', details: { launchDate: 'March 2019', legalInstrument: 'Federal Law No. 12 of 2019', entities: ['UAE Space Agency'], kpis: [{ kpi: 'Objectives', value: 6 }, { kpi: 'Programmes', value: 21 }, { kpi: 'Initiatives', value: 79 }, { kpi: 'Benefiting Entities', value: '85+' }] }, sources: [createSourceReference('UAE Government', 0, '2026-04-28')], credibility: createCredibilityScore(0, 90, 35, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-21', name: 'Food Security Strategy', year: 2018, description: 'Goal: World leader in Global Food Security Index by 2051.', significance: 'major', uaeRelevance: 'high', details: { launchDate: 'November 2018', entities: ['UAE Government'], kpis: [{ kpi: 'Target Year', value: 2051 }, { kpi: 'Top 10 Target Year', value: 2021 }, { kpi: 'New Jobs Target', value: '16,000' }, { kpi: 'Monetary Impact Target', value: 'AED 22 billion' }] }, sources: [createSourceReference('UAE Government', 0, '2026-04-28')], credibility: createCredibilityScore(0, 85, 30, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-22', name: 'Energy Strategy 2050', year: 2017, description: 'First unified energy strategy with 42-45% efficiency increase target.', significance: 'critical', uaeRelevance: 'critical', details: { launchYear: 2017, entities: ['UAE Government'], kpis: [{ kpi: 'Efficiency Increase Target', value: '42-45%' }, { kpi: 'Clean Capacity 2030', value: '14.2 to 19.8 GW' }, { kpi: 'Green Jobs Target', value: '50,000 by 2030' }, { kpi: 'Grid Emission Factor 2030', value: '0.27 kg CO2/kWh' }, { kpi: 'Clean Energy 2030', value: '32%' }, { kpi: 'Investment Target', value: 'AED 150-200 billion' }] }, sources: [createSourceReference('UAE Government', 0, '2026-04-28')], credibility: createCredibilityScore(0, 88, 33, '2026-04-28'), lastUpdated: '2026-04-28' },
    { id: 'policy-23', name: 'Climate Change Law', year: 2024, description: 'Federal Decree-Law No. 11 of 2024 on Climate Change Reduction.', significance: 'major', uaeRelevance: 'critical', details: { effectiveDate: 'May 30, 2025', legalInstrument: 'Federal Decree-Law No. 11 of 2024', entities: ['UAE Government'], kpis: [{ kpi: 'Carbon Credit Threshold', value: '500,000+ metric tons CO2e/year' }, { kpi: 'Fine Min', value: 'AED 50,000' }, { kpi: 'Fine Max', value: 'AED 2,000,000' }, { kpi: 'Repeat Violation Multiplier', value: 2 }] }, sources: [createSourceReference('ISS-Corporate', 2, '2026-04-28')], credibility: createCredibilityScore(2, 75, 28, '2026-04-28'), lastUpdated: '2026-04-28' },
  ],
  sourceCredibilityMatrix: [
    { source: 'UAE Government Official (u.ae)', tier: 0, credibilityRating: 'Highest - Official Primary Source', type: 'Government' },
    { source: 'World Nuclear Association', tier: 1, credibilityRating: 'Very High - Industry Authority', type: 'International Organization' },
    { source: 'Arms Control Association', tier: 1, credibilityRating: 'Very High - Policy Authority', type: 'Think Tank' },
    { source: 'Climate Action Tracker', tier: 1, credibilityRating: 'Very High - Scientific Authority', type: 'Research Consortium' },
    { source: 'Human Rights Watch', tier: 1, credibilityRating: 'High - Documented NGO Research', type: 'International NGO' },
    { source: 'OECD.AI', tier: 1, credibilityRating: 'High - Multilateral Data', type: 'International Organization' },
    { source: 'Washington Institute', tier: 2, credibilityRating: 'High - Regional Policy Analysis', type: 'Think Tank' },
    { source: 'Al Jazeera', tier: 2, credibilityRating: 'High - Major Regional Media', type: 'Media' },
    { source: 'Reuters', tier: 2, credibilityRating: 'High - Wire Service', type: 'Media' },
    { source: 'The Guardian', tier: 2, credibilityRating: 'High - Established Media', type: 'Media' },
    { source: 'KPMG', tier: 2, credibilityRating: 'High - Big 4 Accounting', type: 'Professional Services' },
    { source: 'Fragomen', tier: 2, credibilityRating: 'High - Immigration Law Specialist', type: 'Law Firm' },
    { source: 'ISS-Corporate', tier: 2, credibilityRating: 'High - ESG Research', type: 'Research' },
    { source: 'DLA Piper', tier: 2, credibilityRating: 'High - Global Law Firm', type: 'Law Firm' },
    { source: 'Norton Rose Fulbright', tier: 2, credibilityRating: 'High - Global Law Firm', type: 'Law Firm' },
    { source: 'K&L Gates', tier: 2, credibilityRating: 'High - Global Law Firm', type: 'Law Firm' },
    { source: 'JD Supra', tier: 3, credibilityRating: 'Medium-High - Legal News', type: 'Legal News' },
    { source: 'Masdar', tier: 3, credibilityRating: 'Medium-High - State Energy Company', type: 'Semi-State' },
    { source: 'Access Now', tier: 3, credibilityRating: 'Medium - Digital Rights', type: 'NGO' },
    { source: 'Wikipedia', tier: 4, credibilityRating: 'Medium-Low - User Generated', type: 'Wiki' },
  ],
  uaeRelevanceMatrix: [
    { policy: 'Vision 2021', uaeRelevance: 'CRITICAL', criticalKPIs: 'GDP per capita -35%, FDI 3.3% of GDP', assessmentRationale: 'Core national development framework' },
    { policy: 'National Agenda 2014', uaeRelevance: 'CRITICAL', criticalKPIs: '6 national priorities, 300+ officials', assessmentRationale: 'Implementation vehicle for Vision 2021' },
    { policy: 'Centennial 2071', uaeRelevance: 'HIGH', criticalKPIs: 'AED 600B investment', assessmentRationale: 'Long-term economic vision' },
    { policy: 'Government Services Strategy', uaeRelevance: 'HIGH', criticalKPIs: '8% GDP increase, 28 initiatives', assessmentRationale: 'Digital transformation catalyst' },
    { policy: 'Cybercrime Law 2012/2021', uaeRelevance: 'CRITICAL', criticalKPIs: 'Fines up to AED 10M, life imprisonment', assessmentRationale: 'Civil liberties impact' },
    { policy: 'Anti-Discrimination Law 2015', uaeRelevance: 'HIGH', criticalKPIs: '6 months-10 years imprisonment', assessmentRationale: 'Social cohesion framework' },
    { policy: 'Tolerance Law 2015', uaeRelevance: 'MEDIUM', criticalKPIs: 'Counter-terrorism framework', assessmentRationale: 'Social stability' },
    { policy: 'Decriminalization 2020', uaeRelevance: 'HIGH', criticalKPIs: 'Economic liberalization indicators', assessmentRationale: 'Social + economic impact' },
    { policy: 'Golden Visa', uaeRelevance: 'CRITICAL', criticalKPIs: '10-year renewable, AED 2M threshold', assessmentRationale: 'Talent attraction' },
    { policy: 'Corporate Tax', uaeRelevance: 'CRITICAL', criticalKPIs: '9% rate, AED 375K threshold', assessmentRationale: 'Revenue diversification' },
    { policy: 'Unemployment Insurance', uaeRelevance: 'HIGH', criticalKPIs: '1M+ subscribers, AED 5-10/month', assessmentRationale: 'Worker protection' },
    { policy: 'Remote Work Visa', uaeRelevance: 'HIGH', criticalKPIs: 'USD 5,000 income threshold', assessmentRationale: 'Post-COVID economy' },
    { policy: 'Green Visa', uaeRelevance: 'HIGH', criticalKPIs: '5-year self-sponsored', assessmentRationale: 'Immigration reform' },
    { policy: 'Freelance Visa', uaeRelevance: 'MEDIUM', criticalKPIs: 'Suspension July 2025', assessmentRationale: 'Labor market adjustment' },
    { policy: '4-Day Work Week', uaeRelevance: 'MEDIUM', criticalKPIs: '88% productivity, 90% satisfaction', assessmentRationale: 'Workplace innovation' },
    { policy: 'Nuclear Energy', uaeRelevance: 'CRITICAL', criticalKPIs: '25% electricity, 22M tonnes avoided', assessmentRationale: 'Energy security' },
    { policy: 'Net Zero 2050', uaeRelevance: 'CRITICAL', criticalKPIs: 'AED 600B investment, MENA first', assessmentRationale: 'Climate leadership' },
    { policy: 'AI Strategy', uaeRelevance: 'CRITICAL', criticalKPIs: 'AED 335B economic boost', assessmentRationale: 'Future economy' },
    { policy: 'Space Strategy', uaeRelevance: 'HIGH', criticalKPIs: '6 objectives, 79 initiatives', assessmentRationale: 'Tech sovereignty' },
    { policy: 'Food Security', uaeRelevance: 'HIGH', criticalKPIs: '16,000 jobs, AED 22B impact', assessmentRationale: 'Economic diversification' },
    { policy: 'Energy Strategy 2050', uaeRelevance: 'CRITICAL', criticalKPIs: '42-45% efficiency, 50,000 green jobs', assessmentRationale: 'Energy transition' },
    { policy: 'Climate Change Law', uaeRelevance: 'CRITICAL', criticalKPIs: 'AED 50K-2M fines, Scope 1-3', assessmentRationale: 'Regulatory compliance' },
  ],
  sentimentSummary: [
    { policy: 'Vision 2021', positive: 30, negative: 50, neutral: 20 },
    { policy: 'National Agenda 2014', positive: 80, negative: 10, neutral: 10 },
    { policy: 'Centennial 2071', positive: 70, negative: 10, neutral: 20 },
    { policy: 'Government Services', positive: 75, negative: 5, neutral: 20 },
    { policy: 'Cybercrime Law 2012', positive: 10, negative: 85, neutral: 5 },
    { policy: 'Cybercrime Law 2021', positive: 5, negative: 90, neutral: 5 },
    { policy: 'Anti-Discrimination Law 2015', positive: 40, negative: 40, neutral: 20 },
    { policy: 'Tolerance Law 2015', positive: 60, negative: 20, neutral: 20 },
    { policy: 'Decriminalization 2020', positive: 75, negative: 10, neutral: 15 },
    { policy: 'Golden Visa', positive: 85, negative: 5, neutral: 10 },
    { policy: 'Corporate Tax', positive: 30, negative: 30, neutral: 40 },
    { policy: 'Unemployment Insurance', positive: 90, negative: 5, neutral: 5 },
    { policy: 'Remote Work Visa', positive: 70, negative: 10, neutral: 20 },
    { policy: 'Green Visa', positive: 85, negative: 5, neutral: 10 },
    { policy: 'Freelance Visa', positive: 50, negative: 30, neutral: 20 },
    { policy: '4-Day Work Week', positive: 88, negative: 5, neutral: 7 },
    { policy: 'Nuclear Energy', positive: 75, negative: 15, neutral: 10 },
    { policy: 'Net Zero 2050', positive: 60, negative: 35, neutral: 5 },
    { policy: 'AI Strategy', positive: 80, negative: 10, neutral: 10 },
    { policy: 'Space Strategy', positive: 75, negative: 5, neutral: 20 },
    { policy: 'Food Security', positive: 80, negative: 5, neutral: 15 },
    { policy: 'Energy Strategy 2050', positive: 75, negative: 5, neutral: 20 },
    { policy: 'Climate Change Law', positive: 55, negative: 25, neutral: 20 },
  ],
  dashboardKPIs: [
    { category: 'Economic Diversification', kpis: [{ kpi: 'FDI as % of GDP', baseline: '3.3% (2010)', current: '3.3%', target: '5%+', status: 'Stagnant' }, { kpi: 'Non-oil GDP contribution', current: '-', target: '80%+', status: 'Progressing' }, { kpi: 'Tourism GDP (Dubai)', current: '20%', target: '-', status: 'Stable' }] },
    { category: 'Energy & Climate', kpis: [{ kpi: 'Nuclear electricity share', current: '25%', target: '25%', status: 'Achieved' }, { kpi: 'Clean energy capacity', current: '14.2 GW', target: '19.8 GW by 2030', status: 'In Progress' }, { kpi: 'Renewable share', target: '32% by 2030', status: 'In Progress' }, { kpi: 'Carbon avoided (nuclear)', current: '22 MT/year', status: 'Achieved' }] },
    { category: 'Social Reform', kpis: [{ kpi: 'Alcohol criminalization', baseline: 'Yes', current: 'No (2020)', status: 'Lifted' }, { kpi: 'Cohabitation ban', baseline: 'Yes', current: 'No (2020)', status: 'Lifted' }, { kpi: 'Honor killing leniency', baseline: 'Yes', current: 'No (2020)', status: 'Ended' }] },
    { category: 'Visa & Immigration', kpis: [{ kpi: 'Golden Visa validity', current: '10 years', status: 'Active' }, { kpi: 'Golden Visa investors (Dubai)', current: '44,000 (Year 1)', status: 'Achieved' }, { kpi: 'Green Visa validity', current: '5 years', status: 'Active' }, { kpi: 'Unemployment insurance subscribers', current: '1M+', status: 'Exceeded' }] },
    { category: 'Labor & Productivity', kpis: [{ kpi: '4-day workweek productivity gain', current: '88%', status: 'Successful' }, { kpi: 'Job satisfaction increase', current: '90%', status: 'Successful' }] },
    { category: 'Nuclear Program', kpis: [{ kpi: 'Reactors operational', current: '4/4', status: 'Complete' }, { kpi: 'Total capacity', current: '5.6 GWe', status: 'Achieved' }, { kpi: 'Electricity share', current: '25%', status: 'Achieved' }] },
  ],
  summary: {
    totalPolicies: 23,
    dataPointsCount: 500,
  },
}

// ============================================================================
// HISTORICAL OVERVIEW - ALL ERAS COMBINED
// ============================================================================

export const historicalOverview: HistoricalEra[] = [
  preFederationData,
  federationEarlyData,
  postGulfWarData,
  rapidDevelopmentData,
  arabSpringData,
  modernizationVisionData,
  postPandemicExpoData,
  recentEraData,
  policyAnnouncementData,
]
