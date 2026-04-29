/**
 * International Perception Data
 * Comprehensive research data for UAE International Perception
 * Source: 3-1-international-perception-results.md
 */

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const executionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 24,
  pagesFetched: 25,
  urlsInSourceFile: 70,
  urlsSuccessfullyFetched: 35,
  urlsBlockedFailed: 5,
}

// ============================================================================
// QUERY PATTERNS EXECUTED
// ============================================================================

export const queryPatternsExecuted = [
  {
    id: 1,
    query: 'UAE perception United States',
    keyFinding: 'Asymmetric: UAE citizens 82% positive; Americans 14-19% positive',
  },
  {
    id: 2,
    query: 'UAE perception Europe',
    keyFinding: 'Strategic partner but concerns about far-right alliances',
  },
  {
    id: 3,
    query: 'UAE perception China',
    keyFinding: '62% view China as economic partner; positive overall perception',
  },
  {
    id: 4,
    query: 'UAE perception Russia',
    keyFinding: 'Trade tripled to $11.5B; close strategic partnership; BRICS member',
  },
  {
    id: 5,
    query: 'UAE perception UK Britain',
    keyFinding: 'Major arms deals; sports investments; Manchester City ownership',
  },
  {
    id: 6,
    query: 'UAE perception Middle East Arab world',
    keyFinding: 'Regionally strained; tensions with Saudi Arabia; RSF allegations',
  },
  {
    id: 7,
    query: 'UAE GCC perception Saudi Qatar Kuwait',
    keyFinding: 'Saudi-UAE rupture documented; regional competition',
  },
  {
    id: 8,
    query: 'UAE Latin America Brazil',
    keyFinding: 'Growing strategic partnership; BRICS overlap; defense deals',
  },
  {
    id: 9,
    query: 'UAE Africa perception Sub-Saharan',
    keyFinding: '$97-110B investment commitment; 19 embassies; sub-imperial role',
  },
  {
    id: 10,
    query: 'UAE India perception',
    keyFinding: '4.3M Indians in UAE; CEPA targeting $200B trade by 2032',
  },
  {
    id: 11,
    query: 'UAE safety perception',
    keyFinding: 'Safest country world #1-2 (score 84-86); 90%+ feel safe',
  },
  {
    id: 12,
    query: 'UAE human rights 2024-2025',
    keyFinding: 'Score 18/100 "Not Free"; mass trials documented',
  },
  {
    id: 13,
    query: 'UAE sportswashing reputation',
    keyFinding: 'Active sportswashing via Man City, NBA, UFC, horse racing',
  },
  {
    id: 14,
    query: 'UAE democracy autocracy',
    keyFinding: 'Federal absolute monarchy; no democratization expected',
  },
  {
    id: 15,
    query: 'UAE media censorship',
    keyFinding: 'Score 28/100 "Not Free"; 883 websites blocked; VoIP banned',
  },
  {
    id: 16,
    query: 'UAE tolerance LGBTQ women',
    keyFinding: 'Death penalty for homosexuality; no women\'s rights reforms',
  },
  {
    id: 17,
    query: 'UAE corruption transparency',
    keyFinding: 'CPI 69/100; Rank 21/182 globally; best in Arab world',
  },
  {
    id: 18,
    query: 'UAE happiness ranking',
    keyFinding: '21st globally (highest Arab nation); 6.821/10 score',
  },
  {
    id: 19,
    query: 'UAE military power',
    keyFinding: 'Rank 54/145; "Little Sparta"; $23.48B defense budget',
  },
  {
    id: 20,
    query: 'UAE innovation technology hub',
    keyFinding: '$91B AI target by 2031; MGX $100B; Microsoft $1.5B in G42',
  },
  {
    id: 21,
    query: 'UAE tourism perception',
    keyFinding: '11.7% of GDP; Dubai #1 reputation globally; safety 94.8/100',
  },
  {
    id: 22,
    query: 'UAE environmental sustainability',
    keyFinding: 'Greenwashing accusations; COP28 controversy; fossil fuel expansion',
  },
  {
    id: 23,
    query: 'UAE favorability rating poll',
    keyFinding: 'Arab Opinion Index 2025; IPSOS economic confidence high',
  },
  {
    id: 24,
    query: 'UAE international perception 2024-2025',
    keyFinding: 'Soft Power #10 globally; globally trusted, regionally strained',
  },
]

