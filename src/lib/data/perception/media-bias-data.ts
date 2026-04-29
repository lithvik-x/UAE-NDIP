/**
 * Media Bias Data
 * Comprehensive research data for UAE Media Bias & Agenda Setting
 * Source: 3-6-media-bias-results.md
 */

import type { TopicMetrics, TopicAnalysis } from '../../data-loader/types'

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const executionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 22,
  pagesFetched: 35,
  outputFile: '3-6-media-bias-results.md',
  enrichmentSources: '15+ web fetches from Wikipedia, Freedom House, Al Jazeera, Middle East Eye, Detained in Dubai, and other outlets',
}

// ============================================================================
// MEDIA OUTLET PROFILES
// ============================================================================

export interface MediaOutlet {
  name: string
  overallRating: string
  biasRating: string
  factualReporting: string
  credibility: string
  location: string
  owner: string
  parentCompany?: string
  ultimateBeneficiary?: string
  primarySources: string
  keyConcerns: string[]
  censorshipExamples?: string[]
  coverageTraits?: string[]
}

export const mediaOutlets: MediaOutlet[] = [
  {
    name: 'The National (UAE)',
    overallRating: 'Questionable Source',
    biasRating: 'RIGHT-CENTER (3.3)',
    factualReporting: 'MIXED (6.2)',
    credibility: 'LOW CREDIBILITY',
    location: 'Abu Dhabi, UAE',
    owner: 'International Media Investments (IMI) - acquired 2016',
    parentCompany: 'Abu Dhabi Media Investment Corporation (ADMIC)',
    ultimateBeneficiary: 'Sheikh Mansour bin Zayed Al-Nahyan (half-brother of UAE President)',
    primarySources: 'Emirates News Agency (WAM), official UAE government agency',
    keyConcerns: [
      'Poor sourcing',
      'Promotion of state propaganda',
      'Lack of transparency',
      'Censorship',
    ],
    censorshipExamples: [
      'Did not report Princess Haya divorce proceedings',
    ],
    coverageTraits: [
      'Strong, emotionally loaded language when covering rival countries',
      'Does not criticize ruling families',
      'Provides only positive coverage',
      'Reports selectively when issue doesn\'t resonate with the Ruler',
    ],
  },
  {
    name: 'Gulf News (UAE)',
    overallRating: 'N/A',
    biasRating: 'Government Aligned',
    factualReporting: 'N/A',
    credibility: 'Heavily Regulated',
    location: 'Dubai, UAE',
    owner: 'Al Nisr Publishing (Al Tayer Group)',
    parentCompany: 'Al Tayer Group',
    primarySources: 'WAM (state agency)',
    keyConcerns: [
      'Heavily regulated',
      'Follows government line',
      'Avoids sensitive topics',
    ],
    coverageTraits: [
      'Fully aligned with UAE government position',
    ],
  },
  {
    name: 'Khaleej Times (UAE)',
    overallRating: 'N/A',
    biasRating: 'Government Aligned',
    factualReporting: 'N/A',
    credibility: 'State-Constrained',
    location: 'Dubai, UAE',
    owner: 'Suhail Galadari and Mohammed Galadari (Co-Chairmen)',
    parentCompany: 'Galadari Printing and Publishing',
    primarySources: 'WAM and government sources',
    keyConcerns: [
      'State-imposed constraints on political reporting',
    ],
    coverageTraits: [
      'First English daily newspaper in the UAE',
      'Partnership with UAE government',
    ],
  },
  {
    name: 'Emirates 24/7 (UAE)',
    overallRating: 'N/A',
    biasRating: 'Government Aligned',
    factualReporting: 'N/A',
    credibility: 'Government-Run',
    location: 'Dubai, UAE',
    owner: 'Dubai Media Incorporated (government-run)',
    primarySources: 'Relies heavily on WAM (Emirates News Agency)',
    keyConcerns: [
      'Promotes positive Dubai/UAE images',
    ],
    coverageTraits: [
      'Full alignment with Dubai/UAE government',
    ],
  },
  {
    name: 'Al Arabiya (Saudi Arabia)',
    overallRating: 'N/A',
    biasRating: 'Saudi-Aligned',
    factualReporting: 'N/A',
    credibility: 'MBC Group',
    location: 'Riyadh, Saudi Arabia (relocated from Dubai July 2025)',
    owner: 'MBC Group (54% owned by Saudi PIF since 2025)',
    primarySources: 'Official Saudi sources',
    keyConcerns: [
      'Described as "an arm of Saudi foreign policy"',
      'More Saudi-aligned vs Al Jazeera\'s Qatari position',
    ],
    coverageTraits: [
      '"Balanced and less provocative" alternative to Al Jazeera',
      'Creation purpose: Response to Al Jazeera\'s critical coverage of Saudi royal family in 1990s',
    ],
  },
  {
    name: 'Al Jazeera (Qatar)',
    overallRating: 'Independent',
    biasRating: 'Qatari-Aligned',
    factualReporting: 'Mixed',
    credibility: 'High (blocked in UAE)',
    location: 'Doha, Qatar',
    owner: 'Statutory private foundation for public benefit; primarily Qatari government funded',
    primarySources: 'Multiple independent sources',
    keyConcerns: [
      'Blocked in UAE from June 5, 2017 (Qatar diplomatic crisis)',
      'Block duration: Approximately 6 years before unblocking',
      'Prison term 3-15 years for expressing "sympathy" for Qatar',
    ],
    coverageTraits: [
      'More authentic Arab perspective',
      '"Given people in post-colonial Islamic societies opportunity for self-representation"',
    ],
  },
  {
    name: 'Middle East Eye (UK)',
    overallRating: 'Independent',
    biasRating: 'Critical of Gulf States',
    factualReporting: 'Generally Reliable',
    credibility: 'High',
    location: 'London, UK',
    owner: 'M.E.E. Limited (single director Jamal Bessasso - 75%+ shares/voting rights)',
    primarySources: 'Investigative journalism',
    keyConcerns: [
      'Widely believed Qatari government funding (denied)',
      'Accused by Saudi Arabia, UAE, Egypt, Bahrain of covert Qatari backing',
      'Blocked in UAE since June 2016',
    ],
    coverageTraits: [
      '"Covers the area without fear or favour"',
      'Published reports on UAE role in Yemen war, human rights issues',
    ],
  },
  {
    name: 'WAM - Emirates News Agency (UAE)',
    overallRating: 'Official State Voice',
    biasRating: 'Absolute Government Alignment',
    factualReporting: 'State Record-Keeping',
    credibility: 'Low - Propaganda',
    location: 'Abu Dhabi, UAE',
    owner: 'National Media Authority (NMA) - absorbed 2025',
    primarySources: 'Official UAE government',
    keyConcerns: [
      '"Official national channel supporting the dissemination, distribution, and translation of approved official State news"',
    ],
    coverageTraits: [
      'Director-General: Mohamed Jalal Alrayssi',
      'International offices: Cairo, Beirut, Washington D.C., Sana\'a, Brussels, Islamabad',
      'Language services: Arabic (primary), English, French, Portuguese, Hebrew (launched April 2021)',
    ],
  },
]

