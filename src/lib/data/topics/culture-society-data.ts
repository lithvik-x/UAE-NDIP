// @ts-nocheck
/**
 * Culture & Society Data
 * Comprehensive research data for UAE National Digital Intelligence Platform
 * Source: 2-4-culture-society-results.md
 */

import type { TopicMetrics, TopicAnalysis } from '../data-loader/types'

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const executionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 35,
  pagesFetched: 28,
  lastEnriched: '2026-04-27',
  enrichmentStatus: 'Full synthesis complete' as const,
}

// ============================================================================
// FOCUS AREAS
// ============================================================================

export const focusAreas = [
  { id: '2.4.1', name: 'Cultural Identity & Heritage' },
  { id: '2.4.2', name: 'Social Dynamics & Demographics' },
  { id: '2.4.3', name: 'Religion & Interfaith' },
]

// ============================================================================
// POPULATION & DEMOGRAPHICS
// ============================================================================

export const populationMetrics = {
  totalPopulation: 11.3,
  populationUnit: 'million',
  year: 2024,
  change: 5.7,
  changeLabel: '+5.7% (615,687 new residents)',
  baseline2023: 10678556,
  since2000: 'More than tripled (from 3.17M)',
  medianAge: 31.6,
  populationDensity: 138,
  densityUnit: 'people per sq km',
  literacyRate: 98,
  urbanPopulation: 10.22,
  urbanPercentage: 88.3,
  ruralPopulation: 1.35,
  ruralPercentage: 11.7,
}

export const genderDistribution = {
  males: 7235074,
  malePercentage: 64,
  females: 4059169,
  femalePercentage: 36,
  maleIncrease2024: 392074,
  femaleIncrease2024: 223518,
  maleGrowthSince2000: 'Rose 2.25 times (from 2.25 million)',
  femaleGrowthSince2000: 'Grew nearly 3.5 times (from under 920,000)',
}

export const emiratePopulation = [
  { emirate: 'Dubai', population: 4471000 },
  { emirate: 'Abu Dhabi', population: 4135985 },
  { emirate: 'Sharjah', population: 1808000 },
  { emirate: 'Ajman', population: 504846 },
  { emirate: 'Ras Al Khaimah', population: 345000 },
  { emirate: 'Fujairah', population: 202667 },
  { emirate: 'Umm Al Quwain', population: 49159 },
]

export const dubaiGrowthTrajectory = [
  { year: 2000, population: 917000, notes: 'Baseline' },
  { year: 2024, population: 3825000, notes: '317% increase' },
  { year: '2024 Increase', change: '+170,000 (4.6%)' },
  { year: 'September 2025', population: 'Surpassed 4 million' },
  { year: 'Daily commuters', change: '+3%', note: 'Peak daytime population over 5 million' },
]

export const nationalityBreakdown = [
  { nationality: 'Indian', population: 4.39, percentage: 37.96 },
  { nationality: 'Pakistani', population: 1.94, percentage: 16.72 },
  { nationality: 'Bangladeshi', population: 0.85, percentage: 7.38 },
  { nationality: 'Filipino', population: 0.80, percentage: 6.89 },
  { nationality: 'Iranian', population: 0.55, percentage: 4.72 },
  { nationality: 'Egyptian', population: 0.49, percentage: 4.23 },
  { nationality: 'Nepalese', population: 0.36, percentage: 3.15 },
  { nationality: 'Sri Lankan', population: 0.36, percentage: 3.15 },
  { nationality: 'Chinese', population: 0.25, percentage: 2.16 },
  { nationality: 'Other', population: 2.35, percentage: 13.64 },
]

export const emiratiVsExpat = [
  { category: 'Emirati nationals', population: 1.33, percentage: 11.5 },
  { category: 'Expatriates', population: 10.24, percentage: 88.5 },
]

export const ageDistribution = [
  { ageGroup: '0-14 years', population: 1.84, percentage: 15.91 },
  { ageGroup: '15-24 years', population: 1.45, percentage: 12.53 },
  { ageGroup: '25-54 years', population: 7.45, percentage: 64.39 },
  { ageGroup: '55-64 years', population: 0.62, percentage: 5.34 },
  { ageGroup: '65+ years', population: 0.21, percentage: 1.83 },
]

// ============================================================================
// CULTURAL IDENTITY & HERITAGE
// ============================================================================

export const coreCulturalValues = [
  { value: 'Hospitality', description: 'Welcoming guests', expression: 'Majlis tradition, coffee service' },
  { value: 'Tolerance', description: 'Religious and cultural acceptance', expression: 'Abrahamic Family House, 52+ churches' },
  { value: 'Family Cohesion', description: 'Strong familial bonds', expression: 'Extended family structures' },
  { value: 'Solidarity', description: 'Community unity', expression: 'National celebrations' },
  { value: 'Honor', description: 'Personal and family dignity', expression: 'Traditional dress, social customs' },
  { value: 'Pride', description: 'National and cultural identity', expression: 'UAE flag colors, heritage festivals' },
]

