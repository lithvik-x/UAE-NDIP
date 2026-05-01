/**
 * Media & Communications Topic Data - Comprehensive Dashboard
 * UAE National Digital Intelligence Platform
 *
 * Comprehensive data extracted from 2-7-media-communications-results.md
 * All content from the MD file has been structured as TypeScript data
 */

// ============================================================================
// EXECUTIVE METADATA
// ============================================================================

export const executionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 26,
  pagesFetched: 18,
  outputFile: '2-7-media-communications-results.md',
  enrichmentDate: '2026-04-27',
  enrichmentSources: '45+ URLs fetched and analyzed',
}

// ============================================================================
// TABLE OF CONTENTS MAPPING
// ============================================================================

export const tableOfContents = [
  { section: 1, title: 'Executive Summary', anchor: 'executive-summary' },
  { section: 2, title: 'UAE Media Regulatory Framework', anchor: 'media-regulatory-framework' },
  { section: 3, title: 'Press Freedom & Censorship', anchor: 'press-freedom-censorship' },
  { section: 4, title: 'Influencer & Social Media Licensing', anchor: 'influencer-social-media-licensing' },
  { section: 5, title: 'Content Violations & Penalties', anchor: 'content-violations-penalties' },
  { section: 6, title: 'VPN & Internet Restrictions', anchor: 'vpn-internet-restrictions' },
  { section: 7, title: 'Media Market & Advertising', anchor: 'media-market-advertising' },
  { section: 8, title: 'Foreign Media Investment', anchor: 'foreign-media-investment' },
  { section: 9, title: 'Journalist Cases & Detentions', anchor: 'journalist-cases-detentions' },
  { section: 10, title: 'Al Jazeera & Media Blocking', anchor: 'al-jazeera-media-blocking' },
  { section: 11, title: 'GPS Jamming & Satellite Issues', anchor: 'gps-jamming-satellite' },
  { section: 12, title: 'OTT/Streaming Regulation', anchor: 'ott-streaming-regulation' },
  { section: 13, title: 'Gaming & Digital Safety', anchor: 'gaming-digital-safety' },
  { section: 14, title: 'Media Training & Education', anchor: 'media-training-education' },
  { section: 15, title: 'Journalist Salaries & Employment', anchor: 'journalist-salaries-employment' },
  { section: 16, title: 'Media Diversity & Pluralism', anchor: 'media-diversity-pluralism' },
  { section: 17, title: 'Key Data Summary Tables', anchor: 'key-data-summary-tables' },
  { section: 18, title: 'URL Source Index', anchor: 'url-source-index' },
  { section: 19, title: 'Sentiment Analysis', anchor: 'sentiment-analysis' },
  { section: 20, title: 'UAE Relevance Assessment', anchor: 'uae-relevance-assessment' },
]

// ============================================================================
// SECTION 1: EXECUTIVE SUMMARY
// ============================================================================

export const executiveSummary = {
  overview: 'The UAE operates one of the most tightly controlled media environments in the world, governed by comprehensive federal legislation with severe penalties for violations. The media sector is characterized by government ownership concentration, strict content controls, extensive internet filtering, mandatory influencer licensing, and active pursuit of foreign media investments.',
}

export const keyMetricsAtGlance = [
  { metric: 'Press Freedom Index (RSF 2025)', value: '26.91/100 (164th of 180)', trend: 'Declining 5+ years' },
  { metric: 'Internet Freedom Score', value: '28/100 "Not Free"', trend: 'Static' },
  { metric: 'Advertising Market 2025', value: 'USD 3.6 billion', trend: 'Growing 5.36% CAGR' },
  { metric: 'Digital Media Market 2030', value: 'USD 18.5 billion', trend: 'Growing 12.2% CAGR' },
  { metric: 'VPN Apps Downloaded 2025', value: '9.6 million', trend: 'Steady increase' },
  { metric: 'Websites Blocked', value: '160,000+', trend: 'Expanding' },
  { metric: 'Influencer License Deadline', value: 'January 31, 2026', trend: 'Imminent' },
]

// ============================================================================
// SECTION 2: UAE MEDIA REGULATORY FRAMEWORK
// ============================================================================

export const primaryLegislation = [
  {
    id: 'law-55-2023',
    name: 'Federal Decree-Law No. 55 of 2023 on Media Regulation',
    effectiveDate: '2023 (Executive Regulations 2024)',
    significance: 'Most significant overhaul of UAE media legislation in over 40 years',
    scope: 'All media activities including print, broadcast, digital, social media',
    administeredBy: 'National Media Authority (NMA), established December 2025',
    mediaActivities: [
      'Radio and television broadcasting',
      'Cinema movies and creative productions',
      'Newspapers and publications',
      'Digital and electronic media activities',
      'Imaging activities',
      'Book fairs',
      'Social media content creation',
    ],
  },
  {
    id: 'law-34-2021',
    name: 'Federal Decree-Law No. 34 of 2021 on Combatting Rumours and Cybercrimes',
    effectiveDate: 'January 2, 2022',
    keyProvisions: 'Criminalizes posting "fake news and rumors" online',
    penalties: 'Imprisonment and fines AED 500,000 to AED 2,000,000',
  },
]

export const cabinetDecisions2025 = [
  {
    number: 'Cabinet Resolution No. 41 of 2025',
    name: 'Media Services Fees',
    details: 'Clarifies over 100 license and permit fees. Does not apply to free zone entities.',
  },
  {
    number: 'Cabinet Resolution No. 42 of 2025',
    name: 'Violations and Administrative Penalties',
    effectiveDate: 'May 29, 2025',
    appliesTo: 'Onshore AND free zone entities',
    details: 'Establishes Media Content Standards Violations Committee (3-7 members). Grievance window: 15 days; decisions within 15 days.',
  },
]

export const nmaInfo = {
  established: 'December 2025 by Federal Decree-Law No. 11 of 2025',
  consolidatedFrom: [
    'UAE Media Council',
    'National Media Authority (previous)',
    'Emirates News Agency (WAM)',
  ],
  coreCompetencies: [
    'Propose UAE\'s strategic media orientations and public media messages',
    'Develop policies, legislation, and strategies for regulating media sector',
    'Regulate and license media outlets and activities including digital media',
    'Monitor all printed, published, and broadcast media content',
    'Manage media crises and detect digital media threats',
    'Register and accredit journalists and foreign media correspondents',
    'Train and qualify national media professionals',
    'Conduct specialized media research',
  ],
}

