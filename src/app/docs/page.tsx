import { Metadata } from 'next'
import Link from 'next/link'
import { GlassPanel } from '@/components/ui/glass-panel'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Documentation | LITHVIK NEXUS',
  description: 'Complete documentation for LITHVIK NEXUS healthcare intelligence platform.',
}

const docs = [
  {
    platform: 'CLAIRVOYANCE-CX',
    tagline: 'The Omni-Sovereign Listening Platform',
    color: 'from-red-500 to-rose-600',
    icon: '📡',
    description: 'Detection & Intelligence Layer - Monitors 52,401+ active sources with 15-second update intervals',
    modules: [
      { name: 'Executive Bridge', path: '/dashboard/clairvoyance-cx/executive-bridge' },
      { name: 'Omni-Surveillance', path: '/dashboard/clairvoyance-cx/omni-surveillance' },
      { name: 'Crisis War Room', path: '/dashboard/clairvoyance-cx/crisis-war-room' },
      { name: 'Narrative Lab', path: '/dashboard/clairvoyance-cx/narrative-lab' },
      { name: 'Strategic Action', path: '/dashboard/clairvoyance-cx/strategic-action' },
      { name: 'Geo-Intelligence', path: '/dashboard/clairvoyance-cx/geo-intelligence' },
      { name: 'System Governance', path: '/dashboard/clairvoyance-cx/system-governance' },
      { name: 'Competitive Intel', path: '/dashboard/clairvoyance-cx/competitive-intel' },
    ],
  },
  {
    platform: 'PERCEPTION-X2',
    tagline: 'The Narrative Engineering Platform',
    color: 'from-indigo-500 to-purple-600',
    icon: '🧠',
    description: 'Analysis & Shaping Layer - Maps collective psyche using CRT and NLA',
    modules: [
      { name: 'Omniscient Intelligence', path: '/dashboard/perception-x2/omniscient-intelligence' },
      { name: 'Strategy & Targeting', path: '/dashboard/perception-x2/strategy-targeting' },
      { name: 'Production', path: '/dashboard/perception-x2/production' },
      { name: 'Influence', path: '/dashboard/perception-x2/influence' },
      { name: 'Operations', path: '/dashboard/perception-x2/operations' },
      { name: 'Analytics', path: '/dashboard/perception-x2/analytics' },
      { name: 'Governance', path: '/dashboard/perception-x2/governance' },
      { name: 'The Void Filler', path: '/dashboard/perception-x2/void-filler' },
    ],
  },
  {
    platform: 'RICOCHET-CATALYST-X',
    tagline: 'The Content Distribution Platform',
    color: 'from-cyan-400 to-blue-600',
    icon: '🚀',
    description: 'Action & Distribution Layer - Deploys to 15+ platforms simultaneously in <5 minutes',
    modules: [
      { name: 'Command Prime', path: '/dashboard/ricochet-catalyst-x/command-prime' },
      { name: 'Ricochet Distribution', path: '/dashboard/ricochet-catalyst-x/ricochet-distribution' },
      { name: 'Catalyst Optimization', path: '/dashboard/ricochet-catalyst-x/catalyst-optimization' },
      { name: 'Amplification & Viral', path: '/dashboard/ricochet-catalyst-x/amplification-viral' },
      { name: 'X-Factor Forensics', path: '/dashboard/ricochet-catalyst-x/x-factor-forensics' },
      { name: 'Phoenix Crisis Protocol', path: '/dashboard/ricochet-catalyst-x/phoenix-crisis' },
      { name: 'User Experience', path: '/dashboard/ricochet-catalyst-x/user-experience' },
      { name: 'Automated Logic Gates', path: '/dashboard/ricochet-catalyst-x/automated-logic' },
      { name: 'Global Kinetic Shell', path: '/dashboard/ricochet-catalyst-x/global-kinetic' },
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-platinum-900 mb-4">Documentation</h1>
        <p className="text-xl text-platinum-600 max-w-2xl mx-auto">
          Complete guide to the LITHVIK NEXUS healthcare intelligence platform ecosystem
        </p>
      </div>

      <div className="mb-12">
        <GlassPanel className="p-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Quick Start</h2>
          <p className="text-platinum-700 mb-6">
            The LITHVIK NEXUS platform consists of three integrated systems that work together in a detection → analysis → action cycle.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-red-200">
              <div className="text-4xl mb-3">📡</div>
              <h3 className="text-xl font-semibold text-red-900 mb-2">Detection</h3>
              <p className="text-red-700 text-sm">CLAIRVOYANCE-CX monitors 52,401+ sources in real-time</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">Analysis</h3>
              <p className="text-indigo-700 text-sm">PERCEPTION-X2 maps 144-dimensional emotional data</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold text-cyan-900 mb-2">Action</h3>
              <p className="text-cyan-700 text-sm">RICOCHET-CATALYST-X deploys to 15+ platforms instantly</p>
            </div>
          </div>
        </GlassPanel>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-navy-900">Platform Documentation</h2>

        {docs.map((platform) => (
          <GlassPanel key={platform.platform} className="overflow-hidden">
            <div className={`bg-gradient-to-r ${platform.color} p-8 text-white`}>
              <div className="flex items-start gap-4">
                <div className="text-5xl">{platform.icon}</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">{platform.platform}</h3>
                  <p className="text-lg opacity-90 mb-2">{platform.tagline}</p>
                  <p className="text-sm opacity-80">{platform.description}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-semibold text-platinum-900 mb-4">Modules</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {platform.modules.map((module) => (
                  <Link key={module.path} href={module.path}>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left"
                    >
                      {module.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <GlassPanel className="p-6">
          <h3 className="text-xl font-semibold text-navy-900 mb-3">Keyboard Shortcuts</h3>
          <div className="space-y-2 text-sm text-platinum-700">
            <div className="flex justify-between">
              <span>Command Palette</span>
              <kbd className="px-2 py-1 bg-platinum-100 rounded">⌘K</kbd>
            </div>
            <div className="flex justify-between">
              <span>Search</span>
              <kbd className="px-2 py-1 bg-platinum-100 rounded">/</kbd>
            </div>
            <div className="flex justify-between">
              <span>Close</span>
              <kbd className="px-2 py-1 bg-platinum-100 rounded">Esc</kbd>
            </div>
          </div>
        </GlassPanel>

        <GlassPanel className="p-6">
          <h3 className="text-xl font-semibold text-navy-900 mb-3">Resources</h3>
          <div className="space-y-2">
            <Link href="/privacy" className="block text-platinum-700 hover:text-navy-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/support" className="block text-platinum-700 hover:text-navy-600 transition-colors">
              Support Center
            </Link>
          </div>
        </GlassPanel>
      </div>
    </div>
  )
}
