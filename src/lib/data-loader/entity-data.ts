// @ts-nocheck
import { EntityProfile, EntityOverview } from './types';

// ============================================
// FEDERAL OFFICIALS
// ============================================
export const federalOfficials: EntityProfile[] = [
  {
    id: 'mbz',
    name: 'Mohammed bin Zayed Al Nahyan',
    nameAr: 'محمد بن زايد آل نهيان',
    type: 'federal',
    tier: 0,
    aliases: ['MBZ', 'President Khalifa', 'Abu Dhabi Crown Prince'],
    socialAccounts: { twitter: '@MBZNews' },
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'khalifa', type: 'succeeded', strength: 'direct' },
      { entityId: 'mansour', type: 'strategic', strength: 'direct' },
      { entityId: 'tahnoon', type: 'family', strength: 'direct' }
    ],
    uaeRelevance: 100,
    sentiment: 'OVERWHELMINGLY_POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 15420, articlesAnalyzed: 892 },
    keyFindings: [
      'Third President of UAE since 2022',
      'De facto ruler of UAE since 2014',
      'Architect of UAE foreign policy',
      'Led UAE through Iran conflict 2026'
    ],
    sources: ['uae-embassy.org', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'President of the UAE and de facto ruler since 2014. Key architect of UAE foreign and defense policy.',
    role: 'President',
    emirate: 'Abu Dhabi',
    followerCount: 18500000
  },
  {
    id: 'mbr',
    name: 'Mohammed bin Rashid Al Maktoum',
    nameAr: 'محمد بن راشد آل مكتوم',
    type: 'federal',
    tier: 0,
    aliases: ['MBR', 'Vice President', 'Prime Minister'],
    socialAccounts: { twitter: '@HHShkMohammed' },
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [
      { entityId: 'hamdan', type: 'family', strength: 'direct' },
      { entityId: 'theyab', type: 'family', strength: 'direct' }
    ],
    uaeRelevance: 100,
    sentiment: 'OVERWHELMINGLY_POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 12350, articlesAnalyzed: 756 },
    keyFindings: [
      'Vice President and Prime Minister of UAE',
      'Ruler of Dubai',
      'Key patron of Palm Jumeirah and Burj Khalifa'
    ],
    sources: ['dubai-mediaoffice.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Vice President, Prime Minister and Ruler of Dubai. Key figure in UAE economic development.',
    role: 'Vice President & Prime Minister',
    emirate: 'Dubai',
    followerCount: 15200000
  },
  {
    id: 'mansour',
    name: 'Sheikh Mansour bin Zayed Al Nahyan',
    nameAr: 'منصور بن زايد آل نهيان',
    type: 'federal',
    tier: 1,
    aliases: ['Mansour', 'Mubadala Chairman'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [
      { entityId: 'mbz', type: 'family', strength: 'direct' },
      { entityId: 'mubadala', type: 'leadership', strength: 'direct' }
    ],
    uaeRelevance: 95,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 7840, articlesAnalyzed: 445 },
    keyFindings: [
      'Chairman of Mubadala Investment Company',
      'Deputy Prime Minister',
      'Key figure in UAE sovereign wealth management'
    ],
    sources: ['mubadala.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Deputy Prime Minister and Chairman of Mubadala, overseeing major UAE investments.',
    role: 'Deputy Prime Minister',
    emirate: 'Abu Dhabi',
    followerCount: 890000
  },
  {
    id: 'hamdan',
    name: 'Sheikh Hamdan bin Mohammed Al Maktoum',
    nameAr: 'حمدان بن محمد آل مكتوم',
    type: 'federal',
    tier: 1,
    aliases: ['Hamdan', 'Crown Prince of Dubai'],
    socialAccounts: { twitter: '@HamdanMohammed' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'mbr', type: 'family', strength: 'direct' },
      { entityId: 'theyab', type: 'family', strength: 'direct' }
    ],
    uaeRelevance: 92,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 5620, articlesAnalyzed: 312 },
    keyFindings: [
      'Crown Prince of Dubai',
      'Chairman of Dubai Executive Council',
      'Key figure in Dubai 2040 Urban Master Plan'
    ],
    sources: ['dubai-mediaoffice.ae'],
    lastUpdated: '2026-04-27',
    description: 'Crown Prince of Dubai and Chairman of Dubai Executive Council.',
    role: 'Crown Prince of Dubai',
    emirate: 'Dubai',
    followerCount: 4200000
  },
  {
    id: 'theyab',
    name: 'Theyab bin Mohammed Al Maktoum',
    nameAr: 'ذيبان بن محمد آل مكتوم',
    type: 'federal',
    tier: 2,
    aliases: ['Theyab'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 90 },
    relationships: [
      { entityId: 'mbr', type: 'family', strength: 'direct' },
      { entityId: 'hamdan', type: 'family', strength: 'direct' }
    ],
    uaeRelevance: 78,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 1890, articlesAnalyzed: 124 },
    keyFindings: [
      'Chairman of Dubai World Cup',
      'Represents next generation of Al Maktoum family'
    ],
    sources: ['dubai-mediaoffice.ae'],
    lastUpdated: '2026-04-27',
    description: 'Member of Dubai royal family, Chairman of Dubai World Cup organizing committee.',
    role: 'Chairman - Dubai World Cup',
    emirate: 'Dubai',
    followerCount: 450000
  },
  {
    id: 'khaled',
    name: 'Khaled bin Mohammed Al Nahyan',
    nameAr: 'خالد بن محمد آل نهيان',
    type: 'federal',
    tier: 2,
    aliases: ['Khaled'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 92 },
    relationships: [
      { entityId: 'mbz', type: 'family', strength: 'direct' }
    ],
    uaeRelevance: 82,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 2340, articlesAnalyzed: 156 },
    keyFindings: [
      'Member of Abu Dhabi royal family',
      'Active in government affairs'
    ],
    sources: ['wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Member of Abu Dhabi royal family involved in government affairs.',
    role: 'Government Official',
    emirate: 'Abu Dhabi',
    followerCount: 320000
  },
  {
    id: 'saif',
    name: 'Saif bin Hamdan Al Nahyan',
    nameAr: 'سيف بن حمدان آل نهيان',
    type: 'federal',
    tier: 3,
    aliases: ['Saif'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 88 },
    relationships: [
      { entityId: 'mbz', type: 'family', strength: 'indirect' }
    ],
    uaeRelevance: 65,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 890, articlesAnalyzed: 67 },
    keyFindings: [
      'Abu Dhabi government official',
      'Part of Al Nahyan family succession'
    ],
    sources: ['wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Abu Dhabi government official from Al Nahyan family.',
    role: 'Government Official',
    emirate: 'Abu Dhabi',
    followerCount: 150000
  },
  {
    id: 'abdullah',
    name: ' Abdullah bin Zayed Al Nahyan',
    nameAr: 'عبدالله بن زايد آل نهيان',
    type: 'federal',
    tier: 1,
    aliases: ['Abdullah'],
    socialAccounts: { twitter: '@ABinZayed' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'mbz', type: 'family', strength: 'direct' }
    ],
    uaeRelevance: 90,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 289 },
    keyFindings: [
      'Foreign Minister of UAE',
      'Key architect of Abraham Accords',
      'Member of Al Nahyan family'
    ],
    sources: ['mofa.gov.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Foreign Minister of UAE and key figure in Abraham Accords negotiations.',
    role: 'Foreign Minister',
    emirate: 'Abu Dhabi',
    followerCount: 2100000
  }
];

// ============================================
// ROYAL FAMILY MEMBERS
// ============================================
export const royalFamilyMembers: EntityProfile[] = [
  {
    id: 'nahyan-family',
    name: 'Al Nahyan Family',
    nameAr: 'آل نهيان',
    type: 'royal',
    tier: 0,
    aliases: ['Al Nahyan', 'Abu Dhabi Al Nahyan'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'mbz', type: 'leadership', strength: 'direct' },
      { entityId: 'khalifa', type: 'succeeded', strength: 'direct' }
    ],
    uaeRelevance: 100,
    sentiment: 'OVERWHELMINGLY_POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 12340, articlesAnalyzed: 678 },
    keyFindings: [
      'Ruling family of Abu Dhabi',
      'Founded UAE in 1971',
      'Control Abu Dhabi Investment Authority'
    ],
    sources: ['wam.ae', 'uae-embassy.org'],
    lastUpdated: '2026-04-27',
    description: 'Ruling royal family of Abu Dhabi, founded UAE and control major sovereign wealth funds.',
    role: 'Ruling Family',
    emirate: 'Abu Dhabi',
    followerCount: 0
  },
  {
    id: 'maktoum-family',
    name: 'Al Maktoum Family',
    nameAr: 'آل مكتوم',
    type: 'royal',
    tier: 0,
    aliases: ['Al Maktoum', 'Dubai Al Maktoum'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'mbr', type: 'leadership', strength: 'direct' },
      { entityId: 'hamdan', type: 'family', strength: 'direct' }
    ],
    uaeRelevance: 100,
    sentiment: 'OVERWHELMINGLY_POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 11200, articlesAnalyzed: 612 },
    keyFindings: [
      'Ruling family of Dubai',
      'Built Dubai into global hub',
      'Developed Palm Jumeirah and Burj Khalifa'
    ],
    sources: ['dubai-mediaoffice.ae'],
    lastUpdated: '2026-04-27',
    description: 'Ruling royal family of Dubai, transformed Dubai into global business and tourism hub.',
    role: 'Ruling Family',
    emirate: 'Dubai',
    followerCount: 0
  },
  {
    id: 'qasimi-family',
    name: 'Al Qasimi Family',
    nameAr: 'آل القاسمي',
    type: 'royal',
    tier: 1,
    aliases: ['Al Qasimi', 'Sharjah Al Qasimi'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 95 },
    relationships: [
      { entityId: 'al-qasimi-sultan', type: 'leadership', strength: 'direct' }
    ],
    uaeRelevance: 85,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 234 },
    keyFindings: [
      'Ruling family of Sharjah',
      'Also present in Ras Al Khaimah',
      'Cultural patrons of Arabic literature'
    ],
    sources: ['sharjah.gov.ae'],
    lastUpdated: '2026-04-27',
    description: 'Ruling royal family of Sharjah, prominent cultural patrons.',
    role: 'Ruling Family',
    emirate: 'Sharjah',
    followerCount: 0
  },
  {
    id: 'al-qasimi-sultan',
    name: 'Sultan bin Mohammed Al Qasimi',
    nameAr: 'سلطان بن محمد القاسمي',
    type: 'royal',
    tier: 1,
    aliases: ['Sultan Al Qasimi', 'Sharjah Ruler'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'qasimi-family', type: 'leadership', strength: 'direct' }
    ],
    uaeRelevance: 82,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 189 },
    keyFindings: [
      'Ruler of Sharjah',
      'Member of UAE Supreme Council',
      'Federal Supreme Council member since 1972'
    ],
    sources: ['sharjah.gov.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Ruler of Sharjah and member of UAE Supreme Council.',
    role: 'Ruler of Sharjah',
    emirate: 'Sharjah',
    followerCount: 0
  },
  {
    id: 'al-mualla-family',
    name: 'Al Mualla Family',
    nameAr: 'آل mucosal',
    type: 'royal',
    tier: 2,
    aliases: ['Al Mualla', 'Umm Al Quwain Al Mualla'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 90 },
    relationships: [],
    uaeRelevance: 65,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 890, articlesAnalyzed: 56 },
    keyFindings: [
      'Ruling family of Umm Al Quwain',
      'Smaller emirate with traditional character'
    ],
    sources: ['uaq.gov.ae'],
    lastUpdated: '2026-04-27',
    description: 'Ruling royal family of Umm Al Quwain.',
    role: 'Ruling Family',
    emirate: 'Umm Al Quwain',
    followerCount: 0
  },
  {
    id: 'al-nuaimi-family',
    name: 'Al Nuaimi Family',
    nameAr: 'آل النعيمي',
    type: 'royal',
    tier: 2,
    aliases: ['Al Nuaimi', 'Ajman Al Nuaimi'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 90 },
    relationships: [],
    uaeRelevance: 65,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 780, articlesAnalyzed: 48 },
    keyFindings: [
      'Ruling family of Ajman',
      'Smallest emirate by area'
    ],
    sources: ['ajman.gov.ae'],
    lastUpdated: '2026-04-27',
    description: 'Ruling royal family of Ajman.',
    role: 'Ruling Family',
    emirate: 'Ajman',
    followerCount: 0
  },
  {
    id: 'al-sharqi-family',
    name: 'Al Sharqi Family',
    nameAr: 'آل الشرقي',
    type: 'royal',
    tier: 2,
    aliases: ['Al Sharqi', 'Fujairah Al Sharqi'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 90 },
    relationships: [],
    uaeRelevance: 65,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 670, articlesAnalyzed: 42 },
    keyFindings: [
      'Ruling family of Fujairah',
      'Only emirate on Gulf of Oman'
    ],
    sources: ['fujairah.gov.ae'],
    lastUpdated: '2026-04-27',
    description: 'Ruling royal family of Fujairah.',
    role: 'Ruling Family',
    emirate: 'Fujairah',
    followerCount: 0
  }
];

