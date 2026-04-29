/**
 * Competitive Benchmarking Data
 * UAE Competitive Positioning vs. Regional and Global Peers
 * Source: 3-3-competitive-benchmarking-results.md
 */

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export const executiveSummary = {
  uaePositioning: 'UAE positions itself as a global hub federation — a tax-efficient, politically stable, and diversification-forward alternative to regional rivals and established Western/Asian financial centres.',
  headlineFinding: 'The UAE is the only GCC state to simultaneously rank in the global top 10 for competitiveness (IMD #5), entrepreneurship (GEM #1, 5th consecutive year), soft power (Brand Finance #10), happiness (UN #21), and digital competitiveness (IMD #9).',
  lastUpdated: '2026-04-27',
  dataHorizon: '2024–2026',
  status: 'Comprehensive Enrichment Complete',
}

// ============================================================================
// UAE GLOBAL RANKINGS INDEX CARD
// ============================================================================

export const uaeGlobalRankings = [
  { index: 'IMD World Competitiveness Ranking', ranking: '5th globally', score: '96.09/100', source: 'IMD Business School', year: 2025, trend: 'Up +2 spots' },
  { index: 'GEM National Entrepreneurship Context Index (NECI)', ranking: '1st globally', score: '7.0 pts', source: 'GEM Global Report 2025/2026', year: 2026, trend: 'Stable, 5th consecutive year' },
  { index: 'Global Financial Centres Index (GFCI) — Dubai', ranking: '7th globally', score: '742 pts', source: 'Long Finance / Z/Yen', year: 'Mar 2026', trend: 'Up 4-place jump' },
  { index: 'IMD World Digital Competitiveness Ranking', ranking: '9th globally', score: null, source: 'IMD', year: 2025, trend: '1st in Arab world' },
  { index: 'World Happiness Report — Arab Region', ranking: '1st regionally, 21st globally', score: null, source: 'UN Sustainable Development Solutions', year: 2026, trend: 'Maintained' },
  { index: 'Brand Finance Global Soft Power Index', ranking: '10th globally', score: null, source: 'Brand Finance', year: 2026, trend: '4th consecutive year in top-10' },
  { index: 'Global Human Prosperity Index', ranking: '13th globally', score: null, source: 'UN/World Bank', year: 2026, trend: 'New metric' },
  { index: 'Doing Business Ranking (legacy)', ranking: '16th globally', score: null, source: 'World Bank', year: 2020, trend: 'Historical reference' },
  { index: 'Corruption Perceptions Index', ranking: 'Score 68', score: null, source: 'Transparency International', year: 2023, trend: 'Better than Oman (43)' },
]

export const uaeIndicatorPerformance = [
  { indicator: 'Absence of bureaucracy', uaeRank: '1st globally', notes: 'Best in world' },
  { indicator: 'Policy adaptability', uaeRank: '2nd globally', notes: 'Highly responsive government' },
  { indicator: 'Government efficiency', uaeRank: '4th globally', notes: null },
  { indicator: 'Overall business environment', uaeRank: '5th globally (2026)', notes: 'Leading MENA' },
  { indicator: 'Government Support Index', uaeRank: '16th globally', notes: 'IMD Yearbook 2025' },
  { indicator: 'Entrepreneurial finance', uaeRank: '2nd globally', notes: 'GEM 2025/2026' },
  { indicator: 'Access to funding', uaeRank: '2nd globally', notes: 'GEM 2025/2026' },
  { indicator: 'Ease of starting/running business', uaeRank: '1st globally', notes: 'GEM 2025/2026' },
]

// ============================================================================
// COMPETITOR DATA: UAE VS SAUDI ARABIA
// ============================================================================

export const uaeVsSaudi = {
  economicOverview: [
    { metric: 'Nominal GDP', uae: '$540–$601B', saudi: '$1.1–$1.3T', source: 'Multiple sources', year: '2025–2026' },
    { metric: 'GDP (PPP)', uae: '$656B', saudi: '$1.61T', source: 'WorldData.info', year: 2019 },
    { metric: 'GDP per capita', uae: '$67,119–$79,229', saudi: '$46,962–$50,112', source: 'WorldData.info', year: 2019 },
    { metric: 'GDP growth (2024)', uae: '4.0%', saudi: '4.3%', source: 'IMF WEO', year: 2024 },
    { metric: 'IMF 2026 growth forecast', uae: '3.1%', saudi: '3.1%', source: 'IMF WEO Apr 2026', year: 2026 },
    { metric: 'Non-oil GDP share', uae: '77%+ (Q1 2025)', saudi: '56%', source: 'Marana Magazine', year: 2025 },
    { metric: 'Non-oil sector growth', uae: '5.3%', saudi: null, source: 'Marana Magazine', year: 2025 },
    { metric: 'Construction projects awarded (2025)', uae: '$31B', saudi: '$20.6B', source: 'Marana Magazine', year: 2025 },
    { metric: 'Average income', uae: '$51,550', saudi: '$35,630', source: 'WorldData.info', year: 2019 },
    { metric: 'Unemployment', uae: '1.6%–2.2%', saudi: '3%–6%', source: 'WorldData.info', year: 2019 },
    { metric: 'Central govt debt (% GDP)', uae: '1.89%', saudi: '29.87%', source: 'WorldData.info', year: 2019 },
    { metric: 'Commercial tax rate', uae: '9%', saudi: '20%', source: 'WorldData.info', year: 2019 },
    { metric: 'Corporate tax', uae: '9% (0% in free zones)', saudi: '20%', source: null, year: null },
    { metric: 'Oil production', uae: '3.22M bbl/day', saudi: '10.43M bbl/day', source: 'WorldData.info', year: 2019 },
    { metric: 'Oil reserves', uae: '97.8B bbl', saudi: '266.2B bbl', source: 'WorldData.info', year: 2019 },
    { metric: 'Exports', uae: '$308.5B–$647.9B', saudi: '$221.1B–$368.6B', source: 'WorldData.info', year: 2019 },
    { metric: 'CO2 emissions', uae: '264.15M t', saudi: '838.88M t', source: 'WorldData.info', year: 2019 },
  ],
  demographics: [
    { metric: 'Area', uae: '83,600 km²', saudi: '2,149,690 km²', source: 'Saudi Arabia 25x larger', year: null },
    { metric: 'Population', uae: '9.9M–11M', saudi: '34.8M–35.3M', source: 'WorldData.info', year: null },
    { metric: 'Expatriate share', uae: '87.9%–93.8%', saudi: '38.3%', source: 'WorldData.info', year: null },
    { metric: 'Median age', uae: '38.4 yrs', saudi: '30.8 yrs', source: 'WorldData.info', year: null },
    { metric: 'Life expectancy', uae: '79.37 yrs', saudi: '76.4 yrs', source: 'WorldData.info', year: null },
    { metric: 'Literacy rate', uae: '98.8%', saudi: '97.9%', source: 'WorldData.info', year: null },
    { metric: "Bachelor's degree attainment", uae: '52.7%', saudi: '36%', source: 'WorldData.info', year: null },
    { metric: 'Govt education spend (% GDP)', uae: '3.9%', saudi: '4.5%', source: 'WorldData.info', year: null },
    { metric: 'Hospital beds/1,000', uae: '1.87', saudi: '2.41', source: 'WorldData.info', year: null },
    { metric: 'Physicians/1,000', uae: '2.99', saudi: '3.41', source: 'WorldData.info', year: null },
    { metric: 'Diabetes prevalence', uae: '20.7%', saudi: '23.1%', source: 'WorldData.info', year: null },
    { metric: 'Smoker prevalence', uae: '9%', saudi: '14.9%', source: 'WorldData.info', year: null },
    { metric: 'Islam adherence', uae: '76%', saudi: '99%', source: 'WorldData.info', year: null },
    { metric: 'Christianity', uae: '9%', saudi: '0%', source: 'WorldData.info', year: null },
    { metric: 'Hinduism', uae: '3.6%', saudi: '0.1%', source: 'WorldData.info', year: null },
  ],
  infrastructure: [
    { metric: 'Roadways', uae: '104,311 km', saudi: '480,220 km' },
    { metric: 'Railways', uae: '869 km', saudi: '5,590 km' },
    { metric: 'Passenger airports', uae: '10', saudi: '31' },
    { metric: 'Energy production capacity', uae: '389,487 GWh', saudi: '1,047,871 GWh' },
  ],
  military: [
    { metric: 'Power Index (lower = stronger)', uae: '1.0188', saudi: '0.4473', notes: 'GFP 2026' },
    { metric: 'Global military rank (of 145)', uae: '54', saudi: '25', notes: 'GFP 2026' },
    { metric: 'Defense spending', uae: '$23.48B (Rank 24)', saudi: '$63.99B (Rank 8)', notes: 'GFP 2026' },
    { metric: 'Active troops', uae: '65,000', saudi: '247,000', notes: 'GFP 2026' },
    { metric: 'Reserve troops', uae: '130,000', saudi: '0', notes: 'GFP 2026' },
    { metric: 'Total aircraft', uae: '581', saudi: '917', notes: 'GFP 2026' },
    { metric: 'Fighter aircraft', uae: '99', saudi: '283', notes: 'GFP 2026' },
    { metric: 'Tanks', uae: '354', saudi: '1,085', notes: 'GFP 2026' },
    { metric: 'Armored vehicles', uae: '8,982', saudi: '22,370', notes: 'GFP 2026' },
    { metric: 'Naval fleet', uae: '84 ships', saudi: '32 ships', notes: 'GFP 2026' },
    { metric: 'Middle East regional rank', uae: '7th', saudi: '5th', notes: 'GFP 2026' },
  ],
  political: [
    { metric: 'System', uae: 'Federal monarchy (7 emirates)', saudi: 'Absolute monarchy (House of Saud)' },
    { metric: 'De facto leader', uae: 'Crown Prince Mohammed bin Zayed (MBZ)', saudi: 'Crown Prince Mohammed bin Salman (MBS)' },
    { metric: 'Religious tolerance', uae: 'Allows churches, temples, synagogue (first synagogue built 2019)', saudi: 'Strict Wahhabi; no churches/synagogues permitted' },
    { metric: 'Vision document', uae: '"We the UAE 2031"', saudi: '"Vision 2030"' },
    { metric: 'Human rights (Freedom House)', uae: 'Rated "Not Free"', saudi: 'Rated "Not Free"' },
  ],
  keyInsight: 'Saudi Arabia leads in raw military size, oil production, and geographic scale. UAE leads in per-capita income, business efficiency, diversification, expatriate attractiveness, naval fleet, and religious tolerance.',
}

