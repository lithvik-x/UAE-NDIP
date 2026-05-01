// Trends Section Component for Threads Intelligence
// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Image,
  Video,
  MessageSquare,
  BarChart3,
  Zap,
  Globe,
  Users,
  Smartphone,
  Languages,
  Target,
} from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

interface TrendsSectionProps {
  uaeSocialMediaTrends: any[]
  contentFormatTrends: any[]
  engagementDecline: any[]
}

export function TrendsSection({
  uaeSocialMediaTrends,
  contentFormatTrends,
  engagementDecline,
}: TrendsSectionProps) {
  const getImpactColor = (impact: string) => {
    if (impact === 'High') return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
    if (impact === 'Medium-High' || impact === 'Medium') return 'bg-gold-700/20 text-gold-700 border-gold-700/30'
    return 'bg-platinum-500/20 text-platinum-500-400 border-platinum-500/30'
  }

  const engagementData = engagementDecline.map(item => ({
    platform: item.platform,
    change: parseFloat(item.change.replace(/[^0-9.-]/g, '')),
    isNegative: item.change.startsWith('-'),
  }))

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel title="2026 Emerging Trends" description="UAE social media trends and content format shifts">
          <div className="space-y-6">
            {/* Engagement Decline Overview */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-rose-400" />
                  Platform Engagement Decline (2025)
                </CardTitle>
                <CardDescription>Year-over-year engagement changes across platforms</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <BarChart
                  data={engagementData}
                  xAxisKey="platform"
                  bars={[{ dataKey: 'change', name: 'Change %', color: CHART_COLORS.rose }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </motion.div>

            {/* UAE Social Media Trends */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-info" />
                  UAE Social Media Trends 2026
                </CardTitle>
                <CardDescription>Emerging trends shaping UAE social media landscape</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {uaeSocialMediaTrends.map((trend: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-lg bg-platinum-800/50 p-4 cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={`text-xs ${getImpactColor(trend.impact)}`}>
                          {trend.impact} Impact
                        </Badge>
                      </div>
                      <p className="font-medium text-platinum-500-200 mb-1">{trend.trend}</p>
                      <p className="text-sm text-platinum-500-400">{trend.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Content Format Trends */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Image className="h-5 w-5 text-gold-700" />
                  Content Format Performance Trends
                </CardTitle>
                <CardDescription>What formats are winning on Threads</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {contentFormatTrends.map((item: any, idx: number) => {
                    const isPositive = item.trend.toLowerCase().includes('high') || item.trend.toLowerCase().includes('outperform')
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`rounded-lg p-4 border ${
                          isPositive
                            ? 'bg-emerald-500/10 border-emerald-500/30'
                            : 'bg-rose-500/10 border-rose-500/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-platinum-500-200">{item.format}</span>
                          {isPositive ? (
                            <ArrowUpRight className="h-5 w-5 text-emerald-400" />
                          ) : (
                            <ArrowDownRight className="h-5 w-5 text-rose-400" />
                          )}
                        </div>
                        <p className={`text-sm mb-2 ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {item.trend}
                        </p>
                        <p className="text-xs text-platinum-500-400">{item.recommendation}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </motion.div>

            {/* Key Trend Insights */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-gold-700" />
                  Key Insights for UAE Brands
                </CardTitle>
                <CardDescription>Actionable takeaways from trend analysis</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <Languages className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-platinum-500-200">Bilingual is Essential</p>
                      <p className="text-sm text-platinum-500-400">Arabic content is regaining power - translate emotion, not just text. +20% engagement boost.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-info/10 border border-info/30">
                    <Video className="h-5 w-5 text-info mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-platinum-500-200">Vertical Video Dominates</p>
                      <p className="text-sm text-platinum-500-400">15-30 second reels with bilingual on-screen text are the winning format.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-gold-700/10 border border-gold-700/30">
                    <Users className="h-5 w-5 text-gold-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-platinum-500-200">Micro-Influencers Win</p>
                      <p className="text-sm text-platinum-500-400">Shift from celebrity to micro/nano influencers for higher engagement at lower cost.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-rose-500/10 border border-rose-500/30">
                    <MessageSquare className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-platinum-500-200">Authenticity Over Virality</p>
                      <p className="text-sm text-platinum-500-400">Conversation-driven content outperforms viral posts. Reply to comments for +42% engagement.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </motion.div>

            {/* Platform-Specific Recommendations */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-info" />
                  Threads-Specific Recommendations
                </CardTitle>
                <CardDescription>Best practices for Threads in UAE</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <CheckCircle className="h-4 w-4" />
                      DO
                    </div>
                    <ul className="space-y-2 text-sm text-platinum-500-300 ml-6">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">•</span>
                        Post pictures (highest engagement format)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">•</span>
                        Use bilingual (Arabic + English)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">•</span>
                        Keep posts under 150 characters
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">•</span>
                        Post during peak hours (7-9 AM)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">•</span>
                        Reply to comments (+42% boost)
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-rose-400 font-medium">
                      <XCircle className="h-4 w-4" />
                      AVOID
                    </div>
                    <ul className="space-y-2 text-sm text-platinum-500-300 ml-6">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400">•</span>
                        Text-only posts (-60% vs pictures)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400">•</span>
                        Link posts (-37% engagement)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400">•</span>
                        Sunday posts (lowest engagement)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400">•</span>
                        Posting without Instagram cross-promotion
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-400">•</span>
                        Overly promotional content
                      </li>
                    </ul>
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

function CheckCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function XCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}

export default TrendsSection
