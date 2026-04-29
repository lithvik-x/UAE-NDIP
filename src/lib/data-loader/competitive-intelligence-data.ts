// @ts-nocheck
'use client'

// ============================================================================
// MD 12-6 COMPETITIVE INTELLIGENCE DATA
// All data extracted from 12-6-competitive-intelligence-results.md
// ============================================================================

// Source Credibility Matrix (MD 12-6)
export const ciSourceCredibilityMatrix = [
  { tier: 'Tier 0', description: 'Official Government/International Bodies', sources: 'IMF, WIPO, World Bank, DIFC, Emaar', credibilityScore: '10/10' },
  { tier: 'Tier 1', description: 'Primary Research/Academic', sources: 'CSIS, MEF, ECFR, Middle East Eye', credibilityScore: '9/10' },
  { tier: 'Tier 2', description: 'Authoritative Industry Publications', sources: 'Brand Finance, GFCI, GEM, Skytrax', credibilityScore: '8/10' },
  { tier: 'Tier 3', description: 'Expert Analysis Sites', sources: 'simpleflying.com, countryeconomy.com, vision2030.ai', credibilityScore: '7/10' },
  { tier: 'Tier 4', description: 'General Web Sources', sources: 'LinkedIn, Reddit, blogs', credibilityScore: '5/10' },
];

// UAE Relevance Assessment Matrix (MD 12-6 - Competitor Focus)
export const ciUaeRelevanceMatrix = [
  { competitor: 'Saudi Arabia', uaeRelevance: 'Critical', criticalPriority: true, rationale: 'Direct regional rival, Vision 2030 competition, shared GCC framework' },
  { competitor: 'Singapore', uaeRelevance: 'Critical', criticalPriority: true, rationale: 'Financial hub competition, wealth management, business environment benchmark' },
  { competitor: 'Qatar', uaeRelevance: 'High', criticalPriority: true, rationale: 'Aviation rivalry, business class excellence, Gulf neighbor' },
  { competitor: 'Israel', uaeRelevance: 'High', criticalPriority: true, rationale: 'Tech innovation competitor, Abraham Accords partner' },
  { competitor: 'Turkey', uaeRelevance: 'High', criticalPriority: true, rationale: 'Regional influence competition, soft power rivalry' },
  { competitor: 'Egypt', uaeRelevance: 'Medium', criticalPriority: false, rationale: 'Population leverage, regional media influence, shared Arab identity' },
  { competitor: 'Bahrain', uaeRelevance: 'Medium', criticalPriority: false, rationale: 'Financial cooperation recipient, smaller competitor' },
  { competitor: 'Kuwait', uaeRelevance: 'Low-Medium', criticalPriority: false, rationale: 'Slower reform, less direct competition' },
  { competitor: 'Oman', uaeRelevance: 'Low-Medium', criticalPriority: false, rationale: 'Complementary rather than competitive' },
  { competitor: 'London', uaeRelevance: 'High', criticalPriority: true, rationale: 'Traditional finance hub, wealth management benchmark' },
  { competitor: 'New York', uaeRelevance: 'High', criticalPriority: true, rationale: 'Wealth attraction, real estate benchmark' },
  { competitor: 'Hong Kong', uaeRelevance: 'Medium', criticalPriority: false, rationale: 'Declining competitor, China tensions' },
  { competitor: 'Switzerland', uaeRelevance: 'High', criticalPriority: true, rationale: 'Wealth management benchmark, privacy/safety comparison' },
  { competitor: 'Monaco', uaeRelevance: 'Low', criticalPriority: false, rationale: 'Ultra-luxury niche, different scale' },
];

// Relevance Scoring Criteria
export const ciRelevanceScoringCriteria = [
  { score: '9-10', label: 'Critical', criteria: 'Direct strategic competition, shared market positioning, head-to-head battle' },
  { score: '7-8', label: 'High', criteria: 'Significant competitive pressure, key benchmarks, aspirational competitors' },
  { score: '4-6', label: 'Medium', criteria: 'Moderate competition, specific sector overlap, secondary monitoring' },
  { score: '1-3', label: 'Low', criteria: 'Minimal direct competition, niche comparisons, opportunistic monitoring' },
];

