// @ts-nocheck
/**
 * Environment & Infrastructure — Comprehensive Data
 *
 * Hardcoded TypeScript data extracted from MD file:
 * C:\Users\lithvik\Sync\Projects\dossier.li\uae.dossier.li\P1\data\2-5-environment-infrastructure-results.md
 *
 * Covers: Climate Policy, Net Zero 2050, Renewable Energy, COP28, Air Quality,
 * Water Resources, Desalination, Waste Management, Biodiversity, Mangroves,
 * Coral Reefs, Protected Areas, Climate Impacts, Per Capita Emissions,
 * Greenwashing, Masdar, Barakah Nuclear, Oil Spills, Land Reclamation,
 * Sustainability Strategies, Mega Infrastructure, Road Safety, Traffic Congestion
 */

import type {
  TopicAnalysis,
  HSBPCCategory,
  TierLevel,
  AlertLevel,
  SentimentBreakdown,
  CredibilityScore,
  SourceReference,
  KeyFinding,
  TrendData,
  PlutchikEmotion,
  UAERelevance,
} from '@/lib/data-loader/types'

// ============================================================================
// MASTER DATA OBJECT
// ============================================================================

export const environmentInfrastructureData: TopicAnalysis = {
  id: 'topic-2-5',
  sector: 'environment',
  title: 'Environment & Infrastructure',
  titleAr: 'البيئة والبنية التحتية',
  description: 'Climate action, net zero strategy, renewable energy, desalination, biodiversity, conservation, waste management, mega infrastructure, road safety, traffic congestion, sustainability strategies',
  keyFindings: [
    // Climate Policy
    { finding: 'UAE Climate Law: Federal Decree-Law No. 11 of 2024 enacted', metric: 'Signed Aug 2024', source: 'PWC Middle East / ORF Middle East', tier: 1 as TierLevel },
    { finding: 'Climate Action Tracker Rating: Critically Insufficient (4C+ pathway)', metric: 'Critically Insufficient', source: 'Climate Action Tracker (April 2024)', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    // Net Zero
    { finding: 'Net Zero 2050 Charter: Signed March 2023 — Target: 2050', metric: '2050', source: 'UAE Government Portal (u.ae)', tier: 1 as TierLevel },
    { finding: 'NDC3.0 Target: 206 MtCO2e by 2030 (18% below 2022 levels)', metric: '206 MtCO2e', source: 'Climate Action Tracker', tier: 1 as TierLevel },
    // Renewable Energy
    { finding: 'Total Renewable Capacity: 7.7+ GW (April 2026)', metric: '7.7+ GW', source: 'Utilities Middle East (April 2026)', tier: 1 as TierLevel },
    { finding: 'Masdar Global Clean Energy Portfolio: 65 GW (January 2026)', metric: '65 GW', source: 'Masdar/Reuter (January 2026)', tier: 1 as TierLevel },
    { finding: 'Mohammed bin Rashid Al Maktoum Solar Park: 3,460 MW operational', metric: '3,460 MW', source: 'The National News (March 2025)', tier: 1 as TierLevel },
    { finding: 'Al Dhafra Solar Plant (Abu Dhabi): 2 GW — inaugurated 2023', metric: '2 GW', source: 'Masdar / Abu Dhabi Media Office', tier: 1 as TierLevel },
    // Nuclear
    { finding: 'Barakah Nuclear Power Plant: 5,380 MWe (4 units) — Fully operational 2024', metric: '5,380 MWe', source: 'World Nuclear Association (March 2026)', tier: 1 as TierLevel },
    { finding: 'Nuclear Generation 2024: 40 TWh (+25% YoY) — 25% of UAE electricity', metric: '40 TWh', source: 'The Mena Business Review', tier: 1 as TierLevel },
    // Air Quality
    { finding: 'EPI Global Rank: 53rd overall (Score: 51.6) — Air Pollution Category: 115th', metric: '53rd / 115th', source: 'Yale Environmental Performance Index 2024', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'NO2 Exposure: LAST globally (176th) — PM2.5 Reduction 2024: -22%', metric: '-22% PM2.5', source: 'Yale EPI 2024 / IQAir (March 2025)', tier: 1 as TierLevel },
    // Water
    { finding: 'UAE Desalination Dependency: 42% — Gulf: 40% of world desalinated water', metric: '42%', source: 'CNN (March 2026)', tier: 1 as TierLevel },
    { finding: 'Gulf Desalination Investment Since 2006: $53.4 billion', metric: '$53.4B', source: 'Atlantic Council (March 2026)', tier: 1 as TierLevel },
    // Biodiversity
    { finding: 'Nature Reserves: 50 (from 23 in 2013) — +117% expansion, +177% protected area', metric: '50 reserves', source: 'UAE Human Journey Blog (November 2025)', tier: 1 as TierLevel },
    { finding: 'Mangrove Cover Increase: +150% over 37 years (1987–2024) — 201.4 km²', metric: '+150%', source: 'Abu Dhabi Mangroves Initiative / IUCN Congress 2025', tier: 1 as TierLevel },
    { finding: 'Coral Reef Restoration: 1M colonies restored (since 2021) — Target: 4M+ by 2030', metric: '1M / 4M+', source: 'Abu Dhabi Media Office (May 2025)', tier: 1 as TierLevel },
    // Climate Impacts
    { finding: 'April 2024 UAE Floods: 254.8mm rainfall (75-year record) — Insurance losses: $2.9–3.4B', metric: '$2.9–3.4B', source: 'Wikipedia / Guy Carpenter / Royal Meteorological Society', tier: 1 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'July 2024 Dubai Heat: 43C air / 62C feels-like — Al Dhafra: 49.9C', metric: '62C feels-like', source: 'Euronews / Washington Post (July 2024)', tier: 1 as TierLevel, alert: 'RED' as AlertLevel },
    // Emissions
    { finding: 'Per Capita CO2: 20.1 tonnes/person — 2nd highest globally (after Saudi: 20.4)', metric: '20.1 t/person', source: 'Facebook/Emanuel Motelin / Visual Capitalist (April 2026)', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Per Capita GHG (Shift Eco): ~32 metric tons/person/year — far above global average', metric: '~32 t/person', source: 'Shift Eco (October 2024)', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    // COP28
    { finding: 'COP28 Dubai: Historic "transition away from fossil fuels" language — $85B+ climate finance raised', metric: '$85B+', source: 'COP28 UAE Consensus Official Records', tier: 1 as TierLevel },
    { finding: 'COP28 Controversy: Sultan Al Jaber (ADNOC CEO) as President — Greenwashing allegations', metric: 'Controversial', source: 'Gulf IF / Amnesty International / LA Times', tier: 2 as TierLevel, alert: 'YELLOW' as AlertLevel },
    // Greenwashing
    { finding: 'ADNOC $17B contracts for Hail and Ghasha offshore gas fields — Scope 1&2 only for net zero', metric: '$17B', source: 'Climate Action Tracker / The Guardian', tier: 2 as TierLevel, alert: 'YELLOW' as AlertLevel },
    // Infrastructure
    { finding: 'Al Maktoum Airport Expansion: $35B approved (April 2024) — 5x Dubai International size', metric: '$35B', source: 'One Mile At A Time (2024) / Wikipedia', tier: 1 as TierLevel },
    { finding: 'Etihad Rail: Passenger service to 11 cities by 2030 — Under construction', metric: '11 cities', source: 'UAE Government Portal', tier: 1 as TierLevel },
    // Road Safety
    { finding: 'Road Fatalities 2024: 384 (+9% YoY) — Fatality reduction since 2008: -64%', metric: '384 (+9%)', source: 'WSH Asia / MOI Statistics 2024', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'Traffic Congestion: 86% of residents experience congestion — Dubai: 91%', metric: '86%', source: 'Al Wathba Insurance/RoadSafetyUAE Study (June 2025)', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
  ],
  metrics: {
    volume: 920000,
    reach: 8500000,
    engagement: 410000,
    sentiment: { positive: 42, negative: 38, neutral: 20, overall: 4, volume: 920000 },
    trend: { direction: 'rising' as const, changePercent: 18.5, period: '2025-2026', value: 920 },
  },
  sentiment: { positive: 42, negative: 38, neutral: 20, overall: 4, volume: 920000 },
  emotions: { joy: 30, trust: 40, fear: 55, surprise: 35, sadness: 40, disgust: 30, anger: 35, anticipation: 38 },
  credibility: { tier: 1 as TierLevel, score: 82, sources: 48, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 99, level: 'critical' as const, justification: 'Environment and infrastructure are existential for UAE long-term sustainability, economic diversification, and climate resilience' },
  alertLevel: 'YELLOW' as AlertLevel,
  trends: [
    { direction: 'rising' as const, changePercent: 18.5, period: '2025-2026', value: 920 },
    { direction: 'rising' as const, changePercent: 12.3, period: '2024-2025', value: 776 },
    { direction: 'stable' as const, changePercent: 5.1, period: '2023-2024', value: 691 },
  ],
  stakeholders: [
    'Ministry of Climate Change and Environment (MOCCAE)',
    'Environment Agency — Abu Dhabi (EAD)',
    'Dubai Municipality',
    'Masdar (Abu Dhabi Future Energy Company)',
    'ENEC (Emirates Nuclear Energy Corporation)',
    'Nawah Energy Company',
    'ADNOC',
    'Tadweer (Abu Dhabi Waste Management)',
    'Etihad Rail',
  ],
  relatedEntities: [
    'Climate Action Tracker',
    'World Resources Institute',
    'Yale Environmental Performance Index',
    'World Nuclear Association',
    'IUCN',
    'World Bank',
    'Amnesty International',
    'Gulf IF',
    'CNN',
    'Atlantic Council',
  ],
  sources: [
    { name: 'Climate Action Tracker', url: 'https://climateactiontracker.org', tier: 1 as TierLevel, date: '2024' },
    { name: 'UAE Government Portal (u.ae)', url: 'https://u.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'World Nuclear Association', url: 'https://www.world-nuclear.org', tier: 1 as TierLevel, date: '2026' },
    { name: 'Yale Environmental Performance Index', url: 'https://epi.yale.edu', tier: 1 as TierLevel, date: '2024' },
    { name: 'COP28 UAE Consensus', url: 'https://www.cop28.com', tier: 0 as TierLevel, date: '2023' },
    { name: 'World Resources Institute', url: 'https://www.wri.org', tier: 1 as TierLevel, date: '2024' },
    { name: 'Masdar/Reuter', url: 'https://www.masdar.ae', tier: 1 as TierLevel, date: '2026' },
    { name: 'Abu Dhabi Media Office', url: 'https://www.abu-dhabi.com', tier: 0 as TierLevel, date: '2025' },
    { name: 'The National News', url: 'https://www.thenationalnews.com', tier: 1 as TierLevel, date: '2025' },
    { name: 'CNN', url: 'https://www.cnn.com', tier: 1 as TierLevel, date: '2026' },
    { name: 'Atlantic Council', url: 'https://www.atlanticcouncil.org', tier: 1 as TierLevel, date: '2026' },
    { name: 'WSH Asia / MOI Statistics', url: 'https://www.moi.gov.ae', tier: 0 as TierLevel, date: '2024' },
    { name: 'Gulf IF', url: 'https://gulfif.com', tier: 2 as TierLevel, date: '2023' },
    { name: 'Guy Carpenter', url: 'https://www.guycarrier.com', tier: 1 as TierLevel, date: '2024' },
    { name: 'Euronews', url: 'https://www.euronews.com', tier: 1 as TierLevel, date: '2024' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// DETAILED SECTION DATA — ALL SECTIONS FROM MD FILE
// ============================================================================

// --- Section 1: Climate & Environmental Policy ---
export const climatePolicyData = {
  uaeClimateLaw: {
    lawNumber: 'Federal Decree-Law No. 11 of 2024',
    issueDate: 'August 28, 2024',
    effectiveDate: 'May 30, 2025',
    issuingAuthority: 'UAE Federal Government',
    leadMinistry: 'Ministry of Climate Change and Environment (MOCCAE)',
    policyAlignment: 'Part of UAE commitment to net-zero GHG emissions by 2050',
    legalCharacter: 'Standalone primary legislation (not amendment to existing law)',
    keyProvisions: 'Sector-specific climate mitigation & adaptation plans; National carbon credit registry; Industrial emissions reporting mandate; Regulatory penalties for non-compliance (Article 15)',
    assessment: 'Embeds net-zero goals into national legislation; Advances carbon markets; Sets model for Global South',
    critiques: 'No just transition provisions; Missing climate justice framework; Limited public participation mechanisms',
    sources: ['PWC Middle East', 'ORF Middle East'],
  },
  climateActionTracker: {
    overallRating: 'Critically Insufficient',
    policiesRating: 'Critically Insufficient (4C+ World pathway)',
    ndcTarget: '206 MtCO2e by 2030 (18% below 2022 levels)',
    compatibilityRequirement: '38% emissions reduction below 2022 levels by 2030',
    projectedTrend: 'Emissions projected to continue rising through 2030',
    cleanPowerTarget: '30% "clean power" capacity by 2030',
    renewablesInvestment: '$54bn over seven years',
    ccsTarget: 'Doubled to 10 MtCO2e annually by 2030',
    notableFossilInvestment: 'ADNOC awarded $17bn contracts for Hail and Ghasha offshore gas fields',
    source: 'Climate Action Tracker (April 2024)',
  },
  ndc30: {
    emissionsCap2030: '206 MtCO2e',
    emissionsCapNotes: '18% below 2022 levels',
    cleanPowerShare: '30% by 2030',
    cleanPowerNotes: 'Up from 3% in 2019',
    renewableInvestment: '$54bn / 7 years',
    renewableNotes: 'Solar, wind, battery',
    ccsCapacity: '10 MtCO2e/yr by 2030',
    ccsNotes: 'Doubled from prior target',
  },
}

// --- Section 2: Net Zero 2050 Strategy ---
export const netZero2050Data = {
  charter: {
    targetYear: 2050,
    legalStatus: 'Enshrined in UAE Government\'s Net Zero 2050 Charter (signed March 2023)',
    scope: 'CO2, CH4, N2O across all economic sectors',
    exclusions: 'F-gases (~9% of UAE emissions)',
    claimedCoverage: '~95% of total emissions',
    lulucfSinks: '3.5 MtCO2e through expanded mangroves',
    engineeredCDR: '9.5 MtCO2e via direct air capture (DAC)',
    blueHydrogenShare: '~50% of total hydrogen production by 2040–2050',
    ccsRole: 'Accounts for 32% of industry sector emission reductions by 2050',
    fairnessEquityMention: 'None',
    adnoc2045NetZeroTarget: 'Covers Scope 1 & 2 operational emissions only (not Scope 3)',
    source: 'Climate Action Tracker — Net Zero Targets',
  },
  sixSectorFramework: [
    { sector: 'Power', programmes: 'Solar, wind, nuclear, battery storage', keyOutcome: 'Grid decarbonisation' },
    { sector: 'Industry', programmes: 'CCS, hydrogen, efficiency', keyOutcome: 'Hard-to-abate emissions' },
    { sector: 'Transport', programmes: 'EVs, hydrogen fuel cells, public transit', keyOutcome: 'Mobility decarbonisation' },
    { sector: 'Buildings', programmes: 'Energy efficiency, green building codes', keyOutcome: 'Operational carbon reduction' },
    { sector: 'Waste', programmes: 'Waste-to-energy, recycling, landfill diversion', keyOutcome: 'Methane reduction' },
    { sector: 'Agriculture', programmes: 'Controlled environment agriculture, desalination reuse', keyOutcome: 'Water-food nexus' },
  ],
  aggregateTargets: {
    jobOpportunities: '200,000 (solar, battery, hydrogen sectors)',
    gdpContribution: '~3% of national GDP',
    keyEnablers: 'Climate finance, R&D, upskilling',
  },
}

// --- Section 3: Renewable Energy ---
export const renewableEnergyData = {
  solar: {
    renewableCapacityTotal: '7.7+ GW',
    renewableCapacityDate: 'April 2026',
    solarPVAnnualGrowth2024: '+29%',
    lowEmissionsEnergyShare2024: '35%',
    lowEmissionsNotes: 'Up from 3% in 2019',
    target2031: 'Tripling of 2026 levels (est. 20+ GW)',
    target2030CleanEnergy: '30% of generation',
  },
  mohammedBinRashidSolarPark: {
    location: 'Dubai',
    operational: '3,460 MW',
    underConstruction: '1,200 MW',
    phase6: 'Ongoing',
    phase7Tender: '1,600 MW (expandable to 2,000 MW)',
    phase7Storage: 'Battery: 6,000 MWh — one of world\'s largest solar-plus-storage',
    targetBy2029: '7,260 MW',
  },
  alDhafraSolarPlant: {
    location: 'Abu Dhabi',
    capacity: '2 GW',
    inauguration: '2023',
    developer: 'Abu Dhabi Future Energy Company (Masdar)',
  },
  deploymentRate: 'One or two solar farms a year until the end of the decade',
  source: 'The National News (March 2025); Utilities Middle East (April 2026)',
  nuclear: {
    reactorType: 'APR1400 (Korean design)',
    numberOfReactors: 4,
    totalCapacity: '~5,380 MWe (1,345 MWe each)',
    annualGeneration: '~40 TWh',
    gridConnection: 'Units 1–4: 2020–2024',
    fullCommercialOperation: 2024,
    shareOfUAEElectricity: '~25%',
    carbonAvoided: '22+ million tonnes CO2/year',
    fuelSupplier: 'KEPCO Nuclear Fuels (Korea)',
    operator: 'Nawah Energy Company (82% ENEC, 18% KEPCO)',
    operatingSupport: '$880M agreement with KHNP through 2030',
    uraniumSuppliers: ['Canada', 'UK', 'France', 'Russia'],
    usedFuelPondStorage: 'Up to 20 years',
    usedFuelDryStorage: 'After 6 years',
    security20252029: 'Enhanced physical protection; Updated cybersecurity; New radioactive material transport guides; Regulatory masterplan',
    nuclearGeneration2024: '+25% vs prior year; 40 TWh produced',
    emissionIntensityReduction2024: 'Power sector decreased 10%',
    source: 'World Nuclear Association (March 2026); The Mena Business Review',
  },
  masdar: {
    globalCleanEnergyCapacity: '65 GW',
    globalCleanEnergyDate: 'January 2026',
    target2030: '100 GW',
    role: 'Abu Dhabi Future Energy Company; UAE\'s flagship clean energy vehicle',
    flagshipProject: 'Masdar City (Abu Dhabi) — planned carbon-neutral town',
    cityCurrentStatus: 'Some power drawn from national grid; goal is full renewable self-sufficiency',
    source: 'Masdar/Reuter (January 2026); Economist Impact; ScienceDirect',
  },
}

// --- Section 4: COP28 ---
export const cop28Data = {
  officialOutcomes: {
    assessment: 'Most ambitious and comprehensive set of negotiated climate outcomes since COP21',
    fossilFuelLanguage: 'First international agreement to "transition away from fossil fuels in energy systems"',
    renewablesTarget: 'Tripling renewables globally by 2030',
    energyEfficiencyTarget: 'Doupling energy efficiency globally by 2030',
    emissionsPeaking: 'Recognition of need to "peak global emissions by 2025"',
    lossDamageFund: 'Established on day one; hosted by World Bank',
    lossDamagePledges: '$792 million from 19 countries (UAE: $100 million)',
    emiratesFramework: 'Emirates Framework for Global Climate Resilience delivered',
    totalClimateFinance: 'Over $85 billion',
    source: 'COP28 UAE Consensus Official Records',
  },
  lossDamageFundGap: {
    pledged: '~$700–792 million',
    estimatedAnnualDamages: '$580 billion (vulnerable countries) by 2030',
    gap: '$579+ billion shortfall',
    adaptationGoals: 'No quantification; No financial support for developing countries',
    source: 'World Resources Institute',
  },
  controversies: [
    { allegation: 'Greenwashing', detail: 'UAE accused of using COP28 to promote greenwashing of fossil fuel expansion', source: 'Gulf IF (December 2023)' },
    { allegation: 'Presidency Conflict', detail: 'Sultan Al Jaber (ADNOC CEO) appointed COP28 President — opposed as incompatible with climate leadership', source: 'Gulf IF; Amnesty International' },
    { allegation: 'Hydrocarbon Deal Allegations', detail: 'Leaked documents suggested officials sought hydrocarbon deals during COP28', source: 'Gulf IF' },
    { allegation: 'Wikipedia Greenwashing', detail: 'COP28 president\'s team accused of Wikipedia "greenwashing"', source: 'The Guardian (May 2023)' },
    { allegation: 'Human Rights', detail: 'UAE\'s "draconian and ill-defined laws" allow arrest of dissenters', source: 'Amnesty International' },
    { allegation: '"Shameless" COP', detail: 'COP28 described as "rife with conflicts, corruption and corporate greenwashing"', source: 'LA Times (December 2023)' },
    { allegation: 'Oil Reserve Control', detail: 'UAE government controls ~6% of world\'s oil reserves', source: 'The Guardian' },
  ],
  sentimentSummary: 'COP28 outcomes are institutionally positive in terms of process and agreements, but politically contentious due to presidency conflicts, perceived fossil fuel industry influence, and the magnitude of the loss & damage funding gap.',
}

// --- Section 5: Air Quality ---
export const airQualityData = {
  epi2024: {
    overallRank: 53,
    overallScore: 51.6,
    tenYearChange: '+9.2',
    airPollutionCategoryRank: 115,
    airPollutionCategoryScore: 65.1,
    anthropocentricPM25: { rank: 155, score: 10.3 },
    no2Exposure: { rank: 176, score: 7.5 },
    no2Note: 'LOWEST globally (could indicate low vehicle/industrial emissions or limited monitoring)',
    so2Exposure: { rank: 160, score: 12.4 },
    ozoneExposure: { rank: 152, score: 24.2 },
    coExposure: { rank: 153, score: 34.8 },
    marineProtectionStringency: { rank: 1, score: 100.0 },
    notable: 'UAE ranks LAST globally on NO2 exposure, but poorly on PM2.5, ozone, and SO2',
    source: 'Yale Environmental Performance Index 2024',
  },
  pm25Reduction2024: {
    reduction: '22% drop in harmful levels',
    source: 'IQAir / Nuktadubai (March 2025)',
  },
  nationalAirQualityAgenda2031: {
    pillars: [
      { name: 'Monitoring', focus: 'Outdoor air quality, Indoor air quality, Ambient odour, Ambient noise' },
      { name: 'Mitigation', focus: 'Source reduction across sectors' },
      { name: 'Management', focus: 'Policy enforcement, institutional framework' },
    ],
    frameworkElements: 'Clear policy and institutional framework; Enhanced technical and human resources; Scientific and academic research; Advanced technology; Financial resource access; Community awareness',
    source: 'UAE Government Portal — National Air Quality Agenda 2031',
  },
}

// --- Section 6: Water Resources & Desalination ---
export const waterDesalinationData = {
  dependency: [
    { country: 'Qatar', dependency: '~99%' },
    { country: 'Kuwait/Bahrain', dependency: '~90%' },
    { country: 'Oman', dependency: '86%' },
    { country: 'Israel', dependency: '80%' },
    { country: 'UAE', dependency: '42%' },
    { country: 'Gulf (overall)', dependency: '40% of world\'s desalinated water' },
  ],
  infrastructure: {
    desalinationPlantsMiddleEast: '~5,000',
    desalinationPlantsGulf: '400+',
    topPlantsGulf90plusWater: 56,
    investmentSince2006: '$53.4 billion',
    vulnerabilityNote: 'Strikes could cause Gulf states to "lose majority of drinking water in days" (US intelligence)',
    humanitarianRisk: '100 million individuals would lose regular access to drinking water if Gulf desalination disabled',
    source: 'CNN (March 2026); Atlantic Council (March 2026)',
  },
  environmentalConcerns: [
    { issue: 'Brine Discharge', detail: 'Arabian Gulf experiencing increased salinity from brine discharge' },
    { issue: 'Marine Ecosystem Harm', detail: 'Harms marine ecosystems, coral reefs, fish populations' },
    { issue: 'Attacks on Plants', detail: 'Sustained attacks on desalination infrastructure — environmental disaster fears' },
  ],
  april2024Floods: {
    date: 'April 16, 2024',
    affectedEmirates: 'Dubai, Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah',
    rainfallAlAin: '254.8 mm in <24 hours (Khatm Shakla)',
    rainfallDubaiAirport: '164 mm',
    returnPeriod: 'Heaviest in 75 years (since 1949)',
    flightsCancelled2Days: 1244,
    flightsDelayed3Days: '1,500+ at Dubai Airport',
    vehiclesAffected: '30,000–50,000',
    motorInsuranceLosses: 'US$150–250 million (preliminary)',
    totalInsuranceLosses: 'US$2.9–3.4 billion',
    governmentAid: 'Dh2 billion (US$544.6 million)',
    deaths: '5 (3 Filipinos, 1 Emirati, 1 Pakistani)',
    metroDisruption: '~200 commuters stranded',
    flydubaiApril16: 'All flights cancelled',
    weatherNote: 'Over a year\'s worth of rain fell in a single day. Sparked debates about cloud seeding role.',
    source: 'Wikipedia — 2024 UAE Floods; Guy Carpenter; Royal Meteorological Society',
  },
}

// --- Section 7: Waste Management ---
export const wasteManagementData = {
  initiatives: [
    { name: 'Abu Dhabi\'s Tadweer', detail: 'Manages waste policy since 2008', authority: 'Abu Dhabi' },
    { name: 'Warsan Waste-to-Energy Plant', detail: 'AED 2 billion; Middle East\'s largest', authority: 'Dubai Municipality' },
    { name: 'Dubai Integrated Waste Management Master Plan', detail: 'Zero waste to landfills in 20 years', authority: 'Dubai' },
    { name: 'Sharjah\'s Bee\'ah', detail: 'Public-private partnership driving waste management', authority: 'Sharjah' },
    { name: 'Single-Use Plastics Ban', detail: 'Abu Dhabi eliminated by 2021', authority: 'Abu Dhabi' },
    { name: 'Single-Use Bag Tariff', detail: '25 fils per bag from July 2022', authority: 'Dubai' },
  ],
  dubaiLaw2024: {
    lawNumber: 'Dubai Law No. 18 of 2024',
    issueDate: 'September 4, 2024',
    issuer: 'Mohammed bin Rashid Al Maktoum',
    competentAuthority: 'Dubai Municipality',
    maximumFine: '500,000 AED',
    repeatViolation: 'Fines double within one year',
    objectives: 'Encourage private sector investment; Minimize waste; Promote circular economy',
    prohibitions: 'Dumping waste in public places; Open burning; Seawater discharge',
    permitsRequired: 'Required for waste management activities',
    importRestriction: 'Import of waste for final disposal not permitted',
    source: 'Dubai Law No. 18 of 2024',
  },
}

// --- Section 8-10: Biodiversity & Conservation ---
export const biodiversityData = {
  nationalBiodiversityStrategy2031: {
    speciesAssessed: 1167,
    categories: [
      { name: 'Mammals (terrestrial)', assessed: 39 },
      { name: 'Mammals (marine)', assessed: 19 },
      { name: 'Reptiles/Amphibians', assessed: 72 },
      { name: 'Bony Fish', assessed: 126 },
      { name: 'Cartilaginous Fish', assessed: 80 },
      { name: 'Coral Species', assessed: 66 },
      { name: 'Local Bird Species', assessed: 167 },
      { name: 'Native Plant Species', assessed: 598 },
    ],
    mammalRedList: [
      { status: 'Regionally Extinct', count: 3, percentage: '5%' },
      { status: 'Critically Endangered', count: 4, percentage: '7%' },
      { status: 'Endangered', count: 7, percentage: '12%' },
      { status: 'Vulnerable', count: 3, percentage: '5%' },
      { status: 'Total Threatened', count: 14, percentage: '24%' },
    ],
    keyThreatenedSpecies: [
      { species: 'Arabian Oryx', status: 'Critically Endangered', notes: 'Iconic conservation success' },
      { species: 'Arabian Leopard', status: 'Critically Endangered', notes: 'Extremely rare' },
      { species: 'Arabian Wildcat', status: '—', notes: '' },
      { species: 'Arabian Wolf', status: '—', notes: '' },
      { species: 'Sand Cat', status: '—', notes: '' },
      { species: 'Striped Hyena', status: '—', notes: '' },
      { species: 'Dugong', status: 'Marine mammal', notes: 'Seagrass dependent' },
      { species: 'Marine Turtles', status: 'Multiple species', notes: 'Hawksbill, green turtle' },
    ],
    source: 'Gulf News (December 2025)',
  },
  broaderWildlifeOverview: {
    habitatTypes: ['Coasts', 'offshore islands', 'mangroves', 'mudflats', 'salt pans', 'sand dunes', 'mountain slopes', 'wadis'],
    birdSpeciesRecorded: '400+ (~90 breeding regularly)',
    socotraCormorant: '20–30% of world population breed in UAE',
    terrestrialReptiles: '54+ species',
    conservationAreas: ['Al Marmoom Desert Conservation Reserve', 'Al-Wathba Wetland Reserve', 'Ras Al Khor', 'Jebel Hafeet National Park'],
    source: 'Wikipedia — Wildlife of UAE',
  },
  coralReefRehabilitation: {
    target2030: '4+ million coral colonies across 900+ hectares',
    alreadyRestored: '1 million coral colonies (since 2021)',
    successRate: '95%',
    fishBiomassIncrease: 'Over 50% in restored areas',
    coralSpeciesAbuDhabi: 34,
    keyLocations: ['Ras Ghanada', 'Al Nouf', 'Saadiyat', 'Al Heel', 'Barakah', 'Al Yassat'],
    source: 'Abu Dhabi Media Office (May 2025)',
  },
  mangroveConservation: [
    { metric: 'COP26 Pledge', value: 'Plant 100 million mangroves by 2030', timeframe: 'Announced 2021' },
    { metric: 'Abu Dhabi Cover Increase', value: '+92%', timeframe: '1987–2022' },
    { metric: 'Nationwide Cover Increase', value: '+150%', timeframe: '37 years (1987–2024)' },
    { metric: 'Mangrove Coverage (2024)', value: '201.4 km²', timeframe: '' },
  ],
  protectedAreas: {
    before2013: 23,
    after2024: 50,
    changePercent: '+117%',
    protectedAreaChange: '+177%',
    landReserves: '34 (~13,100 km²)',
    marineReserves: '16 (~6,900 km²)',
    totalProtectedArea: '>20,000 km²',
    terrestrialMarineSplit: '65% terrestrial, 35% marine',
    wetlandCoverage: '6.2 km² (2007) → 391.7 km² across 10 reserves (2024)',
    source: 'UAE Human Journey Blog (November 2025)',
  },
  keyReserves: [
    { name: 'Arabian Oryx Protected Area', type: 'Terrestrial', size: '~5,900 km²', notes: 'Largest land reserve' },
    { name: 'Marawah Marine Biosphere Reserve', type: 'Marine', size: '~4,200 km²', notes: 'Largest marine reserve' },
    { name: 'Abu Dhabi Mangrove Reserve', type: 'Marine/Wetland', size: '—', notes: '' },
    { name: 'Ras Al Khor Wildlife Sanctuary', type: 'Wetland', size: '—', notes: 'Dubai; important for migratory birds' },
    { name: 'Al Marmoom Desert Conservation Reserve', type: 'Desert', size: '—', notes: '' },
    { name: 'Al-Wathba Wetland Reserve', type: 'Wetland', size: '—', notes: '' },
  ],
}

// --- Section 11: Climate Impacts ---
export const climateImpactsData = {
  april2024Floods: {
    date: 'April 16, 2024',
    affectedEmirates: 'Dubai, Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah',
    rainfallAlAinKhatmShakla: '254.8 mm in <24 hours',
    rainfallDubaiAirport: '164 mm',
    returnPeriod: 'Heaviest in 75 years (since 1949)',
    flightsCancelled2Days: 1244,
    flightsDelayed3Days: '1,500+ at Dubai Airport',
    vehiclesAffected: '30,000–50,000',
    motorInsuranceLosses: 'US$150–250 million (preliminary)',
    totalInsuranceLosses: 'US$2.9–3.4 billion',
    governmentAid: 'Dh2 billion (US$544.6 million)',
    deaths: '5 (3 Filipinos, 1 Emirati, 1 Pakistani)',
    metroDisruption: '~200 commuters stranded',
    flydubaiApril16: 'All flights cancelled',
    source: 'Wikipedia — 2024 UAE Floods; Guy Carpenter; Royal Meteorological Society',
  },
  extremeHeatJuly2024: [
    { location: 'Dubai', date: 'July 17, 2024', temperature: '43C air', feelsLike: '62C (144F / 62.2C)' },
    { location: 'Al Dhafra', date: 'July 12, 2024', temperature: '49.9C', feelsLike: '—' },
    { location: 'Kuwait', date: 'July 2024', temperature: '51C', feelsLike: 'Near record 54C' },
    { location: 'Persian Gulf Water', date: 'July 2024', temperature: '—', feelsLike: 'Mid-90sF (~35C)' },
  ],
  safetyThreshold: 'Wet-bulb temperature of 35C+ considered fatal for humans if exposed over 6 hours',
  cause: 'Urban heat island effect — city surfaces absorb and retain heat',
  sandstorms: {
    trend: 'Historical records show increasing occurrences of mild to severe dust storms',
    visibilityTrend: 'Progressive decreasing in mean annual visibility value',
    windSpeeds: 'Up to 40 kph during sandstorm events',
    source: 'ResearchGate (June 2019); The National (May 2024)',
  },
}

// --- Section 12: Per Capita Carbon Emissions ---
export const perCapitaEmissionsData = {
  globalComparison: [
    { rank: 1, country: 'Saudi Arabia', tonnesPerPerson: 20.4 },
    { rank: 2, country: 'UAE', tonnesPerPerson: 20.1 },
    { rank: 3, country: 'Australia', tonnesPerPerson: 14.5 },
    { rank: 4, country: 'US', tonnesPerPerson: 14.2 },
  ],
  uaePerCapitaGHG: {
    perCapitaGHGShiftEco: '~32 metric tons/person/year',
    perCapitaCO2WorldEconomics2023: '21.55 tonnes/head',
    fiftyYearReduction: 'Down 69.3% from 50.09 tonnes in 1973',
    source: 'Shift Eco (October 2024); World Economics; Visual Capitalist',
  },
  drivers: 'Energy-intensive industries; Fossil fuel dependence; High per-capita car ownership; Air conditioning demand (desert climate)',
}

// --- Section 13: Greenwashing ---
export const greenwashingData = {
  cop28Controversies: [
    { allegation: 'Fossil fuel expansion promotion', evidence: 'UAE described as using COP28 to promote greenwashing', source: 'Gulf IF (December 2023)' },
    { allegation: 'Presidency conflict', evidence: 'Sultan Al Jaber (ADNOC CEO) appointed COP28 President', source: 'Gulf IF; Amnesty International' },
    { allegation: 'Hydrocarbon deal-seeking', evidence: 'Leaked documents suggested officials sought hydrocarbon deals during COP', source: 'Gulf IF' },
    { allegation: 'Wikipedia manipulation', evidence: 'COP28 president\'s team accused of Wikipedia "greenwashing"', source: 'The Guardian (May 2023)' },
    { allegation: 'Corporate greenwashing', evidence: 'COP28 described as "rife with conflicts, corruption and corporate greenwashing"', source: 'LA Times (December 2023)' },
    { allegation: 'Fossil fuel expansion plans', evidence: 'ADNOC\'s expansion plans seen as incompatible with climate leadership', source: 'Gulf IF' },
  ],
  adnocExpansion: [
    { metric: 'ADNOC Hail & Ghasha Contracts', value: '$17 billion (offshore gas fields)' },
    { metric: 'ADNOC 2045 Net Zero Target Coverage', value: 'Scope 1 & 2 operational emissions only' },
    { metric: 'UAE Oil Reserves Control', value: '~6% of world total' },
  ],
}

// --- Section 14-15: Masdar & Barakah ---
export const energyInfrastructureData = {
  masdar: {
    globalCleanEnergyPortfolio: '65 GW',
    portfolioDate: 'January 2026',
    target2030: '100 GW',
    role: 'UAE\'s flagship renewable energy company; Abu Dhabi\'s sovereign wealth vehicle',
    flagshipProject: 'Masdar City, Abu Dhabi',
    cityDesign: 'Planned carbon-neutral town',
    cityCurrentEnergy: 'Some power drawn from national grid; aims for full renewable self-sufficiency',
    source: 'Masdar/Reuter (January 2026); Economist Impact; ScienceDirect',
  },
  barakah: {
    reactorModel: 'APR1400 (Korea)',
    units: 4,
    capacityPerUnit: '1,345 MWe',
    totalCapacity: '~5,380 MWe',
    annualGeneration: '~40 TWh',
    uaeElectricityShare: '~25%',
    carbonAvoided: '22+ million tonnes/year',
    gridConnectionTimeline: 'Units 1–4: 2020–2024',
    fullCommercialOperation: 2024,
    fuelSupply: 'KEPCO Nuclear Fuels (Korea)',
    operator: 'Nawah Energy Company (82% ENEC, 18% KEPCO)',
    operatingSupportAgreement: '$880 million / year with KHNP through 2030',
    uraniumSupplyDiversity: ['Canada', 'UK', 'France', 'Russia'],
    usedFuelPondStorage: 'Up to 20 years',
    usedFuelDryStorage: 'After 6 years',
    security2025Plus: 'Enhanced physical protection; Updated cybersecurity; New transport guides for radioactive materials; 2025–2029 regulatory masterplan',
    performance2024: 'Nuclear generation +25% vs 2023; 40 TWh produced',
    source: 'World Nuclear Association (March 2026); The Mena Business Review',
  },
}

// --- Section 16: Oil Spills & Marine Threats ---
export const marineThreatsData = {
  gulfMaritimeThreats: [
    { threat: 'Oil Depot Strikes', detail: 'Targeted fuel storage complexes in Tehran; Black rain phenomenon after Israeli strikes on oil facilities' },
    { threat: 'Maritime Attacks', detail: 'Vessels hit in Strait of Hormuz' },
    { threat: 'Gulf Ecosystem Vulnerability', detail: 'Semi-enclosed ecosystem — pollution persists for years due to limited natural flushing' },
    { threat: 'At-Risk Environments', detail: 'Fish stocks; Coral reefs; Mangroves; Seabirds' },
    { threat: 'Environmental Damage', detail: 'Devastating; Crippling ecosystems; Threatening species survival' },
  ],
}

// --- Section 17: Land Reclamation ---
export const landReclamationData = {
  projects: [
    { name: 'Palm Jumeirah', location: 'Dubai', notes: 'Iconic artificial island' },
    { name: 'Palm Jebel Ali', location: 'Dubai', notes: 'Construction halted; destroyed 8+ km² of natural reef' },
    { name: 'Palm Deira', location: 'Dubai', notes: 'Planned' },
    { name: 'The World Islands', location: 'Dubai', notes: 'Partial development' },
    { name: 'Burj Al Arab', location: 'Dubai', notes: 'Built on reclaimed land' },
    { name: 'Dubai Marina', location: 'Dubai', notes: 'Reclaimed coastline' },
    { name: 'Yas Island', location: 'Abu Dhabi', notes: '' },
    { name: 'Al Reem Island', location: 'Abu Dhabi', notes: '' },
    { name: 'Al Lulu Island', location: 'Abu Dhabi', notes: '' },
    { name: 'Al Marjan Island', location: 'Ras Al Khaimah', notes: '' },
  ],
  environmentalImpacts: [
    { impact: 'Palm Jebel Ali Reef Destruction', detail: 'Over 8 km² of natural reef habitat destroyed' },
    { impact: 'Palm Jumeirah Temperature Effect', detail: 'Water temperature increased by 7.5% surrounding the island' },
    { impact: 'Sea Turtle Impact', detail: 'Became endangered due to reclamation projects' },
    { impact: 'Singapore Comparison', detail: '95% of mangroves lost; 60% of coral reefs lost (cautionary reference)' },
    { impact: 'Global Wetland Loss', detail: '35% of wetlands lost globally between 1970–2015' },
    { impact: 'Ajman', detail: 'Reclamation proposals rejected due to environmental concerns' },
  ],
}

// --- Section 18: Sustainability Strategies ---
export const sustainabilityData = {
  greenAgenda2030: {
    fiveStrategicObjectives: [
      { number: 1, objective: 'Competitive knowledge economy', targetImpact: 'Innovation-driven growth' },
      { number: 2, objective: 'Social development and quality of life', targetImpact: 'Wellbeing improvements' },
      { number: 3, objective: 'Sustainable environment and valued natural resources', targetImpact: 'Resource preservation' },
      { number: 4, objective: 'Clean energy and climate action', targetImpact: 'Decarbonisation' },
      { number: 5, objective: 'Green life and sustainable use of resources', targetImpact: 'Circular economy' },
    ],
    economicTargets: {
      gdpIncrease: '+4–5%',
      exportIncrease: 'AED 24–25 billion',
      emissionsTarget: '<100 kWh per unit (specific metric TBC)',
    },
  },
  abuDhabiEnvironmentVision2030: {
    fivePriorityAreas: [
      { number: 1, area: 'Climate Change' },
      { number: 2, area: 'Clean Air and Noise Pollution' },
      { number: 3, area: 'Water Resources' },
      { number: 4, area: 'Biodiversity, Habitats and Cultural Heritage' },
      { number: 5, area: 'Waste Management' },
    ],
    framework: 'Integrates environmental, economic, and social sustainability pillars',
    source: 'UAE Government Portal — Green Agenda 2030; Abu Dhabi Environment Vision 2030',
  },
}

// --- Section 19: Mega Infrastructure ---
export const megaInfrastructureData = {
  alMaktoumAirport: {
    investment: '128 billion AED (~$35 billion USD)',
    size: '70 km² (5x Dubai International Airport)',
    runways: '5 parallel',
    passengerTerminals: 5,
    aircraftGates: 400,
    initialCapacity: '150 million passengers/year',
    longTermCapacity: '260 million passengers/year',
    approvalDate: 'April 28, 2024 (Mohammed bin Rashid Al Maktoum)',
    initialOperationsTarget: '2032 (Emirates & Flydubai relocation accelerated)',
    fullCompletion: 'No earlier than 2035',
    totalProjectCostEstimated: '$82 billion',
    firstFlightCargo: 'June 20, 2010 (Emirates SkyCargo Boeing 777F)',
    passengerOperationsBegan: 'October 26, 2013',
    phase2Delay: 'Originally 2025 → pushed to 2030 (October 2018 announcement)',
    source: 'One Mile At A Time (2024); Wikipedia',
  },
  etihadRail: {
    scope: 'Passenger and freight rail network',
    passengerServiceTarget: '11 cities by 2030',
    status: 'Under construction / partial operation',
  },
}

// --- Section 20: Road Safety ---
export const roadSafetyData = {
  uaeRoadSafety2024: {
    fatalities: 384,
    fatalitiesYoYChange: '+9% vs 2023 (352); +12% vs 2022 (343)',
    injured: 6062,
    injuredYoYChange: '+8% vs 2023 (5,568)',
    majorAccidents: 4748,
    majorAccidentsYoYChange: '+8% vs 2023',
    fatalityReductionSince2008: '-64% from 1,072 in 2008',
    motorcycleFatalities: 67,
    motorcycleNote: '17% of all',
    pedestrianRunoverFatalities: 61,
    pedestrianNote: '16% of all',
  },
  topViolationsCausingFatalities: [
    { rank: 1, violation: 'Distracted Driving' },
    { rank: 2, violation: 'Tailgating' },
    { rank: 3, violation: 'Sudden Deviation' },
    { rank: 4, violation: 'Negligence' },
    { rank: 5, violation: 'Lack of Lane Discipline' },
  ],
  topViolationsNote: 'Top 5 violations causing 68% of fatalities',
  ageDemographics2024: {
    youngUsers19to29: '40% of fatalities, 42% of injured',
  },
  historicalWHOData: {
    uaeDeathsPer100000: 5.5,
    easternMediterraneanRegion: 'Third highest death per capita globally',
    abuDhabiCrashInjuries: 'Second leading cause of death (21.3%)',
    fatalInjuriesFromRoadCrashes: '47.2%',
    youth18to30TrafficDeaths: '50%',
    tailgatingCausedRearendCrashes: '50%+',
    nonSeatbeltWearingCrashVictims: '40%',
    source: 'PMC/NIH Study / WHO data',
  },
}

// --- Section 21: Traffic Congestion ---
export const trafficCongestionData = {
  congestionJune2025: {
    residentsExperiencingCongestion: '86%',
    witnessingMoreCongestionVsLastYear: '80%',
    dubaiCongestionExperience: '91%',
    sharjahCongestionExperience: '90%',
  },
  topCauses: [
    { rank: 1, cause: 'Too many vehicles on roads', percentage: '65%' },
    { rank: 2, cause: 'Office start times coincide', percentage: '54%' },
    { rank: 3, cause: 'School start times coincide', percentage: '48%' },
    { rank: 4, cause: 'Heavy dependency on private cars', percentage: '45%' },
  ],
  sheikhZayedRoadE11: {
    dailyCommutersFromOtherEmirates: '~1 million',
    roadLanes: '12 lanes (peak gridlock)',
    congestionSeverity: 'Daily peak-hour gridlock',
    designation: 'Most dangerous road in UAE',
  },
  mostDangerousRoads: ['Sheikh Zayed Road (E11)', 'Emirates Road (E611)', 'Al Khail Road (E44)'],
  source: 'Al Wathba Insurance/RoadSafetyUAE Study (June 2025); Independent UK (February 2025); Royal Star Car Rental',
}

// --- Section 22: Synthesized Dashboard KPIs ---
export const dashboardKPIs = {
  climateEmissions: [
    { kpi: 'Net Zero Target Year', current: '2050', target: '2050', status: 'Charter signed 2023; Law enacted 2024' },
    { kpi: 'Climate Law', current: 'Federal Decree-Law No. 11 of 2024', target: 'Effective May 2025', status: 'Enacted' },
    { kpi: '2030 Emissions Cap', current: '—', target: '206 MtCO2e', status: 'NDC3.0 target' },
    { kpi: 'Per Capita CO2 (2024)', current: '~20.1 tonnes', target: 'Reducing', status: 'Among world\'s highest' },
    { kpi: 'Per Capita GHG', current: '~32 tonnes', target: 'Reducing', status: 'Far above global average' },
    { kpi: 'Clean Energy Share (2024)', current: '35%', target: '30% by 2030', status: 'Exceeds target early' },
    { kpi: 'Climate Action Tracker Rating', current: 'Critically Insufficient', target: '1.5C compatible', status: 'Non-compliant' },
    { kpi: 'F-gas Inclusion in Net Zero', current: 'Excluded (~9% of emissions)', target: 'Should be included', status: 'Gap' },
  ],
  energyInfrastructure: [
    { kpi: 'Total Renewable Capacity', current: '7.7+ GW', target: 'Tripling by 2031', status: 'On track' },
    { kpi: 'Solar Park (MBR)', current: '3,460 MW operational', target: '7,260 MW by 2029', status: 'Phase 6/7 underway' },
    { kpi: 'Al Dhafra Solar', current: '2 GW', target: '—', status: 'Operational (2023)' },
    { kpi: 'Barakah Nuclear', current: '5,380 MWe (4 units)', target: '—', status: 'Fully operational 2024' },
    { kpi: 'Nuclear Generation (2024)', current: '40 TWh (+25% YoY)', target: '—', status: 'Exceeding targets' },
    { kpi: 'Masdar Global Portfolio', current: '65 GW', target: '100 GW by 2030', status: 'On track' },
    { kpi: 'Clean Energy Target', current: '35% (2024)', target: '30% by 2030', status: 'At 35% — ahead of target' },
  ],
  waterEnvironment: [
    { kpi: 'Desalination Dependency', current: '42%', target: 'Reducing', status: 'Vulnerability' },
    { kpi: 'Gulf Desalination Investment', current: '$53.4B (since 2006)', target: '—', status: 'Ongoing' },
    { kpi: 'Protected Area Expansion', current: '+177% (2013–2024)', target: '—', status: 'Excellent progress' },
    { kpi: 'Nature Reserves', current: '50 (from 23)', target: '—', status: '+117%' },
    { kpi: 'Mangrove Cover Increase', current: '+150% (37 years)', target: '100M by 2030', status: 'Ahead of target' },
    { kpi: 'Coral Colonies Restored', current: '1M (since 2021)', target: '4M+ by 2030', status: '25% complete' },
    { kpi: 'Marine Protection Stringency', current: 'Rank 1 (global)', target: 'Maintain', status: 'Leading' },
  ],
  infrastructureSafety: [
    { kpi: 'Al Maktoum Airport Investment', current: '$35B approved', target: '$82B total', status: 'Phase 1 approved' },
    { kpi: 'Al Maktoum Initial Ops', current: '—', target: '2032', status: 'Accelerated' },
    { kpi: 'Road Fatalities (2024)', current: '384 (+9% YoY)', target: 'Zero', status: 'Rising — concern' },
    { kpi: 'Traffic Congestion Rate', current: '86%', target: 'Reducing', status: 'High' },
    { kpi: 'Etihad Rail Passenger Cities', current: '—', target: '11 by 2030', status: 'Under construction' },
  ],
}

// --- Section 23: Entity Register ---
export const entityRegisterData = {
  governmentEntities: [
    { entity: 'Ministry of Climate Change and Environment (MOCCAE)', role: 'National authority for climate change law; Coordinates NDC implementation' },
    { entity: 'Environment Agency — Abu Dhabi (EAD)', role: 'Abu Dhabi\'s environmental regulator; Coral reef and mangrove programmes' },
    { entity: 'Dubai Municipality', role: 'Competent authority under Dubai Law No. 18 of 2024' },
    { entity: 'Tadweer (Abu Dhabi)', role: 'Waste management authority since 2008' },
    { entity: 'Masdar (Abu Dhabi Future Energy Company)', role: 'UAE flagship clean energy company; 65 GW global portfolio; Masdar City developer' },
    { entity: 'ENEC (Emirates Nuclear Energy Corporation)', role: 'Owner of Barakah plant (82% stake)' },
    { entity: 'Nawah Energy Company', role: 'Operator of Barakah plant (82% ENEC, 18% KEPCO)' },
    { entity: 'ADNOC (Abu Dhabi National Oil Company)', role: 'State oil company; $17B Hail/Ghasha gas fields; CEO Sultan Al Jaber was COP28 President' },
    { entity: 'Emirates Airline / Flydubai', role: 'Relocation target for Al Maktoum Airport (2032)' },
    { entity: 'Etihad Rail', role: 'National railway passenger/freight operator' },
  ],
  keyIndividuals: [
    { name: 'Sultan Al Jaber', role: 'ADNOC CEO; COP28 President (controversial)' },
    { name: 'Mohammed bin Rashid Al Maktoum', role: 'UAE Vice President/Prime Minister; Dubai Ruler; Approved Al Maktoum Airport expansion April 2024' },
  ],
  internationalEntities: [
    { entity: 'Climate Action Tracker', role: 'Independent scientific analysis; Rates UAE "Critically Insufficient"' },
    { entity: 'World Resources Institute', role: 'Research on COP28 Loss & Damage Fund gaps' },
    { entity: 'Amnesty International', role: 'Human rights criticism of UAE at COP28' },
    { entity: 'Gulf IF', role: 'Investigative journalism on COP28 greenwashing allegations' },
    { entity: 'IUCN', role: 'International Union for Conservation of Nature; Mangrove data' },
    { entity: 'World Bank', role: 'Host of Loss & Damage Fund' },
    { entity: 'KEPCO / KHNP', role: 'Korean nuclear fuel and technology suppliers for Barakah' },
    { entity: 'Yale Environmental Performance Index', role: 'EPI rankings for UAE' },
  ],
}

// --- Section 24: Sentiment Analysis ---
export const sentimentAnalysisData = {
  byTopic: [
    { topic: 'Climate Policy', sentiment: 'Mixed/Negative', narrative: 'Law is progress, but CAT rating is damning', intensity: 'High' },
    { topic: 'Net Zero 2050', sentiment: 'Cautiously Positive', narrative: 'Charter exists, but excludes F-gases and relies on CDR/CCS', intensity: 'Medium' },
    { topic: 'COP28', sentiment: 'Polarised', narrative: 'Historic agreement; overshadowed by greenwashing controversy', intensity: 'Very High' },
    { topic: 'Renewable Energy', sentiment: 'Strongly Positive', narrative: 'Rapid growth; ahead of targets', intensity: 'High' },
    { topic: 'Nuclear', sentiment: 'Positive', narrative: '25% of electricity; significant carbon avoided', intensity: 'High' },
    { topic: 'Air Quality', sentiment: 'Mixed', narrative: 'Poor EPI ranking overall; PM2.5 improving (-22%)', intensity: 'Medium' },
    { topic: 'Desalination', sentiment: 'Negative/Risk', narrative: 'Critical vulnerability; brine pollution; attacks', intensity: 'High' },
    { topic: 'Biodiversity', sentiment: 'Mixed', narrative: 'Reserve expansion excellent; Red List results alarming', intensity: 'Medium' },
    { topic: 'Mangroves/Coral', sentiment: 'Positive', narrative: '150% increase; 95% restoration success rate', intensity: 'High' },
    { topic: 'Floods (April 2024)', sentiment: 'Negative', narrative: 'Catastrophic infrastructure failure; $3B+ losses', intensity: 'High' },
    { topic: 'Heat Waves', sentiment: 'Negative', narrative: '62C feels-like; life-threatening conditions', intensity: 'High' },
    { topic: 'Per Capita Emissions', sentiment: 'Negative', narrative: '~20 tonnes; among world\'s highest', intensity: 'High' },
    { topic: 'Greenwashing Allegations', sentiment: 'Negative', narrative: 'Credible allegations from multiple sources', intensity: 'High' },
    { topic: 'Masdar', sentiment: 'Positive', narrative: '65 GW globally; 100 GW by 2030 target', intensity: 'High' },
    { topic: 'Barakah Nuclear', sentiment: 'Positive', narrative: 'Fully operational; 25% of electricity', intensity: 'High' },
    { topic: 'Oil Spills/Maritime', sentiment: 'Very Negative', narrative: 'Active attacks; black rain; ecosystem devastation', intensity: 'Very High' },
    { topic: 'Land Reclamation', sentiment: 'Negative', narrative: 'Significant reef/wetland destruction documented', intensity: 'High' },
    { topic: 'Traffic Safety', sentiment: 'Negative', narrative: '384 fatalities rising (+9% YoY)', intensity: 'Medium-High' },
    { topic: 'Traffic Congestion', sentiment: 'Negative', narrative: '86% experiencing; 1M daily cross-emirate commuters', intensity: 'Medium' },
  ],
}

// --- Section 24: UAE Relevance Assessment ---
export const uaeRelevanceAssessmentData = [
  { topic: 'Climate Law', uaeRelevance: 'Critical', globalRelevance: 'High', uniqueFactors: 'First standalone climate law in Gulf; model for Global South' },
  { topic: 'Net Zero 2050', uaeRelevance: 'Critical', globalRelevance: 'High', uniqueFactors: 'Gulf\'s first net-zero charter; F-gas exclusion gap' },
  { topic: 'Desalination Vulnerability', uaeRelevance: 'Critical', globalRelevance: 'High', uniqueFactors: '42% dependency; semi-enclosed Gulf; geopolitical risk' },
  { topic: 'Mangrove/Coral Restoration', uaeRelevance: 'High', globalRelevance: 'Medium', uniqueFactors: '150% increase; 95% success; global leader in mangrove expansion' },
  { topic: 'Per Capita Emissions', uaeRelevance: 'High', globalRelevance: 'Medium', uniqueFactors: 'Highest in Gulf after Saudi Arabia; rapidly growing' },
  { topic: 'COP28', uaeRelevance: 'Critical', globalRelevance: 'Very High', uniqueFactors: 'First COP in Gulf; historic fossil fuel language; presidency controversy' },
  { topic: 'Solar Deployment', uaeRelevance: 'High', globalRelevance: 'Medium', uniqueFactors: 'Fastest-growing solar market in region; 29% annual PV growth' },
  { topic: 'Nuclear', uaeRelevance: 'High', globalRelevance: 'Medium', uniqueFactors: 'First nuclear program in Arab world; 25% of electricity' },
  { topic: 'April 2024 Floods', uaeRelevance: 'High', globalRelevance: 'Medium', uniqueFactors: '75-year rainfall record; cloud seeding debate; climate signal' },
  { topic: 'Land Reclamation', uaeRelevance: 'High', globalRelevance: 'Medium', uniqueFactors: 'Iconic projects (Palm Jumeirah); significant ecosystem impact' },
]

// --- Section 24: Source Credibility Matrix ---
export const sourceCredibilityData = [
  { source: 'Climate Action Tracker', type: 'Independent Scientific', credibility: 'Very High', notes: 'Peer-reviewed methodology; Multiple institution consortium' },
  { source: 'World Nuclear Association', type: 'Industry/Trade', credibility: 'High', notes: 'Authoritative nuclear industry source' },
  { source: 'UAE Government Portal (u.ae)', type: 'Government', credibility: 'High', notes: 'Primary source for policy claims' },
  { source: 'COP28 UAE Consensus', type: 'Official Record', credibility: 'Very High', notes: 'Primary document' },
  { source: 'World Resources Institute', type: 'Think Tank', credibility: 'Very High', notes: 'Global authority on climate' },
  { source: 'Yale Environmental Performance Index', type: 'Academic', credibility: 'High', notes: 'Established environmental ranking' },
  { source: 'PWC Middle East', type: 'Professional Services', credibility: 'High', notes: 'Big Four accounting firm' },
  { source: 'CNN / The National / Gulf News', type: 'Major International/National Media', credibility: 'High', notes: 'Established editorial standards' },
  { source: 'Amnesty International', type: 'NGO/Human Rights', credibility: 'High', notes: 'Authoritative human rights monitor' },
  { source: 'Atlantic Council', type: 'Think Tank', credibility: 'High', notes: 'Geopolitical analysis' },
  { source: 'Dubai Law No. 18 of 2024', type: 'Official Legal Record', credibility: 'Very High', notes: 'Primary source' },
  { source: 'Wikipedia', type: 'Encyclopedic (crowd-sourced)', credibility: 'Medium', notes: 'Useful for overview; Cross-reference required' },
  { source: 'Guy Carpenter', type: 'Reinsurance Broker', credibility: 'High', notes: 'Insurance loss data' },
  { source: 'WSH Asia / MOI Statistics', type: 'Government/Industry', credibility: 'High', notes: 'Official traffic statistics' },
  { source: 'Gulf IF / The Guardian / LA Times', type: 'Investigative Journalism', credibility: 'Medium-High', notes: 'For controversy/political angles; perspective bias' },
  { source: 'Shift Eco / World Economics / Visual Capitalist', type: 'Data Aggregators', credibility: 'Medium', notes: 'Cross-reference for statistics' },
  { source: 'Euronews / Washington Post / Arabia Weather', type: 'News Media', credibility: 'Medium-High', notes: 'For specific incidents (heat, weather)' },
  { source: 'ResearchGate (Academic Paper)', type: 'Academic', credibility: 'High', notes: 'Peer-reviewed dust storm research' },
  { source: 'Economist Impact', type: 'Think Tank', credibility: 'High', notes: 'Masdar clean energy data' },
  { source: 'ScienceDirect (Masdar City case study)', type: 'Academic', credibility: 'High', notes: 'Peer-reviewed' },
]
