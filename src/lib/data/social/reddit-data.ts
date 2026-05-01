'use client'

/**
 * Reddit Intelligence Data - Comprehensive UAE Reddit Research
 * Source: 5-7-reddit-results.md (2026-04-27)
 *
 * Data extracted from Reddit (blocked direct access), mainstream news, legal sources,
 * HRW reports, government portals, and Wikipedia.
 */

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export interface ExecutionMetadata {
  dateExecuted: string
  frameworkVersion: string
  queriesExecuted: number
  pagesFetched: number
  sourceTypes: string[]
  dataIntegrity: string
  confidence: string
}

export const executionMetadata: ExecutionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 35,
  pagesFetched: 25,
  sourceTypes: ['Reddit (blocked direct access)', 'mainstream news', 'legal sources', 'HRW', 'government portals', 'Wikipedia'],
  dataIntegrity: 'All facts traceable to source; no fabrication detected',
  confidence: 'High (Reddit direct access blocked; data from verified search snippets)',
}

// ============================================================================
// FOCUS AREAS
// ============================================================================

export interface FocusArea {
  priority: 'HIGH' | 'MEDIUM' | 'LOW'
  area: string
  description: string
}

export const focusAreas: FocusArea[] = [
  { priority: 'HIGH', area: 'UAE Subreddits', description: 'r/dubai, r/uae, r/abudhabi, r/sharjah' },
  { priority: 'HIGH', area: 'Negative Sentiment', description: 'regret, leaving, hate, worst patterns' },
  { priority: 'HIGH', area: 'Hidden Realities', description: '"they don\'t tell you", "secret", "hidden"' },
  { priority: 'HIGH', area: 'Fraud & Scams', description: 'credit card, bank, broker fraud' },
  { priority: 'HIGH', area: 'Rent & Housing', description: 'unaffordable, crisis, increases' },
  { priority: 'HIGH', area: 'Salary & Employment', description: 'cuts, unpaid leave, job losses' },
  { priority: 'HIGH', area: 'Discrimination', description: 'racism, xenophobia, nationality-based' },
  { priority: 'HIGH', area: 'Police Conduct', description: 'harassment, abuse, complaints' },
  { priority: 'HIGH', area: 'Toxic Workplaces', description: 'exploitation, kafala' },
  { priority: 'HIGH', area: 'Mental Health', description: 'depression, anxiety, isolation' },
  { priority: 'MEDIUM', area: 'Human Trafficking', description: 'sex trafficking, domestic worker exploitation' },
  { priority: 'MEDIUM', area: 'Legal System', description: 'mass trials, imprisonment' },
  { priority: 'MEDIUM', area: 'Real Estate Market', description: 'crash, collapse, correction' },
  { priority: 'MEDIUM', area: 'Women\'s Safety', description: 'harassment, assault' },
]

// ============================================================================
// QUERY PATTERNS
// ============================================================================

export interface QueryPattern {
  pattern: string
  purpose: string
  category: string
}

export const queryPatterns: QueryPattern[] = [
  // Negative Sentiment
  { pattern: 'site:reddit.com/r/dubai worst OR regret OR hate OR leaving OR mistake', purpose: 'Overall negative sentiment', category: 'Negative Sentiment' },
  { pattern: 'site:reddit.com/r/dubai they don\'t tell you OR hidden OR secret OR reality', purpose: 'Hidden realities', category: 'Negative Sentiment' },
  { pattern: 'site:reddit.com/r/dubai scam OR fraud OR ripped off OR cheated', purpose: 'Fraud victims', category: 'Scams & Fraud' },
  { pattern: 'site:reddit.com/r/dubai rent AND unaffordable OR crisis OR increase OR absurd', purpose: 'Housing crisis', category: 'Housing Crisis' },
  { pattern: 'site:reddit.com/r/dubai salary AND low OR cut OR unpaid OR terrible', purpose: 'Employment issues', category: 'Salary Cuts' },
  { pattern: 'site:reddit.com/r/dubai racism OR discrimination OR xenophobia', purpose: 'Discrimination', category: 'Discrimination' },
  { pattern: 'site:reddit.com/r/dubai police AND harassment OR abuse OR racist OR corrupt', purpose: 'Police misconduct', category: 'Police Misconduct' },
  { pattern: 'site:reddit.com/r/dubai deported OR arrested OR banned OR jailed', purpose: 'Legal issues', category: 'Legal Issues' },
  // Employment/Labour
  { pattern: 'site:reddit.com/r/dubai company closed OR layoffs OR job losses OR fired', purpose: 'Job losses', category: 'Job Losses' },
  { pattern: 'UAE labour law salary cut consent 2026 Federal Decree 33', purpose: 'Legal protections', category: 'Labour Law' },
  // Cost of Living
  { pattern: 'Dubai cost of living 2025 2026 expat salary', purpose: 'Living costs', category: 'Living Costs' },
  { pattern: 'UAE cost of living rent salary Abu Dhabi', purpose: 'Abu Dhabi costs', category: 'Living Costs' },
  // Rights/Abuse
  { pattern: 'UAE domestic worker abuse maid rights 2025 2026', purpose: 'Domestic workers', category: 'Human Rights' },
  { pattern: 'Dubai housing scam landlord fraud 2025 2026', purpose: 'Housing fraud', category: 'Scams & Fraud' },
  { pattern: 'UAE sexual harassment assault women safety 2025 2026', purpose: 'Women\'s safety', category: 'Women\'s Safety' },
  // Real Estate
  { pattern: 'Dubai real estate crash collapse 2025 2026', purpose: 'Market crash', category: 'Real Estate' },
  { pattern: 'Dubai rent increase 2025 2026 AED', purpose: 'Rent hikes', category: 'Housing Crisis' },
  // Other
  { pattern: 'Dubai expat mental health depression anxiety 2025 2026', purpose: 'Mental health', category: 'Mental Health' },
  { pattern: 'site:reddit.com/r/dubai AmA UAE government police official', purpose: 'Official AMAs', category: 'Government' },
  { pattern: 'UAE cybercrime fraud online scam 2025 2026', purpose: 'Cybercrime', category: 'Scams & Fraud' },
  { pattern: 'Dubai alcoholism substance abuse expat drug 2025 2026', purpose: 'Substance abuse', category: 'Legal Issues' },
  { pattern: 'UAE imprisonment detention journalist activist 2025 2026', purpose: 'Political imprisonment', category: 'Human Rights' },
]

// ============================================================================
// REDDIT POSTS BY CATEGORY
// ============================================================================

export interface RedditPost {
  id: string
  title: string
  date: string
  url: string
  sentiment: string
  context: string
  uaeRelevance: 'HIGH' | 'MEDIUM' | 'LOW'
  credibility: string
  keyQuote?: string
  financialImpact?: string
  entities?: string[]
  jurisdiction?: string
  authority?: string
  propertyType?: string
  industry?: string
  technology?: string
  platform?: string
  timeline?: string
}

