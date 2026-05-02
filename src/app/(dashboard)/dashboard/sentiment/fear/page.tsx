// @ts-nocheck
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  Brain,
  Siren,
  Clock,
  Database,
  ShieldAlert,
  Globe,
  Flame,
  Wind,
  Building,
  Plane,
  Thermometer,
  Coins,
  UserMinus,
  ChevronRight,
  Activity,
  Scale,
  Target,
  Eye,
  CheckCircle,
  XCircle,
} from 'lucide-react'
import {
  useFearUncertaintyData,
} from '@/lib/data-loader/sentiment-data'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardHover = {
  hover: { scale: 1.02, transition: { duration: 0.2 } },
}

const listItem = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
}

// Comprehensive Fear Topic Data extracted from MD file
const fearTopicsDetailed = [
  {
    id: 1,
    name: 'Economic Uncertainty/Risk',
    query: 'UAE + Uncertainty/Risk',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.3,
    severity: 'HIGH' as const,
    sources: [
      { name: 'KPMG Middle East CEO Outlook 2025', tier: 2, url: 'https://kpmg.com/ae/en/insights/value-creation/middle-east-ceo-outlook-2025.html' },
      { name: 'IMF via Nukta', tier: 1, url: 'https://nukta.com/imf-praises-uae-economic-resilience' },
      { name: 'Calcalistech', tier: 3, url: 'https://www.calcalistech.com/ctechnews/article/tq25thcm2' },
    ],
    kpis: [
      { kpi: 'UAE CEOs confident in 3-year growth', value: '80%', context: 'vs global average' },
      { kpi: 'CEOs confident in national economy', value: '84%', context: 'vs 81% global' },
      { kpi: 'Confident in AI deployment', value: '92%', context: '' },
      { kpi: 'GDP growth 2024', value: '4%', context: '' },
      { kpi: 'GDP growth 2025 projected', value: '4.8%', context: '' },
      { kpi: 'DFM index fall (first day)', value: '-4.7%', context: '' },
      { kpi: 'DFM weekly loss', value: '-9%', context: '' },
    ],
    primaryFears: ['Market volatility', 'War spillover', 'Economic fragility'],
    quotes: [
      '"CEOs are investing in AI with greater confidence — not just because of its promise, but because of the measurable value they are seeing." — Emilio Pera, Deputy CEO, KPMG Middle East',
    ],
  },
  {
    id: 2,
    name: 'Stability/Fragility',
    query: 'UAE + Stability/Fragility/Myth',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.2,
    severity: 'HIGH' as const,
    sources: [
      { name: 'WFMD - Fortress Oasis', tier: 3, url: 'https://www.wfmd.com/2026/03/21/united-arab-emirates-is-no-fragile-mirage-its-a-fortress-oasis/' },
      { name: 'Brussels Morning', tier: 3, url: 'https://brusselsmorning.com/dubai-fragile-foundations-war-2026-uae/95183/' },
      { name: 'Gulf News', tier: 2, url: 'https://gulfnews.com/opinion/op-eds/why-stability-remains-the-uaes-most-enduring-foreign-policy-principle-1.500417546' },
    ],
    kpis: [
      { kpi: 'Ballistic missiles intercepted', value: '357', context: 'cumulative' },
      { kpi: 'Cruise missiles intercepted', value: '15', context: 'cumulative' },
      { kpi: 'UAVs intercepted', value: '1,800+', context: 'cumulative' },
      { kpi: 'Non-oil foreign trade 2024', value: 'Dh2.997 trillion', context: 'record' },
      { kpi: 'FDI', value: 'Dh130 billion', context: '1st regionally, 11th globally' },
      { kpi: 'Humanitarian ranking', value: '3rd largest donor', context: '2025' },
    ],
    primaryFears: ['Safe-haven reputation', 'Air defense saturation', 'Exodus of wealth'],
    quotes: [
      '"We prevailed through an epic national defense...in the face of treacherous aggression" — Anwar Gargash, Emirati diplomatic adviser',
    ],
  },
  {
    id: 3,
    name: 'Real Estate Bubble',
    query: 'UAE + Real Estate Bubble/Burst',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.4,
    severity: 'HIGH' as const,
    sources: [
      { name: 'The Economist', tier: 2, url: 'https://www.economist.com/finance-and-economics/2025/09/24/will-dubais-super-hot-property-market-avoid-a-crash' },
      { name: 'UBS Global Real Estate Bubble Index', tier: 1, url: 'https://www.ubs.com/global/en/wealthmanagement/insights/global-real-estate-bubble-index.html' },
      { name: 'MapHomesRealEstate', tier: 3, url: 'https://maphomesrealestate.com/dubai-real-estate-market-2025-crash-or-correction-heres-what-experts-say/' },
    ],
    kpis: [
      { kpi: '2024 price growth', value: '~19-20%', context: '' },
      { kpi: 'Supply pipeline 2025-2027', value: '~210,000 units', context: '' },
      { kpi: 'Fitch correction forecast', value: '-15% by 2026', context: '' },
      { kpi: 'Dubai bubble risk status', value: 'Elevated', context: '' },
      { kpi: 'Off-plan sales Q1 2025', value: '65%', context: '+37% YoY' },
      { kpi: 'Transaction volume decline', value: '~30-40%', context: 'recent weeks' },
      { kpi: 'Rental yields - apartments', value: '~7.1%', context: '' },
      { kpi: 'Vacancy rate citywide', value: '~5%', context: '' },
    ],
    primaryFears: ['Price correction', 'Oversupply', 'Developer defaults'],
    quotes: [],
  },
  {
    id: 4,
    name: 'War/Regional Conflict',
    query: 'UAE + War/Regional/Spillover',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.5,
    severity: 'CRITICAL' as const,
    sources: [
      { name: 'Carnegie Endowment', tier: 1, url: 'https://carnegieendowment.org/emissary/2026/04/gulf-states-gcc-iran-war-three-scenarios' },
      { name: 'Newland Chase', tier: 3, url: 'https://newlandchase.com/middle-east-crisis-situation-update/' },
      { name: 'ECSSR', tier: 2, url: 'https://www.ecssr.ae/en/perspectives/resilience-and-connectivity-in-a-time-of-war-the-uae-and-the-future-o' },
    ],
    kpis: [
      { kpi: 'UAE war losses', value: '~$6 billion', context: '' },
      { kpi: 'Brent crude peak', value: '$144.42/barrel', context: 'record' },
      { kpi: 'Flights cancelled', value: '37,000+', context: '' },
      { kpi: 'Dubai stock exchange decline', value: '~-17%', context: '' },
      { kpi: 'Vessels stranded near Hormuz', value: '~2,000', context: '' },
      { kpi: 'Hormuz traffic (normal)', value: '150 vessels/day', context: '' },
      { kpi: 'Hormuz traffic (reduced)', value: '9 vessels/24hr', context: '' },
    ],
    primaryFears: ['Iranian missiles', 'Hormuz closure', 'Safe-haven status', 'Trade disruption'],
    quotes: [
      '"Missiles and market panic expose the fragile foundations of the Gulf\'s most celebrated \'safe harbor\' economy."',
    ],
  },
  {
    id: 5,
    name: 'Oil/Post-Oil',
    query: 'UAE + Oil/Post-Oil/Peak Demand',
    uaeRelevance: 'HIGH',
    aggregateSentiment: 0.4,
    severity: 'MEDIUM' as const,
    sources: [
      { name: 'Reuters', tier: 2, url: 'https://www.reuters.com/business/energy/oil-demand-will-stay-above-100-million-bpd-beyond-2040-uaes-jaber-says-2025-11-03/' },
      { name: 'OilPrice.com', tier: 3, url: 'https://oilprice.com/Latest-Energy-News/World-News/UAE-Oil-Sector-Poised-for-78-Growth-in-2025.html' },
      { name: 'IEA', tier: 1, url: 'https://www.iea.org/reports/world-energy-investment-2025/middle-east' },
    ],
    kpis: [
      { kpi: 'Oil sector growth 2025', value: '7.8%', context: '' },
      { kpi: 'Production target', value: '5 million bpd by 2026', context: '' },
      { kpi: 'Non-oil sector share', value: '>75% of GDP', context: '' },
      { kpi: 'Middle East energy investment 2025', value: '$130 billion', context: '' },
      { kpi: 'UAE GDP 2025', value: '$571 billion', context: '30th largest globally' },
    ],
    primaryFears: ['Oil demand peak', 'Stranded assets', 'Transition disruption'],
    quotes: [
      '"Oil demand will stay above 100 million BPD beyond 2040" — Sultan Al Jaber, UAE oil minister',
    ],
  },
  {
    id: 6,
    name: 'AI/Jobs',
    query: 'UAE + AI/Jobs/Replace',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.2,
    severity: 'HIGH' as const,
    sources: [
      { name: 'PwC 2025 Global AI Jobs Barometer', tier: 1, url: 'https://www.pwc.com/gx/en/issues/artificial-intelligence/job-barometer/aijb-2025-uae-analysis.pdf' },
      { name: 'The National', tier: 2, url: 'https://www.thenationalnews.com/business/money/2025/08/29/uae-professionals-fear-ai-could-replace-jobs-but-admit-its-made-work-easier/' },
      { name: 'MENews247', tier: 3, url: 'https://menews247.com/uae-to-create-1-million-jobs-by-2030-as-ai-and-digital-growth-accelerates-hiring/' },
    ],
    kpis: [
      { kpi: 'AI-exposed roles growth', value: '13%', context: '2021-2024' },
      { kpi: 'Already replaced by AI', value: '7%', context: '' },
      { kpi: 'Worry AI will affect future jobs', value: '25%', context: '' },
      { kpi: 'AI job postings 2024', value: '10,000', context: '' },
      { kpi: 'Jobs promised by 2030', value: '1 million', context: '' },
      { kpi: 'WEF projected job losses by 2030', value: '75 million', context: '' },
    ],
    primaryFears: ['Job displacement', 'Skills obsolescence', 'WEF 75M job losses'],
    quotes: [
      '"AI is currently not sophisticated enough to do the roles of senior white-collar professionals that count on experience" — David Mackenzie, Mackenzie Jones Middle East',
    ],
  },
  {
    id: 7,
    name: 'Climate/Heat',
    query: 'UAE + Climate/Heat/Unlivable/50 Degrees',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.8,
    severity: 'CRITICAL' as const,
    sources: [
      { name: 'UN News', tier: 1, url: 'https://news.un.org/en/story/2025/12/1166509' },
      { name: 'Wikipedia', tier: 3, url: 'https://en.wikipedia.org/wiki/Climate_change_in_the_United_Arab_Emirates' },
      { name: 'AL-Monitor', tier: 2, url: 'https://www.al-monitor.com/originals/2025/05/uae-hits-record-may-temperature-516c' },
    ],
    kpis: [
      { kpi: 'UAE record temperature', value: '51.6C', context: 'May 24, 2025' },
      { kpi: 'Temperature rise (1975-2013)', value: '2.7C', context: '' },
      { kpi: 'Sea level rise projection (2100)', value: '42-98 cm', context: '' },
      { kpi: 'Coastline at risk underwater', value: '6%', context: 'by 2100' },
      { kpi: 'Population at sea level', value: '85%', context: '' },
      { kpi: 'Days of exceptional heat annually', value: 'Up to 200 days', context: 'projected' },
      { kpi: 'Per capita CO2', value: '21.8 tons', context: '2021, top 10 globally' },
    ],
    primaryFears: ['Unlivability by 2030', 'Infrastructure damage', 'Worker safety', 'Water scarcity'],
    quotes: [
      '"Human health, ecosystems and economies can\'t cope with extended spells of more than 50C" — WMO Secretary-General',
      '"It is simply too hot to handle" — WMO Secretary-General',
    ],
  },
  {
    id: 8,
    name: 'Household Debt',
    query: 'UAE + Household Debt/Personal Debt Crisis',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.3,
    severity: 'HIGH' as const,
    sources: [
      { name: 'AGBI', tier: 2, url: 'https://www.agbi.com/analysis/banking-finance/2025/09/uae-consumer-debt-swells-but-no-alarm-bells-yet/' },
      { name: 'CEIC Data', tier: 2, url: 'https://www.ceicdata.com/en/indicator/united-arab-emirates/household-debt' },
      { name: 'LinkedIn', tier: 3, url: 'https://www.linkedin.com/pulse/why-many-people-uae-falling-debt-trap-fast-company-me-ecdtc' },
    ],
    kpis: [
      { kpi: 'Consumer debt May 2025', value: 'AED521B ($142bn)', context: '' },
      { kpi: 'Debt increase from 2021', value: '50%', context: '' },
      { kpi: 'Household debt-to-GDP', value: '30%', context: '' },
      { kpi: 'Mortgage growth YoY', value: '77%', context: '' },
      { kpi: 'Residents spending 25%+ on debt', value: '60%', context: '' },
      { kpi: 'Money worries top stressor', value: '60%', context: '' },
      { kpi: 'Average household debt', value: '~$95,000', context: '' },
    ],
    primaryFears: ['Debt spiral', 'Bounced cheques', 'Imprisonment', 'Asset seizure'],
    quotes: [
      '"feedback loops between credit booms and real estate valuations could heighten market fragilities" — Central Bank Warning',
    ],
  },
  {
    id: 9,
    name: 'Expat Exodus',
    query: 'UAE + Expat Leave/Mass Exodus',
    uaeRelevance: 'CRITICAL',
    aggregateSentiment: -0.8,
    severity: 'CRITICAL' as const,
    sources: [
      { name: 'IntelliNews', tier: 3, url: 'https://new.intellinews.com/articles/dubai-faces-expat-exodus-as-war-shatters-safe-haven-reputation-432596' },
      { name: 'MSN', tier: 3, url: 'https://www.msn.com/en-us/money/markets/many-dubai-expats-fled-as-the-war-in-the-middle-east-escalated-those-that-stayed-say-life-is-functioning-but-tense/ar-AA1Yy0HP' },
      { name: 'Daily Mail', tier: 3, url: 'https://www.dailymail.co.uk/news/article-15660373/The-great-Dubai-exodus-Mega-rich-scramble-protect-billions-Swiss-bank-accounts-flock-European-safehavens-Mediterranean-party-islands-continue-lavish-lifestyles-war-rages-on.html' },
    ],
    kpis: [
      { kpi: 'Millionaires relocated to Dubai (2025)', value: '9,800', context: '' },
      { kpi: 'Wealth brought', value: '$63 billion', context: '' },
      { kpi: 'Dubai stock exchange decline', value: '~-17%', context: '' },
      { kpi: 'Expat unemployment February', value: '12%', context: '' },
      { kpi: 'Flights cancelled since conflict', value: '37,000+', context: '' },
      { kpi: 'Total population', value: '11.57 million', context: '' },
      { kpi: 'Expatriates', value: '10.24 million (88%)', context: '' },
      { kpi: 'Expat population', value: '~90%', context: '' },
    ],
    primaryFears: ['Brain drain', 'Safe-haven reputation', 'Labor shortage', 'Economic slowdown'],
    quotes: [
      '"Many Dubai expats fled as the war in the Middle East escalated"',
      '"War-induced panic has led to a mass exodus"',
    ],
  },
]