export const contentStandards = [
  { id: 'cs-1', requirement: 'Respect divine and Islamic beliefs and all religions' },
  { id: 'cs-2', requirement: 'Respect UAE sovereignty, symbols, and institutions' },
  { id: 'cs-3', requirement: 'Avoid actions hurting UAE\'s foreign relations' },
  { id: 'cs-4', requirement: 'Respect culture, national identity, and values' },
  { id: 'cs-5', requirement: 'Refrain from disseminating information compromising national unity' },
  { id: 'cs-6', requirement: 'Refrain from inciting violence' },
  { id: 'cs-7', requirement: 'Respect privacy' },
  { id: 'cs-8', requirement: 'Refrain from publishing rumors, false news, or content instigating crimes' },
]

export const mediaFreeZones = [
  { emirate: 'Dubai', benefits: ['100% foreign ownership permitted', 'Tax-free environment', 'No customs duties'] },
  { emirate: 'Abu Dhabi', benefits: ['100% foreign ownership permitted', 'Tax-free environment', 'No customs duties'] },
  { emirate: 'Fujairah', benefits: ['100% foreign ownership permitted', 'Tax-free environment', 'No customs duties'] },
  { emirate: 'Ras al-Khaimah', benefits: ['100% foreign ownership permitted', 'Tax-free environment', 'No customs duties'] },
]

export const foreignOwnership = {
  policy: '100% foreign ownership permitted in UAE onshore companies (except oil, gas, utilities)',
  appliedTo: 'News agencies including WAM (as of November 2020)',
  additional: 'Single-shareholder entities permitted',
}

// ============================================================================
// SECTION 3: PRESS FREEDOM & CENSORSHIP
// ============================================================================

export const pressFreedomIndex = [
  { year: 2025, score: 26.91, rank: 164, totalCountries: 180, trend: 'Down 12.1% from 2024' },
  { year: 2024, score: 30.62, rank: 158, totalCountries: 180, trend: 'Continuing decline' },
  { year: 2023, score: 0, rank: 156, totalCountries: 180, trend: 'Down' },
  { year: 2022, score: 0, rank: 155, totalCountries: 180, trend: 'Down' },
  { year: 2021, score: 0, rank: 153, totalCountries: 180, trend: 'Down' },
]

export const rsfAssessment2025 = {
  text: 'Government prevents both local and foreign independent media outlets from thriving. Tracking down and persecuting dissenting voices. Most Emirati media owned by press groups with ties to government. Classified among "worst countries for press freedom".',
  source: 'RSF 2025',
}

export const freedomHouseAssessment = {
  internetFreedomScore: 28,
  classification: '"Not Free"',
  previousYearScore: 27,
  text: 'Widespread self-censorship due to legal risks, high surveillance, advanced censorship systems. Online environment lacks diversity with most media state-owned or controlled.',
  source: 'Freedom House 2022',
}

export const mediaMilestones = [
  { year: '1966', event: 'Abu Dhabi Radio - first broadcast station' },
  { year: '1969', event: 'Al-Ittihad - first newspaper (government-owned)' },
  { year: '1969', event: 'Abu Dhabi Television - first TV channel' },
  { year: '1970', event: 'Al Khaleej - first Arabic daily newspaper' },
  { year: '1978', event: 'Khaleej Times - first English daily' },
  { year: '1979', event: '"What\'s On" magazine launched by Motivate Publishing' },
  { year: '1980', event: 'Press and Publications Law enacted' },
  { year: '1995', event: 'Public internet access introduced' },
  { year: '2002', event: 'First media-free zone established in Dubai' },
  { year: '2003', event: 'TRA formed for internet content filtering' },
  { year: '2017', event: 'Al Jazeera blocked (following Qatar diplomatic crisis)' },
  { year: '2020', event: 'New Media Academy launched' },
  { year: '2022', event: 'UAE Media Council established' },
  { year: '2023', event: 'Federal Decree-Law No. 55/2023 enacted' },
  { year: '2025', event: 'NMA consolidated (December)' },
]

export const majorMediaOutlets = [
  { name: 'Al-Ittihad', type: 'newspaper', ownership: 'Government-owned' },
  { name: 'Abu Dhabi TV', type: 'television', ownership: 'Government-owned' },
  { name: 'Emarat FM', type: 'radio', ownership: 'Government-owned' },
  { name: 'Al Bayan', type: 'newspaper', circulation: '105,000', ownership: 'Government-owned' },
  { name: 'Al Khaleej', type: 'newspaper', ownership: 'Privately owned (with government ties)' },
  { name: 'Gulf News', type: 'newspaper', circulation: '104,000', ownership: 'Privately owned (with government ties)' },
  { name: 'Khaleej Times', type: 'newspaper', circulation: '90,000', ownership: 'Privately owned (with government ties)' },
  { name: 'The National', type: 'newspaper', circulation: '80,000-90,000', ownership: 'Privately owned (with government ties)' },
]

export const umbrellaGroups = [
  'Dubai Media Incorporated',
  'Abu Dhabi Media Incorporated',
  'Sharjah Media Corporation',
]

export const broadcastNetworks = [
  'MBC Group',
  'Orbit Showtime Network',
  'Arab Media Group',
]

export const governmentStatementMedia = {
  speaker: 'Information Minister Sheikh Abdallah Bin Zayed Al Nahyan',
  quote: 'It is difficult to speak about local press freedom while the media machine is not run by local journalists.',
}

// ============================================================================
// SECTION 4: INFLUENCER & SOCIAL MEDIA LICENSING
// ============================================================================

export const influencerDeadline = {
  deadline: 'January 31, 2026',
  type: 'Mandatory',
}

export const twoLicenseSystem = [
  {
    license: 'License 1: Trade License (Business Operations)',
    cost: 'AED 5,000-15,000 annually',
    purpose: 'Legal business operation, visa sponsorship, contracts, bank accounts',
    issuingBody: 'Department of Economic Development (DED)',
  },
  {
    license: 'License 2: E-Media License / Advertiser Permit (Mu\'lin)',
    cost: 'Free for first 3 years; AED 1,000/year thereafter',
    visitorPermit: 'AED 500 for 3 months (foreign influencers, renewable once)',
    application: 'Via NMA online portal',
    covers: 'All social media accounts under one permit',
  },
]

export const influencerEligibilityRequirements = [
  'Minimum age: 25 years (increased from 21 under 2025 rules)',
  'Must hold valid UAE residence visa',
  'Must have good conduct certificate (cleared by police)',
  'No felony/dishonesty convictions (unless rehabilitated)',
  'No previously canceled permits',
  'No outstanding financial obligations to authority',
  'Must complete authority\'s training program',
]

export const influencerApplicationProcess = [
  'Log in via NMA electronic services system',
  'Select required service',
  'Complete data and upload documents (Digital ID, Passport, Personal photo, Commercial license)',
  'Submit application',
  'Review status (approval/rejection)',
  'Pay fees upon approval',
  'Display permit number on social media profiles',
]

