'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  AlertTriangle, AlertCircle, ThumbsDown, Heart, Frown, Shield,
  Eye, Scale, Globe, UsersRound, Factory, Ban, Siren, Clock,
  Database, ShieldAlert, CheckCircle, XCircle, ChevronDown, ChevronRight,
  Activity, TrendingUp, Users, Zap, Wind, Globe2, Truck, Plane,
  Building, MessageSquare, MapPin, Footprints, Droplets, Sun, Thermometer,
  DollarSign, Vote, Lock, GraduationCap, BookOpen, Mail, Flag
} from 'lucide-react'
import {
  negativeCategoriesEnriched,
  searchVolumeSentimentAnalysis
} from '@/lib/data-loader/sentiment-data'

interface CategoryDetailSectionProps {
  className?: string
}

const categoryIcons: Record<number, React.ElementType> = {
  1: ThumbsDown,
  2: Heart,
  3: Frown,
  4: AlertCircle,
  5: DollarSign,
  6: Lock,
  7: Users,
  8: Factory,
  9: ShieldAlert,
  10: UsersRound,
  11: Building,
  12: Wind,
  13: Vote,
  14: Globe,
  15: MapPin,
  16: Shield,
}

const severityColors = {
  CRITICAL: 'border-rose-500/50 bg-rose-500/10',
  HIGH: 'border-amber-500/50 bg-amber-500/10',
  MEDIUM: 'border-amber-500/50 bg-amber-500/10',
  LOW: 'border-emerald-500/50 bg-emerald-500/10',
}

const badgeColors = {
  CRITICAL: 'bg-rose-500/20 text-rose-400 border-rose-500/50',
  HIGH: 'bg-amber-500/20 text-amber-400 border-amber-500/50',
  MEDIUM: 'bg-amber-500/20 text-amber-400 border-amber-500/50',
  LOW: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50',
}