// Entity Registry
const entityRegistry = {
  organizations: [
    { entity: 'KPMG', type: 'Big 4 Accounting', sentiment: 'Neutral/Positive', uaeRelevance: 'High' },
    { entity: 'IMF', type: 'Multilateral Institution', sentiment: 'Positive', uaeRelevance: 'Critical' },
    { entity: 'Carnegie Endowment', type: 'Think Tank', sentiment: 'Mixed', uaeRelevance: 'Critical' },
    { entity: 'UBS', type: 'Financial Institution', sentiment: 'Negative', uaeRelevance: 'High' },
    { entity: 'PwC', type: 'Big 4 Accounting', sentiment: 'Neutral', uaeRelevance: 'Critical' },
    { entity: 'World Bank', type: 'Multilateral Institution', sentiment: 'Positive', uaeRelevance: 'Medium' },
    { entity: 'IEA', type: 'International Agency', sentiment: 'Neutral', uaeRelevance: 'High' },
    { entity: 'UN/WMO', type: 'International Organization', sentiment: 'Negative', uaeRelevance: 'Critical' },
    { entity: 'Emirates NBD', type: 'Bank', sentiment: 'Neutral', uaeRelevance: 'Critical' },
    { entity: 'Goldman Sachs', type: 'Investment Bank', sentiment: 'Negative', uaeRelevance: 'High' },
    { entity: 'Citi', type: 'Investment Bank', sentiment: 'Negative', uaeRelevance: 'High' },
    { entity: 'Standard Chartered', type: 'Bank', sentiment: 'Negative', uaeRelevance: 'High' },
  ],
  individuals: [
    { name: 'Sultan Al Jaber', role: 'Oil Minister', organization: 'UAE', sentiment: 'Neutral' },
    { name: 'Anwar Gargash', role: 'Diplomatic Adviser', organization: 'UAE', sentiment: 'Positive' },
    { name: 'Emilio Pera', role: 'Deputy CEO', organization: 'KPMG Middle East', sentiment: 'Positive' },
    { name: 'Dr. Abdullah Al Fozan', role: 'CEO', organization: 'KPMG Middle East', sentiment: 'Positive' },
    { name: 'David Mackenzie', role: 'HR Expert', organization: 'Mackenzie Jones Middle East', sentiment: 'Neutral' },
  ],
}