// ============================================================================
// REGIONAL PERCEPTION DATA
// ============================================================================

export const regionalPerception = {
  unitedStates: {
    title: 'United States',
    asymmetricPerception: {
      uaeCitizensViewUs: {
        friend: 17,
        securityPartner: 30,
        economicPartner: 35,
        totalPositive: 82,
      },
      usCitizensViewUae: {
        positive: 14,
        unfavorable: 38,
      },
      uaeResidentsViewUs: {
        allyOrFriend: 51,
        strongPositive: 64,
      },
    },
    militaryCooperation: {
      bases: ['Al Dhafra Air Base (Abu Dhabi)', 'Al Minhad Air Base (Dubai)', 'Fujairah Naval Base'],
      armsDeals: [
        { date: 'January 2021', deal: 'F-35 jets, MQ-9B drones', value: '$23 billion' },
        { date: 'May 2025', deal: 'CH-47F Chinook helicopters', value: '$1.32 billion' },
      ],
      majorDefensePartner: 'September 2024 designation',
    },
    concerns: [
      'NSA Project Raven surveillance targeting dissidents, Americans',
      'Classified US intelligence: UAE efforts to influence US foreign policy',
      'UAE working with Russian intelligence against US/UK agencies',
      '$154M spent on US lobbying (2016-2022)',
    ],
  },
  europe: {
    title: 'Europe',
    strategicPartnership: {
      status: 'Strategic partner via EU-UAE Strategic Partnership Agreement negotiations',
      priorities: ['Digitalisation', 'AI'],
      date: 'December 2025',
    },
    shadowSide: {
      farRightCoordination: {
        evidence: 'Internal UAE memo (August 2024) outlined plans to use far-right platforms (Visegrad24)',
        digitalNetwork: '330,000+ UAE-linked accounts; 720,000+ interactions targeting Muslims',
        documentedMeetings: [
          { date: 'January 2026', person: 'Nigel Farage at Dubai Ritz-Carlton' },
          { date: 'June 2025', person: 'Jordan Bardella (National Rally) in Abu Dhabi' },
        ],
        documentationCenter: 'UAE-funded Documentation Center Political Islam in Vienna (2020)',
        frenchInvestigation: 'Suspected illegal financing of Marine Le Pen campaign by UAE',
      },
      quote: 'The UAE has pursued rather aggressive – if not militant - foreign policies since 2014-2015',
      author: 'Erwin van Veen, Clingendael Institute',
    },
  },
  china: {
    title: 'China',
    tradeData: {
      totalTrade: '$100 billion/year',
      growthRate: '~25% per year since 2020',
      cagr2017to2022: '~90%',
      dubaiIranTrade: '$15+ billion/year',
      nonOilTrade2023: '$82 billion (34% up from 2021)',
    },
    uaePublicOpinion2023: {
      positiveViewOfChinaRole: 63,
      trustChinaReliablePartner: 62,
      chinaMostInfluentialEconomicPower: 47,
      favorNeutralityUsChinaCompetition: 63,
      seeChinasDevelopmentModelPositively: 74,
      wouldSideWithChinaVsUs: 26,
    },
    technologyTensions: [
      'US pressured UAE on Huawei/5G',
      'G42 removed $1.7-$2B in Chinese hardware',
      'Microsoft deal: $1.5B in G42 (April 2024) — signals US alignment',
    ],
  },
  russia: {
    title: 'Russia',
    tradeSurge: {
      pre2021: '$4 billion',
      current2024: '$11.5 billion',
      growth: 'Nearly tripled',
      belarusTrade: '$82.6M (2021) → $3.9B (2024) — 47-fold increase',
    },
    diplomaticMilestones: [
      { year: 1971, event: 'Diplomatic relations established with Soviet Union' },
      { year: 1986, event: 'Soviet embassy in Abu Dhabi' },
      { year: 2023, event: 'Invited to join BRICS' },
      { year: 'January 2024', event: 'Officially joined BRICS' },
      { year: 'Early 2024', event: 'Mediated Russia-Ukraine prisoner exchange' },
      { year: 'August 2025', event: 'MBZ met Putin in Moscow' },
    ],
    militaryPurchases: '$710 million in anti-tank weapons (2019)',
    concerns: [
      'US lawmakers: UAE "aiding and abetting genocide" in Sudan',
      'US sanctions on UAE firms for supporting Russia',
      'Leaked: UAE working with Russian intelligence against US/UK agencies',
    ],
  },
  arabWorld: {
    title: 'Arab World',
    overallAssessment: '"Globally trusted but regionally under strain" — ISPI, January 2026',
    saudUaeRift: {
      causes: [
        'Economic, mineral, and energy resource competition',
        'Yemen strategy divergence',
        'Sudan: Saudi backs Sudanese Armed Forces; UAE backs RSF',
        'Israel: Saudi resists normalization; UAE-Israel alignment viewed as "attempted encirclement"',
      ],
      expertQuote: 'Saudi Arabia is no longer contending with a junior partner, but with a state that has outgrown the role once assigned to it',
    },
    arabOpinionIndex2025: {
      sample: '40,130 respondents across 15 Arab countries',
      greatestThreats: [
        { threat: 'Israel', percentage: 28, detail: '53% in Mashreq, 38% in Nile Valley' },
        { threat: 'US', percentage: 10 },
        { threat: 'Iran', percentage: 8 },
      ],
      keyMetrics: [
        { metric: 'Oppose recognition of Israel', value: 87 },
        { metric: 'Palestinian cause is collective Arab cause', value: 80 },
        { metric: 'Support democratic system', value: 68 },
        { metric: 'Abraham Accords viewed positively (Emiratis)', value: 27 },
      ],
    },
  },
  africa: {
    title: 'Africa',
    investmentCommitments: [
      { source: 'Brookings/AGDA', amount: '$97 billion', period: '2022-2023' },
      { source: 'EBC', amount: '$110 billion' },
      { source: 'vs Chinese investment', amount: '3x over same period' },
    ],
    infrastructure: '19 UAE embassies in Sub-Saharan Africa; DP World investing in ports',
    characterization: 'TNI describes UAE as "sub-imperial power in Africa"',
    sudanAllegations: 'UAE providing weapons to RSF — generating tensions with Saudi Arabia',
  },
  latinAmerica: {
    title: 'Latin America',
    tradeData: [
      { partner: 'UAE-Latin America total', value: '$9 billion' },
      { partner: 'UAE-Brazil non-oil (2022)', value: '$4.3 billion' },
      { partner: 'Brazil', value: 'Largest UAE economic partner in Latin America' },
      { partner: 'GCC investment in LatAm (2016-2021)', value: '$4 billion' },
      { partner: 'UAE share of GCC-Latin America investment', value: '77%' },
    ],
    defenseEdgeGroup: [
      'Opening first international office in Brasília',
      '51% stake in Condor Non-Lethal Technologies',
      'MANSUP missile development with Brazilian Navy',
    ],
   cepas: 'Signed with Chile, Costa Rica, Colombia (2024)',
  },
  india: {
    title: 'India',
    diaspora: '4.3 million Indians in UAE',
    cepaTarget: '$200 billion trade by 2032',
  },
}

