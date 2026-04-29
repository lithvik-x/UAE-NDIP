// @ts-nocheck
/**
 * Media Organizations Data - UAE National Digital Intelligence Platform
 * Comprehensive research data on UAE-based, international, and regional media organizations
 * Data sourced from 18 web sources (16 Wikipedia + 2 news sites)
 */

'use client'

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const executionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 18,
  pagesFetched: 16,
  enrichmentDate: '2026-04-27',
  dataSources: {
    wikipedia: 16,
    newsSites: 2
  }
}

// ============================================================================
// UAE-BASED MEDIA ORGANIZATIONS
// ============================================================================

export interface MediaOrganization {
  id: string
  name: string
  nameAr?: string
  type: 'PRINT' | 'BROADCAST_TV' | 'BROADCAST_RADIO' | 'DIGITAL_NATIVE' | 'NEWS_AGENCY' | 'INTERNATIONAL' | 'REGIONAL'
  language: string
  founded?: string
  headquarters: string
  country: string
  owner?: string
  publisher?: string
  website?: string
  sentiment: 'PRO_GOVERNMENT' | 'PRO_SAUDI' | 'PRO_QATAR' | 'CRITICAL' | 'NEUTRAL'
  uaeRelevance: 'CRITICAL' | 'HIGH' | 'MEDIUM'
  credibility: 'HIGHEST' | 'HIGH' | 'MEDIUM'
  description?: string
  keyMetrics?: Record<string, string | number>
  keyPersonnel?: Array<{ position: string; name: string; background?: string }>
  historicalMilestones?: Array<{ date: string; event: string }>
  controversies?: Array<{ year: string; incident: string }>
  coverage?: string[]
}