// Source Credibility Matrix
const sourceCredibilityMatrix = [
  { tier: 'Tier 0', description: 'Primary Data (Govt/Official)', sources: 'None in this set' },
  { tier: 'Tier 1', description: 'Multilateral/Prestigious/Verified', sources: 'IMF, IEA, UN/WMO, Carnegie Endowment, UBS' },
  { tier: 'Tier 2', description: 'Major Publications/Big 4/Banks', sources: 'KPMG, PwC, The Economist, Reuters, Gulf News, The National, Emirates NBD, AGBI, Forbes MENA' },
  { tier: 'Tier 3', description: 'Regional News/Industry Portals', sources: 'Calcalistech, CFI Trade, OilPrice.com, Fanack Water, AL-Monitor, IntelliNews, Brussels Morning' },
  { tier: 'Tier 4', description: 'Social Media/Personal/Other', sources: 'Reddit, Facebook, Medium, YouTube, Wikipedia' },
]

// Comprehensive KPI Data by Category
const comprehensiveKPIs = {
  macroeconomic: [
    { kpi: 'UAE GDP 2025', value: '$571 billion', date: '2025', source: 'Forbes MENA', tier: 2 },
    { kpi: 'Global rank', value: '30th', date: '2025', source: 'Forbes MENA', tier: 2 },
    { kpi: 'GDP growth 2024', value: '4%', date: '2024', source: 'IMF', tier: 1 },
    { kpi: 'GDP growth 2025', value: '4.8-4.9%', date: '2025', source: 'IMF/Reuters', tier: 1 },
    { kpi: 'GDP growth 2026', value: '5%', date: '2026', source: 'IMF', tier: 1 },
    { kpi: 'Non-oil sector', value: '>75% of GDP', date: '2025', source: 'Forbes MENA', tier: 2 },
    { kpi: 'FDI', value: 'Dh130 billion', date: '2024', source: 'Gulf News', tier: 2 },
    { kpi: 'Non-oil trade', value: 'Dh2.997 trillion', date: '2024', source: 'Gulf News', tier: 2 },
    { kpi: 'Foreign investment growth', value: '+49% YoY', date: '2025', source: 'Forbes MENA', tier: 2 },
    { kpi: 'Inflation 2025', value: '1.6%', date: '2025', source: 'IMF', tier: 1 },
  ],
  oilEnergy: [
    { kpi: 'Oil sector growth 2025', value: '7.8%', date: '2025', source: 'OilPrice.com', tier: 3 },
    { kpi: 'Oil sector growth 2024', value: '0.4%', date: '2024', source: 'OilPrice.com', tier: 3 },
    { kpi: 'Oil production 2025', value: '3.4 million bpd', date: '2025', source: 'OilPrice.com', tier: 3 },
    { kpi: 'Production capacity target', value: '5 million bpd', date: '2026', source: 'OilPrice.com', tier: 3 },
    { kpi: 'Current capacity', value: '4.85 million bpd', date: 'May 2024', source: 'OilPrice.com', tier: 3 },
    { kpi: 'Upstream investment', value: '$30 billion', date: '2024', source: 'OilPrice.com', tier: 3 },
    { kpi: 'Middle East energy investment 2025', value: '$130 billion', date: '2025', source: 'IEA', tier: 1 },
  ],
  realEstate: [
    { kpi: '2024 transactions', value: '226,000', date: '2024', source: 'MapHomes', tier: 3 },
    { kpi: '2024 transaction value', value: 'AED 761 billion', date: '2024', source: 'MapHomes', tier: 3 },
    { kpi: '2024 price growth', value: '~19-20%', date: '2024', source: 'LYM/MapHomes', tier: 3 },
    { kpi: '2025 price growth (Q1)', value: '+15.3% YoY', date: 'Q1 2025', source: 'MapHomes', tier: 3 },
    { kpi: 'Correction forecast', value: '-15% by 2026', date: 'Late 2025-26', source: 'Fitch', tier: 3 },
    { kpi: 'Supply pipeline 2025-2027', value: '~210,000 units', date: '2025-2027', source: 'MapHomes', tier: 3 },
    { kpi: 'Population 2024', value: '3.825M', date: '2024', source: 'MapHomes', tier: 3 },
    { kpi: 'Daily arrivals Q1 2025', value: '1,000', date: 'Q1 2025', source: 'MapHomes', tier: 3 },
    { kpi: 'International visitors 2024', value: '18.7 million', date: '2024', source: 'MapHomes', tier: 3 },
    { kpi: 'Bubble risk status', value: 'Elevated', date: '2025', source: 'UBS', tier: 1 },
  ],
  conflictWar: [
    { kpi: 'Ballistic missiles intercepted', value: '357', date: 'Mar 2026', source: 'Newland Chase', tier: 3 },
    { kpi: 'Cruise missiles intercepted', value: '15', date: 'Mar 2026', source: 'Newland Chase', tier: 3 },
    { kpi: 'UAVs intercepted', value: '1,800+', date: 'Mar 2026', source: 'Newland Chase', tier: 3 },
    { kpi: 'Deaths from debris', value: '11', date: 'Mar 2026', source: 'Newland Chase', tier: 3 },
    { kpi: 'DFM index drop', value: '-4.7% (day), -9% (week)', date: '2026', source: 'Calcalistech', tier: 3 },
    { kpi: 'Dubai stock exchange decline', value: '-17%', date: '2026', source: 'IntelliNews', tier: 3 },
    { kpi: 'Brent crude peak', value: '$144.42/barrel', date: 'Mar 2026', source: 'Newland Chase', tier: 3 },
    { kpi: 'UAE war losses', value: '~$6 billion', date: '2026', source: 'Eurasia Review', tier: 3 },
    { kpi: 'Flights cancelled', value: '37,000+', date: '2026', source: 'IntelliNews', tier: 3 },
    { kpi: 'Vessels stranded', value: '~2,000', date: '2026', source: 'Newland Chase', tier: 3 },
  ],
  climate: [
    { kpi: 'UAE record temperature', value: '51.6C', date: 'May 2025', source: 'AL-Monitor', tier: 2 },
    { kpi: 'All-time record', value: '52C', date: '2010', source: 'AL-Monitor', tier: 2 },
    { kpi: 'Temperature rise (1975-2013)', value: '2.7C', date: '1975-2013', source: 'Wikipedia', tier: 3 },
    { kpi: 'Sea level rise (2100)', value: '42-98 cm', date: '2100', source: 'Wikipedia', tier: 3 },
    { kpi: 'Coastline at risk', value: '6%', date: '2100', source: 'Wikipedia', tier: 3 },
    { kpi: 'Per capita CO2', value: '21.8 tons', date: '2021', source: 'Wikipedia', tier: 3 },
    { kpi: 'GHG reduction target 2030', value: '40%', date: '2030', source: 'Wikipedia', tier: 3 },
    { kpi: 'Net Zero target', value: '2050', date: '2050', source: 'Wikipedia', tier: 3 },
    { kpi: 'Days of exceptional heat', value: '200/year', date: 'Future', source: 'Fanack', tier: 3 },
    { kpi: 'Outdoor workers exposed', value: '83.6%', date: '2025', source: 'AL-Monitor', tier: 2 },
  ],
  debt: [
    { kpi: 'Consumer debt', value: 'AED521B ($142B)', date: 'May 2025', source: 'AGBI', tier: 2 },
    { kpi: 'Debt growth (from 2021)', value: '50%', date: '2021-2025', source: 'AGBI', tier: 2 },
    { kpi: 'Household debt-to-GDP', value: '30%', date: 'End 2024', source: 'AGBI', tier: 2 },
    { kpi: 'Eurozone comparison', value: '51%', date: 'End 2024', source: 'AGBI', tier: 2 },
    { kpi: 'Mortgage growth YoY', value: '77%', date: 'Aug 2024', source: 'AGBI', tier: 2 },
    { kpi: 'NPL ratio', value: '<4%', date: 'Q1 2024', source: 'AGBI', tier: 2 },
    { kpi: 'Household debt (Sep 2025)', value: '$149.1 billion', date: 'Sep 2025', source: 'CEIC', tier: 2 },
    { kpi: 'Average household debt', value: '~$95,000', date: '2024', source: 'LinkedIn', tier: 3 },
    { kpi: 'Insufficient income for debt', value: '48%', date: '2024', source: 'LinkedIn', tier: 3 },
  ],
  demographics: [
    { kpi: 'Total population', value: '11.57 million', date: 'Current', source: 'Facebook', tier: 4 },
    { kpi: 'Expatriates', value: '10.24 million', date: 'Current', source: 'Facebook', tier: 4 },
    { kpi: 'Citizens', value: '1.33 million (11.5%)', date: 'Current', source: 'Facebook', tier: 4 },
    { kpi: 'Indian residents', value: '~38%', date: 'Current', source: 'Facebook', tier: 4 },
    { kpi: 'Pakistani residents', value: '~17%', date: 'Current', source: 'Facebook', tier: 4 },
    { kpi: 'Bangladeshi residents', value: '~7.5%', date: 'Current', source: 'Facebook', tier: 4 },
    { kpi: 'Millionaire immigrants 2024', value: '6,700', date: '2024', source: 'MapHomes', tier: 3 },
  ],
}