// ============================================================================
// REGULATORY FRAMEWORK
// ============================================================================

export const regulatoryFramework = {
  current: {
    name: 'National Media Authority (NMA)',
    established: 'Federal Decree-Law No. (11) of 2025',
    replaced: 'UAE Media Council, previous National Media Authority, Emirates News Agency (WAM)',
    legalStatus: 'Holds legal personality with full financial and administrative independence',
    leadership: 'Abdulla bin Mohammed bin Butti Al Hamed (head)',
    primaryObjective: '"To be the source of information that empowers Abu Dhabi to attain its aspirations"',
    coreResponsibilities: [
      'Proposes UAE\'s strategic media orientations',
      'Coordinates across media entities for unified messaging',
      'Develops policies and legislation',
      'Enhances UAE\'s reputation',
    ],
    contentMonitoring: 'Tracks public opinion trends concerning UAE; takes actions under applicable legislation',
    crisisManagement: 'Develops programs, mechanisms, measures for media crises; early detection of digital media threats, negative content, disinformation',
  },
  dissolved: {
    name: 'National Media Council (2006-2021)',
    established: 'Federal Law No. 1 of 2006',
    dissolved: 2021,
    formerChairman: 'Sultan Ahmed Al Jaber (since May 2015)',
    coreFunction: '"Regulates media in the UAE, which includes restricting and punishing domestic and foreign media outlets for content the government considers objectionable"',
    lawsGoverned: 'Six main laws and resolutions governing media',
  },
}

// ============================================================================
// LEGAL FRAMEWORK FOR MEDIA CONTROL
// ============================================================================

export const legalFramework = {
  laws: [
    {
      name: '2021 Crimes and Penalties Law',
      purpose: 'Basis for blocking accounts and prosecuting "misleading" content',
      application: 'Used against social media posts about Iranian strikes (2026)',
      keyProvision: '"Misleading, fabricated content" criminalized',
      enforcementBody: 'Federal Public Prosecution',
    },
    {
      name: '2021 Anti-Rumours and Cybercrimes Law',
      keyProhibitions: '"Affecting public opinion, harming the reputation of the state"',
      classification: 'Cybercrime and rumors laws',
      application: 'Used to prosecute users posting strike footage',
      decisionReference: 'AGO/2026/0291 (March 31, 2026)',
    },
    {
      name: '2017 Qatar Crisis Law',
      imprisonment: '3-15 years for publishing expressions of sympathy towards Qatar',
      fines: 'Up to 500,000 dirhams',
      application: 'Response to Qatar diplomatic crisis',
      uaeBlocking: 'Al Jazeera blocked June 5, 2017',
    },
    {
      name: '2012 Cybercrime Decree',
      prohibitions: 'Criticism of senior officials; demands for political reform',
      imprisonment: 'Yes',
      fines: 'Up to 1,000,000 dirhams',
      application: 'Social media and blogs',
    },
    {
      name: 'Federal Decree-Law No. 55 of 2023',
      requirement: 'Media activities require licensing including digital media',
      scope: 'Covers all media activities',
    },
  ],
  penaltiesSummary: [
    { violation: 'Spreading rumors/fake news (basic)', imprisonment: '1+ years', fine: 'AED 100,000+' },
    { violation: 'Spreading rumors (aggravated)', imprisonment: 'Up to 2 years', fine: 'AED 200,000' },
    { violation: 'Sympathy for Qatar (2017)', imprisonment: '3-15 years', fine: 'Up to AED 500,000' },
    { violation: 'VPN for "illegal purposes"', imprisonment: '+ imprisonment', fine: 'AED 500,000 - AED 2,000,000' },
    { violation: 'Publishing misleading content (2026)', imprisonment: 'Variable', fine: 'Variable' },
  ],
}

