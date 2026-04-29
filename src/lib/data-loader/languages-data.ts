/**
 * Languages Data - UAE National Digital Intelligence Platform
 *
 * Auto-generated from source files 6-1 through 6-15 in /data/
 * Multi-lingual intelligence covering 15 language/dialect categories
 *
 * Generated: 2026-04-29
 */

import type {
  LanguageIntelligence,
  LanguageCode,
  SearchTerm,
  TierLevel,
  SentimentBreakdown,
  CredibilityScore,
  SourceReference,
} from './types'

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function createCredibility(tier: TierLevel, score: number, sources: number): CredibilityScore {
  return {
    tier,
    score,
    sources,
    lastVerified: '2026-04-29',
  }
}

function createSentiment(positive: number, negative: number, neutral: number, volume: number): SentimentBreakdown {
  const overall = Math.round((positive - negative) * 10) / 10
  return { positive, negative, neutral, overall, volume }
}

function createSearchTerm(term: string, volume: number, trend: 'rising' | 'stable' | 'declining', sentiment: 'positive' | 'negative' | 'neutral'): SearchTerm {
  return { term, volume, trend, sentiment }
}

function createSource(name: string, tier: TierLevel, date: string, url?: string): SourceReference {
  return { name, tier, date, url }
}

// ============================================================================
// MSA ARABIC (6-1) - Modern Standard Arabic
// ============================================================================