// Query Execution Log (MD 12-6 - 20 Atomic Queries)
export const queryExecutionLog = [
  { queryNumber: 1, query: 'UAE vs Saudi Arabia economy comparison 2025 2026', sources: 'countryeconomy.com, georank.org, vision2030.ai', webFetchStatus: 'Partial (403/Access issues)' },
  { queryNumber: 2, query: 'UAE vs Singapore finance hub comparison 2025 2026', sources: 'themiddleeastinsider.com, rumavi.com, radiantbiz.com', webFetchStatus: 'Partial (403 blocked)' },
  { queryNumber: 3, query: 'UAE vs Qatar airlines aviation comparison', sources: 'simpleflying.com, worldairlineawards.com, alternativeairlines.com', webFetchStatus: 'Success (Skytrax)' },
  { queryNumber: 4, query: 'Dubai vs Singapore business incorporation comparison', sources: 'themiddleeastinsider.com, businessinsider.com, statrys.com', webFetchStatus: 'Blocked' },
  { queryNumber: 5, query: 'UAE vs Bahrain finance banking comparison', sources: 'gini Finance, linkedin.com, countryeconomy.com', webFetchStatus: 'Partial' },
  { queryNumber: 6, query: 'UAE vs Kuwait economy comparison 2025 2026', sources: 'countryeconomy.com, gaiarealty.ae, georank.org, IMF', webFetchStatus: 'Partial' },
  { queryNumber: 7, query: 'UAE vs Oman tourism culture comparison', sources: 'connsect.com, nomadcapitalist.com, Reddit', webFetchStatus: 'Redirect/Blocked' },
  { queryNumber: 8, query: 'UAE vs Israel tech innovation comparison', sources: 'startupnationcentral.org, WIPO Global Innovation Index', webFetchStatus: 'WIPO blocked' },
  { queryNumber: 9, query: 'UAE vs Turkey economy military soft power comparison', sources: 'ecfr.eu PDF, globalmilitary.net, armedforces.eu, PMC/NIH', webFetchStatus: 'Partial' },
  { queryNumber: 10, query: 'UAE vs Egypt population military regional role comparison', sources: 'armedforces.eu, globalfirepower.com, csis.org, worlddata.info', webFetchStatus: 'Partial' },
  { queryNumber: 11, query: 'Dubai vs London finance tourism education comparison', sources: 'aeontrisl.com, iakgroup.co, metroversus.com', webFetchStatus: 'Partial' },
  { queryNumber: 12, query: 'Dubai vs New York finance tourism comparison', sources: 'engelvoelkers.com, emaar.com, grandvisionuae.com', webFetchStatus: 'Partial (redirect/blocks)' },
  { queryNumber: 13, query: 'Dubai vs Hong Kong finance trade hub comparison 2025 2026', sources: 'rumavi.com, emaar.com, hongkong.acclime.com, aseanbriefing.com', webFetchStatus: 'Partial' },
  { queryNumber: 14, query: 'UAE vs Switzerland wealth management safety comparison', sources: 'totalityestates.com, citizenx.com, citywire.com', webFetchStatus: 'Partial' },
  { queryNumber: 15, query: 'UAE vs Monaco luxury lifestyle comparison', sources: 'smartzone.ae, gcqrops.com, LinkedIn', webFetchStatus: 'Partial' },
  { queryNumber: 16, query: 'Saudi Arabia Vision 2030 vs UAE economic diversification', sources: 'vision2030.ai, manaramagazine.org, themiddleeastinsider.com', webFetchStatus: 'Partial' },
  { queryNumber: 17, query: 'UAE winning narrative vs Saudi Arabia regional influence', sources: 'meforum.org, newyorker.com, middleeasteye.net', webFetchStatus: 'MEF/Eye success, others blocked' },
  { queryNumber: 18, query: 'Emirates airline vs Qatar Airways ranking comparison', sources: 'simpleflying.com, worldairlineawards.com, themiddleeastinsider.com', webFetchStatus: 'Success' },
  { queryNumber: 19, query: 'Dubai DIFC vs Singapore financial centre comparison', sources: 'difc.com, giftcityrealty.com, longfinance.net GFCI reports', webFetchStatus: 'GFCI success' },
  { queryNumber: 20, query: 'UAE best business environment ranking global 2025 2026', sources: 'gulfnews.com, mof.gov.ae, royaloasis.co.ae', webFetchStatus: 'Blocked' },
];

// WebFetch Success Metrics (MD 12-6)
export const webFetchEnrichmentMetrics = {
  tier0: { attempted: 7, successful: 1, partial: 1, failedBlocked: 5 },
  tier1: { attempted: 8, successful: 3, partial: 1, failedBlocked: 4 },
  tier2: { attempted: 6, successful: 2, partial: 0, failedBlocked: 4 },
  tier3: { attempted: 15, successful: 4, partial: 5, failedBlocked: 6 },
  tier4: { attempted: 25, successful: 2, partial: 8, failedBlocked: 15 },
  total: { attempted: 61, successful: 12, partial: 15, failedBlocked: 34 },
  successRate: '20% full, 25% partial',
};