// PRINT MEDIA
export const printMedia: MediaOrganization[] = [
  {
    id: 'al-ittihad',
    name: 'Al Ittihad',
    nameAr: 'الاتحاد',
    type: 'PRINT',
    language: 'Arabic',
    founded: 'October 20, 1969',
    headquarters: 'Abu Dhabi',
    country: 'UAE',
    owner: 'Abu Dhabi Media (state-owned)',
    publisher: 'Al Ittihad Press and Publishing Corporation',
    website: 'alittihad.ae',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'CRITICAL',
    credibility: 'HIGH',
    description: 'First regular newspaper in UAE, foundational to UAE media landscape',
    keyMetrics: {
      circulation2003: 58000,
      circulation2006: 94275,
      circulation2008: 76000,
      circulation2013FirstHalf: 109640,
      IpsosReadership2009: '59.3%'
    },
    keyPersonnel: [],
    historicalMilestones: [
      { date: 'October 20, 1969', event: 'First issue published (12-page weekly, 5,500 copies)' },
      { date: 'Early years', event: 'No local printing press - papers produced in Beirut and shipped' },
      { date: '1969-1970s', event: 'Distributed free initially to compete with other Arab newspapers' },
      { date: 'March 15, 1996', event: 'Launched website (first local UAE newspaper online)' }
    ]
  },
  {
    id: 'al-khaleej',
    name: 'Al Khaleej',
    nameAr: 'الخليج',
    type: 'PRINT',
    language: 'Arabic',
    founded: 'October 19, 1970',
    headquarters: 'Sharjah',
    country: 'UAE',
    owner: 'Dar Al Khaleej',
    website: 'www.alkhaleej.ae',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'CRITICAL',
    credibility: 'HIGH',
    description: 'First newspaper published in UAE, one of most important publications in Arab States of Persian Gulf',
    keyMetrics: {
      circulation2003: 60000,
      circulation2013: 37000,
      rank2003: 'First in UAE'
    },
    keyPersonnel: [
      { position: 'Editor-in-chief', name: 'Khaled Abdullah Omran' },
      { position: 'Executive editor-in-chief', name: 'Raed Barqawi' },
      { position: 'Managing editor', name: 'Mahmood Hasuna' },
      { position: 'Editor of economic affairs', name: 'Khoder Makki' },
      { position: 'Editor of local affairs', name: 'Jamal Aldwayri' },
      { position: 'Editor of political affairs', name: 'Ibrahim Maari' },
      { position: 'Editor of news', name: 'Osman Alnimr' }
    ],
    historicalMilestones: [
      { date: 'October 19, 1970', event: 'Launched by the Taryam brothers' },
      { date: 'February 22, 1972', event: 'Closed due to financial difficulties after nearly 300 issues' },
      { date: '1979', event: 'Relaunched as a daily with 16 pages' },
      { date: '1980-1983', event: 'Adly Barsoum served as deputy editor-in-chief, driving reformation' },
      { date: '1990s', event: 'New printing equipment purchased' }
    ]
  },
  {
    id: 'khaleej-times',
    name: 'Khaleej Times',
    type: 'PRINT',
    language: 'English',
    founded: 'April 16, 1978',
    headquarters: 'Dubai',
    country: 'UAE',
    owner: 'Galadari family (Suhail Galadari and Mohammed Galadari - Co-Chairmen)',
    publisher: 'Galadari Printing and Publishing',
    website: 'khaleejtimes.com',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'CRITICAL',
    credibility: 'HIGH',
    description: 'First English daily in UAE; UAE\'s longest-running English daily; highest digital reach',
    keyMetrics: {
      monthlyDigitalReach: 37200000,
      websiteUsersMonthly: 6500000,
      instagramFollowers: 3200000,
      facebookUsers: 21700000,
      twitterFollowers: 1000000
    },
    keyPersonnel: [
      { position: 'CEO', name: 'Charles Yardley', background: 'Previously led London\'s Evening Standard (appointed September 2024)' },
      { position: 'Chief Content Officer', name: 'Ted Kemp', background: 'Previously CNBC Digital international managing editor (joined May 2025)' },
      { position: 'President', name: 'Charles Yardley' }
    ],
    historicalMilestones: [
      { date: 'June 3, 2023', event: 'Stopped print edition on weekends' },
      { date: 'September 2020', event: 'Launched Telegram news subscription service' },
      { date: 'January 29, 2026', event: 'Redesigned website' },
      { date: 'Late 2024', event: 'Launched KTplus (KT+) - digital/social media unit' },
      { date: 'March 2025', event: 'Launched KT Luxe - weekend business/lifestyle magazine' }
    ]
  },
  {
    id: 'gulf-news',
    name: 'Gulf News',
    type: 'PRINT',
    language: 'English',
    founded: 'September 30, 1978',
    headquarters: 'Dubai',
    country: 'UAE',
    owner: 'Al Nisr Publishing (Al Tayer Group)',
    website: 'gulfnews.com',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'CRITICAL',
    credibility: 'HIGH',
    description: 'Major English-language daily, market leader, changed from broadsheet to Berliner format first in Arab countries',
    keyMetrics: {
      circulationDecember2012Daily: 108187,
      circulationDecember2012Weekend: 108777
    },
    keyPersonnel: [
      { position: 'CEO', name: 'Vijay Vaghela' },
      { position: 'Editor-in-chief', name: 'Abdul Hamid Ahmad', background: '2008-December 2024' },
      { position: 'Editor-in-chief', name: 'Mark Thompson', background: 'From September 2025' },
      { position: 'Chairman', name: 'Obaid Al Tayer', background: 'Former UAE Finance Minister' }
    ],
    historicalMilestones: [
      { date: 'June 1, 2012', event: 'Changed from broadsheet to Berliner format (first in Arab countries)' },
      { date: 'June 3, 2023', event: 'Stopped weekend print edition' },
      { date: 'September 1996', event: 'First online edition (first online edition among Gulf newspapers)' },
      { date: '2005', event: 'Major relaunch' },
      { date: '2010', event: 'Most-read English online paper in MENA' },
      { date: '2025', event: 'Relaunched as dynamic news website' }
    ],
    controversies: [
      { year: '2009', incident: 'Published column claiming Holocaust was "a lie" by Zionists (later removed)' },
      { year: 'December 2013', incident: 'Alleged Pakistan/Afghanistan didn\'t vote for Dubai Expo 2020 (denied)' },
      { year: '2017', incident: 'Former Editor Francis Matthew charged with wife\'s murder' }
    ]
  },
  {
    id: 'al-bayan',
    name: 'Al Bayan',
    nameAr: 'البيان',
    type: 'PRINT',
    language: 'Arabic',
    founded: 'May 10, 1980',
    headquarters: 'Dubai',
    country: 'UAE',
    owner: 'Dubai Media Incorporated',
    website: 'www.albayan.ae',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'Major Arabic daily in Dubai, first woman to hold position of editor-in-chief at a daily newspaper in UAE',
    keyMetrics: {
      circulation2013: 10000
    },
    keyPersonnel: [
      { position: 'Editor-in-Chief', name: 'Muna Busamra' }
    ],
    controversies: [
      { year: '2023', incident: 'Muna Busamra became FIRST woman to hold position of editor-in-chief at a daily newspaper in the UAE' }
    ]
  },
  {
    id: 'emarat-al-youm',
    name: 'Emarat Al Youm',
    nameAr: 'الامارات اليوم',
    type: 'PRINT',
    language: 'Arabic',
    founded: 'September 20, 2005',
    headquarters: 'Dubai',
    country: 'UAE',
    owner: 'Dubai Media Incorporated (since October 2009)',
    publisher: 'Dubai Media Incorporated',
    website: 'www.emaratalyoum.com',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'Major Dubai-based Arabic daily tabloid',
    keyPersonnel: [
      { position: 'Editor-in-chief', name: 'Sami Al Reyami' },
      { position: 'Managing editor', name: 'Abdallah Bani-issa' }
    ],
    historicalMilestones: [
      { date: 'October 2006', event: 'Published article alleging ruling family\'s thoroughbred race horses were given steroids' },
      { date: 'July 2009', event: 'Abu Dhabi Federal Court of Appeal suspended both print and online versions for 20 days' },
      { date: 'July 2009', event: 'Fine: $5,445' },
      { date: 'July 26, 2009', event: 'Relaunched' }
    ]
  },
  {
    id: 'gulf-today',
    name: 'Gulf Today',
    type: 'PRINT',
    language: 'English',
    founded: 'April 15, 1996',
    headquarters: 'Sharjah',
    country: 'UAE',
    owner: 'Dar Al Khaleej for Press, Printing and Publishing',
    website: '-',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'Major English daily from Sharjah, part of Dar Al Khaleej group',
    keyPersonnel: [
      { position: 'Editor in Chief', name: 'Aysha Taryam' }
    ],
    historicalMilestones: [
      { date: 'April 15, 1996', event: 'Founded by Taryam Omran Taryam and Abdullah Omran Taryam' }
    ]
  },
  {
    id: 'the-national',
    name: 'The National',
    type: 'PRINT',
    language: 'English',
    founded: 'April 17, 2008',
    headquarters: 'Abu Dhabi',
    country: 'UAE',
    owner: 'International Media Investments (IMI) - Sheikh Mansour bin Zayed Al Nahyan',
    website: 'thenationalnews.com',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'Abu Dhabi Media English daily, IMI acquired 2016, Sheikh Mansour ownership'
  }
]