// ============================================================================
// DIMENSION PERCEPTION DATA
// ============================================================================

export const dimensionPerception = {
  safety: {
    title: 'Safety',
    score: 86,
    rank: '1st globally (2026)',
    previousRank: '2nd (2025)',
    previousScore: 84.5,
    perceptionScore: 94.8,
    residentsFeelingSafe: '90%+',
    osacAssessment: 'LOW-threat for crime',
    trend: 'Stable',
    sentiment: 'VERY HIGH',
    sourceConfidence: 'HIGH',
  },
  humanRights: {
    title: 'Human Rights',
    freedomHouseScore: 18,
    maxScore: 100,
    rating: 'Not Free',
    politicalRights: 5,
    civilLiberties: 13,
    internetFreedom: 28,
    massTrials: [
      { period: 'December 2023-July 2024', defendants: 84, sentenced: '43 to life, 10 got 10-15 years' },
    ],
    keyCases: [
      { person: 'Ahmed Mansoor', detail: 'Emirati activist, imprisoned in isolation since March 2017' },
      { person: 'Nasser bin Ghaith', detail: 'Life sentence for social media' },
    ],
    trend: 'Stable/Deteriorating',
    sentiment: 'VERY LOW',
    sourceConfidence: 'HIGH',
  },
  democracy: {
    title: 'Democracy/Political System',
    btiScores: [
      { index: 'Status Index', score: 6.0, rank: '#46/137' },
      { index: 'Governance Index', score: 6.67, rank: '#16/137' },
      { index: 'Political Transformation', score: 4.0, rank: '#85/137' },
      { index: 'Economic Transformation', score: 8.0, rank: '#15/137' },
    ],
    structure: 'Federal absolute monarchy; no elections at executive level',
    president: 'Mohammed bin Zayed Al Nahyan (MBZ) since May 2022',
    politicalParties: 'Prohibited',
    quote: 'No progress is expected on either front over the coming years',
    trend: 'None expected',
    sentiment: 'VERY LOW',
    sourceConfidence: 'HIGH',
  },
  sportswashing: {
    title: 'Sportswashing',
    investments: [
      { entity: 'Manchester City', connection: 'Owned by Abu Dhabi United Group (Sheikh Mansour)' },
      { entity: 'Emirates airline', connection: 'Sponsor of Arsenal, AC Milan, Real Madrid' },
      { entity: 'Etihad Airways', connection: 'Sponsor of Manchester City; names stadium' },
      { entity: 'UFC', connection: 'Abu Dhabi hub since 2010' },
      { entity: 'NBA', connection: 'Multiyear partnership; preseason games October 2024' },
      { entity: 'UAE Team Emirates', connection: 'Tour de France competitor' },
    ],
    hrwQuote: 'NBA games = "sportswashing" while people will be dying in Sudan',
    trend: 'Rising scrutiny',
    sentiment: 'LOW',
    sourceConfidence: 'MEDIUM-HIGH',
  },
  mediaCensorship: {
    title: 'Media Censorship',
    freedomOnTheNet: {
      score: 28,
      maxScore: 100,
      rating: 'Not Free',
      obstaclesToAccess: 12,
      limitsOnContent: 9,
      violationsOfUserRights: 7,
    },
    blockedVoip: ['WhatsApp', 'Facebook Messenger', 'Viber', 'FaceTime', 'Discord', 'Skype'],
    blockedWebsites: 883,
    blockedContent: ['Al Jazeera', 'Middle East Eye', 'LGBT+ sites (51 URLs)', 'Human rights organizations'],
    socialMediaManipulation: [
      { date: 'September 2019', event: 'Twitter removed 4,200+ pro-UAE political spam accounts' },
      { date: 'April 2020', event: 'Twitter removed ~9,000 pro-UAE coronavirus propaganda accounts' },
    ],
    rsfPressFreedom: 164,
    trend: 'Stable',
    sentiment: 'VERY LOW',
    sourceConfidence: 'HIGH',
  },
  lgbtqRights: {
    title: 'LGBTQ Rights',
    legalStatus: 'Same-sex activity criminalized, death penalty possible',
    enforcement: [
      { year: 2005, event: 'Abu Dhabi raid on "gay wedding" — 26 arrested' },
      { year: 2012, event: 'Two men sentenced 6 months-3 years' },
      { year: 2017, event: 'British man sentenced 3 months for touching another man\'s hip' },
    ],
    protections: 'None; no anti-discrimination laws',
    trend: 'Stable',
    sentiment: 'VERY LOW',
    sourceConfidence: 'HIGH',
  },
  womensRights: {
    title: "Women's Rights",
    reforms: ['Anti-discrimination law passed', 'Gender balance: 50% FNC female quota'],
    remainingIssues: [
      'Male guardianship requirements remain',
      'Domestic violence law allows "discipline"',
      'Marital rape not criminalized',
      'Cannot pass nationality equally to children',
    ],
    gap: 'Gap between perception and outcomes persists',
    trend: 'Slow progress',
    sentiment: 'MIXED',
    sourceConfidence: 'MEDIUM',
  },
  corruption: {
    title: 'Corruption/Transparency',
    cpiScore: 69,
    maxScore: 100,
    rank: 21,
    totalCountries: 182,
    regionalRank: '#1 in MENA',
    changeFrom2024: '+1',
    worldJusticeProject: {
      absenceOfCorruption: 19,
      judicialSystem: 39,
    },
    fatfGreyList: 'Removed February 2024',
    trend: 'Improving',
    sentiment: 'HIGH',
    sourceConfidence: 'HIGH',
  },
  happiness: {
    title: 'Happiness',
    worldRank: 21,
    score: 6.821,
    maxScore: 10,
    regionalPosition: 'Highest among Arab nations',
    beats: ['UK (23rd)', 'US (24th)', 'France (33rd)', 'Saudi Arabia (22nd, 6.817)'],
    factors: [
      { factor: 'GDP per capita', value: '$69,564' },
      { factor: 'Health life expectancy', value: '67.3 years' },
    ],
    governmentInitiatives: [
      { year: 2016, initiative: 'Minister of State for Happiness' },
      { year: 2017, initiative: 'Expanded to include well-being portfolio' },
      { year: 2020, initiative: 'Transferred to Ministry of Community Development' },
    ],
    trend: 'Stable',
    sentiment: 'HIGH',
    sourceConfidence: 'HIGH',
  },
  military: {
    title: 'Military Capability',
    globalFirepowerRank: 54,
    totalCountries: 145,
    powerIndex: 1.0188,
    defenseBudget: '$23.48 billion',
    activePersonnel: 65000,
    totalMilitary: 207000,
    nickname: '"Little Sparta"',
    quote: 'UAE military is unquestionably the most capable among the Arab states',
    airforce: {
      totalAircraft: 581,
      ready: 349,
    },
    naval: {
      totalAssets: 84,
      tonnage: 20210,
    },
    trend: 'Stable',
    sentiment: 'HIGH',
    sourceConfidence: 'MEDIUM',
  },
  innovation: {
    title: 'Innovation/Technology Hub',
    aiTargets: {
      contributionBy2031: '$91 billion (AED 335 billion)',
      nonOilGdpfomAi: '20%',
    },
    majorInvestments: [
      { vehicle: 'MGX', target: '$100 billion in assets', launch: 'March 2024' },
      { vehicle: 'Global AI infrastructure fund', target: '$30B initial, $100B potential' },
      { vehicle: 'Stargate Project', target: '$500 billion' },
    ],
    microsoftG42: '$1.5 billion (April 2024)',
    dataCenters: [
      { name: 'Khazna (installed)', capacity: '429 MW' },
      { name: 'Khazna (projected 2029)', capacity: '850 MW' },
    ],
    energyCapacity: '22.5 GW vs 18.3 GW consumption (2025)',
    trend: 'Rising',
    sentiment: 'HIGH',
    sourceConfidence: 'HIGH',
  },
  tourism: {
    title: 'Tourism',
    gdpContribution: '11.7% of economy',
    jobs: '809,000+ (1 in 9 jobs)',
    internationalVisitorSpending: 'AED 175 billion+',
    dubaiReputation: '#1 globally (Brand Finance)',
    safetyScore: 94.8,
    growth: '+24% YoY from Asia',
    topDemandDrivers: {
      dubai: { first: 'Culture (25.5%)', second: 'Active tourism (15.2%)' },
      abuDhabi: { first: 'Culture (29.5%)', second: 'Active tourism (12.8%)' },
    },
    trend: 'Rising',
    sentiment: 'HIGH',
    sourceConfidence: 'HIGH',
  },
  environmental: {
    title: 'Environmental/Sustainability',
    cop28Hosting: {
      dates: 'November 30 – December 12, 2023',
      president: 'Sultan Al Jaber (also ADNOC CEO)',
      attendees: '80,000+',
    },
    targets: [
      { target: 'Clean energy by 2050', value: '50%' },
      { target: 'Carbon emission reduction by 2050', value: '70%' },
      { target: 'Clean energy investment', value: '$40+ billion' },
    ],
    greenwashingAccusations: [
      'COP28 president also CEO of ADNOC',
      'ADNOC expansion: 3M bbl/day (2016) → 5M bbl/day (2030)',
      'Leaked documents: plans to strike hydrocarbon deals during conference',
    ],
    trend: 'Deteriorating',
    sentiment: 'LOW',
    sourceConfidence: 'MEDIUM-HIGH',
  },
  softPower: {
    title: 'Soft Power',
    globalRank: 10,
    year: '2025-2026',
    rankings: [
      { category: 'Generosity', rank: '2nd globally' },
      { category: 'Future Economic Growth', rank: '3rd globally' },
      { category: 'Regional Position', rank: 'Highest among MENA countries' },
    ],
    cityBrand: {
      dubaiOverallRank: 5,
      reputation: '#1 globally',
      businessInvestment: '#1 globally',
      futureGrowth: '#1 globally',
    },
    diplomaticHub: 'Trusted for discreet, high-level negotiations',
    trend: 'Rising',
    sentiment: 'HIGH',
    sourceConfidence: 'HIGH',
  },
}