// ============================================================================
// CENSORSHIP MECHANISMS
// ============================================================================

export const censorshipMechanisms = {
  websiteBlocking: [
    { platform: 'TRA Blocked Websites', status: '3,766', details: 'Q4 2022', source: 'TDRA blocking statistics' },
    { platform: 'Al Jazeera', status: 'Blocked 2017-2023', details: 'UAE blocking during Qatar crisis' },
    { platform: 'Middle East Eye', status: 'Blocked since June 2016', details: 'UAE nationwide' },
    { platform: 'The New Arab', status: 'Blocked', details: 'UAE' },
    { platform: 'LGBT+ Sites', status: 'Blocked', details: 'UAE' },
    { platform: 'Human Rights Sites', status: 'Blocked', details: 'UAE' },
    { platform: 'Secret Dubai Blog', status: 'Blocked 2010', details: 'Independent blog blocked by TRA' },
    { platform: 'Change.org Petition', status: 'Blocked', details: 'After 5,000+ signatures opposed VoIP restrictions' },
  ],
  voipBlocking: [
    { service: 'WhatsApp Calls', status: 'Blocked', since: 2015 },
    { service: 'Viber', status: 'Blocked', since: 2013 },
    { service: 'Discord', status: 'Blocked', since: 2016 },
    { service: 'FaceTime', status: 'Blocked', since: 'N/A' },
    { service: 'Skype', status: 'Blocked', since: 'N/A' },
    { service: 'Government-Approved Alternatives', status: 'Permitted only', details: 'C\'ME, BOTIM' },
  ],
  socialMediaGeoblocking: [
    { accountType: 'Journalists', status: 'Blocked within UAE', examples: 'Marc Owen Jones, Gamal Sultan, Osama Gaweesh' },
    { accountType: 'News Outlets', status: 'Blocked within UAE', examples: 'Middle East Eye' },
    { accountType: 'Civil Society', status: 'Blocked', examples: 'Multiple human rights advocates' },
  ],
  contentRemovalRequests: [
    { platform: 'Twitter', requestsReceived: 148, complianceRate: '88.5%' },
    { platform: 'Google', requestsReceived: '18+', complianceRate: 'Multiple' },
    { platform: 'Facebook', requestsReceived: 'Multiple', complianceRate: 'Occasional' },
  ],
  journalismSuppressionCases: [
    { case: 'Swiss Journalists', year: 2017, details: 'Detained 50+ hours covering Louvre Abu Dhabi opening' },
    { case: 'Jordanian Journalist Tayseer Najjar', year: 'N/A', details: '3-year sentence for Facebook posts criticizing regional governments' },
    { case: 'Photojournalists', year: 'March 2026', details: 'Arrested in UAE during Iran strikes' },
    { case: 'Foreign Nationals', year: 2026, details: 'Egyptian, Indian nationals detained for posting strike footage' },
  ],
}

// ============================================================================
// BOT NETWORKS AND COORDINATED MANIPULATION
// ============================================================================

export const botNetworks = {
  twitterRemovals: [
    { date: 'September 2019', accountsRemoved: 4258, purpose: 'UAE spreading propaganda about Yemen war' },
    { date: 'April 2020', accountsRemoved: 9000, purpose: 'Pro-UAE coronavirus propaganda' },
    { date: 'Total', accountsRemoved: '13,258+', purpose: 'Multiple campaigns' },
  ],
  fakeAccountStatistics: [
    { metric: 'MBZ Twitter followers - fake', value: 'Up to 91%', source: 'Freedom House 2023' },
    { metric: 'UAE-aligned bots (RSF Sudan)', value: 19000, source: 'Marc Owen Jones Substack' },
    { metric: 'Coordinated accounts (Qatar)', value: 271, source: 'UAE and Egypt targeting Qatar' },
  ],
  botNetworkOperationStructure: {
    oversight: 'Security officers within interior ministry and intelligence structures',
    accountCharacteristics: 'Lack real names, personal photos, biographies',
    techniques: 'Hashtag manipulation to create false impression of broad public support',
    purpose: 'Create "impression that public opinion inside the UAE strongly supports government policies"',
    amplification: 'Push hashtags into trending artificially',
  },
}

// ============================================================================
// DIS-INFLUENCER ECOSYSTEM
// ============================================================================

