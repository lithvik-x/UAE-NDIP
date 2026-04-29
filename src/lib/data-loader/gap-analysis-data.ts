// @ts-nocheck
'use client'

import type { TierLevel } from './types'

// ============================================================================
// MD FILE 12-8: GAP ANALYSIS RESULTS - ENRICHED DATA (2026-04-28)
// ============================================================================

// Query Execution Summary
export interface GapQueryExecution {
  number: number
  query: string
  status: 'Success' | 'Failed'
  uaeRelevance: 'Critical' | 'High' | 'Medium'
  sourceTier: string
}

export const gapQueryExecutions: GapQueryExecution[] = [
  { number: 1, query: 'UAE gap analysis coverage missing topics 2026', status: 'Success', uaeRelevance: 'Critical', sourceTier: 'TBD' },
  { number: 2, query: 'UAE new website discovery blog channel 2026', status: 'Success', uaeRelevance: 'Medium', sourceTier: 'TBD' },
  { number: 3, query: 'UAE trending topics emerging issues missing coverage 2026', status: 'Success', uaeRelevance: 'High', sourceTier: 'TBD' },
  { number: 4, query: 'UAE international media bureau changes journalist mobility 2026', status: 'Success', uaeRelevance: 'High', sourceTier: 'TBD' },
  { number: 5, query: 'UAE low volume topics under-reported issues 2026', status: 'Success', uaeRelevance: 'Critical', sourceTier: 'TBD' },
  { number: 6, query: 'UAE geographic coverage gaps regions under-represented 2026', status: 'Success', uaeRelevance: 'Medium', sourceTier: 'TBD' },
  { number: 7, query: 'UAE language coverage gaps Arabic English missing 2026', status: 'Success', uaeRelevance: 'High', sourceTier: 'TBD' },
  { number: 8, query: 'UAE platform coverage gaps social media under-represented 2026', status: 'Success', uaeRelevance: 'Critical', sourceTier: 'TBD' },
  { number: 9, query: 'UAE temporal gaps time periods missing coverage 2026', status: 'Success', uaeRelevance: 'High', sourceTier: 'TBD' },
  { number: 10, query: "What's missing from UAE media coverage stakeholder requirements 2026", status: 'Success', uaeRelevance: 'High', sourceTier: 'TBD' },
]

// Source Credibility Matrix
export interface GapSourceCredibility {
  sourceUrl: string
  tier: TierLevel | 'TBD'
  credibilityScore?: number
  type: string
  uaeRelevance: 'Critical' | 'High' | 'Medium'
}

export const gapSourceCredibilityMatrix: GapSourceCredibility[] = [
  { sourceUrl: 'compliance.waystone.com', tier: 'TBD', type: 'Regulatory Analysis', uaeRelevance: 'Critical' },
  { sourceUrl: 'practiceguides.chambers.com', tier: 'TBD', type: 'Legal Guide', uaeRelevance: 'Critical' },
  { sourceUrl: 'prnewswire.com', tier: 'TBD', type: 'Press Release', uaeRelevance: 'High' },
  { sourceUrl: 'dpc.org.ae', tier: 'TBD', type: 'Government', uaeRelevance: 'Critical' },
  { sourceUrl: 'undp.org', tier: 'TBD', type: 'International Org', uaeRelevance: 'High' },
  { sourceUrl: 'spglobal.com', tier: 'TBD', type: 'Ratings Agency', uaeRelevance: 'Critical' },
  { sourceUrl: 'csis.org', tier: 'TBD', type: 'Think Tank', uaeRelevance: 'High' },
  { sourceUrl: 'ispionline.it', tier: 'TBD', type: 'Think Tank', uaeRelevance: 'High' },
  { sourceUrl: 'globalmediainsight.com', tier: 'TBD', type: 'Media Research', uaeRelevance: 'Medium' },
  { sourceUrl: 'khaleejtimes.com', tier: 'TBD', type: 'Major Newspaper', uaeRelevance: 'High' },
  { sourceUrl: 'gulfnews.com', tier: 'TBD', type: 'Major Newspaper', uaeRelevance: 'High' },
  { sourceUrl: 'reuters.com', tier: 'TBD', type: 'Wire Service', uaeRelevance: 'Critical' },
  { sourceUrl: 'hoganlovells.com', tier: 'TBD', type: 'Law Firm', uaeRelevance: 'Critical' },
  { sourceUrl: 'pinsentmasons.com', tier: 'TBD', type: 'Law Firm', uaeRelevance: 'High' },
  { sourceUrl: 'middleeastbriefing.com', tier: 'TBD', type: 'Legal News', uaeRelevance: 'High' },
  { sourceUrl: 'newlandchase.com', tier: 'TBD', type: 'Immigration Specialist', uaeRelevance: 'Critical' },
  { sourceUrl: 'esanad.com', tier: 'TBD', type: 'Insurance Specialist', uaeRelevance: 'High' },
  { sourceUrl: 'irglobal.com', tier: 'TBD', type: 'Legal Network', uaeRelevance: 'High' },
  { sourceUrl: 'richmanassociate.ae', tier: 'TBD', type: 'Legal Consultancy', uaeRelevance: 'Medium' },
  { sourceUrl: 'obapr.com', tier: 'TBD', type: 'PR Agency', uaeRelevance: 'Medium' },
]

// Tier Definitions
export const tierDefinitions = [
  { tier: 'Tier 0', description: 'Official UAE Government (ICP, CMA, CBUAE, NCA)' },
  { tier: 'Tier 1', description: 'International Organizations (UNDP, World Bank, IMF)' },
  { tier: 'Tier 2', description: 'Major Media (Reuters, Bloomberg, FT, Guardian)' },
  { tier: 'Tier 3', description: 'Specialized Trade Publications (Chambers, MEED, Legal500)' },
  { tier: 'Tier 4', description: 'Industry Blogs, Company Websites, General Media' },
]

