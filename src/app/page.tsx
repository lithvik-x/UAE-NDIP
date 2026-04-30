import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Activity,
  BarChart3,
  BookOpen,
  Brain,
  Flame,
  Globe,
  Radar,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Zap,
  Gem,
  Crown,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react'

const intelligenceSections = [
  {
    title: 'Entity Intelligence',
    description: 'Advanced entity detection and tracking',
    icon: Globe,
    href: '/dashboard/entity/overview',
    gradient: 'from-blue-500 to-cyan-500',
    bgClass: 'bg-blue-100',
    textClass: 'text-blue-600',
  },
  {
    title: 'Topics & Issues',
    description: 'Real-time topic monitoring and analysis',
    icon: BarChart3,
    href: '/dashboard/topics/politics',
    gradient: 'from-indigo-500 to-purple-500',
    bgClass: 'bg-indigo-100',
    textClass: 'text-indigo-600',
  },
  {
    title: 'Crisis Management',
    description: 'Early warning and rapid response system',
    icon: Shield,
    href: '/dashboard/crisis/overview',
    gradient: 'from-red-500 to-orange-500',
    bgClass: 'bg-red-100',
    textClass: 'text-red-600',
  },
  {
    title: 'Social Media',
    description: 'Cross-platform social intelligence',
    icon: Activity,
    href: '/dashboard/social/overview',
    gradient: 'from-pink-500 to-rose-500',
    bgClass: 'bg-pink-100',
    textClass: 'text-pink-600',
  },
  {
    title: 'Languages',
    description: 'Multi-language content processing',
    icon: Globe,
    href: '/dashboard/languages/overview',
    gradient: 'from-emerald-500 to-teal-500',
    bgClass: 'bg-emerald-100',
    textClass: 'text-emerald-600',
  },
  {
    title: 'Stakeholders',
    description: 'Stakeholder mapping and engagement',
    icon: Brain,
    href: '/dashboard/stakeholders/overview',
    gradient: 'from-violet-500 to-purple-500',
    bgClass: 'bg-violet-100',
    textClass: 'text-violet-600',
  },
  {
    title: 'Historical',
    description: 'Historical data and trend analysis',
    icon: BookOpen,
    href: '/dashboard/historical/overview',
    gradient: 'from-amber-500 to-yellow-500',
    bgClass: 'bg-amber-100',
    textClass: 'text-amber-600',
  },
  {
    title: 'Trends & Sentiment',
    description: 'Sentiment analysis and trend prediction',
    icon: Sparkles,
    href: '/dashboard/trends/overview',
    gradient: 'from-cyan-500 to-blue-500',
    bgClass: 'bg-cyan-100',
    textClass: 'text-cyan-600',
  },
  {
    title: 'Monitoring',
    description: 'Real-time monitoring and alerts',
    icon: Radar,
    href: '/dashboard/monitoring/overview',
    gradient: 'from-navy-500 to-blue-500',
    bgClass: 'bg-navy-100',
    textClass: 'text-navy-600',
  },
  {
    title: 'Verification',
    description: 'Source verification and fact-checking',
    icon: Target,
    href: '/dashboard/verification/overview',
    gradient: 'from-gold-500 to-amber-500',
    bgClass: 'bg-gold-100',
    textClass: 'text-gold-600',
  },
]

