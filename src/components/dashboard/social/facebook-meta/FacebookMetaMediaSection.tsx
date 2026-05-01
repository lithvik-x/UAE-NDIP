'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { ExternalLink, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  mediaFacebookPages,
  khaleejTimesDetails,
  gulfNewsDetails,
} from '@/lib/data/social/facebook-meta-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export function FacebookMetaMediaSection() {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Media Organizations on Facebook"
        description="News outlets and media presence on UAE Facebook"
      >
        <div className="space-y-6">
          {/* Media Pages */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-info" />
                Major Media Facebook Pages
              </CardTitle>
              <CardDescription>Top news outlets by follower count</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mediaFacebookPages.map((page, idx) => (
                  <motion.a
                    key={idx}
                    href={page.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-info/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-info" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-platinum-200">{page.outlet}</span>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              page.credibility === 'Very High' ? 'border-emerald-500/50 text-emerald-400' :
                              'border-info/50 text-info'
                            }`}
                          >
                            {page.credibility}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{page.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-right">
                      <div>
                        <p className="text-sm font-medium text-platinum-200">
                          {page.likes >= 1000000 ? `${(page.likes / 1000000).toFixed(1)}M` : `${(page.likes / 1000).toFixed(0)}K`}
                        </p>
                        <p className="text-xs text-slate-500">Likes</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-platinum-200">
                          {page.talkingAbout >= 1000000 ? `${(page.talkingAbout / 1000000).toFixed(1)}M` : `${(page.talkingAbout / 1000).toFixed(0)}K`}
                        </p>
                        <p className="text-xs text-slate-500">Talking</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-info" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Khaleej Times Details */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg text-gold">Khaleej Times Deep Dive</CardTitle>
              <CardDescription>Major English-language UAE newspaper</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center p-4 rounded-lg bg-slate-800/50">
                  <span className="text-2xl font-bold text-gold">{(khaleejTimesDetails.totalLikes / 1000000).toFixed(1)}M</span>
                  <span className="text-xs text-slate-400 mt-1">Total Likes</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-slate-800/50">
                  <span className="text-2xl font-bold text-info">{(khaleejTimesDetails.talkingAbout / 1000).toFixed(0)}K</span>
                  <span className="text-xs text-slate-400 mt-1">Talking About</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-slate-800/50">
                  <span className="text-2xl font-bold text-emerald">{khaleejTimesDetails.sentiment}</span>
                  <span className="text-xs text-slate-400 mt-1">Sentiment</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-slate-800/50">
                  <span className="text-2xl font-bold text-platinum">EN/AR</span>
                  <span className="text-xs text-slate-400 mt-1">Languages</span>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-lg bg-slate-800/30">
                <h4 className="text-sm font-semibold text-platinum-200 mb-2">Credibility</h4>
                <p className="text-sm text-slate-400">{khaleejTimesDetails.credibility}</p>
              </div>
            </CardContent>
          </Card>

          {/* Gulf News Details */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg text-emerald">Gulf News Deep Dive</CardTitle>
              <CardDescription>Major English-language UAE newspaper</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center p-4 rounded-lg bg-slate-800/50">
                  <span className="text-2xl font-bold text-emerald">{(gulfNewsDetails.totalLikes / 1000000).toFixed(1)}M</span>
                  <span className="text-xs text-slate-400 mt-1">Total Likes</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-slate-800/50">
                  <span className="text-2xl font-bold text-info">{(gulfNewsDetails.talkingAbout / 1000).toFixed(0)}K</span>
                  <span className="text-xs text-slate-400 mt-1">Talking About</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-slate-800/50">
                  <span className="text-2xl font-bold text-gold">{gulfNewsDetails.historicalGrowth}</span>
                  <span className="text-xs text-slate-400 mt-1">Historical Growth</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-slate-800/50">
                  <span className="text-2xl font-bold text-platinum">EN/AR</span>
                  <span className="text-xs text-slate-400 mt-1">Languages</span>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-lg bg-slate-800/30">
                <h4 className="text-sm font-semibold text-platinum-200 mb-2">Operating Model</h4>
                <p className="text-sm text-slate-400">{gulfNewsDetails.operatingModel}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}