// Sentiment Analysis Matrix
export interface GapSentimentEntry {
  topic: string
  overallSentiment: string
  keyIndicators: string
  intensity: 'High' | 'Medium' | 'Critical'
}

export const gapSentimentMatrix: GapSentimentEntry[] = [
  { topic: 'Compliance Sector', overallSentiment: 'Negative/Cautionary', keyIndicators: 'Rising fines, certification gaps, personal liability', intensity: 'High' },
  { topic: 'Digital Transformation', overallSentiment: 'Positive/Optimistic', keyIndicators: 'AI adoption, payment innovation, e-commerce growth', intensity: 'High' },
  { topic: 'Economic Stress Signals', overallSentiment: 'Negative/Warning', keyIndicators: '37% property drop, war impact, exodus narrative', intensity: 'Critical' },
  { topic: 'Media Power Shifts', overallSentiment: 'Neutral/Transitional', keyIndicators: 'Regulation, licensing, leadership changes', intensity: 'Medium' },
  { topic: 'Arabic Language AI', overallSentiment: 'Positive/Progressive', keyIndicators: '$1M investment, sovereign capability building', intensity: 'High' },
  { topic: 'Child Digital Safety', overallSentiment: 'Cautious/Protective', keyIndicators: 'New law, platform accountability, behavioral concerns', intensity: 'High' },
  { topic: 'Immigration Policy', overallSentiment: 'Negative/Restrictive', keyIndicators: 'Grace period ended, fines reinstated', intensity: 'High' },
  { topic: 'Influencer Regulation', overallSentiment: 'Neutral/Corrective', keyIndicators: 'Licensing regime, compliance requirements', intensity: 'Medium' },
]

// UAE Relevance Assessment
export interface GapUAERelevanceEntry {
  category: string
  relevanceLevel: 'Critical' | 'High' | 'Medium'
  rationale: string
}

export const gapUAERelevanceAssessment: GapUAERelevanceEntry[] = [
  { category: 'Compliance Gaps', relevanceLevel: 'Critical', rationale: 'AED 1 billion fines, personal liability, regulatory shifts' },
  { category: 'Economic Stress', relevanceLevel: 'Critical', rationale: 'Gulf war impact, property weakness, exodus narrative' },
  { category: 'Child Digital Safety', relevanceLevel: 'Critical', rationale: 'New law effective Jan 2026, platform accountability' },
  { category: 'Immigration/Visa Changes', relevanceLevel: 'Critical', rationale: 'Grace period ended, immediate fines, operational impact' },
  { category: 'Media Regulation', relevanceLevel: 'High', rationale: 'Advertiser permits, influencer licensing, new frameworks' },
  { category: 'Arabic AI Development', relevanceLevel: 'High', rationale: '$1M Google funding, sovereign tech positioning' },
  { category: 'Payment Transformation', relevanceLevel: 'High', rationale: 'AI agents, crypto, digital identity - 2026 changes' },
  { category: 'Web/Digital Presence', relevanceLevel: 'Medium', rationale: 'E-commerce trends, marketing shifts' },
  { category: 'Geographic/Demographic', relevanceLevel: 'Medium', rationale: 'Population stats, urbanization data' },
  { category: 'Language/Cultural', relevanceLevel: 'Medium', rationale: 'Bilingual marketing, Arabic NLP gaps' },
]

// ============================================================================
// SECTION 1: UAE GAP ANALYSIS COVERAGE MISSING TOPICS
// ============================================================================

export interface UAERegulatoryChange {
  regulation: string
  effectiveDate: string
  keyChange: string
  penaltyImpact: string
  source: string
}

export const uaeRegulatoryChanges2026: UAERegulatoryChange[] = [
  { regulation: 'Federal Law 6/2025', effectiveDate: '2025', keyChange: 'AED 1B max administrative fine', penaltyImpact: '5x increase from AED 200M', source: 'LinkedIn/MENA Cyber Wire' },
  { regulation: 'CMA Establishment', effectiveDate: 'Jan 2026', keyChange: 'Replaced SCA', penaltyImpact: 'Market restructuring', source: 'Waystone' },
  { regulation: 'Travel Rule (VA)', effectiveDate: 'Jan 2026', keyChange: 'Unhosted wallet compliance', penaltyImpact: 'Mandatory for VASPs', source: 'Waystone' },
  { regulation: 'VARA Client Classification', effectiveDate: 'Jan 2026', keyChange: 'VASP requirements', penaltyImpact: 'Enhanced KYC', source: 'Waystone' },
  { regulation: 'FATF Post-Grey List', effectiveDate: '2026', keyChange: 'Real-time supervision', penaltyImpact: 'Continuous monitoring', source: 'ComplyFin' },
]

export interface CybersecurityCompliance {
  framework: string
  authority: string
  deadline: string
  keyRequirement: string
  penalty: string
}

export const cybersecurityComplianceRequirements: CybersecurityCompliance[] = [
  { framework: 'NCA Standards', authority: 'NCA', deadline: '2026', keyRequirement: 'Continuous compliance', penalty: 'AED 1B max' },
  { framework: 'DIFC Data Protection', authority: 'DIFC', deadline: 'Ongoing', keyRequirement: 'Audit trails', penalty: 'License revocation' },
  { framework: 'ADGM AML', authority: 'ADGM', deadline: 'Ongoing', keyRequirement: 'CDD/EDD', penalty: 'Personal liability' },
]

// ============================================================================
// SECTION 2: UAE NEW WEBSITE DISCOVERY BLOG CHANNEL
// ============================================================================

export interface UAEDigitalKPIs {
  metric: string
  value: string
  yearOverYear?: string
  source: string
}