// Successfully Extracted WebFetch Data Points
export const webFetchSuccessData = [
  { url: 'georank.org', status: 'SUCCESS', dataExtracted: 'Full demographics: population, GDP/capita, density, land area, life expectancy, fertility, median age' },
  { url: 'vision2030.ai', status: 'SUCCESS', dataExtracted: 'Vision 2030 indicators: non-oil GDP 76%, PIF $941.3B, unemployment 3.5%, FDI $21.3B, female participation 33%' },
  { url: 'worldairlineawards.com', status: 'SUCCESS', dataExtracted: 'Full Skytrax 2025 Top 10: Qatar #1, Emirates #4, all award categories' },
  { url: 'meforum.org', status: 'SUCCESS', dataExtracted: 'UAE-Saudi rivalry analysis, Yemen proxy conflict, post-liberal Middle East framework' },
  { url: 'middleeasteye.net', status: 'SUCCESS', dataExtracted: 'UAE Israel military cooperation, Iran war involvement, Yemen strategy differences' },
  { url: 'startupnationcentral.org', status: 'SUCCESS', dataExtracted: 'Israeli tech: 7,200+ startups, 100+ investors, 500% grant growth, 430+ MNCs in R&D' },
  { url: 'gcqrops.com', status: 'SUCCESS', dataExtracted: 'Monaco: 60,000-member community, €5M HNWI threshold, visa services' },
  { url: 'longfinance.net', status: 'Partial', dataExtracted: 'GFCI 39 reference, navigation to publications' },
  { url: 'simpleflying.com', status: 'Partial', dataExtracted: 'Article headlines only, no comparisons' },
];

// UAE vs Saudi Arabia - Fiscal Position (MD 12-6)
export const uaeSaudiFiscal = {
  budgetBalance: { saudi: '+$30.9B surplus (-2.46% GDP)', uae: '-$35.4B deficit (6.41% GDP)' },
  governmentDebt: { saudi: '$324B (26.2% GDP)', uae: '$193B (34.9% GDP)' },
  currentAccount: { saudi: '-$16.3B deficit', uae: '+$80B surplus' },
  creditRating: { saudi: 'A+ (S&P)', uae: 'AA (S&P)' },
};

// UAE vs Saudi Arabia - Business Environment (MD 12-6)
export const uaeSaudiBusiness = {
  corporateTax: { saudi: '20%', uae: '9%' },
  vat: { saudi: '15%', uae: '5%' },
  personalIncomeTax: { saudi: '0%', uae: '0%' },
  freeZones: { saudi: 'Developing', uae: '40+ established' },
  doingBusinessRanking: { saudi: '63rd', uae: '16th' },
  globalCompetitiveness: { saudi: '36th', uae: '25th' },
};

// UAE vs Saudi Arabia - Rankings Comparison (MD 12-6)
export const uaeSaudiRankings = {
  corruptionPerceptions: { saudi: 52, uae: 68 },
  innovationRanking: { saudi: '47th', uae: '32nd' },
  humanDevelopmentIndex: { saudi: 0.875, uae: 0.937 },
  fragileStatesIndex: { saudi: 63.2, uae: 34.7 },
  globalPeaceRanking: { saudi: '102nd', uae: '53rd' },
  humanCapitalRanking: { saudi: '82nd', uae: '45th' },
};

// UAE vs Saudi Arabia - Trade & Sovereign Wealth (MD 12-6)
export const uaeSaudiTradeSovereign = {
  exports: { saudi: '$320B (2023)', uae: '$485.7B (2023)' },
  exportsAsPercentGdp: { saudi: '26.3%', uae: '93.0%' },
  sovereignWealth: { saudiPif: '$941.3B (target $2T by 2030)', uaeCombined: '~$1.8T (ADIA + Mubadala + ADQ + ICD)' },
};

// UAE vs Saudi Arabia - Demographics Extended (MD 12-6)
export const uaeSaudiDemographicsExtended = {
  population: { saudi: '35.3M (36.7M alt)', uae: '11.3M (11.7M alt)' },
  expatriateShare: { saudi: '~38%', uae: '~88%' },
  citizensUnder35: { saudi: '>60%', uae: 'N/A' },
};

// UAE vs Saudi Arabia - Regional Rivalry Analysis (MD 12-6)
export const uaeSaudiRivalryAnalysis = {
  coreStrategicDifferences: 'Saudi Arabia prioritizes hierarchy, territorial integrity, de-escalation. UAE seeks leverage through ports, proxies, and freedom of maneuver in fragile states.',
  keyBattlegrounds: [
    { area: 'Yemen', description: 'UAE lobbying to designate Islah as terror group (Saudi backs Islah)' },
    { area: 'Horn of Africa', description: 'Competing influence networks (Turkey activity noted)' },
    { area: 'Red Sea', description: 'Iran blockade operations, Strait of Hormuz' },
    { area: 'Abraham Accords', description: 'Saudi unwilling to follow UAE lead on normalization' },
  ],
  uaePosition: 'Stabilizing Actor with Strong Ties to Israel, the United States, and Other Key Regional Players',
  keyQuote: 'When Saudi Forces Attacked Yemen\'s Southern Forces, They Left a Vacuum Into Which Al Arabia in the Arabian Peninsula Resurged',
};

// UAE vs Bahrain - Economic Comparison (MD 12-6)
export const uaeBahrainComparison = {
  gdp2024: { uae: '$552B', bahrain: '~$43B', variance: 'UAE 12.8x larger' },
  gdpPerCapita2023: { uae: '$75,600', bahrain: '$57,600', variance: 'UAE 31% higher' },
  corporateTax: { uae: '9% (threshold)', bahrain: '0% (all non-oil)' },
  debtPercentGdp: { uae: '34.9%', bahrain: '133.4%', variance: 'Bahrain 3.8x higher' },
  financialCooperation: 'UAE provided Bahrain $5.44B currency swap (2024)',
};

