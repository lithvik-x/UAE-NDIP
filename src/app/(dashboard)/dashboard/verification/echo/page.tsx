// @ts-nocheck
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  SectionExecutiveSummary,
} from './section-executive-summary'
import {
  SectionStructuredData,
} from './section-structured-data'
import {
  SectionEntityRegistries,
} from './section-entity-registries'
import {
  SectionSentimentAnalysis,
} from './section-sentiment-analysis'
import {
  SectionUAERelevance,
} from './section-uae-relevance'
import {
  SectionSourceCredibility,
} from './section-source-credibility'
import {
  SectionResearchSynthesis,
} from './section-research-synthesis'
import {
  echoChamberEnrichmentMetadata,
} from '@/lib/data-loader/echo-chamber-data'
import {
  Network,
  BarChart3,
  Building2,
  MessageSquare,
  MapPin,
  Award,
  BookOpen,
  Lightbulb,
  Database,
  Globe,
  Shield,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Search,
  FileText,
} from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

export default function EchoChamberDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="emerald" className="mb-2 bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
            V-SECTOR
          </Badge>
          <h1 className="text-3xl font-extrabold text-platinum-900 dark:text-platinum-100 font-rajdhani">
            Echo Chamber & Filter Bubble Analysis
          </h1>
          <p className="mt-2 text-platinum-500 dark:text-platinum-400">
            Deep Research: {echoChamberEnrichmentMetadata.query}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline" className="bg-platinum-800/50 text-xs">
              <Database className="h-3 w-3 mr-1" />
              {echoChamberEnrichmentMetadata.dataPointsExtracted}+ Data Points
            </Badge>
            <Badge variant="outline" className="bg-platinum-800/50 text-xs">
              <Globe className="h-3 w-3 mr-1" />
              {echoChamberEnrichmentMetadata.totalUrlsProcessed} URLs
            </Badge>
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/50 text-xs">
              <Shield className="h-3 w-3 mr-1" />
              SSOT MASTER
            </Badge>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="gap-2 border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10"
          >
            <Search className="h-4 w-4" />
            Analyze
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2">
            <FileText className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Main Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel flex-wrap" scrollable>
          <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">
            <BarChart3 className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="structured" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">
            <Database className="h-4 w-4 mr-2" />
            Structured Data
          </TabsTrigger>
          <TabsTrigger value="entities" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">
            <Building2 className="h-4 w-4 mr-2" />
            Entities
          </TabsTrigger>
          <TabsTrigger value="sentiment" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">
            <MessageSquare className="h-4 w-4 mr-2" />
            Sentiment
          </TabsTrigger>
          <TabsTrigger value="uae" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">
            <MapPin className="h-4 w-4 mr-2" />
            UAE Relevance
          </TabsTrigger>
          <TabsTrigger value="sources" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">
            <Award className="h-4 w-4 mr-2" />
            Sources
          </TabsTrigger>
          <TabsTrigger value="synthesis" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">
            <Lightbulb className="h-4 w-4 mr-2" />
            Synthesis
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <SectionExecutiveSummary />
        </TabsContent>

        {/* Structured Data Tab */}
        <TabsContent value="structured" className="space-y-6">
          <SectionStructuredData />
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <SectionEntityRegistries />
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <SectionSentimentAnalysis />
        </TabsContent>

        {/* UAE Relevance Tab */}
        <TabsContent value="uae" className="space-y-6">
          <SectionUAERelevance />
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <SectionSourceCredibility />
        </TabsContent>

        {/* Synthesis Tab */}
        <TabsContent value="synthesis" className="space-y-6">
          <SectionResearchSynthesis />
        </TabsContent>
      </Tabs>

      {/* Footer Metadata */}
      <GlassPanel
        title="Research Metadata"
        description="SSOT enrichment completion details"
        className="border-platinum-700/50"
      >
        <div className="flex flex-wrap gap-4 text-sm text-platinum-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            <span>SSOT Status: MASTER</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-navy-400" />
            <span>Enrichment Version: 1.0</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            <span>URLs Failed: {echoChamberEnrichmentMetadata.urlsFailed} (403 errors)</span>
          </div>
          <div className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4 text-purple-400" />
            <span>Research Type: {echoChamberEnrichmentMetadata.researchType}</span>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