export const influencerProcessingTime = '3 working days'

export const contentCreatorObligations = [
  'Clearly label sponsored content with #ad or #sponsored',
  'Only use permit-linked accounts for advertising',
  'Prohibit lending accounts to others for advertising',
  'Additional approvals required for: health, finance, real estate, education sectors',
]

export const new2026Restrictions = [
  'Non-Emirati content creators banned from wearing national dress',
  'Non-Emirati content creators banned from using Emirati dialect',
]

export const influencerExemptions = [
  'Non-commercial personal content',
  'Age-appropriate educational, sports, cultural, or awareness content for individuals under 18',
]

// ============================================================================
// SECTION 5: CONTENT VIOLATIONS & PENALTIES
// ============================================================================

export const violationCategories = [
  { severity: 'Fourth Degree (Most Severe)', violationType: 'Disrespect for divine entity, Islam, other religions', minFine: 100000, maxFine: 1000000 },
  { severity: 'Fourth Degree', violationType: 'Promotion of sectarianism, violence, or terrorism', minFine: 100000, maxFine: 500000 },
  { severity: 'Third Degree', violationType: 'Disrespect for UAE regime, symbols, institutions', minFine: 50000, maxFine: 500000 },
  { severity: 'Third Degree', violationType: 'Content harmful to foreign relations', minFine: 30000, maxFine: 250000 },
  { severity: 'Third Degree', violationType: 'Undermining foreign relations or social cohesion', minFine: 0, maxFine: 250000 },
  { severity: 'Second Degree', violationType: 'Publishing immoral, misleading, or fake content', minFine: 10000, maxFine: 100000 },
  { severity: 'Second Degree', violationType: 'Inciting crimes (murder, rape, drug abuse)', minFine: 0, maxFine: 150000 },
  { severity: 'Second Degree', violationType: 'Violation of privacy or children\'s rights', minFine: 5000, maxFine: 100000 },
  { severity: 'Second Degree', violationType: 'Failure to adhere to age classifications', minFine: 5000, maxFine: 100000 },
  { severity: 'First Degree (Least Severe)', violationType: 'Operating without license', minFine: 10000, maxFine: 40000 },
  { severity: 'First Degree', violationType: 'Publishing with expired license', minFine: 10000, maxFine: 20000 },
  { severity: 'First Degree', violationType: 'Failure to renew', minFine: 150, maxFine: 3000, notes: 'Dh150/day, capped at Dh3,000' },
  { severity: 'First Degree', violationType: 'Disseminating false information', minFine: 5000, maxFine: 10000 },
  { severity: 'First Degree', violationType: 'License misuse', minFine: 0, maxFine: 20000 },
]

export const repeatOffenses = 'Penalties double for each recurrence'

export const enforcementMechanisms = [
  { mechanism: 'AI Monitoring', details: 'NMA deployed AI-powered monitoring in May 2025' },
  { mechanism: 'Committee', details: 'Media Content Standards Violations Committee (3-7 media experts)' },
  { mechanism: 'Appeals', details: '15-day window; decisions within 15 days' },
  { mechanism: 'Additional sanctions', details: 'Activity suspension, license revocation, criminal proceedings' },
]

export const detentionCases2026 = [
  { case: 'British tourist (60)', details: 'Charged for filming missiles; immediately deleted video when asked' },
  { case: 'Filipina domestic worker', details: 'Detained near Burj Al Arab for taking photo while waiting for work' },
  { case: 'Vietnamese sailor', details: 'Detained in Fujairah for sharing video of missile activity' },
  { case: 'Influencer (300K views)', details: 'Told to delete video and post correction; others arrested for same' },
]

export const totalDetentionCases2026 = 21

// ============================================================================
// SECTION 6: VPN & INTERNET RESTRICTIONS
// ============================================================================

export const vpnLegalStatus = {
  legalWhen: 'Used for legitimate business purposes through licensed providers',
  illegalWhen: 'Misusing VPN to conceal crimes or manipulate IP addresses',
  penalties: { imprisonment: true, fine: 'AED 500,000 to AED 2,000,000' },
  legalBasis: 'Federal Decree-Law No. 34 of 2021 on Combating Rumours and Cybercrimes',
}

export const vpnDownloadsTrend = [
  { year: 2021, uaeDownloads: 4.87, globalDownloads: 487 },
  { year: 2022, uaeDownloads: 6.54, globalDownloads: 404 },
  { year: 2023, uaeDownloads: 7.81, globalDownloads: 464 },
  { year: 2024, uaeDownloads: 9.2, globalDownloads: 412.5 },
  { year: 2025, uaeDownloads: 9.6, globalDownloads: 412.5 },
]

export const gulfVpnComparison2025 = [
  { country: 'UAE', downloads: '9.60M', adoption: '85.5%' },
  { country: 'Oman', downloads: '3.98M', adoption: '54%' },
  { country: 'Qatar', downloads: '1.76M', adoption: '58.47%' },
]

export const globalVpnContext = '412.5 million VPN downloads worldwide in 2025'

export const voipServicesBlocked = [
  { service: 'WhatsApp calls', status: 'Blocked since 2015' },
  { service: 'Viber', status: 'Blocked since 2013' },
  { service: 'FaceTime', status: 'Completely unavailable' },
  { service: 'Facebook Messenger calls', status: 'Blocked' },
  { service: 'Telegram calls', status: 'Restricted' },
  { service: 'Discord voice chat', status: 'Blocked' },
]

export const voipBlockedReason = 'Unlicensed VoIP services compete with services offered by local telecom providers (Etisalat, du)'

export const legalVoipAlternatives = ['BOTIM', 'C\'Me (require paid subscriptions)']

export const otherBlockedCategories = [
  'Dating apps (Tinder)',
  'Online gambling/betting sites',
  'Pornography/adult content',
  'LGBT+ content (51 URLs inaccessible)',
  'Al Jazeera, Middle East Eye, The New Arab',
]

export const websiteBlockingStats = {
  totalBlocked: '160,000+',
  q1_2022Blocked: 883,
  managedBy: 'TDRA (Telecommunications and Digital Government Regulatory Authority)',
  categories: [
    'Pornography/fraud/defamation',
    'Privacy invasion/terrorism',
    'Drugs/gambling/discrimination',
    'Hate speech',
  ],
}

export const internetInfrastructure = [
  { metric: 'Internet users', value: '9.94 million (99% penetration)' },
  { metric: 'Mobile penetration', value: '169%' },
  { metric: 'Median mobile speed', value: '125.27 Mbps' },
  { metric: '5G coverage', value: '91% of population' },
  { metric: 'Daily internet use', value: '7 hours 29 minutes' },
]

