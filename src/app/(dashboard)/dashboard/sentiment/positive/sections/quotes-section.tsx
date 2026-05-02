// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Quote,
  Shield,
  Heart,
  Crown,
  Users,
} from 'lucide-react'
import { expertQuotes } from '@/lib/data-loader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const TOPIC_ICONS: Record<string, React.ElementType> = {
  'Safety/Resilience': Shield,
  'Security': Shield,
  'Safety': Shield,
  'Humanitarian': Heart,
  'Leadership': Crown,
  'Hospitality': Users,
}

const TOPIC_COLORS: Record<string, string> = {
  'Safety/Resilience': 'emerald',
  'Security': 'denim',
  'Safety': 'emerald',
  'Humanitarian': 'rose',
  'Leadership': 'orange',
  'Hospitality': 'gold',
}

export function QuotesSection() {
  const groupedQuotes = expertQuotes.reduce((acc, quote) => {
    if (!acc[quote.topic]) {
      acc[quote.topic] = []
    }
    acc[quote.topic].push(quote)
    return acc
  }, {} as Record<string, typeof expertQuotes>)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants}>
        <Badge variant="outline" className="mb-2 border-rose-500/50 text-rose-400">
          EXPERT QUOTES
        </Badge>
        <h2 className="text-2xl font-bold font-rajdhani text-platinum-100">
          Key Expert Quotations Repository
        </h2>
        <p className="text-sm text-platinum-400 mt-1">
          10 verified expert quotes from Dr. Salma Thani, Sheikh MBZ, and official sources
        </p>
      </motion.div>

      {/* Quote Cards */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Verified Expert Quotations"
          description="Authoritative quotes organized by topic with affiliation and context"
          badge="TIER 1-2"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {expertQuotes.slice(0, 6).map((quote, idx) => {
              const Icon = TOPIC_ICONS[quote.topic] || Quote
              const color = TOPIC_COLORS[quote.topic] || 'emerald'

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`relative p-6 rounded-xl bg-gradient-to-br from-${color}-500/10 to-transparent border border-${color}-500/30 backdrop-blur-sm`}
                >
                  <div className={`absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-${color}-500/20`}>
                    <Icon className={`h-4 w-4 text-${color}-400`} />
                  </div>

                  <div className="pr-10">
                    <Badge
                      variant="outline"
                      className={`mb-3 border-${color}-500/50 text-${color}-400 text-xs`}
                    >
                      {quote.topic}
                    </Badge>

                    <blockquote className="text-sm text-platinum-300 italic leading-relaxed mb-4">
                      &ldquo;{quote.quote}&rdquo;
                    </blockquote>

                    <div className="border-t border-platinum-700/50 pt-3">
                      <p className="text-sm font-medium text-platinum-200">{quote.author}</p>
                      <p className="text-xs text-platinum-500">{quote.affiliation}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Key Quotes Summary */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Leadership Philosophy Highlights"
          description="Core leadership quotes from Sheikh Mohamed bin Zayed Al Nahyan"
          badge="PRESIDENTIAL"
          className="border-orange-500/30"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="glass-card border-orange-500/20 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 shrink-0">
                  <Crown className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-2 border-orange-500/50 text-orange-400 text-xs">
                    Leadership Philosophy
                  </Badge>
                  <blockquote className="text-sm text-platinum-300 italic leading-relaxed">
                    &ldquo;A true leader has the courage to be open with his people and care for others as family.&rdquo;
                  </blockquote>
                  <p className="text-xs text-platinum-500 mt-2">— Sheikh Mohamed bin Zayed Al Nahyan</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card border-orange-500/20 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 shrink-0">
                  <Crown className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-2 border-orange-500/50 text-orange-400 text-xs">
                    Empowerment
                  </Badge>
                  <blockquote className="text-sm text-platinum-300 italic leading-relaxed">
                    &ldquo;True leadership lies in empowering men and women to forge their own paths and shape the future of the nation.&rdquo;
                  </blockquote>
                  <p className="text-xs text-platinum-500 mt-2">— Sheikh Mohamed bin Zayed Al Nahyan</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card border-rose-500/20 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/20 shrink-0">
                  <Heart className="h-6 w-6 text-rose-400" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-2 border-rose-500/50 text-rose-400 text-xs">
                    Humanitarian Mission
                  </Badge>
                  <blockquote className="text-sm text-platinum-300 italic leading-relaxed">
                    &ldquo;The UAE&apos;s humanitarian mission serves people in need regardless of origin, race, religion, belief, or geography.&rdquo;
                  </blockquote>
                  <p className="text-xs text-platinum-500 mt-2">— Sheikh Theyab bin Mohamed bin Zayed Al Nahyan</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card border-emerald-500/20 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 shrink-0">
                  <Users className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-2 border-emerald-500/50 text-emerald-400 text-xs">
                    Arabian Hospitality
                  </Badge>
                  <blockquote className="text-sm text-platinum-300 italic leading-relaxed">
                    &ldquo;Having encountered travellers in the desert over generations, the friendly people of Abu Dhabi know how to make visitors feel welcome.&rdquo;
                  </blockquote>
                  <p className="text-xs text-platinum-500 mt-2">— Visit Abu Dhabi (Official)</p>
                </div>
              </div>
            </Card>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Safety/Resilience Expert Analysis */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Dr. Salma Thani - Security & Resilience Expert Analysis"
          description="American University of Sharjah professor on UAE stability and resilience"
          badge="ACADEMIC"
          className="border-emerald-500/30"
        >
          <div className="space-y-4">
            {[
              {
                quote: 'The current conflict… this is where the difference between stability and resilience becomes clear. Stability is how a country appears in normal times. Resilience is how it performs under real pressure.',
                context: 'Core Resilience Framework',
              },
              {
                quote: 'The UAE is being tested in real time, and it is showing that its stability is not superficial.',
                context: 'Stability Validation',
              },
              {
                quote: 'Security for the UAE has never been only about defence. It has also been about preserving trade, social order, livelihoods, and stability.',
                context: 'Holistic Security Approach',
              },
              {
                quote: 'It is not just about reacting to danger. It is about preparing for shocks, containing them, and ensuring that society continues to function with confidence.',
                context: 'Proactive Resilience',
              },
              {
                quote: 'The UAE does not approach security as a temporary emergency file, but as part of the wider project of state stability and national resilience.',
                context: 'Strategic Security Vision',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2 border-emerald-500/50 text-emerald-400 text-xs">
                      {item.context}
                    </Badge>
                    <blockquote className="text-sm text-platinum-300 italic leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <p className="text-xs text-platinum-500 mt-2">
                      — Dr. Salma Thani, American University of Sharjah
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}
