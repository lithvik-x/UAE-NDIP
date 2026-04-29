// @ts-nocheck
/**
 * Religion & Interfaith Affairs - Comprehensive Dashboard Data
 *
 * Complete data extracted from MD file: 2-20-religion-interfaith-results.md
 * Dashboard-ready structured data for the UAE National Digital Intelligence Platform
 *
 * @fileoverview All sections from the MD file are represented as TypeScript data structures
 */

import type { TierLevel, AlertLevel, HSBPCCategory } from '@/lib/data-loader/types'

// ============================================================================
// SECTION 1: RELIGIOUS DEMOGRAPHICS
// ============================================================================

export interface PopulationOverview {
  metric: string
  value: string
  source: string
}

export interface ReligiousComposition {
  religion: string
  percentage: string
  estimatedPopulation: string
  source: string
}

export interface ARDABreakdown {
  category: string
  percentage: number
}

export interface MuslimBreakdown {
  group: string
  sunniPercent: string
  shiaPercent: string
  otherPercent: string
  source: string
}

export interface TimelineEvent {
  year: string
  event: string
  significance: string
}

export const religiousDemographics = {
  populationOverview: [
    { metric: 'Total Population', value: '9.4 million (2022)', source: 'State Dept Report' },
    { metric: 'UAE Citizens', value: '~20% (1.88 million)', source: 'Multiple sources' },
    { metric: 'Expatriates', value: '~80% (7.5 million)', source: 'Multiple sources' },
    { metric: 'Nationalities Represented', value: 'Over 200', source: 'UAE Embassy' }
  ] as PopulationOverview[],
  religiousComposition: [
    { religion: 'Islam (Total)', percentage: '74.5-76.9%', estimatedPopulation: '~7.1 million', source: 'Wikipedia/ARDA' },
    { religion: 'Sunni Muslims', percentage: '63-85%', estimatedPopulation: '~5.9 million', source: 'Multiple' },
    { religion: 'Shia Muslims', percentage: '5-15%', estimatedPopulation: '~470,000-1.4 million', source: 'Multiple' },
    { religion: 'Christianity', percentage: '12.6-12.9%', estimatedPopulation: '~1.2 million', source: 'Multiple' },
    { religion: 'Hinduism', percentage: '6.2-6.6%', estimatedPopulation: '~580,000-620,000', source: 'Multiple' },
    { religion: 'Buddhism', percentage: '3.2%', estimatedPopulation: '~300,000', source: 'Wikipedia' },
    { religion: 'Agnosticism', percentage: '1.3%', estimatedPopulation: '~122,000', source: 'ARDA' },
    { religion: 'Sikhism', percentage: '0.72%', estimatedPopulation: '~68,000', source: 'ARDA' },
    { religion: 'Baha\'i', percentage: '0.49%', estimatedPopulation: '~46,000', source: 'ARDA' },
    { religion: 'Atheism', percentage: '0.15-4%', estimatedPopulation: '~14,000-375,000', source: 'Multiple' },
    { religion: 'Judaism', percentage: '~0.03%', estimatedPopulation: '~3,000', source: 'Multiple' },
    { religion: 'Other/Druze/Zoroastrian', percentage: '~1.9%', estimatedPopulation: '~178,000', source: 'Wikipedia' }
  ] as ReligiousComposition[],
  ardaBreakdown: [
    { category: 'Sunni Muslims', percentage: 63.34 },
    { category: 'Shia Muslims', percentage: 6.69 },
    { category: 'Islamic schismatics', percentage: 4.45 },
    { category: 'Catholics', percentage: 11.61 },
    { category: 'Orthodox', percentage: 0.78 },
    { category: 'Protestants', percentage: 0.28 },
    { category: 'Hindus', percentage: 6.17 },
    { category: 'Buddhists', percentage: 3.20 },
    { category: 'Baha\'is', percentage: 0.49 },
    { category: 'Sikhs', percentage: 0.72 },
    { category: 'Agnostics', percentage: 1.33 },
    { category: 'Atheists', percentage: 0.15 }
  ] as ARDABreakdown[],
  muslimBreakdown: [
    { group: 'UAE Citizens', sunniPercent: '85-90%', shiaPercent: '5-15%', otherPercent: '-', source: 'MECONCERN' },
    { group: 'Expatriate Muslims', sunniPercent: '<80%', shiaPercent: '<20%', otherPercent: '-', source: 'Wikipedia' }
  ] as MuslimBreakdown[],
  historicalTimeline: [
    { year: '1951', event: 'Delegation with Sheikh Zayed visited Vatican and Notre Dame', significance: 'Early interfaith outreach' },
    { year: 'Late 1950s', event: 'Sheikh Shakhbut welcomed first Christian workers', significance: 'Early religious tolerance' },
    { year: '1958', event: 'First Hindu temple built in Dubai', significance: 'Hindu presence established' },
    { year: '1960', event: 'First Roman Catholic mass in Abu Dhabi', significance: 'Christian worship begins' },
    { year: '1965', event: 'St. Joseph\'s Church opened', significance: 'First permanent Catholic church' },
    { year: '1968', event: 'St. Andrew\'s Anglican Church opened', significance: 'Land donated by government' },
    { year: '1971', event: 'UAE founded; Constitution guarantees religious freedom', significance: 'Legal framework established' },
    { year: '1970s', event: 'Vatican moved See of Southern Arabia to Abu Dhabi', significance: 'Catholic institutional presence' },
    { year: '1992', event: 'Christian monastery discovered on Sir Bani Yas Island (built ~600 CE)', significance: 'Ancient Christian heritage' },
    { year: '1996', event: 'Constitution permanently adopted', significance: 'Religious freedom reaffirmed' },
    { year: '2007', event: 'UAE established diplomatic relations with Vatican', significance: 'Formal Vatican ties' },
    { year: '2012', event: 'Guru Nanak Darbar opened in Dubai', significance: 'First Sikh temple in UAE' },
    { year: '2015', event: 'Sheikh Mohammed bin Zayed announced land for Hindu temple', significance: 'Major interfaith gesture' },
    { year: '2016', event: 'Ministry of Tolerance established', significance: 'Government institution' },
    { year: '2019', event: 'Year of Tolerance; Pope Francis visit', significance: 'Peak interfaith moment' },
    { year: '2020', event: 'Abraham Accords signed', significance: 'Historic peace agreement' },
    { year: '2022', event: 'Dubai Hindu Temple opened', significance: 'Hindu worship space' },
    { year: '2023', event: 'Abrahamic Family House inaugurated', significance: 'First purpose-built synagogue' },
    { year: '2024', event: 'BAPS Hindu Mandir opened', significance: 'First traditional stone Hindu temple' }
  ] as TimelineEvent[]
}

// ============================================================================
// SECTION 2: LEGAL FRAMEWORK
// ============================================================================

export interface ConstitutionalProvision {
  provision: string
  article: string
  text: string
}

export interface KeyLaw {
  law: string
  year: string
  description: string
  penalty?: string
}

export const legalFramework = {
  constitutionalProvisions: [
    { provision: 'Official Religion', article: 'Article 7', text: 'Islam is the official religion' },
    { provision: 'Principal Source of Law', article: 'Constitution', text: 'Sharia is principal source of legislation' },
    { provision: 'Religious Freedom', article: 'Article 32', text: '"Freedom to exercise religious worship is guaranteed in accordance with generally-accepted traditions provided consistent with public policy or public morals"' },
    { provision: 'Anti-Discrimination', article: 'Various', text: '2015 law prohibits discrimination based on religion' }
  ] as ConstitutionalProvision[],
  keyLaws: [
    { law: 'Federal Decree Law No. 15', year: '2020', description: 'Removed hudud (capital punishment) provisions from Penal Code', penalty: 'N/A' },
    { law: 'Federal Decree Law No. 34', year: '2023', description: 'Combating Discrimination, Hatred and Extremism', penalty: 'Up to Dh1 million fine' },
    { law: 'Federal Law No. 9', year: '2023', description: 'Regulation of Houses of Worship for Non-Muslims', penalty: 'Licensing requirements' },
    { law: 'Federal Law No. 4', year: '2025', description: 'National Zakat Platform', penalty: 'Fines up to Dh1 million, imprisonment for illegal collection' },
    { law: 'Anti-discrimination law', year: 'Various', description: 'Prohibits religious discrimination', penalty: 'Various' }
  ] as KeyLaw[],
  freedomHouseRating: {
    score: 2,
    maxScore: 4,
    year: '2023',
    assessment: 'Significant limitations on religious freedom'
  },
  legalSystemStructure: {
    dualSystem: 'Civil courts + Sharia courts',
    shariaCourtsJurisdiction: 'Personal status matters (marriage, divorce, inheritance, custody) for Muslims',
    civilCourtsJurisdiction: 'Commercial disputes, most criminal matters',
    criminalCourts: 'Separate for Muslims and non-Muslims'
  }
}

// ============================================================================
// SECTION 3: GOVERNMENT RELIGIOUS BODIES
// ============================================================================

export interface MinistryAttribute {
  attribute: string
  details: string
}

export interface GAIAEAttribute {
  attribute: string
  details: string
}

export interface ImamTier {
  tier: string
  description: string
  sermonFreedom: string
}

export interface FatwaCouncilAttribute {
  attribute: string
  details: string
}

export interface ZakatPlatformAttribute {
  attribute: string
  details: string
}

export const governmentReligiousBodies = {
  ministryOfTolerance: {
    established: 'February 16, 2016',
    renamed: '2022 (added "and Coexistence")',
    headquarters: 'Abu Dhabi',
    inauguralMinister: 'Sheikha Lubna Khalid al-Qasimi',
    currentMinister: 'Nahyan bin Mubarak al-Nahyan (since October 2017)',
    directorGeneral: 'H.E. Afraa Al Sabri',
    origin: 'Brainchild of UAE PM Mohammed bin Rashid al-Maktoum',
    programs: 'National Festival of Tolerance and Coexistence (annual)',
    website: 'tolerance.gov.ae'
  },
  generalAuthorityOfIslamicAffairs: {
    founded: 'October 9, 2006',
    headquarters: 'Abu Dhabi',
    chairman: 'H.E. Dr. Omar Habtoor Al Darei',
    parent: 'Cabinet of UAE',
    jurisdiction: 'All Emirates except Dubai'
  },
  awqafFunctions: [
    'Manages awqaf (Islamic endowments)',
    'Oversees Sunni mosques (except Dubai)',
    'Distributes weekly khutbah guidance',
    'Operates fatwa services (Arabic, English, Urdu)',
    'Employs and funds Sunni imams'
  ],
  threeTierImamSystem: [
    { tier: 'Junior Imams', description: 'Follow Awqaf scripts closely', sermonFreedom: 'Minimal' },
    { tier: 'Midlevel Imams', description: 'Use Awqaf-selected topics', sermonFreedom: 'Moderate' },
    { tier: 'Senior Imams', description: 'Choose own subjects', sermonFreedom: 'Maximum' }
  ] as ImamTier[],
  uaeCouncilForFatwa: {
    authorized: '2017',
    officiallyEstablished: '2018',
    purpose: 'License Islamic authorities to issue fatwas',
    mission: 'Ensure moderate Islam, eliminate fatwa conflicts',
    services: 'Fatwa app, call center (8008222), text messaging',
    languages: 'Arabic, English, Urdu',
    scholars: 'Male mufti and female muftiya'
  },
  iacadDubai: [
    'Friday sermon archive',
    'Prayer time services',
    'Quran memorization circles',
    'Mosque listings',
    'Fatwa archive',
    'Hajj & Umrah affairs',
    'Charity associations'
  ],
  jaafariAffairsCouncil: [
    'Handles Shia family law matters',
    'Manages Shia mosques (does not appoint religious leaders)',
    'Shia mosques designated private but can request government funding'
  ],
  nationalZakatPlatform: {
    legalBasis: 'Federal Law No. 4 of 2025',
    launchDate: 'February 12, 2026',
    authority: 'General Authority of Islamic Affairs, Endowments and Zakat',
    chairman: 'Dr. Omar Habtoor Al Darei',
    directorGeneral: 'Ahmed Rashid Al Neyadi',
    purpose: 'Unified national gateway for zakat payment',
    zakatPotential: 'Dh7.5 billion (certain sectors alone)',
    penalties: 'Up to Dh1 million fine, imprisonment for illegal collection'
  }
}

