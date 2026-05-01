'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { GlassCard, GlassPanel } from '@/components/ui/glass-panel'
import {
  MapPin,
  Trophy,
  BookOpen,
} from 'lucide-react'
import type { RoyalFamilyMember, EmirateOverview } from '@/lib/data/entity/royal-family-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

function getSentimentBadge(sentiment: RoyalFamilyMember['sentiment']) {
  switch (sentiment) {
    case 'OVERWHELMINGLY_POSITIVE':
      return <Badge variant="success" className="text-xs">Overwhelmingly Positive</Badge>
    case 'POSITIVE':
      return <Badge variant="success" className="text-xs">Positive</Badge>
    case 'NEUTRAL':
      return <Badge variant="secondary" className="text-xs">Neutral</Badge>
    case 'NEGATIVE':
      return <Badge variant="destructive" className="text-xs">Negative</Badge>
    case 'MIXED':
      return <Badge variant="warning" className="text-xs">Mixed</Badge>
    default:
      return <Badge variant="secondary" className="text-xs">{sentiment}</Badge>
  }
}

function MemberCard({ member }: { member: RoyalFamilyMember }) {
  return (
    <GlassCard hover className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-semibold text-navy-900 dark:text-platinum-100 text-sm truncate">{member.name}</h4>
            {member.nameAr && (
              <span className="text-xs text-platinum-500 dark:text-platinum-400 font-arabic">{member.nameAr}</span>
            )}
          </div>
          <p className="text-xs text-platinum-600 dark:text-platinum-400 mt-0.5">{member.role}</p>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <Badge variant="outline" className="text-xs">{member.dynasty}</Badge>
            <Badge variant="outline" className="text-xs">{member.emirate}</Badge>
          </div>
          {member.age && (
            <p className="text-xs text-platinum-500 mt-1">Age: {member.age}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <div className="text-lg font-bold text-navy-900 dark:text-platinum-100">{member.uaeRelevance}</div>
          <div className="w-16">
            <div className="h-1 bg-platinum-200 dark:bg-platinum-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                style={{ width: `${member.uaeRelevance * 10}%` }}
              />
            </div>
          </div>
          {getSentimentBadge(member.sentiment)}
        </div>
      </div>
      {member.achievements && member.achievements.length > 0 && (
        <div className="mt-3 pt-3 border-t border-platinum-200/30 dark:border-platinum-700/30">
          <p className="text-xs font-medium text-platinum-700 dark:text-platinum-300 mb-1">Key Achievements</p>
          <ul className="space-y-0.5">
            {member.achievements.slice(0, 2).map((a, i) => (
              <li key={i} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1">
                <span className="h-3 w-3 mt-0.5 text-emerald-500 shrink-0">•</span>
                <span className="truncate">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {member.keyFindings && member.keyFindings.length > 0 && (
        <div className="mt-2 pt-2 border-t border-platinum-200/30 dark:border-platinum-700/30">
          <ul className="space-y-0.5">
            {member.keyFindings.slice(0, 2).map((f, i) => (
              <li key={i} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1">
                <span className="h-3 w-3 mt-0.5 text-emerald-500 shrink-0">•</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </GlassCard>
  )
}

interface OtherEmiratesSectionProps {
  otherEmiratesMembers: RoyalFamilyMember[]
  emirateOverviews: EmirateOverview[]
}

export function OtherEmiratesSection({
  otherEmiratesMembers,
  emirateOverviews,
}: OtherEmiratesSectionProps) {
  const otherEmirates = emirateOverviews.filter(e => e.emirate !== 'Abu Dhabi' && e.emirate !== 'Dubai')

  return (
    <div className="space-y-6">
      <motion.div {...fadeInUp}>
        <GlassPanel
          title="Other Emirates — Al Qasimi, Al Nuaimi, Al Mualla, Al Sharqi"
          description={`${otherEmiratesMembers.length} documented members across Sharjah, Ras Al Khaimah, Ajman, Umm Al Quwain, and Fujairah`}
          icon={<MapPin className="h-5 w-5 text-emerald-600" />}
        >
          <div className="grid gap-4 sm:grid-cols-5">
            {otherEmirates.map((e, i) => (
              <div key={i} className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                <p className="text-sm font-bold text-navy-900 dark:text-platinum-100">{e.emirate}</p>
                <Badge variant="outline" className="text-xs mt-1 block">{e.dynasty}</Badge>
                <p className="text-xs text-platinum-500 mt-1">Age {e.age}</p>
                <p className="text-xs text-platinum-500">Since {e.since}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {otherEmiratesMembers.map((member) => (
          <motion.div key={member.id} {...fadeInUp}>
            <MemberCard member={member} />
          </motion.div>
        ))}
      </div>

      {/* RAK Economic Profile */}
      <motion.div {...fadeInUp}>
        <GlassPanel
          title="Ras Al Khaimah — Economic Transformation"
          description="Under Sheikh Saud bin Saqr Al Qasimi: GDP per capita grew from AED 35,000 (2001) to AED 118,621 (2025)"
          badge="RAK"
          badgeVariant="teal"
          icon={<Trophy className="h-5 w-5 text-teal-600" />}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-3 rounded-lg bg-teal-50/50 dark:bg-teal-900/20 border border-teal-200/30 dark:border-teal-700/30 text-center">
              <p className="text-2xl font-bold text-teal-700 dark:text-teal-300">AED 35K → 118K</p>
              <p className="text-xs text-teal-600 dark:text-teal-400">GDP per capita growth</p>
            </div>
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">10.4%</p>
              <p className="text-xs text-platinum-500">Gov Debt (2022)</p>
            </div>
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">A/A-1</p>
              <p className="text-xs text-platinum-500">Credit Rating</p>
            </div>
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">8/10</p>
              <p className="text-xs text-platinum-500">Avg Relevance</p>
            </div>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Sharjah Cultural Profile */}
      <motion.div {...fadeInUp}>
        <GlassPanel
          title="Sharjah — Cultural & Academic Hub"
          description="Under Sheikh Sultan bin Muhammad Al Qasimi: 82+ books authored, University of Sharjah, American University of Sharjah"
          badge="Sharjah"
          badgeVariant="emerald"
          icon={<BookOpen className="h-5 w-5 text-emerald-600" />}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-3 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-200/30 dark:border-emerald-700/30">
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">82+</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400">Books authored by the Ruler</p>
            </div>
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">1972</p>
              <p className="text-xs text-platinum-500">Ruler Since</p>
            </div>
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">86</p>
              <p className="text-xs text-platinum-500">Age</p>
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </div>
  )
}
