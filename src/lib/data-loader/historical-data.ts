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
  period: { start: 'Before 1971', end: '1971' },
  description:
    'The Pre-Federation Era encompasses the history of the Arabian Gulf sheikhdoms from the earliest British contacts (1820) through the formation of the Trucial States, and culminating in the December 2, 1971 formation of the United Arab Emirates. This era covers approximately 150 years of British protectorate relationships, traditional economies (pearling), early oil discoveries, and the personalities who would become the UAE\'s founding fathers.',
  keyEvents: [
    {
      date: '1820',
      title: 'General Maritime Treaty',
      description:
        'Britain organized its strongest naval force ever sent to the Gulf (3,000 fighting men in three ships). After fierce fighting, Ras al-Khaimah fell, and coastal towns surrendered. On the beach, British and Arab representatives signed the treaty establishing peace and ending piracy.',
      significance: 'critical',
    },
    {
      date: '1853',
      title: 'Perpetual Maritime Truce',
      description:
        'Prohibited sea aggression, overseen by the British political agent at Bushire. This established the term "trucial" - referring to states bound by treaty.',
      significance: 'critical',
    },
    {
      date: '1892',
      title: 'Exclusive Agreement',
      description:
        'A treaty signed March 5-14, 1892, between the British Empire and the rulers of the Trucial States. Rulers bound not to enter agreements with any Power other than Britain, not to allow residence of foreign agents without British permission, and not to cede territory except to Britain.',
      significance: 'critical',
    },
    {
      date: '1935',
      title: 'Oil Exploration Begins',
      description:
        'Anglo Persian geologist Peter Cox arrived in Abu Dhabi. January 1936: IPC option for Abu Dhabi for 7,000 rupees down + 3,000/month. January 1939: PDTC 75-year concession for entire territory granted.',
      entities: ['Peter Cox', 'IPC', 'PDTC'],
      significance: 'critical',
    },
    {
      date: '1958',
      title: 'First Oil Discovery',
      description:
        'ADMA struck oil at Umm Shaif offshore field at approximately 8,755 ft depth. This discovery marked a turning point in the country\'s history, transforming Abu Dhabi from a small fishing village to a wealthy emirate.',
      entities: ['ADMA', 'ADNOC'],
      significance: 'critical',
    },
    {
      date: '1966',
      title: 'Sheikh Zayed Becomes Ruler of Abu Dhabi',
      description:
        'Sheikh Zayed bin Sultan Al Nahyan became Ruler of Abu Dhabi on August 6, 1966 via bloodless palace coup, succeeding his brother Shakhbut.',
      entities: ['Sheikh Zayed bin Sultan Al Nahyan'],
      outcome: 'Enabled federation talks with Sheikh Rashid of Dubai',
      significance: 'critical',
    },
    {
      date: 'January 1968',
      title: 'British Withdrawal Announced',
      description:
        'Britain announced withdrawal from "east of Suez" following sterling devaluation and defense policy changes under Harold Wilson\'s Labour government.',
      significance: 'critical',
    },
    {
      date: 'February 18, 1968',
      title: 'Zayed-Rashid Desert Meeting',
      description:
        'Sheikh Zayed and Dubai\'s Sheikh Rashid met at Argoub Al Sedirah, a desert highland between Dubai and Abu Dhabi. They "met in a tent erected in the desert and talked for hours" and reached a handshake agreement establishing what became the UAE.',
      entities: ['Sheikh Zayed bin Sultan Al Nahyan', 'Sheikh Rashid bin Saeed Al Maktoum'],
      significance: 'critical',
    },
    {
      date: 'December 2, 1971',
      title: 'UAE Federation Formed',
      description:
        'Six emirates declared independence and formed the United Arab Emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Fujairah. Sheikh Zayed elected first President.',
      entities: ['Sheikh Zayed bin Sultan Al Nahyan', 'Sheikh Rashid bin Saeed Al Maktoum'],
      significance: 'critical',
    },
    {
      date: 'February 10, 1972',
      title: 'Ras Al Khaimah Joins Federation',
      description:
        'Ras Al Khaimah became the seventh emirate to join the UAE, completing the federation.',
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
      impact:
        'Formalized British protectorate status; restricted sovereign foreign relations',
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
    '1820: General Maritime Treaty - Start of British involvement',
    '1853: Perpetual Maritime Truce - "Trucial" status established',
    '1892: Exclusive Agreement - Formal protectorate',
    '1935-1958: Oil discovery transforms economy',
    '1966: Sheikh Zayed becomes Ruler of Abu Dhabi',
    'January 1968: British withdrawal announced',
    'February 1968: Zayed-Rashid federation handshake agreement',
    'December 2, 1971: UAE Federation declared',
    'February 10, 1972: Ras Al Khaimah joins completing federation',
  ],
  credibility: createCredibilityScore(1, 85, 24, '2026-04-28'),
  sources: [
    createSourceReference('Wikipedia - Foundation of UAE', 1, '2026-04-27'),
    createSourceReference('Wikipedia - History of UAE', 1, '2026-04-27'),
    createSourceReference('UAE Government Portal', 0, '2026-04-28'),
    createSourceReference('Saudi Aramco World', 1, '2026-04-27'),
    createSourceReference('GeoExpro - Oil Discoveries', 1, '2026-04-27'),
    createSourceReference('US State Department Historical Documents', 0, '2026-04-27'),
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// ERA 2: FEDERATION & EARLY YEARS (1971-1990)
// ============================================================================

export const federationEarlyData: HistoricalEra = {
  id: 'hist-8-2',
  era: 'Federation & Early Years',
  period: { start: '1971', end: '1990' },
  description:
    'The Federation & Early Years period saw the UAE establish itself as a nation-state, with Sheikh Zayed as its founding father guiding nation-building. The era encompassed international memberships (UN, Arab League, OPEC), border disputes (Iranian islands occupation, Buraimi resolution), infrastructure development, and the creation of key federal institutions. Jebel Ali Port and Free Zone emerged as economic engines.',
  keyEvents: [
    {
      date: 'December 2, 1971',
      title: 'UAE Federation Formation',
      description:
        'Six emirates declared independence and formed the UAE at Union House, Dubai. Sheikh Zayed elected first President; Sheikh Rashid Vice President.',
      entities: ['Sheikh Zayed bin Sultan Al Nahyan', 'Sheikh Rashid bin Saeed Al Maktoum'],
      outcome: 'Established the United Arab Emirates as a sovereign nation',
      significance: 'critical',
    },
    {
      date: 'December 9, 1971',
      title: 'UN Membership',
      description:
        'UAE became the 132nd UN member state. Security Council and General Assembly both approved membership.',
      entities: ['United Nations'],
      outcome: 'International recognition as sovereign state',
      significance: 'critical',
    },
    {
      date: 'November 30, 1971',
      title: 'Iran Seizes Abu Musa and Tunb Islands',
      description:
        'Iran occupied Abu Musa and the Greater and Lesser Tunb islands from Ras Al Khaimah and Sharjah two days before UAE formation. Three police were killed.',
      entities: ['Iran', 'Sheikh Saqr bin Mohammed Al Qasimi'],
      outcome: 'Ongoing territorial dispute; UAE brought matter to UN Security Council December 9, 1971',
      significance: 'critical',
    },
    {
      date: 'February 10, 1972',
      title: 'Ras Al Khaimah Joins Federation',
      description:
        'Ras Al Khaimah became the seventh emirate to join the UAE, completing the seven-emirate federation.',
      entities: ['Sheikh Saqr bin Mohammed Al Qasimi'],
      significance: 'major',
    },
    {
      date: 'August 21, 1974',
      title: 'Treaty of Jeddah',
      description:
        'Sheikh Zayed and King Faisal signed treaty delimiting Saudi-UAE border. Saudi Arabia received Shaybah oilfield and access to lower Gulf; UAE received Saudi recognition of sovereignty.',
      entities: ['Sheikh Zayed bin Sultan Al Nahyan', 'King Faisal'],
      outcome: 'Resolved Buraimi dispute; border delimitation with Saudi Arabia',
      significance: 'major',
    },
    {
      date: 'May 25, 1981',
      title: 'GCC Founded',
      description:
        'Gulf Cooperation Council founded in Abu Dhabi by Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, and UAE. Primary catalyst was Iran-Iraq War and 1979 Iranian Revolution.',
      entities: ['GCC'],
      outcome: 'Regional security framework established',
      significance: 'critical',
    },
    {
      date: '1985',
      title: 'Peninsula Shield Force Established',
      description:
        'GCC established unified military force for collective defense.',
      entities: ['GCC', 'Peninsula Shield Force'],
      significance: 'major',
    },
    {
      date: '1979',
      title: 'Jebel Ali Port Opens',
      description:
        'Port officially opened; Queen Elizabeth II presided over opening February 1980. Cost approximately $2.5 billion with 67 berths.',
      entities: ['Dubai', 'Jebel Ali'],
      outcome: 'World\'s largest man-made harbour; regional trade hub',
      significance: 'critical',
    },
    {
      date: '1985',
      title: 'JAFZA Established',
      description:
        'Jebel Ali Free Zone Authority established. Initial 19 companies grew to 11,000+ by 2025.',
      entities: ['DP World', 'JAFZA'],
      outcome: 'Major free zone driving economic diversification',
      significance: 'critical',
    },
  ],
  policyOutcomes: [
    {
      policy: 'UAE Constitution',
      year: '1971',
      impact:
        'Provisional constitution signed July 18, 1971; became permanent May 1996. 152 Articles establishing federal structure.',
      successors: ['Federal National Council establishment'],
    },
    {
      policy: 'UN Membership',
      year: '1971',
      impact: 'International recognition; 132nd UN member state',
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
      impact: 'Regional security cooperation framework',
      successors: ['Peninsula Shield Force 1985', 'Customs Union 2003'],
    },
    {
      policy: 'Treaty of Jeddah',
      year: '1974',
      impact: 'Border delimitation with Saudi Arabia; Buraimi dispute resolution',
    },
  ],
  entityInvolvement: [
    'Sheikh Zayed bin Sultan Al Nahyan',
    'Sheikh Rashid bin Saeed Al Maktoum',
    'Sheikh Saqr bin Mohammed Al Qasimi',
    'King Faisal (Saudi Arabia)',
    'GCC',
    'United Nations',
    'Arab League',
    'OPEC',
    'JAFZA',
    'DP World',
  ],
  nationBuildingMilestones: [
    '1971: UAE Federation formed - 6 emirates',
    '1971: UN and Arab League membership achieved',
    '1971: Flag raised at Union House December 2',
    '1972: Ras Al Khaimah joins - complete federation',
    '1974: Treaty of Jeddah - Saudi border resolved',
    '1976: Abu Dhabi Investment Authority (ADIA) founded',
    '1981: GCC founded for regional security',
    '1985: Peninsula Shield Force established',
    '1979: Jebel Ali Port opens',
    '1985: JAFZA established - free zone powerhouse',
  ],
  credibility: createCredibilityScore(1, 88, 35, '2026-04-28'),
  sources: [
    createSourceReference('Wikipedia - Foundation of UAE', 1, '2026-04-27'),
    createSourceReference('Wikipedia - UAE Constitution', 1, '2026-04-27'),
    createSourceReference('Wikipedia - GCC', 1, '2026-04-27'),
    createSourceReference('Wikipedia - Zayed bin Sultan', 1, '2026-04-27'),
    createSourceReference('Wikipedia - Jebel Ali Free Zone', 1, '2026-04-27'),
    createSourceReference('UAE Government Portal', 0, '2026-04-28'),
    createSourceReference('OPEC Official', 0, '2026-04-27'),
    createSourceReference('JAFZA Official', 0, '2026-04-28'),
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
    'The UAE\'s Rapid Development Era represents one of the most dramatic economic transformations in modern history. Dubai led an unprecedented construction boom creating iconic landmarks including the Burj Khalifa and Palm Jumeirah, while Abu Dhabi provided critical financial support during the 2008-2009 global financial crisis. The period saw UAE GDP grow substantially before the Dubai World debt crisis triggered a severe but temporary correction.',
  keyEvents: [
    {
      date: 'June 2001',
      title: 'Palm Jumeirah Construction Begins',
      description:
        'World\'s largest artificial island construction started. Used 94 million cubic meters of sand and 7 million tons of rock from Hajar Mountains.',
      entities: ['Nakheel', 'Dubai'],
      outcome: 'Iconic landmark and real estate development',
      significance: 'major',
    },
    {
      date: '2003',
      title: 'UAE Invasion of Iraq Support',
      description:
        'UAE provided $215 million in economic/reconstruction assistance. Almost $7 billion in Iraqi debt cancelled. Among top 12 financial sponsors of Iraqi Governing Council.',
      entities: ['UAE', 'United States', 'Iraq'],
      outcome: 'Regional leadership role; US alliance strengthened',
      significance: 'major',
    },
    {
      date: 'November 2009',
      title: 'Dubai World Debt Crisis',
      description:
        'Dubai World requested restructuring of $26 billion in debts. Total liabilities nearly $60 billion.',
      entities: ['Dubai World', 'Nakheel'],
      outcome: 'Global market turbulence; investor confidence shaken',
      significance: 'critical',
    },
    {
      date: 'December 2009',
      title: 'Abu Dhabi Bailout of Dubai',
      description:
        'Abu Dhabi provided $10 billion initial bailout through Investment Authority. Total support package $20 billion.',
      entities: ['Abu Dhabi', 'Dubai', 'ADIA'],
      outcome: 'Dubai World debt restructuring; Nakheel sukuk payments enabled',
      significance: 'critical',
    },
    {
      date: 'January 2004',
      title: 'Burj Khalifa Construction Begins',
      description:
        'World\'s tallest building construction started. 828m height, 154 floors, $1.5 billion cost.',
      entities: ['Emaar', 'Samsung C&T', 'BESIX', 'Arabtec'],
      outcome: 'Global architectural landmark; Dubai icon',
      significance: 'major',
    },
    {
      date: 'September 2009',
      title: 'Dubai Metro Opens',
      description:
        'First urban metro in Gulf Arab states. $4.2 billion project, 75 km with 47 stations.',
      entities: ['Dubai RTA'],
      outcome: 'Revolutionary urban transport; regional first',
      significance: 'major',
    },
    {
      date: '2008',
      title: 'Dubai International Airport Terminal 3 Opens',
      description:
        'World\'s largest single terminal at opening. 60 million passenger capacity (initially). Exclusively for Emirates airline.',
      entities: ['Emirates', 'Dubai Airports'],
      outcome: 'Major aviation hub expansion',
      significance: 'major',
    },
    {
      date: 'February 2006',
      title: 'du Launches - Etisalat Monopoly Ends',
      description:
        'Emirates Integrated Telecommunications (du) received license, breaking Etisalat\'s 30-year monopoly.',
      entities: ['du', 'Etisalat', 'TRA'],
      outcome: 'Telecom sector competition; improved services',
      significance: 'minor',
    },
  ],
  policyOutcomes: [
    {
      policy: 'Economic Diversification',
      year: '2000-2010',
      impact: 'Massive infrastructure investment; tourism and trade hubs established',
      successors: ['Vision 2021', 'Diversification continues'],
    },
    {
      policy: 'Dubai World Debt Restructuring',
      year: '2009',
      impact: 'Market correction; inter-emirate solidarity demonstrated via Abu Dhabi bailout',
    },
    {
      policy: 'UAE Telecom Liberalization',
      year: '2006',
      impact: 'Competition introduced; du market entry',
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
    'ADIA',
    'GCC',
  ],
  nationBuildingMilestones: [
    '2001: Palm Jumeirah construction begins',
    '2003: UAE supports Iraq War - $215M assistance',
    '2004: Burj Khalifa construction begins',
    '2006: du launches - telecom monopoly broken',
    '2008: Dubai Metro opens',
    '2008: Terminal 3 Dubai Airport opens',
    'November 2009: Dubai World debt crisis emerges',
    'December 2009: Abu Dhabi provides $10B bailout',
    '2010: Burj Khalifa opens - world\'s tallest building',
  ],
  credibility: createCredibilityScore(1, 85, 25, '2026-04-28'),
  sources: [
    createSourceReference('Wikipedia - Dubai housing crash', 1, '2026-04-27'),
    createSourceReference('Wikipedia - Burj Khalifa', 1, '2026-04-27'),
    createSourceReference('CNBC', 2, '2026-04-27'),
    createSourceReference('Harvard Business School', 1, '2026-04-27'),
    createSourceReference('The National', 1, '2026-04-27'),
    createSourceReference('Gulf News', 2, '2026-04-27'),
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// ERA 5: ARAB SPRING PERIOD (2010-2015)
// ============================================================================

export const arabSpringData: HistoricalEra = {
  id: 'hist-8-5',
  era: 'Arab Spring',
  period: { start: '2010', end: '2015' },
  description:
    'The Arab Spring was a wave of pro-democracy protests and uprisings that swept through the Middle East and North Africa beginning in late 2010. For the UAE, the period involved GCC intervention in Bahrain, regional stability concerns, and defensive posture against potential spillover effects. Unlike Tunisia, Egypt, Libya, and Syria, the UAE did not experience major regime change.',
  keyEvents: [
    {
      date: 'December 17, 2010',
      title: 'Bouazizi Self-Immolation - Spark',
      description:
        'Mohamed Bouazizi self-immolated in Tunisia, sparking regional protests. The event catalyzed the Arab Spring across North Africa and Middle East.',
      entities: ['Mohamed Bouazizi', 'Tunisia'],
      significance: 'critical',
    },
    {
      date: 'February-March 2011',
      title: 'GCC Intervention in Bahrain',
      description:
        'Saudi Arabia deployed ~1,000 soldiers and UAE deployed 500 police officers to Bahrain to support the monarchy against protests.',
      entities: ['GCC', 'Saudi Arabia', 'UAE', 'Bahrain'],
      outcome: 'Bahrain protests suppressed; UAE demonstrates regional leadership',
      significance: 'critical',
    },
    {
      date: '2011-2012',
      title: 'Regional Uprisings',
      description:
        'UAE remained stable due to oil wealth and hereditary leadership. Positioned as stable business hub during regional turmoil.',
      entities: ['UAE', 'Egypt', 'Libya', 'Syria', 'Yemen'],
      outcome: 'Dubai benefited as business shifted during regional instability',
      significance: 'major',
    },
    {
      date: 'July 2013',
      title: 'UAE94 Trial',
      description:
        'Mass trial concluded with 69 men convicted for allegedly plotting to overthrow the UAE government. Widespread criticism from Amnesty International and Human Rights Watch for fair trial violations.',
      entities: ['UAE', 'Amnesty International', 'Human Rights Watch'],
      outcome: 'International criticism of human rights practices',
      significance: 'major',
    },
  ],
  policyOutcomes: [
    {
      policy: 'GCC Security Coordination',
      year: '2011',
      impact: 'Enhanced collective security response capability demonstrated',
      successors: ['Continued GCC cooperation'],
    },
    {
      policy: 'Bahrain Support Operations',
      year: '2011',
      impact: 'UAE demonstrates regional security leadership; 500 police deployed',
    },
    {
      policy: 'Internal Security Measures',
      year: '2011-2013',
      impact: 'Enhanced surveillance and control measures following regional protests',
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
    'Amnesty International',
    'Human Rights Watch',
  ],
  nationBuildingMilestones: [
    '2011: UAE deploys 500 police to Bahrain as part of GCC intervention',
    '2011-2012: Regional Arab Spring - UAE maintains stability',
    '2011: Dubai benefits as regional business hub during turmoil',
    '2012: UAE positions as stable business/tourism destination',
    '2013: UAE94 mass trial - international criticism',
  ],
  credibility: createCredibilityScore(1, 80, 12, '2026-04-28'),
  sources: [
    createSourceReference('Wikipedia - Arab Spring', 1, '2026-04-27'),
    createSourceReference('Council on Foreign Relations', 0, '2026-04-27'),
    createSourceReference('Amnesty International', 0, '2026-04-27'),
    createSourceReference('Brookings Institution', 1, '2026-04-27'),
    createSourceReference('Al Jazeera', 1, '2026-04-27'),
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
// ERA 8: RECENT ERA (2023-2026)
// ============================================================================

export const recentEraData: HistoricalEra = {
  id: 'hist-8-8',
  era: 'Recent Era',
  period: { start: '2023', end: '2026' },
  description:
    'The Recent Era encompasses UAE\'s rise as a global power through BRICS membership, major infrastructure projects like Etihad Rail, technological innovation, and climate leadership. The period also saw significant policy reforms including corporate tax, golden visa expansions, and ambitious infrastructure projects. The April 2024 flood crisis tested emergency response capabilities.',
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
      date: 'September 2024',
      title: 'US Major Defense Partner',
      description:
        'UAE became second country after India to be designated "major defense partner" by US.',
      entities: ['UAE', 'United States'],
      outcome: 'Enhanced defense cooperation; strategic alliance deepened',
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
  ],
  policyOutcomes: [
    {
      policy: 'Corporate Tax',
      year: '2023',
      impact: '9% rate effective; AED 375K threshold',
    },
    {
      policy: 'UAE Corporate Tax',
      year: '2024',
      impact: 'Fatf gray list removed February 2024',
    },
    {
      policy: 'BRICS Membership',
      year: '2024',
      impact: 'Strategic diversification; emerging markets alignment',
    },
  ],
  entityInvolvement: [
    'Sheikh Mohamed bin Zayed Al Nahyan',
    'Sheikh Mohammed bin Rashid Al Maktoum',
    'BRICS',
    'United States',
    'Etihad Rail',
    'UAE Government',
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
  ],
  credibility: createCredibilityScore(0, 88, 30, '2026-04-28'),
  sources: [
    createSourceReference('UAE Ministry of Foreign Affairs', 0, '2026-04-28'),
    createSourceReference('UAE Government Portal', 0, '2026-04-28'),
    createSourceReference('Wikipedia - BRICS', 1, '2026-04-27'),
    createSourceReference('Wikipedia - UAE 2024', 1, '2026-04-27'),
    createSourceReference('UNFCCC Official', 0, '2026-04-28'),
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// ERA 9: EVENT-SPECIFIC HISTORICAL DEEP DIVES
// ============================================================================

export const eventHistoricalData: HistoricalEra = {
  id: 'hist-8-9',
  era: 'Event-Specific Historical Deep Dives',
  period: { start: '1971', end: '2026' },
  description:
    'This era provides in-depth analysis of major historical events that shaped the UAE including the Buraimi dispute, Iranian island occupation, Dubai debt crisis, and the UAE\'s response to the Arab Spring. These events are analyzed through multiple lenses including entity involvement, sentiment analysis, and policy outcomes.',
  keyEvents: [
    {
      date: '1949-1974',
      title: 'Buraimi Dispute',
      description:
        'Territorial conflict over Buraimi Oasis between Saudi Arabia and Trucial States/Abu Dhabi. 80 Saudi guards occupied Hamasa in 1952. Resolved by 1974 Treaty of Jeddah.',
      entities: [
        'Saudi Arabia',
        'Abu Dhabi',
        'Sheikh Zayed bin Sultan Al Nahyan',
        'Trucial Oman Scouts',
      ],
      outcome: 'Border delimitation with Saudi Arabia',
      significance: 'major',
    },
    {
      date: 'November 30, 1971',
      title: 'Iranian Island Seizure',
      description:
        'Iran occupied Abu Musa, Greater Tunb, and Lesser Tunb two days before UAE formation. Three police killed. UAE brought matter to UN Security Council December 9, 1971.',
      entities: ['Iran', 'Sheikh Saqr bin Mohammed Al Qasimi', 'United Nations'],
      outcome: 'Ongoing territorial dispute; peaceful resolution pursued',
      significance: 'critical',
    },
    {
      date: '2009-2010',
      title: 'Dubai Debt Crisis',
      description:
        'Dubai World requested $26B debt restructuring. Abu Dhabi provided $10B bailout. Total liabilities nearly $60B.',
      entities: ['Dubai World', 'Nakheel', 'Abu Dhabi', 'ADIA'],
      outcome: 'Inter-emirate solidarity demonstrated; market correction',
      significance: 'critical',
    },
    {
      date: '2011',
      title: 'GCC Intervention in Bahrain',
      description:
        'UAE deployed 500 police as part of GCC force supporting Bahrain monarchy against protests. Saudi Arabia deployed 1,000 soldiers.',
      entities: ['UAE', 'GCC', 'Saudi Arabia', 'Bahrain'],
      outcome: 'Regional security leadership demonstrated',
      significance: 'major',
    },
  ],
  policyOutcomes: [
    {
      policy: 'Treaty of Jeddah (Buraimi Resolution)',
      year: '1974',
      impact: 'Saudi-UAE border formally delimited',
    },
    {
      policy: 'UN Security Council Complaint (Iranian Islands)',
      year: '1971',
      impact: 'International attention to territorial dispute; ongoing diplomatic efforts',
    },
    {
      policy: 'Abu Dhabi Dubai Bailout',
      year: '2009',
      impact: 'Federal solidarity; market stabilization',
    },
    {
      policy: 'GCC Bahrain Intervention',
      year: '2011',
      impact: 'Collective security action',
    },
  ],
  entityInvolvement: [
    'Sheikh Zayed bin Sultan Al Nahyan',
    'Sheikh Saqr bin Mohammed Al Qasimi',
    'Iran',
    'Saudi Arabia',
    'Bahrain',
    'GCC',
    'United Nations',
    'ICJ',
  ],
  nationBuildingMilestones: [
    '1949-1955: Buraimi Dispute peak - Saudi occupation',
    'October 1955: British forces (Trucial Oman Scouts) expel Saudis',
    '1974: Treaty of Jeddah resolves Buraimi/Border issues',
    'November 1971: Iran seizes Abu Musa and Tunb islands',
    'December 1971: UAE raises islands issue at UN Security Council',
    '2009-2010: Dubai debt crisis and Abu Dhabi bailout',
    '2011: UAE participation in GCC Bahrain intervention',
  ],
  credibility: createCredibilityScore(1, 85, 20, '2026-04-28'),
  sources: [
    createSourceReference('Wikipedia - Foundation of UAE', 1, '2026-04-27'),
    createSourceReference('US State Department Historical Documents', 0, '2026-04-27'),
    createSourceReference('UAE Embassy', 0, '2026-04-27'),
    createSourceReference('Wikipedia - Dubai housing crash', 1, '2026-04-27'),
    createSourceReference('Wikipedia - Arab Spring', 1, '2026-04-27'),
  ],
  lastUpdated: '2026-04-28',
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
    {
      date: '2010',
      title: 'Vision 2021 Launch',
      description:
        'Sheikh Mohammed bin Rashid Al Maktoum launched Vision 2021 targeting making UAE "one of the best countries in the world" by 2021 Golden Jubilee.',
      entities: ['Sheikh Mohammed bin Rashid Al Maktoum'],
      outcome: 'National strategic framework; 52 NKPIs established',
      significance: 'critical',
    },
    {
      date: 'January 2014',
      title: 'National Agenda Launch',
      description:
        'Seven-year plan launched with six national priorities. Over 300 officials from 90 government entities contributed.',
      entities: ['UAE Cabinet'],
      outcome: 'Implementation framework for Vision 2021',
      significance: 'major',
    },
    {
      date: 'March 2017',
      title: 'UAE Centennial 2071',
      description:
        'Sheikh Mohammed bin Rashid launched 50-year plan with AED 600 billion investment target. Objective: make UAE best country in world by 2071.',
      entities: ['Sheikh Mohammed bin Rashid Al Maktoum'],
      outcome: 'Long-term national vision extending Vision 2021',
      significance: 'critical',
    },
    {
      date: 'November 2012',
      title: 'Cybercrime Law Established',
      description:
        'Federal Legal Decree No. 5/2012 established cybercrime penalties including up to AED 1M fines and life imprisonment for certain offenses. Criticized by Human Rights Watch.',
      entities: ['President Sheikh Khalifa bin Zayed Al Nahyan'],
      outcome: 'Digital security framework; civil liberties concerns',
      significance: 'major',
    },
    {
      date: 'July 2015',
      title: 'Anti-Discrimination Law',
      description:
        'Federal Decree Law No. 2 of 2015 criminalized discrimination on grounds of religion, caste, color, ethnic origin, creed or race. Penalties: 6 months to 10 years imprisonment and/or AED 50,000 to AED 2 million fines.',
      entities: ['UAE Government'],
      outcome: 'Social cohesion framework; criticized for blasphemy provisions',
      significance: 'major',
    },
    {
      date: '2019',
      title: 'Golden Visa Program',
      description:
        '10-year renewable visa for investors and special talent. AED 10 million property or AED 2 million business investment threshold.',
      entities: ['UAE Government', 'ICP'],
      outcome: 'Talent attraction; economic diversification support',
      significance: 'critical',
    },
    {
      date: 'June 2023',
      title: 'Corporate Tax Introduced',
      description:
        'Federal Decree-Law No. 47 of 2023 introduced 9% corporate tax on profits exceeding AED 375,000.',
      entities: ['Federal Tax Authority'],
      outcome: 'Revenue diversification; OECD tax framework alignment',
      significance: 'critical',
    },
    {
      date: 'October 2021',
      title: 'Net Zero 2050 Commitment',
      description:
        'UAE committed to Net Zero by 2050 - first MENA nation with formal net-zero target. AED 600 billion investment planned.',
      entities: ['UAE Government'],
      outcome: 'Climate leadership; sustainability commitment',
      significance: 'critical',
    },
  ],
  policyOutcomes: [
    {
      policy: 'Vision 2021',
      year: '2010',
      impact: 'National strategic framework; 52 NKPIs across 6 priorities',
      successors: ['Centennial 2071'],
    },
    {
      policy: 'National Agenda',
      year: '2014',
      impact: 'Implementation vehicle for Vision 2021',
    },
    {
      policy: 'Centennial 2071',
      year: '2017',
      impact: 'AED 600B investment; 50-year national vision',
    },
    {
      policy: 'Golden Visa Program',
      year: '2019',
      impact: 'Talent attraction; real estate and business investment boost',
    },
    {
      policy: 'Corporate Tax',
      year: '2023',
      impact: 'Revenue diversification; AED 375K threshold',
    },
    {
      policy: 'Net Zero 2050',
      year: '2021',
      impact: 'MENA first net-zero commitment; AED 600B climate investment',
    },
  ],
  entityInvolvement: [
    'Sheikh Mohammed bin Rashid Al Maktoum',
    'Sheikh Khalifa bin Zayed Al Nahyan',
    'UAE Cabinet',
    'Federal Tax Authority',
    'ICP',
    'UAE Government',
  ],
  nationBuildingMilestones: [
    '2010: Vision 2021 launched',
    '2014: National Agenda - implementation framework',
    '2017: Centennial 2071 - 50-year vision',
    '2012: Cybercrime Law - digital security',
    '2015: Anti-Discrimination Law - social cohesion',
    '2019: Golden Visa - talent attraction',
    '2023: Corporate Tax - 9% rate',
    '2021: Net Zero 2050 - climate leadership',
  ],
  credibility: createCredibilityScore(0, 90, 35, '2026-04-28'),
  sources: [
    createSourceReference('UAE Government Portal', 0, '2026-04-28'),
    createSourceReference('Wikipedia - Vision 2021', 1, '2026-04-27'),
    createSourceReference('Human Rights Watch', 0, '2026-04-27'),
    createSourceReference('KPMG', 1, '2026-04-27'),
    createSourceReference('OECD.AI', 1, '2026-04-27'),
    createSourceReference('World Nuclear Association', 1, '2026-04-27'),
  ],
  lastUpdated: '2026-04-28',
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
  eventHistoricalData,
  policyAnnouncementData,
]