export const uaeDigitalEconomyKPIs2026: UAEDigitalKPIs[] = [
  { metric: 'Social Media Users', value: '11.3M', yearOverYear: 'Stable (100% penetration)', source: 'Impala Intech' },
  { metric: 'Smartphone Usage Rate', value: '96%', yearOverYear: '+2%', source: 'Impala Intech' },
  { metric: 'Social Commerce Rate', value: '73%', yearOverYear: '+15%', source: 'Impala Intech' },
  { metric: 'E-commerce Market Size', value: '$9-17B', yearOverYear: '+25% projected', source: 'Impala Intech' },
  { metric: 'Online Product Research', value: '89%', yearOverYear: '+5%', source: 'Impala Intech' },
]

export interface DigitalMarketingChannel {
  channel: string
  engagementRate: string
  trend: string
  priority: string
}

export const digitalMarketingChannels: DigitalMarketingChannel[] = [
  { channel: 'Instagram', engagementRate: 'High', trend: 'Social commerce dominant', priority: 'Critical' },
  { channel: 'TikTok', engagementRate: 'Very High', trend: 'Growing rapidly', priority: 'High' },
  { channel: 'YouTube', engagementRate: 'High', trend: 'Long-form/shopping', priority: 'High' },
  { channel: 'LinkedIn', engagementRate: 'Medium', trend: 'B2B focus', priority: 'Medium' },
  { channel: 'Threads', engagementRate: 'Emerging', trend: '500% organic reach growth', priority: 'High' },
]

// ============================================================================
// SECTION 3: UAE TRENDING TOPICS EMERGING ISSUES
// ============================================================================

export interface PaymentTransformation2026 {
  change: string
  description: string
  status: string
  impact: string
}

export const paymentTransformation2026: PaymentTransformation2026[] = [
  { change: 'AI Agents', description: 'Shopping automation with Mastercard/Majid Al Futtaim pilot', status: 'Active', impact: 'High' },
  { change: 'Stablecoin Regulation', description: 'Crypto payments commercialization', status: 'In Progress', impact: 'High' },
  { change: 'Digital Identity Wallets', description: '80% consumers targeted by scams - verified aliases', status: 'In Progress', impact: 'Critical' },
  { change: 'Authentication Strengthening', description: 'AI agents require better verification', status: 'Pending', impact: 'Medium' },
  { change: 'Verified Aliases', description: 'Reducing crypto fraud', status: 'In Progress', impact: 'Medium' },
  { change: 'Biometric Checkout', description: 'Facial recognition for payments', status: 'Pilot', impact: 'Medium' },
]

export interface NonAITechTrend {
  technology: string
  marketSize: string
  uaeSpecific?: string
  trend: string
}

export const nonAITechTrendsME2026: NonAITechTrend[] = [
  { technology: 'Genomics', marketSize: '$1.2B MENA by 2027', uaeSpecific: '60% regional opportunity', trend: 'Scaling' },
  { technology: 'Sovereign Chips', marketSize: '$10M (Mastiska seed)', uaeSpecific: 'Abu Dhabi startup', trend: 'Early' },
  { technology: 'Nuclear Energy', marketSize: '3x capacity by 2035', uaeSpecific: 'SMR for data centers', trend: 'Growing' },
  { technology: 'Quantum Computing', marketSize: 'First industrial pilots', uaeSpecific: 'Energy sector', trend: 'Emerging' },
  { technology: 'Geopatriation', marketSize: 'State-driven', uaeSpecific: 'Sovereign clouds', trend: 'Critical' },
]

// ============================================================================
// SECTION 4: UAE INTERNATIONAL MEDIA BUREAU CHANGES
// ============================================================================

export interface MediaRelationsMetrics {
  metric: string
  value: string
  implication: string
}

export const mediaRelationsMetrics: MediaRelationsMetrics[] = [
  { metric: 'Journalist Response Rate', value: '~3%', implication: 'Highly competitive' },
  { metric: 'Email Preference', value: '93%', implication: 'Digital-first pitch' },
  { metric: 'Personalization Impact', value: '77%', implication: 'Customization critical' },
  { metric: 'Original Research Request', value: '55%', implication: 'Data-driven stories win' },
  { metric: 'Press Release Preference', value: '72%', implication: 'News announcements valued' },
  { metric: 'Exclusive Story Value', value: '57%', implication: 'Exclusives drive coverage' },
  { metric: 'Weekly Pitches Received', value: '25% receive 100+', implication: 'Volume challenge' },
  { metric: 'Best Pitch Day', value: 'Thursday (26% open rate)', implication: 'Timing matters' },
  { metric: 'Optimal Pitch Length', value: 'Under 200 words', implication: 'Concise wins' },
]

export interface MediaTierClassification {
  tier: string
  international?: string
  regional?: string
  local?: string
}

export const mediaTierClassification: MediaTierClassification[] = [
  { tier: 'Tier 1', international: 'Bloomberg ME, Reuters, Forbes ME, FT ME, Fortune', regional: 'The National, Arabian Business, Gulf Business, Arab News', local: '—' },
  { tier: 'Tier 2', international: '—', regional: '—', local: 'Gulf News, Khaleej Times, Entrepreneur ME' },
  { tier: 'Tier 3/Trade', international: '—', regional: '—', local: 'Construction Week, MEED, MENA Fintech, Arab Health, Wamda' },
]

export interface ArabMediaSummit2026 {
  attribute: string
  value: string
}

export const arabMediaSummit2026: ArabMediaSummit2026[] = [
  { attribute: 'Dates', value: 'March 31 – April 2, 2026' },
  { attribute: 'Location', value: 'Dubai World Trade Centre' },
  { attribute: 'Patronage', value: 'Sheikh Mohammed bin Rashid Al Maktoum' },
  { attribute: 'Forums', value: '~10 specialized' },
  { attribute: 'Awards', value: 'Arab Media Award (25th/silver jubilee), Ibda\'a (10th), Arab Social Media Influencers (6th)' },
  { attribute: 'International Partners', value: 'Financial Times, Reuters' },
  { attribute: 'Strategic Partners', value: 'DP World, DEWA, American Hospital, ENOC, Dubai Chambers, Emirates, Emirates NBD, du, RTA, UAE University' },
]

