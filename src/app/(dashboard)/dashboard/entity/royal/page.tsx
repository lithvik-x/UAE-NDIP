// @ts-nocheck
'use client'

/**
 * UAE Royal Family Intelligence Dashboard
 * Comprehensive dashboard for all 7 Emirates ruling families
 */

import * as React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GlassCard } from '@/components/ui/glass-panel'
import {
  Crown,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Star,
  DollarSign,
  Calendar,
  BookOpen,
  Globe2,
} from 'lucide-react'
import {
  royalFamilyData,
  dashboardSummary,
  currentRulers,
  crownPrinces,
  wealthMetrics,
  emirateOverviews,
  familyMemberCounts,
  keyLeadershipAppointments,
  majorInitiatives,
} from '@/lib/data/entity/royal-family-data'
import {
  OverviewSection,
  AbuDhabiSection,
  DubaiSection,
  OtherEmiratesSection,
  SentimentSection,
  WealthSection,
  LeadershipSection,
} from '@/components/dashboard/entity/royal'

// ============================================================================
// CONSTANTS & HELPERS
// ============================================================================

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

// Source credibility data (inline since not exported from data file)
const sourceCredibility = [
  { sourceType: 'Wikipedia', count: 25, credibility: 'High' },
  { sourceType: 'Official websites', count: 5, credibility: 'Very High' },
  { sourceType: 'Britannica', count: 1, credibility: 'High' },
  { sourceType: 'Al Jazeera', count: 1, credibility: 'High' },
  { sourceType: 'Tactical/Media reports', count: 3, credibility: 'Medium-High' },
  { sourceType: 'Government media offices', count: 5, credibility: 'Very High' },
]

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function RoyalFamilyPage() {
  const totalMembers = royalFamilyData.length

  // Filter data by emirate
  const abuDhabiMembers = royalFamilyData.filter(m => m.emirate === 'Abu Dhabi')
  const dubaiMembers = royalFamilyData.filter(m => m.emirate === 'Dubai')
  const sharjahMembers = royalFamilyData.filter(m => m.emirate === 'Sharjah')
  const rakMembers = royalFamilyData.filter(m => m.emirate === 'Ras Al Khaimah')
  const ajmanMembers = royalFamilyData.filter(m => m.emirate === 'Ajman')
  const uaqMembers = royalFamilyData.filter(m => m.emirate === 'Umm Al Quwain')
  const fujairahMembers = royalFamilyData.filter(m => m.emirate === 'Fujairah')
  const otherEmiratesMembers = [...sharjahMembers, ...rakMembers, ...ajmanMembers, ...uaqMembers, ...fujairahMembers]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        {...fadeInUp}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2 text-xs font-semibold tracking-wider uppercase">Royal Family</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">
            UAE Royal Family Intelligence
          </h1>
          <p className="mt-2 text-platinum-500-600 dark:text-platinum-500-400 text-sm max-w-2xl">
            Comprehensive intelligence on all 7 Emirates ruling families — {totalMembers} documented royal members across 6 ruling dynasties with wealth metrics, sentiment analysis, and relevance scoring.
          </p>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1.5 text-xs text-platinum-500-500">
              <Calendar className="h-3.5 w-3.5" />
              <span>Updated: {dashboardSummary.lastUpdated}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-platinum-500-500">
              <Globe2 className="h-3.5 w-3.5" />
              <span>{dashboardSummary.queriesExecuted} queries executed</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-platinum-500-500">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{dashboardSummary.pagesFetched} pages analyzed</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/30 text-navy-500 hover:bg-navy/10">
            <Globe className="h-4 w-4" />
            Export List
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-white gap-2 shadow-gold-md">
            <Star className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>
      </motion.div>

      {/* Summary Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={fadeInUp}>
          <GlassCard hover className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-platinum-500-600 dark:text-platinum-500-400">Ruling Families</p>
                <p className="mt-2 font-rajdhani text-3xl font-bold text-navy-500-900 dark:text-platinum-500-100">{dashboardSummary.rulingFamilies}</p>
                <p className="text-xs text-platinum-500-500 mt-0.5">6 dynasties across 7 Emirates</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-white shadow-lg">
                <Crown className="h-6 w-6" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <GlassCard hover className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-platinum-500-600 dark:text-platinum-500-400">Documented Members</p>
                <p className="mt-2 font-rajdhani text-3xl font-bold text-navy-500-900 dark:text-platinum-500-100">{dashboardSummary.totalRulingFamilyMembers}+</p>
                <p className="text-xs text-platinum-500-500 mt-0.5">Historical & current rulers</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-emerald text-white shadow-lg">
                <Users className="h-6 w-6" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <GlassCard hover className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-platinum-500-600 dark:text-platinum-500-400">Bloomberg Ranking</p>
                <p className="mt-2 font-rajdhani text-3xl font-bold text-navy-500-900 dark:text-platinum-500-100">{dashboardSummary.bloombergRichFamilyRank}</p>
                <p className="text-xs text-platinum-500-500 mt-0.5">World&apos;s richest family {dashboardSummary.bloombergRichFamilyRankYear}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-navy text-white shadow-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <GlassCard hover className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-platinum-500-600 dark:text-platinum-500-400">Combined Wealth</p>
                <p className="mt-2 font-rajdhani text-3xl font-bold text-navy-500-900 dark:text-platinum-500-100">$1T+</p>
                <p className="text-xs text-platinum-500-500 mt-0.5">Total family wealth estimate</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-platinum text-white shadow-lg">
                <DollarSign className="h-6 w-6" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel flex-wrap h-auto p-1.5 gap-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Overview</TabsTrigger>
          <TabsTrigger value="abudhabi" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Abu Dhabi ({abuDhabiMembers.length})</TabsTrigger>
          <TabsTrigger value="dubai" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Dubai ({dubaiMembers.length})</TabsTrigger>
          <TabsTrigger value="other" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Other Emirates ({otherEmiratesMembers.length})</TabsTrigger>
          <TabsTrigger value="sentiment" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Sentiment</TabsTrigger>
          <TabsTrigger value="wealth" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Wealth</TabsTrigger>
          <TabsTrigger value="leadership" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Leadership</TabsTrigger>
        </TabsList>

        {/* ============================================================================
            OVERVIEW TAB
            ============================================================================ */}
        <TabsContent value="overview" className="space-y-6">
          <OverviewSection
            royalFamilyData={royalFamilyData}
            dashboardSummary={dashboardSummary}
            currentRulers={currentRulers}
            crownPrinces={crownPrinces}
            emirateOverviews={emirateOverviews}
            familyMemberCounts={familyMemberCounts}
            wealthMetrics={wealthMetrics}
          />
        </TabsContent>

        {/* ============================================================================
            ABU DHABI TAB
            ============================================================================ */}
        <TabsContent value="abudhabi" className="space-y-6">
          <AbuDhabiSection
            abuDhabiMembers={abuDhabiMembers}
            wealthMetrics={wealthMetrics}
          />
        </TabsContent>

        {/* ============================================================================
            DUBAI TAB
            ============================================================================ */}
        <TabsContent value="dubai" className="space-y-6">
          <DubaiSection
            dubaiMembers={dubaiMembers}
          />
        </TabsContent>

        {/* ============================================================================
            OTHER EMIRATES TAB
            ============================================================================ */}
        <TabsContent value="other" className="space-y-6">
          <OtherEmiratesSection
            otherEmiratesMembers={otherEmiratesMembers}
            emirateOverviews={emirateOverviews}
          />
        </TabsContent>

        {/* ============================================================================
            SENTIMENT TAB
            ============================================================================ */}
        <TabsContent value="sentiment" className="space-y-6">
          <SentimentSection
            royalFamilyData={royalFamilyData}
            emirateOverviews={emirateOverviews}
          />
        </TabsContent>

        {/* ============================================================================
            WEALTH TAB
            ============================================================================ */}
        <TabsContent value="wealth" className="space-y-6">
          <WealthSection
            wealthMetrics={wealthMetrics}
          />
        </TabsContent>

        {/* ============================================================================
            LEADERSHIP TAB
            ============================================================================ */}
        <TabsContent value="leadership" className="space-y-6">
          <LeadershipSection
            royalFamilyData={royalFamilyData}
            keyLeadershipAppointments={keyLeadershipAppointments}
            majorInitiatives={majorInitiatives}
            sourceCredibility={sourceCredibility}
            emirateOverviews={emirateOverviews}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
