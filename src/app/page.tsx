import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Activity,
  BarChart3,
  BookOpen,
  Brain,
  Globe,
  Radar,
  Shield,
  Sparkles,
  Target,
  ChevronRight,
  ArrowUpRight,
  Gem,
  Crown,
  Lock,
  CheckCircle2,
  Eye,
  Users,
  TrendingUp,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'UAE National Digital Intelligence Platform | Clairvoyance-CX',
  description: 'AI-powered digital intelligence platform for UAE Federal decision-makers. Ten integrated sections — Entity Intelligence, Crisis Management, Social Media, Multi-Lingual, Stakeholders, Historical, Trends & Sentiment, Monitoring, and Verification.',
  openGraph: {
    title: 'UAE National Digital Intelligence Platform | Clairvoyance-CX',
    description: 'AI-powered digital intelligence platform delivering real-time situational awareness for UAE Federal decision-makers.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const intelligenceSections = [
  {
    title: 'Entity Intelligence',
    description: 'Federal officials, royal family, media, corporate entities, and international organizations — tracked with AI-powered resolution across 52,401+ active sources.',
    icon: Shield,
    href: '/dashboard/entity/overview',
    gradient: 'from-blue-500 to-cyan-500',
    badge: '12 Pages',
  },
  {
    title: 'Topics & Issues',
    description: 'Politics, economy, security, culture, environment — real-time monitoring across 12 languages with sentiment analysis and trend prediction.',
    icon: BarChart3,
    href: '/dashboard/topics/politics',
    gradient: 'from-indigo-500 to-purple-500',
    badge: '20 Pages',
  },
  {
    title: 'Crisis Management',
    description: 'Early warning system with Phoenix Protocol — geopolitical, cybersecurity, climate, economic, and humanitarian crisis monitoring with automated alert tiers.',
    icon: Target,
    href: '/dashboard/crisis/overview',
    gradient: 'from-red-500 to-orange-500',
    badge: '14 Pages',
  },
  {
    title: 'Social Media',
    description: 'Cross-platform intelligence across TikTok, X, Instagram, LinkedIn, Facebook, YouTube, WhatsApp, Telegram, Snapchat, Reddit, and Threads.',
    icon: Activity,
    href: '/dashboard/social/overview',
    gradient: 'from-pink-500 to-rose-500',
    badge: '18 Pages',
  },
  {
    title: 'Multi-Lingual',
    description: 'Arabic (MSA, Emirati, Gulf, Levantine, Maghrebi), English, French, Hindi, Urdu, Tagalog, and major Asian languages — all processed natively.',
    icon: Globe,
    href: '/dashboard/languages/overview',
    gradient: 'from-emerald-500 to-teal-500',
    badge: '12 Pages',
  },
  {
    title: 'Stakeholders',
    description: 'Government ministries, corporate sector, civil society, diaspora communities, NGOs, tribal networks, youth organizations, and women\'s groups.',
    icon: Users,
    href: '/dashboard/stakeholders/overview',
    gradient: 'from-violet-500 to-purple-500',
    badge: '14 Pages',
  },
  {
    title: 'Historical',
    description: 'UAE founding, oil discovery, nation building, modernization, reform era — decades of contextual intelligence for pattern recognition.',
    icon: BookOpen,
    href: '/dashboard/historical/overview',
    gradient: 'from-amber-500 to-yellow-500',
    badge: '12 Pages',
  },
  {
    title: 'Trends & Sentiment',
    description: 'Cultural, economic, social, political, technological, environmental, and demographic trends with real-time sentiment analysis across all monitored platforms.',
    icon: TrendingUp,
    href: '/dashboard/trends/overview',
    gradient: 'from-cyan-500 to-blue-500',
    badge: '28 Pages',
  },
  {
    title: 'Monitoring',
    description: 'Real-time media monitoring, social listening, dark web surveillance, and emerging threat detection with configurable alert thresholds.',
    icon: Eye,
    href: '/dashboard/monitoring/overview',
    gradient: 'from-navy-500 to-blue-500',
    badge: '10 Pages',
  },
  {
    title: 'Verification',
    description: 'Fact-checking, bot detection, echo chamber analysis, omission analysis, visual forensics, and source credibility scoring — against a 52,401+ source database.',
    icon: Radar,
    href: '/dashboard/verification/overview',
    gradient: 'from-gold-500 to-amber-500',
    badge: '11 Pages',
  },
]

const platformPillars = [
  {
    label: 'Entity Resolution',
    detail: 'AI deduplication across 52K+ sources',
    icon: Brain,
  },
  {
    label: 'Crisis Early Warning',
    detail: 'Phoenix Protocol with tiered alerts',
    icon: Shield,
  },
  {
    label: 'Multi-Lingual',
    detail: 'Native processing across 12 languages',
    icon: Globe,
  },
  {
    label: 'Real-Time Sentiment',
    detail: 'Dynamic tracking with trend prediction',
    icon: TrendingUp,
  },
]