// ============================================================================
// COMPETITOR DATA: UAE VS QATAR
// ============================================================================

export const uaeVsQatar = [
  { metric: 'Area', uae: '83,600 km²', qatar: '11,610 km²', source: 'Qatar ~7x smaller' },
  { metric: 'Population', uae: '10.99M', qatar: '2.86M', source: 'Qatar ~4x smaller' },
  { metric: 'GDP (nominal)', uae: '$552B', qatar: '$219B', source: 'WorldData.info' },
  { metric: 'GDP per capita', uae: '$50,270', qatar: '$76,690', source: 'Qatar higher' },
  { metric: 'Average income', uae: '$51,550', qatar: '$77,290', source: 'Qatar higher' },
  { metric: 'Unemployment', uae: '2.2%', qatar: '0.1%', source: 'Qatar near-full employment' },
  { metric: 'Exports', uae: '$648B', qatar: '$125B', source: 'UAE dominates total trade' },
  { metric: 'Exports % GDP', uae: '92.96%', qatar: '44.64%', source: 'UAE more trade-dependent' },
  { metric: 'Trade balance', uae: '€16.1B (3.33% surplus)', qatar: '€60.9B (30.29% surplus)', source: 'Qatar higher surplus ratio' },
  { metric: 'Government debt (% GDP)', uae: '34%–34.94%', qatar: '40.6%–42.81%', source: 'Qatar higher debt' },
  { metric: 'Health spending (% budget)', uae: '14.41%', qatar: '7.69%', source: 'UAE prioritizes health' },
  { metric: 'Education spending (% budget)', uae: '14.76%', qatar: '8.94%', source: 'UAE prioritizes education' },
  { metric: 'Defense spending (% budget)', uae: '17.04%', qatar: '26.88%', source: 'Qatar more defense-focused' },
  { metric: 'Literacy rate', uae: '98.8%', qatar: '93.5%', source: 'UAE higher' },
  { metric: "Bachelor's degree attainment", uae: '52.7%', qatar: '30.4%', source: 'UAE higher' },
  { metric: 'Political stability (0-100)', uae: '86', qatar: '90', source: 'Slight Qatar edge' },
  { metric: 'Health score (0-100)', uae: '78', qatar: '76', source: 'UAE higher' },
  { metric: 'Quality of life', uae: 'Dubai topped New York as best for wealthy (2025)', qatar: null, source: 'Engel & Volkers' },
]

export const aviationRivalry = [
  { metric: 'SKYTRAX Best Airlines Middle East 2025', emirates: '#2', qatarAirways: '#1', source: 'World Airliner Awards' },
  { metric: 'AirlineRatings safety 2025', emirates: '#3 (tied with Cathay Pacific)', qatarAirways: '#3 (tied)', source: 'AirlineRatings Jan 2026' },
  { metric: 'Business class', emirates: 'Consistent product across fleet', qatarAirways: 'QSuite considered more premium', source: 'Multiple 2026 sources' },
  { metric: 'Business class award 2025', emirates: null, qatarAirways: '#1', source: 'Simple Flying Mar 2026' },
  { metric: 'Economy — free WiFi', emirates: 'Emirates better', qatarAirways: 'Consistent', source: 'Simple Flying' },
  { metric: 'Punctuality', emirates: 'Good', qatarAirways: 'Edges ahead', source: 'Multiple sources' },
  { metric: 'Fleet approach', emirates: 'Focused on mainline passenger', qatarAirways: 'Wider route network, diverse fleet', source: 'Simple Flying' },
]

// ============================================================================
// COMPETITOR DATA: UAE VS OMAN
// ============================================================================