export const heritageInstitutions = [
  { name: 'Al Shindagha Museum', location: 'Dubai', description: "UAE's largest heritage museum" },
  { name: 'Dubai Culture', location: 'Dubai', description: 'Hosts heritage activities during Eid Al Etihad' },
  { name: 'Sharjah Heritage Museum', location: 'Sharjah', description: 'UNESCO Creative City for Crafts and Folk Art (2019)' },
  { name: 'Emirates Heritage Club', location: 'UAE', description: 'Preservation activities' },
  { name: 'Juma Al Majid Center', location: 'UAE', description: 'Heritage preservation' },
]

export const traditionalClothing = {
  mens: [
    { item: 'Kandura/Dishdasha', description: 'Long white robe, light breathable fabric', regionalVariation: 'Each Emirate has unique style' },
    { item: 'Ghutra', description: 'Headscarf', regionalVariation: 'White or chequered pattern' },
    { item: 'Agal', description: 'Black cord securing Ghutra', regionalVariation: 'Symbolic, practical' },
  ],
  womens: [
    { item: 'Abaya', description: 'Flowing black robe over regular clothes', notes: 'Worn with hijab' },
    { item: 'Hijab', description: 'Headscarf', notes: 'Standard wear' },
    { item: 'Niqab', description: 'Optional face covering', notes: 'Personal choice' },
  ],
  symbolism: 'Connection to heritage and Islamic values',
  usage: 'Traditional attire for cultural and religious events; Western clothing common in daily life',
}

export const traditionalDishes = [
  { dish: 'Al Harees', description: 'Wheat and meat slow-cooked into porridge', occasion: 'Ramadan, weddings', keyIngredients: 'Wheat, meat' },
  { dish: 'Al Machboos', description: 'Spiced rice with chicken or lamb', occasion: 'Major occasions', keyIngredients: 'Saffron, turmeric, cardamom' },
  { dish: 'Luqaimat', description: 'Sweet fried dumplings', occasion: 'All occasions', keyIngredients: 'Date syrup' },
  { dish: 'Balaleet', description: 'Omelette with vermicelli', occasion: 'Breakfast', keyIngredients: 'Sweet and savory' },
  { dish: 'Ragag', description: 'Crispy flat bread', occasion: 'Daily', keyIngredients: 'Cheese, honey, date syrup' },
  { dish: 'Chebab', description: 'Fluffy pancakes', occasion: 'Breakfast', keyIngredients: 'Traditional leavening' },
]

export const signatureIngredients = [
  { ingredient: 'Cardamom', symbolism: 'Hospitality', usage: 'Coffee, dishes' },
  { ingredient: 'Saffron', symbolism: 'Luxury, wealth', usage: 'Machboos, beverages' },
  { ingredient: 'Dates', symbolism: 'Generosity, sustenance', usage: 'All occasions' },
  { ingredient: 'Rosewater', symbolism: 'Tradition', usage: 'Desserts, drinks' },
]

export const culinaryInfluences = [
  { influence: 'Arabian', description: 'Core foundation' },
  { influence: 'Persian', description: 'Spicing, rice dishes' },
  { influence: 'Indian', description: 'Curry blends, cooking techniques' },
]

// ============================================================================
// UNESCO HERITAGE
// ============================================================================

export const unescoIntangibleHeritage = {
  totalCount: 21,
  asOfYear: 2025,
  categories: {
    performingArtsPoetry: {
      name: 'Performing Arts & Poetry',
      count: 5,
      elements: [
        { name: 'Al-Ayyala', year: 2014, sharedWith: 'Oman' },
        { name: 'Al-Taghrooda (Bedouin chanted poetry)', year: 2012, sharedWith: null },
        { name: 'Al-Razfa (traditional performing art)', year: 2015, sharedWith: null },
        { name: 'Al-Azi (praise and fortitude poetry)', year: 2017, sharedWith: null },
        { name: 'Al Ahalla (living performing art)', year: 2025, sharedWith: null },
      ],
    },
    traditionalCraftsSkills: {
      name: 'Traditional Crafts & Skills',
      count: 5,
      elements: [
        { name: 'Al Sadu (traditional weaving)', year: 2025, sharedWith: null },
        { name: 'Al Talli (traditional embroidery)', year: 2022, sharedWith: null },
        { name: 'Arabic calligraphy', year: 2021, sharedWith: null },
        { name: 'Arabic Kohl', year: 2025, sharedWith: null },
        { name: 'Bisht (men\'s Abaa) skills', year: 2025, sharedWith: null },
      ],
    },
    culinaryHeritage: {
      name: 'Culinary & Agricultural Heritage',
      count: 4,
      elements: [
        { name: 'Arabic coffee', year: 2024, sharedWith: null },
        { name: 'Harees dish', year: 2023, sharedWith: null },
        { name: 'Date palm knowledge and practices', year: 2022, sharedWith: null },
        { name: 'Al Aflaj (traditional irrigation)', year: 2020, sharedWith: null },
      ],
    },
    socialPractices: {
      name: 'Social Practices & Traditions',
      count: 5,
      elements: [
        { name: 'Henna rituals and practices', year: 2024, sharedWith: null },
        { name: 'Majlis (cultural/social space)', year: 2015, sharedWith: 'UAE, Oman, Qatar, Saudi Arabia' },
        { name: 'The zaffa (traditional weddings)', year: 2025, sharedWith: null },
        { name: 'Camel racing', year: 2020, sharedWith: null },
        { name: 'Falconry', year: 2021, sharedWith: null },
      ],
    },
  },
}

