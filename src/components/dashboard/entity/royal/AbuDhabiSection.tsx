'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { GlassCard, GlassPanel } from '@/components/ui/glass-panel'
import {
  Crown,
  Building2,
  CheckCircle2,
  DollarSign,
} from 'lucide-react'
import type { RoyalFamilyMember, WealthMetric } from '@/lib/data/entity/royal-family-data'

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
            <h4 className="font-semibold text-navy-500-900 dark:text-platinum-500-100 text-sm truncate">{member.name}</h4>
            {member.nameAr && (
              <span className="text-xs text-platinum-500-500 dark:text-platinum-500-400 font-arabic">{member.nameAr}</span>
            )}
          </div>
          <p className="text-xs text-platinum-500-600 dark:text-platinum-500-400 mt-0.5">{member.role}</p>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <Badge variant="outline" className="text-xs">{member.dynasty}</Badge>
            <Badge variant="outline" className="text-xs">{member.emirate}</Badge>
          </div>
          {member.age && (
            <p className="text-xs text-platinum-500-500 mt-1">Age: {member.age}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <div className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">{member.uaeRelevance}</div>
          <div className="w-16">
            <div className="h-1 bg-platinum-200 dark:bg-platinum-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gold-500 to-gold-600 rounded-full"
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
          <p className="text-xs font-medium text-platinum-500-700 dark:text-platinum-500-300 mb-1">Key Achievements</p>
          <ul className="space-y-0.5">
            {member.achievements.slice(0, 2).map((a, i) => (
              <li key={i} className="text-xs text-platinum-500-600 dark:text-platinum-500-400 flex items-start gap-1">
                <span className="h-3 w-3 mt-0.5 text-navy-500-500 shrink-0">•</span>
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
              <li key={i} className="text-xs text-platinum-500-600 dark:text-platinum-500-400 flex items-start gap-1">
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
              <li key={i} className="text-xs text-platinum-500-600 dark:text-platinum-500-400 flex items-start gap-1">
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

interface AbuDhabiSectionProps {
  abuDhabiMembers: RoyalFamilyMember[]
  wealthMetrics: WealthMetric[]
}

export function AbuDhabiSection({
  abuDhabiMembers,
  wealthMetrics,
}: AbuDhabiSectionProps) {
  return (
    <div className="space-y-6">
      <motion.div {...fadeInUp}>
        <GlassPanel
          title="Abu Dhabi — Al Nahyan Family"
          description={`${abuDhabiMembers.length} documented members. Dynasty: Al Nahyan (branch of Al Falahi). Founded 1761.`}
          badge="Abu Dhabi"
          badgeVariant="gold"
          icon={<Building2 className="h-5 w-5 text-gold-600" />}
        >
          <div className="mb-4 p-4 rounded-lg bg-gold-50/50 dark:bg-gold-900/10 border border-gold-200/30 dark:border-gold-700/30">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-white shrink-0">
                <Crown className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gold-800 dark:text-gold-300">House of Nahyan — Ruling Dynasty of Abu Dhabi</p>
                <p className="text-xs text-gold-700 dark:text-gold-400 mt-0.5">Founded 1761 by Dhiyab bin Isa Al Nahyan. Current Head: Sheikh Mohamed bin Zayed Al Nahyan. Total Assets: $1 trillion+. ADIA: world&apos;s 3rd largest SWF.</p>
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {abuDhabiMembers.map((member) => (
          <motion.div key={member.id} {...fadeInUp}>
            <MemberCard member={member} />
          </motion.div>
        ))}
      </div>

      {/* Abu Dhabi Ruler Profile */}
      <motion.div {...fadeInUp}>
        <GlassPanel
          title="Sheikh Mohamed bin Zayed Al Nahyan (MBZ) — President of UAE"
          description="De facto leader since 2014. Architect of Abraham Accords. Led UAE military modernization."
          badge="President"
          badgeVariant="gold"
          icon={<Crown className="h-5 w-5 text-gold-600" />}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-navy-500-900 dark:text-platinum-500-100">10/10</p>
              <p className="text-xs text-platinum-500-500">UAE Relevance</p>
            </div>
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-navy-500-900 dark:text-platinum-500-100">65</p>
              <p className="text-xs text-platinum-500-500">Age</p>
            </div>
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-navy-500-900 dark:text-platinum-500-100">2022</p>
              <p className="text-xs text-platinum-500-500">President Since</p>
            </div>
            <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Positive</p>
              <p className="text-xs text-platinum-500-500">Sentiment</p>
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-platinum-500-800 dark:text-platinum-500-200 mb-2">Key Achievements</p>
              <ul className="space-y-1">
                {['First nuclear power plant in Arab world (Barakah)', 'Key architect of Abraham Accords (2020)', 'Established Masdar renewable energy (2006)', 'Ghadan 21 Program - AED 50 billion (2018)', 'Led UAE "Little Sparta" military buildup'].map((a, i) => (
                  <li key={i} className="text-xs text-platinum-500-600 dark:text-platinum-500-400 flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-500 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-platinum-500-800 dark:text-platinum-500-200 mb-2">Wealth & Investments</p>
              <ul className="space-y-1">
                {wealthMetrics.slice(0, 4).map((w, i) => (
                  <li key={i} className="text-xs text-platinum-500-600 dark:text-platinum-500-400 flex items-start gap-1.5">
                    <DollarSign className="h-3.5 w-3.5 mt-0.5 text-gold-700 shrink-0" />
                    <span>{w.entity}: <strong>{w.amount}</strong></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </div>
  )
}