export default function HomePage() {
  return (
    <main className="flex-1 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:py-32 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-gold opacity-10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-navy opacity-10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        </div>

        <div className="mx-auto max-w-7xl relative">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="mb-8 inline-flex">
              <Badge
                variant="premium"
                className="px-6 py-2 text-sm font-semibold tracking-wide shadow-premium-md animate-float"
              >
                <Crown className="mr-2 h-4 w-4" />
                UAE National Digital Intelligence Platform v1.0
                <Sparkles className="ml-2 h-4 w-4" />
              </Badge>
            </div>

            {/* Main Title */}
            <h1 className="mx-auto max-w-4xl font-rajdhani text-balance text-6xl font-bold tracking-tight sm:text-8xl lg:text-9xl gradient-text-premium animate-fade-in">
              DOSSIER
            </h1>

            {/* Subtitle */}
            <p className="mt-8 mx-auto max-w-3xl text-balance text-lg font-medium text-platinum-600 sm:text-xl leading-relaxed">
              The UAE&apos;s premier digital intelligence platform delivering comprehensive insights for
              <span className="text-gold-600 font-semibold"> national decision-makers</span>.
              Powered by ten integrated intelligence sections delivering unprecedented situational awareness.
            </p>

            {/* Premium CTA Buttons */}
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
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-10 py-6 text-lg font-semibold border-2 border-gold-300/50 hover:bg-gold-50/50 hover:border-gold-400 text-platinum-700"
              >
                <Link href="https://github.com/uae-dossier/docs" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Documentation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-platinum-500">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-500" />
                <span>UAE Data Protection Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-navy-500" />
                <span>Data Residency: UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Gem className="h-5 w-5 text-gold-500" />
                <span>Federal Government Infrastructure</span>
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
              Intelligence Sections
            </h2>
            <p className="mt-4 text-lg text-platinum-600 max-w-2xl mx-auto">
              Ten integrated intelligence modules working in concert to deliver comprehensive digital situational awareness
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {intelligenceSections.map((section) => {
              const IconComponent = section.icon
              return (
                <Card
                  key={section.title}
                  className="group relative overflow-hidden card-metallic-platinum border-2 transition-all duration-500 hover:shadow-premium-2xl hover:-translate-y-2 hover:scale-[1.02]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500`} />
                  <CardHeader className="relative">
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${section.gradient} text-white shadow-premium-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <CardTitle className="font-rajdhani text-xl">{section.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-platinum-600">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${section.gradient} hover:opacity-90 text-white shadow-premium-md group-hover:shadow-premium-lg transition-all`}
                    >
                      <Link href={section.href}>
                        Explore Section
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Metrics - Premium Glass Cards */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent via-bg-secondary/50 to-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-navy-300/50 text-navy-700">
              <BarChart3 className="mr-1 h-3 w-3" />
              Platform Metrics
            </Badge>
            <h2 className="font-rajdhani text-4xl font-bold tracking-tight sm:text-5xl gradient-text-premium">
              Unprecedented Scale
            </h2>
            <p className="mt-4 text-lg text-platinum-600">
              Enterprise-grade capabilities delivering measurable results
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Metric 1 */}
            <div className="glass-premium-premium rounded-2xl p-8 border border-white/20 text-center transition-all duration-300 hover:shadow-premium-2xl hover:-translate-y-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-premium-md mx-auto">
                <BarChart3 className="h-7 w-7" />
              </div>
              <div className="font-rajdhani text-5xl font-bold gradient-text-indigo">300K+</div>
              <div className="mt-2 text-sm font-medium text-platinum-600">Tokens of Data</div>
            </div>

            {/* Metric 2 */}
            <div className="glass-premium-premium rounded-2xl p-8 border border-white/20 text-center transition-all duration-300 hover:shadow-premium-2xl hover:-translate-y-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-premium-md mx-auto">
                <Globe className="h-7 w-7" />
              </div>
              <div className="font-rajdhani text-5xl font-bold gradient-text-rose">52,401+</div>
              <div className="mt-2 text-sm font-medium text-platinum-600">Active Sources</div>
            </div>

            {/* Metric 3 */}
            <div className="glass-premium-premium rounded-2xl p-8 border border-white/20 text-center transition-all duration-300 hover:shadow-premium-2xl hover:-translate-y-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-premium-md mx-auto">
                <Activity className="h-7 w-7" />
              </div>
              <div className="font-rajdhani text-5xl font-bold gradient-text-emerald">18</div>
              <div className="mt-2 text-sm font-medium text-platinum-600">Platforms</div>
            </div>

            {/* Metric 4 */}
            <div className="glass-premium-premium rounded-2xl p-8 border border-white/20 text-center transition-all duration-300 hover:shadow-premium-2xl hover:-translate-y-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-premium-md mx-auto">
                <Sparkles className="h-7 w-7" />
              </div>
              <div className="font-rajdhani text-5xl font-bold gradient-text-cyan">120+</div>
              <div className="mt-2 text-sm font-medium text-platinum-600">Dashboard Pages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="border-t border-platinum-200/50 px-6 py-12 bg-gradient-to-b from-transparent to-bg-secondary/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {/* Intelligence Sections */}
            <div>
              <h3 className="font-rajdhani text-lg font-bold text-platinum-900 mb-4">Intelligence Sections</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li><Link href="/dashboard/entity/overview" className="hover:text-navy-600 transition-colors">Entity Intelligence</Link></li>
                <li><Link href="/dashboard/topics/politics" className="hover:text-navy-600 transition-colors">Topics & Issues</Link></li>
                <li><Link href="/dashboard/crisis/overview" className="hover:text-navy-600 transition-colors">Crisis Management</Link></li>
                <li><Link href="/dashboard/social/overview" className="hover:text-navy-600 transition-colors">Social Media</Link></li>
              </ul>
            </div>

            {/* More Sections */}
            <div>
              <h3 className="font-rajdhani text-lg font-bold text-platinum-900 mb-4">More Sections</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li><Link href="/dashboard/languages/overview" className="hover:text-navy-600 transition-colors">Languages</Link></li>
                <li><Link href="/dashboard/stakeholders/overview" className="hover:text-navy-600 transition-colors">Stakeholders</Link></li>
                <li><Link href="/dashboard/historical/overview" className="hover:text-navy-600 transition-colors">Historical</Link></li>
                <li><Link href="/dashboard/trends/overview" className="hover:text-navy-600 transition-colors">Trends & Sentiment</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-rajdhani text-lg font-bold text-platinum-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li><Link href="https://github.com/uae-dossier/docs" target="_blank" rel="noopener noreferrer" className="hover:text-navy-600 transition-colors">Documentation</Link></li>
                <li><Link href="/dashboard" className="hover:text-navy-600 transition-colors">Dashboard Hub</Link></li>
                <li><Link href="/settings" className="hover:text-navy-600 transition-colors">Settings</Link></li>
              </ul>
            </div>

            {/* Data Sovereignty */}
            <div>
              <h3 className="font-rajdhani text-lg font-bold text-platinum-900 mb-4">Data Sovereignty</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li>Primary: UAE Federal Cloud</li>
                <li>Complete data residency enforced</li>
                <li>Federal Decree-Law No. 45 of 2021</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-platinum-200/50 pt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-platinum-500 mb-2">
              <Crown className="h-4 w-4 text-gold-500" />
              <span className="font-semibold">UAE National Digital Intelligence Platform</span>
              <Gem className="h-4 w-4 text-gold-500" />
            </div>
            <p className="text-sm text-platinum-500">
              © 2026 UAE National Digital Intelligence Platform
            </p>
            <p className="text-xs text-platinum-400 mt-2">
              DOSSIER — Empowering national decision-making through digital intelligence
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