export const uaeVsOman = [
  { metric: 'GDP (nominal)', uae: '€510,441M ($552B)', oman: '€99,013M ($107B)', source: 'CountryEconomy.com' },
  { metric: 'GDP per capita', uae: '€45,197 ($48,906)', oman: '€18,973 ($20,529)', source: 'CountryEconomy.com' },
  { metric: 'GDP growth (2024)', uae: '4.0%', oman: '1.6%', source: 'CountryEconomy.com' },
  { metric: "Moody's sovereign rating", uae: 'Aa2', oman: 'Baa3', source: 'CountryEconomy.com' },
  { metric: 'S&P sovereign rating', uae: 'AA', oman: 'BBB-', source: 'CountryEconomy.com' },
  { metric: 'Fitch sovereign rating', uae: 'AA', oman: 'BB', source: 'CountryEconomy.com' },
  { metric: 'Corruption Index (2023)', uae: '68 (better)', oman: '43', source: 'CountryEconomy.com' },
  { metric: 'Exports', uae: '€449,187M', oman: '€58,019M', source: 'CountryEconomy.com' },
  { metric: 'Exports % GDP', uae: '92.96%', oman: '59.10%', source: 'UAE more trade-dependent' },
  { metric: 'Trade balance', uae: '€16.1B surplus', oman: '€24.4B surplus', source: 'Oman higher surplus ratio' },
  { metric: 'Population', uae: '11,294,000', oman: '5,307,000', source: 'CountryEconomy.com' },
  { metric: 'Immigrant population %', uae: '93.83%', oman: '53.38%', source: 'UAE more cosmopolitan' },
  { metric: 'HDI', uae: '0.937', oman: '0.819', source: 'CountryEconomy.com' },
  { metric: 'Oil production', uae: '3,833 bbl/day', oman: '1,002 bbl/day', source: 'CountryEconomy.com' },
  { metric: 'Oil reserves', uae: '97,800M bbl', oman: '5,373M bbl', source: 'CountryEconomy.com' },
  { metric: 'Doing Business ranking', uae: '16th', oman: '68th', source: 'CountryEconomy.com' },
  { metric: 'Standard VAT', uae: '5%', oman: '0%', source: 'Oman no VAT' },
  { metric: 'Tourism arrivals', uae: '11,479,000', oman: '2,059,000', source: 'CountryEconomy.com' },
]

// ============================================================================
// COMPETITOR DATA: UAE VS BAHRAIN
// ============================================================================

export const uaeVsBahrain = [
  { metric: 'Currency swap (Apr 2026)', uae: 'Provider', bahrain: 'Dh20B ($5.4B) agreement signed', source: 'GulfIF / ArabNews' },
  { metric: 'Fiscal deficit (IMF)', uae: null, bahrain: '11% (flagged)', source: 'GulfIF' },
  { metric: 'S&P rating (Nov 2025)', uae: 'AA', bahrain: 'B (downgraded)', source: 'GulfIF' },
  { metric: 'Debt-to-GDP', uae: 'Low', bahrain: '133%', source: 'GulfIF' },
  { metric: 'Sovereign wealth buffers', uae: 'Yes', bahrain: 'No (single aging oil field)', source: 'GulfIF' },
  { metric: 'Fuel pricing', uae: 'Market-based (introduced ~decade ago)', bahrain: 'Permanent market-linked (new reform)', source: 'GulfIF' },
]

// ============================================================================
// COMPETITOR DATA: UAE VS KUWAIT
// ============================================================================

export const uaeVsKuwait = [
  { metric: 'GDP (2024)', uae: '$509–$552B', kuwait: '$134–$160B', source: 'CountryEconomy.com' },
  { metric: 'GDP per capita (2024)', uae: '$79,229', kuwait: '$32,106–$52,444', source: 'CountryEconomy.com' },
  { metric: 'Unemployment', uae: '2.2%', kuwait: '2.2%', source: 'Tied' },
  { metric: 'Wealth-to-GDP ratio', uae: '12th globally', kuwait: 'Topped GCC', source: 'CountryEconomy.com' },
  { metric: 'Government debt', uae: 'Very low', kuwait: 'Higher relative to wealth', source: 'CountryEconomy.com' },
]

// ============================================================================
// COMPETITOR DATA: UAE VS ISRAEL
// ============================================================================

export const uaeVsIsrael = [
  { metric: 'Normalisation framework', uae: 'Abraham Accords (Sep 2020)', israel: 'Abraham Accords (Sep 2020)', source: 'Wikipedia / Britannica' },
  { metric: 'Bilateral trade (by 2026)', uae: 'Growing significantly post-Accords', israel: null, source: 'Times of Israel Feb 2026' },
  { metric: 'Joint tech fund', uae: '$3B (US-Israel-UAE fund)', israel: null, source: 'Atlantic Council Jan 2026' },
  { metric: 'Cooperation areas', uae: 'AI, cybersecurity, health-tech, agrifood, fintech', israel: null, source: 'Middle East Institute' },
  { metric: 'UAE tech ecosystem', uae: 'Hub71 (Abu Dhabi)', israel: 'Start-Up Nation Central', source: 'Multiple' },
  { metric: 'Israeli VC firm active in UAE', uae: 'Triventures', israel: null, source: 'MEI' },
  { metric: 'Knowledge ranking (INSEAD)', uae: '6th globally', israel: '9th (tech sophistication)', source: 'MEI' },
  { metric: 'Global Innovation Index', uae: 'Higher in institutions, political environment', israel: 'Higher in deep-tech specialisation', source: 'MEI' },
  { metric: 'Specialisation', uae: 'Government-supported AI programs', israel: 'Blockchain, cybersecurity, AI, quantum', source: 'MEI' },
  { metric: 'UAE-IL Tech Zone', uae: 'Launched for tech collaboration', israel: null, source: 'MEI' },
  { metric: 'Abraham Accords expansion momentum', uae: 'Q4 2025 renewed push', israel: null, source: 'Heritage Foundation Dec 2025' },
  { metric: 'Defense cooperation', uae: 'Intelligence sharing, early-warning data swaps', israel: null, source: 'Semafor Mar 2026' },
  { metric: 'Regional military rank (GFP)', uae: '7th (Middle East)', israel: '2nd (PwrIndx 0.2707)', source: 'GFP 2026' },
]

// ============================================================================
// COMPETITOR DATA: UAE VS TURKEY
// ============================================================================

export const uaeVsTurkey = [
  { metric: 'GDP (nominal)', uae: '~$540–$601B', turkey: '~$1.1T (larger)', source: 'Multiple' },
  { metric: 'Regional military rank (GFP)', uae: '7th', turkey: '1st in Middle East (PwrIndx 0.1975)', source: 'GFP 2026' },
  { metric: 'Power Index (lower = stronger)', uae: '1.0188', turkey: '0.1975', source: 'GFP 2026' },
  { metric: 'Soft power approach', uae: 'Economic/security-focused', turkey: 'Cultural/soft power', source: 'PMC/NIH 2022' },
  { metric: 'ODA as share of GDP', uae: 'Significant post-2011', turkey: 'Became major global donor post-2011', source: 'PMC/NIH 2022' },
  { metric: 'Africa rivalry', uae: 'Main arena of competition', turkey: 'Main arena of competition', source: 'PMC/NIH 2022' },
  { metric: 'Somalia approach', uae: 'UAE invests in Somaliland (base access)', turkey: 'Turkey supports central govt in Mogadishu', source: 'PMC/NIH 2022' },
  { metric: 'Egypt post-Arab Spring', uae: 'Backed post-coup Sisi government', turkey: 'Backed Muslim Brotherhood (2012-13)', source: 'PMC/NIH 2022' },
  { metric: 'Mutual Protection Agreement', uae: 'Signed July 2025', turkey: 'Signed July 2025', source: 'Turkiye Today Feb 2026' },
]

// ============================================================================
// COMPETITOR DATA: UAE VS EGYPT
// ============================================================================

export const uaeVsEgypt = [
  { metric: 'GDP (nominal)', uae: '$540–$601B', egypt: '~$400B', source: 'Multiple' },
  { metric: 'Regional military rank (GFP)', uae: '7th', egypt: '4th (PwrIndx 0.3651)', source: 'GFP 2026' },
  { metric: 'Active military personnel', uae: '63,000–65,000', egypt: '~836,000', source: 'GlobalMilitary.net' },
  { metric: 'Numerical military advantage', uae: null, egypt: 'Egypt 13:1 UAE', source: 'GlobalMilitary.net' },
  { metric: 'Aid to Egypt (post-2013)', uae: 'UAE provided extensive post-coup support', egypt: null, source: 'PMC/NIH 2022' },
  { metric: 'Tourism arrivals (UAE)', uae: 'Dubai alone: 19.6M (2025)', egypt: null, source: 'Gulf News / Multiple' },
]

