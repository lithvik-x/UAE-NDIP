import { Metadata } from 'next'
import Link from 'next/link'
import { GlassPanel } from '@/components/ui/glass-panel'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Shield, Globe, Target, Radar, Users, Clock, TrendingUp, Eye, BookOpen, Languages, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation | UAE National Digital Intelligence Platform',
  description: 'Complete documentation for the UAE National Digital Intelligence Platform (Clairvoyance-CX). A CryptoMize Product.',
  openGraph: {
    title: 'Documentation | UAE National Digital Intelligence Platform',
    description: 'Complete documentation for the UAE National Digital Intelligence Platform (Clairvoyance-CX). A CryptoMize Product.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentation | UAE NDIP - Clairvoyance-CX',
    description: 'Complete documentation for the UAE National Digital Intelligence Platform.',
  },
}

const sections = [
  {
    title: 'Entity Intelligence',
    href: '/dashboard/entity/overview',
    icon: Shield,
    description: 'Federal officials, royal family, media, journalists, influencers, corporate entities, and international organizations.',
    gradient: 'from-gold-500 to-amber-600',
  },
  {
    title: 'Topics & Issues',
    href: '/dashboard/topics/politics',
    icon: Globe,
    description: 'Politics, economy, security, culture, environment, international relations, media, technology, healthcare, and more.',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'Crisis Management',
    href: '/dashboard/crisis/overview',
    icon: Target,
    description: 'Geopolitical, cybersecurity, climate, economic, health, humanitarian crises with Phoenix Protocol.',
    gradient: 'from-red-500 to-orange-600',
  },
  {
    title: 'Social Media',
    href: '/dashboard/social/overview',
    icon: Radar,
    description: 'Cross-platform monitoring across TikTok, Twitter/X, Instagram, LinkedIn, Facebook, YouTube, WhatsApp, Telegram, Snapchat, Reddit, and Threads.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Multi-Lingual',
    href: '/dashboard/languages/overview',
    icon: Languages,
    description: 'MSA Arabic, Emirati Arabic, English, French, Gulf Arabic, Levantine, Maghrebi, Hindi, Urdu, Tagalog, and Asian languages.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Stakeholders',
    href: '/dashboard/stakeholders/overview',
    icon: Users,
    description: 'Government, corporate, civil society, diaspora, NGOs, religious groups, tribal networks, youth, and women.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Historical',
    href: '/dashboard/historical/overview',
    icon: Clock,
    description: 'UAE founding, oil discovery, nation building, modernization, reform era, and future projections.',
    gradient: 'from-amber-500 to-yellow-600',
  },
  {
    title: 'Trends & Sentiment',
    href: '/dashboard/trends/overview',
    icon: TrendingUp,
    description: 'Cultural, economic, social, political, technological, environmental, and demographic trends with real-time sentiment analysis.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Monitoring',
    href: '/dashboard/monitoring/overview',
    icon: Eye,
    description: 'Real-time media monitoring, social listening, dark web surveillance, and emerging threat detection.',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    title: 'Verification',
    href: '/dashboard/verification/overview',
    icon: BookOpen,
    description: 'Fact-checking, bot detection, echo chamber analysis, omission analysis, visual forensics, and source credibility.',
    gradient: 'from-teal-500 to-emerald-600',
  },
]

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-12 text-center">
        <Badge variant="outline" className="mb-4 border-gold-300/50 text-gold-700">
          <Activity className="mr-1 h-3 w-3" />
          Documentation
        </Badge>
        <h1 className="text-5xl font-rajdhani font-bold text-platinum-500-900 mb-4">UAE National Digital Intelligence Platform</h1>
        <p className="text-xl text-platinum-500-600 max-w-2xl mx-auto">
          Clairvoyance-CX — A CryptoMize Product. Comprehensive intelligence for the United Arab Emirates. Ten integrated sections delivering situational awareness across all domains.
        </p>
      </div>

      <div className="mb-12">
        <GlassPanel className="p-8">
          <h2 className="text-3xl font-rajdhani font-bold text-navy-500-900 mb-4">Platform Overview</h2>
          <p className="text-platinum-500-700 mb-6 leading-relaxed">
            The UAE National Digital Intelligence Platform monitors, analyzes, and reports on all aspects of the UAE digital landscape — from government officials and corporate entities to social media sentiment and geopolitical trends. The platform processes data in 12 languages across 52,401+ active sources.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Dashboard Sections', value: '10', icon: Globe, color: 'gold' },
              { label: 'Languages Tracked', value: '12', icon: Languages, color: 'indigo' },
              { label: 'Active Sources', value: '52,401+', icon: Activity, color: 'emerald' },
            ].map(({ label, value, icon: Icon, color }) => (
              <div key={label} className={`bg-gradient-to-br from-${color}-50 to-${color}-100 p-6 rounded-xl border border-${color}-200`}>
                <Icon className={`h-8 w-8 text-${color}-600 mb-3`} />
                <div className="font-rajdhani text-3xl font-bold text-platinum-500-900">{value}</div>
                <div className="text-sm text-platinum-500-600 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-rajdhani font-bold text-navy-500-900 mb-6">Intelligence Sections</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map(({ title, href, icon: Icon, description, gradient }) => (
            <GlassPanel key={href} className="p-6">
              <div className="flex items-start gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-premium-md`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-rajdhani text-xl font-bold text-platinum-500-900 mb-1">{title}</h3>
                  <p className="text-sm text-platinum-500-600 leading-relaxed mb-3">{description}</p>
                  <Link href={href}>
                    <Button size="sm" variant="outline" className="text-xs">
                      Open Section
                    </Button>
                  </Link>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <GlassPanel className="p-6">
          <h3 className="text-xl font-rajdhani font-semibold text-navy-500-900 mb-3">Keyboard Shortcuts</h3>
          <div className="space-y-2 text-sm text-platinum-500-700">
            <div className="flex justify-between">
              <span>Command Palette</span>
              <kbd className="px-2 py-1 bg-platinum-100 rounded text-xs font-mono">⌘K</kbd>
            </div>
            <div className="flex justify-between">
              <span>Search</span>
              <kbd className="px-2 py-1 bg-platinum-100 rounded text-xs font-mono">/</kbd>
            </div>
            <div className="flex justify-between">
              <span>Close</span>
              <kbd className="px-2 py-1 bg-platinum-100 rounded text-xs font-mono">Esc</kbd>
            </div>
          </div>
        </GlassPanel>

        <GlassPanel className="p-6">
          <h3 className="text-xl font-rajdhani font-semibold text-navy-500-900 mb-3">Resources</h3>
          <div className="space-y-2">
            <Link href="/privacy" className="block text-sm text-platinum-500-700 hover:text-navy-500-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/support" className="block text-sm text-platinum-500-700 hover:text-navy-500-600 transition-colors">
              Support Center
            </Link>
            <Link href="/settings" className="block text-sm text-platinum-500-700 hover:text-navy-500-600 transition-colors">
              Platform Settings
            </Link>
          </div>
        </GlassPanel>
      </div>
    </div>
  )
}
