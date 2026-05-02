// Reddit Posts Section - Posts by category with sentiment
// @ts-nocheck
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  ThumbsDown,
  AlertTriangle,
  Home,
  PiggyBank,
  Users,
  ShieldAlert,
  Briefcase,
  HeartPulse,
} from 'lucide-react'
import { useState } from 'react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }

interface RedditPost {
  id: string
  title: string
  date: string
  url: string
  sentiment: string
  context: string
  uaeRelevance: string
  credibility: string
  keyQuote?: string
  financialImpact?: string
  entities?: string[]
  jurisdiction?: string
  authority?: string
  propertyType?: string
  industry?: string
  technology?: string
  platform?: string
  timeline?: string
}

interface QueryCategory {
  name: string
  icon: string
  color: string
  posts: RedditPost[]
}

interface RedditPostsSectionProps {
  queryCategories: QueryCategory[]
}

const iconMap: Record<string, React.ReactNode> = {
  ThumbsDown: <ThumbsDown className="h-4 w-4" />,
  AlertTriangle: <AlertTriangle className="h-4 w-4" />,
  Home: <Home className="h-4 w-4" />,
  PiggyBank: <PiggyBank className="h-4 w-4" />,
  Users: <Users className="h-4 w-4" />,
  ShieldAlert: <ShieldAlert className="h-4 w-4" />,
  Briefcase: <Briefcase className="h-4 w-4" />,
  HeartPulse: <HeartPulse className="h-4 w-4" />,
}

const colorMap: Record<string, { border: string; bg: string; text: string }> = {
  rose: { border: 'border-rose-500/30', bg: 'bg-rose-500/5', text: 'text-rose-400' },
  orange: { border: 'border-orange-500/30', bg: 'bg-orange-500/5', text: 'text-orange-400' },
  red: { border: 'border-red-500/30', bg: 'bg-red-500/5', text: 'text-red-400' },
  amber: { border: 'border-amber-500/30', bg: 'bg-amber-500/5', text: 'text-amber-400' },
  purple: { border: 'border-purple-500/30', bg: 'bg-purple-500/5', text: 'text-purple-400' },
  slate: { border: 'border-platinum-500/30', bg: 'bg-platinum-500/5', text: 'text-platinum-400' },
  blue: { border: 'border-navy-500/30', bg: 'bg-navy-500/5', text: 'text-navy-400' },
  pink: { border: 'border-pink-500/30', bg: 'bg-pink-500/5', text: 'text-pink-400' },
}

export function RedditPostsSection({ queryCategories }: RedditPostsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const currentCategory = queryCategories.find(c => c.name === selectedCategory)

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel
          title="Reddit Posts by Category"
          description="Documented posts from UAE subreddits covering key issues"
        >
          <div className="space-y-6">
            {/* Category Selection */}
            <div className="flex flex-wrap gap-2">
              {queryCategories.map((category) => {
                const colors = colorMap[category.color] || colorMap.slate
                const isSelected = selectedCategory === category.name
                return (
                  <motion.button
                    key={category.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                      isSelected
                        ? `${colors.border} ${colors.bg} ${colors.text}`
                        : 'border-platinum-600 bg-platinum-800/50 text-platinum-300 hover:border-platinum-500'
                    }`}
                  >
                    {iconMap[category.icon] || <ThumbsDown className="h-4 w-4" />}
                    <span className="text-sm font-medium">{category.name}</span>
                    <Badge variant="outline" className="ml-1 border-platinum-600">
                      {category.posts.length}
                    </Badge>
                  </motion.button>
                )
              })}
            </div>

            {/* Posts Grid */}
            <AnimatePresence mode="wait">
              {currentCategory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid gap-4 lg:grid-cols-2"
                >
                  {currentCategory.posts.map((post, idx) => {
                    const colors = colorMap[currentCategory.color] || colorMap.slate
                    return (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -4 }}
                        className={`glass-card border-l-4 ${colors.border}`}
                      >
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-base text-platinum-200">{post.title}</CardTitle>
                            <Badge
                              variant={post.sentiment.includes('Very') ? 'destructive' : 'outline'}
                              className="ml-2"
                            >
                              {post.sentiment}
                            </Badge>
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            <span className="text-platinum-400">{post.date}</span>
                            <span className="text-platinum-600">•</span>
                            <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">
                              {post.credibility}
                            </Badge>
                            <Badge variant="outline" className="border-rose-500/30 text-rose-400 text-xs">
                              {post.uaeRelevance}
                            </Badge>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-platinum-300 text-sm">{post.context}</p>
                          {post.keyQuote && (
                            <motion.blockquote
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="mt-3 border-l-2 border-rose-500/50 pl-3 text-sm italic text-platinum-400"
                            >
                              &ldquo;{post.keyQuote}&rdquo;
                            </motion.blockquote>
                          )}
                          {post.financialImpact && (
                            <div className="mt-3 flex items-center gap-2 text-sm">
                              <span className="text-rose-400 font-semibold">{post.financialImpact}</span>
                            </div>
                          )}
                          {post.entities && post.entities.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1">
                              {post.entities.map((entity) => (
                                <Badge key={entity} variant="outline" className="border-platinum-600 text-xs">
                                  {entity}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </motion.div>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Summary when no category selected */}
            {!selectedCategory && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-platinum-400 py-8"
              >
                <p>Select a category above to view detailed posts</p>
                <p className="text-sm mt-2">Total: {queryCategories.reduce((acc, c) => acc + c.posts.length, 0)} posts across {queryCategories.length} categories</p>
              </motion.div>
            )}
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}

export default RedditPostsSection