// ============================================================================
// COMPETITOR DATA: UAE VS SINGAPORE
// ============================================================================

export const uaeVsSingapore = [
  { metric: 'Cost of living', uae: 'Baseline', singapore: '38% more expensive', source: 'Novad.app' },
  { metric: 'Monthly costs (single person)', uae: '$3,500', singapore: '$4,830', source: 'Novad.app' },
  { metric: 'Rent (1BR city centre)', uae: '$2,150', singapore: '$2,850', source: 'Novad.app' },
  { metric: 'Personal income tax', uae: '0%', singapore: 'Progressive 0%–24%', source: 'Novad.app' },
  { metric: 'Business environment', uae: 'Tax efficiency, affordability', singapore: 'Better Asian market access', source: 'Novad.app' },
  { metric: 'Visa process', uae: 'Easier', singapore: 'More complex', source: 'Novad.app' },
  { metric: 'Geopolitical stability', uae: 'Moderate (Middle East risk)', singapore: '"Island of stability"', source: 'Novad.app' },
  { metric: 'Safety score', uae: '84/100', singapore: '77/100', source: 'Novad.app' },
  { metric: 'Internet speed', uae: '100 Mbps', singapore: '250 Mbps', source: 'Novad.app' },
  { metric: 'Healthcare infrastructure', uae: 'Good', singapore: 'Better', source: 'Novad.app' },
  { metric: 'Walkability', uae: 'Lower', singapore: 'Higher', source: 'Novad.app' },
  { metric: 'Luxury orientation', uae: 'Automobile-oriented grandeur', singapore: 'Efficient urban design', source: 'Novad.app' },
]

// ============================================================================
// COMPETITOR DATA: UAE VS SWITZERLAND
// ============================================================================

export const uaeVsSwitzerland = [
  { metric: 'Personal income tax', uae: '0%', switzerland: 'Up to ~40% (cantons)', source: 'Emifast' },
  { metric: 'Corporate income tax', uae: '9% (0% in free zones)', switzerland: '12%–21%', source: 'Emifast' },
  { metric: 'Capital gains tax (personal)', uae: '0%', switzerland: 'Generally exempt', source: 'Emifast' },
  { metric: 'Wealth tax', uae: 'None', switzerland: 'Yes', source: 'Emifast' },
  { metric: 'Inheritance tax', uae: 'None', switzerland: 'Yes', source: 'Emifast' },
  { metric: 'Crypto tax', uae: '0%', switzerland: 'Varies by canton', source: 'Emifast' },
  { metric: 'Banking heritage', uae: 'Modern digital', switzerland: 'Centuries-old sophisticated', source: 'Emifast' },
  { metric: 'Financial discretion', uae: 'High (ADGM, VARA)', switzerland: 'Very high (Swiss tradition)', source: 'Emifast' },
  { metric: 'Crypto regulation', uae: 'VARA (Dubai), ADGM clear', switzerland: 'Evolving', source: 'Emifast' },
  { metric: 'Foreign property ownership', uae: '100% allowed', switzerland: 'Strict limits', source: 'Emifast' },
  { metric: 'Property tax', uae: 'None', switzerland: 'Yes', source: 'Emifast' },
  { metric: 'Positioning', uae: 'Europe–Asia capital flow hub', switzerland: 'Time-tested wealth preservation', source: 'Emifast' },
]

// ============================================================================
// COMPETITOR DATA: UAE VS HONG KONG
// ============================================================================

export const uaeVsHongKong = [
  { metric: 'Status (2026)', uae: 'Rising star', hongKong: 'Challenged by geopolitics', source: 'SCMP' },
  { metric: 'Foreign assets under management', uae: '~$700B (2024)', hongKong: null, source: 'BCG via SCMP' },
  { metric: 'Financial hub positioning', uae: 'Middle East/Africa/Europe', hongKong: 'Asia/China-focused', source: 'SCMP' },
  { metric: 'Trade agreement exploration', uae: null, hongKong: 'HK exploring FTA with UAE/Gulf', source: 'SCMP' },
  { metric: 'Competition for Chinese capital', uae: 'Both compete', hongKong: 'Both compete', source: 'SCMP' },
  { metric: 'Preferred by', uae: 'Middle East-connected firms', hongKong: 'Asian trading firms', source: 'SCMP' },
]

// ============================================================================
// COMPETITOR DATA: UAE VS MONACO
// ============================================================================

export const uaeVsMonaco = [
  { metric: 'Luxury philosophy', uae: 'Visibility and grandeur', monaco: 'Privacy and exclusivity', source: 'Villa Monaco' },
  { metric: 'Climate', uae: 'Intense summer heat, year-round sun', monaco: 'Mediterranean mild winters', source: 'Villa Monaco' },
  { metric: 'Signature experiences', uae: 'Desert safari, sky-high dining, private beaches', monaco: 'Yacht charters, Monaco GP, Monte-Carlo Masters', source: 'Villa Monaco' },
  { metric: 'Art/cultural events', uae: 'Expo, Art Dubai', monaco: 'Monte-Carlo Ballet, Opera', source: 'Villa Monaco' },
  { metric: 'Population approach', uae: 'Major metropolis', monaco: 'Small, discreet community', source: 'Villa Monaco' },
  { metric: 'Property market', uae: 'Transactional, high yields', monaco: 'Discreet, limited supply', source: 'Villa Monaco' },
  { metric: 'Tax status', uae: '0% personal income/capital gains/inheritance', monaco: 'No tax for residents', source: 'Multiple' },
]

// ============================================================================
// CITY HUBS: DUBAI COMPARISONS
// ============================================================================

export const dubaiVsLondon = [
  { metric: 'GFCI Ranking (Mar 2026)', dubai: '7th', london: '2nd', source: 'DIFC / Yahoo Finance' },
  { metric: 'GFCI Ranking (Mar 2023)', dubai: '22nd', london: null, source: 'Historical' },
  { metric: 'GFCI Ranking (Sep 2025)', dubai: '11th', london: null, source: 'Historical' },
  { metric: 'Companies registered (2023)', dubai: '1,924 new (28% increase)', london: null, source: 'DIFC' },
  { metric: 'Active registered companies', dubai: '8,844–9,000+', london: null, source: 'DIFC' },
  { metric: 'Employment', dubai: '50,000+', london: null, source: 'DIFC' },
  { metric: 'Expansion plan (DIFC Zabeel)', dubai: 'Dh100B ($27B)', london: null, source: 'DIFC' },
  { metric: 'Future capacity target', dubai: '42,000 companies, 125,000 professionals', london: null, source: 'DIFC' },
  { metric: 'Future prospects score', dubai: '127 (top globally)', london: null, source: 'DIFC' },
  { metric: 'D33 Agenda goal', dubai: 'Doubling economy to Dh32T by 2033', london: null, source: 'DIFC' },
  { metric: 'Top-4 global hub target', dubai: 'By 2033', london: null, source: 'DIFC' },
]

export const dubaiVsNewYork = [
  { metric: 'Rent (1BR city centre)', dubai: '$2,500–3,000/mo', newYork: '$3,500–5,000/mo', source: 'Engel & Volkers' },
  { metric: 'Utilities', dubai: '$150–250/mo', newYork: '$120–250/mo', source: 'Engel & Volkers' },
  { metric: 'Dining (mid-range main course)', dubai: '$18–25', newYork: '$22–35', source: 'Engel & Volkers' },
  { metric: 'Personal income tax', dubai: '0%', newYork: 'Federal + state + city', source: 'Engel & Volkers' },
  { metric: 'Property tax (annual)', dubai: 'None for individual owners', newYork: 'Varies by borough', source: 'Engel & Volkers' },
  { metric: 'Rental yields', dubai: '5–8%', newYork: 'Lower net yields', source: 'Engel & Volkers' },
  { metric: 'Best spot for wealthy (2025)', dubai: 'Dubai #1', newYork: null, source: 'Wealth report' },
  { metric: 'Inheritance tax', dubai: 'None', newYork: 'Yes', source: 'Engel & Volkers' },
  { metric: 'Capital gains treatment', dubai: 'Favourable', newYork: 'Subject to tax', source: 'Engel & Volkers' },
]