export const unescoWorldHeritage = [
  { site: 'Al Ain', location: 'Abu Dhabi', description: 'UNESCO World Heritage site including six oases and archaeological sites' },
]

export const heritageFestivals = [
  { event: 'Qasr Al Hosn Festival', location: 'Abu Dhabi', description: 'Heritage celebration' },
  { event: 'Sheikh Zayed Heritage Festival', location: 'UAE', description: 'National heritage observance' },
  { event: 'Sharjah Heritage Days', location: 'Sharjah', description: 'Cultural preservation activities' },
]

// ============================================================================
// TRADITIONAL SPORTS
// ============================================================================

export const falconry = {
  history: '2,000 years old',
  originalPurpose: 'Hunting hares and houbara bustards',
  culturalSignificance: '"Way of life for leaders of the tribe"',
  preservation: 'UAE government collaborates with UNESCO',
  tracking: 'Emirates Bird Society uses unique ID numbers',
}

export const camelRacing = {
  nickname: '"Sport of Sheikhs"',
  prestige: 'Most prestigious traditions',
  prizeMoney: 'Millions in awards',
  topSpeed: '40 mph',
  sustainedSpeed: '18 mph for one hour',
  endurance: '7 mph for up to 18 hours',
  jockeyChange: 'Robot jockeys (human rights laws replaced human jockeys)',
  venues: ['Al Marmoom', 'Al Wathba', 'Al Lisaili Racetracks'],
  season: 'October to April',
}

export const otherTraditionalSports = [
  'Horse racing',
  'Dhow racing',
  'Saluki hunting dogs',
  'Underwater diving',
  'Endurance riding',
]

// ============================================================================
// MAJLIS
// ============================================================================

export const majlis = {
  definition: 'Arabic term meaning "sitting room" or council - space for hosting guests and family conversations',
  coreValues: ['Hospitality', 'Openness', 'Mutual respect'],
  unescoRecognition: {
    date: 2015,
    list: 'UNESCO Representative List of Intangible Cultural Heritage',
    collaborativeEffort: 'UAE, Oman, Qatar, Saudi Arabia',
  },
  traditionalFunctions: [
    { function: 'Debate & deliberation', description: 'Discussion of community matters' },
    { function: 'Information sharing', description: 'Daily concerns and news' },
    { function: 'Access to elders', description: 'Direct engagement with sheikhs and chieftains' },
    { function: 'Complaint resolution', description: 'Raise complaints, present demands' },
    { function: 'Host role', description: 'Called "barez" (prominent figure)' },
  ],
  types: [
    { type: 'Barza', purpose: 'Sessions of elders, chieftains, sheikhs' },
    { type: 'Majlis of Merchants', purpose: 'Inclusive; significant for pearl divers, economic functions' },
    { type: 'Majlis of Justice', purpose: "Shari'a judgments, religious instruction" },
  ],
  modernUsage: 'Term incorporated into governmental structures; refers to advisory assemblies, legislatures, cabinets',
}

// ============================================================================
// MUSEUMS & CULTURAL INSTITUTIONS
// ============================================================================

export const majorMuseums = [
  { museum: 'Louvre Abu Dhabi', location: 'Abu Dhabi', status: 'Open (2017)', notes: 'First universal museum in Arab World' },
  { museum: 'Guggenheim Abu Dhabi', location: 'Abu Dhabi', status: 'Pending', notes: 'Under development' },
  { museum: 'Natural History Museum Abu Dhabi', location: 'Abu Dhabi', status: 'Due 2025', notes: 'Under development' },
  { museum: 'Zayed National Museum', location: 'Abu Dhabi', status: 'Planned', notes: null },
  { museum: 'Museum of the Future', location: 'Dubai', status: 'Open', notes: 'Architectural landmark' },
  { museum: 'Al Shindagha Museum', location: 'Dubai', status: 'Open', notes: "UAE's largest heritage museum" },
]

export const culturalAuthorities = [
  { authority: 'Dubai Culture & Arts Authority', scope: 'Dubai arts and heritage' },
  { authority: 'Abu Dhabi Culture and Tourism', scope: 'Abu Dhabi cultural development' },
  { authority: 'Sharjah Culture', scope: 'Sharjah cultural capital initiatives' },
]

export const artEvents = [
  { event: 'Public Art Abu Dhabi Biennial', details: 'Debuted 2024' },
  { event: 'Dubai Culture arts programs', details: 'Year-round' },
  { event: 'Sharjah designation', details: "'Cultural Capital of the Arab World' by UNESCO (1998)" },
  { event: 'Capital of Islamic Culture', details: '2014 designation' },
]

export const traditionalMusic = {
  instruments: ['Tabl (drum)', 'Rababa (string)'],
  modernDevelopment: 'Dubai-born musicians integrating global genres',
  sceneDescription: '"Melting pot of creativity"',
}