export const redSeaCableCuts = {
  date: 'September 2025',
  details: 'Two major subsea cables damaged near Jeddah, Saudi Arabia',
  impact: 'Internet disruptions across Middle East, South Asia',
  repairDuration: 'Up to 6 weeks',
  context: 'Subsea cables carry 97-99% of global traffic (satellites less than 1%)',
}

// ============================================================================
// SECTION 7: MEDIA MARKET & ADVERTISING
// ============================================================================

export const advertisingMarketSize = {
  marketSize2025: 'USD 3.6 billion',
  forecast2034: 'USD 5.8 billion',
  cagr: '5.36%',
  historicalPeriod: '2020-2025',
  source: 'IMARC Group',
}

export const digitalAdvertisingMetrics = [
  { metric: 'Digital ad share (2023)', value: '68% of total', source: 'Statista' },
  { metric: 'Online advertising 2024', value: 'USD 3,302.3 million', source: 'Grand View Research' },
  { metric: 'Online advertising 2030 (projected)', value: 'USD 8,128.2 million', source: 'Grand View Research' },
  { metric: 'Digital media market 2024', value: 'USD 9,243.8 million', source: 'Grand View Research' },
  { metric: 'Digital media market 2030', value: 'USD 18,476.5 million', source: 'Grand View Research' },
  { metric: 'Digital media CAGR', value: '12.2%', source: 'Grand View Research' },
]

export const advertisingSegments2022 = [
  { segment: 'Total Digital Ad Spend', revenue: '$678.1 million' },
  { segment: 'Digital Banner Ads', revenue: '$162.4 million' },
  { segment: 'Digital Search Ads', revenue: '$152.9 million' },
  { segment: 'Digital Video Ads', revenue: '$114 million' },
]

export const dominantSocialPlatforms = [
  'Instagram',
  'Snapchat',
  'Facebook (74% of social media usage in 2018)',
]

export const majorStreamingEntertainment = [
  'Netflix (largest share of demand in UAE)',
  'Spotify',
  'Amazon/Disney+',
  'Activision',
]

export const mediaEntertainmentSegments = [
  'TV & Video (largest segment)',
  'Music/Radio/Podcasts',
  'Games',
  'Newspapers/Magazines',
  'Books',
  'Cinema',
]

export const mediaMarketTrends = [
  'Shift toward localized Arabic-language content reflecting cultural heritage',
  'Rise of interactive/immersive experiences (AR/VR)',
  'Mobile-first advertising approaches',
  'AI driving personalized campaigns',
]

// ============================================================================
// SECTION 8: FOREIGN MEDIA INVESTMENT
// ============================================================================

export const telegraphAcquisition = {
  year2023: 'UK blocked Abu Dhabi-backed group from acquiring The Telegraph',
  year2025Details: [
    'UAE delegation met UK officials weeks before law change',
    'UK law changed to allow 15% foreign state ownership',
  ],
  keyEntities: [
    { name: 'RedBird IMI', role: 'Bidding vehicle, majority-owned by International Media Investments' },
    { name: 'Controlled by', role: 'Sheikh Mansour bin Zayed Al Nahyan (UAE Vice President)' },
    { name: 'Promise', role: 'Journalists would receive "total editorial freedom"' },
  ],
}

export const otherMediaInvestments = [
  { investors: 'Saudi Arabia, Abu Dhabi, Qatar', amount: 'Contributing $24 billion to Paramount\'s bid' },
  { investors: 'Live Nation and WWE', backing: 'Backed by Gulf sovereign funds' },
  { investors: 'RedBird Capital', involvement: 'Involved in media investments' },
]

export const uaeForeignOwnershipPolicy = {
  policy: '100% foreign ownership permitted in UAE onshore companies (except oil, gas, utilities)',
  appliedTo: 'News agencies including WAM (as of November 2020)',
  additional: 'Each Emirate\'s DED specifies eligible activities',
}

// ============================================================================
// SECTION 9: JOURNALIST CASES & DETENTIONS
// ============================================================================

export const journalistCases = [
  { individual: 'Egyptian dissident', details: 'Extradited to UAE after criticizing government on social media', status: 'Detained' },
  { individual: 'British tourist (60)', details: 'Charged under cybercrime laws for filming Iranian missiles', status: 'Charged' },
  { individual: 'Mohammed Harun Arsalai', details: 'US-Afghan journalist, held without charge at Dubai Central Jail', status: 'Detained approximately 1 month' },
  { individual: 'William Deng Dut Koor', details: 'South Sudanese critic, deported to Juba after arrest', status: 'Deported' },
  { individual: '11 Egyptian journalists', details: 'Detained by UAE authorities in 2013', status: 'Detained' },
]

export const detentionLegalFramework = {
  law: 'Federal Decree-Law No. 34 of 2021',
  provisions: [
    'Posting fake news/rumors: Minimum 1 year imprisonment',
    'Actions affecting safety/security of people or institutions: Jail time + fines',
  ],
}

export const humanRightsConcerns = [
  {
    organization: 'Amnesty International (2012)',
    details: [
      '35 men arrested by UAE authorities',
      'At least one online discussion forum closed',
      'Detainees held incommunicado at undisclosed locations',
      'At least two cases of torture documented',
    ],
  },
  {
    organization: 'Human Rights Watch (2021)',
    details: [
      'UAE-backed Southern Transitional Council (STC) security forces arbitrarily detained Yemeni journalist',
      'Subjected to torture',
    ],
  },
]

export const contentManipulationHistory = [
  { year: 2019, activity: 'Twitter removed 4,200+ pro-UAE accounts' },
  { year: 2020, activity: '9,000 accounts spread coronavirus propaganda' },
  { year: 2022, activity: 'Government made 148 content removal requests to Twitter (88.5% compliance)' },
]

// ============================================================================
// SECTION 10: AL JAZZEERA & MEDIA BLOCKING
// ============================================================================

export const alJazeeraBlockingTimeline = [
  { date: 'May 2017', event: 'UAE, Saudi Arabia, Egypt, Bahrain block Al Jazeera following Qatar diplomatic crisis' },
  { date: '2017-2023/2024', event: 'Al Jazeera inaccessible in UAE' },
  { date: '2024/2025', event: 'Al Jazeera unblocked (after 6-year ban)' },
]

export const alJazeeraJustification = {
  quote: 'Al Jazeera does not report opposing opinions" and is "a tool and a means of war just like money and weapons',
  speaker: 'Senior UAE media official',
}

export const alJazeeraBlocksImplemented = [
  'Al Jazeera Live website blocked',
  'Al Jazeera Riyadh and Amman bureaus closed',
  'Other Qatari newspapers\' websites blocked',
]

export const rsfResponseAlJazeera = 'Called blocking "unacceptable"'