export const disInfluencerEcosystem = {
  fakeNewsWebsites2024: [
    { website: 'The Washington Eye', registrationPeriod: 'October 2024', nature: 'News-like' },
    { website: 'Daily Euro Times', registrationPeriod: 'October-November 2024', nature: 'News-like' },
    { website: 'Brieflex', registrationPeriod: 'October-November 2024', nature: 'News-like' },
    { website: 'AfricaLix', registrationPeriod: 'October-November 2024', nature: 'News-like' },
    { website: 'InfoFlix', registrationPeriod: 'October-November 2024', nature: 'News-like' },
  ],
  earlierFakeNewsOperations2023: [
    { website: 'EuroPost Agency', launch: 2023 },
    { website: 'New York Insight', launch: 2023 },
  ],
  characteristics: {
    studioEvidence: 'Members record videos in same studio with identical set dressing',
    distinctiveSet: 'Black-and-silver globe',
    centralNarratives: [
      'Hostility to Muslim Brotherhood',
      'Securitized portrayals of Islam',
      'Alignment with Israeli security framing',
      'UAE as model state',
    ],
    booksPublished: 'Through same publisher within months showing "clear signs of AI generation"',
    amplification: 'Paid through Crestnux Media',
    policyVenueAttendance: 'Council on Foreign Relations, Cambridge, UC San Diego',
    expertSource: 'Marc Owen Jones (author: Digital Authoritarianism in the Middle East)',
  },
}

// ============================================================================
// 2026 IRAN-UAE WAR CASE STUDY
// ============================================================================

export const iranUaeWarCaseStudy = {
  timeline: [
    { date: 'Feb 28, 2026', incident: 'Strikes began following US-Israeli strikes on Iran' },
    { date: 'Feb 28-Mar 1', incident: 'First wave targeted Al Dhafra Air Base; debris killed 1 Pakistani civilian near Zayed International Airport' },
    { date: 'Mar 1', incident: 'Dubai International Airport struck (5 staff injured); Jebel Ali Port fire; AWS data center struck' },
    { date: 'Mar 2', incident: 'UAE defenses tracked 174 ballistic missiles (161 intercepted), 689 drones (645 intercepted); US consulate Dubai hit' },
    { date: 'Mar 7-13', incident: '23 Marina tower hit; Ruwais Industrial Complex (ADNOC refinery, 922,000 bbl/day) attacked; Pakistani killed in Al Barsha' },
    { date: 'Mar 14-20', incident: 'Port of Fujairah drone strike; Dubai Airport fuel tank hit; Palestinian and Pakistani nationals killed' },
    { date: 'Mar 21-27', incident: 'Indian and Pakistani killed; Jordanian and Indian injured by shrapnel in Abu Dhabi' },
    { date: 'Mar 28-Apr 3', incident: 'Oracle data center targeted (April 2); Egyptian national killed at Habshan; Bangladeshi killed in Fujairah' },
    { date: 'Apr 4-8', incident: 'Burj Al Arab damaged; Borouge petrochemicals fires; Oracle targeted again; Ghanaian injured' },
    { date: 'Apr 8, 2026', incident: 'Ceasefire announced (attacks continued post-ceasefire)' },
  ],
  casualties: {
    totalKilled: 13,
    breakdown: [
      { category: 'Emirati Military', count: 2 },
      { category: 'Moroccan Contractor', count: 1 },
      { category: 'Foreign Civilians', count: 10 },
    ],
    totalInjured: 224,
    nationalitiesAffected: 31,
    killedByNationality: [
      { nationality: 'Pakistan', count: 4 },
      { nationality: 'Bangladesh', count: 2 },
      { nationality: 'UAE', count: 2 },
      { nationality: 'Egypt', count: 1 },
      { nationality: 'India', count: 1 },
      { nationality: 'Morocco', count: 1 },
      { nationality: 'Nepal', count: 1 },
      { nationality: 'Palestine', count: 1 },
    ],
  },
  defenseInterceptionStats: [
    { date: 'As of Apr 9', ballisticMissiles: 537, drones: 2256, cruiseMissiles: 26 },
    { date: 'As of Apr 1', ballisticMissilesFired: 438, ballisticMissilesIntercepted: 161, dronesFired: 2012, dronesIntercepted: 645, cruiseMissilesFired: 19 },
  ],
  criticalInfrastructureHit: [
    { facility: 'Al Dhafra Air Base (US base)', date: 'Feb 28', impact: 'First wave struck' },
    { facility: 'Al Minhad Air Base (UAE/RF/Australian)', date: 'Ongoing', impact: 'Targeted' },
    { facility: 'Camp de la Paix (French base)', date: 'Ongoing', impact: 'Targeted' },
    { facility: 'Dubai International Airport', date: 'Multiple strikes', impact: 'Suspended operations' },
    { facility: 'Jebel Ali Port', date: 'Mar 1', impact: 'Fire' },
    { facility: 'Ruwais Refinery (ADNOC)', date: 'Mar 7-13', impact: 'Shutdown' },
    { facility: 'Habshan Gas Fields', date: 'Multiple', impact: 'Targeted multiple times' },
    { facility: 'Fujairah Port and Oil Industry Zone', date: 'Mar 14-20', impact: 'Suspended operations' },
    { facility: 'Emirates Global Aluminium Al Taweelah', date: 'Mar 7-13', impact: 'Significant damage; 6 injured; 1-year repairs' },
    { facility: 'Borouge Petrochemicals', date: 'Apr 4-8', impact: 'Multiple fires' },
    { facility: 'Oracle Data Center (Dubai)', date: 'Apr 2, Apr 7-8', impact: 'Targeted twice' },
  ],
  iconicBuildingsDamaged: [
    { building: 'Burj Al Arab', date: 'Apr 4-8', damage: 'Lower floors damaged by interception debris' },
    { building: '23 Marina Tower', date: 'Mar 7-13', damage: 'Hit by Iranian projectile' },
    { building: 'Fairmont The Palm Hotel', date: 'Ongoing', damage: 'Damaged' },
    { building: 'Dubai Creek Harbour Tower', date: 'Ongoing', damage: 'Damaged' },
    { building: 'DIFC Innovation Hub', date: 'Ongoing', damage: 'Damaged' },
  ],
  officialNarrativeVsReality: [
    { location: 'Fujairah Port', officialClaim: 'Fire from debris of successful interception', observedReality: 'Drone approaching intact with no interception visible; NASA FIRMS detected fires March 3-5; 3 storage tanks destroyed', source: 'Bellingcat investigation' },
    { location: 'Jebel Ali Port', officialClaim: 'Fire from debris of aerial interception', observedReality: 'Fires at two locations 3km apart including military area', source: 'Bellingcat satellite imagery' },
    { location: 'Burj Al Arab', officialClaim: '"Limited" fire from "shrapnel" of intercepted drone', observedReality: 'Fire extending ~30 metres, covering 8 floors', source: 'Bellingcat footage' },
    { location: 'Dubai Airport', officialClaim: 'Temporary suspension citing safety protocols only', observedReality: 'Drone strike next to terminal', source: 'Bellingcat verified footage' },
    { location: 'Warda Complex', officialClaim: 'Air defence activity described', observedReality: 'Drone directly hit 19th floor with no visible interception', source: 'Bellingcat videos' },
  ],
  economicImpact: [
    { metric: 'Oil Production Drop', value: '500,000-800,000 barrels per day' },
    { metric: 'Private Jet Fleeing Cost', value: '$250,000 (March 3)' },
    { metric: 'Hotels', value: 'Dubai hotels slashed prices as bookings cancelled' },
    { metric: 'ADNOC Ruwais Refinery', value: 'Shutdown' },
    { metric: 'Educational Institutions', value: 'Shifted to remote learning' },
  ],
  mediaCrackdown: [
    { metric: 'Arrested in Dubai', value: '21 for filming/sharing attack content' },
    { metric: 'Arrested in Abu Dhabi', value: '45 for similar violations' },
    { metric: 'Total Detained (early April)', value: '375+ by Abu Dhabi Police' },
    { metric: 'VPN Downloads (2025)', value: '9.6 million VPN apps in UAE' },
    { metric: 'VPN Adoption Rate', value: '85.5% (world\'s highest)' },
    { metric: 'Fine for Illegal VPN', value: 'AED 500,000 to AED 2 million + imprisonment' },
  ],
}