// ============================================================================
// SECTION 4: ISLAMIC INSTITUTIONS
// ============================================================================

export interface KeyReligiousFigure {
  figure: string
  role: string
  organization: string
}

export interface InterfaithOrganization {
  organization: string
  founded: string
  purpose: string
}

export const islamicInstitutions = {
  sunniIslam: {
    majority: '85-90% of citizens',
    control: 'Government-controlled through Awqaf',
    funding: 'Government funds all Sunni mosques',
    employment: 'Government employs all Sunni imams',
    school: 'Maliki school predominant among ruling families (Al Nahyan, Al Maktoum)',
    sermonSystem: 'Three-tier sermon system regulates Friday khutbahs'
  },
  shiaIslam: {
    minority: '5-15% of citizens',
    concentration: 'Dubai, Abu Dhabi, Sharjah',
    imams: 'Government-appointed imams in Dubai (Sunni and Shia)',
    council: 'Jaafari Affairs Council handles family law',
    mosques: 'Private Shia mosques with option to request funding',
    concerns: 'Discrimination concerns documented by HRW since 2009'
  },
  ismailiCommunity: {
    firstCenter: 'First Middle Eastern Ismaili centre opened 2003 in Dubai',
    landDonor: 'Crown Prince Mohammed bin Rashid',
    network: 'Part of Aga Khan network',
    population: 'Less than 5% of total population'
  },
  keyReligiousFigures: [
    { figure: 'Sheikh Abdullah bin Bayyah', role: 'Chairman', organization: 'UAE Fatwa Council' },
    { figure: 'Hamza Yusuf', role: 'Scholar', organization: 'Forum for Promoting Peace' },
    { figure: 'Sheikh Ahmed el-Tayeb', role: 'Grand Imam', organization: 'Al-Azhar (Egypt)' },
    { figure: 'Waseem Yousef', role: 'Scholar', organization: 'Various interfaith initiatives' }
  ] as KeyReligiousFigure[],
  interfaithOrganizations: [
    { organization: 'Forum for Promoting Peace in Muslim Societies (FPPMS)', founded: '2013', purpose: 'Peace in Muslim societies' },
    { organization: 'Muslim Council of Elders (MCE)', founded: '2014', purpose: 'Global peace/inclusion' },
    { organization: 'Tabah Foundation', founded: '2005', purpose: 'Academic research' },
    { organization: 'Hedayah', founded: '2012', purpose: 'Countering Violent Extremism' },
    { organization: 'Al Sawab Center', founded: '2015', purpose: 'Counter-extremism social media' }
  ] as InterfaithOrganization[]
}

// ============================================================================
// SECTION 5: CHRISTIANITY IN UAE
// ============================================================================

export interface ChristianDemographic {
  metric: string
  value: string
  source: string
}

export interface DenominationInfo {
  denomination: string
  details: string
  churches: string
}

export interface HistoricChurch {
  church: string
  yearOpened: string
  location: string
  notes: string
}

export interface StFrancisChurchAttribute {
  attribute: string
  details: string
}

export interface ChristianLeader {
  leader: string
  role: string
  organization: string
}

export interface ChristianRestriction {
  activity: string
  status: string
  source?: string
}

export const christianityInUAE = {
  demographics: [
    { metric: 'Christian Population', value: '~1 million (+2020)', source: 'Wikipedia' },
    { metric: 'Churches', value: '52+ (2023)', source: 'Wikipedia' },
    { metric: 'Denominations', value: '7+', source: 'Multiple' },
    { metric: 'First Churches', value: '1960s', source: 'Multiple' }
  ] as ChristianDemographic[],
  denominations: [
    { denomination: 'Catholic', details: 'Apostolic Vicariate of Southern Arabia (Bishop Paul Hinder)', churches: '10' },
    { denomination: 'Eastern Orthodox', details: 'Patriarchate of Antioch', churches: 'Multiple' },
    { denomination: 'Oriental Orthodox', details: 'Coptic, Syriac', churches: 'Cathedrals in Abu Dhabi, Dubai, Ras Al Khaimah' },
    { denomination: 'Protestant', details: 'Anglican, Evangelical, Baptist, Mar Thoma', churches: 'Multiple' },
    { denomination: 'Assyrian Church of the East', details: 'Mart Mariam Church, Sharjah', churches: '1' },
    { denomination: 'LDS', details: 'Stake with 6 congregations; Dubai temple announced 2020', churches: '6+' }
  ] as DenominationInfo[],
  historicChurches: [
    { church: 'St. Joseph\'s Cathedral', yearOpened: '1965', location: 'Abu Dhabi Corniche', notes: 'First Catholic church' },
    { church: 'St. Mary\'s Catholic Church', yearOpened: '1967', location: 'Dubai', notes: 'Long-standing' },
    { church: 'St. Andrew\'s Anglican Church', yearOpened: '1968', location: 'Abu Dhabi', notes: 'Land donated by government' }
  ] as HistoricChurch[],
  stFrancisChurch: {
    location: 'Saadiyat Island, Abu Dhabi',
    partOf: 'Abrahamic Family House',
    denomination: 'Catholic (open to all Christian denominations)',
    namedAfter: 'St. Francis of Assisi',
    inaugurated: 'February 16, 2023',
    capacity: '300+ worshippers',
    size: '30m cube, 1,322 sq meters',
    architecture: 'Faces east, forest of columns, 13,000m timber vaulting',
    firstPrayer: 'February 19, 2023',
    coordinates: '24°31′51″N 54°24′22″E'
  },
  communityLeaders: [
    { leader: 'Bishop Paul Hinder', role: 'Apostolic Vicar', organization: 'Southern Arabia (UAE, Oman, Yemen)' },
    { leader: 'Father Ani Xavier', role: 'Parish Priest', organization: 'St. Paul\'s Church, Mussaffah' },
    { leader: 'Rev. Canon Andy Thompson', role: 'Chaplain', organization: 'St. Andrew\'s Church, Abu Dhabi' }
  ] as ChristianLeader[],
  restrictions: [
    { activity: 'Worship freely', status: 'Permitted', source: 'Multiple' },
    { activity: 'Wear religious attire', status: 'Permitted', source: 'Multiple' },
    { activity: 'Proselytize to Muslims', status: 'PROHIBITED', source: 'Wikipedia, State Dept' },
    { activity: 'Distribute Christian materials to Muslims', status: 'Punishable by imprisonment, deportation', source: 'World Nomads' },
    { activity: 'Christian women marry Muslim men', status: 'Permitted', source: 'Wikipedia' },
    { activity: 'Muslim women marry Christian men', status: 'NOT permitted', source: 'Wikipedia' }
  ] as ChristianRestriction[],
  historicalHospitals: [
    'First missionaries established maternity hospital over 50 years ago',
    'Significantly reduced infant mortality',
    'Many founding UAE rulers were born there',
    'Rulers later granted land for churches: "You loved us before we had oil"'
  ]
}

// ============================================================================
// SECTION 6: HINDUISM IN UAE
// ============================================================================

export interface BAPSMandirAttribute {
  attribute: string
  details: string
}

export interface InterfaithAspect {
  element: string
  details: string
}

export interface BAPSRecognition {
  award: string
  year: string
  category: string
}

export interface OtherHinduTemple {
  temple: string
  location: string
  opened: string
  deities: string
}

export const hinduismInUAE = {
  bapsHinduMandir: {
    type: 'First traditional Hindu stone mandir in UAE',
    location: 'Al Taf Road (E16), Abu Dhabi',
    land: '27 acres gifted by Sheikh Mohammed bin Zayed',
    constructionStart: 'December 2019',
    inauguration: 'February 14, 2024',
    openedToPublic: 'March 1, 2024',
    dimensions: '108ft height, 262ft length, 180ft width',
    constructionCost: '~$84 million USD',
    artisans: '2,000+ from India',
    shrines: '7 dedicated to different deities',
    spires: '7 (symbolizing 7 Emirates)',
    pillars: '402',
    stonePieces: '25,000+ carved in India',
    materials: 'Rajasthani pink sandstone, Italian marble',
    visitorsYear1: 'Over 2.2 million',
    firstSundayVisitors: 'Over 65,000'
  },
  interfaithConstruction: [
    { element: 'Land Donor', details: 'Muslim Crown Prince Sheikh Mohammed bin Zayed' },
    { element: 'Lead Architect', details: 'Catholic Christian' },
    { element: 'Construction Manager', details: 'Sikh for Parsi-owned company' },
    { element: 'Foundation Designer', details: 'Buddhist' },
    { element: 'Mandir Director', details: 'Jain' },
    { element: 'Wall of Harmony', details: '47-meter 3D-printed wall by Dawoodi Bohra Muslim community' }
  ] as InterfaithAspect[],
  recognitions: [
    { award: 'MEED Project Awards 2024', year: '2024', category: 'Best Cultural Project Across MENA' },
    { award: 'MEED Project Awards 2024', year: '2024', category: 'Best Cultural Project in UAE' },
    { award: 'MONDO-DR 2025 Award', year: '2025', category: '"The Fairy Tale" immersive experience' }
  ] as BAPSRecognition[],
  otherTemples: [
    { temple: 'Dubai Hindu Temple', location: 'Jebel Ali', opened: 'September 2022', deities: '16+' },
    { temple: 'Bur Dubai Temple', location: 'Dubai', opened: 'Closed', deities: 'January 2024' }
  ] as OtherHinduTemple[],
  community: {
    population: '~580,000-620,000 (mostly Indian expatriates)',
    jainPopulation: '~10,000 (2015)',
    festivals: 'Diwali, Holi, Navratri'
  },
  visitingInfo: {
    hours: '9:00 AM - 8:00 PM (Closed Mondays)',
    registration: 'Mandatory (must be in UAE to book)',
    idRequired: 'Emirates ID or Passport',
    gangaAarti: 'Weekdays 7:30 PM; Weekends 6:45 PM & 7:30 PM',
    phone: '+971 25561982'
  }
}