export const otherBlockedMediaList = [
  'Middle East Eye',
  'The New Arab',
  'Various blogs and news sites',
  'al-Watan (largest Arab-American newspaper) - UAE attempted transnational shutdown via German hosting company',
]

// ============================================================================
// SECTION 11: GPS JAMMING & SATELLITE ISSUES
// ============================================================================

export const gpsDisruptionEvents = [
  { date: 'March 7, 2026', shipsAffected: '1,650+ in Middle East', increase: '55% increase' },
  { date: 'Feb 28, 2026', shipsAffected: 'Approximately 1,100 within 24 hours of US strikes' },
]

export const gpsAffectedAreas = ['Kuwait', 'Iran', 'Saudi Arabia', 'Oman', 'UAE']

export const gpsPhenomenaObserved = [
  'Ships incorrectly placed on land',
  'Cars incorrectly placed at sea',
  'Navigation systems reporting false locations',
]

export const gpsTechnicalMethods = [
  { method: 'Jamming', description: 'Blocks GPS signals, makes it hard to receive satellite positioning' },
  { method: 'Spoofing', description: 'Sends false signals broadcasting wrong location' },
]

export const gpsExpertQuote = {
  quote: 'You\'re driving your car and you\'re trying to get to your hotel, but the GPS keeps on thinking you\'re 400 miles away',
  speaker: 'Shawn Usman, Rhea Space Activity',
}

export const gigWorkerImpact = {
  affectedCompanies: ['Lulu Hypermarket', 'Noon', 'Keeta'],
  issues: [
    'Routes shift without warning',
    'Apps freeze or report wrong positions',
    'Delivery delays common',
    'Drivers rely on memory, landmarks, phone calls',
  ],
  quote: 'Before, we followed the map. Now, we follow the roads we remember',
}

export const gpsExpertWarnings = [
  { speaker: 'Elliott Sanders, RSA', quote: 'The first casualty of future conflicts is going to be GPS - civilians will continue to be affected given GPS prevalence' },
  { speaker: 'Jim Stroup, SandboxAQ', quote: 'GPS signals are extremely weak...relatively easy to interfere with' },
]

// ============================================================================
// SECTION 12: OTT/STREAMING REGULATION
// ============================================================================

export const streamingRegulationIssues = [
  { issue: 'Content caution', details: 'UAE authorities cautioned Netflix over inappropriate content' },
  { issue: 'LGBTQ content', details: 'Gulf Arab countries asked Netflix to remove "offensive content" targeting LGBTQ individuals' },
  { issue: 'Cancellation difficulty', details: '"Click to cancel" rule being implemented; aimed at making cancelling as easy as signing up' },
]

export const streamingPlatforms = [
  { name: 'Netflix', uaePosition: 'Largest share of demand in UAE' },
  { name: 'Disney+', uaePosition: 'Popular in UAE; Access Partnership helping with MENA launch' },
  { name: 'Amazon Prime Video', uaePosition: 'Significant presence' },
  { name: 'Spotify', uaePosition: 'Leading music streaming' },
]

export const streamingRegulatoryApproach = [
  'UK announcing new standards for Netflix, Prime Video, Disney+',
  'UAE and Saudi Arabia regulators "on top of prominent digital transformation issues"',
  'Aimed at making cancellation processes easier for consumers',
]

// ============================================================================
// SECTION 13: GAMING & DIGITAL SAFETY
// ============================================================================

export const childDigitalSafetyLaw = {
  keyProvisions: [
    'Age-rating tools required for platforms',
    'Children under 18 barred from online gambling/betting platforms',
    'Parents made legally responsible for children\'s online safety',
    'Digital providers and internet service companies responsible for enforcement',
  ],
  period: '2025-2026',
}

export const gamingAgeRatingSystem = {
  administeringBody: 'National Media Authority (NMA)',
  fee: 'AED 500',
  processingDays: '5 working days',
  serviceType: 'Government to Business (G2B)',
  requirements: [
    'Intellectual Property Certificate from Ministry of Economy',
    'Copy of artistic work material or link to game content',
    'Valid media license for distribution/import',
  ],
}

export const digitalServicesCovered = [
  'Online commercial games involving gambling/betting',
  'Gaming platforms',
  'Age-gating requirements',
  'Identity verification rules',
]

// ============================================================================
// SECTION 14: MEDIA TRAINING & EDUCATION
// ============================================================================

export const trainingInstitutions = [
  {
    name: 'New Media Academy (NMA)',
    location: 'Dubai',
    launched: 'June 2020',
    founder: 'His Highness Sheikh Mohammad Bin Rashid Al Maktoum',
    mission: 'Nurturing and incubating Emirati and Arab content creators to increase valuable Arabic content across digital and media platforms',
    vision: 'Empower over 100 Arab content creators to make a positive impact',
    programs: 'Social Media Professional Program, Faris Al Muhtawa Incubator, Short Courses, Government Communications training',
    clients: 'World Government Summit, Global Village, Expo City Dubai, ADNOC',
  },
  {
    name: 'IMI Media Academy',
    location: '',
    programs: 'Sky News Arabia Academy, The National\'s Graduate Training Programme',
    courses: 'Public speaking, media appearances, podcast creation, AI for content creation',
    contact: 'academy@imimedia.com',
  },
  {
    name: 'CNN Academy Abu Dhabi',
    location: 'Abu Dhabi',
    openTo: 'UAE nationals and residents over 18',
    requirement: 'Background/interest in media and multiplatform storytelling',
  },
  {
    name: 'HWM (Media Training Dubai)',
    location: 'Dubai',
    provider: 'BBC insiders (since 2013)',
    services: 'Media Training for Leaders, Crisis Communications, Presentation Skills',
    notableTrainer: 'Eve Hester (BBC-trained director/journalist)',
  },
  {
    name: 'Our Media Training Center',
    location: '',
    claim: 'First Emirati media training center',
    focus: 'Both academic and practical training in professional media environment',
  },
]

export const aiLiteracyStudy = {
  studyScope: 'UAE vs Pakistan, 536 mass communication students',
  findings: [
    'UAE students showed higher AI adoption due to "better digital infrastructure and educational policies"',
    'UAE students demonstrated greater usage intensity and skill confidence',
    'Pakistani students faced barriers: limited AI tool access, inadequate training, slower internet',
    'Both groups recognized AI\'s potential benefits',
  ],
  recommendations: 'AI literacy integration in media curricula, faculty training, policy development',
}

export const dubaiAiInitiative = {
  name: 'Dubai Centre for Artificial Intelligence (DCAI)',
  program: 'The Future of Generative AI in Media and Communications',
  focusAreas: ['Content creation', 'audience engagement', 'operational efficiency', 'advertising/monetization'],
  benefit: 'Zero Equity Taken - participants maintain complete ownership',
  deadline: 'Applications closed August 18, 2023',
}

