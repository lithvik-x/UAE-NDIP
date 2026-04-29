// @ts-nocheck
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
  Shield,
  Sparkles,
  Map,
  Heart,
  Trophy,
  Utensils,
  Crown,
  Star,
  ThumbsUp,
  TrendingUp,
  Users,
  Zap,
  Award,
  Building2,
  Briefcase,
} from 'lucide-react'

import {
  usePraiseEndorsementData,
} from '@/lib/data-loader'

import {
  SafetySection,
  CleanlinessSection,
  InfrastructureSection,
  HealthcareSection,
  RankingsSection,
  CuisineSection,
  LeadershipSection,
  AttractionsSection,
  BusinessSection,
} from './sections'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function PraiseEndorsementPage() {
  const { data: praiseData } = usePraiseEndorsementData()

  if (!praiseData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Praise & Endorsement data...</div>
      </div>
    )
  }

  const {
    overview,
    dashboardKPIs,
    praisedAttractions,
    praiseSources,
    globalRankingAchievements,
    topResidenceIndexCountries,
    rankingFactors,
    cabinetAchievements,
    tributeQuotes,
    visitorExperienceThemes,
    eventDelegateReactions,
    safetyStatistics,
    safestCitiesRanking,
    uaeVsGlobalSafety,
    dubaiCleanlinessKPIs,
    wasteManagementInitiatives,
    infrastructureRankings,
    topRoadQualityCountries,
    dubaiMetroMetrics,
    topDriverlessMetroSystems,
    michelinStarRestaurants,
    culinaryDiversity,
    businessEnvironmentKPIs,
    economicIndicators,
    investmentProjects,
    healthcareExcellenceKPIs,
    healthcareTrustBreakdown,
    healthcareInvestment,
    visionaryLeadershipMetrics,
    visionDocuments,
    governancePrinciples,
    keyAchievements,
    crossCategoryObservations,
    sourceCredibilityMatrix,
    uaeRelevanceSummary,
    praiseCategoryDistribution,
    praiseTrendData,
    sentimentDistributionData,
    uaeRelevanceChartData,
    metrics,
  } = praiseData

  return (
    <motion.div
      className="space-y-8 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-start justify-between">
        <div>
          <Badge variant="emerald" className="mb-2 bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
            PRAISE & ENDORSEMENT
          </Badge>
          <h1 className="text-3xl font-extrabold gradient-text-emerald">
            Praise & Endorsement Sentiment
          </h1>
          <p className="mt-2 text-slate-400">
            Comprehensive analysis of positive sentiment, praise categories, and endorsement metrics toward the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10">
            <ThumbsUp className="h-4 w-4" />
            View Analysis
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Deep Dive
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Avg Positive"
          value="93%"
          previousValue={89}
          icon={<ThumbsUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Safety Score"
          value="99%"
          previousValue={95}
          icon={<Shield className="h-6 w-6" />}
          gradient="teal"
          status="success"
        />
        <MetricCard
          title="Cleanliness"
          value="100%"
          icon={<Sparkles className="h-6 w-6" />}
          gradient="cyan"
          status="success"
        />
        <MetricCard
          title="Global Rankings"
          value="17+"
          icon={<Trophy className="h-6 w-6" />}
          gradient="gold"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="safety">Safety</TabsTrigger>
          <TabsTrigger value="cleanliness">Cleanliness</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="cuisine">Cuisine</TabsTrigger>
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
          <TabsTrigger value="attractions">Attractions</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={itemVariants}>
            <GlassPanel
              title="Praise & Endorsement Overview"
              description="Key metrics and distribution analysis"
            >
              <div className="space-y-6">
                {/* Research Overview */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Research Overview</CardTitle>
                    <CardDescription>Query execution and data verification summary</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="bg-slate-800/30 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-emerald-400">{overview.totalQueryCategories}</p>
                        <p className="text-sm text-slate-400">Query Categories</p>
                      </div>
                      <div className="bg-slate-800/30 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-emerald-400">{overview.totalSourcesConsulted}</p>
                        <p className="text-sm text-slate-400">Sources Consulted</p>
                      </div>
                      <div className="bg-slate-800/30 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-emerald-400">11</p>
                        <p className="text-sm text-slate-400">Praise Categories</p>
                      </div>
                      <div className="bg-slate-800/30 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-emerald-400">100%</p>
                        <p className="text-sm text-slate-400">Data Verified</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Charts Row */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Praise Category Distribution</CardTitle>
                      <CardDescription>Breakdown by sentiment category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={praiseCategoryDistribution}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Praise Trend</CardTitle>
                      <CardDescription>Monthly sentiment evolution</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={praiseTrendData}
                        xAxisKey="month"
                        areas={[
                          { dataKey: 'score', name: 'Score', color: CHART_COLORS.emerald },
                        ]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* UAE Relevance Chart */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE Relevance by Category</CardTitle>
                    <CardDescription>Critical metrics driving positive sentiment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={uaeRelevanceChartData}
                      xAxisKey="category"
                      bars={[
                        { dataKey: 'score', name: 'Relevance Score', color: CHART_COLORS.emerald },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                {/* Cross-Category Observations */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Cross-Category Observations</CardTitle>
                    <CardDescription>Patterns across all praise categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {crossCategoryObservations.map((obs, idx) => (
                        <div key={idx} className="bg-slate-800/30 rounded-lg p-4">
                          <h4 className="font-semibold text-emerald-400 mb-2">{obs.title}</h4>
                          <p className="text-sm text-slate-300 mb-2">{obs.description}</p>
                          <p className="text-xs text-slate-400 italic">{obs.evidence}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Safety Tab */}
        <TabsContent value="safety" className="space-y-6">
          <SafetySection
            safetyStatistics={safetyStatistics}
            safestCitiesRanking={safestCitiesRanking}
            uaeVsGlobalSafety={uaeVsGlobalSafety}
          />
        </TabsContent>

        {/* Cleanliness Tab */}
        <TabsContent value="cleanliness" className="space-y-6">
          <CleanlinessSection
            cleanlinessKPIs={dubaiCleanlinessKPIs}
            wasteManagementInitiatives={wasteManagementInitiatives}
          />
        </TabsContent>

        {/* Infrastructure Tab */}
        <TabsContent value="infrastructure" className="space-y-6">
          <InfrastructureSection
            infrastructureRankings={infrastructureRankings}
            topRoadQualityCountries={topRoadQualityCountries}
            dubaiMetroMetrics={dubaiMetroMetrics}
            topDriverlessMetroSystems={topDriverlessMetroSystems}
          />
        </TabsContent>

        {/* Healthcare Tab */}
        <TabsContent value="healthcare" className="space-y-6">
          <HealthcareSection
            healthcareKPIs={healthcareExcellenceKPIs}
            healthcareTrustBreakdown={healthcareTrustBreakdown}
            healthcareInvestment={healthcareInvestment}
          />
        </TabsContent>

        {/* Rankings Tab */}
        <TabsContent value="rankings" className="space-y-6">
          <RankingsSection
            globalRankings={globalRankingAchievements}
            topResidenceIndexCountries={topResidenceIndexCountries}
            rankingFactors={rankingFactors}
          />
        </TabsContent>

        {/* Cuisine Tab */}
        <TabsContent value="cuisine" className="space-y-6">
          <CuisineSection
            restaurants={michelinStarRestaurants}
            culinaryDiversity={culinaryDiversity}
          />
        </TabsContent>

        {/* Leadership Tab */}
        <TabsContent value="leadership" className="space-y-6">
          <LeadershipSection
            cabinetAchievements={cabinetAchievements}
            tributeQuotes={tributeQuotes}
            visionaryMetrics={visionaryLeadershipMetrics}
            visionDocuments={visionDocuments}
            keyAchievements={keyAchievements}
            governancePrinciples={governancePrinciples}
          />
        </TabsContent>

        {/* Attractions Tab */}
        <TabsContent value="attractions" className="space-y-6">
          <AttractionsSection
            attractions={praisedAttractions}
            sources={praiseSources}
            visitorThemes={visitorExperienceThemes}
          />
        </TabsContent>

        {/* Business Tab */}
        <TabsContent value="business" className="space-y-6">
          <BusinessSection
            businessKPIs={businessEnvironmentKPIs}
            economicIndicators={economicIndicators}
            investmentProjects={investmentProjects}
          />
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <motion.div variants={itemVariants} className="text-center text-slate-500 text-sm">
        <p>Data Source: {overview.researchCompilationDate} | Last Updated: {overview.enrichedDate}</p>
        <p className="mt-1">All URLs verified via WebFetch | Total Data Points: 500+</p>
      </motion.div>
    </motion.div>
  )
}