// ============================================================================
// SECTION 7: JUDAISM IN UAE
// ============================================================================

export interface MosesSynagogueAttribute {
  attribute: string
  details: string
}

export interface UAEJewishCommunity {
  attribute: string
  details: string
}

export interface JewishOrganization {
  organization: string
  purpose: string
}

export const judaismInUAE = {
  mosessBenMaimonSynagogue: {
    type: 'First purpose-built synagogue in UAE',
    location: 'Saadiyat Island, Abu Dhabi',
    partOf: 'Abrahamic Family House',
    namedAfter: 'Moses ben Maimon (Maimonides, 12th-century philosopher)',
    inaugurated: 'February 16, 2023',
    openingGuests: '~325',
    capacity: '200+ worshippers',
    size: '30m cube (same as other two structures)',
    architecture: 'Modern with traditional elements; bronze chainmail, skylights',
    features: 'Sanctuary, mikveh, beit midrash',
    tenCommandments: 'Displayed in Hebrew throughout prayer hall',
    pillars: '7 ground, 8 above'
  },
  uaeJewishCommunity: [
    { attribute: 'Population', details: '~3,000 (2019), growing' },
    { attribute: 'Families', details: '~150 (2019)' },
    { attribute: 'Status', details: '"Experiencing revival" since 2022' },
    { attribute: 'Historical', details: 'Previously held Shabbat in homes and hotels' },
    { attribute: 'Chief Rabbi', details: 'Yehuda Sarna' },
    { attribute: 'First Resident Rabbi', details: 'Levi Duchman (head of Chabad UAE)' },
    { attribute: 'Rabbinical Couple', details: 'Rabbi Ben de Toledo and Rabbanit Yael de Toledo' }
  ] as UAEJewishCommunity[],
  organizations: [
    { organization: 'Jewish Council of the Emirates', purpose: 'Community leadership (founded 2018)' },
    { organization: 'Association of Gulf Jewish Communities', purpose: 'Regional coordination' },
    { organization: 'Beth Din of Arabia', purpose: 'Kosher certification, personal status, dispute resolution' }
  ] as JewishOrganization[],
  significance: [
    'First purpose-built synagogue in Gulf in 100 years',
    '"Beacon of faith from a Muslim country demonstrating values of peace and coexistence"',
    '"Beacon of light at a time when western antisemitism is at an all-time high"',
    'Potential global center for pluralism, culture, education, and interfaith engagement',
    'Quote: "We\'ve come from my living room to here in about 10 years" - Ross Kriel, President, Jewish Council of the Emirates'
  ]
}

// ============================================================================
// SECTION 8: SIKHISM IN UAE
// ============================================================================

export interface GuruNanakDarbarAttribute {
  attribute: string
  details: string
}

export interface OtherGurdwara {
  gurdwara: string
  location: string
}

export interface GurdwaraVisitors {
  metric: string
  value: string
}

export interface ISOCertification {
  certification: string
  details: string
}

export interface GuinnessRecord {
  year: string
  achievement: string
  details: string
}

export interface KeyFigure {
  person: string
  role: string
}

export interface AnnualService {
  service: string
  count: number
}

export const sikhismInUAE = {
  guruNanakDarbar: {
    type: 'First official Sikh gurudwara in GCC/Middle East',
    location: 'Churches Complex, Jebel Ali Village, Dubai',
    founded: '2012',
    landDonor: 'Sheikh Mohammed bin Rashid Al Maktoum',
    plotSize: '120,000 sq ft',
    construction: 'May 2008 - December 2011',
    opening: 'January 17, 2012',
    constructionCost: '65 million dirhams (~$20 million)',
    structure: 'Three-storey with three underground parking levels (25,000 sq ft each)',
    groundFloor: '21,000 sq ft',
    features: '54-meter Parikrama, Italian marble, Murano chandeliers, 24K gold canopies',
    water: 'Body surrounding building resembling Golden Temple\'s Sarovar'
  },
  otherGurdwaras: [
    { gurdwara: 'Guru Nanak Darbar', location: 'Dubai' },
    { gurdwara: 'Gurdwara Sahib', location: 'Dubai Investment Park 2' },
    { gurdwara: 'Gurdwara Sahib', location: 'Al Sajja, Sharjah' },
    { gurdwara: 'Gurudwara', location: 'Al Aweer, Dubai' }
  ] as OtherGurdwara[],
  visitors: [
    { metric: 'Opening Ceremony', value: '50,000 devotees' },
    { metric: 'Weekly Friday Visitors', value: '~10,000 (pre-COVID)' },
    { metric: 'Sikh Population Served', value: '50,000+ in Dubai' },
    { metric: 'Vaccination Event', value: '4,500 adults (February 2021)' },
    { metric: 'Closed During COVID', value: '110 days' }
  ] as GurdwaraVisitors[],
  isoCertifications: [
    { certification: 'First in World', details: 'World\'s first gurudwara with ISO certifications' },
    { certification: 'ISO 9001:2015', details: 'Quality management' },
    { certification: 'ISO 14001:2004', details: 'Environmental management' },
    { certification: 'OHSAS 18001:2007', details: 'Occupational health and safety' },
    { certification: 'ISO 20000:2005', details: 'IT service management' }
  ] as ISOCertification[],
  guinnessRecords: [
    { year: '2017', achievement: 'Most Nationalities Having Continental Breakfast', details: '600+ people from 101 nationalities' },
    { year: '2018', achievement: 'Largest Distribution of Saplings', details: 'Environmental initiative' }
  ] as GuinnessRecord[],
  keyFigures: [
    { person: 'Surender Singh Kandhari', role: 'Chairman' },
    { person: 'Gurdial Singh', role: 'Secretary' }
  ] as KeyFigure[],
  annualStatistics: [
    { service: 'Akhand Path, Sehaj Path & Sukhmani Path Sahib', count: 160 },
    { service: 'Ardas', count: 234 },
    { service: 'Langar Sewa', count: 140 },
    { service: 'Weddings, Prayers & Misc.', count: 55 }
  ] as AnnualService[],
  interfaithActivities: [
    'Annual interfaith iftar held at gurudwara',
    'Foreign diplomats and UAE ministers attend',
    '"Message of harmony during Ramadan"',
    'Quote: "In a world that struggles with extremism, the best way to cut it is through creating friendships among different faiths and nationalities" - Surender Singh Kandhari'
  ]
}

// ============================================================================
// SECTION 9: BUDDHISM & OTHER RELIGIONS
// ============================================================================

export interface BuddhismAttribute {
  attribute: string
  details: string
}

export const buddhismOtherReligions = {
  buddhism: {
    population: '~300,000-500,000 (mostly Sri Lankan expatriates)',
    temple: 'Mahamevnawa Buddhist Monastery, Dubai',
    type: 'First Buddhist temple on Arabian Peninsula'
  },
  jainism: {
    population: '~10,000 (2015)',
    association: 'Associated with BAPS Mandir leadership'
  },
  zoroastrianism: 'Small community present',
  bahai: {
    population: '~46,000 (ARDA)',
    percentage: '0.49%'
  },
  druze: 'Small community present'
}

// ============================================================================
// SECTION 10: INTERFAITH INITIATIVES
// ============================================================================

export interface DocumentOnHumanFraternity {
  attribute: string
  details: string
}

export interface DocumentPrinciple {
  number: number
  principle: string
}

export interface PopeFrancisVisit {
  attribute: string
  details: string
}

export interface AbrahamicFamilyHouseAttribute {
  attribute: string
  details: string
}

export interface WorshipSpace {
  space: string
  namedAfter: string
  capacity: string
  size: string
}

export interface HigherCommittee {
  attribute: string
  details: string
}

export interface InterfaithCriticism {
  criticism: string
  source: string
}

export const interfaithInitiatives = {
  documentOnHumanFraternity: {
    signed: 'February 4, 2019',
    location: 'Abu Dhabi, UAE',
    signatories: 'Pope Francis (Catholic Church), Sheikh Ahmed el-Tayeb (Grand Imam of Al-Azhar)',
    unResolution: 'February 4 designated International Day of Human Fraternity (starting 2021)',
    sponsors: 'UAE, Bahrain, Egypt, Saudi Arabia'
  },
  twelveKeyPrinciples: [
    { number: 1, principle: 'Religions advocate peace, mutual understanding, harmonious coexistence' },
    { number: 2, principle: 'Freedom of belief, thought, expression is universal right' },
    { number: 3, principle: 'Religious/cultural pluralism reflects divine wisdom' },
    { number: 4, principle: 'Justice based on mercy leads to dignified life' },
    { number: 5, principle: 'Dialogue and tolerance can reduce global problems' },
    { number: 6, principle: 'Protecting places of worship is sacred duty' },
    { number: 7, principle: 'Terrorism is deplorable' },
    { number: 8, principle: 'Full citizenship requires equal rights and duties' },
    { number: 9, principle: 'East-West relations must be nurtured' },
    { number: 10, principle: 'Women\'s rights must be recognized' },
    { number: 11, principle: 'Children\'s rights must be guaranteed' },
    { number: 12, principle: 'Protection of elderly, disabled, oppressed is social/religious obligation' }
  ] as DocumentPrinciple[],
  popeFrancisVisit: {
    type: 'First-ever papal visit to Arabian Peninsula',
    venue: 'Zayed Sports City, Abu Dhabi',
    attendance: '180,000',
    ceremony: 'Signed Document on Human Fraternity',
    invitation: 'Delivered by Sheikh Abdullah bin Zayed (June 2018)',
    quote: '"A step forward in the relationship between the Catholic Church and the Muslim world" - Bishop Paul Hinder'
  },
  abrahamicFamilyHouse: {
    location: 'Saadiyat Island, Abu Dhabi',
    architect: 'Ghanaian-British David Adjaye',
    size: '82,882 sq ft (7,700 m²)',
    construction: '2019-2023',
    inauguration: 'February 16, 2023',
    openToPublic: 'March 1, 2023',
    entry: 'Free',
    structures: 'Three 30-meter cubic buildings on shared plinth'
  },
  threeWorshipSpaces: [
    { space: 'Mosque', namedAfter: 'Eminence Ahmed El-Tayeb (Grand Imam of Al-Azhar)', capacity: '300+', size: '1,322 sq m' },
    { space: 'Church', namedAfter: 'St. Francis of Assisi', capacity: '300+', size: '1,322 sq m' },
    { space: 'Synagogue', namedAfter: 'Moses Ben Maimon (Maimonides)', capacity: '200+', size: '1,322 sq m' }
  ] as WorshipSpace[],
  globalYouthAmbassadors: [
    'Part of Abrahamic Family House programming',
    'Quran memorization/recitation sessions',
    'Interfaith dialogue initiatives'
  ],
  higherCommittee: {
    established: '2019',
    purpose: 'Implement Document on Human Fraternity goals internationally',
    governs: 'Abrahamic Family House'
  },
  zayedAward: 'Created as part of Human Fraternity initiatives',
  criticisms: [
    { criticism: 'Al-Azhar initially disowned project but later backtracked', source: 'Wikipedia' },
    { criticism: '"Novel theological formulations" in Document on Human Fraternity', source: 'Theologians' },
    { criticism: 'PR exercise masking repression', source: 'Critics' },
    { criticism: 'Tolerance facade contradicts involvement in Yemen/Libya wars', source: 'Various' }
  ] as InterfaithCriticism[]
}

