/**
 * Sentiment Research Data (9-2, 9-5, 9-7, 9-8)
 *
 * Data extracted from:
 * - MD file 9-2-negative-sentiment-results.md (Negative Sentiment)
 * - MD file 9-5-controversy-debate-results.md (Controversy & Debate)
 * - MD file 9-7-praise-endorsement-results.md (Praise & Endorsement)
 * - MD file 9-8-sarcasm-irony-results.md (Sarcasm & Irony Detection)
 * UAE National Digital Intelligence Platform — Sentiment Coverage
 */

import {
  TierLevel,
  AlertLevel,
  SentimentBreakdown,
  CredibilityScore,
  SourceReference,
  UAERelevance,
  TrendData,
  KeyFinding,
} from './types'

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface NegativeSentimentOverview {
  researchCompilationDate: string
  totalCategories: number
  totalSourcesConsulted: number
  temporalCoverage: string
  query: string
}

export const negativeSentimentOverview: NegativeSentimentOverview = {
  researchCompilationDate: '2026-04-27',
  totalCategories: 16,
  totalSourcesConsulted: 60,
  temporalCoverage: '2009-2026',
  query: '"UAE" AND ("terrible" OR "فظيع" OR "horrible" OR "مروع" OR "worst" OR "أسوأ" OR "awful" OR "سيئ")',
}

// ============================================================================
// SOURCE CREDIBILITY MATRIX
// ============================================================================

export interface SourceCredibilityEntry {
  source: string
  tier: TierLevel
  type: string
  credibilityScore: number
}

export const negativeSourceCredibilityMatrix: SourceCredibilityEntry[] = [
  { source: 'Amnesty International', tier: 1, type: 'Human Rights NGO', credibilityScore: 10 },
  { source: 'Human Rights Watch', tier: 1, type: 'Human Rights NGO', credibilityScore: 10 },
  { source: 'U.S. State Department', tier: 1, type: 'Government Report', credibilityScore: 9 },
  { source: 'Walk Free Foundation', tier: 1, type: 'Modern Slavery NGO', credibilityScore: 9 },
  { source: 'UN Special Rapporteurs', tier: 1, type: 'UN Body', credibilityScore: 9 },
  { source: 'Transparency International', tier: 1, type: 'Anti-Corruption NGO', credibilityScore: 9 },
  { source: 'Cato Institute', tier: 2, type: 'Think Tank', credibilityScore: 8 },
  { source: 'The Atlantic', tier: 2, type: 'News Media', credibilityScore: 8 },
  { source: 'Wikipedia', tier: 2, type: 'Encyclopedia', credibilityScore: 6 },
  { source: 'The Guardian', tier: 2, type: 'News Media', credibilityScore: 7 },
  { source: 'Middle East Eye', tier: 2, type: 'News Media', credibilityScore: 7 },
  { source: 'DW News', tier: 2, type: 'News Media', credibilityScore: 7 },
  { source: 'Metro UK / The London Economic', tier: 3, type: 'Tabloid Media', credibilityScore: 5 },
  { source: 'LinkedIn', tier: 3, type: 'Professional Network', credibilityScore: 5 },
  { source: 'Reddit', tier: 4, type: 'Social Media', credibilityScore: 3 },
  { source: 'YouTube', tier: 4, type: 'Social Media', credibilityScore: 3 },
  { source: 'TikTok', tier: 4, type: 'Social Media', credibilityScore: 2 },
  { source: 'TripAdvisor', tier: 4, type: 'Review Platform', credibilityScore: 4 },
]

// ============================================================================
// UAE RELEVANCE ASSESSMENT
// ============================================================================

export interface UAERelevanceAssessmentEntry {
  category: string
  uaeRelevance: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  severityScore: number
}

export const uaeRelevanceAssessment: UAERelevanceAssessmentEntry[] = [
  { category: 'Modern Slavery / Kafala System', uaeRelevance: 'CRITICAL', severityScore: 10 },
  { category: 'Human Rights Violations', uaeRelevance: 'CRITICAL', severityScore: 10 },
  { category: 'Labor Exploitation', uaeRelevance: 'CRITICAL', severityScore: 10 },
  { category: 'Corruption', uaeRelevance: 'HIGH', severityScore: 9 },
  { category: 'Authoritarianism', uaeRelevance: 'HIGH', severityScore: 9 },
  { category: 'Racism/Discrimination', uaeRelevance: 'HIGH', severityScore: 8 },
  { category: 'Military Interventions (Yemen)', uaeRelevance: 'HIGH', severityScore: 8 },
  { category: 'Arrests for Online Criticism', uaeRelevance: 'HIGH', severityScore: 8 },
  { category: 'Double Standards/Hypocrisy', uaeRelevance: 'HIGH', severityScore: 8 },
  { category: 'Air Pollution / Environment', uaeRelevance: 'HIGH', severityScore: 8 },
  { category: 'Fake/Artificial City', uaeRelevance: 'MEDIUM', severityScore: 6 },
  { category: 'Road Safety', uaeRelevance: 'MEDIUM', severityScore: 6 },
  { category: 'Overrated Tourism', uaeRelevance: 'MEDIUM', severityScore: 5 },
  { category: 'Expats Regret/Leaving', uaeRelevance: 'MEDIUM', severityScore: 5 },
  { category: 'Wasteful/Excessive', uaeRelevance: 'MEDIUM', severityScore: 5 },
  { category: 'Boring/Soulless', uaeRelevance: 'LOW', severityScore: 4 },
]

// ============================================================================
// NEGATIVE SENTIMENT CATEGORIES
// ============================================================================

export interface NegativeCategory {
  id: number
  name: string
  tier: TierLevel
  sources: SourceCredibilityEntry[]
  keyQuotes: string[]
  dataPoints: Record<string, string | number>[]
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  sentimentIntensity: 'HIGH' | 'MEDIUM-HIGH' | 'MEDIUM' | 'LOW'
  primaryConcerns: string[]
}

export const negativeCategories: NegativeCategory[] = [
  {
    id: 1,
    name: 'General Negative Terms',
    tier: 2,
    sources: [
      { source: 'Far Out Magazine', tier: 2, type: 'Article', credibilityScore: 6 },
      { source: 'Human Rights Watch', tier: 1, type: 'NGO', credibilityScore: 10 },
      { source: 'DW News', tier: 2, type: 'News', credibilityScore: 7 },
    ],
    keyQuotes: [
      '"Dubai holds a mirror up to our age, and shows us what happens when riches, marketing and tech combine without meaning." — Far Out Magazine, February 2026',
      '"Generally speaking, the situation for migrant workers in the UAE is very bad, partly because no one can be held accountable." — Human Rights Watch, via DW News, February 2019',
    ],
    dataPoints: [],
    severity: 'CRITICAL',
    sentimentIntensity: 'HIGH',
    primaryConcerns: ['Human rights', 'Labor exploitation', 'Artificiality'],
  },
  {
    id: 2,
    name: 'Hate-Related Terms',
    tier: 4,
    sources: [
      { source: 'Reddit', tier: 4, type: 'Social', credibilityScore: 3 },
      { source: 'Edge Induced Cohesion', tier: 3, type: 'Blog', credibilityScore: 5 },
    ],
    keyQuotes: [],
    dataPoints: [],
    severity: 'MEDIUM',
    sentimentIntensity: 'MEDIUM',
    primaryConcerns: ['Labor practices', 'Human rights record'],
  },
  {
    id: 3,
    name: 'Disappointment Terms',
    tier: 2,
    sources: [
      { source: 'Middle East Eye', tier: 2, type: 'News', credibilityScore: 7 },
      { source: 'LinkedIn/Economic Times', tier: 3, type: 'Professional', credibilityScore: 5 },
    ],
    keyQuotes: [],
    dataPoints: [
      { metric: 'Civilian deaths in Yemen war', value: '50,000+' },
      { metric: 'Millions facing food insecurity', value: 'Millions' },
      { metric: 'Children at risk from preventable diseases', value: 'Tens of thousands' },
      { metric: 'Intervention period', value: '2015-present (9+ years)' },
      { metric: 'UAE troops deployed to Afghanistan', value: '1,200 (2001-2014)' },
    ],
    severity: 'HIGH',
    sentimentIntensity: 'HIGH',
    primaryConcerns: ['Military interventions', 'Broken promises'],
  },
  {
    id: 4,
    name: 'Overrated/Overpriced/Overhyped',
    tier: 3,
    sources: [
      { source: 'The London Economic', tier: 3, type: 'Poll', credibilityScore: 5 },
      { source: 'Metro UK', tier: 3, type: 'Poll', credibilityScore: 5 },
    ],
    keyQuotes: [
      '"It sucks so bad. There is nothing to do, and no culture."',
      '"People who love to travel to foreign countries to shop love Dubai because it\'s the largest shopping mall on the planet."',
      '"Dubai has always sounded like a holiday in materialistic hell."',
      '"If Nordstrom was a city."',
    ],
    dataPoints: [
      { poll: 'Reddit r/AskReddit', sampleSize: '15,000+ votes', result: 'Dubai #1 most overrated', date: 'Jan 2024' },
      { poll: 'Reddit poll', sampleSize: 'Not specified', result: 'Dubai crowned most overrated', date: 'Jul 2025' },
    ],
    severity: 'MEDIUM',
    sentimentIntensity: 'MEDIUM-HIGH',
    primaryConcerns: ['Value proposition', 'Authenticity'],
  },
  {
    id: 5,
    name: 'Corruption/Bribery',
    tier: 1,
    sources: [
      { source: 'Transparency International', tier: 1, type: 'Anti-Corruption NGO', credibilityScore: 9 },
      { source: 'Wikipedia', tier: 2, type: 'Encyclopedia', credibilityScore: 6 },
      { source: 'PolisPandit', tier: 3, type: 'Substack', credibilityScore: 5 },
    ],
    keyQuotes: [],
    dataPoints: [
      { metric: 'CPI Score (2024)', value: '68/100' },
      { metric: 'Global Rank', value: '23rd of 180' },
      { metric: 'MENA Average', value: '39' },
      { metric: 'Worldwide Average', value: '43' },
      { metric: 'Tamweel losses (2008)', value: '$12M+' },
      { metric: 'Abu Dhabi $500M to World Liberty Financial', value: '$500M' },
      { metric: 'Investment timing', value: '4 days before Trump inauguration' },
    ],
    severity: 'HIGH',
    sentimentIntensity: 'HIGH',
    primaryConcerns: ['Systemic graft', 'Lack of accountability'],
  },
  {
    id: 6,
    name: 'Authoritarian/Oppressive/Dictatorial',
    tier: 2,
    sources: [
      { source: 'Cato Institute', tier: 2, type: 'Think Tank', credibilityScore: 8 },
    ],
    keyQuotes: [
      '"Nevertheless, the Emirates remain ruthlessly oppressive domestically and dangerously interventionist abroad." — Cato Institute, September 2020',
    ],
    dataPoints: [
      { fact: 'Democratic elections', detail: 'None' },
      { fact: 'Right to change government', detail: 'None' },
      { fact: 'Legal political parties', detail: 'None' },
      { fact: 'Interpol presidency', detail: 'Ahmed Naser Al-Raisi (since Nov 2021)' },
      { fact: 'Torture allegations against Al-Raisi', detail: 'Yes' },
    ],
    severity: 'HIGH',
    sentimentIntensity: 'HIGH',
    primaryConcerns: ['Political repression', 'Lack of democracy'],
  },
  {
    id: 7,
    name: 'Racism/Discrimination/Xenophobia',
    tier: 1,
    sources: [
      { source: 'UN News', tier: 1, type: 'UN', credibilityScore: 9 },
      { source: 'OHCHR', tier: 1, type: 'UN Body', credibilityScore: 9 },
      { source: 'The National News', tier: 2, type: 'News', credibilityScore: 7 },
    ],
    keyQuotes: [
      '"Where are you from?" — Constant questioning upon return to UAE',
      '"boxed and labelled by my race" — Personal account',
      '"open discrimination frequently" — General pattern',
    ],
    dataPoints: [
      { finding: 'Population structure', detail: '"Non-nationals constitute the vast majority"' },
      { finding: 'Citizenship policy', detail: 'Major concern voiced' },
      { finding: 'Bidoon (stateless)', detail: 'Specific concern identified' },
      { finding: 'Human trafficking victims', detail: 'Specific concern identified' },
    ],
    severity: 'HIGH',
    sentimentIntensity: 'HIGH',
    primaryConcerns: ['Treatment of South Asian workers', 'Xenophobia'],
  },
  {
    id: 8,
    name: 'Fake/Artificial/Superficial/Facade',
    tier: 4,
    sources: [
      { source: 'YouTube', tier: 4, type: 'Video', credibilityScore: 3 },
      { source: 'LinkedIn', tier: 3, type: 'Professional', credibilityScore: 5 },
    ],
    keyQuotes: [
      '"Dubai is a modern day nightmare a city is Rock Solid and steady as the sand it was built on it\'s a mirage in the desert that\'s doomed to failure" — YouTube comment, October 2023',
    ],
    dataPoints: [],
    severity: 'MEDIUM',
    sentimentIntensity: 'MEDIUM',
    primaryConcerns: ['City feels manufactured', 'Soulless'],
  },
  {
    id: 9,
    name: 'Dangerous/Unsafe/Risky',
    tier: 2,
    sources: [
      { source: 'The Atlantic', tier: 2, type: 'News Media', credibilityScore: 8 },
      { source: 'Eastern Angle', tier: 3, type: 'Blog', credibilityScore: 5 },
    ],
    keyQuotes: [],
    dataPoints: [
      { metric: 'Road danger ranking', detail: 'Among world\'s most dangerous' },
      { metric: 'Arrest risk law', detail: 'Federal Decree-Law No. 5 of 2012' },
    ],
    severity: 'HIGH',
    sentimentIntensity: 'MEDIUM',
    primaryConcerns: ['Traffic', 'Online criticism risks'],
  },
  {
    id: 10,
    name: 'Exploitative/Abusive/Cruel (Labor)',
    tier: 1,
    sources: [
      { source: 'Human Rights Watch', tier: 1, type: 'NGO', credibilityScore: 10 },
      { source: 'Amnesty International', tier: 1, type: 'NGO', credibilityScore: 10 },
      { source: 'Walk Free Foundation', tier: 1, type: 'NGO', credibilityScore: 9 },
    ],
    keyQuotes: [],
    dataPoints: [
      { metric: 'Workers interviewed (Saadiyat Island)', value: '94' },
      { metric: 'Daily work hours', value: 'Up to 12 hours/day' },
      { metric: 'Summer temperatures', value: 'Exceeding 100°F (38°C)' },
      { metric: 'Recruitment fees (max)', value: '$4,100-$5,000' },
      { metric: 'Interest rates on loans', value: '2-10% monthly' },
      { metric: 'Average daily wage', value: '~$8.00' },
      { metric: 'Average yearly salary', value: '$2,575' },
      { metric: 'Passport confiscation', value: 'Described as "universal"' },
      { metric: 'Total migrant workers', value: '8 million' },
      { metric: 'Migrant as % of workforce', value: '88-90%' },
      { metric: 'Modern slavery victims (Walk Free 2021)', value: '132,000' },
      { metric: 'Prevalence rate', value: '13.4 per 1,000' },
      { metric: 'Global slavery ranking', value: '7th of 160' },
    ],
    severity: 'CRITICAL',
    sentimentIntensity: 'HIGH',
    primaryConcerns: ['Kafala system', 'Worker abuse'],
  },
  {
    id: 11,
    name: 'Boring/Soulless/Empty',
    tier: 4,
    sources: [
      { source: 'Quora', tier: 3, type: 'Forum', credibilityScore: 4 },
      { source: 'YouTube', tier: 4, type: 'Video', credibilityScore: 3 },
    ],
    keyQuotes: [
      '"Definitely soulless. First of all there is no culture. It\'s been washed away with the hundreds of nationalities living in it." — Quora, March 2016',
    ],
    dataPoints: [],
    severity: 'LOW',
    sentimentIntensity: 'MEDIUM',
    primaryConcerns: ['Lack of culture', 'Superficial experience'],
  },
  {
    id: 12,
    name: 'Polluted/Dirty/Unhealthy',
    tier: 1,
    sources: [
      { source: 'IQAir', tier: 2, type: 'Data', credibilityScore: 7 },
      { source: 'Human Rights Watch', tier: 1, type: 'NGO', credibilityScore: 10 },
      { source: 'ScienceDirect', tier: 2, type: 'Academic', credibilityScore: 8 },
    ],
    keyQuotes: [],
    dataPoints: [
      { metric: 'Dubai global pollution rank', value: 'Top 10 most polluted cities' },
      { metric: 'AQI typical reading', value: 'Over 150 almost every day' },
      { metric: 'PM2.5 vs WHO guidelines', value: '3x higher' },
      { metric: 'Annual outdoor air pollution deaths', value: '~1,872' },
      { metric: 'Man-made PM2.5', value: 'Over 90%' },
      { metric: 'UAE population', value: 'Nearly 10 million' },
    ],
    severity: 'HIGH',
    sentimentIntensity: 'MEDIUM-HIGH',
    primaryConcerns: ['Air quality', 'Environmental damage'],
  },
  {
    id: 13,
    name: 'Hypocritical/Double Standards',
    tier: 1,
    sources: [
      { source: 'Human Rights Watch', tier: 1, type: 'NGO', credibilityScore: 10 },
    ],
    keyQuotes: [],
    dataPoints: [
      { claim: 'Summit aimed to "celebrate diversity"', reality: 'HRW: "laughable" to call UAE tolerant' },
      { claim: 'Tolerance messaging', reality: 'Sustained assault on freedom of expression since 2011' },
      { claim: 'Human rights progress', reality: 'People detained for "undermining national unity"' },
    ],
    severity: 'HIGH',
    sentimentIntensity: 'HIGH',
    primaryConcerns: ['Tolerance summits', 'Contradictions'],
  },
  {
    id: 14,
    name: 'Wasteful/Flashy/Vulgar/Excessive',
    tier: 3,
    sources: [
      { source: 'Escape Artist', tier: 3, type: 'Blog', credibilityScore: 5 },
      { source: 'Far Out Magazine', tier: 2, type: 'Magazine', credibilityScore: 6 },
    ],
    keyQuotes: [],
    dataPoints: [
      { reason: 'High cost of living', impact: 'High' },
      { reason: 'Only cheap labor is inexpensive', impact: 'High' },
      { reason: 'Environmental harm from man-made islands', impact: 'Medium' },
    ],
    severity: 'MEDIUM',
    sentimentIntensity: 'MEDIUM',
    primaryConcerns: ['Excess', 'Vulgar displays'],
  },
  {
    id: 15,
    name: 'Regret/Waste of Time/Never Again',
    tier: 4,
    sources: [
      { source: 'YouTube', tier: 4, type: 'Video', credibilityScore: 3 },
      { source: 'Backpack Me', tier: 3, type: 'Blog', credibilityScore: 5 },
      { source: 'Daily Mail', tier: 3, type: 'News', credibilityScore: 5 },
    ],
    keyQuotes: [
      '"Dubai has gone from nothing to what it is now (a great pile of concrete and glass) in almost no time. In a couple of decades, exploited workers..." — Backpack Me, June 2012',
    ],
    dataPoints: [
      { metric: 'YouTube video', value: '"33 Reasons Why So Many Expats Regret Moving to Dubai"' },
    ],
    severity: 'MEDIUM',
    sentimentIntensity: 'HIGH',
    primaryConcerns: ['Expats leaving', 'Broken dreams'],
  },
  {
    id: 16,
    name: 'Modern Slavery & Human Rights',
    tier: 1,
    sources: [
      { source: 'Walk Free Foundation', tier: 1, type: 'Modern Slavery NGO', credibilityScore: 9 },
      { source: 'U.S. State Department', tier: 1, type: 'Government Report', credibilityScore: 9 },
      { source: 'Human Rights Watch', tier: 1, type: 'Human Rights NGO', credibilityScore: 10 },
    ],
    keyQuotes: [],
    dataPoints: [
      { metric: 'Modern slavery victims', value: '132,000' },
      { metric: 'Prevalence rate', value: '13.4 per 1,000' },
      { metric: 'Regional ranking', value: '2nd highest in Arab States' },
      { metric: 'Global ranking', value: '7th highest of 160 countries' },
      { metric: 'Activists jailed/tortured after Arab Spring', value: 'Over 100' },
      { metric: 'Mass trial activists (2013)', value: '94 held in secret detention' },
      { metric: 'Afghans held in Emirates Humanitarian City', value: '2,400–2,700 (15+ months, 2023)' },
      { metric: 'Guantanamo Bay detainees transferred to UAE', value: '19 (2020)' },
      { metric: 'Shia expats deported', value: '4,000+' },
      { metric: 'Mass trial (2023)', value: '84+ defendants violated fair trial rights' },
      { metric: 'Life sentences (original)', value: '67' },
      { metric: 'Life sentences (upheld March 2025)', value: '53' },
      { metric: 'Torture methods documented', value: '16' },
      { metric: 'Ahmed Mansoor', status: 'Life imprisonment (since 2017)' },
      { metric: 'Nasser Bin Ghaith', status: 'Life imprisonment (upheld 2025)' },
    ],
    severity: 'CRITICAL',
    sentimentIntensity: 'HIGH',
    primaryConcerns: ['Kafala system', 'Political prisoners', 'Surveillance'],
  },
]

// ============================================================================
// KEY NARRATIVE THEMES
// ============================================================================

export interface NarrativeTheme {
  name: string
  coreElements: string[]
  dataPoints: string[]
  sources: string[]
}

export const narrativeThemes: NarrativeTheme[] = [
  {
    name: 'Labor Exploitation Narrative',
    coreElements: ['Kafala system', 'Passport confiscation', 'Wage theft', 'Dangerous conditions'],
    dataPoints: ['132,000 in modern slavery', '8 million migrant workers', '$4,100-$5,000 recruitment fees'],
    sources: ['Walk Free', 'HRW', 'Amnesty', 'PubMed'],
  },
  {
    name: 'Human Rights Narrative',
    coreElements: ['Political prisoners', 'Suppressed dissent', 'Unfair trials', 'Surveillance'],
    dataPoints: ['84+ mass trial', '67 life sentences', '16 documented torture methods'],
    sources: ['US State Department', 'Amnesty', 'HRW'],
  },
  {
    name: 'Environmental Hypocrisy Narrative',
    coreElements: ['COP28 host while being major polluter'],
    dataPoints: ['3x WHO PM2.5 guidelines', '1,872 annual deaths', 'Top 10 polluted city'],
    sources: ['IQAir', 'HRW', 'Nature study'],
  },
  {
    name: 'Artificial City Narrative',
    coreElements: ['Soulless', 'Fake', 'Manufactured experiences'],
    dataPoints: [],
    sources: ['Multiple social media', 'YouTube', 'Quora'],
  },
  {
    name: 'Double Standards Narrative',
    coreElements: ['Tolerance summits while suppressing free speech'],
    dataPoints: ['Ahmed Mansoor 10 years for tweet', 'Nasser bin Ghaith 10 years for posts'],
    sources: ['HRW', 'Cato Institute'],
  },
  {
    name: 'Traffic/Danger Narrative',
    coreElements: ["Among world's most dangerous roads"],
    dataPoints: [],
    sources: ['The Atlantic', 'Schools Compared'],
  },
  {
    name: 'Broken Dreams Narrative',
    coreElements: ['Expats regretting move', 'Leaving after years'],
    dataPoints: ['Multiple expat testimonials', '33 reasons video'],
    sources: ['YouTube', 'Reddit', 'Daily Mail', 'Backpack Me'],
  },
]

// ============================================================================
// EXTRACTED STATISTICS SUMMARY
// ============================================================================

export interface StatisticsSummary {
  demographics: Record<string, string | number>
  corruption: Record<string, string | number>
  humanRights: Record<string, string | number>
  environment: Record<string, string | number>
  labor: Record<string, string | number>
}

export const statisticsSummary: StatisticsSummary = {
  demographics: {
    'UAE Population': '9,890,000 (2021)',
    'Migrant workers': '8 million',
    'Migrant % of workforce': '88-90%',
    'Expats in Dubai': '~90% of 3.1 million',
    'Non-nationals': 'Vast majority of population',
  },
  corruption: {
    'CPI Score (2024)': '68/100',
    'CPI Rank (2024)': '23rd of 180',
    'MENA Average CPI': '39',
    'Tamweel losses': '$12M+',
  },
  humanRights: {
    'Modern slavery victims': '132,000',
    'Prevalence rate': '13.4 per 1,000',
    'Global slavery rank': '7th of 160',
    'Mass trial defendants': '84+',
    'Life sentences (original)': '67',
    'Life sentences (upheld)': '53',
    'Torture methods': '16 documented',
    'Guantanamo transfers': '19',
    'Activists jailed post-Arab Spring': '100+',
  },
  environment: {
    'PM2.5 vs WHO guideline': '3x higher',
    'Annual pollution deaths': '~1,872',
    'Global pollution rank': 'Top 10',
    'AQI typical reading': '150+',
    'Man-made PM2.5': '90%+',
  },
  labor: {
    'Recruitment fees (max)': '$4,100-$5,000',
    'Workers borrowing rate': 'Up to 50% annual',
    'Average daily wage': '~$8',
    'Yearly salary average': '$2,575',
    'Work hours (typical)': 'Up to 12-16/day',
    'Temperature working condition': 'Exceeding 100°F/38°C',
    'Labor inspectors': '48 total for UAE',
    'Passport confiscation': 'Universal (per HRW)',
  },
}

// ============================================================================
// ENTITY REGISTRY
// ============================================================================

export interface HumanRightsDefender {
  name: string
  status: string
  charges: string
  source: string
}

export interface GovernmentEntity {
  entity: string
  role: string
  allegation: string
}

export const humanRightsDefenders: HumanRightsDefender[] = [
  { name: 'Ahmed Mansoor', status: 'Life imprisonment (since 2017)', charges: 'Free speech', source: 'US State Dept' },
  { name: 'Nasser Bin Ghaith', status: 'Life imprisonment (upheld 2025)', charges: 'Twitter posts', source: 'US State Dept' },
  { name: 'Abdul Rahman Al-Qaradawi', status: 'Enforced disappearance', charges: 'Unknown', source: 'US State Dept' },
  { name: 'Mohammed Farouk Salman', status: 'Enforced disappearance', charges: 'Unknown', source: 'US State Dept' },
  { name: 'Alia Abdulnoor', status: 'Died May 2019', charges: 'N/A - died in custody', source: 'Wikipedia' },
  { name: 'Sheikha Latifa', status: 'Seized March 2018', charges: 'Attempted escape', source: 'HRW' },
  { name: 'Ryan Cornelius', status: '30 years', charges: 'Disputed business', source: 'Wikipedia' },
  { name: 'Matthew Hedges', status: 'Trial pending', charges: 'Spying', source: 'HRW' },
  { name: 'Ali Issa Ahmad', status: 'Detained', charges: 'Wearing Qatar flag', source: 'Wikipedia' },
  { name: 'Charles Wimberly', status: 'US veteran, 3+ years', charges: 'CBD oil prescription', source: 'Wikipedia' },
]

export const negativeGovernmentEntities: GovernmentEntity[] = [
  { entity: 'UAE Accountability Authority (UAA)', role: 'Anti-corruption', allegation: 'Established 2011' },
  { entity: 'Tamweel', role: 'Financial', allegation: '$12M+ losses (2008)' },
  { entity: 'Dubai Islamic Bank', role: 'Financial', allegation: 'Financial irregularities' },
  { entity: 'World Liberty Financial', role: 'Crypto', allegation: '$500M UAE investment' },
  { entity: 'Interpol', role: 'International police', allegation: 'President Al-Raisi (torture allegations)' },
  { entity: 'ToTok', role: 'Surveillance', allegation: 'Government surveillance app' },
  { entity: 'RADDHO', role: 'Human rights org', allegation: 'Received UAE funds' },
  { entity: 'TACUDU', role: 'Human rights org', allegation: 'Received UAE funds' },
]

// ============================================================================
// ARREST CASES DOCUMENTED
// ============================================================================

export interface ArrestCase {
  person: string
  nationality: string
  reason: string
  consequence: string
}

export const arrestCases: ArrestCase[] = [
  { person: 'Craig Ballentine', nationality: 'Northern Ireland', reason: 'Negative Google review about former employer', consequence: 'Arrested at Abu Dhabi airport, detained weeks under slander charges' },
  { person: 'U.S. TikTok creator', nationality: 'American', reason: 'Satirical video deemed "damaging to state\'s reputation"', consequence: 'Detained' },
  { person: 'U.S. cryptocurrency entrepreneur', nationality: 'American', reason: 'Criticized local regulations online', consequence: 'Arrested and intimidated' },
  { person: 'Unnamed influencer', nationality: 'Unknown', reason: 'Video about company owned by UAE nationals (not UAE-based)', consequence: 'Arrested in transit' },
  { person: 'South Asian worker', nationality: 'South Asian', reason: 'WhatsApp complaint about unpaid wages', consequence: '6 months in detention' },
  { person: 'European tourist', nationality: 'European', reason: 'Criticized hotel on TripAdvisor', consequence: '2 weeks detention, $15,000 bail, 6-month trial delay' },
]

// ============================================================================
// MILITARY INTERVENTIONS
// ============================================================================

export interface MilitaryIntervention {
  operation: string
  location: string
  details: string
}

export const militaryInterventions: MilitaryIntervention[] = [
  { operation: 'Afghanistan', location: '2001-2014', details: '1,200 soldiers alongside US vs Taliban' },
  { operation: 'Libya', location: '2014-present', details: 'Air support for Haftar, armed Syrian rebels' },
  { operation: 'Yemen', location: '2015-present', details: 'Joint campaign with Saudi Arabia vs Houthis' },
  { operation: 'Sudan', location: 'Present', details: 'Backing military leaders with billions' },
]

// ============================================================================
// SENTIMENT DATA FOR DASHBOARD
// ============================================================================

export interface NegativeSentimentMetric {
  title: string
  value: string
  previousValue?: string
  unit?: string
  trend?: 'up' | 'down' | 'stable'
  icon: string
  gradient: string
  status?: string
}

export const negativeSentimentMetrics: NegativeSentimentMetric[] = [
  { title: 'Critical Categories', value: '3', icon: 'AlertTriangle', gradient: 'rose', status: 'critical' },
  { title: 'High Severity Categories', value: '8', icon: 'AlertCircle', gradient: 'gold', status: 'warning' },
  { title: 'Total Sources Consulted', value: '60+', icon: 'Database', gradient: 'denim' },
  { title: 'Human Rights Violations', value: '16', icon: 'ShieldAlert', gradient: 'rose', status: 'critical' },
]

// ============================================================================
// CHART DATA
// ============================================================================

export const severityDistributionData = [
  { name: 'CRITICAL', value: 3, color: '#ef4444' },
  { name: 'HIGH', value: 8, color: '#f59e0b' },
  { name: 'MEDIUM', value: 4, color: '#eab308' },
  { name: 'LOW', value: 1, color: '#22c55e' },
]

export const sentimentTrendData = [
  { month: 'Jan', negative: 85, volume: 1200 },
  { month: 'Feb', negative: 82, volume: 1150 },
  { month: 'Mar', negative: 88, volume: 1300 },
  { month: 'Apr', negative: 90, volume: 1400 },
  { month: 'May', negative: 87, volume: 1250 },
  { month: 'Jun', negative: 84, volume: 1180 },
]

export const categorySeverityData = [
  { category: 'Modern Slavery', severity: 10, categoryId: 1 },
  { category: 'Human Rights', severity: 10, categoryId: 2 },
  { category: 'Labor Exploitation', severity: 10, categoryId: 3 },
  { category: 'Corruption', severity: 9, categoryId: 5 },
  { category: 'Authoritarianism', severity: 9, categoryId: 6 },
  { category: 'Racism/Discrimination', severity: 8, categoryId: 7 },
  { category: 'Military Interventions', severity: 8, categoryId: 3 },
  { category: 'Online Criticism Risks', severity: 8, categoryId: 9 },
  { category: 'Double Standards', severity: 8, categoryId: 13 },
  { category: 'Air Pollution', severity: 8, categoryId: 12 },
]

// ============================================================================
// ENHANCED NEGATIVE SENTIMENT DATA (From MD 9-2 - 100% Coverage)
// ============================================================================

// Tier definitions
export const tierDefinitions = [
  { tier: 0, name: 'Primary government/legal documents', description: 'Primary source official documents' },
  { tier: 1, name: 'Major international NGOs, UN bodies, government reports', description: 'Amnesty, HRW, US State Dept, Walk Free' },
  { tier: 2, name: 'Established media, think tanks, academic journals', description: 'Cato, The Atlantic, Wikipedia, MEI, DW News' },
  { tier: 3, name: 'Local news, blogs, professional networks', description: 'Metro UK, LinkedIn, The London Economic' },
  { tier: 4, name: 'Social media, review platforms, user-generated content', description: 'Reddit, YouTube, TikTok, TripAdvisor' },
]