// ============================================================================
// SECTION 15: JOURNALIST SALARIES & EMPLOYMENT
// ============================================================================

export const journalistSalaries = [
  { source: 'Indeed', averageSalary: 'AED 5,878/month', details: 'Based on 6 reported salaries (Dec 2025)' },
  { source: 'GrabJobs', averageSalary: 'AED 3,500/month', details: 'Average; AED 42,000/year' },
  { source: 'Payscale', averageSalary: 'AED 40,000/month', details: 'Mid-career (5-9 years experience), based on 5 salaries' },
  { source: 'Glassdoor (Dubai)', averageSalary: '$18,467/year', details: 'Journalist in Dubai' },
  { source: 'Glassdoor (Abu Dhabi)', averageSalary: '$35,177/year', details: 'Multimedia Journalist in Abu Dhabi' },
  { source: 'SalaryExpert', averageSalary: 'AED 165,559/year', details: 'Average journalist media gross salary; AED 80/hour' },
]

export const salaryRangeFactors = [
  'Experience level (entry to mid-career)',
  'Location (Dubai vs Abu Dhabi)',
  'Organization type (government vs private)',
  'Media specialization',
]

// ============================================================================
// SECTION 16: MEDIA DIVERSITY & PLURALISM
// ============================================================================

export const mediaDiversityUaeContext = {
  officialPosition: [
    'US and UAE find "pluralism, diversity as source of national strength"',
    'Diverse religious communities comfortably identifying themselves and practicing faith in UAE',
  ],
  academicAssessment: [
    '"Ethnic origin reinforced media content"',
    '"UAE media highly conscious of multicultural diversity of UAE society"',
  ],
  source: 'Wiley',
}

export const unescoPerspective = 'UNESCO promotes media pluralism and diversity as critical to independent and free media landscape, essential for diverse opinions and ideas'

export const mediaDiversityRealityVsNarrative = {
  ifexAssessment: [
    'UAE\'s tight regulation results in self-censorship',
    'Risk of imprisonment for journalists',
    'Two journalists in jail',
  ],
  freedomHouseAssessment: [
    '"Online environment lacks diversity with most media state-owned or controlled"',
    '"Widespread self-censorship due to legal risks, high surveillance"',
  ],
}

// ============================================================================
// SECTION 17: KEY DATA SUMMARY TABLES
// ============================================================================

export const keyDataSummaryTable = [
  { category: 'Press Freedom', metric: 'Press Freedom Index Score', value: '26.91/100', year: '2025', source: 'RSF/Geofactbook' },
  { category: 'Press Freedom', metric: 'Press Freedom Ranking', value: '164th of 180', year: '2025', source: 'RSF' },
  { category: 'Internet Freedom', metric: 'Internet Freedom Score', value: '28/100', year: '2022', source: 'Freedom House' },
  { category: 'Advertising', metric: 'Advertising Market Size', value: 'USD 3.6 billion', year: '2025', source: 'IMARC Group' },
  { category: 'Advertising', metric: 'Advertising CAGR', value: '5.36%', year: '2026-2034', source: 'IMARC Group' },
  { category: 'Advertising', metric: 'Online Advertising Revenue', value: 'USD 3.3 billion', year: '2024', source: 'Grand View Research' },
  { category: 'Digital Media', metric: 'Digital Media Market', value: 'USD 18.5 billion', year: '2030 (projected)', source: 'Grand View Research' },
  { category: 'Digital Media', metric: 'Digital Media CAGR', value: '12.2%', year: '2024-2030', source: 'Grand View Research' },
  { category: 'Digital Media', metric: 'Digital Ad Spend Share', value: '68%', year: '2023', source: 'Statista' },
  { category: 'Employment', metric: 'Journalist Salary (avg)', value: 'AED 5,878/month', year: '2025', source: 'Indeed' },
  { category: 'Employment', metric: 'Journalist Salary (mid-career)', value: 'AED 40,000/month', year: '2025', source: 'Payscale' },
  { category: 'Fines', metric: 'Influencer Fine (no license)', value: 'AED 10,000-40,000', year: '2025', source: 'Gulf News' },
  { category: 'Fines', metric: 'Serious Content Violation Fine', value: 'Up to AED 1,000,000', year: '2025', source: 'Clyde & Co' },
  { category: 'Fines', metric: 'VPN Misuse Fine', value: 'AED 500,000-2,000,000', year: '2025', source: 'Multiple sources' },
  { category: 'Licensing', metric: 'Media License Deadline', value: 'January 31, 2026', year: '2025', source: 'Pinsent Masons' },
  { category: 'Internet', metric: 'Websites Blocked', value: '160,000+', year: '2024', source: 'Dubai Eye 103.8' },
  { category: 'Internet', metric: 'VPN Apps Downloaded', value: '9.6 million', year: '2025', source: 'Khaleej Times' },
  { category: 'Internet', metric: 'Internet Users', value: '9.94 million', year: '2022', source: 'Freedom House' },
  { category: 'Internet', metric: '5G Coverage', value: '91%', year: '2022', source: 'Freedom House' },
  { category: 'Internet', metric: 'Daily Internet Use', value: '7h 29m', year: '2025', source: 'Meltwater' },
]

export const regulatoryTimeline = [
  { year: '1980', legislation: 'Federal Law No. 15 on Press and Publications' },
  { year: '2012', legislation: 'Cybercrimes Decree (amended 2022)' },
  { year: '2017', legislation: 'Al Jazeera blocked' },
  { year: '2020', legislation: '100% foreign ownership permitted' },
  { year: '2020', legislation: 'New Media Academy launched' },
  { year: '2021', legislation: 'Federal Decree-Law No. 34/2021 on Cybercrimes' },
  { year: '2022', legislation: 'UAE Media Council established' },
  { year: '2023', legislation: 'Federal Decree-Law No. 55/2023 on Media Regulation' },
  { year: '2024', legislation: 'Executive Regulations issued' },
  { year: '2025', legislation: 'Cabinet Resolution No. 41 & 42 of 2025' },
  { year: '2025', legislation: 'NMA consolidated (December)' },
]

export const penaltyStructureSummary = [
  { category: 'Religious offenses', minFine: 100000, maxFine: 1000000 },
  { category: 'Disrespect for UAE symbols', minFine: 50000, maxFine: 500000 },
  { category: 'Harm to foreign relations', minFine: 30000, maxFine: 250000 },
  { category: 'Inciting crimes', minFine: 0, maxFine: 150000 },
  { category: 'Publishing false information', minFine: 5000, maxFine: 10000 },
  { category: 'Operating without license', minFine: 10000, maxFine: 40000 },
]