// UAE vs Kuwait - Economic Comparison (MD 12-6)
export const uaeKuwaitComparison = {
  gdp2024: { uae: '$552B', kuwait: '$160B', variance: 'UAE 3.45x larger' },
  gdpPerCapita2024: { uae: '~$49,000', kuwait: '~$31,500', variance: 'UAE 56% higher' },
  realGdpGrowth2024: { uae: '~4%', kuwait: '~2.5%', variance: 'UAE 60% higher' },
  imfGrowthForecast2026: { uae: '+3.1%', kuwait: '-0.6%', variance: 'UAE significantly better' },
  unemployment: { uae: '1.88%', kuwait: '3.7%' },
  governmentSpending: { uae: '$118B (21.4% GDP)', kuwait: '$80.8B (50.4% GDP)' },
};

// UAE vs Oman - Comparison (MD 12-6)
export const uaeOmanComparison = {
  population: { uae: '~10M', oman: '~4.7M' },
  positioning: {
    uae: 'Fast-moving, diverse lifestyle, world-class luxury facilities, modern infrastructure, extravagant offerings',
    oman: 'Relaxed, traditional, authentic Arabian experience, natural beauty, rugged coastline, cultural authenticity',
  },
};

// UAE vs Israel - Tech Comparison (MD 12-6)
export const uaeIsraelTech = {
  globalInnovationIndex: { uae: '32nd (2024)', israel: 'Higher (deep-tech)' },
  uaeStrengths: 'AI strategy, data infrastructure, tech adoption',
  israelStrengths: 'Blockchain, cybersecurity, AI, quantum',
  postAbrahamAccords: 'Israeli companies expanding to UAE for lower taxes, fast setup, global talent access',
  comparativeAdvantage: {
    uae: 'Scale, adoption speed, regulatory clarity, tax efficiency',
    israel: 'Deep-tech expertise, cybersecurity leadership, innovation ecosystem maturity',
  },
};

// UAE vs Turkey - Comparison (MD 12-6)
export const uaeTurkeyComparison = {
  defenseBudget: { uae: '$23B', turkey: '$25B' },
  totalAircraft: { uae: 548, turkey: 548 },
  softPowerRanking: { uae: '8th-10th globally', turkey: 'Lower' },
  keyConflictZones: ['Horn of Africa', 'Eastern Mediterranean', 'Libya', 'Sudan'],
  softPowerContrast: 'Turkey\'s soft power and development aid contrasts with the UAE\'s economic and security-focused projection',
};

// UAE vs Egypt - Comparison (MD 12-6)
export const uaeEgyptComparison = {
  militaryBudget: { uae: '$24.4B', egypt: '$6B', variance: 'UAE 4x larger' },
  activePersonnel: { uae: '150,000', egypt: '438,500', variance: 'Egypt 2.9x larger' },
  tanks: { uae: 354, egypt: 3610, variance: 'Egypt 10x larger' },
  totalAircraft: { uae: 518, egypt: 854, variance: 'Egypt 65% larger' },
  submarines: { uae: 0, egypt: 8 },
  nuclearWeapons: { uae: 'None', egypt: 'None' },
  positioning: {
    egypt: 'Massive population advantage (~100M+), leading Arab cultural soft power through media',
    uae: 'Smaller but more economically influential per capita, technologically advanced military',
  },
};

// Dubai vs London - Comparison (MD 12-6)
export const dubaiLondonComparison = {
  globalFinancialCentresIndex: { dubai: '7th', london: 'Top 3' },
  incomeTax: { dubai: '0%', london: 'Higher (up to 45%)' },
  businessSetup: { dubai: 'Faster, simpler', london: 'Longer, complex' },
  rentalYields: { dubai: '6-8%', london: 'Lower' },
  growthRate: { dubai: 'Higher', london: 'Slower' },
  costOfLiving: { dubai: '26% cheaper for dining out', london: 'Higher overall' },
  strategicPositioning: {
    dubai: 'Tax efficiency, velocity, growth markets',
    london: 'Depth, legacy institutions, legal certainty, global connectivity',
  },
};

// Dubai vs New York - Comparison (MD 12-6)
export const dubaiNyComparison = {
  grossRentalYields: { dubai: '5-8%', newYork: '3-5%' },
  propertyPrices: { dubai: '$600-2,000/sq ft', newYork: 'Higher entry' },
  transactionCosts: { dubai: '7%', newYork: '25-30%' },
  priceGrowthYoY: { dubai: '25%', newYork: 'Moderate' },
  personalIncomeTax: { dubai: '0%', newYork: 'Federal + State + City' },
  propertyTax: { dubai: '0%', newYork: 'Varies by borough' },
  capitalGains: { dubai: '0%', newYork: 'Federal + State' },
  wealthAttraction: 'Dubai officially surpassed New York as world\'s leading destination for wealthy residents (Nov 2025)',
};