// ============================================================================
// SECTION 5: UAE LOW VOLUME TOPICS UNDER-REPORTED ISSUES
// ============================================================================

export interface DubaiPropertyMarketQ1_2026 {
  metric: string
  value: string
  change: string
  source: string
}

export const dubaiPropertyMarketQ1_2026: DubaiPropertyMarketQ1_2026[] = [
  { metric: 'Transaction Volume (YoY)', value: '—', change: '-37%', source: 'Reuters' },
  { metric: 'Transaction Volume (MoM)', value: '—', change: '-49%', source: 'Goldman Sachs' },
  { metric: 'Period', value: 'First 12 days March 2026', change: '—', source: 'Reuters' },
]

export interface GCCConflictEconomicImpact {
  indicator: string
  value: string
  source: string
}

export const gccConflictEconomicImpact: GCCConflictEconomicImpact[] = [
  { indicator: 'Economic Growth Reversal', value: '>1 year', source: 'UNDP' },
  { indicator: 'Export Disruption Duration', value: 'Months', source: 'S&P Global' },
  { indicator: 'Strait of Hormuz Impact', value: 'Significant shortage', source: 'S&P Global' },
  { indicator: 'Insurance Delays', value: 'Factor in base case', source: 'S&P Global' },
]

// ============================================================================
// SECTION 6: UAE GEOGRAPHIC COVERAGE GAPS REGIONS UNDER-REPRESENTED
// ============================================================================

export interface UAEPopulation2026 {
  metric: string
  value: string
  share?: string
}

export const uaePopulation2026: UAEPopulation2026[] = [
  { metric: 'Total Population', value: '11.57 million' },
  { metric: 'Male', value: '7.36 million', share: '63.60%' },
  { metric: 'Female', value: '4.21 million', share: '36.40%' },
  { metric: 'Expat', value: '10.24 million', share: '88.50%' },
  { metric: 'Emirati', value: '1.33 million', share: '11.50%' },
  { metric: 'Indian', value: '4.39 million', share: '37.96%' },
  { metric: 'Pakistani', value: '1.94 million', share: '16.72%' },
  { metric: 'Bangladeshi', value: '0.85 million', share: '7.38%' },
  { metric: 'Filipino', value: '0.80 million', share: '6.89%' },
]

export interface PopulationByEmirates2026 {
  emirate: string
  population: string
}

export const populationByEmirates2026: PopulationByEmirates2026[] = [
  { emirate: 'Dubai', population: '4,471,000' },
  { emirate: 'Abu Dhabi', population: '4,135,985' },
  { emirate: 'Sharjah', population: '1,808,000' },
  { emirate: 'Ajman', population: '504,846' },
  { emirate: 'Ras Al Khaimah', population: '345,000' },
  { emirate: 'Fujairah', population: '202,667' },
  { emirate: 'Umm Al Quwain', population: '49,159' },
]

export interface AgeDistribution2026 {
  ageGroup: string
  percentage: string
  population: string
}

export const ageDistribution2026: AgeDistribution2026[] = [
  { ageGroup: '0-14 years', percentage: '15.91%', population: '1.84 million' },
  { ageGroup: '15-24 years', percentage: '12.53%', population: '1.45 million' },
  { ageGroup: '25-54 years', percentage: '64.39%', population: '7.45 million' },
  { ageGroup: '55-64 years', percentage: '5.34%', population: '0.62 million' },
  { ageGroup: '65+ years', percentage: '1.83%', population: '0.21 million' },
]

export interface RegionalStrainPoint {
  strainPoint: string
  issue: string
  impact: string
}

export const regionalStrainPoints: RegionalStrainPoint[] = [
  { strainPoint: 'Yemen', issue: 'Emirati-backed STC vs Saudi pushback', impact: 'Deep structural rift' },
  { strainPoint: 'Somalia', issue: 'Agreements cancelled after Somaliland recognition', impact: 'Diplomatic tension' },
  { strainPoint: 'Sudan', issue: 'Alleged arms flights disguised as humanitarian aid', impact: 'International status damage' },
  { strainPoint: 'Saudi Relations', issue: 'Competing visions on Yemen, Sudan, Syria, Gaza', impact: 'Deep structural rift' },
]

// ============================================================================
// SECTION 7: UAE LANGUAGE COVERAGE GAPS ARABIC ENGLISH
// ============================================================================

export interface ArabicAIGapMetrics {
  attribute: string
  value: string
}

export const arabicAIGapMetrics: ArabicAIGapMetrics[] = [
  { attribute: 'Researcher', value: 'Professor Thamar Solorio, VP at MBZUAI' },
  { attribute: 'Google Funding', value: '$1 million' },
  { attribute: 'Arabic Speakers', value: '400+ million across 26+ countries' },
  { attribute: 'Core Challenge', value: 'Most training data from news/religious texts, missing everyday speech' },
  { attribute: 'Dialects', value: '"bas" = "only" (Egypt), "but" (Levant), "enough" (Gulf)' },
  { attribute: 'Previous MBZUAI Systems', value: 'Jais 2, K2 Think' },
]

export interface DictionaryGapEntry {
  term: string
  meaningMissing: string
  standardDefinition: string
}

export const dictionaryGapsIdentified: DictionaryGapEntry[] = [
  { term: 'Faraqa', meaningMissing: 'spreading flour', standardDefinition: 'only "separating"' },
  { term: 'Shadd', meaningMissing: 'syrup thickening', standardDefinition: '"strength, bindings, resisting women"' },
  { term: 'Fajj (boil)', meaningMissing: 'Aleppan women\'s usage', standardDefinition: 'absent' },
  { term: 'Milwaq (spatula)', meaningMissing: 'missing', standardDefinition: 'absent from major dictionaries' },
  { term: 'Halawa', meaningMissing: 'sugar wax for hair removal', standardDefinition: 'only in Hinds & Badawi' },
  { term: 'Shira (Iraqi)', meaningMissing: 'sugar wax', standardDefinition: 'defined only as "refreshment"' },
]

