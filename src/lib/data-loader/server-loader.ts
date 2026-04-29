/**
 * Server-side Data Loader for Dashboard Pages
 *
 * This module provides utilities to load and parse data from
 * markdown files in two locations:
 *
 * 1. /docs/dashboard-data/{platform}/  — Legacy ADPHC platform data (organized by platform)
 * 2. /data/                          — UAE NDIP research files (organized by category number)
 *
 * For the UAE National Digital Intelligence Platform, data is primarily consumed
 * via pre-parsed TypeScript files in this directory (entity-data.ts, topics-data.ts, etc.).
 * The markdown parsing utilities here are used for:
 * - Extracting tables from research markdown files
 * - Parsing new data files before they are converted to TypeScript
 * - Utility functions for data transformation
 *
 * IMPORTANT: This file can only be used in server-side code (API routes, server components)
 * For client components, use the pre-parsed data from entity-data.ts, topics-data.ts,
 * crisis-data.ts, social-media-data.ts, etc.
 */

import fs from 'fs'
import path from 'path'

// ============================================================================
// TYPES
// ============================================================================

export interface DataFile {
  platform: 'CLAIRVOYANCE-CX' | 'PERCEPTION-X2' | 'RICOCHET-CATALYST-X'
  number: string
  title: string
  content: string
  filepath: string
}

export interface ParsedDataSection {
  title: string
  content: string
  data?: any[]
}

// ============================================================================
// DATA FILE LOADER
// ============================================================================

/**
 * Get all data files for a specific platform
 */
export function getDataFiles(platform: DataFile['platform']): DataFile[] {
  const dataDir = path.join(process.cwd(), 'docs', 'dashboard-data', platform)

  if (!fs.existsSync(dataDir)) {
    return []
  }

  const files = fs.readdirSync(dataDir)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const match = filename.match(/^(\d+)\s+-\s+(.+)\.md$/)
      if (!match) return null

      const filepath = path.join(dataDir, filename)
      const content = fs.readFileSync(filepath, 'utf-8')

      return {
        platform,
        number: match[1],
        title: match[2].trim(),
        content,
        filepath
      }
    })
    .filter((f): f is DataFile => f !== null)
    .sort((a, b) => parseInt(a.number) - parseInt(b.number))

  return files
}

/**
 * Get a specific data file by platform and number
 */
export function getDataFile(
  platform: DataFile['platform'],
  number: string
): DataFile | null {
  const files = getDataFiles(platform)
  return files.find(f => f.number === number) || null
}

/**
 * Parse markdown content into structured sections
 */
export function parseMarkdownSections(content: string): ParsedDataSection[] {
  const sections: ParsedDataSection[] = []
  const lines = content.split('\n')

  let currentSection: ParsedDataSection | null = null
  let currentContent: string[] = []
  let currentData: any[] | null = null
  let inCodeBlock = false
  let codeBlockContent: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Handle code blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        // End code block - parse as JSON if possible
        const codeContent = codeBlockContent.join('\n')
        try {
          if (currentSection) {
            currentData = currentData || []
            currentData.push(JSON.parse(codeContent))
          }
        } catch {
          // Not JSON, keep as text
          currentContent.push('```' + codeContent + '```')
        }
        codeBlockContent = []
        inCodeBlock = false
      } else {
        inCodeBlock = true
      }
      continue
    }

    if (inCodeBlock) {
      codeBlockContent.push(line)
      continue
    }

    // Detect section headers (## or ###)
    if (line.startsWith('##') || line.startsWith('###')) {
      // Save previous section
      if (currentSection) {
        currentSection.content = currentContent.join('\n').trim()
        if (currentData) {
          currentSection.data = currentData
        }
        sections.push(currentSection)
      }

      // Start new section
      const title = line.replace(/^#+\s*/, '').trim()
      currentSection = { title, content: '', data: undefined }
      currentContent = []
      currentData = null
    } else if (currentSection) {
      currentContent.push(line)
    }
  }

  // Save last section
  if (currentSection) {
    currentSection.content = currentContent.join('\n').trim()
    if (currentData) {
      currentSection.data = currentData
    }
    sections.push(currentSection)
  }

  return sections
}

/**
 * Extract data tables from markdown content
 */
