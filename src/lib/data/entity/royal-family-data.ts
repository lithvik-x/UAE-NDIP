// @ts-nocheck
/**
 * UAE Royal Family Intelligence Data
 * Comprehensive data for all 7 Emirates ruling families
 * Source: 1-2-royal-family-results.md
 */

export interface RoyalFamilyMember {
  id: string
  name: string
  nameAr?: string
  role: string
  emirate: string
  dynasty: string
  age?: number
  born?: string
  died?: string
  since?: string
  tier: number
  uaeRelevance: number
  sentiment: 'OVERWHELMINGLY_POSITIVE' | 'POSITIVE' | 'MIXED' | 'NEGATIVE' | 'NEUTRAL'
  alertLevel: 'GREEN' | 'YELLOW' | 'ORANGE' | 'RED'
  spouse?: string
  children?: string
  education?: string[]
  positions?: { position: string; organization?: string; since?: string }[]
  achievements?: string[]
  controversies?: { year: string; detail: string }[]
  wealth?: { metric: string; amount: string }[]
  honours?: { year: string; honour: string; country?: string }[]
  sources?: string[]
  lastUpdated: string
  description: string
  keyFindings: string[]
}

export interface RulerData {
  emirate: string
  ruler: string
  dynasty: string
  age: number
  since: string
}

export interface CrownPrinceData {
  emirate: string
  crownPrince: string
  age: number
  since: string
}

export interface WealthMetric {
  entity: string
  amount: string
  source: string
}

export interface EmirateOverview {
  emirate: string
  dynasty: string
  currentRuler: string
  age: number
  since: string
  crownPrince: string
  crownPrinceAge: number
  crownPrinceSince: string
  sentiment: string
  keyAchievements: string[]
}

// ============================================================================
// EMIRATE OVERVIEWS
// ============================================================================

export const emirateOverviews: EmirateOverview[] = [
  {
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan (branch of Al Falahi)',
    currentRuler: 'Sheikh Mohamed bin Zayed Al Nahyan',
    age: 65,
    since: '2022 (President)',
    crownPrince: 'Sheikh Khaled bin Mohamed Al Nahyan',
    crownPrinceAge: 44,
    crownPrinceSince: '2023',
    sentiment: 'Positive',
    keyAchievements: [
      'First nuclear power plant in Arab world (Barakah)',
      'Masdar renewable energy initiative (2006)',
      'Abraham Accords architect (2020)',
      'Ghadan 21 economic stimulus (AED 50 billion, 2018)',
    ],
  },
  {
    emirate: 'Dubai',
    dynasty: 'Al Maktoum (branch of Al Falasi)',
    currentRuler: 'Sheikh Mohammed bin Rashid Al Maktoum',
    age: 76,
    since: '2006 (Ruler)',
    crownPrince: 'Sheikh Hamdan bin Mohammed Al Maktoum',
    crownPrinceAge: 43,
    crownPrinceSince: '2008',
    sentiment: 'Mixed',
    keyAchievements: [
      'Emirates Mars Mission (Hope) - successful 2021',
      'Burj Khalifa and Palm Islands',
      'Dubai Internet City and TECOM',
      'World Cup (world\'s richest horserace)',
    ],
  },
  {
    emirate: 'Sharjah',
    dynasty: 'Al Qasimi',
    currentRuler: 'Sheikh Sultan bin Muhammad Al Qasimi',
    age: 86,
    since: '1972',
    crownPrince: 'Sheikh Sultan bin Ahmed Al Qasimi (Deputy Ruler)',
    crownPrinceAge: 52,
    crownPrinceSince: '2021',
    sentiment: 'Positive',
    keyAchievements: [
      'University of Sharjah (1997)',
      'American University of Sharjah (1997)',
      '82+ books authored by the ruler',
      'Al Hisn Fort restoration',
    ],
  },
  {
    emirate: 'Ras Al Khaimah',
    dynasty: 'Al Qasimi (branch)',
    currentRuler: 'Sheikh Saud bin Saqr Al Qasimi',
    age: 70,
    since: '2010',
    crownPrince: 'Sheikh Mohammed bin Saud Al Qasimi',
    crownPrinceAge: 39,
    crownPrinceSince: '2010',
    sentiment: 'Positive',
    keyAchievements: [
      'RAK Ceramics - world\'s largest ceramics producer',
      'GDP per capita: AED 35,000 (2001) to AED 118,621 (2025)',
      'American University of Ras Al Khaimah (AURAK)',
      'Reduced government debt to 10.4% by 2022',
    ],
  },
  {
    emirate: 'Ajman',
    dynasty: 'Al Nuaimi',
    currentRuler: 'Sheikh Humaid bin Rashid Al Nuaimi III',
    age: 95,
    since: '1981',
    crownPrince: 'Sheikh Ammar bin Humaid Al Nuaimi',
    crownPrinceAge: 56,
    crownPrinceSince: '2003',
    sentiment: 'Positive',
    keyAchievements: [
      'Modernization of Ajman infrastructure',
      'Ajman Bank establishment',
      'Ajman Stud horse breeding',
      'Humanitarian foundations',
    ],
  },
  {
    emirate: 'Umm Al Quwain',
    dynasty: 'Al Mualla',
    currentRuler: 'Sheikh Saud bin Rashid Al Mualla',
    age: 73,
    since: 'Father\'s death',
    crownPrince: 'Sheikh Rashid bin Saud Al Mualla',
    crownPrinceAge: 0,
    crownPrinceSince: '2009',
    sentiment: 'Positive',
    keyAchievements: [
      'Continuity of Al Mualla dynasty',
      'Development of tourism sector',
      'Umm Al Quwain National Guard',
    ],
  },
  {
    emirate: 'Fujairah',
    dynasty: 'Al Sharqi',
    currentRuler: 'Sheikh Hamad bin Mohammed Al Sharqi',
    age: 77,
    since: '1974',
    crownPrince: 'Sheikh Mohammed bin Hamad Al Sharqi',
    crownPrinceAge: 40,
    crownPrinceSince: '2007',
    sentiment: 'Positive',
    keyAchievements: [
      'Longest-serving current UAE ruler (50+ years in federal role)',
      'Strong international diplomatic presence',
      'Family connections across three royal families',
    ],
  },
]

// ============================================================================
// CURRENT RULERS
// ============================================================================

export const currentRulers: RulerData[] = [
  { emirate: 'Abu Dhabi', ruler: 'Sheikh Mohamed bin Zayed Al Nahyan', dynasty: 'Al Nahyan', age: 65, since: '2022 (President)' },
  { emirate: 'Dubai', ruler: 'Sheikh Mohammed bin Rashid Al Maktoum', dynasty: 'Al Maktoum', age: 76, since: '2006 (Ruler)' },
  { emirate: 'Sharjah', ruler: 'Sheikh Sultan bin Muhammad Al Qasimi', dynasty: 'Al Qasimi', age: 86, since: '1972' },
  { emirate: 'Ras Al Khaimah', ruler: 'Sheikh Saud bin Saqr Al Qasimi', dynasty: 'Al Qasimi', age: 70, since: '2010' },
  { emirate: 'Ajman', ruler: 'Sheikh Humaid bin Rashid Al Nuaimi III', dynasty: 'Al Nuaimi', age: 95, since: '1981' },
  { emirate: 'Umm Al Quwain', ruler: 'Sheikh Saud bin Rashid Al Mualla', dynasty: 'Al Mualla', age: 73, since: 'Father died' },
  { emirate: 'Fujairah', ruler: 'Sheikh Hamad bin Mohammed Al Sharqi', dynasty: 'Al Sharqi', age: 77, since: '1974' },
]

// ============================================================================
// CROWN PRINCES
// ============================================================================

export const crownPrinces: CrownPrinceData[] = [
  { emirate: 'Abu Dhabi', crownPrince: 'Sheikh Khaled bin Mohamed Al Nahyan', age: 44, since: '2023' },
  { emirate: 'Dubai', crownPrince: 'Sheikh Hamdan bin Mohammed Al Maktoum', age: 43, since: '2008' },
  { emirate: 'Sharjah', crownPrince: 'Sheikh Sultan bin Ahmed Al Qasimi (Deputy Ruler)', age: 52, since: '2021' },
  { emirate: 'Ras Al Khaimah', crownPrince: 'Sheikh Mohammed bin Saud Al Qasimi', age: 39, since: '2010' },
  { emirate: 'Ajman', crownPrince: 'Sheikh Ammar bin Humaid Al Nuaimi', age: 56, since: '2003' },
  { emirate: 'Umm Al Quwain', crownPrince: 'Sheikh Rashid bin Saud Al Mualla', age: 0, since: '2009' },
  { emirate: 'Fujairah', crownPrince: 'Sheikh Mohammed bin Hamad Al Sharqi', age: 40, since: '2007' },
]

// ============================================================================
// WEALTH METRICS
// ============================================================================