export const vpnDownloadTrend = [
  { year: '2021', uaeDownloads: '4.87M', globalDownloads: '487M' },
  { year: '2022', uaeDownloads: '6.54M', globalDownloads: '404M' },
  { year: '2023', uaeDownloads: '7.81M', globalDownloads: '464M' },
  { year: '2024', uaeDownloads: '9.20M', globalDownloads: '412.5M' },
  { year: '2025', uaeDownloads: '9.60M', globalDownloads: '412.5M' },
]

// ============================================================================
// SECTION 18: URL SOURCE INDEX
// ============================================================================

export const urlSources = [
  { source: 'u.ae/en/media/media-in-the-uae/media-regulation', tier: 'Tier 0 (Government)', dataExtracted: 'Federal Decree-Law No. 55/2023, media regulation' },
  { source: 'nma.gov.ae/en/uae/media-sectors', tier: 'Tier 0 (Government)', dataExtracted: 'Media sectors overview' },
  { source: 'nma.gov.ae/en/about/office-roles', tier: 'Tier 0 (Government)', dataExtracted: 'NMA roles and competencies' },
  { source: 'nma.gov.ae/en/services/permit-for-an-individual...', tier: 'Tier 0 (Government)', dataExtracted: 'Influencer permit requirements' },
  { source: 'nma.gov.ae/en/services/electronic-video-games-age-rating-permit', tier: 'Tier 0 (Government)', dataExtracted: 'Gaming age rating' },
  { source: 'uaelegislation.gov.ae/en/legislations/2868/regulations/1090/download', tier: 'Tier 0 (Government)', dataExtracted: 'Administrative violations' },
  { source: 'uaelegislation.gov.ae/en/news/uae-government-issues...', tier: 'Tier 0 (Government)', dataExtracted: 'NMA establishment' },
  { source: 'tdra.gov.ae/en/about/tdra-sectors/information-and...', tier: 'Tier 0 (Government)', dataExtracted: 'Internet guidelines' },
  { source: 'uaemc.gov.ae/en/faq/', tier: 'Tier 0 (Government)', dataExtracted: 'FAQ on licensing' },
  { source: 'en.wikipedia.org/wiki/Mass_media_in_the_United_Arab_Emirates', tier: 'Tier 1 (Mainstream)', dataExtracted: 'Media landscape history' },
  { source: 'rsf.org/en/country/united-arab-emirates', tier: 'Tier 1 (Mainstream)', dataExtracted: 'Press freedom status' },
  { source: 'rsf.org/en/ranking', tier: 'Tier 1 (Mainstream)', dataExtracted: 'World rankings' },
  { source: 'freedomhouse.org/country/united-arab-emirates/freedom-net/2022', tier: 'Tier 1 (Mainstream)', dataExtracted: 'Internet freedom' },
  { source: 'gulfnews.com', tier: 'Tier 2 (Regional)', dataExtracted: 'Influencer fines' },
  { source: 'khaleejtimes.com', tier: 'Tier 2 (Regional)', dataExtracted: 'VPN downloads' },
  { source: 'thenationalnews.com', tier: 'Tier 2 (Regional)', dataExtracted: 'GPS disruptions' },
  { source: 'middleeastmonitor.com', tier: 'Tier 2 (Regional)', dataExtracted: 'Al Jazeera block' },
  { source: 'meltwater.com', tier: 'Tier 3/4 (Secondary)', dataExtracted: 'Media landscape guide' },
  { source: 'grandviewresearch.com', tier: 'Tier 3/4 (Secondary)', dataExtracted: 'Digital media market' },
  { source: 'imarcgroup.com', tier: 'Tier 3/4 (Secondary)', dataExtracted: 'Advertising market' },
  { source: 'geofactbook.com', tier: 'Tier 3/4 (Secondary)', dataExtracted: 'Press freedom scores' },
  { source: 'worldeconomics.com', tier: 'Tier 3/4 (Secondary)', dataExtracted: 'RSF index data' },
]

// ============================================================================
// SECTION 19: SENTIMENT ANALYSIS
// ============================================================================

export const overallSentiment = 'NEGATIVE/CONTROLLED'

export const sentimentByDimension = [
  { dimension: 'Press Freedom', sentiment: 'Highly Negative', evidence: '164th of 180, declining 5+ years, 12.1% drop in one year' },
  { dimension: 'Internet Freedom', sentiment: 'Highly Negative', evidence: '28/100 "Not Free", advanced censorship, 160,000+ sites blocked' },
  { dimension: 'Content Controls', sentiment: 'Highly Negative', evidence: 'Severe penalties (up to AED 1M), criminal imprisonment' },
  { dimension: 'Influencer Regulation', sentiment: 'Negative', evidence: 'Mandatory licensing, 25+ age requirement, content restrictions' },
  { dimension: 'Self-Censorship', sentiment: 'Highly Negative', evidence: 'Widespread due to legal risks and surveillance' },
  { dimension: 'Media Ownership', sentiment: 'Highly Negative', evidence: 'Government or government-tied ownership concentration' },
  { dimension: 'Journalist Safety', sentiment: 'Highly Negative', evidence: 'Arrests, deportations, extraditions documented' },
]

export const positiveSentimentElements = [
  { dimension: 'Digital Infrastructure', sentiment: 'Positive', evidence: '99% internet penetration, 91% 5G coverage' },
  { dimension: 'Media Market Growth', sentiment: 'Positive', evidence: '5-12% CAGR across segments' },
  { dimension: 'AI Investment', sentiment: 'Positive', evidence: 'Strong government support, startup programs' },
  { dimension: 'Training Infrastructure', sentiment: 'Positive', evidence: 'Multiple academies, government support' },
  { dimension: 'Foreign Investment Openness', sentiment: 'Neutral-Positive', evidence: '100% foreign ownership permitted' },
]

export const keyNarrativesAnalysis = [
  {
    narrative: 'Official UAE Narrative',
    statements: [
      'Strong digital infrastructure',
      'Growing media market',
      'Protection of youth from harmful content',
      'pluralism and diversity as national strength',
      'Investment in AI and innovation',
    ],
  },
  {
    narrative: 'International Assessment',
    statements: [
      'Severe restrictions on press freedom',
      'Government control of media landscape',
      'Criminalization of dissent',
      'Transnational suppression of media',
      'Self-censorship pervasive',
    ],
  },
]

// ============================================================================
// SECTION 20: UAE RELEVANCE ASSESSMENT
// ============================================================================