// ============================================
// EMIRATE ENTITIES
// ============================================
export const emirateEntities: EntityProfile[] = [
  {
    id: 'adnoc',
    name: 'Abu Dhabi National Oil Company',
    nameAr: 'أدنوك',
    type: 'emirate',
    tier: 0,
    aliases: ['ADNOC', 'Abu Dhabi National Oil Company'],
    socialAccounts: { twitter: '@AdnocGroup', linkedin: 'adnoc' },
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [
      { entityId: 'mbz', type: 'ownership', strength: 'direct' }
    ],
    uaeRelevance: 100,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 8920, articlesAnalyzed: 456 },
    keyFindings: [
      'Third largest oil company globally',
      'Produced 4.2 million barrels per day in 2023',
      '16.2 billion barrels proven reserves',
      'Sultan Al Jaber as CEO led COP28'
    ],
    sources: ['adnoc.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Abu Dhabi National Oil Company - one of the world\'s largest oil and gas companies.',
    role: 'National Oil Company',
    emirate: 'Abu Dhabi',
    organization: 'ADNOC',
    sector: 'Energy',
    followerCount: 520000
  },
  {
    id: 'mubadala',
    name: 'Mubadala Investment Company',
    nameAr: 'مبادلة للاستثمار',
    type: 'emirate',
    tier: 0,
    aliases: ['Mubadala', 'Mubadala Investment'],
    socialAccounts: { twitter: '@mubadala', linkedin: 'mubadala' },
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'mansour', type: 'leadership', strength: 'direct' }
    ],
    uaeRelevance: 98,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 6540, articlesAnalyzed: 378 },
    keyFindings: [
      'Global sovereign wealth fund',
      'Sheikh Mansour bin Zayed as chairman',
      '$287 billion in assets under management',
      'Major tech investor including GlobalFoundries'
    ],
    sources: ['mubadala.ae'],
    lastUpdated: '2026-04-27',
    description: 'Abu Dhabi sovereign wealth fund managing $287 billion in assets globally.',
    role: 'Sovereign Wealth Fund',
    emirate: 'Abu Dhabi',
    organization: 'Mubadala',
    sector: 'Investment',
    followerCount: 380000
  },
  {
    id: 'adia',
    name: 'Abu Dhabi Investment Authority',
    nameAr: 'جهاز أبوظبي للاستثمار',
    type: 'emirate',
    tier: 0,
    aliases: ['ADIA', 'Abu Dhabi Investment Authority'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [
      { entityId: 'mbz', type: 'ownership', strength: 'direct' }
    ],
    uaeRelevance: 100,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 5670, articlesAnalyzed: 334 },
    keyFindings: [
      'Largest sovereign wealth fund in Abu Dhabi',
      'Estimated $993 billion in assets',
      'One of largest sovereign wealth funds globally',
      'Investment portfolio across global markets'
    ],
    sources: ['adia.ae', 'swf institute'],
    lastUpdated: '2026-04-27',
    description: 'Abu Dhabi Investment Authority - one of the world\'s largest sovereign wealth funds.',
    role: 'Sovereign Wealth Fund',
    emirate: 'Abu Dhabi',
    organization: 'ADIA',
    sector: 'Investment',
    followerCount: 0
  },
  {
    id: 'difc',
    name: 'Dubai International Financial Centre',
    nameAr: 'مركز دبي المالي العالمي',
    type: 'emirate',
    tier: 1,
    aliases: ['DIFC', 'Dubai International Financial Centre'],
    socialAccounts: { twitter: '@DIFC', linkedin: 'difc' },
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 92,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 267 },
    keyFindings: [
      'Major financial free zone',
      '$35 trillion in assets under management',
      'Home to 4,000+ companies',
      'Common law jurisdiction'
    ],
    sources: ['difc.ae'],
    lastUpdated: '2026-04-27',
    description: 'Dubai International Financial Centre - leading financial hub in the Middle East.',
    role: 'Financial Centre',
    emirate: 'Dubai',
    organization: 'DIFC',
    sector: 'Finance',
    followerCount: 180000
  },
  {
    id: 'dp-world',
    name: 'DP World',
    nameAr: 'دي بي ورلد',
    type: 'emirate',
    tier: 0,
    aliases: ['DP World', 'Dubai Ports World'],
    socialAccounts: { twitter: '@DPWorld', linkedin: 'dp-world' },
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 96,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 5670, articlesAnalyzed: 312 },
    keyFindings: [
      'Global port operator',
      'Operates 55+ container terminals worldwide',
      'Handles 70 million TEU annually',
      'Sultan Ahmed bin Sulayem as chairman'
    ],
    sources: ['dpworld.com', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Global port operator headquartered in Dubai, handling 70 million TEU annually.',
    role: 'Port Operator',
    emirate: 'Dubai',
    organization: 'DP World',
    sector: 'Logistics',
    followerCount: 210000
  },
  {
    id: 'emirates-airline',
    name: 'Emirates Airline',
    nameAr: 'طيران الإمارات',
    type: 'emirate',
    tier: 0,
    aliases: ['Emirates', 'Emirates Airlines'],
    socialAccounts: { twitter: '@emirates', linkedin: 'emirates' },
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 98,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 12450, articlesAnalyzed: 678 },
    keyFindings: [
      'Largest airline in Middle East',
      'Fleet of 260+ aircraft',
      'Serves 150+ destinations',
      'Unaudited profit of AED 4.7 billion (2023-24)'
    ],
    sources: ['emirates.com', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Emirates Airline - largest airline in the Middle East with fleet of 260+ aircraft.',
    role: 'National Carrier',
    emirate: 'Dubai',
    organization: 'Emirates',
    sector: 'Aviation',
    followerCount: 12000000
  },
  {
    id: 'emaar',
    name: 'Emaar Properties',
    nameAr: 'إعمار العقارية',
    type: 'emirate',
    tier: 1,
    aliases: ['Emaar', 'Emaar Properties'],
    socialAccounts: { twitter: '@emaar', linkedin: 'emaar-properties' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 90,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 6780, articlesAnalyzed: 389 },
    keyFindings: [
      'Developed Burj Khalifa',
      'Developer of Downtown Dubai',
      'Shopping malls operator',
      'Mohammed Alabbar as founder'
    ],
    sources: ['emaar.com'],
    lastUpdated: '2026-04-27',
    description: 'Emaar Properties - major real estate developer responsible for Burj Khalifa and Downtown Dubai.',
    role: 'Real Estate Developer',
    emirate: 'Dubai',
    organization: 'Emaar',
    sector: 'Real Estate',
    followerCount: 2300000
  },
  {
    id: 'nakheel',
    name: 'Nakheel Properties',
    nameAr: 'نخيل العقارية',
    type: 'emirate',
    tier: 1,
    aliases: ['Nakheel', 'Nakheel Properties'],
    socialAccounts: { twitter: '@nakheel', linkedin: 'nakheel' },
    credibility: { verified: true, reliabilityScore: 95 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 256 },
    keyFindings: [
      'Developer of Palm Jumeirah',
      'Developer of World Islands',
      'Major waterfront developer',
      'Recovered from 2009 debt crisis'
    ],
    sources: ['nakheel.com'],
    lastUpdated: '2026-04-27',
    description: 'Nakheel Properties - developer of Palm Jumeirah and World Islands artificial archipelagos.',
    role: 'Real Estate Developer',
    emirate: 'Dubai',
    organization: 'Nakheel',
    sector: 'Real Estate',
    followerCount: 890000
  },
  {
    id: 'emirates-nbd',
    name: 'Emirates NBD',
    nameAr: 'بنك الإمارات دبي الوطني',
    type: 'emirate',
    tier: 1,
    aliases: ['Emirates NBD', 'ENBD'],
    socialAccounts: { twitter: '@EmiratesNBD', linkedin: 'emirates-nbd' },
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 90,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 198 },
    keyFindings: [
      'Largest bank in UAE by assets',
      'AED 900 billion in assets',
      'Operations in UAE, Saudi Arabia, Egypt',
      'Sharia-compliant banking via Emirates Islamic'
    ],
    sources: ['emiratesnbd.com'],
    lastUpdated: '2026-04-27',
    description: 'Emirates NBD - largest bank in UAE with AED 900 billion in assets.',
    role: 'Banking Group',
    emirate: 'Dubai',
    organization: 'Emirates NBD',
    sector: 'Banking',
    followerCount: 650000
  },
  {
    id: 'dmcc',
    name: 'DMCC Free Zone',
    nameAr: 'منطقة دبي الحرة متعددة السلع',
    type: 'emirate',
    tier: 1,
    aliases: ['DMCC', 'Dubai Multi Commodities Centre'],
    socialAccounts: { twitter: '@DMCCFreeZone', linkedin: 'dmcc' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 2890, articlesAnalyzed: 167 },
    keyFindings: [
      'World\'s most popular free zone',
      '22,000+ registered companies',
      'Hub for commodities trade',
      'Diamond and gold trading hub'
    ],
    sources: ['dmcc.ae'],
    lastUpdated: '2026-04-27',
    description: 'DMCC - Dubai Multi Commodities Centre, world\'s most popular free zone with 22,000+ companies.',
    role: 'Free Zone Authority',
    emirate: 'Dubai',
    organization: 'DMCC',
    sector: 'Free Zone',
    followerCount: 180000
  },
  {
    id: 'jafza',
    name: 'JAFZA',
    nameAr: 'منطقة جبل علي الحرة',
    type: 'emirate',
    tier: 1,
    aliases: ['JAFZA', 'Jebel Ali Free Zone'],
    socialAccounts: { twitter: '@JAFZAofficial', linkedin: 'jafza' },
    credibility: { verified: true, reliabilityScore: 94 },
    relationships: [
      { entityId: 'dp-world', type: 'related', strength: 'indirect' }
    ],
    uaeRelevance: 85,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 2340, articlesAnalyzed: 145 },
    keyFindings: [
      'One of world\'s largest free zones',
      '9,500+ registered companies',
      'Part of Jebel Ali port complex',
      'Major logistics and trading hub'
    ],
    sources: ['jafza.ae'],
    lastUpdated: '2026-04-27',
    description: 'Jebel Ali Free Zone - one of world\'s largest free zones with 9,500+ companies.',
    role: 'Free Zone Authority',
    emirate: 'Dubai',
    organization: 'JAFZA',
    sector: 'Free Zone',
    followerCount: 120000
  }
];