// ============================================================================
// SUPPRESSION CASE STUDIES
// ============================================================================

export const suppressionCaseStudies = {
  uae94TrialBlackout: {
    defendants: 94,
    convicted: 69,
    convictionDate: 'July 2, 2013',
    sentences: 'Up to 15 years; most received 10-year sentences',
    mediaAccess: 'UAE media allowed to attend hearings',
    internationalAccess: 'International media denied; International observers denied',
    unFinding: 'UN Working Group on Arbitrary Detention determined all defendants were arbitrarily detained',
    violations: [
      'Incommunicado detention up to a year',
      'Torture to extract confessions',
      'Families subjected to reprisals',
      'Citizenship revoked',
    ],
  },
  alJazeeraBlockade: {
    blockStart: 'May 25, 2017',
    uaeBlockDate: 'June 5, 2017',
    countriesBlocking: 'Saudi Arabia, UAE, Bahrain, Egypt',
    prisonForSympathy: 'Up to 15 years announced June 7, 2017',
    hotelBlockOrder: 'June 9, 2017 - Saudi Arabia ordered hotels to block Al Jazeera channels',
    hotelFineThreat: 'Up to $26,000',
    blockDuration: 'Approximately 6 years',
    unblockDate: 'After 6-year period',
  },
}

// ============================================================================
// INTERNATIONAL SOURCE COMPARISONS
// ============================================================================