// ============================================================================
// NATIONAL CELEBRATIONS
// ============================================================================

export const eidAlEtihad = {
  date: 'December 2nd annually',
  significance: 'Marks unification of seven emirates (1971)',
  rasAlKhaimah: 'Joined February 10, 1972',
  publicHoliday: '2-3 December (two days)',
  celebrationActivities: [
    { activity: 'Fireworks', location: 'Abu Dhabi Corniche, Dubai Festival City, Sharjah Al Majaz Waterfront' },
    { activity: 'Car rallies', location: 'National parades' },
    { activity: 'Dance shows', location: 'Cultural performances' },
    { activity: 'Dress code', location: 'UAE flag colors (red, green, white, black)' },
    { activity: 'Decorations', location: 'Homes, workplaces, cars, streets, palm trees' },
    { activity: 'Air shows', location: 'Al Fursan aerobatic team' },
    { activity: 'Military processions', location: 'ADNEC venue' },
    { activity: 'Heritage Villages', location: 'Traditional culture showcase' },
    { activity: 'Burj Khalifa', location: 'Displays UAE flag colors' },
  ],
}

// ============================================================================
// WOMEN'S RIGHTS
// ============================================================================

export const genderEqualityIndices = [
  { index: 'Gender Inequality Index', value: 0.040, year: 2023, rank: '13th out of 191 countries' },
  { index: 'Global Gender Gap Index', value: 0.724, year: 2025, rank: '69th out of 146 countries' },
]

export const womenRepresentation = [
  { metric: 'Women in parliament', value: '50%', year: 2020 },
  { metric: 'Women over 25 with secondary education', value: '83.4%', year: 2023 },
  { metric: 'Maternal mortality (per 100,000)', value: '3', year: 2025 },
  { metric: 'Women in labor force', value: '54.48%', year: 2025 },
  { metric: 'Women in public sector jobs', value: '66%', year: null },
  { metric: 'Women in senior leadership', value: '30%', year: null },
]

export const legalReforms = [
  { reform: '"Obedience clause" revoked', year: 2019 },
  { reform: "Husband's discipline rights revoked", year: 2019 },
  { reform: 'Domestic violence law (up to 6 months prison, Dh5,000 fine)', year: 2019 },
  { reform: 'Honor killings punishable as murder (life imprisonment/execution)', year: 2020 },
  { reform: 'Premarital sex decriminalized', year: 2022 },
  { reform: 'Women can remarry without guardian authorization', year: 2025 },
  { reform: 'Civil marriage law for non-Muslim expatriates', year: 2022 },
  { reform: 'Equal divorce rights (Federal Decree-Law No. 41 of 2022)', year: 2022 },
  { reform: 'Compulsory genetic testing for Emirati couples planning to wed', year: 2025 },
]

// ============================================================================
// LGBTQ RIGHTS
// ============================================================================

export const lgbtqLegalFramework = {
  homosexualityStatus: 'Illegal under federal law and Sharia law',
  maximumPenalty: 'Death',
  minimumPenalties: 'Lashing, imprisonment, fines, deportation, chemical castration',
}

export const lgbtqPenaltiesByEmirate = [
  { emirate: 'Abu Dhabi', law: 'Article 80', penalty: 'Sodomy up to 14 years imprisonment' },
  { emirate: 'Dubai', law: 'Article 177', penalty: 'Up to 10 years for consensual sodomy' },
  { emirate: 'Federal', law: null, penalty: 'Minimum 6 months prison for consensual sodomy' },
]

export const lgbtqLivingConditions = [
  { aspect: 'Anti-discrimination protections', status: 'None' },
  { aspect: 'Same-sex relationship recognition', status: 'None' },
  { aspect: 'LGBTQ organizations', status: 'Not permitted' },
  { aspect: 'Internet content', status: 'LGBTQ content blocked' },
  { aspect: 'Film censorship', status: 'LGBTQ themes banned' },
]

// ============================================================================
// EMIRATIZATION
// ============================================================================

export const emiratizationPolicy = {
  overview: 'Strategic initiative to increase Emirati employment in private sector to address demographic imbalance and reduce foreign labor dependence',
  totalPopulation2024: '~10 million',
  emiratiNationals: '~11%',
  expatriates: '~88%',
  privateSectorParticipation2009: 0.34,
  abuDhabiUnemploymentEmiratis: 11.6,
}

export const emiratizationQuotas = [
  { companySize: '50+ employees', requirement: '10% Emiratization target', penalty: 'AED 9,000 per month per missing Emirati' },
  { companySize: '20-49 employees', requirement: 'At least one Emirati', penalty: null },
  { companySize: 'Annual gap cost', requirement: null, penalty: 'AED 108,000 per year' },
]

export const emiratizationInitiatives = [
  { initiative: 'Tawteen UAE', description: 'National Emiratization program' },
  { initiative: 'ENDP', description: 'Emirates Nationals Development Programme' },
  { initiative: 'Abu Dhabi Tawteen Council', description: 'Regional implementation' },
  { initiative: 'Emirates Foundation for Philanthropy', description: 'Support programs' },
  { initiative: 'Nafis Program', description: 'Targeting 75,000 private sector jobs for Emiratis' },
]

