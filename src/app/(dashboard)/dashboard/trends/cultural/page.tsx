'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Palette,
  Landmark,
  TrendingUp,
  Book,
  Sparkles,
  Globe,
  Award,
  Gem,
  Music,
  Film,
  Users,
  Target,
  Calendar,
  Star,
  Heart,
  ChevronRight,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CulturalKeyMetricsSection,
  CulturalDemographicsSection,
  CulturalEconomicSection,
  CulturalLanguageSection,
  CulturalEmploymentSection,
  CulturalVisitorsSection,
  CulturalInstitutionsSection,
  CulturalSentimentSection,
  CulturalSourceCredibilitySection,
  CulturalUAERelevanceSection,
  CulturalGovernmentEntitiesSection,
  CulturalFashionDesignersSection,
  CulturalYouthInnovatorsSection,
  CulturalWeddingEvolutionSection,
  CulturalPolicyTimelineSection,
  CulturalNationalIdentitySection,
  CulturalAcademicResearchSection,
  CulturalMajorEventsSection,
  CulturalSourceCitationSection,
  CulturalYouthIndicatorsSection,
} from './sections'

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

export default function CulturalTrendsPage() {
  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2">TRENDS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold font-rajdhani">Cultural Evolution</h1>
          <p className="mt-2 text-platinum-400 font-rajdhani">
            Heritage preservation, arts, and cultural engagement intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10 font-rajdhani">
            <Globe className="h-4 w-4" />
            Heritage Sites
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2 font-rajdhani">
            <Palette className="h-4 w-4" />
            Cultural Dashboard
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <CulturalKeyMetricsSection />

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview" className="font-rajdhani">Overview</TabsTrigger>
          <TabsTrigger value="heritage" className="font-rajdhani">Heritage</TabsTrigger>
          <TabsTrigger value="identity" className="font-rajdhani">Identity</TabsTrigger>
          <TabsTrigger value="economy" className="font-rajdhani">Economy</TabsTrigger>
          <TabsTrigger value="youth" className="font-rajdhani">Youth</TabsTrigger>
          <TabsTrigger value="research" className="font-rajdhani">Research</TabsTrigger>
          <TabsTrigger value="sources" className="font-rajdhani">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                <CulturalDemographicsSection />
                <CulturalEconomicSection />
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <CulturalLanguageSection />
                <CulturalEmploymentSection />
              </div>
              <CulturalVisitorsSection />
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        {/* Heritage Tab */}
        <TabsContent value="heritage" className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key="heritage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <CulturalInstitutionsSection />
              <CulturalMajorEventsSection />
              <CulturalPolicyTimelineSection />
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        {/* Identity Tab */}
        <TabsContent value="identity" className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key="identity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <CulturalNationalIdentitySection />
              <CulturalSentimentSection />
              <CulturalWeddingEvolutionSection />
              <CulturalFashionDesignersSection />
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        {/* Economy Tab */}
        <TabsContent value="economy" className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key="economy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <CulturalEconomicSection />
              <CulturalVisitorsSection />
              <CulturalFashionDesignersSection />
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        {/* Youth Tab */}
        <TabsContent value="youth" className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key="youth"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <CulturalYouthIndicatorsSection />
              <CulturalYouthInnovatorsSection />
              <CulturalLanguageSection />
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        {/* Research Tab */}
        <TabsContent value="research" className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key="research"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <CulturalAcademicResearchSection />
              <CulturalSentimentSection />
              <CulturalUAERelevanceSection />
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key="sources"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <CulturalSourceCredibilitySection />
              <CulturalSourceCitationSection />
              <CulturalGovernmentEntitiesSection />
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </div>
  )
}