export const sourceComparisons = {
  alJazeeraVsGulfNews: [
    { aspect: 'Editorial Line', alJazeera: 'More authentic Arab perspective', gulfNews: 'Aligned with UAE government' },
    { aspect: 'Audience Role', alJazeera: '"Given people in post-colonial Islamic societies opportunity for self-representation"', gulfNews: 'Government-aligned coverage' },
    { aspect: 'Characterization', alJazeera: '"Phenomenal" emergence; "Arab world regained confidence"', gulfNews: 'Follows government line' },
    { aspect: 'Source', alJazeera: 'Multiple independent sources', gulfNews: 'WAM (state agency)' },
    { aspect: 'Block Status', alJazeera: 'Blocked in UAE 2017-2023', gulfNews: 'Available in UAE' },
  ],
  bbcVsWam: [
    { aspect: 'UAE Availability', bbc: 'Expanded FM broadcast 2019 (87.9 MHz Dubai)', wam: 'Official state voice' },
    { aspect: 'Purpose in UAE', bbc: '"International perspective"', wam: '"Official national channel"' },
    { aspect: 'UAE Coverage', bbc: 'Available', wam: 'Government-controlled' },
    { aspect: 'Investigation Role', bbc: 'BBC uncovered pro-UAE propaganda network in Africa', wam: 'Serves as government mouthpieces' },
    { aspect: 'Editorial Independence', bbc: 'Independent', wam: 'Under NMA since 2025' },
  ],
}

// ============================================================================
// INTERNATIONAL RANKINGS
// ============================================================================

export const internationalRankings = {
  rsfPressFreedomIndex: [
    { year: 2024, uaeRanking: '164th', totalCountries: 180 },
  ],
  rsfAssessment: '"The government prevents both local and foreign independent media outlets from thriving by tracking down and persecuting dissenting voices"',
  freedomHouseFreedomOnTheNet: [
    { year: 2023, score: '30/100', status: 'Not Free' },
    { year: 2022, score: '28/100', status: 'Not Free' },
  ],
  internetStats2023: [
    { metric: 'Internet Penetration', value: '99% (9.38 million users)' },
    { metric: 'Mobile Penetration', value: '200.9%' },
    { metric: '5G Coverage', value: '94%' },
    { metric: 'Broadband Cost', value: '$111.21/month' },
  ],
  freedomHouseKeyFindings: [
    '"Online censorship is rampant"',
    '"Government surveillance of online activists and journalists is pervasive"',
    '"Automated social media accounts manipulated online narrative"',
    '"UAE among most sophisticated countries for \'high cyber troops capacity\'"',
  ],
}

// ============================================================================
// KEY STATISTICS SUMMARY
// ============================================================================

export const keyStatistics = [
  { category: 'Press Freedom', metric: 'RSF Ranking', value: '164th of 180' },
  { category: 'Internet Freedom', metric: 'Freedom House Score', value: '30/100 (Not Free)' },
  { category: 'Website Blocking', metric: 'TRA Blocked (Q4 2022)', value: '3,766' },
  { category: 'Twitter Manipulation', metric: 'Accounts Removed (UAE, 2019)', value: '4,258' },
  { category: 'Bot Activity', metric: 'MBZ Twitter followers - fake', value: 'Up to 91%' },
  { category: 'VPN Usage', metric: 'Adoption Rate', value: '85.5% (world\'s highest)' },
  { category: 'VPN Downloads', metric: '2025 Downloads', value: '9.6 million' },
  { category: 'Conflict Arrests', metric: 'Strike Footage Arrests (2026)', value: '375+' },
  { category: 'Prison Terms', metric: 'UAE-94 Dissidents', value: 'Up to 15 years' },
  { category: 'Prison Terms', metric: 'Qatar Sympathy', value: '3-15 years' },
  { category: 'WAM Offices', metric: 'International', value: '6' },
  { category: 'Al Jazeera Block', metric: 'Duration', value: '~6 years' },
  { category: 'Internet Users', metric: 'UAE (2023)', value: '9.38 million' },
  { category: 'Mobile Penetration', metric: 'UAE (2023)', value: '200.9%' },
  { category: '5G Coverage', metric: 'UAE (2023)', value: '94%' },
  { category: 'Oil Impact', metric: 'Production Drop', value: '500,000-800,000 bbl/day' },
  { category: 'Twitter Compliance', metric: 'Removal Request Rate', value: '88.5%' },
  { category: '2026 Casualties', metric: 'Killed', value: '13' },
  { category: '2026 Casualties', metric: 'Injured', value: '224' },
  { category: '2026 Casualties', metric: 'Nationalities Affected', value: '31' },
  { category: 'Missile Interceptions', metric: 'As of Apr 9', value: '537' },
  { category: 'Drone Interceptions', metric: 'As of Apr 9', value: '2,256' },
]

// ============================================================================
// SENTIMENT ANALYSIS
// ============================================================================

export const sentimentAnalysis = {
  byTopic: [
    { topic: 'UAE Government Media', sentiment: 'Negative', notes: 'Suppression, propaganda, censorship documented' },
    { topic: 'State Media Outlets', sentiment: 'Negative', notes: 'Low credibility, government alignment, selective reporting' },
    { topic: 'Independent Media', sentiment: 'Negative', notes: 'Blocked, suppressed, journalists detained' },
    { topic: 'International Coverage', sentiment: 'Mixed', notes: 'BBC investigation positive; Western outlets often blocked' },
    { topic: 'Human Rights Organizations', sentiment: 'Negative', notes: 'Document systematic violations' },
    { topic: 'Social Media Users', sentiment: 'Negative', notes: 'Arrested, prosecuted, surveilled' },
  ],
  bySourceType: [
    { sourceType: 'UAE Government/State Media', overallSentiment: 'Highly Positive (official)', credibility: 'Low - state propaganda' },
    { sourceType: 'Independent NGOs (HRW, Amnesty, RSF)', overallSentiment: 'Negative (documenting violations)', credibility: 'High' },
    { sourceType: 'International Media', overallSentiment: 'Mixed to Negative', credibility: 'High' },
    { sourceType: 'Academic Research', overallSentiment: 'Negative (documenting bias)', credibility: 'High' },
    { sourceType: 'Social Media Evidence', overallSentiment: 'Negative (documenting suppression)', credibility: 'High' },
    { sourceType: 'Bellingcat/Investigative', overallSentiment: 'Negative (documenting discrepancies)', credibility: 'High' },
  ],
}

