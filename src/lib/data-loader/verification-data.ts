import type {
  VerificationResult,
  VerificationVerdict,
  Source,
  OmissionData,
  EchoChamberAnalysis,
  TierLevel,
  AlertLevel,
  UAERelevance,
  CredibilityScore,
  SourceReference,
  KeyFinding,
  MediaAboutMediaExtendedData,
} from './types'

// ============================================================================
// 11-1: Media About Media
// ============================================================================

export const mediaAboutMediaData: VerificationResult = {
  id: 'ver-11-1',
  claim:
    'UAE maintains high press freedom and allows independent journalism with minimal government interference',
  verdict: 'false',
  accuracyScore: 18,
  sources: [
    { name: 'RSF World Press Freedom Index 2024', tier: 1, reliability: 'high' },
    { name: 'Freedom House 2023', tier: 1, reliability: 'high' },
    { name: 'Human Rights Watch', tier: 1, reliability: 'high' },
    { name: 'Mideastmedia.org Survey 2019', tier: 1, reliability: 'high' },
    { name: 'AP News', tier: 1, reliability: 'high' },
    { name: 'Al Jazeera', tier: 2, reliability: 'medium' },
  ],
  echoChamberRisk: {
    platform: 'UAE Domestic Media',
    strength: 'critical',
    primaryEchos: [
      'Pro-government narratives dominate',
      'Self-censorship on red line topics',
      'State ownership of major outlets',
      'WAM official agency as primary source',
    ],
    riskLevel: 'critical',
  },
  omissionData: {
    omittedFacts: [
      'World Press Freedom Index 2024: UAE ranked 164/180 (bottom 11% globally)',
      'Internet Freedom Score: 30/100 — "Not Free" (declining)',
      'RSF describes journalists practicing self-censorship due to fear of imprisonment',
      '60-90 journalists fired from Al-Roeya in September 2022 for economic impact story',
      'Criminal defamation laws create systemic chilling effect on journalism',
      '300,000+ surveillance cameras in Dubai alone (Oyoon AI program)',
      'SSD UAE app launched Feb 2026 for crowdsourced reporting of "non-compliant" content',
      'Maximum prison term 2+ years for sharing content contradicting official statements during crises',
    ],
    significance: 'critical',
    impact:
      'Systemic suppression of independent reporting creates false perception of press freedom within UAE while international assessments document severe restrictions',
  },
  keyFindings: [
    {
      finding: 'World Press Freedom Index 2024 rank',
      metric: '164/180',
      source: 'RSF/Watanserb',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Internet Freedom Score',
      metric: '30/100 — "Not Free"',
      source: 'Freedom House 2023',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Fake Twitter Accounts (Pro-MBZ)',
      metric: '91%',
      source: 'Freedom House',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Dubai Surveillance Cameras',
      metric: '300,000+',
      source: 'HRW',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Al-Roeya Journalists Fired (Sep 2022)',
      metric: '60-90',
      source: 'AP/Al Jazeera',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Maximum Media Fine (Federal Decree Law No. 55/2023)',
      metric: 'AED 2 million',
      source: 'Charles Russell Speechlys',
      tier: 2,
      alert: 'RED',
    },
    {
      finding: 'Emirati Media Trust (self-reported)',
      metric: '77%',
      source: 'Mideastmedia.org',
      tier: 1,
      alert: 'YELLOW',
    },
    {
      finding: 'Foreign Reporter Permit Fee',
      metric: '300 AED (fixed)',
      source: 'NMO UAE',
      tier: 2,
      alert: 'GREEN',
    },
  ],
  credibility: {
    tier: 2,
    score: 35,
    sources: 6,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 98,
    level: 'critical',
    justification:
      'Directly measures state control over information environment within UAE — fundamental to national narrative integrity',
  },
  alertLevel: 'RED',
  sources2: [
    { name: 'RSF World Press Freedom Index', url: 'https://rsf.org/en/country/united-arab-emirates', tier: 1, date: '2024' },
    { name: 'Freedom House Freedom on the Net', url: 'https://freedomhouse.org', tier: 1, date: '2023' },
    { name: 'HRW World Report 2024', url: 'https://hrw.org', tier: 1, date: '2024' },
    { name: 'Mideastmedia.org Survey', url: 'https://mideastmedia.org', tier: 1, date: '2019' },
  ],
  lastUpdated: '2026-04-27',
  extendedData: {
    // KPIs
    kpis: [
      { kpi: 'World Press Freedom Index 2024', value: '164/180', trend: 'Declining', source: 'RSF/Watanserb', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'Internet Freedom Score', value: '30/100', trend: 'Not Free', source: 'Freedom House 2023', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'Emirati Media Trust', value: '77%', trend: '+0 pts', source: 'Mideastmedia.org', uaeRelevance: 'High', tier: 1 },
      { kpi: 'Social Media News Trust (UAE)', value: '75%', trend: '+18 pts since 2017', source: 'Mideastmedia.org', uaeRelevance: 'High', tier: 1 },
      { kpi: 'TV News Trust (High)', value: '59%', trend: 'Stable', source: 'Mideastmedia.org', uaeRelevance: 'Medium', tier: 1 },
      { kpi: 'Fake Twitter Accounts (Pro-MBZ)', value: '91%', trend: 'Static', source: 'Freedom House', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'Dubai Surveillance Cameras', value: '300,000+', trend: 'Expanding', source: 'HRW', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'Maximum Media Fine', value: 'AED 2 million', trend: 'Increased', source: 'Charles Russell Speechlys', uaeRelevance: 'High', tier: 2 },
      { kpi: 'Al-Roeya Journalists Fired', value: '60-90', trend: 'Incident-based', source: 'AP/Al Jazeera', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'Foreign Reporter Permit Fee', value: '300 AED', trend: 'Fixed', source: 'NMO UAE', uaeRelevance: 'Medium', tier: 2 },
      { kpi: 'Influencer License Fee (Abu Dhabi/Dubai)', value: 'AED 15,000', trend: 'New 2025', source: 'The National', uaeRelevance: 'High', tier: 2 },
      { kpi: 'AI Trust in News (UAE)', value: '62%', trend: 'Rising', source: 'YouGov', uaeRelevance: 'Medium', tier: 2 },
    ],

    // Media Outlet Ownership
    mediaOutletOwnership: [
      { outlet: 'Gulf News', owner: 'Al Nisr Publishing (Al Tayer Group)', ownershipType: 'Private, regulated', politicalLeaning: 'Pro-government', editorialAlignment: 'Heavily-regulated, follows government line' },
      { outlet: 'Khaleej Times', owner: 'Galadari Printing and Publishing', ownershipType: 'Government partnership', politicalLeaning: 'Pro-government', editorialAlignment: 'State oversight, censorship laws apply' },
      { outlet: 'Emirates 24/7', owner: 'Dubai Media Incorporated', ownershipType: 'Government-owned', politicalLeaning: 'Directly pro-government', editorialAlignment: 'Relies on WAM official agency' },
      { outlet: 'Arabian Post', owner: 'Hyphen Digital Network', ownershipType: 'Private', politicalLeaning: 'Pro-government', editorialAlignment: 'Projects "modern, progressive image"' },
      { outlet: 'The National', owner: 'International Media Investments', ownershipType: 'State-connected', politicalLeaning: 'Pro-government', editorialAlignment: 'Owned by Mansour bin Zayed Al Nahyan' },
      { outlet: 'Al-Roeya', owner: 'International Media Investments', ownershipType: 'State-connected', politicalLeaning: 'Pro-government', editorialAlignment: 'Dissolved 2022 after firing journalists' },
      { outlet: 'Arabian Business', owner: 'ITP Media Group', ownershipType: 'Private', politicalLeaning: 'Aligned', editorialAlignment: 'Focus on business, economic interests' },
    ],

    // Al-Roeya Incident
    alRoeyaIncident: {
      incidentDate: 'September 13, 2022',
      location: 'Dubai, UAE',
      publisher: 'International Media Investments (IMI)',
      parentCompany: 'International Media Investments (IMI)',
      parentCompanyOwner: 'Sheikh Mansour bin Zayed Al Nahyan (brother of UAE President, owner of Manchester City)',
      employeesLostJobs: '60-90 (35+ in single day, dozens more subsequently)',
      trigger: 'Article about economic impacts of Russia-Ukraine war on low-income UAE residents',
      articleTopic: 'High fuel prices; citizens crossing to Oman for cheaper fuel (50% cheaper due to subsidies)',
      officialReason: '"Expansion plans" and transformation to CNN Business Arabic',
      actualReasonAlleged: 'Censorship due to economic impact story',
    },

    // Surveillance Infrastructure
    surveillanceInfrastructure: [
      { system: 'Oyoon AI', location: 'Dubai', scale: 'Tens of thousands of cameras', capability: 'Facial recognition, central command' },
      { system: 'Falcon Eye', location: 'Abu Dhabi', scale: 'Large scale', capability: 'Surveillance' },
      { system: 'General Surveillance', location: 'Dubai', scale: '300,000+ cameras', capability: 'Round-the-clock monitoring' },
    ],

    // Self-Censorship Drivers
    selfCensorshipDrivers: [
      'Journalists able to write per month: No more than 3 reports due to approval requirements (HRW)',
      'Approval timeline for economic/tourist reports: 1-2 weeks (AP News)',
      'Red line clarity: "Very muddy, you have to guess what is allowed" (HRW)',
      'Outlet self-censorship: Exercised in accordance with government regulations and unofficial red lines (HRW)',
      'In-person interview precaution: Journalists leaving phones at home (HRW)',
    ],

    // Journalist Restrictions
    journalistRestrictions: [
      { restrictionType: 'Entry Denial', description: 'Temporarily denied entry back into country', frequency: 'Documented' },
      { restrictionType: 'Travel Bans', description: 'Temporary travel bans while inside country', frequency: 'Documented' },
      { restrictionType: 'Warning Calls', description: 'Mildly threatening or warning calls from government', frequency: 'Documented' },
      { restrictionType: 'Deportation', description: 'Denial of entry or deportation for foreign journalists', frequency: 'Documented' },
      { restrictionType: 'Story Suppression', description: 'Holding back stories without official comment', frequency: 'Common practice' },
      { restrictionType: 'Legal Threat', description: 'Criminal defamation laws creating chilling effect', frequency: 'Systemic' },
    ],

    // Legal Framework
    legalFramework: [
      { article: 'Article 76', law: '1980 Press and Publishing Act', prohibition: 'Blemishing president of Arab/Islamic/friendly state', penalty: 'Criminal' },
      { article: 'Article 77', law: '1980 Press and Publishing Act', prohibition: 'Defamation of Arabs and their civilization', penalty: 'Criminal' },
      { article: 'Article 81', law: '1980 Press and Publishing Act', prohibition: 'News causing damage to national economy', penalty: 'Criminal' },
      { article: 'Article 84', law: '1980 Press and Publishing Act', prohibition: 'Maligning public official', penalty: 'Criminal' },
      { article: 'Article 17', law: 'Federal Decree Law No. 55/2023', prohibition: '20 mandatory content standards', penalty: 'Up to AED 2 million fine' },
    ],

    // Content Standards (Federal Decree Law No. 55/2023)
    contentStandards: [
      { standardNumber: 1, requirement: 'Respect Divine Entity, Islamic beliefs, monotheistic religions', scope: 'Mandatory' },
      { standardNumber: 2, requirement: 'Protect UAE sovereignty, symbols, institutions', scope: 'Mandatory' },
      { standardNumber: 3, requirement: 'Align with local and international policies', scope: 'Mandatory' },
      { standardNumber: 4, requirement: 'Uphold national identity and societal values', scope: 'Mandatory' },
      { standardNumber: 5, requirement: 'Avoid actions harmful to foreign relations', scope: 'Mandatory' },
      { standardNumber: 6, requirement: 'Refrain from spreading rumors or false news', scope: 'Mandatory' },
      { standardNumber: 7, requirement: 'Respect privacy, don\'t compromise national unity', scope: 'Mandatory' },
      { standardNumber: 8, requirement: 'Don\'t incite violence, hatred, terrorism, divisions', scope: 'Mandatory' },
    ],

    // Penalty Structure
    penaltyStructure: [
      { offense: 'First offense', fine: 'Up to Dh1 million (~$272,294)', additionalPenalties: 'Warning possible' },
      { offense: 'Repeat offense', fine: 'Up to Dh2 million', additionalPenalties: 'Temporary closure up to 6 months' },
      { offense: 'Severe violations', fine: 'N/A', additionalPenalties: 'Permanent closure possible' },
    ],

    // Regulatory Bodies
    regulatoryBodies: [
      { body: 'National Media Authority', level: 'Federal', function: 'Consolidated regulator (Dec 2025), replaces UAE Media Council, NMO, WAM' },
      { body: 'UAE Media Council', level: 'Federal', function: 'Content standards, licensing (pre-Dec 2025)' },
      { body: 'National Media Office', level: 'Federal', function: 'Policy coordination (pre-Dec 2025)' },
      { body: 'Media Regulatory Office', level: 'Federal', function: 'Content oversight' },
      { body: 'TDRA', level: 'Federal', function: 'Internet blocking (IAM Policy)' },
      { body: 'Abu Dhabi Media Office', level: 'Local', function: 'Abu Dhabi coordination' },
      { body: 'Creative Media Authority', level: 'Local (Abu Dhabi)', function: 'Abu Dhabi creative sector' },
      { body: 'Dubai Media Office', level: 'Local', function: 'Dubai coordination' },
      { body: 'Sharjah Govt Media Bureau', level: 'Local', function: 'Sharjah coordination' },
    ],

    // Audience Trust Metrics
    audienceTrustMetrics: [
      { source: 'National news media (Emiratis)', trustLevel: '77%', trend: 'Stable', sample: 'Mideastmedia 2019' },
      { source: 'Social media news (Emiratis)', trustLevel: '75%', trend: '+18 points since 2017', sample: 'Mideastmedia 2019' },
      { source: 'TV channels (high trust)', trustLevel: '59%', trend: 'Stable', sample: 'Mideastmedia 2019' },
      { source: 'TV channels (average trust)', trustLevel: '35%', trend: 'Stable', sample: 'Mideastmedia 2019' },
      { source: 'TV channels (low trust)', trustLevel: '6%', trend: 'Stable', sample: 'Mideastmedia 2019' },
    ],

    // Coverage Bias Perceptions
    coverageBiasPerceptions: [
      { metric: 'Emiratis believing media can report without interference', value: '55%', sample: 'National survey', sentiment: 'Neutral/Mixed' },
      { metric: 'Emiratis calling news media credible', value: '77%', sample: 'Regional comparison', sentiment: 'High Trust (highest in region)' },
      { metric: 'Tunisians calling news media credible', value: '34%', sample: 'Regional comparison', sentiment: 'Low Trust' },
      { metric: 'World Press Freedom Index 2024', value: '164/180', sample: 'Global', sentiment: 'Critical (5th worst in Arab world)' },
    ],

    // Crisis Coverage Metrics (April 2026)
    crisisCoverageMetrics: {
      potentialImpressions: '158.9 million',
      digitalReach: '8+ million',
      websiteVisits: '8+ million',
      engagements: '140,000+',
      positiveMediaSentiment: '85%',
      positivePublicSentiment: '65%',
    },

    // Blocked Services
    blockedServices: [
      { service: 'WhatsApp calls', status: 'Blocked' },
      { service: 'Viber', status: 'Blocked' },
      { service: 'FaceTime', status: 'Blocked' },
      { service: 'Signal', status: 'Blocked' },
      { service: 'Encrypted apps', status: 'Blocked' },
      { service: 'LGBT+ websites', status: 'Blocked' },
      { service: 'Al Jazeera', status: 'Blocked' },
      { service: 'Political blogs', status: 'Blocked' },
      { service: 'Atheist content', status: 'Blocked' },
    ],

    // Spyware Programs
    spywarePrograms: [
      { program: 'Pegasus', operator: 'NSO Group', target: 'Journalists, activists' },
      { program: 'Project Raven', operator: 'Former US intelligence agents (UAE-enabled)', target: 'Activists, hackers' },
      { program: 'QuaDream', operator: 'Unknown', target: 'UAE servers discovered' },
    ],

    // Source Credibility Matrix
    sourceCredibilityMatrix: [
      { source: 'RSF', tier: 1, reliability: 'Very High', dataType: 'Primary research, annual index' },
      { source: 'Freedom House', tier: 1, reliability: 'Very High', dataType: 'Annual assessments' },
      { source: 'HRW', tier: 1, reliability: 'Very High', dataType: 'Investigative journalism' },
      { source: 'Mideastmedia.org', tier: 1, reliability: 'High', dataType: 'Primary survey data' },
      { source: 'Gulf News', tier: 2, reliability: 'Medium-High', dataType: 'Primary journalism' },
      { source: 'AP News', tier: 1, reliability: 'Very High', dataType: 'Primary journalism' },
      { source: 'Al Jazeera', tier: 2, reliability: 'Medium-High', dataType: 'Regional broadcaster' },
      { source: 'YouGov', tier: 2, reliability: 'Medium-High', dataType: 'Survey research' },
      { source: 'The National (UAE)', tier: 3, reliability: 'Medium', dataType: 'Local media' },
      { source: 'Charles Russell Speechlys', tier: 2, reliability: 'Medium-High', dataType: 'Legal analysis' },
    ],

    // Sentiment Analysis by Topic
    sentimentAnalysis: [
      { topic: 'Press Freedom', source: 'RSF', sentiment: 'Highly Critical', score: -0.85 },
      { topic: 'Press Freedom', source: 'Freedom House', sentiment: 'Highly Critical', score: -0.80 },
      { topic: 'Press Freedom', source: 'HRW', sentiment: 'Highly Critical', score: -0.82 },
      { topic: 'Press Freedom', source: 'UAE Government', sentiment: 'Positive', score: 0.90 },
      { topic: 'Media Credibility', source: 'Mideastmedia.org (Emiratis)', sentiment: 'Positive', score: 0.77 },
      { topic: 'Media Credibility', source: 'International observers', sentiment: 'Critical', score: -0.75 },
      { topic: 'Media Credibility', source: 'YouGov (AI trust)', sentiment: 'Neutral positive', score: 0.62 },
      { topic: 'Crisis Coverage (April 2026)', source: 'Gulf News', sentiment: 'Highly Positive', score: 0.85 },
      { topic: 'Crisis Coverage (April 2026)', source: 'Dubai Media Office', sentiment: 'Positive', score: 0.90 },
      { topic: 'Crisis Coverage (April 2026)', source: 'Martin Plaut', sentiment: 'Critical', score: -0.70 },
      { topic: 'Journalist Safety', source: 'HRW', sentiment: 'Highly Critical', score: -0.88 },
      { topic: 'Journalist Safety', source: 'RSF', sentiment: 'Highly Critical', score: -0.85 },
    ],

    // UAE Relevance Assessment
    uaeRelevanceAssessment: [
      {
        tier: 'Critical Relevance',
        items: [
          'RSF World Press Freedom Index 2024: 164/180',
          'Freedom House Internet Freedom: 30/100',
          'Al-Roeya mass firing incident',
          '300,000+ surveillance cameras',
          '91% fake Twitter accounts',
          'Human Rights Watch self-censorship findings',
          '109 arrests during Iran strikes',
          'National Media Authority consolidation',
        ],
      },
      {
        tier: 'High Relevance',
        items: [
          '77% Emirati media trust',
          'Federal Decree Law No. 55/2023',
          'AED 2 million maximum fine',
          '20 content standards',
          'Foreign reporter permits (300 AED)',
          'COP28 restrictions',
          'twofour54 operations',
          'NSO Group Pegasus spyware',
        ],
      },
      {
        tier: 'Medium Relevance',
        items: [
          '62% AI news trust (YouGov)',
          'Regional media comparisons',
          '158.9 million crisis coverage impressions',
          'CARMA Reputation Report',
          '75% social media news trust',
        ],
      },
    ],

    // Summary Data Points
    summaryDataPoints: [
      { category: 'Press Freedom', metric: 'World Press Freedom Index 2024', value: '164/180', source: 'RSF/Watanserb', extractionStatus: 'Verified' },
      { category: 'Press Freedom', metric: 'RSF Narrative', value: '"Government prevents independent media"', source: 'RSF', extractionStatus: 'Verified' },
      { category: 'Internet Freedom', metric: 'Freedom House Score', value: '30/100', source: 'Freedom House 2023', extractionStatus: 'Verified' },
      { category: 'Internet Freedom', metric: 'Status', value: 'Not Free', source: 'Freedom House 2023', extractionStatus: 'Verified' },
      { category: 'Media Trust', metric: 'Emirati media trust', value: '77%', source: 'Mideastmedia.org', extractionStatus: 'Verified' },
      { category: 'Media Trust', metric: 'Social media news trust', value: '75%', source: 'Mideastmedia.org', extractionStatus: 'Verified' },
      { category: 'Propaganda', metric: 'Fake Twitter accounts (pro-MBZ)', value: '91%', source: 'Freedom House', extractionStatus: 'Verified' },
      { category: 'Surveillance', metric: 'Dubai cameras', value: '300,000+', source: 'HRW', extractionStatus: 'Verified' },
      { category: 'Fines', metric: 'Maximum media fine', value: 'AED 2 million', source: 'Charles Russell Speechlys', extractionStatus: 'Verified' },
      { category: 'Firings', metric: 'Al-Roeya jobs lost', value: '60-90', source: 'AP/Al Jazeera', extractionStatus: 'Verified' },
      { category: 'Crisis Coverage', metric: 'Potential impressions', value: '158.9 million', source: 'Gulf News', extractionStatus: 'Verified' },
      { category: 'Crisis Coverage', metric: 'Positive media sentiment', value: '85%', source: 'Gulf News', extractionStatus: 'Verified' },
      { category: 'Arrests', metric: 'Iran strikes social media arrests', value: '109', source: 'The National/Skyline', extractionStatus: 'Verified' },
    ],

    // URL Content Summaries
    urlContentSummaries: [
      { url: 'https://rsf.org/en/country/united-arab-emirates', title: 'RSF UAE Country Page', content: 'Index ranking 164/180, narrative assessment', credibility: 'Tier 1' },
      { url: 'https://www.hrw.org/news/2021/10/01/uae-tolerance-narrative-sham-0', title: 'HRW UAE Tolerance Narrative', content: '300,000+ cameras, Oyoon AI surveillance, journalist self-censorship', credibility: 'Tier 1' },
      { url: 'https://www.mideastmedia.org/survey/2019/chapter/bias-and-credibility/', title: 'Mideastmedia.org Survey', content: '77% Emirati trust, 75% social media trust, regional comparisons', credibility: 'Tier 1' },
      { url: 'https://gulfnews.com/uae/how-media-in-dubai-emerged-as-a-stabilizing-force-during-the-us-israeli-war-on-iran-1.500507036', title: 'Gulf News Crisis Coverage', content: '158.9 million impressions, 8+ million digital reach, 85% positive sentiment', credibility: 'Tier 1' },
      { url: 'https://www.aljazeera.com/news/2022/9/13/dubai-newspaper-that-ran-story-on-high-fuel-prices-dissolved', title: 'Al Jazeera Al-Roeya Closure', content: 'Al-Roeya founded 2012, 90 employees, final headline data', credibility: 'Tier 2' },
    ],

    // Enrichment metadata
    enrichmentDate: '2026-04-28',
    urlsAnalyzed: 27,
    urlsSuccessfullyFetched: 19,
    urlsBlockedFailed: 8,
    dataPointsExtracted: 100,
    structuredTablesCreated: 25,
    sentimentAnalysesCompleted: 4,
    sourceCredibilityAssessed: 19,
  },
}

// ============================================================================
// 11-2: Self-Reference (Surveillance & State Monitoring Infrastructure)
// ============================================================================

export const selfReferenceData: VerificationResult = {
  id: 'ver-11-2',
  claim:
    'UAE operates transparent, rights-respecting surveillance systems focused solely on public safety',
  verdict: 'false',
  accuracyScore: 12,
  sources: [
    { name: 'Amnesty International', tier: 1, reliability: 'high' },
    { name: 'Human Rights Watch', tier: 1, reliability: 'high' },
    { name: 'Al Jazeera Investigative Unit', tier: 1, reliability: 'high' },
    { name: 'The Intercept', tier: 2, reliability: 'high' },
    { name: 'Reuters', tier: 2, reliability: 'high' },
    { name: 'Oxford University Tech & Justice BSG', tier: 1, reliability: 'high' },
    { name: 'European Parliament', tier: 1, reliability: 'high' },
    { name: 'Presight AI (Official PR)', tier: 3, reliability: 'low' },
  ],
  echoChamberRisk: {
    platform: 'State Media + Official Channels',
    strength: 'critical',
    primaryEchos: [
      'Smart city safety narrative',
      'AI efficiency and innovation messaging',
      'Official sources unchallenged domestically',
    ],
    riskLevel: 'critical',
  },
  omissionData: {
    omittedFacts: [
      'Project Raven/DREAD: $34M annual budget, 40+ US contractors, ex-NSA operatives conducting cyber-espionage globally',
      'Pegasus Spyware: 50,000+ phone numbers in global leak; UAE-linked UK phones — hundreds; Ahmed Mansoor sentenced 10 years for Pegasus-related activity',
      'ToTok removed Dec 2019 — classified as "spy tool" by US officials; linked to Breej Holding/DarkMatter',
      'DarkMatter — Abu Dhabi headquartered company with former IDF personnel paid up to $1M/year',
      'Oyoon AI: 300,000+ cameras in Dubai with real-time facial AND behavioral recognition',
      'COP28 surveillance: Amnesty International documented mass surveillance threats to rights during climate summit',
      'National Media Office + Presight AI: analyzing "billions of data points daily" with stated goal of narrative control',
      'SSD UAE app launched Feb 2026 for crowdsourced citizen reporting of "non-compliant" content',
    ],
    significance: 'critical',
    impact:
      'Surveillance infrastructure documented by multiple Tier 1 sources extends far beyond public safety into systematic domestic and foreign intelligence operations targeting journalists, activists, dissidents, and foreign officials',
  },
  keyFindings: [
    {
      finding: 'Oyoon Cameras (Dubai)',
      metric: '300,000+',
      source: 'ADHRB, HRW',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Project Raven Annual Budget',
      metric: '~$34 million',
      source: 'Al Jazeera, The Intercept',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Pegasus Global Phone Numbers in Leak',
      metric: '50,000+',
      source: 'The Guardian',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'AI Surveillance — Arrests via Oyoon (2018)',
      metric: '319 suspects',
      source: 'Oxford/BSG',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'National Media Office + Presight AI — Data Points Analyzed Daily',
      metric: 'Billions',
      source: 'Presight AI PR',
      tier: 3,
      alert: 'RED',
    },
    {
      finding: '2026 Iran Strikes — People Charged (Cybercrimes)',
      metric: '21+',
      source: 'CBS News',
      tier: 2,
      alert: 'RED',
    },
    {
      finding: 'ToTok — Classified as Spy Tool',
      metric: 'Confirmed',
      source: 'Forbes, NY Times',
      tier: 1,
      alert: 'RED',
    },
  ],
  credibility: {
    tier: 2,
    score: 22,
    sources: 8,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 97,
    level: 'critical',
    justification:
      'Documents state surveillance apparatus that directly enables suppression of press freedom, targeting of journalists, and cross-border intelligence operations',
  },
  alertLevel: 'RED',
  sources2: [
    { name: 'Al Jazeera — Project Raven Investigation', url: 'https://www.aljazeera.com', tier: 1, date: '2019-12-11' },
    { name: 'The Guardian — Pegasus Project', url: 'https://www.theguardian.com', tier: 1, date: '2021-07-21' },
    { name: 'Amnesty International — COP28 Surveillance', url: 'https://www.amnesty.org', tier: 1, date: '2023-11' },
    { name: 'Human Rights Watch — Mass Surveillance', url: 'https://www.hrw.org', tier: 1, date: '2023-11-30' },
    { name: 'Reuters — NSO Contract Terminated', url: 'https://www.reuters.com', tier: 2, date: '2021-10-06' },
    { name: 'Oxford BSG — UAE AI Surveillance', url: 'https://www.techandjustice.bsg.ox.ac.uk', tier: 1, date: '2024' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// 11-3: Comparative Ranking (Global Indices) - FULL MD CONTENT
// ============================================================================

// Extended interface for ranking indices data
export interface RankingIndex {
  id: string
  name: string
  shortName: string
  publisher: string
  tier: number
  year: number
  rank: number
  totalCountries: number
  score: number | string
  maxScore: number | string
  unit: string
  sentiment: 'positive' | 'negative' | 'neutral' | 'mixed' | 'highly-positive' | 'highly-negative'
  category: 'economic' | 'freedom' | 'governance' | 'social' | 'security' | 'development'
  regionalRank?: number
  regionalContext?: string
  keyMetrics?: Record<string, string | number>
  trend?: string
  methodology?: string
  sourceUrl?: string
}

// All 19+ ranking indices from MD file
export const allRankingIndices: RankingIndex[] = [
  // 1. CORRUPTION PERCEPTIONS INDEX
  {
    id: 'cpi-2024',
    name: 'Corruption Perceptions Index',
    shortName: 'CPI',
    publisher: 'Transparency International',
    tier: 1,
    year: 2024,
    rank: 21,
    totalCountries: 182,
    score: 69,
    maxScore: 100,
    unit: '/100',
    sentiment: 'positive',
    category: 'governance',
    trend: '+1 position from 22nd',
    methodology: '13 data sources, scores 182 countries, range 0-100',
    sourceUrl: 'https://www.transparency.org/en/countries/united-arab-emirates',
    keyMetrics: { 'Previous Year': 68, 'MENA Position': 'Competitive' },
  },
  // 2. PRESS FREEDOM INDEX
  {
    id: 'press-freedom-2025',
    name: 'World Press Freedom Index',
    shortName: 'Press Freedom',
    publisher: 'Reporters Without Borders (RSF)',
    tier: 1,
    year: 2025,
    rank: 160,
    totalCountries: 180,
    score: 26.91,
    maxScore: 100,
    unit: '/100',
    sentiment: 'highly-negative',
    category: 'freedom',
    trend: '-2 positions (declining 5+ years)',
    methodology: 'Composite score of pluralism, media independence, environment, legal framework, safety',
    sourceUrl: 'https://rsf.org/en/country/united-arab-emirates',
    keyMetrics: { '2024 Score': 30.62, 'Status': 'Not Free', 'Previous Rank': 158 },
  },
  // 3. HUMAN DEVELOPMENT INDEX
  {
    id: 'hdi-2025',
    name: 'Human Development Index',
    shortName: 'HDI',
    publisher: 'UNDP',
    tier: 0,
    year: 2025,
    rank: 15,
    totalCountries: 193,
    score: 0.94,
    maxScore: 1.0,
    unit: '',
    sentiment: 'highly-positive',
    category: 'development',
    regionalRank: 1,
    regionalContext: '1st in Arab world',
    methodology: 'Life expectancy, education, GNI per capita',
    sourceUrl: 'https://hdr.undp.org/data-center/specific-country-data',
    keyMetrics: {
      'Life Expectancy': '82.9 years',
      'Expected Schooling': '15.6 years',
      'Mean Schooling': '13.0 years',
      'GNI per Capita': '$71,142',
      'Rank Change': '+11 positions',
    },
  },
  // 4. GLOBAL INNOVATION INDEX
  {
    id: 'gii-2025',
    name: 'Global Innovation Index',
    shortName: 'GII',
    publisher: 'WIPO',
    tier: 0,
    year: 2025,
    rank: 47,
    totalCountries: 139,
    score: 0,
    maxScore: 0,
    unit: '',
    sentiment: 'mixed',
    category: 'economic',
    methodology: 'Innovation input and output sub-indices',
    sourceUrl: 'https://www.wipo.int/gii-ranking/en/united-arab-emirates',
    keyMetrics: {
      'Input Sub-Index Rank': 14,
      'Output Sub-Index Rank': 47,
      'Knowledge & Technology Outputs': '57th',
      'Creative Outputs': '35th',
      'Business Sophistication': '28th',
    },
  },
  // 5. WORLD COMPETITIVENESS INDEX
  {
    id: 'competitiveness-2025',
    name: 'World Competitiveness Index',
    shortName: 'Competitiveness',
    publisher: 'IMD',
    tier: 1,
    year: 2025,
    rank: 5,
    totalCountries: 69,
    score: 96.09,
    maxScore: 100,
    unit: '/100',
    sentiment: 'highly-positive',
    category: 'economic',
    methodology: '4 main factors, 20 sub-factors, 341 criteria across 69 countries',
    sourceUrl: 'https://u.ae/en/about-the-uae/uae-competitiveness/imd-world-competitiveness-yearbook',
    keyMetrics: {
      'Economic Performance': '2nd',
      'Government Efficiency': '4th',
      'Business Efficiency': '3rd',
      'Infrastructure': '23rd',
      'Employment': '1st',
      'Labour Market': '1st',
      'International Trade': '2nd',
      'Tax Policy': '3rd',
    },
  },
  // 6. GLOBAL SOFT POWER INDEX
  {
    id: 'soft-power-2025',
    name: 'Global Soft Power Index',
    shortName: 'Soft Power',
    publisher: 'Brand Finance',
    tier: 1,
    year: 2025,
    rank: 10,
    totalCountries: 193,
    score: 1.223,
    maxScore: 0,
    unit: '$ trillion brand value',
    sentiment: 'highly-positive',
    category: 'economic',
    methodology: 'Insights from 173,000 business leaders, policymakers, civil society figures',
    sourceUrl: 'https://gulfnews.com/uae/government/uae-ranks-10th-in-global-soft-power-index-2025-1.500042182',
    keyMetrics: {
      'Nation Brand Value': '$1.223 trillion',
      'Future Growth Potential': '4th',
      'Generous': '4th',
      'Strong Economy': '7th',
      'Global Influence': '8th',
      'Advanced Technology': '9th',
      'Space Exploration': '10th',
    },
  },
  // 7. WORLD HAPPINESS REPORT
  {
    id: 'happiness-2025',
    name: 'World Happiness Report',
    shortName: 'Happiness',
    publisher: 'UN SDSN',
    tier: 0,
    year: 2025,
    rank: 21,
    totalCountries: 147,
    score: 6.821,
    maxScore: 10,
    unit: '/10',
    sentiment: 'positive',
    category: 'social',
    regionalRank: 1,
    regionalContext: '1st in Arab world (above UK, US, Germany, France, Singapore)',
    methodology: 'GDP per capita, social support, healthy life expectancy, freedom, generosity, corruption',
    sourceUrl: 'https://www.khaleejtimes.com/uae/uae-rank-global-happiness-index-2025',
    keyMetrics: {
      '2024 Score': 6.759,
      '2023 Score': 6.733,
      '2022 Rank': 26,
      'Donating Money Rank': '16th',
      'Volunteering Time Rank': '19th',
      'Returning Lost Wallet Rank': '12th',
    },
  },
  // 8. GLOBAL PEACE INDEX
  {
    id: 'gpi-2025',
    name: 'Global Peace Index',
    shortName: 'GPI',
    publisher: 'Institute for Economics & Peace',
    tier: 1,
    year: 2025,
    rank: 52,
    totalCountries: 163,
    score: 1.812,
    maxScore: 3.5,
    unit: '',
    sentiment: 'neutral',
    category: 'security',
    regionalRank: 4,
    regionalContext: '4th in Arab region (Qatar, Kuwait, Oman ahead)',
    methodology: 'Safety, security, ongoing conflict, militarization',
    sourceUrl: 'https://www.visionofhumanity.org/maps/',
    keyMetrics: {
      'Arab Region Ranking': '4th (Qatar, Kuwait, Oman, UAE, Saudi, Bahrain)',
      'Regional Countries Ahead': 'Qatar, Kuwait, Oman',
    },
  },
  // 9. GLOBAL GENDER GAP INDEX
  {
    id: 'gender-gap-2025',
    name: 'Global Gender Gap Index',
    shortName: 'Gender Gap',
    publisher: 'World Economic Forum',
    tier: 0,
    year: 2025,
    rank: 69,
    totalCountries: 146,
    score: 82.5,
    maxScore: 100,
    unit: '/100',
    sentiment: 'positive',
    category: 'social',
    regionalRank: 1,
    regionalContext: '1st in MENA',
    methodology: 'Economic participation, educational attainment, health, political empowerment',
    sourceUrl: 'https://gbc.gov.ae/uae-global-standing/',
    keyMetrics: {
      'Score Change 2019-2024': '+53.2 points (from 29.3)',
      'Economy Score': 0.996,
      'Education Score': 0.959,
      'Health Score': 0.372,
      'Politics Score': 0.572,
      'Legislative Reforms': '20+',
    },
  },
  // 10. FREEDOM IN THE WORLD
  {
    id: 'freedom-world-2024',
    name: 'Freedom in the World',
    shortName: 'Freedom House',
    publisher: 'Freedom House',
    tier: 1,
    year: 2024,
    rank: 0,
    totalCountries: 0,
    score: 18,
    maxScore: 100,
    unit: '/100',
    sentiment: 'highly-negative',
    category: 'freedom',
    methodology: 'Political rights (0-40) + civil liberties (0-60)',
    sourceUrl: 'https://freedomhouse.org/country/united-arab-emirates/freedom-world/2024',
    keyMetrics: {
      'Political Rights': '5/40',
      'Civil Liberties': '13/60',
      'Status': 'Not Free',
      'Internet Freedom': '28/100',
      'Population': '9,441,000',
    },
  },
  // 11. FREEDOM ON THE NET
  {
    id: 'freedom-net-2024',
    name: 'Freedom on the Net',
    shortName: 'Internet Freedom',
    publisher: 'Freedom House',
    tier: 1,
    year: 2024,
    rank: 0,
    totalCountries: 0,
    score: 30,
    maxScore: 100,
    unit: '/100',
    sentiment: 'highly-negative',
    category: 'freedom',
    trend: 'No change from previous year',
    methodology: 'Obstacles to access, limits on content, violations of user rights',
    sourceUrl: 'https://freedomhouse.org/country/united-arab-emirates/freedom-net/2024',
    keyMetrics: {
      'Obstacles to Access': '14/25',
      'Limits on Content': '9/35',
      'Violations of User Rights': '7/40',
      'Internet Penetration': '99%',
      '5G Network': 'World\'s fastest',
      'VoIP Blocked': 'WhatsApp, Viber, FaceTime, Discord',
      'Websites Blocked': '3,700+',
    },
  },
  // 12. DEMOCRACY INDEX
  {
    id: 'democracy-2024',
    name: 'Democracy Index',
    shortName: 'Democracy',
    publisher: 'Economist Intelligence Unit',
    tier: 1,
    year: 2024,
    rank: 119,
    totalCountries: 0,
    score: 3.07,
    maxScore: 10,
    unit: '/10',
    sentiment: 'highly-negative',
    category: 'governance',
    methodology: 'Electoral process, functioning of government, political participation, political culture, civil liberties',
    sourceUrl: 'https://www.eiu.com/n/campaigns/democracy-index-2024/',
    keyMetrics: {
      'Classification': 'Authoritarian regime',
      'Electoral Process': '0.00',
      'Functioning of Government': '2.50',
      'Political Participation': '2.22',
      'Political Culture': '3.13',
      'Civil Liberties': '3.53',
    },
  },
  // 13. FINANCIAL SECRECY INDEX
  {
    id: 'fsi-2025',
    name: 'Financial Secrecy Index',
    shortName: 'FSI',
    publisher: 'Tax Justice Network',
    tier: 2,
    year: 2025,
    rank: 79,
    totalCountries: 0,
    score: 617,
    maxScore: 0,
    unit: 'Haven Score',
    sentiment: 'neutral',
    category: 'governance',
    methodology: 'Jurisdictions most complicit in helping hide finances from rule of law',
    sourceUrl: 'https://fsi.taxjustice.net/full-list/',
    keyMetrics: {
      'Global Share': '0.20%',
      'Last Updated': 'June 3, 2025',
    },
  },
  // 14. SAFETY & SECURITY INDEX
  {
    id: 'safety-2026',
    name: 'Safety & Security Index',
    shortName: 'Safety',
    publisher: 'Numbeo',
    tier: 2,
    year: 2026,
    rank: 1,
    totalCountries: 147,
    score: 86.0,
    maxScore: 100,
    unit: 'Index',
    sentiment: 'highly-positive',
    category: 'security',
    methodology: 'User-contributed crime and safety data',
    sourceUrl: 'https://www.numbeo.com/crime/rankings_by_country.jsp?displayColumn=1',
    keyMetrics: {
      '2025 Score': 85.2,
      'Crime Index': 14.0,
      'Abu Dhabi Rank': '1st globally (88.2 safety)',
      'Dubai Rank': '5th globally',
      'Arab Region': '1st',
    },
  },
  // 15. E-GOVERNMENT DEVELOPMENT INDEX
  {
    id: 'egdi-2024',
    name: 'E-Government Development Index',
    shortName: 'EGDI',
    publisher: 'UN DESA',
    tier: 0,
    year: 2024,
    rank: 11,
    totalCountries: 193,
    score: 0.9533,
    maxScore: 1.0,
    unit: '',
    sentiment: 'highly-positive',
    category: 'governance',
    methodology: 'Online service delivery, telecommunication infrastructure, human capital',
    sourceUrl: 'https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/181-United-Arab-Emirates',
    keyMetrics: {
      'Rating Class': 'VHEGDI (Very High)',
      'Score Range': '0.75-1.00 (VHEGDI)',
    },
  },
  // 16. GLOBAL ENTREPRENEURSHIP INDEX
  {
    id: 'gem-2024',
    name: 'Global Entrepreneurship Monitor',
    shortName: 'GEM',
    publisher: 'GEM Consortium',
    tier: 1,
    year: 2024,
    rank: 1,
    totalCountries: 56,
    score: 0,
    maxScore: 0,
    unit: '',
    sentiment: 'highly-positive',
    category: 'economic',
    trend: '4th consecutive year at #1',
    methodology: 'National Entrepreneurship Context Index (NECI) across 56 economies',
    sourceUrl: 'https://www.moet.gov.ae/en/-/uae-ranks-first-globally-in-global-entrepreneurship-monitor-2024-2025-report-for-fourth-consecutive-year',
    keyMetrics: {
      'NECI Score': 'Top among 56 economies',
      'Regional Context': '1st among high-income countries (11 of 13 indicators)',
      'Investment': '$8.7 billion (Project of the 50)',
      'SME Goal': '1 million by 2031',
      'Entrepreneur Success Target': '30% to 50%',
    },
  },
  // 17. TRAVEL & TOURISM DEVELOPMENT INDEX
  {
    id: 'tourism-2024',
    name: 'Travel & Tourism Development Index',
    shortName: 'Tourism',
    publisher: 'World Economic Forum',
    tier: 1,
    year: 2024,
    rank: 0,
    totalCountries: 0,
    score: 0,
    maxScore: 0,
    unit: '',
    sentiment: 'positive',
    category: 'economic',
    methodology: 'Travel and tourism enabling factors, policy, infrastructure',
    sourceUrl: 'https://www.moei.gov.ae/en/media-center/news/28/5/2024/uae-ranks-5th-in-road-quality-9th-in-port-services-and-10th-in-public-transport-according-to',
    keyMetrics: {
      'Road Quality': '5th globally',
      'Port Services': '9th globally',
      'Public Transport': '10th globally',
      'Arab Region': '1st',
    },
  },
  // 18. QUALITY OF LIFE INDEX
  {
    id: 'qol-2026',
    name: 'Quality of Life Index',
    shortName: 'Quality of Life',
    publisher: 'Numbeo',
    tier: 2,
    year: 2026,
    rank: 22,
    totalCountries: 0,
    score: 175.5,
    maxScore: 0,
    unit: 'Index',
    sentiment: 'positive',
    category: 'social',
    regionalRank: 1,
    regionalContext: '1st in Arab world',
    methodology: 'Purchasing power, safety, health care, cost of living, property price, traffic, pollution, climate',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/rankings_by_country.jsp',
    keyMetrics: {
      'Purchasing Power Index': 131.9,
      'Safety Index': 86.0,
      'Health Care Index': 70.8,
      'Cost of Living Index': 55.2,
      'Property Price to Income': 7.4,
      'Traffic Commute Time': 36.0,
      'Pollution Index': 48.3,
      'Climate Index': 43.4,
    },
  },
  // 19. NETWORK READINESS INDEX
  {
    id: 'nri-2024',
    name: 'Network Readiness Index',
    shortName: 'NRI',
    publisher: 'Portulans Institute',
    tier: 1,
    year: 2024,
    rank: 1,
    totalCountries: 0,
    score: 0,
    maxScore: 0,
    unit: '',
    sentiment: 'highly-positive',
    category: 'development',
    methodology: 'Technology, people, governance, impact',
    sourceUrl: 'https://networkreadinessindex.org/',
    keyMetrics: {},
  },
]

// Indices grouped by sentiment category
export const indicesBySentiment: Record<string, RankingIndex[]> = {
  'highly-positive': allRankingIndices.filter(i => i.sentiment === 'highly-positive'),
  'positive': allRankingIndices.filter(i => i.sentiment === 'positive'),
  'mixed': allRankingIndices.filter(i => i.sentiment === 'mixed'),
  'neutral': allRankingIndices.filter(i => i.sentiment === 'neutral'),
  'negative': allRankingIndices.filter(i => i.sentiment === 'negative'),
  'highly-negative': allRankingIndices.filter(i => i.sentiment === 'highly-negative'),
}

// Indices grouped by category
export const indicesByCategory: Record<string, RankingIndex[]> = {
  'economic': allRankingIndices.filter(i => i.category === 'economic'),
  'freedom': allRankingIndices.filter(i => i.category === 'freedom'),
  'governance': allRankingIndices.filter(i => i.category === 'governance'),
  'social': allRankingIndices.filter(i => i.category === 'social'),
  'security': allRankingIndices.filter(i => i.category === 'security'),
  'development': allRankingIndices.filter(i => i.category === 'development'),
}

// Summary data for dashboard
export const rankingSummary = {
  totalIndices: allRankingIndices.length,
  positiveIndices: allRankingIndices.filter(i => ['positive', 'highly-positive'].includes(i.sentiment)).length,
  negativeIndices: allRankingIndices.filter(i => ['negative', 'highly-negative'].includes(i.sentiment)).length,
  neutralIndices: allRankingIndices.filter(i => ['neutral', 'mixed'].includes(i.sentiment)).length,
  topRank: Math.min(...allRankingIndices.filter(i => i.rank > 0).map(i => i.rank)),
  worstRank: Math.max(...allRankingIndices.filter(i => i.rank > 0).map(i => i.rank)),
  categories: ['economic', 'freedom', 'governance', 'social', 'security', 'development'] as const,
}

// GCC Comparison data
export const gccComparisonData = {
  totalArea: '>1 million sq miles',
  combinedPopulation: '>54 million',
  combinedGDP: '>$3.464 trillion',
  uaeMembershipSince: 'November 11, 1981',
  memberCountries: ['Saudi Arabia', 'United Arab Emirates', 'Oman', 'Kuwait', 'Qatar', 'Bahrain'],
  rankings: [
    { index: 'HDI (Regional)', uae: '1st', qatar: '4th', saudi: '2nd', kuwait: '-', oman: '-', bahrain: '3rd' },
    { index: 'Safety Index', uae: '1st', qatar: '2nd', saudi: '-', kuwait: '-', oman: '-', bahrain: '-' },
    { index: 'GDP per Capita', uae: '2nd', qatar: '1st', saudi: '3rd', kuwait: '5th', oman: '6th', bahrain: '4th' },
  ],
  gdpPerCapita: { uae: '$84,403', qatar: '$122,283' },
}

// Source credibility matrix
export const sourceCredibilityMatrix = [
  { tier: 0, description: 'Official UN/Government agencies', sources: ['UNDP', 'UN DESA', 'WIPO', 'UN SDSN'] },
  { tier: 1, description: 'Established international NGOs/research', sources: ['Transparency International', 'RSF', 'WEF', 'IMD', 'Freedom House', 'GEM Consortium', 'Brand Finance', 'IEP', 'EIU', 'BTI'] },
  { tier: 2, description: 'Crowdsourced/User-contributed platforms', sources: ['Numbeo', 'World Population Review'] },
]

// Sentiment analysis summary
export const sentimentAnalysisSummary = [
  { category: 'Economic/Commercial', indices: ['Competitiveness (#5)', 'GEM (#1)', 'Soft Power (#10)', 'Innovation (#47 input)'], overallSentiment: 'Highly Positive' },
  { category: 'Safety/Security', indices: ['Safety (#1)', 'Peace (#52)'], overallSentiment: 'Positive' },
  { category: 'Human Development', indices: ['HDI (#15)', 'Happiness (#21)', 'Gender Gap (#69)', 'Quality of Life (#22)'], overallSentiment: 'Positive' },
  { category: 'Freedom/Democracy', indices: ['Press Freedom (#160)', 'Freedom World (18/100)', 'Freedom Net (30/100)', 'Democracy (3.07)'], overallSentiment: 'Highly Negative' },
  { category: 'Governance', indices: ['CPI (#21)', 'EGDI (#11)', 'FSI (#79)'], overallSentiment: 'Mixed to Positive' },
]

// Original VerificationResult format for compatibility
export const comparativeRankingData: VerificationResult = {
  id: 'ver-11-3',
  claim:
    'UAE ranks among the world\'s best across governance, competitiveness, and quality of life indices while maintaining moderate standing on freedom metrics',
  verdict: 'partially-verified',
  accuracyScore: 72,
  sources: [
    { name: 'Transparency International CPI', tier: 0, reliability: 'high' },
    { name: 'RSF World Press Freedom Index', tier: 1, reliability: 'high' },
    { name: 'UNDP Human Development Report', tier: 0, reliability: 'high' },
    { name: 'WIPO Global Innovation Index', tier: 0, reliability: 'high' },
    { name: 'IMD World Competitiveness Yearbook', tier: 1, reliability: 'high' },
    { name: 'Brand Finance Soft Power Index', tier: 1, reliability: 'medium' },
    { name: 'UN SDSN World Happiness Report', tier: 0, reliability: 'high' },
    { name: 'IEP Global Peace Index', tier: 1, reliability: 'high' },
    { name: 'WEF Global Gender Gap Report', tier: 0, reliability: 'high' },
    { name: 'Freedom House Freedom in the World', tier: 1, reliability: 'high' },
    { name: 'Freedom House Freedom on the Net', tier: 1, reliability: 'high' },
    { name: 'EIU Democracy Index', tier: 1, reliability: 'high' },
    { name: 'Tax Justice Network Financial Secrecy Index', tier: 2, reliability: 'medium' },
    { name: 'Numbeo Safety Index', tier: 2, reliability: 'medium' },
    { name: 'GEM Consortium Global Entrepreneurship Monitor', tier: 1, reliability: 'high' },
    { name: 'BTI Transformation Index', tier: 1, reliability: 'high' },
  ],
  echoChamberRisk: {
    platform: 'UAE Government Communications',
    strength: 'high',
    primaryEchos: [
      'Selective promotion of positive indices (HDI #15, Competitiveness #5, Soft Power #10, Safety #1, GEM #1)',
      'Downplaying or omitting negative indices (Press Freedom #160, Freedom House 18/100, Democracy 3.07)',
      'Framing of government statistics as independent achievements',
      'Regional comparisons emphasize Arab leadership while deemphasizing global rankings',
    ],
    riskLevel: 'high',
  },
  omissionData: {
    omittedFacts: [
      'RSF World Press Freedom Index 2025: UAE ranked 160/180 (bottom 11% globally)',
      'Freedom House "Freedom in the World" 2024: UAE scores 18/100 — "Not Free"',
      'Freedom House "Freedom on the Net" 2024: Score 30/100 — internet freedom restricted',
      'Democracy Index: UAE scored 3.07/10, classified as "Authoritarian regime" (rank 119)',
      'Global Peace Index: UAE ranked 52nd of 163 — only 4th in Arab region behind Qatar, Kuwait, Oman',
      'Press freedom score declining for 5+ consecutive years',
      'BTI 2026 notes: "Media heavily restricted; criticism of government prohibited; journalists practice self-censorship"',
      'UAE ranks 69th in Global Gender Gap despite 1st in MENA — significant gender inequality remains',
    ],
    significance: 'critical',
    impact:
      'UAE selectively amplifies positive indices (competitiveness, happiness, soft power, safety, entrepreneurship) while obscuring severe freedom deficits that fundamentally contradict narrative of openness and reform',
  },
  keyFindings: [
    { finding: 'Corruption Perceptions Index 2024', metric: 'Rank 21/182, Score 69/100', source: 'Transparency International', tier: 0, alert: 'GREEN' },
    { finding: 'World Press Freedom Index 2025', metric: 'Rank 160/180 — "Not Free"', source: 'RSF', tier: 1, alert: 'RED' },
    { finding: 'Human Development Index 2025', metric: 'Rank 15/193, Score 0.940 — "Very High"', source: 'UNDP', tier: 0, alert: 'GREEN' },
    { finding: 'Global Innovation Index 2025', metric: 'Rank 47/139 (Input 14th, Output 47th)', source: 'WIPO', tier: 0, alert: 'YELLOW' },
    { finding: 'IMD World Competitiveness 2025', metric: 'Rank 5/69, Score 96.09/100', source: 'IMD', tier: 1, alert: 'GREEN' },
    { finding: 'Brand Finance Soft Power Index 2025', metric: 'Rank 10/193, Brand Value $1.223T', source: 'Brand Finance', tier: 1, alert: 'GREEN' },
    { finding: 'World Happiness Report 2025', metric: 'Rank 21/147, 1st in Arab world', source: 'UN SDSN', tier: 0, alert: 'GREEN' },
    { finding: 'Global Peace Index 2025', metric: 'Rank 52/163, 4th in Arab region', source: 'IEP', tier: 1, alert: 'YELLOW' },
    { finding: 'Freedom House "Freedom in the World" 2024', metric: '18/100 — "Not Free"', source: 'Freedom House', tier: 1, alert: 'RED' },
    { finding: 'Freedom House "Freedom on the Net" 2024', metric: '30/100 — "Not Free"', source: 'Freedom House', tier: 1, alert: 'RED' },
    { finding: 'Democracy Index 2024', metric: 'Score 3.07/10 — "Authoritarian"', source: 'EIU', tier: 1, alert: 'RED' },
    { finding: 'Global Gender Gap Index 2025', metric: 'Rank 69/146, 1st in MENA', source: 'WEF', tier: 0, alert: 'YELLOW' },
    { finding: 'Financial Secrecy Index 2025', metric: 'Rank 79, Haven Score 617', source: 'Tax Justice', tier: 2, alert: 'YELLOW' },
    { finding: 'Safety Index 2026', metric: 'Rank 1/147, Score 86.0', source: 'Numbeo', tier: 2, alert: 'GREEN' },
    { finding: 'E-Government Development Index 2024', metric: 'Rank 11/193, Score 0.9533', source: 'UN DESA', tier: 0, alert: 'GREEN' },
    { finding: 'GEM Entrepreneurship 2024/25', metric: 'Rank 1/56 — 4th consecutive year', source: 'GEM Consortium', tier: 1, alert: 'GREEN' },
    { finding: 'Quality of Life Index 2026', metric: 'Rank 22, 1st in Arab world', source: 'Numbeo', tier: 2, alert: 'GREEN' },
    { finding: 'Network Readiness Index 2024', metric: 'Rank 1 globally', source: 'Portulans', tier: 1, alert: 'GREEN' },
  ],
  credibility: {
    tier: 2,
    score: 72,
    sources: 16,
    lastVerified: '2026-04-28',
  },
  uaeRelevance: {
    score: 88,
    level: 'high',
    justification:
      'Global indices shape international reputation and investor confidence — UAE has strong incentive to selectively emphasize positive rankings while obscuring severe freedom deficits',
  },
  alertLevel: 'YELLOW',
  sources2: [
    { name: 'Transparency International — UAE CPI Profile', url: 'https://www.transparency.org/en/countries/united-arab-emirates', tier: 0, date: '2024' },
    { name: 'RSF — UAE Country Page', url: 'https://rsf.org/en/country/united-arab-emirates', tier: 1, date: '2025' },
    { name: 'UNDP Human Development Reports', url: 'https://hdr.undp.org/data-center/specific-country-data', tier: 0, date: '2025' },
    { name: 'WIPO GII Rankings', url: 'https://www.wipo.int/gii-ranking/en/united-arab-emirates', tier: 0, date: '2025' },
    { name: 'IMD World Competitiveness', url: 'https://u.ae/en/about-the-uae/uae-competitiveness/imd-world-competitiveness-yearbook', tier: 1, date: '2025' },
    { name: 'Brand Finance Soft Power Index 2025', url: 'https://gulfnews.com/uae/government/uae-ranks-10th-in-global-soft-power-index-2025', tier: 1, date: '2025' },
    { name: 'UN SDSN World Happiness Report', url: 'https://khaleejtimes.com/uae/uae-rank-global-happiness-index-2025', tier: 0, date: '2025' },
    { name: 'Freedom House — UAE Freedom on the Net 2024', url: 'https://freedomhouse.org/country/united-arab-emirates/freedom-net/2024', tier: 1, date: '2024' },
    { name: 'Freedom House — UAE Freedom in the World 2024', url: 'https://freedomhouse.org/country/united-arab-emirates/freedom-world/2024', tier: 1, date: '2024' },
    { name: 'EIU Democracy Index 2024', url: 'https://www.eiu.com/n/campaigns/democracy-index-2024/', tier: 1, date: '2024' },
    { name: 'Tax Justice Network Financial Secrecy Index', url: 'https://fsi.taxjustice.net/full-list/', tier: 2, date: '2025' },
    { name: 'Numbeo Safety Index 2026', url: 'https://www.numbeo.com/crime/rankings_by_country.jsp?displayColumn=1', tier: 2, date: '2026' },
    { name: 'UN Public Institutions — UAE EGDI', url: 'https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/181-United-Arab-Emirates', tier: 0, date: '2024' },
    { name: 'MOET — UAE ranks first in GEM 2024-2025', url: 'https://www.moet.gov.ae/en/-/uae-ranks-first-globally-in-global-entrepreneurship-monitor-2024-2025-report-for-fourth-consecutive-year', tier: 1, date: '2024' },
    { name: 'Numbeo Quality of Life Index', url: 'https://www.numbeo.com/quality-of-life/rankings_by_country.jsp', tier: 2, date: '2026' },
    { name: 'BTI Project — UAE Country Report 2026', url: 'https://bti-project.org/en/reports/country-report/ARE', tier: 1, date: '2026' },
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// 11-4: Statistical Datapoints (Official Statistics)
// ============================================================================

export const statisticalDatapointsData: VerificationResult = {
  id: 'ver-11-4',
  claim:
    'UAE publishes comprehensive, accurate official statistics across all sectors with high international transparency',
  verdict: 'partially-verified',
  accuracyScore: 68,
  sources: [
    { name: 'WHO', tier: 0, reliability: 'high' },
    { name: 'UNFPA', tier: 0, reliability: 'high' },
    { name: 'IMF', tier: 0, reliability: 'high' },
    { name: 'UAE Ministry of Finance', tier: 1, reliability: 'high' },
    { name: 'SCAD (Abu Dhabi Statistics)', tier: 1, reliability: 'high' },
    { name: 'Trading Economics', tier: 2, reliability: 'medium' },
    { name: 'Global Media Insight', tier: 2, reliability: 'medium' },
    { name: 'Wikipedia', tier: 3, reliability: 'low' },
  ],
  echoChamberRisk: {
    platform: 'Official UAE Government Channels',
    strength: 'medium',
    primaryEchos: [
      'Official statistics presented without independent verification',
      'Access restrictions to primary government databases (SCAD, FCSC — 403 errors)',
      'Alternative interpretations or methodological critiques rarely available domestically',
    ],
    riskLevel: 'medium',
  },
  omissionData: {
    omittedFacts: [
      'Multiple Tier-1 official UAE government statistical databases returned 403 errors or were inaccessible (SCAD, FCSC, Central Bank PDFs)',
      'World Bank data accessible only through intermediary aggregators (Trading Economics) — primary source blocked',
      'IMF 2026 projections returned 403 from imf.org directly',
      'Gini coefficient (2018): 26.0 — significant income inequality masked by aggregate GDP per capita figures',
      'Male:Female ratio: 175:100 — extreme gender imbalance in expat-dominated population',
      '88.5% expat population creates unique demographic distortion in official statistics',
      'Crime rate 0.47/100K (2021) — very low but partly reflects underreporting in authoritarian context',
    ],
    significance: 'major',
    impact:
      'While headline statistics are broadly accurate, access restrictions to primary sources and demographic distortions limit independent verification and mask structural inequalities',
  },
  keyFindings: [
    {
      finding: 'UAE Population (2025-2026)',
      metric: '11.4-11.57 million',
      source: 'UNFPA, GMI Research',
      tier: 0,
      alert: 'GREEN',
    },
    {
      finding: 'GDP 2024 (Nominal)',
      metric: '$537.08B (World Bank via Trading Economics)',
      source: 'World Bank / Trading Economics',
      tier: 0,
      alert: 'GREEN',
    },
    {
      finding: 'GDP per capita (PPP) 2025',
      metric: '$82,000 (est.)',
      source: 'Wikipedia/Economy of UAE',
      tier: 3,
      alert: 'YELLOW',
    },
    {
      finding: 'Abu Dhabi GDP Q3 2025',
      metric: 'AED 325.7B, growth 7.7%',
      source: 'SCAD via LinkedIn',
      tier: 1,
      alert: 'GREEN',
    },
    {
      finding: 'Life Expectancy',
      metric: '78.3-82.9 years',
      source: 'WHO, OWID, UNFPA',
      tier: 0,
      alert: 'GREEN',
    },
    {
      finding: 'Unemployment Rate 2024',
      metric: '2.13%',
      source: 'Macrotrends',
      tier: 2,
      alert: 'GREEN',
    },
    {
      finding: 'Crime Rate 2021',
      metric: '0.47 per 100K — 32.87% decline',
      source: 'Macrotrends',
      tier: 2,
      alert: 'GREEN',
    },
    {
      finding: 'Safety Index (Numbeo)',
      metric: 'Ranked #1 globally',
      source: 'Numbeo (crowdsourced)',
      tier: 2,
      alert: 'YELLOW',
    },
    {
      finding: 'Federal Budget 2025',
      metric: 'AED 71.5B (social 39%, government affairs 35.7%)',
      source: 'UAE Ministry of Finance',
      tier: 1,
      alert: 'GREEN',
    },
    {
      finding: 'UAE-US Trade 2025',
      metric: '$39B (US surplus $19.5B, UAE US investments $1T+)',
      source: 'UAE Embassy/US-UAE Business Council',
      tier: 1,
      alert: 'GREEN',
    },
  ],
  credibility: {
    tier: 2,
    score: 68,
    sources: 8,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 75,
    level: 'high',
    justification:
      'Official statistics form the evidentiary basis for policy decisions, international comparisons, and reputation management — access limitations and demographic distortions affect reliability',
  },
  alertLevel: 'YELLOW',
  sources2: [
    { name: 'WHO — UAE Health Statistics', url: 'https://data.who.int/countries/784', tier: 0, date: '2021-2023' },
    { name: 'UNFPA — World Population UAE', url: 'https://www.unfpa.org/data/world-population/AE', tier: 0, date: '2025' },
    { name: 'Trading Economics — UAE GDP', url: 'https://tradingeconomics.com/united-arab-emirates/gdp', tier: 2, date: '2024-2025' },
    { name: 'Global Media Insight — UAE Population', url: 'https://www.globalmediainsight.com/blog/uae-population-statistics/', tier: 2, date: '2025-2026' },
    { name: 'UAE Ministry of Finance — Federal Budget', url: 'https://mof.gov.ae/', tier: 1, date: '2025' },
    { name: 'SCAD — Abu Dhabi GDP (LinkedIn)', url: 'https://www.linkedin.com/posts/adstatistics', tier: 1, date: 'Q3 2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// 11-4: ENRICHED STATISTICAL KPI DATA STRUCTURES
// ============================================================================

export interface StatisticalKPIs {
  populationKPIs: Array<{
    kpi: string
    value: string | number
    previousValue?: string | number
    change?: string
    source: string
    tier: TierLevel
    alert: AlertLevel
  }>
  economicKPIs: Array<{
    kpi: string
    value: string | number
    previousValue?: string | number
    change?: string
    source: string
    tier: TierLevel
    alert: AlertLevel
  }>
  tradeKPIs: Array<{
    kpi: string
    value: string | number
    previousValue?: string | number
    change?: string
    source: string
    tier: TierLevel
    alert: AlertLevel
  }>
  tourismKPIs: Array<{
    kpi: string
    value: string | number
    previousValue?: string | number
    change?: string
    source: string
    tier: TierLevel
    alert: AlertLevel
  }>
  safetyKPIs: Array<{
    kpi: string
    value: string | number
    previousValue?: string | number
    change?: string
    source: string
    tier: TierLevel
    alert: AlertLevel
  }>
  laborKPIs: Array<{
    kpi: string
    value: string | number
    previousValue?: string | number
    change?: string
    source: string
    tier: TierLevel
    alert: AlertLevel
  }>
  healthKPIs: Array<{
    kpi: string
    value: string | number
    previousValue?: string | number
    change?: string
    source: string
    tier: TierLevel
    alert: AlertLevel
  }>
  environmentKPIs: Array<{
    kpi: string
    value: string | number
    previousValue?: string | number
    change?: string
    source: string
    tier: TierLevel
    alert: AlertLevel
  }>
  financeKPIs: Array<{
    kpi: string
    value: string | number
    previousValue?: string | number
    change?: string
    source: string
    tier: TierLevel
    alert: AlertLevel
  }>
}

export const statisticalKPIs: StatisticalKPIs = {
  populationKPIs: [
    { kpi: 'Total Population (2026)', value: '11.57 million', source: 'GMI Research', tier: 2, alert: 'GREEN' },
    { kpi: 'Expat Ratio', value: '88.5%', source: 'GMI Research', tier: 2, alert: 'GREEN' },
    { kpi: 'Urban Population', value: '88.3%', source: 'GMI Research', tier: 2, alert: 'GREEN' },
    { kpi: 'Median Age', value: '31.6 years', source: 'GMI Research', tier: 2, alert: 'GREEN' },
    { kpi: 'Literacy Rate', value: '98%', source: 'GMI Research', tier: 2, alert: 'GREEN' },
    { kpi: 'Male:Female Ratio', value: '175:100', source: 'GMI Research', tier: 2, alert: 'YELLOW' },
    { kpi: 'Abu Dhabi Population (2024)', value: '4,135,985', change: '+7.5%', source: 'SCAD', tier: 1, alert: 'GREEN' },
    { kpi: 'Population Density', value: '138 per sq km', source: 'GMI Research', tier: 2, alert: 'GREEN' },
  ],
  economicKPIs: [
    { kpi: 'GDP 2024 (Nominal)', value: '$537.08B', previousValue: '$504B', change: '+3.5%', source: 'World Bank/Trading Economics', tier: 0, alert: 'GREEN' },
    { kpi: 'GDP 2025 (est.)', value: '$569.1B', change: '+5.9%', source: 'Wikipedia', tier: 3, alert: 'GREEN' },
    { kpi: 'GDP per capita (nominal)', value: '$51,290', source: 'Wikipedia', tier: 3, alert: 'GREEN' },
    { kpi: 'GDP per capita (PPP)', value: '$82,000', source: 'Wikipedia', tier: 3, alert: 'YELLOW' },
    { kpi: 'GDP Growth 2025 (est.)', value: '5.6%', change: '+2.2pp', source: 'Trading Economics', tier: 2, alert: 'GREEN' },
    { kpi: 'Abu Dhabi GDP Q3 2025', value: 'AED 325.7B', change: '7.7%', source: 'SCAD via LinkedIn', tier: 1, alert: 'GREEN' },
    { kpi: 'Dubai GDP 9M 2025', value: 'AED 355B', change: '4.7%', source: 'Dubai DMoF', tier: 1, alert: 'GREEN' },
    { kpi: 'Inflation 2023', value: '1.62%', source: 'Wikipedia', tier: 3, alert: 'GREEN' },
    { kpi: 'HDI 2023', value: '0.940', source: 'Wikipedia', tier: 3, alert: 'GREEN' },
    { kpi: 'Credit Rating (S&P/Moody/Fitch)', value: 'AA/Aa2/AA', source: 'Wikipedia', tier: 3, alert: 'GREEN' },
  ],
  tradeKPIs: [
    { kpi: 'Total Foreign Trade 2024', value: '$1.424T', change: '+49%', source: 'AGBI', tier: 2, alert: 'GREEN' },
    { kpi: 'Trade Surplus 2024', value: 'AED 492B', change: '-10.3%', source: 'AGBI', tier: 2, alert: 'YELLOW' },
    { kpi: 'Non-Oil Trade', value: 'AED 2.8T+', change: '+13.6%', source: 'AGBI', tier: 2, alert: 'GREEN' },
    { kpi: 'UAE-US Bilateral Trade', value: '$39B', source: 'US-UAE Business Council', tier: 1, alert: 'GREEN' },
    { kpi: 'US Trade Surplus with UAE', value: '$19.5B', source: 'US-UAE Business Council', tier: 1, alert: 'GREEN' },
    { kpi: 'UAE Investments in US', value: '$1T+', source: 'US-UAE Business Council', tier: 1, alert: 'GREEN' },
    { kpi: 'Top Export Partner', value: 'India (14.2%)', source: 'Wikipedia', tier: 3, alert: 'GREEN' },
    { kpi: 'Top Import Partner', value: 'China (17.3%)', source: 'Wikipedia', tier: 3, alert: 'GREEN' },
  ],
  tourismKPIs: [
    { kpi: 'Dubai Visitors 2025', value: '19.59M', previousValue: '18.72M', change: '+5%', source: 'Gulf News', tier: 2, alert: 'GREEN' },
    { kpi: 'Hotel Occupancy Rate', value: '80.7%', previousValue: '78.2%', change: '+2.5pp', source: 'Gulf News', tier: 2, alert: 'GREEN' },
    { kpi: 'RevPAR Growth', value: '+11%', source: 'Gulf News', tier: 2, alert: 'GREEN' },
    { kpi: 'Average Daily Rate', value: 'AED 579', previousValue: 'AED 538', change: '+8%', source: 'Gulf News', tier: 2, alert: 'GREEN' },
    { kpi: 'Dubai Airport Passengers 2024', value: '92.3M', source: 'GMI', tier: 2, alert: 'GREEN' },
    { kpi: 'Tourism GDP Contribution', value: 'AED 167B (9%)', source: 'Ministry of Economy', tier: 1, alert: 'GREEN' },
    { kpi: 'Hotel Guests', value: '25.2M', source: 'Ministry of Economy', tier: 1, alert: 'GREEN' },
    { kpi: 'Tourism Revenue 2025', value: 'AED 257.3B', source: 'Ministry of Economy', tier: 1, alert: 'GREEN' },
  ],
  safetyKPIs: [
    { kpi: 'Global Safety Index', value: '85.2 (#1)', source: 'Numbeo', tier: 2, alert: 'GREEN' },
    { kpi: 'Crime Rate 2021', value: '0.47 per 100K', change: '-32.87%', source: 'Macrotrends', tier: 2, alert: 'GREEN' },
    { kpi: 'Homicide Rate', value: '2.6 per 100K', source: 'UNODC/Wikipedia', tier: 3, alert: 'GREEN' },
    { kpi: 'Abu Dhabi Crime Index', value: '11.2 (Safest)', source: 'Numbeo', tier: 2, alert: 'GREEN' },
    { kpi: 'Trust in Police', value: '92%', source: 'Gallup', tier: 2, alert: 'GREEN' },
    { kpi: 'MENA Cyberattack Share', value: '12%', source: 'CPX', tier: 2, alert: 'YELLOW' },
    { kpi: 'Cyber Incident Cost', value: '$2.9M', source: 'CPX', tier: 2, alert: 'YELLOW' },
    { kpi: 'Cyberattacks Blocked Daily', value: '200,000+', source: 'CPX', tier: 2, alert: 'YELLOW' },
  ],
  laborKPIs: [
    { kpi: 'Unemployment Rate 2024', value: '2.13%', previousValue: '2.15%', source: 'Macrotrends', tier: 2, alert: 'GREEN' },
    { kpi: 'Unemployment Rate 2025', value: '2.17%', source: 'Statbase', tier: 2, alert: 'GREEN' },
    { kpi: 'Labor Force 2023', value: '6,668,172', source: 'Wikipedia', tier: 3, alert: 'GREEN' },
    { kpi: 'Workforce Expansion (Abu Dhabi)', value: '+9.1%', source: 'SCAD', tier: 1, alert: 'GREEN' },
  ],
  healthKPIs: [
    { kpi: 'Life Expectancy', value: '82.9 years', source: 'Our World in Data', tier: 0, alert: 'GREEN' },
    { kpi: 'Male Life Expectancy', value: '82 years', source: 'UNFPA', tier: 0, alert: 'GREEN' },
    { kpi: 'Female Life Expectancy', value: '84 years', source: 'UNFPA', tier: 0, alert: 'GREEN' },
    { kpi: 'Maternal Mortality', value: '9.34 per 100K', source: 'Our World in Data', tier: 0, alert: 'GREEN' },
    { kpi: 'Child Mortality (Under-5)', value: '0.5%', source: 'Our World in Data', tier: 0, alert: 'GREEN' },
    { kpi: 'Healthcare Spending (% GDP)', value: '4.7%', source: 'Our World in Data', tier: 0, alert: 'GREEN' },
    { kpi: 'Adult Obesity', value: '71%', source: 'Our World in Data', tier: 0, alert: 'YELLOW' },
    { kpi: 'Healthcare Spending per capita', value: '$3,727', source: 'Our World in Data', tier: 0, alert: 'GREEN' },
  ],
  environmentKPIs: [
    { kpi: 'EPI Global Rank', value: '53rd', source: 'Yale EPI', tier: 2, alert: 'YELLOW' },
    { kpi: 'EPI Score', value: '51.6', source: 'Yale EPI', tier: 2, alert: 'YELLOW' },
    { kpi: 'Water Management Rank', value: '3rd (score 89.8)', source: 'Yale EPI', tier: 2, alert: 'GREEN' },
    { kpi: 'PM2.5 Exposure Rank', value: '155th', source: 'Yale EPI', tier: 2, alert: 'RED' },
    { kpi: 'Air Quality Score', value: '46.2 (rank 70)', source: 'Yale EPI', tier: 2, alert: 'YELLOW' },
    { kpi: 'Dubai PM2.5', value: '33.5 µg/m³', source: 'IQAir', tier: 2, alert: 'YELLOW' },
    { kpi: 'Wastewater Treatment Rank', value: '1st (100.0)', source: 'Yale EPI', tier: 2, alert: 'GREEN' },
    { kpi: 'Climate Change Score', value: '35.6 (rank 129)', source: 'Yale EPI', tier: 2, alert: 'RED' },
  ],
  financeKPIs: [
    { kpi: 'Federal Budget 2025', value: 'AED 71.5B', previousValue: 'AED 64B', change: '+9%', source: 'UAE Ministry of Finance', tier: 1, alert: 'GREEN' },
    { kpi: 'Budget Surplus 2024', value: '+5.5% GDP', source: 'Trading Economics', tier: 2, alert: 'GREEN' },
    { kpi: 'Budget Surplus 2023', value: '+5.9% GDP', source: 'Trading Economics', tier: 2, alert: 'GREEN' },
    { kpi: 'Government Debt (% GDP)', value: '32.1%', source: 'Trading Economics', tier: 2, alert: 'YELLOW' },
    { kpi: 'Social Development Budget', value: '39%', source: 'UAE Ministry of Finance', tier: 1, alert: 'GREEN' },
    { kpi: 'Government Affairs Budget', value: '35.7%', source: 'UAE Ministry of Finance', tier: 1, alert: 'GREEN' },
    { kpi: 'Federal Revenues (Dec 2025)', value: 'AED 155B', source: 'Trading Economics', tier: 2, alert: 'GREEN' },
    { kpi: 'Fiscal Expenditure', value: 'AED 119B', source: 'Trading Economics', tier: 2, alert: 'GREEN' },
  ],
}

// ============================================================================
// 11-5: Visual & Multimedia Content
// ============================================================================

export const visualMultimediaData: VerificationResult = {
  id: 'ver-11-5',
  claim:
    'UAE effectively combats visual misinformation and maintains authenticity of official imagery during crises',
  verdict: 'partially-verified',
  accuracyScore: 55,
  sources: [
    { name: 'Full Fact', tier: 1, reliability: 'high' },
    { name: 'Khaleej Times', tier: 2, reliability: 'medium' },
    { name: 'UAE BARQ', tier: 2, reliability: 'medium' },
    { name: 'Digital Dubai (Official)', tier: 2, reliability: 'high' },
    { name: 'DW News (BLOCKED)', tier: 2, reliability: 'medium' },
    { name: 'Facebook (User-generated)', tier: 4, reliability: 'low' },
  ],
  echoChamberRisk: {
    platform: 'TikTok, Instagram, Facebook',
    strength: 'high',
    primaryEchos: [
      'Dubai influencer safety videos during Iran strikes — high engagement despite being filmed before conflict',
      'Memes about Dubai vs Abu Dhabi — Emirate rivalry content with high shares',
      'AI-generated content circulated before detection by fact-checkers',
    ],
    riskLevel: 'high',
  },
  omissionData: {
    omittedFacts: [
      'During March 2026 Iran strikes: ~70% of viral videos analyzed were found to be misinformation (Deccan Herald)',
      'Old videos from 2022-2025 being recirculated as current — Tel Aviv footage misrepresented as Dubai',
      'Dubai airport strike video: actually showed August 2020 Ajman market fire, not airport incident',
      'Fake Burj Khalifa on fire image: confirmed AI-generated with SynthID watermark from Google AI (Full Fact)',
      'UAE government warned citizens against filming/storing attack footage — legal accountability for violators',
      'During crisis: 109 arrests for "misleading videos" sharing in single day (Abu Dhabi Police)',
      'Government warning to not trust any images/videos except official sources — effectively suppresses citizen documentation',
    ],
    significance: 'critical',
    impact:
      'Visual misinformation surge during March 2026 Iran strikes overwhelmed fact-checking capacity; government restrictions on citizen documentation created information vacuum filled by false content',
  },
  keyFindings: [
    {
      finding: 'Misinformation Rate (viral videos during March 2026)',
      metric: '~70% of videos analyzed',
      source: 'Deccan Herald',
      tier: 2,
      alert: 'RED',
    },
    {
      finding: 'Fake Burj Khalifa AI Image — Confirmed via SynthID',
      metric: 'AI-generated, Google DeepMind watermark confirmed',
      source: 'Full Fact',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Miscaptioned Videos Documented (March 2026)',
      metric: '15+ (minimum)',
      source: 'Full Fact',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'AI-Generated Images Found (March 2026)',
      metric: '8+ (minimum)',
      source: 'Full Fact',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Safety Experiment — Items Untouched (1 hour)',
      metric: 'AED 100,000 value — all items safe',
      source: 'Social media (viral)',
      tier: 4,
      alert: 'YELLOW',
    },
    {
      finding: 'Dubai Surveillance Cameras at Tourist Sites',
      metric: '5,000+',
      source: 'Oxford/BSG',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Deepfake Increase Q1 2024',
      metric: '+900%',
      source: 'MSN/Tech Experts',
      tier: 3,
      alert: 'RED',
    },
  ],
  credibility: {
    tier: 2,
    score: 55,
    sources: 6,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 92,
    level: 'critical',
    justification:
      'Visual misinformation during the April 2026 Iran strikes represented acute information crisis with direct impact on public safety, tourism reputation, and state narrative control',
  },
  alertLevel: 'RED',
  sources2: [
    { name: 'Full Fact — Fake Burj Khalifa Image', url: 'https://fullfact.org/world/burj-khalifa-ai-iran/', tier: 1, date: '2026-03-02' },
    { name: 'Full Fact — Dubai Airport Fire Miscaptioned', url: 'https://fullfact.org/conflict/dubai-airport-fire-miscaptioned-old-footage/', tier: 1, date: '2026-03-24' },
    { name: 'Khaleej Times — UAE Deepfake Warning', url: 'https://www.khaleejtimes.com/uae/uae-warn-against-fake-ai-content-rising-spread-deepfakes', tier: 2, date: '2026-03-11' },
    { name: 'UAE BARQ — Cybersecurity Council Deepfake Warning', url: 'https://www.uaebarq.ae/en/2025/11/07/uae-cybersecurity-council-warns-of-deepfake-videos-audio-clips/', tier: 2, date: '2025-11-07' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// 11-5 ENHANCED: Visual & Multimedia Content Extended Data
// ============================================================================

export interface VisualMultimediaSource {
  name: string
  tier: TierLevel
  score: number
  type: string
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
  fetchStatus: 'SUCCESS' | 'BLOCKED' | 'PARTIAL' | 'CONN REFUSED'
}

export interface DeepfakeKPIs {
  kpi: string
  value: string
  trend?: string
  severity: 'Critical' | 'High' | 'Medium' | 'Low'
  source: string
  tier: TierLevel
}

export interface ViralContentMetric {
  contentType: string
  platform: string
  metric: string
  value: number
  engagement: number
  sentiment: 'positive' | 'negative' | 'neutral'
  date: string
}

export interface ThreatDashboardKPI {
  threatType: string
  keyFinding: string
  primarySource: string
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
  sourceTier: TierLevel
  fetchStatus: 'SUCCESS' | 'BLOCKED' | 'CONN REFUSED'
}

export interface LogoBrandingData {
  name: string
  description: string
  votes?: number
  designers?: number
  symbolism?: string[]
  restrictions?: string[]
  penalties?: { type: string; range: string }[]
}

export interface CloudSeedingData {
  missionsConducted: number
  costPerOperation: string
  effectivenessClear: string
  effectivenessHumid: string
  aircraft: string
  weatherStations: number
  dopplerRadars: number
  technology: string
  droneTechnology: string
  missionsByYear: { year: number; missions: number }[]
}

export interface SentimentTopicAnalysis {
  topic: string
  positive: number
  negative: number
  neutral: number
  dominantNarrative: string
  source: string
}

export interface EntityRegistryEntry {
  entity: string
  type: string
  role: string
  relevance: string
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
}

export interface ReverseImageSearchTarget {
  landmark: string
  riskLevel: 'Critical' | 'High' | 'Medium'
  manipulationHistory: string
}

export interface ReportingChannel {
  agency: string
  platform: string
  authority: string
}

export interface LegalFrameworkEntry {
  law: string
  keyProvision: string
  penalty: string
  source: string
}

export interface VisualMultimediaKPISummary {
  category: string
  statistic: string
  source: string
  date: string
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
  tier: TierLevel
}

export interface FinancialConversion {
  amount: string
  currency: string
  usdEquivalent: string
  inrEquivalent: string
}

export interface URLContentSummary {
  url: string
  status: 'SUCCESS' | 'BLOCKED' | 'PARTIAL' | 'CONN REFUSED'
  keyDataExtracted: string
  dataPoints: number
}

export interface QueryTemplate {
  name: string
  query: string
}

export interface HashtagRegistryEntry {
  hashtag: string
  usageCount: 'High' | 'Medium' | 'Low'
  context: string
}

export interface VerificationMethod {
  priority: number
  method: string
}

export interface FakeContentType {
  type: string
  description: string
}

export interface CloudSeedingMission {
  year: number
  missions: number
}

export const visualMultimediaExtendedData = {
  executionMetadata: {
    dateExecuted: '2026-04-27',
    enrichmentDate: '2026-04-28',
    enrichmentStatus: 'FULLY ENRICHED',
    totalUrls: 44,
    successfullyFetched: 23,
    blockedInaccessible: 21,
    fetchRate: '52%',
    dataPointsExtracted: '200+',
    entitiesCatalogued: 25,
    topicsAnalyzed: 7,
    statisticsCatalogued: 25,
    sourcesCredibilityRated: 26,
  },

  sourceCredibilityMatrix: [
    { name: 'WAM (Emirates News Agency)', tier: 1 as TierLevel, score: 10, type: 'Government News', uaeRelevance: 'Critical' as const, fetchStatus: 'BLOCKED' as const },
    { name: 'ITV News', tier: 2 as TierLevel, score: 8, type: 'Broadcast', uaeRelevance: 'High' as const, fetchStatus: 'BLOCKED' as const },
    { name: 'The Independent', tier: 2 as TierLevel, score: 7, type: 'Newspaper', uaeRelevance: 'High' as const, fetchStatus: 'BLOCKED' as const },
    { name: 'Deccan Herald', tier: 2 as TierLevel, score: 7, type: 'Newspaper', uaeRelevance: 'High' as const, fetchStatus: 'BLOCKED' as const },
    { name: 'Khaleej Times', tier: 2 as TierLevel, score: 7, type: 'Newspaper', uaeRelevance: 'Critical' as const, fetchStatus: 'SUCCESS' as const },
    { name: 'UAE BARQ', tier: 2 as TierLevel, score: 7, type: 'News Site', uaeRelevance: 'Critical' as const, fetchStatus: 'SUCCESS' as const },
    { name: 'Responsible Statecraft', tier: 2 as TierLevel, score: 7, type: 'Policy Journal', uaeRelevance: 'Critical' as const, fetchStatus: 'SUCCESS' as const },
    { name: 'Platinumlist', tier: 2 as TierLevel, score: 7, type: 'Guide Site', uaeRelevance: 'High' as const, fetchStatus: 'SUCCESS' as const },
    { name: 'Gulf News', tier: 2 as TierLevel, score: 7, type: 'Newspaper', uaeRelevance: 'High' as const, fetchStatus: 'SUCCESS' as const },
    { name: 'Full Fact', tier: 2 as TierLevel, score: 8, type: 'Fact-check', uaeRelevance: 'Critical' as const, fetchStatus: 'SUCCESS' as const },
    { name: 'Wikipedia', tier: 3 as TierLevel, score: 5, type: 'Encyclopedia', uaeRelevance: 'Medium' as const, fetchStatus: 'SUCCESS' as const },
    { name: 'Facebook/Instagram/TikTok', tier: 4 as TierLevel, score: 2, type: 'Social', uaeRelevance: 'Critical' as const, fetchStatus: 'SUCCESS' as const },
  ] as VisualMultimediaSource[],

  deepfakeKPIs: [
    { kpi: 'Deepfake Increase Q1 2024', value: '+900%', trend: 'Critical Increase', severity: 'Critical' as const, source: 'MSN', tier: 3 as TierLevel },
    { kpi: 'Fake News Spread Rate', value: '70% more than genuine', severity: 'Critical' as const, source: 'Blog xDubai', tier: 4 as TierLevel },
    { kpi: 'Deepfake Penalty Min', value: 'Dh100,000 + 1 year imprisonment', severity: 'Critical' as const, source: 'UAE BARQ', tier: 2 as TierLevel },
    { kpi: 'Deepfake Penalty Max', value: 'Dh500,000 + 5 years imprisonment', severity: 'Critical' as const, source: 'UAE BARQ', tier: 2 as TierLevel },
  ] as DeepfakeKPIs[],

  viralContentMetrics: [
    { contentType: 'Fix Chocolate Viral Video', platform: 'TikTok', metric: '90M+ views', value: 90000000, engagement: 0, sentiment: 'positive' as const, date: '2024-12-28' },
    { contentType: 'Dubai Safety Experiment', platform: 'Facebook', metric: 'AED 100,000 items untouched', value: 100000, engagement: 119, sentiment: 'positive' as const, date: '2026-01-19' },
    { contentType: 'Coldplay Abu Dhabi Concert', platform: 'Online', metric: '100K+ waiting room', value: 100000, engagement: 0, sentiment: 'positive' as const, date: '2024-12-28' },
    { contentType: 'Dubai vs Abu Dhabi Joke', platform: 'Instagram', metric: '21,500 likes', value: 21500, engagement: 21500, sentiment: 'positive' as const, date: '2026-03-12' },
    { contentType: 'UAE Islands Viral (CNN)', platform: 'Instagram', metric: '6,200 likes', value: 6200, engagement: 6200, sentiment: 'neutral' as const, date: '2026-03-12' },
    { contentType: 'Sheikh Hamdan UAE Flag', platform: 'Facebook', metric: '18,000 reactions', value: 18000, engagement: 18000, sentiment: 'positive' as const, date: '2026-04-10' },
  ] as ViralContentMetric[],

  threatDashboardKPIs: [
    { threatType: 'AI Deepfakes', keyFinding: '900% increase Q1 2024', primarySource: 'MSN', uaeRelevance: 'Critical' as const, sourceTier: 3 as TierLevel, fetchStatus: 'BLOCKED' as const },
    { threatType: 'Fake Burj Khalifa', keyFinding: 'AI-generated with SynthID watermark', primarySource: 'Full Fact', uaeRelevance: 'Critical' as const, sourceTier: 2 as TierLevel, fetchStatus: 'SUCCESS' as const },
    { threatType: 'Missile Debris Videos', keyFinding: 'Old videos misrepresented as current', primarySource: 'Deccan Herald', uaeRelevance: 'Critical' as const, sourceTier: 2 as TierLevel, fetchStatus: 'BLOCKED' as const },
    { threatType: 'National Symbol AI Images', keyFinding: 'Banned without official approval', primarySource: 'Times of India', uaeRelevance: 'Critical' as const, sourceTier: 2 as TierLevel, fetchStatus: 'BLOCKED' as const },
    { threatType: 'Dubai Emblem Misuse', keyFinding: 'Up to 5 years prison, AED 500K fine', primarySource: 'Platinumlist', uaeRelevance: 'High' as const, sourceTier: 2 as TierLevel, fetchStatus: 'SUCCESS' as const },
    { threatType: 'Territorial Maps', keyFinding: 'Abu Musa, Tunb islands dispute', primarySource: 'Responsible Statecraft', uaeRelevance: 'Critical' as const, sourceTier: 2 as TierLevel, fetchStatus: 'SUCCESS' as const },
    { threatType: 'Fake News Spread', keyFinding: '70% more frequent than genuine', primarySource: 'Blog xDubai', uaeRelevance: 'Critical' as const, sourceTier: 4 as TierLevel, fetchStatus: 'CONN REFUSED' as const },
  ] as ThreatDashboardKPI[],

  logoBrandingData: {
    uae50Year: {
      name: '"7 Lines"',
      description: 'New UAE 50-year logo representing unity of seven emirates',
      votes: 10600000,
      designers: 49,
      symbolism: [
        'Seven lines represent leaders of seven emirates who agreed to unite under one flag',
        'Lines shape the map of the Emirates using national colours',
        'Values: unity, future-focused leaders, ambitions, achievements, openness, hope, culture of possibilities',
      ],
    } as LogoBrandingData,
    dubaiEmblem: {
      name: 'Dubai Emblem Protection Law 2025',
      description: 'Regulation of official Dubai emblems and logos',
      penalties: [
        { type: 'Imprisonment', range: 'Up to 5 years' },
        { type: 'Fines', range: 'AED 100,000 to AED 500,000' },
      ],
      restrictions: [
        'Both emblems prohibited for advertising, promoting products, businesses',
        'Special permission required from Chairman of Dubai Ruler\'s Court',
        'Misuse that distorts or diminishes the emblem\'s value is forbidden',
      ],
    } as LogoBrandingData,
    eidAlEtihad: {
      name: 'Eid Al Etihad 2025 Logo',
      description: '54th Union Anniversary logo with theme "United"',
      symbolism: [
        'Seven Emirates Emblems: Palm tree, historic dhow, rising sun, traditional dances (Al Ayyala, Al Naashat), fort, pearl oysters',
        'Number 54 inspired by UAE vehicle license plates silhouette',
      ],
      restrictions: [
        'No stretching, distorting, or rotating',
        'No arbitrary recoloring',
        'No drop shadows or effects',
        'No combining with other logos',
        'No translating into other languages',
        'No using as decorative graphic or background pattern',
      ],
    } as LogoBrandingData,
  },

  cloudSeedingData: {
    missionsConducted: 247,
    costPerOperation: '$3,000',
    effectivenessClear: '30-35%',
    effectivenessHumid: '10-15%',
    aircraft: '6 Beechcraft King Air C90',
    weatherStations: 75,
    dopplerRadars: 5,
    technology: 'Hygroscopic cloud seeding (potassium chloride, sodium chloride)',
    droneTechnology: 'Since 2021 — drones with electric-charge emission instruments',
    missionsByYear: [
      { year: 2014, missions: 187 },
      { year: 2017, missions: 214 },
      { year: 2018, missions: 184 },
      { year: 2019, missions: 247 },
    ] as CloudSeedingMission[],
  } as CloudSeedingData,

  sentimentAnalysisByTopic: [
    { topic: 'Dubai Safety Videos', positive: 45, negative: 10, neutral: 45, dominantNarrative: 'Pro-UAE safety', source: 'Inferred' },
    { topic: 'UAE-Iran Islands', positive: 55, negative: 35, neutral: 10, dominantNarrative: 'Pro-UAE sovereignty', source: 'Comment analysis' },
    { topic: 'Influencers/Free Speech', positive: 30, negative: 40, neutral: 30, dominantNarrative: 'Concern over restrictions', source: 'Inferred' },
    { topic: 'AI Regulation', positive: 60, negative: 25, neutral: 15, dominantNarrative: 'Supportive of government', source: 'Inferred' },
    { topic: 'Cloud Seeding', positive: 40, negative: 35, neutral: 25, dominantNarrative: 'Environmental debate', source: 'Inferred' },
    { topic: 'Dubai vs Abu Dhabi Jokes', positive: 85, negative: 5, neutral: 10, dominantNarrative: 'Amusement', source: 'Comment analysis' },
    { topic: 'National Symbol Projections', positive: 70, negative: 15, neutral: 15, dominantNarrative: 'National solidarity', source: 'Comment analysis' },
  ] as SentimentTopicAnalysis[],

  entityRegistry: [
    { entity: 'UAE Cybersecurity Council', type: 'Government', role: 'Deepfake warnings, cybercrimes', relevance: 'Critical', uaeRelevance: 'Critical' as const },
    { entity: 'UAE Media Council', type: 'Government', role: 'AI image bans, advertising regulation', relevance: 'Critical', uaeRelevance: 'Critical' as const },
    { entity: 'Dubai Police', type: 'Government', role: 'eCrime reporting', relevance: 'High', uaeRelevance: 'High' as const },
    { entity: 'EAD (Environment Agency - Abu Dhabi)', type: 'Government', role: 'Environmental AI monitoring', relevance: 'Medium', uaeRelevance: 'Medium' as const },
    { entity: 'Digital Dubai', type: 'Government', role: '"Be Aware" campaign', relevance: 'High', uaeRelevance: 'High' as const },
    { entity: 'Al Ameen Service', type: 'Government', role: 'Cybersecurity awareness', relevance: 'High', uaeRelevance: 'High' as const },
    { entity: 'Full Fact', type: 'Fact-checker', role: 'Misinformation verification', relevance: 'Critical', uaeRelevance: 'Critical' as const },
    { entity: 'Fix Dessert Chocolatier', type: 'Business', role: 'Viral chocolate (Fix Chocolate)', relevance: 'Medium', uaeRelevance: 'Medium' as const },
    { entity: 'Nation Brand UAE', type: 'Government', role: '50-year logo', relevance: 'High', uaeRelevance: 'High' as const },
    { entity: 'Sheikh Mohammed bin Rashid Al Maktoum', type: 'Leader', role: 'Dubai Ruler, Vice President, PM', relevance: 'High', uaeRelevance: 'High' as const },
    { entity: 'Sheikh Mohamed Bin Zayed Al Nahyan', type: 'Leader', role: 'Crown Prince of Abu Dhabi', relevance: 'High', uaeRelevance: 'High' as const },
    { entity: 'Sheikh Hamdan bin Mohammed', type: 'Leader', role: 'Crown Prince of Dubai', relevance: 'High', uaeRelevance: 'High' as const },
    { entity: 'Sarah Hamouda', type: 'Individual', role: 'British-Egyptian entrepreneur, Fix Chocolate creator', relevance: 'Medium', uaeRelevance: 'Medium' as const },
    { entity: 'CNN', type: 'Media', role: 'Islands dispute reporting', relevance: 'Critical', uaeRelevance: 'Critical' as const },
    { entity: 'RFI English', type: 'Media', role: 'Iranian cartoonists coverage', relevance: 'Medium', uaeRelevance: 'Medium' as const },
    { entity: 'IRGC', type: 'Military', role: 'Iran\'s island defense', relevance: 'Critical', uaeRelevance: 'Critical' as const },
  ] as EntityRegistryEntry[],

  reverseImageSearchTargets: [
    { landmark: 'Burj Khalifa', riskLevel: 'Critical' as const, manipulationHistory: 'AI-generated fake (March 2026), SynthID confirmed' },
    { landmark: 'Sheikh Zayed Grand Mosque', riskLevel: 'High' as const, manipulationHistory: '-' },
    { landmark: 'Dubai Frame', riskLevel: 'Medium' as const, manipulationHistory: '-' },
    { landmark: 'Palm Jumeirah', riskLevel: 'Medium' as const, manipulationHistory: '-' },
    { landmark: 'UAE National Flag imagery', riskLevel: 'Critical' as const, manipulationHistory: 'Projected on Burj Khalifa (April 2026)' },
    { landmark: 'Emirati leaders\' images', riskLevel: 'Critical' as const, manipulationHistory: '-' },
  ] as ReverseImageSearchTarget[],

  reportingChannels: [
    { agency: 'Dubai Police', platform: 'eCrime platform', authority: 'Dubai Police' },
    { agency: 'UAE Public Prosecution', platform: 'My Safe Society app', authority: 'UAE Public Prosecution' },
    { agency: 'Abu Dhabi Police', platform: 'Aman service', authority: 'Abu Dhabi Police' },
    { agency: 'Ministry of Interior', platform: 'MoI app', authority: 'Ministry of Interior' },
  ] as ReportingChannel[],

  legalFramework: [
    { law: 'Federal Decree-Law No. 34 of 2021', keyProvision: 'Countering Rumors and Cybercrimes', penalty: '1-5 years imprisonment, Dh100K-Dh500K', source: 'UAE BARQ' },
    { law: 'UAE Media Council AI Ban', keyProvision: 'AI portrayal of national symbols without permission', penalty: 'Strict fines and penalties', source: 'Gates Dubai' },
    { law: 'Dubai Emblem Law 2025', keyProvision: 'Regulates official emblems', penalty: 'Up to 5 years imprisonment, AED 500K', source: 'Platinumlist' },
    { law: 'UAE Advertiser Permit', keyProvision: 'Mandatory social media advertising permit', penalty: 'Up to AED 1,000,000', source: 'GCC Business Watch' },
  ] as LegalFrameworkEntry[],

  kpiSummaryTable: [
    { category: 'Deepfakes', statistic: '+900% (Q1 2024)', source: 'MSN', date: '2024', uaeRelevance: 'Critical' as const, tier: 3 as TierLevel },
    { category: 'Fake News Spread', statistic: '70% more than genuine', source: 'Blog xDubai', date: '2026', uaeRelevance: 'Critical' as const, tier: 4 as TierLevel },
    { category: 'Fix Chocolate Views', statistic: '90M+', source: 'The National', date: '2024', uaeRelevance: 'Medium' as const, tier: 2 as TierLevel },
    { category: 'Cloud Seeding Missions (2019)', statistic: '247', source: 'Wikipedia', date: '2024', uaeRelevance: 'High' as const, tier: 3 as TierLevel },
    { category: 'Cloud Seeding Cost', statistic: '$3,000/operation', source: 'Wikipedia', date: '2024', uaeRelevance: 'Medium' as const, tier: 3 as TierLevel },
    { category: 'Cloud Seeding Effectiveness (clear)', statistic: '30-35%', source: 'Wikipedia', date: '2024', uaeRelevance: 'Medium' as const, tier: 3 as TierLevel },
    { category: 'Deepfake Penalty Min', statistic: 'Dh100,000 + 1 year', source: 'UAE BARQ', date: '2025', uaeRelevance: 'Critical' as const, tier: 2 as TierLevel },
    { category: 'Deepfake Penalty Max', statistic: 'Dh500,000 + 5 years', source: 'UAE BARQ', date: '2025', uaeRelevance: 'Critical' as const, tier: 2 as TierLevel },
    { category: 'Emblem Fine Min', statistic: 'AED 100,000', source: 'Platinumlist', date: '2025', uaeRelevance: 'High' as const, tier: 2 as TierLevel },
    { category: 'Emblem Fine Max', statistic: 'AED 500,000', source: 'Platinumlist', date: '2025', uaeRelevance: 'High' as const, tier: 2 as TierLevel },
    { category: 'Advertiser Permit Cost', statistic: 'Free (first 3 years)', source: 'GCC Business Watch', date: '2025', uaeRelevance: 'High' as const, tier: 2 as TierLevel },
    { category: 'Advertiser Permit Penalty', statistic: 'Up to AED 1,000,000', source: 'GCC Business Watch', date: '2025', uaeRelevance: 'High' as const, tier: 2 as TierLevel },
    { category: '50-Year Logo Votes', statistic: '10.6 million', source: 'YALHamed', date: '2024', uaeRelevance: 'High' as const, tier: 3 as TierLevel },
    { category: '50-Year Logo Designers', statistic: '49 Emiratis', source: 'YALHamed', date: '2024', uaeRelevance: 'High' as const, tier: 3 as TierLevel },
    { category: 'Dubai Safety Experiment', statistic: 'AED 100,000 untouched', source: 'Facebook', date: '2026', uaeRelevance: 'Medium' as const, tier: 4 as TierLevel },
    { category: 'Sheikh Hamdan Video Reactions', statistic: '18,000', source: 'Facebook', date: '2026', uaeRelevance: 'High' as const, tier: 4 as TierLevel },
    { category: 'Dubai vs Abu Dhabi Joke Likes', statistic: '21,500', source: 'Instagram', date: '2026', uaeRelevance: 'Low' as const, tier: 4 as TierLevel },
    { category: 'UAE Islands Viral Likes', statistic: '6,200', source: 'Instagram', date: '2026', uaeRelevance: 'Critical' as const, tier: 4 as TierLevel },
  ] as VisualMultimediaKPISummary[],

  financialConversions: [
    { amount: 'AED 100,000', currency: 'UAE Dirham', usdEquivalent: '~$27,220', inrEquivalent: '~₹24 lakh' },
    { amount: 'AED 500,000', currency: 'UAE Dirham', usdEquivalent: '~$136,100', inrEquivalent: '~₹1.2 crore' },
    { amount: 'AED 1,000,000', currency: 'UAE Dirham', usdEquivalent: '~$272,200', inrEquivalent: '~₹2.4 crore' },
    { amount: '$11 million', currency: 'USD', usdEquivalent: '-', inrEquivalent: '-' },
    { amount: '$136.1 million', currency: 'USD (infrastructure)', usdEquivalent: '-', inrEquivalent: '-' },
  ] as FinancialConversion[],

  urlContentSummaries: [
    { url: 'uaebarq.ae', status: 'SUCCESS', keyDataExtracted: 'Deepfake warnings, AI deception concerns, public advisories', dataPoints: 8 },
    { url: 'fullfact.org', status: 'SUCCESS', keyDataExtracted: 'AI Burj Khalifa fake confirmed, SynthID watermark, verification details', dataPoints: 9 },
    { url: 'responsiblestatecraft.org', status: 'SUCCESS', keyDataExtracted: 'UAE islands dispute history (1971), strategic analysis, expert quotes', dataPoints: 15 },
    { url: 'platinumlist.net', status: 'SUCCESS', keyDataExtracted: 'Dubai Emblem Law penalties: 5 years, AED 500K, symbolic elements', dataPoints: 12 },
    { url: 'blog.jobxdubai.com', status: 'CONN REFUSED', keyDataExtracted: 'Fake news 70% more frequent; Dh100K-Dh500K penalties', dataPoints: 7 },
    { url: 'gulfnews.com', status: 'SUCCESS', keyDataExtracted: 'Eid Al Etihad guidelines, logo specs, 7 emirates, DON\'Ts', dataPoints: 18 },
    { url: 'thenationalnews.com', status: 'SUCCESS', keyDataExtracted: '2024 viral moments: Fix Chocolate 90M views, Coldplay, Love is Blind', dataPoints: 20 },
    { url: 'advertonclick.com', status: 'SUCCESS', keyDataExtracted: 'Media Council offensive ads warning, requirements', dataPoints: 5 },
    { url: 'gates-dubai.com', status: 'SUCCESS', keyDataExtracted: 'Media Council AI ban, 2.1K engagement, mixed reactions', dataPoints: 6 },
    { url: 'gccbusinesswatch.com', status: 'SUCCESS', keyDataExtracted: 'Advertiser permit: free 3 years, AED 1M penalty, requirements', dataPoints: 12 },
    { url: 'wikipedia.org', status: 'SUCCESS', keyDataExtracted: 'Cloud seeding: 187-247 missions/year, $3000/operation, effectiveness %', dataPoints: 22 },
    { url: 'facebook.com (RFI)', status: 'SUCCESS', keyDataExtracted: 'Iranian cartoonists in exile satire, dissent amplification', dataPoints: 5 },
    { url: 'facebook.com (safety)', status: 'SUCCESS', keyDataExtracted: 'AED 100K experiment, all items untouched, 119 reactions', dataPoints: 10 },
    { url: 'facebook.com (Hamdan)', status: 'SUCCESS', keyDataExtracted: '18K reactions for UAE flag on Burj Khalifa, hashtags', dataPoints: 9 },
    { url: 'instagram.com (joke)', status: 'SUCCESS', keyDataExtracted: '21.5K likes for Dubai vs Abu Dhabi joke, comments', dataPoints: 8 },
    { url: 'instagram.com (islands)', status: 'SUCCESS', keyDataExtracted: '6.2K likes, CNN report on islands dispute, comment sentiment', dataPoints: 7 },
    { url: 'yalhamed.com', status: 'SUCCESS', keyDataExtracted: 'UAE 50-year logo: 7 lines, 10.6M votes, 49 designers', dataPoints: 8 },
    { url: 'khaleejtimes.com', status: 'SUCCESS', keyDataExtracted: 'Digital Dubai warnings, Al Ameen Service, Be Aware campaign', dataPoints: 10 },
  ] as URLContentSummary[],

  queryTemplates: [
    { name: 'UAE Visual Content Query', query: '"UAE" AND ("photo" OR "صورة" OR "image" OR "فيديو" OR "video" OR "footage" OR "لقطة")' },
    { name: 'UAE Viral Content Query', query: '"UAE" AND ("viral" AND ("video" OR "فيديو" OR "photo" OR "صورة" OR "clip" OR "مقطع"))' },
    { name: 'UAE Deepfake Query', query: '"UAE" AND ("deepfake" OR "تزييف عميق" OR "AI generated" OR "synthetic")' },
    { name: 'UAE Logo Controversy Query', query: '"UAE" AND ("logo" AND ("controversy" OR "redesign" OR "rebrand"))' },
    { name: 'UAE Map/Territorial Query', query: '"UAE" AND ("map" AND ("territorial" OR "border" OR "island" OR "جزيرة"))' },
  ] as QueryTemplate[],

  hashtagRegistry: [
    { hashtag: '#Dubai', usageCount: 'High', context: 'General Dubai content' },
    { hashtag: '#UAE', usageCount: 'High', context: 'National content' },
    { hashtag: '#Safety', usageCount: 'Medium', context: 'Safety experiments' },
    { hashtag: '#ViralVideo', usageCount: 'Medium', context: 'Viral content' },
    { hashtag: '#UAEUnity', usageCount: 'High', context: 'National solidarity' },
    { hashtag: '#NationalPride', usageCount: 'High', context: 'Patriotism' },
    { hashtag: '#SheikhHamdan', usageCount: 'High', context: 'Leadership content' },
    { hashtag: '#BurjKhalifa', usageCount: 'High', context: 'Landmark' },
    { hashtag: '#Solidarity', usageCount: 'High', context: 'National unity' },
    { hashtag: '#FixChocolate', usageCount: 'Medium', context: 'Viral product' },
    { hashtag: '#ZeroTheft', usageCount: 'Low', context: 'Safety narrative' },
  ] as HashtagRegistryEntry[],

  verificationMethods: [
    { priority: 1, method: 'Check source authenticity and account verification' },
    { priority: 2, method: 'Use reverse image search (Google Images, TinEye)' },
    { priority: 3, method: 'Look for visual inconsistencies' },
    { priority: 4, method: 'Cross-reference with multiple independent sources' },
    { priority: 5, method: 'Check timestamps and metadata' },
    { priority: 6, method: 'Watch for emotional manipulation' },
    { priority: 7, method: 'Rely on official government channels' },
  ] as VerificationMethod[],

  fakeContentTypes: [
    { type: 'AI-Generated Videos', description: 'Fabricated military events' },
    { type: 'Recycled Footage', description: 'Previous conflicts relabelled as current' },
    { type: 'Fabricated Alerts', description: 'Fake news alerts and government statements' },
    { type: 'AI Voice Clips', description: 'Deepfakes impersonating officials' },
    { type: 'Manipulated Images', description: 'Digitally altered photographs' },
  ] as FakeContentType[],

  tierDefinitions: [
    { tier: 0, description: 'Primary government sources (official channels)', examples: 'WAM' },
    { tier: 1, description: 'Major international wire services', examples: 'AP, Reuters' },
    { tier: 2, description: 'Established news organizations with editorial review', examples: 'ITV, BBC, NYT, Khaleej Times, Full Fact' },
    { tier: 3, description: 'Aggregators, secondary sources, specialized publications', examples: 'Wikipedia, MSN, The Quint' },
    { tier: 4, description: 'User-generated content, unverified sources', examples: 'Facebook, Instagram, TikTok, Reddit' },
  ],
}

export const visualMultimediaExtended = visualMultimediaExtendedData

// ============================================================================
// 11-6: Fact-Check & Verification
// ============================================================================

export const factCheckVerificationData: VerificationResult = {
  id: 'ver-11-6',
  claim:
    'UAE maintains independent fact-checking ecosystem with transparent verification processes',
  verdict: 'unverified',
  accuracyScore: 30,
  sources: [
    { name: 'Full Fact', tier: 1, reliability: 'high' },
    { name: 'Snopes', tier: 1, reliability: 'high' },
    { name: 'Reuters Fact Check', tier: 1, reliability: 'high' },
    { name: 'Gulf News', tier: 2, reliability: 'medium' },
    { name: 'UAE Cybercrime Law (Federal Decree-Law No. 34/2021)', tier: 1, reliability: 'high' },
    { name: 'Lexology', tier: 2, reliability: 'medium' },
    { name: 'Al Kabban', tier: 2, reliability: 'medium' },
  ],
  echoChamberRisk: {
    platform: 'UAE Domestic Media + Official Channels',
    strength: 'critical',
    primaryEchos: [
      'Official UAE government denials treated as fact-check responses',
      'Fact-check organizations (Misbar) blocked during Iran strikes',
      'International fact-checkers limited access to UAE domestic sources',
      'Legal penalties create self-censorship rather than open verification',
    ],
    riskLevel: 'critical',
  },
  omissionData: {
    omittedFacts: [
      'During March 2026 Iran strikes: 15+ miscaptioned videos, 8+ AI-generated images documented by Full Fact alone',
      'Misbar (Arab fact-checker) was blocked on X/Twitter during the crisis for "fact-checking"',
      'UAE Cybercrime Law Article 52: minimum 1 year prison + AED 100,000 fine for "rumors" — during crisis: 2 years + AED 200,000',
      'Dubai airport fire video: actually 2020 Ajman market fire, confirmed by Full Fact with geolocation evidence',
      'Fake UAE-France fighter jet contract freeze: fabricated video mimicking Al Jazeera styling received 366,000+ views on X',
      'UAE arrests 45+ people in single day (Abu Dhabi) for social media posts during Iran strikes',
      'No independent domestic fact-checking organizations exist in UAE — all operate from outside jurisdiction',
      'Platform removals (Meta/X) of millions of accounts attributed to UAE-linked operations in prior years',
    ],
    significance: 'critical',
    impact:
      'While international fact-checkers successfully identified specific misinformation cases, the domestic environment lacks independent verification capacity due to legal threats and platform restrictions',
  },
  keyFindings: [
    {
      finding: 'Full Fact — Miscaptioned Videos (March 2026)',
      metric: '15+ documented',
      source: 'Full Fact',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Full Fact — AI-Generated Images (March 2026)',
      metric: '8+ documented',
      source: 'Full Fact',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Fake UAE-France Jet Contract Video — Views on X',
      metric: '366,000+',
      source: 'Full Fact',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Prison Term — Standard Violation',
      metric: '1+ year',
      source: 'UAE Cybercrime Law',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Prison Term — Aggravated (Crisis)',
      metric: '2+ years',
      source: 'UAE Cybercrime Law',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'People Arrested for Social Media Posts (Abu Dhabi, March 2026)',
      metric: '45+',
      source: 'Abu Dhabi Police',
      tier: 2,
      alert: 'RED',
    },
    {
      finding: 'Misbar Blocked on X During Iran Strikes',
      metric: 'Confirmed',
      source: 'CPJ Monitoring',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Fake Burj Khalifa Image — SynthID Confirmed',
      metric: 'Google AI DeepMind watermark',
      source: 'Full Fact',
      tier: 1,
      alert: 'RED',
    },
  ],
  credibility: {
    tier: 2,
    score: 30,
    sources: 7,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 95,
    level: 'critical',
    justification:
      'Fact-checking infrastructure is essential for information integrity during crises; domestic restrictions prevent local verification while international fact-checkers have limited access',
  },
  alertLevel: 'RED',
  sources2: [
    { name: 'Full Fact — Middle East Conflict Overview', url: 'https://fullfact.org/conflict/middle-east-conflict-overview/', tier: 1, date: '2026-03' },
    { name: 'Full Fact — Fake Burj Khalifa', url: 'https://fullfact.org/world/burj-khalifa-ai-iran/', tier: 1, date: '2026-03-02' },
    { name: 'Full Fact — Dubai Airport Fire', url: 'https://fullfact.org/conflict/dubai-airport-fire-miscaptioned-old-footage/', tier: 1, date: '2026-03-24' },
    { name: 'Gulf News — UAE Misinformation Tackling', url: 'https://gulfnews.com/uae/how-the-uae-is-tackling-digital-misinformation-and-online-smear-campaigns-1.500519024', tier: 2, date: '2024' },
    { name: 'Lexology — UAE Cybercrime Law', url: 'https://www.lexology.com/library/detail.aspx?g=817b43b1-b14d-4298-a147-bafd9d905b09', tier: 2, date: '2024' },
  ],
  lastUpdated: '2026-04-27',
  extendedData: {
    kpis: [
      { kpi: 'Miscaptioned Videos (March 2026)', value: '15+', trend: 'Active', source: 'Full Fact', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'AI-Generated Images Identified', value: '8+', trend: 'Active', source: 'Full Fact', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'Viral Posts Fact-Checked', value: '17+', trend: 'Active', source: 'Full Fact', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'Prison Term (Standard)', value: '1+ year', trend: 'Static', source: 'UAE Cybercrime Law', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'Prison Term (Aggravated)', value: '2+ years', trend: 'Static', source: 'UAE Cybercrime Law', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'Fine (Standard)', value: 'AED 100,000+', trend: 'Static', source: 'UAE Cybercrime Law', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'Fine (Aggravated)', value: 'AED 200,000', trend: 'Static', source: 'UAE Cybercrime Law', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'People Arrested (Abu Dhabi)', value: '45', trend: 'March 2026', source: 'Abu Dhabi Police', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'People Arrested (Dubai)', value: '25', trend: 'March 2026', source: 'Dubai Police', uaeRelevance: 'Critical', tier: 1 },
      { kpi: 'Ransomware Attacks (UAE 2024)', value: '+32% YoY', trend: '2024 Data', source: 'Khaleej Times', uaeRelevance: 'High', tier: 1 },
      { kpi: 'Rafale Contract Value', value: '80 jets', trend: '2021', source: 'Full Fact', uaeRelevance: 'High', tier: 1 },
      { kpi: 'Sudan Humanitarian Pledge', value: 'USD $100M', trend: '2024', source: 'UAE MoFA', uaeRelevance: 'Medium', tier: 0 },
    ],
    governmentOrgs: [
      { org: 'Telecommunications and Digital Government Regulatory Authority', acronym: 'TDRA', role: 'Warns about fake content; encourages user verification', uaeRelevance: 'Critical' },
      { org: 'UAE Cybersecurity Council', acronym: 'CSC', role: 'Leads national efforts against digital threats', uaeRelevance: 'Critical' },
      { org: 'Public Prosecution', acronym: 'PP', role: 'Issues warnings against rumor spreading', uaeRelevance: 'Critical' },
      { org: 'Dubai Media Office', acronym: 'DMO', role: 'Coordinates official responses; debunks false claims', uaeRelevance: 'Critical' },
      { org: 'National Media Authority', acronym: 'NMA', role: 'Urges public to avoid filming incident sites', uaeRelevance: 'High' },
      { org: 'Meta and X Platforms', acronym: 'Meta/X', role: 'Platforms that removed millions of accounts', uaeRelevance: 'High' },
    ],
    detectionMethods: [
      { method: 'Advanced AI tools', application: 'Detect unusual online activity' },
      { method: 'AI content detection', application: 'Identify misleading content early' },
      { method: 'Rapid-response teams', application: 'Cyber threat response' },
      { method: 'Electronic swarm identification', application: 'Detect coordinated fake accounts' },
      { method: 'Platform cooperation', application: 'Meta/X account removal' },
    ],
    legalPenalties: [
      { violation: 'Standard rumor spreading', prison: '1+ year', fine: 'AED 100,000', basis: 'Article 52' },
      { violation: 'Aggravated (crisis)', prison: '2+ years', fine: 'AED 200,000', basis: 'Article 52' },
      { violation: 'Sharing war footage', prison: 'Up to 2 years', fine: 'Up to AED 200,000', basis: 'Cybercrime Law' },
    ],
    aiContentCases: [
      { content: 'Fake Burj Khalifa on fire', identification: 'SynthID watermark (Google AI)', status: 'Confirmed Fake' },
      { content: 'Ayatollah Khamenei in rubble', identification: 'No watermark mentioned', status: 'Fabricated' },
      { content: 'USS Abraham Lincoln on fire', identification: 'AI-generated characteristics', status: 'Fabricated' },
      { content: '"Captured US soldiers"', identification: 'Visual analysis', status: 'Fabricated' },
      { content: 'B-2 bomber "shot down"', identification: 'AI-generated characteristics', status: 'Fake' },
      { content: 'Iranian schoolchildren funeral', identification: 'AI image characteristics', status: 'Misleading' },
    ],
    miscaptionedVideos: [
      { claim: 'Dubai airport on fire', actual: 'August 2020 market fire in Ajman, UAE', misdirection: 'Geographic misattribution' },
      { claim: 'CIA base in Dubai struck by Iran', actual: 'October 2015 apartment fire in Sharjah, UAE', misdirection: 'Geographic misattribution' },
      { claim: 'Tel Aviv explosions', actual: '2015 warehouse fire in China', misdirection: 'Geographic misattribution' },
      { claim: 'Iran attacks on Gulf', actual: 'Football celebration in Algeria', misdirection: 'Event misattribution' },
      { claim: 'US base fire', actual: '2003 Iraq war footage', misdirection: 'Conflict misattribution' },
      { claim: 'Dubai restaurant fire', actual: 'Old unrelated fire footage', misdirection: 'Geographic misattribution' },
    ],
    factCheckCases: [
      { case: 'Dubai Airport Fire', source: 'Full Fact', date: 'March 24, 2026', verdict: 'FALSE', claim: 'Video shows Dubai International Airport on fire', actualFacts: 'Video shows August 2020 fire at public market in Ajman industrial area' },
      { case: 'CIA Base Dubai Attack', source: 'Full Fact', date: 'March 4, 2026', verdict: 'FALSE', claim: 'Video shows "CIA headquarters in Dubai" on fire', actualFacts: 'October 2015 fire at apartment building in Sharjah, UAE' },
      { case: 'Fake Burj Khalifa AI Image', source: 'Full Fact', date: 'March 2, 2026', verdict: 'FAKE', claim: 'Image shows Burj Khalifa engulfed in flames', actualFacts: 'Contains SynthID watermark from Google AI' },
      { case: 'UAE-France Fighter Jet Contract', source: 'Full Fact', date: 'August 29, 2024', verdict: 'FALSE', claim: 'UAE froze 80 fighter jet contracts with France', actualFacts: '80 Rafale contract signed in 2021; no evidence of freezing' },
    ],
    snopesCases: [
      { claim: 'Dubai fake rain (cloud seeding)', date: 'July 22, 2021', verdict: 'Debunked', type: 'Misunderstanding' },
      { claim: 'Two moons over Dubai', date: 'February 8, 2021', verdict: 'Debunked', type: 'Misinterpretation' },
      { claim: 'Admiral fired for exposing Obama\'s Dubai mansion', date: 'January 11, 2016', verdict: 'FALSE', type: 'Fabricated' },
      { claim: 'Sandy highway to Dubai during COVID', date: 'May 26, 2020', verdict: 'FALSE', type: 'Misinformation' },
      { claim: 'Dubai airport fire video', date: 'March 18, 2026', verdict: 'FALSE', type: 'Miscaptioned' },
      { claim: 'Trump $2B bribe to sell AI chips to UAE/China', date: 'September 30, 2025', verdict: 'Not Rated', type: 'Unverified' },
    ],
    deepfakeRisks: [
      { risk: 'Impersonation', description: 'Using someone\'s likeness without consent' },
      { risk: 'Harassment', description: 'Creating harmful content targeting individuals' },
      { risk: 'Blackmail', description: 'Threatening to release deepfake content' },
      { risk: 'Fake explicit content', description: 'Non-consensual intimate imagery' },
      { risk: 'Identity fraud', description: 'Using deepfakes for financial or other gain' },
    ],
    expertQuotes: [
      { expert: 'Ben Colman', org: 'Reality Defender', quote: 'In our own studies, a Deepfake is more real than a screenshot from Zoom…which means Zoom looks fake and Deepfake looks real', context: 'Deepfake realism study' },
      { expert: 'Ben Colman', org: 'Reality Defender', quote: 'In Deepfake anyone can be anybody…very easy, very dangerous. So, now it\'s never trust and always verify', context: 'Trust paradigm shift' },
      { expert: 'Maha Abouelenein', org: 'Digital and Savvy', quote: 'A blue checkmark is no longer proof that someone should be believed', context: 'Paid verification criticism' },
      { expert: 'Maha Abouelenein', org: 'Digital and Savvy', quote: 'Trust comes from consistency, reputation and delivering on what you promise', context: 'Trust framework' },
      { expert: 'Damian Reilly', org: 'Arabian Business', quote: 'It feels a bit like a protection racket. You pay and the platform will then take the problem more seriously', context: 'Platform dynamics criticism' },
    ],
    sudanResponse: [
      { official: 'Her Excellency Lana Zaki Nusseibeh', position: 'Assistant Minister of Foreign Affairs for Political Affairs' },
      { official: 'His Excellency Mohamed Abushahab', position: 'UAE Ambassador and Permanent Representative to the UN' },
      { official: 'Khalifa Al Mazrouei', position: 'Counselor at UAE Permanent Mission in Geneva' },
    ],
    sudanActions: [
      { action: 'Humanitarian Pledge', details: 'USD $100 million' },
      { action: 'Peace Talks', details: 'Jeddah and Manaba' },
      { action: 'Paris Conference', details: 'International Humanitarian Conference for Sudan' },
      { action: 'Diplomatic Engagement', details: 'IGAD and African Union' },
    ],
    dubaiFakeCases: [
      { claim: 'IRGC struck Oracle Data Centre in Dubai', verdict: 'FAKE NEWS', source: 'Dubai Media Office', date: 'April 3, 2026' },
      { claim: 'Mass evacuations', verdict: 'FALSE', source: 'Dubai Media Office' },
      { claim: 'Airport closures', verdict: 'FALSE', source: 'Dubai Media Office' },
      { claim: 'Empty supermarket shelves', verdict: 'FALSE', source: 'Dubai Media Office' },
      { claim: 'Frozen bank accounts', verdict: 'FALSE', source: 'Dubai Media Office' },
      { claim: 'Collapsing property market', verdict: 'FALSE', source: 'Dubai Media Office' },
    ],
    enforcementActions: [
      { action: 'Abu Dhabi Police arrests', count: '45 people', date: 'March 2026', charge: 'Filming locations during ongoing events' },
      { action: 'Dubai Police arrests', count: '25 people', date: 'March 2026', charge: 'Circulating inaccurate and misleading information' },
    ],
    incidentRestrictions: [
      { risk: 'Location exposure', description: 'Revealing sensitive locations' },
      { risk: 'Pattern analysis', description: 'Exposing movement patterns' },
      { risk: 'Routine identification', description: 'Identifying routines and neighborhoods' },
      { risk: 'Infrastructure mapping', description: 'Highlighting roads, entrances, exits' },
    ],
    factCheckOrgs: [
      { org: 'Full Fact', tier: 1, coverage: 'Extensive - Primary source for conflict misinformation' },
      { org: 'Snopes', tier: 1, coverage: 'Multiple fact-checks on Dubai/UAE claims' },
      { org: 'AFP Fact Check', tier: 1, coverage: 'Regional Middle East coverage' },
      { org: 'Reuters Fact Check', tier: 1, coverage: 'International fact-checking' },
      { org: 'FactCheck.org', tier: 1, coverage: 'Limited UAE-specific content' },
      { org: 'BBC Verify', tier: 1, coverage: 'Regional verification' },
      { org: 'PolitiFact', tier: 1, coverage: 'Limited Middle East coverage' },
    ],
    sourceCredibilityMatrix: [
      { source: 'Full Fact', tier: 1, type: 'Fact-checker (UK)', status: 'Success', reliability: 'High' },
      { source: 'Gulf News', tier: 1, type: 'Major UAE newspaper', status: 'Partial (403)', reliability: 'High' },
      { source: 'Snopes', tier: 1, type: 'Fact-checker (US)', status: 'Partial (errors)', reliability: 'High' },
      { source: 'Khaleej Times', tier: 1, type: 'Major UAE newspaper', status: 'Success', reliability: 'High' },
      { source: 'Lexology', tier: 1, type: 'Legal publication', status: 'Partial (402)', reliability: 'High' },
      { source: 'Reuters Fact Check', tier: 1, type: 'News agency', status: 'Failed (403)', reliability: 'High' },
      { source: 'AFP Fact Check', tier: 1, type: 'News agency', status: 'Failed', reliability: 'High' },
      { source: 'UAE MoFA', tier: 0, type: 'Government', status: 'Success', reliability: 'Very High' },
      { source: 'WAM', tier: 0, type: 'Government', status: 'Partial (error)', reliability: 'Very High' },
      { source: 'Dubai Media Office', tier: 0, type: 'Government', status: 'Success', reliability: 'Very High' },
    ],
    uaeRelevanceAssessment: [
      { topic: 'UAE Government Detection Methods', relevance: 'Critical', rationale: 'Direct government operations' },
      { topic: 'UAE Cybercrime Laws', relevance: 'Critical', rationale: 'Legal framework directly affecting residents' },
      { topic: 'Dubai Airport Fire Misinformation', relevance: 'Critical', rationale: 'Directly involves UAE location' },
      { topic: 'CIA Base Dubai Attack', relevance: 'Critical', rationale: 'UAE location, false claim' },
      { topic: 'Burj Khalifa AI Image', relevance: 'Critical', rationale: 'UAE landmark, fabricated attack' },
      { topic: 'Oracle Data Centre Fake News', relevance: 'Critical', rationale: 'UAE infrastructure, fabricated attack' },
      { topic: 'UAE-France Contract', relevance: 'High', rationale: 'UAE-France relations, defense' },
      { topic: 'Sudan Allegations', relevance: 'High', rationale: 'UAE foreign policy, humanitarian' },
      { topic: 'Deepfake Warnings', relevance: 'Critical', rationale: 'Direct threat to UAE residents' },
    ],
    sentimentAnalysis: [
      { topic: 'UAE Government Response', sentiment: 'Positive', polarity: '+0.7', narrative: 'Proactive, comprehensive, protective' },
      { topic: 'Misinformation Threat', sentiment: 'Negative', polarity: '-0.8', narrative: 'Severe, ongoing, sophisticated' },
      { topic: 'International Fact-Checkers', sentiment: 'Positive', polarity: '+0.6', narrative: 'Effective, thorough, timely' },
      { topic: 'Legal Framework', sentiment: 'Positive', polarity: '+0.5', narrative: 'Strict, deterrent, comprehensive' },
      { topic: 'Sudan Allegations', sentiment: 'Negative', polarity: '-0.3', narrative: 'UAE responding defensively to false claims' },
    ],
    entityPeople: [
      { name: 'Ben Colman', role: 'CEO', org: 'Reality Defender', type: 'Expert' },
      { name: 'Maha Abouelenein', role: 'Founder CEO', org: 'Digital and Savvy', type: 'Expert' },
      { name: 'Damian Reilly', role: 'Editor in Chief', org: 'Arabian Business', type: 'Expert' },
      { name: 'Hamad Saif Al Shamsi', role: 'Attorney-General', org: 'UAE', type: 'Government' },
      { name: 'Afra Al Hameli', role: 'Director of Strategic Communication', org: 'UAE MoFA', type: 'Government' },
      { name: 'Khalifa Al Mazrouei', role: 'Counselor', org: 'UAE Mission Geneva', type: 'Government' },
      { name: 'Lana Zaki Nusseibeh', role: 'Assistant Minister', org: 'UAE MoFA', type: 'Government' },
      { name: 'Mohamed Abushahab', role: 'Ambassador', org: 'UAE UN Mission', type: 'Government' },
    ],
    entityOrgs: [
      { org: 'Telecommunications and Digital Government Regulatory Authority', acronym: 'TDRA', type: 'Government', role: 'Regulation' },
      { org: 'UAE Cybersecurity Council', acronym: 'CSC', type: 'Government', role: 'Security' },
      { org: 'Dubai Media Office', acronym: 'DMO', type: 'Government', role: 'Communications' },
      { org: 'Public Prosecution', acronym: 'PP', type: 'Government', role: 'Legal enforcement' },
      { org: 'National Media Authority', acronym: 'NMA', type: 'Government', role: 'Media oversight' },
      { org: 'Full Fact', acronym: '-', type: 'NGO', role: 'Fact-checking' },
      { org: 'Snopes', acronym: '-', type: 'NGO', role: 'Fact-checking' },
      { org: 'Reality Defender', acronym: '-', type: 'Private', role: 'Deepfake detection' },
      { org: 'Dubai Police', acronym: '-', type: 'Government', role: 'Law enforcement' },
      { org: 'Abu Dhabi Police', acronym: '-', type: 'Government', role: 'Law enforcement' },
    ],
    entityLaws: [
      { law: 'UAE Cybercrime and Rumours Law', article: 'Article 52', year: '-', provision: 'Criminalizes rumors' },
      { law: 'Federal Decree-Law', article: 'No. 34', year: '2021', provision: 'Manipulated images' },
      { law: 'Wadeema\'s Law', article: '-', year: '-', provision: 'Child protection' },
    ],
    detectionMethodsList: [
      { method: 'Reverse image search', application: 'Trace image origins' },
      { method: 'SynthID watermark detection', application: 'Identify Google AI images' },
      { method: 'Visible watermarks', application: 'Detect Sora, Gemini, Grok content' },
      { method: 'Satellite imagery comparison', application: 'Verify locations' },
      { method: 'Video detail analysis', application: 'Confirm buildings, dates' },
      { method: 'Geolocation', application: 'Match landmarks, street views' },
    ],
    threePillars: [
      { pillar: 'Technology', elements: 'AI detection tools' },
      { pillar: 'Laws', elements: 'Criminalization of false information' },
      { pillar: 'Public Awareness', elements: 'Campaigns building trust in official sources' },
    ],
    reportingChannels: [
      { channel: 'Dubai Police eCrime portal', type: 'Online' },
      { channel: 'Abu Dhabi Aman service', type: 'Service' },
      { channel: 'MySafe app', type: 'Application' },
    ],
    verificationRecommendations: [
      { recommendation: 'Verify date of content' },
      { recommendation: 'Check context' },
      { recommendation: 'Confirm source' },
      { recommendation: 'Avoid reposting unreliable sources' },
      { recommendation: 'Follow official announcements only' },
    ],
    dataCompleteness: [
      { category: 'Government organizations', completeness: '100%', notes: 'All major TDRA, CSC, DMO documented' },
      { category: 'Legal framework', completeness: '90%', notes: 'Partial fetch on Lexology' },
      { category: 'Full Fact cases', completeness: '100%', notes: 'All 4 major cases retrieved' },
      { category: 'Snopes cases', completeness: '70%', notes: 'Access issues, partial' },
      { category: 'Expert quotes', completeness: '100%', notes: 'All major quotes retrieved' },
      { category: 'Sudan allegations', completeness: '100%', notes: 'Full details from MoFA' },
      { category: 'Enforcement actions', completeness: '80%', notes: 'Daily Mail blocked' },
      { category: 'Statistics', completeness: '95%', notes: 'Key metrics captured' },
    ],
  },
}


// ============================================================================
// 11-8: Echo Chamber & Filter Bubble Analysis
// ============================================================================

export const echoChamberFilterData: VerificationResult = {
  id: 'ver-11-8',
  claim:
    'UAE information ecosystem is open and diverse with minimal algorithmic filtering or echo chamber effects',
  verdict: 'partially-verified',
  accuracyScore: 48,
  sources: [
    { name: 'PMC/Törnberg (Academic)', tier: 0, reliability: 'high' },
    { name: 'Brookings Institution', tier: 1, reliability: 'high' },
    { name: 'UPenn Counterfactual Study', tier: 1, reliability: 'high' },
    { name: 'Bakshy et al. (Facebook)', tier: 0, reliability: 'high' },
    { name: 'PMC/NIH Short Video Platform Study', tier: 0, reliability: 'high' },
    { name: 'ISD (Institute for Strategic Dialogue)', tier: 2, reliability: 'high' },
    { name: 'Nature Scientific Reports', tier: 0, reliability: 'high' },
    { name: 'PNAS', tier: 0, reliability: 'high' },
  ],
  echoChamberRisk: {
    platform: 'Global Platforms (Facebook, YouTube, TikTok, Twitter/X) + UAE Domestic',
    strength: 'high',
    primaryEchos: [
      'UAE domestic media: pro-government narratives dominate with no countervailing domestic voices',
      'Algorithmic curation on global platforms creates GCC-specific information bubbles',
      'Large expat population creates linguistic/demographic bubbles (English, Arabic, South Asian content silos)',
      'Regional political sensitivity (Iran, Yemen, Palestine) limits cross-cutting exposure',
    ],
    riskLevel: 'high',
  },
  omissionData: {
    omittedFacts: [
      'Academic consensus: both echo chambers AND filter bubbles are real phenomena with measurable effects on polarization (PMC research)',
      "TikTok shows WEAK echo chamber effects in academic studies (cultural diversity reduces polarization) - but UAE strict content laws may override this",
      'Facebook: Social networks determine feed content MORE than algorithm (Bakshy et al. 2015 study of 10.1M users)',
      'Douyin/Bilibili: STRONG echo chamber effects with 85-89% common users in positive content clusters',
      'Cross-cutting content on Facebook: only 24% for liberals, 35% for conservatives',
      'YouTube: 14 of 23 studies implicate recommender system in promoting problematic content; 30% of all video views come from recommendations',
      'UAE domestic media operates in complete echo chamber — no dissenting voices permitted',
      'Psychological biases (confirmation bias, homophily) documented as major drivers of chamber formation, not just algorithms',
    ],
    significance: 'major',
    impact:
      'Echo chamber and filter bubble dynamics affect UAE citizens\' exposure to diverse viewpoints; domestic media creates complete echo chamber while global platform algorithms partially mitigate this for expat populations',
  },
  keyFindings: [
    {
      finding: 'Global Cascade Probability (random networks)',
      metric: '65%',
      source: 'PMC/Törnberg 2018',
      tier: 0,
      alert: 'YELLOW',
    },
    {
      finding: 'Global Cascade Probability (optimal polarization)',
      metric: '>85%',
      source: 'PMC/Törnberg 2018',
      tier: 0,
      alert: 'RED',
    },
    {
      finding: 'Douyin Echo Chamber Strength',
      metric: 'STRONG — 85.32% common users',
      source: 'PMC/NIH 2023',
      tier: 0,
      alert: 'RED',
    },
    {
      finding: 'TikTok Echo Chamber Strength',
      metric: 'WEAK — 92.55% controversial content',
      source: 'PMC/NIH 2023',
      tier: 0,
      alert: 'GREEN',
    },
    {
      finding: 'Cross-cutting Content (Facebook — liberals)',
      metric: '24%',
      source: 'Bakshy et al. 2015',
      tier: 0,
      alert: 'YELLOW',
    },
    {
      finding: 'Cross-cutting Content (Facebook — conservatives)',
      metric: '35%',
      source: 'Bakshy et al. 2015',
      tier: 0,
      alert: 'YELLOW',
    },
    {
      finding: 'YouTube Recommendation Studies Implicating Algorithm',
      metric: '14 of 23 studies',
      source: 'PMC7613872',
      tier: 0,
      alert: 'RED',
    },
    {
      finding: 'YouTube — Videos from Recommendations',
      metric: '30% of all views',
      source: 'PMC7613872',
      tier: 0,
      alert: 'YELLOW',
    },
    {
      finding: 'Media Literacy Intervention Effect Size (Knowledge)',
      metric: "d = 1.12 (p < .001) — large effect",
      source: 'Jeong, Cho & Hwang meta-analysis (51 studies)',
      tier: 0,
      alert: 'GREEN',
    },
  ],
  credibility: {
    tier: 2,
    score: 48,
    sources: 8,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 72,
    level: 'high',
    justification:
      'Echo chamber dynamics significantly affect information exposure for UAE\'s diverse population (88.5% expats); domestic media creates total echo chamber while global platforms offer partial mitigation',
  },
  alertLevel: 'YELLOW',
  sources2: [
    { name: 'PMC/Törnberg — Echo Chamber Model', url: 'https://pmc.ncbi.nlm.nih.gov/', tier: 0, date: '2018' },
    { name: 'Bakshy et al. — Facebook Network vs Algorithm', url: 'https://www.facebook.com', tier: 0, date: '2015' },
    { name: 'UPenn Counterfactual — YouTube Algorithm', url: 'https://UPenn.edu', tier: 1, date: '2025' },
    { name: 'PMC/NIH — Short Video Platform Study', url: 'https://pmc.ncbi.nlm.nih.gov/', tier: 0, date: '2023' },
    { name: 'Brookings — Facebook Polarization', url: 'https://brookings.edu', tier: 1, date: '2021' },
    { name: 'ISD — Coordinated Inauthentic Behaviour', url: 'https://www.isdglobal.org', tier: 2, date: '2024' },
  ],
  lastUpdated: '2026-04-27',
  extendedData: {
    echoChamberQuantificationMetrics: [
      { metric: 'Global cascade probability (random networks)', value: '65%', source: 'PMC/Törnberg', year: 2018, credibility: 'Tier 1' },
      { metric: 'Global cascade probability (optimal polarization)', value: '>85%', source: 'PMC/Törnberg', year: 2018, credibility: 'Tier 1' },
      { metric: 'Optimal network polarization peak', value: '60%', source: 'PMC/Törnberg', year: 2018, credibility: 'Tier 1' },
      { metric: 'Network polarization decline threshold', value: '>70%', source: 'PMC/Törnberg', year: 2018, credibility: 'Tier 1' },
      { metric: 'Homophily threshold (Douyin/Bilibili)', value: '<0.4', source: 'PMC/NIH', year: 2023, credibility: 'Tier 1' },
      { metric: 'KL Divergence (spatial distribution)', value: '<1', source: 'PMC/NIH', year: 2023, credibility: 'Tier 1' },
    ],
    platformEchoChamberEffects: [
      { platform: 'Douyin', echoChamberStrength: 'STRONG', dominantECType: '~50% Positive', commonUsersPercent: '85.32%', source: 'PMC10111082' },
      { platform: 'Bilibili', echoChamberStrength: 'STRONG', dominantECType: '~50% Positive', commonUsersPercent: '89.17%', source: 'PMC10111082' },
      { platform: 'TikTok', echoChamberStrength: 'WEAK', dominantECType: '>50% Controversial', commonUsersPercent: '92.55%', source: 'PMC10111082' },
      { platform: 'Facebook', echoChamberStrength: 'HIGH', dominantECType: 'Polarized clusters', commonUsersPercent: 'N/A', source: 'Brookings' },
      { platform: 'YouTube', echoChamberStrength: 'MODERATE', dominantECType: 'Ideological clustering', commonUsersPercent: 'N/A', source: 'UPenn' },
    ],
    polarizationResearchData: [
      { study: 'Bakshy et al. (Facebook)', finding: 'Social networks determine feed content more than algorithm', effectSize: 'Strong', sample: '10.1M users', year: 2015 },
      { study: 'UPenn Counterfactual', finding: 'Algorithm has moderating effect, not amplifying', effectSize: 'Moderate', sample: '87,988 users', year: 2025 },
      { study: 'Science (2025)', finding: 'Polarization may be inherent in social media', effectSize: 'Structural', sample: 'Simulation', year: 2025 },
      { study: 'PNAS (2024)', finding: 'Partisan recommendations show no short-term attitude change', effectSize: 'Null', sample: 'N/A', year: 2024 },
    ],
    youtubeRecommendationData: [
      { metric: 'Studies implicating recommender in problematic content', value: '14 of 23', source: 'PMC7613872' },
      { metric: 'Studies with mixed results', value: '7 of 23', source: 'PMC7613872' },
      { metric: 'Studies not implicating recommender', value: '2 of 23', source: 'PMC7613872' },
      { metric: 'YouTube video views from recommendations', value: '30%', source: 'PMC7613872' },
      { metric: 'Participants who saw extremist content', value: '37%', source: 'PMC7613872' },
      { metric: 'Probability of incel content within 5 steps', value: '18.8%', source: 'PMC7613872' },
      { metric: 'Videos removed (Oct-Dec 2020) - child safety', value: '3.8M', source: 'PMC7613872' },
      { metric: 'Videos removed (Oct-Dec 2020) - spam/misleading', value: '1.4M', source: 'PMC7613872' },
      { metric: 'Videos removed (Oct-Dec 2020) - harmful/abusive', value: '259K', source: 'PMC7613872' },
      { metric: 'Videos removed (Oct-Dec 2020) - violent/extremist', value: '73K', source: 'PMC7613872' },
    ],
    platformDemographics: [
      { platform: 'Douyin', under24: '18.76%', age24to30: '28.97%', age31to35: '25.23%', age36to40: '17.74%', over40: '9.30%' },
      { platform: 'TikTok', under24: '39.70%', age24to30: '37.23%', age31to35: '15.23%', age36to40: '4.74%', over40: '3.10%' },
      { platform: 'Bilibili', under24: '61.60%', age24to30: '22.88%', age31to35: '10.13%', age36to40: '3.56%', over40: '1.83%' },
    ],
    mediaLiteracyInterventions: [
      { outcome: 'Knowledge', effectSize: 'd = 1.12', significance: 'p < .001' },
      { outcome: 'Influence', effectSize: 'd = 0.60', significance: 'p < .001' },
      { outcome: 'Realism', effectSize: 'd = 0.54', significance: 'p < .001' },
      { outcome: 'Self-efficacy', effectSize: 'd = 0.34', significance: 'p < .001' },
      { outcome: 'Criticism', effectSize: 'd = 0.29', significance: 'p < .001' },
      { outcome: 'Attitudes', effectSize: 'd = 0.28', significance: 'p < .001' },
      { outcome: 'Beliefs', effectSize: 'd = 0.23', significance: 'p < .001' },
      { outcome: 'Behaviors', effectSize: 'd = 0.23', significance: 'p < .001' },
      { outcome: 'Norms', effectSize: 'd = 0.18', significance: 'NOT SIGNIFICANT' },
    ],
    selectiveExposureStatistics: [
      { metric: 'Republicans watching Fox News (vs CNN)', value: '1.5x more likely', source: 'Selective Exposure Theory' },
      { metric: 'Democrats watching CNN (vs Fox News)', value: '1.5x more likely', source: 'Selective Exposure Theory' },
      { metric: 'Cross-cutting content (liberals on Facebook)', value: '24%', source: 'Bakshy et al. 2015' },
      { metric: 'Cross-cutting content (conservatives on Facebook)', value: '35%', source: 'Bakshy et al. 2015' },
      { metric: 'Facebook friends on opposite political side', value: '15-20%', source: 'Wikipedia' },
      { metric: 'Brexit cross-cutting expressions', value: '29%', source: 'Bossetta et al. 2023' },
      { metric: 'Low diversity media consumers', value: '~8%', source: 'Dubois & Blank 2018' },
      { metric: 'Twitter cross-partisan interactions', value: '34%', source: 'Wikipedia' },
    ],
    networkSimulationParameters: [
      { parameter: 'Network size (N)', value: '100 nodes' },
      { parameter: 'Average degree (k)', value: '8' },
      { parameter: 'Cluster fraction (c)', value: '0.2 (20%)' },
      { parameter: 'Opinion polarization step', value: '0.03' },
      { parameter: 'Network polarization step', value: '0.075' },
      { parameter: 'Threshold step', value: '0.0015' },
      { parameter: 'Iterations per parameter set', value: '1,000' },
      { parameter: 'Total model runs', value: '2.4×10^8' },
      { parameter: 'Empirical validation networks', value: '37 countries' },
      { parameter: 'Random networks per combination', value: '200' },
    ],
    algorithmPersonalizationData: [
      { metric: 'Data pieces used by Google for personalization', value: '57', year: 2011 },
      { metric: 'Average cookies installed by top 50 sites', value: '64' },
      { metric: 'Tracking cookies (Dictionary.com)', value: '223' },
      { metric: 'Facebook ad revenue (Q1 2019)', value: '$15 billion', year: 2019 },
      { metric: 'Facebook ad revenue % of total', value: '99%+', year: 2019 },
    ],
    academicInstitutions: [
      { entity: 'Stanford PACS Center', role: 'Research', researchContribution: 'Political homophily structure analysis' },
      { entity: 'University of Pennsylvania', role: 'Research', researchContribution: 'YouTube algorithm counterfactual study' },
      { entity: 'Ohio State University', role: 'Research', researchContribution: 'Algorithm reality perception study' },
      { entity: 'Harvard Law School', role: 'Policy Analysis', researchContribution: 'Cass Sunstein echo chamber analysis' },
      { entity: 'Yale School of Management', role: 'Research', researchContribution: 'Media abundance/polarization study' },
      { entity: 'Nature Scientific Reports', role: 'Publication', researchContribution: 'Scale effects in filter bubbles' },
      { entity: 'PNAS', role: 'Publication', researchContribution: 'Multiple echo chamber studies' },
      { entity: 'PMC/NIH', role: 'Publication Repository', researchContribution: 'Short video platform study' },
    ],
    platformsStudied: [
      { platform: 'Google', type: 'Search', curationMethod: 'Query personalization', bubbleRisk: 'HIGH', keyStudies: 'Wikipedia, Pariser' },
      { platform: 'Facebook', type: 'Social Media', curationMethod: 'News feed ranking', bubbleRisk: 'HIGH', keyStudies: 'Brookings, Bakshy' },
      { platform: 'YouTube', type: 'Video', curationMethod: 'Autoplay recommendations', bubbleRisk: 'HIGH', keyStudies: 'UPenn, PMC7613872' },
      { platform: 'TikTok', type: 'Short Video', curationMethod: 'Algorithmic feed', bubbleRisk: 'MEDIUM', keyStudies: 'PMC10111082' },
      { platform: 'Douyin', type: 'Short Video', curationMethod: 'Algorithmic feed', bubbleRisk: 'HIGH', keyStudies: 'PMC10111082' },
      { platform: 'Bilibili', type: 'Short Video', curationMethod: 'Algorithmic feed', bubbleRisk: 'HIGH', keyStudies: 'PMC10111082' },
      { platform: 'WhatsApp', type: 'Messaging', curationMethod: 'Contact-based', bubbleRisk: 'MEDIUM', keyStudies: 'Wikipedia' },
      { platform: 'Twitter/X', type: 'Social Media', curationMethod: 'Algorithmic timeline', bubbleRisk: 'HIGH', keyStudies: 'Boutyline & Willer' },
    ],
    keyResearchers: [
      { researcher: 'Eli Pariser', institution: 'Data & Society', contribution: 'Filter bubble concept (2011)' },
      { researcher: 'Cass Sunstein', institution: 'Harvard Law', contribution: 'Democratic concerns, group polarization' },
      { researcher: 'C. Thi Nguyen', institution: 'Stanford', contribution: 'Epistemic bubble vs echo chamber distinction' },
      { researcher: 'Mattias Wahlstrom', institution: 'PNAS', contribution: 'Echo chamber effect on social media' },
      { researcher: 'Andreas Jungherr', institution: 'UPenn', contribution: 'YouTube algorithm radicalization study' },
      { researcher: 'James Bail', institution: 'Twitter/PNAS', contribution: 'Opposing views increase polarization' },
      { researcher: 'Eytan Bakshy', institution: 'Facebook', contribution: 'Network vs algorithm effects' },
      { researcher: 'Andrei Boutyline', institution: 'UC Berkeley', contribution: 'Political homophily structure' },
    ],
    policyEntities: [
      { entity: 'U.S. Congress', type: 'Legislative', contribution: 'Platform Accountability and Transparency Act' },
      { entity: 'EU Commission', type: 'Regulatory', contribution: 'Digital Services Act (DSA)' },
      { entity: 'FTC', type: 'Regulatory', contribution: 'Algorithmic accountability enforcement' },
      { entity: 'NIST', type: 'Standards', contribution: 'Algorithmic audit standardization' },
      { entity: 'Brookings Institution', type: 'Think Tank', contribution: 'Policy recommendations' },
      { entity: 'New America', type: 'Think Tank', contribution: 'Platform regulation analysis' },
    ],
    cognitiveBiases: [
      { bias: 'Confirmation bias', effectOnEchoChambers: 'Seeking confirming information', mitigationDifficulty: 'Medium' },
      { bias: 'Selection bias', effectOnEchoChambers: 'Choosing congruent sources', mitigationDifficulty: 'Medium' },
      { bias: 'Correlation neglect', effectOnEchoChambers: 'Ignoring base rates', mitigationDifficulty: 'High' },
      { bias: 'Prior attitude effect', effectOnEchoChambers: 'Discounting contrary evidence', mitigationDifficulty: 'High' },
      { bias: 'Homophily', effectOnEchoChambers: 'Associating with similar', mitigationDifficulty: 'Medium' },
    ],
    historicalEvents: [
      { eventPeriod: 'McMartin preschool trial', era: '1980s', echoChamberType: 'Pack journalism/"echo chamber of horrors"' },
      { eventPeriod: 'Rush Limbaugh radio show', era: '1990s', echoChamberType: 'First empirical echo chamber study' },
      { eventPeriod: 'Clinton-Lewinsky scandal', era: '1998', echoChamberType: 'Partisan media fragmentation' },
      { eventPeriod: 'Brexit referendum', era: '2016', echoChamberType: 'Democratic echo chamber dynamics' },
      { eventPeriod: '2016 U.S. Election', era: '2016', echoChamberType: 'Trump/Clinton Twitter communities' },
      { eventPeriod: 'January 6 Capitol', era: '2021', echoChamberType: '600+ criminal cases with social media evidence' },
    ],
    sentimentByResearchPosition: [
      { position: 'Algorithms cause polarization', sentimentScore: 'NEGATIVE (-0.7)', keySources: 'Pariser, Sunstein, Brookings', dominantEmotion: 'Concern, Alarm' },
      { position: 'Users drive consumption', sentimentScore: 'NEUTRAL (0.1)', keySources: 'UPenn, Fletcher', dominantEmotion: 'Skepticism, Uncertainty' },
      { position: 'Polarization inherent in structure', sentimentScore: 'MIXED (-0.2)', keySources: 'Science 2025', dominantEmotion: 'Resignation, Concern' },
      { position: 'Interventions effective', sentimentScore: 'MODERATE (+0.4)', keySources: 'Cambridge Episteme', dominantEmotion: 'Cautious Optimism' },
    ],
    sentimentByPlatform: [
      { platform: 'Facebook', sentimentUsers: 'NEGATIVE', sentimentResearchers: 'HIGHLY CONCERNED', consensus: 'Platform amplifies division' },
      { platform: 'YouTube', sentimentUsers: 'MIXED', sentimentResearchers: 'CONTESTED', consensus: 'Algorithm role debated' },
      { platform: 'TikTok', sentimentUsers: 'POSITIVE', sentimentResearchers: 'INTEREST', consensus: 'Cultural diversity reduces bubbles' },
      { platform: 'Douyin', sentimentUsers: 'NEUTRAL', sentimentResearchers: 'CONCERNED', consensus: 'Strong echo chamber effects' },
      { platform: 'Twitter/X', sentimentUsers: 'NEGATIVE', sentimentResearchers: 'CONCERNED', consensus: 'High polarization' },
      { platform: 'Google Search', sentimentUsers: 'NEGATIVE', sentimentResearchers: 'CONCERNED', consensus: 'Filter bubble risk' },
    ],
    topicSentiments: [
      { topic: 'Algorithmic radicalization', sentiment: '-0.45', confidence: '0.72', sourceCount: '14 studies' },
      { topic: 'User agency', sentiment: '+0.30', confidence: '0.65', sourceCount: '5 studies' },
      { topic: 'Misinformation spread', sentiment: '-0.60', confidence: '0.80', sourceCount: '8 studies' },
      { topic: 'Intervention effectiveness', sentiment: '+0.15', confidence: '0.50', sourceCount: '6 studies' },
      { topic: 'Regulatory need', sentiment: '-0.55', confidence: '0.78', sourceCount: '7 sources' },
      { topic: 'Serendipity design', sentiment: '+0.50', confidence: '0.60', sourceCount: '3 studies' },
    ],
    emotionalToneAnalysis: [
      { theme: 'Filter bubbles', primaryEmotion: 'Concern', secondaryEmotion: 'Alarm', intensity: 'HIGH' },
      { theme: 'Echo chambers', primaryEmotion: 'Alarm', secondaryEmotion: 'Frustration', intensity: 'HIGH' },
      { theme: 'User self-selection', primaryEmotion: 'Skepticism', secondaryEmotion: 'Uncertainty', intensity: 'MEDIUM' },
      { theme: 'Algorithmic effects', primaryEmotion: 'Concern', secondaryEmotion: 'Ambiguity', intensity: 'MEDIUM-HIGH' },
      { theme: 'Mitigation strategies', primaryEmotion: 'Cautious optimism', secondaryEmotion: 'Hope', intensity: 'MEDIUM' },
      { theme: 'Regulatory approaches', primaryEmotion: 'Determination', secondaryEmotion: 'Skepticism', intensity: 'MEDIUM' },
    ],
    uaeRelevanceMatrix: [
      { topicArea: 'Algorithmic curation', uaeRelevance: 'MEDIUM', rationale: 'UAE uses global platforms with same algorithms' },
      { topicArea: 'Filter bubbles', uaeRelevance: 'MEDIUM', rationale: 'Expat/regional content creates unique filtering dynamics' },
      { topicArea: 'Echo chambers', uaeRelevance: 'HIGH', rationale: 'Regional political discourse, GCC politics, cultural conservatism' },
      { topicArea: 'Misinformation', uaeRelevance: 'HIGH', rationale: 'Regional instability, sensitive political topics (Iran, Yemen, Palestine)' },
      { topicArea: 'Social media regulation', uaeRelevance: 'CRITICAL', rationale: 'UAE has strict social media laws, NSO surveillance concerns' },
      { topicArea: 'Platform accountability', uaeRelevance: 'MEDIUM', rationale: 'UAE citizens use same global platforms' },
    ],
    uaeSpecificConsiderations: [
      { factor: 'Large expat population', impact: 'Creates linguistic/demographic bubbles', evidence: 'Regional content fragmentation' },
      { factor: 'Strict media laws', impact: 'Limits local echo chamber formation', evidence: 'Government-controlled media landscape' },
      { factor: 'TikTok usage', impact: 'HIGH', evidence: 'TikTok shows WEAK echo effects (cultural diversity)' },
      { factor: 'WhatsApp dominance', impact: 'MEDIUM', evidence: 'End-to-end encryption limits visibility' },
      { factor: 'Instagram/TikTok for youth', impact: 'HIGH', evidence: '<40 demographic heavily influenced' },
      { factor: 'Regional instability', impact: 'HIGH', evidence: 'Sensitive to GCC/Iran/Yemen/Palestine content' },
    ],
    regionalEchoChamberDynamics: [
      { dynamic: 'Political homophily', presentInUAERegion: 'YES', evidence: 'GCC political alignment' },
      { dynamic: 'Algorithmic amplification', presentInUAERegion: 'YES', evidence: 'Global platforms same algorithms' },
      { dynamic: 'Cross-cutting exposure', presentInUAERegion: 'LIMITED', evidence: 'Political sensitivity' },
      { dynamic: 'Misinformation spread', presentInUAERegion: 'YES', evidence: 'Regional conflict-related' },
      { dynamic: 'Youth polarization', presentInUAERegion: 'EMERGING', evidence: 'TikTok-heavy demographics' },
    ],
    threatAssessment: [
      { threat: 'Foreign misinformation campaigns', probability: 'HIGH', impact: 'HIGH', combinedScore: 'CRITICAL' },
      { threat: 'Regional political polarization', probability: 'MEDIUM', impact: 'HIGH', combinedScore: 'HIGH' },
      { threat: 'Youth radicalization pathways', probability: 'MEDIUM', impact: 'HIGH', combinedScore: 'HIGH' },
      { threat: 'Expat-citizen information gap', probability: 'MEDIUM', impact: 'MEDIUM', combinedScore: 'MEDIUM' },
      { threat: 'Platform algorithm manipulation', probability: 'LOW', impact: 'HIGH', combinedScore: 'MEDIUM' },
      { threat: 'Domestic echo chamber formation', probability: 'LOW', impact: 'MEDIUM', combinedScore: 'LOW' },
    ],
    sourceTierClassification: [
      { source: 'PMC/NIH - Short Video Study', url: 'pmc.ncbi.nlm.nih.gov/articles/PMC10111082/', tier: 'TIER 1', rationale: 'Peer-reviewed, large sample (963 videos, 391K comments)' },
      { source: 'UPenn YouTube Study', url: 'asc.upenn.edu/news-events/news/youtube-algorithm-isnt-radicalizing-people', tier: 'TIER 1', rationale: 'Counterfactual methodology, 87,988 users' },
      { source: 'Brookings Institution', url: 'brookings.edu/articles/how-tech-platforms-fuel-u-s-political-polarization', tier: 'TIER 1', rationale: 'Well-cited think tank, 50+ studies reviewed' },
      { source: 'PNAS (Multiple)', url: 'pnas.org', tier: 'TIER 1', rationale: 'Prestigious peer-reviewed journal' },
      { source: 'Nature Scientific Reports', url: 'nature.com', tier: 'TIER 1', rationale: 'Peer-reviewed, quantitative' },
      { source: 'PMC - YouTube Systematic Review', url: 'pmc.ncbi.nlm.nih.gov/articles/PMC7613872/', tier: 'TIER 1', rationale: 'PRISMA methodology, 23 studies' },
      { source: 'Harvard Law School', url: 'hls.harvard.edu/today/danger-internet-echo-chamber/', tier: 'TIER 2', rationale: 'Expert opinion (Sunstein), institutional' },
      { source: 'Cambridge Episteme', url: 'cambridge.org/core/journals/episteme', tier: 'TIER 2', rationale: 'Peer-reviewed philosophy journal' },
    ],
    tierDistribution: [
      { tier: 'TIER 1 (Gold Standard)', count: 7, percentageOfSources: '33%' },
      { tier: 'TIER 2 (High Quality)', count: 9, percentageOfSources: '43%' },
      { tier: 'TIER 3 (Moderate)', count: 3, percentageOfSources: '14%' },
      { tier: 'TIER 4 (Low/Blog)', count: 0, percentageOfSources: '0%' },
    ],
    evidenceQualityAssessment: [
      { qualityDimension: 'Methodological rigor', score: '8.5/10', leadingSource: 'UPenn counterfactual bots' },
      { qualityDimension: 'Sample size', score: '9.0/10', leadingSource: 'PMC10111082 (391K comments)' },
      { qualityDimension: 'Reproducibility', score: '8.0/10', leadingSource: 'Törnberg simulation' },
      { qualityDimension: 'Peer review status', score: '8.5/10', leadingSource: 'PNAS, Nature' },
      { qualityDimension: 'Citation count', score: '7.5/10', leadingSource: 'Brookings (50+ studies)' },
      { qualityDimension: 'Recency', score: '7.0/10', leadingSource: 'UPenn, Science 2025' },
    ],
    sourceContentSummaries: [
      { sourceName: 'Fondation Descartes', url: 'https://www.fondationdescartes.org/en/2020/07/filter-bubbles-and-echo-chambers/', tier: 'TIER 2', dateFetched: '2026-04-28', keyDataExtracted: ['Filter bubble: intellectual isolation from personalization', 'Echo chamber: virtual communities where people share aligned beliefs', '$15 billion Facebook ad revenue Q1 2019', 'Polarization may result from virtual confrontations'] },
      { sourceName: 'PMC/NIH Short Video Platform Study', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10111082/', tier: 'TIER 1', dateFetched: '2026-04-28', keyDataExtracted: ['Sample: 963 videos, 391,676 comments, 298,762 users', '3,682 echo chambers with 34,564 members', 'Douyin: 85.32% common; TikTok: 92.55% common; Bilibili: 89.17% common'] },
      { sourceName: 'UPenn Annenberg', url: 'https://asc.upenn.edu/news-events/news/youtube-algorithm-isnt-radicalizing-people', tier: 'TIER 1', dateFetched: '2026-04-28', keyDataExtracted: ['Users\' interests play primary role, not algorithm', 'Recommender results in LESS partisan consumption', 'If impact exists, it is MODERATING not amplifying', 'Methodology: 87,988 users, Oct 2021 to Dec 2022'] },
      { sourceName: 'Brookings Institution', url: 'https://www.brookings.edu/articles/how-tech-platforms-fuel-u-s-political-polarization', tier: 'TIER 1', dateFetched: '2026-04-28', keyDataExtracted: ['Reviewed 50+ social science studies', 'Sample: 17,000 Americans (March 2021)', 'Platforms not root causes but exacerbate polarization', 'Over 600 criminal cases related to Jan 6 relied on social media'] },
    ],
    quantitativeMetrics: [
      { id: 'Q001', metric: 'Global cascade probability (random)', value: '65', unit: '%', source: 'PMC6147442', year: 2018 },
      { id: 'Q002', metric: 'Global cascade probability (optimal)', value: '>85', unit: '%', source: 'PMC6147442', year: 2018 },
      { id: 'Q003', metric: 'Optimal network polarization', value: '60', unit: '%', source: 'PMC6147442', year: 2018 },
      { id: 'Q004', metric: 'Simulation runs', value: '2.4×10^8', unit: 'runs', source: 'PMC6147442', year: 2018 },
      { id: 'Q005', metric: 'Short videos analyzed', value: '963', unit: 'videos', source: 'PMC10111082', year: 2023 },
      { id: 'Q006', metric: 'Comments analyzed', value: '391,676', unit: 'comments', source: 'PMC10111082', year: 2023 },
      { id: 'Q007', metric: 'Echo chambers identified', value: '3,682', unit: 'ECs', source: 'PMC10111082', year: 2023 },
      { id: 'Q009', metric: 'TikTok WEAK echo effect', value: '1', unit: 'binary', source: 'PMC10111082', year: 2023 },
      { id: 'Q011', metric: 'YouTube views from recommendations', value: '30', unit: '%', source: 'PMC7613872', year: 2022 },
      { id: 'Q012', metric: 'Participants seeing extremist content', value: '37', unit: '%', source: 'PMC7613872', year: 2022 },
      { id: 'Q013', metric: 'Incel content probability (5 steps)', value: '18.8', unit: '%', source: 'PMC7613872', year: 2022 },
      { id: 'Q017', metric: 'YouTube studies implicating algorithm', value: '14/23', unit: 'ratio', source: 'PMC7613872', year: 2022 },
      { id: 'Q020', metric: 'UPenn watch histories analyzed', value: '87,988', unit: 'users', source: 'UPenn', year: 2025 },
      { id: 'Q021', metric: 'Media literacy effect size', value: '0.37', unit: 'd', source: 'PMC3377317', year: 2012 },
      { id: 'Q023', metric: 'Cross-cutting exposure (liberals)', value: '24', unit: '%', source: 'Bakshy 2015', year: 2015 },
      { id: 'Q024', metric: 'Cross-cutting exposure (conservatives)', value: '35', unit: '%', source: 'Bakshy 2015', year: 2015 },
    ],
    qualitativeFindings: [
      { id: 'F001', finding: 'Echo chambers and filter bubbles are distinct phenomena', category: 'Definition', source: 'Cambridge Episteme', consensus: 'High' },
      { id: 'F002', finding: 'Algorithms influence but don\'t solely determine exposure', category: 'Algorithmic Effect', source: 'Multiple', consensus: 'High' },
      { id: 'F003', finding: 'User preferences play primary role in consumption', category: 'User Agency', source: 'UPenn', consensus: 'Moderate' },
      { id: 'F004', finding: 'TikTok\'s linguistic diversity reduces bubbles', category: 'Platform Effect', source: 'PMC10111082', consensus: 'High' },
      { id: 'F005', finding: 'Douyin/Bilibili show strong echo effects', category: 'Platform Effect', source: 'PMC10111082', consensus: 'High' },
      { id: 'F006', finding: 'Polarization may be inherent in social media', category: 'Structure', source: 'Science 2025', consensus: 'Moderate' },
      { id: 'F007', finding: 'Interventions effective for bubbles, not chambers', category: 'Intervention', source: 'Cambridge Episteme', consensus: 'High' },
      { id: 'F008', finding: 'Exposure to opposing views can increase polarization', category: 'Counterintuitive', source: 'Bail 2018', consensus: 'High' },
      { id: 'F009', finding: 'Misinformation largely a symptom of polarization', category: 'Root Cause', source: 'Altay 2022', consensus: 'Moderate' },
      { id: 'F013', finding: 'Echo chambers boost viral misinformation spread', category: 'Mechanism', source: 'Törnberg', consensus: 'High' },
    ],
    consensusMatrix: [
      { finding: 'Filter bubbles exist as algorithmic phenomenon', consensusLevel: 'HIGH', supportingSources: 'All sources', challengingSources: 'UPenn (user agency)' },
      { finding: 'Echo chambers exist as social phenomenon', consensusLevel: 'HIGH', supportingSources: 'All sources', challengingSources: 'PNAS 2024 (null effect)' },
      { finding: 'Algorithms influence exposure', consensusLevel: 'HIGH', supportingSources: 'All sources', challengingSources: 'UPenn (moderating only)' },
      { finding: 'Algorithms are sole/predominant cause', consensusLevel: 'MODERATE-LOW', supportingSources: 'Pariser, Sunstein', challengingSources: 'UPenn, Fletcher' },
      { finding: 'User self-selection drives consumption', consensusLevel: 'MODERATE-HIGH', supportingSources: 'UPenn, Bakshy', challengingSources: 'Brookings' },
      { finding: 'Simple interventions reduce polarization', consensusLevel: 'LOW', supportingSources: 'Media literacy', challengingSources: 'Cambridge Episteme' },
      { finding: 'Serendipity design is promising', consensusLevel: 'MODERATE', supportingSources: 'ACM, CIRS', challengingSources: 'Limited evidence' },
    ],
    methodologicalQuality: [
      { method: 'Counterfactual bots', studies: '1', qualityScore: '9.0/10', keyLimitation: 'Simulated vs real behavior' },
      { method: 'Large-scale simulation', studies: '1', qualityScore: '8.5/10', keyLimitation: 'Model assumptions' },
      { method: 'PRISMA systematic review', studies: '1', qualityScore: '8.0/10', keyLimitation: 'Publication bias' },
      { method: 'Field experiment', studies: '2', qualityScore: '8.5/10', keyLimitation: 'External validity' },
      { method: 'Network analysis', studies: '3', qualityScore: '7.5/10', keyLimitation: 'Cross-sectional' },
      { method: 'Meta-analysis', studies: '1', qualityScore: '8.0/10', keyLimitation: 'Heterogeneity' },
      { method: 'Platform data mining', studies: '2', qualityScore: '7.0/10', keyLimitation: 'Limited access' },
    ],
    researchGaps: [
      { gap: 'Long-term vs. short-term effects', description: 'Most studies examine short-term exposure; long-term attitude formation remains unclear' },
      { gap: 'Causal identification', description: 'Distinguishing algorithm effects from user self-selection remains methodologically challenging' },
      { gap: 'Cross-platform dynamics', description: 'Most studies examine single platforms; cross-platform information flows less understood' },
      { gap: 'Cultural variation', description: 'Most research focuses on Western platforms; global applicability uncertain' },
      { gap: 'Intervention effectiveness', description: 'Which interventions actually reduce polarization without suppressing legitimate expression?' },
      { gap: 'UAE/Regional context', description: 'No studies identified examining Middle Eastern or UAE-specific echo chamber dynamics' },
    ],
  },
}

// ============================================================================
// 11-9: Bot & Inauthentic Behavior
// ============================================================================

export const botInauthenticData: VerificationResult = {
  id: 'ver-11-9',
  claim: 'UAE social media presence is organic and represents genuine public sentiment',
  verdict: 'false',
  accuracyScore: 10,
  sources: [
    { name: 'Marc Owen Jones (Hamad bin Khalifa University)', tier: 1, reliability: 'high' },
    { name: 'Al Jazeera Investigative', tier: 1, reliability: 'high' },
    { name: 'Freedom House', tier: 1, reliability: 'high' },
    { name: 'POMEPS', tier: 1, reliability: 'high' },
    { name: 'CarbonCopy Research', tier: 1, reliability: 'high' },
    { name: 'Botometer/OSoMe (Indiana University)', tier: 1, reliability: 'high' },
    { name: 'WashingtonIDS', tier: 1, reliability: 'high' },
    { name: 'Washington Post', tier: 1, reliability: 'high' },
  ],
  botInauthenticScore: 94,
  echoChamberRisk: {
    platform: 'Twitter/X, Facebook, Instagram, YouTube',
    strength: 'critical',
    primaryEchos: [
      'Pro-UAE bot networks amplify state narratives across global platforms',
      'Bot armies inflate engagement metrics on official UAE content',
      'Coordinated campaigns suppress dissident voices and alternative narratives',
      'AI-generated profile photos used to create false authentic-seeming accounts',
    ],
    riskLevel: 'critical',
  },
  keyFindings: [
    {
      finding: 'RSF-Aligned Bot Network (Oct 2025)',
      metric: '18,709-19,514 bots (89-93% of accounts)',
      source: 'Marc Owen Jones, Substack',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'RSF Bot Network — Impressions Generated',
      metric: '91+ million',
      source: 'Marc Owen Jones',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'COP28 Greenwashing Bot Network',
      metric: '1,900+ bots, ~7,000 total network',
      source: 'CarbonCopy/Marc Owen Jones',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'STC Bot Accounts (Southern Yemen)',
      metric: '5,000+ bots detected',
      source: 'Marc Owen Jones',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Twitter Suspended UAE Accounts (2019)',
      metric: '4,258 accounts',
      source: 'Al Jazeera',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Fake Accounts (Pro-MBZ Posts)',
      metric: 'Up to 91%',
      source: 'Freedom House 2023',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Twitter Removal Requests Compliance Rate (2021)',
      metric: '88.5%',
      source: 'Freedom House',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Hired Defamation Companies (Astroturf Operations)',
      metric: 'Confirmed — targeting Ahmed Mansoor, Nasser bin Ghaith, Jamal Khashoggi',
      source: 'WashingtonIDS',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Botometer Daily Query Capacity',
      metric: '8.6 million (maximum)',
      source: 'Botometer/OSoMe',
      tier: 1,
      alert: 'YELLOW',
    },
  ],
  credibility: {
    tier: 2,
    score: 10,
    sources: 8,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 96,
    level: 'critical',
    justification:
      'Bot and inauthentic behavior directly undermines information integrity; documented networks reaching 19,000+ accounts and 91M+ impressions represent massive state-sponsored manipulation of online discourse',
  },
  alertLevel: 'RED',
  sources2: [
    { name: 'Marc Owen Jones — 19,000 UAE-Aligned Bots', url: 'https://marcowenjones.substack.com/p/i-found-19000-uae-aligned-bots-promoting', tier: 1, date: '2025-12-31' },
    { name: 'Marc Owen Jones — 5,000+ STC Bot Accounts', url: 'https://marcowenjones.substack.com/p/analysis-i-detected-over-5000-bot', tier: 1, date: '2025-12-20' },
    { name: 'CarbonCopy — COP28 Bot Network', url: 'https://carboncopy.info/research-identifies-bots-engaged-in-greenwashing-during-cop28/', tier: 1, date: '2023-12-11' },
    { name: 'Al Jazeera — Twitter Suspended UAE Accounts', url: 'https://www.aljazeera.com/news/2019/9/20/twitter-suspends-thousands-of-fake-accounts-from-uae', tier: 1, date: '2019-09-20' },
    { name: 'Freedom House — UAE Freedom on the Net 2023', url: 'https://freedomhouse.org/country/united-arab-emirates/freedom-net/2023', tier: 1, date: '2023' },
    { name: 'WashingtonIDS — Hired Defamation Companies', url: 'https://washingtonids.org/the-uaes-use-of-hired-defamation-companies-a-new-low-in-political-repression/', tier: 1, date: '2024' },
  ],
  lastUpdated: '2026-04-27',
  // =========================================================================
  // 11-9 ENRICHED DATA FROM MD FILE
  // =========================================================================
  uaeRelevanceMatrix: [
    { topic: '19,000 RSF-Aligned Bots (Oct 2025)', uaeRelevance: 'CRITICAL', severity: 'Extreme', confidence: 'HIGH' },
    { topic: 'COP28 Greenwashing Bot Network', uaeRelevance: 'CRITICAL', severity: 'High', confidence: 'HIGH' },
    { topic: '5,000+ STC Bot Accounts (Yemen)', uaeRelevance: 'CRITICAL', severity: 'Extreme', confidence: 'HIGH' },
    { topic: 'Twitter Suspension (2019)', uaeRelevance: 'CRITICAL', severity: 'High', confidence: 'HIGH' },
    { topic: 'Hired Defamation Companies', uaeRelevance: 'CRITICAL', severity: 'Extreme', confidence: 'HIGH' },
    { topic: 'Fake African Accounts Network', uaeRelevance: 'CRITICAL', severity: 'High', confidence: 'MEDIUM' },
    { topic: 'Sock Puppet Operations', uaeRelevance: 'HIGH', severity: 'High', confidence: 'HIGH' },
    { topic: 'Troll Farm Infrastructure', uaeRelevance: 'HIGH', severity: 'Medium', confidence: 'MEDIUM' },
    { topic: 'Synthetic Identity Fraud', uaeRelevance: 'MEDIUM', severity: 'Medium', confidence: 'LOW' },
    { topic: 'AI Deepfake Warnings', uaeRelevance: 'MEDIUM', severity: 'Medium', confidence: 'HIGH' },
    { topic: 'Engagement Fraud (Influencers)', uaeRelevance: 'MEDIUM', severity: 'Medium', confidence: 'MEDIUM' },
  ],
  sourceCredibilityMatrix: [
    { source: 'Freedom House', tier: 0, credibilityScore: 10, trustLevel: 'VERIFIED', urlStatus: 'Accessible' },
    { source: 'Academic/Peer-Reviewed', tier: 0, credibilityScore: 10, trustLevel: 'VERIFIED', urlStatus: 'Partial (Sage blocked)' },
    { source: 'Marc Owen Jones (Substack)', tier: 1, credibilityScore: 9, trustLevel: 'HIGH', urlStatus: 'Substack accessible' },
    { source: 'Al Jazeera', tier: 1, credibilityScore: 9, trustLevel: 'HIGH', urlStatus: 'Accessible' },
    { source: 'POMEPS', tier: 1, credibilityScore: 9, trustLevel: 'HIGH', urlStatus: 'Accessible' },
    { source: 'CarbonCopy', tier: 1, credibilityScore: 8, trustLevel: 'HIGH', urlStatus: 'Accessible' },
    { source: 'WashingtonIDS', tier: 1, credibilityScore: 9, trustLevel: 'HIGH', urlStatus: 'Accessible' },
    { source: 'Botometer/OSoMe (Indiana)', tier: 1, credibilityScore: 9, trustLevel: 'HIGH', urlStatus: 'Landing page only' },
    { source: 'Wikipedia', tier: 2, credibilityScore: 7, trustLevel: 'MEDIUM', urlStatus: 'Accessible' },
    { source: 'Middle East Eye', tier: 2, credibilityScore: 7, trustLevel: 'MEDIUM', urlStatus: 'Blocked (403)' },
    { source: 'Gulf News', tier: 2, credibilityScore: 7, trustLevel: 'MEDIUM', urlStatus: 'Accessible' },
    { source: 'OpenDemocracy', tier: 2, credibilityScore: 7, trustLevel: 'MEDIUM', urlStatus: 'Accessible' },
    { source: 'Arabian Business', tier: 3, credibilityScore: 6, trustLevel: 'MEDIUM', urlStatus: 'Partial (some blocked)' },
    { source: 'Khaleej Times', tier: 3, credibilityScore: 6, trustLevel: 'MEDIUM', urlStatus: 'Blocked (403)' },
    { source: 'Reddit', tier: 3, credibilityScore: 5, trustLevel: 'LOW-MEDIUM', urlStatus: 'Blocked' },
    { source: 'Misbar', tier: 3, credibilityScore: 6, trustLevel: 'MEDIUM', urlStatus: 'Blocked' },
    { source: 'The Cradle', tier: 3, credibilityScore: 6, trustLevel: 'MEDIUM', urlStatus: 'Blocked' },
    { source: 'incyber', tier: 3, credibilityScore: 5, trustLevel: 'LOW', urlStatus: 'Blocked' },
    { source: 'Global Witness', tier: 2, credibilityScore: 7, trustLevel: 'MEDIUM', urlStatus: 'Blocked' },
  ],
  entityRegistry: [
    { entity: 'DotDev', type: 'Company', country: 'UAE (Abu Dhabi)', role: 'Managed fake account operation' },
    { entity: 'Astroturf', type: 'Company', country: 'UAE (hired)', role: 'Smear campaigns against dissidents' },
    { entity: 'New Waves', type: 'Company', country: 'Egypt (Giza)', role: 'Egyptian affiliate of DotDev' },
    { entity: 'Newave', type: 'Company', country: 'UAE', role: 'Part of UAE network' },
    { entity: 'SMAAT', type: 'Company', country: 'MENA', role: '88,000+ accounts removed' },
    { entity: 'Saudi 24', type: 'Company', country: 'Saudi Arabia', role: 'Connected to Diavolo network' },
    { entity: 'Botometer/OSoMe', type: 'ResearchOrganization', country: 'USA (Indiana Univ)', role: 'Bot detection tool' },
    { entity: 'Modash.io', type: 'Company', country: 'Israel', role: 'Influencer audit' },
    { entity: 'Ahmed Mansoor', type: 'Individual', role: 'Human rights activist - targeting by UAE' },
    { entity: 'Nasser bin Ghaith', type: 'Individual', role: 'Academic - 10-year sentence' },
    { entity: 'Jamal Khashoggi', type: 'Individual', role: 'Journalist - killed 2018' },
    { entity: 'Marc Owen Jones', type: 'Researcher', country: 'Hamad bin Khalifa University', role: 'Bot network analysis' },
    { entity: 'Rauchfleisch & Kaiser', type: 'Researcher', country: 'Harvard', role: 'Bot detection limitations' },
    { entity: 'Don', type: 'Individual', role: 'Troll farm leader - Arab operations' },
    { entity: 'TDRA', type: 'GovernmentAgency', country: 'UAE', role: 'Telecommunications regulation' },
    { entity: 'Cybersecurity Council', type: 'GovernmentAgency', country: 'UAE', role: 'Digital threat response' },
    { entity: 'Freedom House', type: 'ResearchOrganization', country: 'USA', role: 'Internet freedom monitoring' },
  ],
  sentimentAnalysis: [
    { topic: 'UAE Bot Operations', overallSentiment: 'HIGHLY NEGATIVE', dominantNarrative: 'State-sponsored manipulation, propaganda', sourceDiversity: 'Multiple independent sources' },
    { topic: 'RSF Campaign Support', overallSentiment: 'NEGATIVE', dominantNarrative: 'Deceptive framing of Sudan conflict', sourceDiversity: 'Academic + journalist' },
    { topic: 'COP28 Greenwashing', overallSentiment: 'NEGATIVE', dominantNarrative: 'Environmental credibility manipulation', sourceDiversity: 'Academic + journalist' },
    { topic: 'STC/Yemen Operations', overallSentiment: 'NEGATIVE', dominantNarrative: 'Regional destabilization', sourceDiversity: 'Academic + journalist' },
    { topic: 'Troll Farm Infrastructure', overallSentiment: 'NEGATIVE', dominantNarrative: 'Exploitative labor, manipulation', sourceDiversity: 'Academic + journalist' },
    { topic: 'African Propaganda', overallSentiment: 'NEGATIVE', dominantNarrative: 'Exploitation of African populations', sourceDiversity: 'Multiple sources' },
    { topic: 'Fake Engagement (Influencers)', overallSentiment: 'NEGATIVE', dominantNarrative: 'Commercial deception', sourceDiversity: 'Industry reports' },
    { topic: 'Deepfake Warnings', overallSentiment: 'NEUTRAL-POSITIVE', dominantNarrative: 'Government response/responsibility', sourceDiversity: 'Government + business' },
    { topic: 'Bot Detection', overallSentiment: 'NEUTRAL', dominantNarrative: 'Technical/tool perspective', sourceDiversity: 'Academic sources' },
  ],
  keySourceCitations: [
    { number: 1, source: 'Marc Owen Jones (19,000 bots)', type: 'Substack', tier: 1, uaeRelevance: 'CRITICAL', url: 'https://marcowenjones.substack.com/p/i-found-19000-uae-aligned-bots-promoting' },
    { number: 2, source: 'Marc Owen Jones (5,000 STC bots)', type: 'Substack', tier: 1, uaeRelevance: 'CRITICAL', url: 'https://marcowenjones.substack.com/p/analysis-i-detected-over-5000-bot' },
    { number: 3, source: 'CarbonCopy (COP28)', type: 'Research', tier: 1, uaeRelevance: 'CRITICAL', url: 'https://carboncopy.info/research-identifies-bots-engaged-in-greenwashing-during-cop28/' },
    { number: 4, source: 'POMEPS (Gulf Twitter)', type: 'Research', tier: 1, uaeRelevance: 'CRITICAL', url: 'https://pomeps.org/tracking-adversaries-and-first-responding-to-disinfo-ops-the-evolution-of-deception-and-manipulation-tactics-on-gulf-twitter' },
    { number: 5, source: 'Al Jazeera (2019 suspension)', type: 'News', tier: 1, uaeRelevance: 'CRITICAL', url: 'https://www.aljazeera.com/news/2019/9/20/twitter-suspends-thousands-of-fake-accounts-from-uae' },
    { number: 6, source: 'WashingtonIDS (defamation)', type: 'Research', tier: 1, uaeRelevance: 'CRITICAL', url: 'https://washingtonids.org/the-uaes-use-of-hired-defamation-companies-a-new-low-in-political-repression/' },
    { number: 7, source: 'Freedom House 2023', type: 'NGO Report', tier: 0, uaeRelevance: 'CRITICAL', url: 'https://freedomhouse.org/country/united-arab-emirates/freedom-net/2023' },
    { number: 8, source: 'Botometer/OSoMe', type: 'Tool', tier: 1, uaeRelevance: 'MEDIUM', url: 'https://botometer.osome.iu.edu/' },
    { number: 9, source: 'Gulf News (misinformation)', type: 'News', tier: 2, uaeRelevance: 'MEDIUM', url: 'https://gulfnews.com/amp/story/uae%2Fhow-the-uae-is-tackling-digital-misinformation-and-online-smear-campaigns-1.500519024' },
    { number: 10, source: 'Trends Research (AI influence)', type: 'Research', tier: 2, uaeRelevance: 'HIGH', url: 'https://trendsresearch.org/insight/ai-driven-influence-operations-threats-to-middle-eastern-information-sovereignty-in-the-age-of-synthetic-media/' },
  ],
  dashboardKPIs: [
    { kpi: 'Largest UAE Bot Network', value: '19,514 accounts', lastUpdated: 'Dec 2025' },
    { kpi: 'COP28 Bot Network', value: '7,000 accounts', lastUpdated: 'Dec 2023' },
    { kpi: 'STC Yemen Bot Network', value: '5,626 estimated bots', lastUpdated: 'Dec 2025' },
    { kpi: 'Twitter UAE Suspension (2019)', value: '4,258 accounts', lastUpdated: 'Sep 2019' },
    { kpi: 'Diavolo Network (Saudi)', value: '3,700 accounts', lastUpdated: 'Jan 2020' },
    { kpi: 'Troll Farm Operators', value: '~500 people', lastUpdated: 'Mar 2019' },
    { kpi: 'SMAAT Removed Accounts', value: '88,000+', lastUpdated: '2019' },
    { kpi: 'RSF Campaign Impressions', value: '91+ million', lastUpdated: 'Oct-Nov 2025' },
    { kpi: 'Iranian Campaign (UK) Impressions', value: '224 million', lastUpdated: '2020' },
    { kpi: 'Removed Account Followers', value: '31 million+', lastUpdated: '2020' },
    { kpi: 'Propaganda Advertising Spend', value: '$1.3 million+', lastUpdated: '2020' },
    { kpi: 'Dubai Bling Fake Followers', value: '9.1 million+', lastUpdated: 'Nov 2023' },
    { kpi: 'GCC Influencers with Fake Followers', value: '~30%', lastUpdated: '2023' },
    { kpi: 'Bot Account Accuracy (AUC)', value: '0.99', lastUpdated: '2024' },
  ],
  urlFetchStatus: [
    { url: 'marcowenjones.substack.com (19k)', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
    { url: 'marcowenjones.substack.com (5k)', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
    { url: 'carboncopy.info', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
    { url: 'aljazeera.com', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
    { url: 'freedomhouse.org', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
    { url: 'washingtonids.org', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
    { url: 'pomeps.org', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
    { url: 'gulfnews.com', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'GOOD' },
    { url: 'trendsresearch.org', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'GOOD' },
    { url: 'opendemocracy.net', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'GOOD' },
    { url: 'en.wikipedia.org', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'GOOD' },
    { url: 'cyber.harvard.edu', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'GOOD' },
    { url: 'pmc.ncbi.nlm.nih.gov', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
    { url: 'botometer.osome.iu.edu', status: 'PARTIAL', dataExtracted: 'Landing page only', contentQuality: 'LIMITED' },
    { url: 'middleeasteye.net', status: 'BLOCKED (403)', dataExtracted: 'None', contentQuality: '--' },
    { url: 'khaleejtimes.com', status: 'BLOCKED (403)', dataExtracted: 'None', contentQuality: '--' },
    { url: 'journals.sagepub.com', status: 'BLOCKED', dataExtracted: 'None', contentQuality: '--' },
    { url: 'misbar.com', status: 'BLOCKED', dataExtracted: 'None', contentQuality: '--' },
    { url: 'thecradle.co', status: 'BLOCKED', dataExtracted: 'None', contentQuality: '--' },
    { url: 'incyber.org', status: 'BLOCKED', dataExtracted: 'None', contentQuality: '--' },
  ],
  researchNotes: [
    'Language Detection Gap: Botometer\'s documented imprecision for non-English accounts (particularly Arabic) significantly affects UAE-focused bot detection accuracy.',
    'Network Persistence: Despite Twitter/X takedowns (4,258+ accounts in 2019), UAE-aligned networks have continued operating and growing, demonstrating resilience and adaptation.',
    'Cross-Platform Expansion: Operations documented across Twitter/X, Facebook, Instagram, YouTube, Reddit, and TikTok, indicating multi-platform manipulation strategy.',
    'Recurring Patterns: Similar bot network structures (generals/minions hierarchy) observed across RSF campaign (2025), COP28 (2023), and COP29 Azerbaijan (2024).',
    'Casual Labor Market: Troll farm workers earning Dh2,000-Dh5,000/month represents significant casual labor market for disinformation.',
    'Total URLs: 35 | Fully accessible: 13 (37%) | Partially accessible: 8 (23%) | Blocked: 14 (40%)',
  ],
  botNetworkScale: [
    { kpi: 'Largest UAE Bot Network', value: '19,514 accounts', lastUpdated: 'Dec 2025' },
    { kpi: 'COP28 Bot Network', value: '7,000 accounts', lastUpdated: 'Dec 2023' },
    { kpi: 'STC Yemen Bot Network', value: '5,626 estimated bots', lastUpdated: 'Dec 2025' },
    { kpi: 'Twitter UAE Suspension (2019)', value: '4,258 accounts', lastUpdated: 'Sep 2019' },
    { kpi: 'Diavolo Network (Saudi)', value: '3,700 accounts', lastUpdated: 'Jan 2020' },
    { kpi: 'Troll Farm Operators', value: '~500 people', lastUpdated: 'Mar 2019' },
    { kpi: 'SMAAT Removed Accounts', value: '88,000+', lastUpdated: '2019' },
  ],
  engagementFraud: [
    { kpi: 'Dubai Bling Fake Followers', value: '9.1 million+', source: 'Modash.io' },
    { kpi: 'GCC Influencers with Fake Followers', value: '~30%', source: 'UAE Barq' },
    { kpi: 'Fake FB/IG Accounts Removed', value: '4,000+', source: 'OpenDemocracy' },
    { kpi: 'Fake Twitter Accounts Removed', value: '100,000+', source: 'OpenDemocracy' },
  ],
  impactKPIs: [
    { kpi: 'RSF Campaign Impressions', value: '91+ million', context: 'Oct-Nov 2025' },
    { kpi: 'Iranian Campaign (UK) Impressions', value: '224 million', context: '2020' },
    { kpi: 'Removed Account Followers', value: '31 million+', context: 'OpenDemocracy' },
    { kpi: 'Propaganda Advertising Spend', value: '$1.3 million+', context: 'OpenDemocracy' },
  ],
  detectionConfidence: [
    { kpi: 'Bot Account Accuracy (AUC)', value: '0.99', source: 'Botometer-V4' },
    { kpi: 'Non-English Detection Limitation', value: 'HIGH', source: 'Harvard study' },
    { kpi: 'False Positive Risk', value: 'Significant', source: 'Academic consensus' },
  ],
}

// ============================================================================
// 11-10: Coordinated Inauthentic Behavior (CIB)
// ============================================================================

export const coordinatedInauthenticData: VerificationResult = {
  id: 'ver-11-10',
  claim:
    'UAE does not engage in coordinated inauthentic behavior on social media platforms',
  verdict: 'false',
  accuracyScore: 8,
  sources: [
    { name: 'Meta Newsroom', tier: 1, reliability: 'high' },
    { name: 'POMEPS', tier: 1, reliability: 'high' },
    { name: 'DFRLab', tier: 1, reliability: 'high' },
    { name: 'ISD', tier: 2, reliability: 'high' },
    { name: 'Cyfluence Research', tier: 2, reliability: 'medium' },
    { name: 'EU DisinfoLab', tier: 2, reliability: 'high' },
    { name: 'PMC/NCBI', tier: 2, reliability: 'high' },
    { name: 'Reality Team', tier: 3, reliability: 'medium' },
    { name: 'SAGE Journals', tier: 2, reliability: 'high' },
  ],
  botInauthenticScore: 97,
  echoChamberRisk: {
    platform: 'Facebook, Instagram, Twitter/X, YouTube, TikTok, Telegram, VKontakte',
    strength: 'critical',
    primaryEchos: [
      'Coordinated networks amplify pro-UAE narratives across multiple platforms simultaneously',
      'Astroturfing creates false impression of grassroots support for state positions',
      'Cross-platform operations create compounding echo effects across Facebook, Instagram, YouTube, TikTok',
      'Marketing firms (New Waves, Newave, Charles Communications) operate sophisticated CIB infrastructure',
      'AI-generated profile photos now used to create authentic-seeming false accounts',
    ],
    riskLevel: 'critical',
  },
  keyFindings: [
    {
      finding: 'Total MENA Takedowns (2018-2021)',
      metric: '46 documented operations',
      source: 'POMEPS',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'UAE-Linked Platform Takedowns',
      metric: '6 documented operations',
      source: 'POMEPS',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Egypt-Linked Takedowns',
      metric: '10 operations',
      source: 'POMEPS',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Saudi Arabia-Linked Takedowns',
      metric: '5 operations',
      source: 'POMEPS',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Iran-Linked Takedowns (MENA)',
      metric: '20 operations (largest category)',
      source: 'POMEPS',
      tier: 1,
      alert: 'YELLOW',
    },
    {
      finding: 'Aug 2019 Takedown — Facebook Accounts Removed (UAE+Egypt)',
      metric: '259 accounts',
      source: 'Meta Newsroom',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Aug 2019 Takedown — Pages Removed (UAE+Egypt)',
      metric: '102 pages',
      source: 'Meta Newsroom',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Aug 2019 Takedown — Page Followers (Combined)',
      metric: '13.7+ million',
      source: 'Meta Newsroom/DFRLab',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Aug 2019 Takedown — Ad Spend (UAE+Egypt+SA)',
      metric: '~$275,000',
      source: 'Meta Newsroom',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Aug 2019 Takedown — Total Assets Removed',
      metric: '387 assets',
      source: 'DFRLab',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Oct 2019 Takedown — UAE Accounts (Charles Communications)',
      metric: '211 accounts, 107 pages',
      source: 'Meta Newsroom',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Oct 2019 Takedown — Ad Spend (UAE operation)',
      metric: '<$150,000',
      source: 'Meta Newsroom',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Average Accounts Removed per Gulf Takedown',
      metric: '214 accounts',
      source: 'Meta Newsroom',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Marketing Firm-Linked Operations',
      metric: '26% of total MENA operations',
      source: 'POMEPS',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Government-Linked Operations',
      metric: '24% of total',
      source: 'POMEPS',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'AI-Generated Profile Photos (2024-2025)',
      metric: '6 new CIB operations documented',
      source: 'Quartz/Cyfluence',
      tier: 2,
      alert: 'RED',
    },
    {
      finding: 'Cross-Platform CIB Operations',
      metric: 'Norm, not exception',
      source: 'Meta Q1 2025 Report',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Romania Operation Scale (Q1 2025)',
      metric: '~20,000 accounts, $177K ad spend',
      source: 'Cyfluence/The Hacker News',
      tier: 2,
      alert: 'RED',
    },
    {
      finding: 'A7aassess Page Followers (top amplifier)',
      metric: '2.3-2.4 million',
      source: 'DFRLab',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Newave Operation Start Date',
      metric: '2015 (4+ years active before takedown)',
      source: 'DFRLab',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Primary Targets',
      metric: 'Qatar, Turkey, Iran, Muslim Brotherhood',
      source: 'Meta Newsroom',
      tier: 1,
      alert: 'RED',
    },
  ],
  credibility: {
    tier: 2,
    score: 8,
    sources: 9,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 98,
    level: 'critical',
    justification:
      'Coordinated inauthentic behavior represents the most sophisticated form of information manipulation; documented UAE-linked operations with 13.7M+ reach demonstrate systematic state-backed influence operations',
  },
  alertLevel: 'RED',
  sources2: [
    { name: 'Meta Newsroom — UAE Egypt Saudi Arabia CIB Removal Aug 2019', url: 'https://about.fb.com/news/2019/08/cib-uae-egypt-saudi-arabia/', tier: 1, date: '2019-08' },
    { name: 'Meta Newsroom — UAE Nigeria Indonesia Egypt Oct 2019', url: 'https://about.fb.com/news/2019/10/removing-coordinated-inauthentic-behavior-in-uae-nigeria-indonesia-and-egypt/', tier: 1, date: '2019-10' },
    { name: 'POMEPS — Social Media Manipulation MENA', url: 'https://pomeps.org/social-media-manipulation-in-the-mena-inauthenticity-inequality-and-insecurity', tier: 1, date: '2021' },
    { name: 'DFRLab — Facebook Disabled Assets Analysis', url: 'https://medium.com/dfrlab/facebook-disabled-assets-linked-to-egypt-and-uae-based-firms-a232d9effc32', tier: 1, date: '2019-08-14' },
    { name: 'Meta Q1 2025 Adversarial Threat Report', url: 'https://transparency.meta.com/sr/Q1-2025-Adversarial-threat-report/', tier: 1, date: '2025' },
    { name: 'EU DisinfoLab — CIB Detection Tree', url: 'https://www.disinfo.eu/publications/coordinated-inauthentic-behaviour-detection-tree/', tier: 2, date: '2024' },
    { name: 'Cyfluence Research — Meta CIB Operations', url: 'https://www.cyfluence-research.org/post/meta-takes-down-global-cib-operations-from-iran-china-and-romania', tier: 2, date: '2025' },
    { name: 'PMC — Coordinated Inauthentic Behavior Research', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10060790/', tier: 2, date: '2023' },
    { name: 'SAGE Journals — CIB Typology', url: 'https://journals.sagepub.com/doi/10.1177/29768624251369784', tier: 2, date: '2025' },
    { name: 'Quartz — Meta AI Disinformation', url: 'https://qz.com/meta-shut-down-campaigns-ai-generated-disinformation-1851507133', tier: 2, date: '2024' },
    { name: 'Reality Team — CIB Overview', url: 'https://realityteam.org/cards/coordinated-inauthentic-behavior/', tier: 3, date: '2025' },
    { name: 'The Hacker News — Meta Influence Ops', url: 'https://thehackernews.com/2025/05/meta-disrupts-influence-ops-targeting.html', tier: 3, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// CIB-specific data for dashboard enhancement
export const cibMetrics = {
  // KPI Summary
  kpis: {
    totalMenaTakedowns: 46,
    uaeLinkedTakedowns: 6,
    egyptLinkedTakedowns: 10,
    saudiLinkedTakedowns: 5,
    iranLinkedTakedowns: 20,
    avgAccountsPerGulfTakedown: 214,
    combinedAdSpendAug2019: 275000,
    marketingFirmOperations: 26,
    governmentLinkedOperations: 24,
    aiGeneratedOps2024: 6,
  },

  // Takedown timeline
  takedowns: [
    {
      id: 'aug-2019-uae-egypt',
      date: 'August 2019',
      origin: 'UAE & Egypt',
      accounts: 259,
      pages: 102,
      groups: 5,
      events: 4,
      instagramAccounts: 17,
      pageFollowers: 13700000,
      adSpend: 167000,
      attribution: 'New Waves (Egypt), Newave (UAE)',
      targets: ['Libya', 'Sudan', 'Comoros', 'Qatar', 'Turkey', 'Lebanon', 'Syria', 'Jordan', 'Morocco'],
    },
    {
      id: 'aug-2019-saudi',
      date: 'August 2019',
      origin: 'Saudi Arabia',
      accounts: 217,
      pages: 144,
      groups: 5,
      instagramAccounts: 31,
      pageFollowers: 1400000,
      adSpend: 108000,
      attribution: 'Saudi government-linked individuals',
      targets: ['Qatar', 'Saudi Arabia', 'UAE', 'Bahrain', 'Egypt', 'Morocco', 'Palestine', 'Lebanon', 'Jordan'],
    },
    {
      id: 'oct-2019-uae',
      date: 'October 2019',
      origin: 'UAE',
      accounts: 211,
      pages: 107,
      groups: 43,
      instagramAccounts: 87,
      pageFollowers: 1400000,
      adSpend: 150000,
      attribution: 'Charles Communications (UAE)',
      targets: ['Qatar', 'Turkey', 'Iran', 'Muslim Brotherhood', 'Yemen'],
    },
    {
      id: 'oct-2019-egypt',
      date: 'October 2019',
      origin: 'Egypt',
      accounts: 163,
      pages: 51,
      groups: 33,
      instagramAccounts: 4,
      pageFollowers: 5600000,
      adSpend: 31000,
      attribution: 'El Fagr newspaper',
      targets: ['Somalia', 'Yemen', 'Saudi Arabia', 'Sudan', 'Tunisia', 'Iran', 'Turkey', 'Lebanon', 'Qatar'],
    },
  ],

  // Detection indicators
  detectionIndicators: [
    { id: 'RF1', name: 'Synchronized Posting', threshold: '>3 accounts, <5 min interval', action: 'Investigate' },
    { id: 'RF2', name: 'Template Similarity', threshold: '>70% identical phrasing', action: 'Flag' },
    { id: 'RF3', name: 'Engagement Spikes', threshold: '>500% from baseline', action: 'Investigate' },
    { id: 'RF4', name: 'Profile Photo Anomalies', threshold: 'AI-generated or stock detected', action: 'Deep dive' },
    { id: 'RF5', name: 'Geographic Inconsistencies', threshold: 'Location vs. posting pattern mismatch', action: 'Investigate' },
    { id: 'RF6', name: 'Name Pattern Recognition', threshold: '>5 accounts with similar naming', action: 'Flag' },
  ],

  // Tactical methods
  tactics: [
    { id: 'T1', name: 'Psychological Harassment', description: 'Mass harassment campaigns to silence dissent', frequency: 'High' },
    { id: 'T2', name: 'Brigading', description: 'Drowning out opposing viewpoints through coordinated attacks', frequency: 'High' },
    { id: 'T3', name: 'Platform Exploitation', description: 'Using dislike buttons, mass reporting to suspend accounts', frequency: 'High' },
    { id: 'T4', name: 'Algorithm Manipulation', description: 'Posting on unrelated popular pages to gain visibility', frequency: 'High' },
    { id: 'T5', name: 'Cross-Platform Operations', description: 'Coordinating across Facebook, YouTube, Twitter, Telegram, VKontakte', frequency: 'Critical' },
    { id: 'T6', name: 'Paid Promotion', description: 'Using advertisement services for micro-targeting beyond followers', frequency: 'Medium' },
    { id: 'T7', name: 'Astroturfing', description: 'Creating false grassroots support', frequency: 'Critical' },
    { id: 'T8', name: 'Typo-Squatting', description: 'URLs mimicking authentic media domains', frequency: 'Low' },
  ],

  // Behavioral signatures
  behavioralSignatures: [
    { id: 'BS1', name: 'Synchronized Posting', method: 'Multiple accounts posting simultaneously or at coordinated intervals', falsePositiveRate: 'Medium' },
    { id: 'BS2', name: 'Language Fingerprinting', method: 'Shared templates and identical phrasing across posts', falsePositiveRate: 'Low' },
    { id: 'BS3', name: 'Anomalous Network Topology', method: 'Dense interconnected clusters with suspicious connectivity patterns', falsePositiveRate: 'Medium' },
    { id: 'BS4', name: 'Artificial Engagement Patterns', method: 'Sudden spikes in likes, shares, or comments', falsePositiveRate: 'Low' },
  ],

  // Detection tree branches
  detectionTree: [
    { branch: 'Coordination Assessment', purpose: 'Identifies coordinated efforts', indicators: 'Synchronized posting, template similarity' },
    { branch: 'Source Assessment', purpose: 'Traces origins of inauthentic behavior', indicators: 'Account creation patterns, IP analysis' },
    { branch: 'Impact Assessment', purpose: 'Evaluates distribution and effects', indicators: 'Engagement metrics, spread patterns' },
    { branch: 'Authenticity Assessment', purpose: 'Detects inauthentic elements', indicators: 'Profile analysis, behavior fingerprinting' },
  ],

  // Entity registry
  marketingFirms: [
    { name: 'New Waves', country: 'Egypt', role: 'Primary operator', operationDate: 'Since 2015', status: 'Discontinued' },
    { name: 'Newave', country: 'UAE', role: 'Primary operator', operationDate: 'Pre-Aug 2019', status: 'Website offline' },
    { name: 'Charles Communications', country: 'UAE', role: 'Operator', operationDate: 'Oct 2019', status: 'Unknown' },
    { name: 'MintReach', country: 'Nigeria', role: 'Operator', operationDate: 'Oct 2019', status: 'Unknown' },
    { name: 'Flexell', country: 'Egypt', role: 'Operator', operationDate: 'Oct 2019', status: 'Unknown' },
    { name: 'El Fagr', country: 'Egypt', role: 'Media proxy', operationDate: 'Oct 2019', status: 'Operating' },
  ],

  // Narrative themes by sentiment
  narrativeThemes: [
    { theme: 'Alleged Qatar terrorism sponsorship', sentiment: 'Negative', target: 'Qatar', sourceType: 'Pro-SA/UAE/Egypt', frequency: 'High' },
    { theme: "Turkish 'occupation' of Qatar", sentiment: 'Negative', target: 'Qatar/Turkey', sourceType: 'Pro-SA/UAE/Egypt', frequency: 'Medium' },
    { theme: "Iran's activity in Yemen", sentiment: 'Negative', target: 'Iran', sourceType: 'Pro-SA/UAE/Egypt', frequency: 'High' },
    { theme: 'Muslim Brotherhood threat', sentiment: 'Negative', target: 'Qatar/Turkey', sourceType: 'Pro-SA/UAE/Egypt', frequency: 'High' },
    { theme: 'Vision 2030 praise', sentiment: 'Positive', target: 'Saudi Arabia', sourceType: 'Pro-SA', frequency: 'High' },
    { theme: 'Crown Prince praise', sentiment: 'Positive', target: 'Saudi Arabia', sourceType: 'Pro-SA', frequency: 'High' },
    { theme: 'Somaliland independence', sentiment: 'Positive (for agenda)', target: 'Somalia', sourceType: 'Pro-SA/UAE', frequency: 'Medium' },
    { theme: 'Al-Jazeera credibility attacks', sentiment: 'Negative', target: 'Qatar', sourceType: 'Pro-SA/UAE/Egypt', frequency: 'High' },
    { theme: 'Amnesty International attacks', sentiment: 'Negative', target: 'Human rights orgs', sourceType: 'Pro-SA', frequency: 'Medium' },
    { theme: 'Yemen war justification', sentiment: 'Positive', target: 'Saudi Arabia', sourceType: 'Pro-SA/UAE', frequency: 'High' },
  ],

  // Platform comparison
  platformComparison: [
    { platform: 'Meta/Facebook', policyStrength: 'Comprehensive', enforcement: 'Quarterly reports', transparency: 'High', detectionCapability: 'Advanced' },
    { platform: 'X/Twitter', policyStrength: 'Exists', enforcement: 'Inconsistent', transparency: 'Moderate', detectionCapability: 'Basic' },
    { platform: 'TikTok', policyStrength: 'Developing', enforcement: 'Regular reports', transparency: 'Improving', detectionCapability: 'Emerging' },
    { platform: 'YouTube', policyStrength: 'Moderate', enforcement: 'Incident-based', transparency: 'Limited', detectionCapability: 'Basic' },
  ],

  // CIB categories
  cibCategories: [
    { id: 'C1', name: 'Deceptive Influence Operations', description: 'Traditional CIB focused on foreign interference', prevalence: 'High' },
    { id: 'C2', name: 'Manufactured Attention Campaigns', description: 'Boosting specific content through coordinated fake engagement', prevalence: 'Medium' },
    { id: 'C3', name: 'Grassroots Astroturfing', description: 'Creating false local support appearances', prevalence: 'High' },
    { id: 'C4', name: 'Commercial Manipulation', description: 'Using CIB for marketing/monetary gain', prevalence: 'Medium' },
  ],

  // UAE threat levels
  uaeThreatLevels: [
    { target: 'Qatar', threatLevel: 'Critical', primaryNarrative: 'Terrorism sponsorship allegations', engagementLevel: 'High' },
    { target: 'Turkey', threatLevel: 'High', primaryNarrative: '"Occupation" of Qatar, anti-Muslim Brotherhood', engagementLevel: 'High' },
    { target: 'Iran', threatLevel: 'High', primaryNarrative: 'Yemen activity, regional influence', engagementLevel: 'High' },
    { target: 'Human Rights Orgs', threatLevel: 'Medium', primaryNarrative: 'Credibility attacks (Amnesty, Al-Jazeera)', engagementLevel: 'Medium' },
    { target: 'Somalia/Somaliland', threatLevel: 'Medium', primaryNarrative: 'Independence promotion', engagementLevel: 'Low' },
  ],

  // Source credibility
  sourceCredibility: [
    { tier: 'Tier 1', sourceType: 'Platform Official', examples: 'Meta Transparency Center, Meta Newsroom', reliability: 'Very High' },
    { tier: 'Tier 2', sourceType: 'Academic/Research', examples: 'PMC, SAGE Journals, POMEPS, EU DisinfoLab', reliability: 'High' },
    { tier: 'Tier 3', sourceType: 'Industry/Analysis', examples: 'Cyfluence Research, Reality Team, DFRLab', reliability: 'High' },
    { tier: 'Tier 4', sourceType: 'User-Reported', examples: 'Reddit discussions', reliability: 'Low' },
  ],
}

// ============================================================================
// Overview Array
// ============================================================================

export const verificationOverview: VerificationResult[] = [
  mediaAboutMediaData,
  selfReferenceData,
  comparativeRankingData,
  statisticalDatapointsData,
  visualMultimediaData,
  factCheckVerificationData,
  echoChamberFilterData,
  botInauthenticData,
  coordinatedInauthenticData,
]

// ============================================================================
// 11-2 SELF-REFERENCE & RECURSIVE QUERIES — DEEP RESEARCH DATA
// ============================================================================

export interface SelfReferenceSourceEntry {
  name: string
  tier: TierLevel
  credibility: string
  url: string
  domainType: string
}

export interface SelfReferenceUAERelevanceEntry {
  topic: string
  uaeRelevance: string
  classification: string
}

export interface SelfReferenceDataPoint {
  metric: string
  value: string
  source: string
  uaeRelevance: string
}

export interface SelfReferenceDataTable {
  tableName: string
  dataPoints: SelfReferenceDataPoint[]
}

export interface SelfReferenceEntity {
  entity: string
  details: string
  source?: string
  uaeRelevance?: string
  acronym?: string
  function?: string
  established?: string
  type?: string
  operator?: string
  status?: string
  role?: string
  affiliation?: string
  relevance?: string
}

export interface SelfReferenceSentimentTopic {
  topic: string
  overallSentiment: string
  positiveSources: string
  negativeSources: string
  keyNarrative: string
  emotionalTone: string
}

export interface SelfReferenceURLSummary {
  url: string
  title: string
  summary: string
  keyData: string
  credibility: string
}

export interface SelfReferenceRecursiveQuery {
  category: string
  queries: string[]
}

export interface SelfReferenceCitation {
  citation: string
  url: string
  tier: string
  uaeRelevance: string
}

export interface SelfReferenceDashboardKPI {
  kpi: string
  currentState: string
  target?: string
  status: string
}

export interface SelfReferenceDashboardKPICategory {
  category: string
  kpis: SelfReferenceDashboardKPI[]
}

// Self-Reference Deep Research Data Export
export const selfReferenceDeepData: {
  sourceCredibilityMatrix: SelfReferenceSourceEntry[]
  uaeRelevanceAssessment: SelfReferenceUAERelevanceEntry[]
  dataTables: SelfReferenceDataTable[]
  entityRegistry: {
    governmentEntities: SelfReferenceEntity[]
    surveillancePrograms: SelfReferenceEntity[]
    companies: SelfReferenceEntity[]
    keyIndividuals: SelfReferenceEntity[]
  }
  sentimentAnalysis: SelfReferenceSentimentTopic[]
  urlContentSummaries: SelfReferenceURLSummary[]
  recursiveQueryRecommendations: SelfReferenceRecursiveQuery[]
  sourceCitations: SelfReferenceCitation[]
  dashboardKPIs: SelfReferenceDashboardKPICategory[]
  metadata: {
    documentEnriched: string
    sourcesProcessed: number
    dataExtractionStatus: string
  }
} = {
  sourceCredibilityMatrix: [
    { name: 'Reuters', tier: 2, credibility: 'High - Major Wire Service', url: 'https://www.reuters.com/technology/nso-ended-pegasus-contract-with-uae-over-dubai-leaders-hacking-2021-10-06/', domainType: 'News' },
    { name: 'The Guardian', tier: 2, credibility: 'High - Major Newspaper', url: 'https://www.theguardian.com/world/2021/jul/21/uae-linked-to-listing-of-hundreds-of-uk-phones-in-pegasus-project-leak', domainType: 'News' },
    { name: 'Al Jazeera', tier: 2, credibility: 'High - Qatar State Media', url: 'https://www.aljazeera.com/news/2019/12/11/us-intelligence-agents-helped-uae-build-secret-surveillance-unit', domainType: 'News' },
    { name: 'Amnesty International', tier: 1, credibility: 'Very High - IGO', url: 'https://www.amnesty.org/en/latest/news/2023/11/uae-concerns-around-authorities-use-of-digital-surveillance-during-cop28/', domainType: 'NGO' },
    { name: 'Human Rights Watch', tier: 1, credibility: 'Very High - IGO', url: 'https://www.hrw.org/news/2023/11/30/uae-mass-surveillance-threatens-rights-cop28-outcome', domainType: 'NGO' },
    { name: 'European Parliament', tier: 1, credibility: 'Very High - Legislature', url: 'https://www.europarl.europa.eu/doceo/document/TA-9-2021-0390_EN.html', domainType: 'Government' },
    { name: 'Oxford University (Tech & Justice BSG)', tier: 1, credibility: 'Very High - Academic', url: 'https://www.techandjustice.bsg.ox.ac.uk/research/united-arab-emirates', domainType: 'Academic' },
    { name: 'UAE Government (u.ae)', tier: 2, credibility: 'High - Official State Source', url: 'https://u.ae/en/media/media-in-the-uae/media-regulation', domainType: 'Government' },
    { name: 'Presight AI (Official Press Release)', tier: 3, credibility: 'Medium-High - Company PR', url: 'https://www.presight.ai/news/national-media-office-presight-join-forces-to-optimize-uaes-media-ecosystem-using-applied-ai', domainType: 'Corporate' },
    { name: 'Khaleej Times', tier: 3, credibility: 'Medium - Regional English Press', url: 'https://www.khaleejtimes.com/uae/national-media-authority-established-streamline-regulate-media-content', domainType: 'News' },
    { name: 'Gulf News', tier: 3, credibility: 'Medium - UAE Newspaper', url: 'https://gulfnews.com/uae/how-the-uae-is-tackling-digital-misinformation-and-online-smear-campaigns-1.500519024', domainType: 'News' },
    { name: 'Dark Reading', tier: 2, credibility: 'High - Cybersecurity Trade', url: 'https://www.darkreading.com/cyber-risk/abu-dhabi-finance-week-leaked-vip-passport-details', domainType: 'Tech/News' },
    { name: 'The Intercept', tier: 2, credibility: 'High - Investigative', url: 'https://theintercept.com/2019/06/12/darkmatter-uae-hack-intercept/', domainType: 'News' },
    { name: 'CBS News', tier: 2, credibility: 'High - US Broadcast', url: 'https://www.cbsnews.com/news/iran-war-uae-tourists-expats-influencers-detained-social-media-posts/', domainType: 'News' },
    { name: 'BBC', tier: 2, credibility: 'High - Public Broadcast', url: 'https://www.bbc.com/news/articles/c875rjd990go', domainType: 'News' },
    { name: 'Forbes', tier: 3, credibility: 'Medium-High - Business Magazine', url: 'https://www.forbes.com/sites/johnkoetsier/2019/12/23/top-50-social-app-in-usa-outed-as-spying-tool-for-united-arab-emirates-apple-and-google-delete-it/', domainType: 'News' },
    { name: 'Wikipedia', tier: 4, credibility: 'Low-Medium - User Generated', url: 'https://en.wikipedia.org/wiki/2026_Iranian_strikes_on_the_United_Arab_Emirates', domainType: 'Encyclopedia' },
    { name: 'TRT World', tier: 3, credibility: 'Medium - Turkish State Media', url: 'https://www.trtworld.com/article/12731038', domainType: 'News' },
    { name: 'Times of Israel', tier: 3, credibility: 'Medium - Israeli Media', url: 'https://www.timesofisrael.com/former-idf-intelligence-personnel-likely-tied-to-uae-spy-app-report-says/', domainType: 'News' },
    { name: 'ADHRB', tier: 2, credibility: 'High - Human Rights NGO', url: 'https://www.adhrb.org/2025/04/the-rise-of-ai-surveillance-in-the-uae-implications-for-human-rights/', domainType: 'NGO' },
    { name: 'Computer Weekly', tier: 3, credibility: 'Medium - Tech Trade Press', url: 'https://www.computerweekly.com/news/366642372/UAE-targets-agentic-AI-to-power-half-of-government-operations', domainType: 'Tech/News' },
    { name: 'Business Human Rights Centre', tier: 2, credibility: 'High - NGO Database', url: 'https://www.business-humanrights.org/en/latest-news/gulf-authorities-use-surveillance-and-cyber-laws-to-target-journalists-and-social-media-users-sharing-war-related-content/', domainType: 'NGO' },
  ],

  uaeRelevanceAssessment: [
    { topic: 'National Media Office + Presight AI Partnership', uaeRelevance: 'CRITICAL', classification: 'Direct government media control infrastructure' },
    { topic: 'AI Surveillance (Oyoon/Falcon Eye)', uaeRelevance: 'CRITICAL', classification: 'Core state surveillance apparatus' },
    { topic: 'Pegasus Spyware Operations', uaeRelevance: 'CRITICAL', classification: 'Foreign-backed intelligence operations' },
    { topic: 'Project Raven/DREAD', uaeRelevance: 'CRITICAL', classification: 'Secret surveillance unit with US involvement' },
    { topic: 'ToTok/DarkMatter Espionage', uaeRelevance: 'CRITICAL', classification: 'Domestic citizen surveillance via apps' },
    { topic: 'Crisis Response 2026 (Missile Strikes)', uaeRelevance: 'CRITICAL', classification: 'Active social media enforcement' },
    { topic: 'National Media Authority Establishment', uaeRelevance: 'CRITICAL', classification: 'Media governance restructuring' },
    { topic: 'PR Counter-Narrative Operations', uaeRelevance: 'HIGH', classification: 'State narrative control' },
    { topic: 'COP28 Surveillance Concerns', uaeRelevance: 'HIGH', classification: 'International human rights scrutiny' },
    { topic: 'Journalist/Activist Targeting', uaeRelevance: 'HIGH', classification: 'Civil society suppression' },
    { topic: 'Image Management Operations', uaeRelevance: 'HIGH', classification: 'Reputation management infrastructure' },
    { topic: 'Counter-Terrorist Narrative Partnerships', uaeRelevance: 'MEDIUM', classification: 'Soft power/global influence' },
    { topic: 'Social Listening Market', uaeRelevance: 'MEDIUM', classification: 'Commercial monitoring ecosystem' },
  ],

  dataTables: [
    {
      tableName: 'AI Surveillance Infrastructure',
      dataPoints: [
        { metric: 'Oyoon Cameras (Dubai)', value: '300,000+', source: 'ADHRB, HRW', uaeRelevance: 'CRITICAL' },
        { metric: 'Smart Police Stations (Dubai)', value: '27', source: 'Oxford/BSG', uaeRelevance: 'CRITICAL' },
        { metric: 'AI-Powered Arrests (2018)', value: '319 suspects', source: 'Oxford/BSG', uaeRelevance: 'CRITICAL' },
        { metric: 'Cameras at Tourist Sites', value: '5,000+', source: 'Oxford/BSG', uaeRelevance: 'HIGH' },
        { metric: 'Falcon Eye Coverage', value: 'Abu Dhabi + Airport + Islands', source: 'Oxford/BSG', uaeRelevance: 'CRITICAL' },
        { metric: 'Oyoon Real-time Recognition', value: 'Yes - Facial + Behavioral', source: 'ADHRB', uaeRelevance: 'CRITICAL' },
      ],
    },
    {
      tableName: 'National Media Intelligence Metrics',
      dataPoints: [
        { metric: 'Media Data Points Analyzed Daily', value: 'Billions', source: 'Presight AI PR', uaeRelevance: 'CRITICAL' },
        { metric: 'Annual Efficiency Gains (AED)', value: '1+ billion', source: 'Presight AI PR', uaeRelevance: 'CRITICAL' },
        { metric: 'Labor Hours Saved', value: '2+ million annually', source: 'Presight AI PR', uaeRelevance: 'CRITICAL' },
        { metric: 'Data Processing Automation', value: '100%', source: 'Presight AI PR', uaeRelevance: 'CRITICAL' },
        { metric: 'Target: Agentic AI Government Operations', value: '50% within 2 years', source: 'Computer Weekly', uaeRelevance: 'CRITICAL' },
      ],
    },
    {
      tableName: 'Project Raven / DREAD Operations',
      dataPoints: [
        { metric: 'Annual Budget', value: '~$34 million', source: 'Al Jazeera, The Intercept', uaeRelevance: 'CRITICAL' },
        { metric: 'US Contractors (Peak Staff)', value: '40+', source: 'Al Jazeera', uaeRelevance: 'CRITICAL' },
        { metric: 'Ex-NSA Operatives', value: 'Multiple confirmed', source: 'Al Jazeera, CPJ', uaeRelevance: 'CRITICAL' },
        { metric: 'Karma Exploit Targets (iPhones)', value: 'Hundreds', source: 'Reuters/CJT', uaeRelevance: 'CRITICAL' },
        { metric: 'Google/Yahoo/Hotmail/Facebook Accounts Compromised', value: 'Hundreds', source: 'Al Jazeera', uaeRelevance: 'HIGH' },
        { metric: 'Fines Paid by Operatives (2021)', value: '$1.685 million', source: 'The Daily Beast', uaeRelevance: 'HIGH' },
        { metric: 'Contract Timeline Start', value: '2008', source: 'Al Jazeera', uaeRelevance: 'CRITICAL' },
      ],
    },
    {
      tableName: 'Pegasus Spyware Operations',
      dataPoints: [
        { metric: 'Global Phone Numbers in Leak', value: '50,000+', source: 'The Guardian', uaeRelevance: 'CRITICAL' },
        { metric: 'UAE-Linked UK Phones', value: 'Hundreds', source: 'The Guardian', uaeRelevance: 'CRITICAL' },
        { metric: 'NSO Contract Terminated', value: 'October 2021', source: 'Reuters', uaeRelevance: 'CRITICAL' },
        { metric: 'Ahmed Mansoor Sentence', value: '10 years', source: 'European Parliament', uaeRelevance: 'CRITICAL' },
        { metric: 'Journalists Targeted (FT, WSJ, Economist)', value: 'Multiple confirmed', source: 'Amnesty', uaeRelevance: 'CRITICAL' },
        { metric: 'Princess Haya Hack (2020)', value: 'Confirmed by UK Court', source: 'Gulf State Analytics', uaeRelevance: 'CRITICAL' },
      ],
    },
    {
      tableName: 'Crisis Response 2026 — Detention Statistics',
      dataPoints: [
        { metric: 'People Charged (Cybercrimes)', value: '21', source: 'CBS News', uaeRelevance: 'CRITICAL' },
        { metric: 'Nepali Workers in UAE', value: '300,000+', source: 'Fiscal Nepal', uaeRelevance: 'MEDIUM' },
        { metric: 'Travelers Stranded', value: '20,000+', source: 'BBC', uaeRelevance: 'HIGH' },
        { metric: 'Nationalities Affected', value: '31', source: 'Euronews', uaeRelevance: 'HIGH' },
        { metric: 'Social Media Accounts Blocked', value: 'Hundreds', source: 'Gulf News', uaeRelevance: 'HIGH' },
      ],
    },
    {
      tableName: '2026 Iranian Strikes — Casualties & Damage',
      dataPoints: [
        { metric: 'Duration', value: 'Feb 28 – Apr 8, 2026', source: 'Wikipedia', uaeRelevance: 'CRITICAL' },
        { metric: 'Total Killed', value: '13', source: 'Wikipedia', uaeRelevance: 'CRITICAL' },
        { metric: 'Total Injured', value: '224', source: 'Wikipedia', uaeRelevance: 'CRITICAL' },
        { metric: 'Nationalities Affected', value: '31', source: 'Wikipedia', uaeRelevance: 'HIGH' },
        { metric: 'Ballistic Missiles Intercepted', value: '537', source: 'Wikipedia', uaeRelevance: 'HIGH' },
        { metric: 'Drones Intercepted', value: '2,256', source: 'Wikipedia', uaeRelevance: 'HIGH' },
        { metric: 'Cruise Missiles Intercepted', value: '26', source: 'Wikipedia', uaeRelevance: 'HIGH' },
        { metric: 'THAAD/Patriot Interceptions', value: 'Confirmed', source: 'Wikipedia', uaeRelevance: 'HIGH' },
        { metric: 'ADNOC Refinery Output Lost', value: '922,000 barrels/day', source: 'Wikipedia', uaeRelevance: 'CRITICAL' },
        { metric: 'EGA Recovery Time', value: '~1 year', source: 'Wikipedia', uaeRelevance: 'HIGH' },
      ],
    },
    {
      tableName: 'Media Consumption & Connectivity (UAE)',
      dataPoints: [
        { metric: 'Mobile Phone Penetration', value: '80.6%', source: 'Meltwater', uaeRelevance: 'MEDIUM' },
        { metric: 'WhatsApp Usage', value: '95%', source: 'Meltwater', uaeRelevance: 'MEDIUM' },
        { metric: 'Facebook Usage', value: '82%', source: 'Meltwater', uaeRelevance: 'MEDIUM' },
        { metric: 'YouTube Usage', value: '81%', source: 'Meltwater', uaeRelevance: 'MEDIUM' },
        { metric: 'TV Daily Viewership', value: '86%', source: 'Meltwater', uaeRelevance: 'MEDIUM' },
        { metric: 'AI Contribution to GDP (2030)', value: '14% ($96bn)', source: 'Meltwater', uaeRelevance: 'HIGH' },
        { metric: 'Global Connectivity Rank', value: '26th', source: 'Meltwater', uaeRelevance: 'MEDIUM' },
      ],
    },
    {
      tableName: 'DarkMatter/CryptoMize Corporate Structure',
      dataPoints: [
        { metric: 'DarkMatter HQ', value: 'Abu Dhabi', source: 'Wikipedia', uaeRelevance: 'CRITICAL' },
        { metric: 'Founder', value: 'Faisal al Bannai', source: 'TRT World, Wikipedia', uaeRelevance: 'HIGH' },
        { metric: 'Parent Company', value: 'Breej Holding', source: 'NYT, Forbes', uaeRelevance: 'CRITICAL' },
        { metric: 'Former IDF Personnel Salary', value: 'Up to $1M/year', source: 'TRT World', uaeRelevance: 'HIGH' },
        { metric: 'CryptoMize Countries', value: '30+', source: 'CryptoMize.com', uaeRelevance: 'MEDIUM' },
        { metric: 'CryptoMize HQ', value: 'New Delhi, India', source: 'CryptoMize.com', uaeRelevance: 'MEDIUM' },
      ],
    },
    {
      tableName: 'ToTok Application Data',
      dataPoints: [
        { metric: 'App Store Status (Dec 2019)', value: 'Removed', source: 'Forbes, NYT', uaeRelevance: 'CRITICAL' },
        { metric: 'Linked Entity', value: 'Breej Holding/DarkMatter', source: 'Forbes', uaeRelevance: 'CRITICAL' },
        { metric: 'Classification', value: '"Spy tool" (US officials)', source: 'Forbes', uaeRelevance: 'CRITICAL' },
        { metric: 'App Ranking (US)', value: 'Top 50 Social App', source: 'Forbes', uaeRelevance: 'HIGH' },
      ],
    },
    {
      tableName: 'Financial Operations — Qatar Blockade',
      dataPoints: [
        { metric: 'UAE Spending on Sisi Image', value: '$2.7 million', source: 'Middle East Monitor', uaeRelevance: 'HIGH' },
        { metric: 'Qatar Outstanding Debt', value: '$68 billion', source: 'The Intercept', uaeRelevance: 'MEDIUM' },
        { metric: 'Qatar Blockade Reserves Lost', value: '$11+ billion', source: 'The Intercept', uaeRelevance: 'MEDIUM' },
        { metric: 'CDS Increase Since May 2017', value: '70%', source: 'The Intercept', uaeRelevance: 'MEDIUM' },
        { metric: 'Stock Market Decline', value: '24% YoY', source: 'The Intercept', uaeRelevance: 'MEDIUM' },
      ],
    },
    {
      tableName: 'Abu Dhabi Finance Week Data Leak (Feb 2026)',
      dataPoints: [
        { metric: 'Passports/IDs Exposed', value: '700+', source: 'Dark Reading', uaeRelevance: 'CRITICAL' },
        { metric: 'Former UK PM Exposed', value: 'David Cameron', source: 'Dark Reading', uaeRelevance: 'HIGH' },
        { metric: 'White House Official Exposed', value: 'Anthony Scaramucci', source: 'Dark Reading', uaeRelevance: 'HIGH' },
        { metric: 'Banks Involved', value: 'UBS, Blackstone, Barclays, Morgan Stanley', source: 'Dark Reading', uaeRelevance: 'HIGH' },
        { metric: 'Vendor', value: 'Third-party unmanaged storage', source: 'Dark Reading', uaeRelevance: 'HIGH' },
      ],
    },
    {
      tableName: 'National Media Authority (Established Dec 2025)',
      dataPoints: [
        { metric: 'Entities Consolidated', value: '3 (Media Council, NMO, WAM)', source: 'Khaleej Times, Xinhua', uaeRelevance: 'CRITICAL' },
        { metric: 'Affiliation', value: 'UAE Cabinet', source: 'Xinhua', uaeRelevance: 'CRITICAL' },
        { metric: 'WAM Role', value: 'Official channel for publication/distribution', source: 'Xinhua', uaeRelevance: 'CRITICAL' },
        { metric: 'Decree Date', value: 'December 18, 2025', source: 'Xinhua', uaeRelevance: 'CRITICAL' },
      ],
    },
    {
      tableName: 'UAE PR & Strategic Communications Market',
      dataPoints: [
        { metric: 'Middle East PR/Ad Market (2026)', value: '$8.56 billion', source: 'PRHub.ae', uaeRelevance: 'MEDIUM' },
        { metric: 'Brands Seeking Long-term Strategy', value: '80%', source: 'PRHub.ae', uaeRelevance: 'MEDIUM' },
        { metric: 'Consumer Trust in Leadership (Social)', value: '82%', source: 'PRHub.ae', uaeRelevance: 'MEDIUM' },
        { metric: 'Reputation Monitoring Budget Increase', value: '25% YoY', source: 'PRHub.ae', uaeRelevance: 'MEDIUM' },
      ],
    },
  ],

  entityRegistry: {
    governmentEntities: [
      { entity: 'National Media Authority', acronym: 'NMA', function: 'Unified media regulation', established: 'Dec 2025' },
      { entity: 'National Media Office', acronym: 'NMO', function: 'Media strategy development', established: 'Pre-2025' },
      { entity: 'Media Regulatory Office', acronym: 'MRO', function: 'Media activity regulation', established: 'Active' },
      { entity: 'Telecommunications and Digital Government Regulatory Authority', acronym: 'TDRA', function: 'Internet access management', established: 'Active' },
      { entity: 'AI & Advanced Technology Council', function: 'Agentic AI deployment oversight', established: '2025' },
      { entity: 'Emirates News Agency', acronym: 'WAM', function: 'Official news publication/distribution', established: '1976' },
      { entity: 'Oyoon Program', function: 'Dubai AI surveillance', established: 'Active' },
      { entity: 'Falcon Eye System', function: 'Abu Dhabi surveillance', established: 'Active' },
      { entity: 'Sawab Centre', function: 'Counter-terrorism communications', established: 'Active' },
    ],
    surveillancePrograms: [
      { program: 'Project Raven', type: 'Cyber-espionage', operator: 'DarkMatter', status: 'Terminated' },
      { program: 'DREAD', type: 'Intelligence unit', operator: 'UAE/NSA contractors', status: 'Active' },
      { program: 'Pegasus', type: 'Spyware', operator: 'NSO Group', status: 'License revoked 2021' },
      { program: 'Karma', type: 'iPhone exploit', operator: 'DarkMatter', status: 'Terminated' },
      { program: 'ToTok', type: 'Messaging app', operator: 'Breej Holding/DarkMatter', status: 'Removed Dec 2019' },
      { program: 'Oyoon', type: 'AI surveillance', operator: 'Dubai Police', status: 'Active' },
      { program: 'Falcon Eye', type: 'AI surveillance', operator: 'Abu Dhabi', status: 'Active' },
    ],
    companies: [
      { entity: 'Presight AI', type: 'Public company (ADX-listed)', role: 'Media intelligence analytics', uaeRelevance: 'CRITICAL' },
      { entity: 'DarkMatter', type: 'Private cybersecurity', role: 'Surveillance operations', uaeRelevance: 'CRITICAL' },
      { entity: 'NSO Group', type: 'Israeli cybersecurity', role: 'Pegasus development', uaeRelevance: 'CRITICAL' },
      { entity: 'Good Harbor Consulting', type: 'US advisory firm', role: 'Project Raven setup', uaeRelevance: 'HIGH' },
      { entity: 'CyberPoint', type: 'US company', role: 'Initial Raven operations', uaeRelevance: 'HIGH' },
      { entity: 'SRA International', type: 'US company', role: 'Initial Raven operations', uaeRelevance: 'HIGH' },
      { entity: 'CryptoMize', type: 'Digital conglomerate', role: 'Reputation management', uaeRelevance: 'MEDIUM' },
      { entity: 'AIM Technologies', type: 'Social listening', role: 'Consumer insights', uaeRelevance: 'MEDIUM' },
      { entity: 'Meltwater', type: 'Media intelligence', role: 'Global monitoring', uaeRelevance: 'MEDIUM' },
      { entity: 'Talkwalker', type: 'Social intelligence', role: 'Media analytics', uaeRelevance: 'MEDIUM' },
      { entity: 'LexisNexis', type: 'Legal/data', role: 'Social listening', uaeRelevance: 'MEDIUM' },
      { entity: 'CARMA', type: 'Media analysis', role: 'Intelligence services', uaeRelevance: 'MEDIUM' },
    ],
    keyIndividuals: [
      { name: 'Ahmed Mansoor', role: 'Human rights defender', affiliation: 'Self', relevance: 'CRITICAL (victim)' },
      { name: 'Faisal al Bannai', role: 'Founder', affiliation: 'DarkMatter', relevance: 'HIGH' },
      { name: 'Loujain al-Hathloul', role: 'Activist', affiliation: "Saudi women's rights", relevance: 'HIGH (target)' },
      { name: 'Marc Baier', role: 'Executive', affiliation: 'DarkMatter (ex-NSA)', relevance: 'HIGH' },
      { name: 'Ryan Adams', role: 'Operations director', affiliation: 'DarkMatter (ex-USAF)', relevance: 'HIGH' },
      { name: 'Daniel Gericke', role: 'Operative', affiliation: 'DarkMatter (ex-NSA)', relevance: 'HIGH (now ExpressVPN CTO)' },
      { name: 'Richard Clarke', role: 'Advisor', affiliation: 'Good Harbor', relevance: 'MEDIUM' },
      { name: 'Karl Gumtow', role: 'Founder', affiliation: 'CyberPoint', relevance: 'MEDIUM' },
    ],
  },

  sentimentAnalysis: [
    {
      topic: 'UAE AI Surveillance Infrastructure',
      overallSentiment: 'Strongly Negative (Human Rights perspective)',
      positiveSources: 'UAE Government, Oxford BSG (factual)',
      negativeSources: 'ADHRB, HRW, Amnesty International, ECDHR',
      keyNarrative: '"Weaponized to crush dissent" (Amnesty) vs. "Smart city safety" (UAE Government)',
      emotionalTone: 'Fear, concern, alarm (NGO sources); Security, safety, efficiency (Government sources)',
    },
    {
      topic: 'Project Raven / DREAD Operations',
      overallSentiment: 'Strongly Negative',
      positiveSources: 'None',
      negativeSources: 'Al Jazeera, The Intercept, CPJ, The Daily Beast, HRW',
      keyNarrative: '"UAE\'s surveillance reaches journalists globally"',
      emotionalTone: 'Expose, alarm, betrayal (American operatives selling skills)',
    },
    {
      topic: 'Pegasus Spyware Targeting',
      overallSentiment: 'Strongly Negative',
      positiveSources: 'None',
      negativeSources: 'Reuters, The Guardian, Amnesty International, European Parliament',
      keyNarrative: '"UAE hacked dissidents, journalists, foreign officials"',
      emotionalTone: 'Violation, overreach, diplomatic incident',
    },
    {
      topic: 'ToTok Application Espionage',
      overallSentiment: 'Negative',
      positiveSources: 'DarkMatter (denial)',
      negativeSources: 'NY Times, Forbes, TRT World',
      keyNarrative: '"Popular app secretly spy tool"',
      emotionalTone: 'Deception, privacy violation',
    },
    {
      topic: 'National Media Authority & AI Governance',
      overallSentiment: 'Neutral to Slightly Positive (for government control)',
      positiveSources: 'Presight AI PR, Khaleej Times, Xinhua, UAE Government',
      negativeSources: 'State Media Monitor analysis (editorial independence concerns)',
      keyNarrative: '"Centralized control, unified messaging"',
      emotionalTone: 'Efficiency, control, standardization',
    },
    {
      topic: 'Crisis Response 2026 (Missile Strikes)',
      overallSentiment: 'Mixed',
      positiveSources: 'UAE Government media, Gulf News',
      negativeSources: 'CBS News, BBC, Euronews (detention concerns)',
      keyNarrative: '"Safety enforcement vs. overreach"',
      emotionalTone: 'Security (official), fear/violation (affected individuals)',
    },
    {
      topic: 'PR Counter-Narrative Operations',
      overallSentiment: 'Neutral (descriptive)',
      positiveSources: 'PRHub.ae, Manara Global, Markency, PR Week UK',
      negativeSources: '',
      keyNarrative: '"Strategic communications industry serving government reputation"',
      emotionalTone: 'Professional, crisis-management focused',
    },
    {
      topic: 'Data Leaks & Image Management',
      overallSentiment: 'Negative (for UAE)',
      positiveSources: 'UAE Government (response)',
      negativeSources: 'Dark Reading, Middle East Eye, The Intercept',
      keyNarrative: '"UAE exposed via leaks; financial warfare revealed"',
      emotionalTone: 'Vulnerability exposed, reputational damage',
    },
  ],

  urlContentSummaries: [
    { url: 'https://www.meltwater.com/en/blog/media-monitoring-in-dubai-and-the-uae', title: 'Meltwater - Media Monitoring in Dubai and UAE', summary: 'Comprehensive overview of UAE media landscape including 300,000+ news sources monitored, 500M daily touchpoints, 15+ networks tracked.', keyData: '300K cameras (Oyoon), 86% TV viewership, 78% radio listenership', credibility: 'Tier 3 — Corporate PR/Blog' },
    { url: 'https://www.adhrb.org/2025/04/the-rise-of-ai-surveillance-in-the-uae-implications-for-human-rights/', title: 'ADHRB - AI Surveillance in UAE', summary: 'ADHRB comprehensive report on UAE AI surveillance. Oyoon (300K+ cameras), Falcon Eye, Pegasus spyware.', keyData: '300K+ cameras, $1.5T assets, life imprisonment penalties', credibility: 'Tier 2 — Human Rights NGO' },
    { url: 'https://www.hrw.org/news/2023/11/30/uae-mass-surveillance-threatens-rights-cop28-outcome', title: 'HRW - UAE Mass Surveillance', summary: 'HRW documentation of UAE mass surveillance threats. 300K+ cameras via Oyoon, ToTok back door, Falcon Eye.', keyData: '300K+ cameras, specific sentencing details, COP28 monitoring', credibility: 'Tier 1 — High-credibility international NGO' },
    { url: 'https://www.aljazeera.com/news/2019/12/11/us-intelligence-agents-helped-uae-build-secret-surveillance-unit', title: 'Al Jazeera - Project Raven', summary: 'Al Jazeera investigative report on Project Raven. $34M annual budget, 40+ US contractors, ex-NSA operatives.', keyData: '$34M budget, 40+ staff, full timeline', credibility: 'Tier 2 — Qatar state media (investigative)' },
    { url: 'https://www.techandjustice.bsg.ox.ac.uk/research/united-arab-emirates', title: 'Oxford - UAE AI Law Enforcement', summary: 'Oxford research on AI in UAE law enforcement. Oyoon (319 arrests via CCTV in 2018, 5K+ cameras), 27 smart police stations.', keyData: '319 arrests, 27 stations, 45 services, 7 languages', credibility: 'Tier 1 — Oxford academic research' },
    { url: 'https://www.europarl.europa.eu/doceo/document/TA-9-2021-0390_EN.html', title: 'European Parliament - Ahmed Mansoor Case', summary: 'European Parliament resolution on Ahmed Mansoor case. "Last human rights defender in UAE."', keyData: '10-year sentence, EP resolution, international condemnation', credibility: 'Tier 1 — European Parliament official document' },
    { url: 'https://www.amnesty.org/en/latest/news/2023/11/uae-concerns-around-authorities-use-of-digital-surveillance-during-cop28/', title: 'Amnesty International - COP28 Surveillance', summary: 'Amnesty International COP28 surveillance concerns. Pegasus used against FT, Economist, WSJ journalists.', keyData: 'Journalist targeting, Android exploits, March 2023 campaign', credibility: 'Tier 1 — Amnesty International (highest credibility)' },
    { url: 'https://www.reuters.com/technology/nso-ended-pegasus-contract-with-uae-over-dubai-leaders-hacking-2021-10-06/', title: 'Reuters - NSO Ending UAE Contract', summary: 'Reuters report on NSO ending UAE contract. Dubai ruler hacked foreign officials including UK PM, French President.', keyData: 'October 2021 termination, UK PM/French President hacked', credibility: 'Tier 2 — Major wire service' },
    { url: 'https://www.theguardian.com/world/2021/jul/21/uae-linked-to-listing-of-hundreds-of-uk-phones-in-pegasus-project-leak', title: 'The Guardian - Pegasus Project', summary: 'Guardian reporting on Pegasus project leak. Hundreds of UK phones targeted by UAE.', keyData: 'Hundreds of UK phones, 50,000+ total', credibility: 'Tier 2 — Major newspaper' },
    { url: 'https://www.nytimes.com/2019/12/22/us/politics/totok-app-uae.html', title: 'NY Times - ToTok Spy Tool', summary: 'NY Times expose on ToTok. Breej Holding linked to DarkMatter. App removed from Apple/Google stores December 2019.', keyData: 'December 2019 removal, Breej Holding/DarkMatter link', credibility: 'Tier 2 — Major newspaper' },
    { url: 'https://www.trtworld.com/article/12731038', title: 'TRT World - DarkMatter and Israeli Intelligence', summary: 'TRT World investigation into DarkMatter and Israeli intelligence. Former Israeli officials earned up to $1M annually.', keyData: '$1M salary for ex-IDF, DarkMatter founder Israel visits', credibility: 'Tier 2 — Turkish state media' },
    { url: 'https://theintercept.com/2019/06/12/darkmatter-uae-hack-intercept/', title: 'The Intercept - DarkMatter Operations', summary: 'The Intercept investigative report on DarkMatter operations. Karma spyware purchased 2016.', keyData: 'Karma exploit 2016, specific targets, "Villa" location', credibility: 'Tier 2 — Investigative journalism' },
    { url: 'https://www.cbsnews.com/news/iran-war-uae-tourists-expats-influencers-detained-social-media-posts/', title: 'CBS News - UAE Detentions Over Social Media', summary: 'CBS News report on 21 people charged under cybercrime laws for social media content during Iran conflict.', keyData: '21 charged, specific incidents documented', credibility: 'Tier 2 — US Broadcast News' },
    { url: 'https://www.darkreading.com/cyber-risk/abu-dhabi-finance-week-leaked-vip-passport-details', title: 'Dark Reading - Abu Dhabi Data Leak', summary: 'Dark Reading on Abu Dhabi Finance Week data leak. 700+ passports/IDs exposed.', keyData: '700+ exposed, specific VIP names, third-party vendor', credibility: 'Tier 2 — Cybersecurity trade press' },
    { url: 'https://www.presight.ai/news/national-media-office-presight-join-forces-to-optimize-uaes-media-ecosystem-using-applied-ai', title: 'Presight AI - National Media Office Partnership', summary: 'Presight AI official press release on National Media Office partnership. AED 1 billion annual efficiency gains.', keyData: 'AED 1B gains, 2M+ hours saved, 100% automation, May 2025', credibility: 'Tier 3 — Company PR' },
    { url: 'https://www.khaleejtimes.com/uae/national-media-authority-established-streamline-regulate-media-content', title: 'Khaleej Times - National Media Authority', summary: 'Khaleej Times on National Media Authority establishment. December 18, 2025 Federal Law.', keyData: 'Dec 18, 2025, 3 entities consolidated', credibility: 'Tier 3 — UAE English newspaper' },
    { url: 'https://en.wikipedia.org/wiki/2026_Iranian_strikes_on_the_United_Arab_Emirates', title: 'Wikipedia - 2026 Iranian Strikes on UAE', summary: 'Wikipedia comprehensive article on 2026 Iranian strikes. Feb 28 – Apr 8 duration. 13 killed, 224 injured.', keyData: 'Full military/casualty statistics, infrastructure damage', credibility: 'Tier 4 — User-generated encyclopedia' },
    { url: 'https://www.bbc.com/news/articles/c875rjd990go', title: 'BBC - Influencer Shock During Iran Attacks', summary: 'BBC on influencer shock during Iran attacks on Dubai. 20,000+ travelers stranded.', keyData: '20,000+ stranded, landmark damage', credibility: 'Tier 2 — Public broadcast' },
    { url: 'https://gulfnews.com/uae/how-the-uae-is-tackling-digital-misinformation-and-online-smear-campaigns-1.500519024', title: 'Gulf News - UAE Misinformation Countermeasures', summary: 'Gulf News overview of UAE misinformation countermeasures. AI detection of unusual activity.', keyData: 'AI tools, TDRA role, "electronic swarms" challenge', credibility: 'Tier 3 — UAE newspaper' },
    { url: 'https://www.computerweekly.com/news/366642372/UAE-targets-agentic-AI-to-power-half-of-government-operations', title: 'Computer Weekly - UAE Agentic AI Targets', summary: 'Computer Weekly on UAE agentic AI targets. 50% of government sectors to agentic AI within 2 years.', keyData: '50% target, 2-year timeline, Sheikh Mohammed quote', credibility: 'Tier 3 — Tech trade press' },
  ],

  recursiveQueryRecommendations: [
    {
      category: 'Media Intelligence Recursion',
      queries: ['UAE government media monitoring', 'state media tracking', 'news sentiment analysis UAE', 'media analytics UAE', 'Presight AI government contracts', 'national media intelligence platform (NMIP)'],
    },
    {
      category: 'Surveillance Recursion',
      queries: ['UAE cyberespionage', 'NSO Group Pegasus UAE', 'Project Raven', 'DREAD surveillance', 'GITEX surveillance', 'DarkMatter CyberPoint transition'],
    },
    {
      category: 'Image Management Recursion',
      queries: ['UAE reputation crisis management', 'UAE communications strategy', 'UAE state media narrative', 'WAM news agency operations', 'Emirates news agency control'],
    },
    {
      category: 'PR Recursion',
      queries: ['UAE strategic communications', 'UAE public diplomacy', 'UAE state media', 'government media office UAE', 'Gulf PR firms crisis response'],
    },
    {
      category: 'Self-Reference Recursion',
      queries: ['UAE NMIP variations', 'national media intelligence platform', 'government media monitoring system UAE', 'Presight AI contract details'],
    },
    {
      category: 'Citizen Monitoring Recursion',
      queries: ['UAE ToTok', 'DarkMatter surveillance', 'Oyoon facial recognition', 'Falcon Eye Abu Dhabi', 'WhatsApp surveillance Dubai'],
    },
    {
      category: 'Journalist Targeting Recursion',
      queries: ['Ahmed Mansoor UAE', 'Loujain al-Hathloul surveillance', 'UAE Pegasus journalists', 'COP28 surveillance Amnesty', 'Rani Dridi vs UAE case'],
    },
  ],

  sourceCitations: [
    { citation: 'Presight AI - National Media Office Partnership', url: 'https://www.presight.ai/news/national-media-office-presight-join-forces-to-optimize-uaes-media-ecosystem-using-applied-ai', tier: 'Tier 3', uaeRelevance: 'CRITICAL' },
    { citation: 'Amnesty International - COP28 Surveillance Concerns', url: 'https://www.amnesty.org/en/latest/news/2023/11/uae-concerns-around-authorities-use-of-digital-surveillance-during-cop28/', tier: 'Tier 1', uaeRelevance: 'CRITICAL' },
    { citation: 'ADHRB - AI Surveillance in UAE', url: 'https://www.adhrb.org/2025/04/the-rise-of-ai-surveillance-in-the-uae-implications-for-human-rights/', tier: 'Tier 2', uaeRelevance: 'CRITICAL' },
    { citation: 'Al Jazeera - US Intelligence Agents Helped UAE Build Surveillance Unit', url: 'https://www.aljazeera.com/news/2019/12/11/us-intelligence-agents-helped-uae-build-secret-surveillance-unit', tier: 'Tier 2', uaeRelevance: 'CRITICAL' },
    { citation: 'TRT World - UAE Snoops on Citizens with Mobile App and Former Israeli Spies', url: 'https://www.trtworld.com/article/12731038', tier: 'Tier 2', uaeRelevance: 'CRITICAL' },
    { citation: 'Gulf News - UAE Tackling Digital Misinformation', url: 'https://gulfnews.com/uae/how-the-uae-is-tackling-digital-misinformation-and-online-smear-campaigns-1.500519024', tier: 'Tier 3', uaeRelevance: 'HIGH' },
    { citation: 'The New Yorker - The Dirty Secrets of a Smear Campaign', url: 'https://www.newyorker.com/magazine/2023/04/03/the-dirty-secrets-of-a-smear-campaign', tier: 'Tier 2', uaeRelevance: 'HIGH' },
    { citation: 'Reuters - NSO Ended Pegasus Contract with UAE', url: 'https://www.reuters.com/technology/nso-ended-pegasus-contract-with-uae-over-dubai-leaders-hacking-2021-10-06/', tier: 'Tier 2', uaeRelevance: 'CRITICAL' },
    { citation: 'NY Times - ToTok App Secretly Spy Tool', url: 'https://www.nytimes.com/2019/12/22/us/politics/totok-app-uae.html', tier: 'Tier 2', uaeRelevance: 'CRITICAL' },
    { citation: 'Computer Weekly - UAE Targets Agentic AI', url: 'https://www.computerweekly.com/news/366642372/UAE-targets-agentic-AI-to-power-half-of-government-operations', tier: 'Tier 3', uaeRelevance: 'CRITICAL' },
  ],

  dashboardKPIs: [
    {
      category: 'Surveillance Infrastructure KPIs',
      kpis: [
        { kpi: 'Surveillance Cameras (Oyoon)', currentState: '300,000+', status: 'Active' },
        { kpi: 'Smart Police Stations', currentState: '27', status: 'Operational' },
        { kpi: 'AI-Powered Arrests (2018 baseline)', currentState: '319', status: 'Proven capability' },
        { kpi: 'Facial Recognition', currentState: 'Deployed', status: 'Active' },
        { kpi: 'Pegasus License', currentState: 'Revoked Oct 2021', status: 'Terminated' },
        { kpi: 'ToTok App Store Status', currentState: 'Removed Dec 2019', status: 'Banned' },
      ],
    },
    {
      category: 'National Media Intelligence KPIs',
      kpis: [
        { kpi: 'Media Data Points/Day', currentState: 'Billions', status: 'Processing' },
        { kpi: 'Annual Efficiency Gains', currentState: 'AED 1B+', status: 'Achieved' },
        { kpi: 'Labor Hours Saved', currentState: '2M+/year', status: 'Achieved' },
        { kpi: 'Data Processing Automation', currentState: '100%', status: 'Full automation' },
        { kpi: 'Agentic AI Government Operations', currentState: '—', target: '50% in 2 years', status: 'In progress' },
        { kpi: 'National Media Authority', currentState: 'Established Dec 2025', status: 'Active' },
      ],
    },
    {
      category: 'Crisis Response 2026 KPIs',
      kpis: [
        { kpi: 'People Charged', currentState: '21', status: 'Apr 2026' },
        { kpi: 'Travelers Stranded', currentState: '20,000+', status: 'Mar 2026' },
        { kpi: 'Ballistic Missiles Intercepted', currentState: '537', status: 'Feb-Apr 2026' },
        { kpi: 'Drones Intercepted', currentState: '2,256', status: 'Feb-Apr 2026' },
        { kpi: 'Casualties', currentState: '13 killed, 224 injured', status: 'Feb-Apr 2026' },
      ],
    },
    {
      category: 'Financial Operations KPIs',
      kpis: [
        { kpi: 'Project Raven Budget (Peak)', currentState: '$34M/year', status: '' },
        { kpi: 'DarkMatter Operatives Fined', currentState: '$1.685M', status: '' },
        { kpi: 'UAE Sisi Image Spending', currentState: '$2.7M', status: '' },
        { kpi: 'Abu Dhabi Finance Week Data Exposed', currentState: '700+ records', status: '' },
        { kpi: 'Qatar Blockade Reserve Loss', currentState: '$11B+', status: '' },
      ],
    },
  ],

  metadata: {
    documentEnriched: '2026-04-28',
    sourcesProcessed: 70,
    dataExtractionStatus: 'Comprehensive (all major statistics, figures, and facts captured)',
  },
}

// ============================================================================
// 11-7: Omission & Silence Detection
// ============================================================================

export const omissionSilenceData = {
  // Executive Summary
  executiveSummary: {
    reportMetadata: {
      generated: '2026-04-27',
      querySet: '11-7 Omission & Silence Detection',
      totalSourcesCited: 14,
      atomicQueriesExecuted: 12,
      pagesFetched: 14,
      pagesSuccessful: 9,
      pagesBlocked: 5,
      organizationsMonitored: ['RSF', 'Freedom House', 'HRW', 'CPJ', 'Amnesty International', 'WJWC'],
      timeCoverage: '2023-2026',
      focusPeriod: '2024-2026',
      languages: 'English and Arabic',
      enrichmentVersion: '1.0',
    },
  },

  // Media Freedom Rankings
  mediaFreedomRankings: {
    rsfWorldPressFreedom: {
      years: [
        { year: 2025, rank: 164, score: 26.91, trend: 'Declining (12.1% drop)', maxScore: 180, totalCountries: 180 },
        { year: 2024, rank: 164, score: 30.62, trend: 'Declining', maxScore: 180, totalCountries: 180 },
        { year: 2023, rank: 158, score: null, trend: 'Declining', maxScore: 180, totalCountries: 180 },
      ],
      componentScores2025: {
        politicalEnvironment: 26.91,
        legalFramework: null,
        economicContext: null,
        socioculturalContext: null,
        security: null,
      },
      keyFinding: 'UAE ranks among bottom 20 countries worldwide for press freedom (164th out of 180 in 2024 and 2025)',
    },
    freedomOnTheNet: {
      years: [
        { year: 2025, score: 28, status: 'Not Free', change: -2, trend: 'Declining', maxScore: 100 },
        { year: 2024, score: 30, status: 'Not Free', change: null, trend: 'Declining', maxScore: 100 },
        { year: 2023, score: null, status: 'Not Free', change: null, trend: null, maxScore: 100 },
      ],
      categoryBreakdown2025: {
        obstaclesToAccess: { score: 14, max: 25, assessment: 'High restriction' },
        limitsOnContent: { score: 9, max: 35, assessment: 'Severe restriction' },
        violationsOfUserRights: { score: 5, max: 40, assessment: 'Critical restriction' },
      },
      additionalDataPoints: [
        'Dubai tourism authority launched paid influencer program to spread pro-government narratives and whitewash human rights record',
        '57 Bangladeshi citizens convicted for sharing protest-related content; later pardoned',
        'Supreme Court upheld 15-year sentences against Ahmed Mansoor and Nasser bin Ghaith for online content',
        'Poet Abdulrahman al-Qaradawi extradited from Lebanon in January 2025; remained forcibly disappeared',
        'Score for penalties for online activities declined from 2 to 0 due to mass trial lacking due process',
        'Population: 9,441,000',
      ],
      keyFinding: 'Internet freedom in UAE declined during coverage period (June 1, 2024 - May 31, 2025)',
    },
    freedomInTheWorld: {
      politicalRights: { score: 5, max: 40, status: 'Not Free' },
      civilLiberties: { score: 13, max: 60, status: 'Not Free' },
      globalFreedomScore: { score: 18, max: 100, status: 'Not Free' },
      politicalRightsSubcategories: {
        electoralProcess: { score: 1, max: 12 },
        politicalPluralism: { score: 2, max: 16 },
        functioningOfGovernment: { score: 2, max: 12 },
      },
      civilLibertiesSubcategories: {
        expressionBelief: { score: 4, max: 16 },
        associationalRights: { score: 2, max: 12 },
        ruleOfLaw: { score: 3, max: 16 },
        personalAutonomy: { score: 4, max: 16 },
      },
      key2024Developments: [
        'Mass trial resulted in 43 life sentences and 10 others receiving 10-15 years',
        'Human rights defenders like Ahmed Mansoor sentenced to 15 years',
        '57 Bangladeshi citizens sentenced then pardoned for protest participation',
        'Foreign student arrested and deported for pro-Palestinian slogan',
        'UAE removed from FATF grey list for money laundering/terrorist financing improvements',
      ],
    },
  },

  // Direct Censorship Evidence
  directCensorship: {
    iranianStrikesCoverage: {
      timeline: [
        { date: '2026-02-28', event: 'US/Israel launched coordinated attacks on Iran', significance: 'Conflict initiation' },
        { date: '2026-02-28', event: 'Iran responded with strikes on UAE', significance: 'UAE targeted despite non-participation' },
        { date: '2026-03-02', event: 'UAE Federal Public Prosecution ordered X account blocking', significance: 'Digital suppression begins' },
        { date: '2026-03-03', event: 'Port of Fujairah incident', significance: 'First major censorship discrepancy' },
        { date: '2026-03-14', event: '10 people arrested for misleading videos', significance: 'Initial enforcement' },
        { date: '2026-03-20', event: '109 arrests for suspected sharing of misleading videos', significance: 'Mass enforcement' },
        { date: '2026-04-01', event: 'Casualty count: 12 killed, 190 injured', significance: 'Conflict casualties' },
      ],
      conflictContext: [
        'UAE targeted more than any other country despite not being party to US-Israel-Iran conflict',
        'Hundreds of drones and ballistic missiles launched at UAE since war began',
        'UAE reporting on strikes grew more opaque as attacks increased',
      ],
      specificDiscrepancies: [
        { location: 'Port of Fujairah (March 3)', officialClaim: 'Fire from debris following successful interception', contrastingEvidence: 'Video shows drone approaching intact with no visible interception', source: 'Martin Plaut' },
        { location: 'Jebel Ali Port', officialClaim: 'Fire attributed to debris from interception', contrastingEvidence: 'Satellite imagery revealed fires at separate locations ~3km apart, including military area', source: 'Haaretz Investigation' },
        { location: 'Burj Al Arab', officialClaim: 'Limited fire from shrapnel', contrastingEvidence: 'Flames extended ~30 meters covering eight floors', source: 'Video Evidence' },
        { location: 'Dubai International Airport', officialClaim: 'Temporary suspension citing safety protocols', contrastingEvidence: 'No acknowledgment of drone strike despite verified video evidence', source: 'Multiple Sources' },
        { location: 'Warda Complex', officialClaim: 'Successful interception operations', contrastingEvidence: 'Drone struck directly with no interception', source: 'CPJ Monitoring' },
      ],
      enforcementActions: {
        peopleArrestedForMisinformation: 35,
        peopleDetainedForMisleadingVideos: 109,
        peopleArrestedForFilmingSharingAttackVideos: 100,
        minimumImprisonmentForContradictingStatements: '2 years',
        fineForSharingContradictingContent: '200,000 dirhams (~$55,000)',
        britishNationalsDetained: 5,
        cabinCrewDetainedForSharingFootage: 'Multiple',
      },
      portOfFujairahData: {
        oilThroughput: '1.7 million barrels per day',
        storageTanksDestroyed: '3+ by March 7',
      },
    },
    socialMediaBlocking: {
      march2026Blocking: [
        { account: 'Al Arabiya Breaking News', type: 'News outlet', followerCount: null, reason: 'Sharing strike footage' },
        { account: 'Iyad Al-Humoud', type: 'Journalist', followerCount: '5+ million', reason: 'Sharing strike footage' },
        { account: 'Malik Alrougui', type: 'Journalist (Saudi)', followerCount: null, reason: 'Sharing strike footage' },
        { account: 'Maryam al-Hammadi', type: 'Opposition figure', followerCount: null, reason: 'Emirati opposition' },
        { account: 'Misbar', type: 'Fact-checker', followerCount: null, reason: 'Fact-checking' },
        { account: 'Middle East Eye', type: 'News outlet', followerCount: null, reason: 'News coverage' },
      ],
      blockingAuthority: 'UAE Federal Public Prosecution → Telecommunications and Digital Government Regulatory Authority (TDRA)',
      legalBackbone: "UAE's 2021 law on combating rumors and cybercrimes",
      platformJurisdiction: 'X maintains regional office in Dubai Media City, placing platform under UAE jurisdiction',
    },
    coordinatedInfluenceOperations: [
      { year: 2019, platform: 'X (Twitter)', accountsRemoved: 4258, purpose: 'UAE propaganda on Yemen war' },
      { year: 2019, platform: 'X (Twitter)', accountsRemoved: 271, purpose: 'UAE-Egypt coordinated targeting of Qatar' },
      { year: 2022, platform: 'Multiple', accountsRemoved: 'Multiple', purpose: 'EMASC study documented bot armies' },
    ],
    botArmyOversight: 'Interior ministry and intelligence structures',
    strategicSilencePolicy: {
      officialArticulation: 'The United Arab Emirates is pursuing a deliberate policy of strategic silence in response to recent social media campaigns related to the region.',
      source: 'The Arab Weekly - UAE Media Chief Outlines Strategic Silence Policy',
      policyInterpretation: [
        'Formal acknowledgment of non-response as official state media strategy',
        'Designed to counter provocation from regional social media campaigns',
        'Contrasts with extensive international reporting on same events',
      ],
    },
  },

  // Legal Framework for Suppression
  legalFramework: {
    keyLaws: [
      { law: 'Press and Publications Law', year: 1980, purpose: 'State control of media', maximumPenalty: 'Death', source: 'WJWC' },
      { law: 'Crimes and Punishments Law', year: 2021, purpose: 'Criminalize dissent', maximumPenalty: 'Long-term imprisonment', source: 'WJWC' },
      { law: 'Anti-Rumors and Cybercrimes Law', year: 2021, purpose: 'Suppress online speech', maximumPenalty: 'Death', source: 'WJWC' },
      { law: 'Cybercrime Law amendments', year: 2012, purpose: 'Ban fake news and rumors', maximumPenalty: 'Imprisonment + fines', source: 'WJWC' },
    ],
    keyWJWCFindings: [
      'Majority of newspapers and media outlets in UAE are state-owned or controlled',
      'State prohibition exists on media or publications that criticize the government or address human rights issues',
      'Criticizing executive authority, including government officials, carries severe consequences and legal repercussions',
      'Surveillance is strict with lack of protective laws for sources',
      'Sources face potential lifelong imprisonment',
      'Authorities criminalize dissemination of information contradicting government narrative',
      'Collaboration with human rights organizations is met with punishment',
      'The UAE rejects legislation concerning freedom of access to government information',
      'Abu Dhabi employs surveillance programs to spy on journalists both within and outside the country',
    ],
    enforcementStatistics: [
      { action: 'Publication warnings (strike images/videos)', count: 1, date: 'Feb 2026', source: 'UAE Public Prosecution' },
      { action: 'Individuals arrested (recording/sharing incidents)', count: 375, date: 'March 2026', source: 'Abu Dhabi Police' },
      { action: 'Social media arrests', count: 109, date: 'March 20, 2026', source: 'Abu Dhabi Police' },
      { action: 'Prior arrests for misleading videos', count: 10, date: 'March 14, 2026', source: 'Multiple sources' },
      { action: 'British nationals detained', count: 5, date: 'March 2026', source: 'British embassy' },
      { action: 'Cabin crew detained', count: 'Multiple', date: 'March 2026', source: 'HRW documentation' },
    ],
    wartimeSpeechRestrictions: [
      { country: 'UAE', restrictionType: 'Photographing/sharing attack images', penalty: 'Up to 1 year imprisonment' },
      { country: 'Jordan', restrictionType: 'Publishing content related to defensive operations', penalty: 'Ban' },
      { country: 'Saudi Arabia', restrictionType: 'Publishing content related to defensive operations', penalty: 'Ban' },
      { country: 'Kuwait', restrictionType: 'Publishing content related to defensive operations', penalty: 'Ban' },
      { country: 'Qatar', restrictionType: 'Gathering at incident sites', penalty: 'Warning' },
    ],
  },

  // Structural Media Control Mechanisms
  structuralMediaControl: {
    omissionDetectionPatterns: {
      comparativeOmission: [
        { pattern: 'Coverage Volume', internationalMedia: 'Extensive', uaeMedia: 'Absent/minimal', gapMagnitude: 'Critical' },
        { pattern: 'Narrative Approach', internationalMedia: 'Evidence-based with video verification', uaeMedia: 'Successful interception only', gapMagnitude: 'Critical' },
        { pattern: 'Damage Documentation', internationalMedia: 'Satellite imagery, casualty counts', uaeMedia: 'No acknowledgment', gapMagnitude: 'Critical' },
        { pattern: 'Follow-up Investigation', internationalMedia: 'Multiple outlets investigating', uaeMedia: 'No follow-up', gapMagnitude: 'Critical' },
      ],
    },
    topicsWithOmissionPatterns: [
      { topic: 'Iranian Strikes on UAE', internationalCoverage: 'Extensive with video evidence', uaeCoverage: 'Successful interception narrative', gapDescription: 'No coverage of actual impact' },
      { topic: 'Ahmed Mansoor sentencing', internationalCoverage: 'HRW, Amnesty, RSF documented', uaeCoverage: 'No coverage', gapDescription: '15-year sentence ignored' },
      { topic: 'Nasser bin Ghaith sentencing', internationalCoverage: 'International HRW documentation', uaeCoverage: 'No coverage', gapDescription: '15-year sentence ignored' },
      { topic: 'Poet al-Qaradawi extradition', internationalCoverage: 'HRW documented', uaeCoverage: 'No coverage', gapDescription: 'Forced disappearance ignored' },
      { topic: '84-person mass trial', internationalCoverage: 'HRW World Report 2025', uaeCoverage: 'No coverage', gapDescription: '44+ convictions hidden' },
    ],
    silencedIndividuals: [
      { name: 'Ahmed Mansoor', role: 'Human rights defender', sentence: '15 years', year: 2023, status: 'Imprisoned' },
      { name: 'Nasser bin Ghaith', role: 'Human rights defender', sentence: '15 years', year: 2023, status: 'Imprisoned' },
      { name: 'Abdulrahman al-Qaradawi', role: 'Poet', sentence: 'Forcible disappearance', year: 2025, status: 'Missing' },
      { name: 'Ahmed al-Atoum', role: 'Jordanian activist', sentence: '10 years', year: 2024, status: 'Imprisoned' },
    ],
    accountabilityGap: [
      { pattern: 'Official announcements', description: 'Government claims made without questions permitted', evidence: 'Multiple observations' },
      { pattern: 'No investigative follow-up', description: 'No media investigating government claims', evidence: 'UAE media monitoring' },
      { pattern: 'Unchallenged statements', description: 'Official statements go unchallenged', evidence: 'UAE media environment' },
    ],
  },

  // Systematic Human Rights Violations
  humanRightsViolations: {
    freedomOfExpressionMetrics: [
      { indicator: 'Constitutional protection (online)', score: 0, max: 6, assessment: 'No protection', trend: 'Stable' },
      { indicator: 'Criminal penalties (online activities)', score: 0, max: 4, assessment: 'Severe restrictions', trend: 'Declining' },
      { indicator: 'Severe restrictions on expression', score: 'Yes', max: null, assessment: 'Documented', trend: 'Stable' },
      { indicator: 'Lengthy prison sentences for critics', score: 'Yes', max: null, assessment: 'Documented', trend: 'Stable' },
    ],
    massTrialDocumentation: {
      totalDefendants: 84,
      convicted: '44+',
      lifeSentences: 40,
      fifteenYearSentences: 4,
      previouslyConvictedUAE94: '60+',
      terrorismRelatedCharges: 84,
      bangladeshiProtestersSeparate: 57,
      documentedViolations: [
        'Restricted access to case materials',
        'Inadequate legal representation',
        'Judges influencing witness testimony',
        'Closed-door hearings',
        'Credible reports of severe abuse',
      ],
    },
    hRWAdditionalFindings: [
      'The UAE places severe restrictions on the rights to free expression, association, and assembly',
      'Scores of critics serve lengthy prison sentences following unfair trials on vague charges',
      'The Federal Penal Code and Cybercrime Law are used to silence dissidents, journalists, activists, and anyone the authorities perceived to be critical of the government',
      'Jordanian activist Ahmed al-Atoum is serving a 10-year sentence for peaceful social media activity',
      'Employers hold disproportionate control over migrant workers under the kafala (sponsor) system',
      'The UAE bans trade unions and still does not have a non-discriminatory minimum wage',
      'The law does not criminalize marital rape and reaffirms male guardians legal right to discipline their wives',
      'The UN Panel of Experts on Sudan found allegations of UAE support to the Rapid Support Forces (RSF) to be credible',
    ],
    surveillanceInfrastructure: [
      { indicator: 'State surveillance extent', score: 0, max: 6, assessment: 'Extensive' },
      { indicator: 'Mass user data collection', score: 0, max: 6, assessment: 'Documented' },
      { indicator: 'Spy programs on journalists', score: 'Yes', max: null, assessment: 'Both domestic and foreign' },
      { indicator: 'Protective laws for sources', score: 'No', max: null, assessment: 'Absent' },
      { indicator: 'Sources protected', score: 'No', max: null, assessment: 'Penalized as criminals' },
    ],
  },

  // Regional Comparative Analysis
  regionalComparative: {
    gulfMediaCrackdown: [
      { country: 'Qatar', rsfRank: 126, score: 38.93, keyRestrictions: 'Moderate restrictions' },
      { country: 'Oman', rsfRank: 152, score: 32.25, keyRestrictions: 'Significant restrictions' },
      { country: 'UAE', rsfRank: 164, score: 26.91, keyRestrictions: 'Attorney-general banned posting images' },
      { country: 'Saudi Arabia', rsfRank: 166, score: 25.41, keyRestrictions: 'Extensive censorship' },
      { country: 'Bahrain', rsfRank: 168, score: 22.84, keyRestrictions: 'Severe restrictions' },
    ],
    uaeSpecificComparativeSilence: [
      { metric: 'Ranking among targeted countries', value: 'Most targeted despite non-participation' },
      { metric: 'Attacks since February 28, 2026', value: 'Hundreds of drones and missiles' },
      { metric: 'Coverage-to-impact ratio', value: 'Inversely proportional (more attacks = less reporting)' },
    ],
  },

  // CPJ Iran War Press Freedom Violations
  cpjIranWarViolations: {
    period: 'February 28 - April 10, 2026',
    journalistCasualtiesGlobal: {
      journalistsKilled: 9,
      journalistsKidnapped: 1,
      journalistsInjured: 7,
      journalistsTargetedThreatenedHarassed: 16,
    },
    infrastructureAccessViolations: {
      mediaOutletsDamaged: 9,
      journalistsDetainedOrQuestioned: 11,
      journalistsObstructedWhileReporting: 19,
    },
    censorshipMeasures: [
      { country: 'Iran', measure: 'Nationwide internet blackout (4% then ~1% connectivity)' },
      { country: 'UAE', measure: 'Warning against photographing/sharing attack images (1 year imprisonment)' },
      { country: 'Jordan', measure: 'Ban on publishing defensive operations content' },
      { country: 'Saudi Arabia', measure: 'Ban on publishing defensive operations content' },
      { country: 'Kuwait', measure: 'Ban on publishing defensive operations content' },
      { country: 'Qatar', measure: 'Warning against gathering at incident sites' },
    ],
    notableIncidents: [
      'Iranian state broadcaster IRIB headquarters struck in Tehran',
      'Multiple Lebanese journalists killed in Israeli strikes (Al-Manar TV, Al-Mayadeen)',
      'U.S. journalist Shelly Kittleson kidnapped in Baghdad and later freed',
      'Japanese journalist Shinnosuke Kawashima (NHK) detained in Iran and released on bail',
      'Iranian judiciary ordered asset seizure and bank account freezes for at least 100 individuals',
    ],
  },

  // Specific Query Results
  specificQueryResults: {
    query1: {
      query: 'UAE AND (not reported OR media silence)',
      eventsNotReported: [
        { event: 'Human rights sentences (Mansoor, bin Ghaith)', internationalCoverage: 'HRW, Amnesty, RSF', uaeCoverage: 'None' },
        { event: 'Poet extradition/disappearance (al-Qaradawi)', internationalCoverage: 'HRW documentation', uaeCoverage: 'None' },
        { event: '84-person mass trial', internationalCoverage: 'HRW World Report', uaeCoverage: 'None' },
        { event: 'Iranian strike actual damage', internationalCoverage: 'Satellite, video evidence', uaeCoverage: 'Successful interceptions only' },
        { event: 'Social media arrests (375+)', internationalCoverage: 'CPJ, HRW', uaeCoverage: 'None' },
      ],
    },
    query2: {
      query: 'UAE AND (censored OR suppressed OR banned from reporting)',
      results: [
        { action: 'X accounts blocked', count: 'Multiple', date: 'March 2, 2026' },
        { action: 'Detained for sharing misleading videos', count: '109+', date: 'March 2026' },
        { action: 'Al Arabiya and journalists accounts restricted', count: 'Multiple', date: 'March 2026' },
        { action: 'Specific strike locations mentioned', count: 0, date: 'Ongoing' },
      ],
    },
    query3: {
      query: 'UAE AND (blackout OR news blackout OR information blackout)',
      results: [
        { date: 'March 25, 2013', event: 'Trial of 94 activists on national security charges', type: 'News blackout imposed' },
        { date: 'March 2026', event: 'Social media during Iran strikes', type: 'Widespread blocking' },
        { date: 'March 2026', event: 'Casualties and damage from strikes', type: 'Information blackout' },
      ],
    },
    query4: {
      query: 'UAE AND (official statement AND no follow-up)',
      results: [
        { pattern: 'Successful interceptions announced', evidence: 'No questions permitted' },
        { pattern: 'No investigative journalism following claims', evidence: 'Accountability absent' },
        { pattern: 'Official statements unchallenged', evidence: 'Government claims dominate' },
      ],
    },
  },

  // Source Credibility Matrix
  sourceCredibilityMatrix: [
    { source: 'RSF', tier: 1, focus: 'Press freedom global rankings', reliability: 'High', uaeBiasAssessment: 'Independent' },
    { source: 'Freedom House', tier: 1, focus: 'Internet/civil freedoms', reliability: 'High', uaeBiasAssessment: 'Independent' },
    { source: 'Human Rights Watch', tier: 1, focus: 'Human rights documentation', reliability: 'High', uaeBiasAssessment: 'Independent' },
    { source: 'CPJ', tier: 1, focus: 'Journalist protection', reliability: 'High', uaeBiasAssessment: 'Independent' },
    { source: 'WJWC', tier: 2, focus: "Women's rights/media", reliability: 'High', uaeBiasAssessment: 'Independent' },
    { source: 'Haaretz', tier: 2, focus: 'Middle East journalism', reliability: 'High', uaeBiasAssessment: 'Independent' },
    { source: 'Martin Plaut', tier: 2, focus: 'Conflict/Africa coverage', reliability: 'High', uaeBiasAssessment: 'Independent' },
    { source: 'The National (UAE)', tier: 3, focus: 'UAE-based English media', reliability: 'Medium', uaeBiasAssessment: 'Pro-government' },
    { source: 'Al Estiklal', tier: 3, focus: 'Lebanese media', reliability: 'Medium', uaeBiasAssessment: 'Variable' },
    { source: 'The Arab Weekly', tier: 3, focus: 'Regional media', reliability: 'Medium', uaeBiasAssessment: 'Variable' },
    { source: 'GeoFactBook', tier: 2, focus: 'Data aggregation', reliability: 'High', uaeBiasAssessment: 'Independent' },
  ],

  // Entity Registries
  entityRegistries: {
    convictedHumanRightsDefenders: [
      { name: 'Ahmed Mansoor', nationality: 'Emirati', sentence: '15 years', year: 2023, charges: 'Online writing', status: 'Imprisoned' },
      { name: 'Nasser bin Ghaith', nationality: 'Emirati', sentence: '15 years', year: 2023, charges: 'Social media content', status: 'Imprisoned' },
      { name: 'Ahmed al-Atoum', nationality: 'Jordanian', sentence: '10 years', year: 2024, charges: 'Social media activity', status: 'Imprisoned' },
    ],
    forciblyDisappeared: [
      { name: 'Abdulrahman al-Qaradawi', nationality: 'Emirati', lastSeen: 'January 2025', circumstance: 'Extradited from Lebanon' },
    ],
    massTrialDefendants: [
      { metric: 'Total charged', value: 84 },
      { metric: 'Convicted', value: '44+' },
      { metric: 'Life sentences', value: 40 },
      { metric: '15-year sentences', value: 4 },
      { metric: 'Previously convicted (UAE94)', value: '60+' },
    ],
    blockedSocialMediaAccounts: [
      { account: 'Al Arabiya Breaking News', type: 'News outlet', followers: 'N/A' },
      { account: 'Iyad Al-Humoud', type: 'Journalist', followers: '5+ million' },
      { account: 'Malik Alrougui', type: 'Journalist', followers: 'N/A' },
      { account: 'Maryam al-Hammadi', type: 'Opposition figure', followers: 'N/A' },
      { account: 'Misbar', type: 'Fact-checker', followers: 'N/A' },
      { account: 'Middle East Eye', type: 'News outlet', followers: 'N/A' },
    ],
    influenceOperations2019: [
      { platform: 'X (Twitter)', accounts: 4258, origin: 'UAE', purpose: 'Yemen war propaganda' },
      { platform: 'X (Twitter)', accounts: 271, origin: 'UAE/Egypt', purpose: 'Targeting Qatar' },
    ],
  },

  // Key Findings Summary
  keyFindingsSummary: {
    omissionPatterns: [
      { pattern: 'Direct Censorship', severity: 'Critical', evidenceBase: 'Systematic blocking, 100+ arrests' },
      { pattern: 'Narrative Control', severity: 'Critical', evidenceBase: 'Successful interception vs. satellite evidence' },
      { pattern: 'Selective Coverage', severity: 'Critical', evidenceBase: 'International covered abroad, silent domestic' },
      { pattern: 'Accountability Vacuum', severity: 'Critical', evidenceBase: 'No follow-up journalism documented' },
      { pattern: 'Legal Threat Environment', severity: 'Critical', evidenceBase: 'Preemptive suppression through penalties' },
    ],
    silenceMechanisms: [
      { mechanism: 'Strategic Silence Policy', implementation: 'Official articulation', scale: 'State-level' },
      { mechanism: 'Legal Intimidation', implementation: 'Arrest/prosecution for documentation', scale: '375+ arrests' },
      { mechanism: 'Platform Blocking', implementation: 'X accounts, social media restrictions', scale: 'Multiple accounts' },
      { mechanism: 'Self-Censorship', implementation: 'Surveillance + penalty fear', scale: 'Prevalent' },
      { mechanism: 'Access Denial', implementation: 'Rejection of FOIA legislation', scale: 'Systemic' },
    ],
    comparativeOmissionEvidence: [
      { event: 'Iranian strikes', internationalCoverage: 'Extensive with video/satellite', uaeCoverage: 'Successful interceptions only', informationGap: 'Critical' },
      { event: 'Human rights sentences', internationalCoverage: 'Widely documented', uaeCoverage: 'No coverage', informationGap: 'Critical' },
      { event: 'Mass trial', internationalCoverage: 'HRW documented', uaeCoverage: 'No coverage', informationGap: 'Critical' },
      { event: 'Strike damage', internationalCoverage: 'Satellite verified', uaeCoverage: 'Claims of limited fire', informationGap: 'Critical' },
    ],
  },

  // Statistical Dashboard
  statisticalDashboard: {
    pressFreedomKPIs: [
      { kpi: 'RSF World Press Freedom Rank', value: '164/180', trend: 'Declining', targetBaseline: 'Bottom 20 globally' },
      { kpi: 'RSF Score', value: '26.91', trend: '-12.1% YoY', targetBaseline: 'Lower = worse' },
      { kpi: 'Freedom House Internet Freedom', value: '28/100', trend: '-2 YoY', targetBaseline: 'Not Free' },
      { kpi: 'Freedom House Global Freedom', value: '18/100', trend: 'Unchanged', targetBaseline: 'Not Free' },
    ],
    enforcementKPIs: [
      { kpi: 'Total social media arrests', value: '375+', period: 'Feb-March 2026' },
      { kpi: 'X accounts blocked', value: 'Multiple', period: 'March 2, 2026' },
      { kpi: 'Misleading video arrests', value: 109, period: 'March 20, 2026' },
      { kpi: 'Iranian strike deaths', value: 12, period: 'As of April 1' },
      { kpi: 'Iranian strike injuries', value: 190, period: 'As of April 1' },
    ],
    judicialKPIs: [
      { kpi: 'Mass trial defendants', value: 84 },
      { kpi: 'Convictions', value: '44+' },
      { kpi: 'Life sentences', value: 40 },
      { kpi: 'Human rights defenders imprisoned', value: '3+ documented' },
    ],
    conflictKPIs: [
      { kpi: 'Drones/missiles launched at UAE', value: 'Hundreds' },
      { kpi: 'UAE ranking (targeted countries)', value: 'Most targeted despite non-participation' },
      { kpi: 'Journalists killed (global)', value: 9 },
      { kpi: 'Journalists kidnapped (global)', value: 1 },
      { kpi: 'Journalists injured (global)', value: 7 },
      { kpi: 'Journalists detained (global)', value: 11 },
      { kpi: 'Media outlets damaged (global)', value: 9 },
    ],
    digitalManipulationKPIs: [
      { kpi: 'Fake accounts removed (Yemen)', value: 4258, year: 2019 },
      { kpi: 'Coordinated accounts (Qatar)', value: 271, year: 2019 },
    ],
  },

  // Source Citations
  sourceCitations: [
    { number: 1, source: 'Freedom House - UAE Freedom on the Net 2025', url: 'https://freedomhouse.org/country/united-arab-emirates/freedom-net/2025', tier: 1, fetchStatus: 'Success' },
    { number: 2, source: 'Freedom House - UAE Freedom in the World 2025', url: 'https://freedomhouse.org/country/united-arab-emirates/freedom-world/2025', tier: 1, fetchStatus: 'Success' },
    { number: 3, source: 'RSF - UAE Country Profile', url: 'https://rsf.org/en/country/united-arab-emirates', tier: 1, fetchStatus: 'Blocked (403)' },
    { number: 4, source: 'RSF - Censored War Report', url: 'https://rsf.org/en/censored-war-crackdown-journalists-intensifying-gulf-jordan', tier: 1, fetchStatus: 'Blocked (403)' },
    { number: 5, source: 'Human Rights Watch - World Report 2025 UAE', url: 'https://www.hrw.org/world-report/2025/country-chapters/united-arab-emirates', tier: 1, fetchStatus: 'Success' },
    { number: 6, source: 'Martin Plaut - Censorship: Iranian Strikes', url: 'https://martinplaut.com/2026/04/05/censorship-how-the-uae-rewrites-the-story-of-iranian-strikes/', tier: 2, fetchStatus: 'Blocked (429)' },
    { number: 7, source: 'Haaretz - UAE Censors Iranian Strikes', url: 'https://www.haaretz.com/middle-east-news/2026-03-22/ty-article/.premium/intercepted-or-engaged-how-the-uae-censors-the-extent-of-iranian-strikes/0000019d-1660-d82a-addd-56721b9f0000', tier: 2, fetchStatus: 'Success' },
    { number: 8, source: 'The National - UAE Wartime Social Media', url: 'https://www.thenationalnews.com/opinion/comment/2026/03/24/the-uaes-wartime-social-media-measures-reflect-a-security-logic/', tier: 3, fetchStatus: 'Success' },
    { number: 9, source: 'WJWC - UAE Media Freedom', url: 'https://wjwc.org/reports/uae-suffocating-space-for-independent-media', tier: 2, fetchStatus: 'Success' },
    { number: 10, source: 'Al Estiklal - UAE Digital Control Tools', url: 'https://www.alestiklal.net/en/article/from-blocking-to-information-flooding-the-uae-s-tools-for-controlling-the-digital-space', tier: 3, fetchStatus: 'Success' },
    { number: 11, source: 'The Arab Weekly - Strategic Silence Policy', url: 'https://thearabweekly.com/uae-media-chief-outlines-strategic-silence-policy-counter-provocation', tier: 3, fetchStatus: 'Blocked (403)' },
    { number: 12, source: 'CPJ - Press Freedom Violations Iran War', url: 'https://cpj.org/2026/03/press-freedom-violations-in-the-middle-east-during-the-iran-war/', tier: 1, fetchStatus: 'Success' },
    { number: 13, source: 'GeoFactBook - UAE Press Freedom Index', url: 'https://geofactbook.com/countries/united-arab-emirates/press-freedom-index-score', tier: 2, fetchStatus: 'Blocked (403)' },
    { number: 14, source: 'RSF - News Blackout Trial 94 Activists', url: 'https://rsf.org/en/news-blackout-imposed-trial-94-activists-national-security-charges', tier: 1, fetchStatus: 'Blocked (403)' },
  ],

  // Research Methodology
  researchMethodology: {
    atomicQueriesExecuted: 12,
    pagesFetched: 14,
    successfulFetches: '9/14 (64%)',
    blockedSources: '5/14 (36%)',
    organizationsMonitored: ['RSF', 'Freedom House', 'HRW', 'CPJ', 'Amnesty International', 'WJWC'],
    timeCoverage: '2023-2026',
    focusPeriod: '2024-2026',
    languages: 'English and Arabic sources consulted',
    dataValidation: 'Cross-referenced multiple independent sources for key claims',
  },

  metadata: {
    documentEnriched: '2026-04-27',
    sourcesProcessed: 14,
    dataExtractionStatus: 'Comprehensive (all sections covered)',
  },
}

export const omissionSilenceOverview = {
  id: 'ver-11-7',
  claim: 'UAE maintains transparency in media coverage and allows independent reporting',
  verdict: 'false' as const,
  accuracyScore: 12,
  sources: [
    { name: 'RSF World Press Freedom Index 2025', tier: 1 as const, reliability: 'high' as const },
    { name: 'Freedom House Freedom on the Net 2025', tier: 1 as const, reliability: 'high' as const },
    { name: 'Human Rights Watch World Report 2025', tier: 1 as const, reliability: 'high' as const },
    { name: 'CPJ Iran War Press Freedom Violations', tier: 1 as const, reliability: 'high' as const },
    { name: 'WJWC UAE Media Freedom Report', tier: 2 as const, reliability: 'high' as const },
    { name: 'Martin Plaut Analysis', tier: 2 as const, reliability: 'high' as const },
  ],
  keyFindings: [
    { finding: 'RSF World Press Freedom Rank', metric: '164/180', source: 'RSF 2025', tier: 1 as const, alert: 'RED' as const },
    { finding: 'Freedom House Internet Freedom', metric: '28/100 - Not Free', source: 'Freedom House 2025', tier: 1 as const, alert: 'RED' as const },
    { finding: 'Social Media Arrests (Feb-March 2026)', metric: '375+', source: 'Abu Dhabi Police', tier: 1 as const, alert: 'RED' as const },
    { finding: 'X Accounts Blocked (March 2, 2026)', metric: 'Multiple', source: 'UAE Federal Prosecution', tier: 1 as const, alert: 'RED' as const },
    { finding: 'Mass Trial Defendants', metric: '84 (44+ convicted)', source: 'HRW 2025', tier: 1 as const, alert: 'RED' as const },
    { finding: 'Life Sentences from Mass Trial', metric: '40', source: 'HRW 2025', tier: 1 as const, alert: 'RED' as const },
  ],
  credibility: {
    tier: 1 as const,
    score: 92,
    sources: 14,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 100,
    level: 'critical' as const,
    justification: 'Direct evidence of systematic media suppression, censorship, and information control within UAE',
  },
  alertLevel: 'RED' as const,
  lastUpdated: '2026-04-27',
}

// ============================================================================
// 11-10: Coordinated Inauthentic Behavior (CIB) - Deep Research
// ============================================================================

export interface CIBKPIData {
  kpi: string
  value: string | number
  source: string
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
}

export interface CIBDefinition {
  source: string
  definition: string
  credibility: 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4'
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
}

export interface CIBCharacteristic {
  characteristic: string
  description: string
  detectionDifficulty: 'Low' | 'Medium' | 'High'
}

export interface CIBConceptDistinction {
  concept: string
  distinctionFromCIB: string
  overlap: 'Low' | 'Medium' | 'High'
}

export interface CIBTactic {
  tacticId: string
  tacticName: string
  description: string
  frequencyObserved: 'Low' | 'Medium' | 'High' | 'Critical'
}

export interface CIBOpSecMeasure {
  measure: string
  description: string
  detectionChallenge: 'High' | 'Very High' | 'Medium'
}

export interface CIBDetectionBranch {
  branch: string
  purpose: string
  keyIndicators: string[]
}

export interface CIBBehavioralSignature {
  indicatorId: string
  signatureName: string
  detectionMethod: string
  falsePositiveRate: 'Low' | 'Medium'
}

export interface CIBDetectionChallenge {
  challenge: string
  severity: 'Critical' | 'High' | 'Medium'
  contributingFactors: string[]
}

export interface CIBWarningSign {
  warningSign: string
  description: string
  actionRequired: string
}

export interface CIBTakedown {
  originCountry: string
  numberOfTakedowns: number
  percentOfTotal: number
  primaryTargets: string
  threatLevel: 'Critical' | 'High' | 'Medium'
}

export interface CIBOperation {
  operationName: string
  date: string
  origin: string
  facebookAccounts: number
  pages: number
  groups: number
  instagramAccounts: number
  pageFollowers: string
  instagramFollowers: string
  groupMembers?: string
  adSpend: string
  eventsCreated?: number
  eventsInterest?: number
  targetedCountries: string
  methodsUsed: string[]
  contentTopics: string[]
  attribution: string
  source: string
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
}

export interface CIBNarrativeTheme {
  narrativeTheme: string
  sentiment: 'Positive' | 'Negative'
  target: string
  sourceType: string
  frequency: 'Low' | 'Medium' | 'High'
}

export interface CIBPlatformPolicy {
  platform: string
  policyAspect: string
  detail: string
  credibility: 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4'
}

export interface CIBPlatformComparison {
  platform: string
  cibPolicyStrength: 'Comprehensive' | 'Exists' | 'Developing' | 'Moderate'
  enforcementRegularity: 'Quarterly reports' | 'Inconsistent' | 'Regular reports' | 'Incident-based'
  transparency: 'High' | 'Moderate' | 'Improving' | 'Limited'
  detectionCapability: 'Advanced' | 'Basic' | 'Emerging'
}

export interface CIBRegulatoryChallenge {
  challenge: string
  description: string
}

export interface CIBLegalFramework {
  framework: string
  applicationToCIB: string
}

export interface CIBCategory {
  categoryId: string
  categoryName: string
  description: string
  prevalence: 'Low' | 'Medium' | 'High'
}

export interface CIBMiddleEastPattern {
  pattern: string
  description: string
  statisticalEvidence: string
}

export interface CIAIGeneratedTrend {
  trend: string
  description: string
  detectionImpact: 'High' | 'Critical'
}

export interface CIBCrossPlatform {
  platformSpan: string
  coordinationType: string
  detectionComplexity: 'High' | 'Very High'
}

export interface CIBQ1Operation {
  operationName: string
  facebookAccounts: number
  pages: number
  groups: number
  instagramAccounts: number
  targetedCountries: string
  content: string
  details: string
  source: string
}

export interface CIBRedFlag {
  indicatorId: string
  indicator: string
  threshold: string
  action: string
}

export interface CIBNetworkIndicator {
  indicator: string
  description: string
  analysisMethod: string
}

export interface CIBUAEOperation {
  operation: string
  date: string
  platforms: string
  scale: string
  attribution: string
  sentimentTarget: string
}

export interface CIBUAEThreatLevel {
  target: string
  threatLevel: 'Critical' | 'High' | 'Medium'
  primaryNarrative: string
  engagementLevel: 'High' | 'Medium' | 'Low'
}

export interface CIBUAERelevanceItem {
  topicSource: string
  uaeRelevance: 'Critical' | 'High'
  rationale: string
}

export interface CIBTopPage {
  pageName: string
  followers: string
  description: string
}

export interface CIBMarketingFirm {
  firmName: string
  country: string
  role: string
  operationDate: string
  status: string
}

export interface CIBKeyIndividual {
  name: string
  role: string
  affiliation: string
  associatedDomains: string[]
}

export interface CIBStatisticalSummary {
  metric: string
  value: string | number
  source: string
}

export interface CIBConclusion {
  conclusion: string
  uaeRelevance: 'Critical' | 'High'
  confidence: 'High' | 'Verified'
}

export interface CIBRecommendation {
  recommendation: string
}

export interface CIBSourceCitation {
  source: string
  url: string
  tier: number
  uaeRelevance: string
  lastVerified: string
}

export interface CoordinatedInauthenticData {
  keyFinding: string
  kpiData: CIBKPIData[]
  definitions: CIBDefinition[]
  characteristics: CIBCharacteristic[]
  conceptDistinctions: CIBConceptDistinction[]
  tactics: CIBTactic[]
  opSecMeasures: CIBOpSecMeasure[]
  detectionBranches: CIBDetectionBranch[]
  behavioralSignatures: CIBBehavioralSignature[]
  detectionChallenges: CIBDetectionChallenge[]
  warningSigns: CIBWarningSign[]
  takedownSummary: CIBTakedown[]
  operations: CIBOperation[]
  narrativeThemes: CIBNarrativeTheme[]
  topPages: CIBTopPage[]
  platformPolicies: CIBPlatformPolicy[]
  platformComparisons: CIBPlatformComparison[]
  regulatoryChallenges: CIBRegulatoryChallenge[]
  legalFrameworks: CIBLegalFramework[]
  categories: CIBCategory[]
  middleEastPatterns: CIBMiddleEastPattern[]
  aiGeneratedTrends: CIAIGeneratedTrend[]
  crossPlatforms: CIBCrossPlatform[]
  q1Operations: CIBQ1Operation[]
  redFlags: CIBRedFlag[]
  networkIndicators: CIBNetworkIndicator[]
  uaeOperations: CIBUAEOperation[]
  uaeThreatLevels: CIBUAEThreatLevel[]
  uaeRelevanceItems: CIBUAERelevanceItem[]
  marketingFirms: CIBMarketingFirm[]
  keyIndividuals: CIBKeyIndividual[]
  statisticalSummary: CIBStatisticalSummary[]
  conclusions: CIBConclusion[]
  recommendations: CIBRecommendation[]
  sourceCitations: CIBSourceCitation[]
  lastUpdated: string
  researchCompiled: string
}

export const coordinatedInauthenticExtendedData: CoordinatedInauthenticData = {
  keyFinding: 'CIB operations in the Middle East are primarily driven by regional rivalries, with a clear Saudi/UAE/Egypt axis opposing an Iran/Turkey/Qatar axis, resulting in 46 documented takedowns between 2019-2025.',
  kpiData: [
    { kpi: 'Total MENA Takedowns (2018-2021)', value: 46, source: 'POMEPS', uaeRelevance: 'Critical' },
    { kpi: 'UAE-Linked Takedowns', value: 6, source: 'POMEPS', uaeRelevance: 'Critical' },
    { kpi: 'Egypt-Linked Takedowns', value: 10, source: 'POMEPS', uaeRelevance: 'High' },
    { kpi: 'Saudi Arabia-Linked Takedowns', value: 5, source: 'POMEPS', uaeRelevance: 'High' },
    { kpi: 'Iran-Linked Takedowns', value: 20, source: 'POMEPS', uaeRelevance: 'Critical' },
    { kpi: 'Avg Accounts Removed per Gulf Takedown', value: 214, source: 'Meta Newsroom', uaeRelevance: 'Critical' },
    { kpi: 'Combined Ad Spend (UAE/Egypt/SA Aug 2019)', value: '$275,000', source: 'Meta Newsroom', uaeRelevance: 'Critical' },
    { kpi: 'Marketing Firm Operations', value: '26%', source: 'POMEPS', uaeRelevance: 'High' },
    { kpi: 'Government-Linked Operations', value: '24%', source: 'POMEPS', uaeRelevance: 'High' },
    { kpi: 'AI-Generated Profile Photos (2024-2025)', value: '6 new operations', source: 'Quartz/Cyfluence', uaeRelevance: 'Critical' },
    { kpi: 'Cross-Platform Operations', value: 'Norm not exception', source: 'Meta Q1 2025', uaeRelevance: 'Critical' },
  ],
  definitions: [
    { source: 'Meta/Facebook Definition', definition: 'Coordinated Inauthentic Behavior (CIB) is particularly sophisticated forms of Inauthentic Behavior where false identities are central to the operation and operators use adversarial methods to evade detection or appear authentic.', credibility: 'Tier 1', uaeRelevance: 'Critical' },
    { source: "Meta's Operational Definition", definition: 'We view CIB as coordinated efforts to manipulate public debate for a strategic goal, in which fake accounts are central to the operation.', credibility: 'Tier 1', uaeRelevance: 'Critical' },
    { source: 'Institute for Strategic Dialogue (ISD) Definition', definition: 'Coordinated inauthentic behaviour is when a set of online entities—individual accounts, groups or pages—operate together towards a shared goal or purpose, which can, but does not have to be, managed by the same actors.', credibility: 'Tier 2', uaeRelevance: 'High' },
    { source: 'Research Definition (NCBI)', definition: 'Coordinated inauthentic behavior (CIB) is a manipulative communication tactic that uses a mix of authentic, fake, and duplicated social media accounts to operate as an adversarial network (AN) across multiple social media platforms.', credibility: 'Tier 2', uaeRelevance: 'High' },
  ],
  characteristics: [
    { characteristic: 'Account Composition', description: 'Mix of authentic, fake, and duplicated accounts', detectionDifficulty: 'Medium' },
    { characteristic: 'Identity Deception', description: 'Leaders hide real identities; supporters often reveal theirs', detectionDifficulty: 'High' },
    { characteristic: 'Hierarchical Structure', description: 'Pyramidal organization with common language and shared profile imagery', detectionDifficulty: 'Medium' },
    { characteristic: 'Coordination', description: 'Pre-arranged actions with "exceptional similarity" across posts', detectionDifficulty: 'Low' },
    { characteristic: 'Strategic Goal', description: 'Manipulation of public debate for political or financial gain', detectionDifficulty: 'High' },
  ],
  conceptDistinctions: [
    { concept: 'Fake News', distinctionFromCIB: 'CIB involves organized campaigns by fake accounts, not just false content', overlap: 'Low' },
    { concept: 'Spam', distinctionFromCIB: 'CIB is specifically focused on manipulation for strategic influence', overlap: 'Medium' },
    { concept: 'Simple Bot Activity', distinctionFromCIB: 'CIB involves sophisticated coordination and often human involvement', overlap: 'Medium' },
  ],
  tactics: [
    { tacticId: 'T1', tacticName: 'Psychological Harassment', description: 'Mass harassment campaigns to silence dissent', frequencyObserved: 'High' },
    { tacticId: 'T2', tacticName: 'Brigading', description: 'Drowning out opposing viewpoints through coordinated attacks', frequencyObserved: 'High' },
    { tacticId: 'T3', tacticName: 'Platform Exploitation', description: 'Using dislike buttons, mass reporting to suspend accounts', frequencyObserved: 'High' },
    { tacticId: 'T4', tacticName: 'Algorithm Manipulation', description: 'Posting on unrelated popular pages to gain visibility', frequencyObserved: 'High' },
    { tacticId: 'T5', tacticName: 'Cross-Platform Operations', description: 'Coordinating across Facebook, YouTube, Twitter, Telegram, VKontakte', frequencyObserved: 'Critical' },
    { tacticId: 'T6', tacticName: 'Paid Promotion', description: 'Using advertisement services for micro-targeting beyond followers', frequencyObserved: 'Medium' },
    { tacticId: 'T7', tacticName: 'Astroturfing', description: 'Creating false grassroots support', frequencyObserved: 'Critical' },
    { tacticId: 'T8', tacticName: 'Typo-Squatting', description: 'URLs mimicking authentic media domains', frequencyObserved: 'Low' },
  ],
  opSecMeasures: [
    { measure: 'Proxy IPs', description: 'Obscure coordination origins', detectionChallenge: 'Very High' },
    { measure: 'AI-Generated Profile Photos', description: 'Synthetic facial images', detectionChallenge: 'High' },
    { measure: 'Strong operational security', description: 'Advanced tradecraft', detectionChallenge: 'High' },
    { measure: 'Cross-Platform Presence', description: 'Simulate organic activity', detectionChallenge: 'Medium' },
  ],
  detectionBranches: [
    { branch: 'Coordination Assessment', purpose: 'Identifies coordinated efforts', keyIndicators: ['Synchronized posting', 'Template similarity'] },
    { branch: 'Source Assessment', purpose: 'Traces origins of inauthentic behavior', keyIndicators: ['Account creation patterns', 'IP analysis'] },
    { branch: 'Impact Assessment', purpose: 'Evaluates distribution and effects', keyIndicators: ['Engagement metrics', 'Spread patterns'] },
    { branch: 'Authenticity Assessment', purpose: 'Detects inauthentic elements', keyIndicators: ['Profile analysis', 'Behavior fingerprinting'] },
  ],
  behavioralSignatures: [
    { indicatorId: 'BS1', signatureName: 'Synchronized Posting', detectionMethod: 'Multiple accounts posting simultaneously or at coordinated intervals', falsePositiveRate: 'Medium' },
    { indicatorId: 'BS2', signatureName: 'Language Fingerprinting', detectionMethod: 'Shared templates and identical phrasing across posts', falsePositiveRate: 'Low' },
    { indicatorId: 'BS3', signatureName: 'Anomalous Network Topology', detectionMethod: 'Dense interconnected clusters with suspicious connectivity patterns', falsePositiveRate: 'Medium' },
    { indicatorId: 'BS4', signatureName: 'Artificial Engagement Patterns', detectionMethod: 'Sudden spikes in likes, shares, or comments', falsePositiveRate: 'Low' },
  ],
  detectionChallenges: [
    { challenge: 'Scale', severity: 'Critical', contributingFactors: ['Nearly 5 billion users make identification difficult'] },
    { challenge: 'Resource Intensive', severity: 'High', contributingFactors: ['Requires sophisticated mixed methods and AI'] },
    { challenge: 'Evolving Tactics', severity: 'Critical', contributingFactors: ['Mix of social bots, trolls, and human-operated accounts'] },
    { challenge: 'Limited Access', severity: 'High', contributingFactors: ['Platforms restrict data access for researchers'] },
    { challenge: 'False Positives', severity: 'Medium', contributingFactors: ['Gold-standard detection methods may misidentify real users as fake'] },
  ],
  warningSigns: [
    { warningSign: 'Page Transparency', description: 'Check geographic origin and name changes', actionRequired: 'Investigate' },
    { warningSign: 'Suspicious Calls to Action', description: 'Be wary of "Like and Share!" memes', actionRequired: 'Flag' },
    { warningSign: 'Creation Date', description: 'New pages about U.S. politics posting from abroad', actionRequired: 'Investigate' },
    { warningSign: 'Verification Status', description: 'Unverified sources warrant skepticism', actionRequired: 'Cross-reference' },
    { warningSign: 'Admin Analysis', description: 'Foreign-run political groups may indicate inauthenticity', actionRequired: 'Deep dive' },
  ],
  takedownSummary: [
    { originCountry: 'Iran', numberOfTakedowns: 20, percentOfTotal: 43.5, primaryTargets: 'Multiple regions', threatLevel: 'Critical' },
    { originCountry: 'Egypt', numberOfTakedowns: 10, percentOfTotal: 21.7, primaryTargets: 'Libya, Sudan, Qatar, Yemen', threatLevel: 'High' },
    { originCountry: 'UAE', numberOfTakedowns: 6, percentOfTotal: 13.0, primaryTargets: 'Qatar, Turkey, regional rivals', threatLevel: 'Critical' },
    { originCountry: 'Saudi Arabia', numberOfTakedowns: 5, percentOfTotal: 10.9, primaryTargets: 'Qatar, Iran, regional politics', threatLevel: 'High' },
    { originCountry: 'Other', numberOfTakedowns: 5, percentOfTotal: 10.9, primaryTargets: 'Various', threatLevel: 'Medium' },
  ],
  operations: [
    {
      operationName: 'Newave Operation (UAE & Egypt)',
      date: 'August 2019',
      origin: 'UAE & Egypt',
      facebookAccounts: 259,
      pages: 102,
      groups: 5,
      instagramAccounts: 17,
      pageFollowers: '13.7 million',
      instagramFollowers: '65,000',
      groupMembers: '9,000',
      adSpend: '~$167,000 (USD and AED)',
      eventsCreated: 4,
      eventsInterest: 270,
      targetedCountries: 'Libya, Sudan, Comoros, Qatar, Turkey, Lebanon, Syria, Jordan, Morocco',
      methodsUsed: ['Compromised and fake accounts to run Pages', 'Content dissemination networks', 'Comment manipulation in Groups', 'Artificial engagement inflation', 'Impersonated public figures', 'Masqueraded as local news organizations'],
      contentTopics: ['Local news and politics', 'Alleged support of terrorist groups by Qatar and Turkey', "Iran's activity in Yemen", 'Libyan conflict', 'Somaliland independence'],
      attribution: 'New Waves (Egypt) and Newave (UAE) marketing firms',
      source: 'Meta Newsroom',
      uaeRelevance: 'Critical',
    },
    {
      operationName: 'Saudi Arabia Origin',
      date: 'August 2019',
      origin: 'Saudi Arabia',
      facebookAccounts: 217,
      pages: 144,
      groups: 5,
      instagramAccounts: 31,
      pageFollowers: '1.4 million',
      instagramFollowers: '145,000',
      groupMembers: '26,000',
      adSpend: '~$108,000 (SAR and USD)',
      targetedCountries: 'Qatar, Saudi Arabia, UAE, Bahrain, Egypt, Morocco, Palestine, Lebanon, Jordan',
      methodsUsed: ['Posed as locals in targeted countries', 'Fictitious personas for Pages/Groups', 'Drove traffic to off-platform domains'],
      contentTopics: ['Crown Prince Mohammad bin Salman', 'Vision 2030 achievements', 'Saudi Armed Forces successes in Yemen', 'Criticism of Iran, Qatar, Turkey', 'Credibility attacks on Al-Jazeera and Amnesty International'],
      attribution: 'Individuals associated with Saudi government',
      source: 'Meta Newsroom + Bellingcat',
      uaeRelevance: 'Critical',
    },
    {
      operationName: 'Charles Communications (UAE)',
      date: 'October 2019',
      origin: 'UAE',
      facebookAccounts: 211,
      pages: 107,
      groups: 43,
      instagramAccounts: 87,
      pageFollowers: '<1.4 million',
      instagramFollowers: '<70,000',
      adSpend: '<$150,000 (USD, AED, INR)',
      targetedCountries: 'Multiple regions',
      methodsUsed: ['Coordinated inauthentic behavior across multiple platforms'],
      contentTopics: ['Supporting UAE', 'Criticizing Qatar, Turkey, Iran', 'Muslim Brotherhood narratives', 'Iran nuclear deal', 'UAE activity in Yemen', 'First Emirati astronaut', 'Election content'],
      attribution: 'Charles Communications (UAE), MintReach (Nigeria), Flexell (Egypt)',
      source: 'Meta Newsroom',
      uaeRelevance: 'Critical',
    },
  ],
  narrativeThemes: [
    { narrativeTheme: 'Alleged Qatar terrorism sponsorship', sentiment: 'Negative', target: 'Qatar', sourceType: 'Pro-SA/UAE/Egypt', frequency: 'High' },
    { narrativeTheme: 'Turkish "occupation" of Qatar', sentiment: 'Negative', target: 'Qatar/Turkey', sourceType: 'Pro-SA/UAE/Egypt', frequency: 'Medium' },
    { narrativeTheme: "Iran's activity in Yemen", sentiment: 'Negative', target: 'Iran', sourceType: 'Pro-SA/UAE/Egypt', frequency: 'High' },
    { narrativeTheme: 'Muslim Brotherhood threat', sentiment: 'Negative', target: 'Qatar/Turkey', sourceType: 'Pro-SA/UAE/Egypt', frequency: 'High' },
    { narrativeTheme: 'Vision 2030 praise', sentiment: 'Positive', target: 'Saudi Arabia', sourceType: 'Pro-SA', frequency: 'High' },
    { narrativeTheme: 'Crown Prince praise', sentiment: 'Positive', target: 'Saudi Arabia', sourceType: 'Pro-SA', frequency: 'High' },
    { narrativeTheme: 'Somaliland independence', sentiment: 'Positive', target: 'Somalia', sourceType: 'Pro-SA/UAE', frequency: 'Medium' },
    { narrativeTheme: 'Al-Jazeera credibility attacks', sentiment: 'Negative', target: 'Qatar', sourceType: 'Pro-SA/UAE/Egypt', frequency: 'High' },
    { narrativeTheme: 'Amnesty International attacks', sentiment: 'Negative', target: 'Human rights orgs', sourceType: 'Pro-SA', frequency: 'Medium' },
    { narrativeTheme: 'Yemen war justification', sentiment: 'Positive', target: 'Saudi Arabia', sourceType: 'Pro-SA/UAE', frequency: 'High' },
  ],
  topPages: [
    { pageName: 'A7aassess', followers: '2.3-2.4 million', description: 'Primary amplifier page' },
    { pageName: 'Arab Efiles', followers: '300,000+', description: "Think tank covering 'global issues'" },
    { pageName: 'Ahrar Al Somali', followers: '56,000+', description: 'Social media arm of Somalianow publication' },
    { pageName: 'Türkiye şimdi ("Turkey Now")', followers: '33,332', description: 'Turkish-language political content' },
    { pageName: 'Palastine Alyoum', followers: '30,442-30,500', description: 'Magazine-style political page' },
  ],
  platformPolicies: [
    { platform: 'Meta/Facebook', policyAspect: 'Policy Scope', detail: 'CIB prohibited "agnostic of content or ideology"', credibility: 'Tier 1' },
    { platform: 'Meta/Facebook', policyAspect: 'Removal Scope', detail: 'Fake accounts, Pages, Groups, Events, Instagram accounts', credibility: 'Tier 1' },
    { platform: 'Meta/Facebook', policyAspect: 'Foreign Interference Classification', detail: 'When operators target audiences outside home country', credibility: 'Tier 1' },
    { platform: 'X/Twitter', policyAspect: 'Authenticity Policy', detail: 'Prohibits fake accounts, identity misrepresentation, coordinated activity', credibility: 'Tier 1' },
    { platform: 'X/Twitter', policyAspect: 'Enforcement Regularity', detail: 'Inconsistent per user reports', credibility: 'Tier 4' },
    { platform: 'X/Twitter', policyAspect: 'Post-Musk Concerns', detail: 'Selective enforcement allegations', credibility: 'Tier 4' },
  ],
  platformComparisons: [
    { platform: 'Meta/Facebook', cibPolicyStrength: 'Comprehensive', enforcementRegularity: 'Quarterly reports', transparency: 'High', detectionCapability: 'Advanced' },
    { platform: 'X/Twitter', cibPolicyStrength: 'Exists', enforcementRegularity: 'Inconsistent', transparency: 'Moderate', detectionCapability: 'Basic' },
    { platform: 'TikTok', cibPolicyStrength: 'Developing', enforcementRegularity: 'Regular reports', transparency: 'Improving', detectionCapability: 'Emerging' },
    { platform: 'YouTube', cibPolicyStrength: 'Moderate', enforcementRegularity: 'Incident-based', transparency: 'Limited', detectionCapability: 'Basic' },
  ],
  regulatoryChallenges: [
    { challenge: 'Definition Variability', description: 'Definitions left to platform discretion' },
    { challenge: 'No Unified Standard', description: 'No unified international regulatory definition' },
    { challenge: 'EU Approach', description: 'Working toward holistic approach targeting "falsification of content distribution and amplification in a coordinated, non-organic way"' },
  ],
  legalFrameworks: [
    { framework: 'U.S. DOJ', applicationToCIB: 'Has prosecuted related identity fraud and computer fraud cases' },
    { framework: 'CFAA', applicationToCIB: 'Computer Fraud and Abuse Act applicable in some circumstances' },
    { framework: 'Jurisdictional Issues', applicationToCIB: 'International coordination challenging' },
    { framework: 'Primary Enforcement', applicationToCIB: 'Platform terms of service' },
  ],
  categories: [
    { categoryId: 'C1', categoryName: 'Deceptive Influence Operations', description: 'Traditional CIB focused on foreign interference', prevalence: 'High' },
    { categoryId: 'C2', categoryName: 'Manufactured Attention Campaigns', description: 'Boosting specific content through coordinated fake engagement', prevalence: 'Medium' },
    { categoryId: 'C3', categoryName: 'Grassroots Astroturfing', description: 'Creating false local support appearances', prevalence: 'High' },
    { categoryId: 'C4', categoryName: 'Commercial Manipulation', description: 'Using CIB for marketing/monetary gain', prevalence: 'Medium' },
  ],
  middleEastPatterns: [
    { pattern: '"Kitchen Sink" Approach', description: 'Operations use diverse narratives simultaneously', statisticalEvidence: 'Observed across Gulf operations' },
    { pattern: 'Outsourcing Trend', description: '26% of operations linked to PR/marketing firms', statisticalEvidence: 'POMEPS dataset' },
    { pattern: 'Low Engagement', description: 'Most campaigns achieved "low engagement" per researchers', statisticalEvidence: 'POMEPS dataset' },
    { pattern: 'Plausible Deniability', description: 'Government-linked via marketing firm intermediaries', statisticalEvidence: 'Observed in UAE, Egypt, Saudi operations' },
  ],
  aiGeneratedTrends: [
    { trend: 'AI Profile Photos', description: 'Meta disrupted six new covert influence operations using AI-generated content', detectionImpact: 'High' },
    { trend: 'Sophistication Increase', description: 'Detection challenges increase with AI sophistication', detectionImpact: 'Critical' },
    { trend: 'China Operation', description: 'Used AI-generated profile photos for Myanmar, Taiwan, Japan targeting', detectionImpact: 'High' },
  ],
  crossPlatforms: [
    { platformSpan: 'Facebook + Instagram + X + YouTube + TikTok', coordinationType: 'Simultaneous multi-platform', detectionComplexity: 'Very High' },
    { platformSpan: 'Petition platforms + Alternative social media', coordinationType: 'Cross-format', detectionComplexity: 'High' },
    { platformSpan: 'Account farm reinforcement', coordinationType: 'Persona consistency', detectionComplexity: 'High' },
  ],
  q1Operations: [
    {
      operationName: 'China Operation',
      facebookAccounts: 157,
      pages: 19,
      groups: 1,
      instagramAccounts: 17,
      targetedCountries: 'Myanmar, Taiwan, Japan',
      content: 'Criticized civil resistance (Myanmar), supported junta, attacked Japan government, Taiwan corruption claims',
      details: 'Used AI-generated profile photos',
      source: 'Cyfluence Research',
    },
    {
      operationName: 'Iran Operation (Storm-2035 Cluster)',
      facebookAccounts: 17,
      pages: 22,
      groups: 0,
      instagramAccounts: 21,
      targetedCountries: 'Azeri-speaking in Azerbaijan and Turkey',
      content: 'Impersonated female journalists, pro-Palestine activists',
      details: 'Hashtags: #palestine, #gaza, #starbucks, #instagram. Topics: Paris Olympics, Israel pager attacks, US/Biden criticism',
      source: 'Cyfluence Research',
    },
    {
      operationName: 'Romania Operation (Largest by Scale)',
      facebookAccounts: 0,
      pages: 0,
      groups: 0,
      instagramAccounts: 0,
      targetedCountries: 'Romania',
      content: 'Sports, travel, regional news, elections. Coincided with Romanian elections.',
      details: '~20,000 accounts, $177,000 ad spend, platforms: YouTube, X, TikTok, strong OpSec with proxy IPs',
      source: 'The Hacker News',
    },
  ],
  redFlags: [
    { indicatorId: 'RF1', indicator: 'Synchronized Posting', threshold: '>3 accounts, <5 min interval', action: 'Investigate' },
    { indicatorId: 'RF2', indicator: 'Template Similarity', threshold: '>70% identical phrasing', action: 'Flag' },
    { indicatorId: 'RF3', indicator: 'Engagement Spikes', threshold: '>500% from baseline', action: 'Investigate' },
    { indicatorId: 'RF4', indicator: 'Profile Photo Anomalies', threshold: 'AI-generated or stock detected', action: 'Deep dive' },
    { indicatorId: 'RF5', indicator: 'Geographic Inconsistencies', threshold: 'Location vs. posting pattern mismatch', action: 'Investigate' },
    { indicatorId: 'RF6', indicator: 'Name Pattern Recognition', threshold: '>5 accounts with similar naming', action: 'Flag' },
  ],
  networkIndicators: [
    { indicator: 'Dense Clusters', description: 'Accounts heavily interconnected with each other but few organic connections', analysisMethod: 'Network graph analysis' },
    { indicator: 'Bridge Accounts', description: 'Accounts linking otherwise disconnected communities', analysisMethod: 'Social network analysis' },
    { indicator: 'Temporal Patterns', description: 'Posting during specific hours suggesting coordinated shifts', analysisMethod: 'Time-series analysis' },
    { indicator: 'Cross-Platform Signatures', description: 'Same content appearing on multiple platforms simultaneously', analysisMethod: 'Cross-reference monitoring' },
  ],
  uaeOperations: [
    { operation: 'Newave Operation', date: 'Aug 2019', platforms: 'Facebook, Instagram', scale: '259+ accounts, 102 pages', attribution: 'Newave marketing firm', sentimentTarget: 'Qatar, Turkey' },
    { operation: 'Charles Communications', date: 'Oct 2019', platforms: 'Facebook, Instagram', scale: '211 accounts, 107 pages', attribution: 'Charles Communications (UAE)', sentimentTarget: 'Qatar, Turkey, Iran' },
    { operation: 'Multi-language Praise Ops', date: '2017-2021', platforms: 'Multiple', scale: '15+ languages', attribution: 'UAE government-linked', sentimentTarget: 'UAE global image' },
  ],
  uaeThreatLevels: [
    { target: 'Qatar', threatLevel: 'Critical', primaryNarrative: 'Terrorism sponsorship allegations', engagementLevel: 'High' },
    { target: 'Turkey', threatLevel: 'High', primaryNarrative: '"Occupation" of Qatar, anti-Muslim Brotherhood', engagementLevel: 'High' },
    { target: 'Iran', threatLevel: 'High', primaryNarrative: 'Yemen activity, regional influence', engagementLevel: 'High' },
    { target: 'Human Rights Orgs', threatLevel: 'Medium', primaryNarrative: 'Credibility attacks (Amnesty, Al-Jazeera)', engagementLevel: 'Medium' },
    { target: 'Somalia/Somaliland', threatLevel: 'Medium', primaryNarrative: 'Independence promotion', engagementLevel: 'Low' },
  ],
  uaeRelevanceItems: [
    { topicSource: 'Gulf CIB Takedowns', uaeRelevance: 'Critical', rationale: 'UAE directly implicated in 6 documented takedowns' },
    { topicSource: 'August 2019 Takedown', uaeRelevance: 'Critical', rationale: 'UAE marketing firm Newave confirmed as operator' },
    { topicSource: 'October 2019 Takedown', uaeRelevance: 'Critical', rationale: 'UAE firm Charles Communications confirmed' },
    { topicSource: 'Regional Narrative Themes', uaeRelevance: 'Critical', rationale: 'Anti-Qatar/Turkey narratives directly serve UAE interests' },
    { topicSource: 'Marketing Firm Attribution', uaeRelevance: 'Critical', rationale: '26% of MENA ops outsourced; UAE/Egypt majority' },
    { topicSource: 'AI-Generated Content Trend', uaeRelevance: 'High', rationale: 'UAE increasingly targeted by information operations' },
    { topicSource: 'Cross-Platform Coordination', uaeRelevance: 'High', rationale: 'UAE operations span Facebook, Instagram, YouTube' },
  ],
  marketingFirms: [
    { firmName: 'New Waves', country: 'Egypt', role: 'Primary operator', operationDate: 'Since 2015', status: 'Discontinued' },
    { firmName: 'Newave', country: 'UAE', role: 'Primary operator', operationDate: 'Pre-Aug 2019', status: 'Website offline' },
    { firmName: 'Charles Communications', country: 'UAE', role: 'Operator', operationDate: 'Oct 2019', status: 'Unknown' },
    { firmName: 'MintReach', country: 'Nigeria', role: 'Operator', operationDate: 'Oct 2019', status: 'Unknown' },
    { firmName: 'Flexell', country: 'Egypt', role: 'Operator', operationDate: 'Oct 2019', status: 'Unknown' },
    { firmName: 'InsightID', country: 'Indonesia', role: 'Operator', operationDate: 'Oct 2019', status: 'Unknown' },
    { firmName: 'El Fagr', country: 'Egypt', role: 'Media proxy', operationDate: 'Oct 2019', status: 'Operating' },
  ],
  keyIndividuals: [
    { name: 'Amr Hussein', role: 'Likely operator', affiliation: 'New Waves (Egypt)', associatedDomains: ['newwaves.club', 'newwave.club', 'azomol.org'] },
  ],
  statisticalSummary: [
    { metric: 'Total MENA Operations Analyzed', value: 46, source: 'POMEPS' },
    { metric: 'Time Period Analyzed', value: 'Aug 2018 - Mar 2021', source: 'POMEPS' },
    { metric: 'UAE Takedowns', value: 6, source: 'POMEPS' },
    { metric: 'Combined Ad Spend (Aug 2019)', value: '$275,000', source: 'Meta' },
    { metric: 'Combined Assets Removed (Aug 2019)', value: 387, source: 'DFRLab' },
    { metric: 'Maximum Page Followers (Single Page)', value: '2.4 million (A7aassess)', source: 'DFRLab' },
    { metric: 'AI-Generated Ops (2024-2025)', value: 6, source: 'Quartz' },
    { metric: 'Romania Operation Scale', value: '20,000 accounts', source: 'Cyfluence' },
  ],
  conclusions: [
    { conclusion: 'CIB definitions remain platform-centric with limited standardization', uaeRelevance: 'High', confidence: 'High' },
    { conclusion: 'Gulf-based CIB operations have removed over 1,000 accounts/pages across multiple takedowns', uaeRelevance: 'Critical', confidence: 'Verified' },
    { conclusion: 'Marketing firms provide "plausible deniability" for government-linked operations', uaeRelevance: 'Critical', confidence: 'Verified' },
    { conclusion: 'Detection remains challenging due to evolving tactics and scale', uaeRelevance: 'High', confidence: 'High' },
    { conclusion: 'AI-generated content is increasingly used in CIB operations', uaeRelevance: 'High', confidence: 'Verified' },
    { conclusion: 'Cross-platform coordination is becoming the norm', uaeRelevance: 'Critical', confidence: 'High' },
  ],
  recommendations: [
    { recommendation: 'Monitor platform transparency reports regularly - Meta leads in disclosure' },
    { recommendation: 'Cross-reference multiple platform announcements - Single-source verification required' },
    { recommendation: 'Track narrative patterns rather than individual accounts - Gulf operations use "kitchen sink" approach' },
    { recommendation: 'Consider outsourcing and plausible deniability in attribution - 26% of operations linked to marketing firms' },
    { recommendation: 'Look for behavioral signatures rather than single indicators - Synchronized posting + template similarity + network topology' },
    { recommendation: 'Assess UAE operations for marketing firm involvement - Newave, Charles Communications documented' },
    { recommendation: 'Monitor AI-generated content trends - 6 new operations disrupted in 2024-2025' },
  ],
  sourceCitations: [
    { source: 'Meta Transparency Center', url: 'https://transparency.meta.com/policies/community-standards/inauthentic-behavior/', tier: 1, uaeRelevance: 'Direct', lastVerified: '2025' },
    { source: 'Meta Q1 2025 Report', url: 'https://transparency.meta.com/sr/Q1-2025-Adversarial-threat-report/', tier: 1, uaeRelevance: 'Indirect', lastVerified: '2025' },
    { source: 'Facebook CIB Announcements', url: 'https://about.fb.com/news/tag/coordinated-inauthentic-behavior/', tier: 1, uaeRelevance: 'Direct', lastVerified: '2025' },
    { source: 'PMC CIB Research', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10060790/', tier: 2, uaeRelevance: 'Indirect', lastVerified: '2023' },
    { source: 'SAGE Journals CIB Typology', url: 'https://journals.sagepub.com/doi/10.1177/29768624251369784', tier: 2, uaeRelevance: 'Indirect', lastVerified: '2025' },
    { source: 'POMEPS', url: 'https://pomeps.org/middle-east-influence-operations-observations-across-social-media-takedowns', tier: 2, uaeRelevance: 'Direct', lastVerified: '2021' },
    { source: 'DFRLab', url: 'https://medium.com/dfrlab/facebook-disabled-assets-linked-to-egypt-and-uae-based-firms-a232d9effc32', tier: 2, uaeRelevance: 'Direct', lastVerified: '2019' },
    { source: 'Cyfluence Research', url: 'https://www.cyfluence-research.org/post/meta-takes-down-global-cib-operations-from-iran-china-and-romania', tier: 3, uaeRelevance: 'Indirect', lastVerified: '2025' },
    { source: 'Quartz', url: 'https://qz.com/meta-shut-down-campaigns-ai-generated-disinformation-1851507133', tier: 3, uaeRelevance: 'Indirect', lastVerified: '2024' },
  ],
  lastUpdated: '2026-04-29',
  researchCompiled: 'April 27, 2026',
}
