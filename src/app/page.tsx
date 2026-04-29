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
                Healthcare Intelligence Platform v1.0
                <Sparkles className="ml-2 h-4 w-4" />
              </Badge>
            </div>

            {/* Main Title */}
            <h1 className="mx-auto max-w-4xl font-rajdhani text-balance text-6xl font-bold tracking-tight sm:text-8xl lg:text-9xl gradient-text-premium animate-fade-in">
              LITHVIK NEXUS
            </h1>

            {/* Subtitle */}
            <p className="mt-8 mx-auto max-w-3xl text-balance text-lg font-medium text-platinum-600 sm:text-xl leading-relaxed">
              Enterprise-grade healthcare analytics and intelligence platform designed for
              <span className="text-gold-600 font-semibold"> Abu Dhabi's most distinguished stakeholders</span>.
              Powered by three integrated platforms delivering unprecedented insights.
            </p>

            {/* Premium CTA Buttons */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="premium"
                className="group px-10 py-6 text-lg font-semibold shadow-premium-lg"
              >
                <Link href="/dashboard/clairvoyance-cx/executive-bridge">
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
                <Link href="https://github.com/lithvik-x/adphc/tree/main/docs" target="_blank" rel="noopener noreferrer">
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
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Gem className="h-5 w-5 text-gold-500" />
                <span>ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-navy-500" />
                <span>Data Residency: UAE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="px-6 py-20 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-gold-300/50 text-gold-700">
              <Sparkles className="mr-1 h-3 w-3" />
              Platform Ecosystem
            </Badge>
            <h2 className="font-rajdhani text-4xl font-bold tracking-tight sm:text-5xl gradient-text-premium">
              Three Platforms. One Ecosystem.
            </h2>
            <p className="mt-4 text-lg text-platinum-600 max-w-2xl mx-auto">
              An integrated cycle of detection, analysis, and action — delivering unprecedented capabilities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* CLAIRVOYANCE-CX */}
            <Card className="group relative overflow-hidden card-metallic-platinum border-2 transition-all duration-500 hover:shadow-premium-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-premium-lg group-hover:scale-110 transition-transform duration-300">
                  <Radar className="h-8 w-8" />
                </div>
                <CardTitle className="font-rajdhani text-2xl">CLAIRVOYANCE-CX™</CardTitle>
                <CardDescription className="text-base font-medium text-platinum-600">
                  The Omni-Sovereign Listening Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <p className="text-platinum-700 leading-relaxed">
                  Monitors <span className="font-bold text-platinum-900">52,401+ active sources</span> with 15-second update intervals.
                  Delivers 90-day early warning crisis prediction with unprecedented accuracy.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-platinum-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600">
                      <Shield className="h-4 w-4" />
                    </div>
                    <span className="font-medium">8 Intelligence Modules</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-platinum-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600">
                      <Globe className="h-4 w-4" />
                    </div>
                    <span className="font-medium">52,401+ Sources Monitored</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-platinum-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="font-medium">90-Day Early Warning</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="mt-4 w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white shadow-premium-md group-hover:shadow-premium-lg transition-all"
                >
                  <Link href="/dashboard/clairvoyance-cx/executive-bridge">
                    Explore Platform
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* PERCEPTION-X2 */}
            <Card className="group relative overflow-hidden card-metallic-platinum border-2 transition-all duration-500 hover:shadow-premium-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-premium-lg group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8" />
                </div>
                <CardTitle className="font-rajdhani text-2xl">PERCEPTION-X2™</CardTitle>
                <CardDescription className="text-base font-medium text-platinum-600">
                  The Narrative Engineering Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <p className="text-platinum-700 leading-relaxed">
                  Maps collective psyche using <span className="font-bold text-platinum-900">CRT and NLA</span>.
                  144-dimensional emotional mapping for surgical precision messaging.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-platinum-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                      <Target className="h-4 w-4" />
                    </div>
                    <span className="font-medium">11 Strategy Modules</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-platinum-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                      <BarChart3 className="h-4 w-4" />
                    </div>
                    <span className="font-medium">144-Dimensional Mapping</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-platinum-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Cognitive Resonance Tech</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600 text-white shadow-premium-md group-hover:shadow-premium-lg transition-all"
                >
                  <Link href="/dashboard/perception-x2/omniscient-intelligence">
                    Explore Platform
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* RICOCHET-CATALYST-X */}
            <Card className="group relative overflow-hidden card-metallic-platinum border-2 transition-all duration-500 hover:shadow-premium-2xl hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-premium-lg group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-8 w-8" />
                </div>
                <CardTitle className="font-rajdhani text-2xl">RICOCHET-CATALYST-X™</CardTitle>
                <CardDescription className="text-base font-medium text-platinum-600">
                  The Content Distribution Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <p className="text-platinum-700 leading-relaxed">
                  Deploys to <span className="font-bold text-platinum-900">15+ platforms simultaneously</span> in &lt;5 minutes.
                  <span className="font-bold text-platinum-900"> 900% average ROI</span>, 3-month payback.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-platinum-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                      <Activity className="h-4 w-4" />
                    </div>
                    <span className="font-medium">9 Distribution Modules</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-platinum-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="font-medium">15+ Platform Coverage</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-platinum-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                      <Flame className="h-4 w-4" />
                    </div>
                    <span className="font-medium">900% Average ROI</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="mt-4 w-full bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-700 hover:to-blue-600 text-white shadow-premium-md group-hover:shadow-premium-lg transition-all"
                >
                  <Link href="/dashboard/ricochet-catalyst-x/command-prime">
                    Explore Platform
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
              <div className="font-rajdhani text-5xl font-bold gradient-text-emerald">15+</div>
              <div className="mt-2 text-sm font-medium text-platinum-600">Social Platforms</div>
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
            {/* Platform Links */}
            <div>
              <h3 className="font-rajdhani text-lg font-bold text-platinum-900 mb-4">Platforms</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li><Link href="/dashboard/clairvoyance-cx/executive-bridge" className="hover:text-navy-600 transition-colors">CLAIRVOYANCE-CX</Link></li>
                <li><Link href="/dashboard/perception-x2/omniscient-intelligence" className="hover:text-navy-600 transition-colors">PERCEPTION-X2</Link></li>
                <li><Link href="/dashboard/ricochet-catalyst-x/command-prime" className="hover:text-navy-600 transition-colors">RICOCHET-CATALYST-X</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-rajdhani text-lg font-bold text-platinum-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li><Link href="https://github.com/lithvik-x/adphc/tree/main/docs" target="_blank" rel="noopener noreferrer" className="hover:text-navy-600 transition-colors">Documentation</Link></li>
                <li><Link href="/settings" className="hover:text-navy-600 transition-colors">Settings</Link></li>
              </ul>
            </div>

            {/* Compliance */}
            <div>
              <h3 className="font-rajdhani text-lg font-bold text-platinum-900 mb-4">Compliance</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li>SOC 2 Type II Certified</li>
                <li>ISO 27001 Compliant</li>
                <li>ADHICS v2.0</li>
                <li>GDPR Compliant</li>
              </ul>
            </div>

            {/* Data Residency */}
            <div>
              <h3 className="font-rajdhani text-lg font-bold text-platinum-900 mb-4">Data Sovereignty</h3>
              <ul className="space-y-2 text-sm text-platinum-600">
                <li>Primary: Azure UAE North (Abu Dhabi)</li>
                <li>Complete data residency enforced</li>
                <li>Federal Decree-Law No. 45 of 2021</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-platinum-200/50 pt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-platinum-500 mb-2">
              <Crown className="h-4 w-4 text-gold-500" />
              <span className="font-semibold">LITHVIK NEXUS</span>
              <Gem className="h-4 w-4 text-gold-500" />
            </div>
            <p className="text-sm text-platinum-500">
              © 2026 All rights reserved. | Abu Dhabi Healthcare Intelligence Platform
            </p>
            <p className="text-xs text-platinum-400 mt-2">
              Designed for distinguished stakeholders in healthcare governance
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