// BROADCAST TV
export const broadcastTV: MediaOrganization[] = [
  {
    id: 'al-arabiya',
    name: 'Al Arabiya',
    nameAr: 'العربية',
    type: 'BROADCAST_TV',
    language: 'Arabic',
    founded: 'March 3, 2003',
    headquarters: 'Riyadh, Saudi Arabia',
    country: 'Saudi Arabia',
    owner: 'MBC Group, Saudi Arabia Public Investment Fund (PIF) 54%',
    website: 'alarabiya.net',
    sentiment: 'PRO_SAUDI',
    uaeRelevance: 'HIGH',
    credibility: 'MEDIUM',
    description: 'Saudi Arabian state-owned international Arabic-language television news channel, originally launched in Dubai Media City, UAE',
    keyMetrics: {
      PIFStake: '54% (acquired 2025)',
      retainedByWaleedIbrahim: '36%'
    },
    keyPersonnel: [
      { position: 'General Manager', name: 'Mamdouh al-Muhaini', background: 'Since October 2019' }
    ],
    historicalMilestones: [
      { date: 'March 3, 2003', event: 'Launched' },
      { date: 'July 2025', event: 'Relocated headquarters from Dubai to Riyadh (completed)' }
    ],
    controversies: [
      { year: '2015', incident: 'Plagiarism incident' },
      { year: '2017', incident: 'Fined £120,000 by UK regulator Ofcom' }
    ]
  },
  {
    id: 'sky-news-arabia',
    name: 'Sky News Arabia',
    nameAr: 'سكاي نيوز عربية',
    type: 'BROADCAST_TV',
    language: 'Arabic',
    founded: 'May 6, 2012',
    headquarters: 'Abu Dhabi',
    country: 'UAE',
    owner: 'Sky Group (Comcast) 50% + International Media Investments (IMI) 50%, IMI controlled by Sheikh Mansour bin Zayed Al Nahyan (UAE Vice President)',
    website: 'skynewsarabia.com',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'CRITICAL',
    credibility: 'MEDIUM',
    description: 'Arabic-language 24-hour news channel, Abu Dhabi-based, UAE VP connection',
    keyMetrics: {
      broadcastReach: 'Over 50 million households in MENA region',
      radioFrequency: '90.3 FM (launched November 8, 2015)'
    },
    keyPersonnel: [
      { position: 'Head of international news at Sky News', name: 'Adrian Wells' },
      { position: 'First director of news', name: 'Nart Bouran', background: 'Previously at Reuters (hired February 2011)' },
      { position: 'Director of output', name: 'Yasser Thabet', background: 'Former Al Arabiya program director (joined June 2011)' }
    ],
    historicalMilestones: [
      { date: 'November 29, 2010', event: 'Joint venture announced' },
      { date: 'February 2012', event: 'Headquarters preparation began at twofour54 media SEZ' },
      { date: 'May 6, 2012', event: 'Channel launched at 16:00 GMT' },
      { date: 'November 8, 2015', event: 'Launched radio station at 90.3 FM' }
    ],
    controversies: [
      { year: '2017', incident: 'Aired Emirati-backed documentary linking Qatar to al-Qaeda during Qatar diplomatic crisis' },
      { year: '2018', incident: 'Broadcast pro-Saudi coverage after Khashoggi assassination' },
      { year: 'November 2025', incident: 'Sudan banned channel over RSF coverage' },
      { year: 'March 2026', incident: 'Sky considering terminating brand license due to Sudan coverage' }
    ]
  },
  {
    id: 'al-hadath',
    name: 'Al Hadath',
    nameAr: 'الحدث',
    type: 'BROADCAST_TV',
    language: 'Arabic',
    founded: 'January 12, 2012',
    headquarters: 'Riyadh, Saudi Arabia',
    country: 'Saudi Arabia',
    owner: 'MBC Group',
    website: 'alahadath.net',
    sentiment: 'PRO_SAUDI',
    uaeRelevance: 'MEDIUM',
    credibility: 'MEDIUM',
    description: 'Saudi Arabian state-owned Arabic-language interactive television news channel',
    keyMetrics: {
      broadcastQuality: '1080i HDTV and 576i SDTV'
    },
    historicalMilestones: [
      { date: 'January 12, 2012', event: 'Launched' }
    ]
  },
  {
    id: 'abu-dhabi-tv',
    name: 'Abu Dhabi TV',
    type: 'BROADCAST_TV',
    language: 'Arabic',
    headquarters: 'Abu Dhabi',
    country: 'UAE',
    owner: 'Government of Abu Dhabi',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'Government of Abu Dhabi general entertainment channel'
  },
  {
    id: 'dubai-tv',
    name: 'Dubai TV',
    type: 'BROADCAST_TV',
    language: 'Arabic',
    headquarters: 'Dubai',
    country: 'UAE',
    owner: 'Dubai Media Incorporated',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'Dubai Media Incorporated general channel'
  },
  {
    id: 'sharjah-tv',
    name: 'Sharjah TV',
    type: 'BROADCAST_TV',
    language: 'Arabic',
    headquarters: 'Sharjah',
    country: 'UAE',
    owner: 'Government of Sharjah',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'Government of Sharjah channel'
  },
  {
    id: 'sama-dubai',
    name: 'Sama Dubai',
    type: 'BROADCAST_TV',
    language: 'Arabic',
    headquarters: 'Dubai',
    country: 'UAE',
    owner: 'Dubai Media Incorporated',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'Dubai Media Incorporated channel'
  },
  {
    id: 'noor-dubai',
    name: 'Noor Dubai',
    type: 'BROADCAST_TV',
    language: 'Arabic',
    headquarters: 'Dubai',
    country: 'UAE',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'Dubai-based TV channel'
  },
  {
    id: 'emarati-tv',
    name: 'Emarat TV',
    type: 'BROADCAST_TV',
    language: 'Arabic',
    headquarters: 'Dubai',
    country: 'UAE',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'Emirates government channel'
  },
  {
    id: 'dubai-one',
    name: 'Dubai One',
    type: 'BROADCAST_TV',
    language: 'English',
    headquarters: 'Dubai',
    country: 'UAE',
    owner: 'Dubai Media Incorporated',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'Dubai Media Incorporated English general/entertainment channel'
  }
]

// NEWS AGENCIES
export const newsAgencies: MediaOrganization[] = [
  {
    id: 'emirates-news-agency-wam',
    name: 'Emirates News Agency (WAM)',
    nameAr: 'وكالة أنباء الإمارات (Wakalat Anba\'a al Emarat)',
    type: 'NEWS_AGENCY',
    language: 'Arabic, English, Hebrew',
    founded: 'November 1976',
    headquarters: 'Abu Dhabi',
    country: 'UAE',
    owner: 'National Media Council (UAE Government)',
    website: 'wam.ae',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'CRITICAL',
    credibility: 'HIGHEST',
    description: 'Official news agency of the United Arab Emirates',
    keyMetrics: {
      operationsBegan: 'June 18, 1977',
      internationalOffices: 6
    },
    keyPersonnel: [
      { position: 'Director-General', name: 'Mohamed Jalal Alrayssi' },
      { position: 'Head of Media Coverage Department', name: 'Abdulla Abdulkareem' }
    ],
    historicalMilestones: [
      { date: 'June 18, 1977', event: 'Arabic service launched' },
      { date: 'December 1978', event: 'English service established (by Peter Hellyer)' },
      { date: 'April 2021', event: 'Hebrew language service launched' }
    ]
  }
]