// ============================================
// MEDIA ORGANIZATIONS
// ============================================
export const mediaOrganizations: EntityProfile[] = [
  {
    id: 'al-ittihad',
    name: 'Al Ittihad',
    nameAr: 'الاتحاد',
    type: 'media',
    tier: 1,
    aliases: ['Al Ittihad Newspaper', 'Al Ittihad'],
    socialAccounts: { twitter: '@alittihad_news' },
    credibility: { verified: true, reliabilityScore: 95 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 90,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 234 },
    keyFindings: [
      'Largest Arabic-language newspaper in UAE',
      'Founded 1970',
      'Official government newspaper',
      'Largest circulation in Abu Dhabi'
    ],
    sources: ['alittihad.ae'],
    lastUpdated: '2026-04-27',
    description: 'Al Ittihad - UAE\'s largest Arabic-language newspaper, official government voice.',
    role: 'Government Newspaper',
    emirate: 'Abu Dhabi',
    organization: 'Al Ittihad',
    sector: 'Media',
    followerCount: 1200000
  },
  {
    id: 'khaleej-times',
    name: 'Khaleej Times',
    nameAr: 'خليج تايمز',
    type: 'media',
    tier: 1,
    aliases: ['Khaleej Times', 'KT'],
    socialAccounts: { twitter: '@khaleejtimes', linkedin: 'khaleej-times' },
    credibility: { verified: true, reliabilityScore: 94 },
    relationships: [],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 312 },
    keyFindings: [
      'Leading English-language newspaper in Gulf',
      'Founded 1978',
      'Covers UAE, GCC, Middle East',
      'Major source for regional news'
    ],
    sources: ['khaleejtimes.com'],
    lastUpdated: '2026-04-27',
    description: 'Khaleej Times - leading English-language newspaper in the Gulf region.',
    role: 'Newspaper',
    emirate: 'Dubai',
    organization: 'Khaleej Times',
    sector: 'Media',
    followerCount: 2100000
  },
  {
    id: 'gulf-news',
    name: 'Gulf News',
    nameAr: 'جلف نيوش',
    type: 'media',
    tier: 1,
    aliases: ['Gulf News', 'GN'],
    socialAccounts: { twitter: '@gulfnews', linkedin: 'gulf-news' },
    credibility: { verified: true, reliabilityScore: 95 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 90,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 5670, articlesAnalyzed: 389 },
    keyFindings: [
      'Top English-language newspaper in UAE',
      'Founded 1978',
      'Part of media network including GDNF',
      'Journalists covering entire Gulf region'
    ],
    sources: ['gulfnews.com'],
    lastUpdated: '2026-04-27',
    description: 'Gulf News - top English-language newspaper in UAE with comprehensive Gulf coverage.',
    role: 'Newspaper',
    emirate: 'Dubai',
    organization: 'Gulf News',
    sector: 'Media',
    followerCount: 4500000
  },
  {
    id: 'al-arabiya',
    name: 'Al Arabiya',
    nameAr: 'العربية',
    type: 'media',
    tier: 0,
    aliases: ['Al Arabiya', 'Alarabiya'],
    socialAccounts: { twitter: '@alarabiya', linkedin: 'al-arabiya' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 95,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 8900, articlesAnalyzed: 567 },
    keyFindings: [
      'Major Arabic-language news channel',
      'Based in Dubai Media City',
      'Part of MBC Group',
      '24-hour news coverage'
    ],
    sources: ['alarabiya.com'],
    lastUpdated: '2026-04-27',
    description: 'Al Arabiya - major Arabic-language news channel based in Dubai, part of MBC Group.',
    role: 'News Channel',
    emirate: 'Dubai',
    organization: 'Al Arabiya',
    sector: 'Media',
    followerCount: 22000000
  },
  {
    id: 'al-jazeera',
    name: 'Al Jazeera',
    nameAr: 'الجزيرة',
    type: 'media',
    tier: 1,
    aliases: ['Al Jazeera', 'Aljazeera'],
    socialAccounts: { twitter: '@ajabreaking', linkedin: 'al-jazeera' },
    credibility: { verified: true, reliabilityScore: 92 },
    relationships: [
      { entityId: 'qatar', type: 'ownership', strength: 'direct' }
    ],
    uaeRelevance: 75,
    sentiment: 'MIXED',
    alertLevel: 'YELLOW',
    metrics: { mentions: 12450, articlesAnalyzed: 789 },
    keyFindings: [
      'Qatar-based news network',
      'Controversial in UAE',
      'Blocked in UAE during Qatar crisis',
      'Major Arabic-language news source'
    ],
    sources: ['aljazeera.com'],
    lastUpdated: '2026-04-27',
    description: 'Al Jazeera - Qatar-based news network, blocked in UAE during 2017-2021 crisis.',
    role: 'News Channel',
    emirate: null,
    organization: 'Al Jazeera',
    sector: 'Media',
    followerCount: 28000000
  },
  {
    id: 'sky-news-arabia',
    name: 'Sky News Arabia',
    nameAr: 'سكاي نيوش العربية',
    type: 'media',
    tier: 1,
    aliases: ['Sky News Arabia', 'SNA'],
    socialAccounts: { twitter: '@skynewsarabia', linkedin: 'sky-news-arabia' },
    credibility: { verified: true, reliabilityScore: 94 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 85,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 289 },
    keyFindings: [
      'Joint venture with Sky News UK',
      'Based in Abu Dhabi',
      '24-hour Arabic news coverage',
      'Trusted regional news source'
    ],
    sources: ['skynewsarabia.com'],
    lastUpdated: '2026-04-27',
    description: 'Sky News Arabia - Abu Dhabi-based 24-hour Arabic news channel, joint venture with Sky UK.',
    role: 'News Channel',
    emirate: 'Abu Dhabi',
    organization: 'Sky News Arabia',
    sector: 'Media',
    followerCount: 8900000
  },
  {
    id: 'wam',
    name: 'WAM (Emirates News Agency)',
    nameAr: 'وام',
    type: 'media',
    tier: 1,
    aliases: ['WAM', 'Emirates News Agency', 'Emirates News'],
    socialAccounts: { twitter: '@wamnews' },
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'mbz', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 92,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 5670, articlesAnalyzed: 456 },
    keyFindings: [
      'Official UAE news agency',
      'Source for official announcements',
      'Operates in Arabic and English',
      'Covers all emirates'
    ],
    sources: ['wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'WAM - Emirates News Agency, official UAE news agency for official announcements.',
    role: 'News Agency',
    emirate: 'Abu Dhabi',
    organization: 'WAM',
    sector: 'Media',
    followerCount: 1800000
  },
  {
    id: 'the-national',
    name: 'The National',
    nameAr: 'ذي ناشيونال',
    type: 'media',
    tier: 1,
    aliases: ['The National', 'The National UAE'],
    socialAccounts: { twitter: '@TheNationalUAE', linkedin: 'the-national' },
    credibility: { verified: true, reliabilityScore: 94 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 234 },
    keyFindings: [
      'Premier English-language newspaper in Abu Dhabi',
      'Founded 2008',
      'Part of Abu Dhabi Media',
      'In-depth coverage of UAE and region'
    ],
    sources: ['thenationalnews.com'],
    lastUpdated: '2026-04-27',
    description: 'The National - premier English-language newspaper in Abu Dhabi.',
    role: 'Newspaper',
    emirate: 'Abu Dhabi',
    organization: 'Abu Dhabi Media',
    sector: 'Media',
    followerCount: 1200000
  },
  {
    id: 'dubai-media-inc',
    name: 'Dubai Media Incorporated',
    nameAr: 'دبي للإعلام',
    type: 'media',
    tier: 1,
    aliases: ['DMI', 'Dubai Media Incorporated'],
    socialAccounts: { twitter: '@DXBMedia', linkedin: 'dubai-media-incorporated' },
    credibility: { verified: true, reliabilityScore: 95 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'direct' }
    ],
    uaeRelevance: 90,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 2340, articlesAnalyzed: 167 },
    keyFindings: [
      'Government media entity in Dubai',
      'Multiple TV and radio channels',
      'Dubai TV, Sama Dubai, Dubai Racing',
      'Controls multiple radio stations'
    ],
    sources: ['dubaimedia.com'],
    lastUpdated: '2026-04-27',
    description: 'Dubai Media Incorporated - government media entity controlling Dubai TV, radio and more.',
    role: 'Media Group',
    emirate: 'Dubai',
    organization: 'DMI',
    sector: 'Media',
    followerCount: 560000
  },
  {
    id: 'mbc-group',
    name: 'MBC Group',
    nameAr: 'مجموعة إم بي سي',
    type: 'media',
    tier: 0,
    aliases: ['MBC', 'MBC Group', 'Middle East Broadcasting Center'],
    socialAccounts: { twitter: '@mbc_group', linkedin: 'mbc-group' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 92,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 7890, articlesAnalyzed: 489 },
    keyFindings: [
      'Largest media group in Middle East',
      'Headquartered in Dubai',
      '16 free-to-air channels',
      'Shahid streaming platform'
    ],
    sources: ['mbcgroup.com'],
    lastUpdated: '2026-04-27',
    description: 'MBC Group - largest media group in Middle East with 16 TV channels and streaming platform.',
    role: 'Media Group',
    emirate: 'Dubai',
    organization: 'MBC Group',
    sector: 'Media',
    followerCount: 15000000
  }
];

// ============================================
// JOURNALISTS & MEDIA PERSONALITIES
// ============================================
export const journalists: EntityProfile[] = [
  {
    id: 'fatima',
    name: 'Fatima Al Maktoum',
    nameAr: 'فاطمة المكتوم',
    type: 'journalist',
    tier: 2,
    aliases: ['Fatima Al Maktoum'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 85 },
    relationships: [
      { entityId: 'maktoum-family', type: 'family', strength: 'direct' }
    ],
    uaeRelevance: 65,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 890, articlesAnalyzed: 56 },
    keyFindings: [
      'Journalist at Gulf News',
      'Member of Al Maktoum family',
      'Covers social affairs'
    ],
    sources: ['gulfnews.com'],
    lastUpdated: '2026-04-27',
    description: 'Fatima Al Maktoum - journalist at Gulf News from Al Maktoum family.',
    role: 'Journalist',
    emirate: 'Dubai',
    organization: 'Gulf News',
    beat: 'Social Affairs',
    followerCount: 45000
  },
  {
    id: 'mona',
    name: 'Mona Al Munkhf',
    nameAr: 'مona المرهف',
    type: 'journalist',
    tier: 3,
    aliases: ['Mona Al Munkhf'],
    socialAccounts: { twitter: '@monaalmunkhf' },
    credibility: { verified: true, reliabilityScore: 80 },
    relationships: [],
    uaeRelevance: 55,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 560, articlesAnalyzed: 34 },
    keyFindings: [
      'Journalist at The National',
      'Covers government affairs',
      'Based in Abu Dhabi'
    ],
    sources: ['thenationalnews.com'],
    lastUpdated: '2026-04-27',
    description: 'Mona Al Munkhf - journalist at The National covering government affairs.',
    role: 'Journalist',
    emirate: 'Abu Dhabi',
    organization: 'The National',
    beat: 'Government Affairs',
    followerCount: 28000
  },
  {
    id: 'reporter-dubai',
    name: 'Dubai Reporter',
    nameAr: 'مراسل دبي',
    type: 'journalist',
    tier: 3,
    aliases: ['Dubai Reporter'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 75 },
    relationships: [],
    uaeRelevance: 50,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 340, articlesAnalyzed: 23 },
    keyFindings: [
      'Anonymous Dubai-based reporter',
      'Covers breaking news in Dubai',
      'Citizen journalist'
    ],
    sources: ['various'],
    lastUpdated: '2026-04-27',
    description: 'Dubai-based citizen journalist covering breaking news.',
    role: 'Citizen Journalist',
    emirate: 'Dubai',
    followerCount: 12000
  },
  {
    id: 'mona-aly',
    name: 'Mona Aly',
    nameAr: 'مonaعلي',
    type: 'journalist',
    tier: 2,
    aliases: ['Mona Aly'],
    socialAccounts: { twitter: '@monaaly' },
    credibility: { verified: true, reliabilityScore: 88 },
    relationships: [],
    uaeRelevance: 70,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 1230, articlesAnalyzed: 89 },
    keyFindings: [
      'Anchor at Al Arabiya',
      'Former reporter at BBC',
      'Covers political affairs'
    ],
    sources: ['alarabiya.com'],
    lastUpdated: '2026-04-27',
    description: 'Mona Aly - anchor at Al Arabiya, former BBC reporter covering political affairs.',
    role: 'Anchor',
    emirate: 'Dubai',
    organization: 'Al Arabiya',
    beat: 'Political Affairs',
    followerCount: 890000
  },
  {
    id: 'mona-al-obaidi',
    name: 'Mona Al Obaidi',
    nameAr: 'مona العبيدي',
    type: 'journalist',
    tier: 3,
    aliases: ['Mona Al Obaidi'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 78 },
    relationships: [],
    uaeRelevance: 52,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 450, articlesAnalyzed: 28 },
    keyFindings: [
      'Reporter at Al Arabiya',
      'Covers regional affairs',
      'Based in Dubai'
    ],
    sources: ['alarabiya.com'],
    lastUpdated: '2026-04-27',
    description: 'Mona Al Obaidi - reporter at Al Arabiya covering regional affairs.',
    role: 'Reporter',
    emirate: 'Dubai',
    organization: 'Al Arabiya',
    beat: 'Regional Affairs',
    followerCount: 34000
  },
  {
    id: 'yousef-al-yassi',
    name: 'Yousef Al Yassi',
    nameAr: 'يوسف الياسي',
    type: 'journalist',
    tier: 3,
    aliases: ['Yousef Al Yassi'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 80 },
    relationships: [],
    uaeRelevance: 55,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 520, articlesAnalyzed: 34 },
    keyFindings: [
      'Reporter at Al Arabiya',
      'Covers economic affairs',
      'Based in Abu Dhabi'
    ],
    sources: ['alarabiya.com'],
    lastUpdated: '2026-04-27',
    description: 'Yousef Al Yassi - reporter at Al Arabiya covering economic affairs.',
    role: 'Reporter',
    emirate: 'Abu Dhabi',
    organization: 'Al Arabiya',
    beat: 'Economic Affairs',
    followerCount: 23000
  },
  {
    id: 'hussain-al-qaisi',
    name: 'Hussain Al Qaisi',
    nameAr: 'حسين القيسي',
    type: 'journalist',
    tier: 2,
    aliases: ['Hussain Al Qaisi'],
    socialAccounts: { twitter: '@hussainalqaisi' },
    credibility: { verified: true, reliabilityScore: 85 },
    relationships: [],
    uaeRelevance: 68,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 980, articlesAnalyzed: 67 },
    keyFindings: [
      'Journalist at Sky News Arabia',
      'Covers political developments',
      'Based in Abu Dhabi'
    ],
    sources: ['skynewsarabia.com'],
    lastUpdated: '2026-04-27',
    description: 'Hussain Al Qaisi - journalist at Sky News Arabia covering political developments.',
    role: 'Journalist',
    emirate: 'Abu Dhabi',
    organization: 'Sky News Arabia',
    beat: 'Politics',
    followerCount: 67000
  },
  {
    id: 'ali-al-muqlad',
    name: 'Ali Al Muqlad',
    nameAr: 'علي المققل',
    type: 'journalist',
    tier: 3,
    aliases: ['Ali Al Muqlad'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 78 },
    relationships: [],
    uaeRelevance: 52,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 430, articlesAnalyzed: 29 },
    keyFindings: [
      'Journalist at Sky News Arabia',
      'Covers security affairs',
      'Based in Abu Dhabi'
    ],
    sources: ['skynewsarabia.com'],
    lastUpdated: '2026-04-27',
    description: 'Ali Al Muqlad - journalist at Sky News Arabia covering security affairs.',
    role: 'Journalist',
    emirate: 'Abu Dhabi',
    organization: 'Sky News Arabia',
    beat: 'Security Affairs',
    followerCount: 29000
  }
];