// ============================================================================
// SECTION 8: UAE PLATFORM COVERAGE GAPS SOCIAL MEDIA
// ============================================================================

export interface ChildDigitalSafetyLaw {
  attribute: string
  value: string
}

export const childDigitalSafetyLaw: ChildDigitalSafetyLaw[] = [
  { attribute: 'Legislation', value: 'Federal Decree-Law No. 26/2025' },
  { attribute: 'Effective Date', value: 'January 1, 2026' },
  { attribute: 'Compliance Deadline', value: 'December 31, 2026' },
  { attribute: 'Covered Platforms', value: 'All digital platforms targeting UAE users' },
  { attribute: 'Age Verification', value: 'Mandatory' },
  { attribute: 'Content Filtering', value: 'Highest levels for children\'s accounts' },
  { attribute: 'Data Collection (under 13)', value: 'Ban without parental consent' },
  { attribute: 'Governance', value: 'Child Digital Safety Council under Minister of Family' },
  { attribute: 'International Alignment', value: 'Australia\'s under-16 ban (Dec 2025), UK\'s Online Safety Act (2023)' },
]

export interface ChildDigitalSafetyCompliance {
  requirement: string
  deadline: string
  penalty: string
}

export const childDigitalSafetyCompliance: ChildDigitalSafetyCompliance[] = [
  { requirement: 'Age Verification Systems', deadline: 'Dec 31, 2026', penalty: 'Fines, service restrictions' },
  { requirement: 'Content Filtering', deadline: 'Dec 31, 2026', penalty: 'Suspension within UAE' },
  { requirement: 'Data Collection Ban (<13)', deadline: 'Jan 1, 2026', penalty: 'Immediate enforcement' },
  { requirement: 'Parental Controls', deadline: 'Dec 31, 2026', penalty: 'Audit/corrective action' },
  { requirement: 'Transparency Reporting', deadline: 'Ongoing', penalty: 'Mandatory' },
]

// ============================================================================
// SECTION 9: UAE TEMPORAL GAPS TIME PERIODS MISSING COVERAGE
// ============================================================================

export interface GracePeriodTimeline {
  date: string
  event: string
}

export const gracePeriodTimeline: GracePeriodTimeline[] = [
  { date: 'February 28, 2026', event: 'Grace period start (one month duration)' },
  { date: 'March 31, 2026', event: 'Grace period end' },
  { date: 'April 1, 2026', event: 'Standard rules reinstated' },
]

export interface VisaFineStructure {
  visaType: string
  dailyFine: string
  exitPermitFee: string
  tenDayTotal: string
}

export const visaFineStructure: VisaFineStructure[] = [
  { visaType: 'Visit/Tourist', dailyFine: '50 AED', exitPermitFee: '200-300 AED', tenDayTotal: '~700-800 AED' },
  { visaType: 'Residence', dailyFine: 'Higher', exitPermitFee: 'TBD', tenDayTotal: 'TBD' },
]

export interface April2026PolicyChanges {
  policyArea: string
  change: string
  effectiveDate: string
  impact: string
}

export const april2026PolicyChanges: April2026PolicyChanges[] = [
  { policyArea: 'Visa Grace Period', change: 'Ended', effectiveDate: 'March 31, 2026', impact: 'Immediate fines' },
  { policyArea: 'School Distance Learning', change: 'Extended', effectiveDate: 'Until April 17', impact: 'Ongoing remote' },
  { policyArea: 'Banking Authentication', change: 'SMS OTP discontinued', effectiveDate: 'March 2026', impact: 'App-based required' },
  { policyArea: 'India PAN-Aadhaar', change: 'Stricter documentation', effectiveDate: 'April 1, 2026', impact: 'Additional ID required' },
  { policyArea: 'Dubai Miracle Garden', change: 'Resident rate', effectiveDate: 'April 1-May 31', impact: 'Dh30 entry' },
]

// ============================================================================
// SECTION 10: STAKEHOLDER REQUIREMENTS MISSING FROM COVERAGE
// ============================================================================

export interface InfluencerPermitData {
  attribute: string
  value: string
}

export const influencerPermitData: InfluencerPermitData[] = [
  { attribute: 'Effective Date', value: 'February 1, 2026' },
  { attribute: 'Deadline', value: 'January 31, 2026' },
  { attribute: 'Issuing Authority', value: 'UAE Media Council' },
  { attribute: 'Permit Cost', value: 'Free first 3 years (2026-2028)' },
  { attribute: 'Resident Permit Validity', value: '1 year (renewable)' },
  { attribute: 'Visitor Permit Validity', value: '3 months (renewable once)' },
  { attribute: 'Minimum Age', value: '18 years (exceptions 15-17 with parental consent)' },
  { attribute: 'Permits Issued', value: '3,000+ within months' },
  { attribute: 'Nationalities Represented', value: '80+' },
]

export interface InfluencerPermitActivity {
  activity: string
  permitRequired: string
  fee: string
  penalty: string
}

export const influencerPermitComplianceMatrix: InfluencerPermitActivity[] = [
  { activity: 'Brand sponsorships', permitRequired: 'Yes', fee: 'Free 2026-2028', penalty: 'AED 5K-1M' },
  { activity: 'Paid/gifted content', permitRequired: 'Yes', fee: 'Free 2026-2028', penalty: 'AED 5K-1M' },
  { activity: 'Affiliate/referral marketing', permitRequired: 'Yes', fee: 'Free 2026-2028', penalty: 'AED 5K-1M' },
  { activity: 'Own product promotion', permitRequired: 'No', fee: '—', penalty: '—' },
  { activity: 'Educational content (under 18)', permitRequired: 'No', fee: '—', penalty: '—' },
]