export const relevanceScores = [
  { topic: 'Media Regulation', score: 'CRITICAL', rationale: 'Directly impacts all communications in UAE' },
  { topic: 'Content Violations', score: 'CRITICAL', rationale: 'Affects all residents and businesses' },
  { topic: 'Influencer Licensing', score: 'HIGH', rationale: 'Affects economic activity and marketing' },
  { topic: 'Internet Restrictions', score: 'HIGH', rationale: 'Daily impact on all residents' },
  { topic: 'Press Freedom', score: 'HIGH', rationale: 'Indicator of human rights concerns' },
  { topic: 'Foreign Investment', score: 'MEDIUM', rationale: 'Business and geopolitical implications' },
]

export const dashboardRecommendations = [
  {
    category: 'Regulatory Compliance',
    metrics: ['Number of media licenses issued', 'Compliance rate (licenses vs. active influencers)', 'Fine revenue collected'],
  },
  {
    category: 'Market Performance',
    metrics: ['Advertising market size (USD billions)', 'Digital ad spend percentage', 'Platform market share'],
  },
  {
    category: 'Control Measures',
    metrics: ['Websites blocked count', 'VPN download trends', 'Content removal requests'],
  },
  {
    category: 'Freedom Indicators',
    metrics: ['RSF ranking (inverse scale)', 'RSF score (inverse scale)', 'Freedom House score'],
  },
  {
    category: 'Infrastructure',
    metrics: ['Internet penetration rate', '5G coverage', 'Mobile penetration'],
  },
]

export const dataGapsIdentified = [
  { gap: 'Detailed license issuance numbers', sourceNeeded: 'NMA official data', priority: 'High' },
  { gap: 'Actual fine collection amounts', sourceNeeded: 'UAE government', priority: 'High' },
  { gap: 'Platform-specific user data', sourceNeeded: 'Social media companies', priority: 'Medium' },
  { gap: 'Independent media outlet count', sourceNeeded: 'NGO research', priority: 'Medium' },
  { gap: 'Journalist salary actual distributions', sourceNeeded: 'HR data', priority: 'Low' },
]

// ============================================================================
// APPENDIX: KEY DEFINITIONS
// ============================================================================

export const keyDefinitions = [
  { term: 'RSF', definition: 'Reporters Without Borders (Reporters Sans Frontieres)' },
  { term: 'NMA', definition: 'National Media Authority (UAE)' },
  { term: 'TDRA', definition: 'Telecommunications and Digital Government Regulatory Authority' },
  { term: 'MNA', definition: 'Media free zone' },
  { term: 'OTT', definition: 'Over-the-top (streaming services)' },
  { term: 'VPN', definition: 'Virtual Private Network' },
  { term: 'GPS Spoofing', definition: 'Sending false GPS signals to manipulate location data' },
  { term: 'GPS Jamming', definition: 'Blocking GPS signals to prevent positioning' },
]

// ============================================================================
// ENRICHMENT METADATA
// ============================================================================

export const enrichmentMetadata = {
  sourcesAnalyzed: '45+ URLs fetched via WebFetch',
  dataPointsExtracted: 300,
  tablesCreated: 17,
  entitiesDocumented: 50,
  statisticsWithSources: 100,
  reportGenerated: '2026-04-27',
  totalDataPoints: '300+',
  confidenceLevel: 'High (government sources + mainstream media verification)',
}

// ============================================================================
// MAIN EXPORT
// ============================================================================

export const mediaData = {
  // Metadata
  executionMetadata,
  tableOfContents,

  // Section 1: Executive Summary
  executiveSummary,
  keyMetricsAtGlance,

  // Section 2: Regulatory Framework
  primaryLegislation,
  cabinetDecisions2025,
  nmaInfo,
  contentStandards,
  mediaFreeZones,
  foreignOwnership,

  // Section 3: Press Freedom
  pressFreedomIndex,
  rsfAssessment2025,
  freedomHouseAssessment,
  mediaMilestones,
  majorMediaOutlets,
  umbrellaGroups,
  broadcastNetworks,
  governmentStatementMedia,

  // Section 4: Influencer Licensing
  influencerDeadline,
  twoLicenseSystem,
  influencerEligibilityRequirements,
  influencerApplicationProcess,
  influencerProcessingTime,
  contentCreatorObligations,
  new2026Restrictions,
  influencerExemptions,

  // Section 5: Violations
  violationCategories,
  repeatOffenses,
  enforcementMechanisms,
  detentionCases2026,
  totalDetentionCases2026,

  // Section 6: VPN & Internet
  vpnLegalStatus,
  vpnDownloadsTrend,
  gulfVpnComparison2025,
  globalVpnContext,
  voipServicesBlocked,
  voipBlockedReason,
  legalVoipAlternatives,
  otherBlockedCategories,
  websiteBlockingStats,
  internetInfrastructure,
  redSeaCableCuts,

  // Section 7: Media Market
  advertisingMarketSize,
  digitalAdvertisingMetrics,
  advertisingSegments2022,
  dominantSocialPlatforms,
  majorStreamingEntertainment,
  mediaEntertainmentSegments,
  mediaMarketTrends,

  // Section 8: Foreign Investment
  telegraphAcquisition,
  otherMediaInvestments,
  uaeForeignOwnershipPolicy,

  // Section 9: Journalist Cases
  journalistCases,
  detentionLegalFramework,
  humanRightsConcerns,
  contentManipulationHistory,

  // Section 10: Al Jazeera
  alJazeeraBlockingTimeline,
  alJazeeraJustification,
  alJazeeraBlocksImplemented,
  rsfResponseAlJazeera,
  otherBlockedMediaList,

  // Section 11: GPS
  gpsDisruptionEvents,
  gpsAffectedAreas,
  gpsPhenomenaObserved,
  gpsTechnicalMethods,
  gpsExpertQuote,
  gigWorkerImpact,
  gpsExpertWarnings,

  // Section 12: Streaming
  streamingRegulationIssues,
  streamingPlatforms,
  streamingRegulatoryApproach,

  // Section 13: Gaming
  childDigitalSafetyLaw,
  gamingAgeRatingSystem,
  digitalServicesCovered,

  // Section 14: Training
  trainingInstitutions,
  aiLiteracyStudy,
  dubaiAiInitiative,

  // Section 15: Salaries
  journalistSalaries,
  salaryRangeFactors,

  // Section 16: Diversity
  mediaDiversityUaeContext,
  unescoPerspective,
  mediaDiversityRealityVsNarrative,

  // Section 17: Data Summary
  keyDataSummaryTable,
  regulatoryTimeline,
  penaltyStructureSummary,
  vpnDownloadTrend,

  // Section 18: Sources
  urlSources,

  // Section 19: Sentiment
  overallSentiment,
  sentimentByDimension,
  positiveSentimentElements,
  keyNarrativesAnalysis,

  // Section 20: Relevance
  relevanceScores,
  dashboardRecommendations,
  dataGapsIdentified,

  // Appendix
  keyDefinitions,
  enrichmentMetadata,
}

export default mediaData