// ============================================================================
// SECTION 11: TOLERANCE & MINISTRY OF TOLERANCE
// ============================================================================

export interface MinistryAttribute {
  attribute: string
  details: string
}

export interface ToleranceProgram {
  program: string
  details: string
}

export interface RelatedEntity {
  entity: string
  purpose: string
}

export interface ToleranceRanking {
  index: string
  ranking: string
  source: string
}

export const toleranceMinistry = {
  ministryOverview: {
    established: 'February 16, 2016',
    formerName: 'Ministry of Tolerance',
    renamed: '2022',
    headquarters: 'Abu Dhabi',
    inauguralMinister: 'Sheikha Lubna Khalid al-Qasimi',
    currentMinister: 'Nahyan bin Mubarak al-Nahyan',
    directorGeneral: 'H.E. Afraa Al Sabri',
    brainchild: 'UAE PM Mohammed bin Rashid al-Maktoum'
  },
  programs: [
    { program: 'National Festival of Tolerance and Coexistence', details: 'Annual event' },
    { program: '2025 Edition', details: 'China as guest of honor' },
    { program: 'Vision', details: '"Tolerance as economic capital and attracting skilled migrants, entrepreneurs, and global investment"' }
  ] as ToleranceProgram[],
  relatedEntities: [
    { entity: 'Hedayah', purpose: 'International Center of Excellence for Countering Violent Extremism' },
    { entity: 'Al Sawab Center', purpose: 'Countering extremist ideologies' },
    { entity: 'Muslim Council of Elders', purpose: 'Interfaith dialogue' },
    { entity: 'Forum for Promoting Peace in Muslim Societies', purpose: 'Peace promotion' }
  ] as RelatedEntity[],
  nationalToleranceProgramme: [
    { initiative: 'Anti-discrimination/Anti-hatred Law', description: 'Federal Decree Law No. 34 of 2023' },
    { initiative: 'Centres to counter extremism', description: 'Established' },
    { initiative: '2019 Year of Tolerance', description: 'Proclaimed by Sheikh Khalifa' }
  ],
  rankings: [
    { index: 'Insead Global Talent Competitiveness Index 2020', ranking: '4th globally for tolerance of immigrants', source: 'u.ae' },
    { index: 'Most Popular Countries Index', ranking: '1st regionally, 27th globally', source: 'u.ae' }
  ] as ToleranceRanking[]
}

// ============================================================================
// SECTION 12: SHIA COMMUNITY
// ============================================================================

export interface ShiaDemographic {
  group: string
  percentage: string
  notes: string
}

export interface ShiaGovernmentAdmin {
  aspect: string
  details: string
}

export interface IsmailiCenterAttribute {
  attribute: string
  details: string
}

export interface DiscriminationConcern {
  issue: string
  details: string
  source: string
}

export interface AbductionCase {
  case: string
  date: string
  details: string
}

export interface TreatmentCondition {
  condition: string
  description: string
}

export const shiaCommunity = {
  demographics: [
    { group: 'Shia Muslims (citizens)', percentage: '5-15%', notes: 'Concentrated in Dubai' },
    { group: 'Non-Twelver (Ismailis, Dawoodi Bohras)', percentage: '<5%', notes: 'Various nationalities' },
    { group: 'Expatriate Shia', percentage: 'Significant', notes: 'Iranian, Pakistani, Lebanese, Indian' }
  ] as ShiaDemographic[],
  geographicDistribution: [
    'Concentrated in: Abu Dhabi, Dubai, Sharjah',
    'Dubai: Majority of Shia nationals, largely from 1920s-era migrants'
  ],
  governmentAdministration: [
    { aspect: 'Dubai Government', details: 'Appoints all imams (Sunni and Shia)' },
    { aspect: 'Sermon Content', details: 'Regulated by government' },
    { aspect: 'Shia Mosques', details: 'Designated private; can request government funding' },
    { aspect: 'Jaafari Affairs Council', details: 'Handles Shia family law matters' }
  ] as ShiaGovernmentAdmin[],
  ismailiCenterDubai: {
    opened: '2003',
    type: 'First Middle Eastern Ismaili centre',
    landDonor: 'Crown Prince Mohammed bin Rashid Al Maktoum',
    founder: 'Aga Khan'
  },
  discriminationConcerns: [
    { issue: 'HRW Documentation', details: 'Institutional discrimination since 2009', source: 'Human Rights Watch' },
    { issue: 'Deportations', details: 'Over 4,000 Shia expats (some organizations)', source: 'Wikipedia' },
    { issue: 'Lebanese Shia', details: 'Deported for alleged Hezbollah sympathies', source: 'Wikipedia' },
    { issue: 'Pakistani Shia', details: 'Abducted, detained, deported post-normalization', source: 'CREID' }
  ] as DiscriminationConcern[],
  documentedAbductions: [
    { case: 'Ali Ruhani & Ali Adnan', date: 'October 15, 2020', details: 'Abducted from Dubai apartment' },
    { case: 'Mubashir Hasan', date: 'October 16, 2020', details: '42-year-old, transport company owner' },
    { case: 'Scale', date: '200+ minimum', details: 'Pakistani Shia detained' }
  ] as AbductionCase[],
  treatmentConditions: [
    { condition: 'Detention', description: '"Big suffocated, smelly hall with hundreds of Pakistanis"' },
    { condition: 'Physical Assault', description: 'Documented in some cases' },
    { condition: 'Interrogation Topics', description: 'Pilgrimage trips to Iran/Iraq, Ziyarat e Ashura, Hezbollah' },
    { condition: 'Deportation', description: 'Without chance to collect belongings' }
  ] as TreatmentCondition[],
  legalStatus: [
    'Freedom to worship granted',
    'Maintain own mosques',
    'Family law through special Shia council',
    'Historically important in business community',
    'Representation in political establishment'
  ]
}

// ============================================================================
// SECTION 13: RESTRICTIONS & DISCRIMINATION
// ============================================================================

export interface ApostasyAttribute {
  attribute: string
  details: string
}

export interface ProselytizingRestriction {
  activity: string
  status: string
  penalty: string
}

export interface IrreligionAttribute {
  attribute: string
  details: string
}

export interface BlasphemyAttribute {
  attribute: string
  details: string
}

export interface ReligiousPoliceAttribute {
  attribute: string
  details: string
}

export const restrictionsDiscrimination = {
  apostasy: {
    legalStatus: 'Death penalty (theoretically) under anti-blasphemy law',
    constitution: 'Not legally recognized',
    reality: 'No known prosecutions or executions',
    federalLaw2020: 'Federal Law No. 15 of 2020 removed hudud provisions',
    socialConsequence: 'Strong family pressure, potential violence'
  },
  proselytizing: [
    { activity: 'Non-Muslims preaching to Muslims', status: 'PROHIBITED', penalty: 'Up to 5 years imprisonment' },
    { activity: 'Distributing non-Islamic materials to Muslims', status: 'PROHIBITED', penalty: 'Imprisonment, deportation' },
    { activity: 'Spreading Christianity to Muslims', status: 'NOT permitted', penalty: 'Legal action' },
    { activity: 'Christian women marrying Muslim men', status: 'Permitted', penalty: 'N/A' },
    { activity: 'Muslim women marrying non-Muslim men', status: 'NOT permitted', penalty: 'N/A' }
  ] as ProselytizingRestriction[],
  irreligion: {
    legalStatus: 'Illegal/unrecognized for Muslims',
    nonMuslims: 'Less restricted',
    atheists: 'Mainly expatriates, small number of local youth',
    identifyingAsAtheist: 'Often barred from government office',
    expression: 'Social media with anonymity'
  },
  pioneeringEmiratiAtheist: {
    name: 'Ahmed Ben Kerishan',
    role: 'Blogger advocating atheist and secular views'
  },
  blasphemy: {
    status: 'Outlawed',
    penalty: 'Imprisonment',
    article: 'Article 312 punishes abuse towards Islamic rituals, insulting religions'
  },
  religiousPolice: {
    presence: 'No visible religious police like Saudi muttawa',
    regulation: 'Through Awqaf for Sunni mosques'
  },
  academicNotes: [
    '"Laws on books but enforcement varies"',
    '"Non-Muslims largely free to practice; citizens face restrictions"'
  ],
  minorityDiscriminationIndex: {
    score: 28.0,
    scale: '0-108 (lower = less discrimination)'
  }
}

// ============================================================================
// SECTION 14: RELIGIOUS SITES
// ============================================================================

export interface SZGMCMAttribute {
  attribute: string
  details: string
}

export interface SZGMConstruction {
  attribute: string
  details: string
}

export interface SZGMArchitecture {
  feature: string
  measurement: string
}

export interface SZGMFeature {
  feature: string
  details: string
}

export interface OtherMosque {
  mosque: string
  location: string
  notes: string
}

export const religiousSites = {
  sheikhZayedGrandMosque: {
    location: 'Abu Dhabi, Sheikh Rashid Bin Saeed Street',
    type: 'UAE\'s largest mosque',
    role: 'Major religious tourism destination',
    dailyCapacity: '40,000-50,000 worshippers',
    entry: 'Free (booking recommended)',
    dressCode: 'Must cover shoulders and knees; women wear abayas',
    hours: 'Main prayer hall closed Fridays 12pm-3pm'
  },
  constructionDetails: {
    constructionPeriod: '1994-2007 (13 years)',
    inauguration: 'December 2007',
    groundbreaking: '1996',
    cost: 'Dhs 2 billion (~$545 million)',
    architect: 'Yusef Abdelki',
    contractors: 'Impregilo/Rizzani de Eccher, then ACC/Six Construct (BESIX)',
    workers: '3,000+',
    subcontractors: '38 companies'
  },
  architecture: [
    { feature: 'Building Size', measurement: '~290 × 420 m (950 × 1,380 ft)' },
    { feature: 'Area', measurement: '>12 hectares (30 acres)' },
    { feature: 'Main Dome Height', measurement: '85m' },
    { feature: 'Main Dome Diameter', measurement: '32.2m' },
    { feature: 'Minarets', measurement: '4 (@ 104m each)' },
    { feature: 'Domed', measurement: '82 (7 different sizes)' },
    { feature: 'Columns', measurement: '>1,000 (96 in main prayer hall)' },
    { feature: 'Marble Source', measurement: 'North Macedonia, Italy, India, China' },
    { feature: 'Inlay', measurement: 'Lapis lazuli, carnelian, amethyst, mother of pearl' }
  ] as SZGMArchitecture[],
  features: [
    { feature: 'Hand-knotted Carpet', details: '5,627 m², 35 tons, 2.268 billion knots, 2 years' },
    { feature: 'Chandeliers', details: '7 Faustig with Swarovski crystals (largest 10m diameter, 15m tall)' },
    { feature: 'Courtyard Mosaic', details: '17,000 m² (world\'s largest marble mosaic)' },
    { feature: 'Qibla Wall', details: '99 names of God in Kufic calligraphy' },
    { feature: 'Library', details: 'Northeast minaret, multilingual collection' },
    { feature: 'Lighting', details: 'Unique moon-phase system by Speirs and Major Associates' }
  ] as SZGMFeature[],
  burial: 'Sheikh Zayed bin Sultan Al Nahyan buried in courtyard (died 2004)',
  recognition: 'Voted world\'s second favorite landmark by TripAdvisor (two consecutive years)',
  otherMosques: [
    { mosque: 'Jumeirah Mosque', location: 'Dubai', notes: 'Tourist attraction' },
    { mosque: 'Al Noor Mosque', location: 'Sharjah', notes: 'Tourist attraction' },
    { mosque: 'Iranian Mosque', location: 'Bur Dubai', notes: 'Shia worship' },
    { mosque: 'Iranian Mosque', location: 'Satwa', notes: 'Shia worship' }
  ] as OtherMosque[],
  ldsChurch: {
    dubaiTemple: 'Announced 2020',
    firstInMiddleEast: true,
    congregations: 6
  }
}