// Dubai vs Hong Kong - Comparison (MD 12-6)
export const dubaiHkComparison = {
  gfciRanking: { dubai: '7th (rising)', hongKong: 'Facing challenges (China tensions)' },
  rentalYields: { dubai: '5-8%', hongKong: '2-4%' },
  priceTrend2021to2024: { dubai: 'Strong growth', hongKong: '-15% from peak' },
  familyOfficeGrowth: { dubai: 'Growing rapidly', hongKong: 'Declining' },
  primaryMarket: { dubai: 'Middle East/Europe/Africa', hongKong: 'China/Asia' },
};

// Dubai vs Switzerland - Comparison (MD 12-6)
export const dubaiSwitzerlandComparison = {
  tradition: { dubai: 'Emerging', switzerland: 'Centuries of heritage' },
  privacy: { dubai: 'Developing', switzerland: 'Strong protection' },
  speedScale: { dubai: 'Faster', switzerland: 'Slower' },
  taxEfficiency: { dubai: 'Better', switzerland: 'Moderate' },
  wealthPreservation: { dubai: 'Growing', switzerland: 'Established' },
  safetyIndex2025: { dubai: '85.2 (#1 globally)', switzerland: 'Very high' },
  crimeIndex: { dubai: '15.5', switzerland: 26.5 },
  wealthInflow2025: 'UAE attracted 9,800 millionaires and ~$63B in wealth inflows',
};

// Dubai vs Monaco - Comparison (MD 12-6)
export const dubaiMonacoComparison = {
  personalIncomeTax: { dubai: '0%', monaco: '0%' },
  corporateTax: { dubai: '9%', monaco: 'Competitive' },
  accessibility: { dubai: 'Broader market', monaco: 'Ultra-exclusive' },
  scale: { dubai: 'Larger, diverse', monaco: 'Concentrated' },
  europeanPrestige: { dubai: 'Growing', monaco: 'Established' },
  monacoCommunity: '60,000-member Facebook community',
  hnwiThreshold: 'Up to €5,000,000 investable wealth',
  strategicPositioning: {
    dubai: 'Glamour + business + no taxes + Golden Visa (10yr)',
    monaco: 'Exclusivity + luxury + no income tax + European foothold',
  },
};

// UAE Rankings Summary (MD 12-6 - Extended)
export const uaeRankingsExtended = {
  entrepreneurship: { rank: '#1 globally', source: 'GEM', notes: '5th consecutive year', status: 'Current' },
  globalCompetitiveness: { rank: '5th worldwide', source: 'IMD', notes: 'Business environment', status: '2025' },
  softPower: { rank: '10th globally', source: 'Brand Finance', notes: '4th consecutive year', status: '2025' },
  strongStableEconomy: { rank: '#1 globally', source: 'Per soft power index', notes: 'Score based', status: '2025' },
  safetyIndex: { rank: '#1 globally', score: 85.2, source: 'Various', notes: 'Safest country', status: '2025' },
  globalInnovationIndex: { rank: '32nd', source: 'WIPO', notes: 'Needs 2025 update', status: '2024' },
  gfci: { rank: '7th (highest ever)', source: 'GFCI 39 (Mar 2026)', notes: 'Dubai DIFC', status: 'Mar 2026' },
  humanDevelopment: { rank: 'Very high', score: 0.937, source: 'UNDP', notes: 'Very high development', status: 'Current' },
  corruptionPerceptions: { rank: '68 (2023)', source: 'Transparency International', notes: 'Mid-tier, needs update', status: '2023' },
};

// Competitive Advantages Summary
export const competitiveAdvantages = [
  { advantage: 'Economic Diversification', detail: '73%+ non-oil GDP, established diversification' },
  { advantage: 'Business Environment', detail: 'Fastest incorporation, 0% personal income tax' },
  { advantage: 'Safety', detail: 'World\'s safest country (2025 Safety Index)' },
  { advantage: 'Strategic Location', detail: 'Gateway to Middle East, Europe, Africa' },
  { advantage: 'Wealth Attraction', detail: 'Largest HNWI inflow globally (2025)' },
];

// Vision Programs Comparison (MD 12-6)
export const visionProgramsComparison = {
  saudiVision2030: {
    launchYear: 2016,
    timeline: '2030',
    nonOilRevenueTarget: 'Significant increase',
    approach: 'Centralized, dramatic transformation',
    socialLiberalization: 'Major reforms',
    nonOilGdpShare: '76%',
    unemploymentTarget: '3.5% (achieved)',
    pifAssets: '$941.3B',
  },
  uaeVision2021_2031: {
    launchYear: 'Earlier, ongoing',
    timeline: '2021/2071 (Centennial)',
    nonOilRevenueTarget: 'Already achieved',
    approach: 'Decentralized, steady',
    socialLiberalization: 'More progressive historically',
    nonOilGdpShare: '73%',
    unemploymentTarget: 'Low (achieved)',
    pifAssets: '~$1.8T combined',
  },
  keyDifference: 'Both nations achieved significant diversification. Saudi\'s non-oil GDP (76%) slightly ahead of UAE (73%), but UAE started diversification earlier and has more established free zones.',
};

