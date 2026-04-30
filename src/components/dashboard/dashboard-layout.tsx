'use client'

import * as React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { CommandPalette, useCommandPalette } from './command-palette'
import {
  Activity,
  Brain,
  ChevronDown,
  ChevronRight,
  Clock,
  Globe,
  Home,
  Radar,
  Rocket,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Command,
  Bell,
  PanelLeftClose,
  PanelLeftOpen,
  Github,
  Twitter,
  Linkedin,
  FileText,
  Mail,
  Shield,
  Heart,
  Eye,
} from 'lucide-react'

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  color?: string
  children?: NavItem[]
}

// Platform-specific color themes
const platformColors = {
  gold: { primary: '#D4AF37', secondary: '#FEF3C7', gradient: 'from-yellow-500 to-amber-600', glow: 'rgba(212, 175, 55, 0.3)' },
  navy: { primary: '#1E3A5F', secondary: '#E0E7FF', gradient: 'from-blue-600 to-blue-800', glow: 'rgba(30, 58, 95, 0.3)' },
  platinum: { primary: '#64748B', secondary: '#F1F5F9', gradient: 'from-slate-400 to-slate-600', glow: 'rgba(148, 163, 184, 0.3)' },
  red: { primary: '#DC2626', secondary: '#FEE2E2', gradient: 'from-red-500 to-red-700', glow: 'rgba(220, 38, 38, 0.3)' },
  emerald: { primary: '#059669', secondary: '#D1FAE5', gradient: 'from-emerald-500 to-emerald-700', glow: 'rgba(5, 150, 105, 0.3)' },
}

