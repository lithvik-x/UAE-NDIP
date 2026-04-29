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
// 11-3: Comparative Ranking (Global Indices)
// ============================================================================

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
  ],
  echoChamberRisk: {
    platform: 'UAE Government Communications',
    strength: 'high',
    primaryEchos: [
      'Selective promotion of positive indices (HDI #15, Competitiveness #5, Soft Power #10)',
      'Downplaying or omitting negative indices (Press Freedom #164, Freedom House 18/100)',
      'Framing of government statistics as independent achievements',
    ],
    riskLevel: 'high',
  },
  omissionData: {
    omittedFacts: [
      'RSF World Press Freedom Index 2024: UAE ranked 158-164/180 (bottom 11-9% globally, 5th worst in Arab world)',
      'Freedom House "Freedom in the World" 2025: UAE scores 18/100 — "Not Free" (unchanged)',
      'Freedom House "Freedom on the Net" 2025: Score declined from 30 to 28/100 — internet freedom worsening',
      'Global Peace Index: UAE ranked 52nd of 163 globally — only 4th in Arab region behind Qatar, Kuwait, Oman',
      'HDI improvement (11 rank positions) widely cited but based partly on methodology changes, not only policy changes',
      'Press freedom score declining for 5+ consecutive years',
      'BTI 2026 notes: "Media heavily restricted; criticism of government prohibited; journalists practice self-censorship"',
    ],
    significance: 'critical',
    impact:
      'UAE selectively amplifies positive indices (competitiveness, happiness, soft power) while obscuring severe freedom deficits that fundamentally contradict narrative of openness and reform',
  },
  keyFindings: [
    {
      finding: 'Corruption Perceptions Index 2024',
      metric: 'Rank 21/182, Score 69/100',
      source: 'Transparency International',
      tier: 0,
      alert: 'GREEN',
    },
    {
      finding: 'World Press Freedom Index 2024',
      metric: 'Rank 158-164/180 — "Not Free"',
      source: 'RSF',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Human Development Index 2025',
      metric: 'Rank 15/193, Score 0.940 — "Very High"',
      source: 'UNDP',
      tier: 0,
      alert: 'GREEN',
    },
    {
      finding: 'Global Innovation Index 2025',
      metric: 'Rank 47/139 (Input rank 14th, Output rank 47th)',
      source: 'WIPO',
      tier: 0,
      alert: 'YELLOW',
    },
    {
      finding: 'IMD World Competitiveness 2025',
      metric: 'Rank 5/69, Score 96.09/100',
      source: 'IMD',
      tier: 1,
      alert: 'GREEN',
    },
    {
      finding: 'Brand Finance Soft Power Index 2025',
      metric: 'Rank 10/193, Nation Brand Value $1.223T',
      source: 'Brand Finance',
      tier: 1,
      alert: 'GREEN',
    },
    {
      finding: 'World Happiness Report 2025',
      metric: 'Rank 21st globally, 1st in Arab world',
      source: 'UN SDSN',
      tier: 0,
      alert: 'GREEN',
    },
    {
      finding: 'Global Peace Index 2025',
      metric: 'Rank 52/163, 4th in Arab region',
      source: 'IEP',
      tier: 1,
      alert: 'YELLOW',
    },
    {
      finding: 'Freedom House "Freedom in the World" 2025',
      metric: '18/100 — "Not Free"',
      source: 'Freedom House',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Global Gender Gap Index 2025',
      metric: 'Rank 69/146, 1st in MENA',
      source: 'WEF',
      tier: 0,
      alert: 'YELLOW',
    },
  ],
  credibility: {
    tier: 2,
    score: 72,
    sources: 9,
    lastVerified: '2026-04-27',
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
    { name: 'RSF — UAE Country Page', url: 'https://rsf.org/en/country/united-arab-emirates', tier: 1, date: '2024' },
    { name: 'UNDP Human Development Reports', url: 'https://hdr.undp.org/data-center/specific-country-data', tier: 0, date: '2025' },
    { name: 'WIPO GII Rankings', url: 'https://www.wipo.int/gii-ranking/en/united-arab-emirates', tier: 0, date: '2025' },
    { name: 'IMD World Competitiveness', url: 'https://u.ae/en/about-the-uae/uae-competitiveness/imd-world-competitiveness-yearbook', tier: 1, date: '2025' },
    { name: 'Brand Finance Soft Power Index 2025', url: 'https://gulfnews.com/uae/government/uae-ranks-10th-in-global-soft-power-index-2025', tier: 1, date: '2025' },
    { name: 'UN SDSN World Happiness Report', url: 'https://khaleejtimes.com/uae/uae-rank-global-happiness-index-2025', tier: 0, date: '2025' },
    { name: 'Freedom House — UAE Freedom on the Net 2025', url: 'https://freedomhouse.org/country/united-arab-emirates/freedom-net/2025', tier: 1, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
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
}

// ============================================================================
// 11-7: Omission & Silence Detection
// ============================================================================

export const omissionSilenceData: VerificationResult = {
  id: 'ver-11-7',
  claim: 'UAE maintains transparent media environment with comprehensive coverage of national events',
  verdict: 'false',
  accuracyScore: 15,
  sources: [
    { name: 'Freedom House', tier: 1, reliability: 'high' },
    { name: 'RSF', tier: 1, reliability: 'high' },
    { name: 'Human Rights Watch', tier: 1, reliability: 'high' },
    { name: 'CPJ', tier: 1, reliability: 'high' },
    { name: 'Amnesty International', tier: 1, reliability: 'high' },
    { name: 'WJWC', tier: 1, reliability: 'high' },
    { name: 'Martin Plaut (Investigative Journalist)', tier: 2, reliability: 'high' },
    { name: 'Haaretz Investigation', tier: 2, reliability: 'high' },
  ],
  echoChamberRisk: {
    platform: 'UAE Domestic Media',
    strength: 'critical',
    primaryEchos: [
      'Official statements unchallenged in domestic media',
      'Iran strikes coverage systematically minimized damage and casualties',
      '"Strategic silence" officially articulated as state media policy',
      'No domestic coverage of discrepancies between official claims and visual evidence',
    ],
    riskLevel: 'critical',
  },
  omissionData: {
    omittedFacts: [
      'Port of Fujairah: Official claim — fire from debris following "successful interception"; Contrasting video — drone approaching intact with no visible interception (Martin Plaut)',
      'Jebel Ali Port: Official — fire attributed to debris from interception; Satellite imagery — fires at separate locations ~3km apart, including military area (Haaretz)',
      'Burj Al Arab: Official — "limited" fire from shrapnel; Video evidence — flames extended ~30 meters covering eight floors',
      'Death toll discrepancy: Official — limited casualties; Actual strikes killed 13 people, injured 224 over conflict period',
      'ADNOC Refinery: 922,000 barrels/day output lost — not mentioned in official communications',
      'EGA (Emirates Global Aluminium) recovery time ~1 year — undisclosed',
      'During conflict: 375+ individuals arrested for sharing incident footage or "misleading" content',
      '"Strategic silence" officially acknowledged as deliberate policy by UAE Media Chief',
      'Social media accounts of Al Arabiya Breaking News, journalists with 5M+ followers blocked for sharing strike footage',
    ],
    significance: 'critical',
    impact:
      'Documented discrepancies between official statements and verifiable visual/satellite evidence during the April 2026 Iran strikes represent systematic state-fabricated narrative with severe implications for public trust and regional security',
  },
  keyFindings: [
    {
      finding: 'RSF World Press Freedom Index 2025',
      metric: '164/180 — "Not Free"',
      source: 'RSF',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Freedom House Freedom on the Net 2025',
      metric: '28/100 — "Not Free" (declined from 30)',
      source: 'Freedom House',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Freedom House "Freedom in the World" 2025',
      metric: '18/100 — "Not Free"',
      source: 'Freedom House',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Port of Fujairah — Oil Throughput Affected',
      metric: '1.7 million barrels/day',
      source: 'Industry data',
      tier: 2,
      alert: 'RED',
    },
    {
      finding: 'People Arrested for Social Media (March 2026)',
      metric: '375+',
      source: 'Multiple sources',
      tier: 1,
      alert: 'RED',
    },
    {
      finding: 'Social Media Accounts Blocked (March 2, 2026)',
      metric: 'Multiple including Al Arabiya Breaking News, journalist with 5M+ followers',
      source: 'Al Estiklal',
      tier: 2,
      alert: 'RED',
    },
    {
      finding: '"Strategic Silence" Policy — Official Articulation',
      metric: 'Confirmed as deliberate state policy',
      source: 'The Arab Weekly / UAE Media Chief',
      tier: 2,
      alert: 'RED',
    },
    {
      finding: 'Storage Tanks Destroyed at Fujairah Port',
      metric: '3+ (by March 7)',
      source: 'Haaretz',
      tier: 2,
      alert: 'RED',
    },
  ],
  credibility: {
    tier: 2,
    score: 15,
    sources: 8,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 99,
    level: 'critical',
    justification:
      'Omission and silence patterns directly measure state-controlled narrative environment — fundamental to understanding what information UAE citizens and the international community are systematically denied',
  },
  alertLevel: 'RED',
  sources2: [
    { name: 'RSF UAE Country Page', url: 'https://rsf.org/en/country/united-arab-emirates', tier: 1, date: '2025' },
    { name: 'Freedom House — UAE Freedom on the Net 2025', url: 'https://freedomhouse.org/country/united-arab-emirates/freedom-net/2025', tier: 1, date: '2025' },
    { name: 'Freedom House — UAE Freedom in the World 2025', url: 'https://freedomhouse.org/country/united-arab-emirates/freedom-world/2025', tier: 1, date: '2025' },
    { name: 'Martin Plaut — Censorship Iran Strikes', url: 'https://martinplaut.com/2026/04/05/censorship-how-the-uae-rewrites-the-story-of-iranian-strikes/', tier: 2, date: '2026-04-05' },
    { name: 'Haaretz — UAE Censorship Iran Strikes', url: 'https://www.haaretz.com/middle-east-news/2026-03-22/ty-article/.premium/intercepted-or-engaged-how-the-uae-censors-the-extent-of-iranian-strikes/', tier: 2, date: '2026-03-22' },
    { name: 'CPJ — Press Freedom Violations Iran War', url: 'https://cpj.org/2026/03/press-freedom-violations-in-the-middle-east-during-the-iran-war/', tier: 1, date: '2026-03' },
    { name: 'WJWC — UAE Suffocating Space for Independent Media', url: 'https://wjwc.org/reports/uae-suffocating-space-for-independent-media', tier: 1, date: '2024' },
  ],
  lastUpdated: '2026-04-27',
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
    { name: 'Rolli AI', tier: 3, reliability: 'medium' },
    { name: 'Reality Team', tier: 3, reliability: 'medium' },
  ],
  botInauthenticScore: 97,
  echoChamberRisk: {
    platform: 'Facebook, Instagram, Twitter/X',
    strength: 'critical',
    primaryEchos: [
      'Coordinated networks amplify pro-UAE narratives across multiple platforms simultaneously',
      'Astroturfing creates false impression of grassroots support for state positions',
      'Cross-platform operations (Facebook, YouTube, Twitter, Telegram) create compounding echo effects',
      'Marketing firms (New Waves, Newave) operate sophisticated CIB infrastructure',
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
      finding: 'Aug 2019 Takedown — Facebook Accounts Removed (UAE+Egypt)',
      metric: '259 accounts',
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
      finding: 'Aug 2019 Takedown — Pages Removed',
      metric: '102 (UAE+Egypt), 144 (Saudi)',
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
      finding: 'Iran-Linked Takedowns (MENA)',
      metric: '20 operations (largest category)',
      source: 'POMEPS',
      tier: 1,
      alert: 'YELLOW',
    },
  ],
  credibility: {
    tier: 2,
    score: 8,
    sources: 8,
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
    { name: 'POMEPS — Social Media Manipulation MENA', url: 'https://pomeps.org/social-media-manipulation-in-the-mena-inauthenticity-inequality-and-insecurity', tier: 1, date: '2021' },
    { name: 'DFRLab — Facebook Disabled Assets Analysis', url: 'https://medium.com/dfrlab/facebook-disabled-assets-linked-to-egypt-and-uae-based-firms-a232d9effc32', tier: 1, date: '2019-08-14' },
    { name: 'Meta Q1 2025 Adversarial Threat Report', url: 'https://transparency.meta.com/sr/Q1-2025-Adversarial-threat-report/', tier: 1, date: '2025' },
    { name: 'EU DisinfoLab — CIB Detection Tree', url: 'https://www.disinfo.eu/publications/coordinated-inauthentic-behaviour-detection-tree/', tier: 2, date: '2024' },
    { name: 'Cyfluence Research — Meta CIB Operations', url: 'https://www.cyfluence-research.org/post/meta-takes-down-global-cib-operations-from-iran-china-and-romania', tier: 2, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
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
  omissionSilenceData,
  echoChamberFilterData,
  botInauthenticData,
  coordinatedInauthenticData,
]