// Entity Registry - Sovereign Nations (MD 12-6)
export const sovereignNations = [
  { entity: 'United Arab Emirates', isoCode: 'AE', region: 'Middle East', classification: 'Primary Subject', uaeRelevance: '-' },
  { entity: 'Saudi Arabia', isoCode: 'SA', region: 'Middle East', classification: 'Primary Competitor', uaeRelevance: 'Critical' },
  { entity: 'Singapore', isoCode: 'SG', region: 'Southeast Asia', classification: 'Primary Competitor', uaeRelevance: 'Critical' },
  { entity: 'Qatar', isoCode: 'QA', region: 'Middle East', classification: 'Primary Competitor', uaeRelevance: 'High' },
  { entity: 'Bahrain', isoCode: 'BH', region: 'Middle East', classification: 'Secondary Competitor', uaeRelevance: 'Medium' },
  { entity: 'Kuwait', isoCode: 'KW', region: 'Middle East', classification: 'Secondary Competitor', uaeRelevance: 'Low-Medium' },
  { entity: 'Oman', isoCode: 'OM', region: 'Middle East', classification: 'Secondary Competitor', uaeRelevance: 'Low-Medium' },
  { entity: 'Israel', isoCode: 'IL', region: 'Middle East', classification: 'Tech Competitor', uaeRelevance: 'High' },
  { entity: 'Turkey', isoCode: 'TR', region: 'Eurasia', classification: 'Regional Rival', uaeRelevance: 'High' },
  { entity: 'Egypt', isoCode: 'EG', region: 'Africa/Middle East', classification: 'Regional Actor', uaeRelevance: 'Medium' },
  { entity: 'United Kingdom', isoCode: 'GB', region: 'Europe', classification: 'Finance Benchmark', uaeRelevance: 'High' },
  { entity: 'United States', isoCode: 'US', region: 'North America', classification: 'Finance Benchmark', uaeRelevance: 'High' },
  { entity: 'Hong Kong', isoCode: 'HK', region: 'Asia', classification: 'Declining Competitor', uaeRelevance: 'Medium' },
  { entity: 'Switzerland', isoCode: 'CH', region: 'Europe', classification: 'Wealth Benchmark', uaeRelevance: 'High' },
  { entity: 'Monaco', isoCode: 'MC', region: 'Europe', classification: 'Luxury Benchmark', uaeRelevance: 'Low' },
];

// Entity Registry - Organizations (MD 12-6)
export const organizations = [
  { entity: 'Dubai DIFC', type: 'Financial Centre', relevance: 'UAE flagship', uaeConnection: 'Primary' },
  { entity: 'Singapore Exchange', type: 'Financial Centre', relevance: 'Benchmark', uaeConnection: 'Competitor' },
  { entity: 'Qatar Airways', type: 'Airline', relevance: 'Primary competitor', uaeConnection: 'Rival' },
  { entity: 'Emirates', type: 'Airline', relevance: 'UAE flagship', uaeConnection: 'Leader' },
  { entity: 'Etihad Airways', type: 'Airline', relevance: 'UAE national carrier', uaeConnection: 'Secondary' },
  { entity: 'Saudi PIF', type: 'Sovereign Wealth Fund', relevance: 'Scale competitor', uaeConnection: 'Rival' },
  { entity: 'ADIA', type: 'Sovereign Wealth Fund', relevance: 'UAE flagship', uaeConnection: 'Leader' },
  { entity: 'Mubadala', type: 'Sovereign Wealth Fund', relevance: 'UAE investment arm', uaeConnection: 'Leader' },
  { entity: 'ADQ', type: 'Sovereign Wealth Fund', relevance: 'UAE investment arm', uaeConnection: 'Leader' },
  { entity: 'ICD', type: 'Sovereign Wealth Fund', relevance: 'UAE investment arm', uaeConnection: 'Leader' },
  { entity: 'Skytrax', type: 'Aviation Rating', relevance: 'Airline rankings', uaeConnection: 'Reference' },
  { entity: 'WIPO', type: 'International Organization', relevance: 'Innovation Index', uaeConnection: 'Reference' },
  { entity: 'IMF', type: 'International Organization', relevance: 'Economic data', uaeConnection: 'Reference' },
  { entity: 'World Bank', type: 'International Organization', relevance: 'Economic data', uaeConnection: 'Reference' },
  { entity: 'Brand Finance', type: 'Rating Agency', relevance: 'Soft power', uaeConnection: 'Reference' },
  { entity: 'GEM', type: 'Research Network', relevance: 'Entrepreneurship', uaeConnection: 'Reference' },
  { entity: 'IMD', type: 'Business School', relevance: 'Competitiveness', uaeConnection: 'Reference' },
];

