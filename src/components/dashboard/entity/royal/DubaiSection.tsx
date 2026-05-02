'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { GlassCard, GlassPanel } from '@/components/ui/glass-panel'
import {
  Crown,
  Building2,
  CheckCircle2,
} from 'lucide-react'
import type { RoyalFamilyMember } from '@/lib/data/entity/royal-family-data'

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

function getAlertBadge(level: RoyalFamilyMember['alertLevel']) {
  switch (level) {
    case 'GREEN':
      return <Badge variant="success" className="text-xs gap-1"><CheckCircle2 className="h-3 w-3" /> Green</Badge>
    case 'YELLOW':
      return <Badge variant="warning" className="text-xs gap-1"><span className="h-3 w-3" /> Yellow</Badge>
    default:
      return <Badge variant="secondary" className="text-xs">{level}</Badge>
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
                className="h-full bg-gradient-to-r from-navy-500 to-navy-600 rounded-full"
                style={{ width: `${member.uaeRelevance * 10}%` }}
              />
            </div>
          </div>
          {getSentimentBadge(member.sentiment)}
          {getAlertBadge(member.alertLevel)}
        </div>
      </div>
      {member.achievements && member.achievements.length > 0 && (
        <div className="mt-3 pt-3 border-t border-platinum-200/30 dark:border-platinum-700/30">
          <p className="text-xs font-medium text-platinum-700 dark:text-platinum-300 mb-1">Key Achievements</p>
          <ul className="space-y-0.5">
            {member.achievements.slice(0, 2).map((a, i) => (
              <li key={i} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1">
                <span className="h-3 w-3 mt-0.5 text-navy-500 shrink-0">•</span>
                <span className="truncate">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {member.controversies && member.controversies.length > 0 && (
        <div className="mt-2 pt-2 border-t border-red-200/30 dark:border-red-700/30">
          <p className="text-xs font-medium text-red-700 dark:text-red-300 mb-1">Controversies</p>
          <ul className="space-y-0.5">
            {member.controversies.slice(0, 2).map((c, i) => (
              <li key={i} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1">
                <span className="h-3 w-3 mt-0.5 text-red-500 shrink-0">•</span>
                <span>{c.year && `${c.year}: `}{c.detail}</span>
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

interface DubaiSectionProps {
  dubaiMembers: RoyalFamilyMember[]
}

export function DubaiSection({
  dubaiMembers,
}: DubaiSectionProps) {
  return (
    <div className="space-y-6">
      <motion.div {...fadeInUp}>
        <GlassPanel
          title="Dubai — Al Maktoum Family"
          description={`${dubaiMembers.length} documented members. Dynasty: Al Maktoum (branch of Al Falasi). Founded July 9, 1833.`}
          badge="Dubai"
          badgeVariant="default"
          icon={<Building2 className="h-5 w-5 text-navy-600" />}
        >
          <div className="mb-4 p-4 rounded-lg bg-navy-50/50 dark:bg-navy-900/10 border border-navy-200/30 dark:border-navy-700/30">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-navy text-white shrink-0">
                <Crown className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-800 dark:text-navy-300">House of Maktoum — Ruling Dynasty of Dubai</p>
                <p className="text-xs text-navy-700 dark:text-navy-400 mt-0.5">Founded July 9, 1833 by Maktoum bin Butti. Current Head: Sheikh Mohammed bin Rashid Al Maktoum. Controls Godolphin stable and substantial portions of Dubai government and economy.</p>
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {dubaiMembers.map((member) => (
          <motion.div key={member.id} {...fadeInUp}>
            <MemberCard member={member} />
          </motion.div>
        ))}
      </div>

      {/* Dubai Ruler Profile */}
      <motion.div {...fadeInUp}>
        <GlassPanel
          title="Sheikh Mohammed bin Rashid Al Maktoum — Ruler of Dubai"
          description="Vice President, Prime Minister of UAE. Visionary behind Dubai's modern transformation."
          badge="Ruler"
          badgeVariant="default"
          icon={<Crown className="h-5 w-5 text-navy-600" />}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">10/10</p>
              <p className="text-xs text-platinum-500">UAE Relevance</p>
            </div>
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">76</p>
              <p className="text-xs text-platinum-500">Age</p>
            </div>
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">2006</p>
              <p className="text-xs text-platinum-500">Ruler Since</p>
            </div>
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">Mixed</p>
              <p className="text-xs text-platinum-500">Sentiment</p>
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-platinum-800 dark:text-platinum-200 mb-2">Major Achievements</p>
              <ul className="space-y-1">
                {['Founded Emirates airline (1985)', 'Emirates Mars Mission (Hope) - successful 2021', 'Burj Khalifa and Palm Islands development', 'Created Dubai Internet City and TECOM', 'Dubai World Cup - world\'s richest horserace ($27M prize)'].map((a, i) => (
                  <li key={i} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-500 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-platinum-800 dark:text-platinum-200 mb-2">Space Exploration</p>
              <div className="p-3 rounded-lg bg-navy-50/50 dark:bg-navy-900/20 border border-navy-200/30 dark:border-navy-700/30">
                <p className="text-xs text-navy-700 dark:text-navy-300 italic">
                  &ldquo;The Mars mission would send a message of optimism to millions of young Arabs&ldquo;
                </p>
                <p className="text-xs text-navy-600 dark:text-navy-400 mt-1">— Sheikh Mohammed bin Rashid Al Maktoum</p>
              </div>
              <div className="mt-2">
                <p className="text-xs text-platinum-600 dark:text-platinum-400">Estimated wealth: <strong>$14 billion</strong></p>
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </div>
  )
}
