'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Brain,
  Radar,
  MapPin,
  Smile,
  Heart,
  AlertTriangle,
  AlertCircle,
  Frown,
  Feather,
  Angry,
  Clock,
  TrendingUp,
  Shield,
  Scale,
  Database,
} from 'lucide-react'

import {
  emotionCategories,
  emotionResearchSummary,
  emotionSourceCredibilityMatrix,
  sourceTierDistribution,
  uaeRelevanceAssessment,
  emotionKPIDashboard,
  netEmotionalBalance,
  joyData,
  trustData,
  fearData,
  angerData,
  entityRegistrySummary,
  emotionDataCollectionMetadata,
} from '@/lib/data-loader/emotion-specific-data'

import {
  OverviewSection,
  SourceCredibilitySection,
  UAERelevanceSection,
  EmotionsDetailSection,
} from './sections'

const emotionIcons: Record<string, React.ElementType> = {
  Joy: Smile,
  Trust: Heart,
  Fear: AlertTriangle,
  Surprise: AlertCircle,
  Sadness: Frown,
  Disgust: Feather,
  Anger: Angry,
  Anticipation: Clock,
}

const emotionColors: Record<string, string> = {
  Joy: '#FFD700',
  Trust: '#1e3a5f',
  Fear: '#ef4444',
  Surprise: '#94a3b8',
  Sadness: '#0ea5e9',
  Disgust: '#10b981',
  Anger: '#ef4444',
  Anticipation: '#FFD700',
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function EmotionAnalysisPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const emotionDetailTypes: Record<string, 'joy' | 'trust' | 'fear' | 'anger'> = {
    Joy: 'joy',
    Trust: 'trust',
    Fear: 'fear',
    Anger: 'anger',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-slate-900 p-8">
      <div className="max-w-[1800px] mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start justify-between"
        >
          <div>
            <Badge variant="gold" className="mb-2">EMOTION ANALYSIS</Badge>
            <h1 className="text-4xl font-extrabold gradient-text-gold">
              Emotion-Specific Results
            </h1>
            <p className="mt-2 text-slate-400 max-w-2xl">
              Plutchik emotion model analysis adapted for UAE context. Covers 8 primary emotions
              with {emotionResearchSummary.totalUniqueQueryPatterns} query patterns and {emotionResearchSummary.totalDataPointsExtracted}+ data points.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
              <Brain className="h-4 w-4" />
              Deep Dive
            </Button>
            <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
              <Radar className="h-4 w-4" />
              Analyze Patterns
            </Button>
          </div>
        </motion.div>

        {/* Research Summary */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          <motion.div variants={fadeInUp}>
            <GlassPanel className="h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  <Database className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold">{emotionResearchSummary.totalUniqueQueryPatterns}</p>
                  <p className="text-xs text-slate-400">Query Patterns</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel className="h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <TrendingUp className="h-5 w-5 text-emerald" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald">{emotionResearchSummary.totalSearchResultsProcessed}+</p>
                  <p className="text-xs text-slate-400">Search Results</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel className="h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-info/20">
                  <Scale className="h-5 w-5 text-info" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-info">{emotionResearchSummary.pagesFetchedForDeepDive}</p>
                  <p className="text-xs text-slate-400">Pages Fetched</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel className="h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                  <Shield className="h-5 w-5 text-purple" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple">{emotionResearchSummary.keySourcesCited}+</p>
                  <p className="text-xs text-slate-400">Sources Cited</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel className="h-full">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20">
                  <Brain className="h-5 w-5 text-rose" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-rose">{emotionResearchSummary.totalDataPointsExtracted}+</p>
                  <p className="text-xs text-slate-400">Data Points</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </motion.div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="glass-panel" scrollable>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sources">Sources</TabsTrigger>
            <TabsTrigger value="relevance">UAE Relevance</TabsTrigger>
            <TabsTrigger value="joy">Joy</TabsTrigger>
            <TabsTrigger value="trust">Trust</TabsTrigger>
            <TabsTrigger value="fear">Fear</TabsTrigger>
            <TabsTrigger value="anger">Anger</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <OverviewSection
                  emotionCategories={emotionCategories}
                  emotionKPIDashboard={emotionKPIDashboard}
                  netEmotionalBalance={netEmotionalBalance}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sources Tab */}
          <AnimatePresence mode="wait">
            {activeTab === 'sources' && (
              <motion.div
                key="sources"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SourceCredibilitySection
                  sourceCredibilityMatrix={emotionSourceCredibilityMatrix}
                  sourceTierDistribution={sourceTierDistribution}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* UAE Relevance Tab */}
          <AnimatePresence mode="wait">
            {activeTab === 'relevance' && (
              <motion.div
                key="relevance"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <UAERelevanceSection uaeRelevanceAssessment={uaeRelevanceAssessment} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Joy Tab */}
          <AnimatePresence mode="wait">
            {activeTab === 'joy' && (
              <motion.div
                key="joy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <EmotionsDetailSection emotion="Joy" data={joyData} type="joy" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trust Tab */}
          <AnimatePresence mode="wait">
            {activeTab === 'trust' && (
              <motion.div
                key="trust"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <EmotionsDetailSection emotion="Trust" data={trustData} type="trust" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fear Tab */}
          <AnimatePresence mode="wait">
            {activeTab === 'fear' && (
              <motion.div
                key="fear"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <EmotionsDetailSection emotion="Fear" data={fearData} type="fear" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Anger Tab */}
          <AnimatePresence mode="wait">
            {activeTab === 'anger' && (
              <motion.div
                key="anger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <EmotionsDetailSection emotion="Anger" data={angerData} type="anger" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Methodology Tab */}
          <AnimatePresence mode="wait">
            {activeTab === 'methodology' && (
              <motion.div
                key="methodology"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <GlassPanel
                  title="Data Collection Methodology"
                  description="Research approach and limitations"
                  icon={<Brain className="h-5 w-5 text-info" />}
                >
                  <div className="space-y-6">
                    {/* Methodology */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-200 mb-3">Methodology</h3>
                      <div className="space-y-2">
                        {emotionDataCollectionMetadata.methodology.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-info/20 text-info text-sm font-bold">
                              {idx + 1}
                            </div>
                            <p className="text-sm text-slate-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Limitations */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-200 mb-3">Limitations</h3>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {emotionDataCollectionMetadata.limitations.map((item, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                            <p className="text-sm text-slate-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Query Mapping */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-200 mb-3">Plutchik Emotion Mapping</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-slate-700">
                              <th className="text-left p-3 text-slate-400">Emotion</th>
                              <th className="text-left p-3 text-slate-400">UAE Context</th>
                              <th className="text-left p-3 text-slate-400">Sample Query Terms</th>
                            </tr>
                          </thead>
                          <tbody>
                            {emotionDataCollectionMetadata.queryMappingToPlutchik.map((row, idx) => {
                              const Icon = emotionIcons[row.plutchikEmotion] || Brain
                              return (
                                <tr key={idx} className="border-b border-slate-800">
                                  <td className="p-3">
                                    <div className="flex items-center gap-2">
                                      <Icon className="h-4 w-4" style={{ color: emotionColors[row.plutchikEmotion] }} />
                                      <span className="font-medium text-slate-200">{row.plutchikEmotion}</span>
                                    </div>
                                  </td>
                                  <td className="p-3 text-slate-400">{row.uaeContextualization}</td>
                                  <td className="p-3 text-slate-500">{row.sampleQueryTerms}</td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Entity Registry Summary */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-200 mb-3">Entity Registry Summary</h3>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {entityRegistrySummary.map((entity) => (
                          <div key={entity.category} className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/50">
                            <p className="font-semibold text-slate-200">{entity.category}</p>
                            <p className="text-2xl font-bold text-gold">{entity.count}</p>
                            <p className="text-xs text-slate-500 mt-1">{entity.examples.join(', ')}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            )}
          </AnimatePresence>
        </Tabs>

        {/* All Emotions Grid - Always Visible */}
        <div>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">All Emotions Overview</h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {emotionCategories.map((emotion) => {
              const Icon = emotionIcons[emotion.emotion] || Brain
              const color = emotionColors[emotion.emotion] || '#94a3b8'
              const sentimentPercent = Math.round(emotion.avgSentimentScore * 100)
              const isPositive = emotion.avgSentimentScore > 0

              return (
                <motion.div
                  key={emotion.emotion}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="glass-panel cursor-pointer transition-shadow hover:shadow-lg hover:shadow-gold/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Icon className="h-6 w-6" style={{ color }} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-200">{emotion.emotion}</p>
                      <Badge
                        variant={isPositive ? 'success' : 'destructive'}
                        className="text-xs"
                      >
                        {emotion.polarity}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Sentiment</span>
                      <span className={`font-bold ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {sentimentPercent > 0 ? '+' : ''}{sentimentPercent}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.abs(sentimentPercent)}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full rounded-full ${isPositive ? 'bg-emerald-500' : 'bg-rose-500'}`}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>{emotion.primaryQueries} queries</span>
                      <span>{emotion.dataPointsExtracted} data points</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 text-sm"
        >
          <p>Document generated: {emotionResearchSummary.documentGenerated}</p>
          <p>Research enrichment completed: {emotionResearchSummary.enrichmentCompleted}</p>
        </motion.div>
      </div>
    </div>
  )
}
