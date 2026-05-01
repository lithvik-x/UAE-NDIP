'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { BarChart } from '@/components/ui/chart-library'
import { Star, Users, TrendingUp, CheckCircle, Building2, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { instagramIntelligenceData } from '@/lib/data/instagram-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

interface InstagramInfluencersSectionProps {
  data: typeof instagramIntelligenceData
}

export function InstagramInfluencersSection({ data }: InstagramInfluencersSectionProps) {
  const { topInfluencers, lifestyleInfluencers, highEngagementLeaders, notableInfluencers, virtualInfluencers } = data
  const [selectedInfluencer, setSelectedInfluencer] = useState<typeof topInfluencers[0] | null>(null)

  const topInfluencersChartData = topInfluencers.slice(0, 5).map((inf: { name: string; followers: number }) => ({
    name: inf.name.split(' ')[0],
    followers: inf.followers / 1000000,
  }))

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Influencer Ecosystem"
        description="Top UAE Instagram influencers and lifestyle creators"
      >
        <div className="space-y-6">
          {/* Top Influencers Chart */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-gold" />
                Top 5 Influencers by Followers
              </CardTitle>
              <CardDescription>Follower count in millions</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={topInfluencersChartData}
                xAxisKey="name"
                bars={[{ dataKey: 'followers', name: 'Followers (M)', color: CHART_COLORS.gold }]}
                height={200}
                showGrid={true}
              />
            </CardContent>
          </Card>

          {/* Influencers Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Top 10 Influencers */}
            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg">Top UAE Influencers</CardTitle>
                <CardDescription>By follower count (2025)</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-2">
                    {topInfluencers.map((inf: { rank: number; name: string; username: string; followers: number; engagementRate: number; brandPartners: string; notes: string; category?: string }) => (
                      <motion.div
                        key={inf.rank}
                        whileHover={{ x: 4, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                        className="flex items-center justify-between p-3 rounded-lg border border-transparent hover:border-purple-500/20 cursor-pointer transition-all"
                        onClick={() => setSelectedInfluencer(inf)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 font-bold text-sm">
                            {inf.rank}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-white">{inf.name}</span>
                              {inf.engagementRate > 2 && (
                                <Badge variant="outline" className="text-xs border-emerald-500/30 text-emerald-400">
                                  High ER
                                </Badge>
                              )}
                            </div>
                            <span className="text-xs text-platinum/50">{inf.username}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-gold">{(inf.followers / 1000000).toFixed(1)}M</span>
                          <span className="text-xs text-platinum/50 ml-1">
                            ({inf.engagementRate > 0 ? `${inf.engagementRate}%` : 'N/A'})
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Selected Influencer Detail or Lifestyle Influencers */}
            <AnimatePresence mode="wait">
              {selectedInfluencer ? (
                <motion.div
                  key="detail"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{selectedInfluencer.name}</CardTitle>
                          <CardDescription>{selectedInfluencer.username}</CardDescription>
                        </div>
                        <Badge variant="outline" className="border-gold/30 text-gold">
                          Rank #{selectedInfluencer.rank}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-lg bg-slate-800/30">
                            <p className="text-xs text-platinum/50 uppercase">Followers</p>
                            <p className="text-xl font-bold text-gold">{(selectedInfluencer.followers / 1000000).toFixed(1)}M</p>
                          </div>
                          <div className="p-4 rounded-lg bg-slate-800/30">
                            <p className="text-xs text-platinum/50 uppercase">Engagement</p>
                            <p className="text-xl font-bold text-emerald-400">
                              {selectedInfluencer.engagementRate > 0 ? `${selectedInfluencer.engagementRate}%` : 'N/A'}
                            </p>
                          </div>
                        </div>
                        {selectedInfluencer.brandPartners !== '-' && (
                          <div>
                            <p className="text-xs text-platinum/50 uppercase mb-2">Brand Partners</p>
                            <p className="text-sm text-white">{selectedInfluencer.brandPartners}</p>
                          </div>
                        )}
                        {selectedInfluencer.notes && (
                          <div>
                            <p className="text-xs text-platinum/50 uppercase mb-2">Notes</p>
                            <p className="text-sm text-slate-300">{selectedInfluencer.notes}</p>
                          </div>
                        )}
                        {selectedInfluencer.category && (
                          <div>
                            <p className="text-xs text-platinum/50 uppercase mb-2">Category</p>
                            <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                              {selectedInfluencer.category}
                            </Badge>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => setSelectedInfluencer(null)}
                        className="w-full mt-4 px-4 py-2 rounded-lg border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-colors"
                      >
                        Close
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div key="lifestyle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Card className="glass-card border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg">Lifestyle Influencers</CardTitle>
                      <CardDescription>High engagement creators (igygrow.com)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px]">
                        <div className="space-y-2">
                          {lifestyleInfluencers.map((inf: { username: string; followers: number; engagementRate: number; audienceGender: string }, idx: number) => (
                            <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                              <div>
                                <span className="text-sm font-medium text-white">{inf.username}</span>
                                <p className="text-xs text-platinum/50">{inf.audienceGender}</p>
                              </div>
                              <div className="text-right">
                                <span className="text-sm font-bold text-gold">{(inf.followers / 1000000).toFixed(1)}M</span>
                                <span className="text-xs text-emerald-400 ml-2">{inf.engagementRate}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* High Engagement Leaders */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald" />
                High Engagement Leaders
              </CardTitle>
              <CardDescription>Influencers with exceptional engagement rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                {highEngagementLeaders.map((inf: { username: string; followers: number; engagementRate: number; audienceGender: string }, idx: number) => (
                  <div key={idx} className="p-4 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">{inf.username}</span>
                      <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                        {inf.engagementRate}%
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-400 mb-1">{(inf.followers / 1000000).toFixed(1)}M followers</p>
                    <p className="text-xs text-platinum/50">{inf.audienceGender}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Virtual Influencers */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-purple" />
                Virtual Influencers
              </CardTitle>
              <CardDescription>43.7% CAGR - fastest growing globally</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {virtualInfluencers.map((vInf: { name: string; platform: string; description: string; location: string }, idx: number) => (
                  <div key={idx} className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                        <Users className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-white">{vInf.name}</h4>
                        <span className="text-xs text-platinum/50">{vInf.platform}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 mb-2">{vInf.description}</p>
                    <Badge variant="outline" className="text-xs border-blue-500/30 text-blue-300">
                      {vInf.location}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