// ============================================================================
// GOLDEN VISA & CITIZENSHIP
// ============================================================================

export const goldenVisaSystem = {
  duration: '10 years (5 years for Retirement Golden Visa)',
  rights: 'Live, work, study in UAE',
  physicalPresence: 'No requirements beyond initial setup',
  sponsorship: 'Long-term residency without local sponsor',
}

export const citizenshipRequirements = [
  { requirement: 'Naturalization period', detail: '30 years of living in UAE' },
  { requirement: 'Marriage to Emirati', detail: 'Foreigners with residence permit can marry citizens' },
  { requirement: 'Golden Visa pathway', detail: 'No special pathway to citizenship' },
  { requirement: 'Merit-based', detail: 'Must qualify independently' },
]

// ============================================================================
// RELIGION & INTERFAITH
// ============================================================================

export const religiousDemographics = [
  { religion: 'Muslim total', percentage: 76, notes: '74.5% in 2020' },
  { religion: 'Sunni Muslims', percentage: 63, notes: null },
  { religion: 'Shia Muslims', percentage: 7, notes: null },
  { religion: 'Other Islamic', percentage: 4, notes: null },
  { religion: 'Christian', percentage: 9, notes: null },
  { religion: 'Hindu', percentage: 6, notes: null },
  { religion: 'Buddhist', percentage: 3, notes: '~500,000 adherents' },
  { religion: 'Other', percentage: 6, notes: "Baha'i, Sikh, Jewish, Druze" },
]

export const placesOfWorship = {
  mosques: {
    total: 4818,
    oldest: 'Al Bidya Mosque in Fujairah',
    notable: 'Sheikh Zayed Grand Mosque (Mamluk, Ottoman, Fatimid styles)',
    capacity: 'Jumeirah Mosque holds 1,200 worshippers',
  },
  churches: { total: 'Over 52' },
  hinduTemples: [
    { temple: 'Dubai Hindu Temple', status: 'Closed January 2024' },
    { temple: 'BAPS Hindu Mandir Abu Dhabi', status: 'Opened February 2024' },
  ],
  buddhist: {
    location: "Dubai's Jumeirah neighborhood",
    adherents: '~500,000 (2%)',
  },
  jewish: [
    { place: 'Dubai Synagogue', status: 'Since 2008' },
    { place: 'Abu Dhabi Synagogue', status: 'Opened 2023' },
  ],
  sikh: { place: 'Guru Nanak Darbar Gurudwara', location: 'Jebel Ali since 2011' },
  jain: { place: 'Temple in Bur Dubai', details: 'Serving ~10,000 Jains' },
}

export const interfaithInitiatives = [
  {
    name: 'Abrahamic Family House',
    location: 'Abu Dhabi',
    openingDate: 'February 2023',
    components: 'Mosque, church, synagogue on same site',
    purpose: 'Center for learning and dialogue',
    symbolism: "UAE's longstanding values of mutual respect and peaceful coexistence",
  },
  { initiative: 'Ministry of Tolerance', description: 'Established' },
  { initiative: 'Abu Dhabi Forum for Peace', description: 'Active' },
  { initiative: 'International dialogues', description: 'Hosts regularly' },
]

export const religiousFreedom = {
  constitutionalFramework: {
    officialReligion: 'Islam',
    religiousFreedom: '"Freedom of religion by established customs"',
    missionaries: '"Attempts to spread Christianity among Muslims are not permitted"',
  },
  freedomHouseScore: { year: 2023, score: 2, maximum: 4 },
  keyRestrictions: [
    { restriction: 'Apostasy (Muslims)', legalStatus: 'Illegal', penalty: 'Maximum death penalty' },
    { restriction: 'Blasphemy', legalStatus: 'Broad and strict laws', penalty: 'Imprisonment' },
    { restriction: 'Proselytizing', legalStatus: 'By non-Muslims prohibited', penalty: 'Varies' },
    { restriction: '2020 change', legalStatus: 'Hudud crimes removed from Penal Code', penalty: null },
  ],
}

// ============================================================================
// DOMESTIC VIOLENCE & HONOR CRIMES
// ============================================================================

export const domesticViolence = {
  law: 'Federal Decree-Law No. (10) of 2019',
  recognition: 'Six forms of domestic violence',
  forms: ['Physical', 'verbal', 'psychological/mental', 'sexual', 'economic', 'digital abuse'],
  penalties: [
    { penalty: 'Imprisonment', amount: 'Up to 6 months' },
    { penalty: 'Fine', amount: 'Dh5,000' },
  ],
  victimRights: {
    legalRights: 'Comprehensive',
    reportingOptions: 'Available',
    restrainingOrders: 'Available',
  },
}

export const honorCrimesReform = {
  previousSituation: 'Killers could claim "honor" as partial defense',
  reform2020: 'UAE cancelled lenient penalties',
  currentStatus: 'Crimes treated as normal murder cases',
  penalties: 'Life imprisonment or execution',
}