// ============================================================================
// KEY SUPPRESSED TOPICS
// ============================================================================

export const suppressedTopics = [
  'Extent of damage from Iranian strikes (contradicted by official claims)',
  'UAE involvement in Sudan conflict (RSF support)',
  'Treatment of dissidents (UAE-94 case)',
  'Muslim Brotherhood narrative (central to dis-influencer messaging)',
  'Foreign worker conditions and rights',
  'Criticism of ruling families',
  'Al Jazeera and Qatari perspectives',
  'Human rights organization findings',
  'Academic analysis of UAE media bias',
]

// ============================================================================
// ENRICHMENT SOURCES
// ============================================================================

export const enrichmentSources = [
  { source: 'Wikipedia - Emirates News Agency', url: 'en.wikipedia.org/wiki/Emirates_News_Agency', data: 'WAM founding, leadership, offices, languages, memberships' },
  { source: 'Wikipedia - 2026 Iranian Strikes', url: 'en.wikipedia.org/wiki/2026_Iranian_strikes_on_the_United_Arab_Emirates', data: 'Full timeline, casualties, infrastructure hits, defense data' },
  { source: 'Freedom House 2023 UAE', url: 'freedomhouse.org', data: 'Internet freedom score, censorship details, bot statistics' },
  { source: 'Wikipedia - Media in UAE', url: 'en.wikipedia.org/wiki/Media_in_the_United_Arab_Emirates', data: 'Media landscape, outlets, government control' },
  { source: 'Wikipedia - Al Jazeera', url: 'en.wikipedia.org/wiki/Al_Jazeera', data: 'Founding, ownership, UAE blocking history' },
  { source: 'Wikipedia - Al Arabiya', url: 'en.wikipedia.org/wiki/Al_Arabiya', data: 'Saudi ownership, editorial position, MBC Group' },
  { source: 'Wikipedia - Gulf News', url: 'en.wikipedia.org/wiki/Gulf_News', data: 'Ownership, format, editorial leadership' },
  { source: 'Wikipedia - Khaleej Times', url: 'en.wikipedia.org/wiki/Khaleej_Times', data: 'Ownership, founding, government partnership' },
  { source: 'Wikipedia - Emirates 24/7', url: 'en.wikipedia.org/wiki/Emirates_24/7', data: 'Dubai Media Inc, government alignment' },
  { source: 'Wikipedia - Middle East Eye', url: 'en.wikipedia.org/wiki/Middle_East_Eye', data: 'Ownership, funding, UAE blocking' },
  { source: 'Wikipedia - Detained in Dubai', url: 'en.wikipedia.org/wiki/Detained_in_Dubai', data: 'Radha Stirling, organization cases, advocacy' },
  { source: 'Middle East Eye', url: 'www.middleeasteye.net', data: 'Dis-influencer ecosystem details' },
  { source: 'UAE Government Sources', url: 'Various', data: 'Strategic silence policy, regulatory framework' },
  { source: 'Bellingcat Investigation', url: 'www.bellingcat.com', data: 'Official vs observed reality comparison' },
  { source: 'Amnesty International', url: 'www.amnesty.org', data: 'UAE-94 case documentation' },
]

// ============================================================================
// SYNTHESIZED FINDINGS
// ============================================================================