// ============================================
// INFLUENCERS
// ============================================
export const influencers: EntityProfile[] = [
  {
    id: 'huda-kattan',
    name: 'Huda Kattan',
    nameAr: 'هدى钾滩',
    type: 'influencer',
    tier: 0,
    aliases: ['Huda Kattan', 'Huda Beauty'],
    socialAccounts: { instagram: '@hudabeauty', twitter: '@hudakattan' },
    credibility: { verified: true, reliabilityScore: 92 },
    relationships: [],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 5670, articlesAnalyzed: 234 },
    keyFindings: [
      'Founder of Huda Beauty',
      '53+ million Instagram followers',
      'Most-followed beauty influencer in Middle East',
      'Dubai-based beauty entrepreneur'
    ],
    sources: ['hudabeauty.com', 'instagram.com/hudabeauty'],
    lastUpdated: '2026-04-27',
    description: 'Huda Kattan - founder of Huda Beauty, Dubai-based beauty influencer with 53M+ Instagram followers.',
    role: 'Beauty Influencer',
    emirate: 'Dubai',
    organization: 'Huda Beauty',
    sector: 'Beauty',
    followerCount: 53000000
  },
  {
    id: 'joelle-mardinian',
    name: 'Joelle Mardinian',
    nameAr: 'جويل مردينيان',
    type: 'influencer',
    tier: 1,
    aliases: ['Joelle Mardinian', 'Joelle'],
    socialAccounts: { instagram: '@joelle.mardinian', twitter: '@joellemardinian' },
    credibility: { verified: true, reliabilityScore: 90 },
    relationships: [],
    uaeRelevance: 82,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 189 },
    keyFindings: [
      'Beauty and lifestyle influencer',
      '15+ million Instagram followers',
      'Founded JM Beauty Clinic',
      'UAE-based Syrian entrepreneur'
    ],
    sources: ['instagram.com/joelle.mardinian'],
    lastUpdated: '2026-04-27',
    description: 'Joelle Mardinian - beauty and lifestyle influencer, founder of JM Beauty Clinic.',
    role: 'Beauty Influencer',
    emirate: 'Dubai',
    organization: 'JM Beauty',
    sector: 'Beauty',
    followerCount: 15000000
  },
  {
    id: 'noor-stars',
    name: 'Noor Stars',
    nameAr: 'نور ستارز',
    type: 'influencer',
    tier: 1,
    aliases: ['Noor Stars', 'Noor'],
    socialAccounts: { instagram: '@noor.stars', twitter: '@noorstars' },
    credibility: { verified: true, reliabilityScore: 88 },
    relationships: [],
    uaeRelevance: 80,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 156 },
    keyFindings: [
      'Beauty and fashion influencer',
      '14+ million Instagram followers',
      'UAE-based influencer',
      'Part of Stars Stars production'
    ],
    sources: ['instagram.com/noor.stars'],
    lastUpdated: '2026-04-27',
    description: 'Noor Stars - beauty and fashion influencer from UAE with 14M+ followers.',
    role: 'Beauty Influencer',
    emirate: 'Dubai',
    sector: 'Beauty/Fashion',
    followerCount: 14000000
  },
  {
    id: 'fazza',
    name: 'Fazza (Majid Al Fardan)',
    nameAr: 'فزاع',
    type: 'influencer',
    tier: 1,
    aliases: ['Fazza', 'Majid Al Fardan'],
    socialAccounts: { instagram: '@fazza3', twitter: '@fazza3' },
    credibility: { verified: true, reliabilityScore: 85 },
    relationships: [
      { entityId: 'maktoum-family', type: 'family', strength: 'indirect' }
    ],
    uaeRelevance: 78,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 2340, articlesAnalyzed: 98 },
    keyFindings: [
      'Member of Dubai royal family',
      'Poet and social media personality',
      'Known for poetry and literature',
      'Followed for cultural content'
    ],
    sources: ['instagram.com/fazza3'],
    lastUpdated: '2026-04-27',
    description: 'Fazza (Majid Al Fardan) - member of Al Maktoum family known for poetry and cultural content.',
    role: 'Cultural Influencer',
    emirate: 'Dubai',
    sector: 'Culture/ Poetry',
    followerCount: 4300000
  },
  {
    id: 'danya-al-khatib',
    name: 'Danya Al Khatib',
    nameAr: 'دنيا الخطيب',
    type: 'influencer',
    tier: 2,
    aliases: ['Danya Al Khatib'],
    socialAccounts: { instagram: '@danya.alkhatib' },
    credibility: { verified: true, reliabilityScore: 82 },
    relationships: [],
    uaeRelevance: 68,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 1890, articlesAnalyzed: 87 },
    keyFindings: [
      'Fashion and lifestyle influencer',
      'Based in Dubai',
      'Part of regional influencer network'
    ],
    sources: ['instagram.com/danya.alkhatib'],
    lastUpdated: '2026-04-27',
    description: 'Danya Al Khatib - fashion and lifestyle influencer based in Dubai.',
    role: 'Fashion Influencer',
    emirate: 'Dubai',
    sector: 'Fashion',
    followerCount: 2800000
  },
  {
    id: 'badr-streak',
    name: 'Badr Streak',
    nameAr: 'بدر ستريك',
    type: 'influencer',
    tier: 2,
    aliases: ['Badr Streak', 'Badr'],
    socialAccounts: { instagram: '@badr.streak', twitter: '@badrstreak' },
    credibility: { verified: true, reliabilityScore: 80 },
    relationships: [],
    uaeRelevance: 65,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 1560, articlesAnalyzed: 76 },
    keyFindings: [
      'Fitness influencer from UAE',
      'Known for workout content',
      'Promotes healthy lifestyle',
      'Large following in Gulf region'
    ],
    sources: ['instagram.com/badr.streak'],
    lastUpdated: '2026-04-27',
    description: 'Badr Streak - UAE-based fitness influencer promoting healthy lifestyle.',
    role: 'Fitness Influencer',
    emirate: 'Dubai',
    sector: 'Fitness',
    followerCount: 1900000
  }
];

// ============================================
// CORPORATE ENTITIES
// ============================================
export const corporateEntities: EntityProfile[] = [
  {
    id: 'adnoc-corp',
    name: 'ADNOC',
    nameAr: 'أدنوك',
    type: 'corporate',
    tier: 0,
    aliases: ['Abu Dhabi National Oil Company', 'ADNOC'],
    socialAccounts: { twitter: '@AdnocGroup', linkedin: 'adnoc' },
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [
      { entityId: 'mbz', type: 'ownership', strength: 'direct' }
    ],
    uaeRelevance: 100,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 8920, articlesAnalyzed: 456 },
    keyFindings: [
      'Third largest oil company globally',
      'Produced 4.2 million barrels per day',
      '16.2 billion barrels proven reserves',
      'Sultan Al Jaber as CEO'
    ],
    sources: ['adnoc.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Abu Dhabi National Oil Company - one of the world\'s largest integrated oil and gas companies.',
    role: 'National Oil Company',
    emirate: 'Abu Dhabi',
    organization: 'ADNOC',
    sector: 'Energy',
    followerCount: 520000
  },
  {
    id: 'mubadala-corp',
    name: 'Mubadala',
    nameAr: 'مبادلة',
    type: 'corporate',
    tier: 0,
    aliases: ['Mubadala Investment Company'],
    socialAccounts: { twitter: '@mubadala', linkedin: 'mubadala' },
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'mansour', type: 'leadership', strength: 'direct' }
    ],
    uaeRelevance: 98,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 6540, articlesAnalyzed: 378 },
    keyFindings: [
      '$287 billion in assets under management',
      'Global sovereign wealth fund',
      'Major tech investor including GlobalFoundries',
      'Investments in 50+ countries'
    ],
    sources: ['mubadala.ae'],
    lastUpdated: '2026-04-27',
    description: 'Mubadala Investment Company - Abu Dhabi sovereign wealth fund with $287B in assets.',
    role: 'Sovereign Wealth Fund',
    emirate: 'Abu Dhabi',
    organization: 'Mubadala',
    sector: 'Investment',
    followerCount: 380000
  },
  {
    id: 'adia-corp',
    name: 'ADIA',
    nameAr: 'أديا',
    type: 'corporate',
    tier: 0,
    aliases: ['Abu Dhabi Investment Authority'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [
      { entityId: 'mbz', type: 'ownership', strength: 'direct' }
    ],
    uaeRelevance: 100,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 5670, articlesAnalyzed: 334 },
    keyFindings: [
      'Estimated $993 billion in assets',
      'One of largest sovereign wealth funds globally',
      'Investment portfolio across global markets',
      'No public disclosure requirements'
    ],
    sources: ['adia.ae', 'swf-institute.com'],
    lastUpdated: '2026-04-27',
    description: 'Abu Dhabi Investment Authority - one of the world\'s largest sovereign wealth funds.',
    role: 'Sovereign Wealth Fund',
    emirate: 'Abu Dhabi',
    organization: 'ADIA',
    sector: 'Investment',
    followerCount: 0
  },
  {
    id: 'dp-world-corp',
    name: 'DP World',
    nameAr: 'دي بي ورلد',
    type: 'corporate',
    tier: 0,
    aliases: ['DP World', 'Dubai Ports World'],
    socialAccounts: { twitter: '@DPWorld', linkedin: 'dp-world' },
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 96,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 5670, articlesAnalyzed: 312 },
    keyFindings: [
      'Global port operator',
      'Operates 55+ container terminals worldwide',
      'Handles 70 million TEU annually',
      'Sultan Ahmed bin Sulayem as chairman'
    ],
    sources: ['dpworld.com', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'DP World - global port operator headquartered in Dubai, handling 70 million TEU annually.',
    role: 'Port Operator',
    emirate: 'Dubai',
    organization: 'DP World',
    sector: 'Logistics',
    followerCount: 210000
  },
  {
    id: 'emirates-corp',
    name: 'Emirates Airline',
    nameAr: 'طيران الإمارات',
    type: 'corporate',
    tier: 0,
    aliases: ['Emirates', 'Emirates Airlines'],
    socialAccounts: { twitter: '@emirates', linkedin: 'emirates' },
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 98,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 12450, articlesAnalyzed: 678 },
    keyFindings: [
      'Largest airline in Middle East',
      'Fleet of 260+ aircraft',
      'Serves 150+ destinations',
      'Unaudited profit of AED 4.7 billion (2023-24)'
    ],
    sources: ['emirates.com', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Emirates Airline - largest airline in the Middle East with fleet of 260+ aircraft.',
    role: 'National Carrier',
    emirate: 'Dubai',
    organization: 'Emirates',
    sector: 'Aviation',
    followerCount: 12000000
  },
  {
    id: 'etihad',
    name: 'Etihad Airways',
    nameAr: 'الاتحاد للطيران',
    type: 'corporate',
    tier: 1,
    aliases: ['Etihad', 'Etihad Airways'],
    socialAccounts: { twitter: '@etihad', linkedin: 'etihad-airways' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'mbz', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 92,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 6780, articlesAnalyzed: 389 },
    keyFindings: [
      'National carrier of Abu Dhabi',
      'Fleet of 70+ aircraft',
      'Serves 90+ destinations',
      'Anthony J. Mandelli as CEO'
    ],
    sources: ['etihad.com'],
    lastUpdated: '2026-04-27',
    description: 'Etihad Airways - national carrier of Abu Dhabi serving 90+ destinations.',
    role: 'National Carrier',
    emirate: 'Abu Dhabi',
    organization: 'Etihad Airways',
    sector: 'Aviation',
    followerCount: 2100000
  },
  {
    id: 'fab',
    name: 'First Abu Dhabi Bank',
    nameAr: 'بنك أبوظبي الأول',
    type: 'corporate',
    tier: 1,
    aliases: ['FAB', 'First Abu Dhabi Bank'],
    socialAccounts: { twitter: '@fabbank', linkedin: 'first-abu-dhabi-bank' },
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [
      { entityId: 'mbz', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 92,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 267 },
    keyFindings: [
      'Largest bank in UAE by market cap',
      'AED 1.1 trillion in total assets',
      'Operations in 20+ countries',
      'Formed from merger of FAB and NBAD'
    ],
    sources: ['fab.com'],
    lastUpdated: '2026-04-27',
    description: 'First Abu Dhabi Bank (FAB) - largest bank in UAE by market cap with AED 1.1T in assets.',
    role: 'Banking Group',
    emirate: 'Abu Dhabi',
    organization: 'FAB',
    sector: 'Banking',
    followerCount: 340000
  },
  {
    id: 'emirates-nbd-corp',
    name: 'Emirates NBD',
    nameAr: 'بنك الإمارات دبي الوطني',
    type: 'corporate',
    tier: 1,
    aliases: ['Emirates NBD', 'ENBD'],
    socialAccounts: { twitter: '@EmiratesNBD', linkedin: 'emirates-nbd' },
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 90,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 198 },
    keyFindings: [
      'Largest bank in UAE by assets',
      'AED 900 billion in assets',
      'Operations in UAE, Saudi Arabia, Egypt',
      'Sharia-compliant banking via Emirates Islamic'
    ],
    sources: ['emiratesnbd.com'],
    lastUpdated: '2026-04-27',
    description: 'Emirates NBD - largest bank in UAE with AED 900 billion in assets.',
    role: 'Banking Group',
    emirate: 'Dubai',
    organization: 'Emirates NBD',
    sector: 'Banking',
    followerCount: 650000
  },
  {
    id: 'adcb',
    name: 'ADCB',
    nameAr: 'بنك أبوظبي التجاري',
    type: 'corporate',
    tier: 1,
    aliases: ['ADCB', 'Abu Dhabi Commercial Bank'],
    socialAccounts: { twitter: '@ADCBGroup', linkedin: 'adcb' },
    credibility: { verified: true, reliabilityScore: 95 },
    relationships: [
      { entityId: 'mbz', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 2890, articlesAnalyzed: 167 },
    keyFindings: [
      'Major UAE bank',
      'AED 500+ billion in assets',
      'Operations across UAE and internationally',
      'Customer base of 1+ million'
    ],
    sources: ['adcb.com'],
    lastUpdated: '2026-04-27',
    description: 'Abu Dhabi Commercial Bank (ADCB) - major UAE bank with AED 500B+ in assets.',
    role: 'Banking Group',
    emirate: 'Abu Dhabi',
    organization: 'ADCB',
    sector: 'Banking',
    followerCount: 290000
  },
  {
    id: 'dib',
    name: 'Dubai Islamic Bank',
    nameAr: 'بنك دبي الإسلامي',
    type: 'corporate',
    tier: 1,
    aliases: ['DIB', 'Dubai Islamic Bank'],
    socialAccounts: { twitter: '@DubaiIslamic', linkedin: 'dubai-islamic-bank' },
    credibility: { verified: true, reliabilityScore: 95 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 2780, articlesAnalyzed: 156 },
    keyFindings: [
      'Largest Islamic bank in UAE',
      'Pioneer of Islamic banking',
      'AED 300+ billion in assets',
      'Operations in multiple countries'
    ],
    sources: ['dib.ae'],
    lastUpdated: '2026-04-27',
    description: 'Dubai Islamic Bank (DIB) - largest Islamic bank in UAE, pioneer of Islamic banking.',
    role: 'Islamic Bank',
    emirate: 'Dubai',
    organization: 'DIB',
    sector: 'Banking',
    followerCount: 450000
  },
  {
    id: 'emaar-corp',
    name: 'Emaar Properties',
    nameAr: 'إعمار العقارية',
    type: 'corporate',
    tier: 1,
    aliases: ['Emaar', 'Emaar Properties'],
    socialAccounts: { twitter: '@emaar', linkedin: 'emaar-properties' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'mbr', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 90,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 6780, articlesAnalyzed: 389 },
    keyFindings: [
      'Developed Burj Khalifa',
      'Developer of Downtown Dubai',
      'Shopping malls operator',
      'Mohammed Alabbar as founder'
    ],
    sources: ['emaar.com'],
    lastUpdated: '2026-04-27',
    description: 'Emaar Properties - major real estate developer responsible for Burj Khalifa and Downtown Dubai.',
    role: 'Real Estate Developer',
    emirate: 'Dubai',
    organization: 'Emaar',
    sector: 'Real Estate',
    followerCount: 2300000
  },
  {
    id: 'lulu',
    name: 'LuLu Group',
    nameAr: 'لولو جروب',
    type: 'corporate',
    tier: 1,
    aliases: ['LuLu', 'LuLu Group International'],
    socialAccounts: { twitter: '@luluexchange', linkedin: 'lulu-group' },
    credibility: { verified: true, reliabilityScore: 94 },
    relationships: [],
    uaeRelevance: 85,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 198 },
    keyFindings: [
      'Major retail chain in UAE',
      '150+ hypermarkets across GCC',
      'Founded by Yusuff Ali',
      'Employs 60,000+ people'
    ],
    sources: ['lulugroup.com'],
    lastUpdated: '2026-04-27',
    description: 'LuLu Group - major retail chain with 150+ hypermarkets across GCC, founded by Yusuff Ali.',
    role: 'Retail Group',
    emirate: 'Abu Dhabi',
    organization: 'LuLu Group',
    sector: 'Retail',
    followerCount: 1800000
  }
];