// ============================================================================
// SECTOR BENCHMARKING
// ============================================================================

export const aviationSector = [
  { metric: 'SKYTRAX Middle East ranking', emirates: '#2', qatarAirways: '#1', etihad: '#4', source: 'Skytrax World Airliner Awards 2025' },
  { metric: 'AirlineRatings safety 2025', emirates: '#3 (tied)', qatarAirways: '#3 (tied)', etihad: null, source: 'AirlineRatings Jan 2026' },
  { metric: 'Business class', emirates: 'Consistent fleet product', qatarAirways: 'QSuite premium', etihad: null, source: 'Multiple 2026' },
  { metric: 'Business class award 2025', emirates: null, qatarAirways: '#1', etihad: null, source: 'Simple Flying Mar 2026' },
  { metric: 'Economy (WiFi)', emirates: 'Better free WiFi', qatarAirways: 'Consistent', etihad: null, source: 'Simple Flying' },
  { metric: 'Fleet approach', emirates: 'Focused on mainline passenger', qatarAirways: 'Diverse fleet, wider network', etihad: null, source: 'Simple Flying' },
  { metric: 'Punctuality', emirates: 'Good', qatarAirways: 'Edges ahead', etihad: null, source: 'Multiple' },
  { metric: 'Historical global rank', emirates: '#1 (historical)', qatarAirways: '#2 (historical)', etihad: '#7', source: 'Various' },
]

export const wealthManagementSector = [
  { feature: 'Personal income tax', uae: '0%', switzerland: 'Up to 40%', monaco: '0%', singapore: '0–24%' },
  { feature: 'Capital gains tax', uae: '0%', switzerland: 'Generally exempt', monaco: '0%', singapore: '0%' },
  { feature: 'Wealth/inheritance tax', uae: 'None', switzerland: 'Yes', monaco: 'None', singapore: 'None' },
  { feature: 'Corporate tax', uae: '9% (0% in free zones)', switzerland: '12–21%', monaco: 'Low', singapore: '17–25%' },
  { feature: 'Crypto regulation', uae: 'VARA/ADGM clear', switzerland: 'Evolving', monaco: 'Accepting', singapore: 'Clear' },
  { feature: 'Foreign ownership', uae: '100%', switzerland: 'Strict limits', monaco: 'Restricted', singapore: 'Yes' },
  { feature: 'Heritage', uae: 'Modern digital', switzerland: 'Centuries-old', monaco: 'Boutique', singapore: 'Modern' },
  { feature: 'Discretion', uae: 'High', switzerland: 'Very high', monaco: 'High', singapore: 'High' },
  { feature: 'Positioning', uae: 'Asia–Europe hub', switzerland: 'Europe legacy', monaco: 'European niche', singapore: 'Asian hub' },
]

export const gccEconomicOverview = [
  { country: 'Saudi Arabia', gdpNominal: '$1.1–1.3T', gdpPerCapita: '~$46–50K', imf2026Growth: '3.1%', debtToGdp: '29.9%', spRating: null },
  { country: 'UAE', gdpNominal: '$540–601B', gdpPerCapita: '~$67–79K', imf2026Growth: '3.1%', debtToGdp: '~2%', spRating: 'AA' },
  { country: 'Qatar', gdpNominal: '$225B', gdpPerCapita: '$76K+ (highest in GCC)', imf2026Growth: '-8.6% (IMF contraction)', debtToGdp: '40–43%', spRating: null },
  { country: 'Kuwait', gdpNominal: '$134–160B', gdpPerCapita: '$32–52K', imf2026Growth: '-0.6%', debtToGdp: 'Low', spRating: null },
  { country: 'Oman', gdpNominal: '$107B', gdpPerCapita: '$20.5K', imf2026Growth: '3.5%', debtToGdp: '35.5%', spRating: 'BBB-' },
  { country: 'Bahrain', gdpNominal: null, gdpPerCapita: null, imf2026Growth: '-0.5%', debtToGdp: '133%', spRating: 'B (downgraded Nov 2025)' },
]

export const tourismSector = [
  { metric: 'Dubai international visitors (2025)', value: '19.59M (+5% vs 18.72M in 2024)', source: 'Dubai Economy / Gulf Business' },
  { metric: 'Dubai Jan 2026 visitors', value: '2.00M (+3% YoY)', source: 'Dubai DET' },
  { metric: 'Abu Dhabi visitors (2025)', value: '26.6M total', source: 'Gulf News Apr 2026' },
  { metric: 'Abu Dhabi hotel revenues (2025)', value: 'Dh9.1 billion', source: 'Gulf News Apr 2026' },
  { metric: 'Abu Dhabi hotel guests (2025)', value: '5.9M (+338K holiday homes/glamping)', source: 'Gulf News Apr 2026' },
  { metric: 'UAE non-oil foreign trade (2025)', value: 'Dh3.8 trillion (first time)', source: 'Khaleej Times Jan 2026' },
  { metric: 'UAE non-oil foreign trade milestone', value: '$1 trillion first time (2025/2026)', source: 'WAM / Gulf Good News Feb 2026' },
  { metric: 'UAE exports growth', value: '+45% (non-oil, year-on-year)', source: 'Gulf Good News Feb 2026' },
  { metric: 'UAE total trade', value: 'Exceeds Dh6 trillion', source: 'Instagram @WAM' },
  { metric: 'UAE global goods exports rank', value: '9th globally', source: 'WAM Feb 2026' },
  { metric: 'UAE global goods imports rank', value: '13th globally', source: 'WAM Feb 2026' },
  { metric: 'UAE re-exports (2025)', value: 'AED 830.2B ($226B), +15.7% vs 2024', source: 'Trade Arabia Jan 2026' },
  { metric: 'UAE non-oil sector GDP contribution (Q1 2025)', value: '77%+', source: 'Marana Magazine' },
]

// ============================================================================
// COMPETITOR INTELLIGENCE CARDS
// ============================================================================