// ============================================================================
// SECTION 15: RAMADAN
// ============================================================================

export interface RamadanTradition {
  tradition: string
  description: string
}

export interface RamadanRestriction {
  restriction: string
  details: string
}

export interface TraditionalFood {
  category: string
  items: string
}

export interface ReligiousObservance {
  activity: string
  description: string
}

export const ramadanObservances = {
  traditions: [
    { tradition: 'Haq al-Laila', description: 'Night of mid-Sha\'ban; children in traditional dress collect sweets' },
    { tradition: 'Ramadan Cannon', description: 'Fired at Maghrib prayer to signal iftar (40-year tradition)' },
    { tradition: 'Crescent Sighting', description: 'Previously by trusted men; now by International Astronomy Center from Jebel Jais' },
    { tradition: 'Taraweeh', description: 'Nightly prayers; families pray together' }
  ] as RamadanTradition[],
  legalRestrictions: [
    { restriction: 'Working Hours', details: 'Capped at 6 hours daily (reduced from 8)' },
    { restriction: 'Public Eating', details: 'Article 313 prohibits consuming food/drink in public' },
    { restriction: 'Dubai Restaurants', details: 'Can serve openly since 2021' },
    { restriction: 'Sharjah Restaurants', details: 'Requires permits' },
    { restriction: 'Enforcement', details: 'Applies to all faiths in public spaces' }
  ] as RamadanRestriction[],
  traditionalFoods: [
    { category: 'Main Dishes', items: 'Harees, thareed, biryani, machboos' },
    { category: 'Desserts', items: 'Luqaimat, Ferni' },
    { category: 'Pre-Iftar', items: 'Dates and milk' },
    { category: 'Drinks', items: 'Arabic coffee, Karak tea, jallab, Qamar al-Din, ayran, vimto' }
  ] as TraditionalFood[],
  religiousObservances: [
    { activity: 'Iftar Projects', description: 'Government-organized' },
    { activity: 'Mercy Tables', description: 'At mosques' },
    { activity: 'Quran Recitation', description: 'Events and memorization contests' },
    { activity: 'Zakat Fund', description: 'Supports needy families' },
    { activity: 'Family Visiting', description: 'Strengthens kinship bonds' }
  ] as ReligiousObservance[]
}

// ============================================================================
// SECTION 16: EID CELEBRATIONS
// ============================================================================

export interface EidAlFitr2026 {
  attribute: string
  details: string
}

export interface PublicHoliday {
  holiday: string
  duration: string
  dates: string
}

export const eidCelebrations = {
  eidAlFitr2026: {
    startDate: 'Friday, March 20, 2026',
    finalRamadanDay: 'Thursday, March 19',
    publicHoliday: 'March 19-22 (government); March 19-21 (private sector)',
    workResumes: 'Monday, March 23',
    prayerVenues: 'Indoor (not open prayer grounds) due to regional security',
    note: '"Against backdrop of conflict in region; UAE under attack from Iran"'
  },
  officialPublicHolidays: [
    { holiday: 'New Year', duration: '1 day', dates: 'January 1' },
    { holiday: 'Eid Al Fitr', duration: '4 days', dates: 'Ramadan 29 - Shawwal 3' },
    { holiday: 'Eid Al Adha', duration: '4 days', dates: 'Dhu al Hijjah 9-12' },
    { holiday: 'Hijri New Year', duration: '1 day', dates: '1 Muharram' },
    { holiday: 'Prophet\'s Birthday', duration: '1 day', dates: '12 Rabi\' Awwal' },
    { holiday: 'National Day', duration: '2 days', dates: 'December 2-3' }
  ] as PublicHoliday[],
  eidTraditions: [
    'Morning prayers',
    'Family gatherings',
    'Gift exchanges',
    'Charitable donations',
    'Special events "in peaceful and civilized manner"'
  ]
}

// ============================================================================
// SECTION 17: RAMADAN & EID ECONOMY
// ============================================================================

export interface RamadanEconomyMetric {
  metric: string
  value: string
  change?: string
  source?: string
}

export interface ShoppingTimeSlot {
  timeSlot: string
  activity: string
}

export interface TopCategory {
  category: string
  notes: string
}

export const ramadanEidEconomy = {
  ramadanEconomy2026: [
    { metric: 'Total Economy', value: '$16.4 billion', change: '+10% from 2025 ($15B)', source: 'Redseer Strategy Consultants' },
    { metric: 'Average Order Value', value: '+10%', change: 'vs pre-Ramadan', source: 'Zawya/Fortis' },
    { metric: 'Weekend Fashion Demand', value: 'Significantly higher', change: 'vs weekdays', source: 'Multiple' },
    { metric: 'Night Economy', value: 'Surging', change: '10pm-4am transactions up sharply', source: 'Multiple' }
  ] as RamadanEconomyMetric[],
  shoppingPatterns: [
    { timeSlot: '9 PM - 11 PM', activity: 'Primary shopping peak (post-Iftar)' },
    { timeSlot: '12 PM - 2 PM', activity: 'Secondary midday peak' },
    { timeSlot: 'Midnight - 4 AM', activity: 'Night economy surge' },
    { timeSlot: 'Late Night', activity: 'Leisure, desserts peak' }
  ] as ShoppingTimeSlot[],
  topCategories: [
    { category: 'Fashion', notes: 'Abayas and modest fashion lead' },
    { category: 'Gifting', notes: 'Premium gifting important' },
    { category: 'Perfumes', notes: 'High demand' },
    { category: 'Jewelry', notes: 'Strong sales' },
    { category: 'Sports/Fitness', notes: '~10% jump in Ramadan week one' }
  ] as TopCategory[],
  nightEconomy: [
    'Delivery platforms: highest traffic midnight to Suhoor',
    'Dessert trucks thriving',
    'Malls extend past midnight',
    'Multiple shopping channels used within single evenings'
  ],
  data2025: [
    'UAE Ramadan retail sales: ~$10 billion (up 9% YoY)',
    'Consumer behavior: more staying home, ordering in',
    'Gen Y: different planned purchase patterns'
  ]
}

// ============================================================================
// SECTION 18: ZAKAT SYSTEM
// ============================================================================

export interface ZakatPlatformInfo {
  attribute: string
  details: string
}

export interface ZakatAllocation {
  sector: string
  use: string
}

export interface ZakatPenalty {
  violation: string
  penalty: string
}

export const zakatSystem = {
  nationalZakatPlatform: {
    launchDate: 'February 12, 2026',
    legalBasis: 'Federal Law No. 4 of 2025',
    authority: 'General Authority of Islamic Affairs, Endowments and Zakat',
    chairman: 'Dr. Omar Habtoor Al Darei',
    directorGeneral: 'Ahmed Rashid Al Neyadi',
    endorsedBy: 'President Sheikh Mohamed bin Zayed Al Nahyan'
  },
  platformPurpose: [
    'Unified national gateway for zakat payment',
    'Organized, secure, transparent framework',
    'Sharia-compliant',
    'Ensure funds reach eligible beneficiaries',
    'Accurate data and statistical tracking',
    'Future AI integration planned'
  ],
  allocation: [
    { sector: 'Healthcare', use: 'Projects, treatment of chronic illnesses' },
    { sector: 'Education', use: 'Support programs' },
    { sector: 'Debt Relief', use: 'Financial assistance' },
    { sector: 'Productive Projects', use: 'Economic empowerment' }
  ] as ZakatAllocation[],
  penalties: [
    { violation: 'Illegal Collection', penalty: 'Up to Dh1 million fine' },
    { violation: 'Illegal Distribution', penalty: 'Imprisonment' },
    { violation: 'Unauthorized Collection', penalty: 'Federal law violation' }
  ] as ZakatPenalty[],
  zakatPotential: 'Dh7.5 billion (official data, certain sectors alone)',
  emiratesDigitalProgram: {
    launched: 'Ramadan 2025',
    purpose: 'For companies to calculate zakat',
    description: 'Digital compliance system'
  }
}

// ============================================================================
// SECTION 19: ISLAMIC FINANCE
// ============================================================================

export interface IslamicBank {
  bank: string
  type: string
}

export interface FinanceRegulator {
  authority: string
  initiative: string
}

export interface FinanceAssessment {
  assessment: string
  details: string
}

export const islamicFinance = {
  keyInstitutions: [
    { bank: 'Emirates Islamic', type: 'Islamic bank' },
    { bank: 'Abu Dhabi Islamic Bank (ADIB)', type: 'Islamic bank' },
    { bank: 'Dubai Islamic Bank (DIB)', type: 'Islamic bank' }
  ] as IslamicBank[],
  regulatoryFramework: [
    { authority: 'UAE Central Bank', initiative: 'Sharia Compliance Governance Framework' },
    { authority: 'Higher Shari\'ah Authority (HSA)', initiative: 'Islamic finance development infrastructure' },
    { authority: 'April 2025 Deadline', initiative: 'Full compliance for Islamic financial institutions' }
  ] as FinanceRegulator[],
  fitchRatingsMay2025: {
    assessment: 'UAE Islamic Finance & Halal Strategy could boost industry',
    outlook: 'Positive'
  },
  shariaCourtsCommercial: {
    status: 'Separate Sharia Courts not present for commercial matters',
    civilCourts: 'Handle most commercial disputes'
  },
  legalFramework: [
    { law: 'Federal Decree-Law No. 4 of 2025', description: 'New national framework regulating Zakat' },
    { law: 'Central Bank Framework', description: 'Sharia compliance requirements' }
  ]
}

// ============================================================================
// SECTION 20: RELIGIOUS EDUCATION
// ============================================================================

export interface CurriculumStructure {
  attribute: string
  details: string
}

export interface StudyField {
  field: string
  content: string
}

export interface LessonFrequency {
  studentType: string
  years24: string
  years513: string
}

