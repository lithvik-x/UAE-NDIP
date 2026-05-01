// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, AreaChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, AlertTriangle, TrendingDown, Building2, Banknote, Shield, Users, DollarSign, Activity, Calendar, FileText, Scale, AlertCircle } from 'lucide-react'
import { useEconomicCrisisData } from '@/lib/data-loader'
import { motion } from 'framer-motion'
import { economicCrisisData } from '@/lib/data/crisis/economic-crisis-data'

// Section components
import {
  EconomicCrisisOverviewSection,
  KeyCrisesSection,
  UAERelevanceSection,
  DubaiCrisis2009Section,
  DebtStructureSection,
  PropertyMarketSection,
  NakheelDubaiWorldSection,
  IranWar2026Section,
  ExchangeClosuresSection,
  SectorImpactSection,
  AbraajSection,
  NMCSection,
  OtherFraudsSection,
  BankingSectorSection,
  SovereignDebtSection,
  CrisisTimelineSection,
} from '@/components/dashboard/crisis/economic-crisis'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function EconomicCrisisPage() {
  const { data } = useEconomicCrisisData()
  const crisis = data || economicCrisisData

  const {
    economicCrisisOverview,
    dubaiDebtCrisisTimeline,
    debtStructure,
    propertyMarketCollapse,
    globalMarketImpact,
    nakheelProfile,
    nakheelRecoveryTimeline,
    dubaiWorldCorporateStructure,
    iranWarCrisisOrigin,
    stockMarketImpact,
    exchangeClosures,
    centralBankResponse,
    economicSectorImpact,
    expertAssessments,
    abraajProfile,
    abraajFinancialCollapse,
    abraajRegulatoryFines,
    abraajLegalProceedings,
    nmcProfile,
    nmcFraud,
    nmcTimeline,
    nmcLegalCases,
    gulfFirstDetails,
    gulfFirstFraudPhases,
    moneyLaunderingCase,
    goldRefinerySuspension,
    centralBankResilience,
    bankingSectorPerformance,
    bankRunPrevention,
    dubaiPublicDebt,
    bankruptcyLaw2024,
    fatfStatusHistory,
    majorUAEEconomicCrisesTimeline,
    propertyPriceCrashes,
    centralBankLiquidityInjections,
    corporateFraudScale,
    crisisSentimentByPeriod,
    sourceTone,
    directUAECrises,
    uaeSpecificMetrics,
    crisisFrequency,
    financialImpactSummary,
    keyDefinitions,
  } = crisis

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-amber-500/20 to-orange-600/20 text-amber-400 border-amber-500/50">
            <AlertTriangle className="w-3 h-3 mr-1" />
            CRISIS INTELLIGENCE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-amber-100 via-orange-200 to-amber-400 bg-clip-text text-transparent">
              Economic Crisis
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Economic crisis intelligence - financial crises, corporate scandals, banking sector stress</p>
        </div>
      </motion.div>

      {/* Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Total Crises" value={economicCrisisOverview?.metrics?.totalCrises || '5'} icon={<AlertTriangle className="h-6 w-6" />} gradient="amber" />
        <MetricCard title="Financial Impact" value="$407B+" icon={<DollarSign className="h-6 w-6" />} gradient="orange" />
        <MetricCard title="Corporate Frauds" value={economicCrisisOverview?.metrics?.majorCorporateFrauds || '2'} icon={<Building2 className="h-6 w-6" />} gradient="rose" />
        <MetricCard title="Market Crashes" value={economicCrisisOverview?.metrics?.propertyCrashes || '3'} icon={<TrendingDown className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Central Bank Actions" value={economicCrisisOverview?.metrics?.centralBankInjections || '2'} icon={<Banknote className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Risk Level" value={economicCrisisOverview?.metrics?.risk || 'HIGH'} icon={<Shield className="h-6 w-6" />} gradient="rose" status="warning" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="dubai2009">2009 Dubai Crisis</TabsTrigger>
          <TabsTrigger value="iran2026">2026 Iran War</TabsTrigger>
          <TabsTrigger value="frauds">Corporate Scandals</TabsTrigger>
          <TabsTrigger value="banking">Banking Sector</TabsTrigger>
          <TabsTrigger value="timeline">Full Timeline</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <EconomicCrisisOverviewSection
            majorUAEEconomicCrisesTimeline={majorUAEEconomicCrisesTimeline}
            directUAECrises={directUAECrises}
            uaeSpecificMetrics={uaeSpecificMetrics}
            financialImpactSummary={financialImpactSummary}
          />
          <KeyCrisesSection majorUAEEconomicCrisesTimeline={majorUAEEconomicCrisesTimeline} />
          <UAERelevanceSection directUAECrises={directUAECrises} uaeSpecificMetrics={uaeSpecificMetrics} />
        </TabsContent>

        {/* 2009 Dubai Crisis Tab */}
        <TabsContent value="dubai2009" className="space-y-6">
          <DubaiCrisis2009Section dubaiDebtCrisisTimeline={dubaiDebtCrisisTimeline} debtStructure={debtStructure} propertyMarketCollapse={propertyMarketCollapse} globalMarketImpact={globalMarketImpact} />
          <DebtStructureSection debtStructure={debtStructure} />
          <PropertyMarketSection propertyMarketCollapse={propertyMarketCollapse} globalMarketImpact={globalMarketImpact} />
          <NakheelDubaiWorldSection nakheelProfile={nakheelProfile} nakheelRecoveryTimeline={nakheelRecoveryTimeline} dubaiWorldCorporateStructure={dubaiWorldCorporateStructure} />
        </TabsContent>

        {/* 2026 Iran War Tab */}
        <TabsContent value="iran2026" className="space-y-6">
          <IranWar2026Section
            iranWarCrisisOrigin={iranWarCrisisOrigin}
            stockMarketImpact={stockMarketImpact}
            exchangeClosures={exchangeClosures}
            centralBankResponse={centralBankResponse}
            economicSectorImpact={economicSectorImpact}
            expertAssessments={expertAssessments}
          />
          <ExchangeClosuresSection exchangeClosures={exchangeClosures} centralBankResponse={centralBankResponse} />
          <SectorImpactSection economicSectorImpact={economicSectorImpact} expertAssessments={expertAssessments} />
        </TabsContent>

        {/* Corporate Scandals Tab */}
        <TabsContent value="frauds" className="space-y-6">
          <AbraajSection
            abraajProfile={abraajProfile}
            abraajFinancialCollapse={abraajFinancialCollapse}
            abraajRegulatoryFines={abraajRegulatoryFines}
            abraajLegalProceedings={abraajLegalProceedings}
          />
          <NMCSection
            nmcProfile={nmcProfile}
            nmcFraud={nmcFraud}
            nmcTimeline={nmcTimeline}
            nmcLegalCases={nmcLegalCases}
          />
          <OtherFraudsSection
            gulfFirstDetails={gulfFirstDetails}
            gulfFirstFraudPhases={gulfFirstFraudPhases}
            moneyLaunderingCase={moneyLaunderingCase}
            goldRefinerySuspension={goldRefinerySuspension}
          />
        </TabsContent>

        {/* Banking Sector Tab */}
        <TabsContent value="banking" className="space-y-6">
          <BankingSectorSection
            centralBankResilience={centralBankResilience}
            bankingSectorPerformance={bankingSectorPerformance}
            bankRunPrevention={bankRunPrevention}
          />
          <SovereignDebtSection
            dubaiPublicDebt={dubaiPublicDebt}
            bankruptcyLaw2024={bankruptcyLaw2024}
            fatfStatusHistory={fatfStatusHistory}
          />
        </TabsContent>

        {/* Full Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <CrisisTimelineSection
            majorUAEEconomicCrisesTimeline={majorUAEEconomicCrisesTimeline}
            propertyPriceCrashes={propertyPriceCrashes}
            centralBankLiquidityInjections={centralBankLiquidityInjections}
            corporateFraudScale={corporateFraudScale}
            crisisSentimentByPeriod={crisisSentimentByPeriod}
            keyDefinitions={keyDefinitions}
          />
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}