// ============================================================================
// PERCEPTION SCORECARD
// ============================================================================

export const perceptionScorecard = [
  // Positive
  { dimension: 'Safety', perception: 'VERY HIGH', score: '94.8-86/100', sourceConfidence: 'HIGH', trend: 'Stable', category: 'positive' },
  { dimension: 'Economic Strength', perception: 'VERY HIGH', score: 'Top 10 globally', sourceConfidence: 'HIGH', trend: 'Rising', category: 'positive' },
  { dimension: 'Business/Investment', perception: 'VERY HIGH', score: '#1 globally (Dubai)', sourceConfidence: 'HIGH', trend: 'Rising', category: 'positive' },
  { dimension: 'Soft Power', perception: 'HIGH', score: '#10 globally', sourceConfidence: 'HIGH', trend: 'Rising', category: 'positive' },
  { dimension: 'Happiness', perception: 'HIGH', score: '#21 (highest Arab)', sourceConfidence: 'HIGH', trend: 'Stable', category: 'positive' },
  { dimension: 'Anti-Corruption', perception: 'HIGH', score: '#21 CPI; #19 WJP', sourceConfidence: 'HIGH', trend: 'Improving', category: 'positive' },
  { dimension: 'Tourism', perception: 'HIGH', score: '11.7% GDP; #1 city brand', sourceConfidence: 'HIGH', trend: 'Rising', category: 'positive' },
  { dimension: 'Technology/AI', perception: 'HIGH', score: '$91B target; MGX $100B', sourceConfidence: 'HIGH', trend: 'Rising', category: 'positive' },
  { dimension: 'Military Capability', perception: 'HIGH', score: '#54 GFP; "Little Sparta"', sourceConfidence: 'MEDIUM', trend: 'Stable', category: 'positive' },
  { dimension: 'Diplomatic Hub', perception: 'HIGH', score: 'Hosted peace talks', sourceConfidence: 'MEDIUM-HIGH', trend: 'Rising', category: 'positive' },
  // Negative
  { dimension: 'Human Rights', perception: 'VERY LOW', score: 'FH 18/100 "Not Free"', sourceConfidence: 'HIGH', trend: 'Stable/Deteriorating', category: 'negative' },
  { dimension: 'Press Freedom', perception: 'VERY LOW', score: '160th/180; 28/100 internet', sourceConfidence: 'HIGH', trend: 'Stable', category: 'negative' },
  { dimension: 'Democracy', perception: 'VERY LOW', score: 'Absolute monarchy; BTI Pol 4.0', sourceConfidence: 'HIGH', trend: 'None', category: 'negative' },
  { dimension: 'LGBTQ Rights', perception: 'VERY LOW', score: 'Death penalty; no protections', sourceConfidence: 'HIGH', trend: 'Stable', category: 'negative' },
  { dimension: 'Sportswashing', perception: 'LOW', score: 'Documented via Man City, NBA', sourceConfidence: 'MEDIUM-HIGH', trend: 'Rising scrutiny', category: 'negative' },
  { dimension: 'Censorship', perception: 'LOW', score: '883 sites blocked; VoIP banned', sourceConfidence: 'HIGH', trend: 'Stable', category: 'negative' },
  { dimension: 'Labor Rights', perception: 'LOW', score: 'Kafala; 88% migrants; no min wage', sourceConfidence: 'HIGH', trend: 'Stable', category: 'negative' },
  { dimension: 'Environmental', perception: 'LOW', score: 'COP28 greenwashing; oil expansion', sourceConfidence: 'MEDIUM-HIGH', trend: 'Deteriorating', category: 'negative' },
  // Mixed
  { dimension: 'US Relations', perception: 'MIXED', score: '82% UAE positive; 14% US positive', sourceConfidence: 'HIGH', trend: 'Stable', category: 'mixed' },
  { dimension: 'China Relations', perception: 'MIXED', score: '63% positive; $100B trade', sourceConfidence: 'HIGH', trend: 'Stable', category: 'mixed' },
  { dimension: 'Russia Relations', perception: 'MIXED', score: '$11.5B trade; BRICS; sanctions', sourceConfidence: 'MEDIUM', trend: 'Rising', category: 'mixed' },
  { dimension: 'Arab World', perception: 'MIXED', score: 'Globally trusted; regionally strained', sourceConfidence: 'MEDIUM', trend: 'Deteriorating', category: 'mixed' },
  { dimension: 'Europe', perception: 'MIXED', score: 'Strategic partner; far-right shadow', sourceConfidence: 'MEDIUM', trend: 'Stable', category: 'mixed' },
  { dimension: 'Africa', perception: 'MIXED', score: '$100B investment; RSF allegations', sourceConfidence: 'MEDIUM', trend: 'Stable', category: 'mixed' },
  { dimension: "Women's Rights", perception: 'MIXED', score: 'Reforms made; gaps remain', sourceConfidence: 'MEDIUM', trend: 'Slow progress', category: 'mixed' },
]