// Key Indices from MD 12-6
export const keyIndices = [
  { index: 'GFCI', publisher: 'Z/Yen, CDI', uaeScoreRank: '7th (Mar 2026)', globalRank: 'Top 10', notes: 'Highest ever' },
  { index: 'Global Innovation Index', publisher: 'WIPO', uaeScoreRank: '32nd (2024)', globalRank: 'Top 40', notes: 'Needs 2025 update' },
  { index: 'Soft Power Index', publisher: 'Brand Finance', uaeScoreRank: '10th (2025)', globalRank: 'Top 15', notes: '4th consecutive year' },
  { index: 'Safety Index', publisher: 'Various', uaeScoreRank: '#1 globally (2025)', globalRank: '#1', notes: 'Score 85.2' },
  { index: 'IMD Competitiveness', publisher: 'IMD', uaeScoreRank: '5th (2025)', globalRank: 'Top 10', notes: 'Business environment' },
  { index: 'GEM Entrepreneurship', publisher: 'GEM', uaeScoreRank: '#1 (2025)', globalRank: '#1', notes: '5th consecutive year' },
  { index: 'Global Firepower', publisher: 'GFP', uaeScoreRank: 'Not disclosed', globalRank: 'Not in Top 20', notes: 'Military ranking' },
  { index: 'Corruption Perceptions', publisher: 'TI', uaeScoreRank: '68 (2023)', globalRank: 'Mid-tier', notes: 'Needs update' },
  { index: 'Human Development', publisher: 'UNDP', uaeScoreRank: '0.937', globalRank: 'Very high', notes: 'Very high development' },
];

// Executive Summary Data (MD 12-6)
export const executiveSummary = {
  researchDate: 'April 27, 2026',
  queryCount: '20 atomic queries executed',
  sourcesRetrieved: '15+ web pages with detailed data',
  enrichmentDate: 'April 28, 2026',
  webFetchAttempted: '40+',
  webFetchSuccessRate: '~35%',
  competitorPairs: 14,
  competitiveDimensions: '20+',
};

// Data Freshness Log (MD 12-6)
export const dataFreshnessLog = [
  { category: 'GFCI Ranking', latestUpdate: 'Mar 2026', source: 'longfinance.net', status: 'Fresh' },
  { category: 'Airline Rankings', latestUpdate: '2025', source: 'Skytrax', status: 'Current' },
  { category: 'GDP Data', latestUpdate: '2024', source: 'countryeconomy.com', status: 'Needs update' },
  { category: 'Safety Index', latestUpdate: '2025', source: 'citizenx.com', status: 'Unverified' },
  { category: 'Soft Power', latestUpdate: '2025', source: 'Brand Finance', status: 'Current' },
  { category: 'Innovation Index', latestUpdate: '2024', source: 'WIPO', status: 'Needs update' },
  { category: 'Military Data', latestUpdate: '2026', source: 'globalfirepower.com', status: 'Current' },
  { category: 'Vision 2030', latestUpdate: 'Apr 2026', source: 'vision2030.ai', status: 'Fresh' },
  { category: 'Demographics', latestUpdate: '2024', source: 'georank.org', status: 'Current' },
  { category: 'Israeli Tech', latestUpdate: '2025', source: 'startupnationcentral.org', status: 'Current' },
];

// Confidence Assessment (MD 12-6)
export const confidenceAssessment = {
  highConfidence: [
    { metric: 'Dubai GFCI 7th', confidence: '95%', sources: ['difc.com', 'longfinance.net'] },
    { metric: 'Qatar Airways #1 Skytrax', confidence: '95%', sources: ['worldairlineawards.com'] },
    { metric: 'UAE Safety #1', confidence: '85%', sources: ['citizenx.com (unverified)'] },
    { metric: 'UAE non-oil GDP 73%', confidence: '85%', sources: ['vision2030.ai'] },
    { metric: 'UAE entrepreneurship #1', confidence: '80%', sources: ['gulfnews.com (blocked)'] },
    { metric: 'Saudi PIF $941.3B', confidence: '90%', sources: ['vision2030.ai (WebFetch)'] },
    { metric: 'Saudi Non-oil GDP 76%', confidence: '90%', sources: ['vision2030.ai (WebFetch)'] },
    { metric: 'UAE vs Saudi demographics', confidence: '85%', sources: ['georank.org (WebFetch)'] },
    { metric: 'UAE-Saudi rivalry analysis', confidence: '85%', sources: ['meforum.org', 'middleeasteye.net (WebFetch)'] },
  ],
  mediumConfidence: [
    { metric: 'UAE GDP per capita $50,274', confidence: '75%', sources: ['georank.org (WebFetch)'] },
    { metric: 'HNWI inflow +9,800', confidence: '70%', sources: ['citizenx.com (wrong site)'] },
    { metric: 'Israeli tech 7,200+ startups', confidence: '80%', sources: ['startupnationcentral.org (WebFetch)'] },
    { metric: 'Skytrax Top 10 details', confidence: '85%', sources: ['worldairlineawards.com (WebFetch)'] },
  ],
  lowConfidence: [
    { metric: 'Property price growth 25%', confidence: '50%', sources: ['siraa.io (no data)'] },
    { metric: 'Transaction costs 7%', confidence: '50%', sources: ['grandvisionuae.com (blocked)'] },
    { metric: 'Dubai vs London setup costs', confidence: '40%', sources: ['aeontrisl.com (no data)'] },
  ],
};