export const religiousEducation = {
  curriculumStructure: {
    mandatoryFor: 'Muslim students (Arab and non-Arab)',
    startAge: '6 years old',
    duration: '12 years',
    gradeLevels: 'Year 2/Grade 1 through Year 13/Grade 12'
  },
  sixCoreFields: [
    { field: 'Divine revelation', content: 'Quranic studies' },
    { field: 'Islamic creed', content: 'Aqeedah' },
    { field: 'Values and morals', content: 'Islamic ethics' },
    { field: 'Islam rulings and purposes', content: 'Fiqh and Maqasid' },
    { field: 'Syrah', content: 'Prophet Muhammad\'s biography' },
    { field: 'Identity and issues of the age', content: 'Contemporary Islamic issues' }
  ] as StudyField[],
  lessonFrequency: [
    { studentType: 'Arab Muslim', years24: '3 lessons/week', years513: '2 lessons/week' },
    { studentType: 'Non-Arab Muslim', years24: '2 lessons/week', years513: '2 lessons/week' }
  ] as LessonFrequency[],
  curriculumIntegration: {
    initiative: 'Document on Human Fraternity',
    year: 2019,
    details: 'Incorporated into school/university curricula'
  },
  impactseReportFindings: [
    'Curriculum emphasizes UAE\'s "tolerant" image',
    'Focus on relationship with West',
    'Textbooks teach: UAE manages relations with non-Muslims',
    'Mobilizes Islamic ethics in service of state'
  ],
  nonMuslimStudents: {
    islamicInstruction: 'Not required',
    christianSchools: 'May provide religion-specific instruction'
  },
  gemsEducationFeatures: [
    'Early years: Surahs, Hadeeth, Duaa, Nasheeds integration',
    'Field trips to Islamic sites',
    'Islamic academy participation',
    'Extracurricular activities',
    'Ramadan iftar and Eid assemblies'
  ]
}

// ============================================================================
// SECTION 21: SHARIA LAW & LEGAL SYSTEM
// ============================================================================

export interface CourtType {
  courtType: string
  jurisdiction: string
}

export const shariaLawLegalSystem = {
  constitutionalBasis: [
    '"Islamic law is the main source of legislation"',
    'Governs marriage and inheritance in daily life'
  ],
  dualCourtSystem: [
    { courtType: 'Sharia Courts', jurisdiction: 'Personal status (marriage, divorce, inheritance, custody) for Muslims' },
    { courtType: 'Civil Courts', jurisdiction: 'Commercial disputes, most criminal matters' },
    { courtType: 'Muslim Criminal Courts', jurisdiction: 'Sharia application for theft, adultery, alcohol' }
  ] as CourtType[],
  interpretationVariability: [
    { issue: 'Different scholars apply Sharia differently', impact: 'Uncertainty and inconsistency' },
    { issue: 'Large expatriate population', impact: 'Potential conflicts between home-country laws and UAE requirements' }
  ],
  personalStatusMatters: ['Marriage', 'Divorce', 'Inheritance', 'Child custody'],
  commercialTransactions: [
    'No separate Sharia courts',
    'Civil courts handle most disputes'
  ]
}

// ============================================================================
// SECTION 22: RELIGIOUS CONTENT REGULATION
// ============================================================================

export interface ProhibitedAction {
  action: string
  penalty: string
}

export interface MediaStandard {
  standard: string
  requirement: string
}

export interface ConversionLaw {
  activity: string
  status: string
}

export const religiousContentRegulation = {
  federalDecreeLawNo34: {
    name: 'Combating Discrimination, Hatred and Extremism',
    year: 2023
  },
  prohibitedActions: [
    { action: 'Attacks on religious beliefs, rituals, sacred elements', penalty: 'Fine up to Dh1 million' },
    { action: 'Distortion, damage, desecration, insult of holy books', penalty: 'Fine up to Dh1 million' },
    { action: 'Disrespectful behaviours toward prophets, places of worship, cemeteries, graves', penalty: 'Fine' },
    { action: 'Actions causing discrimination or inciting hate speech', penalty: 'Fine' },
    { action: 'Incitement of hate speech or tribal conflicts', penalty: 'Fine' },
    { action: 'Actions disturbing public peace through expression', penalty: 'Fine' }
  ] as ProhibitedAction[],
  keyLimitation: '"Freedom of opinion and expression cannot justify statements or actions that incite contempt or harm towards religions"',
  mediaContentStandards: [
    { standard: 'Respect Divine Entity', requirement: 'Required' },
    { standard: 'Respect Islamic beliefs', requirement: 'Required' },
    { standard: 'Respect monotheistic religions', requirement: 'Required' },
    { standard: 'Respect other beliefs', requirement: 'Required' },
    { standard: 'No offense to religious beliefs', requirement: 'Prohibited' }
  ] as MediaStandard[],
  antiConversionLaws: [
    { activity: 'Converting from Islam', status: 'Not legally recognized' },
    { activity: 'Converting to Islam', status: 'Supported (streamlined through IACAD/Justice Ministry)' },
    { activity: 'Conversion Process', status: 'Free, virtual, requires Emirates ID, one meeting' }
  ] as ConversionLaw[]
}

// ============================================================================
// SECTION 23: HAJJ & UMRAH SERVICES
// ============================================================================

export interface HajjMarketOverview {
  metric: string
  value: string
}

export interface HajjAgency {
  company: string
  location: string
  phone: string
}

export interface PackageInfo {
  packageType: string
  startingPrice: string
  duration: string
}

export interface HajjDayActivity {
  day: string
  activity: string
}

export const hajjUmrahServices = {
  marketOverview: {
    verifiedOrganizers: '46+ companies',
    geographicDistribution: 'Abu Dhabi, Dubai, Al Ain'
  },
  sampleAgencies: [
    { company: 'AL Sahi International Travel', location: 'UAE', phone: '+971 58 619 1045' },
    { company: 'Al Afaq Hajj & Omrah Package', location: 'Abu Dhabi, Mussafah', phone: '+971-2-6722112' },
    { company: 'Al Amaken Hajj & Umrah Svcs', location: 'Abu Dhabi, Al Nahyan', phone: '+971-2-6278887' },
    { company: 'Al Buraq Haj & Umrah', location: 'Dubai, Al Qusais', phone: '+971-4-2632288' },
    { company: 'Al Fatah Group', location: 'Abu Dhabi, Muroor Road', phone: '+971-2-6416665' },
    { company: 'Al Maarej Haj & Umrah Tourism', location: 'Dubai, Salahuddin Rd', phone: '+971-4-2626269' }
  ] as HajjAgency[],
  alSahiPackages: [
    { packageType: 'Hajj (Economy)', startingPrice: 'AED 1,199', duration: '3-7 days' },
    { packageType: 'Hajj (Standard)', startingPrice: 'Varies', duration: '3-7 days' },
    { packageType: 'Hajj (Luxury)', startingPrice: 'Varies', duration: '3-7 days' },
    { packageType: 'Umrah (Standard)', startingPrice: 'Varies', duration: '3-7 days' },
    { packageType: 'Umrah (Deluxe)', startingPrice: 'Varies', duration: '3-7 days' },
    { packageType: 'Umrah (Premium)', startingPrice: 'Varies', duration: '3-7 days' }
  ] as PackageInfo[],
  packageInclusions: [
    'Return flights UAE to Saudi Arabia',
    'Hotels (3-5 star) near Haram in Makkah & Madinah',
    'Private/group transport',
    'Religious guidance and experienced guides',
    'Daily breakfast',
    'Ziyarah tours to historical Islamic sites',
    'Visa processing assistance',
    'Airport and luggage handling'
  ],
  sevenDayUmrahItinerary: [
    { day: '1', activity: 'UAE departure, arrival in Jeddah/Madinah' },
    { day: '2', activity: 'Umrah rituals at Masjid al-Haram' },
    { day: '3', activity: 'Ziyarah in Makkah (Mina, Arafat, Muzdalifah, Jabal al-Noor)' },
    { day: '4', activity: 'Travel to Madinah' },
    { day: '5', activity: 'Ziyarah in Madinah (Quba Mosque, Uhud Mountain, Qiblatain Mosque)' },
    { day: '6', activity: 'Worship & rest at Masjid an-Nabawi' },
    { day: '7', activity: 'Return to UAE' }
  ] as HajjDayActivity[]
}

// ============================================================================
// SECTION 24: RELIGIOUS TOURISM
// ============================================================================

export interface ReligiousTourismSite {
  site: string
  type: string
  visitors: string
  notes: string
}

export interface TourOperator {
  operator: string
  tours: string
}

export const religiousTourism = {
  majorSites: [
    { site: 'Sheikh Zayed Grand Mosque', type: 'Mosque', visitors: '40,000-50,000 daily', notes: 'Major destination' },
    { site: 'BAPS Hindu Mandir', type: 'Hindu Temple', visitors: '2.2M+ year 1', notes: 'Opened March 2024' },
    { site: 'Abrahamic Family House', type: 'Multi-faith', visitors: 'Growing', notes: 'Free entry' },
    { site: 'Jumeirah Mosque', type: 'Mosque', visitors: 'Regular tours', notes: 'Open to non-Muslims' },
    { site: 'Guru Nanak Darbar', type: 'Sikh Temple', visitors: '10,000/Friday', notes: 'Listed on TripAdvisor' }
  ] as ReligiousTourismSite[],
  tourOperators: [
    { operator: 'Viator', tours: 'Religious tours including Sheikh Zayed Grand Mosque, BAPS Mandir, Abrahamic Family House' }
  ] as TourOperator[],
  uaePolicy: [
    'Historically allowed construction of places of worship for various faiths',
    '73 non-Muslim worship centers (per Federal Law No. 9 of 2023)',
    'Open to non-Muslim visitors at many religious sites'
  ],
  unescoPartnership: [
    { year: '2019', project: 'Revive the Spirit of Mosul', details: 'First country to restore Christian churches in Iraq destroyed by ISIS' },
    { year: '2025', project: 'Reopening', details: 'Churches reopened as part of campaign' }
  ]
}

// ============================================================================
// SECTION 25: COUNTER-EXTREMISM
// ============================================================================

export interface CounterExtremismInstitution {
  institution: string
  founded?: string
  purpose: string
}

export interface CVEProgram {
  program: string
  description: string
}

export const counterExtremism = {
  keyInstitutions: [
    { institution: 'Hedayah', founded: '2012', purpose: 'International Center of Excellence for Countering Violent Extremism' },
    { institution: 'Al Sawab Center', founded: '2015', purpose: 'Counter-extremism social media hub' },
    { institution: 'National Committee for Combating Terrorism', founded: undefined, purpose: 'Counter-terrorism coordination' }
  ] as CounterExtremismInstitution[],
  uaeStance: [
    'No tolerance for Islamic extremism in any form',
    'Counter political Islam and Muslim Brotherhood',
    'Promote quietist, apolitical Islam'
  ],
  curriculumApproach: [
    'Emphasizes moderate Islam',
    'Peace and tolerance taught',
    'Document on Human Fraternity in schools',
    'Ill-disposed to radicalism and terrorism'
  ],
  cvePrograms: [
    { program: 'Hedayah', description: 'International CVE training and research' },
    { program: 'Al Sawab', description: 'Social media counter-narratives' },
    { program: 'Global Coalition', description: 'Leading member against Da\'esh' }
  ] as CVEProgram[],
  unSecurityCouncilRole: [
    'December 2023: UAE as Chair of Counter-Terrorism Committee',
    'Adopted Abu Dhabi Guiding Principles on terrorist use of unmanned aircraft systems'
  ],
  interpolLeadership: 'Major General Ahmed Nasser Al-Raisi served as INTERPOL President (2021-2025)'
}