// UAE Relevance Assessment Matrix
const uaeRelevanceMatrix = [
  { topic: 'Economic Uncertainty', assessment: 'CRITICAL', rationale: '4.8-5% GDP growth projections vs war-induced market volatility' },
  { topic: 'Stability/Fragility', assessment: 'CRITICAL', rationale: 'Air defense tested, safe-haven reputation at stake' },
  { topic: 'Real Estate Bubble', assessment: 'CRITICAL', rationale: '19-20% price growth, 210k unit supply pipeline, 15% correction forecast' },
  { topic: 'War/Regional Spillover', assessment: 'CRITICAL', rationale: '357 missiles intercepted, $6B losses, 37k flights cancelled' },
  { topic: 'Oil/Post-Oil', assessment: 'HIGH', rationale: '7.8% oil growth, but 75%+ non-oil GDP shows diversification' },
  { topic: 'AI/Jobs', assessment: 'CRITICAL', rationale: '13% AI role growth, 7% already replaced, 1M jobs promised' },
  { topic: 'Climate/Heat', assessment: 'CRITICAL', rationale: '51.6C record, 6% coastline at risk, habitability questioned' },
  { topic: 'Household Debt', assessment: 'CRITICAL', rationale: '50% debt growth since 2021, $149B household debt' },
  { topic: 'Expat Exodus', assessment: 'CRITICAL', rationale: '12% expat unemployment, 37k flights cancelled, $6B losses' },
]

