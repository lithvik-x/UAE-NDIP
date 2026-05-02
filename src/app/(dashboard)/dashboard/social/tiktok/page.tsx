/**
 * TikTok Intelligence Dashboard Page
 * 100% content coverage from 5-2-tiktok-results.md
 */

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTiktokData } from '@/lib/data-loader'
import type { SourceReference } from '@/lib/data-loader/types'
import { Activity } from 'lucide-react'

// Section Components
import { HeroSection, HeroMetrics } from './hero'
import { EngagementSection } from './engagement'
import { DemographicsSection } from './demographics'
import { ContentAnalysisSection } from './content-analysis'
import { RiskAnalysisSection } from './risk-analysis'
import { LegalComplianceSection } from './legal-compliance'
import { SourcesSection } from './sources'

export default function TikTokIntelligencePage() {
  const { data } = useTiktokData()
  const [activeTab, setActiveTab] = useState('overview')

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-platinum-400 flex items-center gap-3"
        >
          <Activity className="h-6 w-6 animate-pulse" />
          <span className="font-rajdhani text-lg">Loading TikTok intelligence...</span>
        </motion.div>
      </div>
    )
  }

  const {
    stats,
    platformData,
    queryFindings,
    criticalRisks,
    platformStatus,
    iranConflictData,
    scamData,
    sentimentDistribution,
    sentimentAnalysis,
    mediaLawFines,
    influencerLicensing,
    contentGovernance,
    sourceCredibilityMatrix,
    coverageAssessment,
    executionMetadata,
  } = data

  const { keyNarratives, botActivity, sources = [] } = platformData

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <HeroSection
        stats={stats}
        executionMetadata={executionMetadata}
      />

      {/* Key Metrics Grid */}
      <HeroMetrics stats={stats} />

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview" className="data-[state=active]:bg-platinum/20">
            Overview
          </TabsTrigger>
          <TabsTrigger value="engagement" className="data-[state=active]:bg-platinum/20">
            Engagement
          </TabsTrigger>
          <TabsTrigger value="demographics" className="data-[state=active]:bg-platinum/20">
            Demographics
          </TabsTrigger>
          <TabsTrigger value="content" className="data-[state=active]:bg-platinum/20">
            Content Analysis
          </TabsTrigger>
          <TabsTrigger value="risks" className="data-[state=active]:bg-platinum/20">
            Critical Risks
          </TabsTrigger>
          <TabsTrigger value="compliance" className="data-[state=active]:bg-platinum/20">
            Legal Compliance
          </TabsTrigger>
          <TabsTrigger value="sources" className="data-[state=active]:bg-platinum/20">
            Sources
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="overview" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <EngagementSection
                hashtagPerformance={data.hashtagPerformance}
                platformStatus={platformStatus}
              />
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Engagement Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="engagement" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <EngagementSection
                hashtagPerformance={data.hashtagPerformance}
                platformStatus={platformStatus}
              />
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Demographics Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="demographics" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <DemographicsSection
                sentimentDistribution={sentimentDistribution}
                sentimentAnalysis={data.sentimentAnalysis}
              />
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Content Analysis Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="content" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ContentAnalysisSection
                queryFindings={queryFindings}
                keyNarratives={keyNarratives}
                botActivity={botActivity}
              />
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Critical Risks Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="risks" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <RiskAnalysisSection
                criticalRisks={criticalRisks}
                iranConflictData={iranConflictData}
                scamData={scamData}
              />
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Legal Compliance Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="compliance" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <LegalComplianceSection
                mediaLawFines={mediaLawFines}
                influencerLicensing={influencerLicensing}
                contentGovernance={contentGovernance}
              />
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Sources Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="sources" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <SourcesSection
                sources={sources as SourceReference[]}
                sourceCredibilityMatrix={sourceCredibilityMatrix}
                coverageAssessment={coverageAssessment}
              />
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </div>
  )
}