// ============================================================================
// SECTION 26: CRITICISM & CONCERNS
// ============================================================================

export interface HRWCriticism {
  quote: string
  context: string
}

export interface ImprisonedIndividual {
  person: string
  sentence: string
  reason: string
}

export interface AcademicCriticism {
  issue: string
  details: string
}

export interface ShiaDiscriminationDoc {
  organization: string
  finding: string
}

export interface ToleranceParadox {
  issue: string
  details: string
}

export const criticismConcerns = {
  hrwCriticism2018: [
    { quote: '"To paint the UAE government as tolerant is laughable"', context: 'World Tolerance Summit response' },
    { quote: '"UAE\'s sustained assault on freedom of expression since 2011"', context: 'Detaining critics' },
    { quote: '"Dubai\'s claims to be liberal oasis of tolerance are nothing more than a cruel fantasy"', context: 'Overall assessment' }
  ] as HRWCriticism[],
  imprisonedIndividuals: [
    { person: 'Ahmed Mansoor', sentence: '10 years', reason: '"Free speech-related offenses" (May 2018)' },
    { person: 'Nasser bin-Ghaith', sentence: '10 years', reason: '"Peaceful criticism" (March 2017)' },
    { person: 'Tayseer al-Najjar', sentence: '~3 years', reason: 'Jordanian journalist, Facebook posts' },
    { person: 'Matthew Hedges', sentence: '5+ months', reason: 'British academic, spying charges' }
  ] as ImprisonedIndividual[],
  sheikhaLatifa: [
    'Attempted to flee UAE',
    'Forcibly returned and disappeared',
    'HRW: "forcibly returned and then disappeared"'
  ],
  academicCriticismInterfaith: [
    { issue: 'Novel theological formulations', details: 'Some theologians criticized Document on Human Fraternity' },
    { issue: 'Al-Azhar initially disowned', details: 'Abrahamic Family House project' },
    { issue: 'PR exercise masking repression', details: 'Critics call it虚伪' }
  ] as AcademicCriticism[],
  shiaDiscriminationDocumentation: [
    { organization: 'Human Rights Watch', finding: 'Institutional discrimination since 2009' },
    { organization: 'Shia activists', finding: 'Ongoing suppression under guise of national security' }
  ] as ShiaDiscriminationDoc[],
  toleranceParadox: [
    { issue: 'Openness', details: 'Largely for non-citizens' },
    { issue: 'Citizens', details: 'Face significant restrictions' },
    { issue: 'Non-Muslim worship', details: 'Permitted with facilities' },
    { issue: 'Muslim religious choice', details: 'Not permitted' }
  ] as ToleranceParadox[]
}

// ============================================================================
// SECTION 27: SENTIMENT ANALYSIS
// ============================================================================

export interface PositiveIndicator {
  indicator: string
  score: string
  source: string
}

export interface NegativeIndicator {
  indicator: string
  score: string
  source: string
}

export interface NeutralIndicator {
  indicator: string
  analysis: string
}

export interface CredibilityAssessment {
  sourceType: string
  credibility: string
  notes: string
}

export const sentimentAnalysis = {
  positiveIndicators: [
    { indicator: 'Religious freedom constitutional guarantee', score: 'Strong', source: 'Legal framework' },
    { indicator: 'Multi-faith infrastructure', score: 'Extensive', source: '52+ churches, temples, synagogue, gurudwara' },
    { indicator: 'Interfaith diplomacy', score: 'Active', source: 'Pope Francis visit, Document on Human Fraternity' },
    { indicator: 'Religious tourism', score: 'Growing', source: '2.2M+ visitors to BAPS Mandir' },
    { indicator: 'Tolerance policies', score: 'Formalized', source: 'Ministry, laws, programs' }
  ] as PositiveIndicator[],
  negativeIndicators: [
    { indicator: 'Apostasy law', score: 'Severe', source: 'Death penalty theoretically' },
    { indicator: 'Proselytizing restrictions', score: 'Harsh', source: '5 years imprisonment' },
    { indicator: 'Shia discrimination', score: 'Documented', source: 'HRW, NGOs' },
    { indicator: 'Free expression', score: 'Restricted', source: 'HRW documented cases' },
    { indicator: 'Enforcement variability', score: 'Noted', source: '"Laws on books but enforcement varies"' }
  ] as NegativeIndicator[],
  neutralComplexIndicators: [
    { indicator: 'Government religious control', analysis: 'Ensures moderation but limits freedom' },
    { indicator: 'Interfaith initiatives', analysis: 'Genuine pluralism but also soft power' },
    { indicator: 'Tolerance as "economic capital"', analysis: 'Pragmatic approach to diversity' },
    { indicator: 'Enforcement gaps', analysis: 'Theory vs practice differs' }
  ] as NeutralIndicator[],
  credibilityBySource: [
    { sourceType: 'UAE Government Sites', credibility: 'High for official positions', notes: 'May omit criticism' },
    { sourceType: 'Wikipedia', credibility: 'Medium-High', notes: 'Sourced but editable' },
    { sourceType: 'HRW', credibility: 'High for human rights issues', notes: 'Critical perspective' },
    { sourceType: 'Academic', credibility: 'High for analysis', notes: 'Context-rich' },
    { sourceType: 'State Dept', credibility: 'High for religious freedom', notes: 'Comprehensive' },
    { sourceType: 'News outlets', credibility: 'Medium-High', notes: 'Varies by outlet' }
  ] as CredibilityAssessment[]
}

// ============================================================================
// SECTION 28: UAE RELEVANCE ASSESSMENT
// ============================================================================

export interface Tier1Topic {
  topic: string
}

export interface Tier2Topic {
  topic: string
}

export interface Tier3Topic {
  topic: string
}

export interface DashboardMetric {
  metric: string
  value: string
  updateFrequency: string
}

export const uaeRelevanceAssessment = {
  coreRelevanceTier1: [
    'Ministry of Tolerance establishment and programs',
    'Abrahamic Family House initiative',
    'Document on Human Fraternity',
    'BAPS Hindu Mandir construction and opening',
    'Non-Muslim worship center regulation',
    'Shia community treatment',
    'Friday sermon standardization',
    'Religious education curriculum',
    'Zakat system reform'
  ] as Tier1Topic[],
  highRelevanceTier2: [
    'Pope Francis visit and interfaith diplomacy',
    'Counter-extremism programs',
    'Islamic finance regulations',
    'Ramadan economy ($16.4B)',
    'Religious tourism development',
    'Hajj/Umrah service industry',
    'Apostasy and proselytizing laws'
  ] as Tier2Topic[],
  moderateRelevanceTier3: [
    'International religious freedom comparisons',
    'Global interfaith dialogue trends',
    'Halal industry development',
    'Religious content regulation (media)'
  ] as Tier3Topic[],
  dashboardReadyMetrics: [
    { metric: 'Total Religious Sites', value: '100+', updateFrequency: 'As needed' },
    { metric: 'Non-Muslim Worship Centers', value: '73+', updateFrequency: 'Per Federal Law No. 9 of 2023' },
    { metric: 'Ramadan Economy', value: '$16.4B', updateFrequency: 'Annual' },
    { metric: 'BAPS Mandir Visitors (Year 1)', value: '2.2M+', updateFrequency: 'Annual' },
    { metric: 'Religious Tourism Value', value: 'Growing', updateFrequency: 'Quarterly' }
  ] as DashboardMetric[]
}

// ============================================================================
// SECTION 29: URL CONTENT SUMMARIES
// ============================================================================

export interface GovernmentSource {
  url: string
  keyContent: string
}

export interface WikipediaSource {
  url: string
  keyContent: string
}

export interface ReportSource {
  url: string
  keyContent: string
}

export interface AcademicSource {
  url: string
  keyContent: string
}

export interface NewsSource {
  url: string
  keyContent: string
}

export interface ReligiousInstitutionSource {
  url: string
  keyContent: string
}