// Sentiment by Topic
const sentimentByTopic = [
  { topic: 'Economic Uncertainty/Risk', sentiment: 'Mixed', score: -0.3 },
  { topic: 'Stability/Fragility', sentiment: 'Divided', score: -0.2 },
  { topic: 'Real Estate Bubble', sentiment: 'Negative/Cautious', score: -0.4 },
  { topic: 'War/Regional Conflict', sentiment: 'Negative', score: -0.5 },
  { topic: 'Oil/Post-Oil', sentiment: 'Positive', score: 0.4 },
  { topic: 'AI/Jobs', sentiment: 'Mixed', score: -0.2 },
  { topic: 'Climate/Heat', sentiment: 'Extremely Negative', score: -0.8 },
  { topic: 'Household Debt', sentiment: 'Cautious', score: -0.3 },
  { topic: 'Expat Exodus', sentiment: 'Extremely Negative', score: -0.8 },
]

export default function FearUncertaintyPage() {
  const fearData = useFearUncertaintyData()
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('overview')

  if (!fearData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Fear & Uncertainty data...</div>
      </div>
    )
  }

  // Calculate critical counts
  const criticalCount = fearData.topics.filter(t => t.severity === 'CRITICAL').length
  const highCount = fearData.topics.filter(t => t.severity === 'HIGH').length

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-500/20'
      case 'HIGH': return 'text-amber-400 bg-amber-500/20'
      case 'MEDIUM': return 'text-amber-400 bg-amber-500/20'
      case 'LOW': return 'text-emerald-400 bg-emerald-500/20'
      default: return 'text-platinum-400 bg-platinum-500/20'
    }
  }

  const getSeverityBorder = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'border-red-500/50'
      case 'HIGH': return 'border-amber-500/50'
      case 'MEDIUM': return 'border-amber-500/50'
      case 'LOW': return 'border-emerald-500/50'
      default: return 'border-platinum-500/50'
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Enhanced Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge variant="destructive" className="mb-2 bg-red-500/20 text-red-400 border-red-500/50">
              <Siren className="w-3 h-3 mr-1" />
              FEAR & UNCERTAINTY
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold gradient-text-rose-500 font-rajdhani"
          >
            Fear & Uncertainty Analysis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-platinum-400"
          >
            {fearData.overview.queryCategories} distinct fear topics from {fearData.overview.totalSourcesConsulted} authoritative sources
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <Button variant="outline" className="gap-2 border-red-500/50 text-red-400 hover:bg-red-500/10">
            <Eye className="h-4 w-4" />
            Monitor Risks
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-navy-950 gap-2">
            <ShieldAlert className="h-4 w-4" />
            Mitigation Actions
          </Button>
        </motion.div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Critical Fears"
            value={criticalCount.toString()}
            icon={<AlertTriangle className="h-6 w-6" />}
            gradient="rose"
            status="error"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="High Severity"
            value={highCount.toString()}
            icon={<AlertCircle className="h-6 w-6" />}
            gradient="gold"
            status="warning"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Sources Consulted"
            value={`${fearData.overview.totalSourcesConsulted}+`}
            icon={<Database className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Research Date"
            value="2026-04-27"
            icon={<Clock className="h-6 w-6" />}
            gradient="indigo"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="topics">Fear Topics</TabsTrigger>
          <TabsTrigger value="kpis">Key KPIs</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="credibility">Source Credibility</TabsTrigger>
          <TabsTrigger value="assessment">UAE Assessment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Fear & Uncertainty Overview" description={`${fearData.overview.queryCategories} distinct fear topics from ${fearData.overview.totalSourcesConsulted} authoritative sources`}>
            <div className="space-y-6">
              {/* Fear by Category Chart */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani">
                      <TrendingUp className="w-4 h-4 inline mr-2" />
                      Fear by Category
                    </CardTitle>
                    <CardDescription>Intensity of fear across different topics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={fearData.byCategory}
                      xAxisKey="category"
                      bars={[
                        { dataKey: 'fear', name: 'Fear Index', color: CHART_COLORS.rose },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card border-amber-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani">
                      <Activity className="w-4 h-4 inline mr-2" />
                      Fear Trend
                    </CardTitle>
                    <CardDescription>Fear and uncertainty intensity over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={fearData.trendData}
                      xAxisKey="month"
                      lines={[
                        { dataKey: 'fear', name: 'Fear Index', color: CHART_COLORS.rose },
                        { dataKey: 'uncertainty', name: 'Uncertainty', color: CHART_COLORS.gold },
                        { dataKey: 'economicRisk', name: 'Economic Risk', color: CHART_COLORS.orange },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Sentiment Distribution */}
              <Card className="glass-card border-platinum-500/30">
                <CardHeader>
                  <CardTitle className="text-lg font-rajdhani">
                    <Scale className="w-4 h-4 inline mr-2" />
                    Sentiment Distribution
                  </CardTitle>
                  <CardDescription>Fear sentiment across topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={fearData.sentimentDistribution}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              {/* Severity Distribution */}
              <Card className="glass-card border-platinum-500/30">
                <CardHeader>
                  <CardTitle className="text-lg font-rajdhani">
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    Severity Distribution
                  </CardTitle>
                  <CardDescription>Topics by severity level</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={fearData.severityDistribution}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* Fear Aggregate Summary */}
          <GlassPanel title="Fear Aggregate Summary" description="Key fear and uncertainty aggregates">
            <div className="space-y-4">
              {fearData.aggregateSummary.map((aggregate, idx) => (
                <motion.div
                  key={aggregate.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`glass-card border ${aggregate.severity === 'CRITICAL' ? 'border-red-500/50' : 'border-amber-500/50'} p-6`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${aggregate.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}
                    >
                      <AlertTriangle className="h-6 w-6" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg text-platinum-200 font-rajdhani">
                          {aggregate.category}
                        </h4>
                        <Badge className={aggregate.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}>
                          {aggregate.severity}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-platinum-500">Sentiment:</span>
                        <Badge variant="outline" className={aggregate.aggregateSentiment < 0 ? 'text-red-400 border-red-500/50' : 'text-emerald-400 border-emerald-500/50'}>
                          {aggregate.aggregateSentiment > 0 ? '+' : ''}{aggregate.aggregateSentiment}
                        </Badge>
                      </div>
                      <div className="bg-navy-900/50 rounded-lg p-3">
                        <p className="text-xs text-platinum-500 mb-2">Evidence:</p>
                        <ul className="space-y-1">
                          {aggregate.evidence.map((ev, i) => (
                            <li key={i} className="text-sm text-platinum-300 flex items-center gap-2">
                              <XCircle className="w-3 h-3 text-red-400 flex-shrink-0" />
                              {ev}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Fear Topics Tab */}
        <TabsContent value="topics" className="space-y-6">
          <GlassPanel title="Fear & Uncertainty Topics" description="9 distinct fear and uncertainty categories">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                  {fearTopicsDetailed.map((topic, idx) => (
                    <motion.div
                      key={topic.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                      onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
                      className={`glass-card border ${getSeverityBorder(topic.severity)} p-4 cursor-pointer`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={getSeverityColor(topic.severity)}>
                          {topic.severity}
                        </Badge>
                        <span className="text-xs text-platinum-500">#{topic.id}</span>
                      </div>
                      <h4 className="font-semibold text-platinum-200 mb-2 font-rajdhani">
                        {topic.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-platinum-400 mb-3">
                        <Badge variant="outline" className="text-xs">
                          Sentiment: {topic.aggregateSentiment > 0 ? '+' : ''}{topic.aggregateSentiment}
                        </Badge>
                      </div>
                      <Progress
                        value={Math.abs(topic.aggregateSentiment) * 100}
                        className="h-1"
                      />
                      <AnimatePresence>
                        {selectedTopic === topic.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-3 pt-3 border-t border-platinum-700"
                          >
                            <p className="text-xs text-platinum-500 mb-2">
                              Primary Fears:
                            </p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {topic.primaryFears.map((fear, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {fear}
                                </Badge>
                              ))}
                            </div>
                            <p className="text-xs text-platinum-500 mb-2">Key KPIs:</p>
                            <div className="space-y-1">
                              {topic.kpis.slice(0, 4).map((kpi, i) => (
                                <div key={i} className="flex justify-between text-xs">
                                  <span className="text-platinum-400">{kpi.kpi}:</span>
                                  <span className="text-red-400 font-semibold">{kpi.value}</span>
                                </div>
                              ))}
                            </div>
                            {topic.quotes.length > 0 && (
                              <blockquote className="mt-3 text-xs text-platinum-500 italic border-l-2 border-platinum-600 pl-2">
                                {topic.quotes[0].substring(0, 120)}...
                              </blockquote>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* KPIs Tab */}
        <TabsContent value="kpis" className="space-y-6">
          <GlassPanel title="Comprehensive KPIs" description="All key performance indicators by category">
            <div className="space-y-6">
              {/* Macroeconomic KPIs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card border-platinum-500/30 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                  <h4 className="font-semibold text-platinum-200 font-rajdhani">
                    Macroeconomic KPIs
                  </h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {comprehensiveKPIs.macroeconomic.map((kpi, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-navy-900/50 rounded-lg">
                      <span className="text-xs text-platinum-400">{kpi.kpi}</span>
                      <span className="text-sm font-semibold text-emerald-400">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Oil & Energy KPIs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card border-platinum-500/30 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="h-5 w-5 text-orange-400" />
                  <h4 className="font-semibold text-platinum-200 font-rajdhani">
                    Oil & Energy KPIs
                  </h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {comprehensiveKPIs.oilEnergy.map((kpi, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-navy-900/50 rounded-lg">
                      <span className="text-xs text-platinum-400">{kpi.kpi}</span>
                      <span className="text-sm font-semibold text-orange-400">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Real Estate KPIs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card border-platinum-500/30 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Building className="h-5 w-5 text-purple-400" />
                  <h4 className="font-semibold text-platinum-200 font-rajdhani">
                    Real Estate KPIs
                  </h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {comprehensiveKPIs.realEstate.map((kpi, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-navy-900/50 rounded-lg">
                      <span className="text-xs text-platinum-400">{kpi.kpi}</span>
                      <span className="text-sm font-semibold text-purple-400">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Conflict/War KPIs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card border-red-500/30 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Plane className="h-5 w-5 text-red-400" />
                  <h4 className="font-semibold text-platinum-200 font-rajdhani">
                    Conflict/War KPIs
                  </h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {comprehensiveKPIs.conflictWar.map((kpi, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-navy-900/50 rounded-lg">
                      <span className="text-xs text-platinum-400">{kpi.kpi}</span>
                      <span className="text-sm font-semibold text-red-400">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Climate KPIs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card border-orange-500/30 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Thermometer className="h-5 w-5 text-orange-400" />
                  <h4 className="font-semibold text-platinum-200 font-rajdhani">
                    Climate/Heat KPIs
                  </h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {comprehensiveKPIs.climate.map((kpi, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-navy-900/50 rounded-lg">
                      <span className="text-xs text-platinum-400">{kpi.kpi}</span>
                      <span className="text-sm font-semibold text-orange-400">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Debt KPIs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card border-amber-500/30 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Coins className="h-5 w-5 text-amber-400" />
                  <h4 className="font-semibold text-platinum-200 font-rajdhani">
                    Household Debt KPIs
                  </h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {comprehensiveKPIs.debt.map((kpi, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-navy-900/50 rounded-lg">
                      <span className="text-xs text-platinum-400">{kpi.kpi}</span>
                      <span className="text-sm font-semibold text-amber-400">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Demographics KPIs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-card border-navy-500/30 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-navy-400" />
                  <h4 className="font-semibold text-platinum-200 font-rajdhani">
                    Demographics/Expat KPIs
                  </h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {comprehensiveKPIs.demographics.map((kpi, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-navy-900/50 rounded-lg">
                      <span className="text-xs text-platinum-400">{kpi.kpi}</span>
                      <span className="text-sm font-semibold text-navy-400">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Organizations */}
            <GlassPanel title="Organization Registry" description="Key organizations referenced in fear/uncertainty analysis">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {entityRegistry.organizations.map((org, idx) => (
                    <motion.div
                      key={org.entity}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-platinum-500/30 p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-platinum-200">{org.entity}</h4>
                        <Badge variant="outline" className="text-xs">
                          Tier {org.uaeRelevance === 'Critical' ? '1' : org.uaeRelevance === 'High' ? '2' : '3'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-platinum-400">
                        <Badge variant="secondary" className="text-xs">{org.type}</Badge>
                        <Badge className={org.sentiment.includes('Positive') ? 'text-emerald-400 border-emerald-500/50' : org.sentiment.includes('Negative') ? 'text-red-400 border-red-500/50' : 'text-platinum-400 border-platinum-500/50'}>
                          {org.sentiment}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Individuals */}
            <GlassPanel title="Individual Registry" description="Key individuals referenced in fear/uncertainty analysis">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {entityRegistry.individuals.map((person, idx) => (
                    <motion.div
                      key={person.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-platinum-500/30 p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-platinum-200">{person.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {person.organization}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-platinum-400">
                        <Badge variant="secondary" className="text-xs">{person.role}</Badge>
                        <Badge className={person.sentiment.includes('Positive') ? 'text-emerald-400 border-emerald-500/50' : person.sentiment.includes('Negative') ? 'text-red-400 border-red-500/50' : 'text-platinum-400 border-platinum-500/50'}>
                          {person.sentiment}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* Source Credibility Tab */}
        <TabsContent value="credibility" className="space-y-6">
          <GlassPanel title="Source Credibility Matrix" description="Tier-based source classification">
            <div className="space-y-4">
              {sourceCredibilityMatrix.map((tier, idx) => (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`glass-card border ${tier.tier.includes('Tier 1') ? 'border-emerald-500/50' : tier.tier.includes('Tier 2') ? 'border-navy-500/50' : tier.tier.includes('Tier 3') ? 'border-amber-500/50' : 'border-platinum-500/50'} p-6`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${tier.tier.includes('Tier 1') ? 'bg-emerald-500/20 text-emerald-400' : tier.tier.includes('Tier 2') ? 'bg-navy-500/20 text-navy-400' : tier.tier.includes('Tier 3') ? 'bg-amber-500/20 text-amber-400' : 'bg-platinum-500/20 text-platinum-400'}`}>
                      <Database className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-platinum-200 font-rajdhani">
                        {tier.tier}
                      </h4>
                      <p className="text-sm text-platinum-400 mb-2">{tier.description}</p>
                      <p className="text-xs text-platinum-500">{tier.sources}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* UAE Assessment Tab */}
        <TabsContent value="assessment" className="space-y-6">
          <GlassPanel title="UAE Relevance Assessment Matrix" description="Critical assessment of fear topics by UAE relevance">
            <div className="space-y-4">
              {uaeRelevanceMatrix.map((item, idx) => (
                <motion.div
                  key={item.topic}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className={`glass-card border ${item.assessment === 'CRITICAL' ? 'border-red-500/50' : 'border-amber-500/50'} p-6`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.assessment === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}>
                      <Target className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg text-platinum-200 font-rajdhani">
                          {item.topic}
                        </h4>
                        <Badge className={item.assessment === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}>
                          {item.assessment}
                        </Badge>
                      </div>
                      <p className="text-sm text-platinum-400">{item.rationale}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Sentiment by Topic */}
          <GlassPanel title="Sentiment by Topic" description="Aggregate sentiment scores for each fear category">
            <div className="space-y-4">
              {sentimentByTopic.map((item, idx) => (
                <motion.div
                  key={item.topic}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-card border-platinum-500/30 p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-platinum-200">{item.topic}</span>
                    <Badge className={item.score < -0.5 ? 'bg-red-500/20 text-red-400' : item.score < 0 ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}>
                      {item.sentiment}
                    </Badge>
                  </div>
                  <Progress
                    value={Math.abs(item.score) * 100}
                    className="h-2"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-platinum-500">Score:</span>
                    <span className={`text-xs font-semibold ${item.score < 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                      {item.score > 0 ? '+' : ''}{item.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