export function parseMarkdownTables(content: string): any[] {
  const lines = content.split('\n')
  const tables: any[] = []
  let currentTable: { headers: string[], rows: string[][] } | null = null
  let inTable = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Detect table start
    if (line.startsWith('|') && line.includes('|---|')) {
      inTable = true
      continue
    }

    if (inTable) {
      if (!line.startsWith('|')) {
        // End of table
        if (currentTable && currentTable.headers.length > 0) {
          tables.push({
            headers: currentTable.headers,
            rows: currentTable.rows
          })
        }
        currentTable = null
        inTable = false
        continue
      }

      const cells = line.split('|').filter(c => c !== '').map(c => c.trim())

      if (!currentTable) {
        currentTable = { headers: cells, rows: [] }
      } else {
        currentTable.rows.push(cells)
      }
    }
  }

  // Handle table that ends at file end
  if (currentTable && currentTable.headers.length > 0) {
    tables.push({
      headers: currentTable.headers,
      rows: currentTable.rows
    })
  }

  return tables
}

/**
 * Convert table to objects
 */
export function tableToObjects(table: { headers: string[]; rows: string[][] }): Record<string, any>[] {
  return table.rows.map(row => {
    const obj: Record<string, any> = {}
    table.headers.forEach((header, index) => {
      obj[header] = row[index] || ''
    })
    return obj
  })
}

/**
 * Get platform data files cached
 */
const dataCache = new Map<string, DataFile[]>()

export function getAllDataFiles(forceRefresh = false): DataFile[] {
  if (!forceRefresh && dataCache.size > 0) {
    return Array.from(dataCache.values()).flat()
  }

  const platforms: DataFile['platform'][] = ['CLAIRVOYANCE-CX', 'PERCEPTION-X2', 'RICOCHET-CATALYST-X']

  platforms.forEach(platform => {
    const files = getDataFiles(platform)
    dataCache.set(platform, files)
  })

  return Array.from(dataCache.values()).flat()
}

// ============================================================================
// DATA EXTRACTION HELPERS
// ============================================================================

/**
 * Extract key metrics from content
 */
export function extractMetrics(content: string): Record<string, string | number> {
  const metrics: Record<string, string | number> = {}

  // Look for patterns like "Metric: Value" or "Metric - Value"
  const patterns = [
    /(\w+(?:\s+\w+)*)[:\s]+([\d,]+(?:\s*(?:%|M|K|B))?)\b/g,
    /(\w+(?:\s+\w+)*)\s+-\s+([\d,]+(?:\s*(?:%|M|K|B))?)\b/g,
  ]

  patterns.forEach(pattern => {
    const matches = content.matchAll(pattern)
    for (const match of matches) {
      const key = match[1].trim()
      const value = match[2].replace(/,/g, '')
      metrics[key] = value
    }
  })

  return metrics
}

/**
 * Extract lists from content (bullet points, numbered lists)
 */
export function extractLists(content: string): Record<string, string[]> {
  const lists: Record<string, string[]> = {}
  const lines = content.split('\n')

  let currentListTitle: string | null = null
  let currentListItems: string[] = []

  for (const line of lines) {
    // Check for section header
    if (line.startsWith('##') || line.startsWith('###')) {
      // Save previous list
      if (currentListTitle && currentListItems.length > 0) {
        lists[currentListTitle] = currentListItems
      }
      currentListTitle = line.replace(/^#+\s*/, '').trim()
      currentListItems = []
    }
    // Check for list items
    else if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const item = line.trim().replace(/^[-*]\s+/, '')
      currentListItems.push(item)
    }
    // Check for numbered list
    else if (line.trim().match(/^\d+\.\s+/)) {
      const item = line.trim().replace(/^\d+\.\s+/, '')
      currentListItems.push(item)
    }
  }

  // Save last list
  if (currentListTitle && currentListItems.length > 0) {
    lists[currentListTitle] = currentListItems
  }

  return lists
}

// ============================================================================
// UAE NDIP DATA FILE REGISTRY
// ============================================================================
// Maps pre-parsed TypeScript data files to their source markdown files in /data/
// Use this registry to understand data provenance and find source data
// ============================================================================

export interface NDIPDataFileRegistry {
  category: string
  typescriptFile: string
  sourceFiles: string[]
  recordCount: number
  description: string
}