export const wealthMetrics: WealthMetric[] = [
  { entity: 'Abu Dhabi Investment Authority (ADIA)', amount: '$790 billion+', source: 'Wikipedia' },
  { entity: 'Total Al Nahyan family assets', amount: '$1 trillion+', source: 'Bloomberg 2024' },
  { entity: 'Bloomberg Rich Family Rank (2024)', amount: '#2 in World', source: 'Bloomberg' },
  { entity: 'Mansour Africa investments', amount: '$110 billion', source: 'Wikipedia' },
  { entity: 'Mansour renewable energy (2019-2023)', amount: '$72 billion', source: 'Wikipedia' },
  { entity: 'Ghadan 21 economic stimulus', amount: 'AED 50 billion', source: 'Wikipedia' },
  { entity: 'ADQ (Abu Dhabi Developmental Holding)', amount: '$110 billion', source: 'Wikipedia' },
  { entity: 'Tahnoon business portfolio', amount: '$1.3 trillion', source: 'Wikipedia' },
]

// ============================================================================
// FAMILY MEMBERS BY EMIRATE
// ============================================================================

export const royalFamilyData: RoyalFamilyMember[] = [
  // =========================================================================
  // ABU DHABI — AL NAHYAN FAMILY
  // =========================================================================
  {
    id: 'mbz',
    name: 'Sheikh Mohamed bin Zayed Al Nahyan',
    nameAr: 'محمد بن زايد آل نهيان',
    role: 'President of UAE',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    age: 65,
    born: 'March 11, 1961',
    tier: 0,
    uaeRelevance: 10,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Salama bint Hamdan Al Nahyan (married 1980)',
    children: '9 (4 sons, 5 daughters) + 2 adopted daughters (Amina, Salha)',
    education: [
      'Royal Military Academy Sandhurst (1979)',
      'UAE Armed Forces training',
      'US Military contacts',
    ],
    positions: [
      { position: 'Chief of Staff of UAE Armed Forces', since: '1993-2005' },
      { position: 'Crown Prince of Abu Dhabi', since: '2004' },
      { position: 'Chairman of Abu Dhabi Executive Council', since: '2004' },
      { position: 'Deputy Supreme Commander of UAE Armed Forces', since: '2005' },
      { position: 'Emir of Abu Dhabi', since: '2022' },
      { position: 'President of UAE', since: 'May 14, 2022' },
    ],
    achievements: [
      'Led UAE "Little Sparta" military buildup',
      'First nuclear power plant in Arab world (Barakah)',
      'Key architect of Abraham Accords (2020)',
      'Established Masdar renewable energy (2006)',
      'Ghadan 21 Program - AED 50 billion economic stimulus (2018)',
    ],
    controversies: [
      { year: '2011', detail: 'UAE joined Saudi Arabia in deploying forces to Bahrain' },
      { year: '2014', detail: 'Participated in US-led air campaign against ISIS' },
      { year: '2014-2019', detail: 'Conducted air strikes in Libya; aided Haftar\'s forces' },
      { year: '2015-2019', detail: 'Joined Saudi-led Yemen coalition' },
    ],
    wealth: [
      { metric: 'Investments in Africa', amount: '$110 billion total' },
      { metric: 'Pledged investments (2022-2023)', amount: '$97 billion' },
      { metric: 'Renewable energy (2019-2023)', amount: '$72 billion' },
      { metric: 'Economic stimulus (Ghadan 21)', amount: 'AED 50 billion' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Mohamed_bin_Zayed_Al_Nahyan',
      'https://www.britannica.com/biography/Mohamed-bin-Zayed',
    ],
    lastUpdated: '2026-04-27',
    description: 'Current President of UAE and de facto leader since 2014. Known as MBZ. Led UAE military modernization and is the key architect of the Abraham Accords.',
    keyFindings: [
      'Third President of UAE since May 14, 2022',
      'De facto ruler of UAE since 2014 after Khalifa\'s stroke',
      'Architect of UAE foreign policy and Abraham Accords',
      'Led Barakah nuclear plant - first in Arab world',
    ],
  },
  {
    id: 'zayed-founder',
    name: 'Sheikh Zayed bin Sultan Al Nahyan',
    nameAr: 'زايد بن سلطان آل نهيان',
    role: 'Founding Father of UAE',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    born: 'May 6, 1918',
    died: 'November 2, 2004',
    tier: 0,
    uaeRelevance: 10,
    sentiment: 'OVERWHELMINGLY_POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Seven times',
    children: '19 sons, approximately 30 children total',
    positions: [
      { position: 'Governor of Eastern Region (Al Ain)', since: '1946' },
      { position: 'Ruler of Abu Dhabi', since: 'August 6, 1966' },
      { position: 'First President of UAE', since: 'December 2, 1971' },
    ],
    achievements: [
      'United seven Trucial States into federation',
      'Established ADIA (1976) - world\'s third-largest SWF',
      'Financed Marib Dam in Yemen (1984)',
      'Founded Al Nahyaneia Model School (1959)',
      'Established Abu Dhabi Fund for Arab Economic Development',
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Zayed_bin_Sultan_Al_Nahyan',
    ],
    lastUpdated: '2026-04-27',
    description: 'Founding Father of UAE. United seven emirates into federation and served as first President from 1971 until his death in 2004.',
    keyFindings: [
      'First President of UAE (1971-2004)',
      'United seven Trucial States into federation',
      'Established ADIA - world\'s third-largest sovereign wealth fund',
      'Built hospitals, schools, universities across UAE',
    ],
  },
  {
    id: 'khalifa',
    name: 'Sheikh Khalifa bin Zayed Al Nahyan',
    nameAr: 'خليفة بن زايد آل نهيان',
    role: 'Former President of UAE (deceased)',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    born: 'September 7, 1948',
    died: 'May 13, 2022',
    tier: 1,
    uaeRelevance: 9,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Shamsa bint Suhail Al Mazrouei (1964)',
    children: '8',
    positions: [
      { position: 'President of UAE and Ruler of Abu Dhabi', since: '2004-2022' },
    ],
    achievements: [
      'Louvre Abu Dhabi - world-class museum established',
      'NYU Abu Dhabi - international branch campus',
      'Sorbonne Abu Dhabi - French university branch',
      'Etihad Airways - national airline established',
      'Burj Khalifa named in his honor (2010)',
      'Dubai Bailout - directed billions during 2008 financial crisis',
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Khalifa_bin_Zayed_Al_Nahyan',
    ],
    lastUpdated: '2026-04-27',
    description: 'Second President of UAE (2004-2022). Continued father\'s legacy and oversaw major cultural and infrastructure projects.',
    keyFindings: [
      'Second President of UAE (2004-2022)',
      'Suffered stroke in 2014; MBZ assumed day-to-day affairs',
      'Louvre Abu Dhabi and world-class universities established',
      'Burj Khalifa named in his honor',
    ],
  },
  {
    id: 'mansour',
    name: 'Sheikh Mansour bin Zayed Al Nahyan',
    nameAr: 'منصور بن زايد آل نهيان',
    role: 'Vice President of UAE',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    age: 55,
    born: 'November 20, 1970',
    tier: 1,
    uaeRelevance: 9,
    sentiment: 'MIXED',
    alertLevel: 'YELLOW',
    spouse: 'Alia bint Mohammed bin Butti Al Hamed (1994), Manal bint Mohammed Al Maktoum (2005)',
    children: 'Zayed, Fatima, Mohammed, Hamdan, Latifa, Rashid',
    positions: [
      { position: 'Vice President of UAE', since: 'March 29, 2023' },
      { position: 'Deputy Prime Minister of UAE', since: 'May 10, 2009' },
      { position: 'Minister of Presidential Court', since: 'November 1, 2004' },
      { position: 'Chairman of Presidential Office', since: '1997' },
      { position: 'Chairman of Mubadala Investment Company', since: '' },
      { position: 'Chairman of Emirates Investment Authority', since: '' },
      { position: 'Owner of Abu Dhabi United Group (ADUG)', since: '' },
      { position: 'Founder of City Football Group', since: '2014' },
    ],
    achievements: [
      'Acquired Manchester City through ADUG (September 2008)',
      'Founded City Football Group (2014)',
      'Owns Sky News Arabia, The National, Euronews stakes',
      'Virgin Galactic stakeholder (32%)',
      'Daimler AG stakeholder (9.1%)',
    ],
    controversies: [
      { year: 'October 2022', detail: 'Accused of helping Roman Abramovich and Russian oligarchs evade sanctions' },
      { year: '2023', detail: '£30 million sponsorship payments through broker with ties to Abu Dhabi' },
      { year: '2023', detail: '$1.8 billion payment to Malaysia related to 1MDB scandal' },
    ],
    wealth: [
      { metric: 'Africa investments', amount: '$110 billion' },
      { metric: 'Renewable energy (2019-2023)', amount: '$72 billion' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Mansour_bin_Zayed_Al_Nahyan',
    ],
    lastUpdated: '2026-04-27',
    description: 'Vice President of UAE and billionaire businessman. Chairman of Mubadala and owner of Manchester City through Abu Dhabi United Group.',
    keyFindings: [
      'Vice President of UAE since March 2023',
      'Chairman of Mubadala Investment Company',
      'Owner of Manchester City via Abu Dhabi United Group',
      'Business empire spans City Football Group, Virgin Galactic, Daimler',
    ],
  },
  {
    id: 'khaled-abu-dhabi',
    name: 'Sheikh Khaled bin Mohamed bin Zayed Al Nahyan',
    nameAr: 'خالد بن محمد بن زايد آل نهيان',
    role: 'Crown Prince of Abu Dhabi',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    age: 44,
    born: 'January 8, 1982',
    tier: 1,
    uaeRelevance: 9,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Fatima bint Suroor Al Nahyan (married 2008)',
    children: 'Shamma, Mohammed, Salama, Zayed',
    education: [
      'University of Arizona - Bachelor\'s in Political Science (2004)',
      'Georgetown University - Master\'s, Walsh School of Foreign Service (2007)',
    ],
    positions: [
      { position: 'Head of national security', since: '2016' },
      { position: 'Deputy national security adviser', since: '2017' },
      { position: 'Crown Prince of Abu Dhabi', since: 'March 29, 2023' },
      { position: 'Chairman of Abu Dhabi Executive Council', since: 'March 29, 2023' },
    ],
    achievements: [
      'Board member of ADNOC (executive committee chair)',
      'Board member of ADIA',
      'Chairman of UAE Genomics Council',
      'Chairman of Advanced Technology Research Council (ATRC)',
    ],
    honours: [
      { year: '2024', honour: 'First Class of King Hamad Order of the Renaissance', country: 'Bahrain' },
      { year: '2023', honour: 'Honorary Grand Commander of Order of the Defender of the Realm', country: 'Malaysia' },
      { year: '2023', honour: 'Member 2nd Class of Family Order of the Crown of Indra of Pahang', country: 'Malaysia' },
    ],
    controversies: [
      { year: '', detail: 'Mentioned in Pandora Papers regarding offshore investments through Desroches Island Limited' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Khaled_bin_Mohamed_Al_Nahyan',
    ],
    lastUpdated: '2026-04-27',
    description: 'Crown Prince of Abu Dhabi since March 2023. Son of President MBZ. Emerging leader focused on technology and national security.',
    keyFindings: [
      'Crown Prince of Abu Dhabi since March 2023',
      'Son of President MBZ',
      'Chairman of Abu Dhabi Executive Council',
      'Focus on technology: ATRC and Genomics Council chairman',
    ],
  },
  {
    id: 'theyab',
    name: 'Sheikh Theyab bin Mohamed bin Zayed Al Nahyan',
    nameAr: 'ذياب بن محمد بن زايد آل نهيان',
    role: 'Deputy Chairman of Presidential Court',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    age: 39,
    born: 'August 1986',
    tier: 2,
    uaeRelevance: 8,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: '',
    children: '',
    positions: [
      { position: 'Deputy Chairman of Presidential Court - Development and Fallen Heroes Affairs', since: '' },
      { position: 'Chairman of Board of Trustees - Erth Zayed Philanthropies', since: '' },
    ],
    achievements: [
      'Led UAE delegation at CIIE 2025 in China (on behalf of UAE President)',
    ],
    sources: [
      'https://manhom.com/en/profiles/sheikh-theyab-bin-mohamed-bin-zayed-al-nahyan/',
      'https://www.tacticalreport.com/in-depth/63946-profile-uae-sheikh-theyab-bin-mohammad-bin-zayed-al-nahyan',
    ],
    lastUpdated: '2026-04-27',
    description: 'Second son of MBZ. Emerging key figure in UAE political and security landscape with expanding portfolio.',
    keyFindings: [
      'Second son of MBZ',
      'Emerging key figure in UAE political and security landscape',
      'Expanding portfolio signals deliberate grooming for high office',
    ],
  },
  {
    id: 'zayed-mbz-son',
    name: 'Sheikh Zayed bin Mohamed bin Zayed Al Nahyan',
    role: 'Royal Family Member',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    tier: 3,
    uaeRelevance: 7,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    positions: [],
    achievements: [
      'Attending inaugurations',
      'Poetry festivals',
      'Games openings',
      'Professional championships',
    ],
    sources: [
      'https://www.mediaoffice.abudhabi/en/topic/zayed-bin-mohamed-bin-zayed-al-nahyan/',
    ],
    lastUpdated: '2026-04-27',
    description: 'Member of Al Nahyan family. Part of MBZ family circle.',
    keyFindings: [
      'Part of Al Nahyan family of Abu Dhabi',
      'Brother to Khaled and Theyab',
      'Represents family at official events',
    ],
  },
  {
    id: 'tahnoon',
    name: 'Sheikh Tahnoon bin Zayed Al Nahyan',
    nameAr: 'تهنون بن زايد آل نهيان',
    role: 'National Security Advisor',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    age: 57,
    born: 'December 4, 1968',
    tier: 1,
    uaeRelevance: 9,
    sentiment: 'MIXED',
    alertLevel: 'ORANGE',
    spouse: 'Khawla bint Ahmed bin Khalifa Al Suwaidi (poet and calligrapher)',
    children: 'Sheikha Fatima, Sheikh Zayed',
    positions: [
      { position: 'Chairman of State Security Service', since: '1992-2006' },
      { position: 'National Security Advisor of UAE', since: 'February 14, 2016' },
      { position: 'Deputy Ruler of Abu Dhabi', since: 'March 29, 2023' },
      { position: 'Chairman of G42 (AI company)', since: '' },
      { position: 'Chairman of MGX', since: '' },
      { position: 'Chairman of International Holding Company (IHC)', since: '' },
      { position: 'Chairman of ADIA ($790 billion SWF)', since: '' },
      { position: 'Chairman of ADQ ($110 billion)', since: '' },
      { position: 'Chairman of First Abu Dhabi Bank', since: '' },
    ],
    achievements: [
      'Created ADCC Submission Fighting World Championship (1998)',
      'Brazilian jiu-jitsu practitioner and patron',
    ],
    controversies: [
      { year: '2019', detail: 'Project Raven - UAE hired former CIA officials to spy on targets including Americans' },
      { year: '2020', detail: 'EU Sanctions Violation - $200K deposited to circumvent sanctions against Syrian President Assad' },
      { year: '2021', detail: 'COVID-19 Vaccine Reselling - Royal Group resold Sputnik vaccine at mark-ups' },
      { year: '2022', detail: 'Qatargate - Italian news alleged execution of bribery scheme' },
      { year: '2023', detail: 'Abu Dhabi Secrets - Smear campaigns against Qatar and Muslim Brotherhood' },
      { year: '2024', detail: 'Gold Smuggling - UN investigators alleged IHC unit met with DRC gold smugglers' },
      { year: '2025', detail: 'AI Chips Deal - $2B in Trump\'s World Liberty Financial; 500,000 AI chips promised' },
    ],
    wealth: [
      { metric: 'Business portfolio', amount: '$1.3 trillion' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Tahnoon_bin_Zayed_Al_Nahyan',
    ],
    lastUpdated: '2026-04-27',
    description: 'National Security Advisor and Deputy Ruler of Abu Dhabi. Controls $1.3 trillion business portfolio including G42, MGX, IHC, and ADIA.',
    keyFindings: [
      'National Security Advisor of UAE since 2016',
      'Deputy Ruler of Abu Dhabi since March 2023',
      '$1.3 trillion business portfolio through IHC',
      'Multiple controversies including Project Raven and gold smuggling allegations',
    ],
  },
  {
    id: 'hazza',
    name: 'Sheikh Hazza bin Zayed Al Nahyan',
    nameAr: 'حزة بن زايد آل نهيان',
    role: 'Ruler\'s Representative in Al Ain',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    age: 60,
    born: 'June 2, 1965',
    tier: 2,
    uaeRelevance: 7,
    sentiment: 'MIXED',
    alertLevel: 'YELLOW',
    spouse: 'Mozah bint Mohammad Al Hamed',
    children: 'Five including Sheikh Zayed bin Hazza (born 1995)',
    positions: [
      { position: 'Chairman of State Security Service', since: '1992-2006' },
      { position: 'National Security Advisor of UAE', since: '2006-2016' },
      { position: 'Vice Chairman of Abu Dhabi Executive Council', since: '2010-2023' },
      { position: 'Chairman of Emirates Identity Authority', since: '2012-2017' },
      { position: 'Chairman of First Gulf Bank', since: '2006' },
      { position: 'Ruler\'s Representative in Al Ain Region', since: 'December 2024' },
      { position: 'Deputy Prime Minister in Al Ain Region', since: 'March 2023' },
    ],
    honours: [
      { year: '2007', honour: 'Algeria\'s Order of the Athir', country: 'Algeria' },
    ],
    controversies: [
      { year: '2021', detail: 'Named in Pandora Papers (offshore holdings including H Hotel office tower in Dubai)' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Hazza_bin_Zayed_Al_Nahyan',
    ],
    lastUpdated: '2026-04-27',
    description: 'Ruler\'s Representative in Al Ain Region. Full brother to President MBZ. Previously held national security positions.',
    keyFindings: [
      'Full brother to President MBZ',
      'Ruler\'s Representative in Al Ain Region since December 2024',
      'Former national security roles (1992-2016)',
      'Named in Pandora Papers (2021)',
    ],
  },
  {
    id: 'saeed-deceased',
    name: 'Sheikh Saeed bin Zayed Al Nahyan',
    nameAr: 'سعيد بن زايد آل نهيان',
    role: 'Former Chairman (deceased 2023)',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    born: '1965',
    died: 'July 27, 2023',
    tier: 3,
    uaeRelevance: 6,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Shaikha bint Hamdan bin Mohammed Al Nahyan',
    children: 'Sheikh Zayed, Sheikh Hamdan, Sheikha Salama, Sheikha Maryam',
    positions: [
      { position: 'Chairman - Maritime Port Authority (Abu Dhabi)', since: '' },
      { position: 'Chairman - Abu Dhabi\'s Seaports Department', since: '' },
      { position: 'Undersecretary - Abu Dhabi Planning Department', since: '' },
      { position: 'Chairman - UAE Football Association', since: '2001-2002' },
      { position: 'Chairman - Al-Wahda Club', since: '' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Saeed_bin_Zayed_Al_Nahyan',
    ],
    lastUpdated: '2026-04-27',
    description: 'Deceased 2023. Son of founding father Sheikh Zayed. Former chairman of maritime ports and UAE Football Association.',
    keyFindings: [
      'Son of founding father Sheikh Zayed',
      'Former chairman of UAE Football Association',
      'Passed away July 27, 2023 after prolonged illness',
    ],
  },
  {
    id: 'abdullah-foreign',
    name: 'Sheikh Abdullah bin Zayed Al Nahyan',
    nameAr: 'عبدالله بن زايد آل نهيان',
    role: 'Minister of Foreign Affairs',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    age: 53,
    born: 'April 30, 1972',
    tier: 1,
    uaeRelevance: 9,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: '',
    children: '',
    positions: [
      { position: 'Minister of Information and Culture', since: '1997-2006' },
      { position: 'Minister of Foreign Affairs', since: 'February 9, 2006' },
      { position: 'Deputy Prime Minister', since: 'July 14, 2024' },
      { position: 'Member of UAE\'s National Security Council', since: '' },
      { position: 'Chairman of National Media Council', since: '' },
      { position: 'Deputy Chairman of Abu Dhabi Fund for Development', since: '' },
    ],
    achievements: [
      'Signed Abraham Accords September 15, 2020 (establishing UAE-Israel peace)',
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Abdullah_bin_Zayed_Al_Nahyan',
    ],
    lastUpdated: '2026-04-27',
    description: 'Minister of Foreign Affairs since 2006. Key architect of Abraham Accords. Deputy Prime Minister since 2024.',
    keyFindings: [
      'Minister of Foreign Affairs since 2006',
      'Signed Abraham Accords (2020)',
      'Deputy Prime Minister since July 2024',
    ],
  },
  {
    id: 'hamdan-z',
    name: 'Sheikh Hamdan bin Zayed Al Nahyan',
    nameAr: 'حمدان بن زايد آل نهيان',
    role: 'UAE Politician',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    age: 62,
    born: '1963',
    tier: 3,
    uaeRelevance: 6,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    positions: [],
    sources: [
      'https://en.wikipedia.org/wiki/Hamdan_bin_Zayed_Al_Nahyan_(born_1963)',
    ],
    lastUpdated: '2026-04-27',
    description: 'UAE politician. Son of founding father Sheikh Zayed.',
    keyFindings: [
      'Son of Sheikh Zayed bin Sultan Al Nahyan',
      'UAE politician',
    ],
  },
  {
    id: 'sultan-deceased',
    name: 'Sheikh Sultan bin Zayed Al Nahyan',
    nameAr: 'سلطان بن زايد آل نهيان',
    role: 'Former Deputy Prime Minister (deceased 2019)',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    born: '1955',
    died: '2019',
    tier: 2,
    uaeRelevance: 7,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    positions: [
      { position: 'First Deputy Prime Minister of UAE', since: '' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Sultan_bin_Zayed_Al_Nahyan',
    ],
    lastUpdated: '2026-04-27',
    description: 'First Deputy Prime Minister of UAE. Son of Sheikh Zayed bin Sultan. Passed away 2019.',
    keyFindings: [
      'First Deputy Prime Minister of UAE',
      'Son of Sheikh Zayed bin Sultan Al Nahyan',
      'Passed away 2019',
    ],
  },
  {
    id: 'falah',
    name: 'Sheikh Falah bin Zayed Al Nahyan',
    role: 'Chairman - Ghantoot Racing and Polo Club',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    age: 55,
    born: '1970',
    tier: 4,
    uaeRelevance: 5,
    sentiment: 'NEGATIVE',
    alertLevel: 'ORANGE',
    positions: [
      { position: 'Chairman - Ghantoot Racing and Polo Club', since: '' },
    ],
    controversies: [
      { year: '2007', detail: 'Accused of assault with belt buckle in Swiss hotel (The Guardian)' },
      { year: '2008', detail: 'Wrongfully convicted of inflicting bodily harm (overturned on appeal)' },
    ],
    sources: [
      'https://www.gsn-online.com/news-centre/article/uae-falah-bin-zayed-bin-sultan-al-nahyan-1970',
      'https://about.me/FalahBinZayedAlNahyanSwitzerland',
    ],
    lastUpdated: '2026-04-27',
    description: 'Chairman of Ghantoot Racing and Polo Club. Son of Sheikh Zayed. Controversial due to assault allegations in Switzerland.',
    keyFindings: [
      'Son of Sheikh Zayed bin Sultan Al Nahyan',
      'Chairman of Ghantoot Racing and Polo Club',
      'Assault allegations in Switzerland (2007-2008)',
    ],
  },
  {
    id: 'nahyan-bin-zayed',
    name: 'Sheikh Nahyan bin Zayed Al Nahyan',
    role: 'Royal Family Member',
    emirate: 'Abu Dhabi',
    dynasty: 'Al Nahyan',
    age: 57,
    born: '1968',
    tier: 4,
    uaeRelevance: 5,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    positions: [],
    sources: [
      'https://www.gsn-online.com/news-centre/article/uae-nahyan-bin-zayed-bin-sultan-al-nahyan-1968',
    ],
    lastUpdated: '2026-04-27',
    description: 'Son of Sheikh Zayed bin Sultan Al Nahyan. Member of Al Nahyan family.',
    keyFindings: [
      'Son of Sheikh Zayed bin Sultan Al Nahyan',
      'Member of Al Nahyan family',
    ],
  },

  // =========================================================================
  // DUBAI — AL MAKTOUM FAMILY
  // =========================================================================
  {
    id: 'mbr',
    name: 'Sheikh Mohammed bin Rashid Al Maktoum',
    nameAr: 'محمد بن راشد آل مكتوم',
    role: 'Ruler of Dubai & Prime Minister of UAE',
    emirate: 'Dubai',
    dynasty: 'Al Maktoum',
    age: 76,
    born: 'July 15, 1949',
    tier: 0,
    uaeRelevance: 10,
    sentiment: 'MIXED',
    alertLevel: 'GREEN',
    spouse: 'At least 11 (currently divorced from all except first wife Hind bint Maktoum)',
    children: '26 total',
    positions: [
      { position: 'Ruler of Dubai', since: 'January 4, 2006' },
      { position: 'Vice President of UAE', since: 'January 5, 2006' },
      { position: 'Prime Minister of UAE', since: 'February 11, 2006' },
      { position: 'Head of Dubai Police and Public Security', since: '1968-1970' },
      { position: 'Minister of Defence', since: '1971-2020' },
      { position: 'Crown Prince of Dubai', since: '1995' },
    ],
    achievements: [
      'Founded Emirates airline (1985)',
      'Established Dubai World',
      'Established Dubai Holding',
      'Oversaw Palm Islands, Burj Al Arab, Jumeirah Group',
      'Created Dubai Internet City and TECOM',
      'Founded Mohammed bin Rashid Space Centre (2015)',
      'Emirates Mars Mission (Hope) - successful orbit insertion February 2021',
      'Founded Godolphin stable and Darley Stud',
      'Dubai World Cup - world\'s richest horserace',
    ],
    controversies: [
      { year: '', detail: 'Allegations of kidnapping/imprisonment of daughters Sheikha Latifa and Shamsa' },
      { year: '2019', detail: 'Princess Haya fled Dubai; UK court found coercive and abusive behaviour' },
      { year: '2006', detail: 'Camel jockey child class-action lawsuit' },
      { year: '2013', detail: 'Horse racing drugs scandal (trainer Mahmood Al Zarooni disqualified)' },
      { year: '2021', detail: 'Named in Pandora Papers for offshore companies' },
    ],
    wealth: [
      { metric: 'Estimated wealth', amount: '$14 billion' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Mohammed_bin_Rashid_Al_Maktoum',
    ],
    lastUpdated: '2026-04-27',
    description: 'Vice President, Prime Minister of UAE, and Ruler of Dubai. Visionary leader behind Dubai\'s modern transformation.',
    keyFindings: [
      'Ruler of Dubai and Prime Minister of UAE',
      'Visionary behind Dubai\'s modern transformation',
      'Emirates Mars Mission (Hope) successful 2021',
      'Mixed sentiment due to family human rights concerns',
    ],
  },
  {
    id: 'hamdan-dubai',
    name: 'Sheikh Hamdan bin Mohammed Al Maktoum',
    nameAr: 'حمدان بن محمد آل مكتوم',
    role: 'Crown Prince of Dubai',
    emirate: 'Dubai',
    dynasty: 'Al Maktoum',
    age: 43,
    born: 'November 14, 1982',
    tier: 1,
    uaeRelevance: 9,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Sheikha Shaikha bint Saeed bin Thani Al Maktoum (married 2019)',
    children: 'Rashid, Shaikha (twins 2021), Mohammed (2023), Hind (2025)',
    education: [
      'Rashid School For Boys, Dubai',
      'Dubai School of Government',
      'Royal Military Academy Sandhurst (graduated 2001)',
      'London School of Economics',
    ],
    positions: [
      { position: 'Crown Prince of Dubai', since: 'February 1, 2008' },
      { position: 'Deputy Prime Minister of UAE', since: 'July 14, 2024' },
      { position: 'Minister of Defence of UAE', since: 'July 14, 2024' },
      { position: 'Chairman of Dubai Executive Council', since: 'September 2006' },
    ],
    achievements: [
      'World Equestrian Games - Bronze (individual, 2010)',
      'World Equestrian Games - Gold (team, 2010)',
      'World Equestrian Games - Gold (team and individual, 2012)',
      'Pen name "Fazza" - publishes romantic and patriotic poetry',
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Hamdan_bin_Mohammed_Al_Maktoum',
    ],
    lastUpdated: '2026-04-27',
    description: 'Crown Prince of Dubai and Minister of Defence. Known as "Fazza" for poetry. Olympic-level equestrian athlete.',
    keyFindings: [
      'Crown Prince of Dubai since 2008',
      'Minister of Defence since July 2024',
      'Olympic equestrian medalist',
      'Pen name "Fazza" - popular poet',
    ],
  },
  {
    id: 'maktoum-deputy',
    name: 'Sheikh Maktoum bin Mohammed Al Maktoum',
    nameAr: 'مكتوم بن محمد آل مكتوم',
    role: 'Deputy Ruler of Dubai & Minister of Finance',
    emirate: 'Dubai',
    dynasty: 'Al Maktoum',
    age: 42,
    born: 'November 24, 1983',
    tier: 1,
    uaeRelevance: 8,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Maryam bint Butti bin Maktoum Al Maktoum (married May 2019)',
    children: 'Four daughters',
    education: [
      'Business Administration degree, American University in Dubai (2006)',
    ],
    positions: [
      { position: 'Deputy Ruler of Dubai', since: 'February 1, 2008' },
      { position: 'Minister of Finance of UAE', since: 'September 25, 2021' },
      { position: 'Deputy Prime Minister of UAE', since: 'September 25, 2021' },
      { position: 'Chairman of the Court of HH Ruler of Dubai', since: 'May 2021' },
      { position: 'Chairman of Dubai Media Incorporated', since: '' },
      { position: 'President of Dubai International Financial Centre', since: '' },
      { position: 'Chairman of Dubai Knowledge Park', since: '' },
      { position: 'Chairman of Dubai Culture and Arts Authority', since: '2015' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Maktoum_bin_Mohammed_Al_Maktoum',
    ],
    lastUpdated: '2026-04-27',
    description: 'Deputy Ruler of Dubai and Minister of Finance. Son of Sheikh Mohammed bin Rashid.',
    keyFindings: [
      'Deputy Ruler of Dubai since 2008',
      'Minister of Finance of UAE since 2021',
      'Deputy Prime Minister since 2021',
    ],
  },
  {
    id: 'ahmed-bin-mohammed',
    name: 'Sheikh Ahmed bin Mohammed bin Rashid Al Maktoum',
    nameAr: 'أحمد بن محمد بن راشد آل مكتوم',
    role: 'Second Deputy Ruler of Dubai',
    emirate: 'Dubai',
    dynasty: 'Al Maktoum',
    age: 38,
    born: 'February 7, 1987',
    tier: 2,
    uaeRelevance: 8,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Sheikha Madiyah bint Dalmook Al Maktoum (June 5, 2019)',
    children: 'Hind bint Ahmed Al Maktoum (born October 22, 2022)',
    positions: [
      { position: 'Second Deputy Ruler of Dubai', since: 'April 28, 2023' },
      { position: 'Chairman of Dubai Media Council', since: 'June 2022' },
      { position: 'President of UAE National Olympic Committee', since: 'August 2023' },
      { position: 'Chairman of Mohammed bin Rashid Al Maktoum Knowledge Foundation', since: '' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Ahmed_bin_Mohammed_Al_Maktoum',
    ],
    lastUpdated: '2026-04-27',
    description: 'Second Deputy Ruler of Dubai since April 2023. Son of Sheikh Mohammed bin Rashid.',
    keyFindings: [
      'Second Deputy Ruler of Dubai since April 2023',
      'Chairman of Dubai Media Council',
      'President of UAE National Olympic Committee',
    ],
  },
  {
    id: 'ahmed-bin-saeed',
    name: 'Sheikh Ahmed bin Saeed Al Maktoum',
    nameAr: 'أحمد بن سعيد آل مكتوم',
    role: 'Chairman and CEO of Emirates Airline',
    emirate: 'Dubai',
    dynasty: 'Al Maktoum',
    age: 67,
    born: 'December 1, 1958',
    tier: 1,
    uaeRelevance: 9,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: '',
    children: '',
    education: [
      'Degree in political science, University of Denver',
    ],
    positions: [
      { position: 'Chairman and CEO of Emirates Airline and Emirates Group', since: '1985' },
      { position: 'President of Dubai Civil Aviation Authority', since: '' },
      { position: 'Chairman of Dubai Airports', since: '' },
      { position: 'Chairman of Dubai Holding', since: '' },
      { position: 'Chairman of Dubai World', since: '' },
      { position: 'Chairman of Emirates NBD', since: '' },
      { position: 'Chancellor of The British University in Dubai', since: '' },
    ],
    achievements: [
      'Known as "the man who put Dubai on the global aviation map"',
      'Aviation Entrepreneur of the Year (2007)',
      'Ernst & Young Entrepreneur of the Year for UAE (2011)',
      'Honorary Knight Commander of the Order of the British Empire (2013)',
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Ahmed_bin_Saeed_Al_Maktoum',
    ],
    lastUpdated: '2026-04-27',
    description: 'Chairman and CEO of Emirates Airline and Emirates Group. Known as the architect of Dubai\'s aviation industry.',
    keyFindings: [
      'Chairman and CEO of Emirates Airline since 1985',
      'Put Dubai on the global aviation map',
      'Honorary KBE (2013)',
    ],
  },
  {
    id: 'princess-haya',
    name: 'Princess Haya bint Al Hussein',
    nameAr: 'الأميرة Haya',
    role: 'Royal Family Member (Divorce Case)',
    emirate: 'Dubai',
    dynasty: 'Al Maktoum',
    tier: 3,
    uaeRelevance: 7,
    sentiment: 'NEGATIVE',
    alertLevel: 'RED',
    positions: [],
    achievements: [
      '£554 million ($734 million) settlement - largest UK family court award',
      '£251.5 million immediate payment within three months',
      '~£11 million annually for children\'s education',
      '£290 million bank guarantee secured',
    ],
    controversies: [
      { year: '2019', detail: 'Fled Dubai; UK court found Sheikh Mohammed ordered hacking of phones' },
      { year: '2021', detail: 'UK court found coercive and abusive behaviour by Sheikh Mohammed' },
    ],
    sources: [
      'https://www.aljazeera.com/economy/2021/12/21/dubai-ruler-ordered-to-pay-princess-734m-in-royal-divorce-case',
    ],
    lastUpdated: '2026-04-27',
    description: 'Daughter of King Hussein of Jordan. Fled Dubai in 2019. Won record $734M divorce settlement in UK courts.',
    keyFindings: [
      'Largest UK family court award (£554M/$734M)',
      'UK court found coercive and abusive behaviour by Sheikh Mohammed',
      'Hacking of phones found in court proceedings',
    ],
  },
  {
    id: 'saeed-olympic',
    name: 'Sheikh Saeed bin Maktoum bin Rashid Al Maktoum',
    nameAr: 'سعيد بن مكتوم بن راشد آل مكتوم',
    role: 'Olympic Shooter',
    emirate: 'Dubai',
    dynasty: 'Al Maktoum',
    age: 49,
    born: 'October 1, 1976',
    tier: 4,
    uaeRelevance: 5,
    sentiment: 'MIXED',
    alertLevel: 'YELLOW',
    spouse: 'Zeynab Javadli (married 2015; divorced 2019)',
    children: '12',
    positions: [
      { position: 'Olympic Skeet Shooter', since: '2000, 2004, 2008, 2012, 2016' },
      { position: 'Asian Shooting Championships gold (skeet)', since: '2006' },
      { position: 'ISSF World Cup Finals gold (Al Ain)', since: '2011' },
      { position: 'Flagbearer for UAE at London Olympics', since: '2012' },
    ],
    achievements: [
      'Olympic skeet shooter (5 times: 2000-2016)',
      'Asian Shooting Championships gold (2006)',
      'ISSF World Cup Finals gold (2011)',
      'Owns international award-winning horses',
    ],
    controversies: [
      { year: '2022', detail: 'Child custody battle with Zeynab Javadli drew international attention' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Saeed_bin_Maktoum_bin_Rashid_Al_Maktoum',
    ],
    lastUpdated: '2026-04-27',
    description: 'Olympic skeet shooter. Son of Maktoum bin Rashid. International competitor representing UAE.',
    keyFindings: [
      'Olympic skeet shooter (5 Olympic Games)',
      'Asian Shooting Championships gold medalist',
      'International custody controversy (2022)',
    ],
  },
  {
    id: 'rashid-deceased-dubai',
    name: 'Sheikh Rashid bin Mohammed Al Maktoum',
    nameAr: 'راشد بن محمد آل مكتوم',
    role: 'Former Crown Prince (deceased 2015)',
    emirate: 'Dubai',
    dynasty: 'Al Maktoum',
    born: 'November 12, 1981',
    died: 'September 19, 2015',
    tier: 2,
    uaeRelevance: 6,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: '',
    children: 'Mohammed bin Rashid bin Mohammed Al Maktoum',
    positions: [
      { position: 'Crown Prince of Dubai', since: 'Until 2008' },
      { position: 'Principal partner in Noor Investment Group, Noor Bank, Dubai Holding Company', since: '' },
      { position: 'Owner of Zabeel Racing', since: '' },
      { position: 'President of UAE Olympic Committee', since: '' },
    ],
    achievements: [
      'Won two gold medals at 2006 Asian Games (Endurance riding)',
      'Graduated from Sandhurst Military Academy (2002)',
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Rashid_bin_Mohammed_Al_Maktoum',
    ],
    lastUpdated: '2026-04-27',
    description: 'Former Crown Prince of Dubai until 2008. Passed away 2015 from heart attack at age 33.',
    keyFindings: [
      'Former Crown Prince of Dubai until 2008',
      'Passed away September 19, 2015 (aged 33)',
      'Asian Games gold medalist in endurance riding',
    ],
  },
  {
    id: 'maktoum-former-ruler',
    name: 'Sheikh Maktoum bin Rashid Al Maktoum',
    nameAr: 'مكتوم بن راشد آل مكتوم',
    role: 'Former Ruler of Dubai (deceased 2006)',
    emirate: 'Dubai',
    dynasty: 'Al Maktoum',
    born: 'August 15, 1943',
    died: 'January 4, 2006',
    tier: 1,
    uaeRelevance: 8,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Alia bint Khalifa Al Maktoum (March 12, 1971); Sheikha Bouchra bint Mohammed',
    children: 'Eight total',
    positions: [
      { position: 'Ruler of Dubai', since: '1990-2006' },
      { position: 'Vice President of UAE', since: '' },
      { position: 'Prime Minister of UAE', since: '1971-1979, 1990-2006' },
    ],
    achievements: [
      'Formed first cabinet upon UAE independence (December 9, 1971)',
      'Co-owner of Godolphin with brothers',
      'Acting President (two days in November 2004 between Zayed\'s death and Khalifa\'s installation)',
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Maktoum_bin_Rashid_Al_Maktoum',
    ],
    lastUpdated: '2026-04-27',
    description: 'Former Ruler of Dubai and Prime Minister of UAE. Son of Sheikh Rashid. Died 2006.',
    keyFindings: [
      'Ruler of Dubai (1990-2006)',
      'Prime Minister of UAE (1971-1979, 1990-2006)',
      'Died January 4, 2006 from heart attack',
    ],
  },
  {
    id: 'rashid-historical',
    name: 'Sheikh Rashid bin Saeed Al Maktoum',
    nameAr: 'راشد بن سعيد آل مكتوم',
    role: 'Historical Ruler of Dubai (deceased 1990)',
    emirate: 'Dubai',
    dynasty: 'Al Maktoum',
    born: 'June 11, 1912',
    died: 'October 7, 1990',
    tier: 1,
    uaeRelevance: 9,
    sentiment: 'OVERWHELMINGLY_POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Latifa bint Hamdan Al Nahyan (1940)',
    positions: [
      { position: 'Ruler of Dubai', since: 'September 10, 1958 – October 7, 1990' },
      { position: 'First Vice President of UAE', since: '1971 until death' },
      { position: 'Second Prime Minister', since: '1979' },
    ],
    achievements: [
      'Dredged Dubai Creek (1958-1959)',
      'Built Maktoum Bridge (1963)',
      'Established Dubai Municipality (1957)',
      'Created Dubai Police Force (1956)',
      'Developed Dubai\'s gold trade (third largest export market for gold from London, 1966)',
      'Found oil in Fateh field (60 miles offshore, 1966)',
      'Opened Port Rashid (1972)',
      'Opened Jebel Ali Port (1983)',
      'Dubai World Trade Centre (1979)',
      'Dubai Dry Docks (1983)',
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Rashid_bin_Saeed_Al_Maktoum',
    ],
    lastUpdated: '2026-04-27',
    description: 'Architect of modern Dubai. Ruler of Dubai 1958-1990. One of the Founding Fathers of UAE.',
    keyFindings: [
      'Ruler of Dubai 1958-1990',
      'One of the Founding Fathers of UAE',
      'Built Dubai\'s infrastructure: Creek, Port, Police, gold trade',
    ],
  },

  // =========================================================================
  // SHARJAH — AL QASIMI FAMILY
  // =========================================================================
  {
    id: 'sultan-sharjah',
    name: 'Sheikh Sultan bin Muhammad Al Qasimi',
    nameAr: 'سلطان بن محمد القاسمي',
    role: 'Ruler of Sharjah',
    emirate: 'Sharjah',
    dynasty: 'Al Qasimi',
    age: 86,
    born: 'July 1, 1939',
    tier: 1,
    uaeRelevance: 9,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Seven children including Azza, Bodour, Hoor, Khalid (1980-2019)',
    education: [
      'Cairo University - BSc in Agricultural Engineering (1971)',
      'University of Exeter - PhD in history (1985)',
      'Durham University - PhD in political geography of the Gulf (1999)',
    ],
    positions: [
      { position: '11th Ruler of Sharjah', since: 'January 25, 1972' },
      { position: 'First Minister of Education of UAE', since: 'December 1971 – February 1972' },
      { position: 'President of American University of Sharjah', since: 'January 1972' },
      { position: 'President of University of Sharjah', since: '1997' },
      { position: 'Professor of modern history of the Gulf', since: '' },
    ],
    achievements: [
      'Al Hisn Fort restoration (1970)',
      'University of Sharjah (1997)',
      'American University of Sharjah (1997)',
      '"Irada" centre - drug addiction treatment (2018)',
      '"Khorfakkan" film based on his book about Portuguese invasion (2020)',
      'Author of 82+ books by 2023',
    ],
    honours: [
      { year: '', honour: 'Grand Cross with Collar of Order of Zayed', country: 'UAE' },
      { year: '', honour: 'Commander of Legion of Honour', country: 'France' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Sultan_bin_Muhammad_Al-Qasimi',
    ],
    lastUpdated: '2026-04-27',
    description: 'Ruler of Sharjah since 1972. Historian, author, and educator. Has authored 82+ books.',
    keyFindings: [
      'Ruler of Sharjah since 1972',
      'Author of 82+ books on Gulf history',
      'University of Sharjah and American University of Sharjah established',
    ],
  },
  {
    id: 'sultan-ahmed-sharjah',
    name: 'Sheikh Sultan bin Ahmed Al Qasimi',
    nameAr: 'سلطان بن أحمد القاسمي',
    role: 'Deputy Ruler of Sharjah',
    emirate: 'Sharjah',
    dynasty: 'Al Qasimi',
    age: 52,
    born: 'May 23, 1973',
    tier: 2,
    uaeRelevance: 8,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Sheikha Bodour bint Sultan bin Muhammad Al Qasimi',
    education: [
      'BSc in Business Administration, Arkansas State University',
      'MSc in Computer Information Systems, University of Detroit Mercy',
    ],
    positions: [
      { position: 'Deputy Ruler of Sharjah', since: '2021' },
      { position: 'Deputy Chairman of The Executive Council', since: '' },
      { position: 'President of University of Sharjah', since: 'December 2021' },
      { position: 'Chairman of Sharjah National Oil Corporation', since: '' },
      { position: 'Chairman of Sharjah Media Council', since: '' },
      { position: 'Chairman of Sharjah Petroleum Council', since: '' },
      { position: 'Chairman of Basma Group', since: '2005' },
      { position: 'Chairman of Tilal Properties LLC', since: '2014' },
      { position: 'Chairman of Arada (Dubai property)', since: '2017' },
    ],
    honours: [
      { year: '2016', honour: 'Most Outstanding Media Personality Award', country: '' },
      { year: '2017', honour: 'Humanitarian Envoy for The Big Heart Foundation', country: '' },
      { year: '2023', honour: 'Jawaher Medal of Honour', country: '' },
      { year: '2025', honour: 'Golden Medal of Honor', country: 'European Royal Academy' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Sultan_bin_Ahmed_Al_Qasimi',
    ],
    lastUpdated: '2026-04-27',
    description: 'Deputy Ruler of Sharjah since 2021. Son of the Ruler. Business and media leader.',
    keyFindings: [
      'Deputy Ruler of Sharjah since 2021',
      'President of University of Sharjah',
      'Chairman of Sharjah National Oil Corporation',
    ],
  },

  // =========================================================================
  // AJMAN — AL NUIMI FAMILY
  // =========================================================================
  {
    id: 'humaid-ajman',
    name: 'Sheikh Humaid bin Rashid Al Nuaimi III',
    nameAr: 'حمد بن راشد النعيمي',
    role: 'Ruler of Ajman',
    emirate: 'Ajman',
    dynasty: 'Al Nuaimi',
    age: 95,
    born: '1931',
    tier: 1,
    uaeRelevance: 8,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Sheikha Fatima bint Zayed bin Saqr Al Nahyan',
    children: 'Sheikh Ammar (Crown Prince), Sheikh Ahmed (Chairman of Economic Dept), Sheikh Abdulaziz (Chairman of Culture & Info), Sheikh Rashid, Sheikha Aisha, Sheikha Fatima',
    positions: [
      { position: '10th Ruler of Ajman', since: 'September 6, 1981' },
    ],
    achievements: [
      'Emiri Decree No. 9 establishing Protocol and Hospitality Department (September 2021)',
      'Changed Central Department for Legal Affairs name to Department of Legal Affairs (2020)',
      'Sponsored six Sudanese children orphaned by COVID-19 (May 2020)',
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Humaid_bin_Rashid_Al_Nuaimi_III',
    ],
    lastUpdated: '2026-04-27',
    description: '10th Ruler of Ajman since 1981. Age 95. One of the longest-serving rulers in the UAE.',
    keyFindings: [
      'Ruler of Ajman since 1981',
      'Age 95 - one of the longest-serving rulers',
      'Focus on modernization and humanitarian efforts',
    ],
  },
  {
    id: 'ammar-ajman',
    name: 'Sheikh Ammar bin Humaid Al Nuaimi',
    nameAr: 'عمار بن حميد النعيمي',
    role: 'Crown Prince of Ajman',
    emirate: 'Ajman',
    dynasty: 'Al Nuaimi',
    age: 56,
    born: '1969',
    tier: 2,
    uaeRelevance: 7,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Asma bint Saqr Al Qasimi (sister of Saud bin Saqr Al Qasimi, Ruler of Ras Al Khaimah)',
    education: [
      'Graduate of Ajman Police Academy',
    ],
    positions: [
      { position: 'Crown Prince of Ajman', since: '2003 (appointed 1993)' },
      { position: 'Chairman of Ajman Executive Council', since: '2003' },
      { position: 'Chairman of Ajman Bank', since: '' },
      { position: 'Owner of Ajman Stud', since: '2002' },
      { position: 'Chair of Humaid bin Rashid Al Nuaimi Charitable and Humanitarian Foundation', since: '' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Ammar_bin_Humaid_Al_Nuaimi',
    ],
    lastUpdated: '2026-04-27',
    description: 'Crown Prince of Ajman since 2003. Son of the Ruler. Chairman of Ajman Executive Council.',
    keyFindings: [
      'Crown Prince of Ajman since 2003',
      'Chairman of Ajman Executive Council',
      'Married to sister of Ruler of Ras Al Khaimah',
    ],
  },

  // =========================================================================
  // UMM AL QUWAIN — AL MUALLA FAMILY
  // =========================================================================
  {
    id: 'saud-uaq',
    name: 'Sheikh Saud bin Rashid Al Mualla',
    nameAr: 'سعود بن راشد المعلا',
    role: 'Ruler of Umm Al Quwain',
    emirate: 'Umm Al Quwain',
    dynasty: 'Al Mualla',
    age: 73,
    born: 'October 1, 1952',
    tier: 1,
    uaeRelevance: 7,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    positions: [
      { position: 'Ruler of Umm Al Quwain', since: '' },
      { position: 'Chief of Amiri court (Diwan)', since: '1979' },
      { position: 'Crown Prince', since: '1982' },
      { position: 'Commander of Umm Al Quwain National Guard (colonel)', since: '' },
      { position: 'Head of Umm Al Quwain Royal Court (Al Diwan Al-Amir)', since: '1989' },
    ],
    sources: [
      'https://monarchies.fandom.com/wiki/Saud_bin_Rashid_Al_Mualla',
    ],
    lastUpdated: '2026-04-27',
    description: 'Ruler of Umm Al Quwain. Appointed chief of Amiri court in 1979 and became Crown Prince in 1982.',
    keyFindings: [
      'Ruler of Umm Al Quwain',
      'Commander of Umm Al Quwain National Guard',
      'Career in royal court since 1979',
    ],
  },
  {
    id: 'rashid-uaq',
    name: 'Sheikh Rashid bin Saud bin Rashid Al Mualla',
    nameAr: 'راشد بن سعود بن راشد المعلا',
    role: 'Crown Prince of Umm Al Quwain',
    emirate: 'Umm Al Quwain',
    dynasty: 'Al Mualla',
    tier: 2,
    uaeRelevance: 6,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    positions: [
      { position: 'Crown Prince of Umm Al Quwain', since: '2009' },
      { position: 'Chairman of Executive Council of Umm Al Quwain', since: 'July 2011' },
    ],
    sources: [
      'https://manhom.com/en/profiles/sheikh-rashid-bin-saud-bin-rashid-al-mualla/',
    ],
    lastUpdated: '2026-04-27',
    description: 'Crown Prince of Umm Al Quwain since 2009. Received by UAE President Sheikh MBZ in June 2025.',
    keyFindings: [
      'Crown Prince of Umm Al Quwain since 2009',
      'Chairman of Executive Council since 2011',
    ],
  },

  // =========================================================================
  // RAS AL KHAIMAH — AL QASIMI FAMILY
  // =========================================================================
  {
    id: 'saud-rak',
    name: 'Sheikh Saud bin Saqr Al Qasimi',
    nameAr: 'سعود بن صقر القاسمي',
    role: 'Ruler of Ras Al Khaimah',
    emirate: 'Ras Al Khaimah',
    dynasty: 'Al Qasimi',
    age: 70,
    born: 'February 10, 1956',
    tier: 1,
    uaeRelevance: 8,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Hana bint Juma Al Majid',
    children: 'Six including Mohammed (Crown Prince), Amneh, Ahmed, Khalid, Saqr, Mahra',
    education: [
      'American University of Beirut - Economics',
      'University of Michigan - Economics and Political Science',
    ],
    positions: [
      { position: 'Ruler of Ras Al Khaimah', since: 'October 27, 2010' },
      { position: 'Chief of Ruler\'s Court', since: '1979' },
      { position: 'Chairman of Ras Al Khaimah Municipal Council', since: '1986' },
      { position: 'Crown Prince and Deputy Ruler', since: 'June 2003' },
    ],
    achievements: [
      'Co-founded RAK Ceramics 1991 (world\'s largest ceramics producer)',
      'GDP per capita growth: AED 35,000 (2001) → AED 118,621 (2025)',
      'Established American University of Ras Al Khaimah (AURAK)',
      'Founded RAK Medical University',
      'Established Al Qasimi Foundation for policy research (2009)',
    ],
    honours: [
      { year: '', honour: 'Honorary doctorate', country: 'University of Bolton UK' },
      { year: '', honour: 'Honorary doctorate', country: 'Incheon National University South Korea' },
      { year: '2018', honour: 'Visionary Leader of the Year', country: 'Arabian Business Awards' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Saud_bin_Saqr_Al_Qasimi',
    ],
    lastUpdated: '2026-04-27',
    description: 'Ruler of Ras Al Khaimah since 2010. Transformed RAK economy. Reduced government debt to 10.4%.',
    keyFindings: [
      'Ruler of Ras Al Khaimah since 2010',
      'Co-founded RAK Ceramics - world\'s largest ceramics producer',
      'Transformed RAK economy with GDP per capita growth',
    ],
  },
  {
    id: 'mohammed-rak',
    name: 'Sheikh Mohammed bin Saud bin Saqr Al Qasimi',
    nameAr: 'محمد بن سعود بن صقر القاسمي',
    role: 'Crown Prince of Ras Al Khaimah',
    emirate: 'Ras Al Khaimah',
    dynasty: 'Al Qasimi',
    age: 39,
    born: 'February 9, 1987',
    tier: 2,
    uaeRelevance: 7,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Sheikha Shaikha bint Butti bin Maktoum Al Maktoum (2018)',
    children: 'Four',
    education: [
      'BA in Political Science, UCLA',
    ],
    positions: [
      { position: 'Crown Prince of Ras Al Khaimah', since: 'December 6, 2010' },
      { position: 'Former chairman of RAK Ceramics', since: '' },
    ],
    achievements: [
      'Supervised "Mohammed bin Saud Program for Rehabilitation of Housing"',
      'Provided clean water and essential services to low-populated villages',
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Mohammed_bin_Saud_Al_Qasimi',
    ],
    lastUpdated: '2026-04-27',
    description: 'Crown Prince of Ras Al Khaimah since 2010. Son of the Ruler. UCLA graduate.',
    keyFindings: [
      'Crown Prince of Ras Al Khaimah since 2010',
      'UCLA graduate',
      'Supervised housing rehabilitation program',
    ],
  },

  // =========================================================================
  // FUJAIRAH — AL SHARQI FAMILY
  // =========================================================================
  {
    id: 'hamad-fujairah',
    name: 'Sheikh Hamad bin Mohammed Al Sharqi',
    nameAr: 'حمد بن محمد الشارقة',
    role: 'Ruler of Fujairah',
    emirate: 'Fujairah',
    dynasty: 'Al Sharqi',
    age: 77,
    born: 'February 22, 1949',
    tier: 1,
    uaeRelevance: 8,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Sheikha Fatima bint Thani bin Juma Al Maktoum (married 1984)',
    children: 'Sheikh Mohammed Hamad (Crown Prince, born 1986), Sheikh Rashid Hamad (born 1987), Sheikha Sarra (born 1985), Sheikha Shamsa (born 1988), Sheikha Madiya (born 1989), Sheikh Maktoum Hamad (born 1991)',
    education: [
      'Eastbourne School of English (1969-1970)',
      'Mons Officer Cadet School (1970)',
    ],
    positions: [
      { position: 'First Minister of Agriculture and Fisheries of UAE', since: 'December 9, 1971 – September 18, 1974' },
      { position: 'Ruler of Fujairah', since: 'September 18, 1974' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Hamad_bin_Mohammed_Al_Sharqi',
    ],
    lastUpdated: '2026-04-27',
    description: 'Ruler of Fujairah since 1974. Longest-serving UAE ruler in a federal role. Fluent in English and Arabic.',
    keyFindings: [
      'Ruler of Fujairah since 1974',
      'First Minister of Agriculture and Fisheries (1971-1974)',
      'Longest-serving UAE ruler in federal role',
    ],
  },
  {
    id: 'mohammed-fujairah',
    name: 'Sheikh Mohammed bin Hamad bin Mohammed Al Sharqi',
    nameAr: 'محمد بن حمد بن محمد الشارقة',
    role: 'Crown Prince of Fujairah',
    emirate: 'Fujairah',
    dynasty: 'Al Sharqi',
    age: 40,
    born: 'April 1, 1986',
    tier: 2,
    uaeRelevance: 7,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    spouse: 'Sheikha Latifa bint Mohammed bin Rashid Al Maktoum (married 2009)',
    children: 'Sheikh Hamad (born 2009), Sheikha Aisha (born 2011), Sheikha Fatima (born 2014), Sheikh Rashid (born 2015), Sheikha Hind (born 2020)',
    education: [
      'Milton Abbey School, Dorset, England',
      'Webster University, London',
    ],
    positions: [
      { position: 'Crown Prince of Fujairah', since: 'January 8, 2007' },
      { position: 'Chairman of Fujairah Foundation for Regions Development', since: '' },
    ],
    sources: [
      'https://en.wikipedia.org/wiki/Mohammed_bin_Hamad_bin_Mohammed_Al_Sharqi',
    ],
    lastUpdated: '2026-04-27',
    description: 'Crown Prince of Fujairah since 2007. Married to daughter of Dubai\'s Ruler, connecting three royal families.',
    keyFindings: [
      'Crown Prince of Fujairah since 2007',
      'Married to daughter of Dubai\'s Ruler',
      'Connects Al Sharqi, Al Maktoum, and Al Nuaimi families',
    ],
  },
]

// ============================================================================
// DASHBOARD SUMMARY STATISTICS
// ============================================================================

export const dashboardSummary = {
  totalEmirates: 7,
  rulingFamilies: 6,
  currentPresident: 'Sheikh Mohamed bin Zayed Al Nahyan (MBZ)',
  presidentSince: 'May 14, 2022',
  totalRulingFamilyMembers: 60,
  historicalRulersDocumented: 40,
  sovereignWealthAssets: '$790 billion+',
  totalFamilyWealthEstimate: '$1 trillion+',
  bloombergRichFamilyRank: '#2 in World',
  bloombergRichFamilyRankYear: 2024,
  queriesExecuted: 34,
  pagesFetched: 28,
  enrichmentSources: 20,
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FAMILY MEMBER COUNTS BY EMIRATE
// ============================================================================

export const familyMemberCounts = [
  { emirate: 'Abu Dhabi', family: 'Al Nahyan', count: 20 },
  { emirate: 'Dubai', family: 'Al Maktoum', count: 15 },
  { emirate: 'Sharjah', family: 'Al Qasimi', count: 10 },
  { emirate: 'Ras Al Khaimah', family: 'Al Qasimi', count: 10 },
  { emirate: 'Ajman', family: 'Al Nuaimi', count: 5 },
  { emirate: 'Umm Al Quwain', family: 'Al Mualla', count: 3 },
  { emirate: 'Fujairah', family: 'Al Sharqi', count: 5 },
]

// ============================================================================
// KEY LEADERSHIP APPOINTMENTS
// ============================================================================

export const keyLeadershipAppointments = [
  { person: 'Mohamed bin Zayed', position: 'President of UAE', date: 'May 14, 2022' },
  { person: 'Khaled bin Mohamed', position: 'Crown Prince of Abu Dhabi', date: 'March 29, 2023' },
  { person: 'Tahnoon bin Zayed', position: 'Deputy Ruler of Abu Dhabi', date: 'March 29, 2023' },
  { person: 'Mansour bin Zayed', position: 'Vice President of UAE', date: 'March 29, 2023' },
  { person: 'Ahmed bin Mohammed', position: 'Second Deputy Ruler of Dubai', date: 'April 28, 2023' },
  { person: 'Hamdan bin Mohammed', position: 'Minister of Defence', date: 'July 14, 2024' },
  { person: 'Abdullah bin Zayed', position: 'Deputy Prime Minister', date: 'July 14, 2024' },
]

// ============================================================================
// MAJOR INITIATIVES & PROJECTS
// ============================================================================

export const majorInitiatives = [
  { leader: 'MBZ', initiative: 'Masdar (renewable energy)', amount: 'Established 2006' },
  { leader: 'MBZ', initiative: 'Ghadan 21 accelerator', amount: 'AED 50 billion (2018)' },
  { leader: 'MBZ', initiative: 'Barakah nuclear plant', amount: 'First in Arab world' },
  { leader: 'MBZ', initiative: 'Abraham Accords', amount: '2020' },
  { leader: 'Mohammed bin Rashid', initiative: 'Emirates Mars Mission (Hope)', amount: '2021' },
  { leader: 'Mohammed bin Rashid', initiative: 'Emirates Lunar Mission', amount: 'Rover "Rashid"' },
  { leader: 'Mohammed bin Rashid', initiative: 'Dubai World Cup', amount: '$27 million prize' },
  { leader: 'Saud bin Saqr', initiative: 'RAK Ceramics', amount: 'World\'s largest producer' },
]

// ============================================================================
// SOURCE CREDIBILITY
// ============================================================================

export const sourceCredibility = [
  { sourceType: 'Wikipedia', count: 25, credibility: 'High' },
  { sourceType: 'Official websites', count: 5, credibility: 'Very High' },
  { sourceType: 'Britannica', count: 1, credibility: 'High' },
  { sourceType: 'Al Jazeera', count: 1, credibility: 'High' },
  { sourceType: 'Tactical/Media reports', count: 3, credibility: 'Medium-High' },
  { sourceType: 'Government media offices', count: 5, credibility: 'Very High' },
]