// Enhanced category data with all dataPoints from MD
export const negativeCategoriesEnriched = [
  // Category 1: General Negative Terms
  {
    id: 1,
    name: 'General Negative Terms',
    tier: 2,
    severity: 'CRITICAL' as const,
    sentimentIntensity: 'HIGH' as const,
    sources: [
      { source: 'Far Out Magazine', tier: 2, type: 'Article', credibilityScore: 6 },
      { source: 'Human Rights Watch', tier: 1, type: 'NGO', credibilityScore: 10 },
      { source: 'DW News', tier: 2, type: 'News', credibilityScore: 7 },
    ],
    keyQuotes: [
      { text: 'Dubai holds a mirror up to our age, and shows us what happens when riches, marketing and tech combine without meaning.', author: 'Far Out Magazine, February 2026' },
      { text: 'Generally speaking, the situation for migrant workers in the UAE is very bad, partly because no one can be held accountable.', author: 'Human Rights Watch, via DW News, February 2019' },
    ],
    dataPoints: [],
    primaryConcerns: ['Human rights', 'Labor exploitation', 'Artificiality'],
  },
  // Category 2: Hate-Related Terms
  {
    id: 2,
    name: 'Hate-Related Terms',
    tier: 4,
    severity: 'MEDIUM' as const,
    sentimentIntensity: 'MEDIUM' as const,
    sources: [
      { source: 'Reddit', tier: 4, type: 'Social', credibilityScore: 3 },
      { source: 'Edge Induced Cohesion', tier: 3, type: 'Blog', credibilityScore: 5 },
    ],
    keyQuotes: [],
    keyThemes: ['Distinction between legitimate criticism and hate', 'Ethical concerns about labor practices', 'Questions about UAE human rights record'],
    dataPoints: [],
    primaryConcerns: ['Labor practices', 'Human rights record'],
  },
  // Category 3: Disappointment Terms
  {
    id: 3,
    name: 'Disappointment Terms',
    tier: 2,
    severity: 'HIGH' as const,
    sentimentIntensity: 'HIGH' as const,
    sources: [
      { source: 'Middle East Eye', tier: 2, type: 'News', credibilityScore: 7 },
      { source: 'LinkedIn/Economic Times', tier: 3, type: 'Professional', credibilityScore: 5 },
    ],
    keyQuotes: [],
    yemenWarData: {
      civilianDeaths: '50,000+',
      millionsFacingFoodInsecurity: 'Millions',
      childrenAtRiskFromPreventableDiseases: 'Tens of thousands',
      infrastructureDestroyed: 'Much of the country\'s bombed to rubble',
      interventionPeriod: '2015-present (9+ years)',
      uaeTroopsDeployedAfghanistan: '1,200 (2001-2014)',
    },
    militaryInterventions: [
      { operation: 'Afghanistan', location: '2001-2014', details: '1,200 soldiers alongside US vs Taliban' },
      { operation: 'Libya', location: '2014-present', details: 'Air support for Haftar, armed Syrian rebels' },
      { operation: 'Yemen', location: '2015-present', details: 'Joint campaign with Saudi Arabia vs Houthis' },
      { operation: 'Sudan', location: 'Present', details: 'Backing military leaders with billions' },
    ],
    dataPoints: [
      { metric: 'Civilian deaths in Yemen war', value: '50,000+' },
      { metric: 'Millions facing food insecurity', value: 'Millions' },
      { metric: 'Children at risk from preventable diseases', value: 'Tens of thousands' },
      { metric: 'Intervention period', value: '2015-present (9+ years)' },
      { metric: 'UAE troops deployed to Afghanistan', value: '1,200 (2001-2014)' },
    ],
    primaryConcerns: ['Military interventions', 'Broken promises'],
  },
  // Category 4: Overrated/Overpriced/Overhyped
  {
    id: 4,
    name: 'Overrated/Overpriced/Overhyped',
    tier: 3,
    severity: 'MEDIUM' as const,
    sentimentIntensity: 'MEDIUM-HIGH' as const,
    sources: [
      { source: 'The London Economic', tier: 3, type: 'Poll', credibilityScore: 5 },
      { source: 'Metro UK', tier: 3, type: 'Poll', credibilityScore: 5 },
    ],
    keyQuotes: [
      { text: 'It sucks so bad. There is nothing to do, and no culture.', author: 'Reddit user' },
      { text: 'People who love to travel to foreign countries to shop love Dubai because it\'s the largest shopping mall on the planet.', author: 'Reddit user' },
      { text: 'Dubai has always sounded like a holiday in materialistic hell.', author: 'Reddit user' },
      { text: 'If Nordstrom was a city.', author: 'Reddit user' },
    ],
    pollData: [
      { pollSource: 'Reddit r/AskReddit', sampleSize: '15,000+ votes', result: 'Dubai #1 most overrated', date: 'Jan 2024' },
      { pollSource: 'Reddit poll', sampleSize: 'Not specified', result: 'Dubai crowned most overrated', date: 'Jul 2025' },
    ],
    dataPoints: [
      { poll: 'Reddit r/AskReddit', sampleSize: '15,000+ votes', result: 'Dubai #1 most overrated', date: 'Jan 2024' },
      { poll: 'Reddit poll', sampleSize: 'Not specified', result: 'Dubai crowned most overrated', date: 'Jul 2025' },
    ],
    primaryConcerns: ['Value proposition', 'Authenticity'],
  },
  // Category 5: Corruption/Bribery
  {
    id: 5,
    name: 'Corruption/Bribery',
    tier: 1,
    severity: 'HIGH' as const,
    sentimentIntensity: 'HIGH' as const,
    sources: [
      { source: 'Transparency International', tier: 1, type: 'Anti-Corruption NGO', credibilityScore: 9 },
      { source: 'Wikipedia', tier: 2, type: 'Encyclopedia', credibilityScore: 6 },
      { source: 'PolisPandit', tier: 3, type: 'Substack', credibilityScore: 5 },
    ],
    keyQuotes: [],
    cpiData: {
      score: '68/100',
      context: '0=corrupt, 100=clean',
      globalRank: '23rd of 180',
      menaAverage: 39,
      worldwideAverage: 43,
    },
    historicalCases: [
      { year: '2001', case: 'Dr. Obaid Saqr Busit (Dubai customs head) arrested', lossImpact: 'N/A' },
      { year: '2008', case: 'Tamweel executives arrested', lossImpact: '$12M+ losses' },
      { year: '2008', case: 'Dubai Islamic Bank officials implicated', lossImpact: 'Financial irregularities' },
    ],
    abuDhabiScandal2025: {
      investment: '$500M to World Liberty Financial',
      investor: 'Sheikh Tahnoon bin Zayed (Abu Dhabi), 49% stake',
      paymentTiming: '4 days before Trump inauguration (Jan 20, 2025)',
      upfrontPayment: '$250M immediately',
      trumpFamilyCollection: '$187M immediately',
      policyChangeMarch2025: '500,000 Nvidia AI chips export approved',
      previousBlockReason: 'Export controls due to China connections',
      witkoffConnection: 'Steve Witkoff\'s son is Co-founder of World Liberty Financial',
    },
    foreignBriberyLaws: [
      { law: 'Federal Law No. 31 of 2021', description: 'New UAE Federal Penal Code' },
      { law: 'Anti-money laundering law (2002)', description: 'AML legislation' },
      { law: 'Federal Law No. 8 of 2011', description: 'UAE Accountability Authority' },
    ],
    uaeLobbyScandal: {
      organizations: 'RADDHO, TACUDU',
      fundsReceived: 'Hundreds of thousands of euros',
      nature: 'Corruption in European human rights organizations',
    },
    dataPoints: [
      { metric: 'CPI Score (2024)', value: '68/100' },
      { metric: 'Global Rank', value: '23rd of 180' },
      { metric: 'MENA Average', value: '39' },
      { metric: 'Worldwide Average', value: '43' },
      { metric: 'Tamweel losses (2008)', value: '$12M+' },
      { metric: 'Abu Dhabi $500M to World Liberty Financial', value: '$500M' },
      { metric: 'Investment timing', value: '4 days before Trump inauguration' },
    ],
    primaryConcerns: ['Systemic graft', 'Lack of accountability'],
  },
  // Category 6: Authoritarian/Oppressive/Dictatorial
  {
    id: 6,
    name: 'Authoritarian/Oppressive/Dictatorial',
    tier: 2,
    severity: 'HIGH' as const,
    sentimentIntensity: 'HIGH' as const,
    sources: [
      { source: 'Cato Institute', tier: 2, type: 'Think Tank', credibilityScore: 8 },
    ],
    keyQuotes: [
      { text: 'Nevertheless, the Emirates remain ruthlessly oppressive domestically and dangerously interventionist abroad.', author: 'Cato Institute, September 2020' },
    ],
    politicalStructureFacts: [
      { fact: 'Democratic elections', detail: 'None' },
      { fact: 'Right to change government', detail: 'None' },
      { fact: 'Legal political parties', detail: 'None' },
      { fact: 'Interpol presidency', detail: 'Ahmed Naser Al-Raisi (since Nov 2021)' },
      { fact: 'Torture allegations against Al-Raisi', detail: 'Yes' },
    ],
    dataPoints: [
      { fact: 'Democratic elections', detail: 'None' },
      { fact: 'Right to change government', detail: 'None' },
      { fact: 'Legal political parties', detail: 'None' },
      { fact: 'Interpol presidency', detail: 'Ahmed Naser Al-Raisi (since Nov 2021)' },
      { fact: 'Torture allegations against Al-Raisi', detail: 'Yes' },
    ],
    primaryConcerns: ['Political repression', 'Lack of democracy'],
  },
  // Category 7: Racism/Discrimination/Xenophobia
  {
    id: 7,
    name: 'Racism/Discrimination/Xenophobia',
    tier: 1,
    severity: 'HIGH' as const,
    sentimentIntensity: 'HIGH' as const,
    sources: [
      { source: 'UN News', tier: 1, type: 'UN', credibilityScore: 9 },
      { source: 'OHCHR', tier: 1, type: 'UN Body', credibilityScore: 9 },
      { source: 'The National News', tier: 2, type: 'News', credibilityScore: 7 },
    ],
    keyQuotes: [
      { text: 'Where are you from?', author: 'Constant questioning upon return to UAE (The National News, 2012)' },
      { text: 'boxed and labelled by my race', author: 'Personal account (The National News, 2012)' },
      { text: 'open discrimination frequently', author: 'General pattern (The National News, 2012)' },
    ],
    unSpecialRapporteurFindings: [
      { issue: 'Population structure', finding: 'Non-nationals constitute the vast majority' },
      { issue: 'Citizenship policy', finding: 'Major concern voiced' },
      { issue: 'Bidoon (stateless)', finding: 'Specific concern identified' },
      { issue: 'Human trafficking victims', finding: 'Specific concern identified' },
      { issue: 'Integration', finding: 'Tremendous challenges for Emirati society' },
    ],
    documentedIncidents: [
      { incident: 'Where are you from?', context: 'Constant questioning upon return to UAE' },
      { incident: 'boxed and labelled by my race', context: 'Personal account' },
      { incident: 'open discrimination frequently', context: 'General pattern' },
      { incident: 'South Asians, Arabs, Europeans, Africans', context: 'All identified as both victims AND perpetrators' },
      { incident: 'Body odour justifications', context: 'Racist justifications documented' },
    ],
    academicResearch: [
      { paper: 'Alexandra Millward', title: 'Racialisation in the United Arab Emirates' },
      { paper: 'Rebecca Goldthorpe', title: 'Racialisation in the United Arab Emirates' },
    ],
    dataPoints: [
      { finding: 'Population structure', detail: 'Non-nationals constitute the vast majority' },
      { finding: 'Citizenship policy', detail: 'Major concern voiced' },
      { finding: 'Bidoon (stateless)', detail: 'Specific concern identified' },
      { finding: 'Human trafficking victims', detail: 'Specific concern identified' },
    ],
    primaryConcerns: ['Treatment of South Asian workers', 'Xenophobia'],
  },
  // Category 8: Fake/Artificial/Superficial/Facade
  {
    id: 8,
    name: 'Fake/Artificial/Superficial/Facade',
    tier: 4,
    severity: 'MEDIUM' as const,
    sentimentIntensity: 'MEDIUM' as const,
    sources: [
      { source: 'YouTube', tier: 4, type: 'Video', credibilityScore: 3 },
      { source: 'LinkedIn', tier: 3, type: 'Professional', credibilityScore: 5 },
    ],
    keyQuotes: [
      { text: 'Dubai is a modern day nightmare a city is Rock Solid and steady as the sand it was built on it\'s a mirage in the desert that\'s doomed to failure', author: 'YouTube comment, October 2023' },
    ],
    dataPoints: [],
    primaryConcerns: ['City feels manufactured', 'Soulless'],
  },
  // Category 9: Dangerous/Unsafe/Risky
  {
    id: 9,
    name: 'Dangerous/Unsafe/Risky',
    tier: 2,
    severity: 'HIGH' as const,
    sentimentIntensity: 'MEDIUM' as const,
    sources: [
      { source: 'The Atlantic', tier: 2, type: 'News Media', credibilityScore: 8 },
      { source: 'Eastern Angle', tier: 3, type: 'Blog', credibilityScore: 5 },
    ],
    keyQuotes: [],
    roadSafetyData: {
      ranking: 'Among world\'s most dangerous',
      comparativeData: 'Not specified in fetched content',
    },
    cyberCrimeLaw: {
      law: 'Federal Decree-Law No. 5 of 2012',
      provision: 'Cybercrime legislation',
      criminalizedActions: [
        'Publishing statements damaging the reputation, prestige, or stature of the State or any of its institutions',
        'Insulting religion',
        'Disseminating false information affecting public order',
        'Content posted from outside UAE can be prosecuted if relating to UAE',
      ],
    },
    arrestCases: [
      { person: 'Craig Ballentine', nationality: 'Northern Ireland', reason: 'Negative Google review about former employer', consequence: 'Arrested at Abu Dhabi airport, detained weeks under slander charges' },
      { person: 'U.S. TikTok creator', nationality: 'American', reason: 'Satirical video deemed damaging to state\'s reputation', consequence: 'Detained' },
      { person: 'U.S. cryptocurrency entrepreneur', nationality: 'American', reason: 'Criticized local regulations online', consequence: 'Arrested and intimidated' },
      { person: 'Unnamed influencer', nationality: 'Unknown', reason: 'Video about company owned by UAE nationals (not UAE-based)', consequence: 'Arrested in transit' },
      { person: 'South Asian worker', nationality: 'South Asian', reason: 'WhatsApp complaint about unpaid wages', consequence: '6 months in detention' },
      { person: 'European tourist', nationality: 'European', reason: 'Criticized hotel on TripAdvisor', consequence: '2 weeks detention, $15,000 bail, 6-month trial delay' },
    ],
    arrestConsequences: [
      { consequence: 'Detention conditions', details: 'Overcrowded cells, extreme heat, minimal food/water/medical' },
      { consequence: 'Bail amounts', details: 'Tens of thousands of dirhams' },
      { consequence: 'Trial delays', details: 'Months or years' },
      { consequence: 'Financial impact', details: 'Lawyer fees, trapped in country' },
      { consequence: 'Additional penalties', details: 'Travel bans, frozen bank accounts, revoked visas' },
    ],
    dataPoints: [
      { metric: 'Road danger ranking', detail: 'Among world\'s most dangerous' },
      { metric: 'Arrest risk law', detail: 'Federal Decree-Law No. 5 of 2012' },
    ],
    primaryConcerns: ['Traffic', 'Online criticism risks'],
  },
  // Category 10: Exploitative/Abusive/Cruel (Labor)
  {
    id: 10,
    name: 'Exploitative/Abusive/Cruel (Labor)',
    tier: 1,
    severity: 'CRITICAL' as const,
    sentimentIntensity: 'HIGH' as const,
    sources: [
      { source: 'Human Rights Watch', tier: 1, type: 'NGO', credibilityScore: 10 },
      { source: 'Amnesty International', tier: 1, type: 'NGO', credibilityScore: 10 },
      { source: 'Walk Free Foundation', tier: 1, type: 'NGO', credibilityScore: 9 },
    ],
    keyQuotes: [],
    saadiyatIslandStats: {
      workersInterviewed: 94,
      workerNationalities: 'India, Pakistan, Bangladesh, Sri Lanka, Nepal, Thailand',
      dailyWorkHours: 'Up to 12 hours/day',
      summerTemperatures: 'Exceeding 100°F (38°C)',
      recruitmentFeesMax: '$4,100 (9x average income of some workers\' home countries)',
      bangladeshiWorkerFees: 'Up to $5,000',
      interestRatesOnLoans: '2-10% monthly',
      averageDailyWage: '~$8.00 for 10 paid hours (including overtime)',
      averageYearlySalary: '$2,575',
      abuDhabiPerCapitaIncome: '~$30,000',
      actualVsPromisedWages: 'Often 50% less',
      passportConfiscation: 'Described as universal',
      writtenContractsFromAgencies: 'Only 2 of 94 workers',
      laborCampViolations: '40% of Dubai\'s 1,033 camps violated health/fire safety (Aug 2008)',
      laborInspectorsDec2008: 'Only 48 for all of UAE',
      workersWhoSawInspector: 'Zero (none of interviewed workers)',
    },
    migrantWorkerPopulation: {
      total: '8 million',
      percentageOfWorkforce: '88-90%',
      constructionWorkers: '~500,000',
      domesticWorkers: '~450,000',
      bangladeshis2022: '100,000+',
      nepali2022: '122,000',
      pakistanis2022: '128,000',
      nepalRemittancesPercentGDP: '25%',
    },
    kafalaViolations: [
      { type: 'Wage theft', description: 'Systemic' },
      { type: 'Excessive working hours', description: 'Documented' },
      { type: 'Crippling debt', description: 'From recruitment fees' },
      { type: 'Restricted job mobility', description: 'Employer sponsorship binding' },
      { type: 'Passport confiscation', description: 'Universal practice' },
      { type: 'Limited inspector presence', description: '48 total for entire UAE' },
    ],
    heatRelatedProtections: {
      workBanHours: '12:30 p.m. to 3:00 p.m.',
      period: 'Mid-June to mid-September',
      maxTemperatureRecorded: '50°C (122°F)',
      wetBulbThreshold: '35°C (approached by century\'s end)',
      workerBorrowingRates: 'Up to 50% annual interest',
    },
    healthImpacts: [
      'Research shows heat increases occupational injury risk despite bans',
      'Studies link heat exposure to kidney health deterioration',
      'Workers return home with chronic conditions (kidney failure) without financial support',
      'High rates of physical, sexual, and psychological abuse for domestic workers',
    ],
    dataPoints: [
      { metric: 'Workers interviewed (Saadiyat Island)', value: '94' },
      { metric: 'Daily work hours', value: 'Up to 12 hours/day' },
      { metric: 'Summer temperatures', value: 'Exceeding 100°F (38°C)' },
      { metric: 'Recruitment fees (max)', value: '$4,100-$5,000' },
      { metric: 'Interest rates on loans', value: '2-10% monthly' },
      { metric: 'Average daily wage', value: '~$8.00' },
      { metric: 'Average yearly salary', value: '$2,575' },
      { metric: 'Passport confiscation', value: 'Described as universal' },
      { metric: 'Total migrant workers', value: '8 million' },
      { metric: 'Migrant as % of workforce', value: '88-90%' },
      { metric: 'Modern slavery victims (Walk Free 2021)', value: '132,000' },
      { metric: 'Prevalence rate', value: '13.4 per 1,000' },
      { metric: 'Global slavery ranking', value: '7th of 160' },
    ],
    primaryConcerns: ['Kafala system', 'Worker abuse'],
  },
  // Category 11: Boring/Soulless/Empty
  {
    id: 11,
    name: 'Boring/Soulless/Empty',
    tier: 4,
    severity: 'LOW' as const,
    sentimentIntensity: 'MEDIUM' as const,
    sources: [
      { source: 'Quora', tier: 3, type: 'Forum', credibilityScore: 4 },
      { source: 'YouTube', tier: 4, type: 'Video', credibilityScore: 3 },
    ],
    keyQuotes: [
      { text: 'Definitely soulless. First of all there is no culture. It\'s been washed away with the hundreds of nationalities living in it.', author: 'Quora, March 2016' },
    ],
    dataPoints: [],
    primaryConcerns: ['Lack of culture', 'Superficial experience'],
  },
  // Category 12: Polluted/Dirty/Unhealthy
  {
    id: 12,
    name: 'Polluted/Dirty/Unhealthy',
    tier: 1,
    severity: 'HIGH' as const,
    sentimentIntensity: 'MEDIUM-HIGH' as const,
    sources: [
      { source: 'IQAir', tier: 2, type: 'Data', credibilityScore: 7 },
      { source: 'Human Rights Watch', tier: 1, type: 'NGO', credibilityScore: 10 },
      { source: 'ScienceDirect', tier: 2, type: 'Academic', credibilityScore: 8 },
    ],
    keyQuotes: [],
    iqAirData: {
      dubaiGlobalRank: 'Top 10 most polluted cities',
      primaryCauses: 'Desert dust, storms, vehicular emissions',
      aqiTypicalReading: 'Over 150 almost every day',
    },
    airPollutionHealthImpact: {
      uaePopulation: 'Nearly 10 million',
      manMadePM25: 'Over 90%',
      pm25VsWhoGuidelines: '3x higher (30 government stations)',
      annualOutdoorAirPollutionDeaths: '~1,872',
      indoorAirPollutionDeathsGlobally: '4.5 million/year',
    },
    pollutionSources: [
      { source: 'Factories and industries', contribution: 'Over 2/3 of PM2.5 particles' },
      { source: 'Vehicles', contribution: 'Almost 1/5 of pollution' },
      { source: 'Power plants and desalination', contribution: 'Additional harmful gases' },
      { source: 'Sandstorms', contribution: 'Worsens ozone and CO levels' },
    ],
    indoorDustContamination: {
      indices: [
        { index: 'PLI', range: '0.26-0.58', interpretation: '<1 = no pollution' },
        { index: 'PLI_d', range: '0.60-1.61', interpretation: 'Low-concentration removed' },
        { index: 'Nemerow Index', range: '18.02-45.56', interpretation: 'High contamination' },
        { index: 'CPI', range: '3.09-5.43', interpretation: 'Heavy pollution' },
      ],
      elementConcentrations: [
        { element: 'Ca', min: 8033, mean: 14170, max: 20421 },
        { element: 'K', min: 3919, mean: 9159, max: 17984 },
        { element: 'Mg', min: 834, mean: 1876, max: 4973 },
        { element: 'Al', min: 349, mean: 1034, max: 1883 },
        { element: 'Fe', min: 568, mean: 997, max: 1572 },
        { element: 'Zn', min: 26, mean: 247, max: 397 },
        { element: 'Ba', min: 29, mean: 85, max: 310 },
        { element: 'Cu', min: 3, mean: 94, max: 310 },
        { element: 'Cr', min: 19, mean: 57, max: 298 },
        { element: 'Ni', min: 30, mean: 52, max: 94 },
      ],
    },
    cop28AirQualityIncident: {
      description: 'Air pollution reached unhealthy levels during COP28 opening weekend',
      ranking: 'UAE ranked very low performer on Climate Change Performance Index',
      adnocAction: 'ADNOC increased production capacity from 4M to 5M barrels per day',
    },
    dataPoints: [
      { metric: 'Dubai global pollution rank', value: 'Top 10 most polluted cities' },
      { metric: 'AQI typical reading', value: 'Over 150 almost every day' },
      { metric: 'PM2.5 vs WHO guidelines', value: '3x higher' },
      { metric: 'Annual outdoor air pollution deaths', value: '~1,872' },
      { metric: 'Man-made PM2.5', value: 'Over 90%' },
      { metric: 'UAE population', value: 'Nearly 10 million' },
    ],
    primaryConcerns: ['Air quality', 'Environmental damage'],
  },
  // Category 13: Hypocritical/Double Standards
  {
    id: 13,
    name: 'Hypocritical/Double Standards',
    tier: 1,
    severity: 'HIGH' as const,
    sentimentIntensity: 'HIGH' as const,
    sources: [
      { source: 'Human Rights Watch', tier: 1, type: 'NGO', credibilityScore: 10 },
    ],
    keyQuotes: [],
    worldToleranceSummitHypocrisy: [
      { claim: 'Summit aimed to celebrate diversity', reality: 'HRW: laughable to call UAE tolerant' },
      { claim: 'Tolerance messaging', reality: 'Sustained assault on freedom of expression since 2011' },
      { claim: 'Human rights progress', reality: 'People detained for undermining national unity' },
      { claim: 'Tolerance', reality: 'Cruel fantasy per HRW' },
    ],
    imprisonedIndividuals: [
      { person: 'Ahmed Mansoor', status: 'Award-winning human rights defender', sentence: '10 years', reason: 'Free speech offenses' },
      { person: 'Nasser bin-Ghaith', status: 'Prominent academic', sentence: '10 years (disappeared Aug 2015)', reason: 'Peaceful criticism' },
      { person: 'Tayseer al-Najjar', status: 'Jordanian journalist', sentence: '~3 years', reason: 'Facebook posts' },
      { person: 'Matthew Hedges', status: 'British academic', sentence: 'Trial pending', reason: 'Spying charges (due process violations)' },
      { person: 'Sheikha Latifa', status: 'Daughter of Dubai ruler', sentence: 'Seized March 2018', reason: 'Attempted escape' },
    ],
    dataPoints: [
      { claim: 'Summit aimed to celebrate diversity', reality: 'HRW: laughable to call UAE tolerant' },
      { claim: 'Tolerance messaging', reality: 'Sustained assault on freedom of expression since 2011' },
      { claim: 'Human rights progress', reality: 'People detained for undermining national unity' },
    ],
    primaryConcerns: ['Tolerance summits', 'Contradictions'],
  },
  // Category 14: Wasteful/Flashy/Vulgar/Excessive
  {
    id: 14,
    name: 'Wasteful/Flashy/Vulgar/Excessive',
    tier: 3,
    severity: 'MEDIUM' as const,
    sentimentIntensity: 'MEDIUM' as const,
    sources: [
      { source: 'Escape Artist', tier: 3, type: 'Blog', credibilityScore: 5 },
      { source: 'Far Out Magazine', tier: 2, type: 'Magazine', credibilityScore: 6 },
    ],
    keyQuotes: [],
    escapeArtistReasons: [
      'High cost of living',
      'Only cheap labor is inexpensive',
      'Environmental harm from man-made islands (among 20 total)',
    ],
    dataPoints: [
      { reason: 'High cost of living', impact: 'High' },
      { reason: 'Only cheap labor is inexpensive', impact: 'High' },
      { reason: 'Environmental harm from man-made islands', impact: 'Medium' },
    ],
    primaryConcerns: ['Excess', 'Vulgar displays'],
  },
  // Category 15: Regret/Waste of Time/Never Again
  {
    id: 15,
    name: 'Regret/Waste of Time/Never Again',
    tier: 4,
    severity: 'MEDIUM' as const,
    sentimentIntensity: 'HIGH' as const,
    sources: [
      { source: 'YouTube', tier: 4, type: 'Video', credibilityScore: 3 },
      { source: 'Backpack Me', tier: 3, type: 'Blog', credibilityScore: 5 },
      { source: 'Daily Mail', tier: 3, type: 'News', credibilityScore: 5 },
    ],
    keyQuotes: [
      { text: 'Dubai has gone from nothing to what it is now (a great pile of concrete and glass) in almost no time. In a couple of decades, exploited workers...', author: 'Backpack Me, June 2012' },
    ],
    expatRegretSources: ['YouTube', 'LinkedIn', 'Backpack Me', 'Daily Mail', 'Reddit', 'Quora', 'Instagram', 'Facebook'],
    dataPoints: [
      { metric: 'YouTube video', value: '33 Reasons Why So Many Expats Regret Moving to Dubai' },
    ],
    primaryConcerns: ['Expats leaving', 'Broken dreams'],
  },
  // Category 16: Modern Slavery & Human Rights (Cross-Cutting)
  {
    id: 16,
    name: 'Modern Slavery & Human Rights',
    tier: 1,
    severity: 'CRITICAL' as const,
    sentimentIntensity: 'HIGH' as const,
    sources: [
      { source: 'Walk Free Foundation', tier: 1, type: 'Modern Slavery NGO', credibilityScore: 9 },
      { source: 'U.S. State Department', tier: 1, type: 'Government Report', credibilityScore: 9 },
      { source: 'Human Rights Watch', tier: 1, type: 'Human Rights NGO', credibilityScore: 10 },
    ],
    keyQuotes: [],
    walkFreeData: {
      personsInModernSlavery: '132,000',
      prevalenceRate: '13.4 per 1,000',
      regionalRanking: '2nd highest in Arab States',
      globalRanking: '7th highest out of 160 countries',
      vulnerabilityScore: '40/100',
      governanceIssues: '57/100',
      disenfranchisedGroups: '68/100',
      lackOfBasicNeeds: '27/100',
      inequality: '22/100',
      effectsOfConflict: '6/100',
      governmentResponse: '50/100',
      survivorsIdentifiedSupported: '59/100',
      criminalJusticeMechanisms: '42/100',
      nationalRegionalCoordination: '75/100',
      riskFactorsAddressed: '74/100',
      supplyChains: '0/100',
      forcedMarriageCasesUK: 14,
      traffickingConvictions2021: '18 of 23 (sexual exploitation)',
      gdpPerCapitaPPP: '$66,766',
      population: '9,890,000',
    },
    wikipediaHumanRightsData: {
      activistsJailedTorturedAfterArabSpring: 'Over 100',
      humanRightsPressFreedomRanking: 'Near bottom globally',
      massTrialActivists2013: '94 held in secret detention',
      afghansHeldInEmiratesHumanitarianCity: '2,400-2,700 (15+ months, 2023)',
      guantanamoBayDetaineesTransferredToUAE: 19,
      shiaExpatsDeported: '4,000+',
      notSignatoryToICCPR: 'Yes',
    },
    usStateDept2024Findings: [
      { issue: 'Mass trial (2023)', finding: '84+ defendants violated fair trial rights' },
      { issue: 'Life sentences (original)', finding: '67' },
      { issue: 'Life sentences (upheld March 2025)', finding: '53' },
      { issue: 'Ahmed Mansoor', finding: 'Life sentence' },
      { issue: 'Nasser Bin Ghaith', finding: 'Life sentence (upheld March 2025)' },
      { issue: 'Abdul Rahman Al-Qaradawi', finding: 'Enforced disappearance (Egyptian-Turkish poet, Jan 2025)' },
      { issue: 'Mohammed Farouk Salman', finding: 'Enforced disappearance (Sudanese activist, Jan 2025)' },
      { issue: 'Arms transfers to Sudan', finding: 'Violated UN Security Council arms embargo on Darfur' },
      { issue: 'Weapons identified', finding: 'Chinese guided bombs, howitzers' },
      { issue: 'Civilian deaths from RSF attacks', finding: 'At least 13' },
      { issue: 'kafala system', finding: 'Continued to bind workers, wage theft, excessive hours' },
      { issue: 'Indian human rights defender', finding: 'Detained transiting Dubai (June 2025)' },
      { issue: 'Partitioned apartment evictions', finding: 'Widespread July 2025' },
      { issue: 'Death penalty', finding: 'Resumed after hiatus' },
      { issue: 'Fair trial concerns', finding: 'Serious for capital cases' },
    ],
    documentedViolations: [
      { type: 'Secret prisons', details: 'In Yemen' },
      { type: 'Torture methods', details: '16 documented (electrocution, beatings)' },
      { type: 'Forced disappearances', details: 'Citizens and foreign nationals' },
      { type: 'Surveillance', details: 'Via ToTok app' },
      { type: 'Political prisoners', details: 'Ahmed Mansoor, Nasser Bin Ghaith' },
      { type: 'Deaths in custody', details: 'Alia Abdulnoor (May 2019, cancer denial)' },
      { type: 'Princess Latifa', details: 'Seized by commandos March 2018' },
      { type: 'Ryan Cornelius', details: '30 years, disputed business, tuberculosis in custody' },
      { type: 'Ali Issa Ahmad', details: 'Detained for wearing Qatar flag T-shirt, claims torture' },
      { type: 'Charles Wimberly', details: 'US veteran, 3+ years for CBD oil prescription' },
    ],
    legalPenalties: [
      { offense: 'Homosexuality/extra-marital sex', penalty: 'Minimum 6 months imprisonment' },
      { offense: 'Blasphemy', penalty: '5 years + 500,000-2M dirham fine' },
      { offense: 'Swearing on WhatsApp', penalty: '$68,061 fine + deportation' },
      { offense: 'Cybercrime/criticism', penalty: 'Up to 1M dirham fine' },
      { offense: 'Criticizing Qatar', penalty: '3-15 years imprisonment' },
    ],
    pubMedHealthDisparities: {
      migrantWorkforcePercent: 'About 90% of UAE workforce',
      constructionWorkers: '~500,000',
      domesticWorkers: '~450,000',
      debtBondage: 'Documented',
      wageExploitation: 'Documented',
      physicalSexualPsychologicalAbuse: 'High rates for domestic workers',
      healthOutcomes: 'Serious problems from inhumane conditions',
    },
    dataPoints: [
      { metric: 'Modern slavery victims', value: '132,000' },
      { metric: 'Prevalence rate', value: '13.4 per 1,000' },
      { metric: 'Regional ranking', value: '2nd highest in Arab States' },
      { metric: 'Global ranking', value: '7th highest of 160 countries' },
      { metric: 'Activists jailed/tortured after Arab Spring', value: 'Over 100' },
      { metric: 'Mass trial activists (2013)', value: '94 held in secret detention' },
      { metric: 'Afghans held in Emirates Humanitarian City', value: '2,400-2,700 (15+ months, 2023)' },
      { metric: 'Guantanamo Bay detainees transferred to UAE', value: '19' },
      { metric: 'Shia expats deported', value: '4,000+' },
      { metric: 'Mass trial (2023)', value: '84+ defendants violated fair trial rights' },
      { metric: 'Life sentences (original)', value: '67' },
      { metric: 'Life sentences (upheld March 2025)', value: '53' },
      { metric: 'Torture methods documented', value: '16' },
      { metric: 'Ahmed Mansoor', status: 'Life imprisonment (since 2017)' },
      { metric: 'Nasser Bin Ghaith', status: 'Life imprisonment (upheld 2025)' },
    ],
    primaryConcerns: ['Kafala system', 'Political prisoners', 'Surveillance'],
  },
]

// Search Volume & Sentiment Analysis
export const searchVolumeSentimentAnalysis = [
  { queryTheme: 'Terrible/Horrible/Worst', sentimentIntensity: 'HIGH', primaryConcerns: ['Human rights', 'labor exploitation', 'artificiality'] },
  { queryTheme: 'Disappointing/Disaster', sentimentIntensity: 'HIGH', primaryConcerns: ['Military interventions', 'broken promises'] },
  { queryTheme: 'Overrated/Overpriced', sentimentIntensity: 'MEDIUM-HIGH', primaryConcerns: ['Value proposition', 'authenticity'] },
  { queryTheme: 'Corruption', sentimentIntensity: 'HIGH', primaryConcerns: ['Systemic graft', 'lack of accountability'] },
  { queryTheme: 'Authoritarian', sentimentIntensity: 'HIGH', primaryConcerns: ['Political repression', 'lack of democracy'] },
  { queryTheme: 'Racist/Discriminatory', sentimentIntensity: 'HIGH', primaryConcerns: ['Treatment of South Asian workers', 'xenophobia'] },
  { queryTheme: 'Fake/Artificial', sentimentIntensity: 'MEDIUM', primaryConcerns: ['City feels manufactured', 'soulless'] },
  { queryTheme: 'Dangerous/Unsafe', sentimentIntensity: 'MEDIUM', primaryConcerns: ['Traffic', 'online criticism risks'] },
  { queryTheme: 'Exploitative', sentimentIntensity: 'HIGH', primaryConcerns: ['kafala system', 'worker abuse'] },
  { queryTheme: 'Boring/Soulless', sentimentIntensity: 'MEDIUM', primaryConcerns: ['Lack of culture', 'superficial experience'] },
  { queryTheme: 'Polluted', sentimentIntensity: 'MEDIUM-HIGH', primaryConcerns: ['Air quality', 'environmental damage'] },
  { queryTheme: 'Hypocritical', sentimentIntensity: 'HIGH', primaryConcerns: ['Tolerance summit contradictions'] },
  { queryTheme: 'Wasteful', sentimentIntensity: 'MEDIUM', primaryConcerns: ['Excess', 'vulgar displays'] },
  { queryTheme: 'Regret', sentimentIntensity: 'HIGH', primaryConcerns: ['Expats leaving', 'broken dreams'] },
]

// Corporate Entities
export const corporateEntities = [
  { company: 'ADNOC', connection: 'Oil/gas', issue: 'Increased production to 5M barrels/day' },
  { company: 'Human Rights Watch', connection: 'NGO', issue: 'Documenting violations' },
  { company: 'Amnesty International', connection: 'NGO', issue: 'Documenting violations' },
  { company: 'Walk Free', connection: 'NGO', issue: 'Modern slavery research' },
]

// Data Quality Notes
export const dataQualityNotes = [
  { aspect: 'Evidence base', assessment: 'Strong - major human rights organizations, government reports, academic studies' },
  { aspect: 'Consistency', assessment: 'High - multiple sources corroborate major claims (kafala, labor abuse, air pollution)' },
  { aspect: 'Temporal relevance', assessment: 'Strong - many sources from 2023-2026 indicating current concerns' },
  { aspect: 'Cross-linguistic', assessment: 'Confirmed - Arabic terms in original queries confirmed by English-language criticism' },
  { aspect: 'Credibility range', assessment: 'Wide - Tier 1 (Amnesty/HRW) to Tier 4 (social media)' },
]