export const NDIP_DATA_REGISTRY: NDIPDataFileRegistry[] = [
  {
    category: 'Entity Intelligence',
    typescriptFile: 'entity-data.ts',
    sourceFiles: [
      'data/1-1-federal-officials-results.md',
      'data/1-2-royal-family-results.md',
      'data/1-3-emirate-entities-results.md',
      'data/1-4-media-organizations-results.md',
      'data/1-5-journalists-results.md',
      'data/1-6-influencers-results.md',
      'data/1-7-corporate-entities-results.md',
      'data/1-8-international-orgs-results.md',
      'data/1-9-infrastructure-results.md',
      'data/1-10-event-entities-results.md',
    ],
    recordCount: 10,
    description: 'Entity profiles for UAE government officials, royal family, corporations, media, and infrastructure',
  },
  {
    category: 'Topics / H-S-P-B-C Framework',
    typescriptFile: 'topics-data.ts',
    sourceFiles: Array.from({ length: 20 }, (_, i) => `data/2-${i + 1}-${['politics-governance', 'economy-business', 'security-defense', 'culture-society', 'environment-infrastructure', 'international-relations', 'media-communications', 'technology-innovation', 'sports-intelligence', 'healthcare', 'education-youth', 'energy-sustainability', 'tourism-hospitality', 'real-estate', 'food-security', 'transportation-logistics', 'legal-regulatory', 'labor-employment', 'demographics-migration', 'religion-interfaith'][i]}-results.md`),
    recordCount: 20,
    description: 'Topic analysis across Health, Safety, Policy, Business, Community sectors',
  },
  {
    category: 'Crisis Intelligence / Phoenix Protocol',
    typescriptFile: 'crisis-data.ts',
    sourceFiles: [
      'data/4-1-natural-disaster-results.md',
      'data/4-2-geopolitical-crisis-results.md',
      'data/4-3-social-crisis-results.md',
      'data/4-4-economic-crisis-results.md',
      'data/4-5-reputation-crisis-results.md',
      'data/4-6-communication-crisis-results.md',
      'data/4-7-terrorism-extremism-results.md',
      'data/4-8-cyber-threat-results.md',
      'data/4-9-public-health-results.md',
      'data/4-10-early-warning-results.md',
    ],
    recordCount: 10,
    description: 'Crisis events tracked through Phoenix Protocol stages: Detection → Assessment → Containment → Resolution → Recovery',
  },
  {
    category: 'Social Media Intelligence',
    typescriptFile: 'social-media-data.ts',
    sourceFiles: [
      'data/5-1-twitter-x-results.md', 'data/5-2-tiktok-results.md',
      'data/5-3-youtube-results.md', 'data/5-4-facebook-meta-results.md',
      'data/5-5-instagram-results.md', 'data/5-6-linkedin-results.md',
      'data/5-7-reddit-results.md', 'data/5-8-telegram-results.md',
      'data/5-9-threads-results.md', 'data/5-10-snapchat-results.md',
      'data/5-11-discord-results.md', 'data/5-12-whatsapp-results.md',
      'data/5-13-google-serp-results.md', 'data/5-14-news-websites-results.md',
      'data/5-15-forums-results.md', 'data/5-16-blogs-opinion-results.md',
      'data/5-17-dark-web-results.md', 'data/5-18-gaming-results.md',
      'data/5-19-web3-decentralized-results.md', 'data/5-20-podcast-audio-results.md',
    ],
    recordCount: 20,
    description: 'Platform intelligence across 20 social/digital platforms with dark social scoring',
  },
  {
    category: 'Multi-Lingual Intelligence',
    typescriptFile: 'languages-data.ts',
    sourceFiles: [
      'data/6-1-msa-queries-results.md', 'data/6-2-emirati-arabic-results.md',
      'data/6-3-gulf-arabic-results.md', 'data/6-4-levantine-arabic-results.md',
      'data/6-5-egyptian-arabic-results.md', 'data/6-6-maghrebi-arabic-results.md',
      'data/6-7-english-queries-results.md', 'data/6-8-french-queries-results.md',
      'data/6-9-urdu-hindi-results.md', 'data/6-10-persian-farsi-results.md',
      'data/6-11-malay-indonesian-results.md', 'data/6-12-russian-queries-results.md',
      'data/6-13-chinese-mandarin-results.md', 'data/6-14-transliteration-results.md',
      'data/6-15-code-switching-results.md',
    ],
    recordCount: 15,
    description: 'Language intelligence for 15 languages/dialects with Quantum Translation support',
  },
  {
    category: 'Stakeholder Intelligence',
    typescriptFile: 'stakeholder-data.ts',
    sourceFiles: [
      'data/7-1-nama-specific-results.md', 'data/7-2-nmc-dubai-results.md',
      'data/7-3-moi-specific-results.md', 'data/7-4-mofa-specific-results.md',
      'data/7-5-ministry-culture-results.md', 'data/7-6-ministry-economy-results.md',
      'data/7-7-gco-specific-results.md', 'data/7-8-pr-agency-results.md',
      'data/7-10-intl-relations-body-results.md',
    ],
    recordCount: 9,
    description: 'Government and civil society stakeholder mapping with engagement metrics',
  },
  {
    category: 'Historical Context',
    typescriptFile: 'historical-data.ts',
    sourceFiles: [
      'data/8-1-pre-federation-results.md', 'data/8-2-federation-early-results.md',
      'data/8-3-post-gulf-war-results.md', 'data/8-4-rapid-development-results.md',
      'data/8-5-arab-spring-results.md', 'data/8-6-modernization-vision-results.md',
      'data/8-7-post-pandemic-expo-results.md', 'data/8-8-recent-era-results.md',
      'data/8-9-event-historical-results.md', 'data/8-10-policy-announcement-results.md',
    ],
    recordCount: 10,
    description: 'Historical eras from pre-federation through modern era for pattern recognition',
  },
  {
    category: 'Sentiment / Emotions',
    typescriptFile: 'sentiment-data.ts',
    sourceFiles: [
      'data/9-1-positive-sentiment-results.md', 'data/9-2-negative-sentiment-results.md',
      'data/9-3-neutral-factual-results.md', 'data/9-4-emotion-specific-results.md',
      'data/9-5-controversy-debate-results.md', 'data/9-6-criticism-complaint-results.md',
      'data/9-7-praise-endorsement-results.md', 'data/9-8-sarcasm-irony-results.md',
      'data/9-9-fear-uncertainty-results.md', 'data/9-10-hope-optimism-results.md',
    ],
    recordCount: 10,
    description: 'Sentiment analysis using Plutchik 8-emotion model and 144-dimensional CRT mapping',
  },
  {
    category: 'Trends Intelligence',
    typescriptFile: 'trends-data.ts',
    sourceFiles: [
      'data/10-1-ai-technology-results.md', 'data/10-2-social-media-trends-results.md',
      'data/10-3-generational-shift-results.md', 'data/10-4-geopolitical-shift-results.md',
      'data/10-5-economic-trends-results.md', 'data/10-6-cultural-evolution-results.md',
      'data/10-7-regulatory-trends-results.md', 'data/10-8-media-industry-trends-results.md',
      'data/10-9-climate-sustainability-results.md', 'data/10-10-predictive-foresight-results.md',
    ],
    recordCount: 10,
    description: 'Trend forecasting across AI, social media, economics, culture, and climate',
  },
  {
    category: 'Verification / Fact-Check',
    typescriptFile: 'verification-data.ts',
    sourceFiles: [
      'data/11-1-media-about-media-results.md', 'data/11-2-self-reference-results.md',
      'data/11-3-comparative-ranking-results.md', 'data/11-4-statistical-datapoints-results.md',
      'data/11-5-visual-multimedia-results.md', 'data/11-6-fact-check-verification-results.md',
      'data/11-7-omission-silence-results.md', 'data/11-8-echo-chamber-filter-results.md',
      'data/11-9-bot-inauthentic-results.md', 'data/11-10-coordinated-inauthentic-results.md',
    ],
    recordCount: 10,
    description: 'Fact-checking, echo chamber analysis, and bot/inauthentic behavior detection',
  },
  {
    category: 'Monitoring / Real-Time Command',
    typescriptFile: 'monitoring-data.ts',
    sourceFiles: [
      'data/12-1-daily-monitoring-results.md', 'data/12-2-weekly-deep-dive-results.md',
      'data/12-3-crisis-response-results.md', 'data/12-4-historical-baseline-results.md',
      'data/12-5-entity-investigation-results.md', 'data/12-6-competitive-intelligence-results.md',
      'data/12-7-narrative-reconstruction-results.md', 'data/12-8-gap-analysis-results.md',
    ],
    recordCount: 8,
    description: 'Real-time monitoring cycles, competitive intelligence, and gap analysis',
  },
]

/**
 * Get a registry entry by category name
 */
export function getDataRegistry(category: string): NDIPDataFileRegistry | undefined {
  return NDIP_DATA_REGISTRY.find(r => r.category === category)
}

/**
 * Get total count of all UAE NDIP data records
 */
export function getTotalRecordCount(): number {
  return NDIP_DATA_REGISTRY.reduce((sum, r) => sum + r.recordCount, 0)
}

// ============================================================================
// EXPORTS
// ============================================================================

export const dataLoader = {
  getDataFiles,
  getDataFile,
  getAllDataFiles,
  parseMarkdownSections,
  parseMarkdownTables,
  tableToObjects,
  extractMetrics,
  extractLists,
  getDataRegistry,
  getTotalRecordCount,
}