export interface UAEVisaPenaltyStructure {
  overstayType: string
  dailyFine: string
  exitPermit: string
  totalTenDays: string
}

export const uaeVisaPenaltyStructure: UAEVisaPenaltyStructure[] = [
  { overstayType: 'Tourist/Visit', dailyFine: '50 AED', exitPermit: '200-300 AED', totalTenDays: '~700-800 AED' },
  { overstayType: 'Residence', dailyFine: 'Higher', exitPermit: 'TBD', totalTenDays: 'TBD' },
  { overstayType: 'Undocumented', dailyFine: 'Travel ban possible', exitPermit: '—', totalTenDays: '—' },
]

// ============================================================================
// ENTITY REGISTRY
// ============================================================================

export interface GapAnalysisOrganization {
  entity: string
  type: string
  role: string
  uaeRelevance: 'Critical' | 'High' | 'Medium'
}

export const gapAnalysisOrganizations: GapAnalysisOrganization[] = [
  { entity: 'UAE Capital Markets Authority (CMA)', type: 'Regulatory', role: 'Replaced SCA, Jan 2026', uaeRelevance: 'Critical' },
  { entity: 'Securities and Commodities Authority (SCA)', type: 'Regulatory', role: 'Replaced by CMA', uaeRelevance: 'High' },
  { entity: 'UAE Media Council', type: 'Regulatory', role: 'Influencer licensing', uaeRelevance: 'Critical' },
  { entity: 'Child Digital Safety Council', type: 'Regulatory', role: 'Child online protection', uaeRelevance: 'Critical' },
  { entity: 'Federal Authority for Identity, Citizenship, Customs & Port Security (ICP)', type: 'Regulatory', role: 'Visa/immigration', uaeRelevance: 'Critical' },
  { entity: 'Central Bank of UAE (CBUAE)', type: 'Regulatory', role: 'Banking/payments', uaeRelevance: 'Critical' },
  { entity: 'NCA', type: 'Regulatory', role: 'Cybersecurity', uaeRelevance: 'High' },
  { entity: 'DIFC', type: 'Free Zone', role: 'Financial services', uaeRelevance: 'High' },
  { entity: 'ADGM', type: 'Free Zone', role: 'Financial services', uaeRelevance: 'High' },
  { entity: 'Dubai Press Club (DPC)', type: 'Government', role: 'Media events', uaeRelevance: 'High' },
  { entity: 'National Media Office', type: 'Government', role: 'BRIDGE initiative', uaeRelevance: 'High' },
  { entity: 'Mohamed bin Zayed University of AI (MBZUAI)', type: 'Academic', role: 'Arabic AI research', uaeRelevance: 'Critical' },
  { entity: 'BRIDGE Foundation', type: 'Non-profit', role: 'Media innovation', uaeRelevance: 'Medium' },
  { entity: 'VARA', type: 'Regulatory', role: 'Virtual assets', uaeRelevance: 'High' },
  { entity: 'DFSA', type: 'Regulatory', role: 'Dubai financial services', uaeRelevance: 'High' },
  { entity: 'TDRA', type: 'Regulatory', role: 'Telecommunications', uaeRelevance: 'Medium' },
]

export interface GapAnalysisKeyIndividual {
  name: string
  role: string
  organization: string
  context: string
}

export const gapAnalysisKeyIndividuals: GapAnalysisKeyIndividual[] = [
  { name: 'Professor Thamar Solorio', role: 'VP Research', organization: 'MBZUAI', context: '$1M Google funding' },
  { name: 'Sheikh Mohammed bin Rashid Al Maktoum', role: 'Vice President/PM', organization: 'UAE Government', context: 'Arab Media Summit patron' },
  { name: 'Yossi Matias', role: 'VP', organization: 'Google', context: 'Arabic AI funding' },
  { name: 'Vivek Radhakrishnan', role: 'Senior Immigration Manager', organization: 'Newland Chase', context: 'Grace period analysis' },
]

export interface GapAnalysisLaw {
  law: string
  date: string
  keyProvision: string
}

export const gapAnalysisLaws: GapAnalysisLaw[] = [
  { law: 'Federal Law 6/2025', date: '2025', keyProvision: 'AED 1B max AML fine' },
  { law: 'Federal Decree-Law 10/2025', date: '2025', keyProvision: 'Arms proliferation financing' },
  { law: 'Federal Decree-Law 26/2025', date: '2025', keyProvision: 'Child Digital Safety Law' },
  { law: 'Federal Decree-Law 55/2023', date: '2023', keyProvision: 'Advertiser permit legal basis' },
  { law: 'Federal Media Law 15/2020', date: '2020', keyProvision: 'Media regulations' },
  { law: 'Cybercrime Law 34/2021', date: '2021', keyProvision: 'Online content penalties' },
  { law: 'Family Law Reform', date: '2026', keyProvision: 'Marriage age, custody' },
]

// ============================================================================
// THEMATIC SUMMARY
// ============================================================================

export interface ThematicSummaryEntry {
  theme: string
  finding: string
  uaeRelevance: 'Critical' | 'High' | 'Medium'
  sentiment: string
}

