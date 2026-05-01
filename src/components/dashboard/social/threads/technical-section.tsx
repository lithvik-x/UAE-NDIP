// Technical & API Section Component for Threads Intelligence
// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Code,
  Clock,
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Globe,
  Lock,
  Unlock,
  Smartphone,
  Webhook,
  Search,
  LineChart,
  Image,
  MessageSquare,
} from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

interface TechnicalSectionProps {
  apiCapabilities: any[]
  apiTimeline: any[]
  privacyData: any[]
  platformFeatures: any[]
}

export function TechnicalSection({
  apiCapabilities,
  apiTimeline,
  privacyData,
  platformFeatures,
}: TechnicalSectionProps) {
  const getStatusColor = (status: string) => {
    if (status.toLowerCase().includes('live') || status.toLowerCase().includes('completed')) return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
    if (status.toLowerCase().includes('active')) return 'bg-gold-700/20 text-gold-700 border-gold-700/30'
    if (status.toLowerCase().includes('expanding') || status.toLowerCase().includes('rolling')) return 'bg-info/20 text-info border-info/30'
    return 'bg-platinum-500/20 text-platinum-500-400 border-platinum-500/30'
  }

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel title="API & Technical Features" description="Platform capabilities, timeline, and privacy data">
          <div className="space-y-6">
            {/* API Capabilities */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="h-5 w-5 text-info" />
                  API Capabilities
                </CardTitle>
                <CardDescription>Threads API features by category</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 lg:grid-cols-2">
                  {apiCapabilities.map((category: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="rounded-lg bg-platinum-800/50 p-4"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs bg-info/10 text-info border-info/30">
                          {category.category}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {category.features.map((feature: string, fidx: number) => (
                          <div key={fidx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-platinum-500-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* API Timeline */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold-700" />
                  API Development Timeline
                </CardTitle>
                <CardDescription>Feature rollout history and upcoming</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-info to-slate-700" />
                  <div className="space-y-4">
                    {apiTimeline.map((item: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-10"
                      >
                        <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-gold border-2 border-platinum-900" />
                        <div className="rounded-lg bg-platinum-800/50 p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-bold text-gold-700">{item.date}</span>
                            <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                              {item.status}
                            </Badge>
                          </div>
                          <p className="font-medium text-platinum-500-200">{item.feature}</p>
                          <p className="text-sm text-platinum-500-400 mt-1">{item.details}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </motion.div>

            {/* Privacy & Data Collection */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-rose-400" />
                  Privacy & Data Collection
                </CardTitle>
                <CardDescription>Data practices and geographic restrictions</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                      <Unlock className="h-4 w-4" />
                      Data Collected
                    </h4>
                    <div className="space-y-2">
                      {privacyData.filter((p: any) => p.collected).map((item: any, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <XCircle className="h-4 w-4 text-rose-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-platinum-500-300">{item.dataType}</span>
                            {item.details && <p className="text-xs text-platinum-500-500">{item.details}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-platinum-500-400 mb-3 flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Not Collected / Restricted
                    </h4>
                    <div className="space-y-2">
                      {privacyData.filter((p: any) => !p.collected).map((item: any, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-platinum-500-300">{item.dataType}</span>
                            {item.details && <p className="text-xs text-platinum-500-500">{item.details}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </motion.div>

            {/* Platform Features Overview */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-info" />
                  Platform Features by Category
                </CardTitle>
                <CardDescription>Complete feature set across categories</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(
                    platformFeatures.reduce((acc: any, f: any) => {
                      if (!acc[f.category]) acc[f.category] = []
                      acc[f.category].push(f)
                      return acc
                    }, {})
                  ).slice(0, 6).map(([category, features]: [string, any[]]) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="rounded-lg bg-platinum-800/50 p-3"
                    >
                      <div className="text-sm font-semibold text-gold-700 mb-2">{category}</div>
                      <div className="space-y-1">
                        {features.slice(0, 3).map((f: any, idx: number) => (
                          <div key={idx} className="text-xs text-platinum-500-300 flex items-center gap-1">
                            <CheckCircle className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                            <span className="truncate">{f.feature}</span>
                          </div>
                        ))}
                        {features.length > 3 && (
                          <div className="text-xs text-platinum-500-500">+{features.length - 3} more</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Key Technical Specs */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Key Technical Specifications</CardTitle>
                <CardDescription>Platform limits and capabilities</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg bg-info/10 p-4 border border-info/30">
                    <div className="text-2xl font-bold text-info">500</div>
                    <div className="text-sm text-platinum-500-400">Characters (standard)</div>
                  </div>
                  <div className="rounded-lg bg-gold-700/10 p-4 border border-gold-700/30">
                    <div className="text-2xl font-bold text-gold-700">10,000</div>
                    <div className="text-sm text-platinum-500-400">Characters (long-form)</div>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                    <div className="text-2xl font-bold text-emerald-400">10</div>
                    <div className="text-sm text-platinum-500-400">Media per post</div>
                  </div>
                  <div className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                    <div className="text-2xl font-bold text-rose-400">5</div>
                    <div className="text-sm text-platinum-500-400">Links max (dec 2025)</div>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}

export default TechnicalSection