export const competitorIntelligenceCards = {
  saudiArabia: {
    strengths: '2.7x UAE\'s oil reserves; 3.8x UAE\'s oil production; largest GCC economy; 25x UAE\'s land area; 2.7x UAE\'s defense budget; 3.8x UAE\'s active troops; Vision 2030 mega-projects (NEOM, Red Sea, Qiddiya)',
    weaknesses: 'Lower per-capita income; lower diversification (56% non-oil vs UAE\'s 77%); higher taxes (20% corporate); stricter social norms; lower expat share (38% vs UAE\'s 88%)',
    vision: 'Vision 2030 — NEOM ($500B city), Red Sea tourism, Qiddiya entertainment city',
    uaeCompetitiveEdge: 'Per-capita income, business efficiency, tax rates, religious tolerance, expat attractiveness, construction volume, diversification speed',
  },
  qatar: {
    strengths: 'Highest GCC GDP per capita ($77K); near-zero unemployment (0.1%); highest trade surplus ratio (30% of GDP); world\'s largest LNG exporter',
    weaknesses: '4x smaller population; 7x smaller area; lower diversification; no VAT; higher government debt ratio (40–43%)',
    uaeCompetitiveEdge: 'Total GDP, total exports, scale, diversification, education spending, health infrastructure',
  },
  oman: {
    strengths: '0% VAT; lower cost of living; scenic tourism appeal; improving sovereign ratings (BBB-)',
    weaknesses: '5x smaller GDP; 2x smaller GDP per capita; lower diversification; smaller oil reserves; no sovereign wealth fund',
    uaeCompetitiveEdge: 'Scale, ratings, HDI, diversification, tourism infrastructure',
  },
  israel: {
    strengths: 'Deep-tech leadership (cyber, blockchain, AI, quantum computing); Start-Up Nation ecosystem; high-tech workforce; strong defense industry',
    weaknesses: 'Small market; geopolitical risk; limited natural resources',
    postAccordsOpportunity: '$3B joint fund; tech transfer in AI, health, agrifood, cybersecurity; defense intelligence sharing',
    uaeCompetitiveEdge: 'Scale; government-supported AI; institutional strength; market access to 4B+ region',
  },
  turkey: {
    strengths: 'Largest military in Middle East (PwrIndx 0.1975); large economy; cultural/soft power reach; historical influence',
    weaknesses: 'Higher inflation; weaker sovereign ratings; geopolitical exposure',
    rivalryArena: 'Africa (ODA competition, Somaliland vs central govt support); Egypt (opposing post-Arab Spring postures)',
    uaeCompetitiveEdge: 'Diversification speed; business environment rankings; tax efficiency; naval fleet; sovereign wealth',
  },
  singapore: {
    strengths: 'Asian market access; geopolitical stability; rule of law; world-class education and healthcare; internet infrastructure (250 Mbps)',
    weaknesses: '38% higher cost of living; progressive income tax (up to 24%); more complex visa process',
    uaeCompetitiveEdge: 'Tax efficiency (0% vs up to 24%); visa accessibility; lower cost of living; larger geographic market reach',
  },
}

// ============================================================================
// URL SOURCE REGISTRY
// ============================================================================