export const thematicSummary: ThematicSummaryEntry[] = [
  { theme: 'Compliance Gaps', finding: 'Insurance, AML, cybersecurity compliance sectors showing significant certification vs. compliance gaps', uaeRelevance: 'Critical', sentiment: 'Negative' },
  { theme: 'Digital Transformation', finding: 'Website, social commerce, payment systems all undergoing rapid 2026 transformation', uaeRelevance: 'High', sentiment: 'Positive' },
  { theme: 'Media Power Shifts', finding: 'Leadership changes at media authorities; journalist mobility; new licensing regimes', uaeRelevance: 'High', sentiment: 'Neutral' },
  { theme: 'Economic Stress Signals', finding: 'Exodus narrative, real estate weakness, war impact under-reported in mainstream', uaeRelevance: 'Critical', sentiment: 'Negative' },
  { theme: 'Arabic Language AI', finding: 'Major investments to close Arabic AI gap; $1M Google funding for MBZUAI research', uaeRelevance: 'High', sentiment: 'Positive' },
  { theme: 'Child Digital Safety', finding: 'Comprehensive new law reshaping platform accountability and Gulf advertising', uaeRelevance: 'Critical', sentiment: 'Cautious' },
  { theme: 'Immigration Policy Shifts', finding: 'Grace period ending marks major policy change; under-covered implications', uaeRelevance: 'High', sentiment: 'Negative' },
  { theme: 'Influencer Regulation', finding: 'Mandatory advertiser permits with AED 10,000-1M fines creating stakeholder compliance gap', uaeRelevance: 'High', sentiment: 'Neutral/Corrective' },
]

// ============================================================================
// DASHBOARD-READY KPI SUMMARY
// ============================================================================

// Economic Indicators
export interface GapEconomicKPIs {
  kpi: string
  currentValue: string
  trend: string
  source: string
  uaeRelevance: 'Critical' | 'High' | 'Medium'
}

export const gapEconomicKPIs: GapEconomicKPIs[] = [
  { kpi: 'Dubai Property Transaction Volume (YoY)', currentValue: '-37%', trend: 'Declining', source: 'Reuters', uaeRelevance: 'Critical' },
  { kpi: 'Dubai Property Transaction Volume (MoM)', currentValue: '-49%', trend: 'Declining', source: 'Goldman Sachs', uaeRelevance: 'Critical' },
  { kpi: 'E-commerce Market Size 2026', currentValue: '$9-17B', trend: 'Growing', source: 'Impala Intech', uaeRelevance: 'High' },
  { kpi: 'UAE Population', currentValue: '11.57M', trend: '+0.22M', source: 'GMI', uaeRelevance: 'Medium' },
  { kpi: 'Expat Share', currentValue: '88.5%', trend: 'Stable', source: 'GMI', uaeRelevance: 'Medium' },
]

// Regulatory Compliance KPIs
export interface GapRegulatoryKPIs {
  kpi: string
  value: string
  change: string
  source: string
  uaeRelevance: 'Critical' | 'High' | 'Medium'
}

export const gapRegulatoryKPIs: GapRegulatoryKPIs[] = [
  { kpi: 'Max Administrative Fine (AML)', value: 'AED 1B', change: '5x increase', source: 'LinkedIn/MENA', uaeRelevance: 'Critical' },
  { kpi: 'Max Media Law Fine', value: 'AED 500K', change: 'Stable', source: 'Obapr', uaeRelevance: 'High' },
  { kpi: 'Child Safety Compliance Deadline', value: 'Dec 31, 2026', change: 'Active', source: 'Hogan Lovells', uaeRelevance: 'Critical' },
  { kpi: 'Influencer Permit Deadline', value: 'Jan 31, 2026', change: 'Passed', source: 'Communicate', uaeRelevance: 'High' },
]

// Digital Economy KPIs
export interface GapDigitalEconomyKPIs {
  kpi: string
  value: string
  context: string
  source: string
  uaeRelevance: 'Critical' | 'High' | 'Medium'
}

export const gapDigitalEconomyKPIs: GapDigitalEconomyKPIs[] = [
  { kpi: 'Social Media Users', value: '11.3M', context: '100% penetration', source: 'Impala Intech', uaeRelevance: 'Medium' },
  { kpi: 'Smartphone Daily Usage', value: '96%', context: 'Population', source: 'Impala Intech', uaeRelevance: 'Medium' },
  { kpi: 'Social Commerce Rate', value: '73%', context: 'Past year', source: 'Impala Intech', uaeRelevance: 'High' },
  { kpi: 'Online Product Research', value: '89%', context: 'Pre-purchase', source: 'Impala Intech', uaeRelevance: 'Medium' },
]

// Demographics KPIs
export interface GapDemographicsKPIs {
  kpi: string
  value: string
  source: string
  uaeRelevance: 'Critical' | 'High' | 'Medium'
}

export const gapDemographicsKPIs: GapDemographicsKPIs[] = [
  { kpi: 'Median Age', value: '31.6 years', source: 'GMI', uaeRelevance: 'Medium' },
  { kpi: 'Indian Expat Population', value: '4.39M (37.96%)', source: 'GMI', uaeRelevance: 'High' },
  { kpi: 'Pakistani Expat Population', value: '1.94M (16.72%)', source: 'GMI', uaeRelevance: 'Medium' },
  { kpi: 'UAE Growth Rate', value: '5.6%', source: 'Geofactbook', uaeRelevance: 'High' },
]

// ============================================================================
// URL CONTENT SUMMARY REGISTRY
// ============================================================================

export interface GapURLContentSummary {
  url: string
  contentSummary: string
  keyExtracts: string
  status: 'Success' | 'Failed' | 'Blocked'
}