// ============================================================================
// KEY SYNTHESIZED FINDINGS
// ============================================================================

export const keyFindings = [
  {
    id: 1,
    finding: 'Global Image & Soft Power',
    summary: 'UAE ranks 10th globally in Global Soft Power Index. Dubai ranks #1 globally for reputation and business/investment.',
    uaeRelevance: 'DIRECT — This IS the UAE\'s international image',
  },
  {
    id: 2,
    finding: 'US Relations — Asymmetric Perception',
    summary: '82% of UAE citizens view US positively vs. only 14-19% of Americans viewing UAE positively.',
    uaeRelevance: 'CRITICAL — US relationship is central to UAE\'s global positioning',
  },
  {
    id: 3,
    finding: 'Russia Relations — Strategic Partnership Deepening',
    summary: 'Trade nearly tripled to $11.5B. Joined BRICS January 2024. Mediated Russia-Ukraine prisoner exchange.',
    uaeRelevance: 'HIGH — Russia is key diversification partner from US dependency',
  },
  {
    id: 4,
    finding: 'China Relations — Strategic Neutrality',
    summary: '$100B/year trade. 63% of UAE public view China positively. Microsoft $1.5B in G42 signals US alignment.',
    uaeRelevance: 'HIGH — China is top trading partner; UAE maintaining strategic neutrality',
  },
  {
    id: 5,
    finding: 'Arab World — Regional Strain',
    summary: 'Globally trusted but regionally under strain. Saudi-UAE rift documented. UAE backed RSF in Sudan.',
    uaeRelevance: 'HIGH — Regional positioning is core to UAE foreign policy',
  },
  {
    id: 6,
    finding: 'Europe — Strategic Partner with Complications',
    summary: 'EU-UAE SPA negotiations. Shadow: documented far-right coordination, 330K+ UAE-linked accounts.',
    uaeRelevance: 'HIGH — Europe is key diplomatic and economic partner',
  },
  {
    id: 7,
    finding: 'Africa — $100+ Billion Investment Push',
    summary: '$97-110B investment commitment. 19 embassies. TNI describes as "sub-imperial power in Africa".',
    uaeRelevance: 'HIGH — Africa is key diversification and resource strategy',
  },
  {
    id: 8,
    finding: 'Latin America — Growing BRICS Overlap',
    summary: '$9B total trade. DP World $500M in Brazil. EDGE Group defense cooperation.',
    uaeRelevance: 'MEDIUM — Growing but still secondary',
  },
  {
    id: 9,
    finding: 'Safety Perception — World Leader',
    summary: 'Safest country globally (Numbeo 2026: 86.0). Tourism safety score 94.8/100.',
    uaeRelevance: 'DIRECT — Safety is a core brand pillar',
  },
  {
    id: 10,
    finding: 'Human Rights — Severe Restrictions',
    summary: 'Freedom House 18/100 "Not Free". Mass trials documented. Press Freedom 160th of 180.',
    uaeRelevance: 'DIRECT — Most significant liability in UAE\'s international perception',
  },
]