export default function HomePage() {
  return (
    <main className="flex-1 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
      {/* Hero Section */}
      <section className="relative px-6 py-28 lg:py-36 overflow-hidden">
        {/* Background orbs — ultra-slow, no jitter */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-0 left-1/4 w-[480px] h-[480px] bg-gradient-gold opacity-[0.07] rounded-full blur-3xl animate-pulse-slow will-change-transform"
            style={{ animationDelay: '0ms' }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[480px] h-[480px] bg-gradient-navy opacity-[0.07] rounded-full blur-3xl animate-pulse-slow will-change-transform"
            style={{ animationDelay: '4000ms' }}
          />
        </div>

        <div className="mx-auto max-w-7xl relative">
          <div className="text-center">
            {/* Classification Badge — NO animation, static elegant */}
            <div className="mb-8 inline-flex">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-400/40 bg-gradient-to-r from-amber-900/20 to-amber-800/10 shadow-[0_0_20px_rgba(245,158,11,0.12)]">
                <Lock className="h-3 w-3 text-amber-500 shrink-0" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-300">
                  UAE Federal&nbsp;&#47;&#47;&#47;&nbsp;Clairvoyance-CX&nbsp;&#47;&#47;&#47;&nbsp;Restricted
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="mx-auto max-w-4xl font-rajdhani text-balance text-6xl font-bold tracking-tight sm:text-8xl lg:text-9xl gradient-text-premium">
              Clairvoyance-CX
            </h1>

            {/* Subheading — improved contrast */}
            <p className="mt-8 mx-auto max-w-3xl text-balance text-base sm:text-lg font-medium text-platinum-600 leading-relaxed px-4">
              AI-powered digital intelligence platform delivering real-time situational awareness
              for UAE Federal decision-makers. Ten integrated sections — Entity Intelligence,
              Topics & Issues, Crisis Management, Social Media, Multi-Lingual, Stakeholders,
              Historical, Trends & Sentiment, Monitoring, and Verification.
            </p>

            {/* Platform Pillars */}
            <div className="mt-10 mx-auto max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-3 px-4">
              {platformPillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.label}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/50 border border-white/70 backdrop-blur-sm shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-amber-700 shrink-0" />
                    <div className="text-left">
                      <div className="text-xs font-semibold text-platinum-800 leading-tight">{pillar.label}</div>
                      <div className="text-[10px] text-platinum-500 leading-tight">{pillar.detail}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="premium"
                className="group px-10 py-6 text-lg font-semibold shadow-premium-lg"
              >
                <Link href="/dashboard">
                  <Activity className="mr-2 h-5 w-5" />
                  Launch Dashboard
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-10 py-6 text-lg font-semibold border-2 border-gold-300/50 hover:bg-gold-50/50 hover:border-gold-400 text-platinum-700"
              >
                <Link href="/docs">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Platform Documentation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Compliance Strip */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-platinum-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                <span>UAE Federal Decree-Law No. 45 of 2021</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                <span>Data Residency: Abu Dhabi (UAE North)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                <span>Federal Intelligence Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Sections */}
      <section className="px-6 py-20 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-gold-300/50 text-gold-700">
              <Sparkles className="mr-1 h-3 w-3" />
              Platform Ecosystem
            </Badge>
            <h2 className="font-rajdhani text-4xl font-bold tracking-tight sm:text-5xl gradient-text-premium">
              Ten Intelligence Sections
            </h2>
            <p className="mt-4 text-base text-platinum-600 max-w-2xl mx-auto px-4">
              Integrated intelligence modules operating across federal ministries, media networks,
              social platforms, and geopolitical domains — delivering comprehensive situational awareness.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {intelligenceSections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <Card
                  key={section.title}
                  className="group relative overflow-hidden card-metallic-platinum border-2 transition-all duration-500 hover:shadow-premium-2xl hover:-translate-y-1 hover:scale-[1.01]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500`} />
                  <CardHeader className="relative pb-2">
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${section.gradient} text-white shadow-premium-md group-hover:scale-105 transition-transform duration-300`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="text-[10px] tracking-wide shrink-0 mt-0.5">
                        {section.badge}
                      </Badge>
                    </div>
                    <CardTitle className="font-rajdhani text-lg text-platinum-900 leading-tight">{section.title}</CardTitle>
                    <CardDescription className="text-xs font-medium text-platinum-600 leading-relaxed mt-1.5">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative pt-0">
                    <Button
                      asChild
                      size="sm"
                      className={`w-full bg-gradient-to-r ${section.gradient} hover:opacity-90 text-white shadow-premium-sm text-xs group-hover:shadow-premium-md transition-all`}
                    >
                      <Link href={section.href}>
                        Open Section
                        <ChevronRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent via-bg-secondary/50 to-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-navy-300/50 text-navy-700">
              <BarChart3 className="mr-1 h-3 w-3" />
              Platform Capabilities
            </Badge>
            <h2 className="font-rajdhani text-4xl font-bold tracking-tight sm:text-5xl gradient-text-premium">
              Built for Federal Intelligence
            </h2>
            <p className="mt-4 text-base text-platinum-600">
              Enterprise-grade infrastructure aligned with UAE Federal standards
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: '52,401+',
                label: 'Active Intelligence Sources',
                sub: 'Government feeds, media, social platforms, and dark web surveillance',
                gradient: 'from-blue-500 to-cyan-500',
                icon: Globe,
              },
              {
                value: '12',
                label: 'Languages Natively Processed',
                sub: 'Arabic (5 dialects), English, French, Hindi, Urdu, Tagalog, Asian languages',
                gradient: 'from-indigo-500 to-purple-500',
                icon: Activity,
              },
              {
                value: '10',
                label: 'Integrated Intelligence Sections',
                sub: 'Entity, Topics, Crisis, Social, Languages, Stakeholders, Historical, Trends, Monitoring, Verification',
                gradient: 'from-emerald-500 to-teal-500',
                icon: Brain,
              },
              {
                value: '198',
                label: 'Dashboard Pages',
                sub: 'Deep-dive analytics, entity profiles, crisis dashboards, trend charts, and source verification',
                gradient: 'from-gold-500 to-amber-500',
                icon: Sparkles,
              },
            ].map(({ value, label, sub, gradient, icon: Icon }) => (
              <div
                key={label}
                className="glass-premium rounded-2xl p-6 border border-white/20 text-center transition-all duration-500 hover:shadow-premium-xl hover:-translate-y-1 group"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-premium-md mx-auto group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="font-rajdhani text-4xl font-bold gradient-text-premium mb-1">{value}</div>
                <div className="text-sm font-semibold text-platinum-800 mb-2 leading-tight">{label}</div>
                <div className="text-xs text-platinum-500 leading-relaxed">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-platinum-200/50 px-6 py-12 bg-gradient-to-b from-transparent to-bg-secondary/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div>
              <h3 className="font-rajdhani text-base font-bold text-platinum-900 mb-4">Intelligence Sections</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li><Link href="/dashboard/entity/overview" className="hover:text-amber-600 transition-colors">Entity Intelligence</Link></li>
                <li><Link href="/dashboard/topics/politics" className="hover:text-amber-600 transition-colors">Topics & Issues</Link></li>
                <li><Link href="/dashboard/crisis/overview" className="hover:text-amber-600 transition-colors">Crisis Management</Link></li>
                <li><Link href="/dashboard/social/overview" className="hover:text-amber-600 transition-colors">Social Media</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-rajdhani text-base font-bold text-platinum-900 mb-4">More Sections</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li><Link href="/dashboard/languages/overview" className="hover:text-amber-600 transition-colors">Multi-Lingual</Link></li>
                <li><Link href="/dashboard/stakeholders/overview" className="hover:text-amber-600 transition-colors">Stakeholders</Link></li>
                <li><Link href="/dashboard/historical/overview" className="hover:text-amber-600 transition-colors">Historical</Link></li>
                <li><Link href="/dashboard/trends/overview" className="hover:text-amber-600 transition-colors">Trends & Sentiment</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-rajdhani text-base font-bold text-platinum-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li><Link href="/docs" className="hover:text-amber-600 transition-colors">Documentation</Link></li>
                <li><Link href="/dashboard" className="hover:text-amber-600 transition-colors">Dashboard Hub</Link></li>
                <li><Link href="/support" className="hover:text-amber-600 transition-colors">Support Center</Link></li>
                <li><Link href="/privacy" className="hover:text-amber-600 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-rajdhani text-base font-bold text-platinum-900 mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li><a href="https://www.linkedin.com/in/CryptoMize" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">LinkedIn</a></li>
                <li><a href="https://twitter.com/CryptoMize" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">Twitter / X</a></li>
                <li><a href="https://cryptomize.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">CryptoMize.com</a></li>
                <li><a href="mailto:info@cryptomize.com" className="hover:text-amber-600 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-platinum-200/50 pt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-platinum-500 mb-2">
              <Crown className="h-4 w-4 text-amber-700" />
              <span className="font-bold">
                <span className="gradient-text-premium font-rajdhani">Clairvoyance-CX</span>
                <span className="text-platinum-400 font-normal ml-2">| ndip.dossier.li</span>
              </span>
              <Gem className="h-4 w-4 text-amber-700" />
            </div>
            <p className="text-sm text-platinum-500">
              A <span className="font-semibold text-platinum-700">CryptoMize</span> Product
            </p>
            <p className="text-xs text-platinum-400 mt-1.5">
              © 2026 CryptoMize. All rights reserved. | Group CEO: Lithvik Mukesh Sharma
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