export function CategoryDetailSection({ className }: CategoryDetailSectionProps) {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState('all')

  const getTabCategories = () => {
    if (activeTab === 'all') return negativeCategoriesEnriched
    if (activeTab === 'critical') return negativeCategoriesEnriched.filter(c => c.severity === 'CRITICAL')
    if (activeTab === 'high') return negativeCategoriesEnriched.filter(c => c.severity === 'HIGH')
    if (activeTab === 'medium') return negativeCategoriesEnriched.filter(c => c.severity === 'MEDIUM')
    if (activeTab === 'low') return negativeCategoriesEnriched.filter(c => c.severity === 'LOW')
    return negativeCategoriesEnriched
  }

  const filteredCategories = getTabCategories()

  return (
    <div className={className}>
      <GlassPanel
        title="Negative Sentiment Categories"
        description="16 distinct categories with enriched data from 60+ authoritative sources"
      >
        {/* Tab Filters */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="glass-panel flex-wrap h-auto gap-2">
            <TabsTrigger value="all" className="data-[state=active]:bg-rose-500/20">All (16)</TabsTrigger>
            <TabsTrigger value="critical" className="data-[state=active]:bg-rose-500/20">Critical ({negativeCategoriesEnriched.filter(c => c.severity === 'CRITICAL').length})</TabsTrigger>
            <TabsTrigger value="high" className="data-[state=active]:bg-amber-500/20">High ({negativeCategoriesEnriched.filter(c => c.severity === 'HIGH').length})</TabsTrigger>
            <TabsTrigger value="medium" className="data-[state=active]:bg-amber-500/20">Medium ({negativeCategoriesEnriched.filter(c => c.severity === 'MEDIUM').length})</TabsTrigger>
            <TabsTrigger value="low" className="data-[state=active]:bg-emerald-500/20">Low ({negativeCategoriesEnriched.filter(c => c.severity === 'LOW').length})</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Category Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredCategories.map((category) => {
              const Icon = categoryIcons[category.id] || AlertTriangle
              const isExpanded = expandedCategory === category.id
              const colorClass = badgeColors[category.severity]

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                  className={`glass-card border cursor-pointer transition-all ${severityColors[category.severity]} p-4`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={colorClass}>
                      {category.severity}
                    </Badge>
                    <span className="text-xs text-platinum-500-500">#{category.id}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClass}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-platinum-500-200 font-rajdhani">
                      {category.name}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Tier {category.tier}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {category.sentimentIntensity}
                    </Badge>
                  </div>

                  <Progress value={(category.severity === 'CRITICAL' ? 10 : category.severity === 'HIGH' ? 8 : category.severity === 'MEDIUM' ? 6 : 4) * 8} className="h-1 mb-3" />

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-4 pt-3 border-t border-platinum-700"
                      >
                        {/* Primary Concerns */}
                        {category.primaryConcerns.length > 0 && (
                          <div>
                            <p className="text-xs text-platinum-500-500 mb-2">Primary Concerns:</p>
                            <div className="flex flex-wrap gap-1">
                              {category.primaryConcerns.map((concern, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {concern}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Key Quotes */}
                        {category.keyQuotes && category.keyQuotes.length > 0 && (
                          <div>
                            <p className="text-xs text-platinum-500-500 mb-2">Key Quotes:</p>
                            <div className="space-y-2">
                              {category.keyQuotes.slice(0, 2).map((quote, i) => (
                                <blockquote key={i} className="text-xs text-platinum-500-400 italic border-l-2 border-platinum-600 pl-2">
                                  "{quote.text.substring(0, 120)}..." - {quote.author}
                                </blockquote>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Special data for Category 3 - Yemen */}
                        {'yemenWarData' in category && category.yemenWarData && (
                          <div>
                            <p className="text-xs text-platinum-500-500 mb-2">Yemen War Data:</p>
                            <div className="bg-navy-900/50 rounded-lg p-3 space-y-1">
                              {Object.entries(category.yemenWarData).map(([key, value]) => (
                                <div key={key} className="flex justify-between text-xs">
                                  <span className="text-platinum-500-400">{key}:</span>
                                  <span className="text-rose-400 font-semibold">{String(value)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Special data for Category 5 - CPI */}
                        {'cpiData' in category && category.cpiData && (
                          <div>
                            <p className="text-xs text-platinum-500-500 mb-2">Transparency International CPI (2024):</p>
                            <div className="bg-navy-900/50 rounded-lg p-3 space-y-1">
                              {Object.entries(category.cpiData).map(([key, value]) => (
                                <div key={key} className="flex justify-between text-xs">
                                  <span className="text-platinum-500-400">{key}:</span>
                                  <span className="text-amber-400 font-semibold">{String(value)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Special data for Category 9 - Arrest Cases */}
                        {'arrestCases' in category && category.arrestCases && (
                          <div>
                            <p className="text-xs text-platinum-500-500 mb-2">Documented Arrest Cases:</p>
                            <div className="space-y-2">
                              {category.arrestCases.slice(0, 3).map((arrest, i) => (
                                <div key={i} className="bg-navy-900/50 rounded-lg p-2">
                                  <div className="flex justify-between">
                                    <span className="text-xs text-platinum-500-300">{arrest.person}</span>
                                    <Badge variant="outline" className="text-xs">{arrest.nationality}</Badge>
                                  </div>
                                  <p className="text-xs text-platinum-500-500 mt-1">{arrest.reason}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Special data for Category 10 - Saadiyat Island */}
                        {'saadiyatIslandStats' in category && category.saadiyatIslandStats && (
                          <div>
                            <p className="text-xs text-platinum-500-500 mb-2">Saadiyat Island Statistics (HRW):</p>
                            <div className="bg-navy-900/50 rounded-lg p-3 space-y-1">
                              {Object.entries(category.saadiyatIslandStats).slice(0, 6).map(([key, value]) => (
                                <div key={key} className="flex justify-between text-xs">
                                  <span className="text-platinum-500-400">{key}:</span>
                                  <span className="text-rose-400 font-semibold">{String(value)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Special data for Category 12 - IQAir */}
                        {'iqAirData' in category && category.iqAirData && (
                          <div>
                            <p className="text-xs text-platinum-500-500 mb-2">IQAir Data (August 2025):</p>
                            <div className="bg-navy-900/50 rounded-lg p-3 space-y-1">
                              {Object.entries(category.iqAirData).map(([key, value]) => (
                                <div key={key} className="flex justify-between text-xs">
                                  <span className="text-platinum-500-400">{key}:</span>
                                  <span className="text-emerald-400 font-semibold">{String(value)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Special data for Category 16 - Walk Free */}
                        {'walkFreeData' in category && category.walkFreeData && (
                          <div>
                            <p className="text-xs text-platinum-500-500 mb-2">Walk Free Modern Slavery Index (2021):</p>
                            <div className="bg-navy-900/50 rounded-lg p-3 space-y-1">
                              {Object.entries(category.walkFreeData).slice(0, 6).map(([key, value]) => (
                                <div key={key} className="flex justify-between text-xs">
                                  <span className="text-platinum-500-400">{key}:</span>
                                  <span className="text-rose-400 font-semibold">{String(value)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Data Points */}
                        {category.dataPoints.length > 0 && (
                          <div>
                            <p className="text-xs text-platinum-500-500 mb-2">Data Points:</p>
                            <div className="space-y-1">
                              {category.dataPoints.slice(0, 5).map((dp, i) => (
                                <div key={i} className="flex justify-between text-xs">
                                  <span className="text-platinum-500-400">
                                    {Object.values(dp)[0]}:
                                  </span>
                                  <span className="text-platinum-500-300 font-semibold">
                                    {Object.values(dp)[1]}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand indicator */}
                  <div className="flex items-center justify-center mt-2">
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 text-platinum-500-500" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-platinum-500-500" />
                    )}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </GlassPanel>

      {/* Search Volume & Sentiment Analysis */}
      <GlassPanel
        title="Search Volume & Sentiment Analysis"
        description="Query cluster analysis across negative sentiment themes"
        className="mt-6"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {searchVolumeSentimentAnalysis.map((item, idx) => (
            <motion.div
              key={item.queryTheme}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card border border-platinum-500/30 p-4"
            >
              <h4 className="font-semibold text-platinum-500-200 mb-2 font-rajdhani">
                {item.queryTheme}
              </h4>
              <Badge
                className={
                  item.sentimentIntensity === 'HIGH'
                    ? 'bg-rose-500/20 text-rose-400 border-rose-500/50'
                    : item.sentimentIntensity === 'MEDIUM-HIGH'
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                    : 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                }
              >
                {item.sentimentIntensity}
              </Badge>
              <div className="mt-3 space-y-1">
                {item.primaryConcerns.map((concern, i) => (
                  <p key={i} className="text-xs text-platinum-500-400 flex items-center gap-1">
                    <XCircle className="h-3 w-3 text-platinum-500-500" />
                    {concern}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}