// ============================================================================
// WASHINGTON INSTITUTE SURVEY DATA
// ============================================================================

export const washingtonInstituteSurvey = {
  uaeViewsOfUs: {
    friend: 17,
    securityPartner: 30,
    economicPartner: 35,
    totalPositive: 82,
  },
  topUsPolicyPriorities: [
    { priority: 'Help resolve Palestinian-Israeli conflict', percentage: 31 },
    { priority: 'Help counter threats from Iran', percentage: 26 },
    { priority: 'Promote democracy and human rights', percentage: 21 },
    { priority: 'Provide economic aid and investment', percentage: 19 },
  ],
  chinaPerception: {
    economicPartner: 62,
    friend: 18,
    securityPartner: 10,
  },
  russiaPerception: {
    economicPartner: 42,
    securityPartner: 32,
    friend: 21,
    supportRussianVictory: 77,
  },
  iranPerception: {
    enemy: 55,
    competitor: 30,
    friendPartnerOverall: 15,
    friendPartnerShiaEmiratis: 34,
  },
  israelPalestine: [
    { statement: 'Firing missiles from Gaza would have negative effects', percentage: 76 },
    { statement: 'Positive effects from Israeli protests against Netanyahu', percentage: 65 },
    { statement: 'Accept business deals with Israeli companies', percentage: 45 },
    { statement: 'Positive effects from Israel-Lebanon maritime boundary agreement', percentage: 41 },
    { statement: 'Cooperate with Israel against Iran', percentage: 21 },
    { statement: 'Reject Israeli humanitarian aid after disasters', percentage: 74 },
    { statement: 'View Abraham Accords positively', percentage: 27 },
  ],
  gulfContext: [
    { statement: 'Saudi-Iran diplomatic restoration would be positive', percentage: 35 },
    { statement: 'Restoring relations with Syria would be positive', percentage: 46 },
    { statement: 'Arab countries should develop nuclear weapons', percentage: 39 },
  ],
}

// ============================================================================
// ECONOMIC DATA
// ============================================================================

export const economicData = {
  gdp: {
    nominal2024: '$514.1 billion',
    perCapitaPpp: '>$83,000',
    growth2024: '4.0%',
    nonOilSectors: '70% of GDP',
  },
  corruption: {
    cpiScore: 69,
    rank: 21,
    totalCountries: 182,
    regionalRank: '#1 in MENA',
  },
  happiness: {
    rank: 21,
    score: 6.821,
    regionalPosition: 'Highest among Arab nations',
  },
  aiTargets: {
    contributionBy2031: '$91 billion',
    nonOilGdpfomAi: '20%',
  },
  defense: {
    budget: '$23.48 billion',
    globalRank: 54,
    nickname: '"Little Sparta"',
  },
}

// ============================================================================
// MAIN EXPORT
// ============================================================================

export const internationalPerceptionData = {
  executionMetadata,
  queryPatternsExecuted,
  regionalPerception,
  dimensionPerception,
  perceptionScorecard,
  keyFindings,
  washingtonInstituteSurvey,
  economicData,
}

export default internationalPerceptionData