// ============================================
// INTERNATIONAL ORGANIZATIONS
// ============================================
export const internationalOrgs: EntityProfile[] = [
  {
    id: 'unhcr',
    name: 'UNHCR',
    nameAr: 'المفوضية السامية لشؤون اللاجئين',
    type: 'international',
    tier: 1,
    aliases: ['United Nations High Commissioner for Refugees'],
    socialAccounts: { twitter: '@UNHCR', linkedin: 'unhcr' },
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [],
    uaeRelevance: 85,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 2340, articlesAnalyzed: 156 },
    keyFindings: [
      'UN refugee agency',
      'Active in UAE since 1974',
      'Manages refugee programs in region',
      'UAE contributes significantly'
    ],
    sources: ['unhcr.org', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'UNHCR - United Nations High Commissioner for Refugees, active in UAE since 1974.',
    role: 'UN Agency',
    organization: 'UNHCR',
    sector: 'Humanitarian',
    followerCount: 8900000
  },
  {
    id: 'unicef',
    name: 'UNICEF',
    nameAr: 'يونيسف',
    type: 'international',
    tier: 1,
    aliases: ['United Nations Children\'s Fund'],
    socialAccounts: { twitter: '@UNICEF', linkedin: 'unicef' },
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [],
    uaeRelevance: 85,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 234 },
    keyFindings: [
      'UN children\'s agency',
      'Strong UAE partnership',
      'Child welfare programs',
      'UAE supported COVID vaccine distribution'
    ],
    sources: ['unicef.org', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'UNICEF - United Nations Children\'s Fund with strong UAE partnership.',
    role: 'UN Agency',
    organization: 'UNICEF',
    sector: 'Humanitarian',
    followerCount: 15000000
  },
  {
    id: 'undp',
    name: 'UNDP',
    nameAr: 'برنامج الأمم المتحدة الإنمائي',
    type: 'international',
    tier: 1,
    aliases: ['United Nations Development Programme'],
    socialAccounts: { twitter: '@UNDP', linkedin: 'undp' },
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [],
    uaeRelevance: 82,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 1890, articlesAnalyzed: 123 },
    keyFindings: [
      'UN development agency',
      'Active in UAE regional programs',
      'Sustainable development initiatives',
      'UAE donor and partner'
    ],
    sources: ['undp.org', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'UNDP - United Nations Development Programme, UAE donor and regional partner.',
    role: 'UN Agency',
    organization: 'UNDP',
    sector: 'Development',
    followerCount: 5600000
  },
  {
    id: 'who',
    name: 'WHO',
    nameAr: 'منظمة الصحة العالمية',
    type: 'international',
    tier: 1,
    aliases: ['World Health Organization'],
    socialAccounts: { twitter: '@WHO', linkedin: 'world-health-organization' },
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 312 },
    keyFindings: [
      'UN health agency',
      'UAE key partner in health emergencies',
      'COVID-19 response coordination',
      'Regional health initiatives'
    ],
    sources: ['who.int', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'WHO - World Health Organization, key UAE partner in health emergencies.',
    role: 'UN Agency',
    organization: 'WHO',
    sector: 'Health',
    followerCount: 12000000
  },
  {
    id: 'ilo',
    name: 'ILO',
    nameAr: 'منظمة العمل الدولية',
    type: 'international',
    tier: 2,
    aliases: ['International Labour Organization'],
    socialAccounts: { twitter: '@ILO', linkedin: 'ilo' },
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [],
    uaeRelevance: 72,
    sentiment: 'MIXED',
    alertLevel: 'YELLOW',
    metrics: { mentions: 1230, articlesAnalyzed: 89 },
    keyFindings: [
      'UN labor agency',
      'Monitors worker rights in UAE',
      'Kafala system concerns',
      'Technical cooperation with UAE'
    ],
    sources: ['ilo.org'],
    lastUpdated: '2026-04-27',
    description: 'ILO - International Labour Organization, monitors labor rights in UAE.',
    role: 'UN Agency',
    organization: 'ILO',
    sector: 'Labor',
    followerCount: 2300000
  },
  {
    id: 'gcc',
    name: 'GCC',
    nameAr: 'مجلس التعاون الخليجي',
    type: 'international',
    tier: 0,
    aliases: ['Gulf Cooperation Council', 'Gulf Cooperation Council'],
    socialAccounts: { twitter: '@GCCSG', linkedin: 'gcc' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'mbz', type: 'membership', strength: 'direct' }
    ],
    uaeRelevance: 98,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 5670, articlesAnalyzed: 389 },
    keyFindings: [
      'Regional bloc of 6 Gulf states',
      'Founded 1981',
      'UAE founding member',
      '面临 Qatar crisis 2017-2021'
    ],
    sources: ['gcc-sg.org', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'GCC - Gulf Cooperation Council, regional bloc with UAE as founding member.',
    role: 'Regional Organization',
    organization: 'GCC',
    sector: 'Regional Cooperation',
    followerCount: 1800000
  },
  {
    id: 'arab-league',
    name: 'Arab League',
    nameAr: 'الجامعة العربية',
    type: 'international',
    tier: 1,
    aliases: ['League of Arab States', 'Arab League'],
    socialAccounts: { twitter: '@arableague_gs', linkedin: 'league-of-arab-states' },
    credibility: { verified: true, reliabilityScore: 95 },
    relationships: [
      { entityId: 'mbz', type: 'membership', strength: 'direct' }
    ],
    uaeRelevance: 90,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 234 },
    keyFindings: [
      'Regional bloc of Arab states',
      'Founded 1945',
      '22 member states',
      'UAE influential member'
    ],
    sources: ['lasportal.net', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Arab League - regional bloc of 22 Arab states, UAE is influential member.',
    role: 'Regional Organization',
    organization: 'Arab League',
    sector: 'Regional Cooperation',
    followerCount: 2100000
  },
  {
    id: 'oic',
    name: 'OIC',
    nameAr: 'منظمة التعاون الإسلامي',
    type: 'international',
    tier: 1,
    aliases: ['Organisation of Islamic Cooperation', 'Organization of Islamic Cooperation'],
    socialAccounts: { twitter: '@OIC_OCI', linkedin: 'oic-oci' },
    credibility: { verified: true, reliabilityScore: 95 },
    relationships: [
      { entityId: 'mbz', type: 'membership', strength: 'direct' }
    ],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 2890, articlesAnalyzed: 189 },
    keyFindings: [
      'Largest Muslim intergovernmental organization',
      '57 member states',
      'Founded 1969',
      'UAE plays active role'
    ],
    sources: ['oic-oci.org', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'OIC - Organisation of Islamic Cooperation, 57 member states, UAE is active member.',
    role: 'International Organization',
    organization: 'OIC',
    sector: 'International Cooperation',
    followerCount: 1900000
  },
  {
    id: 'opec',
    name: 'OPEC',
    nameAr: 'أوبك',
    type: 'international',
    tier: 1,
    aliases: ['Organization of the Petroleum Exporting Countries'],
    socialAccounts: { twitter: '@OPECSecretariat', linkedin: 'opec' },
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [
      { entityId: 'adnoc', type: 'membership', strength: 'direct' }
    ],
    uaeRelevance: 90,
    sentiment: 'MIXED',
    alertLevel: 'YELLOW',
    metrics: { mentions: 4560, articlesAnalyzed: 312 },
    keyFindings: [
      'Oil producing cartel',
      'UAE through ADNOC membership',
      '13 member countries',
      'Major influence on oil prices'
    ],
    sources: ['opec.org', 'adnoc.ae'],
    lastUpdated: '2026-04-27',
    description: 'OPEC - Organization of the Petroleum Exporting Countries, UAE member through ADNOC.',
    role: 'International Organization',
    organization: 'OPEC',
    sector: 'Energy',
    followerCount: 1200000
  },
  {
    id: 'imf',
    name: 'IMF',
    nameAr: 'صندوق النقد الدولي',
    type: 'international',
    tier: 1,
    aliases: ['International Monetary Fund'],
    socialAccounts: { twitter: '@IMFNews', linkedin: 'international-monetary-fund' },
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [],
    uaeRelevance: 85,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 2340, articlesAnalyzed: 156 },
    keyFindings: [
      'Global financial institution',
      'UAE quota significant',
      'Economic surveillance of UAE',
      'Technical assistance programs'
    ],
    sources: ['imf.org'],
    lastUpdated: '2026-04-27',
    description: 'IMF - International Monetary Fund, provides economic surveillance and technical assistance to UAE.',
    role: 'International Financial Institution',
    organization: 'IMF',
    sector: 'Finance',
    followerCount: 4500000
  },
  {
    id: 'world-bank',
    name: 'World Bank',
    nameAr: 'البنك الدولي',
    type: 'international',
    tier: 1,
    aliases: ['World Bank Group'],
    socialAccounts: { twitter: '@WorldBank', linkedin: 'world-bank' },
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [],
    uaeRelevance: 82,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 1890, articlesAnalyzed: 123 },
    keyFindings: [
      'Global development institution',
      'UAE as donor country',
      'Climate finance partnerships',
      'Knowledge sharing programs'
    ],
    sources: ['worldbank.org'],
    lastUpdated: '2026-04-27',
    description: 'World Bank - global development institution with UAE as donor partner.',
    role: 'International Financial Institution',
    organization: 'World Bank',
    sector: 'Development',
    followerCount: 8900000
  },
  {
    id: 'wto',
    name: 'WTO',
    nameAr: 'منظمة التجارة العالمية',
    type: 'international',
    tier: 2,
    aliases: ['World Trade Organization'],
    socialAccounts: { twitter: '@WTO', linkedin: 'world-trade-organization' },
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [],
    uaeRelevance: 80,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 1560, articlesAnalyzed: 98 },
    keyFindings: [
      'Global trade body',
      'UAE as 42nd largest trader',
      'Dispute settlement member',
      'Trade facilitation cooperation'
    ],
    sources: ['wto.org'],
    lastUpdated: '2026-04-27',
    description: 'WTO - World Trade Organization, UAE member with significant trade role.',
    role: 'International Organization',
    organization: 'WTO',
    sector: 'Trade',
    followerCount: 3400000
  }
];