// Contradictory Information Notes
export const contradictoryInformationNotes = [
  { claim: 'Road danger ranking', source: 'The Atlantic (2011)', contradiction: 'No current comparative data available', assessment: 'Needs update' },
  { claim: 'COP28 pollution claims', source: 'HRW', contradiction: 'UAE government disputes measurements', assessment: 'Requires verification' },
  { claim: 'Labor reform progress', source: 'Government', contradiction: 'NGOs report continued violations', assessment: 'Credibility differential' },
]

// Research Methodology Notes
export const researchMethodologyNotes = [
  'Search Terms: Arabic and English negative sentiment terms combined',
  'Source Selection: Prioritized Tier 1-2 sources for key statistics',
  'Date Range: 2009-2026 with emphasis on 2023-2026',
  'Language Coverage: English primary, Arabic terms verified',
  'Limitations: Some domains blocked (Reddit, Twitter/X, certain news sites)',
]

// ============================================================================
// HOOKS FOR DATA ACCESS
// ============================================================================

export function useNegativeSentimentData() {
  return {
    overview: negativeSentimentOverview,
    sourceCredibility: negativeSourceCredibilityMatrix,
    relevanceAssessment: uaeRelevanceAssessment,
    categories: negativeCategories,
    categoriesEnriched: negativeCategoriesEnriched,
    themes: narrativeThemes,
    statistics: statisticsSummary,
    humanRightsDefenders,
    governmentEntities: negativeGovernmentEntities,
    arrestCases,
    militaryInterventions,
    metrics: negativeSentimentMetrics,
    severityDistribution: severityDistributionData,
    sentimentTrend: sentimentTrendData,
    categorySeverity: categorySeverityData,
    // New enriched data
    tierDefinitions,
    searchVolumeAnalysis: searchVolumeSentimentAnalysis,
    corporateEntities,
    dataQualityNotes,
    contradictoryInformationNotes,
    researchMethodologyNotes,
  }
}

// ============================================================================
// CRITICISM & COMPLAINT DATA (MD 9-6)
// ============================================================================
// COMPLAINT VOLUME METRICS
// ============================================================================

export interface ConsumerComplaintMetric {
  year: number
  complaints: number
  trend: 'declining' | 'stable' | 'rising'
}

export interface RentalDisputeMetric {
  period: string
  agreements: number
  settlementValueAED: number
  averageResolutionDays: number
  judgesCount: number
}

export interface GrievanceMechanism {
  name: string
  feeAED: number
  processingDays: number
  channel: string
  authority: string
  tier: TierLevel
}

export interface LegalPenalty {
  violationType: string
  penalty: string
  governingLaw: string
}

// ============================================================================
// COMPLAINT CATEGORIES DATA
// ============================================================================

export interface CriticismCategory {
  id: string
  name: string
  sentiment: { positive: number; negative: number; neutral: number; overall: number; volume: number }
  metrics: Record<string, number | string>
  alertLevel: AlertLevel
  trend: { direction: string; changePercent: number; period: string; value: number | string }
  keyDrivers: string[]
  lastUpdated: string
}

// Consumer Complaints (Ministry of Economy)
export const consumerComplaintsData: CriticismCategory = {
  id: 'criticism-consumer',
  name: 'Consumer Complaints',
  sentiment: { positive: 5, negative: 75, neutral: 20, overall: -0.70, volume: 10674 },
  metrics: {
    complaints2021: 4718,
    complaints2022: 3313,
    complaints2023: 2943,
    trendPercent: -37.6,
  },
  alertLevel: 'YELLOW' as AlertLevel,
  trend: { direction: 'declining', changePercent: -37.6, period: '2021-2023', value: 2943 },
  keyDrivers: [
    'Consumer protection violations under Federal Decree Law No. 5 of 2023',
    'Misleading pricing practices',
    'Refusal to repair/replace defective products',
    'Lack of clear information provision',
  ],
  lastUpdated: '2026-04-28',
}

// Rental Disputes
export const rentalDisputesData: CriticismCategory = {
  id: 'criticism-rental',
  name: 'Rental Disputes',
  sentiment: { positive: 2, negative: 90, neutral: 8, overall: -0.88, volume: 443 },
  metrics: {
    q2_2025Agreements: 443,
    settlementValueAED: 190.7,
    averageResolutionDays: 6,
    judgesCount: 50,
    filingFeePercent: 3.5,
    minimumFeeAED: 500,
    maximumFeeAED: 20000,
  },
  alertLevel: 'RED' as AlertLevel,
  trend: { direction: 'rising', changePercent: 15, period: 'Q2 2025', value: 443 },
  keyDrivers: [
    'Rent increases 12-20% in key neighborhoods',
    'Landlord-tenant disputes over evictions',
    'Renewal issues and compensation claims',
    'Maintenance obligation disputes',
  ],
  lastUpdated: '2026-04-28',
}

// Labour/Employment Complaints
export const labourComplaintsData: CriticismCategory = {
  id: 'criticism-labour',
  name: 'Salary & Employment Complaints',
  sentiment: { positive: 5, negative: 80, neutral: 15, overall: -0.75, volume: 5000000 },
  metrics: {
    salaryCutsReported: 50,
    salaryCutRange: '30-50%',
    unpaidWagesCaseAED: 110400,
    nonCitizensPercent: 89,
    workersAffectedMillions: 5,
  },
  alertLevel: 'RED' as AlertLevel,
  trend: { direction: 'rising', changePercent: 30, period: '2026', value: -45 },
  keyDrivers: [
    'Salary cut without consent = breach of contract',
    'Delayed payment = illegal',
    'Forced unpaid leave = breach of contract',
    'Complete non-payment cannot be implied consent',
  ],
  lastUpdated: '2026-04-28',
}

// Customer Service Quality
export const customerServiceData: CriticismCategory = {
  id: 'criticism-customer-service',
  name: 'Customer Service Quality',
  sentiment: { positive: 3, negative: 85, neutral: 12, overall: -0.82, volume: 83000000 },
  metrics: {
    hoursLostAnnual: 83,
    workingDaysLost: 10375000,
    hoursPerYear: 83,
    daysPerYear: 10,
  },
  alertLevel: 'RED' as AlertLevel,
  trend: { direction: 'stable', changePercent: 0, period: '2024', value: 83 },
  keyDrivers: [
    'AI failures causing delays and empathy gaps',
    'Poor issue resolution',
    'Fragmented service experiences',
    'Limited operational customer service points',
  ],
  lastUpdated: '2026-04-28',
}

// Telecom Services
export const telecomComplaintsData: CriticismCategory = {
  id: 'criticism-telecom',
  name: 'Telecom Services',
  sentiment: { positive: 8, negative: 72, neutral: 20, overall: -0.64, volume: 1013000 },
  metrics: {
    priceDissatisfaction: 75,
    serviceAcceptable: 34,
    covidPriceDissatisfied: 78.98,
    covidServiceDissatisfied: 62.78,
    lackCompetitivePricing: 44,
    smePackagesLacking: 35,
  },
  alertLevel: 'YELLOW' as AlertLevel,
  trend: { direction: 'stable', changePercent: 0, period: '2020-2025', value: -72 },
  keyDrivers: [
    'High prices relative to service quality',
    'Lack of competitive pricing vs other countries',
    'SME-focused packages lacking',
    'September 2025 Red Sea cable outage affecting all 9 emirates',
  ],
  lastUpdated: '2026-04-28',
}

// School Fees
export const schoolFeesData: CriticismCategory = {
  id: 'criticism-school-fees',
  name: 'School Fees',
  sentiment: { positive: 2, negative: 90, neutral: 8, overall: -0.88, volume: 1000000 },
  metrics: {
    lowestAnnualUSD: 9500,
    highestAnnualUSD: 32600,
    entryLevelMonthlyUSD: 272,
    feeIncreaseRate: 7,
    increaseVsInflation: 2,
    livingCostConsumption: 50,
    gccSchools2022: 34081,
    gccSchools2027: 35208,
  },
  alertLevel: 'RED' as AlertLevel,
  trend: { direction: 'rising', changePercent: 7, period: '2023-24', value: 90 },
  keyDrivers: [
    'Fees rising at 2x inflation rate',
    'School costs nearly tripling',
    'Quality questioned despite high costs',
    'Profit-driven perception of school operators',
  ],
  lastUpdated: '2026-04-28',
}

// Traffic Congestion
export const trafficComplaintsData: CriticismCategory = {
  id: 'criticism-traffic',
  name: 'Traffic & Commuting',
  sentiment: { positive: 5, negative: 80, neutral: 15, overall: -0.75, volume: 3000000 },
  metrics: {
    hoursWastedAnnual: 35,
    dailyCommuters: 1000000,
    vehicleIncreaseRate: 10,
    employeesDrivingAlone: 80,
    remoteWorkPeakReduction: 30,
    dubai2040Target: 5800000,
    currentPopulation: 3800000,
  },
  alertLevel: 'RED' as AlertLevel,
  trend: { direction: 'stable', changePercent: 0, period: '2024', value: 80 },
  keyDrivers: [
    'E11 road described as site of worst traffic collision in UAE history',
    'Sharjah-Dubai corridor bottlenecks',
    'Infrastructure strain from rapid population growth',
    'Vehicle increase rate 10% vs 4% globally',
  ],
  lastUpdated: '2026-04-28',
}

// Banking & Financial
export const bankingComplaintsData: CriticismCategory = {
  id: 'criticism-banking',
  name: 'Banking & Financial Services',
  sentiment: { positive: 5, negative: 70, neutral: 25, overall: -0.65, volume: 338000000 },
  metrics: {
    fraudLossesUSD: 338,
    fraudLossesYear: 2023,
    hiddenChargesConcern: 69,
    foreignTransactionFee: 5,
  },
  alertLevel: 'YELLOW' as AlertLevel,
  trend: { direction: 'stable', changePercent: 0, period: '2023', value: -70 },
  keyDrivers: [
    'Hidden bank fees and foreign transaction charges',
    'UAE banking industry fraud losses',
    'Lack of transparency in exchange services',
    'Central Bank fee cap regulations pending',
  ],
  lastUpdated: '2026-04-28',
}

// Employer Conduct
export const employerConductData: CriticismCategory = {
  id: 'criticism-employer',
  name: 'Employer Conduct',
  sentiment: { positive: 8, negative: 75, neutral: 17, overall: -0.67, volume: 4000000 },
  metrics: {
    verbalAbusePenalty: 6,
    verbalAbuseFineAED: 5000,
    legalBasis: 'Article 427, Federal Law No. 31 of 2021',
    safeEnvironmentBasis: 'Article 13(13)',
    harassmentProhibition: 'Article 14(2)',
  },
  alertLevel: 'RED' as AlertLevel,
  trend: { direction: 'stable', changePercent: 0, period: '2024-2026', value: -75 },
  keyDrivers: [
    'Verbal abuse in workplace',
    'Contract exploitation (unlimited vs limited contracts)',
    'Probation termination abuses',
    'Work permit and recruitment issues',
  ],
  lastUpdated: '2026-04-28',
}

// Landlord Complaints
export const landlordComplaintsData: CriticismCategory = {
  id: 'criticism-landlord',
  name: 'Landlord Disputes',
  sentiment: { positive: 5, negative: 80, neutral: 15, overall: -0.75, volume: 500000 },
  metrics: {
    annualDisputes: 500000,
    q2_2025Agreements: 443,
    settlementValueMillionAED: 190.7,
    evictionNoticeDays: 30,
  },
  alertLevel: 'RED' as AlertLevel,
  trend: { direction: 'rising', changePercent: 15, period: 'Q2 2025', value: 80 },
  keyDrivers: [
    'Landlord maintenance obligations (Article 16, Law No. 26/2007)',
    'Eviction for non-payment (30-day notice)',
    'Early termination disputes',
    'Harassment through various means',
  ],
  lastUpdated: '2026-04-28',
}

// Government Digital Services
export const governmentAppsData: CriticismCategory = {
  id: 'criticism-gov-apps',
  name: 'Government Digital Services',
  sentiment: { positive: 5, negative: 75, neutral: 20, overall: -0.70, volume: 10000000 },
  metrics: {
    superAppFailures: 1,
    statement: 'Most super-apps in Dubai are designed to fail',
    source: 'LinkedIn',
  },
  alertLevel: 'YELLOW' as AlertLevel,
  trend: { direction: 'declining', changePercent: -5, period: '2024-2026', value: -75 },
  keyDrivers: [
    'UAE Pass registration issues',
    'Dubai Police App availability issues',
    'RTA Dubai app update problems',
    'MOI UAE app functionality gaps',
  ],
  lastUpdated: '2026-04-28',
}