// INTERNATIONAL MEDIA WITH UAE BUREAUS
export const internationalMedia: MediaOrganization[] = [
  {
    id: 'reuters-uae',
    name: 'Reuters',
    type: 'INTERNATIONAL',
    language: 'English',
    headquarters: 'Dubai Media City',
    country: 'International',
    website: 'reuters.com',
    sentiment: 'NEUTRAL',
    uaeRelevance: 'HIGH',
    credibility: 'HIGHEST',
    description: 'International wire service with UAE bureau',
    keyPersonnel: [
      { position: 'Gulf Bureau Chief', name: 'Maha El Dahan', background: 'Starting April 1, 2026' },
      { position: 'Notable journalists', name: 'Hadeel Al Sayegh, Federico Maccioni' }
    ],
    keyMetrics: {
      dubaiOffice: 'Dubai Media City',
      contactAddress: 'PO BOX 33714, Dubai, UAE',
      contactPhone: '+971 5 2659 9123'
    },
    controversies: [
      { year: '2019', incident: 'Investigative Report: Former NSA spies hacked iPhones of at least 10 media figures including BBC host and Al Jazeera chairman for UAE' }
    ]
  },
  {
    id: 'bloomberg-uae',
    name: 'Bloomberg',
    type: 'INTERNATIONAL',
    language: 'English',
    headquarters: 'UAE',
    country: 'International',
    website: 'bloomberg.com',
    sentiment: 'NEUTRAL',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'Business, finance, markets coverage'
  },
  {
    id: 'bbc-uae',
    name: 'BBC',
    type: 'INTERNATIONAL',
    language: 'English',
    headquarters: 'Dubai',
    country: 'UK',
    website: 'bbc.com',
    sentiment: 'CRITICAL',
    uaeRelevance: 'MEDIUM',
    credibility: 'HIGH',
    description: 'Public broadcaster with critical coverage of UAE government',
    keyMetrics: {
      dubaiOffice: 'Building Number 10, Office #309 (BBC Studios Distribution Limited)'
    },
    controversies: [
      { year: '2026', incident: 'Dubai\'s tourism industry reels from "brutal" impact of war' },
      { year: '2024', incident: 'BBC Arabic investigation: American mercenaries hired by UAE to kill in Yemen' }
    ]
  }
]

// REGIONAL MEDIA WITH UAE COVERAGE
export const regionalMedia: MediaOrganization[] = [
  {
    id: 'al-jazeera',
    name: 'Al Jazeera',
    nameAr: 'الجزيرة',
    type: 'REGIONAL',
    language: 'Arabic, English',
    founded: 'November 1, 1996',
    headquarters: 'Doha, Qatar',
    country: 'Qatar',
    owner: 'Qatar government',
    website: 'aljazeera.com',
    sentiment: 'PRO_QATAR',
    uaeRelevance: 'CRITICAL',
    credibility: 'HIGH',
    description: 'Qatar state media network, blocked in UAE 2017-2021, recently unblocked',
    keyMetrics: {
      initialFunding: '$137 million from Qatari government',
      employees: 'Over 3,000',
      globalAudience: 'Over 430 million people',
      bureaus: 70,
      availableCountries: 'More than 150'
    },
    keyPersonnel: [
      { position: 'Chairman', name: 'Hamad bin Thamer Al Thani' },
      { position: 'Director General', name: 'Sheikh Nasser bin Faisal bin Khalifa Al-Thani' }
    ],
    historicalMilestones: [
      { date: 'November 1, 1996', event: 'Founded by Hamad bin Khalifa Al Thani (then-Emir of Qatar)' },
      { date: 'June 5, 2017', event: 'UAE blocked Al Jazeera during Qatar diplomatic crisis' },
      { date: 'Recently', event: 'Unblocked' }
    ],
    controversies: [
      { year: '2017', incident: 'UAE blocked during Qatar diplomatic crisis' }
    ]
  },
  {
    id: 'middle-east-eye',
    name: 'Middle East Eye',
    type: 'REGIONAL',
    language: 'English',
    founded: 'April 2014',
    headquarters: 'London, England, UK',
    country: 'UK',
    website: 'middleeasteye.net',
    sentiment: 'CRITICAL',
    uaeRelevance: 'HIGH',
    credibility: 'MEDIUM',
    description: 'London-based investigative journalism, widely believed funded by Qatar, blocked in UAE since 2016',
    keyMetrics: {
      staff: '~20 full-time employees in London (2017)',
      coverageArea: '22 countries'
    },
    keyPersonnel: [
      { position: 'Editor-in-chief', name: 'David Hearst', background: 'Former Guardian foreign lead writer' },
      { position: 'Owner', name: 'M.E.E. Limited; sole director Jamal Bessasso', background: 'Kuwait-born Palestinian, Dutch nationality' }
    ],
    historicalMilestones: [
      { date: 'June 2016', event: 'UAE blocked website nationwide after MEE published reports on UAE\'s role in Yemen war' },
      { date: '2017', event: 'Saudi Arabia, UAE, Egypt, Bahrain demanded MEE close as part of 13 demands during Qatar diplomatic crisis' },
      { date: '2019', event: 'Egypt banned' },
      { date: 'May 2025', event: 'Jordan banned' }
    ],
    controversies: [
      { year: '2020', incident: 'Targeted in cyberattack linked to Israeli firm Candiru' },
      { year: '2022', incident: 'Cut ties with journalist Shatha Hammad after antisemitic social media remarks' }
    ]
  }
]