export const synthesizedFindings = [
  {
    finding: 'Media Ownership and Government Control',
    description: 'The UAE operates a "loyalist press" model where most media outlets align with government perspectives',
    details: [
      'The National: Owned by IMI, subsidiary of ADMIC, owned by Sheikh Mansour bin Zayed Al-Nahyan',
      'Gulf News: Al Nisr Publishing (Al Tayer Group) - heavily regulated',
      'Khaleej Times: Galadari Printing and Publishing with UAE government involvement',
      'Emirates 24/7: Dubai Media Incorporated (government-run)',
      'All outlets rely heavily on WAM (official state news agency) as primary source',
    ],
  },
  {
    finding: 'Regulatory Architecture',
    description: 'The UAE media regulatory framework has evolved significantly',
    details: [
      'National Media Council (2006-2021): Federal media regulator',
      'National Media Authority (established 2025): New federal authority replacing UAE Media Council, previous NMA, and WAM',
      'UAE Government Media Office: Manages federal social media channels',
      'Dubai Media Office: Strategic communications for Dubai government',
      'Abu Dhabi Media Office: Communications for Abu Dhabi government',
    ],
  },
  {
    finding: 'Legal Framework for Media Control',
    description: 'Key laws enabling government control',
    details: [
      '2021 Crimes and Penalties Law: Basis for blocking accounts and prosecuting "misleading" content',
      '2021 Anti-Rumours and Cybercrimes Law: Criminalizes "affecting public opinion"',
      'Federal Decree-Law No. 55 of 2023: Requires licensing for media activities including digital media',
      'Penalties: Up to 15 years imprisonment for "sympathy" with Qatar',
    ],
  },
  {
    finding: 'Censorship Mechanisms',
    description: 'Multiple censorship tools employed',
    details: [
      'Website blocking: TRA blocked 3,766 websites (Q4 2022)',
      'VoIP blocking: WhatsApp calls blocked since 2015, Viber since 2013',
      'Account geoblocking: On X/Twitter, hundreds of accounts blocked within UAE',
      'Content removal requests: Twitter received 148 requests (88.5% compliance)',
    ],
  },
  {
    finding: 'Bot Networks and Coordinated Manipulation',
    description: 'Extensive use of automated accounts confirmed',
    details: [
      'Up to 91% of Twitter accounts sharing posts by MBZ are fake',
      'September 2019: Twitter removed 4,258 UAE-linked accounts',
      'April 2020: Twitter removed 9,000 pro-UAE accounts',
      'Bot armies overseen by security officers within interior ministry',
      'Hashtag manipulation to create false impression of public support',
    ],
  },
  {
    finding: 'Dis-Influencer Ecosystem',
    description: 'Sophisticated pseudo-media ecosystem emerged',
    details: [
      'Five news-like websites registered Oct-Nov 2024',
      'Members record in same studios with identical set dressing',
      'Central narrative: hostility to Muslim Brotherhood, alignment with Israeli security framing',
      'Books published showing "clear signs of AI generation"',
      'Members attended Western policy venues (Council on Foreign Relations, Cambridge, UC San Diego)',
    ],
  },
  {
    finding: 'Strategic Silence as Official Policy',
    description: 'The UAE officially articulates "strategic silence" as a media policy',
    details: [
      '"The UAE does not govern or respond based on online pressure, viral trends, or fleeting narratives"',
      '"Silence, in many cases, is strength"',
      '"Silence is not weakness. It is choosing not to engage in trivial debates"',
      'Philosophy: "Moral elevation - not silence - is the chosen path"',
    ],
  },
  {
    finding: 'Influencer Control',
    description: 'Dubai influencers are tightly controlled',
    details: [
      'Government permits required to legally operate',
      'Annual "1 Billion Followers Summit" organized by UAE Government Media Office',
      'During Iran strikes 2026: influencers ordered not to mention war',
      'Near-identical pro-government videos posted within seconds of each other during attacks',
    ],
  },
  {
    finding: '2026 Iran War Media Blackout',
    description: 'Active censorship demonstrated during conflict',
    details: [
      'What was suppressed: footage of damage at Fujairah port, Jebel Ali Port, Burj Al Arab, Dubai Airport, Warda Complex',
      'What was promoted: claims of successful interceptions, "limited" damage, "safe" environment',
      'Enforcement: 375+ detained for filming/sharing; penalties up to AED 200,000',
      'Effectiveness: "Only partially effective" - some footage leaked via Telegram',
    ],
  },
  {
    finding: 'International Recognition',
    description: 'UAE media issues recognized internationally',
    details: [
      'RSF Ranking: UAE ranked 164th out of 180 in Press Freedom Index',
      'Freedom House: UAE rated "Not Free" for internet freedom (30/100 in 2023)',
      'HRW: Documented severe restrictions on expression',
      'Amnesty International: Documented UAE-94 as "nearly a decade of unjust imprisonment"',
    ],
  },
]

// ============================================================================
// DASHBOARD METRICS
// ============================================================================

export const dashboardMetrics = {
  volume: 22,
  reach: 35,
  engagement: 78,
  sentiment: {
    positive: 15,
    negative: 65,
    neutral: 20,
    overall: 35,
    volume: 22,
  },
  trend: {
    direction: 'declining' as const,
    changePercent: -4.2,
  },
}

// ============================================================================
// MAIN DATA EXPORT
// ============================================================================

export const mediaBiasData = {
  // Metadata
  executionMetadata,

  // Media Outlets
  mediaOutlets,

  // Regulatory
  regulatoryFramework,

  // Legal
  legalFramework,

  // Censorship
  censorshipMechanisms,

  // Bot Networks
  botNetworks,

  // Dis-influencer
  disInfluencerEcosystem,

  // Case Study
  iranUaeWarCaseStudy,

  // Suppression Cases
  suppressionCaseStudies,

  // Source Comparisons
  sourceComparisons,

  // Rankings
  internationalRankings,

  // Statistics
  keyStatistics,

  // Sentiment
  sentimentAnalysis,

  // Suppressed Topics
  suppressedTopics,

  // Enrichment
  enrichmentSources,

  // Findings
  synthesizedFindings,

  // Dashboard
  dashboardMetrics,
}

export default mediaBiasData
