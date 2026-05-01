import { Metadata } from 'next'
import { GlassPanel } from '@/components/ui/glass-panel'
import { Button } from '@/components/ui/button'
import { BookOpen, LayoutDashboard, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support | UAE NDIP - Clairvoyance-CX by CryptoMize',
  description: 'Get help and support for the UAE National Digital Intelligence Platform (Clairvoyance-CX). A CryptoMize Product. ndip.dossier.li',
  openGraph: {
    title: 'Support Center | UAE National Digital Intelligence Platform',
    description: 'Get help and support for the UAE National Digital Intelligence Platform (Clairvoyance-CX). A CryptoMize Product.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support | UAE NDIP - Clairvoyance-CX',
    description: 'Get help and support for UAE National Digital Intelligence Platform.',
  },
}

const supportCategories = [
  {
    title: 'Getting Started',
    icon: '🚀',
    items: [
      'Platform overview and navigation',
      'Setting up your dashboard',
      'Understanding the ten intelligence sections',
      'First-time configuration',
    ],
  },
  {
    title: 'Platform Sections',
    icon: '⚡',
    items: [
      'Entity Intelligence — officials, royal, media',
      'Topics & Issues — economy, security, technology',
      'Crisis Management — alerts, Phoenix Protocol',
      'Social Media — cross-platform monitoring',
    ],
  },
  {
    title: 'Technical Issues',
    icon: '🔧',
    items: [
      'Troubleshooting connection issues',
      'Data synchronization problems',
      'API access and authentication',
      'Performance optimization',
    ],
  },
  {
    title: 'Security & Compliance',
    icon: '🔒',
    items: [
      'UAE Federal data privacy compliance',
      'Data security and access control',
      'Audit logs and monitoring',
      'Data sovereignty requirements',
    ],
  },
]

const faqs = [
  {
    q: 'What is the UAE National Digital Intelligence Platform?',
    a: 'Clairvoyance-CX is the UAE\'s premier digital intelligence platform — a CryptoMize product — delivering comprehensive insights across ten integrated sections — Entity Intelligence, Topics & Issues, Crisis Management, Social Media, Multi-Lingual, Stakeholders, Historical, Trends & Sentiment, Monitoring, and Verification — for national decision-makers.',
  },
  {
    q: 'How do I access the different sections?',
    a: 'Use the sidebar navigation menu, press ⌘K (Cmd+K) to open the command palette, or use the quick navigation links in the Dashboard Hub.',
  },
  {
    q: 'Where is my data stored?',
    a: 'All data is stored in UAE Federal Cloud infrastructure (Abu Dhabi), ensuring complete data sovereignty and compliance with UAE Federal Decree-Law No. 45 of 2021.',
  },
  {
    q: 'What security standards does the platform maintain?',
    a: 'Our platform is built on UAE Federal intelligence standards with complete data residency enforcement and compliance with UAE Cybercrime Law.',
  },
  {
    q: 'How do I export data from a dashboard section?',
    a: 'Use the Export button available in any dashboard section to export data in CSV, JSON, or PNG formats.',
  },
]

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-rajdhani font-bold text-platinum-500-900 mb-4">Support Center</h1>
        <p className="text-xl text-platinum-500-600 max-w-2xl mx-auto">
          Find answers, get help, and connect with our support team for the UAE National Digital Intelligence Platform
        </p>
      </div>

      {/* Quick Help */}
      <div className="mb-12">
        <GlassPanel className="p-8">
          <h2 className="text-2xl font-rajdhani font-bold text-navy-500-900 mb-6">Quick Help</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/docs">
              <Button
                variant="outline"
                className="h-auto flex-col gap-3 p-6 w-full"
              >
                <BookOpen className="h-5 w-5" />
                <div className="text-center">
                  <div className="font-semibold">Documentation</div>
                  <div className="text-xs text-platinum-500-600">Browse guides</div>
                </div>
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="h-auto flex-col gap-3 p-6 w-full"
              >
                <LayoutDashboard className="h-5 w-5" />
                <div className="text-center">
                  <div className="font-semibold">Dashboard</div>
                  <div className="text-xs text-platinum-500-600">Go to platform</div>
                </div>
              </Button>
            </Link>
            <a href="mailto:support@ndip.dossier.li">
              <Button
                variant="outline"
                className="h-auto flex-col gap-3 p-6 w-full"
              >
                <Mail className="h-5 w-5" />
                <div className="text-center">
                  <div className="font-semibold">Email Support</div>
                  <div className="text-xs text-platinum-500-600">Response within 24h</div>
                </div>
              </Button>
            </a>
          </div>
        </GlassPanel>
      </div>

      {/* Support Categories */}
      <div className="mb-12">
        <h2 className="text-3xl font-rajdhani font-bold text-navy-500-900 mb-6">Support Categories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {supportCategories.map((category) => (
            <GlassPanel key={category.title} className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-xl font-semibold font-rajdhani text-navy-500-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-platinum-500-700 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-3xl font-rajdhani font-bold text-navy-500-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <GlassPanel key={idx} className="p-6">
              <h3 className="text-lg font-semibold font-rajdhani text-navy-500-900 mb-2">{faq.q}</h3>
              <p className="text-platinum-500-700">{faq.a}</p>
            </GlassPanel>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div>
        <GlassPanel className="p-8 bg-gradient-to-br from-navy-50 to-indigo-50">
          <h2 className="text-2xl font-rajdhani font-bold text-navy-500-900 mb-4">Still need help?</h2>
          <p className="text-platinum-500-700 mb-6">
            Our support team is available to assist you with any questions or issues.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm text-platinum-500-600 mb-1">Email</div>
              <div className="font-semibold text-navy-500-900">support@ndip.dossier.li</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm text-platinum-500-600 mb-1">Phone</div>
              <div className="font-semibold text-navy-500-900">(+91) 9999 455 667</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-sm text-platinum-500-600 mb-1">Location</div>
              <div className="font-semibold text-navy-500-900">New Delhi, India</div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  )
}