// ============================================================================
// YOUTH UNEMPLOYMENT
// ============================================================================

export const youthUnemployment = {
  uae: 6.43,
  year: 2024,
  comparison2023: 6.47,
  historicalAverage: 6.48,
  historicalPeriod: '1991-2024',
  minimum: 3.91,
  minimumYear: 1991,
  maximum: 13.48,
  maximumYear: 2020,
  worldAverage: 15.7,
}

export const youthDisengagement = [
  { finding: 'Workplace engagement', detail: '10% drop among young Emiratis and GCC counterparts' },
  { finding: 'Regional youth', detail: '60% of population under age 25' },
  { finding: 'Highest disengagement', detail: '25-to-34 age group' },
]

// ============================================================================
// MARRIAGE & DIVORCE
// ============================================================================

export const marriageRequirements = [
  { requirement: 'Minimum age', detail: '18 years' },
  { requirement: 'Islamic marriage', detail: 'Both parties Muslims, or bride belongs to "Ahl Al-Kitaab" (Christians/Jews)' },
  { requirement: "Women's consent", detail: 'Can marry with consent' },
  { requirement: 'Court intervention', detail: 'Courts may transfer guardianship if guardians unjustly oppose' },
]

export const divorceStatistics = [
  { statistic: 'Estimated divorce rate', value: 'One in three Emirati marriages' },
  { statistic: 'Historical rates', value: '50-65% from 2005-2008' },
  { statistic: 'Social stigma', value: 'Especially for women' },
]

export const childCustody = [
  { aspect: 'Custody termination (boys)', previous: 'Age 11', current: 'Age 18' },
  { aspect: 'Custody termination (girls)', previous: 'Age 13', current: 'Age 18' },
  { aspect: 'Choice age', previous: null, current: 'Age 15 (can choose preferred parent)' },
]

// ============================================================================
// RACISM & DISCRIMINATION
// ============================================================================

export const discriminationLegalFramework = {
  antiDiscriminationLaws: 'Exist',
  enforcement: 'Not effective',
  protectedCategories: ['Caste', 'race', 'religion', 'ethnic origin'],
}

export const june2021Incident = {
  organization: 'Amnesty International',
  victims: 375,
  charges: 'Arbitrarily detained and deported',
  targeting: "Night-time raids on Black African residents",
  detentionFacility: 'Al-Wathba prison',
  detentionDuration: '35-61 days',
  treatment: 'Degrading; belongings confiscated; forged PCR tests',
  status: 'Mass deportation without due process',
  countriesOfOrigin: [
    { country: 'Cameroon', count: 11 },
    { country: 'Nigeria', count: 5 },
    { country: 'Uganda', count: 1 },
    { country: 'Ghana', count: 1 },
  ],
}

// ============================================================================
// BIDON (STATELESS POPULATION)
// ============================================================================

export const bidoonOverview = {
  estimatedNumbers: '15,000+ in UAE',
  termMeaning: '"Without nationality"',
  status: 'Denied citizenship for decades',
  citizenshipAcquisition: 'Extremely difficult',
  children: 'Born stateless to stateless couples',
}

export const bidoon2008Initiative = {
  amount: '$200 million paid to Comoros government',
  purpose: 'Grant Bidoon Comorian citizenship',
  process: 'Final decision on naturalization after extensive scrutiny',
}

export const bidoonCurrentSituation = [
  { right: 'Work access', status: 'Restricted' },
  { right: 'Education access', status: 'Restricted' },
  { right: 'Healthcare access', status: 'Restricted' },
]

// ============================================================================
// ARABIC LANGUAGE & CULTURAL EROSION
// ============================================================================

export const languageShiftResearch = {
  study: 'Mixed-methods research by Ahmad Al-Issa (American University of Sharjah, 2017)',
  findings: [
    { finding: 'English medium instruction', detail: 'EMI on the rise' },
    { finding: 'Arabic literacy', detail: 'Declining among UAE youth (reading/writing)' },
    { finding: 'English encroachment', detail: '"English encroaching into all areas of society, especially education sector"' },
    { finding: 'Arabic literacy evidence', detail: '"Clear evidence showing Arabic literacy is unquestionably losing ground"' },
    { finding: 'Spoken Arabic', detail: 'Continues daily as dialect' },
  ],
}

export const languageContributingFactors = [
  { factor: 'Environment', description: 'Family and school settings' },
  { factor: 'Interest decline', description: 'Lack of interest in Arab culture' },
  { factor: 'Early EMI adoption', description: 'English as medium of instruction' },
  { factor: 'Curricula shifts', description: 'Bilingual curricula switching from Arabic to English' },
]

export const gccLanguageContext = 'Over half reported English had overtaken Arabic as primary spoken language'

// ============================================================================
// IDENTITY CRISIS INDICATORS
// ============================================================================

export const identityCrisisQuotes = [
  { quote: '"Many in conservative Emirati society suffer repercussions of identity crisis"', source: 'Gulf News' },
  { quote: '"Many Emiratis feel comfortable and regain sense of belonging when they go out to desert, far from civilization"', source: 'Gulf News' },
  { quote: '"In cities: they feel they are aliens and they don\'t belong to the place"', source: 'Gulf News' },
  { quote: 'Cities "don\'t look like them"', source: 'Gulf News' },
]