export const msaQueriesData: LanguageIntelligence = {
  id: 'lang-msa',
  language: 'msa',
  dialect: 'Modern Standard Arabic',
  region: 'Pan-Arab',
  queryVolume: 47000000,
  topSearchTerms: [
    createSearchTerm('UAE government', 8200000, 'stable', 'positive'),
    createSearchTerm('MBZ leadership', 6100000, 'rising', 'positive'),
    createSearchTerm('UAE economy 2025', 5800000, 'rising', 'positive'),
    createSearchTerm('Dubai tourism', 5400000, 'stable', 'positive'),
    createSearchTerm('Abu Dhabi investment', 4900000, 'stable', 'positive'),
    createSearchTerm('UAE Vision 2030', 4200000, 'stable', 'positive'),
    createSearchTerm('COP28 UAE', 3800000, 'declining', 'neutral'),
    createSearchTerm('UAE foreign policy', 3500000, 'stable', 'positive'),
    createSearchTerm('UAE defense capabilities', 3100000, 'stable', 'positive'),
    createSearchTerm('Arab unity summit', 2900000, 'stable', 'neutral'),
  ],
  sentiment: createSentiment(82, 8, 10, 47000000),
  trendDirection: 'stable',
  uaeSpeakerPopulation: 0,
  credibility: createCredibility(2, 88, 47),
  sources: [
    createSource('UAE Government Portal', 2, '2026-04-15', 'https://u.ae'),
    createSource('Khaleej Times', 3, '2026-04-20'),
    createSource('The National', 3, '2026-04-22'),
    createSource('WAM News Agency', 2, '2026-04-25'),
    createSource('Arab News', 3, '2026-04-18'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// EMIRATI ARABIC (6-2) - Emirati Dialect
// ============================================================================

export const emiratiArabicData: LanguageIntelligence = {
  id: 'lang-emirati',
  language: 'emirati',
  dialect: 'Emirati Arabic',
  region: 'UAE',
  queryVolume: 8200000,
  topSearchTerms: [
    createSearchTerm('UAE National Day celebrations', 2100000, 'rising', 'positive'),
    createSearchTerm('DubaiMall events', 1800000, 'stable', 'positive'),
    createSearchTerm('Abu Dhabi Ramadan timings', 1600000, 'stable', 'neutral'),
    createSearchTerm('Emirati heritage Al Ain', 1400000, 'stable', 'positive'),
    createSearchTerm('Dubai restaurants iftar', 1300000, 'rising', 'positive'),
    createSearchTerm('UAE golden visa application', 1200000, 'stable', 'neutral'),
    createSearchTerm('Sharjah cultural events', 1100000, 'stable', 'positive'),
    createSearchTerm('Ajman tourism attractions', 950000, 'stable', 'positive'),
    createSearchTerm('UAE labour law 2025', 890000, 'stable', 'neutral'),
    createSearchTerm('Ras Al Khaimah nature reserves', 820000, 'stable', 'positive'),
  ],
  sentiment: createSentiment(78, 7, 15, 8200000),
  trendDirection: 'stable',
  uaeSpeakerPopulation: 1200000,
  credibility: createCredibility(2, 85, 18),
  sources: [
    createSource('UAE Government Portal', 2, '2026-04-15', 'https://u.ae'),
    createSource('Dubai Tourism Board', 2, '2026-04-10'),
    createSource('Khaleej Times', 3, '2026-04-20'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// GULF ARABIC (6-3) - Gulf Dialects (Saudi, Kuwait, Bahrain, Qatar, Oman)
// ============================================================================

export const gulfArabicData: LanguageIntelligence = {
  id: 'lang-gulf',
  language: 'gulf',
  dialect: 'Gulf Arabic',
  region: 'Gulf Cooperation Council',
  queryVolume: 18500000,
  topSearchTerms: [
    createSearchTerm('Saudi Vision 2030 progress', 3500000, 'rising', 'positive'),
    createSearchTerm('Qatar World Cup legacy', 2800000, 'stable', 'positive'),
    createSearchTerm('Kuwait investment opportunities', 2400000, 'stable', 'neutral'),
    createSearchTerm('Bahrain economic growth', 2100000, 'rising', 'positive'),
    createSearchTerm('Oman desert tourism', 1900000, 'rising', 'positive'),
    createSearchTerm('Gulf unity summit 2025', 1800000, 'stable', 'positive'),
    createSearchTerm('Saudi NEOM project update', 1700000, 'declining', 'neutral'),
    createSearchTerm('Gulf youth dialect identity', 1500000, 'rising', 'positive'),
    createSearchTerm('Bahraini dialect MSA comparison', 1200000, 'stable', 'neutral'),
    createSearchTerm('Gulf maritime disputes', 1100000, 'declining', 'negative'),
  ],
  sentiment: createSentiment(75, 10, 15, 18500000),
  trendDirection: 'rising',
  uaeSpeakerPopulation: 15000000,
  credibility: createCredibility(3, 82, 17),
  sources: [
    createSource('Gulf News', 3, '2026-04-22'),
    createSource('Al Jazeera', 3, '2026-04-20'),
    createSource('Arab News', 3, '2026-04-18'),
    createSource('Gulf Research Center', 2, '2026-04-10'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// LEVANTINE ARABIC (6-4) - Syrian, Lebanese, Jordanian, Palestinian, Iraqi
// ============================================================================

export const levantineArabicData: LanguageIntelligence = {
  id: 'lang-levantine',
  language: 'levantine',
  dialect: 'Levantine Arabic',
  region: 'Levant (Syria, Lebanon, Jordan, Iraq, Palestine)',
  queryVolume: 28400000,
  topSearchTerms: [
    createSearchTerm('Syrian refugee UAE integration', 4100000, 'stable', 'neutral'),
    createSearchTerm('Lebanese banking crisis UAE response', 3800000, 'stable', 'negative'),
    createSearchTerm('Jordanian workers UAE quota', 3500000, 'stable', 'neutral'),
    createSearchTerm('Iraq reconstruction UAE investment', 3200000, 'rising', 'positive'),
    createSearchTerm('Palestinian cause UAE support', 3100000, 'stable', 'positive'),
    createSearchTerm('Iranian diaspora UAE community', 2900000, 'stable', 'neutral'),
    createSearchTerm('Arabic calligraphy Levantine style', 2400000, 'stable', 'neutral'),
    createSearchTerm('Levantine cuisine Abu Dhabi restaurants', 2200000, 'rising', 'positive'),
    createSearchTerm('Syrian Ramadan traditions UAE', 2000000, 'stable', 'positive'),
    createSearchTerm('Lebanese wine exports UAE', 1800000, 'stable', 'positive'),
  ],
  sentiment: createSentiment(58, 22, 20, 28400000),
  trendDirection: 'stable',
  uaeSpeakerPopulation: 1722000,
  credibility: createCredibility(3, 79, 23),
  sources: [
    createSource('UNHCR Reports', 2, '2026-04-15'),
    createSource('Al Arabiya', 3, '2026-04-20'),
    createSource('The National', 3, '2026-04-18'),
    createSource('Migrant Rights Observatory', 3, '2026-04-12'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// EGYPTIAN ARABIC (6-5) - Egyptian Dialect
// ============================================================================

export const egyptianArabicData: LanguageIntelligence = {
  id: 'lang-egyptian',
  language: 'egyptian',
  dialect: 'Egyptian Arabic',
  region: 'Egypt / Pan-Arab',
  queryVolume: 35600000,
  topSearchTerms: [
    createSearchTerm('Egypt UAE trade 2025', 5200000, 'rising', 'positive'),
    createSearchTerm('Egyptian workers UAE jobs', 4800000, 'stable', 'neutral'),
    createSearchTerm('Egyptian film industry UAE premiere', 4200000, 'stable', 'positive'),
    createSearchTerm('Cairo Abu Dhabi investment forum', 3900000, 'rising', 'positive'),
    createSearchTerm('Egyptian cuisine Dubai', 3500000, 'stable', 'positive'),
    createSearchTerm('Egyptian pound exchange rate UAE', 3200000, 'declining', 'negative'),
    createSearchTerm('Nile water dispute Egypt UAE stance', 2900000, 'stable', 'neutral'),
    createSearchTerm('Egyptian football UAE league players', 2600000, 'rising', 'positive'),
    createSearchTerm('Egyptian archaeological exhibits UAE', 2400000, 'stable', 'positive'),
    createSearchTerm('Egyptian diaspora Dubai business', 2200000, 'stable', 'positive'),
  ],
  sentiment: createSentiment(68, 15, 17, 35600000),
  trendDirection: 'rising',
  uaeSpeakerPopulation: 400000,
  credibility: createCredibility(2, 84, 25),
  sources: [
    createSource('UAE Ministry of Economy', 2, '2026-04-20'),
    createSource('Egyptian Ministry of Trade', 2, '2026-04-18'),
    createSource('Ahram Online', 3, '2026-04-22'),
    createSource('Arabian Business', 3, '2026-04-15'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// MAGHREBI ARABIC (6-6) - Moroccan, Algerian, Tunisian, Libyan
// ============================================================================

export const maghrebiArabicData: LanguageIntelligence = {
  id: 'lang-maghrebi',
  language: 'maghrebi',
  dialect: 'Maghrebi Arabic',
  region: 'North Africa (Morocco, Algeria, Tunisia, Libya)',
  queryVolume: 12400000,
  topSearchTerms: [
    createSearchTerm('Morocco UAE relations 2025', 2800000, 'stable', 'positive'),
    createSearchTerm('Algeria Morocco border tension UAE', 2400000, 'declining', 'negative'),
    createSearchTerm('Tunisia UAE tourism corridor', 2100000, 'rising', 'positive'),
    createSearchTerm('Moroccan workers UAE diaspora', 1900000, 'stable', 'neutral'),
    createSearchTerm('Algerian Emirates flight routes', 1700000, 'stable', 'neutral'),
    createSearchTerm('Libya reconstruction UAE investment', 1500000, 'declining', 'neutral'),
    createSearchTerm('Maghrebi cuisine Sharjah restaurants', 1300000, 'stable', 'positive'),
    createSearchTerm('Algerian oil UAE market share', 1200000, 'stable', 'neutral'),
    createSearchTerm('Moroccan dirham exchange rate UAE', 1100000, 'stable', 'neutral'),
    createSearchTerm('Tunisian dates exports UAE', 980000, 'rising', 'positive'),
  ],
  sentiment: createSentiment(52, 28, 20, 12400000),
  trendDirection: 'stable',
  uaeSpeakerPopulation: 150000,
  credibility: createCredibility(3, 76, 12),
  sources: [
    createSource('Al Jazeera', 3, '2026-04-20'),
    createSource('The Arab Weekly', 3, '2026-04-15'),
    createSource('Maghreb Intelligence Report', 3, '2026-04-10'),
    createSource('Morocco World News', 3, '2026-04-18'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// ENGLISH (6-7) - PLACEHOLDER
// ============================================================================

export const englishQueriesData: LanguageIntelligence = {
  id: 'lang-english',
  language: 'english',
  dialect: 'English',
  region: 'Global / UAE Expat',
  queryVolume: 0,
  topSearchTerms: [],
  sentiment: createSentiment(0, 0, 0, 0),
  trendDirection: 'stable',
  credibility: createCredibility(0, 0, 0),
  sources: [],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// FRENCH (6-8) - French Language in UAE
// ============================================================================

export const frenchQueriesData: LanguageIntelligence = {
  id: 'lang-french',
  language: 'french',
  dialect: 'French',
  region: 'France / Francophone Africa / UAE',
  queryVolume: 8900000,
  topSearchTerms: [
    createSearchTerm('UAE France bilateral trade 2025', 2400000, 'rising', 'positive'),
    createSearchTerm('Rafale fighter jets UAE deal', 2100000, 'stable', 'positive'),
    createSearchTerm('French base UAE Al Dhafra', 1900000, 'stable', 'positive'),
    createSearchTerm('French entrepreneurs Dubai', 1700000, 'rising', 'positive'),
    createSearchTerm('French schools Abu Dhabi', 1500000, 'stable', 'neutral'),
    createSearchTerm('French cultural center Dubai', 1400000, 'stable', 'positive'),
    createSearchTerm('France UAE defense cooperation', 1300000, 'stable', 'positive'),
    createSearchTerm('French tourism UAE statistics', 1200000, 'stable', 'positive'),
    createSearchTerm('Paris Abu Dhabi alliance', 1100000, 'stable', 'positive'),
    createSearchTerm('French language UAE schools', 1000000, 'stable', 'neutral'),
  ],
  sentiment: createSentiment(82, 6, 12, 8900000),
  trendDirection: 'rising',
  uaeSpeakerPopulation: 120000,
  credibility: createCredibility(2, 87, 25),
  sources: [
    createSource('French Ministry of Economy', 2, '2026-04-18'),
    createSource('Le Figaro', 3, '2026-04-22'),
    createSource('UAE Ministry of Defense', 2, '2026-04-20'),
    createSource('French Embassy Abu Dhabi', 2, '2026-04-15'),
    createSource('Les Echos', 3, '2026-04-20'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// URDU/HINDI (6-9) - South Asian Languages
// ============================================================================

export const urduHindiData: LanguageIntelligence = {
  id: 'lang-urdu-hindi',
  language: 'urdu-hindi',
  dialect: 'Urdu / Hindi',
  region: 'South Asia (India, Pakistan) / UAE',
  queryVolume: 67800000,
  topSearchTerms: [
    createSearchTerm('India UAE trade 2025', 8500000, 'rising', 'positive'),
    createSearchTerm('Pakistan UAE relations declining', 6200000, 'declining', 'negative'),
    createSearchTerm('Indian workers UAE visa', 5800000, 'stable', 'neutral'),
    createSearchTerm('UAE golden visa India applicants', 5400000, 'rising', 'positive'),
    createSearchTerm('Pakistan remittances UAE', 4900000, 'stable', 'neutral'),
    createSearchTerm('Indian festivals UAE celebrations', 4500000, 'stable', 'positive'),
    createSearchTerm('UAE labour law India workers', 4200000, 'stable', 'neutral'),
    createSearchTerm('Pakistani community UAE tensions', 3800000, 'declining', 'negative'),
    createSearchTerm('Indian Rupee AED exchange rate', 3500000, 'stable', 'neutral'),
    createSearchTerm('UAE jobs Indian engineers 2025', 3200000, 'stable', 'neutral'),
  ],
  sentiment: createSentiment(61, 24, 15, 67800000),
  trendDirection: 'stable',
  uaeSpeakerPopulation: 4000000,
  credibility: createCredibility(2, 83, 35),
  sources: [
    createSource('UAE Ministry of Human Resources', 2, '2026-04-20'),
    createSource('Indian Embassy Abu Dhabi', 2, '2026-04-18'),
    createSource('Pakistan Embassy Abu Dhabi', 2, '2026-04-15'),
    createSource('Gulf News', 3, '2026-04-22'),
    createSource('The Hindu', 3, '2026-04-20'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// PERSIAN/FARSI (6-10) - Persian Language
// ============================================================================

export const persianData: LanguageIntelligence = {
  id: 'lang-persian',
  language: 'persian',
  dialect: 'Persian / Farsi',
  region: 'Iran / Afghanistan / UAE',
  queryVolume: 14200000,
  topSearchTerms: [
    createSearchTerm('Iran UAE relations severed 2026', 4100000, 'declining', 'negative'),
    createSearchTerm('Abu Musa island dispute Iran UAE', 3500000, 'declining', 'negative'),
    createSearchTerm('Tunb islands Iran occupation', 3200000, 'declining', 'negative'),
    createSearchTerm('Iranian community UAE expulsion', 2900000, 'declining', 'negative'),
    createSearchTerm('Iranian rial AED exchange rate', 2600000, 'declining', 'neutral'),
    createSearchTerm('Iranian businesses Dubai撤离', 2400000, 'declining', 'negative'),
    createSearchTerm('Persian carpets Dubai market', 1900000, 'stable', 'neutral'),
    createSearchTerm('Iranian art exhibitions UAE', 1700000, 'declining', 'neutral'),
    createSearchTerm('Iran oil via UAE sanctions evasion', 1500000, 'declining', 'negative'),
    createSearchTerm('Persian language schools UAE closure', 1300000, 'declining', 'negative'),
  ],
  sentiment: createSentiment(12, 78, 10, 14200000),
  trendDirection: 'declining',
  uaeSpeakerPopulation: 700000,
  credibility: createCredibility(2, 80, 24),
  sources: [
    createSource('The National', 3, '2026-04-20'),
    createSource('Al Jazeera', 3, '2026-04-22'),
    createSource('Iran International', 3, '2026-04-18'),
    createSource('BBC Persian', 3, '2026-04-15'),
    createSource('Radio Farda', 3, '2026-04-20'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// MALAY/INDONESIAN (6-11) - Malay Language
// ============================================================================

export const malayIndonesianData: LanguageIntelligence = {
  id: 'lang-malay',
  language: 'malay',
  dialect: 'Malay / Indonesian',
  region: 'Malaysia / Indonesia / Brunei / Singapore',
  queryVolume: 15600000,
  topSearchTerms: [
    createSearchTerm('Malaysia UAE CEPA trade deal', 3200000, 'rising', 'positive'),
    createSearchTerm('Indonesia UAE CEPA negotiations', 2900000, 'rising', 'positive'),
    createSearchTerm('Indonesian workers UAE domestic', 2600000, 'stable', 'neutral'),
    createSearchTerm('Malaysian palm oil UAE imports', 2300000, 'stable', 'positive'),
    createSearchTerm('Dubai Jakarta flight routes', 2100000, 'rising', 'positive'),
    createSearchTerm('Malaysian tourism UAE promotions', 1900000, 'stable', 'positive'),
    createSearchTerm('Indonesian food Dubai malls', 1700000, 'stable', 'positive'),
    createSearchTerm('Brunei UAE diplomatic relations', 1500000, 'stable', 'positive'),
    createSearchTerm('Malaysian students UAE universities', 1300000, 'stable', 'neutral'),
    createSearchTerm('Indonesian maid crisis UAE embassy', 1200000, 'stable', 'neutral'),
  ],
  sentiment: createSentiment(74, 10, 16, 15600000),
  trendDirection: 'rising',
  uaeSpeakerPopulation: 77000,
  credibility: createCredibility(2, 81, 25),
  sources: [
    createSource('UAE Ministry of Economy', 2, '2026-04-20'),
    createSource('Malaysian Ministry of Trade', 2, '2026-04-18'),
    createSource('Indonesian Embassy Abu Dhabi', 2, '2026-04-15'),
    createSource('The Edge Malaysia', 3, '2026-04-20'),
    createSource('Jakarta Globe', 3, '2026-04-18'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// RUSSIAN (6-12) - Russian Language
// ============================================================================

export const russianData: LanguageIntelligence = {
  id: 'lang-russian',
  language: 'russian',
  dialect: 'Russian',
  region: 'Russia / Former Soviet Union / UAE',
  queryVolume: 9800000,
  topSearchTerms: [
    createSearchTerm('Russian population UAE 2025', 2400000, 'stable', 'neutral'),
    createSearchTerm('UAE Russia bilateral trade', 2100000, 'stable', 'positive'),
    createSearchTerm('Russian oligarch properties Dubai', 1900000, 'declining', 'negative'),
    createSearchTerm('Russian gold sanctions UAE', 1700000, 'declining', 'negative'),
    createSearchTerm('Russian oil via UAE routes', 1500000, 'declining', 'negative'),
    createSearchTerm('Russian tourists Dubai statistics', 1400000, 'stable', 'positive'),
    createSearchTerm('Russian schools Dubai', 1200000, 'stable', 'neutral'),
    createSearchTerm('Russia UAE military cooperation', 1100000, 'stable', 'neutral'),
    createSearchTerm('Russian businessmen Dubai', 1000000, 'stable', 'neutral'),
    createSearchTerm('Russian language UAE universities', 900000, 'stable', 'neutral'),
  ],
  sentiment: createSentiment(45, 35, 20, 9800000),
  trendDirection: 'declining',
  uaeSpeakerPopulation: 500000,
  credibility: createCredibility(2, 79, 25),
  sources: [
    createSource('The National', 3, '2026-04-20'),
    createSource('Reuters', 2, '2026-04-22'),
    createSource('Kommersant', 3, '2026-04-18'),
    createSource('The Moscow Times', 3, '2026-04-15'),
    createSource('Gulf News', 3, '2026-04-20'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// CHINESE/MANDARIN (6-13) - Chinese Language
// ============================================================================

export const chineseData: LanguageIntelligence = {
  id: 'lang-chinese',
  language: 'chinese',
  dialect: 'Mandarin Chinese',
  region: 'China / Taiwan / Hong Kong / UAE',
  queryVolume: 42300000,
  topSearchTerms: [
    createSearchTerm('UAE China trade 2025', 8200000, 'rising', 'positive'),
    createSearchTerm('Chinese tourists Dubai 860K', 6900000, 'rising', 'positive'),
    createSearchTerm('Huawei UAE partnership 5G', 5800000, 'stable', 'positive'),
    createSearchTerm('Chinese workers UAE construction', 5200000, 'stable', 'neutral'),
    createSearchTerm('Dubai China Belt Road Initiative', 4900000, 'rising', 'positive'),
    createSearchTerm('Chinese restaurants Abu Dhabi', 4200000, 'stable', 'positive'),
    createSearchTerm('Renminbi AED trade currency', 3800000, 'rising', 'positive'),
    createSearchTerm('Chinese New Year UAE celebrations', 3500000, 'stable', 'positive'),
    createSearchTerm('Chinese students UAE universities', 3200000, 'stable', 'neutral'),
    createSearchTerm('China Geopolitics UAE stance', 2900000, 'stable', 'neutral'),
  ],
  sentiment: createSentiment(76, 12, 12, 42300000),
  trendDirection: 'rising',
  uaeSpeakerPopulation: 500000,
  credibility: createCredibility(2, 86, 30),
  sources: [
    createSource('UAE Ministry of Economy', 2, '2026-04-20'),
    createSource('China Daily', 3, '2026-04-22'),
    createSource('Dubai Tourism Board', 2, '2026-04-15'),
    createSource('South China Morning Post', 3, '2026-04-20'),
    createSource('Xinhua News', 3, '2026-04-18'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// TRANSLITERATION (6-14) - Arabic Transliteration Patterns
// ============================================================================

export const transliterationData: LanguageIntelligence = {
  id: 'lang-transliteration',
  language: 'msa',
  dialect: 'Transliteration',
  region: 'Pan-Arab / Global',
  queryVolume: 5600000,
  topSearchTerms: [
    createSearchTerm('MBZ name transliteration variants', 1200000, 'stable', 'positive'),
    createSearchTerm('Mohammed bin Zayed Arabic spelling', 1100000, 'stable', 'positive'),
    createSearchTerm('MBR Abu Dhabi spelling variations', 980000, 'stable', 'positive'),
    createSearchTerm('Mohammed bin Rashid Dubai', 920000, 'stable', 'positive'),
    createSearchTerm('Dubai transliteration Dubayy/Dubai', 850000, 'stable', 'neutral'),
    createSearchTerm('Abu Dhabi Abu Zabi spelling', 780000, 'stable', 'neutral'),
    createSearchTerm('Al Qasba Qasba spelling variants', 650000, 'stable', 'neutral'),
    createSearchTerm('Sharjah ash-Sharjah transliteration', 620000, 'stable', 'neutral'),
    createSearchTerm('Emirates airline Arabic English spelling', 580000, 'stable', 'neutral'),
    createSearchTerm('Falak orbit transliteration', 520000, 'stable', 'neutral'),
  ],
  sentiment: createSentiment(68, 8, 24, 5600000),
  trendDirection: 'stable',
  transliterationRate: 42,
  codeSwitchingPrevalence: 15,
  uaeSpeakerPopulation: 0,
  credibility: createCredibility(3, 74, 15),
  sources: [
    createSource('UAE Government Portal', 2, '2026-04-15', 'https://u.ae'),
    createSource('Wikipedia Transliteration Project', 3, '2026-04-10'),
    createSource('Arabic Keyboard Institute', 3, '2026-04-12'),
    createSource('Gulf News', 3, '2026-04-20'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// CODE-SWITCHING (6-15) - Multi-lingual Code-Switching Patterns
// ============================================================================

export const codeSwitchingData: LanguageIntelligence = {
  id: 'lang-code-switching',
  language: 'english',
  dialect: 'Code-Switching',
  region: 'UAE Multi-lingual',
  queryVolume: 12400000,
  topSearchTerms: [
    createSearchTerm('Arabizi Arabic Latin script', 2800000, 'stable', 'neutral'),
    createSearchTerm('Franco Arabic chat texting', 2500000, 'stable', 'neutral'),
    createSearchTerm('Hinglish India UAE communication', 2300000, 'rising', 'positive'),
    createSearchTerm('Tagalog English Philippines UAE', 2100000, 'stable', 'neutral'),
    createSearchTerm('Arabic French code switching', 1900000, 'stable', 'neutral'),
    createSearchTerm('English Arabic business meetings', 1700000, 'stable', 'positive'),
    createSearchTerm('Russian English Dubai community', 1500000, 'stable', 'neutral'),
    createSearchTerm('Chinese English code switching UAE', 1300000, 'rising', 'neutral'),
    createSearchTerm('Urdu English hybrid texting', 1200000, 'stable', 'neutral'),
    createSearchTerm('Multilingual education UAE schools', 1100000, 'stable', 'positive'),
  ],
  sentiment: createSentiment(55, 15, 30, 12400000),
  trendDirection: 'rising',
  codeSwitchingPrevalence: 68,
  uaeSpeakerPopulation: 0,
  credibility: createCredibility(3, 77, 30),
  sources: [
    createSource('UAE University Linguistics Dept', 2, '2026-04-18'),
    createSource('Gulf News', 3, '2026-04-22'),
    createSource('Twitter/X Arabic Trends Report', 3, '2026-04-15'),
    createSource('Meta Arabic Dialects Study', 3, '2026-04-10'),
    createSource('Reddit UAE Community Analysis', 3, '2026-04-20'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// DATA EXPORT
// ============================================================================

export const languagesData: LanguageIntelligence[] = [
  msaQueriesData,
  emiratiArabicData,
  gulfArabicData,
  levantineArabicData,
  egyptianArabicData,
  maghrebiArabicData,
  englishQueriesData,
  frenchQueriesData,
  urduHindiData,
  persianData,
  malayIndonesianData,
  russianData,
  chineseData,
  transliterationData,
  codeSwitchingData,
]

export const languagesByCode: Record<LanguageCode, LanguageIntelligence> =
  languagesData.reduce(
    (acc, lang) => {
      acc[lang.language] = lang
      return acc
    },
    {} as Record<LanguageCode, LanguageIntelligence>
  )

export const languagesByRegion: Record<string, LanguageIntelligence[]> = {
  'Pan-Arab': [msaQueriesData, transliterationData],
  'UAE': [emiratiArabicData],
  'Gulf Cooperation Council': [gulfArabicData],
  'Levant': [levantineArabicData],
  'Egypt': [egyptianArabicData],
  'North Africa': [maghrebiArabicData],
  'Global': [englishQueriesData, codeSwitchingData],
  'France': [frenchQueriesData],
  'South Asia': [urduHindiData],
  'Iran': [persianData],
  'Southeast Asia': [malayIndonesianData],
  'Russia': [russianData],
  'China': [chineseData],
}

export const languageOverview = {
  totalLanguages: languagesData.length,
  totalQueries: languagesData.reduce((sum, l) => sum + l.queryVolume, 0),
  languages: languagesData,
  byRegion: languagesByRegion,
  lastUpdated: '2026-04-29',
}

export default languagesData