const navigation: NavItem[] = [
  {
    title: 'Dashboard Home',
    href: '/dashboard',
    icon: Home,
    color: 'gold',
  },
  {
    title: 'ENTITY INTELLIGENCE',
    href: '/dashboard/entity/overview',
    icon: Shield,
    badge: '12 Pages',
    color: 'gold',
    children: [
      { title: 'Overview', href: '/dashboard/entity/overview', icon: Activity, color: 'gold' },
      { title: 'Federal Officials', href: '/dashboard/entity/officials', icon: Activity, color: 'gold' },
      { title: 'Federal Officials (Full)', href: '/dashboard/entity/federal-officials', icon: Activity, color: 'gold' },
      { title: 'Royal Family', href: '/dashboard/entity/royal', icon: Activity, color: 'gold' },
      { title: 'Media', href: '/dashboard/entity/media', icon: Activity, color: 'gold' },
      { title: 'Journalists', href: '/dashboard/entity/journalists', icon: Activity, color: 'gold' },
      { title: 'Influencers', href: '/dashboard/entity/influencers', icon: Activity, color: 'gold' },
      { title: 'Corporate', href: '/dashboard/entity/corporate', icon: Activity, color: 'gold' },
      { title: 'Intl Orgs', href: '/dashboard/entity/intl-orgs', icon: Activity, color: 'gold' },
      { title: 'Infrastructure', href: '/dashboard/entity/infrastructure', icon: Activity, color: 'gold' },
      { title: 'Events', href: '/dashboard/entity/events', icon: Activity, color: 'gold' },
      { title: 'Emirate Entities', href: '/dashboard/entity/emirate-entities', icon: Activity, color: 'gold' },
    ],
  },
  {
    title: 'TOPICS & ISSUES',
    href: '/dashboard/topics/politics',
    icon: Globe,
    badge: '20 Pages',
    color: 'platinum',
    children: [
      { title: 'Politics & Governance', href: '/dashboard/topics/politics', icon: Globe, color: 'platinum' },
      { title: 'Economy & Business', href: '/dashboard/topics/economy', icon: Globe, color: 'gold' },
      { title: 'Security & Defense', href: '/dashboard/topics/security', icon: Globe, color: 'red' },
      { title: 'Culture & Society', href: '/dashboard/topics/culture', icon: Globe, color: 'platinum' },
      { title: 'Environment', href: '/dashboard/topics/environment', icon: Globe, color: 'emerald' },
      { title: 'International', href: '/dashboard/topics/international', icon: Globe, color: 'platinum' },
      { title: 'Media \& Comms', href: '/dashboard/topics/media', icon: Globe, color: 'platinum' },
      { title: 'Technology', href: '/dashboard/topics/technology', icon: Globe, color: 'gold' },
      { title: 'Sports', href: '/dashboard/topics/sports', icon: Globe, color: 'platinum' },
      { title: 'Healthcare', href: '/dashboard/topics/healthcare', icon: Globe, color: 'emerald' },
      { title: 'Education', href: '/dashboard/topics/education', icon: Globe, color: 'platinum' },
      { title: 'Energy', href: '/dashboard/topics/energy', icon: Globe, color: 'gold' },
      { title: 'Tourism', href: '/dashboard/topics/tourism', icon: Globe, color: 'gold' },
      { title: 'Real Estate', href: '/dashboard/topics/realestate', icon: Globe, color: 'gold' },
      { title: 'Food Security', href: '/dashboard/topics/foodsecurity', icon: Globe, color: 'emerald' },
      { title: 'Transportation', href: '/dashboard/topics/transportation', icon: Globe, color: 'gold' },
      { title: 'Legal \& Regulatory', href: '/dashboard/topics/legal', icon: Globe, color: 'platinum' },
      { title: 'Labor \& Employment', href: '/dashboard/topics/labor', icon: Globe, color: 'platinum' },
      { title: 'Demographics', href: '/dashboard/topics/demographics', icon: Globe, color: 'platinum' },
      { title: 'Religion', href: '/dashboard/topics/religion', icon: Globe, color: 'platinum' },
    ],
  },
  {
    title: 'CRISIS & PHOENIX',
    href: '/dashboard/crisis/overview',
    icon: Target,
    badge: '14 Pages',
    color: 'red',
    children: [
      { title: 'Crisis Overview', href: '/dashboard/crisis/overview', icon: Target, color: 'red' },
      { title: 'Geopolitical', href: '/dashboard/crisis/geopolitical', icon: Target, color: 'red' },
      { title: 'Terrorism', href: '/dashboard/crisis/terrorism', icon: Target, color: 'red' },
      { title: 'Cybersecurity', href: '/dashboard/crisis/cyber', icon: Target, color: 'red' },
      { title: 'Climate', href: '/dashboard/crisis/climate', icon: Target, color: 'emerald' },
      { title: 'Economic', href: '/dashboard/crisis/economic', icon: Target, color: 'gold' },
      { title: 'Health', href: '/dashboard/crisis/health', icon: Target, color: 'emerald' },
      { title: 'Humanitarian', href: '/dashboard/crisis/humanitarian', icon: Target, color: 'platinum' },
      { title: 'Phoenix Protocol', href: '/dashboard/crisis/phoenix', icon: Target, color: 'red' },
      { title: 'Crisis Timeline', href: '/dashboard/crisis/timeline', icon: Target, color: 'red' },
      { title: 'Crisis Alerts', href: '/dashboard/crisis/alerts', icon: Target, color: 'red' },
      { title: 'Regional', href: '/dashboard/crisis/regional', icon: Target, color: 'red' },
      { title: 'Energy', href: '/dashboard/crisis/energy', icon: Target, color: 'gold' },
      { title: 'Supply Chain', href: '/dashboard/crisis/supplychain', icon: Target, color: 'gold' },
    ],
  },
  {
    title: 'SOCIAL MEDIA',
    href: '/dashboard/social/overview',
    icon: Radar,
    badge: '18 Pages',
    color: 'navy',
    children: [
      { title: 'Social Overview', href: '/dashboard/social/overview', icon: Radar, color: 'navy' },
      { title: 'TikTok', href: '/dashboard/social/tiktok', icon: Radar, color: 'navy' },
      { title: 'Twitter/X', href: '/dashboard/social/twitter-x', icon: Radar, color: 'navy' },
      { title: 'Instagram', href: '/dashboard/social/instagram', icon: Radar, color: 'navy' },
      { title: 'LinkedIn', href: '/dashboard/social/linkedin', icon: Radar, color: 'navy' },
      { title: 'Facebook', href: '/dashboard/social/facebook', icon: Radar, color: 'navy' },
      { title: 'YouTube', href: '/dashboard/social/youtube', icon: Radar, color: 'navy' },
      { title: 'WhatsApp', href: '/dashboard/social/whatsapp', icon: Radar, color: 'navy' },
      { title: 'Telegram', href: '/dashboard/social/telegram', icon: Radar, color: 'navy' },
      { title: 'Snapchat', href: '/dashboard/social/snapchat', icon: Radar, color: 'navy' },
      { title: 'Reddit', href: '/dashboard/social/reddit', icon: Radar, color: 'navy' },
      { title: 'Threads', href: '/dashboard/social/threads', icon: Radar, color: 'navy' },
      { title: 'Influencers', href: '/dashboard/social/influencers', icon: Radar, color: 'gold' },
      { title: 'Sentiment', href: '/dashboard/social/sentiment', icon: Radar, color: 'platinum' },
      { title: 'Engagement', href: '/dashboard/social/engagement', icon: Radar, color: 'platinum' },
      { title: 'Hashtags', href: '/dashboard/social/hashtags', icon: Radar, color: 'platinum' },
      { title: 'Audience', href: '/dashboard/social/audience', icon: Radar, color: 'platinum' },
      { title: 'Content', href: '/dashboard/social/content', icon: Radar, color: 'platinum' },
      { title: 'Monitoring', href: '/dashboard/social/monitoring', icon: Radar, color: 'platinum' },
    ],
  },
  {
    title: 'MULTI-LINGUAL',
    href: '/dashboard/languages/overview',
    icon: Globe,
    badge: '12 Pages',
    color: 'emerald',
    children: [
      { title: 'Languages Overview', href: '/dashboard/languages/overview', icon: Globe, color: 'emerald' },
      { title: 'MSA (Arabic)', href: '/dashboard/languages/msa', icon: Globe, color: 'emerald' },
      { title: 'Emirati Arabic', href: '/dashboard/languages/emirati', icon: Globe, color: 'emerald' },
      { title: 'English', href: '/dashboard/languages/english', icon: Globe, color: 'emerald' },
      { title: 'French', href: '/dashboard/languages/french', icon: Globe, color: 'emerald' },
      { title: 'Gulf Arabic', href: '/dashboard/languages/gulf', icon: Globe, color: 'emerald' },
      { title: 'Levantine', href: '/dashboard/languages/levantine', icon: Globe, color: 'emerald' },
      { title: 'Maghrebi', href: '/dashboard/languages/maghrebi', icon: Globe, color: 'emerald' },
      { title: 'Hindi', href: '/dashboard/languages/hindi', icon: Globe, color: 'emerald' },
      { title: 'Urdu', href: '/dashboard/languages/urdu', icon: Globe, color: 'emerald' },
      { title: 'Tagalog', href: '/dashboard/languages/tagalog', icon: Globe, color: 'emerald' },
      { title: 'Asian Languages', href: '/dashboard/languages/asian', icon: Globe, color: 'emerald' },
    ],
  },
  {
    title: 'STAKEHOLDERS',
    href: '/dashboard/stakeholders/overview',
    icon: Users,
    badge: '14 Pages',
    color: 'platinum',
    children: [
      { title: 'Stakeholder Overview', href: '/dashboard/stakeholders/overview', icon: Users, color: 'platinum' },
      { title: 'Academics', href: '/dashboard/stakeholders/academics', icon: Users, color: 'platinum' },
      { title: 'Corporate', href: '/dashboard/stakeholders/corporate', icon: Users, color: 'gold' },
      { title: 'Civil Society', href: '/dashboard/stakeholders/civil-society', icon: Users, color: 'platinum' },
      { title: 'Diaspora', href: '/dashboard/stakeholders/diaspora', icon: Users, color: 'platinum' },
      { title: 'Intl Organizations', href: '/dashboard/stakeholders/intl-orgs', icon: Users, color: 'platinum' },
      { title: 'Intl Relations', href: '/dashboard/stakeholders/intl-relations', icon: Users, color: 'platinum' },
      { title: 'Labor', href: '/dashboard/stakeholders/labor', icon: Users, color: 'platinum' },
      { title: 'Media', href: '/dashboard/stakeholders/media', icon: Users, color: 'navy' },
      { title: 'NGOs', href: '/dashboard/stakeholders/ngos', icon: Users, color: 'platinum' },
      { title: 'Religious', href: '/dashboard/stakeholders/religious', icon: Users, color: 'platinum' },
      { title: 'Tribal', href: '/dashboard/stakeholders/tribal', icon: Users, color: 'platinum' },
      { title: 'Women', href: '/dashboard/stakeholders/women', icon: Users, color: 'platinum' },
      { title: 'Youth', href: '/dashboard/stakeholders/youth', icon: Users, color: 'platinum' },
    ],
  },
  {
    title: 'HISTORICAL',
    href: '/dashboard/historical/overview',
    icon: Clock,
    badge: '12 Pages',
    color: 'platinum',
    children: [
      { title: 'Historical Overview', href: '/dashboard/historical/overview', icon: Clock, color: 'platinum' },
      { title: 'UAE Founding', href: '/dashboard/historical/founding', icon: Clock, color: 'gold' },
      { title: 'Pre-Federation', href: '/dashboard/historical/pre-federation', icon: Clock, color: 'gold' },
      { title: 'Union \& Nation Building', href: '/dashboard/historical/union', icon: Clock, color: 'gold' },
      { title: 'Expansion Era', href: '/dashboard/historical/expansion', icon: Clock, color: 'gold' },
      { title: 'Oil Discovery', href: '/dashboard/historical/oil-discovery', icon: Clock, color: 'gold' },
      { title: 'Modernization', href: '/dashboard/historical/modernization', icon: Clock, color: 'gold' },
      { title: 'Reform Era', href: '/dashboard/historical/reform', icon: Clock, color: 'gold' },
      { title: 'Historical Crisis', href: '/dashboard/historical/crisis', icon: Clock, color: 'red' },
      { title: 'Recent History', href: '/dashboard/historical/recent', icon: Clock, color: 'platinum' },
      { title: 'Historical Timeline', href: '/dashboard/historical/timeline', icon: Clock, color: 'platinum' },
      { title: 'Future Projections', href: '/dashboard/historical/future', icon: Clock, color: 'platinum' },
    ],
  },
  {
    title: 'TRENDS & SENTIMENT',
    href: '/dashboard/trends/overview',
    icon: TrendingUp,
    badge: '28 Pages',
    color: 'gold',
    children: [
      { title: 'Trends Overview', href: '/dashboard/trends/overview', icon: TrendingUp, color: 'gold' },
      { title: 'Economic Trends', href: '/dashboard/trends/economic', icon: TrendingUp, color: 'gold' },
      { title: 'Social Trends', href: '/dashboard/trends/social', icon: TrendingUp, color: 'gold' },
      { title: 'Political Trends', href: '/dashboard/trends/political', icon: TrendingUp, color: 'platinum' },
      { title: 'Cultural Trends', href: '/dashboard/trends/cultural', icon: TrendingUp, color: 'gold' },
      { title: 'Media Trends', href: '/dashboard/trends/media', icon: TrendingUp, color: 'gold' },
      { title: 'AI \& Technology', href: '/dashboard/trends/ai-technology', icon: TrendingUp, color: 'gold' },
      { title: 'Climate Trends', href: '/dashboard/trends/climate', icon: TrendingUp, color: 'emerald' },
      { title: 'Geopolitical Trends', href: '/dashboard/trends/geopolitical', icon: TrendingUp, color: 'platinum' },
      { title: 'Regulatory Trends', href: '/dashboard/trends/regulatory', icon: TrendingUp, color: 'platinum' },
      { title: 'Demographic Trends', href: '/dashboard/trends/demographic', icon: TrendingUp, color: 'platinum' },
      { title: 'Generational Trends', href: '/dashboard/trends/generational', icon: TrendingUp, color: 'platinum' },
      { title: 'Environment Trends', href: '/dashboard/trends/environment', icon: TrendingUp, color: 'emerald' },
      { title: 'Tech Trends', href: '/dashboard/trends/tech', icon: TrendingUp, color: 'gold' },
      { title: 'Sentiment Overview', href: '/dashboard/sentiment/overview', icon: TrendingUp, color: 'platinum' },
      { title: 'Positive Sentiment', href: '/dashboard/sentiment/positive', icon: TrendingUp, color: 'emerald' },
      { title: 'Negative Sentiment', href: '/dashboard/sentiment/negative', icon: TrendingUp, color: 'red' },
      { title: 'Emotion Analysis', href: '/dashboard/sentiment/emotions', icon: TrendingUp, color: 'platinum' },
      { title: 'Sentiment Influencers', href: '/dashboard/sentiment/influencers', icon: TrendingUp, color: 'platinum' },
      { title: 'Criticism', href: '/dashboard/sentiment/criticism', icon: TrendingUp, color: 'red' },
      { title: 'Emotion', href: '/dashboard/sentiment/emotion', icon: TrendingUp, color: 'platinum' },
      { title: 'Fear', href: '/dashboard/sentiment/fear', icon: TrendingUp, color: 'red' },
      { title: 'Praise', href: '/dashboard/sentiment/praise', icon: TrendingUp, color: 'emerald' },
      { title: 'Sarcasm', href: '/dashboard/sentiment/sarcasm', icon: TrendingUp, color: 'platinum' },
      { title: 'Global Sentiment', href: '/dashboard/sentiment/global', icon: TrendingUp, color: 'platinum' },
      { title: 'Regional Sentiment', href: '/dashboard/sentiment/regional', icon: TrendingUp, color: 'platinum' },
      { title: 'Controversy', href: '/dashboard/sentiment/controversy', icon: TrendingUp, color: 'red' },
      { title: 'Narratives', href: '/dashboard/sentiment/narratives', icon: TrendingUp, color: 'platinum' },
    ],
  },
  {
    title: 'MONITORING',
    href: '/dashboard/monitoring/overview',
    icon: Eye,
    badge: '10 Pages',
    color: 'navy',
    children: [
      { title: 'Monitoring Overview', href: '/dashboard/monitoring/overview', icon: Eye, color: 'navy' },
      { title: 'Media Monitoring', href: '/dashboard/monitoring/media', icon: Eye, color: 'navy' },
      { title: 'Social Monitoring', href: '/dashboard/monitoring/social', icon: Eye, color: 'navy' },
      { title: 'Dark Web', href: '/dashboard/monitoring/dark-web', icon: Eye, color: 'red' },
      { title: 'Emerging Threats', href: '/dashboard/monitoring/emerging-threats', icon: Eye, color: 'red' },
      { title: 'Narrative Tracking', href: '/dashboard/monitoring/narrative', icon: Eye, color: 'navy' },
      { title: 'Weekly Reports', href: '/dashboard/monitoring/weekly', icon: Eye, color: 'navy' },
      { title: 'Crisis Monitoring', href: '/dashboard/monitoring/crisis', icon: Eye, color: 'red' },
      { title: 'Daily Briefs', href: '/dashboard/monitoring/daily', icon: Eye, color: 'navy' },
      { title: 'Gap Analysis', href: '/dashboard/monitoring/gap', icon: Eye, color: 'navy' },
      { title: 'Historical Analysis', href: '/dashboard/monitoring/historical', icon: Eye, color: 'platinum' },
    ],
  },
  {
    title: 'VERIFICATION',
    href: '/dashboard/verification/overview',
    icon: Shield,
    badge: '11 Pages',
    color: 'emerald',
    children: [
      { title: 'Verification Overview', href: '/dashboard/verification/overview', icon: Shield, color: 'emerald' },
      { title: 'Fact-Check', href: '/dashboard/verification/fact-check', icon: Shield, color: 'emerald' },
      { title: 'Fact-Check (Alt)', href: '/dashboard/verification/factcheck', icon: Shield, color: 'emerald' },
      { title: 'Bot Detection', href: '/dashboard/verification/bot', icon: Shield, color: 'emerald' },
      { title: 'Echo Chambers', href: '/dashboard/verification/echo', icon: Shield, color: 'emerald' },
      { title: 'Omission Analysis', href: '/dashboard/verification/omission', icon: Shield, color: 'emerald' },
      { title: 'Visual Forensics', href: '/dashboard/verification/visual', icon: Shield, color: 'emerald' },
      { title: 'Media Verification', href: '/dashboard/verification/media', icon: Shield, color: 'emerald' },
      { title: 'Source Credibility', href: '/dashboard/verification/source', icon: Shield, color: 'emerald' },
      { title: 'Ranking Analysis', href: '/dashboard/verification/ranking', icon: Shield, color: 'emerald' },
      { title: 'Coordinated Activity', href: '/dashboard/verification/coordinated', icon: Shield, color: 'emerald' },
    ],
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
    color: 'platinum',
  },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = React.useState<Set<string>>(new Set(['ENTITY INTELLIGENCE', 'TOPICS & ISSUES', 'CRISIS & PHOENIX']))
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  const toggleSection = (title: string) => {
    if (isCollapsed) return
    setOpenSections((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(title)) {
        newSet.delete(title)
      } else {
        newSet.add(title)
      }
      return newSet
    })
  }

  const getPlatformColor = (color?: string) => {
    switch (color) {
      case 'gold':
        return platformColors.gold
      case 'navy':
        return platformColors.navy
      case 'platinum':
        return platformColors.platinum
      case 'red':
        return platformColors.red
      case 'emerald':
        return platformColors.emerald
      default:
        return null
    }
  }

  return (
    <div
      className={cn(
        'flex h-full flex-col glass-premium transition-all duration-300 ease-in-out border-r border-white/20',
        isCollapsed ? 'w-20' : 'w-72',
        className
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
        {!isCollapsed ? (
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-premium-lg glow-navy">
              <Activity className="h-5 w-5" />
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-gold-500 border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold gradient-text">DOSSIER</span>
              <span className="text-[10px] uppercase tracking-widest text-platinum-500">National Intelligence</span>
            </div>
          </Link>
        ) : (
          <Link href="/" className="flex items-center justify-center w-full">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 text-white shadow-premium-lg glow-navy">
              <Activity className="h-5 w-5" />
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-gold-500 border-2 border-white" />
            </div>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8 text-platinum-500 hover:text-gold-700 hover:bg-gold-500/10 transition-colors"
        >
          {isCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <ScrollArea className={cn('flex-1 px-3 py-4', isCollapsed && 'px-2')}>
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
            const isOpen = openSections.has(item.title)
            const hasChildren = item.children && item.children.length > 0
            const platformColor = getPlatformColor(item.color)

            return (
              <div key={item.title}>
                {isCollapsed && hasChildren ? (
                  <Link
                    href={item.href}
                    className={cn(
                      'flex h-12 w-full items-center justify-center rounded-xl transition-all duration-200',
                      isActive
                        ? 'shadow-premium-md'
                        : 'hover:bg-white/10'
                    )}
                    style={
                      isActive && platformColor
                        ? {
                            background: `linear-gradient(135deg, ${platformColor.primary}15 0%, ${platformColor.primary}05 100%)`,
                            boxShadow: `0 4px 16px ${platformColor.glow}`,
                          }
                        : {}
                    }
                    title={item.title}
                  >
                    {isActive && platformColor ? (
                      <span style={{ color: platformColor.primary }}>
                        <item.icon className="h-5 w-5 flex-shrink-0 transition-colors" />
                      </span>
                    ) : (
                      <item.icon
                        className={cn(
                          'h-5 w-5 flex-shrink-0 transition-colors',
                          isActive ? 'text-white' : 'text-platinum-500'
                        )}
                      />
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={() => hasChildren && toggleSection(item.title)}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 relative overflow-hidden group',
                      isActive ? 'text-white' : 'text-platinum-600 hover:text-platinum-900 hover:bg-white/10'
                    )}
                    style={
                      isActive && platformColor
                        ? {
                            background: `linear-gradient(135deg, ${platformColor.primary} 0%, ${platformColor.primary}dd 100%)`,
                            boxShadow: `0 8px 24px ${platformColor.glow}`,
                          }
                        : {}
                    }
                  >
                    {/* Hover glow effect */}
                    {platformColor && !isActive && (
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${platformColor.primary}10 0%, transparent 100%)`,
                        }}
                      />
                    )}

                    {hasChildren ? (
                      <>
                        <div
                          className={cn(
                            'flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0 transition-all duration-200',
                            isActive
                              ? 'bg-white/20'
                              : 'bg-white/5 group-hover:bg-white/10'
                          )}
                        >
                          {isActive ? (
                            <item.icon className="h-5 w-5 text-white" />
                          ) : platformColor ? (
                            <span style={{ color: platformColor.primary }}>
                              <item.icon className="h-5 w-5" />
                            </span>
                          ) : (
                            <item.icon className="h-5 w-5 text-navy-500" />
                          )}
                        </div>
                        {!isCollapsed && (
                          <>
                            <span className="flex-1 text-left relative z-10">{item.title}</span>
                            {item.badge && (
                              <Badge
                                variant="secondary"
                                className="text-[10px] font-medium px-2 py-0.5 bg-white/10 hover:bg-white/20 text-white border-white/20 relative z-10"
                              >
                                {item.badge}
                              </Badge>
                            )}
                            {isOpen ? (
                              <ChevronDown className="h-4 w-4 flex-shrink-0 opacity-70 relative z-10" />
                            ) : (
                              <ChevronRight className="h-4 w-4 flex-shrink-0 opacity-70 relative z-10" />
                            )}
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <div
                          className={cn(
                            'flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0 transition-all duration-200',
                            isActive
                              ? 'bg-white/20'
                              : 'bg-white/5 group-hover:bg-white/10'
                          )}
                        >
                          {isActive ? (
                            <item.icon className="h-5 w-5 text-white" />
                          ) : platformColor ? (
                            <span style={{ color: platformColor.primary }}>
                              <item.icon className="h-5 w-5" />
                            </span>
                          ) : (
                            <item.icon className="h-5 w-5 text-navy-500" />
                          )}
                        </div>
                        {!isCollapsed && (
                          <Link href={item.href} className="flex-1 text-left relative z-10">
                            {item.title}
                          </Link>
                        )}
                      </>
                    )}
                  </button>
                )}

                {hasChildren && isOpen && !isCollapsed && (
                  <div className="mt-1 ml-14 space-y-0.5">
                    {item.children!.map((child) => {
                      const isChildActive = pathname === child.href
                      const childColor = getPlatformColor(child.color)

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 group relative overflow-hidden',
                            isChildActive ? 'text-white' : 'text-platinum-500 hover:text-platinum-700'
                          )}
                          style={
                            isChildActive && childColor
                              ? {
                                  background: `linear-gradient(135deg, ${childColor.primary} 0%, ${childColor.primary}cc 100%)`,
                                  boxShadow: `0 4px 12px ${childColor.glow}`,
                                }
                              : {}
                          }
                        >
                          {!isChildActive && childColor && (
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              style={{
                                background: `linear-gradient(135deg, ${childColor.primary}08 0%, transparent 100%)`,
                              }}
                            />
                          )}
                          {isChildActive ? (
                            <child.icon className="h-4 w-4 flex-shrink-0 relative z-10 text-white" />
                          ) : childColor ? (
                            <span style={{ color: childColor.primary }} className="relative z-10">
                              <child.icon className="h-4 w-4 flex-shrink-0" />
                            </span>
                          ) : (
                            <child.icon className="h-4 w-4 flex-shrink-0 relative z-10" />
                          )}
                          <span className="relative z-10">{child.title}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t border-white/10 p-4 space-y-2">
        {!isCollapsed && (
          <Button
            variant="ghost"
            asChild
            className="w-full justify-start text-platinum-500 hover:text-gold-700 hover:bg-gold-500/10 transition-all duration-200"
          >
            <Link href="/">
              <X className="mr-2 h-4 w-4" />
              Exit Dashboard
            </Link>
          </Button>
        )}
        {isCollapsed && (
          <Button
            variant="ghost"
            asChild
            size="icon"
            className="w-full h-10 text-platinum-500 hover:text-gold-700 hover:bg-gold-500/10 transition-all duration-200"
            title="Exit Dashboard"
          >
            <Link href="/">
              <X className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const commandPalette = useCommandPalette()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-bg-primary">
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Hidden on mobile by default, shown when menu is open */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <Sidebar />
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden min-w-0">
        <Header
          onOpenCommandPalette={() => commandPalette.setOpen(true)}
          onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
          mobileMenuOpen={mobileMenuOpen}
        />
        <main className="flex-1 overflow-y-auto">
          <div className="h-full p-4 lg:p-6">{children}</div>
        </main>
        <DashboardFooter />
      </div>
      <CommandPalette open={commandPalette.open} onOpenChange={commandPalette.setOpen} />
    </div>
  )
}

function Header({
  onOpenCommandPalette,
  onToggleMobileMenu,
  mobileMenuOpen,
}: {
  onOpenCommandPalette: () => void
  onToggleMobileMenu: () => void
  mobileMenuOpen: boolean
}) {
  return (
    <header className="glass-premium sticky top-0 z-50 h-16 border-b border-white/10 shadow-premium-sm">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6 gap-2">
        <div className="flex items-center gap-2 lg:gap-4 flex-1 min-w-0">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleMobileMenu}
            className="lg:hidden h-9 w-9 text-platinum-500 hover:text-gold-700 hover:bg-gold-500/10 transition-colors shrink-0"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>}
          </Button>

          <h1 className="text-xs lg:text-sm font-medium text-platinum-500 uppercase tracking-wider truncate">
            National Digital Intelligence Platform
          </h1>
          <Separator orientation="vertical" className="hidden sm:block h-6 bg-platinum-300/30" />
          <span className="hidden sm:inline text-xs lg:text-sm font-bold text-platinum-900 truncate">United Arab Emirates</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Command Palette Trigger */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onOpenCommandPalette}
            className="h-9 px-2 lg:px-3 text-platinum-500 hover:text-navy-600 hover:bg-navy-500/10 transition-all duration-200 gap-1 lg:gap-2"
          >
            <Command className="h-4 w-4" />
            <span className="hidden sm:inline text-sm">Search</span>
          </Button>

          <Separator orientation="vertical" className="hidden sm:block h-6 bg-platinum-300/30" />

          <Button variant="ghost" size="icon" className="h-9 w-9 text-platinum-500 hover:text-gold-700 hover:bg-gold-500/10 transition-colors relative shrink-0">
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex h-9 w-9 text-platinum-500 hover:text-navy-600 hover:bg-navy-500/10 transition-colors">
            <Settings className="h-4 w-4" />
          </Button>

          <div className="h-8 w-8 lg:h-9 lg:w-9 rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 text-white flex items-center justify-center text-xs lg:text-sm font-bold shadow-premium-md glow-navy cursor-pointer hover:scale-105 transition-transform shrink-0">
            AD
          </div>
        </div>
      </div>
    </header>
  )
}

function DashboardFooter() {
  return (
    <footer className="glass-premium border-t border-white/10 py-3 px-6">
      <div className="flex items-center justify-between">
        {/* Left Section - Version & Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-navy-500 to-navy-700 text-white">
              <Activity className="h-3 w-3" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold gradient-text">UAE NATIONAL INTELLIGENCE</span>
              <span className="text-[10px] text-platinum-500">v1.0.0</span>
            </div>
          </div>
          <Separator orientation="vertical" className="h-6 bg-platinum-300/30" />
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-platinum-500">Systems Operational</span>
          </div>
        </div>

        {/* Center Section - Quick Links */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/docs" className="flex items-center gap-1.5 text-xs text-platinum-500 hover:text-gold-700 transition-colors">
            <FileText className="h-3.5 w-3.5" />
            <span>Documentation</span>
          </Link>
          <Link href="/support" className="flex items-center gap-1.5 text-xs text-platinum-500 hover:text-gold-700 transition-colors">
            <Mail className="h-3.5 w-3.5" />
            <span>Support</span>
          </Link>
          <Link href="/privacy" className="flex items-center gap-1.5 text-xs text-platinum-500 hover:text-gold-700 transition-colors">
            <Shield className="h-3.5 w-3.5" />
            <span>Privacy</span>
          </Link>
        </div>

        {/* Right Section - Social & Copyright */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-7 w-7 text-platinum-400 hover:text-gold-700 hover:bg-gold-500/10 transition-colors">
              <Twitter className="h-3.5 w-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-platinum-400 hover:text-gold-700 hover:bg-gold-500/10 transition-colors">
              <Linkedin className="h-3.5 w-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-platinum-400 hover:text-gold-700 hover:bg-gold-500/10 transition-colors">
              <Github className="h-3.5 w-3.5" />
            </Button>
          </div>
          <Separator orientation="vertical" className="h-6 bg-platinum-300/30" />
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-platinum-400">
              © 2025 UAE National Intelligence Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