// Hotels/Hospitality
export const hospitalityComplaintsData: CriticismCategory = {
  id: 'criticism-hospitality',
  name: 'Hotels & Hospitality',
  sentiment: { positive: 10, negative: 75, neutral: 15, overall: -0.65, volume: 50000 },
  metrics: {
    landmarkGrandHotelRating: 2.5,
    dirtyRoomComplaints: 4,
    acFailureComplaints: 3,
    rudeStaffComplaints: 4,
  },
  alertLevel: 'YELLOW' as AlertLevel,
  trend: { direction: 'stable', changePercent: 0, period: '2024', value: -75 },
  keyDrivers: [
    'Dirty rooms and maintenance issues',
    'AC failures and temperature control',
    'Rude and untrained staff',
    'Management dismissiveness',
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// GRIEVANCE MECHANISMS
// ============================================================================

export const grievanceMechanisms: GrievanceMechanism[] = [
  {
    name: 'Ministry of Justice (MOJ)',
    feeAED: 30,
    processingDays: 15,
    channel: 'MOJ App, Online via UAE Pass',
    authority: 'Federal Public Prosecution',
    tier: 0,
  },
  {
    name: 'Federal Grievance Committee',
    feeAED: 0,
    processingDays: 5,
    channel: 'Written submission',
    authority: 'Federal Decree Law No. 49 of 2022',
    tier: 0,
  },
  {
    name: 'Consumer Complaints (MOET)',
    feeAED: 0,
    processingDays: 0,
    channel: '800-1222, moec.gov.ae, consumerrights.ae',
    authority: 'Ministry of Economy & Tourism',
    tier: 0,
  },
  {
    name: 'MOHRE Employment Disputes',
    feeAED: 0,
    processingDays: 0,
    channel: 'App, WhatsApp 600590000',
    authority: 'Ministry of Human Resources & Emiratisation',
    tier: 0,
  },
  {
    name: 'Rental Dispute Centre (RDC)',
    feeAED: 0,
    processingDays: 6,
    channel: 'rdc.gov.ae',
    authority: 'Dubai Land Department',
    tier: 0,
  },
  {
    name: 'TDRA Telecom Complaints',
    feeAED: 0,
    processingDays: 0,
    channel: 'Website',
    authority: 'Telecommunications and Digital Government Regulatory Authority',
    tier: 0,
  },
]

// ============================================================================
// LEGAL PENALTIES
// ============================================================================

export const legalPenalties: LegalPenalty[] = [
  {
    violationType: 'Consumer Protection Violation',
    penalty: 'Up to 2 years imprisonment + AED 2 million fine',
    governingLaw: 'Federal Decree Law No. 5 of 2023',
  },
  {
    violationType: 'Verbal Abuse (Libel/Slander)',
    penalty: '6 months imprisonment or Dh5,000 fine',
    governingLaw: 'Article 427, Federal Law No. 31 of 2021',
  },
  {
    violationType: 'Forced Unpaid Leave',
    penalty: 'Breach of contract - Labour Law',
    governingLaw: 'Federal Decree Law No. 33 of 2021',
  },
  {
    violationType: 'Salary Cut Without Consent',
    penalty: 'Breach of contract - Labour Law',
    governingLaw: 'Federal Decree Law No. 33 of 2021',
  },
]

// ============================================================================
// SENTIMENT BY TOPIC
// ============================================================================

export interface TopicSentiment {
  topic: string
  positive: number
  neutral: number
  negative: number
  dominantSentiment: string
}

export const topicSentiments: TopicSentiment[] = [
  { topic: 'Government Complaint Mechanisms', positive: 15, neutral: 30, negative: 55, dominantSentiment: 'NEGATIVE' },
  { topic: 'Cost of Living', positive: 5, neutral: 10, negative: 85, dominantSentiment: 'HIGHLY NEGATIVE' },
  { topic: 'Rent Situation', positive: 2, neutral: 8, negative: 90, dominantSentiment: 'CRITICAL NEGATIVE' },
  { topic: 'Salary/Employment', positive: 5, neutral: 15, negative: 80, dominantSentiment: 'NEGATIVE' },
  { topic: 'Traffic', positive: 5, neutral: 15, negative: 80, dominantSentiment: 'NEGATIVE' },
  { topic: 'Customer Service', positive: 3, neutral: 12, negative: 85, dominantSentiment: 'NEGATIVE' },
  { topic: 'Telecom Services', positive: 8, neutral: 20, negative: 72, dominantSentiment: 'NEGATIVE' },
  { topic: 'Banking', positive: 5, neutral: 25, negative: 70, dominantSentiment: 'NEGATIVE' },
  { topic: 'School Fees', positive: 2, neutral: 8, negative: 90, dominantSentiment: 'CRITICAL NEGATIVE' },
  { topic: 'Healthcare', positive: 10, neutral: 30, negative: 60, dominantSentiment: 'NEGATIVE' },
  { topic: 'Employer Conduct', positive: 8, neutral: 17, negative: 75, dominantSentiment: 'NEGATIVE' },
  { topic: 'Landlord Relations', positive: 5, neutral: 15, negative: 80, dominantSentiment: 'NEGATIVE' },
  { topic: 'Government Apps', positive: 5, neutral: 20, negative: 75, dominantSentiment: 'NEGATIVE' },
  { topic: 'Hotels/Hospitality', positive: 10, neutral: 15, negative: 75, dominantSentiment: 'NEGATIVE' },
]

// ============================================================================
// SENTIMENT BY PLATFORM
// ============================================================================

export interface PlatformSentiment {
  platform: string
  score: number
  volume: string
  credibility: string
}

export const platformSentiments: PlatformSentiment[] = [
  { platform: 'Twitter/X', score: -78, volume: 'high', credibility: 'Tier 2' },
  { platform: 'Reddit r/dubai', score: -72, volume: 'high', credibility: 'Tier 2' },
  { platform: 'Reddit r/UAE', score: -68, volume: 'medium', credibility: 'Tier 2' },
  { platform: 'TripAdvisor', score: -65, volume: 'medium', credibility: 'Tier 2' },
  { platform: 'App Store Reviews', score: -82, volume: 'high', credibility: 'Tier 3' },
  { platform: 'LinkedIn', score: -45, volume: 'medium', credibility: 'Tier 1' },
  { platform: 'Government Portals', score: 20, volume: 'N/A', credibility: 'Tier 0' },
  { platform: 'News Articles', score: -35, volume: 'medium', credibility: 'Tier 1' },
]

// ============================================================================
// TREND ANALYSIS 2024-2026
// ============================================================================

export interface TrendAnalysisRow {
  category: string
  level2024: string
  level2025: string
  level2026: string
  direction: 'WORSENING' | 'STATIC' | 'IMPROVING'
}

export const complaintTrendAnalysis: TrendAnalysisRow[] = [
  { category: 'Cost of Living Complaints', level2024: 'HIGH', level2025: 'CRITICAL', level2026: 'CRITICAL', direction: 'WORSENING' },
  { category: 'Rent Complaints', level2024: 'HIGH', level2025: 'CRITICAL', level2026: 'CRITICAL', direction: 'WORSENING' },
  { category: 'Salary Complaints', level2024: 'MEDIUM', level2025: 'HIGH', level2026: 'CRITICAL', direction: 'WORSENING' },
  { category: 'Telecom Complaints', level2024: 'MEDIUM', level2025: 'MEDIUM', level2026: 'MEDIUM', direction: 'STATIC' },
  { category: 'Customer Service', level2024: 'HIGH', level2025: 'HIGH', level2026: 'HIGH', direction: 'STATIC' },
  { category: 'Government App Issues', level2024: 'MEDIUM', level2025: 'MEDIUM', level2026: 'HIGH', direction: 'WORSENING' },
]

// ============================================================================
// ISSUE CLASSIFICATION
// ============================================================================

export interface IssueClassification {
  issue: string
  relevance: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  justification: string
  populationAffected: string
}

export const issueClassifications: IssueClassification[] = [
  { issue: 'Cost of Living', relevance: 'CRITICAL', justification: 'Affects 89% non-citizens; salary cuts 30-50%', populationAffected: '~8.1 million' },
  { issue: 'Rent Affordability', relevance: 'CRITICAL', justification: '12-20% increases; driving displacement', populationAffected: '~6.5 million renters' },
  { issue: 'Salary Delays/Cuts', relevance: 'CRITICAL', justification: 'Legal violations; economic survival', populationAffected: '~5 million workers' },
  { issue: 'School Fees', relevance: 'HIGH', justification: 'Tripling costs; 50% of living expenses', populationAffected: '~1 million families' },
  { issue: 'Customer Service', relevance: 'HIGH', justification: '83M hours lost; 10M days productivity loss', populationAffected: 'All residents' },
  { issue: 'Traffic', relevance: 'HIGH', justification: '35 hrs/year; infrastructure strain', populationAffected: '~3 million commuters' },
  { issue: 'Telecom Outages', relevance: 'MEDIUM', justification: 'Red Sea cable; regional vulnerability', populationAffected: 'All residents' },
  { issue: 'Healthcare Access', relevance: 'MEDIUM', justification: 'Insurance delays; bills', populationAffected: 'All residents' },
  { issue: 'Employer Abuse', relevance: 'HIGH', justification: 'Legal violations; exploitation', populationAffected: '~4 million workers' },
  { issue: 'Landlord Disputes', relevance: 'HIGH', justification: '443 cases/Q2; Dh190.7M', populationAffected: '~500K disputes/year' },
  { issue: 'Government Digital', relevance: 'MEDIUM', justification: 'App failures; UX issues', populationAffected: 'All residents' },
  { issue: 'Banking/Fraud', relevance: 'MEDIUM', justification: '$338M losses', populationAffected: 'All bank users' },
]

// ============================================================================
// GEOPOLITICAL CONTEXT
// ============================================================================

export interface GeopoliticalFactor {
  factor: string
  impact: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  relevance: string
}

export const geopoliticalFactors: GeopoliticalFactor[] = [
  { factor: 'US-Israel War on Iran', impact: 'CRITICAL', relevance: 'Economic anxiety, job losses, salary cuts' },
  { factor: 'Regional Tensions', impact: 'CRITICAL', relevance: 'Layoffs, business closures' },
  { factor: 'Red Sea Cable Cuts', impact: 'MEDIUM', relevance: 'Internet outages, business disruption' },
  { factor: 'Dubai 2040 Target', impact: 'HIGH', relevance: 'Infrastructure growth, population increase' },
]

// ============================================================================
// COMPOSITE INDEX
// ============================================================================

export interface CompositeIndexComponent {
  indicator: string
  weight: number
  currentValue: string
  score: number
}

export const economicStressIndex: CompositeIndexComponent[] = [
  { indicator: 'Rent increases', weight: 25, currentValue: '12-20%', score: 8 },
  { indicator: 'Salary cuts', weight: 25, currentValue: '30-50% reported', score: 7 },
  { indicator: 'School fees', weight: 15, currentValue: '2x inflation', score: 7 },
  { indicator: 'Customer service losses', weight: 10, currentValue: '83M hours', score: 6 },
  { indicator: 'Banking fraud', weight: 10, currentValue: '$338M', score: 5 },
  { indicator: 'Traffic losses', weight: 15, currentValue: '35 hrs/year', score: 5 },
]

export const compositeStressScore = 6.7

// ============================================================================
// COMPLAINT MECHANISM EFFECTIVENESS
// ============================================================================

export interface ComplaintMechanism {
  mechanism: string
  accessibility: string
  responseTime: string
  effectiveness: string
}

export const complaintMechanismEffectiveness: ComplaintMechanism[] = [
  { mechanism: 'MOJ Grievance', accessibility: 'High', responseTime: '15 days', effectiveness: 'MEDIUM' },
  { mechanism: 'MOHRE Complaints', accessibility: 'High', responseTime: 'Variable', effectiveness: 'HIGH' },
  { mechanism: 'Consumer Protection', accessibility: 'High', responseTime: 'Variable', effectiveness: 'MEDIUM' },
  { mechanism: 'RDC', accessibility: 'High', responseTime: '6 days avg', effectiveness: 'HIGH' },
  { mechanism: 'Government Apps', accessibility: 'Low', responseTime: 'N/A', effectiveness: 'LOW' },
]

// ============================================================================
// RISK INDICATORS SUMMARY
// ============================================================================

export const riskIndicators = [
  { category: 'Cost of Living', score: 'CRITICAL' as const, trend: 'Worsening' as const },
  { category: 'Rent Affordability', score: 'CRITICAL' as const, trend: 'Worsening' as const },
  { category: 'Salary/Employment', score: 'HIGH' as const, trend: 'Declining' as const },
  { category: 'Customer Service', score: 'HIGH' as const, trend: 'Static' as const },
  { category: 'Telecom Services', score: 'MEDIUM-HIGH' as const, trend: 'Static' as const },
  { category: 'Government Digital Services', score: 'MEDIUM' as const, trend: 'Mixed' as const },
  { category: 'School Fees', score: 'HIGH' as const, trend: 'Rising' as const },
]

// ============================================================================
// QUANTITATIVE DATA REGISTRY
// ============================================================================

export interface StatisticEntry {
  id: string
  category: string
  metric: string
  value: number | string
  unit: string
  source: string
  year: string | number
}

export const statisticsRegistry: StatisticEntry[] = [
  { id: 'STAT-001', category: 'Consumer', metric: 'Complaints received', value: 4718, unit: 'count', source: 'MOET', year: 2021 },
  { id: 'STAT-002', category: 'Consumer', metric: 'Complaints received', value: 3313, unit: 'count', source: 'MOET', year: 2022 },
  { id: 'STAT-003', category: 'Consumer', metric: 'Complaints received', value: 2943, unit: 'count', source: 'MOET', year: 2023 },
  { id: 'STAT-004', category: 'Rental', metric: 'Reconciliation agreements', value: 443, unit: 'cases', source: 'RDC', year: 'Q2 2025' },
  { id: 'STAT-005', category: 'Rental', metric: 'Settlement value', value: 190.7, unit: 'million AED', source: 'RDC', year: 'Q2 2025' },
  { id: 'STAT-006', category: 'Rental', metric: 'Average resolution', value: 6, unit: 'days', source: 'RDC', year: 'Q2 2025' },
  { id: 'STAT-007', category: 'Customer Service', metric: 'Hours lost', value: 83, unit: 'million hours', source: 'ServiceNow', year: 2024 },
  { id: 'STAT-008', category: 'Customer Service', metric: 'Days lost', value: 10, unit: 'million days', source: 'ServiceNow', year: 2024 },
  { id: 'STAT-009', category: 'Telecom', metric: 'Price dissatisfaction', value: 75, unit: '%', source: 'Gulf News FNC', year: 2020 },
  { id: 'STAT-010', category: 'Telecom', metric: 'Service acceptable', value: 34, unit: '%', source: 'Gulf News FNC', year: 2020 },
  { id: 'STAT-011', category: 'Telecom', metric: 'COVID price dissatisfied', value: 78.98, unit: '%', source: 'Gulf News', year: 2020 },
  { id: 'STAT-012', category: 'Telecom', metric: 'COVID service dissatisfied', value: 62.78, unit: '%', source: 'Gulf News', year: 2020 },
  { id: 'STAT-013', category: 'Rent', metric: 'Typical increase', value: 20, unit: '%', source: 'Property Monitor', year: '2024-25' },
  { id: 'STAT-014', category: 'Rent', metric: 'Specific case increase', value: 22.9, unit: '%', source: 'User report', year: 2024 },
  { id: 'STAT-015', category: 'School', metric: 'Lowest annual fee', value: 9500, unit: 'USD', source: 'Fast Company', year: 2024 },
  { id: 'STAT-016', category: 'School', metric: 'Highest annual fee', value: 32600, unit: 'USD', source: 'Fast Company', year: 2024 },
  { id: 'STAT-017', category: 'School', metric: 'Fee increase', value: 7, unit: '%', source: 'KHDA', year: '2023-24' },
  { id: 'STAT-018', category: 'Banking', metric: 'Fraud losses', value: 338, unit: 'million USD', source: 'vocal.media', year: 2023 },
  { id: 'STAT-019', category: 'Labour', metric: 'Unpaid wages case', value: 110400, unit: 'AED', source: 'Mashable', year: 2024 },
  { id: 'STAT-020', category: 'Traffic', metric: 'Hours wasted', value: 35, unit: 'hours/year', source: 'RoadSafetyUAE', year: 2024 },
  { id: 'STAT-021', category: 'Population', metric: 'Dubai 2040 target', value: 5.8, unit: 'million', source: 'PBS', year: 2024 },
  { id: 'STAT-022', category: 'Population', metric: 'Current Dubai', value: 3.8, unit: 'million', source: 'PBS', year: 2024 },
  { id: 'STAT-023', category: 'Commute', metric: 'Daily commuters', value: 1, unit: 'million', source: 'PBS', year: 2024 },
  { id: 'STAT-024', category: 'Transport', metric: 'Vehicle increase', value: 10, unit: '%', source: 'PBS', year: 2024 },
  { id: 'STAT-025', category: 'Metro', metric: 'Expansion cost', value: 5, unit: 'billion USD', source: 'PBS', year: 2024 },
  { id: 'STAT-026', category: 'Pedestrian', metric: 'Paths planned', value: 3300, unit: 'km', source: 'PBS', year: 2024 },
  { id: 'STAT-027', category: 'Remote Work', metric: 'Peak reduction potential', value: 30, unit: '%', source: 'PBS', year: 2024 },
  { id: 'STAT-028', category: 'Salary', metric: 'Cuts reported', value: 50, unit: '%', source: 'LinkedIn', year: 2026 },
  { id: 'STAT-029', category: 'Employment', metric: 'Non-citizens', value: 89, unit: '%', source: 'Multiple', year: 2024 },
  { id: 'STAT-030', category: 'Consumer', metric: 'Emergency penalty', value: 2, unit: 'years + AED 2M', source: 'u.ae', year: 2023 },
  { id: 'STAT-031', category: 'Labour', metric: 'Verbal abuse penalty', value: 6, unit: 'months or Dh5,000', source: 'Khaleej Times', year: 2024 },
  { id: 'STAT-032', category: 'Consumer', metric: 'MOJ grievance fee', value: 30, unit: 'AED', source: 'moj.gov.ae', year: 2024 },
  { id: 'STAT-033', category: 'Consumer', metric: 'MOJ processing time', value: 15, unit: 'days', source: 'moj.gov.ae', year: 2024 },
  { id: 'STAT-034', category: 'Rental', metric: 'RDC judges', value: 50, unit: 'count', source: 'Khaleej Times', year: 2025 },
  { id: 'STAT-035', category: 'School', metric: 'Entry level monthly', value: 272, unit: 'USD', source: 'Fast Company', year: 2024 },
]

// ============================================================================
// CRITICISM CATEGORIES AGGREGATE
// ============================================================================

export const criticismCategories: CriticismCategory[] = [
  consumerComplaintsData,
  rentalDisputesData,
  labourComplaintsData,
  customerServiceData,
  telecomComplaintsData,
  schoolFeesData,
  trafficComplaintsData,
  bankingComplaintsData,
  employerConductData,
  landlordComplaintsData,
  governmentAppsData,
  hospitalityComplaintsData,
]

// ============================================================================
// OVERVIEW
// ============================================================================

export const criticismOverview = {
  totalCategories: 12,
  criticalCount: 7,
  highCount: 4,
  mediumCount: 1,
  compositeStressScore: 6.7,
  lastUpdated: '2026-04-28',
  dataSource: '9-6-criticism-complaint-results.md',
}

// ============================================================================
// HOOK FOR CRITICISM DATA ACCESS
// ============================================================================

export function useCriticismData() {
  return {
    overview: criticismOverview,
    categories: criticismCategories,
    grievanceMechanisms,
    legalPenalties,
    topicSentiments,
    platformSentiments,
    trendAnalysis: complaintTrendAnalysis,
    issueClassifications,
    geopoliticalFactors,
    economicStressIndex,
    compositeStressScore,
    complaintMechanismEffectiveness,
    riskIndicators,
    statistics: statisticsRegistry,
  }
}

// ============================================================================
// SARCASM & IRONY DETECTION DATA (MD 9-8)
// ============================================================================

/**
 * Source Credibility Matrix - 45 sources across 5 tiers
 */
export interface SarcasmSourceCredibility {
  source: string
  url: string
  tier: number
  credibilityScore: number
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
  dataPoints: number
}

export const sarcasmSourceCredibilityMatrix: SarcasmSourceCredibility[] = [
  { source: 'Freedom House', url: 'freedomhouse.org', tier: 1, credibilityScore: 92, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'HRW World Report 2025', url: 'hrw.org', tier: 1, credibilityScore: 95, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'Amnesty International', url: 'amnesty.org', tier: 1, credibilityScore: 95, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'US Embassy Security Alert', url: 'ae.usembassy.gov', tier: 0, credibilityScore: 100, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'OSAC Security Report', url: 'osac.gov', tier: 0, credibilityScore: 85, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'BTi Project 2026', url: 'bti-project.org', tier: 2, credibilityScore: 85, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'DAWN', url: 'dawnmena.org', tier: 2, credibilityScore: 80, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'Greenpeace', url: 'greenpeace.org', tier: 2, credibilityScore: 80, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'MEI', url: 'mei.edu', tier: 2, credibilityScore: 80, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'ORF', url: 'orfme.org', tier: 2, credibilityScore: 80, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'Washington Institute', url: 'washingtoninstitute.org', tier: 2, credibilityScore: 80, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'Human Rights Network', url: 'humanrightsnetwork.org', tier: 2, credibilityScore: 80, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'Carnegie Endowment', url: 'carnegieendowment.org', tier: 2, credibilityScore: 85, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'UN UAE', url: 'unitedarabemirates.un.org', tier: 0, credibilityScore: 75, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'Politico', url: 'politico.com', tier: 1, credibilityScore: 75, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'DW News', url: 'dw.com', tier: 1, credibilityScore: 75, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'The New Arab', url: 'newarab.com', tier: 3, credibilityScore: 70, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'Middle East Eye', url: 'middleeasteye.net', tier: 3, credibilityScore: 70, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'NBC News', url: 'nbcnews.com', tier: 1, credibilityScore: 80, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'Oil Price', url: 'oilprice.com', tier: 3, credibilityScore: 70, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'Drilled Media', url: 'drilled.media', tier: 3, credibilityScore: 65, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'Gulf IF', url: 'gulfif.org', tier: 2, credibilityScore: 65, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'MDPI Sustainability', url: 'mdpi.com', tier: 2, credibilityScore: 75, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'LSE Blog', url: 'blogs.lse.ac.uk', tier: 2, credibilityScore: 80, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'Times Central Asia', url: 'timesca.com', tier: 3, credibilityScore: 60, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'Tiredearth', url: 'tiredearth.com', tier: 3, credibilityScore: 60, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'Emirates Leaks', url: 'emiratesleaks.com', tier: 3, credibilityScore: 60, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'GSN Online', url: 'gsn-online.com', tier: 3, credibilityScore: 60, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'AGBI', url: 'agbi.com', tier: 3, credibilityScore: 65, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'Reddit r/UAE', url: 'reddit.com', tier: 4, credibilityScore: 45, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'Hespress', url: 'hespress.com', tier: 3, credibilityScore: 55, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'Aletihad', url: 'aletihad.ae', tier: 0, credibilityScore: 70, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'Lebanese Forces', url: 'lebanese-forces.com', tier: 3, credibilityScore: 65, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'MOET UAE', url: 'moet.gov.ae', tier: 0, credibilityScore: 75, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'UAE Cabinet', url: 'uaecabinet.ae', tier: 0, credibilityScore: 80, uaeRelevance: 'Medium', dataPoints: 0 },
]

/**
 * Political Prisoners Data
 */
export interface SarcasmPoliticalPrisoner {
  name: string
  status: string
  sentence: string
  charges: string
  caseName: string
  source: string
}

export const sarcasmPoliticalPrisoners: SarcasmPoliticalPrisoner[] = [
  { name: 'Ahmed Mansoor', status: 'Imprisoned (since March 2017)', sentence: '10 years', charges: '"Insulting the ruler"', caseName: 'UAE94', source: 'Amnesty, HRW' },
  { name: 'Nasser bin Ghaith', status: 'Life sentence', sentence: 'Life', charges: '"Cybercrimes"', caseName: 'Mass trial', source: 'HRW' },
  { name: 'Abdulsalam Darwak al-Marzouqi', status: 'Life sentence', sentence: 'Life', charges: 'Unknown', caseName: 'Mass trial', source: 'HRW' },
  { name: 'Sultan Bin Kayed al-Qasimi', status: 'Life sentence', sentence: 'Life', charges: 'Unknown', caseName: 'Mass trial', source: 'HRW' },
  { name: 'Ahmed al-Atoum', status: 'Imprisoned', sentence: '10 years', charges: '"Peaceful social media activity"', caseName: 'Jordanian activist', source: 'HRW' },
  { name: '55 men (UAE94)', status: 'Arbitrarily detained', sentence: 'Past sentence completion', charges: '"Demands for reform and democracy"', caseName: 'UAE94 mass trial', source: 'Amnesty' },
  { name: '26 prisoners of conscience', status: 'Current', sentence: 'Various', charges: 'Peaceful expression', caseName: 'Various', source: 'Amnesty' },
  { name: '63 defendants (UAE94)', status: 'Originally sentenced', sentence: '7-10 years', charges: 'Peaceful political demands', caseName: 'UAE94', source: 'Amnesty, HRW' },
  { name: '94 defendants', status: 'UAE94 mass trial', sentence: 'Various', charges: 'Various', caseName: '2012 trial', source: 'Amnesty, HRW' },
  { name: '44 defendants', status: 'Convicted 2024', sentence: 'Various', charges: '"Terrorism-related"', caseName: 'Mass trial 2024', source: 'HRW' },
  { name: '40 defendants', status: 'Life sentence 2024', sentence: 'Life', charges: 'Unknown', caseName: 'Mass trial 2024', source: 'HRW' },
  { name: '4 defendants', status: '15 years 2024', sentence: '15 years', charges: 'Unknown', caseName: 'Mass trial 2024', source: 'HRW' },
  { name: '84 total defendants', status: '2024 mass trial', sentence: 'Various', charges: 'Various', caseName: 'Human rights work', source: 'HRW' },
  { name: '57 Bangladeshi protesters', status: 'Released Sept 2024', sentence: 'Long sentences', charges: 'Protest', caseName: 'HRW', source: 'HRW' },
  { name: 'Ryan Cornelius', status: 'British', sentence: 'Arbitrary', charges: 'Property fraud', caseName: 'UNWGAD ruled', source: 'DAWN' },
  { name: 'Zack Shahin', status: 'American', sentence: 'Arbitrary', charges: 'Embezzlement', caseName: 'UNWGAD ruled', source: 'DAWN' },
  { name: 'Matthew Hedges', status: 'British', sentence: '7 months', charges: 'Academic research', caseName: '2018 detention', source: 'DAWN' },
]

/**
 * Government Programs & Initiatives
 */
export interface SarcasmGovernmentInitiative {
  initiative: string
  year: string
  ministryBody: string
  purpose: string
  ironyScore: string
}

export const sarcasmGovernmentInitiatives: SarcasmGovernmentInitiative[] = [
  { initiative: 'Year of Tolerance', year: '2019', ministryBody: 'Ministry of Tolerance', purpose: 'Promote tolerance', ironyScore: 'Very High (contradictory)' },
  { initiative: 'Ministry of Tolerance', year: '2016 (renamed 2020)', ministryBody: 'Cabinet', purpose: 'Interfaith coexistence', ironyScore: 'High' },
  { initiative: 'National Strategy for Innovation', year: '2014+', ministryBody: 'UAE Cabinet', purpose: 'Technology leadership', ironyScore: 'Low' },
  { initiative: 'AI Strategy 2031', year: '2031', ministryBody: 'UAE Government', purpose: 'AI adoption', ironyScore: 'Low' },
  { initiative: 'Vision 2071', year: '2071', ministryBody: 'UAE Government', purpose: 'Long-term development', ironyScore: 'Low' },
  { initiative: 'UAE Centennial 2071', year: '2071', ministryBody: 'UAE Government', purpose: 'Post-oil economy', ironyScore: 'Low' },
  { initiative: 'GreenVisa', year: '2021+', ministryBody: 'MOHRE, ICP', purpose: 'Self-sponsorship', ironyScore: 'Low' },
  { initiative: 'Abrahamic Family House', year: '2023', ministryBody: 'Government', purpose: 'Interfaith dialogue', ironyScore: 'Medium' },
  { initiative: 'Hedayah Centre', year: 'Unknown', ministryBody: 'Government', purpose: 'Counter-extremism', ironyScore: 'Medium' },
  { initiative: 'Sawab Centre', year: 'Unknown', ministryBody: 'Government', purpose: 'Counter-extremism', ironyScore: 'Medium' },
  { initiative: 'National Energy Strategy 2050', year: '2050 target', ministryBody: 'UAE Government', purpose: 'Clean energy 50%', ironyScore: 'High contradiction' },
  { initiative: 'UAE NDC 3.0', year: 'Submitted', ministryBody: 'UAE Government', purpose: '47% reduction by 2035', ironyScore: '"Almost sufficient"' },
]

/**
 * Key Documented Contradictions
 */
export interface SarcasmDocumentedContradiction {
  officialClaim: string
  reality: string
  source: string
  ironyMarker: string
}

export const sarcasmDocumentedContradictions: SarcasmDocumentedContradiction[] = [
  { officialClaim: '"Year of Tolerance"', reality: 'HRW: "massive violations of human rights"', source: 'DW News, HRW', ironyMarker: 'Very High' },
  { officialClaim: '"Safe UAE"', reality: 'US Embassy March 2026: missile/drone threats', source: 'US Embassy', ironyMarker: 'High' },
  { officialClaim: '"Free democracy"', reality: 'Freedom House: 18/100 Not Free', source: 'Freedom House', ironyMarker: 'Very High' },
  { officialClaim: '"Green leader"', reality: 'ADNOC $150B oil expansion, 5M bpd target', source: 'Oil Price, Politico', ironyMarker: 'Very High' },
  { officialClaim: '"Humanitarian actor"', reality: 'Yemen war involvement, 10s of thousands killed', source: 'Human Rights Network', ironyMarker: 'Very High' },
  { officialClaim: '"Dream country"', reality: 'kafala system, passport confiscation', source: 'Aletihad, LSE', ironyMarker: 'Medium' },
  { officialClaim: '"Perfect everything"', reality: 'Restrictions, costs, surveillance', source: 'Reddit, Threads', ironyMarker: 'High' },
  { officialClaim: '"World\'s most sustainable city"', reality: 'Masdar City while ADNOC expands', source: 'Gulf IF, Drilled', ironyMarker: 'Very High' },
]

/**
 * International Rankings
 */
export interface SarcasmInternationalRanking {
  index: string
  uaeScore: string
  globalRank: string
  year: string
  assessment: string
}

export const sarcasmInternationalRankings: SarcasmInternationalRanking[] = [
  { index: 'Freedom in the World', uaeScore: '18/100', globalRank: '-', year: '2026', assessment: 'Not Free' },
  { index: 'Freedom on the Net', uaeScore: '28/100', globalRank: '-', year: '2025', assessment: 'Not Free' },
  { index: 'World Press Freedom Index', uaeScore: '-', globalRank: '160/180', year: '2024', assessment: 'Very Poor' },
  { index: 'Rule of Law Index', uaeScore: '-', globalRank: '19/142', year: '2023', assessment: 'Low corruption perception' },
  { index: 'Human Development Index', uaeScore: '-', globalRank: '31 global', year: '2024', assessment: 'Very High' },
  { index: 'World Happiness Report', uaeScore: '-', globalRank: '26 global', year: '2024', assessment: 'High' },
  { index: 'Global Competitiveness', uaeScore: '-', globalRank: '#7', year: '2024', assessment: 'Highly Competitive' },
  { index: 'Gender Gap Index', uaeScore: '-', globalRank: '73', year: '2024', assessment: 'Medium' },
]

/**
 * Key Statistics
 */
export interface SarcasmKeyStatistic {
  metric: string
  value: string
  source: string
  year: string
}

export const sarcasmKeyStatistics: SarcasmKeyStatistic[] = [
  { metric: 'Population', value: '10.7 million (BTi) / 9.441 million (FH)', source: 'Multiple', year: '2023/2024' },
  { metric: 'National Citizens', value: '1.5 million (~11%)', source: 'BTi', year: '2023' },
  { metric: 'Expatriates', value: '89%', source: 'BTi', year: '2023' },
  { metric: 'GDP', value: '$514.1 billion', source: 'BTi', year: '2023' },
  { metric: 'GDP per capita (nominal)', value: '$43,000', source: 'MOET', year: '2024' },
  { metric: 'GDP per capita (PPP)', value: '>$83,000', source: 'BTi', year: '2023' },
  { metric: 'GDP Growth', value: '3.6%', source: 'BTi', year: '2023' },
  { metric: 'Unemployment', value: '2.1%', source: 'BTi', year: '2024' },
  { metric: 'FDI Inflows', value: '$30.7 billion', source: 'BTi', year: '2023' },
  { metric: 'Current Account Surplus', value: '9.3% of GDP', source: 'BTi', year: '2023' },
  { metric: 'Public Debt', value: '32.4% of GDP', source: 'BTi', year: '2023' },
  { metric: 'Budget Surplus', value: '4.5% of GDP', source: 'BTi', year: '2023' },
  { metric: 'Billionaires', value: '10', source: 'MOET', year: '2024' },
  { metric: 'Millionaires', value: '50,000+', source: 'MOET', year: '2024' },
  { metric: 'Nationalities Hosted', value: '200+', source: 'Multiple', year: '2024' },
]

/**
 * ADNOC & Energy Data
 */
export interface SarcasmADNOCData {
  parameter: string
  value: string
  timeframe: string
  source: string
}

export const sarcasmAdnocEnergyData: SarcasmADNOCData[] = [
  { parameter: 'Total Investment Plan', value: '$150 billion', timeframe: '2026-2030', source: 'Oil Price' },
  { parameter: 'Gas Reserves (unconventional)', value: '160 tscf', timeframe: 'Current', source: 'Oil Price' },
  { parameter: 'Oil Reserves (unconventional)', value: '22 billion stb', timeframe: 'Current', source: 'Oil Price' },
  { parameter: 'Current Oil Production', value: '3 million bpd', timeframe: '2016 baseline', source: 'Politico' },
  { parameter: 'Target Oil Production', value: '5 million bpd', timeframe: '2030', source: 'Politico' },
  { parameter: 'Gas Output (Ghasha)', value: '1.8 bscfd', timeframe: 'Projected', source: 'Oil Price' },
  { parameter: 'Oil Output (Ghasha)', value: '150,000 bpd', timeframe: 'Projected', source: 'Oil Price' },
  { parameter: 'ICV Program (2026-2030)', value: '$60 billion', timeframe: '2026-2030', source: 'Oil Price' },
  { parameter: 'ICV Return Since 2018', value: '$83.7 billion', timeframe: '2018-2025', source: 'Oil Price' },
  { parameter: 'TA\'ZIZ Chemicals (Phase 1)', value: '4.7 mtpa', timeframe: 'Current', source: 'Oil Price' },
  { parameter: 'Chemicals Target (2028)', value: '11 mtpa', timeframe: '2028', source: 'Oil Price' },
  { parameter: 'ADNOC Emissions Reduction', value: '25% by 2030', timeframe: '2030 target', source: 'Drilled' },
  { parameter: 'ADNOC Rebrand Consideration', value: '"Drop oil from name"', timeframe: 'Autumn 2022', source: 'Drilled' },
]

/**
 * Climate & Energy Targets
 */
export interface SarcasmClimateTarget {
  targetMetric: string
  value: string
  targetYear: string
  credibilityAssessment: string
}

export const sarcasmClimateEnergyTargets: SarcasmClimateTarget[] = [
  { targetMetric: 'NDC 3.0 Reduction', value: '47%', targetYear: '2035', credibilityAssessment: 'Rated "Almost sufficient" but "unrealistic"' },
  { targetMetric: 'Net-Zero Target (ADNOC)', value: '2045', targetYear: '2045', credibilityAssessment: 'Revised from 2050' },
  { targetMetric: 'Net-Zero Target (UAE)', value: '2050', targetYear: '2050', credibilityAssessment: 'National strategy' },
  { targetMetric: 'Renewable Energy Target', value: '50% (Gulf IF) / 44% (Tiredearth)', targetYear: '2050', credibilityAssessment: 'Energy Strategy 2050' },
  { targetMetric: 'Clean Energy Investment', value: '$40+ billion', targetYear: 'Cumulative', credibilityAssessment: 'Gulf IF, Washington Institute' },
  { targetMetric: 'Renewable Capacity (2017)', value: '<500 MW', targetYear: '2017', credibilityAssessment: 'Carnegie' },
  { targetMetric: 'Renewable Capacity (2022)', value: '4,000 MW', targetYear: '2022', credibilityAssessment: 'Carnegie' },
  { targetMetric: 'Nuclear Capacity (Barakah)', value: '5.6 GW', targetYear: 'Current', credibilityAssessment: 'ORF, MEI' },
  { targetMetric: 'Nuclear Share of Electricity', value: '25%', targetYear: 'Current', credibilityAssessment: 'ORF, Carnegie' },
  { targetMetric: 'Africa Clean Electricity', value: '100 million people', targetYear: '2035', credibilityAssessment: 'Gulf IF' },
]

/**
 * Yemen Humanitarian Crisis Data
 */
export interface SarcasmYemenCrisisMetric {
  metric: string
  value: string
  source: string
  year: string
}

export const sarcasmYemenCrisisData: SarcasmYemenCrisisMetric[] = [
  { metric: 'Civilian Deaths', value: 'Tens of thousands', source: 'Human Rights Network', year: '2015-present' },
  { metric: 'People on Verge of Famine', value: '12 million', source: 'Human Rights Network', year: '2024' },
  { metric: 'Children Dead from Hunger', value: '85,000', source: 'Human Rights Network', year: '2024' },
  { metric: 'Intervention Start Date', value: 'March 2015', source: 'Human Rights Network', year: '2015' },
  { metric: 'Coalition Members', value: '9 Arab countries', source: 'Human Rights Network', year: '2015' },
  { metric: 'Blocked Ports', value: 'Major Houthi-controlled', source: 'Human Rights Network', year: '2015-present' },
  { metric: 'Weapons Shipment Incident', value: 'Saudi bombs Yemen port', source: 'NBC News', year: '2024' },
]

/**
 * Sentiment Analysis Matrix by Topic
 */
export interface SarcasmSentimentByTopic {
  topic: string
  positivePercent: number
  neutralPercent: number
  negativePercent: number
  ironicPercent: number
  dominantTone: string
}

export const sarcasmSentimentByTopic: SarcasmSentimentByTopic[] = [
  { topic: 'UAE Safety', positivePercent: 65, neutralPercent: 15, negativePercent: 20, ironicPercent: 15, dominantTone: 'Positive but contested' },
  { topic: 'UAE Tolerance', positivePercent: 40, neutralPercent: 20, negativePercent: 40, ironicPercent: 35, dominantTone: 'Divided/Ironic' },
  { topic: 'UAE Democracy', positivePercent: 10, neutralPercent: 20, negativePercent: 70, ironicPercent: 60, dominantTone: 'Critical' },
  { topic: 'UAE Green Initiatives', positivePercent: 55, neutralPercent: 15, negativePercent: 30, ironicPercent: 40, dominantTone: 'Skeptical' },
  { topic: 'UAE Free Status', positivePercent: 15, neutralPercent: 15, negativePercent: 70, ironicPercent: 55, dominantTone: 'Highly Critical' },
  { topic: 'Dream Country', positivePercent: 70, neutralPercent: 10, negativePercent: 20, ironicPercent: 25, dominantTone: 'Positive' },
  { topic: 'Economic Opportunity', positivePercent: 75, neutralPercent: 10, negativePercent: 15, ironicPercent: 10, dominantTone: 'Positive' },
  { topic: 'Human Rights', positivePercent: 5, neutralPercent: 10, negativePercent: 85, ironicPercent: 0, dominantTone: 'Highly Critical' },
]

/**
 * Source-Level Sentiment
 */
export interface SarcasmSentimentBySource {
  sourceType: string
  averageSentiment: number
  uaeStance: string
}

export const sarcasmSentimentBySourceType: SarcasmSentimentBySource[] = [
  { sourceType: 'Human Rights Orgs', averageSentiment: 1.2, uaeStance: 'Highly Critical' },
  { sourceType: 'Government (UAE)', averageSentiment: 8.5, uaeStance: 'Official Narrative' },
  { sourceType: 'Think Tanks', averageSentiment: 3.5, uaeStance: 'Critical/Analytical' },
  { sourceType: 'News Media', averageSentiment: 4.5, uaeStance: 'Balanced/Critical' },
  { sourceType: 'Social Media (Expat)', averageSentiment: 5.5, uaeStance: 'Mixed' },
  { sourceType: 'Social Media (Arabic)', averageSentiment: 4.0, uaeStance: 'Ironic/Critical' },
  { sourceType: 'Academic', averageSentiment: 4.0, uaeStance: 'Analytical/Critical' },
]

/**
 * English Sarcasm Pattern Intensity
 */
export interface SarcasmEnglishPattern {
  pattern: string
  ironyIntensity: string
  context: string
  primarySourceType: string
}

export const sarcasmEnglishPatterns: SarcasmEnglishPattern[] = [
  { pattern: '"UAE so green"', ironyIntensity: 'High (70%)', context: 'Oil expansion + greenwashing', primarySourceType: 'Think Tanks, News' },
  { pattern: '"UAE so safe"', ironyIntensity: 'Medium-High (60%)', context: 'Surveillance + restrictions', primarySourceType: 'HR, Social Media' },
  { pattern: '"UAE so free"', ironyIntensity: 'High (75%)', context: 'Political imprisonment', primarySourceType: 'HR Organizations' },
  { pattern: '"UAE democratic"', ironyIntensity: 'Very High (90%)', context: 'Authoritarian governance', primarySourceType: 'HR, Think Tanks' },
  { pattern: '"UAE tolerant"', ironyIntensity: 'Very High (85%)', context: 'Human rights violations', primarySourceType: 'HR Organizations' },
  { pattern: '"everything is perfect"', ironyIntensity: 'High (70%)', context: 'Restrictions, costs, lack of freedoms', primarySourceType: 'Social Media' },
  { pattern: '"love how UAE"', ironyIntensity: 'Medium (45%)', context: 'Ironic comparisons', primarySourceType: 'Social Media' },
]

/**
 * Arabic Sarcasm Pattern Intensity
 */
export interface SarcasmArabicPattern {
  arabicPattern: string
  translation: string
  ironyIntensity: string
  context: string
  sentiment: string
}

export const sarcasmArabicPatterns: SarcasmArabicPattern[] = [
  { arabicPattern: 'الحمد لله في الإمارات', translation: 'Praise God in UAE', ironyIntensity: 'Medium (55%)', context: 'Safety vs regional instability', sentiment: 'Divided' },
  { arabicPattern: 'ما شاء الله على الإمارات', translation: 'Masha\'Allah to UAE', ironyIntensity: 'Medium-High (60%)', context: 'Excessive spending/priorities', sentiment: 'Critical' },
  { arabicPattern: 'الإمارات بلد الأحلام', translation: 'UAE is dream country', ironyIntensity: 'Medium (50%)', context: 'kafala system, costs', sentiment: 'Mixed' },
  { arabicPattern: 'شكرا حكومة', translation: 'Thank you government', ironyIntensity: 'Very High (85%)', context: 'Problems, infrastructure', sentiment: 'Highly Ironic' },
  { arabicPattern: 'يا بلد الخير', translation: 'O country of goodness', ironyIntensity: 'Low-Medium (35%)', context: 'Usually sincere', sentiment: 'Generally Positive' },
]

/**
 * Cross-Cutting Irony Themes
 */
export interface SarcasmIronyTheme {
  theme: string
  pattern: string
  evidence: string[]
  ironyScore: string
  keySources: string[]
}

export const sarcasmIronyThemes: SarcasmIronyTheme[] = [
  {
    theme: 'Greenwashing Paradox (Strongest Irony Marker)',
    pattern: 'UAE simultaneously positioned as climate leader (COP28 host) while massively investing in oil/gas expansion',
    evidence: [
      'Sultan Al Jaber: CEO of ADNOC while President of COP28',
      'ADNOC expansion: 3 million bpd (2016) to 5 million bpd (2030) target',
      '$150B ADNOC investment plan 2026-2030',
      '$40B+ clean energy investment vs. continued fossil fuel expansion',
      'Considered dropping "oil" from company name for green rebrand',
      'Politico investigation: Internal documents show greenwashing strategy',
    ],
    ironyScore: '9.5/10 (Severe)',
    keySources: ['Politico', 'Gulf IF', 'Drilled Media', 'ORF', 'Oil Price', 'Greenpeace'],
  },
  {
    theme: 'Tolerance Contradictions',
    pattern: '"Year of Tolerance" messaging systematically contrasted with documented human rights abuses',
    evidence: [
      'HRW: "The UAE is not a tolerant state"',
      'DW News: "massive violations of human rights, especially when it comes to free speech"',
      'Orwellian pledge of tolerance demanded from citizens',
      'Al-Islah trial: 94 Islamists tried under tight security',
      'Bans on groups while claiming tolerance',
    ],
    ironyScore: '9.0/10 (Severe)',
    keySources: ['DW News', 'Human Rights Watch', 'The New Arab', 'Emirates Leaks'],
  },
  {
    theme: 'Humanitarian-Warfare Gap',
    pattern: 'UAE\'s humanitarian messaging co-exists with documented involvement in conflicts',
    evidence: [
      'World Humanitarian Day celebrations',
      'Yemen war: UAE-backed coalition killed tens of thousands of civilians',
      '12 million Yemenis on verge of famine due to coalition blockade',
      '85,000 children dead from hunger',
      'Sudan: UAE-backed RSF militia involvement in bombing',
    ],
    ironyScore: '9.5/10 (Severe)',
    keySources: ['Human Rights Network', 'UN', 'NBC News', 'DAWN'],
  },
  {
    theme: '"Everything is Perfect" Sarcasm',
    pattern: 'Social media phrase used with strong sarcastic intent',
    evidence: [
      'Instagram/TikTok/Reels/posts quoting "everything is perfect" while listing problems',
      'Contrast between promotional narrative and expat experiences',
      'Reddit discussions on "forced positivity" and "propaganda"',
      'References to restrictions, costs, lack of political freedoms',
    ],
    ironyScore: '7.5/10 (High)',
    keySources: ['Reddit r/UAE', 'Threads', 'Instagram', 'Facebook'],
  },
  {
    theme: 'Democracy/Freedom Irony',
    pattern: '"Free" and "democratic" applied to UAE despite authoritarian governance',
    evidence: [
      'Freedom House: 18/100 (Not Free)',
      'BTi Project: "authoritarian government"',
      'No political parties, no meaningful elections',
      '47% of UAE respondents preferred democracy',
      'DAWN: UAE subverts democracy globally including in the US',
      'UN human rights covenants not signed',
    ],
    ironyScore: '9.5/10 (Severe)',
    keySources: ['Freedom House', 'BTi Project', 'DAWN', 'HRW'],
  },
  {
    theme: '"Dream Country" Deployment',
    pattern: 'Both genuine expat appreciation and sarcastic usage',
    evidence: [
      'Lebanese diaspora: "UAE is the dream country" - used sincerely and ironically',
      'Expat testimonials about opportunities vs. difficulties with sponsorship system',
      '"Dream country" tourism promotion vs. lived experience of restrictions',
      'Sarcastic usage when facing kafala system issues, costs, legal limitations',
    ],
    ironyScore: '5.5/10 (Moderate)',
    keySources: ['Aletihad', 'Lebanese Forces', 'Instagram', 'Facebook groups'],
  },
]

/**
 * Critical KPIs for Monitoring
 */
export interface SarcasmCriticalKPI {
  kpi: string
  currentValue: string
  threshold: string
  status: string
  lastUpdated: string
}

export const sarcasmCriticalKPIs: SarcasmCriticalKPI[] = [
  { kpi: 'Freedom Score', currentValue: '18/100', threshold: '<40 = Not Free', status: 'CRITICAL', lastUpdated: '2026' },
  { kpi: 'Internet Freedom', currentValue: '28/100', threshold: '<40 = Not Free', status: 'CRITICAL', lastUpdated: '2025' },
  { kpi: 'Political Prisoners', currentValue: '26+', threshold: 'Any = Critical', status: 'CRITICAL', lastUpdated: '2025' },
  { kpi: 'Oil Production Target', currentValue: '5M bpd (2030)', threshold: 'N/A', status: 'TRACKING', lastUpdated: '2026' },
  { kpi: 'ADNOC Investment', currentValue: '$150B (2026-2030)', threshold: 'N/A', status: 'TRACKING', lastUpdated: '2026' },
  { kpi: 'NDC Target', currentValue: '47% by 2035', threshold: '"Almost sufficient"', status: 'AT RISK', lastUpdated: '2025' },
  { kpi: 'Yemen Famine Risk', currentValue: '12M people', threshold: 'N/A', status: 'CRITICAL', lastUpdated: '2025' },
]

/**
 * Key Quotations
 */
export interface SarcasmKeyQuotation {
  source: string
  quote: string
}

export const sarcasmKeyQuotations: SarcasmKeyQuotation[] = [
  {
    source: 'Freedom House',
    quote: 'The UAE is a federation of seven emirates led by Abu Dhabi. Limited elections held for federal advisory body only. Political parties banned. All executive, legislative, and judicial authority ultimately rests with seven hereditary rulers.',
  },
  {
    source: 'Human Rights Watch',
    quote: 'The UAE has promoted a public image of tolerance and openness... while restricting scrutiny of its rampant systemic human rights violations.',
  },
  {
    source: 'Human Rights Watch',
    quote: 'These laws have led to the complete closure of civic space, severe restrictions on freedom of expression... and the criminalization of peaceful dissent.',
  },
  {
    source: 'Amnesty International',
    quote: 'UAE projecting \'forward-looking\' image to distract from \'dismal domestic human rights record\'',
  },
  {
    source: 'DAWN',
    quote: 'For the U.S., as well as countries across Europe that pride themselves on upholding freedoms and the rule of law, the UAE\'s transnational repression strikes at the core of what makes open societies function.',
  },
  {
    source: 'DW News / HRW',
    quote: 'The UAE is not a tolerant state. There are massive violations of human rights, especially when it comes to free speech.',
  },
  {
    source: 'Greenpeace',
    quote: 'UAE should shift from being \'the last one standing\' in fossil fuel markets to \'the first to stand down\' from new extraction',
  },
  {
    source: 'BTi Project',
    quote: 'Democracy in its widely understood Western form is not compatible with UAE traditions.',
  },
]

/**
 * Sarcasm Overview Data
 */
export const sarcasmOverviewData = {
  totalSources: 45,
  criticalSources: 12,
  tier1Sources: 17,
  dataPointsExtracted: 500,
  structuredTables: 22,
  entityRegistries: 8,
  ironyThemesCount: 6,
  englishPatternsCount: 7,
  arabicPatternsCount: 5,
  averageIronicUsage: '42%',
  mostIronicTopic: 'UAE Democracy (90%)',
  highestIronyScore: '9.5/10 (Greenwashing Paradox, Humanitarian-Warfare Gap, Democracy/Freedom Irony)',
}

/**
 * Sentiment Distribution for Charts
 */
export const sarcasmSentimentDistributionData = [
  { name: 'Positive', value: 42, color: '#10b981' },
  { name: 'Neutral', value: 18, color: '#94a3b8' },
  { name: 'Negative', value: 28, color: '#f43f5e' },
  { name: 'Ironic', value: 12, color: '#f97316' },
]

/**
 * Irony Intensity by Theme for Charts
 */
export const sarcasmIronyIntensityData = [
  { theme: 'Greenwashing Paradox', score: 95, color: '#10b981' },
  { theme: 'Humanitarian-Warfare Gap', score: 95, color: '#f43f5e' },
  { theme: 'Democracy/Freedom', score: 95, color: '#f43f5e' },
  { theme: 'Tolerance Contradictions', score: 90, color: '#f97316' },
  { theme: '"Perfect Everything"', score: 75, color: '#eab308' },
  { theme: '"Dream Country"', score: 55, color: '#94a3b8' },
]

/**
 * Hook for Sarcasm Data Access
 */
export function useSarcasmData() {
  return {
    overview: sarcasmOverviewData,
    sourceCredibilityMatrix: sarcasmSourceCredibilityMatrix,
    politicalPrisoners: sarcasmPoliticalPrisoners,
    governmentInitiatives: sarcasmGovernmentInitiatives,
    documentedContradictions: sarcasmDocumentedContradictions,
    internationalRankings: sarcasmInternationalRankings,
    keyStatistics: sarcasmKeyStatistics,
    adnocEnergyData: sarcasmAdnocEnergyData,
    climateEnergyTargets: sarcasmClimateEnergyTargets,
    yemenCrisisData: sarcasmYemenCrisisData,
    sentimentByTopic: sarcasmSentimentByTopic,
    sentimentBySourceType: sarcasmSentimentBySourceType,
    englishPatterns: sarcasmEnglishPatterns,
    arabicPatterns: sarcasmArabicPatterns,
    ironyThemes: sarcasmIronyThemes,
    criticalKPIs: sarcasmCriticalKPIs,
    keyQuotations: sarcasmKeyQuotations,
    sentimentDistributionData: sarcasmSentimentDistributionData,
    ironyIntensityData: sarcasmIronyIntensityData,
  }
}

// ============================================================================
// FEAR & UNCERTAINTY DATA (9-9)
// ============================================================================

export interface FearUncertaintyOverview {
  researchCompilationDate: string
  enrichmentDate: string
  totalSourcesConsulted: number
  queryCategories: number
  temporalCoverage: string
}

export const fearUncertaintyOverview: FearUncertaintyOverview = {
  researchCompilationDate: '2026-04-27',
  enrichmentDate: '2026-04-28',
  totalSourcesConsulted: 51,
  queryCategories: 9,
  temporalCoverage: '2024-2026',
}

export interface FearTopic {
  id: number
  name: string
  query: string
  uaeRelevance: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  aggregateSentiment: number
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  kpis: Record<string, string | number>[]
  primaryFears: string[]
}

export const fearTopics: FearTopic[] = [
  {
    id: 1,
    name: 'Economic Uncertainty/Risk',
    query: 'UAE + Uncertainty/Risk',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.3,
    severity: 'HIGH',
    kpis: [
      { kpi: 'UAE CEO 3-year growth confidence', value: '80%' },
      { kpi: 'National economy confidence', value: '84%' },
      { kpi: 'GDP growth 2024', value: '4%' },
      { kpi: 'GDP growth 2025 projected', value: '4.8%' },
      { kpi: 'DFM index fall (first day)', value: '-4.7%' },
      { kpi: 'DFM weekly loss', value: '-9%' },
    ],
    primaryFears: ['Market volatility', 'War spillover', 'Economic fragility'],
  },
  {
    id: 2,
    name: 'Stability/Fragility',
    query: 'UAE + Stability/Fragility/Myth',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.2,
    severity: 'HIGH',
    kpis: [
      { kpi: 'Ballistic missiles intercepted', value: '357' },
      { kpi: 'Cruise missiles intercepted', value: '15' },
      { kpi: 'UAVs intercepted', value: '1,800+' },
      { kpi: 'Non-oil foreign trade 2024', value: 'Dh2.997 trillion' },
      { kpi: 'FDI', value: 'Dh130 billion' },
    ],
    primaryFears: ['Safe-haven reputation', 'Air defense saturation', 'Exodus of wealth'],
  },
  {
    id: 3,
    name: 'Real Estate Bubble',
    query: 'UAE + Real Estate Bubble/Burst',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.4,
    severity: 'HIGH',
    kpis: [
      { kpi: '2024 price growth', value: '~19-20%' },
      { kpi: 'Supply pipeline 2025-2027', value: '~210,000 units' },
      { kpi: 'Fitch correction forecast', value: '-15% by 2026' },
      { kpi: 'Dubai bubble risk status', value: 'Elevated' },
      { kpi: 'Off-plan sales Q1 2025', value: '65%' },
      { kpi: 'Transaction volume decline', value: '~30-40%' },
    ],
    primaryFears: ['Price correction', 'Oversupply', 'Developer defaults'],
  },
  {
    id: 4,
    name: 'War/Regional Conflict',
    query: 'UAE + War/Regional/Spillover',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.5,
    severity: 'CRITICAL',
    kpis: [
      { kpi: 'UAE war losses', value: '~$6 billion' },
      { kpi: 'Brent crude peak', value: '$144.42/barrel' },
      { kpi: 'Flights cancelled', value: '37,000+' },
      { kpi: 'Dubai stock exchange decline', value: '~-17%' },
      { kpi: 'Vessels stranded near Hormuz', value: '~2,000' },
    ],
    primaryFears: ['Iranian missiles', 'Hormuz closure', 'Safe-haven status', 'Trade disruption'],
  },
  {
    id: 5,
    name: 'Oil/Post-Oil',
    query: 'UAE + Oil/Post-Oil/Peak Demand',
    uaeRelevance: 'HIGH',
    aggregateSentiment: 0.4,
    severity: 'MEDIUM',
    kpis: [
      { kpi: 'Oil sector growth 2025', value: '7.8%' },
      { kpi: 'Production target', value: '5 million bpd by 2026' },
      { kpi: 'Non-oil sector share', value: '>75% of GDP' },
      { kpi: 'Middle East energy investment 2025', value: '$130 billion' },
    ],
    primaryFears: ['Oil demand peak', 'Stranded assets', 'Transition disruption'],
  },
  {
    id: 6,
    name: 'AI/Jobs',
    query: 'UAE + AI/Jobs/Replace',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.2,
    severity: 'HIGH',
    kpis: [
      { kpi: 'AI-exposed roles growth', value: '13% (2021-2024)' },
      { kpi: 'Already replaced by AI', value: '7%' },
      { kpi: 'Worry AI will affect future jobs', value: '25%' },
      { kpi: 'AI job postings 2024', value: '10,000' },
      { kpi: 'Jobs promised by 2030', value: '1 million' },
    ],
    primaryFears: ['Job displacement', 'Skills obsolescence', 'WEF 75M job losses'],
  },
  {
    id: 7,
    name: 'Climate/Heat',
    query: 'UAE + Climate/Heat/Unlivable/50 Degrees',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.8,
    severity: 'CRITICAL',
    kpis: [
      { kpi: 'UAE record temperature', value: '51.6C (May 2025)' },
      { kpi: 'Temperature rise (1975-2013)', value: '2.7C' },
      { kpi: 'Sea level rise projection (2100)', value: '42-98 cm' },
      { kpi: 'Coastline at risk underwater', value: '6%' },
      { kpi: 'Population at sea level', value: '85%' },
      { kpi: 'Days of exceptional heat annually', value: 'Up to 200 days' },
    ],
    primaryFears: ['Unlivability by 2030', 'Infrastructure damage', 'Worker safety', 'Water scarcity'],
  },
  {
    id: 8,
    name: 'Household Debt',
    query: 'UAE + Household Debt/Personal Debt Crisis',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.3,
    severity: 'HIGH',
    kpis: [
      { kpi: 'Consumer debt May 2025', value: 'AED521B ($142bn)' },
      { kpi: 'Debt increase from 2021', value: '50%' },
      { kpi: 'Household debt-to-GDP', value: '30%' },
      { kpi: 'Mortgage growth YoY', value: '77%' },
      { kpi: 'Residents spending 25%+ on debt', value: '60%' },
      { kpi: 'Money worries as top stressor', value: '60%' },
    ],
    primaryFears: ['Debt spiral', 'Bounced cheques', 'Imprisonment', 'Asset seizure'],
  },
  {
    id: 9,
    name: 'Expat Exodus',
    query: 'UAE + Expat Leave/Mass Exodus',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.8,
    severity: 'CRITICAL',
    kpis: [
      { kpi: 'Millionaires relocated to Dubai (2025)', value: '9,800' },
      { kpi: 'Wealth brought', value: '$63 billion' },
      { kpi: 'Dubai stock exchange decline', value: '~-17%' },
      { kpi: 'Expat unemployment February', value: '12%' },
      { kpi: 'Flights cancelled since conflict', value: '37,000+' },
      { kpi: 'Total population', value: '11.57 million' },
      { kpi: 'Expatriates', value: '10.24 million (88%)' },
    ],
    primaryFears: ['Brain drain', 'Safe-haven reputation', 'Labor shortage', 'Economic slowdown'],
  },
]

export const fearSeverityDistribution = [
  { name: 'CRITICAL', value: 5, color: '#ef4444' },
  { name: 'HIGH', value: 3, color: '#f59e0b' },
  { name: 'MEDIUM', value: 1, color: '#eab308' },
]

export const fearTrendData = [
  { month: 'Jan', fear: 72, uncertainty: 68, economicRisk: 65 },
  { month: 'Feb', fear: 75, uncertainty: 70, economicRisk: 62 },
  { month: 'Mar', fear: 78, uncertainty: 74, economicRisk: 68 },
  { month: 'Apr', fear: 82, uncertainty: 76, economicRisk: 72 },
  { month: 'May', fear: 85, uncertainty: 80, economicRisk: 75 },
  { month: 'Jun', fear: 88, uncertainty: 82, economicRisk: 78 },
]

export const fearByCategory = [
  { category: 'Expat Exodus', fear: 92, color: '#ef4444' },
  { category: 'Climate/Heat', fear: 88, color: '#f97316' },
  { category: 'War/Regional', fear: 85, color: '#fb923c' },
  { category: 'Real Estate', fear: 72, color: '#f59e0b' },
  { category: 'Economic', fear: 65, color: '#eab308' },
  { category: 'Household Debt', fear: 58, color: '#84cc16' },
  { category: 'AI/Jobs', fear: 52, color: '#22c55e' },
  { category: 'Oil/Post-Oil', fear: 35, color: '#10b981' },
]

export const fearSentimentDistribution = [
  { name: 'Extremely Negative', value: 3, color: '#ef4444' },
  { name: 'Negative', value: 2, color: '#f97316' },
  { name: 'Mixed/Cautious', value: 3, color: '#f59e0b' },
  { name: 'Positive', value: 1, color: '#22c55e' },
]

export interface FearAggregateSummary {
  category: string
  aggregateSentiment: number
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  evidence: string[]
}

export const fearAggregateSummary: FearAggregateSummary[] = [
  {
    category: 'Economic Concerns',
    aggregateSentiment: -0.3,
    severity: 'HIGH',
    evidence: ['Real estate bubble (19-20% growth, 210k supply)', 'Debt levels (50% increase, $149B)', 'War market impact (17% stock drop, $6B losses)'],
  },
  {
    category: 'Security Concerns',
    aggregateSentiment: -0.5,
    severity: 'CRITICAL',
    evidence: ['Iranian missiles (357 intercepted)', 'Air defense tested (1,800+ UAVs)', 'Regional conflict (37k flights cancelled)', 'Safe-haven reputation at stake'],
  },
  {
    category: 'Climate Concerns',
    aggregateSentiment: -0.8,
    severity: 'CRITICAL',
    evidence: ['Record temperatures (51.6C)', 'Habitability projections (unlivable by 2030)', 'Sea level rise (6% coastline underwater)', 'Heat stress (2.6% job hours lost)'],
  },
  {
    category: 'Social Concerns',
    aggregateSentiment: -0.8,
    severity: 'CRITICAL',
    evidence: ['Expat mass exodus (37k flights cancelled, 12% expat unemployment)', 'Migrant workers sent home', 'Brain drain risk', 'Hotels empty, tourist areas vacant'],
  },
  {
    category: 'Workforce Concerns',
    aggregateSentiment: -0.2,
    severity: 'HIGH',
    evidence: ['AI job replacement (7% already replaced, 25% worried)', 'Job creation promise (1M jobs not yet realized)', 'Skills gap (66% faster change rate)'],
  },
]

export function useFearUncertaintyData() {
  return {
    overview: fearUncertaintyOverview,
    topics: fearTopics,
    severityDistribution: fearSeverityDistribution,
    trendData: fearTrendData,
    byCategory: fearByCategory,
    sentimentDistribution: fearSentimentDistribution,
    aggregateSummary: fearAggregateSummary,
  }
}

// ============================================================================
// HOPE-OPTIMISM SENTIMENT DATA (9-10)
// ============================================================================

export interface HopeOptimismData {
  id: string
  category: string
  description: string
  sentiment: SentimentBreakdown
  primaryDrivers: string[]
  trend: TrendData
  credibility: CredibilityScore
  uaeRelevance: UAERelevance
  alertLevel: AlertLevel
  keyFindings: KeyFinding[]
  sources: SourceReference[]
  lastUpdated: string
}

export const hopeOptimismData: HopeOptimismData = {
  id: 'sentiment-9-10',
  category: 'hope-optimism',
  description: 'Hope and optimism represent distinct but related positive emotional constructs. Hope is defined as "a trait-like cognitive construct encompassing affirmative positive beliefs about one\'s ability to accomplish personal goals" (Snyder, 2002). Optimism is "a generalized tendency to expect favorable experiences about future events" (Scheier & Carver, 1985).',
  sentiment: {
    positive: 78,
    negative: 12,
    neutral: 10,
    overall: 0.78,
    volume: 125000,
  },
  primaryDrivers: [
    'Emirates Mars Mission (Al-Amal/Hope Probe) - national hope symbol',
    'UAE Leadership messaging on Vision 2030 and economic diversification',
    'AI adoption and technological leadership trajectory',
    'PolyHope NLP detection research showing hope speech prevalence',
    'Positive news movement and solution-focused journalism',
  ],
  trend: {
    direction: 'rising',
    changePercent: 8.2,
    period: '2025-2026',
    value: 78,
  },
  credibility: {
    tier: 1,
    score: 88,
    sources: 19,
    lastVerified: '2026-04-28',
  },
  uaeRelevance: {
    score: 96,
    level: 'critical',
    justification: 'Hope and optimism are central to UAE national messaging, particularly through the Hope Probe (Al-Amal) Mars mission and Vision 2030 frameworks',
  },
  alertLevel: 'GREEN',
  keyFindings: [
    { finding: 'PolyHope Dataset: 30,957 annotated tweets (English/Spanish)', metric: '30,957', source: 'ArXiv/PMC', tier: 1, alert: 'GREEN' },
    { finding: 'RoBERTa Performance: 86.5% macro F1 (binary hope detection)', metric: '86.5%', source: 'ArXiv PolyHope V2', tier: 1 },
    { finding: 'HILDA Survey: Hope correlated with 4% higher education attainment', metric: '4%', source: 'Good News Network/HILDA', tier: 2 },
    { finding: 'Emirates Mars Mission: UAE 5th to reach Mars, 1st Arab nation', metric: '5th', source: 'eoPortal', tier: 1, alert: 'GREEN' },
    { finding: 'Hope in Marketing: +36% goal pursuit, 2.3× lifetime trust', metric: '+36%', source: 'Nature Human Behaviour/Kantar', tier: 1 },
    { finding: 'Optimism β=0.448 predicting positive life changes (COVID study)', metric: '0.448', source: 'Frontiers in Psychology', tier: 1 },
    { finding: 'BLM Social Media: Hope/optimism prevalent in pro-BLM posts', metric: '34M', source: 'CMU/PNAS', tier: 1 },
  ],
  sources: [
    { name: 'What Works Wellbeing', tier: 1, date: '2026-04-27' },
    { name: 'PMC/PolyHope Study', tier: 1, date: '2026-04-27' },
    { name: 'ArXiv PolyHope V2', tier: 1, date: '2026-04-27' },
    { name: 'eoPortal Emirates Mars Mission', tier: 1, date: '2026-04-27' },
    { name: 'Frontiers in Psychology', tier: 1, date: '2026-04-27' },
    { name: 'CMU/PNAS BLM Study', tier: 1, date: '2026-04-27' },
    { name: 'Edelman Trust Barometer 2025', tier: 1, date: '2026-04-27' },
    { name: 'WGSN Optimism Trends', tier: 1, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-28',
}

// PolyHope Dataset stats
export const polyHopeDataset = {
  datasetStats: {
    originalVersion: { totalTweets: 8256, language: 'English' },
    v2Version: { english: 9515, spanish: 20442, total: 30957 },
    annotations: {
      notHope: 13869,
      generalizedHope: 7342,
      realisticHope: 3006,
      unrealisticHope: 3222,
      sarcasm: 2518,
    },
  },
  modelPerformance: [
    { model: 'RoBERTa (English)', binaryF1: 86.5, multiclassF1: 75.9 },
    { model: 'ALBERT (Spanish)', binaryF1: 84.2, multiclassF1: 72.6 },
    { model: 'GPT-4 (English)', binaryF1: 78.6, multiclassF1: 38 },
    { model: 'GPT-4 (Spanish)', binaryF1: 75.5, multiclassF1: 38 },
  ],
  hopeCategories: [
    { name: 'Generalized Hope', description: 'Broad positive outlook' },
    { name: 'Realistic Hope', description: 'Grounded, achievable expectations' },
    { name: 'Unrealistic Hope', description: 'Wishful thinking beyond probability' },
    { name: 'Sarcasm', description: 'False or ironic hope expression' },
  ],
}

// Emirates Mars Mission details
export const emiratesMarsMission = {
  missionSpecifications: {
    name: 'Al-Amal (Hope in Arabic)',
    launchDate: 'July 19, 2020 (21:58 UTC)',
    launchSite: 'Tanegashima Space Center, Japan',
    launchVehicle: 'Mitsubishi H-IIA rocket',
    totalMass: '1,500 kg (with fuel); 1,350 kg dry',
    dimensions: '2.37 m wide × 2.90 m tall hexagonal prism',
    power: '600 W from three solar panels',
    designLife: 'Three Earth years',
  },
  scientificInstruments: [
    { name: 'EXI', fullName: 'Emirates eXploration Imager', type: '12 MP visible/UV camera' },
    { name: 'EMIRS', fullName: 'Emirates Mars Infrared Spectrometer', type: '6-40 µm FTIR' },
    { name: 'EMUS', fullName: 'Emirates Mars Ultraviolet Spectrometer', type: '100-170 nm' },
  ],
  orbitCharacteristics: {
    scienceOrbit: '22,000 × 44,000 km',
    inclination: '25 degrees',
    orbitalPeriod: '~55 hours',
    fullPlanetCoverage: 'every 9.5 days (225 hours)',
  },
  missionTimeline: [
    { milestone: 'Launch', date: 'July 19, 2020' },
    { milestone: 'Mars Orbit Insertion', date: 'February 9, 2021' },
    { milestone: 'Science Operations Began', date: 'May 23, 2021' },
  ],
  significance: {
    achievements: [
      'UAE became 5th entity to reach Mars orbit',
      'First Arab nation to send interplanetary probe',
      'Timed for UAE 50th Anniversary (Golden Jubilee)',
      'Designed to inspire Arab youth and the region',
    ],
    quote: {
      text: 'The UAE wanted to send a strong message to the Arab youth and to remind them of the past, that we used to be generators of knowledge.',
      author: 'Omran Sharaf (MBRSC Project Manager)',
    },
  },
}

// Hope impact studies
export const hopeImpactStudies = {
  australianHILDA: {
    studyName: 'HILDA Survey',
    sampleSize: 25000,
    duration: '2007-2021',
    outcomes: [
      { outcome: "Bachelor's degree", impact: '+4% higher probability within 2 years' },
      { outcome: 'Employment', impact: '2% lower probability of unemployment' },
      { outcome: 'Health', impact: 'Lower obesity, smoking, serious illness rates' },
    ],
  },
  covidPredictive: {
    studyName: 'Frontiers in Psychology COVID-19 Study',
    sampleSize: 102,
    regressionResults: {
      positiveChanges: { predictor: 'Optimism', beta: 0.448, pValue: '< 0.01' },
      negativeChanges: { predictor: 'Perceived Hope', beta: -0.420, pValue: '< 0.001' },
    },
  },
}

// ============================================================================
// NEUTRAL/FACTUAL SENTIMENT DATA (9-3)
// ============================================================================

/**
 * Neutral/Factual Sentiment Data - 247+ extracted data points across 12 categories
 * Sourced from MD file 9-3-neutral-factual-results.md
 */

// Overview data
export interface NeutralOverview {
  researchDate: string
  enrichmentDate: string
  totalDataPoints: number
  totalCategories: number
  totalSources: number
  query: string
}

export const neutralOverview: NeutralOverview = {
  researchDate: '2026-04-27',
  enrichmentDate: '2026-04-28',
  totalDataPoints: 247,
  totalCategories: 12,
  totalSources: 18,
  query: '"UAE" AND ("statistics" OR "إحصائيات" OR "data" OR "بيانات" OR "figures" OR "أرقام" OR "report" OR "تقرير") AND ("announced" OR "علن" OR "stated" OR "صرح" OR "confirmed" OR "أكد") AND ("according to" OR "وفقاً لـ" OR "reported" OR "أفاد" OR "stated" OR "ذكر")',
}

// Population Statistics
export interface PopulationKPI {
  kpi: string
  value: string
  trend?: string
  source: string
  tier: number
}

export interface PopulationByEmirate {
  emirate: string
  population: number
  percentOfTotal: number
  source: string
}

export interface DemographicBreakdown {
  category: string
  male: number
  female: number
  total: number
  percentOfTotal: number
}

export interface ExpatriateNationality {
  rank: number
  nationality: string
  population: number
  percentOfTotal: number
}

export interface AgeDistribution {
  ageGroup: string
  population: number
  percentOfTotal: number
}

export interface PopulationGrowthHistorical {
  year: string
  population: string
  growthRate: string
}

export interface KeyDemographicIndicator {
  indicator: string
  value: string
  source: string
}

export const populationKPIs: PopulationKPI[] = [
  { kpi: 'Total Population (2026)', value: '11.57 million', trend: '+0.22M vs 2025', source: 'Global Media Insight', tier: 3 },
  { kpi: 'Total Population (2025)', value: '11.35 million', trend: '-1.15M vs 2024', source: 'Global Media Insight', tier: 3 },
  { kpi: 'Total Population (2024)', value: '12.50 million', trend: 'Peak', source: 'Global Media Insight', tier: 3 },
  { kpi: 'UAE Population (Dec 2024)', value: '11.3 million', source: 'CEIC Data', tier: 3 },
  { kpi: 'UNFPA Estimate (2025)', value: '11.4 million', source: 'UNFPA', tier: 2 },
]

export const populationByEmirate: PopulationByEmirate[] = [
  { emirate: 'Dubai', population: 4471000, percentOfTotal: 38.6, source: 'Global Media Insight' },
  { emirate: 'Abu Dhabi', population: 4135985, percentOfTotal: 35.7, source: 'SCAD' },
  { emirate: 'Sharjah', population: 1808000, percentOfTotal: 15.6, source: 'Global Media Insight' },
  { emirate: 'Ajman', population: 504846, percentOfTotal: 4.4, source: 'Global Media Insight' },
  { emirate: 'Ras Al Khaimah', population: 345000, percentOfTotal: 3.0, source: 'Global Media Insight' },
  { emirate: 'Fujairah', population: 202667, percentOfTotal: 1.8, source: 'Global Media Insight' },
  { emirate: 'Umm Al Quwain', population: 49159, percentOfTotal: 0.4, source: 'Global Media Insight' },
]

export const demographicBreakdown: DemographicBreakdown[] = [
  { category: 'Total Population', male: 7360000, female: 4210000, total: 11570000, percentOfTotal: 100 },
  { category: 'Expatriates', male: 6480000, female: 3760000, total: 10240000, percentOfTotal: 88.5 },
  { category: 'Emirati Nationals', male: 880000, female: 450000, total: 1330000, percentOfTotal: 11.5 },
]

export const expatriateNationalities: ExpatriateNationality[] = [
  { rank: 1, nationality: 'Indian', population: 4390000, percentOfTotal: 37.96 },
  { rank: 2, nationality: 'Pakistani', population: 1940000, percentOfTotal: 16.72 },
  { rank: 3, nationality: 'Bangladeshi', population: 850000, percentOfTotal: 7.38 },
  { rank: 4, nationality: 'Filipino', population: 800000, percentOfTotal: 6.89 },
  { rank: 5, nationality: 'Iranian', population: 550000, percentOfTotal: 4.72 },
  { rank: 6, nationality: 'Egyptian', population: 490000, percentOfTotal: 4.23 },
  { rank: -1, nationality: 'Other (200+ nationalities)', population: 2220000, percentOfTotal: 22.1 },
]

export const ageDistribution: AgeDistribution[] = [
  { ageGroup: '0-14 years', population: 1840000, percentOfTotal: 15.91 },
  { ageGroup: '15-24 years', population: 1450000, percentOfTotal: 12.53 },
  { ageGroup: '25-54 years', population: 7450000, percentOfTotal: 64.39 },
  { ageGroup: '55-64 years', population: 620000, percentOfTotal: 5.34 },
  { ageGroup: '65+ years', population: 210000, percentOfTotal: 1.83 },
]

export const urbanRuralReligion = [
  { category: 'Urban Population', value: '10.22 million', percent: 88.3 },
  { category: 'Rural Population', value: '1.35 million', percent: 11.7 },
  { category: 'Islam', value: '—', percent: 74.5 },
  { category: 'Christianity', value: '—', percent: 12.9 },
  { category: 'Hinduism', value: '—', percent: 6.2 },
  { category: 'Buddhism', value: '—', percent: 3.2 },
  { category: 'Other', value: '—', percent: 3.2 },
]

export const populationGrowthHistorical: PopulationGrowthHistorical[] = [
  { year: '1980', population: '1.01 million', growthRate: '—' },
  { year: '1990', population: '1.82 million', growthRate: '+80.2%' },
  { year: '2000', population: '3.13 million', growthRate: '+72.0%' },
  { year: '2010', population: '8.54 million', growthRate: '+172.8%' },
  { year: '2020', population: '9.89 million', growthRate: '+15.8%' },
  { year: '2024', population: '12.50 million', growthRate: '+26.4%' },
  { year: '2025', population: '11.35 million', growthRate: '-9.2%' },
  { year: '2026', population: '11.57 million', growthRate: '+1.9%' },
]

export const keyDemographicIndicators: KeyDemographicIndicator[] = [
  { indicator: 'Median Age', value: '31.6 years', source: 'Global Media Insight' },
  { indicator: 'Population Density', value: '138 people/km²', source: 'Global Media Insight' },
  { indicator: 'Literacy Rate', value: '98%', source: 'Global Media Insight' },
  { indicator: 'Male Literacy', value: '99.0%', source: 'BTI Project' },
  { indicator: 'Female Literacy', value: '98.0%', source: 'BTI Project' },
  { indicator: 'Abu Dhabi Growth Rate', value: '7.5% YoY', source: 'SCAD' },
  { indicator: 'Expatriate %', value: '89% (200+ nationalities)', source: 'BTI Project' },
  { indicator: 'Emirati Nationals', value: '1.5 million (~11%)', source: 'BTI Project' },
]

// Economic Statistics
export interface GDPKPI {
  kpi: string
  value: string
  year: string
  yoyChange?: string
  source: string
  tier: number
}

export interface AbuDhabiGDPPerformance {
  period: string
  gdpValue?: string
  growth: string
  nonOilGrowth?: string
  source: string
}

export interface FDITradeMetric {
  metric: string
  value: string
  year?: string
  source: string
}

export interface InflationEmployment {
  metric: string
  value: string
  year: string
  source: string
}

export interface UAETradeStatistic {
  metric: string
  value: string
  currency?: string
  growth?: string
  source: string
}

export const gdpKPIs: GDPKPI[] = [
  { kpi: 'UAE GDP', value: '$514.1 billion', year: '2023', source: 'BTI Project', tier: 2 },
  { kpi: 'GDP per capita (PPP)', value: '>$83,000', year: '2023', source: 'BTI Project', tier: 2 },
  { kpi: 'GDP Growth', value: '3.6%', year: '2023', yoyChange: '-0.4pp', source: 'BTI Project', tier: 2 },
  { kpi: 'GDP Growth', value: '4.0%', year: '2024', yoyChange: '+0.4pp', source: 'BTI Project', tier: 2 },
  { kpi: 'IMF Projected Growth', value: '3.7%', year: '2024', source: 'IMF', tier: 2 },
  { kpi: 'Non-oil sectors', value: '70% of GDP', year: '2023', yoyChange: '+2pp', source: 'BTI Project', tier: 2 },
]

export const abuDhabiGDPPerformance: AbuDhabiGDPPerformance[] = [
  { period: 'Q1-2024', growth: '3.3%', nonOilGrowth: '4.7% (10-year high)', source: 'SCAD' },
  { period: 'Q2-2025', gdpValue: 'AED 306.3 billion', growth: '3.8%', nonOilGrowth: '6.6% YoY', source: 'SCAD' },
  { period: 'Q3-2025', gdpValue: 'AED 325.7 billion', growth: '7.7% (record)', nonOilGrowth: '7.6%', source: 'SCAD' },
  { period: '2022', growth: '9.3% (fastest in MENA)', source: 'SCAD' },
  { period: 'H1-2022', growth: '11.2% YoY', source: 'SCAD' },
]

export const fdiTradeMetrics: FDITradeMetric[] = [
  { metric: 'FDI Inflows', value: '$30.7 billion', year: '2023', source: 'BTI Project' },
  { metric: 'Current Account Surplus', value: '9.3% of GDP', year: '2023', source: 'BTI Project' },
  { metric: 'Budget Surplus', value: '4.5% of GDP', year: '2023', source: 'BTI Project' },
  { metric: 'Public Debt', value: '32.4% of GDP', year: '2023', source: 'BTI Project' },
  { metric: 'Banking Sector Assets', value: '$896 billion', year: 'Nov 2024', source: 'BTI Project' },
  { metric: 'Market Capitalization', value: '$1.06 trillion', year: '2024', source: 'BTI Project' },
]

export const inflationEmployment: InflationEmployment[] = [
  { metric: 'Inflation', value: '1.6%', year: '2023', source: 'BTI Project' },
  { metric: 'Inflation (expected)', value: '2.3%', year: '2024', source: 'BTI Project' },
  { metric: 'Unemployment', value: '2.1%', year: '2024', source: 'BTI Project' },
  { metric: 'Unemployment (previous)', value: '4.3%', year: '2020', source: 'BTI Project' },
  { metric: 'Female Labor Force Participation', value: 'Almost 60%', year: '2023', source: 'BTI Project' },
]

export const uaeNewZealandTrade: UAETradeStatistic[] = [
  { metric: 'Non-oil trade (Jan-Sep 2024)', value: '642+ million', currency: 'USD', growth: '+8% YoY, +21% vs 2019', source: 'Illinois.gov' },
  { metric: 'New Zealand dairy exports', value: '707 million', currency: 'NZD', source: 'Illinois.gov' },
  { metric: 'New Zealand meat exports', value: '50 million', currency: 'NZD', source: 'Illinois.gov' },
  { metric: 'New Zealand horticulture exports', value: '47 million', currency: 'NZD', source: 'Illinois.gov' },
]

export const illinoisUaeTrade = [
  { metric: 'Illinois rank among US states', value: '12th', source: 'Illinois.gov' },
  { metric: 'Illinois imports from UAE', value: '$228.2 million', source: 'Illinois.gov' },
]

// Government Budget & Finance
export interface FederalBudget2025 {
  kpi: string
  value: string
  yoyChange?: string
  source: string
}

export interface BudgetAllocation {
  sector: string
  percentOfBudget: number
  aedBillion: string
}

export const federalBudget2025: FederalBudget2025[] = [
  { kpi: '2025 Federal Budget', value: 'AED 71.5 billion ($19.5 billion)', yoyChange: '+11.6% vs 2024', source: 'Ministry of Finance' },
  { kpi: 'Social Development', value: '40% of federal budget', source: 'BTI Project' },
  { kpi: 'Education Allocation', value: '15.5% of federal budget', source: 'BTI Project' },
]

export const budgetAllocations: BudgetAllocation[] = [
  { sector: 'Social Development', percentOfBudget: 40, aedBillion: 'AED 28.6' },
  { sector: 'Education', percentOfBudget: 15.5, aedBillion: 'AED 11.08' },
  { sector: 'Healthcare', percentOfBudget: 10, aedBillion: '~AED 7.15' },
  { sector: 'Infrastructure', percentOfBudget: 15, aedBillion: '~AED 10.73' },
  { sector: 'Defense/Security', percentOfBudget: 10, aedBillion: '~AED 7.15' },
  { sector: 'Other', percentOfBudget: 9.5, aedBillion: '~AED 6.79' },
]

// Official Announcements & Statements
export interface OfficialStatement {
  id: string
  title: string
  source: string
  url: string
  credibility: number
  uaeRelevance: string
  date: string
  fullText?: string
}

export interface AgreementSigned {
  agreement: string
  status: string
}

export interface KeyCommitment {
  commitment: string
  amount?: string
  details?: string
}

export interface DiplomaticPosition {
  position: string
  details: string
}

export interface UAENewZealandStatement extends OfficialStatement {
  agreements: AgreementSigned[]
  commitments: KeyCommitment[]
  tradeFigures: { partner: string; exportImport: string; value: string; period: string }[]
  diplomaticPositions: DiplomaticPosition[]
}

export const uaeNewZealandJointStatement: UAENewZealandStatement = {
  id: 'uae-nz-2025',
  title: 'UAE-New Zealand Joint Statement',
  source: 'UAE Ministry of Foreign Affairs',
  url: 'https://www.mofa.gov.ae/en/mediahub/news/2025/1/24/24-1-2025-uae-new-zealand',
  credibility: 0,
  uaeRelevance: 'Critical',
  date: 'January 14/24, 2025',
  agreements: [
    { agreement: 'Comprehensive Economic Partnership Agreement (CEPA)', status: 'Signed' },
    { agreement: 'Agreement on Promotion and Protection of Investments', status: 'Signed' },
    { agreement: 'Double Taxation Agreement', status: 'Active since 2004' },
    { agreement: 'Customs Mutual Administrative Assistance Agreement', status: 'Negotiations launched' },
    { agreement: 'New Zealand-GCC Free Trade Agreement', status: 'Concluded Oct 31, 2024' },
  ],
  commitments: [
    { commitment: 'LAKARO Phase 2 Solar Project (Fiji)', amount: 'USD 50 million', details: '11 Pacific nations' },
    { commitment: 'UAE application to join Digital Economy Partnership Agreement', details: '—' },
    { commitment: 'eGate access for UAE passport holders', details: 'Effective 2025' },
  ],
  tradeFigures: [
    { partner: 'UAE to NZ (non-oil)', exportImport: 'Exports', value: 'USD 642 million+', period: 'Jan-Sep 2024' },
    { partner: 'NZ to UAE', exportImport: 'Dairy', value: 'NZ$707 million', period: 'Annual' },
    { partner: 'NZ to UAE', exportImport: 'Meat', value: 'NZ$50 million', period: 'Annual' },
    { partner: 'NZ to UAE', exportImport: 'Horticulture', value: 'NZ$47 million', period: 'Annual' },
  ],
  diplomaticPositions: [
    { position: 'Gaza', details: 'Called for immediate ceasefire' },
    { position: 'Palestine', details: 'Supported two-state solution' },
    { position: 'Lebanon', details: 'Welcomed ceasefire' },
    { position: 'Regional', details: 'Emphasized peaceful dispute resolution' },
  ],
}

export const uaeIranIsraelCeasefire: OfficialStatement = {
  id: 'uae-iran-israel-2025',
  title: 'UAE Official Statement on Iran-Israel Ceasefire',
  source: 'UAE Ministry of Foreign Affairs',
  url: 'https://www.mofa.gov.ae/en/mediahub/news/2025/6/24/24-5-2025-uae-uae',
  credibility: 0,
  uaeRelevance: 'Critical',
  date: 'June 24, 2025',
  fullText: 'The United Arab Emirates has welcomed the announcement of a ceasefire between the Islamic Republic of Iran and the State of Israel, and expressed hope that this development will mark a step toward de-escalation, and pave the way for an environment conducive to regional stability.',
}

export const uaeHumanitarianStatement: OfficialStatement = {
  id: 'uae-humanitarian-2025',
  title: 'UAE Humanitarian Statement',
  source: 'WAM (Emirates News Agency)',
  url: 'https://www.wam.ae/en/article/bmpp2fp-uae-reaffirms-unwavering-humanitarian-diplomatic',
  credibility: 0,
  uaeRelevance: 'Critical',
  date: 'September 7, 2025',
  fullText: 'In an official statement on 7th September 2025, the UAE affirmed that media disinformation prolongs the war and increases civilian suffering',
}

export interface USInvestmentDeal {
  entity: string
  project: string
  value?: string
  details: string
}

export const uaeUSInvestmentCommitment = {
  id: 'uae-us-investment-2025',
  title: 'UAE $1.4 Trillion US Investment Commitment',
  sources: ['Gulf Business', 'Jerusalem Post'],
  urls: [
    'https://gulfbusiness.com/en/2025/world/uae-us-investment-white-house/',
    'https://www.jpost.com/international/article-847072',
  ],
  credibility: 3,
  uaeRelevance: 'Critical',
  framework: {
    duration: '10-year',
    totalCommitment: '$1.4 trillion',
    targetSectors: 'AI infrastructure, semiconductors, energy, manufacturing',
  },
  deals: [
    { entity: 'Emirates Global Aluminium', project: 'New US aluminum smelter', details: 'First new US aluminum smelter in 35 years; nearly doubles US domestic production' },
    { entity: 'ADQ + Energy Capital Partners', project: 'Energy infrastructure & data centers', value: '$25 billion', details: 'UAE sovereign wealth fund partnership with US private equity' },
    { entity: 'XRG (ADNOC)', project: 'NextDecade LNG export facility (Texas)', details: 'International investment arm of ADNOC' },
  ],
  meetingDetails: {
    uaeRepresentative: 'Sheikh Tahnoon bin Zayed Al Nahyan (National Security Adviser)',
    usSide: 'President Donald Trump, VP JD Vance',
    location: 'Oval Office',
    date: 'March 19, 2025',
    dinnerAttendees: 'Cabinet members + UAE delegation',
  },
}

// Climate & Environment Statistics
export interface UAEClimateLaw {
  field: string
  value: string
}

export interface LargeEmitterCriteria {
  threshold: string
  deadline: string
}

export interface CoreObligation {
  number: number
  obligation: string
  requirement: string
  technicalStandard: string
}

export interface ComplianceRequirement {
  requirement: string
  details: string
}

export interface PenaltyStructure {
  violation: string
  fine: string
}

export interface CarbonMarketStructure {
  element: string
  details: string
}

export const uaeClimateLawOverview = [
  { field: 'Law Number', value: 'Federal Decree-Law No. 11 of 2024' },
  { field: 'Date Enacted', value: 'December 2024' },
  { field: 'Date in Force', value: 'May 30, 2025' },
  { field: 'MENA Ranking', value: 'First country to enforce corporate climate accountability' },
  { field: 'Full Compliance Deadline', value: 'May 2026' },
]

export const largeEmitterCriteria: LargeEmitterCriteria[] = [
  { threshold: 'Annual emissions threshold >=500,000 tCO2e', deadline: 'NRCC Registration Deadline: June 28, 2025' },
]

export const coreObligations: CoreObligation[] = [
  { number: 1, obligation: 'GHG Inventory', requirement: 'Create emissions inventory', technicalStandard: 'GHG Protocol' },
  { number: 2, obligation: 'MRV', requirement: 'Measurement, Reporting & Verification', technicalStandard: 'ISO 14064 compliant' },
  { number: 3, obligation: 'Decarbonization', requirement: 'Integrate reduction strategies (Scope 1 & 2)', technicalStandard: 'Evidence-based' },
  { number: 4, obligation: 'Carbon Market', requirement: 'Prepare for carbon trading via NRCC', technicalStandard: 'SCA regulated' },
]

export const complianceRequirements: ComplianceRequirement[] = [
  { requirement: 'Data Collection', details: 'Map all facilities, vehicles, equipment, processes' },
  { requirement: 'Tracking', details: 'Fuel consumption, electricity usage, refrigerant leaks' },
  { requirement: 'Documentation', details: 'Invoices, utility bills, operational logs' },
  { requirement: 'Emission Factors', details: 'UAE-specific factors for each emirate' },
  { requirement: 'Verification', details: 'Third-party verification required' },
  { requirement: 'Reporting', details: 'Scope 1 and 2 mandatory; Scope 3 anticipated' },
]

export const penalties: PenaltyStructure[] = [
  { violation: 'Standard violation', fine: 'AED 2 million' },
  { violation: 'Repeated violation', fine: 'AED 4 million' },
  { violation: 'Additional risks', fine: 'Contract losses, reputation damage' },
]

export const scopeOfApplication = [
  'State-owned enterprises',
  'State-funded entities',
  'Commercial entities',
  'Free zone companies',
  'Multinational corporations',
  'SMEs',
  'All sectors (oil, tech, retail, etc.)',
]

export const carbonMarketStructure: CarbonMarketStructure[] = [
  { element: 'Registry', details: 'National Register for Carbon Credits (NRCC)' },
  { element: 'Regulator', details: 'Securities and Commodities Authority (SCA)' },
  { element: 'Credit Trading', details: 'Companies exceeding targets can generate/sell surplus credits' },
]

export interface EmissionTarget {
  target: string
  value: string
  baseline?: string
  timeline: string
  source: string
}

export const emissionTargets: EmissionTarget[] = [
  { target: 'Emissions reduction', value: '47%', baseline: 'vs 2019 levels', timeline: 'By 2035', source: 'UNFCCC' },
  { target: 'Clean energy share', value: '44%', timeline: 'By 2050', source: 'UNFCCC' },
  { target: 'Gas share', value: '38%', timeline: 'By 2050', source: 'UNFCCC' },
  { target: 'Clean coal share', value: '12%', timeline: 'By 2050', source: 'UNFCCC' },
  { target: 'Nuclear share', value: '6%', timeline: 'By 2050', source: 'UNFCCC' },
  { target: 'Carbon footprint reduction (power)', value: '70%', timeline: 'By 2050', source: 'UNFCCC' },
]

// Education Statistics
export interface EducationKPI {
  kpi: string
  value: string
  source: string
}

export const educationKPIs: EducationKPI[] = [
  { kpi: 'New schools opened', value: '25 (12 new + 13 reopened after maintenance)', source: 'Ministry of Education' },
  { kpi: 'Schools maintained', value: '311', source: 'Ministry of Education' },
  { kpi: 'School buses available', value: '5,000+', source: 'Ministry of Education' },
  { kpi: 'Textbooks printed', value: '10 million', source: 'Ministry of Education' },
  { kpi: 'Books digitized', value: '3.7 million', source: 'Ministry of Education' },
  { kpi: 'Laptops allocated (Grade 5 & 9)', value: '34,000', source: 'Ministry of Education' },
]

export const assessmentStructure = [
  { component: 'First term', weight: '35%' },
  { component: 'Second term', weight: '30%' },
  { component: 'Third term', weight: '35%' },
  { component: 'Formative assessment', weight: '40%' },
  { component: 'Central assessment', weight: '60%' },
]

export const educationOfficials = [
  { position: 'Minister', name: 'Sarah Al Amiri' },
  { position: 'Under-Secretary', name: 'Mohammed Al Qasim' },
]

// Index Rankings & Development Indicators
export interface GlobalRanking {
  index: string
  ranking: string
  totalCountries?: number
  year: string
  trend?: string
  source: string
}

export interface BTIGovernanceScore {
  indicator: string
  score: string
  rank: string
}

export interface SocialIndicator {
  indicator: string
  male?: string
  female?: string
  overall: string
  source: string
}

export const globalRankings: GlobalRanking[] = [
  { index: 'World Competitiveness (IMD)', ranking: '7th', year: '2024', source: 'BTI Project' },
  { index: 'Global Innovation Index', ranking: '32nd', year: '2024', source: 'BTI Project' },
  { index: 'Human Development', ranking: '17th', year: '2023-2024', source: 'UNDP' },
  { index: 'HDI Score', ranking: '0.937', year: '2023-2024', source: 'UNDP' },
  { index: 'Global Gender Gap', ranking: '73rd', totalCountries: 146, year: '2024', source: 'WEF' },
  { index: 'World Press Freedom', ranking: '160th', totalCountries: 180, year: '2024', source: 'RSF' },
  { index: 'BTI Status Index', ranking: '46th', totalCountries: 137, year: '2026', source: 'BTI Project' },
  { index: 'BTI Governance Index', ranking: '16th', totalCountries: 137, year: '2026', source: 'BTI Project' },
  { index: 'BTI Political Transformation', ranking: '85th', totalCountries: 137, year: '2026', source: 'BTI Project' },
  { index: 'BTI Economic Transformation', ranking: '15th', totalCountries: 137, year: '2026', source: 'BTI Project' },
  { index: 'World Justice Project Rule of Law', ranking: '39th', totalCountries: 142, year: '2024', source: 'WJP' },
]

export const btiGovernanceScores: BTIGovernanceScore[] = [
  { indicator: 'Governance Index', score: '6.67', rank: '16th' },
  { indicator: 'Political Transformation', score: '4.00', rank: '85th' },
  { indicator: 'Economic Transformation', score: '8.00', rank: '15th' },
  { indicator: 'Status Index', score: '6.00', rank: '46th' },
]

export const socialIndicators: SocialIndicator[] = [
  { indicator: 'Literacy rate', male: '99.0%', female: '98.0%', overall: '98%', source: 'BTI Project' },
  { indicator: 'Access to sanitation', overall: '99%', source: 'BTI Project' },
  { indicator: 'Access to water/electricity', overall: '100%', source: 'BTI Project' },
  { indicator: 'Education Index', overall: '0.904', source: 'BTI Project' },
  { indicator: 'Gini coefficient', overall: '~26.0', source: 'BTI Project' },
  { indicator: 'Trust in government', overall: '74%', source: 'Edelman 2024' },
]

export const genderDevelopment = [
  { index: 'Gender Development Index', value: '0.986', rank: '17th' },
  { index: 'Female Labor Force Participation', value: '~60%', rank: '—' },
  { index: 'FNC Women\'s representation', value: '50% (quota)', rank: '—' },
]

// Official Statistics Portal
export interface PortalCapability {
  category: string
  description: string
}

export const fcscCapabilities: PortalCapability[] = [
  { category: 'Official Statistics', description: 'UAE unified official statistics' },
  { category: 'Competitiveness Data', description: 'National competitiveness metrics' },
  { category: 'SDGs Reporting', description: 'Sustainable Development Goals tracking' },
  { category: 'Global Rankings', description: 'International comparison data' },
  { category: 'Latest News', description: 'Statistical releases and publications' },
]

// According to Sources - Factual Statements
export interface IMFStatistic {
  metric: string
  value: string
  year?: string
}

export interface SCADFigure {
  metric: string
  value: string
  periodYear?: string
}

export interface PoliticalFact {
  fact: string
  details: string
}

export const imfStatistics: IMFStatistic[] = [
  { metric: 'UAE projected GDP growth', value: '3.7%', year: '2024' },
  { metric: 'Non-hydrocarbon growth', value: '4.9%', year: '2024' },
  { metric: 'Key sectors', value: 'Tourism, construction, retail', year: '—' },
]

export const scadFigures: SCADFigure[] = [
  { metric: 'Abu Dhabi GDP growth', value: '3.3%', periodYear: 'Q1-2024' },
  { metric: 'Non-oil economy growth', value: '4.7% (10-year high)', periodYear: 'Q1-2024' },
  { metric: 'Abu Dhabi GDP', value: 'AED 306.3 billion', periodYear: 'Q2-2025' },
  { metric: 'Abu Dhabi GDP growth', value: '3.8%', periodYear: 'Q2-2025' },
  { metric: 'Non-oil growth', value: '6.6% YoY', periodYear: 'Q2-2025' },
  { metric: 'Abu Dhabi Q3-2025 GDP', value: 'AED 325.7 billion (record)', periodYear: 'Q3-2025' },
  { metric: 'Abu Dhabi Q3-2025 growth', value: '7.7% YoY (record)', periodYear: 'Q3-2025' },
]

export const politicalFacts: PoliticalFact[] = [
  { fact: 'Established', details: 'December 2, 1971' },
  { fact: 'Government type', details: 'Federal absolute monarchy' },
  { fact: 'President', details: 'Mohammed bin Zayed Al Nahyan (since May 2022)' },
  { fact: 'FNC voter participation', details: '44% (October 2023)' },
  { fact: 'Women\'s representation', details: '50% quota in FNC' },
]

export const usStateDepartmentFacts = [
  { metric: 'Labor law violations (MOHRE)', value: '29,000', year: '2024' },
  { metric: 'Average MFN tariff rate', value: '4.7%', year: '—' },
  { metric: 'Agricultural tariff average', value: '5.4%', year: '—' },
  { metric: 'Non-agricultural tariff average', value: '4.6%', year: '—' },
]

// UAE Future Roadmap Targets
export interface FutureInitiative {
  initiative: string
  target: string
  timeline: string
  keyDetails?: string
}

export const shortTermInitiatives: FutureInitiative[] = [
  { initiative: 'Space Exploration', target: 'Emirati interplanetary mission', timeline: 'Launch 2028', keyDetails: '3.6B km journey; asteroid landing 2033' },
  { initiative: 'Solar Capacity (MBR Solar Park)', target: '5,000 MW', timeline: 'By 2030', keyDetails: 'Up from 1,000 MW in 2020' },
  { initiative: 'Solar Tower', target: '260 meters', timeline: '—', keyDetails: 'World\'s tallest' },
  { initiative: 'Autonomous Transport (Dubai)', target: '25%', timeline: 'By 2030', keyDetails: 'AED 22B annual revenue' },
  { initiative: 'Abu Dhabi Economic Vision', target: 'Reduce oil reliance', timeline: 'By 2030', keyDetails: 'Advance knowledge industries' },
]

export const mediumTermInitiatives: FutureInitiative[] = [
  { initiative: 'UAE GDP', target: 'AED 3 trillion', timeline: 'By 2031', keyDetails: 'Doubled from AED 1.49 trillion' },
  { initiative: 'Dubai Economic Agenda (D33)', target: 'Double economy', timeline: 'By 2033', keyDetails: 'Trade to AED 25.6T; 400+ trading partners' },
  { initiative: 'Clean Energy (National)', target: '50%', timeline: 'By 2050', keyDetails: 'Up from 25%' },
  { initiative: 'Power Generation Carbon Reduction', target: '70%', timeline: 'By 2050' },
  { initiative: 'Energy Efficiency', target: '40%', timeline: 'By 2050', keyDetails: 'Saving AED 700 billion' },
  { initiative: 'Dubai Clean Energy', target: '75%', timeline: 'By 2050' },
  { initiative: 'Water Demand Reduction', target: '21%', timeline: 'By 2036', keyDetails: 'UAE Water Security Strategy' },
  { initiative: 'AI Government Services', target: '100%', timeline: 'By 2031', keyDetails: 'UAE Strategy for AI' },
  { initiative: 'Dubai 2040 Urban Master Plan', target: 'Double city size', timeline: 'By 2040', keyDetails: '60% green spaces; 168 km2 commercial' },
]

export const longTermInitiatives: FutureInitiative[] = [
  { initiative: 'Mars Settlement', target: 'First inhabitable human settlement', timeline: 'By 2117', keyDetails: 'Mars 2117 project; 100-year plan' },
  { initiative: 'Food Security', target: 'Top 10 Global Food Security Index', timeline: 'By 2021', keyDetails: 'Food Security Strategy 2051' },
  { initiative: 'RAK Energy Targets', target: '30% energy savings, 20% water savings, 20% renewables', timeline: 'By 2040' },
  { initiative: 'Fujairah Investment', target: 'AED 1.5 billion', timeline: 'By 2040', keyDetails: 'Housing, transport, ports, healthcare' },
]

// Future Roadmap Source Credibility Matrix
export interface FutureSourceCredibilityEntry {
  source: string
  tier: number
  url: string
  dataPoints: number
  status: string
}

export const futureSourceCredibilityMatrix: FutureSourceCredibilityEntry[] = [
  { source: 'UAE Ministry of Foreign Affairs', tier: 0, url: 'mofa.gov.ae', dataPoints: 12, status: 'Fetched' },
  { source: 'UAE Ministry of Education', tier: 0, url: 'moe.gov.ae', dataPoints: 8, status: 'Referenced' },
  { source: 'SCAD', tier: 0, url: 'scad.gov.ae', dataPoints: 15, status: 'Fetched' },
  { source: 'UAE Legislation', tier: 0, url: 'ualegislation.gov.ae', dataPoints: 20, status: 'Referenced' },
  { source: 'FCSC', tier: 0, url: 'fcsc.gov.ae', dataPoints: 5, status: 'Fetched' },
  { source: 'WAM', tier: 0, url: 'wam.ae', dataPoints: 3, status: 'Fetched' },
  { source: 'UNFCCC', tier: 1, url: 'unfccc.int', dataPoints: 6, status: 'PDF Unreadable' },
  { source: 'Ministry of Finance', tier: 1, url: 'mof.gov.ae', dataPoints: 5, status: 'PDF Fetched' },
  { source: 'BTI Project', tier: 2, url: 'bti-project.org', dataPoints: 45, status: 'Fetched' },
  { source: 'PwC', tier: 2, url: 'pwc.com', dataPoints: 15, status: 'PDF Fetched' },
  { source: 'IMF', tier: 2, url: 'imf.org', dataPoints: 4, status: 'Referenced' },
  { source: 'UNFPA', tier: 2, url: 'unfpa.org', dataPoints: 3, status: 'Partial' },
  { source: 'CEIC Data', tier: 3, url: 'ceicdata.com', dataPoints: 3, status: '403 Blocked' },
  { source: 'Global Media Insight', tier: 3, url: 'globalmediainsight.com', dataPoints: 35, status: 'Fetched' },
  { source: 'Gulf Business', tier: 3, url: 'gulfbusiness.com', dataPoints: 8, status: 'Fetched' },
  { source: 'Jerusalem Post', tier: 3, url: 'jpost.com', dataPoints: 6, status: 'Fetched' },
  { source: 'Plan A Academy', tier: 3, url: 'plana.earth', dataPoints: 12, status: 'Fetched' },
  { source: 'Illinois.gov', tier: 3, url: 'dceo.illinois.gov', dataPoints: 3, status: 'PDF Unreadable' },
]

export const futureTierDefinitions = [
  { tier: 0, description: 'Official Government (Primary)', examples: 'UAE Government, SCAD, FCSC, Ministry websites' },
  { tier: 1, description: 'Official Government (Secondary)', examples: 'UN agencies, official statistics bodies' },
  { tier: 2, description: 'Trusted Secondary', examples: 'BTI Project, PwC, IMF, World Bank' },
  { tier: 3, description: 'Media/Analysis', examples: 'News outlets, blogs, industry reports' },
  { tier: 4, description: 'Unverified', examples: 'Social media, anonymous sources' },
]

// Entity Registry
export interface GovernmentEntityEntry {
  entity: string
  acronym: string
  role: string
}

export interface CompanyOrganization {
  entity: string
  type: string
  context: string
}

export interface KeyOfficial {
  name: string
  position: string
}

export const criticismGovernmentEntities: GovernmentEntityEntry[] = [
  { entity: 'Statistics Centre Abu Dhabi', acronym: 'SCAD', role: 'Abu Dhabi statistics' },
  { entity: 'Federal Competitiveness & Statistics Centre', acronym: 'FCSC', role: 'Federal statistics' },
  { entity: 'Ministry of Foreign Affairs', acronym: 'MOFA', role: 'Foreign relations' },
  { entity: 'Ministry of Education', acronym: 'MOE', role: 'Education policy' },
  { entity: 'Ministry of Finance', acronym: 'MOF', role: 'Federal budget' },
  { entity: 'Securities and Commodities Authority', acronym: 'SCA', role: 'Financial regulation' },
  { entity: 'National Register for Carbon Credits', acronym: 'NRCC', role: 'Carbon market' },
]

export const companiesOrganizations: CompanyOrganization[] = [
  { entity: 'Emirates Global Aluminium', type: 'SOE', context: 'US investment deal' },
  { entity: 'ADQ', type: 'Sovereign Wealth Fund', context: '$25B US partnership' },
  { entity: 'Energy Capital Partners', type: 'US PE Firm', context: 'ADQ partner' },
  { entity: 'XRG (ADNOC)', type: 'SOE', context: 'LNG investment' },
  { entity: 'NextDecade', type: 'US Company', context: 'LNG facility target' },
]

export const keyOfficials: KeyOfficial[] = [
  { name: 'Sheikh Mohamed bin Zayed Al Nahyan', position: 'President' },
  { name: 'Sheikh Tahnoon bin Zayed Al Nahyan', position: 'National Security Adviser, ADQ Chairman' },
  { name: 'Sarah Al Amiri', position: 'Minister of Education' },
  { name: 'Mohammed Al Qasim', position: 'Education Under-Secretary' },
  { name: 'Christopher Luxon', position: 'Prime Minister of New Zealand' },
]

// UAE Relevance Assessment
export interface RelevanceAssessment {
  topic: string
  relevance: string
  priority: string
  confidence: string
}

export const futureRelevanceAssessment: RelevanceAssessment[] = [
  { topic: 'Population Statistics', relevance: 'Critical', priority: 'P0', confidence: 'High' },
  { topic: 'GDP/Economic Growth', relevance: 'Critical', priority: 'P0', confidence: 'High' },
  { topic: 'US Investment Commitment', relevance: 'Critical', priority: 'P0', confidence: 'High' },
  { topic: 'Iran-Israel Ceasefire Statement', relevance: 'Critical', priority: 'P0', confidence: 'High' },
  { topic: 'Climate Law Compliance', relevance: 'Critical', priority: 'P0', confidence: 'High' },
  { topic: 'Federal Budget 2025', relevance: 'High', priority: 'P1', confidence: 'High' },
  { topic: 'UAE-New Zealand CEPA', relevance: 'High', priority: 'P1', confidence: 'High' },
  { topic: 'Emissions Targets', relevance: 'High', priority: 'P1', confidence: 'Medium' },
  { topic: 'Education Statistics', relevance: 'Medium', priority: 'P2', confidence: 'Medium' },
  { topic: 'Index Rankings', relevance: 'Medium', priority: 'P2', confidence: 'Medium' },
  { topic: 'Humanitarian Statement', relevance: 'Medium', priority: 'P2', confidence: 'Medium' },
]

// Data Completeness Assessment
export interface DataCompleteness {
  category: string
  dataPoints: number
  completeness: string
}

export const dataCompleteness: DataCompleteness[] = [
  { category: 'Population', dataPoints: 47, completeness: '95%' },
  { category: 'Economics', dataPoints: 35, completeness: '90%' },
  { category: 'Government Finance', dataPoints: 8, completeness: '70%' },
  { category: 'International Relations', dataPoints: 28, completeness: '85%' },
  { category: 'Climate Policy', dataPoints: 25, completeness: '80%' },
  { category: 'Education', dataPoints: 12, completeness: '75%' },
  { category: 'Rankings', dataPoints: 18, completeness: '85%' },
  { category: 'Future Roadmap', dataPoints: 15, completeness: '70%' },
]

export const overallCompleteness = '83%'

// Hook for Neutral Data
export function useNeutralData() {
  return {
    overview: neutralOverview,
    populationKPIs,
    populationByEmirate,
    demographicBreakdown,
    expatriateNationalities,
    ageDistribution,
    urbanRuralReligion,
    populationGrowthHistorical,
    keyDemographicIndicators,
    gdpKPIs,
    abuDhabiGDPPerformance,
    fdiTradeMetrics,
    inflationEmployment,
    uaeNewZealandTrade,
    illinoisUaeTrade,
    federalBudget2025,
    budgetAllocations,
    uaeNewZealandJointStatement,
    uaeIranIsraelCeasefire,
    uaeHumanitarianStatement,
    uaeUSInvestmentCommitment,
    uaeClimateLawOverview,
    largeEmitterCriteria,
    coreObligations,
    complianceRequirements,
    penalties,
    scopeOfApplication,
    carbonMarketStructure,
    emissionTargets,
    educationKPIs,
    assessmentStructure,
    educationOfficials,
    globalRankings,
    btiGovernanceScores,
    socialIndicators,
    genderDevelopment,
    fcscCapabilities,
    imfStatistics,
    scadFigures,
    politicalFacts,
    usStateDepartmentFacts,
    shortTermInitiatives,
    mediumTermInitiatives,
    longTermInitiatives,
    sourceCredibilityMatrix: futureSourceCredibilityMatrix,
    tierDefinitions,
    dataCompleteness,
    overallCompleteness,
  }
}

// Media Monitoring KPIs
export const mediaMonitoringKPIs = {
  coreKPIs: [
    { name: 'Net Sentiment Score', formula: 'Positive % - Negative %' },
    { name: 'Positive-Negative Ratio', formula: 'Positive feedback ÷ Negative feedback' },
    { name: 'Hope Index', formula: 'Hope terms ÷ Total mentions' },
    { name: 'Optimism Score', formula: 'Net sentiment of optimistic language' },
  ],
  uaeSpecificKPIs: [
    { name: 'National Hope Index', description: 'Aggregate hope sentiment in UAE-related content' },
    { name: 'Leadership Sentiment', description: 'Sentiment toward UAE leadership messaging', target: '> 75% positive' },
    { name: 'Hope Probe Engagement', description: 'Engagement with Al-Amal/Hope Probe content' },
  ],
}

// Optimism marketing stats
export const optimismMarketing = {
  optimismTypes: [
    { name: 'Groundless optimism', description: 'Based on irrational beliefs' },
    { name: 'Resourced optimism', description: 'Due to personal circumstances' },
    { name: 'Agentive optimism', description: "From one's effort toward goals" },
    { name: 'Perspectival optimism', description: 'From focusing on positive aspects' },
  ],
  marketingStatistics: [
    { metric: 'Goal pursuit increase (hopeful stimuli)', value: '+36%', source: 'Nature Human Behaviour, 2021' },
    { metric: 'Decision patience increase', value: '+41%', source: 'Nature Human Behaviour, 2021' },
    { metric: 'Lifetime trust (hopeful brands)', value: '2.3×', source: 'Kantar BrandZ, 2024' },
    { metric: 'Customer advocacy', value: '1.8×', source: 'Kantar BrandZ, 2024' },
    { metric: 'Trust from authentic optimism', value: '+48%', source: 'HBR, 2024' },
  ],
  brightFramework: [
    { letter: 'B', principle: 'Believe', description: 'Anchor in credible promise' },
    { letter: 'R', principle: 'Relate', description: 'Show shared experience' },
    { letter: 'I', principle: 'Inspire', description: 'Create forward momentum' },
    { letter: 'G', principle: 'Guide', description: 'Provide actionable steps' },
    { letter: 'H', principle: 'Humanize', description: 'Use authentic voices' },
    { letter: 'T', principle: 'Transform', description: 'Close with visible progress' },
  ],
  keyPrinciple: 'Hope sells the future—but only when it\'s real.',
}

// WGSN Optimism Trends
export const wgsnOptimismTrends = [
  { year: 2024, trend: 'Realistic Optimism' },
  { year: 2026, trend: 'Rational Optimism' },
  { year: 2027, trend: 'Emerging patterns (TBD)' },
]

// Hope keywords
export const hopeOptimismKeywords = {
  hopeTerms: ['hope', 'hopeful', 'wishing', 'yearning', 'aspiration'],
  optimismTerms: ['optimistic', 'positive outlook', 'bright future', 'confidence'],
  uaeSpecific: ['Al-Amal', 'Hope Probe', 'vision', 'progress', 'future'],
  achievement: ['believe', 'achieve', 'succeed', 'milestone', 'dream'],
}

// Hook for hope-optimism data
export function useHopeOptimismData() {
  return {
    hopeOptimismData,
    polyHopeDataset,
    emiratesMarsMission,
    hopeImpactStudies,
    mediaMonitoringKPIs,
    optimismMarketing,
    wgsnOptimismTrends,
    hopeOptimismKeywords,
  }
}

// ============================================================================
// CONTROVERSY & DEBATE DATA (MD 9-5)
// ============================================================================

/**
 * Source Credibility Matrix - 28 sources across 5 tiers
 */
export interface ControversySourceCredibility {
  source: string
  url: string
  tier: number
  credibilityScore: number
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
  dataPoints: number
}

export const controversySourceCredibilityMatrix: ControversySourceCredibility[] = [
  { source: 'Freedom House', url: 'freedomhouse.org', tier: 1, credibilityScore: 95, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'HRW World Report 2025', url: 'hrw.org', tier: 1, credibilityScore: 95, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'Amnesty International', url: 'amnesty.org', tier: 1, credibilityScore: 95, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'US State Department', url: 'state.gov', tier: 1, credibilityScore: 92, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'Transparency International', url: 'transparency.org', tier: 1, credibilityScore: 90, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'UN Special Rapporteurs', url: 'ohchr.org', tier: 1, credibilityScore: 92, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'Cato Institute', url: 'cato.org', tier: 2, credibilityScore: 85, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'Carnegie Endowment', url: 'carnegieendowment.org', tier: 2, credibilityScore: 82, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'BTi Project', url: 'bti-project.org', tier: 2, credibilityScore: 80, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'DAWN', url: 'dawnmena.org', tier: 2, credibilityScore: 82, uaeRelevance: 'Critical', dataPoints: 0 },
  { source: 'Greenpeace', url: 'greenpeace.org', tier: 2, credibilityScore: 80, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'Washington Institute', url: 'washingtoninstitute.org', tier: 2, credibilityScore: 78, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'MEI', url: 'mei.edu', tier: 2, credibilityScore: 78, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'UNDP', url: 'undp.org', tier: 0, credibilityScore: 88, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'WHO', url: 'who.int', tier: 0, credibilityScore: 92, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'World Bank', url: 'worldbank.org', tier: 0, credibilityScore: 90, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'Al Jazeera', url: 'aljazeera.com', tier: 3, credibilityScore: 72, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'Middle East Eye', url: 'middleeasteye.net', tier: 3, credibilityScore: 70, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'The New Arab', url: 'newarab.com', tier: 3, credibilityScore: 68, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'Bloomberg', url: 'bloomberg.com', tier: 2, credibilityScore: 82, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'Forbes', url: 'forbes.com', tier: 2, credibilityScore: 78, uaeRelevance: 'Medium', dataPoints: 0 },
  { source: 'The Guardian', url: 'theguardian.com', tier: 2, credibilityScore: 80, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'Reuters', url: 'reuters.com', tier: 2, credibilityScore: 82, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'AP News', url: 'apnews.com', tier: 2, credibilityScore: 82, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'The Economist', url: 'economist.com', tier: 2, credibilityScore: 85, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'Gulf News', url: 'gulfnews.com', tier: 3, credibilityScore: 65, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'The National', url: 'thenationalnews.com', tier: 3, credibilityScore: 68, uaeRelevance: 'High', dataPoints: 0 },
  { source: 'Khaleej Times', url: 'khaleejtimes.com', tier: 3, credibilityScore: 62, uaeRelevance: 'High', dataPoints: 0 },
]

/**
 * Controversy Topic Interface
 */
export interface DebateAngle {
  angle: string
  proStance: string
  conStance: string
  evidenceStrength: 'Strong' | 'Moderate' | 'Weak'
  sentiment: number
}

export interface TopicMetrics {
  sentimentScore: number
  volume: number
  velocity: number
  reach: number
  engagement: number
  credibility: number
}

export interface UAERelevanceScore {
  score: number
  level: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  justification: string
}

export interface ControversyTopic {
  id: string
  title: string
  description: string
  sentiment: SentimentBreakdown
  sentimentScore: number
  dominantSentiment: 'positive' | 'negative' | 'neutral' | 'highly-divided'
  keyDrivers: string[]
  debateAngles: DebateAngle[]
  uaeRelevance: UAERelevanceScore
  alertLevel: AlertLevel
  metrics: TopicMetrics
  keyFindings: KeyFinding[]
  sources: SourceReference[]
  structuredData?: Record<string, unknown>
  lastUpdated: string
}

/**
 * Alcohol Regulations Controversy
 */
export const alcoholRegulationsData: ControversyTopic = {
  id: 'controversy-1',
  title: 'Alcohol Regulations',
  description: 'The UAE\'s alcohol regulations present a complex landscape of modernization versus traditional values. Recent reforms allowing public alcohol consumption and changes to drunk driving laws represent significant liberalizations, yet remain contingent on specialized licenses and occur within a framework of ongoing public decency regulations. The controversy centers on whether these reforms represent genuine progressive change or merely economic pragmatism aimed at attracting tourism and foreign investment.',
  sentiment: { positive: 45, negative: 25, neutral: 30, overall: 0.35, volume: 45000 },
  sentimentScore: 0.35,
  dominantSentiment: 'positive',
  keyDrivers: ['Tourism economic impact', 'Expat community demands', 'Global business standards', 'Traditional cultural values', 'Public decency regulations'],
  debateAngles: [
    { angle: 'Pro-Reform', proStance: 'Modernization and economic pragmatism', conStance: 'Cultural compromise concerns', evidenceStrength: 'Moderate', sentiment: 0.6 },
    { angle: 'Liberalization Debate', proStance: 'Business and tourism attraction', conStance: 'Traditional values erosion', evidenceStrength: 'Moderate', sentiment: 0.3 },
    { angle: 'Cultural Identity', proStance: 'Progressive image enhancement', conStance: 'Authentic identity questions', evidenceStrength: 'Weak', sentiment: 0.1 },
  ],
  uaeRelevance: { score: 55, level: 'MEDIUM', justification: 'Moderate relevance to tourism and business sectors' },
  alertLevel: 'GREEN',
  metrics: { sentimentScore: 0.35, volume: 45000, velocity: 25, reach: 850000, engagement: 320000, credibility: 78 },
  keyFindings: [
    { finding: 'Dubai allows public alcohol consumption', metric: '2020 reform', source: 'Gulf News', tier: 2, alert: 'GREEN' },
    { finding: 'Alcohol license requirements remain', metric: 'Mandatory', source: 'Khaleej Times', tier: 3 },
    { finding: 'No drunk driving tolerance', metric: 'Zero tolerance', source: 'The National', tier: 3 },
    { finding: 'Public decency laws still apply', metric: 'Ongoing', source: 'Khaleej Times', tier: 3 },
  ],
  sources: [
    { name: 'Gulf News', tier: 3, date: '2024-11-15' },
    { name: 'The National', tier: 3, date: '2024-11-15' },
    { name: 'Khaleej Times', tier: 3, date: '2024-11-15' },
  ],
  lastUpdated: '2026-04-29',
}

/**
 * Dress Code Controversy
 */
export const dressCodeData: ControversyTopic = {
  id: 'controversy-2',
  title: 'Dress Code',
  description: 'The UAE\'s approach to dress code presents contradictions between official tolerance messaging and enforcement actions. While authorities have addressed inappropriate dress in malls and public spaces, incidents involving tourist misunderstandings and conflicting enforcement standards have drawn international attention. The controversy highlights tensions between cultural norms, religious sensibilities, and the country\'s aspirations to present itself as a cosmopolitan destination.',
  sentiment: { positive: 20, negative: 55, neutral: 25, overall: -0.45, volume: 38000 },
  sentimentScore: -0.45,
  dominantSentiment: 'negative',
  keyDrivers: ['Cultural authenticity concerns', 'Tourist incident misunderstandings', 'Media coverage amplification', 'Social media viral moments', 'Enforcement consistency questions'],
  debateAngles: [
    { angle: 'Enforcement Debate', proStance: 'Cultural respect and norms protection', conStance: 'Arbitrary application concerns', evidenceStrength: 'Moderate', sentiment: -0.4 },
    { angle: 'Tourism Impact', proStance: 'Clear guidelines protect culture', conStance: 'Negative publicity from incidents', evidenceStrength: 'Moderate', sentiment: -0.3 },
    { angle: 'Freedom Expression', proStance: 'Individual choice advocates', conStance: 'Cultural sensitivity proponents', evidenceStrength: 'Weak', sentiment: -0.5 },
  ],
  uaeRelevance: { score: 65, level: 'HIGH', justification: 'Direct impact on tourism reputation and international media coverage' },
  alertLevel: 'YELLOW',
  metrics: { sentimentScore: -0.45, volume: 38000, velocity: 45, reach: 1200000, engagement: 485000, credibility: 72 },
  keyFindings: [
    { finding: 'Mall dress code enforcement documented', metric: 'Documented incidents', source: 'Multiple sources', tier: 2 },
    { finding: 'Tourist misunderstanding incidents', metric: 'Documented cases', source: 'Social media', tier: 3 },
    { finding: 'No national dress code law', metric: 'Regional variation', source: 'Legal analysis', tier: 2 },
    { finding: 'Cultural sensitivity messaging', metric: 'Ongoing', source: 'Official statements', tier: 2 },
  ],
  sources: [
    { name: 'The New Arab', tier: 3, date: '2024-08-22' },
    { name: 'Middle East Eye', tier: 3, date: '2024-08-22' },
    { name: 'Social media reports', tier: 4, date: '2024-08-22' },
  ],
  lastUpdated: '2026-04-29',
}

/**
 * Emiratization Controversy
 */
export const emiratizationData: ControversyTopic = {
  id: 'controversy-3',
  title: 'Emiratization',
  description: 'UAE\'s Emiratization policies mandating increased national workforce participation present a complex picture of economic nationalism intersecting with labor market realities. While aiming to reduce dependence on foreign labor and create opportunities for citizens, the policies have generated controversy regarding effectiveness, private sector resistance, and potential impacts on the country\'s business-friendly reputation.',
  sentiment: { positive: 40, negative: 35, neutral: 25, overall: -0.10, volume: 52000 },
  sentimentScore: -0.10,
  dominantSentiment: 'neutral',
  keyDrivers: ['Labor market dependency reduction', 'Private sector compliance costs', 'National citizen employment expectations', 'Business competitiveness concerns', 'Skills gap discussions'],
  debateAngles: [
    { angle: 'Economic Nationalism', proStance: 'Reduces foreign labor dependency', conStance: 'May reduce flexibility', evidenceStrength: 'Strong', sentiment: 0.3 },
    { angle: 'Business Impact', proStance: 'Creates skilled citizen workforce', conStance: 'Increases operational costs', evidenceStrength: 'Moderate', sentiment: -0.2 },
    { angle: 'Implementation', proStance: 'Strategic workforce development', conStance: 'Quota-based rather than quality', evidenceStrength: 'Moderate', sentiment: -0.1 },
  ],
  uaeRelevance: { score: 85, level: 'HIGH', justification: 'Core economic policy with significant labor market implications' },
  alertLevel: 'YELLOW',
  metrics: { sentimentScore: -0.10, volume: 52000, velocity: 32, reach: 950000, engagement: 380000, credibility: 80 },
  keyFindings: [
    { finding: 'Nafieh platform for citizen employment', metric: 'Active', source: 'UAE government', tier: 1 },
    { finding: 'Private sector Emiratization targets', metric: 'Sector-specific', source: 'MOHRE', tier: 1 },
    { finding: '20,000 citizen training program', metric: 'Announced', source: 'UAE government', tier: 1 },
    { finding: 'Private sector resistance documented', metric: 'Survey data', source: 'Business councils', tier: 2 },
  ],
  sources: [
    { name: 'UAE government sources', tier: 1, date: '2024-09-10' },
    { name: 'MOHRE', tier: 1, date: '2024-09-10' },
    { name: 'Business councils', tier: 2, date: '2024-09-10' },
  ],
  lastUpdated: '2026-04-29',
}

/**
 * Israel Normalization Controversy
 */
export const israelNormalizationData: ControversyTopic = {
  id: 'controversy-4',
  title: 'Israel Normalization',
  description: 'The UAE\'s Abraham Accords normalization with Israel represents a significant foreign policy pivot generating substantial controversy both domestically and across the Arab world. While presented as a strategic diplomatic achievement enabling economic benefits and regional stability, critics argue it represents a betrayal of Palestinian causes and undermines Arab solidarity. The controversy reflects deeper tensions between pragmatic engagement and ideological commitments.',
  sentiment: { positive: 35, negative: 50, neutral: 15, overall: -0.40, volume: 85000 },
  sentimentScore: -0.40,
  dominantSentiment: 'negative',
  keyDrivers: ['Palestinian cause implications', 'Regional political calculations', 'Economic opportunity assessments', 'Islamic community reactions', 'Strategic alliance considerations'],
  debateAngles: [
    { angle: 'Strategic Realism', proStance: 'Diplomatic and economic benefits', conStance: 'Ideological compromise', evidenceStrength: 'Strong', sentiment: 0.2 },
    { angle: 'Palestinian Issue', proStance: 'Practical engagement over confrontation', conStance: 'Abandonment of solidarity', evidenceStrength: 'Strong', sentiment: -0.7 },
    { angle: 'Regional Dynamics', proStance: 'New partnerships and trade routes', conStance: 'Alliance with oppressor', evidenceStrength: 'Moderate', sentiment: -0.3 },
  ],
  uaeRelevance: { score: 92, level: 'CRITICAL', justification: 'Major foreign policy decision with significant domestic and regional implications' },
  alertLevel: 'YELLOW',
  metrics: { sentimentScore: -0.40, volume: 85000, velocity: 38, reach: 2100000, engagement: 920000, credibility: 85 },
  keyFindings: [
    { finding: 'Abraham Accords signed', metric: 'September 2020', source: 'Official statements', tier: 1 },
    { finding: 'Trade and investment flows', metric: '$3B+ agreements', source: 'Government reports', tier: 1 },
    { finding: 'Regional criticism documented', metric: 'Multiple Arab nations', source: 'Regional media', tier: 2 },
    { finding: 'Palestinian solidarity protests', metric: 'Documented', source: 'Human rights orgs', tier: 2 },
  ],
  sources: [
    { name: 'Official UAE statements', tier: 1, date: '2024-10-05' },
    { name: 'Regional media analysis', tier: 2, date: '2024-10-05' },
    { name: 'Human rights organizations', tier: 2, date: '2024-10-05' },
  ],
  lastUpdated: '2026-04-29',
}

/**
 * Military Intervention Controversy
 */
export const militaryInterventionData: ControversyTopic = {
  id: 'controversy-5',
  title: 'Military Intervention',
  description: 'UAE\'s military interventions across the Middle East, particularly in Yemen and Libya, present a significant controversy regarding the gap between humanitarian positioning and documented civilian harm. While UAE framing emphasizes counter-terrorism and stability objectives, critics point to documented civilian casualties, humanitarian crises, and potential war crimes, creating a severe credibility contradiction.',
  sentiment: { positive: 15, negative: 70, neutral: 15, overall: -0.75, volume: 120000 },
  sentimentScore: -0.75,
  dominantSentiment: 'negative',
  keyDrivers: ['Yemen civil war involvement', 'Libyan civil war support', 'Civilian casualty documentation', 'Humanitarian crisis contributions', 'Strategic versus humanitarian objectives'],
  debateAngles: [
    { angle: 'Security Justification', proStance: 'Counter-terrorism and regional stability', conStance: 'Escalation and civilian harm', evidenceStrength: 'Moderate', sentiment: -0.4 },
    { angle: 'Humanitarian Impact', proStance: 'Humanitarian assistance programs', conStance: 'Direct civilian harm involvement', evidenceStrength: 'Strong', sentiment: -0.8 },
    { angle: 'International Law', proStance: 'Compliance with international norms', conStance: 'War crimes allegations', evidenceStrength: 'Strong', sentiment: -0.7 },
  ],
  uaeRelevance: { score: 98, level: 'CRITICAL', justification: 'Critical reputational and international legal implications' },
  alertLevel: 'RED',
  metrics: { sentimentScore: -0.75, volume: 120000, velocity: 52, reach: 3500000, engagement: 1450000, credibility: 90 },
  keyFindings: [
    { finding: 'Yemen coalition involvement', metric: 'Since 2015', source: 'UN reports', tier: 1 },
    { finding: 'Civilian casualties documented', metric: 'Tens of thousands', source: 'HRW, Amnesty', tier: 1 },
    { finding: 'Libyan support documented', metric: 'Since 2014', source: 'UN reports', tier: 1 },
    { finding: 'UN war crimes documentation', metric: 'Extensive', source: 'UN Special Rapporteurs', tier: 1 },
  ],
  sources: [
    { name: 'UN Special Rapporteurs', tier: 1, date: '2024-11-20' },
    { name: 'Amnesty International', tier: 1, date: '2024-11-20' },
    { name: 'Human Rights Watch', tier: 1, date: '2024-11-20' },
  ],
  lastUpdated: '2026-04-29',
}

/**
 * Mega Projects Controversy
 */
export const megaProjectsData: ControversyTopic = {
  id: 'controversy-6',
  title: 'Mega Projects',
  description: 'UAE\'s iconic mega-projects including artificial islands, world record structures, and futuristic developments generate controversy around environmental sustainability, authentic development versus spectacle, and economic viability questions. While celebrated as symbols of ambition and engineering achievement, critics highlight ecological costs, post-project utilization challenges, and opportunity cost debates.',
  sentiment: { positive: 50, negative: 30, neutral: 20, overall: 0.25, volume: 95000 },
  sentimentScore: 0.25,
  dominantSentiment: 'positive',
  keyDrivers: ['Engineering achievement recognition', 'Environmental impact concerns', 'Tourism economic rationale', 'Post-pandemic utilization questions', 'Climate commitments contradictions'],
  debateAngles: [
    { angle: 'Economic Rationale', proStance: 'Tourism and investment attraction', conStance: 'Opportunity cost arguments', evidenceStrength: 'Moderate', sentiment: 0.4 },
    { angle: 'Environmental Impact', proStance: 'Jobs and economic development', conStance: 'Ecological damage concerns', evidenceStrength: 'Strong', sentiment: -0.5 },
    { angle: 'Development Philosophy', proStance: 'Ambitious nation-building vision', conStance: 'Excessive vanity projects', evidenceStrength: 'Moderate', sentiment: 0.1 },
  ],
  uaeRelevance: { score: 72, level: 'HIGH', justification: 'Central to UAE\'s economic diversification and tourism strategy' },
  alertLevel: 'YELLOW',
  metrics: { sentimentScore: 0.25, volume: 95000, velocity: 28, reach: 1800000, engagement: 720000, credibility: 82 },
  keyFindings: [
    { finding: 'Palm Jumeirah completion', metric: 'Ongoing development', source: 'Project documentation', tier: 2 },
    { finding: 'Museum of Future', metric: 'Opened 2022', source: 'Official sources', tier: 2 },
    { finding: 'Environmental impact studies', metric: 'Concerns documented', source: 'Environmental NGOs', tier: 2 },
    { finding: 'Post-pandemic utilization', metric: 'Recovery ongoing', source: 'Business reports', tier: 2 },
  ],
  sources: [
    { name: 'Project documentation', tier: 2, date: '2024-12-01' },
    { name: 'Environmental assessments', tier: 2, date: '2024-12-01' },
    { name: 'Business analysis', tier: 2, date: '2024-12-01' },
  ],
  lastUpdated: '2026-04-29',
}

/**
 * Royal Wealth Controversy
 */
export const royalWealthData: ControversyTopic = {
  id: 'controversy-7',
  title: 'Royal Wealth',
  description: 'The wealth and spending patterns of UAE royals generate ongoing controversy particularly during periods of economic austerity or regional hardship. While some view royal expenditures as symbols of national prosperity and strategic investment, others point to documented disparities and the gap between elite lifestyles and ordinary citizen experiences during challenging economic periods.',
  sentiment: { positive: 25, negative: 45, neutral: 30, overall: -0.35, volume: 28000 },
  sentimentScore: -0.35,
  dominantSentiment: 'negative',
  keyDrivers: ['Luxury expenditure documentation', 'Regional economic hardship context', 'Social media comparison amplification', 'Transparency expectations', 'Economic inequality discussions'],
  debateAngles: [
    { angle: 'Wealth Display', proStance: 'National prosperity symbols', conStance: 'Poor taste during hardship', evidenceStrength: 'Weak', sentiment: -0.2 },
    { angle: 'Economic Rationale', proStance: 'Strategic investments and returns', conStance: 'Resources versus essential services', evidenceStrength: 'Moderate', sentiment: -0.3 },
    { angle: 'Social Impact', proStance: 'National pride and unity', conStance: 'Inequality reinforcement', evidenceStrength: 'Weak', sentiment: -0.4 },
  ],
  uaeRelevance: { score: 58, level: 'MEDIUM', justification: 'Moderate relevance to social cohesion and equality discussions' },
  alertLevel: 'YELLOW',
  metrics: { sentimentScore: -0.35, volume: 28000, velocity: 35, reach: 750000, engagement: 295000, credibility: 68 },
  keyFindings: [
    { finding: 'Luxury property purchases documented', metric: 'Documented cases', source: 'Media reports', tier: 3 },
    { finding: 'Regional hardship context', metric: '2020-2024 period', source: 'Economic data', tier: 2 },
    { finding: 'Social media amplification', metric: 'Viral moments', source: 'Social media analysis', tier: 3 },
    { finding: 'National narrative response', metric: 'Official statements', source: 'Government', tier: 2 },
  ],
  sources: [
    { name: 'Media reports', tier: 3, date: '2024-07-15' },
    { name: 'Economic data', tier: 2, date: '2024-07-15' },
    { name: 'Social media analysis', tier: 3, date: '2024-07-15' },
  ],
  lastUpdated: '2026-04-29',
}

/**
 * Surveillance Controversy
 */
export const surveillanceData: ControversyTopic = {
  id: 'controversy-8',
  title: 'Surveillance',
  description: 'UAE\'s surveillance capabilities and documented use of sophisticated monitoring technologies present severe controversy regarding privacy rights, free expression limitations, and human rights implications. Beyond documented cases of surveillance on dissidents and journalists, the ToTok application incident and Israeli spyware connections have amplified international concerns about the scope and objectives of UAE surveillance programs.',
  sentiment: { positive: 10, negative: 80, neutral: 10, overall: -0.90, volume: 68000 },
  sentimentScore: -0.90,
  dominantSentiment: 'negative',
  keyDrivers: ['NSO Group Pegasus connections', 'ToTok surveillance app incident', 'Journalist monitoring documented', 'Dissident tracking cases', 'International spyware trade involvement'],
  debateAngles: [
    { angle: 'Security Justification', proStance: 'National security necessity', conStance: 'Excessive and abusive', evidenceStrength: 'Weak', sentiment: -0.7 },
    { angle: 'Privacy Rights', proStance: 'Modern security tools', conStance: 'Fundamental rights violations', evidenceStrength: 'Strong', sentiment: -0.9 },
    { angle: 'International Law', proStance: 'Legal surveillance programs', conStance: 'Extraterritorial targeting', evidenceStrength: 'Strong', sentiment: -0.85 },
  ],
  uaeRelevance: { score: 96, level: 'CRITICAL', justification: 'Critical human rights and international reputation implications' },
  alertLevel: 'RED',
  metrics: { sentimentScore: -0.90, volume: 68000, velocity: 58, reach: 2800000, engagement: 1180000, credibility: 92 },
  keyFindings: [
    { finding: 'NSO Group Pegasus documented', metric: 'Activists targeted', source: 'Forbidden Stories', tier: 1 },
    { finding: 'ToTok surveillance app', metric: 'UAE government tool', source: 'US intelligence', tier: 1 },
    { finding: 'Journalist monitoring documented', metric: 'Multiple cases', source: 'CPJ, Amnesty', tier: 1 },
    { finding: 'International spyware trade', metric: 'Active involvement', source: 'Multiple investigations', tier: 1 },
  ],
  sources: [
    { name: 'Forbidden Stories', tier: 1, date: '2024-06-15' },
    { name: 'Amnesty International', tier: 1, date: '2024-06-15' },
    { name: 'US intelligence reports', tier: 1, date: '2024-06-15' },
  ],
  lastUpdated: '2026-04-29',
}

/**
 * Golden Visa Controversy
 */
export const goldenVisaData: ControversyTopic = {
  id: 'controversy-9',
  title: 'Golden Visa',
  description: 'The UAE\'s Golden Visa program offering long-term residency to investors, entrepreneurs, and specialized professionals generates controversy around wealth tourism implications, housing market impacts, and authentic integration questions. While celebrated as a tool for attracting global talent and investment, critics point to potential wealth concentration effects and questions about genuine economic contribution versus residency-for-investment arrangements.',
  sentiment: { positive: 55, negative: 25, neutral: 20, overall: 0.40, volume: 42000 },
  sentimentScore: 0.40,
  dominantSentiment: 'positive',
  keyDrivers: ['Real estate market impact', 'Talent attraction competition', 'Regional brain drain implications', 'Integration and contribution expectations', 'Wealth concentration concerns'],
  debateAngles: [
    { angle: 'Economic Impact', proStance: 'Investment attraction and growth', conStance: 'Housing price inflation', evidenceStrength: 'Moderate', sentiment: 0.5 },
    { angle: 'Talent Competition', proStance: 'Global talent attraction', conStance: 'Regional brain drain effects', evidenceStrength: 'Moderate', sentiment: 0.3 },
    { angle: 'Social Integration', proStance: 'Diverse global community', conStance: 'Inauthentic residency', evidenceStrength: 'Weak', sentiment: 0.2 },
  ],
  uaeRelevance: { score: 70, level: 'HIGH', justification: 'Significant economic policy with housing market and labor market implications' },
  alertLevel: 'GREEN',
  metrics: { sentimentScore: 0.40, volume: 42000, velocity: 30, reach: 920000, engagement: 365000, credibility: 78 },
  keyFindings: [
    { finding: '10-year investor visa program', metric: 'Active since 2019', source: 'Official government', tier: 1 },
    { finding: 'Real estate market impact', metric: 'Price increases documented', source: 'Property reports', tier: 2 },
    { finding: 'Talent attraction metrics', metric: 'Thousands approved', source: 'GDRFA reports', tier: 2 },
    { finding: 'Regional competition response', metric: 'Similar programs launched', source: 'Regional analysis', tier: 2 },
  ],
  sources: [
    { name: 'UAE official sources', tier: 1, date: '2024-09-25' },
    { name: 'Property market reports', tier: 2, date: '2024-09-25' },
    { name: 'Regional analysis', tier: 2, date: '2024-09-25' },
  ],
  lastUpdated: '2026-04-29',
}

/**
 * Climate Leadership Hypocrisy Controversy
 */
export const climateLeadershipData: ControversyTopic = {
  id: 'controversy-10',
  title: 'Climate Leadership Hypocrisy',
  description: 'UAE\'s positioning as a climate leader while simultaneously pursuing aggressive oil expansion creates severe credibility contradictions. The COP28 presidency by ADNOC\'s CEO, continued fossil fuel investment, and gap between net-zero commitments and actual production plans generate substantial international criticism and charges of greenwashing.',
  sentiment: { positive: 20, negative: 65, neutral: 15, overall: -0.70, volume: 115000 },
  sentimentScore: -0.70,
  dominantSentiment: 'negative',
  keyDrivers: ['COP28 presidency controversies', 'ADNOC oil expansion plans', 'Net-zero commitments versus actions', 'Greenwashing allegations', 'Fossil fuel production target contradictions'],
  debateAngles: [
    { angle: 'Climate Leadership', proStance: 'Hosting COP28 and investment in renewables', conStance: 'Oil expansion continuation', evidenceStrength: 'Strong', sentiment: -0.6 },
    { angle: 'Greenwashing', proStance: 'Diversification and transition planning', conStance: 'Actual production increases', evidenceStrength: 'Strong', sentiment: -0.8 },
    { angle: 'Transition Reality', proStance: 'Post-oil economy preparation', conStance: 'Continued fossil fuel dependency', evidenceStrength: 'Moderate', sentiment: -0.5 },
  ],
  uaeRelevance: { score: 95, level: 'CRITICAL', justification: 'Critical international reputation and climate commitment credibility' },
  alertLevel: 'RED',
  metrics: { sentimentScore: -0.70, volume: 115000, velocity: 62, reach: 4200000, engagement: 1780000, credibility: 90 },
  keyFindings: [
    { finding: 'COP28 presidency by ADNOC CEO', metric: 'Al Jaber leadership', source: 'UNFCCC', tier: 1 },
    { finding: 'ADNOC expansion plans', metric: '5M bpd target by 2030', source: 'ADNOC official', tier: 1 },
    { finding: 'Renewable investment claims', metric: '$40B+ announced', source: 'Government statements', tier: 2 },
    { finding: 'Greenwashing criticism', metric: 'Multiple NGOs', source: 'Greenpeace, Oil Change', tier: 1 },
  ],
  sources: [
    { name: 'UNFCCC official', tier: 1, date: '2024-12-10' },
    { name: 'ADNOC official', tier: 1, date: '2024-12-10' },
    { name: 'Greenpeace International', tier: 1, date: '2024-12-10' },
  ],
  lastUpdated: '2026-04-29',
}

/**
 * Human Rights Controversy
 */
export const humanRightsControversyData: ControversyTopic = {
  id: 'controversy-11',
  title: 'Human Rights',
  description: 'UAE\'s human rights record presents severe ongoing controversy including political imprisonment, surveillance of dissidents, labor exploitation, and restrictions on free expression. The contradiction between official tolerance messaging and documented human rights violations has generated sustained international criticism and legal challenges.',
  sentiment: { positive: 10, negative: 80, neutral: 10, overall: -0.88, volume: 135000 },
  sentimentScore: -0.88,
  dominantSentiment: 'negative',
  keyDrivers: ['Political prisoners documented', 'Freedom House ratings (18/100)', 'Labor exploitation reports', 'Surveillance of journalists', 'Discrimination against LGBTQ+'],
  debateAngles: [
    { angle: 'Official Narrative', proStance: 'Reforms and modernization', conStance: 'Documented violations continue', evidenceStrength: 'Weak', sentiment: -0.7 },
    { angle: 'Political Prisoners', proStance: 'Security and legal process', conStance: 'Peaceful dissent suppression', evidenceStrength: 'Strong', sentiment: -0.9 },
    { angle: 'Labor Rights', proStance: 'Reformed kafala system', conStance: 'Exploitation continues', evidenceStrength: 'Strong', sentiment: -0.8 },
  ],
  uaeRelevance: { score: 100, level: 'CRITICAL', justification: 'Core credibility and international reputation issue' },
  alertLevel: 'RED',
  metrics: { sentimentScore: -0.88, volume: 135000, velocity: 48, reach: 3800000, engagement: 1620000, credibility: 95 },
  keyFindings: [
    { finding: 'Freedom House score', metric: '18/100 - Not Free', source: 'Freedom House 2026', tier: 1 },
    { finding: 'Political prisoners', metric: 'Ahmed Mansoor, Nasser bin Ghaith', source: 'HRW, Amnesty', tier: 1 },
    { finding: 'Labor exploitation', metric: '132,000 in modern slavery', source: 'Walk Free 2023', tier: 1 },
    { finding: 'Journalist imprisonment', metric: 'Documented cases', source: 'CPJ', tier: 1 },
  ],
  sources: [
    { name: 'Freedom House', tier: 1, date: '2026-01-15' },
    { name: 'Human Rights Watch', tier: 1, date: '2026-01-15' },
    { name: 'Amnesty International', tier: 1, date: '2026-01-15' },
  ],
  lastUpdated: '2026-04-29',
}

/**
 * All Controversy Topics Array
 */
export const controversyTopicsData: ControversyTopic[] = [
  alcoholRegulationsData,
  dressCodeData,
  emiratizationData,
  israelNormalizationData,
  militaryInterventionData,
  megaProjectsData,
  royalWealthData,
  surveillanceData,
  goldenVisaData,
  climateLeadershipData,
  humanRightsControversyData,
]

/**
 * Controversy Sentiment Summary
 */
export const controversySentimentSummary = {
  totalTopics: 11,
  averageSentiment: -0.36,
  mostNegative: { topic: 'Surveillance', score: -0.90 },
  mostPositive: { topic: 'Golden Visa', score: 0.40 },
  criticalCount: 4,
  highCount: 4,
  mediumCount: 2,
  lowCount: 1,
  redAlerts: 3,
  orangeAlerts: 1,
  yellowAlerts: 4,
  greenAlerts: 2,
}

/**
 * Controversy KPI Data
 */
export const controversyHumanRightsKPIs = [
  { kpi: 'Freedom Score', currentValue: '18/100', threshold: '<40 = Not Free', status: 'CRITICAL', lastUpdated: '2026' },
  { kpi: 'Internet Freedom', currentValue: '28/100', threshold: '<40 = Not Free', status: 'CRITICAL', lastUpdated: '2025' },
  { kpi: 'Political Prisoners', currentValue: '26+', threshold: 'Any = Critical', status: 'CRITICAL', lastUpdated: '2025' },
  { kpi: 'Modern Slavery Victims', currentValue: '132,000', threshold: 'Walk Free 2023', status: 'CRITICAL', lastUpdated: '2023' },
]

export const controversyMilitaryKPIs = [
  { kpi: 'Yemen Civilian Deaths', currentValue: 'Tens of thousands', threshold: 'UN documented', status: 'CRITICAL', lastUpdated: '2025' },
  { kpi: 'Libyan Operations', currentValue: 'Since 2014', threshold: 'UN documented', status: 'CRITICAL', lastUpdated: '2025' },
  { kpi: 'Military Spending', currentValue: '$14.5B (2024)', threshold: 'Regional comparison', status: 'HIGH', lastUpdated: '2024' },
]

export const controversyFinancialKPIs = [
  { kpi: 'CPI Score', currentValue: '68/100', threshold: 'Global Rank 23/180', status: 'HIGH', lastUpdated: '2024' },
  { kpi: 'Golden Visa Approved', currentValue: 'Thousands', threshold: 'GDRFA data', status: 'GREEN', lastUpdated: '2024' },
  { kpi: 'ADNOC Investment', currentValue: '$150B (2026-2030)', threshold: 'Official announcement', status: 'TRACKING', lastUpdated: '2026' },
]

export const controversyClimateKPIs = [
  { kpi: 'NDC Target', currentValue: '47% by 2035', threshold: 'Rated "Almost sufficient"', status: 'AT RISK', lastUpdated: '2025' },
  { kpi: 'Net-Zero Target', currentValue: '2050 (UAE) / 2045 (ADNOC)', threshold: 'Implementation concerns', status: 'AT RISK', lastUpdated: '2025' },
  { kpi: 'Oil Production Target', currentValue: '5M bpd (2030)', threshold: 'Contradicts climate goals', status: 'CRITICAL', lastUpdated: '2026' },
]

/**
 * Hook for Controversy Data Access
 */
export function useControversyData() {
  return {
    overview: controversySentimentSummary,
    sourceCredibilityMatrix: controversySourceCredibilityMatrix,
    topics: controversyTopicsData,
    humanRightsKPIs: controversyHumanRightsKPIs,
    militaryKPIs: controversyMilitaryKPIs,
    financialKPIs: controversyFinancialKPIs,
    climateKPIs: controversyClimateKPIs,
  }
}

// ============================================================================
// NEUTRAL SENTIMENT DATA (MD 9-3)
// ============================================================================

export interface NeutralSentimentOverview {
  researchCompilationDate: string
  totalCategories: number
  totalDataPoints: number
  query: string
  temporalCoverage: string
}

export const neutralSentimentOverview: NeutralSentimentOverview = {
  researchCompilationDate: '2026-04-27',
  totalCategories: 12,
  totalDataPoints: 247,
  query: '"UAE" AND ("fact" OR "حقيقة" OR "data" OR "بيانات" OR "report" OR "تقرير" OR "official" OR "رسمي")',
  temporalCoverage: '2020-2026',
}

// ============================================================================
// POPULATION DATA (47 data points, 95% coverage)
// ============================================================================

export interface PopulationDemographicKPI {
  indicator: string
  value: string | number
  year: number
  unit?: string
}

export const populationDemographicKPIs: PopulationDemographicKPI[] = [
  { indicator: 'Total Population', value: '9,282,410', year: 2024 },
  { indicator: 'Annual Population Growth', value: '4.6%', year: 2024 },
  { indicator: 'Citizens', value: '1,012,512', year: 2024 },
  { indicator: 'Non-Citizens', value: '8,269,898', year: 2024 },
  { indicator: 'Non-Citizen Percentage', value: '89.1%', year: 2024 },
  { indicator: 'Male Residents', value: '6,623,981', year: 2024 },
  { indicator: 'Female Residents', value: '2,658,429', year: 2024 },
  { indicator: 'Sex Ratio (males per 1000 females)', value: '2,492', year: 2024 },
  { indicator: 'Urban Population', value: '98.4%', year: 2024 },
  { indicator: 'Rural Population', value: '1.6%', year: 2024 },
  { indicator: 'Population Density', value: '142 per km²', year: 2024 },
  { indicator: 'Abu Dhabi Population', value: '3.0 million', year: 2024 },
  { indicator: 'Dubai Population', value: '3.6 million', year: 2024 },
  { indicator: 'Sharjah Population', value: '1.8 million', year: 2024 },
  { indicator: 'Ajman Population', value: '541,000', year: 2024 },
  { indicator: 'Ras Al Khaimah Population', value: '459,000', year: 2024 },
  { indicator: 'Fujairah Population', value: '233,000', year: 2024 },
  { indicator: 'Umm Al Quwain Population', value: '165,000', year: 2024 },
  { indicator: 'Expatriate Workforce', value: '8.2 million', year: 2024 },
  { indicator: 'Working Age Population (15-64)', value: '85%', year: 2024 },
  { indicator: 'Median Age', value: '32.3 years', year: 2024 },
  { indicator: 'Birth Rate', value: '10.2 per 1,000', year: 2024 },
  { indicator: 'Death Rate', value: '2.1 per 1,000', year: 2024 },
  { indicator: 'Infant Mortality Rate', value: '5.4 per 1,000', year: 2024 },
  { indicator: 'Fertility Rate', value: '1.85 children/woman', year: 2024 },
  { indicator: 'Age Dependency Ratio', value: '17.6%', year: 2024 },
  { indicator: 'Labor Force Participation', value: '78.3%', year: 2024 },
  { indicator: 'Unemployment Rate', value: '2.9%', year: 2024 },
  { indicator: 'Youth Unemployment (15-24)', value: '8.7%', year: 2024 },
  { indicator: 'Female Labor Force', value: '17.2%', year: 2024 },
  { indicator: 'National Workforce (government)', value: '42%', year: 2024 },
  { indicator: 'Private Sector Nationals', value: '5%', year: 2024 },
  { indicator: 'Expat Retention Rate', value: '72%', year: 2024 },
  { indicator: 'Remittance Outflow', value: '$34.2 billion', year: 2024 },
  { indicator: 'Average Household Size', value: '4.8 persons', year: 2024 },
  { indicator: 'Single Households', value: '28%', year: 2024 },
  { indicator: 'Married Population', value: '62%', year: 2024 },
  { indicator: 'Divorce Rate', value: '12.5%', year: 2024 },
  { indicator: 'Literacy Rate (15+)', value: '97.8%', year: 2024 },
  { indicator: 'Primary School Enrollment', value: '99.4%', year: 2024 },
  { indicator: 'Secondary School Enrollment', value: '94.7%', year: 2024 },
  { indicator: 'Higher Education Enrollment', value: '68.3%', year: 2024 },
  { indicator: 'Tertiary Graduates', value: '52,000/year', year: 2024 },
  { indicator: 'GDP per Capita', value: '$48,500', year: 2024 },
  { indicator: 'Human Development Index', value: '0.911', year: 2024 },
  { indicator: 'Social Development Index', value: '0.87', year: 2024 },
  { indicator: 'Happiness Index Score', value: '6.7/10', year: 2024 },
  { indicator: 'Life Expectancy', value: '79.8 years', year: 2024 },
]

// ============================================================================
// ECONOMICS DATA (35 data points, 90% coverage)
// ============================================================================

export interface EconomicKPI {
  indicator: string
  value: string | number
  year: number
}

export const economicKPIs: EconomicKPI[] = [
  { indicator: 'GDP (Nominal)', value: '$449.9 billion', year: 2024 },
  { indicator: 'GDP Growth Rate', value: '3.4%', year: 2024 },
  { indicator: 'GDP (PPP)', value: '$695.7 billion', year: 2024 },
  { indicator: 'Non-Oil GDP', value: '42% of total', year: 2024 },
  { indicator: 'Oil Revenue', value: '$89.6 billion', year: 2024 },
  { indicator: 'Federal Budget', value: '$68.2 billion', year: 2024 },
  { indicator: 'Budget Deficit/Surplus', value: 'Surplus $12.4B', year: 2024 },
  { indicator: 'Federal Debt', value: '$94.2 billion', year: 2024 },
  { indicator: 'Debt to GDP', value: '21%', year: 2024 },
  { indicator: 'Foreign Reserves', value: '$164.8 billion', year: 2024 },
  { indicator: 'Current Account Balance', value: '+9.2% of GDP', year: 2024 },
  { indicator: 'FDI Inflow', value: '$23.1 billion', year: 2024 },
  { indicator: 'FDI Outflow', value: '$16.7 billion', year: 2024 },
  { indicator: 'Total Trade', value: '$920 billion', year: 2024 },
  { indicator: 'Exports', value: '$504 billion', year: 2024 },
  { indicator: 'Imports', value: '$416 billion', year: 2024 },
  { indicator: 'Oil Exports', value: '$281 billion', year: 2024 },
  { indicator: 'Non-Oil Exports', value: '$223 billion', year: 2024 },
  { indicator: 'Re-Exports', value: '$142 billion', year: 2024 },
  { indicator: 'Trade Surplus', value: '$88 billion', year: 2024 },
  { indicator: 'E-Commerce Market', value: '$9.8 billion', year: 2024 },
  { indicator: 'E-Commerce Growth', value: '28%', year: 2024 },
  { indicator: 'Inflation Rate', value: '2.3%', year: 2024 },
  { indicator: 'Core Inflation', value: '2.1%', year: 2024 },
  { indicator: 'Interest Rate', value: '5.25%', year: 2024 },
  { indicator: 'Exchange Rate (USD)', value: 'Fixed 3.67 AED', year: 2024 },
  { indicator: 'Gold Reserves', value: '78.3 tonnes', year: 2024 },
  { indicator: 'Sovereign Wealth Fund', value: '$1.5 trillion', year: 2024 },
  { indicator: 'Abu Dhabi Investment Authority', value: '$993 billion', year: 2024 },
  { indicator: 'Investment Authority (Mubadala)', value: '$302 billion', year: 2024 },
  { indicator: 'GDP by Sector: Finance', value: '11.2%', year: 2024 },
  { indicator: 'GDP by Sector: Real Estate', value: '8.7%', year: 2024 },
  { indicator: 'GDP by Sector: Manufacturing', value: '9.4%', year: 2024 },
  { indicator: 'GDP by Sector: Trade/Hospitality', value: '12.1%', year: 2024 },
  { indicator: 'GDP by Sector: Construction', value: '8.2%', year: 2024 },
  { indicator: 'GDP by Sector: Transport', value: '4.8%', year: 2024 },
]

// ============================================================================
// GOVERNMENT FINANCE DATA (8 data points, 70% coverage)
// ============================================================================

export interface GovernmentFinanceKPI {
  indicator: string
  value: string | number
  year: number
}

export const governmentFinanceKPIs: GovernmentFinanceKPI[] = [
  { indicator: 'Federal Revenue', value: '$72.4 billion', year: 2024 },
  { indicator: 'Federal Expenditure', value: '$60.0 billion', year: 2024 },
  { indicator: 'Fiscal Surplus', value: '$12.4 billion', year: 2024 },
  { indicator: 'Revenue: Oil', value: '58%', year: 2024 },
  { indicator: 'Revenue: Non-Oil', value: '42%', year: 2024 },
  { indicator: 'Expenditure: Social', value: '38%', year: 2024 },
  { indicator: 'Expenditure: Infrastructure', value: '24%', year: 2024 },
  { indicator: 'Expenditure: Defense', value: '18%', year: 2024 },
]

// ============================================================================
// INTERNATIONAL RELATIONS DATA (28 data points, 85% coverage)
// ============================================================================

export interface InternationalRelationKPI {
  indicator: string
  value: string | number
  year: number
}

export const internationalRelationKPIs: InternationalRelationKPI[] = [
  { indicator: 'Embassies Abroad', value: '93', year: 2024 },
  { indicator: 'Consulates General', value: '67', year: 2024 },
  { indicator: 'International Organizations', value: '42', year: 2024 },
  { indicator: 'Bilateral Investment Treaties', value: '112', year: 2024 },
  { indicator: 'Double Taxation Treaties', value: '138', year: 2024 },
  { indicator: 'Free Trade Agreements', value: '27', year: 2024 },
  { indicator: 'Gulf Cooperation Council', value: 'Member', year: 2024 },
  { indicator: 'Arab League', value: 'Member', year: 2024 },
  { indicator: 'OPEC+ Membership', value: 'Active', year: 2024 },
  { indicator: 'WTO Membership', value: 'Since 1996', year: 2024 },
  { indicator: 'UN Security Council (2022-23)', value: 'Elected', year: 2024 },
  { indicator: 'COP28 Host', value: '2023', year: 2024 },
  { indicator: 'World Expo 2020', value: '24.6 million visitors', year: 2024 },
  { indicator: 'IMF Quota', value: 'SDR 5.2 billion', year: 2024 },
  { indicator: 'World Bank Voting Power', value: '1.7%', year: 2024 },
  { indicator: 'Diplomatic Missions Received', value: '89', year: 2024 },
  { indicator: 'Foreign Workers by Origin: India', value: '2.6 million', year: 2024 },
  { indicator: 'Foreign Workers: Pakistan', value: '1.2 million', year: 2024 },
  { indicator: 'Foreign Workers: Bangladesh', value: '710,000', year: 2024 },
  { indicator: 'Foreign Workers: Philippines', value: '530,000', year: 2024 },
  { indicator: 'Foreign Workers: Egypt', value: '290,000', year: 2024 },
  { indicator: 'Foreign Workers: Other Arab', value: '420,000', year: 2024 },
  { indicator: 'Tourist Arrivals', value: '24.0 million', year: 2024 },
  { indicator: 'Hotel Rooms', value: '158,000', year: 2024 },
  { indicator: 'Average Occupancy Rate', value: '76%', year: 2024 },
  { indicator: 'International Exhibition Visitors', value: '3.2 million', year: 2024 },
  { indicator: 'Cultural Events Hosted', value: '847', year: 2024 },
  { indicator: 'Sports Events', value: '156', year: 2024 },
]

// ============================================================================
// CLIMATE POLICY DATA (25 data points, 80% coverage)
// ============================================================================

export interface ClimatePolicyKPI {
  indicator: string
  value: string | number
  year: number
}

export const climatePolicyKPIs: ClimatePolicyKPI[] = [
  { indicator: 'Net Zero Target', value: '2050', year: 2024 },
  { indicator: 'Renewable Energy Target', value: '50% by 2050', year: 2024 },
  { indicator: 'Current Renewables Share', value: '12.4%', year: 2024 },
  { indicator: 'Solar Capacity', value: '4.2 GW', year: 2024 },
  { indicator: 'Nuclear Capacity', value: '5.3 GW', year: 2024 },
  { indicator: 'Wind Capacity', value: '0.6 GW', year: 2024 },
  { indicator: 'Green Hydrogen Strategy', value: 'Published 2021', year: 2024 },
  { indicator: 'Hydrogen Production Target', value: '15 million tonnes by 2030', year: 2024 },
  { indicator: 'Carbon Capture Target', value: '10 million tonnes by 2030', year: 2024 },
  { indicator: 'CO2 Emissions per Capita', value: '20.4 tonnes', year: 2024 },
  { indicator: 'Total CO2 Emissions', value: '194 million tonnes', year: 2024 },
  { indicator: 'Energy Intensity Reduction', value: '28% since 2010', year: 2024 },
  { indicator: 'Methane Reduction Pledge', value: '30% by 2030', year: 2024 },
  { indicator: 'Forest Cover', value: '4.2%', year: 2024 },
  { indicator: 'Desertification Area', value: '89% of territory', year: 2024 },
  { indicator: 'Water Scarcity Index', value: '0.87 (critical)', year: 2024 },
  { indicator: 'Desalination Capacity', value: '14.5 million m3/day', year: 2024 },
  { indicator: 'Recycled Water', value: '8%', year: 2024 },
  { indicator: 'Green Building Standards', value: 'Estidama Pearl Rating', year: 2024 },
  { indicator: 'LEED Certified Buildings', value: '1,847', year: 2024 },
  { indicator: 'Electric Vehicle Target', value: '50% by 2050', year: 2024 },
  { indicator: 'Public Transport Ridership', value: '892 million/year', year: 2024 },
  { indicator: 'Metro Network Length', value: '315 km', year: 2024 },
  { indicator: 'Bus Network', value: '215 routes', year: 2024 },
  { indicator: 'Cycling Paths', value: '890 km', year: 2024 },
]

// ============================================================================
// EDUCATION DATA (12 data points, 75% coverage)
// ============================================================================

export interface EducationStatisticKPI {
  indicator: string
  value: string | number
  year: number
}

export const educationStatisticsKPIs: EducationStatisticKPI[] = [
  { indicator: 'Literacy Rate', value: '97.8%', year: 2024 },
  { indicator: 'Public Schools', value: '891', year: 2024 },
  { indicator: 'Private Schools', value: '584', year: 2024 },
  { indicator: 'Total Students (K-12)', value: '1.4 million', year: 2024 },
  { indicator: 'Higher Education Institutions', value: '81', year: 2024 },
  { indicator: 'University Students', value: '520,000', year: 2024 },
  { indicator: 'International Branch Campuses', value: '32', year: 2024 },
  { indicator: 'Research Publications', value: '42,000/year', year: 2024 },
  { indicator: 'R&D Expenditure', value: '1.3% of GDP', year: 2024 },
  { indicator: 'PISA Ranking', value: '41st of 81', year: 2024 },
  { indicator: 'TIMSS Ranking', value: '25th of 64', year: 2024 },
  { indicator: 'Education Expenditure', value: '3.2% of GDP', year: 2024 },
]

// ============================================================================
// RANKINGS DATA (18 data points, 85% coverage)
// ============================================================================

export interface RankingKPI {
  indicator: string
  value: string | number
  ranking: string
  year: number
}

export const rankingKPIs: RankingKPI[] = [
  { indicator: 'Global Competitiveness', value: '16th', ranking: 'of 141', year: 2024 },
  { indicator: 'Ease of Doing Business', value: '12th', ranking: 'of 190', year: 2024 },
  { indicator: 'Logistics Performance', value: '11th', ranking: 'of 160', year: 2024 },
  { indicator: 'Infrastructure Quality', value: '8th', ranking: 'of 137', year: 2024 },
  { indicator: 'Economic Freedom', value: '24th', ranking: 'of 176', year: 2024 },
  { indicator: 'Corruption Perceptions', value: '23rd', ranking: 'of 180', year: 2024 },
  { indicator: 'Innovation Index', value: '32nd', ranking: 'of 132', year: 2024 },
  { indicator: 'Global Talent Index', value: '18th', ranking: 'of 63', year: 2024 },
  { indicator: 'Quality of Life', value: '14th', ranking: 'of 150', year: 2024 },
  { indicator: 'Safety Index', value: '5th', ranking: 'of 126', year: 2024 },
  { indicator: 'Happiness Report', value: '24th', ranking: 'of 156', year: 2024 },
  { indicator: 'Human Development', value: '14th', ranking: 'of 193', year: 2024 },
  { indicator: 'Social Progress', value: '21st', ranking: 'of 163', year: 2024 },
  { indicator: 'Entrepreneurship Index', value: '19th', ranking: 'of 54', year: 2024 },
  { indicator: 'Digital Competitiveness', value: '12th', ranking: 'of 63', year: 2024 },
  { indicator: 'Travel/Tourism Competitiveness', value: '8th', ranking: 'of 117', year: 2024 },
  { indicator: 'Clean Energy Transition', value: '42nd', ranking: 'of 63', year: 2024 },
  { indicator: 'Global Green Economy', value: '15th', ranking: 'of 84', year: 2024 },
]

// ============================================================================
// FUTURE ROADMAP DATA (15 data points, 70% coverage)
// ============================================================================

export interface FutureRoadmapKPI {
  indicator: string
  target: string
  targetYear: number
  currentValue?: string
}

export const futureRoadmapKPIs: FutureRoadmapKPI[] = [
  { indicator: 'Non-Oil GDP', target: '60%', targetYear: 2030 },
  { indicator: 'National Workforce (private)', target: '10%', targetYear: 2030 },
  { indicator: 'Renewable Energy', target: '50%', targetYear: 2050 },
  { indicator: 'Net Zero Emissions', target: '100%', targetYear: 2050 },
  { indicator: 'GDP per Capita', target: '$60,000', targetYear: 2030 },
  { indicator: 'Innovation GDP Contribution', target: '5%', targetYear: 2030 },
  { indicator: 'R&D Expenditure', target: '2.5% of GDP', targetYear: 2030 },
  { indicator: 'Higher Education Enrollment', target: '80%', targetYear: 2030 },
  { indicator: 'Digital Government Services', target: '100%', targetYear: 2027 },
  { indicator: 'Smart City Infrastructure', target: '100% coverage', targetYear: 2027 },
  { indicator: 'Electric Vehicle Adoption', target: '50%', targetYear: 2050 },
  { indicator: 'Green Buildings', target: '95%', targetYear: 2030 },
  { indicator: 'Water Efficiency', target: '90%', targetYear: 2030 },
  { indicator: 'Healthcare Coverage', target: '100%', targetYear: 2027 },
  { indicator: 'AI Government Integration', target: '50%', targetYear: 2028 },
]

// ============================================================================
// SOURCES DATA
// ============================================================================

export interface NeutralSourceReference {
  source: string
  type: string
  tier: number
  lastAccessed: string
}

export const neutralSourcesConsulted: NeutralSourceReference[] = [
  { source: 'Federal Competitiveness Centre', type: 'Government', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'UAE Bureau of Statistics', type: 'Government', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'Central Bank of UAE', type: 'Government', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'Ministry of Economy', type: 'Government', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'Ministry of Finance', type: 'Government', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'World Bank Database', type: 'International', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'IMF Data Mapper', type: 'International', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'UN Data Portal', type: 'International', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'WTO Statistics', type: 'International', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'Heritage Foundation Index', type: 'Think Tank', tier: 2, lastAccessed: '2026-04-27' },
  { source: 'WEF Global Competitiveness', type: 'Think Tank', tier: 2, lastAccessed: '2026-04-27' },
  { source: 'INSEAD Innovation Index', type: 'Academic', tier: 2, lastAccessed: '2026-04-27' },
  { source: 'Transparency International', type: 'NGO', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'UNDP Human Development', type: 'International', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'World Happiness Report', type: 'Report', tier: 2, lastAccessed: '2026-04-27' },
  { source: 'IMF Article IV Consultation', type: 'Government', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'UAE Cabinet Decisions', type: 'Government', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'Federal Custom Authority', type: 'Government', tier: 1, lastAccessed: '2026-04-27' },
  { source: 'National Media Office', type: 'Government', tier: 1, lastAccessed: '2026-04-27' },
]

// ============================================================================
// NEUTRAL SENTIMENT METRICS
// ============================================================================

export const neutralSentimentMetrics = [
  { metric: 'Data Reliability Score', value: '92%', trend: 'stable' },
  { metric: 'Source Credibility Average', value: 'Tier 1-2', trend: 'stable' },
  { metric: 'Coverage Completeness', value: '85%', trend: 'up' },
  { metric: 'Temporal Relevance', value: '94%', trend: 'stable' },
  { metric: 'Cross-Reference Match Rate', value: '87%', trend: 'up' },
]

// ============================================================================
// NEUTRAL SENTIMENT DISTRIBUTION
// ============================================================================

export const neutralSentimentDistributionData = [
  { category: 'Population', percentage: 19, dataPoints: 47, coverage: '95%' },
  { category: 'Economics', percentage: 14, dataPoints: 35, coverage: '90%' },
  { category: 'International Relations', percentage: 11, dataPoints: 28, coverage: '85%' },
  { category: 'Climate Policy', percentage: 10, dataPoints: 25, coverage: '80%' },
  { category: 'Rankings', percentage: 7, dataPoints: 18, coverage: '85%' },
  { category: 'Future Roadmap', percentage: 6, dataPoints: 15, coverage: '70%' },
  { category: 'Education', percentage: 5, dataPoints: 12, coverage: '75%' },
  { category: 'Government Finance', percentage: 3, dataPoints: 8, coverage: '70%' },
]

// ============================================================================
// CATEGORY COVERAGE SUMMARY
// ============================================================================

export const categoryCoverageSummary = [
  { category: 'Population', dataPoints: 47, coverage: '95%', status: 'complete' },
  { category: 'Economics', dataPoints: 35, coverage: '90%', status: 'complete' },
  { category: 'International Relations', dataPoints: 28, coverage: '85%', status: 'complete' },
  { category: 'Climate Policy', dataPoints: 25, coverage: '80%', status: 'complete' },
  { category: 'Rankings', dataPoints: 18, coverage: '85%', status: 'complete' },
  { category: 'Future Roadmap', dataPoints: 15, coverage: '70%', status: 'partial' },
  { category: 'Education', dataPoints: 12, coverage: '75%', status: 'complete' },
  { category: 'Government Finance', dataPoints: 8, coverage: '70%', status: 'partial' },
]

// ============================================================================
// HOOK FOR NEUTRAL SENTIMENT DATA
// ============================================================================

export function useNeutralSentimentData() {
  return {
    overview: neutralSentimentOverview,
    populationKPIs,
    economicKPIs,
    governmentFinanceKPIs,
    internationalRelationKPIs,
    climatePolicyKPIs,
    educationKPIs,
    rankingKPIs,
    futureRoadmapKPIs,
    sourcesConsulted: neutralSourcesConsulted,
    metrics: neutralSentimentMetrics,
    sentimentDistribution: neutralSentimentDistributionData,
    categoryCoverage: categoryCoverageSummary,
  }
}

// ============================================================================
// PRAISE & ENDORSEMENT DATA (MD 9-7)
// ============================================================================

export interface PraiseOverview {
  researchCompilationDate: string
  totalCategories: number
  totalSourcesConsulted: number
  temporalCoverage: string
  query: string
}

export const praiseOverview: PraiseOverview = {
  researchCompilationDate: '2026-04-27',
  totalCategories: 11,
  totalSourcesConsulted: 45,
  temporalCoverage: '2024-2026',
  query: 'UAE "highly recommend" OR "best country" OR "safest" OR "praise" OR "thank you"',
}

// KPI Summary Data (17 critical metrics)
export const kpiSummaryData = [
  { kpi: 'Residents safe walking at night (UAE)', value: '99%', change: '+4pp', source: 'National Survey Feb 2026', tier: 1 },
  { kpi: 'Walk-at-night safety score (Gallup)', value: '95%', change: 'Stable', source: 'Gallup Global Law and Order 2021', tier: 1 },
  { kpi: 'Abu Dhabi safety score', value: '88.8/100', change: '+2.3', source: 'Numbeo 2025', tier: 2 },
  { kpi: 'UAE country safety score', value: '85.2/100', change: '+2.2', source: 'Numbeo 2025', tier: 2 },
  { kpi: 'Abu Dhabi city ranking', value: '#1', change: '10th consecutive year', source: 'SCAD/Government', tier: 1 },
  { kpi: 'Dubai cleanliness satisfaction', value: '100%', change: 'Stable', source: 'Global Power City Index 2026', tier: 1 },
  { kpi: 'Dubai cleanest city streak', value: '6 years', change: '+1', source: 'GPCI 2026', tier: 1 },
  { kpi: 'Road quality rank', value: '4th globally', change: '+3', source: 'WEF TTDI 2024', tier: 1 },
  { kpi: 'Land transport score', value: '5.26/7', change: 'Stable', source: 'WEF TTDI 2024', tier: 1 },
  { kpi: 'Dubai Metro length', value: '101 km', change: '+26.4km', source: 'Gulf News 2025', tier: 2 },
  { kpi: 'JCI-accredited facilities', value: '235+', change: '+25', source: 'LinkedIn/Mahmood Abdulla', tier: 2 },
  { kpi: 'Healthcare trust rating', value: '~90%', change: '+5', source: 'Edelman Trust 2026', tier: 2 },
  { kpi: 'Global Residence Program Index', value: 'Joint 2nd (72 pts)', change: '+3', source: 'Henley & Partners 2026', tier: 1 },
  { kpi: 'Cabinet resolutions', value: '~16,000', change: 'Stable', source: 'AARD Government', tier: 1 },
  { kpi: 'Dubai Smart City Index', value: '6th globally', change: '+2', source: 'IMD 2026', tier: 1 },
  { kpi: 'World\'s Best Countries', value: '#17', change: '+5', source: 'U.S. News 2026', tier: 2 },
  { kpi: 'Dubai Global Power City Index', value: '8th globally', change: '+1', source: 'GPCI 2026', tier: 1 },
]

// Safety Data
export const safetyData = {
  overview: {
    uaeResidentsFeelingSafe: '99%',
    gallupWalkAtNightScore: '95%',
    gallupGlobalRanking: '10th',
    abuDhabiScore: '88.8/100',
    uaeCountryScore: '85.2/100',
    abuDhabiStreak: '10th consecutive year',
  },
  top10SafestCities: [
    { rank: 1, city: 'Abu Dhabi', country: 'UAE', score: 88.8 },
    { rank: 2, city: 'Ajman', country: 'UAE', score: 86.9 },
    { rank: 3, city: 'Sharjah', country: 'UAE', score: 86.2 },
    { rank: 4, city: 'Doha', country: 'Qatar', score: 85.5 },
    { rank: 5, city: 'Dubai', country: 'UAE', score: 84.8 },
    { rank: 6, city: 'Ras Al Khaimah', country: 'UAE', score: 84.3 },
    { rank: 7, city: 'Taipei', country: 'Taiwan', score: 83.9 },
    { rank: 8, city: 'Muscat', country: 'Oman', score: 83.2 },
    { rank: 9, city: 'The Hague', country: 'Netherlands', score: 82.7 },
    { rank: 10, city: 'Tampere', country: 'Finland', score: 82.3 },
  ],
  uaeCitiesInTop10: 5,
  gallupDetails: {
    overallScore: 93,
    walkingAloneAtNight: '95%',
    surveySize: '120,000+ adults',
    surveyCountries: 115,
  },
  womenSafety: {
    feelingSafe: '98.5%',
    source: 'Women, Peace and Security Index (Georgetown)',
  },
}

// Cleanliness Data
export const cleanlinessData = {
  dubaiCleanliness: {
    satisfactionRate: '100%',
    streakYears: 6,
    source: 'Global Power City Index 2026',
  },
  municipalInfrastructure: {
    fleetVehicles: 785,
    wasteStorageUnits: '23,300+',
    sanitationEngineers: 2876,
    supervisoryPersonnel: 280,
    mainRoadsCoverage: '2,400 km',
    investmentZonesCoverage: '1,419 km',
    waterCanalsCoverage: '33.4 km',
  },
  wasteManagement: {
    strategyTarget: '100% waste diversion from landfills by 2041',
    warsanFacility: 'World\'s largest waste-to-energy facility',
    initiatives: ['Circle Dubai', 'One Hour with a Sanitation Engineer', 'Clean City Index digital monitoring'],
  },
  officialQuote: {
    text: 'Cleanliness in Dubai is not only an operational outcome but an established urban culture that reflects the awareness, responsibility, and values of society.',
    author: 'H.E. Marwan Ahmed bin Ghalita, Director General of Dubai Municipality',
  },
}

// Infrastructure Data
export const infrastructureData = {
  roadQuality: {
    globalRank: 4,
    arabWorldRank: 1,
    score: 'N/A',
    previousRank: 7,
    change: '+3',
    source: 'WEF TTDI 2024',
  },
  landTransport: {
    score: '5.26/7',
    arabWorldRank: 1,
    source: 'WEF TTDI 2024',
  },
  dubaiMetro: {
    totalLength: '101 km',
    previousLength: '74.6 km',
    lines: ['Red', 'Green'],
    launchDate: 'September 9, 2009',
    totalRidership: 'Over 1 billion',
    technology: 'Alstom Apollo, CBTC GoA4',
    platformSafety: 'Platform screen doors',
    blueLineUnderConstruction: '30 km (due 2029)',
  },
  globalRanking: {
    roadQuality: { rank: 4, context: 'Top 5: Singapore, Hong Kong, Japan, UAE, South Korea' },
    driverlessMetro: { rank: 2, context: 'After Riyadh Metro (176 km)' },
  },
}

// Healthcare Excellence Data
export const healthcareExcellenceData = {
  jciAccredited: {
    facilities: '235+',
    previous: '210+',
    change: '+25',
    globalRanking: '#1',
    source: 'LinkedIn/Mahmood Abdulla',
  },
  publicTrust: {
    rating: '~90%',
    previous: '~85%',
    change: '+5',
    source: 'Edelman Trust 2026',
  },
  trustBreakdown: {
    localHealthAuthorities: '~90%',
    hospitals: '~90%',
    healthcareProviders: '~85%',
    governmentRegulators: '~85%',
    localPharmacies: '85%',
    healthTechCompanies: '86%',
    pharmaceuticalFirms: '84%',
    consumerHealthServices: '85%',
    privateHealthInsurance: '~82%',
    nutritionSector: '77%',
  },
  clevelandClinicAbuDhabi: {
    newsweekGlobalRank: '#23',
    newsweekRegionalRank: '#1 UAE/GCC',
    brandFinanceRank: '#23',
    source: 'Brand Finance 2026',
  },
  investment: {
    budget2025: 'AED 5.745B',
    budgetPercentage: '8% of federal budget',
    medicalTourismRevenue2024: 'AED 12.1B',
    medicalTourismPatients: 'From 150+ countries',
  },
  outcomes: {
    healthcareWorkforce: '350,000+',
    lifeExpectancy: '79.5 years',
    lifeExpectancy2000: '74.8 years',
    maternalMortality: '3 per 100,000',
    immunizationCoverage: '>97%',
    covidVaccineCoverage: '89.1%',
    ehrAdoption: '92%+',
  },
}

// Visionary Leadership Data
export const visionaryLeadershipData = {
  sheikhMohammedLegacy: {
    tenureYears: 20,
    ministersLed: 72,
    cabinetFormations: 9,
    reshuffles: 13,
    cabinetMeetings: 558,
    resolutionsIssued: '~16,000',
    ministerialRetreats: 7,
    extraordinaryMeetings: 16,
    legalFrameworkModernized: '>90%',
  },
  visionDocuments: [
    { name: 'UAE Vision 2021', launchYear: 2010, targetYear: 2021 },
    { name: 'UAE Centennial 2071', launchYear: 2017, targetYear: 2071 },
    { name: 'We the UAE 2031', launchYear: 2022, targetYear: 2031 },
  ],
  governancePrinciples: [
    { principle: 'Efficiency', description: 'Performance-driven systems' },
    { principle: 'Innovation', description: 'Smart government services' },
    { principle: 'Accountability', description: 'Transparent governance' },
    { principle: 'Future-focus', description: 'Long-term planning' },
  ],
  keyAchievements: [
    { category: 'Trade', achievement: 'Dubai as global hub', impact: 'Top 3 globally' },
    { category: 'Tourism', achievement: 'World-class destination', impact: 'Top 10 visited' },
    { category: 'Aviation', achievement: 'Emirates growth', impact: 'Largest airline' },
    { category: 'Finance', achievement: 'DIFC expansion', impact: 'Top 10 financial centre' },
    { category: 'Diplomacy', achievement: 'Global voice', impact: 'UN seat, COP28' },
    { category: 'Humanitarian', achievement: 'International aid', impact: 'Top 10 donor' },
  ],
  quotes: [
    { text: 'Human development is the foundation of national progress.', author: 'Sheikh Mohammed bin Rashid Al Maktoum' },
    { text: 'The whole world will come to see the UAE as the world\'s top destination to live, work, invest and visit. Our best years are yet to come.', author: 'Sheikh Mohammed bin Rashid Al Maktoum' },
  ],
}

// Best Rankings Data
export const bestRankingsData = {
  globalResidenceProgramIndex: {
    uaeRank: 'Joint 2nd',
    uaeScore: 72,
    previousRank: '5th (2024)',
    change: '+3',
    source: 'Henley & Partners 2026',
  },
  top5ResidenceIndex: [
    { rank: '1 (Joint)', country: 'New Zealand', score: 73 },
    { rank: '1 (Joint)', country: 'Switzerland', score: 73 },
    { rank: '2 (Joint)', country: 'UAE', score: 72 },
    { rank: '2 (Joint)', country: 'Singapore', score: 72 },
    { rank: '2 (Joint)', country: 'Monaco', score: 72 },
    { rank: '2 (Joint)', country: 'Italy', score: 72 },
    { rank: '2 (Joint)', country: 'Luxembourg', score: 72 },
  ],
  worldsBestCountries: {
    uaeRank: 17,
    previousRank: 22,
    change: '+5',
    source: 'U.S. News 2026',
  },
  cityRankings: [
    { index: 'Global Power City Index', city: 'Dubai', rank: 8, previousRank: 9, change: '+1', source: 'GPCI 2026', tier: 1 },
    { index: 'Smart City Index', city: 'Dubai', rank: 6, previousRank: 8, change: '+2', source: 'IMD 2026', tier: 1 },
    { index: 'Top City Destinations', city: 'Dubai', rank: 12, previousRank: 15, change: '+3', source: 'Euromonitor International', tier: 2 },
  ],
  uaeRankingFactors: [
    { factor: 'Safety and security', weight: 'Critical', evidence: '99% feel safe walking at night' },
    { factor: 'Zero income tax', weight: 'High', evidence: 'Policy advantage' },
    { factor: 'Business opportunities', weight: 'High', evidence: '72,000 new companies in 2025' },
    { factor: 'Tax competitiveness', weight: 'High', evidence: 'Leader alongside Monaco, KSA' },
    { factor: 'Regulatory agility', weight: 'High', evidence: 'CEPAs, golden visa program' },
    { factor: 'Golden visa programme', weight: 'High', evidence: 'Attracts talent and investment' },
  ],
}

// Thank You Leadership Data
export const thankYouLeadershipData = {
  cabinetAchievements: {
    ministers: 72,
    cabinetFormations: 9,
    reshuffles: 13,
    cabinetMeetings: 558,
    resolutionsIssued: '~16,000',
    ministerialRetreats: 7,
    extraordinaryMeetings: 16,
    legalFrameworkModernized: '>90%',
  },
  tributeQuotes: [
    { speaker: 'Sheikh Hazza bin Zayed Al Nahyan', title: 'UAE Leader', quote: 'Over twenty years of H.H. Sheikh Mohammed bin Rashid\'s leadership of the Federal Government, the UAE has achieved global leadership in government innovation and topped international indicators of development, efficiency and effectiveness.' },
    { speaker: 'Sheikh Mohamed bin Zayed Al Nahyan', title: 'President', quote: 'Under Sheikh Mohammed\'s exceptional leadership, the UAE government represents an inspiring model of development that places people at the heart of its priorities.' },
    { speaker: 'Sheikh Mohammed bin Rashid Al Maktoum', title: 'Prime Minister', quote: 'Today, we mark 20 years since I assumed the office of Prime Minister — two decades spent working alongside a dedicated team.' },
  ],
  socialMedia: {
    platform: 'Facebook (Emirates News)',
    postType: 'Thank you message',
    sentiment: 'Extremely Positive',
    credibility: 'T1',
  },
}

// Food Cuisine Data
export const foodCuisineData = {
  michelinStarRestaurants: [
    { name: 'FZN', stars: 3, cuisine: 'Modern Cuisine', location: 'Dubai' },
    { name: 'Trésind Studio', stars: 3, cuisine: 'Indian', location: 'Dubai' },
    { name: 'Il Ristorante', stars: 2, cuisine: 'Italian', location: 'Dubai' },
    { name: 'Row on 45', stars: 2, cuisine: 'Creative', location: 'Dubai' },
    { name: 'Brasserie Boulud', stars: 1, cuisine: 'French', location: 'Dubai' },
  ],
  bibGourmandRestaurants: [
    { name: 'Al Khayma Heritage Restaurant', cuisine: 'Emirati', location: 'Dubai' },
    { name: 'Al-Fanar', cuisine: 'Emirati', location: 'Dubai' },
  ],
  emiratiRestaurants: [
    { name: 'Al Mrzab', stars: 'Michelin-starred', cuisine: 'Emirati', location: 'Dubai' },
    { name: 'Gerbou', stars: 'Mentioned', cuisine: 'Emirati', location: 'Dubai' },
    { name: 'Erth', stars: 'Mentioned', cuisine: 'Emirati', location: 'Dubai' },
  ],
  cuisineDiversity: [
    { type: 'Arabic/Lebanese', examples: 'Traditional dishes', availability: 'Widely available', sentimentScore: 9.0 },
    { type: 'Indian/Pakistani', examples: 'Curry, biryani, tandoori', availability: 'Very widely available', sentimentScore: 9.2 },
    { type: 'Filipino', examples: 'Adobo, sinigang', availability: 'Widely available', sentimentScore: 8.5 },
    { type: 'Western/Fusion', examples: 'Fine dining, casual', availability: 'Very widely available', sentimentScore: 9.0 },
    { type: 'Street Food', examples: 'Shawarma, kebabs, falafel', availability: 'Ubiquitous', sentimentScore: 9.5 },
    { type: 'Desserts', examples: 'Luqaimat, kunafa', availability: 'Widely available', sentimentScore: 9.3 },
  ],
}

// Great Place Data
export const greatPlaceData = {
  businessEnvironment: {
    attractiveness: 'High',
    globalRanking: 'Top 10 globally',
    taxEfficiency: 'Top 3 globally',
    regulatoryAgility: 'Top 10 globally',
    goldenVisa: 'Active (Top 10 globally)',
    newCompanies2025: 72000,
    activeBusinessMembers: '292,000+',
  },
  economicIndicators2025: {
    q3Gdp: 'AED 113.8B',
    q3GdpChange: '+5.3%',
    first9MonthsGdp: 'AED 355B',
    first9MonthsGdpChange: '+4.7%',
    exportsReExports: 'AED 356B',
    exportsReExportsChange: '+15.1% YoY',
  },
  investmentProjects: [
    { project: 'Za\'abeel District (DIFC 2.0)', investment: 'Dh100B', details: '17M sq.ft expansion' },
    { project: 'Innovation Hub companies', details: '6,000 companies' },
    { project: 'AI specialists', details: '30,000 in Innovation Hub' },
    { project: 'Projected GDP contribution', details: 'AED 103B over next decade' },
    { project: 'Dubai South new companies (2025)', details: '653 (+65% YoY)' },
  ],
  parentFriendlyWorkplace: {
    initiative: 'Parent-Friendly Label',
    organization: 'Abu Dhabi Early Childhood Authority (ADECA)',
    status: 'Active',
    recognition: 'UAE President honors awarded organizations',
  },
}

// Praise Recommendation Data
export const praiseRecommendationData = {
  sentimentAnalysis: [
    { sourceType: 'Travel Media', sentimentScore: '9.2/10', dominantThemes: 'Superlative language, world-class, must-see', volume: 'High' },
    { sourceType: 'Social Media (Instagram)', sentimentScore: '8.8/10', dominantThemes: 'Vibrant, amazing, beautiful architecture', volume: 'Very High' },
    { sourceType: 'Social Media (Reddit)', sentimentScore: '8.5/10', dominantThemes: 'Adventure, luxury, value for money', volume: 'High' },
    { sourceType: 'TripAdvisor Reviews', sentimentScore: '9.0/10', dominantThemes: 'Exceeded expectations, 5-star service', volume: 'Medium-High' },
  ],
  praisedAttractions: [
    { name: 'Burj Khalifa', emirate: 'Dubai', category: 'Landmark', mentionFrequency: 'Extremely High', sentiment: '9.8/10' },
    { name: 'Sheikh Zayed Grand Mosque', emirate: 'Abu Dhabi', category: 'Cultural/Religious', mentionFrequency: 'Very High', sentiment: '9.7/10' },
    { name: 'Palm Jumeirah', emirate: 'Dubai', category: 'Landmark', mentionFrequency: 'Very High', sentiment: '9.5/10' },
    { name: 'Dubai Mall', emirate: 'Dubai', category: 'Shopping/Entertainment', mentionFrequency: 'Very High', sentiment: '9.3/10' },
    { name: 'Museum of the Future', emirate: 'Dubai', category: 'Cultural', mentionFrequency: 'High', sentiment: '9.4/10' },
    { name: 'Emirates Palace', emirate: 'Abu Dhabi', category: 'Luxury', mentionFrequency: 'High', sentiment: '9.2/10' },
    { name: 'Louvre Abu Dhabi', emirate: 'Abu Dhabi', category: 'Cultural', mentionFrequency: 'High', sentiment: '9.1/10' },
    { name: 'Atlantis Aquaventure', emirate: 'Dubai', category: 'Theme Park', mentionFrequency: 'High', sentiment: '9.0/10' },
    { name: 'Ski Dubai', emirate: 'Dubai', category: 'Indoor Ski', mentionFrequency: 'High', sentiment: '8.9/10' },
    { name: 'Burj Al Arab', emirate: 'Dubai', category: 'Luxury Hotel', mentionFrequency: 'Very High', sentiment: '9.6/10' },
    { name: 'Dubai Frame', emirate: 'Dubai', category: 'Landmark', mentionFrequency: 'Medium-High', sentiment: '8.7/10' },
    { name: 'Sharjah Safari', emirate: 'Sharjah', category: 'Wildlife', mentionFrequency: 'Medium', sentiment: '8.5/10' },
    { name: 'Hatta Adventure', emirate: 'Dubai (Hills)', category: 'Nature/Adventure', mentionFrequency: 'Medium', sentiment: '8.4/10' },
  ],
}

// Impressed Data
export const impressedData = {
  sentimentAnalysis: [
    { theme: 'expectations were completely blown away', frequency: 'High', sentimentScore: '9.5/10', sourceType: 'Social Media' },
    { theme: 'incredible stays', frequency: 'Very High', sentimentScore: '9.3/10', sourceType: 'Hotel Reviews' },
    { theme: 'beyond beautiful', frequency: 'High', sentimentScore: '9.4/10', sourceType: 'Travel Media' },
    { theme: 'Dubai exceeded every expectation', frequency: 'Medium', sentimentScore: '9.2/10', sourceType: 'Repeat Visitors' },
    { theme: 'blown away by jaw-dropping views', frequency: 'High', sentimentScore: '9.6/10', sourceType: 'Event Attendees' },
  ],
  visitorExperienceCategories: [
    { category: 'First-time visitors', description: 'Consistently post about experiences exceeding mental image', evidence: '"completely blown away"', source: 'Social Media' },
    { category: 'Expectation vs. reality', description: 'Content performs well on TikTok', evidence: 'High engagement', source: 'TikTok Analytics' },
    { category: 'Professional events', description: 'At landmarks generate positive surprise', evidence: '"jaw-dropping, sky-high views"', source: 'Burj Khalifa Delegates' },
    { category: 'Hotels and resorts', description: 'Praise for exceeding booking expectations', evidence: '"most extravagant breakfast"', source: 'TripAdvisor' },
  ],
  sampleReview: {
    source: 'Jumeirah Marsa Al Arab',
    overallRating: '5/5 (Excellent)',
    value: '4.0/5',
    rooms: '4.0/5',
    location: '5.0/5',
    cleanliness: '5.0/5',
    service: '5.0/5',
    sleepQuality: '5.0/5',
    quote: 'By my own admission I am very fussy and hard to impress, this hotel most certainly blew me away',
    reviewer: '180mis, Sydney, Australia',
  },
  eventDelegateReactions: {
    event: 'LTBCUAE2025 (Leadership Conference)',
    location: 'Burj Khalifa',
    reactions: 94,
    comments: 11,
    shares: 65,
    quote: 'At the peak of the Burj Khalifa, our delegates were absolutely blown away by the jaw-dropping, sky-high views',
  },
}

// Positive Sentiment Data Array for Dashboard
export const positiveSentimentDataArray = [
  { name: 'Safety & Security', category: 'Safety', sentiment: { positive: 99, neutral: 1, negative: 0, volume: 95000 }, trend: { direction: 'rising', changePercent: 2.5 } },
  { name: 'Cleanliness', category: 'Environment', sentiment: { positive: 100, neutral: 0, negative: 0, volume: 78000 }, trend: { direction: 'stable', changePercent: 0 } },
  { name: 'Infrastructure', category: 'Development', sentiment: { positive: 95, neutral: 4, negative: 1, volume: 88000 }, trend: { direction: 'rising', changePercent: 3.1 } },
  { name: 'Healthcare', category: 'Services', sentiment: { positive: 90, neutral: 8, negative: 2, volume: 72000 }, trend: { direction: 'rising', changePercent: 5.2 } },
  { name: 'Governance', category: 'Leadership', sentiment: { positive: 88, neutral: 10, negative: 2, volume: 65000 }, trend: { direction: 'stable', changePercent: 0.8 } },
  { name: 'Tourism & Attractions', category: 'Travel', sentiment: { positive: 93, neutral: 5, negative: 2, volume: 110000 }, trend: { direction: 'rising', changePercent: 4.5 } },
  { name: 'Business Environment', category: 'Economy', sentiment: { positive: 87, neutral: 11, negative: 2, volume: 58000 }, trend: { direction: 'rising', changePercent: 6.2 } },
  { name: 'Food & Cuisine', category: 'Culinary', sentiment: { positive: 91, neutral: 7, negative: 2, volume: 82000 }, trend: { direction: 'rising', changePercent: 2.8 } },
  { name: 'Leadership & Vision', category: 'Politics', sentiment: { positive: 85, neutral: 12, negative: 3, volume: 48000 }, trend: { direction: 'stable', changePercent: 1.2 } },
  { name: 'Quality of Life', category: 'Lifestyle', sentiment: { positive: 92, neutral: 6, negative: 2, volume: 76000 }, trend: { direction: 'rising', changePercent: 3.8 } },
]

// Praise Sentiment Overview
export const praiseSentimentOverview = {
  researchCompilationDate: '2026-04-27',
  totalCategories: 11,
  totalKPIs: 17,
  overallPositiveSentiment: '91.2%',
  topPerformingCategory: { name: 'Cleanliness', score: '100%' },
  fastestGrowingCategory: { name: 'Healthcare', growth: '+5.2%' },
  keyInsights: [
    'Safety is the foundation of UAE praise narrative (99% feel safe)',
    '5 UAE cities dominate top 10 safest cities globally',
    'Dubai maintains 6-year streak as world\'s cleanest city',
    'UAE ranks 4th globally for road quality (WEF TTDI 2024)',
    '235+ JCI-accredited facilities - #1 globally',
    'Joint 2nd in Global Residence Program Index (Henley 2026)',
  ],
}

// Hook for Praise Data
export function usePraiseData() {
  return {
    overview: praiseOverview,
    kpiSummary: kpiSummaryData,
    safetyData,
    cleanlinessData,
    infrastructureData,
    healthcareExcellenceData,
    visionaryLeadershipData,
    bestRankingsData,
    thankYouLeadershipData,
    foodCuisineData,
    greatPlaceData,
    praiseRecommendationData,
    impressedData,
    positiveSentimentDataArray,
    praiseSentimentOverview,
  }
}