// DIGITAL NATIVE / LIFESTYLE MEDIA
export const digitalNativeMedia: MediaOrganization[] = [
  {
    id: 'vogue-arabia',
    name: 'Vogue Arabia',
    nameAr: 'ڤوغ العربية',
    type: 'DIGITAL_NATIVE',
    language: 'Arabic and English',
    founded: 'October 2016 (digital), March 2017 (print)',
    headquarters: 'Dubai',
    country: 'UAE',
    owner: 'Condé Nast Middle East (full ownership since January 2025, licensed to Dubai-based Nervora 2017-2024)',
    website: 'voguearabia.com',
    sentiment: 'NEUTRAL',
    uaeRelevance: 'HIGH',
    credibility: 'HIGH',
    description: 'First digital-first Vogue edition globally, most readers in Saudi Arabia',
    keyPersonnel: [
      { position: 'Head of Editorial Content', name: 'Manuel Arnaut', background: 'From April 2017, continued 2025 under Condé Nast' }
    ],
    historicalMilestones: [
      { date: 'October 2016', event: 'Digital launch (first digital-first Vogue edition globally)' },
      { date: 'March 2017', event: 'Print debut' },
      { date: 'January 2025', event: 'Condé Nast Middle East full ownership' }
    ],
    controversies: [
      { year: 'June 2018', incident: 'Cover featured Princess Hayfa bint Abdullah al-Saud celebrating driving ban lift - critics noted omission of women\'s rights activists under arrest' }
    ]
  },
  {
    id: 'emirates-woman',
    name: 'Emirates Woman',
    type: 'DIGITAL_NATIVE',
    language: 'English',
    headquarters: 'UAE',
    country: 'UAE',
    sentiment: 'NEUTRAL',
    uaeRelevance: 'MEDIUM',
    credibility: 'HIGH',
    description: 'Women\'s magazine'
  },
  {
    id: 'esquire-middle-east',
    name: 'Esquire Middle East',
    type: 'DIGITAL_NATIVE',
    language: 'English',
    headquarters: 'UAE',
    country: 'UAE',
    sentiment: 'NEUTRAL',
    uaeRelevance: 'MEDIUM',
    credibility: 'HIGH',
    description: 'Men\'s magazine'
  },
  {
    id: 'harpers-bazaar-arabia',
    name: 'Harper\'s Bazaar Arabia',
    type: 'DIGITAL_NATIVE',
    language: 'English',
    headquarters: 'UAE',
    country: 'UAE',
    sentiment: 'NEUTRAL',
    uaeRelevance: 'MEDIUM',
    credibility: 'HIGH',
    description: 'Fashion/lifestyle magazine'
  },
  {
    id: 'gq-middle-east',
    name: 'GQ Middle East',
    type: 'DIGITAL_NATIVE',
    language: 'English',
    headquarters: 'UAE',
    country: 'UAE',
    sentiment: 'NEUTRAL',
    uaeRelevance: 'MEDIUM',
    credibility: 'HIGH',
    description: 'Men\'s fashion/lifestyle magazine'
  },
  {
    id: 'architectural-digest-me',
    name: 'Architectural Digest Middle East',
    type: 'DIGITAL_NATIVE',
    language: 'English',
    headquarters: 'UAE',
    country: 'UAE',
    sentiment: 'NEUTRAL',
    uaeRelevance: 'MEDIUM',
    credibility: 'HIGH',
    description: 'Architecture/design magazine'
  },
  {
    id: 'cosmopolitan-me',
    name: 'Cosmopolitan Middle East',
    type: 'DIGITAL_NATIVE',
    language: 'English',
    headquarters: 'UAE',
    country: 'UAE',
    sentiment: 'NEUTRAL',
    uaeRelevance: 'MEDIUM',
    credibility: 'HIGH',
    description: 'Women\'s lifestyle magazine'
  }
]

// RADIO STATIONS
export const radioStations: MediaOrganization[] = [
  {
    id: 'abu-dhabi-radio',
    name: 'Abu Dhabi Radio',
    type: 'BROADCAST_RADIO',
    language: 'Arabic',
    headquarters: 'Abu Dhabi',
    country: 'UAE',
    owner: 'Government-owned',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'MEDIUM',
    credibility: 'HIGH',
    description: 'Government-owned Arabic radio station'
  },
  {
    id: 'dubai-fm',
    name: 'Dubai FM',
    type: 'BROADCAST_RADIO',
    language: 'English/Arabic',
    headquarters: 'Dubai',
    country: 'UAE',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'MEDIUM',
    credibility: 'HIGH',
    description: 'Dubai-based radio station'
  },
  {
    id: 'sharjah-fm',
    name: 'Sharjah FM',
    type: 'BROADCAST_RADIO',
    language: 'Arabic',
    headquarters: 'Sharjah',
    country: 'UAE',
    owner: 'Government-owned',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'MEDIUM',
    credibility: 'HIGH',
    description: 'Government-owned Arabic radio station'
  },
  {
    id: 'radio-1-2',
    name: 'Radio 1/2',
    type: 'BROADCAST_RADIO',
    language: 'English',
    headquarters: 'UAE',
    country: 'UAE',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'MEDIUM',
    credibility: 'HIGH',
    description: 'English radio station'
  },
  {
    id: 'hit-fm',
    name: 'Hit FM',
    type: 'BROADCAST_RADIO',
    language: 'English',
    headquarters: 'UAE',
    country: 'UAE',
    sentiment: 'PRO_GOVERNMENT',
    uaeRelevance: 'MEDIUM',
    credibility: 'HIGH',
    description: 'English radio station'
  }
]

// ============================================================================
// OWNERSHIP STRUCTURES
// ============================================================================

export interface OwnershipStructure {
  category: 'STATE_OWNED' | 'FAMILY_OWNED' | 'JOINT_VENTURE' | 'INTERNATIONAL'
  organizations: string[]
  beneficialOwners?: string[]
}

export const ownershipStructures: OwnershipStructure[] = [
  {
    category: 'STATE_OWNED',
    organizations: [
      'Al Ittihad (Abu Dhabi Media)',
      'The National (International Media Investments - Sheikh Mansour)',
      'Al Bayan (Dubai Media Incorporated)',
      'Emarat Al Youm (Dubai Media Incorporated)',
      'Emirates News Agency (WAM) (National Media Council)',
      'Abu Dhabi TV (Government of Abu Dhabi)',
      'Dubai TV (Dubai Media Incorporated)',
      'Sharjah TV (Government of Sharjah)',
      'Al Arabiya (Saudi PIF/MBC Group)',
      'Al Hadath (MBC Group - Saudi)',
      'Sky News Arabia (IMI - UAE VP Sheikh Mansour)'
    ],
    beneficialOwners: [
      'Sheikh Mansour bin Zayed Al Nahyan (UAE VP)',
      'Abu Dhabi government',
      'Dubai government',
      'Saudi PIF'
    ]
  },
  {
    category: 'FAMILY_OWNED',
    organizations: [
      'Khaleej Times (Galadari family)',
      'Gulf News (Al Tayer Group)',
      'Al Khaleej (Dar Al Khaleej - Taryam family)',
      'Gulf Today (Dar Al Khaleej - Taryam family)'
    ],
    beneficialOwners: [
      'Galadari family',
      'Al Tayer Group',
      'Taryam family'
    ]
  },
  {
    category: 'JOINT_VENTURE',
    organizations: [
      'Sky News Arabia (Sky Group (Comcast) 50% / IMI 50%)'
    ]
  },
  {
    category: 'INTERNATIONAL',
    organizations: [
      'Vogue Arabia (Condé Nast - Nervora license 2017-2024, now direct)',
      'Reuters (International wire service)',
      'Bloomberg (International wire service)',
      'BBC (Public broadcaster)'
    ]
  }
]