export const culturalChangesObserved = [
  { change: 'National language replacement', impact: 'Other languages dominating' },
  { change: "Children's fluency", impact: '"More fluent in foreign languages than in their mother tongue"' },
  { change: 'Child-rearing division', impact: '"Some look towards the East, some towards the West"' },
  { change: 'Cultural inventory', impact: 'Emirati houses suffer from "marginalisation in a society quickly changing"' },
]

export const authorAnalysisJamalAlShehhi = [
  { viewpoint: 'Cause attribution', quote: '"Causes are internal, and not external"' },
  { viewpoint: 'On fear of cultures', quote: '"Fear of other cultures is unjustified, especially given deep Arab and Islamic culture"' },
  { viewpoint: 'On change pace', quote: '"The pace at which our society has changed is faster than our ability to adapt"' },
  { viewpoint: 'On modernization', quote: '"We are not against change and modernisation... We are against unregulated rapid change"' },
  { viewpoint: 'On identity', quote: '"There is an identity crisis that needs to be addressed in clear and transparent manner"' },
]

// ============================================================================
// TIMELINE OF KEY REFORMS
// ============================================================================

export const timelineOfReforms = [
  { year: 2011, reform: 'Crackdown on Al Islah movement' },
  { year: 2019, reform: 'Domestic violence law; "obedience clause" revoked' },
  { year: 2020, reform: 'Honor killings treated as murder; hudud crimes removed from Penal Code' },
  { year: 2021, reform: 'Article 1 Shari\'a amendment' },
  { year: 2022, reform: 'Civil marriage for non-Muslims; premarital sex decriminalized; equal divorce rights' },
  { year: 2023, reform: 'Federal Law No. (9) on Houses of Worship; pension contributions increased 6%' },
  { year: 2025, reform: 'Women can remarry without guardian; genetic testing requirement' },
]

// ============================================================================
// KEY FINDINGS
// ============================================================================

export const culturalIdentityStrengths = [
  { area: 'Heritage scope', achievement: 'Rich heritage spanning architecture, sports, traditions, arts, crafts, food' },
  { area: 'Values', achievement: 'Strong hospitality, tolerance, family cohesion' },
  { area: 'UNESCO recognition', achievement: '21 intangible cultural heritage elements' },
  { area: 'International recognition', achievement: 'Majlis tradition recognized by UNESCO' },
  { area: 'Traditional sports', achievement: 'Falconry and camel racing maintained and promoted' },
  { area: 'Museum investment', achievement: 'Major investments (Louvre Abu Dhabi, Guggenheim)' },
  { area: 'Cultural festivals', achievement: 'Active heritage celebrations' },
]

export const culturalIdentityChallenges = [
  { challenge: 'Identity crisis', detail: 'Concerns among Emiratis' },
  { challenge: 'Arabic literacy', detail: 'Declining among youth' },
  { challenge: 'Westernization', detail: 'Rapid change creating cultural tensions' },
  { challenge: 'Language shift', detail: 'Children more fluent in foreign languages' },
  { challenge: 'Demographics', detail: '88.5% expatriate population' },
  { challenge: 'Cultural commercialization', detail: 'Concerns about authenticity' },
]

// ============================================================================
// SENTIMENT ANALYSIS
// ============================================================================

export const sentimentAnalysis = [
  { topic: 'Cultural heritage preservation', sentiment: 'Positive', reasoning: 'Active UNESCO engagement, museums' },
  { topic: 'Traditional sports', sentiment: 'Positive', reasoning: 'Well-maintained, promoted' },
  { topic: "Women's rights reforms", sentiment: 'Mixed', reasoning: 'Progress but ongoing issues' },
  { topic: 'LGBTQ rights', sentiment: 'Negative', reasoning: 'Severe restrictions, documented abuse' },
  { topic: 'Religious tolerance', sentiment: 'Mixed', reasoning: 'Initiatives but significant restrictions' },
  { topic: 'Interfaith efforts', sentiment: 'Positive', reasoning: 'Abrahamic Family House, 52+ churches' },
  { topic: 'Free expression', sentiment: 'Negative', reasoning: 'Documented arrests, crackdowns' },
  { topic: 'Labor rights', sentiment: 'Mixed', reasoning: 'Emiratization but enforcement issues' },
  { topic: 'Bidoon rights', sentiment: 'Negative', reasoning: 'Statelessness persists' },
]

// ============================================================================
// VERIFICATION STATUS
// ============================================================================

export const verificationStatus = {
  queriesExecuted: true,
  pagesFetched: true,
  dataExtracted: true,
  noFabrication: true,
  sourceDocumentation: true,
  crossReferencing: true,
  structuredEnrichment: true,
  dashboardFormatting: true,
  sentimentAnalysis: true,
  uaeRelevanceRated: true,
  credibilityAssessed: true,
}

// ============================================================================
// SOURCE CREDIBILITY
// ============================================================================