// Source-by-Source Assessment (MD 12-6)
export const ciSourceBySourceAssessment = [
  { source: 'countryeconomy.com', tier: 3, reliability: 'High', dataAccuracy: '85%', lastVerified: 'Apr 2026', notes: 'Primary economic data, 403 blocked' },
  { source: 'georank.org', tier: 3, reliability: 'High', dataAccuracy: '80%', lastVerified: 'Apr 2026', notes: 'Rankings focused, 403 blocked alt' },
  { source: 'vision2030.ai', tier: 3, reliability: 'High', dataAccuracy: '85%', lastVerified: 'Apr 2026', notes: 'Saudi-focused but comprehensive' },
  { source: 'difc.com', tier: 0, reliability: 'Very High', dataAccuracy: '95%', lastVerified: 'Mar 2026', notes: 'Official GFCI data' },
  { source: 'longfinance.net', tier: 2, reliability: 'Very High', dataAccuracy: '95%', lastVerified: 'Mar 2026', notes: 'GFCI publisher' },
  { source: 'worldairlineawards.com', tier: 2, reliability: 'Very High', dataAccuracy: '95%', lastVerified: '2025', notes: 'Skytrax official' },
  { source: 'simpleflying.com', tier: 3, reliability: 'High', dataAccuracy: '80%', lastVerified: 'Apr 2026', notes: 'Aviation expertise' },
  { source: 'meforum.org', tier: 1, reliability: 'Very High', dataAccuracy: '90%', lastVerified: 'Spring 2026', notes: 'Academic analysis' },
  { source: 'middleeasteye.net', tier: 1, reliability: 'High', dataAccuracy: '85%', lastVerified: 'Apr 2026', notes: 'Investigative journalism' },
  { source: 'startupnationcentral.org', tier: 3, reliability: 'High', dataAccuracy: '80%', lastVerified: 'Apr 2026', notes: 'Israeli tech focus' },
  { source: 'gulfnews.com', tier: 3, reliability: 'High', dataAccuracy: '80%', lastVerified: 'Apr 2026', notes: 'UAE national media' },
  { source: 'mof.gov.ae', tier: 0, reliability: 'Very High', dataAccuracy: '98%', lastVerified: '2025', notes: 'UAE Ministry official' },
  { source: 'gcqrops.com', tier: 4, reliability: 'Medium', dataAccuracy: '60%', lastVerified: 'Apr 2026', notes: 'Monaco focus' },
  { source: 'citizenx.com', tier: 4, reliability: 'Medium', dataAccuracy: '60%', lastVerified: 'Apr 2026', notes: 'Social media aggregate, wrong site' },
  { source: 'totalityestates.com', tier: 4, reliability: 'Medium', dataAccuracy: '60%', lastVerified: 'Apr 2026', notes: 'Wealth management' },
  { source: 'citywire.com', tier: 3, reliability: 'High', dataAccuracy: '80%', lastVerified: 'Apr 2026', notes: 'Finance industry' },
  { source: 'grandvisionuae.com', tier: 4, reliability: 'Medium', dataAccuracy: '60%', lastVerified: 'Apr 2026', notes: 'Real estate, login wall' },
  { source: 'emaar.com', tier: 0, reliability: 'Very High', dataAccuracy: '90%', lastVerified: 'Apr 2026', notes: 'Official developer, no data' },
  { source: 'luxhabitat.ae', tier: 4, reliability: 'Medium', dataAccuracy: '65%', lastVerified: 'Apr 2026', notes: 'Luxury real estate, 403 blocked' },
  { source: 'businessinsider.com', tier: 3, reliability: 'High', dataAccuracy: '75%', lastVerified: 'Apr 2026', notes: 'Blocked' },
  { source: 'reddit.com', tier: 4, reliability: 'Low', dataAccuracy: '40%', lastVerified: 'Apr 2026', notes: 'Blocked' },
  { source: 'linkedin.com', tier: 4, reliability: 'Low', dataAccuracy: '50%', lastVerified: 'Apr 2026', notes: 'No data on homepage' },
  { source: 'bayut.com', tier: 4, reliability: 'Medium', dataAccuracy: '65%', lastVerified: 'Apr 2026', notes: 'Captcha blocked' },
  { source: 'brandfinance.com', tier: 2, reliability: 'Very High', dataAccuracy: '90%', lastVerified: 'Apr 2026', notes: 'No soft power data on homepage' },
  { source: 'wipo.int', tier: 0, reliability: 'Very High', dataAccuracy: '95%', lastVerified: '2024/2025', notes: 'No UAE data on homepage' },
  { source: 'csis.org', tier: 1, reliability: 'Very High', dataAccuracy: '90%', lastVerified: 'Apr 2026', notes: 'Homepage only' },
  { source: 'newyorker.com', tier: 1, reliability: 'Very High', dataAccuracy: '90%', lastVerified: 'Apr 2026', notes: 'Blocked' },
];