// ============================================================================
// SENTIMENT MATRIX
// ============================================================================

export interface SentimentEntry {
  organization: string
  ownerConnection: string
  sentiment: string
  uaePosition: string
}

export const sentimentMatrix: SentimentEntry[] = [
  { organization: 'Al Ittihad', ownerConnection: 'Abu Dhabi Media', sentiment: 'Positive', uaePosition: 'Supportive' },
  { organization: 'Al Khaleej', ownerConnection: 'Dar Al Khaleej', sentiment: 'Positive', uaePosition: 'Supportive' },
  { organization: 'Khaleej Times', ownerConnection: 'Galadari family', sentiment: 'Positive', uaePosition: 'Supportive' },
  { organization: 'Gulf News', ownerConnection: 'Al Tayer Group', sentiment: 'Positive', uaePosition: 'Supportive' },
  { organization: 'Al Bayan', ownerConnection: 'Dubai Media Inc', sentiment: 'Positive', uaePosition: 'Supportive' },
  { organization: 'The National', ownerConnection: 'IMI/Sheikh Mansour', sentiment: 'Positive', uaePosition: 'Supportive' },
  { organization: 'Emarat Al Youm', ownerConnection: 'Dubai Media Inc', sentiment: 'Positive', uaePosition: 'Supportive' },
  { organization: 'Gulf Today', ownerConnection: 'Dar Al Khaleej', sentiment: 'Positive', uaePosition: 'Supportive' },
  { organization: 'WAM', ownerConnection: 'National Media Council', sentiment: 'Positive', uaePosition: 'Official voice' },
  { organization: 'Al Arabiya', ownerConnection: 'Saudi PIF/MBC', sentiment: 'Positive', uaePosition: 'Allied (Saudi)' },
  { organization: 'Al Hadath', ownerConnection: 'MBC', sentiment: 'Positive', uaePosition: 'Allied (Saudi)' },
  { organization: 'Sky News Arabia', ownerConnection: 'Sky/IMI', sentiment: 'Positive', uaePosition: 'Supportive' },
  { organization: 'Al Jazeera', ownerConnection: 'Qatar', sentiment: 'Negative', uaePosition: 'Blocked (historical)' },
  { organization: 'Middle East Eye', ownerConnection: 'Qatar (alleged)', sentiment: 'Negative', uaePosition: 'Blocked' },
  { organization: 'BBC', ownerConnection: 'Public', sentiment: 'Mixed', uaePosition: 'Critical' }
]

// ============================================================================
// MEDIA BANS
// ============================================================================

export interface MediaBan {
  media: string
  country: string
  banStart: string
  reason: string
}

export const mediaBans: MediaBan[] = [
  { media: 'Al Jazeera', country: 'UAE', banStart: '2017', reason: 'Qatar diplomatic crisis' },
  { media: 'Middle East Eye', country: 'UAE', banStart: '2016', reason: 'Yemen war reporting' },
  { media: 'Middle East Eye', country: 'Egypt', banStart: '2019', reason: '' },
  { media: 'Middle East Eye', country: 'Jordan', banStart: 'May 2025', reason: '' }
]

// ============================================================================
// KEY CONTROVERSIES
// ============================================================================

export interface Controversy {
  organization: string
  year: string
  incident: string
}

export const controversies: Controversy[] = [
  { organization: 'Gulf News', year: '2009', incident: 'Published Holocaust denial column' },
  { organization: 'Emarat Al Youm', year: '2009', incident: 'Court-ordered closure over royal family horse doping story' },
  { organization: 'Gulf News', year: '2017', incident: 'Former editor Francis Matthew charged with murder' },
  { organization: 'Sky News Arabia', year: '2017', incident: 'Aired documentary linking Qatar to al-Qaeda' },
  { organization: 'Sky News Arabia', year: '2018', incident: 'Pro-Saudi coverage after Khashoggi assassination' },
  { organization: 'Sky News Arabia', year: '2025-2026', incident: 'Sudan RSF coverage controversy' },
  { organization: 'Reuters', year: '2019', incident: 'Investigation: NSA spies hacked iPhones for UAE' },
  { organization: 'Vogue Arabia', year: '2018', incident: 'Cover criticized over women\'s rights activists omission' },
  { organization: 'Middle East Eye', year: '2020', incident: 'Cyberattack linked to Israeli Candiru' },
  { organization: 'Middle East Eye', year: '2022', incident: 'Terminated journalist for antisemitic remarks' }
]

// ============================================================================
// NEWSPAPERS BY LAUNCH DATE
// ============================================================================

export interface NewspaperLaunch {
  rank: number
  newspaper: string
  launchDate: string
  language: string
  owner: string
}

export const newspapersByLaunch: NewspaperLaunch[] = [
  { rank: 1, newspaper: 'Al Ittihad', launchDate: 'October 20, 1969', language: 'Arabic', owner: 'Abu Dhabi Media' },
  { rank: 2, newspaper: 'Al Khaleej', launchDate: 'October 19, 1970', language: 'Arabic', owner: 'Dar Al Khaleej' },
  { rank: 3, newspaper: 'Khaleej Times', launchDate: 'April 16, 1978', language: 'English', owner: 'Galadari family' },
  { rank: 4, newspaper: 'Gulf News', launchDate: 'September 30, 1978', language: 'English', owner: 'Al Tayer Group' },
  { rank: 5, newspaper: 'Al Bayan', launchDate: 'May 10, 1980', language: 'Arabic', owner: 'Dubai Media Inc' },
  { rank: 6, newspaper: 'Emarat Al Youm', launchDate: 'September 20, 2005', language: 'Arabic', owner: 'Dubai Media Inc' },
  { rank: 7, newspaper: 'Gulf Today', launchDate: 'April 15, 1996', language: 'English', owner: 'Dar Al Khaleej' },
  { rank: 8, newspaper: 'The National', launchDate: 'April 17, 2008', language: 'English', owner: 'IMI/Sheikh Mansour' }
]

// ============================================================================
// CIRCULATION DATA
// ============================================================================

export interface CirculationData {
  newspaper: string
  year: number
  circulation: number
  notes?: string
}