export interface QueryCategory {
  name: string
  icon: string
  color: string
  posts: RedditPost[]
}

// Negative Sentiment Posts
const negativeSentimentPosts: RedditPost[] = [
  {
    id: 'neg-1',
    title: 'Feeling stuck about leaving or staying in Dubai, need advice',
    date: 'Apr 5, 2026',
    url: 'https://www.reddit.com/r/dubai/comments/1sddpxh/',
    sentiment: 'Negative / Uncertain',
    context: 'Expats expressing uncertainty about staying in Dubai',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'neg-2',
    title: 'WORST OFFICE AREA IN ENTIRE UAE -DUBAI COMMERCE CITY!!',
    date: 'Jan 13, 2026',
    url: 'https://www.reddit.com/r/dubai/comments/1qbpvul/',
    sentiment: 'Negative',
    context: 'Rants about office area traffic and infrastructure',
    uaeRelevance: 'MEDIUM',
    credibility: 'PRIMARY',
  },
  {
    id: 'neg-3',
    title: 'Why are people leaving? : r/dubai',
    date: 'Mar 6, 2026',
    url: 'https://www.reddit.com/r/dubai/comments/1rlc0ta/',
    sentiment: 'Negative',
    context: 'Discussion about expats leaving Dubai',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'neg-4',
    title: 'Do you regret moving to UAE (Dubai, Abu Dhabi)? Pros and cons?',
    date: 'Feb 12, 2024',
    url: 'https://www.reddit.com/r/dubai/comments/1aozxpy/',
    sentiment: 'Mixed',
    context: 'General discussion about regrets and pros/cons of moving to UAE',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'neg-5',
    title: "Another 'leaving' story. Family leaving tonight after almost 40 years...",
    date: 'Sep 29, 2018',
    url: 'https://www.reddit.com/r/dubai/comments/9jxg7t/',
    sentiment: 'Negative / Sad',
    context: 'Long-term residents leaving UAE',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
]

// Scams & Fraud Posts
const scamsFraudPosts: RedditPost[] = [
  {
    id: 'scam-1',
    title: 'Was this a scam? : r/dubai',
    date: 'Apr 28, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/1318uic/',
    sentiment: 'Negative / Anxious',
    context: 'Pakistani man asking for sponsorship scam',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    entities: ['Pakistani'],
  },
  {
    id: 'scam-2',
    title: 'I got scammed, lesson learned : r/dubai',
    date: 'Jun 24, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/14hn5mz/',
    sentiment: 'Negative',
    context: 'Credit card fraud victim',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'scam-3',
    title: 'Cheated and fraud by the brokers : r/dubai',
    date: 'Sep 2, 2024',
    url: 'https://www.reddit.com/r/dubai/comments/1f78zfc/',
    sentiment: 'Very Negative',
    context: 'Real estate broker fraud - "The city is full of scammers, trust no one"',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    keyQuote: 'The city is full of scammers, trust no one',
  },
  {
    id: 'scam-4',
    title: 'Emirates NBD Credit Card Fraud',
    date: 'Jul 7, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/14tj7dj/',
    sentiment: 'Negative',
    context: '13,000 AED stolen from credit card',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    entities: ['Emirates NBD'],
    financialImpact: 'AED 13,000',
  },
  {
    id: 'scam-5',
    title: 'A friend of mine got scammed for AED 30000',
    date: 'Jul 21, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/155gf1l/',
    sentiment: 'Negative',
    context: 'Apartment rental scam on dubizzle',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    platform: 'dubizzle',
    financialImpact: 'AED 30,000',
  },
  {
    id: 'scam-6',
    title: 'Got scammed by a \'real estate agency\' in Dubai',
    date: 'Aug 28, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/163v258/',
    sentiment: 'Very Negative',
    context: 'Real estate agency fraud',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'scam-7',
    title: 'I got scammed, is there a chance that I could get my money back?',
    date: 'Apr 16, 2024',
    url: 'https://www.reddit.com/r/dubai/comments/1c5gw7i/',
    sentiment: 'Negative / Desperate',
    context: 'ADCB bank card scam',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    entities: ['ADCB'],
  },
]

// Housing Crisis Posts
const housingCrisisPosts: RedditPost[] = [
  {
    id: 'hous-1',
    title: 'Absurd rent increase : r/dubai',
    date: 'Sep 11, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/16fu9g5/',
    sentiment: 'Negative',
    context: 'Sharjah rental law - cannot increase rent for first 3 years, max 5% after',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    jurisdiction: 'Sharjah',
    keyQuote: '3-year rent freeze, max 5% increase after',
  },
  {
    id: 'hous-2',
    title: 'Rent increase 15% Rental Index shows no increase',
    date: 'Jun 24, 2025',
    url: 'https://www.reddit.com/r/dubai/comments/1lj5a3s/',
    sentiment: 'Negative',
    context: 'AED 45,000 to AED 52,000 increase attempted',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    financialImpact: 'AED 7,000 increase (15%)',
  },
  {
    id: 'hous-3',
    title: 'Agent wants to raise rent from 72k to 85k but Dubai Rental Index says no increase',
    date: 'Dec 13, 2025',
    url: 'https://www.reddit.com/r/dubai/comments/1pleudz/',
    sentiment: 'Negative',
    context: '2BR apartment, AED 72K to AED 85K attempted increase vs RERA index',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    propertyType: '2BR apartment',
    authority: 'RERA',
    financialImpact: 'AED 72K to AED 85K (18%)',
  },
  {
    id: 'hous-4',
    title: 'Rent has become so unaffordable',
    date: 'Apr 23, 2024',
    url: 'https://www.reddit.com/r/dubai/comments/1cb4xcv/',
    sentiment: 'Very Negative',
    context: '"Rents are going up every month. Only way for it to come down is recession or covid"',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    keyQuote: 'Rents are going up every month. Only way for it to come down is recession or covid',
  },
  {
    id: 'hous-5',
    title: 'Illegal rent increases',
    date: 'Sep 17, 2025',
    url: 'https://www.reddit.com/r/dubai/comments/1nj4s8c/',
    sentiment: 'Negative',
    context: 'DLD rental index - no rental increase allowed on renewal',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    authority: 'DLD (Dubai Land Department)',
  },
  {
    id: 'hous-6',
    title: 'Landlord wants 10% rent increase, but RERA says 0%',
    date: 'Jul 24, 2025',
    url: 'https://www.reddit.com/r/dubai/comments/1m829xq/',
    sentiment: 'Negative',
    context: 'RERA index 0% - not liable for any extra rent',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    authority: 'RERA (Real Estate Regulatory Agency)',
    keyQuote: 'RERA Index 0%',
  },
]

// Salary Cuts Posts
const salaryCutsPosts: RedditPost[] = [
  {
    id: 'sal-1',
    title: 'Salary cuts and unpaid leave : r/dubai',
    date: 'Mar 23, 2026',
    url: 'https://www.reddit.com/r/dubai/comments/1s1erw1/',
    sentiment: 'Very Negative',
    context: 'Small business salary cuts',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'sal-2',
    title: 'High salary but not paid on time or Low salary but always paid on time',
    date: 'Oct 2, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/16y2m6f/',
    sentiment: 'Mixed',
    context: 'Discussion of payment reliability',
    uaeRelevance: 'MEDIUM',
    credibility: 'PRIMARY',
  },
  {
    id: 'sal-3',
    title: 'Company reduced our salaries by more than 50% due to regional war',
    date: 'Mar 9, 2026',
    url: 'https://www.reddit.com/r/dubai/comments/1roybjv/',
    sentiment: 'Very Negative',
    context: '50% salary cut due to "regional war issues"',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    keyQuote: 'Regional war issues',
    financialImpact: '50% salary reduction',
  },
  {
    id: 'sal-4',
    title: 'Employer forcing pay cut or resign. Looking for affordable lawyer',
    date: 'Mar 10, 2026',
    url: 'https://www.reddit.com/r/dubai/comments/1rpt0zi/',
    sentiment: 'Very Negative / Desperate',
    context: 'Employment law question about pay cut vs resignation',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'sal-5',
    title: 'Salary cuts and unpaid leave',
    date: 'Mar 23, 2026',
    url: 'https://www.reddit.com/r/UAE/comments/1s1qvrk/',
    sentiment: 'Very Negative',
    context: '30% pay cut discussion',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    financialImpact: '30% pay cut',
  },
]

// Discrimination Posts
const discriminationPosts: RedditPost[] = [
  {
    id: 'disc-1',
    title: 'Has anybody faced any discrimination',
    date: 'Jul 5, 2025',
    url: 'https://www.reddit.com/r/dubai/comments/1lsed33/',
    sentiment: 'Mixed',
    context: 'Test difficulty comparison - mentions not feeling racism despite not being white',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'disc-2',
    title: 'Struggling to Rent in the UAE as a Black African',
    date: 'Jul 11, 2025',
    url: 'https://www.reddit.com/r/dubai/comments/1lwyx5r/',
    sentiment: 'Negative',
    context: 'Housing discrimination - "hurt people hurt people"',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    keyQuote: 'hurt people hurt people',
    entities: ['Black African'],
  },
  {
    id: 'disc-3',
    title: 'Discrimination is the worst enemy of Dubai',
    date: 'Jul 31, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/15ed4ws/',
    sentiment: 'Very Negative',
    context: '"The racism can literally get you killed"',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    keyQuote: 'The racism can literally get you killed',
  },
  {
    id: 'disc-4',
    title: 'Living in Dubai as a black woman',
    date: 'Oct 17, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/17a2gi5/',
    sentiment: 'Negative',
    context: '"I wouldn\'t say there\'s NO discrimination" - between micro aggressions and full blown racism',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    keyQuote: "I wouldn't say there's NO discrimination",
    entities: ['Black women'],
  },
  {
    id: 'disc-5',
    title: "Is the UAE's 'diversity' a lie? My experience trying to rent a room",
    date: 'Aug 25, 2025',
    url: 'https://www.reddit.com/r/dubai/comments/1mzy5en/',
    sentiment: 'Very Negative',
    context: 'Housing discrimination against Black Africans',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'disc-6',
    title: 'What form does racism take in Dubai?',
    date: 'Dec 26, 2020',
    url: 'https://www.reddit.com/r/dubai/comments/kkec95/',
    sentiment: 'Negative',
    context: '"Most of the racism in Dubai is felt by south asians and normally manifests in the form of job/salary discrimination"',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    keyQuote: 'Most of the racism in Dubai is felt by south asians and normally manifests in the form of job/salary discrimination',
    entities: ['South Asians'],
  },
  {
    id: 'disc-7',
    title: 'my mom lost her job because of her nationality',
    date: 'Jun 6, 2024',
    url: 'https://www.reddit.com/r/dubai/comments/1d9mmb8/',
    sentiment: 'Very Negative',
    context: 'Job loss due to nationality discrimination',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'disc-8',
    title: 'How bad is the racism in UAE?',
    date: 'Feb 25, 2026',
    url: 'https://www.reddit.com/r/UAE/comments/1rejhyo/',
    sentiment: 'Negative',
    context: 'Direct question about racism severity',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
]

// Police Misconduct Posts
const policeMisconductPosts: RedditPost[] = [
  {
    id: 'pol-1',
    title: 'Experienced a Karen in Dubai - should I drop the complaint?',
    date: 'May 31, 2022',
    url: 'https://www.reddit.com/r/dubai/comments/v1znjj/',
    sentiment: 'Negative',
    context: 'Police complaint for defamation and harassment filed',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'pol-2',
    title: "My Family's Dubai Horror Story",
    date: 'Jun 17, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/14bybpl/',
    sentiment: 'Very Negative',
    context: 'Family horror story involving police',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'pol-3',
    title: 'Is it possible to file a complaint against a police officer in Dubai',
    date: 'May 11, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/13eeot9/',
    sentiment: 'Negative',
    context: 'Taking police to court - "court made the police"',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    keyQuote: 'court made the police',
  },
  {
    id: 'pol-4',
    title: 'Dubai Police called : r/dubai',
    date: 'Mar 29, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/1260jxt/',
    sentiment: 'Negative',
    context: 'Complaint for insults and racist remarks rejected by police',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'pol-5',
    title: 'Witnessing unjust fine and Seeking Guidance on Reporting',
    date: 'Nov 12, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/17t8i6b/',
    sentiment: 'Negative',
    context: '"this is a police state after all"',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    keyQuote: 'this is a police state after all',
  },
  {
    id: 'pol-6',
    title: 'Emergency!! My mom got taken to the police station for no reason!',
    date: 'Nov 14, 2025',
    url: 'https://www.reddit.com/r/dubai/comments/1ox5bn3/',
    sentiment: 'Very Negative / Panicked',
    context: 'Face recognition cameras mistakenly identifying person',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    technology: 'Face recognition cameras',
  },
]

// Job Losses Posts
const jobLossesPosts: RedditPost[] = [
  {
    id: 'job-1',
    title: 'Are people actually losing their jobs!!',
    date: 'Apr 2, 2026',
    url: 'https://www.reddit.com/r/UAE/comments/1sab0ko/',
    sentiment: 'Negative / Concerned',
    context: 'Yes. People are losing jobs. Personally I know people who have lost their jobs in Logistics field, travel and tourism',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    keyQuote: 'Yes. People are losing jobs. Personally I know people who have lost their jobs in Logistics field, travel and tourism',
    entities: ['Logistics', 'Travel', 'Tourism'],
  },
  {
    id: 'job-2',
    title: 'Today 4 colleagues were terminated',
    date: 'Apr 2, 2026',
    url: 'https://www.reddit.com/r/dubai/comments/1s9vrrp/',
    sentiment: 'Negative',
    context: 'Termination due to company restructuring or force majeure',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
  },
  {
    id: 'job-3',
    title: 'One Month of Conflict and Already Layoffs, Pay Cuts, and Rising Costs',
    date: 'Apr 3, 2026',
    url: 'https://www.reddit.com/r/UAE/comments/1sb8ws8/',
    sentiment: 'Very Negative',
    context: 'Dubai = lifestyle, safety, tax-free money, endless opportunity. But it\'s been what, a month of conflict?',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    keyQuote: 'Dubai = lifestyle, safety, tax-free money, endless opportunity. But it\'s been what, a month of conflict?',
  },
  {
    id: 'job-4',
    title: 'Got laid off today after a month in new job',
    date: 'Apr 1, 2026',
    url: 'https://www.reddit.com/r/dubai/comments/1s9joz3/',
    sentiment: 'Very Negative',
    context: 'Real estate developer, told to take unpaid leave till further notice',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    industry: 'Real estate development',
  },
  {
    id: 'job-5',
    title: 'Just got laid off - company is closing because of the war',
    date: 'Mar 4, 2026',
    url: 'https://www.reddit.com/r/dubai/comments/1rkhvjf/',
    sentiment: 'Very Negative',
    context: 'Company closed after less than a week of war',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    timeline: 'Less than one week after conflict started',
  },
  {
    id: 'job-6',
    title: 'Got terminated because of the current situation',
    date: 'Mar 28, 2026',
    url: 'https://www.reddit.com/r/dubai/comments/1s5ylxu/',
    sentiment: 'Very Negative',
    context: 'Visa process not completed, "left with no gratuity, no visa, and no medical insurance"',
    uaeRelevance: 'HIGH',
    credibility: 'PRIMARY',
    keyQuote: 'left with no gratuity, no visa, and no medical insurance',
  },
]

// ============================================================================
// LABOUR LAW DATA
// ============================================================================

export interface LabourLawProvision {
  provision: string
  detail: string
}

export const labourLawProvisions: LabourLawProvision[] = [
  { provision: 'Salary Reduction', detail: 'Cannot be reduced without express written employee consent' },
  { provision: 'Employer Obligation', detail: 'Must explain: reason, reduction amount, duration, who else is affected, conditions for restoration' },
  { provision: 'Employee Right', detail: 'May resign without notice after notifying MOHRE at least 14 days in advance' },
  { provision: 'Gratuity Calculation', detail: 'Calculated on ORIGINAL contractual salary, not reduced amount' },
  { provision: 'MOHRE Resolution', detail: 'Salary complaints resolved within 14 days' },
  { provision: 'Wage Protection', detail: 'WPS (Wage Protection System) monitors monthly payroll' },
]

export interface GratuityTier {
  yearsOfService: string
  calculation: string
}

export const gratuityTiers: GratuityTier[] = [
  { yearsOfService: '1-5 years', calculation: '21 days basic salary per year' },
  { yearsOfService: 'Above 5 years', calculation: '30 days basic salary per year' },
  { yearsOfService: 'Maximum Cap', calculation: '2 years total basic salary' },
]

export interface SectorImpact {
  name: string
  impact: string
  status?: string
}

export const sectorsAffected: SectorImpact[] = [
  { name: 'Hospitality and tourism', impact: 'MOST SIGNIFICANT' },
  { name: 'Retail (especially luxury and fashion)', impact: 'HIGH' },
  { name: 'Media and advertising', impact: 'MEDIUM-HIGH' },
  { name: 'Global supply chain-dependent companies', impact: 'MEDIUM-HIGH' },
]

export const sectorsNormal: SectorImpact[] = [
  { name: 'Technology and AI', impact: 'None', status: 'Normal' },
  { name: 'Healthcare', impact: 'None', status: 'Normal' },
  { name: 'Construction and real estate', impact: 'None', status: 'Normal' },
  { name: 'Finance and banking', impact: 'None', status: 'Normal' },
  { name: 'Government-related roles', impact: 'None', status: 'Normal' },
]

// ============================================================================
// MENTAL HEALTH STATISTICS
// ============================================================================

export interface MentalHealthStat {
  statistic: string
  value: number | string
  source: string
}

export const mentalHealthStats: MentalHealthStat[] = [
  { statistic: 'Adults with at least one mental health disorder', value: '57%', source: '2020 study' },
  { statistic: 'Depression cases in Dubai going undiagnosed', value: '74%', source: 'DUPHAT' },
  { statistic: 'UAE residents who are expats', value: '88%', source: 'Census' },
  { statistic: 'Anxiety prevalence', value: '56%', source: 'ICARE Wellbeing' },
  { statistic: 'Depression prevalence', value: '32%', source: 'ICARE Wellbeing' },
  { statistic: 'Expats experiencing negative mental health from work', value: '83%', source: 'AXA Global Healthcare Mind Health Report' },
]

// ============================================================================
// BANKING FRAUD DATA
// ============================================================================

export interface BankingFraudCase {
  title: string
  date: string
  url: string
  sentiment: string
  context: string
  entities?: string[]
  financialImpact?: string
  methods?: string
}

export const bankingFraudCases: BankingFraudCase[] = [
  {
    title: 'I was scammed for 3000aed and bank ain\'t returning the funds',
    date: 'Sep 25, 2025',
    url: 'https://www.reddit.com/r/dubai/comments/1nq56o1/',
    sentiment: 'Very Negative',
    context: 'Dispute process with bank',
    financialImpact: 'AED 3,000',
  },
  {
    title: 'Credit Card Fraud',
    date: 'Jan 2025-Jan 2026 (Multiple posts)',
    url: 'https://www.reddit.com/r/UAE/comments/1idlu3z/',
    sentiment: 'Negative',
    context: 'Card cloning scam - both online and POS machine based',
    methods: 'Card cloning (online and POS)',
  },
  {
    title: 'Emirates NBD and Fraud',
    date: 'Oct 20, 2023',
    url: 'https://www.reddit.com/r/dubai/comments/17c627g/',
    sentiment: 'Negative',
    context: 'Card added to scammer\'s Apple Pay',
    entities: ['Emirates NBD', 'Apple Pay'],
  },
  {
    title: 'Victim of Fraudulent transaction with CBD Visa Credit card',
    date: 'Feb 23, 2025',
    url: 'https://www.reddit.com/r/dubai/comments/1iw2d6y/',
    sentiment: 'Very Negative',
    context: 'AED 9,998 + USD 3.00 stolen',
    entities: ['CBD (Commercial Bank of Dubai)'],
    financialImpact: 'AED 9,998 + USD 3.00',
  },
]

export const fraudBanks: string[] = ['Emirates NBD', 'ADCB', 'CBD (Commercial Bank of Dubai)']

// ============================================================================
// REAL ESTATE MARKET DATA
// ============================================================================

export interface RealEstateMetric {
  metric: string
  value: string
  context: string
}

export const realEstateMetrics: RealEstateMetric[] = [
  { metric: 'Bond issuance (2025)', value: 'US$7 billion', context: 'More than double 2024' },
  { metric: 'Property transactions (2025)', value: 'USD $250 billion', context: 'Record high' },
  { metric: 'Price increase (2021-2025)', value: '70%', context: 'Cumulative' },
  { metric: 'Ready property crash (Feb 2026)', value: '-43.5%', context: 'War impact' },
  { metric: '2026 price correction forecast', value: '10-15%', context: 'S&P Global prediction' },
  { metric: '2008-style crash likelihood', value: 'Unlikely', context: 'S&P Global assessment' },
  { metric: 'Off-plan units flooding market', value: 'End 2025/Beginning 2026', context: 'Market oversupply' },
]

// ============================================================================
// HUMAN RIGHTS DATA
// ============================================================================

export interface MassTrial {
  defendants: number
  convicted: number
  lifeSentences: number
}

export interface KeyPrisoner {
  name: string
  status: string
  reason: string
}

export interface KafalaIssue {
  issue: string
  details: string
}

export const massTrialData: MassTrial = {
  defendants: 84,
  convicted: 44,
  lifeSentences: 40,
}

export const keyPrisoners: KeyPrisoner[] = [
  { name: 'Ahmed Mansoor', status: 'Life sentence', reason: 'Prominent activist, Gulf Centre for Human Rights' },
  { name: 'Nasser bin Ghaith', status: 'Life sentence', reason: 'Twitter posts criticizing UAE leaders' },
  { name: 'Abdulsalam Darwish al-Marzouqi', status: 'Life sentence', reason: 'Human rights activity' },
  { name: 'Sultan Bin Kayed al-Qasimi', status: 'Life sentence', reason: 'Human rights activity' },
  { name: 'Ahmed al-Atoum', status: '10 years', reason: 'Peaceful social media activity' },
]

export const kafalaIssues: KafalaIssue[] = [
  { issue: 'Job changing', details: 'Cannot change jobs without employer consent' },
  { issue: 'Wage theft', details: 'Widespread' },
  { issue: 'Recruitment fees', details: 'Illegal but charged' },
  { issue: 'Passport confiscation', details: 'Widespread' },
  { issue: 'Trade unions', details: 'Banned' },
  { issue: 'Minimum wage', details: 'Non-discriminatory wage does not exist' },
  { issue: 'Domestic workers', details: 'Excluded from labor law protections' },
]

// ============================================================================
// DOMESTIC WORKER ABUSE DATA
// ============================================================================

export interface DomesticWorkerWage {
  nationality: string
  monthlySalary: string
  source: string
}

export const domesticWorkerWages: DomesticWorkerWage[] = [
  { nationality: 'Filipinas', monthlySalary: 'AED 3,500', source: 'Maids.cc' },
  { nationality: 'Africans', monthlySalary: 'AED 2,700', source: 'Maids.cc' },
  { nationality: 'General range', monthlySalary: 'AED 1,100 - AED 1,400', source: 'Leadership Tadbeer' },
]

export const domesticWorkerAgencies: string[] = [
  'Maids.cc',
  'Al Forsan Tadbeer',
  'Leadership Tadbeer',
  'Leadership Tadbeer/Tadbeer WTC',
]

export const abuseMethods: string[] = [
  'Passport seizure - Agencies seize passports',
  'Confinement - Workers confined to cramped rooms',
  'Phone bans - Mobile phones banned',
  'Social media listing - Workers listed on Facebook, Instagram, TikTok with photos, names, ages, passport numbers',
  'Skin color description - Workers described as "fair," "black" etc.',
]

// ============================================================================
// SEX TRAFFICKING DATA
// ============================================================================

export interface SexTraffickingCase {
  entity: string
  details: string
  origin?: string
  method?: string
  location?: string
  term?: string
  hashtag?: string
  context?: string
}

export const sexTraffickingCases: SexTraffickingCase[] = [
  {
    entity: 'Sex trafficking in Dubai',
    details: 'Sex trafficking in Dubai emerged as city grew into global business hub',
  },
  {
    entity: 'Charles Mwesigwa (BBC 2025)',
    details: 'Targeting women from Uganda and Nigeria with fake job offers',
    location: 'Jumeirah Village Circle',
    term: '"Dubai porta potty" parties',
    hashtag: '#Dubaiportapotty',
  },
  {
    entity: 'Christy Gold Network (2023 Christy Gold Network)',
    details: 'Nigerian women lured with fake job promises, forced into prostitution under $15,000 debt threats',
    origin: 'Nigeria',
    method: '$15,000 forced debts',
  },
  {
    entity: 'Maria Kovalchuk Case (March 2025)',
    details: '20-year-old Ukrainian OnlyFans creator missing 10 days, found with broken spine and broken arms and legs',
    origin: 'Ukrainian',
    context: 'Russian men at a party hurt her, Dubai police claim she fell from building',
  },
]

// ============================================================================
// ALCOHOL LAWS DATA
// ============================================================================

export interface AlcoholLaw {
  violation: string
  penalty: string
  details?: string
}

export const drinkDrivingLaws: AlcoholLaw[] = [
  { violation: 'Any measurable alcohol in system', penalty: 'Criminal offence' },
  { violation: 'Fine', penalty: 'AED 20,000-100,000' },
  { violation: 'First offence', penalty: '3-month licence suspension + 23 black points' },
  { violation: 'Second offence', penalty: '6-month suspension + vehicle impound' },
  { violation: 'Third offence', penalty: 'Permanent licence cancellation + deportation risk' },
  { violation: 'Causing death while drunk', penalty: 'Minimum 1 year imprisonment + AED 100,000 fine' },
]

export const publicIntoxicationLaws: AlcoholLaw[] = [
  { violation: 'Dubai/Abu Dhabi', penalty: 'Up to AED 5,000 fine; severe cases AED 100,000 + 6 months imprisonment' },
  { violation: 'Ras Al Khaimah', penalty: 'AED 2,000 (AED 5,000 repeat)' },
  { violation: 'Sharjah', penalty: 'Zero tolerance - arrest for any alcohol presence' },
]

export const alcoholLaws: AlcoholLaw[] = [
  { violation: 'Legal drinking age', penalty: '21' },
  { violation: 'Duty-free allowance', penalty: '4 litres spirits/wine OR 24 cans beer' },
  { violation: 'Personal use illegal possession', penalty: 'Minimum AED 10,000 fine and/or 6 months detention' },
  { violation: 'Commercial purposes illegal possession', penalty: 'Minimum 2 years detention and/or AED 50,000 fine' },
  { violation: 'Operating without licence', penalty: 'Up to AED 500,000 fine' },
  { violation: 'Selling to minors', penalty: 'AED 100-500,000 + imprisonment' },
]

// ============================================================================
// LIVING COST DATA
// ============================================================================

export interface RentCost {
  propertyType: string
  location: string
  cost: string
}

export const rentCosts: RentCost[] = [
  { propertyType: '1-bed apartment', location: 'Abu Dhabi', cost: 'AED 4,000-7,000/month' },
  { propertyType: '2BR apartment', location: 'Abu Dhabi', cost: 'AED 65,000-90,000/year' },
  { propertyType: 'Villa', location: 'Abu Dhabi', cost: 'up to AED 20,000/month (2 adults + pets)' },
  { propertyType: 'Studio', location: 'Sharjah', cost: 'up to AED 20,000 (good areas)' },
]

export interface MonthlyExpense {
  expense: string
  cost: string
}

export const monthlyExpenses: MonthlyExpense[] = [
  { expense: 'Utilities + Internet', cost: 'AED 1,000' },
  { expense: 'Groceries', cost: 'AED 1,000-1,500' },
  { expense: 'Car rental/purchase', cost: 'AED 2,500' },
  { expense: 'Family food (Sharjah)', cost: '4,000 AED average' },
  { expense: 'Family insurance (Sharjah)', cost: '8,000 AED/year' },
  { expense: 'SEWA including A/C (Sharjah)', cost: '350-400 DHS' },
  { expense: 'WiFi (Sharjah)', cost: '200-300 DHS' },
]

export interface SalaryRequirement {
  scenario: string
  requiredSalary: string
}

export const salaryRequirements: SalaryRequirement[] = [
  { scenario: '2 adults in Abu Dhabi (decent lifestyle)', requiredSalary: 'AED 42,000/month' },
  { scenario: 'Target after housing deduction', requiredSalary: 'AED 18,000-20,000/month' },
  { scenario: '"Very tight" budget for all costs', requiredSalary: '10K AED/month' },
  { scenario: 'Family of 3 (Sharjah)', requiredSalary: '18-20K AED' },
  { scenario: 'Comfort for family of 3 (Sharjah)', requiredSalary: '25K AED' },
]

export interface CostSavingMeasure {
  measure: string
  monthlySavings: string
}

export const costSavingMeasures: CostSavingMeasure[] = [
  { measure: 'Move to Sharjah or flatmate', monthlySavings: 'AED 2,000-5,000' },
  { measure: 'Cook at home instead of eating out', monthlySavings: 'AED 800-2,000' },
  { measure: 'Metro instead of car', monthlySavings: 'AED 800-2,000' },
]

// ============================================================================
// DEWA BILLS DATA
// ============================================================================

export interface DewaBill {
  propertyType: string
  monthlyCost: string
}

export const normalDewaBills: DewaBill[] = [
  { propertyType: '1-bedroom apartment (normal)', monthlyCost: 'AED 150-200' },
  { propertyType: 'Studio/1BR (high reported)', monthlyCost: 'AED 500-740' },
  { propertyType: 'August summer months', monthlyCost: 'AED 1,000+' },
]

export interface AbnormalDewaCase {
  issue: string
  amount: string
}

export const abnormalDewaCases: AbnormalDewaCase[] = [
  { issue: 'Water leak causing bill', amount: 'Dh20,000+' },
  { issue: 'Annual electricity for 2 properties', amount: 'nearly 60,000 AED' },
]

// ============================================================================
// DIVORCE DATA
// ============================================================================

export interface DivorceFact {
  fact: string
  details: string
}

export const divorceFacts: DivorceFact[] = [
  { fact: 'Court', details: 'Family Court (Personal Status Court) in Garhoud, Dubai' },
  { fact: 'For non-Muslim expats', details: 'New court makes divorce "easy breezy" - no need to prove abuse' },
  { fact: 'Process', details: 'File at Family Guidance Court, attempt reconciliation, then referral' },
  { fact: 'For Muslim males', details: 'Wife\'s salary/savings affects alimony calculations' },
  { fact: 'Lawyers', details: 'AMCO Law Firm and other specialized divorce lawyers available' },
]

// ============================================================================
// KAFALA/VISA ISSUES DATA
// ============================================================================

export interface VisaIssue {
  issue: string
  details: string
}

export const visaIssues: VisaIssue[] = [
  { issue: 'Visa transfer', details: 'Employer can reject visa transfer requests' },
  { issue: 'Freezone companies', details: 'Can change employer without same restrictions' },
  { issue: 'Employment visa rejections', details: 'Common (employer-applied, rejected on Saturday)' },
  { issue: 'Visa cancellation', details: 'Cannot be processed while outside country' },
  { issue: 'Passport retention', details: 'Employer holding passport = labor law violation' },
  { issue: 'MOHRE intervention', details: 'Can resolve passport retention issues' },
  { issue: 'Employment visa ban', details: 'Concern after resignation (employer can cause issues)' },
  { issue: 'Golden Visa', details: 'Sponsored by family allows self-sponsorship flexibility' },
]

// ============================================================================
// RTA DRIVING TEST DATA
// ============================================================================

export interface DrivingTestIssue {
  issue: string
  details: string
}

export const drivingTestIssues: DrivingTestIssue[] = [
  { issue: 'Multiple failures', details: 'Common - 3-5 times not unusual' },
  { issue: 'After 5 failures', details: 'Must undergo another assessment from driving school' },
  { issue: 'Dispute fee', details: '~1,000 AED to review footage' },
  { issue: 'Common fail reasons', details: 'Stopped on slope without handbrake, minor mistakes (13 allowed)' },
  { issue: 'Internal assessment', details: 'Failures (instructor failed on purpose allegations)' },
  { issue: 'Road test fee', details: '420 dirham for physical license' },
]

// ============================================================================
// ORGAN TRANSPLANT LAW DATA
// ============================================================================

export interface OrganTransplantLaw {
  fact: string
  details: string
}

export const organTransplantLaws: OrganTransplantLaw[] = [
  { fact: 'Law', details: 'Federal Decree-Law No. 15 of 2025' },
  { fact: 'Permits', details: 'Use of animal-based and lab-grown organs' },
  { fact: 'Penalties', details: 'Strict penalties for violations' },
  { fact: 'Requirements', details: 'Only after extensive clinical and laboratory testing confirms safety' },
  { fact: 'Practitioners', details: 'Only licensed doctors can perform removal/transplantation' },
  { fact: '2016 law', details: 'Allowed human organ transplantation from living donors and deceased' },
]

// ============================================================================
// SUBREDDITS DATA
// ============================================================================

export interface SubredditData {
  name: string
  primaryFocus: string
  commonTopics: string[]
  sentimentTrend: string
  userActivity: string
}

export const subreddits: SubredditData[] = [
  {
    name: 'r/dubai',
    primaryFocus: 'Dubai expat experiences',
    commonTopics: ['Rent', 'Salary', 'Discrimination', 'Fraud', 'Police', 'Leaving'],
    sentimentTrend: 'Increasingly negative (2025-2026)',
    userActivity: 'High - active discussions on all issues',
  },
  {
    name: 'r/uae',
    primaryFocus: 'UAE-wide topics',
    commonTopics: ['Employment', 'Salary cuts', 'Layoffs', 'Discrimination'],
    sentimentTrend: 'Negative (regional conflict impact)',
    userActivity: 'High - crisis-related discussions',
  },
  {
    name: 'r/abudhabi',
    primaryFocus: 'Abu Dhabi living',
    commonTopics: ['Rent increases', 'Salary', 'Cost of living'],
    sentimentTrend: 'Negative (housing affordability)',
    userActivity: 'Medium-High',
  },
  {
    name: 'r/sharjah',
    primaryFocus: 'Sharjah cost of living',
    commonTopics: ['Affordable living', 'Budget management'],
    sentimentTrend: 'Mixed',
    userActivity: 'Medium',
  },
]

// ============================================================================
// KEY STATISTICS DASHBOARD
// ============================================================================

export interface KeyStatistic {
  category: string
  metric: string
  value: string
  trend: string
}

export const keyStatistics: KeyStatistic[] = [
  // Economic Indicators
  { category: 'Economic', metric: 'Salary cuts', value: 'Up to 50%', trend: 'Increasing' },
  { category: 'Economic', metric: 'Rent increases attempted', value: '15-20%', trend: 'High' },
  { category: 'Economic', metric: 'Job losses documented', value: 'Logistics/Travel/Tourism', trend: 'Increasing' },
  { category: 'Economic', metric: 'Ready property crash', value: '-43.5%', trend: 'Sharp decline' },
  // Social Indicators
  { category: 'Social', metric: 'Mental health disorder prevalence', value: '57%', trend: 'High' },
  { category: 'Social', metric: 'Depression cases undiagnosed', value: '74%', trend: 'Very High' },
  { category: 'Social', metric: 'Expats with work-related mental health issues', value: '83%', trend: 'Very High' },
  // Crime Indicators
  { category: 'Crime', metric: 'Credit card fraud (sample amounts)', value: 'AED 3,000-13,000', trend: 'Common' },
  { category: 'Crime', metric: 'Real estate broker fraud', value: 'AED 30,000+', trend: 'Documented' },
  // Legal/HR Indicators
  { category: 'Legal', metric: 'MOHRE complaint resolution', value: '14 days', trend: 'Standard' },
  { category: 'Legal', metric: 'Mass trial defendants', value: '44 of 84 convicted', trend: 'Ongoing' },
  { category: 'Legal', metric: 'Life sentences (activists)', value: '5+ documented', trend: 'Ongoing' },
]

// ============================================================================
// SYNTHESIZED FINDINGS
// ============================================================================

export interface SynthesizedFinding {
  category: string
  priority: 'High Concern' | 'Medium-High Concern' | 'Medium Concern'
  issues: { issue: string; details: string }[]
}

export const synthesizedFindings: SynthesizedFinding[] = [
  {
    category: 'Economic Vulnerability',
    priority: 'High Concern',
    issues: [
      { issue: 'Regional conflict impact (2026)', details: 'Triggering layoffs and 50%+ salary cuts' },
      { issue: 'Sectors most affected', details: 'logistics, travel, tourism, hospitality, retail' },
      { issue: 'Legal protection', details: 'Federal Decree-Law No. 33 of 2021 provides protection but employers circumventing' },
      { issue: 'Unpaid leave', details: 'Becoming common despite illegality' },
      { issue: 'MOHRE resolution time', details: '14 days' },
    ],
  },
  {
    category: 'Discrimination',
    priority: 'High Concern',
    issues: [
      { issue: 'Housing discrimination', details: 'Black Africans face documented housing discrimination' },
      { issue: 'Job/salary discrimination', details: 'South Asians face documented discrimination' },
      { issue: 'Harshest discrimination', details: 'Black women face both racism and sexual harassment' },
      { issue: 'Wage gaps (domestic work)', details: 'Filipinas AED 3,500/month vs Africans AED 2,700/month' },
      { issue: 'Key quote', details: '"Racism can literally get you killed"' },
    ],
  },
  {
    category: 'Financial Crimes',
    priority: 'Medium-High Concern',
    issues: [
      { issue: 'Credit card fraud range', details: 'AED 3,000-10,000+ stolen' },
      { issue: 'Bank refusal', details: 'Banks sometimes refuse to return funds' },
      { issue: 'Methods', details: 'Card cloning both online and POS machine based' },
      { issue: 'Banks mentioned', details: 'Emirates NBD, ADCB, CBD' },
    ],
  },
  {
    category: 'Human Trafficking/Exploitation',
    priority: 'High Concern',
    issues: [
      { issue: 'Charles Mwesigwa (BBC 2025)', details: 'Targeting Ugandan/Nigerian women, "Dubai porta potty" parties' },
      { issue: 'Christy Gold network', details: '$15,000 forced debts' },
      { issue: 'Maria Kovalchuk', details: 'Ukrainian woman found with broken spine (March 2025)' },
      { issue: 'Domestic worker methods', details: 'Passport seizure, confinement, phone bans' },
      { issue: 'Modern slavery case', details: 'High Court ordered UAE to pay £260,000 (Jan 2026)' },
    ],
  },
  {
    category: 'Mental Health',
    priority: 'High Concern',
    issues: [
      { issue: 'Adults with mental health disorder', details: '57%' },
      { issue: 'Depression cases going undiagnosed', details: '74%' },
      { issue: 'Expats with work-related mental health issues', details: '83%' },
      { issue: 'Expat-specific challenges', details: 'Isolation, visa tied to employment, no social safety net' },
    ],
  },
  {
    category: 'Legal System Concerns',
    priority: 'Medium-High Concern',
    issues: [
      { issue: 'Defendants convicted', details: '44+ in mass trials' },
      { issue: 'Life sentences', details: 'Ahmed Mansoor, Nasser bin Ghaith, etc.' },
      { issue: 'Violations', details: 'Solitary confinement, restricted case access' },
      { issue: 'Sharjah', details: 'Zero tolerance' },
      { issue: 'Drink driving fine', details: 'AED 20,000-100,000 + licence suspension' },
      { issue: 'Deportation risk', details: 'For felony-level alcohol offenses' },
    ],
  },
  {
    category: 'Housing Issues',
    priority: 'Medium Concern',
    issues: [
      { issue: 'Illegal increases', details: 'Despite RERA index' },
      { issue: 'Sharjah law', details: '3-year rent freeze, then max 5% increase' },
      { issue: 'DEWA bill spikes', details: '40%+ without explanation' },
      { issue: 'Problem cases', details: 'Water leaks causing Dh20,000+ bills' },
      { issue: 'Summer months', details: 'Significantly higher' },
    ],
  },
  {
    category: 'Real Estate Market',
    priority: 'Medium Concern',
    issues: [
      { issue: 'Ready property crash', details: '-43.5% (Feb 2026 war impact)' },
      { issue: 'Price increase (2021-2025)', details: '70% cumulative' },
      { issue: '2026 forecast', details: '10-15% correction (S&P Global)' },
      { issue: 'Bond issuance (2025)', details: 'US$7 billion record' },
    ],
  },
]

// ============================================================================
// WOMEN'S SAFETY POSTS
// ============================================================================

export interface WomensSafetyPost {
  title: string
  date: string
  keyFacts: string
}

export const womensSafetyPosts: WomensSafetyPost[] = [
  { title: 'Followed by a man in Mall of the Emirates', date: 'Feb 6, 2026', keyFacts: 'Older Arab man in kandura following woman' },
  { title: 'Swimming at night in kite beach - chased', date: 'Jun 17, 2025', keyFacts: 'Kite Beach harassment incident' },
  { title: 'Women of Dubai, what do you do when men are creepy/stare at you?', date: 'May 9, 2024', keyFacts: '"The amount of harassment I\'ve faced here as a woman is crazy"' },
  { title: 'Helped a woman being followed in Dubai today', date: 'Nov 16, 2025', keyFacts: 'Common occurrence, also happened in Sharjah' },
  { title: 'Disturbing creeps in Dubai', date: 'Nov 29, 2025', keyFacts: 'Woman being dragged into a car reported' },
]

// ============================================================================
// DEPORTATION/ARREST POSTS
// ============================================================================

export interface DeportationPost {
  title: string
  date: string
  keyFacts: string
}

export const deportationPosts: DeportationPost[] = [
  { title: 'Gave it all i had', date: 'Mar 29, 2026', keyFacts: 'UAE silently cancelling visas for countries pass holders not in country' },
  { title: 'Girlfriend may have been permanently banned at Dubai airport', date: 'Mar 14, 2026', keyFacts: 'Seeking appeal process' },
  { title: 'brother-in-law arrested in UAE for overstay', date: 'Apr 7, 2026', keyFacts: '3 months jail + deportation, no court hearing' },
  { title: 'Warsan jail', date: 'Jan 31, 2025', keyFacts: 'Person held 20 days and deported without knowing why arrested' },
  { title: 'My husband caught by CID for no reason', date: 'Mar 3, 2025', keyFacts: 'Abu Dhabi CID custody issue' },
]

// ============================================================================
// EDUCATION COSTS DATA
// ============================================================================

export interface EducationCost {
  title: string
  date: string
  cost: string
  notes: string
}

export const educationCosts: EducationCost[] = [
  { title: 'New mom appalled by school fees in Dubai', date: 'Sep 10, 2025', cost: 'Wide range', notes: 'Research via KHDA website' },
  { title: 'is 35k annually enough for school fees for a special needs child', date: 'Jan 12, 2026', cost: 'No', notes: 'Barely cuts it' },
  { title: 'Should I move my kids to a cheaper school to save 50K AED', date: 'Sep 18, 2025', cost: '153,000 AED/year', notes: 'For 3 kids' },
  { title: 'Over Dh200,000 fees: Dubai to get one of most expensive schools', date: 'Jan 14, 2025', cost: 'Dh116,000-Dh206,000', notes: 'Annual fees' },
  { title: 'Is it just me or are schools here ridiculous', date: 'Jan 13, 2026', cost: '100k tuition', notes: 'For Gr12' },
]

// ============================================================================
// HEALTHCARE COSTS DATA
// ============================================================================

export interface HealthcareCost {
  title: string
  date: string
  cost: string
  notes: string
}

export const healthcareCosts: HealthcareCost[] = [
  { title: 'Hospital bill', date: 'Aug 7, 2024', cost: 'AED 9,900', notes: 'Maternity package advertised, turned out different' },
  { title: 'Why am I getting quoted $17k for health insurance?', date: 'Apr 21, 2024', cost: '13-17k AED quoted', notes: '' },
  { title: 'The medical insurance quote I got is 99k', date: 'Sep 10, 2024', cost: '99k AED', notes: 'Surgery led to premium increase 4k to 19k' },
  { title: 'Not so expensive hospital for a tourist', date: 'Apr 4, 2021', cost: '130-150 AED', notes: 'Iranian hospital for doctor visit' },
]

// ============================================================================
// QUERY CATEGORIES (ALL)
// ============================================================================

export const queryCategories: QueryCategory[] = [
  { name: 'Negative Sentiment', icon: 'ThumbsDown', color: 'rose', posts: negativeSentimentPosts },
  { name: 'Scams & Fraud', icon: 'AlertTriangle', color: 'orange', posts: scamsFraudPosts },
  { name: 'Housing Crisis', icon: 'Home', color: 'red', posts: housingCrisisPosts },
  { name: 'Salary Cuts', icon: 'PiggyBank', color: 'amber', posts: salaryCutsPosts },
  { name: 'Discrimination', icon: 'Users', color: 'purple', posts: discriminationPosts },
  { name: 'Police Misconduct', icon: 'ShieldAlert', color: 'slate', posts: policeMisconductPosts },
  { name: 'Job Losses', icon: 'Briefcase', color: 'blue', posts: jobLossesPosts },
]

// ============================================================================
// SHARJAH COST OF LIVING
// ============================================================================

export interface SharjahCost {
  metric: string
  value: string
}

export const sharjahCosts: SharjahCost[] = [
  { metric: 'Average monthly food (family)', value: '4K AED' },
  { metric: 'Family insurance (yearly)', value: '8K AED' },
  { metric: 'Studio rent (good areas)', value: 'up to 20K AED' },
  { metric: 'SEWA including A/C', value: '350-400 DHS' },
  { metric: 'WiFi', value: '200-300 DHS' },
  { metric: 'Salary with mobile allowance', value: '7,500 AED + 500 AED' },
  { metric: 'Indian family of 3', value: '18-20K AED' },
  { metric: 'Family of 3 (comfort questioned)', value: '25K AED' },
]

// ============================================================================
// COMPLETE EXPORT
// ============================================================================

export const redditData = {
  executionMetadata,
  focusAreas,
  queryPatterns,
  queryCategories,
  labourLawProvisions,
  gratuityTiers,
  sectorsAffected,
  sectorsNormal,
  mentalHealthStats,
  bankingFraudCases,
  fraudBanks,
  realEstateMetrics,
  massTrialData,
  keyPrisoners,
  kafalaIssues,
  domesticWorkerWages,
  domesticWorkerAgencies,
  abuseMethods,
  sexTraffickingCases,
  drinkDrivingLaws,
  publicIntoxicationLaws,
  alcoholLaws,
  rentCosts,
  monthlyExpenses,
  salaryRequirements,
  costSavingMeasures,
  normalDewaBills,
  abnormalDewaCases,
  divorceFacts,
  visaIssues,
  drivingTestIssues,
  organTransplantLaws,
  subreddits,
  keyStatistics,
  synthesizedFindings,
  womensSafetyPosts,
  deportationPosts,
  educationCosts,
  healthcareCosts,
  sharjahCosts,
}

export default redditData