export const urlContentSummaries = {
  governmentEmbassySources: [
    { url: 'u.ae/en/about-the-uae/culture/tolerance', keyContent: 'National Tolerance Programme, anti-discrimination law, coexistence initiatives' },
    { url: 'u.ae/en/about-the-uae/culture/tolerance/anti-discriminationanti-hatred-law', keyContent: 'Federal Decree Law No. 34 of 2023 provisions, prohibited actions, penalties' },
    { url: 'u.ae/en/about-the-uae/culture/tolerance/uae-support-for-human-fraternity', keyContent: 'Document on Human Fraternity, International Day of Human Fraternity, 12 principles' },
    { url: 'u.ae/en/information-and-services/public-holidays-and-religious-affairs/public-holidays', keyContent: '2026 Eid dates, public holiday calendar, moon-sighting' },
    { url: 'u.ae/en/information-and-services/public-holidays-and-religious-affairs/other-religions-and-religious-festivals', keyContent: 'Non-Muslim worship permissions, religious festival celebrations' },
    { url: 'www.uae-embassy.org/discover-uae/society/religious-inclusion', keyContent: '200+ nationalities, religious demographics, key events timeline' }
  ] as GovernmentSource[],
  wikipediaSources: [
    { url: 'en.wikipedia.org/wiki/Religion_in_the_United_Arab_Emirates', keyContent: '2020 demographics, legal framework, restrictions, Freedom House score' },
    { url: 'en.wikipedia.org/wiki/Islam_in_the_United_Arab_Emirates', keyContent: '76.9% Muslim, Sunni/Shia breakdown, Maliki school' },
    { url: 'en.wikipedia.org/wiki/Sheikh_Zayed_Grand_Mosque', keyContent: 'Full construction details, 41,000+ capacity, $545M cost' },
    { url: 'en.wikipedia.org/wiki/Christianity_in_the_United_Arab_Emirates', keyContent: '12.9%, 52+ churches, denominations, history' },
    { url: 'en.wikipedia.org/wiki/BAPS_Hindu_Mandir_Abu_Dhabi', keyContent: '$84M, 27 acres, 2.2M visitors, interfaith construction team' },
    { url: 'en.wikipedia.org/wiki/Moses_Ben_Maimon_Synagogue', keyContent: 'First purpose-built synagogue, 200+ capacity, features' },
    { url: 'en.wikipedia.org/wiki/Guru_Nanak_Darbar,_Dubai', keyContent: '$20M, 120,000 sq ft, ISO-certified, 50,000 devotees' },
    { url: 'en.wikipedia.org/wiki/Abrahamic_Family_House', keyContent: '82,882 sq ft, David Adjaye architect, three 30m cubes' },
    { url: 'en.wikipedia.org/wiki/Fatwa_Council_(United_Arab_Emirates)', keyContent: 'Established 2018, licensing imams, moderate Islam' },
    { url: 'en.wikipedia.org/wiki/General_Authority_of_Islamic_Affairs_and_Endowments', keyContent: 'Federal agency 2006, mosque administration, three-tier sermons' },
    { url: 'en.wikipedia.org/wiki/Ramadan_in_the_United_Arab_Emirates', keyContent: 'Traditions, laws, food, Article 313' },
    { url: 'en.wikipedia.org/wiki/Document_on_Human_Fraternity', keyContent: '12 principles, signatories, UN International Day' },
    { url: 'en.wikipedia.org/wiki/Irreligion_in_the_United_Arab_Emirates', keyContent: '4% irreligious, death penalty theory, Ahmed Ben Kerishan' },
    { url: 'en.wikipedia.org/wiki/Freedom_of_religion_in_the_United_Arab_Emirates', keyContent: 'Restrictions, deportations, 2020 law changes' },
    { url: 'en.wikipedia.org/wiki/Shia_Islam_in_the_United_Arab_Emirates', keyContent: 'Demographics, Ismaili center, discrimination concerns' },
    { url: 'en.wikipedia.org/wiki/Ministry_of_Tolerance_and_Coexistence', keyContent: '2016 establishment, programs, festivals' },
    { url: 'en.wikipedia.org/wiki/St._Francis_Church,_Abu_Dhabi', keyContent: '300+ capacity, architecture details, February 2023' }
  ] as WikipediaSource[],
  governmentNGOSources: [
    { url: 'www.state.gov/reports/2023-report-on-international-religious-freedom/united-arab-emirates', keyContent: 'Full religious freedom assessment, restrictions, demographics' },
    { url: 'www.hrw.org/news/2018/11/14/hypocrisy-dubais-world-tolerance-summit', keyContent: 'HRW criticism, imprisoned activists, freedom of expression' },
    { url: 'creid.ac/blog/2020/12/31/unwarranted-abductions-in-uae-the-shia-families-fall-into-a-further-despair/', keyContent: 'Abduction cases, Ali Ruhani, Mubashir Hasan, detention conditions' },
    { url: 'end-blasphemy-laws.org/countries/middle-east-and-north-africa/united-arab-emirates/', keyContent: 'Apostasy/blasphemy laws, Article 312, no known prosecutions' }
  ] as ReportSource[],
  academicSources: [
    { url: 'berkleycenter.georgetown.edu/posts/interfaith-dialogue-in-the-united-arab-emirates', keyContent: 'State branding, soft power, interfaith as strategy' },
    { url: 'www.emiratesscholar.com/moral-authenticity-interfaith-dialogue-and-soft-power-in-the-uae/', keyContent: 'Conviction and calculation synthesis, moral statecraft' }
  ] as AcademicSource[],
  newsSources: [
    { url: 'www.thenationalnews.com/podcasts/business-extra/2026/02/25/the-ramadan-economy-how-uae-consumers-are-spending-in-2026/', keyContent: '$16.4B economy, spending patterns, night economy' },
    { url: 'www.thenationalnews.com/news/uae/2026/03/18/eid-al-fitr-2026-uae/', keyContent: 'March 20, 2026 start, holidays, security context' },
    { url: 'www.thenationalnews.com/uae/mystery-surrounds-visit-to-uae-of-alleged-religious-cult-1.126337', keyContent: 'HWPL 2015 visit, Shincheonji Church, Dubai dialogue' },
    { url: 'gulfnews.com/uae/ramadan/uae-launches-national-zakat-platform-to-unify-donations-1.500440351', keyContent: 'February 2026 launch, Dh7.5B potential, officials' },
    { url: 'www.khaleejtimes.com/uae/launches-national-zakat-platform-enhance-transparency-social-impact', keyContent: 'National Zakat Platform, Federal Law No. 4 of 2025' },
    { url: 'www.zawya.com/en/press-release/companies-news/uae-ramadan-retail-shifts-to-multiple-shopping-windows-as-average-spend-rises-10-cp9jozar', keyContent: '10% AOV increase, shopping peaks, fashion leads' },
    { url: 'www.sapience.ae/after-iftar-mapping-the-rise-of-the-ramadan-night-economy-in-dubai-and-riyadh/', keyContent: 'Night economy patterns, three demand waves, sector winners' }
  ] as NewsSource[],
  religiousInstitutionSources: [
    { url: 'www.mandir.ae/', keyContent: 'Hours, registration requirements, Ganga Aarti times, contact' },
    { url: 'www.gurudwaradubai.com/', keyContent: 'Daily hours, ISO certifications, Guinness records, annual services' },
    { url: 'www.9marks.org/article/churches-in-the-united-arab-emirates-lights-in-the-desert/', keyContent: 'Church health assessment, demographics, challenges' }
  ] as ReligiousInstitutionSource[]
}

// ============================================================================
// SECTION 30: DATA QUALITY NOTES
// ============================================================================

export interface FetchCategory {
  category: string
  attempted: number
  successful: number
  rate: string
}

export interface FetchError {
  error: string
  count: number
  impact: string
}

export interface SectionCompleteness {
  section: string
  completeness: string
  notes: string
}

export const dataQualityNotes = {
  verificationStatus: [
    'All queries executed',
    'All pages fetched (77 URLs attempted)',
    'All data extracted from successful fetches',
    'No fabrication detected - all information sourced from fetched pages',
    '100% confidence in sourced data where fetched successfully'
  ],
  fetchSuccessRate: [
    { category: 'Government Sites', attempted: 10, successful: 7, rate: '70%' },
    { category: 'Wikipedia', attempted: 16, successful: 16, rate: '100%' },
    { category: 'NGO/HRW', attempted: 4, successful: 3, rate: '75%' },
    { category: 'Academic', attempted: 4, successful: 2, rate: '50%' },
    { category: 'News/Media', attempted: 10, successful: 8, rate: '80%' },
    { category: 'Religious Institutions', attempted: 10, successful: 5, rate: '50%' },
    { category: 'Other', attempted: 23, successful: 15, rate: '65%' },
    { category: 'Total', attempted: 77, successful: 56, rate: '~73%' }
  ] as FetchCategory[],
  commonFetchErrors: [
    { error: '403 Forbidden', count: 8, impact: 'Content not extracted' },
    { error: 'SSL Certificate', count: 5, impact: 'Government sites inaccessible' },
    { error: 'PDF Size Limit', count: 2, impact: 'Full content not extracted' },
    { error: '303 Redirect', count: 1, impact: 'Content not extracted' }
  ] as FetchError[],
  enrichmentStatistics: [
    { metric: 'Total URLs Processed', count: 77 },
    { metric: 'Unique Data Points', count: '500+' },
    { metric: 'Tables Created', count: '30+' },
    { metric: 'Timeline Events', count: '25+' },
    { metric: 'Religious Sites Listed', count: '20+' },
    { metric: 'Laws/Regulations', count: '10+' },
    { metric: 'Organizations', count: '25+' }
  ],
  completenessAssessment: [
    { section: 'Demographics', completeness: '95%', notes: 'High confidence in figures' },
    { section: 'Legal Framework', completeness: '90%', notes: 'Major laws captured' },
    { section: 'Religious Bodies', completeness: '85%', notes: 'Key institutions covered' },
    { section: 'Non-Muslim Religions', completeness: '95%', notes: 'Comprehensive temple/church data' },
    { section: 'Shia Community', completeness: '80%', notes: 'Some discrimination details limited' },
    { section: 'Interfaith', completeness: '90%', notes: 'Major initiatives captured' },
    { section: 'Restrictions', completeness: '85%', notes: 'Core restrictions documented' },
    { section: 'Economy', completeness: '90%', notes: 'Recent 2026 data included' }
  ] as SectionCompleteness[]
}

// ============================================================================
// REPORT METADATA
// ============================================================================

export const reportMetadata = {
  reportCompiled: '2026-04-27',
  dataSources: '77 URLs (56 successfully fetched)',
  confidenceLevel: 'High for government/official sources; Medium-High for NGOs/academic; Variable for news',
  enrichmentCompleted: 'Yes (URL content extraction from 60+ URLs with comprehensive data enrichment)'
}

// ============================================================================
// EXPORTS - MAIN DATA OBJECT
// ============================================================================

export interface ReligionInterfaithData {
  id: string
  sector: HSBPCCategory
  title: string
  titleAr: string
  description: string
  religiousDemographics: typeof religiousDemographics
  legalFramework: typeof legalFramework
  governmentReligiousBodies: typeof governmentReligiousBodies
  islamicInstitutions: typeof islamicInstitutions
  christianityInUAE: typeof christianityInUAE
  hinduismInUAE: typeof hinduismInUAE
  judaismInUAE: typeof judaismInUAE
  sikhismInUAE: typeof sikhismInUAE
  buddhismOtherReligions: typeof buddhismOtherReligions
  interfaithInitiatives: typeof interfaithInitiatives
  toleranceMinistry: typeof toleranceMinistry
  shiaCommunity: typeof shiaCommunity
  restrictionsDiscrimination: typeof restrictionsDiscrimination
  religiousSites: typeof religiousSites
  ramadanObservances: typeof ramadanObservances
  eidCelebrations: typeof eidCelebrations
  ramadanEidEconomy: typeof ramadanEidEconomy
  zakatSystem: typeof zakatSystem
  islamicFinance: typeof islamicFinance
  religiousEducation: typeof religiousEducation
  shariaLawLegalSystem: typeof shariaLawLegalSystem
  religiousContentRegulation: typeof religiousContentRegulation
  hajjUmrahServices: typeof hajjUmrahServices
  religiousTourism: typeof religiousTourism
  counterExtremism: typeof counterExtremism
  criticismConcerns: typeof criticismConcerns
  sentimentAnalysis: typeof sentimentAnalysis
  uaeRelevanceAssessment: typeof uaeRelevanceAssessment
  urlContentSummaries: typeof urlContentSummaries
  dataQualityNotes: typeof dataQualityNotes
  reportMetadata: typeof reportMetadata
}

export const religionInterfaithData: ReligionInterfaithData = {
  id: 'topic-2-20',
  sector: 'policy',
  title: 'Religion & Interfaith',
  titleAr: 'الدين والتعايش بين الأديان',
  description: 'Religious demographics, tolerance initiatives, interfaith infrastructure, Shia community, restrictions, religious tourism, Ramadan/Eid economy, and counter-extremism programs',
  religiousDemographics,
  legalFramework,
  governmentReligiousBodies,
  islamicInstitutions,
  christianityInUAE,
  hinduismInUAE,
  judaismInUAE,
  sikhismInUAE,
  buddhismOtherReligions,
  interfaithInitiatives,
  toleranceMinistry,
  shiaCommunity,
  restrictionsDiscrimination,
  religiousSites,
  ramadanObservances,
  eidCelebrations,
  ramadanEidEconomy,
  zakatSystem,
  islamicFinance,
  religiousEducation,
  shariaLawLegalSystem,
  religiousContentRegulation,
  hajjUmrahServices,
  religiousTourism,
  counterExtremism,
  criticismConcerns,
  sentimentAnalysis,
  uaeRelevanceAssessment,
  urlContentSummaries,
  dataQualityNotes,
  reportMetadata
}

export default religionInterfaithData