export const circulationData: CirculationData[] = [
  { newspaper: 'Al Ittihad', year: 2003, circulation: 58000 },
  { newspaper: 'Al Ittihad', year: 2006, circulation: 94275 },
  { newspaper: 'Al Ittihad', year: 2008, circulation: 76000 },
  { newspaper: 'Al Ittihad', year: 2013, circulation: 109640, notes: 'First half' },
  { newspaper: 'Al Khaleej', year: 2003, circulation: 60000, notes: 'First in UAE' },
  { newspaper: 'Al Khaleej', year: 2013, circulation: 37000 },
  { newspaper: 'Gulf News', year: 2012, circulation: 108187, notes: 'Daily' },
  { newspaper: 'Gulf News', year: 2012, circulation: 108777, notes: 'Weekend' },
  { newspaper: 'Al Bayan', year: 2013, circulation: 10000 }
]

// ============================================================================
// DIGITAL REACH
// ============================================================================

export interface DigitalReach {
  publication: string
  monthlyDigitalReach: number
  platform: string
}

export const digitalReach: DigitalReach[] = [
  { publication: 'Khaleej Times', monthlyDigitalReach: 37200000, platform: 'Website, Facebook, Instagram, X' },
  { publication: 'Gulf News', monthlyDigitalReach: 0, platform: 'Most-read English in MENA 2010' },
  { publication: 'The National', monthlyDigitalReach: 0, platform: 'Website, publications' }
]

// ============================================================================
// TV CHANNELS BY HQ
// ============================================================================

export interface TVChannelHQ {
  channel: string
  hqLocation: string
  owner: string
  launchDate?: string
}

export const tvChannelsByHQ: TVChannelHQ[] = [
  { channel: 'Al Arabiya', hqLocation: 'Riyadh, Saudi Arabia', owner: 'MBC/PIF', launchDate: '2003' },
  { channel: 'Al Hadath', hqLocation: 'Riyadh, Saudi Arabia', owner: 'MBC Group', launchDate: '2012' },
  { channel: 'Sky News Arabia', hqLocation: 'Abu Dhabi, UAE', owner: 'Sky/IMI', launchDate: '2012' },
  { channel: 'Abu Dhabi TV', hqLocation: 'Abu Dhabi, UAE', owner: 'Govt of Abu Dhabi' },
  { channel: 'Dubai TV', hqLocation: 'Dubai, UAE', owner: 'Dubai Media Inc' },
  { channel: 'Sharjah TV', hqLocation: 'Sharjah, UAE', owner: 'Govt of Sharjah' }
]

// ============================================================================
// COMPREHENSIVE STATISTICS
// ============================================================================

export const mediaStatistics = {
  alJazeera: {
    employees: 'Over 3,000',
    globalAudience: '430 million',
    initialFunding: '$137 million',
    annualLossesArabic: '~$100 million',
    alJazeeraEnglishInvestment: '~$1 billion',
    bureaus: 70,
    availableCountries: 'More than 150'
  },
  skyNewsArabia: {
    households: '50 million',
    radioFrequency: '90.3 FM'
  },
  khaleejTimes: {
    monthlyConsumers: '37.2 million'
  },
  middleEastEye: {
    staff: '~20 in London',
    countriesCovered: 22
  },
  emaratAlYoum: {
    fine: '$5,445'
  }
}

// ============================================================================
// WAM INTERNATIONAL OFFICES
// ============================================================================

export const wamInternationalOffices = [
  { office: 'Cairo', location: 'Egypt' },
  { office: 'Beirut', location: 'Lebanon' },
  { office: 'Washington D.C.', location: 'USA' },
  { office: 'Sana\'a', location: 'Yemen' },
  { office: 'Brussels', location: 'Belgium' },
  { office: 'Islamabad', location: 'Pakistan' }
]

// ============================================================================
// COVERAGE THEMES (APRIL 2026)
// ============================================================================

export interface CoverageTheme {
  theme: string
  organizations: string[]
}

export const coverageThemes: CoverageTheme[] = [
  { theme: 'US-Iran conflict/ceasefire', organizations: ['Al Jazeera', 'Bloomberg', 'Middle East Eye'] },
  { theme: 'Strait of Hormuz tensions', organizations: ['Al Jazeera'] },
  { theme: 'UAE defense capabilities', organizations: ['Bloomberg'] },
  { theme: 'Yemen Islah designation', organizations: ['Middle East Eye'] },
  { theme: 'Gaza reconstruction', organizations: ['Al Jazeera'] },
  { theme: 'Dubai tourism impact', organizations: ['BBC'] },
  { theme: 'Regional finance stability', organizations: ['Bloomberg'] }
]

// ============================================================================
// KEY PERSONNEL DIRECTORY
// ============================================================================

export const newspaperLeadership = [
  { newspaper: 'Khaleej Times', position: 'CEO', name: 'Charles Yardley' },
  { newspaper: 'Khaleej Times', position: 'Chief Content Officer', name: 'Ted Kemp' },
  { newspaper: 'Gulf News', position: 'CEO', name: 'Vijay Vaghela' },
  { newspaper: 'Gulf News', position: 'Editor-in-chief (2025)', name: 'Mark Thompson' },
  { newspaper: 'The National', position: 'Editor-in-chief', name: 'Mina Al-Oraibi' },
  { newspaper: 'The National', position: 'Deputy editor', name: 'Daniel Gledhill' },
  { newspaper: 'The National', position: 'Managing editor', name: 'Laura Koot' },
  { newspaper: 'Al Bayan', position: 'Editor-in-chief', name: 'Muna Busamra' },
  { newspaper: 'Emarat Al Youm', position: 'Editor-in-chief', name: 'Sami Al Reyami' },
  { newspaper: 'Emarat Al Youm', position: 'Managing editor', name: 'Abdallah Bani-issa' },
  { newspaper: 'Gulf Today', position: 'Editor-in-chief', name: 'Aysha Taryam' },
  { newspaper: 'Al Khaleej', position: 'Editor-in-chief', name: 'Khaled Abdullah Omran' },
  { newspaper: 'Al Khaleej', position: 'Executive editor-in-chief', name: 'Raed Barqawi' },
  { newspaper: 'Al Khaleej', position: 'Managing editor', name: 'Mahmood Hasuna' }
]

export const broadcastLeadership = [
  { channel: 'Al Arabiya', position: 'General Manager', name: 'Mamdouh al-Muhaini' },
  { channel: 'Sky News Arabia', position: 'Director of news (founding)', name: 'Nart Bouran' },
  { channel: 'Sky News Arabia', position: 'Director of output (founding)', name: 'Yasser Thabet' }
]