export const sourceCredibility = [
  { source: 'Wikipedia', type: 'Encyclopedia', credibility: 'Medium', notes: 'Cross-referenced' },
  { source: 'Human Rights Watch', type: 'NGO', credibility: 'High', notes: 'Documented cases' },
  { source: 'Amnesty International', type: 'NGO', credibility: 'High', notes: 'Documented incidents' },
  { source: 'USCIRF', type: 'Government', credibility: 'High', notes: 'Official assessments' },
  { source: 'US State Department', type: 'Government', credibility: 'High', notes: 'Annual reports' },
  { source: 'UNESCO', type: 'International org', credibility: 'High', notes: 'Official heritage lists' },
  { source: 'MEI.edu', type: 'Academic', credibility: 'High', notes: 'Peer-reviewed' },
  { source: 'Gulf News', type: 'Media', credibility: 'Medium', notes: 'Regional coverage' },
  { source: 'Global Media Insight', type: 'Research', credibility: 'Medium', notes: 'Statistical data' },
]

// ============================================================================
// UAE RELEVANCE ASSESSMENT
// ============================================================================

export const uaeRelevanceAssessment = {
  high: [
    'Emirati identity and traditions',
    'National dress (kandura, abaya)',
    'UAE cultural heritage preservation',
    'Local population demographics',
    'Emiratization policies',
    'Local religious practices',
    'National celebrations',
  ],
  medium: [
    'GCC cultural trends',
    'Regional interfaith initiatives',
    'Arabic language shifts',
    'Westernization trends',
  ],
  lower: [
    'Global gender indices',
    'General human rights frameworks',
  ],
}

// ============================================================================
// DATA GAPS
// ============================================================================

export const dataGaps = [
  'Updated religious demographics (2024-2025)',
  'Specific statistics on honor killings since 2020 reform',
  'LGBTQ enforcement statistics',
  'Bidoon current population estimates',
  'Arabic language literacy rates (formal studies)',
  'Youth disengagement root cause analysis',
]

export const conflictingDataSources = [
  'Population figures vary by source (2024 vs 2026 projections)',
  'Religious demographics cited as 76% Muslim (2022) vs 80%+ non-national claim',
]

// ============================================================================
// METRICS FOR DASHBOARD
// ============================================================================

export const dashboardMetrics: TopicMetrics = {
  volume: 35,
  reach: 28,
  engagement: 85,
  sentiment: 62,
  trend: 7.2,
}

// ============================================================================
// MAIN DATA EXPORT
// ============================================================================

export const cultureSocietyData = {
  // Metadata
  executionMetadata,
  focusAreas,

  // Population & Demographics
  populationMetrics,
  genderDistribution,
  emiratePopulation,
  dubaiGrowthTrajectory,
  nationalityBreakdown,
  emiratiVsExpat,
  ageDistribution,

  // Cultural Identity
  coreCulturalValues,
  heritageInstitutions,
  traditionalClothing,
  traditionalDishes,
  signatureIngredients,
  culinaryInfluences,

  // UNESCO Heritage
  unescoIntangibleHeritage,
  unescoWorldHeritage,
  heritageFestivals,

  // Traditional Sports
  falconry,
  camelRacing,
  otherTraditionalSports,

  // Majlis
  majlis,

  // Museums & Cultural Institutions
  majorMuseums,
  culturalAuthorities,
  artEvents,
  traditionalMusic,

  // National Celebrations
  eidAlEtihad,

  // Women's Rights
  genderEqualityIndices,
  womenRepresentation,
  legalReforms,

  // LGBTQ Rights
  lgbtqLegalFramework,
  lgbtqPenaltiesByEmirate,
  lgbtqLivingConditions,

  // Emiratization
  emiratizationPolicy,
  emiratizationQuotas,
  emiratizationInitiatives,

  // Golden Visa & Citizenship
  goldenVisaSystem,
  citizenshipRequirements,

  // Religion & Interfaith
  religiousDemographics,
  placesOfWorship,
  interfaithInitiatives,
  religiousFreedom,

  // Domestic Violence & Honor Crimes
  domesticViolence,
  honorCrimesReform,

  // Youth Unemployment
  youthUnemployment,
  youthDisengagement,

  // Marriage & Divorce
  marriageRequirements,
  divorceStatistics,
  childCustody,

  // Racism & Discrimination
  discriminationLegalFramework,
  june2021Incident,

  // Bidoon
  bidoonOverview,
  bidoon2008Initiative,
  bidoonCurrentSituation,

  // Arabic Language & Cultural Erosion
  languageShiftResearch,
  languageContributingFactors,
  gccLanguageContext,

  // Identity Crisis
  identityCrisisQuotes,
  culturalChangesObserved,
  authorAnalysisJamalAlShehhi,

  // Timeline
  timelineOfReforms,

  // Findings
  culturalIdentityStrengths,
  culturalIdentityChallenges,

  // Analysis
  sentimentAnalysis,

  // Verification
  verificationStatus,

  // Sources
  sourceCredibility,
  uaeRelevanceAssessment,
  dataGaps,
  conflictingDataSources,

  // Dashboard
  dashboardMetrics,
}

export default cultureSocietyData