// ============================================
// INFRASTRUCTURE & LANDMARK ENTITIES
// ============================================
export const infrastructureEntities: EntityProfile[] = [
  {
    id: 'dxb',
    name: 'Dubai International Airport',
    nameAr: 'مطار دبي الدولي',
    type: 'infrastructure',
    tier: 0,
    aliases: ['DXB', 'Dubai International Airport', 'OMDB'],
    socialAccounts: { twitter: '@DubaiAirports', linkedin: 'dubai-airports' },
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'emirates-airline', type: 'hub', strength: 'direct' }
    ],
    uaeRelevance: 100,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 8920, articlesAnalyzed: 567 },
    keyFindings: [
      'World\'s busiest international passenger airport',
      '95.2 million passengers in 2025',
      '4,500+ weekly flights to 270+ destinations',
      'February-March 2026 Iran conflict disruptions'
    ],
    sources: ['dubaiairports.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Dubai International Airport (DXB) - world\'s busiest international passenger airport with 95.2M passengers in 2025.',
    role: 'International Airport',
    emirate: 'Dubai',
    sector: 'Aviation',
    followerCount: 2100000
  },
  {
    id: 'auh',
    name: 'Zayed International Airport',
    nameAr: 'مطار زايد الدولي',
    type: 'infrastructure',
    tier: 1,
    aliases: ['AUH', 'Zayed International Airport', 'Abu Dhabi International'],
    socialAccounts: { twitter: '@AUH_AbuDhabi' },
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [
      { entityId: 'etihad', type: 'hub', strength: 'direct' }
    ],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 312 },
    keyFindings: [
      'Abu Dhabi hub airport',
      '29.5 million passengers in 2024',
      'Only US preclearance facility in Middle East',
      'Renamed from Abu Dhabi International February 2024'
    ],
    sources: ['zayedinternationalairport.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Zayed International Airport (AUH) - Abu Dhabi hub, only US preclearance in Middle East.',
    role: 'International Airport',
    emirate: 'Abu Dhabi',
    sector: 'Aviation',
    followerCount: 560000
  },
  {
    id: 'dwc',
    name: 'Al Maktoum International Airport',
    nameAr: 'مطار آل مكتوم الدولي',
    type: 'infrastructure',
    tier: 1,
    aliases: ['DWC', 'Al Maktoum International', 'Dubai World Central'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 92 },
    relationships: [
      { entityId: 'dxb', type: 'future-replacement', strength: 'direct' }
    ],
    uaeRelevance: 85,
    sentiment: 'POSITIVE',
    alertLevel: 'YELLOW',
    metrics: { mentions: 2340, articlesAnalyzed: 145 },
    keyFindings: [
      'Future Dubai hub airport',
      '$35 billion expansion announced 2024',
      'Projected 260 million passengers capacity',
      'Scheduled to replace DXB when fully operational'
    ],
    sources: ['dwc.com'],
    lastUpdated: '2026-04-27',
    description: 'Al Maktoum International Airport (DWC) - future Dubai hub with $35B expansion planned.',
    role: 'International Airport',
    emirate: 'Dubai',
    sector: 'Aviation',
    followerCount: 0
  },
  {
    id: 'jebel-ali-port',
    name: 'Jebel Ali Port',
    nameAr: 'ميناء جبل علي',
    type: 'infrastructure',
    tier: 0,
    aliases: ['Jebel Ali Port', 'Port of Jebel Ali'],
    socialAccounts: { twitter: '@DPWorld', linkedin: 'dp-world' },
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'dp-world', type: 'operated-by', strength: 'direct' }
    ],
    uaeRelevance: 96,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 289 },
    keyFindings: [
      'World\'s 9th busiest port',
      'Largest man-made harbour',
      '13.7 million TEU throughput 2021',
      'Part of Maritime Silk Road'
    ],
    sources: ['dpworld.com', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Jebel Ali Port - world\'s 9th busiest port, largest man-made harbour, operated by DP World.',
    role: 'Port',
    emirate: 'Dubai',
    sector: 'Logistics',
    followerCount: 210000
  },
  {
    id: 'khalifa-port',
    name: 'Khalifa Port',
    nameAr: 'ميناء خليفة',
    type: 'infrastructure',
    tier: 1,
    aliases: ['Khalifa Port', 'Khalifa Port Kizad'],
    socialAccounts: { twitter: '@AbuDhabiPorts', linkedin: 'abu-dhabi-ports' },
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 2890, articlesAnalyzed: 178 },
    keyFindings: [
      'Abu Dhabi flagship port',
      '7.8 million TEU capacity',
      'First semi-automated port in region',
      'Part of Maritime Silk Road'
    ],
    sources: ['khalifaport.adports.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Khalifa Port - Abu Dhabi flagship port, first semi-automated container terminal in region.',
    role: 'Port',
    emirate: 'Abu Dhabi',
    sector: 'Logistics',
    followerCount: 120000
  },
  {
    id: 'fujairah-port',
    name: 'Port of Fujairah',
    nameAr: 'ميناء الفجيرة',
    type: 'infrastructure',
    tier: 1,
    aliases: ['Fujairah Port', 'Port of Fujairah'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 94 },
    relationships: [],
    uaeRelevance: 85,
    sentiment: 'NEGATIVE',
    alertLevel: 'RED',
    metrics: { mentions: 5670, articlesAnalyzed: 389 },
    keyFindings: [
      'UAE\'s only eastern seaboard port',
      'World\'s second largest bunkering hub',
      'March 2026 Iranian attacks damaged oil storage',
      'Critical for oil exports bypassing Strait of Hormuz'
    ],
    sources: ['fujairahport.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Port of Fujairah - UAE\'s only eastern seaboard port, attacked by Iran in March 2026.',
    role: 'Port',
    emirate: 'Fujairah',
    sector: 'Logistics',
    followerCount: 0
  },
  {
    id: 'barakah',
    name: 'Barakah Nuclear Power Plant',
    nameAr: 'محطة براكة للطاقة النووية',
    type: 'infrastructure',
    tier: 0,
    aliases: ['Barakah', 'Barakah Nuclear Plant', 'ENEC'],
    socialAccounts: { twitter: '@ENEC_UAE' },
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'mbz', type: 'ownership', strength: 'indirect' }
    ],
    uaeRelevance: 95,
    sentiment: 'POSITIVE',
    alertLevel: 'YELLOW',
    metrics: { mentions: 6780, articlesAnalyzed: 456 },
    keyFindings: [
      'First nuclear power plant in Arab world',
      '4 reactors, 5,600 MW total capacity',
      'Provides 25% of UAE electricity',
      'March 2026 Iran listed as potential target'
    ],
    sources: ['enec.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Barakah Nuclear Power Plant - first nuclear plant in Arab world, provides 25% of UAE electricity.',
    role: 'Nuclear Power Plant',
    emirate: 'Abu Dhabi',
    sector: 'Energy',
    followerCount: 340000
  },
  {
    id: 'mbr-solar-park',
    name: 'Mohammed bin Rashid Solar Park',
    nameAr: 'مجمع محمد بن راشد للطاقة الشمسية',
    type: 'infrastructure',
    tier: 1,
    aliases: ['MBR Solar Park', 'Solar Park'],
    socialAccounts: { twitter: '@DEWAKE' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [],
    uaeRelevance: 85,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 234 },
    keyFindings: [
      'World\'s largest single-site solar park',
      '1,800 MW currently operational',
      '4,660 MW planned by 2030',
      'Phase 6 1,800 MW inaugurated 2024'
    ],
    sources: ['dewa.gov.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Mohammed bin Rashid Solar Park - world\'s largest single-site solar park with 1,800 MW operational.',
    role: 'Solar Power Plant',
    emirate: 'Dubai',
    sector: 'Energy',
    followerCount: 180000
  },
  {
    id: 'burj-khalifa',
    name: 'Burj Khalifa',
    nameAr: 'برج خليفة',
    type: 'infrastructure',
    tier: 0,
    aliases: ['Burj Khalifa', 'Khalifa Tower'],
    socialAccounts: { twitter: '@burjkhalifa' },
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [
      { entityId: 'emaar', type: 'developed-by', strength: 'direct' }
    ],
    uaeRelevance: 98,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 12450, articlesAnalyzed: 789 },
    keyFindings: [
      'World\'s tallest building at 828 meters',
      'Opened January 4, 2010',
      '$1.5 billion construction cost',
      '1,544 apartments, 160 floors'
    ],
    sources: ['burjkhalifa.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Burj Khalifa - world\'s tallest building at 828m, icon of Dubai development.',
    role: 'Landmark',
    emirate: 'Dubai',
    sector: 'Real Estate',
    followerCount: 4500000
  },
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    nameAr: 'نخلة جميرا',
    type: 'infrastructure',
    tier: 1,
    aliases: ['Palm Jumeirah', 'Palm Islands'],
    socialAccounts: { twitter: '@palmjumeira' },
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [
      { entityId: 'nakheel', type: 'developed-by', strength: 'direct' }
    ],
    uaeRelevance: 90,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 7890, articlesAnalyzed: 489 },
    keyFindings: [
      'Iconic artificial archipelago',
      '25,000+ residents',
      '~30 hotels including Atlantis',
      'First of three Palm Islands'
    ],
    sources: ['palmjumeirah.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Palm Jumeirah - iconic artificial archipelago with 25,000+ residents and 30+ hotels.',
    role: 'Landmark',
    emirate: 'Dubai',
    sector: 'Real Estate',
    followerCount: 2300000
  },
  {
    id: 'museum-of-future',
    name: 'Museum of the Future',
    nameAr: 'متحف المستقبل',
    type: 'infrastructure',
    tier: 1,
    aliases: ['Museum of the Future', 'MOTF'],
    socialAccounts: { twitter: '@MuseumFuture', linkedin: 'museum-of-the-future' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'mbr', type: 'founded', strength: 'indirect' }
    ],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 5670, articlesAnalyzed: 378 },
    keyFindings: [
      'Opened February 22, 2022',
      'LEED Platinum certified',
      '$136 million construction cost',
      'One million visitors in first year'
    ],
    sources: ['museumofthefuture.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Museum of the Future - LEED Platinum certified museum opened 2022, focused on future technologies.',
    role: 'Museum',
    emirate: 'Dubai',
    sector: 'Culture',
    followerCount: 1800000
  },
  {
    id: 'louvre-abu-dhabi',
    name: 'Louvre Abu Dhabi',
    nameAr: 'متحف اللوفر أبوظبي',
    type: 'infrastructure',
    tier: 1,
    aliases: ['Louvre Abu Dhabi', 'Louvre'],
    socialAccounts: { twitter: '@LouvreAbuDhabi', linkedin: 'louvre-abu-dhabi' },
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 312 },
    keyFindings: [
      'Opened November 8, 2017',
      '$653 million construction cost',
      '€974.5 million total agreement with France',
      'Arab world\'s most visited museum'
    ],
    sources: ['louvreabudhabi.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Louvre Abu Dhabi - world-class museum opened 2017, Arab world\'s most visited museum.',
    role: 'Museum',
    emirate: 'Abu Dhabi',
    sector: 'Culture',
    followerCount: 2100000
  },
  {
    id: 'sheikh-zayed-mosque',
    name: 'Sheikh Zayed Grand Mosque',
    nameAr: 'مسجد الشيخ زايد',
    type: 'infrastructure',
    tier: 1,
    aliases: ['Sheikh Zayed Grand Mosque', 'SZMC'],
    socialAccounts: { twitter: '@SZGMosque', linkedin: 'sheikh-zayed-grand-mosque' },
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [],
    uaeRelevance: 90,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 6780, articlesAnalyzed: 456 },
    keyFindings: [
      'Constructed 1994-2007',
      '$545 million construction cost',
      '40,100+ worshippers capacity',
      'World\'s largest marble mosaic courtyard'
    ],
    sources: ['szgmc.gov.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Sheikh Zayed Grand Mosque - landmark mosque with 40,100+ capacity, world\'s largest marble mosaic.',
    role: 'Religious Site',
    emirate: 'Abu Dhabi',
    sector: 'Culture',
    followerCount: 3200000
  }
];