export const newsAgencyLeadership = [
  { agency: 'WAM', position: 'Director-General', name: 'Mohamed Jalal Alrayssi' },
  { agency: 'WAM', position: 'Head of Media Coverage', name: 'Abdulla Abdulkareem' }
]

export const lifestyleMediaLeadership = [
  { publication: 'Vogue Arabia', position: 'Head of Editorial Content', name: 'Manuel Arnaut' }
]

// ============================================================================
// SOURCE URLs
// ============================================================================

export const sourceUrls = [
  { source: 'Gulf News Wikipedia', url: 'https://en.wikipedia.org/wiki/Gulf_News' },
  { source: 'Khaleej Times Wikipedia', url: 'https://en.wikipedia.org/wiki/Khaleej_Times' },
  { source: 'The National Wikipedia', url: 'https://en.wikipedia.org/wiki/The_National_(Abu_Dhabi)' },
  { source: 'Al Arabiya Wikipedia', url: 'https://en.wikipedia.org/wiki/Al_Arabiya' },
  { source: 'Al Jazeera Wikipedia', url: 'https://en.wikipedia.org/wiki/Aljazeera' },
  { source: 'Sky News Arabia Wikipedia', url: 'https://en.wikipedia.org/wiki/Sky_News_Arabia' },
  { source: 'Emirates News Agency Wikipedia', url: 'https://en.wikipedia.org/wiki/Emirates_News_Agency' },
  { source: 'Vogue Arabia Wikipedia', url: 'https://en.wikipedia.org/wiki/Vogue_Arabia' },
  { source: 'Middle East Eye Wikipedia', url: 'https://en.wikipedia.org/wiki/Middle_East_Eye' },
  { source: 'Al Hadath Wikipedia', url: 'https://en.wikipedia.org/wiki/Al_Hadath' },
  { source: 'Al Bayan Wikipedia', url: 'https://en.wikipedia.org/wiki/Al-Bayan_(newspaper)' },
  { source: 'Al Khaleej Wikipedia', url: 'https://en.wikipedia.org/wiki/Al_Khaleej_(newspaper)' },
  { source: 'Emarat Al Youm Wikipedia', url: 'https://en.wikipedia.org/wiki/Emarat_Al_Youm' },
  { source: 'Gulf Today Wikipedia', url: 'https://en.wikipedia.org/wiki/Gulf_Today' },
  { source: 'Al Ittihad Wikipedia', url: 'https://en.wikipedia.org/wiki/Al-Ittihad_(Emirati_newspaper)' },
  { source: 'Al Jazeera UAE page', url: 'https://www.aljazeera.com/where/united-arab-emirates/' },
  { source: 'Middle East Eye UAE page', url: 'https://www.middleeasteye.net/countries/uae' }
]

// ============================================================================
// UAE RELEVANCE ASSESSMENT
// ============================================================================

export const criticalImportance = [
  { organization: 'WAM', reason: 'Official UAE government news agency' },
  { organization: 'Al Ittihad', reason: 'Oldest UAE newspaper' },
  { organization: 'Al Khaleej', reason: 'First newspaper in UAE' },
  { organization: 'Khaleej Times', reason: 'Longest-running English daily, highest digital reach' },
  { organization: 'Gulf News', reason: 'Major English daily, market leader' },
  { organization: 'Al Bayan', reason: 'Government of Dubai voice' },
  { organization: 'Emarat Al Youm', reason: 'Dubai Media Incorporated' },
  { organization: 'The National', reason: 'Sheikh Mansour ownership' },
  { organization: 'Sky News Arabia', reason: 'UAE VP connection, Abu Dhabi HQ' }
]

export const highImportance = [
  { organization: 'Al Arabiya', reason: 'Originated in UAE, MBC Group' },
  { organization: 'Al Jazeera', reason: 'Blocked/unblocked, regional influence' },
  { organization: 'Al Hadath', reason: 'MBC Group, Saudi state' },
  { organization: 'Middle East Eye', reason: 'Blocked in UAE, investigative' },
  { organization: 'Vogue Arabia', reason: 'Dubai-based Condé Nast' }
]

export const mediumImportance = [
  { organization: 'Reuters', reason: 'UAE bureau, business coverage' },
  { organization: 'Bloomberg', reason: 'Finance focus' },
  { organization: 'BBC', reason: 'Critical perspective' }
]

// ============================================================================
// COMBINED ALL MEDIA DATA
// ============================================================================

export const allMediaOrganizations: MediaOrganization[] = [
  ...printMedia,
  ...broadcastTV,
  ...newsAgencies,
  ...internationalMedia,
  ...regionalMedia,
  ...digitalNativeMedia,
  ...radioStations
]

// ============================================================================
// DASHBOARD METRICS
// ============================================================================

export const dashboardMetrics = {
  totalOrganizations: allMediaOrganizations.length,
  printMediaCount: printMedia.length,
  broadcastTVCount: broadcastTV.length,
  newsAgencyCount: newsAgencies.length,
  internationalMediaCount: internationalMedia.length,
  regionalMediaCount: regionalMedia.length,
  digitalNativeCount: digitalNativeMedia.length,
  radioStationCount: radioStations.length,
  queriesExecuted: 18,
  pagesFetched: 16,
  dataSourcesWikipedia: 16,
  dataSourcesNewsSites: 2
}

// ============================================================================
// FINAL EXPORT - MEDIA ORGANIZATIONS DATA
// ============================================================================

export const mediaOrganizationsData = {
  // Metadata
  executionMetadata,

  // Organization categories
  printMedia,
  broadcastTV,
  newsAgencies,
  internationalMedia,
  regionalMedia,
  digitalNativeMedia,
  radioStations,

  // Analysis data
  ownershipStructures,
  sentimentMatrix,
  mediaBans,
  controversies,

  // Data tables
  newspapersByLaunch,
  circulationData,
  digitalReach,
  tvChannelsByHQ,

  // Statistics
  mediaStatistics,
  wamInternationalOffices,
  coverageThemes,

  // Personnel
  newspaperLeadership,
  broadcastLeadership,
  newsAgencyLeadership,
  lifestyleMediaLeadership,

  // Sources
  sourceUrls,

  // Relevance assessments
  criticalImportance,
  highImportance,
  mediumImportance,

  // Dashboard
  dashboardMetrics,

  // Combined
  allMediaOrganizations
}

export default mediaOrganizationsData