export const gapURLContentSummaries: GapURLContentSummary[] = [
  { url: 'gulfnews.com', contentSummary: 'Payment transformation 2026', keyExtracts: '80% scam targeting; 160B transactions analyzed; AI agents pilot', status: 'Success' },
  { url: 'coverb.ae', contentSummary: 'Insurance trends affluent residents', keyExtracts: 'Digital transformation; regulatory changes 2024; emerging risks', status: 'Success' },
  { url: 'china-briefing.com', contentSummary: 'Non-AI tech trends ME 2026', keyExtracts: '$1.2B genomics; $10M Mastiska; 3x nuclear capacity by 2035', status: 'Success' },
  { url: 'obapr.com', contentSummary: 'Media relations strategy', keyExtracts: '3% journalist response; 93% email preference; tier classification', status: 'Success' },
  { url: 'dpc.org.ae', contentSummary: 'Arab Media Summit 2026', keyExtracts: 'March 31-April 2; 10 forums; FT/Reuters partnerships', status: 'Success' },
  { url: 'prnewswire.com', contentSummary: 'BRIDGE initiative', keyExtracts: 'UAE National Media Office; non-profit foundation; Dec 8-10 event', status: 'Success' },
  { url: 'homeland.ae', contentSummary: 'Advertiser permit law', keyExtracts: 'Feb 1, 2026; 3,000+ permits; free first 3 years', status: 'Success' },
  { url: 'newlandchase.com', contentSummary: 'Grace period ending', keyExtracts: 'March 31, 2026; ICP confirmed; humanitarian basis', status: 'Success' },
  { url: 'middleeastbriefing.com', contentSummary: 'Child digital safety advertising impact', keyExtracts: 'Behavioral to contextual; household targeting rise', status: 'Success' },
  { url: 'hoganlovells.com', contentSummary: 'Child digital safety law', keyExtracts: 'Federal Decree-Law 26/2025; Jan 1, 2026 effective', status: 'Success' },
  { url: 'pinsentmasons.com', contentSummary: 'Child safety legislation', keyExtracts: 'Dec 31, 2026 compliance; TDRA oversight', status: 'Success' },
  { url: 'esanad.com', contentSummary: 'Health insurance grace period myth', keyExtracts: 'Coverage ends on expiry date; 12% medical inflation', status: 'Success' },
  { url: 'visahq.com', contentSummary: 'ICP residency rules', keyExtracts: 'April 1, 2026; standard rules reinstated', status: 'Success' },
  { url: 'richmanassociate.ae', contentSummary: 'Influencer advertiser permit', keyExtracts: 'Feb 1, 2026; AED 10,000 fine; free 3 years', status: 'Success' },
  { url: 'communicateonline.me', contentSummary: 'Influencer fines', keyExtracts: 'AED 5K-1M content violations; AED 10K misleading', status: 'Success' },
  { url: 'viacondigital.ae', contentSummary: 'Web design UAE 2026', keyExtracts: 'AI personalization; PWAs; Motion UI', status: 'Success' },
  { url: 'lexis.ae', contentSummary: 'Child digital safety law', keyExtracts: 'Platforms affected: TikTok, Twitch, Snapchat', status: 'Success' },
  { url: 'undp.org', contentSummary: 'Arab states economic reversal', keyExtracts: '>1 year growth reversed; conflict impact', status: 'Success' },
  { url: 'spglobal.com', contentSummary: 'GCC downstream impact', keyExtracts: 'Months-long disruption; insurance delays', status: 'Success' },
  { url: 'geofactbook.com', contentSummary: 'UAE urbanization', keyExtracts: '4.91% land area; 2.9% increase from 2025', status: 'Success' },
  { url: 'csis.org', contentSummary: 'UAE global partner analysis', keyExtracts: '$100B oil exports; $100B China trade; <1/3 GDP from hydrocarbons', status: 'Success' },
  { url: 'ispionline.it', contentSummary: 'UAE regional strain', keyExtracts: 'Yemen/Somalia/Sudan tensions; structural Saudi rift', status: 'Success' },
  { url: 'sdgtransformationcenter.org', contentSummary: 'Arab SDG Index 2026', keyExtracts: '60.6 regional score; UAE above average', status: 'Success' },
  { url: 'globalmediainsight.com', contentSummary: 'UAE population stats', keyExtracts: '11.57M total; 4.47M Dubai; 4.14M Abu Dhabi', status: 'Success' },
  { url: 'khaleejtimes.com', contentSummary: 'MBZUAI Google funding', keyExtracts: '$1M; Professor Thamar Solorio; 400M Arabic speakers', status: 'Success' },
  { url: 'al-fanarmedia.org', contentSummary: 'Arabic lexicography bias', keyExtracts: '240 missing terms from cooking videos; men-authored', status: 'Success' },
  { url: 'gulfnews.com/april-2026', contentSummary: 'April 2026 updates', keyExtracts: 'Distance learning until April 17; SMS OTP ended', status: 'Success' },
  { url: 'zamitours.ae', contentSummary: 'Visa fine structure', keyExtracts: '50 AED daily; 200-300 AED exit permit', status: 'Success' },
  { url: 'labeeb.ae', contentSummary: 'Social media trends 2026', keyExtracts: 'Threads rise; 500% organic reach; 3x Arabic podcasts', status: 'Success' },
  { url: 'compliance.waystone.com', contentSummary: 'Domain blocked', keyExtracts: 'Alternative: LinkedIn/MENA Cyber Wire', status: 'Blocked' },
]

// ============================================================================
// METHODOLOGY NOTE
// ============================================================================

export const gapAnalysisMetadata = {
  generatedDate: '2026-04-27',
  enrichedDate: '2026-04-28',
  querySet: '12-8 Gap Analysis',
  sourceFile: 'micro-queries/part-12/12-8-gap-analysis.md',
  totalUrlsProcessed: 50,
  successfulFetches: 29,
  structuredDataTables: '25+',
  entityRegistryEntries: '40+',
}

// ============================================================================
// OVERVIEW DATA OBJECT
// ============================================================================

export const gapAnalysisOverview = {
  metadata: gapAnalysisMetadata,
  queriesExecuted: gapQueryExecutions,
  sourceCredibilityMatrix: gapSourceCredibilityMatrix,
  tierDefinitions: tierDefinitions,
  sentimentMatrix: gapSentimentMatrix,
  uaeRelevanceAssessment: gapUAERelevanceAssessment,
  thematicSummary: thematicSummary,
  economicKPIs: gapEconomicKPIs,
  regulatoryKPIs: gapRegulatoryKPIs,
  digitalEconomyKPIs: gapDigitalEconomyKPIs,
  demographicsKPIs: gapDemographicsKPIs,
  urlContentSummaries: gapURLContentSummaries,
}