// ============================================
// EVENT ENTITIES
// ============================================
export const eventEntities: EntityProfile[] = [
  {
    id: 'cop28',
    name: 'COP28 UAE Climate Conference',
    nameAr: 'كوب28',
    type: 'event',
    tier: 0,
    aliases: ['COP28', 'UN Climate Conference 2023', 'COP28 UAE'],
    socialAccounts: { twitter: '@COP28_UAE', linkedin: 'cop28' },
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'mbz', type: 'hosted-by', strength: 'direct' },
      { entityId: 'sultan-al-jaber', type: 'led-by', strength: 'direct' }
    ],
    uaeRelevance: 100,
    sentiment: 'MIXED',
    alertLevel: 'YELLOW',
    metrics: { mentions: 15420, articlesAnalyzed: 892 },
    keyFindings: [
      'Held November 30 - December 13, 2023 in Expo City Dubai',
      '85,000+ accredited participants from 198+ countries',
      'Sultan Al Jaber (ADNOC CEO) as president - controversy',
      'First COP agreement to mention transitioning from "all fossil fuels"'
    ],
    sources: ['cop28.com', 'unfccc.int', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'COP28 - 2023 UN Climate Change Conference in Dubai, first COP to mention transitioning from fossil fuels.',
    role: 'Climate Conference',
    emirate: 'Dubai',
    events: [
      { name: 'COP28', date: '2023-11-30', impact: 'Historic climate agreement' }
    ]
  },
  {
    id: 'expo-2020',
    name: 'World Expo 2020 Dubai',
    nameAr: 'إكسبو 2020 دبي',
    type: 'event',
    tier: 0,
    aliases: ['Expo 2020 Dubai', 'World Expo 2020'],
    socialAccounts: { twitter: '@Expo2020Dubai', linkedin: 'expo-2020-dubai' },
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'mbr', type: 'hosted-by', strength: 'direct' }
    ],
    uaeRelevance: 100,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 12350, articlesAnalyzed: 756 },
    keyFindings: [
      'Held October 1, 2021 - March 31, 2022',
      '24.1 million visits from 178 countries',
      '$42.2 billion economic impact',
      '193 participating countries',
      'First World Expo in Middle East'
    ],
    sources: ['expo2020dubai.com', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'World Expo 2020 Dubai - first World Expo in Middle East with 24.1M visits and $42.2B impact.',
    role: 'World Expo',
    emirate: 'Dubai',
    events: [
      { name: 'Expo 2020 Dubai', date: '2021-10-01', impact: 'Largest event in UAE history' }
    ]
  },
  {
    id: 'uae-national-day',
    name: 'UAE National Day',
    nameAr: 'يوم الإمارات الوطني',
    type: 'event',
    tier: 1,
    aliases: ['National Day', 'Eid Al Etihad', 'UAE National Day'],
    socialAccounts: { twitter: '@UAE_NationalDay' },
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [
      { entityId: 'mbz', type: 'participated', strength: 'direct' }
    ],
    uaeRelevance: 98,
    sentiment: 'OVERWHELMINGLY_POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 8920, articlesAnalyzed: 567 },
    keyFindings: [
      'Celebrated December 2 annually',
      'Marks UAE federation day 1971',
      '54th edition in 2025',
      'Fireworks nationwide, military parades'
    ],
    sources: ['visitdubai.com', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'UAE National Day - celebrated December 2, marks federation day 1971.',
    role: 'National Celebration',
    emirate: null,
    events: [
      { name: 'UAE National Day', date: '1971-12-02', impact: 'Foundation of nation' }
    ]
  },
  {
    id: 'adipec',
    name: 'ADIPEC',
    nameAr: 'أديبيك',
    type: 'event',
    tier: 1,
    aliases: ['Abu Dhabi International Petroleum Exhibition', 'ADIPEC'],
    socialAccounts: { twitter: '@ADIPEC', linkedin: 'adipec' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'adnoc', type: 'organized-by', strength: 'direct' }
    ],
    uaeRelevance: 92,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 289 },
    keyFindings: [
      'Annual oil and gas conference in Abu Dhabi',
      '239,000+ attendees in 2026',
      '2,250+ exhibiting companies',
      '$53 billion in business deals 2026'
    ],
    sources: ['adipec.com', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'ADIPEC - Abu Dhabi International Petroleum Exhibition, $53B in deals 2026.',
    role: 'Energy Conference',
    emirate: 'Abu Dhabi',
    events: [
      { name: 'ADIPEC 2026', date: '2026-11-02', impact: 'Largest energy event' }
    ]
  },
  {
    id: 'gitex',
    name: 'Gitex Technology Week',
    nameAr: 'جيتكس',
    type: 'event',
    tier: 1,
    aliases: ['Gitex', 'Gitex Dubai', 'GITEX'],
    socialAccounts: { twitter: '@GITEXTechWeek', linkedin: 'gitex' },
    credibility: { verified: true, reliabilityScore: 95 },
    relationships: [],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 5670, articlesAnalyzed: 378 },
    keyFindings: [
      'Annual tech conference in Dubai',
      'Largest tech and startup show in region',
      '43rd edition in 2023',
      'December 2026 dates announced'
    ],
    sources: ['gitex.com', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Gitex Technology Week - largest tech and startup show in Middle East, 43rd edition in 2023.',
    role: 'Technology Conference',
    emirate: 'Dubai',
    events: [
      { name: 'GITEX 2026', date: '2026-12-07', impact: 'Major tech event' }
    ]
  },
  {
    id: 'dubai-airshow',
    name: 'Dubai Airshow',
    nameAr: 'معرض دبي للطيران',
    type: 'event',
    tier: 1,
    aliases: ['Dubai Airshow', 'Airshow Dubai'],
    socialAccounts: { twitter: '@DubaiAirshow', linkedin: 'dubai-airshow' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [],
    uaeRelevance: 90,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 234 },
    keyFindings: [
      'Biennial aerospace exhibition',
      '100,000+ attendees, 1,400+ exhibitors 2023',
      'Emirates ordered $52B Boeing 777X',
      'Held at Al Maktoum International Airport'
    ],
    sources: ['dubaiairshow.com', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Dubai Airshow - biennial aerospace exhibition, Emirates ordered $52B Boeing 777X in 2023.',
    role: 'Aerospace Exhibition',
    emirate: 'Dubai',
    events: [
      { name: 'Dubai Airshow 2025', date: '2025-11-17', impact: 'Major aerospace event' }
    ]
  },
  {
    id: 'gulfood',
    name: 'Gulfood',
    nameAr: ' gulfood',
    type: 'event',
    tier: 1,
    aliases: ['Gulfood', 'Gulfood Dubai'],
    socialAccounts: { twitter: '@Gulfood_ME', linkedin: 'gulfood' },
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [],
    uaeRelevance: 88,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 223 },
    keyFindings: [
      'World\'s largest food and beverage trade event',
      '8,500+ exhibitors, 195 countries 2026',
      '1.5 million+ products showcased',
      'Held annually in Dubai World Trade Centre'
    ],
    sources: ['gulfood.com', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Gulfood - world\'s largest food and beverage trade event with 8,500+ exhibitors.',
    role: 'Food & Beverage Trade Show',
    emirate: 'Dubai',
    events: [
      { name: 'Gulfood 2026', date: '2026-01-26', impact: 'Largest F&B trade event' }
    ]
  },
  {
    id: 'art-dubai',
    name: 'Art Dubai',
    nameAr: 'آرت دبي',
    type: 'event',
    tier: 1,
    aliases: ['Art Dubai', 'Dubai Art'],
    socialAccounts: { twitter: '@ArtDubai', linkedin: 'art-dubai' },
    credibility: { verified: true, reliabilityScore: 94 },
    relationships: [],
    uaeRelevance: 82,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 2340, articlesAnalyzed: 156 },
    keyFindings: [
      'Annual art fair held every spring',
      '~120 galleries from 35+ countries',
      'AED 143 million economic impact 2023',
      'Held at Madinat Jumeirah'
    ],
    sources: ['artdubai.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Art Dubai - annual art fair with 120+ galleries, AED 143M economic impact.',
    role: 'Art Fair',
    emirate: 'Dubai',
    events: [
      { name: 'Art Dubai 2026', date: '2026-03-01', impact: 'Major art event' }
    ]
  },
  {
    id: 'uae-federation',
    name: 'UAE Federation Formation',
    nameAr: 'قيام الاتحاد',
    type: 'event',
    tier: 0,
    aliases: ['UAE Federation', 'Formation of UAE', 'Federation Day'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 99 },
    relationships: [
      { entityId: 'mbz', type: 'succeeded', strength: 'direct' }
    ],
    uaeRelevance: 100,
    sentiment: 'OVERWHELMINGLY_POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 5670, articlesAnalyzed: 378 },
    keyFindings: [
      'December 2, 1971 - UAE formally proclaimed',
      'Initially 6 emirates, Ras Al Khaimah joined February 1972',
      'Sheikh Zayed as first President',
      'Constitution signed by 7 emirates'
    ],
    sources: ['uae-embassy.org', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'UAE Federation Formation - December 2, 1971, when 6 emirates united to form UAE.',
    role: 'Foundational Event',
    emirate: null,
    events: [
      { name: 'UAE Federation', date: '1971-12-02', impact: 'Foundation of nation' }
    ]
  },
  {
    id: 'abraham-accords',
    name: 'Abraham Accords',
    nameAr: 'اتفاقيات إبراهيم',
    type: 'event',
    tier: 0,
    aliases: ['Abraham Accords', 'Abraham Accords 2020'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 98 },
    relationships: [
      { entityId: 'abdullah', type: 'signed-by', strength: 'direct' },
      { entityId: 'mbz', type: 'signed-by', strength: 'direct' }
    ],
    uaeRelevance: 95,
    sentiment: 'MIXED',
    alertLevel: 'YELLOW',
    metrics: { mentions: 6780, articlesAnalyzed: 456 },
    keyFindings: [
      'Signed September 15, 2020 at White House',
      'UAE first Gulf state to normalize with Israel',
      'January 5, 2021 agreement went into effect',
      '$791 million Israeli defense exports to signatories'
    ],
    sources: ['state.gov', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Abraham Accords 2020 - UAE first Gulf state to normalize relations with Israel.',
    role: 'Diplomatic Agreement',
    emirate: null,
    events: [
      { name: 'Abraham Accords', date: '2020-09-15', impact: 'Diplomatic transformation' }
    ]
  },
  {
    id: 'covid-response',
    name: 'UAE COVID-19 Response',
    nameAr: 'استجابة الإمارات لكوفيد-19',
    type: 'event',
    tier: 1,
    aliases: ['COVID-19 UAE', 'UAE Pandemic Response'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [
      { entityId: 'mbz', type: 'led-by', strength: 'direct' }
    ],
    uaeRelevance: 92,
    sentiment: 'POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 4560, articlesAnalyzed: 312 },
    keyFindings: [
      'World\'s first Phase III vaccine trial July 2020',
      'Sinopharm vaccine approved December 9, 2020',
      '1 billion+ vaccine doses shipped to 80+ countries',
      'Highest per-capita vaccination rate globally'
    ],
    sources: ['uae-embassy.org', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'UAE COVID-19 Response - world\'s first Phase III vaccine trial, 1B+ doses shipped globally.',
    role: 'Crisis Response',
    emirate: null,
    events: [
      { name: 'COVID Response', date: '2020-01-21', impact: 'Humanitarian leadership' }
    ]
  },
  {
    id: 'qatar-crisis',
    name: 'Qatar Diplomatic Crisis',
    nameAr: 'أزمة قطر الدبلوماسية',
    type: 'event',
    tier: 1,
    aliases: ['Qatar Blockade', 'Gulf Crisis 2017'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 95 },
    relationships: [
      { entityId: 'mbz', type: 'participated', strength: 'direct' }
    ],
    uaeRelevance: 85,
    sentiment: 'MIXED',
    alertLevel: 'YELLOW',
    metrics: { mentions: 3450, articlesAnalyzed: 234 },
    keyFindings: [
      'June 5, 2017 - Saudi, UAE, Bahrain, Egypt imposed blockade',
      'Air, land, sea borders closed',
      'Al-Ula agreement January 5, 2021 ended crisis',
      'Qatar emerged stronger with Turkey, Iran partnerships'
    ],
    sources: ['brookings.edu', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Qatar Diplomatic Crisis 2017-2021 - UAE participated in blockade, resolved by Al-Ula agreement.',
    role: 'Regional Crisis',
    emirate: null,
    events: [
      { name: 'Qatar Blockade', date: '2017-06-05', impact: 'Regional tensions' }
    ]
  },
  {
    id: 'dubai-debt-crisis',
    name: 'Dubai Debt Crisis',
    nameAr: 'أزمة ديون دبي',
    type: 'event',
    tier: 1,
    aliases: ['Dubai Debt Crisis 2009', 'Nakheel Crisis'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 96 },
    relationships: [
      { entityId: 'mbr', type: 'responded', strength: 'direct' }
    ],
    uaeRelevance: 88,
    sentiment: 'MIXED',
    alertLevel: 'YELLOW',
    metrics: { mentions: 2890, articlesAnalyzed: 189 },
    keyFindings: [
      'November 25, 2009 - Dubai World sought repayment delay on $60B',
      'Property prices fell 40-60% in some areas',
      'Abu Dhabi provided $10 billion bailout December 14, 2009',
      'Forced economic diversification away from real estate'
    ],
    sources: ['imf.org', 'theguardian.com'],
    lastUpdated: '2026-04-27',
    description: 'Dubai Debt Crisis 2009-2010 - $60B debt deferral, Abu Dhabi $10B bailout, forced diversification.',
    role: 'Economic Crisis',
    emirate: 'Dubai',
    events: [
      { name: 'Dubai Debt Crisis', date: '2009-11-25', impact: 'Economic transformation' }
    ]
  },
  {
    id: 'commemoration-day',
    name: 'Commemoration Day',
    nameAr: 'يوم الشهيد',
    type: 'event',
    tier: 1,
    aliases: ['Martyrs\' Day', 'Commemoration Day UAE'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 97 },
    relationships: [
      { entityId: 'mbz', type: 'participated', strength: 'direct' }
    ],
    uaeRelevance: 88,
    sentiment: 'OVERWHELMINGLY_POSITIVE',
    alertLevel: 'GREEN',
    metrics: { mentions: 3450, articlesAnalyzed: 234 },
    keyFindings: [
      'Observed November 30 annually',
      'First declared August 2015 by Sheikh Khalifa',
      'Honors UAE soldiers who died for nation',
      'First martyr: Salem Suhail bin Khamis Al Dahmani 1971'
    ],
    sources: ['wahatalkarama.ae', 'wam.ae'],
    lastUpdated: '2026-04-27',
    description: 'Commemoration Day - November 30 annually, honors UAE martyrs including first martyr Salem Suhail.',
    role: 'National Commemoration',
    emirate: null,
    events: [
      { name: 'Commemoration Day', date: '2015-11-30', impact: 'National identity' }
    ]
  },
  {
    id: 'uae-yemen-intervention',
    name: 'UAE in Yemen War',
    nameAr: 'تدخل الإمارات في اليمن',
    type: 'event',
    tier: 1,
    aliases: ['UAE Yemen', 'Yemen Intervention'],
    socialAccounts: {},
    credibility: { verified: true, reliabilityScore: 92 },
    relationships: [
      { entityId: 'mbz', type: 'directed', strength: 'direct' }
    ],
    uaeRelevance: 85,
    sentiment: 'MIXED',
    alertLevel: 'YELLOW',
    metrics: { mentions: 4560, articlesAnalyzed: 312 },
    keyFindings: [
      'March 2015 - UAE joined Saudi-led coalition',
      'Direct military presence 2015-2019',
      'December 30, 2025 - UAE announced full withdrawal',
      'Supported Southern Transitional Council (STC)'
    ],
    sources: ['mei.edu', 'bbc.com'],
    lastUpdated: '2026-04-27',
    description: 'UAE Yemen War 2015-2025 - joined coalition, withdrew December 2025 after 10 years.',
    role: 'Military Intervention',
    emirate: null,
    events: [
      { name: 'Yemen Intervention', date: '2015-03-26', impact: 'Regional military' }
    ]
  }
];

// ============================================
// ENTITY OVERVIEW AGGREGATE
// ============================================
export const entityOverview: EntityOverview = {
  totalEntities:
    federalOfficials.length +
    royalFamilyMembers.length +
    emirateEntities.length +
    mediaOrganizations.length +
    journalists.length +
    influencers.length +
    corporateEntities.length +
    internationalOrgs.length +
    infrastructureEntities.length +
    eventEntities.length,

  byType: {
    federal: federalOfficials.length,
    emirate: emirateEntities.length,
    royal: royalFamilyMembers.length,
    media: mediaOrganizations.length,
    journalist: journalists.length,
    influencer: influencers.length,
    corporate: corporateEntities.length,
    international: internationalOrgs.length,
    infrastructure: infrastructureEntities.length,
    event: eventEntities.length
  },

  byTier: {
    tier0: [
      ...federalOfficials.filter(e => e.tier === 0),
      ...royalFamilyMembers.filter(e => e.tier === 0),
      ...emirateEntities.filter(e => e.tier === 0),
      ...mediaOrganizations.filter(e => e.tier === 0),
      ...influencers.filter(e => e.tier === 0),
      ...corporateEntities.filter(e => e.tier === 0),
      ...internationalOrgs.filter(e => e.tier === 0),
      ...infrastructureEntities.filter(e => e.tier === 0),
      ...eventEntities.filter(e => e.tier === 0)
    ].length,
    tier1: [
      ...federalOfficials.filter(e => e.tier === 1),
      ...royalFamilyMembers.filter(e => e.tier === 1),
      ...emirateEntities.filter(e => e.tier === 1),
      ...mediaOrganizations.filter(e => e.tier === 1),
      ...journalists.filter(e => e.tier === 1),
      ...influencers.filter(e => e.tier === 1),
      ...corporateEntities.filter(e => e.tier === 1),
      ...internationalOrgs.filter(e => e.tier === 1),
      ...infrastructureEntities.filter(e => e.tier === 1),
      ...eventEntities.filter(e => e.tier === 1)
    ].length,
    tier2: [
      ...federalOfficials.filter(e => e.tier === 2),
      ...royalFamilyMembers.filter(e => e.tier === 2),
      ...emirateEntities.filter(e => e.tier === 2),
      ...mediaOrganizations.filter(e => e.tier === 2),
      ...journalists.filter(e => e.tier === 2),
      ...influencers.filter(e => e.tier === 2),
      ...corporateEntities.filter(e => e.tier === 2),
      ...internationalOrgs.filter(e => e.tier === 2),
      ...infrastructureEntities.filter(e => e.tier === 2),
      ...eventEntities.filter(e => e.tier === 2)
    ].length,
    tier3: [
      ...federalOfficials.filter(e => e.tier === 3),
      ...royalFamilyMembers.filter(e => e.tier === 3),
      ...emirateEntities.filter(e => e.tier === 3),
      ...mediaOrganizations.filter(e => e.tier === 3),
      ...journalists.filter(e => e.tier === 3),
      ...influencers.filter(e => e.tier === 3),
      ...corporateEntities.filter(e => e.tier === 3),
      ...internationalOrgs.filter(e => e.tier === 3),
      ...infrastructureEntities.filter(e => e.tier === 3),
      ...eventEntities.filter(e => e.tier === 3)
    ].length,
    tier4: [
      ...federalOfficials.filter(e => e.tier === 4),
      ...royalFamilyMembers.filter(e => e.tier === 4),
      ...emirateEntities.filter(e => e.tier === 4),
      ...mediaOrganizations.filter(e => e.tier === 4),
      ...journalists.filter(e => e.tier === 4),
      ...influencers.filter(e => e.tier === 4),
      ...corporateEntities.filter(e => e.tier === 4),
      ...internationalOrgs.filter(e => e.tier === 4),
      ...infrastructureEntities.filter(e => e.tier === 4),
      ...eventEntities.filter(e => e.tier === 4)
    ].length
  },

  alertSummary: {
    RED:
      (infrastructureEntities.filter(e => e.alertLevel === 'RED').length) +
      (eventEntities.filter(e => e.alertLevel === 'RED').length),
    YELLOW:
      (federalOfficials.filter(e => e.alertLevel === 'YELLOW').length) +
      (royalFamilyMembers.filter(e => e.alertLevel === 'YELLOW').length) +
      (emirateEntities.filter(e => e.alertLevel === 'YELLOW').length) +
      (mediaOrganizations.filter(e => e.alertLevel === 'YELLOW').length) +
      (journalists.filter(e => e.alertLevel === 'YELLOW').length) +
      (influencers.filter(e => e.alertLevel === 'YELLOW').length) +
      (corporateEntities.filter(e => e.alertLevel === 'YELLOW').length) +
      (internationalOrgs.filter(e => e.alertLevel === 'YELLOW').length) +
      (infrastructureEntities.filter(e => e.alertLevel === 'YELLOW').length) +
      (eventEntities.filter(e => e.alertLevel === 'YELLOW').length),
    GREEN:
      (federalOfficials.filter(e => e.alertLevel === 'GREEN').length) +
      (royalFamilyMembers.filter(e => e.alertLevel === 'GREEN').length) +
      (emirateEntities.filter(e => e.alertLevel === 'GREEN').length) +
      (mediaOrganizations.filter(e => e.alertLevel === 'GREEN').length) +
      (journalists.filter(e => e.alertLevel === 'GREEN').length) +
      (influencers.filter(e => e.alertLevel === 'GREEN').length) +
      (corporateEntities.filter(e => e.alertLevel === 'GREEN').length) +
      (internationalOrgs.filter(e => e.alertLevel === 'GREEN').length) +
      (infrastructureEntities.filter(e => e.alertLevel === 'GREEN').length) +
      (eventEntities.filter(e => e.alertLevel === 'GREEN').length)
  },

  topEntities: [
    { id: 'mbz', name: 'Mohammed bin Zayed Al Nahyan', type: 'federal', uaeRelevance: 100 },
    { id: 'mbr', name: 'Mohammed bin Rashid Al Maktoum', type: 'federal', uaeRelevance: 100 },
    { id: 'adnoc', name: 'Abu Dhabi National Oil Company', type: 'emirate', uaeRelevance: 100 },
    { id: 'adia', name: 'Abu Dhabi Investment Authority', type: 'emirate', uaeRelevance: 100 },
    { id: 'nahyan-family', name: 'Al Nahyan Family', type: 'royal', uaeRelevance: 100 },
    { id: 'maktoum-family', name: 'Al Maktoum Family', type: 'royal', uaeRelevance: 100 },
    { id: 'dxb', name: 'Dubai International Airport', type: 'infrastructure', uaeRelevance: 100 },
    { id: 'cop28', name: 'COP28 UAE Climate Conference', type: 'event', uaeRelevance: 100 },
    { id: 'expo-2020', name: 'World Expo 2020 Dubai', type: 'event', uaeRelevance: 100 },
    { id: 'uae-federation', name: 'UAE Federation Formation', type: 'event', uaeRelevance: 100 }
  ]
};

// Alias exports for index.ts compatibility
export const federalOfficialsData = federalOfficials;
export const royalFamilyData = royalFamilyMembers;
export const emirateEntitiesData = emirateEntities;
export const mediaOrganizationsData = mediaOrganizations;
export const journalistsData = journalists;
export const influencersData = influencers;
export const corporateEntitiesData = corporateEntities;
export const internationalOrgsData = internationalOrgs;
export const infrastructureEntitiesData = infrastructureEntities;
export const eventEntitiesData = eventEntities;