export const urlSourceRegistry = [
  { source: 'IMD Business School', url: 'https://www.imd.org/centers/wcc/world-competitiveness-center/rankings/', tier: 'TIER 1' },
  { source: 'GEM Global Report', url: 'https://www.gemconsortium.org/reports/latest-global-report', tier: 'TIER 1' },
  { source: 'Global Firepower (GFP)', url: 'https://www.globalfirepower.com/', tier: 'TIER 2' },
  { source: 'Global Firepower Middle East', url: 'https://www.globalfirepower.com/countries-listing-middle-east.php', tier: 'TIER 2' },
  { source: 'Long Finance / Z/Yen GFCI', url: 'https://www.longfinance.net/programmes/financial-centre-futures/global-financial-centres-index/', tier: 'TIER 1' },
  { source: 'WorldData.info', url: 'https://www.worlddata.info/', tier: 'TIER 2' },
  { source: 'CountryEconomy.com', url: 'https://countryeconomy.com/', tier: 'TIER 2' },
  { source: 'Khaleej Times', url: 'https://www.khaleejtimes.com/', tier: 'TIER 1' },
  { source: 'Gulf News', url: 'https://gulfnews.com/', tier: 'TIER 1' },
  { source: 'The National (UAE)', url: 'https://www.thenationalnews.com/', tier: 'TIER 1' },
  { source: 'Simple Flying', url: 'https://simpleflying.com/', tier: 'TIER 2' },
  { source: 'World Airliner Awards / SKYTRAX', url: 'https://www.worldairlineawards.com/', tier: 'TIER 1' },
  { source: 'AirlineRatings', url: 'https://www.airlineratings.com/', tier: 'TIER 2' },
  { source: 'Forbes Middle East', url: 'https://www.forbesmiddleeast.com/', tier: 'TIER 1' },
  { source: 'PMC/NIH Academic Study', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9670075/', tier: 'Academic' },
  { source: 'Sage Journals', url: 'https://journals.sagepub.com/', tier: 'Academic' },
  { source: 'Middle East Institute (MEI)', url: 'https://mei.edu/', tier: 'TIER 1' },
  { source: 'Start-Up Nation Central', url: 'https://startupnationcentral.org/', tier: 'TIER 2' },
  { source: 'Global Entrepreneurship Monitor', url: 'https://www.gemconsortium.org/', tier: 'TIER 1' },
  { source: 'Novad.app', url: 'https://novad.app/', tier: 'TIER 3' },
  { source: 'Numbeo', url: 'https://numbeo.com/', tier: 'TIER 2' },
  { source: 'Engel & Volkers', url: 'https://www.engelvoelkers.com/', tier: 'TIER 3' },
  { source: 'Villa Monaco', url: 'https://www.villamonaco.com/', tier: 'TIER 3' },
  { source: 'Marana Magazine', url: 'https://maranamagazine.com/', tier: 'TIER 2' },
  { source: 'GlobalMilitary.net', url: 'https://www.globalmilitary.net/', tier: 'TIER 2' },
  { source: 'WAM (UAE News Agency)', url: 'https://wam.ae/', tier: 'TIER 0' },
  { source: 'Freedom House', url: 'https://freedomhouse.org/', tier: 'TIER 1' },
  { source: 'Human Rights Watch', url: 'https://www.hrw.org/', tier: 'TIER 1' },
  { source: 'World Bank', url: 'https://www.worldbank.org/', tier: 'TIER 0' },
  { source: 'IMF', url: 'https://www.imf.org/', tier: 'TIER 0' },
  { source: 'Transparency International', url: 'https://www.transparency.org/', tier: 'TIER 1' },
  { source: 'UN Sustainable Development Solutions', url: 'https://unsdsn.org/', tier: 'TIER 0' },
  { source: 'Brand Finance', url: 'https://brandirectory.com/', tier: 'TIER 2' },
  { source: 'Atlantic Council', url: 'https://www.atlanticcouncil.org/', tier: 'TIER 1' },
  { source: 'Heritage Foundation', url: 'https://www.heritage.org/', tier: 'TIER 2' },
  { source: 'OEC World', url: 'https://oec.world/', tier: 'TIER 2' },
  { source: 'Trading Economics', url: 'https://tradingeconomics.com/', tier: 'TIER 2' },
  { source: 'Air University (US)', url: 'https://www.airuniversity.af.edu/', tier: 'Academic' },
  { source: 'Belfer Center', url: 'https://www.belfercenter.org/', tier: 'Academic' },
  { source: 'SCMP (South China Morning Post)', url: 'https://www.scmp.com/', tier: 'TIER 1' },
  { source: 'Emifast', url: 'https://www.emifast.com/', tier: 'TIER 3' },
  { source: 'GulfIF / Gulf International Forum', url: 'https://gulfif.org/', tier: 'TIER 2' },
  { source: 'Arab News', url: 'https://www.arabnews.com/', tier: 'TIER 1' },
  { source: 'Arabian Business', url: 'https://www.arabianbusiness.com/', tier: 'TIER 2' },
  { source: 'Semafor', url: 'https://www.semafor.com/', tier: 'TIER 1' },
  { source: 'Times of Israel', url: 'https://www.timesofisrael.com/', tier: 'TIER 2' },
  { source: 'Britannica / Abraham Accords', url: 'https://www.britannica.com/topic/Abraham-Accords', tier: 'TIER 1' },
  { source: 'Wikipedia (GFCI, Abraham Accords)', url: 'https://en.wikipedia.org/', tier: 'TIER 2' },
  { source: 'Turkiye Today', url: 'https://www.turkiyetoday.com/', tier: 'TIER 2' },
  { source: 'Georank.org', url: 'https://georank.org/', tier: 'TIER 2' },
  { source: 'World Population Review', url: 'https://worldpopulationreview.com/', tier: 'TIER 2' },
]

// ============================================================================
// DATA TABLES: DASHBOARD INGESTION
// ============================================================================

export const uaeRankingsOverTime = [
  { index: 'IMD World Competitiveness', 2022: null, 2023: null, 2024: null, 2025: '5th', 2026: null, source: 'IMD' },
  { index: 'GEM Entrepreneurship', 2022: '1st', 2023: '1st', 2024: '1st', 2025: '1st', 2026: '1st (5th yr)', source: 'GEM' },
  { index: 'GFCI Dubai ranking', 2022: null, 2023: '22nd', 2024: null, 2025: '11th', 2026: '7th', source: 'Long Finance' },
  { index: 'World Happiness (Arab #)', 2022: null, 2023: null, 2024: null, 2025: null, 2026: '1st', source: 'UN SDSN' },
  { index: 'Digital Competitiveness', 2022: null, 2023: null, 2024: null, 2025: '9th', 2026: null, source: 'IMD' },
  { index: 'Soft Power (Brand Finance)', 2022: null, 2023: null, 2024: null, 2025: null, 2026: '10th (4th yr)', source: 'Brand Finance' },
  { index: 'Corruption Index score', 2022: null, 2023: null, 2024: '68', 2025: null, 2026: null, source: 'TI' },
  { index: 'Human Prosperity Index', 2022: null, 2023: null, 2024: null, 2025: null, 2026: '13th', source: 'UN/World Bank' },
]

export const gccComparisonMatrix = [
  { metric: 'GDP ($B)', uae: '552', saudiArabia: '1,100–1,300', qatar: '225', oman: '107', bahrain: null, kuwait: '134–160' },
  { metric: 'GDP per capita ($)', uae: '67–79K', saudiArabia: '47–50K', qatar: '77K (highest)', oman: '20.5K', bahrain: null, kuwait: '32–52K' },
  { metric: 'Population (M)', uae: '11', saudiArabia: '35', qatar: '2.9', oman: '5.3', bahrain: null, kuwait: '4.5' },
  { metric: 'Non-oil GDP %', uae: '77%+', saudiArabia: '56%', qatar: null, oman: null, bahrain: null, kuwait: null },
  { metric: 'Debt/GDP', uae: '~2%', saudiArabia: '30%', qatar: '40–43%', oman: '35.5%', bahrain: '133%', kuwait: 'Low' },
  { metric: 'S&P rating', uae: 'AA', saudiArabia: null, qatar: null, oman: 'BBB-', bahrain: 'B', kuwait: null },
  { metric: 'IMF 2026 growth', uae: '3.1%', saudiArabia: '3.1%', qatar: '-8.6%', oman: '3.5%', bahrain: '-0.5%', kuwait: '-0.6%' },
  { metric: 'Tourism arrivals (M)', uae: '19.6 (Dubai alone)', saudiArabia: null, qatar: null, oman: '2.1', bahrain: null, kuwait: null },
  { metric: 'Oil prod (M bbl/d)', uae: '3.2', saudiArabia: '10.4', qatar: null, oman: '1.0', bahrain: null, kuwait: null },
  { metric: 'Military rank (ME)', uae: '7th', saudiArabia: '5th', qatar: null, oman: null, bahrain: null, kuwait: null },
  { metric: 'HDI', uae: '0.937', saudiArabia: null, qatar: null, oman: '0.819', bahrain: null, kuwait: null },
  { metric: 'VAT rate', uae: '5%', saudiArabia: null, qatar: null, oman: '0%', bahrain: null, kuwait: null },
]

export const middleEastMilitaryRankings = [
  { meRank: 1, country: 'Turkey', powerIndex: '0.1975', globalRank: null },
  { meRank: 2, country: 'Israel', powerIndex: '0.2707', globalRank: null },
  { meRank: 3, country: 'Iran', powerIndex: '0.3199', globalRank: null },
  { meRank: 4, country: 'Egypt', powerIndex: '0.3651', globalRank: null },
  { meRank: 5, country: 'Saudi Arabia', powerIndex: '0.4473', globalRank: 25 },
  { meRank: 7, country: 'UAE', powerIndex: '1.0188', globalRank: 54 },
  { meRank: 9, country: 'Qatar', powerIndex: '1.4096', globalRank: null },
  { meRank: 10, country: 'Bahrain', powerIndex: '1.6731', globalRank: null },
  { meRank: 11, country: 'Kuwait', powerIndex: '1.7161', globalRank: null },
  { meRank: 12, country: 'Oman', powerIndex: '1.8823', globalRank: null },
]

export const uaeCompetitiveAdvantages = [
  { advantageDomain: 'Business competitiveness', uaeStrength: 'IMD #5 globally', closestRival: 'Saudi ~19th, Qatar ~19th', uaeAdvantageMargin: '+14 ranks' },
  { advantageDomain: 'Entrepreneurship', uaeStrength: 'GEM #1 (5th yr)', closestRival: 'Saudi not in top 10', uaeAdvantageMargin: 'Global leader' },
  { advantageDomain: 'Financial hub (city)', uaeStrength: 'Dubai GFCI #7', closestRival: 'Riyadh not in top 20', uaeAdvantageMargin: 'Top 10 vs not ranked' },
  { advantageDomain: 'Non-oil trade', uaeStrength: '$1T+ (first time)', closestRival: 'Saudi below $1T', uaeAdvantageMargin: 'Milestone reached' },
  { advantageDomain: 'Tax efficiency', uaeStrength: '0% personal income', closestRival: 'Switzerland 40%, Singapore 24%', uaeAdvantageMargin: 'Zero vs high' },
  { advantageDomain: 'Expat attractiveness', uaeStrength: '88–94% expatriate', closestRival: 'Qatar 38%, Saudi 38%', uaeAdvantageMargin: '2.3x any GCC competitor' },
  { advantageDomain: 'Religious tolerance', uaeStrength: 'Churches, temples, synagogue', closestRival: 'Saudi: none', uaeAdvantageMargin: 'Unique in GCC' },
  { advantageDomain: 'Naval fleet size', uaeStrength: '84 ships', closestRival: 'Saudi 32', uaeAdvantageMargin: '2.6x Saudi' },
  { advantageDomain: 'Construction volume', uaeStrength: '$31B awarded', closestRival: 'Saudi $20.6B', uaeAdvantageMargin: '1.5x Saudi' },
  { advantageDomain: 'Defense budget efficiency', uaeStrength: 'Strong output per $', closestRival: 'Saudi 3x budget', uaeAdvantageMargin: 'Better ROI' },
  { advantageDomain: 'Non-oil GDP diversification', uaeStrength: '77%+', closestRival: 'Saudi 56%', uaeAdvantageMargin: '+21pp lead' },
]

export const uaeCompetitiveVulnerabilities = [
  { vulnerability: 'Military personnel', uaeMetric: '65K', dominantRival: 'Egypt 836K', rivalAdvantage: 'Egypt 13x' },
  { vulnerability: 'Defense spending', uaeMetric: '$23.5B', dominantRival: 'Saudi $64B', rivalAdvantage: 'Saudi 2.7x' },
  { vulnerability: 'Geographic size', uaeMetric: '83,600 km²', dominantRival: 'Saudi 2.15M km²', rivalAdvantage: 'Saudi 25x' },
  { vulnerability: 'Oil reserves', uaeMetric: '97.8B bbl', dominantRival: 'Saudi 266B bbl', rivalAdvantage: 'Saudi 2.7x' },
  { vulnerability: 'GDP per capita (vs Qatar)', uaeMetric: '$50K', dominantRival: 'Qatar $77K', rivalAdvantage: 'Qatar 1.5x' },
  { vulnerability: 'Geopolitical stability', uaeMetric: 'Moderate risk', dominantRival: 'Singapore highest', rivalAdvantage: 'Singapore safer' },
  { vulnerability: 'Regional military rank', uaeMetric: '7th ME', dominantRival: 'Turkey 1st ME', rivalAdvantage: 'Turkey stronger' },
  { vulnerability: 'Press freedom', uaeMetric: '160/180 (RSF)', dominantRival: null, rivalAdvantage: 'Significant concern' },
]

export const worldRankingsSummary = [
  { index: 'IMD Competitiveness', uae: '5th', saudi: '~19th', qatar: '~19th', turkey: null, israel: null, egypt: null, singapore: '2nd', switzerland: '1st' },
  { index: 'GEM Entrepreneurship', uae: '1st', saudi: null, qatar: null, turkey: null, israel: null, egypt: null, singapore: null, switzerland: null },
  { index: 'GFCI (city)', uae: '7th (Dubai)', saudi: null, qatar: null, turkey: null, israel: null, egypt: null, singapore: '3rd', switzerland: null },
  { index: 'Happiness (UN)', uae: '21st', saudi: '22nd', qatar: null, turkey: null, israel: null, egypt: null, singapore: null, switzerland: '1st' },
  { index: 'Military GFP (ME rank)', uae: '7th', saudi: '5th', qatar: null, turkey: '1st', israel: '2nd', egypt: '4th', singapore: null, switzerland: null },
  { index: 'Soft Power', uae: '10th', saudi: null, qatar: null, turkey: null, israel: null, egypt: null, singapore: null, switzerland: null },
  { index: 'Digital Competitiveness', uae: '9th', saudi: null, qatar: null, turkey: null, israel: null, egypt: null, singapore: null, switzerland: null },
  { index: 'Corruption Index', uae: '68', saudi: null, qatar: null, turkey: null, israel: null, egypt: null, singapore: '3rd', switzerland: '3rd' },
  { index: 'HDI', uae: '0.937', saudi: null, qatar: null, turkey: null, israel: null, egypt: null, singapore: null, switzerland: null },
  { index: 'Prosperity Index', uae: '13th', saudi: null, qatar: null, turkey: null, israel: null, egypt: null, singapore: null, switzerland: null },
]

// ============================================================================
// SENTIMENT ANALYSIS BY DIMENSION
// ============================================================================

export const sentimentAnalysisByDimension = [
  { dimension: 'Economic diversification', uaeSentiment: 'Strongly Positive', note: '77%+ non-oil GDP; $1T non-oil trade milestone; 5.1% GDP growth' },
  { dimension: 'Business environment', uaeSentiment: 'Strongly Positive', note: 'IMD #5; GEM #1 five years running; absence of bureaucracy ranked #1 globally' },
  { dimension: 'Tax efficiency', uaeSentiment: 'Strongly Positive', note: '0% income/capital gains/inheritance vs 15–40% in competitors' },
  { dimension: 'Financial hub', uaeSentiment: 'Strongly Positive', note: 'Dubai #7 GFCI; fastest-climbing financial centre in index history' },
  { dimension: 'Military', uaeSentiment: 'Mixed', note: 'Strong naval fleet (84 vs Saudi 32); but 13:1 personnel disadvantage vs Egypt' },
  { dimension: 'Geopolitical risk', uaeSentiment: 'Mixed', note: 'Higher risk than Singapore/Switzerland; press freedom concerns (RSF 160/180)' },
  { dimension: 'Human rights/democracy', uaeSentiment: 'Negative', note: 'Freedom House "Not Free"; HRW raised concerns; World Press Freedom 160/180' },
  { dimension: 'Religious tolerance', uaeSentiment: 'Positive', note: 'Only GCC state with synagogue, churches, temples openly; unique pluralist position' },
  { dimension: 'Expat attractiveness', uaeSentiment: 'Strongly Positive', note: '88–94% expatriate population; zero income tax; easier visas' },
  { dimension: 'Tourism', uaeSentiment: 'Strongly Positive', note: 'Dubai 19.6M visitors 2025; Abu Dhabi 26.6M; records broken consecutively' },
  { dimension: 'Soft power', uaeSentiment: 'Positive', note: '#10 globally 4th consecutive year; #21 happiness; #13 prosperity' },
  { dimension: 'Regional rivalry', uaeSentiment: 'Confident', note: 'Leads Saudi in diversification speed, construction, per-capita metrics' },
]

// ============================================================================
// VERIFICATION & QUALITY NOTES
// ============================================================================

export const dataProvenance = [
  { dataCategory: 'Economic statistics', oldestSource: '2019 (WorldData)', newestSource: 'Apr 2026 (IMF, searches)', temporalSpread: '~7 years' },
  { dataCategory: 'Rankings', oldestSource: '2020 (World Bank legacy)', newestSource: 'Apr 2026 (multiple)', temporalSpread: '~6 years' },
  { dataCategory: 'Military data', oldestSource: 'GFP 2026 (current)', newestSource: 'GFP 2026 (current)', temporalSpread: 'Single point' },
  { dataCategory: 'Trade data', oldestSource: '2024 (OEC)', newestSource: 'Feb 2026 (WAM)', temporalSpread: '~2 years' },
  { dataCategory: 'Tourism data', oldestSource: '2025 (Gulf News)', newestSource: 'Apr 2026 (multiple)', temporalSpread: '~1 year' },
]

export const sourceTierDistribution = [
  { tier: 'TIER 0', definition: 'Government/multilateral', count: 5, examples: 'WAM, IMF, World Bank, UN SDSN, Transparency International' },
  { tier: 'TIER 1', definition: 'Mainstream authoritative', count: 12, examples: 'Khaleej Times, Gulf News, IMD, GEM, Forbes ME, SCMP, Atlantic Council' },
  { tier: 'TIER 2', definition: 'Specialised data', count: 15, examples: 'GFP, WorldData, CountryEconomy, OEC, MEI, Simple Flying' },
  { tier: 'TIER 3', definition: 'Industry/commercial', count: 5, examples: 'Engel & Volkers, Villa Monaco, Novad.app, Emifast' },
  { tier: 'Academic', definition: 'Peer-reviewed', count: 5, examples: 'PMC/NIH, Sage Journals, Air University, Belfer Center' },
]

// ============================================================================
// MAIN EXPORT
// ============================================================================

export const competitiveBenchmarkingData = {
  // Executive Summary
  executiveSummary,

  // UAE Global Rankings
  uaeGlobalRankings,
  uaeIndicatorPerformance,

  // Competitor Comparisons
  uaeVsSaudi,
  uaeVsQatar,
  aviationRivalry,
  uaeVsOman,
  uaeVsBahrain,
  uaeVsKuwait,
  uaeVsIsrael,
  uaeVsTurkey,
  uaeVsEgypt,
  uaeVsSingapore,
  uaeVsSwitzerland,
  uaeVsHongKong,
  uaeVsMonaco,

  // City Hubs
  dubaiVsLondon,
  dubaiVsNewYork,

  // Sector Benchmarking
  aviationSector,
  wealthManagementSector,
  gccEconomicOverview,
  tourismSector,

  // Competitor Intelligence
  competitorIntelligenceCards,

  // Source Registry
  urlSourceRegistry,

  // Data Tables
  uaeRankingsOverTime,
  gccComparisonMatrix,
  middleEastMilitaryRankings,
  uaeCompetitiveAdvantages,
  uaeCompetitiveVulnerabilities,
  worldRankingsSummary,

  // Sentiment Analysis
  sentimentAnalysisByDimension,

  // Verification
  dataProvenance,
  sourceTierDistribution,
}

export default competitiveBenchmarkingData
